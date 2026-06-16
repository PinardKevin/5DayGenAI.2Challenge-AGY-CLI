#!/usr/bin/env python3
"""
fetch_bq_releases.py

A script to fetch recent BigQuery release notes from the official Google Cloud RSS feed
and format them into a clean, readable Markdown file.

No external dependencies are required. Uses only Python standard library.
"""

import argparse
import re
import urllib.request
import urllib.error
import xml.etree.ElementTree as ET
from html.parser import HTMLParser
from datetime import datetime

DEFAULT_FEED_URL = "https://cloud.google.com/feeds/bigquery-release-notes.xml"
DEFAULT_OUTPUT_FILE = "bigquery_release_notes.md"

class BQReleaseNotesParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_link = False
        self.link_url = ""
        self.link_text = ""
        self.in_header = False
        self.header_text = ""
        self.list_depth = 0
        self.text_buffer = ""
        self.just_wrote_header = False

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)
        if tag in ('h1', 'h2', 'h3', 'h4', 'h5', 'h6'):
            self.in_header = True
            self.header_text = ""
        elif tag == 'a':
            self.in_link = True
            self.link_url = attrs_dict.get('href', '')
            self.link_text = ""
        elif tag in ('strong', 'b'):
            marker = '**'
            if self.in_link:
                self.link_text += marker
            else:
                self.text_buffer += marker
        elif tag in ('em', 'i'):
            marker = '*'
            if self.in_link:
                self.link_text += marker
            else:
                self.text_buffer += marker
        elif tag == 'code':
            marker = '`'
            if self.in_link:
                self.link_text += marker
            else:
                self.text_buffer += marker
        elif tag == 'ul':
            self.list_depth += 1
            self.text_buffer += "\n"
            self.just_wrote_header = False
        elif tag == 'ol':
            self.list_depth += 1
            self.text_buffer += "\n"
            self.just_wrote_header = False
        elif tag == 'li':
            # 2 spaces per depth level, plus 2 for the outer bullet indent
            indent = "  " * (self.list_depth + 1)
            self.text_buffer += f"\n{indent}- "
            self.just_wrote_header = False
        elif tag == 'p':
            if self.just_wrote_header:
                self.just_wrote_header = False
            else:
                self.text_buffer += "\n"

    def handle_endtag(self, tag):
        if tag in ('h1', 'h2', 'h3', 'h4', 'h5', 'h6'):
            self.in_header = False
            h_text = self.header_text.strip()
            if h_text:
                self.text_buffer += f"\n- **{h_text}**: "
                self.just_wrote_header = True
        elif tag == 'a':
            self.in_link = False
            clean_text = self.link_text.strip()
            if not clean_text:
                clean_text = self.link_url
            self.text_buffer += f"[{clean_text}]({self.link_url})"
        elif tag in ('strong', 'b'):
            marker = '**'
            if self.in_link:
                self.link_text += marker
            else:
                self.text_buffer += marker
        elif tag in ('em', 'i'):
            marker = '*'
            if self.in_link:
                self.link_text += marker
            else:
                self.text_buffer += marker
        elif tag == 'code':
            marker = '`'
            if self.in_link:
                self.link_text += marker
            else:
                self.text_buffer += marker
        elif tag in ('ul', 'ol'):
            self.list_depth -= 1
            self.text_buffer += "\n"
        elif tag == 'p':
            self.text_buffer += "\n"

    def handle_data(self, data):
        clean_data = re.sub(r'\s+', ' ', data)
        if self.in_header:
            self.header_text += clean_data
        elif self.in_link:
            self.link_text += clean_data
        else:
            self.text_buffer += clean_data

    def get_markdown(self):
        text = self.text_buffer
        text = re.sub(r'\n{3,}', '\n\n', text)
        
        raw_lines = text.split('\n')
        lines = []
        for line in raw_lines:
            line_str = line.strip()
            if not line_str:
                continue
            
            # Check if this is a nested list item (starts with spaces)
            if line.startswith("  "):
                leading_spaces = len(line) - len(line.lstrip())
                lines.append(" " * leading_spaces + line.lstrip())
            elif line_str.startswith("- "):
                lines.append(line_str)
            else:
                # Standalone text paragraph, indent if part of an existing bullet item
                if lines and (lines[-1].strip().startswith("-") or lines[-1].startswith("  ")):
                    lines.append(f"  {line_str}")
                else:
                    lines.append(f"- {line_str}")
        
        # Cleanup double bullets
        result = []
        for l in lines:
            l_clean = l.strip()
            if l_clean.startswith("- - "):
                result.append(l.replace("- - ", "- ", 1))
            elif l_clean.startswith("- - **"):
                result.append(l.replace("- - **", "- **", 1))
            else:
                result.append(l)
                
        return "\n".join(result)

def fetch_feed(url):
    print(f"Fetching BigQuery release notes from: {url}...")
    headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as response:
            return response.read()
    except urllib.error.URLError as e:
        print(f"Error: Failed to fetch the feed due to network error: {e}")
        raise
    except Exception as e:
        print(f"Error: An unexpected error occurred while fetching: {e}")
        raise

def parse_and_format(xml_data, limit=None):
    try:
        root = ET.fromstring(xml_data)
    except ET.ParseError as e:
        print(f"Error: Failed to parse XML. The feed content might be malformed: {e}")
        raise

    namespace = {"atom": "http://www.w3.org/2005/Atom"}
    
    # Get overall feed info
    feed_title = "BigQuery Release Notes"
    feed_updated = root.find("atom:updated", namespace)
    updated_str = feed_updated.text if feed_updated is not None else ""
    
    try:
        if updated_str:
            dt = datetime.fromisoformat(updated_str)
            updated_display = dt.strftime("%B %d, %Y")
        else:
            updated_display = datetime.now().strftime("%B %d, %Y")
    except ValueError:
        updated_display = updated_str
        
    markdown_lines = [
        f"# {feed_title}\n",
        f"> **Last Updated Feed**: {updated_display}  \n",
        f"> **Generated on**: {datetime.now().strftime('%B %d, %Y %I:%M %p')}  \n\n",
        "---\n\n"
    ]
    
    entries = root.findall("atom:entry", namespace)
    if limit is not None:
        entries = entries[:limit]
        
    for entry in entries:
        title_elem = entry.find("atom:title", namespace)
        date_str = title_elem.text if title_elem is not None else "Unknown Date"
        
        content_elem = entry.find("atom:content", namespace)
        html_content = content_elem.text if content_elem is not None else ""
        
        markdown_lines.append(f"## {date_str}\n\n")
        
        if html_content:
            parser = BQReleaseNotesParser()
            parser.feed(html_content)
            notes_markdown = parser.get_markdown()
            markdown_lines.append(notes_markdown)
        else:
            markdown_lines.append("- No content available for this update.")
            
        markdown_lines.append("\n\n")
        
    return "".join(markdown_lines)

def main():
    parser = argparse.ArgumentParser(
        description="Fetch recent BigQuery release notes and format them into a markdown file."
    )
    parser.add_argument(
        "-o", "--output",
        default=DEFAULT_OUTPUT_FILE,
        help=f"Path to the output Markdown file (default: {DEFAULT_OUTPUT_FILE})"
    )
    parser.add_argument(
        "-l", "--limit",
        type=int,
        default=None,
        help="Limit the number of recent release dates to fetch (default: all)"
    )
    parser.add_argument(
        "-f", "--feed-url",
        default=DEFAULT_FEED_URL,
        help=f"URL of the release notes Atom feed (default: {DEFAULT_FEED_URL})"
    )
    
    args = parser.parse_args()
    
    try:
        xml_data = fetch_feed(args.feed_url)
        formatted_md = parse_and_format(xml_data, limit=args.limit)
        
        with open(args.output, "w", encoding="utf-8") as f:
            f.write(formatted_md)
            
        print(f"Successfully generated release notes! Saved to: {args.output}")
    except Exception as e:
        print(f"Execution failed: {e}")

if __name__ == "__main__":
    main()

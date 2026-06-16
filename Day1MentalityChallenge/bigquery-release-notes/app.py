import urllib.request
import xml.etree.ElementTree as ET
import re
from flask import Flask, jsonify, render_template

app = Flask(__name__)

# Atom Namespace mapping
NS = {'atom': 'http://www.w3.org/2005/Atom'}

def html_to_text(html_content):
    """
    Converts HTML content to clean plaintext.
    Converts <a href="...">text</a> to 'text (URL)' and strips all other tags.
    """
    if not html_content:
        return ""
    # Convert hyperlinks to 'Text (URL)' format
    text = re.sub(r'<a[^>]*href="([^"]+)"[^>]*>(.*?)</a>', r'\2 (\1)', html_content)
    # Strip all other HTML tags
    text = re.sub(r'<[^>]*>', '', text)
    # Replace multiple spaces/newlines
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

def parse_release_notes():
    """
    Fetches the BigQuery Release Notes RSS feed, parses the XML,
    and splits entries into individual update items.
    """
    url = "https://docs.cloud.google.com/feeds/bigquery-release-notes.xml"
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
    req = urllib.request.Request(url, headers=headers)
    
    with urllib.request.urlopen(req) as response:
        xml_data = response.read()

    root = ET.fromstring(xml_data)
    entries = root.findall('atom:entry', NS)
    
    parsed_notes = []
    item_id_counter = 0

    for entry in entries:
        title_elem = entry.find('atom:title', NS)
        updated_elem = entry.find('atom:updated', NS)
        content_elem = entry.find('atom:content', NS)
        link_elem = entry.find('atom:link', NS)

        date_str = title_elem.text if title_elem is not None else "Unknown Date"
        updated_time = updated_elem.text if updated_elem is not None else ""
        raw_link = link_elem.attrib.get('href') if link_elem is not None else "https://cloud.google.com/bigquery/docs/release-notes"
        content_html = content_elem.text if content_elem is not None else ""

        if not content_html:
            continue

        # Split content by <h3> headers to extract individual updates within a single day
        blocks = re.split(r'(<h3>.*?</h3>)', content_html)
        
        if len(blocks) <= 1:
            # No h3 tags, treat the entire content as a single generic update
            clean_text = html_to_text(content_html)
            parsed_notes.append({
                'id': f"note_{item_id_counter}",
                'date': date_str,
                'updated': updated_time,
                'link': raw_link,
                'type': 'Update',
                'html': content_html,
                'text': clean_text
            })
            item_id_counter += 1
        else:
            # Alternating list: first item is preceding text (usually empty),
            # then <h3> header, then content body following that header.
            for i in range(1, len(blocks), 2):
                h3_tag = blocks[i]
                body_html = blocks[i+1] if i+1 < len(blocks) else ""

                # Strip HTML tags from heading to get the update type (e.g. "Feature", "Changed")
                update_type = re.sub(r'<[^>]*>', '', h3_tag).strip()
                clean_text = html_to_text(body_html)

                parsed_notes.append({
                    'id': f"note_{item_id_counter}",
                    'date': date_str,
                    'updated': updated_time,
                    'link': raw_link,
                    'type': update_type,
                    'html': body_html.strip(),
                    'text': clean_text
                })
                item_id_counter += 1

    return parsed_notes

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/notes')
def get_notes():
    try:
        notes = parse_release_notes()
        return jsonify({
            'success': True,
            'count': len(notes),
            'notes': notes
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

if __name__ == '__main__':
    # Bind to 127.0.0.1 on port 8000
    app.run(host='127.0.0.1', port=8000, debug=True)

# Gemini AI Chatbot Web Application

A premium, glassmorphic chatbot web application built using **FastAPI** (Python backend), the new **Google Gen AI SDK** (`google-genai`), and standard **HTML/CSS/JS** (frontend).

## Features
- **FastAPI Backend**: Serves files and handles API communication with the Gemini model.
- **Google Gen AI SDK**: Connects to the `gemini-2.5-flash` model with chat history support.
- **Glassmorphic UI**: Beautiful dark-mode aesthetic with outfits typography, gradient glows, hover transitions, and responsive layout.
- **Markdown Formatting**: Built-in support for rendering bold text, code blocks, lists, and links.
- **Presets & Reset**: Features preconfigured queries and a quick option to clear chat history.

## Setup Instructions

1. **Navigate to the Chatbot Folder**:
   ```bash
   cd chatbot
   ```

2. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Configure Environment Variables**:
   - Copy `.env.example` to `.env`.
   - Open `.env` and paste your Gemini API Key:
     ```env
     GEMINI_API_KEY=AIzaSy...
     ```

4. **Run the Application**:
   ```bash
   python app.py
   ```

5. **Open in Browser**:
   Open [http://127.0.0.1:8000](http://127.0.0.1:8000) in your web browser.

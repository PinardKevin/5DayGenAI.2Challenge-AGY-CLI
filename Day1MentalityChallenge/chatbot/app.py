import os
from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
from pydantic import BaseModel
from google import genai
from google.genai import types
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Gemini Chatbot Web App")

# Mount static files for HTML/CSS/JS
app.mount("/static", StaticFiles(directory="static"), name="static")

class MessageItem(BaseModel):
    role: str # "user" or "model"
    text: str

class ChatRequest(BaseModel):
    message: str
    history: list[MessageItem] = []

class ChatResponse(BaseModel):
    response: str

@app.get("/", response_class=HTMLResponse)
async def get_index():
    index_path = os.path.join("static", "index.html")
    if not os.path.exists(index_path):
        raise HTTPException(status_code=404, detail="Frontend index.html not found.")
    with open(index_path, "r", encoding="utf-8") as f:
        return f.read()

@app.post("/api/chat", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest):
    api_key = os.getenv("GEMINI_API_KEY")
    
    # Determine if we should operate in Mock Demo Mode
    is_mock_mode = (
        not api_key 
        or api_key.strip() == "" 
        or api_key.strip() == "your_api_key_here"
    )
    
    if is_mock_mode:
        # Mock Response Generation for offline testing without API key
        msg = request.message.lower().strip()
        if "quantum" in msg:
            mock_text = (
                "**Mock Demo Mode (No API Key)**:\n\n"
                "Quantum computing utilizes the principles of quantum mechanics to process information:\n\n"
                "- **Superposition**: Unlike classical bits (0 or 1), quantum bits (qubits) can exist in a superposition of both states simultaneously.\n"
                "- **Entanglement**: Qubits can become linked, where the state of one instantly influences another, regardless of distance.\n\n"
                "This allows quantum computers to solve complex problems (like cryptography or molecular modeling) exponentially faster than classical computers."
            )
        elif "prime" in msg or "python" in msg:
            mock_text = (
                "**Mock Demo Mode (No API Key)**:\n\n"
                "Here is a simple Python function to check if a number is prime:\n\n"
                "```python\n"
                "def is_prime(n):\n"
                "    if n <= 1:\n"
                "        return False\n"
                "    for i in range(2, int(n**0.5) + 1):\n"
                "        if n % i == 0:\n"
                "            return False\n"
                "    return True\n"
                "```\n\n"
                "This checks divisibility up to the square root of the number for efficiency."
            )
        elif "startup" in msg or "name" in msg:
            mock_text = (
                "**Mock Demo Mode (No API Key)**:\n\n"
                "Here are 5 eco-friendly tech startup name ideas:\n\n"
                "1. **VerdantByte**: Emphasizes green computing and software.\n"
                "2. **EcoSync**: Focuses on synchronization with nature.\n"
                "3. **TerraGrid**: Great for smart grid or clean energy tech.\n"
                "4. **BioStream**: Suggests natural flow and data pipelines.\n"
                "5. **CleanKernel**: A software-centric, green branding name."
            )
        else:
            mock_text = (
                f"**Mock Demo Mode (No API Key)**:\n\n"
                f"You sent: \"{request.message}\"\n\n"
                f"To connect to the real Gemini model, please configure the `GEMINI_API_KEY` in your `.env` file. "
                f"Otherwise, you can continue to use and test the UI in this offline mode."
            )
        return ChatResponse(response=mock_text)
        
    try:
        # Initialize Google Gen AI client
        client = genai.Client(api_key=api_key)
        
        # Build contents from history
        contents = []
        for msg in request.history:
            role = "user" if msg.role == "user" else "model"
            contents.append(
                types.Content(
                    role=role,
                    parts=[types.Part.from_text(text=msg.text)]
                )
            )
        
        # Append the new user prompt
        contents.append(
            types.Content(
                role="user",
                parts=[types.Part.from_text(text=request.message)]
            )
        )
        
        # Call the Gemini model
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=contents
        )
        
        return ChatResponse(response=response.text)
    except Exception as e:
        print(f"Error calling Gemini API: {e}")
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app:app", host="127.0.0.1", port=8000, reload=True)

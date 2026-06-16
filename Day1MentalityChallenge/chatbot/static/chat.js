document.addEventListener("DOMContentLoaded", () => {
    const chatForm = document.getElementById("chat-form");
    const userInput = document.getElementById("user-input");
    const messagesContainer = document.getElementById("messages-container");
    const clearChatBtn = document.getElementById("clear-chat");
    
    let chatHistory = []; // Tracks [{role: "user"|"model", text: "..."}]

    // Auto-grow textarea
    userInput.addEventListener("input", function() {
        this.style.height = "auto";
        this.style.height = (this.scrollHeight - 4) + "px";
    });

    // Handle form submit
    chatForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const text = userInput.value.trim();
        if (!text) return;
        
        sendMessage(text);
    });

    // Enter key sends message (Shift+Enter for newline)
    userInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            chatForm.dispatchEvent(new Event("submit"));
        }
    });

    // Clear chat button
    clearChatBtn.addEventListener("click", () => {
        if (confirm("Are you sure you want to clear the conversation?")) {
            chatHistory = [];
            messagesContainer.innerHTML = `
                <div class="welcome-message">
                    <div class="welcome-icon">
                        <i data-lucide="bot" size="48"></i>
                    </div>
                    <h2>Welcome to Gemini Chat</h2>
                    <p>Ask anything! I can help you write code, brainstorm ideas, analyze text, or just chat.</p>
                    <div class="preset-suggestions">
                        <button class="preset-btn" onclick="sendPreset('Explain the concept of quantum computing simply.')">
                            <i data-lucide="cpu" size="16"></i> Quantum Computing
                        </button>
                        <button class="preset-btn" onclick="sendPreset('Write a python function to check if a number is prime.')">
                            <i data-lucide="code-2" size="16"></i> Python Primality Test
                        </button>
                        <button class="preset-btn" onclick="sendPreset('Brainstorm 5 creative name ideas for an eco-friendly tech startup.')">
                            <i data-lucide="lightbulb" size="16"></i> Startup Names
                        </button>
                    </div>
                </div>
            `;
            lucide.createIcons();
        }
    });

    window.sendPreset = function(text) {
        sendMessage(text);
    };

    function sendMessage(text) {
        // Remove welcome screen if present
        const welcome = document.querySelector(".welcome-message");
        if (welcome) {
            welcome.remove();
        }

        // Add user message to UI and history
        appendMessage("user", text);
        chatHistory.push({ role: "user", text: text });

        // Reset input field
        userInput.value = "";
        userInput.style.height = "auto";

        // Show typing indicator
        const typingIndicator = appendTypingIndicator();

        // Scroll to bottom
        scrollToBottom();

        // Make API request
        fetch("/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: text,
                history: chatHistory
            })
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => { throw new Error(err.detail || "Request failed"); });
            }
            return response.json();
        })
        .then(data => {
            // Remove typing indicator
            typingIndicator.remove();

            // Append bot response to UI and history
            const botText = data.response;
            appendMessage("model", botText);
            chatHistory.push({ role: "model", text: botText });
            scrollToBottom();
        })
        .catch(error => {
            typingIndicator.remove();
            appendMessage("model", `⚠️ **Error**: ${error.message}. Please make sure you have set the \`GEMINI_API_KEY\` environment variable.`);
            scrollToBottom();
        });
    }

    function appendMessage(role, text) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", role);

        const avatarDiv = document.createElement("div");
        avatarDiv.classList.add("msg-avatar");
        if (role === "user") {
            avatarDiv.innerHTML = '<i data-lucide="user"></i>';
        } else {
            avatarDiv.innerHTML = '<i data-lucide="sparkles"></i>';
        }

        const contentDiv = document.createElement("div");
        contentDiv.classList.add("msg-content");
        contentDiv.innerHTML = formatMarkdown(text);

        messageDiv.appendChild(avatarDiv);
        messageDiv.appendChild(contentDiv);
        
        messagesContainer.appendChild(messageDiv);
        lucide.createIcons();
    }

    function appendTypingIndicator() {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", "model");

        const avatarDiv = document.createElement("div");
        avatarDiv.classList.add("msg-avatar");
        avatarDiv.innerHTML = '<i data-lucide="sparkles"></i>';

        const typingDiv = document.createElement("div");
        typingDiv.classList.add("typing-bubble");
        typingDiv.innerHTML = `
            <span class="typing-dot"></span>
            <span class="typing-dot"></span>
            <span class="typing-dot"></span>
        `;

        messageDiv.appendChild(avatarDiv);
        messageDiv.appendChild(typingDiv);
        messagesContainer.appendChild(messageDiv);
        
        lucide.createIcons();
        return messageDiv;
    }

    function scrollToBottom() {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // A lightweight Markdown formatter to handle basic tags:
    // Code blocks, inline code, bold, lists, paragraphs
    function formatMarkdown(text) {
        // Escape HTML to prevent injection
        let escaped = text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

        // Code blocks: ```language ... ```
        escaped = escaped.replace(/```(?:[a-zA-Z0-9]+)?\n([\s\S]*?)```/g, (match, code) => {
            return `<pre><code>${code.trim()}</code></pre>`;
        });

        // Inline code: `code`
        escaped = escaped.replace(/`([^`]+)`/g, "<code>$1</code>");

        // Bold: **text**
        escaped = escaped.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");

        // Italic: *text*
        escaped = escaped.replace(/\*([^*]+)\*/g, "<em>$1</em>");

        // Split by lines to parse lists and paragraphs
        const lines = escaped.split("\n");
        let formatted = "";
        let inList = false;

        for (let line of lines) {
            let lineTrim = line.trim();
            
            // Nested list item or bullet item
            if (lineTrim.startsWith("- ") || lineTrim.startsWith("* ")) {
                if (!inList) {
                    formatted += "<ul>";
                    inList = true;
                }
                formatted += `<li>${lineTrim.substring(2)}</li>`;
            } else {
                if (inList) {
                    formatted += "</ul>";
                    inList = false;
                }
                if (lineTrim) {
                    // Check if it's already a structural tag (like pre)
                    if (lineTrim.startsWith("<pre>") || lineTrim.endsWith("</pre>")) {
                        formatted += line;
                    } else {
                        formatted += `<p>${line}</p>`;
                    }
                }
            }
        }
        
        if (inList) {
            formatted += "</ul>";
        }

        return formatted;
    }
});

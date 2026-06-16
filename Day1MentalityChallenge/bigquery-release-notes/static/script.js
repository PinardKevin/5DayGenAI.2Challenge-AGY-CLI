let notesData = [];

// DOM Elements
const btnRefresh = document.getElementById('btn-refresh');
const spinner = document.getElementById('spinner');
const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');
const notesList = document.getElementById('notes-list');
const emptyState = document.getElementById('empty-state');
const emptyTitle = document.getElementById('empty-title');
const emptyMessage = document.getElementById('empty-message');

// Modal Elements
const tweetModal = document.getElementById('tweet-modal');
const btnCloseModal = document.getElementById('btn-close-modal');
const btnCancelTweet = document.getElementById('btn-cancel-tweet');
const btnPublishTweet = document.getElementById('btn-publish-tweet');
const tweetTextarea = document.getElementById('tweet-textarea');
const charCounter = document.getElementById('char-counter');
const charWarning = document.getElementById('char-warning');
const modalBadge = document.getElementById('modal-badge');
const modalDate = document.getElementById('modal-date');
const modalPreviewText = document.getElementById('modal-preview-text');

// Init
document.addEventListener('DOMContentLoaded', () => {
    fetchNotes();
    
    // Add Search and Filter Listeners
    searchInput.addEventListener('input', () => renderNotes());
    categoryFilter.addEventListener('change', () => renderNotes());
    
    // Refresh Button Listener
    btnRefresh.addEventListener('click', fetchNotes);
    
    // Modal Listeners
    btnCloseModal.addEventListener('click', closeTweetModal);
    btnCancelTweet.addEventListener('click', closeTweetModal);
    btnPublishTweet.addEventListener('click', publishTweet);
    tweetTextarea.addEventListener('input', updateCharCount);
    
    // Close modal when clicking outside of it
    tweetModal.addEventListener('click', (e) => {
        if (e.target === tweetModal) {
            closeTweetModal();
        }
    });
});

/**
 * Fetch release notes from backend API
 */
async function fetchNotes() {
    setLoading(true);
    try {
        const response = await fetch('/api/notes');
        const data = await response.json();
        
        if (data.success) {
            notesData = data.notes;
            renderNotes();
        } else {
            showError("Fetch Failed", data.error || "Unknown server error occurred.");
        }
    } catch (err) {
        showError("Network Error", "Unable to establish connection to Flask backend.");
    } finally {
        setLoading(false);
    }
}

/**
 * Toggle loading spinner state
 */
function setLoading(isLoading) {
    if (isLoading) {
        spinner.classList.add('spinning');
        btnRefresh.disabled = true;
    } else {
        spinner.classList.remove('spinning');
        btnRefresh.disabled = false;
    }
}

/**
 * Show error empty state
 */
function showError(title, message) {
    notesList.innerHTML = '';
    emptyTitle.textContent = title;
    emptyMessage.textContent = message;
    emptyState.classList.remove('hidden');
}

/**
 * Filter and Render release notes to grid
 */
function renderNotes() {
    const query = searchInput.value.toLowerCase().trim();
    const filter = categoryFilter.value;
    
    // Filter logic
    const filtered = notesData.filter(note => {
        const matchesCategory = (filter === 'ALL' || note.type.toUpperCase() === filter);
        const matchesQuery = !query || 
            note.text.toLowerCase().includes(query) || 
            note.date.toLowerCase().includes(query) ||
            note.type.toLowerCase().includes(query);
            
        return matchesCategory && matchesQuery;
    });
    
    // Render list
    notesList.innerHTML = '';
    
    if (filtered.length === 0) {
        emptyTitle.textContent = "No Release Notes Found";
        emptyMessage.textContent = "Try adjusting your search query or filter settings.";
        emptyState.classList.remove('hidden');
        return;
    }
    
    emptyState.classList.add('hidden');
    
    filtered.forEach(note => {
        const card = document.createElement('article');
        card.className = 'note-card';
        card.id = note.id;
        
        // Match class for category badge
        const badgeClass = note.type.toLowerCase();
        
        card.innerHTML = `
            <div class="note-meta">
                <div class="meta-left">
                    <span class="badge ${badgeClass}">${note.type}</span>
                    <span class="date-text">${note.date}</span>
                </div>
                <a href="${note.link}" target="_blank" class="note-link">
                    Official Notes <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            </div>
            <div class="note-content">
                ${note.html}
            </div>
            <div class="card-actions">
                <button class="btn-tweet" onclick="prepareTweetModal('${note.id}')">
                    <i class="fa-brands fa-x-twitter"></i> Tweet Update
                </button>
            </div>
        `;
        notesList.appendChild(card);
    });
}

/**
 * Prepares the Tweet Modal content and pre-calculates length restrictions
 */
window.prepareTweetModal = function(noteId) {
    const note = notesData.find(n => n.id === noteId);
    if (!note) return;
    
    // Setup preview details
    modalBadge.className = `preview-badge ${note.type.toLowerCase()}`;
    modalBadge.textContent = note.type;
    modalDate.textContent = note.date;
    modalPreviewText.textContent = note.text;
    
    // Pre-calculate X/Twitter post structure:
    // "BigQuery [Type]: [Text snippet...] #BigQuery #GCP [Link]"
    const prefix = `BigQuery ${note.type}: `;
    const suffix = ` #BigQuery #GCP\n${note.link}`;
    
    const maxTextLength = 280 - prefix.length - suffix.length;
    let cleanSnippet = note.text;
    
    if (cleanSnippet.length > maxTextLength) {
        cleanSnippet = cleanSnippet.substring(0, maxTextLength - 3) + "...";
    }
    
    const prefilledTweet = `${prefix}${cleanSnippet}${suffix}`;
    
    tweetTextarea.value = prefilledTweet;
    updateCharCount();
    
    // Show Modal
    tweetModal.classList.remove('hidden');
    tweetTextarea.focus();
};

/**
 * Updates character count indicator and enables/disables tweet submit
 */
function updateCharCount() {
    const len = tweetTextarea.value.length;
    charCounter.textContent = `${len} / 280`;
    
    if (len > 280) {
        charCounter.className = 'char-counter limit-exceeded';
        charWarning.className = 'char-warning';
        btnPublishTweet.disabled = true;
    } else if (len >= 250) {
        charCounter.className = 'char-counter limit-near';
        charWarning.className = 'char-warninghidden';
        btnPublishTweet.disabled = false;
    } else {
        charCounter.className = 'char-counter';
        charWarning.className = 'char-warninghidden';
        btnPublishTweet.disabled = false;
    }
}

/**
 * Close modal
 */
function closeTweetModal() {
    tweetModal.classList.add('hidden');
}

/**
 * Redirect to Twitter Web Intent with encoded text content
 */
function publishTweet() {
    const tweetText = tweetTextarea.value;
    if (tweetText.length > 280) return; // Prevent publishing if over limit
    
    const encodedText = encodeURIComponent(tweetText);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedText}`;
    
    window.open(twitterUrl, '_blank');
    closeTweetModal();
}

import { useState, useEffect, useRef } from 'react';
import { 
  Upload, 
  Image as ImageIcon, 
  Search, 
  Cpu, 
  History, 
  Trash2, 
  RefreshCw, 
  AlertTriangle, 
  CheckCircle, 
  HelpCircle, 
  Activity, 
  Eye, 
  EyeOff, 
  Sliders,
  Sparkles,
  Camera
} from 'lucide-react';
import { runForensicsAnalysis } from './forensics';
import './App.css';

function App() {
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanLogs, setScanLogs] = useState([]);
  const [results, setResults] = useState(null);
  const [showHeatmap, setShowHeatmap] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [history, setHistory] = useState([]);
  const [showSettings, setShowSettings] = useState(false);
  
  // Settings
  const [sensitivity, setSensitivity] = useState(50); // slider 0-100
  
  // Interactive HUD Coordinates
  const [hudCoords, setHudCoords] = useState({ x: 0, y: 0, noiseVal: 0, status: 'Awaiting scan' });

  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const logContainerRef = useRef(null);

  // Load Scan History from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('ai_detector_history');
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse history", e);
      }
    }
  }, []);

  // Save Scan History
  const saveToHistory = (name, score, verdict, thumbnail) => {
    const newItem = {
      id: Date.now(),
      name,
      score,
      verdict,
      thumbnail,
      date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    const updated = [newItem, ...history.slice(0, 9)]; // Keep last 10
    setHistory(updated);
    localStorage.setItem('ai_detector_history', JSON.stringify(updated));
  };

  // Drag handlers
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  // Main file processing logic
  const processFile = (selectedFile) => {
    setFile(selectedFile);
    setImagePreview(URL.createObjectURL(selectedFile));
    startScan(selectedFile, selectedFile.name);
  };

  // Sample Image click handler
  const handleSelectSample = (sampleUrl, name) => {
    setFile(null);
    setImagePreview(sampleUrl);
    startScan(sampleUrl, name);
  };

  // Run the animated forensics scan
  const startScan = (source, name) => {
    setIsScanning(true);
    setShowHeatmap(false);
    setResults(null);
    setScanLogs([]);

    const logs = [
      "[SYSTEM] Initializing Digital Forensics Sandbox...",
      "[DECT] Reading binary file structure streams...",
      "[META] Extracting EXIF headers & camera profiles...",
      "[PROC] Mapping 2D RGB Pixel Matrix (300x300 canvas)...",
      "[MATH] Computing Laplacian convolutional edge filters...",
      "[FREQ] Measuring high-frequency noise variance...",
      "[CALC] Weighting sensitivity matrix & thresholds...",
      "[DONE] Analysis compiled. Generating verdict..."
    ];

    let currentLogIndex = 0;
    
    // Animate log output line by line
    const interval = setInterval(() => {
      if (currentLogIndex < logs.length) {
        setScanLogs(prev => [...prev, logs[currentLogIndex]]);
        currentLogIndex++;
        
        // Auto-scroll logs
        if (logContainerRef.current) {
          logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
        }
      } else {
        clearInterval(interval);
        
        // Perform actual forensics check after logs finish
        setTimeout(async () => {
          try {
            const data = await runForensicsAnalysis(source, typeof source !== 'string' ? source : null);
            
            // Adjust score slightly based on Sensitivity setting
            // Sensitivity = 50 is neutral. 
            // If sensitivity > 50, we increase the score (make it more suspicious of AI).
            let adjustedScore = data.score;
            if (sensitivity !== 50) {
              const delta = (sensitivity - 50) * 0.4; // max shift of +-20%
              adjustedScore = Math.max(0.01, Math.min(99.99, data.score + delta));
            }
            adjustedScore = parseFloat(adjustedScore.toFixed(2));

            // Re-evaluate verdict if score adjusted
            let adjustedVerdict = data.verdict;
            let adjustedColor = data.verdictColor;
            let adjustedDescription = data.verdictDescription;

            if (adjustedScore >= 85) {
              adjustedVerdict = "AI Generated";
              adjustedColor = "var(--danger)";
              adjustedDescription = "Forensics check detected strong structural patterns, flat-shaded noise variance, and/or generator signatures in the file headers. There is extremely high confidence that this image is AI generated.";
            } else if (adjustedScore >= 40) {
              adjustedVerdict = "Suspicious / Hybrid";
              adjustedColor = "var(--warning)";
              adjustedDescription = "The analysis yielded mixed results. The image shows some typical AI-smoothing gradients and is missing hardware camera tags, but retains some high-frequency noise. It may be heavily edited, upscaled, or a hybrid render.";
            } else {
              adjustedVerdict = "Organic Photograph";
              adjustedColor = "var(--secondary)";
              adjustedDescription = "This image displays a high density of natural, camera-specific noise patterns and possesses standard metadata characteristics. It is highly likely an organic, camera-captured photograph.";
            }

            const finalResults = {
              ...data,
              score: adjustedScore,
              verdict: adjustedVerdict,
              verdictColor: adjustedColor,
              verdictDescription: adjustedDescription
            };

            setResults(finalResults);
            setIsScanning(false);
            
            // Save to history list
            const thumbUrl = typeof source === 'string' ? source : URL.createObjectURL(source);
            saveToHistory(name, adjustedScore, adjustedVerdict, thumbUrl);
          } catch (err) {
            console.error(err);
            setIsScanning(false);
            setScanLogs(prev => [...prev, `[ERROR] Analysis failed: ${err.message}`]);
          }
        }, 500);
      }
    }, 350);
  };

  // Clear History handler
  const handleClearHistory = () => {
    setHistory([]);
    localStorage.removeItem('ai_detector_history');
  };

  // Reload history item
  const handleLoadHistoryItem = (item) => {
    setImagePreview(item.thumbnail);
    setIsScanning(true);
    setResults(null);
    setScanLogs(["[SYSTEM] Retrieving archived scanner log...", `[SYSTEM] Reloading verdict: ${item.verdict} (${item.score}%)`]);
    
    setTimeout(() => {
      // Re-run mock analysis based on history to recreate heatmap
      startScan(item.thumbnail, item.name);
    }, 800);
  };

  // Track hover coordinate details
  const handleMouseMove = (e) => {
    if (!results || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    
    // Calculate relative X and Y inside canvas (0-300 range)
    const x = Math.min(300, Math.max(0, Math.round(((e.clientX - rect.left) / rect.width) * 300)));
    const y = Math.min(300, Math.max(0, Math.round(((e.clientY - rect.top) / rect.height) * 300)));

    // Get color from heatmap canvas at coordinates to determine local status
    const ctx = canvas.getContext('2d');
    try {
      const pixel = ctx.getImageData(x, y, 1, 1).data;
      const r = pixel[0];
      const g = pixel[1];
      const b = pixel[2];
      
      let localStatus = 'Natural grain';
      let noiseVal = 24.5;

      if (r > 200 && g < 100) {
        localStatus = 'Artificial Shading / Flat Gradients';
        noiseVal = 2.4;
      } else if (r > 200 && g > 120) {
        localStatus = 'Dither / Grid artifact detected';
        noiseVal = 280.1;
      } else if (g > 150) {
        localStatus = 'Healthy Camera Texture';
        noiseVal = 62.8;
      }

      setHudCoords({ x, y, noiseVal, status: localStatus });
    } catch (err) {
      // Canvas might be clean or cross-origin
      setHudCoords({ x, y, noiseVal: 0, status: 'Analyzing...' });
    }
  };

  const resetScanner = () => {
    setFile(null);
    setImagePreview(null);
    setResults(null);
    setIsScanning(false);
  };

  return (
    <>
      <header>
        <div className="logo-container">
          <Activity size={14} className="upload-icon" style={{ margin: 0 }} />
          <span className="logo-text">Neural Forensics Lab</span>
        </div>
        <h1>AI Image Guard</h1>
        <p className="subtitle">
          Upload an image to scan EXIF structures and pixel grain anomalies. We compute a confidence index determining if the image is camera-captured or generated by AI models.
        </p>
      </header>

      <main className="app-grid">
        {/* Left Side: Upload Control Zone */}
        <div className="upload-container">
          <div className="glass-card">
            <div className="samples-title">Advanced Settings</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                <span>Scan Model Sensitivity</span>
                <span style={{ color: 'var(--primary)', fontWeight: '700' }}>{sensitivity}%</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="90" 
                value={sensitivity} 
                onChange={(e) => setSensitivity(parseInt(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--primary)' }}
              />
              <div style={{ fontSize: '10px', color: 'var(--text-muted)', textAlign: 'left', lineHeight: '1.4' }}>
                Increase sensitivity if you want the scan engine to be highly critical of fine dither patterns, potentially flagging subtle digital edits.
              </div>
            </div>

            <div className="samples-title" style={{ marginTop: '20px' }}>Upload & Scan</div>
            <div 
              className={`upload-zone ${dragActive ? 'drag-active' : ''}`}
              onDragEnter={handleDrag}
              onDragOver={handleDrag}
              onDragLeave={handleDrag}
              onDrop={handleDrop}
              onClick={() => document.getElementById('file-picker').click()}
            >
              <input 
                id="file-picker"
                type="file" 
                className="hidden-file-input" 
                accept="image/*"
                onChange={handleFileChange}
              />
              <Upload className="upload-icon" size={36} />
              <div className="upload-text">Drag & drop photo here</div>
              <div className="upload-subtext">or click to browse local files</div>
              <div className="upload-subtext" style={{ marginTop: '10px', fontSize: '10px' }}>Supports JPG, PNG, WebP</div>
            </div>

            {/* Sample Images Preset grid */}
            <div className="samples-title" style={{ marginTop: '24px' }}>Sample Datasets</div>
            <div className="samples-grid">
              <div 
                className="sample-card"
                onClick={() => handleSelectSample('/sample_real_bee.jpg', 'sample_real_bee.jpg')}
              >
                <img src="/sample_real_bee.jpg" alt="Real bumblebee macro photo" />
                <div className="sample-label">
                  <span>Macro Bumblebee</span>
                  <span className="sample-badge real">Real Photo</span>
                </div>
              </div>
              <div 
                className="sample-card"
                onClick={() => handleSelectSample('/sample_ai_neon.jpg', 'sample_ai_neon.jpg')}
              >
                <img src="/sample_ai_neon.jpg" alt="AI-generated neon synthwave grid ocean" />
                <div className="sample-label">
                  <span>Synthwave Ocean</span>
                  <span className="sample-badge ai">AI Art</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Analysis Display Panel */}
        <div className="glass-card" style={{ flexGrow: 1 }}>
          <div className="analysis-panel">
            {/* 1. Empty State (No file uploaded) */}
            {!imagePreview && !isScanning && !results && (
              <div className="empty-state">
                <Cpu size={48} style={{ color: 'rgba(255,255,255,0.15)' }} />
                <h3>No Image Loaded</h3>
                <p style={{ fontSize: '13px', maxWidth: '320px', textAlign: 'center', lineHeight: 1.5 }}>
                  Drop an image into the upload panel or select one of our sample datasets to run the forensic checker.
                </p>
              </div>
            )}

            {/* 2. Loading / Scanning State */}
            {isScanning && (
              <div className="scan-progress-container">
                <div className="scan-title-row">
                  <div className="scanner-text">
                    <RefreshCw className="upload-icon" size={14} style={{ display: 'inline', marginRight: '8px', animation: 'spin 2s linear infinite' }} />
                    ACQUIRING NEURAL METRIC FORENSICS...
                  </div>
                </div>
                <div className="scanner-log" ref={logContainerRef}>
                  {scanLogs.map((log, idx) => (
                    <div 
                      key={idx} 
                      className={`log-line ${idx === scanLogs.length - 1 ? 'active' : ''}`}
                    >
                      {log}
                    </div>
                  ))}
                </div>
                <div style={{ height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden' }}>
                  <div style={{
                    height: '100%',
                    background: 'var(--primary)',
                    width: `${(scanLogs.length / 8) * 100}%`,
                    transition: 'width 0.3s ease'
                  }}></div>
                </div>
              </div>
            )}

            {/* 3. Completed Results State */}
            {results && !isScanning && (
              <div className="analysis-results-view">
                
                {/* Left Results Column: Image Preview + Canvas overlays */}
                <div className="analyzer-image-section">
                  <div className="image-canvas-wrapper" onMouseMove={handleMouseMove}>
                    {/* Raw uploaded image */}
                    <img 
                      src={imagePreview} 
                      alt="Uploaded preview" 
                      style={{ display: showHeatmap ? 'none' : 'block' }}
                    />
                    
                    {/* Rendered heatmap */}
                    <img
                      src={results.heatmapDataUrl}
                      alt="Forensic heatmap"
                      style={{ display: showHeatmap ? 'block' : 'none', width: '100%', height: '100%', objectFit: 'contain' }}
                    />

                    {/* Hidden canvas for coordinate lookup */}
                    <canvas 
                      ref={canvasRef} 
                      style={{ display: 'none' }}
                    />
                    
                    {/* Visual laser overlay if scanning finished but we want a high tech feel */}
                    <div className="scanner-line" style={{ animationDuration: '4s' }} />
                  </div>

                  {/* Dynamic coordinates HUD */}
                  <div className="hud-coordinates">
                    <span>POS: [X: <span>{hudCoords.x}px</span>, Y: <span>{hudCoords.y}px</span>]</span>
                    <span style={{ maxWidth: '60%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      GRAIN: <span>{hudCoords.status}</span>
                    </span>
                  </div>

                  <div className="view-controls">
                    <button 
                      className={`btn-secondary ${!showHeatmap ? 'active' : ''}`}
                      onClick={() => setShowHeatmap(false)}
                    >
                      <ImageIcon size={14} /> Normal View
                    </button>
                    <button 
                      className={`btn-secondary ${showHeatmap ? 'active' : ''}`}
                      onClick={() => setShowHeatmap(true)}
                    >
                      <Eye size={14} /> Forensic Heatmap
                    </button>
                  </div>
                </div>

                {/* Right Results Column: Confidence score, charts, verdict */}
                <div className="analyzer-metrics-section">
                  <div className="gauge-container">
                    <svg className="gauge-svg">
                      <circle className="gauge-bg" cx="50" cy="50" r="45" />
                      <circle 
                        className="gauge-bar" 
                        cx="50" 
                        cy="50" 
                        r="45" 
                        style={{ 
                          strokeDashoffset: 282.7 - (282.7 * results.score) / 100,
                          stroke: results.score >= 85 ? 'var(--danger)' : results.score >= 40 ? 'var(--warning)' : 'var(--secondary)'
                        }} 
                      />
                    </svg>
                    <div className="gauge-text-container">
                      <div className="gauge-score">{results.score}%</div>
                      <div 
                        className="gauge-label"
                        style={{ color: results.score >= 85 ? 'var(--danger)' : results.score >= 40 ? 'var(--warning)' : 'var(--secondary)' }}
                      >
                        {results.verdict}
                      </div>
                    </div>
                  </div>

                  {/* Verdict description card */}
                  <div className="verdict-card" style={{ borderLeft: `3px solid ${results.score >= 85 ? 'var(--danger)' : results.score >= 40 ? 'var(--warning)' : 'var(--secondary)'}` }}>
                    <div className="verdict-title">
                      {results.score >= 85 ? <AlertTriangle size={16} style={{ color: 'var(--danger)' }} /> : <CheckCircle size={16} style={{ color: 'var(--secondary)' }} />}
                      Forensic Verdict Summary
                    </div>
                    <div className="verdict-desc">{results.verdictDescription}</div>
                  </div>

                  {/* Progress bars metrics */}
                  <div>
                    {results.metrics.map((m, idx) => (
                      <div key={idx} className="metric-row">
                        <div className="metric-header">
                          <span className="metric-info tooltip-trigger">
                            {m.name} <HelpCircle size={11} />
                            <span className="tooltip-text">{m.tooltip}</span>
                          </span>
                          <span style={{ fontFamily: 'var(--mono)', fontWeight: '700' }}>{m.score}%</span>
                        </div>
                        <div className="metric-bar-bg">
                          <div 
                            className="metric-bar-fill" 
                            style={{ 
                              width: `${m.score}%`,
                              background: m.score >= 80 ? 'var(--danger)' : m.score >= 40 ? 'var(--warning)' : 'var(--secondary)'
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Metadata Header tag list */}
                  <div className="verdict-card">
                    <div className="verdict-title" style={{ fontSize: '13px' }}>
                      <Camera size={14} /> Metadata Header Logs
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                      {results.metadataNotes}
                    </div>
                    {results.metadataTags.length > 0 && (
                      <div className="metadata-tags-list">
                        {results.metadataTags.map((t, idx) => (
                          <span key={idx} className="meta-tag">{t}</span>
                        ))}
                      </div>
                    )}
                  </div>

                  <button 
                    className="btn-secondary"
                    onClick={resetScanner}
                    style={{ width: '100%', background: 'rgba(168, 85, 247, 0.1)', borderColor: 'var(--primary)' }}
                  >
                    <RefreshCw size={14} /> Reset Scanner
                  </button>

                </div>

              </div>
            )}
          </div>
        </div>
      </main>

      {/* History Log Section */}
      {history.length > 0 && (
        <section className="history-section">
          <div className="history-header-row">
            <div className="history-title">
              <History size={18} />
              Recent Scan Logs
            </div>
            <button className="btn-clear" onClick={handleClearHistory}>
              <Trash2 size={13} />
              Clear Scan Logs
            </button>
          </div>
          <div className="history-list">
            {history.map((item) => (
              <div 
                key={item.id} 
                className="history-card"
                onClick={() => handleLoadHistoryItem(item)}
              >
                <img src={item.thumbnail} alt="Thumbnail preview" className="history-thumb" />
                <div className="history-info">
                  <div className="history-name">{item.name}</div>
                  <div className="history-date">{item.date}</div>
                </div>
                <div 
                  className="history-score-badge"
                  style={{
                    background: item.score >= 85 ? 'rgba(239, 68, 68, 0.15)' : item.score >= 40 ? 'rgba(245, 158, 11, 0.15)' : 'rgba(34, 197, 94, 0.15)',
                    color: item.score >= 85 ? 'var(--danger)' : item.score >= 40 ? 'var(--warning)' : 'var(--secondary)',
                    border: `1px solid ${item.score >= 85 ? 'rgba(239, 68, 68, 0.3)' : item.score >= 40 ? 'rgba(245, 158, 11, 0.3)' : 'rgba(34, 197, 94, 0.3)'}`
                  }}
                >
                  {item.score}%
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <footer>
        <p>
          AI Image Guard Forensics Lab &copy; {new Date().getFullYear()}. Developed using React and Canvas Pixel processing.
        </p>
      </footer>
    </>
  );
}

export default App;

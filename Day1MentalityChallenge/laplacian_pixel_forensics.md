# AI Image Guard - Laplacian Pixel Forensics

This module performs pixel-level statistical checks to identify artificial smoothing or structural quantization artifacts typical of AI generators.

## Mathematical Formulation

### 1. High-Frequency Extraction
Grayscale coordinates $P(x, y)$ are processed using a discrete **Laplacian filter kernel** to highlight areas of rapid intensity change (high-frequency noise and edges):

$$L(x, y) = 4P(x, y) - P(x-1, y) - P(x+1, y) - P(x, y-1) - P(x, y+1)$$

In JavaScript code, this is calculated as:
```javascript
const val = 4 * gray[idx] 
            - gray[idx - 1] 
            - gray[idx + 1] 
            - gray[idx - width] 
            - gray[idx + width];
```

### 2. Global Variance Calculation
We determine the noise distribution consistency by calculating the **variance ($\sigma^2$)** of the Laplacian values:

$$\sigma^2 = \frac{1}{N} \sum_{i=1}^{N} (L_i - \mu)^2$$

Where:
* $L_i$ is the Laplacian value at pixel $i$.
* $\mu$ is the mean value of the Laplacian matrix (which tends toward 0 in noise-only sections).
* $N$ is the total pixel count.

---

## Variance Thresholds

* **$\sigma^2 < 10$ (AI Smoothness)**: Generates high confidence for AI. Diffusion models optimize gradients, erasing standard camera sensor noise and leaving mathematically flat regions.
* **$\sigma^2 > 250$ (AI Quantization)**: Signals upscaling grid artifacts. GAN and diffusion upscalers introduce repeating dither arrays that produce large high-frequency spikes.
* **$20 \le \sigma^2 \le 150$ (Organic Sensor Grain)**: Represents normal camera grain noise profiles.

---

## Forensic Heatmap Color Mapping
A local 3x3 pixel neighborhood check is executed to color the toggleable analysis overlay:

1. **Bright Red (`rgb(239, 68, 68)`)**: Anomalous flat regions (local variance $< 8$).
2. **Orange (`rgb(245, 158, 11)`)**: Sharp grid patterns (local variance $> 600$ and Laplacian $> 45$).
3. **Green/Teal (`rgb(34, 197, 94)`)**: Normal camera texture and grain distribution.

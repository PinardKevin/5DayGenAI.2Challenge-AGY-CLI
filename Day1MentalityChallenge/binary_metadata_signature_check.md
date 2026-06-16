# AI Image Guard - Binary Metadata Signature Check

This module analyzes the raw binary structure of uploaded images to detect direct creator tags, software parameters, or physical camera profiles.

## Binary Stream Parsing
The detection engine loads the target image into a `FileReader` as an `ArrayBuffer` on the client side:
```javascript
const reader = new FileReader();
reader.onload = function(e) {
  const arrayBuffer = e.target.result;
  const arr = new Uint8Array(arrayBuffer);
};
```
To optimize execution speed, the engine slices and parses the first **128 KB** of the byte stream, converting the integer values back to character representations to check for text signatures:
```javascript
const limit = Math.min(arr.length, 128 * 1024);
let binaryStr = '';
for (let i = 0; i < limit; i++) {
  binaryStr += String.fromCharCode(arr[i]);
}
const lowerStr = binaryStr.toLowerCase();
```

---

## Signature Registries

### 1. AI Generator Keywords
If any of these lowercase sequences are identified in the header, the image is immediately flagged as highly likely to be AI-generated:

| Signature String | Flag Label |
| :--- | :--- |
| `midjourney` | Midjourney Generator Tag |
| `stable diffusion` | Stable Diffusion Footprint |
| `dall-e` / `creator: dall` | DALL-E Metadata Marker |
| `wombot` | Dream by Wombo Tag |
| `adobe firefly` | Adobe Firefly AI Signature |
| `novelai` | NovelAI Generator Signature |
| `fotor` | Fotor Generative AI Marker |
| `craiyon` | Craiyon Signature |

### 2. Camera Hardware Keywords
If no AI signatures are found, but standard camera details are present, the image is baseline categorized as organic:

* **Hardware Makers**: `canon`, `nikon`, `sony`, `fujifilm`, `apple`, `samsung`, `google`, `kodak`, `olympus`, `leica`
* **Exif Containers**: Presence of standard `exif` or `jfif` segments.

---

## Verdict Weighting
- **AI Signature Match**: Automatically overrides the final confidence score to **$\ge 99.00\%$**.
- **Camera Signature Match**: Establishes a baseline score of **$< 5.00\%$** (organic photograph).
- **No Signature Match**: If neither is found, the metadata baseline defaults to **$72.00\%$** (typical of digital screenshot exports or stripped AI uploads), routing downstream validation to the pixel forensics engine.

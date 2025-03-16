# Three.js `Very Basic` Interactive Model Viewer

🔗 **Live Demo:** [Three.js Model Viewer](https://threejs-model-preview-asmkhalid111.netlify.app/)  

## 🚀 Latest Updates (March 16, 2025)
### New Features:
1. **Mesh Color Picker:**
   - Added an HTML color input to allow users to pick a custom color for the mesh.
   - The selected color is applied dynamically to the model.

2. **Default Color Reset:**
   - Implemented a "Mesh Color" button that resets the color to a predefined default (`#00FFFF`).
   - If the current color is not the default, clicking this button will revert it.

3. **Persistent Color Selection (Local Storage):**
   - The last selected color is stored in `localStorage`.
   - Upon page reload, the model retains its last used color.
   - The color input field also reflects the stored color.

4. **CSS Improvements:**
   - Enhanced UI responsiveness for better experience across devices.
   - Improved color contrast and button hover effects.
   - Smoothed animations for color transitions.

---

## 📌 Previous Features (March 14, 2025)
### 🎨 Model Features
- Users can switch between different 3D models (Cube, Sphere, Cylinder, Torus) via a dropdown menu.
- Models are dynamically updated without reloading the page.
- Meshes retain their color and wireframe state when changed.

### 🖥️ Wireframe Toggle
- Users can toggle the wireframe view on and off with a button.
- Button text updates to indicate the wireframe state (`ON/OFF`).

### 🎮 Interactive Camera Controls
- Implemented `OrbitControls` for interactive zoom, pan, and rotation.
- Smooth damping effect for a better user experience.

### 📏 Adaptive UI
- The layout adapts seamlessly for different screen sizes.
- Mobile-friendly adjustments for smaller screens.

---

## 📂 Project Structure
```
📦 Project Root
 ┣ 📂 src
 ┃ ┣ 📜 main.js   # Three.js implementation
 ┃ ┣ 📜 style.css  # Styles and layout
 ┣ 📜 index.html   # Main HTML file
 ┗ 📜 README.md    # Project documentation
```

---

## 🛠️ Setup & Installation
### Prerequisites:
- Ensure you have [Node.js](https://nodejs.org/) installed.
- Use a local server for best results (e.g., `Vite`, `Live Server`, or `http-server`).
- `Vite` is Suggested

### Steps:
1. Clone this repository:
   ```sh
   git clone https://github.com/asmkhalid111/THREEJS-BasicModelPreview.git
   ```
2. Navigate into the project directory:
   ```sh
   cd threejs-model-viewer
   ```
3. Install dependencies (if applicable):
   ```sh
   npm install
   ```
4. Start the local development server:
   ```sh
   npm run dev
   ```
5. Open your browser and go to where `Vite` tells you



## 📜 License
This project is licensed under the MIT License.

---

## 🎉 Credits
Developed using [Three.js](https://threejs.org/) and JavaScript.
Got this idea after completing `2` hours of `ThreeJS Journey` course. Very thanks to `Bruno Simon` 


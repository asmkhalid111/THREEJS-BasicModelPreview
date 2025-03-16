import * as THREE from "three";
import { Clock } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { color } from "three/tsl";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Cursor
const cursor = {
  x: 0,
  y: 0,
};

window.addEventListener("mousemove", (event) => {
  cursor.x = event.clientX / sizes.width - 0.5;
  cursor.y = event.clientY / sizes.height - 0.5;
  console.log(cursor.x, cursor.y);
});

// Scene
const scene = new THREE.Scene();

// Initial Geometry and Material
const geometry = new THREE.BoxGeometry(1, 1, 1); // Start with cube
const material = new THREE.MeshBasicMaterial({
  color: "#877AF5",
  wireframe: true,
});

// Initial Mesh
let mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Clock
const clock = new THREE.Clock();

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Toggle Wireframe Button
const toggleButton = document.getElementById("wireframeToggle");
toggleButton.addEventListener("click", () => {
  material.wireframe = !material.wireframe;
  toggleButton.textContent = `Wireframe: ${material.wireframe ? "ON" : "OFF"}`;
});

const colorInput = document.getElementById("inputColor");
colorInput.addEventListener("input", () => {
  material.color.set(colorInput.value);
  //  Saving the previously used color as the new color after page relead
  localStorage.setItem("selectedColor", colorInput.value);
});

// On page reload

const savedColor = localStorage.getItem("selectedColor");
if (savedColor) {
  material.color.set(savedColor);
  colorInput.value = "#" + material.color.getHexString(); // It keeps the color from the material as the first color in the color input field
}

// default color using mesh color clicking

const defaultColor = document.getElementById("mesh-default-color");

const modelSelect = document.getElementById("modelSelect");

// Model Selection Dropdown
modelSelect.addEventListener("change", () => {
  const selectedModel = modelSelect.value;
  // Remove the current mesh
  scene.remove(mesh);
  // Create new geometry based on selection
  let newGeometry;
  switch (selectedModel) {
    case "sphere":
      newGeometry = new THREE.SphereGeometry(0.5, 32, 32); // Radius 0.5, widthSegments 32, heightSegments 32
      break;
    case "cylinder":
      newGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 32); // Radius 0.5, height 1, radialSegments 32
      break;
    case "torus":
      newGeometry = new THREE.TorusGeometry(0.5, 0.2, 16, 100); // Radius 0.5, tube 0.2, radialSegments 16, tubularSegments 100
      break;
    default:
      newGeometry = new THREE.BoxGeometry(1, 1, 1); // Default to cube
  }
  // Create new mesh with the same material
  mesh = new THREE.Mesh(newGeometry, material);
  // Add the new mesh to the scene
  scene.add(mesh);
  // Update controls target to focus on the new mesh
  controls.target.copy(mesh.position);
  controls.update();
});

// Animation Loop
const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  controls.update();
  window.requestAnimationFrame(tick);
  renderer.render(scene, camera);
};

tick();

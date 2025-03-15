import * as THREE from "three";
import { Clock } from "three";

// canvas
const canvas = document.querySelector("canvas.webgl");

// scene
const scene = new THREE.Scene();

// geometry

const geometry = new THREE.BoxGeometry(1, 1, 1);

// material

const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });

// mesh

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// camera

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Clock

const clock = new THREE.Clock(true);

// renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);

const tick = () => {
  window.requestAnimationFrame(tick);
  renderer.render(scene, camera);
};

tick();

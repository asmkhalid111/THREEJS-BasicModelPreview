import * as THREE from "three";

// canvas
const canvas = document.querySelector("webgl");
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
scene.add(camera);

// renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

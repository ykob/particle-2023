import "./style.css";
import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(800, 600);

document
  .querySelector<HTMLDivElement>("#app")!
  .appendChild(renderer.domElement);

export {};

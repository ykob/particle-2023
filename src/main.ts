import "./style.css";
import * as THREE from "three";
import { debounce } from "./utils";

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
const renderer = new THREE.WebGLRenderer();

const resize = () => {
  renderer.setSize(0, 0, false);

  const width = window.innerWidth;
  const height = document.documentElement.clientHeight;

  renderer.setSize(width, height, false);
};

window.addEventListener("resize", debounce(resize, 100));

resize();

renderer.domElement.classList.add("canvas-webgl");
document
  .querySelector<HTMLDivElement>("#app")!
  .appendChild(renderer.domElement);

export {};

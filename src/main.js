import '../styles/style.css'

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GreaterEqualDepth } from 'three';

//scene
const scene = new THREE.Scene();








//camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);




//renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#background'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

// object: geometry, material, mesh
//vectors defining object
const geometry = new THREE.TorusGeometry(10, 2, 16, 100);
//basic, so no light source needed
// const material = new THREE.MeshBasicMaterial({
//   color: 0xFF6347,
//   wireframe: true
// });
// standard material, needs light to show it
const material = new THREE.MeshStandardMaterial({
  color: 0xFF6347,
});
//create mesh which gets added to scene
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

// pointlight its a light, from a point
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5,5,5);
scene.add(pointLight);

//ambient light
const ambientLight = new THREE.AmbientLight(0xffffff);
ambientLight.position.set(5,5,5);
scene.add(ambientLight);

//light helpers

//pointlioght helper shows us where a point light is
// const lightHelper = new THREE.PointLightHelper(pointLight);

// // grid helper inserts a grid on the screen
// const gridHelper = new THREE.GridHelper(200, 50);

// scene.add(lightHelper, gridHelper);

const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial( {color: 0xffffff});
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);

// add a background image
const spaceTexture = new THREE.TextureLoader().load('../images/background.jpg');
scene.background = spaceTexture;

// add a texture for yourself, map texture to object
const frankTexture = new THREE.TextureLoader().load('../images/frank.jpg');
const frank = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3),
  new THREE.MeshBasicMaterial({map: frankTexture}),
);
scene.add(frank);

// add moon texture sphere
const moonTexture = new THREE.TextureLoader().load('../images/moon.jpg');
const normalTexture = new THREE.TextureLoader().load('../images/normalMoon.png');

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial( {
    map: moonTexture,
    normalMap: normalTexture,
  })
);
scene.add(moon);
moon.position.z = 30;
moon.position.setX(-10);



function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  frank.rotation.y += 0.01;
  frank.rotation.z += 0.01;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.position.y = t * -0.0002;
}
document.body.onscroll = moveCamera;


//game loop
function animate() {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;
  torus.rotation.z += 0.01;

  controls.update();
  renderer.render(scene, camera);
}

animate();
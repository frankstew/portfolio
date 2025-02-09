//todo: add bio
// todo: fix page height so no scrollbars( get rid of scrollbar)
// todo: planet sized and distances
// todo: add dropdown scrollbar (do I really need it? makes it purer, kihnda more peaceful)
// todo: get rid of !important for stopping cursor change when button hover
import Planet from './planetModel.js'
import moonImgURL from '../images/Planets/Moon/Moon/moon.jpg';
import normalMoonImgUrl from '../images/Planets/Moon/Moon/normalMoon.png';

import alienFleshURL from '../public/images/Planets/Alien_Flesh_002/Alien Flesh 002/Alien_Flesh_002_COLOR.jpg';
import normalAlienFlesh from '../public/images/Planets/Alien_Flesh_002/Alien Flesh 002/Alien_Flesh_002_NRM.jpg';

import blueIceURL from '../public/images/Planets/Blue_Ice_001/Blue_Ice_001_SD/Blue_Ice_001_COLOR.jpg';
import normalBlueIce from '../public/images/Planets/Blue_Ice_001/Blue_Ice_001_SD/Blue_Ice_001_NORM.jpg';

import encrustedGemURL from '../public/images/Planets/Encrusted_Gems_002/Encrusted_Gems_002_SD/Encrusted_Gems_002_COLOR.jpg';
import normalEncrustedGem from '../public/images/Planets/Encrusted_Gems_002/Encrusted_Gems_002_SD/Encrusted_Gems_002_NORM.jpg';

import jungleFloorURL from '../public/images/Planets/Jungle_Floor_001/Jungle_Floor_001_SD/Jungle_Floor_001_basecolor.jpg';
import normalJungleFloor from '../public/images/Planets/Jungle_Floor_001/Jungle_Floor_001_SD/Jungle_Floor_001_normal.jpg';

import lavaURL from '../public/images/Planets/Lava_006/Lava_006_SD/Lava_006_basecolor.jpg';
import normalLava from '../public/images/Planets/Lava_006/Lava_006_SD/Lava_006_normal.jpg';

import rockURL from '../public/images/Planets/Rock_038/Rock_038_SD/Rock_038_basecolor.jpg';
import normalRock from '../public/images/Planets/Rock_038/Rock_038_SD/Rock_038_normal.jpg';

import seaRockURL from '../public/images/Planets/Sea_Rock_001/Sea_Rock_001_SD/Sea_Rock_001_BaseColor.jpg';
import normalSeaRock from '../public/images/Planets/Sea_Rock_001/Sea_Rock_001_SD/Sea_Rock_001_Normal.jpg';

import sunURL from '../public/images/Planets/Sun/Sun/Sun.jpg';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// #region scene
const scene = new THREE.Scene();
//#endregion


// #region camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.setZ(100);
//#endregion



// #region renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#background'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(100);

renderer.render(scene, camera);
//#endregion

//#region torus
//vectors defining object
//const geometry = new THREE.TorusGeometry(10, 2, 16, 100);
////basic, so no light source needed
//// const material = new THREE.MeshBasicMaterial({
////   color: 0xFF6347,
////   wireframe: true
//// });
//// standard material, needs light to show it
//const material = new THREE.MeshStandardMaterial({
//  color: 0xFF6347,
//});
////create mesh which gets added to scene
//const torus = new THREE.Mesh(geometry, material);
//scene.add(torus);
//#endregion

// pointlight its a light, from a point
//const pointLight = new THREE.PointLight(0xffffff);
//pointLight.position.set(5,5,5);
//scene.add(pointLight);

//ambient light
const ambientLight = new THREE.AmbientLight(0xffffff);
ambientLight.position.set(5,5,5);
scene.add(ambientLight);

var p = document.getElementById("work");
console.log(p);
//light helpers

//pointlight helper shows us where a point light is
// const lightHelper = new THREE.PointLightHelper(pointLight);

// // grid helper inserts a grid on the screen
// const gridHelper = new THREE.GridHelper(200, 50);

// scene.add(lightHelper, gridHelper);
// todo: not working??
// const controls = new OrbitControls(camera, renderer.domElement);
// scene.add(controls);

//#region stars
// todo: change to points and far away
function addStars() {
  const starGeometry = new THREE.BufferGeometry();
  const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff
  });
  var starVertices = createStarVertices();
  starGeometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(starVertices, 3)
    );
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);
}

// todo: fix stars bunching at poles
function createStarVertices() {
  const maxRadius = 1000;
  const verts = [];
  for (let i = 0; i < 1200; i++) {
    var radius = randomNum(3 * maxRadius / 4, maxRadius);
    var theta = randomNum(0, 2 * Math.PI);
    var phi = randomNum(0, Math.PI);
    // switch y and z so that the bunched poles are at the top and bottom on load, instead of being immediately visible
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const z = radius * Math.sin(phi) * Math.sin(theta) + 500;
    const y = radius * Math.cos(phi);
    verts.push(x, y, z);
  }
  return verts;
}
addStars();
//#endregion


// add a background image
//const spaceTexture = new THREE.TextureLoader().load(backgroundImgUrl);
//scene.background = spaceTexture;

//#region frankimg
//// add a texture for yourself, map texture to object
//const frankTexture = new THREE.TextureLoader().load(frankImgUrl);
//const frank = new THREE.Mesh(
//  new THREE.BoxGeometry(3, 3, 3),
//  new THREE.MeshBasicMaterial({map: frankTexture}),
//);
//scene.add(frank);
//#endregion


//#region planets

function randomNum(min, max) {
  return Math.random() * (max - min) + min;
}

// todo: distance/sizes adjusting
var alienFlesh = new Planet(alienFleshURL, normalAlienFlesh, [randomNum(2, 10), 32, 32], [randomNum(280, 290), randomNum(0, 2 * Math.PI)], 0.01, [0, 0, 1], 0.005, -1);
scene.add(alienFlesh.planetBody);
const blueIce = new Planet(blueIceURL, normalBlueIce, [randomNum(2, 10), 32, 32], [randomNum(65, 70), randomNum(0, 2 * Math.PI)]);
scene.add(blueIce.planetBody);
const encrustedGem = new Planet(encrustedGemURL, normalEncrustedGem, [randomNum(2, 10), 32, 32], [randomNum(95, 105), randomNum(0, 2 * Math.PI)]);
scene.add(encrustedGem.planetBody);
const jungleFloor = new Planet(jungleFloorURL, normalJungleFloor, [randomNum(2, 10), 32, 32], [randomNum(130, 145), randomNum(0, 2 * Math.PI)]);
scene.add(jungleFloor.planetBody);
const lava = new Planet(lavaURL, normalLava, [randomNum(20, 30), 32, 32], [randomNum(170, 185), randomNum(0, 2 * Math.PI)]);
scene.add(lava.planetBody);
// var moon = new Planet(moonImgURL, normalMoonImgUrl, [3, 32, 32], [0, 0], 0.01, [0, 1, 0], 0, 0);
// scene.add(moon.planetBody);
const rock = new Planet(rockURL, normalRock, [randomNum(2, 10), 32, 32], [randomNum(210, 225), randomNum(0, 2 * Math.PI)]);
scene.add(rock.planetBody);
const seaRock = new Planet(seaRockURL, normalSeaRock, [randomNum(2, 10), 32, 32], [randomNum(250, 270), randomNum(0, 2 * Math.PI)]);
scene.add(seaRock.planetBody);
const sun = new Planet(sunURL, null, [50, 32, 32], [0, 0], 0.002);
scene.add(sun.planetBody);

//#endregion

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  //moon.rotation.x += 0.05;
  //moon.rotation.y += 0.075;
  //moon.rotation.z += 0.05;

  if (camera.position.z > 20 || camera.position.z < -20) {
    return;
  }
  else {
    camera.position.z = t * -0.01;
  }
  console.log(camera.position);
}
document.body.onscroll = moveCamera;

function movePlanet(planet) {
  planet.rotatePlanet();
  planet.orbitPlanet();
}

//game loop
function animate() {
  requestAnimationFrame(animate);
  movePlanet(alienFlesh);
  movePlanet(blueIce);
  movePlanet(encrustedGem);
  movePlanet(jungleFloor);
  movePlanet(lava);
  movePlanet(rock);
  movePlanet(seaRock);
  sun.rotatePlanet();
  // controls.update();
  camera.position.setZ(600);
  camera.position.setY(100);
  renderer.render(scene, camera);
}

animate();


// event handlers
var aboutMeBtn = document.getElementById("about_me_button");
aboutMeBtn.onclick = () => {
  document.querySelector(".bio").classList.toggle("collapsed");
  aboutMeBtn.style.opacity = 0;
  aboutMeBtn.disabled = true;
  aboutMeBtn.classList.toggle("hidden");
}

// L O L keeps the transition the same speed for all window sizes
var bio = document.querySelector(".bio");
// 1.5 b/c max-height goes to 150% when expanded, 144 b/c bio is 288 px when expanded / 2s expansion time
let time = (window.innerHeight * 1.5) / 144; // distance / speed = time 
// 144px/s is 288px/2s, 288px is roughly the size of the bio when expanded on jan 8 2022

// set transition time based of speed that I want (288 px/ 2s = 144px/s)
// its not perfect, but it is closer, maybe figure it out more another time l9r
bio.style.transition = "max-height " + time.toString() + "s ease-out";




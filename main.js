import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import SplineLoader from '@splinetool/loader';
import { InteractionManager } from 'three.interactive';

const buttonOne = document.getElementById('buttonOne');
const buttonTwo = document.getElementById('buttonTwo');
const buttonThree = document.getElementById('buttonThree');
const buttonFour = document.getElementById('buttonFour');
const text1 = document.getElementById("text1");

// camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 5, 100000);
camera.position.set(0, 3000, 2000);
camera.quaternion.setFromEuler(new THREE.Euler(-1, 0.27, 0.3));

const raycaster = new THREE.Raycaster();
var pointer = new THREE.Vector3();

// scene
const scene = new THREE.Scene();

const loader = new SplineLoader();
loader.load(
  'https://prod.spline.design/R-ySdWWVXLu9g-Ge/scene.splinecode',
  (splineScene) => {
    scene.add(splineScene);
  }
);

// renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

// scene settings
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

scene.background = new THREE.Color('#121316');
renderer.setClearAlpha(1);

const interactionManager = new InteractionManager(
	renderer,
	camera,
	renderer.domElement
);

// orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.125;
controls.minAzimuthAngle = -1;
controls.maxAzimuthAngle = 1.5;
controls.rotateSpeed = 0.3;
controls.minPolarAngle = 0;
controls.maxPolarAngle = 1.5;
controls.maxZoom = 500;
controls.minZoom = 100;

window.addEventListener('resize', onWindowResize);
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate(time) {
  controls.update();
  renderer.render(scene, camera);
}

scene.updateMatrixWorld(true);

const onMouseMove = (event) =>{
	pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
	pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

	raycaster.setFromCamera(pointer, camera);
	

	// for (let i = 0; i < intersects.length; i++){
	// 	console.log(intersects);
	// }

	if ( intersects.length > 0){
		// intersects[0].object.material.color.set(0xff0000);

		console.log(intersects);
		console.log(pointer.x, pointer.y, pointer.z);
		
	}
};

const geometryOne = new THREE.SphereGeometry( 20, 20, 20);
const materialOne = new THREE.MeshBasicMaterial( { color: 'green' });
const materialTwo = new THREE.MeshBasicMaterial( { color: 'yellow' });
const materialThree = new THREE.MeshBasicMaterial( { color: 'orange' });
const materialFour = new THREE.MeshBasicMaterial( { color: 'red' });
const materialFive = new THREE.MeshBasicMaterial( { color: 0x66ffe8 });

const dayOneSphereOne = new THREE.Mesh( geometryOne, materialOne);
const dayOneSphereTwo = new THREE.Mesh( geometryOne, materialFour);
const dayOneSphereThree = new THREE.Mesh( geometryOne, materialThree);
const dayOneSphereFour = new THREE.Mesh( geometryOne, materialOne);
const dayOneSphereFive = new THREE.Mesh( geometryOne, materialTwo);

const dayTwoSphereOne = new THREE.Mesh( geometryOne, materialTwo);
const dayTwoSphereTwo = new THREE.Mesh( geometryOne, materialThree);
const dayTwoSphereThree = new THREE.Mesh( geometryOne, materialOne);
const dayTwoSphereFour = new THREE.Mesh( geometryOne, materialFour);
const dayTwoSphereFive = new THREE.Mesh( geometryOne, materialTwo);

const dayThreeSphereOne = new THREE.Mesh( geometryOne, materialOne);
const dayThreeSphereTwo = new THREE.Mesh( geometryOne, materialOne);
const dayThreeSphereThree = new THREE.Mesh( geometryOne, materialTwo);
const dayThreeSphereFour = new THREE.Mesh( geometryOne, materialThree);
const dayThreeSphereFive = new THREE.Mesh( geometryOne, materialThree);

const dayFourSphereOne = new THREE.Mesh( geometryOne, materialFour);
const dayFourSphereTwo = new THREE.Mesh( geometryOne, materialFour);
const dayFourSphereThree = new THREE.Mesh( geometryOne, materialFour);
const dayFourSphereFour = new THREE.Mesh( geometryOne, materialThree);
const dayFourSphereFive = new THREE.Mesh( geometryOne, materialOne);

const dayFiveSphereOne = new THREE.Mesh( geometryOne, materialFive);
const dayFiveSphereTwo = new THREE.Mesh( geometryOne, materialFive);
const dayFiveSphereThree = new THREE.Mesh( geometryOne, materialFive);
const dayFiveSphereFour = new THREE.Mesh( geometryOne, materialFive);
const dayFiveSphereFive = new THREE.Mesh( geometryOne, materialFive);

interactionManager.add(dayOneSphereOne);
interactionManager.add(dayOneSphereTwo);
interactionManager.add(dayOneSphereThree);
interactionManager.add(dayOneSphereFour);
interactionManager.add(dayOneSphereFive);

dayOneSphereOne.position.set(1700, 40, -300);
dayOneSphereTwo.position.set(-1300,80,700);
dayOneSphereThree.position.set(1000,50,100);
dayOneSphereFour.position.set(700,40,-250);
dayOneSphereFive.position.set(-200,60,-200);

dayTwoSphereOne.position.set(1100, 40, -100);
dayTwoSphereTwo.position.set(-1200,80,700);
dayTwoSphereThree.position.set(500,80,100);
dayTwoSphereFour.position.set(1000,60,250);
dayTwoSphereFive.position.set(-1200,70,-250);

dayThreeSphereOne.position.set(1350, 60, 200);
dayThreeSphereTwo.position.set(-800,80,150);
dayThreeSphereThree.position.set(300,30,-200);
dayThreeSphereFour.position.set(300,70,280);
dayThreeSphereFive.position.set(-1300,70,-480);

dayFourSphereOne.position.set(1100, 40, -100);
dayFourSphereTwo.position.set(-1200,80,700);
dayFourSphereThree.position.set(500,80,100);
dayFourSphereFour.position.set(1000,60,250);
dayFourSphereFive.position.set(-1200,70,-250);

dayFiveSphereOne.position.set(1100, 40, -100);
dayFiveSphereTwo.position.set(-1200,80,700);
dayFiveSphereThree.position.set(500,80,100);
dayFiveSphereFour.position.set(1000,60,250);
dayFiveSphereFive.position.set(-1200,70,-250);

const dayOne = () =>{

	scene.remove(dayTwoSphereOne);
	scene.remove(dayTwoSphereTwo);
	scene.remove(dayTwoSphereThree);
	scene.remove(dayTwoSphereFour);
	scene.remove(dayTwoSphereFive);

	scene.remove(dayThreeSphereOne);
	scene.remove(dayThreeSphereTwo);
	scene.remove(dayThreeSphereThree);
	scene.remove(dayThreeSphereFour);
	scene.remove(dayThreeSphereFive);

	scene.remove(dayFourSphereOne);
	scene.remove(dayFourSphereTwo);
	scene.remove(dayFourSphereThree);
	scene.remove(dayFourSphereFour);
	scene.remove(dayFourSphereFive);

	scene.remove(dayFiveSphereOne);
	scene.remove(dayFiveSphereTwo);
	scene.remove(dayFiveSphereThree);
	scene.remove(dayFiveSphereFour);
	scene.remove(dayFiveSphereFive);

	scene.add(dayOneSphereOne);
	scene.add(dayOneSphereTwo);
	scene.add(dayOneSphereThree);
	scene.add(dayOneSphereFour);
	scene.add(dayOneSphereFive);

}

const dayTwo = ()  => {

	scene.remove(dayOneSphereOne);
	scene.remove(dayOneSphereTwo);
	scene.remove(dayOneSphereThree);
	scene.remove(dayOneSphereFour);
	scene.remove(dayOneSphereFive);

	scene.remove(dayThreeSphereOne);
	scene.remove(dayThreeSphereTwo);
	scene.remove(dayThreeSphereThree);
	scene.remove(dayThreeSphereFour);
	scene.remove(dayThreeSphereFive);

	scene.remove(dayFourSphereOne);
	scene.remove(dayFourSphereTwo);
	scene.remove(dayFourSphereThree);
	scene.remove(dayFourSphereFour);
	scene.remove(dayFourSphereFive);

	scene.remove(dayFiveSphereOne);
	scene.remove(dayFiveSphereTwo);
	scene.remove(dayFiveSphereThree);
	scene.remove(dayFiveSphereFour);
	scene.remove(dayFiveSphereFive);

	scene.add(dayTwoSphereOne);
	scene.add(dayTwoSphereTwo);
	scene.add(dayTwoSphereThree);
	scene.add(dayTwoSphereFour);
	scene.add(dayTwoSphereFive);

}

const dayThree = () => {

	scene.remove(dayOneSphereOne);
	scene.remove(dayOneSphereTwo);
	scene.remove(dayOneSphereThree);
	scene.remove(dayOneSphereFour);
	scene.remove(dayOneSphereFive);

	scene.remove(dayTwoSphereOne);
	scene.remove(dayTwoSphereTwo);
	scene.remove(dayTwoSphereThree);
	scene.remove(dayTwoSphereFour);
	scene.remove(dayTwoSphereFive);

	scene.remove(dayFourSphereOne);
	scene.remove(dayFourSphereTwo);
	scene.remove(dayFourSphereThree);
	scene.remove(dayFourSphereFour);
	scene.remove(dayFourSphereFive);

	scene.remove(dayFiveSphereOne);
	scene.remove(dayFiveSphereTwo);
	scene.remove(dayFiveSphereThree);
	scene.remove(dayFiveSphereFour);
	scene.remove(dayFiveSphereFive);

	scene.add(dayThreeSphereOne);
	scene.add(dayThreeSphereTwo);
	scene.add(dayThreeSphereThree);
	scene.add(dayThreeSphereFour);
	scene.add(dayThreeSphereFive);

}

const dayFour = () => {
	scene.remove(dayOneSphereOne);
	scene.remove(dayOneSphereTwo);
	scene.remove(dayOneSphereThree);
	scene.remove(dayOneSphereFour);
	scene.remove(dayOneSphereFive);

	scene.remove(dayTwoSphereOne);
	scene.remove(dayTwoSphereTwo);
	scene.remove(dayTwoSphereThree);
	scene.remove(dayTwoSphereFour);
	scene.remove(dayTwoSphereFive);

	scene.remove(dayThreeSphereOne);
	scene.remove(dayThreeSphereTwo);
	scene.remove(dayThreeSphereThree);
	scene.remove(dayThreeSphereFour);
	scene.remove(dayThreeSphereFive);

	scene.remove(dayFiveSphereOne);
	scene.remove(dayFiveSphereTwo);
	scene.remove(dayFiveSphereThree);
	scene.remove(dayFiveSphereFour);
	scene.remove(dayFiveSphereFive);

	scene.add(dayFourSphereOne);
	scene.add(dayFourSphereTwo);
	scene.add(dayFourSphereThree);
	scene.add(dayFourSphereFour);
	scene.add(dayFourSphereFive);

}




const showAll = () => {
	dayOne();
	dayTwo();
}

buttonOne.onclick = () => {
	dayOne();
}

buttonTwo.onclick= () => {
	dayTwo();
}

buttonThree.onclick = () => {
	dayThree();
}

buttonFour.onclick = () => {
	dayFour();
}

dayOneSphereOne.addEventListener("click", (event) => {

	if(dayOneSphereOne.value == 1){
		dayOneSphereOne.value = 0;
		console.log("Closed");
		text1.style.display = "none";
		
	} else{
		dayOneSphereOne.value = 1;
		console.log("Opened");

		dayOneSphereTwo.value = 0;
		dayOneSphereThree.value = 0;
		dayOneSphereFour.value = 0;
		dayOneSphereFive.value = 0;
		
		text5.style.display = "none";
		text2.style.display = "none";
		text3.style.display = "none";
		text4.style.display = "none";
		text1.style.display = "block";
	}
});

dayOneSphereTwo.addEventListener("click", (event) => {

	if(dayOneSphereTwo.value == 1){
		dayOneSphereTwo.value = 0;
		console.log("Closed");
		text2.style.display = "none";
		
	} else{
		dayOneSphereTwo.value = 1;
		console.log("Opened");

		dayOneSphereOne.value = 0;
		dayOneSphereFour.value = 0;
		dayOneSphereThree.value = 0;
		dayOneSphereFive.value = 0;

		text1.style.display = "none";
		text5.style.display = "none";
		text3.style.display = "none";
		text4.style.display = "none";
		text2.style.display = "block";
	}

});

dayOneSphereThree.addEventListener("click", (event) => {

	if(dayOneSphereThree.value == 1){
		dayOneSphereThree.value = 0;
		console.log("Closed");
		text3.style.display = "none";
		
	} else{
		dayOneSphereThree.value = 1;
		console.log("Opened");

		dayOneSphereOne.value = 0;
		dayOneSphereTwo.value = 0;
		dayOneSphereFour.value = 0;
		dayOneSphereFive.value = 0;

		text1.style.display = "none";
		text2.style.display = "none";
		text5.style.display = "none";
		text4.style.display = "none";
		text3.style.display = "block";
	}

});

dayOneSphereFour.addEventListener("click", (event) => {

	if(dayOneSphereFour.value == 1){
		dayOneSphereFour.value = 0;
		console.log("Closed");
		text4.style.display = "none";
		
	} else{
		dayOneSphereFour.value = 1;
		console.log("Opened");

		dayOneSphereOne.value = 0;
		dayOneSphereTwo.value = 0;
		dayOneSphereThree.value = 0;
		dayOneSphereFive.value = 0;
		
		text1.style.display = "none";
		text2.style.display = "none";
		text3.style.display = "none";
		text5.style.display = "none";
		text4.style.display = "block";
	}

});

dayOneSphereFive.addEventListener("click", (event) => {

	if(dayOneSphereFive.value == 1){
		dayOneSphereFive.value = 0;
		console.log("Closed");
		
		text5.style.display = "none";
		
	} else{
		dayOneSphereFive.value = 1;
		console.log("Opened");

		dayOneSphereOne.value = 0;
		dayOneSphereTwo.value = 0;
		dayOneSphereThree.value = 0;
		dayOneSphereFour.value = 0;

		text1.style.display = "none";
		text2.style.display = "none";
		text3.style.display = "none";
		text4.style.display = "none";
		text5.style.display = "block";
	}

});

// const addSphere = (event) => {
// 	const intersects = raycaster.intersectObjects(scene.children);

// 	console.log(intersects);

// 	pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
// 	pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

// 	raycaster.setFromCamera(pointer, camera);
// 	// if(intersects[0].object.name === ""){
// 	// 	console.log("gallo");
// 	// }
	

// 	if (intersects.length > 0){
// 		console.log(intersects)
// 		console.log(intersects[0].object);

// 	}

// }

// window.addEventListener('click', addSphere);
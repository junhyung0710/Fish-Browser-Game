import * as THREE from './node_modules/three/build/three.module.js';

import {GLTFLoader} from './node_modules/three/examples/jsm/loaders/GLTFLoader.js'

let scene, camera, renderer, cube;
function init() {
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );
	const gltfLoader = new GLTFLoader();
	gltfLoader.load('./assets/shiba/scene.gltf',  (gltfScene) => {
		scene.add(gltfScene.scene);
	}
	)

	// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
	// const texture = new THREE.TextureLoader().load('texture'
	// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
	// cube = new THREE.Mesh( geometry, material );
	// scene.add( cube );

camera.position.z = 5;
}


function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
};

function onWindowResize () {
	camera.aspect = window.innerWidth/ window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}
window.addEventListener('resize', onWindowResize, false);
init();
animate();
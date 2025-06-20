import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let canvas = null
let width = 0
let height = 0

let camera = null
let controls = null
let scene = null

let geometry = null
let material = null

let mesh = null
let renderer = null

let scale_mm = 100

let elos = [
    {
        length: 90,
        color: 0xff0000
    },
    {
        length: 140,
        color: 0xff0000
    },
    {
        length: 115,
        color: 0xff0000
    },
    {
        length: 100,
        color: 0xff0000
    }
]

export default function configureCanvas(canvasRef) {
    canvas = canvasRef.current;
    width = canvas.clientWidth;
    height = canvas.clientHeight;

    camera = new THREE.PerspectiveCamera(45, width / height, 0.01, 100);
    camera.position.z = 1;
    camera.position.set(5, 5, 5);
    camera.lookAt(0, 0, 0);

    controls = new OrbitControls(camera, canvas);
    controls.update();

    scene = new THREE.Scene();

    geometry = new THREE.BoxGeometry(1.0, 1.0, 1.0);
    material = new THREE.MeshNormalMaterial();

    mesh = new THREE.Mesh(geometry, material);
    //scene.add( mesh );
    //createXYZAxis();
    createArms(elos);

    scene.background = new THREE.Color().setRGB( 0.95, 0.95, 0.95 );

    renderer = new THREE.WebGLRenderer( { antialias: true, canvas } );
    renderer.setSize( width, height );
    renderer.setAnimationLoop( animate );

}

function createAxis(vec, color) {
    const material = new THREE.LineBasicMaterial({ color: color });
    const points = [];
    points.push(new THREE.Vector3(0, 0, 0));
    points.push(new THREE.Vector3(vec[0], vec[1], vec[2]));

    const geometry = new THREE.BufferGeometry().setFromPoints( points );
    const axis = new THREE.Line(geometry, material);
    scene.add(axis);
}

function createXYZAxis() {
    createAxis([100, 0, 0], 0xff0000)
    createAxis([0, 100, 0], 0x00ff00)
    createAxis([0, 0, 100], 0xff)
}

function createArms(elos) {
    let arms = new THREE.Object3D();
    let elo = elos[0];
    let w = elo.length / scale_mm;
    let dim = 10 / scale_mm;

    let geometry = new THREE.BoxGeometry(w, dim, dim);
    let material = new THREE.MeshNormalMaterial();
    let mesh = new THREE.Mesh(geometry, material);

    mesh.position.x = w / 2;
    arms.add(mesh);
    arms.add(new THREE.AxesHelper())
    elo.mesh = arms;

    elo = elos[1];
    w = elo.length / scale_mm;
    geometry = new THREE.BoxGeometry(w, dim, dim);
    mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.z = 3.1415 / 2;
    mesh.position.x = (elos[0].length) / scale_mm;
    mesh.position.y = (elos[1].length / 2) / scale_mm;
    mesh.rotation.x = 3.1415 / 2;
    //mesh.rotation.x = 3.1415 / 2;
    //
    const axes = new THREE.AxesHelper();
    axes.material.depthTest = false;
    axes.renderOrder = 1;
    mesh.add(axes);

    elos[0].mesh.add(mesh)



    scene.add(arms);
}

function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;

  if (needResize) {
    renderer.setSize(width, height, false);
  }

  return needResize;
}

function animate( time ) {
    if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
        console.log("resized!")
    }

    //mesh.rotation.x = time / 2000;
    //mesh.rotation.y = time / 1000;
    //elos[0].mesh.rotation.y = time / 2000;

    renderer.render( scene, camera );
}


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
        angle: 0,
        color: 0xff0000,
        mesh: null,
        grid: null
    },
    {
        length: 140,
        angle: 30,
        color: 0xff0000,
        mesh: null,
        grid: null
    },
    {
        length: 115,
        angle: 30,
        color: 0xff0000,
        mesh: null,
        grid: null
    },
    {
        length: 100,
        angle: 30,
        color: 0xff0000,
        mesh: null,
        grid: null
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
    createArms(elos);
    scene.add(new THREE.AxesHelper(100))

    scene.background = new THREE.Color().setRGB( 0.95, 0.95, 0.95 );

    renderer = new THREE.WebGLRenderer( { antialias: true, canvas } );
    renderer.setSize(width, height);
    renderer.setAnimationLoop(animate);

}

function createAxes(size = 1) {
    let axes = new THREE.AxesHelper(size);
    axes.material.depthTest = false;
    axes.renderOrder = 1;

    return axes
}

function createElo(elo) {
    let w = elo.length / scale_mm;
    let dim = 10 / scale_mm;
    let geometry = new THREE.BoxGeometry(w, dim, dim);
    let material = new THREE.MeshNormalMaterial();
    let mesh = new THREE.Mesh(geometry, material);
    mesh.add(createAxes());

    elo.mesh = mesh
    mesh.position.x = w / 2

    let grid = new THREE.Object3D()
    grid.position.x = w / 2
    grid.add(createAxes())
    elo.grid = grid
    mesh.add(grid)

    return mesh;
}

function degToRad(angle) {
    return angle * Math.PI / 180
}

function createArms(elos) {
    let elo0 = createElo(elos[0])
    let elo1 = createElo(elos[1])
    let elo2 = createElo(elos[2])
    let elo3 = createElo(elos[3])

    elos[0].grid.rotation.z = 3.1415 / 2
    elos[0].grid.add(elo1)

    elos[0].grid.rotation.x = degToRad(elos[1].angle)

    elos[1].grid.add(elo2)
    elos[1].grid.rotation.y = -degToRad(elos[2].angle)

    elos[2].grid.add(elo3)
    elos[2].grid.rotation.y = -degToRad(elos[3].angle)

    let base = new THREE.Object3D()
    elo0.position.x = elos[0].length / scale_mm / 2
    base.add(elo0)
    scene.add(base);
    base.rotation.y = 3.1415 / 4
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
    //elos[0].mesh.rotation.y = time / 5000;

    renderer.render( scene, camera );
}


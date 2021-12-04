import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default class Viewer {
    constructor(width, height) {
        this.offsetX = window.innerWidth - width;

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();

        this.controls = new OrbitControls( this.camera, this.renderer.domElement );

        this.renderer.setSize( width, height );
        
        // Adding elements to scene
        const cube = this.createCube(true);
        cube.name = "cube";
        this.scene.add(cube);

        this.camera.position.z = 5;

        this.animate();

        const onWindowResize = () => {
            this.onWindowResize();
        }

        window.addEventListener( 'resize', onWindowResize, false );
    }

    onWindowResize() {
        this.camera.aspect = (window.innerWidth - this.offsetX) / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth - this.offsetX, window.innerHeight);
    }

    animateCube(cube) {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    }

    animate() {
        const render = () => {
            requestAnimationFrame(render);
            this.controls.update();

            // animating elements of scene
            this.animateCube(this.scene.getObjectByName("cube"));

            this.renderer.render(this.scene, this.camera);
        }

        render();
    }

    createCube(wireframe) {
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: wireframe } );    
        
        return new THREE.Mesh(geometry, material);
    }
}

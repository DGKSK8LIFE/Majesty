const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0xBB });
const cube = new THREE.Mesh(geometry, material);
const renderer = new THREE.WebGLRenderer();
scene.add(cube);

camera.position.z = 2;

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += .05;
    cube.rotation.y += .05;
    renderer.render(scene, camera);
}
animate();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

function generateColor() {
    const hexCode = "0123456789ABCDEF";
    let result = "#";
    for (let i = 0; i < 6; i++)
        result += hexCode[Math.floor(Math.random() * 16)]
    return result;
}

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: generateColor() });
const cube = new THREE.Mesh(geometry, material);
const renderer = new THREE.WebGLRenderer();
scene.add(cube);

camera.position.z = 2;

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
rotation = (Math.random() * (0.05 - 0.01))

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += rotation;
    cube.rotation.y += rotation;
    renderer.render(scene, camera);
}
animate();
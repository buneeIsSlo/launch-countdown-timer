const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");

const particleCollection = [];
const particleSize = {min: 1, max: 3};
const particleVelocity = {
    velocityX: {min: .03, max: .05},
    velocityY: {min: .03, max: .05}
}

window.addEventListener("load", () => {
    setUpCanvas();
    particlesVolume();
    particleCollection.forEach(particleInfo => drawParticle(particleInfo));
})

const setUpCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    canvasContext.fillStyle = "#fff";
}

const particlesVolume = () => {
    for(let i = 0; i < 50; i++) {
        particleCollection.push(createParticle());
    }
}

const createParticle = (particle = {}, prevPosY = null) => {
    particle.randomPosX = Math.random() * canvas.width;
    particle.randomPosY = prevPosY ? prevPosY : Math.random() * canvas.height;
    particle.randomSize = (Math.random() * (particleSize.max - particleSize.min)) + particleSize.min;

    return particle;
}

const drawParticle = (particleObj) => {
    canvasContext.beginPath();
    canvasContext.arc(particleObj.randomPosX, particleObj.randomPosY, particleObj.randomSize, 0, 2 * Math.PI);
    canvasContext.fill();
}
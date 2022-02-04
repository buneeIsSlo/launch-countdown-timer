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
    window.requestAnimationFrame(updateParticles);
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

    const initialVelocityY = getInitialVelocity(particle.randomSize);

    particle.velocity = {
        X: 0,
        Y: initialVelocityY,
        max: initialVelocityY * 2
    }

    return particle;
}

const getInitialVelocity = (size) => {
    const minVelo = particleVelocity.velocityY.min;
    const maxVelo = particleVelocity.velocityY.max;
    
    const range = maxVelo - minVelo;
    const fract = (size - particleSize.min) / (particleSize.max - particleSize.min);

    return minVelo + (fract * range);
}

const updateParticles = (timestamp) => {
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    let [x, y] = [.001, .001];

    for(particle of particleCollection) {
        particle.velocity.X = x;
        particle.velocity.Y = y;

        updatePosition(particle, timestamp);

        x += .0000005; y += .0000005;

        drawParticle(particle);
    }

    window.requestAnimationFrame(updateParticles);
}

const updatePosition = (particle, timestamp) => {
    particle.randomPosX -= (particle.velocity.X * 100);
    particle.randomPosY -= (particle.velocity.Y * 1000);

    if(particle.randomPosX < 0 || particle.randomPosY < 0) {
        particle = createParticle(particle, canvas.height + 10);
    }
}

const drawParticle = (particleObj) => {
    canvasContext.beginPath();
    canvasContext.arc(particleObj.randomPosX, particleObj.randomPosY, particleObj.randomSize, 0, 2 * Math.PI);
    canvasContext.fill();
}
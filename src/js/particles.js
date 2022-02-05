const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");

const particleCollection = [];
const particleSize = {min: 1, max: 4};
const particleVelocity = {
    X: {min: -.03, max: .05},
    Y: {min: .02, max: .1}
}

let prevTimestamp = 0;

window.addEventListener("load", () => {
    setUpCanvas();
    particlesVolume();
    window.requestAnimationFrame(updateParticles);
})

const setUpCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    canvasContext.fillStyle = "#eee";
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
    const minVelo = particleVelocity.Y.min;
    const maxVelo = particleVelocity.Y.max;
    
    const range = maxVelo - minVelo;
    const fract = (size - particleSize.min) / (particleSize.max - particleSize.min);

    return minVelo + (fract * range);
}

const updateParticles = (timestamp) => {
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);

    for(particle of particleCollection) {
        particle.velocity.X = updateVelocity(particle.velocity, 'X');
        particle.velocity.Y = updateVelocity(particle.velocity, 'Y');
        updatePosition(particle, timestamp - prevTimestamp);

        drawParticle(particle);
    }

    prevTimestamp = timestamp;
    window.requestAnimationFrame(updateParticles);
}

const updateVelocity = (velocity, direction) => {
    const minVelo = particleVelocity[direction].min;
    const maxVelo = direction === 'Y' ? velocity.max : particleVelocity[direction].max;
    const range = (maxVelo - minVelo) * .1;

    const randomVelo = (Math.random() * range) - (range / 2);
    const newVelo = velocity[direction] + randomVelo;

    return newVelo < minVelo ? minVelo : newVelo > maxVelo ? maxVelo : newVelo;
}

const updatePosition = (particle, timestamp) => {
    particle.randomPosX -= (particle.velocity.X * timestamp);
    particle.randomPosY -= (particle.velocity.Y * timestamp);

    if(particle.randomPosX < 0 || particle.randomPosY < 0) {
        particle = createParticle(particle, canvas.height + 10);
    }
}

const drawParticle = (particleObj) => {
    canvasContext.beginPath();
    canvasContext.arc(particleObj.randomPosX, particleObj.randomPosY, particleObj.randomSize, 0, 2 * Math.PI);
    canvasContext.fill();
}
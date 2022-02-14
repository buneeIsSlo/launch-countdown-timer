const canvas = document.querySelector("#canvas");
const canvasContext = canvas.getContext("2d");

const particleCollection = [];
const particleSize = { min: 1, max: 4 };
const particleVelocity = {
    X: { min: -.03, max: .05 },
    Y: { min: .02, max: .1 }
}

let prevTimestamp = 0;

/* Function to initialize particles exported to app.js */
export const initParticles = () => {
    setUpCanvas();
    particlesVolume();
    window.requestAnimationFrame(updateParticles);
}

/* Function set up canvas based on viewport width */
const setUpCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    canvasContext.fillStyle = "#c0c0c0"; // Sets the colour of the particle
}

/* Function to create total number of particles */
const particlesVolume = () => {
    for (let i = 0; i < 50; i++) {
        particleCollection.push(createParticle());
    }
}

/* Function to create a particle with random properties */
const createParticle = (particle = {}, prevPosY = null) => {
    particle.randomPosX = Math.random() * canvas.width;
    particle.randomPosY = prevPosY ? prevPosY : Math.random() * canvas.height;
    particle.randomSize = (Math.random() * (particleSize.max - particleSize.min)) + particleSize.min;

    const initialVelocityY = getInitialVelocity(particle.randomSize); // Velocity based on size of the particle

    // Set particle's initial velocities
    particle.velocity = {
        X: 0,
        Y: initialVelocityY,
        max: initialVelocityY * 2
    }

    return particle;
}

/* Function to get inital velocity based on size */
const getInitialVelocity = (size) => {
    const minVelo = particleVelocity.Y.min;
    const maxVelo = particleVelocity.Y.max;

    const range = maxVelo - minVelo;
    const fract = (size - particleSize.min) / (particleSize.max - particleSize.min);

    return minVelo + (fract * range);
}

/* Function to update properties of the particles*/
const updateParticles = (timestamp) => {
    canvasContext.clearRect(0, 0, canvas.width, canvas.height); // Clear previously drawn particles

    for (const particle of particleCollection) {
        particle.velocity.X = updateVelocity(particle.velocity, 'X'); // Update velocity of the particle in 'X' direction
        particle.velocity.Y = updateVelocity(particle.velocity, 'Y'); // Update velocity of the particle in 'Y' direction
        updatePosition(particle, timestamp - prevTimestamp); // Update position of the particle

        drawParticle(particle); // redraw new particle
    }

    prevTimestamp = timestamp;
    window.requestAnimationFrame(updateParticles); // This updates the particles 60 times a second
}

/* Function to update velocity of the particle */
const updateVelocity = (velocity, direction) => {
    const minVelo = particleVelocity[direction].min;
    const maxVelo = direction === 'Y' ? velocity.max : particleVelocity[direction].max;
    const range = (maxVelo - minVelo) * .1;

    const randomVelo = (Math.random() * range) - (range / 2);
    const newVelo = velocity[direction] + randomVelo;

    // If new random velocity is within bounds return new veloctiy
    return newVelo < minVelo ? minVelo : newVelo > maxVelo ? maxVelo : newVelo;
}

/* Function to update position of the particle */
const updatePosition = (particle, timestamp) => {
    particle.randomPosX -= (particle.velocity.X * timestamp);
    particle.randomPosY -= (particle.velocity.Y * timestamp);

    // If particle goes above the viewport, respawn it below the viewport
    if (particle.randomPosX < 0 || particle.randomPosY < 0) {
        particle = createParticle(particle, canvas.height + 10);
    }
}

/* Function to draw the particle */
const drawParticle = (particleObj) => {
    canvasContext.beginPath();
    canvasContext.arc(particleObj.randomPosX, particleObj.randomPosY, particleObj.randomSize, 0, 2 * Math.PI);
    canvasContext.fill();
}

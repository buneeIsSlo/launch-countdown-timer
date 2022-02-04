/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (() => {

eval("const canvas = document.getElementById(\"canvas\");\r\nconst canvasContext = canvas.getContext(\"2d\");\r\n\r\nconst particleCollection = [];\r\nconst particleSize = {min: 1, max: 4};\r\nconst particleVelocity = {\r\n    X: {min: -.03, max: .05},\r\n    Y: {min: .02, max: .1}\r\n}\r\n\r\nlet prevTimestamp = 0;\r\n\r\nwindow.addEventListener(\"load\", () => {\r\n    setUpCanvas();\r\n    particlesVolume();\r\n    window.requestAnimationFrame(updateParticles);\r\n})\r\n\r\nconst setUpCanvas = () => {\r\n    canvas.width = window.innerWidth;\r\n    canvas.height = window.innerHeight;\r\n\r\n    canvasContext.fillStyle = \"#eee\";\r\n}\r\n\r\nconst particlesVolume = () => {\r\n    for(let i = 0; i < 50; i++) {\r\n        particleCollection.push(createParticle());\r\n    }\r\n}\r\n\r\nconst createParticle = (particle = {}, prevPosY = null) => {\r\n    particle.randomPosX = Math.random() * canvas.width;\r\n    particle.randomPosY = prevPosY ? prevPosY : Math.random() * canvas.height;\r\n    particle.randomSize = (Math.random() * (particleSize.max - particleSize.min)) + particleSize.min;\r\n\r\n    const initialVelocityY = getInitialVelocity(particle.randomSize);\r\n\r\n    particle.velocity = {\r\n        X: 0,\r\n        Y: initialVelocityY,\r\n        max: initialVelocityY * 2\r\n    }\r\n\r\n    return particle;\r\n}\r\n\r\nconst getInitialVelocity = (size) => {\r\n    const minVelo = particleVelocity.Y.min;\r\n    const maxVelo = particleVelocity.Y.max;\r\n    \r\n    const range = maxVelo - minVelo;\r\n    const fract = (size - particleSize.min) / (particleSize.max - particleSize.min);\r\n\r\n    return minVelo + (fract * range);\r\n}\r\n\r\nconst updateParticles = (timestamp) => {\r\n    canvasContext.clearRect(0, 0, canvas.width, canvas.height);\r\n\r\n    for(particle of particleCollection) {\r\n        particle.velocity.X = updateVelocity(particle.velocity, 'X');\r\n        particle.velocity.Y = updateVelocity(particle.velocity, 'Y');\r\n        updatePosition(particle, timestamp - prevTimestamp);\r\n\r\n        drawParticle(particle);\r\n    }\r\n\r\n    prevTimestamp = timestamp;\r\n    window.requestAnimationFrame(updateParticles);\r\n}\r\n\r\nconst updateVelocity = (velocity, direction) => {\r\n    const minVelo = particleVelocity[direction].min;\r\n    const maxVelo = direction === 'Y' ? velocity.max : particleVelocity[direction].max;\r\n    const range = (maxVelo - minVelo) * .1;\r\n\r\n    const randomVelo = (Math.random() * range) - (range / 2);\r\n    const newVelo = velocity[direction] + randomVelo;\r\n\r\n    return newVelo < minVelo ? minVelo : newVelo > maxVelo ? maxVelo : newVelo;\r\n}\r\n\r\nconst updatePosition = (particle, timestamp) => {\r\n    particle.randomPosX -= (particle.velocity.X * timestamp);\r\n    particle.randomPosY -= (particle.velocity.Y * timestamp);\r\n\r\n    if(particle.randomPosX < 0 || particle.randomPosY < 0) {\r\n        particle = createParticle(particle, canvas.height + 10);\r\n    }\r\n}\r\n\r\nconst drawParticle = (particleObj) => {\r\n    canvasContext.beginPath();\r\n    canvasContext.arc(particleObj.randomPosX, particleObj.randomPosY, particleObj.randomSize, 0, 2 * Math.PI);\r\n    canvasContext.fill();\r\n}\n\n//# sourceURL=webpack://launch-countdown-timer-main/./src/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/app.js"]();
/******/ 	
/******/ })()
;
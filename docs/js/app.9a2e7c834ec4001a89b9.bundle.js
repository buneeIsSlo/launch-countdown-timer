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

eval("const canvas = document.getElementById(\"canvas\");\r\nconst canvasContext = canvas.getContext(\"2d\");\r\n\r\nconst particleCollection = [];\r\nconst particleSize = {min: 1, max: 3};\r\nconst particleVelocity = {\r\n    velocityX: {min: .03, max: .05},\r\n    velocityY: {min: .03, max: .05}\r\n}\r\n\r\nwindow.addEventListener(\"load\", () => {\r\n    setUpCanvas();\r\n    particlesVolume();\r\n    particleCollection.forEach(particleInfo => drawParticle(particleInfo));\r\n})\r\n\r\nconst setUpCanvas = () => {\r\n    canvas.width = window.innerWidth;\r\n    canvas.height = window.innerHeight;\r\n\r\n    canvasContext.fillStyle = \"#fff\";\r\n}\r\n\r\nconst particlesVolume = () => {\r\n    for(let i = 0; i < 50; i++) {\r\n        particleCollection.push(createParticle());\r\n    }\r\n}\r\n\r\nconst createParticle = (particle = {}, prevPosY = null) => {\r\n    particle.randomPosX = Math.random() * canvas.width;\r\n    particle.randomPosY = prevPosY ? prevPosY : Math.random() * canvas.height;\r\n    particle.randomSize = (Math.random() * (particleSize.max - particleSize.min)) + particleSize.min;\r\n\r\n    return particle;\r\n}\r\n\r\nconst drawParticle = (particleObj) => {\r\n    canvasContext.beginPath();\r\n    canvasContext.arc(particleObj.randomPosX, particleObj.randomPosY, particleObj.randomSize, 0, 2 * Math.PI);\r\n    canvasContext.fill();\r\n}\n\n//# sourceURL=webpack://launch-countdown-timer-main/./src/js/app.js?");

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
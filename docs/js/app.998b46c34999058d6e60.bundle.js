/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_particles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/particles.js */ \"./src/js/particles.js\");\n/* harmony import */ var _js_timer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/timer.js */ \"./src/js/timer.js\");\n__webpack_require__.e(/*! import() */ \"src_css_normailze_css\").then(__webpack_require__.bind(__webpack_require__, /*! ../css/normailze.css */ \"./src/css/normailze.css\"));\n__webpack_require__.e(/*! import() */ \"src_css_app_css\").then(__webpack_require__.bind(__webpack_require__, /*! ../css/app.css */ \"./src/css/app.css\"));\n\n\nwindow.addEventListener(\"load\", function () {\n  (0,_js_particles_js__WEBPACK_IMPORTED_MODULE_0__.initParticles)();\n});\nvar daysBeforeLaunch = 9;\nvar totalSeconds = daysBeforeLaunch > 100 ? 100 * 86400 : daysBeforeLaunch * 86400;\nvar days = new _js_timer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](totalSeconds, \"data-card=\\\"days\\\"\");\nvar hours = new _js_timer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](totalSeconds, \"data-card=\\\"hours\\\"\");\nvar minutes = new _js_timer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](totalSeconds, \"data-card=\\\"minutes\\\"\");\nvar seconds = new _js_timer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](totalSeconds, \"data-card=\\\"seconds\\\"\");\n\n//# sourceURL=webpack://launch-countdown-timer-main/./src/js/app.js?");

/***/ }),

/***/ "./src/js/particles.js":
/*!*****************************!*\
  !*** ./src/js/particles.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initParticles\": () => (/* binding */ initParticles)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar canvas = document.querySelector(\"#canvas\");\nvar canvasContext = canvas.getContext(\"2d\");\nconsole.log(canvasContext);\nvar particleCollection = [];\nvar particleSize = {\n  min: 1,\n  max: 4\n};\nvar particleVelocity = {\n  X: {\n    min: -.03,\n    max: .05\n  },\n  Y: {\n    min: .02,\n    max: .1\n  }\n};\nvar prevTimestamp = 0;\nvar initParticles = function initParticles() {\n  setUpCanvas();\n  particlesVolume();\n  window.requestAnimationFrame(updateParticles);\n};\n\nvar setUpCanvas = function setUpCanvas() {\n  canvas.width = window.innerWidth;\n  canvas.height = window.innerHeight;\n  canvasContext.fillStyle = \"#c0c0c0\";\n};\n\nvar particlesVolume = function particlesVolume() {\n  for (var i = 0; i < 50; i++) {\n    particleCollection.push(createParticle());\n  }\n};\n\nvar createParticle = function createParticle() {\n  var particle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var prevPosY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n  particle.randomPosX = Math.random() * canvas.width;\n  particle.randomPosY = prevPosY ? prevPosY : Math.random() * canvas.height;\n  particle.randomSize = Math.random() * (particleSize.max - particleSize.min) + particleSize.min;\n  var initialVelocityY = getInitialVelocity(particle.randomSize);\n  particle.velocity = {\n    X: 0,\n    Y: initialVelocityY,\n    max: initialVelocityY * 2\n  };\n  return particle;\n};\n\nvar getInitialVelocity = function getInitialVelocity(size) {\n  var minVelo = particleVelocity.Y.min;\n  var maxVelo = particleVelocity.Y.max;\n  var range = maxVelo - minVelo;\n  var fract = (size - particleSize.min) / (particleSize.max - particleSize.min);\n  return minVelo + fract * range;\n};\n\nvar updateParticles = function updateParticles(timestamp) {\n  canvasContext.clearRect(0, 0, canvas.width, canvas.height);\n\n  var _iterator = _createForOfIteratorHelper(particleCollection),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var particle = _step.value;\n      particle.velocity.X = updateVelocity(particle.velocity, 'X');\n      particle.velocity.Y = updateVelocity(particle.velocity, 'Y');\n      updatePosition(particle, timestamp - prevTimestamp);\n      drawParticle(particle);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  prevTimestamp = timestamp;\n  window.requestAnimationFrame(updateParticles);\n};\n\nvar updateVelocity = function updateVelocity(velocity, direction) {\n  var minVelo = particleVelocity[direction].min;\n  var maxVelo = direction === 'Y' ? velocity.max : particleVelocity[direction].max;\n  var range = (maxVelo - minVelo) * .1;\n  var randomVelo = Math.random() * range - range / 2;\n  var newVelo = velocity[direction] + randomVelo;\n  return newVelo < minVelo ? minVelo : newVelo > maxVelo ? maxVelo : newVelo;\n};\n\nvar updatePosition = function updatePosition(particle, timestamp) {\n  particle.randomPosX -= particle.velocity.X * timestamp;\n  particle.randomPosY -= particle.velocity.Y * timestamp;\n\n  if (particle.randomPosX < 0 || particle.randomPosY < 0) {\n    particle = createParticle(particle, canvas.height + 10);\n  }\n};\n\nvar drawParticle = function drawParticle(particleObj) {\n  canvasContext.beginPath();\n  canvasContext.arc(particleObj.randomPosX, particleObj.randomPosY, particleObj.randomSize, 0, 2 * Math.PI);\n  canvasContext.fill();\n};\n\n//# sourceURL=webpack://launch-countdown-timer-main/./src/js/particles.js?");

/***/ }),

/***/ "./src/js/timer.js":
/*!*************************!*\
  !*** ./src/js/timer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Timer)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Timer = /*#__PURE__*/function () {\n  function Timer(time, element) {\n    _classCallCheck(this, Timer);\n\n    this.time = time;\n    this.element = element;\n    if (!this.vars()) return false;\n    this.setUpEvents();\n  }\n\n  _createClass(Timer, [{\n    key: \"vars\",\n    value: function vars() {\n      this.selectors = {\n        card: this.element,\n        timerFront: \"data-front\",\n        timerBack: \"data-back\",\n        screenReaderEle: \"data-sr\",\n        activeClass: \"running\"\n      };\n      this.card = document.querySelector(\"[\".concat(this.selectors.card, \"]\"));\n      this.timerFront = this.card.querySelector(\"[\".concat(this.selectors.timerFront, \"]\"));\n      this.timerBack = this.card.querySelector(\"[\".concat(this.selectors.timerBack, \"]\"));\n      this.screenReaderEle = document.querySelector(\"[\".concat(this.selectors.screenReaderEle, \"]\"));\n      if (!this.card || !this.timerFront || !this.timerBack) return false;\n      this.cardDataset = this.card.dataset.card;\n      this.countdown;\n      this.currentTime = 0;\n      this.nextTime = 0;\n      this.initialTime = 0;\n      this.duration = 500;\n      this.firstAnimation = false;\n      this.isCardFlipping = false;\n      return true;\n    }\n  }, {\n    key: \"setUpEvents\",\n    value: function setUpEvents() {\n      this.timer(this.time);\n    }\n  }, {\n    key: \"timer\",\n    value: function timer(seconds) {\n      var _this = this;\n\n      var now = Date.now();\n      var endTime = now + seconds * 1000;\n      this.displayTimeLeft(seconds);\n      this.firstAnimation = true;\n      var countdown = setInterval(function () {\n        var secondsLeft = Math.round((endTime - Date.now()) / 1000);\n\n        if (secondsLeft < 0) {\n          clearInterval(countdown);\n          return;\n        }\n\n        _this.displayTimeLeft(secondsLeft);\n      }, 1000);\n    }\n  }, {\n    key: \"displayTimeLeft\",\n    value: function displayTimeLeft(seconds) {\n      this.days = Math.floor(seconds / 86400);\n      this.remainderHours = seconds % 86400;\n      this.hours = Math.floor(this.remainderHours / 3600);\n      this.remainderMinutes = seconds % 3600;\n      this.minutes = Math.floor(this.remainderMinutes / 60);\n      this.remainderSeconds = seconds % 60;\n      if (!this.firstAnimation) return;\n\n      switch (this.cardDataset) {\n        case \"days\":\n          this.currentTime = \"\".concat(this.days + 1);\n\n          if (this.initialTime != this.currentTime) {\n            this.nextTime = this.days;\n            this.flipDown(this.currentTime, this.nextTime);\n          }\n\n          break;\n\n        case \"hours\":\n          this.currentTime = \"\".concat(this.hours + 1);\n\n          if (this.initialTime != this.currentTime) {\n            this.nextTime = this.hours;\n            this.flipDown(this.currentTime, this.nextTime);\n          }\n\n          break;\n\n        case \"minutes\":\n          this.currentTime = \"\".concat(this.minutes + 1);\n\n          if (this.initialTime != this.currentTime) {\n            this.nextTime = this.minutes;\n            this.flipDown(this.currentTime, this.nextTime);\n            this.handleScreenReaders();\n          }\n\n          break;\n\n        default:\n          this.currentTime = \"\".concat(this.remainderSeconds + 1);\n          this.nextTime = this.remainderSeconds;\n          this.flipDown(this.currentTime, this.nextTime);\n      }\n    }\n  }, {\n    key: \"flipDown\",\n    value: function flipDown(currentTime, nextTime) {\n      var _this2 = this;\n\n      if (this.isCardFlipping) return false;\n      this.isCardFlipping = true;\n      this.cardFrontTime(currentTime);\n      this.cardBackTime(nextTime);\n      this.card.classList.add(\"\".concat(this.selectors.activeClass));\n      setTimeout(function () {\n        _this2.card.classList.remove(\"\".concat(_this2.selectors.activeClass));\n\n        _this2.isCardFlipping = false;\n\n        _this2.cardFrontTime(nextTime);\n      }, this.duration);\n    }\n  }, {\n    key: \"cardFrontTime\",\n    value: function cardFrontTime(time) {\n      this.initialTime = +time + 1;\n\n      if (this.cardDataset === \"days\") {\n        this.setTime(time, this.days, this.timerFront, \"front\");\n      } else if (this.cardDataset === \"hours\") {\n        this.setTime(time, 23, this.timerFront, \"front\");\n      } else {\n        this.setTime(time, 59, this.timerFront, \"front\");\n      }\n    }\n  }, {\n    key: \"cardBackTime\",\n    value: function cardBackTime(time) {\n      this.setTime(time, 59, this.timerBack, \"back\");\n    }\n  }, {\n    key: \"setTime\",\n    value: function setTime(time, limit, card, side) {\n      if (time > limit) {\n        card.dataset[side] = \"00\";\n      } else if (time >= 10) {\n        card.dataset[side] = time;\n      } else if (time < 10) {\n        card.dataset[side] = \"0\".concat(time);\n      }\n    }\n  }, {\n    key: \"handleScreenReaders\",\n    value: function handleScreenReaders() {\n      this.screenReaderEle.innerHTML = \"Time before launch: \".concat(this.days, \" days \").concat(this.hours, \" hours \").concat(this.minutes, \" minutes\");\n    }\n  }]);\n\n  return Timer;\n}();\n\n\n\n//# sourceURL=webpack://launch-countdown-timer-main/./src/js/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "js/" + chunkId + "." + {"src_css_normailze_css":"a33ebbe075be53734ef0","src_css_app_css":"e12ff2d6bbeeef056223"}[chunkId] + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "launch-countdown-timer-main:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunklaunch_countdown_timer_main"] = self["webpackChunklaunch_countdown_timer_main"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/timer.js */ \"./src/js/timer.js\");\n__webpack_require__.e(/*! import() */ \"src_css_normailze_css\").then(__webpack_require__.bind(__webpack_require__, /*! ../css/normailze.css */ \"./src/css/normailze.css\"));\r\n__webpack_require__.e(/*! import() */ \"src_css_app_css\").then(__webpack_require__.bind(__webpack_require__, /*! ../css/app.css */ \"./src/css/app.css\"));\r\n\r\n\r\n\r\nconst daysBeforeLaunch = 9;\r\nconst totalSeconds = daysBeforeLaunch > 100 ? (100 * 86400) : (daysBeforeLaunch * 86400);\r\n\r\nlet days = new _js_timer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](totalSeconds, `data-card=\"days\"`);\r\nlet hours = new _js_timer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](totalSeconds, `data-card=\"hours\"`);\r\nlet minutes = new _js_timer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](totalSeconds, `data-card=\"minutes\"`);\r\nlet seconds = new _js_timer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](totalSeconds, `data-card=\"seconds\"`);\r\n\n\n//# sourceURL=webpack://launch-countdown-timer-main/./src/js/app.js?");

/***/ }),

/***/ "./src/js/timer.js":
/*!*************************!*\
  !*** ./src/js/timer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Timer)\n/* harmony export */ });\nclass Timer {\r\n\r\n    constructor(time, element) {\r\n        this.time = time;\r\n        this.element = element;\r\n        if (!this.vars()) return false;\r\n        this.setUpEvents();\r\n    }\r\n\r\n    vars() {\r\n        this.selectors = {\r\n            card: this.element,\r\n            timerFront: \"data-front\",\r\n            timerBack: \"data-back\",\r\n            screenReaderEle: \"data-sr\",\r\n            activeClass: \"running\"\r\n        }\r\n\r\n        this.card = document.querySelector(`[${this.selectors.card}]`);\r\n        this.timerFront = this.card.querySelector(`[${this.selectors.timerFront}]`);\r\n        this.timerBack = this.card.querySelector(`[${this.selectors.timerBack}]`);\r\n        this.screenReaderEle = document.querySelector(`[${this.selectors.screenReaderEle}]`);\r\n        if (!this.card || !this.timerFront || !this.timerBack) return false;\r\n\r\n        this.cardDataset = this.card.dataset.card;\r\n        this.countdown;\r\n        this.currentTime = 0;\r\n        this.nextTime = 0;\r\n        this.initialTime = 0;\r\n        this.duration = 500;\r\n        this.firstAnimation = false;\r\n        this.isCardFlipping = false;\r\n\r\n        return true;\r\n    }\r\n\r\n    setUpEvents() {\r\n        this.timer(this.time);\r\n    }\r\n\r\n    timer(seconds) {\r\n        const now = Date.now();\r\n        const endTime = now + (seconds * 1000);\r\n\r\n        this.displayTimeLeft(seconds);\r\n        this.firstAnimation = true;\r\n\r\n        const countdown = setInterval(() => {\r\n            const secondsLeft = Math.round((endTime - Date.now()) / 1000);\r\n\r\n            if (secondsLeft < 0) {\r\n                clearInterval(countdown);\r\n                return;\r\n            }\r\n\r\n            this.displayTimeLeft(secondsLeft);\r\n        }, 1000);\r\n    }\r\n\r\n    displayTimeLeft(seconds) {\r\n        this.days = Math.floor(seconds / 86400);\r\n        this.remainderHours = seconds % 86400;\r\n        this.hours = Math.floor(this.remainderHours / 3600);\r\n        this.remainderMinutes = seconds % 3600;\r\n        this.minutes = Math.floor(this.remainderMinutes / 60);\r\n        this.remainderSeconds = seconds % 60;\r\n\r\n        if (!this.firstAnimation) return;\r\n\r\n        switch (this.cardDataset) {\r\n            case \"days\":\r\n                this.currentTime = `${this.days + 1}`;\r\n\r\n                if (this.initialTime != this.currentTime) {\r\n                    this.nextTime = this.days;\r\n                    this.flipDown(this.currentTime, this.nextTime);\r\n                }\r\n                break;\r\n\r\n            case \"hours\":\r\n                this.currentTime = `${this.hours + 1}`;\r\n\r\n                if (this.initialTime != this.currentTime) {\r\n                    this.nextTime = this.hours;\r\n                    this.flipDown(this.currentTime, this.nextTime);\r\n                }\r\n                break;\r\n\r\n            case \"minutes\":\r\n                this.currentTime = `${this.minutes + 1}`;\r\n\r\n                if (this.initialTime != this.currentTime) {\r\n                    this.nextTime = this.minutes;\r\n                    this.flipDown(this.currentTime, this.nextTime);\r\n                    this.handleScreenReaders();\r\n                }\r\n                break;\r\n\r\n            default:\r\n                this.currentTime = `${this.remainderSeconds + 1}`;\r\n                this.nextTime = this.remainderSeconds;\r\n                this.flipDown(this.currentTime, this.nextTime);\r\n        }\r\n\r\n    }\r\n\r\n    flipDown(currentTime, nextTime) {\r\n        if (this.isCardFlipping) return false;\r\n\r\n        this.isCardFlipping = true;\r\n        this.cardFrontTime(currentTime);\r\n        this.cardBackTime(nextTime);\r\n        this.card.classList.add(`${this.selectors.activeClass}`);\r\n\r\n        setTimeout(() => {\r\n            this.card.classList.remove(`${this.selectors.activeClass}`);\r\n            this.isCardFlipping = false;\r\n            this.cardFrontTime(nextTime);\r\n        }, this.duration)\r\n    }\r\n\r\n    cardFrontTime(time) {\r\n        this.initialTime = +(time) + 1;\r\n\r\n        if (this.cardDataset === \"days\") {\r\n            this.setTime(time, this.days, this.timerFront, \"front\");\r\n        }\r\n        else if (this.cardDataset === \"hours\") {\r\n            this.setTime(time, 23, this.timerFront, \"front\");\r\n        }\r\n        else {\r\n            this.setTime(time, 59, this.timerFront, \"front\");\r\n        }\r\n    }\r\n\r\n    cardBackTime(time) {\r\n        this.setTime(time, 59, this.timerBack, \"back\");\r\n    }\r\n\r\n    setTime(time, limit, card, side) {\r\n        if (time > limit) {\r\n            card.dataset[side] = \"00\";\r\n        }\r\n        else if (time >= 10) {\r\n            card.dataset[side] = time;\r\n        }\r\n        else if (time < 10) {\r\n            card.dataset[side] = `0${time}`;\r\n        }\r\n    }\r\n\r\n    handleScreenReaders() {\r\n        this.screenReaderEle.innerHTML = `Time before launch: ${this.days} days ${this.hours} hours ${this.minutes} minutes`;\r\n    }\r\n}\n\n//# sourceURL=webpack://launch-countdown-timer-main/./src/js/timer.js?");

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
/******/ 			return "js/" + chunkId + "." + {"src_css_normailze_css":"a33ebbe075be53734ef0","src_css_app_css":"2355a04ecd7e6761f634"}[chunkId] + ".bundle.js";
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
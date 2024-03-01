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

/***/ "./client/src/index.js":
/*!*****************************!*\
  !*** ./client/src/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./client/src/styles.css\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var userName = prompt(\"Введите ваше имя:\");\n  while (!userName || userName.trim() === \"\") {\n    userName = prompt(\"Пожалуйста, введите ваше имя:\");\n  }\n  var btnSend = document.querySelector('.btn-send');\n  var inputEl = document.querySelector('.msg');\n  var chatContainer = document.querySelector('.chat-container');\n  var ws = new WebSocket('ws://localhost:1111');\n  ws.onmessage = function (event) {\n    var message = JSON.parse(event.data);\n    showMessage(message);\n  };\n  ws.onopen = function () {\n    console.log('Connected');\n    ws.send(JSON.stringify({\n      type: 'join',\n      name: userName\n    }));\n    btnSend.onclick = function () {\n      var msg = inputEl.value.trim();\n      if (msg) {\n        ws.send(JSON.stringify({\n          type: 'message',\n          msg: msg,\n          name: userName\n        }));\n      }\n      inputEl.value = '';\n    };\n  };\n  ws.onclose = function () {\n    console.log('Disconnected');\n  };\n  function showMessage(message) {\n    var messageElement = document.createElement('div');\n    messageElement.classList.add('message');\n    messageElement.innerHTML = \"\\n            <div><strong>\".concat(message.name, \"</strong> (\").concat(message.time, \"): \").concat(message.msg, \"</div>\\n        \");\n    chatContainer.appendChild(messageElement);\n  }\n});\n\n//# sourceURL=webpack://lesson25/./client/src/index.js?");

/***/ }),

/***/ "./client/src/styles.css":
/*!*******************************!*\
  !*** ./client/src/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lesson25/./client/src/styles.css?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./client/src/index.js");
/******/ 	
/******/ })()
;
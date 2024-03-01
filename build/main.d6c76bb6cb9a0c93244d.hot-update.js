"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatelesson25"]("main",{

/***/ "./client/src/index.js":
/*!*****************************!*\
  !*** ./client/src/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./client/src/styles.css\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var userName = prompt(\"Введите ваше имя:\");\n  while (!userName || userName.trim() === \"\") {\n    userName = prompt(\"Пожалуйста, введите ваше имя:\");\n  }\n  var btnSend = document.querySelector('.btn-send');\n  var inputEl = document.querySelector('.msg');\n  var chatContainer = document.querySelector('.chat-container');\n  var ws = new WebSocket('ws://localhost:1111');\n  ws.onmessage = function (event) {\n    var message = JSON.parse(event.data);\n    showMessage(message);\n  };\n  ws.onopen = function () {\n    console.log('Connected');\n    ws.send(JSON.stringify({\n      type: 'join',\n      name: userName\n    }));\n    btnSend.onclick = function () {\n      var msg = inputEl.value.trim();\n      if (msg) {\n        ws.send(JSON.stringify({\n          type: 'message',\n          msg: msg,\n          name: userName\n        }));\n      }\n      inputEl.value = '';\n    };\n  };\n  ws.onclose = function () {\n    console.log('Disconnected');\n  };\n  function showMessage(message) {\n    var messageElement = document.createElement('div');\n    messageElement.classList.add('message');\n    messageElement.innerHTML = \"\\n            <div><strong>\".concat(message.name, \"</strong> (\").concat(message.time, \"): \").concat(message.msg, \"</div>\\n        \");\n    chatContainer.appendChild(messageElement);\n  }\n});\n\n//# sourceURL=webpack://lesson25/./client/src/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cf53d318c675eda3c9d6")
/******/ })();
/******/ 
/******/ }
);
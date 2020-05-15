/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/algorithms/numeric.js":
/*!***********************************!*\
  !*** ./src/algorithms/numeric.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// This file includes algorithms for numeric operations
var randomInteger;
/* harmony default export */ __webpack_exports__["default"] = (randomInteger = function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
});

/***/ }),

/***/ "./src/algorithms/requests.js":
/*!************************************!*\
  !*** ./src/algorithms/requests.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// This file includes functions for requests to server and etc
// This function return Json from url
var getJsonFromUrl;
/* harmony default export */ __webpack_exports__["default"] = (getJsonFromUrl = function getJsonFromUrl(url) {
  return fetch(url).then(function (responce) {
    return responce.json();
  });
});

/***/ }),

/***/ "./src/engine/gameFieldActivity.js":
/*!*****************************************!*\
  !*** ./src/engine/gameFieldActivity.js ***!
  \*****************************************/
/*! exports provided: removeField, createSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeField", function() { return removeField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelector", function() { return createSelector; });
var test; // input parameter - elemet which must be removed

var removeField = function removeField(elemeintId) {
  var gameMenu = document.getElementById(elemeintId);
  gameMenu.remove();
}; // create settings sekectors


var createSelector = function createSelector(inEl, nodeName) {
  var selector = document.createElement("select");

  if (nodeName === "difficultyLvl") {
    selector.innerHTML = "<option selected value=\"1\" >Easy</option>\n                        <option>Medium</option>\n                        <option>Hard</option>";
  }

  if (nodeName === "cardSet") {
    selector.innerHTML = "<option selected >Cats</option>\n                        <option>People</option>\n                        <option>Paintings</option>";
  }

  inEl.append(selector);
};



/***/ }),

/***/ "./src/engine/newGame.js":
/*!*******************************!*\
  !*** ./src/engine/newGame.js ***!
  \*******************************/
/*! exports provided: gameInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameInit", function() { return gameInit; });
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.js */ "./src/engine/settings.js");
/* harmony import */ var _algorithms_numeric_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../algorithms/numeric.js */ "./src/algorithms/numeric.js");
/* harmony import */ var _algorithms_requests_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../algorithms/requests.js */ "./src/algorithms/requests.js");



var GAME_DATA_URL = "http://127.0.0.1:5500/dist/data/gameData.json"; // Предпологаяю, что эта функция должна храниться в gameFieldActivity и вызываться
//   при клике на кнопку "новая игрв"

var addCardsOnField = function addCardsOnField(fieldSize) {
  var doc = document.getElementById("work-space");

  for (var i = 0; i < fieldSize; i++) {
    var div = document.createElement("div");
    div.classList.add("card");
    div.setAttribute("id", "".concat(i, "-card"));
    div.innerHTML = "<div class=\"front-card\">front</div>\n          <div class=\"back-card\">back</div>";
    doc.append(div);
  }
};

var createGameMatrix = function createGameMatrix(fieldSize) {
  var gameMatrix = [];
  Object(_algorithms_requests_js__WEBPACK_IMPORTED_MODULE_2__["getJsonFromUrl"])(GAME_DATA_URL).then(function (data) {
    return console.log(data);
  }); // while (fieldSize / 2 < cards.size) {
  //   randomInteger(0, 14);
  // }
  // TODO: выбрать позиции для картинок
};

var gameInit = function gameInit() {
  var fieldSize = Object(_settings_js__WEBPACK_IMPORTED_MODULE_0__["getFieldSize"])();
  addCardsOnField(fieldSize);
  createGameMatrix(fieldSize);
};



/***/ }),

/***/ "./src/engine/settings.js":
/*!********************************!*\
  !*** ./src/engine/settings.js ***!
  \********************************/
/*! exports provided: levelOfDifficulty, cardSet, getFieldSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "levelOfDifficulty", function() { return levelOfDifficulty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardSet", function() { return cardSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFieldSize", function() { return getFieldSize; });
/* game settings are stored here */

/* This file may be convert to json if you need to create server side */
var levelOfDifficulty = "Easy";
var cardSet = "cat";

var getFieldSize = function getFieldSize() {
  switch (levelOfDifficulty) {
    case "Easy":
      return 12;

    case "Medium":
      return 18;

    case "Hard":
      return 24;

    default:
      return 12;
  }
};

var getCardSet = function getCardSet() {};



/***/ }),

/***/ "./src/events/buttons-clicks.js":
/*!**************************************!*\
  !*** ./src/events/buttons-clicks.js ***!
  \**************************************/
/*! exports provided: newGame, openOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newGame", function() { return newGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openOptions", function() { return openOptions; });
/* harmony import */ var _engine_gameFieldActivity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../engine/gameFieldActivity.js */ "./src/engine/gameFieldActivity.js");
/* harmony import */ var _engine_newGame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../engine/newGame.js */ "./src/engine/newGame.js");

 // This btn removed game-menu and uploaded game-field wich cards

var newGame = function newGame() {
  Object(_engine_gameFieldActivity_js__WEBPACK_IMPORTED_MODULE_0__["removeField"])("game-menu");
  Object(_engine_newGame_js__WEBPACK_IMPORTED_MODULE_1__["gameInit"])();
};

var openOptions = function openOptions() {
  Object(_engine_gameFieldActivity_js__WEBPACK_IMPORTED_MODULE_0__["removeField"])("game-menu");
  var doc = document.getElementById("work-space");
  var div = document.createElement("div");
  div.setAttribute("id", "game-menu");
  doc.append(div);
  Object(_engine_gameFieldActivity_js__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(div, "difficultyLvl");
  Object(_engine_gameFieldActivity_js__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(div, "cardSet");
  var button = document.createElement("button");
  button.classList.add("menu-btn");
  button.innerText = "Back";
  button.setAttribute("id", "back-to-main-menu-btn");
  div.append(button);
};



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _events_buttons_clicks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events/buttons-clicks.js */ "./src/events/buttons-clicks.js");


window.onload = function () {
  var newGameBtn = document.getElementById("new-game-btn");
  var optionsBtn = document.getElementById("options-btn");
  newGameBtn.onclick = _events_buttons_clicks_js__WEBPACK_IMPORTED_MODULE_0__["newGame"];
  optionsBtn.onclick = _events_buttons_clicks_js__WEBPACK_IMPORTED_MODULE_0__["openOptions"];
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FsZ29yaXRobXMvbnVtZXJpYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWxnb3JpdGhtcy9yZXF1ZXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dhbWVGaWVsZEFjdGl2aXR5LmpzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvbmV3R2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3NldHRpbmdzLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvYnV0dG9ucy1jbGlja3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbInJhbmRvbUludGVnZXIiLCJtaW4iLCJtYXgiLCJyYW5kIiwiTWF0aCIsInJhbmRvbSIsImZsb29yIiwiZ2V0SnNvbkZyb21VcmwiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25jZSIsImpzb24iLCJ0ZXN0IiwicmVtb3ZlRmllbGQiLCJlbGVtZWludElkIiwiZ2FtZU1lbnUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVtb3ZlIiwiY3JlYXRlU2VsZWN0b3IiLCJpbkVsIiwibm9kZU5hbWUiLCJzZWxlY3RvciIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJhcHBlbmQiLCJHQU1FX0RBVEFfVVJMIiwiYWRkQ2FyZHNPbkZpZWxkIiwiZmllbGRTaXplIiwiZG9jIiwiaSIsImRpdiIsImNsYXNzTGlzdCIsImFkZCIsInNldEF0dHJpYnV0ZSIsImNyZWF0ZUdhbWVNYXRyaXgiLCJnYW1lTWF0cml4IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJnYW1lSW5pdCIsImdldEZpZWxkU2l6ZSIsImxldmVsT2ZEaWZmaWN1bHR5IiwiY2FyZFNldCIsImdldENhcmRTZXQiLCJuZXdHYW1lIiwib3Blbk9wdGlvbnMiLCJidXR0b24iLCJpbm5lclRleHQiLCJ3aW5kb3ciLCJvbmxv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cUVBQXJCO0FBQ0QsQ0FMRCxDIiwiZmlsZSI6ImpzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBUaGlzIGZpbGUgaW5jbHVkZXMgYWxnb3JpdGhtcyBmb3IgbnVtZXJpYyBvcGVyYXRpb25zXG5cbmxldCByYW5kb21JbnRlZ2VyO1xuZXhwb3J0IGRlZmF1bHQgcmFuZG9tSW50ZWdlciA9IChtaW4sIG1heCkgPT4ge1xuICBsZXQgcmFuZCA9IG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4ICsgMSAtIG1pbik7XG4gIHJldHVybiBNYXRoLmZsb29yKHJhbmQpO1xufTtcbiIsIi8vIFRoaXMgZmlsZSBpbmNsdWRlcyBmdW5jdGlvbnMgZm9yIHJlcXVlc3RzIHRvIHNlcnZlciBhbmQgZXRjXG5cbi8vIFRoaXMgZnVuY3Rpb24gcmV0dXJuIEpzb24gZnJvbSB1cmxcbmxldCBnZXRKc29uRnJvbVVybDtcbmV4cG9ydCBkZWZhdWx0IGdldEpzb25Gcm9tVXJsID0gKHVybCkgPT4ge1xuICByZXR1cm4gZmV0Y2godXJsKS50aGVuKChyZXNwb25jZSkgPT4ge1xuICAgIHJldHVybiByZXNwb25jZS5qc29uKCk7XG4gIH0pO1xufTtcbiIsImxldCB0ZXN0O1xuXG4vLyBpbnB1dCBwYXJhbWV0ZXIgLSBlbGVtZXQgd2hpY2ggbXVzdCBiZSByZW1vdmVkXG5jb25zdCByZW1vdmVGaWVsZCA9IChlbGVtZWludElkKSA9PiB7XG4gIGNvbnN0IGdhbWVNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVpbnRJZCk7XG4gIGdhbWVNZW51LnJlbW92ZSgpO1xufTtcblxuLy8gY3JlYXRlIHNldHRpbmdzIHNla2VjdG9yc1xuY29uc3QgY3JlYXRlU2VsZWN0b3IgPSAoaW5FbCwgbm9kZU5hbWUpID0+IHtcbiAgbGV0IHNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgaWYgKG5vZGVOYW1lID09PSBcImRpZmZpY3VsdHlMdmxcIikge1xuICAgIHNlbGVjdG9yLmlubmVySFRNTCA9IGA8b3B0aW9uIHNlbGVjdGVkIHZhbHVlPVwiMVwiID5FYXN5PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPk1lZGl1bTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5IYXJkPC9vcHRpb24+YDtcbiAgfVxuICBpZiAobm9kZU5hbWUgPT09IFwiY2FyZFNldFwiKSB7XG4gICAgc2VsZWN0b3IuaW5uZXJIVE1MID0gYDxvcHRpb24gc2VsZWN0ZWQgPkNhdHM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+UGVvcGxlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlBhaW50aW5nczwvb3B0aW9uPmA7XG4gIH1cbiAgaW5FbC5hcHBlbmQoc2VsZWN0b3IpO1xufTtcblxuZXhwb3J0IHsgcmVtb3ZlRmllbGQsIGNyZWF0ZVNlbGVjdG9yIH07XG4iLCJpbXBvcnQgeyBsZXZlbE9mRGlmZmljdWx0eSwgY2FyZFNldCwgZ2V0RmllbGRTaXplIH0gZnJvbSBcIi4vc2V0dGluZ3MuanNcIjtcbmltcG9ydCB7IHJhbmRvbUludGVnZXIgfSBmcm9tIFwiLi4vYWxnb3JpdGhtcy9udW1lcmljLmpzXCI7XG5pbXBvcnQgeyBnZXRKc29uRnJvbVVybCB9IGZyb20gXCIuLi9hbGdvcml0aG1zL3JlcXVlc3RzLmpzXCI7XG5cbmNvbnN0IEdBTUVfREFUQV9VUkwgPSBcImh0dHA6Ly8xMjcuMC4wLjE6NTUwMC9kaXN0L2RhdGEvZ2FtZURhdGEuanNvblwiO1xuXG4vLyDQn9GA0LXQtNC/0L7Qu9C+0LPQsNGP0Y4sINGH0YLQviDRjdGC0LAg0YTRg9C90LrRhtC40Y8g0LTQvtC70LbQvdCwINGF0YDQsNC90LjRgtGM0YHRjyDQsiBnYW1lRmllbGRBY3Rpdml0eSDQuCDQstGL0LfRi9Cy0LDRgtGM0YHRj1xuLy8gICDQv9GA0Lgg0LrQu9C40LrQtSDQvdCwINC60L3QvtC/0LrRgyBcItC90L7QstCw0Y8g0LjQs9GA0LJcIlxuY29uc3QgYWRkQ2FyZHNPbkZpZWxkID0gKGZpZWxkU2l6ZSkgPT4ge1xuICBjb25zdCBkb2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmstc3BhY2VcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGRTaXplOyBpKyspIHtcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgZGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIGAke2l9LWNhcmRgKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJmcm9udC1jYXJkXCI+ZnJvbnQ8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmFjay1jYXJkXCI+YmFjazwvZGl2PmA7XG4gICAgZG9jLmFwcGVuZChkaXYpO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVHYW1lTWF0cml4ID0gKGZpZWxkU2l6ZSkgPT4ge1xuICBsZXQgZ2FtZU1hdHJpeCA9IFtdO1xuICBnZXRKc29uRnJvbVVybChHQU1FX0RBVEFfVVJMKS50aGVuKChkYXRhKSA9PiBjb25zb2xlLmxvZyhkYXRhKSk7XG5cbiAgLy8gd2hpbGUgKGZpZWxkU2l6ZSAvIDIgPCBjYXJkcy5zaXplKSB7XG4gIC8vICAgcmFuZG9tSW50ZWdlcigwLCAxNCk7XG4gIC8vIH1cbiAgLy8gVE9ETzog0LLRi9Cx0YDQsNGC0Ywg0L/QvtC30LjRhtC40Lgg0LTQu9GPINC60LDRgNGC0LjQvdC+0Lpcbn07XG5cbmNvbnN0IGdhbWVJbml0ID0gKCkgPT4ge1xuICBjb25zdCBmaWVsZFNpemUgPSBnZXRGaWVsZFNpemUoKTtcbiAgYWRkQ2FyZHNPbkZpZWxkKGZpZWxkU2l6ZSk7XG4gIGNyZWF0ZUdhbWVNYXRyaXgoZmllbGRTaXplKTtcbn07XG5cbmV4cG9ydCB7IGdhbWVJbml0IH07XG4iLCIvKiBnYW1lIHNldHRpbmdzIGFyZSBzdG9yZWQgaGVyZSAqL1xuLyogVGhpcyBmaWxlIG1heSBiZSBjb252ZXJ0IHRvIGpzb24gaWYgeW91IG5lZWQgdG8gY3JlYXRlIHNlcnZlciBzaWRlICovXG5sZXQgbGV2ZWxPZkRpZmZpY3VsdHkgPSBcIkVhc3lcIjtcbmxldCBjYXJkU2V0ID0gXCJjYXRcIjtcblxuY29uc3QgZ2V0RmllbGRTaXplID0gKCkgPT4ge1xuICBzd2l0Y2ggKGxldmVsT2ZEaWZmaWN1bHR5KSB7XG4gICAgY2FzZSBcIkVhc3lcIjpcbiAgICAgIHJldHVybiAxMjtcbiAgICBjYXNlIFwiTWVkaXVtXCI6XG4gICAgICByZXR1cm4gMTg7XG4gICAgY2FzZSBcIkhhcmRcIjpcbiAgICAgIHJldHVybiAyNDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIDEyO1xuICB9XG59O1xuXG5jb25zdCBnZXRDYXJkU2V0ID0gKCkgPT4ge307XG5cbmV4cG9ydCB7IGxldmVsT2ZEaWZmaWN1bHR5LCBjYXJkU2V0LCBnZXRGaWVsZFNpemUgfTtcbiIsImltcG9ydCB7IHJlbW92ZUZpZWxkLCBjcmVhdGVTZWxlY3RvciB9IGZyb20gXCIuLi9lbmdpbmUvZ2FtZUZpZWxkQWN0aXZpdHkuanNcIjtcbmltcG9ydCB7IGdhbWVJbml0IH0gZnJvbSBcIi4uL2VuZ2luZS9uZXdHYW1lLmpzXCI7XG5cbi8vIFRoaXMgYnRuIHJlbW92ZWQgZ2FtZS1tZW51IGFuZCB1cGxvYWRlZCBnYW1lLWZpZWxkIHdpY2ggY2FyZHNcbmNvbnN0IG5ld0dhbWUgPSAoKSA9PiB7XG4gIFxuICByZW1vdmVGaWVsZChcImdhbWUtbWVudVwiKTtcbiAgZ2FtZUluaXQoKTtcbn07XG5cbmNvbnN0IG9wZW5PcHRpb25zID0gKCkgPT4ge1xuICByZW1vdmVGaWVsZChcImdhbWUtbWVudVwiKTtcblxuICBjb25zdCBkb2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmstc3BhY2VcIik7XG4gIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJnYW1lLW1lbnVcIik7XG4gIGRvYy5hcHBlbmQoZGl2KTtcblxuICBjcmVhdGVTZWxlY3RvcihkaXYsIFwiZGlmZmljdWx0eUx2bFwiKTtcbiAgY3JlYXRlU2VsZWN0b3IoZGl2LCBcImNhcmRTZXRcIik7XG5cbiAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibWVudS1idG5cIik7XG4gIGJ1dHRvbi5pbm5lclRleHQgPSBcIkJhY2tcIjtcbiAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYmFjay10by1tYWluLW1lbnUtYnRuXCIpO1xuICBkaXYuYXBwZW5kKGJ1dHRvbik7XG59O1xuXG5leHBvcnQgeyBuZXdHYW1lLCBvcGVuT3B0aW9ucyB9O1xuIiwiaW1wb3J0IHsgbmV3R2FtZSwgb3Blbk9wdGlvbnMgfSBmcm9tIFwiLi9ldmVudHMvYnV0dG9ucy1jbGlja3MuanNcIjtcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgY29uc3QgbmV3R2FtZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LWdhbWUtYnRuXCIpO1xuICBjb25zdCBvcHRpb25zQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcHRpb25zLWJ0blwiKTtcbiAgbmV3R2FtZUJ0bi5vbmNsaWNrID0gbmV3R2FtZTtcbiAgb3B0aW9uc0J0bi5vbmNsaWNrID0gb3Blbk9wdGlvbnM7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
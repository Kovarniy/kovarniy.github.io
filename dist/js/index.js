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
var randomInteger;
/* harmony default export */ __webpack_exports__["default"] = (randomInteger = function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
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

 // Предпологаяю, что эта функция должна храниться в gameFieldActivity и вызываться
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

var reaquestUrl = "http://127.0.0.1:5500/dist/data/gameData.json"; // request for get cats pictures

var getGameData = function getGameData(url) {
  return fetch(url).then(function (responce) {
    return responce.json();
  });
}; // const parseData = (data) => {
//   let cards = new Map();
//   return cards;
// };


var createGameMatrix = function createGameMatrix(fieldSize) {
  var gameMatrix = []; // TODO: Я хз что делать с промисами

  var gameData = getGameData(reaquestUrl).then(function (data) {
    return parseData(data);
  });
  console.log(gameData);

  while (fieldSize / 2 < cards.size) {
    Object(_algorithms_numeric_js__WEBPACK_IMPORTED_MODULE_1__["randomInteger"])(0, 14);
  } // TODO: выбрать позиции для картинок

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FsZ29yaXRobXMvbnVtZXJpYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dhbWVGaWVsZEFjdGl2aXR5LmpzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvbmV3R2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3NldHRpbmdzLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvYnV0dG9ucy1jbGlja3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbInJhbmRvbUludGVnZXIiLCJtaW4iLCJtYXgiLCJyYW5kIiwiTWF0aCIsInJhbmRvbSIsImZsb29yIiwidGVzdCIsInJlbW92ZUZpZWxkIiwiZWxlbWVpbnRJZCIsImdhbWVNZW51IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbW92ZSIsImNyZWF0ZVNlbGVjdG9yIiwiaW5FbCIsIm5vZGVOYW1lIiwic2VsZWN0b3IiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYXBwZW5kIiwiYWRkQ2FyZHNPbkZpZWxkIiwiZmllbGRTaXplIiwiZG9jIiwiaSIsImRpdiIsImNsYXNzTGlzdCIsImFkZCIsInNldEF0dHJpYnV0ZSIsInJlYXF1ZXN0VXJsIiwiZ2V0R2FtZURhdGEiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25jZSIsImpzb24iLCJjcmVhdGVHYW1lTWF0cml4IiwiZ2FtZU1hdHJpeCIsImdhbWVEYXRhIiwiZGF0YSIsInBhcnNlRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjYXJkcyIsInNpemUiLCJnYW1lSW5pdCIsImdldEZpZWxkU2l6ZSIsImxldmVsT2ZEaWZmaWN1bHR5IiwiY2FyZFNldCIsImdldENhcmRTZXQiLCJuZXdHYW1lIiwib3Blbk9wdGlvbnMiLCJidXR0b24iLCJpbm5lclRleHQiLCJ3aW5kb3ciLCJvbmxvYWQiLCJuZXdH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QUFDQSxNQUFNNkMsVUFBVSxHQUFHOUMsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQW5CO0FBQ0E0QyxZQUFVLENBQUNFLE9BQVgsR0FBcUJSLGlFQUFyQjtBQUNBTyxZQUFVLENBQUNDLE9BQVgsR0FBcUJQLHFFQUFyQjtBQUNELENBTEQsQyIsImZpbGUiOiJqcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwibGV0IHJhbmRvbUludGVnZXI7XHJcbmV4cG9ydCBkZWZhdWx0IHJhbmRvbUludGVnZXIgPSAobWluLCBtYXgpID0+IHtcclxuICBsZXQgcmFuZCA9IG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4ICsgMSAtIG1pbik7XHJcbiAgcmV0dXJuIE1hdGguZmxvb3IocmFuZCk7XHJcbn07XHJcbiIsImxldCB0ZXN0O1xyXG5cclxuLy8gaW5wdXQgcGFyYW1ldGVyIC0gZWxlbWV0IHdoaWNoIG11c3QgYmUgcmVtb3ZlZFxyXG5jb25zdCByZW1vdmVGaWVsZCA9IChlbGVtZWludElkKSA9PiB7XHJcbiAgY29uc3QgZ2FtZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZWludElkKTtcclxuICBnYW1lTWVudS5yZW1vdmUoKTtcclxufTtcclxuXHJcbi8vIGNyZWF0ZSBzZXR0aW5ncyBzZWtlY3RvcnNcclxuY29uc3QgY3JlYXRlU2VsZWN0b3IgPSAoaW5FbCwgbm9kZU5hbWUpID0+IHtcclxuICBsZXQgc2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gIGlmIChub2RlTmFtZSA9PT0gXCJkaWZmaWN1bHR5THZsXCIpIHtcclxuICAgIHNlbGVjdG9yLmlubmVySFRNTCA9IGA8b3B0aW9uIHNlbGVjdGVkIHZhbHVlPVwiMVwiID5FYXN5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+TWVkaXVtPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+SGFyZDwvb3B0aW9uPmA7XHJcbiAgfVxyXG4gIGlmIChub2RlTmFtZSA9PT0gXCJjYXJkU2V0XCIpIHtcclxuICAgIHNlbGVjdG9yLmlubmVySFRNTCA9IGA8b3B0aW9uIHNlbGVjdGVkID5DYXRzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+UGVvcGxlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+UGFpbnRpbmdzPC9vcHRpb24+YDtcclxuICB9XHJcbiAgaW5FbC5hcHBlbmQoc2VsZWN0b3IpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgcmVtb3ZlRmllbGQsIGNyZWF0ZVNlbGVjdG9yIH07XHJcbiIsImltcG9ydCB7IGxldmVsT2ZEaWZmaWN1bHR5LCBjYXJkU2V0LCBnZXRGaWVsZFNpemUgfSBmcm9tIFwiLi9zZXR0aW5ncy5qc1wiO1xyXG5pbXBvcnQgeyByYW5kb21JbnRlZ2VyIH0gZnJvbSBcIi4uL2FsZ29yaXRobXMvbnVtZXJpYy5qc1wiO1xyXG5cclxuLy8g0J/RgNC10LTQv9C+0LvQvtCz0LDRj9GOLCDRh9GC0L4g0Y3RgtCwINGE0YPQvdC60YbQuNGPINC00L7Qu9C20L3QsCDRhdGA0LDQvdC40YLRjNGB0Y8g0LIgZ2FtZUZpZWxkQWN0aXZpdHkg0Lgg0LLRi9C30YvQstCw0YLRjNGB0Y9cclxuLy8gICDQv9GA0Lgg0LrQu9C40LrQtSDQvdCwINC60L3QvtC/0LrRgyBcItC90L7QstCw0Y8g0LjQs9GA0LJcIlxyXG5jb25zdCBhZGRDYXJkc09uRmllbGQgPSAoZmllbGRTaXplKSA9PiB7XHJcbiAgY29uc3QgZG9jID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JrLXNwYWNlXCIpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGRTaXplOyBpKyspIHtcclxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xyXG4gICAgZGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIGAke2l9LWNhcmRgKTtcclxuICAgIGRpdi5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImZyb250LWNhcmRcIj5mcm9udDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJhY2stY2FyZFwiPmJhY2s8L2Rpdj5gO1xyXG4gICAgZG9jLmFwcGVuZChkaXYpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHJlYXF1ZXN0VXJsID0gXCJodHRwOi8vMTI3LjAuMC4xOjU1MDAvZGlzdC9kYXRhL2dhbWVEYXRhLmpzb25cIjtcclxuLy8gcmVxdWVzdCBmb3IgZ2V0IGNhdHMgcGljdHVyZXNcclxuXHJcbmNvbnN0IGdldEdhbWVEYXRhID0gKHVybCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaCh1cmwpLnRoZW4oKHJlc3BvbmNlKSA9PiB7XHJcbiAgICByZXR1cm4gcmVzcG9uY2UuanNvbigpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuLy8gY29uc3QgcGFyc2VEYXRhID0gKGRhdGEpID0+IHtcclxuLy8gICBsZXQgY2FyZHMgPSBuZXcgTWFwKCk7XHJcbi8vICAgcmV0dXJuIGNhcmRzO1xyXG4vLyB9O1xyXG5cclxuY29uc3QgY3JlYXRlR2FtZU1hdHJpeCA9IChmaWVsZFNpemUpID0+IHtcclxuICBsZXQgZ2FtZU1hdHJpeCA9IFtdO1xyXG5cclxuICAvLyBUT0RPOiDQryDRhdC3INGH0YLQviDQtNC10LvQsNGC0Ywg0YEg0L/RgNC+0LzQuNGB0LDQvNC4XHJcbiAgbGV0IGdhbWVEYXRhID0gZ2V0R2FtZURhdGEocmVhcXVlc3RVcmwpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIHJldHVybiBwYXJzZURhdGEoZGF0YSk7XHJcbiAgfSk7XHJcbiAgY29uc29sZS5sb2coZ2FtZURhdGEpO1xyXG5cclxuICB3aGlsZSAoZmllbGRTaXplIC8gMiA8IGNhcmRzLnNpemUpIHtcclxuICAgIHJhbmRvbUludGVnZXIoMCwgMTQpO1xyXG4gIH1cclxuICAvLyBUT0RPOiDQstGL0LHRgNCw0YLRjCDQv9C+0LfQuNGG0LjQuCDQtNC70Y8g0LrQsNGA0YLQuNC90L7QulxyXG59O1xyXG5cclxuY29uc3QgZ2FtZUluaXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgZmllbGRTaXplID0gZ2V0RmllbGRTaXplKCk7XHJcbiAgYWRkQ2FyZHNPbkZpZWxkKGZpZWxkU2l6ZSk7XHJcbiAgY3JlYXRlR2FtZU1hdHJpeChmaWVsZFNpemUpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgZ2FtZUluaXQgfTtcclxuIiwiLyogZ2FtZSBzZXR0aW5ncyBhcmUgc3RvcmVkIGhlcmUgKi9cclxuLyogVGhpcyBmaWxlIG1heSBiZSBjb252ZXJ0IHRvIGpzb24gaWYgeW91IG5lZWQgdG8gY3JlYXRlIHNlcnZlciBzaWRlICovXHJcbmxldCBsZXZlbE9mRGlmZmljdWx0eSA9IFwiRWFzeVwiO1xyXG5sZXQgY2FyZFNldCA9IFwiY2F0XCI7XHJcblxyXG5jb25zdCBnZXRGaWVsZFNpemUgPSAoKSA9PiB7XHJcbiAgc3dpdGNoIChsZXZlbE9mRGlmZmljdWx0eSkge1xyXG4gICAgY2FzZSBcIkVhc3lcIjpcclxuICAgICAgcmV0dXJuIDEyO1xyXG4gICAgY2FzZSBcIk1lZGl1bVwiOlxyXG4gICAgICByZXR1cm4gMTg7XHJcbiAgICBjYXNlIFwiSGFyZFwiOlxyXG4gICAgICByZXR1cm4gMjQ7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gMTI7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0Q2FyZFNldCA9ICgpID0+IHt9O1xyXG5cclxuZXhwb3J0IHsgbGV2ZWxPZkRpZmZpY3VsdHksIGNhcmRTZXQsIGdldEZpZWxkU2l6ZSB9O1xyXG4iLCJpbXBvcnQgeyByZW1vdmVGaWVsZCwgY3JlYXRlU2VsZWN0b3IgfSBmcm9tIFwiLi4vZW5naW5lL2dhbWVGaWVsZEFjdGl2aXR5LmpzXCI7XHJcbmltcG9ydCB7IGdhbWVJbml0IH0gZnJvbSBcIi4uL2VuZ2luZS9uZXdHYW1lLmpzXCI7XHJcblxyXG4vLyBUaGlzIGJ0biByZW1vdmVkIGdhbWUtbWVudSBhbmQgdXBsb2FkZWQgZ2FtZS1maWVsZCB3aWNoIGNhcmRzXHJcbmNvbnN0IG5ld0dhbWUgPSAoKSA9PiB7XHJcbiAgXHJcbiAgcmVtb3ZlRmllbGQoXCJnYW1lLW1lbnVcIik7XHJcbiAgZ2FtZUluaXQoKTtcclxufTtcclxuXHJcbmNvbnN0IG9wZW5PcHRpb25zID0gKCkgPT4ge1xyXG4gIHJlbW92ZUZpZWxkKFwiZ2FtZS1tZW51XCIpO1xyXG5cclxuICBjb25zdCBkb2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmstc3BhY2VcIik7XHJcbiAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZ2FtZS1tZW51XCIpO1xyXG4gIGRvYy5hcHBlbmQoZGl2KTtcclxuXHJcbiAgY3JlYXRlU2VsZWN0b3IoZGl2LCBcImRpZmZpY3VsdHlMdmxcIik7XHJcbiAgY3JlYXRlU2VsZWN0b3IoZGl2LCBcImNhcmRTZXRcIik7XHJcblxyXG4gIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibWVudS1idG5cIik7XHJcbiAgYnV0dG9uLmlubmVyVGV4dCA9IFwiQmFja1wiO1xyXG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJhY2stdG8tbWFpbi1tZW51LWJ0blwiKTtcclxuICBkaXYuYXBwZW5kKGJ1dHRvbik7XHJcbn07XHJcblxyXG5leHBvcnQgeyBuZXdHYW1lLCBvcGVuT3B0aW9ucyB9O1xyXG4iLCJpbXBvcnQgeyBuZXdHYW1lLCBvcGVuT3B0aW9ucyB9IGZyb20gXCIuL2V2ZW50cy9idXR0b25zLWNsaWNrcy5qc1wiO1xyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICBjb25zdCBuZXdHYW1lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctZ2FtZS1idG5cIik7XHJcbiAgY29uc3Qgb3B0aW9uc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3B0aW9ucy1idG5cIik7XHJcbiAgbmV3R2FtZUJ0bi5vbmNsaWNrID0gbmV3R2FtZTtcclxuICBvcHRpb25zQnRuLm9uY2xpY2sgPSBvcGVuT3B0aW9ucztcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
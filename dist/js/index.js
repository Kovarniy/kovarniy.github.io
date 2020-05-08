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

var getGameData = function getGameData(method, url) {
  return fetch(url).then(function (response) {
    if (response.ok) {
      return response.json();
    }

    return response.json().then(function (error) {
      var e = new Error("Что-то пошло не так");
      e.data = error;
      throw e;
    });
  });
};

var createGameMatrix = function createGameMatrix(fieldSize) {
  var gameMatrix = [];
  var cards = new Map();
  var gameData = getGameData("GET", reaquestUrl);
  console.log(gameData); // Набираем список рандомеых картинок

  while (fieldSize / 2 < cards.size) {
    Object(_algorithms_numeric_js__WEBPACK_IMPORTED_MODULE_1__["randomInteger"])(0, 14);
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FsZ29yaXRobXMvbnVtZXJpYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dhbWVGaWVsZEFjdGl2aXR5LmpzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvbmV3R2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3NldHRpbmdzLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvYnV0dG9ucy1jbGlja3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbInJhbmRvbUludGVnZXIiLCJtaW4iLCJtYXgiLCJyYW5kIiwiTWF0aCIsInJhbmRvbSIsImZsb29yIiwidGVzdCIsInJlbW92ZUZpZWxkIiwiZWxlbWVpbnRJZCIsImdhbWVNZW51IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbW92ZSIsImNyZWF0ZVNlbGVjdG9yIiwiaW5FbCIsIm5vZGVOYW1lIiwic2VsZWN0b3IiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYXBwZW5kIiwiYWRkQ2FyZHNPbkZpZWxkIiwiZmllbGRTaXplIiwiZG9jIiwiaSIsImRpdiIsImNsYXNzTGlzdCIsImFkZCIsInNldEF0dHJpYnV0ZSIsInJlYXF1ZXN0VXJsIiwiZ2V0R2FtZURhdGEiLCJtZXRob2QiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwianNvbiIsImVycm9yIiwiZSIsIkVycm9yIiwiZGF0YSIsImNyZWF0ZUdhbWVNYXRyaXgiLCJnYW1lTWF0cml4IiwiY2FyZHMiLCJNYXAiLCJnYW1lRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzaXplIiwiZ2FtZUluaXQiLCJnZXRGaWVsZFNpemUiLCJsZXZlbE9mRGlmZmljdWx0eSIsImNhcmRTZXQiLCJnZXRDYXJkU2V0IiwibmV3R2FtZSIsIm9wZW5PcHRpb25zIiwiYnV0dG9uIiwiaW5uZXJU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b0IsSUFBcEIsRUFBMEIsdUJBQTFCO0FBQ0FILEtBQUcsQ0FBQ0wsTUFBSixDQUFXcUMsTUFBWDtBQUNELENBaEJEOzs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFBQTs7QUFFQUUsTUFBTSxDQUFDQyxNQUFQLEdBQWdCLFlBQU07QUFDcEIsTUFBTUMsVUFBVSxHQUFHbEQsUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLENBQW5CO0FBQ0EsTUFBTWtELFVBQVUsR0FBR25ELFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFuQjtBQUNBaUQsWUFBVSxDQUFDRSxPQUFYLEdBQXFCUixpRUFBckI7QUFDQU8sWUFBVSxDQUFDQyxPQUFYLEdBQXFCUCxxRUFBckI7QUFDRCxDQUxELEMiLCJmaWxlIjoianMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImxldCByYW5kb21JbnRlZ2VyO1xyXG5leHBvcnQgZGVmYXVsdCByYW5kb21JbnRlZ2VyID0gKG1pbiwgbWF4KSA9PiB7XHJcbiAgbGV0IHJhbmQgPSBtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCArIDEgLSBtaW4pO1xyXG4gIHJldHVybiBNYXRoLmZsb29yKHJhbmQpO1xyXG59O1xyXG4iLCJsZXQgdGVzdDtcclxuXHJcbi8vIGlucHV0IHBhcmFtZXRlciAtIGVsZW1ldCB3aGljaCBtdXN0IGJlIHJlbW92ZWRcclxuY29uc3QgcmVtb3ZlRmllbGQgPSAoZWxlbWVpbnRJZCkgPT4ge1xyXG4gIGNvbnN0IGdhbWVNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVpbnRJZCk7XHJcbiAgZ2FtZU1lbnUucmVtb3ZlKCk7XHJcbn07XHJcblxyXG4vLyBjcmVhdGUgc2V0dGluZ3Mgc2VrZWN0b3JzXHJcbmNvbnN0IGNyZWF0ZVNlbGVjdG9yID0gKGluRWwsIG5vZGVOYW1lKSA9PiB7XHJcbiAgbGV0IHNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcclxuICBpZiAobm9kZU5hbWUgPT09IFwiZGlmZmljdWx0eUx2bFwiKSB7XHJcbiAgICBzZWxlY3Rvci5pbm5lckhUTUwgPSBgPG9wdGlvbiBzZWxlY3RlZCB2YWx1ZT1cIjFcIiA+RWFzeTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPk1lZGl1bTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkhhcmQ8L29wdGlvbj5gO1xyXG4gIH1cclxuICBpZiAobm9kZU5hbWUgPT09IFwiY2FyZFNldFwiKSB7XHJcbiAgICBzZWxlY3Rvci5pbm5lckhUTUwgPSBgPG9wdGlvbiBzZWxlY3RlZCA+Q2F0czwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlBlb3BsZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlBhaW50aW5nczwvb3B0aW9uPmA7XHJcbiAgfVxyXG4gIGluRWwuYXBwZW5kKHNlbGVjdG9yKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IHJlbW92ZUZpZWxkLCBjcmVhdGVTZWxlY3RvciB9O1xyXG4iLCJpbXBvcnQgeyBsZXZlbE9mRGlmZmljdWx0eSwgY2FyZFNldCwgZ2V0RmllbGRTaXplIH0gZnJvbSBcIi4vc2V0dGluZ3MuanNcIjtcclxuaW1wb3J0IHsgcmFuZG9tSW50ZWdlciB9IGZyb20gXCIuLi9hbGdvcml0aG1zL251bWVyaWMuanNcIjtcclxuXHJcbi8vINCf0YDQtdC00L/QvtC70L7Qs9Cw0Y/Rjiwg0YfRgtC+INGN0YLQsCDRhNGD0L3QutGG0LjRjyDQtNC+0LvQttC90LAg0YXRgNCw0L3QuNGC0YzRgdGPINCyIGdhbWVGaWVsZEFjdGl2aXR5INC4INCy0YvQt9GL0LLQsNGC0YzRgdGPXHJcbi8vICAg0L/RgNC4INC60LvQuNC60LUg0L3QsCDQutC90L7Qv9C60YMgXCLQvdC+0LLQsNGPINC40LPRgNCyXCJcclxuY29uc3QgYWRkQ2FyZHNPbkZpZWxkID0gKGZpZWxkU2l6ZSkgPT4ge1xyXG4gIGNvbnN0IGRvYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29yay1zcGFjZVwiKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkU2l6ZTsgaSsrKSB7XHJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcclxuICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtpfS1jYXJkYCk7XHJcbiAgICBkaXYuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJmcm9udC1jYXJkXCI+ZnJvbnQ8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYWNrLWNhcmRcIj5iYWNrPC9kaXY+YDtcclxuICAgIGRvYy5hcHBlbmQoZGl2KTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCByZWFxdWVzdFVybCA9IFwiaHR0cDovLzEyNy4wLjAuMTo1NTAwL2Rpc3QvZGF0YS9nYW1lRGF0YS5qc29uXCI7XHJcbi8vIHJlcXVlc3QgZm9yIGdldCBjYXRzIHBpY3R1cmVzXHJcbmNvbnN0IGdldEdhbWVEYXRhID0gKG1ldGhvZCwgdXJsKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKHVybCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKS50aGVuKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zdCBlID0gbmV3IEVycm9yKFwi0KfRgtC+LdGC0L4g0L/QvtGI0LvQviDQvdC1INGC0LDQulwiKTtcclxuICAgICAgZS5kYXRhID0gZXJyb3I7XHJcbiAgICAgIHRocm93IGU7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUdhbWVNYXRyaXggPSAoZmllbGRTaXplKSA9PiB7XHJcbiAgbGV0IGdhbWVNYXRyaXggPSBbXTtcclxuICBsZXQgY2FyZHMgPSBuZXcgTWFwKCk7XHJcbiAgbGV0IGdhbWVEYXRhID0gZ2V0R2FtZURhdGEoXCJHRVRcIiwgcmVhcXVlc3RVcmwpO1xyXG4gIGNvbnNvbGUubG9nKGdhbWVEYXRhKTtcclxuXHJcbiAgLy8g0J3QsNCx0LjRgNCw0LXQvCDRgdC/0LjRgdC+0Log0YDQsNC90LTQvtC80LXRi9GFINC60LDRgNGC0LjQvdC+0LpcclxuICB3aGlsZSAoZmllbGRTaXplIC8gMiA8IGNhcmRzLnNpemUpIHtcclxuICAgIHJhbmRvbUludGVnZXIoMCwgMTQpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGdhbWVJbml0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGZpZWxkU2l6ZSA9IGdldEZpZWxkU2l6ZSgpO1xyXG4gIGFkZENhcmRzT25GaWVsZChmaWVsZFNpemUpO1xyXG4gIGNyZWF0ZUdhbWVNYXRyaXgoZmllbGRTaXplKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGdhbWVJbml0IH07XHJcbiIsIi8qIGdhbWUgc2V0dGluZ3MgYXJlIHN0b3JlZCBoZXJlICovXHJcbi8qIFRoaXMgZmlsZSBtYXkgYmUgY29udmVydCB0byBqc29uIGlmIHlvdSBuZWVkIHRvIGNyZWF0ZSBzZXJ2ZXIgc2lkZSAqL1xyXG5sZXQgbGV2ZWxPZkRpZmZpY3VsdHkgPSBcIkVhc3lcIjtcclxubGV0IGNhcmRTZXQgPSBcImNhdFwiO1xyXG5cclxuY29uc3QgZ2V0RmllbGRTaXplID0gKCkgPT4ge1xyXG4gIHN3aXRjaCAobGV2ZWxPZkRpZmZpY3VsdHkpIHtcclxuICAgIGNhc2UgXCJFYXN5XCI6XHJcbiAgICAgIHJldHVybiAxMjtcclxuICAgIGNhc2UgXCJNZWRpdW1cIjpcclxuICAgICAgcmV0dXJuIDE4O1xyXG4gICAgY2FzZSBcIkhhcmRcIjpcclxuICAgICAgcmV0dXJuIDI0O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIDEyO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGdldENhcmRTZXQgPSAoKSA9PiB7fTtcclxuXHJcbmV4cG9ydCB7IGxldmVsT2ZEaWZmaWN1bHR5LCBjYXJkU2V0LCBnZXRGaWVsZFNpemUgfTtcclxuIiwiaW1wb3J0IHsgcmVtb3ZlRmllbGQsIGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSBcIi4uL2VuZ2luZS9nYW1lRmllbGRBY3Rpdml0eS5qc1wiO1xyXG5pbXBvcnQgeyBnYW1lSW5pdCB9IGZyb20gXCIuLi9lbmdpbmUvbmV3R2FtZS5qc1wiO1xyXG5cclxuLy8gVGhpcyBidG4gcmVtb3ZlZCBnYW1lLW1lbnUgYW5kIHVwbG9hZGVkIGdhbWUtZmllbGQgd2ljaCBjYXJkc1xyXG5jb25zdCBuZXdHYW1lID0gKCkgPT4ge1xyXG4gIFxyXG4gIHJlbW92ZUZpZWxkKFwiZ2FtZS1tZW51XCIpO1xyXG4gIGdhbWVJbml0KCk7XHJcbn07XHJcblxyXG5jb25zdCBvcGVuT3B0aW9ucyA9ICgpID0+IHtcclxuICByZW1vdmVGaWVsZChcImdhbWUtbWVudVwiKTtcclxuXHJcbiAgY29uc3QgZG9jID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JrLXNwYWNlXCIpO1xyXG4gIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImdhbWUtbWVudVwiKTtcclxuICBkb2MuYXBwZW5kKGRpdik7XHJcblxyXG4gIGNyZWF0ZVNlbGVjdG9yKGRpdiwgXCJkaWZmaWN1bHR5THZsXCIpO1xyXG4gIGNyZWF0ZVNlbGVjdG9yKGRpdiwgXCJjYXJkU2V0XCIpO1xyXG5cclxuICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBidXR0b24uY2xhc3NMaXN0LmFkZChcIm1lbnUtYnRuXCIpO1xyXG4gIGJ1dHRvbi5pbm5lclRleHQgPSBcIkJhY2tcIjtcclxuICBidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJiYWNrLXRvLW1haW4tbWVudS1idG5cIik7XHJcbiAgZGl2LmFwcGVuZChidXR0b24pO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgbmV3R2FtZSwgb3Blbk9wdGlvbnMgfTtcclxuIiwiaW1wb3J0IHsgbmV3R2FtZSwgb3Blbk9wdGlvbnMgfSBmcm9tIFwiLi9ldmVudHMvYnV0dG9ucy1jbGlja3MuanNcIjtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgbmV3R2FtZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LWdhbWUtYnRuXCIpO1xyXG4gIGNvbnN0IG9wdGlvbnNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wdGlvbnMtYnRuXCIpO1xyXG4gIG5ld0dhbWVCdG4ub25jbGljayA9IG5ld0dhbWU7XHJcbiAgb3B0aW9uc0J0bi5vbmNsaWNrID0gb3Blbk9wdGlvbnM7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
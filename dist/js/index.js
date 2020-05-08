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
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.onload = function () {
      if (xhr.status >= 400) {
        reject(xhr.response());
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = function () {
      reject(xhr.response);
    };

    xhr.send();
  });
};

var createGameMatrix = function createGameMatrix(fieldSize) {
  var gameMatrix = [];
  var cards = new Map();
  var gameData = getGameData("GET", reaquestUrl).then(function (data) {
    return data;
  })["catch"](function (err) {
    return console.error(err);
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FsZ29yaXRobXMvbnVtZXJpYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dhbWVGaWVsZEFjdGl2aXR5LmpzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvbmV3R2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3NldHRpbmdzLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvYnV0dG9ucy1jbGlja3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbInJhbmRvbUludGVnZXIiLCJtaW4iLCJtYXgiLCJyYW5kIiwiTWF0aCIsInJhbmRvbSIsImZsb29yIiwidGVzdCIsInJlbW92ZUZpZWxkIiwiZWxlbWVpbnRJZCIsImdhbWVNZW51IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbW92ZSIsImNyZWF0ZVNlbGVjdG9yIiwiaW5FbCIsIm5vZGVOYW1lIiwic2VsZWN0b3IiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYXBwZW5kIiwiYWRkQ2FyZHNPbkZpZWxkIiwiZmllbGRTaXplIiwiZG9jIiwiaSIsImRpdiIsImNsYXNzTGlzdCIsImFkZCIsInNldEF0dHJpYnV0ZSIsInJlYXF1ZXN0VXJsIiwiZ2V0R2FtZURhdGEiLCJtZXRob2QiLCJ1cmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsIm9ubG9hZCIsInN0YXR1cyIsInJlc3BvbnNlIiwib25lcnJvciIsInNlbmQiLCJjcmVhdGVHYW1lTWF0cml4IiwiZ2FtZU1hdHJpeCIsImNhcmRzIiwiTWFwIiwiZ2FtZURhdGEiLCJ0aGVuIiwiZGF0YSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImxvZyIsInNpemUiLCJnYW1lSW5pdCIsImdldEZpZWxkU2l6ZSIsImxldmVsT2ZEaWZmaWN1bHR5IiwiY2FyZFNldCIsImdldENhcmRTZXQiLCJuZXdHYW1lIiwib3Blbk9wdGlvbnMiLCJidXR0b24iLCJpbm5lclRleHQiLCJ3aW5kb3ciLCJuZXdHYW1lQnRuIiwib3B0aW9uc0J0biIsIm9uY2xpY2siXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQSxJQUFJQSxhQUFKO0FBQ2VBLDRFQUFhLEdBQUcsdUJBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQzNDLE1BQUlDLElBQUksR0FBR0YsR0FBRyxHQUFHRyxJQUFJLENBQUNDLE1BQUwsTUFBaUJILEdBQUcsR0FBRyxDQUFOLEdBQVVELEdBQTNCLENBQWpCO0FBQ0EsU0FBT0csSUFBSSxDQUFDRSxLQUFMLENBQVdILElBQVgsQ0FBUDtBQUNELENBSEQsRTs7Ozs7Ozs7Ozs7O0FDREE7QUFBQTtBQUFBO0FBQUEsSUFBSUksSUFBSixDLENBRUE7O0FBQ0EsSUFBTUMsV0FBVyxH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Q0csWUFBSixDQUFpQixJQUFqQixFQUF1QixXQUF2QjtBQUNBTCxLQUFHLENBQUNILE1BQUosQ0FBV0ssR0FBWDtBQUVBWCxxRkFBYyxDQUFDVyxHQUFELEVBQU0sZUFBTixDQUFkO0FBQ0FYLHFGQUFjLENBQUNXLEdBQUQsRUFBTSxTQUFOLENBQWQ7QUFFQSxNQUFJc0MsTUFBTSxHQUFHcEQsUUFBUSxDQUFDTyxhQUFULENBQXVCLFFBQXZCLENBQWI7QUFDQTZDLFFBQU0sQ0FBQ3JDLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLFVBQXJCO0FBQ0FvQyxRQUFNLENBQUNDLFNBQVAsR0FBbUIsTUFBbkI7QUFDQUQsUUFBTSxDQUFDbkMsWUFBUCxDQUFvQixJQUFwQixFQUEwQix1QkFBMUI7QUFDQUgsS0FBRyxDQUFDTCxNQUFKLENBQVcyQyxNQUFYO0FBQ0QsQ0FoQkQ7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFBQTtBQUFBOztBQUVBRSxNQUFNLENBQUMxQixNQUFQLEdBQWdCLFlBQU07QUFDcEIsTUFBTTJCLFVBQVUsR0FBR3ZELFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixDQUFuQjtBQUNBLE1BQU11RCxVQUFVLEdBQUd4RCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBbkI7QUFDQXNELFlBQVUsQ0FBQ0UsT0FBWCxHQUFxQlAsaUVBQXJCO0FBQ0FNLFlBQVUsQ0FBQ0MsT0FBWCxHQUFxQk4scUVBQXJCO0FBQ0QsQ0FMRCxDIiwiZmlsZSI6ImpzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJsZXQgcmFuZG9tSW50ZWdlcjtcclxuZXhwb3J0IGRlZmF1bHQgcmFuZG9tSW50ZWdlciA9IChtaW4sIG1heCkgPT4ge1xyXG4gIGxldCByYW5kID0gbWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggKyAxIC0gbWluKTtcclxuICByZXR1cm4gTWF0aC5mbG9vcihyYW5kKTtcclxufTtcclxuIiwibGV0IHRlc3Q7XHJcblxyXG4vLyBpbnB1dCBwYXJhbWV0ZXIgLSBlbGVtZXQgd2hpY2ggbXVzdCBiZSByZW1vdmVkXHJcbmNvbnN0IHJlbW92ZUZpZWxkID0gKGVsZW1laW50SWQpID0+IHtcclxuICBjb25zdCBnYW1lTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1laW50SWQpO1xyXG4gIGdhbWVNZW51LnJlbW92ZSgpO1xyXG59O1xyXG5cclxuLy8gY3JlYXRlIHNldHRpbmdzIHNla2VjdG9yc1xyXG5jb25zdCBjcmVhdGVTZWxlY3RvciA9IChpbkVsLCBub2RlTmFtZSkgPT4ge1xyXG4gIGxldCBzZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcbiAgaWYgKG5vZGVOYW1lID09PSBcImRpZmZpY3VsdHlMdmxcIikge1xyXG4gICAgc2VsZWN0b3IuaW5uZXJIVE1MID0gYDxvcHRpb24gc2VsZWN0ZWQgdmFsdWU9XCIxXCIgPkVhc3k8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5NZWRpdW08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5IYXJkPC9vcHRpb24+YDtcclxuICB9XHJcbiAgaWYgKG5vZGVOYW1lID09PSBcImNhcmRTZXRcIikge1xyXG4gICAgc2VsZWN0b3IuaW5uZXJIVE1MID0gYDxvcHRpb24gc2VsZWN0ZWQgPkNhdHM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5QZW9wbGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5QYWludGluZ3M8L29wdGlvbj5gO1xyXG4gIH1cclxuICBpbkVsLmFwcGVuZChzZWxlY3Rvcik7XHJcbn07XHJcblxyXG5leHBvcnQgeyByZW1vdmVGaWVsZCwgY3JlYXRlU2VsZWN0b3IgfTtcclxuIiwiaW1wb3J0IHsgbGV2ZWxPZkRpZmZpY3VsdHksIGNhcmRTZXQsIGdldEZpZWxkU2l6ZSB9IGZyb20gXCIuL3NldHRpbmdzLmpzXCI7XHJcbmltcG9ydCB7IHJhbmRvbUludGVnZXIgfSBmcm9tIFwiLi4vYWxnb3JpdGhtcy9udW1lcmljLmpzXCI7XHJcblxyXG4vLyDQn9GA0LXQtNC/0L7Qu9C+0LPQsNGP0Y4sINGH0YLQviDRjdGC0LAg0YTRg9C90LrRhtC40Y8g0LTQvtC70LbQvdCwINGF0YDQsNC90LjRgtGM0YHRjyDQsiBnYW1lRmllbGRBY3Rpdml0eSDQuCDQstGL0LfRi9Cy0LDRgtGM0YHRj1xyXG4vLyAgINC/0YDQuCDQutC70LjQutC1INC90LAg0LrQvdC+0L/QutGDIFwi0L3QvtCy0LDRjyDQuNCz0YDQslwiXHJcbmNvbnN0IGFkZENhcmRzT25GaWVsZCA9IChmaWVsZFNpemUpID0+IHtcclxuICBjb25zdCBkb2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmstc3BhY2VcIik7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZFNpemU7IGkrKykge1xyXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XHJcbiAgICBkaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7aX0tY2FyZGApO1xyXG4gICAgZGl2LmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiZnJvbnQtY2FyZFwiPmZyb250PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmFjay1jYXJkXCI+YmFjazwvZGl2PmA7XHJcbiAgICBkb2MuYXBwZW5kKGRpdik7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgcmVhcXVlc3RVcmwgPSBcImh0dHA6Ly8xMjcuMC4wLjE6NTUwMC9kaXN0L2RhdGEvZ2FtZURhdGEuanNvblwiO1xyXG4vLyByZXF1ZXN0IGZvciBnZXQgY2F0cyBwaWN0dXJlc1xyXG5jb25zdCBnZXRHYW1lRGF0YSA9IChtZXRob2QsIHVybCkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsKTtcclxuICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh4aHIuc3RhdHVzID49IDQwMCkge1xyXG4gICAgICAgIHJlamVjdCh4aHIucmVzcG9uc2UoKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzb2x2ZSh4aHIucmVzcG9uc2UpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgeGhyLm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgIHJlamVjdCh4aHIucmVzcG9uc2UpO1xyXG4gICAgfTtcclxuICAgIHhoci5zZW5kKCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVHYW1lTWF0cml4ID0gKGZpZWxkU2l6ZSkgPT4ge1xyXG4gIGxldCBnYW1lTWF0cml4ID0gW107XHJcbiAgbGV0IGNhcmRzID0gbmV3IE1hcCgpO1xyXG4gIGxldCBnYW1lRGF0YSA9XHJcbiAgZ2V0R2FtZURhdGEoXCJHRVRcIiwgcmVhcXVlc3RVcmwpXHJcbiAgICAudGhlbigoZGF0YSkgPT4gZGF0YSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gIGNvbnNvbGUubG9nKGdhbWVEYXRhKTtcclxuXHJcbiAgLy8g0J3QsNCx0LjRgNCw0LXQvCDRgdC/0LjRgdC+0Log0YDQsNC90LTQvtC80LXRi9GFINC60LDRgNGC0LjQvdC+0LpcclxuICB3aGlsZSAoZmllbGRTaXplIC8gMiA8IGNhcmRzLnNpemUpIHtcclxuICAgIHJhbmRvbUludGVnZXIoMCwgMTQpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGdhbWVJbml0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGZpZWxkU2l6ZSA9IGdldEZpZWxkU2l6ZSgpO1xyXG4gIGFkZENhcmRzT25GaWVsZChmaWVsZFNpemUpO1xyXG4gIGNyZWF0ZUdhbWVNYXRyaXgoZmllbGRTaXplKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGdhbWVJbml0IH07XHJcbiIsIi8qIGdhbWUgc2V0dGluZ3MgYXJlIHN0b3JlZCBoZXJlICovXHJcbi8qIFRoaXMgZmlsZSBtYXkgYmUgY29udmVydCB0byBqc29uIGlmIHlvdSBuZWVkIHRvIGNyZWF0ZSBzZXJ2ZXIgc2lkZSAqL1xyXG5sZXQgbGV2ZWxPZkRpZmZpY3VsdHkgPSBcIkVhc3lcIjtcclxubGV0IGNhcmRTZXQgPSBcImNhdFwiO1xyXG5cclxuY29uc3QgZ2V0RmllbGRTaXplID0gKCkgPT4ge1xyXG4gIHN3aXRjaCAobGV2ZWxPZkRpZmZpY3VsdHkpIHtcclxuICAgIGNhc2UgXCJFYXN5XCI6XHJcbiAgICAgIHJldHVybiAxMjtcclxuICAgIGNhc2UgXCJNZWRpdW1cIjpcclxuICAgICAgcmV0dXJuIDE4O1xyXG4gICAgY2FzZSBcIkhhcmRcIjpcclxuICAgICAgcmV0dXJuIDI0O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIDEyO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGdldENhcmRTZXQgPSAoKSA9PiB7fTtcclxuXHJcbmV4cG9ydCB7IGxldmVsT2ZEaWZmaWN1bHR5LCBjYXJkU2V0LCBnZXRGaWVsZFNpemUgfTtcclxuIiwiaW1wb3J0IHsgcmVtb3ZlRmllbGQsIGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSBcIi4uL2VuZ2luZS9nYW1lRmllbGRBY3Rpdml0eS5qc1wiO1xyXG5pbXBvcnQgeyBnYW1lSW5pdCB9IGZyb20gXCIuLi9lbmdpbmUvbmV3R2FtZS5qc1wiO1xyXG5cclxuLy8gVGhpcyBidG4gcmVtb3ZlZCBnYW1lLW1lbnUgYW5kIHVwbG9hZGVkIGdhbWUtZmllbGQgd2ljaCBjYXJkc1xyXG5jb25zdCBuZXdHYW1lID0gKCkgPT4ge1xyXG4gIFxyXG4gIHJlbW92ZUZpZWxkKFwiZ2FtZS1tZW51XCIpO1xyXG4gIGdhbWVJbml0KCk7XHJcbn07XHJcblxyXG5jb25zdCBvcGVuT3B0aW9ucyA9ICgpID0+IHtcclxuICByZW1vdmVGaWVsZChcImdhbWUtbWVudVwiKTtcclxuXHJcbiAgY29uc3QgZG9jID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JrLXNwYWNlXCIpO1xyXG4gIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImdhbWUtbWVudVwiKTtcclxuICBkb2MuYXBwZW5kKGRpdik7XHJcblxyXG4gIGNyZWF0ZVNlbGVjdG9yKGRpdiwgXCJkaWZmaWN1bHR5THZsXCIpO1xyXG4gIGNyZWF0ZVNlbGVjdG9yKGRpdiwgXCJjYXJkU2V0XCIpO1xyXG5cclxuICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBidXR0b24uY2xhc3NMaXN0LmFkZChcIm1lbnUtYnRuXCIpO1xyXG4gIGJ1dHRvbi5pbm5lclRleHQgPSBcIkJhY2tcIjtcclxuICBidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJiYWNrLXRvLW1haW4tbWVudS1idG5cIik7XHJcbiAgZGl2LmFwcGVuZChidXR0b24pO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgbmV3R2FtZSwgb3Blbk9wdGlvbnMgfTtcclxuIiwiaW1wb3J0IHsgbmV3R2FtZSwgb3Blbk9wdGlvbnMgfSBmcm9tIFwiLi9ldmVudHMvYnV0dG9ucy1jbGlja3MuanNcIjtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgbmV3R2FtZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LWdhbWUtYnRuXCIpO1xyXG4gIGNvbnN0IG9wdGlvbnNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wdGlvbnMtYnRuXCIpO1xyXG4gIG5ld0dhbWVCdG4ub25jbGljayA9IG5ld0dhbWU7XHJcbiAgb3B0aW9uc0J0bi5vbmNsaWNrID0gb3Blbk9wdGlvbnM7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
/******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module",
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function (
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__(
    (__webpack_require__.s = "./src/index.js")
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./src/events/buttons-clicks.js":
      /*!**************************************!*\
  !*** ./src/events/buttons-clicks.js ***!
  \**************************************/
      /*! exports provided: newGame, openOptions */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "newGame",
          function () {
            return newGame;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "openOptions",
          function () {
            return openOptions;
          }
        );
        var test; // input parameter - elemet which must be removed

        var removeField = function removeField(elemeintId) {
          var gameMenu = document.getElementById(elemeintId);
          gameMenu.remove();
        };

        var createSelector = function createSelector(inEl, nodeName) {
          var selector = document.createElement("select");

          if (nodeName === "difficultyLvl") {
            selector.innerHTML =
              '<option selected value="1" >Easy</option>\n                        <option>Medium</option>\n                        <option>Hard</option>';
          }

          if (nodeName === "cardSet") {
            selector.innerHTML =
              "<option selected >Set1</option>\n                        <option>Set2</option>\n                        <option>Set3</option>";
          }

          inEl.append(selector);
        }; // This btn removed game-menu and uploaded game-field wich cards

        var newGame = function newGame() {
          var doc = document.getElementById("work-space");
          removeField("game-menu"); // TODO: fieldSize - this parametr must be upload from settings.json

          var fieldSize = 12;

          for (var i = 0; i < fieldSize; i++) {
            var div = document.createElement("div");
            div.classList.add("card");
            div.setAttribute("id", "".concat(i, "-card"));
            div.innerHTML =
              '<div class="front-card">front</div>\n          <div class="back-card">back</div>';
            doc.append(div);
          }
        };

        var openOptions = function openOptions() {
          removeField("game-menu");
          var doc = document.getElementById("work-space");
          var div = document.createElement("div");
          div.setAttribute("id", "game-menu");
          doc.append(div);
          createSelector(div, "difficultyLvl");
          createSelector(div, "cardSet");
          var button = document.createElement("button");
          button.classList.add("menu-btn");
          button.innerText = "Back";
          button.setAttribute("id", "back-to-main-menu-btn");
          div.append(button);
        };

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _events_buttons_clicks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./events/buttons-clicks.js */ "./src/events/buttons-clicks.js"
        );

        window.onload = function () {
          var newGameBtn = document.getElementById("new-game-btn");
          var optionsBtn = document.getElementById("options-btn");
          newGameBtn.onclick =
            _events_buttons_clicks_js__WEBPACK_IMPORTED_MODULE_0__["newGame"];
          optionsBtn.onclick =
            _events_buttons_clicks_js__WEBPACK_IMPORTED_MODULE_0__[
              "openOptions"
            ];
        };

        /***/
      },

    /******/
  }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9idXR0b25zLWNsaWNrcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsidGVzdCIsInJlbW92ZUZpZWxkIiwiZWxlbWVpbnRJZCIsImdhbWVNZW51IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbW92ZSIsImNyZWF0ZVNlbGVjdG9yIiwiaW5FbCIsIm5vZGVOYW1lIiwic2VsZWN0b3IiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYXBwZW5kIiwibmV3R2FtZSIsImRvYyIsImZpZWxkU2l6ZSIsImkiLCJkaXYiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJvcGVuT3B0aW9ucyIsImJ1dHRvbiIsImlubmVyVGV4dCIsIndpbmRvdyIsIm9ubG9hZCIsIm5ld0dhbWVCdG4iLCJvcHRpb25zQnRuIiwib25jbGljayJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtR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UCxxRUFBckI7QUFDRCxDQUxELEMiLCJmaWxlIjoianMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImxldCB0ZXN0O1xyXG5cclxuLy8gaW5wdXQgcGFyYW1ldGVyIC0gZWxlbWV0IHdoaWNoIG11c3QgYmUgcmVtb3ZlZFxyXG5jb25zdCByZW1vdmVGaWVsZCA9IChlbGVtZWludElkKSA9PiB7XHJcbiAgY29uc3QgZ2FtZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZWludElkKTtcclxuICBnYW1lTWVudS5yZW1vdmUoKTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZVNlbGVjdG9yID0gKGluRWwsIG5vZGVOYW1lKSA9PiB7XHJcbiAgbGV0IHNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcclxuICBpZiAobm9kZU5hbWUgPT09IFwiZGlmZmljdWx0eUx2bFwiKSB7XHJcbiAgICBzZWxlY3Rvci5pbm5lckhUTUwgPSBgPG9wdGlvbiBzZWxlY3RlZCB2YWx1ZT1cIjFcIiA+RWFzeTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPk1lZGl1bTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkhhcmQ8L29wdGlvbj5gO1xyXG4gIH1cclxuICBpZiAobm9kZU5hbWUgPT09IFwiY2FyZFNldFwiKSB7XHJcbiAgICBzZWxlY3Rvci5pbm5lckhUTUwgPSBgPG9wdGlvbiBzZWxlY3RlZCA+U2V0MTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlNldDI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5TZXQzPC9vcHRpb24+YDtcclxuICB9XHJcbiAgaW5FbC5hcHBlbmQoc2VsZWN0b3IpO1xyXG59O1xyXG5cclxuLy8gVGhpcyBidG4gcmVtb3ZlZCBnYW1lLW1lbnUgYW5kIHVwbG9hZGVkIGdhbWUtZmllbGQgd2ljaCBjYXJkc1xyXG5jb25zdCBuZXdHYW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRvYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29yay1zcGFjZVwiKTtcclxuICByZW1vdmVGaWVsZChcImdhbWUtbWVudVwiKTtcclxuXHJcbiAgLy8gVE9ETzogZmllbGRTaXplIC0gdGhpcyBwYXJhbWV0ciBtdXN0IGJlIHVwbG9hZCBmcm9tIHNldHRpbmdzLmpzb25cclxuICBjb25zdCBmaWVsZFNpemUgPSAxMjtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkU2l6ZTsgaSsrKSB7XHJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcclxuICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtpfS1jYXJkYCk7XHJcbiAgICBkaXYuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJmcm9udC1jYXJkXCI+ZnJvbnQ8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYWNrLWNhcmRcIj5iYWNrPC9kaXY+YDtcclxuICAgIGRvYy5hcHBlbmQoZGl2KTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBvcGVuT3B0aW9ucyA9ICgpID0+IHtcclxuICByZW1vdmVGaWVsZChcImdhbWUtbWVudVwiKTtcclxuXHJcbiAgY29uc3QgZG9jID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JrLXNwYWNlXCIpO1xyXG4gIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImdhbWUtbWVudVwiKTtcclxuICBkb2MuYXBwZW5kKGRpdik7XHJcblxyXG4gIGNyZWF0ZVNlbGVjdG9yKGRpdiwgXCJkaWZmaWN1bHR5THZsXCIpO1xyXG4gIGNyZWF0ZVNlbGVjdG9yKGRpdiwgXCJjYXJkU2V0XCIpO1xyXG5cclxuICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBidXR0b24uY2xhc3NMaXN0LmFkZChcIm1lbnUtYnRuXCIpO1xyXG4gIGJ1dHRvbi5pbm5lclRleHQgPSBcIkJhY2tcIjtcclxuICBidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJiYWNrLXRvLW1haW4tbWVudS1idG5cIik7XHJcbiAgZGl2LmFwcGVuZChidXR0b24pO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgbmV3R2FtZSwgb3Blbk9wdGlvbnMgfTtcclxuIiwiaW1wb3J0IHsgbmV3R2FtZSwgb3Blbk9wdGlvbnMgfSBmcm9tIFwiLi9ldmVudHMvYnV0dG9ucy1jbGlja3MuanNcIjtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgbmV3R2FtZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LWdhbWUtYnRuXCIpO1xyXG4gIGNvbnN0IG9wdGlvbnNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wdGlvbnMtYnRuXCIpO1xyXG4gIG5ld0dhbWVCdG4ub25jbGljayA9IG5ld0dhbWU7XHJcbiAgb3B0aW9uc0J0bi5vbmNsaWNrID0gb3Blbk9wdGlvbnM7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=

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

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/get.js":
/*!****************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/get.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(/*! ./superPropBase */ "./node_modules/@babel/runtime/helpers/superPropBase.js");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/superPropBase.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/superPropBase.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./src/algorithms/numeric.js":
/*!***********************************!*\
  !*** ./src/algorithms/numeric.js ***!
  \***********************************/
/*! exports provided: randomInteger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomInteger", function() { return randomInteger; });
// This file includes algorithms for numeric operations
var randomInteger = function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};



/***/ }),

/***/ "./src/algorithms/requests.js":
/*!************************************!*\
  !*** ./src/algorithms/requests.js ***!
  \************************************/
/*! exports provided: getJsonFromUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJsonFromUrl", function() { return getJsonFromUrl; });
// This file includes functions for requests to server and etc
// This function return Json from url
var getJsonFromUrl = function getJsonFromUrl(url) {
  return fetch(url).then(function (responce) {
    return responce.json();
  });
};



/***/ }),

/***/ "./src/algorithms/sounds.js":
/*!**********************************!*\
  !*** ./src/algorithms/sounds.js ***!
  \**********************************/
/*! exports provided: addSoundToEl, playSound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSoundToEl", function() { return addSoundToEl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playSound", function() { return playSound; });
var addSoundToEl = function addSoundToEl(selector, pathToSound) {
  var element = document.querySelectorAll(selector);
  element.forEach(function (el) {
    el.onclick = function (pathToSound) {
      playSound(pathToSound);
    };
  });
};

var playSound = function playSound(pathToSound) {
  var audio = new Audio(); // Создаём новый элемент Audio

  audio.src = "".concat(pathToSound); // Указываем путь к звуку "клика"

  audio.autoplay = true; // Автоматически запускаем
};



/***/ }),

/***/ "./src/algorithms/stopwatch.js":
/*!*************************************!*\
  !*** ./src/algorithms/stopwatch.js ***!
  \*************************************/
/*! exports provided: Stopwatch, RenderingStopwatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stopwatch", function() { return Stopwatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderingStopwatch", function() { return RenderingStopwatch; });
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);







function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Stopwatch = /*#__PURE__*/function () {
  function Stopwatch() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, Stopwatch);

    this.sec = this.min = this.hour = 0;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(Stopwatch, [{
    key: "reset",
    value: function reset() {
      this.sec = this.min = this.hour = 0;
    }
  }, {
    key: "tick",
    value: function tick(obj) {
      obj.sec++;

      if (obj.sec === 60) {
        obj.min += 1;
        obj.sec = 0;
      }

      if (obj.min === 60) {
        obj.hour += 1;
        obj.min = 0;
      }

      if (obj.hour === 24) {
        obj.hour = obj.msin = obj.sec = 0;
      }
    }
  }, {
    key: "start",
    value: function start() {
      this.timerId = setInterval(this.tick, 1000, this);
    }
  }, {
    key: "stop",
    value: function stop() {
      clearInterval(this.timerId);
    }
  }, {
    key: "toString",
    value: function toString() {
      var sHour = this.hour < 10 ? "0".concat(this.hour) : this.hour;
      var timeString = "".concat(sHour, ":");
      var sMin = this.min < 10 ? "0".concat(this.min) : this.min;
      timeString += "".concat(sMin, ":");
      var sSec = this.sec < 10 ? "0".concat(this.sec) : this.sec;
      timeString += "".concat(sSec);
      return timeString;
    }
  }, {
    key: "getSecond",
    get: function get() {
      return this.sec + this.min * 60 + this.hour * 3600;
    }
  }]);

  return Stopwatch;
}();

var RenderingStopwatch = /*#__PURE__*/function (_Stopwatch) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(RenderingStopwatch, _Stopwatch);

  var _super = _createSuper(RenderingStopwatch);

  function RenderingStopwatch(elId) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, RenderingStopwatch);

    _this = _super.call(this);
    _this.elId = elId;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(RenderingStopwatch, [{
    key: "tick",
    value: function tick(obj) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_0___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(RenderingStopwatch.prototype), "tick", this).call(this, obj);

      var timeEl = document.getElementById(obj.elId);
      timeEl.innerHTML = "<b>Time:</b> " + obj.toString();
    }
  }]);

  return RenderingStopwatch;
}(Stopwatch);



/***/ }),

/***/ "./src/engine/gameLayout.js":
/*!**********************************!*\
  !*** ./src/engine/gameLayout.js ***!
  \**********************************/
/*! exports provided: renderGameSettings, genetateGameField, showEndGameWindow, renderGameMenu, hiddenEndGameWindow, renderRatingMenu, createSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderGameSettings", function() { return renderGameSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genetateGameField", function() { return genetateGameField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showEndGameWindow", function() { return showEndGameWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderGameMenu", function() { return renderGameMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hiddenEndGameWindow", function() { return hiddenEndGameWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderRatingMenu", function() { return renderRatingMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelector", function() { return createSelector; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _events_crads_events_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events/crads-events.js */ "./src/events/crads-events.js");
/* harmony import */ var _gameStatistics_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameStatistics.js */ "./src/engine/gameStatistics.js");
/* harmony import */ var _events_settnigs_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../events/settnigs-events */ "./src/events/settnigs-events.js");
/* harmony import */ var _events_buttons_clicks_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../events/buttons-clicks.js */ "./src/events/buttons-clicks.js");
/* harmony import */ var _gameSettings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gameSettings.js */ "./src/engine/gameSettings.js");
/* harmony import */ var _algorithms_sounds_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../algorithms/sounds.js */ "./src/algorithms/sounds.js");
/* harmony import */ var _getDataFromDB_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getDataFromDB.js */ "./src/engine/getDataFromDB.js");








 // create settings selectors and buttons

var createSelector = function createSelector(inEl, selectorListner, parametrsArray, activEl) {
  var selector = document.createElement("select");
  selector.classList.add("settingsSelector");
  var inText = "";

  selector.onchange = function () {
    selectorListner(selector.value);
  };

  parametrsArray.forEach(function (el) {
    if (activEl === el) inText += "<option selected value=\"".concat(el, "\" >").concat(el, "</option>");else inText += "<option value=\"".concat(el, "\">").concat(el, "</option>");
  });
  selector.innerHTML = inText;
  inEl.append(selector);
};

var createBackBtn = function createBackBtn(context) {
  var button = document.createElement("button");

  button.onclick = function () {
    Object(_algorithms_sounds_js__WEBPACK_IMPORTED_MODULE_7__["playSound"])("dist/sound/buttonClick.mp3");
    renderGameMenu("game-menu");
  };

  button.classList.add("menu-btn");
  button.innerText = "Back";
  button.setAttribute("id", "back-to-main-menu-btn");
  context.append(button);
}; //------------------------------------------------
// input parameter - elemet which must be removed


var removeField = function removeField(elemeintId) {
  var removedActivity = document.getElementById(elemeintId);
  removedActivity.remove();
};

var renderGameSettings = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var workSpace, settingsMenu, cardSets;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            removeField("game-menu");
            workSpace = document.getElementById("work-space");
            settingsMenu = document.createElement("div");
            settingsMenu.setAttribute("id", "game-menu");
            workSpace.append(settingsMenu);
            _context.next = 7;
            return Object(_getDataFromDB_js__WEBPACK_IMPORTED_MODULE_8__["gatCardsNames"])();

          case 7:
            cardSets = _context.sent;
            createSelector(settingsMenu, _events_settnigs_events__WEBPACK_IMPORTED_MODULE_4__["selDifLvl"], ["Easy", "Medium", "Hard"], _gameSettings_js__WEBPACK_IMPORTED_MODULE_6__["levelOfDifficulty"]);
            createSelector(settingsMenu, _events_settnigs_events__WEBPACK_IMPORTED_MODULE_4__["selectSardSet"], cardSets, _gameSettings_js__WEBPACK_IMPORTED_MODULE_6__["getCardSetName"]);
            createBackBtn(settingsMenu);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function renderGameSettings() {
    return _ref.apply(this, arguments);
  };
}(); //------------------------------------------------
// game field


var addInfoBar = function addInfoBar() {
  var doc = document.getElementById("work-space");
  var gameField = document.createElement("div");
  gameField.setAttribute("id", "game-field");
  gameField.innerHTML = "<span id=\"infoBar\">\n                            <p id=\"countClick\"><b>Number of clicks:</b> 0</p> \n                            <p id=\"stopwatch\"><b>Time:</b> 00:00:00</p>\n                         </span>";
  doc.append(gameField);
};

var addCardsOnField = function addCardsOnField(fieldSize) {
  var doc = document.getElementById("game-field");

  var _loop = function _loop(i) {
    var div = document.createElement("div");
    div.classList.add("card");
    if (Object(_gameSettings_js__WEBPACK_IMPORTED_MODULE_6__["getFieldSize"])() === 12) div.classList.add("easy");
    if (Object(_gameSettings_js__WEBPACK_IMPORTED_MODULE_6__["getFieldSize"])() === 18) div.classList.add("medium");
    if (Object(_gameSettings_js__WEBPACK_IMPORTED_MODULE_6__["getFieldSize"])() === 24) div.classList.add("hard"); //Alternative solution - use Event delegation on work-space

    div.onclick = function () {
      Object(_events_crads_events_js__WEBPACK_IMPORTED_MODULE_2__["rollCard"])(div);
    };

    div.setAttribute("activated", false);
    div.setAttribute("id", "".concat(i, "-card"));
    div.innerHTML = "<div class=\"front-card\" activated=\"false\"></div>\n          <div class=\"back-card\"></div>";
    doc.append(div);
  };

  for (var i = 0; i < fieldSize; i++) {
    _loop(i);
  }
};

var genetateGameField = function genetateGameField(fieldSize) {
  removeField("game-menu");
  addInfoBar();
  addCardsOnField(fieldSize);
}; //------------------------------------------------
// Game menu


var renderGameMenu = function renderGameMenu(oldActivity) {
  removeField("".concat(oldActivity));
  var doc = document.getElementById("work-space");
  var div = document.createElement("div");
  div.setAttribute("id", "game-menu");
  div.innerHTML = "<button class=\"menu-btn\" id=\"new-game-btn\">New Game</button>\n                   <button class=\"menu-btn\" id=\"rating-btn\">Rating</button>\n                   <button class=\"menu-btn\" id=\"options-btn\">Options</button>";
  doc.append(div);
  addGameMenuListner();
};

var addGameMenuListner = function addGameMenuListner() {
  var newGameBtn = document.getElementById("new-game-btn");
  var ratingBtn = document.getElementById("rating-btn");
  var optionsBtn = document.getElementById("options-btn");
  newGameBtn.onclick = _events_buttons_clicks_js__WEBPACK_IMPORTED_MODULE_5__["newGame"];
  ratingBtn.onclick = _events_buttons_clicks_js__WEBPACK_IMPORTED_MODULE_5__["openRating"];
  optionsBtn.onclick = _events_buttons_clicks_js__WEBPACK_IMPORTED_MODULE_5__["openSettings"];
}; //------------------------------------------------
// rating


var renderRating = function renderRating(domEl, level) {
  var gameResults = localStorage.getItem(level);

  if (gameResults !== null) {
    gameResults = JSON.parse(gameResults);
    gameResults.forEach(function (el) {
      var playerInfo = document.createElement("p");
      playerInfo.innerText = "".concat(el.name, " : ").concat(el.points);
      domEl.append(playerInfo);
    });
  } else {
    var playerInfo = document.createElement("p");
    playerInfo.innerText = "You can be the first!";
    domEl.prepend(playerInfo);
  }
};

var radioRatingInit = function radioRatingInit() {
  var lvls = ["Easy", "Medium", "Hard"];
  lvls.forEach(function (el) {
    var domEl = document.getElementById(el);

    domEl.onclick = function () {
      removeField("rating");
      var div = document.createElement("div");
      div.setAttribute("id", "rating");
      document.getElementById("radio-btns").after(div);
      renderRating(document.getElementById("rating"), el);
    };
  });
};

var renderRatingMenu = function renderRatingMenu() {
  removeField("game-menu");
  var workSpace = document.getElementById("work-space");
  var div = document.createElement("div");
  div.setAttribute("id", "game-menu");
  div.innerHTML = "<div id=\"radio-btns\">  \n                      <div  class=\"form_radio_btn\" >\n                        <input type=\"radio\" name=\"lvl\" id=\"Easy\" checked>\n                        <label for=\"Easy\">Easy</label>\n                      </div>\n                      <div class=\"form_radio_btn\">\n                        <input type=\"radio\" name=\"lvl\" id=\"Medium\">\n                        <label for=\"Medium\">Medium</label>\n                      </div>\n                      <div  class=\"form_radio_btn\" >\n                        <input type=\"radio\" name=\"lvl\" id=\"Hard\">\n                        <label for=\"Hard\">Hard</label>\n                      </div>\n                   </div>\n                   <div id=\"rating\"></div>\n                   <div id=\"btn-div\"></div>";
  workSpace.append(div);
  createBackBtn(document.getElementById("btn-div"));
  radioRatingInit();
  var ratingMenu = document.getElementById("rating");
  renderRating(ratingMenu, "Easy");
}; //
// Modal window


var hiddenEndGameWindow = function hiddenEndGameWindow() {
  var modalWindow = document.getElementById("modalDialog");
  document.getElementById("nick-name").value = "";
  modalWindow.style.top = "-999px";
  setTimeout(function () {
    var backModal = document.getElementById("openModal");
    backModal.style.visibility = "hidden";
  }, 500);
};

var showEndGameWindow = function showEndGameWindow() {
  var backModal = document.getElementById("openModal");
  backModal.style.visibility = "visible";
  var modalWindow = document.getElementById("modalDialog");
  modalWindow.style.top = "0px";
  modalWindow.childNodes[3].innerText = "Travel time: ".concat(_gameStatistics_js__WEBPACK_IMPORTED_MODULE_3__["gameState"].stopwatch.toString());
  modalWindow.childNodes[5].innerText = "Number of Clicks: ".concat(_gameStatistics_js__WEBPACK_IMPORTED_MODULE_3__["gameState"].countClicks);
}; //




/***/ }),

/***/ "./src/engine/gameSettings.js":
/*!************************************!*\
  !*** ./src/engine/gameSettings.js ***!
  \************************************/
/*! exports provided: getCardSetName, getFieldSize, setLevel, setCardSet, levelOfDifficulty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCardSetName", function() { return getCardSetName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFieldSize", function() { return getFieldSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLevel", function() { return setLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCardSet", function() { return setCardSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "levelOfDifficulty", function() { return levelOfDifficulty; });
/* game settings are stored here */

/* This file may be convert to json if you need to create server side */
// TODO: rewrite this cod to Object!!!
var levelOfDifficulty = "Easy";
var cardSet = "Cats";

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

var getCardSetName = function getCardSetName() {
  return cardSet;
};

var setCardSet = function setCardSet(value) {
  cardSet = value;
};

var setLevel = function setLevel(value) {
  levelOfDifficulty = value;
};



/***/ }),

/***/ "./src/engine/gameStatistics.js":
/*!**************************************!*\
  !*** ./src/engine/gameStatistics.js ***!
  \**************************************/
/*! exports provided: gameState, saveGameResult, getGameResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameState", function() { return gameState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveGameResult", function() { return saveGameResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGameResults", function() { return getGameResults; });
/* harmony import */ var _algorithms_stopwatch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../algorithms/stopwatch.js */ "./src/algorithms/stopwatch.js");
/* harmony import */ var _gameSettings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameSettings.js */ "./src/engine/gameSettings.js");


var gameState = {
  totalCountUpCards: 0,
  countClicks: 0,
  stopwatch: new _algorithms_stopwatch_js__WEBPACK_IMPORTED_MODULE_0__["RenderingStopwatch"]("stopwatch"),
  reset: function reset() {
    this.totalCountUpCards = 0;
    this.countClicks = 0;
    this.stopwatch.reset();
  }
};
var MAX_TIME = 600;

var calcGamePoints = function calcGamePoints() {
  var countClicks = gameState.countClicks;
  var spendTime = gameState.stopwatch.getSecond;

  if (spendTime < MAX_TIME) {
    return Math.trunc((MAX_TIME - spendTime) / countClicks * Object(_gameSettings_js__WEBPACK_IMPORTED_MODULE_1__["getFieldSize"])());
  }

  return 100;
};

var addNewRecord = function addNewRecord(obj, playerName, newPlayerPoints) {
  var hasName = false;
  obj.forEach(function (el, ind) {
    if (el.name === playerName) {
      if (el.points < newPlayerPoints) {
        el.points = newPlayerPoints;
      } else {
        hasName = true;
      }

      return;
    } else if (ind === obj.length - 1 && !hasName) {
      obj.push({
        name: playerName,
        points: newPlayerPoints
      });
      return;
    }
  });
  return obj;
};

var checkRating = function checkRating(rating) {
  rating.sort(function (a, b) {
    return b.points - a.points;
  });
  if (rating.length > 10) rating.pop();
  return rating;
};

var saveGameResult = function saveGameResult() {
  var playerName = document.getElementById("nick-name").value;
  var playerPoints = calcGamePoints();
  var rating = localStorage.getItem(_gameSettings_js__WEBPACK_IMPORTED_MODULE_1__["levelOfDifficulty"]);

  if (rating !== null) {
    console.log("Yes");
    rating = addNewRecord(JSON.parse(rating), playerName, playerPoints);
    rating = checkRating(rating);
  } else {
    console.log("No");
    rating = [{
      name: playerName,
      points: playerPoints
    }];
  }

  localStorage.setItem(_gameSettings_js__WEBPACK_IMPORTED_MODULE_1__["levelOfDifficulty"], JSON.stringify(rating));
}; // deprecated


var getGameResults = function getGameResults() {
  var gameRating = [localStorage.length];

  for (var key in localStorage) {
    if (localStorage.hasOwnProperty(key) && key !== 0) {
      gameRating.push([key, localStorage.getItem(key)]);
    }
  }

  return gameRating;
};



/***/ }),

/***/ "./src/engine/getDataFromDB.js":
/*!*************************************!*\
  !*** ./src/engine/getDataFromDB.js ***!
  \*************************************/
/*! exports provided: gatCardsNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gatCardsNames", function() { return gatCardsNames; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _algorithms_requests_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../algorithms/requests.js */ "./src/algorithms/requests.js");


 // TODO GAME_DATA_URL используется в нескольниких местах, есть смысл создать файл с
// переменными "среды окружения"

var GAME_DATA_URL = "/dist/data/gameData.json";

var gatCardsNames = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var gameDataResponse, cardSets, key;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_algorithms_requests_js__WEBPACK_IMPORTED_MODULE_2__["getJsonFromUrl"])(GAME_DATA_URL);

          case 2:
            gameDataResponse = _context.sent;
            cardSets = [];

            for (key in gameDataResponse) {
              cardSets.push(key);
            }

            return _context.abrupt("return", cardSets);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function gatCardsNames() {
    return _ref.apply(this, arguments);
  };
}();



/***/ }),

/***/ "./src/engine/newGame.js":
/*!*******************************!*\
  !*** ./src/engine/newGame.js ***!
  \*******************************/
/*! exports provided: startGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startGame", function() { return startGame; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gameSettings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameSettings.js */ "./src/engine/gameSettings.js");
/* harmony import */ var _algorithms_numeric_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../algorithms/numeric.js */ "./src/algorithms/numeric.js");
/* harmony import */ var _algorithms_requests_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../algorithms/requests.js */ "./src/algorithms/requests.js");
/* harmony import */ var _engine_gameStatistics_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../engine/gameStatistics.js */ "./src/engine/gameStatistics.js");
/* harmony import */ var _gameLayout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gameLayout.js */ "./src/engine/gameLayout.js");
/* harmony import */ var _algorithms_sounds_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../algorithms/sounds.js */ "./src/algorithms/sounds.js");



function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







var GAME_DATA_URL = "/dist/data/gameData.json"; // It's functions need for formed game map
// this function get Json from server and formed map answer with cards links

var getCards = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(fieldSize, cardSetName) {
    var gameDataResponse, pictureStore, hasEl, index, id, link;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_algorithms_requests_js__WEBPACK_IMPORTED_MODULE_4__["getJsonFromUrl"])(GAME_DATA_URL);

          case 2:
            gameDataResponse = _context.sent;
            pictureStore = new Map(); // Данный set нужен для недопуска добавления повторяющихся жл в map

            hasEl = new Set();
            index = 0;

            while (pictureStore.size < fieldSize / 2) {
              id = Object(_algorithms_numeric_js__WEBPACK_IMPORTED_MODULE_3__["randomInteger"])(0, 14);
              link = gameDataResponse[cardSetName][id]["link"];

              if (!hasEl.has(id)) {
                hasEl.add(id);
                pictureStore.set(index, link);
                index++;
              }
            }

            return _context.abrupt("return", pictureStore);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getCards(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var generateCardPosition = function generateCardPosition(fieldSize) {
  var cardSet = new Set();
  var posArray = [];
  var index = 0;

  while (cardSet.size < fieldSize) {
    var countUniqEl = 0; // Generate two uniq pos for equal cards

    while (countUniqEl < 2) {
      var pos = Object(_algorithms_numeric_js__WEBPACK_IMPORTED_MODULE_3__["randomInteger"])(0, fieldSize - 1);

      if (!cardSet.has(pos)) {
        cardSet.add(pos);
        posArray[pos] = index;
        countUniqEl++;
      }
    }

    index++;
  }

  console.log(posArray);
  return posArray;
};

var renderBackSide = function renderBackSide(posArray, cardsMap) {
  console.log(cardsMap);
  var doc = document.getElementById("game-field");
  var index = 0;

  var _iterator = _createForOfIteratorHelper(doc.children),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var node = _step.value;

      if (node.tagName !== "SPAN") {
        var numOfCard = posArray[index];
        var link = cardsMap.get(numOfCard);
        node.children[1].style.backgroundImage = "url(".concat(link, ")");
        node.children[1].style.backgroundSize = "100%";
        index++;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

var createGameMatrix = /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(fieldSize, cardSetName) {
    var pictureStore, posArray;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getCards(fieldSize, cardSetName);

          case 2:
            pictureStore = _context2.sent;
            posArray = generateCardPosition(fieldSize, pictureStore);
            renderBackSide(posArray, pictureStore);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function createGameMatrix(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); //


var startGame = function startGame() {
  Object(_algorithms_sounds_js__WEBPACK_IMPORTED_MODULE_7__["playSound"])("dist/sound/cardsLayout.mp3");
  var fieldSize = Object(_gameSettings_js__WEBPACK_IMPORTED_MODULE_2__["getFieldSize"])();
  var cardSetName = Object(_gameSettings_js__WEBPACK_IMPORTED_MODULE_2__["getCardSetName"])();
  Object(_gameLayout_js__WEBPACK_IMPORTED_MODULE_6__["genetateGameField"])(fieldSize);
  createGameMatrix(fieldSize, cardSetName);
  _engine_gameStatistics_js__WEBPACK_IMPORTED_MODULE_5__["gameState"].stopwatch.start();
};



/***/ }),

/***/ "./src/events/buttons-clicks.js":
/*!**************************************!*\
  !*** ./src/events/buttons-clicks.js ***!
  \**************************************/
/*! exports provided: newGame, openRating, openSettings, endGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newGame", function() { return newGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openRating", function() { return openRating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openSettings", function() { return openSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endGame", function() { return endGame; });
/* harmony import */ var _engine_gameLayout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../engine/gameLayout.js */ "./src/engine/gameLayout.js");
/* harmony import */ var _engine_newGame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../engine/newGame.js */ "./src/engine/newGame.js");
/* harmony import */ var _engine_gameStatistics_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../engine/gameStatistics.js */ "./src/engine/gameStatistics.js");
/* harmony import */ var _algorithms_sounds_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../algorithms/sounds.js */ "./src/algorithms/sounds.js");



 // This btn removed game-menu and uploaded game-field wich cards

var newGame = function newGame() {
  Object(_algorithms_sounds_js__WEBPACK_IMPORTED_MODULE_3__["playSound"])("dist/sound/buttonClick.mp3");
  Object(_engine_newGame_js__WEBPACK_IMPORTED_MODULE_1__["startGame"])();
};

var openSettings = function openSettings() {
  Object(_algorithms_sounds_js__WEBPACK_IMPORTED_MODULE_3__["playSound"])("dist/sound/buttonClick.mp3");
  Object(_engine_gameLayout_js__WEBPACK_IMPORTED_MODULE_0__["renderGameSettings"])();
};

var openRating = function openRating() {
  Object(_algorithms_sounds_js__WEBPACK_IMPORTED_MODULE_3__["playSound"])("dist/sound/buttonClick.mp3");
  Object(_engine_gameLayout_js__WEBPACK_IMPORTED_MODULE_0__["renderRatingMenu"])();
};

var endGame = function endGame() {
  Object(_algorithms_sounds_js__WEBPACK_IMPORTED_MODULE_3__["playSound"])("dist/sound/buttonClick.mp3");
  Object(_engine_gameStatistics_js__WEBPACK_IMPORTED_MODULE_2__["saveGameResult"])();
  _engine_gameStatistics_js__WEBPACK_IMPORTED_MODULE_2__["gameState"].reset();
  Object(_engine_gameLayout_js__WEBPACK_IMPORTED_MODULE_0__["hiddenEndGameWindow"])();
  setTimeout(_engine_gameLayout_js__WEBPACK_IMPORTED_MODULE_0__["renderGameMenu"], 300, "game-field");
  return false;
};



/***/ }),

/***/ "./src/events/crads-events.js":
/*!************************************!*\
  !*** ./src/events/crads-events.js ***!
  \************************************/
/*! exports provided: rollCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rollCard", function() { return rollCard; });
/* harmony import */ var _engine_gameSettings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../engine/gameSettings.js */ "./src/engine/gameSettings.js");
/* harmony import */ var _engine_gameStatistics_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../engine/gameStatistics.js */ "./src/engine/gameStatistics.js");
/* harmony import */ var _engine_gameLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../engine/gameLayout.js */ "./src/engine/gameLayout.js");
/* harmony import */ var _algorithms_sounds_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../algorithms/sounds.js */ "./src/algorithms/sounds.js");





var clickCounter = function clickCounter(count) {
  var clickBar = document.getElementById("countClick");
  clickBar.innerHTML = "<b>Number of clicks:</b> ".concat(count);
};

var checkCardsMatches = function checkCardsMatches() {
  var invertedСards = document.querySelectorAll("[activated=\"true\"]"); // In this version comparison is performed for url to backround-image
  // This solution can be replaced by comparison by id

  var card1Back = invertedСards[0].lastChild;
  var card2Back = invertedСards[1].lastChild;

  if (card1Back.style.backgroundImage === card2Back.style.backgroundImage) {
    invertedСards[0].setAttribute("selected", true);
    invertedСards[1].setAttribute("selected", true);
    _engine_gameStatistics_js__WEBPACK_IMPORTED_MODULE_1__["gameState"].totalCountUpCards += 2;
    invertedСards[0].setAttribute("activated", false);
    invertedСards[1].setAttribute("activated", false);
    setTimeout(checkEndGame, 1000);
  } else {
    rollDisabled();
    setTimeout(function () {
      invertedСards[0].setAttribute("activated", false);
      invertedСards[1].setAttribute("activated", false);
    }, 1500);
    setTimeout(rollEnabled, 2000);
  }
};

var rollDisabled = function rollDisabled() {
  var cards = document.querySelectorAll(".card");
  cards.forEach(function (item) {
    item.onclick = null;
  });
};

var rollEnabled = function rollEnabled() {
  var cards = document.querySelectorAll(".card");
  cards.forEach(function (item) {
    item.onclick = function () {
      rollCard(item);
    };
  });
};

var checkEndGame = function checkEndGame() {
  if (Object(_engine_gameSettings_js__WEBPACK_IMPORTED_MODULE_0__["getFieldSize"])() == _engine_gameStatistics_js__WEBPACK_IMPORTED_MODULE_1__["gameState"].totalCountUpCards) {
    Object(_algorithms_sounds_js__WEBPACK_IMPORTED_MODULE_3__["playSound"])("dist/sound/endGame.mp3");
    _engine_gameStatistics_js__WEBPACK_IMPORTED_MODULE_1__["gameState"].stopwatch.stop();
    Object(_engine_gameLayout_js__WEBPACK_IMPORTED_MODULE_2__["showEndGameWindow"])();
  }
};

var countUpCards = 0;

var rollCard = function rollCard(div) {
  // this code work only with non selected and not activated functions
  if (!div.hasAttribute("selected") && div.getAttribute("activated") === "false") {
    Object(_algorithms_sounds_js__WEBPACK_IMPORTED_MODULE_3__["playSound"])("dist/sound/upCard.mp3");
    _engine_gameStatistics_js__WEBPACK_IMPORTED_MODULE_1__["gameState"].countClicks += 1;
    clickCounter(_engine_gameStatistics_js__WEBPACK_IMPORTED_MODULE_1__["gameState"].countClicks);
    console.log(_engine_gameStatistics_js__WEBPACK_IMPORTED_MODULE_1__["gameState"]);

    if (countUpCards < 2) {
      div.setAttribute("activated", true);
      countUpCards++;
    }

    if (countUpCards == 2) {
      countUpCards = 0;
      checkCardsMatches();
    }
  }
};



/***/ }),

/***/ "./src/events/settnigs-events.js":
/*!***************************************!*\
  !*** ./src/events/settnigs-events.js ***!
  \***************************************/
/*! exports provided: selDifLvl, selectSardSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selDifLvl", function() { return selDifLvl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSardSet", function() { return selectSardSet; });
/* harmony import */ var _engine_gameSettings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../engine/gameSettings.js */ "./src/engine/gameSettings.js");


var selDifLvl = function selDifLvl(value) {
  Object(_engine_gameSettings_js__WEBPACK_IMPORTED_MODULE_0__["setLevel"])(value);
};

var selectSardSet = function selectSardSet(value) {
  Object(_engine_gameSettings_js__WEBPACK_IMPORTED_MODULE_0__["setCardSet"])(value);
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
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _engine_gameLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./engine/gameLayout.js */ "./src/engine/gameLayout.js");




window.onload = function () {
  var newGameBtn = document.getElementById("new-game-btn");
  var ratingBtn = document.getElementById("rating-btn");
  var optionsBtn = document.getElementById("options-btn");
  var endGameBtn = document.getElementById("modalDialog");
  newGameBtn.onclick = _events_buttons_clicks_js__WEBPACK_IMPORTED_MODULE_0__["newGame"];
  ratingBtn.onclick = _events_buttons_clicks_js__WEBPACK_IMPORTED_MODULE_0__["openRating"];
  optionsBtn.onclick = _events_buttons_clicks_js__WEBPACK_IMPORTED_MODULE_0__["openSettings"];
  endGameBtn.onsubmit = _events_buttons_clicks_js__WEBPACK_IMPORTED_MODULE_0__["endGame"]; //showEndGameWindow();
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc3VwZXJQcm9wQmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FsZ29yaXRobXMvbnVtZXJpYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWxnb3JpdGhtcy9yZXF1ZXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWxnb3JpdGhtcy9zb3VuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FsZ29yaXRobXMvc3RvcHdhdGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZUxheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dhbWVTZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dhbWVTdGF0aXN0aWNzLmpzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2V0RGF0YUZyb21EQi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL25ld0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9idXR0b25zLWNsaWNrcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL2NyYWRzLWV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL3NldHRuaWdzLWV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsicmFuZG9tSW50ZWdlciIsIm1pbiIsIm1heCIsInJhbmQiLCJNYXRoIiwicmFuZG9tIiwiZmxvb3IiLCJnZXRKc29uRnJvbVVybCIsInVybCIsImZldGNoIiwidGhlbiIsInJlc3BvbmNlIiwianNvbiIsImFkZFNvdW5kVG9FbCIsInNlbGVjdG9yIiwicGF0aFRvU291bmQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsIiwib25jbGljayIsInBsYXlTb3VuZCIsImF1ZGlvIiwiQXVkaW8iLCJzcmMiLCJhdXRvcGxheSIsIlN0b3B3YXRjaCIsInNlYyIsImhvdXIiLCJvYmoiLCJtc2luIiwidGltZXJJZCIsInNldEludGVydmFsIiwidGljayIsImNsZWFySW50ZXJ2YWwiLCJzSG91ciIsInRpbWVTdHJpbmciLCJzTWluIiwic1NlYyIsIlJlbmRlcmluZ1N0b3B3YXRjaCIsImVsSWQiLCJ0aW1lRWwiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsInRvU3RyaW5nIiwiY3JlYXRlU2VsZWN0b3IiLCJpbkVsIiwic2VsZWN0b3JMaXN0bmVyIiwicGFyYW1ldHJzQXJyYXkiLCJhY3RpdkVsIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImluVGV4dCIsIm9uY2hhbmdlIiwidmFsdWUiLCJhcHBlbmQiLCJjcmVhdGVCYWNrQnRuIiwiY29udGV4dCIsImJ1dHRvbiIsInJlbmRlckdhbWVNZW51IiwiaW5uZXJUZXh0Iiwic2V0QXR0cmlidXRlIiwicmVtb3ZlRmllbGQiLCJlbGVtZWludElkIiwicmVtb3ZlZEFjdGl2aXR5IiwicmVtb3ZlIiwicmVuZGVyR2FtZVNldHRpbmdzIiwid29ya1NwYWNlIiwic2V0dGluZ3NNZW51IiwiZ2F0Q2FyZHNOYW1lcyIsImNhcmRTZXRzIiwic2VsRGlmTHZsIiwibGV2ZWxPZkRpZmZpY3VsdHkiLCJzZWxlY3RTYXJkU2V0IiwiZ2V0Q2FyZFNldE5hbWUiLCJhZGRJbmZvQmFyIiwiZG9jIiwiZ2FtZUZpZWxkIiwiYWRkQ2FyZHNPbkZpZWxkIiwiZmllbGRTaXplIiwiaSIsImRpdiIsImdldEZpZWxkU2l6ZSIsInJvbGxDYXJkIiwiZ2VuZXRhdGVHYW1lRmllbGQiLCJvbGRBY3Rpdml0eSIsImFkZEdhbWVNZW51TGlzdG5lciIsIm5ld0dhbWVCdG4iLCJyYXRpbmdCdG4iLCJvcHRpb25zQnRuIiwibmV3R2FtZSIsIm9wZW5SYXRpbmciLCJvcGVuU2V0dGluZ3MiLCJyZW5kZXJSYXRpbmciLCJkb21FbCIsImxldmVsIiwiZ2FtZVJlc3VsdHMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwicGxheWVySW5mbyIsIm5hbWUiLCJwb2ludHMiLCJwcmVwZW5kIiwicmFkaW9SYXRpbmdJbml0IiwibHZscyIsImFmdGVyIiwicmVuZGVyUmF0aW5nTWVudSIsInJhdGluZ01lbnUiLCJoaWRkZW5FbmRHYW1lV2luZG93IiwibW9kYWxXaW5kb3ciLCJzdHlsZSIsInRvcCIsInNldFRpbWVvdXQiLCJiYWNrTW9kYWwiLCJ2aXNpYmlsaXR5Iiwic2hvd0VuZEdhbWVXaW5kb3ciLCJjaGlsZE5vZGVzIiwiZ2FtZVN0YXRlIiwic3RvcHdhdGNoIiwiY291bnRDbGlja3MiLCJjYXJkU2V0Iiwic2V0Q2FyZFNldCIsInNldExldmVsIiwidG90YWxDb3VudFVwQ2FyZHMiLCJyZXNldCIsIk1BWF9USU1FIiwiY2FsY0dhbWVQb2ludHMiLCJzcGVuZFRpbWUiLCJnZXRTZWNvbmQiLCJ0cnVuYyIsImFkZE5ld1JlY29yZCIsInBsYXllck5hbWUiLCJuZXdQbGF5ZXJQb2ludHMiLCJoYXNOYW1lIiwiaW5kIiwibGVuZ3RoIiwicHVzaCIsImNoZWNrUmF0aW5nIiwicmF0aW5nIiwic29ydCIsImEiLCJiIiwicG9wIiwic2F2ZUdhbWVSZXN1bHQiLCJwbGF5ZXJQb2ludHMiLCJjb25zb2xlIiwibG9nIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImdldEdhbWVSZXN1bHRzIiwiZ2FtZVJhdGluZyIsImtleSIsImhhc093blByb3BlcnR5IiwiR0FNRV9EQVRBX1VSTCIsImdhbWVEYXRhUmVzcG9uc2UiLCJnZXRDYXJkcyIsImNhcmRTZXROYW1lIiwicGljdHVyZVN0b3JlIiwiTWFwIiwiaGFzRWwiLCJTZXQiLCJpbmRleCIsInNpemUiLCJpZCIsImxpbmsiLCJoYXMiLCJzZXQiLCJnZW5lcmF0ZUNhcmRQb3NpdGlvbiIsInBvc0FycmF5IiwiY291bnRVbmlxRWwiLCJwb3MiLCJyZW5kZXJCYWNrU2lkZSIsImNhcmRzTWFwIiwiY2hpbGRyZW4iLCJub2RlIiwidGFnTmFtZSIsIm51bU9mQ2FyZCIsImdldCIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiY3JlYXRlR2FtZU1hdHJpeCIsInN0YXJ0R2FtZSIsInN0YXJ0IiwiZW5kR2FtZSIsImNsaWNrQ291bnRlciIsImNvdW50IiwiY2xpY2tCYXIiLCJjaGVja0NhcmRzTWF0Y2hlcyIsImludmVydGVk0KFhcmRzIiwiY2FyZDFCYWNrIiwibGFzdENoaWxkIiwiY2FyZDJCYWNrIiwiY2hlY2tFbmRHYW1lIiwicm9sbERpc2FibGVkIiwicm9sbEVuYWJsZWQiLCJjYXJkcyIsIml0ZW0iLCJzdG9wIiwiY291bnRVcENhcmRzIiwiaGFzQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwid2luZG93Iiwib25sb2FkIiwiZW5kR2FtZUJ0biIsIm9uc3VibWl0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFD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QVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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LHNFQUFyQjtBQUNBaUgsWUFBVSxDQUFDQyxRQUFYLEdBQXNCckIsaUVBQXRCLENBUm9CLENBU3BCO0FBQ0QsQ0FWRCxDIiwiZmlsZSI6ImpzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJ2YXIgc3VwZXJQcm9wQmFzZSA9IHJlcXVpcmUoXCIuL3N1cGVyUHJvcEJhc2VcIik7XG5cbmZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gUmVmbGVjdC5nZXQ7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBzdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIgfHwgdGFyZ2V0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0OyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjsiLCJ2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9nZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zdXBlclByb3BCYXNlOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsIi8vIFRoaXMgZmlsZSBpbmNsdWRlcyBhbGdvcml0aG1zIGZvciBudW1lcmljIG9wZXJhdGlvbnNcblxuY29uc3QgcmFuZG9tSW50ZWdlciA9IChtaW4sIG1heCkgPT4ge1xuICBsZXQgcmFuZCA9IG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4ICsgMSAtIG1pbik7XG4gIHJldHVybiBNYXRoLmZsb29yKHJhbmQpO1xufTtcblxuZXhwb3J0IHsgcmFuZG9tSW50ZWdlciB9O1xuIiwiLy8gVGhpcyBmaWxlIGluY2x1ZGVzIGZ1bmN0aW9ucyBmb3IgcmVxdWVzdHMgdG8gc2VydmVyIGFuZCBldGNcblxuLy8gVGhpcyBmdW5jdGlvbiByZXR1cm4gSnNvbiBmcm9tIHVybFxuY29uc3QgZ2V0SnNvbkZyb21VcmwgPSAodXJsKSA9PiB7XG4gIHJldHVybiBmZXRjaCh1cmwpLnRoZW4oKHJlc3BvbmNlKSA9PiB7XG4gICAgcmV0dXJuIHJlc3BvbmNlLmpzb24oKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBnZXRKc29uRnJvbVVybCB9O1xuIiwiY29uc3QgYWRkU291bmRUb0VsID0gKHNlbGVjdG9yLCBwYXRoVG9Tb3VuZCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gIGVsZW1lbnQuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBlbC5vbmNsaWNrID0gZnVuY3Rpb24gKHBhdGhUb1NvdW5kKSB7XG4gICAgICBwbGF5U291bmQocGF0aFRvU291bmQpO1xuICAgIH07XG4gIH0pO1xufTtcblxuY29uc3QgcGxheVNvdW5kID0gKHBhdGhUb1NvdW5kKSA9PiB7XG4gIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKCk7IC8vINCh0L7Qt9C00LDRkdC8INC90L7QstGL0Lkg0Y3Qu9C10LzQtdC90YIgQXVkaW9cbiAgYXVkaW8uc3JjID0gYCR7cGF0aFRvU291bmR9YDsgLy8g0KPQutCw0LfRi9Cy0LDQtdC8INC/0YPRgtGMINC6INC30LLRg9C60YMgXCLQutC70LjQutCwXCJcbiAgYXVkaW8uYXV0b3BsYXkgPSB0cnVlOyAvLyDQkNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCDQt9Cw0L/Rg9GB0LrQsNC10Lxcbn07XG5cbmV4cG9ydCB7IGFkZFNvdW5kVG9FbCwgcGxheVNvdW5kIH07XG4iLCJjbGFzcyBTdG9wd2F0Y2gge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNlYyA9IHRoaXMubWluID0gdGhpcy5ob3VyID0gMDtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuc2VjID0gdGhpcy5taW4gPSB0aGlzLmhvdXIgPSAwO1xuICB9XG5cbiAgdGljayhvYmopIHtcbiAgICBvYmouc2VjKys7XG4gICAgaWYgKG9iai5zZWMgPT09IDYwKSB7XG4gICAgICBvYmoubWluICs9IDE7XG4gICAgICBvYmouc2VjID0gMDtcbiAgICB9XG4gICAgaWYgKG9iai5taW4gPT09IDYwKSB7XG4gICAgICBvYmouaG91ciArPSAxO1xuICAgICAgb2JqLm1pbiA9IDA7XG4gICAgfVxuICAgIGlmIChvYmouaG91ciA9PT0gMjQpIHtcbiAgICAgIG9iai5ob3VyID0gb2JqLm1zaW4gPSBvYmouc2VjID0gMDtcbiAgICB9XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLnRpbWVySWQgPSBzZXRJbnRlcnZhbCh0aGlzLnRpY2ssIDEwMDAsIHRoaXMpO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJZCk7XG4gIH1cblxuICBnZXQgZ2V0U2Vjb25kKCkge1xuICAgIHJldHVybiB0aGlzLnNlYyArIHRoaXMubWluICogNjAgKyB0aGlzLmhvdXIgKiAzNjAwO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgbGV0IHNIb3VyID0gdGhpcy5ob3VyIDwgMTAgPyBgMCR7dGhpcy5ob3VyfWAgOiB0aGlzLmhvdXI7XG4gICAgbGV0IHRpbWVTdHJpbmcgPSBgJHtzSG91cn06YDtcbiAgICBsZXQgc01pbiA9IHRoaXMubWluIDwgMTAgPyBgMCR7dGhpcy5taW59YCA6IHRoaXMubWluO1xuICAgIHRpbWVTdHJpbmcgKz0gYCR7c01pbn06YDtcbiAgICBsZXQgc1NlYyA9IHRoaXMuc2VjIDwgMTAgPyBgMCR7dGhpcy5zZWN9YCA6IHRoaXMuc2VjO1xuICAgIHRpbWVTdHJpbmcgKz0gYCR7c1NlY31gO1xuICAgIHJldHVybiB0aW1lU3RyaW5nO1xuICB9XG59XG5cbmNsYXNzIFJlbmRlcmluZ1N0b3B3YXRjaCBleHRlbmRzIFN0b3B3YXRjaCB7XG4gIGNvbnN0cnVjdG9yKGVsSWQpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZWxJZCA9IGVsSWQ7XG4gIH1cblxuICB0aWNrKG9iaikge1xuICAgIHN1cGVyLnRpY2sob2JqKTtcbiAgICBsZXQgdGltZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob2JqLmVsSWQpO1xuICAgIHRpbWVFbC5pbm5lckhUTUwgPSBcIjxiPlRpbWU6PC9iPiBcIiArIG9iai50b1N0cmluZygpO1xuICB9XG59XG5cbmV4cG9ydCB7IFN0b3B3YXRjaCwgUmVuZGVyaW5nU3RvcHdhdGNoIH07XG4iLCJpbXBvcnQgeyByb2xsQ2FyZCB9IGZyb20gXCIuLi9ldmVudHMvY3JhZHMtZXZlbnRzLmpzXCI7XG5pbXBvcnQgeyBnYW1lU3RhdGUsIGdldEdhbWVSZXN1bHRzIH0gZnJvbSBcIi4vZ2FtZVN0YXRpc3RpY3MuanNcIjtcbmltcG9ydCB7XG4gIHNlbERpZkx2bCxcbiAgc2VsZWN0U2FyZFNldCxcbiAgc2V0UmF0ZUx2bCxcbn0gZnJvbSBcIi4uL2V2ZW50cy9zZXR0bmlncy1ldmVudHNcIjtcbmltcG9ydCB7IG5ld0dhbWUsIG9wZW5SYXRpbmcsIG9wZW5TZXR0aW5ncyB9IGZyb20gXCIuLi9ldmVudHMvYnV0dG9ucy1jbGlja3MuanNcIjtcbmltcG9ydCB7XG4gIGdldEZpZWxkU2l6ZSxcbiAgbGV2ZWxPZkRpZmZpY3VsdHksXG4gIGdldENhcmRTZXROYW1lLFxufSBmcm9tIFwiLi9nYW1lU2V0dGluZ3MuanNcIjtcbmltcG9ydCB7IHBsYXlTb3VuZCB9IGZyb20gXCIuLi9hbGdvcml0aG1zL3NvdW5kcy5qc1wiO1xuaW1wb3J0IHsgZ2F0Q2FyZHNOYW1lcyB9IGZyb20gXCIuL2dldERhdGFGcm9tREIuanNcIjtcblxuLy8gY3JlYXRlIHNldHRpbmdzIHNlbGVjdG9ycyBhbmQgYnV0dG9uc1xuY29uc3QgY3JlYXRlU2VsZWN0b3IgPSAoaW5FbCwgc2VsZWN0b3JMaXN0bmVyLCBwYXJhbWV0cnNBcnJheSwgYWN0aXZFbCkgPT4ge1xuICBjb25zdCBzZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoXCJzZXR0aW5nc1NlbGVjdG9yXCIpO1xuXG4gIGxldCBpblRleHQgPSBcIlwiO1xuICBzZWxlY3Rvci5vbmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBzZWxlY3Rvckxpc3RuZXIoc2VsZWN0b3IudmFsdWUpO1xuICB9O1xuXG4gIHBhcmFtZXRyc0FycmF5LmZvckVhY2goKGVsKSA9PiB7XG4gICAgaWYgKGFjdGl2RWwgPT09IGVsKVxuICAgICAgaW5UZXh0ICs9IGA8b3B0aW9uIHNlbGVjdGVkIHZhbHVlPVwiJHtlbH1cIiA+JHtlbH08L29wdGlvbj5gO1xuICAgIGVsc2UgaW5UZXh0ICs9IGA8b3B0aW9uIHZhbHVlPVwiJHtlbH1cIj4ke2VsfTwvb3B0aW9uPmA7XG4gIH0pO1xuICBzZWxlY3Rvci5pbm5lckhUTUwgPSBpblRleHQ7XG5cbiAgaW5FbC5hcHBlbmQoc2VsZWN0b3IpO1xufTtcblxuY29uc3QgY3JlYXRlQmFja0J0biA9IChjb250ZXh0KSA9PiB7XG4gIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBwbGF5U291bmQoXCJkaXN0L3NvdW5kL2J1dHRvbkNsaWNrLm1wM1wiKTtcbiAgICByZW5kZXJHYW1lTWVudShcImdhbWUtbWVudVwiKTtcbiAgfTtcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJtZW51LWJ0blwiKTtcbiAgYnV0dG9uLmlubmVyVGV4dCA9IFwiQmFja1wiO1xuICBidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJiYWNrLXRvLW1haW4tbWVudS1idG5cIik7XG4gIGNvbnRleHQuYXBwZW5kKGJ1dHRvbik7XG59O1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBpbnB1dCBwYXJhbWV0ZXIgLSBlbGVtZXQgd2hpY2ggbXVzdCBiZSByZW1vdmVkXG5jb25zdCByZW1vdmVGaWVsZCA9IChlbGVtZWludElkKSA9PiB7XG4gIGNvbnN0IHJlbW92ZWRBY3Rpdml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1laW50SWQpO1xuICByZW1vdmVkQWN0aXZpdHkucmVtb3ZlKCk7XG59O1xuXG5jb25zdCByZW5kZXJHYW1lU2V0dGluZ3MgPSBhc3luYyAoKSA9PiB7XG4gIHJlbW92ZUZpZWxkKFwiZ2FtZS1tZW51XCIpO1xuICBjb25zdCB3b3JrU3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmstc3BhY2VcIik7XG4gIGxldCBzZXR0aW5nc01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZXR0aW5nc01lbnUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJnYW1lLW1lbnVcIik7XG4gIHdvcmtTcGFjZS5hcHBlbmQoc2V0dGluZ3NNZW51KTtcblxuICBjb25zdCBjYXJkU2V0cyA9IGF3YWl0IGdhdENhcmRzTmFtZXMoKTtcbiAgY3JlYXRlU2VsZWN0b3IoXG4gICAgc2V0dGluZ3NNZW51LFxuICAgIHNlbERpZkx2bCxcbiAgICBbXCJFYXN5XCIsIFwiTWVkaXVtXCIsIFwiSGFyZFwiXSxcbiAgICBsZXZlbE9mRGlmZmljdWx0eVxuICApO1xuXG4gIGNyZWF0ZVNlbGVjdG9yKHNldHRpbmdzTWVudSwgc2VsZWN0U2FyZFNldCwgY2FyZFNldHMsIGdldENhcmRTZXROYW1lKTtcbiAgY3JlYXRlQmFja0J0bihzZXR0aW5nc01lbnUpO1xufTtcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIGdhbWUgZmllbGRcbmNvbnN0IGFkZEluZm9CYXIgPSAoKSA9PiB7XG4gIGNvbnN0IGRvYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29yay1zcGFjZVwiKTtcbiAgY29uc3QgZ2FtZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZ2FtZUZpZWxkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZ2FtZS1maWVsZFwiKTtcbiAgZ2FtZUZpZWxkLmlubmVySFRNTCA9IGA8c3BhbiBpZD1cImluZm9CYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cImNvdW50Q2xpY2tcIj48Yj5OdW1iZXIgb2YgY2xpY2tzOjwvYj4gMDwvcD4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJzdG9wd2F0Y2hcIj48Yj5UaW1lOjwvYj4gMDA6MDA6MDA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPmA7XG4gIGRvYy5hcHBlbmQoZ2FtZUZpZWxkKTtcbn07XG5cbmNvbnN0IGFkZENhcmRzT25GaWVsZCA9IChmaWVsZFNpemUpID0+IHtcbiAgY29uc3QgZG9jID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWZpZWxkXCIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGRTaXplOyBpKyspIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICBpZiAoZ2V0RmllbGRTaXplKCkgPT09IDEyKSBkaXYuY2xhc3NMaXN0LmFkZChcImVhc3lcIik7XG4gICAgaWYgKGdldEZpZWxkU2l6ZSgpID09PSAxOCkgZGl2LmNsYXNzTGlzdC5hZGQoXCJtZWRpdW1cIik7XG4gICAgaWYgKGdldEZpZWxkU2l6ZSgpID09PSAyNCkgZGl2LmNsYXNzTGlzdC5hZGQoXCJoYXJkXCIpO1xuXG4gICAgLy9BbHRlcm5hdGl2ZSBzb2x1dGlvbiAtIHVzZSBFdmVudCBkZWxlZ2F0aW9uIG9uIHdvcmstc3BhY2VcbiAgICBkaXYub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJvbGxDYXJkKGRpdik7XG4gICAgfTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKFwiYWN0aXZhdGVkXCIsIGZhbHNlKTtcblxuICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtpfS1jYXJkYCk7XG4gICAgZGl2LmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiZnJvbnQtY2FyZFwiIGFjdGl2YXRlZD1cImZhbHNlXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJhY2stY2FyZFwiPjwvZGl2PmA7XG4gICAgZG9jLmFwcGVuZChkaXYpO1xuICB9XG59O1xuXG5jb25zdCBnZW5ldGF0ZUdhbWVGaWVsZCA9IChmaWVsZFNpemUpID0+IHtcbiAgcmVtb3ZlRmllbGQoXCJnYW1lLW1lbnVcIik7XG4gIGFkZEluZm9CYXIoKTtcbiAgYWRkQ2FyZHNPbkZpZWxkKGZpZWxkU2l6ZSk7XG59O1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gR2FtZSBtZW51XG5jb25zdCByZW5kZXJHYW1lTWVudSA9IChvbGRBY3Rpdml0eSkgPT4ge1xuICByZW1vdmVGaWVsZChgJHtvbGRBY3Rpdml0eX1gKTtcbiAgY29uc3QgZG9jID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JrLXNwYWNlXCIpO1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJnYW1lLW1lbnVcIik7XG4gIGRpdi5pbm5lckhUTUwgPSBgPGJ1dHRvbiBjbGFzcz1cIm1lbnUtYnRuXCIgaWQ9XCJuZXctZ2FtZS1idG5cIj5OZXcgR2FtZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtZW51LWJ0blwiIGlkPVwicmF0aW5nLWJ0blwiPlJhdGluZzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtZW51LWJ0blwiIGlkPVwib3B0aW9ucy1idG5cIj5PcHRpb25zPC9idXR0b24+YDtcbiAgZG9jLmFwcGVuZChkaXYpO1xuICBhZGRHYW1lTWVudUxpc3RuZXIoKTtcbn07XG5cbmNvbnN0IGFkZEdhbWVNZW51TGlzdG5lciA9ICgpID0+IHtcbiAgY29uc3QgbmV3R2FtZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LWdhbWUtYnRuXCIpO1xuICBjb25zdCByYXRpbmdCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhdGluZy1idG5cIik7XG4gIGNvbnN0IG9wdGlvbnNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wdGlvbnMtYnRuXCIpO1xuICBuZXdHYW1lQnRuLm9uY2xpY2sgPSBuZXdHYW1lO1xuICByYXRpbmdCdG4ub25jbGljayA9IG9wZW5SYXRpbmc7XG4gIG9wdGlvbnNCdG4ub25jbGljayA9IG9wZW5TZXR0aW5ncztcbn07XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyByYXRpbmdcbmNvbnN0IHJlbmRlclJhdGluZyA9IChkb21FbCwgbGV2ZWwpID0+IHtcbiAgbGV0IGdhbWVSZXN1bHRzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0obGV2ZWwpO1xuXG4gIGlmIChnYW1lUmVzdWx0cyAhPT0gbnVsbCkge1xuICAgIGdhbWVSZXN1bHRzID0gSlNPTi5wYXJzZShnYW1lUmVzdWx0cyk7XG4gICAgZ2FtZVJlc3VsdHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGNvbnN0IHBsYXllckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIHBsYXllckluZm8uaW5uZXJUZXh0ID0gYCR7ZWwubmFtZX0gOiAke2VsLnBvaW50c31gO1xuICAgICAgZG9tRWwuYXBwZW5kKHBsYXllckluZm8pO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHBsYXllckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwbGF5ZXJJbmZvLmlubmVyVGV4dCA9IGBZb3UgY2FuIGJlIHRoZSBmaXJzdCFgO1xuICAgIGRvbUVsLnByZXBlbmQocGxheWVySW5mbyk7XG4gIH1cbn07XG5cbmNvbnN0IHJhZGlvUmF0aW5nSW5pdCA9ICgpID0+IHtcbiAgY29uc3QgbHZscyA9IFtcIkVhc3lcIiwgXCJNZWRpdW1cIiwgXCJIYXJkXCJdO1xuICBsdmxzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgY29uc3QgZG9tRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbCk7XG4gICAgZG9tRWwub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlbW92ZUZpZWxkKFwicmF0aW5nXCIpO1xuICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyYXRpbmdcIik7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhZGlvLWJ0bnNcIikuYWZ0ZXIoZGl2KTtcbiAgICAgIHJlbmRlclJhdGluZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhdGluZ1wiKSwgZWwpO1xuICAgIH07XG4gIH0pO1xufTtcblxuY29uc3QgcmVuZGVyUmF0aW5nTWVudSA9ICgpID0+IHtcbiAgcmVtb3ZlRmllbGQoXCJnYW1lLW1lbnVcIik7XG4gIGNvbnN0IHdvcmtTcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29yay1zcGFjZVwiKTtcbiAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImdhbWUtbWVudVwiKTtcbiAgZGl2LmlubmVySFRNTCA9IGA8ZGl2IGlkPVwicmFkaW8tYnRuc1wiPiAgXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiAgY2xhc3M9XCJmb3JtX3JhZGlvX2J0blwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwibHZsXCIgaWQ9XCJFYXN5XCIgY2hlY2tlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJFYXN5XCI+RWFzeTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1fcmFkaW9fYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImx2bFwiIGlkPVwiTWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiTWVkaXVtXCI+TWVkaXVtPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzcz1cImZvcm1fcmFkaW9fYnRuXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJsdmxcIiBpZD1cIkhhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJIYXJkXCI+SGFyZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInJhdGluZ1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJidG4tZGl2XCI+PC9kaXY+YDtcbiAgd29ya1NwYWNlLmFwcGVuZChkaXYpO1xuICBjcmVhdGVCYWNrQnRuKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLWRpdlwiKSk7XG5cbiAgcmFkaW9SYXRpbmdJbml0KCk7XG5cbiAgY29uc3QgcmF0aW5nTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmF0aW5nXCIpO1xuICByZW5kZXJSYXRpbmcocmF0aW5nTWVudSwgXCJFYXN5XCIpO1xufTtcblxuLy9cblxuLy8gTW9kYWwgd2luZG93XG5jb25zdCBoaWRkZW5FbmRHYW1lV2luZG93ID0gKCkgPT4ge1xuICBjb25zdCBtb2RhbFdpbmRvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxEaWFsb2dcIik7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmljay1uYW1lXCIpLnZhbHVlID0gXCJcIjtcbiAgbW9kYWxXaW5kb3cuc3R5bGUudG9wID0gXCItOTk5cHhcIjtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgY29uc3QgYmFja01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcGVuTW9kYWxcIik7XG4gICAgYmFja01vZGFsLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICB9LCA1MDApO1xufTtcblxuY29uc3Qgc2hvd0VuZEdhbWVXaW5kb3cgPSAoKSA9PiB7XG4gIGNvbnN0IGJhY2tNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3Blbk1vZGFsXCIpO1xuICBiYWNrTW9kYWwuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICBjb25zdCBtb2RhbFdpbmRvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxEaWFsb2dcIik7XG4gIG1vZGFsV2luZG93LnN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gIG1vZGFsV2luZG93LmNoaWxkTm9kZXNbM10uaW5uZXJUZXh0ID0gYFRyYXZlbCB0aW1lOiAke2dhbWVTdGF0ZS5zdG9wd2F0Y2gudG9TdHJpbmcoKX1gO1xuICBtb2RhbFdpbmRvdy5jaGlsZE5vZGVzWzVdLmlubmVyVGV4dCA9IGBOdW1iZXIgb2YgQ2xpY2tzOiAke2dhbWVTdGF0ZS5jb3VudENsaWNrc31gO1xufTtcbi8vXG5cbmV4cG9ydCB7XG4gIHJlbmRlckdhbWVTZXR0aW5ncyxcbiAgZ2VuZXRhdGVHYW1lRmllbGQsXG4gIHNob3dFbmRHYW1lV2luZG93LFxuICByZW5kZXJHYW1lTWVudSxcbiAgaGlkZGVuRW5kR2FtZVdpbmRvdyxcbiAgcmVuZGVyUmF0aW5nTWVudSxcbiAgY3JlYXRlU2VsZWN0b3IsXG59O1xuIiwiLyogZ2FtZSBzZXR0aW5ncyBhcmUgc3RvcmVkIGhlcmUgKi9cbi8qIFRoaXMgZmlsZSBtYXkgYmUgY29udmVydCB0byBqc29uIGlmIHlvdSBuZWVkIHRvIGNyZWF0ZSBzZXJ2ZXIgc2lkZSAqL1xuLy8gVE9ETzogcmV3cml0ZSB0aGlzIGNvZCB0byBPYmplY3QhISFcblxubGV0IGxldmVsT2ZEaWZmaWN1bHR5ID0gXCJFYXN5XCI7XG5sZXQgY2FyZFNldCA9IFwiQ2F0c1wiO1xuXG5jb25zdCBnZXRGaWVsZFNpemUgPSAoKSA9PiB7XG4gIHN3aXRjaCAobGV2ZWxPZkRpZmZpY3VsdHkpIHtcbiAgICBjYXNlIFwiRWFzeVwiOlxuICAgICAgcmV0dXJuIDEyO1xuICAgIGNhc2UgXCJNZWRpdW1cIjpcbiAgICAgIHJldHVybiAxODtcbiAgICBjYXNlIFwiSGFyZFwiOlxuICAgICAgcmV0dXJuIDI0O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gMTI7XG4gIH1cbn07XG5cbmNvbnN0IGdldENhcmRTZXROYW1lID0gKCkgPT4ge1xuICByZXR1cm4gY2FyZFNldDtcbn07XG5cbmNvbnN0IHNldENhcmRTZXQgPSAodmFsdWUpID0+IHtcbiAgY2FyZFNldCA9IHZhbHVlO1xufTtcblxuY29uc3Qgc2V0TGV2ZWwgPSAodmFsdWUpID0+IHtcbiAgbGV2ZWxPZkRpZmZpY3VsdHkgPSB2YWx1ZTtcbn07XG5cbmV4cG9ydCB7XG4gIGdldENhcmRTZXROYW1lLFxuICBnZXRGaWVsZFNpemUsXG4gIHNldExldmVsLFxuICBzZXRDYXJkU2V0LFxuICBsZXZlbE9mRGlmZmljdWx0eSxcbn07XG4iLCJpbXBvcnQgeyBSZW5kZXJpbmdTdG9wd2F0Y2ggfSBmcm9tIFwiLi4vYWxnb3JpdGhtcy9zdG9wd2F0Y2guanNcIjtcbmltcG9ydCB7IGdldEZpZWxkU2l6ZSwgbGV2ZWxPZkRpZmZpY3VsdHkgfSBmcm9tIFwiLi9nYW1lU2V0dGluZ3MuanNcIjtcblxuY29uc3QgZ2FtZVN0YXRlID0ge1xuICB0b3RhbENvdW50VXBDYXJkczogMCxcbiAgY291bnRDbGlja3M6IDAsXG4gIHN0b3B3YXRjaDogbmV3IFJlbmRlcmluZ1N0b3B3YXRjaChcInN0b3B3YXRjaFwiKSxcbiAgcmVzZXQoKSB7XG4gICAgdGhpcy50b3RhbENvdW50VXBDYXJkcyA9IDA7XG4gICAgdGhpcy5jb3VudENsaWNrcyA9IDA7XG4gICAgdGhpcy5zdG9wd2F0Y2gucmVzZXQoKTtcbiAgfSxcbn07XG5cbmNvbnN0IE1BWF9USU1FID0gNjAwO1xuY29uc3QgY2FsY0dhbWVQb2ludHMgPSAoKSA9PiB7XG4gIGNvbnN0IGNvdW50Q2xpY2tzID0gZ2FtZVN0YXRlLmNvdW50Q2xpY2tzO1xuICBjb25zdCBzcGVuZFRpbWUgPSBnYW1lU3RhdGUuc3RvcHdhdGNoLmdldFNlY29uZDtcbiAgaWYgKHNwZW5kVGltZSA8IE1BWF9USU1FKSB7XG4gICAgcmV0dXJuIE1hdGgudHJ1bmMoKChNQVhfVElNRSAtIHNwZW5kVGltZSkgLyBjb3VudENsaWNrcykgKiBnZXRGaWVsZFNpemUoKSk7XG4gIH1cbiAgcmV0dXJuIDEwMDtcbn07XG5cbmNvbnN0IGFkZE5ld1JlY29yZCA9IChvYmosIHBsYXllck5hbWUsIG5ld1BsYXllclBvaW50cykgPT4ge1xuICBsZXQgaGFzTmFtZSA9IGZhbHNlO1xuICBvYmouZm9yRWFjaCgoZWwsIGluZCkgPT4ge1xuICAgIGlmIChlbC5uYW1lID09PSBwbGF5ZXJOYW1lKSB7XG4gICAgICBpZiAoZWwucG9pbnRzIDwgbmV3UGxheWVyUG9pbnRzKSB7XG4gICAgICAgIGVsLnBvaW50cyA9IG5ld1BsYXllclBvaW50cztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhhc05hbWUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoaW5kID09PSBvYmoubGVuZ3RoIC0gMSAmJiAhaGFzTmFtZSkge1xuICAgICAgb2JqLnB1c2goeyBuYW1lOiBwbGF5ZXJOYW1lLCBwb2ludHM6IG5ld1BsYXllclBvaW50cyB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb2JqO1xufTtcblxuY29uc3QgY2hlY2tSYXRpbmcgPSAocmF0aW5nKSA9PiB7XG4gIHJhdGluZy5zb3J0KChhLCBiKSA9PiB7XG4gICAgcmV0dXJuIGIucG9pbnRzIC0gYS5wb2ludHM7XG4gIH0pO1xuICBpZiAocmF0aW5nLmxlbmd0aCA+IDEwKSByYXRpbmcucG9wKCk7XG4gIHJldHVybiByYXRpbmc7XG59O1xuXG5jb25zdCBzYXZlR2FtZVJlc3VsdCA9ICgpID0+IHtcbiAgY29uc3QgcGxheWVyTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmljay1uYW1lXCIpLnZhbHVlO1xuICBjb25zdCBwbGF5ZXJQb2ludHMgPSBjYWxjR2FtZVBvaW50cygpO1xuXG4gIGxldCByYXRpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsZXZlbE9mRGlmZmljdWx0eSk7XG4gIGlmIChyYXRpbmcgIT09IG51bGwpIHtcbiAgICBjb25zb2xlLmxvZyhcIlllc1wiKTtcbiAgICByYXRpbmcgPSBhZGROZXdSZWNvcmQoSlNPTi5wYXJzZShyYXRpbmcpLCBwbGF5ZXJOYW1lLCBwbGF5ZXJQb2ludHMpO1xuICAgIHJhdGluZyA9IGNoZWNrUmF0aW5nKHJhdGluZyk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coXCJOb1wiKTtcbiAgICByYXRpbmcgPSBbeyBuYW1lOiBwbGF5ZXJOYW1lLCBwb2ludHM6IHBsYXllclBvaW50cyB9XTtcbiAgfVxuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxldmVsT2ZEaWZmaWN1bHR5LCBKU09OLnN0cmluZ2lmeShyYXRpbmcpKTtcbn07XG5cbi8vIGRlcHJlY2F0ZWRcbmNvbnN0IGdldEdhbWVSZXN1bHRzID0gKCkgPT4ge1xuICBjb25zdCBnYW1lUmF0aW5nID0gW2xvY2FsU3RvcmFnZS5sZW5ndGhdO1xuICBmb3IgKGxldCBrZXkgaW4gbG9jYWxTdG9yYWdlKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGtleSAhPT0gMCkge1xuICAgICAgZ2FtZVJhdGluZy5wdXNoKFtrZXksIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSldKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGdhbWVSYXRpbmc7XG59O1xuXG5leHBvcnQgeyBnYW1lU3RhdGUsIHNhdmVHYW1lUmVzdWx0LCBnZXRHYW1lUmVzdWx0cyB9O1xuIiwiaW1wb3J0IHsgZ2V0SnNvbkZyb21VcmwgfSBmcm9tIFwiLi4vYWxnb3JpdGhtcy9yZXF1ZXN0cy5qc1wiO1xuLy8gVE9ETyBHQU1FX0RBVEFfVVJMINC40YHQv9C+0LvRjNC30YPQtdGC0YHRjyDQsiDQvdC10YHQutC+0LvRjNC90LjQutC40YUg0LzQtdGB0YLQsNGFLCDQtdGB0YLRjCDRgdC80YvRgdC7INGB0L7Qt9C00LDRgtGMINGE0LDQudC7INGBXG4vLyDQv9C10YDQtdC80LXQvdC90YvQvNC4IFwi0YHRgNC10LTRiyDQvtC60YDRg9C20LXQvdC40Y9cIlxuY29uc3QgR0FNRV9EQVRBX1VSTCA9IFwiL2Rpc3QvZGF0YS9nYW1lRGF0YS5qc29uXCI7XG5cbmNvbnN0IGdhdENhcmRzTmFtZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGdhbWVEYXRhUmVzcG9uc2UgPSBhd2FpdCBnZXRKc29uRnJvbVVybChHQU1FX0RBVEFfVVJMKTtcbiAgbGV0IGNhcmRTZXRzID0gW107XG4gIGZvciAobGV0IGtleSBpbiBnYW1lRGF0YVJlc3BvbnNlKSB7XG4gICAgY2FyZFNldHMucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiBjYXJkU2V0cztcbn07XG5cbmV4cG9ydCB7IGdhdENhcmRzTmFtZXMgfTtcbiIsImltcG9ydCB7IGdldENhcmRTZXROYW1lLCBnZXRGaWVsZFNpemUgfSBmcm9tIFwiLi9nYW1lU2V0dGluZ3MuanNcIjtcbmltcG9ydCB7IHJhbmRvbUludGVnZXIgfSBmcm9tIFwiLi4vYWxnb3JpdGhtcy9udW1lcmljLmpzXCI7XG5pbXBvcnQgeyBnZXRKc29uRnJvbVVybCB9IGZyb20gXCIuLi9hbGdvcml0aG1zL3JlcXVlc3RzLmpzXCI7XG5pbXBvcnQgeyBnYW1lU3RhdGUgfSBmcm9tIFwiLi4vZW5naW5lL2dhbWVTdGF0aXN0aWNzLmpzXCI7XG5pbXBvcnQgeyBnZW5ldGF0ZUdhbWVGaWVsZCB9IGZyb20gXCIuL2dhbWVMYXlvdXQuanNcIjtcbmltcG9ydCB7IHBsYXlTb3VuZCB9IGZyb20gXCIuLi9hbGdvcml0aG1zL3NvdW5kcy5qc1wiO1xuXG5jb25zdCBHQU1FX0RBVEFfVVJMID0gXCIvZGlzdC9kYXRhL2dhbWVEYXRhLmpzb25cIjtcblxuLy8gSXQncyBmdW5jdGlvbnMgbmVlZCBmb3IgZm9ybWVkIGdhbWUgbWFwXG4vLyB0aGlzIGZ1bmN0aW9uIGdldCBKc29uIGZyb20gc2VydmVyIGFuZCBmb3JtZWQgbWFwIGFuc3dlciB3aXRoIGNhcmRzIGxpbmtzXG5jb25zdCBnZXRDYXJkcyA9IGFzeW5jIChmaWVsZFNpemUsIGNhcmRTZXROYW1lKSA9PiB7XG4gIGNvbnN0IGdhbWVEYXRhUmVzcG9uc2UgPSBhd2FpdCBnZXRKc29uRnJvbVVybChHQU1FX0RBVEFfVVJMKTtcbiAgY29uc3QgcGljdHVyZVN0b3JlID0gbmV3IE1hcCgpO1xuICAvLyDQlNCw0L3QvdGL0Lkgc2V0INC90YPQttC10L0g0LTQu9GPINC90LXQtNC+0L/Rg9GB0LrQsCDQtNC+0LHQsNCy0LvQtdC90LjRjyDQv9C+0LLRgtC+0YDRj9GO0YnQuNGF0YHRjyDQttC7INCyIG1hcFxuICBsZXQgaGFzRWwgPSBuZXcgU2V0KCk7XG4gIGxldCBpbmRleCA9IDA7XG4gIHdoaWxlIChwaWN0dXJlU3RvcmUuc2l6ZSA8IGZpZWxkU2l6ZSAvIDIpIHtcbiAgICBjb25zdCBpZCA9IHJhbmRvbUludGVnZXIoMCwgMTQpO1xuICAgIGNvbnN0IGxpbmsgPSBnYW1lRGF0YVJlc3BvbnNlW2NhcmRTZXROYW1lXVtpZF1bXCJsaW5rXCJdO1xuICAgIGlmICghaGFzRWwuaGFzKGlkKSkge1xuICAgICAgaGFzRWwuYWRkKGlkKTtcbiAgICAgIHBpY3R1cmVTdG9yZS5zZXQoaW5kZXgsIGxpbmspO1xuICAgICAgaW5kZXgrKztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGljdHVyZVN0b3JlO1xufTtcblxuY29uc3QgZ2VuZXJhdGVDYXJkUG9zaXRpb24gPSAoZmllbGRTaXplKSA9PiB7XG4gIGxldCBjYXJkU2V0ID0gbmV3IFNldCgpO1xuICBsZXQgcG9zQXJyYXkgPSBbXTtcbiAgbGV0IGluZGV4ID0gMDtcblxuICB3aGlsZSAoY2FyZFNldC5zaXplIDwgZmllbGRTaXplKSB7XG4gICAgbGV0IGNvdW50VW5pcUVsID0gMDtcbiAgICAvLyBHZW5lcmF0ZSB0d28gdW5pcSBwb3MgZm9yIGVxdWFsIGNhcmRzXG4gICAgd2hpbGUgKGNvdW50VW5pcUVsIDwgMikge1xuICAgICAgY29uc3QgcG9zID0gcmFuZG9tSW50ZWdlcigwLCBmaWVsZFNpemUgLSAxKTtcbiAgICAgIGlmICghY2FyZFNldC5oYXMocG9zKSkge1xuICAgICAgICBjYXJkU2V0LmFkZChwb3MpO1xuICAgICAgICBwb3NBcnJheVtwb3NdID0gaW5kZXg7XG4gICAgICAgIGNvdW50VW5pcUVsKys7XG4gICAgICB9XG4gICAgfVxuICAgIGluZGV4Kys7XG4gIH1cbiAgY29uc29sZS5sb2cocG9zQXJyYXkpO1xuICByZXR1cm4gcG9zQXJyYXk7XG59O1xuXG5jb25zdCByZW5kZXJCYWNrU2lkZSA9IChwb3NBcnJheSwgY2FyZHNNYXApID0+IHtcbiAgY29uc29sZS5sb2coY2FyZHNNYXApO1xuICBjb25zdCBkb2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtZmllbGRcIik7XG4gIGxldCBpbmRleCA9IDA7XG4gIGZvciAobGV0IG5vZGUgb2YgZG9jLmNoaWxkcmVuKSB7XG4gICAgaWYgKG5vZGUudGFnTmFtZSAhPT0gXCJTUEFOXCIpIHtcbiAgICAgIGxldCBudW1PZkNhcmQgPSBwb3NBcnJheVtpbmRleF07XG4gICAgICBsZXQgbGluayA9IGNhcmRzTWFwLmdldChudW1PZkNhcmQpO1xuICAgICAgbm9kZS5jaGlsZHJlblsxXS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7bGlua30pYDtcbiAgICAgIG5vZGUuY2hpbGRyZW5bMV0uc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcIjEwMCVcIjtcbiAgICAgIGluZGV4Kys7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBjcmVhdGVHYW1lTWF0cml4ID0gYXN5bmMgKGZpZWxkU2l6ZSwgY2FyZFNldE5hbWUpID0+IHtcbiAgY29uc3QgcGljdHVyZVN0b3JlID0gYXdhaXQgZ2V0Q2FyZHMoZmllbGRTaXplLCBjYXJkU2V0TmFtZSk7XG4gIGNvbnN0IHBvc0FycmF5ID0gZ2VuZXJhdGVDYXJkUG9zaXRpb24oZmllbGRTaXplLCBwaWN0dXJlU3RvcmUpO1xuICByZW5kZXJCYWNrU2lkZShwb3NBcnJheSwgcGljdHVyZVN0b3JlKTtcbn07XG4vL1xuXG5jb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XG4gIHBsYXlTb3VuZChcImRpc3Qvc291bmQvY2FyZHNMYXlvdXQubXAzXCIpO1xuICBjb25zdCBmaWVsZFNpemUgPSBnZXRGaWVsZFNpemUoKTtcbiAgY29uc3QgY2FyZFNldE5hbWUgPSBnZXRDYXJkU2V0TmFtZSgpO1xuICBnZW5ldGF0ZUdhbWVGaWVsZChmaWVsZFNpemUpO1xuICBjcmVhdGVHYW1lTWF0cml4KGZpZWxkU2l6ZSwgY2FyZFNldE5hbWUpO1xuICBnYW1lU3RhdGUuc3RvcHdhdGNoLnN0YXJ0KCk7XG59O1xuXG5leHBvcnQgeyBzdGFydEdhbWUgfTtcbiIsImltcG9ydCB7XG4gIHJlbmRlckdhbWVTZXR0aW5ncyxcbiAgcmVuZGVyR2FtZU1lbnUsXG4gIGhpZGRlbkVuZEdhbWVXaW5kb3csXG4gIHJlbmRlclJhdGluZ01lbnUsXG59IGZyb20gXCIuLi9lbmdpbmUvZ2FtZUxheW91dC5qc1wiO1xuaW1wb3J0IHsgc3RhcnRHYW1lIH0gZnJvbSBcIi4uL2VuZ2luZS9uZXdHYW1lLmpzXCI7XG5pbXBvcnQgeyBnYW1lU3RhdGUsIHNhdmVHYW1lUmVzdWx0IH0gZnJvbSBcIi4uL2VuZ2luZS9nYW1lU3RhdGlzdGljcy5qc1wiO1xuaW1wb3J0IHsgcGxheVNvdW5kIH0gZnJvbSBcIi4uL2FsZ29yaXRobXMvc291bmRzLmpzXCI7XG5cbi8vIFRoaXMgYnRuIHJlbW92ZWQgZ2FtZS1tZW51IGFuZCB1cGxvYWRlZCBnYW1lLWZpZWxkIHdpY2ggY2FyZHNcbmNvbnN0IG5ld0dhbWUgPSAoKSA9PiB7XG4gIHBsYXlTb3VuZChcImRpc3Qvc291bmQvYnV0dG9uQ2xpY2subXAzXCIpO1xuICBzdGFydEdhbWUoKTtcbn07XG5cbmNvbnN0IG9wZW5TZXR0aW5ncyA9ICgpID0+IHtcbiAgcGxheVNvdW5kKFwiZGlzdC9zb3VuZC9idXR0b25DbGljay5tcDNcIik7XG4gIHJlbmRlckdhbWVTZXR0aW5ncygpO1xufTtcblxuY29uc3Qgb3BlblJhdGluZyA9ICgpID0+IHtcbiAgcGxheVNvdW5kKFwiZGlzdC9zb3VuZC9idXR0b25DbGljay5tcDNcIik7XG4gIHJlbmRlclJhdGluZ01lbnUoKTtcbn07XG5cbmNvbnN0IGVuZEdhbWUgPSAoKSA9PiB7XG4gIHBsYXlTb3VuZChcImRpc3Qvc291bmQvYnV0dG9uQ2xpY2subXAzXCIpO1xuICBzYXZlR2FtZVJlc3VsdCgpO1xuICBnYW1lU3RhdGUucmVzZXQoKTtcbiAgaGlkZGVuRW5kR2FtZVdpbmRvdygpO1xuICBzZXRUaW1lb3V0KHJlbmRlckdhbWVNZW51LCAzMDAsIFwiZ2FtZS1maWVsZFwiKTtcbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IHsgbmV3R2FtZSwgb3BlblJhdGluZywgb3BlblNldHRpbmdzLCBlbmRHYW1lIH07XG4iLCJpbXBvcnQgeyBnZXRGaWVsZFNpemUgfSBmcm9tIFwiLi4vZW5naW5lL2dhbWVTZXR0aW5ncy5qc1wiO1xuaW1wb3J0IHsgZ2FtZVN0YXRlIH0gZnJvbSBcIi4uL2VuZ2luZS9nYW1lU3RhdGlzdGljcy5qc1wiO1xuaW1wb3J0IHsgc2hvd0VuZEdhbWVXaW5kb3cgfSBmcm9tIFwiLi4vZW5naW5lL2dhbWVMYXlvdXQuanNcIjtcbmltcG9ydCB7IHBsYXlTb3VuZCB9IGZyb20gXCIuLi9hbGdvcml0aG1zL3NvdW5kcy5qc1wiO1xuXG5jb25zdCBjbGlja0NvdW50ZXIgPSAoY291bnQpID0+IHtcbiAgY29uc3QgY2xpY2tCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdW50Q2xpY2tcIik7XG4gIGNsaWNrQmFyLmlubmVySFRNTCA9IGA8Yj5OdW1iZXIgb2YgY2xpY2tzOjwvYj4gJHtjb3VudH1gO1xufTtcblxuY29uc3QgY2hlY2tDYXJkc01hdGNoZXMgPSAoKSA9PiB7XG4gIGNvbnN0IGludmVydGVk0KFhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2FjdGl2YXRlZD1cInRydWVcIl1gKTtcbiAgLy8gSW4gdGhpcyB2ZXJzaW9uIGNvbXBhcmlzb24gaXMgcGVyZm9ybWVkIGZvciB1cmwgdG8gYmFja3JvdW5kLWltYWdlXG4gIC8vIFRoaXMgc29sdXRpb24gY2FuIGJlIHJlcGxhY2VkIGJ5IGNvbXBhcmlzb24gYnkgaWRcbiAgY29uc3QgY2FyZDFCYWNrID0gaW52ZXJ0ZWTQoWFyZHNbMF0ubGFzdENoaWxkO1xuICBjb25zdCBjYXJkMkJhY2sgPSBpbnZlcnRlZNChYXJkc1sxXS5sYXN0Q2hpbGQ7XG4gIGlmIChjYXJkMUJhY2suc3R5bGUuYmFja2dyb3VuZEltYWdlID09PSBjYXJkMkJhY2suc3R5bGUuYmFja2dyb3VuZEltYWdlKSB7XG4gICAgaW52ZXJ0ZWTQoWFyZHNbMF0uc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XG4gICAgaW52ZXJ0ZWTQoWFyZHNbMV0uc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XG4gICAgZ2FtZVN0YXRlLnRvdGFsQ291bnRVcENhcmRzICs9IDI7XG4gICAgaW52ZXJ0ZWTQoWFyZHNbMF0uc2V0QXR0cmlidXRlKFwiYWN0aXZhdGVkXCIsIGZhbHNlKTtcbiAgICBpbnZlcnRlZNChYXJkc1sxXS5zZXRBdHRyaWJ1dGUoXCJhY3RpdmF0ZWRcIiwgZmFsc2UpO1xuICAgIHNldFRpbWVvdXQoY2hlY2tFbmRHYW1lLCAxMDAwKTtcbiAgfSBlbHNlIHtcbiAgICByb2xsRGlzYWJsZWQoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGludmVydGVk0KFhcmRzWzBdLnNldEF0dHJpYnV0ZShcImFjdGl2YXRlZFwiLCBmYWxzZSk7XG4gICAgICBpbnZlcnRlZNChYXJkc1sxXS5zZXRBdHRyaWJ1dGUoXCJhY3RpdmF0ZWRcIiwgZmFsc2UpO1xuICAgIH0sIDE1MDApO1xuICAgIHNldFRpbWVvdXQocm9sbEVuYWJsZWQsIDIwMDApO1xuICB9XG59O1xuXG5jb25zdCByb2xsRGlzYWJsZWQgPSAoKSA9PiB7XG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXJkXCIpO1xuICBjYXJkcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5vbmNsaWNrID0gbnVsbDtcbiAgfSk7XG59O1xuXG5jb25zdCByb2xsRW5hYmxlZCA9ICgpID0+IHtcbiAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRcIik7XG4gIGNhcmRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByb2xsQ2FyZChpdGVtKTtcbiAgICB9O1xuICB9KTtcbn07XG5cbmNvbnN0IGNoZWNrRW5kR2FtZSA9ICgpID0+IHtcbiAgaWYgKGdldEZpZWxkU2l6ZSgpID09IGdhbWVTdGF0ZS50b3RhbENvdW50VXBDYXJkcykge1xuICAgIHBsYXlTb3VuZChcImRpc3Qvc291bmQvZW5kR2FtZS5tcDNcIik7XG4gICAgZ2FtZVN0YXRlLnN0b3B3YXRjaC5zdG9wKCk7XG4gICAgc2hvd0VuZEdhbWVXaW5kb3coKTtcbiAgfVxufTtcblxubGV0IGNvdW50VXBDYXJkcyA9IDA7XG5jb25zdCByb2xsQ2FyZCA9IChkaXYpID0+IHtcbiAgLy8gdGhpcyBjb2RlIHdvcmsgb25seSB3aXRoIG5vbiBzZWxlY3RlZCBhbmQgbm90IGFjdGl2YXRlZCBmdW5jdGlvbnNcbiAgaWYgKFxuICAgICFkaXYuaGFzQXR0cmlidXRlKFwic2VsZWN0ZWRcIikgJiZcbiAgICBkaXYuZ2V0QXR0cmlidXRlKFwiYWN0aXZhdGVkXCIpID09PSBcImZhbHNlXCJcbiAgKSB7XG4gICAgcGxheVNvdW5kKFwiZGlzdC9zb3VuZC91cENhcmQubXAzXCIpO1xuICAgIGdhbWVTdGF0ZS5jb3VudENsaWNrcyArPSAxO1xuICAgIGNsaWNrQ291bnRlcihnYW1lU3RhdGUuY291bnRDbGlja3MpO1xuICAgIGNvbnNvbGUubG9nKGdhbWVTdGF0ZSk7XG5cbiAgICBpZiAoY291bnRVcENhcmRzIDwgMikge1xuICAgICAgZGl2LnNldEF0dHJpYnV0ZShcImFjdGl2YXRlZFwiLCB0cnVlKTtcbiAgICAgIGNvdW50VXBDYXJkcysrO1xuICAgIH1cblxuICAgIGlmIChjb3VudFVwQ2FyZHMgPT0gMikge1xuICAgICAgY291bnRVcENhcmRzID0gMDtcbiAgICAgIGNoZWNrQ2FyZHNNYXRjaGVzKCk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgeyByb2xsQ2FyZCB9O1xuIiwiaW1wb3J0IHsgc2V0TGV2ZWwsIHNldENhcmRTZXQgfSBmcm9tIFwiLi4vZW5naW5lL2dhbWVTZXR0aW5ncy5qc1wiO1xuXG5jb25zdCBzZWxEaWZMdmwgPSAodmFsdWUpID0+IHtcbiAgc2V0TGV2ZWwodmFsdWUpO1xufTtcblxuY29uc3Qgc2VsZWN0U2FyZFNldCA9ICh2YWx1ZSkgPT4ge1xuICBzZXRDYXJkU2V0KHZhbHVlKTtcbn07XG5cbmV4cG9ydCB7IHNlbERpZkx2bCwgc2VsZWN0U2FyZFNldCB9O1xuIiwiaW1wb3J0IHtcbiAgbmV3R2FtZSxcbiAgb3BlblJhdGluZyxcbiAgb3BlblNldHRpbmdzLFxuICBlbmRHYW1lLFxufSBmcm9tIFwiLi9ldmVudHMvYnV0dG9ucy1jbGlja3MuanNcIjtcbmltcG9ydCBcInJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qc1wiO1xuaW1wb3J0IHsgc2hvd0VuZEdhbWVXaW5kb3cgfSBmcm9tIFwiLi9lbmdpbmUvZ2FtZUxheW91dC5qc1wiO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICBjb25zdCBuZXdHYW1lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctZ2FtZS1idG5cIik7XG4gIGNvbnN0IHJhdGluZ0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmF0aW5nLWJ0blwiKTtcbiAgY29uc3Qgb3B0aW9uc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3B0aW9ucy1idG5cIik7XG4gIGNvbnN0IGVuZEdhbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsRGlhbG9nXCIpO1xuICBuZXdHYW1lQnRuLm9uY2xpY2sgPSBuZXdHYW1lO1xuICByYXRpbmdCdG4ub25jbGljayA9IG9wZW5SYXRpbmc7XG4gIG9wdGlvbnNCdG4ub25jbGljayA9IG9wZW5TZXR0aW5ncztcbiAgZW5kR2FtZUJ0bi5vbnN1Ym1pdCA9IGVuZEdhbWU7XG4gIC8vc2hvd0VuZEdhbWVXaW5kb3coKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9
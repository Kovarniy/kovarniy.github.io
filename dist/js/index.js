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
  div.innerHTML = "<div id=\"radio-btns\">\n                      <input type=\"radio\" class=\"radio\" id=\"Easy\" name=\"level\" value=\"Easy\" checked>\n                      <label for=\"Easy\">Easy</label><br>\n                      <input type=\"radio\" class=\"radio\" id=\"Medium\" name=\"level\" value=\"Medium\">\n                      <label for=\"Medium\">Medium</label><br>\n                      <input type=\"radio\" class=\"radio\" id=\"Hard\" name=\"level\" value=\"Hard\">\n                      <label for=\"other\">Hard</label>\n                   </div>\n                   <div id=\"rating\"></div>\n                   <div id=\"btn-div\"></div>";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc3VwZXJQcm9wQmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FsZ29yaXRobXMvbnVtZXJpYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWxnb3JpdGhtcy9yZXF1ZXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWxnb3JpdGhtcy9zb3VuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FsZ29yaXRobXMvc3RvcHdhdGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZUxheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dhbWVTZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dhbWVTdGF0aXN0aWNzLmpzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2V0RGF0YUZyb21EQi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL25ld0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9idXR0b25zLWNsaWNrcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL2NyYWRzLWV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL3NldHRuaWdzLWV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsicmFuZG9tSW50ZWdlciIsIm1pbiIsIm1heCIsInJhbmQiLCJNYXRoIiwicmFuZG9tIiwiZmxvb3IiLCJnZXRKc29uRnJvbVVybCIsInVybCIsImZldGNoIiwidGhlbiIsInJlc3BvbmNlIiwianNvbiIsImFkZFNvdW5kVG9FbCIsInNlbGVjdG9yIiwicGF0aFRvU291bmQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsIiwib25jbGljayIsInBsYXlTb3VuZCIsImF1ZGlvIiwiQXVkaW8iLCJzcmMiLCJhdXRvcGxheSIsIlN0b3B3YXRjaCIsInNlYyIsImhvdXIiLCJvYmoiLCJtc2luIiwidGltZXJJZCIsInNldEludGVydmFsIiwidGljayIsImNsZWFySW50ZXJ2YWwiLCJzSG91ciIsInRpbWVTdHJpbmciLCJzTWluIiwic1NlYyIsIlJlbmRlcmluZ1N0b3B3YXRjaCIsImVsSWQiLCJ0aW1lRWwiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsInRvU3RyaW5nIiwiY3JlYXRlU2VsZWN0b3IiLCJpbkVsIiwic2VsZWN0b3JMaXN0bmVyIiwicGFyYW1ldHJzQXJyYXkiLCJhY3RpdkVsIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImluVGV4dCIsIm9uY2hhbmdlIiwidmFsdWUiLCJhcHBlbmQiLCJjcmVhdGVCYWNrQnRuIiwiY29udGV4dCIsImJ1dHRvbiIsInJlbmRlckdhbWVNZW51IiwiaW5uZXJUZXh0Iiwic2V0QXR0cmlidXRlIiwicmVtb3ZlRmllbGQiLCJlbGVtZWludElkIiwicmVtb3ZlZEFjdGl2aXR5IiwicmVtb3ZlIiwicmVuZGVyR2FtZVNldHRpbmdzIiwid29ya1NwYWNlIiwic2V0dGluZ3NNZW51IiwiZ2F0Q2FyZHNOYW1lcyIsImNhcmRTZXRzIiwic2VsRGlmTHZsIiwibGV2ZWxPZkRpZmZpY3VsdHkiLCJzZWxlY3RTYXJkU2V0IiwiZ2V0Q2FyZFNldE5hbWUiLCJhZGRJbmZvQmFyIiwiZG9jIiwiZ2FtZUZpZWxkIiwiYWRkQ2FyZHNPbkZpZWxkIiwiZmllbGRTaXplIiwiaSIsImRpdiIsImdldEZpZWxkU2l6ZSIsInJvbGxDYXJkIiwiZ2VuZXRhdGVHYW1lRmllbGQiLCJvbGRBY3Rpdml0eSIsImFkZEdhbWVNZW51TGlzdG5lciIsIm5ld0dhbWVCdG4iLCJyYXRpbmdCdG4iLCJvcHRpb25zQnRuIiwibmV3R2FtZSIsIm9wZW5SYXRpbmciLCJvcGVuU2V0dGluZ3MiLCJyZW5kZXJSYXRpbmciLCJkb21FbCIsImxldmVsIiwiZ2FtZVJlc3VsdHMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwicGxheWVySW5mbyIsIm5hbWUiLCJwb2ludHMiLCJwcmVwZW5kIiwicmFkaW9SYXRpbmdJbml0IiwibHZscyIsImFmdGVyIiwicmVuZGVyUmF0aW5nTWVudSIsInJhdGluZ01lbnUiLCJoaWRkZW5FbmRHYW1lV2luZG93IiwibW9kYWxXaW5kb3ciLCJzdHlsZSIsInRvcCIsInNldFRpbWVvdXQiLCJiYWNrTW9kYWwiLCJ2aXNpYmlsaXR5Iiwic2hvd0VuZEdhbWVXaW5kb3ciLCJjaGlsZE5vZGVzIiwiZ2FtZVN0YXRlIiwic3RvcHdhdGNoIiwiY291bnRDbGlja3MiLCJjYXJkU2V0Iiwic2V0Q2FyZFNldCIsInNldExldmVsIiwidG90YWxDb3VudFVwQ2FyZHMiLCJyZXNldCIsIk1BWF9USU1FIiwiY2FsY0dhbWVQb2ludHMiLCJzcGVuZFRpbWUiLCJnZXRTZWNvbmQiLCJ0cnVuYyIsImFkZE5ld1JlY29yZCIsInBsYXllck5hbWUiLCJuZXdQbGF5ZXJQb2ludHMiLCJoYXNOYW1lIiwiaW5kIiwibGVuZ3RoIiwicHVzaCIsImNoZWNrUmF0aW5nIiwicmF0aW5nIiwic29ydCIsImEiLCJiIiwicG9wIiwic2F2ZUdhbWVSZXN1bHQiLCJwbGF5ZXJQb2ludHMiLCJjb25zb2xlIiwibG9nIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImdldEdhbWVSZXN1bHRzIiwiZ2FtZVJhdGluZyIsImtleSIsImhhc093blByb3BlcnR5IiwiR0FNRV9EQVRBX1VSTCIsImdhbWVEYXRhUmVzcG9uc2UiLCJnZXRDYXJkcyIsImNhcmRTZXROYW1lIiwicGljdHVyZVN0b3JlIiwiTWFwIiwiaGFzRWwiLCJTZXQiLCJpbmRleCIsInNpemUiLCJpZCIsImxpbmsiLCJoYXMiLCJzZXQiLCJnZW5lcmF0ZUNhcmRQb3NpdGlvbiIsInBvc0FycmF5IiwiY291bnRVbmlxRWwiLCJwb3MiLCJyZW5kZXJCYWNrU2lkZSIsImNhcmRzTWFwIiwiY2hpbGRyZW4iLCJub2RlIiwidGFnTmFtZSIsIm51bU9mQ2FyZCIsImdldCIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiY3JlYXRlR2FtZU1hdHJpeCIsInN0YXJ0R2FtZSIsInN0YXJ0IiwiZW5kR2FtZSIsImNsaWNrQ291bnRlciIsImNvdW50IiwiY2xpY2tCYXIiLCJjaGVja0NhcmRzTWF0Y2hlcyIsImludmVydGVk0KFhcmRzIiwiY2FyZDFCYWNrIiwibGFzdENoaWxkIiwiY2FyZDJCYWNrIiwiY2hlY2tFbmRHYW1lIiwicm9sbERpc2FibGVkIiwicm9sbEVuYWJsZWQiLCJjYXJkcyIsIml0ZW0iLCJzdG9wIiwiY291bnRVcENhcmRzIiwiaGFzQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwid2luZG93Iiwib25sb2FkIiwiZW5kR2FtZUJ0biIsIm9uc3VibWl0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFD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QVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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c0VBQXJCO0FBQ0FpSCxZQUFVLENBQUNDLFFBQVgsR0FBc0JyQixpRUFBdEIsQ0FSb0IsQ0FTcEI7QUFDRCxDQVZELEMiLCJmaWxlIjoianMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDsiLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsInZhciBzdXBlclByb3BCYXNlID0gcmVxdWlyZShcIi4vc3VwZXJQcm9wQmFzZVwiKTtcblxuZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBSZWZsZWN0LmdldDtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChyZWNlaXZlcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlciB8fCB0YXJnZXQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXQ7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mOyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3N1cGVyUHJvcEJhc2U7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwiLy8gVGhpcyBmaWxlIGluY2x1ZGVzIGFsZ29yaXRobXMgZm9yIG51bWVyaWMgb3BlcmF0aW9uc1xuXG5jb25zdCByYW5kb21JbnRlZ2VyID0gKG1pbiwgbWF4KSA9PiB7XG4gIGxldCByYW5kID0gbWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggKyAxIC0gbWluKTtcbiAgcmV0dXJuIE1hdGguZmxvb3IocmFuZCk7XG59O1xuXG5leHBvcnQgeyByYW5kb21JbnRlZ2VyIH07XG4iLCIvLyBUaGlzIGZpbGUgaW5jbHVkZXMgZnVuY3Rpb25zIGZvciByZXF1ZXN0cyB0byBzZXJ2ZXIgYW5kIGV0Y1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHJldHVybiBKc29uIGZyb20gdXJsXG5jb25zdCBnZXRKc29uRnJvbVVybCA9ICh1cmwpID0+IHtcbiAgcmV0dXJuIGZldGNoKHVybCkudGhlbigocmVzcG9uY2UpID0+IHtcbiAgICByZXR1cm4gcmVzcG9uY2UuanNvbigpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGdldEpzb25Gcm9tVXJsIH07XG4iLCJjb25zdCBhZGRTb3VuZFRvRWwgPSAoc2VsZWN0b3IsIHBhdGhUb1NvdW5kKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgZWxlbWVudC5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGVsLm9uY2xpY2sgPSBmdW5jdGlvbiAocGF0aFRvU291bmQpIHtcbiAgICAgIHBsYXlTb3VuZChwYXRoVG9Tb3VuZCk7XG4gICAgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBwbGF5U291bmQgPSAocGF0aFRvU291bmQpID0+IHtcbiAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oKTsgLy8g0KHQvtC30LTQsNGR0Lwg0L3QvtCy0YvQuSDRjdC70LXQvNC10L3RgiBBdWRpb1xuICBhdWRpby5zcmMgPSBgJHtwYXRoVG9Tb3VuZH1gOyAvLyDQo9C60LDQt9GL0LLQsNC10Lwg0L/Rg9GC0Ywg0Log0LfQstGD0LrRgyBcItC60LvQuNC60LBcIlxuICBhdWRpby5hdXRvcGxheSA9IHRydWU7IC8vINCQ0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4INC30LDQv9GD0YHQutCw0LXQvFxufTtcblxuZXhwb3J0IHsgYWRkU291bmRUb0VsLCBwbGF5U291bmQgfTtcbiIsImNsYXNzIFN0b3B3YXRjaCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2VjID0gdGhpcy5taW4gPSB0aGlzLmhvdXIgPSAwO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5zZWMgPSB0aGlzLm1pbiA9IHRoaXMuaG91ciA9IDA7XG4gIH1cblxuICB0aWNrKG9iaikge1xuICAgIG9iai5zZWMrKztcbiAgICBpZiAob2JqLnNlYyA9PT0gNjApIHtcbiAgICAgIG9iai5taW4gKz0gMTtcbiAgICAgIG9iai5zZWMgPSAwO1xuICAgIH1cbiAgICBpZiAob2JqLm1pbiA9PT0gNjApIHtcbiAgICAgIG9iai5ob3VyICs9IDE7XG4gICAgICBvYmoubWluID0gMDtcbiAgICB9XG4gICAgaWYgKG9iai5ob3VyID09PSAyNCkge1xuICAgICAgb2JqLmhvdXIgPSBvYmoubXNpbiA9IG9iai5zZWMgPSAwO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMudGltZXJJZCA9IHNldEludGVydmFsKHRoaXMudGljaywgMTAwMCwgdGhpcyk7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklkKTtcbiAgfVxuXG4gIGdldCBnZXRTZWNvbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VjICsgdGhpcy5taW4gKiA2MCArIHRoaXMuaG91ciAqIDM2MDA7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBsZXQgc0hvdXIgPSB0aGlzLmhvdXIgPCAxMCA/IGAwJHt0aGlzLmhvdXJ9YCA6IHRoaXMuaG91cjtcbiAgICBsZXQgdGltZVN0cmluZyA9IGAke3NIb3VyfTpgO1xuICAgIGxldCBzTWluID0gdGhpcy5taW4gPCAxMCA/IGAwJHt0aGlzLm1pbn1gIDogdGhpcy5taW47XG4gICAgdGltZVN0cmluZyArPSBgJHtzTWlufTpgO1xuICAgIGxldCBzU2VjID0gdGhpcy5zZWMgPCAxMCA/IGAwJHt0aGlzLnNlY31gIDogdGhpcy5zZWM7XG4gICAgdGltZVN0cmluZyArPSBgJHtzU2VjfWA7XG4gICAgcmV0dXJuIHRpbWVTdHJpbmc7XG4gIH1cbn1cblxuY2xhc3MgUmVuZGVyaW5nU3RvcHdhdGNoIGV4dGVuZHMgU3RvcHdhdGNoIHtcbiAgY29uc3RydWN0b3IoZWxJZCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5lbElkID0gZWxJZDtcbiAgfVxuXG4gIHRpY2sob2JqKSB7XG4gICAgc3VwZXIudGljayhvYmopO1xuICAgIGxldCB0aW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvYmouZWxJZCk7XG4gICAgdGltZUVsLmlubmVySFRNTCA9IFwiPGI+VGltZTo8L2I+IFwiICsgb2JqLnRvU3RyaW5nKCk7XG4gIH1cbn1cblxuZXhwb3J0IHsgU3RvcHdhdGNoLCBSZW5kZXJpbmdTdG9wd2F0Y2ggfTtcbiIsImltcG9ydCB7IHJvbGxDYXJkIH0gZnJvbSBcIi4uL2V2ZW50cy9jcmFkcy1ldmVudHMuanNcIjtcbmltcG9ydCB7IGdhbWVTdGF0ZSwgZ2V0R2FtZVJlc3VsdHMgfSBmcm9tIFwiLi9nYW1lU3RhdGlzdGljcy5qc1wiO1xuaW1wb3J0IHtcbiAgc2VsRGlmTHZsLFxuICBzZWxlY3RTYXJkU2V0LFxuICBzZXRSYXRlTHZsLFxufSBmcm9tIFwiLi4vZXZlbnRzL3NldHRuaWdzLWV2ZW50c1wiO1xuaW1wb3J0IHsgbmV3R2FtZSwgb3BlblJhdGluZywgb3BlblNldHRpbmdzIH0gZnJvbSBcIi4uL2V2ZW50cy9idXR0b25zLWNsaWNrcy5qc1wiO1xuaW1wb3J0IHtcbiAgZ2V0RmllbGRTaXplLFxuICBsZXZlbE9mRGlmZmljdWx0eSxcbiAgZ2V0Q2FyZFNldE5hbWUsXG59IGZyb20gXCIuL2dhbWVTZXR0aW5ncy5qc1wiO1xuaW1wb3J0IHsgcGxheVNvdW5kIH0gZnJvbSBcIi4uL2FsZ29yaXRobXMvc291bmRzLmpzXCI7XG5pbXBvcnQgeyBnYXRDYXJkc05hbWVzIH0gZnJvbSBcIi4vZ2V0RGF0YUZyb21EQi5qc1wiO1xuXG4vLyBjcmVhdGUgc2V0dGluZ3Mgc2VsZWN0b3JzIGFuZCBidXR0b25zXG5jb25zdCBjcmVhdGVTZWxlY3RvciA9IChpbkVsLCBzZWxlY3Rvckxpc3RuZXIsIHBhcmFtZXRyc0FycmF5LCBhY3RpdkVsKSA9PiB7XG4gIGNvbnN0IHNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgc2VsZWN0b3IuY2xhc3NMaXN0LmFkZChcInNldHRpbmdzU2VsZWN0b3JcIik7XG5cbiAgbGV0IGluVGV4dCA9IFwiXCI7XG4gIHNlbGVjdG9yLm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIHNlbGVjdG9yTGlzdG5lcihzZWxlY3Rvci52YWx1ZSk7XG4gIH07XG5cbiAgcGFyYW1ldHJzQXJyYXkuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBpZiAoYWN0aXZFbCA9PT0gZWwpXG4gICAgICBpblRleHQgKz0gYDxvcHRpb24gc2VsZWN0ZWQgdmFsdWU9XCIke2VsfVwiID4ke2VsfTwvb3B0aW9uPmA7XG4gICAgZWxzZSBpblRleHQgKz0gYDxvcHRpb24gdmFsdWU9XCIke2VsfVwiPiR7ZWx9PC9vcHRpb24+YDtcbiAgfSk7XG4gIHNlbGVjdG9yLmlubmVySFRNTCA9IGluVGV4dDtcblxuICBpbkVsLmFwcGVuZChzZWxlY3Rvcik7XG59O1xuXG5jb25zdCBjcmVhdGVCYWNrQnRuID0gKGNvbnRleHQpID0+IHtcbiAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIHBsYXlTb3VuZChcImRpc3Qvc291bmQvYnV0dG9uQ2xpY2subXAzXCIpO1xuICAgIHJlbmRlckdhbWVNZW51KFwiZ2FtZS1tZW51XCIpO1xuICB9O1xuICBidXR0b24uY2xhc3NMaXN0LmFkZChcIm1lbnUtYnRuXCIpO1xuICBidXR0b24uaW5uZXJUZXh0ID0gXCJCYWNrXCI7XG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJhY2stdG8tbWFpbi1tZW51LWJ0blwiKTtcbiAgY29udGV4dC5hcHBlbmQoYnV0dG9uKTtcbn07XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIGlucHV0IHBhcmFtZXRlciAtIGVsZW1ldCB3aGljaCBtdXN0IGJlIHJlbW92ZWRcbmNvbnN0IHJlbW92ZUZpZWxkID0gKGVsZW1laW50SWQpID0+IHtcbiAgY29uc3QgcmVtb3ZlZEFjdGl2aXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVpbnRJZCk7XG4gIHJlbW92ZWRBY3Rpdml0eS5yZW1vdmUoKTtcbn07XG5cbmNvbnN0IHJlbmRlckdhbWVTZXR0aW5ncyA9IGFzeW5jICgpID0+IHtcbiAgcmVtb3ZlRmllbGQoXCJnYW1lLW1lbnVcIik7XG4gIGNvbnN0IHdvcmtTcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29yay1zcGFjZVwiKTtcbiAgbGV0IHNldHRpbmdzTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNldHRpbmdzTWVudS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImdhbWUtbWVudVwiKTtcbiAgd29ya1NwYWNlLmFwcGVuZChzZXR0aW5nc01lbnUpO1xuXG4gIGNvbnN0IGNhcmRTZXRzID0gYXdhaXQgZ2F0Q2FyZHNOYW1lcygpO1xuICBjcmVhdGVTZWxlY3RvcihcbiAgICBzZXR0aW5nc01lbnUsXG4gICAgc2VsRGlmTHZsLFxuICAgIFtcIkVhc3lcIiwgXCJNZWRpdW1cIiwgXCJIYXJkXCJdLFxuICAgIGxldmVsT2ZEaWZmaWN1bHR5XG4gICk7XG5cbiAgY3JlYXRlU2VsZWN0b3Ioc2V0dGluZ3NNZW51LCBzZWxlY3RTYXJkU2V0LCBjYXJkU2V0cywgZ2V0Q2FyZFNldE5hbWUpO1xuICBjcmVhdGVCYWNrQnRuKHNldHRpbmdzTWVudSk7XG59O1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gZ2FtZSBmaWVsZFxuY29uc3QgYWRkSW5mb0JhciA9ICgpID0+IHtcbiAgY29uc3QgZG9jID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JrLXNwYWNlXCIpO1xuICBjb25zdCBnYW1lRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBnYW1lRmllbGQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJnYW1lLWZpZWxkXCIpO1xuICBnYW1lRmllbGQuaW5uZXJIVE1MID0gYDxzcGFuIGlkPVwiaW5mb0JhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwiY291bnRDbGlja1wiPjxiPk51bWJlciBvZiBjbGlja3M6PC9iPiAwPC9wPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cInN0b3B3YXRjaFwiPjxiPlRpbWU6PC9iPiAwMDowMDowMDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+YDtcbiAgZG9jLmFwcGVuZChnYW1lRmllbGQpO1xufTtcblxuY29uc3QgYWRkQ2FyZHNPbkZpZWxkID0gKGZpZWxkU2l6ZSkgPT4ge1xuICBjb25zdCBkb2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtZmllbGRcIik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZFNpemU7IGkrKykge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgIGlmIChnZXRGaWVsZFNpemUoKSA9PT0gMTIpIGRpdi5jbGFzc0xpc3QuYWRkKFwiZWFzeVwiKTtcbiAgICBpZiAoZ2V0RmllbGRTaXplKCkgPT09IDE4KSBkaXYuY2xhc3NMaXN0LmFkZChcIm1lZGl1bVwiKTtcbiAgICBpZiAoZ2V0RmllbGRTaXplKCkgPT09IDI0KSBkaXYuY2xhc3NMaXN0LmFkZChcImhhcmRcIik7XG5cbiAgICAvL0FsdGVybmF0aXZlIHNvbHV0aW9uIC0gdXNlIEV2ZW50IGRlbGVnYXRpb24gb24gd29yay1zcGFjZVxuICAgIGRpdi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgcm9sbENhcmQoZGl2KTtcbiAgICB9O1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJhY3RpdmF0ZWRcIiwgZmFsc2UpO1xuXG4gICAgZGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIGAke2l9LWNhcmRgKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJmcm9udC1jYXJkXCIgYWN0aXZhdGVkPVwiZmFsc2VcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmFjay1jYXJkXCI+PC9kaXY+YDtcbiAgICBkb2MuYXBwZW5kKGRpdik7XG4gIH1cbn07XG5cbmNvbnN0IGdlbmV0YXRlR2FtZUZpZWxkID0gKGZpZWxkU2l6ZSkgPT4ge1xuICByZW1vdmVGaWVsZChcImdhbWUtbWVudVwiKTtcbiAgYWRkSW5mb0JhcigpO1xuICBhZGRDYXJkc09uRmllbGQoZmllbGRTaXplKTtcbn07XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBHYW1lIG1lbnVcbmNvbnN0IHJlbmRlckdhbWVNZW51ID0gKG9sZEFjdGl2aXR5KSA9PiB7XG4gIHJlbW92ZUZpZWxkKGAke29sZEFjdGl2aXR5fWApO1xuICBjb25zdCBkb2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmstc3BhY2VcIik7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImdhbWUtbWVudVwiKTtcbiAgZGl2LmlubmVySFRNTCA9IGA8YnV0dG9uIGNsYXNzPVwibWVudS1idG5cIiBpZD1cIm5ldy1nYW1lLWJ0blwiPk5ldyBHYW1lPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1lbnUtYnRuXCIgaWQ9XCJyYXRpbmctYnRuXCI+UmF0aW5nPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1lbnUtYnRuXCIgaWQ9XCJvcHRpb25zLWJ0blwiPk9wdGlvbnM8L2J1dHRvbj5gO1xuICBkb2MuYXBwZW5kKGRpdik7XG4gIGFkZEdhbWVNZW51TGlzdG5lcigpO1xufTtcblxuY29uc3QgYWRkR2FtZU1lbnVMaXN0bmVyID0gKCkgPT4ge1xuICBjb25zdCBuZXdHYW1lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctZ2FtZS1idG5cIik7XG4gIGNvbnN0IHJhdGluZ0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmF0aW5nLWJ0blwiKTtcbiAgY29uc3Qgb3B0aW9uc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3B0aW9ucy1idG5cIik7XG4gIG5ld0dhbWVCdG4ub25jbGljayA9IG5ld0dhbWU7XG4gIHJhdGluZ0J0bi5vbmNsaWNrID0gb3BlblJhdGluZztcbiAgb3B0aW9uc0J0bi5vbmNsaWNrID0gb3BlblNldHRpbmdzO1xufTtcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIHJhdGluZ1xuY29uc3QgcmVuZGVyUmF0aW5nID0gKGRvbUVsLCBsZXZlbCkgPT4ge1xuICBsZXQgZ2FtZVJlc3VsdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsZXZlbCk7XG5cbiAgaWYgKGdhbWVSZXN1bHRzICE9PSBudWxsKSB7XG4gICAgZ2FtZVJlc3VsdHMgPSBKU09OLnBhcnNlKGdhbWVSZXN1bHRzKTtcbiAgICBnYW1lUmVzdWx0cy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgY29uc3QgcGxheWVySW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgcGxheWVySW5mby5pbm5lclRleHQgPSBgJHtlbC5uYW1lfSA6ICR7ZWwucG9pbnRzfWA7XG4gICAgICBkb21FbC5hcHBlbmQocGxheWVySW5mbyk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcGxheWVySW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBsYXllckluZm8uaW5uZXJUZXh0ID0gYFlvdSBjYW4gYmUgdGhlIGZpcnN0IWA7XG4gICAgZG9tRWwucHJlcGVuZChwbGF5ZXJJbmZvKTtcbiAgfVxufTtcblxuY29uc3QgcmFkaW9SYXRpbmdJbml0ID0gKCkgPT4ge1xuICBjb25zdCBsdmxzID0gW1wiRWFzeVwiLCBcIk1lZGl1bVwiLCBcIkhhcmRcIl07XG4gIGx2bHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBjb25zdCBkb21FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsKTtcbiAgICBkb21FbC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmVtb3ZlRmllbGQoXCJyYXRpbmdcIik7XG4gICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInJhdGluZ1wiKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmFkaW8tYnRuc1wiKS5hZnRlcihkaXYpO1xuICAgICAgcmVuZGVyUmF0aW5nKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmF0aW5nXCIpLCBlbCk7XG4gICAgfTtcbiAgfSk7XG59O1xuXG5jb25zdCByZW5kZXJSYXRpbmdNZW51ID0gKCkgPT4ge1xuICByZW1vdmVGaWVsZChcImdhbWUtbWVudVwiKTtcbiAgY29uc3Qgd29ya1NwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JrLXNwYWNlXCIpO1xuICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZ2FtZS1tZW51XCIpO1xuICBkaXYuaW5uZXJIVE1MID0gYDxkaXYgaWQ9XCJyYWRpby1idG5zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwicmFkaW9cIiBpZD1cIkVhc3lcIiBuYW1lPVwibGV2ZWxcIiB2YWx1ZT1cIkVhc3lcIiBjaGVja2VkPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJFYXN5XCI+RWFzeTwvbGFiZWw+PGJyPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBjbGFzcz1cInJhZGlvXCIgaWQ9XCJNZWRpdW1cIiBuYW1lPVwibGV2ZWxcIiB2YWx1ZT1cIk1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJNZWRpdW1cIj5NZWRpdW08L2xhYmVsPjxicj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJyYWRpb1wiIGlkPVwiSGFyZFwiIG5hbWU9XCJsZXZlbFwiIHZhbHVlPVwiSGFyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJvdGhlclwiPkhhcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJyYXRpbmdcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYnRuLWRpdlwiPjwvZGl2PmA7XG4gIHdvcmtTcGFjZS5hcHBlbmQoZGl2KTtcbiAgY3JlYXRlQmFja0J0bihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1kaXZcIikpO1xuXG4gIHJhZGlvUmF0aW5nSW5pdCgpO1xuXG4gIGNvbnN0IHJhdGluZ01lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhdGluZ1wiKTtcbiAgcmVuZGVyUmF0aW5nKHJhdGluZ01lbnUsIFwiRWFzeVwiKTtcbn07XG5cbi8vXG5cbi8vIE1vZGFsIHdpbmRvd1xuY29uc3QgaGlkZGVuRW5kR2FtZVdpbmRvdyA9ICgpID0+IHtcbiAgY29uc3QgbW9kYWxXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsRGlhbG9nXCIpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5pY2stbmFtZVwiKS52YWx1ZSA9IFwiXCI7XG4gIG1vZGFsV2luZG93LnN0eWxlLnRvcCA9IFwiLTk5OXB4XCI7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNvbnN0IGJhY2tNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3Blbk1vZGFsXCIpO1xuICAgIGJhY2tNb2RhbC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgfSwgNTAwKTtcbn07XG5cbmNvbnN0IHNob3dFbmRHYW1lV2luZG93ID0gKCkgPT4ge1xuICBjb25zdCBiYWNrTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wZW5Nb2RhbFwiKTtcbiAgYmFja01vZGFsLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgY29uc3QgbW9kYWxXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsRGlhbG9nXCIpO1xuICBtb2RhbFdpbmRvdy5zdHlsZS50b3AgPSBcIjBweFwiO1xuICBtb2RhbFdpbmRvdy5jaGlsZE5vZGVzWzNdLmlubmVyVGV4dCA9IGBUcmF2ZWwgdGltZTogJHtnYW1lU3RhdGUuc3RvcHdhdGNoLnRvU3RyaW5nKCl9YDtcbiAgbW9kYWxXaW5kb3cuY2hpbGROb2Rlc1s1XS5pbm5lclRleHQgPSBgTnVtYmVyIG9mIENsaWNrczogJHtnYW1lU3RhdGUuY291bnRDbGlja3N9YDtcbn07XG4vL1xuXG5leHBvcnQge1xuICByZW5kZXJHYW1lU2V0dGluZ3MsXG4gIGdlbmV0YXRlR2FtZUZpZWxkLFxuICBzaG93RW5kR2FtZVdpbmRvdyxcbiAgcmVuZGVyR2FtZU1lbnUsXG4gIGhpZGRlbkVuZEdhbWVXaW5kb3csXG4gIHJlbmRlclJhdGluZ01lbnUsXG4gIGNyZWF0ZVNlbGVjdG9yLFxufTtcbiIsIi8qIGdhbWUgc2V0dGluZ3MgYXJlIHN0b3JlZCBoZXJlICovXG4vKiBUaGlzIGZpbGUgbWF5IGJlIGNvbnZlcnQgdG8ganNvbiBpZiB5b3UgbmVlZCB0byBjcmVhdGUgc2VydmVyIHNpZGUgKi9cbi8vIFRPRE86IHJld3JpdGUgdGhpcyBjb2QgdG8gT2JqZWN0ISEhXG5cbmxldCBsZXZlbE9mRGlmZmljdWx0eSA9IFwiRWFzeVwiO1xubGV0IGNhcmRTZXQgPSBcIkNhdHNcIjtcblxuY29uc3QgZ2V0RmllbGRTaXplID0gKCkgPT4ge1xuICBzd2l0Y2ggKGxldmVsT2ZEaWZmaWN1bHR5KSB7XG4gICAgY2FzZSBcIkVhc3lcIjpcbiAgICAgIHJldHVybiAxMjtcbiAgICBjYXNlIFwiTWVkaXVtXCI6XG4gICAgICByZXR1cm4gMTg7XG4gICAgY2FzZSBcIkhhcmRcIjpcbiAgICAgIHJldHVybiAyNDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIDEyO1xuICB9XG59O1xuXG5jb25zdCBnZXRDYXJkU2V0TmFtZSA9ICgpID0+IHtcbiAgcmV0dXJuIGNhcmRTZXQ7XG59O1xuXG5jb25zdCBzZXRDYXJkU2V0ID0gKHZhbHVlKSA9PiB7XG4gIGNhcmRTZXQgPSB2YWx1ZTtcbn07XG5cbmNvbnN0IHNldExldmVsID0gKHZhbHVlKSA9PiB7XG4gIGxldmVsT2ZEaWZmaWN1bHR5ID0gdmFsdWU7XG59O1xuXG5leHBvcnQge1xuICBnZXRDYXJkU2V0TmFtZSxcbiAgZ2V0RmllbGRTaXplLFxuICBzZXRMZXZlbCxcbiAgc2V0Q2FyZFNldCxcbiAgbGV2ZWxPZkRpZmZpY3VsdHksXG59O1xuIiwiaW1wb3J0IHsgUmVuZGVyaW5nU3RvcHdhdGNoIH0gZnJvbSBcIi4uL2FsZ29yaXRobXMvc3RvcHdhdGNoLmpzXCI7XG5pbXBvcnQgeyBnZXRGaWVsZFNpemUsIGxldmVsT2ZEaWZmaWN1bHR5IH0gZnJvbSBcIi4vZ2FtZVNldHRpbmdzLmpzXCI7XG5cbmNvbnN0IGdhbWVTdGF0ZSA9IHtcbiAgdG90YWxDb3VudFVwQ2FyZHM6IDAsXG4gIGNvdW50Q2xpY2tzOiAwLFxuICBzdG9wd2F0Y2g6IG5ldyBSZW5kZXJpbmdTdG9wd2F0Y2goXCJzdG9wd2F0Y2hcIiksXG4gIHJlc2V0KCkge1xuICAgIHRoaXMudG90YWxDb3VudFVwQ2FyZHMgPSAwO1xuICAgIHRoaXMuY291bnRDbGlja3MgPSAwO1xuICAgIHRoaXMuc3RvcHdhdGNoLnJlc2V0KCk7XG4gIH0sXG59O1xuXG5jb25zdCBNQVhfVElNRSA9IDYwMDtcbmNvbnN0IGNhbGNHYW1lUG9pbnRzID0gKCkgPT4ge1xuICBjb25zdCBjb3VudENsaWNrcyA9IGdhbWVTdGF0ZS5jb3VudENsaWNrcztcbiAgY29uc3Qgc3BlbmRUaW1lID0gZ2FtZVN0YXRlLnN0b3B3YXRjaC5nZXRTZWNvbmQ7XG4gIGlmIChzcGVuZFRpbWUgPCBNQVhfVElNRSkge1xuICAgIHJldHVybiBNYXRoLnRydW5jKCgoTUFYX1RJTUUgLSBzcGVuZFRpbWUpIC8gY291bnRDbGlja3MpICogZ2V0RmllbGRTaXplKCkpO1xuICB9XG4gIHJldHVybiAxMDA7XG59O1xuXG5jb25zdCBhZGROZXdSZWNvcmQgPSAob2JqLCBwbGF5ZXJOYW1lLCBuZXdQbGF5ZXJQb2ludHMpID0+IHtcbiAgbGV0IGhhc05hbWUgPSBmYWxzZTtcbiAgb2JqLmZvckVhY2goKGVsLCBpbmQpID0+IHtcbiAgICBpZiAoZWwubmFtZSA9PT0gcGxheWVyTmFtZSkge1xuICAgICAgaWYgKGVsLnBvaW50cyA8IG5ld1BsYXllclBvaW50cykge1xuICAgICAgICBlbC5wb2ludHMgPSBuZXdQbGF5ZXJQb2ludHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoYXNOYW1lID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGluZCA9PT0gb2JqLmxlbmd0aCAtIDEgJiYgIWhhc05hbWUpIHtcbiAgICAgIG9iai5wdXNoKHsgbmFtZTogcGxheWVyTmFtZSwgcG9pbnRzOiBuZXdQbGF5ZXJQb2ludHMgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG9iajtcbn07XG5cbmNvbnN0IGNoZWNrUmF0aW5nID0gKHJhdGluZykgPT4ge1xuICByYXRpbmcuc29ydCgoYSwgYikgPT4ge1xuICAgIHJldHVybiBiLnBvaW50cyAtIGEucG9pbnRzO1xuICB9KTtcbiAgaWYgKHJhdGluZy5sZW5ndGggPiAxMCkgcmF0aW5nLnBvcCgpO1xuICByZXR1cm4gcmF0aW5nO1xufTtcblxuY29uc3Qgc2F2ZUdhbWVSZXN1bHQgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXllck5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5pY2stbmFtZVwiKS52YWx1ZTtcbiAgY29uc3QgcGxheWVyUG9pbnRzID0gY2FsY0dhbWVQb2ludHMoKTtcblxuICBsZXQgcmF0aW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0obGV2ZWxPZkRpZmZpY3VsdHkpO1xuICBpZiAocmF0aW5nICE9PSBudWxsKSB7XG4gICAgY29uc29sZS5sb2coXCJZZXNcIik7XG4gICAgcmF0aW5nID0gYWRkTmV3UmVjb3JkKEpTT04ucGFyc2UocmF0aW5nKSwgcGxheWVyTmFtZSwgcGxheWVyUG9pbnRzKTtcbiAgICByYXRpbmcgPSBjaGVja1JhdGluZyhyYXRpbmcpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKFwiTm9cIik7XG4gICAgcmF0aW5nID0gW3sgbmFtZTogcGxheWVyTmFtZSwgcG9pbnRzOiBwbGF5ZXJQb2ludHMgfV07XG4gIH1cblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsZXZlbE9mRGlmZmljdWx0eSwgSlNPTi5zdHJpbmdpZnkocmF0aW5nKSk7XG59O1xuXG4vLyBkZXByZWNhdGVkXG5jb25zdCBnZXRHYW1lUmVzdWx0cyA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZVJhdGluZyA9IFtsb2NhbFN0b3JhZ2UubGVuZ3RoXTtcbiAgZm9yIChsZXQga2V5IGluIGxvY2FsU3RvcmFnZSkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBrZXkgIT09IDApIHtcbiAgICAgIGdhbWVSYXRpbmcucHVzaChba2V5LCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBnYW1lUmF0aW5nO1xufTtcblxuZXhwb3J0IHsgZ2FtZVN0YXRlLCBzYXZlR2FtZVJlc3VsdCwgZ2V0R2FtZVJlc3VsdHMgfTtcbiIsImltcG9ydCB7IGdldEpzb25Gcm9tVXJsIH0gZnJvbSBcIi4uL2FsZ29yaXRobXMvcmVxdWVzdHMuanNcIjtcbi8vIFRPRE8gR0FNRV9EQVRBX1VSTCDQuNGB0L/QvtC70YzQt9GD0LXRgtGB0Y8g0LIg0L3QtdGB0LrQvtC70YzQvdC40LrQuNGFINC80LXRgdGC0LDRhSwg0LXRgdGC0Ywg0YHQvNGL0YHQuyDRgdC+0LfQtNCw0YLRjCDRhNCw0LnQuyDRgVxuLy8g0L/QtdGA0LXQvNC10L3QvdGL0LzQuCBcItGB0YDQtdC00Ysg0L7QutGA0YPQttC10L3QuNGPXCJcbmNvbnN0IEdBTUVfREFUQV9VUkwgPSBcIi9kaXN0L2RhdGEvZ2FtZURhdGEuanNvblwiO1xuXG5jb25zdCBnYXRDYXJkc05hbWVzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBnYW1lRGF0YVJlc3BvbnNlID0gYXdhaXQgZ2V0SnNvbkZyb21VcmwoR0FNRV9EQVRBX1VSTCk7XG4gIGxldCBjYXJkU2V0cyA9IFtdO1xuICBmb3IgKGxldCBrZXkgaW4gZ2FtZURhdGFSZXNwb25zZSkge1xuICAgIGNhcmRTZXRzLnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gY2FyZFNldHM7XG59O1xuXG5leHBvcnQgeyBnYXRDYXJkc05hbWVzIH07XG4iLCJpbXBvcnQgeyBnZXRDYXJkU2V0TmFtZSwgZ2V0RmllbGRTaXplIH0gZnJvbSBcIi4vZ2FtZVNldHRpbmdzLmpzXCI7XG5pbXBvcnQgeyByYW5kb21JbnRlZ2VyIH0gZnJvbSBcIi4uL2FsZ29yaXRobXMvbnVtZXJpYy5qc1wiO1xuaW1wb3J0IHsgZ2V0SnNvbkZyb21VcmwgfSBmcm9tIFwiLi4vYWxnb3JpdGhtcy9yZXF1ZXN0cy5qc1wiO1xuaW1wb3J0IHsgZ2FtZVN0YXRlIH0gZnJvbSBcIi4uL2VuZ2luZS9nYW1lU3RhdGlzdGljcy5qc1wiO1xuaW1wb3J0IHsgZ2VuZXRhdGVHYW1lRmllbGQgfSBmcm9tIFwiLi9nYW1lTGF5b3V0LmpzXCI7XG5pbXBvcnQgeyBwbGF5U291bmQgfSBmcm9tIFwiLi4vYWxnb3JpdGhtcy9zb3VuZHMuanNcIjtcblxuY29uc3QgR0FNRV9EQVRBX1VSTCA9IFwiL2Rpc3QvZGF0YS9nYW1lRGF0YS5qc29uXCI7XG5cbi8vIEl0J3MgZnVuY3Rpb25zIG5lZWQgZm9yIGZvcm1lZCBnYW1lIG1hcFxuLy8gdGhpcyBmdW5jdGlvbiBnZXQgSnNvbiBmcm9tIHNlcnZlciBhbmQgZm9ybWVkIG1hcCBhbnN3ZXIgd2l0aCBjYXJkcyBsaW5rc1xuY29uc3QgZ2V0Q2FyZHMgPSBhc3luYyAoZmllbGRTaXplLCBjYXJkU2V0TmFtZSkgPT4ge1xuICBjb25zdCBnYW1lRGF0YVJlc3BvbnNlID0gYXdhaXQgZ2V0SnNvbkZyb21VcmwoR0FNRV9EQVRBX1VSTCk7XG4gIGNvbnN0IHBpY3R1cmVTdG9yZSA9IG5ldyBNYXAoKTtcbiAgLy8g0JTQsNC90L3Ri9C5IHNldCDQvdGD0LbQtdC9INC00LvRjyDQvdC10LTQvtC/0YPRgdC60LAg0LTQvtCx0LDQstC70LXQvdC40Y8g0L/QvtCy0YLQvtGA0Y/RjtGJ0LjRhdGB0Y8g0LbQuyDQsiBtYXBcbiAgbGV0IGhhc0VsID0gbmV3IFNldCgpO1xuICBsZXQgaW5kZXggPSAwO1xuICB3aGlsZSAocGljdHVyZVN0b3JlLnNpemUgPCBmaWVsZFNpemUgLyAyKSB7XG4gICAgY29uc3QgaWQgPSByYW5kb21JbnRlZ2VyKDAsIDE0KTtcbiAgICBjb25zdCBsaW5rID0gZ2FtZURhdGFSZXNwb25zZVtjYXJkU2V0TmFtZV1baWRdW1wibGlua1wiXTtcbiAgICBpZiAoIWhhc0VsLmhhcyhpZCkpIHtcbiAgICAgIGhhc0VsLmFkZChpZCk7XG4gICAgICBwaWN0dXJlU3RvcmUuc2V0KGluZGV4LCBsaW5rKTtcbiAgICAgIGluZGV4Kys7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBpY3R1cmVTdG9yZTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlQ2FyZFBvc2l0aW9uID0gKGZpZWxkU2l6ZSkgPT4ge1xuICBsZXQgY2FyZFNldCA9IG5ldyBTZXQoKTtcbiAgbGV0IHBvc0FycmF5ID0gW107XG4gIGxldCBpbmRleCA9IDA7XG5cbiAgd2hpbGUgKGNhcmRTZXQuc2l6ZSA8IGZpZWxkU2l6ZSkge1xuICAgIGxldCBjb3VudFVuaXFFbCA9IDA7XG4gICAgLy8gR2VuZXJhdGUgdHdvIHVuaXEgcG9zIGZvciBlcXVhbCBjYXJkc1xuICAgIHdoaWxlIChjb3VudFVuaXFFbCA8IDIpIHtcbiAgICAgIGNvbnN0IHBvcyA9IHJhbmRvbUludGVnZXIoMCwgZmllbGRTaXplIC0gMSk7XG4gICAgICBpZiAoIWNhcmRTZXQuaGFzKHBvcykpIHtcbiAgICAgICAgY2FyZFNldC5hZGQocG9zKTtcbiAgICAgICAgcG9zQXJyYXlbcG9zXSA9IGluZGV4O1xuICAgICAgICBjb3VudFVuaXFFbCsrO1xuICAgICAgfVxuICAgIH1cbiAgICBpbmRleCsrO1xuICB9XG4gIGNvbnNvbGUubG9nKHBvc0FycmF5KTtcbiAgcmV0dXJuIHBvc0FycmF5O1xufTtcblxuY29uc3QgcmVuZGVyQmFja1NpZGUgPSAocG9zQXJyYXksIGNhcmRzTWFwKSA9PiB7XG4gIGNvbnNvbGUubG9nKGNhcmRzTWFwKTtcbiAgY29uc3QgZG9jID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWZpZWxkXCIpO1xuICBsZXQgaW5kZXggPSAwO1xuICBmb3IgKGxldCBub2RlIG9mIGRvYy5jaGlsZHJlbikge1xuICAgIGlmIChub2RlLnRhZ05hbWUgIT09IFwiU1BBTlwiKSB7XG4gICAgICBsZXQgbnVtT2ZDYXJkID0gcG9zQXJyYXlbaW5kZXhdO1xuICAgICAgbGV0IGxpbmsgPSBjYXJkc01hcC5nZXQobnVtT2ZDYXJkKTtcbiAgICAgIG5vZGUuY2hpbGRyZW5bMV0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2xpbmt9KWA7XG4gICAgICBub2RlLmNoaWxkcmVuWzFdLnN0eWxlLmJhY2tncm91bmRTaXplID0gXCIxMDAlXCI7XG4gICAgICBpbmRleCsrO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgY3JlYXRlR2FtZU1hdHJpeCA9IGFzeW5jIChmaWVsZFNpemUsIGNhcmRTZXROYW1lKSA9PiB7XG4gIGNvbnN0IHBpY3R1cmVTdG9yZSA9IGF3YWl0IGdldENhcmRzKGZpZWxkU2l6ZSwgY2FyZFNldE5hbWUpO1xuICBjb25zdCBwb3NBcnJheSA9IGdlbmVyYXRlQ2FyZFBvc2l0aW9uKGZpZWxkU2l6ZSwgcGljdHVyZVN0b3JlKTtcbiAgcmVuZGVyQmFja1NpZGUocG9zQXJyYXksIHBpY3R1cmVTdG9yZSk7XG59O1xuLy9cblxuY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xuICBwbGF5U291bmQoXCJkaXN0L3NvdW5kL2NhcmRzTGF5b3V0Lm1wM1wiKTtcbiAgY29uc3QgZmllbGRTaXplID0gZ2V0RmllbGRTaXplKCk7XG4gIGNvbnN0IGNhcmRTZXROYW1lID0gZ2V0Q2FyZFNldE5hbWUoKTtcbiAgZ2VuZXRhdGVHYW1lRmllbGQoZmllbGRTaXplKTtcbiAgY3JlYXRlR2FtZU1hdHJpeChmaWVsZFNpemUsIGNhcmRTZXROYW1lKTtcbiAgZ2FtZVN0YXRlLnN0b3B3YXRjaC5zdGFydCgpO1xufTtcblxuZXhwb3J0IHsgc3RhcnRHYW1lIH07XG4iLCJpbXBvcnQge1xuICByZW5kZXJHYW1lU2V0dGluZ3MsXG4gIHJlbmRlckdhbWVNZW51LFxuICBoaWRkZW5FbmRHYW1lV2luZG93LFxuICByZW5kZXJSYXRpbmdNZW51LFxufSBmcm9tIFwiLi4vZW5naW5lL2dhbWVMYXlvdXQuanNcIjtcbmltcG9ydCB7IHN0YXJ0R2FtZSB9IGZyb20gXCIuLi9lbmdpbmUvbmV3R2FtZS5qc1wiO1xuaW1wb3J0IHsgZ2FtZVN0YXRlLCBzYXZlR2FtZVJlc3VsdCB9IGZyb20gXCIuLi9lbmdpbmUvZ2FtZVN0YXRpc3RpY3MuanNcIjtcbmltcG9ydCB7IHBsYXlTb3VuZCB9IGZyb20gXCIuLi9hbGdvcml0aG1zL3NvdW5kcy5qc1wiO1xuXG4vLyBUaGlzIGJ0biByZW1vdmVkIGdhbWUtbWVudSBhbmQgdXBsb2FkZWQgZ2FtZS1maWVsZCB3aWNoIGNhcmRzXG5jb25zdCBuZXdHYW1lID0gKCkgPT4ge1xuICBwbGF5U291bmQoXCJkaXN0L3NvdW5kL2J1dHRvbkNsaWNrLm1wM1wiKTtcbiAgc3RhcnRHYW1lKCk7XG59O1xuXG5jb25zdCBvcGVuU2V0dGluZ3MgPSAoKSA9PiB7XG4gIHBsYXlTb3VuZChcImRpc3Qvc291bmQvYnV0dG9uQ2xpY2subXAzXCIpO1xuICByZW5kZXJHYW1lU2V0dGluZ3MoKTtcbn07XG5cbmNvbnN0IG9wZW5SYXRpbmcgPSAoKSA9PiB7XG4gIHBsYXlTb3VuZChcImRpc3Qvc291bmQvYnV0dG9uQ2xpY2subXAzXCIpO1xuICByZW5kZXJSYXRpbmdNZW51KCk7XG59O1xuXG5jb25zdCBlbmRHYW1lID0gKCkgPT4ge1xuICBwbGF5U291bmQoXCJkaXN0L3NvdW5kL2J1dHRvbkNsaWNrLm1wM1wiKTtcbiAgc2F2ZUdhbWVSZXN1bHQoKTtcbiAgZ2FtZVN0YXRlLnJlc2V0KCk7XG4gIGhpZGRlbkVuZEdhbWVXaW5kb3coKTtcbiAgc2V0VGltZW91dChyZW5kZXJHYW1lTWVudSwgMzAwLCBcImdhbWUtZmllbGRcIik7XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCB7IG5ld0dhbWUsIG9wZW5SYXRpbmcsIG9wZW5TZXR0aW5ncywgZW5kR2FtZSB9O1xuIiwiaW1wb3J0IHsgZ2V0RmllbGRTaXplIH0gZnJvbSBcIi4uL2VuZ2luZS9nYW1lU2V0dGluZ3MuanNcIjtcbmltcG9ydCB7IGdhbWVTdGF0ZSB9IGZyb20gXCIuLi9lbmdpbmUvZ2FtZVN0YXRpc3RpY3MuanNcIjtcbmltcG9ydCB7IHNob3dFbmRHYW1lV2luZG93IH0gZnJvbSBcIi4uL2VuZ2luZS9nYW1lTGF5b3V0LmpzXCI7XG5pbXBvcnQgeyBwbGF5U291bmQgfSBmcm9tIFwiLi4vYWxnb3JpdGhtcy9zb3VuZHMuanNcIjtcblxuY29uc3QgY2xpY2tDb3VudGVyID0gKGNvdW50KSA9PiB7XG4gIGNvbnN0IGNsaWNrQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3VudENsaWNrXCIpO1xuICBjbGlja0Jhci5pbm5lckhUTUwgPSBgPGI+TnVtYmVyIG9mIGNsaWNrczo8L2I+ICR7Y291bnR9YDtcbn07XG5cbmNvbnN0IGNoZWNrQ2FyZHNNYXRjaGVzID0gKCkgPT4ge1xuICBjb25zdCBpbnZlcnRlZNChYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFthY3RpdmF0ZWQ9XCJ0cnVlXCJdYCk7XG4gIC8vIEluIHRoaXMgdmVyc2lvbiBjb21wYXJpc29uIGlzIHBlcmZvcm1lZCBmb3IgdXJsIHRvIGJhY2tyb3VuZC1pbWFnZVxuICAvLyBUaGlzIHNvbHV0aW9uIGNhbiBiZSByZXBsYWNlZCBieSBjb21wYXJpc29uIGJ5IGlkXG4gIGNvbnN0IGNhcmQxQmFjayA9IGludmVydGVk0KFhcmRzWzBdLmxhc3RDaGlsZDtcbiAgY29uc3QgY2FyZDJCYWNrID0gaW52ZXJ0ZWTQoWFyZHNbMV0ubGFzdENoaWxkO1xuICBpZiAoY2FyZDFCYWNrLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9PT0gY2FyZDJCYWNrLnN0eWxlLmJhY2tncm91bmRJbWFnZSkge1xuICAgIGludmVydGVk0KFhcmRzWzBdLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIHRydWUpO1xuICAgIGludmVydGVk0KFhcmRzWzFdLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIHRydWUpO1xuICAgIGdhbWVTdGF0ZS50b3RhbENvdW50VXBDYXJkcyArPSAyO1xuICAgIGludmVydGVk0KFhcmRzWzBdLnNldEF0dHJpYnV0ZShcImFjdGl2YXRlZFwiLCBmYWxzZSk7XG4gICAgaW52ZXJ0ZWTQoWFyZHNbMV0uc2V0QXR0cmlidXRlKFwiYWN0aXZhdGVkXCIsIGZhbHNlKTtcbiAgICBzZXRUaW1lb3V0KGNoZWNrRW5kR2FtZSwgMTAwMCk7XG4gIH0gZWxzZSB7XG4gICAgcm9sbERpc2FibGVkKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpbnZlcnRlZNChYXJkc1swXS5zZXRBdHRyaWJ1dGUoXCJhY3RpdmF0ZWRcIiwgZmFsc2UpO1xuICAgICAgaW52ZXJ0ZWTQoWFyZHNbMV0uc2V0QXR0cmlidXRlKFwiYWN0aXZhdGVkXCIsIGZhbHNlKTtcbiAgICB9LCAxNTAwKTtcbiAgICBzZXRUaW1lb3V0KHJvbGxFbmFibGVkLCAyMDAwKTtcbiAgfVxufTtcblxuY29uc3Qgcm9sbERpc2FibGVkID0gKCkgPT4ge1xuICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FyZFwiKTtcbiAgY2FyZHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0ub25jbGljayA9IG51bGw7XG4gIH0pO1xufTtcblxuY29uc3Qgcm9sbEVuYWJsZWQgPSAoKSA9PiB7XG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXJkXCIpO1xuICBjYXJkcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgcm9sbENhcmQoaXRlbSk7XG4gICAgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBjaGVja0VuZEdhbWUgPSAoKSA9PiB7XG4gIGlmIChnZXRGaWVsZFNpemUoKSA9PSBnYW1lU3RhdGUudG90YWxDb3VudFVwQ2FyZHMpIHtcbiAgICBwbGF5U291bmQoXCJkaXN0L3NvdW5kL2VuZEdhbWUubXAzXCIpO1xuICAgIGdhbWVTdGF0ZS5zdG9wd2F0Y2guc3RvcCgpO1xuICAgIHNob3dFbmRHYW1lV2luZG93KCk7XG4gIH1cbn07XG5cbmxldCBjb3VudFVwQ2FyZHMgPSAwO1xuY29uc3Qgcm9sbENhcmQgPSAoZGl2KSA9PiB7XG4gIC8vIHRoaXMgY29kZSB3b3JrIG9ubHkgd2l0aCBub24gc2VsZWN0ZWQgYW5kIG5vdCBhY3RpdmF0ZWQgZnVuY3Rpb25zXG4gIGlmIChcbiAgICAhZGl2Lmhhc0F0dHJpYnV0ZShcInNlbGVjdGVkXCIpICYmXG4gICAgZGl2LmdldEF0dHJpYnV0ZShcImFjdGl2YXRlZFwiKSA9PT0gXCJmYWxzZVwiXG4gICkge1xuICAgIHBsYXlTb3VuZChcImRpc3Qvc291bmQvdXBDYXJkLm1wM1wiKTtcbiAgICBnYW1lU3RhdGUuY291bnRDbGlja3MgKz0gMTtcbiAgICBjbGlja0NvdW50ZXIoZ2FtZVN0YXRlLmNvdW50Q2xpY2tzKTtcbiAgICBjb25zb2xlLmxvZyhnYW1lU3RhdGUpO1xuXG4gICAgaWYgKGNvdW50VXBDYXJkcyA8IDIpIHtcbiAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJhY3RpdmF0ZWRcIiwgdHJ1ZSk7XG4gICAgICBjb3VudFVwQ2FyZHMrKztcbiAgICB9XG5cbiAgICBpZiAoY291bnRVcENhcmRzID09IDIpIHtcbiAgICAgIGNvdW50VXBDYXJkcyA9IDA7XG4gICAgICBjaGVja0NhcmRzTWF0Y2hlcygpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IHsgcm9sbENhcmQgfTtcbiIsImltcG9ydCB7IHNldExldmVsLCBzZXRDYXJkU2V0IH0gZnJvbSBcIi4uL2VuZ2luZS9nYW1lU2V0dGluZ3MuanNcIjtcblxuY29uc3Qgc2VsRGlmTHZsID0gKHZhbHVlKSA9PiB7XG4gIHNldExldmVsKHZhbHVlKTtcbn07XG5cbmNvbnN0IHNlbGVjdFNhcmRTZXQgPSAodmFsdWUpID0+IHtcbiAgc2V0Q2FyZFNldCh2YWx1ZSk7XG59O1xuXG5leHBvcnQgeyBzZWxEaWZMdmwsIHNlbGVjdFNhcmRTZXQgfTtcbiIsImltcG9ydCB7XG4gIG5ld0dhbWUsXG4gIG9wZW5SYXRpbmcsXG4gIG9wZW5TZXR0aW5ncyxcbiAgZW5kR2FtZSxcbn0gZnJvbSBcIi4vZXZlbnRzL2J1dHRvbnMtY2xpY2tzLmpzXCI7XG5pbXBvcnQgXCJyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanNcIjtcbmltcG9ydCB7IHNob3dFbmRHYW1lV2luZG93IH0gZnJvbSBcIi4vZW5naW5lL2dhbWVMYXlvdXQuanNcIjtcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgY29uc3QgbmV3R2FtZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LWdhbWUtYnRuXCIpO1xuICBjb25zdCByYXRpbmdCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhdGluZy1idG5cIik7XG4gIGNvbnN0IG9wdGlvbnNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wdGlvbnMtYnRuXCIpO1xuICBjb25zdCBlbmRHYW1lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbERpYWxvZ1wiKTtcbiAgbmV3R2FtZUJ0bi5vbmNsaWNrID0gbmV3R2FtZTtcbiAgcmF0aW5nQnRuLm9uY2xpY2sgPSBvcGVuUmF0aW5nO1xuICBvcHRpb25zQnRuLm9uY2xpY2sgPSBvcGVuU2V0dGluZ3M7XG4gIGVuZEdhbWVCdG4ub25zdWJtaXQgPSBlbmRHYW1lO1xuICAvL3Nob3dFbmRHYW1lV2luZG93KCk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
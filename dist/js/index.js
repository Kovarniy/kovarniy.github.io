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
    key: "currentTime",
    get: function get() {
      var sHour = this.hour < 10 ? "0".concat(this.hour) : this.hour;
      var timeString = "".concat(sHour, ":");
      var sMin = this.min < 10 ? "0".concat(this.min) : this.min;
      timeString += "".concat(sMin, ":");
      var sSec = this.sec < 10 ? "0".concat(this.sec) : this.sec;
      timeString += "".concat(sSec);
      return timeString;
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
      timeEl.innerHTML = "<b>Time:</b> " + obj.currentTime;
    }
  }]);

  return RenderingStopwatch;
}(Stopwatch);



/***/ }),

/***/ "./src/engine/gameLayout.js":
/*!**********************************!*\
  !*** ./src/engine/gameLayout.js ***!
  \**********************************/
/*! exports provided: renderGameSettings, genetateGameField, showEndGameWindow, renderGameMenu, hiddenEndGameWindow, renderRating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderGameSettings", function() { return renderGameSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genetateGameField", function() { return genetateGameField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showEndGameWindow", function() { return showEndGameWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderGameMenu", function() { return renderGameMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hiddenEndGameWindow", function() { return hiddenEndGameWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderRating", function() { return renderRating; });
/* harmony import */ var _events_crads_events_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events/crads-events.js */ "./src/events/crads-events.js");
/* harmony import */ var _gameStatistics_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameStatistics.js */ "./src/engine/gameStatistics.js");
/* harmony import */ var _events_settnigs_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events/settnigs-events */ "./src/events/settnigs-events.js");
/* harmony import */ var _events_buttons_clicks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../events/buttons-clicks.js */ "./src/events/buttons-clicks.js");
/* harmony import */ var _gameSettings_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameSettings.js */ "./src/engine/gameSettings.js");
/* harmony import */ var _algorithms_sounds_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../algorithms/sounds.js */ "./src/algorithms/sounds.js");





 // create settings selectors and buttons

var createSelector = function createSelector(inEl, selectorListner, parametrsArray, activEl) {
  var selector = document.createElement("select");
  selector.setAttribute("id", "settings-selector");
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
    Object(_algorithms_sounds_js__WEBPACK_IMPORTED_MODULE_5__["playSound"])("dist/sound/buttonClick.mp3");
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

var renderGameSettings = function renderGameSettings() {
  removeField("game-menu");
  var workSpace = document.getElementById("work-space");
  var settingsMenu = document.createElement("div");
  settingsMenu.setAttribute("id", "game-menu");
  workSpace.append(settingsMenu);
  createSelector(settingsMenu, _events_settnigs_events__WEBPACK_IMPORTED_MODULE_2__["selDifLvl"], ["Easy", "Medium", "Hard"], _gameSettings_js__WEBPACK_IMPORTED_MODULE_4__["levelOfDifficulty"]);
  createSelector(settingsMenu, _events_settnigs_events__WEBPACK_IMPORTED_MODULE_2__["selectSardSet"], ["Cats", "Lenin"], _gameSettings_js__WEBPACK_IMPORTED_MODULE_4__["getCardSetName"]);
  createBackBtn(settingsMenu);
}; //------------------------------------------------
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
    if (Object(_gameSettings_js__WEBPACK_IMPORTED_MODULE_4__["getFieldSize"])() === 12) div.classList.add("easy");
    if (Object(_gameSettings_js__WEBPACK_IMPORTED_MODULE_4__["getFieldSize"])() === 18) div.classList.add("medium");
    if (Object(_gameSettings_js__WEBPACK_IMPORTED_MODULE_4__["getFieldSize"])() === 24) div.classList.add("hard"); //Alternative solution - use Event delegation on work-space

    div.onclick = function () {
      Object(_events_crads_events_js__WEBPACK_IMPORTED_MODULE_0__["rollCard"])(div);
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
  newGameBtn.onclick = _events_buttons_clicks_js__WEBPACK_IMPORTED_MODULE_3__["newGame"];
  ratingBtn.onclick = _events_buttons_clicks_js__WEBPACK_IMPORTED_MODULE_3__["openRating"];
  optionsBtn.onclick = _events_buttons_clicks_js__WEBPACK_IMPORTED_MODULE_3__["openSettings"];
}; //------------------------------------------------
// rating


var renderRating = function renderRating() {
  removeField("game-menu");
  var workSpace = document.getElementById("work-space");
  var div = document.createElement("div");
  div.setAttribute("id", "game-menu");
  workSpace.append(div);
  var ratingMenu = document.getElementById("game-menu");
  var gameResults = Object(_gameStatistics_js__WEBPACK_IMPORTED_MODULE_1__["getGameResults"])();
  console.log(gameResults);
  gameResults.forEach(function (element, key) {
    var playerInfo = document.createElement("p");
    playerInfo.innerText = "".concat(key, " ").concat(element);
    ratingMenu.append(playerInfo);
  });
  createBackBtn(ratingMenu);
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
  modalWindow.childNodes[3].innerText = "Travel time: ".concat(_gameStatistics_js__WEBPACK_IMPORTED_MODULE_1__["gameState"].stopwatch.currentTime);
  modalWindow.childNodes[5].innerText = "Number of Clicks: ".concat(_gameStatistics_js__WEBPACK_IMPORTED_MODULE_1__["gameState"].countClicks);
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

var saveGameResult = function saveGameResult() {
  var playerName = document.getElementById("nick-name").value;
  console.log(playerName); // TODO придумать, как начислять очки

  var countClicks = gameState.countClicks; // получение количества очков

  var trevelTime = gameState.stopwatch.currentTime; // получение строки с количеством секнд
  // пока тут балванка, но этот алгоритм нужно будет разработать

  var playerPoints = countClicks;

  try {
    if (localStorage.getItem(playerName) === null && playerName !== "") {
      console.log("save to storige");
      localStorage.setItem(playerName, playerPoints.toString());
    } else {
      var oldCountPoints = localStorage.getItem(playerName);
      console.log(oldCountPoints);
      if (playerPoints > parseInt(oldCountPoints)) localStorage.setItem(playerName, playerPoints.toString());
    }
  } catch (e) {
    if (e == QUOTA_EXCEEDED_ERR) {
      console.log("Превышен лимит");
    }
  }
};

var getGameResults = function getGameResults() {
  var gameRating = [localStorage.length];
  var ind = 0;

  for (var key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      console.log("".concat(key, ", ").concat(localStorage.getItem(key)));
      gameRating[ind] = [key, localStorage.getItem(key)];
      ind++;
    }
  }

  return gameRating;
};



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
  Object(_engine_gameLayout_js__WEBPACK_IMPORTED_MODULE_0__["renderRating"])();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc3VwZXJQcm9wQmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FsZ29yaXRobXMvbnVtZXJpYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWxnb3JpdGhtcy9yZXF1ZXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWxnb3JpdGhtcy9zb3VuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FsZ29yaXRobXMvc3RvcHdhdGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZUxheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dhbWVTZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dhbWVTdGF0aXN0aWNzLmpzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvbmV3R2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL2J1dHRvbnMtY2xpY2tzLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvY3JhZHMtZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvc2V0dG5pZ3MtZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyYW5kb21JbnRlZ2VyIiwibWluIiwibWF4IiwicmFuZCIsIk1hdGgiLCJyYW5kb20iLCJmbG9vciIsImdldEpzb25Gcm9tVXJsIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uY2UiLCJqc29uIiwiYWRkU291bmRUb0VsIiwic2VsZWN0b3IiLCJwYXRoVG9Tb3VuZCIsImVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJvbmNsaWNrIiwicGxheVNvdW5kIiwiYXVkaW8iLCJBdWRpbyIsInNyYyIsImF1dG9wbGF5IiwiU3RvcHdhdGNoIiwic2VjIiwiaG91ciIsIm9iaiIsIm1zaW4iLCJ0aW1lcklkIiwic2V0SW50ZXJ2YWwiLCJ0aWNrIiwiY2xlYXJJbnRlcnZhbCIsInNIb3VyIiwidGltZVN0cmluZyIsInNNaW4iLCJzU2VjIiwiUmVuZGVyaW5nU3RvcHdhdGNoIiwiZWxJZCIsInRpbWVFbCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiY3VycmVudFRpbWUiLCJjcmVhdGVTZWxlY3RvciIsImluRWwiLCJzZWxlY3Rvckxpc3RuZXIiLCJwYXJhbWV0cnNBcnJheSIsImFjdGl2RWwiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiaW5UZXh0Iiwib25jaGFuZ2UiLCJ2YWx1ZSIsImFwcGVuZCIsImNyZWF0ZUJhY2tCdG4iLCJjb250ZXh0IiwiYnV0dG9uIiwicmVuZGVyR2FtZU1lbnUiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lclRleHQiLCJyZW1vdmVGaWVsZCIsImVsZW1laW50SWQiLCJyZW1vdmVkQWN0aXZpdHkiLCJyZW1vdmUiLCJyZW5kZXJHYW1lU2V0dGluZ3MiLCJ3b3JrU3BhY2UiLCJzZXR0aW5nc01lbnUiLCJzZWxEaWZMdmwiLCJsZXZlbE9mRGlmZmljdWx0eSIsInNlbGVjdFNhcmRTZXQiLCJnZXRDYXJkU2V0TmFtZSIsImFkZEluZm9CYXIiLCJkb2MiLCJnYW1lRmllbGQiLCJhZGRDYXJkc09uRmllbGQiLCJmaWVsZFNpemUiLCJpIiwiZGl2IiwiZ2V0RmllbGRTaXplIiwicm9sbENhcmQiLCJnZW5ldGF0ZUdhbWVGaWVsZCIsIm9sZEFjdGl2aXR5IiwiYWRkR2FtZU1lbnVMaXN0bmVyIiwibmV3R2FtZUJ0biIsInJhdGluZ0J0biIsIm9wdGlvbnNCdG4iLCJuZXdHYW1lIiwib3BlblJhdGluZyIsIm9wZW5TZXR0aW5ncyIsInJlbmRlclJhdGluZyIsInJhdGluZ01lbnUiLCJnYW1lUmVzdWx0cyIsImdldEdhbWVSZXN1bHRzIiwiY29uc29sZSIsImxvZyIsImtleSIsInBsYXllckluZm8iLCJoaWRkZW5FbmRHYW1lV2luZG93IiwibW9kYWxXaW5kb3ciLCJzdHlsZSIsInRvcCIsInNldFRpbWVvdXQiLCJiYWNrTW9kYWwiLCJ2aXNpYmlsaXR5Iiwic2hvd0VuZEdhbWVXaW5kb3ciLCJjaGlsZE5vZGVzIiwiZ2FtZVN0YXRlIiwic3RvcHdhdGNoIiwiY291bnRDbGlja3MiLCJjYXJkU2V0Iiwic2V0Q2FyZFNldCIsInNldExldmVsIiwidG90YWxDb3VudFVwQ2FyZHMiLCJyZXNldCIsInNhdmVHYW1lUmVzdWx0IiwicGxheWVyTmFtZSIsInRyZXZlbFRpbWUiLCJwbGF5ZXJQb2ludHMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInRvU3RyaW5nIiwib2xkQ291bnRQb2ludHMiLCJwYXJzZUludCIsImUiLCJRVU9UQV9FWENFRURFRF9FUlIiLCJnYW1lUmF0aW5nIiwibGVuZ3RoIiwiaW5kIiwiaGFzT3duUHJvcGVydHkiLCJHQU1FX0RBVEFfVVJMIiwiZ2V0Q2FyZHMiLCJjYXJkU2V0TmFtZSIsImdhbWVEYXRhUmVzcG9uc2UiLCJwaWN0dXJlU3RvcmUiLCJNYXAiLCJoYXNFbCIsIlNldCIsImluZGV4Iiwic2l6ZSIsImlkIiwibGluayIsImhhcyIsInNldCIsImdlbmVyYXRlQ2FyZFBvc2l0aW9uIiwicG9zQXJyYXkiLCJjb3VudFVuaXFFbCIsInBvcyIsInJlbmRlckJhY2tTaWRlIiwiY2FyZHNNYXAiLCJjaGlsZHJlbiIsIm5vZGUiLCJ0YWdOYW1lIiwibnVtT2ZDYXJkIiwiZ2V0IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJjcmVhdGVHYW1lTWF0cml4Iiwic3RhcnRHYW1lIiwic3RhcnQiLCJlbmRHYW1lIiwiY2xpY2tDb3VudGVyIiwiY291bnQiLCJjbGlja0JhciIsImNoZWNrQ2FyZHNNYXRjaGVzIiwiaW52ZXJ0ZWTQoWFyZHMiLCJjYXJkMUJhY2siLCJsYXN0Q2hpbGQiLCJjYXJkMkJhY2siLCJjaGVja0VuZEdhbWUiLCJyb2xsRGlzYWJsZWQiLCJyb2xsRW5hYmxlZCIsImNhcmRzIiwiaXRlbSIsInN0b3AiLCJjb3VudFVwQ2FyZHMiLCJoYXNBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJ3aW5kb3ciLCJvbmxv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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7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R0FBcUJxRSxpRUFBckI7QUFDQUYsV0FBUyxDQUFDbkUsT0FBVixHQUFvQnNFLG9FQUFwQjtBQUNBRixZQUFVLENBQUNwRSxPQUFYLEdBQXFCdUUsc0VBQXJCO0FBQ0E0RixZQUFVLENBQUNDLFFBQVgsR0FBc0JyQixpRUFBdEIsQ0FSb0IsQ0FTcEI7QUFDRCxDQVZELEMiLCJmaWxlIjoianMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDsiLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsInZhciBzdXBlclByb3BCYXNlID0gcmVxdWlyZShcIi4vc3VwZXJQcm9wQmFzZVwiKTtcblxuZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBSZWZsZWN0LmdldDtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChyZWNlaXZlcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlciB8fCB0YXJnZXQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXQ7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mOyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3N1cGVyUHJvcEJhc2U7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwiLy8gVGhpcyBmaWxlIGluY2x1ZGVzIGFsZ29yaXRobXMgZm9yIG51bWVyaWMgb3BlcmF0aW9uc1xuXG5jb25zdCByYW5kb21JbnRlZ2VyID0gKG1pbiwgbWF4KSA9PiB7XG4gIGxldCByYW5kID0gbWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggKyAxIC0gbWluKTtcbiAgcmV0dXJuIE1hdGguZmxvb3IocmFuZCk7XG59O1xuXG5leHBvcnQgeyByYW5kb21JbnRlZ2VyIH07XG4iLCIvLyBUaGlzIGZpbGUgaW5jbHVkZXMgZnVuY3Rpb25zIGZvciByZXF1ZXN0cyB0byBzZXJ2ZXIgYW5kIGV0Y1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHJldHVybiBKc29uIGZyb20gdXJsXG5jb25zdCBnZXRKc29uRnJvbVVybCA9ICh1cmwpID0+IHtcbiAgcmV0dXJuIGZldGNoKHVybCkudGhlbigocmVzcG9uY2UpID0+IHtcbiAgICByZXR1cm4gcmVzcG9uY2UuanNvbigpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGdldEpzb25Gcm9tVXJsIH07XG4iLCJjb25zdCBhZGRTb3VuZFRvRWwgPSAoc2VsZWN0b3IsIHBhdGhUb1NvdW5kKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgZWxlbWVudC5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGVsLm9uY2xpY2sgPSBmdW5jdGlvbiAocGF0aFRvU291bmQpIHtcbiAgICAgIHBsYXlTb3VuZChwYXRoVG9Tb3VuZCk7XG4gICAgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBwbGF5U291bmQgPSAocGF0aFRvU291bmQpID0+IHtcbiAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oKTsgLy8g0KHQvtC30LTQsNGR0Lwg0L3QvtCy0YvQuSDRjdC70LXQvNC10L3RgiBBdWRpb1xuICBhdWRpby5zcmMgPSBgJHtwYXRoVG9Tb3VuZH1gOyAvLyDQo9C60LDQt9GL0LLQsNC10Lwg0L/Rg9GC0Ywg0Log0LfQstGD0LrRgyBcItC60LvQuNC60LBcIlxuICBhdWRpby5hdXRvcGxheSA9IHRydWU7IC8vINCQ0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4INC30LDQv9GD0YHQutCw0LXQvFxufTtcblxuZXhwb3J0IHsgYWRkU291bmRUb0VsLCBwbGF5U291bmQgfTtcbiIsImNsYXNzIFN0b3B3YXRjaCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2VjID0gdGhpcy5taW4gPSB0aGlzLmhvdXIgPSAwO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5zZWMgPSB0aGlzLm1pbiA9IHRoaXMuaG91ciA9IDA7XG4gIH1cblxuICB0aWNrKG9iaikge1xuICAgIG9iai5zZWMrKztcbiAgICBpZiAob2JqLnNlYyA9PT0gNjApIHtcbiAgICAgIG9iai5taW4gKz0gMTtcbiAgICAgIG9iai5zZWMgPSAwO1xuICAgIH1cbiAgICBpZiAob2JqLm1pbiA9PT0gNjApIHtcbiAgICAgIG9iai5ob3VyICs9IDE7XG4gICAgICBvYmoubWluID0gMDtcbiAgICB9XG4gICAgaWYgKG9iai5ob3VyID09PSAyNCkge1xuICAgICAgb2JqLmhvdXIgPSBvYmoubXNpbiA9IG9iai5zZWMgPSAwO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMudGltZXJJZCA9IHNldEludGVydmFsKHRoaXMudGljaywgMTAwMCwgdGhpcyk7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklkKTtcbiAgfVxuXG4gIGdldCBjdXJyZW50VGltZSgpIHtcbiAgICBsZXQgc0hvdXIgPSB0aGlzLmhvdXIgPCAxMCA/IGAwJHt0aGlzLmhvdXJ9YCA6IHRoaXMuaG91cjtcbiAgICBsZXQgdGltZVN0cmluZyA9IGAke3NIb3VyfTpgO1xuICAgIGxldCBzTWluID0gdGhpcy5taW4gPCAxMCA/IGAwJHt0aGlzLm1pbn1gIDogdGhpcy5taW47XG4gICAgdGltZVN0cmluZyArPSBgJHtzTWlufTpgO1xuICAgIGxldCBzU2VjID0gdGhpcy5zZWMgPCAxMCA/IGAwJHt0aGlzLnNlY31gIDogdGhpcy5zZWM7XG4gICAgdGltZVN0cmluZyArPSBgJHtzU2VjfWA7XG4gICAgcmV0dXJuIHRpbWVTdHJpbmc7XG4gIH1cbn1cblxuY2xhc3MgUmVuZGVyaW5nU3RvcHdhdGNoIGV4dGVuZHMgU3RvcHdhdGNoIHtcbiAgY29uc3RydWN0b3IoZWxJZCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5lbElkID0gZWxJZDtcbiAgfVxuXG4gIHRpY2sob2JqKSB7XG4gICAgc3VwZXIudGljayhvYmopO1xuICAgIGxldCB0aW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvYmouZWxJZCk7XG4gICAgdGltZUVsLmlubmVySFRNTCA9IFwiPGI+VGltZTo8L2I+IFwiICsgb2JqLmN1cnJlbnRUaW1lO1xuICB9XG59XG5cbmV4cG9ydCB7IFN0b3B3YXRjaCwgUmVuZGVyaW5nU3RvcHdhdGNoIH07XG4iLCJpbXBvcnQgeyByb2xsQ2FyZCB9IGZyb20gXCIuLi9ldmVudHMvY3JhZHMtZXZlbnRzLmpzXCI7XG5pbXBvcnQgeyBnYW1lU3RhdGUsIGdldEdhbWVSZXN1bHRzIH0gZnJvbSBcIi4vZ2FtZVN0YXRpc3RpY3MuanNcIjtcbmltcG9ydCB7IHNlbERpZkx2bCwgc2VsZWN0U2FyZFNldCB9IGZyb20gXCIuLi9ldmVudHMvc2V0dG5pZ3MtZXZlbnRzXCI7XG5pbXBvcnQgeyBuZXdHYW1lLCBvcGVuUmF0aW5nLCBvcGVuU2V0dGluZ3MgfSBmcm9tIFwiLi4vZXZlbnRzL2J1dHRvbnMtY2xpY2tzLmpzXCI7XG5pbXBvcnQge1xuICBnZXRGaWVsZFNpemUsXG4gIGxldmVsT2ZEaWZmaWN1bHR5LFxuICBnZXRDYXJkU2V0TmFtZSxcbn0gZnJvbSBcIi4vZ2FtZVNldHRpbmdzLmpzXCI7XG5pbXBvcnQgeyBwbGF5U291bmQgfSBmcm9tIFwiLi4vYWxnb3JpdGhtcy9zb3VuZHMuanNcIjtcblxuLy8gY3JlYXRlIHNldHRpbmdzIHNlbGVjdG9ycyBhbmQgYnV0dG9uc1xuY29uc3QgY3JlYXRlU2VsZWN0b3IgPSAoaW5FbCwgc2VsZWN0b3JMaXN0bmVyLCBwYXJhbWV0cnNBcnJheSwgYWN0aXZFbCkgPT4ge1xuICBjb25zdCBzZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHNlbGVjdG9yLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2V0dGluZ3Mtc2VsZWN0b3JcIik7XG5cbiAgbGV0IGluVGV4dCA9IFwiXCI7XG4gIHNlbGVjdG9yLm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIHNlbGVjdG9yTGlzdG5lcihzZWxlY3Rvci52YWx1ZSk7XG4gIH07XG5cbiAgcGFyYW1ldHJzQXJyYXkuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBpZiAoYWN0aXZFbCA9PT0gZWwpXG4gICAgICBpblRleHQgKz0gYDxvcHRpb24gc2VsZWN0ZWQgdmFsdWU9XCIke2VsfVwiID4ke2VsfTwvb3B0aW9uPmA7XG4gICAgZWxzZSBpblRleHQgKz0gYDxvcHRpb24gdmFsdWU9XCIke2VsfVwiPiR7ZWx9PC9vcHRpb24+YDtcbiAgfSk7XG4gIHNlbGVjdG9yLmlubmVySFRNTCA9IGluVGV4dDtcblxuICBpbkVsLmFwcGVuZChzZWxlY3Rvcik7XG59O1xuXG5jb25zdCBjcmVhdGVCYWNrQnRuID0gKGNvbnRleHQpID0+IHtcbiAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIHBsYXlTb3VuZChcImRpc3Qvc291bmQvYnV0dG9uQ2xpY2subXAzXCIpO1xuICAgIHJlbmRlckdhbWVNZW51KFwiZ2FtZS1tZW51XCIpO1xuICB9O1xuICBidXR0b24uY2xhc3NMaXN0LmFkZChcIm1lbnUtYnRuXCIpO1xuICBidXR0b24uaW5uZXJUZXh0ID0gXCJCYWNrXCI7XG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJhY2stdG8tbWFpbi1tZW51LWJ0blwiKTtcbiAgY29udGV4dC5hcHBlbmQoYnV0dG9uKTtcbn07XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIGlucHV0IHBhcmFtZXRlciAtIGVsZW1ldCB3aGljaCBtdXN0IGJlIHJlbW92ZWRcbmNvbnN0IHJlbW92ZUZpZWxkID0gKGVsZW1laW50SWQpID0+IHtcbiAgY29uc3QgcmVtb3ZlZEFjdGl2aXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVpbnRJZCk7XG4gIHJlbW92ZWRBY3Rpdml0eS5yZW1vdmUoKTtcbn07XG5cbmNvbnN0IHJlbmRlckdhbWVTZXR0aW5ncyA9ICgpID0+IHtcbiAgcmVtb3ZlRmllbGQoXCJnYW1lLW1lbnVcIik7XG4gIGNvbnN0IHdvcmtTcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29yay1zcGFjZVwiKTtcbiAgbGV0IHNldHRpbmdzTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNldHRpbmdzTWVudS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImdhbWUtbWVudVwiKTtcbiAgd29ya1NwYWNlLmFwcGVuZChzZXR0aW5nc01lbnUpO1xuXG4gIGNyZWF0ZVNlbGVjdG9yKFxuICAgIHNldHRpbmdzTWVudSxcbiAgICBzZWxEaWZMdmwsXG4gICAgW1wiRWFzeVwiLCBcIk1lZGl1bVwiLCBcIkhhcmRcIl0sXG4gICAgbGV2ZWxPZkRpZmZpY3VsdHlcbiAgKTtcbiAgY3JlYXRlU2VsZWN0b3IoXG4gICAgc2V0dGluZ3NNZW51LFxuICAgIHNlbGVjdFNhcmRTZXQsXG4gICAgW1wiQ2F0c1wiLCBcIkxlbmluXCJdLFxuICAgIGdldENhcmRTZXROYW1lXG4gICk7XG4gIGNyZWF0ZUJhY2tCdG4oc2V0dGluZ3NNZW51KTtcbn07XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBnYW1lIGZpZWxkXG5jb25zdCBhZGRJbmZvQmFyID0gKCkgPT4ge1xuICBjb25zdCBkb2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmstc3BhY2VcIik7XG4gIGNvbnN0IGdhbWVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGdhbWVGaWVsZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImdhbWUtZmllbGRcIik7XG4gIGdhbWVGaWVsZC5pbm5lckhUTUwgPSBgPHNwYW4gaWQ9XCJpbmZvQmFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJjb3VudENsaWNrXCI+PGI+TnVtYmVyIG9mIGNsaWNrczo8L2I+IDA8L3A+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwic3RvcHdhdGNoXCI+PGI+VGltZTo8L2I+IDAwOjAwOjAwPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5gO1xuICBkb2MuYXBwZW5kKGdhbWVGaWVsZCk7XG59O1xuXG5jb25zdCBhZGRDYXJkc09uRmllbGQgPSAoZmllbGRTaXplKSA9PiB7XG4gIGNvbnN0IGRvYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1maWVsZFwiKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkU2l6ZTsgaSsrKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgaWYgKGdldEZpZWxkU2l6ZSgpID09PSAxMikgZGl2LmNsYXNzTGlzdC5hZGQoXCJlYXN5XCIpO1xuICAgIGlmIChnZXRGaWVsZFNpemUoKSA9PT0gMTgpIGRpdi5jbGFzc0xpc3QuYWRkKFwibWVkaXVtXCIpO1xuICAgIGlmIChnZXRGaWVsZFNpemUoKSA9PT0gMjQpIGRpdi5jbGFzc0xpc3QuYWRkKFwiaGFyZFwiKTtcblxuICAgIC8vQWx0ZXJuYXRpdmUgc29sdXRpb24gLSB1c2UgRXZlbnQgZGVsZWdhdGlvbiBvbiB3b3JrLXNwYWNlXG4gICAgZGl2Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByb2xsQ2FyZChkaXYpO1xuICAgIH07XG4gICAgZGl2LnNldEF0dHJpYnV0ZShcImFjdGl2YXRlZFwiLCBmYWxzZSk7XG5cbiAgICBkaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7aX0tY2FyZGApO1xuICAgIGRpdi5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImZyb250LWNhcmRcIiBhY3RpdmF0ZWQ9XCJmYWxzZVwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYWNrLWNhcmRcIj48L2Rpdj5gO1xuICAgIGRvYy5hcHBlbmQoZGl2KTtcbiAgfVxufTtcblxuY29uc3QgZ2VuZXRhdGVHYW1lRmllbGQgPSAoZmllbGRTaXplKSA9PiB7XG4gIHJlbW92ZUZpZWxkKFwiZ2FtZS1tZW51XCIpO1xuICBhZGRJbmZvQmFyKCk7XG4gIGFkZENhcmRzT25GaWVsZChmaWVsZFNpemUpO1xufTtcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEdhbWUgbWVudVxuY29uc3QgcmVuZGVyR2FtZU1lbnUgPSAob2xkQWN0aXZpdHkpID0+IHtcbiAgcmVtb3ZlRmllbGQoYCR7b2xkQWN0aXZpdHl9YCk7XG4gIGNvbnN0IGRvYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29yay1zcGFjZVwiKTtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZ2FtZS1tZW51XCIpO1xuICBkaXYuaW5uZXJIVE1MID0gYDxidXR0b24gY2xhc3M9XCJtZW51LWJ0blwiIGlkPVwibmV3LWdhbWUtYnRuXCI+TmV3IEdhbWU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibWVudS1idG5cIiBpZD1cInJhdGluZy1idG5cIj5SYXRpbmc8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibWVudS1idG5cIiBpZD1cIm9wdGlvbnMtYnRuXCI+T3B0aW9uczwvYnV0dG9uPmA7XG4gIGRvYy5hcHBlbmQoZGl2KTtcbiAgYWRkR2FtZU1lbnVMaXN0bmVyKCk7XG59O1xuXG5jb25zdCBhZGRHYW1lTWVudUxpc3RuZXIgPSAoKSA9PiB7XG4gIGNvbnN0IG5ld0dhbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1nYW1lLWJ0blwiKTtcbiAgY29uc3QgcmF0aW5nQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYXRpbmctYnRuXCIpO1xuICBjb25zdCBvcHRpb25zQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcHRpb25zLWJ0blwiKTtcbiAgbmV3R2FtZUJ0bi5vbmNsaWNrID0gbmV3R2FtZTtcbiAgcmF0aW5nQnRuLm9uY2xpY2sgPSBvcGVuUmF0aW5nO1xuICBvcHRpb25zQnRuLm9uY2xpY2sgPSBvcGVuU2V0dGluZ3M7XG59O1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gcmF0aW5nXG5jb25zdCByZW5kZXJSYXRpbmcgPSAoKSA9PiB7XG4gIHJlbW92ZUZpZWxkKFwiZ2FtZS1tZW51XCIpO1xuICBjb25zdCB3b3JrU3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmstc3BhY2VcIik7XG4gIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJnYW1lLW1lbnVcIik7XG4gIHdvcmtTcGFjZS5hcHBlbmQoZGl2KTtcbiAgY29uc3QgcmF0aW5nTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1tZW51XCIpO1xuXG4gIGNvbnN0IGdhbWVSZXN1bHRzID0gZ2V0R2FtZVJlc3VsdHMoKTtcbiAgY29uc29sZS5sb2coZ2FtZVJlc3VsdHMpO1xuICBnYW1lUmVzdWx0cy5mb3JFYWNoKChlbGVtZW50LCBrZXkpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcGxheWVySW5mby5pbm5lclRleHQgPSBgJHtrZXl9ICR7ZWxlbWVudH1gO1xuICAgIHJhdGluZ01lbnUuYXBwZW5kKHBsYXllckluZm8pO1xuICB9KTtcbiAgY3JlYXRlQmFja0J0bihyYXRpbmdNZW51KTtcbn07XG5cbi8vXG5cbi8vIE1vZGFsIHdpbmRvd1xuY29uc3QgaGlkZGVuRW5kR2FtZVdpbmRvdyA9ICgpID0+IHtcbiAgY29uc3QgbW9kYWxXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsRGlhbG9nXCIpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5pY2stbmFtZVwiKS52YWx1ZSA9IFwiXCI7XG4gIG1vZGFsV2luZG93LnN0eWxlLnRvcCA9IFwiLTk5OXB4XCI7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNvbnN0IGJhY2tNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3Blbk1vZGFsXCIpO1xuICAgIGJhY2tNb2RhbC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgfSwgNTAwKTtcbn07XG5cbmNvbnN0IHNob3dFbmRHYW1lV2luZG93ID0gKCkgPT4ge1xuICBjb25zdCBiYWNrTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wZW5Nb2RhbFwiKTtcbiAgYmFja01vZGFsLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgY29uc3QgbW9kYWxXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsRGlhbG9nXCIpO1xuICBtb2RhbFdpbmRvdy5zdHlsZS50b3AgPSBcIjBweFwiO1xuICBtb2RhbFdpbmRvdy5jaGlsZE5vZGVzWzNdLmlubmVyVGV4dCA9IGBUcmF2ZWwgdGltZTogJHtnYW1lU3RhdGUuc3RvcHdhdGNoLmN1cnJlbnRUaW1lfWA7XG4gIG1vZGFsV2luZG93LmNoaWxkTm9kZXNbNV0uaW5uZXJUZXh0ID0gYE51bWJlciBvZiBDbGlja3M6ICR7Z2FtZVN0YXRlLmNvdW50Q2xpY2tzfWA7XG59O1xuLy9cblxuZXhwb3J0IHtcbiAgcmVuZGVyR2FtZVNldHRpbmdzLFxuICBnZW5ldGF0ZUdhbWVGaWVsZCxcbiAgc2hvd0VuZEdhbWVXaW5kb3csXG4gIHJlbmRlckdhbWVNZW51LFxuICBoaWRkZW5FbmRHYW1lV2luZG93LFxuICByZW5kZXJSYXRpbmcsXG59O1xuIiwiLyogZ2FtZSBzZXR0aW5ncyBhcmUgc3RvcmVkIGhlcmUgKi9cbi8qIFRoaXMgZmlsZSBtYXkgYmUgY29udmVydCB0byBqc29uIGlmIHlvdSBuZWVkIHRvIGNyZWF0ZSBzZXJ2ZXIgc2lkZSAqL1xuLy8gVE9ETzogcmV3cml0ZSB0aGlzIGNvZCB0byBPYmplY3QhISFcblxubGV0IGxldmVsT2ZEaWZmaWN1bHR5ID0gXCJFYXN5XCI7XG5sZXQgY2FyZFNldCA9IFwiQ2F0c1wiO1xuXG5jb25zdCBnZXRGaWVsZFNpemUgPSAoKSA9PiB7XG4gIHN3aXRjaCAobGV2ZWxPZkRpZmZpY3VsdHkpIHtcbiAgICBjYXNlIFwiRWFzeVwiOlxuICAgICAgcmV0dXJuIDEyO1xuICAgIGNhc2UgXCJNZWRpdW1cIjpcbiAgICAgIHJldHVybiAxODtcbiAgICBjYXNlIFwiSGFyZFwiOlxuICAgICAgcmV0dXJuIDI0O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gMTI7XG4gIH1cbn07XG5cbmNvbnN0IGdldENhcmRTZXROYW1lID0gKCkgPT4ge1xuICByZXR1cm4gY2FyZFNldDtcbn07XG5cbmNvbnN0IHNldENhcmRTZXQgPSAodmFsdWUpID0+IHtcbiAgY2FyZFNldCA9IHZhbHVlO1xufTtcblxuY29uc3Qgc2V0TGV2ZWwgPSAodmFsdWUpID0+IHtcbiAgbGV2ZWxPZkRpZmZpY3VsdHkgPSB2YWx1ZTtcbn07XG5cbmV4cG9ydCB7XG4gIGdldENhcmRTZXROYW1lLFxuICBnZXRGaWVsZFNpemUsXG4gIHNldExldmVsLFxuICBzZXRDYXJkU2V0LFxuICBsZXZlbE9mRGlmZmljdWx0eSxcbn07XG4iLCJpbXBvcnQgeyBSZW5kZXJpbmdTdG9wd2F0Y2ggfSBmcm9tIFwiLi4vYWxnb3JpdGhtcy9zdG9wd2F0Y2guanNcIjtcblxuY29uc3QgZ2FtZVN0YXRlID0ge1xuICB0b3RhbENvdW50VXBDYXJkczogMCxcbiAgY291bnRDbGlja3M6IDAsXG4gIHN0b3B3YXRjaDogbmV3IFJlbmRlcmluZ1N0b3B3YXRjaChcInN0b3B3YXRjaFwiKSxcbiAgcmVzZXQoKSB7XG4gICAgdGhpcy50b3RhbENvdW50VXBDYXJkcyA9IDA7XG4gICAgdGhpcy5jb3VudENsaWNrcyA9IDA7XG4gICAgdGhpcy5zdG9wd2F0Y2gucmVzZXQoKTtcbiAgfSxcbn07XG5cbmNvbnN0IHNhdmVHYW1lUmVzdWx0ID0gKCkgPT4ge1xuICBjb25zdCBwbGF5ZXJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuaWNrLW5hbWVcIikudmFsdWU7XG4gIGNvbnNvbGUubG9nKHBsYXllck5hbWUpO1xuXG4gIC8vIFRPRE8g0L/RgNC40LTRg9C80LDRgtGMLCDQutCw0Log0L3QsNGH0LjRgdC70Y/RgtGMINC+0YfQutC4XG4gIGNvbnN0IGNvdW50Q2xpY2tzID0gZ2FtZVN0YXRlLmNvdW50Q2xpY2tzOyAvLyDQv9C+0LvRg9GH0LXQvdC40LUg0LrQvtC70LjRh9C10YHRgtCy0LAg0L7Rh9C60L7QslxuICBjb25zdCB0cmV2ZWxUaW1lID0gZ2FtZVN0YXRlLnN0b3B3YXRjaC5jdXJyZW50VGltZTsgLy8g0L/QvtC70YPRh9C10L3QuNC1INGB0YLRgNC+0LrQuCDRgSDQutC+0LvQuNGH0LXRgdGC0LLQvtC8INGB0LXQutC90LRcbiAgLy8g0L/QvtC60LAg0YLRg9GCINCx0LDQu9Cy0LDQvdC60LAsINC90L4g0Y3RgtC+0YIg0LDQu9Cz0L7RgNC40YLQvCDQvdGD0LbQvdC+INCx0YPQtNC10YIg0YDQsNC30YDQsNCx0L7RgtCw0YLRjFxuICBjb25zdCBwbGF5ZXJQb2ludHMgPSBjb3VudENsaWNrcztcblxuICB0cnkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwbGF5ZXJOYW1lKSA9PT0gbnVsbCAmJiBwbGF5ZXJOYW1lICE9PSBcIlwiKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInNhdmUgdG8gc3RvcmlnZVwiKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHBsYXllck5hbWUsIHBsYXllclBvaW50cy50b1N0cmluZygpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb2xkQ291bnRQb2ludHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwbGF5ZXJOYW1lKTtcbiAgICAgIGNvbnNvbGUubG9nKG9sZENvdW50UG9pbnRzKTtcbiAgICAgIGlmIChwbGF5ZXJQb2ludHMgPiBwYXJzZUludChvbGRDb3VudFBvaW50cykpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHBsYXllck5hbWUsIHBsYXllclBvaW50cy50b1N0cmluZygpKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoZSA9PSBRVU9UQV9FWENFRURFRF9FUlIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwi0J/RgNC10LLRi9GI0LXQvSDQu9C40LzQuNGCXCIpO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgZ2V0R2FtZVJlc3VsdHMgPSAoKSA9PiB7XG4gIGNvbnN0IGdhbWVSYXRpbmcgPSBbbG9jYWxTdG9yYWdlLmxlbmd0aF07XG4gIGxldCBpbmQgPSAwO1xuICBmb3IgKGxldCBrZXkgaW4gbG9jYWxTdG9yYWdlKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb25zb2xlLmxvZyhgJHtrZXl9LCAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSl9YCk7XG4gICAgICBnYW1lUmF0aW5nW2luZF0gPSBba2V5LCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpXTtcbiAgICAgIGluZCsrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZ2FtZVJhdGluZztcbn07XG5cbmV4cG9ydCB7IGdhbWVTdGF0ZSwgc2F2ZUdhbWVSZXN1bHQsIGdldEdhbWVSZXN1bHRzIH07XG4iLCJpbXBvcnQgeyBnZXRDYXJkU2V0TmFtZSwgZ2V0RmllbGRTaXplIH0gZnJvbSBcIi4vZ2FtZVNldHRpbmdzLmpzXCI7XG5pbXBvcnQgeyByYW5kb21JbnRlZ2VyIH0gZnJvbSBcIi4uL2FsZ29yaXRobXMvbnVtZXJpYy5qc1wiO1xuaW1wb3J0IHsgZ2V0SnNvbkZyb21VcmwgfSBmcm9tIFwiLi4vYWxnb3JpdGhtcy9yZXF1ZXN0cy5qc1wiO1xuaW1wb3J0IHsgZ2FtZVN0YXRlIH0gZnJvbSBcIi4uL2VuZ2luZS9nYW1lU3RhdGlzdGljcy5qc1wiO1xuaW1wb3J0IHsgZ2VuZXRhdGVHYW1lRmllbGQgfSBmcm9tIFwiLi9nYW1lTGF5b3V0LmpzXCI7XG5pbXBvcnQgeyBwbGF5U291bmQgfSBmcm9tIFwiLi4vYWxnb3JpdGhtcy9zb3VuZHMuanNcIjtcblxuY29uc3QgR0FNRV9EQVRBX1VSTCA9IFwiL2Rpc3QvZGF0YS9nYW1lRGF0YS5qc29uXCI7XG5cbi8vIEl0J3MgZnVuY3Rpb25zIG5lZWQgZm9yIGZvcm1lZCBnYW1lIG1hcFxuLy8gdGhpcyBmdW5jdGlvbiBnZXQgSnNvbiBmcm9tIHNlcnZlciBhbmQgZm9ybWVkIG1hcCBhbnN3ZXIgd2l0aCBjYXJkcyBsaW5rc1xuY29uc3QgZ2V0Q2FyZHMgPSBhc3luYyAoZmllbGRTaXplLCBjYXJkU2V0TmFtZSkgPT4ge1xuICBjb25zdCBnYW1lRGF0YVJlc3BvbnNlID0gYXdhaXQgZ2V0SnNvbkZyb21VcmwoR0FNRV9EQVRBX1VSTCk7XG4gIGNvbnN0IHBpY3R1cmVTdG9yZSA9IG5ldyBNYXAoKTtcbiAgLy8g0JTQsNC90L3Ri9C5IHNldCDQvdGD0LbQtdC9INC00LvRjyDQvdC10LTQvtC/0YPRgdC60LAg0LTQvtCx0LDQstC70LXQvdC40Y8g0L/QvtCy0YLQvtGA0Y/RjtGJ0LjRhdGB0Y8g0LbQuyDQsiBtYXBcbiAgbGV0IGhhc0VsID0gbmV3IFNldCgpO1xuICBsZXQgaW5kZXggPSAwO1xuICB3aGlsZSAocGljdHVyZVN0b3JlLnNpemUgPCBmaWVsZFNpemUgLyAyKSB7XG4gICAgY29uc3QgaWQgPSByYW5kb21JbnRlZ2VyKDAsIDE0KTtcbiAgICBjb25zdCBsaW5rID0gZ2FtZURhdGFSZXNwb25zZVtjYXJkU2V0TmFtZV1baWRdW1wibGlua1wiXTtcbiAgICBpZiAoIWhhc0VsLmhhcyhpZCkpIHtcbiAgICAgIGhhc0VsLmFkZChpZCk7XG4gICAgICBwaWN0dXJlU3RvcmUuc2V0KGluZGV4LCBsaW5rKTtcbiAgICAgIGluZGV4Kys7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBpY3R1cmVTdG9yZTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlQ2FyZFBvc2l0aW9uID0gKGZpZWxkU2l6ZSkgPT4ge1xuICBsZXQgY2FyZFNldCA9IG5ldyBTZXQoKTtcbiAgbGV0IHBvc0FycmF5ID0gW107XG4gIGxldCBpbmRleCA9IDA7XG5cbiAgd2hpbGUgKGNhcmRTZXQuc2l6ZSA8IGZpZWxkU2l6ZSkge1xuICAgIGxldCBjb3VudFVuaXFFbCA9IDA7XG4gICAgLy8gR2VuZXJhdGUgdHdvIHVuaXEgcG9zIGZvciBlcXVhbCBjYXJkc1xuICAgIHdoaWxlIChjb3VudFVuaXFFbCA8IDIpIHtcbiAgICAgIGNvbnN0IHBvcyA9IHJhbmRvbUludGVnZXIoMCwgZmllbGRTaXplIC0gMSk7XG4gICAgICBpZiAoIWNhcmRTZXQuaGFzKHBvcykpIHtcbiAgICAgICAgY2FyZFNldC5hZGQocG9zKTtcbiAgICAgICAgcG9zQXJyYXlbcG9zXSA9IGluZGV4O1xuICAgICAgICBjb3VudFVuaXFFbCsrO1xuICAgICAgfVxuICAgIH1cbiAgICBpbmRleCsrO1xuICB9XG4gIGNvbnNvbGUubG9nKHBvc0FycmF5KTtcbiAgcmV0dXJuIHBvc0FycmF5O1xufTtcblxuY29uc3QgcmVuZGVyQmFja1NpZGUgPSAocG9zQXJyYXksIGNhcmRzTWFwKSA9PiB7XG4gIGNvbnNvbGUubG9nKGNhcmRzTWFwKTtcbiAgY29uc3QgZG9jID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWZpZWxkXCIpO1xuICBsZXQgaW5kZXggPSAwO1xuICBmb3IgKGxldCBub2RlIG9mIGRvYy5jaGlsZHJlbikge1xuICAgIGlmIChub2RlLnRhZ05hbWUgIT09IFwiU1BBTlwiKSB7XG4gICAgICBsZXQgbnVtT2ZDYXJkID0gcG9zQXJyYXlbaW5kZXhdO1xuICAgICAgbGV0IGxpbmsgPSBjYXJkc01hcC5nZXQobnVtT2ZDYXJkKTtcbiAgICAgIG5vZGUuY2hpbGRyZW5bMV0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2xpbmt9KWA7XG4gICAgICBub2RlLmNoaWxkcmVuWzFdLnN0eWxlLmJhY2tncm91bmRTaXplID0gXCIxMDAlXCI7XG4gICAgICBpbmRleCsrO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgY3JlYXRlR2FtZU1hdHJpeCA9IGFzeW5jIChmaWVsZFNpemUsIGNhcmRTZXROYW1lKSA9PiB7XG4gIGNvbnN0IHBpY3R1cmVTdG9yZSA9IGF3YWl0IGdldENhcmRzKGZpZWxkU2l6ZSwgY2FyZFNldE5hbWUpO1xuICBjb25zdCBwb3NBcnJheSA9IGdlbmVyYXRlQ2FyZFBvc2l0aW9uKGZpZWxkU2l6ZSwgcGljdHVyZVN0b3JlKTtcbiAgcmVuZGVyQmFja1NpZGUocG9zQXJyYXksIHBpY3R1cmVTdG9yZSk7XG59O1xuLy9cblxuY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xuICBwbGF5U291bmQoXCJkaXN0L3NvdW5kL2NhcmRzTGF5b3V0Lm1wM1wiKTtcbiAgY29uc3QgZmllbGRTaXplID0gZ2V0RmllbGRTaXplKCk7XG4gIGNvbnN0IGNhcmRTZXROYW1lID0gZ2V0Q2FyZFNldE5hbWUoKTtcbiAgZ2VuZXRhdGVHYW1lRmllbGQoZmllbGRTaXplKTtcbiAgY3JlYXRlR2FtZU1hdHJpeChmaWVsZFNpemUsIGNhcmRTZXROYW1lKTtcbiAgZ2FtZVN0YXRlLnN0b3B3YXRjaC5zdGFydCgpO1xufTtcblxuZXhwb3J0IHsgc3RhcnRHYW1lIH07XG4iLCJpbXBvcnQge1xuICByZW5kZXJHYW1lU2V0dGluZ3MsXG4gIHJlbmRlckdhbWVNZW51LFxuICBoaWRkZW5FbmRHYW1lV2luZG93LFxuICByZW5kZXJSYXRpbmcsXG59IGZyb20gXCIuLi9lbmdpbmUvZ2FtZUxheW91dC5qc1wiO1xuaW1wb3J0IHsgc3RhcnRHYW1lIH0gZnJvbSBcIi4uL2VuZ2luZS9uZXdHYW1lLmpzXCI7XG5pbXBvcnQgeyBnYW1lU3RhdGUsIHNhdmVHYW1lUmVzdWx0IH0gZnJvbSBcIi4uL2VuZ2luZS9nYW1lU3RhdGlzdGljcy5qc1wiO1xuaW1wb3J0IHsgcGxheVNvdW5kIH0gZnJvbSBcIi4uL2FsZ29yaXRobXMvc291bmRzLmpzXCI7XG5cbi8vIFRoaXMgYnRuIHJlbW92ZWQgZ2FtZS1tZW51IGFuZCB1cGxvYWRlZCBnYW1lLWZpZWxkIHdpY2ggY2FyZHNcbmNvbnN0IG5ld0dhbWUgPSAoKSA9PiB7XG4gIHBsYXlTb3VuZChcImRpc3Qvc291bmQvYnV0dG9uQ2xpY2subXAzXCIpO1xuICBzdGFydEdhbWUoKTtcbn07XG5cbmNvbnN0IG9wZW5TZXR0aW5ncyA9ICgpID0+IHtcbiAgcGxheVNvdW5kKFwiZGlzdC9zb3VuZC9idXR0b25DbGljay5tcDNcIik7XG4gIHJlbmRlckdhbWVTZXR0aW5ncygpO1xufTtcblxuY29uc3Qgb3BlblJhdGluZyA9ICgpID0+IHtcbiAgcGxheVNvdW5kKFwiZGlzdC9zb3VuZC9idXR0b25DbGljay5tcDNcIik7XG4gIHJlbmRlclJhdGluZygpO1xufTtcblxuY29uc3QgZW5kR2FtZSA9ICgpID0+IHtcbiAgcGxheVNvdW5kKFwiZGlzdC9zb3VuZC9idXR0b25DbGljay5tcDNcIik7XG4gIHNhdmVHYW1lUmVzdWx0KCk7XG4gIGdhbWVTdGF0ZS5yZXNldCgpO1xuICBoaWRkZW5FbmRHYW1lV2luZG93KCk7XG4gIHNldFRpbWVvdXQocmVuZGVyR2FtZU1lbnUsIDMwMCwgXCJnYW1lLWZpZWxkXCIpO1xuICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgeyBuZXdHYW1lLCBvcGVuUmF0aW5nLCBvcGVuU2V0dGluZ3MsIGVuZEdhbWUgfTtcbiIsImltcG9ydCB7IGdldEZpZWxkU2l6ZSB9IGZyb20gXCIuLi9lbmdpbmUvZ2FtZVNldHRpbmdzLmpzXCI7XG5pbXBvcnQgeyBnYW1lU3RhdGUgfSBmcm9tIFwiLi4vZW5naW5lL2dhbWVTdGF0aXN0aWNzLmpzXCI7XG5pbXBvcnQgeyBzaG93RW5kR2FtZVdpbmRvdyB9IGZyb20gXCIuLi9lbmdpbmUvZ2FtZUxheW91dC5qc1wiO1xuaW1wb3J0IHsgcGxheVNvdW5kIH0gZnJvbSBcIi4uL2FsZ29yaXRobXMvc291bmRzLmpzXCI7XG5cbmNvbnN0IGNsaWNrQ291bnRlciA9IChjb3VudCkgPT4ge1xuICBjb25zdCBjbGlja0JhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291bnRDbGlja1wiKTtcbiAgY2xpY2tCYXIuaW5uZXJIVE1MID0gYDxiPk51bWJlciBvZiBjbGlja3M6PC9iPiAke2NvdW50fWA7XG59O1xuXG5jb25zdCBjaGVja0NhcmRzTWF0Y2hlcyA9ICgpID0+IHtcbiAgY29uc3QgaW52ZXJ0ZWTQoWFyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbYWN0aXZhdGVkPVwidHJ1ZVwiXWApO1xuICAvLyBJbiB0aGlzIHZlcnNpb24gY29tcGFyaXNvbiBpcyBwZXJmb3JtZWQgZm9yIHVybCB0byBiYWNrcm91bmQtaW1hZ2VcbiAgLy8gVGhpcyBzb2x1dGlvbiBjYW4gYmUgcmVwbGFjZWQgYnkgY29tcGFyaXNvbiBieSBpZFxuICBjb25zdCBjYXJkMUJhY2sgPSBpbnZlcnRlZNChYXJkc1swXS5sYXN0Q2hpbGQ7XG4gIGNvbnN0IGNhcmQyQmFjayA9IGludmVydGVk0KFhcmRzWzFdLmxhc3RDaGlsZDtcbiAgaWYgKGNhcmQxQmFjay5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPT09IGNhcmQyQmFjay5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UpIHtcbiAgICBpbnZlcnRlZNChYXJkc1swXS5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCB0cnVlKTtcbiAgICBpbnZlcnRlZNChYXJkc1sxXS5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCB0cnVlKTtcbiAgICBnYW1lU3RhdGUudG90YWxDb3VudFVwQ2FyZHMgKz0gMjtcbiAgICBpbnZlcnRlZNChYXJkc1swXS5zZXRBdHRyaWJ1dGUoXCJhY3RpdmF0ZWRcIiwgZmFsc2UpO1xuICAgIGludmVydGVk0KFhcmRzWzFdLnNldEF0dHJpYnV0ZShcImFjdGl2YXRlZFwiLCBmYWxzZSk7XG4gICAgc2V0VGltZW91dChjaGVja0VuZEdhbWUsIDEwMDApO1xuICB9IGVsc2Uge1xuICAgIHJvbGxEaXNhYmxlZCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaW52ZXJ0ZWTQoWFyZHNbMF0uc2V0QXR0cmlidXRlKFwiYWN0aXZhdGVkXCIsIGZhbHNlKTtcbiAgICAgIGludmVydGVk0KFhcmRzWzFdLnNldEF0dHJpYnV0ZShcImFjdGl2YXRlZFwiLCBmYWxzZSk7XG4gICAgfSwgMTUwMCk7XG4gICAgc2V0VGltZW91dChyb2xsRW5hYmxlZCwgMjAwMCk7XG4gIH1cbn07XG5cbmNvbnN0IHJvbGxEaXNhYmxlZCA9ICgpID0+IHtcbiAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRcIik7XG4gIGNhcmRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLm9uY2xpY2sgPSBudWxsO1xuICB9KTtcbn07XG5cbmNvbnN0IHJvbGxFbmFibGVkID0gKCkgPT4ge1xuICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FyZFwiKTtcbiAgY2FyZHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJvbGxDYXJkKGl0ZW0pO1xuICAgIH07XG4gIH0pO1xufTtcblxuY29uc3QgY2hlY2tFbmRHYW1lID0gKCkgPT4ge1xuICBpZiAoZ2V0RmllbGRTaXplKCkgPT0gZ2FtZVN0YXRlLnRvdGFsQ291bnRVcENhcmRzKSB7XG4gICAgcGxheVNvdW5kKFwiZGlzdC9zb3VuZC9lbmRHYW1lLm1wM1wiKTtcbiAgICBnYW1lU3RhdGUuc3RvcHdhdGNoLnN0b3AoKTtcbiAgICBzaG93RW5kR2FtZVdpbmRvdygpO1xuICB9XG59O1xuXG5sZXQgY291bnRVcENhcmRzID0gMDtcbmNvbnN0IHJvbGxDYXJkID0gKGRpdikgPT4ge1xuICAvLyB0aGlzIGNvZGUgd29yayBvbmx5IHdpdGggbm9uIHNlbGVjdGVkIGFuZCBub3QgYWN0aXZhdGVkIGZ1bmN0aW9uc1xuICBpZiAoXG4gICAgIWRpdi5oYXNBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiKSAmJlxuICAgIGRpdi5nZXRBdHRyaWJ1dGUoXCJhY3RpdmF0ZWRcIikgPT09IFwiZmFsc2VcIlxuICApIHtcbiAgICBwbGF5U291bmQoXCJkaXN0L3NvdW5kL3VwQ2FyZC5tcDNcIik7XG4gICAgZ2FtZVN0YXRlLmNvdW50Q2xpY2tzICs9IDE7XG4gICAgY2xpY2tDb3VudGVyKGdhbWVTdGF0ZS5jb3VudENsaWNrcyk7XG4gICAgY29uc29sZS5sb2coZ2FtZVN0YXRlKTtcblxuICAgIGlmIChjb3VudFVwQ2FyZHMgPCAyKSB7XG4gICAgICBkaXYuc2V0QXR0cmlidXRlKFwiYWN0aXZhdGVkXCIsIHRydWUpO1xuICAgICAgY291bnRVcENhcmRzKys7XG4gICAgfVxuXG4gICAgaWYgKGNvdW50VXBDYXJkcyA9PSAyKSB7XG4gICAgICBjb3VudFVwQ2FyZHMgPSAwO1xuICAgICAgY2hlY2tDYXJkc01hdGNoZXMoKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCB7IHJvbGxDYXJkIH07XG4iLCJpbXBvcnQgeyBzZXRMZXZlbCwgc2V0Q2FyZFNldCB9IGZyb20gXCIuLi9lbmdpbmUvZ2FtZVNldHRpbmdzLmpzXCI7XG5cbmNvbnN0IHNlbERpZkx2bCA9ICh2YWx1ZSkgPT4ge1xuICBzZXRMZXZlbCh2YWx1ZSk7XG59O1xuXG5jb25zdCBzZWxlY3RTYXJkU2V0ID0gKHZhbHVlKSA9PiB7XG4gIHNldENhcmRTZXQodmFsdWUpO1xufTtcblxuZXhwb3J0IHsgc2VsRGlmTHZsLCBzZWxlY3RTYXJkU2V0IH07XG4iLCJpbXBvcnQge1xuICBuZXdHYW1lLFxuICBvcGVuUmF0aW5nLFxuICBvcGVuU2V0dGluZ3MsXG4gIGVuZEdhbWUsXG59IGZyb20gXCIuL2V2ZW50cy9idXR0b25zLWNsaWNrcy5qc1wiO1xuaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzXCI7XG5pbXBvcnQgeyBzaG93RW5kR2FtZVdpbmRvdyB9IGZyb20gXCIuL2VuZ2luZS9nYW1lTGF5b3V0LmpzXCI7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGNvbnN0IG5ld0dhbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1nYW1lLWJ0blwiKTtcbiAgY29uc3QgcmF0aW5nQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYXRpbmctYnRuXCIpO1xuICBjb25zdCBvcHRpb25zQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcHRpb25zLWJ0blwiKTtcbiAgY29uc3QgZW5kR2FtZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxEaWFsb2dcIik7XG4gIG5ld0dhbWVCdG4ub25jbGljayA9IG5ld0dhbWU7XG4gIHJhdGluZ0J0bi5vbmNsaWNrID0gb3BlblJhdGluZztcbiAgb3B0aW9uc0J0bi5vbmNsaWNrID0gb3BlblNldHRpbmdzO1xuICBlbmRHYW1lQnRuLm9uc3VibWl0ID0gZW5kR2FtZTtcbiAgLy9zaG93RW5kR2FtZVdpbmRvdygpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
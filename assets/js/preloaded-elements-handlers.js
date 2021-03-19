/*! pro-elements - v3.2.0 - 14-03-2021 */
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["preloaded-elements-handlers"],{

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/define-properties.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!*********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/get-own-property-descriptors.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/get-own-property-symbols.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/parse-int.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/promise.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _Promise = __webpack_require__(/*! ../core-js/promise */ "../node_modules/@babel/runtime-corejs2/core-js/promise.js");

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
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
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

/***/ "../node_modules/@babel/runtime-corejs2/helpers/objectSpread2.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/objectSpread2.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _Object$defineProperties = __webpack_require__(/*! ../core-js/object/define-properties */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");

var _Object$getOwnPropertyDescriptors = __webpack_require__(/*! ../core-js/object/get-own-property-descriptors */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$getOwnPropertySymbols = __webpack_require__(/*! ../core-js/object/get-own-property-symbols */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");

var _Object$keys = __webpack_require__(/*! ../core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var defineProperty = __webpack_require__(/*! ./defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) {
  var keys = _Object$keys(object);

  if (_Object$getOwnPropertySymbols) {
    var symbols = _Object$getOwnPropertySymbols(object);

    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return _Object$getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        defineProperty(target, key, source[key]);
      });
    } else if (_Object$getOwnPropertyDescriptors) {
      _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

module.exports = _objectSpread2;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/define-properties.js":
/*!**********************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/define-properties.js ***!
  \**********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es6.object.define-properties */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.define-properties.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperties(T, D) {
  return $Object.defineProperties(T, D);
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/get-own-property-descriptors.js":
/*!*********************************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/get-own-property-descriptors.js ***!
  \*********************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.object.get-own-property-descriptors */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.object.get-own-property-descriptors.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object.getOwnPropertyDescriptors;


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/get-own-property-symbols.js":
/*!*****************************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/get-own-property-symbols.js ***!
  \*****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es6.symbol */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.symbol.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object.getOwnPropertySymbols;


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/parse-int.js":
/*!*******************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/parse-int.js ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../modules/es6.parse-int */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.parse-int.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").parseInt;


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/promise.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/promise.js ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../modules/es6.object.to-string */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.promise */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.promise.js");
__webpack_require__(/*! ../modules/es7.promise.finally */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.promise.finally.js");
__webpack_require__(/*! ../modules/es7.promise.try */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.promise.try.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Promise;


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-instance.js":
/*!***************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-instance.js ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_classof.js":
/*!***********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_classof.js ***!
  \***********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_create-property.js":
/*!*******************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_create-property.js ***!
  \*******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_for-of.js":
/*!**********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_for-of.js ***!
  \**********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ctx = __webpack_require__(/*! ./_ctx */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array-iter.js":
/*!*****************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array-iter.js ***!
  \*****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-call.js":
/*!*************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-call.js ***!
  \*************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-detect.js":
/*!***************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-detect.js ***!
  \***************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ITERATOR = __webpack_require__(/*! ./_wks */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_microtask.js":
/*!*************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_microtask.js ***!
  \*************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var macrotask = __webpack_require__(/*! ./_task */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_new-promise-capability.js":
/*!**************************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_new-promise-capability.js ***!
  \**************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_own-keys.js":
/*!************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_own-keys.js ***!
  \************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(/*! ./_object-gopn */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var Reflect = __webpack_require__(/*! ./_global */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_parse-int.js":
/*!*************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_parse-int.js ***!
  \*************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $parseInt = __webpack_require__(/*! ./_global */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").parseInt;
var $trim = __webpack_require__(/*! ./_string-trim */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-trim.js").trim;
var ws = __webpack_require__(/*! ./_string-ws */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-ws.js");
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_perform.js":
/*!***********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_perform.js ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_promise-resolve.js":
/*!*******************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_promise-resolve.js ***!
  \*******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine-all.js":
/*!****************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine-all.js ***!
  \****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hide = __webpack_require__(/*! ./_hide */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-species.js":
/*!***************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-species.js ***!
  \***************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ./_global */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var dP = __webpack_require__(/*! ./_object-dp */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_species-constructor.js":
/*!***********************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_species-constructor.js ***!
  \***********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-trim.js":
/*!***************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-trim.js ***!
  \***************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var defined = __webpack_require__(/*! ./_defined */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js");
var fails = __webpack_require__(/*! ./_fails */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js");
var spaces = __webpack_require__(/*! ./_string-ws */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-ws.js");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-ws.js":
/*!*************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-ws.js ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_task.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_task.js ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ctx = __webpack_require__(/*! ./_ctx */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_user-agent.js":
/*!**************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_user-agent.js ***!
  \**************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!***************************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \***************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ./_classof */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.define-properties.js":
/*!*******************************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.define-properties.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperties: __webpack_require__(/*! ./_object-dps */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dps.js") });


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.parse-int.js":
/*!****************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.parse-int.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var $parseInt = __webpack_require__(/*! ./_parse-int */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_parse-int.js");
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.promise.js":
/*!**************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.promise.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_species-constructor.js");
var task = __webpack_require__(/*! ./_task */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_task.js").set;
var microtask = __webpack_require__(/*! ./_microtask */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.object.get-own-property-descriptors.js":
/*!******************************************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.object.get-own-property-descriptors.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(/*! ./_export */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var ownKeys = __webpack_require__(/*! ./_own-keys */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_own-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopd.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_create-property.js");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.promise.finally.js":
/*!**********************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.promise.finally.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.promise.try.js":
/*!******************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.promise.try.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(/*! ./_export */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_perform.js");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "../node_modules/@babel/runtime/regenerator/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/@babel/runtime/regenerator/index.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "../node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "../assets/dev/js/frontend/preloaded-elements-handlers.js":
/*!****************************************************************!*\
  !*** ../assets/dev/js/frontend/preloaded-elements-handlers.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread2 */ "../node_modules/@babel/runtime-corejs2/helpers/objectSpread2.js"));

var _frontendLegacy = _interopRequireDefault(__webpack_require__(/*! modules/animated-headline/assets/js/frontend/frontend-legacy */ "../modules/animated-headline/assets/js/frontend/frontend-legacy.js"));

var _frontendLegacy2 = _interopRequireDefault(__webpack_require__(/*! modules/carousel/assets/js/frontend/frontend-legacy */ "../modules/carousel/assets/js/frontend/frontend-legacy.js"));

var _frontendLegacy3 = _interopRequireDefault(__webpack_require__(/*! modules/countdown/assets/js/frontend/frontend-legacy */ "../modules/countdown/assets/js/frontend/frontend-legacy.js"));

var _frontendLegacy4 = _interopRequireDefault(__webpack_require__(/*! modules/forms/assets/js/frontend/frontend-legacy */ "../modules/forms/assets/js/frontend/frontend-legacy.js"));

var _frontendLegacy5 = _interopRequireDefault(__webpack_require__(/*! modules/gallery/assets/js/frontend/frontend-legacy */ "../modules/gallery/assets/js/frontend/frontend-legacy.js"));

var _frontendLegacy6 = _interopRequireDefault(__webpack_require__(/*! modules/lottie/assets/js/frontend/frontend-legacy */ "../modules/lottie/assets/js/frontend/frontend-legacy.js"));

var _frontendLegacy7 = _interopRequireDefault(__webpack_require__(/*! modules/nav-menu/assets/js/frontend/frontend-legacy */ "../modules/nav-menu/assets/js/frontend/frontend-legacy.js"));

var _frontendLegacy8 = _interopRequireDefault(__webpack_require__(/*! modules/popup/assets/js/frontend/frontend-legacy */ "../modules/popup/assets/js/frontend/frontend-legacy.js"));

var _frontendLegacy9 = _interopRequireDefault(__webpack_require__(/*! modules/posts/assets/js/frontend/frontend-legacy */ "../modules/posts/assets/js/frontend/frontend-legacy.js"));

var _frontendLegacy10 = _interopRequireDefault(__webpack_require__(/*! modules/share-buttons/assets/js/frontend/frontend-legacy */ "../modules/share-buttons/assets/js/frontend/frontend-legacy.js"));

var _frontendLegacy11 = _interopRequireDefault(__webpack_require__(/*! modules/slides/assets/js/frontend/frontend-legacy */ "../modules/slides/assets/js/frontend/frontend-legacy.js"));

var _frontendLegacy12 = _interopRequireDefault(__webpack_require__(/*! modules/social/assets/js/frontend/frontend-legacy */ "../modules/social/assets/js/frontend/frontend-legacy.js"));

var _frontendLegacy13 = _interopRequireDefault(__webpack_require__(/*! modules/table-of-contents/assets/js/frontend/frontend-legacy */ "../modules/table-of-contents/assets/js/frontend/frontend-legacy.js"));

var _frontendLegacy14 = _interopRequireDefault(__webpack_require__(/*! modules/theme-builder/assets/js/frontend/frontend-legacy */ "../modules/theme-builder/assets/js/frontend/frontend-legacy.js"));

var _frontendLegacy15 = _interopRequireDefault(__webpack_require__(/*! modules/theme-elements/assets/js/frontend/frontend-legacy */ "../modules/theme-elements/assets/js/frontend/frontend-legacy.js"));

var _frontendLegacy16 = _interopRequireDefault(__webpack_require__(/*! modules/woocommerce/assets/js/frontend/frontend-legacy */ "../modules/woocommerce/assets/js/frontend/frontend-legacy.js"));

var extendDefaultHandlers = function extendDefaultHandlers(defaultHandlers) {
  var handlers = {
    animatedText: _frontendLegacy.default,
    carousel: _frontendLegacy2.default,
    countdown: _frontendLegacy3.default,
    form: _frontendLegacy4.default,
    gallery: _frontendLegacy5.default,
    lottie: _frontendLegacy6.default,
    nav_menu: _frontendLegacy7.default,
    popup: _frontendLegacy8.default,
    posts: _frontendLegacy9.default,
    share_buttons: _frontendLegacy10.default,
    slides: _frontendLegacy11.default,
    social: _frontendLegacy12.default,
    themeBuilder: _frontendLegacy14.default,
    themeElements: _frontendLegacy15.default,
    woocommerce: _frontendLegacy16.default,
    tableOfContents: _frontendLegacy13.default
  };
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, defaultHandlers), handlers);
};

elementorProFrontend.on('elementor-pro/modules/init:before', function () {
  elementorFrontend.hooks.addFilter('elementor-pro/frontend/handlers', extendDefaultHandlers);
});

/***/ }),

/***/ "../assets/dev/js/frontend/utils/scroll.js":
/*!*************************************************!*\
  !*** ../assets/dev/js/frontend/utils/scroll.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

if (window.elementorCommon) {
  window.elementorCommon.helpers.softDeprecated('Scroll util from "/dev/js/frontend/utils/scroll"', '3.1.0', 'elementorModules.utils.Scroll');
}

var _default = elementorModules.utils.Scroll;
exports.default = _default;

/***/ }),

/***/ "../modules/animated-headline/assets/js/frontend/frontend-legacy.js":
/*!**************************************************************************!*\
  !*** ../modules/animated-headline/assets/js/frontend/frontend-legacy.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _animatedHeadlines = _interopRequireDefault(__webpack_require__(/*! ./handlers/animated-headlines */ "../modules/animated-headline/assets/js/frontend/handlers/animated-headlines.js"));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this);
    elementorFrontend.elementsHandler.attachHandler('animated-headline', _animatedHeadlines.default);
    return _this;
  }

  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),

/***/ "../modules/animated-headline/assets/js/frontend/handlers/animated-headlines.js":
/*!**************************************************************************************!*\
  !*** ../modules/animated-headline/assets/js/frontend/handlers/animated-headlines.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(/*! core-js/modules/es6.regexp.split */ "../node_modules/core-js/modules/es6.regexp.split.js");

__webpack_require__(/*! core-js/modules/es6.array.find */ "../node_modules/core-js/modules/es6.array.find.js");

var _scroll = _interopRequireDefault(__webpack_require__(/*! elementor-pro/frontend/utils/scroll */ "../assets/dev/js/frontend/utils/scroll.js"));

var _default = elementorModules.frontend.handlers.Base.extend({
  svgPaths: {
    circle: ['M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7'],
    underline_zigzag: ['M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9'],
    x: ['M497.4,23.9C301.6,40,155.9,80.6,4,144.4', 'M14.1,27.6c204.5,20.3,393.8,74,467.3,111.7'],
    strikethrough: ['M3,75h493.5'],
    curly: ['M3,146.1c17.1-8.8,33.5-17.8,51.4-17.8c15.6,0,17.1,18.1,30.2,18.1c22.9,0,36-18.6,53.9-18.6 c17.1,0,21.3,18.5,37.5,18.5c21.3,0,31.8-18.6,49-18.6c22.1,0,18.8,18.8,36.8,18.8c18.8,0,37.5-18.6,49-18.6c20.4,0,17.1,19,36.8,19 c22.9,0,36.8-20.6,54.7-18.6c17.7,1.4,7.1,19.5,33.5,18.8c17.1,0,47.2-6.5,61.1-15.6'],
    diagonal: ['M13.5,15.5c131,13.7,289.3,55.5,475,125.5'],
    double: ['M8.4,143.1c14.2-8,97.6-8.8,200.6-9.2c122.3-0.4,287.5,7.2,287.5,7.2', 'M8,19.4c72.3-5.3,162-7.8,216-7.8c54,0,136.2,0,267,7.8'],
    double_underline: ['M5,125.4c30.5-3.8,137.9-7.6,177.3-7.6c117.2,0,252.2,4.7,312.7,7.6', 'M26.9,143.8c55.1-6.1,126-6.3,162.2-6.1c46.5,0.2,203.9,3.2,268.9,6.4'],
    underline: ['M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7']
  },
  getDefaultSettings: function getDefaultSettings() {
    var iterationDelay = this.getElementSettings('rotate_iteration_delay'),
        settings = {
      animationDelay: iterationDelay || 2500,
      //letters effect
      lettersDelay: iterationDelay * 0.02 || 50,
      //typing effect
      typeLettersDelay: iterationDelay * 0.06 || 150,
      selectionDuration: iterationDelay * 0.2 || 500,
      //clip effect
      revealDuration: iterationDelay * 0.24 || 600,
      revealAnimationDelay: iterationDelay * 0.6 || 1500,
      // Highlighted headline
      highlightAnimationDuration: this.getElementSettings('highlight_animation_duration') || 1200,
      highlightAnimationDelay: this.getElementSettings('highlight_iteration_delay') || 8000
    };
    settings.typeAnimationDelay = settings.selectionDuration + 800;
    settings.selectors = {
      headline: '.elementor-headline',
      dynamicWrapper: '.elementor-headline-dynamic-wrapper',
      dynamicText: '.elementor-headline-dynamic-text'
    };
    settings.classes = {
      dynamicText: 'elementor-headline-dynamic-text',
      dynamicLetter: 'elementor-headline-dynamic-letter',
      textActive: 'elementor-headline-text-active',
      textInactive: 'elementor-headline-text-inactive',
      letters: 'elementor-headline-letters',
      animationIn: 'elementor-headline-animation-in',
      typeSelected: 'elementor-headline-typing-selected',
      activateHighlight: 'e-animated',
      hideHighlight: 'e-hide-highlight'
    };
    return settings;
  },
  getDefaultElements: function getDefaultElements() {
    var selectors = this.getSettings('selectors');
    return {
      $headline: this.$element.find(selectors.headline),
      $dynamicWrapper: this.$element.find(selectors.dynamicWrapper),
      $dynamicText: this.$element.find(selectors.dynamicText)
    };
  },
  getNextWord: function getNextWord($word) {
    return $word.is(':last-child') ? $word.parent().children().eq(0) : $word.next();
  },
  switchWord: function switchWord($oldWord, $newWord) {
    $oldWord.removeClass('elementor-headline-text-active').addClass('elementor-headline-text-inactive');
    $newWord.removeClass('elementor-headline-text-inactive').addClass('elementor-headline-text-active');
    this.setDynamicWrapperWidth($newWord);
  },
  singleLetters: function singleLetters() {
    var classes = this.getSettings('classes');
    this.elements.$dynamicText.each(function () {
      var $word = jQuery(this),
          letters = $word.text().split(''),
          isActive = $word.hasClass(classes.textActive);
      $word.empty();
      letters.forEach(function (letter) {
        var $letter = jQuery('<span>', {
          class: classes.dynamicLetter
        }).text(letter);

        if (isActive) {
          $letter.addClass(classes.animationIn);
        }

        $word.append($letter);
      });
      $word.css('opacity', 1);
    });
  },
  showLetter: function showLetter($letter, $word, bool, duration) {
    var self = this,
        classes = this.getSettings('classes');
    $letter.addClass(classes.animationIn);

    if (!$letter.is(':last-child')) {
      setTimeout(function () {
        self.showLetter($letter.next(), $word, bool, duration);
      }, duration);
    } else if (!bool) {
      setTimeout(function () {
        self.hideWord($word);
      }, self.getSettings('animationDelay'));
    }
  },
  hideLetter: function hideLetter($letter, $word, bool, duration) {
    var self = this,
        settings = this.getSettings();
    $letter.removeClass(settings.classes.animationIn);

    if (!$letter.is(':last-child')) {
      setTimeout(function () {
        self.hideLetter($letter.next(), $word, bool, duration);
      }, duration);
    } else if (bool) {
      setTimeout(function () {
        self.hideWord(self.getNextWord($word));
      }, self.getSettings('animationDelay'));
    }
  },
  showWord: function showWord($word, $duration) {
    var self = this,
        settings = self.getSettings(),
        animationType = self.getElementSettings('animation_type');

    if ('typing' === animationType) {
      self.showLetter($word.find('.' + settings.classes.dynamicLetter).eq(0), $word, false, $duration);
      $word.addClass(settings.classes.textActive).removeClass(settings.classes.textInactive);
    } else if ('clip' === animationType) {
      self.elements.$dynamicWrapper.animate({
        width: $word.width() + 10
      }, settings.revealDuration, function () {
        setTimeout(function () {
          self.hideWord($word);
        }, settings.revealAnimationDelay);
      });
    }
  },
  hideWord: function hideWord($word) {
    var self = this,
        settings = self.getSettings(),
        classes = settings.classes,
        letterSelector = '.' + classes.dynamicLetter,
        animationType = self.getElementSettings('animation_type'),
        nextWord = self.getNextWord($word);

    if (!this.isLoopMode && $word.is(':last-child')) {
      return;
    }

    if ('typing' === animationType) {
      self.elements.$dynamicWrapper.addClass(classes.typeSelected);
      setTimeout(function () {
        self.elements.$dynamicWrapper.removeClass(classes.typeSelected);
        $word.addClass(settings.classes.textInactive).removeClass(classes.textActive).children(letterSelector).removeClass(classes.animationIn);
      }, settings.selectionDuration);
      setTimeout(function () {
        self.showWord(nextWord, settings.typeLettersDelay);
      }, settings.typeAnimationDelay);
    } else if (self.elements.$headline.hasClass(classes.letters)) {
      var bool = $word.children(letterSelector).length >= nextWord.children(letterSelector).length;
      self.hideLetter($word.find(letterSelector).eq(0), $word, bool, settings.lettersDelay);
      self.showLetter(nextWord.find(letterSelector).eq(0), nextWord, bool, settings.lettersDelay);
      self.setDynamicWrapperWidth(nextWord);
    } else if ('clip' === animationType) {
      self.elements.$dynamicWrapper.animate({
        width: '2px'
      }, settings.revealDuration, function () {
        self.switchWord($word, nextWord);
        self.showWord(nextWord);
      });
    } else {
      self.switchWord($word, nextWord);
      setTimeout(function () {
        self.hideWord(nextWord);
      }, settings.animationDelay);
    }
  },
  setDynamicWrapperWidth: function setDynamicWrapperWidth($word) {
    var animationType = this.getElementSettings('animation_type');

    if ('clip' !== animationType && 'typing' !== animationType) {
      this.elements.$dynamicWrapper.css('width', $word.width());
    }
  },
  animateHeadline: function animateHeadline() {
    var self = this,
        animationType = self.getElementSettings('animation_type'),
        $dynamicWrapper = self.elements.$dynamicWrapper;

    if ('clip' === animationType) {
      $dynamicWrapper.width($dynamicWrapper.width() + 10);
    } else if ('typing' !== animationType) {
      self.setDynamicWrapperWidth(self.elements.$dynamicText);
    } //trigger animation


    setTimeout(function () {
      self.hideWord(self.elements.$dynamicText.eq(0));
    }, self.getSettings('animationDelay'));
  },
  getSvgPaths: function getSvgPaths(pathName) {
    var pathsInfo = this.svgPaths[pathName],
        $paths = jQuery();
    pathsInfo.forEach(function (pathInfo) {
      $paths = $paths.add(jQuery('<path>', {
        d: pathInfo
      }));
    });
    return $paths;
  },
  addHighlight: function addHighlight() {
    var elementSettings = this.getElementSettings(),
        $svg = jQuery('<svg>', {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 500 150',
      preserveAspectRatio: 'none'
    }).html(this.getSvgPaths(elementSettings.marker));
    this.elements.$dynamicWrapper.append($svg[0].outerHTML);
  },
  rotateHeadline: function rotateHeadline() {
    var settings = this.getSettings(); //insert <span> for each letter of a changing word

    if (this.elements.$headline.hasClass(settings.classes.letters)) {
      this.singleLetters();
    } //initialise headline animation


    this.animateHeadline();
  },
  initHeadline: function initHeadline() {
    var headlineStyle = this.getElementSettings('headline_style');

    if ('rotate' === headlineStyle) {
      this.rotateHeadline();
    } else if ('highlight' === headlineStyle) {
      this.addHighlight();
      this.activateHighlightAnimation();
    }

    this.deactivateScrollListener();
  },
  activateHighlightAnimation: function activateHighlightAnimation() {
    var _this = this;

    var settings = this.getSettings(),
        classes = settings.classes,
        $headline = this.elements.$headline;
    $headline.removeClass(classes.hideHighlight).addClass(classes.activateHighlight);

    if (!this.isLoopMode) {
      return;
    }

    setTimeout(function () {
      $headline.removeClass(classes.activateHighligh).addClass(classes.hideHighlight);
    }, settings.highlightAnimationDuration + settings.highlightAnimationDelay * .8);
    setTimeout(function () {
      _this.activateHighlightAnimation(false);
    }, settings.highlightAnimationDuration + settings.highlightAnimationDelay);
  },
  activateScrollListener: function activateScrollListener() {
    var _this2 = this;

    var scrollBuffer = -100;
    this.intersectionObservers.startAnimation.observer = _scroll.default.scrollObserver({
      offset: "0px 0px ".concat(scrollBuffer, "px"),
      callback: function callback(event) {
        if (event.isInViewport) {
          _this2.initHeadline();
        }
      }
    });
    this.intersectionObservers.startAnimation.element = this.elements.$headline[0];
    this.intersectionObservers.startAnimation.observer.observe(this.intersectionObservers.startAnimation.element);
  },
  deactivateScrollListener: function deactivateScrollListener() {
    this.intersectionObservers.startAnimation.observer.unobserve(this.intersectionObservers.startAnimation.element);
  },
  onInit: function onInit() {
    elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);
    this.intersectionObservers = {
      startAnimation: {
        observer: null,
        element: null
      }
    };
    this.isLoopMode = 'yes' === this.getElementSettings('loop');
    this.activateScrollListener();
  }
});

exports.default = _default;

/***/ }),

/***/ "../modules/carousel/assets/js/frontend/frontend-legacy.js":
/*!*****************************************************************!*\
  !*** ../modules/carousel/assets/js/frontend/frontend-legacy.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _mediaCarousel = _interopRequireDefault(__webpack_require__(/*! ./handlers/media-carousel */ "../modules/carousel/assets/js/frontend/handlers/media-carousel.js"));

var _testimonialCarousel = _interopRequireDefault(__webpack_require__(/*! ./handlers/testimonial-carousel */ "../modules/carousel/assets/js/frontend/handlers/testimonial-carousel.js"));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this);
    elementorFrontend.elementsHandler.attachHandler('media-carousel', _mediaCarousel.default);
    elementorFrontend.elementsHandler.attachHandler('testimonial-carousel', _testimonialCarousel.default);
    elementorFrontend.elementsHandler.attachHandler('reviews', _testimonialCarousel.default);
    return _this;
  }

  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),

/***/ "../modules/carousel/assets/js/frontend/handlers/base.js":
/*!***************************************************************!*\
  !*** ../modules/carousel/assets/js/frontend/handlers/base.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js"));

__webpack_require__(/*! regenerator-runtime/runtime */ "../node_modules/regenerator-runtime/runtime.js");

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

__webpack_require__(/*! core-js/modules/es6.regexp.match */ "../node_modules/core-js/modules/es6.regexp.match.js");

__webpack_require__(/*! core-js/modules/es6.array.find */ "../node_modules/core-js/modules/es6.array.find.js");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var CarouselBase = /*#__PURE__*/function (_elementorModules$fro) {
  (0, _inherits2.default)(CarouselBase, _elementorModules$fro);

  var _super = (0, _createSuper2.default)(CarouselBase);

  function CarouselBase() {
    (0, _classCallCheck2.default)(this, CarouselBase);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(CarouselBase, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        selectors: {
          swiperContainer: '.elementor-main-swiper',
          swiperSlide: '.swiper-slide'
        },
        slidesPerView: {
          desktop: 3,
          tablet: 2,
          mobile: 1
        }
      };
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var selectors = this.getSettings('selectors'),
          elements = {
        $swiperContainer: this.$element.find(selectors.swiperContainer)
      };
      elements.$slides = elements.$swiperContainer.find(selectors.swiperSlide);
      return elements;
    }
  }, {
    key: "getEffect",
    value: function getEffect() {
      return this.getElementSettings('effect');
    }
  }, {
    key: "getDeviceSlidesPerView",
    value: function getDeviceSlidesPerView(device) {
      var slidesPerViewKey = 'slides_per_view' + ('desktop' === device ? '' : '_' + device);
      return Math.min(this.getSlidesCount(), +this.getElementSettings(slidesPerViewKey) || this.getSettings('slidesPerView')[device]);
    }
  }, {
    key: "getSlidesPerView",
    value: function getSlidesPerView(device) {
      if ('slide' === this.getEffect()) {
        return this.getDeviceSlidesPerView(device);
      }

      return 1;
    }
  }, {
    key: "getDeviceSlidesToScroll",
    value: function getDeviceSlidesToScroll(device) {
      var slidesToScrollKey = 'slides_to_scroll' + ('desktop' === device ? '' : '_' + device);
      return Math.min(this.getSlidesCount(), +this.getElementSettings(slidesToScrollKey) || 1);
    }
  }, {
    key: "getSlidesToScroll",
    value: function getSlidesToScroll(device) {
      if ('slide' === this.getEffect()) {
        return this.getDeviceSlidesToScroll(device);
      }

      return 1;
    }
  }, {
    key: "getSpaceBetween",
    value: function getSpaceBetween(device) {
      var propertyName = 'space_between';

      if (device && 'desktop' !== device) {
        propertyName += '_' + device;
      }

      return this.getElementSettings(propertyName).size || 0;
    }
  }, {
    key: "getSwiperOptions",
    value: function getSwiperOptions() {
      var elementSettings = this.getElementSettings();
      var swiperOptions = {
        grabCursor: true,
        initialSlide: this.getInitialSlide(),
        slidesPerView: this.getSlidesPerView('desktop'),
        slidesPerGroup: this.getSlidesToScroll('desktop'),
        spaceBetween: this.getSpaceBetween(),
        loop: 'yes' === elementSettings.loop,
        speed: elementSettings.speed,
        effect: this.getEffect(),
        preventClicksPropagation: false,
        slideToClickedSlide: true,
        handleElementorBreakpoints: true
      };

      if (elementSettings.show_arrows) {
        swiperOptions.navigation = {
          prevEl: '.elementor-swiper-button-prev',
          nextEl: '.elementor-swiper-button-next'
        };
      }

      if (elementSettings.pagination) {
        swiperOptions.pagination = {
          el: '.swiper-pagination',
          type: elementSettings.pagination,
          clickable: true
        };
      }

      if ('cube' !== this.getEffect()) {
        var breakpointsSettings = {},
            breakpoints = elementorFrontend.config.breakpoints;
        breakpointsSettings[breakpoints.lg - 1] = {
          slidesPerView: this.getSlidesPerView('tablet'),
          slidesPerGroup: this.getSlidesToScroll('tablet'),
          spaceBetween: this.getSpaceBetween('tablet')
        };
        breakpointsSettings[breakpoints.md - 1] = {
          slidesPerView: this.getSlidesPerView('mobile'),
          slidesPerGroup: this.getSlidesToScroll('mobile'),
          spaceBetween: this.getSpaceBetween('mobile')
        };
        swiperOptions.breakpoints = breakpointsSettings;
      }

      if (!this.isEdit && elementSettings.autoplay) {
        swiperOptions.autoplay = {
          delay: elementSettings.autoplay_speed,
          disableOnInteraction: !!elementSettings.pause_on_interaction
        };
      }

      return swiperOptions;
    }
  }, {
    key: "updateSpaceBetween",
    value: function updateSpaceBetween(propertyName) {
      var deviceMatch = propertyName.match('space_between_(.*)'),
          device = deviceMatch ? deviceMatch[1] : 'desktop',
          newSpaceBetween = this.getSpaceBetween(device),
          breakpoints = elementorFrontend.config.breakpoints;

      if ('desktop' !== device) {
        var breakpointDictionary = {
          tablet: breakpoints.lg - 1,
          mobile: breakpoints.md - 1
        };
        this.swiper.params.breakpoints[breakpointDictionary[device]].spaceBetween = newSpaceBetween;
      } else {
        this.swiper.params.spaceBetween = newSpaceBetween;
      }

      this.swiper.params.spaceBetween = newSpaceBetween;
      this.swiper.update();
    }
  }, {
    key: "onInit",
    value: function () {
      var _onInit = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var elementSettings,
            Swiper,
            _args = arguments;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, _args);
                elementSettings = this.getElementSettings();

                if (!(1 >= this.getSlidesCount())) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                Swiper = elementorFrontend.utils.swiper;
                _context.next = 7;
                return new Swiper(this.elements.$swiperContainer, this.getSwiperOptions());

              case 7:
                this.swiper = _context.sent;

                if ('yes' === elementSettings.pause_on_hover) {
                  this.togglePauseOnHover(true);
                } // Expose the swiper instance in the frontend


                this.elements.$swiperContainer.data('swiper', this.swiper);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onInit() {
        return _onInit.apply(this, arguments);
      }

      return onInit;
    }()
  }, {
    key: "getChangeableProperties",
    value: function getChangeableProperties() {
      return {
        autoplay: 'autoplay',
        pause_on_hover: 'pauseOnHover',
        pause_on_interaction: 'disableOnInteraction',
        autoplay_speed: 'delay',
        speed: 'speed',
        width: 'width'
      };
    }
  }, {
    key: "updateSwiperOption",
    value: function updateSwiperOption(propertyName) {
      if (0 === propertyName.indexOf('width')) {
        this.swiper.update();
        return;
      }

      var elementSettings = this.getElementSettings(),
          newSettingValue = elementSettings[propertyName],
          changeableProperties = this.getChangeableProperties();
      var propertyToUpdate = changeableProperties[propertyName],
          valueToUpdate = newSettingValue; // Handle special cases where the value to update is not the value that the Swiper library accepts

      switch (propertyName) {
        case 'autoplay':
          if (newSettingValue) {
            valueToUpdate = {
              delay: elementSettings.autoplay_speed,
              disableOnInteraction: 'yes' === elementSettings.pause_on_interaction
            };
          } else {
            valueToUpdate = false;
          }

          break;

        case 'autoplay_speed':
          propertyToUpdate = 'autoplay';
          valueToUpdate = {
            delay: newSettingValue,
            disableOnInteraction: 'yes' === elementSettings.pause_on_interaction
          };
          break;

        case 'pause_on_hover':
          this.togglePauseOnHover('yes' === newSettingValue);
          break;

        case 'pause_on_interaction':
          valueToUpdate = 'yes' === newSettingValue;
          break;
      } // 'pause_on_hover' is implemented by the handler with event listeners, not the Swiper library


      if ('pause_on_hover' !== propertyName) {
        this.swiper.params[propertyToUpdate] = valueToUpdate;
      }

      this.swiper.update();
    }
  }, {
    key: "onElementChange",
    value: function onElementChange(propertyName) {
      if (1 >= this.getSlidesCount()) {
        return;
      }

      if (0 === propertyName.indexOf('width')) {
        this.swiper.update(); // If there is another thumbs slider, like in the Media Carousel widget.

        if (this.thumbsSwiper) {
          this.thumbsSwiper.update();
        }

        return;
      } // This is for handling the responsive control 'space_between'.
      // Responsive controls require a separate way of handling, and some currently don't work
      // (Swiper bug, currently exists in v5.3.6) TODO: update Swiper when bug is fixed and handle responsive controls


      if (0 === propertyName.indexOf('space_between')) {
        this.updateSpaceBetween(propertyName);
        return;
      }

      var changeableProperties = this.getChangeableProperties();

      if (changeableProperties.hasOwnProperty(propertyName)) {
        this.updateSwiperOption(propertyName);
      }
    }
  }, {
    key: "onEditSettingsChange",
    value: function onEditSettingsChange(propertyName) {
      if (1 >= this.getSlidesCount()) {
        return;
      }

      if ('activeItemIndex' === propertyName) {
        this.swiper.slideToLoop(this.getEditSettings('activeItemIndex') - 1);
      }
    }
  }]);
  return CarouselBase;
}(elementorModules.frontend.handlers.SwiperBase);

exports.default = CarouselBase;

/***/ }),

/***/ "../modules/carousel/assets/js/frontend/handlers/media-carousel.js":
/*!*************************************************************************!*\
  !*** ../modules/carousel/assets/js/frontend/handlers/media-carousel.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js"));

__webpack_require__(/*! regenerator-runtime/runtime */ "../node_modules/regenerator-runtime/runtime.js");

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

__webpack_require__(/*! core-js/modules/es6.array.find */ "../node_modules/core-js/modules/es6.array.find.js");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _get4 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/get */ "../node_modules/@babel/runtime-corejs2/helpers/get.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/carousel/assets/js/frontend/handlers/base.js"));

var MediaCarousel = /*#__PURE__*/function (_CarouselBase) {
  (0, _inherits2.default)(MediaCarousel, _CarouselBase);

  var _super = (0, _createSuper2.default)(MediaCarousel);

  function MediaCarousel() {
    (0, _classCallCheck2.default)(this, MediaCarousel);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(MediaCarousel, [{
    key: "isSlideshow",
    value: function isSlideshow() {
      return 'slideshow' === this.getElementSettings('skin');
    }
  }, {
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      var _get2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var defaultSettings = (_get2 = (0, _get4.default)((0, _getPrototypeOf2.default)(MediaCarousel.prototype), "getDefaultSettings", this)).call.apply(_get2, [this].concat(args));

      if (this.isSlideshow()) {
        defaultSettings.selectors.thumbsSwiper = '.elementor-thumbnails-swiper';
        defaultSettings.slidesPerView = {
          desktop: 5,
          tablet: 4,
          mobile: 3
        };
      }

      return defaultSettings;
    }
  }, {
    key: "getElementSettings",
    value: function getElementSettings(setting) {
      var slideshowSpecialElementSettings = ['slides_per_view', 'slides_per_view_tablet', 'slides_per_view_mobile'];

      if (-1 !== slideshowSpecialElementSettings.indexOf(setting) && this.isSlideshow()) {
        setting = 'slideshow_' + setting;
      }

      return (0, _get4.default)((0, _getPrototypeOf2.default)(MediaCarousel.prototype), "getElementSettings", this).call(this, setting);
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var _get3;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var selectors = this.getSettings('selectors'),
          defaultElements = (_get3 = (0, _get4.default)((0, _getPrototypeOf2.default)(MediaCarousel.prototype), "getDefaultElements", this)).call.apply(_get3, [this].concat(args));

      if (this.isSlideshow()) {
        defaultElements.$thumbsSwiper = this.$element.find(selectors.thumbsSwiper);
      }

      return defaultElements;
    }
  }, {
    key: "getEffect",
    value: function getEffect() {
      if ('coverflow' === this.getElementSettings('skin')) {
        return 'coverflow';
      }

      return (0, _get4.default)((0, _getPrototypeOf2.default)(MediaCarousel.prototype), "getEffect", this).call(this);
    }
  }, {
    key: "getSlidesPerView",
    value: function getSlidesPerView(device) {
      if (this.isSlideshow()) {
        return 1;
      }

      if ('coverflow' === this.getElementSettings('skin')) {
        return this.getDeviceSlidesPerView(device);
      }

      return (0, _get4.default)((0, _getPrototypeOf2.default)(MediaCarousel.prototype), "getSlidesPerView", this).call(this, device);
    }
  }, {
    key: "getSwiperOptions",
    value: function getSwiperOptions() {
      var options = (0, _get4.default)((0, _getPrototypeOf2.default)(MediaCarousel.prototype), "getSwiperOptions", this).call(this);

      if (this.isSlideshow()) {
        options.loopedSlides = this.getSlidesCount();
        delete options.pagination;
        delete options.breakpoints;
      }

      return options;
    }
  }, {
    key: "onInit",
    value: function () {
      var _onInit = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var slidesCount, elementSettings, loop, breakpointsSettings, breakpoints, desktopSlidesPerView, thumbsSliderOptions, Swiper;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                (0, _get4.default)((0, _getPrototypeOf2.default)(MediaCarousel.prototype), "onInit", this).call(this);
                slidesCount = this.getSlidesCount();

                if (!(!this.isSlideshow() || 1 >= slidesCount)) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                elementSettings = this.getElementSettings(), loop = 'yes' === elementSettings.loop, breakpointsSettings = {}, breakpoints = elementorFrontend.config.breakpoints, desktopSlidesPerView = this.getDeviceSlidesPerView('desktop');
                breakpointsSettings[breakpoints.lg - 1] = {
                  slidesPerView: this.getDeviceSlidesPerView('tablet'),
                  spaceBetween: this.getSpaceBetween('tablet')
                };
                breakpointsSettings[breakpoints.md - 1] = {
                  slidesPerView: this.getDeviceSlidesPerView('mobile'),
                  spaceBetween: this.getSpaceBetween('mobile')
                };
                thumbsSliderOptions = {
                  slidesPerView: desktopSlidesPerView,
                  initialSlide: this.getInitialSlide(),
                  centeredSlides: elementSettings.centered_slides,
                  slideToClickedSlide: true,
                  spaceBetween: this.getSpaceBetween(),
                  loopedSlides: slidesCount,
                  loop: loop,
                  breakpoints: breakpointsSettings,
                  handleElementorBreakpoints: true
                };
                Swiper = elementorFrontend.utils.swiper;
                _context.next = 11;
                return new Swiper(this.elements.$thumbsSwiper, thumbsSliderOptions);

              case 11:
                this.swiper.controller.control = this.thumbsSwiper = _context.sent;
                // Expose the swiper instance in the frontend
                this.elements.$thumbsSwiper.data('swiper', this.thumbsSwiper);
                this.thumbsSwiper.controller.control = this.swiper;

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onInit() {
        return _onInit.apply(this, arguments);
      }

      return onInit;
    }()
  }]);
  return MediaCarousel;
}(_base.default);

exports.default = MediaCarousel;

/***/ }),

/***/ "../modules/carousel/assets/js/frontend/handlers/testimonial-carousel.js":
/*!*******************************************************************************!*\
  !*** ../modules/carousel/assets/js/frontend/handlers/testimonial-carousel.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/get */ "../node_modules/@babel/runtime-corejs2/helpers/get.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/carousel/assets/js/frontend/handlers/base.js"));

var TestimonialCarousel = /*#__PURE__*/function (_CarouselBase) {
  (0, _inherits2.default)(TestimonialCarousel, _CarouselBase);

  var _super = (0, _createSuper2.default)(TestimonialCarousel);

  function TestimonialCarousel() {
    (0, _classCallCheck2.default)(this, TestimonialCarousel);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(TestimonialCarousel, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      var defaultSettings = (0, _get2.default)((0, _getPrototypeOf2.default)(TestimonialCarousel.prototype), "getDefaultSettings", this).call(this);
      defaultSettings.slidesPerView = {
        desktop: 1,
        tablet: 1,
        mobile: 1
      };

      if (defaultSettings.loop) {
        defaultSettings.loopedSlides = this.getSlidesCount();
      }

      return defaultSettings;
    }
  }, {
    key: "getEffect",
    value: function getEffect() {
      return 'slide';
    }
  }]);
  return TestimonialCarousel;
}(_base.default);

exports.default = TestimonialCarousel;

/***/ }),

/***/ "../modules/countdown/assets/js/frontend/frontend-legacy.js":
/*!******************************************************************!*\
  !*** ../modules/countdown/assets/js/frontend/frontend-legacy.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _countdown = _interopRequireDefault(__webpack_require__(/*! ./handlers/countdown */ "../modules/countdown/assets/js/frontend/handlers/countdown.js"));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this);
    elementorFrontend.elementsHandler.attachHandler('countdown', _countdown.default);
    return _this;
  }

  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),

/***/ "../modules/countdown/assets/js/frontend/handlers/countdown.js":
/*!*********************************************************************!*\
  !*** ../modules/countdown/assets/js/frontend/handlers/countdown.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _parseInt2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "../node_modules/@babel/runtime-corejs2/core-js/parse-int.js"));

__webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "../node_modules/core-js/modules/es6.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es6.object.to-string */ "../node_modules/core-js/modules/es6.object.to-string.js");

__webpack_require__(/*! core-js/modules/es6.array.find */ "../node_modules/core-js/modules/es6.array.find.js");

var _default = elementorModules.frontend.handlers.Base.extend({
  cache: null,
  cacheElements: function cacheElements() {
    var $countDown = this.$element.find('.elementor-countdown-wrapper');
    this.cache = {
      $countDown: $countDown,
      timeInterval: null,
      elements: {
        $countdown: $countDown.find('.elementor-countdown-wrapper'),
        $daysSpan: $countDown.find('.elementor-countdown-days'),
        $hoursSpan: $countDown.find('.elementor-countdown-hours'),
        $minutesSpan: $countDown.find('.elementor-countdown-minutes'),
        $secondsSpan: $countDown.find('.elementor-countdown-seconds'),
        $expireMessage: $countDown.parent().find('.elementor-countdown-expire--message')
      },
      data: {
        id: this.$element.data('id'),
        endTime: new Date($countDown.data('date') * 1000),
        actions: $countDown.data('expire-actions'),
        evergreenInterval: $countDown.data('evergreen-interval')
      }
    };
  },
  onInit: function onInit() {
    elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);
    this.cacheElements();

    if (0 < this.cache.data.evergreenInterval) {
      this.cache.data.endTime = this.getEvergreenDate();
    }

    this.initializeClock();
  },
  updateClock: function updateClock() {
    var self = this,
        timeRemaining = this.getTimeRemaining(this.cache.data.endTime);
    jQuery.each(timeRemaining.parts, function (timePart) {
      var $element = self.cache.elements['$' + timePart + 'Span'];
      var partValue = this.toString();

      if (1 === partValue.length) {
        partValue = 0 + partValue;
      }

      if ($element.length) {
        $element.text(partValue);
      }
    });

    if (timeRemaining.total <= 0) {
      clearInterval(this.cache.timeInterval);
      this.runActions();
    }
  },
  initializeClock: function initializeClock() {
    var self = this;
    this.updateClock();
    this.cache.timeInterval = setInterval(function () {
      self.updateClock();
    }, 1000);
  },
  runActions: function runActions() {
    var self = this; // Trigger general event for 3rd patry actions

    self.$element.trigger('countdown_expire', self.$element);

    if (!this.cache.data.actions) {
      return;
    }

    this.cache.data.actions.forEach(function (action) {
      switch (action.type) {
        case 'hide':
          self.cache.$countDown.hide();
          break;

        case 'redirect':
          if (action.redirect_url) {
            window.location.href = action.redirect_url;
          }

          break;

        case 'message':
          self.cache.elements.$expireMessage.show();
          break;
      }
    });
  },
  getTimeRemaining: function getTimeRemaining(endTime) {
    var timeRemaining = endTime - new Date();
    var seconds = Math.floor(timeRemaining / 1000 % 60),
        minutes = Math.floor(timeRemaining / 1000 / 60 % 60),
        hours = Math.floor(timeRemaining / (1000 * 60 * 60) % 24),
        days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

    if (days < 0 || hours < 0 || minutes < 0) {
      seconds = minutes = hours = days = 0;
    }

    return {
      total: timeRemaining,
      parts: {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      }
    };
  },
  getEvergreenDate: function getEvergreenDate() {
    var self = this,
        id = this.cache.data.id,
        interval = this.cache.data.evergreenInterval,
        dueDateKey = id + '-evergreen_due_date',
        intervalKey = id + '-evergreen_interval',
        localData = {
      dueDate: localStorage.getItem(dueDateKey),
      interval: localStorage.getItem(intervalKey)
    },
        initEvergreen = function initEvergreen() {
      var evergreenDueDate = new Date();
      self.cache.data.endTime = evergreenDueDate.setSeconds(evergreenDueDate.getSeconds() + interval);
      localStorage.setItem(dueDateKey, self.cache.data.endTime);
      localStorage.setItem(intervalKey, interval);
      return self.cache.data.endTime;
    };

    if (null === localData.dueDate && null === localData.interval) {
      return initEvergreen();
    }

    if (null !== localData.dueDate && interval !== (0, _parseInt2.default)(localData.interval, 10)) {
      return initEvergreen();
    }

    if (localData.dueDate > 0 && (0, _parseInt2.default)(localData.interval, 10) === interval) {
      return localData.dueDate;
    }
  }
});

exports.default = _default;

/***/ }),

/***/ "../modules/forms/assets/js/frontend/frontend-legacy.js":
/*!**************************************************************!*\
  !*** ../modules/forms/assets/js/frontend/frontend-legacy.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _formSteps = _interopRequireDefault(__webpack_require__(/*! ./handlers/form-steps */ "../modules/forms/assets/js/frontend/handlers/form-steps.js"));

var _formSender = _interopRequireDefault(__webpack_require__(/*! ./handlers/form-sender */ "../modules/forms/assets/js/frontend/handlers/form-sender.js"));

var _formRedirect = _interopRequireDefault(__webpack_require__(/*! ./handlers/form-redirect */ "../modules/forms/assets/js/frontend/handlers/form-redirect.js"));

var _recaptcha = _interopRequireDefault(__webpack_require__(/*! ./handlers/recaptcha */ "../modules/forms/assets/js/frontend/handlers/recaptcha.js"));

var _date = _interopRequireDefault(__webpack_require__(/*! ./handlers/fields/date */ "../modules/forms/assets/js/frontend/handlers/fields/date.js"));

var _time = _interopRequireDefault(__webpack_require__(/*! ./handlers/fields/time */ "../modules/forms/assets/js/frontend/handlers/fields/time.js"));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this);
    var formHandlers = [_formSteps.default, _formSender.default, _formRedirect.default];
    elementorFrontend.elementsHandler.attachHandler('form', [].concat(formHandlers, [_recaptcha.default, _date.default, _time.default]));
    elementorFrontend.elementsHandler.attachHandler('subscribe', formHandlers);
    return _this;
  }

  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),

/***/ "../modules/forms/assets/js/frontend/handlers/fields/data-time-field-base.js":
/*!***********************************************************************************!*\
  !*** ../modules/forms/assets/js/frontend/handlers/fields/data-time-field-base.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(/*! core-js/modules/es6.array.find */ "../node_modules/core-js/modules/es6.array.find.js");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _get3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/get */ "../node_modules/@babel/runtime-corejs2/helpers/get.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var DataTimeFieldBase = /*#__PURE__*/function (_elementorModules$fro) {
  (0, _inherits2.default)(DataTimeFieldBase, _elementorModules$fro);

  var _super = (0, _createSuper2.default)(DataTimeFieldBase);

  function DataTimeFieldBase() {
    (0, _classCallCheck2.default)(this, DataTimeFieldBase);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(DataTimeFieldBase, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        selectors: {
          fields: this.getFieldsSelector()
        },
        classes: {
          useNative: 'elementor-use-native'
        }
      };
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var _this$getDefaultSetti = this.getDefaultSettings(),
          selectors = _this$getDefaultSetti.selectors;

      return {
        $fields: this.$element.find(selectors.fields)
      };
    }
  }, {
    key: "addPicker",
    value: function addPicker(element) {
      var _this$getDefaultSetti2 = this.getDefaultSettings(),
          classes = _this$getDefaultSetti2.classes,
          $element = jQuery(element);

      if ($element.hasClass(classes.useNative)) {
        return;
      }

      element.flatpickr(this.getPickerOptions(element));
    }
  }, {
    key: "onInit",
    value: function onInit() {
      var _get2,
          _this = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_get2 = (0, _get3.default)((0, _getPrototypeOf2.default)(DataTimeFieldBase.prototype), "onInit", this)).call.apply(_get2, [this].concat(args));

      this.elements.$fields.each(function (index, element) {
        return _this.addPicker(element);
      });
    }
  }]);
  return DataTimeFieldBase;
}(elementorModules.frontend.handlers.Base);

exports.default = DataTimeFieldBase;

/***/ }),

/***/ "../modules/forms/assets/js/frontend/handlers/fields/date.js":
/*!*******************************************************************!*\
  !*** ../modules/forms/assets/js/frontend/handlers/fields/date.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _dataTimeFieldBase = _interopRequireDefault(__webpack_require__(/*! ./data-time-field-base */ "../modules/forms/assets/js/frontend/handlers/fields/data-time-field-base.js"));

var DateField = /*#__PURE__*/function (_FieldBase) {
  (0, _inherits2.default)(DateField, _FieldBase);

  var _super = (0, _createSuper2.default)(DateField);

  function DateField() {
    (0, _classCallCheck2.default)(this, DateField);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(DateField, [{
    key: "getFieldsSelector",
    value: function getFieldsSelector() {
      return '.elementor-date-field';
    }
  }, {
    key: "getPickerOptions",
    value: function getPickerOptions(element) {
      var $element = jQuery(element);
      return {
        minDate: $element.attr('min') || null,
        maxDate: $element.attr('max') || null,
        allowInput: true
      };
    }
  }]);
  return DateField;
}(_dataTimeFieldBase.default);

exports.default = DateField;

/***/ }),

/***/ "../modules/forms/assets/js/frontend/handlers/fields/time.js":
/*!*******************************************************************!*\
  !*** ../modules/forms/assets/js/frontend/handlers/fields/time.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _dataTimeFieldBase = _interopRequireDefault(__webpack_require__(/*! ./data-time-field-base */ "../modules/forms/assets/js/frontend/handlers/fields/data-time-field-base.js"));

var TimeField = /*#__PURE__*/function (_FieldBase) {
  (0, _inherits2.default)(TimeField, _FieldBase);

  var _super = (0, _createSuper2.default)(TimeField);

  function TimeField() {
    (0, _classCallCheck2.default)(this, TimeField);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(TimeField, [{
    key: "getFieldsSelector",
    value: function getFieldsSelector() {
      return '.elementor-time-field';
    }
  }, {
    key: "getPickerOptions",
    value: function getPickerOptions() {
      return {
        noCalendar: true,
        enableTime: true,
        allowInput: true
      };
    }
  }]);
  return TimeField;
}(_dataTimeFieldBase.default);

exports.default = TimeField;

/***/ }),

/***/ "../modules/forms/assets/js/frontend/handlers/form-redirect.js":
/*!*********************************************************************!*\
  !*** ../modules/forms/assets/js/frontend/handlers/form-redirect.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(/*! core-js/modules/es6.array.find */ "../node_modules/core-js/modules/es6.array.find.js");

var _default = elementorModules.frontend.handlers.Base.extend({
  getDefaultSettings: function getDefaultSettings() {
    return {
      selectors: {
        form: '.elementor-form'
      }
    };
  },
  getDefaultElements: function getDefaultElements() {
    var selectors = this.getSettings('selectors'),
        elements = {};
    elements.$form = this.$element.find(selectors.form);
    return elements;
  },
  bindEvents: function bindEvents() {
    this.elements.$form.on('form_destruct', this.handleSubmit);
  },
  handleSubmit: function handleSubmit(event, response) {
    if ('undefined' !== typeof response.data.redirect_url) {
      location.href = response.data.redirect_url;
    }
  }
});

exports.default = _default;

/***/ }),

/***/ "../modules/forms/assets/js/frontend/handlers/form-sender.js":
/*!*******************************************************************!*\
  !*** ../modules/forms/assets/js/frontend/handlers/form-sender.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "../node_modules/core-js/modules/es6.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es6.object.to-string */ "../node_modules/core-js/modules/es6.object.to-string.js");

var _parseInt2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "../node_modules/@babel/runtime-corejs2/core-js/parse-int.js"));

__webpack_require__(/*! core-js/modules/es6.array.find */ "../node_modules/core-js/modules/es6.array.find.js");

var _default = elementorModules.frontend.handlers.Base.extend({
  getDefaultSettings: function getDefaultSettings() {
    return {
      selectors: {
        form: '.elementor-form',
        submitButton: '[type="submit"]'
      },
      action: 'elementor_pro_forms_send_form',
      ajaxUrl: elementorProFrontend.config.ajaxurl
    };
  },
  getDefaultElements: function getDefaultElements() {
    var selectors = this.getSettings('selectors'),
        elements = {};
    elements.$form = this.$element.find(selectors.form);
    elements.$submitButton = elements.$form.find(selectors.submitButton);
    return elements;
  },
  bindEvents: function bindEvents() {
    this.elements.$form.on('submit', this.handleSubmit);
    var $fileInput = this.elements.$form.find('input[type=file]');

    if ($fileInput.length) {
      $fileInput.on('change', this.validateFileSize);
    }
  },
  validateFileSize: function validateFileSize(event) {
    var _this = this;

    var $field = jQuery(event.currentTarget),
        files = $field[0].files;

    if (!files.length) {
      return;
    }

    var maxSize = (0, _parseInt2.default)($field.attr('data-maxsize')) * 1024 * 1024,
        maxSizeMessage = $field.attr('data-maxsize-message');
    var filesArray = Array.prototype.slice.call(files);
    filesArray.forEach(function (file) {
      if (maxSize < file.size) {
        $field.parent().addClass('elementor-error').append('<span class="elementor-message elementor-message-danger elementor-help-inline elementor-form-help-inline" role="alert">' + maxSizeMessage + '</span>').find(':input').attr('aria-invalid', 'true');

        _this.elements.$form.trigger('error');
      }
    });
  },
  beforeSend: function beforeSend() {
    var $form = this.elements.$form;
    $form.animate({
      opacity: '0.45'
    }, 500).addClass('elementor-form-waiting');
    $form.find('.elementor-message').remove();
    $form.find('.elementor-error').removeClass('elementor-error');
    $form.find('div.elementor-field-group').removeClass('error').find('span.elementor-form-help-inline').remove().end().find(':input').attr('aria-invalid', 'false');
    this.elements.$submitButton.attr('disabled', 'disabled').find('> span').prepend('<span class="elementor-button-text elementor-form-spinner"><i class="fa fa-spinner fa-spin"></i>&nbsp;</span>');
  },
  getFormData: function getFormData() {
    var formData = new FormData(this.elements.$form[0]);
    formData.append('action', this.getSettings('action'));
    formData.append('referrer', location.toString());
    return formData;
  },
  onSuccess: function onSuccess(response) {
    var $form = this.elements.$form;
    this.elements.$submitButton.removeAttr('disabled').find('.elementor-form-spinner').remove();
    $form.animate({
      opacity: '1'
    }, 100).removeClass('elementor-form-waiting');

    if (!response.success) {
      if (response.data.errors) {
        jQuery.each(response.data.errors, function (key, title) {
          $form.find('#form-field-' + key).parent().addClass('elementor-error').append('<span class="elementor-message elementor-message-danger elementor-help-inline elementor-form-help-inline" role="alert">' + title + '</span>').find(':input').attr('aria-invalid', 'true');
        });
        $form.trigger('error');
      }

      $form.append('<div class="elementor-message elementor-message-danger" role="alert">' + response.data.message + '</div>');
    } else {
      $form.trigger('submit_success', response.data); // For actions like redirect page

      $form.trigger('form_destruct', response.data);
      $form.trigger('reset');

      if ('undefined' !== typeof response.data.message && '' !== response.data.message) {
        $form.append('<div class="elementor-message elementor-message-success" role="alert">' + response.data.message + '</div>');
      }
    }
  },
  onError: function onError(xhr, desc) {
    var $form = this.elements.$form;
    $form.append('<div class="elementor-message elementor-message-danger" role="alert">' + desc + '</div>');
    this.elements.$submitButton.html(this.elements.$submitButton.text()).removeAttr('disabled');
    $form.animate({
      opacity: '1'
    }, 100).removeClass('elementor-form-waiting');
    $form.trigger('error');
  },
  handleSubmit: function handleSubmit(event) {
    var self = this,
        $form = this.elements.$form;
    event.preventDefault();

    if ($form.hasClass('elementor-form-waiting')) {
      return false;
    }

    this.beforeSend();
    jQuery.ajax({
      url: self.getSettings('ajaxUrl'),
      type: 'POST',
      dataType: 'json',
      data: self.getFormData(),
      processData: false,
      contentType: false,
      success: self.onSuccess,
      error: self.onError
    });
  }
});

exports.default = _default;

/***/ }),

/***/ "../modules/forms/assets/js/frontend/handlers/form-steps.js":
/*!******************************************************************!*\
  !*** ../modules/forms/assets/js/frontend/handlers/form-steps.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(/*! core-js/modules/es6.regexp.replace */ "../node_modules/core-js/modules/es6.regexp.replace.js");

__webpack_require__(/*! core-js/modules/es6.regexp.match */ "../node_modules/core-js/modules/es6.regexp.match.js");

__webpack_require__(/*! core-js/modules/es7.array.includes */ "../node_modules/core-js/modules/es7.array.includes.js");

__webpack_require__(/*! core-js/modules/es6.string.includes */ "../node_modules/core-js/modules/es6.string.includes.js");

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread2 */ "../node_modules/@babel/runtime-corejs2/helpers/objectSpread2.js"));

__webpack_require__(/*! core-js/modules/es6.array.find */ "../node_modules/core-js/modules/es6.array.find.js");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _get3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/get */ "../node_modules/@babel/runtime-corejs2/helpers/get.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var FormSteps = /*#__PURE__*/function (_elementorModules$fro) {
  (0, _inherits2.default)(FormSteps, _elementorModules$fro);

  var _super = (0, _createSuper2.default)(FormSteps);

  function FormSteps() {
    (0, _classCallCheck2.default)(this, FormSteps);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(FormSteps, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        selectors: {
          form: '.elementor-form',
          fieldsWrapper: '.elementor-form-fields-wrapper',
          fieldGroup: '.elementor-field-group',
          stepWrapper: '.elementor-field-type-step',
          stepField: '.e-field-step',
          submitWrapper: '.elementor-field-type-submit',
          submitButton: '[type="submit"]',
          buttons: '.e-form__buttons',
          buttonWrapper: '.e-form__buttons__wrapper',
          button: '.e-form__buttons__wrapper__button',
          indicator: '.e-form__indicators__indicator',
          indicatorProgress: '.e-form__indicators__indicator__progress',
          indicatorProgressMeter: '.e-form__indicators__indicator__progress__meter',
          formHelpInline: '.elementor-form-help-inline'
        },
        classes: {
          hidden: 'elementor-hidden',
          column: 'elementor-column',
          fieldGroup: 'elementor-field-group',
          elementorButton: 'elementor-button',
          step: 'e-form__step',
          buttons: 'e-form__buttons',
          buttonWrapper: 'e-form__buttons__wrapper',
          button: 'e-form__buttons__wrapper__button',
          indicators: 'e-form__indicators',
          indicator: 'e-form__indicators__indicator',
          indicatorIcon: 'e-form__indicators__indicator__icon',
          indicatorNumber: 'e-form__indicators__indicator__number',
          indicatorLabel: 'e-form__indicators__indicator__label',
          indicatorProgress: 'e-form__indicators__indicator__progress',
          indicatorProgressMeter: 'e-form__indicators__indicator__progress__meter',
          indicatorSeparator: 'e-form__indicators__indicator__separator',
          indicatorInactive: 'e-form__indicators__indicator--state-inactive',
          indicatorActive: 'e-form__indicators__indicator--state-active',
          indicatorCompleted: 'e-form__indicators__indicator--state-completed',
          indicatorShapeCircle: 'e-form__indicators__indicator--shape-circle',
          indicatorShapeSquare: 'e-form__indicators__indicator--shape-square',
          indicatorShapeRounded: 'e-form__indicators__indicator--shape-rounded',
          indicatorShapeNone: 'e-form__indicators__indicator--shape-none'
        }
      };
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var _this$getSettings = this.getSettings(),
          selectors = _this$getSettings.selectors,
          elements = {
        $form: this.$element.find(selectors.form)
      };

      elements.$fieldsWrapper = elements.$form.children(selectors.fieldsWrapper);
      elements.$stepWrapper = elements.$fieldsWrapper.children(selectors.stepWrapper);
      elements.$stepField = elements.$stepWrapper.children(selectors.stepField);
      elements.$fieldGroup = elements.$fieldsWrapper.children(selectors.fieldGroup);
      elements.$submitWrapper = elements.$fieldsWrapper.children(selectors.submitWrapper);
      elements.$submitButton = elements.$submitWrapper.children(selectors.submitButton);
      return elements;
    }
  }, {
    key: "onInit",
    value: function onInit() {
      var _get2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_get2 = (0, _get3.default)((0, _getPrototypeOf2.default)(FormSteps.prototype), "onInit", this)).call.apply(_get2, [this].concat(args));

      if (!this.isStepsExist()) {
        return;
      }

      this.data = {
        steps: []
      };
      this.state = {
        currentStep: 0,
        stepsType: '',
        stepsShape: ''
      };
      this.buildSteps();
      this.elements = (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, this.elements), this.createStepsIndicators()), this.createStepsButtons());
      this.initProgressBar();
      this.extractResponsiveSizeFromSubmitWrapper();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      if (!this.isStepsExist()) {
        return;
      }

      this.elements.$form.on({
        submit: function submit() {
          return _this.resetForm();
        },
        keydown: function keydown(e) {
          if (13 === e.keyCode && !_this.isLastStep() && 'textarea' !== e.target.localName) {
            e.preventDefault();

            _this.applyStep('next');
          }
        },
        error: function error() {
          return _this.onFormError();
        }
      });
    }
  }, {
    key: "isStepsExist",
    value: function isStepsExist() {
      return this.elements.$stepWrapper.length;
    }
  }, {
    key: "initProgressBar",
    value: function initProgressBar() {
      var stepsSettings = this.getElementSettings();

      if ('progress_bar' === stepsSettings.step_type) {
        this.setProgressBar();
      }
    }
  }, {
    key: "buildSteps",
    value: function buildSteps() {
      var _this2 = this;

      this.elements.$stepWrapper.each(function (index, el) {
        var _this2$getSettings = _this2.getSettings(),
            selectors = _this2$getSettings.selectors,
            classes = _this2$getSettings.classes,
            $currentStep = jQuery(el);

        $currentStep.addClass(classes.step).removeClass(classes.fieldGroup, classes.column);

        if (index) {
          $currentStep.addClass(classes.hidden);
        }

        _this2.setStepData($currentStep.children(selectors.stepField));

        $currentStep.append($currentStep.nextUntil(_this2.elements.$stepWrapper).not(_this2.elements.$submitWrapper));
      });
    }
  }, {
    key: "setStepData",
    value: function setStepData($stepElement) {
      var dataAttributes = ['label', 'previousButton', 'nextButton', 'iconUrl', 'iconLibrary'],
          stepData = {};
      dataAttributes.forEach(function (attr) {
        var attrValue = $stepElement.attr('data-' + attr);

        if (attrValue) {
          stepData[attr] = attrValue;
        }
      });
      this.data.steps.push(stepData);
    }
  }, {
    key: "createStepsIndicators",
    value: function createStepsIndicators() {
      var stepsSettings = this.getElementSettings(),
          stepsElements = {};

      if ('none' !== stepsSettings.step_type) {
        var _this$getSettings2 = this.getSettings(),
            selectors = _this$getSettings2.selectors,
            classes = _this$getSettings2.classes,
            indicatorsTypeClass = classes.indicators + '--type-' + stepsSettings.step_type,
            indicatorsClasses = [classes.indicators, indicatorsTypeClass];

        stepsElements.$indicatorsWrapper = jQuery('<div>', {
          class: indicatorsClasses.join(' ')
        });
        stepsElements.$indicatorsWrapper.append(this.buildIndicators());
        this.elements.$fieldsWrapper.before(stepsElements.$indicatorsWrapper);

        if ('progress_bar' === stepsSettings.step_type) {
          stepsElements.$progressBar = stepsElements.$indicatorsWrapper.find(selectors.indicatorProgress);
          stepsElements.$progressBarMeter = stepsElements.$indicatorsWrapper.find(selectors.indicatorProgressMeter);
        } else {
          stepsElements.$indicators = stepsElements.$indicatorsWrapper.find(selectors.indicator);
          stepsElements.$currentIndicator = stepsElements.$indicators.eq(this.state.currentStep);
        }
      }

      this.saveIndicatorsState();
      return stepsElements;
    }
  }, {
    key: "buildIndicators",
    value: function buildIndicators() {
      var stepsSettings = this.getElementSettings();
      return 'progress_bar' === stepsSettings.step_type ? this.buildProgressBar() : this.buildIndicatorsFromStepsData();
    }
  }, {
    key: "buildProgressBar",
    value: function buildProgressBar() {
      var _this$getSettings3 = this.getSettings(),
          classes = _this$getSettings3.classes,
          $progressBar = jQuery('<div>', {
        class: classes.indicatorProgress
      }),
          $progressBarMeter = jQuery('<div>', {
        class: classes.indicatorProgressMeter
      });

      $progressBar.append($progressBarMeter);
      return $progressBar;
    }
  }, {
    key: "getProgressBarValue",
    value: function getProgressBarValue() {
      var totalSteps = this.data.steps.length,
          currentStep = this.state.currentStep,
          percentage = currentStep ? (currentStep + 1) / totalSteps * 100 : 100 / totalSteps;
      return Math.floor(percentage) + '%';
    }
  }, {
    key: "setProgressBar",
    value: function setProgressBar() {
      var progressBarValue = this.getProgressBarValue();
      this.updateProgressMeterCSSVariable(progressBarValue);
      this.elements.$progressBarMeter.text(progressBarValue);
    }
  }, {
    key: "updateProgressMeterCSSVariable",
    value: function updateProgressMeterCSSVariable(value) {
      this.$element[0].style.setProperty('--e-form-steps-indicator-progress-meter-width', value);
    }
  }, {
    key: "saveIndicatorsState",
    value: function saveIndicatorsState() {
      var stepsSettings = this.getElementSettings();
      this.state.stepsType = stepsSettings.step_type;

      if (!['none', 'text', 'progress_bar'].includes(stepsSettings.step_type)) {
        this.state.stepsShape = stepsSettings.step_icon_shape;
      }
    }
  }, {
    key: "buildIndicatorsFromStepsData",
    value: function buildIndicatorsFromStepsData() {
      var _this3 = this;

      var indicators = [];
      this.data.steps.forEach(function (stepObj, index) {
        if (index) {
          indicators.push(_this3.getStepSeparator());
        }

        indicators.push(_this3.getStepIndicatorElement(stepObj, index));
      });
      return indicators;
    }
  }, {
    key: "getStepIndicatorElement",
    value: function getStepIndicatorElement(stepObj, index) {
      var _this$getSettings4 = this.getSettings(),
          classes = _this$getSettings4.classes,
          stepsSettings = this.getElementSettings(),
          indicatorStateClass = this.getIndicatorStateClass(index),
          indicatorClasses = [classes.indicator, indicatorStateClass],
          $stepIndicator = jQuery('<div>', {
        class: indicatorClasses.join(' ')
      });

      if (stepsSettings.step_type.includes('icon')) {
        $stepIndicator.append(this.getStepIconElement(stepObj));
      }

      if (stepsSettings.step_type.includes('number')) {
        $stepIndicator.append(this.getStepNumberElement(index));
      }

      if (stepsSettings.step_type.includes('text')) {
        $stepIndicator.append(this.getStepLabelElement(stepObj.label));
      }

      return $stepIndicator;
    }
  }, {
    key: "getIndicatorStateClass",
    value: function getIndicatorStateClass(index) {
      var _this$getSettings5 = this.getSettings(),
          classes = _this$getSettings5.classes;

      if (index < this.state.currentStep) {
        return classes.indicatorCompleted;
      } else if (index > this.state.currentStep) {
        return classes.indicatorInactive;
      }

      return classes.indicatorActive;
    }
  }, {
    key: "getIndicatorShapeClass",
    value: function getIndicatorShapeClass() {
      var stepsSettings = this.getElementSettings(),
          _this$getSettings6 = this.getSettings(),
          classes = _this$getSettings6.classes;

      return classes['indicatorShape' + this.firstLetterToUppercase(stepsSettings.step_icon_shape)];
    }
  }, {
    key: "firstLetterToUppercase",
    value: function firstLetterToUppercase(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  }, {
    key: "getStepNumberElement",
    value: function getStepNumberElement(index) {
      var _this$getSettings7 = this.getSettings(),
          classes = _this$getSettings7.classes,
          numberClasses = [classes.indicatorNumber, this.getIndicatorShapeClass()];

      return jQuery('<div>', {
        class: numberClasses.join(' '),
        text: index + 1
      });
    }
  }, {
    key: "getStepIconElement",
    value: function getStepIconElement(stepObj) {
      var _this$getSettings8 = this.getSettings(),
          classes = _this$getSettings8.classes,
          iconClasses = [classes.indicatorIcon, this.getIndicatorShapeClass()],
          $icon = jQuery('<div>', {
        class: iconClasses.join(' ')
      }),
          iconType = stepObj.iconLibrary ? '<i>' : '<img>',
          iconAttrObj = stepObj.iconLibrary ? {
        class: stepObj.iconLibrary
      } : {
        src: stepObj.iconUrl
      };

      $icon.append(jQuery(iconType, iconAttrObj));
      return $icon;
    }
  }, {
    key: "getStepLabelElement",
    value: function getStepLabelElement(label) {
      var _this$getSettings9 = this.getSettings(),
          classes = _this$getSettings9.classes;

      return jQuery('<label>', {
        class: classes.indicatorLabel,
        text: label
      });
    }
  }, {
    key: "getStepSeparator",
    value: function getStepSeparator() {
      var _this$getSettings10 = this.getSettings(),
          classes = _this$getSettings10.classes;

      return jQuery('<div>', {
        class: classes.indicatorSeparator
      });
    }
  }, {
    key: "createStepsButtons",
    value: function createStepsButtons() {
      var _this$getSettings11 = this.getSettings(),
          selectors = _this$getSettings11.selectors,
          stepsElements = {};

      this.injectButtonsToSteps(stepsElements);
      stepsElements.$buttonsContainer = this.elements.$stepWrapper.find(selectors.buttons);
      stepsElements.$buttonsWrappers = stepsElements.$buttonsContainer.children(selectors.buttonWrapper);
      return stepsElements;
    }
  }, {
    key: "injectButtonsToSteps",
    value: function injectButtonsToSteps() {
      var _this4 = this;

      var totalSteps = this.elements.$stepWrapper.length;
      this.elements.$stepWrapper.each(function (index, el) {
        var $el = jQuery(el),
            $container = _this4.getButtonsContainer();

        var $nextButton;

        if (index) {
          $container.append(_this4.getStepButton('previous', index));
          $nextButton = index === totalSteps - 1 ? _this4.getSubmitButton() : _this4.getStepButton('next', index);
        } else {
          $nextButton = _this4.getStepButton('next', index);
        }

        $container.append($nextButton);
        $el.append($container);
      });
    }
  }, {
    key: "getButtonsContainer",
    value: function getButtonsContainer() {
      var _this$getSettings12 = this.getSettings(),
          classes = _this$getSettings12.classes,
          stepsSettings = this.getElementSettings(),
          buttonColumnWidthClasses = [classes.buttons, classes.column, 'elementor-col-' + stepsSettings.button_width];

      return jQuery('<div>', {
        class: buttonColumnWidthClasses.join(' ')
      });
    }
  }, {
    key: "extractResponsiveSizeFromSubmitWrapper",
    value: function extractResponsiveSizeFromSubmitWrapper() {
      var sizeClasses = [];
      this.elements.$submitWrapper.removeClass(function (index, className) {
        var _className$match;

        sizeClasses = (_className$match = className.match(/elementor-(sm|md)-[0-9]+/g)) === null || _className$match === void 0 ? void 0 : _className$match.join(' ');
        return sizeClasses;
      });
      this.elements.$buttonsContainer.addClass(sizeClasses);
    }
  }, {
    key: "getStepButton",
    value: function getStepButton(buttonType, index) {
      var _this5 = this;

      var _this$getSettings13 = this.getSettings(),
          classes = _this$getSettings13.classes,
          $button = this.getButton(buttonType, index).on('click', function () {
        return _this5.applyStep(buttonType);
      }),
          buttonWrapperClasses = [classes.fieldGroup, classes.buttonWrapper, 'elementor-field-type-' + buttonType];

      return jQuery('<div>', {
        class: buttonWrapperClasses.join(' ')
      }).append($button);
    }
  }, {
    key: "getSubmitButton",
    value: function getSubmitButton() {
      var _this6 = this;

      var _this$getSettings14 = this.getSettings(),
          classes = _this$getSettings14.classes;

      this.elements.$submitButton.addClass(classes.button); // TODO: When a solution for the conditions will be found, check if can remove the elementor-col-x manipulation.

      return this.elements.$submitWrapper.attr('class', function (index, className) {
        return _this6.replaceClassNameColSize(className, '');
      }).removeClass(classes.column).removeClass(classes.buttons).addClass(classes.buttonWrapper);
    }
  }, {
    key: "replaceClassNameColSize",
    value: function replaceClassNameColSize(className, value) {
      return className.replace(/elementor-col-([0-9]+)/g, value);
    }
  }, {
    key: "getButton",
    value: function getButton(buttonType, index) {
      var _this$getSettings15 = this.getSettings(),
          classes = _this$getSettings15.classes,
          submitSizeClass = this.elements.$submitButton.attr('class').match(/elementor-size-([^\W\d]+)/g),
          buttonClasses = [classes.elementorButton, submitSizeClass, classes.button, classes.button + '-' + buttonType];

      return jQuery('<button>', {
        type: 'button',
        text: this.getButtonLabel(buttonType, index),
        class: buttonClasses.join(' ')
      });
    }
  }, {
    key: "getButtonLabel",
    value: function getButtonLabel(buttonType, index) {
      var stepsSettings = this.getElementSettings(),
          stepData = this.data.steps[index],
          buttonName = buttonType + 'Button',
          buttonSettingsProp = "step_".concat(buttonType, "_label");
      return stepData[buttonName] || stepsSettings[buttonSettingsProp];
    }
  }, {
    key: "applyStep",
    value: function applyStep(direction) {
      var nextIndex = 'next' === direction ? this.state.currentStep + 1 : this.state.currentStep - 1;

      if ('next' === direction && !this.isFieldsValid(this.elements.$stepWrapper)) {
        return false;
      }

      this.goToStep(nextIndex);
      this.state.currentStep = nextIndex;

      if ('progress_bar' === this.state.stepsType) {
        this.setProgressBar();
      } else if ('none' !== this.state.stepsType) {
        this.updateIndicatorsState(direction);
      }
    }
  }, {
    key: "goToStep",
    value: function goToStep(index) {
      var _this$getSettings16 = this.getSettings(),
          classes = _this$getSettings16.classes;

      this.elements.$stepWrapper.eq(this.state.currentStep).addClass(classes.hidden);
      this.elements.$stepWrapper.eq(index).removeClass(classes.hidden).children(this.getSettings('selectors.fieldGroup')).first().find(':input').first().trigger('focus');
    }
  }, {
    key: "isFieldsValid",
    value: function isFieldsValid($stepWrapper) {
      var isValid = true;
      $stepWrapper.eq(this.state.currentStep).find('.elementor-field-group :input').each(function (index, el) {
        if (!el.checkValidity()) {
          el.reportValidity();
          return isValid = false;
        }
      });
      return isValid;
    }
  }, {
    key: "isLastStep",
    value: function isLastStep() {
      return this.state.currentStep === this.data.steps.length - 1;
    }
  }, {
    key: "resetForm",
    value: function resetForm() {
      this.state.currentStep = 0;
      this.resetSteps();

      if ('progress_bar' === this.state.stepsType) {
        this.setProgressBar();
      } else if ('none' !== this.state.stepsType) {
        this.elements.$currentIndicator = this.elements.$indicators.eq(this.state.currentStep);
        this.resetIndicators();
      }
    }
  }, {
    key: "resetSteps",
    value: function resetSteps() {
      var _this$getSettings17 = this.getSettings(),
          classes = _this$getSettings17.classes;

      this.elements.$stepWrapper.addClass(classes.hidden).eq(0).removeClass(classes.hidden);
    }
  }, {
    key: "resetIndicators",
    value: function resetIndicators() {
      var _this$getSettings18 = this.getSettings(),
          classes = _this$getSettings18.classes,
          stateTypes = ['inactive', 'active', 'completed'],
          stateClasses = stateTypes.map(function (state) {
        return classes.indicator + '--state-' + state;
      });

      this.elements.$indicators.removeClass(stateClasses.join(' ')).not(this.elements.$indicators.eq(0)).addClass(classes.indicatorInactive);
      this.elements.$indicators.eq(0).addClass(classes.indicatorActive);
    }
  }, {
    key: "updateIndicatorsState",
    value: function updateIndicatorsState(direction) {
      var _this$getSettings19 = this.getSettings(),
          classes = _this$getSettings19.classes,
          indicatorsClasses = {
        current: {
          remove: classes.indicatorActive,
          add: 'next' === direction ? classes.indicatorCompleted : classes.indicatorInactive
        },
        next: {
          remove: 'next' === direction ? classes.indicatorInactive : classes.indicatorCompleted,
          add: classes.indicatorActive
        }
      };

      this.elements.$currentIndicator.removeClass(indicatorsClasses.current.remove).addClass(indicatorsClasses.current.add);
      this.elements.$currentIndicator = this.elements.$indicators.eq(this.state.currentStep);
      this.elements.$currentIndicator.removeClass(indicatorsClasses.next.remove).addClass(indicatorsClasses.next.add);
    }
  }, {
    key: "updateValue",
    value: function updateValue(updatedValue) {
      var _this7 = this;

      var actionsMap = {
        step_type: function step_type() {
          return _this7.updateStepsType();
        },
        step_icon_shape: function step_icon_shape() {
          return _this7.updateStepsShape();
        },
        step_next_label: function step_next_label() {
          return _this7.updateStepButtonsLabel('next');
        },
        step_previous_label: function step_previous_label() {
          return _this7.updateStepButtonsLabel('previous');
        }
      };

      if (actionsMap[updatedValue]) {
        actionsMap[updatedValue]();
      }
    }
  }, {
    key: "updateStepsType",
    value: function updateStepsType() {
      var stepsSettings = this.getElementSettings();

      if (this.elements.$indicatorsWrapper) {
        this.elements.$indicatorsWrapper.remove();
      }

      if ('none' !== stepsSettings.step_type) {
        this.rebuildIndicators();
      }

      this.state.stepsType = stepsSettings.step_type;
    }
  }, {
    key: "rebuildIndicators",
    value: function rebuildIndicators() {
      this.elements = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, this.elements), this.createStepsIndicators());
      this.initProgressBar();
    }
  }, {
    key: "updateStepsShape",
    value: function updateStepsShape() {
      var stepsSettings = this.getElementSettings(),
          _this$getSettings20 = this.getSettings(),
          selectors = _this$getSettings20.selectors,
          classes = _this$getSettings20.classes,
          shapeClassStart = classes.indicator + '--shape-',
          currentShapeClass = shapeClassStart + this.state.stepsShape,
          newShapeClass = shapeClassStart + stepsSettings.step_icon_shape;

      var elementsTargetType = '';

      if (stepsSettings.step_type.includes('icon')) {
        elementsTargetType = 'icon';
      } else if (stepsSettings.step_type.includes('number')) {
        elementsTargetType = 'number';
      }

      this.elements.$indicators.children(selectors.indicator + '__' + elementsTargetType).removeClass(currentShapeClass).addClass(newShapeClass);
      this.state.stepsShape = stepsSettings.step_icon_shape;
    }
  }, {
    key: "updateStepButtonsLabel",
    value: function updateStepButtonsLabel(buttonType) {
      var _this8 = this;

      var _this$getSettings21 = this.getSettings(),
          selectors = _this$getSettings21.selectors,
          buttonSelector = {
        previous: selectors.button + '-previous',
        next: selectors.button + '-next'
      };

      this.elements.$stepWrapper.each(function (index, el) {
        jQuery(el).find(buttonSelector[buttonType]).text(_this8.getButtonLabel(buttonType, index));
      });
    }
  }, {
    key: "onFormError",
    value: function onFormError() {
      var _this$getSettings22 = this.getSettings(),
          selectors = _this$getSettings22.selectors,
          $errorStepElement = this.elements.$form.find(selectors.formHelpInline).closest(selectors.stepWrapper);

      if ($errorStepElement.length) {
        this.goToStep($errorStepElement.index());
      }
    }
  }, {
    key: "onElementChange",
    value: function onElementChange(updatedValue) {
      if (!this.isStepsExist()) {
        return;
      }

      this.updateValue(updatedValue);
    }
  }]);
  return FormSteps;
}(elementorModules.frontend.handlers.Base);

exports.default = FormSteps;

/***/ }),

/***/ "../modules/forms/assets/js/frontend/handlers/recaptcha.js":
/*!*****************************************************************!*\
  !*** ../modules/forms/assets/js/frontend/handlers/recaptcha.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(/*! core-js/modules/es6.array.find */ "../node_modules/core-js/modules/es6.array.find.js");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var Recaptcha = /*#__PURE__*/function (_elementorModules$fro) {
  (0, _inherits2.default)(Recaptcha, _elementorModules$fro);

  var _super = (0, _createSuper2.default)(Recaptcha);

  function Recaptcha() {
    (0, _classCallCheck2.default)(this, Recaptcha);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Recaptcha, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        selectors: {
          recaptcha: '.elementor-g-recaptcha:last',
          submit: 'button[type="submit"]',
          recaptchaResponse: '[name="g-recaptcha-response"]'
        }
      };
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var _this$getDefaultSetti = this.getDefaultSettings(),
          selectors = _this$getDefaultSetti.selectors,
          elements = {
        $recaptcha: this.$element.find(selectors.recaptcha)
      };

      elements.$form = elements.$recaptcha.parents('form');
      elements.$submit = elements.$form.find(selectors.submit);
      return elements;
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      this.onRecaptchaApiReady();
    }
  }, {
    key: "isActive",
    value: function isActive(settings) {
      var _this$getDefaultSetti2 = this.getDefaultSettings(),
          selectors = _this$getDefaultSetti2.selectors;

      return settings.$element.find(selectors.recaptcha).length;
    }
  }, {
    key: "addRecaptcha",
    value: function addRecaptcha() {
      var _this = this;

      var settings = this.elements.$recaptcha.data(),
          isV2 = 'v3' !== settings.type,
          captchaIds = [];
      captchaIds.forEach(function (id) {
        return window.grecaptcha.reset(id);
      });
      var widgetId = window.grecaptcha.render(this.elements.$recaptcha[0], settings);
      this.elements.$form.on('reset error', function () {
        window.grecaptcha.reset(widgetId);
      });

      if (isV2) {
        this.elements.$recaptcha.data('widgetId', widgetId);
      } else {
        captchaIds.push(widgetId);
        this.elements.$submit.on('click', function (e) {
          return _this.onV3FormSubmit(e, widgetId);
        });
      }
    }
  }, {
    key: "onV3FormSubmit",
    value: function onV3FormSubmit(e, widgetId) {
      var _this2 = this;

      e.preventDefault();
      window.grecaptcha.ready(function () {
        var $form = _this2.elements.$form;
        grecaptcha.execute(widgetId, {
          action: _this2.elements.$recaptcha.data('action')
        }).then(function (token) {
          if (_this2.elements.$recaptchaResponse) {
            _this2.elements.$recaptchaResponse.val(token);
          } else {
            _this2.elements.$recaptchaResponse = jQuery('<input>', {
              type: 'hidden',
              value: token,
              name: 'g-recaptcha-response'
            });
            $form.append(_this2.elements.$recaptchaResponse);
          }

          $form.trigger('submit');
        });
      });
    }
  }, {
    key: "onRecaptchaApiReady",
    value: function onRecaptchaApiReady() {
      var _this3 = this;

      if (window.grecaptcha && window.grecaptcha.render) {
        this.addRecaptcha();
      } else {
        // If not ready check again by timeout..
        setTimeout(function () {
          return _this3.onRecaptchaApiReady();
        }, 350);
      }
    }
  }]);
  return Recaptcha;
}(elementorModules.frontend.handlers.Base);

exports.default = Recaptcha;

/***/ }),

/***/ "../modules/gallery/assets/js/frontend/frontend-legacy.js":
/*!****************************************************************!*\
  !*** ../modules/gallery/assets/js/frontend/frontend-legacy.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _handler = _interopRequireDefault(__webpack_require__(/*! ./handler */ "../modules/gallery/assets/js/frontend/handler.js"));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this);
    elementorFrontend.elementsHandler.attachHandler('gallery', _handler.default);
    return _this;
  }

  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),

/***/ "../modules/gallery/assets/js/frontend/handler.js":
/*!********************************************************!*\
  !*** ../modules/gallery/assets/js/frontend/handler.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(/*! core-js/modules/es6.regexp.match */ "../node_modules/core-js/modules/es6.regexp.match.js");

__webpack_require__(/*! core-js/modules/es6.array.find */ "../node_modules/core-js/modules/es6.array.find.js");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _get3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/get */ "../node_modules/@babel/runtime-corejs2/helpers/get.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var galleryHandler = /*#__PURE__*/function (_elementorModules$fro) {
  (0, _inherits2.default)(galleryHandler, _elementorModules$fro);

  var _super = (0, _createSuper2.default)(galleryHandler);

  function galleryHandler() {
    (0, _classCallCheck2.default)(this, galleryHandler);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(galleryHandler, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        selectors: {
          container: '.elementor-gallery__container',
          galleryTitles: '.elementor-gallery-title',
          galleryImages: '.e-gallery-image',
          galleryItemOverlay: '.elementor-gallery-item__overlay',
          galleryItemContent: '.elementor-gallery-item__content'
        },
        classes: {
          activeTitle: 'elementor-item-active'
        }
      };
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var _this$getSettings = this.getSettings(),
          selectors = _this$getSettings.selectors,
          elements = {
        $container: this.$element.find(selectors.container),
        $titles: this.$element.find(selectors.galleryTitles)
      };

      elements.$items = elements.$container.children();
      elements.$images = elements.$items.children(selectors.galleryImages);
      elements.$itemsOverlay = elements.$items.children(selectors.galleryItemOverlay);
      elements.$itemsContent = elements.$items.children(selectors.galleryItemContent);
      elements.$itemsContentElements = elements.$itemsContent.children();
      return elements;
    }
  }, {
    key: "getGallerySettings",
    value: function getGallerySettings() {
      var settings = this.getElementSettings(),
          breakpoints = elementorFrontend.config.breakpoints,
          breakPointSettings = {};
      breakPointSettings[breakpoints.lg - 1] = {
        horizontalGap: elementorFrontend.getDeviceSetting('tablet', settings, 'gap').size,
        verticalGap: elementorFrontend.getDeviceSetting('tablet', settings, 'gap').size,
        columns: elementorFrontend.getDeviceSetting('tablet', settings, 'columns')
      };
      breakPointSettings[breakpoints.md - 1] = {
        horizontalGap: elementorFrontend.getDeviceSetting('mobile', settings, 'gap').size,
        verticalGap: elementorFrontend.getDeviceSetting('mobile', settings, 'gap').size,
        columns: elementorFrontend.getDeviceSetting('mobile', settings, 'columns')
      };
      var desktopIdealRowHeight = elementorFrontend.getDeviceSetting('desktop', settings, 'ideal_row_height'),
          tabletIdealRowHeight = elementorFrontend.getDeviceSetting('tablet', settings, 'ideal_row_height'),
          mobileIdealRowHeight = elementorFrontend.getDeviceSetting('mobile', settings, 'ideal_row_height');
      breakPointSettings[breakpoints.lg - 1].idealRowHeight = tabletIdealRowHeight && tabletIdealRowHeight.size ? tabletIdealRowHeight.size : null;
      breakPointSettings[breakpoints.md - 1].idealRowHeight = mobileIdealRowHeight && mobileIdealRowHeight.size ? mobileIdealRowHeight.size : null;
      return {
        type: settings.gallery_layout,
        idealRowHeight: desktopIdealRowHeight && desktopIdealRowHeight.size ? desktopIdealRowHeight.size : null,
        container: this.elements.$container,
        columns: settings.columns,
        aspectRatio: settings.aspect_ratio,
        lastRow: 'normal',
        horizontalGap: elementorFrontend.getDeviceSetting('desktop', settings, 'gap').size,
        verticalGap: elementorFrontend.getDeviceSetting('desktop', settings, 'gap').size,
        animationDuration: settings.content_animation_duration,
        breakpoints: breakPointSettings,
        rtl: elementorFrontend.config.is_rtl,
        lazyLoad: 'yes' === settings.lazyload
      };
    }
  }, {
    key: "initGallery",
    value: function initGallery() {
      this.gallery = new EGallery(this.getGallerySettings());
      this.toggleAllAnimationsClasses();
    }
  }, {
    key: "removeAnimationClasses",
    value: function removeAnimationClasses($element) {
      $element.removeClass(function (index, className) {
        return (className.match(/elementor-animated-item-\S+/g) || []).join(' ');
      });
    }
  }, {
    key: "toggleOverlayHoverAnimation",
    value: function toggleOverlayHoverAnimation() {
      this.removeAnimationClasses(this.elements.$itemsOverlay);
      var hoverAnimation = this.getElementSettings('background_overlay_hover_animation');

      if (hoverAnimation) {
        this.elements.$itemsOverlay.addClass('elementor-animated-item--' + hoverAnimation);
      }
    }
  }, {
    key: "toggleOverlayContentAnimation",
    value: function toggleOverlayContentAnimation() {
      this.removeAnimationClasses(this.elements.$itemsContentElements);
      var contentHoverAnimation = this.getElementSettings('content_hover_animation');

      if (contentHoverAnimation) {
        this.elements.$itemsContentElements.addClass('elementor-animated-item--' + contentHoverAnimation);
      }
    }
  }, {
    key: "toggleOverlayContentSequencedAnimation",
    value: function toggleOverlayContentSequencedAnimation() {
      this.elements.$itemsContent.toggleClass('elementor-gallery--sequenced-animation', 'yes' === this.getElementSettings('content_sequenced_animation'));
    }
  }, {
    key: "toggleImageHoverAnimation",
    value: function toggleImageHoverAnimation() {
      var imageHoverAnimation = this.getElementSettings('image_hover_animation');
      this.removeAnimationClasses(this.elements.$images);

      if (imageHoverAnimation) {
        this.elements.$images.addClass('elementor-animated-item--' + imageHoverAnimation);
      }
    }
  }, {
    key: "toggleAllAnimationsClasses",
    value: function toggleAllAnimationsClasses() {
      var elementSettings = this.getElementSettings(),
          animation = elementSettings.background_overlay_hover_animation || elementSettings.content_hover_animation || elementSettings.image_hover_animation;
      this.elements.$items.toggleClass('elementor-animated-content', !!animation);
      this.toggleImageHoverAnimation();
      this.toggleOverlayHoverAnimation();
      this.toggleOverlayContentAnimation();
      this.toggleOverlayContentSequencedAnimation();
    }
  }, {
    key: "toggleAnimationClasses",
    value: function toggleAnimationClasses(settingKey) {
      if ('content_sequenced_animation' === settingKey) {
        this.toggleOverlayContentSequencedAnimation();
      }

      if ('background_overlay_hover_animation' === settingKey) {
        this.toggleOverlayHoverAnimation();
      }

      if ('content_hover_animation' === settingKey) {
        this.toggleOverlayContentAnimation();
      }

      if ('image_hover_animation' === settingKey) {
        this.toggleImageHoverAnimation();
      }
    }
  }, {
    key: "setGalleryTags",
    value: function setGalleryTags(id) {
      this.gallery.setSettings('tags', 'all' === id ? [] : ['' + id]);
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      this.elements.$titles.on('click', this.galleriesNavigationListener.bind(this));
    }
  }, {
    key: "galleriesNavigationListener",
    value: function galleriesNavigationListener(event) {
      var _this = this;

      var classes = this.getSettings('classes'),
          clickedElement = jQuery(event.target); // Make sure no other gallery title has an active class

      this.elements.$titles.removeClass(classes.activeTitle); // Give the gallery being activated the active class

      clickedElement.addClass(classes.activeTitle);
      this.setGalleryTags(clickedElement.data('gallery-index'));

      var updateLightboxGroup = function updateLightboxGroup() {
        return _this.setLightboxGalleryIndex(clickedElement.data('gallery-index'));
      }; // Wait for the gallery to filter before grouping items for the Light-box


      setTimeout(updateLightboxGroup, 1000);
    }
  }, {
    key: "setLightboxGalleryIndex",
    value: function setLightboxGalleryIndex() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';

      if ('all' === index) {
        return this.elements.$items.attr('data-elementor-lightbox-slideshow', 'all_' + this.getID());
      }

      this.elements.$items.not('.e-gallery-item--hidden').attr('data-elementor-lightbox-slideshow', index + '_' + this.getID());
    }
  }, {
    key: "onInit",
    value: function onInit() {
      var _get2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_get2 = (0, _get3.default)((0, _getPrototypeOf2.default)(galleryHandler.prototype), "onInit", this)).call.apply(_get2, [this].concat(args));

      if (elementorFrontend.isEditMode() && 1 <= this.$element.find('.elementor-widget-empty-icon').length) {
        this.$element.addClass('elementor-widget-empty');
      }

      if (!this.elements.$container.length) {
        return;
      }

      this.initGallery();
      this.elements.$titles.first().trigger('click');
    }
  }, {
    key: "onElementChange",
    value: function onElementChange(settingKey) {
      var _this2 = this;

      if (-1 !== ['background_overlay_hover_animation', 'content_hover_animation', 'image_hover_animation', 'content_sequenced_animation'].indexOf(settingKey)) {
        this.toggleAnimationClasses(settingKey);
        return;
      }

      var elementorBreakpoints = elementorFrontend.config.breakpoints;
      var settingsDictionary = {
        columns: ['columns'],
        columns_tablet: ['breakpoints.' + (elementorBreakpoints.lg - 1) + '.columns'],
        columns_mobile: ['breakpoints.' + (elementorBreakpoints.md - 1) + '.columns'],
        gap: ['horizontalGap', 'verticalGap'],
        gap_tablet: ['breakpoints.' + (elementorBreakpoints.lg - 1) + '.horizontalGap', 'breakpoints.' + (elementorBreakpoints.lg - 1) + '.verticalGap'],
        gap_mobile: ['breakpoints.' + (elementorBreakpoints.md - 1) + '.horizontalGap', 'breakpoints.' + (elementorBreakpoints.md - 1) + '.verticalGap'],
        aspect_ratio: ['aspectRatio'],
        ideal_row_height: ['idealRowHeight'],
        ideal_row_height_tablet: ['breakpoints.' + (elementorBreakpoints.lg - 1) + '.idealRowHeight'],
        ideal_row_height_mobile: ['breakpoints.' + (elementorBreakpoints.md - 1) + '.idealRowHeight']
      };
      var settingsToUpdate = settingsDictionary[settingKey];

      if (settingsToUpdate) {
        var gallerySettings = this.getGallerySettings();
        settingsToUpdate.forEach(function (settingToUpdate) {
          _this2.gallery.setSettings(settingToUpdate, _this2.getItems(gallerySettings, settingToUpdate));
        });
      }
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      (0, _get3.default)((0, _getPrototypeOf2.default)(galleryHandler.prototype), "onDestroy", this).call(this);

      if (this.gallery) {
        this.gallery.destroy();
      }
    }
  }]);
  return galleryHandler;
}(elementorModules.frontend.handlers.Base);

exports.default = galleryHandler;

/***/ }),

/***/ "../modules/lottie/assets/js/frontend/frontend-legacy.js":
/*!***************************************************************!*\
  !*** ../modules/lottie/assets/js/frontend/frontend-legacy.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _handler = _interopRequireDefault(__webpack_require__(/*! ./handler */ "../modules/lottie/assets/js/frontend/handler.js"));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this);
    elementorFrontend.elementsHandler.attachHandler('lottie', _handler.default);
    return _this;
  }

  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),

/***/ "../modules/lottie/assets/js/frontend/handler.js":
/*!*******************************************************!*\
  !*** ../modules/lottie/assets/js/frontend/handler.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread2 */ "../node_modules/@babel/runtime-corejs2/helpers/objectSpread2.js"));

__webpack_require__(/*! core-js/modules/es6.array.find */ "../node_modules/core-js/modules/es6.array.find.js");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _get3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/get */ "../node_modules/@babel/runtime-corejs2/helpers/get.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var lottieHandler = /*#__PURE__*/function (_elementorModules$fro) {
  (0, _inherits2.default)(lottieHandler, _elementorModules$fro);

  var _super = (0, _createSuper2.default)(lottieHandler);

  function lottieHandler() {
    (0, _classCallCheck2.default)(this, lottieHandler);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(lottieHandler, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        selectors: {
          container: '.e-lottie__container',
          containerLink: '.e-lottie__container__link',
          animation: '.e-lottie__animation',
          caption: '.e-lottie__caption'
        },
        classes: {
          caption: 'e-lottie__caption'
        }
      };
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var _this$getSettings = this.getSettings(),
          selectors = _this$getSettings.selectors;

      return {
        $widgetWrapper: this.$element,
        $container: this.$element.find(selectors.container),
        $containerLink: this.$element.find(selectors.containerLink),
        $animation: this.$element.find(selectors.animation),
        $caption: this.$element.find(selectors.caption),
        $sectionParent: this.$element.closest('.elementor-section'),
        $columnParent: this.$element.closest('.elementor-column')
      };
    }
  }, {
    key: "onInit",
    value: function onInit() {
      var _get2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_get2 = (0, _get3.default)((0, _getPrototypeOf2.default)(lottieHandler.prototype), "onInit", this)).call.apply(_get2, [this].concat(args));

      this.lottie = null;
      this.state = {
        isAnimationScrollUpdateNeededOnFirstLoad: true,
        isNewLoopCycle: false,
        isInViewport: false,
        loop: false,
        animationDirection: 'forward',
        currentAnimationTrigger: '',
        effectsRelativeTo: '',
        hoverOutMode: '',
        hoverArea: '',
        caption: '',
        playAnimationCount: 0,
        animationSpeed: 0,
        linkTimeout: 0,
        viewportOffset: {
          start: 0,
          end: 100
        }
      };
      this.intersectionObservers = {
        animation: {
          observer: null,
          element: null
        },
        lazyload: {
          observer: null,
          element: null
        }
      };
      this.animationFrameRequest = {
        timer: null,
        lastScrollY: 0
      };
      this.listeners = {
        collection: [],
        elements: {
          $widgetArea: {
            triggerAnimationHoverIn: null,
            triggerAnimationHoverOut: null
          },
          $container: {
            triggerAnimationClick: null
          }
        }
      };
      this.initLottie();
    }
  }, {
    key: "initLottie",
    value: function initLottie() {
      var lottieSettings = this.getLottieSettings();

      if (lottieSettings.lazyload) {
        this.lazyloadLottie();
      } else {
        this.generateLottie();
      }
    }
  }, {
    key: "lazyloadLottie",
    value: function lazyloadLottie() {
      var _this = this;

      var bufferHeightBeforeTriggerLottie = 200;
      this.intersectionObservers.lazyload.observer = elementorModules.utils.Scroll.scrollObserver({
        offset: "0px 0px ".concat(bufferHeightBeforeTriggerLottie, "px"),
        callback: function callback(event) {
          if (event.isInViewport) {
            _this.generateLottie();

            _this.intersectionObservers.lazyload.observer.unobserve(_this.intersectionObservers.lazyload.element);
          }
        }
      });
      this.intersectionObservers.lazyload.element = this.elements.$container[0];
      this.intersectionObservers.lazyload.observer.observe(this.intersectionObservers.lazyload.element);
    }
  }, {
    key: "generateLottie",
    value: function generateLottie() {
      this.createLottieInstance();
      this.setLottieEvents();
    }
  }, {
    key: "createLottieInstance",
    value: function createLottieInstance() {
      var lottieSettings = this.getLottieSettings();
      this.lottie = bodymovin.loadAnimation({
        container: this.elements.$animation[0],
        path: this.getAnimationPath(),
        renderer: lottieSettings.renderer,
        autoplay: false,
        // We always want to trigger the animation manually for considering start/end frame.
        name: 'lottie-widget'
      }); // Expose the lottie instance in the frontend.

      this.elements.$animation.data('lottie', this.lottie);
    }
  }, {
    key: "getAnimationPath",
    value: function getAnimationPath() {
      var _lottieSettings$sourc, _lottieSettings$sourc2;

      var lottieSettings = this.getLottieSettings();

      if (((_lottieSettings$sourc = lottieSettings.source_json) === null || _lottieSettings$sourc === void 0 ? void 0 : _lottieSettings$sourc.url) && 'json' === lottieSettings.source_json.url.toLowerCase().substr(-4)) {
        return lottieSettings.source_json.url;
      } else if ((_lottieSettings$sourc2 = lottieSettings.source_external_url) === null || _lottieSettings$sourc2 === void 0 ? void 0 : _lottieSettings$sourc2.url) {
        return lottieSettings.source_external_url.url;
      } // Default animation path.


      return elementorProFrontend.config.lottie.defaultAnimationUrl;
    }
  }, {
    key: "setCaption",
    value: function setCaption() {
      var lottieSettings = this.getLottieSettings();

      if ('external_url' === lottieSettings.source || 'media_file' === lottieSettings.source && 'custom' === lottieSettings.caption_source) {
        var $captionElement = this.getCaptionElement();
        $captionElement.text(lottieSettings.caption);
      }
    }
  }, {
    key: "getCaptionElement",
    value: function getCaptionElement() {
      if (!this.elements.$caption.length) {
        var _this$getSettings2 = this.getSettings(),
            classes = _this$getSettings2.classes;

        this.elements.$caption = jQuery('<p>', {
          class: classes.caption
        });
        this.elements.$container.append(this.elements.$caption);
        return this.elements.$caption;
      }

      return this.elements.$caption;
    }
  }, {
    key: "setLottieEvents",
    value: function setLottieEvents() {
      var _this2 = this;

      this.lottie.addEventListener('DOMLoaded', function () {
        return _this2.onLottieDomLoaded();
      });
      this.lottie.addEventListener('complete', function () {
        return _this2.onComplete();
      });
    }
  }, {
    key: "saveInitialValues",
    value: function saveInitialValues() {
      var _lottieSettings$play_;

      var lottieSettings = this.getLottieSettings();
      /*
      These values of the animation are being changed during the animation runtime
      and saved in the lottie instance (and not in the state) for the instance expose in the frontend.
       */

      this.lottie.__initialTotalFrames = this.lottie.totalFrames;
      this.lottie.__initialFirstFrame = this.lottie.firstFrame;
      this.state.currentAnimationTrigger = lottieSettings.trigger;
      this.state.effectsRelativeTo = lottieSettings.effects_relative_to;
      this.state.viewportOffset.start = lottieSettings.viewport ? lottieSettings.viewport.sizes.start : 0;
      this.state.viewportOffset.end = lottieSettings.viewport ? lottieSettings.viewport.sizes.end : 100;
      this.state.animationSpeed = (_lottieSettings$play_ = lottieSettings.play_speed) === null || _lottieSettings$play_ === void 0 ? void 0 : _lottieSettings$play_.size;
      this.state.linkTimeout = lottieSettings.link_timeout;
      this.state.caption = lottieSettings.caption;
      this.state.loop = lottieSettings.loop;
    }
  }, {
    key: "setAnimationFirstFrame",
    value: function setAnimationFirstFrame() {
      var frame = this.getAnimationFrames();
      /*
      We need to subtract the initial first frame from the first frame for handling scenarios
      when the animation first frame is not 0, this way we always get the relevant first frame.
      example: when start point is 70 and initial first frame is 60, the animation should start at 10.
       */

      frame.first = frame.first - this.lottie.__initialFirstFrame;
      this.lottie.goToAndStop(frame.first, true);
    }
  }, {
    key: "initAnimationTrigger",
    value: function initAnimationTrigger() {
      var lottieSettings = this.getLottieSettings();

      switch (lottieSettings.trigger) {
        case 'none':
          this.playLottie();
          break;

        case 'arriving_to_viewport':
          this.playAnimationWhenArrivingToViewport();
          break;

        case 'bind_to_scroll':
          this.playAnimationWhenBindToScroll();
          break;

        case 'on_click':
          this.bindAnimationClickEvents();
          break;

        case 'on_hover':
          this.bindAnimationHoverEvents();
          break;
      }
    }
  }, {
    key: "playAnimationWhenArrivingToViewport",
    value: function playAnimationWhenArrivingToViewport() {
      var _this3 = this;

      var offset = this.getOffset();
      this.intersectionObservers.animation.observer = elementorModules.utils.Scroll.scrollObserver({
        offset: "".concat(offset.end, "% 0% ").concat(offset.start, "%"),
        callback: function callback(event) {
          if (event.isInViewport) {
            _this3.state.isInViewport = true;

            _this3.playLottie();
          } else {
            _this3.state.isInViewport = false;

            _this3.lottie.pause();
          }
        }
      });
      this.intersectionObservers.animation.element = this.elements.$widgetWrapper[0];
      this.intersectionObservers.animation.observer.observe(this.intersectionObservers.animation.element);
    }
  }, {
    key: "getOffset",
    value: function getOffset() {
      var lottieSettings = this.getLottieSettings(),
          start = -lottieSettings.viewport.sizes.start || 0,
          end = -(100 - lottieSettings.viewport.sizes.end) || 0;
      return {
        start: start,
        end: end
      };
    }
  }, {
    key: "playAnimationWhenBindToScroll",
    value: function playAnimationWhenBindToScroll() {
      var _this4 = this;

      var lottieSettings = this.getLottieSettings(),
          offset = this.getOffset(); // Generate scroll detection by Intersection Observer API

      this.intersectionObservers.animation.observer = elementorModules.utils.Scroll.scrollObserver({
        offset: "".concat(offset.end, "% 0% ").concat(offset.start, "%"),
        callback: function callback(event) {
          return _this4.onLottieIntersection(event);
        }
      });
      this.intersectionObservers.animation.element = 'viewport' === lottieSettings.effects_relative_to ? this.elements.$widgetWrapper[0] : document.documentElement;
      this.intersectionObservers.animation.observer.observe(this.intersectionObservers.animation.element);
    }
  }, {
    key: "updateAnimationByScrollPosition",
    value: function updateAnimationByScrollPosition() {
      var lottieSettings = this.getLottieSettings();
      var percentage;

      if ('page' === lottieSettings.effects_relative_to) {
        percentage = this.getLottiePagePercentage();
      } else if ('fixed' === this.getCurrentDeviceSetting('_position')) {
        percentage = this.getLottieViewportHeightPercentage();
      } else {
        percentage = this.getLottieViewportPercentage();
      }

      var nextFrameToPlay = this.getFrameNumberByPercent(percentage);
      nextFrameToPlay = nextFrameToPlay - this.lottie.__initialFirstFrame;
      this.lottie.goToAndStop(nextFrameToPlay, true);
    }
  }, {
    key: "getLottieViewportPercentage",
    value: function getLottieViewportPercentage() {
      return elementorModules.utils.Scroll.getElementViewportPercentage(this.elements.$widgetWrapper, this.getOffset());
    }
  }, {
    key: "getLottiePagePercentage",
    value: function getLottiePagePercentage() {
      return elementorModules.utils.Scroll.getPageScrollPercentage(this.getOffset());
    }
  }, {
    key: "getLottieViewportHeightPercentage",
    value: function getLottieViewportHeightPercentage() {
      return elementorModules.utils.Scroll.getPageScrollPercentage(this.getOffset(), window.innerHeight);
    }
    /**
     * @param {number} percent - Percent value between 0-100
     */

  }, {
    key: "getFrameNumberByPercent",
    value: function getFrameNumberByPercent(percent) {
      var frame = this.getAnimationFrames();
      /*
      In mobile devices the document height can be 'stretched' at the top and bottom points of the document,
      this 'stretched' will make percent to be either negative or larger than 100, therefore we need to limit percent between 0-100.
      */

      percent = Math.min(100, Math.max(0, percent)); // Getting frame number by percent of range, considering start/end frame values if exist.

      return frame.first + (frame.last - frame.first) * percent / 100;
    }
  }, {
    key: "getAnimationFrames",
    value: function getAnimationFrames() {
      var lottieSettings = this.getLottieSettings(),
          currentFrame = this.getAnimationCurrentFrame(),
          startPoint = this.getAnimationRange().start,
          endPoint = this.getAnimationRange().end;
      var firstFrame = this.lottie.__initialFirstFrame,
          lastFrame = 0 === this.lottie.__initialFirstFrame ? this.lottie.__initialTotalFrames : this.lottie.__initialFirstFrame + this.lottie.__initialTotalFrames; // Limiting min start point to animation first frame.

      if (startPoint && startPoint > firstFrame) {
        firstFrame = startPoint;
      } // limiting max end point to animation last frame.


      if (endPoint && endPoint < lastFrame) {
        lastFrame = endPoint;
      }
      /*
      Getting the relevant first frame after loop complete and when not bind to scroll.
      when the animation is in progress (no when a new loop start), the first frame should be the current frame.
      when the trigger is bind_to_scroll we DON'T need to get this functionality.
      */


      if (!this.state.isNewLoopCycle && 'bind_to_scroll' !== lottieSettings.trigger) {
        // When we have a custom start point, we need to check if the start point is larger than the last pause stop of the animation.
        firstFrame = startPoint && startPoint > currentFrame ? startPoint : currentFrame;
      } // Reverse Mode.


      if ('backward' === this.state.animationDirection && this.isReverseMode()) {
        firstFrame = currentFrame;
        lastFrame = startPoint && startPoint > this.lottie.__initialFirstFrame ? startPoint : this.lottie.__initialFirstFrame;
      }

      return {
        first: firstFrame,
        last: lastFrame,
        current: currentFrame,
        total: this.lottie.__initialTotalFrames
      };
    }
  }, {
    key: "getAnimationRange",
    value: function getAnimationRange() {
      var lottieSettings = this.getLottieSettings();
      return {
        start: this.getInitialFrameNumberByPercent(lottieSettings.start_point.size),
        end: this.getInitialFrameNumberByPercent(lottieSettings.end_point.size)
      };
    }
  }, {
    key: "getInitialFrameNumberByPercent",
    value: function getInitialFrameNumberByPercent(percent) {
      percent = Math.min(100, Math.max(0, percent));
      return this.lottie.__initialFirstFrame + (this.lottie.__initialTotalFrames - this.lottie.__initialFirstFrame) * percent / 100;
    }
  }, {
    key: "getAnimationCurrentFrame",
    value: function getAnimationCurrentFrame() {
      // When pausing the animation (when out of viewport) the first frame of the animation changes.
      return 0 === this.lottie.firstFrame ? this.lottie.currentFrame : this.lottie.firstFrame + this.lottie.currentFrame;
    }
  }, {
    key: "setLinkTimeout",
    value: function setLinkTimeout() {
      var _lottieSettings$custo,
          _this5 = this;

      var lottieSettings = this.getLottieSettings();

      if ('on_click' === lottieSettings.trigger && ((_lottieSettings$custo = lottieSettings.custom_link) === null || _lottieSettings$custo === void 0 ? void 0 : _lottieSettings$custo.url) && lottieSettings.link_timeout) {
        this.elements.$containerLink.on('click', function (event) {
          event.preventDefault();

          if (!_this5.isEdit) {
            setTimeout(function () {
              var tabTarget = 'on' === lottieSettings.custom_link.is_external ? '_blank' : '_self';
              window.open(lottieSettings.custom_link.url, tabTarget);
            }, lottieSettings.link_timeout);
          }
        });
      }
    }
  }, {
    key: "bindAnimationClickEvents",
    value: function bindAnimationClickEvents() {
      var _this6 = this;

      this.listeners.elements.$container.triggerAnimationClick = function () {
        _this6.playLottie();
      };

      this.addSessionEventListener(this.elements.$container, 'click', this.listeners.elements.$container.triggerAnimationClick);
    }
  }, {
    key: "getLottieSettings",
    value: function getLottieSettings() {
      var lottieSettings = this.getElementSettings();
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, lottieSettings), {}, {
        lazyload: 'yes' === lottieSettings.lazyload,
        loop: 'yes' === lottieSettings.loop
      });
    }
  }, {
    key: "playLottie",
    value: function playLottie() {
      var frame = this.getAnimationFrames();
      this.lottie.stop();
      this.lottie.playSegments([frame.first, frame.last], true); // We reset the loop cycle state after playing the animation.

      this.state.isNewLoopCycle = false;
    }
  }, {
    key: "bindAnimationHoverEvents",
    value: function bindAnimationHoverEvents() {
      this.createAnimationHoverInEvents();
      this.createAnimationHoverOutEvents();
    }
  }, {
    key: "createAnimationHoverInEvents",
    value: function createAnimationHoverInEvents() {
      var _this7 = this;

      var lottieSettings = this.getLottieSettings(),
          $widgetArea = this.getHoverAreaElement();
      this.state.hoverArea = lottieSettings.hover_area;

      this.listeners.elements.$widgetArea.triggerAnimationHoverIn = function () {
        _this7.state.animationDirection = 'forward';

        _this7.playLottie();
      };

      this.addSessionEventListener($widgetArea, 'mouseenter', this.listeners.elements.$widgetArea.triggerAnimationHoverIn);
    }
    /**
     * @param {jQuery} $el
     * @param {string} event - event type
     * @param {function} callback
     */

  }, {
    key: "addSessionEventListener",
    value: function addSessionEventListener($el, event, callback) {
      $el.on(event, callback);
      this.listeners.collection.push({
        $el: $el,
        event: event,
        callback: callback
      });
    }
  }, {
    key: "createAnimationHoverOutEvents",
    value: function createAnimationHoverOutEvents() {
      var _this8 = this;

      var lottieSettings = this.getLottieSettings(),
          $widgetArea = this.getHoverAreaElement();

      if ('pause' === lottieSettings.on_hover_out || 'reverse' === lottieSettings.on_hover_out) {
        this.state.hoverOutMode = lottieSettings.on_hover_out;

        this.listeners.elements.$widgetArea.triggerAnimationHoverOut = function () {
          if ('pause' === lottieSettings.on_hover_out) {
            _this8.lottie.pause();
          } else {
            _this8.state.animationDirection = 'backward';

            _this8.playLottie();
          }
        };

        this.addSessionEventListener($widgetArea, 'mouseleave', this.listeners.elements.$widgetArea.triggerAnimationHoverOut);
      }
    }
  }, {
    key: "getHoverAreaElement",
    value: function getHoverAreaElement() {
      var lottieSettings = this.getLottieSettings();

      if ('section' === lottieSettings.hover_area) {
        return this.elements.$sectionParent;
      } else if ('column' === lottieSettings.hover_area) {
        return this.elements.$columnParent;
      }

      return this.elements.$container;
    }
  }, {
    key: "setLoopOnAnimationComplete",
    value: function setLoopOnAnimationComplete() {
      var lottieSettings = this.getLottieSettings();
      this.state.isNewLoopCycle = true;

      if (lottieSettings.loop && !this.isReverseMode()) {
        this.setLoopWhenNotReverse();
      } else if (lottieSettings.loop && this.isReverseMode()) {
        this.setReverseAnimationOnLoop();
      } else if (!lottieSettings.loop && this.isReverseMode()) {
        this.setReverseAnimationOnSingleTrigger();
      }
    }
  }, {
    key: "isReverseMode",
    value: function isReverseMode() {
      var lottieSettings = this.getLottieSettings();
      return 'yes' === lottieSettings.reverse_animation || 'reverse' === lottieSettings.on_hover_out && 'backward' === this.state.animationDirection;
    }
  }, {
    key: "setLoopWhenNotReverse",
    value: function setLoopWhenNotReverse() {
      var lottieSettings = this.getLottieSettings();

      if (lottieSettings.number_of_times > 0) {
        this.state.playAnimationCount++;

        if (this.state.playAnimationCount < lottieSettings.number_of_times) {
          this.playLottie();
        } else {
          this.state.playAnimationCount = 0;
        }
      } else {
        this.playLottie();
      }
    }
  }, {
    key: "setReverseAnimationOnLoop",
    value: function setReverseAnimationOnLoop() {
      var lottieSettings = this.getLottieSettings();
      /*
      We trigger the reverse animation:
      either when we don't have any value in the 'Number of Times" field, and then it will be an infinite forward/backward loop,
      or, when we have a value in the 'Number of Times" field and then we need to limit the number of times of the loop cycles.
       */

      if (!lottieSettings.number_of_times || this.state.playAnimationCount < lottieSettings.number_of_times) {
        this.state.animationDirection = 'forward' === this.state.animationDirection ? 'backward' : 'forward';
        this.playLottie();
        /*
        We need to increment the count only on the backward movements,
        because forward movement + backward movement are equal together to one full movement count.
        */

        if ('backward' === this.state.animationDirection) {
          this.state.playAnimationCount++;
        }
      } else {
        // Reset the values for the loop counting for the next trigger.
        this.state.playAnimationCount = 0;
        this.state.animationDirection = 'forward';
      }
    }
  }, {
    key: "setReverseAnimationOnSingleTrigger",
    value: function setReverseAnimationOnSingleTrigger() {
      if (this.state.playAnimationCount < 1) {
        this.state.playAnimationCount++;
        this.state.animationDirection = 'backward';
        this.playLottie();
      } else if (this.state.playAnimationCount >= 1 && 'forward' === this.state.animationDirection) {
        this.state.animationDirection = 'backward';
        this.playLottie();
      } else {
        this.state.playAnimationCount = 0;
        this.state.animationDirection = 'forward';
      }
    }
  }, {
    key: "setAnimationSpeed",
    value: function setAnimationSpeed() {
      var lottieSettings = this.getLottieSettings();

      if (lottieSettings.play_speed) {
        this.lottie.setSpeed(lottieSettings.play_speed.size);
      }
    }
  }, {
    key: "onElementChange",
    value: function onElementChange() {
      this.updateLottieValues();
      this.resetAnimationTrigger();
    }
  }, {
    key: "updateLottieValues",
    value: function updateLottieValues() {
      var _lottieSettings$play_2,
          _this9 = this;

      var lottieSettings = this.getLottieSettings(),
          valuesComparison = [{
        sourceVal: (_lottieSettings$play_2 = lottieSettings.play_speed) === null || _lottieSettings$play_2 === void 0 ? void 0 : _lottieSettings$play_2.size,
        stateProp: 'animationSpeed',
        callback: function callback() {
          return _this9.setAnimationSpeed();
        }
      }, {
        sourceVal: lottieSettings.link_timeout,
        stateProp: 'linkTimeout',
        callback: function callback() {
          return _this9.setLinkTimeout();
        }
      }, {
        sourceVal: lottieSettings.caption,
        stateProp: 'caption',
        callback: function callback() {
          return _this9.setCaption();
        }
      }, {
        sourceVal: lottieSettings.effects_relative_to,
        stateProp: 'effectsRelativeTo',
        callback: function callback() {
          return _this9.updateAnimationByScrollPosition();
        }
      }, {
        sourceVal: lottieSettings.loop,
        stateProp: 'loop',
        callback: function callback() {
          return _this9.onLoopStateChange();
        }
      }];
      valuesComparison.forEach(function (item) {
        if ('undefined' !== typeof item.sourceVal && item.sourceVal !== _this9.state[item.stateProp]) {
          _this9.state[item.stateProp] = item.sourceVal;
          item.callback();
        }
      });
    }
  }, {
    key: "onLoopStateChange",
    value: function onLoopStateChange() {
      var isInActiveViewportMode = 'arriving_to_viewport' === this.state.currentAnimationTrigger && this.state.isInViewport;

      if (this.state.loop && (isInActiveViewportMode || 'none' === this.state.currentAnimationTrigger)) {
        this.playLottie();
      }
    }
  }, {
    key: "resetAnimationTrigger",
    value: function resetAnimationTrigger() {
      var lottieSettings = this.getLottieSettings(),
          isTriggerChange = lottieSettings.trigger !== this.state.currentAnimationTrigger,
          isViewportOffsetChange = lottieSettings.viewport ? this.isViewportOffsetChange() : false,
          isHoverOutModeChange = lottieSettings.on_hover_out ? this.isHoverOutModeChange() : false,
          isHoverAreaChange = lottieSettings.hover_area ? this.isHoverAreaChange() : false;

      if (isTriggerChange || isViewportOffsetChange || isHoverOutModeChange || isHoverAreaChange) {
        this.removeAnimationFrameRequests();
        this.removeObservers();
        this.removeEventListeners();
        this.initAnimationTrigger();
      }
    }
  }, {
    key: "isViewportOffsetChange",
    value: function isViewportOffsetChange() {
      var lottieSettings = this.getLottieSettings(),
          isStartOffsetChange = lottieSettings.viewport.sizes.start !== this.state.viewportOffset.start,
          isEndOffsetChange = lottieSettings.viewport.sizes.end !== this.state.viewportOffset.end;
      return isStartOffsetChange || isEndOffsetChange;
    }
  }, {
    key: "isHoverOutModeChange",
    value: function isHoverOutModeChange() {
      var lottieSettings = this.getLottieSettings();
      return lottieSettings.on_hover_out !== this.state.hoverOutMode;
    }
  }, {
    key: "isHoverAreaChange",
    value: function isHoverAreaChange() {
      var lottieSettings = this.getLottieSettings();
      return lottieSettings.hover_area !== this.state.hoverArea;
    }
  }, {
    key: "removeEventListeners",
    value: function removeEventListeners() {
      this.listeners.collection.forEach(function (listener) {
        listener.$el.off(listener.event, null, listener.callback);
      });
    }
  }, {
    key: "removeObservers",
    value: function removeObservers() {
      // Removing all observers.
      for (var type in this.intersectionObservers) {
        if (this.intersectionObservers[type].observer && this.intersectionObservers[type].element) {
          this.intersectionObservers[type].observer.unobserve(this.intersectionObservers[type].element);
        }
      }
    }
  }, {
    key: "removeAnimationFrameRequests",
    value: function removeAnimationFrameRequests() {
      cancelAnimationFrame(this.animationFrameRequest.timer);
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      (0, _get3.default)((0, _getPrototypeOf2.default)(lottieHandler.prototype), "onDestroy", this).call(this);
      this.destroyLottie();
    }
  }, {
    key: "destroyLottie",
    value: function destroyLottie() {
      this.removeAnimationFrameRequests();
      this.removeObservers();
      this.removeEventListeners();
      this.elements.$animation.removeData('lottie');

      if (this.lottie) {
        this.lottie.destroy();
      }
    }
  }, {
    key: "onLottieDomLoaded",
    value: function onLottieDomLoaded() {
      this.saveInitialValues();
      this.setAnimationSpeed();
      this.setLinkTimeout();
      this.setCaption();
      this.setAnimationFirstFrame();
      this.initAnimationTrigger();
    }
  }, {
    key: "onComplete",
    value: function onComplete() {
      this.setLoopOnAnimationComplete();
    }
  }, {
    key: "onLottieIntersection",
    value: function onLottieIntersection(event) {
      var _this10 = this;

      if (event.isInViewport) {
        /*
        It's required to update the animation progress on first load when lottie is inside the viewport on load
        but, there is a problem when the browser is refreshed when the scroll bar is not in 0 position,
        in this scenario, after the refresh the browser will trigger 2 scroll events
        one trigger on immediate load and second after a f ew ms to move the scroll bar to previous position (before refresh)
        therefore, we use the this.state.isAnimationScrollUpdateNeededOnFirstLoad flag
        to make sure that this.updateAnimationByScrollPosition() function will be triggered only once.
         */
        if (this.state.isAnimationScrollUpdateNeededOnFirstLoad) {
          this.state.isAnimationScrollUpdateNeededOnFirstLoad = false;
          this.updateAnimationByScrollPosition();
        }

        this.animationFrameRequest.timer = requestAnimationFrame(function () {
          return _this10.onAnimationFrameRequest();
        });
      } else {
        var frame = this.getAnimationFrames(),
            finalFrame = 'up' === event.intersectionScrollDirection ? frame.first : frame.last;
        this.state.isAnimationScrollUpdateNeededOnFirstLoad = false;
        cancelAnimationFrame(this.animationFrameRequest.timer); // Set the animation values to min/max when out of viewport.

        this.lottie.goToAndStop(finalFrame, true);
      }
    }
  }, {
    key: "onAnimationFrameRequest",
    value: function onAnimationFrameRequest() {
      var _this11 = this;

      // Making calculation only when there is a change with the scroll position.
      if (window.scrollY !== this.animationFrameRequest.lastScrollY) {
        this.updateAnimationByScrollPosition();
        this.animationFrameRequest.lastScrollY = window.scrollY;
      }

      this.animationFrameRequest.timer = requestAnimationFrame(function () {
        return _this11.onAnimationFrameRequest();
      });
    }
  }]);
  return lottieHandler;
}(elementorModules.frontend.handlers.Base);

exports.default = lottieHandler;

/***/ }),

/***/ "../modules/nav-menu/assets/js/frontend/frontend-legacy.js":
/*!*****************************************************************!*\
  !*** ../modules/nav-menu/assets/js/frontend/frontend-legacy.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _navMenu = _interopRequireDefault(__webpack_require__(/*! ./handlers/nav-menu */ "../modules/nav-menu/assets/js/frontend/handlers/nav-menu.js"));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this);

    if (jQuery.fn.smartmenus) {
      // Override the default stupid detection
      jQuery.SmartMenus.prototype.isCSSOn = function () {
        return true;
      };

      if (elementorFrontend.config.is_rtl) {
        jQuery.fn.smartmenus.defaults.rightToLeftSubMenus = true;
      }
    }

    elementorFrontend.elementsHandler.attachHandler('nav-menu', _navMenu.default);
    return _this;
  }

  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),

/***/ "../modules/nav-menu/assets/js/frontend/handlers/nav-menu.js":
/*!*******************************************************************!*\
  !*** ../modules/nav-menu/assets/js/frontend/handlers/nav-menu.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(/*! core-js/modules/es6.array.find */ "../node_modules/core-js/modules/es6.array.find.js");

var _default = elementorModules.frontend.handlers.Base.extend({
  stretchElement: null,
  getDefaultSettings: function getDefaultSettings() {
    return {
      selectors: {
        menu: '.elementor-nav-menu',
        anchorLink: '.elementor-nav-menu--main .elementor-item-anchor',
        dropdownMenu: '.elementor-nav-menu__container.elementor-nav-menu--dropdown',
        menuToggle: '.elementor-menu-toggle'
      }
    };
  },
  getDefaultElements: function getDefaultElements() {
    var selectors = this.getSettings('selectors'),
        elements = {};
    elements.$menu = this.$element.find(selectors.menu);
    elements.$anchorLink = this.$element.find(selectors.anchorLink);
    elements.$dropdownMenu = this.$element.find(selectors.dropdownMenu);
    elements.$dropdownMenuFinalItems = elements.$dropdownMenu.find('.menu-item:not(.menu-item-has-children) > a');
    elements.$menuToggle = this.$element.find(selectors.menuToggle);
    return elements;
  },
  bindEvents: function bindEvents() {
    if (!this.elements.$menu.length) {
      return;
    }

    this.elements.$menuToggle.on('click', this.toggleMenu.bind(this));

    if (this.getElementSettings('full_width')) {
      this.elements.$dropdownMenuFinalItems.on('click', this.toggleMenu.bind(this, false));
    }

    elementorFrontend.addListenerOnce(this.$element.data('model-cid'), 'resize', this.stretchMenu);
  },
  initStretchElement: function initStretchElement() {
    this.stretchElement = new elementorModules.frontend.tools.StretchElement({
      element: this.elements.$dropdownMenu
    });
  },
  toggleMenu: function toggleMenu(show) {
    var isDropdownVisible = this.elements.$menuToggle.hasClass('elementor-active');

    if ('boolean' !== typeof show) {
      show = !isDropdownVisible;
    }

    this.elements.$menuToggle.attr('aria-expanded', show);
    this.elements.$dropdownMenu.attr('aria-hidden', !show);
    this.elements.$menuToggle.toggleClass('elementor-active', show);

    if (show && this.getElementSettings('full_width')) {
      this.stretchElement.stretch();
    }
  },
  followMenuAnchors: function followMenuAnchors() {
    var self = this;
    self.elements.$anchorLink.each(function () {
      if (location.pathname === this.pathname && '' !== this.hash) {
        self.followMenuAnchor(jQuery(this));
      }
    });
  },
  followMenuAnchor: function followMenuAnchor($element) {
    var anchorSelector = $element[0].hash;
    var offset = -300,
        $anchor;

    try {
      // `decodeURIComponent` for UTF8 characters in the hash.
      $anchor = jQuery(decodeURIComponent(anchorSelector));
    } catch (e) {
      return;
    }

    if (!$anchor.length) {
      return;
    }

    if (!$anchor.hasClass('elementor-menu-anchor')) {
      var halfViewport = jQuery(window).height() / 2;
      offset = -$anchor.outerHeight() + halfViewport;
    }

    elementorFrontend.waypoint($anchor, function (direction) {
      if ('down' === direction) {
        $element.addClass('elementor-item-active');
      } else {
        $element.removeClass('elementor-item-active');
      }
    }, {
      offset: '50%',
      triggerOnce: false
    });
    elementorFrontend.waypoint($anchor, function (direction) {
      if ('down' === direction) {
        $element.removeClass('elementor-item-active');
      } else {
        $element.addClass('elementor-item-active');
      }
    }, {
      offset: offset,
      triggerOnce: false
    });
  },
  stretchMenu: function stretchMenu() {
    if (this.getElementSettings('full_width')) {
      this.stretchElement.stretch();
      this.elements.$dropdownMenu.css('top', this.elements.$menuToggle.outerHeight());
    } else {
      this.stretchElement.reset();
    }
  },
  onInit: function onInit() {
    elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);

    if (!this.elements.$menu.length) {
      return;
    }

    this.elements.$menu.smartmenus({
      subIndicatorsText: '<i class="fa"></i>',
      subIndicatorsPos: 'append',
      subMenusMaxWidth: '1000px'
    });
    this.initStretchElement();
    this.stretchMenu();

    if (!elementorFrontend.isEditMode()) {
      this.followMenuAnchors();
    }
  },
  onElementChange: function onElementChange(propertyName) {
    if ('full_width' === propertyName) {
      this.stretchMenu();
    }
  }
});

exports.default = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/document.js":
/*!*******************************************************!*\
  !*** ../modules/popup/assets/js/frontend/document.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _keys = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js"));

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js"));

__webpack_require__(/*! regenerator-runtime/runtime */ "../node_modules/regenerator-runtime/runtime.js");

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

__webpack_require__(/*! core-js/modules/es6.array.find */ "../node_modules/core-js/modules/es6.array.find.js");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/get */ "../node_modules/@babel/runtime-corejs2/helpers/get.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _triggers = _interopRequireDefault(__webpack_require__(/*! ./triggers */ "../modules/popup/assets/js/frontend/triggers.js"));

var _timing = _interopRequireDefault(__webpack_require__(/*! ./timing */ "../modules/popup/assets/js/frontend/timing.js"));

var _default = /*#__PURE__*/function (_elementorModules$fro) {
  (0, _inherits2.default)(_default, _elementorModules$fro);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(_default, [{
    key: "bindEvents",
    value: function bindEvents() {
      var openSelector = this.getDocumentSettings('open_selector');

      if (openSelector) {
        elementorFrontend.elements.$body.on('click', openSelector, this.showModal.bind(this));
      }
    }
  }, {
    key: "startTiming",
    value: function startTiming() {
      var timing = new _timing.default(this.getDocumentSettings('timing'), this);

      if (timing.check()) {
        this.initTriggers();
      }
    }
  }, {
    key: "initTriggers",
    value: function initTriggers() {
      this.triggers = new _triggers.default(this.getDocumentSettings('triggers'), this);
    }
  }, {
    key: "showModal",
    value: function showModal(avoidMultiple) {
      var settings = this.getDocumentSettings();

      if (!this.isEdit) {
        if (!elementorFrontend.isWPPreviewMode()) {
          if (this.getStorage('disable')) {
            return;
          }

          if (avoidMultiple && elementorProFrontend.modules.popup.popupPopped && settings.avoid_multiple_popups) {
            return;
          }
        } // A clean copy of the element without previous initializations and events


        this.$element = jQuery(this.elementHTML);
        this.elements.$elements = this.$element.find(this.getSettings('selectors.elements'));
      }

      var modal = this.getModal(),
          $closeButton = modal.getElements('closeButton');
      modal.setMessage(this.$element).show();

      if (!this.isEdit) {
        if (settings.close_button_delay) {
          $closeButton.hide();
          clearTimeout(this.closeButtonTimeout);
          this.closeButtonTimeout = setTimeout(function () {
            return $closeButton.show();
          }, settings.close_button_delay * 1000);
        }

        (0, _get2.default)((0, _getPrototypeOf2.default)(_default.prototype), "runElementsHandlers", this).call(this);
      }

      this.setEntranceAnimation();

      if (!settings.timing || !settings.timing.times_count) {
        this.countTimes();
      }

      elementorProFrontend.modules.popup.popupPopped = true;
    }
  }, {
    key: "setEntranceAnimation",
    value: function setEntranceAnimation() {
      var $widgetContent = this.getModal().getElements('widgetContent'),
          settings = this.getDocumentSettings(),
          newAnimation = elementorFrontend.getCurrentDeviceSetting(settings, 'entrance_animation');

      if (this.currentAnimation) {
        $widgetContent.removeClass(this.currentAnimation);
      }

      this.currentAnimation = newAnimation;

      if (!newAnimation) {
        return;
      }

      var animationDuration = settings.entrance_animation_duration.size;
      $widgetContent.addClass(newAnimation);
      setTimeout(function () {
        return $widgetContent.removeClass(newAnimation);
      }, animationDuration * 1000);
    }
  }, {
    key: "setExitAnimation",
    value: function setExitAnimation() {
      var _this = this;

      var modal = this.getModal(),
          settings = this.getDocumentSettings(),
          $widgetContent = modal.getElements('widgetContent'),
          newAnimation = elementorFrontend.getCurrentDeviceSetting(settings, 'exit_animation'),
          animationDuration = newAnimation ? settings.entrance_animation_duration.size : 0;
      setTimeout(function () {
        if (newAnimation) {
          $widgetContent.removeClass(newAnimation + ' reverse');
        }

        if (!_this.isEdit) {
          _this.$element.remove();

          modal.getElements('widget').hide();
        }
      }, animationDuration * 1000);

      if (newAnimation) {
        $widgetContent.addClass(newAnimation + ' reverse');
      }
    }
  }, {
    key: "initModal",
    value: function initModal() {
      var _this2 = this;

      var modal;

      this.getModal = function () {
        if (!modal) {
          var settings = _this2.getDocumentSettings(),
              id = _this2.getSettings('id'),
              triggerPopupEvent = function triggerPopupEvent(eventType) {
            return elementorFrontend.elements.$document.trigger('elementor/popup/' + eventType, [id, _this2]);
          };

          var classes = 'elementor-popup-modal';

          if (settings.classes) {
            classes += ' ' + settings.classes;
          }

          modal = elementorFrontend.getDialogsManager().createWidget('lightbox', {
            id: 'elementor-popup-modal-' + id,
            className: classes,
            closeButton: true,
            closeButtonClass: 'eicon-close',
            preventScroll: settings.prevent_scroll,
            onShow: function onShow() {
              return triggerPopupEvent('show');
            },
            onHide: function onHide() {
              return triggerPopupEvent('hide');
            },
            effects: {
              hide: function hide() {
                if (settings.timing && settings.timing.times_count) {
                  _this2.countTimes();
                }

                _this2.setExitAnimation();
              },
              show: 'show'
            },
            hide: {
              auto: !!settings.close_automatically,
              autoDelay: settings.close_automatically * 1000,
              onBackgroundClick: !settings.prevent_close_on_background_click,
              onOutsideClick: !settings.prevent_close_on_background_click,
              onEscKeyPress: !settings.prevent_close_on_esc_key,
              ignore: '.flatpickr-calendar'
            },
            position: {
              enable: false
            }
          });
          modal.getElements('widgetContent').addClass('animated');
          var $closeButton = modal.getElements('closeButton');

          if (_this2.isEdit) {
            $closeButton.off('click');

            modal.hide = function () {};
          }

          _this2.setCloseButtonPosition();
        }

        return modal;
      };
    }
  }, {
    key: "setCloseButtonPosition",
    value: function setCloseButtonPosition() {
      var modal = this.getModal(),
          closeButtonPosition = this.getDocumentSettings('close_button_position'),
          $closeButton = modal.getElements('closeButton');
      $closeButton.appendTo(modal.getElements('outside' === closeButtonPosition ? 'widget' : 'widgetContent'));
    }
  }, {
    key: "disable",
    value: function disable() {
      this.setStorage('disable', true);
    }
  }, {
    key: "setStorage",
    value: function setStorage(key, value, options) {
      elementorFrontend.storage.set("popup_".concat(this.getSettings('id'), "_").concat(key), value, options);
    }
  }, {
    key: "getStorage",
    value: function getStorage(key, options) {
      return elementorFrontend.storage.get("popup_".concat(this.getSettings('id'), "_").concat(key), options);
    }
  }, {
    key: "countTimes",
    value: function countTimes() {
      var displayTimes = this.getStorage('times') || 0;
      this.setStorage('times', displayTimes + 1);
    }
  }, {
    key: "runElementsHandlers",
    value: function runElementsHandlers() {}
  }, {
    key: "onInit",
    value: function () {
      var _onInit = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                (0, _get2.default)((0, _getPrototypeOf2.default)(_default.prototype), "onInit", this).call(this); // In case that the library was not loaded, it indicates a Core version that enables dynamic loading.

                if (window.DialogsManager) {
                  _context.next = 4;
                  break;
                }

                _context.next = 4;
                return elementorFrontend.utils.assetsLoader.load('script', 'dialog');

              case 4:
                this.initModal();

                if (!this.isEdit) {
                  _context.next = 8;
                  break;
                }

                this.showModal();
                return _context.abrupt("return");

              case 8:
                this.$element.show().remove();
                this.elementHTML = this.$element[0].outerHTML;

                if (!elementorFrontend.isEditMode()) {
                  _context.next = 12;
                  break;
                }

                return _context.abrupt("return");

              case 12:
                if (!(elementorFrontend.isWPPreviewMode() && elementorFrontend.config.post.id === this.getSettings('id'))) {
                  _context.next = 15;
                  break;
                }

                this.showModal();
                return _context.abrupt("return");

              case 15:
                this.startTiming();

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onInit() {
        return _onInit.apply(this, arguments);
      }

      return onInit;
    }()
  }, {
    key: "onSettingsChange",
    value: function onSettingsChange(model) {
      var changedKey = (0, _keys.default)(model.changed)[0];

      if (-1 !== changedKey.indexOf('entrance_animation')) {
        this.setEntranceAnimation();
      }

      if ('exit_animation' === changedKey) {
        this.setExitAnimation();
      }

      if ('close_button_position' === changedKey) {
        this.setCloseButtonPosition();
      }
    }
  }]);
  return _default;
}(elementorModules.frontend.Document);

exports.default = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/frontend-legacy.js":
/*!**************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/frontend-legacy.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _document = _interopRequireDefault(__webpack_require__(/*! ./document */ "../modules/popup/assets/js/frontend/document.js"));

var _formsAction = _interopRequireDefault(__webpack_require__(/*! ./handlers/forms-action */ "../modules/popup/assets/js/frontend/handlers/forms-action.js"));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this);
    elementorFrontend.hooks.addAction('elementor/frontend/documents-manager/init-classes', _this.addDocumentClass);
    elementorFrontend.elementsHandler.attachHandler('form', _formsAction.default);
    elementorFrontend.on('components:init', function () {
      return _this.onFrontendComponentsInit();
    });

    if (!elementorFrontend.isEditMode() && !elementorFrontend.isWPPreviewMode()) {
      _this.setViewsAndSessions();
    }

    return _this;
  }

  (0, _createClass2.default)(_default, [{
    key: "addDocumentClass",
    value: function addDocumentClass(documentsManager) {
      documentsManager.addDocumentClass('popup', _document.default);
    }
  }, {
    key: "setViewsAndSessions",
    value: function setViewsAndSessions() {
      var pageViews = elementorFrontend.storage.get('pageViews') || 0;
      elementorFrontend.storage.set('pageViews', pageViews + 1);
      var activeSession = elementorFrontend.storage.get('activeSession', {
        session: true
      });

      if (!activeSession) {
        elementorFrontend.storage.set('activeSession', true, {
          session: true
        });
        var sessions = elementorFrontend.storage.get('sessions') || 0;
        elementorFrontend.storage.set('sessions', sessions + 1);
      }
    }
  }, {
    key: "showPopup",
    value: function showPopup(settings) {
      var popup = elementorFrontend.documentsManager.documents[settings.id];

      if (!popup) {
        return;
      }

      var modal = popup.getModal();

      if (settings.toggle && modal.isVisible()) {
        modal.hide();
      } else {
        popup.showModal();
      }
    }
  }, {
    key: "closePopup",
    value: function closePopup(settings, event) {
      var popupID = jQuery(event.target).parents('[data-elementor-type="popup"]').data('elementorId');

      if (!popupID) {
        return;
      }

      var document = elementorFrontend.documentsManager.documents[popupID];
      document.getModal().hide();

      if (settings.do_not_show_again) {
        document.disable();
      }
    }
  }, {
    key: "onFrontendComponentsInit",
    value: function onFrontendComponentsInit() {
      var _this2 = this;

      elementorFrontend.utils.urlActions.addAction('popup:open', function (settings) {
        return _this2.showPopup(settings);
      });
      elementorFrontend.utils.urlActions.addAction('popup:close', function (settings, event) {
        return _this2.closePopup(settings, event);
      });
    }
  }]);
  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/handlers/forms-action.js":
/*!********************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/handlers/forms-action.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(/*! core-js/modules/es6.array.find */ "../node_modules/core-js/modules/es6.array.find.js");

var _default = elementorModules.frontend.handlers.Base.extend({
  getDefaultSettings: function getDefaultSettings() {
    return {
      selectors: {
        form: '.elementor-form'
      }
    };
  },
  getDefaultElements: function getDefaultElements() {
    var selectors = this.getSettings('selectors'),
        elements = {};
    elements.$form = this.$element.find(selectors.form);
    return elements;
  },
  bindEvents: function bindEvents() {
    this.elements.$form.on('submit_success', this.handleFormAction);
  },
  handleFormAction: function handleFormAction(event, response) {
    if ('undefined' === typeof response.data.popup) {
      return;
    }

    var popupSettings = response.data.popup;

    if ('open' === popupSettings.action) {
      return elementorProFrontend.modules.popup.showPopup(popupSettings);
    }

    setTimeout(function () {
      return elementorProFrontend.modules.popup.closePopup(popupSettings, event);
    }, 1000);
  }
});

exports.default = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/timing.js":
/*!*****************************************************!*\
  !*** ../modules/popup/assets/js/frontend/timing.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _pageViews = _interopRequireDefault(__webpack_require__(/*! ./timing/page-views */ "../modules/popup/assets/js/frontend/timing/page-views.js"));

var _sessions = _interopRequireDefault(__webpack_require__(/*! ./timing/sessions */ "../modules/popup/assets/js/frontend/timing/sessions.js"));

var _url = _interopRequireDefault(__webpack_require__(/*! ./timing/url */ "../modules/popup/assets/js/frontend/timing/url.js"));

var _sources = _interopRequireDefault(__webpack_require__(/*! ./timing/sources */ "../modules/popup/assets/js/frontend/timing/sources.js"));

var _loggedIn = _interopRequireDefault(__webpack_require__(/*! ./timing/logged-in */ "../modules/popup/assets/js/frontend/timing/logged-in.js"));

var _devices = _interopRequireDefault(__webpack_require__(/*! ./timing/devices */ "../modules/popup/assets/js/frontend/timing/devices.js"));

var _times = _interopRequireDefault(__webpack_require__(/*! ./timing/times */ "../modules/popup/assets/js/frontend/timing/times.js"));

var _browsers = _interopRequireDefault(__webpack_require__(/*! ./timing/browsers */ "../modules/popup/assets/js/frontend/timing/browsers.js"));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(_default);

  function _default(settings, document) {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this, settings);
    _this.document = document;
    _this.timingClasses = {
      page_views: _pageViews.default,
      sessions: _sessions.default,
      url: _url.default,
      sources: _sources.default,
      logged_in: _loggedIn.default,
      devices: _devices.default,
      times: _times.default,
      browsers: _browsers.default
    };
    return _this;
  }

  (0, _createClass2.default)(_default, [{
    key: "check",
    value: function check() {
      var _this2 = this;

      var settings = this.getSettings();
      var checkPassed = true;
      jQuery.each(this.timingClasses, function (key, TimingClass) {
        if (!settings[key]) {
          return;
        }

        var timing = new TimingClass(settings, _this2.document);

        if (!timing.check()) {
          checkPassed = false;
        }
      });
      return checkPassed;
    }
  }]);
  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/timing/base.js":
/*!**********************************************************!*\
  !*** ../modules/popup/assets/js/frontend/timing/base.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(_default);

  function _default(settings, document) {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this, settings);
    _this.document = document;
    return _this;
  }

  (0, _createClass2.default)(_default, [{
    key: "getTimingSetting",
    value: function getTimingSetting(settingKey) {
      return this.getSettings(this.getName() + '_' + settingKey);
    }
  }]);
  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/timing/browsers.js":
/*!**************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/timing/browsers.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/timing/base.js"));

var _default = /*#__PURE__*/function (_BaseTiming) {
  (0, _inherits2.default)(_default, _BaseTiming);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(_default, [{
    key: "getName",
    value: function getName() {
      return 'browsers';
    }
  }, {
    key: "check",
    value: function check() {
      if ('all' === this.getTimingSetting('browsers')) {
        return true;
      }

      var targetedBrowsers = this.getTimingSetting('browsers_options'),
          browserDetectionFlags = elementorFrontend.utils.environment;
      return targetedBrowsers.some(function (browserName) {
        return browserDetectionFlags[browserName];
      });
    }
  }]);
  return _default;
}(_base.default);

exports.default = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/timing/devices.js":
/*!*************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/timing/devices.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/timing/base.js"));

var _default = /*#__PURE__*/function (_BaseTiming) {
  (0, _inherits2.default)(_default, _BaseTiming);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(_default, [{
    key: "getName",
    value: function getName() {
      return 'devices';
    }
  }, {
    key: "check",
    value: function check() {
      return -1 !== this.getTimingSetting('devices').indexOf(elementorFrontend.getCurrentDeviceMode());
    }
  }]);
  return _default;
}(_base.default);

exports.default = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/timing/logged-in.js":
/*!***************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/timing/logged-in.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/timing/base.js"));

var _default = /*#__PURE__*/function (_BaseTiming) {
  (0, _inherits2.default)(_default, _BaseTiming);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(_default, [{
    key: "getName",
    value: function getName() {
      return 'logged_in';
    }
  }, {
    key: "check",
    value: function check() {
      var userConfig = elementorFrontend.config.user;

      if (!userConfig) {
        return true;
      }

      if ('all' === this.getTimingSetting('users')) {
        return false;
      }

      var userRolesInHideList = this.getTimingSetting('roles').filter(function (role) {
        return -1 !== userConfig.roles.indexOf(role);
      });
      return !userRolesInHideList.length;
    }
  }]);
  return _default;
}(_base.default);

exports.default = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/timing/page-views.js":
/*!****************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/timing/page-views.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/timing/base.js"));

var _default = /*#__PURE__*/function (_BaseTiming) {
  (0, _inherits2.default)(_default, _BaseTiming);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(_default, [{
    key: "getName",
    value: function getName() {
      return 'page_views';
    }
  }, {
    key: "check",
    value: function check() {
      var pageViews = elementorFrontend.storage.get('pageViews'),
          name = this.getName();
      var initialPageViews = this.document.getStorage(name + '_initialPageViews');

      if (!initialPageViews) {
        this.document.setStorage(name + '_initialPageViews', pageViews);
        initialPageViews = pageViews;
      }

      return pageViews - initialPageViews >= this.getTimingSetting('views');
    }
  }]);
  return _default;
}(_base.default);

exports.default = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/timing/sessions.js":
/*!**************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/timing/sessions.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/timing/base.js"));

var _default = /*#__PURE__*/function (_BaseTiming) {
  (0, _inherits2.default)(_default, _BaseTiming);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(_default, [{
    key: "getName",
    value: function getName() {
      return 'sessions';
    }
  }, {
    key: "check",
    value: function check() {
      var sessions = elementorFrontend.storage.get('sessions'),
          name = this.getName();
      var initialSessions = this.document.getStorage(name + '_initialSessions');

      if (!initialSessions) {
        this.document.setStorage(name + '_initialSessions', sessions);
        initialSessions = sessions;
      }

      return sessions - initialSessions >= this.getTimingSetting('sessions');
    }
  }]);
  return _default;
}(_base.default);

exports.default = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/timing/sources.js":
/*!*************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/timing/sources.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(/*! core-js/modules/es6.regexp.replace */ "../node_modules/core-js/modules/es6.regexp.replace.js");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/timing/base.js"));

var _default = /*#__PURE__*/function (_BaseTiming) {
  (0, _inherits2.default)(_default, _BaseTiming);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(_default, [{
    key: "getName",
    value: function getName() {
      return 'sources';
    }
  }, {
    key: "check",
    value: function check() {
      var sources = this.getTimingSetting('sources');

      if (3 === sources.length) {
        return true;
      }

      var referrer = document.referrer.replace(/https?:\/\/(?:www\.)?/, ''),
          isInternal = 0 === referrer.indexOf(location.host.replace('www.', ''));

      if (isInternal) {
        return -1 !== sources.indexOf('internal');
      }

      if (-1 !== sources.indexOf('external')) {
        return true;
      }

      if (-1 !== sources.indexOf('search')) {
        return /^(google|yahoo|bing|yandex|baidu)\./.test(referrer);
      }

      return false;
    }
  }]);
  return _default;
}(_base.default);

exports.default = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/timing/times.js":
/*!***********************************************************!*\
  !*** ../modules/popup/assets/js/frontend/timing/times.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/timing/base.js"));

var _default = /*#__PURE__*/function (_BaseTiming) {
  (0, _inherits2.default)(_default, _BaseTiming);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(_default, [{
    key: "getName",
    value: function getName() {
      return 'times';
    }
  }, {
    key: "check",
    value: function check() {
      var displayTimes = this.document.getStorage('times') || 0;
      return this.getTimingSetting('times') > displayTimes;
    }
  }]);
  return _default;
}(_base.default);

exports.default = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/timing/url.js":
/*!*********************************************************!*\
  !*** ../modules/popup/assets/js/frontend/timing/url.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(/*! core-js/modules/es6.regexp.constructor */ "../node_modules/core-js/modules/es6.regexp.constructor.js");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/timing/base.js"));

var _default = /*#__PURE__*/function (_BaseTiming) {
  (0, _inherits2.default)(_default, _BaseTiming);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(_default, [{
    key: "getName",
    value: function getName() {
      return 'url';
    }
  }, {
    key: "check",
    value: function check() {
      var url = this.getTimingSetting('url'),
          action = this.getTimingSetting('action'),
          referrer = document.referrer;

      if ('regex' !== action) {
        return 'hide' === action ^ -1 !== referrer.indexOf(url);
      }

      var regexp;

      try {
        regexp = new RegExp(url);
      } catch (e) {
        return false;
      }

      return regexp.test(referrer);
    }
  }]);
  return _default;
}(_base.default);

exports.default = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/triggers.js":
/*!*******************************************************!*\
  !*** ../modules/popup/assets/js/frontend/triggers.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _pageLoad = _interopRequireDefault(__webpack_require__(/*! ./triggers/page-load */ "../modules/popup/assets/js/frontend/triggers/page-load.js"));

var _scrolling = _interopRequireDefault(__webpack_require__(/*! ./triggers/scrolling */ "../modules/popup/assets/js/frontend/triggers/scrolling.js"));

var _scrollingTo = _interopRequireDefault(__webpack_require__(/*! ./triggers/scrolling-to */ "../modules/popup/assets/js/frontend/triggers/scrolling-to.js"));

var _click = _interopRequireDefault(__webpack_require__(/*! ./triggers/click */ "../modules/popup/assets/js/frontend/triggers/click.js"));

var _inactivity = _interopRequireDefault(__webpack_require__(/*! ./triggers/inactivity */ "../modules/popup/assets/js/frontend/triggers/inactivity.js"));

var _exitIntent = _interopRequireDefault(__webpack_require__(/*! ./triggers/exit-intent */ "../modules/popup/assets/js/frontend/triggers/exit-intent.js"));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(_default);

  function _default(settings, document) {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this, settings);
    _this.document = document;
    _this.triggers = [];
    _this.triggerClasses = {
      page_load: _pageLoad.default,
      scrolling: _scrolling.default,
      scrolling_to: _scrollingTo.default,
      click: _click.default,
      inactivity: _inactivity.default,
      exit_intent: _exitIntent.default
    };

    _this.runTriggers();

    return _this;
  }

  (0, _createClass2.default)(_default, [{
    key: "runTriggers",
    value: function runTriggers() {
      var _this2 = this;

      var settings = this.getSettings();
      jQuery.each(this.triggerClasses, function (key, TriggerClass) {
        if (!settings[key]) {
          return;
        }

        var trigger = new TriggerClass(settings, function () {
          return _this2.onTriggerFired();
        });
        trigger.run();

        _this2.triggers.push(trigger);
      });
    }
  }, {
    key: "destroyTriggers",
    value: function destroyTriggers() {
      this.triggers.forEach(function (trigger) {
        return trigger.destroy();
      });
      this.triggers = [];
    }
  }, {
    key: "onTriggerFired",
    value: function onTriggerFired() {
      this.document.showModal(true);
      this.destroyTriggers();
    }
  }]);
  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/triggers/base.js":
/*!************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/triggers/base.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(_default);

  function _default(settings, callback) {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this, settings);
    _this.callback = callback;
    return _this;
  }

  (0, _createClass2.default)(_default, [{
    key: "getTriggerSetting",
    value: function getTriggerSetting(settingKey) {
      return this.getSettings(this.getName() + '_' + settingKey);
    }
  }]);
  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/triggers/click.js":
/*!*************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/triggers/click.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/triggers/base.js"));

var _default = /*#__PURE__*/function (_BaseTrigger) {
  (0, _inherits2.default)(_default, _BaseTrigger);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.checkClick = _this.checkClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.clicksCount = 0;
    return _this;
  }

  (0, _createClass2.default)(_default, [{
    key: "getName",
    value: function getName() {
      return 'click';
    }
  }, {
    key: "checkClick",
    value: function checkClick() {
      this.clicksCount++;

      if (this.clicksCount === this.getTriggerSetting('times')) {
        this.callback();
      }
    }
  }, {
    key: "run",
    value: function run() {
      elementorFrontend.elements.$body.on('click', this.checkClick);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      elementorFrontend.elements.$body.off('click', this.checkClick);
    }
  }]);
  return _default;
}(_base.default);

exports.default = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/triggers/exit-intent.js":
/*!*******************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/triggers/exit-intent.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/triggers/base.js"));

var _default = /*#__PURE__*/function (_BaseTrigger) {
  (0, _inherits2.default)(_default, _BaseTrigger);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.detectExitIntent = _this.detectExitIntent.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(_default, [{
    key: "getName",
    value: function getName() {
      return 'exit_intent';
    }
  }, {
    key: "detectExitIntent",
    value: function detectExitIntent(event) {
      if (event.clientY <= 0) {
        this.callback();
      }
    }
  }, {
    key: "run",
    value: function run() {
      elementorFrontend.elements.$window.on('mouseleave', this.detectExitIntent);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      elementorFrontend.elements.$window.off('mouseleave', this.detectExitIntent);
    }
  }]);
  return _default;
}(_base.default);

exports.default = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/triggers/inactivity.js":
/*!******************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/triggers/inactivity.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/triggers/base.js"));

var _default = /*#__PURE__*/function (_BaseTrigger) {
  (0, _inherits2.default)(_default, _BaseTrigger);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.restartTimer = _this.restartTimer.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(_default, [{
    key: "getName",
    value: function getName() {
      return 'inactivity';
    }
  }, {
    key: "run",
    value: function run() {
      this.startTimer();
      elementorFrontend.elements.$document.on('keypress mousemove', this.restartTimer);
    }
  }, {
    key: "startTimer",
    value: function startTimer() {
      this.timeOut = setTimeout(this.callback, this.getTriggerSetting('time') * 1000);
    }
  }, {
    key: "clearTimer",
    value: function clearTimer() {
      clearTimeout(this.timeOut);
    }
  }, {
    key: "restartTimer",
    value: function restartTimer() {
      this.clearTimer();
      this.startTimer();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.clearTimer();
      elementorFrontend.elements.$document.off('keypress mousemove', this.restartTimer);
    }
  }]);
  return _default;
}(_base.default);

exports.default = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/triggers/page-load.js":
/*!*****************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/triggers/page-load.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/triggers/base.js"));

var _default = /*#__PURE__*/function (_BaseTrigger) {
  (0, _inherits2.default)(_default, _BaseTrigger);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(_default, [{
    key: "getName",
    value: function getName() {
      return 'page_load';
    }
  }, {
    key: "run",
    value: function run() {
      this.timeout = setTimeout(this.callback, this.getTriggerSetting('delay') * 1000);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      clearTimeout(this.timeout);
    }
  }]);
  return _default;
}(_base.default);

exports.default = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/triggers/scrolling-to.js":
/*!********************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/triggers/scrolling-to.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/triggers/base.js"));

var _default = /*#__PURE__*/function (_BaseTrigger) {
  (0, _inherits2.default)(_default, _BaseTrigger);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(_default, [{
    key: "getName",
    value: function getName() {
      return 'scrolling_to';
    }
  }, {
    key: "run",
    value: function run() {
      var $targetElement;

      try {
        $targetElement = jQuery(this.getTriggerSetting('selector'));
      } catch (e) {
        return;
      }

      this.waypointInstance = elementorFrontend.waypoint($targetElement, this.callback)[0];
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.waypointInstance) {
        this.waypointInstance.destroy();
      }
    }
  }]);
  return _default;
}(_base.default);

exports.default = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/triggers/scrolling.js":
/*!*****************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/triggers/scrolling.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/triggers/base.js"));

var _default = /*#__PURE__*/function (_BaseTrigger) {
  (0, _inherits2.default)(_default, _BaseTrigger);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.checkScroll = _this.checkScroll.bind((0, _assertThisInitialized2.default)(_this));
    _this.lastScrollOffset = 0;
    return _this;
  }

  (0, _createClass2.default)(_default, [{
    key: "getName",
    value: function getName() {
      return 'scrolling';
    }
  }, {
    key: "checkScroll",
    value: function checkScroll() {
      var scrollDirection = scrollY > this.lastScrollOffset ? 'down' : 'up',
          requestedDirection = this.getTriggerSetting('direction');
      this.lastScrollOffset = scrollY;

      if (scrollDirection !== requestedDirection) {
        return;
      }

      if ('up' === scrollDirection) {
        this.callback();
        return;
      }

      var fullScroll = elementorFrontend.elements.$document.height() - innerHeight,
          scrollPercent = scrollY / fullScroll * 100;

      if (scrollPercent >= this.getTriggerSetting('offset')) {
        this.callback();
      }
    }
  }, {
    key: "run",
    value: function run() {
      elementorFrontend.elements.$window.on('scroll', this.checkScroll);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      elementorFrontend.elements.$window.off('scroll', this.checkScroll);
    }
  }]);
  return _default;
}(_base.default);

exports.default = _default;

/***/ }),

/***/ "../modules/posts/assets/js/frontend/frontend-legacy.js":
/*!**************************************************************!*\
  !*** ../modules/posts/assets/js/frontend/frontend-legacy.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _posts = _interopRequireDefault(__webpack_require__(/*! ./handlers/posts */ "../modules/posts/assets/js/frontend/handlers/posts.js"));

var _cards = _interopRequireDefault(__webpack_require__(/*! ./handlers/cards */ "../modules/posts/assets/js/frontend/handlers/cards.js"));

var _portfolio = _interopRequireDefault(__webpack_require__(/*! ./handlers/portfolio */ "../modules/posts/assets/js/frontend/handlers/portfolio.js"));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this);
    elementorFrontend.elementsHandler.attachHandler('posts', _posts.default, 'classic');
    elementorFrontend.elementsHandler.attachHandler('posts', _posts.default, 'full_content');
    elementorFrontend.elementsHandler.attachHandler('posts', _cards.default, 'cards');
    elementorFrontend.elementsHandler.attachHandler('portfolio', _portfolio.default);
    return _this;
  }

  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),

/***/ "../modules/posts/assets/js/frontend/handlers/cards.js":
/*!*************************************************************!*\
  !*** ../modules/posts/assets/js/frontend/handlers/cards.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _posts = _interopRequireDefault(__webpack_require__(/*! ./posts */ "../modules/posts/assets/js/frontend/handlers/posts.js"));

var _default = _posts.default.extend({
  getSkinPrefix: function getSkinPrefix() {
    return 'cards_';
  }
});

exports.default = _default;

/***/ }),

/***/ "../modules/posts/assets/js/frontend/handlers/portfolio.js":
/*!*****************************************************************!*\
  !*** ../modules/posts/assets/js/frontend/handlers/portfolio.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(/*! core-js/modules/es6.array.find */ "../node_modules/core-js/modules/es6.array.find.js");

var _posts = _interopRequireDefault(__webpack_require__(/*! ./posts */ "../modules/posts/assets/js/frontend/handlers/posts.js"));

var _default = _posts.default.extend({
  isActive: function isActive(settings) {
    return settings.$element.find('.elementor-portfolio').length;
  },
  getSkinPrefix: function getSkinPrefix() {
    return '';
  },
  getDefaultSettings: function getDefaultSettings() {
    var settings = _posts.default.prototype.getDefaultSettings.apply(this, arguments);

    settings.transitionDuration = 450;
    jQuery.extend(settings.classes, {
      active: 'elementor-active',
      item: 'elementor-portfolio-item',
      ghostItem: 'elementor-portfolio-ghost-item'
    });
    return settings;
  },
  getDefaultElements: function getDefaultElements() {
    var elements = _posts.default.prototype.getDefaultElements.apply(this, arguments);

    elements.$filterButtons = this.$element.find('.elementor-portfolio__filter');
    return elements;
  },
  getOffset: function getOffset(itemIndex, itemWidth, itemHeight) {
    var settings = this.getSettings(),
        itemGap = this.elements.$postsContainer.width() / settings.colsCount - itemWidth;
    itemGap += itemGap / (settings.colsCount - 1);
    return {
      start: (itemWidth + itemGap) * (itemIndex % settings.colsCount),
      top: (itemHeight + itemGap) * Math.floor(itemIndex / settings.colsCount)
    };
  },
  getClosureMethodsNames: function getClosureMethodsNames() {
    var baseClosureMethods = _posts.default.prototype.getClosureMethodsNames.apply(this, arguments);

    return baseClosureMethods.concat(['onFilterButtonClick']);
  },
  filterItems: function filterItems(term) {
    var $posts = this.elements.$posts,
        activeClass = this.getSettings('classes.active'),
        termSelector = '.elementor-filter-' + term;

    if ('__all' === term) {
      $posts.addClass(activeClass);
      return;
    }

    $posts.not(termSelector).removeClass(activeClass);
    $posts.filter(termSelector).addClass(activeClass);
  },
  removeExtraGhostItems: function removeExtraGhostItems() {
    var settings = this.getSettings(),
        $shownItems = this.elements.$posts.filter(':visible'),
        emptyColumns = (settings.colsCount - $shownItems.length % settings.colsCount) % settings.colsCount,
        $ghostItems = this.elements.$postsContainer.find('.' + settings.classes.ghostItem);
    $ghostItems.slice(emptyColumns).remove();
  },
  handleEmptyColumns: function handleEmptyColumns() {
    this.removeExtraGhostItems();
    var settings = this.getSettings(),
        $shownItems = this.elements.$posts.filter(':visible'),
        $ghostItems = this.elements.$postsContainer.find('.' + settings.classes.ghostItem),
        emptyColumns = (settings.colsCount - ($shownItems.length + $ghostItems.length) % settings.colsCount) % settings.colsCount;

    for (var i = 0; i < emptyColumns; i++) {
      this.elements.$postsContainer.append(jQuery('<div>', {
        class: settings.classes.item + ' ' + settings.classes.ghostItem
      }));
    }
  },
  showItems: function showItems($activeHiddenItems) {
    $activeHiddenItems.show();
    setTimeout(function () {
      $activeHiddenItems.css({
        opacity: 1
      });
    });
  },
  hideItems: function hideItems($inactiveShownItems) {
    $inactiveShownItems.hide();
  },
  arrangeGrid: function arrangeGrid() {
    var $ = jQuery,
        self = this,
        settings = self.getSettings(),
        $activeItems = self.elements.$posts.filter('.' + settings.classes.active),
        $inactiveItems = self.elements.$posts.not('.' + settings.classes.active),
        $shownItems = self.elements.$posts.filter(':visible'),
        $activeOrShownItems = $activeItems.add($shownItems),
        $activeShownItems = $activeItems.filter(':visible'),
        $activeHiddenItems = $activeItems.filter(':hidden'),
        $inactiveShownItems = $inactiveItems.filter(':visible'),
        itemWidth = $shownItems.outerWidth(),
        itemHeight = $shownItems.outerHeight();
    self.elements.$posts.css('transition-duration', settings.transitionDuration + 'ms');
    self.showItems($activeHiddenItems);

    if (self.isEdit) {
      self.fitImages();
    }

    self.handleEmptyColumns();

    if (self.isMasonryEnabled()) {
      self.hideItems($inactiveShownItems);
      self.showItems($activeHiddenItems);
      self.handleEmptyColumns();
      self.runMasonry();
      return;
    }

    $inactiveShownItems.css({
      opacity: 0,
      transform: 'scale3d(0.2, 0.2, 1)'
    });
    $activeShownItems.each(function () {
      var $item = $(this),
          currentOffset = self.getOffset($activeOrShownItems.index($item), itemWidth, itemHeight),
          requiredOffset = self.getOffset($shownItems.index($item), itemWidth, itemHeight);

      if (currentOffset.start === requiredOffset.start && currentOffset.top === requiredOffset.top) {
        return;
      }

      requiredOffset.start -= currentOffset.start;
      requiredOffset.top -= currentOffset.top;

      if (elementorFrontend.config.is_rtl) {
        requiredOffset.start *= -1;
      }

      $item.css({
        transitionDuration: '',
        transform: 'translate3d(' + requiredOffset.start + 'px, ' + requiredOffset.top + 'px, 0)'
      });
    });
    setTimeout(function () {
      $activeItems.each(function () {
        var $item = $(this),
            currentOffset = self.getOffset($activeOrShownItems.index($item), itemWidth, itemHeight),
            requiredOffset = self.getOffset($activeItems.index($item), itemWidth, itemHeight);
        $item.css({
          transitionDuration: settings.transitionDuration + 'ms'
        });
        requiredOffset.start -= currentOffset.start;
        requiredOffset.top -= currentOffset.top;

        if (elementorFrontend.config.is_rtl) {
          requiredOffset.start *= -1;
        }

        setTimeout(function () {
          $item.css('transform', 'translate3d(' + requiredOffset.start + 'px, ' + requiredOffset.top + 'px, 0)');
        });
      });
    });
    setTimeout(function () {
      self.hideItems($inactiveShownItems);
      $activeItems.css({
        transitionDuration: '',
        transform: 'translate3d(0px, 0px, 0px)'
      });
      self.handleEmptyColumns();
    }, settings.transitionDuration);
  },
  activeFilterButton: function activeFilterButton(filter) {
    var activeClass = this.getSettings('classes.active'),
        $filterButtons = this.elements.$filterButtons,
        $button = $filterButtons.filter('[data-filter="' + filter + '"]');
    $filterButtons.removeClass(activeClass);
    $button.addClass(activeClass);
  },
  setFilter: function setFilter(filter) {
    this.activeFilterButton(filter);
    this.filterItems(filter);
    this.arrangeGrid();
  },
  refreshGrid: function refreshGrid() {
    this.setColsCountSettings();
    this.arrangeGrid();
  },
  bindEvents: function bindEvents() {
    _posts.default.prototype.bindEvents.apply(this, arguments);

    this.elements.$filterButtons.on('click', this.onFilterButtonClick);
  },
  isMasonryEnabled: function isMasonryEnabled() {
    return !!this.getElementSettings('masonry');
  },
  run: function run() {
    _posts.default.prototype.run.apply(this, arguments);

    this.setColsCountSettings();
    this.setFilter('__all');
    this.handleEmptyColumns();
  },
  onFilterButtonClick: function onFilterButtonClick(event) {
    this.setFilter(jQuery(event.currentTarget).data('filter'));
  },
  onWindowResize: function onWindowResize() {
    _posts.default.prototype.onWindowResize.apply(this, arguments);

    this.refreshGrid();
  },
  onElementChange: function onElementChange(propertyName) {
    _posts.default.prototype.onElementChange.apply(this, arguments);

    if ('classic_item_ratio' === propertyName) {
      this.refreshGrid();
    }
  }
});

exports.default = _default;

/***/ }),

/***/ "../modules/posts/assets/js/frontend/handlers/posts.js":
/*!*************************************************************!*\
  !*** ../modules/posts/assets/js/frontend/handlers/posts.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(/*! core-js/modules/es6.regexp.match */ "../node_modules/core-js/modules/es6.regexp.match.js");

__webpack_require__(/*! core-js/modules/es6.array.find */ "../node_modules/core-js/modules/es6.array.find.js");

var _default = elementorModules.frontend.handlers.Base.extend({
  getSkinPrefix: function getSkinPrefix() {
    return 'classic_';
  },
  bindEvents: function bindEvents() {
    var cid = this.getModelCID();
    elementorFrontend.addListenerOnce(cid, 'resize', this.onWindowResize);
  },
  getClosureMethodsNames: function getClosureMethodsNames() {
    return elementorModules.frontend.handlers.Base.prototype.getClosureMethodsNames.apply(this, arguments).concat(['fitImages', 'onWindowResize', 'runMasonry']);
  },
  getDefaultSettings: function getDefaultSettings() {
    return {
      classes: {
        fitHeight: 'elementor-fit-height',
        hasItemRatio: 'elementor-has-item-ratio'
      },
      selectors: {
        postsContainer: '.elementor-posts-container',
        post: '.elementor-post',
        postThumbnail: '.elementor-post__thumbnail',
        postThumbnailImage: '.elementor-post__thumbnail img'
      }
    };
  },
  getDefaultElements: function getDefaultElements() {
    var selectors = this.getSettings('selectors');
    return {
      $postsContainer: this.$element.find(selectors.postsContainer),
      $posts: this.$element.find(selectors.post)
    };
  },
  fitImage: function fitImage($post) {
    var settings = this.getSettings(),
        $imageParent = $post.find(settings.selectors.postThumbnail),
        $image = $imageParent.find('img'),
        image = $image[0];

    if (!image) {
      return;
    }

    var imageParentRatio = $imageParent.outerHeight() / $imageParent.outerWidth(),
        imageRatio = image.naturalHeight / image.naturalWidth;
    $imageParent.toggleClass(settings.classes.fitHeight, imageRatio < imageParentRatio);
  },
  fitImages: function fitImages() {
    var $ = jQuery,
        self = this,
        itemRatio = getComputedStyle(this.$element[0], ':after').content,
        settings = this.getSettings();
    this.elements.$postsContainer.toggleClass(settings.classes.hasItemRatio, !!itemRatio.match(/\d/));

    if (self.isMasonryEnabled()) {
      return;
    }

    this.elements.$posts.each(function () {
      var $post = $(this),
          $image = $post.find(settings.selectors.postThumbnailImage);
      self.fitImage($post);
      $image.on('load', function () {
        self.fitImage($post);
      });
    });
  },
  setColsCountSettings: function setColsCountSettings() {
    var currentDeviceMode = elementorFrontend.getCurrentDeviceMode(),
        settings = this.getElementSettings(),
        skinPrefix = this.getSkinPrefix(),
        colsCount;

    switch (currentDeviceMode) {
      case 'mobile':
        colsCount = settings[skinPrefix + 'columns_mobile'];
        break;

      case 'tablet':
        colsCount = settings[skinPrefix + 'columns_tablet'];
        break;

      default:
        colsCount = settings[skinPrefix + 'columns'];
    }

    this.setSettings('colsCount', colsCount);
  },
  isMasonryEnabled: function isMasonryEnabled() {
    return !!this.getElementSettings(this.getSkinPrefix() + 'masonry');
  },
  initMasonry: function initMasonry() {
    imagesLoaded(this.elements.$posts, this.runMasonry);
  },
  runMasonry: function runMasonry() {
    var elements = this.elements;
    elements.$posts.css({
      marginTop: '',
      transitionDuration: ''
    });
    this.setColsCountSettings();
    var colsCount = this.getSettings('colsCount'),
        hasMasonry = this.isMasonryEnabled() && colsCount >= 2;
    elements.$postsContainer.toggleClass('elementor-posts-masonry', hasMasonry);

    if (!hasMasonry) {
      elements.$postsContainer.height('');
      return;
    }
    /* The `verticalSpaceBetween` variable is setup in a way that supports older versions of the portfolio widget */


    var verticalSpaceBetween = this.getElementSettings(this.getSkinPrefix() + 'row_gap.size');

    if ('' === this.getSkinPrefix() && '' === verticalSpaceBetween) {
      verticalSpaceBetween = this.getElementSettings(this.getSkinPrefix() + 'item_gap.size');
    }

    var masonry = new elementorModules.utils.Masonry({
      container: elements.$postsContainer,
      items: elements.$posts.filter(':visible'),
      columnsCount: this.getSettings('colsCount'),
      verticalSpaceBetween: verticalSpaceBetween
    });
    masonry.run();
  },
  run: function run() {
    // For slow browsers
    setTimeout(this.fitImages, 0);
    this.initMasonry();
  },
  onInit: function onInit() {
    elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);
    this.bindEvents();
    this.run();
  },
  onWindowResize: function onWindowResize() {
    this.fitImages();
    this.runMasonry();
  },
  onElementChange: function onElementChange() {
    this.fitImages();
    setTimeout(this.runMasonry);
  }
});

exports.default = _default;

/***/ }),

/***/ "../modules/share-buttons/assets/js/frontend/frontend-legacy.js":
/*!**********************************************************************!*\
  !*** ../modules/share-buttons/assets/js/frontend/frontend-legacy.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _shareButtons = _interopRequireDefault(__webpack_require__(/*! ./handlers/share-buttons */ "../modules/share-buttons/assets/js/frontend/handlers/share-buttons.js"));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this);
    elementorFrontend.elementsHandler.attachHandler('share-buttons', _shareButtons.default);
    return _this;
  }

  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),

/***/ "../modules/share-buttons/assets/js/frontend/handlers/share-buttons.js":
/*!*****************************************************************************!*\
  !*** ../modules/share-buttons/assets/js/frontend/handlers/share-buttons.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(/*! core-js/modules/es6.array.find */ "../node_modules/core-js/modules/es6.array.find.js");

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js"));

__webpack_require__(/*! regenerator-runtime/runtime */ "../node_modules/regenerator-runtime/runtime.js");

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

var _default = elementorModules.frontend.handlers.Base.extend({
  onInit: function () {
    var _onInit = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var elementSettings,
          classes,
          isCustomURL,
          shareLinkSettings,
          _args = arguments;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (this.isActive()) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, _args);
              elementSettings = this.getElementSettings(), classes = this.getSettings('classes'), isCustomURL = elementSettings.share_url && elementSettings.share_url.url, shareLinkSettings = {
                classPrefix: classes.shareLinkPrefix
              };

              if (isCustomURL) {
                shareLinkSettings.url = elementSettings.share_url.url;
              } else {
                shareLinkSettings.url = location.href;
                shareLinkSettings.title = elementorFrontend.config.post.title;
                shareLinkSettings.text = elementorFrontend.config.post.excerpt;
                shareLinkSettings.image = elementorFrontend.config.post.featuredImage;
              }
              /**
               * First check of the ShareLink is for detecting if the optimized mode is disabled and the library should be loaded dynamically.
               * Checking if the assetsLoader exist, in case that the library is not loaded due to Ad Blockers and not because the optimized mode is enabled.
               */


              if (!(!window.ShareLink && elementorFrontend.utils.assetsLoader)) {
                _context.next = 8;
                break;
              }

              _context.next = 8;
              return elementorFrontend.utils.assetsLoader.load('script', 'share-link');

            case 8:
              if (this.elements.$shareButton.shareLink) {
                _context.next = 10;
                break;
              }

              return _context.abrupt("return");

            case 10:
              this.elements.$shareButton.shareLink(shareLinkSettings);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function onInit() {
      return _onInit.apply(this, arguments);
    }

    return onInit;
  }(),
  getDefaultSettings: function getDefaultSettings() {
    return {
      selectors: {
        shareButton: '.elementor-share-btn'
      },
      classes: {
        shareLinkPrefix: 'elementor-share-btn_'
      }
    };
  },
  getDefaultElements: function getDefaultElements() {
    var selectors = this.getSettings('selectors');
    return {
      $shareButton: this.$element.find(selectors.shareButton)
    };
  },
  isActive: function isActive() {
    return !elementorFrontend.isEditMode();
  }
});

exports.default = _default;

/***/ }),

/***/ "../modules/slides/assets/js/frontend/frontend-legacy.js":
/*!***************************************************************!*\
  !*** ../modules/slides/assets/js/frontend/frontend-legacy.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _slides = _interopRequireDefault(__webpack_require__(/*! ./handlers/slides */ "../modules/slides/assets/js/frontend/handlers/slides.js"));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this);
    elementorFrontend.elementsHandler.attachHandler('slides', _slides.default);
    return _this;
  }

  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),

/***/ "../modules/slides/assets/js/frontend/handlers/slides.js":
/*!***************************************************************!*\
  !*** ../modules/slides/assets/js/frontend/handlers/slides.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js"));

__webpack_require__(/*! regenerator-runtime/runtime */ "../node_modules/regenerator-runtime/runtime.js");

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

__webpack_require__(/*! core-js/modules/es6.array.find */ "../node_modules/core-js/modules/es6.array.find.js");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var SlidesHandler = /*#__PURE__*/function (_elementorModules$fro) {
  (0, _inherits2.default)(SlidesHandler, _elementorModules$fro);

  var _super = (0, _createSuper2.default)(SlidesHandler);

  function SlidesHandler() {
    (0, _classCallCheck2.default)(this, SlidesHandler);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(SlidesHandler, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        selectors: {
          slider: '.elementor-slides-wrapper',
          slide: '.swiper-slide',
          slideInnerContents: '.swiper-slide-contents',
          activeSlide: '.swiper-slide-active',
          activeDuplicate: '.swiper-slide-duplicate-active'
        },
        classes: {
          animated: 'animated',
          kenBurnsActive: 'elementor-ken-burns--active',
          slideBackground: 'swiper-slide-bg'
        },
        attributes: {
          dataSliderOptions: 'slider_options',
          dataAnimation: 'animation'
        }
      };
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var selectors = this.getSettings('selectors'),
          elements = {
        $swiperContainer: this.$element.find(selectors.slider)
      };
      elements.$slides = elements.$swiperContainer.find(selectors.slide);
      return elements;
    }
  }, {
    key: "getSwiperOptions",
    value: function getSwiperOptions() {
      var _this = this;

      var elementSettings = this.getElementSettings(),
          swiperOptions = {
        autoplay: this.getAutoplayConfig(),
        grabCursor: true,
        initialSlide: this.getInitialSlide(),
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: 'yes' === elementSettings.infinite,
        speed: elementSettings.transition_speed,
        effect: elementSettings.transition,
        observeParents: true,
        observer: true,
        handleElementorBreakpoints: true,
        on: {
          slideChange: function slideChange() {
            _this.handleKenBurns();
          }
        }
      };
      var showArrows = 'arrows' === elementSettings.navigation || 'both' === elementSettings.navigation,
          pagination = 'dots' === elementSettings.navigation || 'both' === elementSettings.navigation;

      if (showArrows) {
        swiperOptions.navigation = {
          prevEl: '.elementor-swiper-button-prev',
          nextEl: '.elementor-swiper-button-next'
        };
      }

      if (pagination) {
        swiperOptions.pagination = {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        };
      }

      if (true === swiperOptions.loop) {
        swiperOptions.loopedSlides = this.getSlidesCount();
      }

      if ('fade' === swiperOptions.effect) {
        swiperOptions.fadeEffect = {
          crossFade: true
        };
      }

      return swiperOptions;
    }
  }, {
    key: "getAutoplayConfig",
    value: function getAutoplayConfig() {
      var elementSettings = this.getElementSettings();

      if ('yes' !== elementSettings.autoplay) {
        return false;
      }

      return {
        stopOnLastSlide: true,
        // Has no effect in infinite mode by default.
        delay: elementSettings.autoplay_speed,
        disableOnInteraction: 'yes' === elementSettings.pause_on_interaction
      };
    }
  }, {
    key: "initSingleSlideAnimations",
    value: function initSingleSlideAnimations() {
      var settings = this.getSettings(),
          animation = this.elements.$swiperContainer.data(settings.attributes.dataAnimation);
      this.elements.$swiperContainer.find('.' + settings.classes.slideBackground).addClass(settings.classes.kenBurnsActive); // If there is an animation, get the container of the slide's inner contents and add the animation classes to it

      if (animation) {
        this.elements.$swiperContainer.find(settings.selectors.slideInnerContents).addClass(settings.classes.animated + ' ' + animation);
      }
    }
  }, {
    key: "initSlider",
    value: function () {
      var _initSlider = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var $slider, settings, elementSettings, animation, Swiper;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                $slider = this.elements.$swiperContainer, settings = this.getSettings(), elementSettings = this.getElementSettings(), animation = $slider.data(settings.attributes.dataAnimation);

                if ($slider.length) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                if (!(1 >= this.getSlidesCount())) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                Swiper = elementorFrontend.utils.swiper;
                _context.next = 8;
                return new Swiper($slider, this.getSwiperOptions());

              case 8:
                this.swiper = _context.sent;
                // Expose the swiper instance in the frontend
                $slider.data('swiper', this.swiper); // The Ken Burns effect will only apply on the specific slides that toggled the effect ON,
                // since it depends on an additional class besides 'elementor-ken-burns--active'

                this.handleKenBurns();

                if (elementSettings.pause_on_hover) {
                  this.togglePauseOnHover(true);
                }

                if (animation) {
                  _context.next = 14;
                  break;
                }

                return _context.abrupt("return");

              case 14:
                this.swiper.on('slideChangeTransitionStart', function () {
                  var $sliderContent = $slider.find(settings.selectors.slideInnerContents);
                  $sliderContent.removeClass(settings.classes.animated + ' ' + animation).hide();
                });
                this.swiper.on('slideChangeTransitionEnd', function () {
                  var $currentSlide = $slider.find(settings.selectors.slideInnerContents);
                  $currentSlide.show().addClass(settings.classes.animated + ' ' + animation);
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function initSlider() {
        return _initSlider.apply(this, arguments);
      }

      return initSlider;
    }()
  }, {
    key: "onInit",
    value: function onInit() {
      elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);

      if (2 > this.getSlidesCount()) {
        this.initSingleSlideAnimations();
        return;
      }

      this.initSlider();
    }
  }, {
    key: "getChangeableProperties",
    value: function getChangeableProperties() {
      return {
        pause_on_hover: 'pauseOnHover',
        pause_on_interaction: 'disableOnInteraction',
        autoplay_speed: 'delay',
        transition_speed: 'speed'
      };
    }
  }, {
    key: "updateSwiperOption",
    value: function updateSwiperOption(propertyName) {
      if (0 === propertyName.indexOf('width')) {
        this.swiper.update();
        return;
      }

      var elementSettings = this.getElementSettings(),
          newSettingValue = elementSettings[propertyName],
          changeableProperties = this.getChangeableProperties();
      var propertyToUpdate = changeableProperties[propertyName],
          valueToUpdate = newSettingValue; // Handle special cases where the value to update is not the value that the Swiper library accepts

      switch (propertyName) {
        case 'autoplay_speed':
          propertyToUpdate = 'autoplay';
          valueToUpdate = {
            delay: newSettingValue,
            disableOnInteraction: 'yes' === elementSettings.pause_on_interaction
          };
          break;

        case 'pause_on_hover':
          this.togglePauseOnHover('yes' === newSettingValue);
          break;

        case 'pause_on_interaction':
          valueToUpdate = 'yes' === newSettingValue;
          break;
      } // 'pause_on_hover' is implemented by the handler with event listeners, not the Swiper library


      if ('pause_on_hover' !== propertyName) {
        this.swiper.params[propertyToUpdate] = valueToUpdate;
      }

      this.swiper.update();
    }
  }, {
    key: "onElementChange",
    value: function onElementChange(propertyName) {
      if (1 >= this.getSlidesCount()) {
        return;
      }

      var changeableProperties = this.getChangeableProperties();

      if (changeableProperties.hasOwnProperty(propertyName)) {
        this.updateSwiperOption(propertyName);
      }
    }
  }, {
    key: "onEditSettingsChange",
    value: function onEditSettingsChange(propertyName) {
      if (1 >= this.getSlidesCount()) {
        return;
      }

      if ('activeItemIndex' === propertyName) {
        this.swiper.slideToLoop(this.getEditSettings('activeItemIndex') - 1);
      }
    }
  }]);
  return SlidesHandler;
}(elementorModules.frontend.handlers.SwiperBase);

exports.default = SlidesHandler;

/***/ }),

/***/ "../modules/social/assets/js/frontend/frontend-legacy.js":
/*!***************************************************************!*\
  !*** ../modules/social/assets/js/frontend/frontend-legacy.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _facebook = _interopRequireDefault(__webpack_require__(/*! ./handlers/facebook */ "../modules/social/assets/js/frontend/handlers/facebook.js"));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this);
    elementorFrontend.elementsHandler.attachHandler('facebook-button', _facebook.default);
    elementorFrontend.elementsHandler.attachHandler('facebook-comments', _facebook.default);
    elementorFrontend.elementsHandler.attachHandler('facebook-embed', _facebook.default);
    elementorFrontend.elementsHandler.attachHandler('facebook-page', _facebook.default);
    return _this;
  }

  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),

/***/ "../modules/social/assets/js/frontend/handlers/facebook.js":
/*!*****************************************************************!*\
  !*** ../modules/social/assets/js/frontend/handlers/facebook.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _get3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/get */ "../node_modules/@babel/runtime-corejs2/helpers/get.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var FacebookHandler = /*#__PURE__*/function (_elementorModules$fro) {
  (0, _inherits2.default)(FacebookHandler, _elementorModules$fro);

  var _super = (0, _createSuper2.default)(FacebookHandler);

  function FacebookHandler() {
    (0, _classCallCheck2.default)(this, FacebookHandler);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(FacebookHandler, [{
    key: "getConfig",
    value: function getConfig() {
      return elementorProFrontend.config.facebook_sdk;
    }
  }, {
    key: "setConfig",
    value: function setConfig(prop, value) {
      elementorProFrontend.config.facebook_sdk[prop] = value;
    }
  }, {
    key: "parse",
    value: function parse() {
      // On FB SDK is loaded, parse current element
      FB.XFBML.parse(this.$element[0]);
    }
  }, {
    key: "loadSDK",
    value: function loadSDK() {
      var _this = this;

      var config = this.getConfig(); // Preventing from ajax request to be sent multiple times when loading multiple widgets

      if (config.isLoading || config.isLoaded) {
        return;
      }

      this.setConfig('isLoading', true);
      jQuery.ajax({
        url: 'https://connect.facebook.net/' + config.lang + '/sdk.js',
        dataType: 'script',
        cache: true,
        success: function success() {
          FB.init({
            appId: config.app_id,
            version: 'v2.10',
            xfbml: false
          });

          _this.setConfig('isLoaded', true);

          _this.setConfig('isLoading', false);

          elementorFrontend.elements.$document.trigger('fb:sdk:loaded');
        }
      });
    }
  }, {
    key: "onInit",
    value: function onInit() {
      var _get2,
          _this2 = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_get2 = (0, _get3.default)((0, _getPrototypeOf2.default)(FacebookHandler.prototype), "onInit", this)).call.apply(_get2, [this].concat(args));

      this.loadSDK();
      var config = this.getConfig();

      if (config.isLoaded) {
        this.parse();
      } else {
        elementorFrontend.elements.$document.on('fb:sdk:loaded', function () {
          return _this2.parse();
        });
      }
    }
  }]);
  return FacebookHandler;
}(elementorModules.frontend.handlers.Base);

exports.default = FacebookHandler;

/***/ }),

/***/ "../modules/table-of-contents/assets/js/frontend/frontend-legacy.js":
/*!**************************************************************************!*\
  !*** ../modules/table-of-contents/assets/js/frontend/frontend-legacy.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _tableOfContents = _interopRequireDefault(__webpack_require__(/*! ./handlers/table-of-contents */ "../modules/table-of-contents/assets/js/frontend/handlers/table-of-contents.js"));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this);
    elementorFrontend.elementsHandler.attachHandler('table-of-contents', _tableOfContents.default);
    return _this;
  }

  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),

/***/ "../modules/table-of-contents/assets/js/frontend/handlers/table-of-contents.js":
/*!*************************************************************************************!*\
  !*** ../modules/table-of-contents/assets/js/frontend/handlers/table-of-contents.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _keys = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js"));

__webpack_require__(/*! core-js/modules/es6.string.anchor */ "../node_modules/core-js/modules/es6.string.anchor.js");

__webpack_require__(/*! core-js/modules/es6.array.find */ "../node_modules/core-js/modules/es6.array.find.js");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _get3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/get */ "../node_modules/@babel/runtime-corejs2/helpers/get.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var TOCHandler = /*#__PURE__*/function (_elementorModules$fro) {
  (0, _inherits2.default)(TOCHandler, _elementorModules$fro);

  var _super = (0, _createSuper2.default)(TOCHandler);

  function TOCHandler() {
    (0, _classCallCheck2.default)(this, TOCHandler);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(TOCHandler, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      var elementSettings = this.getElementSettings(),
          listWrapperTag = 'numbers' === elementSettings.marker_view ? 'ol' : 'ul';
      return {
        selectors: {
          widgetContainer: '.elementor-widget-container',
          postContentContainer: '.elementor:not([data-elementor-type="header"]):not([data-elementor-type="footer"]):not([data-elementor-type="popup"])',
          expandButton: '.elementor-toc__toggle-button--expand',
          collapseButton: '.elementor-toc__toggle-button--collapse',
          body: '.elementor-toc__body',
          headerTitle: '.elementor-toc__header-title'
        },
        classes: {
          anchor: 'elementor-menu-anchor',
          listWrapper: 'elementor-toc__list-wrapper',
          listItem: 'elementor-toc__list-item',
          listTextWrapper: 'elementor-toc__list-item-text-wrapper',
          firstLevelListItem: 'elementor-toc__top-level',
          listItemText: 'elementor-toc__list-item-text',
          activeItem: 'elementor-item-active',
          headingAnchor: 'elementor-toc__heading-anchor',
          collapsed: 'elementor-toc--collapsed'
        },
        listWrapperTag: listWrapperTag
      };
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var settings = this.getSettings();
      return {
        $pageContainer: this.getContainer(),
        $widgetContainer: this.$element.find(settings.selectors.widgetContainer),
        $expandButton: this.$element.find(settings.selectors.expandButton),
        $collapseButton: this.$element.find(settings.selectors.collapseButton),
        $tocBody: this.$element.find(settings.selectors.body),
        $listItems: this.$element.find('.' + settings.classes.listItem)
      };
    }
  }, {
    key: "getContainer",
    value: function getContainer() {
      var settings = this.getSettings(),
          elementSettings = this.getElementSettings(); // If there is a custom container defined by the user, use it as the headings-scan container

      if (elementSettings.container) {
        return jQuery(elementSettings.container);
      } // Get the document wrapper element in which the TOC is located


      var $documentWrapper = this.$element.parents('.elementor'); // If the TOC container is a popup, only scan the popup for headings

      if ('popup' === $documentWrapper.attr('data-elementor-type')) {
        return $documentWrapper;
      } // If the TOC container is anything other than a popup, scan only the post/page content for headings


      return jQuery(settings.selectors.postContentContainer);
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      var elementSettings = this.getElementSettings();

      if (elementSettings.minimize_box) {
        this.elements.$expandButton.on('click', function () {
          return _this.expandBox();
        });
        this.elements.$collapseButton.on('click', function () {
          return _this.collapseBox();
        });
      }

      if (elementSettings.collapse_subitems) {
        this.elements.$listItems.on('hover', function (event) {
          return jQuery(event.target).slideToggle();
        });
      }
    }
  }, {
    key: "getHeadings",
    value: function getHeadings() {
      // Get all headings from document by user-selected tags
      var elementSettings = this.getElementSettings(),
          tags = elementSettings.headings_by_tags.join(','),
          selectors = this.getSettings('selectors'),
          excludedSelectors = elementSettings.exclude_headings_by_selector;
      return this.elements.$pageContainer.find(tags).not(selectors.headerTitle).filter(function (index, heading) {
        return !jQuery(heading).closest(excludedSelectors).length; // Handle excluded selectors if there are any
      });
    }
  }, {
    key: "addAnchorsBeforeHeadings",
    value: function addAnchorsBeforeHeadings() {
      var _this2 = this;

      var classes = this.getSettings('classes'); // Add an anchor element right before each TOC heading to create anchors for TOC links

      this.elements.$headings.before(function (index) {
        // Check if the heading element itself has an ID, or if it is a widget which includes a main heading element, whether the widget wrapper has an ID
        if (jQuery(_this2.elements.$headings[index]).data('hasOwnID')) {
          return;
        }

        return "<span id=\"".concat(classes.headingAnchor, "-").concat(index, "\" class=\"").concat(classes.anchor, " \"></span>");
      });
    }
  }, {
    key: "activateItem",
    value: function activateItem($listItem) {
      var classes = this.getSettings('classes');
      this.deactivateActiveItem($listItem);
      $listItem.addClass(classes.activeItem);
      this.$activeItem = $listItem;

      if (!this.getElementSettings('collapse_subitems')) {
        return;
      }

      var $activeList;

      if ($listItem.hasClass(classes.firstLevelListItem)) {
        $activeList = $listItem.parent().next();
      } else {
        $activeList = $listItem.parents('.' + classes.listWrapper).eq(-2);
      }

      if (!$activeList.length) {
        delete this.$activeList;
        return;
      }

      this.$activeList = $activeList;
      this.$activeList.stop().slideDown();
    }
  }, {
    key: "deactivateActiveItem",
    value: function deactivateActiveItem($activeToBe) {
      if (!this.$activeItem || this.$activeItem.is($activeToBe)) {
        return;
      }

      var _this$getSettings = this.getSettings(),
          classes = _this$getSettings.classes;

      this.$activeItem.removeClass(classes.activeItem);

      if (this.$activeList && (!$activeToBe || !this.$activeList[0].contains($activeToBe[0]))) {
        this.$activeList.slideUp();
      }
    }
  }, {
    key: "followAnchor",
    value: function followAnchor($element, index) {
      var _this3 = this;

      var anchorSelector = $element[0].hash;
      var $anchor;

      try {
        // `decodeURIComponent` for UTF8 characters in the hash.
        $anchor = jQuery(decodeURIComponent(anchorSelector));
      } catch (e) {
        return;
      }

      elementorFrontend.waypoint($anchor, function (direction) {
        if (_this3.itemClicked) {
          return;
        }

        var id = $anchor.attr('id');

        if ('down' === direction) {
          _this3.viewportItems[id] = true;

          _this3.activateItem($element);
        } else {
          delete _this3.viewportItems[id];

          _this3.activateItem(_this3.$listItemTexts.eq(index - 1));
        }
      }, {
        offset: 'bottom-in-view',
        triggerOnce: false
      });
      elementorFrontend.waypoint($anchor, function (direction) {
        if (_this3.itemClicked) {
          return;
        }

        var id = $anchor.attr('id');

        if ('down' === direction) {
          delete _this3.viewportItems[id];

          if ((0, _keys.default)(_this3.viewportItems).length) {
            _this3.activateItem(_this3.$listItemTexts.eq(index + 1));
          }
        } else {
          _this3.viewportItems[id] = true;

          _this3.activateItem($element);
        }
      }, {
        offset: 0,
        triggerOnce: false
      });
    }
  }, {
    key: "followAnchors",
    value: function followAnchors() {
      var _this4 = this;

      this.$listItemTexts.each(function (index, element) {
        return _this4.followAnchor(jQuery(element), index);
      });
    }
  }, {
    key: "populateTOC",
    value: function populateTOC() {
      this.listItemPointer = 0;
      var elementSettings = this.getElementSettings();

      if (elementSettings.hierarchical_view) {
        this.createNestedList();
      } else {
        this.createFlatList();
      }

      this.$listItemTexts = this.$element.find('.elementor-toc__list-item-text');
      this.$listItemTexts.on('click', this.onListItemClick.bind(this));

      if (!elementorFrontend.isEditMode()) {
        this.followAnchors();
      }
    }
  }, {
    key: "createNestedList",
    value: function createNestedList() {
      var _this5 = this;

      this.headingsData.forEach(function (heading, index) {
        heading.level = 0;

        for (var i = index - 1; i >= 0; i--) {
          var currentOrderedItem = _this5.headingsData[i];

          if (currentOrderedItem.tag <= heading.tag) {
            heading.level = currentOrderedItem.level;

            if (currentOrderedItem.tag < heading.tag) {
              heading.level++;
            }

            break;
          }
        }
      });
      this.elements.$tocBody.html(this.getNestedLevel(0));
    }
  }, {
    key: "createFlatList",
    value: function createFlatList() {
      this.elements.$tocBody.html(this.getNestedLevel());
    }
  }, {
    key: "getNestedLevel",
    value: function getNestedLevel(level) {
      var settings = this.getSettings(),
          elementSettings = this.getElementSettings(),
          icon = this.getElementSettings('icon'); // Open new list/nested list

      var html = "<".concat(settings.listWrapperTag, " class=\"").concat(settings.classes.listWrapper, "\">"); // for each list item, build its markup.

      while (this.listItemPointer < this.headingsData.length) {
        var currentItem = this.headingsData[this.listItemPointer];
        var listItemTextClasses = settings.classes.listItemText;

        if (0 === currentItem.level) {
          // If the current list item is a top level item, give it the first level class
          listItemTextClasses += ' ' + settings.classes.firstLevelListItem;
        }

        if (level > currentItem.level) {
          break;
        }

        if (level === currentItem.level) {
          html += "<li class=\"".concat(settings.classes.listItem, "\">");
          html += "<div class=\"".concat(settings.classes.listTextWrapper, "\">");
          var liContent = "<a href=\"#".concat(currentItem.anchorLink, "\" class=\"").concat(listItemTextClasses, "\">").concat(currentItem.text, "</a>"); // If list type is bullets, add the bullet icon as an <i> tag

          if ('bullets' === elementSettings.marker_view && icon) {
            liContent = "<i class=\"".concat(icon.value, "\"></i>").concat(liContent);
          }

          html += liContent;
          html += '</div>';
          this.listItemPointer++;
          var nextItem = this.headingsData[this.listItemPointer];

          if (nextItem && level < nextItem.level) {
            // If a new nested list has to be created under the current item,
            // this entire method is called recursively (outside the while loop, a list wrapper is created)
            html += this.getNestedLevel(nextItem.level);
          }

          html += '</li>';
        }
      }

      html += "</".concat(settings.listWrapperTag, ">");
      return html;
    }
  }, {
    key: "handleNoHeadingsFound",
    value: function handleNoHeadingsFound() {
      var noHeadingsText = elementorProFrontend.config.i18n['toc_no_headings_found'];

      if (elementorFrontend.isEditMode()) {
        noHeadingsText = elementorPro.translate('toc_no_headings_found');
      }

      return this.elements.$tocBody.html(noHeadingsText);
    }
  }, {
    key: "collapseOnInit",
    value: function collapseOnInit() {
      var minimizedOn = this.getElementSettings('minimized_on'),
          currentDeviceMode = elementorFrontend.getCurrentDeviceMode();

      if ('tablet' === minimizedOn && 'desktop' !== currentDeviceMode || 'mobile' === minimizedOn && 'mobile' === currentDeviceMode) {
        this.collapseBox();
      }
    }
  }, {
    key: "getHeadingAnchorLink",
    value: function getHeadingAnchorLink(index, classes) {
      var headingID = this.elements.$headings[index].id,
          wrapperID = this.elements.$headings[index].closest('.elementor-widget').id;
      var anchorLink = '';

      if (headingID) {
        anchorLink = headingID;
      } else if (wrapperID) {
        // If the heading itself has an ID, we don't want to overwrite it
        anchorLink = wrapperID;
      } // If there is no existing ID, use the heading text to create a semantic ID


      if (headingID || wrapperID) {
        jQuery(this.elements.$headings[index]).data('hasOwnID', true);
      } else {
        anchorLink = "".concat(classes.headingAnchor, "-").concat(index);
      }

      return anchorLink;
    }
  }, {
    key: "setHeadingsData",
    value: function setHeadingsData() {
      var _this6 = this;

      this.headingsData = [];
      var classes = this.getSettings('classes'); // Create an array for simplifying TOC list creation

      this.elements.$headings.each(function (index, element) {
        var anchorLink = _this6.getHeadingAnchorLink(index, classes);

        _this6.headingsData.push({
          tag: +element.nodeName.slice(1),
          text: element.textContent,
          anchorLink: anchorLink
        });
      });
    }
  }, {
    key: "run",
    value: function run() {
      this.elements.$headings = this.getHeadings();

      if (!this.elements.$headings.length) {
        return this.handleNoHeadingsFound();
      }

      this.setHeadingsData();

      if (!elementorFrontend.isEditMode()) {
        this.addAnchorsBeforeHeadings();
      }

      this.populateTOC();

      if (this.getElementSettings('minimize_box')) {
        this.collapseOnInit();
      }
    }
  }, {
    key: "expandBox",
    value: function expandBox() {
      var boxHeight = this.getCurrentDeviceSetting('min_height');
      this.$element.removeClass(this.getSettings('classes.collapsed'));
      this.elements.$tocBody.slideDown(); // return container to the full height in case a min-height is defined by the user

      this.elements.$widgetContainer.css('min-height', boxHeight.size + boxHeight.unit);
    }
  }, {
    key: "collapseBox",
    value: function collapseBox() {
      this.$element.addClass(this.getSettings('classes.collapsed'));
      this.elements.$tocBody.slideUp(); // close container in case a min-height is defined by the user

      this.elements.$widgetContainer.css('min-height', '0px');
    }
  }, {
    key: "onInit",
    value: function onInit() {
      var _get2,
          _this7 = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_get2 = (0, _get3.default)((0, _getPrototypeOf2.default)(TOCHandler.prototype), "onInit", this)).call.apply(_get2, [this].concat(args));

      this.viewportItems = [];
      jQuery(function () {
        return _this7.run();
      });
    }
  }, {
    key: "onListItemClick",
    value: function onListItemClick(event) {
      var _this8 = this;

      this.itemClicked = true;
      setTimeout(function () {
        return _this8.itemClicked = false;
      }, 2000);
      var $clickedItem = jQuery(event.target),
          $list = $clickedItem.parent().next(),
          collapseNestedList = this.getElementSettings('collapse_subitems');
      var listIsActive;

      if (collapseNestedList && $clickedItem.hasClass(this.getSettings('classes.firstLevelListItem'))) {
        if ($list.is(':visible')) {
          listIsActive = true;
        }
      }

      this.activateItem($clickedItem);

      if (collapseNestedList && listIsActive) {
        $list.slideUp();
      }
    }
  }]);
  return TOCHandler;
}(elementorModules.frontend.handlers.Base);

exports.default = TOCHandler;

/***/ }),

/***/ "../modules/theme-builder/assets/js/frontend/frontend-legacy.js":
/*!**********************************************************************!*\
  !*** ../modules/theme-builder/assets/js/frontend/frontend-legacy.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(/*! core-js/modules/es6.regexp.search */ "../node_modules/core-js/modules/es6.regexp.search.js");

__webpack_require__(/*! core-js/modules/es6.regexp.match */ "../node_modules/core-js/modules/es6.regexp.match.js");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _archivePostsSkinClassic = _interopRequireDefault(__webpack_require__(/*! ./handlers/archive-posts-skin-classic */ "../modules/theme-builder/assets/js/frontend/handlers/archive-posts-skin-classic.js"));

var _archivePostsSkinCards = _interopRequireDefault(__webpack_require__(/*! ./handlers/archive-posts-skin-cards */ "../modules/theme-builder/assets/js/frontend/handlers/archive-posts-skin-cards.js"));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this);
    elementorFrontend.elementsHandler.attachHandler('archive-posts', _archivePostsSkinClassic.default, 'archive_classic');
    elementorFrontend.elementsHandler.attachHandler('archive-posts', _archivePostsSkinClassic.default, 'archive_full_content');
    elementorFrontend.elementsHandler.attachHandler('archive-posts', _archivePostsSkinCards.default, 'archive_cards');
    jQuery(function () {
      // Go to elementor element - if the URL is something like http://domain.com/any-page?preview=true&theme_template_id=6479
      var match = location.search.match(/theme_template_id=(\d*)/),
          $element = match ? jQuery('.elementor-' + match[1]) : [];

      if ($element.length) {
        jQuery('html, body').animate({
          scrollTop: $element.offset().top - window.innerHeight / 2
        });
      }
    });
    return _this;
  }

  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),

/***/ "../modules/theme-builder/assets/js/frontend/handlers/archive-posts-skin-cards.js":
/*!****************************************************************************************!*\
  !*** ../modules/theme-builder/assets/js/frontend/handlers/archive-posts-skin-cards.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _cards = _interopRequireDefault(__webpack_require__(/*! ../../../../../posts/assets/js/frontend/handlers/cards */ "../modules/posts/assets/js/frontend/handlers/cards.js"));

var _default = _cards.default.extend({
  getSkinPrefix: function getSkinPrefix() {
    return 'archive_cards_';
  }
});

exports.default = _default;

/***/ }),

/***/ "../modules/theme-builder/assets/js/frontend/handlers/archive-posts-skin-classic.js":
/*!******************************************************************************************!*\
  !*** ../modules/theme-builder/assets/js/frontend/handlers/archive-posts-skin-classic.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _posts = _interopRequireDefault(__webpack_require__(/*! ../../../../../posts/assets/js/frontend/handlers/posts */ "../modules/posts/assets/js/frontend/handlers/posts.js"));

var _default = _posts.default.extend({
  getSkinPrefix: function getSkinPrefix() {
    return 'archive_classic_';
  }
});

exports.default = _default;

/***/ }),

/***/ "../modules/theme-elements/assets/js/frontend/frontend-legacy.js":
/*!***********************************************************************!*\
  !*** ../modules/theme-elements/assets/js/frontend/frontend-legacy.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _searchForm = _interopRequireDefault(__webpack_require__(/*! ./handlers/search-form */ "../modules/theme-elements/assets/js/frontend/handlers/search-form.js"));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this);
    elementorFrontend.elementsHandler.attachHandler('search-form', _searchForm.default);
    return _this;
  }

  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),

/***/ "../modules/theme-elements/assets/js/frontend/handlers/search-form.js":
/*!****************************************************************************!*\
  !*** ../modules/theme-elements/assets/js/frontend/handlers/search-form.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(/*! core-js/modules/es6.array.find */ "../node_modules/core-js/modules/es6.array.find.js");

var _default = elementorModules.frontend.handlers.Base.extend({
  getDefaultSettings: function getDefaultSettings() {
    return {
      selectors: {
        wrapper: '.elementor-search-form',
        container: '.elementor-search-form__container',
        icon: '.elementor-search-form__icon',
        input: '.elementor-search-form__input',
        toggle: '.elementor-search-form__toggle',
        submit: '.elementor-search-form__submit',
        closeButton: '.dialog-close-button'
      },
      classes: {
        isFocus: 'elementor-search-form--focus',
        isFullScreen: 'elementor-search-form--full-screen',
        lightbox: 'elementor-lightbox'
      }
    };
  },
  getDefaultElements: function getDefaultElements() {
    var selectors = this.getSettings('selectors'),
        elements = {};
    elements.$wrapper = this.$element.find(selectors.wrapper);
    elements.$container = this.$element.find(selectors.container);
    elements.$input = this.$element.find(selectors.input);
    elements.$icon = this.$element.find(selectors.icon);
    elements.$toggle = this.$element.find(selectors.toggle);
    elements.$submit = this.$element.find(selectors.submit);
    elements.$closeButton = this.$element.find(selectors.closeButton);
    return elements;
  },
  bindEvents: function bindEvents() {
    var self = this,
        $container = self.elements.$container,
        $closeButton = self.elements.$closeButton,
        $input = self.elements.$input,
        $wrapper = self.elements.$wrapper,
        $icon = self.elements.$icon,
        skin = this.getElementSettings('skin'),
        classes = this.getSettings('classes');

    if ('full_screen' === skin) {
      // Activate full-screen mode on click
      self.elements.$toggle.on('click', function () {
        $container.toggleClass(classes.isFullScreen).toggleClass(classes.lightbox);
        $input.trigger('focus');
      }); // Deactivate full-screen mode on click or on esc.

      $container.on('click', function (event) {
        if ($container.hasClass(classes.isFullScreen) && $container[0] === event.target) {
          $container.removeClass(classes.isFullScreen).removeClass(classes.lightbox);
        }
      });
      $closeButton.on('click', function () {
        $container.removeClass(classes.isFullScreen).removeClass(classes.lightbox);
      });
      elementorFrontend.elements.$document.on('keyup', function (event) {
        var ESC_KEY = 27;

        if (ESC_KEY === event.keyCode) {
          if ($container.hasClass(classes.isFullScreen)) {
            $container.trigger('click');
          }
        }
      });
    } else {
      // Apply focus style on wrapper element when input is focused
      $input.on({
        focus: function focus() {
          $wrapper.addClass(classes.isFocus);
        },
        blur: function blur() {
          $wrapper.removeClass(classes.isFocus);
        }
      });
    }

    if ('minimal' === skin) {
      // Apply focus style on wrapper element when icon is clicked in minimal skin
      $icon.on('click', function () {
        $wrapper.addClass(classes.isFocus);
        $input.trigger('focus');
      });
    }
  }
});

exports.default = _default;

/***/ }),

/***/ "../modules/woocommerce/assets/js/frontend/frontend-legacy.js":
/*!********************************************************************!*\
  !*** ../modules/woocommerce/assets/js/frontend/frontend-legacy.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _menuCart = _interopRequireDefault(__webpack_require__(/*! ./handlers/menu-cart */ "../modules/woocommerce/assets/js/frontend/handlers/menu-cart.js"));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this);
    elementorFrontend.elementsHandler.attachHandler('woocommerce-menu-cart', _menuCart.default);

    if (elementorFrontend.isEditMode()) {
      return (0, _possibleConstructorReturn2.default)(_this);
    }

    elementorFrontend.elements.$body.on('wc_fragments_loaded wc_fragments_refreshed', function () {
      jQuery('div.elementor-widget-woocommerce-menu-cart').each(function () {
        elementorFrontend.elementsHandler.runReadyTrigger(jQuery(this));
      });
    });
    return _this;
  }

  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),

/***/ "../modules/woocommerce/assets/js/frontend/handlers/menu-cart.js":
/*!***********************************************************************!*\
  !*** ../modules/woocommerce/assets/js/frontend/handlers/menu-cart.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(/*! core-js/modules/es6.array.find */ "../node_modules/core-js/modules/es6.array.find.js");

var _default = elementorModules.frontend.handlers.Base.extend({
  getDefaultSettings: function getDefaultSettings() {
    return {
      selectors: {
        container: '.elementor-menu-cart__container',
        main: '.elementor-menu-cart__main',
        toggle: '.elementor-menu-cart__toggle .elementor-button',
        closeButton: '.elementor-menu-cart__close-button',
        cartLink: '#elementor-menu-cart__toggle_button'
      },
      classes: {
        isShown: 'elementor-menu-cart--shown',
        lightbox: 'elementor-lightbox'
      }
    };
  },
  getDefaultElements: function getDefaultElements() {
    var selectors = this.getSettings('selectors'),
        elements = {};
    elements.$container = this.$element.find(selectors.container);
    elements.$main = this.$element.find(selectors.main);
    elements.$toggle = this.$element.find(selectors.toggle);
    elements.$closeButton = this.$element.find(selectors.closeButton);
    elements.$cartLink = this.$element.find(selectors.cartLink);
    return elements;
  },
  toggleAriaExpanded: function toggleAriaExpanded($element) {
    $element.attr('aria-expanded', function (index, isExpanded) {
      if (typeof isExpanded !== 'undefined') {
        // Check if aria-expanded property even exists
        return 'true' !== isExpanded;
      }

      return true;
    });
  },
  removeAttributesOnHide: function removeAttributesOnHide() {
    var _this$elements = this.elements,
        $container = _this$elements.$container,
        $main = _this$elements.$main,
        classes = this.getSettings('classes');
    $container.removeClass(classes.isShown).attr('aria-expanded', false);
    $main.attr('aria-expanded', false);
  },
  bindEvents: function bindEvents() {
    var _this = this;

    var _this$elements2 = this.elements,
        $container = _this$elements2.$container,
        $main = _this$elements2.$main,
        $toggle = _this$elements2.$toggle,
        $closeButton = _this$elements2.$closeButton,
        $cartLink = _this$elements2.$cartLink,
        classes = this.getSettings('classes'); // Activate full-screen mode on click

    $toggle.on('click', function (event) {
      var noQueryParams = -1 === ElementorProFrontendConfig.menu_cart.cart_page_url.indexOf('?'),
          currentUrl = noQueryParams ? window.location.origin + window.location.pathname : window.location.href,
          isCart = ElementorProFrontendConfig.menu_cart.cart_page_url === currentUrl,
          isCheckout = ElementorProFrontendConfig.menu_cart.checkout_page_url === currentUrl;

      if (!isCart && !isCheckout) {
        event.preventDefault();
        $container.toggleClass(classes.isShown);

        _this.toggleAriaExpanded($container);

        _this.toggleAriaExpanded($main);
      } else {
        var cartUrl = ElementorProFrontendConfig.menu_cart.cart_page_url;
        $cartLink.attr('href', cartUrl);

        _this.removeAttributesOnHide();
      }
    }); // Deactivate full-screen mode on click or on esc.

    $container.on('click', function (event) {
      if ($container.hasClass(classes.isShown) && $container[0] === event.target) {
        _this.removeAttributesOnHide();
      }
    });
    $closeButton.on('click', function () {
      _this.removeAttributesOnHide();
    });
    elementorFrontend.elements.$document.on('keyup', function (event) {
      var ESC_KEY = 27;

      if (ESC_KEY === event.keyCode) {
        if ($container.hasClass(classes.isShown)) {
          $container.trigger('click');
        }
      }
    });
  }
});

exports.default = _default;

/***/ }),

/***/ "../node_modules/core-js/modules/_fails-is-regexp.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/modules/_fails-is-regexp.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MATCH = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/modules/_wks.js")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_same-value.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/modules/_same-value.js ***!
  \******************************************************/
/***/ ((module) => {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_species-constructor.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/modules/_species-constructor.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "../node_modules/core-js/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "../node_modules/core-js/modules/_string-context.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/modules/_string-context.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "../node_modules/core-js/modules/_is-regexp.js");
var defined = __webpack_require__(/*! ./_defined */ "../node_modules/core-js/modules/_defined.js");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "../node_modules/core-js/modules/_string-html.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/modules/_string-html.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var fails = __webpack_require__(/*! ./_fails */ "../node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "../node_modules/core-js/modules/_defined.js");
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),

/***/ "../node_modules/core-js/modules/es6.object.to-string.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.object.to-string.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(/*! ./_classof */ "../node_modules/core-js/modules/_classof.js");
var test = {};
test[__webpack_require__(/*! ./_wks */ "../node_modules/core-js/modules/_wks.js")('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(/*! ./_redefine */ "../node_modules/core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),

/***/ "../node_modules/core-js/modules/es6.regexp.flags.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.regexp.flags.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/modules/_descriptors.js") && /./g.flags != 'g') __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/modules/_object-dp.js").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(/*! ./_flags */ "../node_modules/core-js/modules/_flags.js")
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.regexp.replace.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.regexp.replace.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/core-js/modules/_to-length.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "../node_modules/core-js/modules/_to-integer.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "../node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "../node_modules/core-js/modules/_regexp-exec-abstract.js");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(/*! ./_fix-re-wks */ "../node_modules/core-js/modules/_fix-re-wks.js")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.regexp.search.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.regexp.search.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var sameValue = __webpack_require__(/*! ./_same-value */ "../node_modules/core-js/modules/_same-value.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "../node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@search logic
__webpack_require__(/*! ./_fix-re-wks */ "../node_modules/core-js/modules/_fix-re-wks.js")('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.regexp.split.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.regexp.split.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isRegExp = __webpack_require__(/*! ./_is-regexp */ "../node_modules/core-js/modules/_is-regexp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "../node_modules/core-js/modules/_species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "../node_modules/core-js/modules/_advance-string-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/core-js/modules/_to-length.js");
var callRegExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "../node_modules/core-js/modules/_regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "../node_modules/core-js/modules/_regexp-exec.js");
var fails = __webpack_require__(/*! ./_fails */ "../node_modules/core-js/modules/_fails.js");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(/*! ./_fix-re-wks */ "../node_modules/core-js/modules/_fix-re-wks.js")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.regexp.to-string.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(/*! ./es6.regexp.flags */ "../node_modules/core-js/modules/es6.regexp.flags.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var $flags = __webpack_require__(/*! ./_flags */ "../node_modules/core-js/modules/_flags.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/modules/_descriptors.js");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(/*! ./_redefine */ "../node_modules/core-js/modules/_redefine.js")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(/*! ./_fails */ "../node_modules/core-js/modules/_fails.js")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "../node_modules/core-js/modules/es6.string.anchor.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.string.anchor.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.2 String.prototype.anchor(name)
__webpack_require__(/*! ./_string-html */ "../node_modules/core-js/modules/_string-html.js")('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.string.includes.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.string.includes.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var context = __webpack_require__(/*! ./_string-context */ "../node_modules/core-js/modules/_string-context.js");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "../node_modules/core-js/modules/_fails-is-regexp.js")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es7.array.includes.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/modules/es7.array.includes.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var $includes = __webpack_require__(/*! ./_array-includes */ "../node_modules/core-js/modules/_array-includes.js")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "../node_modules/core-js/modules/_add-to-unscopables.js")('includes');


/***/ }),

/***/ "../node_modules/regenerator-runtime/runtime.js":
/*!******************************************************!*\
  !*** ../node_modules/regenerator-runtime/runtime.js ***!
  \******************************************************/
/***/ ((module) => {

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
   true ? module.exports : 0
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


/***/ })

},
0,[["../assets/dev/js/frontend/preloaded-elements-handlers.js","webpack-pro.runtime","frontend"]]]);
//# sourceMappingURL=preloaded-elements-handlers.js.map
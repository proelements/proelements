/*! pro-elements - v3.0.10 - 20-01-2021 */
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
/******/ 	return __webpack_require__(__webpack_require__.s = 302);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(115);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(133);

var setPrototypeOf = __webpack_require__(136);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__(83);

var getPrototypeOf = __webpack_require__(26);

var isNativeReflectConstruct = __webpack_require__(146);

var possibleConstructorReturn = __webpack_require__(147);

function _createSuper(Derived) {
  var hasNativeReflectConstruct = isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = getPrototypeOf(this).constructor;
      result = _Reflect$construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return possibleConstructorReturn(this, result);
  };
}

module.exports = _createSuper;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(0);

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(7);
var core = __webpack_require__(2);
var ctx = __webpack_require__(27);
var hide = __webpack_require__(21);
var has = __webpack_require__(16);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(55)('wks');
var uid = __webpack_require__(38);
var Symbol = __webpack_require__(7).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(70)('wks');
var uid = __webpack_require__(69);
var Symbol = __webpack_require__(17).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(20)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(12);
var IE8_DOM_DEFINE = __webpack_require__(78);
var toPrimitive = __webpack_require__(52);
var dP = Object.defineProperty;

exports.f = __webpack_require__(14) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(91);
var defined = __webpack_require__(46);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(51);
var $find = __webpack_require__(163)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(107)(KEY);


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(15);
var createDesc = __webpack_require__(30);
module.exports = __webpack_require__(14) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(33)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(24);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(143);

var _Object$setPrototypeOf = __webpack_require__(82);

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(28);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(46);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(39);
var createDesc = __webpack_require__(89);
module.exports = __webpack_require__(22) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(17);
var hide = __webpack_require__(32);
var has = __webpack_require__(60);
var SRC = __webpack_require__(69)('src');
var $toString = __webpack_require__(149);
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(45).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(80);
var enumBugKeys = __webpack_require__(56);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(42);
var createDesc = __webpack_require__(30);
var toIObject = __webpack_require__(18);
var toPrimitive = __webpack_require__(52);
var has = __webpack_require__(16);
var IE8_DOM_DEFINE = __webpack_require__(78);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(14) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(12);
var dPs = __webpack_require__(95);
var enumBugKeys = __webpack_require__(56);
var IE_PROTO = __webpack_require__(54)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(71)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(96).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(23);
var IE8_DOM_DEFINE = __webpack_require__(99);
var toPrimitive = __webpack_require__(101);
var dP = Object.defineProperty;

exports.f = __webpack_require__(22) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(15).f;
var has = __webpack_require__(16);
var TAG = __webpack_require__(9)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 43 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 46 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(182);

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(49);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 49 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(304)();
}


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(17);
var core = __webpack_require__(45);
var hide = __webpack_require__(32);
var redefine = __webpack_require__(34);
var ctx = __webpack_require__(64);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(10);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 53 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(55)('keys');
var uid = __webpack_require__(38);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(2);
var global = __webpack_require__(7);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(31) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 56 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(9);


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(7);
var core = __webpack_require__(2);
var LIBRARY = __webpack_require__(31);
var wksExt = __webpack_require__(57);
var defineProperty = __webpack_require__(15).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(0);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _Object$defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 60 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 61 */,
/* 62 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = elementorAppPackages.appUi;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(84);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = wp.i18n;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(119)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(79)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(16);
var toObject = __webpack_require__(29);
var IE_PROTO = __webpack_require__(54)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 68 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 69 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(45);
var global = __webpack_require__(17);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(102) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
var document = __webpack_require__(7).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(8);
var core = __webpack_require__(2);
var fails = __webpack_require__(20);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(53);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(123);
var global = __webpack_require__(7);
var hide = __webpack_require__(21);
var Iterators = __webpack_require__(25);
var TO_STRING_TAG = __webpack_require__(9)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(80);
var hiddenKeys = __webpack_require__(56).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(103);
var defined = __webpack_require__(44);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(14) && !__webpack_require__(20)(function () {
  return Object.defineProperty(__webpack_require__(71)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(31);
var $export = __webpack_require__(8);
var redefine = __webpack_require__(76);
var hide = __webpack_require__(21);
var Iterators = __webpack_require__(25);
var $iterCreate = __webpack_require__(120);
var setToStringTag = __webpack_require__(41);
var getPrototypeOf = __webpack_require__(67);
var ITERATOR = __webpack_require__(9)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(16);
var toIObject = __webpack_require__(18);
var arrayIndexOf = __webpack_require__(121)(false);
var IE_PROTO = __webpack_require__(54)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(38)('meta');
var isObject = __webpack_require__(10);
var has = __webpack_require__(16);
var setDesc = __webpack_require__(15).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(20)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(137);

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(140);

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(43);
var TAG = __webpack_require__(13)('toStringTag');
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
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(117);

var _Symbol = __webpack_require__(92);

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(40);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 88 */
/***/ (function(module, exports) {



/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(23);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(40);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(126);

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(40);
var TAG = __webpack_require__(9)('toStringTag');
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
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(44);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(15);
var anObject = __webpack_require__(12);
var getKeys = __webpack_require__(35);

module.exports = __webpack_require__(14) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(7).document;
module.exports = document && document.documentElement;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(7);
var has = __webpack_require__(16);
var DESCRIPTORS = __webpack_require__(14);
var $export = __webpack_require__(8);
var redefine = __webpack_require__(76);
var META = __webpack_require__(81).KEY;
var $fails = __webpack_require__(20);
var shared = __webpack_require__(55);
var setToStringTag = __webpack_require__(41);
var uid = __webpack_require__(38);
var wks = __webpack_require__(9);
var wksExt = __webpack_require__(57);
var wksDefine = __webpack_require__(58);
var enumKeys = __webpack_require__(127);
var isArray = __webpack_require__(87);
var anObject = __webpack_require__(12);
var isObject = __webpack_require__(10);
var toObject = __webpack_require__(29);
var toIObject = __webpack_require__(18);
var toPrimitive = __webpack_require__(52);
var createDesc = __webpack_require__(30);
var _create = __webpack_require__(37);
var gOPNExt = __webpack_require__(128);
var $GOPD = __webpack_require__(36);
var $GOPS = __webpack_require__(62);
var $DP = __webpack_require__(15);
var $keys = __webpack_require__(35);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(75).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(42).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(31)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(21)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 98 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(22) && !__webpack_require__(33)(function () {
  return Object.defineProperty(__webpack_require__(100)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(24);
var document = __webpack_require__(17).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(24);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(43);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(23);
var toObject = __webpack_require__(94);
var toLength = __webpack_require__(48);
var toInteger = __webpack_require__(49);
var advanceStringIndex = __webpack_require__(114);
var regExpExec = __webpack_require__(108);
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(109)('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
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
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(90);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(159);

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(13)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(32)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(85);
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(188);
var redefine = __webpack_require__(34);
var hide = __webpack_require__(32);
var fails = __webpack_require__(33);
var defined = __webpack_require__(44);
var wks = __webpack_require__(13);
var regexpExec = __webpack_require__(105);

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(27);
var call = __webpack_require__(131);
var isArrayIter = __webpack_require__(132);
var anObject = __webpack_require__(12);
var toLength = __webpack_require__(73);
var getIterFn = __webpack_require__(111);
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
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(93);
var ITERATOR = __webpack_require__(9)('iterator');
var Iterators = __webpack_require__(25);
module.exports = __webpack_require__(2).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(39).f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(22) && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(85);
var test = {};
test[__webpack_require__(13)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(34)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(168)(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(116);
var $Object = __webpack_require__(2).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(8);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(14), 'Object', { defineProperty: __webpack_require__(15).f });


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(118);

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(66);
__webpack_require__(74);
module.exports = __webpack_require__(57).f('iterator');


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(53);
var defined = __webpack_require__(46);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(37);
var descriptor = __webpack_require__(30);
var setToStringTag = __webpack_require__(41);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(21)(IteratorPrototype, __webpack_require__(9)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(18);
var toLength = __webpack_require__(73);
var toAbsoluteIndex = __webpack_require__(122);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(53);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(124);
var step = __webpack_require__(125);
var Iterators = __webpack_require__(25);
var toIObject = __webpack_require__(18);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(79)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(97);
__webpack_require__(88);
__webpack_require__(129);
__webpack_require__(130);
module.exports = __webpack_require__(2).Symbol;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(35);
var gOPS = __webpack_require__(62);
var pIE = __webpack_require__(42);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(18);
var gOPN = __webpack_require__(75).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58)('asyncIterator');


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58)('observable');


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(12);
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
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(25);
var ITERATOR = __webpack_require__(9)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(134);

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(135);
var $Object = __webpack_require__(2).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(8);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(37) });


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(82);

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(138);
module.exports = __webpack_require__(2).Object.setPrototypeOf;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(8);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(139).set });


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(10);
var anObject = __webpack_require__(12);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(27)(Function.call, __webpack_require__(36).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(141);
module.exports = __webpack_require__(2).Reflect.construct;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(8);
var create = __webpack_require__(37);
var aFunction = __webpack_require__(28);
var anObject = __webpack_require__(12);
var isObject = __webpack_require__(10);
var fails = __webpack_require__(20);
var bind = __webpack_require__(142);
var rConstruct = (__webpack_require__(7).Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(28);
var isObject = __webpack_require__(10);
var invoke = __webpack_require__(98);
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(144);

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(145);
module.exports = __webpack_require__(2).Object.getPrototypeOf;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(29);
var $getPrototypeOf = __webpack_require__(67);

__webpack_require__(72)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__(83);

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(86);

var assertThisInitialized = __webpack_require__(68);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(28);

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
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(70)('native-function-to-string', Function.toString);


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(24);
var cof = __webpack_require__(43);
var MATCH = __webpack_require__(13)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),
/* 151 */,
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(106);

var _Object$defineProperty = __webpack_require__(0);

var _typeof = __webpack_require__(86);

var _WeakMap = __webpack_require__(250);

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(21);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 154 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(0);

var _Object$defineProperties = __webpack_require__(213);

var _Object$getOwnPropertyDescriptors = __webpack_require__(216);

var _Object$getOwnPropertyDescriptor = __webpack_require__(106);

var _Object$getOwnPropertySymbols = __webpack_require__(220);

var _Object$keys = __webpack_require__(47);

var defineProperty = __webpack_require__(59);

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
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(77);
var toLength = __webpack_require__(48);
var toAbsoluteIndex = __webpack_require__(167);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 157 */,
/* 158 */,
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(160);
var $Object = __webpack_require__(2).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(18);
var $getOwnPropertyDescriptor = __webpack_require__(36).f;

__webpack_require__(72)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(15);
var createDesc = __webpack_require__(30);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(9)('iterator');
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
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(64);
var IObject = __webpack_require__(103);
var toObject = __webpack_require__(94);
var toLength = __webpack_require__(48);
var asc = __webpack_require__(164);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(165);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(24);
var isArray = __webpack_require__(166);
var SPECIES = __webpack_require__(13)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(43);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(49);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(49);
var defined = __webpack_require__(44);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(211);

/***/ }),
/* 170 */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__, PropTypes) {

var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.TemplatesProvider = exports.Context = void 0;

var _react = _interopRequireDefault(__webpack_require__(11));

var _values = _interopRequireDefault(__webpack_require__(184));

var _objectSpread5 = _interopRequireDefault(__webpack_require__(155));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(68));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59));

var _baseContext = _interopRequireDefault(__webpack_require__(289));

var _commands = __webpack_require__(186);

var _component = _interopRequireDefault(__webpack_require__(246));

var Context = _react.default.createContext();

exports.Context = Context;

var TemplatesProvider = /*#__PURE__*/function (_BaseContext) {
  (0, _inherits2.default)(TemplatesProvider, _BaseContext);

  var _super = (0, _createSuper2.default)(TemplatesProvider);

  function TemplatesProvider(props) {
    var _this;

    (0, _classCallCheck2.default)(this, TemplatesProvider);
    _this = _super.call(this, props);
    _this.state = (0, _objectSpread5.default)((0, _objectSpread5.default)({}, _this.state), {}, {
      action: (0, _objectSpread5.default)((0, _objectSpread5.default)({}, _this.state.action), {}, {
        current: TemplatesProvider.actions.FETCH,
        loading: true
      }),
      templates: {},
      updateTemplateItemState: _this.updateTemplateItemState.bind((0, _assertThisInitialized2.default)(_this)),
      findTemplateItemInState: _this.findTemplateItemInState.bind((0, _assertThisInitialized2.default)(_this)),
      fetchTemplates: _this.fetchTemplates.bind((0, _assertThisInitialized2.default)(_this)),
      deleteTemplate: _this.deleteTemplate.bind((0, _assertThisInitialized2.default)(_this)),
      updateTemplate: _this.updateTemplate.bind((0, _assertThisInitialized2.default)(_this)),
      importTemplates: _this.importTemplates.bind((0, _assertThisInitialized2.default)(_this))
    });
    return _this;
  }

  (0, _createClass2.default)(TemplatesProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchTemplates();
    }
  }, {
    key: "importTemplates",
    value: function importTemplates(_ref) {
      var _this2 = this;

      var fileName = _ref.fileName,
          fileData = _ref.fileData;
      return this.executeAction(TemplatesProvider.actions.IMPORT, function () {
        return $e.data.create(_commands.Templates.signature, {
          fileName: fileName,
          fileData: fileData
        });
      }).then(function (response) {
        _this2.updateTemplatesState(function (prev) {
          return (0, _objectSpread5.default)((0, _objectSpread5.default)({}, prev), (0, _values.default)(response.data).reduce(function (current, template) {
            if (!template.supportsSiteEditor) {
              return current;
            }

            return (0, _objectSpread5.default)((0, _objectSpread5.default)({}, current), {}, (0, _defineProperty2.default)({}, template.id, template));
          }, {}));
        });

        return response;
      });
    }
  }, {
    key: "deleteTemplate",
    value: function deleteTemplate(id) {
      var _this3 = this;

      return this.executeAction(TemplatesProvider.actions.DELETE, function () {
        return $e.data.delete(_commands.Templates.signature, {
          id: id
        });
      }).then(function () {
        _this3.updateTemplatesState(function (prev) {
          var newTemplates = (0, _objectSpread5.default)({}, prev);
          delete newTemplates[id];
          return newTemplates;
        });
      });
    }
  }, {
    key: "updateTemplate",
    value: function updateTemplate(id, args) {
      var _this4 = this;

      return this.executeAction(TemplatesProvider.actions.UPDATE, function () {
        return $e.data.update(_commands.Templates.signature, args, {
          id: id
        });
      }).then(function (response) {
        _this4.updateTemplateItemState(id, response.data);
      });
    }
  }, {
    key: "fetchTemplates",
    value: function fetchTemplates() {
      var _this5 = this;

      return this.executeAction(TemplatesProvider.actions.FETCH, function () {
        return $e.data.get(_commands.Templates.signature);
      }).then(function (response) {
        _this5.updateTemplatesState(function () {
          return (0, _values.default)(response.data).reduce(function (current, template) {
            return (0, _objectSpread5.default)((0, _objectSpread5.default)({}, current), {}, (0, _defineProperty2.default)({}, template.id, template));
          }, {});
        }, false);
      });
    }
  }, {
    key: "updateTemplateItemState",
    value: function updateTemplateItemState(id, args) {
      return this.updateTemplatesState(function (prev) {
        var template = (0, _objectSpread5.default)((0, _objectSpread5.default)({}, prev[id]), args);
        return (0, _objectSpread5.default)((0, _objectSpread5.default)({}, prev), {}, (0, _defineProperty2.default)({}, id, template));
      });
    }
  }, {
    key: "updateTemplatesState",
    value: function updateTemplatesState(callback) {
      var clearCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (clearCache) {
        $e.data.deleteCache($e.components.get(_component.default.namespace), _commands.Templates.signature);
      }

      return this.setState(function (prev) {
        return {
          templates: callback(prev.templates)
        };
      });
    }
  }, {
    key: "findTemplateItemInState",
    value: function findTemplateItemInState(id) {
      return this.state.templates[id];
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.action.current === TemplatesProvider.actions.FETCH) {
        if (this.state.action.error) {
          return /*#__PURE__*/_react.default.createElement("h3", null, __('Error:', 'elementor-pro'), " ", this.state.action.error);
        }

        if (this.state.action.loading) {
          return /*#__PURE__*/_react.default.createElement("h3", null, __('Loading', 'elementor-pro'), "...");
        }
      }

      return /*#__PURE__*/_react.default.createElement(Context.Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);
  return TemplatesProvider;
}(_baseContext.default);

exports.TemplatesProvider = TemplatesProvider;
(0, _defineProperty2.default)(TemplatesProvider, "propTypes", {
  children: PropTypes.object.isRequired
});
(0, _defineProperty2.default)(TemplatesProvider, "actions", {
  FETCH: 'fetch',
  DELETE: 'delete',
  UPDATE: 'update',
  IMPORT: 'import'
});
var _default = TemplatesProvider;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(65)["__"], __webpack_require__(50)))

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(222);

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(12);
var aFunction = __webpack_require__(28);
var SPECIES = __webpack_require__(9)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(27);
var invoke = __webpack_require__(98);
var html = __webpack_require__(96);
var cel = __webpack_require__(71);
var global = __webpack_require__(7);
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
  if (__webpack_require__(40)(process) == 'process') {
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
/* 175 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(12);
var isObject = __webpack_require__(10);
var newPromiseCapability = __webpack_require__(148);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(27);
var IObject = __webpack_require__(91);
var toObject = __webpack_require__(29);
var toLength = __webpack_require__(73);
var asc = __webpack_require__(253);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(183);
module.exports = __webpack_require__(2).Object.keys;


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(29);
var $keys = __webpack_require__(35);

__webpack_require__(72)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(313);

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(207);

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "Templates", {
  enumerable: true,
  get: function get() {
    return _templates.Templates;
  }
});

_Object$defineProperty(exports, "ConditionsConfig", {
  enumerable: true,
  get: function get() {
    return _conditionsConfig.ConditionsConfig;
  }
});

_Object$defineProperty(exports, "TemplatesConditions", {
  enumerable: true,
  get: function get() {
    return _templatesConditions.TemplatesConditions;
  }
});

_Object$defineProperty(exports, "TemplatesConditionsConflicts", {
  enumerable: true,
  get: function get() {
    return _templatesConditionsConflicts.TemplatesConditionsConflicts;
  }
});

var _templates = __webpack_require__(265);

var _conditionsConfig = __webpack_require__(266);

var _templatesConditions = __webpack_require__(267);

var _templatesConditionsConflicts = __webpack_require__(268);

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(234);

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(105);
__webpack_require__(51)({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(261);

/***/ }),
/* 197 */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(209);

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

var _Array$from = __webpack_require__(169);

var arrayLikeToArray = __webpack_require__(170);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return _Array$from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(229);

var iterableToArray = __webpack_require__(230);

var unsupportedIterableToArray = __webpack_require__(199);

var nonIterableSpread = __webpack_require__(231);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(233);
var anObject = __webpack_require__(23);
var $flags = __webpack_require__(90);
var DESCRIPTORS = __webpack_require__(22);
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(34)(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(33)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
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
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {}

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(317);

var iterableToArrayLimit = __webpack_require__(318);

var unsupportedIterableToArray = __webpack_require__(199);

var nonIterableRest = __webpack_require__(322);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(208);
module.exports = __webpack_require__(2).Array.isArray;


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(8);

$export($export.S, 'Array', { isArray: __webpack_require__(87) });


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(74);
__webpack_require__(66);
module.exports = __webpack_require__(210);


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(93);
var ITERATOR = __webpack_require__(9)('iterator');
var Iterators = __webpack_require__(25);
module.exports = __webpack_require__(2).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(66);
__webpack_require__(212);
module.exports = __webpack_require__(2).Array.from;


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(27);
var $export = __webpack_require__(8);
var toObject = __webpack_require__(29);
var call = __webpack_require__(131);
var isArrayIter = __webpack_require__(132);
var toLength = __webpack_require__(73);
var createProperty = __webpack_require__(161);
var getIterFn = __webpack_require__(111);

$export($export.S + $export.F * !__webpack_require__(162)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(214);

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(215);
var $Object = __webpack_require__(2).Object;
module.exports = function defineProperties(T, D) {
  return $Object.defineProperties(T, D);
};


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(8);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(14), 'Object', { defineProperties: __webpack_require__(95) });


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(217);

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(218);
module.exports = __webpack_require__(2).Object.getOwnPropertyDescriptors;


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(8);
var ownKeys = __webpack_require__(219);
var toIObject = __webpack_require__(18);
var gOPD = __webpack_require__(36);
var createProperty = __webpack_require__(161);

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
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(75);
var gOPS = __webpack_require__(62);
var anObject = __webpack_require__(12);
var Reflect = __webpack_require__(7).Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(221);

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(97);
module.exports = __webpack_require__(2).Object.getOwnPropertySymbols;


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(88);
__webpack_require__(66);
__webpack_require__(74);
__webpack_require__(223);
__webpack_require__(227);
__webpack_require__(228);
module.exports = __webpack_require__(2).Promise;


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(31);
var global = __webpack_require__(7);
var ctx = __webpack_require__(27);
var classof = __webpack_require__(93);
var $export = __webpack_require__(8);
var isObject = __webpack_require__(10);
var aFunction = __webpack_require__(28);
var anInstance = __webpack_require__(154);
var forOf = __webpack_require__(110);
var speciesConstructor = __webpack_require__(173);
var task = __webpack_require__(174).set;
var microtask = __webpack_require__(224)();
var newPromiseCapabilityModule = __webpack_require__(148);
var perform = __webpack_require__(175);
var userAgent = __webpack_require__(225);
var promiseResolve = __webpack_require__(176);
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
    var FakePromise = (promise.constructor = {})[__webpack_require__(9)('species')] = function (exec) {
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
  Internal.prototype = __webpack_require__(153)($Promise.prototype, {
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
__webpack_require__(41)($Promise, PROMISE);
__webpack_require__(226)(PROMISE);
Wrapper = __webpack_require__(2)[PROMISE];

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
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(162)(function (iter) {
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
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(7);
var macrotask = __webpack_require__(174).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(40)(process) == 'process';

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
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(7);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(7);
var core = __webpack_require__(2);
var dP = __webpack_require__(15);
var DESCRIPTORS = __webpack_require__(14);
var SPECIES = __webpack_require__(9)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(8);
var core = __webpack_require__(2);
var global = __webpack_require__(7);
var speciesConstructor = __webpack_require__(173);
var promiseResolve = __webpack_require__(176);

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
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(8);
var newPromiseCapability = __webpack_require__(148);
var perform = __webpack_require__(175);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

var _Array$isArray = __webpack_require__(185);

var arrayLikeToArray = __webpack_require__(170);

function _arrayWithoutHoles(arr) {
  if (_Array$isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

var _Array$from = __webpack_require__(169);

var _isIterable = __webpack_require__(198);

var _Symbol = __webpack_require__(92);

function _iterableToArray(iter) {
  if (typeof _Symbol !== "undefined" && _isIterable(Object(iter))) return _Array$from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 231 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.13 String.prototype.sub()
__webpack_require__(271)('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(22) && /./g.flags != 'g') __webpack_require__(39).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(90)
});


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(2);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(14);
var getKeys = __webpack_require__(35);
var gOPS = __webpack_require__(62);
var pIE = __webpack_require__(42);
var toObject = __webpack_require__(29);
var IObject = __webpack_require__(91);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(20)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(8);
var defined = __webpack_require__(46);
var fails = __webpack_require__(20);
var spaces = __webpack_require__(197);
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
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(152);

var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59));

var dataCommands = _interopRequireWildcard(__webpack_require__(186));

var Component = /*#__PURE__*/function (_$e$modules$Component) {
  (0, _inherits2.default)(Component, _$e$modules$Component);

  var _super = (0, _createSuper2.default)(Component);

  function Component() {
    (0, _classCallCheck2.default)(this, Component);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Component, [{
    key: "getNamespace",
    value: function getNamespace() {
      return this.constructor.namespace;
    }
  }, {
    key: "defaultData",
    value: function defaultData() {
      return this.importCommands(dataCommands);
    }
  }]);
  return Component;
}($e.modules.ComponentBase);

exports.default = Component;
(0, _defineProperty2.default)(Component, "namespace", 'site-editor');

/***/ }),
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(251);

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(88);
__webpack_require__(74);
__webpack_require__(252);
__webpack_require__(257);
__webpack_require__(259);
module.exports = __webpack_require__(2).WeakMap;


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(7);
var each = __webpack_require__(180)(0);
var redefine = __webpack_require__(76);
var meta = __webpack_require__(81);
var assign = __webpack_require__(244);
var weak = __webpack_require__(255);
var isObject = __webpack_require__(10);
var validate = __webpack_require__(181);
var NATIVE_WEAK_MAP = __webpack_require__(181);
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(256)(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(254);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
var isArray = __webpack_require__(87);
var SPECIES = __webpack_require__(9)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(153);
var getWeak = __webpack_require__(81).getWeak;
var anObject = __webpack_require__(12);
var isObject = __webpack_require__(10);
var anInstance = __webpack_require__(154);
var forOf = __webpack_require__(110);
var createArrayMethod = __webpack_require__(180);
var $has = __webpack_require__(16);
var validate = __webpack_require__(181);
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(7);
var $export = __webpack_require__(8);
var meta = __webpack_require__(81);
var fails = __webpack_require__(20);
var hide = __webpack_require__(21);
var redefineAll = __webpack_require__(153);
var forOf = __webpack_require__(110);
var anInstance = __webpack_require__(154);
var isObject = __webpack_require__(10);
var setToStringTag = __webpack_require__(41);
var dP = __webpack_require__(15).f;
var each = __webpack_require__(180)(0);
var DESCRIPTORS = __webpack_require__(14);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
__webpack_require__(258)('WeakMap');


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(8);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
__webpack_require__(260)('WeakMap');


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(8);
var aFunction = __webpack_require__(28);
var ctx = __webpack_require__(27);
var forOf = __webpack_require__(110);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(262);
module.exports = __webpack_require__(2).parseInt;


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(8);
var $parseInt = __webpack_require__(263);
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__(7).parseInt;
var $trim = __webpack_require__(245).trim;
var ws = __webpack_require__(197);
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(14);
var getKeys = __webpack_require__(35);
var toIObject = __webpack_require__(18);
var isEnum = __webpack_require__(42).f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Templates = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59));

var Templates = /*#__PURE__*/function (_$e$modules$CommandDa) {
  (0, _inherits2.default)(Templates, _$e$modules$CommandDa);

  var _super = (0, _createSuper2.default)(Templates);

  function Templates() {
    (0, _classCallCheck2.default)(this, Templates);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Templates, null, [{
    key: "getEndpointFormat",
    value: function getEndpointFormat() {
      return 'site-editor/templates/{id}';
    }
  }]);
  return Templates;
}($e.modules.CommandData);

exports.Templates = Templates;
(0, _defineProperty2.default)(Templates, "signature", 'site-editor/templates');
var _default = Templates;
exports.default = _default;

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.ConditionsConfig = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59));

var ConditionsConfig = /*#__PURE__*/function (_$e$modules$CommandDa) {
  (0, _inherits2.default)(ConditionsConfig, _$e$modules$CommandDa);

  var _super = (0, _createSuper2.default)(ConditionsConfig);

  function ConditionsConfig() {
    (0, _classCallCheck2.default)(this, ConditionsConfig);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ConditionsConfig, null, [{
    key: "getEndpointFormat",
    value: function getEndpointFormat() {
      return 'site-editor/conditions-config/{id}';
    }
  }]);
  return ConditionsConfig;
}($e.modules.CommandData);

exports.ConditionsConfig = ConditionsConfig;
(0, _defineProperty2.default)(ConditionsConfig, "signature", 'site-editor/conditions-config');
var _default = ConditionsConfig;
exports.default = _default;

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.TemplatesConditions = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59));

var TemplatesConditions = /*#__PURE__*/function (_$e$modules$CommandDa) {
  (0, _inherits2.default)(TemplatesConditions, _$e$modules$CommandDa);

  var _super = (0, _createSuper2.default)(TemplatesConditions);

  function TemplatesConditions() {
    (0, _classCallCheck2.default)(this, TemplatesConditions);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(TemplatesConditions, null, [{
    key: "getEndpointFormat",
    value: function getEndpointFormat() {
      return 'site-editor/templates-conditions/{id}';
    }
  }]);
  return TemplatesConditions;
}($e.modules.CommandData);

exports.TemplatesConditions = TemplatesConditions;
(0, _defineProperty2.default)(TemplatesConditions, "signature", 'site-editor/templates-conditions');
var _default = TemplatesConditions;
exports.default = _default;

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.TemplatesConditionsConflicts = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59));

var TemplatesConditionsConflicts = /*#__PURE__*/function (_$e$modules$CommandDa) {
  (0, _inherits2.default)(TemplatesConditionsConflicts, _$e$modules$CommandDa);

  var _super = (0, _createSuper2.default)(TemplatesConditionsConflicts);

  function TemplatesConditionsConflicts() {
    (0, _classCallCheck2.default)(this, TemplatesConditionsConflicts);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(TemplatesConditionsConflicts, null, [{
    key: "getEndpointFormat",
    value: function getEndpointFormat() {
      return "".concat(TemplatesConditionsConflicts.signature, "/{id}");
    }
  }]);
  return TemplatesConditionsConflicts;
}($e.modules.CommandData);

exports.TemplatesConditionsConflicts = TemplatesConditionsConflicts;
(0, _defineProperty2.default)(TemplatesConditionsConflicts, "signature", 'site-editor/templates-conditions-conflicts');
var _default = TemplatesConditionsConflicts;
exports.default = _default;

/***/ }),
/* 269 */
/***/ (function(module, exports) {

module.exports = elementorAppPackages.siteEditor;

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__, PropTypes) {

var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = BackButton;

var _react = _interopRequireDefault(__webpack_require__(11));

var _appUi = __webpack_require__(63);

__webpack_require__(339);

function BackButton(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "back-button-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_appUi.Button, {
    className: "eps-back-button",
    text: __('Back', 'elementor-pro'),
    icon: "eicon-chevron-left",
    onClick: props.onClick
  }));
}

BackButton.propTypes = {
  onClick: PropTypes.func
};
BackButton.defaultProps = {
  onClick: function onClick() {
    return history.back();
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(65)["__"], __webpack_require__(50)))

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(51);
var fails = __webpack_require__(33);
var defined = __webpack_require__(44);
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
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(51);
var $includes = __webpack_require__(156)(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(107)('includes');


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(51);
var context = __webpack_require__(274);
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(275)(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(150);
var defined = __webpack_require__(44);

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(13)('match');
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
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__, PropTypes) {

var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = SiteTemplates;

var _react = _interopRequireDefault(__webpack_require__(11));

var _extends2 = _interopRequireDefault(__webpack_require__(286));

var _parseInt2 = _interopRequireDefault(__webpack_require__(196));

var _values = _interopRequireDefault(__webpack_require__(184));

var _appUi = __webpack_require__(63);

var _siteTemplate = _interopRequireDefault(__webpack_require__(315));

var _dialogsAndButtons = __webpack_require__(288);

var _templates = __webpack_require__(171);

var _useTemplatesScreenshot = _interopRequireDefault(__webpack_require__(333));

function SiteTemplates(props) {
  var _React$useContext = _react.default.useContext(_templates.Context),
      contextTemplates = _React$useContext.templates,
      action = _React$useContext.action,
      resetActionState = _React$useContext.resetActionState;

  var gridColumns, templates; // Make the templates object a memorize value, will re run again only if
  // templates has been changed, also sort the templates by `isActive`.

  templates = _react.default.useMemo(function () {
    return (0, _values.default)(contextTemplates).sort(function (a, b) {
      // This sort make sure to show first the active templates, second the
      // inactive templates that are not draft, and then the drafts,
      // in each category it sorts it inside by date.
      if (!b.isActive && !a.isActive) {
        if ('draft' === b.status && 'draft' === a.status || 'draft' !== b.status && 'draft' !== a.status) {
          return b.date < a.date ? 1 : -1;
        }

        return 'draft' === a.status ? 1 : -1;
      }

      if (b.isActive && a.isActive) {
        return b.date < a.date ? 1 : -1;
      }

      return b.isActive ? 1 : -1;
    });
  }, [contextTemplates]); // Start to capture screenshots.

  (0, _useTemplatesScreenshot.default)(props.type);
  var siteTemplateConfig = {};

  if (props.type) {
    templates = templates.filter(function (item) {
      return item.type === props.type;
    });
    siteTemplateConfig.extended = true;
    siteTemplateConfig.type = props.type;

    switch (props.type) {
      case 'header':
      case 'footer':
        gridColumns = 1;
        siteTemplateConfig.aspectRatio = 'wide';
        break;

      default:
        gridColumns = 2;
    }
  }

  if (!templates || !templates.length) {
    return /*#__PURE__*/_react.default.createElement("h3", null, __('No Templates found. Want to create one?', 'elementor-pro'), "...");
  }

  return /*#__PURE__*/_react.default.createElement("section", {
    className: "e-site-editor__site-templates"
  }, /*#__PURE__*/_react.default.createElement(_dialogsAndButtons.PartActionsDialogs, null), action.error && /*#__PURE__*/_react.default.createElement(_appUi.Dialog, {
    text: action.error,
    dismissButtonText: __('Go Back', 'elementor-pro'),
    dismissButtonOnClick: resetActionState,
    approveButtonText: __('Learn More', 'elementor-pro'),
    approveButtonColor: "link",
    approveButtonUrl: "https://go.elementor.com/app-theme-builder-template-load-issue",
    approveButtonTarget: "_target"
  }), /*#__PURE__*/_react.default.createElement(_appUi.CssGrid, {
    columns: gridColumns,
    spacing: 24,
    colMinWidth: 200
  }, templates.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_siteTemplate.default, (0, _extends2.default)({
      key: item.id
    }, item, siteTemplateConfig, {
      isSelected: (0, _parseInt2.default)(props.id) === item.id
    }));
  })));
}

SiteTemplates.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(65)["__"], __webpack_require__(50)))

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(287);

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(311);

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__, PropTypes) {

var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.PartActionsDialogs = PartActionsDialogs;
exports.default = PartActionsButtons;
exports.handlers = void 0;

var _react = _interopRequireDefault(__webpack_require__(11));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(206));

var _dialogRename = _interopRequireDefault(__webpack_require__(323));

var _dialogDelete = _interopRequireDefault(__webpack_require__(324));

var _appUi = __webpack_require__(63);

var handlers = {
  rename: null,
  delete: null
}; // TODO: Think about refactor to portals: https://reactjs.org/docs/portals.html

exports.handlers = handlers;

function PartActionsDialogs() {
  var _React$useState = _react.default.useState(null),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      DialogRenameId = _React$useState2[0],
      setDialogRenameId = _React$useState2[1];

  var _React$useState3 = _react.default.useState(null),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      DialogDeleteId = _React$useState4[0],
      setDialogDeleteId = _React$useState4[1];

  handlers.rename = setDialogRenameId;
  handlers.delete = setDialogDeleteId;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_dialogRename.default, {
    id: DialogRenameId,
    setId: setDialogRenameId
  }), /*#__PURE__*/_react.default.createElement(_dialogDelete.default, {
    id: DialogDeleteId,
    setId: setDialogDeleteId
  }));
}

function PartActionsButtons(props) {
  var _React$useState5 = _react.default.useState(false),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      showMenu = _React$useState6[0],
      setShowMenu = _React$useState6[1];

  var SiteTemplatePopover = '';

  if (showMenu) {
    SiteTemplatePopover = /*#__PURE__*/_react.default.createElement(_appUi.Popover, {
      closeFunction: function closeFunction() {
        return setShowMenu(!showMenu);
      }
    }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_appUi.Button, {
      className: "eps-popover__item",
      icon: "eicon-sign-out",
      text: __('Export', 'elementor-pro'),
      url: props.exportLink
    })), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_appUi.Button, {
      className: "eps-popover__item eps-popover__item--danger",
      icon: "eicon-trash-o",
      text: __('Trash', 'elementor-pro'),
      onClick: function onClick() {
        return handlers.delete(props.id);
      }
    })), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_appUi.Button, {
      className: "eps-popover__item",
      icon: "eicon-edit",
      text: __('Rename', 'elementor-pro'),
      onClick: function onClick() {
        return handlers.rename(props.id);
      }
    })));
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "eps-popover__container"
  }, /*#__PURE__*/_react.default.createElement(_appUi.Button, {
    text: __('Toggle', 'elementor-pro'),
    hideText: true,
    icon: "eicon-ellipsis-h",
    size: "lg",
    onClick: function onClick() {
      return setShowMenu(!showMenu);
    }
  }), SiteTemplatePopover);
}

PartActionsButtons.propTypes = {
  id: PropTypes.number.isRequired,
  exportLink: PropTypes.string.isRequired
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(65)["__"], __webpack_require__(50)))

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.BaseContext = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(155));

var _promise = _interopRequireDefault(__webpack_require__(172));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(68));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var BaseContext = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(BaseContext, _React$Component);

  var _super = (0, _createSuper2.default)(BaseContext);

  function BaseContext(props) {
    var _this;

    (0, _classCallCheck2.default)(this, BaseContext);
    _this = _super.call(this, props);
    _this.state = {
      action: {
        current: null,
        loading: false,
        error: null,
        errorMeta: {}
      },
      updateActionState: _this.updateActionState.bind((0, _assertThisInitialized2.default)(_this)),
      resetActionState: _this.resetActionState.bind((0, _assertThisInitialized2.default)(_this))
    };
    return _this;
  }

  (0, _createClass2.default)(BaseContext, [{
    key: "executeAction",
    value: function executeAction(name, handler) {
      var _this2 = this;

      this.updateActionState({
        current: name,
        loading: true,
        error: null,
        errorMeta: {}
      });
      return handler().then(function (response) {
        _this2.resetActionState();

        return _promise.default.resolve(response);
      }).catch(function (error) {
        _this2.updateActionState({
          current: name,
          loading: false,
          error: error.message,
          errorMeta: error
        });

        return _promise.default.reject(error);
      });
    }
  }, {
    key: "updateActionState",
    value: function updateActionState(data) {
      return this.setState(function (prev) {
        return {
          action: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, prev.action), data)
        };
      });
    }
  }, {
    key: "resetActionState",
    value: function resetActionState() {
      this.updateActionState({
        current: null,
        loading: false,
        error: null,
        errorMeta: {}
      });
    }
  }]);
  return BaseContext;
}(React.Component);

exports.BaseContext = BaseContext;
var _default = BaseContext;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__, PropTypes) {

var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.ConditionsProvider = exports.Context = void 0;

var _react = _interopRequireDefault(__webpack_require__(11));

__webpack_require__(19);

__webpack_require__(232);

__webpack_require__(112);

var _promise = _interopRequireDefault(__webpack_require__(172));

__webpack_require__(201);

__webpack_require__(113);

var _keys = _interopRequireDefault(__webpack_require__(47));

var _values = _interopRequireDefault(__webpack_require__(184));

var _objectSpread5 = _interopRequireDefault(__webpack_require__(155));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(68));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59));

var _condition = _interopRequireDefault(__webpack_require__(341));

var _conditionsConfig = _interopRequireDefault(__webpack_require__(342));

var _baseContext = _interopRequireDefault(__webpack_require__(289));

var _commands = __webpack_require__(186);

var Context = _react.default.createContext();

exports.Context = Context;

var ConditionsProvider = /*#__PURE__*/function (_BaseContext) {
  (0, _inherits2.default)(ConditionsProvider, _BaseContext);

  var _super = (0, _createSuper2.default)(ConditionsProvider);

  /**
   * Holds the conditions config object.
   *
   * @type {ConditionsConfig}
   */

  /**
   * ConditionsProvider constructor.
   *
   * @param props
   */
  function ConditionsProvider(props) {
    var _this;

    (0, _classCallCheck2.default)(this, ConditionsProvider);
    _this = _super.call(this, props);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "conditionsConfig", null);
    _this.state = (0, _objectSpread5.default)((0, _objectSpread5.default)({}, _this.state), {}, {
      conditions: {},
      updateConditionItemState: _this.updateConditionItemState.bind((0, _assertThisInitialized2.default)(_this)),
      removeConditionItemInState: _this.removeConditionItemInState.bind((0, _assertThisInitialized2.default)(_this)),
      createConditionItemInState: _this.createConditionItemInState.bind((0, _assertThisInitialized2.default)(_this)),
      findConditionItemInState: _this.findConditionItemInState.bind((0, _assertThisInitialized2.default)(_this)),
      saveConditions: _this.saveConditions.bind((0, _assertThisInitialized2.default)(_this))
    });
    return _this;
  }
  /**
   * Fetch the conditions config, then normalize the conditions and then setup titles for
   * the subIds.
   */


  (0, _createClass2.default)(ConditionsProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.executeAction(ConditionsProvider.actions.FETCH_CONFIG, function () {
        return _conditionsConfig.default.create();
      }).then(function (conditionsConfig) {
        return _this2.conditionsConfig = conditionsConfig;
      }).then(this.normalizeConditionsState.bind(this)).then(this.setSubIdTitles.bind(this));
    }
    /**
     * Execute a request to save the template conditions.
     *
     * @returns {*}
     */

  }, {
    key: "saveConditions",
    value: function saveConditions() {
      var _this3 = this;

      var conditions = (0, _values.default)(this.state.conditions).map(function (condition) {
        return condition.forDb();
      });
      return this.executeAction(ConditionsProvider.actions.SAVE, function () {
        return $e.data.update(_commands.TemplatesConditions.signature, {
          conditions: conditions
        }, {
          id: _this3.props.currentTemplate.id
        });
      }).then(function () {
        var contextConditions = (0, _values.default)(_this3.state.conditions).map(function (condition) {
          return condition.forContext();
        });

        _this3.props.onConditionsSaved(_this3.props.currentTemplate.id, {
          conditions: contextConditions,
          instances: _this3.conditionsConfig.calculateInstances((0, _values.default)(_this3.state.conditions)),
          isActive: !!((0, _keys.default)(_this3.state.conditions).length && 'publish' === _this3.props.currentTemplate.status)
        });
      });
    }
    /**
     * Check for conflicts in the server and mark the condition if there
     * is a conflict.
     *
     * @param condition
     */

  }, {
    key: "checkConflicts",
    value: function checkConflicts(condition) {
      var _this4 = this;

      return this.executeAction(ConditionsProvider.actions.CHECK_CONFLICTS, function () {
        return $e.data.get(_commands.TemplatesConditionsConflicts.signature, {
          post_id: _this4.props.currentTemplate.id,
          condition: condition.clone().toString()
        });
      }).then(function (response) {
        return _this4.updateConditionItemState(condition.id, {
          conflictErrors: (0, _values.default)(response.data)
        }, false);
      });
    }
    /**
     * Fetching subId titles.
     *
     * @param condition
     * @returns {Promise<unknown>}
     */

  }, {
    key: "fetchSubIdsTitles",
    value: function fetchSubIdsTitles(condition) {
      return new _promise.default(function (resolve) {
        return elementorCommon.ajax.loadObjects({
          action: 'query_control_value_titles',
          ids: _.isArray(condition.subId) ? condition.subId : [condition.subId],
          data: {
            get_titles: condition.subIdAutocomplete,
            unique_id: elementorCommon.helpers.getUniqueId()
          },
          success: function success(response) {
            resolve(response);
          }
        });
      });
    }
    /**
     * Get the conditions from the template and normalize it to data structure
     * that the components can work with.
     */

  }, {
    key: "normalizeConditionsState",
    value: function normalizeConditionsState() {
      var _this5 = this;

      this.updateConditionsState(function () {
        return _this5.props.currentTemplate.conditions.reduce(function (current, condition) {
          var conditionObj = new _condition.default((0, _objectSpread5.default)((0, _objectSpread5.default)({}, condition), {}, {
            default: _this5.props.currentTemplate.defaultCondition,
            options: _this5.conditionsConfig.getOptions(),
            subOptions: _this5.conditionsConfig.getSubOptions(condition.name),
            subIdAutocomplete: _this5.conditionsConfig.getSubIdAutocomplete(condition.sub),
            supIdOptions: condition.subId ? [{
              value: condition.subId,
              label: condition.subId
            }] : []
          }));
          return (0, _objectSpread5.default)((0, _objectSpread5.default)({}, current), {}, (0, _defineProperty2.default)({}, conditionObj.id, conditionObj));
        }, {});
      }).then(function () {
        (0, _values.default)(_this5.state.conditions).forEach(function (condition) {
          return _this5.checkConflicts(condition);
        });
      });
    }
    /**
     * Set titles to the subIds,
     * for the first render of the component.
     */

  }, {
    key: "setSubIdTitles",
    value: function setSubIdTitles() {
      var _this6 = this;

      return (0, _values.default)(this.state.conditions).forEach(function (condition) {
        if (!condition.subId) {
          return;
        }

        return _this6.fetchSubIdsTitles(condition).then(function (response) {
          return _this6.updateConditionItemState(condition.id, {
            subIdOptions: [{
              label: (0, _values.default)(response)[0],
              value: condition.subId
            }]
          }, false);
        });
      });
    }
    /**
     * Update state of specific condition item.
     *
     * @param id
     * @param args
     * @param shouldCheckConflicts
     */

  }, {
    key: "updateConditionItemState",
    value: function updateConditionItemState(id, args) {
      var _this7 = this;

      var shouldCheckConflicts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (args.name) {
        args.subOptions = this.conditionsConfig.getSubOptions(args.name);
      }

      if (args.sub || args.name) {
        args.subIdAutocomplete = this.conditionsConfig.getSubIdAutocomplete(args.sub); // In case that the condition has been changed, it will set the options of the subId
        // to empty array to let select2 autocomplete handle the options.

        args.subIdOptions = [];
      }

      this.updateConditionsState(function (prev) {
        var condition = prev[id];
        return (0, _objectSpread5.default)((0, _objectSpread5.default)({}, prev), {}, (0, _defineProperty2.default)({}, id, condition.clone().set(args)));
      }).then(function () {
        if (shouldCheckConflicts) {
          _this7.checkConflicts(_this7.findConditionItemInState(id));
        }
      });
    }
    /**
     * Remove a condition item from the state.
     *
     * @param id
     */

  }, {
    key: "removeConditionItemInState",
    value: function removeConditionItemInState(id) {
      this.updateConditionsState(function (prev) {
        var newConditions = (0, _objectSpread5.default)({}, prev);
        delete newConditions[id];
        return newConditions;
      });
    }
    /**
     * Add a new condition item into the state.
     *
     * @param shouldCheckConflicts
     */

  }, {
    key: "createConditionItemInState",
    value: function createConditionItemInState() {
      var _this8 = this;

      var shouldCheckConflicts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var defaultCondition = this.props.currentTemplate.defaultCondition,
          newCondition = new _condition.default({
        name: defaultCondition,
        default: defaultCondition,
        options: this.conditionsConfig.getOptions(),
        subOptions: this.conditionsConfig.getSubOptions(defaultCondition),
        subIdAutocomplete: this.conditionsConfig.getSubIdAutocomplete('')
      });
      this.updateConditionsState(function (prev) {
        return (0, _objectSpread5.default)((0, _objectSpread5.default)({}, prev), {}, (0, _defineProperty2.default)({}, newCondition.id, newCondition));
      }).then(function () {
        if (shouldCheckConflicts) {
          _this8.checkConflicts(newCondition);
        }
      });
    }
    /**
     * Find a condition item from the conditions state.
     *
     * @param id
     * @returns {Condition|null}
     */

  }, {
    key: "findConditionItemInState",
    value: function findConditionItemInState(id) {
      return (0, _values.default)(this.state.conditions).find(function (c) {
        return c.id === id;
      });
    }
    /**
     * Update the whole conditions state.
     *
     * @param callback
     * @returns {Promise<*>}
     */

  }, {
    key: "updateConditionsState",
    value: function updateConditionsState(callback) {
      var _this9 = this;

      return new _promise.default(function (resolve) {
        return _this9.setState(function (prev) {
          return {
            conditions: callback(prev.conditions)
          };
        }, resolve);
      });
    }
    /**
     * Renders the provider.
     *
     * @returns {*}
     */

  }, {
    key: "render",
    value: function render() {
      if (this.state.action.current === ConditionsProvider.actions.FETCH_CONFIG) {
        if (this.state.error) {
          return /*#__PURE__*/_react.default.createElement("h3", null, __('Error:', 'elementor-pro'), " ", this.state.error);
        }

        if (this.state.loading) {
          return /*#__PURE__*/_react.default.createElement("h3", null, __('Loading', 'elementor-pro'), "...");
        }
      }

      return /*#__PURE__*/_react.default.createElement(Context.Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);
  return ConditionsProvider;
}(_baseContext.default);

exports.ConditionsProvider = ConditionsProvider;
(0, _defineProperty2.default)(ConditionsProvider, "propTypes", {
  children: PropTypes.any.isRequired,
  currentTemplate: PropTypes.object.isRequired,
  onConditionsSaved: PropTypes.func.isRequired
});
(0, _defineProperty2.default)(ConditionsProvider, "actions", {
  FETCH_CONFIG: 'fetch-config',
  SAVE: 'save',
  CHECK_CONFLICTS: 'check-conflicts'
});
var _default = ConditionsProvider;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(65)["__"], __webpack_require__(50)))

/***/ }),
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _implementation = __webpack_require__(306);

var _implementation2 = _interopRequireDefault(_implementation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createContext || _implementation2.default;
module.exports = exports['default'];

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _siteEditor = _interopRequireDefault(__webpack_require__(303));

new _siteEditor.default();

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__) {

var _interopRequireWildcard = __webpack_require__(152);

var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(11));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _keys = _interopRequireDefault(__webpack_require__(47));

var _router = __webpack_require__(548);

var _templates = _interopRequireDefault(__webpack_require__(310));

var _templateType = _interopRequireDefault(__webpack_require__(335));

var _addNew = _interopRequireDefault(__webpack_require__(337));

var _conditions = _interopRequireDefault(__webpack_require__(340));

var _import = _interopRequireDefault(__webpack_require__(350));

var _templates2 = _interopRequireWildcard(__webpack_require__(171));

var _siteEditor = __webpack_require__(269);

var _appUi = __webpack_require__(63);

var _router2 = _interopRequireDefault(__webpack_require__(351));

var _component = _interopRequireDefault(__webpack_require__(246));

function SiteEditor() {
  var headerButtons = [{
    id: 'import',
    text: __('import', 'elementor-pro'),
    hideText: true,
    icon: 'eicon-download-circle-o',
    onClick: function onClick() {
      return _router2.default.appHistory.navigate('site-editor/import');
    }
  }]; // Remove Core cache.

  elementorCommon.ajax.invalidateCache({
    unique_id: 'app_site_editor_template_types'
  });

  var SiteEditorDefault = function SiteEditorDefault() {
    var _React$useContext = _react.default.useContext(_templates2.Context),
        templates = _React$useContext.templates;

    if ((0, _keys.default)(templates).length) {
      return /*#__PURE__*/_react.default.createElement(_router.Redirect, {
        from: '/',
        to: '/site-editor/templates',
        noThrow: true
      });
    }

    return /*#__PURE__*/_react.default.createElement(_router.Redirect, {
      from: '/',
      to: '/site-editor/add-new',
      noThrow: true
    });
  };

  return /*#__PURE__*/_react.default.createElement(_appUi.ErrorBoundary, {
    title: __('Theme Builder could not be loaded', 'elementor-pro'),
    learnMoreUrl: "https://go.elementor.com/app-theme-builder-load-issue"
  }, /*#__PURE__*/_react.default.createElement(_siteEditor.Layout, {
    allPartsButton: /*#__PURE__*/_react.default.createElement(_siteEditor.AllPartsButton, {
      url: "/site-editor"
    }),
    headerButtons: headerButtons
  }, /*#__PURE__*/_react.default.createElement(_templates2.default, null, /*#__PURE__*/_react.default.createElement(_router.LocationProvider, {
    history: _router2.default.appHistory
  }, /*#__PURE__*/_react.default.createElement(_router.Router, null, /*#__PURE__*/_react.default.createElement(SiteEditorDefault, {
    path: "/site-editor"
  }), /*#__PURE__*/_react.default.createElement(_templates.default, {
    path: "site-editor/templates"
  }), /*#__PURE__*/_react.default.createElement(_templateType.default, {
    path: "site-editor/templates/:type/*id"
  }), /*#__PURE__*/_react.default.createElement(_addNew.default, {
    path: "site-editor/add-new"
  }), /*#__PURE__*/_react.default.createElement(_conditions.default, {
    path: "site-editor/conditions/:id"
  }), /*#__PURE__*/_react.default.createElement(_import.default, {
    path: "site-editor/import"
  }), /*#__PURE__*/_react.default.createElement(_siteEditor.NotFound, {
    default: true
  }))))));
}

var Module = function Module() {
  (0, _classCallCheck2.default)(this, Module);
  elementorCommon.debug.addURLToWatch('elementor-pro/assets');
  $e.components.register(new _component.default());

  _router2.default.addRoute({
    path: '/site-editor/*',
    component: SiteEditor
  });
};

exports.default = Module;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(65)["__"]))

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(305);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(50);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _gud = __webpack_require__(307);

var _gud2 = _interopRequireDefault(_gud);

var _warning = __webpack_require__(309);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_SIGNED_31_BIT_INT = 1073741823;

// Inlined Object.is polyfill.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    function Provider() {
      var _temp, _this, _ret;

      _classCallCheck(this, Provider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
    }

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits = void 0;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0; // No change
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
          if (false) {}

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    Provider.prototype.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(_react.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);

  var Consumer = function (_Component2) {
    _inherits(Consumer, _Component2);

    function Consumer() {
      var _temp2, _this2, _ret2;

      _classCallCheck(this, Consumer);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
        value: _this2.getValue()
      }, _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;
        if ((observedBits & changedBits) !== 0) {
          _this2.setState({ value: _this2.getValue() });
        }
      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }
      var observedBits = this.props.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    Consumer.prototype.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    Consumer.prototype.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(_react.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);


  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

exports.default = createReactContext;
module.exports = exports['default'];

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {// @flow


var key = '__global_unique_id__';

module.exports = function() {
  return global[key] = (global[key] || 0) + 1;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(308)))

/***/ }),
/* 308 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "production" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__) {

var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = Templates;

var _react = _interopRequireDefault(__webpack_require__(11));

var _siteTemplates = _interopRequireDefault(__webpack_require__(285));

var _appUi = __webpack_require__(63);

function Templates() {
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "e-site-editor__site-templates"
  }, /*#__PURE__*/_react.default.createElement(_appUi.Grid, {
    container: true,
    justify: "space-between",
    className: "page-header"
  }, /*#__PURE__*/_react.default.createElement("h1", null, __('Your Site\'s Global Parts', 'elementor-pro')), /*#__PURE__*/_react.default.createElement(_appUi.AddNewButton, {
    url: "/site-editor/add-new"
  })), /*#__PURE__*/_react.default.createElement("hr", {
    className: "eps-separator"
  }), /*#__PURE__*/_react.default.createElement(_siteTemplates.default, null));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(65)["__"]))

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(312);
module.exports = __webpack_require__(2).Object.assign;


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(8);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(244) });


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(314);
module.exports = __webpack_require__(2).Object.values;


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(8);
var $values = __webpack_require__(264)(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(PropTypes) {

var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = SiteTemplate;

var _react = _interopRequireDefault(__webpack_require__(11));

var _appUi = __webpack_require__(63);

var _siteTemplateHeader = __webpack_require__(316);

var _siteTemplateBody = __webpack_require__(327);

var _siteTemplateFooter = __webpack_require__(331);

__webpack_require__(332);

function SiteTemplate(props) {
  var baseClassName = 'e-site-template',
      classes = [baseClassName],
      ref = _react.default.useRef(null);

  _react.default.useEffect(function () {
    if (!props.isSelected) {
      return;
    }

    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }, [props.isSelected]);

  if (props.extended) {
    classes.push("".concat(baseClassName, "--extended"));
  }

  if (props.aspectRatio) {
    classes.push("".concat(baseClassName, "--").concat(props.aspectRatio));
  }

  var CardFooter = props.extended ? /*#__PURE__*/_react.default.createElement(_siteTemplateFooter.SiteTemplateFooter, props) : '';
  return /*#__PURE__*/_react.default.createElement(_appUi.Card, {
    className: classes.join(' '),
    ref: ref
  }, /*#__PURE__*/_react.default.createElement(_siteTemplateHeader.SiteTemplateHeader, props), /*#__PURE__*/_react.default.createElement(_siteTemplateBody.SiteTemplateBody, props), CardFooter);
}

SiteTemplate.propTypes = {
  aspectRatio: PropTypes.string,
  className: PropTypes.string,
  extended: PropTypes.bool,
  id: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  status: PropTypes.string,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  type: PropTypes.string.isRequired
};
SiteTemplate.defaultProps = {
  isSelected: false
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(50)))

/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__, PropTypes) {

var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.SiteTemplateHeader = void 0;

var _react = _interopRequireDefault(__webpack_require__(11));

var _appUi = __webpack_require__(63);

var _dialogsAndButtons = _interopRequireDefault(__webpack_require__(288));

var _indicatorBullet = __webpack_require__(325);

var SiteTemplateHeader = function SiteTemplateHeader(props) {
  var status = props.status && 'publish' !== props.status ? " (".concat(props.status, ")") : '',
      title = props.title + status,
      ActionButtons = function ActionButtons() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_appUi.Button, {
      text: __('Edit', 'elementor-pro'),
      icon: "eicon-edit",
      className: "e-site-template__edit-btn",
      size: "sm",
      url: props.editURL
    }), /*#__PURE__*/_react.default.createElement(_dialogsAndButtons.default, props));
  },
      MetaDataIcon = function MetaDataIcon(innerProps) {
    return /*#__PURE__*/_react.default.createElement(_appUi.Text, {
      tag: "span",
      className: "e-site-template__meta-data"
    }, /*#__PURE__*/_react.default.createElement(_appUi.Icon, {
      className: innerProps.icon
    }), innerProps.content);
  },
      MetaData = function MetaData() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(MetaDataIcon, {
      icon: "eicon-user-circle-o",
      content: props.author
    }), /*#__PURE__*/_react.default.createElement(MetaDataIcon, {
      icon: "eicon-clock-o",
      content: props.modifiedDate
    }));
  };

  return /*#__PURE__*/_react.default.createElement(_appUi.CardHeader, null, /*#__PURE__*/_react.default.createElement(_indicatorBullet.Indicator, {
    active: props.isActive
  }), /*#__PURE__*/_react.default.createElement(_appUi.Heading, {
    tag: "h1",
    title: title,
    variant: "text-sm",
    className: "eps-card__headline"
  }, title), props.extended && /*#__PURE__*/_react.default.createElement(MetaData, null), props.extended && /*#__PURE__*/_react.default.createElement(ActionButtons, null));
};

exports.SiteTemplateHeader = SiteTemplateHeader;
SiteTemplateHeader.propTypes = {
  isActive: PropTypes.bool,
  author: PropTypes.string,
  editURL: PropTypes.string,
  extended: PropTypes.bool,
  modifiedDate: PropTypes.string,
  status: PropTypes.string,
  title: PropTypes.string
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(65)["__"], __webpack_require__(50)))

/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

var _Array$isArray = __webpack_require__(185);

function _arrayWithHoles(arr) {
  if (_Array$isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

var _getIterator = __webpack_require__(319);

var _isIterable = __webpack_require__(198);

var _Symbol = __webpack_require__(92);

function _iterableToArrayLimit(arr, i) {
  if (typeof _Symbol === "undefined" || !_isIterable(Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(320);

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(74);
__webpack_require__(66);
module.exports = __webpack_require__(321);


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(12);
var get = __webpack_require__(111);
module.exports = __webpack_require__(2).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 322 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__, PropTypes) {

var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = DialogRename;

var _react = _interopRequireDefault(__webpack_require__(11));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(206));

var _appUi = __webpack_require__(63);

var _templates = __webpack_require__(171);

function DialogRename(props) {
  var _React$useContext = _react.default.useContext(_templates.Context),
      findTemplateItemInState = _React$useContext.findTemplateItemInState,
      updateTemplate = _React$useContext.updateTemplate,
      template = findTemplateItemInState(props.id);

  var _React$useState = _react.default.useState(false),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      title = _React$useState2[0],
      setTitle = _React$useState2[1];

  var closeDialog = function closeDialog(shouldUpdate) {
    props.setId(null);

    if (shouldUpdate) {
      updateTemplate(props.id, {
        post_title: title
      });
    }
  };

  if (!props.id) {
    return '';
  }

  return /*#__PURE__*/_react.default.createElement(_appUi.Dialog, {
    title: __('Rename Part', 'elementor-pro'),
    approveButtonText: __('Change', 'elementor-pro'),
    onSubmit: function onSubmit() {
      return closeDialog(true);
    },
    approveButtonOnClick: function approveButtonOnClick() {
      return closeDialog(true);
    },
    dismissButtonText: __('Cancel', 'elementor-pro'),
    dismissButtonOnClick: function dismissButtonOnClick() {
      return closeDialog();
    }
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "eps-input eps-input-text eps-input--block",
    autoFocus: true,
    defaultValue: template.title,
    onChange: function onChange(e) {
      return setTitle(e.target.value);
    }
  }));
}

DialogRename.propTypes = {
  id: PropTypes.number,
  setId: PropTypes.func.isRequired
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(65)["__"], __webpack_require__(50)))

/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__, PropTypes) {

var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = DialogDelete;

var _react = _interopRequireDefault(__webpack_require__(11));

var _appUi = __webpack_require__(63);

var _templates = __webpack_require__(171);

function DialogDelete(props) {
  var _React$useContext = _react.default.useContext(_templates.Context),
      deleteTemplate = _React$useContext.deleteTemplate,
      findTemplateItemInState = _React$useContext.findTemplateItemInState,
      template = findTemplateItemInState(props.id);

  var closeDialog = function closeDialog(shouldUpdate) {
    props.setId(null);

    if (shouldUpdate) {
      deleteTemplate(props.id);
    }
  };

  if (!props.id) {
    return '';
  }

  return /*#__PURE__*/_react.default.createElement(_appUi.Dialog, {
    title: __('Move Item To Trash', 'elementor-pro'),
    text: __('Are you sure you want to move this item to trash:', 'elementor-pro') + " \"".concat(template.title, "\""),
    onSubmit: function onSubmit() {
      return closeDialog(true);
    },
    approveButtonText: __('Move to Trash', 'elementor-pro'),
    approveButtonOnClick: function approveButtonOnClick() {
      return closeDialog(true);
    },
    approveButtonColor: "danger",
    dismissButtonText: __('Cancel', 'elementor-pro'),
    dismissButtonOnClick: function dismissButtonOnClick() {
      return closeDialog();
    }
  });
}

DialogDelete.propTypes = {
  id: PropTypes.number,
  setId: PropTypes.func.isRequired
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(65)["__"], __webpack_require__(50)))

/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(PropTypes) {

var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.Indicator = void 0;

var _react = _interopRequireDefault(__webpack_require__(11));

__webpack_require__(326);

var Indicator = function Indicator(props) {
  var className = 'eps-indicator-bullet';

  if (props.active) {
    className += " ".concat(className, "--active");
  }

  return /*#__PURE__*/_react.default.createElement("i", {
    className: className
  });
};

exports.Indicator = Indicator;
Indicator.propTypes = {
  active: PropTypes.bool
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(50)))

/***/ }),
/* 326 */
/***/ (function(module, exports) {



/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(PropTypes) {

var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.SiteTemplateBody = void 0;

var _react = _interopRequireDefault(__webpack_require__(11));

var _appUi = __webpack_require__(63);

var _siteTemplateThumbnail = _interopRequireDefault(__webpack_require__(328));

var _previewIframe = _interopRequireDefault(__webpack_require__(329));

var SiteTemplateBody = function SiteTemplateBody(props) {
  return /*#__PURE__*/_react.default.createElement(_appUi.CardBody, null, props.extended ? /*#__PURE__*/_react.default.createElement(_previewIframe.default, {
    src: props.previewUrl,
    templateType: props.type
  }) : /*#__PURE__*/_react.default.createElement(_siteTemplateThumbnail.default, {
    id: props.id,
    title: props.title,
    type: props.type,
    thumbnail: props.thumbnail,
    placeholder: props.placeholderUrl
  }));
};

exports.SiteTemplateBody = SiteTemplateBody;
SiteTemplateBody.propTypes = {
  extended: PropTypes.bool,
  id: PropTypes.number,
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  placeholderUrl: PropTypes.string,
  type: PropTypes.string,
  previewUrl: PropTypes.string
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(50)))

/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__, PropTypes) {

var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = SiteTemplateThumbnail;

var _react = _interopRequireDefault(__webpack_require__(11));

var _appUi = __webpack_require__(63);

function SiteTemplateThumbnail(props) {
  return /*#__PURE__*/_react.default.createElement(_appUi.CardImage, {
    alt: props.title,
    src: props.thumbnail || props.placeholder,
    className: !props.thumbnail ? 'e-site-template__placeholder' : ''
  }, /*#__PURE__*/_react.default.createElement(_appUi.CardOverlay, {
    className: "e-site-template__overlay-preview"
  }, /*#__PURE__*/_react.default.createElement(_appUi.Button, {
    className: "e-site-template__overlay-preview-button",
    text: __('Preview', 'elementor-pro'),
    icon: "eicon-preview-medium",
    url: "/site-editor/templates/".concat(props.type, "/").concat(props.id)
  })));
}

SiteTemplateThumbnail.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  type: PropTypes.string,
  thumbnail: PropTypes.string,
  placeholder: PropTypes.string
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(65)["__"], __webpack_require__(50)))

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(PropTypes) {

var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = PreviewIFrame;

var _react = _interopRequireDefault(__webpack_require__(11));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(206));

__webpack_require__(330);

function PreviewIFrame(props) {
  var ref = _react.default.useRef(null),
      previewBreakpoint = 1200,
      _React$useState = _react.default.useState(1),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      scale = _React$useState2[0],
      setScale = _React$useState2[1],
      _React$useState3 = _react.default.useState(0),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      height = _React$useState4[0],
      setHeight = _React$useState4[1]; // In order to make sure that the iframe itself show the content in specific viewport,
  // and it should fit to the size of the card, there is a use of css props `scale` and `height`,
  // and another element that wraps the iframe to be the guidelines of the iframe sizes.


  _react.default.useEffect(function () {
    var currentScale = ref.current.clientWidth / previewBreakpoint;
    setScale(currentScale);
    setHeight(ref.current.clientHeight / currentScale);
  }, []);

  return /*#__PURE__*/_react.default.createElement("div", {
    ref: ref,
    className: "site-editor__preview-iframe site-editor__preview-iframe--".concat(props.templateType)
  }, /*#__PURE__*/_react.default.createElement("iframe", {
    src: props.src,
    className: "site-editor__preview-iframe__iframe",
    style: {
      transform: "scale(".concat(scale, ")"),
      height: height,
      width: previewBreakpoint
    }
  }));
}

PreviewIFrame.propTypes = {
  src: PropTypes.string.isRequired,
  templateType: PropTypes.string.isRequired
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(50)))

/***/ }),
/* 330 */
/***/ (function(module, exports) {



/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__, PropTypes) {

var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.SiteTemplateFooter = void 0;

var _react = _interopRequireDefault(__webpack_require__(11));

var _values = _interopRequireDefault(__webpack_require__(184));

var _appUi = __webpack_require__(63);

var SiteTemplateFooter = function SiteTemplateFooter(props) {
  var instances = (0, _values.default)(props.instances).join(', ');
  return /*#__PURE__*/_react.default.createElement(_appUi.CardFooter, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "e-site-template__instances"
  }, /*#__PURE__*/_react.default.createElement(_appUi.Icon, {
    className: "eicon-flow"
  }), /*#__PURE__*/_react.default.createElement(_appUi.Text, {
    tag: "span",
    variant: "sm"
  }, /*#__PURE__*/_react.default.createElement("b", null, __('Instances', 'elementor-pro'), ":")), /*#__PURE__*/_react.default.createElement(_appUi.Text, {
    className: "e-site-template__instances-list",
    tag: "span",
    variant: "xxs"
  }, " ", instances), /*#__PURE__*/_react.default.createElement(_appUi.Button, {
    text: __('Edit Conditions', 'elementor-pro'),
    className: "e-site-template__edit-conditions",
    url: "/site-editor/conditions/".concat(props.id)
  })));
};

exports.SiteTemplateFooter = SiteTemplateFooter;
SiteTemplateFooter.propTypes = {
  id: PropTypes.number.isRequired,
  instances: PropTypes.any
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(65)["__"], __webpack_require__(50)))

/***/ }),
/* 332 */
/***/ (function(module, exports) {



/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

var _interopRequireWildcard = __webpack_require__(152);

var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = useTemplatesScreenshot;

var _values = _interopRequireDefault(__webpack_require__(184));

var _templates = __webpack_require__(171);

var _useScreenshot = _interopRequireWildcard(__webpack_require__(334));

/**
 * Wrapper function that was made to take screenshots specific for template.
 * it will capture a screenshot and update the templates context with the new screenshot.
 *
 * @param templateType
 */
function useTemplatesScreenshot() {
  var templateType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var _React$useContext = React.useContext(_templates.Context),
      updateTemplateItemState = _React$useContext.updateTemplateItemState,
      templates = _React$useContext.templates;

  var templatesForScreenshot = (0, _values.default)(templates).filter(function (template) {
    return shouldScreenshotTemplate(template, templateType);
  }); // Start to capture screenshots.

  var screenshot = (0, _useScreenshot.default)(templatesForScreenshot); // Update the thumbnail url when screenshot created.

  React.useEffect(function () {
    screenshot.posts.filter(function (post) {
      return post.status === _useScreenshot.SCREENSHOT_STATUS_SUCCEED;
    }).forEach(function (post) {
      return updateTemplateItemState(post.id, {
        thumbnail: post.imageUrl
      });
    });
  }, [screenshot.succeed]); // Update the screenshot url that was failed.
  // When the user will hit the route on the second time it will avoid trying to take another screenshot.

  React.useEffect(function () {
    screenshot.posts.filter(function (post) {
      return post.status === _useScreenshot.SCREENSHOT_STATUS_FAILED;
    }).forEach(function (post) {
      return updateTemplateItemState(post.id, {
        screenshot_url: null
      });
    });
  }, [screenshot.failed]);
  return screenshot;
}
/**
 * Filter handler.
 * will remove all the drafts and private and also will filter by template type if exists.
 *
 * @param template
 * @param templateType
 * @returns {boolean}
 */


function shouldScreenshotTemplate(template) {
  var templateType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (templateType) {
    return false;
  }

  return 'publish' === template.status && !template.thumbnail && template.screenshot_url;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = useScreenshot;
exports.SCREENSHOT_STATUS_FAILED = exports.SCREENSHOT_STATUS_SUCCEED = exports.SCREENSHOT_STATUS_IN_PROGRESS = exports.SCREENSHOT_STATUS_QUEUE = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(200));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(206));

var _parseInt2 = _interopRequireDefault(__webpack_require__(196));

__webpack_require__(19);

__webpack_require__(112);

var _objectSpread2 = _interopRequireDefault(__webpack_require__(155));

var _React = React,
    useState = _React.useState,
    useEffect = _React.useEffect,
    useMemo = _React.useMemo,
    useCallback = _React.useCallback;
var SCREENSHOT_STATUS_QUEUE = 'queue';
exports.SCREENSHOT_STATUS_QUEUE = SCREENSHOT_STATUS_QUEUE;
var SCREENSHOT_STATUS_IN_PROGRESS = 'in-progress';
exports.SCREENSHOT_STATUS_IN_PROGRESS = SCREENSHOT_STATUS_IN_PROGRESS;
var SCREENSHOT_STATUS_SUCCEED = 'succeed';
exports.SCREENSHOT_STATUS_SUCCEED = SCREENSHOT_STATUS_SUCCEED;
var SCREENSHOT_STATUS_FAILED = 'failed';
/**
 * Default options for the hook function
 *
 * @type {{numberOfScreenshotInParallel: int}}
 */

exports.SCREENSHOT_STATUS_FAILED = SCREENSHOT_STATUS_FAILED;
var defaultOptions = {
  numberOfScreenshotInParallel: 1
};
/**
 * Filter the posts by status.
 *
 * @param {array} posts
 * @param {string} status
 * @returns {array}
 */

function filterPostByStatus(posts, status) {
  return posts.filter(function (item) {
    return status === item.status;
  });
}
/**
 * Receive the initial posts and normalize it
 * to an array that the hook can work with.
 *
 * @param {array} posts
 */


function normalizeInitialPosts(posts) {
  return posts.map(function (post) {
    return {
      id: post.id,
      screenshot_url: post.screenshot_url,
      status: 'queue',
      iframe: null,
      imageUrl: null
    };
  });
}
/**
 * Find the post id inside the posts array, update it with the attrs,
 * and make sure to return the whole posts array.
 *
 *
 * @param {array} posts
 * @param {int} id
 * @param {object} attrs
 * @returns {array}
 */


function updatePostsAttrs(posts, id) {
  var attrs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return posts.map(function (post) {
    if (post.id !== id) {
      return post;
    }

    return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, post), attrs);
  });
}
/**
 * Creates an IFrame that will create the screenshot.
 *
 * @param {object} post
 * @returns {*}
 */


function createScreenshotIframe(post) {
  var iframe = document.createElement('iframe');
  iframe.src = post.screenshot_url;
  iframe.width = '1200';
  iframe.style = 'visibility: hidden;';
  document.body.appendChild(iframe);
  return iframe;
}
/**
 * Returns a callback, that will be bind to the iframe message event.
 *
 * @param {array} inProgressPosts
 * @param {function} setPosts
 * @returns {*}
 */


function useIFrameMessageListener(inProgressPosts, setPosts) {
  return useCallback(function (message) {
    var data = message.data;

    if (!data.name || data.name !== 'capture-screenshot-done') {
      return;
    }

    var post = inProgressPosts.find(function (item) {
      return item.id === (0, _parseInt2.default)(data.id);
    });

    if (!post) {
      return;
    }

    post.iframe.remove();
    setPosts(function (prevState) {
      return updatePostsAttrs(prevState, post.id, {
        status: data.success ? SCREENSHOT_STATUS_SUCCEED : SCREENSHOT_STATUS_FAILED,
        imageUrl: data.imageUrl
      });
    });
  }, [inProgressPosts]);
}
/**
 * Will create a screenshot based on the posts that was passed to it.
 *
 * @param {array} initialPosts
 * @param {int} numberOfScreenshotInParallel
 * @returns {{inProgress: array, succeed: array, failed: array, posts: array, queue: array}}
 */


function useScreenshot(initialPosts) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions,
      numberOfScreenshotInParallel = _ref.numberOfScreenshotInParallel;

  var _useState = useState([]),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      posts = _useState2[0],
      setPosts = _useState2[1]; // Holds some kind of computed value of the `posts` state,
  // it is been created mostly for convenient workflow and little bit performance optimization.


  var queue = useMemo(function () {
    return filterPostByStatus(posts, SCREENSHOT_STATUS_QUEUE);
  }, [posts]);
  var inProgress = useMemo(function () {
    return filterPostByStatus(posts, SCREENSHOT_STATUS_IN_PROGRESS);
  }, [posts]);
  var succeed = useMemo(function () {
    return filterPostByStatus(posts, SCREENSHOT_STATUS_SUCCEED);
  }, [posts]);
  var failed = useMemo(function () {
    return filterPostByStatus(posts, SCREENSHOT_STATUS_FAILED);
  }, [posts]); // Will run every initialPosts change, make the diff between the local state
  // and initialPosts and creates a new local state.

  useEffect(function () {
    var postsDiff = initialPosts.filter(function (initialPost) {
      return !posts.find(function (statePost) {
        return statePost.id === initialPost.id;
      });
    });

    if (!postsDiff.length) {
      return;
    }

    setPosts(function (prev) {
      return [].concat((0, _toConsumableArray2.default)(prev), (0, _toConsumableArray2.default)(normalizeInitialPosts(postsDiff)));
    });
  }, [initialPosts]); // Holds the useCallback that will be used to listen to the screenshot iframe events.

  var iframeMessageListener = useIFrameMessageListener(inProgress, setPosts); // Listens to the screenshot iframe events
  // eventually will remove the iframe and set the post status to succeed or failed.

  useEffect(function () {
    window.addEventListener('message', iframeMessageListener, false);
    return function () {
      window.removeEventListener('message', iframeMessageListener);
    };
  }, [iframeMessageListener]); // Runs every time `posts` state change (all most every event in this hook will trigger change to `posts`),
  // this logic response for setting status of the process to DONE if needed + taking the next post and start
  // to capture a screenshot.

  useEffect(function () {
    if (0 === queue.length || inProgress.length >= numberOfScreenshotInParallel) {
      return;
    }

    var _queue = (0, _slicedToArray2.default)(queue, 1),
        nextPost = _queue[0];

    var iframe = createScreenshotIframe(nextPost);
    setPosts(function (prevState) {
      return updatePostsAttrs(prevState, nextPost.id, {
        status: SCREENSHOT_STATUS_IN_PROGRESS,
        iframe: iframe
      });
    });
  }, [posts]);
  return {
    posts: posts,
    queue: queue,
    inProgress: inProgress,
    succeed: succeed,
    failed: failed
  };
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__, PropTypes) {

var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = TemplateType;

var _react = _interopRequireDefault(__webpack_require__(11));

__webpack_require__(19);

var _siteEditor = __webpack_require__(269);

var _appUi = __webpack_require__(63);

var _siteTemplates = _interopRequireDefault(__webpack_require__(285));

__webpack_require__(336);

function TemplateType(props) {
  var _React$useContext = _react.default.useContext(_siteEditor.TemplateTypesContext),
      templateTypes = _React$useContext.templateTypes,
      currentType = templateTypes.find(function (item) {
    return item.type === props.type;
  });

  if (!currentType) {
    return /*#__PURE__*/_react.default.createElement(_appUi.NotFound, null);
  }

  return /*#__PURE__*/_react.default.createElement("section", {
    className: "e-site-editor__templates e-site-editor__templates--type-".concat(props.type)
  }, /*#__PURE__*/_react.default.createElement(_appUi.Grid, {
    className: "page-header",
    container: true,
    justify: "space-between"
  }, /*#__PURE__*/_react.default.createElement(_appUi.Heading, {
    variant: "h1"
  }, currentType.page_title), /*#__PURE__*/_react.default.createElement(_appUi.AddNewButton, {
    url: currentType.urls.create,
    text: __('Add New', 'elementor-pro')
  })), /*#__PURE__*/_react.default.createElement("hr", {
    className: "eps-separator"
  }), /*#__PURE__*/_react.default.createElement(_siteTemplates.default, {
    type: currentType.type,
    id: props.id
  }));
}

TemplateType.propTypes = {
  type: PropTypes.string,
  page_title: PropTypes.string,
  id: PropTypes.string
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(65)["__"], __webpack_require__(50)))

/***/ }),
/* 336 */
/***/ (function(module, exports) {



/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(PropTypes, __) {

var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = AddNew;

var _react = _interopRequireDefault(__webpack_require__(11));

var _keys = _interopRequireDefault(__webpack_require__(47));

var _appUi = __webpack_require__(63);

var _siteEditor = __webpack_require__(269);

__webpack_require__(338);

var _templates = __webpack_require__(171);

var _backButton = _interopRequireDefault(__webpack_require__(270));

function AddNew() {
  var _React$useContext = _react.default.useContext(_templates.Context),
      templates = _React$useContext.templates,
      hasTemplates = 1 <= (0, _keys.default)(templates).length;
  /**
   * An hover element for each site part.
   */


  var HoverElement = function HoverElement(props) {
    return /*#__PURE__*/_react.default.createElement("a", {
      href: props.urls.create,
      className: "eps-card__image-overlay eps-add-new__overlay"
    }, /*#__PURE__*/_react.default.createElement(_appUi.AddNewButton, {
      hideText: true
    }));
  };

  HoverElement.propTypes = {
    urls: PropTypes.object.isRequired
  };
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "e-site-editor__add-new"
  }, /*#__PURE__*/_react.default.createElement("header", {
    className: "e-site-editor__header"
  }, hasTemplates && /*#__PURE__*/_react.default.createElement(_backButton.default, null), /*#__PURE__*/_react.default.createElement(_appUi.Heading, {
    variant: "h1"
  }, __('Start customizing every part of your site', 'elementor-pro'))), /*#__PURE__*/_react.default.createElement(_siteEditor.SiteParts, {
    hoverElement: HoverElement
  }));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(50), __webpack_require__(65)["__"]))

/***/ }),
/* 338 */
/***/ (function(module, exports) {



/***/ }),
/* 339 */
/***/ (function(module, exports) {



/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__, PropTypes) {

var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = Conditions;

var _react = _interopRequireDefault(__webpack_require__(11));

var _parseInt2 = _interopRequireDefault(__webpack_require__(196));

var _appUi = __webpack_require__(63);

var _conditions = _interopRequireDefault(__webpack_require__(290));

var _templates = __webpack_require__(171);

var _conditionsRows = _interopRequireDefault(__webpack_require__(343));

__webpack_require__(349);

var _backButton = _interopRequireDefault(__webpack_require__(270));

function Conditions(props) {
  var _React$useContext = _react.default.useContext(_templates.Context),
      findTemplateItemInState = _React$useContext.findTemplateItemInState,
      updateTemplateItemState = _React$useContext.updateTemplateItemState,
      template = findTemplateItemInState((0, _parseInt2.default)(props.id));

  if (!template) {
    return /*#__PURE__*/_react.default.createElement("div", null, __('Not Found', 'elementor-pro'));
  }

  return /*#__PURE__*/_react.default.createElement("section", {
    className: "e-site-editor-conditions"
  }, /*#__PURE__*/_react.default.createElement(_backButton.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "e-site-editor-conditions__header"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "e-site-editor-conditions__header-image",
    src: "".concat(elementorAppProConfig.baseUrl, "/modules/theme-builder/assets/images/conditions-tab.svg"),
    alt: __('Import template', 'elementor-pro')
  }), /*#__PURE__*/_react.default.createElement(_appUi.Heading, {
    variant: "h1",
    tag: "h1"
  }, __('Where Do You Want to Display Your Template?', 'elementor-pro')), /*#__PURE__*/_react.default.createElement(_appUi.Text, {
    variant: "p"
  }, __('Set the conditions that determine where your template is used throughout your site.', 'elementor-pro'), /*#__PURE__*/_react.default.createElement("br", null), __('For example, choose \'Entire Site\' to display the template across your site.', 'elementor-pro'))), /*#__PURE__*/_react.default.createElement(_conditions.default, {
    currentTemplate: template,
    onConditionsSaved: updateTemplateItemState
  }, /*#__PURE__*/_react.default.createElement(_conditionsRows.default, null)));
}

Conditions.propTypes = {
  id: PropTypes.string
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(65)["__"], __webpack_require__(50)))

/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(232);

__webpack_require__(112);

var _stringify = _interopRequireDefault(__webpack_require__(187));

__webpack_require__(272);

__webpack_require__(273);

var _keys = _interopRequireDefault(__webpack_require__(47));

var _isArray = _interopRequireDefault(__webpack_require__(185));

var _assign = _interopRequireDefault(__webpack_require__(287));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59));

var Condition = /*#__PURE__*/function () {
  function Condition(args) {
    (0, _classCallCheck2.default)(this, Condition);
    (0, _defineProperty2.default)(this, "id", elementorCommon.helpers.getUniqueId());
    (0, _defineProperty2.default)(this, "default", '');
    (0, _defineProperty2.default)(this, "type", 'include');
    (0, _defineProperty2.default)(this, "name", '');
    (0, _defineProperty2.default)(this, "sub", '');
    (0, _defineProperty2.default)(this, "subId", '');
    (0, _defineProperty2.default)(this, "options", []);
    (0, _defineProperty2.default)(this, "subOptions", []);
    (0, _defineProperty2.default)(this, "subIdAutocomplete", []);
    (0, _defineProperty2.default)(this, "subIdOptions", []);
    (0, _defineProperty2.default)(this, "conflictErrors", []);
    this.set(args);
  }

  (0, _createClass2.default)(Condition, [{
    key: "set",
    value: function set(args) {
      (0, _assign.default)(this, args);
      return this;
    }
  }, {
    key: "clone",
    value: function clone() {
      return (0, _assign.default)(new Condition(), this);
    }
  }, {
    key: "remove",
    value: function remove(keys) {
      var _this = this;

      if (!(0, _isArray.default)(keys)) {
        keys = [keys];
      }

      keys.forEach(function (key) {
        delete _this[key];
      });
      return this;
    }
  }, {
    key: "only",
    value: function only(keys) {
      if (!(0, _isArray.default)(keys)) {
        keys = [keys];
      }

      var keysToRemove = (0, _keys.default)(this).filter(function (conditionKey) {
        return !keys.includes(conditionKey);
      });
      this.remove(keysToRemove);
      return this;
    }
  }, {
    key: "toJson",
    value: function toJson() {
      return (0, _stringify.default)(this);
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.forDb().filter(function (item) {
        return item;
      }).join('/');
    }
  }, {
    key: "forDb",
    value: function forDb() {
      return [this.type, this.name, this.sub, this.subId];
    }
  }, {
    key: "forContext",
    value: function forContext() {
      return {
        type: this.type,
        name: this.name,
        sub: this.sub,
        subId: this.subId
      };
    }
  }]);
  return Condition;
}();

exports.default = Condition;

/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__) {

var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.ConditionsConfig = void 0;

var _promise = _interopRequireDefault(__webpack_require__(172));

var _keys = _interopRequireDefault(__webpack_require__(47));

var _objectSpread3 = _interopRequireDefault(__webpack_require__(155));

__webpack_require__(112);

__webpack_require__(232);

var _values = _interopRequireDefault(__webpack_require__(184));

var _typeof2 = _interopRequireDefault(__webpack_require__(86));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(200));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59));

var _commands = __webpack_require__(186);

var ConditionsConfig = /*#__PURE__*/function () {
  function ConditionsConfig(config) {
    (0, _classCallCheck2.default)(this, ConditionsConfig);
    (0, _defineProperty2.default)(this, "config", null);
    this.config = config;
  }

  (0, _createClass2.default)(ConditionsConfig, [{
    key: "getOptions",

    /**
     * Get main options for condition name.
     *
     * @returns {*[]}
     */
    value: function getOptions() {
      return this.getSubOptions('general', true).map(function (_ref) {
        var label = _ref.label,
            value = _ref.value;
        return {
          label: label,
          value: value
        };
      });
    }
    /**
     * Get the sub options for the select.
     *
     * @param itemName
     * @param isSubItem
     * @returns {*[]}
     */

  }, {
    key: "getSubOptions",
    value: function getSubOptions(itemName) {
      var _this = this;

      var isSubItem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var config = this.config[itemName];

      if (!config) {
        return [];
      }

      return [{
        label: config.all_label,
        value: isSubItem ? itemName : ''
      }].concat((0, _toConsumableArray2.default)(config.sub_conditions.map(function (subName) {
        var subConfig = _this.config[subName];
        return {
          label: subConfig.label,
          value: subName,
          children: subConfig.sub_conditions.length ? _this.getSubOptions(subName, true) : null
        };
      })));
    }
    /**
     * Get the autocomplete property from the conditions config
     *
     * @param sub
     * @returns {{}|*}
     */

  }, {
    key: "getSubIdAutocomplete",
    value: function getSubIdAutocomplete(sub) {
      var _controls$;

      var config = this.config[sub];

      if (!config || !('object' === (0, _typeof2.default)(config.controls))) {
        return {};
      }

      var controls = (0, _values.default)(config.controls);

      if (!(controls === null || controls === void 0 ? void 0 : (_controls$ = controls[0]) === null || _controls$ === void 0 ? void 0 : _controls$.autocomplete)) {
        return {};
      }

      return controls[0].autocomplete;
    }
    /**
     * Calculate instances from the conditions.
     *
     * @returns {object}
     */

  }, {
    key: "calculateInstances",
    value: function calculateInstances(conditions) {
      var _this2 = this;

      var instances = conditions.reduce(function (current, condition) {
        if ('exclude' === condition.type) {
          return current;
        }

        var key = condition.sub || condition.name,
            config = _this2.config[key];

        if (!config) {
          return current;
        }

        var instanceLabel = condition.subId ? "".concat(config.label, " #").concat(condition.subId) : config.all_label;
        return (0, _objectSpread3.default)((0, _objectSpread3.default)({}, current), {}, (0, _defineProperty2.default)({}, key, instanceLabel));
      }, {});

      if (0 === (0, _keys.default)(instances).length) {
        instances = [__('No instances', 'elementor-pro')];
      }

      return instances;
    }
  }], [{
    key: "create",
    value: function create() {
      if (ConditionsConfig.instance) {
        return _promise.default.resolve(ConditionsConfig.instance);
      }

      return $e.data.get(_commands.ConditionsConfig.signature).then(function (response) {
        ConditionsConfig.instance = new ConditionsConfig(response.data);
        return ConditionsConfig.instance;
      });
    }
  }]);
  return ConditionsConfig;
}();

exports.ConditionsConfig = ConditionsConfig;
(0, _defineProperty2.default)(ConditionsConfig, "instance", void 0);
var _default = ConditionsConfig;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(65)["__"]))

/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__) {

var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = ConditionsRows;

var _react = _interopRequireDefault(__webpack_require__(11));

var _extends2 = _interopRequireDefault(__webpack_require__(286));

var _values = _interopRequireDefault(__webpack_require__(184));

var _conditions = __webpack_require__(290);

var _appUi = __webpack_require__(63);

var _conditionType = _interopRequireDefault(__webpack_require__(344));

var _conditionName = _interopRequireDefault(__webpack_require__(345));

var _conditionSub = _interopRequireDefault(__webpack_require__(346));

var _conditionSubId = _interopRequireDefault(__webpack_require__(347));

var _conditionConflicts = _interopRequireDefault(__webpack_require__(348));

function ConditionsRows() {
  var _React$useContext = _react.default.useContext(_conditions.Context),
      conditions = _React$useContext.conditions,
      create = _React$useContext.createConditionItemInState,
      update = _React$useContext.updateConditionItemState,
      remove = _React$useContext.removeConditionItemInState,
      save = _React$useContext.saveConditions,
      action = _React$useContext.action,
      resetActionState = _React$useContext.resetActionState;

  var rows = (0, _values.default)(conditions).map(function (condition) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: condition.id
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "e-site-editor-conditions__row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "e-site-editor-conditions__row-controls ".concat(condition.conflictErrors.length && 'e-site-editor-conditions__row-controls--error')
    }, /*#__PURE__*/_react.default.createElement(_conditionType.default, (0, _extends2.default)({}, condition, {
      updateConditions: update
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "e-site-editor-conditions__row-controls-inner"
    }, /*#__PURE__*/_react.default.createElement(_conditionName.default, (0, _extends2.default)({}, condition, {
      updateConditions: update
    })), /*#__PURE__*/_react.default.createElement(_conditionSub.default, (0, _extends2.default)({}, condition, {
      updateConditions: update
    })), /*#__PURE__*/_react.default.createElement(_conditionSubId.default, (0, _extends2.default)({}, condition, {
      updateConditions: update
    })))), /*#__PURE__*/_react.default.createElement(_appUi.Button, {
      className: "e-site-editor-conditions__remove-condition",
      text: __('Delete', 'elementor-pro'),
      icon: "eicon-close",
      hideText: true,
      onClick: function onClick() {
        return remove(condition.id);
      }
    })), /*#__PURE__*/_react.default.createElement(_conditionConflicts.default, {
      conflicts: condition.conflictErrors
    }));
  });
  var isSaving = action.current === _conditions.ConditionsProvider.actions.SAVE && action.loading;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, action.error && /*#__PURE__*/_react.default.createElement(_appUi.Dialog, {
    text: action.error,
    dismissButtonText: __('Go Back', 'elementor-pro'),
    dismissButtonOnClick: resetActionState,
    approveButtonText: __('Learn More', 'elementor-pro'),
    approveButtonColor: "link",
    approveButtonUrl: "https://go.elementor.com/app-theme-builder-conditions-load-issue",
    approveButtonTarget: "_target"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "e-site-editor-conditions__rows"
  }, rows, /*#__PURE__*/_react.default.createElement("div", {
    className: "e-site-editor-conditions__add-button-container"
  }, /*#__PURE__*/_react.default.createElement(_appUi.Button, {
    className: "e-site-editor-conditions__add-button",
    variant: "contained",
    size: "lg",
    text: __('ADD CONDITION', 'elementor-pro'),
    onClick: create,
    port: true
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "e-site-editor-conditions__footer"
  }, /*#__PURE__*/_react.default.createElement(_appUi.Button, {
    variant: "contained",
    color: "primary",
    size: "lg",
    hideText: isSaving,
    icon: isSaving ? 'eicon-loading eicon-animation-spin' : '',
    text: __('Save & Close', 'elementor-pro'),
    onClick: function onClick() {
      return save().then(function () {
        return history.back();
      });
    }
  })));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(65)["__"]))

/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__, PropTypes) {

var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = ConditionType;

var _react = _interopRequireDefault(__webpack_require__(11));

var _appUi = __webpack_require__(63);

function ConditionType(props) {
  var wrapperRef = _react.default.createRef();

  var options = [{
    label: __('Include', 'elementor-pro'),
    value: 'include'
  }, {
    label: __('Exclude', 'elementor-pro'),
    value: 'exclude'
  }];

  var onChange = function onChange(e) {
    props.updateConditions(props.id, {
      type: e.target.value
    });
  };

  _react.default.useEffect(function () {
    wrapperRef.current.setAttribute('data-elementor-condition-type', props.type);
  });

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "e-site-editor-conditions__input-wrapper e-site-editor-conditions__input-wrapper--condition-type",
    ref: wrapperRef
  }, /*#__PURE__*/_react.default.createElement(_appUi.Select, {
    options: options,
    value: props.type,
    onChange: onChange
  }));
}

ConditionType.propTypes = {
  updateConditions: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};
ConditionType.defaultProps = {
  type: ''
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(65)["__"], __webpack_require__(50)))

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(PropTypes) {

var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = ConditionName;

var _react = _interopRequireDefault(__webpack_require__(11));

__webpack_require__(112);

var _appUi = __webpack_require__(63);

function ConditionName(props) {
  // Hide for template types that has another default, like single & archive.
  if ('general' !== props.default) {
    return '';
  }

  var onChange = function onChange(e) {
    return props.updateConditions(props.id, {
      name: e.target.value,
      sub: '',
      subId: ''
    });
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "e-site-editor-conditions__input-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_appUi.Select, {
    options: props.options,
    value: props.name,
    onChange: onChange
  }));
}

ConditionName.propTypes = {
  updateConditions: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  default: PropTypes.string.isRequired
};
ConditionName.defaultProps = {
  name: ''
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(50)))

/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(PropTypes) {

var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = ConditionSub;

var _react = _interopRequireDefault(__webpack_require__(11));

__webpack_require__(232);

__webpack_require__(112);

var _appUi = __webpack_require__(63);

function ConditionSub(props) {
  if ('general' === props.name || !props.subOptions.length) {
    return '';
  }

  var onChange = function onChange(e) {
    return props.updateConditions(props.id, {
      sub: e.target.value,
      subId: ''
    });
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "e-site-editor-conditions__input-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_appUi.Select, {
    options: props.subOptions,
    value: props.sub,
    onChange: onChange
  }));
}

ConditionSub.propTypes = {
  updateConditions: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  sub: PropTypes.string.isRequired,
  subOptions: PropTypes.array.isRequired
};
ConditionSub.defaultProps = {
  sub: '',
  subOptions: {}
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(50)))

/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__, PropTypes) {

var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = ConditionSubId;

var _react = _interopRequireDefault(__webpack_require__(11));

var _keys = _interopRequireDefault(__webpack_require__(47));

__webpack_require__(232);

var _appUi = __webpack_require__(63);

/**
 * Main component.
 *
 * @param props
 * @returns {*}
 * @constructor
 */
function ConditionSubId(props) {
  if (!props.sub || !(0, _keys.default)(props.subIdAutocomplete).length) {
    return '';
  }

  var settings = _react.default.useMemo(function () {
    return getSettings(props.subIdAutocomplete);
  }, [props.subIdAutocomplete]);

  var onChange = function onChange(e) {
    return props.updateConditions(props.id, {
      subId: e.target.value
    });
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "e-site-editor-conditions__input-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_appUi.Select2, {
    onChange: onChange,
    value: props.subId,
    settings: settings,
    options: props.subIdOptions
  }));
}
/**
 * Get settings for the select2 base on the autocomplete settings,
 * that passes as a prop
 *
 * @param autocomplete
 * @returns object
 */


function getSettings(autocomplete) {
  return {
    allowClear: false,
    placeholder: __('All', 'elementor-pro'),
    dir: elementorCommon.config.isRTL ? 'rtl' : 'ltr',
    ajax: {
      transport: function transport(params, success, failure) {
        return elementorCommon.ajax.addRequest('pro_panel_posts_control_filter_autocomplete', {
          data: {
            q: params.data.q,
            autocomplete: autocomplete
          },
          success: success,
          error: failure
        });
      },
      data: function data(params) {
        return {
          q: params.term,
          page: params.page
        };
      },
      cache: true
    },
    escapeMarkup: function escapeMarkup(markup) {
      return markup;
    },
    minimumInputLength: 1
  };
}

ConditionSubId.propTypes = {
  subIdAutocomplete: PropTypes.object,
  id: PropTypes.string.isRequired,
  sub: PropTypes.string,
  subId: PropTypes.string,
  updateConditions: PropTypes.func,
  subIdOptions: PropTypes.array
};
ConditionSubId.defaultProps = {
  subId: '',
  subIdOptions: []
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(65)["__"], __webpack_require__(50)))

/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__, PropTypes) {

var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = ConditionConflicts;

var _react = _interopRequireDefault(__webpack_require__(11));

var _appUi = __webpack_require__(63);

function ConditionConflicts(props) {
  if (!props.conflicts.length) {
    return '';
  }

  var conflictLinks = props.conflicts.map(function (conflict) {
    return /*#__PURE__*/_react.default.createElement(_appUi.Button, {
      key: conflict.template_id,
      target: "_blank",
      url: conflict.edit_url,
      text: conflict.template_title
    });
  });
  return /*#__PURE__*/_react.default.createElement(_appUi.Text, {
    className: "e-site-editor-conditions__conflict",
    variant: "sm"
  }, __('Elementor recognized that you have set this location for other templates: ', 'elementor-pro'), " ", conflictLinks);
}

ConditionConflicts.propTypes = {
  conflicts: PropTypes.array.isRequired
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(65)["__"], __webpack_require__(50)))

/***/ }),
/* 349 */
/***/ (function(module, exports) {



/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__) {

var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = Import;

var _react = _interopRequireDefault(__webpack_require__(11));

__webpack_require__(104);

var _promise = _interopRequireDefault(__webpack_require__(172));

__webpack_require__(112);

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(206));

var _appUi = __webpack_require__(63);

var _templates = __webpack_require__(171);

var _backButton = _interopRequireDefault(__webpack_require__(270));

function Import() {
  var _React$useContext = _react.default.useContext(_templates.Context),
      importTemplates = _React$useContext.importTemplates,
      action = _React$useContext.action,
      resetActionState = _React$useContext.resetActionState,
      _React$useState = _react.default.useState(null),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      importedTemplate = _React$useState2[0],
      setImportedTemplate = _React$useState2[1],
      isImport = _react.default.useMemo(function () {
    return action.current === _templates.TemplatesProvider.actions.IMPORT;
  }, [action]),
      isUploading = _react.default.useMemo(function () {
    return isImport && action.loading;
  }, [action]),
      hasError = _react.default.useMemo(function () {
    return isImport && action.error;
  }, [action]);

  var upload = _react.default.useCallback(function (files) {
    if (isUploading) {
      return;
    }

    var file = files[0];
    readFile(file).then(function (fileData) {
      return importTemplates({
        fileName: file.name,
        fileData: fileData
      });
    }).then(function (response) {
      // For now it show a dialog for the first template ONLY!
      setImportedTemplate(response.data[0]);
    });
  }, []);

  return /*#__PURE__*/_react.default.createElement("section", {
    className: "site-editor__import"
  }, importedTemplate && /*#__PURE__*/_react.default.createElement(_appUi.Dialog, {
    title: __('Your template was imported', 'elementor-pro'),
    approveButtonText: __('Preview', 'elementor-pro'),
    approveButtonUrl: importedTemplate.url,
    approveButtonTarget: "_blank",
    dismissButtonText: __('Edit', 'elementor-pro'),
    dismissButtonUrl: importedTemplate.editURL,
    dismissButtonTarget: "_top",
    onClose: function onClose() {
      return setImportedTemplate(null);
    }
  }), hasError && /*#__PURE__*/_react.default.createElement(_appUi.Dialog, {
    title: action.error,
    approveButtonText: __('Learn More', 'elementor-pro'),
    approveButtonUrl: "https://go.elementor.com/app-theme-builder-import-issue",
    approveButtonTarget: "_blank",
    approveButtonColor: "link",
    dismissButtonText: __('Go Back', 'elementor-pro'),
    dismissButtonOnClick: resetActionState,
    onClose: resetActionState
  }), /*#__PURE__*/_react.default.createElement(_backButton.default, null), /*#__PURE__*/_react.default.createElement(_appUi.DropZone, {
    heading: __('Import Template To Your Library', 'elementor-pro'),
    text: __('Drag & Drop your .JSON or .zip template file', 'elementor-pro'),
    secondaryText: __('or', 'elementor-pro'),
    onFileSelect: upload,
    isLoading: isUploading
  }));
}

function readFile(file) {
  return new _promise.default(function (resolve) {
    var fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = function (event) {
      // Replace the mime type that prepended to the base64 with empty string and return a
      // resolved promise only with the base64 string.
      resolve(event.target.result.replace(/^[^,]+,/, ''));
    };
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(65)["__"]))

/***/ }),
/* 351 */
/***/ (function(module, exports) {

module.exports = elementorAppPackages.router;

/***/ }),
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Link", function() { return /* binding */ Link; });
__webpack_require__.d(__webpack_exports__, "Location", function() { return /* binding */ es_Location; });
__webpack_require__.d(__webpack_exports__, "LocationProvider", function() { return /* binding */ es_LocationProvider; });
__webpack_require__.d(__webpack_exports__, "Match", function() { return /* binding */ es_Match; });
__webpack_require__.d(__webpack_exports__, "Redirect", function() { return /* binding */ es_Redirect; });
__webpack_require__.d(__webpack_exports__, "Router", function() { return /* binding */ es_Router; });
__webpack_require__.d(__webpack_exports__, "ServerLocation", function() { return /* binding */ es_ServerLocation; });
__webpack_require__.d(__webpack_exports__, "createHistory", function() { return /* reexport */ createHistory; });
__webpack_require__.d(__webpack_exports__, "createMemorySource", function() { return /* reexport */ createMemorySource; });
__webpack_require__.d(__webpack_exports__, "isRedirect", function() { return /* binding */ isRedirect; });
__webpack_require__.d(__webpack_exports__, "navigate", function() { return /* reexport */ history_navigate; });
__webpack_require__.d(__webpack_exports__, "redirectTo", function() { return /* binding */ redirectTo; });
__webpack_require__.d(__webpack_exports__, "globalHistory", function() { return /* reexport */ globalHistory; });
__webpack_require__.d(__webpack_exports__, "matchPath", function() { return /* reexport */ utils_match; });
__webpack_require__.d(__webpack_exports__, "useLocation", function() { return /* binding */ es_useLocation; });
__webpack_require__.d(__webpack_exports__, "useNavigate", function() { return /* binding */ es_useNavigate; });
__webpack_require__.d(__webpack_exports__, "useParams", function() { return /* binding */ es_useParams; });
__webpack_require__.d(__webpack_exports__, "useMatch", function() { return /* binding */ es_useMatch; });

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(11);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__(50);

// EXTERNAL MODULE: ../node_modules/invariant/browser.js
var browser = __webpack_require__(205);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// EXTERNAL MODULE: ../node_modules/create-react-context/lib/index.js
var lib = __webpack_require__(301);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ../node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}



// CONCATENATED MODULE: ../node_modules/@reach/router/es/lib/utils.js


////////////////////////////////////////////////////////////////////////////////
// startsWith(string, search) - Check if `string` starts with `search`
var startsWith = function startsWith(string, search) {
  return string.substr(0, search.length) === search;
};

////////////////////////////////////////////////////////////////////////////////
// pick(routes, uri)
//
// Ranks and picks the best route to match. Each segment gets the highest
// amount of points, then the type of segment gets an additional amount of
// points where
//
//     static > dynamic > splat > root
//
// This way we don't have to worry about the order of our routes, let the
// computers do it.
//
// A route looks like this
//
//     { path, default, value }
//
// And a returned match looks like:
//
//     { route, params, uri }
//
// I know, I should use TypeScript not comments for these types.
var utils_pick = function pick(routes, uri) {
  var match = void 0;
  var default_ = void 0;

  var _uri$split = uri.split("?"),
      uriPathname = _uri$split[0];

  var uriSegments = segmentize(uriPathname);
  var isRootUri = uriSegments[0] === "";
  var ranked = rankRoutes(routes);

  for (var i = 0, l = ranked.length; i < l; i++) {
    var missed = false;
    var route = ranked[i].route;

    if (route.default) {
      default_ = {
        route: route,
        params: {},
        uri: uri
      };
      continue;
    }

    var routeSegments = segmentize(route.path);
    var params = {};
    var max = Math.max(uriSegments.length, routeSegments.length);
    var index = 0;

    for (; index < max; index++) {
      var routeSegment = routeSegments[index];
      var uriSegment = uriSegments[index];

      if (isSplat(routeSegment)) {
        // Hit a splat, just grab the rest, and return a match
        // uri:   /files/documents/work
        // route: /files/*
        var param = routeSegment.slice(1) || "*";
        params[param] = uriSegments.slice(index).map(decodeURIComponent).join("/");
        break;
      }

      if (uriSegment === undefined) {
        // URI is shorter than the route, no match
        // uri:   /users
        // route: /users/:userId
        missed = true;
        break;
      }

      var dynamicMatch = paramRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        var matchIsNotReserved = reservedNames.indexOf(dynamicMatch[1]) === -1;
        !matchIsNotReserved ?  false ? undefined : browser_default()(false) : void 0;
        var value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        // Current segments don't match, not dynamic, not splat, so no match
        // uri:   /users/123/settings
        // route: /users/:id/profile
        missed = true;
        break;
      }
    }

    if (!missed) {
      match = {
        route: route,
        params: params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }

  return match || default_ || null;
};

////////////////////////////////////////////////////////////////////////////////
// match(path, uri) - Matches just one path to a uri, also lol
var utils_match = function match(path, uri) {
  return utils_pick([{ path: path }], uri);
};

////////////////////////////////////////////////////////////////////////////////
// resolve(to, basepath)
//
// Resolves URIs as though every path is a directory, no files.  Relative URIs
// in the browser can feel awkward because not only can you be "in a directory"
// you can be "at a file", too. For example
//
//     browserSpecResolve('foo', '/bar/') => /bar/foo
//     browserSpecResolve('foo', '/bar') => /foo
//
// But on the command line of a file system, it's not as complicated, you can't
// `cd` from a file, only directories.  This way, links have to know less about
// their current path. To go deeper you can do this:
//
//     <Link to="deeper"/>
//     // instead of
//     <Link to=`{${props.uri}/deeper}`/>
//
// Just like `cd`, if you want to go deeper from the command line, you do this:
//
//     cd deeper
//     # not
//     cd $(pwd)/deeper
//
// By treating every path as a directory, linking to relative paths should
// require less contextual information and (fingers crossed) be more intuitive.
var resolve = function resolve(to, base) {
  // /foo/bar, /baz/qux => /foo/bar
  if (startsWith(to, "/")) {
    return to;
  }

  var _to$split = to.split("?"),
      toPathname = _to$split[0],
      toQuery = _to$split[1];

  var _base$split = base.split("?"),
      basePathname = _base$split[0];

  var toSegments = segmentize(toPathname);
  var baseSegments = segmentize(basePathname);

  // ?a=b, /users?b=c => /users?a=b
  if (toSegments[0] === "") {
    return addQuery(basePathname, toQuery);
  }

  // profile, /users/789 => /users/789/profile
  if (!startsWith(toSegments[0], ".")) {
    var pathname = baseSegments.concat(toSegments).join("/");
    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
  }

  // ./         /users/123  =>  /users/123
  // ../        /users/123  =>  /users
  // ../..      /users/123  =>  /
  // ../../one  /a/b/c/d    =>  /a/b/one
  // .././one   /a/b/c/d    =>  /a/b/c/one
  var allSegments = baseSegments.concat(toSegments);
  var segments = [];
  for (var i = 0, l = allSegments.length; i < l; i++) {
    var segment = allSegments[i];
    if (segment === "..") segments.pop();else if (segment !== ".") segments.push(segment);
  }

  return addQuery("/" + segments.join("/"), toQuery);
};

////////////////////////////////////////////////////////////////////////////////
// insertParams(path, params)
var insertParams = function insertParams(path, params) {
  var segments = segmentize(path);
  return "/" + segments.map(function (segment) {
    var match = paramRe.exec(segment);
    return match ? params[match[1]] : segment;
  }).join("/");
};

var validateRedirect = function validateRedirect(from, to) {
  var filter = function filter(segment) {
    return isDynamic(segment);
  };
  var fromString = segmentize(from).filter(filter).sort().join("/");
  var toString = segmentize(to).filter(filter).sort().join("/");
  return fromString === toString;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var paramRe = /^:(.+)/;

var SEGMENT_POINTS = 4;
var STATIC_POINTS = 3;
var DYNAMIC_POINTS = 2;
var SPLAT_PENALTY = 1;
var ROOT_POINTS = 1;

var isRootSegment = function isRootSegment(segment) {
  return segment === "";
};
var isDynamic = function isDynamic(segment) {
  return paramRe.test(segment);
};
var isSplat = function isSplat(segment) {
  return segment && segment[0] === "*";
};

var rankRoute = function rankRoute(route, index) {
  var score = route.default ? 0 : segmentize(route.path).reduce(function (score, segment) {
    score += SEGMENT_POINTS;
    if (isRootSegment(segment)) score += ROOT_POINTS;else if (isDynamic(segment)) score += DYNAMIC_POINTS;else if (isSplat(segment)) score -= SEGMENT_POINTS + SPLAT_PENALTY;else score += STATIC_POINTS;
    return score;
  }, 0);
  return { route: route, score: score, index: index };
};

var rankRoutes = function rankRoutes(routes) {
  return routes.map(rankRoute).sort(function (a, b) {
    return a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index;
  });
};

var segmentize = function segmentize(uri) {
  return uri
  // strip starting/ending slashes
  .replace(/(^\/+|\/+$)/g, "").split("/");
};

var addQuery = function addQuery(pathname, query) {
  return pathname + (query ? "?" + query : "");
};

var reservedNames = ["uri", "path"];

/**
 * Shallow compares two objects.
 * @param {Object} obj1 The first object to compare.
 * @param {Object} obj2 The second object to compare.
 */
var shallowCompare = function shallowCompare(obj1, obj2) {
  var obj1Keys = Object.keys(obj1);
  return obj1Keys.length === Object.keys(obj2).length && obj1Keys.every(function (key) {
    return obj2.hasOwnProperty(key) && obj1[key] === obj2[key];
  });
};

////////////////////////////////////////////////////////////////////////////////

// CONCATENATED MODULE: ../node_modules/@reach/router/es/lib/history.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getLocation = function getLocation(source) {
  var _source$location = source.location,
      search = _source$location.search,
      hash = _source$location.hash,
      href = _source$location.href,
      origin = _source$location.origin,
      protocol = _source$location.protocol,
      host = _source$location.host,
      hostname = _source$location.hostname,
      port = _source$location.port;
  var pathname = source.location.pathname;


  if (!pathname && href && canUseDOM) {
    var url = new URL(href);
    pathname = url.pathname;
  }

  return {
    pathname: encodeURI(decodeURI(pathname)),
    search: search,
    hash: hash,
    href: href,
    origin: origin,
    protocol: protocol,
    host: host,
    hostname: hostname,
    port: port,
    state: source.history.state,
    key: source.history.state && source.history.state.key || "initial"
  };
};

var createHistory = function createHistory(source, options) {
  var listeners = [];
  var location = getLocation(source);
  var transitioning = false;
  var resolveTransition = function resolveTransition() {};

  return {
    get location() {
      return location;
    },

    get transitioning() {
      return transitioning;
    },

    _onTransitionComplete: function _onTransitionComplete() {
      transitioning = false;
      resolveTransition();
    },
    listen: function listen(listener) {
      listeners.push(listener);

      var popstateListener = function popstateListener() {
        location = getLocation(source);
        listener({ location: location, action: "POP" });
      };

      source.addEventListener("popstate", popstateListener);

      return function () {
        source.removeEventListener("popstate", popstateListener);
        listeners = listeners.filter(function (fn) {
          return fn !== listener;
        });
      };
    },
    navigate: function navigate(to) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          state = _ref.state,
          _ref$replace = _ref.replace,
          replace = _ref$replace === undefined ? false : _ref$replace;

      if (typeof to === "number") {
        source.history.go(to);
      } else {
        state = _extends({}, state, { key: Date.now() + "" });
        // try...catch iOS Safari limits to 100 pushState calls
        try {
          if (transitioning || replace) {
            source.history.replaceState(state, null, to);
          } else {
            source.history.pushState(state, null, to);
          }
        } catch (e) {
          source.location[replace ? "replace" : "assign"](to);
        }
      }

      location = getLocation(source);
      transitioning = true;
      var transition = new Promise(function (res) {
        return resolveTransition = res;
      });
      listeners.forEach(function (listener) {
        return listener({ location: location, action: "PUSH" });
      });
      return transition;
    }
  };
};

////////////////////////////////////////////////////////////////////////////////
// Stores history entries in memory for testing or other platforms like Native
var createMemorySource = function createMemorySource() {
  var initialPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";

  var searchIndex = initialPath.indexOf("?");
  var initialLocation = {
    pathname: searchIndex > -1 ? initialPath.substr(0, searchIndex) : initialPath,
    search: searchIndex > -1 ? initialPath.substr(searchIndex) : ""
  };
  var index = 0;
  var stack = [initialLocation];
  var states = [null];

  return {
    get location() {
      return stack[index];
    },
    addEventListener: function addEventListener(name, fn) {},
    removeEventListener: function removeEventListener(name, fn) {},

    history: {
      get entries() {
        return stack;
      },
      get index() {
        return index;
      },
      get state() {
        return states[index];
      },
      pushState: function pushState(state, _, uri) {
        var _uri$split = uri.split("?"),
            pathname = _uri$split[0],
            _uri$split$ = _uri$split[1],
            search = _uri$split$ === undefined ? "" : _uri$split$;

        index++;
        stack.push({ pathname: pathname, search: search.length ? "?" + search : search });
        states.push(state);
      },
      replaceState: function replaceState(state, _, uri) {
        var _uri$split2 = uri.split("?"),
            pathname = _uri$split2[0],
            _uri$split2$ = _uri$split2[1],
            search = _uri$split2$ === undefined ? "" : _uri$split2$;

        stack[index] = { pathname: pathname, search: search };
        states[index] = state;
      },
      go: function go(to) {
        var newIndex = index + to;

        if (newIndex < 0 || newIndex > states.length - 1) {
          return;
        }

        index = newIndex;
      }
    }
  };
};

////////////////////////////////////////////////////////////////////////////////
// global history - uses window.history as the source if available, otherwise a
// memory history
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var getSource = function getSource() {
  return canUseDOM ? window : createMemorySource();
};

var globalHistory = createHistory(getSource());
var history_navigate = globalHistory.navigate;

////////////////////////////////////////////////////////////////////////////////


// CONCATENATED MODULE: ../node_modules/@reach/router/es/index.js
var es_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable jsx-a11y/anchor-has-content */








////////////////////////////////////////////////////////////////////////////////

var es_createNamedContext = function createNamedContext(name, defaultValue) {
  var Ctx = lib_default()(defaultValue);
  Ctx.displayName = name;
  return Ctx;
};

////////////////////////////////////////////////////////////////////////////////
// Location Context/Provider
var LocationContext = es_createNamedContext("Location");

// sets up a listener if there isn't one already so apps don't need to be
// wrapped in some top level provider
var es_Location = function Location(_ref) {
  var children = _ref.children;
  return external_React_default.a.createElement(
    LocationContext.Consumer,
    null,
    function (context) {
      return context ? children(context) : external_React_default.a.createElement(
        es_LocationProvider,
        null,
        children
      );
    }
  );
};

var es_LocationProvider = function (_React$Component) {
  _inherits(LocationProvider, _React$Component);

  function LocationProvider() {
    var _temp, _this, _ret;

    _classCallCheck(this, LocationProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      context: _this.getContext(),
      refs: { unlisten: null }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  LocationProvider.prototype.getContext = function getContext() {
    var _props$history = this.props.history,
        navigate = _props$history.navigate,
        location = _props$history.location;

    return { navigate: navigate, location: location };
  };

  LocationProvider.prototype.componentDidCatch = function componentDidCatch(error, info) {
    if (isRedirect(error)) {
      var _navigate = this.props.history.navigate;

      _navigate(error.uri, { replace: true });
    } else {
      throw error;
    }
  };

  LocationProvider.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevState.context.location !== this.state.context.location) {
      this.props.history._onTransitionComplete();
    }
  };

  LocationProvider.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var refs = this.state.refs,
        history = this.props.history;

    history._onTransitionComplete();
    refs.unlisten = history.listen(function () {
      Promise.resolve().then(function () {
        // TODO: replace rAF with react deferred update API when it's ready https://github.com/facebook/react/issues/13306
        requestAnimationFrame(function () {
          if (!_this2.unmounted) {
            _this2.setState(function () {
              return { context: _this2.getContext() };
            });
          }
        });
      });
    });
  };

  LocationProvider.prototype.componentWillUnmount = function componentWillUnmount() {
    var refs = this.state.refs;

    this.unmounted = true;
    refs.unlisten();
  };

  LocationProvider.prototype.render = function render() {
    var context = this.state.context,
        children = this.props.children;

    return external_React_default.a.createElement(
      LocationContext.Provider,
      { value: context },
      typeof children === "function" ? children(context) : children || null
    );
  };

  return LocationProvider;
}(external_React_default.a.Component);

////////////////////////////////////////////////////////////////////////////////


es_LocationProvider.defaultProps = {
  history: globalHistory
};
 false ? undefined : void 0;
var es_ServerLocation = function ServerLocation(_ref2) {
  var url = _ref2.url,
      children = _ref2.children;

  var searchIndex = url.indexOf("?");
  var searchExists = searchIndex > -1;
  var pathname = void 0;
  var search = "";
  var hash = "";

  if (searchExists) {
    pathname = url.substring(0, searchIndex);
    search = url.substring(searchIndex);
  } else {
    pathname = url;
  }

  return external_React_default.a.createElement(
    LocationContext.Provider,
    {
      value: {
        location: {
          pathname: pathname,
          search: search,
          hash: hash
        },
        navigate: function navigate() {
          throw new Error("You can't call navigate on the server.");
        }
      }
    },
    children
  );
};
////////////////////////////////////////////////////////////////////////////////
// Sets baseuri and basepath for nested routers and links
var BaseContext = es_createNamedContext("Base", { baseuri: "/", basepath: "/" });

////////////////////////////////////////////////////////////////////////////////
// The main event, welcome to the show everybody.
var es_Router = function Router(props) {
  return external_React_default.a.createElement(
    BaseContext.Consumer,
    null,
    function (baseContext) {
      return external_React_default.a.createElement(
        es_Location,
        null,
        function (locationContext) {
          return external_React_default.a.createElement(es_RouterImpl, es_extends({}, baseContext, locationContext, props));
        }
      );
    }
  );
};

var es_RouterImpl = function (_React$PureComponent) {
  _inherits(RouterImpl, _React$PureComponent);

  function RouterImpl() {
    _classCallCheck(this, RouterImpl);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  RouterImpl.prototype.render = function render() {
    var _props = this.props,
        location = _props.location,
        _navigate2 = _props.navigate,
        basepath = _props.basepath,
        primary = _props.primary,
        children = _props.children,
        baseuri = _props.baseuri,
        _props$component = _props.component,
        component = _props$component === undefined ? "div" : _props$component,
        domProps = _objectWithoutProperties(_props, ["location", "navigate", "basepath", "primary", "children", "baseuri", "component"]);

    var routes = external_React_default.a.Children.toArray(children).reduce(function (array, child) {
      var routes = es_createRoute(basepath)(child);
      return array.concat(routes);
    }, []);
    var pathname = location.pathname;


    var match = utils_pick(routes, pathname);

    if (match) {
      var params = match.params,
          uri = match.uri,
          route = match.route,
          element = match.route.value;

      // remove the /* from the end for child routes relative paths

      basepath = route.default ? basepath : route.path.replace(/\*$/, "");

      var props = es_extends({}, params, {
        uri: uri,
        location: location,
        navigate: function navigate(to, options) {
          return _navigate2(resolve(to, uri), options);
        }
      });

      var clone = external_React_default.a.cloneElement(element, props, element.props.children ? external_React_default.a.createElement(
        es_Router,
        { location: location, primary: primary },
        element.props.children
      ) : undefined);

      // using 'div' for < 16.3 support
      var FocusWrapper = primary ? es_FocusHandler : component;
      // don't pass any props to 'div'
      var wrapperProps = primary ? es_extends({ uri: uri, location: location, component: component }, domProps) : domProps;

      return external_React_default.a.createElement(
        BaseContext.Provider,
        { value: { baseuri: uri, basepath: basepath } },
        external_React_default.a.createElement(
          FocusWrapper,
          wrapperProps,
          clone
        )
      );
    } else {
      // Not sure if we want this, would require index routes at every level
      // warning(
      //   false,
      //   `<Router basepath="${basepath}">\n\nNothing matched:\n\t${
      //     location.pathname
      //   }\n\nPaths checked: \n\t${routes
      //     .map(route => route.path)
      //     .join(
      //       "\n\t"
      //     )}\n\nTo get rid of this warning, add a default NotFound component as child of Router:
      //   \n\tlet NotFound = () => <div>Not Found!</div>
      //   \n\t<Router>\n\t  <NotFound default/>\n\t  {/* ... */}\n\t</Router>`
      // );
      return null;
    }
  };

  return RouterImpl;
}(external_React_default.a.PureComponent);

es_RouterImpl.defaultProps = {
  primary: true
};


var FocusContext = es_createNamedContext("Focus");

var es_FocusHandler = function FocusHandler(_ref3) {
  var uri = _ref3.uri,
      location = _ref3.location,
      component = _ref3.component,
      domProps = _objectWithoutProperties(_ref3, ["uri", "location", "component"]);

  return external_React_default.a.createElement(
    FocusContext.Consumer,
    null,
    function (requestFocus) {
      return external_React_default.a.createElement(es_FocusHandlerImpl, es_extends({}, domProps, {
        component: component,
        requestFocus: requestFocus,
        uri: uri,
        location: location
      }));
    }
  );
};

// don't focus on initial render
var initialRender = true;
var focusHandlerCount = 0;

var es_FocusHandlerImpl = function (_React$Component2) {
  _inherits(FocusHandlerImpl, _React$Component2);

  function FocusHandlerImpl() {
    var _temp2, _this4, _ret2;

    _classCallCheck(this, FocusHandlerImpl);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this4 = _possibleConstructorReturn(this, _React$Component2.call.apply(_React$Component2, [this].concat(args))), _this4), _this4.state = {}, _this4.requestFocus = function (node) {
      if (!_this4.state.shouldFocus && node) {
        node.focus();
      }
    }, _temp2), _possibleConstructorReturn(_this4, _ret2);
  }

  FocusHandlerImpl.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var initial = prevState.uri == null;
    if (initial) {
      return es_extends({
        shouldFocus: true
      }, nextProps);
    } else {
      var myURIChanged = nextProps.uri !== prevState.uri;
      var navigatedUpToMe = prevState.location.pathname !== nextProps.location.pathname && nextProps.location.pathname === nextProps.uri;
      return es_extends({
        shouldFocus: myURIChanged || navigatedUpToMe
      }, nextProps);
    }
  };

  FocusHandlerImpl.prototype.componentDidMount = function componentDidMount() {
    focusHandlerCount++;
    this.focus();
  };

  FocusHandlerImpl.prototype.componentWillUnmount = function componentWillUnmount() {
    focusHandlerCount--;
    if (focusHandlerCount === 0) {
      initialRender = true;
    }
  };

  FocusHandlerImpl.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevProps.location !== this.props.location && this.state.shouldFocus) {
      this.focus();
    }
  };

  FocusHandlerImpl.prototype.focus = function focus() {
    if (false) {}

    var requestFocus = this.props.requestFocus;


    if (requestFocus) {
      requestFocus(this.node);
    } else {
      if (initialRender) {
        initialRender = false;
      } else if (this.node) {
        // React polyfills [autofocus] and it fires earlier than cDM,
        // so we were stealing focus away, this line prevents that.
        if (!this.node.contains(document.activeElement)) {
          this.node.focus();
        }
      }
    }
  };

  FocusHandlerImpl.prototype.render = function render() {
    var _this5 = this;

    var _props2 = this.props,
        children = _props2.children,
        style = _props2.style,
        requestFocus = _props2.requestFocus,
        _props2$component = _props2.component,
        Comp = _props2$component === undefined ? "div" : _props2$component,
        uri = _props2.uri,
        location = _props2.location,
        domProps = _objectWithoutProperties(_props2, ["children", "style", "requestFocus", "component", "uri", "location"]);

    return external_React_default.a.createElement(
      Comp,
      es_extends({
        style: es_extends({ outline: "none" }, style),
        tabIndex: "-1",
        ref: function ref(n) {
          return _this5.node = n;
        }
      }, domProps),
      external_React_default.a.createElement(
        FocusContext.Provider,
        { value: this.requestFocus },
        this.props.children
      )
    );
  };

  return FocusHandlerImpl;
}(external_React_default.a.Component);

polyfill(es_FocusHandlerImpl);

var k = function k() {};

////////////////////////////////////////////////////////////////////////////////
var forwardRef = external_React_default.a.forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = function forwardRef(C) {
    return C;
  };
}

var Link = forwardRef(function (_ref4, ref) {
  var innerRef = _ref4.innerRef,
      props = _objectWithoutProperties(_ref4, ["innerRef"]);

  return external_React_default.a.createElement(
    BaseContext.Consumer,
    null,
    function (_ref5) {
      var basepath = _ref5.basepath,
          baseuri = _ref5.baseuri;
      return external_React_default.a.createElement(
        es_Location,
        null,
        function (_ref6) {
          var location = _ref6.location,
              navigate = _ref6.navigate;

          var to = props.to,
              state = props.state,
              replace = props.replace,
              _props$getProps = props.getProps,
              getProps = _props$getProps === undefined ? k : _props$getProps,
              anchorProps = _objectWithoutProperties(props, ["to", "state", "replace", "getProps"]);

          var href = resolve(to, baseuri);
          var encodedHref = encodeURI(href);
          var isCurrent = location.pathname === encodedHref;
          var isPartiallyCurrent = startsWith(location.pathname, encodedHref);

          return external_React_default.a.createElement("a", es_extends({
            ref: ref || innerRef,
            "aria-current": isCurrent ? "page" : undefined
          }, anchorProps, getProps({ isCurrent: isCurrent, isPartiallyCurrent: isPartiallyCurrent, href: href, location: location }), {
            href: href,
            onClick: function onClick(event) {
              if (anchorProps.onClick) anchorProps.onClick(event);
              if (shouldNavigate(event)) {
                event.preventDefault();
                var shouldReplace = replace;
                if (typeof replace !== "boolean" && isCurrent) {
                  var _location$state = es_extends({}, location.state),
                      key = _location$state.key,
                      restState = _objectWithoutProperties(_location$state, ["key"]);

                  shouldReplace = shallowCompare(es_extends({}, state), restState);
                }
                navigate(href, {
                  state: state,
                  replace: shouldReplace
                });
              }
            }
          }));
        }
      );
    }
  );
});

Link.displayName = "Link";

 false ? undefined : void 0;

////////////////////////////////////////////////////////////////////////////////
function RedirectRequest(uri) {
  this.uri = uri;
}

var isRedirect = function isRedirect(o) {
  return o instanceof RedirectRequest;
};

var redirectTo = function redirectTo(to) {
  throw new RedirectRequest(to);
};

var es_RedirectImpl = function (_React$Component3) {
  _inherits(RedirectImpl, _React$Component3);

  function RedirectImpl() {
    _classCallCheck(this, RedirectImpl);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  }

  // Support React < 16 with this hook
  RedirectImpl.prototype.componentDidMount = function componentDidMount() {
    var _props3 = this.props,
        navigate = _props3.navigate,
        to = _props3.to,
        from = _props3.from,
        _props3$replace = _props3.replace,
        replace = _props3$replace === undefined ? true : _props3$replace,
        state = _props3.state,
        noThrow = _props3.noThrow,
        baseuri = _props3.baseuri,
        props = _objectWithoutProperties(_props3, ["navigate", "to", "from", "replace", "state", "noThrow", "baseuri"]);

    Promise.resolve().then(function () {
      var resolvedTo = resolve(to, baseuri);
      navigate(insertParams(resolvedTo, props), { replace: replace, state: state });
    });
  };

  RedirectImpl.prototype.render = function render() {
    var _props4 = this.props,
        navigate = _props4.navigate,
        to = _props4.to,
        from = _props4.from,
        replace = _props4.replace,
        state = _props4.state,
        noThrow = _props4.noThrow,
        baseuri = _props4.baseuri,
        props = _objectWithoutProperties(_props4, ["navigate", "to", "from", "replace", "state", "noThrow", "baseuri"]);

    var resolvedTo = resolve(to, baseuri);
    if (!noThrow) redirectTo(insertParams(resolvedTo, props));
    return null;
  };

  return RedirectImpl;
}(external_React_default.a.Component);

var es_Redirect = function Redirect(props) {
  return external_React_default.a.createElement(
    BaseContext.Consumer,
    null,
    function (_ref7) {
      var baseuri = _ref7.baseuri;
      return external_React_default.a.createElement(
        es_Location,
        null,
        function (locationContext) {
          return external_React_default.a.createElement(es_RedirectImpl, es_extends({}, locationContext, { baseuri: baseuri }, props));
        }
      );
    }
  );
};

 false ? undefined : void 0;

////////////////////////////////////////////////////////////////////////////////
var es_Match = function Match(_ref8) {
  var path = _ref8.path,
      children = _ref8.children;
  return external_React_default.a.createElement(
    BaseContext.Consumer,
    null,
    function (_ref9) {
      var baseuri = _ref9.baseuri;
      return external_React_default.a.createElement(
        es_Location,
        null,
        function (_ref10) {
          var navigate = _ref10.navigate,
              location = _ref10.location;

          var resolvedPath = resolve(path, baseuri);
          var result = utils_match(resolvedPath, location.pathname);
          return children({
            navigate: navigate,
            location: location,
            match: result ? es_extends({}, result.params, {
              uri: result.uri,
              path: path
            }) : null
          });
        }
      );
    }
  );
};

////////////////////////////////////////////////////////////////////////////////
// Hooks

var es_useLocation = function useLocation() {
  var context = Object(external_React_["useContext"])(LocationContext);

  if (!context) {
    throw new Error("useLocation hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  return context.location;
};

var es_useNavigate = function useNavigate() {
  var context = Object(external_React_["useContext"])(LocationContext);

  if (!context) {
    throw new Error("useNavigate hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  return context.navigate;
};

var es_useParams = function useParams() {
  var context = Object(external_React_["useContext"])(BaseContext);

  if (!context) {
    throw new Error("useParams hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  var location = es_useLocation();

  var results = utils_match(context.basepath, location.pathname);

  return results ? results.params : null;
};

var es_useMatch = function useMatch(path) {
  if (!path) {
    throw new Error("useMatch(path: string) requires an argument of a string to match against");
  }
  var context = Object(external_React_["useContext"])(BaseContext);

  if (!context) {
    throw new Error("useMatch hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  var location = es_useLocation();

  var resolvedPath = resolve(path, context.baseuri);
  var result = utils_match(resolvedPath, location.pathname);
  return result ? es_extends({}, result.params, {
    uri: result.uri,
    path: path
  }) : null;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var stripSlashes = function stripSlashes(str) {
  return str.replace(/(^\/+|\/+$)/g, "");
};

var es_createRoute = function createRoute(basepath) {
  return function (element) {
    if (!element) {
      return null;
    }

    if (element.type === external_React_default.a.Fragment && element.props.children) {
      return external_React_default.a.Children.map(element.props.children, createRoute(basepath));
    }
    !(element.props.path || element.props.default || element.type === es_Redirect) ?  false ? undefined : browser_default()(false) : void 0;

    !!(element.type === es_Redirect && (!element.props.from || !element.props.to)) ?  false ? undefined : browser_default()(false) : void 0;

    !!(element.type === es_Redirect && !validateRedirect(element.props.from, element.props.to)) ?  false ? undefined : browser_default()(false) : void 0;

    if (element.props.default) {
      return { value: element, default: true };
    }

    var elementPath = element.type === es_Redirect ? element.props.from : element.props.path;

    var path = elementPath === "/" ? basepath : stripSlashes(basepath) + "/" + stripSlashes(elementPath);

    return {
      value: element,
      default: element.props.default,
      path: element.props.children ? stripSlashes(path) + "/*" : path
    };
  };
};

var shouldNavigate = function shouldNavigate(event) {
  return !event.defaultPrevented && event.button === 0 && !(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

////////////////////////////////////////////////////////////////////////


/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map
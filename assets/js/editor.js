/*! pro-elements - v3.0.5 - 23-09-2020 */
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
/******/ 	return __webpack_require__(__webpack_require__.s = 349);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(113);

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

var _Object$create = __webpack_require__(129);

var setPrototypeOf = __webpack_require__(132);

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

var getPrototypeOf = __webpack_require__(25);

var isNativeReflectConstruct = __webpack_require__(142);

var possibleConstructorReturn = __webpack_require__(143);

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
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var core = __webpack_require__(2);
var ctx = __webpack_require__(32);
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
/* 8 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(55)('wks');
var uid = __webpack_require__(38);
var Symbol = __webpack_require__(8).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(69)('wks');
var uid = __webpack_require__(68);
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
var IObject = __webpack_require__(90);
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
var $find = __webpack_require__(159)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(106)(KEY);


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
var createDesc = __webpack_require__(28);
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
module.exports = !__webpack_require__(30)(function () {
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
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(139);

var _Object$setPrototypeOf = __webpack_require__(82);

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(46);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 28 */
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(39);
var createDesc = __webpack_require__(88);
module.exports = __webpack_require__(22) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(17);
var hide = __webpack_require__(29);
var has = __webpack_require__(60);
var SRC = __webpack_require__(68)('src');
var $toString = __webpack_require__(144);
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(44).inspectSource = function (it) {
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(33);
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
/* 33 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = true;


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

var pIE = __webpack_require__(40);
var createDesc = __webpack_require__(28);
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
var dPs = __webpack_require__(94);
var enumBugKeys = __webpack_require__(56);
var IE_PROTO = __webpack_require__(54)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(73)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(104).appendChild(iframe);
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
var IE8_DOM_DEFINE = __webpack_require__(96);
var toPrimitive = __webpack_require__(98);
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

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(15).f;
var has = __webpack_require__(16);
var TAG = __webpack_require__(10)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 45 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


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

module.exports = __webpack_require__(175);

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
/* 50 */,
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(17);
var core = __webpack_require__(44);
var hide = __webpack_require__(29);
var redefine = __webpack_require__(31);
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
var isObject = __webpack_require__(9);
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
var global = __webpack_require__(8);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(34) ? 'pure' : 'global',
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

exports.f = __webpack_require__(10);


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var core = __webpack_require__(2);
var LIBRARY = __webpack_require__(34);
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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(103);

var _Reflect$get = __webpack_require__(184);

var superPropBase = __webpack_require__(187);

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && _Reflect$get) {
    module.exports = _get = _Reflect$get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;

      var desc = _Object$getOwnPropertyDescriptor(base, property);

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
/* 62 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 63 */,
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
/* 65 */,
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(16);
var toObject = __webpack_require__(27);
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
/* 67 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 68 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(44);
var global = __webpack_require__(17);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(99) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(7);
var core = __webpack_require__(2);
var fails = __webpack_require__(20);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(117)(true);

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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(80);
var hiddenKeys = __webpack_require__(56).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
var document = __webpack_require__(8).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(53);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(121);
var global = __webpack_require__(8);
var hide = __webpack_require__(21);
var Iterators = __webpack_require__(26);
var TO_STRING_TAG = __webpack_require__(10)('toStringTag');

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
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(100);
var defined = __webpack_require__(43);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(14) && !__webpack_require__(20)(function () {
  return Object.defineProperty(__webpack_require__(73)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(34);
var $export = __webpack_require__(7);
var redefine = __webpack_require__(74);
var hide = __webpack_require__(21);
var Iterators = __webpack_require__(26);
var $iterCreate = __webpack_require__(118);
var setToStringTag = __webpack_require__(41);
var getPrototypeOf = __webpack_require__(66);
var ITERATOR = __webpack_require__(10)('iterator');
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
var arrayIndexOf = __webpack_require__(119)(false);
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
var isObject = __webpack_require__(9);
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

module.exports = __webpack_require__(133);

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(136);

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
var cof = __webpack_require__(42);
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

var _Symbol$iterator = __webpack_require__(115);

var _Symbol = __webpack_require__(91);

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
var cof = __webpack_require__(45);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 88 */
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
/* 89 */
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
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(45);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(124);

/***/ }),
/* 92 */
/***/ (function(module, exports) {



/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(43);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 94 */
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
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(8);
var has = __webpack_require__(16);
var DESCRIPTORS = __webpack_require__(14);
var $export = __webpack_require__(7);
var redefine = __webpack_require__(74);
var META = __webpack_require__(81).KEY;
var $fails = __webpack_require__(20);
var shared = __webpack_require__(55);
var setToStringTag = __webpack_require__(41);
var uid = __webpack_require__(38);
var wks = __webpack_require__(10);
var wksExt = __webpack_require__(57);
var wksDefine = __webpack_require__(58);
var enumKeys = __webpack_require__(125);
var isArray = __webpack_require__(87);
var anObject = __webpack_require__(12);
var isObject = __webpack_require__(9);
var toObject = __webpack_require__(27);
var toIObject = __webpack_require__(18);
var toPrimitive = __webpack_require__(52);
var createDesc = __webpack_require__(28);
var _create = __webpack_require__(37);
var gOPNExt = __webpack_require__(126);
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
  __webpack_require__(72).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(40).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(34)) {
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
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(22) && !__webpack_require__(30)(function () {
  return Object.defineProperty(__webpack_require__(97)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(24);
var document = __webpack_require__(17).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 98 */
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
/* 99 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(42);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(23);
var toObject = __webpack_require__(93);
var toLength = __webpack_require__(48);
var toInteger = __webpack_require__(49);
var advanceStringIndex = __webpack_require__(112);
var regExpExec = __webpack_require__(107);
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(108)('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
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
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(89);

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
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(154);

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(8).document;
module.exports = document && document.documentElement;


/***/ }),
/* 105 */
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
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(13)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(29)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 107 */
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
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(183);
var redefine = __webpack_require__(31);
var hide = __webpack_require__(29);
var fails = __webpack_require__(30);
var defined = __webpack_require__(43);
var wks = __webpack_require__(13);
var regexpExec = __webpack_require__(102);

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
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(45);
var TAG = __webpack_require__(10)('toStringTag');
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
/* 110 */
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
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(85);
var test = {};
test[__webpack_require__(13)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(31)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(164)(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(114);
var $Object = __webpack_require__(2).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(7);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(14), 'Object', { defineProperty: __webpack_require__(15).f });


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(116);

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(71);
__webpack_require__(76);
module.exports = __webpack_require__(57).f('iterator');


/***/ }),
/* 117 */
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
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(37);
var descriptor = __webpack_require__(28);
var setToStringTag = __webpack_require__(41);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(21)(IteratorPrototype, __webpack_require__(10)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(18);
var toLength = __webpack_require__(75);
var toAbsoluteIndex = __webpack_require__(120);
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
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(53);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(122);
var step = __webpack_require__(123);
var Iterators = __webpack_require__(26);
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
/* 122 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(95);
__webpack_require__(92);
__webpack_require__(127);
__webpack_require__(128);
module.exports = __webpack_require__(2).Symbol;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(35);
var gOPS = __webpack_require__(62);
var pIE = __webpack_require__(40);
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
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(18);
var gOPN = __webpack_require__(72).f;
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
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58)('asyncIterator');


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58)('observable');


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(130);

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(131);
var $Object = __webpack_require__(2).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(7);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(37) });


/***/ }),
/* 132 */
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
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(134);
module.exports = __webpack_require__(2).Object.setPrototypeOf;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(7);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(135).set });


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(9);
var anObject = __webpack_require__(12);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(32)(Function.call, __webpack_require__(36).f(Object.prototype, '__proto__').set, 2);
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
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(137);
module.exports = __webpack_require__(2).Reflect.construct;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(7);
var create = __webpack_require__(37);
var aFunction = __webpack_require__(33);
var anObject = __webpack_require__(12);
var isObject = __webpack_require__(9);
var fails = __webpack_require__(20);
var bind = __webpack_require__(138);
var rConstruct = (__webpack_require__(8).Reflect || {}).construct;

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
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(33);
var isObject = __webpack_require__(9);
var invoke = __webpack_require__(105);
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
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(140);

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(141);
module.exports = __webpack_require__(2).Object.getPrototypeOf;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(27);
var $getPrototypeOf = __webpack_require__(66);

__webpack_require__(70)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 142 */
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
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(86);

var assertThisInitialized = __webpack_require__(67);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(69)('native-function-to-string', Function.toString);


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(24);
var cof = __webpack_require__(42);
var MATCH = __webpack_require__(13)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(69)('keys');
var uid = __webpack_require__(68);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(103);

var _Object$defineProperty = __webpack_require__(0);

var _typeof = __webpack_require__(86);

var _WeakMap = __webpack_require__(242);

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
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(32);
var call = __webpack_require__(156);
var isArrayIter = __webpack_require__(157);
var anObject = __webpack_require__(12);
var toLength = __webpack_require__(75);
var getIterFn = __webpack_require__(149);
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
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(109);
var ITERATOR = __webpack_require__(10)('iterator');
var Iterators = __webpack_require__(26);
module.exports = __webpack_require__(2).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 150 */,
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(77);
var toLength = __webpack_require__(48);
var toAbsoluteIndex = __webpack_require__(163);
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
/* 152 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 153 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(155);
var $Object = __webpack_require__(2).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(18);
var $getOwnPropertyDescriptor = __webpack_require__(36).f;

__webpack_require__(70)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 156 */
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
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(26);
var ITERATOR = __webpack_require__(10)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 158 */,
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(64);
var IObject = __webpack_require__(100);
var toObject = __webpack_require__(93);
var toLength = __webpack_require__(48);
var asc = __webpack_require__(160);
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
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(161);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(24);
var isArray = __webpack_require__(162);
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
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(42);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(49);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(49);
var defined = __webpack_require__(43);
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
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(21);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 166 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(60);
var toIObject = __webpack_require__(77);
var arrayIndexOf = __webpack_require__(151)(false);
var IE_PROTO = __webpack_require__(146)('IE_PROTO');

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
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(23);
var aFunction = __webpack_require__(84);
var SPECIES = __webpack_require__(13)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(23);
var toLength = __webpack_require__(48);
var advanceStringIndex = __webpack_require__(112);
var regExpExec = __webpack_require__(107);

// @@match logic
__webpack_require__(108)('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(32);
var IObject = __webpack_require__(90);
var toObject = __webpack_require__(27);
var toLength = __webpack_require__(75);
var asc = __webpack_require__(245);
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
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(176);
module.exports = __webpack_require__(2).Object.keys;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(27);
var $keys = __webpack_require__(35);

__webpack_require__(70)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */
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

var _templates = __webpack_require__(264);

var _conditionsConfig = __webpack_require__(265);

var _templatesConditions = __webpack_require__(266);

var _templatesConditionsConflicts = __webpack_require__(267);

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(227);

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(102);
__webpack_require__(51)({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(185);

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(186);
module.exports = __webpack_require__(2).Reflect.get;


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(36);
var getPrototypeOf = __webpack_require__(66);
var has = __webpack_require__(16);
var $export = __webpack_require__(7);
var isObject = __webpack_require__(9);
var anObject = __webpack_require__(12);

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(25);

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(17);
var dP = __webpack_require__(39);
var DESCRIPTORS = __webpack_require__(22);
var SPECIES = __webpack_require__(13)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(39).f;
var has = __webpack_require__(60);
var TAG = __webpack_require__(13)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(17);
var inheritIfRequired = __webpack_require__(228);
var dP = __webpack_require__(39).f;
var gOPN = __webpack_require__(232).f;
var isRegExp = __webpack_require__(145);
var $flags = __webpack_require__(89);
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(22) && (!CORRECT_NEW || __webpack_require__(30)(function () {
  re2[__webpack_require__(13)('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(31)(global, 'RegExp', $RegExp);
}

__webpack_require__(188)('RegExp');


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _stringify = _interopRequireDefault(__webpack_require__(182));

var ElementEditorModule = __webpack_require__(411);

module.exports = ElementEditorModule.extend({
  __construct: function __construct() {
    this.cache = {};

    ElementEditorModule.prototype.__construct.apply(this, arguments);
  },
  getName: function getName() {
    return '';
  },
  getCacheKey: function getCacheKey(args) {
    return (0, _stringify.default)({
      service: this.getName(),
      data: args
    });
  },
  fetchCache: function fetchCache(type, cacheKey, requestArgs) {
    var _this = this;

    return elementorPro.ajax.addRequest('forms_panel_action_data', {
      unique_id: 'integrations_' + this.getName(),
      data: requestArgs,
      success: function success(data) {
        _this.cache[type] = _.extend({}, _this.cache[type]);
        _this.cache[type][cacheKey] = data[type];
      }
    });
  },
  updateOptions: function updateOptions(name, options) {
    var controlView = this.getEditorControlView(name);

    if (controlView) {
      this.getEditorControlModel(name).set('options', options);
      controlView.render();
    }
  },
  onInit: function onInit() {
    this.addSectionListener('section_' + this.getName(), this.onSectionActive);
  },
  onSectionActive: function onSectionActive() {
    this.onApiUpdate();
  },
  onApiUpdate: function onApiUpdate() {}
});

/***/ }),
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(2);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(24);
var setPrototypeOf = __webpack_require__(229).set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(24);
var anObject = __webpack_require__(23);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(64)(Function.call, __webpack_require__(230).f(Object.prototype, '__proto__').set, 2);
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
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(231);
var createDesc = __webpack_require__(88);
var toIObject = __webpack_require__(77);
var toPrimitive = __webpack_require__(98);
var has = __webpack_require__(60);
var IE8_DOM_DEFINE = __webpack_require__(96);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(22) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 231 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(170);
var hiddenKeys = __webpack_require__(152).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__(145);
var anObject = __webpack_require__(23);
var speciesConstructor = __webpack_require__(171);
var advanceStringIndex = __webpack_require__(112);
var toLength = __webpack_require__(48);
var callRegExpExec = __webpack_require__(107);
var regexpExec = __webpack_require__(102);
var fails = __webpack_require__(30);
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(108)('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
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
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(106);
var step = __webpack_require__(276);
var Iterators = __webpack_require__(153);
var toIObject = __webpack_require__(77);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(240)(Array, 'Array', function (iterated, kind) {
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
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(170);
var enumBugKeys = __webpack_require__(152);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(17).document;
module.exports = document && document.documentElement;


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(14);
var getKeys = __webpack_require__(35);
var gOPS = __webpack_require__(62);
var pIE = __webpack_require__(40);
var toObject = __webpack_require__(27);
var IObject = __webpack_require__(90);
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
/* 238 */,
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(147);

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

var dataCommands = _interopRequireWildcard(__webpack_require__(181));

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
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(99);
var $export = __webpack_require__(51);
var redefine = __webpack_require__(31);
var hide = __webpack_require__(29);
var Iterators = __webpack_require__(153);
var $iterCreate = __webpack_require__(277);
var setToStringTag = __webpack_require__(189);
var getPrototypeOf = __webpack_require__(280);
var ITERATOR = __webpack_require__(13)('iterator');
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
/* 241 */,
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(243);

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(92);
__webpack_require__(76);
__webpack_require__(244);
__webpack_require__(249);
__webpack_require__(251);
module.exports = __webpack_require__(2).WeakMap;


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(8);
var each = __webpack_require__(173)(0);
var redefine = __webpack_require__(74);
var meta = __webpack_require__(81);
var assign = __webpack_require__(237);
var weak = __webpack_require__(247);
var isObject = __webpack_require__(9);
var validate = __webpack_require__(174);
var NATIVE_WEAK_MAP = __webpack_require__(174);
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
var $WeakMap = module.exports = __webpack_require__(248)(WEAK_MAP, wrapper, methods, weak, true, true);

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
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(246);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
var isArray = __webpack_require__(87);
var SPECIES = __webpack_require__(10)('species');

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
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(165);
var getWeak = __webpack_require__(81).getWeak;
var anObject = __webpack_require__(12);
var isObject = __webpack_require__(9);
var anInstance = __webpack_require__(166);
var forOf = __webpack_require__(148);
var createArrayMethod = __webpack_require__(173);
var $has = __webpack_require__(16);
var validate = __webpack_require__(174);
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
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(8);
var $export = __webpack_require__(7);
var meta = __webpack_require__(81);
var fails = __webpack_require__(20);
var hide = __webpack_require__(21);
var redefineAll = __webpack_require__(165);
var forOf = __webpack_require__(148);
var anInstance = __webpack_require__(166);
var isObject = __webpack_require__(9);
var setToStringTag = __webpack_require__(41);
var dP = __webpack_require__(15).f;
var each = __webpack_require__(173)(0);
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
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
__webpack_require__(250)('WeakMap');


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(7);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
__webpack_require__(252)('WeakMap');


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(7);
var aFunction = __webpack_require__(33);
var ctx = __webpack_require__(32);
var forOf = __webpack_require__(148);

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
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */
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
/* 265 */
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
/* 266 */
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
/* 267 */
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
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(234);
var getKeys = __webpack_require__(235);
var redefine = __webpack_require__(31);
var global = __webpack_require__(17);
var hide = __webpack_require__(29);
var Iterators = __webpack_require__(153);
var wks = __webpack_require__(13);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 276 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(278);
var descriptor = __webpack_require__(88);
var setToStringTag = __webpack_require__(189);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(29)(IteratorPrototype, __webpack_require__(13)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(23);
var dPs = __webpack_require__(279);
var enumBugKeys = __webpack_require__(152);
var IE_PROTO = __webpack_require__(146)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(97)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(236).appendChild(iframe);
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
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(39);
var anObject = __webpack_require__(23);
var getKeys = __webpack_require__(235);

module.exports = __webpack_require__(22) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(60);
var toObject = __webpack_require__(93);
var IE_PROTO = __webpack_require__(146)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _get3 = _interopRequireDefault(__webpack_require__(61));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(25));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var BaseHookPopupAfter = /*#__PURE__*/function (_$e$modules$hookUI$Af) {
  (0, _inherits2.default)(BaseHookPopupAfter, _$e$modules$hookUI$Af);

  var _super = (0, _createSuper2.default)(BaseHookPopupAfter);

  function BaseHookPopupAfter() {
    (0, _classCallCheck2.default)(this, BaseHookPopupAfter);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(BaseHookPopupAfter, [{
    key: "run",
    value: function run() {
      var _get2;

      /**
       * @type {PopupComponent}
       */
      this.component = this.component || $e.components.get('document/popup');

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (_get2 = (0, _get3.default)((0, _getPrototypeOf2.default)(BaseHookPopupAfter.prototype), "run", this)).call.apply(_get2, [this].concat(args));
    }
  }]);
  return BaseHookPopupAfter;
}($e.modules.hookUI.After);

exports.default = BaseHookPopupAfter;

/***/ }),
/* 289 */,
/* 290 */,
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
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _editor = _interopRequireDefault(__webpack_require__(350));

var _editor2 = _interopRequireDefault(__webpack_require__(351));

var _module = _interopRequireDefault(__webpack_require__(352));

var _module2 = _interopRequireDefault(__webpack_require__(365));

var _module3 = _interopRequireDefault(__webpack_require__(378));

var _module4 = _interopRequireDefault(__webpack_require__(399));

var _module5 = _interopRequireDefault(__webpack_require__(425));

var _editor3 = _interopRequireDefault(__webpack_require__(429));

var ElementorPro = Marionette.Application.extend({
  config: {},
  modules: {},
  initModules: function initModules() {
    var QueryControl = __webpack_require__(430),
        Library = __webpack_require__(432),
        FlipBox = __webpack_require__(434),
        ShareButtons = __webpack_require__(435),
        AssetsManager = __webpack_require__(436),
        ThemeElements = __webpack_require__(438);

    this.modules = {
      queryControl: new QueryControl(),
      forms: new _module4.default(),
      library: new Library(),
      customCSS: new _editor.default(),
      globalWidget: new _module2.default(),
      flipBox: new FlipBox(),
      motionFX: new _editor2.default(),
      shareButtons: new ShareButtons(),
      assetsManager: new AssetsManager(),
      themeElements: new ThemeElements(),
      themeBuilder: new _module3.default(),
      siteEditor: new _editor3.default(),
      screenshots: new _module5.default(),
      // Popup is depended on Theme Builder.
      popup: new _module.default()
    };
  },
  ajax: {
    prepareArgs: function prepareArgs(args) {
      args[0] = 'pro_' + args[0];
      return args;
    },
    send: function send() {
      return elementorCommon.ajax.send.apply(elementorCommon.ajax, this.prepareArgs(arguments));
    },
    addRequest: function addRequest() {
      return elementorCommon.ajax.addRequest.apply(elementorCommon.ajax, this.prepareArgs(arguments));
    }
  },
  translate: function translate(stringKey, templateArgs) {
    return elementorCommon.translate(stringKey, null, templateArgs, this.config.i18n);
  },
  onStart: function onStart() {
    var _this = this;

    this.config = elementorProEditorConfig;
    this.initModules();
    jQuery(window).on('elementor:init', function () {
      return _this.onElementorInit();
    }).on('elementor/connect/success/editor-pro-activate', this.onActivateSuccess);
  },
  onElementorInit: function onElementorInit() {
    var _this2 = this;

    elementor.on('preview:loaded', function () {
      return _this2.onElementorPreviewLoaded();
    });
    elementorPro.libraryRemoveGetProButtons();
    elementorCommon.debug.addURLToWatch('elementor-pro/assets');
  },
  onElementorPreviewLoaded: function onElementorPreviewLoaded() {
    elementor.$preview[0].contentWindow.elementorPro = this;
  },
  libraryRemoveGetProButtons: function libraryRemoveGetProButtons() {
    elementor.hooks.addFilter('elementor/editor/template-library/template/action-button', function (viewID, templateData) {
      return templateData.isPro && !elementorPro.config.isActive ? '#tmpl-elementor-pro-template-library-activate-license-button' : '#tmpl-elementor-template-library-insert-button';
    });
  },
  onActivateSuccess: function onActivateSuccess() {
    // Hide notice.
    elementor.noticeBar.onCloseClick(); // Mark site connect for insert templates connect screen.

    elementor.config.library_connect.is_connected = true; // Mark pro is active - for `this.libraryRemoveGetProButtons`.

    elementorPro.config.isActive = true;
    elementor.notifications.showToast({
      message: elementor.translate('connected_successfully')
    });
  }
});
window.elementorPro = new ElementorPro();
elementorPro.start();

/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(101);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _default = /*#__PURE__*/function (_elementorModules$edi) {
  (0, _inherits2.default)(_default, _elementorModules$edi);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(_default, [{
    key: "addCustomCss",
    value: function addCustomCss(css, context) {
      if (!context) {
        return;
      }

      var model = context.model,
          customCSS = model.get('settings').get('custom_css');
      var selector = '.elementor-element.elementor-element-' + model.get('id');

      if ('document' === model.get('elType')) {
        selector = elementor.config.document.settings.cssWrapperSelector;
      }

      if (customCSS) {
        css += customCSS.replace(/selector/g, selector);
      }

      return css;
    }
  }, {
    key: "onElementorInit",
    value: function onElementorInit() {
      elementor.hooks.addFilter('editor/style/styleText', this.addCustomCss);
      elementor.on('navigator:init', this.onNavigatorInit.bind(this));
    }
  }, {
    key: "onNavigatorInit",
    value: function onNavigatorInit() {
      elementor.navigator.indicators.customCSS = {
        icon: 'code-bold',
        settingKeys: ['custom_css'],
        title: elementorPro.translate('custom_css'),
        section: 'section_custom_css'
      };
    }
  }]);
  return _default;
}(elementorModules.editor.utils.Module);

exports.default = _default;

/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var _default = /*#__PURE__*/function (_elementorModules$edi) {
  (0, _inherits2.default)(_default, _elementorModules$edi);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(_default, [{
    key: "onElementorInit",
    value: function onElementorInit() {
      elementor.on('navigator:init', this.onNavigatorInit.bind(this));
    }
  }, {
    key: "onNavigatorInit",
    value: function onNavigatorInit() {
      elementor.navigator.indicators.motionFX = {
        icon: 'flash',
        title: elementorPro.translate('motion_effects'),
        settingKeys: ['motion_fx_motion_fx_scrolling', 'motion_fx_motion_fx_mouse', 'background_motion_fx_motion_fx_scrolling', 'background_motion_fx_motion_fx_mouse'],
        section: 'section_effects'
      };
    }
  }]);
  return _default;
}(elementorModules.editor.utils.Module);

exports.default = _default;

/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _component = _interopRequireDefault(__webpack_require__(353));

var PopupModule = /*#__PURE__*/function (_elementorModules$edi) {
  (0, _inherits2.default)(PopupModule, _elementorModules$edi);

  var _super = (0, _createSuper2.default)(PopupModule);

  function PopupModule() {
    var _this;

    (0, _classCallCheck2.default)(this, PopupModule);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.displaySettingsTypes = {
      triggers: {
        icon: 'eicon-click'
      },
      timing: {
        icon: 'eicon-cog'
      }
    };
    return _this;
  }

  (0, _createClass2.default)(PopupModule, [{
    key: "onElementorLoaded",
    value: function onElementorLoaded() {
      this.component = $e.components.register(new _component.default({
        manager: this
      }));
    }
  }]);
  return PopupModule;
}(elementorModules.editor.utils.Module);

module.exports = PopupModule;

/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(147);

var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(67));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59));

var hooks = _interopRequireWildcard(__webpack_require__(354));

var PopupComponent = /*#__PURE__*/function (_$e$modules$Component) {
  (0, _inherits2.default)(PopupComponent, _$e$modules$Component);

  var _super = (0, _createSuper2.default)(PopupComponent);

  function PopupComponent() {
    var _this;

    (0, _classCallCheck2.default)(this, PopupComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onPageSettingsCloseHandler", null);
    return _this;
  }

  (0, _createClass2.default)(PopupComponent, [{
    key: "getNamespace",
    value: function getNamespace() {
      return 'document/popup';
    }
  }, {
    key: "defaultHooks",
    value: function defaultHooks() {
      return this.importHooks(hooks);
    }
  }]);
  return PopupComponent;
}($e.modules.ComponentBase);

exports.default = PopupComponent;

/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(47);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var _data = __webpack_require__(355);

_Object$keys(_data).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _data[key];
    }
  });
});

var _ui = __webpack_require__(357);

_Object$keys(_ui).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ui[key];
    }
  });
});

/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "PopupSave", {
  enumerable: true,
  get: function get() {
    return _save.PopupSave;
  }
});

var _save = __webpack_require__(356);

/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.PopupSave = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var PopupSave = /*#__PURE__*/function (_$e$modules$hookData$) {
  (0, _inherits2.default)(PopupSave, _$e$modules$hookData$);

  var _super = (0, _createSuper2.default)(PopupSave);

  function PopupSave() {
    (0, _classCallCheck2.default)(this, PopupSave);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(PopupSave, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/save/save';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'elementor-pro-popup-save';
    }
  }, {
    key: "getConditions",
    value: function getConditions() {
      return 'popup' === elementor.config.document.type;
    }
  }, {
    key: "apply",
    value: function apply() {
      var settings = {};
      jQuery.each(elementorPro.modules.popup.displaySettingsTypes, function (type, data) {
        settings[type] = data.model.toJSON({
          remove: ['default']
        });
      });
      elementorPro.ajax.addRequest('popup_save_display_settings', {
        data: {
          settings: settings
        }
      });
    }
  }]);
  return PopupSave;
}($e.modules.hookData.After);

exports.PopupSave = PopupSave;
var _default = PopupSave;
exports.default = _default;

/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "PopupAddInstructions", {
  enumerable: true,
  get: function get() {
    return _addInstructions.PopupAddInstructions;
  }
});

_Object$defineProperty(exports, "PopupAddLibraryTab", {
  enumerable: true,
  get: function get() {
    return _addLibraryTab.PopupAddLibraryTab;
  }
});

_Object$defineProperty(exports, "PopupAddTriggers", {
  enumerable: true,
  get: function get() {
    return _addTriggers.PopupAddTriggers;
  }
});

_Object$defineProperty(exports, "PopupRemoveInstructions", {
  enumerable: true,
  get: function get() {
    return _removeInstructions.PopupRemoveInstructions;
  }
});

_Object$defineProperty(exports, "PopupRemoveLibraryTab", {
  enumerable: true,
  get: function get() {
    return _removeLibraryTab.PopupRemoveLibraryTab;
  }
});

_Object$defineProperty(exports, "PopupRemoveTriggers", {
  enumerable: true,
  get: function get() {
    return _removeTriggers.PopupRemoveTriggers;
  }
});

var _addInstructions = __webpack_require__(358);

var _addLibraryTab = __webpack_require__(359);

var _addTriggers = __webpack_require__(360);

var _removeInstructions = __webpack_require__(362);

var _removeLibraryTab = __webpack_require__(363);

var _removeTriggers = __webpack_require__(364);

/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.PopupAddInstructions = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _baseHookPopupAfter = _interopRequireDefault(__webpack_require__(288));

var PopupAddInstructions = /*#__PURE__*/function (_BaseHookPopupAfter) {
  (0, _inherits2.default)(PopupAddInstructions, _BaseHookPopupAfter);

  var _super = (0, _createSuper2.default)(PopupAddInstructions);

  function PopupAddInstructions() {
    (0, _classCallCheck2.default)(this, PopupAddInstructions);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(PopupAddInstructions, [{
    key: "getCommand",
    value: function getCommand() {
      return 'editor/documents/open';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'elementor-pro-popup-add-instructions';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      var document = elementor.documents.get(args.id);
      return 'popup' === document.config.type && !elementor.config.user.introduction.popupSettings;
    }
  }, {
    key: "apply",
    value: function apply() {
      // Expose for the remove hook.
      this.component.onPageSettingsCloseHandler = this.onPageSettingsClose.bind(this);
      $e.components.get('panel/page-settings').on('route/close', this.component.onPageSettingsCloseHandler);
    }
  }, {
    key: "onPageSettingsClose",
    value: function onPageSettingsClose() {
      var introduction = this.getIntroduction();
      introduction.show(elementor.getPanelView().footer.currentView.ui.settings[0]);
      introduction.setViewed();
      $e.components.get('panel/page-settings').off('route/close', this.component.onPageSettingsCloseHandler);
    }
  }, {
    key: "getIntroduction",
    value: function getIntroduction() {
      return new elementorModules.editor.utils.Introduction({
        introductionKey: 'popupSettings',
        dialogOptions: {
          id: 'elementor-popup-settings-introduction',
          headerMessage: '<i class="eicon-info"></i>' + elementorPro.translate('popup_settings_introduction_title'),
          message: elementorPro.translate('popup_settings_introduction_message'),
          closeButton: true,
          closeButtonClass: 'eicon-close',
          position: {
            my: 'left bottom',
            at: 'right bottom-5',
            autoRefresh: true
          },
          hide: {
            onOutsideClick: false
          }
        }
      });
    }
  }]);
  return PopupAddInstructions;
}(_baseHookPopupAfter.default);

exports.PopupAddInstructions = PopupAddInstructions;
var _default = PopupAddInstructions;
exports.default = _default;

/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.PopupAddLibraryTab = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var PopupAddLibraryTab = /*#__PURE__*/function (_$e$modules$hookUI$Af) {
  (0, _inherits2.default)(PopupAddLibraryTab, _$e$modules$hookUI$Af);

  var _super = (0, _createSuper2.default)(PopupAddLibraryTab);

  function PopupAddLibraryTab() {
    (0, _classCallCheck2.default)(this, PopupAddLibraryTab);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(PopupAddLibraryTab, [{
    key: "getCommand",
    value: function getCommand() {
      return 'editor/documents/open';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'elementor-pro-popup-add-library-tab';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      var document = elementor.documents.get(args.id);
      return 'popup' === document.config.type;
    }
  }, {
    key: "apply",
    value: function apply() {
      $e.components.get('library').addTab('templates/popups', {
        title: elementorPro.translate('popups'),
        filter: {
          source: 'remote',
          type: 'popup'
        }
      }, 1);
    }
  }]);
  return PopupAddLibraryTab;
}($e.modules.hookUI.After);

exports.PopupAddLibraryTab = PopupAddLibraryTab;
var _default = PopupAddLibraryTab;
exports.default = _default;

/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.PopupAddTriggers = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _displaySettings = _interopRequireDefault(__webpack_require__(361));

var PopupAddTriggers = /*#__PURE__*/function (_$e$modules$hookUI$Af) {
  (0, _inherits2.default)(PopupAddTriggers, _$e$modules$hookUI$Af);

  var _super = (0, _createSuper2.default)(PopupAddTriggers);

  function PopupAddTriggers() {
    (0, _classCallCheck2.default)(this, PopupAddTriggers);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(PopupAddTriggers, [{
    key: "getCommand",
    value: function getCommand() {
      return 'editor/documents/open';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'elementor-pro-popup-add-triggers';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      var document = elementor.documents.get(args.id);
      return 'popup' === document.config.type;
    }
  }, {
    key: "apply",
    value: function apply() {
      if (elementor.panel) {
        this.addUI();
      } else {
        // First open, the panel is not available yet.
        elementor.on('preview:loaded', this.addUI.bind(this));
      }
    }
  }, {
    key: "addUI",
    value: function addUI() {
      this.addPanelFooterSubmenuItems();
      this.addPublishTabs();
    }
  }, {
    key: "addPublishTabs",
    value: function addPublishTabs() {
      var config = elementor.config.document.displaySettings,
          component = $e.components.get('theme-builder-publish'),
          module = elementorPro.modules.popup;
      jQuery.each(module.displaySettingsTypes, function (type, data) {
        // Init models for editor save.
        data.model = new elementorModules.editor.elements.models.BaseSettings(config[type].settings, {
          controls: config[type].controls
        });
        component.addTab(type, {
          View: _displaySettings.default,
          viewOptions: {
            name: type,
            id: "elementor-popup-".concat(type, "__controls"),
            model: data.model,
            controls: data.model.controls
          },
          name: type,
          title: elementorPro.translate(type),
          description: elementorPro.translate("popup_publish_screen_".concat(type, "_description")),
          image: elementorPro.config.urls.modules + "popup/assets/images/".concat(type, "-tab.svg")
        });
      });
    }
  }, {
    key: "addPanelFooterSubmenuItems",
    value: function addPanelFooterSubmenuItems() {
      var component = $e.components.get('theme-builder-publish'),
          displaySettingsTypes = elementorPro.modules.popup.displaySettingsTypes;
      jQuery.each(displaySettingsTypes, function (type, data) {
        elementor.getPanelView().footer.currentView.addSubMenuItem('saver-options', {
          before: 'save-template',
          name: type,
          icon: data.icon,
          title: elementorPro.translate(type),
          callback: function callback() {
            return $e.route(component.getTabRoute(type));
          }
        });
      });
    }
  }]);
  return PopupAddTriggers;
}($e.modules.hookUI.After);

exports.PopupAddTriggers = PopupAddTriggers;
var _default = PopupAddTriggers;
exports.default = _default;

/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _keys = _interopRequireDefault(__webpack_require__(47));

__webpack_require__(101);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _get2 = _interopRequireDefault(__webpack_require__(61));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(25));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _default = /*#__PURE__*/function (_elementorModules$edi) {
  (0, _inherits2.default)(_default, _elementorModules$edi);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.template = _.noop;
    _this.activeTab = 'content';

    _this.listenTo(_this.model, 'change', _this.onModelChange);

    return _this;
  }

  (0, _createClass2.default)(_default, [{
    key: "getNamespaceArray",
    value: function getNamespaceArray() {
      return ['popup', 'display-settings'];
    }
  }, {
    key: "className",
    value: function className() {
      return (0, _get2.default)((0, _getPrototypeOf2.default)(_default.prototype), "className", this).call(this) + ' elementor-popup__display-settings';
    }
  }, {
    key: "toggleGroup",
    value: function toggleGroup(groupName, $groupElement) {
      $groupElement.toggleClass('elementor-active', !!this.model.get(groupName));
    }
  }, {
    key: "onRenderTemplate",
    value: function onRenderTemplate() {
      this.activateFirstSection();
    }
  }, {
    key: "onRender",
    value: function onRender() {
      var _this2 = this;

      var name = this.getOption('name');
      var $groupWrapper;
      this.children.each(function (child) {
        var type = child.model.get('type');

        if ('heading' !== type) {
          if ($groupWrapper) {
            $groupWrapper.append(child.$el);
          }

          return;
        }

        var groupName = child.model.get('name').replace('_heading', '');
        $groupWrapper = jQuery('<div>', {
          id: "elementor-popup__".concat(name, "-controls-group--").concat(groupName),
          class: 'elementor-popup__display-settings_controls_group'
        });
        var $imageWrapper = jQuery('<div>', {
          class: 'elementor-popup__display-settings_controls_group__icon'
        }),
            $image = jQuery('<img>', {
          src: elementorPro.config.urls.modules + "popup/assets/images/".concat(name, "/").concat(groupName, ".svg")
        });
        $imageWrapper.html($image);
        $groupWrapper.html($imageWrapper);
        child.$el.before($groupWrapper);
        $groupWrapper.append(child.$el);

        _this2.toggleGroup(groupName, $groupWrapper);
      });
    }
  }, {
    key: "onModelChange",
    value: function onModelChange() {
      var changedControlName = (0, _keys.default)(this.model.changed)[0],
          changedControlView = this.getControlViewByName(changedControlName);

      if ('switcher' !== changedControlView.model.get('type')) {
        return;
      }

      this.toggleGroup(changedControlName, changedControlView.$el.parent());
    }
  }]);
  return _default;
}(elementorModules.editor.views.ControlsStack);

exports.default = _default;

/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.PopupRemoveInstructions = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _baseHookPopupAfter = _interopRequireDefault(__webpack_require__(288));

var PopupRemoveInstructions = /*#__PURE__*/function (_BaseHookPopupAfter) {
  (0, _inherits2.default)(PopupRemoveInstructions, _BaseHookPopupAfter);

  var _super = (0, _createSuper2.default)(PopupRemoveInstructions);

  function PopupRemoveInstructions() {
    (0, _classCallCheck2.default)(this, PopupRemoveInstructions);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(PopupRemoveInstructions, [{
    key: "getCommand",
    value: function getCommand() {
      return 'editor/documents/unload';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'elementor-pro-popup-remove-instructions';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      var document = args.document;
      return 'popup' === document.config.type && !elementor.config.user.introduction.popupSettings;
    }
  }, {
    key: "apply",
    value: function apply() {
      $e.components.get('panel/page-settings').off('route/close', this.component.onPageSettingsCloseHandler);
    }
  }]);
  return PopupRemoveInstructions;
}(_baseHookPopupAfter.default);

exports.PopupRemoveInstructions = PopupRemoveInstructions;
var _default = PopupRemoveInstructions;
exports.default = _default;

/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.PopupRemoveLibraryTab = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var PopupRemoveLibraryTab = /*#__PURE__*/function (_$e$modules$hookUI$Af) {
  (0, _inherits2.default)(PopupRemoveLibraryTab, _$e$modules$hookUI$Af);

  var _super = (0, _createSuper2.default)(PopupRemoveLibraryTab);

  function PopupRemoveLibraryTab() {
    (0, _classCallCheck2.default)(this, PopupRemoveLibraryTab);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(PopupRemoveLibraryTab, [{
    key: "getCommand",
    value: function getCommand() {
      return 'editor/documents/unload';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'elementor-pro-popup-remove-library-tab';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      var document = args.document;
      return 'popup' === document.config.type;
    }
  }, {
    key: "apply",
    value: function apply() {
      $e.components.get('library').removeTab('templates/popups');
    }
  }]);
  return PopupRemoveLibraryTab;
}($e.modules.hookUI.After);

exports.PopupRemoveLibraryTab = PopupRemoveLibraryTab;
var _default = PopupRemoveLibraryTab;
exports.default = _default;

/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.PopupRemoveTriggers = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var PopupRemoveTriggers = /*#__PURE__*/function (_$e$modules$hookUI$Af) {
  (0, _inherits2.default)(PopupRemoveTriggers, _$e$modules$hookUI$Af);

  var _super = (0, _createSuper2.default)(PopupRemoveTriggers);

  function PopupRemoveTriggers() {
    (0, _classCallCheck2.default)(this, PopupRemoveTriggers);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(PopupRemoveTriggers, [{
    key: "getCommand",
    value: function getCommand() {
      return 'editor/documents/unload';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'elementor-pro-popup-remove-triggers';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      var document = args.document;
      return 'popup' === document.config.type;
    }
  }, {
    key: "apply",
    value: function apply() {
      this.removePanelFooterSubmenuItems();
      this.removePublishTabs();
    }
  }, {
    key: "removePanelFooterSubmenuItems",
    value: function removePanelFooterSubmenuItems() {
      var displaySettingsTypes = elementorPro.modules.popup.displaySettingsTypes;
      jQuery.each(displaySettingsTypes, function (type) {
        elementor.getPanelView().footer.currentView.removeSubMenuItem('saver-options', {
          name: type
        });
      });
    }
  }, {
    key: "removePublishTabs",
    value: function removePublishTabs() {
      var component = $e.components.get('theme-builder-publish'),
          displaySettingsTypes = elementorPro.modules.popup.displaySettingsTypes;
      jQuery.each(displaySettingsTypes, function (type) {
        component.removeTab(type);
      });
    }
  }]);
  return PopupRemoveTriggers;
}($e.modules.hookUI.After);

exports.PopupRemoveTriggers = PopupRemoveTriggers;
var _default = PopupRemoveTriggers;
exports.default = _default;

/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _stringify = _interopRequireDefault(__webpack_require__(182));

var _keys = _interopRequireDefault(__webpack_require__(47));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _component = _interopRequireDefault(__webpack_require__(366));

var Module = /*#__PURE__*/function (_elementorModules$edi) {
  (0, _inherits2.default)(Module, _elementorModules$edi);

  var _super = (0, _createSuper2.default)(Module);

  function Module() {
    var _this;

    (0, _classCallCheck2.default)(this, Module);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.globalModels = {};
    _this.panelWidgets = null; // TODO: This property is unused.

    _this.templatesAreSaved = true;
    return _this;
  }

  (0, _createClass2.default)(Module, [{
    key: "addGlobalWidget",
    value: function addGlobalWidget(id, args) {
      args = _.extend({}, args, {
        categories: [],
        icon: elementor.widgetsCache[args.widgetType].icon,
        widgetType: args.widgetType,
        custom: {
          templateID: id
        }
      });
      var globalModel = this.createGlobalModel(id, args);
      return this.panelWidgets.add(globalModel);
    }
  }, {
    key: "createGlobalModel",
    value: function createGlobalModel(id, modelArgs) {
      var globalModel = new elementor.modules.elements.models.Element(modelArgs),
          settingsModel = globalModel.get('settings');
      globalModel.set('id', id);
      settingsModel.on('change', _.bind(this.onGlobalModelChange, this));
      return this.globalModels[id] = globalModel;
    }
  }, {
    key: "onGlobalModelChange",
    value: function onGlobalModelChange() {
      this.templatesAreSaved = false;
    }
  }, {
    key: "setWidgetType",
    value: function setWidgetType() {
      elementor.hooks.addFilter('element/view', function (DefaultView, model) {
        if (model.get('templateID')) {
          return __webpack_require__(373);
        }

        return DefaultView;
      });
      elementor.hooks.addFilter('element/model', function (DefaultModel, attrs) {
        if (attrs.templateID) {
          return __webpack_require__(374);
        }

        return DefaultModel;
      });
    }
  }, {
    key: "registerTemplateType",
    value: function registerTemplateType() {
      elementor.templates.registerTemplateType('widget', {
        showInLibrary: false,
        saveDialog: {
          title: elementorPro.translate('global_widget_save_title'),
          description: elementorPro.translate('global_widget_save_description')
        },
        prepareSavedData: function prepareSavedData(data) {
          data.widgetType = data.content[0].widgetType;
          return data;
        },
        ajaxParams: {
          success: this.onWidgetTemplateSaved.bind(this)
        }
      });
    }
  }, {
    key: "addSavedWidgetsToPanel",
    value: function addSavedWidgetsToPanel() {
      var _this2 = this;

      this.panelWidgets = new Backbone.Collection();

      _.each(elementorPro.config.widget_templates, function (templateArgs, id) {
        _this2.addGlobalWidget(id, templateArgs);
      });

      elementor.hooks.addFilter('panel/elements/regionViews', function (regionViews) {
        _.extend(regionViews.global, {
          view: __webpack_require__(375),
          options: {
            collection: _this2.panelWidgets
          }
        });

        return regionViews;
      });
    }
  }, {
    key: "addPanelPage",
    value: function addPanelPage() {
      elementor.getPanelView().addPage('globalWidget', {
        view: __webpack_require__(377)
      });
    }
  }, {
    key: "getGlobalModels",
    value: function getGlobalModels(id) {
      if (!id) {
        return this.globalModels;
      }

      return this.globalModels[id];
    }
  }, {
    key: "saveTemplates",
    value: function saveTemplates() {
      if (!(0, _keys.default)(this.globalModels).length) {
        return;
      }

      var templatesData = [];

      _.each(this.globalModels, function (templateModel, id) {
        if ('loaded' !== templateModel.get('settingsLoadedStatus')) {
          return;
        }

        var data = {
          content: (0, _stringify.default)([templateModel.toJSON({
            remove: ['default']
          })]),
          source: 'local',
          type: 'widget',
          id: id
        };
        templatesData.push(data);
      });

      if (!templatesData.length) {
        return;
      }

      elementorCommon.ajax.addRequest('update_templates', {
        data: {
          templates: templatesData
        },
        success: function success() {
          this.templatesAreSaved = true;
        }
      });
    }
  }, {
    key: "requestGlobalModelSettings",
    value: function requestGlobalModelSettings(globalModel, callback, container) {
      elementor.templates.requestTemplateContent('local', globalModel.get('id'), {
        success: function success(data) {
          globalModel.set('settingsLoadedStatus', 'loaded').trigger('settings:loaded');
          var settings = data.content[0].settings,
              settingsModel = globalModel.get('settings');
          settingsModel.handleRepeaterData(settings);
          settingsModel.set(settings); // Cover issue when dynamics comes after container already created.

          if (container) {
            delete container.view.container;
            container.view.getContainer();
          }

          if (callback) {
            callback(globalModel);
          }
        }
      });
    }
  }, {
    key: "setWidgetContextMenuSaveAction",
    value: function setWidgetContextMenuSaveAction() {
      elementor.hooks.addFilter('elements/widget/contextMenuGroups', function (groups, widget) {
        var saveGroup = _.findWhere(groups, {
          name: 'save'
        });

        if (!saveGroup) {
          return groups;
        }

        var saveAction = _.findWhere(saveGroup.actions, {
          name: 'save'
        });

        saveAction.callback = widget.save.bind(widget);
        delete saveAction.shortcut;
        return groups;
      });
    }
  }, {
    key: "onElementorInit",
    value: function onElementorInit() {
      var _this3 = this;

      this.registerTemplateType();
      this.setWidgetContextMenuSaveAction();
      elementor.on('panel:init', function () {
        _this3.addSavedWidgetsToPanel(); // setWidgetType depends on addSavedWidgetsToPanel.


        _this3.setWidgetType();
      });
    }
  }, {
    key: "onElementorPreviewLoaded",
    value: function onElementorPreviewLoaded(isFirst) {
      if (!isFirst) {
        return;
      }

      this.addPanelPage();
      $e.routes.register('panel/editor', 'global', function (args) {
        elementor.getPanelView().setPage('globalWidget', 'Global Editing', {
          editedView: args.view
        });
      });
    }
  }, {
    key: "onElementorInitComponents",
    value: function onElementorInitComponents() {
      $e.components.register(new _component.default({
        manager: this
      }));
    }
  }, {
    key: "onWidgetTemplateSaved",
    value: function onWidgetTemplateSaved(data) {
      elementor.templates.layout.hideModal();
      var container = $e.components.get('document').utils.findContainerById(elementor.templates.layout.modalContent.currentView.model.id);
      $e.run('document/global/link', {
        container: container,
        data: data
      });
    }
  }]);
  return Module;
}(elementorModules.editor.utils.Module);

exports.default = Module;

/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(147);

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

var commands = _interopRequireWildcard(__webpack_require__(367));

var hooks = _interopRequireWildcard(__webpack_require__(370));

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
      return 'document/global';
    }
  }, {
    key: "defaultCommands",
    value: function defaultCommands() {
      return this.importCommands(commands);
    }
  }, {
    key: "defaultHooks",
    value: function defaultHooks() {
      return this.importHooks(hooks);
    }
  }]);
  return Component;
}($e.modules.ComponentBase);

exports.default = Component;

/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "Link", {
  enumerable: true,
  get: function get() {
    return _link.Link;
  }
});

_Object$defineProperty(exports, "Unlink", {
  enumerable: true,
  get: function get() {
    return _unlink.Unlink;
  }
});

var _link = __webpack_require__(368);

var _unlink = __webpack_require__(369);

/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Link = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var Link = /*#__PURE__*/function (_$e$modules$document$) {
  (0, _inherits2.default)(Link, _$e$modules$document$);

  var _super = (0, _createSuper2.default)(Link);

  function Link() {
    (0, _classCallCheck2.default)(this, Link);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Link, [{
    key: "validateArgs",
    value: function validateArgs(args) {
      this.requireContainer(args);
      this.requireArgumentConstructor('data', Object, args);
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      containers.forEach(function (
      /* Container */
      container) {
        if ('global' === container.model.get('widgetType')) {
          throw Error("Invalid container, id: '".concat(container.id, "' is already global."));
        }
      });
    }
  }, {
    key: "getHistory",
    value: function getHistory(args) {
      var data = args.data;
      return {
        title: elementor.widgetsCache[data.widgetType].title,
        subTitle: data.title,
        type: elementorPro.translate('linked_to_global')
      };
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var data = args.data,
          _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2;
      containers.forEach(function (
      /** Container */
      container) {
        var widgetModel = container.model,
            widgetModelIndex = widgetModel.collection.indexOf(widgetModel);
        data.elType = data.type;
        data.settings = widgetModel.get('settings').attributes;
        var globalModel = elementorPro.modules.globalWidget.addGlobalWidget(data.template_id, data),
            globalModelAttributes = globalModel.attributes;
        $e.run('document/elements/create', {
          container: container.parent,
          model: {
            id: elementor.helpers.getUniqueID(),
            elType: globalModelAttributes.type,
            templateID: globalModelAttributes.template_id,
            widgetType: 'global'
          },
          options: {
            at: widgetModelIndex
          }
        });
        $e.run('document/elements/delete', {
          container: container
        });
      });
      $e.route('panel/elements/global');
    }
  }]);
  return Link;
}($e.modules.document.CommandHistory);

exports.Link = Link;
var _default = Link;
exports.default = _default;

/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Unlink = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var Unlink = /*#__PURE__*/function (_$e$modules$document$) {
  (0, _inherits2.default)(Unlink, _$e$modules$document$);

  var _super = (0, _createSuper2.default)(Unlink);

  function Unlink() {
    (0, _classCallCheck2.default)(this, Unlink);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Unlink, [{
    key: "validateArgs",
    value: function validateArgs(args) {
      this.requireContainer(args);
    }
  }, {
    key: "getHistory",
    value: function getHistory(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      return {
        title: elementor.helpers.getModelLabel(containers[0].model),
        // TODO: add support multi containers.
        type: elementorPro.translate('unlink_widget')
      };
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2;
      containers.forEach(function (
      /** Container */
      container) {
        var globalModel = elementorPro.modules.globalWidget.getGlobalModels(container.model.get('templateID'));
        $e.run('document/elements/create', {
          container: container.parent,
          model: {
            id: elementor.helpers.getUniqueID(),
            elType: 'widget',
            widgetType: globalModel.get('widgetType'),
            settings: elementorCommon.helpers.cloneObject(globalModel.get('settings').attributes),
            defaultEditSettings: elementorCommon.helpers.cloneObject(globalModel.get('editSettings').attributes)
          },
          options: {
            at: container.model.collection.indexOf(container.model),
            edit: true
          }
        });
        $e.run('document/elements/delete', {
          container: container
        });
      });
    }
  }]);
  return Unlink;
}($e.modules.document.CommandHistory);

exports.Unlink = Unlink;
var _default = Unlink;
exports.default = _default;

/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(47);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var _data = __webpack_require__(371);

_Object$keys(_data).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _data[key];
    }
  });
});

/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "GlobalWidgetSave", {
  enumerable: true,
  get: function get() {
    return _save.GlobalWidgetSave;
  }
});

var _save = __webpack_require__(372);

/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.GlobalWidgetSave = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var GlobalWidgetSave = /*#__PURE__*/function (_$e$modules$hookData$) {
  (0, _inherits2.default)(GlobalWidgetSave, _$e$modules$hookData$);

  var _super = (0, _createSuper2.default)(GlobalWidgetSave);

  function GlobalWidgetSave() {
    (0, _classCallCheck2.default)(this, GlobalWidgetSave);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(GlobalWidgetSave, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/save/save';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'elementor-pro-global-widget-save';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      var _args$document = args.document,
          document = _args$document === void 0 ? elementor.documents.getCurrent() : _args$document;
      return document.config.panel.has_elements && args.status && -1 !== ['private', 'publish'].indexOf(args.status);
    }
  }, {
    key: "apply",
    value: function apply() {
      elementorPro.modules.globalWidget.saveTemplates();
    }
  }]);
  return GlobalWidgetSave;
}($e.modules.hookData.After);

exports.GlobalWidgetSave = GlobalWidgetSave;
var _default = GlobalWidgetSave;
exports.default = _default;

/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var WidgetView = elementor.modules.elements.views.Widget,
    GlobalWidgetView;
GlobalWidgetView = WidgetView.extend({
  globalModel: null,
  className: function className() {
    return WidgetView.prototype.className.apply(this, arguments) + ' elementor-global-widget elementor-global-' + this.model.get('templateID');
  },
  initialize: function initialize() {
    var self = this,
        previewSettings = self.model.get('previewSettings'),
        globalModel = self.getGlobalModel();

    if (previewSettings && $e.commandsInternal.is('editor/documents/attach-preview')) {
      globalModel.set('settingsLoadedStatus', 'loaded').trigger('settings:loaded');
      var settingsModel = globalModel.get('settings');
      settingsModel.handleRepeaterData(previewSettings);
      settingsModel.set(previewSettings, {
        silent: true
      });
    } else {
      var globalSettingsLoadedStatus = globalModel.get('settingsLoadedStatus');

      if (!globalSettingsLoadedStatus) {
        globalModel.set('settingsLoadedStatus', 'pending');
        elementorPro.modules.globalWidget.requestGlobalModelSettings(globalModel, null, this.getContainer());
      }

      if ('loaded' !== globalSettingsLoadedStatus) {
        self.$el.addClass('elementor-loading');
      }

      globalModel.on('settings:loaded', function () {
        self.$el.removeClass('elementor-loading');
        self.render();
      });
    }

    WidgetView.prototype.initialize.apply(self, arguments);
  },
  getGlobalModel: function getGlobalModel() {
    if (!this.globalModel) {
      this.globalModel = elementorPro.modules.globalWidget.getGlobalModels(this.model.get('templateID'));
    }

    return this.globalModel;
  },
  getEditModel: function getEditModel() {
    return this.getGlobalModel();
  },
  getHTMLContent: function getHTMLContent(html) {
    if ('loaded' === this.getGlobalModel().get('settingsLoadedStatus')) {
      return WidgetView.prototype.getHTMLContent.call(this, html);
    }

    return '';
  },
  serializeModel: function serializeModel() {
    var globalModel = this.getGlobalModel();
    return globalModel.toJSON.apply(globalModel, _.rest(arguments));
  },
  unlink: function unlink() {
    $e.run('document/global/unlink', {
      container: this.getContainer()
    });
  },
  onEditRequest: function onEditRequest() {
    $e.route('panel/editor/global', {
      view: this
    });
  }
});
module.exports = GlobalWidgetView;

/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(198);

__webpack_require__(101);

module.exports = elementor.modules.elements.models.Element.extend({
  initialize: function initialize() {
    this.set({
      widgetType: 'global'
    }, {
      silent: true
    });
    elementor.modules.elements.models.Element.prototype.initialize.apply(this, arguments);
    elementorFrontend.config.elements.data[this.cid].on('change', this.onSettingsChange.bind(this));
  },
  initSettings: function initSettings() {
    var globalModel = this.getGlobalModel(),
        settingsModel = globalModel.get('settings');
    this.set('settings', settingsModel);
    elementorFrontend.config.elements.data[this.cid] = settingsModel;
    elementorFrontend.config.elements.editSettings[this.cid] = globalModel.get('editSettings');
  },
  initEditSettings: function initEditSettings() {
    var editSettings = new Backbone.Model(this.get('defaultEditSettings'));
    this.set('editSettings', editSettings); // Set default edit tab.

    this.get('editSettings').set('editTab', 'global');
  },
  getGlobalModel: function getGlobalModel() {
    var templateID = this.get('templateID');
    return elementorPro.modules.globalWidget.getGlobalModels(templateID);
  },
  getTitle: function getTitle() {
    var title = this.getSetting('_title');

    if (!title) {
      title = this.getGlobalModel().get('title');
    }

    var global = elementorPro.translate('global');
    title = title.replace(new RegExp('\\(' + global + '\\)$'), '');
    return title + ' (' + global + ')';
  },
  getIcon: function getIcon() {
    return this.getGlobalModel().getIcon();
  },
  onSettingsChange: function onSettingsChange(model) {
    if (!model.changed.elements) {
      this.set('previewSettings', model.toJSON({
        remove: ['default']
      }), {
        silent: true
      });
    }
  },
  onDestroy: function onDestroy() {
    // Can be also 'panel/editor/global'.
    if ($e.routes.isPartOf('panel/editor')) {
      $e.route('panel/elements/categories');
    }
  }
});

/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elementor.modules.layouts.panel.pages.elements.views.Elements.extend({
  id: 'elementor-global-templates',
  getEmptyView: function getEmptyView() {
    if (this.collection.length) {
      return null;
    }

    return __webpack_require__(376);
  },
  onFilterEmpty: function onFilterEmpty() {}
});

/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GlobalWidgetsView = elementor.modules.layouts.panel.pages.elements.views.Global;
module.exports = GlobalWidgetsView.extend({
  template: '#tmpl-elementor-panel-global-widget-no-templates',
  id: 'elementor-panel-global-widget-no-templates',
  className: 'elementor-nerd-box elementor-panel-nerd-box'
});

/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Marionette.ItemView.extend({
  id: 'elementor-panel-global-widget',
  template: '#tmpl-elementor-panel-global-widget',
  ui: {
    editButton: '#elementor-global-widget-locked-edit .elementor-button',
    unlinkButton: '#elementor-global-widget-locked-unlink .elementor-button',
    loading: '#elementor-global-widget-loading'
  },
  events: {
    'click @ui.editButton': 'onEditButtonClick',
    'click @ui.unlinkButton': 'onUnlinkButtonClick'
  },
  initialize: function initialize() {
    this.initUnlinkDialog();
  },
  buildUnlinkDialog: function buildUnlinkDialog() {
    var self = this;
    return elementorCommon.dialogsManager.createWidget('confirm', {
      id: 'elementor-global-widget-unlink-dialog',
      headerMessage: elementorPro.translate('unlink_widget'),
      message: elementorPro.translate('dialog_confirm_unlink'),
      position: {
        my: 'center center',
        at: 'center center'
      },
      strings: {
        confirm: elementorPro.translate('unlink'),
        cancel: elementorPro.translate('cancel')
      },
      onConfirm: function onConfirm() {
        self.getOption('editedView').unlink();
      }
    });
  },
  initUnlinkDialog: function initUnlinkDialog() {
    var dialog;

    this.getUnlinkDialog = function () {
      if (!dialog) {
        dialog = this.buildUnlinkDialog();
      }

      return dialog;
    };
  },
  editGlobalModel: function editGlobalModel() {
    var editedView = this.getOption('editedView');
    $e.run('panel/editor/open', {
      model: editedView.getEditModel(),
      view: editedView
    });
  },
  onEditButtonClick: function onEditButtonClick() {
    var self = this,
        editedView = self.getOption('editedView'),
        editedModel = editedView.getEditModel();

    if ('loaded' === editedModel.get('settingsLoadedStatus')) {
      self.editGlobalModel();
      return;
    }

    self.ui.loading.removeClass('elementor-hidden');
    elementorPro.modules.globalWidget.requestGlobalModelSettings(editedModel, function () {
      self.ui.loading.addClass('elementor-hidden');
      self.editGlobalModel();
    });
  },
  onUnlinkButtonClick: function onUnlinkButtonClick() {
    this.getUnlinkDialog().show();
  }
});

/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty2 = __webpack_require__(0);

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(233);

var _defineProperty = _interopRequireDefault(__webpack_require__(0));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _get3 = _interopRequireDefault(__webpack_require__(61));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(25));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _component = _interopRequireDefault(__webpack_require__(379));

var ThemeBuilderModule = /*#__PURE__*/function (_elementorModules$edi) {
  (0, _inherits2.default)(ThemeBuilderModule, _elementorModules$edi);

  var _super = (0, _createSuper2.default)(ThemeBuilderModule);

  function ThemeBuilderModule() {
    (0, _classCallCheck2.default)(this, ThemeBuilderModule);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ThemeBuilderModule, [{
    key: "__construct",
    value: function __construct() {
      var _get2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_get2 = (0, _get3.default)((0, _getPrototypeOf2.default)(ThemeBuilderModule.prototype), "__construct", this)).call.apply(_get2, [this].concat(args));

      (0, _defineProperty.default)(elementorPro.config, 'theme_builder', {
        get: function get() {
          elementorCommon.helpers.softDeprecated('theme_builder', '2.9.0', 'elementor.config.document.theme_builder');
          return elementor.config.document.theme_builder;
        }
      });
    }
  }, {
    key: "onElementorLoaded",
    value: function onElementorLoaded() {
      this.component = $e.components.register(new _component.default({
        manager: this
      }));
      elementor.on('document:loaded', this.onDocumentLoaded.bind(this));
      elementor.on('document:unload', this.onDocumentUnloaded.bind(this));
      this.onApplyPreview = this.onApplyPreview.bind(this);
      this.onSectionPreviewSettingsActive = this.onSectionPreviewSettingsActive.bind(this);
    }
  }, {
    key: "onDocumentLoaded",
    value: function onDocumentLoaded(document) {
      if (!document.config.theme_builder) {
        return;
      }

      elementor.getPanelView().on('set:page:page_settings', this.updatePreviewIdOptions);
      elementor.channels.editor.on('elementorThemeBuilder:ApplyPreview', this.onApplyPreview);
      elementor.channels.editor.on('page_settings:preview_settings:activated', this.onSectionPreviewSettingsActive);
    }
  }, {
    key: "onDocumentUnloaded",
    value: function onDocumentUnloaded(document) {
      if (!document.config.theme_builder) {
        return;
      }

      elementor.getPanelView().off('set:page:page_settings', this.updatePreviewIdOptions);
      elementor.channels.editor.off('elementorThemeBuilder:ApplyPreview', this.onApplyPreview);
      elementor.channels.editor.off('page_settings:preview_settings:activated', this.onSectionPreviewSettingsActive);
    }
  }, {
    key: "saveAndReload",
    value: function saveAndReload() {
      $e.run('document/save/auto', {
        force: true,
        onSuccess: function onSuccess() {
          elementor.dynamicTags.cleanCache();
          elementor.reloadPreview();
        }
      });
    }
  }, {
    key: "onApplyPreview",
    value: function onApplyPreview() {
      this.saveAndReload();
    }
  }, {
    key: "onSectionPreviewSettingsActive",
    value: function onSectionPreviewSettingsActive() {
      this.updatePreviewIdOptions(true);
    }
  }, {
    key: "updatePreviewIdOptions",
    value: function updatePreviewIdOptions(render) {
      var previewType = elementor.settings.page.model.get('preview_type');

      if (!previewType) {
        return;
      }

      previewType = previewType.split('/');
      var currentView = elementor.getPanelView().getCurrentPageView(),
          controlModel = currentView.collection.findWhere({
        name: 'preview_id'
      });

      if ('author' === previewType[1]) {
        controlModel.set({
          autocomplete: {
            object: 'author'
          }
        });
      } else if ('taxonomy' === previewType[0]) {
        controlModel.set({
          autocomplete: {
            object: 'tax',
            query: {
              taxonomy: previewType[1]
            }
          }
        });
      } else if ('single' === previewType[0]) {
        controlModel.set({
          autocomplete: {
            object: 'post',
            query: {
              post_type: previewType[1]
            }
          }
        });
      } else {
        controlModel.set({
          autocomplete: {
            object: ''
          }
        });
      }

      if (true === render) {
        // Can be model.
        var controlView = currentView.children.findByModel(controlModel);
        controlView.render();
        controlView.$el.toggle(!!controlModel.get('autocomplete').object);
      }
    }
  }]);
  return ThemeBuilderModule;
}(elementorModules.editor.utils.Module);

exports.default = ThemeBuilderModule;

/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(147);

var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _keys = _interopRequireDefault(__webpack_require__(47));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _get2 = _interopRequireDefault(__webpack_require__(61));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(25));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _content = _interopRequireDefault(__webpack_require__(380));

var _layout = _interopRequireDefault(__webpack_require__(381));

var hooks = _interopRequireWildcard(__webpack_require__(382));

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
      // TODO: should be 'theme-builder/publish'.
      return 'theme-builder-publish';
    }
  }, {
    key: "getModalLayout",
    value: function getModalLayout() {
      return _layout.default;
    }
  }, {
    key: "defaultCommands",
    value: function defaultCommands() {
      var _this = this;

      return {
        next: function next() {
          var tabs = (0, _keys.default)(_this.tabs),
              next = tabs[_this.currentTabIndex + 1];

          if (next) {
            $e.route(_this.getTabRoute(next));
          }
        },
        save: function save() {
          $e.run('document/save/default', {
            force: true
          });

          _this.layout.hideModal();
        },
        'preview-settings': function previewSettings() {
          // TODO: This is function is not part of this component.
          var panel = elementor.getPanelView();
          $e.route('panel/page-settings/settings');

          panel.getCurrentPageView().activateSection('preview_settings')._renderChildren();
        }
      };
    }
  }, {
    key: "defaultHooks",
    value: function defaultHooks() {
      return this.importHooks(hooks);
    }
  }, {
    key: "getTabsWrapperSelector",
    value: function getTabsWrapperSelector() {
      return '#elementor-publish__tabs';
    }
  }, {
    key: "renderTab",
    value: function renderTab(tab) {
      var tabs = this.getTabs(),
          keys = (0, _keys.default)(tabs),
          tabArgs = tabs[tab];
      this.currentTabIndex = keys.indexOf(tab);
      var isLastTab = !keys[this.currentTabIndex + 1];
      this.layout.modalContent.currentView.screen.show(new tabArgs.View(tabArgs.viewOptions));
      this.layout.modal.getElements('next').toggle(!isLastTab);
      this.layout.modal.getElements('publish').toggleClass('elementor-button-success', isLastTab);
    }
  }, {
    key: "activateTab",
    value: function activateTab(tab) {
      $e.routes.saveState(this.getNamespace());
      (0, _get2.default)((0, _getPrototypeOf2.default)(Component.prototype), "activateTab", this).call(this, tab);
    }
  }, {
    key: "open",
    value: function open() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(Component.prototype), "open", this).call(this);

      if (!this.layoutContent) {
        this.layout.showLogo();
        this.layout.modalContent.show(new _content.default({
          component: this
        }));
        this.layoutContent = true;
      }

      return true;
    }
  }]);
  return Component;
}($e.modules.ComponentModalBase);

exports.default = Component;

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var _default = /*#__PURE__*/function (_Marionette$LayoutVie) {
  (0, _inherits2.default)(_default, _Marionette$LayoutVie);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(_default, [{
    key: "id",
    value: function id() {
      return 'elementor-publish';
    }
  }, {
    key: "getTemplate",
    value: function getTemplate() {
      return Marionette.TemplateCache.get('#tmpl-elementor-component-publish');
    }
  }, {
    key: "regions",
    value: function regions() {
      return {
        screen: '#elementor-publish__screen'
      };
    }
  }, {
    key: "templateHelpers",
    value: function templateHelpers() {
      return {
        tabs: this.getOption('component').getTabs()
      };
    }
  }]);
  return _default;
}(Marionette.LayoutView);

exports.default = _default;

/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _get2 = _interopRequireDefault(__webpack_require__(61));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(25));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _default = /*#__PURE__*/function (_elementorModules$com) {
  (0, _inherits2.default)(_default, _elementorModules$com);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(_default, [{
    key: "getModalOptions",
    value: function getModalOptions() {
      return {
        id: 'elementor-publish__modal',
        hide: {
          onButtonClick: false
        }
      };
    }
  }, {
    key: "getLogoOptions",
    value: function getLogoOptions() {
      return {
        title: elementorPro.translate('publish_settings')
      };
    }
  }, {
    key: "initModal",
    value: function initModal() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(_default.prototype), "initModal", this).call(this);
      this.modal.addButton({
        name: 'publish',
        text: elementorPro.translate('save_and_close'),
        callback: function callback() {
          return $e.run('theme-builder-publish/save');
        }
      });
      this.modal.addButton({
        name: 'next',
        text: elementorPro.translate('next'),
        callback: function callback() {
          return $e.run('theme-builder-publish/next');
        }
      });
      var $publishButton = this.modal.getElements('publish');
      this.modal.getElements('next').addClass('elementor-button-success').add($publishButton).addClass('elementor-button').removeClass('dialog-button');
    }
  }]);
  return _default;
}(elementorModules.common.views.modal.Layout);

exports.default = _default;

/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(47);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var _data = __webpack_require__(383);

_Object$keys(_data).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _data[key];
    }
  });
});

var _ui = __webpack_require__(390);

_Object$keys(_ui).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ui[key];
    }
  });
});

/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(47);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var _exportNames = {
  ThemeBuilderSaveConditions: true,
  ThemeBuilderShowConditions: true,
  ThemeBuilderPreviewBreak: true
};

_Object$defineProperty(exports, "ThemeBuilderSaveConditions", {
  enumerable: true,
  get: function get() {
    return _saveConditions.ThemeBuilderSaveConditions;
  }
});

_Object$defineProperty(exports, "ThemeBuilderShowConditions", {
  enumerable: true,
  get: function get() {
    return _showConditions.ThemeBuilderShowConditions;
  }
});

_Object$defineProperty(exports, "ThemeBuilderPreviewBreak", {
  enumerable: true,
  get: function get() {
    return _previewBreak.ThemeBuilderPreviewBreak;
  }
});

var _settings = __webpack_require__(384);

_Object$keys(_settings).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _settings[key];
    }
  });
});

var _saveConditions = __webpack_require__(387);

var _showConditions = __webpack_require__(388);

var _previewBreak = __webpack_require__(389);

/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "ThemeBuilderSaveAndReload", {
  enumerable: true,
  get: function get() {
    return _saveAndReload.ThemeBuilderSaveAndReload;
  }
});

_Object$defineProperty(exports, "ThemeBuilderUpdatePreviewOptions", {
  enumerable: true,
  get: function get() {
    return _updatePreviewOptions.ThemeBuilderUpdatePreviewOptions;
  }
});

var _saveAndReload = __webpack_require__(385);

var _updatePreviewOptions = __webpack_require__(386);

/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.ThemeBuilderSaveAndReload = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

/**
 * Hook fired when template: 'single' page layout changed.
 */
var ThemeBuilderSaveAndReload = /*#__PURE__*/function (_$e$modules$hookData$) {
  (0, _inherits2.default)(ThemeBuilderSaveAndReload, _$e$modules$hookData$);

  var _super = (0, _createSuper2.default)(ThemeBuilderSaveAndReload);

  function ThemeBuilderSaveAndReload() {
    (0, _classCallCheck2.default)(this, ThemeBuilderSaveAndReload);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ThemeBuilderSaveAndReload, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/settings';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'elementor-pro-theme-builder-save-and-reload';
    }
  }, {
    key: "getContainerType",
    value: function getContainerType() {
      return 'document';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      return args.settings && args.settings.page_template;
    }
  }, {
    key: "apply",
    value: function apply() {
      $e.run('document/save/auto', {
        force: true,
        onSuccess: function onSuccess() {
          elementor.reloadPreview();
          elementor.once('preview:loaded', function () {
            $e.route('panel/page-settings/settings');
          });
        }
      });
    }
  }]);
  return ThemeBuilderSaveAndReload;
}($e.modules.hookData.After);

exports.ThemeBuilderSaveAndReload = ThemeBuilderSaveAndReload;
var _default = ThemeBuilderSaveAndReload;
exports.default = _default;

/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.ThemeBuilderUpdatePreviewOptions = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var ThemeBuilderUpdatePreviewOptions = /*#__PURE__*/function (_$e$modules$hookData$) {
  (0, _inherits2.default)(ThemeBuilderUpdatePreviewOptions, _$e$modules$hookData$);

  var _super = (0, _createSuper2.default)(ThemeBuilderUpdatePreviewOptions);

  function ThemeBuilderUpdatePreviewOptions() {
    (0, _classCallCheck2.default)(this, ThemeBuilderUpdatePreviewOptions);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ThemeBuilderUpdatePreviewOptions, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/settings';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'elementor-pro-theme-builder-update-preview-options';
    }
  }, {
    key: "getContainerType",
    value: function getContainerType() {
      return 'document';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      return args.settings && args.settings.preview_type;
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers,
          themeBuilder = elementorPro.modules.themeBuilder;
      $e.run('document/elements/settings', {
        containers: containers,
        settings: {
          preview_id: '',
          preview_search_term: ''
        }
      });

      if ($e.routes.is('panel/page-settings/settings')) {
        themeBuilder.updatePreviewIdOptions(true);
      }
    }
  }]);
  return ThemeBuilderUpdatePreviewOptions;
}($e.modules.hookData.After);

exports.ThemeBuilderUpdatePreviewOptions = ThemeBuilderUpdatePreviewOptions;
var _default = ThemeBuilderUpdatePreviewOptions;
exports.default = _default;

/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.ThemeBuilderSaveConditions = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var ThemeBuilderSaveConditions = /*#__PURE__*/function (_$e$modules$hookData$) {
  (0, _inherits2.default)(ThemeBuilderSaveConditions, _$e$modules$hookData$);

  var _super = (0, _createSuper2.default)(ThemeBuilderSaveConditions);

  function ThemeBuilderSaveConditions() {
    (0, _classCallCheck2.default)(this, ThemeBuilderSaveConditions);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ThemeBuilderSaveConditions, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/save/save';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'elementor-pro-theme-builder-save-conditions';
    }
  }, {
    key: "getConditions",
    value: function getConditions() {
      return !!elementor.config.document.theme_builder;
    }
  }, {
    key: "apply",
    value: function apply() {
      var conditionsModel = elementorPro.modules.themeBuilder.conditionsModel;
      elementorPro.ajax.addRequest('theme_builder_save_conditions', {
        data: conditionsModel.toJSON({
          remove: ['default']
        }),
        success: function success() {
          elementor.config.document.theme_builder.settings.conditions = conditionsModel.get('conditions');
        }
      });
    }
  }]);
  return ThemeBuilderSaveConditions;
}($e.modules.hookData.After);

exports.ThemeBuilderSaveConditions = ThemeBuilderSaveConditions;
var _default = ThemeBuilderSaveConditions;
exports.default = _default;

/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.ThemeBuilderShowConditions = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var ThemeBuilderShowConditions = /*#__PURE__*/function (_$e$modules$hookData$) {
  (0, _inherits2.default)(ThemeBuilderShowConditions, _$e$modules$hookData$);

  var _super = (0, _createSuper2.default)(ThemeBuilderShowConditions);

  function ThemeBuilderShowConditions() {
    (0, _classCallCheck2.default)(this, ThemeBuilderShowConditions);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ThemeBuilderShowConditions, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/save/default';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'elementor-pro-theme-builder-show-conditions';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      var _args$force = args.force,
          force = _args$force === void 0 ? false : _args$force; // If force save, do not show conditions.

      if (force) {
        return false;
      }

      var showConditions = false;
      var themeBuilder = elementor.config.document.theme_builder;

      if (themeBuilder) {
        var hasConditions = themeBuilder.settings.conditions.length,
            hasLocation = themeBuilder.settings.location,
            isDraft = 'draft' === elementor.settings.page.model.get('post_status');

        if (hasLocation && (!hasConditions || isDraft)) {
          showConditions = true;
        }
      }

      return showConditions;
    }
  }, {
    key: "apply",
    value: function apply() {
      $e.route('theme-builder-publish/conditions');
      return false; // HookBreak.
    }
  }]);
  return ThemeBuilderShowConditions;
}($e.modules.hookData.Dependency);

exports.ThemeBuilderShowConditions = ThemeBuilderShowConditions;
var _default = ThemeBuilderShowConditions;
exports.default = _default;

/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.ThemeBuilderPreviewBreak = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var ThemeBuilderPreviewBreak = /*#__PURE__*/function (_$e$modules$hookData$) {
  (0, _inherits2.default)(ThemeBuilderPreviewBreak, _$e$modules$hookData$);

  var _super = (0, _createSuper2.default)(ThemeBuilderPreviewBreak);

  function ThemeBuilderPreviewBreak() {
    (0, _classCallCheck2.default)(this, ThemeBuilderPreviewBreak);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ThemeBuilderPreviewBreak, [{
    key: "getCommand",
    value: function getCommand() {
      return 'editor/documents/preview';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'elementor-pro-theme-builder-preview-break';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      // If preview is forced, do not break it.
      if (args.force) {
        return false;
      }

      return !!elementor.documents.get(args.id).config.theme_builder;
    }
  }, {
    key: "apply",
    value: function apply() {
      return false; // HookBreak.
    }
  }]);
  return ThemeBuilderPreviewBreak;
}($e.modules.hookData.Dependency);

exports.ThemeBuilderPreviewBreak = ThemeBuilderPreviewBreak;
var _default = ThemeBuilderPreviewBreak;
exports.default = _default;

/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "ThemeBuilderAddEditorUI", {
  enumerable: true,
  get: function get() {
    return _addEditorUi.ThemeBuilderAddEditorUI;
  }
});

_Object$defineProperty(exports, "ThemeBuilderRemoveEditorUI", {
  enumerable: true,
  get: function get() {
    return _removeEditorUi.ThemeBuilderRemoveEditorUI;
  }
});

_Object$defineProperty(exports, "ThemeBuilderToggleMenuConditions", {
  enumerable: true,
  get: function get() {
    return _toggleMenuConditions.ThemeBuilderToggleMenuConditions;
  }
});

_Object$defineProperty(exports, "ThemeBuilderFooterSaverAfterSave", {
  enumerable: true,
  get: function get() {
    return _after.ThemeBuilderFooterSaverAfterSave;
  }
});

var _addEditorUi = __webpack_require__(391);

var _removeEditorUi = __webpack_require__(396);

var _toggleMenuConditions = __webpack_require__(397);

var _after = __webpack_require__(398);

/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.ThemeBuilderAddEditorUI = void 0;

var _keys = _interopRequireDefault(__webpack_require__(47));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _view = _interopRequireDefault(__webpack_require__(392));

var ThemeBuilderAddEditorUI = /*#__PURE__*/function (_$e$modules$hookUI$Af) {
  (0, _inherits2.default)(ThemeBuilderAddEditorUI, _$e$modules$hookUI$Af);

  var _super = (0, _createSuper2.default)(ThemeBuilderAddEditorUI);

  function ThemeBuilderAddEditorUI() {
    (0, _classCallCheck2.default)(this, ThemeBuilderAddEditorUI);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ThemeBuilderAddEditorUI, [{
    key: "getCommand",
    value: function getCommand() {
      return 'editor/documents/open';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'elementor-pro-theme-builder-add-editor-ui';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      return elementor.documents.get(args.id).config.theme_builder;
    }
  }, {
    key: "apply",
    value: function apply() {
      if (elementor.panel) {
        this.addUI();
      } else {
        // First open, the panel is not available yet.
        elementor.once('preview:loaded', this.addUI.bind(this));
      }
    }
  }, {
    key: "addUI",
    value: function addUI() {
      this.addRepeaterControlView();
      this.addPanelFooterSubmenuItems();
      this.addPublishTabs();
    }
  }, {
    key: "addRepeaterControlView",
    value: function addRepeaterControlView() {
      elementor.addControlView('Conditions_repeater', __webpack_require__(394));
    }
  }, {
    key: "addPublishTabs",
    value: function addPublishTabs() {
      var component = $e.components.get('theme-builder-publish'),
          themeBuilderModuleConfig = elementor.config.document.theme_builder,
          settings = themeBuilderModuleConfig.settings;
      component.manager.conditionsModel = new elementorModules.editor.elements.models.BaseSettings(settings, {
        controls: themeBuilderModuleConfig.template_conditions.controls
      });
      component.addTab('conditions', {
        title: elementorPro.translate('conditions'),
        View: _view.default,
        viewOptions: {
          model: component.manager.conditionsModel,
          controls: component.manager.conditionsModel.controls
        },
        name: 'conditions',
        description: elementorPro.translate('conditions_publish_screen_description'),
        image: elementorPro.config.urls.modules + 'theme-builder/assets/images/conditions-tab.svg'
      });
    }
  }, {
    key: "addPanelFooterSubmenuItems",
    value: function addPanelFooterSubmenuItems() {
      var footerView = elementor.getPanelView().footer.currentView,
          behavior = footerView._behaviors[(0, _keys.default)(footerView.behaviors()).indexOf('saver')];

      footerView.ui.menuConditions = footerView.addSubMenuItem('saver-options', {
        before: 'save-template',
        name: 'conditions',
        icon: 'eicon-flow',
        title: elementorPro.translate('display_conditions'),
        callback: function callback() {
          return $e.route('theme-builder-publish/conditions');
        }
      });
      footerView.ui.menuConditions.toggle(!!elementor.config.document.theme_builder.settings.location);
      behavior.ui.buttonPreview.tipsy('disable').html(jQuery('#tmpl-elementor-theme-builder-button-preview').html()).addClass('elementor-panel-footer-theme-builder-buttons-wrapper elementor-toggle-state');
    }
  }]);
  return ThemeBuilderAddEditorUI;
}($e.modules.hookUI.After);

exports.ThemeBuilderAddEditorUI = ThemeBuilderAddEditorUI;
var _default = ThemeBuilderAddEditorUI;
exports.default = _default;

/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inlineControlsStack = __webpack_require__(393);

module.exports = inlineControlsStack.extend({
  id: 'elementor-theme-builder-conditions-view',
  template: '#tmpl-elementor-theme-builder-conditions-view',
  childViewContainer: '#elementor-theme-builder-conditions-controls',
  childViewOptions: function childViewOptions() {
    return {
      elementSettingsModel: this.model
    };
  }
});

/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(275);

__webpack_require__(234);

__webpack_require__(111);

module.exports = elementorModules.editor.views.ControlsStack.extend({
  activeTab: 'content',
  activeSection: 'settings',
  initialize: function initialize() {
    this.collection = new Backbone.Collection(_.values(this.options.controls));
  },
  filter: function filter(model) {
    if ('section' === model.get('type')) {
      return true;
    }

    var section = model.get('section');
    return !section || section === this.activeSection;
  },
  childViewOptions: function childViewOptions() {
    return {
      elementSettingsModel: this.model
    };
  }
});

/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _repeaterRow = _interopRequireDefault(__webpack_require__(395));

module.exports = elementor.modules.controls.Repeater.extend({
  childView: _repeaterRow.default,
  updateActiveRow: function updateActiveRow() {},
  initialize: function initialize() {
    elementor.modules.controls.Repeater.prototype.initialize.apply(this, arguments);
    this.config = elementor.config.document.theme_builder;
    this.updateConditionsOptions(this.config.settings.template_type);
  },
  updateConditionsOptions: function updateConditionsOptions(templateType) {
    var self = this,
        conditionType = self.config.types[templateType].condition_type,
        options = {};

    _([conditionType]).each(function (conditionId, conditionIndex) {
      var conditionConfig = self.config.conditions[conditionId],
          group = {
        label: conditionConfig.label,
        options: {}
      };
      group.options[conditionId] = conditionConfig.all_label;

      _(conditionConfig.sub_conditions).each(function (subConditionId) {
        group.options[subConditionId] = self.config.conditions[subConditionId].label;
      });

      options[conditionIndex] = group;
    });

    var fields = this.model.get('fields');
    fields[1].default = conditionType;

    if ('general' === conditionType) {
      fields[1].groups = options;
    } else {
      fields[2].groups = options;
    }
  },
  onRender: function onRender() {
    this.ui.btnAddRow.text(elementorPro.translate('add_condition'));
  }
});

/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(110);

module.exports = elementor.modules.controls.RepeaterRow.extend({
  template: '#tmpl-elementor-theme-builder-conditions-repeater-row',
  childViewContainer: '.elementor-theme-builder-conditions-repeater-row-controls',
  conflictCheckedOnFirstRender: false,
  id: function id() {
    return 'elementor-condition-id-' + this.model.get('_id');
  },
  onBeforeRender: function onBeforeRender() {
    var subNameModel = this.collection.findWhere({
      name: 'sub_name'
    }),
        subIdModel = this.collection.findWhere({
      name: 'sub_id'
    }),
        subConditionConfig = this.config.conditions[this.model.attributes.sub_name];
    subNameModel.attributes.groups = this.getOptions();

    if (subConditionConfig && subConditionConfig.controls) {
      _(subConditionConfig.controls).each(function (control) {
        subIdModel.set(control);
        subIdModel.set('name', 'sub_id');
      });
    }
  },
  initialize: function initialize() {
    elementor.modules.controls.RepeaterRow.prototype.initialize.apply(this, arguments);
    this.config = elementor.config.document.theme_builder;
  },
  updateOptions: function updateOptions() {
    if (this.model.changed.name) {
      this.model.set({
        sub_name: '',
        sub_id: ''
      });
    }

    if (this.model.changed.name || this.model.changed.sub_name) {
      this.model.set('sub_id', '', {
        silent: true
      });
      var subIdModel = this.collection.findWhere({
        name: 'sub_id'
      });
      subIdModel.set({
        type: 'select',
        options: {
          '': 'All'
        }
      });
      this.render();
    }

    if (this.model.changed.type) {
      this.setTypeAttribute();
    }
  },
  getOptions: function getOptions() {
    var self = this,
        conditionConfig = self.config.conditions[this.model.get('name')];

    if (!conditionConfig) {
      return;
    }

    var options = {
      '': conditionConfig.all_label
    };

    _(conditionConfig.sub_conditions).each(function (conditionId, conditionIndex) {
      var subConditionConfig = self.config.conditions[conditionId],
          group;

      if (!subConditionConfig) {
        return;
      }

      if (subConditionConfig.sub_conditions.length) {
        group = {
          label: subConditionConfig.label,
          options: {}
        };
        group.options[conditionId] = subConditionConfig.all_label;

        _(subConditionConfig.sub_conditions).each(function (subConditionId) {
          group.options[subConditionId] = self.config.conditions[subConditionId].label;
        }); // Use a sting key - to keep order


        options['key' + conditionIndex] = group;
      } else {
        options[conditionId] = subConditionConfig.label;
      }
    });

    return options;
  },
  setTypeAttribute: function setTypeAttribute() {
    var typeView = this.children.findByModel(this.collection.findWhere({
      name: 'type'
    }));
    typeView.$el.attr('data-elementor-condition-type', typeView.getControlValue());
  },
  // Moved from `modules/theme-builder/assets/js/editor/conditions/repeater.js`.
  checkConflicts: function checkConflicts() {
    var modelId = this.model.get('_id'),
        rowId = 'elementor-condition-id-' + modelId,
        errorMessageId = 'elementor-conditions-conflict-message-' + modelId,
        $error = jQuery('#' + errorMessageId); // On render - the row isn't exist, so don't cache it.

    jQuery('#' + rowId).removeClass('elementor-error');
    $error.remove();
    elementorPro.ajax.addRequest('theme_builder_conditions_check_conflicts', {
      unique_id: rowId,
      data: {
        condition: this.model.toJSON()
      },
      success: function success(data) {
        if (!_.isEmpty(data)) {
          jQuery('#' + rowId).addClass('elementor-error').after('<div id="' + errorMessageId + '" class="elementor-conditions-conflict-message">' + data + '</div>');
        }
      }
    });
  },
  onRender: function onRender() {
    var nameModel = this.collection.findWhere({
      name: 'name'
    }),
        subNameModel = this.collection.findWhere({
      name: 'sub_name'
    }),
        subIdModel = this.collection.findWhere({
      name: 'sub_id'
    }),
        nameView = this.children.findByModel(nameModel),
        subNameView = this.children.findByModel(subNameModel),
        subIdView = this.children.findByModel(subIdModel),
        conditionConfig = this.config.conditions[this.model.attributes.name],
        subConditionConfig = this.config.conditions[this.model.attributes.sub_name],
        typeConfig = this.config.types[this.config.settings.template_type];

    if (typeConfig.condition_type === nameView.getControlValue() && 'general' !== nameView.getControlValue() && !_.isEmpty(conditionConfig.sub_conditions)) {
      nameView.$el.hide();
    }

    if (!conditionConfig || _.isEmpty(conditionConfig.sub_conditions) && _.isEmpty(conditionConfig.controls) || !nameView.getControlValue() || 'general' === nameView.getControlValue()) {
      subNameView.$el.hide();
    }

    if (!subConditionConfig || _.isEmpty(subConditionConfig.controls) || !subNameView.getControlValue()) {
      subIdView.$el.hide();
    } // Avoid set a `single` for a-l-l singular types. (conflicted with 404 & custom cpt like Shops and Events plugins).


    if ('singular' === typeConfig.condition_type) {
      if ('' === subNameView.getControlValue()) {
        subNameView.setValue('post');
      }
    }

    this.setTypeAttribute();

    if (!this.conflictCheckedOnFirstRender) {
      this.checkConflicts();
      this.conflictCheckedOnFirstRender = true;
    }
  },
  onModelChange: function onModelChange() {
    this.updateOptions();
    this.checkConflicts();
  }
});

/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.ThemeBuilderRemoveEditorUI = void 0;

var _keys = _interopRequireDefault(__webpack_require__(47));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var ThemeBuilderRemoveEditorUI = /*#__PURE__*/function (_$e$modules$hookUI$Af) {
  (0, _inherits2.default)(ThemeBuilderRemoveEditorUI, _$e$modules$hookUI$Af);

  var _super = (0, _createSuper2.default)(ThemeBuilderRemoveEditorUI);

  function ThemeBuilderRemoveEditorUI() {
    (0, _classCallCheck2.default)(this, ThemeBuilderRemoveEditorUI);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ThemeBuilderRemoveEditorUI, [{
    key: "getCommand",
    value: function getCommand() {
      return 'editor/documents/unload';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'elementor-pro-theme-builder-remove-editor-ui';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      var document = args.document;
      return document.config.theme_builder;
    }
  }, {
    key: "apply",
    value: function apply() {
      this.removePanelFooterSubmenuItems();
      this.removePublishTabs();
    }
  }, {
    key: "removePanelFooterSubmenuItems",
    value: function removePanelFooterSubmenuItems() {
      var footerView = elementor.getPanelView().footer.currentView,
          behavior = footerView._behaviors[(0, _keys.default)(footerView.behaviors()).indexOf('saver')];

      elementor.getPanelView().footer.currentView.removeSubMenuItem('saver-options', {
        name: 'conditions'
      });
      behavior.ui.buttonPreview.tipsy('enable').removeClass('elementor-panel-footer-theme-builder-buttons-wrapper elementor-toggle-state');
    }
  }, {
    key: "removePublishTabs",
    value: function removePublishTabs() {
      var component = $e.components.get('theme-builder-publish');
      component.removeTab('conditions');
    }
  }]);
  return ThemeBuilderRemoveEditorUI;
}($e.modules.hookUI.After);

exports.ThemeBuilderRemoveEditorUI = ThemeBuilderRemoveEditorUI;
var _default = ThemeBuilderRemoveEditorUI;
exports.default = _default;

/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.ThemeBuilderToggleMenuConditions = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var ThemeBuilderToggleMenuConditions = /*#__PURE__*/function (_$e$modules$hookUI$Af) {
  (0, _inherits2.default)(ThemeBuilderToggleMenuConditions, _$e$modules$hookUI$Af);

  var _super = (0, _createSuper2.default)(ThemeBuilderToggleMenuConditions);

  function ThemeBuilderToggleMenuConditions() {
    (0, _classCallCheck2.default)(this, ThemeBuilderToggleMenuConditions);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ThemeBuilderToggleMenuConditions, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/settings';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'elementor-pro-theme-builder-toggle-menu-conditions';
    }
  }, {
    key: "getContainerType",
    value: function getContainerType() {
      return 'document';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      return args.settings && args.settings.location;
    }
  }, {
    key: "apply",
    value: function apply() {
      var themeBuilder = elementorPro.modules.themeBuilder;
      themeBuilder.ui.menuConditions.toggle(!!elementor.config.document.theme_builder.settings.location);
    }
  }]);
  return ThemeBuilderToggleMenuConditions;
}($e.modules.hookUI.After);

exports.ThemeBuilderToggleMenuConditions = ThemeBuilderToggleMenuConditions;
var _default = ThemeBuilderToggleMenuConditions;
exports.default = _default;

/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.ThemeBuilderFooterSaverAfterSave = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var ThemeBuilderFooterSaverAfterSave = /*#__PURE__*/function (_$e$modules$hookUI$Af) {
  (0, _inherits2.default)(ThemeBuilderFooterSaverAfterSave, _$e$modules$hookUI$Af);

  var _super = (0, _createSuper2.default)(ThemeBuilderFooterSaverAfterSave);

  function ThemeBuilderFooterSaverAfterSave() {
    (0, _classCallCheck2.default)(this, ThemeBuilderFooterSaverAfterSave);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ThemeBuilderFooterSaverAfterSave, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/save/save';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'theme-builder-footer-saver-after-save';
    }
  }, {
    key: "getConditions",
    value: function getConditions() {
      return elementor.config.document.support_site_editor;
    }
  }, {
    key: "apply",
    value: function apply(args, result) {
      var status = args.status;

      if (result.statusChanged) {
        this.onPageStatusChange(status);
      }
    }
  }, {
    key: "onPageStatusChange",
    value: function onPageStatusChange(newStatus) {
      if ('publish' !== newStatus) {
        return;
      }

      var options = {
        classes: 'e-theme-builder-save-toaster',
        message: elementor.config.document.panel.messages.publish_notification,
        buttons: [{
          name: 'open_site_editor',
          text: '<i class="eicon-external-link-square"></i><span class="e-theme-builder-toaster-button-text">' + elementorPro.translate('open_site_editor') + '</span>',
          callback: function callback() {
            $e.run('app/open');
          }
        }, {
          name: 'view_live_site',
          text: '<i class="eicon-preview-medium"></i><span class="e-theme-builder-toaster-button-text">' + elementorPro.translate('view_live_site') + '</span>',
          callback: function callback() {
            open(elementor.config.document.urls.permalink);
          }
        }]
      };
      elementor.notifications.showToast(options);
    }
  }]);
  return ThemeBuilderFooterSaverAfterSave;
}($e.modules.hookUI.After);

exports.ThemeBuilderFooterSaverAfterSave = ThemeBuilderFooterSaverAfterSave;

/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var _component = _interopRequireDefault(__webpack_require__(400));

var FormsModule = /*#__PURE__*/function (_elementorModules$edi) {
  (0, _inherits2.default)(FormsModule, _elementorModules$edi);

  var _super = (0, _createSuper2.default)(FormsModule);

  function FormsModule() {
    (0, _classCallCheck2.default)(this, FormsModule);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(FormsModule, [{
    key: "onElementorInit",
    value: function onElementorInit() {
      var ReplyToField = __webpack_require__(408),
          Recaptcha = __webpack_require__(409),
          MailerLite = __webpack_require__(410),
          Mailchimp = __webpack_require__(412),
          Drip = __webpack_require__(413),
          ActiveCampaign = __webpack_require__(414),
          GetResponse = __webpack_require__(415),
          ConvertKit = __webpack_require__(416);

      this.replyToField = new ReplyToField();
      this.mailchimp = new Mailchimp('form');
      this.recaptcha = new Recaptcha('form');
      this.drip = new Drip('form');
      this.activecampaign = new ActiveCampaign('form');
      this.getresponse = new GetResponse('form');
      this.convertkit = new ConvertKit('form');
      this.mailerlite = new MailerLite('form'); // Form fields

      var TimeField = __webpack_require__(417),
          DateField = __webpack_require__(418),
          AcceptanceField = __webpack_require__(419),
          UploadField = __webpack_require__(420),
          TelField = __webpack_require__(421);

      this.Fields = {
        time: new TimeField('form'),
        date: new DateField('form'),
        tel: new TelField('form'),
        acceptance: new AcceptanceField('form'),
        upload: new UploadField('form')
      };
      elementor.addControlView('Fields_map', __webpack_require__(422));
      elementor.addControlView('form-fields-repeater', __webpack_require__(423));
    }
  }, {
    key: "onElementorInitComponents",
    value: function onElementorInitComponents() {
      $e.components.register(new _component.default({
        manager: this
      }));
    }
  }]);
  return FormsModule;
}(elementorModules.editor.utils.Module);

exports.default = FormsModule;

/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(147);

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

var hooks = _interopRequireWildcard(__webpack_require__(401));

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
      return 'forms';
    }
  }, {
    key: "defaultHooks",
    value: function defaultHooks() {
      return this.importHooks(hooks);
    }
  }]);
  return Component;
}($e.modules.ComponentBase);

exports.default = Component;

/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(47);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var _data = __webpack_require__(402);

_Object$keys(_data).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _data[key];
    }
  });
});

var _ui = __webpack_require__(406);

_Object$keys(_ui).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ui[key];
    }
  });
});

/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "FormFieldsSanitizeCustomId", {
  enumerable: true,
  get: function get() {
    return _formFieldsSanitizeCustomId.FormFieldsSanitizeCustomId;
  }
});

_Object$defineProperty(exports, "FormFieldsSetCustomId", {
  enumerable: true,
  get: function get() {
    return _formFieldsSetCustomId.FormFieldsSetCustomId;
  }
});

_Object$defineProperty(exports, "FormFieldsAddFirstStep", {
  enumerable: true,
  get: function get() {
    return _formFieldsStep.FormFieldsAddFirstStep;
  }
});

var _formFieldsSanitizeCustomId = __webpack_require__(403);

var _formFieldsSetCustomId = __webpack_require__(404);

var _formFieldsStep = __webpack_require__(405);

/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.FormFieldsSanitizeCustomId = void 0;

__webpack_require__(19);

__webpack_require__(172);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(67));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59));

var FormFieldsSanitizeCustomId = /*#__PURE__*/function (_$e$modules$hookData$) {
  (0, _inherits2.default)(FormFieldsSanitizeCustomId, _$e$modules$hookData$);

  var _super = (0, _createSuper2.default)(FormFieldsSanitizeCustomId);

  function FormFieldsSanitizeCustomId() {
    var _this;

    (0, _classCallCheck2.default)(this, FormFieldsSanitizeCustomId);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "ID_SANITIZE_FILTER", /[^\w]/g);
    return _this;
  }

  (0, _createClass2.default)(FormFieldsSanitizeCustomId, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/settings';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'elementor-pro-forms-fields-sanitize-custom-id';
    }
  }, {
    key: "getContainerType",
    value: function getContainerType() {
      return 'repeater';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      return undefined !== args.settings.custom_id;
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers,
          settings = args.settings,
          custom_id = settings.custom_id; // eslint-disable-line camelcase

      if (custom_id.match(this.ID_SANITIZE_FILTER)) {
        // Re-render with old settings.
        containers.forEach(function (container) {
          var panelView = container.panel.getControlView('form_fields'),
              currentItemView = panelView.children.findByModel(container.settings),
              idView = currentItemView.children.find(function (view) {
            return 'custom_id' === view.model.get('name');
          });
          idView.render();
          idView.$el.find('input').focus();
        }); // Hook-Break.

        return false;
      }

      return true;
    }
  }]);
  return FormFieldsSanitizeCustomId;
}($e.modules.hookData.Dependency);

exports.FormFieldsSanitizeCustomId = FormFieldsSanitizeCustomId;
var _default = FormFieldsSanitizeCustomId;
exports.default = _default;

/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.FormFieldsSetCustomId = void 0;

__webpack_require__(19);

__webpack_require__(110);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var FormFieldsSetCustomId = /*#__PURE__*/function (_$e$modules$hookData$) {
  (0, _inherits2.default)(FormFieldsSetCustomId, _$e$modules$hookData$);

  var _super = (0, _createSuper2.default)(FormFieldsSetCustomId);

  function FormFieldsSetCustomId() {
    (0, _classCallCheck2.default)(this, FormFieldsSetCustomId);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(FormFieldsSetCustomId, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/repeater/insert';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'elementor-pro-forms-fields-set-custom-id';
    }
  }, {
    key: "getContainerType",
    value: function getContainerType() {
      return 'widget';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      return 'form_fields' === args.name;
    }
  }, {
    key: "apply",
    value: function apply(args, model) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers,
          isDuplicate = $e.commands.isCurrentFirstTrace('document/repeater/duplicate');
      containers.forEach(function (
      /** Container */
      container) {
        var itemContainer = container.repeaters.form_fields.children.find(function (childrenContainer) {
          // Sometimes, one of children is {Empty}.
          if (childrenContainer) {
            return model.get('_id') === childrenContainer.id;
          }

          return false;
        });

        if (!isDuplicate && itemContainer.settings.get('custom_id')) {
          return;
        }

        $e.run('document/elements/settings', {
          container: itemContainer,
          settings: {
            custom_id: 'field_' + itemContainer.id
          },
          options: {
            external: true
          }
        });
      });
      return true;
    }
  }]);
  return FormFieldsSetCustomId;
}($e.modules.hookData.After);

exports.FormFieldsSetCustomId = FormFieldsSetCustomId;
var _default = FormFieldsSetCustomId;
exports.default = _default;

/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.FormFieldsAddFirstStep = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var FormFieldsAddFirstStep = /*#__PURE__*/function (_$e$modules$hookData$) {
  (0, _inherits2.default)(FormFieldsAddFirstStep, _$e$modules$hookData$);

  var _super = (0, _createSuper2.default)(FormFieldsAddFirstStep);

  function FormFieldsAddFirstStep() {
    (0, _classCallCheck2.default)(this, FormFieldsAddFirstStep);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(FormFieldsAddFirstStep, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/settings';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'elementor-pro-forms-fields-first-step';
    }
  }, {
    key: "getContainerType",
    value: function getContainerType() {
      return 'repeater';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      return 'form' === containers[0].parent.parent.model.get('widgetType') && 'step' === args.settings.field_type;
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2;
      containers.forEach(function (
      /** Container */
      container) {
        var firstItem = container.parent.children[0];

        if ('step' === firstItem.settings.get('field_type')) {
          return;
        }

        $e.run('document/repeater/insert', {
          container: container.parent.parent,
          // widget
          name: 'form_fields',
          model: {
            field_type: 'step'
          },
          options: {
            at: 0,
            external: true
          }
        });
      });
      return true;
    }
  }]);
  return FormFieldsAddFirstStep;
}($e.modules.hookData.After);

exports.FormFieldsAddFirstStep = FormFieldsAddFirstStep;
var _default = FormFieldsAddFirstStep;
exports.default = _default;

/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "FormFieldsUpdateShortCode", {
  enumerable: true,
  get: function get() {
    return _formFieldsUpdateShortcode.FormFieldsUpdateShortCode;
  }
});

var _formFieldsUpdateShortcode = __webpack_require__(407);

/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.FormFieldsUpdateShortCode = void 0;

__webpack_require__(19);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var FormFieldsUpdateShortCode = /*#__PURE__*/function (_$e$modules$hookUI$Af) {
  (0, _inherits2.default)(FormFieldsUpdateShortCode, _$e$modules$hookUI$Af);

  var _super = (0, _createSuper2.default)(FormFieldsUpdateShortCode);

  function FormFieldsUpdateShortCode() {
    (0, _classCallCheck2.default)(this, FormFieldsUpdateShortCode);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(FormFieldsUpdateShortCode, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/settings';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'elementor-pro-forms-fields-update-shortcode';
    }
  }, {
    key: "getContainerType",
    value: function getContainerType() {
      return 'repeater';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      if (!$e.routes.isPartOf('panel/editor') || undefined === args.settings.custom_id) {
        return false;
      }

      return true;
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      containers.forEach(function (
      /** Container */
      container) {
        var panelView = container.panel.getControlView('form_fields'),
            currentItemView = panelView.children.find(function (view) {
          return container.id === view.model.get('_id');
        }),
            shortcodeView = currentItemView.children.find(function (view) {
          return 'shortcode' === view.model.get('name');
        });
        shortcodeView.render();
      });
    }
  }]);
  return FormFieldsUpdateShortCode;
}($e.modules.hookUI.After);

exports.FormFieldsUpdateShortCode = FormFieldsUpdateShortCode;
var _default = FormFieldsUpdateShortCode;
exports.default = _default;

/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var editor, editedModel, replyToControl;

  var setReplyToControl = function setReplyToControl() {
    replyToControl = editor.collection.findWhere({
      name: 'email_reply_to'
    });
  };

  var getReplyToView = function getReplyToView() {
    return editor.children.findByModelCid(replyToControl.cid);
  };

  var refreshReplyToElement = function refreshReplyToElement() {
    var replyToView = getReplyToView();

    if (replyToView) {
      replyToView.render();
    }
  };

  var updateReplyToOptions = function updateReplyToOptions() {
    var settingsModel = editedModel.get('settings'),
        emailModels = settingsModel.get('form_fields').where({
      field_type: 'email'
    }),
        emailFields;
    emailModels = _.reject(emailModels, {
      field_label: ''
    });
    emailFields = _.map(emailModels, function (model) {
      return {
        id: model.get('custom_id'),
        label: elementorPro.translate('x_field', [model.get('field_label')])
      };
    });
    replyToControl.set('options', {
      '': replyToControl.get('options')['']
    });

    _.each(emailFields, function (emailField) {
      replyToControl.get('options')[emailField.id] = emailField.label;
    });

    refreshReplyToElement();
  };

  var updateDefaultReplyTo = function updateDefaultReplyTo(settingsModel) {
    replyToControl.get('options')[''] = settingsModel.get('email_from');
    refreshReplyToElement();
  };

  var onFormFieldsChange = function onFormFieldsChange(changedModel) {
    // If it's repeater field
    if (changedModel.get('custom_id')) {
      if ('email' === changedModel.get('field_type')) {
        updateReplyToOptions();
      }
    }

    if (changedModel.changed.email_from) {
      updateDefaultReplyTo(changedModel);
    }
  };

  var onPanelShow = function onPanelShow(panel, model) {
    editor = panel.getCurrentPageView();
    editedModel = model;
    setReplyToControl();
    var settingsModel = editedModel.get('settings');
    settingsModel.on('change', onFormFieldsChange);
    updateDefaultReplyTo(settingsModel);
    updateReplyToOptions();
  };

  var init = function init() {
    elementor.hooks.addAction('panel/open_editor/widget/form', onPanelShow);
  };

  init();
};

/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(19);

module.exports = elementorModules.editor.utils.Module.extend({
  enqueueRecaptchaJs: function enqueueRecaptchaJs(url, type) {
    if (!elementorFrontend.elements.$body.find('[src="' + url + '"]').length) {
      elementorFrontend.elements.$body.append('<scr' + 'ipt src="' + url + '" id="recaptcha-' + type + '"</scri' + 'pt>');
    }
  },
  renderField: function renderField(inputField, item) {
    inputField += '<div class="elementor-field ' + item.field_type + ' ">';
    inputField += this.getDataSettings(item);
    inputField += '</div>';
    return inputField;
  },
  getDataSettings: function getDataSettings(item) {
    var config = elementorPro.config.forms[item.field_type],
        srcURL = 'https://www.google.com/recaptcha/api.js?render=explicit';

    if (!config.enabled) {
      return '<div class="elementor-alert elementor-alert-info">' + config.setup_message + '</div>';
    }

    var recaptchaData = 'data-sitekey="' + config.site_key + '" data-type="' + config.type + '"';

    switch (config.type) {
      case 'v3':
        recaptchaData += ' data-action="form" data-size="invisible" data-badge="' + item.recaptcha_badge + '"';
        break;

      case 'v2_checkbox':
        recaptchaData += ' data-theme="' + item.recaptcha_style + '"';
        recaptchaData += ' data-size="' + item.recaptcha_size + '"';
        break;
    }

    this.enqueueRecaptchaJs(srcURL, config.type);
    return '<div class="elementor-g-recaptcha' + _.escape(item.css_classes) + '" ' + recaptchaData + '></div>';
  },
  filterItem: function filterItem(item) {
    if ('recaptcha' === item.field_type) {
      item.field_label = false;
    }

    return item;
  },
  onInit: function onInit() {
    elementor.hooks.addFilter('elementor_pro/forms/content_template/item', this.filterItem);
    elementor.hooks.addFilter('elementor_pro/forms/content_template/field/recaptcha', this.renderField, 10, 2);
    elementor.hooks.addFilter('elementor_pro/forms/content_template/field/recaptcha_v3', this.renderField, 10, 2);
  }
});

/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseIntegrationModule = __webpack_require__(199);

module.exports = BaseIntegrationModule.extend({
  fields: {},
  getName: function getName() {
    return 'mailerlite';
  },
  onElementChange: function onElementChange(setting) {
    switch (setting) {
      case 'mailerlite_api_key_source':
      case 'mailerlite_custom_api_key':
        this.onMailerliteApiKeyUpdate();
        break;

      case 'mailerlite_group':
        this.updateFieldsMapping();
        break;
    }
  },
  onMailerliteApiKeyUpdate: function onMailerliteApiKeyUpdate() {
    var self = this,
        controlView = self.getEditorControlView('mailerlite_custom_api_key'),
        GlobalApiKeycontrolView = self.getEditorControlView('mailerlite_api_key_source');

    if ('default' !== GlobalApiKeycontrolView.getControlValue() && '' === controlView.getControlValue()) {
      self.updateOptions('mailerlite_group', []);
      self.getEditorControlView('mailerlite_group').setValue('');
      return;
    }

    self.addControlSpinner('mailerlite_group');
    var cacheKey = this.getCacheKey({
      type: 'groups',
      controls: [controlView.getControlValue(), GlobalApiKeycontrolView.getControlValue()]
    });
    self.getMailerliteCache('groups', 'groups', cacheKey).done(function (data) {
      self.updateOptions('mailerlite_group', data.groups);
      self.fields = data.fields;
    });
  },
  updateFieldsMapping: function updateFieldsMapping() {
    var controlView = this.getEditorControlView('mailerlite_group');

    if (!controlView.getControlValue()) {
      return;
    }

    var remoteFields = [{
      remote_label: elementor.translate('Email'),
      remote_type: 'email',
      remote_id: 'email',
      remote_required: true
    }, {
      remote_label: elementor.translate('Name'),
      remote_type: 'text',
      remote_id: 'name',
      remote_required: false
    }, {
      remote_label: elementor.translate('Last Name'),
      remote_type: 'text',
      remote_id: 'last_name',
      remote_required: false
    }, {
      remote_label: elementor.translate('Company'),
      remote_type: 'text',
      remote_id: 'company',
      remote_required: false
    }, {
      remote_label: elementor.translate('Phone'),
      remote_type: 'text',
      remote_id: 'phone',
      remote_required: false
    }, {
      remote_label: elementor.translate('Country'),
      remote_type: 'text',
      remote_id: 'country',
      remote_required: false
    }, {
      remote_label: elementor.translate('State'),
      remote_type: 'text',
      remote_id: 'state',
      remote_required: false
    }, {
      remote_label: elementor.translate('City'),
      remote_type: 'text',
      remote_id: 'city',
      remote_required: false
    }, {
      remote_label: elementor.translate('Zip'),
      remote_type: 'text',
      remote_id: 'zip',
      remote_required: false
    }];

    for (var field in this.fields) {
      if (this.fields.hasOwnProperty(field)) {
        remoteFields.push(this.fields[field]);
      }
    }

    this.getEditorControlView('mailerlite_fields_map').updateMap(remoteFields);
  },
  getMailerliteCache: function getMailerliteCache(type, action, cacheKey, requestArgs) {
    if (_.has(this.cache[type], cacheKey)) {
      var data = {};
      data[type] = this.cache[type][cacheKey];
      return jQuery.Deferred().resolve(data);
    }

    requestArgs = _.extend({}, requestArgs, {
      service: 'mailerlite',
      mailerlite_action: action,
      custom_api_key: this.getEditorControlView('mailerlite_custom_api_key').getControlValue(),
      api_key: this.getEditorControlView('mailerlite_api_key_source').getControlValue()
    });
    return this.fetchCache(type, cacheKey, requestArgs);
  },
  onSectionActive: function onSectionActive() {
    BaseIntegrationModule.prototype.onSectionActive.apply(this, arguments);
    this.onMailerliteApiKeyUpdate();
  }
});

/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(19);

module.exports = elementorModules.editor.utils.Module.extend({
  elementType: null,
  __construct: function __construct(elementType) {
    this.elementType = elementType;
    this.addEditorListener();
  },
  addEditorListener: function addEditorListener() {
    var self = this;

    if (self.onElementChange) {
      var eventName = 'change';

      if ('global' !== self.elementType) {
        eventName += ':' + self.elementType;
      }

      elementor.channels.editor.on(eventName, function (controlView, elementView) {
        self.onElementChange(controlView.model.get('name'), controlView, elementView);
      });
    }
  },
  addControlSpinner: function addControlSpinner(name) {
    var $el = this.getEditorControlView(name).$el,
        $input = $el.find(':input');

    if ($input.attr('disabled')) {
      return;
    }

    $input.attr('disabled', true);
    $el.find('.elementor-control-title').after('<span class="elementor-control-spinner"><i class="eicon-spinner eicon-animation-spin"></i>&nbsp;</span>');
  },
  removeControlSpinner: function removeControlSpinner(name) {
    var $controlEl = this.getEditorControlView(name).$el;
    $controlEl.find(':input').attr('disabled', false);
    $controlEl.find('.elementor-control-spinner').remove();
  },
  addSectionListener: function addSectionListener(section, callback) {
    var self = this;
    elementor.channels.editor.on('section:activated', function (sectionName, editor) {
      var model = editor.getOption('editedElementView').getEditModel(),
          currentElementType = model.get('elType'),
          _arguments = arguments;

      if ('widget' === currentElementType) {
        currentElementType = model.get('widgetType');
      }

      if (self.elementType === currentElementType && section === sectionName) {
        setTimeout(function () {
          callback.apply(self, _arguments);
        }, 10);
      }
    });
  }
});

/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseIntegrationModule = __webpack_require__(199);

module.exports = BaseIntegrationModule.extend({
  getName: function getName() {
    return 'mailchimp';
  },
  onElementChange: function onElementChange(setting) {
    switch (setting) {
      case 'mailchimp_api_key_source':
      case 'mailchimp_api_key':
        this.onApiUpdate();
        break;

      case 'mailchimp_list':
        this.onMailchimpListUpdate();
        break;
    }
  },
  onApiUpdate: function onApiUpdate() {
    var self = this,
        controlView = self.getEditorControlView('mailchimp_api_key'),
        GlobalApiKeycontrolView = self.getEditorControlView('mailchimp_api_key_source');

    if ('default' !== GlobalApiKeycontrolView.getControlValue() && '' === controlView.getControlValue()) {
      self.updateOptions('mailchimp_list', []);
      self.getEditorControlView('mailchimp_list').setValue('');
      return;
    }

    self.addControlSpinner('mailchimp_list');
    var cacheKey = this.getCacheKey({
      type: 'lists',
      controls: [controlView.getControlValue(), GlobalApiKeycontrolView.getControlValue()]
    });
    self.getMailchimpCache('lists', 'lists', cacheKey).done(function (data) {
      self.updateOptions('mailchimp_list', data.lists);
      self.updatMailchimpList();
    });
  },
  onMailchimpListUpdate: function onMailchimpListUpdate() {
    this.updateOptions('mailchimp_groups', []);
    this.getEditorControlView('mailchimp_groups').setValue('');
    this.updatMailchimpList();
  },
  updatMailchimpList: function updatMailchimpList() {
    var self = this,
        controlView = self.getEditorControlView('mailchimp_list');

    if (!controlView.getControlValue()) {
      return;
    }

    self.addControlSpinner('mailchimp_groups');
    this.getCacheKey({
      type: 'list_details',
      controls: [controlView.getControlValue()]
    });
    self.getMailchimpCache('list_details', 'list_details', controlView.getControlValue(), {
      mailchimp_list: controlView.getControlValue()
    }).done(function (data) {
      self.updateOptions('mailchimp_groups', data.list_details.groups);
      self.getEditorControlView('mailchimp_fields_map').updateMap(data.list_details.fields);
    });
  },
  getMailchimpCache: function getMailchimpCache(type, action, cacheKey, requestArgs) {
    if (_.has(this.cache[type], cacheKey)) {
      var data = {};
      data[type] = this.cache[type][cacheKey];
      return jQuery.Deferred().resolve(data);
    }

    requestArgs = _.extend({}, requestArgs, {
      service: 'mailchimp',
      mailchimp_action: action,
      api_key: this.getEditorControlView('mailchimp_api_key').getControlValue(),
      use_global_api_key: this.getEditorControlView('mailchimp_api_key_source').getControlValue()
    });
    return this.fetchCache(type, cacheKey, requestArgs);
  },
  onSectionActive: function onSectionActive() {
    BaseIntegrationModule.prototype.onSectionActive.apply(this, arguments);
    this.onApiUpdate();
  }
});

/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseIntegrationModule = __webpack_require__(199);

module.exports = BaseIntegrationModule.extend({
  getName: function getName() {
    return 'drip';
  },
  onElementChange: function onElementChange(setting) {
    switch (setting) {
      case 'drip_api_token_source':
      case 'drip_custom_api_token':
        this.onApiUpdate();
        break;

      case 'drip_account':
        this.onDripAccountsUpdate();
        break;
    }
  },
  onApiUpdate: function onApiUpdate() {
    var self = this,
        controlView = self.getEditorControlView('drip_api_token_source'),
        customControlView = self.getEditorControlView('drip_custom_api_token');

    if ('default' !== controlView.getControlValue() && '' === customControlView.getControlValue()) {
      self.updateOptions('drip_account', []);
      self.getEditorControlView('drip_account').setValue('');
      return;
    }

    self.addControlSpinner('drip_account');
    this.getCacheKey({
      type: 'accounts',
      controls: [controlView.getControlValue(), customControlView.getControlValue()]
    });
    self.getDripCache('accounts', 'accounts', controlView.getControlValue()).done(function (data) {
      self.updateOptions('drip_account', data.accounts);
    });
  },
  onDripAccountsUpdate: function onDripAccountsUpdate() {
    this.updateFieldsMapping();
  },
  updateFieldsMapping: function updateFieldsMapping() {
    var controlView = this.getEditorControlView('drip_account');

    if (!controlView.getControlValue()) {
      return;
    }

    var remoteFields = {
      remote_label: elementor.translate('Email'),
      remote_type: 'email',
      remote_id: 'email',
      remote_required: true
    };
    this.getEditorControlView('drip_fields_map').updateMap([remoteFields]);
  },
  getDripCache: function getDripCache(type, action, cacheKey, requestArgs) {
    if (_.has(this.cache[type], cacheKey)) {
      var data = {};
      data[type] = this.cache[type][cacheKey];
      return jQuery.Deferred().resolve(data);
    }

    requestArgs = _.extend({}, requestArgs, {
      service: 'drip',
      drip_action: action,
      api_token: this.getEditorControlView('drip_api_token_source').getControlValue(),
      custom_api_token: this.getEditorControlView('drip_custom_api_token').getControlValue()
    });
    return this.fetchCache(type, cacheKey, requestArgs);
  }
});

/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseIntegrationModule = __webpack_require__(199);

module.exports = BaseIntegrationModule.extend({
  fields: {},
  getName: function getName() {
    return 'activecampaign';
  },
  onElementChange: function onElementChange(setting) {
    switch (setting) {
      case 'activecampaign_api_credentials_source':
      case 'activecampaign_api_key':
      case 'activecampaign_api_url':
        this.onApiUpdate();
        break;

      case 'activecampaign_list':
        this.onListUpdate();
        break;
    }
  },
  onApiUpdate: function onApiUpdate() {
    var self = this,
        apikeyControlView = self.getEditorControlView('activecampaign_api_key'),
        apiUrlControlView = self.getEditorControlView('activecampaign_api_url'),
        apiCredControlView = self.getEditorControlView('activecampaign_api_credentials_source');

    if ('default' !== apiCredControlView.getControlValue() && ('' === apikeyControlView.getControlValue() || '' === apiUrlControlView.getControlValue())) {
      self.updateOptions('activecampaign_list', []);
      self.getEditorControlView('activecampaign_list').setValue('');
      return;
    }

    self.addControlSpinner('activecampaign_list');
    var cacheKey = this.getCacheKey({
      controls: [apiCredControlView.getControlValue(), apiUrlControlView.getControlValue(), apikeyControlView.getControlValue()]
    });
    self.getActiveCampaignCache('lists', 'activecampaign_list', cacheKey).done(function (data) {
      self.updateOptions('activecampaign_list', data.lists);
      self.fields = data.fields;
    });
  },
  onListUpdate: function onListUpdate() {
    this.updateFieldsMapping();
  },
  updateFieldsMapping: function updateFieldsMapping() {
    var controlView = this.getEditorControlView('activecampaign_list');

    if (!controlView.getControlValue()) {
      return;
    }

    var remoteFields = [{
      remote_label: elementor.translate('Email'),
      remote_type: 'email',
      remote_id: 'email',
      remote_required: true
    }, {
      remote_label: elementor.translate('First Name'),
      remote_type: 'text',
      remote_id: 'first_name',
      remote_required: false
    }, {
      remote_label: elementor.translate('Last Name'),
      remote_type: 'text',
      remote_id: 'last_name',
      remote_required: false
    }, {
      remote_label: elementor.translate('Phone'),
      remote_type: 'text',
      remote_id: 'phone',
      remote_required: false
    }, {
      remote_label: elementor.translate('Organization name'),
      remote_type: 'text',
      remote_id: 'orgname',
      remote_required: false
    }];

    for (var field in this.fields) {
      if (this.fields.hasOwnProperty(field)) {
        remoteFields.push(this.fields[field]);
      }
    }

    this.getEditorControlView('activecampaign_fields_map').updateMap(remoteFields);
  },
  getActiveCampaignCache: function getActiveCampaignCache(type, action, cacheKey, requestArgs) {
    if (_.has(this.cache[type], cacheKey)) {
      var data = {};
      data[type] = this.cache[type][cacheKey];
      return jQuery.Deferred().resolve(data);
    }

    requestArgs = _.extend({}, requestArgs, {
      service: 'activecampaign',
      activecampaign_action: action,
      api_key: this.getEditorControlView('activecampaign_api_key').getControlValue(),
      api_url: this.getEditorControlView('activecampaign_api_url').getControlValue(),
      api_cred: this.getEditorControlView('activecampaign_api_credentials_source').getControlValue()
    });
    return this.fetchCache(type, cacheKey, requestArgs);
  }
});

/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseIntegrationModule = __webpack_require__(199);

module.exports = BaseIntegrationModule.extend({
  getName: function getName() {
    return 'getresponse';
  },
  onElementChange: function onElementChange(setting) {
    switch (setting) {
      case 'getresponse_custom_api_key':
      case 'getresponse_api_key_source':
        this.onApiUpdate();
        break;

      case 'getresponse_list':
        this.onGetResonseListUpdate();
        break;
    }
  },
  onApiUpdate: function onApiUpdate() {
    var self = this,
        controlView = self.getEditorControlView('getresponse_api_key_source'),
        customControlView = self.getEditorControlView('getresponse_custom_api_key');

    if ('default' !== controlView.getControlValue() && '' === customControlView.getControlValue()) {
      self.updateOptions('getresponse_list', []);
      self.getEditorControlView('getresponse_list').setValue('');
      return;
    }

    self.addControlSpinner('getresponse_list');
    var cacheKey = this.getCacheKey({
      type: 'lists',
      controls: [controlView.getControlValue(), customControlView.getControlValue()]
    });
    self.getCache('lists', 'lists', cacheKey).done(function (data) {
      self.updateOptions('getresponse_list', data.lists);
    });
  },
  onGetResonseListUpdate: function onGetResonseListUpdate() {
    this.updatGetResonseList();
  },
  updatGetResonseList: function updatGetResonseList() {
    var self = this,
        controlView = self.getEditorControlView('getresponse_list');

    if (!controlView.getControlValue()) {
      return;
    }

    self.addControlSpinner('getresponse_fields_map');
    var cacheKey = this.getCacheKey({
      type: 'fields',
      controls: [controlView.getControlValue()]
    });
    self.getCache('fields', 'get_fields', cacheKey, {
      getresponse_list: controlView.getControlValue()
    }).done(function (data) {
      self.getEditorControlView('getresponse_fields_map').updateMap(data.fields);
    });
  },
  getCache: function getCache(type, action, cacheKey, requestArgs) {
    if (_.has(this.cache[type], cacheKey)) {
      var data = {};
      data[type] = this.cache[type][cacheKey];
      return jQuery.Deferred().resolve(data);
    }

    requestArgs = _.extend({}, requestArgs, {
      service: 'getresponse',
      getresponse_action: action,
      api_key: this.getEditorControlView('getresponse_api_key_source').getControlValue(),
      custom_api_key: this.getEditorControlView('getresponse_custom_api_key').getControlValue()
    });
    return this.fetchCache(type, cacheKey, requestArgs);
  },
  onSectionActive: function onSectionActive() {
    BaseIntegrationModule.prototype.onSectionActive.apply(this, arguments);
    this.updatGetResonseList();
  }
});

/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseIntegrationModule = __webpack_require__(199);

module.exports = BaseIntegrationModule.extend({
  getName: function getName() {
    return 'convertkit';
  },
  onElementChange: function onElementChange(setting) {
    switch (setting) {
      case 'convertkit_api_key_source':
      case 'convertkit_custom_api_key':
        this.onApiUpdate();
        break;

      case 'convertkit_form':
        this.onListUpdate();
        break;
    }
  },
  onApiUpdate: function onApiUpdate() {
    var self = this,
        apiKeyControlView = self.getEditorControlView('convertkit_api_key_source'),
        customApikeyControlView = self.getEditorControlView('convertkit_custom_api_key');

    if ('default' !== apiKeyControlView.getControlValue() && '' === customApikeyControlView.getControlValue()) {
      self.updateOptions('convertkit_form', []);
      self.getEditorControlView('convertkit_form').setValue('');
      return;
    }

    self.addControlSpinner('convertkit_form');
    var cacheKey = this.getCacheKey({
      type: 'data',
      controls: [apiKeyControlView.getControlValue(), customApikeyControlView.getControlValue()]
    });
    self.getConvertKitCache('data', 'convertkit_get_forms', cacheKey).done(function (data) {
      self.updateOptions('convertkit_form', data.data.forms);
      self.updateOptions('convertkit_tags', data.data.tags);
    });
  },
  onListUpdate: function onListUpdate() {
    this.updateFieldsMapping();
  },
  updateFieldsMapping: function updateFieldsMapping() {
    var controlView = this.getEditorControlView('convertkit_form');

    if (!controlView.getControlValue()) {
      return;
    }

    var remoteFields = [{
      remote_label: elementor.translate('Email'),
      remote_type: 'email',
      remote_id: 'email',
      remote_required: true
    }, {
      remote_label: elementor.translate('First Name'),
      remote_type: 'text',
      remote_id: 'first_name',
      remote_required: false
    }];
    this.getEditorControlView('convertkit_fields_map').updateMap(remoteFields);
  },
  getConvertKitCache: function getConvertKitCache(type, action, cacheKey, requestArgs) {
    if (_.has(this.cache[type], cacheKey)) {
      var data = {};
      data[type] = this.cache[type][cacheKey];
      return jQuery.Deferred().resolve(data);
    }

    requestArgs = _.extend({}, requestArgs, {
      service: 'convertkit',
      convertkit_action: action,
      api_key: this.getEditorControlView('convertkit_api_key_source').getControlValue(),
      custom_api_key: this.getEditorControlView('convertkit_custom_api_key').getControlValue()
    });
    return this.fetchCache(type, cacheKey, requestArgs);
  }
});

/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elementorModules.editor.utils.Module.extend({
  renderField: function renderField(inputField, item, i, settings) {
    var itemClasses = _.escape(item.css_classes),
        required = '',
        placeholder = '';

    if (item.required) {
      required = 'required';
    }

    if (item.placeholder) {
      placeholder = ' placeholder="' + item.placeholder + '"';
    }

    if ('yes' === item.use_native_time) {
      itemClasses += ' elementor-use-native';
    }

    return '<input size="1" type="time"' + placeholder + ' class="elementor-field-textual elementor-time-field elementor-field elementor-size-' + settings.input_size + ' ' + itemClasses + '" name="form_field_' + i + '" id="form_field_' + i + '" ' + required + ' >';
  },
  onInit: function onInit() {
    elementor.hooks.addFilter('elementor_pro/forms/content_template/field/time', this.renderField, 10, 4);
  }
});

/***/ }),
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elementorModules.editor.utils.Module.extend({
  renderField: function renderField(inputField, item, i, settings) {
    var itemClasses = _.escape(item.css_classes),
        required = '',
        min = '',
        max = '',
        placeholder = '';

    if (item.required) {
      required = 'required';
    }

    if (item.min_date) {
      min = ' min="' + item.min_date + '"';
    }

    if (item.max_date) {
      max = ' max="' + item.max_date + '"';
    }

    if (item.placeholder) {
      placeholder = ' placeholder="' + item.placeholder + '"';
    }

    if ('yes' === item.use_native_date) {
      itemClasses += ' elementor-use-native';
    }

    return '<input size="1"' + min + max + placeholder + ' pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" type="date" class="elementor-field-textual elementor-date-field elementor-field elementor-size-' + settings.input_size + ' ' + itemClasses + '" name="form_field_' + i + '" id="form_field_' + i + '" ' + required + ' >';
  },
  onInit: function onInit() {
    elementor.hooks.addFilter('elementor_pro/forms/content_template/field/date', this.renderField, 10, 4);
  }
});

/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elementorModules.editor.utils.Module.extend({
  renderField: function renderField(inputField, item, i, settings) {
    var itemClasses = _.escape(item.css_classes),
        required = '',
        label = '',
        checked = '';

    if (item.required) {
      required = 'required';
    }

    if (item.acceptance_text) {
      label = '<label for="form_field_' + i + '">' + item.acceptance_text + '</label>';
    }

    if (item.checked_by_default) {
      checked = ' checked="checked"';
    }

    return '<div class="elementor-field-subgroup">' + '<span class="elementor-field-option">' + '<input size="1" type="checkbox"' + checked + ' class="elementor-acceptance-field elementor-field elementor-size-' + settings.input_size + ' ' + itemClasses + '" name="form_field_' + i + '" id="form_field_' + i + '" ' + required + ' > ' + label + '</span></div>';
  },
  onInit: function onInit() {
    elementor.hooks.addFilter('elementor_pro/forms/content_template/field/acceptance', this.renderField, 10, 4);
  }
});

/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elementorModules.editor.utils.Module.extend({
  renderField: function renderField(inputField, item, i, settings) {
    var itemClasses = _.escape(item.css_classes),
        required = '',
        multiple = '',
        fieldName = 'form_field_';

    if (item.required) {
      required = 'required';
    }

    if (item.allow_multiple_upload) {
      multiple = ' multiple="multiple"';
      fieldName += '[]';
    }

    return '<input size="1"  type="file" class="elementor-file-field elementor-field elementor-size-' + settings.input_size + ' ' + itemClasses + '" name="' + fieldName + '" id="form_field_' + i + '" ' + required + multiple + ' >';
  },
  onInit: function onInit() {
    elementor.hooks.addFilter('elementor_pro/forms/content_template/field/upload', this.renderField, 10, 4);
  }
});

/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elementorModules.editor.utils.Module.extend({
  renderField: function renderField(inputField, item, i, settings) {
    var itemClasses = _.escape(item.css_classes),
        required = '',
        placeholder = '';

    if (item.required) {
      required = 'required';
    }

    if (item.placeholder) {
      placeholder = ' placeholder="' + item.placeholder + '"';
    }

    itemClasses = 'elementor-field-textual ' + itemClasses;
    return '<input size="1" type="' + item.field_type + '" class="elementor-field-textual elementor-field elementor-size-' + settings.input_size + ' ' + itemClasses + '" name="form_field_' + i + '" id="form_field_' + i + '" ' + required + ' ' + placeholder + ' pattern="[0-9()-]" >';
  },
  onInit: function onInit() {
    elementor.hooks.addFilter('elementor_pro/forms/content_template/field/tel', this.renderField, 10, 4);
  }
});

/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(19);

module.exports = elementor.modules.controls.Repeater.extend({
  onBeforeRender: function onBeforeRender() {
    this.$el.hide();
  },
  updateMap: function updateMap(fields) {
    var self = this,
        savedMapObject = {};
    self.collection.each(function (model) {
      savedMapObject[model.get('remote_id')] = model.get('local_id');
    });
    self.collection.reset();

    _.each(fields, function (field) {
      var model = {
        remote_id: field.remote_id,
        remote_label: field.remote_label,
        remote_type: field.remote_type ? field.remote_type : '',
        remote_required: field.remote_required ? field.remote_required : false,
        local_id: savedMapObject[field.remote_id] ? savedMapObject[field.remote_id] : ''
      };
      self.collection.add(model);
    });

    self.render();
  },
  onRender: function onRender() {
    elementor.modules.controls.Base.prototype.onRender.apply(this, arguments);
    var self = this;
    self.children.each(function (view) {
      var localFieldsControl = view.children.last(),
          options = {
        '': '- ' + elementor.translate('None') + ' -'
      },
          label = view.model.get('remote_label');

      if (view.model.get('remote_required')) {
        label += '<span class="elementor-required">*</span>';
      }

      _.each(self.elementSettingsModel.get('form_fields').models, function (model, index) {
        // If it's an email field, add only email fields from thr form
        var remoteType = view.model.get('remote_type');

        if ('text' !== remoteType && remoteType !== model.get('field_type')) {
          return;
        }

        options[model.get('custom_id')] = model.get('field_label') || 'Field #' + (index + 1);
      });

      localFieldsControl.model.set('label', label);
      localFieldsControl.model.set('options', options);
      localFieldsControl.render();
      view.$el.find('.elementor-repeater-row-tools').hide();
      view.$el.find('.elementor-repeater-row-controls').removeClass('elementor-repeater-row-controls').find('.elementor-control').css({
        paddingBottom: 0
      });
    });
    self.$el.find('.elementor-button-wrapper').remove();

    if (self.children.length) {
      self.$el.show();
    }
  }
});

/***/ }),
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _get3 = _interopRequireDefault(__webpack_require__(61));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(25));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _fieldsRepeaterRow = _interopRequireDefault(__webpack_require__(424));

module.exports = /*#__PURE__*/function (_elementor$modules$co) {
  (0, _inherits2.default)(_class, _elementor$modules$co);

  var _super = (0, _createSuper2.default)(_class);

  function _class() {
    (0, _classCallCheck2.default)(this, _class);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(_class, [{
    key: "className",
    value: function className() {
      var classes = (0, _get3.default)((0, _getPrototypeOf2.default)(_class.prototype), "className", this).call(this);
      classes += ' elementor-control-type-repeater';
      return classes;
    }
  }, {
    key: "getChildView",
    value: function getChildView() {
      return _fieldsRepeaterRow.default;
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var _get2,
          _this = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_get2 = (0, _get3.default)((0, _getPrototypeOf2.default)(_class.prototype), "initialize", this)).call.apply(_get2, [this].concat(args));

      var formFields = this.container.settings.get('form_fields');
      this.listenTo(formFields, 'change', function (model) {
        return _this.onFormFieldChange(model);
      }).listenTo(formFields, 'remove', function (model) {
        return _this.onFormFieldRemove(model);
      });
    }
  }, {
    key: "getFirstChild",
    value: function getFirstChild() {
      return this.children.findByModel(this.collection.models[0]);
    }
  }, {
    key: "lockFirstStep",
    value: function lockFirstStep() {
      var firstChild = this.getFirstChild();

      if ('step' !== firstChild.model.get('field_type')) {
        return;
      }

      var stepFields = this.collection.where({
        field_type: 'step'
      });

      if (1 < stepFields.length) {
        firstChild.toggleFieldTypeControl(false);
        firstChild.toggleTools(false);
      }

      firstChild.toggleSort(false);
    }
  }, {
    key: "onFormFieldChange",
    value: function onFormFieldChange(model) {
      var fieldType = model.changed.field_type;

      if (!fieldType || 'step' !== fieldType && 'step' !== model._previousAttributes.field_type) {
        return;
      }

      var isStep = 'step' === fieldType;
      this.children.findByModel(model).toggleStepField(isStep);
      this.onStepFieldChanged(isStep);
    }
  }, {
    key: "onFormFieldRemove",
    value: function onFormFieldRemove(model) {
      if ('step' === model.get('field_type')) {
        this.onStepFieldChanged(false);
      }
    }
  }, {
    key: "onStepFieldChanged",
    value: function onStepFieldChanged(isStep) {
      if (isStep) {
        this.lockFirstStep();
        return;
      }

      var stepFields = this.collection.where({
        field_type: 'step'
      });

      if (stepFields.length > 1) {
        return;
      }

      var firstChild = this.getFirstChild();

      if (1 === stepFields.length) {
        firstChild.toggleTools(true);
        firstChild.toggleFieldTypeControl(true);
        return;
      }

      firstChild.toggleSort(true);
    }
  }, {
    key: "onAddChild",
    value: function onAddChild(childView) {
      (0, _get3.default)((0, _getPrototypeOf2.default)(_class.prototype), "onAddChild", this).call(this, childView);

      if ('step' === childView.model.get('field_type')) {
        this.lockFirstStep();
        childView.toggleStepField(true);
      }
    }
  }]);
  return _class;
}(elementor.modules.controls.Repeater);

/***/ }),
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var _default = /*#__PURE__*/function (_elementor$modules$co) {
  (0, _inherits2.default)(_default, _elementor$modules$co);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(_default, [{
    key: "toggleFieldTypeControl",
    value: function toggleFieldTypeControl(show) {
      var fieldTypeModel = this.collection.findWhere({
        name: 'field_type'
      }),
          fieldTypeControl = this.children.findByModel(fieldTypeModel);
      fieldTypeControl.$el.toggle(show);
    }
  }, {
    key: "toggleStepField",
    value: function toggleStepField(isStep) {
      this.$el.toggleClass('elementor-repeater-row--form-step', isStep);
    }
  }, {
    key: "toggleTools",
    value: function toggleTools(show) {
      this.ui.removeButton.add(this.ui.duplicateButton).toggle(show);
    }
  }]);
  return _default;
}(elementor.modules.controls.RepeaterRow);

exports.default = _default;

/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var _component = _interopRequireDefault(__webpack_require__(426));

var Module = /*#__PURE__*/function (_elementorModules$edi) {
  (0, _inherits2.default)(Module, _elementorModules$edi);

  var _super = (0, _createSuper2.default)(Module);

  function Module() {
    (0, _classCallCheck2.default)(this, Module);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Module, [{
    key: "onElementorInit",
    value: function onElementorInit() {
      $e.components.register(new _component.default());
    }
  }]);
  return Module;
}(elementorModules.editor.utils.Module);

exports.default = Module;

/***/ }),
/* 426 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(147);

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

var dataHooks = _interopRequireWildcard(__webpack_require__(427));

var _default = /*#__PURE__*/function (_$e$modules$Component) {
  (0, _inherits2.default)(_default, _$e$modules$Component);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(_default, [{
    key: "getNamespace",
    value: function getNamespace() {
      return 'screenshots';
    }
  }, {
    key: "defaultHooks",
    value: function defaultHooks() {
      return this.importHooks(dataHooks);
    }
  }]);
  return _default;
}($e.modules.ComponentBase);

exports.default = _default;

/***/ }),
/* 427 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "DeleteScreenshot", {
  enumerable: true,
  get: function get() {
    return _deleteScreenshot.DeleteScreenshot;
  }
});

var _deleteScreenshot = __webpack_require__(428);

/***/ }),
/* 428 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.DeleteScreenshot = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var DeleteScreenshot = /*#__PURE__*/function (_$e$modules$hookData$) {
  (0, _inherits2.default)(DeleteScreenshot, _$e$modules$hookData$);

  var _super = (0, _createSuper2.default)(DeleteScreenshot);

  function DeleteScreenshot() {
    (0, _classCallCheck2.default)(this, DeleteScreenshot);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(DeleteScreenshot, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/save/save';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      var status = args.status,
          config = elementor.documents.getCurrent().config;
      return 'publish' === status && config.support_site_editor;
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'document/save/save::delete-screenshot';
    }
  }, {
    key: "apply",
    value: function apply() {
      var postId = elementor.documents.getCurrent().id;
      return elementorCommon.ajax.addRequest('screenshot_delete', {
        unique_id: "delete_screenshot_".concat(postId),
        data: {
          post_id: postId
        }
      });
    }
  }]);
  return DeleteScreenshot;
}($e.modules.hookData.After);

exports.DeleteScreenshot = DeleteScreenshot;
var _default = DeleteScreenshot;
exports.default = _default;

/***/ }),
/* 429 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var _component = _interopRequireDefault(__webpack_require__(239));

var _commands = __webpack_require__(181);

var Module = /*#__PURE__*/function (_elementorModules$edi) {
  (0, _inherits2.default)(Module, _elementorModules$edi);

  var _super = (0, _createSuper2.default)(Module);

  function Module() {
    (0, _classCallCheck2.default)(this, Module);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Module, [{
    key: "onElementorInit",
    value: function onElementorInit() {
      var config = elementor.documents.getCurrent().config;

      if (config.support_site_editor) {
        $e.components.register(new _component.default());
        $e.data.deleteCache($e.components.get(_component.default.namespace), _commands.Templates.signature);
      }
    }
  }]);
  return Module;
}(elementorModules.editor.utils.Module);

exports.default = Module;

/***/ }),
/* 430 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elementorModules.editor.utils.Module.extend({
  onElementorPreviewLoaded: function onElementorPreviewLoaded() {
    elementor.addControlView('Query', __webpack_require__(431));
  }
});

/***/ }),
/* 431 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(19);

module.exports = elementor.modules.controls.Select2.extend({
  cache: null,
  isTitlesReceived: false,
  getSelect2Placeholder: function getSelect2Placeholder() {
    return {
      id: '',
      text: elementorPro.translate('all')
    };
  },
  getControlValueByName: function getControlValueByName(controlName) {
    var name = this.model.get('group_prefix') + controlName;
    return this.elementSettingsModel.attributes[name];
  },
  getQueryDataDeprecated: function getQueryDataDeprecated() {
    return {
      filter_type: this.model.get('filter_type'),
      object_type: this.model.get('object_type'),
      include_type: this.model.get('include_type'),
      query: this.model.get('query')
    };
  },
  getQueryData: function getQueryData() {
    // Use a clone to keep model data unchanged:
    var autocomplete = elementorCommon.helpers.cloneObject(this.model.get('autocomplete'));

    if (_.isEmpty(autocomplete.query)) {
      autocomplete.query = {};
    } // Specific for Group_Control_Query


    if ('cpt_tax' === autocomplete.object) {
      autocomplete.object = 'tax';

      if (_.isEmpty(autocomplete.query) || _.isEmpty(autocomplete.query.post_type)) {
        autocomplete.query.post_type = this.getControlValueByName('post_type');
      }
    }

    return {
      autocomplete: autocomplete
    };
  },
  getSelect2DefaultOptions: function getSelect2DefaultOptions() {
    var self = this;
    return jQuery.extend(elementor.modules.controls.Select2.prototype.getSelect2DefaultOptions.apply(this, arguments), {
      ajax: {
        transport: function transport(params, success, failure) {
          var bcFormat = !_.isEmpty(self.model.get('filter_type'));
          var data = {},
              action = 'panel_posts_control_filter_autocomplete';

          if (bcFormat) {
            data = self.getQueryDataDeprecated();
            action = 'panel_posts_control_filter_autocomplete_deprecated';
          } else {
            data = self.getQueryData();
          }

          data.q = params.data.q;
          return elementorPro.ajax.addRequest(action, {
            data: data,
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
    });
  },
  getValueTitles: function getValueTitles() {
    var self = this,
        data = {},
        bcFormat = !_.isEmpty(this.model.get('filter_type'));
    var ids = this.getControlValue(),
        action = 'query_control_value_titles',
        filterTypeName = 'autocomplete',
        filterType = {};

    if (bcFormat) {
      filterTypeName = 'filter_type';
      filterType = this.model.get(filterTypeName).object;
      data.filter_type = filterType;
      data.object_type = self.model.get('object_type');
      data.include_type = self.model.get('include_type');
      data.unique_id = '' + self.cid + filterType;
      action = 'query_control_value_titles_deprecated';
    } else {
      filterType = this.model.get(filterTypeName).object;
      data.get_titles = self.getQueryData().autocomplete;
      data.unique_id = '' + self.cid + filterType;
    }

    if (!ids || !filterType) {
      return;
    }

    if (!_.isArray(ids)) {
      ids = [ids];
    }

    elementorCommon.ajax.loadObjects({
      action: action,
      ids: ids,
      data: data,
      before: function before() {
        self.addControlSpinner();
      },
      success: function success(ajaxData) {
        self.isTitlesReceived = true;
        self.model.set('options', ajaxData);
        self.render();
      }
    });
  },
  addControlSpinner: function addControlSpinner() {
    this.ui.select.prop('disabled', true);
    this.$el.find('.elementor-control-title').after('<span class="elementor-control-spinner">&nbsp;<i class="eicon-spinner eicon-animation-spin"></i>&nbsp;</span>');
  },
  onReady: function onReady() {
    if (!this.isTitlesReceived) {
      this.getValueTitles();
    }
  }
});

/***/ }),
/* 432 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elementorModules.editor.utils.Module.extend({
  onElementorPreviewLoaded: function onElementorPreviewLoaded() {
    var EditButton = __webpack_require__(433);

    this.editButton = new EditButton();
  }
});

/***/ }),
/* 433 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(19);

module.exports = function () {
  var self = this;

  self.onPanelShow = function (panel) {
    var model = panel.content.currentView.collection.findWhere({
      name: 'template_id'
    });
    self.templateIdView = panel.content.currentView.children.findByModelCid(model.cid); // Change Edit link on render & on change template.

    self.templateIdView.elementSettingsModel.on('change', self.onTemplateIdChange);
    self.templateIdView.on('render', self.onTemplateIdChange);
  };

  self.onTemplateIdChange = function () {
    var templateID = self.templateIdView.elementSettingsModel.get('template_id'),
        $editButton = self.templateIdView.$el.find('.elementor-edit-template');

    if (!templateID) {
      $editButton.remove();
      return;
    }

    var editUrl = ElementorConfig.home_url + '?p=' + templateID + '&elementor';

    if ($editButton.length) {
      $editButton.prop('href', editUrl);
    } else {
      $editButton = jQuery('<a />', {
        target: '_blank',
        class: 'elementor-button elementor-button-default elementor-edit-template',
        href: editUrl,
        html: '<i class="eicon-pencil" /> ' + elementorPro.config.i18n.edit_template
      });
      self.templateIdView.$el.find('.elementor-control-input-wrapper').after($editButton);
    }
  };

  self.init = function () {
    elementor.hooks.addAction('panel/open_editor/widget/template', self.onPanelShow);
  };

  self.init();
};

/***/ }),
/* 434 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(19);

module.exports = elementorModules.editor.utils.Module.extend({
  onElementorInit: function onElementorInit() {
    elementor.channels.editor.on('section:activated', this.onSectionActivated);
  },
  onSectionActivated: function onSectionActivated(sectionName, editor) {
    var editedElement = editor.getOption('editedElementView');

    if ('flip-box' !== editedElement.model.get('widgetType')) {
      return;
    }

    var isSideBSection = -1 !== ['section_side_b_content', 'section_style_b'].indexOf(sectionName);
    editedElement.$el.toggleClass('elementor-flip-box--flipped', isSideBSection);
    var $backLayer = editedElement.$el.find('.elementor-flip-box__back');

    if (isSideBSection) {
      $backLayer.css('transition', 'none');
    }

    if (!isSideBSection) {
      setTimeout(function () {
        $backLayer.css('transition', '');
      }, 10);
    }
  }
});

/***/ }),
/* 435 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elementorModules.editor.utils.Module.extend({
  config: elementorPro.config.shareButtonsNetworks,
  networksClassDictionary: {
    google: 'fab fa-google-plus',
    pocket: 'fab fa-get-pocket',
    email: 'fas fa-envelope'
  },
  getNetworkClass: function getNetworkClass(networkName) {
    var networkClass = this.networksClassDictionary[networkName] || 'fab fa-' + networkName;

    if (elementor.config.icons_update_needed) {
      networkClass = 'fa ' + networkClass;
    }

    return networkClass;
  },
  getNetworkTitle: function getNetworkTitle(buttonSettings) {
    return buttonSettings.text || this.config[buttonSettings.button].title;
  },
  hasCounter: function hasCounter(networkName, settings) {
    return 'icon' !== settings.view && 'yes' === settings.show_counter && this.config[networkName].has_counter;
  }
});

/***/ }),
/* 436 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elementorModules.editor.utils.Module.extend({
  onElementorInit: function onElementorInit() {
    var FontsManager = __webpack_require__(437);

    this.assets = {
      font: new FontsManager()
    };
  }
});

/***/ }),
/* 437 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(19);

module.exports = elementorModules.Module.extend({
  _enqueuedFonts: [],
  _enqueuedTypekit: false,
  onFontChange: function onFontChange(fontType, font) {
    if ('custom' !== fontType && 'typekit' !== fontType) {
      return;
    }

    if (-1 !== this._enqueuedFonts.indexOf(font)) {
      return;
    }

    if ('typekit' === fontType && this._enqueuedTypekit) {
      return;
    }

    this.getCustomFont(fontType, font);
  },
  getCustomFont: function getCustomFont(fontType, font) {
    elementorPro.ajax.addRequest('assets_manager_panel_action_data', {
      unique_id: 'font_' + fontType + font,
      data: {
        service: 'font',
        type: fontType,
        font: font
      },
      success: function success(data) {
        if (data.font_face) {
          elementor.$previewContents.find('style:last').after('<style type="text/css">' + data.font_face + '</style>');
        }

        if (data.font_url) {
          elementor.$previewContents.find('link:last').after('<link href="' + data.font_url + '" rel="stylesheet" type="text/css">');
        }
      }
    });

    this._enqueuedFonts.push(font);

    if ('typekit' === fontType) {
      this._enqueuedTypekit = true;
    }
  },
  onInit: function onInit() {
    elementor.channels.editor.on('font:insertion', this.onFontChange.bind(this));
  }
});

/***/ }),
/* 438 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elementorModules.editor.utils.Module.extend({
  onElementorPreviewLoaded: function onElementorPreviewLoaded() {
    var CommentsSkin = __webpack_require__(439);

    this.commentsSkin = new CommentsSkin();
  }
});

/***/ }),
/* 439 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var self = this;

  self.onPanelShow = function (panel, model) {
    var settingsModel = model.get('settings'); // If no skins - set the skin to `theme_comments`.

    if (!settingsModel.controls._skin.default) {
      settingsModel.set('_skin', 'theme_comments');
    }
  };

  self.init = function () {
    elementor.hooks.addAction('panel/open_editor/widget/post-comments', self.onPanelShow);
  };

  self.init();
};

/***/ })
/******/ ]);
//# sourceMappingURL=editor.js.map
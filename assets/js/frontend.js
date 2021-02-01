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
/******/ 	return __webpack_require__(__webpack_require__.s = 477);
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
/* 11 */,
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
/* 50 */,
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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(106);

var _Reflect$get = __webpack_require__(189);

var superPropBase = __webpack_require__(192);

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
/* 112 */,
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
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(70)('keys');
var uid = __webpack_require__(69);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 152 */,
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
/* 157 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
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
/* 169 */,
/* 170 */,
/* 171 */,
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
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(60);
var toIObject = __webpack_require__(77);
var arrayIndexOf = __webpack_require__(156)(false);
var IE_PROTO = __webpack_require__(151)('IE_PROTO');

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
/* 178 */
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
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(23);
var toLength = __webpack_require__(48);
var advanceStringIndex = __webpack_require__(114);
var regExpExec = __webpack_require__(108);

// @@match logic
__webpack_require__(109)('match', 1, function (defined, MATCH, $match, maybeCallNative) {
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
/* 180 */,
/* 181 */,
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
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
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
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(190);

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(191);
module.exports = __webpack_require__(2).Reflect.get;


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(36);
var getPrototypeOf = __webpack_require__(67);
var has = __webpack_require__(16);
var $export = __webpack_require__(8);
var isObject = __webpack_require__(10);
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
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(26);

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),
/* 193 */
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
/* 194 */,
/* 195 */
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
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(261);

/***/ }),
/* 197 */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 198 */,
/* 199 */,
/* 200 */,
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
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(17);
var inheritIfRequired = __webpack_require__(235);
var dP = __webpack_require__(39).f;
var gOPN = __webpack_require__(239).f;
var isRegExp = __webpack_require__(150);
var $flags = __webpack_require__(90);
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(22) && (!CORRECT_NEW || __webpack_require__(33)(function () {
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
  __webpack_require__(34)(global, 'RegExp', $RegExp);
}

__webpack_require__(193)('RegExp');


/***/ }),
/* 203 */,
/* 204 */
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
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
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
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(22) && /./g.flags != 'g') __webpack_require__(39).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(90)
});


/***/ }),
/* 234 */,
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(24);
var setPrototypeOf = __webpack_require__(236).set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),
/* 236 */
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
        set = __webpack_require__(64)(Function.call, __webpack_require__(237).f(Object.prototype, '__proto__').set, 2);
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
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(238);
var createDesc = __webpack_require__(89);
var toIObject = __webpack_require__(77);
var toPrimitive = __webpack_require__(101);
var has = __webpack_require__(60);
var IE8_DOM_DEFINE = __webpack_require__(99);
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
/* 238 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(177);
var hiddenKeys = __webpack_require__(157).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__(150);
var anObject = __webpack_require__(23);
var speciesConstructor = __webpack_require__(178);
var advanceStringIndex = __webpack_require__(114);
var toLength = __webpack_require__(48);
var callRegExpExec = __webpack_require__(108);
var regexpExec = __webpack_require__(105);
var fails = __webpack_require__(33);
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(109)('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
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
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
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
/* 246 */,
/* 247 */,
/* 248 */
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
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(179);

__webpack_require__(19);

module.exports = elementorModules.frontend.handlers.Base.extend({
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

/***/ }),
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
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
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
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
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _parseFloat2 = _interopRequireDefault(__webpack_require__(500));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var Scroll = /*#__PURE__*/function () {
  function Scroll() {
    (0, _classCallCheck2.default)(this, Scroll);
  }

  (0, _createClass2.default)(Scroll, null, [{
    key: "scrollObserver",

    /**
     * @param {object} obj
     * @param {number} obj.sensitivity - Value between 0-100 - Will determine the intersection trigger points on the element
     * @param {function} obj.callback - Will be triggered on each intersection point between the element and the viewport top/bottom
     * @param {string} obj.offset - Offset between the element intersection points and the viewport, written like in CSS: '-50% 0 -25%'
     * @param {HTMLElement} obj.root - The element that the events will be relative to, if 'null' will be relative to the viewport
     */
    value: function scrollObserver(obj) {
      var lastScrollY = 0; // Generating threshholds points along the animation height
      // More threshholds points = more trigger points of the callback

      var buildThreshholds = function buildThreshholds() {
        var sensitivityPercentage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var threshholds = [];

        if (sensitivityPercentage > 0 && sensitivityPercentage <= 100) {
          var increment = 100 / sensitivityPercentage;

          for (var i = 0; i <= 100; i += increment) {
            threshholds.push(i / 100);
          }
        } else {
          threshholds.push(0);
        }

        return threshholds;
      };

      var options = {
        root: obj.root || null,
        rootMargin: obj.offset || '0px',
        threshold: buildThreshholds(obj.sensitivity)
      };

      function handleIntersect(entries, observer) {
        var currentScrollY = entries[0].boundingClientRect.y,
            isInViewport = entries[0].isIntersecting,
            intersectionScrollDirection = currentScrollY < lastScrollY ? 'down' : 'up',
            scrollPercentage = Math.abs((0, _parseFloat2.default)((entries[0].intersectionRatio * 100).toFixed(2)));
        obj.callback({
          sensitivity: obj.sensitivity,
          isInViewport: isInViewport,
          scrollPercentage: scrollPercentage,
          intersectionScrollDirection: intersectionScrollDirection
        });
        lastScrollY = currentScrollY;
      }

      return new IntersectionObserver(handleIntersect, options);
    }
    /**
     * @param {jQuery Element} $element
     * @param {object} offsetObj
     * @param {number} offsetObj.start - Offset start value in percentages
     * @param {number} offsetObj.end - Offset end value in percentages
     */

  }, {
    key: "getElementViewportPercentage",
    value: function getElementViewportPercentage($element) {
      var offsetObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var elementOffset = $element[0].getBoundingClientRect(),
          offsetStart = offsetObj.start || 0,
          offsetEnd = offsetObj.end || 0,
          windowStartOffset = window.innerHeight * offsetStart / 100,
          windowEndOffset = window.innerHeight * offsetEnd / 100,
          y1 = elementOffset.top - window.innerHeight,
          y2 = elementOffset.top + windowStartOffset + $element.height(),
          startPosition = 0 - y1 + windowStartOffset,
          endPosition = y2 - y1 + windowEndOffset,
          percent = Math.max(0, Math.min(startPosition / endPosition, 1));
      return (0, _parseFloat2.default)((percent * 100).toFixed(2));
    }
    /**
     * @param {object} offsetObj
     * @param {number} offsetObj.start - Offset start value in percentages
     * @param {number} offsetObj.end - Offset end value in percentages
     * @param {number} limitPageHeight - Will limit the page height calculation
     */

  }, {
    key: "getPageScrollPercentage",
    value: function getPageScrollPercentage() {
      var offsetObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var limitPageHeight = arguments.length > 1 ? arguments[1] : undefined;
      var offsetStart = offsetObj.start || 0,
          offsetEnd = offsetObj.end || 0,
          initialPageHeight = limitPageHeight || document.documentElement.scrollHeight - document.documentElement.clientHeight,
          heightOffset = initialPageHeight * offsetStart / 100,
          pageRange = initialPageHeight + heightOffset + initialPageHeight * offsetEnd / 100,
          scrollPos = document.documentElement.scrollTop + document.body.scrollTop + heightOffset;
      return scrollPos / pageRange * 100;
    }
  }]);
  return Scroll;
}();

exports.default = Scroll;

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(248);


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(172);

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
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */
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

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(68));

var _get2 = _interopRequireDefault(__webpack_require__(61));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(26));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59));

var _scroll = _interopRequireDefault(__webpack_require__(282));

var _default = /*#__PURE__*/function (_elementorModules$Vie) {
  (0, _inherits2.default)(_default, _elementorModules$Vie);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onInsideViewport", function () {
      _this.run();

      _this.animationFrameRequest = requestAnimationFrame(_this.onInsideViewport);
    });
    return _this;
  }

  (0, _createClass2.default)(_default, [{
    key: "__construct",
    value: function __construct(options) {
      this.motionFX = options.motionFX;

      if (!this.intersectionObservers) {
        this.setElementInViewportObserver();
      }
    }
  }, {
    key: "setElementInViewportObserver",
    value: function setElementInViewportObserver() {
      var _this2 = this;

      this.intersectionObserver = _scroll.default.scrollObserver({
        callback: function callback(event) {
          if (event.isInViewport) {
            _this2.onInsideViewport();
          } else {
            _this2.removeAnimationFrameRequest();
          }
        }
      });
      this.intersectionObserver.observe(this.motionFX.elements.$parent[0]);
    }
  }, {
    key: "runCallback",
    value: function runCallback() {
      var callback = this.getSettings('callback');
      callback.apply(void 0, arguments);
    }
  }, {
    key: "removeIntersectionObserver",
    value: function removeIntersectionObserver() {
      if (this.intersectionObserver) {
        this.intersectionObserver.unobserve(this.motionFX.elements.$parent[0]);
      }
    }
  }, {
    key: "removeAnimationFrameRequest",
    value: function removeAnimationFrameRequest() {
      if (this.animationFrameRequest) {
        cancelAnimationFrame(this.animationFrameRequest);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.removeAnimationFrameRequest();
      this.removeIntersectionObserver();
    }
  }, {
    key: "onInit",
    value: function onInit() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(_default.prototype), "onInit", this).call(this);
    }
  }]);
  return _default;
}(elementorModules.ViewModule);

exports.default = _default;

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _regenerator = _interopRequireDefault(__webpack_require__(283));

__webpack_require__(248);

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(284));

__webpack_require__(179);

__webpack_require__(19);

module.exports = elementorModules.frontend.handlers.Base.extend({
  getDefaultSettings: function getDefaultSettings() {
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
  },
  getDefaultElements: function getDefaultElements() {
    var selectors = this.getSettings('selectors');
    var elements = {
      $swiperContainer: this.$element.find(selectors.swiperContainer)
    };
    elements.$mainSwiperSlides = elements.$swiperContainer.find(selectors.swiperSlide);
    return elements;
  },
  getSlidesCount: function getSlidesCount() {
    return this.elements.$mainSwiperSlides.length;
  },
  getInitialSlide: function getInitialSlide() {
    var editSettings = this.getEditSettings();
    return editSettings.activeItemIndex ? editSettings.activeItemIndex - 1 : 0;
  },
  getEffect: function getEffect() {
    return this.getElementSettings('effect');
  },
  getDeviceSlidesPerView: function getDeviceSlidesPerView(device) {
    var slidesPerViewKey = 'slides_per_view' + ('desktop' === device ? '' : '_' + device);
    return Math.min(this.getSlidesCount(), +this.getElementSettings(slidesPerViewKey) || this.getSettings('slidesPerView')[device]);
  },
  getSlidesPerView: function getSlidesPerView(device) {
    if ('slide' === this.getEffect()) {
      return this.getDeviceSlidesPerView(device);
    }

    return 1;
  },
  getDesktopSlidesPerView: function getDesktopSlidesPerView() {
    return this.getSlidesPerView('desktop');
  },
  getTabletSlidesPerView: function getTabletSlidesPerView() {
    return this.getSlidesPerView('tablet');
  },
  getMobileSlidesPerView: function getMobileSlidesPerView() {
    return this.getSlidesPerView('mobile');
  },
  getDeviceSlidesToScroll: function getDeviceSlidesToScroll(device) {
    var slidesToScrollKey = 'slides_to_scroll' + ('desktop' === device ? '' : '_' + device);
    return Math.min(this.getSlidesCount(), +this.getElementSettings(slidesToScrollKey) || 1);
  },
  getSlidesToScroll: function getSlidesToScroll(device) {
    if ('slide' === this.getEffect()) {
      return this.getDeviceSlidesToScroll(device);
    }

    return 1;
  },
  getDesktopSlidesToScroll: function getDesktopSlidesToScroll() {
    return this.getSlidesToScroll('desktop');
  },
  getTabletSlidesToScroll: function getTabletSlidesToScroll() {
    return this.getSlidesToScroll('tablet');
  },
  getMobileSlidesToScroll: function getMobileSlidesToScroll() {
    return this.getSlidesToScroll('mobile');
  },
  getSpaceBetween: function getSpaceBetween(device) {
    var propertyName = 'space_between';

    if (device && 'desktop' !== device) {
      propertyName += '_' + device;
    }

    return this.getElementSettings(propertyName).size || 0;
  },
  getSwiperOptions: function getSwiperOptions() {
    var elementSettings = this.getElementSettings(); // TODO: Temp migration for old saved values since 2.2.0

    if ('progress' === elementSettings.pagination) {
      elementSettings.pagination = 'progressbar';
    }

    var swiperOptions = {
      grabCursor: true,
      initialSlide: this.getInitialSlide(),
      slidesPerView: this.getDesktopSlidesPerView(),
      slidesPerGroup: this.getDesktopSlidesToScroll(),
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
        slidesPerView: this.getTabletSlidesPerView(),
        slidesPerGroup: this.getTabletSlidesToScroll(),
        spaceBetween: this.getSpaceBetween('tablet')
      };
      breakpointsSettings[breakpoints.md - 1] = {
        slidesPerView: this.getMobileSlidesPerView(),
        slidesPerGroup: this.getMobileSlidesToScroll(),
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
  },
  updateSpaceBetween: function updateSpaceBetween(swiper, propertyName) {
    var deviceMatch = propertyName.match('space_between_(.*)'),
        device = deviceMatch ? deviceMatch[1] : 'desktop',
        newSpaceBetween = this.getSpaceBetween(device),
        breakpoints = elementorFrontend.config.breakpoints;

    if ('desktop' !== device) {
      var breakpointDictionary = {
        tablet: breakpoints.lg - 1,
        mobile: breakpoints.md - 1
      };
      swiper.params.breakpoints[breakpointDictionary[device]].spaceBetween = newSpaceBetween;
    } else {
      swiper.originalParams.spaceBetween = newSpaceBetween;
    }

    swiper.params.spaceBetween = newSpaceBetween;
    swiper.update();
  },
  onInit: function () {
    var _onInit = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _this = this;

      var elementSettings,
          $swiperContainer,
          swiperOptions,
          swiperInstance,
          asyncSwiper,
          _args = arguments;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, _args);
              elementSettings = this.getElementSettings();
              this.swipers = {};

              if (!(1 >= this.getSlidesCount())) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return");

            case 5:
              $swiperContainer = this.elements.$swiperContainer, swiperOptions = this.getSwiperOptions();

              if (!('undefined' === typeof Swiper)) {
                _context.next = 13;
                break;
              }

              asyncSwiper = elementorFrontend.utils.swiper;
              _context.next = 10;
              return new asyncSwiper($swiperContainer, swiperOptions);

            case 10:
              swiperInstance = _context.sent;
              _context.next = 14;
              break;

            case 13:
              swiperInstance = new Swiper($swiperContainer, swiperOptions);

            case 14:
              this.swiper = swiperInstance; // Expose the swiper instance in the frontend

              this.elements.$swiperContainer.data('swiper', this.swiper);

              if (elementSettings.pause_on_hover) {
                this.elements.$swiperContainer.on({
                  mouseenter: function mouseenter() {
                    _this.swiper.autoplay.stop();
                  },
                  mouseleave: function mouseleave() {
                    _this.swiper.autoplay.start();
                  }
                });
              }

            case 17:
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
  onElementChange: function onElementChange(propertyName) {
    if (1 >= this.getSlidesCount()) {
      return;
    }

    if (0 === propertyName.indexOf('width')) {
      this.swiper.update();
    }

    if (0 === propertyName.indexOf('space_between')) {
      this.updateSpaceBetween(this.swiper, propertyName);
    }
  },
  onEditSettingsChange: function onEditSettingsChange(propertyName) {
    if (1 >= this.getSlidesCount()) {
      return;
    }

    if ('activeItemIndex' === propertyName) {
      this.swiper.slideToLoop(this.getEditSettings('activeItemIndex') - 1);
    }
  }
});

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Base = __webpack_require__(297),
    TestimonialCarousel;

TestimonialCarousel = Base.extend({
  getDefaultSettings: function getDefaultSettings() {
    var defaultSettings = Base.prototype.getDefaultSettings.apply(this, arguments);
    defaultSettings.slidesPerView = {
      desktop: 1,
      tablet: 1,
      mobile: 1
    };

    if (defaultSettings.loop) {
      defaultSettings.loopedSlides = this.getSlidesCount();
    }

    return defaultSettings;
  },
  getEffect: function getEffect() {
    return 'slide';
  }
});

module.exports = function ($scope) {
  new TestimonialCarousel({
    $element: $scope
  });
};

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PostsHandler = __webpack_require__(249);

module.exports = PostsHandler.extend({
  getSkinPrefix: function getSkinPrefix() {
    return 'cards_';
  }
});

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var StickyHandler = elementorModules.frontend.handlers.Base.extend({
  bindEvents: function bindEvents() {
    elementorFrontend.addListenerOnce(this.getUniqueHandlerID() + 'sticky', 'resize', this.run);
  },
  unbindEvents: function unbindEvents() {
    elementorFrontend.removeListeners(this.getUniqueHandlerID() + 'sticky', 'resize', this.run);
  },
  isStickyInstanceActive: function isStickyInstanceActive() {
    return undefined !== this.$element.data('sticky');
  },
  activate: function activate() {
    var elementSettings = this.getElementSettings(),
        stickyOptions = {
      to: elementSettings.sticky,
      offset: elementSettings.sticky_offset,
      effectsOffset: elementSettings.sticky_effects_offset,
      classes: {
        sticky: 'elementor-sticky',
        stickyActive: 'elementor-sticky--active elementor-section--handles-inside',
        stickyEffects: 'elementor-sticky--effects',
        spacer: 'elementor-sticky__spacer'
      }
    },
        $wpAdminBar = elementorFrontend.elements.$wpAdminBar;

    if (elementSettings.sticky_parent) {
      stickyOptions.parent = '.elementor-widget-wrap';
    }

    if ($wpAdminBar.length && 'top' === elementSettings.sticky && 'fixed' === $wpAdminBar.css('position')) {
      stickyOptions.offset += $wpAdminBar.height();
    }

    this.$element.sticky(stickyOptions);
  },
  deactivate: function deactivate() {
    if (!this.isStickyInstanceActive()) {
      return;
    }

    this.$element.sticky('destroy');
  },
  run: function run(refresh) {
    if (!this.getElementSettings('sticky')) {
      this.deactivate();
      return;
    }

    var currentDeviceMode = elementorFrontend.getCurrentDeviceMode(),
        activeDevices = this.getElementSettings('sticky_on');

    if (-1 !== activeDevices.indexOf(currentDeviceMode)) {
      if (true === refresh) {
        this.reactivate();
      } else if (!this.isStickyInstanceActive()) {
        this.activate();
      }
    } else {
      this.deactivate();
    }
  },
  reactivate: function reactivate() {
    this.deactivate();
    this.activate();
  },
  onElementChange: function onElementChange(settingKey) {
    if (-1 !== ['sticky', 'sticky_on'].indexOf(settingKey)) {
      this.run(true);
    }

    if (-1 !== ['sticky_offset', 'sticky_effects_offset', 'sticky_parent'].indexOf(settingKey)) {
      this.reactivate();
    }
  },
  onInit: function onInit() {
    elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);
    this.run();
  },
  onDestroy: function onDestroy() {
    elementorModules.frontend.handlers.Base.prototype.onDestroy.apply(this, arguments);
    this.deactivate();
  }
});

module.exports = function ($scope) {
  new StickyHandler({
    $element: $scope
  });
};

/***/ }),
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
/* 349 */,
/* 350 */,
/* 351 */,
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
/* 477 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _get2 = _interopRequireDefault(__webpack_require__(61));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(26));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _frontend = _interopRequireDefault(__webpack_require__(478));

var _frontend2 = _interopRequireDefault(__webpack_require__(496));

var _frontend3 = _interopRequireDefault(__webpack_require__(506));

var _frontend4 = _interopRequireDefault(__webpack_require__(508));

var _frontend5 = _interopRequireDefault(__webpack_require__(510));

var ElementorProFrontend = /*#__PURE__*/function (_elementorModules$Vie) {
  (0, _inherits2.default)(ElementorProFrontend, _elementorModules$Vie);

  var _super = (0, _createSuper2.default)(ElementorProFrontend);

  function ElementorProFrontend() {
    (0, _classCallCheck2.default)(this, ElementorProFrontend);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ElementorProFrontend, [{
    key: "onInit",
    value: function onInit() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(ElementorProFrontend.prototype), "onInit", this).call(this);
      this.config = ElementorProFrontendConfig;
      this.modules = {};
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      jQuery(window).on('elementor/frontend/init', this.onElementorFrontendInit.bind(this));
    }
  }, {
    key: "initModules",
    value: function initModules() {
      var _this = this;

      var handlers = {
        animatedText: __webpack_require__(513),
        carousel: __webpack_require__(515),
        countdown: __webpack_require__(517),
        form: __webpack_require__(519),
        gallery: _frontend3.default,
        nav_menu: __webpack_require__(526),
        motionFX: _frontend2.default,
        popup: _frontend.default,
        posts: __webpack_require__(528),
        share_buttons: __webpack_require__(530),
        slides: __webpack_require__(532),
        social: __webpack_require__(534),
        sticky: __webpack_require__(536),
        themeBuilder: __webpack_require__(537),
        themeElements: __webpack_require__(542),
        woocommerce: __webpack_require__(544),
        tableOfContents: _frontend5.default,
        lottie: _frontend4.default
      };
      jQuery.each(handlers, function (moduleName, ModuleClass) {
        _this.modules[moduleName] = new ModuleClass();
      }); // TODO: BC Since 2.9.0

      this.modules.linkActions = {
        addAction: function addAction() {
          var _elementorFrontend$ut;

          (_elementorFrontend$ut = elementorFrontend.utils.urlActions).addAction.apply(_elementorFrontend$ut, arguments);
        }
      };
    }
  }, {
    key: "onElementorFrontendInit",
    value: function onElementorFrontendInit() {
      this.initModules();
    }
  }]);
  return ElementorProFrontend;
}(elementorModules.ViewModule);

window.elementorProFrontend = new ElementorProFrontend();

/***/ }),
/* 478 */
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

var _document = _interopRequireDefault(__webpack_require__(479));

var _formsAction = _interopRequireDefault(__webpack_require__(495));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this);
    elementorFrontend.hooks.addAction('elementor/frontend/documents-manager/init-classes', _this.addDocumentClass);
    elementorFrontend.hooks.addAction('frontend/element_ready/form.default', _formsAction.default);
    elementorFrontend.on('components:init', function () {
      return _this.onElementorFrontendComponentsInit();
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
    key: "onElementorFrontendComponentsInit",
    value: function onElementorFrontendComponentsInit() {
      elementorFrontend.utils.urlActions.addAction('popup:open', this.showPopup.bind(this));
      elementorFrontend.utils.urlActions.addAction('popup:close', this.closePopup.bind(this));
    }
  }]);
  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),
/* 479 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _keys = _interopRequireDefault(__webpack_require__(47));

__webpack_require__(19);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _get2 = _interopRequireDefault(__webpack_require__(61));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(26));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _triggers = _interopRequireDefault(__webpack_require__(480));

var _timing = _interopRequireDefault(__webpack_require__(487));

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
            return elementorFrontend.elements.$document.trigger('elementor/popup/' + eventType, id, _this2);
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
    value: function onInit() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(_default.prototype), "onInit", this).call(this);
      this.initModal();

      if (this.isEdit) {
        this.showModal();
        return;
      }

      this.$element.show().remove();
      this.elementHTML = this.$element[0].outerHTML;

      if (elementorFrontend.isEditMode()) {
        return;
      }

      if (elementorFrontend.isWPPreviewMode() && elementorFrontend.config.post.id === this.getSettings('id')) {
        this.showModal();
        return;
      }

      this.startTiming();
    }
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
/* 480 */
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

var _pageLoad = _interopRequireDefault(__webpack_require__(481));

var _scrolling = _interopRequireDefault(__webpack_require__(482));

var _scrollingTo = _interopRequireDefault(__webpack_require__(483));

var _click = _interopRequireDefault(__webpack_require__(484));

var _inactivity = _interopRequireDefault(__webpack_require__(485));

var _exitIntent = _interopRequireDefault(__webpack_require__(486));

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
/* 481 */
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

var _base = _interopRequireDefault(__webpack_require__(204));

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
/* 482 */
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

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(68));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(204));

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
/* 483 */
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

var _base = _interopRequireDefault(__webpack_require__(204));

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
/* 484 */
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

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(68));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(204));

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
/* 485 */
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

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(68));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(204));

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
/* 486 */
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

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(68));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(204));

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
/* 487 */
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

var _pageViews = _interopRequireDefault(__webpack_require__(488));

var _sessions = _interopRequireDefault(__webpack_require__(489));

var _url = _interopRequireDefault(__webpack_require__(490));

var _sources = _interopRequireDefault(__webpack_require__(491));

var _loggedIn = _interopRequireDefault(__webpack_require__(492));

var _devices = _interopRequireDefault(__webpack_require__(493));

var _times = _interopRequireDefault(__webpack_require__(494));

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
      times: _times.default
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
/* 488 */
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

var _base = _interopRequireDefault(__webpack_require__(195));

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
/* 489 */
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

var _base = _interopRequireDefault(__webpack_require__(195));

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
/* 490 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(202);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(195));

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
/* 491 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(104);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(195));

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
/* 492 */
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

var _base = _interopRequireDefault(__webpack_require__(195));

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
/* 493 */
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

var _base = _interopRequireDefault(__webpack_require__(195));

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
/* 494 */
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

var _base = _interopRequireDefault(__webpack_require__(195));

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
/* 495 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(19);

var PopupFormActions = elementorModules.frontend.handlers.Base.extend({
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

module.exports = function ($scope) {
  new PopupFormActions({
    $element: $scope
  });
};

/***/ }),
/* 496 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _handler = _interopRequireDefault(__webpack_require__(497));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this);
    elementorFrontend.hooks.addAction('frontend/element_ready/global', function ($element) {
      elementorFrontend.elementsHandler.addHandler(_handler.default, {
        $element: $element
      });
    });
    return _this;
  }

  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),
/* 497 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(19);

var _keys = _interopRequireDefault(__webpack_require__(47));

var _typeof2 = _interopRequireDefault(__webpack_require__(86));

__webpack_require__(179);

__webpack_require__(202);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _get3 = _interopRequireDefault(__webpack_require__(61));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(26));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _motionFx = _interopRequireDefault(__webpack_require__(498));

var _default = /*#__PURE__*/function (_elementorModules$fro) {
  (0, _inherits2.default)(_default, _elementorModules$fro);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(_default, [{
    key: "__construct",
    value: function __construct() {
      var _get2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_get2 = (0, _get3.default)((0, _getPrototypeOf2.default)(_default.prototype), "__construct", this)).call.apply(_get2, [this].concat(args));

      this.toggle = elementorFrontend.debounce(this.toggle, 200);
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      elementorFrontend.elements.$window.on('resize', this.toggle);
    }
  }, {
    key: "unbindEvents",
    value: function unbindEvents() {
      elementorFrontend.elements.$window.off('resize', this.toggle);
    }
  }, {
    key: "initEffects",
    value: function initEffects() {
      this.effects = {
        translateY: {
          interaction: 'scroll',
          actions: ['translateY']
        },
        translateX: {
          interaction: 'scroll',
          actions: ['translateX']
        },
        rotateZ: {
          interaction: 'scroll',
          actions: ['rotateZ']
        },
        scale: {
          interaction: 'scroll',
          actions: ['scale']
        },
        opacity: {
          interaction: 'scroll',
          actions: ['opacity']
        },
        blur: {
          interaction: 'scroll',
          actions: ['blur']
        },
        mouseTrack: {
          interaction: 'mouseMove',
          actions: ['translateXY']
        },
        tilt: {
          interaction: 'mouseMove',
          actions: ['tilt']
        }
      };
    }
  }, {
    key: "prepareOptions",
    value: function prepareOptions(name) {
      var _this = this;

      var elementSettings = this.getElementSettings(),
          type = 'motion_fx' === name ? 'element' : 'background',
          interactions = {};
      jQuery.each(elementSettings, function (key, value) {
        var keyRegex = new RegExp('^' + name + '_(.+?)_effect'),
            keyMatches = key.match(keyRegex);

        if (!keyMatches || !value) {
          return;
        }

        var options = {},
            effectName = keyMatches[1];
        jQuery.each(elementSettings, function (subKey, subValue) {
          var subKeyRegex = new RegExp(name + '_' + effectName + '_(.+)'),
              subKeyMatches = subKey.match(subKeyRegex);

          if (!subKeyMatches) {
            return;
          }

          var subFieldName = subKeyMatches[1];

          if ('effect' === subFieldName) {
            return;
          }

          if ('object' === (0, _typeof2.default)(subValue)) {
            subValue = (0, _keys.default)(subValue.sizes).length ? subValue.sizes : subValue.size;
          }

          options[subKeyMatches[1]] = subValue;
        });
        var effect = _this.effects[effectName],
            interactionName = effect.interaction;

        if (!interactions[interactionName]) {
          interactions[interactionName] = {};
        }

        effect.actions.forEach(function (action) {
          return interactions[interactionName][action] = options;
        });
      });
      var $element = this.$element,
          $dimensionsElement;
      var elementType = this.getElementType();

      if ('element' === type && 'section' !== elementType) {
        $dimensionsElement = $element;
        var childElementSelector;

        if ('column' === elementType) {
          childElementSelector = elementorFrontend.config.legacyMode.elementWrappers ? '.elementor-column-wrap' : '.elementor-widget-wrap';
        } else {
          childElementSelector = '.elementor-widget-container';
        }

        $element = $element.find('> ' + childElementSelector);
      }

      var options = {
        type: type,
        interactions: interactions,
        $element: $element,
        $dimensionsElement: $dimensionsElement,
        refreshDimensions: this.isEdit,
        range: elementSettings[name + '_range'],
        classes: {
          element: 'elementor-motion-effects-element',
          parent: 'elementor-motion-effects-parent',
          backgroundType: 'elementor-motion-effects-element-type-background',
          container: 'elementor-motion-effects-container',
          layer: 'elementor-motion-effects-layer',
          perspective: 'elementor-motion-effects-perspective'
        }
      };

      if (!options.range && 'fixed' === this.getCurrentDeviceSetting('_position')) {
        options.range = 'page';
      }

      if ('fixed' === this.getCurrentDeviceSetting('_position')) {
        options.isFixedPosition = true;
      }

      if ('background' === type && 'column' === this.getElementType()) {
        options.addBackgroundLayerTo = ' > .elementor-element-populated';
      }

      return options;
    }
  }, {
    key: "activate",
    value: function activate(name) {
      var options = this.prepareOptions(name);

      if (jQuery.isEmptyObject(options.interactions)) {
        return;
      }

      this[name] = new _motionFx.default(options);
    }
  }, {
    key: "deactivate",
    value: function deactivate(name) {
      if (this[name]) {
        this[name].destroy();
        delete this[name];
      }
    }
  }, {
    key: "toggle",
    value: function toggle() {
      var _this2 = this;

      var currentDeviceMode = elementorFrontend.getCurrentDeviceMode(),
          elementSettings = this.getElementSettings();
      ['motion_fx', 'background_motion_fx'].forEach(function (name) {
        var devices = elementSettings[name + '_devices'],
            isCurrentModeActive = !devices || -1 !== devices.indexOf(currentDeviceMode);

        if (isCurrentModeActive && (elementSettings[name + '_motion_fx_scrolling'] || elementSettings[name + '_motion_fx_mouse'])) {
          if (_this2[name]) {
            _this2.refreshInstance(name);
          } else {
            _this2.activate(name);
          }
        } else {
          _this2.deactivate(name);
        }
      });
    }
  }, {
    key: "refreshInstance",
    value: function refreshInstance(instanceName) {
      var instance = this[instanceName];

      if (!instance) {
        return;
      }

      var preparedOptions = this.prepareOptions(instanceName);
      instance.setSettings(preparedOptions);
      instance.refresh();
    }
  }, {
    key: "onInit",
    value: function onInit() {
      (0, _get3.default)((0, _getPrototypeOf2.default)(_default.prototype), "onInit", this).call(this);
      this.initEffects();
      this.toggle();
    }
  }, {
    key: "onElementChange",
    value: function onElementChange(propertyName) {
      var _this3 = this;

      if (/motion_fx_((scrolling)|(mouse)|(devices))$/.test(propertyName)) {
        this.toggle();
        return;
      }

      var propertyMatches = propertyName.match('.*?motion_fx');

      if (propertyMatches) {
        var instanceName = propertyMatches[0];
        this.refreshInstance(instanceName);

        if (!this[instanceName]) {
          this.activate(instanceName);
        }
      }

      if (/^_position/.test(propertyName)) {
        ['motion_fx', 'background_motion_fx'].forEach(function (instanceName) {
          _this3.refreshInstance(instanceName);
        });
      }
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      var _this4 = this;

      (0, _get3.default)((0, _getPrototypeOf2.default)(_default.prototype), "onDestroy", this).call(this);
      ['motion_fx', 'background_motion_fx'].forEach(function (name) {
        _this4.deactivate(name);
      });
    }
  }]);
  return _default;
}(elementorModules.frontend.handlers.Base);

exports.default = _default;

/***/ }),
/* 498 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(19);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _get2 = _interopRequireDefault(__webpack_require__(61));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(26));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _scroll = _interopRequireDefault(__webpack_require__(499));

var _mouseMove = _interopRequireDefault(__webpack_require__(504));

var _actions = _interopRequireDefault(__webpack_require__(505));

var _default = /*#__PURE__*/function (_elementorModules$Vie) {
  (0, _inherits2.default)(_default, _elementorModules$Vie);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(_default, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        type: 'element',
        $element: null,
        $dimensionsElement: null,
        addBackgroundLayerTo: null,
        interactions: {},
        refreshDimensions: false,
        range: 'viewport',
        classes: {
          element: 'motion-fx-element',
          parent: 'motion-fx-parent',
          backgroundType: 'motion-fx-element-type-background',
          container: 'motion-fx-container',
          layer: 'motion-fx-layer',
          perspective: 'motion-fx-perspective'
        }
      };
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      this.onWindowResize = this.onWindowResize.bind(this);
      elementorFrontend.elements.$window.on('resize', this.onWindowResize);
    }
  }, {
    key: "unbindEvents",
    value: function unbindEvents() {
      elementorFrontend.elements.$window.off('resize', this.onWindowResize);
    }
  }, {
    key: "addBackgroundLayer",
    value: function addBackgroundLayer() {
      var settings = this.getSettings();
      this.elements.$motionFXContainer = jQuery('<div>', {
        class: settings.classes.container
      });
      this.elements.$motionFXLayer = jQuery('<div>', {
        class: settings.classes.layer
      });
      this.updateBackgroundLayerSize();
      this.elements.$motionFXContainer.prepend(this.elements.$motionFXLayer);
      var $addBackgroundLayerTo = settings.addBackgroundLayerTo ? this.$element.find(settings.addBackgroundLayerTo) : this.$element;
      $addBackgroundLayerTo.prepend(this.elements.$motionFXContainer);
    }
  }, {
    key: "removeBackgroundLayer",
    value: function removeBackgroundLayer() {
      this.elements.$motionFXContainer.remove();
    }
  }, {
    key: "updateBackgroundLayerSize",
    value: function updateBackgroundLayerSize() {
      var settings = this.getSettings(),
          speed = {
        x: 0,
        y: 0
      },
          mouseInteraction = settings.interactions.mouseMove,
          scrollInteraction = settings.interactions.scroll;

      if (mouseInteraction && mouseInteraction.translateXY) {
        speed.x = mouseInteraction.translateXY.speed * 10;
        speed.y = mouseInteraction.translateXY.speed * 10;
      }

      if (scrollInteraction) {
        if (scrollInteraction.translateX) {
          speed.x = scrollInteraction.translateX.speed * 10;
        }

        if (scrollInteraction.translateY) {
          speed.y = scrollInteraction.translateY.speed * 10;
        }
      }

      this.elements.$motionFXLayer.css({
        width: 100 + speed.x + '%',
        height: 100 + speed.y + '%'
      });
    }
  }, {
    key: "defineDimensions",
    value: function defineDimensions() {
      var $dimensionsElement = this.getSettings('$dimensionsElement') || this.$element,
          elementOffset = $dimensionsElement.offset();
      var dimensions = {
        elementHeight: $dimensionsElement.outerHeight(),
        elementWidth: $dimensionsElement.outerWidth(),
        elementTop: elementOffset.top,
        elementLeft: elementOffset.left
      };
      dimensions.elementRange = dimensions.elementHeight + innerHeight;
      this.setSettings('dimensions', dimensions);

      if ('background' === this.getSettings('type')) {
        this.defineBackgroundLayerDimensions();
      }
    }
  }, {
    key: "defineBackgroundLayerDimensions",
    value: function defineBackgroundLayerDimensions() {
      var dimensions = this.getSettings('dimensions');
      dimensions.layerHeight = this.elements.$motionFXLayer.height();
      dimensions.layerWidth = this.elements.$motionFXLayer.width();
      dimensions.movableX = dimensions.layerWidth - dimensions.elementWidth;
      dimensions.movableY = dimensions.layerHeight - dimensions.elementHeight;
      this.setSettings('dimensions', dimensions);
    }
  }, {
    key: "initInteractionsTypes",
    value: function initInteractionsTypes() {
      this.interactionsTypes = {
        scroll: _scroll.default,
        mouseMove: _mouseMove.default
      };
    }
  }, {
    key: "prepareSpecialActions",
    value: function prepareSpecialActions() {
      var settings = this.getSettings(),
          hasTiltEffect = !!(settings.interactions.mouseMove && settings.interactions.mouseMove.tilt);
      this.elements.$parent.toggleClass(settings.classes.perspective, hasTiltEffect);
    }
  }, {
    key: "cleanSpecialActions",
    value: function cleanSpecialActions() {
      var settings = this.getSettings();
      this.elements.$parent.removeClass(settings.classes.perspective);
    }
  }, {
    key: "runInteractions",
    value: function runInteractions() {
      var _this = this;

      var settings = this.getSettings();
      this.prepareSpecialActions();
      jQuery.each(settings.interactions, function (interactionName, actions) {
        _this.interactions[interactionName] = new _this.interactionsTypes[interactionName]({
          motionFX: _this,
          callback: function callback() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            jQuery.each(actions, function (actionName, actionData) {
              var _this$actions;

              return (_this$actions = _this.actions).runAction.apply(_this$actions, [actionName, actionData].concat(args));
            });
          }
        });

        _this.interactions[interactionName].run();
      });
    }
  }, {
    key: "destroyInteractions",
    value: function destroyInteractions() {
      this.cleanSpecialActions();
      jQuery.each(this.interactions, function (interactionName, interaction) {
        return interaction.destroy();
      });
      this.interactions = {};
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.actions.setSettings(this.getSettings());

      if ('background' === this.getSettings('type')) {
        this.updateBackgroundLayerSize();
        this.defineBackgroundLayerDimensions();
      }

      this.actions.refresh();
      this.destroyInteractions();
      this.runInteractions();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.destroyInteractions();
      this.actions.refresh();
      var settings = this.getSettings();
      this.$element.removeClass(settings.classes.element);
      this.elements.$parent.removeClass(settings.classes.parent);

      if ('background' === settings.type) {
        this.$element.removeClass(settings.classes.backgroundType);
        this.removeBackgroundLayer();
      }
    }
  }, {
    key: "onInit",
    value: function onInit() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(_default.prototype), "onInit", this).call(this);
      var settings = this.getSettings();
      this.$element = settings.$element;
      this.elements.$parent = this.$element.parent();
      this.$element.addClass(settings.classes.element);
      this.elements.$parent = this.$element.parent();
      this.elements.$parent.addClass(settings.classes.parent);

      if ('background' === settings.type) {
        this.$element.addClass(settings.classes.backgroundType);
        this.addBackgroundLayer();
      }

      this.defineDimensions();
      settings.$targetElement = 'element' === settings.type ? this.$element : this.elements.$motionFXLayer;
      this.interactions = {};
      this.actions = new _actions.default(settings);
      this.initInteractionsTypes();
      this.runInteractions();
    }
  }, {
    key: "onWindowResize",
    value: function onWindowResize() {
      this.defineDimensions();
    }
  }]);
  return _default;
}(elementorModules.ViewModule);

exports.default = _default;

/***/ }),
/* 499 */
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

var _base = _interopRequireDefault(__webpack_require__(296));

var _scroll = _interopRequireDefault(__webpack_require__(282));

var _default = /*#__PURE__*/function (_BaseInteraction) {
  (0, _inherits2.default)(_default, _BaseInteraction);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(_default, [{
    key: "run",
    value: function run() {
      if (pageYOffset === this.windowScrollTop) {
        return false;
      }

      this.onScrollMovement();
      this.windowScrollTop = pageYOffset;
    }
  }, {
    key: "onScrollMovement",
    value: function onScrollMovement() {
      this.updateMotionFxDimensions();
      this.updateAnimation();
    }
  }, {
    key: "updateMotionFxDimensions",
    value: function updateMotionFxDimensions() {
      var motionFXSettings = this.motionFX.getSettings();

      if (motionFXSettings.refreshDimensions) {
        this.motionFX.defineDimensions();
      }
    }
  }, {
    key: "updateAnimation",
    value: function updateAnimation() {
      var passedRangePercents;

      if ('page' === this.motionFX.getSettings('range')) {
        passedRangePercents = _scroll.default.getPageScrollPercentage();
      } else if (this.motionFX.getSettings('isFixedPosition')) {
        passedRangePercents = _scroll.default.getPageScrollPercentage({}, window.innerHeight);
      } else {
        passedRangePercents = _scroll.default.getElementViewportPercentage(this.motionFX.elements.$parent);
      }

      this.runCallback(passedRangePercents);
    }
  }]);
  return _default;
}(_base.default);

exports.default = _default;

/***/ }),
/* 500 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(501);

/***/ }),
/* 501 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(502);
module.exports = __webpack_require__(2).parseFloat;


/***/ }),
/* 502 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(8);
var $parseFloat = __webpack_require__(503);
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ }),
/* 503 */
/***/ (function(module, exports, __webpack_require__) {

var $parseFloat = __webpack_require__(7).parseFloat;
var $trim = __webpack_require__(245).trim;

module.exports = 1 / $parseFloat(__webpack_require__(197) + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),
/* 504 */
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

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(26));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(296));

var MouseMoveInteraction = /*#__PURE__*/function (_BaseInteraction) {
  (0, _inherits2.default)(MouseMoveInteraction, _BaseInteraction);

  var _super = (0, _createSuper2.default)(MouseMoveInteraction);

  function MouseMoveInteraction() {
    (0, _classCallCheck2.default)(this, MouseMoveInteraction);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(MouseMoveInteraction, [{
    key: "bindEvents",
    value: function bindEvents() {
      if (!MouseMoveInteraction.mouseTracked) {
        elementorFrontend.elements.$window.on('mousemove', MouseMoveInteraction.updateMousePosition);
        MouseMoveInteraction.mouseTracked = true;
      }
    }
  }, {
    key: "run",
    value: function run() {
      var mousePosition = MouseMoveInteraction.mousePosition,
          oldMousePosition = this.oldMousePosition;

      if (oldMousePosition.x === mousePosition.x && oldMousePosition.y === mousePosition.y) {
        return;
      }

      this.oldMousePosition = {
        x: mousePosition.x,
        y: mousePosition.y
      };
      var passedPercentsX = 100 / innerWidth * mousePosition.x,
          passedPercentsY = 100 / innerHeight * mousePosition.y;
      this.runCallback(passedPercentsX, passedPercentsY);
    }
  }, {
    key: "onInit",
    value: function onInit() {
      this.oldMousePosition = {};
      (0, _get2.default)((0, _getPrototypeOf2.default)(MouseMoveInteraction.prototype), "onInit", this).call(this);
    }
  }]);
  return MouseMoveInteraction;
}(_base.default);

exports.default = MouseMoveInteraction;
MouseMoveInteraction.mousePosition = {};

MouseMoveInteraction.updateMousePosition = function (event) {
  MouseMoveInteraction.mousePosition = {
    x: event.clientX,
    y: event.clientY
  };
};

/***/ }),
/* 505 */
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

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(_default, [{
    key: "getMovePointFromPassedPercents",
    value: function getMovePointFromPassedPercents(movableRange, passedPercents) {
      var movePoint = passedPercents / movableRange * 100;
      return +movePoint.toFixed(2);
    }
  }, {
    key: "getEffectValueFromMovePoint",
    value: function getEffectValueFromMovePoint(range, movePoint) {
      return range * movePoint / 100;
    }
  }, {
    key: "getStep",
    value: function getStep(passedPercents, options) {
      if ('element' === this.getSettings('type')) {
        return this.getElementStep(passedPercents, options);
      }

      return this.getBackgroundStep(passedPercents, options);
    }
  }, {
    key: "getElementStep",
    value: function getElementStep(passedPercents, options) {
      return -(passedPercents - 50) * options.speed;
    }
  }, {
    key: "getBackgroundStep",
    value: function getBackgroundStep(passedPercents, options) {
      var movableRange = this.getSettings('dimensions.movable' + options.axis.toUpperCase());
      return -this.getEffectValueFromMovePoint(movableRange, passedPercents);
    }
  }, {
    key: "getDirectionMovePoint",
    value: function getDirectionMovePoint(passedPercents, direction, range) {
      var movePoint;

      if (passedPercents < range.start) {
        if ('out-in' === direction) {
          movePoint = 0;
        } else if ('in-out' === direction) {
          movePoint = 100;
        } else {
          movePoint = this.getMovePointFromPassedPercents(range.start, passedPercents);

          if ('in-out-in' === direction) {
            movePoint = 100 - movePoint;
          }
        }
      } else if (passedPercents < range.end) {
        if ('in-out-in' === direction) {
          movePoint = 0;
        } else if ('out-in-out' === direction) {
          movePoint = 100;
        } else {
          movePoint = this.getMovePointFromPassedPercents(range.end - range.start, passedPercents - range.start);

          if ('in-out' === direction) {
            movePoint = 100 - movePoint;
          }
        }
      } else if ('in-out' === direction) {
        movePoint = 0;
      } else if ('out-in' === direction) {
        movePoint = 100;
      } else {
        movePoint = this.getMovePointFromPassedPercents(100 - range.end, 100 - passedPercents);

        if ('in-out-in' === direction) {
          movePoint = 100 - movePoint;
        }
      }

      return movePoint;
    }
  }, {
    key: "translateX",
    value: function translateX(actionData, passedPercents) {
      actionData.axis = 'x';
      actionData.unit = 'px';
      this.transform('translateX', passedPercents, actionData);
    }
  }, {
    key: "translateY",
    value: function translateY(actionData, passedPercents) {
      actionData.axis = 'y';
      actionData.unit = 'px';
      this.transform('translateY', passedPercents, actionData);
    }
  }, {
    key: "translateXY",
    value: function translateXY(actionData, passedPercentsX, passedPercentsY) {
      this.translateX(actionData, passedPercentsX);
      this.translateY(actionData, passedPercentsY);
    }
  }, {
    key: "tilt",
    value: function tilt(actionData, passedPercentsX, passedPercentsY) {
      var options = {
        speed: actionData.speed / 10,
        direction: actionData.direction
      };
      this.rotateX(options, passedPercentsY);
      this.rotateY(options, 100 - passedPercentsX);
    }
  }, {
    key: "rotateX",
    value: function rotateX(actionData, passedPercents) {
      actionData.axis = 'x';
      actionData.unit = 'deg';
      this.transform('rotateX', passedPercents, actionData);
    }
  }, {
    key: "rotateY",
    value: function rotateY(actionData, passedPercents) {
      actionData.axis = 'y';
      actionData.unit = 'deg';
      this.transform('rotateY', passedPercents, actionData);
    }
  }, {
    key: "rotateZ",
    value: function rotateZ(actionData, passedPercents) {
      actionData.unit = 'deg';
      this.transform('rotateZ', passedPercents, actionData);
    }
  }, {
    key: "scale",
    value: function scale(actionData, passedPercents) {
      var movePoint = this.getDirectionMovePoint(passedPercents, actionData.direction, actionData.range);
      this.updateRulePart('transform', 'scale', 1 + actionData.speed * movePoint / 1000);
    }
  }, {
    key: "transform",
    value: function transform(action, passedPercents, actionData) {
      if (actionData.direction) {
        passedPercents = 100 - passedPercents;
      }

      this.updateRulePart('transform', action, this.getStep(passedPercents, actionData) + actionData.unit);
    }
  }, {
    key: "opacity",
    value: function opacity(actionData, passedPercents) {
      var movePoint = this.getDirectionMovePoint(passedPercents, actionData.direction, actionData.range),
          level = actionData.level / 10,
          opacity = 1 - level + this.getEffectValueFromMovePoint(level, movePoint);
      this.$element.css({
        opacity: opacity,
        'will-change': 'opacity'
      });
    }
  }, {
    key: "blur",
    value: function blur(actionData, passedPercents) {
      var movePoint = this.getDirectionMovePoint(passedPercents, actionData.direction, actionData.range),
          blur = actionData.level - this.getEffectValueFromMovePoint(actionData.level, movePoint);
      this.updateRulePart('filter', 'blur', blur + 'px');
    }
  }, {
    key: "updateRulePart",
    value: function updateRulePart(ruleName, key, value) {
      if (!this.rulesVariables[ruleName]) {
        this.rulesVariables[ruleName] = {};
      }

      if (!this.rulesVariables[ruleName][key]) {
        this.rulesVariables[ruleName][key] = true;
        this.updateRule(ruleName);
      }

      var cssVarKey = "--".concat(key);
      this.$element[0].style.setProperty(cssVarKey, value);
    }
  }, {
    key: "updateRule",
    value: function updateRule(ruleName) {
      var value = '';
      jQuery.each(this.rulesVariables[ruleName], function (variableKey) {
        value += "".concat(variableKey, "(var(--").concat(variableKey, "))");
      });
      this.$element.css(ruleName, value);
    }
  }, {
    key: "runAction",
    value: function runAction(actionName, actionData, passedPercents) {
      if (actionData.affectedRange) {
        if (actionData.affectedRange.start > passedPercents) {
          passedPercents = actionData.affectedRange.start;
        }

        if (actionData.affectedRange.end < passedPercents) {
          passedPercents = actionData.affectedRange.end;
        }
      }

      for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        args[_key - 3] = arguments[_key];
      }

      this[actionName].apply(this, [actionData, passedPercents].concat(args));
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.rulesVariables = {};
      this.$element.css({
        transform: '',
        filter: '',
        opacity: '',
        'will-change': ''
      });
    }
  }, {
    key: "onInit",
    value: function onInit() {
      this.$element = this.getSettings('$targetElement');
      this.refresh();
    }
  }]);
  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),
/* 506 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _handler = _interopRequireDefault(__webpack_require__(507));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this);
    elementorFrontend.hooks.addAction('frontend/element_ready/gallery.default', function ($element) {
      elementorFrontend.elementsHandler.addHandler(_handler.default, {
        $element: $element
      });
    });
    return _this;
  }

  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),
/* 507 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(179);

__webpack_require__(19);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _get3 = _interopRequireDefault(__webpack_require__(61));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(26));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

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
/* 508 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _handler = _interopRequireDefault(__webpack_require__(509));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this);
    elementorFrontend.hooks.addAction('frontend/element_ready/lottie.default', function ($element) {
      elementorFrontend.elementsHandler.addHandler(_handler.default, {
        $element: $element
      });
    });
    return _this;
  }

  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),
/* 509 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(155));

__webpack_require__(19);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _get3 = _interopRequireDefault(__webpack_require__(61));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(26));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _scroll = _interopRequireDefault(__webpack_require__(282));

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
      this.intersectionObservers.lazyload.observer = _scroll.default.scrollObserver({
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
      this.intersectionObservers.animation.observer = _scroll.default.scrollObserver({
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

      this.intersectionObservers.animation.observer = _scroll.default.scrollObserver({
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
      return _scroll.default.getElementViewportPercentage(this.elements.$widgetWrapper, this.getOffset());
    }
  }, {
    key: "getLottiePagePercentage",
    value: function getLottiePagePercentage() {
      return _scroll.default.getPageScrollPercentage(this.getOffset());
    }
  }, {
    key: "getLottieViewportHeightPercentage",
    value: function getLottieViewportHeightPercentage() {
      return _scroll.default.getPageScrollPercentage(this.getOffset(), window.innerHeight);
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
        this.elements.$containerLink.click(function (event) {
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
/* 510 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _tableOfContents = _interopRequireDefault(__webpack_require__(511));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this);
    elementorFrontend.hooks.addAction('frontend/element_ready/table-of-contents.default', function ($element) {
      elementorFrontend.elementsHandler.addHandler(_tableOfContents.default, {
        $element: $element
      });
    });
    return _this;
  }

  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),
/* 511 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _keys = _interopRequireDefault(__webpack_require__(47));

__webpack_require__(512);

__webpack_require__(19);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _get3 = _interopRequireDefault(__webpack_require__(61));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(26));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

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
        this.elements.$listItems.hover(function (event) {
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
      jQuery(document).ready(function () {
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
/* 512 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.2 String.prototype.anchor(name)
__webpack_require__(271)('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});


/***/ }),
/* 513 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  elementorFrontend.hooks.addAction('frontend/element_ready/animated-headline.default', __webpack_require__(514));
};

/***/ }),
/* 514 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(104);

__webpack_require__(240);

__webpack_require__(19);

var AnimatedHeadlineHandler = elementorModules.frontend.handlers.Base.extend({
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
    var settings = {
      animationDelay: 2500,
      //letters effect
      lettersDelay: 50,
      //typing effect
      typeLettersDelay: 150,
      selectionDuration: 500,
      //clip effect
      revealDuration: 600,
      revealAnimationDelay: 1500
    };
    settings.typeAnimationDelay = settings.selectionDuration + 800;
    settings.selectors = {
      headline: '.elementor-headline',
      dynamicWrapper: '.elementor-headline-dynamic-wrapper'
    };
    settings.classes = {
      dynamicText: 'elementor-headline-dynamic-text',
      dynamicLetter: 'elementor-headline-dynamic-letter',
      textActive: 'elementor-headline-text-active',
      textInactive: 'elementor-headline-text-inactive',
      letters: 'elementor-headline-letters',
      animationIn: 'elementor-headline-animation-in',
      typeSelected: 'elementor-headline-typing-selected'
    };
    return settings;
  },
  getDefaultElements: function getDefaultElements() {
    var selectors = this.getSettings('selectors');
    return {
      $headline: this.$element.find(selectors.headline),
      $dynamicWrapper: this.$element.find(selectors.dynamicWrapper)
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
  setDynamicWrapperWidth: function setDynamicWrapperWidth($newWord) {
    var animationType = this.getElementSettings('animation_type');

    if ('clip' !== animationType && 'typing' !== animationType) {
      this.elements.$dynamicWrapper.css('width', $newWord.width());
    }
  },
  animateHeadline: function animateHeadline() {
    var self = this,
        animationType = self.getElementSettings('animation_type'),
        $dynamicWrapper = self.elements.$dynamicWrapper;

    if ('clip' === animationType) {
      $dynamicWrapper.width($dynamicWrapper.width() + 10);
    } else if ('typing' !== animationType) {
      //assign to .elementor-headline-dynamic-wrapper the width of its longest word
      var width = 0;
      self.elements.$dynamicText.each(function () {
        var wordWidth = jQuery(this).width();

        if (wordWidth > width) {
          width = wordWidth;
        }
      });
      $dynamicWrapper.css('width', width);
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
  fillWords: function fillWords() {
    var elementSettings = this.getElementSettings(),
        classes = this.getSettings('classes'),
        $dynamicWrapper = this.elements.$dynamicWrapper;

    if ('rotate' === elementSettings.headline_style) {
      var rotatingText = (elementSettings.rotating_text || '').split('\n');
      rotatingText.forEach(function (word, index) {
        var $dynamicText = jQuery('<span>', {
          class: classes.dynamicText
        }).html(word.replace(/ /g, '&nbsp;'));

        if (!index) {
          $dynamicText.addClass(classes.textActive);
        }

        $dynamicWrapper.append($dynamicText);
      });
    } else {
      var $dynamicText = jQuery('<span>', {
        class: classes.dynamicText + ' ' + classes.textActive
      }).text(elementSettings.highlighted_text),
          $svg = jQuery('<svg>', {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 500 150',
        preserveAspectRatio: 'none'
      }).html(this.getSvgPaths(elementSettings.marker));
      $dynamicWrapper.append($dynamicText, $svg[0].outerHTML);
    }

    this.elements.$dynamicText = $dynamicWrapper.children('.' + classes.dynamicText);
  },
  rotateHeadline: function rotateHeadline() {
    var settings = this.getSettings(); //insert <span> for each letter of a changing word

    if (this.elements.$headline.hasClass(settings.classes.letters)) {
      this.singleLetters();
    } //initialise headline animation


    this.animateHeadline();
  },
  initHeadline: function initHeadline() {
    if ('rotate' === this.getElementSettings('headline_style')) {
      this.rotateHeadline();
    }
  },
  onInit: function onInit() {
    elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);
    this.fillWords();
    this.initHeadline();
  }
});

module.exports = function ($scope) {
  new AnimatedHeadlineHandler({
    $element: $scope
  });
};

/***/ }),
/* 515 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  elementorFrontend.hooks.addAction('frontend/element_ready/media-carousel.default', __webpack_require__(516));
  elementorFrontend.hooks.addAction('frontend/element_ready/testimonial-carousel.default', __webpack_require__(298));
  elementorFrontend.hooks.addAction('frontend/element_ready/reviews.default', __webpack_require__(298));
};

/***/ }),
/* 516 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _regenerator = _interopRequireDefault(__webpack_require__(283));

__webpack_require__(248);

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(284));

__webpack_require__(19);

var Base = __webpack_require__(297),
    MediaCarousel;

MediaCarousel = Base.extend({
  slideshowSpecialElementSettings: ['slides_per_view', 'slides_per_view_tablet', 'slides_per_view_mobile'],
  isSlideshow: function isSlideshow() {
    return 'slideshow' === this.getElementSettings('skin');
  },
  getDefaultSettings: function getDefaultSettings() {
    var defaultSettings = Base.prototype.getDefaultSettings.apply(this, arguments);

    if (this.isSlideshow()) {
      defaultSettings.selectors.thumbsSwiper = '.elementor-thumbnails-swiper';
      defaultSettings.slidesPerView = {
        desktop: 5,
        tablet: 4,
        mobile: 3
      };
    }

    return defaultSettings;
  },
  getElementSettings: function getElementSettings(setting) {
    if (-1 !== this.slideshowSpecialElementSettings.indexOf(setting) && this.isSlideshow()) {
      setting = 'slideshow_' + setting;
    }

    return Base.prototype.getElementSettings.call(this, setting);
  },
  getDefaultElements: function getDefaultElements() {
    var selectors = this.getSettings('selectors'),
        defaultElements = Base.prototype.getDefaultElements.apply(this, arguments);

    if (this.isSlideshow()) {
      defaultElements.$thumbsSwiper = this.$element.find(selectors.thumbsSwiper);
    }

    return defaultElements;
  },
  getEffect: function getEffect() {
    if ('coverflow' === this.getElementSettings('skin')) {
      return 'coverflow';
    }

    return Base.prototype.getEffect.apply(this, arguments);
  },
  getSlidesPerView: function getSlidesPerView(device) {
    if (this.isSlideshow()) {
      return 1;
    }

    if ('coverflow' === this.getElementSettings('skin')) {
      return this.getDeviceSlidesPerView(device);
    }

    return Base.prototype.getSlidesPerView.apply(this, arguments);
  },
  getSwiperOptions: function getSwiperOptions() {
    var options = Base.prototype.getSwiperOptions.apply(this, arguments);

    if (this.isSlideshow()) {
      options.loopedSlides = this.getSlidesCount();
      delete options.pagination;
      delete options.breakpoints;
    }

    return options;
  },
  onInit: function () {
    var _onInit = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var slidesCount,
          elementSettings,
          loop,
          breakpointsSettings,
          breakpoints,
          desktopSlidesPerView,
          thumbsSliderOptions,
          $thumbsSwiper,
          swiperInstance,
          asyncSwiper,
          _args = arguments;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              Base.prototype.onInit.apply(this, _args);
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
              $thumbsSwiper = this.elements.$thumbsSwiper;

              if (!('undefined' === typeof Swiper)) {
                _context.next = 16;
                break;
              }

              asyncSwiper = elementorFrontend.utils.swiper;
              _context.next = 13;
              return new asyncSwiper($thumbsSwiper, thumbsSliderOptions);

            case 13:
              swiperInstance = _context.sent;
              _context.next = 17;
              break;

            case 16:
              swiperInstance = new Swiper($thumbsSwiper, thumbsSliderOptions);

            case 17:
              this.swiper.controller.control = this.thumbsSwiper = swiperInstance; // Expose the swiper instance in the frontend

              this.elements.$thumbsSwiper.data('swiper', this.thumbsSwiper);
              this.thumbsSwiper.controller.control = this.swiper;

            case 20:
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
  onElementChange: function onElementChange(propertyName) {
    if (1 >= this.getSlidesCount()) {
      return;
    }

    if (!this.isSlideshow()) {
      Base.prototype.onElementChange.apply(this, arguments);
      return;
    }

    if (0 === propertyName.indexOf('width')) {
      this.swiper.update();
      this.thumbsSwiper.update();
    }

    if (0 === propertyName.indexOf('space_between')) {
      this.updateSpaceBetween(this.thumbsSwiper, propertyName);
    }
  }
});

module.exports = function ($scope) {
  new MediaCarousel({
    $element: $scope
  });
};

/***/ }),
/* 517 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  elementorFrontend.hooks.addAction('frontend/element_ready/countdown.default', __webpack_require__(518));
};

/***/ }),
/* 518 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _parseInt2 = _interopRequireDefault(__webpack_require__(196));

__webpack_require__(201);

__webpack_require__(113);

__webpack_require__(19);

var CountDown = elementorModules.frontend.handlers.Base.extend({
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

module.exports = function ($scope) {
  new CountDown({
    $element: $scope
  });
};

/***/ }),
/* 519 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _formSteps = _interopRequireDefault(__webpack_require__(520));

var _formSender = _interopRequireDefault(__webpack_require__(521));

var _formRedirect = _interopRequireDefault(__webpack_require__(522));

module.exports = function () {
  var handlersInit = function handlersInit($scope) {
    elementorFrontend.elementsHandler.addHandler(_formSteps.default, {
      $element: $scope
    });
    elementorFrontend.elementsHandler.addHandler(_formSender.default, {
      $element: $scope
    });
    elementorFrontend.elementsHandler.addHandler(_formRedirect.default, {
      $element: $scope
    });
  };

  elementorFrontend.hooks.addAction('frontend/element_ready/form.default', handlersInit);
  elementorFrontend.hooks.addAction('frontend/element_ready/subscribe.default', handlersInit);
  elementorFrontend.hooks.addAction('frontend/element_ready/form.default', __webpack_require__(523));
  elementorFrontend.hooks.addAction('frontend/element_ready/form.default', __webpack_require__(524));
  elementorFrontend.hooks.addAction('frontend/element_ready/form.default', __webpack_require__(525));
};

/***/ }),
/* 520 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _Object$defineProperty = __webpack_require__(0);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(104);

__webpack_require__(179);

__webpack_require__(272);

__webpack_require__(273);

var _objectSpread2 = _interopRequireDefault(__webpack_require__(155));

__webpack_require__(19);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _get3 = _interopRequireDefault(__webpack_require__(61));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(26));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

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

      return jQuery('<input>', {
        type: 'button',
        val: this.getButtonLabel(buttonType, index),
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
      this.elements.$stepWrapper.eq(index).removeClass(classes.hidden).children(this.getSettings('selectors.fieldGroup')).first().find(':input').first().focus();
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

      this.elements.$indicators.removeClass(stateClasses.join(' ')).not(':eq(0)').addClass(classes.indicatorInactive);
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
        jQuery(el).find(buttonSelector[buttonType]).val(_this8.getButtonLabel(buttonType, index));
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
/* 521 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

__webpack_require__(201);

__webpack_require__(113);

var _parseInt2 = _interopRequireDefault(__webpack_require__(196));

__webpack_require__(19);

module.exports = elementorModules.frontend.handlers.Base.extend({
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

/***/ }),
/* 522 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(19);

module.exports = elementorModules.frontend.handlers.Base.extend({
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

/***/ }),
/* 523 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(19);

module.exports = function ($scope) {
  var $element = $scope.find('.elementor-g-recaptcha:last');
  var captchaIds = [];

  if (!$element.length) {
    return;
  }

  var addRecaptcha = function addRecaptcha($elementRecaptcha) {
    var $form = $elementRecaptcha.parents('form'),
        settings = $elementRecaptcha.data(),
        isV2 = 'v3' !== settings.type;
    captchaIds.forEach(function (id) {
      return grecaptcha.reset(id);
    });
    var widgetId = grecaptcha.render($elementRecaptcha[0], settings);
    $form.on('reset error', function () {
      grecaptcha.reset(widgetId);
    });

    if (isV2) {
      $elementRecaptcha.data('widgetId', widgetId);
    } else {
      captchaIds.push(widgetId);
      $form.find('button[type="submit"]').on('click', function (e) {
        e.preventDefault();
        grecaptcha.ready(function () {
          grecaptcha.execute(widgetId, {
            action: $elementRecaptcha.data('action')
          }).then(function (token) {
            $form.find('[name="g-recaptcha-response"]').remove();
            $form.append(jQuery('<input>', {
              type: 'hidden',
              value: token,
              name: 'g-recaptcha-response'
            }));
            $form.submit();
          });
        });
      });
    }
  };

  var onRecaptchaApiReady = function onRecaptchaApiReady(callback) {
    if (window.grecaptcha && window.grecaptcha.render) {
      callback();
    } else {
      // If not ready check again by timeout..
      setTimeout(function () {
        onRecaptchaApiReady(callback);
      }, 350);
    }
  };

  onRecaptchaApiReady(function () {
    addRecaptcha($element);
  });
};

/***/ }),
/* 524 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(19);

module.exports = function ($scope, $) {
  var $elements = $scope.find('.elementor-date-field');

  if (!$elements.length) {
    return;
  }

  var addDatePicker = function addDatePicker($element) {
    if ($($element).hasClass('elementor-use-native')) {
      return;
    }

    var options = {
      minDate: $($element).attr('min') || null,
      maxDate: $($element).attr('max') || null,
      allowInput: true
    };
    $element.flatpickr(options);
  };

  $.each($elements, function (i, $element) {
    addDatePicker($element);
  });
};

/***/ }),
/* 525 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(19);

module.exports = function ($scope, $) {
  var $elements = $scope.find('.elementor-time-field');

  if (!$elements.length) {
    return;
  }

  var addTimePicker = function addTimePicker($element) {
    if ($($element).hasClass('elementor-use-native')) {
      return;
    }

    $element.flatpickr({
      noCalendar: true,
      enableTime: true,
      allowInput: true
    });
  };

  $.each($elements, function (i, $element) {
    addTimePicker($element);
  });
};

/***/ }),
/* 526 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  if (jQuery.fn.smartmenus) {
    // Override the default stupid detection
    jQuery.SmartMenus.prototype.isCSSOn = function () {
      return true;
    };

    if (elementorFrontend.config.is_rtl) {
      jQuery.fn.smartmenus.defaults.rightToLeftSubMenus = true;
    }
  }

  elementorFrontend.hooks.addAction('frontend/element_ready/nav-menu.default', __webpack_require__(527));
};

/***/ }),
/* 527 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(19);

var MenuHandler = elementorModules.frontend.handlers.Base.extend({
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

module.exports = function ($scope) {
  new MenuHandler({
    $element: $scope
  });
};

/***/ }),
/* 528 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(19);

module.exports = function () {
  var PostsModule = __webpack_require__(249),
      CardsModule = __webpack_require__(299),
      PortfolioModule = __webpack_require__(529);

  elementorFrontend.hooks.addAction('frontend/element_ready/posts.classic', function ($scope) {
    new PostsModule({
      $element: $scope
    });
  });
  elementorFrontend.hooks.addAction('frontend/element_ready/posts.full_content', function ($scope) {
    new PostsModule({
      $element: $scope
    });
  });
  elementorFrontend.hooks.addAction('frontend/element_ready/posts.cards', function ($scope) {
    new CardsModule({
      $element: $scope
    });
  });
  elementorFrontend.hooks.addAction('frontend/element_ready/portfolio.default', function ($scope) {
    if (!$scope.find('.elementor-portfolio').length) {
      return;
    }

    new PortfolioModule({
      $element: $scope
    });
  });
};

/***/ }),
/* 529 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(19);

var PostsHandler = __webpack_require__(249);

module.exports = PostsHandler.extend({
  getSkinPrefix: function getSkinPrefix() {
    return '';
  },
  getDefaultSettings: function getDefaultSettings() {
    var settings = PostsHandler.prototype.getDefaultSettings.apply(this, arguments);
    settings.transitionDuration = 450;
    jQuery.extend(settings.classes, {
      active: 'elementor-active',
      item: 'elementor-portfolio-item',
      ghostItem: 'elementor-portfolio-ghost-item'
    });
    return settings;
  },
  getDefaultElements: function getDefaultElements() {
    var elements = PostsHandler.prototype.getDefaultElements.apply(this, arguments);
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
    var baseClosureMethods = PostsHandler.prototype.getClosureMethodsNames.apply(this, arguments);
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
    PostsHandler.prototype.bindEvents.apply(this, arguments);
    this.elements.$filterButtons.on('click', this.onFilterButtonClick);
  },
  isMasonryEnabled: function isMasonryEnabled() {
    return !!this.getElementSettings('masonry');
  },
  run: function run() {
    PostsHandler.prototype.run.apply(this, arguments);
    this.setColsCountSettings();
    this.setFilter('__all');
    this.handleEmptyColumns();
  },
  onFilterButtonClick: function onFilterButtonClick(event) {
    this.setFilter(jQuery(event.currentTarget).data('filter'));
  },
  onWindowResize: function onWindowResize() {
    PostsHandler.prototype.onWindowResize.apply(this, arguments);
    this.refreshGrid();
  },
  onElementChange: function onElementChange(propertyName) {
    PostsHandler.prototype.onElementChange.apply(this, arguments);

    if ('classic_item_ratio' === propertyName) {
      this.refreshGrid();
    }
  }
});

/***/ }),
/* 530 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  if (!elementorFrontend.isEditMode()) {
    elementorFrontend.hooks.addAction('frontend/element_ready/share-buttons.default', __webpack_require__(531));
  }
};

/***/ }),
/* 531 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(19);

var ShareButtonsHandler = elementorModules.frontend.handlers.Base.extend({
  onInit: function onInit() {
    elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);
    var elementSettings = this.getElementSettings(),
        classes = this.getSettings('classes'),
        isCustomURL = elementSettings.share_url && elementSettings.share_url.url,
        shareLinkSettings = {
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
     * Ad Blockers may block the share script. (/assets/lib/social-share/social-share.js).
     */


    if (!this.elements.$shareButton.shareLink) {
      return;
    }

    this.elements.$shareButton.shareLink(shareLinkSettings);
  },
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
  }
});

module.exports = function ($scope) {
  new ShareButtonsHandler({
    $element: $scope
  });
};

/***/ }),
/* 532 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  elementorFrontend.hooks.addAction('frontend/element_ready/slides.default', __webpack_require__(533));
};

/***/ }),
/* 533 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _regenerator = _interopRequireDefault(__webpack_require__(283));

__webpack_require__(248);

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(284));

__webpack_require__(19);

var SlidesHandler = elementorModules.frontend.handlers.Base.extend({
  getDefaultSettings: function getDefaultSettings() {
    return {
      selectors: {
        slider: '.elementor-slides-wrapper',
        slide: '.swiper-slide',
        slideBackground: '.swiper-slide-bg',
        slideInnerContents: '.swiper-slide-contents',
        activeSlide: '.swiper-slide-active',
        activeDuplicate: '.swiper-slide-duplicate-active'
      },
      classes: {
        animated: 'animated',
        kenBurnsActive: 'elementor-ken-burns--active'
      },
      attributes: {
        dataSliderOptions: 'slider_options',
        dataAnimation: 'animation'
      }
    };
  },
  getDefaultElements: function getDefaultElements() {
    var selectors = this.getSettings('selectors');
    var elements = {
      $slider: this.$element.find(selectors.slider)
    };
    elements.$mainSwiperSlides = elements.$slider.find(selectors.slide);
    return elements;
  },
  getSlidesCount: function getSlidesCount() {
    return this.elements.$mainSwiperSlides.length;
  },
  getInitialSlide: function getInitialSlide() {
    var editSettings = this.getEditSettings();
    return editSettings.activeItemIndex ? editSettings.activeItemIndex - 1 : 0;
  },
  getSwiperOptions: function getSwiperOptions() {
    var _this = this;

    var elementSettings = this.getElementSettings();
    var swiperOptions = {
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

    if (!this.isEdit && elementSettings.autoplay) {
      swiperOptions.autoplay = {
        delay: elementSettings.autoplay_speed,
        disableOnInteraction: !!elementSettings.pause_on_interaction
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
  },
  handleKenBurns: function handleKenBurns() {
    var settings = this.getSettings();

    if (this.$activeImageBg) {
      this.$activeImageBg.removeClass(settings.classes.kenBurnsActive);
    }

    this.activeItemIndex = this.swipers.main ? this.swipers.main.activeIndex : this.getInitialSlide();

    if (this.swipers.main) {
      this.$activeImageBg = jQuery(this.swipers.main.slides[this.activeItemIndex]).children(settings.selectors.slideBackground);
    } else {
      this.$activeImageBg = jQuery(this.elements.$mainSwiperSlides[0]).children(settings.selectors.slideBackground);
    }

    this.$activeImageBg.addClass(settings.classes.kenBurnsActive);
  },
  initSingleSlideAnimations: function initSingleSlideAnimations() {
    var settings = this.getSettings(),
        animation = this.elements.$slider.data(settings.attributes.dataAnimation);
    this.elements.$slider.find(settings.selectors.slideBackground).addClass(settings.classes.kenBurnsActive); // If there is an animation, get the container of the slide's inner contents and add the animation classes to it

    if (animation) {
      this.elements.$slider.find(settings.selectors.slideInnerContents).addClass(settings.classes.animated + ' ' + animation);
    }
  },
  initSlider: function () {
    var _initSlider = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _this2 = this;

      var $slider, settings, elementSettings, animation, swiperOptions, swiperInstance, asyncSwiper;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              $slider = this.elements.$slider, settings = this.getSettings(), elementSettings = this.getElementSettings(), animation = $slider.data(settings.attributes.dataAnimation);

              if ($slider.length) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return");

            case 3:
              this.swipers = {};

              if (!(1 >= this.getSlidesCount())) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return");

            case 6:
              swiperOptions = this.getSwiperOptions();

              if (!('undefined' === typeof Swiper)) {
                _context.next = 14;
                break;
              }

              asyncSwiper = elementorFrontend.utils.swiper;
              _context.next = 11;
              return new asyncSwiper($slider, swiperOptions);

            case 11:
              swiperInstance = _context.sent;
              _context.next = 15;
              break;

            case 14:
              swiperInstance = new Swiper($slider, swiperOptions);

            case 15:
              this.swipers.main = swiperInstance; // Expose the swiper instance in the frontend

              $slider.data('swiper', this.swipers.main); // The Ken Burns effect will only apply on the specific slides that toggled the effect ON,
              // since it depends on an additional class besides 'elementor-ken-burns--active'

              this.handleKenBurns();

              if (elementSettings.pause_on_hover) {
                $slider.on({
                  mouseenter: function mouseenter() {
                    _this2.swipers.main.autoplay.stop();
                  },
                  mouseleave: function mouseleave() {
                    _this2.swipers.main.autoplay.start();
                  }
                });
              }

              if (animation) {
                _context.next = 21;
                break;
              }

              return _context.abrupt("return");

            case 21:
              this.swipers.main.on('slideChangeTransitionStart', function () {
                var $sliderContent = $slider.find(settings.selectors.slideInnerContents);
                $sliderContent.removeClass(settings.classes.animated + ' ' + animation).hide();
              });
              this.swipers.main.on('slideChangeTransitionEnd', function () {
                var $currentSlide = $slider.find(settings.selectors.slideInnerContents);
                $currentSlide.show().addClass(settings.classes.animated + ' ' + animation);
              });

            case 23:
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
  }(),
  onInit: function onInit() {
    elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);

    if (2 > this.getSlidesCount()) {
      this.initSingleSlideAnimations();
      return;
    }

    this.initSlider();
  },
  onElementChange: function onElementChange(propertyName) {
    if (1 >= this.getSlidesCount()) {
      return;
    }

    if (0 === propertyName.indexOf('width')) {
      this.swipers.main.update();
    }
  },
  onEditSettingsChange: function onEditSettingsChange(propertyName) {
    if (1 >= this.getSlidesCount()) {
      return;
    }

    if ('activeItemIndex' === propertyName) {
      this.swipers.main.slideToLoop(this.getEditSettings('activeItemIndex') - 1);
    }
  }
});

module.exports = function ($scope) {
  new SlidesHandler({
    $element: $scope
  });
};

/***/ }),
/* 534 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var facebookHandler = __webpack_require__(535);

module.exports = function () {
  elementorFrontend.hooks.addAction('frontend/element_ready/facebook-button.default', facebookHandler);
  elementorFrontend.hooks.addAction('frontend/element_ready/facebook-comments.default', facebookHandler);
  elementorFrontend.hooks.addAction('frontend/element_ready/facebook-embed.default', facebookHandler);
  elementorFrontend.hooks.addAction('frontend/element_ready/facebook-page.default', facebookHandler);
};

/***/ }),
/* 535 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var config = ElementorProFrontendConfig.facebook_sdk,
    loadSDK = function loadSDK() {
  // Don't load in parallel
  if (config.isLoading || config.isLoaded) {
    return;
  }

  config.isLoading = true;
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
      config.isLoaded = true;
      config.isLoading = false;
      jQuery(document).trigger('fb:sdk:loaded');
    }
  });
};

module.exports = function ($scope) {
  loadSDK(); // On FB SDK is loaded, parse current element

  var parse = function parse() {
    FB.XFBML.parse($scope[0]);
  };

  if (config.isLoaded) {
    parse();
  } else {
    jQuery(document).on('fb:sdk:loaded', parse);
  }
};

/***/ }),
/* 536 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  elementorFrontend.hooks.addAction('frontend/element_ready/section', __webpack_require__(300));
  elementorFrontend.hooks.addAction('frontend/element_ready/widget', __webpack_require__(300));
};

/***/ }),
/* 537 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(538);

__webpack_require__(179);

module.exports = function () {
  var PostsArchiveClassic = __webpack_require__(540),
      PostsArchiveCards = __webpack_require__(541);

  elementorFrontend.hooks.addAction('frontend/element_ready/archive-posts.archive_classic', function ($scope) {
    new PostsArchiveClassic({
      $element: $scope
    });
  });
  elementorFrontend.hooks.addAction('frontend/element_ready/archive-posts.archive_full_content', function ($scope) {
    new PostsArchiveClassic({
      $element: $scope
    });
  });
  elementorFrontend.hooks.addAction('frontend/element_ready/archive-posts.archive_cards', function ($scope) {
    new PostsArchiveCards({
      $element: $scope
    });
  });
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
};

/***/ }),
/* 538 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(23);
var sameValue = __webpack_require__(539);
var regExpExec = __webpack_require__(108);

// @@search logic
__webpack_require__(109)('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
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
/* 539 */
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),
/* 540 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PostsClassicHandler = __webpack_require__(249);

module.exports = PostsClassicHandler.extend({
  getSkinPrefix: function getSkinPrefix() {
    return 'archive_classic_';
  }
});

/***/ }),
/* 541 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PostsCardHandler = __webpack_require__(299);

module.exports = PostsCardHandler.extend({
  getSkinPrefix: function getSkinPrefix() {
    return 'archive_cards_';
  }
});

/***/ }),
/* 542 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  elementorFrontend.hooks.addAction('frontend/element_ready/search-form.default', __webpack_require__(543));
};

/***/ }),
/* 543 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(19);

var SearchBerHandler = elementorModules.frontend.handlers.Base.extend({
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
        $input.focus();
      }); // Deactivate full-screen mode on click or on esc.

      $container.on('click', function (event) {
        if ($container.hasClass(classes.isFullScreen) && $container[0] === event.target) {
          $container.removeClass(classes.isFullScreen).removeClass(classes.lightbox);
        }
      });
      $closeButton.on('click', function () {
        $container.removeClass(classes.isFullScreen).removeClass(classes.lightbox);
      });
      elementorFrontend.elements.$document.keyup(function (event) {
        var ESC_KEY = 27;

        if (ESC_KEY === event.keyCode) {
          if ($container.hasClass(classes.isFullScreen)) {
            $container.click();
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
        $input.focus();
      });
    }
  }
});

module.exports = function ($scope) {
  new SearchBerHandler({
    $element: $scope
  });
};

/***/ }),
/* 544 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  elementorFrontend.hooks.addAction('frontend/element_ready/woocommerce-menu-cart.default', __webpack_require__(545));

  if (elementorFrontend.isEditMode()) {
    return;
  }

  jQuery(document.body).on('wc_fragments_loaded wc_fragments_refreshed', function () {
    jQuery('div.elementor-widget-woocommerce-menu-cart').each(function () {
      elementorFrontend.elementsHandler.runReadyTrigger(jQuery(this));
    });
  });
};

/***/ }),
/* 545 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(19);

var MiniCartHandler = elementorModules.frontend.handlers.Base.extend({
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
    elementorFrontend.elements.$document.keyup(function (event) {
      var ESC_KEY = 27;

      if (ESC_KEY === event.keyCode) {
        if ($container.hasClass(classes.isShown)) {
          $container.click();
        }
      }
    });
  }
});

module.exports = function ($scope) {
  new MiniCartHandler({
    $element: $scope
  });
};

/***/ })
/******/ ]);
//# sourceMappingURL=frontend.js.map
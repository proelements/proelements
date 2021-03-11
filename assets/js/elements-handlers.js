/*! pro-elements - v3.1.1 - 23-02-2021 */
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["elements-handlers"],{

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

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.define-properties.js":
/*!*******************************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.define-properties.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperties: __webpack_require__(/*! ./_object-dps */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dps.js") });


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

/***/ "../assets/dev/js/frontend/elements-handlers.js":
/*!******************************************************!*\
  !*** ../assets/dev/js/frontend/elements-handlers.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread2 */ "../node_modules/@babel/runtime-corejs2/helpers/objectSpread2.js"));

var _frontend = _interopRequireDefault(__webpack_require__(/*! modules/animated-headline/assets/js/frontend/frontend */ "../modules/animated-headline/assets/js/frontend/frontend.js"));

var _frontend2 = _interopRequireDefault(__webpack_require__(/*! modules/carousel/assets/js/frontend/frontend */ "../modules/carousel/assets/js/frontend/frontend.js"));

var _frontend3 = _interopRequireDefault(__webpack_require__(/*! modules/countdown/assets/js/frontend/frontend */ "../modules/countdown/assets/js/frontend/frontend.js"));

var _frontend4 = _interopRequireDefault(__webpack_require__(/*! modules/forms/assets/js/frontend/frontend */ "../modules/forms/assets/js/frontend/frontend.js"));

var _frontend5 = _interopRequireDefault(__webpack_require__(/*! modules/gallery/assets/js/frontend/frontend */ "../modules/gallery/assets/js/frontend/frontend.js"));

var _frontend6 = _interopRequireDefault(__webpack_require__(/*! modules/lottie/assets/js/frontend/frontend */ "../modules/lottie/assets/js/frontend/frontend.js"));

var _frontend7 = _interopRequireDefault(__webpack_require__(/*! modules/nav-menu/assets/js/frontend/frontend */ "../modules/nav-menu/assets/js/frontend/frontend.js"));

var _frontend8 = _interopRequireDefault(__webpack_require__(/*! modules/popup/assets/js/frontend/frontend */ "../modules/popup/assets/js/frontend/frontend.js"));

var _frontend9 = _interopRequireDefault(__webpack_require__(/*! modules/posts/assets/js/frontend/frontend */ "../modules/posts/assets/js/frontend/frontend.js"));

var _frontend10 = _interopRequireDefault(__webpack_require__(/*! modules/share-buttons/assets/js/frontend/frontend */ "../modules/share-buttons/assets/js/frontend/frontend.js"));

var _frontend11 = _interopRequireDefault(__webpack_require__(/*! modules/slides/assets/js/frontend/frontend */ "../modules/slides/assets/js/frontend/frontend.js"));

var _frontend12 = _interopRequireDefault(__webpack_require__(/*! modules/social/assets/js/frontend/frontend */ "../modules/social/assets/js/frontend/frontend.js"));

var _frontend13 = _interopRequireDefault(__webpack_require__(/*! modules/table-of-contents/assets/js/frontend/frontend */ "../modules/table-of-contents/assets/js/frontend/frontend.js"));

var _frontend14 = _interopRequireDefault(__webpack_require__(/*! modules/theme-builder/assets/js/frontend/frontend */ "../modules/theme-builder/assets/js/frontend/frontend.js"));

var _frontend15 = _interopRequireDefault(__webpack_require__(/*! modules/theme-elements/assets/js/frontend/frontend */ "../modules/theme-elements/assets/js/frontend/frontend.js"));

var _frontend16 = _interopRequireDefault(__webpack_require__(/*! modules/woocommerce/assets/js/frontend/frontend */ "../modules/woocommerce/assets/js/frontend/frontend.js"));

var extendDefaultHandlers = function extendDefaultHandlers(defaultHandlers) {
  var handlers = {
    animatedText: _frontend.default,
    carousel: _frontend2.default,
    countdown: _frontend3.default,
    form: _frontend4.default,
    gallery: _frontend5.default,
    lottie: _frontend6.default,
    nav_menu: _frontend7.default,
    popup: _frontend8.default,
    posts: _frontend9.default,
    share_buttons: _frontend10.default,
    slides: _frontend11.default,
    social: _frontend12.default,
    themeBuilder: _frontend14.default,
    themeElements: _frontend15.default,
    woocommerce: _frontend16.default,
    tableOfContents: _frontend13.default
  };
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, defaultHandlers), handlers);
};

elementorProFrontend.on('elementor-pro/modules/init:before', function () {
  elementorFrontend.hooks.addFilter('elementor-pro/frontend/handlers', extendDefaultHandlers);
});

/***/ }),

/***/ "../modules/animated-headline/assets/js/frontend/frontend.js":
/*!*******************************************************************!*\
  !*** ../modules/animated-headline/assets/js/frontend/frontend.js ***!
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

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this);
    elementorFrontend.elementsHandler.attachHandler('animated-headline', function () {
      return __webpack_require__.e(/*! import() | animated-headline */ "animated-headline").then(__webpack_require__.t.bind(__webpack_require__, /*! ./handlers/animated-headlines */ "../modules/animated-headline/assets/js/frontend/handlers/animated-headlines.js", 23));
    });
    return _this;
  }

  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),

/***/ "../modules/carousel/assets/js/frontend/frontend.js":
/*!**********************************************************!*\
  !*** ../modules/carousel/assets/js/frontend/frontend.js ***!
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

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this);
    elementorFrontend.elementsHandler.attachHandler('media-carousel', function () {
      return Promise.all(/*! import() | media-carousel */[__webpack_require__.e("vendors-node_modules_babel_runtime-corejs2_helpers_asyncToGenerator_js-node_modules_babel_run-fdf909"), __webpack_require__.e("modules_carousel_assets_js_frontend_handlers_base_js"), __webpack_require__.e("media-carousel")]).then(__webpack_require__.t.bind(__webpack_require__, /*! ./handlers/media-carousel */ "../modules/carousel/assets/js/frontend/handlers/media-carousel.js", 23));
    });
    elementorFrontend.elementsHandler.attachHandler('testimonial-carousel', function () {
      return Promise.all(/*! import() | carousel */[__webpack_require__.e("vendors-node_modules_babel_runtime-corejs2_helpers_asyncToGenerator_js-node_modules_babel_run-fdf909"), __webpack_require__.e("modules_carousel_assets_js_frontend_handlers_base_js"), __webpack_require__.e("carousel")]).then(__webpack_require__.t.bind(__webpack_require__, /*! ./handlers/testimonial-carousel */ "../modules/carousel/assets/js/frontend/handlers/testimonial-carousel.js", 23));
    });
    elementorFrontend.elementsHandler.attachHandler('reviews', function () {
      return Promise.all(/*! import() | carousel */[__webpack_require__.e("vendors-node_modules_babel_runtime-corejs2_helpers_asyncToGenerator_js-node_modules_babel_run-fdf909"), __webpack_require__.e("modules_carousel_assets_js_frontend_handlers_base_js"), __webpack_require__.e("carousel")]).then(__webpack_require__.t.bind(__webpack_require__, /*! ./handlers/testimonial-carousel */ "../modules/carousel/assets/js/frontend/handlers/testimonial-carousel.js", 23));
    });
    return _this;
  }

  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),

/***/ "../modules/countdown/assets/js/frontend/frontend.js":
/*!***********************************************************!*\
  !*** ../modules/countdown/assets/js/frontend/frontend.js ***!
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

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this);
    elementorFrontend.elementsHandler.attachHandler('countdown', function () {
      return __webpack_require__.e(/*! import() | countdown */ "countdown").then(__webpack_require__.t.bind(__webpack_require__, /*! ./handlers/countdown */ "../modules/countdown/assets/js/frontend/handlers/countdown.js", 23));
    });
    return _this;
  }

  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),

/***/ "../modules/forms/assets/js/frontend/frontend.js":
/*!*******************************************************!*\
  !*** ../modules/forms/assets/js/frontend/frontend.js ***!
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

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this);
    elementorFrontend.elementsHandler.attachHandler('form', [function () {
      return __webpack_require__.e(/*! import() | form */ "form").then(__webpack_require__.t.bind(__webpack_require__, /*! ./handlers/form-steps */ "../modules/forms/assets/js/frontend/handlers/form-steps.js", 23));
    }, function () {
      return __webpack_require__.e(/*! import() | form */ "form").then(__webpack_require__.t.bind(__webpack_require__, /*! ./handlers/form-sender */ "../modules/forms/assets/js/frontend/handlers/form-sender.js", 23));
    }, function () {
      return __webpack_require__.e(/*! import() | form */ "form").then(__webpack_require__.t.bind(__webpack_require__, /*! ./handlers/form-redirect */ "../modules/forms/assets/js/frontend/handlers/form-redirect.js", 23));
    }, function () {
      return __webpack_require__.e(/*! import() | form */ "form").then(__webpack_require__.t.bind(__webpack_require__, /*! ./handlers/fields/date */ "../modules/forms/assets/js/frontend/handlers/fields/date.js", 23));
    }, function () {
      return __webpack_require__.e(/*! import() | form */ "form").then(__webpack_require__.t.bind(__webpack_require__, /*! ./handlers/recaptcha */ "../modules/forms/assets/js/frontend/handlers/recaptcha.js", 23));
    }, function () {
      return __webpack_require__.e(/*! import() | form */ "form").then(__webpack_require__.t.bind(__webpack_require__, /*! ./handlers/fields/time */ "../modules/forms/assets/js/frontend/handlers/fields/time.js", 23));
    }]);
    elementorFrontend.elementsHandler.attachHandler('subscribe', [function () {
      return __webpack_require__.e(/*! import() | form */ "form").then(__webpack_require__.t.bind(__webpack_require__, /*! ./handlers/form-steps */ "../modules/forms/assets/js/frontend/handlers/form-steps.js", 23));
    }, function () {
      return __webpack_require__.e(/*! import() | form */ "form").then(__webpack_require__.t.bind(__webpack_require__, /*! ./handlers/form-sender */ "../modules/forms/assets/js/frontend/handlers/form-sender.js", 23));
    }, function () {
      return __webpack_require__.e(/*! import() | form */ "form").then(__webpack_require__.t.bind(__webpack_require__, /*! ./handlers/form-redirect */ "../modules/forms/assets/js/frontend/handlers/form-redirect.js", 23));
    }]);
    return _this;
  }

  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),

/***/ "../modules/gallery/assets/js/frontend/frontend.js":
/*!*********************************************************!*\
  !*** ../modules/gallery/assets/js/frontend/frontend.js ***!
  \*********************************************************/
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

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this);
    elementorFrontend.elementsHandler.attachHandler('gallery', function () {
      return __webpack_require__.e(/*! import() | gallery */ "gallery").then(__webpack_require__.t.bind(__webpack_require__, /*! ./handler */ "../modules/gallery/assets/js/frontend/handler.js", 23));
    });
    return _this;
  }

  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),

/***/ "../modules/lottie/assets/js/frontend/frontend.js":
/*!********************************************************!*\
  !*** ../modules/lottie/assets/js/frontend/frontend.js ***!
  \********************************************************/
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

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this);
    elementorFrontend.elementsHandler.attachHandler('lottie', function () {
      return __webpack_require__.e(/*! import() | lottie */ "lottie").then(__webpack_require__.t.bind(__webpack_require__, /*! ./handler */ "../modules/lottie/assets/js/frontend/handler.js", 23));
    });
    return _this;
  }

  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),

/***/ "../modules/nav-menu/assets/js/frontend/frontend.js":
/*!**********************************************************!*\
  !*** ../modules/nav-menu/assets/js/frontend/frontend.js ***!
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

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

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

    elementorFrontend.elementsHandler.attachHandler('nav-menu', function () {
      return __webpack_require__.e(/*! import() | nav-menu */ "nav-menu").then(__webpack_require__.t.bind(__webpack_require__, /*! ./handlers/nav-menu */ "../modules/nav-menu/assets/js/frontend/handlers/nav-menu.js", 23));
    });
    return _this;
  }

  return _default;
}(elementorModules.Module);

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

/***/ "../modules/popup/assets/js/frontend/frontend.js":
/*!*******************************************************!*\
  !*** ../modules/popup/assets/js/frontend/frontend.js ***!
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

var _document = _interopRequireDefault(__webpack_require__(/*! ./document */ "../modules/popup/assets/js/frontend/document.js"));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this);
    elementorFrontend.hooks.addAction('elementor/frontend/documents-manager/init-classes', _this.addDocumentClass);
    elementorFrontend.elementsHandler.attachHandler('form', function () {
      return __webpack_require__.e(/*! import() | popup */ "popup").then(__webpack_require__.t.bind(__webpack_require__, /*! ./handlers/forms-action */ "../modules/popup/assets/js/frontend/handlers/forms-action.js", 23));
    });
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

/***/ "../modules/posts/assets/js/frontend/frontend.js":
/*!*******************************************************!*\
  !*** ../modules/posts/assets/js/frontend/frontend.js ***!
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

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this);
    elementorFrontend.elementsHandler.attachHandler('posts', function () {
      return __webpack_require__.e(/*! import() | posts */ "posts").then(__webpack_require__.t.bind(__webpack_require__, /*! ./handlers/posts */ "../modules/posts/assets/js/frontend/handlers/posts.js", 23));
    }, 'classic');
    elementorFrontend.elementsHandler.attachHandler('posts', function () {
      return __webpack_require__.e(/*! import() | posts */ "posts").then(__webpack_require__.t.bind(__webpack_require__, /*! ./handlers/posts */ "../modules/posts/assets/js/frontend/handlers/posts.js", 23));
    }, 'full_content');
    elementorFrontend.elementsHandler.attachHandler('posts', function () {
      return __webpack_require__.e(/*! import() | posts */ "posts").then(__webpack_require__.t.bind(__webpack_require__, /*! ./handlers/cards */ "../modules/posts/assets/js/frontend/handlers/cards.js", 23));
    }, 'cards');
    elementorFrontend.elementsHandler.attachHandler('portfolio', function () {
      return __webpack_require__.e(/*! import() | portfolio */ "portfolio").then(__webpack_require__.t.bind(__webpack_require__, /*! ./handlers/portfolio */ "../modules/posts/assets/js/frontend/handlers/portfolio.js", 23));
    });
    return _this;
  }

  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),

/***/ "../modules/share-buttons/assets/js/frontend/frontend.js":
/*!***************************************************************!*\
  !*** ../modules/share-buttons/assets/js/frontend/frontend.js ***!
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

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this);
    elementorFrontend.elementsHandler.attachHandler('share-buttons', function () {
      return __webpack_require__.e(/*! import() | share-buttons */ "share-buttons").then(__webpack_require__.t.bind(__webpack_require__, /*! ./handlers/share-buttons */ "../modules/share-buttons/assets/js/frontend/handlers/share-buttons.js", 23));
    });
    return _this;
  }

  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),

/***/ "../modules/slides/assets/js/frontend/frontend.js":
/*!********************************************************!*\
  !*** ../modules/slides/assets/js/frontend/frontend.js ***!
  \********************************************************/
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

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this);
    elementorFrontend.elementsHandler.attachHandler('slides', function () {
      return Promise.all(/*! import() | slides */[__webpack_require__.e("vendors-node_modules_babel_runtime-corejs2_helpers_asyncToGenerator_js-node_modules_babel_run-fdf909"), __webpack_require__.e("slides")]).then(__webpack_require__.t.bind(__webpack_require__, /*! ./handlers/slides */ "../modules/slides/assets/js/frontend/handlers/slides.js", 23));
    });
    return _this;
  }

  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),

/***/ "../modules/social/assets/js/frontend/frontend.js":
/*!********************************************************!*\
  !*** ../modules/social/assets/js/frontend/frontend.js ***!
  \********************************************************/
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

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this);
    elementorFrontend.elementsHandler.attachHandler('facebook-button', function () {
      return __webpack_require__.e(/*! import() | social */ "social").then(__webpack_require__.t.bind(__webpack_require__, /*! ./handlers/facebook */ "../modules/social/assets/js/frontend/handlers/facebook.js", 23));
    });
    elementorFrontend.elementsHandler.attachHandler('facebook-comments', function () {
      return __webpack_require__.e(/*! import() | social */ "social").then(__webpack_require__.t.bind(__webpack_require__, /*! ./handlers/facebook */ "../modules/social/assets/js/frontend/handlers/facebook.js", 23));
    });
    elementorFrontend.elementsHandler.attachHandler('facebook-embed', function () {
      return __webpack_require__.e(/*! import() | social */ "social").then(__webpack_require__.t.bind(__webpack_require__, /*! ./handlers/facebook */ "../modules/social/assets/js/frontend/handlers/facebook.js", 23));
    });
    elementorFrontend.elementsHandler.attachHandler('facebook-page', function () {
      return __webpack_require__.e(/*! import() | social */ "social").then(__webpack_require__.t.bind(__webpack_require__, /*! ./handlers/facebook */ "../modules/social/assets/js/frontend/handlers/facebook.js", 23));
    });
    return _this;
  }

  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),

/***/ "../modules/table-of-contents/assets/js/frontend/frontend.js":
/*!*******************************************************************!*\
  !*** ../modules/table-of-contents/assets/js/frontend/frontend.js ***!
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

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this);
    elementorFrontend.elementsHandler.attachHandler('table-of-contents', function () {
      return __webpack_require__.e(/*! import() | table-of-contents */ "table-of-contents").then(__webpack_require__.t.bind(__webpack_require__, /*! ./handlers/table-of-contents */ "../modules/table-of-contents/assets/js/frontend/handlers/table-of-contents.js", 23));
    });
    return _this;
  }

  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),

/***/ "../modules/theme-builder/assets/js/frontend/frontend.js":
/*!***************************************************************!*\
  !*** ../modules/theme-builder/assets/js/frontend/frontend.js ***!
  \***************************************************************/
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

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this);
    elementorFrontend.elementsHandler.attachHandler('archive-posts', function () {
      return __webpack_require__.e(/*! import() | archive-posts */ "archive-posts").then(__webpack_require__.t.bind(__webpack_require__, /*! ./handlers/archive-posts-skin-classic */ "../modules/theme-builder/assets/js/frontend/handlers/archive-posts-skin-classic.js", 23));
    }, 'archive_classic');
    elementorFrontend.elementsHandler.attachHandler('archive-posts', function () {
      return __webpack_require__.e(/*! import() | archive-posts */ "archive-posts").then(__webpack_require__.t.bind(__webpack_require__, /*! ./handlers/archive-posts-skin-classic */ "../modules/theme-builder/assets/js/frontend/handlers/archive-posts-skin-classic.js", 23));
    }, 'archive_full_content');
    elementorFrontend.elementsHandler.attachHandler('archive-posts', function () {
      return __webpack_require__.e(/*! import() | archive-posts */ "archive-posts").then(__webpack_require__.t.bind(__webpack_require__, /*! ./handlers/archive-posts-skin-cards */ "../modules/theme-builder/assets/js/frontend/handlers/archive-posts-skin-cards.js", 23));
    }, 'archive_cards');
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

/***/ "../modules/theme-elements/assets/js/frontend/frontend.js":
/*!****************************************************************!*\
  !*** ../modules/theme-elements/assets/js/frontend/frontend.js ***!
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

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this);
    elementorFrontend.elementsHandler.attachHandler('search-form', function () {
      return __webpack_require__.e(/*! import() | search-form */ "search-form").then(__webpack_require__.t.bind(__webpack_require__, /*! ./handlers/search-form */ "../modules/theme-elements/assets/js/frontend/handlers/search-form.js", 23));
    });
    return _this;
  }

  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),

/***/ "../modules/woocommerce/assets/js/frontend/frontend.js":
/*!*************************************************************!*\
  !*** ../modules/woocommerce/assets/js/frontend/frontend.js ***!
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

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this);
    elementorFrontend.elementsHandler.attachHandler('woocommerce-menu-cart', function () {
      return __webpack_require__.e(/*! import() | woocommerce-menu-cart */ "woocommerce-menu-cart").then(__webpack_require__.t.bind(__webpack_require__, /*! ./handlers/menu-cart */ "../modules/woocommerce/assets/js/frontend/handlers/menu-cart.js", 23));
    });

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


/***/ })

},
0,[["../assets/dev/js/frontend/elements-handlers.js","webpack-pro.runtime","frontend"]]]);
//# sourceMappingURL=elements-handlers.js.map
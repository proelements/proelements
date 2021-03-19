/*! pro-elements - v3.2.0 - 14-03-2021 */
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["carousel"],{

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

/***/ })

}]);
//# sourceMappingURL=carousel.bb4c8274de83e045027f.bundle.js.map
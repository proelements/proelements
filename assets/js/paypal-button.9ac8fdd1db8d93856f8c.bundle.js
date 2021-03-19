/*! pro-elements - v3.2.0 - 14-03-2021 */
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["paypal-button"],{

/***/ "../modules/payments/assets/js/frontend/handlers/paypal-button.js":
/*!************************************************************************!*\
  !*** ../modules/payments/assets/js/frontend/handlers/paypal-button.js ***!
  \************************************************************************/
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

var PayPalHandler = /*#__PURE__*/function (_elementorModules$fro) {
  (0, _inherits2.default)(PayPalHandler, _elementorModules$fro);

  var _super = (0, _createSuper2.default)(PayPalHandler);

  function PayPalHandler() {
    (0, _classCallCheck2.default)(this, PayPalHandler);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(PayPalHandler, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        selectors: {
          button: '.elementor-button.elementor-paypal-legacy',
          errors: '.elementor-message-danger'
        }
      };
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var settings = this.getSettings();
      return {
        wrapper: this.$element[0],
        button: this.$element[0].querySelector(settings.selectors.button),
        errors: this.$element[0].querySelectorAll(settings.selectors.errors)
      };
    }
  }, {
    key: "handleClick",
    value: function handleClick(event) {
      if (0 < this.elements.errors.length) {
        event.preventDefault();
        this.elements.errors.forEach(function (error) {
          error.classList.remove('elementor-hidden');
        });
      }
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      this.elements.button.addEventListener('click', this.handleClick.bind(this));
    }
  }]);
  return PayPalHandler;
}(elementorModules.frontend.handlers.Base);

exports.default = PayPalHandler;

/***/ })

}]);
//# sourceMappingURL=paypal-button.9ac8fdd1db8d93856f8c.bundle.js.map
/*! pro-elements - v3.26.0 - 07-01-2025 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["paypal-button"],{

/***/ "../modules/payments/assets/js/frontend/handlers/paypal-button.js":
/*!************************************************************************!*\
  !*** ../modules/payments/assets/js/frontend/handlers/paypal-button.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class PayPalHandler extends elementorModules.frontend.handlers.Base {
  getDefaultSettings() {
    return {
      selectors: {
        button: '.elementor-button.elementor-paypal-legacy',
        errors: '.elementor-message-danger'
      }
    };
  }
  getDefaultElements() {
    const settings = this.getSettings();
    return {
      wrapper: this.$element[0],
      button: this.$element[0].querySelector(settings.selectors.button),
      errors: this.$element[0].querySelectorAll(settings.selectors.errors)
    };
  }
  handleClick(event) {
    if (0 < this.elements.errors.length) {
      event.preventDefault();
      this.elements.errors.forEach(error => {
        error.classList.remove('elementor-hidden');
      });
    }
  }
  bindEvents() {
    this.elements.button.addEventListener('click', this.handleClick.bind(this));
  }
}
exports["default"] = PayPalHandler;

/***/ })

}]);
//# sourceMappingURL=paypal-button.55ffb013a3fe565f55a5.bundle.js.map
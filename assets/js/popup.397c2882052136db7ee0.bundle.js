/*! pro-elements - v3.13.2 - 22-05-2023 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["popup"],{

/***/ "../modules/popup/assets/js/frontend/handlers/forms-action.js":
/*!********************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/handlers/forms-action.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = elementorModules.frontend.handlers.Base.extend({
  getDefaultSettings() {
    return {
      selectors: {
        form: '.elementor-form'
      }
    };
  },
  getDefaultElements() {
    var selectors = this.getSettings('selectors'),
      elements = {};
    elements.$form = this.$element.find(selectors.form);
    return elements;
  },
  bindEvents() {
    this.elements.$form.on('submit_success', this.handleFormAction);
  },
  handleFormAction(event, response) {
    if ('undefined' === typeof response.data.popup) {
      return;
    }
    const popupSettings = response.data.popup;
    if ('open' === popupSettings.action) {
      return elementorProFrontend.modules.popup.showPopup(popupSettings);
    }
    setTimeout(() => {
      return elementorProFrontend.modules.popup.closePopup(popupSettings, event);
    }, 1000);
  }
});
exports["default"] = _default;

/***/ })

}]);
//# sourceMappingURL=popup.397c2882052136db7ee0.bundle.js.map
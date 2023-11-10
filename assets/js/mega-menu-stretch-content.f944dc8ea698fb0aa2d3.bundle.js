/*! pro-elements - v3.17.0 - 01-11-2023 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["mega-menu-stretch-content"],{

/***/ "../modules/mega-menu/assets/js/frontend/handlers/stretch-menu-item-content.js":
/*!*************************************************************************************!*\
  !*** ../modules/mega-menu/assets/js/frontend/handlers/stretch-menu-item-content.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class StretchedMenuItemContent extends elementorModules.frontend.handlers.StretchedElement {
  getStretchedClass() {
    return 'elementor-widget-n-menu';
  }
  getStretchElementForConfig() {
    return this.$element.find('.e-n-menu-wrapper');
  }
  getStretchElementConfig() {
    const elementConfig = super.getStretchElementConfig();
    elementConfig.cssOutput = 'variables';
    return elementConfig;
  }
  bindEvents() {
    super.bindEvents();
    elementorFrontend.addListenerOnce(this.getUniqueHandlerID(), 'elementor-pro/mega-menu/dropdown-open', this.stretch);
  }
  unbindEvents() {
    super.unbindEvents();
    elementorFrontend.removeListeners(this.getUniqueHandlerID(), 'elementor-pro/mega-menu/dropdown-open', this.stretch);
  }
  isStretchSettingEnabled() {
    return true;
  }
  isActive() {
    return true;
  }
}
exports["default"] = StretchedMenuItemContent;

/***/ })

}]);
//# sourceMappingURL=mega-menu-stretch-content.f944dc8ea698fb0aa2d3.bundle.js.map
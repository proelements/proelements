/*! pro-elements - v3.26.0 - 07-01-2025 */
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
    elementorFrontend.elements.$window.on('elementor-pro/mega-menu/heading-mouse-event', this.stretch);
  }
  unbindEvents() {
    super.unbindEvents();
    elementorFrontend.removeListeners(this.getUniqueHandlerID(), 'elementor-pro/mega-menu/dropdown-open', this.stretch);
    elementorFrontend.elements.$window.off('elementor-pro/mega-menu/heading-mouse-event', this.stretch);
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
//# sourceMappingURL=mega-menu-stretch-content.0d76e4a3b7bf65ff6f9b.bundle.js.map
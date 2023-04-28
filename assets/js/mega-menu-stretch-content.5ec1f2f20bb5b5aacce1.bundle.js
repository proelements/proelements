/*! pro-elements - v3.12.3 - 23-04-2023 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["mega-menu-stretch-content"],{

/***/ "../modules/mega-menu/assets/js/frontend/handlers/stretch-menu-item-content.js":
/*!*************************************************************************************!*\
  !*** ../modules/mega-menu/assets/js/frontend/handlers/stretch-menu-item-content.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _utils = __webpack_require__(/*! ../utils */ "../modules/mega-menu/assets/js/frontend/utils.js");
class StretchedMenuItemContent extends elementorModules.frontend.handlers.StretchedElement {
  getStretchedClass() {
    return 'elementor-widget-n-menu';
  }
  getStretchSettingName() {
    return 'content_width';
  }
  getStretchActiveValue() {
    return 'full_width';
  }
  getStretchElementForConfig() {
    return this.$element.find('.e-n-menu-items-content');
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
  stretch() {
    if (!this.isStretchSettingEnabled()) {
      return;
    }
    if (this.$element.hasClass('e-fit_to_content') && !(0, _utils.isMenuInDropdownMode)(this.getElementSettings())) {
      this.stretchElement.reset();
      return;
    }
    this.stretchElement.stretch();
  }
}
exports["default"] = StretchedMenuItemContent;

/***/ }),

/***/ "../modules/mega-menu/assets/js/frontend/utils.js":
/*!********************************************************!*\
  !*** ../modules/mega-menu/assets/js/frontend/utils.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isMenuInDropdownMode = isMenuInDropdownMode;
function isMenuInDropdownMode(elementSettings) {
  if ('dropdown' === elementSettings.item_layout) {
    return true;
  }
  const activeBreakpointsList = elementorFrontend.breakpoints.getActiveBreakpointsList({
      withDesktop: true
    }),
    breakpointIndex = activeBreakpointsList.indexOf(elementSettings.breakpoint_selector),
    currentDeviceModeIndex = activeBreakpointsList.indexOf(elementorFrontend.getCurrentDeviceMode());
  return currentDeviceModeIndex <= breakpointIndex;
}

/***/ })

}]);
//# sourceMappingURL=mega-menu-stretch-content.5ec1f2f20bb5b5aacce1.bundle.js.map
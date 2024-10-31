/*! pro-elements - v3.25.0 - 28-10-2024 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["contact-buttons-var-10"],{

/***/ "../modules/floating-buttons/assets/js/frontend/handlers/contact-buttons-v10.js":
/*!**************************************************************************************!*\
  !*** ../modules/floating-buttons/assets/js/frontend/handlers/contact-buttons-v10.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _base = _interopRequireDefault(__webpack_require__(/*! elementor-frontend/handlers/base */ "../../elementor/assets/dev/js/frontend/handlers/base.js"));
var _clickTracking = _interopRequireDefault(__webpack_require__(/*! ../../shared/frontend/handlers/click-tracking */ "../modules/floating-buttons/assets/js/shared/frontend/handlers/click-tracking.js"));
class ContactButtonsv10Handler extends _base.default {
  getDefaultSettings() {
    return {
      selectors: {
        main: '.e-contact-buttons-var-10',
        links: '.e-contact-buttons__contact-icon-link'
      },
      constants: {
        active: 'active'
      }
    };
  }
  getDefaultElements() {
    const selectors = this.getSettings('selectors');
    return {
      main: this.$element[0].querySelector(selectors.main),
      links: this.$element[0].querySelectorAll(selectors.links)
    };
  }
  isMobileDevice() {
    const mobileDevices = ['mobile', 'mobile_extra'];
    return mobileDevices.includes(elementorFrontend.getCurrentDeviceMode());
  }
  handleLinkClick(event) {
    event.preventDefault();
    const {
      active
    } = this.getSettings('constants');
    if (event.currentTarget.classList.contains(active)) {
      const href = event.currentTarget.getAttribute('href');
      const target = event.currentTarget.getAttribute('target');

      // If the target is set, open in a new window, otherwise just change location
      if (target) {
        window.open(href, target);
      } else if (href) {
        window.location.href = href;
      }
      event.currentTarget.classList.remove(active);
    } else {
      this.closeAllLinks();
      event.currentTarget.classList.add(active);
    }
  }
  closeAllLinks() {
    const {
      active
    } = this.getSettings('constants');
    this.elements.links.forEach(link => link.classList.remove(active));
  }
  linksEventListeners() {
    if (!this.elements.links.length) {
      return;
    }
    if (this.isMobileDevice()) {
      this.elements.links.forEach(link => {
        link.addEventListener('click', event => {
          this.handleLinkClick(event);
        });
      });

      // Click outside will close all the links
      document.addEventListener('click', event => {
        if (!this.elements.main.contains(event.target)) {
          this.closeAllLinks();
        }
      });
    }
  }
  bindEvents() {
    this.linksEventListeners();
  }
  setupInnerContainer() {
    this.elements.main.closest('.e-con-inner').classList.add('e-con-inner--floating-buttons');
  }
  onInit() {
    super.onInit(...arguments);
    this.clickTrackingHandler = new _clickTracking.default({
      $element: this.$element
    });
    this.setupInnerContainer();
  }
}
exports["default"] = ContactButtonsv10Handler;

/***/ })

}]);
//# sourceMappingURL=contact-buttons-var-10.fc383e580d728636b0fa.bundle.js.map
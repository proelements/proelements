/*! elementor-pro - v3.30.0 - 01-07-2025 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["floating-bars-var-3"],{

/***/ "../modules/floating-buttons/assets/js/frontend/handlers/floating-bars-v3.js":
/*!***********************************************************************************!*\
  !*** ../modules/floating-buttons/assets/js/frontend/handlers/floating-bars-v3.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _base = _interopRequireDefault(__webpack_require__(/*! elementor-frontend/handlers/base */ "../../elementor/assets/dev/js/frontend/handlers/base.js"));
var _copyToClipboard = __webpack_require__(/*! ../../../../../notes/assets/js/services/copy-to-clipboard */ "../modules/notes/assets/js/services/copy-to-clipboard/index.js");
var _floatinBarDom = _interopRequireDefault(__webpack_require__(/*! ../classes/floatin-bar-dom */ "../modules/floating-buttons/assets/js/frontend/classes/floatin-bar-dom.js"));
var _clickTracking = _interopRequireDefault(__webpack_require__(/*! ../../shared/frontend/handlers/click-tracking */ "../modules/floating-buttons/assets/js/shared/frontend/handlers/click-tracking.js"));
class FloatingBarsHandler extends _base.default {
  getDefaultSettings() {
    return {
      selectors: {
        main: '.e-floating-bars',
        mainV3: '.e-floating-bars-var-3',
        closeButton: '.e-floating-bars__close-button',
        couponButton: '.e-floating-bars__coupon-button',
        couponCode: '.e-floating-bars__coupon-code',
        codeTextGroup: '.e-floating-bars__coupon-code',
        successTextGroup: '.e-floating-bars__coupon-success'
      },
      constants: {
        couponEntranceAnimation: 'style_coupon_animation',
        couponEntranceAnimationDelay: 'style_coupon_animation_delay',
        hasEntranceAnimation: 'has-entrance-animation',
        visible: 'visible',
        isSticky: 'is-sticky',
        hasVerticalPositionTop: 'has-vertical-position-top',
        hasVerticalPositionBottom: 'has-vertical-position-bottom',
        isHidden: 'is-hidden',
        successMessageDurationControl: 'style_coupon_success_message_duration',
        animated: 'animated'
      }
    };
  }
  getDefaultElements() {
    const selectors = this.getSettings('selectors');
    return {
      main: this.$element[0].querySelector(selectors.main),
      mainV3: this.$element[0].querySelector(selectors.mainV3),
      mainAll: this.$element[0].querySelectorAll(selectors.main),
      closeButton: this.$element[0].querySelector(selectors.closeButton),
      couponButton: this.$element[0].querySelector(selectors.couponButton),
      couponCode: this.$element[0].querySelector(selectors.couponCode),
      codeTextGroup: this.$element[0].querySelector(selectors.codeTextGroup),
      successTextGroup: this.$element[0].querySelector(selectors.successTextGroup)
    };
  }
  getResponsiveSetting(controlName) {
    const currentDevice = elementorFrontend.getCurrentDeviceMode();
    return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(), controlName, '', currentDevice);
  }
  bindEvents() {
    if (this.elements.closeButton) {
      this.elements.closeButton.addEventListener('click', this.closeFloatingBar.bind(this));
    }
    if (this.elements.couponButton) {
      this.elements.couponButton.addEventListener('animationend', this.handleAnimationEnd.bind(this));
    }
    if (this.elements.main) {
      window.addEventListener('keyup', this.onDocumentKeyup.bind(this));
    }
    if (this.elements.couponButton) {
      this.elements.couponButton.addEventListener('click', this.handleCouponButtonClick.bind(this));
    }
    if (this.hasStickyElements()) {
      window.addEventListener('resize', this.handleStickyElements.bind(this));
    }
  }
  isStickyTop() {
    const {
      isSticky,
      hasVerticalPositionTop
    } = this.getSettings('constants');
    return this.elements.main.classList.contains(isSticky) && this.elements.main.classList.contains(hasVerticalPositionTop);
  }
  isStickyBottom() {
    const {
      isSticky,
      hasVerticalPositionBottom
    } = this.getSettings('constants');
    return this.elements.main.classList.contains(isSticky) && this.elements.main.classList.contains(hasVerticalPositionBottom);
  }
  hasStickyElements() {
    const stickyElements = document.querySelectorAll('.elementor-sticky');
    return stickyElements.length > 0;
  }
  focusOnLoad() {
    this.elements.main.setAttribute('tabindex', '0');
    this.elements.main.focus({
      focusVisible: true
    });
  }
  applyBodyPadding() {
    const offsetHeight = this.elements.main.offsetHeight;
    document.body.style.paddingTop = `${offsetHeight}px`;
  }
  removeBodyPadding() {
    document.body.style.paddingTop = '0';
  }
  handleWPAdminBar() {
    const wpAdminBar = elementorFrontend.elements.$wpAdminBar;
    if (wpAdminBar.length) {
      this.elements.main.style.top = `${wpAdminBar.height()}px`;
    }
  }
  handleStickyElements() {
    const mainHeight = this.elements.main.offsetHeight;
    const wpAdminBar = elementorFrontend.elements.$wpAdminBar;
    const stickyElements = document.querySelectorAll('.elementor-sticky:not(.elementor-sticky__spacer)');
    if (0 === stickyElements.length) {
      return;
    }
    stickyElements.forEach(stickyElement => {
      const dataSettings = stickyElement.getAttribute('data-settings');
      const stickyPosition = JSON.parse(dataSettings)?.sticky;
      const isTop = '0px' === stickyElement.style.top || 'top' === stickyPosition;
      const isBottom = '0px' === stickyElement.style.bottom || 'bottom' === stickyPosition;
      if (this.isStickyTop() && isTop) {
        if (wpAdminBar.length) {
          stickyElement.style.top = `${mainHeight + wpAdminBar.height()}px`;
        } else {
          stickyElement.style.top = `${mainHeight}px`;
        }
      } else if (this.isStickyBottom() && isBottom) {
        stickyElement.style.bottom = `${mainHeight}px`;
      }
      if (elementorFrontend.isEditMode()) {
        if (isTop) {
          stickyElement.style.top = this.isStickyTop() ? `${mainHeight}px` : '0px';
        } else if (isBottom) {
          stickyElement.style.bottom = this.isStickyBottom() ? `${mainHeight}px` : '0px';
        }
      }
    });
    document.querySelectorAll('.elementor-sticky__spacer').forEach(stickySpacer => {
      const dataSettings = stickySpacer.getAttribute('data-settings');
      const stickyPosition = JSON.parse(dataSettings)?.sticky;
      const isTop = '0px' === stickySpacer.style.top || 'top' === stickyPosition;
      if (this.isStickyTop() && isTop) {
        stickySpacer.style.marginBottom = `${mainHeight}px`;
      }
    });
  }
  closeFloatingBar() {
    const {
      isHidden
    } = this.getSettings('constants');
    if (!elementorFrontend.isEditMode()) {
      this.elements.main.classList.add(isHidden);
      if (this.hasStickyElements()) {
        this.handleStickyElements();
      } else if (this.isStickyTop()) {
        this.removeBodyPadding();
      }
    }
  }
  initEntranceAnimation() {
    const {
      animated,
      couponEntranceAnimation,
      couponEntranceAnimationDelay,
      hasEntranceAnimation
    } = this.getSettings('constants');
    const entranceAnimationClass = this.getResponsiveSetting(couponEntranceAnimation);
    const entranceAnimationDelay = this.getResponsiveSetting(couponEntranceAnimationDelay) || 0;
    const setTimeoutDelay = entranceAnimationDelay + 500;
    this.elements.couponButton.classList.add(animated);
    this.elements.couponButton.classList.add(entranceAnimationClass);
    setTimeout(() => {
      this.elements.couponButton.classList.remove(hasEntranceAnimation);
    }, setTimeoutDelay);
  }
  handleAnimationEnd() {
    this.removeEntranceAnimationClasses();
    this.focusOnLoad();
  }
  removeEntranceAnimationClasses() {
    if (!this.elements.couponButton) {
      return;
    }
    const {
      animated,
      couponEntranceAnimation,
      visible
    } = this.getSettings('constants');
    const entranceAnimationClass = this.getResponsiveSetting(couponEntranceAnimation);
    this.elements.couponButton.classList.remove(animated);
    this.elements.couponButton.classList.remove(entranceAnimationClass);
    this.elements.couponButton.classList.add(visible);
  }
  onDocumentKeyup(event) {
    // Bail if not ESC key
    if (event.keyCode !== 27 || !this.elements.main) {
      return;
    }

    /* eslint-disable @wordpress/no-global-active-element */
    if (this.elements.main.contains(document.activeElement)) {
      this.closeFloatingBar();
    }
    /* eslint-enable @wordpress/no-global-active-element */
  }
  getDuration(duration) {
    const isUnitSeconds = 's' === duration.unit;
    const DEFAULT_DURATION_SIZE = isUnitSeconds ? '1.5' : '1500';
    const size = '' !== duration.size ? duration.size : DEFAULT_DURATION_SIZE;
    return isUnitSeconds ? size * 1000 : size;
  }
  handleCouponButtonClick(element) {
    const {
      successMessageDurationControl,
      isHidden
    } = this.getSettings('constants');
    const text = this.elements.couponCode.innerText;
    const successMessageDuration = this.getResponsiveSetting(successMessageDurationControl);
    const duration = this.getDuration(successMessageDuration);
    const currentWidth = element.currentTarget.getBoundingClientRect().width;
    const currentHeight = element.currentTarget.getBoundingClientRect().height;
    this.elements.mainV3.style.setProperty('--e-floating-bars-coupon-width', `${currentWidth}px`);
    this.elements.mainV3.style.setProperty('--e-floating-bars-coupon-height', `${currentHeight}px`);
    (0, _copyToClipboard.copyToClipboard)(text);
    this.elements.codeTextGroup.classList.add(isHidden);
    this.elements.successTextGroup.classList.remove(isHidden);
    setTimeout(() => {
      this.elements.codeTextGroup.classList.remove(isHidden);
      this.elements.successTextGroup.classList.add(isHidden);
      this.elements.mainV3.style.setProperty('--e-floating-bars-coupon-width', 'initial');
      this.elements.mainV3.style.setProperty('--e-floating-bars-coupon-height', 'initial');
    }, duration);
  }
  initDefaultState() {
    const {
      hasEntranceAnimation
    } = this.getSettings('constants');
    if (this.isStickyTop()) {
      this.handleWPAdminBar();
    }
    if (this.hasStickyElements()) {
      this.handleStickyElements();
    } else if (this.isStickyTop()) {
      this.applyBodyPadding();
    }
    if (this.elements.main && !this.elements.couponButton.classList.contains(hasEntranceAnimation) && !elementorFrontend.isEditMode()) {
      this.focusOnLoad();
    }
  }
  setupInnerContainer() {
    this.elements.main.closest('.e-con-inner').classList.add('e-con-inner--floating-bars');
    this.elements.main.closest('.e-con').classList.add('e-con--floating-bars');
  }
  onInit() {
    const {
      hasEntranceAnimation
    } = this.getSettings('constants');
    super.onInit(...arguments);
    this.clickTrackingHandler = new _clickTracking.default({
      $element: this.$element
    });
    const domHelper = new _floatinBarDom.default(this.$element);
    domHelper.maybeMoveToTop();
    if (this.elements.couponButton && this.elements.couponButton.classList.contains(hasEntranceAnimation)) {
      this.initEntranceAnimation();
    }
    this.initDefaultState();
    this.setupInnerContainer();
  }
}
exports["default"] = FloatingBarsHandler;

/***/ }),

/***/ "../modules/notes/assets/js/services/copy-to-clipboard/index.js":
/*!**********************************************************************!*\
  !*** ../modules/notes/assets/js/services/copy-to-clipboard/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.canCopyToClipboard = canCopyToClipboard;
exports.copyToClipboard = copyToClipboard;
/**
 * Check if there is access to the clipboard API
 * (Usually, when a website doesn't have an SSL certificate, the browser won't expose the clipboard API).
 *
 * @return {boolean} can copy to clipboard?
 */
function canCopyToClipboard() {
  return !!navigator?.clipboard;
}

/**
 * Will copy value to the clipboard
 *
 * @param {string} value
 */
function copyToClipboard(value) {
  if (!canCopyToClipboard()) {
    throw new Error('Cannot copy to clipboard, please make sure you are using SSL in your website.');
  }
  navigator.clipboard.writeText(value);
}

/***/ })

}]);
//# sourceMappingURL=floating-bars-var-3.6cef001471f04cdb931e.bundle.js.map
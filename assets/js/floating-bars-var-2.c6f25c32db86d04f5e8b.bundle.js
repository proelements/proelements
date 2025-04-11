/*! pro-elements - v3.28.0 - 23-03-2025 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["floating-bars-var-2"],{

/***/ "../modules/floating-buttons/assets/js/frontend/handlers/floating-bars-v2.js":
/*!***********************************************************************************!*\
  !*** ../modules/floating-buttons/assets/js/frontend/handlers/floating-bars-v2.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _base = _interopRequireDefault(__webpack_require__(/*! elementor-frontend/handlers/base */ "../../elementor/assets/dev/js/frontend/handlers/base.js"));
var _floatinBarDom = _interopRequireDefault(__webpack_require__(/*! ../classes/floatin-bar-dom */ "../modules/floating-buttons/assets/js/frontend/classes/floatin-bar-dom.js"));
var _clickTracking = _interopRequireDefault(__webpack_require__(/*! ../../shared/frontend/handlers/click-tracking */ "../modules/floating-buttons/assets/js/shared/frontend/handlers/click-tracking.js"));
class FloatingBarsHandler extends _base.default {
  getDefaultSettings() {
    return {
      selectors: {
        main: '.e-floating-bars',
        closeButton: '.e-floating-bars__close-button',
        playButton: '.e-floating-bars__play-button',
        pauseButton: '.e-floating-bars__pause-button',
        headline: '.e-floating-bars__headline',
        headlines: '.e-floating-bars__headlines',
        headlinesInner: '.e-floating-bars__headlines-inner',
        overlay: '.e-floating-bars__overlay'
      },
      constants: {
        isHidden: 'is-hidden',
        isSticky: 'is-sticky',
        hasVerticalPositionTop: 'has-vertical-position-top',
        hasVerticalPositionBottom: 'has-vertical-position-bottom',
        isPaused: 'is-paused',
        animationTypeControl: 'style_ticker_animation_type',
        autoplay: 'autoplay'
      }
    };
  }
  onElementChange(property) {
    const verticalSpaceProperties = ['style_headline_text_typography_font_size', 'style_headlines_icon_size', 'style_floating_bar_padding', 'style_floating_bar_controls_size', 'style_floating_bar_element_spacing'];
    if (verticalSpaceProperties.includes(property)) {
      this.initDefaultState();
    }
  }
  getDefaultElements() {
    const selectors = this.getSettings('selectors');
    return {
      main: this.$element[0].querySelector(selectors.main),
      closeButton: this.$element[0].querySelector(selectors.closeButton),
      pauseButton: this.$element[0].querySelector(selectors.pauseButton),
      playButton: this.$element[0].querySelector(selectors.playButton),
      headlineAll: this.$element[0].querySelectorAll(selectors.headline),
      headlines: this.$element[0].querySelector(selectors.headlines),
      headlinesInner: this.$element[0].querySelector(selectors.headlinesInner),
      overlay: this.$element[0].querySelector(selectors.overlay)
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
    if (this.elements.pauseButton) {
      this.elements.pauseButton.addEventListener('click', this.pauseCarousel.bind(this));
    }
    if (this.elements.playButton) {
      this.elements.playButton.addEventListener('click', this.playCarousel.bind(this));
    }
    if (this.hasStickyElements()) {
      window.addEventListener('resize', this.handleStickyElements.bind(this));
    }
  }
  isMobileDevice() {
    const mobileDevices = ['mobile', 'mobile_extra'];
    return mobileDevices.includes(elementorFrontend.getCurrentDeviceMode());
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
  pauseCarousel() {
    const {
      isPaused
    } = this.getSettings('constants');
    this.elements.headlines.classList.add(isPaused);
    if (this.elements.playButton && this.elements.pauseButton) {
      this.elements.playButton.setAttribute('aria-hidden', 'false');
      this.elements.pauseButton.setAttribute('aria-hidden', 'true');
    }
  }
  playCarousel() {
    const {
      isPaused
    } = this.getSettings('constants');
    this.elements.headlines.classList.remove(isPaused);
    if (this.elements.playButton && this.elements.pauseButton) {
      this.elements.pauseButton.setAttribute('aria-hidden', 'false');
      this.elements.playButton.setAttribute('aria-hidden', 'true');
    }
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
  focusOnLoad() {
    this.elements.main.setAttribute('tabindex', '0');
    this.elements.main.focus({
      focusVisible: true
    });
  }
  applyBodyPadding() {
    const mainHeight = this.elements.main.offsetHeight;
    document.body.style.paddingTop = `${mainHeight}px`;
  }
  removeBodyPadding() {
    document.body.style.paddingTop = '0';
  }
  cloneScrollerContent() {
    const scrollerContent = Array.from(this.elements.headlinesInner.children);
    scrollerContent.forEach(item => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute('aria-hidden', 'true');
      duplicatedItem.classList.add('e-floating-bars__headline--clone');
      this.elements.headlinesInner.appendChild(duplicatedItem);
    });
  }
  cloneHeadlinesToFillContainer() {
    let headlinesInnerWidth = this.elements.headlinesInner.offsetWidth;
    const headlinesWidth = this.elements.headlines.offsetWidth;
    while (headlinesInnerWidth < headlinesWidth) {
      this.cloneScrollerContent();
      headlinesInnerWidth = this.elements.headlinesInner.offsetWidth;
    }
  }
  cloneHeadlinesInner() {
    const headlinesInnerDuplicate = this.elements.headlinesInner.cloneNode(true);
    const overlay = this.elements.overlay;
    headlinesInnerDuplicate.classList.add('e-floating-bars__headlines-inner--clone');
    headlinesInnerDuplicate.setAttribute('aria-hidden', 'true');
    this.elements.headlines.insertBefore(headlinesInnerDuplicate, overlay);
  }
  handleBrowserScrollAnimation() {
    document.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      const lastHeadline = this.elements.headlinesInner.lastElementChild;
      const isRTL = elementorFrontend.config.is_rtl;
      if (isRTL) {
        this.elements.headlinesInner.style.transform = `translateX(${scrollPosition}px)`;
        const lastHeadlineLeftPosition = lastHeadline.lastElementChild.getBoundingClientRect().left;
        const headlinesLeftPosition = this.elements.headlines.getBoundingClientRect().left;
        if (lastHeadlineLeftPosition >= headlinesLeftPosition) {
          this.cloneScrollerContent();
        }
      } else {
        this.elements.headlinesInner.style.transform = `translateX(-${scrollPosition}px)`;
        const lastHeadlineRightPosition = lastHeadline.lastElementChild.getBoundingClientRect().right;
        const headlinesRightPosition = this.elements.headlines.getBoundingClientRect().right;
        if (lastHeadlineRightPosition <= headlinesRightPosition) {
          this.cloneScrollerContent();
        }
      }
    });
  }
  handleTickerClick(event) {
    event.preventDefault();
    const {
      isPlaying
    } = this.getSettings('constants');
    if (this.elements.headlines.classList.contains(isPlaying)) {
      this.pauseCarousel();
    } else {
      const href = event.currentTarget.getAttribute('href');
      const target = event.currentTarget.getAttribute('target');
      const isTargetSet = !!target;
      if (isTargetSet) {
        window.open(href, target);
      } else if (href) {
        window.location.href = href;
      }
      this.playCarousel();
    }
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
  handleClickOutside() {
    const {
      isPlaying
    } = this.getSettings('constants');
    document.addEventListener('click', event => {
      if (!this.elements.headlines.classList.contains(isPlaying) && !this.elements.main.contains(event.target)) {
        this.playCarousel();
      }
    });
  }
  initScrollingAnimation() {
    const {
      autoplay,
      animationTypeControl
    } = this.getSettings('constants');
    const animationType = this.getResponsiveSetting(animationTypeControl);
    if (autoplay === animationType) {
      this.cloneHeadlinesInner();
      this.elements.headlines.setAttribute('data-animated', 'true');
      this.playCarousel();
      if (this.isMobileDevice()) {
        this.elements.headlineAll.forEach(headline => {
          headline.addEventListener('click', this.handleTickerClick.bind(this));
        });
        this.handleClickOutside();
      }
    } else {
      this.handleBrowserScrollAnimation();
    }
  }
  initDefaultState() {
    if (this.isStickyTop()) {
      this.handleWPAdminBar();
    }
    if (this.hasStickyElements()) {
      this.handleStickyElements();
    } else if (this.isStickyTop()) {
      this.applyBodyPadding();
    }
    if (this.elements.main && !elementorFrontend.isEditMode()) {
      this.focusOnLoad();
    }
    if (this.elements.headlinesInner) {
      this.cloneHeadlinesToFillContainer();
    }
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.initScrollingAnimation();
    }
  }
  setupInnerContainer() {
    this.elements.main.closest('.e-con-inner').classList.add('e-con-inner--floating-bars');
    this.elements.main.closest('.e-con').classList.add('e-con--floating-bars');
  }
  onInit() {
    super.onInit(...arguments);
    this.clickTrackingHandler = new _clickTracking.default({
      $element: this.$element
    });
    const domHelper = new _floatinBarDom.default(this.$element);
    domHelper.maybeMoveToTop();
    this.initDefaultState();
    this.setupInnerContainer();
  }
}
exports["default"] = FloatingBarsHandler;

/***/ })

}]);
//# sourceMappingURL=floating-bars-var-2.c6f25c32db86d04f5e8b.bundle.js.map
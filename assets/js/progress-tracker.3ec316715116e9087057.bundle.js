/*! pro-elements - v3.22.0 - 24-06-2024 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["progress-tracker"],{

/***/ "../modules/progress-tracker/assets/js/frontend/handlers/circular-progress.js":
/*!************************************************************************************!*\
  !*** ../modules/progress-tracker/assets/js/frontend/handlers/circular-progress.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class CircularProgress {
  constructor(element, settings) {
    this.settings = settings;
    this.lastKnownProgress = null;
    this.circularProgressTracker = element.find('.elementor-scrolling-tracker-circular')[0];
    this.circularCurrentProgress = this.circularProgressTracker.getElementsByClassName('current-progress')[0];
    this.circularCurrentProgressPercentage = this.circularProgressTracker.getElementsByClassName('current-progress-percentage')[0];
    const radius = this.circularCurrentProgress.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    this.circularCurrentProgress.style.strokeDasharray = `${circumference} ${circumference}`;
    this.circularCurrentProgress.style.strokeDashoffset = circumference;
    this.elements = this.cacheElements();
    this.resizeObserver = new ResizeObserver(() => {
      if (this.lastKnownProgress) {
        this.updateProgress(this.lastKnownProgress);
      }
    });
    this.resizeObserver.observe(this.circularProgressTracker);
  }
  cacheElements() {
    return {
      circularProgressTracker: this.circularProgressTracker,
      circularCurrentProgress: this.circularCurrentProgress,
      circularCurrentProgressPercentage: this.circularCurrentProgressPercentage
    };
  }
  updateProgress(progress) {
    // On page load, there is no progress and some of the elements might be not fully rendered - so we hide the progress.
    if (progress <= 0) {
      this.elements.circularCurrentProgress.style.display = 'none';
      this.elements.circularCurrentProgressPercentage.style.display = 'none';
      return;
    }
    this.elements.circularCurrentProgress.style.display = 'block';
    this.elements.circularCurrentProgressPercentage.style.display = 'block';
    const radius = this.elements.circularCurrentProgress.r.baseVal.value,
      circumference = radius * 2 * Math.PI,
      offset = circumference - progress / 100 * circumference;
    this.lastKnownProgress = progress;
    this.elements.circularCurrentProgress.style.strokeDasharray = `${circumference} ${circumference}`;
    this.elements.circularCurrentProgress.style.strokeDashoffset = 'ltr' === this.settings.direction ? -offset : offset;
    if ('yes' === this.settings.percentage) {
      this.elements.circularCurrentProgressPercentage.innerHTML = Math.round(progress) + '%';
    }
  }
  onDestroy() {
    this.resizeObserver.unobserve(this.circularProgressTracker);
  }
}
var _default = exports["default"] = CircularProgress;

/***/ }),

/***/ "../modules/progress-tracker/assets/js/frontend/handlers/linear-progress.js":
/*!**********************************************************************************!*\
  !*** ../modules/progress-tracker/assets/js/frontend/handlers/linear-progress.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class LinearProgress {
  constructor(element, settings) {
    this.settings = settings;
    this.linearProgressTracker = element.find('.elementor-scrolling-tracker-horizontal')[0];
    this.linearCurrentProgress = this.linearProgressTracker.getElementsByClassName('current-progress')[0];
    this.linearCurrentProgressPercentage = this.linearProgressTracker.getElementsByClassName('current-progress-percentage')[0];
    this.elements = this.cacheElements();
  }
  cacheElements() {
    return {
      linearProgressTracker: this.linearProgressTracker,
      linearCurrentProgress: this.linearCurrentProgress,
      linearCurrentProgressPercentage: this.linearCurrentProgressPercentage
    };
  }
  updateProgress(progress) {
    // On page load, there is no progress and some of the elements might be not fully rendered - so we hide the progress.
    if (progress < 1) {
      this.elements.linearCurrentProgress.style.display = 'none';
      return;
    }
    this.elements.linearCurrentProgress.style.display = 'flex';
    this.elements.linearCurrentProgress.style.width = progress + '%';
    if ('yes' === this.settings.percentage &&
    // Multiplying the progress percentage width by 1.5 to make sure it has enough space to be shown correctly.
    this.elements.linearCurrentProgress.getBoundingClientRect().width > this.elements.linearCurrentProgressPercentage.getBoundingClientRect().width * 1.5) {
      this.elements.linearCurrentProgressPercentage.innerHTML = Math.round(progress) + '%';
      this.elements.linearCurrentProgressPercentage.style.color = getComputedStyle(this.linearCurrentProgress).getPropertyValue('--percentage-color');
    } else {
      this.elements.linearCurrentProgressPercentage.style.color = 'transparent';
    }
  }
}
var _default = exports["default"] = LinearProgress;

/***/ }),

/***/ "../modules/progress-tracker/assets/js/frontend/handlers/progress-tracker.js":
/*!***********************************************************************************!*\
  !*** ../modules/progress-tracker/assets/js/frontend/handlers/progress-tracker.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _circularProgress = _interopRequireDefault(__webpack_require__(/*! ./circular-progress */ "../modules/progress-tracker/assets/js/frontend/handlers/circular-progress.js"));
var _linearProgress = _interopRequireDefault(__webpack_require__(/*! ./linear-progress */ "../modules/progress-tracker/assets/js/frontend/handlers/linear-progress.js"));
class ProgressTracker extends elementorModules.frontend.handlers.Base {
  onInit() {
    elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);
    this.circular = 'circular' === this.getElementSettings().type;
    const Handler = this.circular ? _circularProgress.default : _linearProgress.default;
    this.progressBar = new Handler(this.$element, this.getElementSettings());
    this.progressPercentage = 0;
    this.scrollHandler();
    this.handler = this.scrollHandler.bind(this);
    this.initListeners();
  }
  getTrackingElementSelector() {
    const trackingElementSetting = this.getElementSettings().relative_to;
    let selector;
    switch (trackingElementSetting) {
      case 'selector':
        selector = jQuery(this.getElementSettings().selector);
        break;
      case 'post_content':
        selector = jQuery('.elementor-widget-theme-post-content');
        break;
      default:
        selector = this.isScrollSnap() ? jQuery('#e-scroll-snap-container') : elementorFrontend.elements.$body;
        break;
    }
    return selector;
  }

  // TODO: On Elementor-Pro-3.6.0 delete this function and instead
  // use the function isScrollSnapActivated() from \elementor\assets\dev\js\frontend\utils\utils.js
  isScrollSnap() {
    const scrollSnapStatus = this.isEdit ? elementor.settings.page.model.attributes.scroll_snap : elementorFrontend.config.settings.page.scroll_snap;
    return 'yes' === scrollSnapStatus ? true : false;
  }
  addScrollSnapContainer() {
    if (this.isScrollSnap() && !jQuery('#e-scroll-snap-container').length) {
      jQuery('body').wrapInner('<div id="e-scroll-snap-container" />');
    }
  }
  scrollHandler() {
    // Temporary solution to integrate Scroll-Snap with Progress-Tracker.
    // Add Scroll-Snap container to all content in order to calculate the viewport percentage.
    this.addScrollSnapContainer();
    const $trackingElementSelector = this.getTrackingElementSelector(),
      scrollStartPercentage = $trackingElementSelector.is(elementorFrontend.elements.$body) || $trackingElementSelector.is(jQuery('#e-scroll-snap-container')) ? -100 : 0;
    this.progressPercentage = elementorModules.utils.Scroll.getElementViewportPercentage(this.getTrackingElementSelector(), {
      start: scrollStartPercentage,
      end: -100
    });
    this.progressBar.updateProgress(this.progressPercentage);
  }
  initListeners() {
    window.addEventListener('scroll', this.handler);
    elementorFrontend.elements.$body[0].addEventListener('scroll', this.handler);
  }
  onDestroy() {
    if (this.progressBar.onDestroy) {
      this.progressBar.onDestroy();
    }
    window.removeEventListener('scroll', this.handler);
    elementorFrontend.elements.$body[0].removeEventListener('scroll', this.handler);
  }
}
var _default = exports["default"] = ProgressTracker;

/***/ })

}]);
//# sourceMappingURL=progress-tracker.3ec316715116e9087057.bundle.js.map
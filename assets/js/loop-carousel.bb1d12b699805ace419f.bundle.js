/*! pro-elements - v3.14.0 - 18-06-2023 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["loop-carousel"],{

/***/ "../assets/dev/js/frontend/utils/run-element-handlers.js":
/*!***************************************************************!*\
  !*** ../assets/dev/js/frontend/utils/run-element-handlers.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = runElementHandlers;
function runElementHandlers(elements) {
  [...elements].flatMap(el => [...el.querySelectorAll('.elementor-element')]).forEach(el => elementorFrontend.elementsHandler.runReadyTrigger(el));
}

/***/ }),

/***/ "../modules/loop-builder/assets/js/frontend/handlers/loop-carousel.js":
/*!****************************************************************************!*\
  !*** ../modules/loop-builder/assets/js/frontend/handlers/loop-carousel.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _imageCarousel = _interopRequireDefault(__webpack_require__(/*! elementor/assets/dev/js/frontend/handlers/image-carousel */ "../../elementor/assets/dev/js/frontend/handlers/image-carousel.js"));
var _runElementHandlers = _interopRequireDefault(__webpack_require__(/*! elementor-pro/frontend/utils/run-element-handlers */ "../assets/dev/js/frontend/utils/run-element-handlers.js"));
class LoopCarousel extends _imageCarousel.default {
  getDefaultSettings() {
    const defaultSettings = super.getDefaultSettings();
    defaultSettings.selectors.carousel = '.elementor-loop-container';
    return defaultSettings;
  }
  getSwiperSettings() {
    const swiperOptions = super.getSwiperSettings(),
      elementSettings = this.getElementSettings(),
      isRtl = elementorFrontend.config.is_rtl,
      widgetSelector = `.elementor-element-${this.getID()}`;
    if ('yes' === elementSettings.arrows) {
      swiperOptions.navigation = {
        prevEl: isRtl ? `${widgetSelector} .elementor-swiper-button-next` : `${widgetSelector} .elementor-swiper-button-prev`,
        nextEl: isRtl ? `${widgetSelector} .elementor-swiper-button-prev` : `${widgetSelector} .elementor-swiper-button-next`
      };
    }
    swiperOptions.on.beforeInit = () => {
      this.a11ySetSlidesAriaLabels();
    };
    return swiperOptions;
  }
  async onInit() {
    super.onInit(...arguments);
    this.ranElementHandlers = false;
  }
  handleElementHandlers() {
    if (this.ranElementHandlers || !this.swiper) {
      return;
    }
    const newSlides = Array.from(this.swiper.slides).slice(this.swiper.activeIndex - 1, this.swiper.slides.length);
    (0, _runElementHandlers.default)(newSlides);
    this.ranElementHandlers = true;
  }
  a11ySetSlidesAriaLabels() {
    const slides = Array.from(this.elements.$slides);
    slides.forEach((slide, index) => {
      slide.setAttribute('aria-label', `${parseInt(index + 1)} ${__('of', 'elementor-pro')} ${slides.length}`);
    });
  }
}
exports["default"] = LoopCarousel;

/***/ }),

/***/ "../../elementor/assets/dev/js/frontend/handlers/image-carousel.js":
/*!*************************************************************************!*\
  !*** ../../elementor/assets/dev/js/frontend/handlers/image-carousel.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class ImageCarousel extends elementorModules.frontend.handlers.CarouselBase {
  getDefaultSettings() {
    const settings = super.getDefaultSettings();
    settings.selectors.carousel = '.elementor-image-carousel-wrapper';
    return settings;
  }
}
exports["default"] = ImageCarousel;

/***/ })

}]);
//# sourceMappingURL=loop-carousel.bb1d12b699805ace419f.bundle.js.map
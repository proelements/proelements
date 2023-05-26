/*! pro-elements - v3.13.2 - 22-05-2023 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["loop-carousel"],{

/***/ "../modules/loop-builder/assets/js/frontend/handlers/loop-carousel.js":
/*!****************************************************************************!*\
  !*** ../modules/loop-builder/assets/js/frontend/handlers/loop-carousel.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _imageCarousel = _interopRequireDefault(__webpack_require__(/*! elementor/assets/dev/js/frontend/handlers/image-carousel */ "../../elementor/assets/dev/js/frontend/handlers/image-carousel.js"));
var _elementHandlers = _interopRequireDefault(__webpack_require__(/*! ./utils/element-handlers */ "../modules/loop-builder/assets/js/frontend/handlers/utils/element-handlers.js"));
class LoopCarousel extends _imageCarousel.default {
  getDefaultSettings() {
    const defaultSettings = super.getDefaultSettings();
    defaultSettings.selectors.carousel = '.elementor-loop-container';
    return defaultSettings;
  }
  getSwiperSettings() {
    const swiperOptions = super.getSwiperSettings(),
      elementSettings = this.getElementSettings(),
      isRtl = elementorFrontend.config.is_rtl;
    if ('yes' === elementSettings.arrows) {
      swiperOptions.navigation = {
        prevEl: isRtl ? '.elementor-swiper-button-next' : '.elementor-swiper-button-prev',
        nextEl: isRtl ? '.elementor-swiper-button-prev' : '.elementor-swiper-button-next'
      };
    }
    if (elementSettings.pagination) {
      swiperOptions.pagination = {
        el: '.swiper-pagination',
        type: elementSettings.pagination,
        clickable: true
      };
    }
    swiperOptions.on = {
      slideChange: () => {
        this.handleElementHandlers();
      }
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
    (0, _elementHandlers.default)(newSlides);
    this.ranElementHandlers = true;
  }
}
exports["default"] = LoopCarousel;

/***/ }),

/***/ "../modules/loop-builder/assets/js/frontend/handlers/utils/element-handlers.js":
/*!*************************************************************************************!*\
  !*** ../modules/loop-builder/assets/js/frontend/handlers/utils/element-handlers.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = runElementHandlers;
function runElementHandlers(elements) {
  [...elements].flatMap(el => [...el.querySelectorAll('.elementor-element')]).forEach(el => elementorFrontend.elementsHandler.runReadyTrigger(el));
}

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
//# sourceMappingURL=loop-carousel.1b69b7ef8be1e8e1bebf.bundle.js.map
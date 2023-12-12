/*! pro-elements - v3.18.0 - 06-12-2023 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["nested-carousel"],{

/***/ "../modules/nested-carousel/assets/js/frontend/handlers/nested-carousel.js":
/*!*********************************************************************************!*\
  !*** ../modules/nested-carousel/assets/js/frontend/handlers/nested-carousel.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _runElementHandlers = _interopRequireDefault(__webpack_require__(/*! elementor-pro/frontend/utils/run-element-handlers */ "../assets/dev/js/frontend/utils/run-element-handlers.js"));
class NestedCarousel extends elementorModules.frontend.handlers.CarouselBase {
  getDefaultSettings() {
    const defaultSettings = super.getDefaultSettings();
    defaultSettings.selectors.carousel = '.e-n-carousel';
    defaultSettings.selectors.slidesWrapper = '.e-n-carousel > .swiper-wrapper';
    return defaultSettings;
  }
  getSwiperSettings() {
    const swiperOptions = super.getSwiperSettings(),
      elementSettings = this.getElementSettings(),
      isRtl = elementorFrontend.config.is_rtl,
      widgetSelector = `.elementor-element-${this.getID()}`;
    if (elementorFrontend.isEditMode()) {
      delete swiperOptions.autoplay;
      swiperOptions.loop = false;
      swiperOptions.noSwipingSelector = '.swiper-slide > .e-con .elementor-element';
    }
    if ('yes' === elementSettings.arrows) {
      swiperOptions.navigation = {
        prevEl: isRtl ? `${widgetSelector} .elementor-swiper-button-next` : `${widgetSelector} .elementor-swiper-button-prev`,
        nextEl: isRtl ? `${widgetSelector} .elementor-swiper-button-prev` : `${widgetSelector} .elementor-swiper-button-next`
      };
    }
    this.applySwipeOptions(swiperOptions);
    return swiperOptions;
  }
  async onInit() {
    this.wrapSlideContent();
    super.onInit(...arguments);
    if (!elementorFrontend.config.experimentalFeatures.e_swiper_latest) {
      this.reInitBackgroundSlideshow();
    }
    this.ranElementHandlers = false;
  }
  handleElementHandlers() {
    if (this.ranElementHandlers || !this.swiper) {
      return;
    }
    const duplicatedSlides = Array.from(this.swiper.slides).filter(slide => slide.classList.contains(this.swiper.params.slideDuplicateClass));
    (0, _runElementHandlers.default)(duplicatedSlides);
    this.ranElementHandlers = true;
  }
  wrapSlideContent() {
    if (!elementorFrontend.isEditMode()) {
      return;
    }
    const settings = this.getSettings(),
      slideContentClass = settings.selectors.slideContent.replace('.', ''),
      $widget = this.$element;
    let index = 1;
    this.findElement(`${settings.selectors.slidesWrapper} > .e-con`).each(function () {
      const $currentContainer = jQuery(this),
        hasSwiperSlideWrapper = $currentContainer.closest('div').hasClass(slideContentClass),
        $currentSlide = $widget.find(`${settings.selectors.slidesWrapper} > .${slideContentClass}:nth-child(${index})`);
      if (!hasSwiperSlideWrapper) {
        $currentSlide.append($currentContainer);
      }
      index++;
    });
  }
  togglePauseOnHover(toggleOn) {
    if (elementorFrontend.isEditMode()) {
      return;
    }
    super.togglePauseOnHover(toggleOn);
  }
  getChangeableProperties() {
    return {
      arrows_position: 'arrows_position' // Not a Swiper setting.
    };
  }

  applySwipeOptions(swiperOptions) {
    if (!this.isTouchDevice()) {
      swiperOptions.shortSwipes = false;
    } else {
      swiperOptions.touchRatio = 1;
      swiperOptions.longSwipesRatio = 0.3;
      swiperOptions.followFinger = true;
      swiperOptions.threshold = 10;
    }
  }
  isTouchDevice() {
    return elementorFrontend.utils.environment.isTouchDevice;
  }
  reInitBackgroundSlideshow() {
    const slideshows = this.elements.$swiperContainer.find('.elementor-background-slideshow');
    for (const element of slideshows) {
      if (!element.swiper) {
        return;
      }
      element.swiper.initialized = false;
      element.swiper.init();
    }
  }
}
exports["default"] = NestedCarousel;

/***/ })

}]);
//# sourceMappingURL=nested-carousel.da220b2d6ef36e95bbad.bundle.js.map
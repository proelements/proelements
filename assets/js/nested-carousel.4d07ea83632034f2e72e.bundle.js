/*! elementor-pro - v3.30.0 - 01-07-2025 */
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
    this.ranElementHandlers = false;
  }
  async initSwiper() {
    const Swiper = elementorFrontend.utils.swiper;
    this.swiper = await new Swiper(this.elements.$swiperContainer, this.getSwiperSettings());

    // Expose the swiper instance in the frontend
    this.elements.$swiperContainer.data('swiper', this.swiper);
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
  async linkContainer(event) {
    const {
        container,
        index,
        targetContainer,
        action: {
          type
        }
      } = event.detail,
      view = container.view.$el,
      id = container.model.get('id'),
      currentId = this.$element.data('id');
    if (id === currentId) {
      const {
        $slides
      } = this.getDefaultElements();
      let carouselItemWrapper, contentContainer;
      switch (type) {
        case 'move':
          [carouselItemWrapper, contentContainer] = this.move(view, index, targetContainer, $slides);
          break;
        case 'duplicate':
          [carouselItemWrapper, contentContainer] = this.duplicate(view, index, targetContainer, $slides);
          break;
        default:
          break;
      }
      if (undefined !== carouselItemWrapper) {
        carouselItemWrapper.appendChild(contentContainer);
      }
      this.shouldHideNavButtons(view, $slides);
      this.updateIndexValues($slides);
      const isSwiperActive = this.swiper && !this.swiper.destroyed,
        hasMultipleSlides = $slides.length > 1;
      if (!isSwiperActive && hasMultipleSlides) {
        await this.initSwiper();
      } else if (isSwiperActive && !hasMultipleSlides) {
        this.swiper.destroy(true);
      }
      this.updateListeners();
    }
  }
  updateListeners() {
    this.swiper.initialized = false;
    this.swiper.init();
  }
  move(view, index, targetContainer, slides) {
    return [slides[index], targetContainer.view.$el[0]];
  }
  duplicate(view, index, targetContainer, slides) {
    return [slides[index + 1], targetContainer.view.$el[0]];
  }
  updateIndexValues($slides) {
    $slides.each((index, element) => {
      const newIndex = index + 1;
      element.setAttribute('data-slide', newIndex);
    });
  }
  bindEvents() {
    super.bindEvents();
    elementorFrontend.elements.$window.on('elementor/nested-container/atomic-repeater', this.linkContainer.bind(this));
  }
  shouldHideNavButtons(view, $slides) {
    const widget = view[0],
      navButtons = widget.querySelectorAll('.elementor-swiper-button'),
      shouldHide = 1 === $slides.length,
      isHidden = navButtons[0]?.classList.contains('hide');
    if (shouldHide !== isHidden) {
      navButtons.forEach(button => {
        button.classList.toggle('hide', shouldHide);
      });
    }
  }
}
exports["default"] = NestedCarousel;

/***/ })

}]);
//# sourceMappingURL=nested-carousel.4d07ea83632034f2e72e.bundle.js.map
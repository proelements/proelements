/*! pro-elements - v3.2.0 - 14-03-2021 */
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["slides"],{

/***/ "../modules/slides/assets/js/frontend/handlers/slides.js":
/*!***************************************************************!*\
  !*** ../modules/slides/assets/js/frontend/handlers/slides.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js"));

__webpack_require__(/*! regenerator-runtime/runtime */ "../node_modules/regenerator-runtime/runtime.js");

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

__webpack_require__(/*! core-js/modules/es6.array.find */ "../node_modules/core-js/modules/es6.array.find.js");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var SlidesHandler = /*#__PURE__*/function (_elementorModules$fro) {
  (0, _inherits2.default)(SlidesHandler, _elementorModules$fro);

  var _super = (0, _createSuper2.default)(SlidesHandler);

  function SlidesHandler() {
    (0, _classCallCheck2.default)(this, SlidesHandler);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(SlidesHandler, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        selectors: {
          slider: '.elementor-slides-wrapper',
          slide: '.swiper-slide',
          slideInnerContents: '.swiper-slide-contents',
          activeSlide: '.swiper-slide-active',
          activeDuplicate: '.swiper-slide-duplicate-active'
        },
        classes: {
          animated: 'animated',
          kenBurnsActive: 'elementor-ken-burns--active',
          slideBackground: 'swiper-slide-bg'
        },
        attributes: {
          dataSliderOptions: 'slider_options',
          dataAnimation: 'animation'
        }
      };
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var selectors = this.getSettings('selectors'),
          elements = {
        $swiperContainer: this.$element.find(selectors.slider)
      };
      elements.$slides = elements.$swiperContainer.find(selectors.slide);
      return elements;
    }
  }, {
    key: "getSwiperOptions",
    value: function getSwiperOptions() {
      var _this = this;

      var elementSettings = this.getElementSettings(),
          swiperOptions = {
        autoplay: this.getAutoplayConfig(),
        grabCursor: true,
        initialSlide: this.getInitialSlide(),
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: 'yes' === elementSettings.infinite,
        speed: elementSettings.transition_speed,
        effect: elementSettings.transition,
        observeParents: true,
        observer: true,
        handleElementorBreakpoints: true,
        on: {
          slideChange: function slideChange() {
            _this.handleKenBurns();
          }
        }
      };
      var showArrows = 'arrows' === elementSettings.navigation || 'both' === elementSettings.navigation,
          pagination = 'dots' === elementSettings.navigation || 'both' === elementSettings.navigation;

      if (showArrows) {
        swiperOptions.navigation = {
          prevEl: '.elementor-swiper-button-prev',
          nextEl: '.elementor-swiper-button-next'
        };
      }

      if (pagination) {
        swiperOptions.pagination = {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        };
      }

      if (true === swiperOptions.loop) {
        swiperOptions.loopedSlides = this.getSlidesCount();
      }

      if ('fade' === swiperOptions.effect) {
        swiperOptions.fadeEffect = {
          crossFade: true
        };
      }

      return swiperOptions;
    }
  }, {
    key: "getAutoplayConfig",
    value: function getAutoplayConfig() {
      var elementSettings = this.getElementSettings();

      if ('yes' !== elementSettings.autoplay) {
        return false;
      }

      return {
        stopOnLastSlide: true,
        // Has no effect in infinite mode by default.
        delay: elementSettings.autoplay_speed,
        disableOnInteraction: 'yes' === elementSettings.pause_on_interaction
      };
    }
  }, {
    key: "initSingleSlideAnimations",
    value: function initSingleSlideAnimations() {
      var settings = this.getSettings(),
          animation = this.elements.$swiperContainer.data(settings.attributes.dataAnimation);
      this.elements.$swiperContainer.find('.' + settings.classes.slideBackground).addClass(settings.classes.kenBurnsActive); // If there is an animation, get the container of the slide's inner contents and add the animation classes to it

      if (animation) {
        this.elements.$swiperContainer.find(settings.selectors.slideInnerContents).addClass(settings.classes.animated + ' ' + animation);
      }
    }
  }, {
    key: "initSlider",
    value: function () {
      var _initSlider = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var $slider, settings, elementSettings, animation, Swiper;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                $slider = this.elements.$swiperContainer, settings = this.getSettings(), elementSettings = this.getElementSettings(), animation = $slider.data(settings.attributes.dataAnimation);

                if ($slider.length) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                if (!(1 >= this.getSlidesCount())) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                Swiper = elementorFrontend.utils.swiper;
                _context.next = 8;
                return new Swiper($slider, this.getSwiperOptions());

              case 8:
                this.swiper = _context.sent;
                // Expose the swiper instance in the frontend
                $slider.data('swiper', this.swiper); // The Ken Burns effect will only apply on the specific slides that toggled the effect ON,
                // since it depends on an additional class besides 'elementor-ken-burns--active'

                this.handleKenBurns();

                if (elementSettings.pause_on_hover) {
                  this.togglePauseOnHover(true);
                }

                if (animation) {
                  _context.next = 14;
                  break;
                }

                return _context.abrupt("return");

              case 14:
                this.swiper.on('slideChangeTransitionStart', function () {
                  var $sliderContent = $slider.find(settings.selectors.slideInnerContents);
                  $sliderContent.removeClass(settings.classes.animated + ' ' + animation).hide();
                });
                this.swiper.on('slideChangeTransitionEnd', function () {
                  var $currentSlide = $slider.find(settings.selectors.slideInnerContents);
                  $currentSlide.show().addClass(settings.classes.animated + ' ' + animation);
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function initSlider() {
        return _initSlider.apply(this, arguments);
      }

      return initSlider;
    }()
  }, {
    key: "onInit",
    value: function onInit() {
      elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);

      if (2 > this.getSlidesCount()) {
        this.initSingleSlideAnimations();
        return;
      }

      this.initSlider();
    }
  }, {
    key: "getChangeableProperties",
    value: function getChangeableProperties() {
      return {
        pause_on_hover: 'pauseOnHover',
        pause_on_interaction: 'disableOnInteraction',
        autoplay_speed: 'delay',
        transition_speed: 'speed'
      };
    }
  }, {
    key: "updateSwiperOption",
    value: function updateSwiperOption(propertyName) {
      if (0 === propertyName.indexOf('width')) {
        this.swiper.update();
        return;
      }

      var elementSettings = this.getElementSettings(),
          newSettingValue = elementSettings[propertyName],
          changeableProperties = this.getChangeableProperties();
      var propertyToUpdate = changeableProperties[propertyName],
          valueToUpdate = newSettingValue; // Handle special cases where the value to update is not the value that the Swiper library accepts

      switch (propertyName) {
        case 'autoplay_speed':
          propertyToUpdate = 'autoplay';
          valueToUpdate = {
            delay: newSettingValue,
            disableOnInteraction: 'yes' === elementSettings.pause_on_interaction
          };
          break;

        case 'pause_on_hover':
          this.togglePauseOnHover('yes' === newSettingValue);
          break;

        case 'pause_on_interaction':
          valueToUpdate = 'yes' === newSettingValue;
          break;
      } // 'pause_on_hover' is implemented by the handler with event listeners, not the Swiper library


      if ('pause_on_hover' !== propertyName) {
        this.swiper.params[propertyToUpdate] = valueToUpdate;
      }

      this.swiper.update();
    }
  }, {
    key: "onElementChange",
    value: function onElementChange(propertyName) {
      if (1 >= this.getSlidesCount()) {
        return;
      }

      var changeableProperties = this.getChangeableProperties();

      if (changeableProperties.hasOwnProperty(propertyName)) {
        this.updateSwiperOption(propertyName);
      }
    }
  }, {
    key: "onEditSettingsChange",
    value: function onEditSettingsChange(propertyName) {
      if (1 >= this.getSlidesCount()) {
        return;
      }

      if ('activeItemIndex' === propertyName) {
        this.swiper.slideToLoop(this.getEditSettings('activeItemIndex') - 1);
      }
    }
  }]);
  return SlidesHandler;
}(elementorModules.frontend.handlers.SwiperBase);

exports.default = SlidesHandler;

/***/ })

}]);
//# sourceMappingURL=slides.a4197378419486376c60.bundle.js.map
/*! pro-elements - v3.2.0 - 14-03-2021 */
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["modules_carousel_assets_js_frontend_handlers_base_js"],{

/***/ "../modules/carousel/assets/js/frontend/handlers/base.js":
/*!***************************************************************!*\
  !*** ../modules/carousel/assets/js/frontend/handlers/base.js ***!
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

__webpack_require__(/*! core-js/modules/es6.regexp.match */ "../node_modules/core-js/modules/es6.regexp.match.js");

__webpack_require__(/*! core-js/modules/es6.array.find */ "../node_modules/core-js/modules/es6.array.find.js");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var CarouselBase = /*#__PURE__*/function (_elementorModules$fro) {
  (0, _inherits2.default)(CarouselBase, _elementorModules$fro);

  var _super = (0, _createSuper2.default)(CarouselBase);

  function CarouselBase() {
    (0, _classCallCheck2.default)(this, CarouselBase);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(CarouselBase, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        selectors: {
          swiperContainer: '.elementor-main-swiper',
          swiperSlide: '.swiper-slide'
        },
        slidesPerView: {
          desktop: 3,
          tablet: 2,
          mobile: 1
        }
      };
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var selectors = this.getSettings('selectors'),
          elements = {
        $swiperContainer: this.$element.find(selectors.swiperContainer)
      };
      elements.$slides = elements.$swiperContainer.find(selectors.swiperSlide);
      return elements;
    }
  }, {
    key: "getEffect",
    value: function getEffect() {
      return this.getElementSettings('effect');
    }
  }, {
    key: "getDeviceSlidesPerView",
    value: function getDeviceSlidesPerView(device) {
      var slidesPerViewKey = 'slides_per_view' + ('desktop' === device ? '' : '_' + device);
      return Math.min(this.getSlidesCount(), +this.getElementSettings(slidesPerViewKey) || this.getSettings('slidesPerView')[device]);
    }
  }, {
    key: "getSlidesPerView",
    value: function getSlidesPerView(device) {
      if ('slide' === this.getEffect()) {
        return this.getDeviceSlidesPerView(device);
      }

      return 1;
    }
  }, {
    key: "getDeviceSlidesToScroll",
    value: function getDeviceSlidesToScroll(device) {
      var slidesToScrollKey = 'slides_to_scroll' + ('desktop' === device ? '' : '_' + device);
      return Math.min(this.getSlidesCount(), +this.getElementSettings(slidesToScrollKey) || 1);
    }
  }, {
    key: "getSlidesToScroll",
    value: function getSlidesToScroll(device) {
      if ('slide' === this.getEffect()) {
        return this.getDeviceSlidesToScroll(device);
      }

      return 1;
    }
  }, {
    key: "getSpaceBetween",
    value: function getSpaceBetween(device) {
      var propertyName = 'space_between';

      if (device && 'desktop' !== device) {
        propertyName += '_' + device;
      }

      return this.getElementSettings(propertyName).size || 0;
    }
  }, {
    key: "getSwiperOptions",
    value: function getSwiperOptions() {
      var elementSettings = this.getElementSettings();
      var swiperOptions = {
        grabCursor: true,
        initialSlide: this.getInitialSlide(),
        slidesPerView: this.getSlidesPerView('desktop'),
        slidesPerGroup: this.getSlidesToScroll('desktop'),
        spaceBetween: this.getSpaceBetween(),
        loop: 'yes' === elementSettings.loop,
        speed: elementSettings.speed,
        effect: this.getEffect(),
        preventClicksPropagation: false,
        slideToClickedSlide: true,
        handleElementorBreakpoints: true
      };

      if (elementSettings.show_arrows) {
        swiperOptions.navigation = {
          prevEl: '.elementor-swiper-button-prev',
          nextEl: '.elementor-swiper-button-next'
        };
      }

      if (elementSettings.pagination) {
        swiperOptions.pagination = {
          el: '.swiper-pagination',
          type: elementSettings.pagination,
          clickable: true
        };
      }

      if ('cube' !== this.getEffect()) {
        var breakpointsSettings = {},
            breakpoints = elementorFrontend.config.breakpoints;
        breakpointsSettings[breakpoints.lg - 1] = {
          slidesPerView: this.getSlidesPerView('tablet'),
          slidesPerGroup: this.getSlidesToScroll('tablet'),
          spaceBetween: this.getSpaceBetween('tablet')
        };
        breakpointsSettings[breakpoints.md - 1] = {
          slidesPerView: this.getSlidesPerView('mobile'),
          slidesPerGroup: this.getSlidesToScroll('mobile'),
          spaceBetween: this.getSpaceBetween('mobile')
        };
        swiperOptions.breakpoints = breakpointsSettings;
      }

      if (!this.isEdit && elementSettings.autoplay) {
        swiperOptions.autoplay = {
          delay: elementSettings.autoplay_speed,
          disableOnInteraction: !!elementSettings.pause_on_interaction
        };
      }

      return swiperOptions;
    }
  }, {
    key: "updateSpaceBetween",
    value: function updateSpaceBetween(propertyName) {
      var deviceMatch = propertyName.match('space_between_(.*)'),
          device = deviceMatch ? deviceMatch[1] : 'desktop',
          newSpaceBetween = this.getSpaceBetween(device),
          breakpoints = elementorFrontend.config.breakpoints;

      if ('desktop' !== device) {
        var breakpointDictionary = {
          tablet: breakpoints.lg - 1,
          mobile: breakpoints.md - 1
        };
        this.swiper.params.breakpoints[breakpointDictionary[device]].spaceBetween = newSpaceBetween;
      } else {
        this.swiper.params.spaceBetween = newSpaceBetween;
      }

      this.swiper.params.spaceBetween = newSpaceBetween;
      this.swiper.update();
    }
  }, {
    key: "onInit",
    value: function () {
      var _onInit = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var elementSettings,
            Swiper,
            _args = arguments;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, _args);
                elementSettings = this.getElementSettings();

                if (!(1 >= this.getSlidesCount())) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                Swiper = elementorFrontend.utils.swiper;
                _context.next = 7;
                return new Swiper(this.elements.$swiperContainer, this.getSwiperOptions());

              case 7:
                this.swiper = _context.sent;

                if ('yes' === elementSettings.pause_on_hover) {
                  this.togglePauseOnHover(true);
                } // Expose the swiper instance in the frontend


                this.elements.$swiperContainer.data('swiper', this.swiper);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onInit() {
        return _onInit.apply(this, arguments);
      }

      return onInit;
    }()
  }, {
    key: "getChangeableProperties",
    value: function getChangeableProperties() {
      return {
        autoplay: 'autoplay',
        pause_on_hover: 'pauseOnHover',
        pause_on_interaction: 'disableOnInteraction',
        autoplay_speed: 'delay',
        speed: 'speed',
        width: 'width'
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
        case 'autoplay':
          if (newSettingValue) {
            valueToUpdate = {
              delay: elementSettings.autoplay_speed,
              disableOnInteraction: 'yes' === elementSettings.pause_on_interaction
            };
          } else {
            valueToUpdate = false;
          }

          break;

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

      if (0 === propertyName.indexOf('width')) {
        this.swiper.update(); // If there is another thumbs slider, like in the Media Carousel widget.

        if (this.thumbsSwiper) {
          this.thumbsSwiper.update();
        }

        return;
      } // This is for handling the responsive control 'space_between'.
      // Responsive controls require a separate way of handling, and some currently don't work
      // (Swiper bug, currently exists in v5.3.6) TODO: update Swiper when bug is fixed and handle responsive controls


      if (0 === propertyName.indexOf('space_between')) {
        this.updateSpaceBetween(propertyName);
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
  return CarouselBase;
}(elementorModules.frontend.handlers.SwiperBase);

exports.default = CarouselBase;

/***/ })

}]);
//# sourceMappingURL=f7edf46ee23c04733c35.bundle.js.map
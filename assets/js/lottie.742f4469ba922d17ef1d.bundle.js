/*! pro-elements - v3.2.0 - 14-03-2021 */
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["lottie"],{

/***/ "../modules/lottie/assets/js/frontend/handler.js":
/*!*******************************************************!*\
  !*** ../modules/lottie/assets/js/frontend/handler.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread2 */ "../node_modules/@babel/runtime-corejs2/helpers/objectSpread2.js"));

__webpack_require__(/*! core-js/modules/es6.array.find */ "../node_modules/core-js/modules/es6.array.find.js");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _get3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/get */ "../node_modules/@babel/runtime-corejs2/helpers/get.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var lottieHandler = /*#__PURE__*/function (_elementorModules$fro) {
  (0, _inherits2.default)(lottieHandler, _elementorModules$fro);

  var _super = (0, _createSuper2.default)(lottieHandler);

  function lottieHandler() {
    (0, _classCallCheck2.default)(this, lottieHandler);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(lottieHandler, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        selectors: {
          container: '.e-lottie__container',
          containerLink: '.e-lottie__container__link',
          animation: '.e-lottie__animation',
          caption: '.e-lottie__caption'
        },
        classes: {
          caption: 'e-lottie__caption'
        }
      };
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var _this$getSettings = this.getSettings(),
          selectors = _this$getSettings.selectors;

      return {
        $widgetWrapper: this.$element,
        $container: this.$element.find(selectors.container),
        $containerLink: this.$element.find(selectors.containerLink),
        $animation: this.$element.find(selectors.animation),
        $caption: this.$element.find(selectors.caption),
        $sectionParent: this.$element.closest('.elementor-section'),
        $columnParent: this.$element.closest('.elementor-column')
      };
    }
  }, {
    key: "onInit",
    value: function onInit() {
      var _get2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_get2 = (0, _get3.default)((0, _getPrototypeOf2.default)(lottieHandler.prototype), "onInit", this)).call.apply(_get2, [this].concat(args));

      this.lottie = null;
      this.state = {
        isAnimationScrollUpdateNeededOnFirstLoad: true,
        isNewLoopCycle: false,
        isInViewport: false,
        loop: false,
        animationDirection: 'forward',
        currentAnimationTrigger: '',
        effectsRelativeTo: '',
        hoverOutMode: '',
        hoverArea: '',
        caption: '',
        playAnimationCount: 0,
        animationSpeed: 0,
        linkTimeout: 0,
        viewportOffset: {
          start: 0,
          end: 100
        }
      };
      this.intersectionObservers = {
        animation: {
          observer: null,
          element: null
        },
        lazyload: {
          observer: null,
          element: null
        }
      };
      this.animationFrameRequest = {
        timer: null,
        lastScrollY: 0
      };
      this.listeners = {
        collection: [],
        elements: {
          $widgetArea: {
            triggerAnimationHoverIn: null,
            triggerAnimationHoverOut: null
          },
          $container: {
            triggerAnimationClick: null
          }
        }
      };
      this.initLottie();
    }
  }, {
    key: "initLottie",
    value: function initLottie() {
      var lottieSettings = this.getLottieSettings();

      if (lottieSettings.lazyload) {
        this.lazyloadLottie();
      } else {
        this.generateLottie();
      }
    }
  }, {
    key: "lazyloadLottie",
    value: function lazyloadLottie() {
      var _this = this;

      var bufferHeightBeforeTriggerLottie = 200;
      this.intersectionObservers.lazyload.observer = elementorModules.utils.Scroll.scrollObserver({
        offset: "0px 0px ".concat(bufferHeightBeforeTriggerLottie, "px"),
        callback: function callback(event) {
          if (event.isInViewport) {
            _this.generateLottie();

            _this.intersectionObservers.lazyload.observer.unobserve(_this.intersectionObservers.lazyload.element);
          }
        }
      });
      this.intersectionObservers.lazyload.element = this.elements.$container[0];
      this.intersectionObservers.lazyload.observer.observe(this.intersectionObservers.lazyload.element);
    }
  }, {
    key: "generateLottie",
    value: function generateLottie() {
      this.createLottieInstance();
      this.setLottieEvents();
    }
  }, {
    key: "createLottieInstance",
    value: function createLottieInstance() {
      var lottieSettings = this.getLottieSettings();
      this.lottie = bodymovin.loadAnimation({
        container: this.elements.$animation[0],
        path: this.getAnimationPath(),
        renderer: lottieSettings.renderer,
        autoplay: false,
        // We always want to trigger the animation manually for considering start/end frame.
        name: 'lottie-widget'
      }); // Expose the lottie instance in the frontend.

      this.elements.$animation.data('lottie', this.lottie);
    }
  }, {
    key: "getAnimationPath",
    value: function getAnimationPath() {
      var _lottieSettings$sourc, _lottieSettings$sourc2;

      var lottieSettings = this.getLottieSettings();

      if (((_lottieSettings$sourc = lottieSettings.source_json) === null || _lottieSettings$sourc === void 0 ? void 0 : _lottieSettings$sourc.url) && 'json' === lottieSettings.source_json.url.toLowerCase().substr(-4)) {
        return lottieSettings.source_json.url;
      } else if ((_lottieSettings$sourc2 = lottieSettings.source_external_url) === null || _lottieSettings$sourc2 === void 0 ? void 0 : _lottieSettings$sourc2.url) {
        return lottieSettings.source_external_url.url;
      } // Default animation path.


      return elementorProFrontend.config.lottie.defaultAnimationUrl;
    }
  }, {
    key: "setCaption",
    value: function setCaption() {
      var lottieSettings = this.getLottieSettings();

      if ('external_url' === lottieSettings.source || 'media_file' === lottieSettings.source && 'custom' === lottieSettings.caption_source) {
        var $captionElement = this.getCaptionElement();
        $captionElement.text(lottieSettings.caption);
      }
    }
  }, {
    key: "getCaptionElement",
    value: function getCaptionElement() {
      if (!this.elements.$caption.length) {
        var _this$getSettings2 = this.getSettings(),
            classes = _this$getSettings2.classes;

        this.elements.$caption = jQuery('<p>', {
          class: classes.caption
        });
        this.elements.$container.append(this.elements.$caption);
        return this.elements.$caption;
      }

      return this.elements.$caption;
    }
  }, {
    key: "setLottieEvents",
    value: function setLottieEvents() {
      var _this2 = this;

      this.lottie.addEventListener('DOMLoaded', function () {
        return _this2.onLottieDomLoaded();
      });
      this.lottie.addEventListener('complete', function () {
        return _this2.onComplete();
      });
    }
  }, {
    key: "saveInitialValues",
    value: function saveInitialValues() {
      var _lottieSettings$play_;

      var lottieSettings = this.getLottieSettings();
      /*
      These values of the animation are being changed during the animation runtime
      and saved in the lottie instance (and not in the state) for the instance expose in the frontend.
       */

      this.lottie.__initialTotalFrames = this.lottie.totalFrames;
      this.lottie.__initialFirstFrame = this.lottie.firstFrame;
      this.state.currentAnimationTrigger = lottieSettings.trigger;
      this.state.effectsRelativeTo = lottieSettings.effects_relative_to;
      this.state.viewportOffset.start = lottieSettings.viewport ? lottieSettings.viewport.sizes.start : 0;
      this.state.viewportOffset.end = lottieSettings.viewport ? lottieSettings.viewport.sizes.end : 100;
      this.state.animationSpeed = (_lottieSettings$play_ = lottieSettings.play_speed) === null || _lottieSettings$play_ === void 0 ? void 0 : _lottieSettings$play_.size;
      this.state.linkTimeout = lottieSettings.link_timeout;
      this.state.caption = lottieSettings.caption;
      this.state.loop = lottieSettings.loop;
    }
  }, {
    key: "setAnimationFirstFrame",
    value: function setAnimationFirstFrame() {
      var frame = this.getAnimationFrames();
      /*
      We need to subtract the initial first frame from the first frame for handling scenarios
      when the animation first frame is not 0, this way we always get the relevant first frame.
      example: when start point is 70 and initial first frame is 60, the animation should start at 10.
       */

      frame.first = frame.first - this.lottie.__initialFirstFrame;
      this.lottie.goToAndStop(frame.first, true);
    }
  }, {
    key: "initAnimationTrigger",
    value: function initAnimationTrigger() {
      var lottieSettings = this.getLottieSettings();

      switch (lottieSettings.trigger) {
        case 'none':
          this.playLottie();
          break;

        case 'arriving_to_viewport':
          this.playAnimationWhenArrivingToViewport();
          break;

        case 'bind_to_scroll':
          this.playAnimationWhenBindToScroll();
          break;

        case 'on_click':
          this.bindAnimationClickEvents();
          break;

        case 'on_hover':
          this.bindAnimationHoverEvents();
          break;
      }
    }
  }, {
    key: "playAnimationWhenArrivingToViewport",
    value: function playAnimationWhenArrivingToViewport() {
      var _this3 = this;

      var offset = this.getOffset();
      this.intersectionObservers.animation.observer = elementorModules.utils.Scroll.scrollObserver({
        offset: "".concat(offset.end, "% 0% ").concat(offset.start, "%"),
        callback: function callback(event) {
          if (event.isInViewport) {
            _this3.state.isInViewport = true;

            _this3.playLottie();
          } else {
            _this3.state.isInViewport = false;

            _this3.lottie.pause();
          }
        }
      });
      this.intersectionObservers.animation.element = this.elements.$widgetWrapper[0];
      this.intersectionObservers.animation.observer.observe(this.intersectionObservers.animation.element);
    }
  }, {
    key: "getOffset",
    value: function getOffset() {
      var lottieSettings = this.getLottieSettings(),
          start = -lottieSettings.viewport.sizes.start || 0,
          end = -(100 - lottieSettings.viewport.sizes.end) || 0;
      return {
        start: start,
        end: end
      };
    }
  }, {
    key: "playAnimationWhenBindToScroll",
    value: function playAnimationWhenBindToScroll() {
      var _this4 = this;

      var lottieSettings = this.getLottieSettings(),
          offset = this.getOffset(); // Generate scroll detection by Intersection Observer API

      this.intersectionObservers.animation.observer = elementorModules.utils.Scroll.scrollObserver({
        offset: "".concat(offset.end, "% 0% ").concat(offset.start, "%"),
        callback: function callback(event) {
          return _this4.onLottieIntersection(event);
        }
      });
      this.intersectionObservers.animation.element = 'viewport' === lottieSettings.effects_relative_to ? this.elements.$widgetWrapper[0] : document.documentElement;
      this.intersectionObservers.animation.observer.observe(this.intersectionObservers.animation.element);
    }
  }, {
    key: "updateAnimationByScrollPosition",
    value: function updateAnimationByScrollPosition() {
      var lottieSettings = this.getLottieSettings();
      var percentage;

      if ('page' === lottieSettings.effects_relative_to) {
        percentage = this.getLottiePagePercentage();
      } else if ('fixed' === this.getCurrentDeviceSetting('_position')) {
        percentage = this.getLottieViewportHeightPercentage();
      } else {
        percentage = this.getLottieViewportPercentage();
      }

      var nextFrameToPlay = this.getFrameNumberByPercent(percentage);
      nextFrameToPlay = nextFrameToPlay - this.lottie.__initialFirstFrame;
      this.lottie.goToAndStop(nextFrameToPlay, true);
    }
  }, {
    key: "getLottieViewportPercentage",
    value: function getLottieViewportPercentage() {
      return elementorModules.utils.Scroll.getElementViewportPercentage(this.elements.$widgetWrapper, this.getOffset());
    }
  }, {
    key: "getLottiePagePercentage",
    value: function getLottiePagePercentage() {
      return elementorModules.utils.Scroll.getPageScrollPercentage(this.getOffset());
    }
  }, {
    key: "getLottieViewportHeightPercentage",
    value: function getLottieViewportHeightPercentage() {
      return elementorModules.utils.Scroll.getPageScrollPercentage(this.getOffset(), window.innerHeight);
    }
    /**
     * @param {number} percent - Percent value between 0-100
     */

  }, {
    key: "getFrameNumberByPercent",
    value: function getFrameNumberByPercent(percent) {
      var frame = this.getAnimationFrames();
      /*
      In mobile devices the document height can be 'stretched' at the top and bottom points of the document,
      this 'stretched' will make percent to be either negative or larger than 100, therefore we need to limit percent between 0-100.
      */

      percent = Math.min(100, Math.max(0, percent)); // Getting frame number by percent of range, considering start/end frame values if exist.

      return frame.first + (frame.last - frame.first) * percent / 100;
    }
  }, {
    key: "getAnimationFrames",
    value: function getAnimationFrames() {
      var lottieSettings = this.getLottieSettings(),
          currentFrame = this.getAnimationCurrentFrame(),
          startPoint = this.getAnimationRange().start,
          endPoint = this.getAnimationRange().end;
      var firstFrame = this.lottie.__initialFirstFrame,
          lastFrame = 0 === this.lottie.__initialFirstFrame ? this.lottie.__initialTotalFrames : this.lottie.__initialFirstFrame + this.lottie.__initialTotalFrames; // Limiting min start point to animation first frame.

      if (startPoint && startPoint > firstFrame) {
        firstFrame = startPoint;
      } // limiting max end point to animation last frame.


      if (endPoint && endPoint < lastFrame) {
        lastFrame = endPoint;
      }
      /*
      Getting the relevant first frame after loop complete and when not bind to scroll.
      when the animation is in progress (no when a new loop start), the first frame should be the current frame.
      when the trigger is bind_to_scroll we DON'T need to get this functionality.
      */


      if (!this.state.isNewLoopCycle && 'bind_to_scroll' !== lottieSettings.trigger) {
        // When we have a custom start point, we need to check if the start point is larger than the last pause stop of the animation.
        firstFrame = startPoint && startPoint > currentFrame ? startPoint : currentFrame;
      } // Reverse Mode.


      if ('backward' === this.state.animationDirection && this.isReverseMode()) {
        firstFrame = currentFrame;
        lastFrame = startPoint && startPoint > this.lottie.__initialFirstFrame ? startPoint : this.lottie.__initialFirstFrame;
      }

      return {
        first: firstFrame,
        last: lastFrame,
        current: currentFrame,
        total: this.lottie.__initialTotalFrames
      };
    }
  }, {
    key: "getAnimationRange",
    value: function getAnimationRange() {
      var lottieSettings = this.getLottieSettings();
      return {
        start: this.getInitialFrameNumberByPercent(lottieSettings.start_point.size),
        end: this.getInitialFrameNumberByPercent(lottieSettings.end_point.size)
      };
    }
  }, {
    key: "getInitialFrameNumberByPercent",
    value: function getInitialFrameNumberByPercent(percent) {
      percent = Math.min(100, Math.max(0, percent));
      return this.lottie.__initialFirstFrame + (this.lottie.__initialTotalFrames - this.lottie.__initialFirstFrame) * percent / 100;
    }
  }, {
    key: "getAnimationCurrentFrame",
    value: function getAnimationCurrentFrame() {
      // When pausing the animation (when out of viewport) the first frame of the animation changes.
      return 0 === this.lottie.firstFrame ? this.lottie.currentFrame : this.lottie.firstFrame + this.lottie.currentFrame;
    }
  }, {
    key: "setLinkTimeout",
    value: function setLinkTimeout() {
      var _lottieSettings$custo,
          _this5 = this;

      var lottieSettings = this.getLottieSettings();

      if ('on_click' === lottieSettings.trigger && ((_lottieSettings$custo = lottieSettings.custom_link) === null || _lottieSettings$custo === void 0 ? void 0 : _lottieSettings$custo.url) && lottieSettings.link_timeout) {
        this.elements.$containerLink.on('click', function (event) {
          event.preventDefault();

          if (!_this5.isEdit) {
            setTimeout(function () {
              var tabTarget = 'on' === lottieSettings.custom_link.is_external ? '_blank' : '_self';
              window.open(lottieSettings.custom_link.url, tabTarget);
            }, lottieSettings.link_timeout);
          }
        });
      }
    }
  }, {
    key: "bindAnimationClickEvents",
    value: function bindAnimationClickEvents() {
      var _this6 = this;

      this.listeners.elements.$container.triggerAnimationClick = function () {
        _this6.playLottie();
      };

      this.addSessionEventListener(this.elements.$container, 'click', this.listeners.elements.$container.triggerAnimationClick);
    }
  }, {
    key: "getLottieSettings",
    value: function getLottieSettings() {
      var lottieSettings = this.getElementSettings();
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, lottieSettings), {}, {
        lazyload: 'yes' === lottieSettings.lazyload,
        loop: 'yes' === lottieSettings.loop
      });
    }
  }, {
    key: "playLottie",
    value: function playLottie() {
      var frame = this.getAnimationFrames();
      this.lottie.stop();
      this.lottie.playSegments([frame.first, frame.last], true); // We reset the loop cycle state after playing the animation.

      this.state.isNewLoopCycle = false;
    }
  }, {
    key: "bindAnimationHoverEvents",
    value: function bindAnimationHoverEvents() {
      this.createAnimationHoverInEvents();
      this.createAnimationHoverOutEvents();
    }
  }, {
    key: "createAnimationHoverInEvents",
    value: function createAnimationHoverInEvents() {
      var _this7 = this;

      var lottieSettings = this.getLottieSettings(),
          $widgetArea = this.getHoverAreaElement();
      this.state.hoverArea = lottieSettings.hover_area;

      this.listeners.elements.$widgetArea.triggerAnimationHoverIn = function () {
        _this7.state.animationDirection = 'forward';

        _this7.playLottie();
      };

      this.addSessionEventListener($widgetArea, 'mouseenter', this.listeners.elements.$widgetArea.triggerAnimationHoverIn);
    }
    /**
     * @param {jQuery} $el
     * @param {string} event - event type
     * @param {function} callback
     */

  }, {
    key: "addSessionEventListener",
    value: function addSessionEventListener($el, event, callback) {
      $el.on(event, callback);
      this.listeners.collection.push({
        $el: $el,
        event: event,
        callback: callback
      });
    }
  }, {
    key: "createAnimationHoverOutEvents",
    value: function createAnimationHoverOutEvents() {
      var _this8 = this;

      var lottieSettings = this.getLottieSettings(),
          $widgetArea = this.getHoverAreaElement();

      if ('pause' === lottieSettings.on_hover_out || 'reverse' === lottieSettings.on_hover_out) {
        this.state.hoverOutMode = lottieSettings.on_hover_out;

        this.listeners.elements.$widgetArea.triggerAnimationHoverOut = function () {
          if ('pause' === lottieSettings.on_hover_out) {
            _this8.lottie.pause();
          } else {
            _this8.state.animationDirection = 'backward';

            _this8.playLottie();
          }
        };

        this.addSessionEventListener($widgetArea, 'mouseleave', this.listeners.elements.$widgetArea.triggerAnimationHoverOut);
      }
    }
  }, {
    key: "getHoverAreaElement",
    value: function getHoverAreaElement() {
      var lottieSettings = this.getLottieSettings();

      if ('section' === lottieSettings.hover_area) {
        return this.elements.$sectionParent;
      } else if ('column' === lottieSettings.hover_area) {
        return this.elements.$columnParent;
      }

      return this.elements.$container;
    }
  }, {
    key: "setLoopOnAnimationComplete",
    value: function setLoopOnAnimationComplete() {
      var lottieSettings = this.getLottieSettings();
      this.state.isNewLoopCycle = true;

      if (lottieSettings.loop && !this.isReverseMode()) {
        this.setLoopWhenNotReverse();
      } else if (lottieSettings.loop && this.isReverseMode()) {
        this.setReverseAnimationOnLoop();
      } else if (!lottieSettings.loop && this.isReverseMode()) {
        this.setReverseAnimationOnSingleTrigger();
      }
    }
  }, {
    key: "isReverseMode",
    value: function isReverseMode() {
      var lottieSettings = this.getLottieSettings();
      return 'yes' === lottieSettings.reverse_animation || 'reverse' === lottieSettings.on_hover_out && 'backward' === this.state.animationDirection;
    }
  }, {
    key: "setLoopWhenNotReverse",
    value: function setLoopWhenNotReverse() {
      var lottieSettings = this.getLottieSettings();

      if (lottieSettings.number_of_times > 0) {
        this.state.playAnimationCount++;

        if (this.state.playAnimationCount < lottieSettings.number_of_times) {
          this.playLottie();
        } else {
          this.state.playAnimationCount = 0;
        }
      } else {
        this.playLottie();
      }
    }
  }, {
    key: "setReverseAnimationOnLoop",
    value: function setReverseAnimationOnLoop() {
      var lottieSettings = this.getLottieSettings();
      /*
      We trigger the reverse animation:
      either when we don't have any value in the 'Number of Times" field, and then it will be an infinite forward/backward loop,
      or, when we have a value in the 'Number of Times" field and then we need to limit the number of times of the loop cycles.
       */

      if (!lottieSettings.number_of_times || this.state.playAnimationCount < lottieSettings.number_of_times) {
        this.state.animationDirection = 'forward' === this.state.animationDirection ? 'backward' : 'forward';
        this.playLottie();
        /*
        We need to increment the count only on the backward movements,
        because forward movement + backward movement are equal together to one full movement count.
        */

        if ('backward' === this.state.animationDirection) {
          this.state.playAnimationCount++;
        }
      } else {
        // Reset the values for the loop counting for the next trigger.
        this.state.playAnimationCount = 0;
        this.state.animationDirection = 'forward';
      }
    }
  }, {
    key: "setReverseAnimationOnSingleTrigger",
    value: function setReverseAnimationOnSingleTrigger() {
      if (this.state.playAnimationCount < 1) {
        this.state.playAnimationCount++;
        this.state.animationDirection = 'backward';
        this.playLottie();
      } else if (this.state.playAnimationCount >= 1 && 'forward' === this.state.animationDirection) {
        this.state.animationDirection = 'backward';
        this.playLottie();
      } else {
        this.state.playAnimationCount = 0;
        this.state.animationDirection = 'forward';
      }
    }
  }, {
    key: "setAnimationSpeed",
    value: function setAnimationSpeed() {
      var lottieSettings = this.getLottieSettings();

      if (lottieSettings.play_speed) {
        this.lottie.setSpeed(lottieSettings.play_speed.size);
      }
    }
  }, {
    key: "onElementChange",
    value: function onElementChange() {
      this.updateLottieValues();
      this.resetAnimationTrigger();
    }
  }, {
    key: "updateLottieValues",
    value: function updateLottieValues() {
      var _lottieSettings$play_2,
          _this9 = this;

      var lottieSettings = this.getLottieSettings(),
          valuesComparison = [{
        sourceVal: (_lottieSettings$play_2 = lottieSettings.play_speed) === null || _lottieSettings$play_2 === void 0 ? void 0 : _lottieSettings$play_2.size,
        stateProp: 'animationSpeed',
        callback: function callback() {
          return _this9.setAnimationSpeed();
        }
      }, {
        sourceVal: lottieSettings.link_timeout,
        stateProp: 'linkTimeout',
        callback: function callback() {
          return _this9.setLinkTimeout();
        }
      }, {
        sourceVal: lottieSettings.caption,
        stateProp: 'caption',
        callback: function callback() {
          return _this9.setCaption();
        }
      }, {
        sourceVal: lottieSettings.effects_relative_to,
        stateProp: 'effectsRelativeTo',
        callback: function callback() {
          return _this9.updateAnimationByScrollPosition();
        }
      }, {
        sourceVal: lottieSettings.loop,
        stateProp: 'loop',
        callback: function callback() {
          return _this9.onLoopStateChange();
        }
      }];
      valuesComparison.forEach(function (item) {
        if ('undefined' !== typeof item.sourceVal && item.sourceVal !== _this9.state[item.stateProp]) {
          _this9.state[item.stateProp] = item.sourceVal;
          item.callback();
        }
      });
    }
  }, {
    key: "onLoopStateChange",
    value: function onLoopStateChange() {
      var isInActiveViewportMode = 'arriving_to_viewport' === this.state.currentAnimationTrigger && this.state.isInViewport;

      if (this.state.loop && (isInActiveViewportMode || 'none' === this.state.currentAnimationTrigger)) {
        this.playLottie();
      }
    }
  }, {
    key: "resetAnimationTrigger",
    value: function resetAnimationTrigger() {
      var lottieSettings = this.getLottieSettings(),
          isTriggerChange = lottieSettings.trigger !== this.state.currentAnimationTrigger,
          isViewportOffsetChange = lottieSettings.viewport ? this.isViewportOffsetChange() : false,
          isHoverOutModeChange = lottieSettings.on_hover_out ? this.isHoverOutModeChange() : false,
          isHoverAreaChange = lottieSettings.hover_area ? this.isHoverAreaChange() : false;

      if (isTriggerChange || isViewportOffsetChange || isHoverOutModeChange || isHoverAreaChange) {
        this.removeAnimationFrameRequests();
        this.removeObservers();
        this.removeEventListeners();
        this.initAnimationTrigger();
      }
    }
  }, {
    key: "isViewportOffsetChange",
    value: function isViewportOffsetChange() {
      var lottieSettings = this.getLottieSettings(),
          isStartOffsetChange = lottieSettings.viewport.sizes.start !== this.state.viewportOffset.start,
          isEndOffsetChange = lottieSettings.viewport.sizes.end !== this.state.viewportOffset.end;
      return isStartOffsetChange || isEndOffsetChange;
    }
  }, {
    key: "isHoverOutModeChange",
    value: function isHoverOutModeChange() {
      var lottieSettings = this.getLottieSettings();
      return lottieSettings.on_hover_out !== this.state.hoverOutMode;
    }
  }, {
    key: "isHoverAreaChange",
    value: function isHoverAreaChange() {
      var lottieSettings = this.getLottieSettings();
      return lottieSettings.hover_area !== this.state.hoverArea;
    }
  }, {
    key: "removeEventListeners",
    value: function removeEventListeners() {
      this.listeners.collection.forEach(function (listener) {
        listener.$el.off(listener.event, null, listener.callback);
      });
    }
  }, {
    key: "removeObservers",
    value: function removeObservers() {
      // Removing all observers.
      for (var type in this.intersectionObservers) {
        if (this.intersectionObservers[type].observer && this.intersectionObservers[type].element) {
          this.intersectionObservers[type].observer.unobserve(this.intersectionObservers[type].element);
        }
      }
    }
  }, {
    key: "removeAnimationFrameRequests",
    value: function removeAnimationFrameRequests() {
      cancelAnimationFrame(this.animationFrameRequest.timer);
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      (0, _get3.default)((0, _getPrototypeOf2.default)(lottieHandler.prototype), "onDestroy", this).call(this);
      this.destroyLottie();
    }
  }, {
    key: "destroyLottie",
    value: function destroyLottie() {
      this.removeAnimationFrameRequests();
      this.removeObservers();
      this.removeEventListeners();
      this.elements.$animation.removeData('lottie');

      if (this.lottie) {
        this.lottie.destroy();
      }
    }
  }, {
    key: "onLottieDomLoaded",
    value: function onLottieDomLoaded() {
      this.saveInitialValues();
      this.setAnimationSpeed();
      this.setLinkTimeout();
      this.setCaption();
      this.setAnimationFirstFrame();
      this.initAnimationTrigger();
    }
  }, {
    key: "onComplete",
    value: function onComplete() {
      this.setLoopOnAnimationComplete();
    }
  }, {
    key: "onLottieIntersection",
    value: function onLottieIntersection(event) {
      var _this10 = this;

      if (event.isInViewport) {
        /*
        It's required to update the animation progress on first load when lottie is inside the viewport on load
        but, there is a problem when the browser is refreshed when the scroll bar is not in 0 position,
        in this scenario, after the refresh the browser will trigger 2 scroll events
        one trigger on immediate load and second after a f ew ms to move the scroll bar to previous position (before refresh)
        therefore, we use the this.state.isAnimationScrollUpdateNeededOnFirstLoad flag
        to make sure that this.updateAnimationByScrollPosition() function will be triggered only once.
         */
        if (this.state.isAnimationScrollUpdateNeededOnFirstLoad) {
          this.state.isAnimationScrollUpdateNeededOnFirstLoad = false;
          this.updateAnimationByScrollPosition();
        }

        this.animationFrameRequest.timer = requestAnimationFrame(function () {
          return _this10.onAnimationFrameRequest();
        });
      } else {
        var frame = this.getAnimationFrames(),
            finalFrame = 'up' === event.intersectionScrollDirection ? frame.first : frame.last;
        this.state.isAnimationScrollUpdateNeededOnFirstLoad = false;
        cancelAnimationFrame(this.animationFrameRequest.timer); // Set the animation values to min/max when out of viewport.

        this.lottie.goToAndStop(finalFrame, true);
      }
    }
  }, {
    key: "onAnimationFrameRequest",
    value: function onAnimationFrameRequest() {
      var _this11 = this;

      // Making calculation only when there is a change with the scroll position.
      if (window.scrollY !== this.animationFrameRequest.lastScrollY) {
        this.updateAnimationByScrollPosition();
        this.animationFrameRequest.lastScrollY = window.scrollY;
      }

      this.animationFrameRequest.timer = requestAnimationFrame(function () {
        return _this11.onAnimationFrameRequest();
      });
    }
  }]);
  return lottieHandler;
}(elementorModules.frontend.handlers.Base);

exports.default = lottieHandler;

/***/ })

}]);
//# sourceMappingURL=lottie.742f4469ba922d17ef1d.bundle.js.map
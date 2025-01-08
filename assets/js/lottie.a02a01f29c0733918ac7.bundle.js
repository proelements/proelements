/*! pro-elements - v3.26.0 - 07-01-2025 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["lottie"],{

/***/ "../modules/lottie/assets/js/frontend/handler.js":
/*!*******************************************************!*\
  !*** ../modules/lottie/assets/js/frontend/handler.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class lottieHandler extends elementorModules.frontend.handlers.Base {
  getDefaultSettings() {
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
  getDefaultElements() {
    const {
      selectors
    } = this.getSettings();
    return {
      $widgetWrapper: this.$element,
      $container: this.$element.find(selectors.container),
      $containerLink: this.$element.find(selectors.containerLink),
      $animation: this.$element.find(selectors.animation),
      $caption: this.$element.find(selectors.caption),
      $sectionParent: this.$element.closest('.elementor-section'),
      $columnParent: this.$element.closest('.elementor-column'),
      $containerParent: this.$element.closest('.e-con')
    };
  }
  onInit() {
    super.onInit(...arguments);
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
  initLottie() {
    const lottieSettings = this.getLottieSettings();
    if (lottieSettings.lazyload) {
      this.lazyloadLottie();
    } else {
      this.generateLottie();
    }
  }
  lazyloadLottie() {
    const bufferHeightBeforeTriggerLottie = 200;
    this.intersectionObservers.lazyload.observer = elementorModules.utils.Scroll.scrollObserver({
      offset: `0px 0px ${bufferHeightBeforeTriggerLottie}px`,
      callback: event => {
        if (event.isInViewport) {
          this.generateLottie();
          this.intersectionObservers.lazyload.observer.unobserve(this.intersectionObservers.lazyload.element);
        }
      }
    });
    this.intersectionObservers.lazyload.element = this.elements.$container[0];
    this.intersectionObservers.lazyload.observer.observe(this.intersectionObservers.lazyload.element);
  }
  generateLottie() {
    this.createLottieInstance();
    this.setLottieEvents();
  }
  createLottieInstance() {
    const lottieSettings = this.getLottieSettings();
    this.lottie = bodymovin.loadAnimation({
      container: this.elements.$animation[0],
      path: this.getAnimationPath(),
      renderer: lottieSettings.renderer,
      autoplay: false,
      // We always want to trigger the animation manually for considering start/end frame.
      name: 'lottie-widget'
    });

    // Expose the lottie instance in the frontend.
    this.elements.$animation.data('lottie', this.lottie);
  }
  getAnimationPath() {
    const lottieSettings = this.getLottieSettings();
    if (lottieSettings.source_json?.url && 'json' === lottieSettings.source_json.url.toLowerCase().substr(-4)) {
      return lottieSettings.source_json.url;
    } else if (lottieSettings.source_external_url?.url) {
      return lottieSettings.source_external_url.url;
    }

    // Default animation path.
    return elementorProFrontend.config.lottie.defaultAnimationUrl;
  }
  setCaption() {
    const lottieSettings = this.getLottieSettings();
    if ('external_url' === lottieSettings.source || 'media_file' === lottieSettings.source && 'custom' === lottieSettings.caption_source) {
      const $captionElement = this.getCaptionElement();
      $captionElement.text(lottieSettings.caption);
    }
  }
  getCaptionElement() {
    if (!this.elements.$caption.length) {
      const {
        classes
      } = this.getSettings();
      this.elements.$caption = jQuery('<p>', {
        class: classes.caption
      });
      this.elements.$container.append(this.elements.$caption);
      return this.elements.$caption;
    }
    return this.elements.$caption;
  }
  setLottieEvents() {
    this.lottie.addEventListener('DOMLoaded', () => this.onLottieDomLoaded());
    this.lottie.addEventListener('complete', () => this.onComplete());
  }
  saveInitialValues() {
    const lottieSettings = this.getLottieSettings();

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
    this.state.animationSpeed = lottieSettings.play_speed?.size;
    this.state.linkTimeout = lottieSettings.link_timeout;
    this.state.caption = lottieSettings.caption;
    this.state.loop = lottieSettings.loop;
  }
  setAnimationFirstFrame() {
    const frame = this.getAnimationFrames();

    /*
    We need to subtract the initial first frame from the first frame for handling scenarios
    when the animation first frame is not 0, this way we always get the relevant first frame.
    example: when start point is 70 and initial first frame is 60, the animation should start at 10.
     */
    frame.first = frame.first - this.lottie.__initialFirstFrame;
    this.lottie.goToAndStop(frame.first, true);
  }
  initAnimationTrigger() {
    const lottieSettings = this.getLottieSettings();
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
  playAnimationWhenArrivingToViewport() {
    const offset = this.getOffset();
    this.intersectionObservers.animation.observer = elementorModules.utils.Scroll.scrollObserver({
      offset: `${offset.end}% 0% ${offset.start}%`,
      callback: event => {
        if (event.isInViewport) {
          this.state.isInViewport = true;
          this.playLottie();
        } else {
          this.state.isInViewport = false;
          this.lottie.pause();
        }
      }
    });
    this.intersectionObservers.animation.element = this.elements.$widgetWrapper[0];
    this.intersectionObservers.animation.observer.observe(this.intersectionObservers.animation.element);
  }
  getOffset() {
    const lottieSettings = this.getLottieSettings(),
      start = -lottieSettings.viewport.sizes.start || 0,
      end = -(100 - lottieSettings.viewport.sizes.end) || 0;
    return {
      start,
      end
    };
  }
  playAnimationWhenBindToScroll() {
    const lottieSettings = this.getLottieSettings(),
      offset = this.getOffset();

    // Generate scroll detection by Intersection Observer API
    this.intersectionObservers.animation.observer = elementorModules.utils.Scroll.scrollObserver({
      offset: `${offset.end}% 0% ${offset.start}%`,
      callback: event => this.onLottieIntersection(event)
    });
    this.intersectionObservers.animation.element = 'viewport' === lottieSettings.effects_relative_to ? this.elements.$widgetWrapper[0] : document.documentElement;
    this.intersectionObservers.animation.observer.observe(this.intersectionObservers.animation.element);
  }
  updateAnimationByScrollPosition() {
    const lottieSettings = this.getLottieSettings();
    let percentage;
    if ('page' === lottieSettings.effects_relative_to) {
      percentage = this.getLottiePagePercentage();
    } else if ('fixed' === this.getCurrentDeviceSetting('_position')) {
      percentage = this.getLottieViewportHeightPercentage();
    } else {
      percentage = this.getLottieViewportPercentage();
    }
    let nextFrameToPlay = this.getFrameNumberByPercent(percentage);
    nextFrameToPlay = nextFrameToPlay - this.lottie.__initialFirstFrame;
    this.lottie.goToAndStop(nextFrameToPlay, true);
  }
  getLottieViewportPercentage() {
    return elementorModules.utils.Scroll.getElementViewportPercentage(this.elements.$widgetWrapper, this.getOffset());
  }
  getLottiePagePercentage() {
    return elementorModules.utils.Scroll.getPageScrollPercentage(this.getOffset());
  }
  getLottieViewportHeightPercentage() {
    return elementorModules.utils.Scroll.getPageScrollPercentage(this.getOffset(), window.innerHeight);
  }

  /**
   * @param {number} percent - Percent value between 0-100
   */
  getFrameNumberByPercent(percent) {
    const frame = this.getAnimationFrames();

    /*
    In mobile devices the document height can be 'stretched' at the top and bottom points of the document,
    this 'stretched' will make percent to be either negative or larger than 100, therefore we need to limit percent between 0-100.
    */
    percent = Math.min(100, Math.max(0, percent));

    // Getting frame number by percent of range, considering start/end frame values if exist.
    return frame.first + (frame.last - frame.first) * percent / 100;
  }
  getAnimationFrames() {
    const lottieSettings = this.getLottieSettings(),
      currentFrame = this.getAnimationCurrentFrame(),
      startPoint = this.getAnimationRange().start,
      endPoint = this.getAnimationRange().end;
    let firstFrame = this.lottie.__initialFirstFrame,
      lastFrame = 0 === this.lottie.__initialFirstFrame ? this.lottie.__initialTotalFrames : this.lottie.__initialFirstFrame + this.lottie.__initialTotalFrames;

    // Limiting min start point to animation first frame.
    if (startPoint && startPoint > firstFrame) {
      firstFrame = startPoint;
    }

    // Limiting max end point to animation last frame.
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
    }

    // Reverse Mode.
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
  getAnimationRange() {
    const lottieSettings = this.getLottieSettings();
    return {
      start: this.getInitialFrameNumberByPercent(lottieSettings.start_point.size),
      end: this.getInitialFrameNumberByPercent(lottieSettings.end_point.size)
    };
  }
  getInitialFrameNumberByPercent(percent) {
    percent = Math.min(100, Math.max(0, percent));
    return this.lottie.__initialFirstFrame + (this.lottie.__initialTotalFrames - this.lottie.__initialFirstFrame) * percent / 100;
  }
  getAnimationCurrentFrame() {
    // When pausing the animation (when out of viewport) the first frame of the animation changes.
    return 0 === this.lottie.firstFrame ? this.lottie.currentFrame : this.lottie.firstFrame + this.lottie.currentFrame;
  }
  setLinkTimeout() {
    const lottieSettings = this.getLottieSettings();
    if ('on_click' === lottieSettings.trigger && lottieSettings.custom_link?.url && lottieSettings.link_timeout) {
      this.elements.$containerLink.on('click', event => {
        event.preventDefault();
        if (!this.isEdit) {
          setTimeout(() => {
            const tabTarget = 'on' === lottieSettings.custom_link.is_external ? '_blank' : '_self';
            window.open(lottieSettings.custom_link.url, tabTarget);
          }, lottieSettings.link_timeout);
        }
      });
    }
  }
  bindAnimationClickEvents() {
    this.listeners.elements.$container.triggerAnimationClick = () => {
      this.playLottie();
    };
    this.addSessionEventListener(this.elements.$container, 'click', this.listeners.elements.$container.triggerAnimationClick);
  }
  getLottieSettings() {
    const lottieSettings = this.getElementSettings();
    return {
      ...lottieSettings,
      lazyload: 'yes' === lottieSettings.lazyload,
      loop: 'yes' === lottieSettings.loop
    };
  }
  playLottie() {
    const frame = this.getAnimationFrames();
    this.lottie.stop();
    this.lottie.playSegments([frame.first, frame.last], true);

    // We reset the loop cycle state after playing the animation.
    this.state.isNewLoopCycle = false;
  }
  bindAnimationHoverEvents() {
    this.createAnimationHoverInEvents();
    this.createAnimationHoverOutEvents();
  }
  createAnimationHoverInEvents() {
    const lottieSettings = this.getLottieSettings(),
      $widgetArea = this.getHoverAreaElement();
    this.state.hoverArea = lottieSettings.hover_area;
    this.listeners.elements.$widgetArea.triggerAnimationHoverIn = () => {
      this.state.animationDirection = 'forward';
      this.playLottie();
    };
    this.addSessionEventListener($widgetArea, 'mouseenter', this.listeners.elements.$widgetArea.triggerAnimationHoverIn);
  }

  /**
   * @param {jQuery}   $el
   * @param {string}   event    - event type
   * @param {Function} callback
   */
  addSessionEventListener($el, event, callback) {
    $el.on(event, callback);
    this.listeners.collection.push({
      $el,
      event,
      callback
    });
  }
  createAnimationHoverOutEvents() {
    const lottieSettings = this.getLottieSettings(),
      $widgetArea = this.getHoverAreaElement();
    if ('pause' === lottieSettings.on_hover_out || 'reverse' === lottieSettings.on_hover_out) {
      this.state.hoverOutMode = lottieSettings.on_hover_out;
      this.listeners.elements.$widgetArea.triggerAnimationHoverOut = () => {
        if ('pause' === lottieSettings.on_hover_out) {
          this.lottie.pause();
        } else {
          this.state.animationDirection = 'backward';
          this.playLottie();
        }
      };
      this.addSessionEventListener($widgetArea, 'mouseleave', this.listeners.elements.$widgetArea.triggerAnimationHoverOut);
    }
  }
  getHoverAreaElement() {
    const lottieSettings = this.getLottieSettings();
    switch (lottieSettings.hover_area) {
      case 'section':
        return this.elements.$sectionParent;
      case 'column':
        return this.elements.$columnParent;
      case 'container':
        return this.elements.$containerParent;
    }
    return this.elements.$container;
  }
  setLoopOnAnimationComplete() {
    const lottieSettings = this.getLottieSettings();
    this.state.isNewLoopCycle = true;
    if (lottieSettings.loop && !this.isReverseMode()) {
      this.setLoopWhenNotReverse();
    } else if (lottieSettings.loop && this.isReverseMode()) {
      this.setReverseAnimationOnLoop();
    } else if (!lottieSettings.loop && this.isReverseMode()) {
      this.setReverseAnimationOnSingleTrigger();
    }
  }
  isReverseMode() {
    const lottieSettings = this.getLottieSettings();
    return 'yes' === lottieSettings.reverse_animation || 'reverse' === lottieSettings.on_hover_out && 'backward' === this.state.animationDirection;
  }
  setLoopWhenNotReverse() {
    const lottieSettings = this.getLottieSettings();
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
  setReverseAnimationOnLoop() {
    const lottieSettings = this.getLottieSettings();

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
  setReverseAnimationOnSingleTrigger() {
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
  setAnimationSpeed() {
    const lottieSettings = this.getLottieSettings();
    if (lottieSettings.play_speed) {
      this.lottie.setSpeed(lottieSettings.play_speed.size);
    }
  }
  onElementChange() {
    this.updateLottieValues();
    this.resetAnimationTrigger();
  }
  updateLottieValues() {
    const lottieSettings = this.getLottieSettings(),
      valuesComparison = [{
        sourceVal: lottieSettings.play_speed?.size,
        stateProp: 'animationSpeed',
        callback: () => this.setAnimationSpeed()
      }, {
        sourceVal: lottieSettings.link_timeout,
        stateProp: 'linkTimeout',
        callback: () => this.setLinkTimeout()
      }, {
        sourceVal: lottieSettings.caption,
        stateProp: 'caption',
        callback: () => this.setCaption()
      }, {
        sourceVal: lottieSettings.effects_relative_to,
        stateProp: 'effectsRelativeTo',
        callback: () => this.updateAnimationByScrollPosition()
      }, {
        sourceVal: lottieSettings.loop,
        stateProp: 'loop',
        callback: () => this.onLoopStateChange()
      }];
    valuesComparison.forEach(item => {
      if ('undefined' !== typeof item.sourceVal && item.sourceVal !== this.state[item.stateProp]) {
        this.state[item.stateProp] = item.sourceVal;
        item.callback();
      }
    });
  }
  onLoopStateChange() {
    const isInActiveViewportMode = 'arriving_to_viewport' === this.state.currentAnimationTrigger && this.state.isInViewport;
    if (this.state.loop && (isInActiveViewportMode || 'none' === this.state.currentAnimationTrigger)) {
      this.playLottie();
    }
  }
  resetAnimationTrigger() {
    const lottieSettings = this.getLottieSettings(),
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
  isViewportOffsetChange() {
    const lottieSettings = this.getLottieSettings(),
      isStartOffsetChange = lottieSettings.viewport.sizes.start !== this.state.viewportOffset.start,
      isEndOffsetChange = lottieSettings.viewport.sizes.end !== this.state.viewportOffset.end;
    return isStartOffsetChange || isEndOffsetChange;
  }
  isHoverOutModeChange() {
    const lottieSettings = this.getLottieSettings();
    return lottieSettings.on_hover_out !== this.state.hoverOutMode;
  }
  isHoverAreaChange() {
    const lottieSettings = this.getLottieSettings();
    return lottieSettings.hover_area !== this.state.hoverArea;
  }
  removeEventListeners() {
    this.listeners.collection.forEach(listener => {
      listener.$el.off(listener.event, null, listener.callback);
    });
  }
  removeObservers() {
    // Removing all observers.
    for (const type in this.intersectionObservers) {
      if (this.intersectionObservers[type].observer && this.intersectionObservers[type].element) {
        this.intersectionObservers[type].observer.unobserve(this.intersectionObservers[type].element);
      }
    }
  }
  removeAnimationFrameRequests() {
    cancelAnimationFrame(this.animationFrameRequest.timer);
  }
  onDestroy() {
    super.onDestroy();
    this.destroyLottie();
  }
  destroyLottie() {
    this.removeAnimationFrameRequests();
    this.removeObservers();
    this.removeEventListeners();
    this.elements.$animation.removeData('lottie');
    if (this.lottie) {
      this.lottie.destroy();
    }
  }
  onLottieDomLoaded() {
    this.saveInitialValues();
    this.setAnimationSpeed();
    this.setLinkTimeout();
    this.setCaption();
    this.setAnimationFirstFrame();
    this.initAnimationTrigger();
  }
  onComplete() {
    this.setLoopOnAnimationComplete();
  }
  onLottieIntersection(event) {
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
      this.animationFrameRequest.timer = requestAnimationFrame(() => this.onAnimationFrameRequest());
    } else {
      const frame = this.getAnimationFrames(),
        finalFrame = 'up' === event.intersectionScrollDirection ? frame.first : frame.last;
      this.state.isAnimationScrollUpdateNeededOnFirstLoad = false;
      cancelAnimationFrame(this.animationFrameRequest.timer);

      // Set the animation values to min/max when out of viewport.
      this.lottie.goToAndStop(finalFrame, true);
    }
  }
  onAnimationFrameRequest() {
    // Making calculation only when there is a change with the scroll position.
    if (window.scrollY !== this.animationFrameRequest.lastScrollY) {
      this.updateAnimationByScrollPosition();
      this.animationFrameRequest.lastScrollY = window.scrollY;
    }
    this.animationFrameRequest.timer = requestAnimationFrame(() => this.onAnimationFrameRequest());
  }
}
exports["default"] = lottieHandler;

/***/ })

}]);
//# sourceMappingURL=lottie.a02a01f29c0733918ac7.bundle.js.map
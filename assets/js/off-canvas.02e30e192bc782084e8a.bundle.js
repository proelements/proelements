/*! pro-elements - v3.26.0 - 17-12-2024 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["off-canvas"],{

/***/ "../modules/off-canvas/assets/js/frontend/handlers/off-canvas.js":
/*!***********************************************************************!*\
  !*** ../modules/off-canvas/assets/js/frontend/handlers/off-canvas.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _modalKeyboardHandler = _interopRequireDefault(__webpack_require__(/*! elementor-pro/frontend/utils/modal-keyboard-handler */ "../assets/dev/js/frontend/utils/modal-keyboard-handler.js"));
var _runElementHandlers = _interopRequireDefault(__webpack_require__(/*! elementor-pro/frontend/utils/run-element-handlers */ "../assets/dev/js/frontend/utils/run-element-handlers.js"));
class OffCanvas extends elementorModules.frontend.handlers.Base {
  keyboardHandler = null;
  isOffCanvasOpenedOnce = false;
  getDefaultSettings() {
    return {
      selectors: {
        wrapper: '.e-off-canvas',
        overlay: '.e-off-canvas__overlay',
        main: '.e-off-canvas__main',
        content: '.e-off-canvas__content',
        body: 'body'
      }
    };
  }
  getDefaultElements() {
    const settings = this.getSettings();
    return {
      $wrapper: this.$element.find(settings.selectors.wrapper),
      $overlay: this.$element.find(settings.selectors.overlay),
      $main: this.$element.find(settings.selectors.main),
      $content: this.$element.find(settings.selectors.content),
      $body: jQuery(settings.selectors.body)
    };
  }
  onInit() {
    super.onInit();
    this.initAriaAttributesToTriggerElements();
    if (this.isEditingMode()) {
      this.maybeDisableScroll();
    } else {
      this.addClassToPreviousSiblingInsideASection();
    }
  }
  onDestroy() {
    super.onDestroy();
    this.enableScroll();
  }
  bindEvents() {
    this.elements.$overlay.on('click', event => {
      event.preventDefault();
      this.onClickOverlay(event);
    });
    elementorFrontend.elements.$window.on('keydown', this.onCanvasKeyDown.bind(this));
    this.elements.$main.on('animationend animationcancel', this.removeAnimationClasses.bind(this));
    elementorFrontend.elements.$window.on('elementor-pro/off-canvas/toggle-display-mode', this.handleDisplayToggle.bind(this));
  }
  unbindEvents() {
    this.elements.$overlay.off();
    this.elements.$main.off();
    elementorFrontend.elements.$window.off('keydown', this.onCanvasKeyDown);
    elementorFrontend.elements.$window.off('elementor-pro/off-canvas/toggle-display-mode');
  }
  handleDisplayToggle(event) {
    const widgetId = event.originalEvent.detail.id;
    if (widgetId !== this.getWidgetId()) {
      return;
    }
    const displayMode = event.originalEvent.detail.displayMode,
      currentDisplayMode = this.isVisible() ? 'open' : 'close',
      isKeyboardEvent = '' === event?.originalEvent?.detail?.previousEvent?.pointerType;
    if ('open' === displayMode) {
      this.openOffCanvas(isKeyboardEvent);
    } else if ('close' === displayMode) {
      this.closeOffCanvas();
    } else if ('toggle' === displayMode) {
      this['open' === currentDisplayMode ? 'closeOffCanvas' : 'openOffCanvas'](isKeyboardEvent);
    }
  }
  openOffCanvas() {
    let isKeyboardEvent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (this.isVisible() || this.isInsideCarousel()) {
      return;
    }
    this.elements.$wrapper.attr('aria-hidden', 'false');
    this.elements.$wrapper.removeAttr('inert');
    this.elements.$wrapper.removeAttr('data-delay-child-handlers');
    this.updateAriaExpandedOfTriggerElements('true');
    this.toggleDraggable(false);
    this.maybeOnOpenAnimation();
    this.maybeDisableScroll();
    this.handleElementHandlers();
    if (isKeyboardEvent) {
      this.handleKeyboardA11y();
    }
  }
  handleKeyboardA11y() {
    this.initKeyboardHandler();
    this.keyboardHandler.onOpenModal();
  }
  closeOffCanvas() {
    if (!this.isVisible()) {
      return;
    }
    this.maybeOnCloseAnimation();
    this.elements.$wrapper.attr('aria-hidden', 'true');
    this.elements.$wrapper.attr('inert', '');
    this.updateAriaExpandedOfTriggerElements('false');
    this.toggleDraggable(true);
    this.enableScroll();
  }
  onCanvasKeyDown(event) {
    if ('Escape' !== event.key || 'yes' === this.getElementSettings('is_not_close_on_esc_overlay')) {
      return;
    }
    this.closeOffCanvas();
  }
  onClickOverlay() {
    const elementSettings = this.getElementSettings(),
      isPreventCloseOnOverlay = 'yes' === elementSettings.is_not_close_on_overlay;
    if (isPreventCloseOnOverlay || this.isEditingMode()) {
      return;
    }
    this.closeOffCanvas();
  }
  maybeOnOpenAnimation() {
    const openAnimationClass = this.getResponsiveSetting('entrance_animation') || 'none';
    if ('none' === openAnimationClass) {
      this.elements.$wrapper.addClass('no-animation');
    } else {
      this.elements.$wrapper.removeClass('no-animation');
    }
    this.elements.$main.addClass(`animated ${openAnimationClass}`);
    this.elements.$wrapper.removeClass('animated-reverse-wrapper');
  }
  maybeOnCloseAnimation() {
    const exitAnimationClass = this.getResponsiveSetting('exit_animation') || 'none';
    if ('none' === exitAnimationClass) {
      this.elements.$wrapper.addClass('no-animation');
    } else {
      this.elements.$wrapper.removeClass('no-animation');
    }
    this.elements.$main.addClass(`animated reverse ${exitAnimationClass}`);
    this.elements.$wrapper.addClass('animated-reverse-wrapper');
    this.elements.$body.addClass('e-off-canvas__no-scroll-animation');
  }
  removeAnimationClasses() {
    const isExitAnimation = this.elements.$main.hasClass('reverse'),
      openAnimationClass = this.getResponsiveSetting('entrance_animation') || 'none',
      exitAnimationClass = this.getResponsiveSetting('exit_animation') || 'none';
    if (isExitAnimation) {
      this.elements.$main.removeClass(`animated reverse ${exitAnimationClass}`);
      this.elements.$wrapper.removeClass('animated-reverse-wrapper');
      this.elements.$body.removeClass('e-off-canvas__no-scroll-animation');
      this.keyboardHandler?.onCloseModal();
    } else {
      this.elements.$main.removeClass(`animated ${openAnimationClass}`);
    }
  }
  getResponsiveSetting(controlName) {
    const currentDevice = elementorFrontend.getCurrentDeviceMode();
    return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(), controlName, '', currentDevice);
  }
  isEditingMode() {
    return 'yes' === this.getElementSettings('editing_mode') && elementorFrontend.isEditMode();
  }
  maybeDisableScroll() {
    if ('yes' === this.getElementSettings('prevent_scroll')) {
      this.elements.$body.addClass('e-off-canvas__no-scroll');
    }
  }
  enableScroll() {
    this.elements.$body.removeClass('e-off-canvas__no-scroll');
  }
  toggleDraggable(value) {
    if (elementorFrontend.isEditMode() && '0' !== this.elements.$overlay.css('opacity')) {
      this.$element.attr('draggable', value);
    }
  }
  handleEditingModeToggle() {
    if ('yes' === this.getElementSettings('editing_mode')) {
      this.openOffCanvas();
    } else {
      this.closeOffCanvas();
    }
  }
  getKeyboardHandlingConfig() {
    return {
      $modalElements: this.elements.$wrapper,
      $elementWrapper: this.elements.$content,
      modalType: 'off-canvas',
      modalId: this.getID()
    };
  }
  initAriaAttributesToTriggerElements() {
    const triggerElements = this.getTriggerElements();
    triggerElements.forEach(triggerElement => {
      triggerElement.setAttribute('aria-controls', `off-canvas-${this.getID()}`);
      triggerElement.setAttribute('aria-expanded', 'false');
    });
  }
  getTriggerElements() {
    const links = elementorFrontend.elements.window.document.body.querySelectorAll('a'),
      unfilteredTriggerElements = Array.from(links).filter(link => link.href?.includes('elementor-action')),
      matchingTriggerElements = [];
    unfilteredTriggerElements.forEach(triggerElement => {
      if (!this.isActionUrlIdEqualToWidgetId(triggerElement.href)) {
        return false;
      }
      matchingTriggerElements.push(triggerElement);
    });
    return matchingTriggerElements;
  }
  updateAriaExpandedOfTriggerElements(isExpanded) {
    const triggerElements = elementorFrontend.elements.window.document.body.querySelectorAll(`[aria-controls="off-canvas-${this.getID()}"]`);
    triggerElements.forEach(triggerElement => {
      triggerElement.setAttribute('aria-expanded', isExpanded);
    });
  }
  isActionUrlIdEqualToWidgetId(encodedUrl) {
    const url = decodeURIComponent(encodedUrl);
    let settings = {};
    const settingsMatch = url.match(/settings=(.+)/);
    if (settingsMatch) {
      settings = JSON.parse(atob(settingsMatch[1]));
    }
    return this.getID() === settings?.id;
  }
  isVisible() {
    return 'false' === this.elements.$wrapper.attr('aria-hidden');
  }
  maybeDragWidgetsBeneathOverlay() {
    this.elements.$overlay.toggleClass('no-pointer-events');
  }
  onElementChange(propertyName) {
    if ('editing_mode' === propertyName) {
      this.handleEditingModeToggle();
    }
    if ('has_overlay' === propertyName) {
      this.maybeDragWidgetsBeneathOverlay('has_overlay');
    }
  }
  handleElementHandlers() {
    if (this.isOffCanvasOpenedOnce) {
      return;
    }
    (0, _runElementHandlers.default)(this.elements.$main[0].querySelectorAll('.e-off-canvas__content'));
    this.isOffCanvasOpenedOnce = true;
  }
  initKeyboardHandler() {
    if (!this.keyboardHandler) {
      this.keyboardHandler = new _modalKeyboardHandler.default(this.getKeyboardHandlingConfig());
    }
  }
  addClassToPreviousSiblingInsideASection() {
    const isInsideSection = this.$element[0].closest('.elementor-section');
    if (!isInsideSection) {
      return;
    }
    const previousElement = this.$element[0].previousElementSibling;
    previousElement?.classList.add('e-element-before-off-canvas');
  }
  getWidgetId() {
    const loopWidgetContainer = this.$element.closest('.e-loop-item');
    const isInLoopWidget = loopWidgetContainer.length > 0;
    if (!isInLoopWidget) {
      return this.getID().toString();
    }
    const id = this.elements.$wrapper.attr('id');
    return id ? id.replace('off-canvas-', '') : this.getID().toString();
  }
  isInsideCarousel() {
    const swiperWrapper = this.$element.closest('.swiper-wrapper');
    return swiperWrapper.length > 0;
  }
}
exports["default"] = OffCanvas;

/***/ })

}]);
//# sourceMappingURL=off-canvas.02e30e192bc782084e8a.bundle.js.map
/*! pro-elements - v3.22.0 - 24-06-2024 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["elements-handlers"],{

/***/ "../assets/dev/js/frontend/elements-handlers.js":
/*!******************************************************!*\
  !*** ../assets/dev/js/frontend/elements-handlers.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _frontend = _interopRequireDefault(__webpack_require__(/*! modules/animated-headline/assets/js/frontend/frontend */ "../modules/animated-headline/assets/js/frontend/frontend.js"));
var _frontend2 = _interopRequireDefault(__webpack_require__(/*! modules/carousel/assets/js/frontend/frontend */ "../modules/carousel/assets/js/frontend/frontend.js"));
var _frontend3 = _interopRequireDefault(__webpack_require__(/*! modules/countdown/assets/js/frontend/frontend */ "../modules/countdown/assets/js/frontend/frontend.js"));
var _frontend4 = _interopRequireDefault(__webpack_require__(/*! modules/hotspot/assets/js/frontend/frontend */ "../modules/hotspot/assets/js/frontend/frontend.js"));
var _frontend5 = _interopRequireDefault(__webpack_require__(/*! modules/forms/assets/js/frontend/frontend */ "../modules/forms/assets/js/frontend/frontend.js"));
var _frontend6 = _interopRequireDefault(__webpack_require__(/*! modules/gallery/assets/js/frontend/frontend */ "../modules/gallery/assets/js/frontend/frontend.js"));
var _frontend7 = _interopRequireDefault(__webpack_require__(/*! modules/lottie/assets/js/frontend/frontend */ "../modules/lottie/assets/js/frontend/frontend.js"));
var _frontend8 = _interopRequireDefault(__webpack_require__(/*! modules/nav-menu/assets/js/frontend/frontend */ "../modules/nav-menu/assets/js/frontend/frontend.js"));
var _frontend9 = _interopRequireDefault(__webpack_require__(/*! modules/popup/assets/js/frontend/frontend */ "../modules/popup/assets/js/frontend/frontend.js"));
var _frontend10 = _interopRequireDefault(__webpack_require__(/*! modules/posts/assets/js/frontend/frontend */ "../modules/posts/assets/js/frontend/frontend.js"));
var _frontend11 = _interopRequireDefault(__webpack_require__(/*! modules/share-buttons/assets/js/frontend/frontend */ "../modules/share-buttons/assets/js/frontend/frontend.js"));
var _frontend12 = _interopRequireDefault(__webpack_require__(/*! modules/slides/assets/js/frontend/frontend */ "../modules/slides/assets/js/frontend/frontend.js"));
var _frontend13 = _interopRequireDefault(__webpack_require__(/*! modules/social/assets/js/frontend/frontend */ "../modules/social/assets/js/frontend/frontend.js"));
var _frontend14 = _interopRequireDefault(__webpack_require__(/*! modules/table-of-contents/assets/js/frontend/frontend */ "../modules/table-of-contents/assets/js/frontend/frontend.js"));
var _frontend15 = _interopRequireDefault(__webpack_require__(/*! modules/theme-builder/assets/js/frontend/frontend */ "../modules/theme-builder/assets/js/frontend/frontend.js"));
var _frontend16 = _interopRequireDefault(__webpack_require__(/*! modules/theme-elements/assets/js/frontend/frontend */ "../modules/theme-elements/assets/js/frontend/frontend.js"));
var _frontend17 = _interopRequireDefault(__webpack_require__(/*! modules/woocommerce/assets/js/frontend/frontend */ "../modules/woocommerce/assets/js/frontend/frontend.js"));
var _frontend18 = _interopRequireDefault(__webpack_require__(/*! modules/loop-builder/assets/js/frontend/frontend */ "../modules/loop-builder/assets/js/frontend/frontend.js"));
var _frontend19 = _interopRequireDefault(__webpack_require__(/*! modules/mega-menu/assets/js/frontend/frontend */ "../modules/mega-menu/assets/js/frontend/frontend.js"));
var _frontend20 = _interopRequireDefault(__webpack_require__(/*! modules/nested-carousel/assets/js/frontend/frontend */ "../modules/nested-carousel/assets/js/frontend/frontend.js"));
var _frontend21 = _interopRequireDefault(__webpack_require__(/*! modules/loop-filter/assets/js/frontend/frontend */ "../modules/loop-filter/assets/js/frontend/frontend.js"));
var _frontend22 = _interopRequireDefault(__webpack_require__(/*! modules/off-canvas/assets/js/frontend/frontend */ "../modules/off-canvas/assets/js/frontend/frontend.js"));
const extendDefaultHandlers = defaultHandlers => {
  const handlers = {
    animatedText: _frontend.default,
    carousel: _frontend2.default,
    countdown: _frontend3.default,
    hotspot: _frontend4.default,
    form: _frontend5.default,
    gallery: _frontend6.default,
    lottie: _frontend7.default,
    nav_menu: _frontend8.default,
    popup: _frontend9.default,
    posts: _frontend10.default,
    share_buttons: _frontend11.default,
    slides: _frontend12.default,
    social: _frontend13.default,
    themeBuilder: _frontend15.default,
    themeElements: _frontend16.default,
    woocommerce: _frontend17.default,
    tableOfContents: _frontend14.default,
    loopBuilder: _frontend18.default,
    megaMenu: _frontend19.default,
    nestedCarousel: _frontend20.default,
    taxonomyFilter: _frontend21.default,
    offCanvas: _frontend22.default
  };
  return {
    ...defaultHandlers,
    ...handlers
  };
};
elementorProFrontend.on('elementor-pro/modules/init:before', () => {
  elementorFrontend.hooks.addFilter('elementor-pro/frontend/handlers', extendDefaultHandlers);
});

/***/ }),

/***/ "../assets/dev/js/frontend/utils/ajax-helper.js":
/*!******************************************************!*\
  !*** ../assets/dev/js/frontend/utils/ajax-helper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class AjaxHelper {
  addLoadingAnimationOverlay(elementId) {
    const widget = document.querySelector(`.elementor-element-${elementId}`);
    if (!widget) {
      return;
    }
    widget.classList.add('e-loading-overlay');
  }
  removeLoadingAnimationOverlay(elementId) {
    const widget = document.querySelector(`.elementor-element-${elementId}`);
    if (!widget) {
      return;
    }
    widget.classList.remove('e-loading-overlay');
  }
}
exports["default"] = AjaxHelper;

/***/ }),

/***/ "../assets/dev/js/frontend/utils/focusable-element-selectors.js":
/*!**********************************************************************!*\
  !*** ../assets/dev/js/frontend/utils/focusable-element-selectors.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.focusableElementSelectors = focusableElementSelectors;
function focusableElementSelectors() {
  return 'audio, button, canvas, details, iframe, input, select, summary, textarea, video, [accesskey], a[href], area[href], [tabindex]';
}

/***/ }),

/***/ "../assets/dev/js/frontend/utils/icons/e-icons.js":
/*!********************************************************!*\
  !*** ../assets/dev/js/frontend/utils/icons/e-icons.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.close = void 0;
var _manager = _interopRequireDefault(__webpack_require__(/*! ./manager */ "../assets/dev/js/frontend/utils/icons/manager.js"));
// This file is automatically generated, please don't change anything in this file.

const iconsManager = new _manager.default('eicon');
const close = exports.close = {
  get element() {
    const svgData = {
      path: 'M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z',
      width: 1000,
      height: 1000
    };
    return iconsManager.createSvgElement('close', svgData);
  }
};

/***/ }),

/***/ "../assets/dev/js/frontend/utils/icons/manager.js":
/*!********************************************************!*\
  !*** ../assets/dev/js/frontend/utils/icons/manager.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));
class IconsManager {
  constructor(elementsPrefix) {
    this.prefix = `${elementsPrefix}-`;
    if (!IconsManager.symbolsContainer) {
      const symbolsContainerId = 'e-font-icon-svg-symbols';
      IconsManager.symbolsContainer = document.getElementById(symbolsContainerId);
      if (!IconsManager.symbolsContainer) {
        IconsManager.symbolsContainer = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        IconsManager.symbolsContainer.setAttributeNS(null, 'style', 'display: none;');
        IconsManager.symbolsContainer.setAttributeNS(null, 'class', symbolsContainerId);
        document.body.appendChild(IconsManager.symbolsContainer);
      }
    }
  }
  createSvgElement(name, _ref) {
    let {
      path,
      width,
      height
    } = _ref;
    const elementName = this.prefix + name,
      elementSelector = '#' + this.prefix + name;

    // Create symbol if not exist yet.
    if (!IconsManager.iconsUsageList.includes(elementName)) {
      if (!IconsManager.symbolsContainer.querySelector(elementSelector)) {
        const symbol = document.createElementNS('http://www.w3.org/2000/svg', 'symbol');
        symbol.id = elementName;
        symbol.innerHTML = '<path d="' + path + '"></path>';
        symbol.setAttributeNS(null, 'viewBox', '0 0 ' + width + ' ' + height);
        IconsManager.symbolsContainer.appendChild(symbol);
      }
      IconsManager.iconsUsageList.push(elementName);
    }
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.innerHTML = '<use xlink:href="' + elementSelector + '" />';
    svg.setAttributeNS(null, 'class', 'e-font-icon-svg e-' + elementName);
    return svg;
  }
}
exports["default"] = IconsManager;
(0, _defineProperty2.default)(IconsManager, "symbolsContainer", void 0);
(0, _defineProperty2.default)(IconsManager, "iconsUsageList", []);

/***/ }),

/***/ "../assets/dev/js/frontend/utils/modal-keyboard-handler.js":
/*!*****************************************************************!*\
  !*** ../assets/dev/js/frontend/utils/modal-keyboard-handler.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));
var _focusableElementSelectors = __webpack_require__(/*! ./focusable-element-selectors */ "../assets/dev/js/frontend/utils/focusable-element-selectors.js");
class ModalKeyboardHandler {
  constructor(elementConfig) {
    (0, _defineProperty2.default)(this, "lastFocusableElement", null);
    (0, _defineProperty2.default)(this, "firstFocusableElement", null);
    (0, _defineProperty2.default)(this, "modalTriggerElement", null);
    this.config = elementConfig;
  }
  onOpenModal() {
    this.initializeElements();
    this.setTriggerElement();
    this.changeFocus();
    this.bindEvents();
  }
  onCloseModal() {
    elementorFrontend.elements.$window.off('keydown', this.onKeyDownPressed.bind(this));
    if (this.modalTriggerElement) {
      this.setFocusToElement(this.modalTriggerElement);
    }
  }
  bindEvents() {
    elementorFrontend.elements.$window.on('keydown', this.onKeyDownPressed.bind(this));
    if ('popup' === this.config.modalType) {
      this.onPopupCloseEvent();
    }
  }
  onPopupCloseEvent() {
    elementorFrontend.elements.$window.on('elementor/popup/hide', this.onCloseModal.bind(this));
  }
  getFocusableElements() {
    const selectorFocusedElements = 'popup' === this.config.modalType ? ':focusable' : (0, _focusableElementSelectors.focusableElementSelectors)();
    return this.config.$modalElements.find(selectorFocusedElements);
  }
  initializeElements() {
    const $focusableElements = this.getFocusableElements();
    if (!$focusableElements.length) {
      return;
    }
    this.lastFocusableElement = $focusableElements[$focusableElements.length - 1];
    this.firstFocusableElement = $focusableElements[0];
  }
  setTriggerElement() {
    const activeElement = elementorFrontend.elements.window.document.activeElement;
    if (!!activeElement) {
      this.modalTriggerElement = elementorFrontend.elements.window.document.activeElement;
    } else {
      this.modalTriggerElement = null;
    }
  }
  changeFocus() {
    if (!!this.firstFocusableElement) {
      this.setFocusToElement(this.firstFocusableElement);
    } else {
      this.config.$elementWrapper.attr('tabindex', '0');
      this.setFocusToElement(this.config.$elementWrapper[0]);
    }
  }
  onKeyDownPressed(keyDownEvent) {
    const TAB_KEY = 9;
    const isShiftPressed = keyDownEvent.shiftKey;
    const isTabPressed = 'Tab' === keyDownEvent.key || TAB_KEY === keyDownEvent.keyCode;
    const isContentWrapperFocused = '0' === this.config.$elementWrapper.attr('tabindex');
    if (isTabPressed && isContentWrapperFocused) {
      keyDownEvent.preventDefault();
    } else if (isTabPressed) {
      this.onTabKeyPressed(isTabPressed, isShiftPressed, keyDownEvent);
    }
  }
  onTabKeyPressed(isTabPressed, isShiftPressed, keyDownEvent) {
    if (elementorFrontend.isEditMode()) {
      this.initializeElements();
    }
    const activeElement = elementorFrontend.elements.window.document.activeElement;
    if (isShiftPressed) {
      const isFocusOnFirstElement = activeElement === this.firstFocusableElement;
      if (isFocusOnFirstElement) {
        this.setFocusToElement(this.lastFocusableElement);
        keyDownEvent.preventDefault();
      }
    } else {
      const isFocusOnLastElement = activeElement === this.lastFocusableElement;
      if (isFocusOnLastElement) {
        this.setFocusToElement(this.firstFocusableElement);
        keyDownEvent.preventDefault();
      }
    }
  }
  setFocusToElement(element) {
    const focusDelayToEnsureThatAllAnimationsHaveFinished = 100;
    setTimeout(() => {
      element?.focus();
    }, focusDelayToEnsureThatAllAnimationsHaveFinished);
  }
}
exports["default"] = ModalKeyboardHandler;

/***/ }),

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

/***/ "../modules/animated-headline/assets/js/frontend/frontend.js":
/*!*******************************************************************!*\
  !*** ../modules/animated-headline/assets/js/frontend/frontend.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class _default extends elementorModules.Module {
  constructor() {
    super();
    elementorFrontend.elementsHandler.attachHandler('animated-headline', () => __webpack_require__.e(/*! import() | animated-headline */ "animated-headline").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/animated-headlines */ "../modules/animated-headline/assets/js/frontend/handlers/animated-headlines.js")));
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/carousel/assets/js/frontend/frontend.js":
/*!**********************************************************!*\
  !*** ../modules/carousel/assets/js/frontend/frontend.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class _default extends elementorModules.Module {
  constructor() {
    super();
    elementorFrontend.elementsHandler.attachHandler('media-carousel', () => __webpack_require__.e(/*! import() | media-carousel */ "media-carousel").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/media-carousel */ "../modules/carousel/assets/js/frontend/handlers/media-carousel.js")));
    elementorFrontend.elementsHandler.attachHandler('testimonial-carousel', () => __webpack_require__.e(/*! import() | carousel */ "carousel").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/testimonial-carousel */ "../modules/carousel/assets/js/frontend/handlers/testimonial-carousel.js")));
    elementorFrontend.elementsHandler.attachHandler('reviews', () => __webpack_require__.e(/*! import() | carousel */ "carousel").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/testimonial-carousel */ "../modules/carousel/assets/js/frontend/handlers/testimonial-carousel.js")));
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/countdown/assets/js/frontend/frontend.js":
/*!***********************************************************!*\
  !*** ../modules/countdown/assets/js/frontend/frontend.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class _default extends elementorModules.Module {
  constructor() {
    super();
    elementorFrontend.elementsHandler.attachHandler('countdown', () => __webpack_require__.e(/*! import() | countdown */ "countdown").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/countdown */ "../modules/countdown/assets/js/frontend/handlers/countdown.js")));
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/forms/assets/js/frontend/frontend.js":
/*!*******************************************************!*\
  !*** ../modules/forms/assets/js/frontend/frontend.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class _default extends elementorModules.Module {
  constructor() {
    super();
    elementorFrontend.elementsHandler.attachHandler('form', [() => __webpack_require__.e(/*! import() | form */ "form").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/form-steps */ "../modules/forms/assets/js/frontend/handlers/form-steps.js")), () => __webpack_require__.e(/*! import() | form */ "form").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/form-sender */ "../modules/forms/assets/js/frontend/handlers/form-sender.js")), () => __webpack_require__.e(/*! import() | form */ "form").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/form-redirect */ "../modules/forms/assets/js/frontend/handlers/form-redirect.js")), () => __webpack_require__.e(/*! import() | form */ "form").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/fields/date */ "../modules/forms/assets/js/frontend/handlers/fields/date.js")), () => __webpack_require__.e(/*! import() | form */ "form").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/recaptcha */ "../modules/forms/assets/js/frontend/handlers/recaptcha.js")), () => __webpack_require__.e(/*! import() | form */ "form").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/fields/time */ "../modules/forms/assets/js/frontend/handlers/fields/time.js"))]);
    elementorFrontend.elementsHandler.attachHandler('subscribe', [() => __webpack_require__.e(/*! import() | form */ "form").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/form-steps */ "../modules/forms/assets/js/frontend/handlers/form-steps.js")), () => __webpack_require__.e(/*! import() | form */ "form").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/form-sender */ "../modules/forms/assets/js/frontend/handlers/form-sender.js")), () => __webpack_require__.e(/*! import() | form */ "form").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/form-redirect */ "../modules/forms/assets/js/frontend/handlers/form-redirect.js"))]);
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/gallery/assets/js/frontend/frontend.js":
/*!*********************************************************!*\
  !*** ../modules/gallery/assets/js/frontend/frontend.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class _default extends elementorModules.Module {
  constructor() {
    super();
    elementorFrontend.elementsHandler.attachHandler('gallery', () => __webpack_require__.e(/*! import() | gallery */ "gallery").then(__webpack_require__.bind(__webpack_require__, /*! ./handler */ "../modules/gallery/assets/js/frontend/handler.js")));
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/hotspot/assets/js/frontend/frontend.js":
/*!*********************************************************!*\
  !*** ../modules/hotspot/assets/js/frontend/frontend.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class _default extends elementorModules.Module {
  constructor() {
    super();
    elementorFrontend.elementsHandler.attachHandler('hotspot', () => __webpack_require__.e(/*! import() | hotspot */ "hotspot").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/hotspot */ "../modules/hotspot/assets/js/frontend/handlers/hotspot.js")));
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/loop-builder/assets/js/frontend/frontend.js":
/*!**************************************************************!*\
  !*** ../modules/loop-builder/assets/js/frontend/frontend.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class _default extends elementorModules.Module {
  constructor() {
    super();
    ['post', 'product', 'post_taxonomy', 'product_taxonomy'].forEach(skinName => {
      elementorFrontend.elementsHandler.attachHandler('loop-grid', () => __webpack_require__.e(/*! import() | load-more */ "load-more").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/load-more */ "../modules/loop-builder/assets/js/frontend/handlers/load-more.js")), skinName);
      elementorFrontend.elementsHandler.attachHandler('loop-grid', () => __webpack_require__.e(/*! import() | loop */ "loop").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/loop */ "../modules/loop-builder/assets/js/frontend/handlers/loop.js")), skinName);
      elementorFrontend.elementsHandler.attachHandler('loop-carousel', () => __webpack_require__.e(/*! import() | loop */ "loop").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/loop */ "../modules/loop-builder/assets/js/frontend/handlers/loop.js")), skinName);
      elementorFrontend.elementsHandler.attachHandler('loop-carousel', () => __webpack_require__.e(/*! import() | loop-carousel */ "loop-carousel").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/loop-carousel */ "../modules/loop-builder/assets/js/frontend/handlers/loop-carousel.js")), skinName);
      elementorFrontend.elementsHandler.attachHandler('loop-grid', () => __webpack_require__.e(/*! import() | ajax-pagination */ "ajax-pagination").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/ajax-pagination */ "../modules/loop-builder/assets/js/frontend/handlers/ajax-pagination.js")), skinName);
    });
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/loop-filter/assets/js/frontend/frontend-module-base.js":
/*!*************************************************************************!*\
  !*** ../modules/loop-filter/assets/js/frontend/frontend-module-base.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _runElementHandlers = _interopRequireDefault(__webpack_require__(/*! elementor-pro/frontend/utils/run-element-handlers */ "../assets/dev/js/frontend/utils/run-element-handlers.js"));
var _ajaxHelper = _interopRequireDefault(__webpack_require__(/*! elementor-pro/frontend/utils/ajax-helper */ "../assets/dev/js/frontend/utils/ajax-helper.js"));
var _loopWidgetsStore = _interopRequireDefault(__webpack_require__(/*! ./loop-widgets-store */ "../modules/loop-filter/assets/js/frontend/loop-widgets-store.js"));
var _queryConstants = __webpack_require__(/*! ../query-constants */ "../modules/loop-filter/assets/js/query-constants.js");
class BaseFilterFrontendModule extends elementorModules.Module {
  constructor() {
    super();
    this.loopWidgetsStore = new _loopWidgetsStore.default();
  }

  /**
   * Removes selected filter term from the filter array
   *
   * @param {string} widgetId
   * @param {string} filterId
   * @param {string} filterTerm
   * @param {string} defaultFilter
   */
  removeFilterFromLoopWidget(widgetId, filterId) {
    let filterTerm = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    let defaultFilter = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
    if (!this.loopWidgetsStore.getWidget(widgetId)) {
      this.loopWidgetsStore.addWidget(widgetId);
      this.refreshLoopWidget(widgetId, filterId);
      return;
    }
    if (filterTerm === defaultFilter) {
      this.loopWidgetsStore.unsetFilter(widgetId, filterId);
    }
    if (filterTerm !== defaultFilter) {
      const filters = this.loopWidgetsStore.getFilterTerms(widgetId, filterId),
        newTerms = filters.filter(function (e) {
          return e !== filterTerm;
        });
      this.loopWidgetsStore.setFilterTerms(widgetId, filterId, newTerms);
    }
    this.refreshLoopWidget(widgetId, filterId);
  }

  /**
   * Sets the filter data for a loop widget.
   *
   * This function should trigger the following sequence:
   * 1. Update the filter data for the passed ID in the loopElements object by adding new filters to the loopWidgetsStore filters array.
   * 2. Trigger a rerender of the loop widget if refresh is true.
   * 3  Trigger a consolidation of all filters belonging to the passed loop widget ID if refresh is false.
   *   - This should create an object with filter type keys, and for each type, an object of filter IDs, which contain the filter values.
   *   - This should also remove duplicates.
   *
   * @param {string}  widgetId
   * @param {string}  filterId
   * @param {Object}  filter                     new data for this filterId in loopWidgetsStore
   * @param {boolean} refresh
   * @param {string}  multipleFiltersLogicalJoin AND / OR / 'DISABLED' for single filter (default)
   */
  setFilterDataForLoopWidget(widgetId, filterId, filter) {
    let refresh = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    let multipleFiltersLogicalJoin = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'DISABLED';
    this.loopWidgetsStore.maybeInitializeWidget(widgetId);
    this.loopWidgetsStore.maybeInitializeFilter(widgetId, filterId);
    const logicalJoin = this.validateMultipleFilterOperator(multipleFiltersLogicalJoin);
    if ('DISABLED' !== logicalJoin) {
      const existingTerms = this.loopWidgetsStore.getFilterTerms(widgetId, filterId) ?? [],
        newTerms = filter.filterData.terms;
      filter.filterData.terms = [...new Set([...existingTerms, ...newTerms])];
      filter.filterData.logicalJoin = logicalJoin;
    }
    this.loopWidgetsStore.setFilter(widgetId, filterId, filter);
    if (refresh) {
      this.refreshLoopWidget(widgetId, filterId);
      return;
    }
    this.loopWidgetsStore.consolidateFilters(widgetId);
  }

  /**
   * Validates the operator values for wp_query.
   * @param {string} operator
   * @return {*|string} 'AND' | 'OR' | 'DISABLED'
   */
  validateMultipleFilterOperator(operator) {
    if (!operator || !['AND', 'OR'].includes(operator)) {
      return 'DISABLED';
    }
    return operator;
  }

  /**
   *
   * @return {{}} Query string in object form.
   */
  getQueryStringInObjectForm() {
    const queryString = {};
    for (const widgetId in this.loopWidgetsStore.get()) {
      const loopWidget = this.loopWidgetsStore.getWidget(widgetId);
      for (const filterType in loopWidget.consolidatedFilters) {
        const filterData = loopWidget.consolidatedFilters[filterType];
        for (const filterName in filterData) {
          const separator = _queryConstants.queryConstants[filterData[filterName].logicalJoin ?? 'AND'].separator.decoded;

          // Add an `e-` prefix to the key to avoid clashes with other query strings.
          // Filter values are arrays, to support multiple select.
          queryString[`e-filter-${widgetId}-${filterName}`] = Object.values(filterData[filterName].terms).join(separator);
        }
      }
    }
    return queryString;
  }

  /**
   * Updates the URL query string with the current filter values.
   *
   * @param {string} widgetId
   * @param {string} filterId
   */
  updateURLQueryString(widgetId, filterId) {
    const currentUrl = new URL(window.location.href),
      existingQueryString = currentUrl.searchParams,
      queryStringObject = this.getQueryStringInObjectForm(),
      updatedParams = new URLSearchParams();
    existingQueryString.forEach((value, key) => {
      if (!key.startsWith('e-filter')) {
        updatedParams.append(key, value);
      }
      if (key.startsWith('e-page-' + widgetId)) {
        updatedParams.delete(key);
      }
    });
    for (const key in queryStringObject) {
      updatedParams.set(key, queryStringObject[key]);
    }
    let queryString = updatedParams.toString();
    queryString = queryString.replace(new RegExp(`${_queryConstants.queryConstants.AND.separator.encoded}`, 'g'), _queryConstants.queryConstants.AND.separator.decoded);
    queryString = queryString.replace(new RegExp(`${_queryConstants.queryConstants.OR.separator.encoded}`, 'g'), _queryConstants.queryConstants.OR.separator.decoded);
    const helpers = this.getFilterHelperAttributes(filterId);
    if (helpers.pageNum > 1) {
      queryString = queryString ? this.formatQueryString(helpers.baseUrl, queryString) : helpers.baseUrl;
    } else {
      queryString = queryString ? `?${queryString}` : location.pathname;
    }
    history.pushState(null, null, queryString);
  }

  /**
   * Formats the query string to remove any duplicate parameters.
   *
   * @param {string} baseURL
   * @param {string} queryString
   * @return {*} deduplicated query string
   */
  formatQueryString(baseURL, queryString) {
    const baseURLParams = baseURL.includes('?') ? new URLSearchParams(baseURL.split('?')[1]) : new URLSearchParams(),
      inputParams = new URLSearchParams(queryString);
    for (const param of baseURLParams.keys()) {
      if (inputParams.has(param)) {
        inputParams.delete(param);
      }
    }
    const excludedVariables = ['page', 'paged'];
    for (const excludedVar of excludedVariables) {
      baseURLParams.delete(excludedVar);
      inputParams.delete(excludedVar);
    }
    const mergedParams = new URLSearchParams(baseURLParams.toString());
    for (const [param, value] of inputParams.entries()) {
      mergedParams.append(param, value);
    }
    const baseURLString = baseURL.split('?')[0],
      mergedParamsString = mergedParams.toString() ? `?${mergedParams.toString()}` : '';
    return baseURLString + mergedParamsString;
  }

  /**
   *
   * @param {string} filterId
   * @return {{baseUrl: string, pageNum: number}|*|DOMStringMap} Base URL and page number for the loop widget.
   */
  getFilterHelperAttributes(filterId) {
    const filterWidget = document.querySelector('[data-id="' + filterId + '"]');
    if (!filterWidget) {
      return {
        baseUrl: location.href,
        pageNum: 1
      };
    }
    const filterBar = filterWidget.querySelector('.e-filter');
    return filterBar.dataset;
  }

  /**
   * Prepares the data to be sent to the server for the loop widget update.
   *
   * @param {string} widgetId
   * @param {string} filterId
   * @return {{post_id: (*|number), widget_id, pagination_base_url: string, widget_filters: *}} data for loop update
   */
  prepareLoopUpdateRequestData(widgetId, filterId) {
    const widgetFilters = this.loopWidgetsStore.getConsolidatedFilters(widgetId),
      helpers = this.getFilterHelperAttributes(filterId);
    const data = {
      post_id: elementorFrontend.config.post.id || this.getClosestDataElementorId(document.querySelector(`.elementor-element-${widgetId}`)),
      widget_filters: widgetFilters,
      widget_id: widgetId,
      pagination_base_url: helpers.baseUrl
    };
    if (elementorFrontend.isEditMode()) {
      // In the editor, we have to support loop widgets that have been created but not saved to the database yet.
      const widgetContainer = window.top.$e.components.get('document').utils.findContainerById(widgetId);
      data.widget_model = widgetContainer.model.toJSON({
        remove: ['default', 'editSettings', 'defaultEditSettings']
      });
      data.is_edit_mode = true;
    }
    return data;
  }

  /**
   * Returns the closest data-elementor-id attribute value.
   *
   * @param {Object} element
   * @return {string} elementor id of parent
   */
  getClosestDataElementorId(element) {
    const closestParent = element.closest('[data-elementor-id]');
    return closestParent ? closestParent.getAttribute('data-elementor-id') : 0;
  }

  /**
   *
   * @param {string} widgetId
   * @param {string} filterId
   * @return {{headers: {"Content-Type": string}, method: string, body: string}} Fetch arguments for loop Widget update
   */
  getFetchArgumentsForLoopUpdate(widgetId, filterId) {
    const data = this.prepareLoopUpdateRequestData(widgetId, filterId);
    const args = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    if (elementorFrontend.isEditMode() && !!elementorPro.config.loopFilter?.nonce) {
      args.headers['X-WP-Nonce'] = elementorPro.config.loopFilter?.nonce;
    }
    return args;
  }

  /**
   * Fetches the updated loop widget markup from the server.
   *
   * @param {string} widgetId
   * @param {string} filterId
   * @return {Promise<Response>} Promise for the fetch request.
   */
  fetchUpdatedLoopWidgetMarkup(widgetId, filterId) {
    return fetch(`${elementorProFrontend.config.urls.rest}elementor-pro/v1/refresh-loop`, this.getFetchArgumentsForLoopUpdate(widgetId, filterId));
  }
  createElementFromHTMLString(widgetContainerHTMLString) {
    const div = document.createElement('div');
    if (!widgetContainerHTMLString) {
      div.classList.add('elementor-widget-container');
      return div;
    }
    div.innerHTML = widgetContainerHTMLString.trim();
    return div.firstElementChild;
  }
  refreshLoopWidget(widgetId, filterId) {
    this.loopWidgetsStore.consolidateFilters(widgetId);
    this.updateURLQueryString(widgetId, filterId);
    const widget = document.querySelector(`.elementor-element-${widgetId}`);
    if (!widget) {
      return;
    }
    if (!this.ajaxHelper) {
      this.ajaxHelper = new _ajaxHelper.default();
    }
    this.ajaxHelper.addLoadingAnimationOverlay(widgetId);
    const fetchUpdatedLoopWidgetMarkup = this.fetchUpdatedLoopWidgetMarkup(widgetId, filterId).then(response => {
      if (!(response instanceof Response) || !response?.ok || 400 <= response?.status) {
        return {};
      }
      return response.json();
    }).catch(() => {
      return {};
    }).then(response => {
      if (!response?.data && '' !== response?.data) {
        return;
      }
      const existingWidgetContainer = widget.querySelector('.elementor-widget-container'),
        newWidgetContainer = this.createElementFromHTMLString(response.data);
      widget.replaceChild(newWidgetContainer, existingWidgetContainer);
      this.handleElementHandlers(newWidgetContainer);
      if (elementorFrontend.config.experimentalFeatures.e_lazyload) {
        document.dispatchEvent(new Event('elementor/lazyload/observe'));
      }
      elementorFrontend.elementsHandler.runReadyTrigger(document.querySelector(`.elementor-element-${widgetId}`));
      widget.classList.remove('e-loading');
    }).finally(() => {
      this.ajaxHelper.removeLoadingAnimationOverlay(widgetId);
    });
    return fetchUpdatedLoopWidgetMarkup;

    // TODO: Deal with pagination. Do we need to manually add the query string to the pagination links?
  }

  handleElementHandlers(newWidgetMarkup) {
    const loopItems = newWidgetMarkup.querySelectorAll('.e-loop-item');
    (0, _runElementHandlers.default)(loopItems);
  }
}
exports["default"] = BaseFilterFrontendModule;

/***/ }),

/***/ "../modules/loop-filter/assets/js/frontend/frontend.js":
/*!*************************************************************!*\
  !*** ../modules/loop-filter/assets/js/frontend/frontend.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _frontendModuleBase = _interopRequireDefault(__webpack_require__(/*! ./frontend-module-base */ "../modules/loop-filter/assets/js/frontend/frontend-module-base.js"));
class LoopFilter extends _frontendModuleBase.default {
  constructor() {
    super();
    elementorFrontend.elementsHandler.attachHandler('taxonomy-filter', () => __webpack_require__.e(/*! import() | taxonomy-filter */ "taxonomy-filter").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/taxonomy-filter */ "../modules/loop-filter/assets/js/frontend/handlers/taxonomy-filter.js")));
  }
}
exports["default"] = LoopFilter;

/***/ }),

/***/ "../modules/loop-filter/assets/js/frontend/loop-widgets-store.js":
/*!***********************************************************************!*\
  !*** ../modules/loop-filter/assets/js/frontend/loop-widgets-store.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class LoopWidgetsStore {
  constructor() {
    this.widgets = {};
  }
  get() {
    return this.widgets;
  }
  getWidget(widgetId) {
    return this.widgets[widgetId];
  }
  setWidget(widgetId, widget) {
    this.widgets[widgetId] = widget;
  }
  unsetWidget(widgetId) {
    delete this.widgets[widgetId];
  }
  getFilters(widgetId) {
    return this.getWidget(widgetId).filters;
  }
  getFilter(widgetId, filterId) {
    return this.getWidget(widgetId).filters[filterId];
  }
  setFilter(widgetId, filterId, filterData) {
    this.getWidget(widgetId).filters[filterId] = filterData;
  }
  unsetFilter(widgetId, filterId) {
    delete this.getWidget(widgetId).filters[filterId];
  }
  getFilterTerms(widgetId, filterId) {
    return this.getFilter(widgetId, filterId).filterData.terms ?? [];
  }
  setFilterTerms(widgetId, filterId, termData) {
    this.getFilter(widgetId, filterId).filterData.terms = termData;
  }
  getConsolidatedFilters(widgetId) {
    return this.getWidget(widgetId).consolidatedFilters;
  }
  setConsolidatedFilters(widgetId, consolidatedFilters) {
    this.getWidget(widgetId).consolidatedFilters = consolidatedFilters;
  }

  /**
   *
   * @param {string} widgetId
   */
  addWidget(widgetId) {
    const newWidget = {
      filters: {},
      consolidatedFilters: {}
    };
    this.setWidget(widgetId, newWidget);
  }
  maybeInitializeWidget(widgetId) {
    if (!!this.getWidget(widgetId)) {
      return;
    }
    this.addWidget(widgetId);
  }
  maybeInitializeFilter(widgetId, filterId) {
    if (!!this.getFilter(widgetId, filterId)) {
      return;
    }
    const newFilter = {
      filterData: {
        terms: []
      }
    };
    this.setFilter(widgetId, filterId, newFilter);
  }

  /**
   * Consolidates all filters for a loop widget.
   *
   * filters: {
   * 	filter1: { filterType: 'type1', filterData: { selectedTaxonomy: 'taxonomy1', terms: [ 'term1', 'term2' ] } },
   * 	filter2: { filterType: 'type1', filterData: { selectedTaxonomy: 'taxonomy1', terms: [ 'term2' ] } },
   * },
   * consolidatedFilters: {},
   *
   * @param {string} widgetId
   */
  consolidateFilters(widgetId) {
    const loopWidgetFilters = this.getFilters(widgetId),
      consolidatedFilters = {};
    for (const filterId in loopWidgetFilters) {
      const filter = loopWidgetFilters[filterId],
        filterType = filter.filterType,
        filterData = filter.filterData;
      if (0 === filterData.terms.length) {
        continue;
      }

      // This part is non-generic. To expand this functionality to other filter types, we'll need to refactor and
      // generalize this part.
      if (!consolidatedFilters[filterType]) {
        consolidatedFilters[filterType] = {};
      }
      if (!consolidatedFilters[filterType][filterData.selectedTaxonomy]) {
        consolidatedFilters[filterType][filterData.selectedTaxonomy] = [];
      }
      if (filterData.terms && (!consolidatedFilters[filterType][filterData.selectedTaxonomy].terms || !consolidatedFilters[filterType][filterData.selectedTaxonomy].terms.includes(filterData.terms))) {
        consolidatedFilters[filterType][filterData.selectedTaxonomy] = {
          terms: filterData.terms === typeof 'string' ? [filterData.terms] : filterData.terms
        };
      }
      if (filterData.logicalJoin && !consolidatedFilters[filterType][filterData.selectedTaxonomy].logicalJoin) {
        consolidatedFilters[filterType][filterData.selectedTaxonomy] = {
          ...(consolidatedFilters[filterType][filterData.selectedTaxonomy] || {}),
          // Check for undefined
          logicalJoin: filterData.logicalJoin ?? 'AND'
        };
      }
    }
    this.setConsolidatedFilters(widgetId, consolidatedFilters);
  }
}
exports["default"] = LoopWidgetsStore;

/***/ }),

/***/ "../modules/loop-filter/assets/js/query-constants.js":
/*!***********************************************************!*\
  !*** ../modules/loop-filter/assets/js/query-constants.js ***!
  \***********************************************************/
/***/ ((module) => {



const queryConstants = {
  AND: {
    separator: {
      decoded: '+',
      fromBrowser: ' ',
      encoded: '%2B'
    },
    operator: 'AND'
  },
  OR: {
    separator: {
      decoded: '~',
      fromBrowser: '~',
      encoded: '%7C'
    },
    operator: 'IN'
  },
  NOT: {
    separator: {
      decoded: '!',
      fromBrowser: '!',
      encoded: '%21'
    },
    operator: 'NOT IN'
  },
  DISABLED: {
    separator: {
      decoded: '',
      fromBrowser: '',
      encoded: ''
    },
    operator: 'AND'
  }
};
module.exports = {
  queryConstants
};

/***/ }),

/***/ "../modules/lottie/assets/js/frontend/frontend.js":
/*!********************************************************!*\
  !*** ../modules/lottie/assets/js/frontend/frontend.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class _default extends elementorModules.Module {
  constructor() {
    super();
    elementorFrontend.elementsHandler.attachHandler('lottie', () => __webpack_require__.e(/*! import() | lottie */ "lottie").then(__webpack_require__.bind(__webpack_require__, /*! ./handler */ "../modules/lottie/assets/js/frontend/handler.js")));
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/mega-menu/assets/js/frontend/frontend.js":
/*!***********************************************************!*\
  !*** ../modules/mega-menu/assets/js/frontend/frontend.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class _default extends elementorModules.Module {
  constructor() {
    super();
    elementorFrontend.elementsHandler.attachHandler('mega-menu', [() => __webpack_require__.e(/*! import() | mega-menu */ "mega-menu").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/mega-menu */ "../modules/mega-menu/assets/js/frontend/handlers/mega-menu.js")), () => __webpack_require__.e(/*! import() | mega-menu-stretch-content */ "mega-menu-stretch-content").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/stretch-menu-item-content */ "../modules/mega-menu/assets/js/frontend/handlers/stretch-menu-item-content.js")), () => __webpack_require__.e(/*! import() | menu-title-keyboard-handler */ "menu-title-keyboard-handler").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/menu-title-keyboard-handler */ "../modules/mega-menu/assets/js/frontend/handlers/menu-title-keyboard-handler.js"))]);
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/nav-menu/assets/js/frontend/frontend.js":
/*!**********************************************************!*\
  !*** ../modules/nav-menu/assets/js/frontend/frontend.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class _default extends elementorModules.Module {
  constructor() {
    super();
    if (jQuery.fn.smartmenus) {
      // Override the default stupid detection
      jQuery.SmartMenus.prototype.isCSSOn = function () {
        return true;
      };
      if (elementorFrontend.config.is_rtl) {
        jQuery.fn.smartmenus.defaults.rightToLeftSubMenus = true;
      }
    }
    elementorFrontend.elementsHandler.attachHandler('nav-menu', () => __webpack_require__.e(/*! import() | nav-menu */ "nav-menu").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/nav-menu */ "../modules/nav-menu/assets/js/frontend/handlers/nav-menu.js")));
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/nested-carousel/assets/js/frontend/frontend.js":
/*!*****************************************************************!*\
  !*** ../modules/nested-carousel/assets/js/frontend/frontend.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class _default extends elementorModules.Module {
  constructor() {
    super();
    elementorFrontend.elementsHandler.attachHandler('nested-carousel', () => __webpack_require__.e(/*! import() | nested-carousel */ "nested-carousel").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/nested-carousel */ "../modules/nested-carousel/assets/js/frontend/handlers/nested-carousel.js")));
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/off-canvas/assets/js/frontend/frontend.js":
/*!************************************************************!*\
  !*** ../modules/off-canvas/assets/js/frontend/frontend.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class _default extends elementorModules.Module {
  constructor() {
    super();
    elementorFrontend.elementsHandler.attachHandler('off-canvas', () => __webpack_require__.e(/*! import() | off-canvas */ "off-canvas").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/off-canvas */ "../modules/off-canvas/assets/js/frontend/handlers/off-canvas.js")));
    elementorFrontend.on('components:init', () => this.onFrontendComponentsInit());
  }
  onFrontendComponentsInit() {
    this.addUrlActions();
  }
  addUrlActions() {
    elementorFrontend.utils.urlActions.addAction('off_canvas:open', settings => {
      this.toggleOffCanvasDisplay(settings);
    });
    elementorFrontend.utils.urlActions.addAction('off_canvas:close', settings => {
      this.toggleOffCanvasDisplay(settings);
    });
    elementorFrontend.utils.urlActions.addAction('off_canvas:toggle', settings => {
      this.toggleOffCanvasDisplay(settings);
    });
  }
  toggleOffCanvasDisplay(settings) {
    window.dispatchEvent(new CustomEvent('elementor-pro/off-canvas/toggle-display-mode', {
      detail: settings
    }));
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/document.js":
/*!*******************************************************!*\
  !*** ../modules/popup/assets/js/frontend/document.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));
var _triggers = _interopRequireDefault(__webpack_require__(/*! ./triggers */ "../modules/popup/assets/js/frontend/triggers.js"));
var _timing = _interopRequireDefault(__webpack_require__(/*! ./timing */ "../modules/popup/assets/js/frontend/timing.js"));
var _eIcons = __webpack_require__(/*! @elementor-pro/e-icons */ "../assets/dev/js/frontend/utils/icons/e-icons.js");
var _modalKeyboardHandler = _interopRequireDefault(__webpack_require__(/*! elementor-pro/frontend/utils/modal-keyboard-handler */ "../assets/dev/js/frontend/utils/modal-keyboard-handler.js"));
// Temporary solution, when core 3.5.0 will be the minimum version, is should be replaced with @elementor/e-icons.

class _default extends elementorModules.frontend.Document {
  constructor() {
    super(...arguments);
    (0, _defineProperty2.default)(this, "keyboardHandler", null);
  }
  bindEvents() {
    const openSelector = this.getDocumentSettings('open_selector');
    if (openSelector) {
      elementorFrontend.elements.$body.on('click', openSelector, this.showModal.bind(this));
    }
  }
  startTiming() {
    const timing = new _timing.default(this.getDocumentSettings('timing'), this);
    if (timing.check()) {
      this.initTriggers();
    }
  }
  initTriggers() {
    this.triggers = new _triggers.default(this.getDocumentSettings('triggers'), this);
  }
  showModal(event) {
    let avoidMultiple = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    // eslint-disable-next-line @wordpress/no-unused-vars-before-return
    const settings = this.getDocumentSettings();
    if (!this.isEdit) {
      if (!elementorFrontend.isWPPreviewMode()) {
        if (this.getStorage('disable')) {
          return;
        }
        if (avoidMultiple && elementorProFrontend.modules.popup.popupPopped && settings.avoid_multiple_popups) {
          return;
        }
      }

      // A clean copy of the element without previous initializations and events
      this.$element = jQuery(this.elementHTML);
      this.elements.$elements = this.$element.find(this.getSettings('selectors.elements'));
    }
    const modal = this.getModal(),
      $closeButton = modal.getElements('closeButton');
    modal.setMessage(this.$element).show();
    if (!this.isEdit) {
      if (settings.close_button_delay) {
        $closeButton.hide();
        clearTimeout(this.closeButtonTimeout);
        this.closeButtonTimeout = setTimeout(() => $closeButton.show(), settings.close_button_delay * 1000);
      }
      super.runElementsHandlers();
    }
    this.setEntranceAnimation();
    if (!settings.timing || !settings.timing.times_count) {
      this.countTimes();
    }
    elementorProFrontend.modules.popup.popupPopped = true;
    if (!this.isEdit && settings.a11y_navigation) {
      this.handleKeyboardA11y();
    }
  }
  setEntranceAnimation() {
    const $widgetContent = this.getModal().getElements('widgetContent'),
      settings = this.getDocumentSettings(),
      newAnimation = elementorFrontend.getCurrentDeviceSetting(settings, 'entrance_animation');
    if (this.currentAnimation) {
      $widgetContent.removeClass(this.currentAnimation);
    }
    this.currentAnimation = newAnimation;
    if (!newAnimation) {
      return;
    }
    const animationDuration = settings.entrance_animation_duration.size;
    $widgetContent.addClass(newAnimation);
    setTimeout(() => $widgetContent.removeClass(newAnimation), animationDuration * 1000);
  }
  handleKeyboardA11y() {
    if (!this.keyboardHandler) {
      this.keyboardHandler = new _modalKeyboardHandler.default(this.getKeyboardHandlingConfig());
    }
    this.keyboardHandler.onOpenModal();
  }
  setExitAnimation() {
    const modal = this.getModal(),
      settings = this.getDocumentSettings(),
      $widgetContent = modal.getElements('widgetContent'),
      newAnimation = elementorFrontend.getCurrentDeviceSetting(settings, 'exit_animation'),
      animationDuration = newAnimation ? settings.entrance_animation_duration.size : 0;
    setTimeout(() => {
      if (newAnimation) {
        $widgetContent.removeClass(newAnimation + ' reverse');
      }
      if (!this.isEdit) {
        this.$element.remove();
        modal.getElements('widget').hide();
      }
    }, animationDuration * 1000);
    if (newAnimation) {
      $widgetContent.addClass(newAnimation + ' reverse');
    }
  }
  initModal() {
    let modal;
    this.getModal = () => {
      if (!modal) {
        const settings = this.getDocumentSettings(),
          id = this.getSettings('id'),
          triggerPopupEvent = eventType => {
            const event = 'elementor/popup/' + eventType;
            elementorFrontend.elements.$document.trigger(event, [id, this]);

            // TODO: Use `elementorFrontend.utils.events.dispatch` when it's in master.
            window.dispatchEvent(new CustomEvent(event, {
              detail: {
                id,
                instance: this
              }
            }));
          };
        let classes = 'elementor-popup-modal';
        if (settings.classes) {
          classes += ' ' + settings.classes;
        }
        const modalProperties = {
          id: 'elementor-popup-modal-' + id,
          className: classes,
          closeButton: true,
          preventScroll: settings.prevent_scroll,
          onShow: () => triggerPopupEvent('show'),
          onHide: () => triggerPopupEvent('hide'),
          effects: {
            hide: () => {
              if (settings.timing && settings.timing.times_count) {
                this.countTimes();
              }
              this.setExitAnimation();
            },
            show: 'show'
          },
          hide: {
            auto: !!settings.close_automatically,
            autoDelay: settings.close_automatically * 1000,
            onBackgroundClick: !settings.prevent_close_on_background_click,
            onOutsideClick: !settings.prevent_close_on_background_click,
            onEscKeyPress: !settings.prevent_close_on_esc_key,
            ignore: '.flatpickr-calendar'
          },
          position: {
            enable: false
          }
        };
        if (elementorFrontend.config.experimentalFeatures.e_font_icon_svg) {
          modalProperties.closeButtonOptions = {
            iconElement: _eIcons.close.element
          };
        }

        // This line should be moved to the condition above, as an 'else' case, once the core minimum version is 3.5.0.
        modalProperties.closeButtonClass = 'eicon-close';
        modal = elementorFrontend.getDialogsManager().createWidget('lightbox', modalProperties);
        modal.getElements('widgetContent').addClass('animated');
        const $closeButton = modal.getElements('closeButton');
        if (this.isEdit) {
          $closeButton.off('click');
          modal.hide = () => {};
        }
        this.setCloseButtonPosition();
      }
      return modal;
    };
  }
  setCloseButtonPosition() {
    const modal = this.getModal(),
      closeButtonPosition = this.getDocumentSettings('close_button_position'),
      $closeButton = modal.getElements('closeButton');
    $closeButton.prependTo(modal.getElements('outside' === closeButtonPosition ? 'widget' : 'widgetContent'));
  }
  disable() {
    this.setStorage('disable', true);
  }
  setStorage(key, value, options) {
    elementorFrontend.storage.set(`popup_${this.getSettings('id')}_${key}`, value, options);
  }
  getStorage(key, options) {
    return elementorFrontend.storage.get(`popup_${this.getSettings('id')}_${key}`, options);
  }
  countTimes() {
    const displayTimes = this.getStorage('times') || 0;
    this.setStorage('times', displayTimes + 1);
  }
  runElementsHandlers() {}
  async onInit() {
    super.onInit();

    // In case that the library was not loaded, it indicates a Core version that enables dynamic loading.
    if (!window.DialogsManager) {
      await elementorFrontend.utils.assetsLoader.load('script', 'dialog');
    }
    this.initModal();
    if (this.isEdit) {
      this.showModal();
      return;
    }
    this.$element.show().remove();
    this.elementHTML = this.$element[0].outerHTML;
    if (elementorFrontend.isEditMode()) {
      return;
    }
    if (elementorFrontend.isWPPreviewMode() && elementorFrontend.config.post.id === this.getSettings('id')) {
      this.showModal();
      return;
    }
    this.startTiming();
  }
  onSettingsChange(model) {
    const changedKey = Object.keys(model.changed)[0];
    if (-1 !== changedKey.indexOf('entrance_animation')) {
      this.setEntranceAnimation();
    }
    if ('exit_animation' === changedKey) {
      this.setExitAnimation();
    }
    if ('close_button_position' === changedKey) {
      this.setCloseButtonPosition();
    }
  }
  getKeyboardHandlingConfig() {
    return {
      $modalElements: this.getModal().getElements('widgetContent'),
      $elementWrapper: this.$element,
      modalType: 'popup',
      modalId: this.$element.data('elementor-id')
    };
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/frontend.js":
/*!*******************************************************!*\
  !*** ../modules/popup/assets/js/frontend/frontend.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _document = _interopRequireDefault(__webpack_require__(/*! ./document */ "../modules/popup/assets/js/frontend/document.js"));
class _default extends elementorModules.Module {
  constructor() {
    super();
    elementorFrontend.hooks.addAction('elementor/frontend/documents-manager/init-classes', this.addDocumentClass);
    elementorFrontend.elementsHandler.attachHandler('form', () => __webpack_require__.e(/*! import() | popup */ "popup").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/forms-action */ "../modules/popup/assets/js/frontend/handlers/forms-action.js")));
    elementorFrontend.on('components:init', () => this.onFrontendComponentsInit());
    if (!elementorFrontend.isEditMode() && !elementorFrontend.isWPPreviewMode()) {
      this.setViewsAndSessions();
    }
  }
  addDocumentClass(documentsManager) {
    documentsManager.addDocumentClass('popup', _document.default);
  }
  setViewsAndSessions() {
    const pageViews = elementorFrontend.storage.get('pageViews') || 0;
    elementorFrontend.storage.set('pageViews', pageViews + 1);
    const activeSession = elementorFrontend.storage.get('activeSession', {
      session: true
    });
    if (!activeSession) {
      elementorFrontend.storage.set('activeSession', true, {
        session: true
      });
      const sessions = elementorFrontend.storage.get('sessions') || 0;
      elementorFrontend.storage.set('sessions', sessions + 1);
    }
  }
  showPopup(settings, event) {
    const popup = elementorFrontend.documentsManager.documents[settings.id];
    if (!popup) {
      return;
    }
    const modal = popup.getModal();
    if (settings.toggle && modal.isVisible()) {
      modal.hide();
    } else {
      popup.showModal(event);
    }
  }
  closePopup(settings, event) {
    const popupID = jQuery(event.target).parents('[data-elementor-type="popup"]').data('elementorId');
    if (!popupID) {
      return;
    }
    const document = elementorFrontend.documentsManager.documents[popupID];
    document.getModal().hide();
    if (settings.do_not_show_again) {
      document.disable();
    }
  }
  onFrontendComponentsInit() {
    elementorFrontend.utils.urlActions.addAction('popup:open', (settings, event) => this.showPopup(settings, event));
    elementorFrontend.utils.urlActions.addAction('popup:close', (settings, event) => this.closePopup(settings, event));
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/timing.js":
/*!*****************************************************!*\
  !*** ../modules/popup/assets/js/frontend/timing.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _pageViews = _interopRequireDefault(__webpack_require__(/*! ./timing/page-views */ "../modules/popup/assets/js/frontend/timing/page-views.js"));
var _sessions = _interopRequireDefault(__webpack_require__(/*! ./timing/sessions */ "../modules/popup/assets/js/frontend/timing/sessions.js"));
var _url = _interopRequireDefault(__webpack_require__(/*! ./timing/url */ "../modules/popup/assets/js/frontend/timing/url.js"));
var _sources = _interopRequireDefault(__webpack_require__(/*! ./timing/sources */ "../modules/popup/assets/js/frontend/timing/sources.js"));
var _loggedIn = _interopRequireDefault(__webpack_require__(/*! ./timing/logged-in */ "../modules/popup/assets/js/frontend/timing/logged-in.js"));
var _devices = _interopRequireDefault(__webpack_require__(/*! ./timing/devices */ "../modules/popup/assets/js/frontend/timing/devices.js"));
var _times = _interopRequireDefault(__webpack_require__(/*! ./timing/times */ "../modules/popup/assets/js/frontend/timing/times.js"));
var _browsers = _interopRequireDefault(__webpack_require__(/*! ./timing/browsers */ "../modules/popup/assets/js/frontend/timing/browsers.js"));
var _schedule = _interopRequireDefault(__webpack_require__(/*! ./timing/schedule */ "../modules/popup/assets/js/frontend/timing/schedule.js"));
class _default extends elementorModules.Module {
  constructor(settings, document) {
    super(settings);
    this.document = document;
    this.timingClasses = {
      page_views: _pageViews.default,
      sessions: _sessions.default,
      url: _url.default,
      sources: _sources.default,
      logged_in: _loggedIn.default,
      devices: _devices.default,
      times: _times.default,
      browsers: _browsers.default,
      schedule: _schedule.default
    };
  }
  check() {
    const settings = this.getSettings();
    let checkPassed = true;
    jQuery.each(this.timingClasses, (key, TimingClass) => {
      if (!settings[key]) {
        return;
      }
      const timing = new TimingClass(settings, this.document);
      if (!timing.check()) {
        checkPassed = false;
      }
    });
    return checkPassed;
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/timing/base.js":
/*!**********************************************************!*\
  !*** ../modules/popup/assets/js/frontend/timing/base.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class _default extends elementorModules.Module {
  constructor(settings, document) {
    super(settings);
    this.document = document;
  }
  getTimingSetting(settingKey) {
    return this.getSettings(this.getName() + '_' + settingKey);
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/timing/browsers.js":
/*!**************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/timing/browsers.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/timing/base.js"));
class _default extends _base.default {
  getName() {
    return 'browsers';
  }
  check() {
    if ('all' === this.getTimingSetting('browsers')) {
      return true;
    }
    const targetedBrowsers = this.getTimingSetting('browsers_options'),
      browserDetectionFlags = elementorFrontend.utils.environment;
    return targetedBrowsers.some(browserName => browserDetectionFlags[browserName]);
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/timing/devices.js":
/*!*************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/timing/devices.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/timing/base.js"));
class _default extends _base.default {
  getName() {
    return 'devices';
  }
  check() {
    return -1 !== this.getTimingSetting('devices').indexOf(elementorFrontend.getCurrentDeviceMode());
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/timing/logged-in.js":
/*!***************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/timing/logged-in.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/timing/base.js"));
class _default extends _base.default {
  getName() {
    return 'logged_in';
  }
  check() {
    const userConfig = elementorFrontend.config.user;
    if (!userConfig) {
      return true;
    }
    if ('all' === this.getTimingSetting('users')) {
      return false;
    }
    const userRolesInHideList = this.getTimingSetting('roles').filter(role => -1 !== userConfig.roles.indexOf(role));
    return !userRolesInHideList.length;
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/timing/page-views.js":
/*!****************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/timing/page-views.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/timing/base.js"));
class _default extends _base.default {
  getName() {
    return 'page_views';
  }
  check() {
    const pageViews = elementorFrontend.storage.get('pageViews'),
      name = this.getName();
    let initialPageViews = this.document.getStorage(name + '_initialPageViews');
    if (!initialPageViews) {
      this.document.setStorage(name + '_initialPageViews', pageViews);
      initialPageViews = pageViews;
    }
    return pageViews - initialPageViews >= this.getTimingSetting('views');
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/timing/schedule-utils.js":
/*!********************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/timing/schedule-utils.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));
class ScheduleUtils {
  constructor(args) {
    (0, _defineProperty2.default)(this, "shouldDisplay", () => {
      if (!this.settings.startDate && !this.settings.endDate) {
        return true;
      }
      const now = this.getCurrentDateTime();
      if ((!this.settings.startDate || now >= this.settings.startDate) && (!this.settings.endDate || now <= this.settings.endDate)) {
        return true;
      }
      return false;
    });
    this.settings = args.settings;
  }
  getCurrentDateTime() {
    let now = new Date();
    if ('site' === this.settings.timezone && this.settings.serverDatetime) {
      now = new Date(this.settings.serverDatetime);
    }
    return now;
  }
}
exports["default"] = ScheduleUtils;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/timing/schedule.js":
/*!**************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/timing/schedule.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/timing/base.js"));
var _scheduleUtils = _interopRequireDefault(__webpack_require__(/*! ./schedule-utils */ "../modules/popup/assets/js/frontend/timing/schedule-utils.js"));
class _default extends _base.default {
  constructor() {
    super(...arguments);
    const {
      schedule_timezone: timezone,
      schedule_start_date: startDate,
      schedule_end_date: endDate,
      schedule_server_datetime: serverDatetime
    } = this.getSettings();
    this.settings = {
      timezone,
      startDate: startDate ? new Date(startDate) : false,
      endDate: endDate ? new Date(endDate) : false,
      serverDatetime: serverDatetime ? new Date(serverDatetime) : false
    };
    this.scheduleUtils = new _scheduleUtils.default({
      settings: this.settings
    });
  }
  getName() {
    return 'schedule';
  }
  check() {
    return this.scheduleUtils.shouldDisplay();
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/timing/sessions.js":
/*!**************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/timing/sessions.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/timing/base.js"));
class _default extends _base.default {
  getName() {
    return 'sessions';
  }
  check() {
    const sessions = elementorFrontend.storage.get('sessions'),
      name = this.getName();
    let initialSessions = this.document.getStorage(name + '_initialSessions');
    if (!initialSessions) {
      this.document.setStorage(name + '_initialSessions', sessions);
      initialSessions = sessions;
    }
    return sessions - initialSessions >= this.getTimingSetting('sessions');
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/timing/sources.js":
/*!*************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/timing/sources.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/timing/base.js"));
class _default extends _base.default {
  getName() {
    return 'sources';
  }
  check() {
    const sources = this.getTimingSetting('sources');
    if (3 === sources.length) {
      return true;
    }
    const referrer = document.referrer.replace(/https?:\/\/(?:www\.)?/, ''),
      isInternal = 0 === referrer.indexOf(location.host.replace('www.', ''));
    if (isInternal) {
      return -1 !== sources.indexOf('internal');
    }
    if (-1 !== sources.indexOf('external')) {
      return true;
    }
    if (-1 !== sources.indexOf('search')) {
      return /^(google|yahoo|bing|yandex|baidu)\./.test(referrer);
    }
    return false;
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/timing/times-utils.js":
/*!*****************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/timing/times-utils.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class TimesUtils {
  constructor(args) {
    this.uniqueId = args.uniqueId;
    this.settings = args.settings;
    this.storage = args.storage;
  }
  getTimeFramesInSecounds(timeFrame) {
    const timeFrames = {
      day: 86400,
      // Day in seconds
      week: 604800,
      // Week in seconds
      month: 2628288 // Month in seconds
    };

    return timeFrames[timeFrame];
  }
  setExpiration(name, value, timeFrame) {
    const data = this.storage.get(name);
    if (!data) {
      const options = {
        lifetimeInSeconds: this.getTimeFramesInSecounds(timeFrame)
      };
      this.storage.set(name, value, options);
      return;
    }
    this.storage.set(name, value);
  }
  getImpressionsCount() {
    const impressionCount = this.storage.get(this.uniqueId) ?? 0;
    return parseInt(impressionCount);
  }
  incrementImpressionsCount() {
    if (!this.settings.period) {
      this.storage.set('times', (this.storage.get('times') ?? 0) + 1);
    } else if ('session' !== this.settings.period) {
      const impressionCount = this.getImpressionsCount();
      this.setExpiration(this.uniqueId, impressionCount + 1, this.settings.period);
    } else {
      sessionStorage.setItem(this.uniqueId, parseInt(sessionStorage.getItem(this.uniqueId) ?? 0) + 1);
    }
  }
  shouldCountOnOpen() {
    if (this.settings.countOnOpen) {
      this.incrementImpressionsCount();
    }
  }
  shouldDisplayPerTimeFrame() {
    const impressionCount = this.getImpressionsCount();
    if (impressionCount < this.settings.showsLimit) {
      this.shouldCountOnOpen();
      return true;
    }
    return false;
  }
  shouldDisplayPerSession() {
    const impressionCount = sessionStorage.getItem(this.uniqueId) ?? 0;
    if (parseInt(impressionCount) < this.settings.showsLimit) {
      this.shouldCountOnOpen();
      return true;
    }
    return false;
  }
  shouldDisplayBackwordCompatible() {
    let impressionCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    let showsLimit = arguments.length > 1 ? arguments[1] : undefined;
    const shouldDisplay = parseInt(impressionCount) < parseInt(showsLimit);
    this.shouldCountOnOpen();
    return shouldDisplay;
  }
}
exports["default"] = TimesUtils;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/timing/times.js":
/*!***********************************************************!*\
  !*** ../modules/popup/assets/js/frontend/timing/times.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/timing/base.js"));
var _timesUtils = _interopRequireDefault(__webpack_require__(/*! ./times-utils.js */ "../modules/popup/assets/js/frontend/timing/times-utils.js"));
class _default extends _base.default {
  constructor() {
    super(...arguments);
    this.uniqueId = `popup-${this.document.getSettings('id')}-impressions-count`;
    const {
      times_count: countOnOpen,
      times_period: period,
      times_times: showsLimit
    } = this.getSettings();
    this.settings = {
      countOnOpen,
      period,
      showsLimit: parseInt(showsLimit)
    };
    if ('' === this.settings.period) {
      this.settings.period = false;
    }
    if (['', 'close'].includes(this.settings.countOnOpen)) {
      this.settings.countOnOpen = false;
      this.onPopupHide();
    } else {
      this.settings.countOnOpen = true;
    }
    this.utils = new _timesUtils.default({
      uniqueId: this.uniqueId,
      settings: this.settings,
      storage: elementorFrontend.storage
    });
  }
  getName() {
    return 'times';
  }
  check() {
    if (!this.settings.period) {
      const impressionCount = this.document.getStorage('times') || 0;
      const showsLimit = this.getTimingSetting('times');
      return this.utils.shouldDisplayBackwordCompatible(impressionCount, showsLimit);
    }
    if ('session' !== this.settings.period) {
      if (!this.utils.shouldDisplayPerTimeFrame()) {
        return false;
      }
    } else if (!this.utils.shouldDisplayPerSession()) {
      return false;
    }
    return true;
  }
  onPopupHide() {
    window.addEventListener('elementor/popup/hide', () => {
      this.utils.incrementImpressionsCount();
    });
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/timing/url.js":
/*!*********************************************************!*\
  !*** ../modules/popup/assets/js/frontend/timing/url.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/timing/base.js"));
class _default extends _base.default {
  getName() {
    return 'url';
  }
  check() {
    const url = this.getTimingSetting('url'),
      action = this.getTimingSetting('action'),
      referrer = document.referrer;
    if ('regex' !== action) {
      return 'hide' === action ^ -1 !== referrer.indexOf(url);
    }
    let regexp;
    try {
      regexp = new RegExp(url);
    } catch (e) {
      return false;
    }
    return regexp.test(referrer);
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/triggers.js":
/*!*******************************************************!*\
  !*** ../modules/popup/assets/js/frontend/triggers.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _pageLoad = _interopRequireDefault(__webpack_require__(/*! ./triggers/page-load */ "../modules/popup/assets/js/frontend/triggers/page-load.js"));
var _scrolling = _interopRequireDefault(__webpack_require__(/*! ./triggers/scrolling */ "../modules/popup/assets/js/frontend/triggers/scrolling.js"));
var _scrollingTo = _interopRequireDefault(__webpack_require__(/*! ./triggers/scrolling-to */ "../modules/popup/assets/js/frontend/triggers/scrolling-to.js"));
var _click = _interopRequireDefault(__webpack_require__(/*! ./triggers/click */ "../modules/popup/assets/js/frontend/triggers/click.js"));
var _inactivity = _interopRequireDefault(__webpack_require__(/*! ./triggers/inactivity */ "../modules/popup/assets/js/frontend/triggers/inactivity.js"));
var _exitIntent = _interopRequireDefault(__webpack_require__(/*! ./triggers/exit-intent */ "../modules/popup/assets/js/frontend/triggers/exit-intent.js"));
class _default extends elementorModules.Module {
  constructor(settings, document) {
    super(settings);
    this.document = document;
    this.triggers = [];
    this.triggerClasses = {
      page_load: _pageLoad.default,
      scrolling: _scrolling.default,
      scrolling_to: _scrollingTo.default,
      click: _click.default,
      inactivity: _inactivity.default,
      exit_intent: _exitIntent.default
    };
    this.runTriggers();
  }
  runTriggers() {
    const settings = this.getSettings();
    jQuery.each(this.triggerClasses, (key, TriggerClass) => {
      if (!settings[key]) {
        return;
      }
      const trigger = new TriggerClass(settings, () => this.onTriggerFired());
      trigger.run();
      this.triggers.push(trigger);
    });
  }
  destroyTriggers() {
    this.triggers.forEach(trigger => trigger.destroy());
    this.triggers = [];
  }
  onTriggerFired() {
    this.document.showModal(true);
    this.destroyTriggers();
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/triggers/base.js":
/*!************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/triggers/base.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class _default extends elementorModules.Module {
  constructor(settings, callback) {
    super(settings);
    this.callback = callback;
  }
  getTriggerSetting(settingKey) {
    return this.getSettings(this.getName() + '_' + settingKey);
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/triggers/click.js":
/*!*************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/triggers/click.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/triggers/base.js"));
class _default extends _base.default {
  constructor() {
    super(...arguments);
    this.checkClick = this.checkClick.bind(this);
    this.clicksCount = 0;
  }
  getName() {
    return 'click';
  }
  checkClick() {
    this.clicksCount++;
    if (this.clicksCount === this.getTriggerSetting('times')) {
      this.callback();
    }
  }
  run() {
    elementorFrontend.elements.$body.on('click', this.checkClick);
  }
  destroy() {
    elementorFrontend.elements.$body.off('click', this.checkClick);
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/triggers/exit-intent.js":
/*!*******************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/triggers/exit-intent.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/triggers/base.js"));
class _default extends _base.default {
  constructor() {
    super(...arguments);
    this.detectExitIntent = this.detectExitIntent.bind(this);
  }
  getName() {
    return 'exit_intent';
  }
  detectExitIntent(event) {
    if (event.clientY <= 0) {
      this.callback();
    }
  }
  run() {
    elementorFrontend.elements.$window.on('mouseleave', this.detectExitIntent);
  }
  destroy() {
    elementorFrontend.elements.$window.off('mouseleave', this.detectExitIntent);
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/triggers/inactivity.js":
/*!******************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/triggers/inactivity.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/triggers/base.js"));
class _default extends _base.default {
  constructor() {
    super(...arguments);
    this.restartTimer = this.restartTimer.bind(this);
  }
  getName() {
    return 'inactivity';
  }
  run() {
    this.startTimer();
    elementorFrontend.elements.$document.on('keypress mousemove', this.restartTimer);
  }
  startTimer() {
    this.timeOut = setTimeout(this.callback, this.getTriggerSetting('time') * 1000);
  }
  clearTimer() {
    clearTimeout(this.timeOut);
  }
  restartTimer() {
    this.clearTimer();
    this.startTimer();
  }
  destroy() {
    this.clearTimer();
    elementorFrontend.elements.$document.off('keypress mousemove', this.restartTimer);
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/triggers/page-load.js":
/*!*****************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/triggers/page-load.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/triggers/base.js"));
class _default extends _base.default {
  getName() {
    return 'page_load';
  }
  run() {
    this.timeout = setTimeout(this.callback, this.getTriggerSetting('delay') * 1000);
  }
  destroy() {
    clearTimeout(this.timeout);
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/triggers/scrolling-to.js":
/*!********************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/triggers/scrolling-to.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/triggers/base.js"));
class _default extends _base.default {
  getName() {
    return 'scrolling_to';
  }
  run() {
    let $targetElement;
    try {
      $targetElement = jQuery(this.getTriggerSetting('selector'));
    } catch (e) {
      return;
    }
    if ($targetElement.length) {
      this.setUpIntersectionObserver();
      this.observer.observe($targetElement[0]);
    }
  }
  setUpIntersectionObserver() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.callback();
        }
      });
    });
  }
  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/popup/assets/js/frontend/triggers/scrolling.js":
/*!*****************************************************************!*\
  !*** ../modules/popup/assets/js/frontend/triggers/scrolling.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/popup/assets/js/frontend/triggers/base.js"));
class _default extends _base.default {
  constructor() {
    super(...arguments);
    this.checkScroll = this.checkScroll.bind(this);
    this.lastScrollOffset = 0;
  }
  getName() {
    return 'scrolling';
  }
  checkScroll() {
    const scrollDirection = scrollY > this.lastScrollOffset ? 'down' : 'up',
      requestedDirection = this.getTriggerSetting('direction');
    this.lastScrollOffset = scrollY;
    if (scrollDirection !== requestedDirection) {
      return;
    }
    if ('up' === scrollDirection) {
      this.callback();
      return;
    }
    const fullScroll = elementorFrontend.elements.$document.height() - innerHeight,
      scrollPercent = scrollY / fullScroll * 100;
    if (scrollPercent >= this.getTriggerSetting('offset')) {
      this.callback();
    }
  }
  run() {
    elementorFrontend.elements.$window.on('scroll', this.checkScroll);
  }
  destroy() {
    elementorFrontend.elements.$window.off('scroll', this.checkScroll);
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/posts/assets/js/frontend/frontend.js":
/*!*******************************************************!*\
  !*** ../modules/posts/assets/js/frontend/frontend.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class _default extends elementorModules.Module {
  constructor() {
    super();
    ['classic', 'full_content', 'cards'].forEach(skinName => {
      elementorFrontend.elementsHandler.attachHandler('posts', () => __webpack_require__.e(/*! import() | load-more */ "load-more").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/load-more */ "../modules/posts/assets/js/frontend/handlers/load-more.js")), skinName);
    });
    elementorFrontend.elementsHandler.attachHandler('posts', () => __webpack_require__.e(/*! import() | posts */ "posts").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/posts */ "../modules/posts/assets/js/frontend/handlers/posts.js")), 'classic');
    elementorFrontend.elementsHandler.attachHandler('posts', () => __webpack_require__.e(/*! import() | posts */ "posts").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/posts */ "../modules/posts/assets/js/frontend/handlers/posts.js")), 'full_content');
    elementorFrontend.elementsHandler.attachHandler('posts', () => __webpack_require__.e(/*! import() | posts */ "posts").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/cards */ "../modules/posts/assets/js/frontend/handlers/cards.js")), 'cards');
    elementorFrontend.elementsHandler.attachHandler('portfolio', () => __webpack_require__.e(/*! import() | portfolio */ "portfolio").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/portfolio */ "../modules/posts/assets/js/frontend/handlers/portfolio.js")));
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/share-buttons/assets/js/frontend/frontend.js":
/*!***************************************************************!*\
  !*** ../modules/share-buttons/assets/js/frontend/frontend.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class _default extends elementorModules.Module {
  constructor() {
    super();
    elementorFrontend.elementsHandler.attachHandler('share-buttons', () => __webpack_require__.e(/*! import() | share-buttons */ "share-buttons").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/share-buttons */ "../modules/share-buttons/assets/js/frontend/handlers/share-buttons.js")));
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/slides/assets/js/frontend/frontend.js":
/*!********************************************************!*\
  !*** ../modules/slides/assets/js/frontend/frontend.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class _default extends elementorModules.Module {
  constructor() {
    super();
    elementorFrontend.elementsHandler.attachHandler('slides', () => __webpack_require__.e(/*! import() | slides */ "slides").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/slides */ "../modules/slides/assets/js/frontend/handlers/slides.js")));
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/social/assets/js/frontend/frontend.js":
/*!********************************************************!*\
  !*** ../modules/social/assets/js/frontend/frontend.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class _default extends elementorModules.Module {
  constructor() {
    super();
    elementorFrontend.elementsHandler.attachHandler('facebook-button', () => __webpack_require__.e(/*! import() | social */ "social").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/facebook */ "../modules/social/assets/js/frontend/handlers/facebook.js")));
    elementorFrontend.elementsHandler.attachHandler('facebook-comments', () => __webpack_require__.e(/*! import() | social */ "social").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/facebook */ "../modules/social/assets/js/frontend/handlers/facebook.js")));
    elementorFrontend.elementsHandler.attachHandler('facebook-embed', () => __webpack_require__.e(/*! import() | social */ "social").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/facebook */ "../modules/social/assets/js/frontend/handlers/facebook.js")));
    elementorFrontend.elementsHandler.attachHandler('facebook-page', () => __webpack_require__.e(/*! import() | social */ "social").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/facebook */ "../modules/social/assets/js/frontend/handlers/facebook.js")));
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/table-of-contents/assets/js/frontend/frontend.js":
/*!*******************************************************************!*\
  !*** ../modules/table-of-contents/assets/js/frontend/frontend.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class _default extends elementorModules.Module {
  constructor() {
    super();
    elementorFrontend.elementsHandler.attachHandler('table-of-contents', () => Promise.all(/*! import() | table-of-contents */[__webpack_require__.e("vendors-node_modules_dompurify_dist_purify_js"), __webpack_require__.e("table-of-contents")]).then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/table-of-contents */ "../modules/table-of-contents/assets/js/frontend/handlers/table-of-contents.js")));
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/theme-builder/assets/js/frontend/frontend.js":
/*!***************************************************************!*\
  !*** ../modules/theme-builder/assets/js/frontend/frontend.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class _default extends elementorModules.Module {
  constructor() {
    super();
    ['archive_classic', 'archive_full_content', 'archive_cards'].forEach(skinName => {
      elementorFrontend.elementsHandler.attachHandler('archive-posts', () => __webpack_require__.e(/*! import() | archive-posts */ "archive-posts").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/archive-posts-load-more */ "../modules/theme-builder/assets/js/frontend/handlers/archive-posts-load-more.js")), skinName);
    });
    elementorFrontend.elementsHandler.attachHandler('archive-posts', () => __webpack_require__.e(/*! import() | archive-posts */ "archive-posts").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/archive-posts-skin-classic */ "../modules/theme-builder/assets/js/frontend/handlers/archive-posts-skin-classic.js")), 'archive_classic');
    elementorFrontend.elementsHandler.attachHandler('archive-posts', () => __webpack_require__.e(/*! import() | archive-posts */ "archive-posts").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/archive-posts-skin-classic */ "../modules/theme-builder/assets/js/frontend/handlers/archive-posts-skin-classic.js")), 'archive_full_content');
    elementorFrontend.elementsHandler.attachHandler('archive-posts', () => __webpack_require__.e(/*! import() | archive-posts */ "archive-posts").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/archive-posts-skin-cards */ "../modules/theme-builder/assets/js/frontend/handlers/archive-posts-skin-cards.js")), 'archive_cards');
    jQuery(function () {
      // Go to elementor element - if the URL is something like http://domain.com/any-page?preview=true&theme_template_id=6479
      var match = location.search.match(/theme_template_id=(\d*)/),
        $element = match ? jQuery('.elementor-' + match[1]) : [];
      if ($element.length) {
        jQuery('html, body').animate({
          scrollTop: $element.offset().top - window.innerHeight / 2
        });
      }
    });
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/theme-elements/assets/js/frontend/frontend.js":
/*!****************************************************************!*\
  !*** ../modules/theme-elements/assets/js/frontend/frontend.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class _default extends elementorModules.Module {
  constructor() {
    super();
    elementorFrontend.elementsHandler.attachHandler('search-form', () => __webpack_require__.e(/*! import() | search-form */ "search-form").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/search-form */ "../modules/theme-elements/assets/js/frontend/handlers/search-form.js")));
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/woocommerce/assets/js/frontend/frontend.js":
/*!*************************************************************!*\
  !*** ../modules/woocommerce/assets/js/frontend/frontend.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class _default extends elementorModules.Module {
  constructor() {
    super();
    elementorFrontend.elementsHandler.attachHandler('woocommerce-menu-cart', () => __webpack_require__.e(/*! import() | woocommerce-menu-cart */ "woocommerce-menu-cart").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/menu-cart */ "../modules/woocommerce/assets/js/frontend/handlers/menu-cart.js")));
    elementorFrontend.elementsHandler.attachHandler('woocommerce-purchase-summary', () => __webpack_require__.e(/*! import() | woocommerce-purchase-summary */ "woocommerce-purchase-summary").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/purchase-summary */ "../modules/woocommerce/assets/js/frontend/handlers/purchase-summary.js")));
    elementorFrontend.elementsHandler.attachHandler('woocommerce-checkout-page', () => __webpack_require__.e(/*! import() | woocommerce-checkout-page */ "woocommerce-checkout-page").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/checkout-page */ "../modules/woocommerce/assets/js/frontend/handlers/checkout-page.js")));
    elementorFrontend.elementsHandler.attachHandler('woocommerce-cart', () => __webpack_require__.e(/*! import() | woocommerce-cart */ "woocommerce-cart").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/cart */ "../modules/woocommerce/assets/js/frontend/handlers/cart.js")));
    elementorFrontend.elementsHandler.attachHandler('woocommerce-my-account', () => __webpack_require__.e(/*! import() | woocommerce-my-account */ "woocommerce-my-account").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/my-account */ "../modules/woocommerce/assets/js/frontend/handlers/my-account.js")));
    elementorFrontend.elementsHandler.attachHandler('woocommerce-notices', () => __webpack_require__.e(/*! import() | woocommerce-notices */ "woocommerce-notices").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/notices */ "../modules/woocommerce/assets/js/frontend/handlers/notices.js")));
    elementorFrontend.elementsHandler.attachHandler('woocommerce-product-add-to-cart', () => __webpack_require__.e(/*! import() | product-add-to-cart */ "product-add-to-cart").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/product-add-to-cart */ "../modules/woocommerce/assets/js/frontend/handlers/product-add-to-cart.js")));

    /**
     * `wc-cart` script is enqueued in the Editor by the widget `get_script_depends()`. As a result WooCommerce
     * triggers its cart related event callbacks. One of the callbacks requires `.woocommerce-cart-form` to be in
     * the page and reloads the Preview if it's not there. To get around this we add our own empty
     * `.woocommerce-cart-form` to the page to stop the page reloading.
     */
    if (elementorFrontend.isEditMode()) {
      elementorFrontend.on('components:init', () => {
        if (!elementorFrontend.elements.$body.find('.elementor-widget-woocommerce-cart').length) {
          elementorFrontend.elements.$body.append('<div class="woocommerce-cart-form">');
        }
      });
    }
  }
}
exports["default"] = _default;

/***/ }),

/***/ "@wordpress/i18n":
/*!**************************!*\
  !*** external "wp.i18n" ***!
  \**************************/
/***/ ((module) => {

module.exports = wp.i18n;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["frontend"], () => (__webpack_exec__("../assets/dev/js/frontend/elements-handlers.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=elements-handlers.js.map
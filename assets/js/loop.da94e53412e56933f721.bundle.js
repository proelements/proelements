/*! elementor-pro - v3.30.0 - 01-07-2025 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["loop"],{

/***/ "../assets/dev/js/preview/utils/document-handle.js":
/*!*********************************************************!*\
  !*** ../assets/dev/js/preview/utils/document-handle.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SAVE_CONTEXT = exports.EDIT_CONTEXT = void 0;
exports.createElement = createElement;
exports["default"] = addDocumentHandle;
const EDIT_HANDLE_CLASS_NAME = 'elementor-document-handle';
const EDIT_MODE_CLASS_NAME = 'elementor-edit-mode';
const EDIT_CONTEXT = exports.EDIT_CONTEXT = 'edit';
const SAVE_HANDLE_CLASS_NAME = 'elementor-document-save-back-handle';
const SAVE_CONTEXT = exports.SAVE_CONTEXT = 'save';

/**
 * @param {Object}        handleTarget
 * @param {HTMLElement}   handleTarget.element
 * @param {string|number} handleTarget.id      - Document ID.
 * @param {string}        handleTarget.title
 * @param {string}        context              - Edit/Save
 * @param {Function|null} onCloseDocument      - Callback to run when outgoing document is closed.
 * @param {string}        selector
 */
function addDocumentHandle(_ref) {
  let {
    element,
    id,
    title = __('Template', 'elementor-pro')
  } = _ref;
  let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : EDIT_CONTEXT;
  let onCloseDocument = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  let selector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  if (EDIT_CONTEXT === context) {
    if (!id || !element) {
      throw Error('`id` and `element` are required.');
    }
    if (isCurrentlyEditing(element) || hasHandle(element)) {
      return;
    }
  }
  const handleElement = createHandleElement({
    title,
    onClick: () => onDocumentClick(id, context, onCloseDocument, selector)
  }, context, element);
  element.prepend(handleElement);
  if (EDIT_CONTEXT === context) {
    element.dataset.editableElementorDocument = id;
  }
}

/**
 * @param {HTMLElement} element
 *
 * @return {boolean} Whether the element is currently being edited.
 */
function isCurrentlyEditing(element) {
  return element.classList.contains(EDIT_MODE_CLASS_NAME);
}

/**
 * @param {HTMLElement} element
 *
 * @return {boolean} Whether the element has a handle.
 */
function hasHandle(element) {
  return !!element.querySelector(`:scope > .${EDIT_HANDLE_CLASS_NAME}`);
}

/**
 * @param {Object}      handleProperties
 * @param {string}      handleProperties.title
 * @param {Function}    handleProperties.onClick
 * @param {string}      context
 * @param {HTMLElement} element
 *
 * @return {HTMLElement} The newly generated Handle element
 */
function createHandleElement(_ref2, context) {
  let {
    title,
    onClick
  } = _ref2;
  let element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  const handleTitle = ['header', 'footer'].includes(element?.dataset.elementorType) ? '%s' : __('Edit %s', 'elementor-pro');
  const innerElement = createElement({
    tag: 'div',
    classNames: [`${EDIT_HANDLE_CLASS_NAME}__inner`],
    children: [createElement({
      tag: 'i',
      classNames: [getHandleIcon(context)]
    }), createElement({
      tag: 'div',
      classNames: [`${EDIT_CONTEXT === context ? EDIT_HANDLE_CLASS_NAME : SAVE_HANDLE_CLASS_NAME}__title`],
      children: [document.createTextNode(EDIT_CONTEXT === context ? handleTitle.replace('%s', title) : __('Save %s', 'elementor-pro').replace('%s', title))]
    })]
  });
  const classNames = [EDIT_HANDLE_CLASS_NAME];
  if (EDIT_CONTEXT !== context) {
    classNames.push(SAVE_HANDLE_CLASS_NAME);
  }
  const containerElement = createElement({
    tag: 'div',
    classNames,
    children: [innerElement]
  });
  containerElement.addEventListener('click', onClick);
  return containerElement;
}
function getHandleIcon(context) {
  let icon = 'eicon-edit';
  if (SAVE_CONTEXT === context) {
    icon = elementorFrontend.config.is_rtl ? 'eicon-arrow-right' : 'eicon-arrow-left';
  }
  return icon;
}

/**
 * Util for creating HTML element.
 *
 * @param {Object}        elementProperties
 * @param {string}        elementProperties.tag
 * @param {string[]}      elementProperties.classNames
 * @param {HTMLElement[]} elementProperties.children
 *
 * @return {HTMLElement} Generated Element
 */
function createElement(_ref3) {
  let {
    tag,
    classNames = [],
    children = []
  } = _ref3;
  const element = document.createElement(tag);
  element.classList.add(...classNames);
  children.forEach(child => element.appendChild(child));
  return element;
}

/**
 * @param {string|number} id
 * @param {string}        context
 * @param {Function|null} onCloseDocument
 * @param {string}        selector
 * @return {Promise<void>}
 */
async function onDocumentClick(id, context) {
  let onCloseDocument = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  let selector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  if (EDIT_CONTEXT === context) {
    window.top.$e.internal('panel/state-loading');
    await window.top.$e.run('editor/documents/switch', {
      id: parseInt(id),
      onClose: onCloseDocument,
      selector
    });
    window.top.$e.internal('panel/state-ready');
  } else {
    elementorCommon.api.internal('panel/state-loading');
    elementorCommon.api.run('editor/documents/switch', {
      id: elementor.config.initial_document.id,
      mode: 'save',
      shouldScroll: false,
      selector
    }).finally(() => elementorCommon.api.internal('panel/state-ready'));
  }
}

/***/ }),

/***/ "../modules/loop-builder/assets/js/frontend/handlers/loop.js":
/*!*******************************************************************!*\
  !*** ../modules/loop-builder/assets/js/frontend/handlers/loop.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _posts = _interopRequireDefault(__webpack_require__(/*! modules/posts/assets/js/frontend/handlers/posts */ "../modules/posts/assets/js/frontend/handlers/posts.js"));
var _documentHandle = _interopRequireWildcard(__webpack_require__(/*! elementor-pro/preview/utils/document-handle */ "../assets/dev/js/preview/utils/document-handle.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
class Loop extends _posts.default {
  getSkinPrefix() {
    return '';
  }
  getDefaultSettings() {
    const defaultSettings = super.getDefaultSettings();
    defaultSettings.selectors.post = '.elementor-loop-container .elementor';
    defaultSettings.selectors.postsContainer = '.elementor-loop-container';
    defaultSettings.classes.inPlaceTemplateEditable = 'elementor-in-place-template-editable';
    return defaultSettings;
  }

  /**
   * Fit Images is used in the extended Posts widget handler to apply the "Image Size", "Image Ratio" and
   * "Image Width" controls. These controls don't exist in the Loop Grid widget, so we override `fitImages()`
   * to disable it's functionality.
   */
  fitImages() {}
  getVerticalSpaceBetween() {
    return elementorProFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(), 'row_gap', 'size');
  }

  /**
   * This is a callback that runs when the "Edit Template" document handle is clicked in the Editor.
   */
  onInPlaceEditTemplate() {
    this.$element.addClass(this.getDefaultSettings().classes.inPlaceTemplateEditable);
    this.elementsToRemove = [];
    this.handleSwiper();
    const templateID = this.getElementSettings('template_id');
    this.elementsToRemove = [...this.elementsToRemove, 'style#loop-' + templateID, 'link#font-loop-' + templateID, 'style#loop-dynamic-' + templateID];
    this.elementsToRemove.forEach(elementToRemove => {
      this.$element.find(elementToRemove).remove();
    });
  }
  handleSwiper() {
    const swiper = this.elements.$postsContainer.data('swiper');
    if (!swiper) {
      return;
    }
    swiper.slideTo(0);
    swiper.autoplay.pause();
    swiper.allowTouchMove = false;
    swiper.params.autoplay.delay = 1000000; // Add a long delay so that the Swiper does not move while editing the Template. Even though it was paused, it will start again on mouse leave.
    swiper.update();
    this.elementsToRemove = [...this.elementsToRemove, '.swiper-pagination', '.elementor-swiper-button', '.elementor-document-handle'];
  }
  attachEditDocumentHandle() {
    const templateId = this.getElementSettings('template_id');
    if (!templateId) {
      return;
    }
    const elementSettings = this.getElementSettings(),
      widgetSelector = `.elementor-element-${this.getID()}`,
      editHandleSelector = elementSettings?.edit_handle_selector + ('[data-elementor-type="loop-item"]' === elementSettings?.edit_handle_selector ? `.elementor-${templateId}` : ''),
      editHandleElement = this.$element.find(editHandleSelector).first()[0];
    if (!editHandleElement) {
      return;
    }
    if (this.isFirstEdit()) {
      // TODO: refactor when CSS :has() is fully supported.
      this.$element.find('.elementor-swiper-button').remove();
      return;
    }
    (0, _documentHandle.default)({
      element: editHandleElement,
      title: __('Template', 'elementor-pro'),
      id: templateId
    }, _documentHandle.EDIT_CONTEXT, () => this.onInPlaceEditTemplate(), `${widgetSelector} .elementor-${templateId}`);
  }
  isFirstEdit() {
    return this.$element.has('.e-loop-first-edit').length;
  }
  handleCTA() {
    const emptyViewContainer = document.querySelector(`[data-id="${this.getID()}"] .e-loop-empty-view__wrapper`);
    if (!emptyViewContainer) {
      return;
    }
    const shadowRoot = emptyViewContainer.attachShadow({
      mode: 'open'
    });
    shadowRoot.appendChild(elementorPro.modules.loopBuilder.getCtaStyles());
    shadowRoot.appendChild(elementorPro.modules.loopBuilder.getCtaContent(this.getWidgetType()));
    const ctaButton = shadowRoot.querySelector('.e-loop-empty-view__box-cta');
    ctaButton.addEventListener('click', () => {
      elementorPro.modules.loopBuilder.createTemplate();
    });
  }

  /**
   * Allows 3rd party add-ons to run code on the Loop Grid handler when the handler is initialized in the Editor.
   */
  doEditorInitAction() {
    elementor.hooks.doAction('editor/widgets/loop-grid/on-init', this);
  }
  onElementChange(control) {
    if ('_skin' === control) {
      elementorPro.modules.loopBuilder.onApplySkinChange();
    }
    _posts.default.prototype.onElementChange.apply(this);
  }
  bindEvents() {
    super.bindEvents();
    elementorFrontend.elements.$window.on('elementor-pro/loop-builder/after-insert-posts', this.reInitMasonry.bind(this));
  }
  reInitMasonry() {
    const selectors = this.getSettings('selectors');
    this.elements.$posts = jQuery(`.elementor-element-${this.getID()} ${selectors.post}`);
    super.runMasonry();
  }
  unbindEvents() {
    super.unbindEvents();
    elementorFrontend.elements.$window.off('elementor-pro/loop-builder/after-insert-posts', this.reInitMasonry.bind(this));
  }
  onInit() {
    super.onInit(...arguments);
    if (elementorFrontend.isEditMode()) {
      this.doEditorInitAction();
      this.attachEditDocumentHandle();
      this.handleCTA();
    }
  }
}
exports["default"] = Loop;

/***/ }),

/***/ "../modules/posts/assets/js/frontend/handlers/posts.js":
/*!*************************************************************!*\
  !*** ../modules/posts/assets/js/frontend/handlers/posts.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = elementorModules.frontend.handlers.Base.extend({
  getSkinPrefix() {
    return 'classic_';
  },
  bindEvents() {
    elementorFrontend.addListenerOnce(this.getModelCID(), 'resize', this.onWindowResize);
  },
  unbindEvents() {
    elementorFrontend.removeListeners(this.getModelCID(), 'resize', this.onWindowResize);
  },
  getClosureMethodsNames() {
    return elementorModules.frontend.handlers.Base.prototype.getClosureMethodsNames.apply(this, arguments).concat(['fitImages', 'onWindowResize', 'runMasonry']);
  },
  getDefaultSettings() {
    return {
      classes: {
        fitHeight: 'elementor-fit-height',
        hasItemRatio: 'elementor-has-item-ratio'
      },
      selectors: {
        postsContainer: '.elementor-posts-container',
        post: '.elementor-post',
        postThumbnail: '.elementor-post__thumbnail',
        postThumbnailImage: '.elementor-post__thumbnail img'
      }
    };
  },
  getDefaultElements() {
    var selectors = this.getSettings('selectors');
    return {
      $postsContainer: this.$element.find(selectors.postsContainer),
      $posts: this.$element.find(selectors.post)
    };
  },
  fitImage($post) {
    var settings = this.getSettings(),
      $imageParent = $post.find(settings.selectors.postThumbnail),
      $image = $imageParent.find('img'),
      image = $image[0];
    if (!image) {
      return;
    }
    var imageParentRatio = $imageParent.outerHeight() / $imageParent.outerWidth(),
      imageRatio = image.naturalHeight / image.naturalWidth;
    $imageParent.toggleClass(settings.classes.fitHeight, imageRatio < imageParentRatio);
  },
  fitImages() {
    var $ = jQuery,
      self = this,
      itemRatio = getComputedStyle(this.$element[0], ':after').content,
      settings = this.getSettings();
    if (self.isMasonryEnabled()) {
      this.elements.$postsContainer.removeClass(settings.classes.hasItemRatio);
      return;
    }
    this.elements.$postsContainer.toggleClass(settings.classes.hasItemRatio, !!itemRatio.match(/\d/));
    this.elements.$posts.each(function () {
      var $post = $(this),
        $image = $post.find(settings.selectors.postThumbnailImage);
      self.fitImage($post);
      $image.on('load', function () {
        self.fitImage($post);
      });
    });
  },
  setColsCountSettings() {
    const settings = this.getElementSettings(),
      skinPrefix = this.getSkinPrefix(),
      colsCount = elementorProFrontend.utils.controls.getResponsiveControlValue(settings, `${skinPrefix}columns`);
    this.setSettings('colsCount', colsCount);
  },
  isMasonryEnabled() {
    return !!this.getElementSettings(this.getSkinPrefix() + 'masonry');
  },
  initMasonry() {
    imagesLoaded(this.elements.$posts, this.runMasonry);
  },
  getVerticalSpaceBetween() {
    /* The `verticalSpaceBetween` variable is set up in a way that supports older versions of the portfolio widget */
    let verticalSpaceBetween = elementorProFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(), `${this.getSkinPrefix()}row_gap`, 'size');
    if ('' === this.getSkinPrefix() && '' === verticalSpaceBetween) {
      verticalSpaceBetween = this.getElementSettings('item_gap.size');
    }
    return verticalSpaceBetween;
  },
  runMasonry() {
    var elements = this.elements;
    elements.$posts.css({
      marginTop: '',
      transitionDuration: ''
    });
    this.setColsCountSettings();
    var colsCount = this.getSettings('colsCount'),
      hasMasonry = this.isMasonryEnabled() && colsCount >= 2;
    elements.$postsContainer.toggleClass('elementor-posts-masonry', hasMasonry);
    if (!hasMasonry) {
      elements.$postsContainer.height('');
      return;
    }
    const verticalSpaceBetween = this.getVerticalSpaceBetween();
    var masonry = new elementorModules.utils.Masonry({
      container: elements.$postsContainer,
      items: elements.$posts.filter(':visible'),
      columnsCount: this.getSettings('colsCount'),
      verticalSpaceBetween: verticalSpaceBetween || 0
    });
    masonry.run();
  },
  run() {
    // For slow browsers
    setTimeout(this.fitImages, 0);
    this.initMasonry();
  },
  onInit() {
    elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);
    this.bindEvents();
    this.run();
  },
  onWindowResize() {
    this.fitImages();
    this.runMasonry();
  },
  onElementChange() {
    this.fitImages();
    setTimeout(this.runMasonry);
  }
});

/***/ })

}]);
//# sourceMappingURL=loop.da94e53412e56933f721.bundle.js.map
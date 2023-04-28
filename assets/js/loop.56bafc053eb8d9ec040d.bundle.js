/*! pro-elements - v3.12.3 - 23-04-2023 */
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
const EDIT_CONTEXT = 'edit';
exports.EDIT_CONTEXT = EDIT_CONTEXT;
const SAVE_HANDLE_CLASS_NAME = 'elementor-document-save-back-handle';
const SAVE_CONTEXT = 'save';

/**
 * @param {Object}        handleTarget
 * @param {HTMLElement}   handleTarget.element
 * @param {string|number} handleTarget.id      - Document ID.
 * @param {string}        handleTarget.title
 * @param {string}        context              - Edit/Save
 * @param {Function|null} onCloseDocument      - Callback to run when outgoing document is closed.
 * @param {string}        selector
 */
exports.SAVE_CONTEXT = SAVE_CONTEXT;
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
  }, context);
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
 * @param {Object}   handleProperties
 * @param {string}   handleProperties.title
 * @param {Function} handleProperties.onClick
 * @param {string}   context
 *
 * @return {HTMLElement} The newly generated Handle element
 */
function createHandleElement(_ref2, context) {
  let {
    title,
    onClick
  } = _ref2;
  const element = createElement({
    tag: 'div',
    classNames: EDIT_CONTEXT === context ? [EDIT_HANDLE_CLASS_NAME] : [EDIT_HANDLE_CLASS_NAME, SAVE_HANDLE_CLASS_NAME],
    children: [createElement({
      tag: 'i',
      classNames: [getHandleIcon(context)]
    }), createElement({
      tag: 'div',
      classNames: [`${EDIT_CONTEXT === context ? EDIT_HANDLE_CLASS_NAME : SAVE_HANDLE_CLASS_NAME}__title`],
      children: [document.createTextNode(EDIT_CONTEXT === context ? __('Edit %s', 'elementor-pro').replace('%s', title) : __('Save %s', 'elementor-pro').replace('%s', title))]
    })]
  });
  element.addEventListener('click', onClick);
  return element;
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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
var _default = elementorModules.frontend.handlers.Base.extend({
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
exports["default"] = _default;

/***/ })

}]);
//# sourceMappingURL=loop.56bafc053eb8d9ec040d.bundle.js.map
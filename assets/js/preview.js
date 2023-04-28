/*! pro-elements - v3.12.3 - 23-04-2023 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "@wordpress/i18n":
/*!**************************!*\
  !*** external "wp.i18n" ***!
  \**************************/
/***/ ((module) => {

module.exports = wp.i18n;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*******************************************!*\
  !*** ../assets/dev/js/preview/preview.js ***!
  \*******************************************/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _documentHandle = _interopRequireWildcard(__webpack_require__(/*! ./utils/document-handle */ "../assets/dev/js/preview/utils/document-handle.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
class Preview extends elementorModules.ViewModule {
  constructor() {
    super();
    elementorFrontend.on('components:init', () => this.onFrontendComponentsInit());
  }
  createDocumentsHandles() {
    jQuery.each(elementorFrontend.documentsManager.documents, (index, document) => {
      const element = document.$element.get(0),
        {
          elementorTitle: title,
          customEditHandle: hasCustomEditHandle
        } = element.dataset;
      if (hasCustomEditHandle) {
        return;
      }
      const id = document.getSettings('id');
      (0, _documentHandle.default)({
        element,
        title,
        id
      }, _documentHandle.EDIT_CONTEXT, null, '.elementor-' + id);
    });
  }
  onFrontendComponentsInit() {
    this.createDocumentsHandles();
    elementor.on('document:loaded', () => this.createDocumentsHandles());
  }
}
exports["default"] = Preview;
window.elementorProPreview = new Preview();
})();

/******/ })()
;
//# sourceMappingURL=preview.js.map
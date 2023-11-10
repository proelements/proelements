/*! pro-elements - v3.17.0 - 01-11-2023 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../assets/dev/js/editor/element-editor-module.js":
/*!********************************************************!*\
  !*** ../assets/dev/js/editor/element-editor-module.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = elementorModules.editor.utils.Module.extend({
  elementType: null,
  __construct(elementType) {
    this.elementType = elementType;
    this.addEditorListener();
  },
  updateOptions(name, options) {
    const controlView = this.getEditorControlView(name);
    if (controlView) {
      this.getEditorControlModel(name).set('options', options);
      controlView.render();
    }
  },
  addEditorListener() {
    var self = this;
    if (self.onElementChange) {
      var eventName = 'change';
      if ('global' !== self.elementType) {
        eventName += ':' + self.elementType;
      }
      elementor.channels.editor.on(eventName, function (controlView, elementView) {
        self.onElementChange(controlView.model.get('name'), controlView, elementView);
      });
    }
  },
  /**
   * Add a spinner to a control inside its control title.
   *
   * @param {string} controlName - The control name to add the spinner to.
   *
   * @return {void}
   */
  addControlSpinner(controlName) {
    const $el = this.getEditorControlView(controlName).$el;

    // Exit if there is a spinner already.
    if ($el.find('.elementor-control-spinner').length) {
      return;
    }
    const $input = $el.find(':input');
    $input.attr('disabled', true);
    $el.find('.elementor-control-title').after('<span class="elementor-control-spinner"><i class="eicon-spinner eicon-animation-spin"></i>&nbsp;</span>');
  },
  /**
   * Remove a spinner from a control.
   *
   * @param {string} controlName - The control name to remove the spinner from.
   *
   * @return {void}
   */
  removeControlSpinner(controlName) {
    const $controlEl = this.getEditorControlView(controlName).$el;
    $controlEl.find(':input').attr('disabled', false);
    $controlEl.find('.elementor-control-spinner').remove();
  },
  /**
   * Add an error message under the control.
   *
   * @param {string} controlName - The control name to add the error to.
   * @param {string} error       - Set an error message.
   * @param {string} location    - A CSS selector to the element which the error will be appended to.
   *
   * @return {void}
   */
  addControlError(controlName, error) {
    let location = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.elementor-control-content';
    const $el = this.getEditorControlView(controlName).$el;

    // Remove any existing error in order to override it.
    if ($el.find('.e-control-error').length) {
      $el.find('.e-control-error').remove();
    }

    // Select only the first elements to prevent cases where the error is added to many elements.
    // (usually in repeater controls).
    $el.find(location).first().after(`<span class="elementor-control-field-description e-control-error">${error}</span>`);
  },
  /**
   * Remove the control error message.
   *
   * @param {string} controlName - The control name to add the error to.
   *
   * @return {void}
   */
  removeControlError(controlName) {
    const $el = this.getEditorControlView(controlName).$el;
    $el.find('.e-control-error').remove();
  },
  /**
   * Remove any indicators that are related to the control. (e.g. spinner, error, etc.)
   *
   * @param {string} controlName - The control name to reset.
   *
   * @return {void}
   */
  resetControlIndicators(controlName) {
    this.removeControlSpinner(controlName);
    this.removeControlError(controlName);
  },
  addSectionListener(section, callback) {
    const self = this;
    elementor.channels.editor.on('section:activated', function (sectionName, editor) {
      var model = editor.getOption('editedElementView').getEditModel(),
        currentElementType = model.get('elType'),
        _arguments = arguments;
      if ('widget' === currentElementType) {
        currentElementType = model.get('widgetType');
      }
      if (self.elementType === currentElementType && section === sectionName) {
        setTimeout(function () {
          callback.apply(self, _arguments);
        }, 10);
      }
    });
  }
});

/***/ }),

/***/ "../assets/dev/js/editor/inline-controls-stack.js":
/*!********************************************************!*\
  !*** ../assets/dev/js/editor/inline-controls-stack.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = elementorModules.editor.views.ControlsStack.extend({
  activeTab: 'content',
  activeSection: 'settings',
  initialize() {
    this.collection = new Backbone.Collection(_.values(this.options.controls));
  },
  filter(model) {
    if ('section' === model.get('type')) {
      return true;
    }
    var section = model.get('section');
    return !section || section === this.activeSection;
  },
  childViewOptions() {
    return {
      elementSettingsModel: this.model
    };
  }
});

/***/ }),

/***/ "../assets/dev/js/preview/utils/document-handle.js":
/*!*********************************************************!*\
  !*** ../assets/dev/js/preview/utils/document-handle.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SAVE_CONTEXT = exports.EDIT_CONTEXT = void 0;
exports.createElement = createElement;
exports["default"] = addDocumentHandle;
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "../node_modules/core-js/modules/es.error.cause.js");
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
  const handleTitle = ['header', 'footer'].includes(element === null || element === void 0 ? void 0 : element.dataset.elementorType) ? '%s' : __('Edit %s', 'elementor-pro');
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

/***/ "../core/app/modules/site-editor/assets/js/data/commands/conditions-config.js":
/*!************************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/data/commands/conditions-config.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.ConditionsConfig = void 0;
class ConditionsConfig extends $e.modules.CommandData {
  static signature = 'site-editor/conditions-config';
  static getEndpointFormat() {
    return 'site-editor/conditions-config/{id}';
  }
}
exports.ConditionsConfig = ConditionsConfig;
var _default = ConditionsConfig;
exports["default"] = _default;

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/data/commands/index.js":
/*!************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/data/commands/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "ConditionsConfig", ({
  enumerable: true,
  get: function () {
    return _conditionsConfig.ConditionsConfig;
  }
}));
Object.defineProperty(exports, "Templates", ({
  enumerable: true,
  get: function () {
    return _templates.Templates;
  }
}));
Object.defineProperty(exports, "TemplatesConditions", ({
  enumerable: true,
  get: function () {
    return _templatesConditions.TemplatesConditions;
  }
}));
Object.defineProperty(exports, "TemplatesConditionsConflicts", ({
  enumerable: true,
  get: function () {
    return _templatesConditionsConflicts.TemplatesConditionsConflicts;
  }
}));
var _templates = __webpack_require__(/*! ./templates */ "../core/app/modules/site-editor/assets/js/data/commands/templates.js");
var _conditionsConfig = __webpack_require__(/*! ./conditions-config */ "../core/app/modules/site-editor/assets/js/data/commands/conditions-config.js");
var _templatesConditions = __webpack_require__(/*! ./templates-conditions */ "../core/app/modules/site-editor/assets/js/data/commands/templates-conditions.js");
var _templatesConditionsConflicts = __webpack_require__(/*! ./templates-conditions-conflicts */ "../core/app/modules/site-editor/assets/js/data/commands/templates-conditions-conflicts.js");

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/data/commands/templates-conditions-conflicts.js":
/*!*************************************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/data/commands/templates-conditions-conflicts.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.TemplatesConditionsConflicts = void 0;
class TemplatesConditionsConflicts extends $e.modules.CommandData {
  static signature = 'site-editor/templates-conditions-conflicts';
  static getEndpointFormat() {
    return `${TemplatesConditionsConflicts.signature}/{id}`;
  }
}
exports.TemplatesConditionsConflicts = TemplatesConditionsConflicts;
var _default = TemplatesConditionsConflicts;
exports["default"] = _default;

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/data/commands/templates-conditions.js":
/*!***************************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/data/commands/templates-conditions.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.TemplatesConditions = void 0;
class TemplatesConditions extends $e.modules.CommandData {
  static signature = 'site-editor/templates-conditions';
  static getEndpointFormat() {
    return 'site-editor/templates-conditions/{id}';
  }
}
exports.TemplatesConditions = TemplatesConditions;
var _default = TemplatesConditions;
exports["default"] = _default;

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/data/commands/templates.js":
/*!****************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/data/commands/templates.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.Templates = void 0;
class Templates extends $e.modules.CommandData {
  static signature = 'site-editor/templates';
  static getEndpointFormat() {
    return 'site-editor/templates/{id}';
  }
}
exports.Templates = Templates;
var _default = Templates;
exports["default"] = _default;

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/data/component.js":
/*!*******************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/data/component.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var dataCommands = _interopRequireWildcard(__webpack_require__(/*! ./commands */ "../core/app/modules/site-editor/assets/js/data/commands/index.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
class Component extends $e.modules.ComponentBase {
  static namespace = 'site-editor';
  getNamespace() {
    return this.constructor.namespace;
  }
  defaultData() {
    return this.importCommands(dataCommands);
  }
}
exports["default"] = Component;

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/editor.js":
/*!***********************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/editor.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _component = _interopRequireDefault(__webpack_require__(/*! ./data/component */ "../core/app/modules/site-editor/assets/js/data/component.js"));
var _commands = __webpack_require__(/*! ./data/commands */ "../core/app/modules/site-editor/assets/js/data/commands/index.js");
class Module extends elementorModules.editor.utils.Module {
  onElementorInit() {
    const config = elementor.documents.getCurrent().config;
    if (config.support_site_editor) {
      $e.components.register(new _component.default());
      $e.data.deleteCache($e.components.get(_component.default.namespace), _commands.Templates.signature);
    }
  }
}
exports["default"] = Module;

/***/ }),

/***/ "../modules/assets-manager/assets/js/editor/editor.js":
/*!************************************************************!*\
  !*** ../modules/assets-manager/assets/js/editor/editor.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = elementorModules.editor.utils.Module.extend({
  onElementorInit() {
    var FontsManager = __webpack_require__(/*! ./font-manager */ "../modules/assets-manager/assets/js/editor/font-manager.js");
    this.assets = {
      font: new FontsManager()
    };
  }
});

/***/ }),

/***/ "../modules/assets-manager/assets/js/editor/font-manager.js":
/*!******************************************************************!*\
  !*** ../modules/assets-manager/assets/js/editor/font-manager.js ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";


module.exports = elementorModules.Module.extend({
  _enqueuedFonts: [],
  _enqueuedTypekit: false,
  onFontChange(fontType, font) {
    if ('custom' !== fontType && 'typekit' !== fontType) {
      return;
    }
    if (-1 !== this._enqueuedFonts.indexOf(font)) {
      return;
    }
    if ('typekit' === fontType && this._enqueuedTypekit) {
      return;
    }
    this.getCustomFont(fontType, font);
  },
  getCustomFont(fontType, font) {
    elementorPro.ajax.addRequest('assets_manager_panel_action_data', {
      unique_id: 'font_' + fontType + font,
      data: {
        service: 'font',
        type: fontType,
        font
      },
      success(data) {
        if (data.font_face) {
          elementor.$previewContents.find('style').last().after('<style type="text/css">' + data.font_face + '</style>');
        }
        if (data.font_url) {
          elementor.$previewContents.find('link').last().after('<link href="' + data.font_url + '" rel="stylesheet" type="text/css">');
        }
      }
    });
    this._enqueuedFonts.push(font);
    if ('typekit' === fontType) {
      this._enqueuedTypekit = true;
    }
  },
  onInit() {
    elementor.channels.editor.on('font:insertion', this.onFontChange.bind(this));
  }
});

/***/ }),

/***/ "../modules/custom-css/assets/js/editor/editor.js":
/*!********************************************************!*\
  !*** ../modules/custom-css/assets/js/editor/editor.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class _default extends elementorModules.editor.utils.Module {
  addCustomCss(css, context) {
    if (!context) {
      return;
    }
    const model = context.model,
      customCSS = model.get('settings').get('custom_css');
    let selector = '.elementor-element.elementor-element-' + model.get('id');
    if ('document' === model.get('elType')) {
      selector = elementor.config.document.settings.cssWrapperSelector;
    }
    if (customCSS) {
      css += customCSS.replace(/selector/g, selector);
    }
    return css;
  }
  onElementorInit() {
    elementor.hooks.addFilter('editor/style/styleText', this.addCustomCss);
    elementor.on('navigator:init', this.onNavigatorInit.bind(this));
  }
  onNavigatorInit() {
    elementor.navigator.indicators.customCSS = {
      icon: 'code-bold',
      settingKeys: ['custom_css'],
      title: __('Custom CSS', 'elementor-pro'),
      section: 'section_custom_css'
    };
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/flip-box/assets/js/editor/editor.js":
/*!******************************************************!*\
  !*** ../modules/flip-box/assets/js/editor/editor.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


module.exports = elementorModules.editor.utils.Module.extend({
  onElementorInit() {
    elementor.channels.editor.on('section:activated', this.onSectionActivated);
  },
  onSectionActivated(sectionName, editor) {
    var editedElement = editor.getOption('editedElementView');
    if ('flip-box' !== editedElement.model.get('widgetType')) {
      return;
    }
    var isSideBSection = -1 !== ['section_side_b_content', 'section_style_b'].indexOf(sectionName);
    editedElement.$el.toggleClass('elementor-flip-box--flipped', isSideBSection);
    var $backLayer = editedElement.$el.find('.elementor-flip-box__back');
    if (isSideBSection) {
      $backLayer.css('transition', 'none');
    }
    if (!isSideBSection) {
      setTimeout(function () {
        $backLayer.css('transition', '');
      }, 10);
    }
  }
});

/***/ }),

/***/ "../modules/forms/assets/js/editor/component.js":
/*!******************************************************!*\
  !*** ../modules/forms/assets/js/editor/component.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var hooks = _interopRequireWildcard(__webpack_require__(/*! ./hooks/ */ "../modules/forms/assets/js/editor/hooks/index.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
class Component extends $e.modules.ComponentBase {
  getNamespace() {
    return 'forms';
  }
  defaultHooks() {
    return this.importHooks(hooks);
  }
}
exports["default"] = Component;

/***/ }),

/***/ "../modules/forms/assets/js/editor/fields-map-control.js":
/*!***************************************************************!*\
  !*** ../modules/forms/assets/js/editor/fields-map-control.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


module.exports = elementor.modules.controls.Repeater.extend({
  onBeforeRender() {
    this.$el.hide();
  },
  updateMap(fields) {
    var self = this,
      savedMapObject = {};
    self.collection.each(function (model) {
      savedMapObject[model.get('remote_id')] = model.get('local_id');
    });
    self.collection.reset();
    _.each(fields, function (field) {
      var model = {
        remote_id: field.remote_id,
        remote_label: field.remote_label,
        remote_type: field.remote_type ? field.remote_type : '',
        remote_required: field.remote_required ? field.remote_required : false,
        local_id: savedMapObject[field.remote_id] ? savedMapObject[field.remote_id] : ''
      };
      self.collection.add(model);
    });
    self.render();
  },
  onRender() {
    elementor.modules.controls.Base.prototype.onRender.apply(this, arguments);
    var self = this;
    self.children.each(function (view) {
      var localFieldsControl = view.children.last(),
        options = {
          '': '- ' + __('None', 'elementor') + ' -'
        },
        label = view.model.get('remote_label');
      if (view.model.get('remote_required')) {
        label += '<span class="elementor-required">*</span>';
      }
      _.each(self.elementSettingsModel.get('form_fields').models, function (model, index) {
        // If it's an email field, add only email fields from thr form
        var remoteType = view.model.get('remote_type');
        if ('text' !== remoteType && remoteType !== model.get('field_type')) {
          return;
        }
        options[model.get('custom_id')] = model.get('field_label') || 'Field #' + (index + 1);
      });
      localFieldsControl.model.set('label', label);
      localFieldsControl.model.set('options', options);
      localFieldsControl.render();
      view.$el.find('.elementor-repeater-row-tools').hide();
      view.$el.find('.elementor-repeater-row-controls').removeClass('elementor-repeater-row-controls').find('.elementor-control').css({
        paddingBottom: 0
      });
    });
    self.$el.find('.elementor-button-wrapper').remove();
    if (self.children.length) {
      self.$el.show();
    }
  }
});

/***/ }),

/***/ "../modules/forms/assets/js/editor/fields-repeater-control.js":
/*!********************************************************************!*\
  !*** ../modules/forms/assets/js/editor/fields-repeater-control.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _fieldsRepeaterRow = _interopRequireDefault(__webpack_require__(/*! ./fields-repeater-row */ "../modules/forms/assets/js/editor/fields-repeater-row.js"));
module.exports = class extends elementor.modules.controls.Repeater {
  className() {
    let classes = super.className();
    classes += ' elementor-control-type-repeater';
    return classes;
  }
  getChildView() {
    return _fieldsRepeaterRow.default;
  }
  initialize() {
    super.initialize(...arguments);
    const formFields = this.container.settings.get('form_fields');
    this.listenTo(formFields, 'change', model => this.onFormFieldChange(model)).listenTo(formFields, 'remove', model => this.onFormFieldRemove(model));
  }
  getFirstChild() {
    return this.children.findByModel(this.collection.models[0]);
  }
  lockFirstStep() {
    const firstChild = this.getFirstChild();
    if ('step' !== firstChild.model.get('field_type')) {
      return;
    }
    const stepFields = this.collection.where({
      field_type: 'step'
    });
    if (1 < stepFields.length) {
      firstChild.toggleFieldTypeControl(false);
      firstChild.toggleTools(false);
    }
    firstChild.toggleSort(false);
  }
  onFormFieldChange(model) {
    const fieldType = model.changed.field_type;
    if (!fieldType || 'step' !== fieldType && 'step' !== model._previousAttributes.field_type) {
      return;
    }
    const isStep = 'step' === fieldType;
    this.children.findByModel(model).toggleStepField(isStep);
    this.onStepFieldChanged(isStep);
  }
  onFormFieldRemove(model) {
    if ('step' === model.get('field_type')) {
      this.onStepFieldChanged(false);
    }
  }
  onStepFieldChanged(isStep) {
    if (isStep) {
      this.lockFirstStep();
      return;
    }
    const stepFields = this.collection.where({
      field_type: 'step'
    });
    if (stepFields.length > 1) {
      return;
    }
    const firstChild = this.getFirstChild();
    if (1 === stepFields.length) {
      firstChild.toggleTools(true);
      firstChild.toggleFieldTypeControl(true);
      return;
    }
    firstChild.toggleSort(true);
  }
  onAddChild(childView) {
    super.onAddChild(childView);
    if ('step' === childView.model.get('field_type')) {
      this.lockFirstStep();
      childView.toggleStepField(true);
    }
  }
};

/***/ }),

/***/ "../modules/forms/assets/js/editor/fields-repeater-row.js":
/*!****************************************************************!*\
  !*** ../modules/forms/assets/js/editor/fields-repeater-row.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class _default extends elementor.modules.controls.RepeaterRow {
  toggleFieldTypeControl(show) {
    const fieldTypeModel = this.collection.findWhere({
        name: 'field_type'
      }),
      fieldTypeControl = this.children.findByModel(fieldTypeModel);
    fieldTypeControl.$el.toggle(show);
  }
  toggleStepField(isStep) {
    this.$el.toggleClass('elementor-repeater-row--form-step', isStep);
  }
  toggleTools(show) {
    this.ui.removeButton.add(this.ui.duplicateButton).toggle(show);
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/forms/assets/js/editor/fields/acceptance.js":
/*!**************************************************************!*\
  !*** ../modules/forms/assets/js/editor/fields/acceptance.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";


module.exports = elementorModules.editor.utils.Module.extend({
  renderField(inputField, item, i, settings) {
    var itemClasses = _.escape(item.css_classes),
      required = '',
      label = '',
      checked = '';
    if (item.required) {
      required = 'required';
    }
    if (item.acceptance_text) {
      label = '<label for="form_field_' + i + '">' + item.acceptance_text + '</label>';
    }
    if (item.checked_by_default) {
      checked = ' checked="checked"';
    }
    return '<div class="elementor-field-subgroup">' + '<span class="elementor-field-option">' + '<input size="1" type="checkbox"' + checked + ' class="elementor-acceptance-field elementor-field elementor-size-' + settings.input_size + ' ' + itemClasses + '" name="form_field_' + i + '" id="form_field_' + i + '" ' + required + ' > ' + label + '</span></div>';
  },
  onInit() {
    elementor.hooks.addFilter('elementor_pro/forms/content_template/field/acceptance', this.renderField, 10, 4);
  }
});

/***/ }),

/***/ "../modules/forms/assets/js/editor/fields/date.js":
/*!********************************************************!*\
  !*** ../modules/forms/assets/js/editor/fields/date.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = elementorModules.editor.utils.Module.extend({
  renderField(inputField, item, i, settings) {
    var itemClasses = _.escape(item.css_classes),
      required = '',
      min = '',
      max = '',
      placeholder = '';
    if (item.required) {
      required = 'required';
    }
    if (item.min_date) {
      min = ' min="' + item.min_date + '"';
    }
    if (item.max_date) {
      max = ' max="' + item.max_date + '"';
    }
    if (item.placeholder) {
      placeholder = ' placeholder="' + item.placeholder + '"';
    }
    if ('yes' === item.use_native_date) {
      itemClasses += ' elementor-use-native';
    }
    return '<input size="1"' + min + max + placeholder + ' pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" type="date" class="elementor-field-textual elementor-date-field elementor-field elementor-size-' + settings.input_size + ' ' + itemClasses + '" name="form_field_' + i + '" id="form_field_' + i + '" ' + required + ' >';
  },
  onInit() {
    elementor.hooks.addFilter('elementor_pro/forms/content_template/field/date', this.renderField, 10, 4);
  }
});

/***/ }),

/***/ "../modules/forms/assets/js/editor/fields/tel.js":
/*!*******************************************************!*\
  !*** ../modules/forms/assets/js/editor/fields/tel.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";


module.exports = elementorModules.editor.utils.Module.extend({
  renderField(inputField, item, i, settings) {
    var itemClasses = _.escape(item.css_classes),
      required = '',
      placeholder = '';
    if (item.required) {
      required = 'required';
    }
    if (item.placeholder) {
      placeholder = ' placeholder="' + item.placeholder + '"';
    }
    itemClasses = 'elementor-field-textual ' + itemClasses;
    return '<input size="1" type="' + item.field_type + '" class="elementor-field-textual elementor-field elementor-size-' + settings.input_size + ' ' + itemClasses + '" name="form_field_' + i + '" id="form_field_' + i + '" ' + required + ' ' + placeholder + ' pattern="[0-9()-]" >';
  },
  onInit() {
    elementor.hooks.addFilter('elementor_pro/forms/content_template/field/tel', this.renderField, 10, 4);
  }
});

/***/ }),

/***/ "../modules/forms/assets/js/editor/fields/time.js":
/*!********************************************************!*\
  !*** ../modules/forms/assets/js/editor/fields/time.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = elementorModules.editor.utils.Module.extend({
  renderField(inputField, item, i, settings) {
    var itemClasses = _.escape(item.css_classes),
      required = '',
      placeholder = '';
    if (item.required) {
      required = 'required';
    }
    if (item.placeholder) {
      placeholder = ' placeholder="' + item.placeholder + '"';
    }
    if ('yes' === item.use_native_time) {
      itemClasses += ' elementor-use-native';
    }
    return '<input size="1" type="time"' + placeholder + ' class="elementor-field-textual elementor-time-field elementor-field elementor-size-' + settings.input_size + ' ' + itemClasses + '" name="form_field_' + i + '" id="form_field_' + i + '" ' + required + ' >';
  },
  onInit() {
    elementor.hooks.addFilter('elementor_pro/forms/content_template/field/time', this.renderField, 10, 4);
  }
});

/***/ }),

/***/ "../modules/forms/assets/js/editor/fields/upload.js":
/*!**********************************************************!*\
  !*** ../modules/forms/assets/js/editor/fields/upload.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";


module.exports = elementorModules.editor.utils.Module.extend({
  renderField(inputField, item, i, settings) {
    var itemClasses = _.escape(item.css_classes),
      required = '',
      multiple = '',
      fieldName = 'form_field_';
    if (item.required) {
      required = 'required';
    }
    if (item.allow_multiple_upload) {
      multiple = ' multiple="multiple"';
      fieldName += '[]';
    }
    return '<input size="1"  type="file" class="elementor-file-field elementor-field elementor-size-' + settings.input_size + ' ' + itemClasses + '" name="' + fieldName + '" id="form_field_' + i + '" ' + required + multiple + ' >';
  },
  onInit() {
    elementor.hooks.addFilter('elementor_pro/forms/content_template/field/upload', this.renderField, 10, 4);
  }
});

/***/ }),

/***/ "../modules/forms/assets/js/editor/hooks/data/form-fields-sanitize-custom-id.js":
/*!**************************************************************************************!*\
  !*** ../modules/forms/assets/js/editor/hooks/data/form-fields-sanitize-custom-id.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.FormFieldsSanitizeCustomId = void 0;
class FormFieldsSanitizeCustomId extends $e.modules.hookData.Dependency {
  ID_SANITIZE_FILTER = /[^\w]/g;
  getCommand() {
    return 'document/elements/settings';
  }
  getId() {
    return 'elementor-pro-forms-fields-sanitize-custom-id';
  }
  getContainerType() {
    return 'repeater';
  }
  getConditions(args) {
    return undefined !== args.settings.custom_id;
  }
  apply(args) {
    const {
        containers = [args.container],
        settings
      } = args,
      // `custom_id` is the control name.
      {
        custom_id: customId
      } = settings;
    if (customId.match(this.ID_SANITIZE_FILTER)) {
      // Re-render with old settings.
      containers.forEach(container => {
        const panelView = container.panel.getControlView('form_fields'),
          currentItemView = panelView.children.findByModel(container.settings),
          idView = currentItemView.children.find(view => 'custom_id' === view.model.get('name'));
        idView.render();
        idView.$el.find('input').trigger('focus');
      });

      // Hook-Break.
      return false;
    }
    return true;
  }
}
exports.FormFieldsSanitizeCustomId = FormFieldsSanitizeCustomId;
var _default = FormFieldsSanitizeCustomId;
exports["default"] = _default;

/***/ }),

/***/ "../modules/forms/assets/js/editor/hooks/data/form-fields-set-custom-id.js":
/*!*********************************************************************************!*\
  !*** ../modules/forms/assets/js/editor/hooks/data/form-fields-set-custom-id.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.FormFieldsSetCustomId = void 0;
class FormFieldsSetCustomId extends $e.modules.hookData.After {
  getCommand() {
    return 'document/repeater/insert';
  }
  getId() {
    return 'elementor-pro-forms-fields-set-custom-id';
  }
  getContainerType() {
    return 'widget';
  }
  getConditions(args) {
    return 'form_fields' === args.name;
  }
  apply(args, model) {
    const {
        containers = [args.container]
      } = args,
      isDuplicate = $e.commands.isCurrentFirstTrace('document/repeater/duplicate');
    containers.forEach(( /** Container */container) => {
      const itemContainer = container.repeaters.form_fields.children.find(childrenContainer => {
        // Sometimes, one of children is {Empty}.
        if (childrenContainer) {
          return model.get('_id') === childrenContainer.id;
        }
        return false;
      });
      if (!isDuplicate && itemContainer.settings.get('custom_id')) {
        return;
      }
      $e.run('document/elements/settings', {
        container: itemContainer,
        settings: {
          custom_id: 'field_' + itemContainer.id
        },
        options: {
          external: true
        }
      });
    });
    return true;
  }
}
exports.FormFieldsSetCustomId = FormFieldsSetCustomId;
var _default = FormFieldsSetCustomId;
exports["default"] = _default;

/***/ }),

/***/ "../modules/forms/assets/js/editor/hooks/data/form-fields-step.js":
/*!************************************************************************!*\
  !*** ../modules/forms/assets/js/editor/hooks/data/form-fields-step.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.FormFieldsAddFirstStep = void 0;
class FormFieldsAddFirstStep extends $e.modules.hookData.After {
  getCommand() {
    return 'document/elements/settings';
  }
  getId() {
    return 'elementor-pro-forms-fields-first-step';
  }
  getContainerType() {
    return 'repeater';
  }
  getConditions(args) {
    const {
      containers = [args.container]
    } = args;
    return 'form' === containers[0].parent.parent.model.get('widgetType') && 'step' === args.settings.field_type;
  }
  apply(args) {
    const {
      containers = [args.container]
    } = args;
    containers.forEach(( /** Container */container) => {
      const firstItem = container.parent.children[0];
      if ('step' === firstItem.settings.get('field_type')) {
        return;
      }
      $e.run('document/repeater/insert', {
        container: container.parent.parent,
        // Widget
        name: 'form_fields',
        model: {
          field_type: 'step'
        },
        options: {
          at: 0,
          external: true
        }
      });
    });
    return true;
  }
}
exports.FormFieldsAddFirstStep = FormFieldsAddFirstStep;
var _default = FormFieldsAddFirstStep;
exports["default"] = _default;

/***/ }),

/***/ "../modules/forms/assets/js/editor/hooks/data/form-sanitize-id.js":
/*!************************************************************************!*\
  !*** ../modules/forms/assets/js/editor/hooks/data/form-sanitize-id.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.FormSanitizeId = void 0;
class FormSanitizeId extends $e.modules.hookData.Dependency {
  ID_SANITIZE_FILTER = /[^\w]/g;
  getCommand() {
    return 'document/elements/settings';
  }
  getId() {
    return 'elementor-pro-forms-sanitize-id';
  }
  getContainerType() {
    return 'widget';
  }
  getConditions(args) {
    return undefined !== args.settings.form_id;
  }
  apply(args) {
    const {
      container,
      settings
    } = args;
    const {
      form_id: formId
    } = settings;

    // Re-render with old settings.
    if (formId.match(this.ID_SANITIZE_FILTER)) {
      const formIdView = container.panel.getControlView('form_id');
      formIdView.render();
      formIdView.$el.find('input').trigger('focus');

      // Hook-Break.
      return false;
    }
    return true;
  }
}
exports.FormSanitizeId = FormSanitizeId;
var _default = FormSanitizeId;
exports["default"] = _default;

/***/ }),

/***/ "../modules/forms/assets/js/editor/hooks/data/index.js":
/*!*************************************************************!*\
  !*** ../modules/forms/assets/js/editor/hooks/data/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "FormFieldsAddFirstStep", ({
  enumerable: true,
  get: function () {
    return _formFieldsStep.FormFieldsAddFirstStep;
  }
}));
Object.defineProperty(exports, "FormFieldsSanitizeCustomId", ({
  enumerable: true,
  get: function () {
    return _formFieldsSanitizeCustomId.FormFieldsSanitizeCustomId;
  }
}));
Object.defineProperty(exports, "FormFieldsSetCustomId", ({
  enumerable: true,
  get: function () {
    return _formFieldsSetCustomId.FormFieldsSetCustomId;
  }
}));
Object.defineProperty(exports, "FormSanitizeId", ({
  enumerable: true,
  get: function () {
    return _formSanitizeId.FormSanitizeId;
  }
}));
var _formFieldsSanitizeCustomId = __webpack_require__(/*! ./form-fields-sanitize-custom-id */ "../modules/forms/assets/js/editor/hooks/data/form-fields-sanitize-custom-id.js");
var _formFieldsSetCustomId = __webpack_require__(/*! ./form-fields-set-custom-id */ "../modules/forms/assets/js/editor/hooks/data/form-fields-set-custom-id.js");
var _formFieldsStep = __webpack_require__(/*! ./form-fields-step */ "../modules/forms/assets/js/editor/hooks/data/form-fields-step.js");
var _formSanitizeId = __webpack_require__(/*! ./form-sanitize-id */ "../modules/forms/assets/js/editor/hooks/data/form-sanitize-id.js");

/***/ }),

/***/ "../modules/forms/assets/js/editor/hooks/index.js":
/*!********************************************************!*\
  !*** ../modules/forms/assets/js/editor/hooks/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _data = __webpack_require__(/*! ./data/ */ "../modules/forms/assets/js/editor/hooks/data/index.js");
Object.keys(_data).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _data[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _data[key];
    }
  });
});
var _ui = __webpack_require__(/*! ./ui/ */ "../modules/forms/assets/js/editor/hooks/ui/index.js");
Object.keys(_ui).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ui[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ui[key];
    }
  });
});

/***/ }),

/***/ "../modules/forms/assets/js/editor/hooks/ui/form-fields-update-shortcode.js":
/*!**********************************************************************************!*\
  !*** ../modules/forms/assets/js/editor/hooks/ui/form-fields-update-shortcode.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.FormFieldsUpdateShortCode = void 0;
class FormFieldsUpdateShortCode extends $e.modules.hookUI.After {
  getCommand() {
    return 'document/elements/settings';
  }
  getId() {
    return 'elementor-pro-forms-fields-update-shortcode';
  }
  getContainerType() {
    return 'repeater';
  }
  getConditions(args) {
    if (!$e.routes.isPartOf('panel/editor') || undefined === args.settings.custom_id) {
      return false;
    }
    return true;
  }
  apply(args) {
    const {
      containers = [args.container]
    } = args;
    containers.forEach(( /** Container */container) => {
      const panelView = container.panel.getControlView('form_fields'),
        currentItemView = panelView.children.find(view => container.id === view.model.get('_id')),
        shortcodeView = currentItemView.children.find(view => 'shortcode' === view.model.get('name'));
      shortcodeView.render();
    });
  }
}
exports.FormFieldsUpdateShortCode = FormFieldsUpdateShortCode;
var _default = FormFieldsUpdateShortCode;
exports["default"] = _default;

/***/ }),

/***/ "../modules/forms/assets/js/editor/hooks/ui/index.js":
/*!***********************************************************!*\
  !*** ../modules/forms/assets/js/editor/hooks/ui/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "FormFieldsUpdateShortCode", ({
  enumerable: true,
  get: function () {
    return _formFieldsUpdateShortcode.FormFieldsUpdateShortCode;
  }
}));
var _formFieldsUpdateShortcode = __webpack_require__(/*! ./form-fields-update-shortcode */ "../modules/forms/assets/js/editor/hooks/ui/form-fields-update-shortcode.js");

/***/ }),

/***/ "../modules/forms/assets/js/editor/integrations/activecampaign.js":
/*!************************************************************************!*\
  !*** ../modules/forms/assets/js/editor/integrations/activecampaign.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var BaseIntegrationModule = __webpack_require__(/*! ./base */ "../modules/forms/assets/js/editor/integrations/base.js");
module.exports = BaseIntegrationModule.extend({
  fields: {},
  getName() {
    return 'activecampaign';
  },
  onElementChange(setting) {
    switch (setting) {
      case 'activecampaign_api_credentials_source':
      case 'activecampaign_api_key':
      case 'activecampaign_api_url':
        this.onApiUpdate();
        break;
      case 'activecampaign_list':
        this.onListUpdate();
        break;
    }
  },
  onApiUpdate() {
    const self = this,
      apikeyControlView = self.getEditorControlView('activecampaign_api_key'),
      apiUrlControlView = self.getEditorControlView('activecampaign_api_url'),
      apiCredControlView = self.getEditorControlView('activecampaign_api_credentials_source');
    if ('default' !== apiCredControlView.getControlValue() && ('' === apikeyControlView.getControlValue() || '' === apiUrlControlView.getControlValue())) {
      self.updateOptions('activecampaign_list', []);
      self.getEditorControlView('activecampaign_list').setValue('');
      return;
    }
    self.addControlSpinner('activecampaign_list');
    const cacheKey = this.getCacheKey({
      controls: [apiCredControlView.getControlValue(), apiUrlControlView.getControlValue(), apikeyControlView.getControlValue()]
    });
    self.getActiveCampaignCache('lists', 'activecampaign_list', cacheKey).done(function (data) {
      self.updateOptions('activecampaign_list', data.lists);
      self.fields = data.fields;
    });
  },
  onListUpdate() {
    this.updateFieldsMapping();
  },
  updateFieldsMapping() {
    var controlView = this.getEditorControlView('activecampaign_list');
    if (!controlView.getControlValue()) {
      return;
    }
    var remoteFields = [{
      remote_label: __('Email', 'elementor'),
      remote_type: 'email',
      remote_id: 'email',
      remote_required: true
    }, {
      remote_label: __('First Name', 'elementor'),
      remote_type: 'text',
      remote_id: 'first_name',
      remote_required: false
    }, {
      remote_label: __('Last Name', 'elementor'),
      remote_type: 'text',
      remote_id: 'last_name',
      remote_required: false
    }, {
      remote_label: __('Phone', 'elementor'),
      remote_type: 'text',
      remote_id: 'phone',
      remote_required: false
    }, {
      remote_label: __('Organization name', 'elementor'),
      remote_type: 'text',
      remote_id: 'orgname',
      remote_required: false
    }];
    for (var field in this.fields) {
      if (Object.prototype.hasOwnProperty.call(this.fields, field)) {
        remoteFields.push(this.fields[field]);
      }
    }
    this.getEditorControlView('activecampaign_fields_map').updateMap(remoteFields);
  },
  getActiveCampaignCache(type, action, cacheKey, requestArgs) {
    if (_.has(this.cache[type], cacheKey)) {
      var data = {};
      data[type] = this.cache[type][cacheKey];
      return jQuery.Deferred().resolve(data);
    }
    requestArgs = _.extend({}, requestArgs, {
      service: 'activecampaign',
      activecampaign_action: action,
      api_key: this.getEditorControlView('activecampaign_api_key').getControlValue(),
      api_url: this.getEditorControlView('activecampaign_api_url').getControlValue(),
      api_cred: this.getEditorControlView('activecampaign_api_credentials_source').getControlValue()
    });
    return this.fetchCache(type, cacheKey, requestArgs);
  }
});

/***/ }),

/***/ "../modules/forms/assets/js/editor/integrations/base.js":
/*!**************************************************************!*\
  !*** ../modules/forms/assets/js/editor/integrations/base.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var ElementEditorModule = __webpack_require__(/*! elementor-pro/editor/element-editor-module */ "../assets/dev/js/editor/element-editor-module.js");
module.exports = ElementEditorModule.extend({
  __construct() {
    this.cache = {};
    ElementEditorModule.prototype.__construct.apply(this, arguments);
  },
  getName() {
    return '';
  },
  getCacheKey(args) {
    return JSON.stringify({
      service: this.getName(),
      data: args
    });
  },
  fetchCache(type, cacheKey, requestArgs) {
    let immediately = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    return elementorPro.ajax.addRequest('forms_panel_action_data', {
      unique_id: 'integrations_' + this.getName(),
      data: requestArgs,
      success: data => {
        this.cache[type] = _.extend({}, this.cache[type]);
        this.cache[type][cacheKey] = data[type];
      }
    }, immediately);
  },
  onInit() {
    this.addSectionListener('section_' + this.getName(), this.onSectionActive);
  },
  onSectionActive() {
    this.onApiUpdate();
  },
  onApiUpdate() {}
});

/***/ }),

/***/ "../modules/forms/assets/js/editor/integrations/convertkit.js":
/*!********************************************************************!*\
  !*** ../modules/forms/assets/js/editor/integrations/convertkit.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var BaseIntegrationModule = __webpack_require__(/*! ./base */ "../modules/forms/assets/js/editor/integrations/base.js");
module.exports = BaseIntegrationModule.extend({
  getName() {
    return 'convertkit';
  },
  onElementChange(setting) {
    switch (setting) {
      case 'convertkit_api_key_source':
      case 'convertkit_custom_api_key':
        this.onApiUpdate();
        break;
      case 'convertkit_form':
        this.onListUpdate();
        break;
    }
  },
  onApiUpdate() {
    var self = this,
      apiKeyControlView = self.getEditorControlView('convertkit_api_key_source'),
      customApikeyControlView = self.getEditorControlView('convertkit_custom_api_key');
    if ('default' !== apiKeyControlView.getControlValue() && '' === customApikeyControlView.getControlValue()) {
      self.updateOptions('convertkit_form', []);
      self.getEditorControlView('convertkit_form').setValue('');
      return;
    }
    self.addControlSpinner('convertkit_form');
    const cacheKey = this.getCacheKey({
      type: 'data',
      controls: [apiKeyControlView.getControlValue(), customApikeyControlView.getControlValue()]
    });
    self.getConvertKitCache('data', 'convertkit_get_forms', cacheKey).done(function (data) {
      self.updateOptions('convertkit_form', data.data.forms);
      self.updateOptions('convertkit_tags', data.data.tags);
    });
  },
  onListUpdate() {
    this.updateFieldsMapping();
  },
  updateFieldsMapping() {
    var controlView = this.getEditorControlView('convertkit_form');
    if (!controlView.getControlValue()) {
      return;
    }
    var remoteFields = [{
      remote_label: __('Email', 'elementor'),
      remote_type: 'email',
      remote_id: 'email',
      remote_required: true
    }, {
      remote_label: __('First Name', 'elementor'),
      remote_type: 'text',
      remote_id: 'first_name',
      remote_required: false
    }];
    this.getEditorControlView('convertkit_fields_map').updateMap(remoteFields);
  },
  getConvertKitCache(type, action, cacheKey, requestArgs) {
    if (_.has(this.cache[type], cacheKey)) {
      var data = {};
      data[type] = this.cache[type][cacheKey];
      return jQuery.Deferred().resolve(data);
    }
    requestArgs = _.extend({}, requestArgs, {
      service: 'convertkit',
      convertkit_action: action,
      api_key: this.getEditorControlView('convertkit_api_key_source').getControlValue(),
      custom_api_key: this.getEditorControlView('convertkit_custom_api_key').getControlValue()
    });
    return this.fetchCache(type, cacheKey, requestArgs);
  }
});

/***/ }),

/***/ "../modules/forms/assets/js/editor/integrations/drip.js":
/*!**************************************************************!*\
  !*** ../modules/forms/assets/js/editor/integrations/drip.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var BaseIntegrationModule = __webpack_require__(/*! ./base */ "../modules/forms/assets/js/editor/integrations/base.js");
module.exports = BaseIntegrationModule.extend({
  getName() {
    return 'drip';
  },
  onElementChange(setting) {
    switch (setting) {
      case 'drip_api_token_source':
      case 'drip_custom_api_token':
        this.onApiUpdate();
        break;
      case 'drip_account':
        this.onDripAccountsUpdate();
        break;
    }
  },
  onApiUpdate() {
    var self = this,
      controlView = self.getEditorControlView('drip_api_token_source'),
      customControlView = self.getEditorControlView('drip_custom_api_token');
    if ('default' !== controlView.getControlValue() && '' === customControlView.getControlValue()) {
      self.updateOptions('drip_account', []);
      self.getEditorControlView('drip_account').setValue('');
      return;
    }
    self.addControlSpinner('drip_account');
    this.getCacheKey({
      type: 'accounts',
      controls: [controlView.getControlValue(), customControlView.getControlValue()]
    });
    self.getDripCache('accounts', 'accounts', controlView.getControlValue()).done(function (data) {
      self.updateOptions('drip_account', data.accounts);
    });
  },
  onDripAccountsUpdate() {
    this.updateFieldsMapping();
  },
  updateFieldsMapping() {
    var controlView = this.getEditorControlView('drip_account');
    if (!controlView.getControlValue()) {
      return;
    }
    var remoteFields = {
      remote_label: __('Email', 'elementor'),
      remote_type: 'email',
      remote_id: 'email',
      remote_required: true
    };
    this.getEditorControlView('drip_fields_map').updateMap([remoteFields]);
  },
  getDripCache(type, action, cacheKey, requestArgs) {
    if (_.has(this.cache[type], cacheKey)) {
      var data = {};
      data[type] = this.cache[type][cacheKey];
      return jQuery.Deferred().resolve(data);
    }
    requestArgs = _.extend({}, requestArgs, {
      service: 'drip',
      drip_action: action,
      api_token: this.getEditorControlView('drip_api_token_source').getControlValue(),
      custom_api_token: this.getEditorControlView('drip_custom_api_token').getControlValue()
    });
    return this.fetchCache(type, cacheKey, requestArgs);
  }
});

/***/ }),

/***/ "../modules/forms/assets/js/editor/integrations/getresponse.js":
/*!*********************************************************************!*\
  !*** ../modules/forms/assets/js/editor/integrations/getresponse.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var BaseIntegrationModule = __webpack_require__(/*! ./base */ "../modules/forms/assets/js/editor/integrations/base.js");
module.exports = BaseIntegrationModule.extend({
  getName() {
    return 'getresponse';
  },
  onElementChange(setting) {
    switch (setting) {
      case 'getresponse_custom_api_key':
      case 'getresponse_api_key_source':
        this.onApiUpdate();
        break;
      case 'getresponse_list':
        this.onGetResonseListUpdate();
        break;
    }
  },
  onApiUpdate() {
    var self = this,
      controlView = self.getEditorControlView('getresponse_api_key_source'),
      customControlView = self.getEditorControlView('getresponse_custom_api_key');
    if ('default' !== controlView.getControlValue() && '' === customControlView.getControlValue()) {
      self.updateOptions('getresponse_list', []);
      self.getEditorControlView('getresponse_list').setValue('');
      return;
    }
    self.addControlSpinner('getresponse_list');
    const cacheKey = this.getCacheKey({
      type: 'lists',
      controls: [controlView.getControlValue(), customControlView.getControlValue()]
    });
    self.getCache('lists', 'lists', cacheKey).done(function (data) {
      self.updateOptions('getresponse_list', data.lists);
    });
  },
  onGetResonseListUpdate() {
    this.updatGetResonseList();
  },
  updatGetResonseList() {
    var self = this,
      controlView = self.getEditorControlView('getresponse_list');
    if (!controlView.getControlValue()) {
      return;
    }
    self.addControlSpinner('getresponse_fields_map');
    const cacheKey = this.getCacheKey({
      type: 'fields',
      controls: [controlView.getControlValue()]
    });
    self.getCache('fields', 'get_fields', cacheKey, {
      getresponse_list: controlView.getControlValue()
    }).done(function (data) {
      self.getEditorControlView('getresponse_fields_map').updateMap(data.fields);
    });
  },
  getCache(type, action, cacheKey, requestArgs) {
    if (_.has(this.cache[type], cacheKey)) {
      var data = {};
      data[type] = this.cache[type][cacheKey];
      return jQuery.Deferred().resolve(data);
    }
    requestArgs = _.extend({}, requestArgs, {
      service: 'getresponse',
      getresponse_action: action,
      api_key: this.getEditorControlView('getresponse_api_key_source').getControlValue(),
      custom_api_key: this.getEditorControlView('getresponse_custom_api_key').getControlValue()
    });
    return this.fetchCache(type, cacheKey, requestArgs);
  },
  onSectionActive() {
    BaseIntegrationModule.prototype.onSectionActive.apply(this, arguments);
    this.updatGetResonseList();
  }
});

/***/ }),

/***/ "../modules/forms/assets/js/editor/integrations/mailchimp.js":
/*!*******************************************************************!*\
  !*** ../modules/forms/assets/js/editor/integrations/mailchimp.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var BaseIntegrationModule = __webpack_require__(/*! ./base */ "../modules/forms/assets/js/editor/integrations/base.js");
module.exports = BaseIntegrationModule.extend({
  getName() {
    return 'mailchimp';
  },
  onElementChange(setting) {
    switch (setting) {
      case 'mailchimp_api_key_source':
      case 'mailchimp_api_key':
        this.onApiUpdate();
        break;
      case 'mailchimp_list':
        this.onMailchimpListUpdate();
        break;
    }
  },
  onApiUpdate() {
    var self = this,
      controlView = self.getEditorControlView('mailchimp_api_key'),
      GlobalApiKeycontrolView = self.getEditorControlView('mailchimp_api_key_source');
    if ('default' !== GlobalApiKeycontrolView.getControlValue() && '' === controlView.getControlValue()) {
      self.updateOptions('mailchimp_list', []);
      self.getEditorControlView('mailchimp_list').setValue('');
      return;
    }

    // Add a spinner to the `Audience` list control.
    self.resetControlIndicators('mailchimp_list');
    self.addControlSpinner('mailchimp_list');
    const cacheKey = this.getCacheKey({
      type: 'lists',
      controls: [controlView.getControlValue(), GlobalApiKeycontrolView.getControlValue()]
    });

    // Fetch data
    self.getMailchimpCache('lists', 'lists', cacheKey).done(function (data) {
      self.updateOptions('mailchimp_list', data.lists);
      self.updatMailchimpList();
    }).fail(function (error) {
      self.addControlError('mailchimp_list', error);
    }).always(function () {
      self.removeControlSpinner('mailchimp_list');
    });
  },
  onMailchimpListUpdate() {
    this.updateOptions('mailchimp_groups', []);
    this.getEditorControlView('mailchimp_groups').setValue('');
    this.updatMailchimpList();
  },
  updatMailchimpList() {
    var self = this,
      controlView = self.getEditorControlView('mailchimp_list');
    if (!controlView.getControlValue()) {
      return;
    }

    // Add a spinner to the groups select box.
    self.resetControlIndicators('mailchimp_groups');
    self.addControlSpinner('mailchimp_groups');
    this.getCacheKey({
      type: 'list_details',
      controls: [controlView.getControlValue()]
    });

    // Fetch The data
    self.getMailchimpCache('list_details', 'list_details', controlView.getControlValue(), {
      mailchimp_list: controlView.getControlValue()
    }).done(function (data) {
      self.updateOptions('mailchimp_groups', data.list_details.groups);
      self.getEditorControlView('mailchimp_fields_map').updateMap(data.list_details.fields);
    }).fail(function (error) {
      self.addControlError('mailchimp_groups', error);
    }).always(function () {
      self.removeControlSpinner('mailchimp_groups');
    });

    // Get list fields.
    // The requests needed to be executed immediately in order to fill the `Field Mapping` select-boxes
    // without waiting for other requests to finish.
    const args = {
      type: 'fields',
      action: 'fields',
      cacheKey: controlView.getControlValue(),
      args: {
        mailchimp_list: controlView.getControlValue()
      },
      immediately: true
    };
    self.getMailchimpCache(...Object.values(args)).done(function (data) {
      self.getEditorControlView('mailchimp_fields_map').updateMap(data.fields);
    });
  },
  getMailchimpCache(type, action, cacheKey, requestArgs) {
    let immediately = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    if (_.has(this.cache[type], cacheKey)) {
      var data = {};
      data[type] = this.cache[type][cacheKey];
      return jQuery.Deferred().resolve(data);
    }
    requestArgs = _.extend({}, requestArgs, {
      service: 'mailchimp',
      mailchimp_action: action,
      api_key: this.getEditorControlView('mailchimp_api_key').getControlValue(),
      use_global_api_key: this.getEditorControlView('mailchimp_api_key_source').getControlValue()
    });
    return this.fetchCache(type, cacheKey, requestArgs, immediately);
  },
  onSectionActive() {
    BaseIntegrationModule.prototype.onSectionActive.apply(this, arguments);
    this.onApiUpdate();
  }
});

/***/ }),

/***/ "../modules/forms/assets/js/editor/integrations/mailerlite.js":
/*!********************************************************************!*\
  !*** ../modules/forms/assets/js/editor/integrations/mailerlite.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


const BaseIntegrationModule = __webpack_require__(/*! ./base */ "../modules/forms/assets/js/editor/integrations/base.js");
module.exports = BaseIntegrationModule.extend({
  fields: {},
  getName() {
    return 'mailerlite';
  },
  onElementChange(setting) {
    switch (setting) {
      case 'mailerlite_api_key_source':
      case 'mailerlite_custom_api_key':
        this.onMailerliteApiKeyUpdate();
        break;
      case 'mailerlite_group':
        this.updateFieldsMapping();
        break;
    }
  },
  onMailerliteApiKeyUpdate() {
    var self = this,
      controlView = self.getEditorControlView('mailerlite_custom_api_key'),
      GlobalApiKeycontrolView = self.getEditorControlView('mailerlite_api_key_source');
    if ('default' !== GlobalApiKeycontrolView.getControlValue() && '' === controlView.getControlValue()) {
      self.updateOptions('mailerlite_group', []);
      self.getEditorControlView('mailerlite_group').setValue('');
      return;
    }
    self.addControlSpinner('mailerlite_group');
    const cacheKey = this.getCacheKey({
      type: 'groups',
      controls: [controlView.getControlValue(), GlobalApiKeycontrolView.getControlValue()]
    });
    self.getMailerliteCache('groups', 'groups', cacheKey).done(function (data) {
      self.updateOptions('mailerlite_group', data.groups);
      self.fields = data.fields;
    });
  },
  updateFieldsMapping() {
    const controlView = this.getEditorControlView('mailerlite_group');
    if (!controlView.getControlValue()) {
      return;
    }
    const remoteFields = [{
      remote_label: __('Email', 'elementor'),
      remote_type: 'email',
      remote_id: 'email',
      remote_required: true
    }, {
      remote_label: __('Name', 'elementor'),
      remote_type: 'text',
      remote_id: 'name',
      remote_required: false
    }, {
      remote_label: __('Last Name', 'elementor'),
      remote_type: 'text',
      remote_id: 'last_name',
      remote_required: false
    }, {
      remote_label: __('Company', 'elementor'),
      remote_type: 'text',
      remote_id: 'company',
      remote_required: false
    }, {
      remote_label: __('Phone', 'elementor'),
      remote_type: 'text',
      remote_id: 'phone',
      remote_required: false
    }, {
      remote_label: __('Country', 'elementor'),
      remote_type: 'text',
      remote_id: 'country',
      remote_required: false
    }, {
      remote_label: __('State', 'elementor'),
      remote_type: 'text',
      remote_id: 'state',
      remote_required: false
    }, {
      remote_label: __('City', 'elementor'),
      remote_type: 'text',
      remote_id: 'city',
      remote_required: false
    }, {
      remote_label: __('Zip', 'elementor'),
      remote_type: 'text',
      remote_id: 'zip',
      remote_required: false
    }];
    for (const field in this.fields) {
      if (Object.prototype.hasOwnProperty.call(this.fields, field)) {
        remoteFields.push(this.fields[field]);
      }
    }
    this.getEditorControlView('mailerlite_fields_map').updateMap(remoteFields);
  },
  getMailerliteCache(type, action, cacheKey, requestArgs) {
    if (_.has(this.cache[type], cacheKey)) {
      const data = {};
      data[type] = this.cache[type][cacheKey];
      return jQuery.Deferred().resolve(data);
    }
    requestArgs = _.extend({}, requestArgs, {
      service: 'mailerlite',
      mailerlite_action: action,
      custom_api_key: this.getEditorControlView('mailerlite_custom_api_key').getControlValue(),
      api_key: this.getEditorControlView('mailerlite_api_key_source').getControlValue()
    });
    return this.fetchCache(type, cacheKey, requestArgs);
  },
  onSectionActive() {
    BaseIntegrationModule.prototype.onSectionActive.apply(this, arguments);
    this.onMailerliteApiKeyUpdate();
  }
});

/***/ }),

/***/ "../modules/forms/assets/js/editor/module.js":
/*!***************************************************!*\
  !*** ../modules/forms/assets/js/editor/module.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _component = _interopRequireDefault(__webpack_require__(/*! ./component */ "../modules/forms/assets/js/editor/component.js"));
class FormsModule extends elementorModules.editor.utils.Module {
  onElementorInit() {
    const ReplyToField = __webpack_require__(/*! ./reply-to-field */ "../modules/forms/assets/js/editor/reply-to-field.js"),
      Recaptcha = __webpack_require__(/*! ./recaptcha */ "../modules/forms/assets/js/editor/recaptcha.js"),
      MailerLite = __webpack_require__(/*! ./integrations/mailerlite */ "../modules/forms/assets/js/editor/integrations/mailerlite.js"),
      Mailchimp = __webpack_require__(/*! ./integrations/mailchimp */ "../modules/forms/assets/js/editor/integrations/mailchimp.js"),
      Drip = __webpack_require__(/*! ./integrations/drip */ "../modules/forms/assets/js/editor/integrations/drip.js"),
      ActiveCampaign = __webpack_require__(/*! ./integrations/activecampaign */ "../modules/forms/assets/js/editor/integrations/activecampaign.js"),
      GetResponse = __webpack_require__(/*! ./integrations/getresponse */ "../modules/forms/assets/js/editor/integrations/getresponse.js"),
      ConvertKit = __webpack_require__(/*! ./integrations/convertkit */ "../modules/forms/assets/js/editor/integrations/convertkit.js");
    this.replyToField = new ReplyToField();
    this.mailchimp = new Mailchimp('form');
    this.recaptcha = new Recaptcha('form');
    this.drip = new Drip('form');
    this.activecampaign = new ActiveCampaign('form');
    this.getresponse = new GetResponse('form');
    this.convertkit = new ConvertKit('form');
    this.mailerlite = new MailerLite('form');

    // Form fields
    const TimeField = __webpack_require__(/*! ./fields/time */ "../modules/forms/assets/js/editor/fields/time.js"),
      DateField = __webpack_require__(/*! ./fields/date */ "../modules/forms/assets/js/editor/fields/date.js"),
      AcceptanceField = __webpack_require__(/*! ./fields/acceptance */ "../modules/forms/assets/js/editor/fields/acceptance.js"),
      UploadField = __webpack_require__(/*! ./fields/upload */ "../modules/forms/assets/js/editor/fields/upload.js"),
      TelField = __webpack_require__(/*! ./fields/tel */ "../modules/forms/assets/js/editor/fields/tel.js");
    this.Fields = {
      time: new TimeField('form'),
      date: new DateField('form'),
      tel: new TelField('form'),
      acceptance: new AcceptanceField('form'),
      upload: new UploadField('form')
    };
    elementor.addControlView('Fields_map', __webpack_require__(/*! ./fields-map-control */ "../modules/forms/assets/js/editor/fields-map-control.js"));
    elementor.addControlView('form-fields-repeater', __webpack_require__(/*! ./fields-repeater-control */ "../modules/forms/assets/js/editor/fields-repeater-control.js"));
  }
  onElementorInitComponents() {
    $e.components.register(new _component.default({
      manager: this
    }));
  }
}
exports["default"] = FormsModule;

/***/ }),

/***/ "../modules/forms/assets/js/editor/recaptcha.js":
/*!******************************************************!*\
  !*** ../modules/forms/assets/js/editor/recaptcha.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


module.exports = elementorModules.editor.utils.Module.extend({
  enqueueRecaptchaJs(url, type) {
    if (!elementorFrontend.elements.$body.find('[src="' + url + '"]').length) {
      elementorFrontend.elements.$body.append('<scr' + 'ipt src="' + url + '" id="recaptcha-' + type + '"</scri' + 'pt>');
    }
  },
  renderField(inputField, item) {
    inputField += '<div class="elementor-field ' + item.field_type + ' ">';
    inputField += this.getDataSettings(item);
    inputField += '</div>';
    return inputField;
  },
  getDataSettings(item) {
    const config = elementorPro.config.forms[item.field_type],
      srcURL = 'https://www.google.com/recaptcha/api.js?render=explicit';
    if (!config.enabled) {
      return '<div class="elementor-alert elementor-alert-info">' + config.setup_message + '</div>';
    }
    let recaptchaData = 'data-sitekey="' + config.site_key + '" data-type="' + config.type + '"';
    switch (config.type) {
      case 'v3':
        recaptchaData += ' data-action="form" data-size="invisible" data-badge="' + item.recaptcha_badge + '"';
        break;
      case 'v2_checkbox':
        recaptchaData += ' data-theme="' + item.recaptcha_style + '"';
        recaptchaData += ' data-size="' + item.recaptcha_size + '"';
        break;
    }
    this.enqueueRecaptchaJs(srcURL, config.type);
    return '<div class="elementor-g-recaptcha' + _.escape(item.css_classes) + '" ' + recaptchaData + '></div>';
  },
  filterItem(item) {
    if ('recaptcha' === item.field_type) {
      item.field_label = false;
    }
    return item;
  },
  onInit() {
    elementor.hooks.addFilter('elementor_pro/forms/content_template/item', this.filterItem);
    elementor.hooks.addFilter('elementor_pro/forms/content_template/field/recaptcha', this.renderField, 10, 2);
    elementor.hooks.addFilter('elementor_pro/forms/content_template/field/recaptcha_v3', this.renderField, 10, 2);
  }
});

/***/ }),

/***/ "../modules/forms/assets/js/editor/reply-to-field.js":
/*!***********************************************************!*\
  !*** ../modules/forms/assets/js/editor/reply-to-field.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var sprintf = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["sprintf"];
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


module.exports = function () {
  var editor, editedModel, replyToControl;
  var setReplyToControl = function () {
    replyToControl = editor.collection.findWhere({
      name: 'email_reply_to'
    });
  };
  var getReplyToView = function () {
    return editor.children.findByModelCid(replyToControl.cid);
  };
  var refreshReplyToElement = function () {
    var replyToView = getReplyToView();
    if (replyToView) {
      replyToView.render();
    }
  };
  var updateReplyToOptions = function () {
    var settingsModel = editedModel.get('settings'),
      emailModels = settingsModel.get('form_fields').where({
        field_type: 'email'
      }),
      emailFields;
    emailModels = _.reject(emailModels, {
      field_label: ''
    });
    emailFields = _.map(emailModels, function (model) {
      return {
        id: model.get('custom_id'),
        label: sprintf(__('%s Field', 'elementor-pro'), model.get('field_label'))
      };
    });
    replyToControl.set('options', {
      '': replyToControl.get('options')['']
    });
    _.each(emailFields, function (emailField) {
      replyToControl.get('options')[emailField.id] = emailField.label;
    });
    refreshReplyToElement();
  };
  var updateDefaultReplyTo = function (settingsModel) {
    replyToControl.get('options')[''] = settingsModel.get('email_from');
    refreshReplyToElement();
  };
  var onFormFieldsChange = function (changedModel) {
    // If it's repeater field
    if (changedModel.get('custom_id')) {
      if ('email' === changedModel.get('field_type')) {
        updateReplyToOptions();
      }
    }
    if (changedModel.changed.email_from) {
      updateDefaultReplyTo(changedModel);
    }
  };
  var onPanelShow = function (panel, model) {
    editor = panel.getCurrentPageView();
    editedModel = model;
    setReplyToControl();
    var settingsModel = editedModel.get('settings');
    settingsModel.on('change', onFormFieldsChange);
    updateDefaultReplyTo(settingsModel);
    updateReplyToOptions();
  };
  var init = function () {
    elementor.hooks.addAction('panel/open_editor/widget/form', onPanelShow);
  };
  init();
};

/***/ }),

/***/ "../modules/global-widget/assets/js/editor/commands-data/index.js":
/*!************************************************************************!*\
  !*** ../modules/global-widget/assets/js/editor/commands-data/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Templates", ({
  enumerable: true,
  get: function () {
    return _templates.Templates;
  }
}));
var _templates = __webpack_require__(/*! ./templates */ "../modules/global-widget/assets/js/editor/commands-data/templates.js");

/***/ }),

/***/ "../modules/global-widget/assets/js/editor/commands-data/templates.js":
/*!****************************************************************************!*\
  !*** ../modules/global-widget/assets/js/editor/commands-data/templates.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.Templates = void 0;
/**
 * Data command: 'document/global/templates', accessing 'global-widget/templates' remote endpoint.
 * Used to get global templates from the backend/cache.
 */
class Templates extends $e.modules.CommandData {
  static getEndpointFormat() {
    return 'global-widget/templates';
  }
  onAfterApply() {
    let args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let result = arguments.length > 1 ? arguments[1] : undefined;
    // TODO: Remove - Manually handling of cache - This behavior should be automatically handled by passed `options` to $e.data.
    $e.data.deleteCache(this.component, 'document/global/global-widget/templates', args.query);
    Object.entries(result.data).forEach(_ref => {
      let [templateID, data] = _ref;
      $e.data.setCache(this.component, `document/global/global-widget/templates/${templateID}`, {}, data);
    });
  }
}
exports.Templates = Templates;
var _default = Templates;
exports["default"] = _default;

/***/ }),

/***/ "../modules/global-widget/assets/js/editor/commands-internal/index.js":
/*!****************************************************************************!*\
  !*** ../modules/global-widget/assets/js/editor/commands-internal/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "SaveTemplates", ({
  enumerable: true,
  get: function () {
    return _saveTemplates.SaveTemplates;
  }
}));
var _saveTemplates = __webpack_require__(/*! ./save-templates */ "../modules/global-widget/assets/js/editor/commands-internal/save-templates.js");

/***/ }),

/***/ "../modules/global-widget/assets/js/editor/commands-internal/save-templates.js":
/*!*************************************************************************************!*\
  !*** ../modules/global-widget/assets/js/editor/commands-internal/save-templates.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.SaveTemplates = void 0;
/**
 * The command should run over all changed global widgets and
 * update the settings of the `document/global/global-widget/templates`,
 * And save cache templates according to the widget(s) which are under the save process.
 */
class SaveTemplates extends $e.modules.CommandInternalBase {
  apply() {
    const templateModels = this.getCurrentTemplatesModels(this.component.changedContainersId);
    if (!templateModels.length) {
      return;
    }
    return new Promise((resolve, reject) => {
      elementorCommon.ajax.addRequest('update_templates', {
        data: {
          templates: templateModels.map(templateModel => {
            // Map it to backend format.
            return {
              id: templateModel.get('id'),
              content: JSON.stringify([templateModel.toJSON()]),
              source: 'local',
              type: 'widget'
            };
          })
        },
        error: reject,
        success: () => {
          /**
           * Since is used `document/global/global-widget/templates` to hold all globals template data.
           * And currently there are no request to update template data on each update of global widget,
           * editing the template will be not synced with The real latest data.
           * In other words, if dont update templates on each save,
           * Then the new created template will be different with the actual (saved) one, so updating the globals template
           * according to saved global widget is the solution.
           */
          // Clear changed containers.
          this.component.changedContainersId = {};
          templateModels.forEach(template => {
            const settings = template.get('settings');
            $e.data.setCache(this.component, `document/global/global-widget/templates/${template.id}`, {}, {
              settings
            });
          });
          resolve(templateModels);
        }
      });
    });
  }
  getCurrentTemplatesModels(changedContainersId) {
    const templatesData = [];
    Object.entries(changedContainersId).forEach(_ref => {
      let [templateID, containerId] = _ref;
      const templateData = $e.data.getCache(this.component, `document/global/global-widget/templates/${templateID}`);
      if (!templateData) {
        if ($e.devTools) {
          $e.devTools.log.warn(`$e.data.getCache( component, \`document/global/global-widget/templates/${templateID}\` ) - not found.`);
        }
      }
      const container = elementor.getContainer(containerId);
      if (!container) {
        return;
      }
      templatesData.push(new Backbone.Model({
        id: templateID,
        elType: 'widget',
        widgetType: container.model.get('widgetType'),
        settings: container.settings.toJSON({
          remove: 'default'
        }),
        templateID
      }));
    });
    return templatesData;
  }
}
exports.SaveTemplates = SaveTemplates;
var _default = SaveTemplates;
exports["default"] = _default;

/***/ }),

/***/ "../modules/global-widget/assets/js/editor/commands/index.js":
/*!*******************************************************************!*\
  !*** ../modules/global-widget/assets/js/editor/commands/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Link", ({
  enumerable: true,
  get: function () {
    return _link.Link;
  }
}));
Object.defineProperty(exports, "Unlink", ({
  enumerable: true,
  get: function () {
    return _unlink.Unlink;
  }
}));
var _link = __webpack_require__(/*! ./link */ "../modules/global-widget/assets/js/editor/commands/link.js");
var _unlink = __webpack_require__(/*! ./unlink */ "../modules/global-widget/assets/js/editor/commands/unlink.js");

/***/ }),

/***/ "../modules/global-widget/assets/js/editor/commands/link.js":
/*!******************************************************************!*\
  !*** ../modules/global-widget/assets/js/editor/commands/link.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.Link = void 0;
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "../node_modules/core-js/modules/es.error.cause.js");
class Link extends $e.modules.document.CommandHistory {
  validateArgs(args) {
    this.requireContainer(args);
    this.requireArgumentConstructor('data', Object, args);
    const {
      containers = [args.container]
    } = args;
    containers.forEach(( /* Container */container) => {
      if ('global' === container.model.get('widgetType')) {
        throw Error(`Invalid container, id: '${container.id}' is already global.`);
      }
    });
  }
  getHistory(args) {
    const {
      data
    } = args;
    return {
      title: elementor.widgetsCache[data.widgetType].title,
      subTitle: data.title,
      type: __('Linked to Global', 'elementor-pro')
    };
  }
  apply(args) {
    const {
      data,
      containers = [args.container]
    } = args;
    containers.forEach(( /** Container */container) => {
      const widgetModel = container.model,
        widgetModelIndex = widgetModel.collection.indexOf(widgetModel);
      data.elType = data.type;
      data.settings = widgetModel.get('settings').attributes;
      data.widgetType = widgetModel.get('widgetType');
      const elementModel = elementorPro.modules.globalWidget.addGlobalWidget(data.template_id, data),
        elementModelAttributes = elementModel.attributes;
      $e.data.setCache(this.component, `document/global/global-widget/templates/${data.template_id}`, {}, data);
      $e.run('document/elements/create', {
        container: container.parent,
        model: {
          id: elementor.helpers.getUniqueID(),
          elType: elementModelAttributes.elType,
          widgetType: elementModelAttributes.widgetType,
          templateID: data.template_id
        },
        options: {
          at: widgetModelIndex
        }
      });
      $e.run('document/elements/delete', {
        container
      });
    });
    $e.route('panel/elements/global');
  }
}
exports.Link = Link;
var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "../modules/global-widget/assets/js/editor/commands/unlink.js":
/*!********************************************************************!*\
  !*** ../modules/global-widget/assets/js/editor/commands/unlink.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.Unlink = void 0;
class Unlink extends $e.modules.document.CommandHistory {
  validateArgs(args) {
    this.requireContainer(args);
  }
  getHistory(args) {
    const {
      containers = [args.container]
    } = args;
    return {
      title: elementor.helpers.getModelLabel(containers[0].model),
      // TODO: add support multi containers.
      type: __('Unlink Widget', 'elementor-pro')
    };
  }
  async apply(args) {
    const {
      containers = [args.container]
    } = args;
    const ids = containers.map(( /** Container */container) => container.model.get('templateID'));
    const {
      data
    } = await $e.data.get('document/global/templates', {
      ids
    });
    containers.forEach(( /** Container */container) => {
      const id = container.model.get('templateID'),
        elementModel = elementorPro.modules.globalWidget.createGlobalModel(id, data[id]);
      $e.run('document/elements/create', {
        container: container.parent,
        model: {
          id: elementor.helpers.getUniqueID(),
          elType: 'widget',
          widgetType: elementModel.get('widgetType'),
          settings: elementorCommon.helpers.cloneObject(elementModel.get('settings').attributes),
          defaultEditSettings: elementorCommon.helpers.cloneObject(elementModel.get('editSettings').attributes)
        },
        options: {
          at: container.model.collection.indexOf(container.model),
          edit: true
        }
      });
      $e.run('document/elements/delete', {
        container
      });
    });
  }
}
exports.Unlink = Unlink;
var _default = Unlink;
exports["default"] = _default;

/***/ }),

/***/ "../modules/global-widget/assets/js/editor/component.js":
/*!**************************************************************!*\
  !*** ../modules/global-widget/assets/js/editor/component.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var commands = _interopRequireWildcard(__webpack_require__(/*! ./commands/ */ "../modules/global-widget/assets/js/editor/commands/index.js"));
var commandsInternal = _interopRequireWildcard(__webpack_require__(/*! ./commands-internal/ */ "../modules/global-widget/assets/js/editor/commands-internal/index.js"));
var commandsData = _interopRequireWildcard(__webpack_require__(/*! ./commands-data/ */ "../modules/global-widget/assets/js/editor/commands-data/index.js"));
var hooks = _interopRequireWildcard(__webpack_require__(/*! ./hooks/ */ "../modules/global-widget/assets/js/editor/hooks/index.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
class Component extends $e.modules.ComponentBase {
  /**
   * Holds all the template ids, which not available due they simply not exist in document data.
   * Those templates will be loaded later after requesting 'panel/elements/global' (global elements panel).
   *
   * @type {Array}
   */
  notLoadedTemplatesIds = [];

  /**
   * Last changed global widget(s).
   *
   * @type {null | Array} Container[]
   */
  lastChangedContainers = null;

  /**
   * Hold unsaved changed container id for each template id.
   *
   * Each settings command that run over global widget, this logic is applied:
   * `changedContainersId[ templateId ] = containerId`.
   *
   * @type {{}}
   */
  changedContainersId = {};
  registerAPI() {
    super.registerAPI();

    // TODO: Remove when route hooks are available.
    $e.routes.on('run:after', (component, route) => {
      if ('panel/elements/global' === route) {
        this.onRoutePanelElementsGlobal();
      }
    });
  }
  getNamespace() {
    return 'document/global';
  }
  defaultCommands() {
    return this.importCommands(commands);
  }
  defaultCommandsInternal() {
    return this.importCommands(commandsInternal);
  }
  defaultData() {
    return this.importCommands(commandsData);
  }
  defaultHooks() {
    return this.importHooks(hooks);
  }
  onRoutePanelElementsGlobal() {
    if (this.notLoadedTemplatesIds.length) {
      $e.data.get('document/global/templates', {
        ids: this.notLoadedTemplatesIds
      }).then(() => {
        // Clear.
        this.notLoadedTemplatesIds = [];
      });
    }
  }

  /**
   * Update each 'Backbone.Model' will handle issue when the global widget saved only in draft.
   * Scenario for better understanding the issue:
   * - Have global widget save with custom color, refresh the editor.
   * - Change it to global global color and save as draft (no update template).
   * - Create another global-widget from same template.
   * - Update one of first global widget that saved in draft to use custom color.
   * - By dependency of only 'container.settings' the new template will have the new custom color,
   *      but new custom color will unseen (since it has global).
   *
   * @param {Object} targetContainer Container class
   */
  updateGlobalsRecursive(targetContainer) {
    const modelsToUpdate = ['dynamic', 'globals', 'settings'];
    elementor.getPreviewContainer().forEachChildrenRecursive(container => {
      // Will skip self.
      if (targetContainer !== container && parseInt(container.model.get('templateID')) === parseInt(targetContainer.model.get('templateID'))) {
        modelsToUpdate.forEach(modelName => {
          const model = targetContainer[modelName];
          if (model instanceof Backbone.Model) {
            const accordingTo = 'settings' === modelName ? targetContainer.settings.attributes : model.changed;
            Object.entries(accordingTo).forEach(_ref => {
              let [key, setting] = _ref;
              container[modelName].set(key, setting);
            });
          }
        });
        container.render();
      }
    });
  }
}
exports["default"] = Component;

/***/ }),

/***/ "../modules/global-widget/assets/js/editor/hooks/data/base-global-widget-prepare-update.js":
/*!*************************************************************************************************!*\
  !*** ../modules/global-widget/assets/js/editor/hooks/data/base-global-widget-prepare-update.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.BaseGlobalWidgetPrepareUpdate = void 0;
/**
 * Hook is responsible for saving last changed global widget and update
 * which containers are needed for updating the template.
 */
class BaseGlobalWidgetPrepareUpdate extends $e.modules.hookData.After {
  getConditions(args) {
    const {
      containers = [args.container]
    } = args;

    // When the container is repeater item it should add the global repeater itself to the `lastChangedContainers` and not the repeater item
    return containers.some(container => {
      var _container$renderer, _container$renderer$m;
      return (_container$renderer = container.renderer) === null || _container$renderer === void 0 ? void 0 : (_container$renderer$m = _container$renderer.model) === null || _container$renderer$m === void 0 ? void 0 : _container$renderer$m.get('templateID');
    });
  }
  apply(args) {
    const {
        containers = [args.container]
      } = args,
      component = $e.components.get('document/global');

    // Filter only the containers that are global widgets. (Can pass multiple containers that some of them global widgets and some of them not).
    const globalWidgetContainers = containers.filter(container => {
      var _container$renderer2, _container$renderer2$;
      return (_container$renderer2 = container.renderer) === null || _container$renderer2 === void 0 ? void 0 : (_container$renderer2$ = _container$renderer2.model) === null || _container$renderer2$ === void 0 ? void 0 : _container$renderer2$.get('templateID');
    });
    component.lastChangedContainers = globalWidgetContainers.map(container => container.renderer);
    globalWidgetContainers.forEach(container => {
      component.changedContainersId[container.renderer.model.get('templateID')] = container.renderer.id;
    });
  }
}
exports.BaseGlobalWidgetPrepareUpdate = BaseGlobalWidgetPrepareUpdate;
var _default = BaseGlobalWidgetPrepareUpdate;
exports["default"] = _default;

/***/ }),

/***/ "../modules/global-widget/assets/js/editor/hooks/data/document/elements/set-settings/global-widget-prepare-update-element-set-settings.js":
/*!************************************************************************************************************************************************!*\
  !*** ../modules/global-widget/assets/js/editor/hooks/data/document/elements/set-settings/global-widget-prepare-update-element-set-settings.js ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.GlobalWidgetPrepareUpdateElementSetSettings = void 0;
var _baseGlobalWidgetPrepareUpdate = __webpack_require__(/*! ../../../base-global-widget-prepare-update */ "../modules/global-widget/assets/js/editor/hooks/data/base-global-widget-prepare-update.js");
/**
 * Hook is responsible for saving last changed global widget and update
 * which containers are needed for updating the template.
 */

class GlobalWidgetPrepareUpdateElementSetSettings extends _baseGlobalWidgetPrepareUpdate.BaseGlobalWidgetPrepareUpdate {
  getCommand() {
    return 'document/elements/set-settings';
  }
  getId() {
    return 'elementor-pro-global-widget-prepare-update-element-set-settings';
  }
}
exports.GlobalWidgetPrepareUpdateElementSetSettings = GlobalWidgetPrepareUpdateElementSetSettings;
var _default = GlobalWidgetPrepareUpdateElementSetSettings;
exports["default"] = _default;

/***/ }),

/***/ "../modules/global-widget/assets/js/editor/hooks/data/document/history/end-log/global-widget-do-update.js":
/*!****************************************************************************************************************!*\
  !*** ../modules/global-widget/assets/js/editor/hooks/data/document/history/end-log/global-widget-do-update.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.GlobalWidgetDoUpdate = void 0;
/**
 * On after all `document/elements/set-settings` has stop, the history mechanism will call to
 * `document/history/end-log` the hook will update all other global widgets according to this last change.
 */
class GlobalWidgetDoUpdate extends $e.modules.hookData.After {
  getCommand() {
    return 'document/history/end-log';
  }
  getId() {
    return 'elementor-pro-global-widget-do-update';
  }
  getConditions() {
    return $e.components.get('document/global').lastChangedContainers;
  }
  apply() {
    const component = $e.components.get('document/global'),
      containers = component.lastChangedContainers;
    containers.forEach(container => component.updateGlobalsRecursive(container));
    component.lastChangedContainers = null;
  }
}
exports.GlobalWidgetDoUpdate = GlobalWidgetDoUpdate;
var _default = GlobalWidgetDoUpdate;
exports["default"] = _default;

/***/ }),

/***/ "../modules/global-widget/assets/js/editor/hooks/data/document/repeater/insert/global-widget-prepare-update-repeater-insert.js":
/*!*************************************************************************************************************************************!*\
  !*** ../modules/global-widget/assets/js/editor/hooks/data/document/repeater/insert/global-widget-prepare-update-repeater-insert.js ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.GlobalWidgetPrepareUpdateRepeaterInsert = void 0;
var _baseGlobalWidgetPrepareUpdate = _interopRequireDefault(__webpack_require__(/*! ../../../base-global-widget-prepare-update */ "../modules/global-widget/assets/js/editor/hooks/data/base-global-widget-prepare-update.js"));
/**
 * Hook is responsible for saving last changed global widget and update
 * which containers are needed for updating the template.
 */

class GlobalWidgetPrepareUpdateRepeaterInsert extends _baseGlobalWidgetPrepareUpdate.default {
  getCommand() {
    return 'document/repeater/insert';
  }
  getId() {
    return 'elementor-pro-global-widget-prepare-update-repeater-insert';
  }
}
exports.GlobalWidgetPrepareUpdateRepeaterInsert = GlobalWidgetPrepareUpdateRepeaterInsert;
var _default = GlobalWidgetPrepareUpdateRepeaterInsert;
exports["default"] = _default;

/***/ }),

/***/ "../modules/global-widget/assets/js/editor/hooks/data/document/repeater/remove/global-widget-prepare-update-repeater-remove.js":
/*!*************************************************************************************************************************************!*\
  !*** ../modules/global-widget/assets/js/editor/hooks/data/document/repeater/remove/global-widget-prepare-update-repeater-remove.js ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.GlobalWidgetPrepareUpdateRepeaterRemove = void 0;
var _baseGlobalWidgetPrepareUpdate = __webpack_require__(/*! ../../../base-global-widget-prepare-update */ "../modules/global-widget/assets/js/editor/hooks/data/base-global-widget-prepare-update.js");
/**
 * Hook is responsible for saving last changed global widget and update
 * which containers are needed for updating the template.
 */

class GlobalWidgetPrepareUpdateRepeaterRemove extends _baseGlobalWidgetPrepareUpdate.BaseGlobalWidgetPrepareUpdate {
  getCommand() {
    return 'document/repeater/remove';
  }
  getId() {
    return 'elementor-pro-global-widget-prepare-update-repeater-remove';
  }
}
exports.GlobalWidgetPrepareUpdateRepeaterRemove = GlobalWidgetPrepareUpdateRepeaterRemove;
var _default = GlobalWidgetPrepareUpdateRepeaterRemove;
exports["default"] = _default;

/***/ }),

/***/ "../modules/global-widget/assets/js/editor/hooks/data/document/save/save/global-widget-save-templates.js":
/*!***************************************************************************************************************!*\
  !*** ../modules/global-widget/assets/js/editor/hooks/data/document/save/save/global-widget-save-templates.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.GlobalWidgetSaveTemplates = void 0;
/**
 * The hook is responsible for updating the global templates, on editor save,
 * hook will run 'document/global/save-templates' to handle the save.
 */
class GlobalWidgetSaveTemplates extends $e.modules.hookData.After {
  getCommand() {
    return 'document/save/save';
  }
  getId() {
    return 'elementor-pro-global-widget-save-templates';
  }
  getConditions(args) {
    if (!Object.keys($e.components.get('document/global').changedContainersId).length) {
      return false;
    }
    const {
      document = elementor.documents.getCurrent()
    } = args;
    return document.config.panel.has_elements && args.status && -1 !== ['private', 'publish'].indexOf(args.status);
  }
  apply() {
    $e.internal('document/global/save-templates');
  }
}
exports.GlobalWidgetSaveTemplates = GlobalWidgetSaveTemplates;
var _default = GlobalWidgetSaveTemplates;
exports["default"] = _default;

/***/ }),

/***/ "../modules/global-widget/assets/js/editor/hooks/data/editor/documents/attach-preview/global-widget-load-templates.js":
/*!****************************************************************************************************************************!*\
  !*** ../modules/global-widget/assets/js/editor/hooks/data/editor/documents/attach-preview/global-widget-load-templates.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.GlobalWidgetLoadTemplates = void 0;
/**
 * Hook responsible to load current active templates ( global widget that are in used ) to `$e.data.cache`,
 * also it tells the component which templates are not active and required to be loaded from the backend.
 */
class GlobalWidgetLoadTemplates extends $e.modules.hookData.After {
  /**
   * Since the hook called on each document load, but requires to run only the initial attach preview.
   *
   * @type {boolean}
   */
  static calledOnce = false;
  initialize() {
    // Since 'initialize' called before the component is registered.
    // TODO: apply this logic at HookBase for '.initialize.
    setTimeout(() => {
      this.component = $e.components.get('document/global');
    });
  }
  getCommand() {
    return 'editor/documents/attach-preview';
  }
  getId() {
    return 'elementor-pro-global-widget-load-templates';
  }
  getConditions() {
    return !GlobalWidgetLoadTemplates.calledOnce;
  }
  apply() {
    GlobalWidgetLoadTemplates.calledOnce = true;
    Object.entries(elementorPro.config.widget_templates).forEach(_ref => {
      let [id, data] = _ref;
      elementorPro.modules.globalWidget.addGlobalWidget(id, data);
      this.addTemplateToCache(id);
    });
  }
  addTemplateToCache(id) {
    const container = elementor.getPreviewContainer().findChildrenRecursive(i => parseInt(i.model.get('templateID')) === parseInt(id));
    if (!container) {
      return this.component.notLoadedTemplatesIds.push(id);
    }
    const args = {
      id: container.model.get('templateID'),
      elType: 'widget',
      widgetType: container.model.get('widgetType'),
      settings: container.settings.toJSON({
        remove: 'default'
      }),
      templateID: container.model.get('templateID')
    };
    $e.data.setCache(this.component, `document/global/global-widget/templates/${id}`, {}, args);
  }
}
exports.GlobalWidgetLoadTemplates = GlobalWidgetLoadTemplates;
var _default = GlobalWidgetLoadTemplates;
exports["default"] = _default;

/***/ }),

/***/ "../modules/global-widget/assets/js/editor/hooks/data/index.js":
/*!*********************************************************************!*\
  !*** ../modules/global-widget/assets/js/editor/hooks/data/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "GlobalWidgetDoUpdate", ({
  enumerable: true,
  get: function () {
    return _globalWidgetDoUpdate.GlobalWidgetDoUpdate;
  }
}));
Object.defineProperty(exports, "GlobalWidgetLoadTemplates", ({
  enumerable: true,
  get: function () {
    return _globalWidgetLoadTemplates.GlobalWidgetLoadTemplates;
  }
}));
Object.defineProperty(exports, "GlobalWidgetPrepareUpdateElementSetSettings", ({
  enumerable: true,
  get: function () {
    return _globalWidgetPrepareUpdateElementSetSettings.GlobalWidgetPrepareUpdateElementSetSettings;
  }
}));
Object.defineProperty(exports, "GlobalWidgetPrepareUpdateRepeaterInsert", ({
  enumerable: true,
  get: function () {
    return _globalWidgetPrepareUpdateRepeaterInsert.GlobalWidgetPrepareUpdateRepeaterInsert;
  }
}));
Object.defineProperty(exports, "GlobalWidgetPrepareUpdateRepeaterRemove", ({
  enumerable: true,
  get: function () {
    return _globalWidgetPrepareUpdateRepeaterRemove.GlobalWidgetPrepareUpdateRepeaterRemove;
  }
}));
Object.defineProperty(exports, "GlobalWidgetSaveTemplates", ({
  enumerable: true,
  get: function () {
    return _globalWidgetSaveTemplates.GlobalWidgetSaveTemplates;
  }
}));
var _globalWidgetPrepareUpdateElementSetSettings = __webpack_require__(/*! ./document/elements/set-settings/global-widget-prepare-update-element-set-settings */ "../modules/global-widget/assets/js/editor/hooks/data/document/elements/set-settings/global-widget-prepare-update-element-set-settings.js");
var _globalWidgetPrepareUpdateRepeaterInsert = __webpack_require__(/*! ./document/repeater/insert/global-widget-prepare-update-repeater-insert */ "../modules/global-widget/assets/js/editor/hooks/data/document/repeater/insert/global-widget-prepare-update-repeater-insert.js");
var _globalWidgetPrepareUpdateRepeaterRemove = __webpack_require__(/*! ./document/repeater/remove/global-widget-prepare-update-repeater-remove */ "../modules/global-widget/assets/js/editor/hooks/data/document/repeater/remove/global-widget-prepare-update-repeater-remove.js");
var _globalWidgetDoUpdate = __webpack_require__(/*! ./document/history/end-log/global-widget-do-update */ "../modules/global-widget/assets/js/editor/hooks/data/document/history/end-log/global-widget-do-update.js");
var _globalWidgetSaveTemplates = __webpack_require__(/*! ./document/save/save/global-widget-save-templates */ "../modules/global-widget/assets/js/editor/hooks/data/document/save/save/global-widget-save-templates.js");
var _globalWidgetLoadTemplates = __webpack_require__(/*! ./editor/documents/attach-preview/global-widget-load-templates */ "../modules/global-widget/assets/js/editor/hooks/data/editor/documents/attach-preview/global-widget-load-templates.js");

/***/ }),

/***/ "../modules/global-widget/assets/js/editor/hooks/index.js":
/*!****************************************************************!*\
  !*** ../modules/global-widget/assets/js/editor/hooks/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _data = __webpack_require__(/*! ./data/ */ "../modules/global-widget/assets/js/editor/hooks/data/index.js");
Object.keys(_data).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _data[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _data[key];
    }
  });
});
var _ui = __webpack_require__(/*! ./ui/ */ "../modules/global-widget/assets/js/editor/hooks/ui/index.js");
Object.keys(_ui).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ui[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ui[key];
    }
  });
});

/***/ }),

/***/ "../modules/global-widget/assets/js/editor/hooks/ui/document/elements/set-settings/global-widget-history-update.js":
/*!*************************************************************************************************************************!*\
  !*** ../modules/global-widget/assets/js/editor/hooks/ui/document/elements/set-settings/global-widget-history-update.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.GlobalWidgetHistoryUpdate = void 0;
/**
 * Since editing of global widget applies changes to the all widgets with the same template id,
 * the same needs to be done on undo/redo.
 */
class GlobalWidgetHistoryUpdate extends $e.modules.hookUI.After {
  getCommand() {
    return 'document/elements/set-settings';
  }
  getId() {
    return 'elementor-pro-global-widget-history-update';
  }
  getContainerType() {
    return 'widget';
  }
  getConditions(args) {
    const {
      containers = [args.container]
    } = args;
    return !elementor.documents.getCurrent().history.getActive() && containers.some(container => container.model.get('templateID'));
  }
  apply(args) {
    const {
      containers = [args.container]
    } = args;
    containers.forEach(container => $e.components.get('document/global').updateGlobalsRecursive(container));
  }
}
exports.GlobalWidgetHistoryUpdate = GlobalWidgetHistoryUpdate;
var _default = GlobalWidgetHistoryUpdate;
exports["default"] = _default;

/***/ }),

/***/ "../modules/global-widget/assets/js/editor/hooks/ui/index.js":
/*!*******************************************************************!*\
  !*** ../modules/global-widget/assets/js/editor/hooks/ui/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "GlobalWidgetHistoryUpdate", ({
  enumerable: true,
  get: function () {
    return _globalWidgetHistoryUpdate.GlobalWidgetHistoryUpdate;
  }
}));
var _globalWidgetHistoryUpdate = __webpack_require__(/*! ./document/elements/set-settings/global-widget-history-update */ "../modules/global-widget/assets/js/editor/hooks/ui/document/elements/set-settings/global-widget-history-update.js");

/***/ }),

/***/ "../modules/global-widget/assets/js/editor/module.js":
/*!***********************************************************!*\
  !*** ../modules/global-widget/assets/js/editor/module.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _component = _interopRequireDefault(__webpack_require__(/*! ./component */ "../modules/global-widget/assets/js/editor/component.js"));
class Module extends elementorModules.editor.utils.Module {
  panelWidgets = new Backbone.Collection();
  addGlobalWidget(templateId, templateData) {
    return this.panelWidgets.add(this.createGlobalModel(templateId, templateData));
  }
  createGlobalModel(templateId, templateData) {
    templateData = Object.assign({}, templateData, {
      id: templateId,
      categories: [],
      icon: elementor.widgetsCache[templateData.widgetType].icon,
      widgetType: templateData.widgetType,
      custom: {
        templateID: templateId
      }
    });
    const elementModel = new elementor.modules.elements.models.Element(templateData);
    elementModel.set('id', templateId);
    return elementModel;
  }
  setWidgetType() {
    elementor.hooks.addFilter('element/view', function (DefaultView, model) {
      if (model.get('templateID')) {
        return (__webpack_require__(/*! ./widget/view */ "../modules/global-widget/assets/js/editor/widget/view.js")["default"]);
      }
      return DefaultView;
    });
    elementor.hooks.addFilter('element/model', function (DefaultModel, attrs) {
      if (attrs.templateID) {
        return (__webpack_require__(/*! ./widget/model */ "../modules/global-widget/assets/js/editor/widget/model.js")["default"]);
      }
      return DefaultModel;
    });
  }
  registerTemplateType() {
    elementor.templates.registerTemplateType('widget', {
      showInLibrary: false,
      saveDialog: {
        title: __('Save your widget as a global widget', 'elementor-pro'),
        description: __('You\'ll be able to add this global widget to multiple areas on your site, and edit it from one single place.', 'elementor-pro')
      },
      prepareSavedData(data) {
        data.widgetType = data.content[0].widgetType;
        return data;
      },
      ajaxParams: {
        success: this.onWidgetTemplateSaved.bind(this)
      }
    });
  }
  addPanelPage() {
    elementor.getPanelView().addPage('globalWidget', {
      view: __webpack_require__(/*! ./views/panel-page */ "../modules/global-widget/assets/js/editor/views/panel-page.js")
    });
  }

  /**
   * @param {string} id - The ID.
   * @deprecated since 3.5.0, use `$e.data.getCache( `document/global/global-widget/templates/${ id }` )` instead.
   */
  getGlobalModels(id) {
    elementorCommon.helpers.softDeprecated('elementorPro.modules.globalWidget.getGlobalModels( id )', '3.5.0', '$e.data.getCache( `document/global/global-widget/templates/${ id }` )');
    return $e.data.getCache(this.component, `document/global/global-widget/templates/${id}`);
  }

  /**
   * @deprecated since 3.5.0, use `$e.internal( 'document/global/save-templates' )` instead.
   */
  saveTemplates() {
    elementorCommon.helpers.softDeprecated('elementorPro.modules.globalWidget.saveTemplates()', '3.5.0', "$e.internal( 'document/global/save-templates' )");
    $e.internal('document/global/save-templates');
  }

  /**
   * @param {*}        globalModel - global model.
   * @param {Function} callback    - A callback function.
   * @deprecated since 3.5.0, use `$e.data.get( 'document/global/templates' )` instead.
   */
  requestGlobalModelSettings(globalModel, callback) {
    elementorCommon.helpers.softDeprecated('elementorPro.modules.globalWidget.requestGlobalModelSettings()', '3.5.0', "$e.data.get( 'document/global/templates' )");
    $e.data.get('document/global/templates', {
      ids: globalModel.id
    }).then(data => {
      callback(data);
    });
  }
  setWidgetContextMenuSaveAction() {
    elementor.hooks.addFilter('elements/widget/contextMenuGroups', (groups, widget) => {
      const saveGroup = _.findWhere(groups, {
        name: 'save'
      });
      if (!saveGroup) {
        return groups;
      }
      const saveAction = _.findWhere(saveGroup.actions, {
        name: 'save'
      });
      saveAction.callback = widget.save.bind(widget);
      delete saveAction.shortcut;
      return groups;
    });
  }
  onElementorInit() {
    elementor.on('panel:init', () => {
      elementor.hooks.addFilter('panel/elements/regionViews', regionViews => {
        _.extend(regionViews.global, {
          view: __webpack_require__(/*! ./views/global-templates-view */ "../modules/global-widget/assets/js/editor/views/global-templates-view.js"),
          options: {
            collection: this.panelWidgets
          }
        });
        return regionViews;
      });
    });
    this.registerTemplateType();
    this.setWidgetContextMenuSaveAction();
    this.setWidgetType();
  }
  onElementorInitComponents() {
    $e.components.register(new _component.default());
    $e.data.get('document/global/templates', {}, {
      refresh: true
    });
  }
  onElementorPreviewLoaded(isFirst) {
    if (!isFirst) {
      return;
    }
    this.addPanelPage();
    $e.routes.register('panel/editor', 'global', args => {
      elementor.getPanelView().setPage('globalWidget', 'Global Editing', {
        editedView: args.view
      });
    });
  }
  onWidgetTemplateSaved(data) {
    elementor.templates.layout.hideModal();
    const container = elementor.getContainer(elementor.templates.layout.modalContent.currentView.model.id);
    $e.run('document/global/link', {
      container,
      data
    });
  }
}
exports["default"] = Module;

/***/ }),

/***/ "../modules/global-widget/assets/js/editor/views/global-templates-view.js":
/*!********************************************************************************!*\
  !*** ../modules/global-widget/assets/js/editor/views/global-templates-view.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = elementor.modules.layouts.panel.pages.elements.views.Elements.extend({
  id: 'elementor-global-templates',
  getEmptyView() {
    if (this.collection.length) {
      return null;
    }
    return __webpack_require__(/*! ./no-templates */ "../modules/global-widget/assets/js/editor/views/no-templates.js");
  },
  onFilterEmpty() {}
});

/***/ }),

/***/ "../modules/global-widget/assets/js/editor/views/no-templates.js":
/*!***********************************************************************!*\
  !*** ../modules/global-widget/assets/js/editor/views/no-templates.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";


var GlobalWidgetsView = elementor.modules.layouts.panel.pages.elements.views.Global;
module.exports = GlobalWidgetsView.extend({
  template: '#tmpl-elementor-panel-global-widget-no-templates',
  id: 'elementor-panel-global-widget-no-templates',
  className: 'elementor-nerd-box elementor-panel-nerd-box e-responsive-panel-stretch'
});

/***/ }),

/***/ "../modules/global-widget/assets/js/editor/views/panel-page.js":
/*!*********************************************************************!*\
  !*** ../modules/global-widget/assets/js/editor/views/panel-page.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


module.exports = Marionette.ItemView.extend({
  id: 'elementor-panel-global-widget',
  template: '#tmpl-elementor-panel-global-widget',
  ui: {
    editButton: '#elementor-global-widget-locked-edit .elementor-button',
    unlinkButton: '#elementor-global-widget-locked-unlink .elementor-button',
    loading: '#elementor-global-widget-loading'
  },
  events: {
    'click @ui.editButton': 'onEditButtonClick',
    'click @ui.unlinkButton': 'onUnlinkButtonClick'
  },
  initialize() {
    this.initUnlinkDialog();
  },
  buildUnlinkDialog() {
    var self = this;
    return elementorCommon.dialogsManager.createWidget('confirm', {
      id: 'elementor-global-widget-unlink-dialog',
      headerMessage: __('Unlink Widget', 'elementor-pro'),
      message: __('This will make the widget stop being global. It\'ll be reverted into being just a regular widget.', 'elementor-pro'),
      position: {
        my: 'center center',
        at: 'center center'
      },
      strings: {
        confirm: __('Unlink', 'elementor-pro'),
        cancel: __('Cancel', 'elementor-pro')
      },
      onConfirm() {
        self.getOption('editedView').unlink();
      }
    });
  },
  initUnlinkDialog() {
    var dialog;
    this.getUnlinkDialog = function () {
      if (!dialog) {
        dialog = this.buildUnlinkDialog();
      }
      return dialog;
    };
  },
  editGlobalModel() {
    var editedView = this.getOption('editedView');
    $e.run('panel/editor/open', {
      model: editedView.getEditModel(),
      view: editedView
    });
  },
  onEditButtonClick() {
    this.editGlobalModel();
  },
  onUnlinkButtonClick() {
    this.getUnlinkDialog().show();
  }
});

/***/ }),

/***/ "../modules/global-widget/assets/js/editor/widget/model.js":
/*!*****************************************************************!*\
  !*** ../modules/global-widget/assets/js/editor/widget/model.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const ElementModel = elementor.modules.elements.models.Element;
class Model extends ElementModel {
  initSettings() {
    // If global widget is created, the settings should come from recent template.
    // The widget that's hold the panel may not have the recent data, the template can be changed during the editing.
    if ($e.commands.is('document/elements/create')) {
      return this.initSettingsFromTemplate();
    }
    super.initSettings();
  }
  initEditSettings() {
    super.initEditSettings();

    // Set default edit tab.
    this.get('editSettings').set('editTab', 'global');
  }
  initSettingsFromTemplate() {
    const id = this.get('templateID'),
      component = $e.components.get('document/global'),
      data = $e.data.getCache(component, `document/global/global-widget/templates/${id}`) || this.attributes,
      elementModel = elementorPro.modules.globalWidget.createGlobalModel(id, data);
    this.set('settings', elementModel.get('settings'));
    elementorFrontend.config.elements.data[this.cid] = this.get('settings');
  }
}
exports["default"] = Model;

/***/ }),

/***/ "../modules/global-widget/assets/js/editor/widget/view.js":
/*!****************************************************************!*\
  !*** ../modules/global-widget/assets/js/editor/widget/view.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const WidgetView = elementor.modules.elements.views.Widget;
class View extends WidgetView {
  className() {
    return super.className() + ' elementor-global-widget elementor-global-' + this.model.get('templateID');
  }
  addInlineEditingAttributes() {
    // See `this.removeInlineAddingAttributes` for more information.
  }
  unlink() {
    $e.run('document/global/unlink', {
      container: this.getContainer()
    });
  }
  onEditRequest() {
    $e.route('panel/editor/global', {
      view: this
    });
  }
  getContextMenuGroups() {
    // Remove 'Save as global' for global widget view.
    return super.getContextMenuGroups().filter(group => 'save' !== group.name);
  }
  getContainer() {
    if (this.container) {
      return this.container;
    }
    const container = super.getContainer();
    container.label = container.label + ' (' + __('global', 'elementor-pro') + ')';
    return container;
  }
  render() {
    super.render();
    setTimeout(this.removeInlineAddingAttributes.bind(this));
  }

  /**
   * The issue is complex:
   * 1. There is a mechanism in the editor which responsible for adding inline the method below: `addInlineEditingAttributes`.
   * 2. There is a mechanism in the backend that adds inline attributes for each widget most of the time.
   *      its effect also the Global-Widget itself, in two ways:
   *      1. global-widget instance is calling to `$this->get_original_element_instance()->render_content();`.
   *          It means that the mechanism in the backend with adds the inline attributes will be triggered.
   *      2. each time you 'leave the editing mode' for most of the widgets it triggers `renderRemoteServer()`,
   *          which sends a request for `remoteRendering` for 'non-global widget' (the server doesn't know that it
   *          was linked to a template), that will trigger the original widget without knowing it's a part of the
   *          global mechanism.
   *          eventually it will trigger the logic of the backend for adding the inline attributes.
   */
  removeInlineAddingAttributes() {
    const globalWidgetElementDom = this.el.querySelector('.elementor-inline-editing');
    if (globalWidgetElementDom) {
      globalWidgetElementDom.classList.remove('elementor-inline-editing');
    }
  }
}
exports["default"] = View;

/***/ }),

/***/ "../modules/library/assets/js/editor.js":
/*!**********************************************!*\
  !*** ../modules/library/assets/js/editor.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = elementorModules.editor.utils.Module.extend({
  onElementorPreviewLoaded() {
    var EditButton = __webpack_require__(/*! ./editor/edit-button */ "../modules/library/assets/js/editor/edit-button.js");
    this.editButton = new EditButton();
  }
});

/***/ }),

/***/ "../modules/library/assets/js/editor/edit-button.js":
/*!**********************************************************!*\
  !*** ../modules/library/assets/js/editor/edit-button.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


module.exports = function () {
  var self = this;
  self.onPanelShow = function (panel) {
    var model = panel.content.currentView.collection.findWhere({
      name: 'template_id'
    });
    self.templateIdView = panel.content.currentView.children.findByModelCid(model.cid);

    // Change Edit link on render & on change template.
    self.templateIdView.elementSettingsModel.on('change', self.onTemplateIdChange);
    self.templateIdView.on('render', self.onTemplateIdChange);
  };
  self.onTemplateIdChange = function () {
    var templateID = self.templateIdView.elementSettingsModel.get('template_id'),
      $editButton = self.templateIdView.$el.find('.elementor-edit-template');
    if (!templateID) {
      $editButton.remove();
      return;
    }
    var editUrl = ElementorConfig.home_url + '?p=' + templateID + '&elementor';
    if ($editButton.length) {
      $editButton.prop('href', editUrl);
    } else {
      $editButton = jQuery('<a />', {
        target: '_blank',
        class: 'elementor-button elementor-edit-template',
        href: editUrl,
        html: '<i class="eicon-pencil" /> ' + __('Edit Template', 'elementor-pro')
      });
      self.templateIdView.$el.find('.elementor-control-input-wrapper').after($editButton);
    }
  };
  self.init = function () {
    elementor.hooks.addAction('panel/open_editor/widget/template', self.onPanelShow);
  };
  self.init();
};

/***/ }),

/***/ "../modules/loop-builder/assets/js/editor/component.js":
/*!*************************************************************!*\
  !*** ../modules/loop-builder/assets/js/editor/component.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var hooks = _interopRequireWildcard(__webpack_require__(/*! ./hooks/ */ "../modules/loop-builder/assets/js/editor/hooks/index.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
class LoopBuilderComponent extends $e.modules.ComponentBase {
  getNamespace() {
    return 'document/loop';
  }
  defaultHooks() {
    return this.importHooks(hooks);
  }
}
exports["default"] = LoopBuilderComponent;

/***/ }),

/***/ "../modules/loop-builder/assets/js/editor/hooks/index.js":
/*!***************************************************************!*\
  !*** ../modules/loop-builder/assets/js/editor/hooks/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "LoopBuilderAddLibraryTab", ({
  enumerable: true,
  get: function () {
    return _addLoopBuildersTab.LoopBuilderAddLibraryTab;
  }
}));
Object.defineProperty(exports, "LoopBuilderRemoveLibraryTab", ({
  enumerable: true,
  get: function () {
    return _removeLoopBuildersTab.LoopBuilderRemoveLibraryTab;
  }
}));
var _addLoopBuildersTab = __webpack_require__(/*! ./ui/editor/documents/open/add-loop-builders-tab */ "../modules/loop-builder/assets/js/editor/hooks/ui/editor/documents/open/add-loop-builders-tab.js");
var _removeLoopBuildersTab = __webpack_require__(/*! ./ui/editor/documents/close/remove-loop-builders-tab */ "../modules/loop-builder/assets/js/editor/hooks/ui/editor/documents/close/remove-loop-builders-tab.js");

/***/ }),

/***/ "../modules/loop-builder/assets/js/editor/hooks/ui/editor/documents/close/remove-loop-builders-tab.js":
/*!************************************************************************************************************!*\
  !*** ../modules/loop-builder/assets/js/editor/hooks/ui/editor/documents/close/remove-loop-builders-tab.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.LoopBuilderRemoveLibraryTab = void 0;
class LoopBuilderRemoveLibraryTab extends $e.modules.hookUI.After {
  getCommand() {
    return 'editor/documents/unload';
  }
  getId() {
    return 'elementor-loop-items-remove-library-tab';
  }
  getConditions(args) {
    var _document$config;
    const {
      document
    } = args;
    return 'loop-item' === (document === null || document === void 0 ? void 0 : (_document$config = document.config) === null || _document$config === void 0 ? void 0 : _document$config.type);
  }
  apply() {
    $e.components.get('library').removeTab('templates/loop-items');
    $e.components.get('library').addTab('templates/blocks');
    $e.components.get('library').addTab('templates/pages');
  }
}
exports.LoopBuilderRemoveLibraryTab = LoopBuilderRemoveLibraryTab;
var _default = LoopBuilderRemoveLibraryTab;
exports["default"] = _default;

/***/ }),

/***/ "../modules/loop-builder/assets/js/editor/hooks/ui/editor/documents/open/add-loop-builders-tab.js":
/*!********************************************************************************************************!*\
  !*** ../modules/loop-builder/assets/js/editor/hooks/ui/editor/documents/open/add-loop-builders-tab.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.LoopBuilderAddLibraryTab = void 0;
class LoopBuilderAddLibraryTab extends $e.modules.hookUI.After {
  getCommand() {
    return 'editor/documents/open';
  }
  getId() {
    return 'elementor-loop-items-add-library-tab';
  }
  getConditions(args) {
    var _elementor$documents, _document$config;
    const document = (_elementor$documents = elementor.documents) === null || _elementor$documents === void 0 ? void 0 : _elementor$documents.get(args.id);
    return 'loop-item' === (document === null || document === void 0 ? void 0 : (_document$config = document.config) === null || _document$config === void 0 ? void 0 : _document$config.type);
  }
  apply() {
    $e.components.get('library').addTab('templates/loop-items', {
      title: __('Loop', 'elementor'),
      filter: {
        source: 'remote',
        type: 'lb',
        subtype: elementor.config.document.settings.settings.source
      }
    }, 0);
    $e.components.get('library').removeTab('templates/blocks');
    $e.components.get('library').removeTab('templates/pages');
  }
}
exports.LoopBuilderAddLibraryTab = LoopBuilderAddLibraryTab;
var _default = LoopBuilderAddLibraryTab;
exports["default"] = _default;

/***/ }),

/***/ "../modules/loop-builder/assets/js/editor/module.js":
/*!**********************************************************!*\
  !*** ../modules/loop-builder/assets/js/editor/module.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _documentHandle = _interopRequireWildcard(__webpack_require__(/*! elementor-pro/preview/utils/document-handle */ "../assets/dev/js/preview/utils/document-handle.js"));
var _component = _interopRequireDefault(__webpack_require__(/*! ./component */ "../modules/loop-builder/assets/js/editor/component.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
class loopBuilderModule extends elementorModules.editor.utils.Module {
  onElementorFrontendInit() {
    elementorFrontend.elements.$body.on('click', '.e-loop-empty-view__box-cta', () => {
      this.createTemplate();
    });
    this.createDocumentSaveHandles();
    elementor.on('document:loaded', this.createDocumentSaveHandles.bind(this));
  }
  createTemplate() {
    setTimeout(() => {
      elementor.getPanelView().getCurrentPageView().activateSection('section_layout')._renderChildren();
      this.getEditorControlView('template_id').createTemplate();
    });
  }
  createDocumentSaveHandles() {
    var _elementorFrontend$co, _elementorFrontend$co2;
    Object.entries((_elementorFrontend$co = elementorFrontend.config) === null || _elementorFrontend$co === void 0 ? void 0 : (_elementorFrontend$co2 = _elementorFrontend$co.elements) === null || _elementorFrontend$co2 === void 0 ? void 0 : _elementorFrontend$co2.data).forEach(_ref => {
      let [cid, element] = _ref;
      const elementData = elementor.getElementData(element);
      if (!(elementData !== null && elementData !== void 0 && elementData.is_loop)) {
        return;
      }
      const templateId = element.attributes.template_id;
      if (!templateId) {
        return;
      }
      const widgetSelector = `.elementor-element[data-model-cid="${cid}"]`,
        editHandleSelector = `[data-elementor-type="loop-item"].elementor-${templateId}`,
        editHandleElement = elementorFrontend.elements.$body.find(`${widgetSelector} ${editHandleSelector}`).first()[0];
      if (editHandleElement) {
        (0, _documentHandle.default)({
          element: editHandleElement,
          id: 0,
          title: '& Back'
        }, _documentHandle.SAVE_CONTEXT, null, '.elementor-' + elementor.config.initial_document.id);
      }
    });
  }
  onElementorLoaded() {
    elementor.on('document:loaded', this.onDocumentLoaded.bind(this));
    elementor.on('document:unload', this.onDocumentUnloaded.bind(this));
    this.onApplySourceChange = this.onApplySourceChange.bind(this);
    this.component = $e.components.register(new _component.default({
      manager: this
    }));
  }
  onDocumentLoaded(document) {
    if (!document.config.theme_builder) {
      return;
    }
    elementor.channels.editor.on('elementorLoopBuilder:ApplySourceChange', this.onApplySourceChange);
  }
  onDocumentUnloaded(document) {
    if (!document.config.theme_builder) {
      return;
    }
    elementor.channels.editor.off('elementorLoopBuilder:ApplySourceChange', this.onApplySourceChange);
  }
  onApplySourceChange() {
    this.saveAndRefresh().then(() => {
      location.reload();
    });
  }
  async saveAndRefresh() {
    await $e.run('document/save/update', {
      force: true
    });
  }
  getCtaStyles() {
    const ctaStyle = document.createElement('link');
    ctaStyle.setAttribute('rel', 'stylesheet');
    ctaStyle.setAttribute('href', `${elementorAppProConfig.baseUrl}/assets/css/loop-grid-cta.css`);
    return ctaStyle;
  }
  getCtaContent(widgetName) {
    const ctaContent = document.createElement('div');
    ctaContent.classList.add('e-loop-empty-view__container', 'elementor-grid', widgetName);
    ctaContent.innerHTML = Marionette.Renderer.render('#tmpl-' + widgetName + '-cta');
    return ctaContent;
  }
}
module.exports = loopBuilderModule;

/***/ }),

/***/ "../modules/motion-fx/assets/js/editor/editor.js":
/*!*******************************************************!*\
  !*** ../modules/motion-fx/assets/js/editor/editor.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class _default extends elementorModules.editor.utils.Module {
  onElementorInit() {
    elementor.on('navigator:init', this.onNavigatorInit.bind(this));
  }
  onNavigatorInit() {
    elementor.navigator.indicators.motionFX = {
      icon: 'flash',
      title: __('Motion Effects', 'elementor-pro'),
      settingKeys: ['motion_fx_motion_fx_scrolling', 'motion_fx_motion_fx_mouse', 'background_motion_fx_motion_fx_scrolling', 'background_motion_fx_motion_fx_mouse'],
      section: 'section_effects'
    };
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/payments/assets/js/editor/module.js":
/*!******************************************************!*\
  !*** ../modules/payments/assets/js/editor/module.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _stripe = _interopRequireDefault(__webpack_require__(/*! ./stripe */ "../modules/payments/assets/js/editor/stripe.js"));
class StripeModule extends elementorModules.editor.utils.Module {
  onElementorInit() {
    this.stripeButton = new _stripe.default('stripe-button');
  }
}
exports["default"] = StripeModule;

/***/ }),

/***/ "../modules/payments/assets/js/editor/stripe.js":
/*!******************************************************!*\
  !*** ../modules/payments/assets/js/editor/stripe.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const ElementEditorModule = __webpack_require__(/*! elementor-pro/editor/element-editor-module */ "../assets/dev/js/editor/element-editor-module.js");
module.exports = ElementEditorModule.extend({
  __construct() {
    ElementEditorModule.prototype.__construct.apply(this, arguments);
  },
  getName() {
    return 'stripe-button';
  },
  onInit() {
    elementor.channels.editor.on('editor:widget:stripe-button:section_stripe_account:activated', this.onSectionActive);
  },
  onSectionActive() {
    return elementorPro.ajax.addRequest('get_stripe_tax_rates', {
      success: data => {
        this.updateOptions('stripe_test_env_tax_rates_list', data.test_api_key);
        this.updateOptions('stripe_live_env_tax_rates_list', data.live_api_key);
      }
    }, true);
  }
});

/***/ }),

/***/ "../modules/popup/assets/js/editor/component.js":
/*!******************************************************!*\
  !*** ../modules/popup/assets/js/editor/component.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var hooks = _interopRequireWildcard(__webpack_require__(/*! ./hooks/ */ "../modules/popup/assets/js/editor/hooks/index.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
class PopupComponent extends $e.modules.ComponentBase {
  /**
   * @type {null|Function}
   */
  onPageSettingsCloseHandler = null;
  getNamespace() {
    return 'document/popup';
  }
  defaultHooks() {
    return this.importHooks(hooks);
  }
}
exports["default"] = PopupComponent;

/***/ }),

/***/ "../modules/popup/assets/js/editor/controls/display-settings.js":
/*!**********************************************************************!*\
  !*** ../modules/popup/assets/js/editor/controls/display-settings.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class _default extends elementorModules.editor.views.ControlsStack {
  constructor() {
    super(...arguments);
    this.template = _.noop;
    this.activeTab = 'content';
    this.listenTo(this.model, 'change', this.onModelChange);
  }
  getNamespaceArray() {
    return ['popup', 'display-settings'];
  }
  className() {
    return super.className() + ' elementor-popup__display-settings';
  }
  toggleGroup(groupName, $groupElement) {
    $groupElement.toggleClass('elementor-active', !!this.model.get(groupName));
  }
  onRenderTemplate() {
    this.activateFirstSection();
  }
  onRender() {
    const name = this.getOption('name');
    let $groupWrapper;
    this.children.each(child => {
      const type = child.model.get('type');
      if ('heading' !== type) {
        if ($groupWrapper) {
          $groupWrapper.append(child.$el);
        }
        return;
      }
      const groupName = child.model.get('name').replace('_heading', '');
      $groupWrapper = jQuery('<div>', {
        id: `elementor-popup__${name}-controls-group--${groupName}`,
        class: 'elementor-popup__display-settings_controls_group'
      });
      const $imageWrapper = jQuery('<div>', {
          class: 'elementor-popup__display-settings_controls_group__icon'
        }),
        $image = jQuery('<img>', {
          src: elementorPro.config.urls.modules + `popup/assets/images/${name}/${groupName}.svg`
        });
      $imageWrapper.html($image);
      $groupWrapper.html($imageWrapper);
      child.$el.before($groupWrapper);
      $groupWrapper.append(child.$el);
      this.toggleGroup(groupName, $groupWrapper);
    });
  }
  onModelChange() {
    const changedControlName = Object.keys(this.model.changed)[0],
      changedControlView = this.getControlViewByName(changedControlName);
    if ('switcher' !== changedControlView.model.get('type')) {
      return;
    }
    this.toggleGroup(changedControlName, changedControlView.$el.parent());
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/popup/assets/js/editor/hooks/data/index.js":
/*!*************************************************************!*\
  !*** ../modules/popup/assets/js/editor/hooks/data/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "PopupSave", ({
  enumerable: true,
  get: function () {
    return _save.PopupSave;
  }
}));
var _save = __webpack_require__(/*! ./save */ "../modules/popup/assets/js/editor/hooks/data/save.js");

/***/ }),

/***/ "../modules/popup/assets/js/editor/hooks/data/save.js":
/*!************************************************************!*\
  !*** ../modules/popup/assets/js/editor/hooks/data/save.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.PopupSave = void 0;
class PopupSave extends $e.modules.hookData.After {
  getCommand() {
    return 'document/save/save';
  }
  getId() {
    return 'elementor-pro-popup-save';
  }
  getConditions() {
    return 'popup' === elementor.config.document.type;
  }
  apply() {
    const settings = {};
    jQuery.each(elementorPro.modules.popup.displaySettingsTypes, (type, data) => {
      settings[type] = data.model.toJSON({
        remove: ['default']
      });
    });
    elementorPro.ajax.addRequest('popup_save_display_settings', {
      data: {
        settings
      }
    });
  }
}
exports.PopupSave = PopupSave;
var _default = PopupSave;
exports["default"] = _default;

/***/ }),

/***/ "../modules/popup/assets/js/editor/hooks/index.js":
/*!********************************************************!*\
  !*** ../modules/popup/assets/js/editor/hooks/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _data = __webpack_require__(/*! ./data/ */ "../modules/popup/assets/js/editor/hooks/data/index.js");
Object.keys(_data).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _data[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _data[key];
    }
  });
});
var _ui = __webpack_require__(/*! ./ui/ */ "../modules/popup/assets/js/editor/hooks/ui/index.js");
Object.keys(_ui).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ui[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ui[key];
    }
  });
});

/***/ }),

/***/ "../modules/popup/assets/js/editor/hooks/ui/editor/documents/close/remove-library-tab.js":
/*!***********************************************************************************************!*\
  !*** ../modules/popup/assets/js/editor/hooks/ui/editor/documents/close/remove-library-tab.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.PopupRemoveLibraryTab = void 0;
class PopupRemoveLibraryTab extends $e.modules.hookUI.After {
  getCommand() {
    return 'editor/documents/unload';
  }
  getId() {
    return 'elementor-pro-popup-remove-library-tab';
  }
  getConditions(args) {
    const {
      document
    } = args;
    return 'popup' === document.config.type;
  }
  apply() {
    $e.components.get('library').removeTab('templates/popups');
  }
}
exports.PopupRemoveLibraryTab = PopupRemoveLibraryTab;
var _default = PopupRemoveLibraryTab;
exports["default"] = _default;

/***/ }),

/***/ "../modules/popup/assets/js/editor/hooks/ui/editor/documents/close/remove-triggers.js":
/*!********************************************************************************************!*\
  !*** ../modules/popup/assets/js/editor/hooks/ui/editor/documents/close/remove-triggers.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.PopupRemoveTriggers = void 0;
class PopupRemoveTriggers extends $e.modules.hookUI.After {
  getCommand() {
    return 'editor/documents/unload';
  }
  getId() {
    return 'elementor-pro-popup-remove-triggers';
  }
  getConditions(args) {
    const {
      document
    } = args;
    return 'popup' === document.config.type;
  }
  apply() {
    this.removePanelFooterSubmenuItems();
    this.removePublishTabs();
  }
  removePanelFooterSubmenuItems() {
    const displaySettingsTypes = elementorPro.modules.popup.displaySettingsTypes;
    jQuery.each(displaySettingsTypes, type => {
      elementor.getPanelView().footer.currentView.removeSubMenuItem('saver-options', {
        name: type
      });
    });
  }
  removePublishTabs() {
    const component = $e.components.get('theme-builder-publish'),
      displaySettingsTypes = elementorPro.modules.popup.displaySettingsTypes;
    jQuery.each(displaySettingsTypes, type => {
      component.removeTab(type);
    });
  }
}
exports.PopupRemoveTriggers = PopupRemoveTriggers;
var _default = PopupRemoveTriggers;
exports["default"] = _default;

/***/ }),

/***/ "../modules/popup/assets/js/editor/hooks/ui/editor/documents/open/add-library-tab.js":
/*!*******************************************************************************************!*\
  !*** ../modules/popup/assets/js/editor/hooks/ui/editor/documents/open/add-library-tab.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.PopupAddLibraryTab = void 0;
class PopupAddLibraryTab extends $e.modules.hookUI.After {
  getCommand() {
    return 'editor/documents/open';
  }
  getId() {
    return 'elementor-pro-popup-add-library-tab';
  }
  getConditions(args) {
    const document = elementor.documents.get(args.id);
    return 'popup' === document.config.type;
  }
  apply() {
    $e.components.get('library').addTab('templates/popups', {
      title: __('Popups', 'elementor-pro'),
      filter: {
        source: 'remote',
        type: 'popup'
      }
    }, 1);
  }
}
exports.PopupAddLibraryTab = PopupAddLibraryTab;
var _default = PopupAddLibraryTab;
exports["default"] = _default;

/***/ }),

/***/ "../modules/popup/assets/js/editor/hooks/ui/editor/documents/open/add-triggers.js":
/*!****************************************************************************************!*\
  !*** ../modules/popup/assets/js/editor/hooks/ui/editor/documents/open/add-triggers.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.PopupAddTriggers = void 0;
var _displaySettings = _interopRequireDefault(__webpack_require__(/*! modules/popup/assets/js/editor/controls/display-settings */ "../modules/popup/assets/js/editor/controls/display-settings.js"));
class PopupAddTriggers extends $e.modules.hookUI.After {
  getCommand() {
    return 'editor/documents/open';
  }
  getId() {
    return 'elementor-pro-popup-add-triggers';
  }
  getConditions(args) {
    const document = elementor.documents.get(args.id);
    return 'popup' === document.config.type;
  }
  apply() {
    if (elementor.panel) {
      this.addUI();
    } else {
      // First open, the panel is not available yet.
      elementor.once('preview:loaded', this.addUI.bind(this));
    }
  }
  addUI() {
    // Since 'addUI' can be called each document load, if 'theme-builder-publish/triggers' exists, the UI already exist.
    if ($e.routes.commands['theme-builder-publish/triggers']) {
      return;
    }
    this.addPanelFooterSubmenuItems();
    this.addPublishTabs();
  }
  addPublishTabs() {
    const config = elementor.config.document.displaySettings,
      component = $e.components.get('theme-builder-publish'),
      module = elementorPro.modules.popup;
    jQuery.each(module.displaySettingsTypes, (type, data) => {
      // Init models for editor save.
      data.model = new elementorModules.editor.elements.models.BaseSettings(config[type].settings, {
        controls: config[type].controls
      });
      component.addTab(type, {
        View: _displaySettings.default,
        viewOptions: {
          name: type,
          id: `elementor-popup-${type}__controls`,
          model: data.model,
          controls: data.model.controls
        },
        name: type,
        title: data.title,
        description: data.publishScreenDescription,
        image: elementorPro.config.urls.modules + `popup/assets/images/${type}-tab.svg`
      });
    });
  }
  addPanelFooterSubmenuItems() {
    const component = $e.components.get('theme-builder-publish'),
      displaySettingsTypes = elementorPro.modules.popup.displaySettingsTypes;
    jQuery.each(displaySettingsTypes, (type, data) => {
      elementor.getPanelView().footer.currentView.addSubMenuItem('saver-options', {
        before: 'save-template',
        name: type,
        icon: data.icon,
        title: data.title,
        callback: () => $e.route(component.getTabRoute(type))
      });
    });
  }
}
exports.PopupAddTriggers = PopupAddTriggers;
var _default = PopupAddTriggers;
exports["default"] = _default;

/***/ }),

/***/ "../modules/popup/assets/js/editor/hooks/ui/index.js":
/*!***********************************************************!*\
  !*** ../modules/popup/assets/js/editor/hooks/ui/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "PopupAddLibraryTab", ({
  enumerable: true,
  get: function () {
    return _addLibraryTab.PopupAddLibraryTab;
  }
}));
Object.defineProperty(exports, "PopupAddTriggers", ({
  enumerable: true,
  get: function () {
    return _addTriggers.PopupAddTriggers;
  }
}));
Object.defineProperty(exports, "PopupRemoveLibraryTab", ({
  enumerable: true,
  get: function () {
    return _removeLibraryTab.PopupRemoveLibraryTab;
  }
}));
Object.defineProperty(exports, "PopupRemoveTriggers", ({
  enumerable: true,
  get: function () {
    return _removeTriggers.PopupRemoveTriggers;
  }
}));
var _addLibraryTab = __webpack_require__(/*! ./editor/documents/open/add-library-tab */ "../modules/popup/assets/js/editor/hooks/ui/editor/documents/open/add-library-tab.js");
var _addTriggers = __webpack_require__(/*! ./editor/documents/open/add-triggers */ "../modules/popup/assets/js/editor/hooks/ui/editor/documents/open/add-triggers.js");
var _removeLibraryTab = __webpack_require__(/*! ./editor/documents/close/remove-library-tab */ "../modules/popup/assets/js/editor/hooks/ui/editor/documents/close/remove-library-tab.js");
var _removeTriggers = __webpack_require__(/*! ./editor/documents/close/remove-triggers */ "../modules/popup/assets/js/editor/hooks/ui/editor/documents/close/remove-triggers.js");

/***/ }),

/***/ "../modules/popup/assets/js/editor/module.js":
/*!***************************************************!*\
  !*** ../modules/popup/assets/js/editor/module.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _component = _interopRequireDefault(__webpack_require__(/*! ./component */ "../modules/popup/assets/js/editor/component.js"));
class PopupModule extends elementorModules.editor.utils.Module {
  constructor() {
    super(...arguments);
    this.displaySettingsTypes = {
      triggers: {
        icon: 'eicon-click',
        title: __('Triggers', 'elementor-pro'),
        publishScreenDescription: __('What action the user needs to do for the popup to open.', 'elementor-pro')
      },
      timing: {
        icon: 'eicon-cog',
        title: __('Advanced Rules', 'elementor-pro'),
        publishScreenDescription: __('Requirements that have to be met for the popup to open.', 'elementor-pro')
      }
    };
  }
  onElementorLoaded() {
    this.component = $e.components.register(new _component.default({
      manager: this
    }));
  }
}
module.exports = PopupModule;

/***/ }),

/***/ "../modules/query-control/assets/js/editor.js":
/*!****************************************************!*\
  !*** ../modules/query-control/assets/js/editor.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = elementorModules.editor.utils.Module.extend({
  onElementorPreviewLoaded() {
    elementor.addControlView('Query', __webpack_require__(/*! ./editor/query-control */ "../modules/query-control/assets/js/editor/query-control.js"));
    __webpack_require__.e(/*! import() */ "modules_query-control_assets_js_editor_template-query-control_js").then(__webpack_require__.bind(__webpack_require__, /*! ./editor/template-query-control */ "../modules/query-control/assets/js/editor/template-query-control.js")).then(_ref => {
      let {
        default: TemplateQueryControl
      } = _ref;
      return elementor.addControlView('template_query', TemplateQueryControl);
    });
  }
});

/***/ }),

/***/ "../modules/query-control/assets/js/editor/query-control.js":
/*!******************************************************************!*\
  !*** ../modules/query-control/assets/js/editor/query-control.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


module.exports = elementor.modules.controls.Select2.extend({
  cache: null,
  isTitlesReceived: false,
  getSelect2Placeholder() {
    return {
      id: '',
      text: __('All', 'elementor-pro')
    };
  },
  getControlValueByName(controlName) {
    const name = this.model.get('group_prefix') + controlName;
    return this.elementSettingsModel.attributes[name];
  },
  getQueryDataDeprecated() {
    return {
      filter_type: this.model.get('filter_type'),
      object_type: this.model.get('object_type'),
      include_type: this.model.get('include_type'),
      query: this.model.get('query')
    };
  },
  getQueryData() {
    // Use a clone to keep model data unchanged:
    const autocomplete = elementorCommon.helpers.cloneObject(this.model.get('autocomplete'));
    if (_.isEmpty(autocomplete.query)) {
      autocomplete.query = {};
    }
    // Specific for Group_Control_Query
    if ('cpt_tax' === autocomplete.object) {
      autocomplete.object = 'tax';
      if (_.isEmpty(autocomplete.query) || _.isEmpty(autocomplete.query.post_type)) {
        autocomplete.query.post_type = this.getControlValueByName('post_type');
      }
    }
    return {
      autocomplete
    };
  },
  getSelect2DefaultOptions() {
    const self = this;
    return jQuery.extend(elementor.modules.controls.Select2.prototype.getSelect2DefaultOptions.apply(this, arguments), {
      ajax: {
        transport(params, success, failure) {
          const bcFormat = !_.isEmpty(self.model.get('filter_type'));
          let data = {},
            action = 'panel_posts_control_filter_autocomplete';
          if (bcFormat) {
            data = self.getQueryDataDeprecated();
            action = 'panel_posts_control_filter_autocomplete_deprecated';
          } else {
            data = self.getQueryData();
          }
          data.q = params.data.q;
          return elementorPro.ajax.addRequest(action, {
            data,
            success,
            error: failure
          });
        },
        data(params) {
          return {
            q: params.term,
            page: params.page
          };
        },
        cache: true
      },
      escapeMarkup(markup) {
        return markup;
      },
      minimumInputLength: 1
    });
  },
  getValueTitles() {
    const self = this,
      data = {},
      bcFormat = !_.isEmpty(this.model.get('filter_type'));
    let ids = this.getControlValue(),
      action = 'query_control_value_titles',
      filterTypeName = 'autocomplete',
      filterType = {};
    if (bcFormat) {
      filterTypeName = 'filter_type';
      filterType = this.model.get(filterTypeName).object;
      data.filter_type = filterType;
      data.object_type = self.model.get('object_type');
      data.include_type = self.model.get('include_type');
      data.unique_id = '' + self.cid + filterType;
      action = 'query_control_value_titles_deprecated';
    } else {
      filterType = this.model.get(filterTypeName).object;
      data.get_titles = self.getQueryData().autocomplete;
      data.unique_id = '' + self.cid + filterType;
    }
    if (!ids || !filterType) {
      return;
    }
    if (!_.isArray(ids)) {
      ids = [ids];
    }
    elementorCommon.ajax.loadObjects({
      action,
      ids,
      data,
      before() {
        self.addControlSpinner();
      },
      success(ajaxData) {
        self.isTitlesReceived = true;
        self.model.set('options', ajaxData);
        self.render();
      }
    });
  },
  addControlSpinner() {
    this.ui.select.prop('disabled', true);
    this.$el.find('.elementor-control-title').after('<span class="elementor-control-spinner">&nbsp;<i class="eicon-spinner eicon-animation-spin"></i>&nbsp;</span>');
  },
  onReady() {
    if (!this.isTitlesReceived) {
      this.getValueTitles();
    }
  }
});

/***/ }),

/***/ "../modules/screenshots/assets/js/editor/component.js":
/*!************************************************************!*\
  !*** ../modules/screenshots/assets/js/editor/component.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var dataHooks = _interopRequireWildcard(__webpack_require__(/*! ./hooks/data */ "../modules/screenshots/assets/js/editor/hooks/data/index.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
class _default extends $e.modules.ComponentBase {
  getNamespace() {
    return 'screenshots';
  }
  defaultHooks() {
    return this.importHooks(dataHooks);
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/screenshots/assets/js/editor/hooks/data/document/save/save/delete-screenshot.js":
/*!**************************************************************************************************!*\
  !*** ../modules/screenshots/assets/js/editor/hooks/data/document/save/save/delete-screenshot.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.DeleteScreenshot = void 0;
class DeleteScreenshot extends $e.modules.hookData.After {
  getCommand() {
    return 'document/save/save';
  }
  getConditions(args) {
    const {
        status
      } = args,
      config = elementor.documents.getCurrent().config;
    return 'publish' === status && config.support_site_editor;
  }
  getId() {
    return 'document/save/save::delete-screenshot';
  }
  apply() {
    const postId = elementor.documents.getCurrent().id;
    return elementorCommon.ajax.addRequest('screenshot_delete', {
      unique_id: `delete_screenshot_${postId}`,
      data: {
        post_id: postId
      }
    });
  }
}
exports.DeleteScreenshot = DeleteScreenshot;
var _default = DeleteScreenshot;
exports["default"] = _default;

/***/ }),

/***/ "../modules/screenshots/assets/js/editor/hooks/data/index.js":
/*!*******************************************************************!*\
  !*** ../modules/screenshots/assets/js/editor/hooks/data/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "DeleteScreenshot", ({
  enumerable: true,
  get: function () {
    return _deleteScreenshot.DeleteScreenshot;
  }
}));
var _deleteScreenshot = __webpack_require__(/*! ./document/save/save/delete-screenshot */ "../modules/screenshots/assets/js/editor/hooks/data/document/save/save/delete-screenshot.js");

/***/ }),

/***/ "../modules/screenshots/assets/js/editor/module.js":
/*!*********************************************************!*\
  !*** ../modules/screenshots/assets/js/editor/module.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _component = _interopRequireDefault(__webpack_require__(/*! ./component */ "../modules/screenshots/assets/js/editor/component.js"));
class Module extends elementorModules.editor.utils.Module {
  onElementorInit() {
    $e.components.register(new _component.default());
  }
}
exports["default"] = Module;

/***/ }),

/***/ "../modules/scroll-snap/assets/js/editor/component.js":
/*!************************************************************!*\
  !*** ../modules/scroll-snap/assets/js/editor/component.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var hooks = _interopRequireWildcard(__webpack_require__(/*! ./hooks/ui */ "../modules/scroll-snap/assets/js/editor/hooks/ui/index.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
class ScrollSnapComponent extends $e.modules.ComponentBase {
  getNamespace() {
    return 'scroll-snap';
  }
  defaultHooks() {
    return this.importHooks(hooks);
  }
}
exports["default"] = ScrollSnapComponent;

/***/ }),

/***/ "../modules/scroll-snap/assets/js/editor/hooks/ui/document/elements/settings/focus-preview.js":
/*!****************************************************************************************************!*\
  !*** ../modules/scroll-snap/assets/js/editor/hooks/ui/document/elements/settings/focus-preview.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.FocusPreview = void 0;
class FocusPreview extends $e.modules.hookData.After {
  getCommand() {
    return 'document/elements/settings';
  }
  getId() {
    return 'focus-preview--document/elements/settings';
  }
  getConditions(args) {
    var _args$settings$scroll;
    return ((_args$settings$scroll = args.settings.scroll_snap_padding) === null || _args$settings$scroll === void 0 ? void 0 : _args$settings$scroll.size) !== '';
  }
  apply() {
    setTimeout(() => {
      elementor.$preview[0].contentWindow.scrollBy(0, 0);
    }, 100);
  }
}
exports.FocusPreview = FocusPreview;
var _default = FocusPreview;
exports["default"] = _default;

/***/ }),

/***/ "../modules/scroll-snap/assets/js/editor/hooks/ui/index.js":
/*!*****************************************************************!*\
  !*** ../modules/scroll-snap/assets/js/editor/hooks/ui/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "FocusPreview", ({
  enumerable: true,
  get: function () {
    return _focusPreview.FocusPreview;
  }
}));
var _focusPreview = __webpack_require__(/*! ./document/elements/settings/focus-preview */ "../modules/scroll-snap/assets/js/editor/hooks/ui/document/elements/settings/focus-preview.js");

/***/ }),

/***/ "../modules/scroll-snap/assets/js/editor/module.js":
/*!*********************************************************!*\
  !*** ../modules/scroll-snap/assets/js/editor/module.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _component = _interopRequireDefault(__webpack_require__(/*! ./component */ "../modules/scroll-snap/assets/js/editor/component.js"));
class Module extends elementorModules.editor.utils.Module {
  /**
   * Init
   */
  onInit() {
    super.onInit();
    $e.components.register(new _component.default());
  }
}
exports["default"] = Module;

/***/ }),

/***/ "../modules/share-buttons/assets/js/editor/editor.js":
/*!***********************************************************!*\
  !*** ../modules/share-buttons/assets/js/editor/editor.js ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";


module.exports = elementorModules.editor.utils.Module.extend({
  config: elementorPro.config.shareButtonsNetworks,
  networksClassDictionary: {
    google: 'fab fa-google-plus',
    pocket: 'fab fa-get-pocket',
    email: 'fas fa-envelope',
    print: 'fas fa-print'
  },
  getNetworkClass(networkName) {
    let networkClass = this.networksClassDictionary[networkName] || 'fab fa-' + networkName;
    if (elementor.config.icons_update_needed) {
      networkClass = 'fa ' + networkClass;
    }
    return networkClass;
  },
  getNetworkTitle(buttonSettings) {
    var _this$getNetworkData;
    // BC for items that are already selected and have been removed from the options list.
    return buttonSettings.text || ((_this$getNetworkData = this.getNetworkData(buttonSettings)) === null || _this$getNetworkData === void 0 ? void 0 : _this$getNetworkData.title);
  },
  getNetworkData(buttonSettings) {
    return this.config[buttonSettings.button];
  },
  hasCounter(networkName, settings) {
    return 'icon' !== settings.view && 'yes' === settings.show_counter && this.config[networkName].has_counter;
  }
});

/***/ }),

/***/ "../modules/theme-builder/assets/js/editor/conditions/repeater-row.js":
/*!****************************************************************************!*\
  !*** ../modules/theme-builder/assets/js/editor/conditions/repeater-row.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = elementor.modules.controls.RepeaterRow.extend({
  template: '#tmpl-elementor-theme-builder-conditions-repeater-row',
  childViewContainer: '.elementor-theme-builder-conditions-repeater-row-controls',
  conflictCheckedOnFirstRender: false,
  id() {
    return 'elementor-condition-id-' + this.model.get('_id');
  },
  onBeforeRender() {
    var subNameModel = this.collection.findWhere({
        name: 'sub_name'
      }),
      subIdModel = this.collection.findWhere({
        name: 'sub_id'
      }),
      subConditionConfig = this.config.conditions[this.model.attributes.sub_name];
    subNameModel.attributes.groups = this.getOptions();
    if (subConditionConfig && subConditionConfig.controls) {
      _(subConditionConfig.controls).each(function (control) {
        subIdModel.set(control);
        subIdModel.set('name', 'sub_id');
      });
    }
  },
  initialize() {
    elementor.modules.controls.RepeaterRow.prototype.initialize.apply(this, arguments);
    this.config = elementor.config.document.theme_builder;
  },
  updateOptions() {
    if (this.model.changed.name) {
      this.model.set({
        sub_name: '',
        sub_id: ''
      });
    }
    if (this.model.changed.name || this.model.changed.sub_name) {
      this.model.set('sub_id', '', {
        silent: true
      });
      var subIdModel = this.collection.findWhere({
        name: 'sub_id'
      });
      subIdModel.set({
        type: 'select',
        options: {
          '': 'All'
        }
      });
      this.render();
    }
    if (this.model.changed.type) {
      this.setTypeAttribute();
    }
  },
  getOptions() {
    var self = this,
      conditionConfig = self.config.conditions[this.model.get('name')];
    if (!conditionConfig) {
      return;
    }
    var options = {
      '': conditionConfig.all_label
    };
    _(conditionConfig.sub_conditions).each(function (conditionId, conditionIndex) {
      var subConditionConfig = self.config.conditions[conditionId],
        group;
      if (!subConditionConfig) {
        return;
      }
      if (subConditionConfig.sub_conditions.length) {
        group = {
          label: subConditionConfig.label,
          options: {}
        };
        group.options[conditionId] = subConditionConfig.all_label;
        _(subConditionConfig.sub_conditions).each(function (subConditionId) {
          group.options[subConditionId] = self.config.conditions[subConditionId].label;
        });

        // Use a sting key - to keep order
        options['key' + conditionIndex] = group;
      } else {
        options[conditionId] = subConditionConfig.label;
      }
    });
    return options;
  },
  setTypeAttribute() {
    var typeView = this.children.findByModel(this.collection.findWhere({
      name: 'type'
    }));
    typeView.$el.attr('data-elementor-condition-type', typeView.getControlValue());
  },
  // Moved from `modules/theme-builder/assets/js/editor/conditions/repeater.js`.
  checkConflicts() {
    var modelId = this.model.get('_id'),
      rowId = 'elementor-condition-id-' + modelId,
      errorMessageId = 'elementor-conditions-conflict-message-' + modelId,
      $error = jQuery('#' + errorMessageId);

    // On render - the row isn't exist, so don't cache it.
    jQuery('#' + rowId).removeClass('elementor-error');
    $error.remove();
    elementorPro.ajax.addRequest('theme_builder_conditions_check_conflicts', {
      unique_id: rowId,
      data: {
        condition: this.model.toJSON()
      },
      success(data) {
        if (!_.isEmpty(data)) {
          jQuery('#' + rowId).addClass('elementor-error').after('<div id="' + errorMessageId + '" class="elementor-conditions-conflict-message">' + data + '</div>');
        }
      }
    });
  },
  onRender() {
    var nameModel = this.collection.findWhere({
        name: 'name'
      }),
      subNameModel = this.collection.findWhere({
        name: 'sub_name'
      }),
      subIdModel = this.collection.findWhere({
        name: 'sub_id'
      }),
      nameView = this.children.findByModel(nameModel),
      subNameView = this.children.findByModel(subNameModel),
      subIdView = this.children.findByModel(subIdModel),
      conditionConfig = this.config.conditions[this.model.attributes.name],
      subConditionConfig = this.config.conditions[this.model.attributes.sub_name],
      typeConfig = this.config.types[this.config.settings.template_type];
    if (typeConfig.condition_type === nameView.getControlValue() && 'general' !== nameView.getControlValue() && !_.isEmpty(conditionConfig.sub_conditions)) {
      nameView.$el.hide();
    }
    if (!conditionConfig || _.isEmpty(conditionConfig.sub_conditions) && _.isEmpty(conditionConfig.controls) || !nameView.getControlValue() || 'general' === nameView.getControlValue()) {
      subNameView.$el.hide();
    }
    if (!subConditionConfig || _.isEmpty(subConditionConfig.controls) || !subNameView.getControlValue()) {
      subIdView.$el.hide();
    }

    // Avoid set a `single` for a-l-l singular types. (conflicted with 404 & custom cpt like Shops and Events plugins).
    if ('singular' === typeConfig.condition_type) {
      if ('' === subNameView.getControlValue()) {
        subNameView.setValue('post');
      }
    }
    this.setTypeAttribute();
    if (!this.conflictCheckedOnFirstRender) {
      this.checkConflicts();
      this.conflictCheckedOnFirstRender = true;
    }
  },
  onModelChange() {
    this.updateOptions();
    this.checkConflicts();
  }
});

/***/ }),

/***/ "../modules/theme-builder/assets/js/editor/conditions/repeater.js":
/*!************************************************************************!*\
  !*** ../modules/theme-builder/assets/js/editor/conditions/repeater.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _repeaterRow = _interopRequireDefault(__webpack_require__(/*! ./repeater-row */ "../modules/theme-builder/assets/js/editor/conditions/repeater-row.js"));
module.exports = elementor.modules.controls.Repeater.extend({
  childView: _repeaterRow.default,
  updateActiveRow() {},
  initialize() {
    elementor.modules.controls.Repeater.prototype.initialize.apply(this, arguments);
    this.config = elementor.config.document.theme_builder;
    this.updateConditionsOptions(this.config.settings.template_type);
  },
  updateConditionsOptions(templateType) {
    var self = this,
      conditionType = self.config.types[templateType].condition_type,
      options = {};
    _([conditionType]).each(function (conditionId, conditionIndex) {
      var conditionConfig = self.config.conditions[conditionId],
        group = {
          label: conditionConfig.label,
          options: {}
        };
      group.options[conditionId] = conditionConfig.all_label;
      _(conditionConfig.sub_conditions).each(function (subConditionId) {
        group.options[subConditionId] = self.config.conditions[subConditionId].label;
      });
      options[conditionIndex] = group;
    });
    var fields = this.model.get('fields');
    fields[1].default = conditionType;
    if ('general' === conditionType) {
      fields[1].groups = options;
    } else {
      fields[2].groups = options;
    }
  },
  onRender() {
    this.ui.btnAddRow.text(__('Add Condition', 'elementor-pro'));
  }
});

/***/ }),

/***/ "../modules/theme-builder/assets/js/editor/conditions/view.js":
/*!********************************************************************!*\
  !*** ../modules/theme-builder/assets/js/editor/conditions/view.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var inlineControlsStack = __webpack_require__(/*! elementor-pro/editor/inline-controls-stack.js */ "../assets/dev/js/editor/inline-controls-stack.js");
module.exports = inlineControlsStack.extend({
  id: 'elementor-theme-builder-conditions-view',
  template: '#tmpl-elementor-theme-builder-conditions-view',
  childViewContainer: '#elementor-theme-builder-conditions-controls',
  childViewOptions() {
    return {
      elementSettingsModel: this.model
    };
  }
});

/***/ }),

/***/ "../modules/theme-builder/assets/js/editor/hooks/data/document/elements/settings/index.js":
/*!************************************************************************************************!*\
  !*** ../modules/theme-builder/assets/js/editor/hooks/data/document/elements/settings/index.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "ThemeBuilderSaveAndReload", ({
  enumerable: true,
  get: function () {
    return _saveAndReload.ThemeBuilderSaveAndReload;
  }
}));
Object.defineProperty(exports, "ThemeBuilderUpdatePreviewOptions", ({
  enumerable: true,
  get: function () {
    return _updatePreviewOptions.ThemeBuilderUpdatePreviewOptions;
  }
}));
var _saveAndReload = __webpack_require__(/*! ./save-and-reload */ "../modules/theme-builder/assets/js/editor/hooks/data/document/elements/settings/save-and-reload.js");
var _updatePreviewOptions = __webpack_require__(/*! ./update-preview-options */ "../modules/theme-builder/assets/js/editor/hooks/data/document/elements/settings/update-preview-options.js");

/***/ }),

/***/ "../modules/theme-builder/assets/js/editor/hooks/data/document/elements/settings/save-and-reload.js":
/*!**********************************************************************************************************!*\
  !*** ../modules/theme-builder/assets/js/editor/hooks/data/document/elements/settings/save-and-reload.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.ThemeBuilderSaveAndReload = void 0;
/**
 * Hook fired when template: 'single' page layout changed.
 */
class ThemeBuilderSaveAndReload extends $e.modules.hookData.After {
  getCommand() {
    return 'document/elements/settings';
  }
  getId() {
    return 'elementor-pro-theme-builder-save-and-reload';
  }
  getContainerType() {
    return 'document';
  }
  getConditions(args) {
    return args.settings && args.settings.page_template;
  }
  apply() {
    $e.run('document/save/auto', {
      force: true,
      onSuccess: () => {
        elementor.reloadPreview();
        elementor.once('preview:loaded', () => {
          $e.route('panel/page-settings/settings');
        });
      }
    });
  }
}
exports.ThemeBuilderSaveAndReload = ThemeBuilderSaveAndReload;
var _default = ThemeBuilderSaveAndReload;
exports["default"] = _default;

/***/ }),

/***/ "../modules/theme-builder/assets/js/editor/hooks/data/document/elements/settings/update-preview-options.js":
/*!*****************************************************************************************************************!*\
  !*** ../modules/theme-builder/assets/js/editor/hooks/data/document/elements/settings/update-preview-options.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.ThemeBuilderUpdatePreviewOptions = void 0;
class ThemeBuilderUpdatePreviewOptions extends $e.modules.hookData.After {
  getCommand() {
    return 'document/elements/settings';
  }
  getId() {
    return 'elementor-pro-theme-builder-update-preview-options';
  }
  getContainerType() {
    return 'document';
  }
  getConditions(args) {
    return args.settings && args.settings.preview_type;
  }
  apply(args) {
    const {
        containers = [args.container]
      } = args,
      {
        themeBuilder
      } = elementorPro.modules;
    $e.run('document/elements/settings', {
      containers,
      settings: {
        preview_id: '',
        preview_search_term: ''
      }
    });
    if ($e.routes.is('panel/page-settings/settings')) {
      themeBuilder.updatePreviewIdOptions(true);
    }
  }
}
exports.ThemeBuilderUpdatePreviewOptions = ThemeBuilderUpdatePreviewOptions;
var _default = ThemeBuilderUpdatePreviewOptions;
exports["default"] = _default;

/***/ }),

/***/ "../modules/theme-builder/assets/js/editor/hooks/data/document/save/save-conditions.js":
/*!*********************************************************************************************!*\
  !*** ../modules/theme-builder/assets/js/editor/hooks/data/document/save/save-conditions.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.ThemeBuilderSaveConditions = void 0;
class ThemeBuilderSaveConditions extends $e.modules.hookData.After {
  getCommand() {
    return 'document/save/save';
  }
  getId() {
    return 'elementor-pro-theme-builder-save-conditions';
  }
  getConditions() {
    return !!elementor.config.document.theme_builder;
  }
  apply() {
    const {
      conditionsModel
    } = elementorPro.modules.themeBuilder;
    elementorPro.ajax.addRequest('theme_builder_save_conditions', {
      data: conditionsModel.toJSON({
        remove: ['default']
      }),
      success: () => {
        elementor.config.document.theme_builder.settings.conditions = conditionsModel.get('conditions');
      }
    });
  }
}
exports.ThemeBuilderSaveConditions = ThemeBuilderSaveConditions;
var _default = ThemeBuilderSaveConditions;
exports["default"] = _default;

/***/ }),

/***/ "../modules/theme-builder/assets/js/editor/hooks/data/document/save/show-conditions.js":
/*!*********************************************************************************************!*\
  !*** ../modules/theme-builder/assets/js/editor/hooks/data/document/save/show-conditions.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.ThemeBuilderShowConditions = void 0;
class ThemeBuilderShowConditions extends $e.modules.hookData.Dependency {
  getCommand() {
    return 'document/save/default';
  }
  getId() {
    return 'elementor-pro-theme-builder-show-conditions';
  }
  getConditions(args) {
    const {
      force = false
    } = args;

    // If force save, do not show conditions.
    if (force) {
      return false;
    }
    let showConditions = false;
    const themeBuilder = elementor.config.document.theme_builder;
    if (themeBuilder) {
      const hasConditions = themeBuilder.settings.conditions.length,
        hasLocation = themeBuilder.settings.location,
        isDraft = 'draft' === elementor.settings.page.model.get('post_status');
      if (hasLocation && (!hasConditions || isDraft)) {
        showConditions = true;
      }
    }
    return showConditions;
  }
  apply() {
    $e.route('theme-builder-publish/conditions');
    return false; // HookBreak.
  }
}
exports.ThemeBuilderShowConditions = ThemeBuilderShowConditions;
var _default = ThemeBuilderShowConditions;
exports["default"] = _default;

/***/ }),

/***/ "../modules/theme-builder/assets/js/editor/hooks/data/editor/documents/preview/preview-break.js":
/*!******************************************************************************************************!*\
  !*** ../modules/theme-builder/assets/js/editor/hooks/data/editor/documents/preview/preview-break.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.ThemeBuilderPreviewBreak = void 0;
class ThemeBuilderPreviewBreak extends $e.modules.hookData.Dependency {
  getCommand() {
    return 'editor/documents/preview';
  }
  getId() {
    return 'elementor-pro-theme-builder-preview-break';
  }
  getConditions(args) {
    // If preview is forced, do not break it.
    if (args.force) {
      return false;
    }
    return !!elementor.documents.get(args.id).config.theme_builder;
  }
  apply() {
    return false; // HookBreak.
  }
}
exports.ThemeBuilderPreviewBreak = ThemeBuilderPreviewBreak;
var _default = ThemeBuilderPreviewBreak;
exports["default"] = _default;

/***/ }),

/***/ "../modules/theme-builder/assets/js/editor/hooks/data/index.js":
/*!*********************************************************************!*\
  !*** ../modules/theme-builder/assets/js/editor/hooks/data/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  ThemeBuilderSaveConditions: true,
  ThemeBuilderShowConditions: true,
  ThemeBuilderPreviewBreak: true
};
Object.defineProperty(exports, "ThemeBuilderPreviewBreak", ({
  enumerable: true,
  get: function () {
    return _previewBreak.ThemeBuilderPreviewBreak;
  }
}));
Object.defineProperty(exports, "ThemeBuilderSaveConditions", ({
  enumerable: true,
  get: function () {
    return _saveConditions.ThemeBuilderSaveConditions;
  }
}));
Object.defineProperty(exports, "ThemeBuilderShowConditions", ({
  enumerable: true,
  get: function () {
    return _showConditions.ThemeBuilderShowConditions;
  }
}));
var _settings = __webpack_require__(/*! ./document/elements/settings */ "../modules/theme-builder/assets/js/editor/hooks/data/document/elements/settings/index.js");
Object.keys(_settings).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _settings[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _settings[key];
    }
  });
});
var _saveConditions = __webpack_require__(/*! ./document/save/save-conditions */ "../modules/theme-builder/assets/js/editor/hooks/data/document/save/save-conditions.js");
var _showConditions = __webpack_require__(/*! ./document/save/show-conditions */ "../modules/theme-builder/assets/js/editor/hooks/data/document/save/show-conditions.js");
var _previewBreak = __webpack_require__(/*! ./editor/documents/preview/preview-break */ "../modules/theme-builder/assets/js/editor/hooks/data/editor/documents/preview/preview-break.js");

/***/ }),

/***/ "../modules/theme-builder/assets/js/editor/hooks/index.js":
/*!****************************************************************!*\
  !*** ../modules/theme-builder/assets/js/editor/hooks/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _data = __webpack_require__(/*! ./data/ */ "../modules/theme-builder/assets/js/editor/hooks/data/index.js");
Object.keys(_data).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _data[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _data[key];
    }
  });
});
var _ui = __webpack_require__(/*! ./ui/ */ "../modules/theme-builder/assets/js/editor/hooks/ui/index.js");
Object.keys(_ui).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ui[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ui[key];
    }
  });
});

/***/ }),

/***/ "../modules/theme-builder/assets/js/editor/hooks/ui/editor/document/elements/settings/toggle-menu-conditions.js":
/*!**********************************************************************************************************************!*\
  !*** ../modules/theme-builder/assets/js/editor/hooks/ui/editor/document/elements/settings/toggle-menu-conditions.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.ThemeBuilderToggleMenuConditions = void 0;
class ThemeBuilderToggleMenuConditions extends $e.modules.hookUI.After {
  getCommand() {
    return 'document/elements/settings';
  }
  getId() {
    return 'elementor-pro-theme-builder-toggle-menu-conditions';
  }
  getContainerType() {
    return 'document';
  }
  getConditions(args) {
    return args.settings && args.settings.location;
  }
  apply() {
    const {
      themeBuilder
    } = elementorPro.modules;
    themeBuilder.ui.menuConditions.toggle(!!elementor.config.document.theme_builder.settings.location);
  }
}
exports.ThemeBuilderToggleMenuConditions = ThemeBuilderToggleMenuConditions;
var _default = ThemeBuilderToggleMenuConditions;
exports["default"] = _default;

/***/ }),

/***/ "../modules/theme-builder/assets/js/editor/hooks/ui/editor/documents/close/remove-editor-ui.js":
/*!*****************************************************************************************************!*\
  !*** ../modules/theme-builder/assets/js/editor/hooks/ui/editor/documents/close/remove-editor-ui.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.ThemeBuilderRemoveEditorUI = void 0;
class ThemeBuilderRemoveEditorUI extends $e.modules.hookUI.After {
  getCommand() {
    return 'editor/documents/unload';
  }
  getId() {
    return 'elementor-pro-theme-builder-remove-editor-ui';
  }
  getConditions(args) {
    const {
      document
    } = args;
    return document.config.theme_builder;
  }
  apply() {
    this.removePanelFooterSubmenuItems();
    this.removePublishTabs();
  }
  removePanelFooterSubmenuItems() {
    const footerView = elementor.getPanelView().footer.currentView,
      behavior = footerView._behaviors[Object.keys(footerView.behaviors()).indexOf('saver')];
    elementor.getPanelView().footer.currentView.removeSubMenuItem('saver-options', {
      name: 'conditions'
    });
    behavior.ui.buttonPreview.tipsy('enable').removeClass('elementor-panel-footer-theme-builder-buttons-wrapper elementor-toggle-state');
  }
  removePublishTabs() {
    const component = $e.components.get('theme-builder-publish');
    component.removeTab('conditions');
  }
}
exports.ThemeBuilderRemoveEditorUI = ThemeBuilderRemoveEditorUI;
var _default = ThemeBuilderRemoveEditorUI;
exports["default"] = _default;

/***/ }),

/***/ "../modules/theme-builder/assets/js/editor/hooks/ui/editor/documents/open/add-editor-ui.js":
/*!*************************************************************************************************!*\
  !*** ../modules/theme-builder/assets/js/editor/hooks/ui/editor/documents/open/add-editor-ui.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.ThemeBuilderAddEditorUI = void 0;
var _view = _interopRequireDefault(__webpack_require__(/*! ../../../../../conditions/view */ "../modules/theme-builder/assets/js/editor/conditions/view.js"));
class ThemeBuilderAddEditorUI extends $e.modules.hookUI.After {
  getCommand() {
    return 'editor/documents/open';
  }
  getId() {
    return 'elementor-pro-theme-builder-add-editor-ui';
  }
  getConditions(args) {
    return elementor.documents.get(args.id).config.theme_builder;
  }
  apply() {
    if (elementor.panel) {
      this.addUI();
    } else {
      // First open, the panel is not available yet.
      elementor.once('preview:loaded', this.addUI.bind(this));
    }
  }
  addUI() {
    this.addRepeaterControlView();
    this.addPanelFooterSubmenuItems();
    this.addPublishTabs();
  }
  addRepeaterControlView() {
    elementor.addControlView('Conditions_repeater', __webpack_require__(/*! ../../../../../conditions/repeater */ "../modules/theme-builder/assets/js/editor/conditions/repeater.js"));
  }
  addPublishTabs() {
    const component = $e.components.get('theme-builder-publish'),
      themeBuilderModuleConfig = elementor.config.document.theme_builder,
      settings = themeBuilderModuleConfig.settings;
    component.manager.conditionsModel = new elementorModules.editor.elements.models.BaseSettings(settings, {
      controls: themeBuilderModuleConfig.template_conditions.controls
    });
    component.addTab('conditions', {
      title: __('Conditions', 'elementor-pro'),
      View: _view.default,
      viewOptions: {
        model: component.manager.conditionsModel,
        controls: component.manager.conditionsModel.controls
      },
      name: 'conditions',
      description: __('Apply current template to these pages.', 'elementor-pro'),
      image: elementorPro.config.urls.modules + 'theme-builder/assets/images/conditions-tab.svg'
    });
  }
  addPanelFooterSubmenuItems() {
    const footerView = elementor.getPanelView().footer.currentView,
      behavior = footerView._behaviors[Object.keys(footerView.behaviors()).indexOf('saver')];
    footerView.ui.menuConditions = footerView.addSubMenuItem('saver-options', {
      before: 'save-template',
      name: 'conditions',
      icon: 'eicon-flow',
      title: __('Display Conditions', 'elementor-pro'),
      callback: () => $e.route('theme-builder-publish/conditions')
    });
    footerView.ui.menuConditions.toggle(!!elementor.config.document.theme_builder.settings.location);
    behavior.ui.buttonPreview.tipsy('disable').html(jQuery('#tmpl-elementor-theme-builder-button-preview').html()).addClass('elementor-panel-footer-theme-builder-buttons-wrapper elementor-toggle-state');
  }
}
exports.ThemeBuilderAddEditorUI = ThemeBuilderAddEditorUI;
var _default = ThemeBuilderAddEditorUI;
exports["default"] = _default;

/***/ }),

/***/ "../modules/theme-builder/assets/js/editor/hooks/ui/index.js":
/*!*******************************************************************!*\
  !*** ../modules/theme-builder/assets/js/editor/hooks/ui/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "ThemeBuilderAddEditorUI", ({
  enumerable: true,
  get: function () {
    return _addEditorUi.ThemeBuilderAddEditorUI;
  }
}));
Object.defineProperty(exports, "ThemeBuilderFooterSaverAfterSave", ({
  enumerable: true,
  get: function () {
    return _after.ThemeBuilderFooterSaverAfterSave;
  }
}));
Object.defineProperty(exports, "ThemeBuilderRemoveEditorUI", ({
  enumerable: true,
  get: function () {
    return _removeEditorUi.ThemeBuilderRemoveEditorUI;
  }
}));
Object.defineProperty(exports, "ThemeBuilderToggleMenuConditions", ({
  enumerable: true,
  get: function () {
    return _toggleMenuConditions.ThemeBuilderToggleMenuConditions;
  }
}));
var _addEditorUi = __webpack_require__(/*! ./editor/documents/open/add-editor-ui */ "../modules/theme-builder/assets/js/editor/hooks/ui/editor/documents/open/add-editor-ui.js");
var _removeEditorUi = __webpack_require__(/*! ./editor/documents/close/remove-editor-ui */ "../modules/theme-builder/assets/js/editor/hooks/ui/editor/documents/close/remove-editor-ui.js");
var _toggleMenuConditions = __webpack_require__(/*! ./editor/document/elements/settings/toggle-menu-conditions */ "../modules/theme-builder/assets/js/editor/hooks/ui/editor/document/elements/settings/toggle-menu-conditions.js");
var _after = __webpack_require__(/*! ./save/after */ "../modules/theme-builder/assets/js/editor/hooks/ui/save/after.js");

/***/ }),

/***/ "../modules/theme-builder/assets/js/editor/hooks/ui/save/after.js":
/*!************************************************************************!*\
  !*** ../modules/theme-builder/assets/js/editor/hooks/ui/save/after.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ThemeBuilderFooterSaverAfterSave = void 0;
class ThemeBuilderFooterSaverAfterSave extends $e.modules.hookUI.After {
  getCommand() {
    return 'document/save/save';
  }
  getId() {
    return 'theme-builder-footer-saver-after-save';
  }
  getConditions() {
    return elementor.config.document.support_site_editor;
  }
  apply(args, result) {
    const {
      status
    } = args;
    if (result.statusChanged) {
      this.onPageStatusChange(status);
    }
  }
  onPageStatusChange(newStatus) {
    if ('publish' !== newStatus) {
      return;
    }
    const options = {
      classes: 'e-theme-builder-save-toaster',
      message: elementor.config.document.panel.messages.publish_notification,
      buttons: [{
        name: 'open_site_editor',
        text: '<i class="eicon-external-link-square"></i><span class="e-theme-builder-toaster-button-text">' + __('Open Site Editor', 'elementor-pro') + '</span>',
        callback() {
          $e.run('app/open');
        }
      }, {
        name: 'view_live_site',
        text: '<i class="eicon-preview-medium"></i><span class="e-theme-builder-toaster-button-text">' + __('View Live Site', 'elementor-pro') + '</span>',
        callback() {
          open(elementor.config.document.urls.permalink);
        }
      }]
    };
    elementor.notifications.showToast(options);
  }
}
exports.ThemeBuilderFooterSaverAfterSave = ThemeBuilderFooterSaverAfterSave;

/***/ }),

/***/ "../modules/theme-builder/assets/js/editor/module.js":
/*!***********************************************************!*\
  !*** ../modules/theme-builder/assets/js/editor/module.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _component = _interopRequireDefault(__webpack_require__(/*! ./publish/component */ "../modules/theme-builder/assets/js/editor/publish/component.js"));
class ThemeBuilderModule extends elementorModules.editor.utils.Module {
  __construct() {
    super.__construct(...arguments);
    Object.defineProperty(elementorPro.config, 'theme_builder', {
      get() {
        elementorCommon.helpers.softDeprecated('theme_builder', '2.9.0', 'elementor.config.document.theme_builder');
        return elementor.config.document.theme_builder;
      }
    });
  }
  onElementorLoaded() {
    this.component = $e.components.register(new _component.default({
      manager: this
    }));
    elementor.on('document:loaded', this.onDocumentLoaded.bind(this));
    elementor.on('document:unload', this.onDocumentUnloaded.bind(this));
    this.onApplyPreview = this.onApplyPreview.bind(this);
    this.onSectionPreviewSettingsActive = this.onSectionPreviewSettingsActive.bind(this);
    elementor.channels.editor.on('elementorProSiteLogo:change', this.openSiteIdentity);
  }
  onDocumentLoaded(document) {
    if (!document.config.theme_builder) {
      return;
    }
    elementor.getPanelView().on('set:page:page_settings', this.updatePreviewIdOptions);
    elementor.channels.editor.on('elementorThemeBuilder:ApplyPreview', this.onApplyPreview);
    elementor.channels.editor.on('page_settings:preview_settings:activated', this.onSectionPreviewSettingsActive);
  }
  onDocumentUnloaded(document) {
    if (!document.config.theme_builder) {
      return;
    }
    elementor.getPanelView().off('set:page:page_settings', this.updatePreviewIdOptions);
    elementor.channels.editor.off('elementorThemeBuilder:ApplyPreview', this.onApplyPreview);
    elementor.channels.editor.off('page_settings:preview_settings:activated', this.onSectionPreviewSettingsActive);
  }
  saveAndReload() {
    $e.run('document/save/auto', {
      force: true,
      onSuccess: () => {
        elementor.dynamicTags.cleanCache();
        const isInitialDocument = elementor.config.initial_document.id === elementor.documents.getCurrentId();
        if (isInitialDocument) {
          // Page templates (e.g. single) with header/footer requires a full reload in order
          // to change the main query also for them.
          elementor.reloadPreview();
        } else {
          $e.internal('editor/documents/attach-preview');
        }
      }
    });
  }
  onApplyPreview() {
    this.saveAndReload();
  }
  onSectionPreviewSettingsActive() {
    this.updatePreviewIdOptions(true);
  }
  updatePreviewIdOptions(render) {
    let previewType = elementor.settings.page.model.get('preview_type');
    if (!previewType) {
      return;
    }
    previewType = previewType.split('/');
    const currentView = elementor.getPanelView().getCurrentPageView(),
      controlModel = currentView.collection.findWhere({
        name: 'preview_id'
      });
    if ('author' === previewType[1]) {
      controlModel.set({
        autocomplete: {
          object: 'author'
        }
      });
    } else if ('taxonomy' === previewType[0]) {
      controlModel.set({
        autocomplete: {
          object: 'tax',
          query: {
            taxonomy: previewType[1]
          }
        }
      });
    } else if ('single' === previewType[0]) {
      controlModel.set({
        autocomplete: {
          object: 'post',
          query: {
            post_type: previewType[1]
          }
        }
      });
    } else {
      controlModel.set({
        autocomplete: {
          object: ''
        }
      });
    }
    if (true === render) {
      // Can be model.
      const controlView = currentView.children.findByModel(controlModel);
      controlView.render();
      controlView.$el.toggle(!!controlModel.get('autocomplete').object);
    }
  }
  async openSiteIdentity() {
    await $e.run('panel/global/open');
    $e.route('panel/global/settings-site-identity');
  }
}
exports["default"] = ThemeBuilderModule;

/***/ }),

/***/ "../modules/theme-builder/assets/js/editor/publish/component.js":
/*!**********************************************************************!*\
  !*** ../modules/theme-builder/assets/js/editor/publish/component.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _content = _interopRequireDefault(__webpack_require__(/*! ./content */ "../modules/theme-builder/assets/js/editor/publish/content.js"));
var _layout = _interopRequireDefault(__webpack_require__(/*! ./layout */ "../modules/theme-builder/assets/js/editor/publish/layout.js"));
var hooks = _interopRequireWildcard(__webpack_require__(/*! ../hooks */ "../modules/theme-builder/assets/js/editor/hooks/index.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
class Component extends $e.modules.ComponentModalBase {
  getNamespace() {
    // TODO: should be 'theme-builder/publish'.
    return 'theme-builder-publish';
  }
  getModalLayout() {
    return _layout.default;
  }
  defaultCommands() {
    return {
      next: () => {
        const tabs = Object.keys(this.tabs),
          next = tabs[this.currentTabIndex + 1];
        if (next) {
          $e.route(this.getTabRoute(next));
        }
      },
      save: () => {
        $e.run('document/save/default', {
          force: true
        });
        this.layout.hideModal();
      },
      'preview-settings': () => {
        // TODO: This is function is not part of this component.
        const panel = elementor.getPanelView();
        $e.route('panel/page-settings/settings');
        panel.getCurrentPageView().activateSection('preview_settings')._renderChildren();
      }
    };
  }
  defaultHooks() {
    return this.importHooks(hooks);
  }
  getTabsWrapperSelector() {
    return '#elementor-publish__tabs';
  }
  renderTab(tab) {
    const tabs = this.getTabs(),
      keys = Object.keys(tabs),
      tabArgs = tabs[tab];
    this.currentTabIndex = keys.indexOf(tab);
    const isLastTab = !keys[this.currentTabIndex + 1];
    this.layout.modalContent.currentView.screen.show(new tabArgs.View(tabArgs.viewOptions));
    this.layout.modal.getElements('next').toggle(!isLastTab);
    this.layout.modal.getElements('publish').toggleClass('e-primary', isLastTab);
  }
  activateTab(tab) {
    $e.routes.saveState(this.getNamespace());
    super.activateTab(tab);
  }
  open() {
    super.open();
    if (!this.layoutContent) {
      this.layout.showLogo();
      this.layout.modalContent.show(new _content.default({
        component: this
      }));
      this.layoutContent = true;
    }
    return true;
  }
}
exports["default"] = Component;

/***/ }),

/***/ "../modules/theme-builder/assets/js/editor/publish/content.js":
/*!********************************************************************!*\
  !*** ../modules/theme-builder/assets/js/editor/publish/content.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class _default extends Marionette.LayoutView {
  id() {
    return 'elementor-publish';
  }
  getTemplate() {
    return Marionette.TemplateCache.get('#tmpl-elementor-component-publish');
  }
  regions() {
    return {
      screen: '#elementor-publish__screen'
    };
  }
  templateHelpers() {
    return {
      tabs: this.getOption('component').getTabs()
    };
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/theme-builder/assets/js/editor/publish/layout.js":
/*!*******************************************************************!*\
  !*** ../modules/theme-builder/assets/js/editor/publish/layout.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class _default extends elementorModules.common.views.modal.Layout {
  getModalOptions() {
    return {
      id: 'elementor-publish__modal',
      hide: {
        onButtonClick: false
      }
    };
  }
  getLogoOptions() {
    return {
      title: __('Publish Settings', 'elementor-pro')
    };
  }
  initModal() {
    super.initModal();
    this.modal.addButton({
      name: 'publish',
      text: __('Save & Close', 'elementor-pro'),
      callback: () => $e.run('theme-builder-publish/save')
    });
    this.modal.getElements('publish').addClass('e-btn-txt');
    this.modal.addButton({
      name: 'next',
      text: __('Next', 'elementor-pro'),
      callback: () => $e.run('theme-builder-publish/next')
    });
    const $publishButton = this.modal.getElements('publish');
    this.modal.getElements('next').addClass('e-primary').add($publishButton).addClass('elementor-button').removeClass('dialog-button');
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/theme-elements/assets/js/editor/comments-skin.js":
/*!*******************************************************************!*\
  !*** ../modules/theme-elements/assets/js/editor/comments-skin.js ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function () {
  var self = this;
  self.onPanelShow = function (panel, model) {
    var settingsModel = model.get('settings');

    // If no skins - set the skin to `theme_comments`.
    if (!settingsModel.controls._skin.default) {
      settingsModel.set('_skin', 'theme_comments');
    }
  };
  self.init = function () {
    elementor.hooks.addAction('panel/open_editor/widget/post-comments', self.onPanelShow);
  };
  self.init();
};

/***/ }),

/***/ "../modules/theme-elements/assets/js/editor/editor.js":
/*!************************************************************!*\
  !*** ../modules/theme-elements/assets/js/editor/editor.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = elementorModules.editor.utils.Module.extend({
  onElementorPreviewLoaded() {
    var CommentsSkin = __webpack_require__(/*! ./comments-skin */ "../modules/theme-elements/assets/js/editor/comments-skin.js");
    this.commentsSkin = new CommentsSkin();
  }
});

/***/ }),

/***/ "../modules/video-playlist/assets/js/editor/component.js":
/*!***************************************************************!*\
  !*** ../modules/video-playlist/assets/js/editor/component.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var hooks = _interopRequireWildcard(__webpack_require__(/*! ./hooks/ui */ "../modules/video-playlist/assets/js/editor/hooks/ui/index.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
class VideoPlaylistComponent extends $e.modules.ComponentBase {
  getNamespace() {
    return 'video-playlist';
  }
  defaultHooks() {
    return this.importHooks(hooks);
  }
}
exports["default"] = VideoPlaylistComponent;

/***/ }),

/***/ "../modules/video-playlist/assets/js/editor/hooks/ui/document/elements/settings/active-tab.js":
/*!****************************************************************************************************!*\
  !*** ../modules/video-playlist/assets/js/editor/hooks/ui/document/elements/settings/active-tab.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.ActiveTab = void 0;
/**
 * Hook fired when template: 'single' page layout changed.
 */
class ActiveTab extends $e.modules.hookData.After {
  getCommand() {
    return 'document/elements/settings';
  }
  getId() {
    return 'active-tab--document/elements/settings';
  }
  getContainerType() {
    return 'repeater';
  }
  getConditions(args) {
    return args.settings.inner_tab_content_1 || args.settings.inner_tab_content_2;
  }
  apply(args) {
    if (args.settings.inner_tab_content_1) {
      args.container.view.model.get('editSettings').set('innerActiveIndex', 0);
    } else if (args.settings.inner_tab_content_2) {
      args.container.view.model.get('editSettings').set('innerActiveIndex', 1);
    }
  }
}
exports.ActiveTab = ActiveTab;
var _default = ActiveTab;
exports["default"] = _default;

/***/ }),

/***/ "../modules/video-playlist/assets/js/editor/hooks/ui/index.js":
/*!********************************************************************!*\
  !*** ../modules/video-playlist/assets/js/editor/hooks/ui/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "ActiveTab", ({
  enumerable: true,
  get: function () {
    return _activeTab.ActiveTab;
  }
}));
var _activeTab = __webpack_require__(/*! ./document/elements/settings/active-tab */ "../modules/video-playlist/assets/js/editor/hooks/ui/document/elements/settings/active-tab.js");

/***/ }),

/***/ "../modules/video-playlist/assets/js/editor/module.js":
/*!************************************************************!*\
  !*** ../modules/video-playlist/assets/js/editor/module.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _component = _interopRequireDefault(__webpack_require__(/*! ./component */ "../modules/video-playlist/assets/js/editor/component.js"));
class Module extends elementorModules.editor.utils.Module {
  /**
   * Init
   */
  onInit() {
    super.onInit();
    $e.components.register(new _component.default());
  }
  onElementorLoaded() {
    elementor.channels.editor.on('elementorPlaylistWidget:setVideoData', e => {
      $e.run('document/elements/settings', {
        container: e.container,
        settings: {
          thumbnail: {
            url: e.currentItem.thumbnail ? e.currentItem.thumbnail.url : ''
          },
          title: e.currentItem.video_title ? e.currentItem.video_title : '',
          duration: e.currentItem.duration ? e.currentItem.duration : ''
        },
        options: {
          external: true
        }
      });
    });
  }
}
exports["default"] = Module;

/***/ }),

/***/ "../modules/woocommerce/assets/js/editor/component.js":
/*!************************************************************!*\
  !*** ../modules/woocommerce/assets/js/editor/component.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var hooks = _interopRequireWildcard(__webpack_require__(/*! ./hooks/ */ "../modules/woocommerce/assets/js/editor/hooks/index.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
class Component extends $e.modules.ComponentBase {
  getNamespace() {
    return 'woocommerce';
  }
  defaultHooks() {
    return this.importHooks(hooks);
  }
}
exports["default"] = Component;

/***/ }),

/***/ "../modules/woocommerce/assets/js/editor/hooks/data/create-widget-activate-settings-modal.js":
/*!***************************************************************************************************!*\
  !*** ../modules/woocommerce/assets/js/editor/hooks/data/create-widget-activate-settings-modal.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WoocommerceCreateWidgetActivateSettingsModal = void 0;
class WoocommerceCreateWidgetActivateSettingsModal extends $e.modules.hookData.After {
  getCommand() {
    return 'document/elements/create';
  }
  getId() {
    return 'elementor-pro-woocommerce-create-widget-activate-settings-modal';
  }
  getContainerType() {
    return 'column';
  }
  getConditions(args, container) {
    return Object.prototype.hasOwnProperty.call(elementorPro.modules.woocommerce.pageSettingsWidgets, container.model.get('widgetType'));
  }
  apply(args, container) {
    elementorPro.modules.woocommerce.onCreateWidget(container);
  }
}
exports.WoocommerceCreateWidgetActivateSettingsModal = WoocommerceCreateWidgetActivateSettingsModal;

/***/ }),

/***/ "../modules/woocommerce/assets/js/editor/hooks/data/delete-widget-deactivate-settings-modal.js":
/*!*****************************************************************************************************!*\
  !*** ../modules/woocommerce/assets/js/editor/hooks/data/delete-widget-deactivate-settings-modal.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WoocommerceDeleteWidgetDeactivateSettingsModal = void 0;
class WoocommerceDeleteWidgetDeactivateSettingsModal extends $e.modules.hookData.After {
  getCommand() {
    return 'document/elements/delete';
  }
  getId() {
    return 'elementor-pro-woocommerce-delete-widget-deactivate-settings-modal';
  }
  getContainerType() {
    return 'widget';
  }
  getConditions(args, container) {
    return Object.prototype.hasOwnProperty.call(elementorPro.modules.woocommerce.pageSettingsWidgets, container.model.get('widgetType'));
  }
  apply(args, container) {
    elementorPro.modules.woocommerce.onDeleteWidget(container);
  }
}
exports.WoocommerceDeleteWidgetDeactivateSettingsModal = WoocommerceDeleteWidgetDeactivateSettingsModal;

/***/ }),

/***/ "../modules/woocommerce/assets/js/editor/hooks/data/index.js":
/*!*******************************************************************!*\
  !*** ../modules/woocommerce/assets/js/editor/hooks/data/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "WoocommerceCreateWidgetActivateSettingsModal", ({
  enumerable: true,
  get: function () {
    return _createWidgetActivateSettingsModal.WoocommerceCreateWidgetActivateSettingsModal;
  }
}));
Object.defineProperty(exports, "WoocommerceDeleteWidgetDeactivateSettingsModal", ({
  enumerable: true,
  get: function () {
    return _deleteWidgetDeactivateSettingsModal.WoocommerceDeleteWidgetDeactivateSettingsModal;
  }
}));
Object.defineProperty(exports, "WoocommerceNotices", ({
  enumerable: true,
  get: function () {
    return _notices.WoocommerceNotices;
  }
}));
Object.defineProperty(exports, "WoocommerceSaveShowModal", ({
  enumerable: true,
  get: function () {
    return _saveShowModal.WoocommerceSaveShowModal;
  }
}));
var _saveShowModal = __webpack_require__(/*! ./save-show-modal */ "../modules/woocommerce/assets/js/editor/hooks/data/save-show-modal.js");
var _createWidgetActivateSettingsModal = __webpack_require__(/*! ./create-widget-activate-settings-modal */ "../modules/woocommerce/assets/js/editor/hooks/data/create-widget-activate-settings-modal.js");
var _deleteWidgetDeactivateSettingsModal = __webpack_require__(/*! ./delete-widget-deactivate-settings-modal */ "../modules/woocommerce/assets/js/editor/hooks/data/delete-widget-deactivate-settings-modal.js");
var _notices = __webpack_require__(/*! ./notices */ "../modules/woocommerce/assets/js/editor/hooks/data/notices.js");

/***/ }),

/***/ "../modules/woocommerce/assets/js/editor/hooks/data/notices.js":
/*!*********************************************************************!*\
  !*** ../modules/woocommerce/assets/js/editor/hooks/data/notices.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WoocommerceNotices = void 0;
class WoocommerceNotices extends $e.modules.hookData.After {
  getCommand() {
    return 'document/elements/settings';
  }
  getId() {
    return 'woocommerce-notices';
  }
  getConditions(args) {
    return 'kit' === elementor.documents.getCurrent().config.type && Array.isArray(args.settings.woocommerce_notices_elements);
  }
  apply(args) {
    const {
      woocommerce
    } = elementorPro.modules;
    woocommerce.renderMockNotices(args.settings.woocommerce_notices_elements);
  }
}
exports.WoocommerceNotices = WoocommerceNotices;

/***/ }),

/***/ "../modules/woocommerce/assets/js/editor/hooks/data/save-show-modal.js":
/*!*****************************************************************************!*\
  !*** ../modules/woocommerce/assets/js/editor/hooks/data/save-show-modal.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WoocommerceSaveShowModal = void 0;
class WoocommerceSaveShowModal extends $e.modules.hookData.After {
  getCommand() {
    return 'document/save/save';
  }
  getId() {
    return 'elementor-pro-woocommerce-save-show-modal';
  }
  getConditions(args) {
    return args.status && -1 !== ['private', 'publish'].indexOf(args.status);
  }
  apply() {
    elementorPro.modules.woocommerce.onUpdateDocument();
  }
}
exports.WoocommerceSaveShowModal = WoocommerceSaveShowModal;

/***/ }),

/***/ "../modules/woocommerce/assets/js/editor/hooks/index.js":
/*!**************************************************************!*\
  !*** ../modules/woocommerce/assets/js/editor/hooks/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _data = __webpack_require__(/*! ./data/ */ "../modules/woocommerce/assets/js/editor/hooks/data/index.js");
Object.keys(_data).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _data[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _data[key];
    }
  });
});

/***/ }),

/***/ "../modules/woocommerce/assets/js/editor/module.js":
/*!*********************************************************!*\
  !*** ../modules/woocommerce/assets/js/editor/module.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _component = _interopRequireDefault(__webpack_require__(/*! ./component */ "../modules/woocommerce/assets/js/editor/component.js"));
class WoocommerceModule extends elementorModules.editor.utils.Module {
  constructor() {
    super(...arguments);
    this.pageSettingsWidgets = {
      'woocommerce-checkout-page': {
        headerMessage: __('Want to save this as your checkout page?', 'elementor-pro'),
        message: __('Changes you make here will override your existing WooCommerce settings.', 'elementor-pro'),
        confirmMessage: __('You\'ve updated your checkout page.', 'elementor-pro'),
        cancelMessage: __('<h3>Set up a checkout page</h3><br>Without a checkout page, visitors can\'t complete transactions on your site. To set one up, go to Site Settings.', 'elementor-pro'),
        failedMessage: __('<h3>Sorry, something went wrong.</h3><br>To define a checkout page for your site, head over to Site Settings.', 'elementor-pro'),
        optionName: 'woocommerce_checkout_page_id',
        woocommercePageName: 'checkout'
      },
      'woocommerce-cart': {
        headerMessage: __('Want to save this as your cart page?', 'elementor-pro'),
        message: __('Changes you make here will override your existing WooCommerce settings.', 'elementor-pro'),
        confirmMessage: __('You\'ve updated your cart page.', 'elementor-pro'),
        cancelMessage: __('<h3>Set up a cart page</h3><br>The cart page shows an order summary. To set one up, go to Site Settings.', 'elementor-pro'),
        failedMessage: __('<h3>Sorry, something went wrong.</h3><br>To define a cart page for your site, head over to Site Settings.', 'elementor-pro'),
        optionName: 'woocommerce_cart_page_id',
        woocommercePageName: 'cart'
      },
      'woocommerce-my-account': {
        headerMessage: __('Want to save this as your my account page?', 'elementor-pro'),
        message: __('Changes you make here will override your existing WooCommerce settings.', 'elementor-pro'),
        confirmMessage: __('You\'ve updated your my account page.', 'elementor-pro'),
        cancelMessage: __('<h3>Set up a My Account page</h3><br>Without it, customers can\'t update their billing details, review past orders, etc. To set up My Account, go to Site Settings.', 'elementor-pro'),
        failedMessage: __('<h3>Sorry, something went wrong.</h3><br>To define a my account page for your site, head over to Site Settings.', 'elementor-pro'),
        optionName: 'woocommerce_myaccount_page_id',
        woocommercePageName: 'myaccount'
      },
      'woocommerce-purchase-summary': {
        headerMessage: __('Want to save this as your purchase summary page?', 'elementor-pro'),
        message: __('Changes you make here will override your WooCommerce default purchase summary page.', 'elementor-pro'),
        confirmMessage: __('You\'ve updated your summary page.', 'elementor-pro'),
        cancelMessage: __('<h3>Set up a purchase summary page</h3><br>This page shows payment and order details. To set one up, go to Site Settings.', 'elementor-pro'),
        failedMessage: __('<h3>Sorry, something went wrong.</h3><br>To define a purchase summary page for your site, head over to Site Settings.', 'elementor-pro'),
        optionName: 'elementor_woocommerce_purchase_summary_page_id',
        woocommercePageName: 'summary'
      }
    };
    this.createdPageSettingsWidgets = [];
  }
  addWooCommerceClassToLoopWrapper(LoopGridHandler) {
    LoopGridHandler.$element.addClass('woocommerce');
  }
  onElementorInit() {
    elementor.hooks.addAction('editor/widgets/loop-grid/on-init', this.addWooCommerceClassToLoopWrapper);
  }
  onElementorFrontendInit() {
    elementorFrontend.elements.$body.on('added_to_cart', (e, data) => {
      // We do not want the page to reload in the Editor after we triggered the 'added_to_cart' event.
      if (this.didManuallyTriggerAddToCartEvent(data)) {
        return false;
      }
    });
    if ('loop-item' === elementor.documents.currentDocument.config.type && 'product' === elementor.documents.currentDocument.config.settings.settings.source) {
      // Add the 'woocommerce' class to the Loop document wrapper only when editing a Product Loop Template in the
      // theme builder.
      elementor.on('document:loaded', () => {
        elementor.$previewContents[0].querySelector('.e-loop-item').classList.add('woocommerce');
      });
    }
  }
  didManuallyTriggerAddToCartEvent() {
    let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    return data === null || data === void 0 ? void 0 : data.e_manually_triggered;
  }
  onElementorLoaded() {
    this.component = $e.components.register(new _component.default({
      manager: this
    }));
    // WooCommerce Notice Settings.
    const noticeSections = ['section_woocommerce_notices', 'woocommerce_message_notices', 'woocommerce_info_notices', 'woocommerce_error_notices'];
    for (const section of noticeSections) {
      elementor.channels.editor.on('kit_settings:' + section + ':activated', () => {
        this.renderMockNotices(elementor.documents.getCurrent().container.settings.get('woocommerce_notices_elements'));
      });
    }

    // Custom Empty Cart Template.
    elementor.channels.editor.on('editor:widget:woocommerce-cart:section_additional_options:activated', () => {
      this.onTemplateIdChange('additional_template_select');
    });

    // Custom My Account Dashboard Template
    elementor.channels.editor.on('editor:widget:woocommerce-my-account:section_additional_options:activated', () => {
      this.onTemplateIdChange('customize_dashboard_select');
    });
  }
  renderMockNotices(noticeElements) {
    const noticesWrapper = elementor.$previewContents.find('.woocommerce-notices-wrapper');
    if (noticeElements.length <= 0) {
      noticesWrapper.remove();
      return;
    }
    let noticesClass = '';
    for (const notice of noticeElements) {
      const className = notice.replace('_', '-');
      noticesClass += 'e-' + className + '-notice ';
    }
    elementorFrontend.elements.$body.addClass(noticesClass.trim());
    noticesWrapper.addClass('elementor-loading');
    // Wait for the Ajax call to finish before the select2 can be changed again.
    jQuery('.elementor-select2').attr('disabled', 'disabled');
    elementorPro.ajax.addRequest('woocommerce_mock_notices', {
      data: {
        notice_elements: noticeElements
      },
      success(data) {
        noticesWrapper.remove();
        elementor.$previewContents.find('.elementor-editor-preview').prepend(data);
        noticesWrapper.removeClass('elementor-loading');
        // Enable the select2 again.
        jQuery('.elementor-select2').removeAttr('disabled');
      }
    });
  }
  onTemplateIdChange(sectionActive) {
    const editor = elementor.getPanelView().getCurrentPageView(),
      model = editor.getOption('editedElementView').getEditModel(),
      settingsModel = model.get('settings'),
      templateID = settingsModel.get(sectionActive),
      $editButton = editor.$el.find('.elementor-edit-template');
    if (!templateID) {
      $editButton.addClass('e-control-tool-disabled').hide();
    } else {
      const editUrl = ElementorConfig.home_url + '?p=' + templateID + '&elementor';
      $editButton.prop('href', editUrl).removeClass('e-control-tool-disabled').show();
    }
  }
  onCreateWidget(container) {
    const widgetType = container.model.get('widgetType');
    if (undefined === this.createdPageSettingsWidgets[widgetType]) {
      this.createdPageSettingsWidgets[widgetType] = 0;
    }
    this.createdPageSettingsWidgets[widgetType]++;
  }
  onDeleteWidget(container) {
    const widgetType = container.model.get('widgetType');
    this.createdPageSettingsWidgets[widgetType]--;
    if (!this.createdPageSettingsWidgets[widgetType]) {
      delete this.createdPageSettingsWidgets[widgetType];
    }
  }
  onUpdateDocument() {
    // On page Save trigger the 'added_to_cart' event so that the persistent cart cache can refresh so that the 'Preview' can be immediately updated without having to go and make a change in the Cart first.
    elementorFrontend.elements.$body.trigger('added_to_cart', [{
      e_manually_triggered: true
    }]);
    const saveWoocommercePageSettingKeys = Object.keys(this.createdPageSettingsWidgets),
      lastWidgetCreated = saveWoocommercePageSettingKeys[saveWoocommercePageSettingKeys.length - 1],
      postId = elementor.documents.getCurrent().id;
    if (1 !== saveWoocommercePageSettingKeys.length) {
      return;
    }
    const lastWidgetCreatedOptions = this.pageSettingsWidgets[lastWidgetCreated];

    // Bail if this page is already set as the corresponding WC page.
    if (postId === elementorPro.config.woocommerce.woocommercePages[lastWidgetCreatedOptions.woocommercePageName]) {
      return;
    }
    elementorCommon.dialogsManager.createWidget('confirm', {
      id: 'elementor-woocommerce-save-pages',
      className: 'e-global__confirm-add',
      headerMessage: lastWidgetCreatedOptions.headerMessage,
      message: lastWidgetCreatedOptions.message,
      position: {
        my: 'center center',
        at: 'center center'
      },
      strings: {
        confirm: __('Save', 'elementor-pro'),
        cancel: __('No thanks', 'elementor-pro')
      },
      onConfirm: () => this.onConfirmModal(lastWidgetCreatedOptions),
      onCancel: () => this.onCancelModal(lastWidgetCreatedOptions)
    }).show();
    this.createdPageSettingsWidgets = [];
  }
  onConfirmModal(lastWidgetCreatedOptions) {
    elementorPro.ajax.addRequest('woocommerce_update_page_option', {
      data: {
        option_name: lastWidgetCreatedOptions.optionName
      },
      success: () => {
        elementor.notifications.showToast({
          message: lastWidgetCreatedOptions.confirmMessage
        });
      },
      error: () => this.showPagesSettingsToast(lastWidgetCreatedOptions.failedMessage)
    });
  }
  onCancelModal(lastWidgetCreatedOptions) {
    this.showPagesSettingsToast(lastWidgetCreatedOptions.cancelMessage);
  }
  showPagesSettingsToast(message) {
    const buttons = [];
    elementor.notifications.initToast();
    buttons.push({
      name: 'take_me_there',
      text: __('Take me there', 'elementor'),
      callback: () => this.openSiteSettingsTab('settings-woocommerce')
    });
    elementor.notifications.showToast({
      message,
      buttons
    });
  }

  // TODO: Add this as a reusable core function - to be able to open any settings tab.
  openSiteSettingsTab() {
    let tabId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    let sectionId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    const isWPPreviewMode = elementorCommon.elements.$body.hasClass('elementor-editor-preview');
    if (isWPPreviewMode) {
      elementor.exitPreviewMode();
    }
    const isInSettingsPanelActive = 'panel/global/menu' === elementor.documents.currentDocument.config.panel.default_route;
    if (isInSettingsPanelActive) {
      $e.run('panel/global/close');
      return;
    }
    $e.run('editor/documents/switch', {
      id: elementor.config.kit_id,
      mode: 'autosave'
    }).then(() => {
      if (tabId) {
        $e.route('panel/global/' + tabId);
      }
    })
    // TODO: Replace with a standard routing solution once one is available
    .then(() => {
      if (sectionId) {
        const sectionElement = jQuery('.elementor-control-' + sectionId);
        if (sectionElement.length) {
          sectionElement.trigger('click');
        }
      }
    });
  }
}
module.exports = WoocommerceModule;

/***/ }),

/***/ "../node_modules/core-js/internals/a-callable.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/internals/a-callable.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "../node_modules/core-js/internals/try-to-string.js");

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "../node_modules/core-js/internals/a-possible-prototype.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/internals/a-possible-prototype.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (typeof argument == 'object' || isCallable(argument)) return argument;
  throw $TypeError("Can't set " + $String(argument) + ' as a prototype');
};


/***/ }),

/***/ "../node_modules/core-js/internals/an-object.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/an-object.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ "../node_modules/core-js/internals/array-includes.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/array-includes.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/core-js/internals/to-indexed-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "../node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "../node_modules/core-js/internals/length-of-array-like.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "../node_modules/core-js/internals/classof-raw.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/classof-raw.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "../node_modules/core-js/internals/classof.js":
/*!****************************************************!*\
  !*** ../node_modules/core-js/internals/classof.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "../node_modules/core-js/internals/to-string-tag-support.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "../node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ "../node_modules/core-js/internals/copy-constructor-properties.js":
/*!************************************************************************!*\
  !*** ../node_modules/core-js/internals/copy-constructor-properties.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../node_modules/core-js/internals/has-own-property.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "../node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ "../node_modules/core-js/internals/create-non-enumerable-property.js":
/*!***************************************************************************!*\
  !*** ../node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "../node_modules/core-js/internals/create-property-descriptor.js":
/*!***********************************************************************!*\
  !*** ../node_modules/core-js/internals/create-property-descriptor.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "../node_modules/core-js/internals/define-built-in.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/internals/define-built-in.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js");
var makeBuiltIn = __webpack_require__(/*! ../internals/make-built-in */ "../node_modules/core-js/internals/make-built-in.js");
var defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ "../node_modules/core-js/internals/define-global-property.js");

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ "../node_modules/core-js/internals/define-global-property.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/internals/define-global-property.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "../node_modules/core-js/internals/descriptors.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/descriptors.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});


/***/ }),

/***/ "../node_modules/core-js/internals/document-all.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/internals/document-all.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";

var documentAll = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var IS_HTMLDDA = typeof documentAll == 'undefined' && documentAll !== undefined;

module.exports = {
  all: documentAll,
  IS_HTMLDDA: IS_HTMLDDA
};


/***/ }),

/***/ "../node_modules/core-js/internals/document-create-element.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js/internals/document-create-element.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "../node_modules/core-js/internals/engine-user-agent.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/engine-user-agent.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";

module.exports = typeof navigator != 'undefined' && String(navigator.userAgent) || '';


/***/ }),

/***/ "../node_modules/core-js/internals/engine-v8-version.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/engine-v8-version.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "../node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ "../node_modules/core-js/internals/enum-bug-keys.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/internals/enum-bug-keys.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "../node_modules/core-js/internals/error-stack-clear.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/error-stack-clear.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");

var $Error = Error;
var replace = uncurryThis(''.replace);

var TEST = (function (arg) { return String($Error(arg).stack); })('zxcasd');
// eslint-disable-next-line redos/no-vulnerable -- safe
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

module.exports = function (stack, dropEntries) {
  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error.prepareStackTrace) {
    while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
  } return stack;
};


/***/ }),

/***/ "../node_modules/core-js/internals/error-stack-install.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js/internals/error-stack-install.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js/internals/create-non-enumerable-property.js");
var clearErrorStack = __webpack_require__(/*! ../internals/error-stack-clear */ "../node_modules/core-js/internals/error-stack-clear.js");
var ERROR_STACK_INSTALLABLE = __webpack_require__(/*! ../internals/error-stack-installable */ "../node_modules/core-js/internals/error-stack-installable.js");

// non-standard V8
var captureStackTrace = Error.captureStackTrace;

module.exports = function (error, C, stack, dropEntries) {
  if (ERROR_STACK_INSTALLABLE) {
    if (captureStackTrace) captureStackTrace(error, C);
    else createNonEnumerableProperty(error, 'stack', clearErrorStack(stack, dropEntries));
  }
};


/***/ }),

/***/ "../node_modules/core-js/internals/error-stack-installable.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js/internals/error-stack-installable.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../node_modules/core-js/internals/create-property-descriptor.js");

module.exports = !fails(function () {
  var error = Error('a');
  if (!('stack' in error)) return true;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  Object.defineProperty(error, 'stack', createPropertyDescriptor(1, 7));
  return error.stack !== 7;
});


/***/ }),

/***/ "../node_modules/core-js/internals/export.js":
/*!***************************************************!*\
  !*** ../node_modules/core-js/internals/export.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../node_modules/core-js/internals/object-get-own-property-descriptor.js").f);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js/internals/create-non-enumerable-property.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "../node_modules/core-js/internals/define-built-in.js");
var defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ "../node_modules/core-js/internals/define-global-property.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "../node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "../node_modules/core-js/internals/is-forced.js");

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "../node_modules/core-js/internals/fails.js":
/*!**************************************************!*\
  !*** ../node_modules/core-js/internals/fails.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "../node_modules/core-js/internals/function-apply.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/function-apply.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "../node_modules/core-js/internals/function-bind-native.js");

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),

/***/ "../node_modules/core-js/internals/function-bind-native.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/internals/function-bind-native.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ "../node_modules/core-js/internals/function-call.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/internals/function-call.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "../node_modules/core-js/internals/function-bind-native.js");

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "../node_modules/core-js/internals/function-name.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/internals/function-name.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../node_modules/core-js/internals/has-own-property.js");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "../node_modules/core-js/internals/function-uncurry-this-accessor.js":
/*!***************************************************************************!*\
  !*** ../node_modules/core-js/internals/function-uncurry-this-accessor.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "../node_modules/core-js/internals/a-callable.js");

module.exports = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};


/***/ }),

/***/ "../node_modules/core-js/internals/function-uncurry-this.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/internals/function-uncurry-this.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "../node_modules/core-js/internals/function-bind-native.js");

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ "../node_modules/core-js/internals/get-built-in.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/internals/get-built-in.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "../node_modules/core-js/internals/get-method.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/internals/get-method.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var aCallable = __webpack_require__(/*! ../internals/a-callable */ "../node_modules/core-js/internals/a-callable.js");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "../node_modules/core-js/internals/is-null-or-undefined.js");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ "../node_modules/core-js/internals/global.js":
/*!***************************************************!*\
  !*** ../node_modules/core-js/internals/global.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || this || Function('return this')();


/***/ }),

/***/ "../node_modules/core-js/internals/has-own-property.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/internals/has-own-property.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../node_modules/core-js/internals/to-object.js");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "../node_modules/core-js/internals/hidden-keys.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/hidden-keys.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";

module.exports = {};


/***/ }),

/***/ "../node_modules/core-js/internals/ie8-dom-define.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/ie8-dom-define.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "../node_modules/core-js/internals/document-create-element.js");

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});


/***/ }),

/***/ "../node_modules/core-js/internals/indexed-object.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/indexed-object.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "../node_modules/core-js/internals/classof-raw.js");

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ "../node_modules/core-js/internals/inherit-if-required.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js/internals/inherit-if-required.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "../node_modules/core-js/internals/object-set-prototype-of.js");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "../node_modules/core-js/internals/inspect-source.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/inspect-source.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "../node_modules/core-js/internals/shared-store.js");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "../node_modules/core-js/internals/install-error-cause.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js/internals/install-error-cause.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js/internals/create-non-enumerable-property.js");

// `InstallErrorCause` abstract operation
// https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause
module.exports = function (O, options) {
  if (isObject(options) && 'cause' in options) {
    createNonEnumerableProperty(O, 'cause', options.cause);
  }
};


/***/ }),

/***/ "../node_modules/core-js/internals/internal-state.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/internal-state.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/weak-map-basic-detection */ "../node_modules/core-js/internals/weak-map-basic-detection.js");
var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js/internals/create-non-enumerable-property.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../node_modules/core-js/internals/has-own-property.js");
var shared = __webpack_require__(/*! ../internals/shared-store */ "../node_modules/core-js/internals/shared-store.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../node_modules/core-js/internals/hidden-keys.js");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "../node_modules/core-js/internals/is-callable.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/is-callable.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $documentAll = __webpack_require__(/*! ../internals/document-all */ "../node_modules/core-js/internals/document-all.js");

var documentAll = $documentAll.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = $documentAll.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ "../node_modules/core-js/internals/is-forced.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/is-forced.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "../node_modules/core-js/internals/is-null-or-undefined.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/internals/is-null-or-undefined.js ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ "../node_modules/core-js/internals/is-object.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/is-object.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");
var $documentAll = __webpack_require__(/*! ../internals/document-all */ "../node_modules/core-js/internals/document-all.js");

var documentAll = $documentAll.all;

module.exports = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "../node_modules/core-js/internals/is-pure.js":
/*!****************************************************!*\
  !*** ../node_modules/core-js/internals/is-pure.js ***!
  \****************************************************/
/***/ ((module) => {

"use strict";

module.exports = false;


/***/ }),

/***/ "../node_modules/core-js/internals/is-symbol.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/is-symbol.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../node_modules/core-js/internals/get-built-in.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "../node_modules/core-js/internals/object-is-prototype-of.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "../node_modules/core-js/internals/use-symbol-as-uid.js");

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ "../node_modules/core-js/internals/length-of-array-like.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/internals/length-of-array-like.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toLength = __webpack_require__(/*! ../internals/to-length */ "../node_modules/core-js/internals/to-length.js");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "../node_modules/core-js/internals/make-built-in.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/internals/make-built-in.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../node_modules/core-js/internals/has-own-property.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ "../node_modules/core-js/internals/function-name.js").CONFIGURABLE);
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "../node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../node_modules/core-js/internals/internal-state.js");

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ "../node_modules/core-js/internals/math-trunc.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/internals/math-trunc.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ "../node_modules/core-js/internals/normalize-string-argument.js":
/*!**********************************************************************!*\
  !*** ../node_modules/core-js/internals/normalize-string-argument.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toString = __webpack_require__(/*! ../internals/to-string */ "../node_modules/core-js/internals/to-string.js");

module.exports = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);
};


/***/ }),

/***/ "../node_modules/core-js/internals/object-define-property.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/internals/object-define-property.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "../node_modules/core-js/internals/ie8-dom-define.js");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ "../node_modules/core-js/internals/v8-prototype-define-bug.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "../node_modules/core-js/internals/to-property-key.js");

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "../node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var call = __webpack_require__(/*! ../internals/function-call */ "../node_modules/core-js/internals/function-call.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "../node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/core-js/internals/to-indexed-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "../node_modules/core-js/internals/to-property-key.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../node_modules/core-js/internals/has-own-property.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "../node_modules/core-js/internals/ie8-dom-define.js");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ "../node_modules/core-js/internals/object-get-own-property-names.js":
/*!**************************************************************************!*\
  !*** ../node_modules/core-js/internals/object-get-own-property-names.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "../node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "../node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!****************************************************************************!*\
  !*** ../node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "../node_modules/core-js/internals/object-is-prototype-of.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/internals/object-is-prototype-of.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "../node_modules/core-js/internals/object-keys-internal.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/internals/object-keys-internal.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../node_modules/core-js/internals/has-own-property.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/core-js/internals/to-indexed-object.js");
var indexOf = (__webpack_require__(/*! ../internals/array-includes */ "../node_modules/core-js/internals/array-includes.js").indexOf);
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../node_modules/core-js/internals/hidden-keys.js");

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ "../node_modules/core-js/internals/object-property-is-enumerable.js":
/*!**************************************************************************!*\
  !*** ../node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "../node_modules/core-js/internals/object-set-prototype-of.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js/internals/object-set-prototype-of.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = __webpack_require__(/*! ../internals/function-uncurry-this-accessor */ "../node_modules/core-js/internals/function-uncurry-this-accessor.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "../node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "../node_modules/core-js/internals/ordinary-to-primitive.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/internals/ordinary-to-primitive.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "../node_modules/core-js/internals/function-call.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "../node_modules/core-js/internals/own-keys.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/internals/own-keys.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../node_modules/core-js/internals/get-built-in.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "../node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "../node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "../node_modules/core-js/internals/proxy-accessor.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/proxy-accessor.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js").f);

module.exports = function (Target, Source, key) {
  key in Target || defineProperty(Target, key, {
    configurable: true,
    get: function () { return Source[key]; },
    set: function (it) { Source[key] = it; }
  });
};


/***/ }),

/***/ "../node_modules/core-js/internals/require-object-coercible.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/internals/require-object-coercible.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "../node_modules/core-js/internals/is-null-or-undefined.js");

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "../node_modules/core-js/internals/shared-key.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/internals/shared-key.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var shared = __webpack_require__(/*! ../internals/shared */ "../node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "../node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "../node_modules/core-js/internals/shared-store.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/internals/shared-store.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ "../node_modules/core-js/internals/define-global-property.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});

module.exports = store;


/***/ }),

/***/ "../node_modules/core-js/internals/shared.js":
/*!***************************************************!*\
  !*** ../node_modules/core-js/internals/shared.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "../node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.32.2',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.32.2/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ "../node_modules/core-js/internals/symbol-constructor-detection.js":
/*!*************************************************************************!*\
  !*** ../node_modules/core-js/internals/symbol-constructor-detection.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "../node_modules/core-js/internals/engine-v8-version.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");

var $String = global.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "../node_modules/core-js/internals/to-absolute-index.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/to-absolute-index.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "../node_modules/core-js/internals/to-integer-or-infinity.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "../node_modules/core-js/internals/to-indexed-object.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/to-indexed-object.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "../node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "../node_modules/core-js/internals/to-integer-or-infinity.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/internals/to-integer-or-infinity.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var trunc = __webpack_require__(/*! ../internals/math-trunc */ "../node_modules/core-js/internals/math-trunc.js");

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ "../node_modules/core-js/internals/to-length.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/to-length.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "../node_modules/core-js/internals/to-integer-or-infinity.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "../node_modules/core-js/internals/to-object.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/to-object.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../node_modules/core-js/internals/require-object-coercible.js");

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "../node_modules/core-js/internals/to-primitive.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/internals/to-primitive.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "../node_modules/core-js/internals/function-call.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "../node_modules/core-js/internals/is-symbol.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "../node_modules/core-js/internals/get-method.js");
var ordinaryToPrimitive = __webpack_require__(/*! ../internals/ordinary-to-primitive */ "../node_modules/core-js/internals/ordinary-to-primitive.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "../node_modules/core-js/internals/to-property-key.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/internals/to-property-key.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../node_modules/core-js/internals/to-primitive.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "../node_modules/core-js/internals/is-symbol.js");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "../node_modules/core-js/internals/to-string-tag-support.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/internals/to-string-tag-support.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "../node_modules/core-js/internals/to-string.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/to-string.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var classof = __webpack_require__(/*! ../internals/classof */ "../node_modules/core-js/internals/classof.js");

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),

/***/ "../node_modules/core-js/internals/try-to-string.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/internals/try-to-string.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "../node_modules/core-js/internals/uid.js":
/*!************************************************!*\
  !*** ../node_modules/core-js/internals/uid.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "../node_modules/core-js/internals/use-symbol-as-uid.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ "../node_modules/core-js/internals/symbol-constructor-detection.js");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "../node_modules/core-js/internals/v8-prototype-define-bug.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js/internals/v8-prototype-define-bug.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});


/***/ }),

/***/ "../node_modules/core-js/internals/weak-map-basic-detection.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/internals/weak-map-basic-detection.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ "../node_modules/core-js/internals/well-known-symbol.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/well-known-symbol.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "../node_modules/core-js/internals/shared.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../node_modules/core-js/internals/has-own-property.js");
var uid = __webpack_require__(/*! ../internals/uid */ "../node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ "../node_modules/core-js/internals/symbol-constructor-detection.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "../node_modules/core-js/internals/use-symbol-as-uid.js");

var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "../node_modules/core-js/internals/wrap-error-constructor-with-cause.js":
/*!******************************************************************************!*\
  !*** ../node_modules/core-js/internals/wrap-error-constructor-with-cause.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../node_modules/core-js/internals/get-built-in.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../node_modules/core-js/internals/has-own-property.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js/internals/create-non-enumerable-property.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "../node_modules/core-js/internals/object-is-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "../node_modules/core-js/internals/object-set-prototype-of.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "../node_modules/core-js/internals/copy-constructor-properties.js");
var proxyAccessor = __webpack_require__(/*! ../internals/proxy-accessor */ "../node_modules/core-js/internals/proxy-accessor.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "../node_modules/core-js/internals/inherit-if-required.js");
var normalizeStringArgument = __webpack_require__(/*! ../internals/normalize-string-argument */ "../node_modules/core-js/internals/normalize-string-argument.js");
var installErrorCause = __webpack_require__(/*! ../internals/install-error-cause */ "../node_modules/core-js/internals/install-error-cause.js");
var installErrorStack = __webpack_require__(/*! ../internals/error-stack-install */ "../node_modules/core-js/internals/error-stack-install.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../node_modules/core-js/internals/is-pure.js");

module.exports = function (FULL_NAME, wrapper, FORCED, IS_AGGREGATE_ERROR) {
  var STACK_TRACE_LIMIT = 'stackTraceLimit';
  var OPTIONS_POSITION = IS_AGGREGATE_ERROR ? 2 : 1;
  var path = FULL_NAME.split('.');
  var ERROR_NAME = path[path.length - 1];
  var OriginalError = getBuiltIn.apply(null, path);

  if (!OriginalError) return;

  var OriginalErrorPrototype = OriginalError.prototype;

  // V8 9.3- bug https://bugs.chromium.org/p/v8/issues/detail?id=12006
  if (!IS_PURE && hasOwn(OriginalErrorPrototype, 'cause')) delete OriginalErrorPrototype.cause;

  if (!FORCED) return OriginalError;

  var BaseError = getBuiltIn('Error');

  var WrappedError = wrapper(function (a, b) {
    var message = normalizeStringArgument(IS_AGGREGATE_ERROR ? b : a, undefined);
    var result = IS_AGGREGATE_ERROR ? new OriginalError(a) : new OriginalError();
    if (message !== undefined) createNonEnumerableProperty(result, 'message', message);
    installErrorStack(result, WrappedError, result.stack, 2);
    if (this && isPrototypeOf(OriginalErrorPrototype, this)) inheritIfRequired(result, this, WrappedError);
    if (arguments.length > OPTIONS_POSITION) installErrorCause(result, arguments[OPTIONS_POSITION]);
    return result;
  });

  WrappedError.prototype = OriginalErrorPrototype;

  if (ERROR_NAME !== 'Error') {
    if (setPrototypeOf) setPrototypeOf(WrappedError, BaseError);
    else copyConstructorProperties(WrappedError, BaseError, { name: true });
  } else if (DESCRIPTORS && STACK_TRACE_LIMIT in OriginalError) {
    proxyAccessor(WrappedError, OriginalError, STACK_TRACE_LIMIT);
    proxyAccessor(WrappedError, OriginalError, 'prepareStackTrace');
  }

  copyConstructorProperties(WrappedError, OriginalError);

  if (!IS_PURE) try {
    // Safari 13- bug: WebAssembly errors does not have a proper `.name`
    if (OriginalErrorPrototype.name !== ERROR_NAME) {
      createNonEnumerableProperty(OriginalErrorPrototype, 'name', ERROR_NAME);
    }
    OriginalErrorPrototype.constructor = WrappedError;
  } catch (error) { /* empty */ }

  return WrappedError;
};


/***/ }),

/***/ "../node_modules/core-js/modules/es.error.cause.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/es.error.cause.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable no-unused-vars -- required for functions `.length` */
var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var apply = __webpack_require__(/*! ../internals/function-apply */ "../node_modules/core-js/internals/function-apply.js");
var wrapErrorConstructorWithCause = __webpack_require__(/*! ../internals/wrap-error-constructor-with-cause */ "../node_modules/core-js/internals/wrap-error-constructor-with-cause.js");

var WEB_ASSEMBLY = 'WebAssembly';
var WebAssembly = global[WEB_ASSEMBLY];

var FORCED = Error('e', { cause: 7 }).cause !== 7;

var exportGlobalErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  var O = {};
  O[ERROR_NAME] = wrapErrorConstructorWithCause(ERROR_NAME, wrapper, FORCED);
  $({ global: true, constructor: true, arity: 1, forced: FORCED }, O);
};

var exportWebAssemblyErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  if (WebAssembly && WebAssembly[ERROR_NAME]) {
    var O = {};
    O[ERROR_NAME] = wrapErrorConstructorWithCause(WEB_ASSEMBLY + '.' + ERROR_NAME, wrapper, FORCED);
    $({ target: WEB_ASSEMBLY, stat: true, constructor: true, arity: 1, forced: FORCED }, O);
  }
};

// https://tc39.es/ecma262/#sec-nativeerror
exportGlobalErrorCauseWrapper('Error', function (init) {
  return function Error(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('EvalError', function (init) {
  return function EvalError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('RangeError', function (init) {
  return function RangeError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('ReferenceError', function (init) {
  return function ReferenceError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('SyntaxError', function (init) {
  return function SyntaxError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('TypeError', function (init) {
  return function TypeError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('URIError', function (init) {
  return function URIError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('CompileError', function (init) {
  return function CompileError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('LinkError', function (init) {
  return function LinkError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('RuntimeError', function (init) {
  return function RuntimeError(message) { return apply(init, this, arguments); };
});


/***/ }),

/***/ "@wordpress/i18n":
/*!**************************!*\
  !*** external "wp.i18n" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = wp.i18n;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \***********************************************************************/
/***/ ((module) => {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames not based on template
/******/ 			if (chunkId === "page-transitions-editor") return "" + chunkId + ".930bfd9119ee62d5ccd6.bundle.js";
/******/ 			if (chunkId === "mega-menu-editor") return "" + chunkId + ".286f349ea1f2e6f1d984.bundle.js";
/******/ 			if (chunkId === "nested-carousel-editor") return "" + chunkId + ".04e1965a317cbb6d22df.bundle.js";
/******/ 			if (chunkId === "loop-filter-editor") return "" + chunkId + ".5f9cd7711bffedc1976a.bundle.js";
/******/ 			if (chunkId === "modules_query-control_assets_js_editor_template-query-control_js") return "5c03292ae33aceaec8d9.bundle.js";
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "elementor-pro:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			};
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"editor": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************************!*\
  !*** ../assets/dev/js/editor/editor.js ***!
  \*****************************************/
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _editor = _interopRequireDefault(__webpack_require__(/*! ../../../../modules/custom-css/assets/js/editor/editor */ "../modules/custom-css/assets/js/editor/editor.js"));
var _editor2 = _interopRequireDefault(__webpack_require__(/*! ../../../../modules/motion-fx/assets/js/editor/editor */ "../modules/motion-fx/assets/js/editor/editor.js"));
var _module = _interopRequireDefault(__webpack_require__(/*! modules/popup/assets/js/editor/module */ "../modules/popup/assets/js/editor/module.js"));
var _module2 = _interopRequireDefault(__webpack_require__(/*! modules/global-widget/assets/js/editor/module */ "../modules/global-widget/assets/js/editor/module.js"));
var _module3 = _interopRequireDefault(__webpack_require__(/*! modules/theme-builder/assets/js/editor/module */ "../modules/theme-builder/assets/js/editor/module.js"));
var _module4 = _interopRequireDefault(__webpack_require__(/*! modules/forms/assets/js/editor/module */ "../modules/forms/assets/js/editor/module.js"));
var _module5 = _interopRequireDefault(__webpack_require__(/*! modules/screenshots/assets/js/editor/module */ "../modules/screenshots/assets/js/editor/module.js"));
var _editor3 = _interopRequireDefault(__webpack_require__(/*! ../../../../core/app/modules/site-editor/assets/js/editor */ "../core/app/modules/site-editor/assets/js/editor.js"));
var _module6 = _interopRequireDefault(__webpack_require__(/*! modules/video-playlist/assets/js/editor/module */ "../modules/video-playlist/assets/js/editor/module.js"));
var _module7 = _interopRequireDefault(__webpack_require__(/*! modules/woocommerce/assets/js/editor/module */ "../modules/woocommerce/assets/js/editor/module.js"));
var _module8 = _interopRequireDefault(__webpack_require__(/*! modules/scroll-snap/assets/js/editor/module */ "../modules/scroll-snap/assets/js/editor/module.js"));
var _module9 = _interopRequireDefault(__webpack_require__(/*! modules/payments/assets/js/editor/module */ "../modules/payments/assets/js/editor/module.js"));
var _module10 = _interopRequireDefault(__webpack_require__(/*! modules/loop-builder/assets/js/editor/module */ "../modules/loop-builder/assets/js/editor/module.js"));
var ElementorPro = Marionette.Application.extend({
  config: {},
  modules: {},
  initModules() {
    var QueryControl = __webpack_require__(/*! modules/query-control/assets/js/editor */ "../modules/query-control/assets/js/editor.js"),
      Library = __webpack_require__(/*! modules/library/assets/js/editor */ "../modules/library/assets/js/editor.js"),
      FlipBox = __webpack_require__(/*! modules/flip-box/assets/js/editor/editor */ "../modules/flip-box/assets/js/editor/editor.js"),
      ShareButtons = __webpack_require__(/*! modules/share-buttons/assets/js/editor/editor */ "../modules/share-buttons/assets/js/editor/editor.js"),
      AssetsManager = __webpack_require__(/*! modules/assets-manager/assets/js/editor/editor */ "../modules/assets-manager/assets/js/editor/editor.js"),
      ThemeElements = __webpack_require__(/*! modules/theme-elements/assets/js/editor/editor */ "../modules/theme-elements/assets/js/editor/editor.js");
    this.modules = {
      queryControl: new QueryControl(),
      forms: new _module4.default(),
      library: new Library(),
      customCSS: new _editor.default(),
      globalWidget: new _module2.default(),
      flipBox: new FlipBox(),
      motionFX: new _editor2.default(),
      shareButtons: new ShareButtons(),
      assetsManager: new AssetsManager(),
      themeElements: new ThemeElements(),
      themeBuilder: new _module3.default(),
      siteEditor: new _editor3.default(),
      screenshots: new _module5.default(),
      woocommerce: new _module7.default(),
      stripe: new _module9.default(),
      loopBuilder: new _module10.default(),
      // Popup is depended on Theme Builder.
      popup: new _module.default(),
      videoPlaylistModule: new _module6.default(),
      ScrollSnapModule: new _module8.default()
    };

    // Import the Page Transitions editor module dynamically.
    if (elementorCommon.config.experimentalFeatures['page-transitions']) {
      __webpack_require__.e(/*! import() | page-transitions-editor */ "page-transitions-editor").then(__webpack_require__.bind(__webpack_require__, /*! modules/page-transitions/assets/js/editor/module */ "../modules/page-transitions/assets/js/editor/module.js")).then(_ref => {
        let {
          default: PageTransitions
        } = _ref;
        this.modules.pageTransitions = new PageTransitions();
      });
    }
    if (elementorCommon.config.experimentalFeatures['mega-menu']) {
      elementorCommon.elements.$window.on('elementor/nested-element-type-loaded', async () => {
        // The module should be loaded only when `nestedElements` is available.
        this.modules.megaMenu = new (await __webpack_require__.e(/*! import() | mega-menu-editor */ "mega-menu-editor").then(__webpack_require__.bind(__webpack_require__, /*! modules/mega-menu/assets/js/editor/module */ "../modules/mega-menu/assets/js/editor/module.js"))).default();
      });
    }
    if (elementorCommon.config.experimentalFeatures['nested-elements']) {
      elementorCommon.elements.$window.on('elementor/nested-element-type-loaded', async () => {
        // The module should be loaded only when `nestedElements` is available.
        this.modules.nestedCarousel = new (await __webpack_require__.e(/*! import() | nested-carousel-editor */ "nested-carousel-editor").then(__webpack_require__.bind(__webpack_require__, /*! modules/nested-carousel/assets/js/editor/module */ "../modules/nested-carousel/assets/js/editor/module.js"))).default();
      });
    }
    if (elementorCommon.config.experimentalFeatures['taxonomy-filter']) {
      __webpack_require__.e(/*! import() | loop-filter-editor */ "loop-filter-editor").then(__webpack_require__.bind(__webpack_require__, /*! modules/loop-filter/assets/js/editor/module */ "../modules/loop-filter/assets/js/editor/module.js")).then(_ref2 => {
        let {
          default: LoopFilter
        } = _ref2;
        this.modules.loopFilter = new LoopFilter();
      });
    }
  },
  ajax: {
    prepareArgs(args) {
      args[0] = 'pro_' + args[0];
      return args;
    },
    send() {
      return elementorCommon.ajax.send.apply(elementorCommon.ajax, this.prepareArgs(arguments));
    },
    addRequest() {
      return elementorCommon.ajax.addRequest.apply(elementorCommon.ajax, this.prepareArgs(arguments));
    }
  },
  translate(stringKey, templateArgs) {
    return elementorCommon.translate(stringKey, null, templateArgs, this.config.i18n);
  },
  onStart() {
    this.config = elementorProEditorConfig;
    this.initModules();
    jQuery(window).on('elementor:init', () => this.onElementorInit()).on('elementor/connect/success/editor-pro-activate', this.onActivateSuccess);
  },
  onElementorInit() {
    elementor.on('preview:loaded', () => this.onElementorPreviewLoaded());
    elementorPro.libraryRemoveGetProButtons();
    elementorCommon.debug.addURLToWatch('elementor-pro/assets');
  },
  onElementorPreviewLoaded() {
    elementor.$preview[0].contentWindow.elementorPro = this;
  },
  libraryRemoveGetProButtons() {
    elementor.hooks.addFilter('elementor/editor/template-library/template/action-button', function (viewID, templateData) {
      var _elementor$config, _elementor$config$lib;
      if (templateData.accessLevel === undefined || ((_elementor$config = elementor.config) === null || _elementor$config === void 0 ? void 0 : (_elementor$config$lib = _elementor$config.library_connect) === null || _elementor$config$lib === void 0 ? void 0 : _elementor$config$lib.current_access_level) === undefined) {
        // BC support.
        return templateData.isPro && !elementorPro.config.isActive ? '#tmpl-elementor-pro-template-library-activate-license-button' : '#tmpl-elementor-template-library-insert-button';
      }

      // When the template should be at least "pro" and the license is not active.
      if (templateData.accessLevel > 0 && !elementorPro.config.isActive) {
        return '#tmpl-elementor-pro-template-library-activate-license-button';
      }

      // When the template access levels is greater than the current license access level it should
      // return the "core" view template which is by default "go pro" or "go expert" button.
      if (templateData.accessLevel > elementor.config.library_connect.current_access_level) {
        return viewID;
      }

      // When the current license can insert the template.
      return '#tmpl-elementor-template-library-insert-button';
    });
  },
  onActivateSuccess() {
    // Hide notice.
    elementor.noticeBar.onCloseClick();

    // Mark site connect for insert templates connect screen.
    elementor.config.library_connect.is_connected = true;

    // Mark pro is active - for `this.libraryRemoveGetProButtons`.
    elementorPro.config.isActive = true;
    elementor.notifications.showToast({
      message: __('Connected Successfully', 'elementor')
    });
  }
});
window.elementorPro = new ElementorPro();
elementorPro.start();
})();

/******/ })()
;
//# sourceMappingURL=editor.js.map
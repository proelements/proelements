/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./packages/packages/pro/editor-templates-extended/src/init.ts":
/*!*********************************************************************!*\
  !*** ./packages/packages/pro/editor-templates-extended/src/init.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: function() { return /* binding */ init; }
/* harmony export */ });
/* harmony import */ var _elementor_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor */ "@elementor/editor");
/* harmony import */ var _elementor_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_embedded_documents_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-embedded-documents-manager */ "@elementor/editor-embedded-documents-manager");
/* harmony import */ var _elementor_editor_embedded_documents_manager__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_embedded_documents_manager__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_editor_styles_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/editor-styles-repository */ "@elementor/editor-styles-repository");
/* harmony import */ var _elementor_editor_styles_repository__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_styles_repository__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elementor/editor-v1-adapters */ "@elementor/editor-v1-adapters");
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elementor_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elementor/store */ "@elementor/store");
/* harmony import */ var _elementor_store__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elementor_store__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _elementor_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @elementor/utils */ "@elementor/utils");
/* harmony import */ var _elementor_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_elementor_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _load_templates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./load-templates */ "./packages/packages/pro/editor-templates-extended/src/load-templates.ts");
/* harmony import */ var _render_template_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./render-template-styles */ "./packages/packages/pro/editor-templates-extended/src/render-template-styles.tsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store */ "./packages/packages/pro/editor-templates-extended/src/store.ts");
/* harmony import */ var _templates_styles_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./templates-styles-provider */ "./packages/packages/pro/editor-templates-extended/src/templates-styles-provider.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils */ "./packages/packages/pro/editor-templates-extended/src/utils.ts");











const SETTINGS_CHANGE_DEBOUNCE_MS = 150;
const handleSettingsChange = (0,_elementor_utils__WEBPACK_IMPORTED_MODULE_5__.debounce)(args => {
  const templateIds = (0,_load_templates__WEBPACK_IMPORTED_MODULE_6__.getTemplateIdsFromSettings)(args.settings);
  if (!templateIds.length) {
    return;
  }
  void (0,_load_templates__WEBPACK_IMPORTED_MODULE_6__.loadTemplatesByIds)(templateIds);
}, SETTINGS_CHANGE_DEBOUNCE_MS);
function init() {
  (0,_elementor_store__WEBPACK_IMPORTED_MODULE_4__.__registerSlice)(_store__WEBPACK_IMPORTED_MODULE_8__.slice);
  (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_3__.registerDataHook)('after', 'document/elements/settings', handleSettingsChange);
  (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_3__.registerDataHook)('after', 'editor/documents/attach-preview', async () => {
    (0,_load_templates__WEBPACK_IMPORTED_MODULE_6__.unloadTemplates)();
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_10__.isCoreWithEmbeddedDocumentsManager)()) {
      (0,_templates_styles_provider__WEBPACK_IMPORTED_MODULE_9__.clearTemplatesStyles)();
      await (0,_load_templates__WEBPACK_IMPORTED_MODULE_6__.loadCurrentDocumentTemplates)();
      return;
    }
    await (0,_load_templates__WEBPACK_IMPORTED_MODULE_6__.loadCurrentDocumentTemplates)();
  });
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_10__.isCoreWithEmbeddedDocumentsManager)()) {
    _elementor_editor_embedded_documents_manager__WEBPACK_IMPORTED_MODULE_1__.embeddedDocumentsManager.onDocumentLoad((_docId, data) => {
      void (0,_load_templates__WEBPACK_IMPORTED_MODULE_6__.loadTemplatesFromDocument)(data);
    });
    return;
  }
  _elementor_editor_styles_repository__WEBPACK_IMPORTED_MODULE_2__.stylesRepository.register(_templates_styles_provider__WEBPACK_IMPORTED_MODULE_9__.templatesStylesProvider);
  (0,_elementor_editor__WEBPACK_IMPORTED_MODULE_0__.injectIntoLogic)({
    id: 'templates-styles-extended',
    component: _render_template_styles__WEBPACK_IMPORTED_MODULE_7__.RenderTemplateStyles
  });
}

/***/ }),

/***/ "./packages/packages/pro/editor-templates-extended/src/load-templates.ts":
/*!*******************************************************************************!*\
  !*** ./packages/packages/pro/editor-templates-extended/src/load-templates.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTemplateIdsFromDomElements: function() { return /* binding */ getTemplateIdsFromDomElements; },
/* harmony export */   getTemplateIdsFromElements: function() { return /* binding */ getTemplateIdsFromElements; },
/* harmony export */   getTemplateIdsFromSettings: function() { return /* binding */ getTemplateIdsFromSettings; },
/* harmony export */   loadCurrentDocumentTemplates: function() { return /* binding */ loadCurrentDocumentTemplates; },
/* harmony export */   loadTemplatesByIds: function() { return /* binding */ loadTemplatesByIds; },
/* harmony export */   loadTemplatesFromDocument: function() { return /* binding */ loadTemplatesFromDocument; },
/* harmony export */   unloadTemplates: function() { return /* binding */ unloadTemplates; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_documents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-documents */ "@elementor/editor-documents");
/* harmony import */ var _elementor_editor_documents__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_documents__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_embedded_documents_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-embedded-documents-manager */ "@elementor/editor-embedded-documents-manager");
/* harmony import */ var _elementor_editor_embedded_documents_manager__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_embedded_documents_manager__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_editor_global_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/editor-global-classes */ "@elementor/editor-global-classes");
/* harmony import */ var _elementor_editor_global_classes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_global_classes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elementor/editor-v1-adapters */ "@elementor/editor-v1-adapters");
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elementor_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elementor/store */ "@elementor/store");
/* harmony import */ var _elementor_store__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elementor_store__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store */ "./packages/packages/pro/editor-templates-extended/src/store.ts");
/* harmony import */ var _template_shortcode_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./template-shortcode-utils */ "./packages/packages/pro/editor-templates-extended/src/template-shortcode-utils.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./packages/packages/pro/editor-templates-extended/src/utils.ts");








const TEMPLATE_ATTRIBUTE = 'data-elementor-post-type="elementor_library"';
const DOCUMENT_WRAPPER_ATTR = 'data-elementor-id';
async function loadCurrentDocumentTemplates() {
  const iframeDocument = (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_3__.getCanvasIframeDocument)();
  if (!iframeDocument) {
    return;
  }
  const templateIds = getCurrentDocumentTemplateIds(iframeDocument);
  if (!templateIds.length) {
    return;
  }
  await loadTemplatesByIds(templateIds);
}
async function loadTemplatesFromDocument(data) {
  const templateIds = getTemplateIdsFromElements(data.elements ?? []);
  if (!templateIds.length) {
    return;
  }
  await loadTemplatesByIds(templateIds);
}
async function loadTemplatesByIds(ids) {
  const documents = await fetchDocuments(ids);
  (0,_elementor_store__WEBPACK_IMPORTED_MODULE_4__.__dispatch)(_store__WEBPACK_IMPORTED_MODULE_5__.slice.actions.setTemplates(documents));
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_7__.isCoreWithEmbeddedDocumentsManager)()) {
    documents.forEach(document => {
      _elementor_editor_embedded_documents_manager__WEBPACK_IMPORTED_MODULE_1__.embeddedDocumentsManager.setDocument(document.id, document);
    });
    return;
  }

  // TODO: Remove when pro version is 4.4
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_7__.isCoreWithGlobalClassesPosts)()) {
    documents.forEach(document => (0,_elementor_editor_global_classes__WEBPACK_IMPORTED_MODULE_2__.addDocumentClasses)(document.id));
  }
}
function unloadTemplates() {
  (0,_elementor_store__WEBPACK_IMPORTED_MODULE_4__.__dispatch)(_store__WEBPACK_IMPORTED_MODULE_5__.slice.actions.clearTemplates());
}
function getTemplateIdsFromDomElements(iframeDocument) {
  const {
    id: currentDocumentId
  } = (0,_elementor_editor_documents__WEBPACK_IMPORTED_MODULE_0__.getV1CurrentDocument)();
  const domElements = [...iframeDocument.body.querySelectorAll(`[${TEMPLATE_ATTRIBUTE}]`)];
  return domElements.map(el => Number(el.getAttribute(DOCUMENT_WRAPPER_ATTR))).filter(templateId => !isNaN(templateId) && templateId !== currentDocumentId);
}
function getCurrentDocumentTemplateIds(iframeDocument) {
  const fromConfig = getTemplateIdsFromElements((0,_elementor_editor_documents__WEBPACK_IMPORTED_MODULE_0__.getV1CurrentDocument)().config?.elements ?? []);
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_7__.isCoreHandlingTemplateStyles)()) {
    return [...new Set(fromConfig)];
  }
  const fromDom = getTemplateIdsFromDomElements(iframeDocument);
  return [...new Set([...fromDom, ...fromConfig])];
}
function parseTemplateId({
  template_id: templateId
}) {
  if (!templateId) {
    return null;
  }
  const id = Number(templateId);
  return isNaN(id) ? null : id;
}
function getTemplateIdsFromSettings(settings) {
  if (!settings) {
    return [];
  }
  const {
    alternate_templates: alternateTemplates = []
  } = settings;
  const fromTemplateId = [settings, ...alternateTemplates].map(parseTemplateId).filter(id => id !== null);
  const fromShortcodes = (0,_template_shortcode_utils__WEBPACK_IMPORTED_MODULE_6__.extractTemplateIdsFromSettingsValues)(settings);
  return [...new Set([...fromTemplateId, ...fromShortcodes])];
}
function getTemplateIdsFromElements(elements) {
  const flattenElements = els => {
    return els.flatMap(element => [element, ...flattenElements(element.elements ?? [])]);
  };
  return flattenElements(elements).flatMap(element => getTemplateIdsFromSettings(element.settings));
}
async function fetchDocuments(ids) {
  const results = await Promise.all(ids.map(async id => {
    try {
      // using ajax.load instead of the document-manager as the latter causes an issue when trying to edit a template
      return await _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_3__.ajax.load({
        data: {
          id
        },
        action: 'get_document_config',
        unique_id: `template-${id}-styles-extended`
      });
    } catch {
      return null;
    }
  }));
  return results.filter(doc => doc !== null);
}

/***/ }),

/***/ "./packages/packages/pro/editor-templates-extended/src/render-template-styles.tsx":
/*!****************************************************************************************!*\
  !*** ./packages/packages/pro/editor-templates-extended/src/render-template-styles.tsx ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RenderTemplateStyles: function() { return /* binding */ RenderTemplateStyles; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _templates_styles_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates-styles-provider */ "./packages/packages/pro/editor-templates-extended/src/templates-styles-provider.ts");
/* harmony import */ var _use_loaded_templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-loaded-templates */ "./packages/packages/pro/editor-templates-extended/src/use-loaded-templates.ts");



const RenderTemplateStyles = () => {
  const templates = (0,_use_loaded_templates__WEBPACK_IMPORTED_MODULE_2__.useLoadedTemplates)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const styles = templates.flatMap(extractStylesFromDocument);
    (0,_templates_styles_provider__WEBPACK_IMPORTED_MODULE_1__.addTemplateStyles)(styles);
  }, [templates]);
  return null;
};
function extractStylesFromDocument(elements) {
  if (!elements.length) {
    return [];
  }
  return elements.flatMap(extractStylesFromElement);
}
function extractStylesFromElement(element) {
  return [...Object.values(element.styles ?? {}), ...(element.elements ?? []).flatMap(extractStylesFromElement)];
}

/***/ }),

/***/ "./packages/packages/pro/editor-templates-extended/src/store.ts":
/*!**********************************************************************!*\
  !*** ./packages/packages/pro/editor-templates-extended/src/store.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectTemplates: function() { return /* binding */ selectTemplates; },
/* harmony export */   slice: function() { return /* binding */ slice; }
/* harmony export */ });
/* harmony import */ var _elementor_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/store */ "@elementor/store");
/* harmony import */ var _elementor_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_store__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  entities: {}
};
const SLICE = 'templatesExtended';
const slice = (0,_elementor_store__WEBPACK_IMPORTED_MODULE_0__.__createSlice)({
  name: SLICE,
  initialState,
  reducers: {
    setTemplates(state, action) {
      action.payload.forEach(doc => {
        state.entities[doc.id] = doc.elements ?? [];
      });
    },
    clearTemplates(state) {
      state.entities = {};
    }
  }
});
const selectEntities = state => state[SLICE].entities;
const selectTemplates = (0,_elementor_store__WEBPACK_IMPORTED_MODULE_0__.__createSelector)([selectEntities], entities => Object.values(entities));

/***/ }),

/***/ "./packages/packages/pro/editor-templates-extended/src/template-shortcode-utils.ts":
/*!*****************************************************************************************!*\
  !*** ./packages/packages/pro/editor-templates-extended/src/template-shortcode-utils.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extractTemplateIdsFromSettingsValues: function() { return /* binding */ extractTemplateIdsFromSettingsValues; },
/* harmony export */   extractTemplateIdsFromShortcodeString: function() { return /* binding */ extractTemplateIdsFromShortcodeString; }
/* harmony export */ });
const ELEMENTOR_TEMPLATE_SHORTCODE_PATTERN = /\[elementor-template\b[^\]]*\]/gi;
function extractTemplateIdsFromShortcodeString(value) {
  const matches = value.match(ELEMENTOR_TEMPLATE_SHORTCODE_PATTERN);
  if (!matches) {
    return [];
  }
  return matches.map(parseElementorTemplateShortcodeId).filter(id => id !== null);
}
function extractTemplateIdsFromSettingsValues(settings) {
  if (!settings) {
    return [];
  }
  return collectShortcodeTemplateIdsFromValue(settings);
}
function collectShortcodeTemplateIdsFromValue(value) {
  if (typeof value === 'string') {
    return extractTemplateIdsFromShortcodeString(value);
  }
  if (Array.isArray(value)) {
    return value.flatMap(collectShortcodeTemplateIdsFromValue);
  }
  if (value && typeof value === 'object') {
    return Object.values(value).flatMap(collectShortcodeTemplateIdsFromValue);
  }
  return [];
}
function parseElementorTemplateShortcodeId(shortcode) {
  const idMatch = shortcode.match(/\bid=["']?(\d+)["']?/i);
  if (!idMatch) {
    return null;
  }
  const id = Number(idMatch[1]);
  return isNaN(id) ? null : id;
}

/***/ }),

/***/ "./packages/packages/pro/editor-templates-extended/src/templates-styles-provider.ts":
/*!******************************************************************************************!*\
  !*** ./packages/packages/pro/editor-templates-extended/src/templates-styles-provider.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTemplateStyles: function() { return /* binding */ addTemplateStyles; },
/* harmony export */   clearTemplatesStyles: function() { return /* binding */ clearTemplatesStyles; },
/* harmony export */   templatesStylesProvider: function() { return /* binding */ templatesStylesProvider; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_styles_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-styles-repository */ "@elementor/editor-styles-repository");
/* harmony import */ var _elementor_editor_styles_repository__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_styles_repository__WEBPACK_IMPORTED_MODULE_0__);

let styles = [];
const listeners = new Set();
function addTemplateStyles(newStyles) {
  styles = [...styles, ...newStyles];
  listeners.forEach(cb => cb());
}
function clearTemplatesStyles() {
  styles = [];
  listeners.forEach(cb => cb());
}
const templatesStylesProvider = (0,_elementor_editor_styles_repository__WEBPACK_IMPORTED_MODULE_0__.createStylesProvider)({
  key: 'templates-styles-extended',
  priority: 50,
  subscribe: cb => {
    listeners.add(cb);
    return () => {
      listeners.delete(cb);
    };
  },
  actions: {
    all: () => styles,
    get: id => styles.find(style => style.id === id) ?? null
  }
});

/***/ }),

/***/ "./packages/packages/pro/editor-templates-extended/src/use-loaded-templates.ts":
/*!*************************************************************************************!*\
  !*** ./packages/packages/pro/editor-templates-extended/src/use-loaded-templates.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLoadedTemplates: function() { return /* binding */ useLoadedTemplates; }
/* harmony export */ });
/* harmony import */ var _elementor_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/store */ "@elementor/store");
/* harmony import */ var _elementor_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./packages/packages/pro/editor-templates-extended/src/store.ts");


function useLoadedTemplates() {
  return (0,_elementor_store__WEBPACK_IMPORTED_MODULE_0__.__useSelector)(_store__WEBPACK_IMPORTED_MODULE_1__.selectTemplates);
}

/***/ }),

/***/ "./packages/packages/pro/editor-templates-extended/src/utils.ts":
/*!**********************************************************************!*\
  !*** ./packages/packages/pro/editor-templates-extended/src/utils.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isCoreHandlingTemplateStyles: function() { return /* binding */ isCoreHandlingTemplateStyles; },
/* harmony export */   isCoreWithEmbeddedDocumentsManager: function() { return /* binding */ isCoreWithEmbeddedDocumentsManager; },
/* harmony export */   isCoreWithGlobalClassesPosts: function() { return /* binding */ isCoreWithGlobalClassesPosts; }
/* harmony export */ });
/* harmony import */ var _elementor_core_adapter_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/core-adapter-utils */ "@elementor/core-adapter-utils");
/* harmony import */ var _elementor_core_adapter_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_core_adapter_utils__WEBPACK_IMPORTED_MODULE_0__);

const CORE_VERSION_4_1 = '4.1';
const CORE_VERSION_4_2 = '4.2';
const isCoreHandlingTemplateStyles = () => !(0,_elementor_core_adapter_utils__WEBPACK_IMPORTED_MODULE_0__.isCoreAtLeast)(CORE_VERSION_4_1);
const isCoreWithGlobalClassesPosts = () => (0,_elementor_core_adapter_utils__WEBPACK_IMPORTED_MODULE_0__.isCoreAtLeast)(CORE_VERSION_4_1);
const isCoreWithEmbeddedDocumentsManager = () => (0,_elementor_core_adapter_utils__WEBPACK_IMPORTED_MODULE_0__.isCoreAtLeast)(CORE_VERSION_4_2);

/***/ }),

/***/ "react":
/*!**************************!*\
  !*** external ["React"] ***!
  \**************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@elementor/core-adapter-utils":
/*!***************************************************!*\
  !*** external ["elementorV2","coreAdapterUtils"] ***!
  \***************************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["coreAdapterUtils"];

/***/ }),

/***/ "@elementor/editor":
/*!*****************************************!*\
  !*** external ["elementorV2","editor"] ***!
  \*****************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["editor"];

/***/ }),

/***/ "@elementor/editor-documents":
/*!**************************************************!*\
  !*** external ["elementorV2","editorDocuments"] ***!
  \**************************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["editorDocuments"];

/***/ }),

/***/ "@elementor/editor-embedded-documents-manager":
/*!*****************************************************************!*\
  !*** external ["elementorV2","editorEmbeddedDocumentsManager"] ***!
  \*****************************************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["editorEmbeddedDocumentsManager"];

/***/ }),

/***/ "@elementor/editor-global-classes":
/*!******************************************************!*\
  !*** external ["elementorV2","editorGlobalClasses"] ***!
  \******************************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["editorGlobalClasses"];

/***/ }),

/***/ "@elementor/editor-styles-repository":
/*!*********************************************************!*\
  !*** external ["elementorV2","editorStylesRepository"] ***!
  \*********************************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["editorStylesRepository"];

/***/ }),

/***/ "@elementor/editor-v1-adapters":
/*!***************************************************!*\
  !*** external ["elementorV2","editorV1Adapters"] ***!
  \***************************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["editorV1Adapters"];

/***/ }),

/***/ "@elementor/store":
/*!****************************************!*\
  !*** external ["elementorV2","store"] ***!
  \****************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["store"];

/***/ }),

/***/ "@elementor/utils":
/*!****************************************!*\
  !*** external ["elementorV2","utils"] ***!
  \****************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["utils"];

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
!function() {
/*!**********************************************************************!*\
  !*** ./packages/packages/pro/editor-templates-extended/src/index.ts ***!
  \**********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: function() { return /* reexport safe */ _init__WEBPACK_IMPORTED_MODULE_0__.init; },
/* harmony export */   isCoreHandlingTemplateStyles: function() { return /* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.isCoreHandlingTemplateStyles; },
/* harmony export */   useLoadedTemplates: function() { return /* reexport safe */ _use_loaded_templates__WEBPACK_IMPORTED_MODULE_1__.useLoadedTemplates; }
/* harmony export */ });
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "./packages/packages/pro/editor-templates-extended/src/init.ts");
/* harmony import */ var _use_loaded_templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-loaded-templates */ "./packages/packages/pro/editor-templates-extended/src/use-loaded-templates.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./packages/packages/pro/editor-templates-extended/src/utils.ts");



}();
(window.elementorV2 = window.elementorV2 || {}).editorTemplatesExtended = __webpack_exports__;
/******/ })()
;
window.elementorV2.editorTemplatesExtended?.init?.();

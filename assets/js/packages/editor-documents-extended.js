/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@elementor/editor-app-bar":
/*!*****************************************************************!*\
  !*** external ["__UNSTABLE__elementorPackages","editorAppBar"] ***!
  \*****************************************************************/
/***/ (function(module) {

module.exports = window["__UNSTABLE__elementorPackages"]["editorAppBar"];

/***/ }),

/***/ "@elementor/editor-documents":
/*!********************************************************************!*\
  !*** external ["__UNSTABLE__elementorPackages","editorDocuments"] ***!
  \********************************************************************/
/***/ (function(module) {

module.exports = window["__UNSTABLE__elementorPackages"]["editorDocuments"];

/***/ }),

/***/ "@elementor/editor-v1-adapters":
/*!*********************************************************************!*\
  !*** external ["__UNSTABLE__elementorPackages","editorV1Adapters"] ***!
  \*********************************************************************/
/***/ (function(module) {

module.exports = window["__UNSTABLE__elementorPackages"]["editorV1Adapters"];

/***/ }),

/***/ "@elementor/icons":
/*!**********************************************************!*\
  !*** external ["__UNSTABLE__elementorPackages","icons"] ***!
  \**********************************************************/
/***/ (function(module) {

module.exports = window["__UNSTABLE__elementorPackages"]["icons"];

/***/ }),

/***/ "@elementor/store":
/*!**********************************************************!*\
  !*** external ["__UNSTABLE__elementorPackages","store"] ***!
  \**********************************************************/
/***/ (function(module) {

module.exports = window["__UNSTABLE__elementorPackages"]["store"];

/***/ }),

/***/ "@elementor/ui":
/*!*******************************************************!*\
  !*** external ["__UNSTABLE__elementorPackages","ui"] ***!
  \*******************************************************/
/***/ (function(module) {

module.exports = window["__UNSTABLE__elementorPackages"]["ui"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**************************************************************************!*\
  !*** ./node_modules/@elementor/editor-documents-extended/dist/index.mjs ***!
  \**************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _elementor_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/store */ "@elementor/store");
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-v1-adapters */ "@elementor/editor-v1-adapters");
/* harmony import */ var _elementor_editor_app_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/editor-app-bar */ "@elementor/editor-app-bar");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _elementor_editor_documents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elementor/editor-documents */ "@elementor/editor-documents");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @elementor/icons */ "@elementor/icons");
// src/store/index.ts

var initialState = {
  entities: {}
};
var slice = (0,_elementor_store__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "documentsExtended",
  initialState,
  reducers: {
    init(state, { payload }) {
      state.entities = payload.entities;
    },
    addDocument(state, { payload }) {
      state.entities[payload.id] = payload;
    }
  }
});

// src/sync/sync-store.ts


function syncStore() {
  syncInitialization();
  syncOnDocumentOpen();
}
function syncInitialization() {
  const { init: init5 } = slice.actions;
  (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_1__.listenTo)(
    (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_1__.v1ReadyEvent)(),
    () => {
      const documentsManager = getV1DocumentsManager();
      const entities = Object.entries(documentsManager.documents).reduce((acc, [id, document]) => {
        acc[id] = normalizeV1Document(document);
        return acc;
      }, {});
      (0,_elementor_store__WEBPACK_IMPORTED_MODULE_0__.dispatch)(init5({ entities }));
    }
  );
}
function syncOnDocumentOpen() {
  const { addDocument } = slice.actions;
  (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_1__.listenTo)(
    (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_1__.commandEndEvent)("editor/documents/open"),
    () => {
      const documentsManager = getV1DocumentsManager();
      const currentDocument = normalizeV1Document(documentsManager.getCurrent());
      (0,_elementor_store__WEBPACK_IMPORTED_MODULE_0__.dispatch)(addDocument(currentDocument));
    }
  );
}
function getV1DocumentsManager() {
  const documentsManager = window.elementor?.documents;
  if (!documentsManager) {
    throw new Error("Elementor Editor V1 documents manager not found");
  }
  return documentsManager;
}
function normalizeV1Document(documentData) {
  return {
    id: documentData.id,
    locationKey: documentData.config.theme_builder?.settings?.location || null
  };
}

// src/extensions/popups/index.ts


// src/extensions/popups/hooks/use-popup-triggers-props.ts



// src/icons/hierarchy-icon.tsx


var HierarchyIcon = react__WEBPACK_IMPORTED_MODULE_5__.forwardRef((props, ref) => {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_5__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_6__.SvgIcon, { viewBox: "0 0 24 24", ...props, ref }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_5__.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 3.75C10.3096 3.75 9.75 4.30964 9.75 5V7C9.75 7.69036 10.3096 8.25 11 8.25H13C13.6904 8.25 14.25 7.69036 14.25 7V5C14.25 4.30964 13.6904 3.75 13 3.75H11ZM12.75 9.75H13C14.5188 9.75 15.75 8.51878 15.75 7V5C15.75 3.48122 14.5188 2.25 13 2.25H11C9.48122 2.25 8.25 3.48122 8.25 5V7C8.25 8.51878 9.48122 9.75 11 9.75H11.25V11.25H8C7.27065 11.25 6.57118 11.5397 6.05546 12.0555C5.53973 12.5712 5.25 13.2707 5.25 14V14.25H5C3.48122 14.25 2.25 15.4812 2.25 17V19C2.25 20.5188 3.48122 21.75 5 21.75H7C8.51878 21.75 9.75 20.5188 9.75 19V17C9.75 15.4812 8.51878 14.25 7 14.25H6.75V14C6.75 13.6685 6.8817 13.3505 7.11612 13.1161C7.35054 12.8817 7.66848 12.75 8 12.75H16C16.3315 12.75 16.6495 12.8817 16.8839 13.1161C17.1183 13.3505 17.25 13.6685 17.25 14V14.25H17C15.4812 14.25 14.25 15.4812 14.25 17V19C14.25 20.5188 15.4812 21.75 17 21.75H19C20.5188 21.75 21.75 20.5188 21.75 19V17C21.75 15.4812 20.5188 14.25 19 14.25H18.75V14C18.75 13.2707 18.4603 12.5712 17.9445 12.0555C17.4288 11.5397 16.7293 11.25 16 11.25H12.75V9.75ZM17 15.75C16.3096 15.75 15.75 16.3096 15.75 17V19C15.75 19.6904 16.3096 20.25 17 20.25H19C19.6904 20.25 20.25 19.6904 20.25 19V17C20.25 16.3096 19.6904 15.75 19 15.75H17ZM5 15.75C4.30964 15.75 3.75 16.3096 3.75 17V19C3.75 19.6904 4.30964 20.25 5 20.25H7C7.69036 20.25 8.25 19.6904 8.25 19V17C8.25 16.3096 7.69036 15.75 7 15.75H5Z" }));
});
var hierarchy_icon_default = HierarchyIcon;

// src/icons/trigger-icon.tsx


var TriggerIcon = react__WEBPACK_IMPORTED_MODULE_5__.forwardRef((props, ref) => {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_5__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_6__.SvgIcon, { viewBox: "0 0 24 24", ...props, ref }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_5__.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.46967 1.46967C3.76256 1.17678 4.23744 1.17678 4.53033 1.46967L5.53033 2.46967C5.82322 2.76256 5.82322 3.23744 5.53033 3.53033C5.23744 3.82322 4.76256 3.82322 4.46967 3.53033L3.46967 2.53033C3.17678 2.23744 3.17678 1.76256 3.46967 1.46967ZM15.5303 1.46967C15.8232 1.76256 15.8232 2.23744 15.5303 2.53033L14.5303 3.53033C14.2374 3.82322 13.7626 3.82322 13.4697 3.53033C13.1768 3.23744 13.1768 2.76256 13.4697 2.46967L14.4697 1.46967C14.7626 1.17678 15.2374 1.17678 15.5303 1.46967ZM9.5 3.75C9.30109 3.75 9.11032 3.82902 8.96967 3.96967C8.82902 4.11032 8.75 4.30109 8.75 4.5V13C8.75 13.3033 8.56727 13.5768 8.28702 13.6929C8.00677 13.809 7.68418 13.7448 7.46968 13.5303L5.99991 12.0606C5.82378 11.8848 5.59369 11.7726 5.34668 11.7423C5.09954 11.7119 4.84934 11.765 4.63582 11.8931C4.4683 11.9936 4.34633 12.1555 4.29628 12.3443C4.24623 12.5331 4.27182 12.734 4.36759 12.9043C6.2544 16.2581 7.33302 18.1371 7.62819 18.5904C7.62825 18.5905 7.62812 18.5903 7.62819 18.5904L7.82231 18.8875C7.82253 18.8878 7.82274 18.8881 7.82295 18.8885C8.3011 19.6142 8.95191 20.2098 9.71702 20.622C10.482 21.0341 11.3372 21.2499 12.206 21.25C12.2066 21.25 12.2072 21.25 12.2078 21.25H13.9999C15.3923 21.25 16.7277 20.6969 17.7123 19.7123C18.6968 18.7277 19.2499 17.3924 19.2499 16V11.5C19.2499 11.3011 19.1709 11.1103 19.0303 10.9697C18.8896 10.829 18.6989 10.75 18.4999 10.75C18.301 10.75 18.1103 10.829 17.9696 10.9697C17.8312 11.1081 17.7525 11.295 17.75 11.4904V12C17.75 12.4142 17.4142 12.75 17 12.75C16.5858 12.75 16.25 12.4142 16.25 12V11.5097C16.25 11.5064 16.2499 11.5032 16.2499 11.5C16.2499 11.4945 16.25 11.4889 16.25 11.4834V10.5C16.25 10.3011 16.171 10.1103 16.0303 9.96967C15.8897 9.82902 15.6989 9.75 15.5 9.75C15.3011 9.75 15.1103 9.82902 14.9697 9.96967C14.829 10.1103 14.75 10.3011 14.75 10.5V12C14.75 12.4142 14.4142 12.75 14 12.75C13.5858 12.75 13.25 12.4142 13.25 12V9.5C13.25 9.30109 13.171 9.11032 13.0303 8.96967C12.8897 8.82902 12.6989 8.75 12.5 8.75C12.3011 8.75 12.1103 8.82902 11.9697 8.96967C11.829 9.11032 11.75 9.30109 11.75 9.5V12C11.75 12.4142 11.4142 12.75 11 12.75C10.5858 12.75 10.25 12.4142 10.25 12V4.5C10.25 4.30109 10.171 4.11032 10.0303 3.96967C9.88968 3.82902 9.69891 3.75 9.5 3.75ZM11.75 7.37868V4.5C11.75 3.90326 11.5129 3.33097 11.091 2.90901C10.669 2.48705 10.0967 2.25 9.5 2.25C8.90326 2.25 8.33097 2.48705 7.90901 2.90901C7.48705 3.33097 7.25 3.90326 7.25 4.5V11.1894L7.06026 10.9997C6.64751 10.5874 6.10855 10.3245 5.52952 10.2534C4.95058 10.1823 4.36448 10.3067 3.86429 10.6067M11.75 7.37868C11.9887 7.2943 12.242 7.25 12.5 7.25C13.0967 7.25 13.669 7.48705 14.091 7.90901C14.2603 8.0783 14.3998 8.2718 14.5062 8.48136C14.8125 8.33057 15.1521 8.25 15.5 8.25C16.0967 8.25 16.669 8.48705 17.091 8.90901C17.2603 9.0783 17.3998 9.27179 17.5062 9.48134C17.8125 9.33056 18.1521 9.25 18.4999 9.25C19.0967 9.25 19.669 9.48705 20.0909 9.90901C20.5129 10.331 20.7499 10.9033 20.7499 11.5V16C20.7499 17.7902 20.0388 19.5071 18.7729 20.773C17.507 22.0388 15.7901 22.75 13.9999 22.75H12.2081C12.208 22.75 12.2081 22.75 12.2081 22.75H11.9999C11.9646 22.75 11.9298 22.7476 11.8958 22.7428C10.8859 22.6962 9.89798 22.4233 9.00562 21.9426C8.02147 21.4124 7.1844 20.6461 6.56957 19.7125L6.56807 19.7102L6.3715 19.4093C6.04238 18.9041 4.93105 16.9651 3.06029 13.6397C2.77296 13.129 2.69621 12.5264 2.84636 11.96C2.99649 11.3936 3.36183 10.9081 3.86429 10.6067M16 6.75H15C14.5858 6.75 14.25 6.41421 14.25 6C14.25 5.58579 14.5858 5.25 15 5.25H16C16.4142 5.25 16.75 5.58579 16.75 6C16.75 6.41421 16.4142 6.75 16 6.75ZM2.25 7C2.25 6.58579 2.58579 6.25 3 6.25H4C4.41421 6.25 4.75 6.58579 4.75 7C4.75 7.41421 4.41421 7.75 4 7.75H3C2.58579 7.75 2.25 7.41421 2.25 7Z" }));
});
var trigger_icon_default = TriggerIcon;

// src/extensions/popups/hooks/use-popup-triggers-props.ts

function usePopupTriggersProps() {
  const document = (0,_elementor_editor_documents__WEBPACK_IMPORTED_MODULE_4__.useActiveDocument)();
  const visible = "popup" === document?.type.value;
  return {
    icon: trigger_icon_default,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Triggers", "elementor-pro"),
    visible,
    onClick: () => {
      (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_1__.openRoute)("theme-builder-publish/triggers");
    }
  };
}

// src/extensions/popups/hooks/use-popup-advanced-rules-props.ts




function usePopupAdvancedRulesProps() {
  const document = (0,_elementor_editor_documents__WEBPACK_IMPORTED_MODULE_4__.useActiveDocument)();
  const visible = "popup" === document?.type.value;
  return {
    icon: _elementor_icons__WEBPACK_IMPORTED_MODULE_7__.SettingsIcon,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Advanced Rules", "elementor-pro"),
    visible,
    onClick: () => {
      (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_1__.openRoute)("theme-builder-publish/timing");
    }
  };
}

// src/extensions/popups/index.ts
function init() {
  _elementor_editor_app_bar__WEBPACK_IMPORTED_MODULE_2__.documentOptionsMenu.registerAction({
    id: "popup-triggers",
    priority: 20,
    // After display conditions.
    useProps: usePopupTriggersProps
  });
  _elementor_editor_app_bar__WEBPACK_IMPORTED_MODULE_2__.documentOptionsMenu.registerAction({
    id: "popup-advanced-rules",
    priority: 30,
    // After popup triggers.
    useProps: usePopupAdvancedRulesProps
  });
}

// src/extensions/display-conditions/index.ts


// src/extensions/display-conditions/hooks/use-document-display-conditions-props.ts



// src/extensions/display-conditions/hooks/use-active-document-extended.ts


function useActiveDocumentExtended() {
  const document = (0,_elementor_editor_documents__WEBPACK_IMPORTED_MODULE_4__.useActiveDocument)();
  const documentExtensions = (0,_elementor_store__WEBPACK_IMPORTED_MODULE_0__.useSelector)((state) => {
    if (!document) {
      return null;
    }
    return state.documentsExtended.entities[document.id] || null;
  });
  if (!documentExtensions) {
    return null;
  }
  return {
    ...document,
    ...documentExtensions
  };
}

// src/extensions/display-conditions/hooks/use-document-display-conditions-props.ts
function useDocumentDisplayConditionsProps() {
  const document = useActiveDocumentExtended();
  const visible = !!document?.locationKey;
  return {
    icon: hierarchy_icon_default,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Display Conditions", "elementor-pro"),
    visible,
    onClick: () => {
      (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_1__.openRoute)("theme-builder-publish/conditions");
    }
  };
}

// src/extensions/display-conditions/index.ts
function init2() {
  _elementor_editor_app_bar__WEBPACK_IMPORTED_MODULE_2__.documentOptionsMenu.registerAction({
    id: "document-display-conditions",
    priority: 10,
    // Before popup triggers.
    useProps: useDocumentDisplayConditionsProps
  });
}

// src/extensions/index.ts
function init3() {
  init();
  init2();
}

// src/init.ts

function init4() {
  init3();
  initStore();
}
function initStore() {
  (0,_elementor_store__WEBPACK_IMPORTED_MODULE_0__.registerSlice)(slice);
  syncStore();
}

// src/index.ts
init4();
//# sourceMappingURL=index.mjs.map
}();
(window.__UNSTABLE__elementorPackages = window.__UNSTABLE__elementorPackages || {}).editorDocumentsExtended = __webpack_exports__;
/******/ })()
;
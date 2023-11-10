/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@elementor/editor-app-bar":
/*!***********************************************!*\
  !*** external ["elementorV2","editorAppBar"] ***!
  \***********************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["editorAppBar"];

/***/ }),

/***/ "@elementor/editor-v1-adapters":
/*!***************************************************!*\
  !*** external ["elementorV2","editorV1Adapters"] ***!
  \***************************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["editorV1Adapters"];

/***/ }),

/***/ "@elementor/icons":
/*!****************************************!*\
  !*** external ["elementorV2","icons"] ***!
  \****************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["icons"];

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
/*!*************************************************************!*\
  !*** ./node_modules/@elementor/editor-notes/dist/index.mjs ***!
  \*************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _elementor_editor_app_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-app-bar */ "@elementor/editor-app-bar");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/editor-v1-adapters */ "@elementor/editor-v1-adapters");
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elementor/icons */ "@elementor/icons");
// src/init.ts


// src/hooks/use-notes-action-props.ts



function useNotesActionProps() {
  const { isActive, isBlocked } = (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_2__.__privateUseRouteStatus)("notes", {
    blockOnPreviewMode: false
  });
  return {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Notes", "elementor-pro"),
    icon: _elementor_icons__WEBPACK_IMPORTED_MODULE_3__.MessageIcon,
    onClick: () => (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_2__.__privateRunCommand)("notes/toggle"),
    selected: isActive,
    disabled: isBlocked
  };
}

// src/init.ts
function init() {
  _elementor_editor_app_bar__WEBPACK_IMPORTED_MODULE_0__.toolsMenu.registerToggleAction({
    id: "toggle-notes",
    priority: 4,
    useProps: useNotesActionProps
  });
}

// src/index.ts
init();
//# sourceMappingURL=index.mjs.map
}();
(window.elementorV2 = window.elementorV2 || {}).editorNotes = __webpack_exports__;
/******/ })()
;
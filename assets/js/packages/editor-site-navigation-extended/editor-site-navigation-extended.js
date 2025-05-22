/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@elementor/editor-site-navigation":
/*!*******************************************************!*\
  !*** external ["elementorV2","editorSiteNavigation"] ***!
  \*******************************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["editorSiteNavigation"];

/***/ }),

/***/ "@elementor/icons":
/*!****************************************!*\
  !*** external ["elementorV2","icons"] ***!
  \****************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["icons"];

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!********************************************************************************!*\
  !*** ./node_modules/@elementor/editor-site-navigation-extended/dist/index.mjs ***!
  \********************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: function() { return /* binding */ init; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_site_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-site-navigation */ "@elementor/editor-site-navigation");
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/icons */ "@elementor/icons");
// src/icons-map.ts


function extendDocumentsIcons() {
  if (_elementor_editor_site_navigation__WEBPACK_IMPORTED_MODULE_0__.extendIconsMap) {
    (0,_elementor_editor_site_navigation__WEBPACK_IMPORTED_MODULE_0__.extendIconsMap)({
      header: _elementor_icons__WEBPACK_IMPORTED_MODULE_1__.HeaderTemplateIcon,
      footer: _elementor_icons__WEBPACK_IMPORTED_MODULE_1__.FooterTemplateIcon,
      "single-post": _elementor_icons__WEBPACK_IMPORTED_MODULE_1__.PostTypeIcon,
      "single-page": _elementor_icons__WEBPACK_IMPORTED_MODULE_1__.PageTypeIcon,
      popup: _elementor_icons__WEBPACK_IMPORTED_MODULE_1__.PopupTemplateIcon,
      archive: _elementor_icons__WEBPACK_IMPORTED_MODULE_1__.ArchiveTemplateIcon,
      "search-results": _elementor_icons__WEBPACK_IMPORTED_MODULE_1__.SearchResultsTemplateIcon,
      "loop-item": _elementor_icons__WEBPACK_IMPORTED_MODULE_1__.LoopItemTemplateIcon,
      "error-404": _elementor_icons__WEBPACK_IMPORTED_MODULE_1__.Error404TemplateIcon,
      "landing-page": _elementor_icons__WEBPACK_IMPORTED_MODULE_1__.LandingPageTemplateIcon
    });
  }
}

// src/init.ts
function init() {
  extendDocumentsIcons();
}


}();
(window.elementorV2 = window.elementorV2 || {}).editorSiteNavigationExtended = __webpack_exports__;
/******/ })()
;
window.elementorV2.editorSiteNavigationExtended?.init?.();
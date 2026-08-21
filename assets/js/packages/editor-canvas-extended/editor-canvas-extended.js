/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./packages/packages/pro/editor-canvas-extended/src/register-drop-container-redirect.ts":
/*!**********************************************************************************************!*\
  !*** ./packages/packages/pro/editor-canvas-extended/src/register-drop-container-redirect.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerDropContainerRedirect: function() { return /* binding */ registerDropContainerRedirect; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-v1-adapters */ "@elementor/editor-v1-adapters");
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Hooks `preview/drop` so widgets land in the correct container during nested edit modes.
 *
 * Panel clicks with empty selection target the document root; drag-and-drop can also miss the
 * subtree being edited. Register this when a scoped context (e.g. component document, loop, etc.)
 * should absorb those drops instead of the page or an outer container.
 *
 * @param config - When to handle drops and how to resolve the redirected container.
 */
function registerDropContainerRedirect(config) {
  (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__.registerDataHook)('dependency', 'preview/drop', args => {
    if (!config.shouldHandle()) {
      return true;
    }
    const containers = args.containers ?? (args.container ? [args.container] : []);
    for (const container of containers) {
      const {
        shouldRedirect,
        container: redirectedContainer
      } = config.resolveRedirect(container);
      if (!shouldRedirect) {
        continue;
      }
      if (args.containers) {
        const index = args.containers.indexOf(container);
        args.containers[index] = redirectedContainer;
      } else {
        args.container = redirectedContainer;
      }
    }
    return true;
  });
}

/***/ }),

/***/ "@elementor/editor-v1-adapters":
/*!***************************************************!*\
  !*** external ["elementorV2","editorV1Adapters"] ***!
  \***************************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["editorV1Adapters"];

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
/*!*******************************************************************!*\
  !*** ./packages/packages/pro/editor-canvas-extended/src/index.ts ***!
  \*******************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerDropContainerRedirect: function() { return /* reexport safe */ _register_drop_container_redirect__WEBPACK_IMPORTED_MODULE_0__.registerDropContainerRedirect; }
/* harmony export */ });
/* harmony import */ var _register_drop_container_redirect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-drop-container-redirect */ "./packages/packages/pro/editor-canvas-extended/src/register-drop-container-redirect.ts");

}();
(window.elementorV2 = window.elementorV2 || {}).editorCanvasExtended = __webpack_exports__;
/******/ })()
;
window.elementorV2.editorCanvasExtended?.init?.();
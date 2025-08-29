/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./packages/packages/pro/editor-notes/src/hooks/use-notes-action-props.ts":
/*!********************************************************************************!*\
  !*** ./packages/packages/pro/editor-notes/src/hooks/use-notes-action-props.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useNotesActionProps; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-v1-adapters */ "@elementor/editor-v1-adapters");
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/icons */ "@elementor/icons");
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);



function useNotesActionProps() {
  const {
    isActive,
    isBlocked
  } = (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__.__privateUseRouteStatus)('notes', {
    allowedEditModes: ['edit', 'preview']
  });
  return {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Notes', 'elementor-pro'),
    icon: _elementor_icons__WEBPACK_IMPORTED_MODULE_1__.MessageIcon,
    onClick: () => {
      const extendedWindow = window;
      const config = extendedWindow?.elementor?.editorEvents?.config;
      if (config) {
        extendedWindow.elementor.editorEvents.dispatchEvent(config.names.topBar.notes, {
          location: config.locations.topBar,
          secondaryLocation: config.secondaryLocations.notes,
          trigger: config.triggers.toggleClick,
          element: config.elements.buttonIcon
        });
      }
      (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__.__privateRunCommand)('notes/toggle');
    },
    selected: isActive,
    disabled: isBlocked
  };
}

/***/ }),

/***/ "./packages/packages/pro/editor-notes/src/init.ts":
/*!********************************************************!*\
  !*** ./packages/packages/pro/editor-notes/src/init.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: function() { return /* binding */ init; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_app_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-app-bar */ "@elementor/editor-app-bar");
/* harmony import */ var _elementor_editor_app_bar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_app_bar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_use_notes_action_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks/use-notes-action-props */ "./packages/packages/pro/editor-notes/src/hooks/use-notes-action-props.ts");


function init() {
  _elementor_editor_app_bar__WEBPACK_IMPORTED_MODULE_0__.toolsMenu.registerToggleAction({
    id: 'toggle-notes',
    priority: 4,
    useProps: _hooks_use_notes_action_props__WEBPACK_IMPORTED_MODULE_1__["default"]
  });
}

/***/ }),

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*********************************************************!*\
  !*** ./packages/packages/pro/editor-notes/src/index.ts ***!
  \*********************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: function() { return /* reexport safe */ _init__WEBPACK_IMPORTED_MODULE_0__.init; }
/* harmony export */ });
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "./packages/packages/pro/editor-notes/src/init.ts");

}();
(window.elementorV2 = window.elementorV2 || {}).editorNotes = __webpack_exports__;
/******/ })()
;
window.elementorV2.editorNotes?.init?.();
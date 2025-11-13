/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./packages/packages/pro/editor-editing-panel-extended/src/components/custom-css-field.tsx":
/*!*************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-editing-panel-extended/src/components/custom-css-field.tsx ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomCssField: function() { return /* binding */ CustomCssField; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-controls */ "@elementor/editor-controls");
/* harmony import */ var _elementor_editor_controls__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_controls__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/editor-editing-panel */ "@elementor/editor-editing-panel");
/* harmony import */ var _elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_2__);



const CustomCssField = ({
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_controls__WEBPACK_IMPORTED_MODULE_1__.ControlAdornmentsProvider, {
    items: [{
      id: 'custom-css-indicator',
      Adornment: _elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_2__.CustomCssIndicator
    }]
  }, children);
};

/***/ }),

/***/ "./packages/packages/pro/editor-editing-panel-extended/src/components/custom-css-section.tsx":
/*!***************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-editing-panel-extended/src/components/custom-css-section.tsx ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomCssStyleSection: function() { return /* binding */ CustomCssStyleSection; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-editing-panel */ "@elementor/editor-editing-panel");
/* harmony import */ var _elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _custom_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-css */ "./packages/packages/pro/editor-editing-panel-extended/src/components/custom-css.tsx");




const CustomCssStyleSection = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_1__.StyleTabSection, {
    section: {
      component: _custom_css__WEBPACK_IMPORTED_MODULE_3__.CustomCss,
      name: 'Custom CSS',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Custom CSS', 'elementor-pro')
    },
    fields: ['custom_css'],
    unmountOnExit: false
  });
};

/***/ }),

/***/ "./packages/packages/pro/editor-editing-panel-extended/src/components/custom-css.tsx":
/*!*******************************************************************************************!*\
  !*** ./packages/packages/pro/editor-editing-panel-extended/src/components/custom-css.tsx ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomCss: function() { return /* binding */ CustomCss; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-controls */ "@elementor/editor-controls");
/* harmony import */ var _elementor_editor_controls__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_controls__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_editor_controls_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/editor-controls-extended */ "@elementor/editor-controls-extended");
/* harmony import */ var _elementor_editor_controls_extended__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_controls_extended__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elementor/editor-editing-panel */ "@elementor/editor-editing-panel");
/* harmony import */ var _elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elementor_ui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _custom_css_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom-css-field */ "./packages/packages/pro/editor-editing-panel-extended/src/components/custom-css-field.tsx");








const CustomCss = () => {
  const {
    id,
    meta
  } = (0,_elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_3__.useStyle)();
  const {
    customCss,
    setCustomCss
  } = (0,_elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_3__.useCustomCss)();
  const metaKey = `${meta.breakpoint || 'desktop'}-${meta.state || 'default'}-${id}`;
  const [localStates, setLocalStates] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!localStates[metaKey]) {
      setLocalStates(prev => ({
        ...prev,
        [metaKey]: {
          value: customCss?.raw || '',
          isValid: true
        }
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [metaKey]);
  const currentLocalState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return localStates[metaKey] || {
      value: customCss?.raw || '',
      isValid: true
    };
  }, [localStates, metaKey, customCss?.raw]);
  const handleChange = (value, isValid) => {
    setLocalStates(prev => ({
      ...prev,
      [metaKey]: {
        value,
        isValid
      }
    }));
    if (isValid) {
      setCustomCss(value, {
        history: {
          propDisplayName: 'Custom CSS'
        }
      });
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_3__.SectionContent, {
    gap: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_custom_css_field__WEBPACK_IMPORTED_MODULE_6__.CustomCssField, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, {
    direction: "row",
    alignItems: "center",
    gap: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_controls__WEBPACK_IMPORTED_MODULE_1__.ControlFormLabel, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('CSS code', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_controls__WEBPACK_IMPORTED_MODULE_1__.ControlAdornments, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_controls_extended__WEBPACK_IMPORTED_MODULE_2__.CssEditor, {
    value: currentLocalState.value,
    onChange: handleChange
  }));
};

/***/ }),

/***/ "./packages/packages/pro/editor-editing-panel-extended/src/init.ts":
/*!*************************************************************************!*\
  !*** ./packages/packages/pro/editor-editing-panel-extended/src/init.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: function() { return /* binding */ init; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_controls_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-controls-extended */ "@elementor/editor-controls-extended");
/* harmony import */ var _elementor_editor_controls_extended__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_controls_extended__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-editing-panel */ "@elementor/editor-editing-panel");
/* harmony import */ var _elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_editor_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/editor-props */ "@elementor/editor-props");
/* harmony import */ var _elementor_editor_props__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_props__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_custom_css_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/custom-css-section */ "./packages/packages/pro/editor-editing-panel-extended/src/components/custom-css-section.tsx");




async function init() {
  _elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_1__.controlsRegistry.register('attributes', _elementor_editor_controls_extended__WEBPACK_IMPORTED_MODULE_0__.AttributesControl, 'full', _elementor_editor_props__WEBPACK_IMPORTED_MODULE_2__.keyValuePropTypeUtil);
  (0,_elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_1__.injectIntoStyleTab)({
    id: 'custom-css',
    component: _components_custom_css_section__WEBPACK_IMPORTED_MODULE_3__.CustomCssStyleSection
  });
}

/***/ }),

/***/ "react":
/*!**************************!*\
  !*** external ["React"] ***!
  \**************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@elementor/editor-controls":
/*!*************************************************!*\
  !*** external ["elementorV2","editorControls"] ***!
  \*************************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["editorControls"];

/***/ }),

/***/ "@elementor/editor-controls-extended":
/*!*********************************************************!*\
  !*** external ["elementorV2","editorControlsExtended"] ***!
  \*********************************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["editorControlsExtended"];

/***/ }),

/***/ "@elementor/editor-editing-panel":
/*!*****************************************************!*\
  !*** external ["elementorV2","editorEditingPanel"] ***!
  \*****************************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["editorEditingPanel"];

/***/ }),

/***/ "@elementor/editor-props":
/*!**********************************************!*\
  !*** external ["elementorV2","editorProps"] ***!
  \**********************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["editorProps"];

/***/ }),

/***/ "@elementor/ui":
/*!*************************************!*\
  !*** external ["elementorV2","ui"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["ui"];

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
/*!**************************************************************************!*\
  !*** ./packages/packages/pro/editor-editing-panel-extended/src/index.ts ***!
  \**************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "./packages/packages/pro/editor-editing-panel-extended/src/init.ts");

(async () => {
  await (0,_init__WEBPACK_IMPORTED_MODULE_0__.init)();
})();
}();
(window.elementorV2 = window.elementorV2 || {}).editorEditingPanelExtended = __webpack_exports__;
/******/ })()
;
window.elementorV2.editorEditingPanelExtended?.init?.();
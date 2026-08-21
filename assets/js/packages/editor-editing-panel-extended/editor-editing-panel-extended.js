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
/* harmony import */ var _elementor_license_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elementor/license-api */ "@elementor/license-api");
/* harmony import */ var _elementor_license_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elementor_license_api__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_elementor_ui__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _custom_css_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom-css-field */ "./packages/packages/pro/editor-editing-panel-extended/src/components/custom-css-field.tsx");









const CustomCss = () => {
  const {
    id,
    meta
  } = (0,_elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_3__.useStyle)();
  const {
    customCss,
    setCustomCss
  } = (0,_elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_3__.useCustomCss)();
  const {
    data: isLicenseExpired
  } = (0,_elementor_license_api__WEBPACK_IMPORTED_MODULE_4__.useIsLicenseExpired)();
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
  const syntaxRuleOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!meta.breakpoint || meta.breakpoint === 'desktop') {
      return {
        rules: {
          mediaQuery: false
        }
      };
    }
    return undefined;
  }, [meta.breakpoint]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_3__.SectionContent, {
    gap: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_custom_css_field__WEBPACK_IMPORTED_MODULE_7__.CustomCssField, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, {
    direction: "row",
    alignItems: "center",
    gap: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_controls__WEBPACK_IMPORTED_MODULE_1__.ControlFormLabel, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('CSS code', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_controls__WEBPACK_IMPORTED_MODULE_1__.ControlAdornments, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_controls_extended__WEBPACK_IMPORTED_MODULE_2__.CssEditor, {
    value: currentLocalState.value,
    onChange: handleChange,
    syntaxRuleOptions: syntaxRuleOptions,
    readOnly: isLicenseExpired
  }));
};

/***/ }),

/***/ "./packages/packages/pro/editor-editing-panel-extended/src/controls/number-range-control.tsx":
/*!***************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-editing-panel-extended/src/controls/number-range-control.tsx ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NumberRangeControl: function() { return /* binding */ NumberRangeControl; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-controls */ "@elementor/editor-controls");
/* harmony import */ var _elementor_editor_controls__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_controls__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_editor_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/editor-props */ "@elementor/editor-props");
/* harmony import */ var _elementor_editor_props__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_props__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }





const RangeField = ({
  bind,
  label
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_controls__WEBPACK_IMPORTED_MODULE_1__.PropKeyProvider, {
  bind: bind
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Grid, {
  container: true,
  alignItems: "center"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Grid, {
  item: true,
  xs: 6
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_controls__WEBPACK_IMPORTED_MODULE_1__.ControlFormLabel, null, label)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Grid, {
  item: true,
  xs: 6
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_controls__WEBPACK_IMPORTED_MODULE_1__.NumberControl, {
  min: 0,
  step: 1
}))));
const NumberRangeControl = (0,_elementor_editor_controls__WEBPACK_IMPORTED_MODULE_1__.createControl)(props => {
  const minLabel = props.minLabel ?? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Min', 'elementor-pro');
  const maxLabel = props.maxLabel ?? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Max', 'elementor-pro');
  const errorMessage = props.errorMessage ?? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Minimum value cannot be greater than maximum value.', 'elementor-pro');
  const {
    value,
    setValue,
    ...propContext
  } = (0,_elementor_editor_controls__WEBPACK_IMPORTED_MODULE_1__.useBoundProp)(_elementor_editor_props__WEBPACK_IMPORTED_MODULE_2__.numberRangePropTypeUtil);
  const min = _elementor_editor_props__WEBPACK_IMPORTED_MODULE_2__.numberPropTypeUtil.extract(value?.min);
  const max = _elementor_editor_props__WEBPACK_IMPORTED_MODULE_2__.numberPropTypeUtil.extract(value?.max);
  const showError = typeof min === 'number' && typeof max === 'number' && max < min;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_controls__WEBPACK_IMPORTED_MODULE_1__.PropProvider, _extends({}, propContext, {
    value: value,
    setValue: setValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Stack, {
    gap: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RangeField, {
    bind: "min",
    label: minLabel
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RangeField, {
    bind: "max",
    label: maxLabel
  }), showError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.FormHelperText, {
    error: true
  }, errorMessage)));
});

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
/* harmony import */ var _elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-canvas */ "@elementor/editor-canvas");
/* harmony import */ var _elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_controls_extended__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-controls-extended */ "@elementor/editor-controls-extended");
/* harmony import */ var _elementor_editor_controls_extended__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_controls_extended__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/editor-editing-panel */ "@elementor/editor-editing-panel");
/* harmony import */ var _elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elementor_editor_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elementor/editor-props */ "@elementor/editor-props");
/* harmony import */ var _elementor_editor_props__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_props__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elementor_license_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elementor/license-api */ "@elementor/license-api");
/* harmony import */ var _elementor_license_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elementor_license_api__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_custom_css_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/custom-css-section */ "./packages/packages/pro/editor-editing-panel-extended/src/components/custom-css-section.tsx");
/* harmony import */ var _controls_number_range_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controls/number-range-control */ "./packages/packages/pro/editor-editing-panel-extended/src/controls/number-range-control.tsx");
/* harmony import */ var _transformers_settings_attributes_transformer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transformers/settings/attributes-transformer */ "./packages/packages/pro/editor-editing-panel-extended/src/transformers/settings/attributes-transformer.ts");








async function init() {
  _elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0__.settingsTransformersRegistry.register('attributes', _transformers_settings_attributes_transformer__WEBPACK_IMPORTED_MODULE_7__.proAttributesTransformer);
  _elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_2__.controlsRegistry.register('attributes', _elementor_editor_controls_extended__WEBPACK_IMPORTED_MODULE_1__.AttributesControl, 'full', _elementor_editor_props__WEBPACK_IMPORTED_MODULE_3__.keyValuePropTypeUtil);
  _elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_2__.controlsRegistry.register('options', _elementor_editor_controls_extended__WEBPACK_IMPORTED_MODULE_1__.OptionsControl, 'full', _elementor_editor_props__WEBPACK_IMPORTED_MODULE_3__.keyValuePropTypeUtil);
  _elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_2__.controlsRegistry.register('number-range', _controls_number_range_control__WEBPACK_IMPORTED_MODULE_6__.NumberRangeControl, 'custom', _elementor_editor_props__WEBPACK_IMPORTED_MODULE_3__.numberRangePropTypeUtil);
  const features = await (0,_elementor_license_api__WEBPACK_IMPORTED_MODULE_4__.fetchTierFeatures)().catch(() => []);
  if (features.includes('atomic-custom-css')) {
    (0,_elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_2__.injectIntoStyleTab)({
      id: 'custom-css',
      component: _components_custom_css_section__WEBPACK_IMPORTED_MODULE_5__.CustomCssStyleSection,
      options: {
        overwrite: true
      }
    });
  }
  _elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_2__.controlsRegistry.register('display-conditions', _elementor_editor_controls_extended__WEBPACK_IMPORTED_MODULE_1__.DisplayConditionsControl, 'two-columns', _elementor_editor_controls_extended__WEBPACK_IMPORTED_MODULE_1__.displayConditionsPropTypeUtil);

  // BC check, can be removed at 4.2.0 version
  if (typeof _elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_2__.setLicenseConfig === 'function') {
    const isExpired = await (0,_elementor_license_api__WEBPACK_IMPORTED_MODULE_4__.fetchLicenseStatus)().catch(() => false);
    (0,_elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_2__.setLicenseConfig)({
      expired: isExpired
    });
  }
}

/***/ }),

/***/ "./packages/packages/pro/editor-editing-panel-extended/src/transformers/settings/attributes-transformer.ts":
/*!*****************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-editing-panel-extended/src/transformers/settings/attributes-transformer.ts ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   proAttributesTransformer: function() { return /* binding */ proAttributesTransformer; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-canvas */ "@elementor/editor-canvas");
/* harmony import */ var _elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0__);

const proAttributesTransformer = (0,_elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0__.createTransformer)(values => {
  return values.map(value => value.key && value.value ? `${value.key}="${value.value}"` : '').join(' ');
});

/***/ }),

/***/ "react":
/*!**************************!*\
  !*** external ["React"] ***!
  \**************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@elementor/editor-canvas":
/*!***********************************************!*\
  !*** external ["elementorV2","editorCanvas"] ***!
  \***********************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["editorCanvas"];

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

/***/ "@elementor/license-api":
/*!*********************************************!*\
  !*** external ["elementorV2","licenseApi"] ***!
  \*********************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["licenseApi"];

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

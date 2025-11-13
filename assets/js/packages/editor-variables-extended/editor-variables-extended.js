/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./packages/packages/pro/editor-variables-extended/src/components/size/size-field.tsx":
/*!********************************************************************************************!*\
  !*** ./packages/packages/pro/editor-variables-extended/src/components/size/size-field.tsx ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SizeField: function() { return /* binding */ SizeField; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/settings */ "./packages/packages/pro/editor-variables-extended/src/utils/settings.ts");
/* harmony import */ var _utils_transform_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/transform-utils */ "./packages/packages/pro/editor-variables-extended/src/utils/transform-utils.ts");
/* harmony import */ var _size_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./size-input */ "./packages/packages/pro/editor-variables-extended/src/components/size/size-input.tsx");
/* harmony import */ var _unit_selection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./unit-selection */ "./packages/packages/pro/editor-variables-extended/src/components/size/unit-selection.tsx");






const RESTRICTED_INPUT_KEYS = ['e', 'E', '+', '-'];
function notAnEmptySize(value) {
  return null !== value && undefined !== value && !isNaN(Number(value));
}
const SizeField = ({
  value,
  onChange,
  propType
}) => {
  const defaultUnit = (0,_utils_settings__WEBPACK_IMPORTED_MODULE_1__.getDefaultUnit)(propType);
  const units = (0,_utils_settings__WEBPACK_IMPORTED_MODULE_1__.getAvailableUnits)(propType);
  const parsedValue = (0,_utils_transform_utils__WEBPACK_IMPORTED_MODULE_2__.parseSizeValue)(value, defaultUnit ?? _utils_settings__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_UNIT, units);
  const [currentValue, setCurrentValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(parsedValue);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const {
      size: sizeValue,
      unit: unitValue
    } = currentValue;
    if ('auto' === unitValue) {
      onChange('auto');
      return;
    }
    if (null === sizeValue) {
      onChange('');
      return;
    }
    onChange((0,_utils_transform_utils__WEBPACK_IMPORTED_MODULE_2__.formatSizeValue)(currentValue));
  }, [currentValue, onChange]);
  const handleSizeChange = newSize => {
    const sizeValue = toNumberStrict(newSize);
    setCurrentValue(prev => {
      if (sizeValue && 'auto' === prev.unit) {
        return {
          size: sizeValue,
          unit: defaultUnit ?? _utils_settings__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_UNIT
        };
      }
      return {
        ...prev,
        size: sizeValue
      };
    });
  };
  const handleUnitChange = newUnit => {
    setCurrentValue(prev => {
      if ('auto' === newUnit) {
        return {
          unit: newUnit,
          size: null
        };
      }
      return {
        ...prev,
        unit: newUnit
      };
    });
  };
  const unitInputBufferRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)('');
  const handleKeyUp = event => {
    const {
      key
    } = event;
    if (!/^[a-zA-Z%]$/.test(key)) {
      return;
    }
    event.preventDefault();
    const newChar = key.toLowerCase();
    const updatedBuffer = (unitInputBufferRef.current + newChar).slice(-3);
    unitInputBufferRef.current = updatedBuffer;
    const matchedUnit = units.find(u => u.includes(updatedBuffer)) || units.find(u => u.startsWith(newChar)) || units.find(u => u.includes(newChar));
    if (matchedUnit) {
      handleUnitChange(matchedUnit);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_size_input__WEBPACK_IMPORTED_MODULE_3__.SizeInput, {
    type: "number",
    value: currentValue.size ?? '',
    onChange: handleSizeChange,
    onKeyUp: handleKeyUp,
    onKeyDown: event => {
      if (RESTRICTED_INPUT_KEYS.includes(event.key)) {
        event.preventDefault();
      }
    },
    endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_unit_selection__WEBPACK_IMPORTED_MODULE_4__.UnitSelection, {
      showPrimaryColor: notAnEmptySize(currentValue.size) || 'auto' === currentValue.unit,
      options: units,
      value: currentValue.unit,
      onClick: handleUnitChange
    })
  });
};
const toNumberStrict = value => {
  return value.trim() === '' ? null : Number(value);
};

/***/ }),

/***/ "./packages/packages/pro/editor-variables-extended/src/components/size/size-input.tsx":
/*!********************************************************************************************!*\
  !*** ./packages/packages/pro/editor-variables-extended/src/components/size/size-input.tsx ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SizeInput: function() { return /* binding */ SizeInput; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_ui__WEBPACK_IMPORTED_MODULE_1__);


const SizeInput = ({
  value,
  onChange,
  endAdornment,
  onKeyUp,
  onKeyDown,
  type
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_1__.TextField, {
  size: "tiny",
  type: type,
  fullWidth: true,
  value: value,
  onKeyUp: onKeyUp,
  onKeyDown: onKeyDown,
  onChange: e => onChange(e.target.value),
  InputProps: {
    endAdornment
  }
});

/***/ }),

/***/ "./packages/packages/pro/editor-variables-extended/src/components/size/unit-selection.tsx":
/*!************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-variables-extended/src/components/size/unit-selection.tsx ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnitSelection: function() { return /* binding */ UnitSelection; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-ui */ "@elementor/editor-ui");
/* harmony import */ var _elementor_editor_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }




const UnitSelection = ({
  options,
  value,
  onClick,
  showPrimaryColor
}) => {
  const popupState = (0,_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.usePopupState)({
    variant: 'popover',
    popupId: (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)()
  });
  const handleMenuItemClick = index => {
    onClick(options[index]);
    popupState.close();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.InputAdornment, {
    position: "end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledButton, _extends({
    isPrimaryColor: showPrimaryColor,
    size: "small"
  }, (0,_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.bindTrigger)(popupState)), value), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.Menu, _extends({
    MenuListProps: {
      dense: true
    }
  }, (0,_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.bindMenu)(popupState)), options.map((option, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_1__.MenuListItem, {
    key: option,
    onClick: () => handleMenuItemClick(index)
  }, option.toUpperCase()))));
};
const StyledButton = (0,_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.styled)(_elementor_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
  shouldForwardProp: prop => prop !== 'isPrimaryColor'
})(({
  isPrimaryColor,
  theme
}) => ({
  color: isPrimaryColor ? theme.palette.text.primary : theme.palette.text.tertiary,
  font: 'inherit',
  minWidth: 'initial',
  textTransform: 'uppercase'
}));

/***/ }),

/***/ "./packages/packages/pro/editor-variables-extended/src/init.ts":
/*!*********************************************************************!*\
  !*** ./packages/packages/pro/editor-variables-extended/src/init.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: function() { return /* binding */ init; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-props */ "@elementor/editor-props");
/* harmony import */ var _elementor_editor_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-variables */ "@elementor/editor-variables");
/* harmony import */ var _elementor_editor_variables__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_variables__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/icons */ "@elementor/icons");
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_size_size_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/size/size-field */ "./packages/packages/pro/editor-variables-extended/src/components/size/size-field.tsx");
/* harmony import */ var _prop_types_size_variable_prop_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prop-types/size-variable-prop-type */ "./packages/packages/pro/editor-variables-extended/src/prop-types/size-variable-prop-type.ts");
/* harmony import */ var _utils_prop_type_compatibility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/prop-type-compatibility */ "./packages/packages/pro/editor-variables-extended/src/utils/prop-type-compatibility.ts");
/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/settings */ "./packages/packages/pro/editor-variables-extended/src/utils/settings.ts");
/* harmony import */ var _utils_transform_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/transform-utils */ "./packages/packages/pro/editor-variables-extended/src/utils/transform-utils.ts");








function init() {
  (0,_elementor_editor_variables__WEBPACK_IMPORTED_MODULE_1__.registerVariableType)({
    valueField: _components_size_size_field__WEBPACK_IMPORTED_MODULE_3__.SizeField,
    icon: _elementor_icons__WEBPACK_IMPORTED_MODULE_2__.ExpandDiagonalIcon,
    propTypeUtil: _prop_types_size_variable_prop_type__WEBPACK_IMPORTED_MODULE_4__.sizeVariablePropTypeUtil,
    fallbackPropTypeUtil: _elementor_editor_props__WEBPACK_IMPORTED_MODULE_0__.sizePropTypeUtil,
    variableType: 'size',
    defaultValue: '0px',
    selectionFilter: (variables, propType) => {
      const availableUnits = (0,_utils_settings__WEBPACK_IMPORTED_MODULE_6__.getAvailableUnits)(propType);
      return variables.filter(variable => {
        const {
          unit
        } = (0,_utils_transform_utils__WEBPACK_IMPORTED_MODULE_7__.parseSizeValue)(variable.value);
        return availableUnits.includes(unit);
      });
    },
    isCompatible: _utils_prop_type_compatibility__WEBPACK_IMPORTED_MODULE_5__.isPropTypeCompatible,
    valueTransformer: _utils_transform_utils__WEBPACK_IMPORTED_MODULE_7__.parseSizeValue
  });
}

/***/ }),

/***/ "./packages/packages/pro/editor-variables-extended/src/prop-types/size-variable-prop-type.ts":
/*!***************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-variables-extended/src/prop-types/size-variable-prop-type.ts ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sizeVariablePropTypeUtil: function() { return /* binding */ sizeVariablePropTypeUtil; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-props */ "@elementor/editor-props");
/* harmony import */ var _elementor_editor_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/schema */ "@elementor/schema");
/* harmony import */ var _elementor_schema__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_schema__WEBPACK_IMPORTED_MODULE_1__);


const sizeVariablePropTypeUtil = (0,_elementor_editor_props__WEBPACK_IMPORTED_MODULE_0__.createPropUtils)('global-size-variable', _elementor_schema__WEBPACK_IMPORTED_MODULE_1__.z.string());

/***/ }),

/***/ "./packages/packages/pro/editor-variables-extended/src/sync/get-supported-units.ts":
/*!*****************************************************************************************!*\
  !*** ./packages/packages/pro/editor-variables-extended/src/sync/get-supported-units.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSupportedUnits: function() { return /* binding */ getSupportedUnits; }
/* harmony export */ });
const getSupportedUnits = () => {
  const extendedWindow = window;
  return extendedWindow.elementor?.config?.supported_size_units ?? [];
};

/***/ }),

/***/ "./packages/packages/pro/editor-variables-extended/src/utils/prop-type-compatibility.ts":
/*!**********************************************************************************************!*\
  !*** ./packages/packages/pro/editor-variables-extended/src/utils/prop-type-compatibility.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isPropTypeCompatible: function() { return /* binding */ isPropTypeCompatible; }
/* harmony export */ });
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ "./packages/packages/pro/editor-variables-extended/src/utils/settings.ts");
/* harmony import */ var _transform_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transform-utils */ "./packages/packages/pro/editor-variables-extended/src/utils/transform-utils.ts");


function isPropTypeCompatible(propType, variable) {
  const availableUnits = (0,_settings__WEBPACK_IMPORTED_MODULE_0__.getAvailableUnits)(propType);
  const {
    unit
  } = (0,_transform_utils__WEBPACK_IMPORTED_MODULE_1__.parseSizeValue)(variable.value);
  return availableUnits.includes(unit);
}

/***/ }),

/***/ "./packages/packages/pro/editor-variables-extended/src/utils/settings.ts":
/*!*******************************************************************************!*\
  !*** ./packages/packages/pro/editor-variables-extended/src/utils/settings.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_UNIT: function() { return /* binding */ DEFAULT_UNIT; },
/* harmony export */   DEFAULT_UNITS: function() { return /* binding */ DEFAULT_UNITS; },
/* harmony export */   getAvailableUnits: function() { return /* binding */ getAvailableUnits; },
/* harmony export */   getDefaultUnit: function() { return /* binding */ getDefaultUnit; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-props */ "@elementor/editor-props");
/* harmony import */ var _elementor_editor_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_props__WEBPACK_IMPORTED_MODULE_0__);

const DEFAULT_UNIT = 'px';
const DEFAULT_UNITS = ['px', '%', 'em', 'rem', 'vw', 'vh', 'auto'];
const getAvailableUnits = propType => {
  if (!propType) {
    return DEFAULT_UNITS;
  }
  const settings = extractSettings(propType);
  if (!Array.isArray(settings.available_units) || settings.available_units.length === 0) {
    return DEFAULT_UNITS;
  }

  // TODO: ED-20312 Remove 'custom' when we start to support custom units.
  return settings.available_units.filter(unit => unit !== 'custom');
};
const getDefaultUnit = propType => {
  if (!propType) {
    return DEFAULT_UNIT;
  }
  return extractSettings(propType)?.default_unit ?? DEFAULT_UNIT;
};
const extractSettings = propType => {
  if (propType?.kind === 'union') {
    return propType.prop_types[_elementor_editor_props__WEBPACK_IMPORTED_MODULE_0__.sizePropTypeUtil.key].settings;
  }
  return {};
};

/***/ }),

/***/ "./packages/packages/pro/editor-variables-extended/src/utils/transform-utils.ts":
/*!**************************************************************************************!*\
  !*** ./packages/packages/pro/editor-variables-extended/src/utils/transform-utils.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatSizeValue: function() { return /* binding */ formatSizeValue; },
/* harmony export */   parseSizeValue: function() { return /* binding */ parseSizeValue; }
/* harmony export */ });
/* harmony import */ var _sync_get_supported_units__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sync/get-supported-units */ "./packages/packages/pro/editor-variables-extended/src/sync/get-supported-units.ts");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings */ "./packages/packages/pro/editor-variables-extended/src/utils/settings.ts");



// TODO: To be removed when we go for the Prop type structure
const parseSizeValue = (value, defaultUnit, unitsLookup) => {
  if ('string' !== typeof value) {
    if (value?.unit === 'custom') {
      return {
        size: null,
        unit: _settings__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_UNIT
      };
    }
    if (value.unit === 'auto') {
      return {
        size: null,
        unit: value.unit
      };
    }
    return value;
  }
  const EMPTY_VALUE = {
    size: null,
    unit: defaultUnit ?? _settings__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_UNIT
  };
  const unitsToCheck = unitsLookup ?? (0,_sync_get_supported_units__WEBPACK_IMPORTED_MODULE_0__.getSupportedUnits)();
  if (value === 'auto') {
    if (unitsToCheck.includes(value)) {
      return {
        size: '',
        unit: value
      };
    }
    return EMPTY_VALUE;
  }
  const match = value.match(/^(-?\d*\.?\d+)([a-z%]+)$/i);
  if (match) {
    const size = parseFloat(match[1]);
    const unit = match[2];
    if (unitsToCheck.includes(unit)) {
      return {
        size,
        unit
      };
    }
  }
  return EMPTY_VALUE;
};
const formatSizeValue = ({
  size,
  unit
}) => {
  if (unit === 'auto') {
    return 'auto';
  }
  return `${size ?? ''}${unit}`;
};

/***/ }),

/***/ "react":
/*!**************************!*\
  !*** external ["React"] ***!
  \**************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@elementor/editor-props":
/*!**********************************************!*\
  !*** external ["elementorV2","editorProps"] ***!
  \**********************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["editorProps"];

/***/ }),

/***/ "@elementor/editor-ui":
/*!*******************************************!*\
  !*** external ["elementorV2","editorUi"] ***!
  \*******************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["editorUi"];

/***/ }),

/***/ "@elementor/editor-variables":
/*!**************************************************!*\
  !*** external ["elementorV2","editorVariables"] ***!
  \**************************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["editorVariables"];

/***/ }),

/***/ "@elementor/icons":
/*!****************************************!*\
  !*** external ["elementorV2","icons"] ***!
  \****************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["icons"];

/***/ }),

/***/ "@elementor/schema":
/*!*****************************************!*\
  !*** external ["elementorV2","schema"] ***!
  \*****************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["schema"];

/***/ }),

/***/ "@elementor/ui":
/*!*************************************!*\
  !*** external ["elementorV2","ui"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["ui"];

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
/*!**********************************************************************!*\
  !*** ./packages/packages/pro/editor-variables-extended/src/index.ts ***!
  \**********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: function() { return /* reexport safe */ _init__WEBPACK_IMPORTED_MODULE_0__.init; }
/* harmony export */ });
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "./packages/packages/pro/editor-variables-extended/src/init.ts");

}();
(window.elementorV2 = window.elementorV2 || {}).editorVariablesExtended = __webpack_exports__;
/******/ })()
;
window.elementorV2.editorVariablesExtended?.init?.();
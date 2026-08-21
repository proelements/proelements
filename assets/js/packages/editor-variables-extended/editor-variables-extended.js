/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./packages/packages/pro/editor-variables-extended/src/bc/is-unit-extended-option.ts":
/*!*******************************************************************************************!*\
  !*** ./packages/packages/pro/editor-variables-extended/src/bc/is-unit-extended-option.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isUnitExtendedOption: function() { return /* binding */ isUnitExtendedOption; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-controls */ "@elementor/editor-controls");
/* harmony import */ var _elementor_editor_controls__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_controls__WEBPACK_IMPORTED_MODULE_0__);


/**
 * @param      unit
 * @deprecated Will be removed in 4.2.0. Use `isUnitExtendedOption` from `@elementor/editor-controls` when Core provides it.
 */
const isUnitExtendedOption = _elementor_editor_controls__WEBPACK_IMPORTED_MODULE_0__.isUnitExtendedOption ?? (unit => {
  return ['auto', 'custom'].includes(unit);
});

/***/ }),

/***/ "./packages/packages/pro/editor-variables-extended/src/bc/use-typing-buffer-pro.ts":
/*!*****************************************************************************************!*\
  !*** ./packages/packages/pro/editor-variables-extended/src/bc/use-typing-buffer-pro.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTypingBuffer: function() { return /* binding */ useTypingBuffer; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/**
 * @deprecated Will be removed in 4.2.0. Backward-compatibility fallback when Core does not provide useTypingBuffer.
 */

/**
 * @param      options
 * @deprecated Will be removed in 4.2.0. Use `useTypingBuffer` from `@elementor/editor-controls` when Core provides it.
 */
function useTypingBuffer(options = {}) {
  const {
    limit = 3,
    timeout = 600
  } = options;
  const inputBufferRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)('');
  const timeoutRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const appendKey = key => {
    inputBufferRef.current = (inputBufferRef.current + key).slice(-limit);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      inputBufferRef.current = '';
      timeoutRef.current = null;
    }, timeout);
    return inputBufferRef.current;
  };
  const startsWith = (haystack, needle) => {
    // At least 2 characters in needle for longer haystack.
    if (3 < haystack.length && 2 > needle.length) {
      return false;
    }
    return haystack.startsWith(needle);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => {
      inputBufferRef.current = '';
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, []);
  return {
    buffer: inputBufferRef.current,
    appendKey,
    startsWith
  };
}

/***/ }),

/***/ "./packages/packages/pro/editor-variables-extended/src/bc/use-typing-buffer.ts":
/*!*************************************************************************************!*\
  !*** ./packages/packages/pro/editor-variables-extended/src/bc/use-typing-buffer.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTypingBuffer: function() { return /* binding */ useTypingBuffer; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-controls */ "@elementor/editor-controls");
/* harmony import */ var _elementor_editor_controls__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_controls__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_typing_buffer_pro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-typing-buffer-pro */ "./packages/packages/pro/editor-variables-extended/src/bc/use-typing-buffer-pro.ts");



/**
 * @deprecated Will be removed in 4.2.0. Use `useTypingBuffer` from `@elementor/editor-controls` when Core provides it.
 */
const useTypingBuffer = _elementor_editor_controls__WEBPACK_IMPORTED_MODULE_0__.useTypingBuffer ?? _use_typing_buffer_pro__WEBPACK_IMPORTED_MODULE_1__.useTypingBuffer;

/***/ }),

/***/ "./packages/packages/pro/editor-variables-extended/src/components/size/popover/custom-size-popover.tsx":
/*!*************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-variables-extended/src/components/size/popover/custom-size-popover.tsx ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomSizePopover: function() { return /* binding */ CustomSizePopover; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-ui */ "@elementor/editor-ui");
/* harmony import */ var _elementor_editor_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/icons */ "@elementor/icons");
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }






const SIZE = 'tiny';
const CustomSizePopover = ({
  popupState,
  value,
  onChange,
  anchorRef
}) => {
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const handleClose = () => {
    popupState.close();
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    focusInput();
  }, []);
  const focusInput = () => requestAnimationFrame(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Popover, _extends({
    slotProps: {
      paper: {
        sx: {
          minWidth: '250px',
          width: anchorRef.current?.offsetWidth + 'px',
          borderRadius: 2
        }
      }
    },
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center'
    }
  }, (0,_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.bindPopover)(popupState), {
    onClose: handleClose
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_1__.PopoverHeader, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('CSS function', 'elementor-pro'),
    onClose: handleClose,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_icons__WEBPACK_IMPORTED_MODULE_2__.MathFunctionIcon, {
      fontSize: SIZE
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.TextField, {
    value: value ?? '',
    onChange: e => onChange(e.target.value),
    size: "tiny",
    type: "text",
    fullWidth: true,
    inputProps: {
      ref: inputRef,
      onKeyDown: event => {
        if (event.key === 'Enter') {
          event.preventDefault();
          handleClose();
        }
      }
    },
    sx: {
      pt: 0,
      pr: 1.5,
      pb: 1.5,
      pl: 1.5
    }
  }));
};

/***/ }),

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
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_use_size_field_refs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-size-field-refs */ "./packages/packages/pro/editor-variables-extended/src/hooks/use-size-field-refs.ts");
/* harmony import */ var _hooks_use_size_value__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-size-value */ "./packages/packages/pro/editor-variables-extended/src/hooks/use-size-value.ts");
/* harmony import */ var _hooks_use_unit_shortcuts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-unit-shortcuts */ "./packages/packages/pro/editor-variables-extended/src/hooks/use-unit-shortcuts.ts");
/* harmony import */ var _prop_types_size_variable_prop_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../prop-types/size-variable-prop-type */ "./packages/packages/pro/editor-variables-extended/src/prop-types/size-variable-prop-type.ts");
/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/settings */ "./packages/packages/pro/editor-variables-extended/src/utils/settings.ts");
/* harmony import */ var _popover_custom_size_popover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popover/custom-size-popover */ "./packages/packages/pro/editor-variables-extended/src/components/size/popover/custom-size-popover.tsx");
/* harmony import */ var _size_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./size-input */ "./packages/packages/pro/editor-variables-extended/src/components/size/size-input.tsx");
/* harmony import */ var _unit_selection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./unit-selection */ "./packages/packages/pro/editor-variables-extended/src/components/size/unit-selection.tsx");










const RESTRICTED_INPUT_KEYS = ['e', 'E', '+', '-'];
const SizeField = ({
  value,
  onChange,
  propType,
  onPropTypeKeyChange,
  propTypeKey,
  ref,
  onKeyDown
}) => {
  const {
    anchorRef,
    setAnchorRef
  } = (0,_hooks_use_size_field_refs__WEBPACK_IMPORTED_MODULE_2__.useSizeFieldRefs)(ref);
  const popupState = (0,_elementor_ui__WEBPACK_IMPORTED_MODULE_1__.usePopupState)({
    variant: 'popover'
  });
  const openPopover = () => {
    popupState.open(anchorRef?.current);
  };
  const handleUnitChange = unit => {
    if (unit !== _utils_settings__WEBPACK_IMPORTED_MODULE_6__.CUSTOM_UNIT_KEY && propTypeKey === _prop_types_size_variable_prop_type__WEBPACK_IMPORTED_MODULE_5__.GLOBAL_CUSTOM_SIZE_VARIABLE_KEY) {
      onPropTypeKeyChange?.(_prop_types_size_variable_prop_type__WEBPACK_IMPORTED_MODULE_5__.sizeVariablePropTypeUtil.key);
    }
    if (unit === _utils_settings__WEBPACK_IMPORTED_MODULE_6__.CUSTOM_UNIT_KEY) {
      onPropTypeKeyChange?.(_prop_types_size_variable_prop_type__WEBPACK_IMPORTED_MODULE_5__.GLOBAL_CUSTOM_SIZE_VARIABLE_KEY);
      openPopover();
    }
  };
  const {
    currentValue,
    units,
    setSize,
    setUnit
  } = (0,_hooks_use_size_value__WEBPACK_IMPORTED_MODULE_3__.useSizeValue)(value, onChange, handleUnitChange, propType, propTypeKey);
  const handleShortcutKeys = (0,_hooks_use_unit_shortcuts__WEBPACK_IMPORTED_MODULE_4__.useUnitShortcuts)(currentValue?.unit, units, setUnit);
  const isUnitExtended = isUnitExtendedOption(currentValue.unit);
  const onSizeInputClick = event => {
    const target = event.target;
    if (target instanceof Element && target.closest('input') && currentValue.unit === _utils_settings__WEBPACK_IMPORTED_MODULE_6__.CUSTOM_UNIT_KEY) {
      openPopover();
    }
  };
  const shouldHighlightUnit = () => {
    return notAnEmptySize(currentValue.size) || currentValue.unit === _utils_settings__WEBPACK_IMPORTED_MODULE_6__.AUTO_UNIT_KEY;
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_size_input__WEBPACK_IMPORTED_MODULE_8__.SizeInput, {
    ref: setAnchorRef,
    type: isUnitExtended ? 'text' : 'number',
    value: currentValue.size,
    onChange: setSize,
    onKeyDown: event => {
      if (RESTRICTED_INPUT_KEYS.includes(event.key)) {
        event.preventDefault();
      }
      handleShortcutKeys(event);
      onKeyDown?.(event);
    },
    InputProps: {
      readOnly: isUnitExtended,
      onClick: onSizeInputClick,
      endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_1__.InputAdornment, {
        position: "end"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_unit_selection__WEBPACK_IMPORTED_MODULE_9__.UnitSelection, {
        options: units,
        value: currentValue.unit,
        onClick: setUnit,
        showPrimaryColor: shouldHighlightUnit()
      }))
    }
  }), anchorRef?.current && popupState.isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_popover_custom_size_popover__WEBPACK_IMPORTED_MODULE_7__.CustomSizePopover, {
    popupState: popupState,
    anchorRef: anchorRef,
    value: currentValue.size,
    onChange: setSize
  }));
};
const isUnitExtendedOption = unit => ['auto', 'custom'].includes(unit);
const notAnEmptySize = value => null !== value && undefined !== value && value !== '';

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



const SizeInput = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({
  value,
  onChange,
  onKeyUp,
  onKeyDown,
  type,
  InputProps,
  focused
}, ref) => {
  const getCursorStyle = () => ({
    input: {
      cursor: InputProps.readOnly ? 'default !important' : undefined
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_1__.TextField, {
    ref: ref,
    size: "tiny",
    type: type,
    fullWidth: true,
    value: value ?? '',
    onKeyUp: onKeyUp,
    onKeyDown: onKeyDown,
    onChange: e => onChange(e.target.value),
    InputProps: InputProps,
    sx: getCursorStyle(),
    focused: focused
  });
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
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/icons */ "@elementor/icons");
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }





const optionLabelOverrides = {
  custom: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_icons__WEBPACK_IMPORTED_MODULE_2__.MathFunctionIcon, {
    fontSize: "tiny"
  })
};
const menuItemContentStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
};
const UnitSelection = ({
  options,
  value,
  onClick,
  showPrimaryColor
}) => {
  const popupState = (0,_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.usePopupState)({
    variant: 'popover',
    popupId: (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)()
  });
  const handleMenuItemClick = index => {
    onClick(options[index]);
    popupState.close();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledButton, _extends({
    isPrimaryColor: showPrimaryColor,
    size: "small"
  }, (0,_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.bindTrigger)(popupState)), optionLabelOverrides[value] ?? value), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Menu, _extends({
    MenuListProps: {
      dense: true
    }
  }, (0,_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.bindMenu)(popupState)), options.map((option, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_1__.MenuListItem, {
    key: option,
    onClick: () => handleMenuItemClick(index),
    primaryTypographyProps: {
      variant: 'caption',
      sx: {
        ...menuItemContentStyles,
        lineHeight: '1'
      }
    },
    menuItemTextProps: {
      sx: menuItemContentStyles
    }
  }, optionLabelOverrides[option] ?? option.toUpperCase()))));
};
const StyledButton = (0,_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.styled)(_elementor_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
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

/***/ "./packages/packages/pro/editor-variables-extended/src/hooks/use-size-field-refs.ts":
/*!******************************************************************************************!*\
  !*** ./packages/packages/pro/editor-variables-extended/src/hooks/use-size-field-refs.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSizeFieldRefs: function() { return /* binding */ useSizeFieldRefs; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useSizeFieldRefs = externalRef => {
  const anchorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const setAnchorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(el => {
    anchorRef.current = externalRef?.current ?? el;
  }, [externalRef]);
  return {
    anchorRef,
    setAnchorRef
  };
};

/***/ }),

/***/ "./packages/packages/pro/editor-variables-extended/src/hooks/use-size-value.ts":
/*!*************************************************************************************!*\
  !*** ./packages/packages/pro/editor-variables-extended/src/hooks/use-size-value.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSizeValue: function() { return /* binding */ useSizeValue; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/settings */ "./packages/packages/pro/editor-variables-extended/src/utils/settings.ts");
/* harmony import */ var _utils_transform_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/transform-utils */ "./packages/packages/pro/editor-variables-extended/src/utils/transform-utils.ts");



const useSizeValue = (value, onChange, onUnitChange, propType, propTypeKey) => {
  const defaultUnit = (0,_utils_settings__WEBPACK_IMPORTED_MODULE_1__.getDefaultUnit)(propType);
  const units = (0,_utils_settings__WEBPACK_IMPORTED_MODULE_1__.getAvailableUnits)(propType);
  const initialValue = (0,_utils_transform_utils__WEBPACK_IMPORTED_MODULE_2__.parseSizeValue)(value, defaultUnit, units, propTypeKey);
  const [currentValue, setCurrentValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    onChange(computeOutputValue(currentValue));
  }, [currentValue, onChange]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (currentValue.unit === _utils_settings__WEBPACK_IMPORTED_MODULE_1__.CUSTOM_UNIT_KEY) {
      onUnitChange?.(currentValue.unit);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const setSize = newSize => {
    setCurrentValue(prev => {
      const {
        unit
      } = prev;
      if (unit === _utils_settings__WEBPACK_IMPORTED_MODULE_1__.AUTO_UNIT_KEY) {
        return prev;
      }
      if (unit === _utils_settings__WEBPACK_IMPORTED_MODULE_1__.CUSTOM_UNIT_KEY) {
        return {
          ...prev,
          size: newSize
        };
      }
      return {
        ...prev,
        size: toStrictNumber(newSize)
      };
    });
  };
  const setUnit = unit => {
    onUnitChange(unit);
    setCurrentValue(prev => ({
      unit,
      size: unit === _utils_settings__WEBPACK_IMPORTED_MODULE_1__.AUTO_UNIT_KEY ? null : prev.size
    }));
  };
  return {
    currentValue,
    units,
    setSize,
    setUnit
  };
};
const toStrictNumber = value => {
  return value.trim() === '' ? null : Number(value);
};
const computeOutputValue = value => {
  const {
    size,
    unit
  } = value;
  if (unit === _utils_settings__WEBPACK_IMPORTED_MODULE_1__.AUTO_UNIT_KEY) {
    return 'auto';
  }
  if (size === null) {
    return '';
  }
  return (0,_utils_transform_utils__WEBPACK_IMPORTED_MODULE_2__.formatSizeValue)(value);
};

/***/ }),

/***/ "./packages/packages/pro/editor-variables-extended/src/hooks/use-unit-shortcuts.ts":
/*!*****************************************************************************************!*\
  !*** ./packages/packages/pro/editor-variables-extended/src/hooks/use-unit-shortcuts.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useUnitShortcuts: function() { return /* binding */ useUnitShortcuts; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bc_is_unit_extended_option__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bc/is-unit-extended-option */ "./packages/packages/pro/editor-variables-extended/src/bc/is-unit-extended-option.ts");
/* harmony import */ var _bc_use_typing_buffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bc/use-typing-buffer */ "./packages/packages/pro/editor-variables-extended/src/bc/use-typing-buffer.ts");



const useUnitShortcuts = (unit, units, onUnitMatched) => {
  const {
    appendKey,
    startsWith
  } = (0,_bc_use_typing_buffer__WEBPACK_IMPORTED_MODULE_2__.useTypingBuffer)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event => {
    const {
      key,
      altKey,
      ctrlKey,
      metaKey
    } = event;
    if (altKey || ctrlKey || metaKey) {
      return;
    }
    if ((0,_bc_is_unit_extended_option__WEBPACK_IMPORTED_MODULE_1__.isUnitExtendedOption)(unit) && !isNaN(Number(key))) {
      const defaultUnit = units?.[0];
      if (defaultUnit) {
        onUnitMatched(defaultUnit);
      }
      return;
    }
    if (!/^[a-zA-Z%]$/.test(key)) {
      return;
    }
    event.preventDefault();
    const char = key.toLowerCase();
    const newBuffer = appendKey(char);
    const matched = units.find(u => startsWith(u, newBuffer));
    if (matched) {
      onUnitMatched(matched);
    }
  }, [unit, units, onUnitMatched, appendKey, startsWith]);
};

/***/ }),

/***/ "./packages/packages/pro/editor-variables-extended/src/init.tsx":
/*!**********************************************************************!*\
  !*** ./packages/packages/pro/editor-variables-extended/src/init.tsx ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: function() { return /* binding */ init; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_core_adapter_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/core-adapter-utils */ "@elementor/core-adapter-utils");
/* harmony import */ var _elementor_core_adapter_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_core_adapter_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_editor_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/editor-props */ "@elementor/editor-props");
/* harmony import */ var _elementor_editor_props__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_props__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elementor_editor_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elementor/editor-ui */ "@elementor/editor-ui");
/* harmony import */ var _elementor_editor_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elementor_editor_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elementor/editor-variables */ "@elementor/editor-variables");
/* harmony import */ var _elementor_editor_variables__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_variables__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @elementor/icons */ "@elementor/icons");
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_elementor_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _elementor_license_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @elementor/license-api */ "@elementor/license-api");
/* harmony import */ var _elementor_license_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_elementor_license_api__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_size_size_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/size/size-field */ "./packages/packages/pro/editor-variables-extended/src/components/size/size-field.tsx");
/* harmony import */ var _prop_types_size_variable_prop_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./prop-types/size-variable-prop-type */ "./packages/packages/pro/editor-variables-extended/src/prop-types/size-variable-prop-type.ts");
/* harmony import */ var _utils_prop_type_compatibility__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/prop-type-compatibility */ "./packages/packages/pro/editor-variables-extended/src/utils/prop-type-compatibility.ts");
/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/settings */ "./packages/packages/pro/editor-variables-extended/src/utils/settings.ts");
/* harmony import */ var _utils_transform_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/transform-utils */ "./packages/packages/pro/editor-variables-extended/src/utils/transform-utils.ts");












const parse = (value, type) => {
  return (0,_utils_transform_utils__WEBPACK_IMPORTED_MODULE_11__.parseSizeValue)(value, undefined, undefined, type);
};
async function init() {
  const isLicenseExpired = await (0,_elementor_license_api__WEBPACK_IMPORTED_MODULE_6__.fetchLicenseStatus)().catch(() => false);
  const commonOptions = {
    valueField: _components_size_size_field__WEBPACK_IMPORTED_MODULE_7__.SizeField,
    icon: _elementor_icons__WEBPACK_IMPORTED_MODULE_5__.ExpandDiagonalIcon,
    propTypeUtil: _prop_types_size_variable_prop_type__WEBPACK_IMPORTED_MODULE_8__.sizeVariablePropTypeUtil,
    fallbackPropTypeUtil: _elementor_editor_props__WEBPACK_IMPORTED_MODULE_2__.sizePropTypeUtil,
    variableType: 'size',
    valueTransformer: parse,
    ...(isLicenseExpired && {
      emptyState: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_ui__WEBPACK_IMPORTED_MODULE_3__.CtaButton, {
        size: "small",
        href: 'https://go.elementor.com/renew-license-manager-size-variable'
      })
    })
  };
  (0,_elementor_editor_variables__WEBPACK_IMPORTED_MODULE_4__.registerVariableType)({
    ...commonOptions,
    key: _prop_types_size_variable_prop_type__WEBPACK_IMPORTED_MODULE_8__.sizeVariablePropTypeUtil.key,
    defaultValue: '0px',
    selectionFilter: (variables, propType) => {
      const availableUnits = (0,_utils_settings__WEBPACK_IMPORTED_MODULE_10__.getAvailableUnits)(propType);
      return variables.filter(variable => {
        const {
          unit
        } = (0,_utils_transform_utils__WEBPACK_IMPORTED_MODULE_11__.parseSizeValue)(variable.value);
        return availableUnits.includes(unit);
      });
    },
    isCompatible: _utils_prop_type_compatibility__WEBPACK_IMPORTED_MODULE_9__.isPropTypeCompatible
  });
  if ((0,_elementor_core_adapter_utils__WEBPACK_IMPORTED_MODULE_1__.isCoreAtLeast)('3.35')) {
    (0,_elementor_editor_variables__WEBPACK_IMPORTED_MODULE_4__.registerVariableType)({
      ...commonOptions,
      key: _prop_types_size_variable_prop_type__WEBPACK_IMPORTED_MODULE_8__.GLOBAL_CUSTOM_SIZE_VARIABLE_KEY,
      isCompatible: () => true
    });
  }
}

/***/ }),

/***/ "./packages/packages/pro/editor-variables-extended/src/prop-types/size-variable-prop-type.ts":
/*!***************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-variables-extended/src/prop-types/size-variable-prop-type.ts ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLOBAL_CUSTOM_SIZE_VARIABLE_KEY: function() { return /* binding */ GLOBAL_CUSTOM_SIZE_VARIABLE_KEY; },
/* harmony export */   sizeVariablePropTypeUtil: function() { return /* binding */ sizeVariablePropTypeUtil; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-props */ "@elementor/editor-props");
/* harmony import */ var _elementor_editor_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/schema */ "@elementor/schema");
/* harmony import */ var _elementor_schema__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_schema__WEBPACK_IMPORTED_MODULE_1__);


const sizeVariablePropTypeUtil = (0,_elementor_editor_props__WEBPACK_IMPORTED_MODULE_0__.createPropUtils)('global-size-variable', _elementor_schema__WEBPACK_IMPORTED_MODULE_1__.z.string());
const GLOBAL_CUSTOM_SIZE_VARIABLE_KEY = 'global-custom-size-variable';

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
/* harmony export */   AUTO_UNIT_KEY: function() { return /* binding */ AUTO_UNIT_KEY; },
/* harmony export */   CUSTOM_UNIT_KEY: function() { return /* binding */ CUSTOM_UNIT_KEY; },
/* harmony export */   DEFAULT_UNIT: function() { return /* binding */ DEFAULT_UNIT; },
/* harmony export */   getAvailableUnits: function() { return /* binding */ getAvailableUnits; },
/* harmony export */   getDefaultUnit: function() { return /* binding */ getDefaultUnit; }
/* harmony export */ });
/* harmony import */ var _elementor_core_adapter_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/core-adapter-utils */ "@elementor/core-adapter-utils");
/* harmony import */ var _elementor_core_adapter_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_core_adapter_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-props */ "@elementor/editor-props");
/* harmony import */ var _elementor_editor_props__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_props__WEBPACK_IMPORTED_MODULE_1__);


const DEFAULT_UNIT = 'px';
const CUSTOM_UNIT_KEY = 'custom';
const AUTO_UNIT_KEY = 'auto';
const DEFAULT_UNITS = ['px', '%', 'em', 'rem', 'ch', 'vw', 'vh', 's', 'ms'];
const EXTENDED_UNITS = [AUTO_UNIT_KEY, CUSTOM_UNIT_KEY];
const allUnits = [...DEFAULT_UNITS, ...EXTENDED_UNITS];
const getAvailableUnits = propType => {
  if (!propType) {
    return normalizeUnits(allUnits);
  }
  const settings = extractSettings(propType);
  if (!Array.isArray(settings.available_units) || settings.available_units.length === 0) {
    return normalizeUnits(allUnits);
  }
  return normalizeUnits(settings.available_units);
};
const getDefaultUnit = propType => {
  if (!propType) {
    return DEFAULT_UNIT;
  }
  return extractSettings(propType)?.default_unit ?? DEFAULT_UNIT;
};
const extractSettings = propType => {
  if (propType?.kind !== 'union') {
    return {};
  }
  const sizeBranch = propType.prop_types[_elementor_editor_props__WEBPACK_IMPORTED_MODULE_1__.sizePropTypeUtil.key];
  if (sizeBranch) {
    return sizeBranch.settings;
  }
  for (const branch of Object.values(propType.prop_types)) {
    const settings = branch?.settings;
    if (settings && Array.isArray(settings.available_units)) {
      return settings;
    }
  }
  return {};
};
const normalizeUnits = units => {
  if ((0,_elementor_core_adapter_utils__WEBPACK_IMPORTED_MODULE_0__.isCoreAtLeast)('3.35')) {
    return units;
  }

  // TODO: remove version check after 3.37
  return units.filter(unit => unit !== CUSTOM_UNIT_KEY);
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
/* harmony import */ var _prop_types_size_variable_prop_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../prop-types/size-variable-prop-type */ "./packages/packages/pro/editor-variables-extended/src/prop-types/size-variable-prop-type.ts");
/* harmony import */ var _sync_get_supported_units__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sync/get-supported-units */ "./packages/packages/pro/editor-variables-extended/src/sync/get-supported-units.ts");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings */ "./packages/packages/pro/editor-variables-extended/src/utils/settings.ts");




// TODO: To be removed when we go for the Prop type structure
const parseSizeValue = (value, defaultUnit, unitsLookup, propTypeKey) => {
  if (propTypeKey && propTypeKey === _prop_types_size_variable_prop_type__WEBPACK_IMPORTED_MODULE_0__.GLOBAL_CUSTOM_SIZE_VARIABLE_KEY) {
    return {
      size: value,
      unit: 'custom'
    };
  }
  if ('string' !== typeof value) {
    if (value?.unit === 'custom') {
      return value;
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
    unit: defaultUnit ?? _settings__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_UNIT
  };
  const unitsToCheck = unitsLookup ?? (0,_sync_get_supported_units__WEBPACK_IMPORTED_MODULE_1__.getSupportedUnits)();
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
  if (unit === 'custom') {
    return size;
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

/***/ "@elementor/core-adapter-utils":
/*!***************************************************!*\
  !*** external ["elementorV2","coreAdapterUtils"] ***!
  \***************************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["coreAdapterUtils"];

/***/ }),

/***/ "@elementor/editor-controls":
/*!*************************************************!*\
  !*** external ["elementorV2","editorControls"] ***!
  \*************************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["editorControls"];

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

/***/ "@elementor/license-api":
/*!*********************************************!*\
  !*** external ["elementorV2","licenseApi"] ***!
  \*********************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["licenseApi"];

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
/*!**********************************************************************!*\
  !*** ./packages/packages/pro/editor-variables-extended/src/index.ts ***!
  \**********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: function() { return /* reexport safe */ _init__WEBPACK_IMPORTED_MODULE_0__.init; }
/* harmony export */ });
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "./packages/packages/pro/editor-variables-extended/src/init.tsx");

}();
(window.elementorV2 = window.elementorV2 || {}).editorVariablesExtended = __webpack_exports__;
/******/ })()
;
window.elementorV2.editorVariablesExtended?.init?.();

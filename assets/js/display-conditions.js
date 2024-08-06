/*! pro-elements - v3.23.0 - 05-08-2024 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../core/app/assets/js/utils.js":
/*!**************************************!*\
  !*** ../core/app/assets/js/utils.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.replaceUtmPlaceholders = exports.htmlDecodeTextContent = exports.arrayToClassName = void 0;
// Copied from Core.
const arrayToClassName = (array, action) => {
  return array.filter(item => 'object' === typeof item ? Object.entries(item)[0][1] : item).map(item => {
    const value = 'object' === typeof item ? Object.entries(item)[0][0] : item;
    return action ? action(value) : value;
  }).join(' ');
};
exports.arrayToClassName = arrayToClassName;
const htmlDecodeTextContent = input => {
  const doc = new DOMParser().parseFromString(input, 'text/html');
  return doc.documentElement.textContent;
};
exports.htmlDecodeTextContent = htmlDecodeTextContent;
const replaceUtmPlaceholders = (link = '', utms = {}) => {
  if (!link || !utms) {
    return link;
  }
  Object.keys(utms).forEach(key => {
    const match = new RegExp(`%%${key}%%`, 'g');
    link = link.replace(match, utms[key]);
  });
  return link;
};
exports.replaceUtmPlaceholders = replaceUtmPlaceholders;

/***/ }),

/***/ "../modules/display-conditions/assets/js/editor/app.js":
/*!*************************************************************!*\
  !*** ../modules/display-conditions/assets/js/editor/app.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _ui = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
var _content = _interopRequireDefault(__webpack_require__(/*! ./components/content */ "../modules/display-conditions/assets/js/editor/components/content.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const App = props => {
  const [dialogOpen, setDialogOpen] = (0, _react.useState)(true),
    fadeDuration = 500;
  (0, _react.useEffect)(() => {
    if (!dialogOpen) {
      const timeoutId = setTimeout(() => {
        props.onClose();
      }, fadeDuration);
      return () => clearTimeout(timeoutId);
    }
  }, [dialogOpen]);
  const handleCloseDialog = () => {
    setDialogOpen(false);
  };
  return /*#__PURE__*/_react.default.createElement(_ui.DirectionProvider, {
    rtl: props.isRTL
  }, /*#__PURE__*/_react.default.createElement(_ui.LocalizationProvider, null, /*#__PURE__*/_react.default.createElement(_ui.ThemeProvider, {
    colorScheme: props.colorScheme
  }, /*#__PURE__*/_react.default.createElement(_ui.Dialog, {
    open: dialogOpen,
    fullWidth: true,
    maxWidth: "lg",
    TransitionComponent: _ui.Fade,
    transitionDuration: {
      enter: fadeDuration,
      exit: fadeDuration
    },
    sx: {
      '& .MuiDialog-paper': {
        height: 'calc(100vh - 4rem)',
        maxHeight: 775
      }
    }
  }, /*#__PURE__*/_react.default.createElement(_content.default, {
    getControlValue: props.getControlValue,
    setControlValue: props.setControlValue,
    fetchData: props.fetchData,
    onClose: handleCloseDialog,
    conditionsConfig: props.conditionsConfig,
    setCacheNoticeStatus: props.setCacheNoticeStatus
  })))));
};
App.propTypes = {
  colorScheme: PropTypes.oneOf(['auto', 'light', 'dark']),
  isRTL: PropTypes.bool,
  getControlValue: PropTypes.func.isRequired,
  setControlValue: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  conditionsConfig: PropTypes.object.isRequired,
  setCacheNoticeStatus: PropTypes.func.isRequired
};
var _default = exports["default"] = App;

/***/ }),

/***/ "../modules/display-conditions/assets/js/editor/behavior.js":
/*!******************************************************************!*\
  !*** ../modules/display-conditions/assets/js/editor/behavior.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _app = _interopRequireDefault(__webpack_require__(/*! ./app */ "../modules/display-conditions/assets/js/editor/app.js"));
class DisplayConditionsBehavior extends Marionette.Behavior {
  ui() {
    const iconClass = '.eicon-flow.e-control-display-conditions';
    return {
      displayConditionsButton: iconClass,
      displayConditionsPromoButton: `${iconClass}-promo`
    };
  }
  events() {
    return {
      'click @ui.displayConditionsButton': 'onClickControlButtonDisplayConditions',
      'mouseenter @ui.displayConditionsPromoButton': 'onHoverControlButtonDisplayConditions'
    };
  }
  onClickControlButtonDisplayConditions(event) {
    event.stopPropagation();
    this.mount();
  }
  onHoverControlButtonDisplayConditions(event) {
    event.stopPropagation();
    elementor.promotion.showDialog({
      title: __('Display Conditions', 'elementor-pro'),
      content: __('Upgrade to Elementor Pro Advanced to get the Display Conditions feature as well as additional professional and ecommerce widgets', 'elementor-pro'),
      targetElement: this.el,
      actionButton: {
        url: 'https://go.elementor.com/go-pro-advanced-display-conditions/',
        text: __('Upgrade Now', 'elementor-pro'),
        classes: ['elementor-button', 'go-pro']
      }
    });
  }
  getRootElement() {
    let rootElement = window.parent.document.getElementById('elementor-conditions__modal');
    if (!!rootElement) {
      return rootElement;
    }
    rootElement = document.createElement('div');
    rootElement.setAttribute('id', 'elementor-conditions__modal');
    return rootElement;
  }
  mount() {
    const colorScheme = elementor?.getPreferences?.('ui_theme') || 'auto',
      isRTL = elementorCommon.config.isRTL,
      rootElement = this.getRootElement();
    window.parent.document.body.appendChild(rootElement);
    ReactDOM.render( /*#__PURE__*/_react.default.createElement(_app.default // eslint-disable-line react/no-deprecated
    , {
      colorScheme: colorScheme,
      isRTL: isRTL,
      getControlValue: this.getOption('getControlValue'),
      setControlValue: this.getOption('setControlValue'),
      fetchData: this.getOption('fetchData'),
      onClose: () => this.unmount(rootElement),
      conditionsConfig: this.getOption('conditionsConfig'),
      setCacheNoticeStatus: this.getOption('setCacheNoticeStatus')
    }), rootElement);
  }
  unmount(rootElement) {
    // eslint-disable-next-line react/no-deprecated
    ReactDOM.unmountComponentAtNode(rootElement);
    rootElement.remove();
  }
}
exports["default"] = DisplayConditionsBehavior;

/***/ }),

/***/ "../modules/display-conditions/assets/js/editor/components/cache-notice.js":
/*!*********************************************************************************!*\
  !*** ../modules/display-conditions/assets/js/editor/components/cache-notice.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
var _ui = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const CacheNotice = ({
  setCacheNoticeStatus
}) => {
  const [open, setOpen] = (0, _react.useState)(true);
  const handleClose = async () => {
    const response = await setCacheNoticeStatus();
    if (response) {
      setOpen(false);
    }
  };
  return /*#__PURE__*/_react.default.createElement(_ui.Box, null, /*#__PURE__*/_react.default.createElement(_ui.Collapse, {
    in: open,
    sx: {
      px: 3
    }
  }, /*#__PURE__*/_react.default.createElement(_ui.Alert, {
    color: "info",
    severity: "error",
    variant: "standard",
    onClose: handleClose,
    sx: {
      mt: 3
    }
  }, (0, _i18n.__)('Keep in mind: Certain cache plugins can conflict with your display conditions. ', 'elementor-pro'), /*#__PURE__*/_react.default.createElement(_ui.Link, {
    href: "https://go.elementor.com/app-display-conditions-cache-notice/",
    underline: "hover",
    color: "info.main",
    target: "_blank",
    sx: {
      '&:hover': {
        color: theme => theme.palette.info.main
      }
    }
  }, (0, _i18n.__)('Learn more', 'elementor-pro')))));
};
CacheNotice.propTypes = {
  setCacheNoticeStatus: PropTypes.func.isRequired
};
var _default = exports["default"] = CacheNotice;

/***/ }),

/***/ "../modules/display-conditions/assets/js/editor/components/conditions-repeater-row.js":
/*!********************************************************************************************!*\
  !*** ../modules/display-conditions/assets/js/editor/components/conditions-repeater-row.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));
var _useConditions = _interopRequireDefault(__webpack_require__(/*! ../hooks/use-conditions */ "../modules/display-conditions/assets/js/editor/hooks/use-conditions.js"));
var _ui = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
var _controlRenderer = _interopRequireDefault(__webpack_require__(/*! ./control-renderer */ "../modules/display-conditions/assets/js/editor/components/control-renderer.js"));
var _conditionSelectControl = _interopRequireDefault(__webpack_require__(/*! ./controls/ui/condition-select-control */ "../modules/display-conditions/assets/js/editor/components/controls/ui/condition-select-control.js"));
var _conditionSelectOption = _interopRequireDefault(__webpack_require__(/*! ./controls/ui/condition-select-option */ "../modules/display-conditions/assets/js/editor/components/controls/ui/condition-select-option.js"));
var _rowControls = _interopRequireDefault(__webpack_require__(/*! ./ui/row-controls */ "../modules/display-conditions/assets/js/editor/components/ui/row-controls.js"));
var _utils = __webpack_require__(/*! ../utils/utils */ "../modules/display-conditions/assets/js/editor/utils/utils.js");
var _constants = __webpack_require__(/*! ../utils/constants */ "../modules/display-conditions/assets/js/editor/utils/constants.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ConditionsRepeaterRow = ({
  andConditionIndex,
  orConditionIndex
}) => {
  const {
      selectedConditions,
      conditionsConfig,
      dispatch
    } = (0, _useConditions.default)(),
    {
      conditions: availableConditions,
      flattenedConditionOptions
    } = conditionsConfig,
    orCondition = selectedConditions[orConditionIndex];
  const andCondition = orCondition[andConditionIndex],
    selectedConditionKey = andCondition?.condition;
  const conditionControls = availableConditions[selectedConditionKey]?.controls || {},
    controlCount = Object.keys(conditionControls).length;
  const handleChangeCondition = event => {
    const conditionKey = event.target.value,
      conditionToChange = {
        condition: conditionKey,
        ...(0, _utils.getConditionInitialState)(availableConditions, conditionKey)
      };
    dispatch({
      type: _constants.ACTION_TYPES.CHANGE_CONDITION_TYPE,
      orConditionIndex,
      andConditionIndex,
      conditionToChange
    });
  };
  return /*#__PURE__*/React.createElement(_ui.Container, {
    maxWidth: "md",
    sx: {
      display: 'flex',
      gap: 0.5,
      mb: 1,
      position: 'relative'
    },
    className: `and-condition-repeater-row and-condition-${andConditionIndex}`
  }, /*#__PURE__*/React.createElement(_conditionSelectControl.default, {
    id: "condition-select",
    value: andCondition.condition || '',
    onChange: event => handleChangeCondition(event, andConditionIndex),
    controlCount: controlCount
  }, flattenedConditionOptions.map(({
    key,
    label,
    isGroup
  }) => isGroup ? /*#__PURE__*/React.createElement(_ui.ListSubheader, {
    key: key
  }, /*#__PURE__*/React.createElement(_conditionSelectOption.default, {
    variant: 'inherit',
    controlCount: controlCount
  }, label)) : /*#__PURE__*/React.createElement(_ui.MenuItem, {
    key: key,
    value: key
  }, /*#__PURE__*/React.createElement(_conditionSelectOption.default, {
    controlCount: controlCount
  }, label)))), Object.keys(conditionControls).map(controlKey => /*#__PURE__*/React.createElement(_controlRenderer.default, {
    key: controlKey,
    controlKey: controlKey,
    andConditionIndex: andConditionIndex,
    orConditionIndex: orConditionIndex,
    controlCount: controlCount
  })), /*#__PURE__*/React.createElement(_rowControls.default, {
    orConditionIndex: orConditionIndex,
    andConditionIndex: andConditionIndex
  }));
};
ConditionsRepeaterRow.propTypes = {
  andConditionIndex: PropTypes.number.isRequired,
  orConditionIndex: PropTypes.number.isRequired
};
var _default = exports["default"] = ConditionsRepeaterRow;

/***/ }),

/***/ "../modules/display-conditions/assets/js/editor/components/conditions-selectors.js":
/*!*****************************************************************************************!*\
  !*** ../modules/display-conditions/assets/js/editor/components/conditions-selectors.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _useConditions = _interopRequireDefault(__webpack_require__(/*! ../hooks/use-conditions */ "../modules/display-conditions/assets/js/editor/hooks/use-conditions.js"));
var _ui = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
var _conditionsRepeaterRow = _interopRequireDefault(__webpack_require__(/*! ./conditions-repeater-row */ "../modules/display-conditions/assets/js/editor/components/conditions-repeater-row.js"));
const ConditionsSelectors = ({
  orConditionIndex
}) => {
  const {
      selectedConditions
    } = (0, _useConditions.default)(),
    orCondition = selectedConditions[orConditionIndex];
  return /*#__PURE__*/_react.default.createElement(_ui.Box, {
    sx: {
      my: 2,
      gap: 1
    },
    className: `or-condition-repeater or-condition-${orConditionIndex}`
  }, orCondition.map((andCondition, andConditionIndex) => /*#__PURE__*/_react.default.createElement(_conditionsRepeaterRow.default, {
    key: 'or-condition-row-' + andConditionIndex,
    andConditionIndex: andConditionIndex,
    orConditionIndex: orConditionIndex
  })));
};
ConditionsSelectors.propTypes = {
  orConditionIndex: PropTypes.number.isRequired
};
var _default = exports["default"] = ConditionsSelectors;

/***/ }),

/***/ "../modules/display-conditions/assets/js/editor/components/conditions.js":
/*!*******************************************************************************!*\
  !*** ../modules/display-conditions/assets/js/editor/components/conditions.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _ui = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
var _hierarchyIcon = _interopRequireDefault(__webpack_require__(/*! ./icons/hierarchy-icon */ "../modules/display-conditions/assets/js/editor/components/icons/hierarchy-icon.js"));
var _orRowGroup = _interopRequireDefault(__webpack_require__(/*! ./or-row-group */ "../modules/display-conditions/assets/js/editor/components/or-row-group.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Conditions = props => {
  return /*#__PURE__*/React.createElement(_ui.Box, {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    sx: {
      flex: 1,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement(_ui.Stack, {
    maxWidth: "md",
    width: "100%",
    justifyContent: "center",
    textAlign: "center",
    sx: {
      pt: 5,
      pb: 10,
      px: 6
    }
  }, /*#__PURE__*/React.createElement(_hierarchyIcon.default, {
    fontSize: "large",
    sx: {
      mb: 1,
      mx: 'auto'
    }
  }), /*#__PURE__*/React.createElement(_ui.Typography, {
    component: "h5",
    variant: "h5",
    color: "text.primary"
  }, __('Set one or more conditions for this element', 'elementor-pro')), /*#__PURE__*/React.createElement(_ui.Typography, {
    variant: "subtitle1",
    color: "text.tertiary",
    sx: {
      mb: 4
    }
  }, __('It will only appear on your website when all the conditions are met.', 'elementor-pro'), ' ', /*#__PURE__*/React.createElement(_ui.Link, {
    href: "https://go.elementor.com/app-display-conditions/",
    target: "_blank",
    rel: "noreferrer",
    color: "info.main",
    underline: "hover",
    sx: {
      '&:hover': {
        color: theme => theme.palette.info.main
      }
    }
  }, __('Learn more', 'elementor-pro'))), /*#__PURE__*/React.createElement(_orRowGroup.default, props)));
};
var _default = exports["default"] = Conditions;

/***/ }),

/***/ "../modules/display-conditions/assets/js/editor/components/content.js":
/*!****************************************************************************!*\
  !*** ../modules/display-conditions/assets/js/editor/components/content.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _conditionsReducer = __webpack_require__(/*! ../reducers/conditions-reducer */ "../modules/display-conditions/assets/js/editor/reducers/conditions-reducer.js");
var _conditionsContext = __webpack_require__(/*! ../contexts/conditions-context */ "../modules/display-conditions/assets/js/editor/contexts/conditions-context.js");
var _ui = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
var _utils = __webpack_require__(/*! ../utils/utils */ "../modules/display-conditions/assets/js/editor/utils/utils.js");
var _header = _interopRequireDefault(__webpack_require__(/*! ./header */ "../modules/display-conditions/assets/js/editor/components/header.js"));
var _footer = _interopRequireDefault(__webpack_require__(/*! ./footer */ "../modules/display-conditions/assets/js/editor/components/footer.js"));
var _conditions = _interopRequireDefault(__webpack_require__(/*! ./conditions */ "../modules/display-conditions/assets/js/editor/components/conditions.js"));
var _cacheNotice = _interopRequireDefault(__webpack_require__(/*! ./cache-notice */ "../modules/display-conditions/assets/js/editor/components/cache-notice.js"));
var _constants = __webpack_require__(/*! ../utils/constants */ "../modules/display-conditions/assets/js/editor/utils/constants.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Content = ({
  getControlValue,
  setControlValue,
  conditionsConfig,
  onClose,
  fetchData,
  setCacheNoticeStatus
}) => {
  const inputValue = getControlValue(),
    controlValue = inputValue || [],
    initialState = {
      conditionsConfig,
      selectedConditions: controlValue,
      fetchData
    };
  const [showConditions, setShowConditions] = _react.default.useState(true),
    [conditionsStore, dispatch] = (0, _react.useReducer)(_conditionsReducer.conditionsReducer, initialState),
    [saveButtonDisplay, setSaveButtonDisplay] = (0, _react.useState)(false),
    {
      selectedConditions
    } = conditionsStore;
  (0, _react.useEffect)(() => {
    if (!saveButtonDisplay) {
      setSaveButtonDisplay(true);
    }
  }, [selectedConditions]);
  (0, _react.useEffect)(() => {
    setSaveButtonDisplay(false);
  }, []);
  const handleEmptyFieldsAndGetFirstInvalidIndex = () => {
    let hasFoundInvalidCondition = false,
      invalidOrConditionIndex = null,
      invalidAndConditionIndex = null;
    selectedConditions.forEach((orCondition, orConditionIndex) => {
      const {
        hasFoundInvalidConditionInConditionSet,
        invalidAndConditionIndex: andConditionIndex
      } = handleEmptyFieldsPerConditionSet(orCondition, orConditionIndex);
      if (hasFoundInvalidConditionInConditionSet && !hasFoundInvalidCondition) {
        hasFoundInvalidCondition = true;
        invalidAndConditionIndex = andConditionIndex;
        invalidOrConditionIndex = orConditionIndex;
      }
    });
    return {
      hasFoundInvalidCondition,
      invalidOrConditionIndex,
      invalidAndConditionIndex
    };
  };
  const handleEmptyFieldsPerConditionSet = (orCondition, orConditionIndex) => {
    let hasFoundInvalidConditionInConditionSet = false,
      invalidAndConditionIndex = null;
    orCondition.forEach((andCondition, andConditionIndex) => {
      const {
          condition: conditionKey
        } = andCondition,
        requiredKeys = getRequiredControlKeys(conditionKey);
      const isCurrentConditionInvalid = handleInvalidRequiredKeysPerCondition({
        requiredKeys,
        andCondition,
        orConditionIndex,
        andConditionIndex
      });
      if (isCurrentConditionInvalid && !hasFoundInvalidConditionInConditionSet) {
        invalidAndConditionIndex = andConditionIndex;
        hasFoundInvalidConditionInConditionSet = true;
      }
    });
    return {
      hasFoundInvalidConditionInConditionSet,
      invalidAndConditionIndex
    };
  };
  const handleInvalidRequiredKeysPerCondition = ({
    requiredKeys,
    andCondition,
    orConditionIndex,
    andConditionIndex
  }) => {
    const {
      condition: conditionKey
    } = andCondition;
    let hasFoundInvalidCondition = false;
    requiredKeys.forEach(controlKey => {
      const value = andCondition[controlKey],
        {
          type,
          variant = null
        } = conditionsConfig.conditions[conditionKey].controls[controlKey];
      if (value?.length || (0, _utils.shouldEmptyValuePassValidation)(andCondition.condition, andCondition.comparator)) {
        return;
      }
      if (!hasFoundInvalidCondition) {
        hasFoundInvalidCondition = true;
      }
      dispatch({
        type: _constants.ACTION_TYPES.SET_ERRORS,
        andConditionIndex,
        orConditionIndex,
        errors: {
          [controlKey]: (0, _utils.getInvalidInputFeedback)(type, variant, value, true)
        }
      });
    });
    return hasFoundInvalidCondition;
  };
  const handleSave = () => {
    const {
      hasFoundInvalidCondition,
      invalidOrConditionIndex,
      invalidAndConditionIndex
    } = handleEmptyFieldsAndGetFirstInvalidIndex();
    if (hasFoundInvalidCondition) {
      const className = `.or-condition-repeater.or-condition-${invalidOrConditionIndex} .and-condition-repeater-row.and-condition-${invalidAndConditionIndex}`,
        conditionRepeaterRows = document.querySelector(className);
      setTimeout(() => conditionRepeaterRows?.scrollIntoView({
        behavior: 'smooth'
      }), 100);
      return;
    }
    setControlValue([JSON.stringify(getSanitizedConditions())]);
    onClose();
  };
  const getRequiredControlKeys = condition => {
    const {
      controls
    } = conditionsConfig.conditions[condition];
    return Object.keys(controls).filter(key => controls[key].required);
  };
  const getSanitizedConditions = () => {
    return selectedConditions.map(orCondition => {
      return orCondition.map(andCondition => {
        const formattedCondition = {
          ...andCondition
        };
        delete formattedCondition.errors;
        return formattedCondition;
      });
    });
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_header.default, {
    onClose: onClose
  }), /*#__PURE__*/_react.default.createElement(_ui.Divider, {
    orientation: "horizontal"
  }), conditionsConfig.show_cache_notice && /*#__PURE__*/_react.default.createElement(_cacheNotice.default, {
    setCacheNoticeStatus: setCacheNoticeStatus
  }), /*#__PURE__*/_react.default.createElement(_conditionsContext.ConditionsContext.Provider, {
    value: {
      dispatch,
      ...conditionsStore
    }
  }, /*#__PURE__*/_react.default.createElement(_conditions.default, {
    showConditions: showConditions,
    setShowConditions: setShowConditions
  })), /*#__PURE__*/_react.default.createElement(_ui.Divider, {
    orientation: "horizontal"
  }), /*#__PURE__*/_react.default.createElement(_footer.default, {
    onClickSaveButton: () => handleSave(),
    showConditions: showConditions,
    setShowConditions: setShowConditions,
    isButtonDisabled: saveButtonDisplay
  }));
};
Content.propTypes = {
  getControlValue: PropTypes.func.isRequired,
  setControlValue: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  conditionsConfig: PropTypes.object.isRequired,
  setCacheNoticeStatus: PropTypes.func.isRequired
};
var _default = exports["default"] = Content;

/***/ }),

/***/ "../modules/display-conditions/assets/js/editor/components/control-renderer.js":
/*!*************************************************************************************!*\
  !*** ../modules/display-conditions/assets/js/editor/components/control-renderer.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));
var _useConditions = _interopRequireDefault(__webpack_require__(/*! ../hooks/use-conditions */ "../modules/display-conditions/assets/js/editor/hooks/use-conditions.js"));
var _selectControl = _interopRequireDefault(__webpack_require__(/*! ./controls/select-control */ "../modules/display-conditions/assets/js/editor/components/controls/select-control.js"));
var _autocompleteControl = _interopRequireDefault(__webpack_require__(/*! ./controls/autocomplete-control */ "../modules/display-conditions/assets/js/editor/components/controls/autocomplete-control.js"));
var _queryControl = _interopRequireDefault(__webpack_require__(/*! ./controls/query-control */ "../modules/display-conditions/assets/js/editor/components/controls/query-control.js"));
var _textFieldControl = _interopRequireDefault(__webpack_require__(/*! ./controls/text-field-control */ "../modules/display-conditions/assets/js/editor/components/controls/text-field-control.js"));
var _datePickerControl = _interopRequireDefault(__webpack_require__(/*! ./controls/date-picker-control */ "../modules/display-conditions/assets/js/editor/components/controls/date-picker-control.js"));
var _timePickerControl = _interopRequireDefault(__webpack_require__(/*! ./controls/time-picker-control */ "../modules/display-conditions/assets/js/editor/components/controls/time-picker-control.js"));
var _constants = __webpack_require__(/*! ../utils/constants */ "../modules/display-conditions/assets/js/editor/utils/constants.js");
var _utils = __webpack_require__(/*! ../utils/utils */ "../modules/display-conditions/assets/js/editor/utils/utils.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ControlRenderer = ({
  controlKey,
  andConditionIndex,
  orConditionIndex,
  controlCount
}) => {
  const {
      conditionsConfig,
      selectedConditions,
      dispatch
    } = (0, _useConditions.default)(),
    {
      conditions: availableConditions
    } = conditionsConfig,
    orCondition = selectedConditions[orConditionIndex],
    andCondition = orCondition[andConditionIndex];
  const selectedConditionKey = andCondition.condition,
    {
      controls = {}
    } = availableConditions[selectedConditionKey],
    control = ({} = controls[controlKey]),
    {
      options = {}
    } = control;
  if ('__settings' === controlKey) {
    return null;
  }
  const extractControlPropsFromGlobals = defaultAltValue => {
    const valueProps = getControlValueRelatedProps(defaultAltValue),
      invalidInputProps = getControlInvalidInputRelatedProps(),
      controlProps = {
        controlKey,
        control,
        conditionIndex: andConditionIndex,
        condition: andCondition,
        conditions: availableConditions,
        options,
        onChangeOption: handleChangeOption,
        controlCount
      };
    if ((0, _utils.shouldDisableControl)(controlKey, controlProps.condition.comparator)) {
      controlProps.disabled = true;
    }
    return {
      ...valueProps,
      ...invalidInputProps,
      ...controlProps
    };
  };
  const getControlValueRelatedProps = defaultAltValue => {
    defaultAltValue = (0, _utils.getControlValue)(defaultAltValue, _constants.DEFAULT_CONTROL_VALUES[control.type]);
    const defaultValue = (0, _utils.getControlValue)(control?.default, Object.keys(options)[0] || defaultAltValue),
      value = (0, _utils.getControlValue)(andCondition[controlKey], defaultValue);
    const placeholder = control?.placeholder || '',
      isMultiple = control?.multiple || false;
    return {
      defaultValue,
      value,
      placeholder,
      isMultiple
    };
  };
  const getControlInvalidInputRelatedProps = () => {
    const conditionErrors = andCondition.errors || {},
      controlErrors = conditionErrors[controlKey] || {},
      errorMessage = controlErrors.shouldShow && controlErrors.message || '',
      shouldShowError = Boolean(errorMessage);
    return {
      errorMessage,
      shouldShowError
    };
  };
  const handleChangeOption = value => {
    const {
        type,
        variant
      } = controls[controlKey],
      error = (0, _utils.getInvalidInputFeedback)(type, variant, value);
    dispatch({
      type: _constants.ACTION_TYPES.CHANGE_CONTROL_VALUE,
      orConditionIndex,
      andConditionIndex,
      controlKey,
      value
    });
    dispatch({
      type: _constants.ACTION_TYPES.SET_ERRORS,
      andConditionIndex,
      orConditionIndex,
      errors: {
        [controlKey]: error
      }
    });
  };
  const getDateAndTimeBasedControl = variant => {
    switch (variant) {
      case 'date':
        return /*#__PURE__*/React.createElement(_datePickerControl.default, extractControlPropsFromGlobals());
      case 'time':
        return /*#__PURE__*/React.createElement(_timePickerControl.default, extractControlPropsFromGlobals());
    }
  };
  switch (control.type) {
    case _constants.CONTROL_TYPES.SELECT:
      return /*#__PURE__*/React.createElement(_selectControl.default, extractControlPropsFromGlobals());
    case _constants.CONTROL_TYPES.MULTIPLE_SELECT:
      return /*#__PURE__*/React.createElement(_autocompleteControl.default, extractControlPropsFromGlobals());
    case _constants.CONTROL_TYPES.DATE_TIME:
      return getDateAndTimeBasedControl(control?.variant);
    case _constants.CONTROL_TYPES.QUERY:
      return /*#__PURE__*/React.createElement(_queryControl.default, extractControlPropsFromGlobals());
  }
  return /*#__PURE__*/React.createElement(_textFieldControl.default, extractControlPropsFromGlobals());
};
ControlRenderer.propTypes = {
  controlKey: PropTypes.string.isRequired,
  andConditionIndex: PropTypes.number.isRequired,
  orConditionIndex: PropTypes.number.isRequired,
  controlCount: PropTypes.number.isRequired
};
var _default = exports["default"] = ControlRenderer;

/***/ }),

/***/ "../modules/display-conditions/assets/js/editor/components/controls/autocomplete-control.js":
/*!**************************************************************************************************!*\
  !*** ../modules/display-conditions/assets/js/editor/components/controls/autocomplete-control.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var React = _react;
var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));
var _ui = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
var _conditionSelectOption = _interopRequireDefault(__webpack_require__(/*! ./ui/condition-select-option */ "../modules/display-conditions/assets/js/editor/components/controls/ui/condition-select-option.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const formatValue = valueToFormat => {
  return Array.isArray(valueToFormat) ? valueToFormat : [valueToFormat];
};
const AutocompleteControl = ({
  conditions,
  condition,
  controlKey,
  onChangeOption,
  options,
  value,
  shouldShowError,
  errorMessage,
  isMultiple,
  controlCount
}) => {
  const [controlValue, setControlValue] = (0, _react.useState)(formatValue(value)),
    label = controlValue?.length ? '' : conditions[condition.condition].label || '';
  (0, _react.useEffect)(() => {
    setControlValue(formatValue(value));
  }, [condition]);
  const handleChangeOption = newValue => {
    onChangeOption(newValue);
    setControlValue(newValue);
  };
  return /*#__PURE__*/React.createElement(_ui.Autocomplete, {
    multiple: isMultiple,
    id: `select-${controlKey}`,
    value: controlValue,
    options: Object.keys(options),
    getOptionLabel: optionKey => options[optionKey],
    sx: {
      flex: 1
    },
    ChipProps: {
      sx: {
        '&.MuiAutocomplete-tag': {
          maxWidth: '100px'
        }
      }
    },
    renderInput: params => /*#__PURE__*/React.createElement(_ui.TextField, (0, _extends2.default)({
      error: shouldShowError,
      helperText: errorMessage
    }, params, {
      placeholder: label,
      color: "secondary"
    })),
    ListboxProps: {
      sx: {
        maxHeight: 280
      }
    },
    size: "small",
    onChange: (_event, newValues) => handleChangeOption(formatValue(newValues)),
    renderOption: (optionProps, option) => /*#__PURE__*/React.createElement(_ui.Typography, (0, _extends2.default)({
      component: "li"
    }, optionProps), /*#__PURE__*/React.createElement(_conditionSelectOption.default, {
      component: "span",
      variant: "inherit",
      noWrap: true,
      controlCount: controlCount
    }, options[option])),
    forcePopupIcon: !Object.keys(options).length <= 1
  });
};
AutocompleteControl.propTypes = {
  conditions: PropTypes.object.isRequired,
  condition: PropTypes.object.isRequired,
  controlKey: PropTypes.string.isRequired,
  onChangeOption: PropTypes.func.isRequired,
  value: PropTypes.array.isRequired,
  options: PropTypes.object.isRequired,
  errorMessage: PropTypes.string.isRequired,
  shouldShowError: PropTypes.bool.isRequired,
  isMultiple: PropTypes.bool.isRequired,
  optionsStyles: PropTypes.object.isRequired,
  menuStyles: PropTypes.object.isRequired,
  controlCount: PropTypes.number.isRequired
};
var _default = exports["default"] = AutocompleteControl;

/***/ }),

/***/ "../modules/display-conditions/assets/js/editor/components/controls/date-picker-control.js":
/*!*************************************************************************************************!*\
  !*** ../modules/display-conditions/assets/js/editor/components/controls/date-picker-control.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var React = _react;
var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));
var _ui = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
var _dayjs = _interopRequireDefault(__webpack_require__(/*! dayjs */ "../node_modules/dayjs/dayjs.min.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const dateFormat = 'MM-DD-YYYY';
const formattedValue = dateString => {
  return (0, _dayjs.default)(dateString, dateFormat, true).isValid() ? (0, _dayjs.default)(dateString, dateFormat) : null;
};
const DatePickerControl = ({
  condition,
  onChangeOption,
  controlKey,
  value,
  shouldShowError,
  errorMessage
}) => {
  const [controlValue, setControlValue] = (0, _react.useState)(formattedValue(value));
  (0, _react.useEffect)(() => {
    setControlValue(formattedValue(value));
  }, [condition]);
  const handleChangeOption = newValue => {
    if ((0, _dayjs.default)(newValue, dateFormat, true).isValid()) {
      onChangeOption(newValue.format(dateFormat));
      setControlValue(formattedValue(newValue));
    } else {
      onChangeOption('');
    }
  };
  return /*#__PURE__*/React.createElement(_ui.DatePicker, {
    value: controlValue,
    sx: {
      flex: 1
    },
    id: `select-${controlKey}`,
    slotProps: {
      openPickerButton: {
        size: 'small'
      },
      textField: {
        size: 'small',
        color: 'secondary',
        error: shouldShowError,
        helperText: errorMessage
      }
    },
    onChange: newValue => handleChangeOption(newValue)
  });
};
DatePickerControl.propTypes = {
  condition: PropTypes.object.isRequired,
  controlKey: PropTypes.string.isRequired,
  onChangeOption: PropTypes.func.isRequired,
  value: PropTypes.string,
  errorMessage: PropTypes.string.isRequired,
  shouldShowError: PropTypes.bool.isRequired
};
var _default = exports["default"] = DatePickerControl;

/***/ }),

/***/ "../modules/display-conditions/assets/js/editor/components/controls/query-control.js":
/*!*******************************************************************************************!*\
  !*** ../modules/display-conditions/assets/js/editor/components/controls/query-control.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js"));
var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));
var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
var _conditionsContext = __webpack_require__(/*! ../../contexts/conditions-context */ "../modules/display-conditions/assets/js/editor/contexts/conditions-context.js");
var _ui = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
var _utils = __webpack_require__(/*! elementor-pro-app/utils */ "../core/app/assets/js/utils.js");
var _conditionSelectOption = _interopRequireDefault(__webpack_require__(/*! ./ui/condition-select-option */ "../modules/display-conditions/assets/js/editor/components/controls/ui/condition-select-option.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const formatValue = valueToFormat => {
  return Array.isArray(valueToFormat) ? valueToFormat : [valueToFormat];
};
const QueryControl = ({
  conditions,
  condition,
  control,
  controlKey,
  onChangeOption,
  value,
  shouldShowError,
  errorMessage,
  isMultiple,
  controlCount
}) => {
  const {
      fetchData
    } = (0, _react.useContext)(_conditionsContext.ConditionsContext),
    [controlValue, setControlValue] = (0, _react.useState)(formatValue(value)),
    [options, setOptions] = (0, _react.useState)([]),
    [loading, setLoading] = (0, _react.useState)(false),
    label = controlValue?.length ? '' : conditions[condition.condition].label || '';
  (0, _react.useEffect)(() => {
    setControlValue(formatValue(value));
  }, [condition]);
  const handleSearchInputChange = async (event, newInputValue, selectedValues) => {
    if ('' === newInputValue) {
      setOptions([]);
      return;
    }
    setLoading(true);
    const results = await fetchData(newInputValue, control);

    // Filter out options that are already selected
    const filteredResults = results.filter(option => {
      option.text = (0, _utils.htmlDecodeTextContent)(option.text);
      return !selectedValues.some(selectedOption => selectedOption?.id === option?.id);
    });
    setOptions(filteredResults);
    setLoading(false);
  };
  const handleChangeOption = newValue => {
    onChangeOption(newValue);
    setControlValue(newValue);
  };
  return /*#__PURE__*/_react.default.createElement(_ui.Autocomplete, {
    multiple: isMultiple,
    id: `select-${controlKey}`,
    value: controlValue,
    options: options,
    getOptionLabel: option => option ? option.text : '',
    isOptionEqualToValue: (option, optionToCompare) => option.id === optionToCompare.id,
    filterOptions: x => x,
    noOptionsText: (0, _i18n.__)('No results', 'elementor-pro'),
    loading: loading,
    loadingText: (0, _i18n.__)('Searching...', 'elementor-pro'),
    size: "small",
    sx: {
      flex: 1
    },
    ChipProps: {
      sx: {
        '&.MuiAutocomplete-tag': {
          maxWidth: '100px'
        }
      }
    },
    renderInput: params => /*#__PURE__*/_react.default.createElement(_ui.TextField, (0, _extends2.default)({}, params, {
      placeholder: label,
      color: "secondary",
      error: shouldShowError,
      helperText: errorMessage,
      InputProps: {
        ...params.InputProps,
        endAdornment: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, loading ? /*#__PURE__*/_react.default.createElement(_ui.CircularProgress, {
          color: "inherit",
          size: 20
        }) : null, params.InputProps.endAdornment)
      }
    })),
    ListboxProps: {
      sx: {
        maxHeight: 280
      }
    },
    onChange: (_event, newValues) => handleChangeOption(newValues),
    onInputChange: (event, newInputValue) => handleSearchInputChange(event, newInputValue, controlValue),
    renderOption: (optionProps, option) => /*#__PURE__*/_react.default.createElement(_ui.Typography, (0, _extends2.default)({
      component: "li"
    }, optionProps), /*#__PURE__*/_react.default.createElement(_conditionSelectOption.default, {
      component: "span",
      variant: "inherit",
      noWrap: true,
      controlCount: controlCount
    }, option.text))
  });
};
QueryControl.propTypes = {
  conditions: PropTypes.object.isRequired,
  condition: PropTypes.object.isRequired,
  onChangeOption: PropTypes.func.isRequired,
  controlKey: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  value: PropTypes.array.isRequired,
  errorMessage: PropTypes.string.isRequired,
  shouldShowError: PropTypes.bool.isRequired,
  isMultiple: PropTypes.bool.isRequired,
  controlCount: PropTypes.number.isRequired
};
var _default = exports["default"] = QueryControl;

/***/ }),

/***/ "../modules/display-conditions/assets/js/editor/components/controls/select-control.js":
/*!********************************************************************************************!*\
  !*** ../modules/display-conditions/assets/js/editor/components/controls/select-control.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var React = _react;
var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));
var _ui = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
var _conditionSelectControl = _interopRequireDefault(__webpack_require__(/*! ./ui/condition-select-control */ "../modules/display-conditions/assets/js/editor/components/controls/ui/condition-select-control.js"));
var _conditionSelectOption = _interopRequireDefault(__webpack_require__(/*! ./ui/condition-select-option */ "../modules/display-conditions/assets/js/editor/components/controls/ui/condition-select-option.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const SelectControl = ({
  condition,
  control,
  controlKey,
  onChangeOption,
  options,
  value,
  controlCount
}) => {
  const [controlValue, setControlValue] = (0, _react.useState)(value);
  (0, _react.useEffect)(() => {
    setControlValue(value);
  }, [condition]);
  const handleChangeOption = newValue => {
    onChangeOption(newValue);
    setControlValue(newValue);
  };
  const getOptions = () => {
    return Object.entries(options).map(([optionKey, optionValue]) => {
      if ('group' === optionValue.type) {
        return /*#__PURE__*/React.createElement(_ui.ListSubheader, {
          key: optionKey
        }, /*#__PURE__*/React.createElement(_conditionSelectOption.default, {
          variant: 'inherit',
          controlCount: controlCount
        }, optionValue.label));
      }
      const isDisabled = control?.disabled_options?.includes(optionKey);
      return /*#__PURE__*/React.createElement(_ui.MenuItem, {
        key: optionKey,
        value: optionKey,
        disabled: isDisabled,
        className: isDisabled && 'hidden' === control?.disabled_type ? 'elementor-hidden' : ''
      }, /*#__PURE__*/React.createElement(_conditionSelectOption.default, {
        controlCount: controlCount
      }, optionValue));
    });
  };
  return /*#__PURE__*/React.createElement(_conditionSelectControl.default, {
    id: `select-${controlKey}`,
    value: controlValue,
    onChange: event => handleChangeOption(event.target.value),
    disabled: Object.keys(options).length <= 1,
    controlCount: controlCount
  }, getOptions());
};
SelectControl.propTypes = {
  condition: PropTypes.object.isRequired,
  control: PropTypes.object.isRequired,
  controlKey: PropTypes.string.isRequired,
  onChangeOption: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  controlCount: PropTypes.number.isRequired
};
var _default = exports["default"] = SelectControl;

/***/ }),

/***/ "../modules/display-conditions/assets/js/editor/components/controls/text-field-control.js":
/*!************************************************************************************************!*\
  !*** ../modules/display-conditions/assets/js/editor/components/controls/text-field-control.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var React = _react;
var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));
var _ui = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
var _utils = __webpack_require__(/*! ../../utils/utils */ "../modules/display-conditions/assets/js/editor/utils/utils.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const TextFieldControl = ({
  condition,
  controlKey,
  control,
  onChangeOption,
  value,
  errorMessage,
  shouldShowError,
  placeholder,
  disabled
}) => {
  const [controlValue, setControlValue] = (0, _react.useState)(value),
    {
      step = 1,
      min = 0,
      variant = null
    } = control;
  const numericProps = 'number' === variant ? {
    type: 'number',
    inputProps: {
      step,
      min
    }
  } : {};
  (0, _react.useEffect)(() => {
    setControlValue(value);
  }, [condition]);
  const handleChangeOption = (newValue, controlVariant) => {
    let integerValue = null;
    if ('number' === controlVariant && (0, _utils.hasDecimalSeparator)(newValue)) {
      integerValue = Math.floor(parseFloat(newValue));
    }
    onChangeOption(integerValue ?? newValue.trim());
    setControlValue(integerValue ?? newValue);
  };
  return /*#__PURE__*/React.createElement(_ui.TextField, (0, _extends2.default)({}, numericProps, {
    sx: {
      flex: 1
    },
    error: shouldShowError,
    helperText: errorMessage,
    value: controlValue,
    id: `text-${controlKey}`,
    variant: "outlined",
    onChange: event => handleChangeOption(event.target.value, variant),
    size: "small",
    color: "secondary",
    placeholder: placeholder,
    disabled: disabled ?? false
  }));
};
TextFieldControl.propTypes = {
  condition: PropTypes.object.isRequired,
  controlKey: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  onChangeOption: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  errorMessage: PropTypes.string.isRequired,
  shouldShowError: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};
var _default = exports["default"] = TextFieldControl;

/***/ }),

/***/ "../modules/display-conditions/assets/js/editor/components/controls/time-picker-control.js":
/*!*************************************************************************************************!*\
  !*** ../modules/display-conditions/assets/js/editor/components/controls/time-picker-control.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var React = _react;
var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));
var _ui = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
var _dayjs = _interopRequireDefault(__webpack_require__(/*! dayjs */ "../node_modules/dayjs/dayjs.min.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const timeFormat = 'HH:mm',
  dateFormat = 'MM-DD-YYYY ' + timeFormat;
const formattedValue = dateString => {
  return (0, _dayjs.default)(dateString, timeFormat, true).isValid() ? (0, _dayjs.default)(dateString, timeFormat) : null;
};
const TimePickerControl = ({
  condition,
  controlKey,
  onChangeOption,
  value,
  shouldShowError,
  errorMessage
}) => {
  const lastInputValue = (0, _react.useRef)(formattedValue(value)),
    [controlValue, setControlValue] = (0, _react.useState)(lastInputValue.current);
  (0, _react.useEffect)(() => {
    setControlValue(lastInputValue.current);
  }, [condition]);
  const handleChangeOption = newValue => {
    const dateString = (0, _dayjs.default)(newValue, dateFormat, true).isValid() ? newValue.format(dateFormat) : '';
    onChangeOption(dateString);
    lastInputValue.current = newValue;
    setControlValue(newValue);
  };
  return /*#__PURE__*/React.createElement(_ui.TimePicker, {
    sx: {
      flex: 1
    },
    id: `select-${controlKey}`,
    value: controlValue,
    slotProps: {
      textField: {
        size: 'small',
        error: shouldShowError,
        helperText: errorMessage
      }
    },
    onChange: newValue => handleChangeOption(newValue)
  });
};
TimePickerControl.propTypes = {
  condition: PropTypes.object.isRequired,
  control: PropTypes.object.isRequired,
  controlKey: PropTypes.string.isRequired,
  onChangeOption: PropTypes.func.isRequired,
  value: PropTypes.string,
  errorMessage: PropTypes.string.isRequired,
  shouldShowError: PropTypes.bool.isRequired
};
var _default = exports["default"] = TimePickerControl;

/***/ }),

/***/ "../modules/display-conditions/assets/js/editor/components/controls/ui/condition-select-control.js":
/*!*********************************************************************************************************!*\
  !*** ../modules/display-conditions/assets/js/editor/components/controls/ui/condition-select-control.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js"));
var _ui = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
var _utils = __webpack_require__(/*! ../../../utils/utils */ "../modules/display-conditions/assets/js/editor/utils/utils.js");
var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ConditionSelect = ({
  controlCount,
  ...props
}) => /*#__PURE__*/_react.default.createElement(_ui.Select, (0, _extends2.default)({}, props, {
  size: "small",
  sx: {
    flex: 1,
    textAlign: 'start',
    alignSelf: 'flex-start',
    '.MuiSelect-select .MuiTypography-root': {
      maxWidth: (0, _utils.getControlValueMaxWidth)(controlCount)
    }
  },
  color: "secondary",
  MenuProps: {
    PaperProps: {
      sx: {
        maxHeight: 280,
        '& .MuiListSubheader-root': {
          position: 'initial'
        }
      }
    },
    classes: {
      paper: 'e-conditions-select-menu'
    }
  }
}));
ConditionSelect.propTypes = {
  controlCount: PropTypes.number.isRequired
};
var _default = exports["default"] = ConditionSelect;

/***/ }),

/***/ "../modules/display-conditions/assets/js/editor/components/controls/ui/condition-select-option.js":
/*!********************************************************************************************************!*\
  !*** ../modules/display-conditions/assets/js/editor/components/controls/ui/condition-select-option.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js"));
var _ui = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
var _utils = __webpack_require__(/*! ../../../utils/utils */ "../modules/display-conditions/assets/js/editor/utils/utils.js");
var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ConditionSelectOption = ({
  controlCount,
  sx = {},
  ...props
}) => /*#__PURE__*/_react.default.createElement(_ui.Typography, (0, _extends2.default)({
  variant: "inherit",
  noWrap: true
}, props, {
  sx: {
    maxWidth: (0, _utils.getSelectOptionMaxWidth)(controlCount),
    ...sx
  }
}));
ConditionSelectOption.propTypes = {
  sx: PropTypes.object,
  isDropdownItem: PropTypes.bool,
  controlCount: PropTypes.number.isRequired
};
var _default = exports["default"] = ConditionSelectOption;

/***/ }),

/***/ "../modules/display-conditions/assets/js/editor/components/footer.js":
/*!***************************************************************************!*\
  !*** ../modules/display-conditions/assets/js/editor/components/footer.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _ui = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Footer = ({
  onClickSaveButton,
  isButtonDisabled
}) => {
  return /*#__PURE__*/React.createElement(_ui.Stack, {
    direction: "row",
    justifyContent: "flex-end",
    sx: {
      py: 1,
      px: 3
    }
  }, /*#__PURE__*/React.createElement(_ui.Button, {
    variant: "contained",
    className: "save-and-close-button",
    disabled: !isButtonDisabled,
    onClick: onClickSaveButton
  }, __('Save & Close', 'elementor-pro')));
};
Footer.propTypes = {
  onClickSaveButton: PropTypes.func,
  isButtonDisabled: PropTypes.bool.isRequired
};
var _default = exports["default"] = Footer;

/***/ }),

/***/ "../modules/display-conditions/assets/js/editor/components/header.js":
/*!***************************************************************************!*\
  !*** ../modules/display-conditions/assets/js/editor/components/header.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));
var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
var _ui = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
var _elementorLogo = _interopRequireDefault(__webpack_require__(/*! ./icons/elementor-logo */ "../modules/display-conditions/assets/js/editor/components/icons/elementor-logo.js"));
var _icons = __webpack_require__(/*! @elementor/icons */ "@elementor/icons");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Header = ({
  onClose
}) => {
  return /*#__PURE__*/_react.default.createElement(_ui.AppBar, {
    sx: {
      fontWeight: 'normal'
    },
    color: "transparent",
    position: "relative"
  }, /*#__PURE__*/_react.default.createElement(_ui.Toolbar, {
    variant: "dense"
  }, /*#__PURE__*/_react.default.createElement(_elementorLogo.default, {
    sx: {
      mr: 1
    }
  }), /*#__PURE__*/_react.default.createElement(_ui.Typography, {
    component: "span",
    variant: "subtitle2",
    sx: {
      fontWeight: 'bold',
      textTransform: 'uppercase'
    }
  }, (0, _i18n.__)('Display Conditions', 'elementor-pro')), /*#__PURE__*/_react.default.createElement(_ui.Stack, {
    direction: "row",
    spacing: 1,
    alignItems: "center",
    sx: {
      ml: 'auto'
    }
  }, /*#__PURE__*/_react.default.createElement(_ui.IconButton, {
    size: "small",
    "aria-label": (0, _i18n.__)('Close', 'elementor-pro'),
    onClick: onClose,
    sx: {
      '&.MuiButtonBase-root': {
        mr: -1
      }
    }
  }, /*#__PURE__*/_react.default.createElement(_icons.XIcon, null)))));
};
Header.propTypes = {
  onClose: PropTypes.func.isRequired
};
var _default = exports["default"] = Header;

/***/ }),

/***/ "../modules/display-conditions/assets/js/editor/components/icons/elementor-logo.js":
/*!*****************************************************************************************!*\
  !*** ../modules/display-conditions/assets/js/editor/components/icons/elementor-logo.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js"));
var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _ui = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ElementorLogo = props => {
  return /*#__PURE__*/React.createElement(_ui.SvgIcon, (0, _extends2.default)({
    viewBox: "0 0 32 32"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.69648 24.8891C0.938383 22.2579 0 19.1645 0 16C0 11.7566 1.68571 7.68687 4.68629 4.68629C7.68687 1.68571 11.7566 0 16 0C19.1645 0 22.2579 0.938383 24.8891 2.69648C27.5203 4.45459 29.5711 6.95344 30.7821 9.87706C31.9931 12.8007 32.3099 16.0177 31.6926 19.1214C31.0752 22.2251 29.5514 25.0761 27.3137 27.3137C25.0761 29.5514 22.2251 31.0752 19.1214 31.6926C16.0177 32.3099 12.8007 31.9931 9.87706 30.7821C6.95344 29.5711 4.45459 27.5203 2.69648 24.8891ZM12.0006 9.33281H9.33437V22.6665H12.0006V9.33281ZM22.6657 9.33281H14.6669V11.9991H22.6657V9.33281ZM22.6657 14.6654H14.6669V17.3316H22.6657V14.6654ZM22.6657 20.0003H14.6669V22.6665H22.6657V20.0003Z"
  }));
};
var _default = exports["default"] = ElementorLogo;

/***/ }),

/***/ "../modules/display-conditions/assets/js/editor/components/icons/hierarchy-icon.js":
/*!*****************************************************************************************!*\
  !*** ../modules/display-conditions/assets/js/editor/components/icons/hierarchy-icon.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js"));
var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _ui = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const UnstyledHierarchyIcon = React.forwardRef((props, ref) => {
  return /*#__PURE__*/React.createElement(_ui.SvgIcon, (0, _extends2.default)({
    viewBox: "0 0 24 24"
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11 3.75C10.3096 3.75 9.75 4.30964 9.75 5V7C9.75 7.69036 10.3096 8.25 11 8.25H13C13.6904 8.25 14.25 7.69036 14.25 7V5C14.25 4.30964 13.6904 3.75 13 3.75H11ZM12.75 9.75H13C14.5188 9.75 15.75 8.51878 15.75 7V5C15.75 3.48122 14.5188 2.25 13 2.25H11C9.48122 2.25 8.25 3.48122 8.25 5V7C8.25 8.51878 9.48122 9.75 11 9.75H11.25V11.25H8C7.27065 11.25 6.57118 11.5397 6.05546 12.0555C5.53973 12.5712 5.25 13.2707 5.25 14V14.25H5C3.48122 14.25 2.25 15.4812 2.25 17V19C2.25 20.5188 3.48122 21.75 5 21.75H7C8.51878 21.75 9.75 20.5188 9.75 19V17C9.75 15.4812 8.51878 14.25 7 14.25H6.75V14C6.75 13.6685 6.8817 13.3505 7.11612 13.1161C7.35054 12.8817 7.66848 12.75 8 12.75H16C16.3315 12.75 16.6495 12.8817 16.8839 13.1161C17.1183 13.3505 17.25 13.6685 17.25 14V14.25H17C15.4812 14.25 14.25 15.4812 14.25 17V19C14.25 20.5188 15.4812 21.75 17 21.75H19C20.5188 21.75 21.75 20.5188 21.75 19V17C21.75 15.4812 20.5188 14.25 19 14.25H18.75V14C18.75 13.2707 18.4603 12.5712 17.9445 12.0555C17.4288 11.5397 16.7293 11.25 16 11.25H12.75V9.75ZM17 15.75C16.3096 15.75 15.75 16.3096 15.75 17V19C15.75 19.6904 16.3096 20.25 17 20.25H19C19.6904 20.25 20.25 19.6904 20.25 19V17C20.25 16.3096 19.6904 15.75 19 15.75H17ZM5 15.75C4.30964 15.75 3.75 16.3096 3.75 17V19C3.75 19.6904 4.30964 20.25 5 20.25H7C7.69036 20.25 8.25 19.6904 8.25 19V17C8.25 16.3096 7.69036 15.75 7 15.75H5Z"
  }));
});
const HierarchyIcon = (0, _ui.styled)(UnstyledHierarchyIcon)(({
  theme
}) => ({
  '& path': {
    fill: theme.palette.text.primary
  }
}));
var _default = exports["default"] = HierarchyIcon;

/***/ }),

/***/ "../modules/display-conditions/assets/js/editor/components/or-row-group.js":
/*!*********************************************************************************!*\
  !*** ../modules/display-conditions/assets/js/editor/components/or-row-group.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _ui = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
var _icons = __webpack_require__(/*! @elementor/icons */ "@elementor/icons");
var _conditionsSelectors = _interopRequireDefault(__webpack_require__(/*! ./conditions-selectors */ "../modules/display-conditions/assets/js/editor/components/conditions-selectors.js"));
var _useConditions = _interopRequireDefault(__webpack_require__(/*! ../hooks/use-conditions */ "../modules/display-conditions/assets/js/editor/hooks/use-conditions.js"));
var _utils = __webpack_require__(/*! ../utils/utils */ "../modules/display-conditions/assets/js/editor/utils/utils.js");
var _conditionsOrDivider = _interopRequireDefault(__webpack_require__(/*! ./ui/conditions-or-divider */ "../modules/display-conditions/assets/js/editor/components/ui/conditions-or-divider.js"));
var _constants = __webpack_require__(/*! ../utils/constants */ "../modules/display-conditions/assets/js/editor/utils/constants.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const OrRowGroup = ({
  showConditions,
  setShowConditions
}) => {
  const {
      selectedConditions,
      conditionsConfig,
      dispatch
    } = (0, _useConditions.default)(),
    {
      conditions: availableConditions,
      conditionsByGroup
    } = conditionsConfig,
    addButtonText = selectedConditions.length ? __('Add condition group', 'elementor-pro') : __('Add Condition', 'elementor-pro');
  const addOrCondition = () => {
    const conditionKey = (0, _utils.getDefaultActiveCondition)(conditionsByGroup),
      defaultValues = (0, _utils.getConditionInitialState)(availableConditions, conditionKey),
      andCondition = {
        condition: conditionKey,
        ...defaultValues
      };
    dispatch({
      type: _constants.ACTION_TYPES.ADD_OR_CONDITION,
      andCondition
    });
    setShowConditions(true);
  };
  return /*#__PURE__*/_react.default.createElement(_ui.Box, null, showConditions && selectedConditions.map((orCondition, orConditionIndex) => /*#__PURE__*/_react.default.createElement(_react.Fragment, {
    key: orConditionIndex
  }, orConditionIndex > 0 && /*#__PURE__*/_react.default.createElement(_conditionsOrDivider.default, null), /*#__PURE__*/_react.default.createElement(_conditionsSelectors.default, {
    orConditionIndex: orConditionIndex
  }))), /*#__PURE__*/_react.default.createElement(_ui.Button, {
    variant: "contained",
    className: "add-or-condition-button",
    color: "secondary",
    startIcon: /*#__PURE__*/_react.default.createElement(_icons.PlusIcon, null),
    sx: {
      mt: 1,
      mb: 5
    },
    onClick: () => addOrCondition()
  }, addButtonText));
};
OrRowGroup.propTypes = {
  showConditions: PropTypes.bool.isRequired,
  setShowConditions: PropTypes.func.isRequired
};
var _default = exports["default"] = OrRowGroup;

/***/ }),

/***/ "../modules/display-conditions/assets/js/editor/components/ui/conditions-or-divider.js":
/*!*********************************************************************************************!*\
  !*** ../modules/display-conditions/assets/js/editor/components/ui/conditions-or-divider.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _ui = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
const OrDivider = () => {
  return /*#__PURE__*/_react.default.createElement(_ui.Divider, {
    sx: {
      px: 3
    }
  }, __('OR', 'elementor-pro'));
};
var _default = exports["default"] = OrDivider;

/***/ }),

/***/ "../modules/display-conditions/assets/js/editor/components/ui/row-controls.js":
/*!************************************************************************************!*\
  !*** ../modules/display-conditions/assets/js/editor/components/ui/row-controls.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _ui = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
var _icons = __webpack_require__(/*! @elementor/icons */ "@elementor/icons");
var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _utils = __webpack_require__(/*! ../../utils/utils */ "../modules/display-conditions/assets/js/editor/utils/utils.js");
var _useConditions = _interopRequireDefault(__webpack_require__(/*! ../../hooks/use-conditions */ "../modules/display-conditions/assets/js/editor/hooks/use-conditions.js"));
var _constants = __webpack_require__(/*! ../../utils/constants */ "../modules/display-conditions/assets/js/editor/utils/constants.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const RowControls = ({
  orConditionIndex,
  andConditionIndex
}) => {
  const {
      conditionsConfig,
      dispatch
    } = (0, _useConditions.default)(),
    {
      conditions: availableConditions,
      conditionsByGroup
    } = conditionsConfig;
  const addRepeaterRow = () => {
    const conditionKey = (0, _utils.getDefaultActiveCondition)(conditionsByGroup),
      defaultValues = (0, _utils.getConditionInitialState)(availableConditions, conditionKey),
      andCondition = {
        condition: conditionKey,
        ...defaultValues
      };
    dispatch({
      type: _constants.ACTION_TYPES.ADD_AND_CONDITION,
      andCondition,
      andConditionIndex,
      orConditionIndex
    });
  };
  const removeRepeaterRow = () => {
    dispatch({
      type: _constants.ACTION_TYPES.REMOVE_AND_CONDITION,
      andConditionIndex,
      orConditionIndex
    });
  };
  return /*#__PURE__*/React.createElement(_ui.Stack, {
    direction: "row",
    alignItems: "center",
    sx: {
      left: '100%',
      gap: .5,
      ml: -1,
      mt: '2.5px',
      position: 'absolute'
    }
  }, /*#__PURE__*/React.createElement(_ui.Button, {
    color: "secondary",
    variant: "outlined",
    sx: {
      px: 1,
      minWidth: 'unset'
    },
    className: "add-single-condition-button",
    onClick: addRepeaterRow
  }, (0, _i18n.__)('AND', 'elementor-pro')), /*#__PURE__*/React.createElement(_ui.IconButton, {
    color: "secondary",
    "aria-label": (0, _i18n.__)('Delete', 'elementor-pro'),
    className: "remove-single-condition-button",
    onClick: removeRepeaterRow
  }, /*#__PURE__*/React.createElement(_icons.XIcon, {
    fontSize: "small"
  })));
};
RowControls.propTypes = {
  andConditionIndex: PropTypes.number.isRequired,
  orConditionIndex: PropTypes.number.isRequired
};
var _default = exports["default"] = RowControls;

/***/ }),

/***/ "../modules/display-conditions/assets/js/editor/contexts/conditions-context.js":
/*!*************************************************************************************!*\
  !*** ../modules/display-conditions/assets/js/editor/contexts/conditions-context.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ConditionsContext = void 0;
const ConditionsContext = exports.ConditionsContext = React.createContext();

/***/ }),

/***/ "../modules/display-conditions/assets/js/editor/hooks/use-conditions.js":
/*!******************************************************************************!*\
  !*** ../modules/display-conditions/assets/js/editor/hooks/use-conditions.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = __webpack_require__(/*! react */ "react");
var _conditionsContext = __webpack_require__(/*! ../contexts/conditions-context */ "../modules/display-conditions/assets/js/editor/contexts/conditions-context.js");
function useConditions() {
  return (0, _react.useContext)(_conditionsContext.ConditionsContext);
}
var _default = exports["default"] = useConditions;

/***/ }),

/***/ "../modules/display-conditions/assets/js/editor/module.js":
/*!****************************************************************!*\
  !*** ../modules/display-conditions/assets/js/editor/module.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
__webpack_require__(/*! core-js/modules/es.array.push.js */ "../node_modules/core-js/modules/es.array.push.js");
var _behavior = _interopRequireDefault(__webpack_require__(/*! ./behavior */ "../modules/display-conditions/assets/js/editor/behavior.js"));
class Module extends elementorModules.editor.utils.Module {
  onElementorInit() {
    elementor.hooks.addFilter('controls/base/behaviors', this.registerControlBehavior);
    elementor.channels.editor.on('section:activated', this.highlightIconIfFilled);
  }
  registerControlBehavior = (behaviors, view) => {
    if ('e_display_conditions_trigger' !== view.options.model.get('name')) {
      return behaviors;
    }
    if (!behaviors) {
      behaviors = {};
    }
    const conditionsByGroup = this._getGroupedConditionKeys(elementor.config.displayConditions || {});
    const flattenedConditionOptions = this._getFlattenedConditionOptions(conditionsByGroup);
    behaviors.displayConditions = {
      behaviorClass: _behavior.default,
      getControlValue: () => {
        const controlView = this.getEditorControlView('e_display_conditions');
        if (!controlView) {
          return [];
        }
        return this._getStructuredConditions(JSON.parse(controlView.getControlValue() || '[]'));
      },
      setControlValue: value => {
        const displayConditionsInput = this.getEditorControlView('e_display_conditions'),
          displayConditionsTemplate = this.getEditorControlView('e_display_conditions_trigger');
        if (displayConditionsInput) {
          displayConditionsInput.setValue(value);
          displayConditionsInput.applySavedValue();
        }
        if (displayConditionsTemplate.$el) {
          const icon = displayConditionsTemplate.$el.find('.eicon-flow.e-control-display-conditions');
          this.highlightIcon(icon, displayConditionsInput);
        }
      },
      fetchData: async (value, control) => {
        const response = await this.doAjaxRequest('pro_panel_posts_control_filter_autocomplete', {
          autocomplete: control.autocomplete,
          q: value
        });
        return response?.results ?? [];
      },
      setCacheNoticeStatus: async () => {
        const response = await this.doAjaxRequest('display_conditions_set_cache_notice_status');
        if (response) {
          elementor.config.displayConditions.show_cache_notice = false;
        }
        return response;
      },
      conditionsConfig: {
        ...elementor.config.displayConditions,
        conditionsByGroup,
        flattenedConditionOptions
      }
    };
    return behaviors;
  };
  highlightIconIfFilled = (sectionName, editor) => {
    const advancedSections = ['section_advanced',
    // Sections / Columns
    '_section_style',
    // Widgets
    'section_layout' // Containers
    ];

    if (!advancedSections.includes(sectionName)) {
      return;
    }
    const controlView = this.getEditorControlView('e_display_conditions');
    if (!controlView) {
      return;
    }
    const icon = editor.$childViewContainer.find('.eicon-flow.e-control-display-conditions');
    this.highlightIcon(icon, controlView);
  };
  highlightIcon = (icon, controlView) => {
    if (!icon[0]) {
      return;
    }
    const conditionValue = controlView.getControlValue() || '[]',
      conditionArray = '[]' !== conditionValue ? this._getStructuredConditions(JSON.parse(conditionValue)) : [];
    if (!conditionArray.length) {
      icon[0]?.classList?.remove('filled');
    } else {
      icon[0]?.classList?.add('filled');
    }
  };
  doAjaxRequest = (action, data) => {
    try {
      return new Promise((resolve, reject) => {
        elementorCommon.ajax.addRequest(action, {
          data,
          error: () => reject(),
          success: res => {
            resolve(res);
          }
        });
      });
    } catch (error) {
      return false;
    }
  };
  _getStructuredConditions = conditions => {
    return this._shouldConvertConditionsStructure(conditions) ? [conditions] : conditions;
  };
  _shouldConvertConditionsStructure = conditions => {
    return conditions.length && !Array.isArray(conditions[0]);
  };
  _getGroupedConditionKeys = conditionsConfig => {
    return Object.keys(conditionsConfig?.groups || {}).reduce((group, groupName) => {
      const conditions = this._getConditionKeyByGroup(conditionsConfig.conditions, groupName);
      if (conditions.length) {
        group[groupName] = conditions;
      }
      return group;
    }, {});
  };
  _getConditionKeyByGroup = (conditions, groupName) => {
    return Object.keys(conditions).filter(conditionKey => groupName === conditions[conditionKey].group);
  };
  _getFlattenedConditionOptions = conditionsByGroup => {
    const {
      conditions = {},
      groups = {}
    } = elementor.config.displayConditions || {};
    return Object.entries(conditionsByGroup).reduce((optionList, [groupName, conditionKeys]) => {
      const relevantConditions = conditionKeys.map(key => ({
        key,
        label: conditions[key].label,
        isGroup: false
      }));
      optionList.push({
        key: groupName,
        label: groups[groupName].label,
        isGroup: true
      }, ...relevantConditions);
      return optionList;
    }, []);
  };
}
exports["default"] = Module;

/***/ }),

/***/ "../modules/display-conditions/assets/js/editor/reducers/conditions-reducer.js":
/*!*************************************************************************************!*\
  !*** ../modules/display-conditions/assets/js/editor/reducers/conditions-reducer.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.conditionsReducer = void 0;
__webpack_require__(/*! core-js/modules/es.array.push.js */ "../node_modules/core-js/modules/es.array.push.js");
var _constants = __webpack_require__(/*! ../utils/constants */ "../modules/display-conditions/assets/js/editor/utils/constants.js");
const conditionsReducer = (state, action) => {
  switch (action.type) {
    case _constants.ACTION_TYPES.CHANGE_CONDITION_TYPE:
      return {
        ...state,
        selectedConditions: _changeConditionType({
          ...state,
          ...action
        })
      };
    case _constants.ACTION_TYPES.CHANGE_CONTROL_VALUE:
      return {
        ...state,
        selectedConditions: _changeControlValue({
          ...state,
          ...action
        })
      };
    case _constants.ACTION_TYPES.ADD_AND_CONDITION:
      return {
        ...state,
        selectedConditions: _addAndCondition({
          ...state,
          ...action
        })
      };
    case _constants.ACTION_TYPES.ADD_OR_CONDITION:
      return {
        ...state,
        selectedConditions: [...state.selectedConditions, [action.andCondition]]
      };
    case _constants.ACTION_TYPES.REMOVE_AND_CONDITION:
      return {
        ...state,
        selectedConditions: _removeAndCondition({
          ...state,
          ...action
        })
      };
    case _constants.ACTION_TYPES.REMOVE_OR_CONDITION:
      return {
        ...state,
        selectedConditions: state.selectedConditions.filter((_, index) => index !== action.orConditionIndex)
      };
    case _constants.ACTION_TYPES.SET_ERRORS:
      return {
        ...state,
        selectedConditions: _setErrors({
          ...state,
          ...action
        })
      };
    default:
      return state;
  }
};
exports.conditionsReducer = conditionsReducer;
const _changeConditionType = ({
  selectedConditions,
  conditionToChange,
  orConditionIndex,
  andConditionIndex
}) => {
  const newOrCondition = selectedConditions[orConditionIndex].map((andCondition, index) => index === andConditionIndex ? conditionToChange : {
    ...andCondition
  });
  return selectedConditions.map((orCondition, index) => index === orConditionIndex ? newOrCondition : [...orCondition]);
};
const _changeControlValue = ({
  selectedConditions,
  orConditionIndex,
  andConditionIndex,
  controlKey,
  value
}) => {
  const existingOrCondition = [...selectedConditions[orConditionIndex]],
    existingAndCondition = {
      ...existingOrCondition[andConditionIndex]
    };
  const newAndCondition = {
      ...existingAndCondition,
      [controlKey]: value
    },
    newOrCondition = existingOrCondition.map((andCondition, index) => index === andConditionIndex ? newAndCondition : {
      ...andCondition
    });
  return selectedConditions.map((orCondition, index) => index === orConditionIndex ? newOrCondition : [...orCondition]);
};
const _addAndCondition = ({
  selectedConditions,
  orConditionIndex,
  andConditionIndex,
  andCondition
}) => {
  const existingOrCondition = selectedConditions[orConditionIndex],
    newOrCondition = existingOrCondition.reduce((newAndConditions, condition, index) => {
      newAndConditions.push({
        ...condition
      });
      if (index === andConditionIndex || existingOrCondition.length === andConditionIndex && existingOrCondition.length - 1 === index) {
        newAndConditions.push(andCondition);
      }
      return newAndConditions;
    }, []);
  return selectedConditions.map((orCondition, index) => index === orConditionIndex ? newOrCondition : [...orCondition]);
};
const _removeAndCondition = ({
  selectedConditions,
  orConditionIndex,
  andConditionIndex
}) => {
  const newOrCondition = selectedConditions[orConditionIndex].reduce((newAndConditions, condition, index) => {
    if (index !== andConditionIndex) {
      newAndConditions.push({
        ...condition
      });
    }
    return newAndConditions;
  }, []);
  return selectedConditions.reduce((newOrConditions, orCondition, index) => {
    if (index === orConditionIndex && newOrCondition.length) {
      newOrConditions.push(newOrCondition);
    }
    if (index !== orConditionIndex) {
      newOrConditions.push([...orCondition]);
    }
    return newOrConditions;
  }, []);
};
const _setErrors = ({
  selectedConditions,
  orConditionIndex,
  andConditionIndex,
  errors
}) => {
  const newOrCondition = [...selectedConditions[orConditionIndex]],
    newAndCondition = {
      ...newOrCondition[andConditionIndex]
    };
  newAndCondition.errors = {
    ...newAndCondition.errors,
    ...errors
  };
  newOrCondition[andConditionIndex] = newAndCondition;
  return selectedConditions.map((orCondition, index) => index === orConditionIndex ? [...newOrCondition] : [...orCondition]);
};

/***/ }),

/***/ "../modules/display-conditions/assets/js/editor/utils/constants.js":
/*!*************************************************************************!*\
  !*** ../modules/display-conditions/assets/js/editor/utils/constants.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DISABLED_CONTROL_CONFIG = exports.DEFAULT_CONTROL_VALUES = exports.CONTROL_TYPES = exports.ACTION_TYPES = void 0;
// These values will match the Controls_Manager
const CONTROL_TYPES = exports.CONTROL_TYPES = {
  MULTIPLE_SELECT: 'select2',
  SELECT: 'select',
  QUERY: 'query',
  DATE_TIME: 'date_time',
  TEXT_FIELD: 'text'
};
const DEFAULT_CONTROL_VALUES = exports.DEFAULT_CONTROL_VALUES = {
  select2: [],
  query: [],
  select: '',
  text: '',
  date_time: null
};
const ACTION_TYPES = exports.ACTION_TYPES = {
  CHANGE_CONTROL_VALUE: 'CHANGE_CONTROL_VALUE',
  SET_ERRORS: 'SET_ERRORS',
  ADD_OR_CONDITION: 'ADD_OR_CONDITION',
  CHANGE_CONDITION_TYPE: 'CHANGE_CONDITION_TYPE',
  ADD_AND_CONDITION: 'ADD_AND_CONDITION',
  REMOVE_AND_CONDITION: 'REMOVE_AND_CONDITION',
  REMOVE_OR_CONDITION: 'REMOVE_OR_CONDITION'
};
const DISABLED_CONTROL_CONFIG = exports.DISABLED_CONTROL_CONFIG = {
  CONDITION_NAME: 'dynamic_tags',
  CONTROL_NAME: 'dynamic_tag_value',
  COMPARATORS: ['is_empty', 'is_not_empty']
};

/***/ }),

/***/ "../modules/display-conditions/assets/js/editor/utils/utils.js":
/*!*********************************************************************!*\
  !*** ../modules/display-conditions/assets/js/editor/utils/utils.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getControlDefaults = exports.getConditionInitialState = void 0;
exports.getControlValue = getControlValue;
exports.getControlValueMaxWidth = getControlValueMaxWidth;
exports.getDefaultActiveCondition = getDefaultActiveCondition;
exports.getInvalidInputFeedback = getInvalidInputFeedback;
exports.getSelectOptionMaxWidth = getSelectOptionMaxWidth;
exports.hasDecimalSeparator = hasDecimalSeparator;
exports.shouldCastToArray = shouldCastToArray;
exports.shouldDisableControl = shouldDisableControl;
exports.shouldEmptyValuePassValidation = shouldEmptyValuePassValidation;
var _constants = __webpack_require__(/*! ./constants */ "../modules/display-conditions/assets/js/editor/utils/constants.js");
function shouldCastToArray(controlType) {
  return _constants.CONTROL_TYPES.MULTIPLE_SELECT === controlType || _constants.CONTROL_TYPES.QUERY === controlType;
}
function getDefaultActiveCondition(conditionsByGroup) {
  return Object.values(conditionsByGroup)[0][0];
}
function getInvalidInputFeedback(type, variant, value, shouldShow = false) {
  return !value?.length ? {
    message: _getErrorMessage(type, variant),
    shouldShow
  } : {};
}
const getControlDefaults = (controlKey, control) => {
  const {
      type,
      variant = null,
      options
    } = control,
    defaultValue = control?.default || (options && _constants.CONTROL_TYPES.MULTIPLE_SELECT !== type ? Object.keys(options)[0] : _constants.DEFAULT_CONTROL_VALUES[type]),
    formattedDefaultValue = shouldCastToArray(type) && !Array.isArray(defaultValue) ? [defaultValue] : defaultValue,
    error = getInvalidInputFeedback(type, variant, formattedDefaultValue);
  return {
    defaultValue: formattedDefaultValue,
    error
  };
};
exports.getControlDefaults = getControlDefaults;
const getConditionInitialState = (conditions, conditionKey) => {
  const {
    controls = {}
  } = conditions?.[conditionKey] || {};
  return Object.keys(controls).reduce((defaults, controlKey) => {
    if ('__settings' === controlKey) {
      return defaults;
    }
    const {
      defaultValue,
      error
    } = getControlDefaults(controlKey, controls[controlKey]);
    defaults[controlKey] = defaultValue;
    defaults.errors[controlKey] = error;
    return defaults;
  }, {
    errors: {}
  });
};
exports.getConditionInitialState = getConditionInitialState;
function hasDecimalSeparator(newValue) {
  if (isNaN(parseFloat(newValue))) {
    return false;
  }
  if (newValue.toString().indexOf('.') !== -1) {
    return true;
  }
  if (newValue.toString().indexOf(',') !== -1) {
    return true;
  }
}
function getSelectOptionMaxWidth(controlCount) {
  return 3 === controlCount ? 200 : 150;
}
function getControlValueMaxWidth(controlCount) {
  return 3 === controlCount ? 190 : 135;
}
function getControlValue(value, altValue) {
  return 'undefined' !== typeof value ? value : altValue;
}
function _getErrorMessage(controlType, variant = null) {
  if (shouldCastToArray(controlType)) {
    return __('Select an option', 'elementor-pro');
  }
  if (_constants.CONTROL_TYPES.DATE_TIME === controlType) {
    return 'time' === variant ? __('Select a time', 'elementor-pro') : __('Select a date', 'elementor-pro');
  }
  return __('Enter a value', 'elementor-pro');
}
function shouldDisableControl(control, comparator) {
  return _constants.DISABLED_CONTROL_CONFIG.CONTROL_NAME === control && _constants.DISABLED_CONTROL_CONFIG.COMPARATORS.includes(comparator);
}
function shouldEmptyValuePassValidation(condition, comparator) {
  return _constants.DISABLED_CONTROL_CONFIG.CONDITION_NAME === condition && _constants.DISABLED_CONTROL_CONFIG.COMPARATORS.includes(comparator);
}

/***/ }),

/***/ "../node_modules/dayjs/dayjs.min.js":
/*!******************************************!*\
  !*** ../node_modules/dayjs/dayjs.min.js ***!
  \******************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p="$isDayjsObject",S=function(t){return t instanceof _||!(!t||!t[p])},w=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},O=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},b=v;b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return b},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=b.p(t),f="set"+(this.$u?"UTC":""),l=(n={},n[a]=f+"Date",n[d]=f+"Date",n[c]=f+"Month",n[h]=f+"FullYear",n[u]=f+"Hours",n[s]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,"0")},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return b.s(e.$y,4,"0");case"M":return a+1;case"MM":return b.s(a+1,2,"0");case"MMM":return h(n.monthsShort,a,c,3);case"MMMM":return h(c,a);case"D":return e.$D;case"DD":return b.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,o,2);case"ddd":return h(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return b.s(s,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(s,u,!0);case"A":return $(s,u,!1);case"m":return String(u);case"mm":return b.s(u,2,"0");case"s":return String(e.$s);case"ss":return b.s(e.$s,2,"0");case"SSS":return b.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return b.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g}return l?$:b.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),k=_.prototype;return O.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=!0),O},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=D[g],O.Ls=D,O.p={},O}));

/***/ }),

/***/ "../node_modules/object-assign/index.js":
/*!**********************************************!*\
  !*** ../node_modules/object-assign/index.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "../node_modules/prop-types/checkPropTypes.js":
/*!****************************************************!*\
  !*** ../node_modules/prop-types/checkPropTypes.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "../node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "../node_modules/prop-types/factoryWithTypeCheckers.js":
/*!*************************************************************!*\
  !*** ../node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "../node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "../node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "../node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "../node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "../node_modules/prop-types/index.js":
/*!*******************************************!*\
  !*** ../node_modules/prop-types/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "../node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "../node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "../node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!**************************************************************!*\
  !*** ../node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "../node_modules/prop-types/lib/has.js":
/*!*********************************************!*\
  !*** ../node_modules/prop-types/lib/has.js ***!
  \*********************************************/
/***/ ((module) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "../node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!************************************************************************************!*\
  !*** ../node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "../node_modules/prop-types/node_modules/react-is/index.js":
/*!*****************************************************************!*\
  !*** ../node_modules/prop-types/node_modules/react-is/index.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = React;

/***/ }),

/***/ "@elementor/icons":
/*!************************************!*\
  !*** external "elementorV2.icons" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = elementorV2.icons;

/***/ }),

/***/ "@elementor/ui":
/*!*********************************!*\
  !*** external "elementorV2.ui" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = elementorV2.ui;

/***/ }),

/***/ "@wordpress/i18n":
/*!**************************!*\
  !*** external "wp.i18n" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = wp.i18n;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/extends.js":
/*!*********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/extends.js ***!
  \*********************************************************/
/***/ ((module) => {

function _extends() {
  module.exports = _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _extends.apply(this, arguments);
}
module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \***********************************************************************/
/***/ ((module) => {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/core-js/internals/a-callable.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/internals/a-callable.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "../node_modules/core-js/internals/try-to-string.js");

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "../node_modules/core-js/internals/an-object.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/an-object.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ "../node_modules/core-js/internals/array-includes.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/array-includes.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/core-js/internals/to-indexed-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "../node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "../node_modules/core-js/internals/length-of-array-like.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "../node_modules/core-js/internals/array-set-length.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/internals/array-set-length.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "../node_modules/core-js/internals/is-array.js");

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
    throw new $TypeError('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};


/***/ }),

/***/ "../node_modules/core-js/internals/classof-raw.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/classof-raw.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "../node_modules/core-js/internals/copy-constructor-properties.js":
/*!************************************************************************!*\
  !*** ../node_modules/core-js/internals/copy-constructor-properties.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../node_modules/core-js/internals/has-own-property.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "../node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ "../node_modules/core-js/internals/create-non-enumerable-property.js":
/*!***************************************************************************!*\
  !*** ../node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "../node_modules/core-js/internals/create-property-descriptor.js":
/*!***********************************************************************!*\
  !*** ../node_modules/core-js/internals/create-property-descriptor.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "../node_modules/core-js/internals/define-built-in.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/internals/define-built-in.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js");
var makeBuiltIn = __webpack_require__(/*! ../internals/make-built-in */ "../node_modules/core-js/internals/make-built-in.js");
var defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ "../node_modules/core-js/internals/define-global-property.js");

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ "../node_modules/core-js/internals/define-global-property.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/internals/define-global-property.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "../node_modules/core-js/internals/descriptors.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/descriptors.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});


/***/ }),

/***/ "../node_modules/core-js/internals/document-all.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/internals/document-all.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";

var documentAll = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var IS_HTMLDDA = typeof documentAll == 'undefined' && documentAll !== undefined;

module.exports = {
  all: documentAll,
  IS_HTMLDDA: IS_HTMLDDA
};


/***/ }),

/***/ "../node_modules/core-js/internals/document-create-element.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js/internals/document-create-element.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "../node_modules/core-js/internals/does-not-exceed-safe-integer.js":
/*!*************************************************************************!*\
  !*** ../node_modules/core-js/internals/does-not-exceed-safe-integer.js ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ "../node_modules/core-js/internals/engine-user-agent.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/engine-user-agent.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";

module.exports = typeof navigator != 'undefined' && String(navigator.userAgent) || '';


/***/ }),

/***/ "../node_modules/core-js/internals/engine-v8-version.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/engine-v8-version.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "../node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ "../node_modules/core-js/internals/enum-bug-keys.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/internals/enum-bug-keys.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "../node_modules/core-js/internals/export.js":
/*!***************************************************!*\
  !*** ../node_modules/core-js/internals/export.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../node_modules/core-js/internals/object-get-own-property-descriptor.js").f);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js/internals/create-non-enumerable-property.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "../node_modules/core-js/internals/define-built-in.js");
var defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ "../node_modules/core-js/internals/define-global-property.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "../node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "../node_modules/core-js/internals/is-forced.js");

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "../node_modules/core-js/internals/fails.js":
/*!**************************************************!*\
  !*** ../node_modules/core-js/internals/fails.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "../node_modules/core-js/internals/function-bind-native.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/internals/function-bind-native.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ "../node_modules/core-js/internals/function-call.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/internals/function-call.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "../node_modules/core-js/internals/function-bind-native.js");

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "../node_modules/core-js/internals/function-name.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/internals/function-name.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../node_modules/core-js/internals/has-own-property.js");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "../node_modules/core-js/internals/function-uncurry-this.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/internals/function-uncurry-this.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "../node_modules/core-js/internals/function-bind-native.js");

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ "../node_modules/core-js/internals/get-built-in.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/internals/get-built-in.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "../node_modules/core-js/internals/get-method.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/internals/get-method.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var aCallable = __webpack_require__(/*! ../internals/a-callable */ "../node_modules/core-js/internals/a-callable.js");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "../node_modules/core-js/internals/is-null-or-undefined.js");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ "../node_modules/core-js/internals/global.js":
/*!***************************************************!*\
  !*** ../node_modules/core-js/internals/global.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || this || Function('return this')();


/***/ }),

/***/ "../node_modules/core-js/internals/has-own-property.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/internals/has-own-property.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../node_modules/core-js/internals/to-object.js");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "../node_modules/core-js/internals/hidden-keys.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/hidden-keys.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";

module.exports = {};


/***/ }),

/***/ "../node_modules/core-js/internals/ie8-dom-define.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/ie8-dom-define.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "../node_modules/core-js/internals/document-create-element.js");

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});


/***/ }),

/***/ "../node_modules/core-js/internals/indexed-object.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/indexed-object.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "../node_modules/core-js/internals/classof-raw.js");

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ "../node_modules/core-js/internals/inspect-source.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/inspect-source.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "../node_modules/core-js/internals/shared-store.js");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "../node_modules/core-js/internals/internal-state.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/internal-state.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/weak-map-basic-detection */ "../node_modules/core-js/internals/weak-map-basic-detection.js");
var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js/internals/create-non-enumerable-property.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../node_modules/core-js/internals/has-own-property.js");
var shared = __webpack_require__(/*! ../internals/shared-store */ "../node_modules/core-js/internals/shared-store.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../node_modules/core-js/internals/hidden-keys.js");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "../node_modules/core-js/internals/is-array.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/internals/is-array.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var classof = __webpack_require__(/*! ../internals/classof-raw */ "../node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) === 'Array';
};


/***/ }),

/***/ "../node_modules/core-js/internals/is-callable.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/is-callable.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $documentAll = __webpack_require__(/*! ../internals/document-all */ "../node_modules/core-js/internals/document-all.js");

var documentAll = $documentAll.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = $documentAll.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ "../node_modules/core-js/internals/is-forced.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/is-forced.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "../node_modules/core-js/internals/is-null-or-undefined.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/internals/is-null-or-undefined.js ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ "../node_modules/core-js/internals/is-object.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/is-object.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");
var $documentAll = __webpack_require__(/*! ../internals/document-all */ "../node_modules/core-js/internals/document-all.js");

var documentAll = $documentAll.all;

module.exports = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "../node_modules/core-js/internals/is-pure.js":
/*!****************************************************!*\
  !*** ../node_modules/core-js/internals/is-pure.js ***!
  \****************************************************/
/***/ ((module) => {

"use strict";

module.exports = false;


/***/ }),

/***/ "../node_modules/core-js/internals/is-symbol.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/is-symbol.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../node_modules/core-js/internals/get-built-in.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "../node_modules/core-js/internals/object-is-prototype-of.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "../node_modules/core-js/internals/use-symbol-as-uid.js");

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ "../node_modules/core-js/internals/length-of-array-like.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/internals/length-of-array-like.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toLength = __webpack_require__(/*! ../internals/to-length */ "../node_modules/core-js/internals/to-length.js");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "../node_modules/core-js/internals/make-built-in.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/internals/make-built-in.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../node_modules/core-js/internals/has-own-property.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ "../node_modules/core-js/internals/function-name.js").CONFIGURABLE);
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "../node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../node_modules/core-js/internals/internal-state.js");

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ "../node_modules/core-js/internals/math-trunc.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/internals/math-trunc.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ "../node_modules/core-js/internals/object-define-property.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/internals/object-define-property.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "../node_modules/core-js/internals/ie8-dom-define.js");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ "../node_modules/core-js/internals/v8-prototype-define-bug.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "../node_modules/core-js/internals/to-property-key.js");

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "../node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var call = __webpack_require__(/*! ../internals/function-call */ "../node_modules/core-js/internals/function-call.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "../node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/core-js/internals/to-indexed-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "../node_modules/core-js/internals/to-property-key.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../node_modules/core-js/internals/has-own-property.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "../node_modules/core-js/internals/ie8-dom-define.js");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ "../node_modules/core-js/internals/object-get-own-property-names.js":
/*!**************************************************************************!*\
  !*** ../node_modules/core-js/internals/object-get-own-property-names.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "../node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "../node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!****************************************************************************!*\
  !*** ../node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "../node_modules/core-js/internals/object-is-prototype-of.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/internals/object-is-prototype-of.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "../node_modules/core-js/internals/object-keys-internal.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/internals/object-keys-internal.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../node_modules/core-js/internals/has-own-property.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/core-js/internals/to-indexed-object.js");
var indexOf = (__webpack_require__(/*! ../internals/array-includes */ "../node_modules/core-js/internals/array-includes.js").indexOf);
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../node_modules/core-js/internals/hidden-keys.js");

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ "../node_modules/core-js/internals/object-property-is-enumerable.js":
/*!**************************************************************************!*\
  !*** ../node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "../node_modules/core-js/internals/ordinary-to-primitive.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/internals/ordinary-to-primitive.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "../node_modules/core-js/internals/function-call.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw new $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "../node_modules/core-js/internals/own-keys.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/internals/own-keys.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../node_modules/core-js/internals/get-built-in.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "../node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "../node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "../node_modules/core-js/internals/require-object-coercible.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/internals/require-object-coercible.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "../node_modules/core-js/internals/is-null-or-undefined.js");

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "../node_modules/core-js/internals/shared-key.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/internals/shared-key.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var shared = __webpack_require__(/*! ../internals/shared */ "../node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "../node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "../node_modules/core-js/internals/shared-store.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/internals/shared-store.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ "../node_modules/core-js/internals/define-global-property.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});

module.exports = store;


/***/ }),

/***/ "../node_modules/core-js/internals/shared.js":
/*!***************************************************!*\
  !*** ../node_modules/core-js/internals/shared.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "../node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.33.2',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.33.2/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ "../node_modules/core-js/internals/symbol-constructor-detection.js":
/*!*************************************************************************!*\
  !*** ../node_modules/core-js/internals/symbol-constructor-detection.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "../node_modules/core-js/internals/engine-v8-version.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");

var $String = global.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "../node_modules/core-js/internals/to-absolute-index.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/to-absolute-index.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "../node_modules/core-js/internals/to-integer-or-infinity.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "../node_modules/core-js/internals/to-indexed-object.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/to-indexed-object.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "../node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "../node_modules/core-js/internals/to-integer-or-infinity.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/internals/to-integer-or-infinity.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var trunc = __webpack_require__(/*! ../internals/math-trunc */ "../node_modules/core-js/internals/math-trunc.js");

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ "../node_modules/core-js/internals/to-length.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/to-length.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "../node_modules/core-js/internals/to-integer-or-infinity.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "../node_modules/core-js/internals/to-object.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/to-object.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../node_modules/core-js/internals/require-object-coercible.js");

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "../node_modules/core-js/internals/to-primitive.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/internals/to-primitive.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "../node_modules/core-js/internals/function-call.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "../node_modules/core-js/internals/is-symbol.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "../node_modules/core-js/internals/get-method.js");
var ordinaryToPrimitive = __webpack_require__(/*! ../internals/ordinary-to-primitive */ "../node_modules/core-js/internals/ordinary-to-primitive.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw new $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "../node_modules/core-js/internals/to-property-key.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/internals/to-property-key.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../node_modules/core-js/internals/to-primitive.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "../node_modules/core-js/internals/is-symbol.js");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "../node_modules/core-js/internals/try-to-string.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/internals/try-to-string.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "../node_modules/core-js/internals/uid.js":
/*!************************************************!*\
  !*** ../node_modules/core-js/internals/uid.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "../node_modules/core-js/internals/use-symbol-as-uid.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ "../node_modules/core-js/internals/symbol-constructor-detection.js");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "../node_modules/core-js/internals/v8-prototype-define-bug.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js/internals/v8-prototype-define-bug.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});


/***/ }),

/***/ "../node_modules/core-js/internals/weak-map-basic-detection.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/internals/weak-map-basic-detection.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ "../node_modules/core-js/internals/well-known-symbol.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/well-known-symbol.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "../node_modules/core-js/internals/shared.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../node_modules/core-js/internals/has-own-property.js");
var uid = __webpack_require__(/*! ../internals/uid */ "../node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ "../node_modules/core-js/internals/symbol-constructor-detection.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "../node_modules/core-js/internals/use-symbol-as-uid.js");

var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "../node_modules/core-js/modules/es.array.push.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/modules/es.array.push.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "../node_modules/core-js/internals/length-of-array-like.js");
var setArrayLength = __webpack_require__(/*! ../internals/array-set-length */ "../node_modules/core-js/internals/array-set-length.js");
var doesNotExceedSafeInteger = __webpack_require__(/*! ../internals/does-not-exceed-safe-integer */ "../node_modules/core-js/internals/does-not-exceed-safe-integer.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");

var INCORRECT_TO_LENGTH = fails(function () {
  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
});

// V8 and Safari <= 15.4, FF < 23 throws InternalError
// https://bugs.chromium.org/p/v8/issues/detail?id=12681
var properErrorOnNonWritableLength = function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
};

var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();

// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength(O, len);
    return len;
  }
});


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************************************************!*\
  !*** ../modules/display-conditions/assets/js/editor/index.js ***!
  \***************************************************************/


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _module = _interopRequireDefault(__webpack_require__(/*! ./module.js */ "../modules/display-conditions/assets/js/editor/module.js"));
new _module.default();
})();

/******/ })()
;
//# sourceMappingURL=display-conditions.js.map
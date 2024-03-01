/*! pro-elements - v3.19.0 - 26-02-2024 */
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
exports["default"] = CacheNotice;
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _ui = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function CacheNotice({
  setCacheNoticeStatus
}) {
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
}
CacheNotice.propTypes = {
  setCacheNoticeStatus: PropTypes.func.isRequired
};

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
var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _dayjs = _interopRequireDefault(__webpack_require__(/*! dayjs */ "../node_modules/dayjs/dayjs.min.js"));
var _ui = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));
var _constants = __webpack_require__(/*! ../constants */ "../modules/display-conditions/assets/js/editor/constants.js");
var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
var _icons = __webpack_require__(/*! @elementor/icons */ "@elementor/icons");
var _queryControl = _interopRequireDefault(__webpack_require__(/*! ./controls/query-control */ "../modules/display-conditions/assets/js/editor/components/controls/query-control.js"));
var _utils = __webpack_require__(/*! ../utils/utils */ "../modules/display-conditions/assets/js/editor/utils/utils.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ConditionsRepeaterRow = ({
  dataIndex,
  conditionsConfig,
  selectedConditions,
  setRowsRefs,
  handleChangeCondition,
  handleChangeOption,
  removeRepeaterRow,
  fetchData
}) => {
  const isNotFirstRow = +dataIndex > 0;
  const {
    conditions,
    groups
  } = conditionsConfig;
  const getValue = (value, controlType) => {
    if ((0, _utils.shouldCastToArray)(controlType)) {
      return Array.isArray(value) ? value : [value];
    }
    return value;
  };
  const selectedConditionKey = selectedConditions[dataIndex]?.condition;
  const conditionControls = (0, _react.useMemo)(() => {
    return selectedConditionKey ? conditions[selectedConditionKey]?.controls : {};
  }, [selectedConditionKey, conditions]);
  const getConditionsByGroup = groupName => {
    return Object.keys(conditions).filter(conditionKey => groupName === conditions[conditionKey].group);
  };
  const getGroupedConditions = () => {
    const groupedConditions = {};
    for (const groupName in groups) {
      const conditionsByGroup = getConditionsByGroup(groupName);
      if (!conditionsByGroup.length) {
        break;
      }
      groupedConditions[groupName] = 'group';
      conditionsByGroup.forEach(condition => {
        groupedConditions[condition] = 'condition';
      });
    }
    return groupedConditions;
  };
  const groupedConditions = (0, _react.useMemo)(getGroupedConditions, [conditionsConfig, conditions]);
  const rowRefsHandler = ref => {
    if (ref) {
      setRowsRefs(refs => {
        refs[dataIndex] = ref;
        return refs;
      });
    }
  };
  const getFormattedDate = (value, isInvalid) => {
    if (isInvalid) {
      return '';
    }
    const {
      $M: month,
      $D: day,
      $y: year
    } = value;
    return `${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}-${year}`;
  };
  const getFormattedDateAndTime = (value, isInvalid) => {
    if (isInvalid) {
      return '';
    }
    const date = getFormattedDate(value),
      {
        $H: hours,
        $m: minutes
      } = value;
    return date + ` ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  };
  return /*#__PURE__*/_react.default.createElement(_ui.Container, {
    maxWidth: "md",
    sx: {
      display: 'flex',
      gap: 0.5,
      mb: 1,
      '&:last-of-type': {
        mb: 4
      },
      position: 'relative'
    },
    ref: ref => rowRefsHandler(ref)
  }, isNotFirstRow && /*#__PURE__*/_react.default.createElement(_ui.Typography, {
    component: "span",
    variant: "subtitle2",
    sx: {
      position: 'absolute',
      right: 'calc(100% - 8px)',
      mt: '10px'
    },
    size: "small"
  }, (0, _i18n.__)('AND', 'elementor-pro')), /*#__PURE__*/_react.default.createElement(_ui.Select, {
    id: "condition-select",
    value: selectedConditions[dataIndex].condition || '',
    onChange: event => handleChangeCondition(event, dataIndex),
    size: "small",
    sx: {
      flex: 1,
      textAlign: 'left',
      alignSelf: 'flex-start'
    },
    color: "secondary",
    MenuProps: {
      PaperProps: {
        sx: {
          maxHeight: 260,
          '& .MuiListSubheader-root': {
            position: 'initial'
          }
        }
      }
    }
  }, Object.keys(groupedConditions).map(itemName => 'group' === groupedConditions[itemName] ? /*#__PURE__*/_react.default.createElement(_ui.ListSubheader, {
    key: itemName
  }, groups[itemName].label) : /*#__PURE__*/_react.default.createElement(_ui.MenuItem, {
    key: itemName,
    value: itemName
  }, conditions[itemName].label))), Object.keys(conditionControls).filter(controlKey => controlKey !== '__settings').map(controlKey => {
    const control = conditionControls[controlKey],
      {
        options
      } = control,
      conditionErrors = selectedConditions[dataIndex].errors || {},
      controlErrors = conditionErrors[controlKey] || {},
      errorMessage = controlErrors.shouldShow && controlErrors.message || '',
      shouldShowError = Boolean(errorMessage);
    let defaultValue = 'undefined' !== typeof control.default ? control.default : Object.keys(options || {})?.[0] || '';
    selectedConditions[dataIndex][controlKey] = getValue(selectedConditions[dataIndex][controlKey], control.type);
    defaultValue = getValue(defaultValue, control.type);
    if (_constants.CONTROL_TYPES.SELECT === control.type) {
      return /*#__PURE__*/_react.default.createElement(_ui.Select, {
        key: controlKey,
        id: `select-${controlKey}`,
        value: selectedConditions[dataIndex][controlKey] || defaultValue,
        onChange: event => handleChangeOption(event.target.value, controlKey, dataIndex),
        size: "small",
        sx: {
          flex: 1,
          textAlign: 'left',
          alignSelf: 'flex-start'
        },
        color: "secondary"
      }, Object.entries(options).map(([optionKey, optionLabel]) => /*#__PURE__*/_react.default.createElement(_ui.MenuItem, {
        key: optionKey,
        value: optionKey,
        disabled: control?.disabled_options?.includes(optionKey)
      }, optionLabel)));
    }
    if (_constants.CONTROL_TYPES.MULTIPLE_SELECT === control.type) {
      const {
        label
      } = selectedConditions[dataIndex][controlKey]?.length ? '' : conditions[selectedConditions[dataIndex].condition];
      return /*#__PURE__*/_react.default.createElement(_ui.Autocomplete, {
        multiple: control?.multiple || false,
        key: controlKey,
        id: `select-${controlKey}`,
        value: selectedConditions[dataIndex][controlKey],
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
        renderInput: params => /*#__PURE__*/_react.default.createElement(_ui.TextField, (0, _extends2.default)({
          error: shouldShowError,
          helperText: errorMessage
        }, params, {
          placeholder: label,
          color: "secondary"
        })),
        size: "small",
        onChange: (_event, newValues) => handleChangeOption(newValues, controlKey, dataIndex)
      });
    }
    if (_constants.CONTROL_TYPES.DATE_TIME === control.type && 'date' === control?.variant) {
      const props = {
        sx: {
          flex: 1
        },
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
        }
      };
      if (selectedConditions[dataIndex][controlKey] || defaultValue) {
        props.value = (0, _dayjs.default)(selectedConditions[dataIndex][controlKey] || defaultValue);
      }
      return /*#__PURE__*/_react.default.createElement(_ui.DatePicker, (0, _extends2.default)({}, props, {
        key: controlKey,
        onChange: (value, context) => {
          handleChangeOption(getFormattedDate(value, context?.validationError), controlKey, dataIndex);
        }
      }));
    }
    if (_constants.CONTROL_TYPES.QUERY === control.type) {
      return /*#__PURE__*/_react.default.createElement(_queryControl.default, {
        key: controlKey,
        error: shouldShowError,
        helperText: errorMessage,
        dataIndex: dataIndex,
        selectedConditions: selectedConditions,
        handleChangeOption: handleChangeOption,
        controlKey: controlKey,
        fetchData: fetchData,
        control: control
      });
    }
    if (_constants.CONTROL_TYPES.DATE_TIME === control.type && 'time' === control?.variant) {
      const props = {
        sx: {
          flex: 1
        },
        id: `select-${controlKey}`,
        slotProps: {
          textField: {
            size: 'small',
            error: shouldShowError,
            helperText: errorMessage
          }
        }
      };
      if (selectedConditions[dataIndex][controlKey] || defaultValue) {
        props.value = (0, _dayjs.default)(selectedConditions[dataIndex][controlKey] || defaultValue);
      }
      return /*#__PURE__*/_react.default.createElement(_ui.TimePicker, (0, _extends2.default)({
        key: controlKey
      }, props, {
        onChange: (value, context) => {
          return handleChangeOption(getFormattedDateAndTime(value, context?.validationError), controlKey, dataIndex);
        }
      }));
    }
    return /*#__PURE__*/_react.default.createElement(_ui.TextField, {
      key: controlKey,
      sx: {
        flex: 1
      },
      error: shouldShowError,
      helperText: errorMessage,
      value: selectedConditions[dataIndex][controlKey] || defaultValue,
      id: `text-${controlKey}`,
      variant: "outlined",
      onChange: event => handleChangeOption(event.target.value, controlKey, dataIndex),
      size: "small",
      color: "secondary",
      placeholder: control.placeholder
    });
  }), /*#__PURE__*/_react.default.createElement(_ui.IconButton, {
    "aria-label": (0, _i18n.__)('Delete', 'elementor-pro'),
    onClick: () => removeRepeaterRow(dataIndex),
    sx: {
      alignSelf: 'flex-start',
      mt: '2.5px',
      ml: -0.5
    }
  }, /*#__PURE__*/_react.default.createElement(_icons.XIcon, {
    fontSize: "small"
  })));
};
ConditionsRepeaterRow.propTypes = {
  dataIndex: _propTypes.default.number.isRequired,
  conditionsConfig: _propTypes.default.object.isRequired,
  selectedConditions: _propTypes.default.array.isRequired,
  setRowsRefs: _propTypes.default.func.isRequired,
  handleChangeCondition: _propTypes.default.func.isRequired,
  handleChangeOption: _propTypes.default.func.isRequired,
  removeRepeaterRow: _propTypes.default.func.isRequired,
  fetchData: _propTypes.default.func.isRequired
};
var _default = exports["default"] = ConditionsRepeaterRow;

/***/ }),

/***/ "../modules/display-conditions/assets/js/editor/components/conditions-selectors.js":
/*!*****************************************************************************************!*\
  !*** ../modules/display-conditions/assets/js/editor/components/conditions-selectors.js ***!
  \*****************************************************************************************/
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
var _conditionsRepeaterRow = _interopRequireDefault(__webpack_require__(/*! ./conditions-repeater-row */ "../modules/display-conditions/assets/js/editor/components/conditions-repeater-row.js"));
var _utils = __webpack_require__(/*! ../utils/utils */ "../modules/display-conditions/assets/js/editor/utils/utils.js");
var _conditionsContext = __webpack_require__(/*! ../contexts/conditions-context */ "../modules/display-conditions/assets/js/editor/contexts/conditions-context.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ConditionsSelectors = ({
  context,
  showConditions,
  setShowConditions,
  setRowsRefs,
  conditionsConfig,
  fetchData
}) => {
  const {
    selectedConditions,
    dispatch
  } = (0, _react.useContext)(_conditionsContext.ConditionsContext);
  const {
    conditions
  } = conditionsConfig;
  const initializeDefaultValues = (0, _react.useCallback)(conditionKey => {
    const defaultValues = {
      errors: {}
    };
    if (conditions[conditionKey]?.controls) {
      Object.keys(conditions[conditionKey].controls).filter(controlKey => controlKey !== '__settings').forEach(controlKey => {
        const control = conditions[conditionKey].controls[controlKey],
          {
            type,
            variant = null,
            options
          } = control,
          defaultValue = control?.default || (options ? Object.keys(options)[0] : '');
        defaultValues[controlKey] = (0, _utils.shouldCastToArray)(type) ? [] : defaultValue;
        if (!defaultValues[controlKey]?.length) {
          defaultValues.errors[controlKey] = {
            message: (0, _utils.getErrorMessage)(type, variant),
            shouldShow: false
          };
        } else {
          defaultValues.errors[controlKey] = {};
        }
      });
    }
    return defaultValues;
  }, [conditions]);
  const handleChangeCondition = (event, dataIndex) => {
    const conditionKey = event.target.value;
    const defaultValues = initializeDefaultValues(conditionKey);
    dispatch({
      type: 'CHANGE_CONDITION',
      dataIndex,
      conditionKey,
      defaultValues
    });
  };
  const handleChangeOption = (value, controlKey, dataIndex) => {
    const {
        type,
        variant
      } = conditionsConfig.conditions[selectedConditions[dataIndex].condition].controls[controlKey],
      error = !value?.length ? {
        message: (0, _utils.getErrorMessage)(type, variant),
        shouldShow: false
      } : {};
    dispatch({
      type: 'CHANGE_OPTION',
      dataIndex,
      controlKey,
      value
    });
    dispatch({
      type: 'SET_ERRORS',
      dataIndex,
      errors: {
        [controlKey]: error
      }
    });
  };
  const getDefaultActiveCondition = (groups, allConditions) => {
    for (const groupName in groups) {
      const firstCondition = Object.keys(allConditions).find(conditionKey => groupName === allConditions[conditionKey].group);
      if (firstCondition) {
        return {
          condition: firstCondition
        };
      }
    }
  };
  const addRepeaterRow = () => {
    const initialCondition = getDefaultActiveCondition(conditionsConfig.groups, conditionsConfig.conditions),
      defaultValues = initializeDefaultValues(initialCondition.condition),
      defaultCondition = {
        ...initialCondition,
        ...defaultValues
      };
    dispatch({
      type: 'ADD_CONDITION',
      newCondition: defaultCondition
    });
    setShowConditions(true);
  };
  const removeRepeaterRow = dataIndex => {
    dispatch({
      type: 'REMOVE_CONDITION',
      dataIndex
    });
  };
  return /*#__PURE__*/_react.default.createElement(_ui.Box, null, showConditions && selectedConditions.map((selectedCondition, index) => /*#__PURE__*/_react.default.createElement(_conditionsRepeaterRow.default, {
    key: 'component-row-' + index,
    dataIndex: index,
    conditionsConfig: conditionsConfig,
    selectedConditions: selectedConditions,
    setRowsRefs: setRowsRefs,
    handleChangeCondition: handleChangeCondition,
    handleChangeOption: handleChangeOption,
    removeRepeaterRow: removeRepeaterRow,
    fetchData: fetchData
  })), /*#__PURE__*/_react.default.createElement(_ui.Button, {
    variant: "contained",
    color: "secondary",
    startIcon: /*#__PURE__*/_react.default.createElement(_icons.PlusIcon, null),
    sx: {
      mb: 5
    },
    onClick: () => addRepeaterRow()
  }, __('Add Condition', 'elementor-pro')));
};
ConditionsSelectors.propTypes = {
  context: PropTypes.string.isRequired,
  showConditions: PropTypes.bool.isRequired,
  setShowConditions: PropTypes.func.isRequired,
  conditionsConfig: PropTypes.object.isRequired,
  fetchData: PropTypes.func.isRequired,
  setRowsRefs: PropTypes.func.isRequired
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
exports["default"] = Conditions;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _ui = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
var _hierarchyIcon = _interopRequireDefault(__webpack_require__(/*! ./icons/hierarchy-icon */ "../modules/display-conditions/assets/js/editor/components/icons/hierarchy-icon.js"));
var _conditionsSelectors = _interopRequireDefault(__webpack_require__(/*! ./conditions-selectors */ "../modules/display-conditions/assets/js/editor/components/conditions-selectors.js"));
function Conditions(props) {
  return /*#__PURE__*/_react.default.createElement(_ui.Box, {
    sx: {
      flex: 1,
      overflow: 'auto'
    }
  }, /*#__PURE__*/_react.default.createElement(_ui.Container, {
    maxWidth: "md",
    sx: {
      justifyContent: 'center',
      pt: 5,
      pb: 10,
      px: 6,
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_hierarchyIcon.default, {
    fontSize: "large",
    sx: {
      mb: 1
    }
  }), /*#__PURE__*/_react.default.createElement(_ui.Typography, {
    component: "h5",
    variant: "h5",
    color: "text.primary"
  }, __('Set one or more conditions for this element', 'elementor-pro')), /*#__PURE__*/_react.default.createElement(_ui.Typography, {
    variant: "subtitle1",
    color: "text.tertiary",
    sx: {
      mb: 4
    }
  }, __('It will only appear on your website when all the conditions are met.', 'elementor-pro'), ' ', /*#__PURE__*/_react.default.createElement(_ui.Link, {
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
  }, __('Learn more', 'elementor-pro'))), /*#__PURE__*/_react.default.createElement(_conditionsSelectors.default, props)));
}

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
var _ui = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
var _header = _interopRequireDefault(__webpack_require__(/*! ./header */ "../modules/display-conditions/assets/js/editor/components/header.js"));
var _footer = _interopRequireDefault(__webpack_require__(/*! ./footer */ "../modules/display-conditions/assets/js/editor/components/footer.js"));
var _conditions = _interopRequireDefault(__webpack_require__(/*! ./conditions */ "../modules/display-conditions/assets/js/editor/components/conditions.js"));
var _constants = __webpack_require__(/*! ../constants */ "../modules/display-conditions/assets/js/editor/constants.js");
var _conditionsReducer = __webpack_require__(/*! ../reducers/conditions-reducer */ "../modules/display-conditions/assets/js/editor/reducers/conditions-reducer.js");
var _conditionsContext = __webpack_require__(/*! ../contexts/conditions-context */ "../modules/display-conditions/assets/js/editor/contexts/conditions-context.js");
var _utils = __webpack_require__(/*! ../utils/utils */ "../modules/display-conditions/assets/js/editor/utils/utils.js");
var _cacheNotice = _interopRequireDefault(__webpack_require__(/*! ./cache-notice */ "../modules/display-conditions/assets/js/editor/components/cache-notice.js"));
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
    controlValue = !inputValue ? '' : JSON.parse(inputValue),
    context = !controlValue ? _constants.CONTEXT.CREATE : _constants.CONTEXT.UPDATE;
  const [showConditions, setShowConditions] = _react.default.useState(true);
  const [rowsRef, setRowsRefs] = (0, _react.useState)([]);
  const [selectedConditions, dispatch] = (0, _react.useReducer)(_conditionsReducer.conditionsReducer, controlValue || []);
  const [isShowErrors, setIsShowErrors] = (0, _react.useState)(false);
  const [saveButtonDisplay, setSaveButtonDisplay] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    if (!saveButtonDisplay) {
      setSaveButtonDisplay(true);
    }
  }, [selectedConditions]);
  (0, _react.useEffect)(() => {
    setSaveButtonDisplay(false);
  }, []);
  const doesHaveInvalidFields = () => {
    return selectedConditions.some(({
      errors
    }) => {
      return errors && Object.values(errors).some(error => error);
    });
  };
  const getSanitizedConditions = () => {
    return selectedConditions.map(condition => {
      const formattedCondition = {
        ...condition
      };
      delete formattedCondition.errors;
      return formattedCondition;
    });
  };
  const handleRequiredEmptyFields = () => {
    let firstInvalidIndex = -1;
    selectedConditions.forEach((conditionConfig, index) => {
      const {
          condition
        } = conditionConfig,
        requiredKeys = getRequiredControlKeys(condition);
      requiredKeys.forEach(controlKey => {
        if (conditionConfig[controlKey]?.length) {
          return;
        }
        const {
          type,
          variant = null
        } = conditionsConfig.conditions[condition].controls[controlKey];
        firstInvalidIndex = -1 === firstInvalidIndex ? index : firstInvalidIndex;
        dispatch({
          type: 'SET_ERRORS',
          dataIndex: index,
          errors: {
            [controlKey]: {
              message: (0, _utils.getErrorMessage)(type, variant),
              shouldShow: true
            }
          }
        });
      });
    });
    return firstInvalidIndex;
  };
  const getRequiredControlKeys = condition => {
    const {
      controls
    } = conditionsConfig.conditions[condition];
    return Object.keys(controls).filter(key => controls[key].required);
  };
  const saveData = () => {
    const rowRefIndex = handleRequiredEmptyFields(),
      shouldDisplayErrors = -1 !== rowRefIndex && rowsRef[rowRefIndex];
    if (shouldDisplayErrors) {
      rowsRef[rowRefIndex].scrollIntoView({
        behavior: 'smooth'
      });
      return;
    }
    setControlValue([JSON.stringify(getSanitizedConditions())]);
    onClose();
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_header.default, {
    onClose: onClose
  }), /*#__PURE__*/_react.default.createElement(_ui.Divider, {
    orientation: "horizontal"
  }), conditionsConfig.show_cache_notice && /*#__PURE__*/_react.default.createElement(_cacheNotice.default, {
    setCacheNoticeStatus: setCacheNoticeStatus
  }), /*#__PURE__*/_react.default.createElement(_conditionsContext.ConditionsContext.Provider, {
    value: {
      selectedConditions,
      dispatch
    }
  }, /*#__PURE__*/_react.default.createElement(_conditions.default, {
    context: context,
    showConditions: showConditions,
    setShowConditions: setShowConditions,
    setRowsRefs: setRowsRefs,
    conditionsConfig: conditionsConfig,
    fetchData: fetchData
  })), /*#__PURE__*/_react.default.createElement(_ui.Divider, {
    orientation: "horizontal"
  }), /*#__PURE__*/_react.default.createElement(_footer.default, {
    onClickSaveButton: () => saveData(),
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
var _ui = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));
var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
var _utils = __webpack_require__(/*! elementor-pro-app/utils */ "../core/app/assets/js/utils.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const QueryControl = ({
  dataIndex,
  selectedConditions,
  handleChangeOption,
  fetchData,
  controlKey,
  control,
  error = false,
  helperText = ''
}) => {
  const [options, setOptions] = (0, _react.useState)([]);
  const [loading, setLoading] = (0, _react.useState)(false);
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
  return /*#__PURE__*/_react.default.createElement(_ui.Autocomplete, {
    multiple: control?.multiple || false,
    key: controlKey,
    id: `select-${controlKey}`,
    value: selectedConditions[dataIndex][controlKey] || [],
    options: options,
    getOptionLabel: option => option ? option.text : '',
    isOptionEqualToValue: (option, value) => option.id === value.id,
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
      placeholder: control.placeholder || '',
      color: "secondary",
      error: error,
      helperText: helperText,
      InputProps: {
        ...params.InputProps,
        endAdornment: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, loading ? /*#__PURE__*/_react.default.createElement(_ui.CircularProgress, {
          color: "inherit",
          size: 20
        }) : null, params.InputProps.endAdornment)
      }
    })),
    onChange: (_event, newValues) => handleChangeOption(newValues, controlKey, dataIndex),
    onInputChange: (event, newInputValue) => {
      const selectedValues = selectedConditions[dataIndex][controlKey] || [];
      handleSearchInputChange(event, newInputValue, selectedValues);
    }
  });
};
QueryControl.propTypes = {
  dataIndex: _propTypes.default.number.isRequired,
  selectedConditions: _propTypes.default.array.isRequired,
  handleChangeOption: _propTypes.default.func.isRequired,
  fetchData: _propTypes.default.func.isRequired,
  controlKey: _propTypes.default.string.isRequired,
  control: _propTypes.default.object.isRequired,
  error: _propTypes.default.bool,
  helperText: _propTypes.default.string
};
var _default = exports["default"] = QueryControl;

/***/ }),

/***/ "../modules/display-conditions/assets/js/editor/components/footer.js":
/*!***************************************************************************!*\
  !*** ../modules/display-conditions/assets/js/editor/components/footer.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Footer;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _ui = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
function Footer({
  onClickSaveButton,
  isButtonDisabled
}) {
  return /*#__PURE__*/_react.default.createElement(_ui.Stack, {
    direction: "row",
    justifyContent: "flex-end",
    sx: {
      py: 1,
      px: 3
    }
  }, /*#__PURE__*/_react.default.createElement(_ui.Button, {
    variant: "contained",
    disabled: !isButtonDisabled,
    onClick: onClickSaveButton
  }, __('Save & Close', 'elementor-pro')));
}
Footer.propTypes = {
  onClickSaveButton: PropTypes.func,
  isButtonDisabled: PropTypes.bool.isRequired
};

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
var _ui = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
var _elementorLogo = _interopRequireDefault(__webpack_require__(/*! ./icons/elementor-logo */ "../modules/display-conditions/assets/js/editor/components/icons/elementor-logo.js"));
var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));
var _icons = __webpack_require__(/*! @elementor/icons */ "@elementor/icons");
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
  onClose: _propTypes.default.func.isRequired
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
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _ui = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
const ElementorLogo = props => {
  return /*#__PURE__*/_react.default.createElement(_ui.SvgIcon, (0, _extends2.default)({
    viewBox: "0 0 32 32"
  }, props), /*#__PURE__*/_react.default.createElement("path", {
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
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _ui = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
const UnstyledHierarchyIcon = _react.default.forwardRef((props, ref) => {
  return /*#__PURE__*/_react.default.createElement(_ui.SvgIcon, (0, _extends2.default)({
    viewBox: "0 0 24 24"
  }, props, {
    ref: ref
  }), /*#__PURE__*/_react.default.createElement("path", {
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

/***/ "../modules/display-conditions/assets/js/editor/constants.js":
/*!*******************************************************************!*\
  !*** ../modules/display-conditions/assets/js/editor/constants.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CONTROL_TYPES = exports.CONTEXT = void 0;
// These values will match the Controls_Manager
const CONTROL_TYPES = exports.CONTROL_TYPES = {
  MULTIPLE_SELECT: 'select2',
  SELECT: 'select',
  QUERY: 'query',
  DATE_TIME: 'date_time',
  TEXT_FIELD: 'text'
};
const CONTEXT = exports.CONTEXT = {
  CREATE: 'create',
  UPDATE: 'update'
};

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
    behaviors.displayConditions = {
      behaviorClass: _behavior.default,
      getControlValue: () => {
        const controlView = this.getEditorControlView('e_display_conditions');
        if (!controlView) {
          return '';
        }
        return controlView.getControlValue() || '';
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
      conditionsConfig: elementor.config.displayConditions
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
    const conditionValue = controlView.getControlValue(),
      conditionArray = '' !== conditionValue ? JSON.parse(conditionValue) : [];
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
}
exports["default"] = Module;

/***/ }),

/***/ "../modules/display-conditions/assets/js/editor/reducers/conditions-reducer.js":
/*!*************************************************************************************!*\
  !*** ../modules/display-conditions/assets/js/editor/reducers/conditions-reducer.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.conditionsReducer = void 0;
const conditionsReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_CONDITION':
      return state.map((condition, index) => {
        if (index === action.dataIndex) {
          return {
            condition: action.conditionKey,
            ...action.defaultValues
          };
        }
        return condition;
      });
    case 'CHANGE_OPTION':
      return state.map((condition, index) => index === action.dataIndex ? {
        ...condition,
        [action.controlKey]: action.value
      } : condition);
    case 'ADD_CONDITION':
      return [...state, action.newCondition];
    case 'REMOVE_CONDITION':
      return state.filter((_, index) => index !== action.dataIndex);
    case 'SET_ERRORS':
      const {
        dataIndex,
        errors
      } = action;
      return state.map((condition, index) => index === dataIndex ? {
        ...condition,
        errors: {
          ...condition.errors,
          ...errors
        }
      } : condition);
    default:
      return state;
  }
};
exports.conditionsReducer = conditionsReducer;

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
exports.shouldCastToArray = exports.getErrorMessage = void 0;
var _constants = __webpack_require__(/*! ../constants */ "../modules/display-conditions/assets/js/editor/constants.js");
const shouldCastToArray = controlType => {
  return _constants.CONTROL_TYPES.MULTIPLE_SELECT === controlType || _constants.CONTROL_TYPES.QUERY === controlType;
};
exports.shouldCastToArray = shouldCastToArray;
const getErrorMessage = (controlType, variant = null) => {
  if (shouldCastToArray(controlType)) {
    return __('Select an option', 'elementor-pro');
  }
  if (_constants.CONTROL_TYPES.DATE_TIME === controlType) {
    return 'time' === variant ? __('Select a time', 'elementor-pro') : __('Select a date', 'elementor-pro');
  }
  return __('Enter a value', 'elementor-pro');
};
exports.getErrorMessage = getErrorMessage;

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
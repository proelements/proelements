/*! pro-elements - v3.25.0 - 28-10-2024 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../core/app/modules/site-editor/assets/js/context/base-context.js":
/*!*************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/context/base-context.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.BaseContext = void 0;
class BaseContext extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      action: {
        current: null,
        loading: false,
        error: null,
        errorMeta: {}
      },
      updateActionState: this.updateActionState.bind(this),
      resetActionState: this.resetActionState.bind(this)
    };
  }
  executeAction(name, handler) {
    this.updateActionState({
      current: name,
      loading: true,
      error: null,
      errorMeta: {}
    });
    return handler().then(response => {
      this.resetActionState();
      return Promise.resolve(response);
    }).catch(error => {
      this.updateActionState({
        current: name,
        loading: false,
        error: error.message,
        errorMeta: error
      });
      return Promise.reject(error);
    });
  }
  updateActionState(data) {
    return this.setState(prev => ({
      action: {
        ...prev.action,
        ...data
      }
    }));
  }
  resetActionState() {
    this.updateActionState({
      current: null,
      loading: false,
      error: null,
      errorMeta: {}
    });
  }
}
exports.BaseContext = BaseContext;
var _default = exports["default"] = BaseContext;

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/context/conditions.js":
/*!***********************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/context/conditions.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.Context = exports.ConditionsProvider = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _condition = _interopRequireDefault(__webpack_require__(/*! ./models/condition */ "../core/app/modules/site-editor/assets/js/context/models/condition.js"));
var _conditionsConfig = _interopRequireDefault(__webpack_require__(/*! ./services/conditions-config */ "../core/app/modules/site-editor/assets/js/context/services/conditions-config.js"));
var _baseContext = _interopRequireDefault(__webpack_require__(/*! ./base-context */ "../core/app/modules/site-editor/assets/js/context/base-context.js"));
var _commands = __webpack_require__(/*! ../data/commands */ "../core/app/modules/site-editor/assets/js/data/commands/index.js");
const Context = exports.Context = _react.default.createContext();
class ConditionsProvider extends _baseContext.default {
  static propTypes = {
    children: PropTypes.any.isRequired,
    currentTemplate: PropTypes.object.isRequired,
    onConditionsSaved: PropTypes.func.isRequired,
    validateConflicts: PropTypes.bool
  };
  static defaultProps = {
    validateConflicts: true
  };
  static actions = {
    FETCH_CONFIG: 'fetch-config',
    SAVE: 'save',
    CHECK_CONFLICTS: 'check-conflicts'
  };

  /**
   * Holds the conditions config object.
   *
   * @type {ConditionsConfig}
   */
  conditionsConfig = null;

  /**
   * ConditionsProvider constructor.
   *
   * @param {any} props
   */
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      conditionsFetched: false,
      conditions: {},
      updateConditionItemState: this.updateConditionItemState.bind(this),
      removeConditionItemInState: this.removeConditionItemInState.bind(this),
      createConditionItemInState: this.createConditionItemInState.bind(this),
      findConditionItemInState: this.findConditionItemInState.bind(this),
      saveConditions: this.saveConditions.bind(this)
    };
  }

  /**
   * Fetch the conditions config, then normalize the conditions and then setup titles for
   * the subIds.
   */
  componentDidMount() {
    this.executeAction(ConditionsProvider.actions.FETCH_CONFIG, () => _conditionsConfig.default.create()).then(conditionsConfig => this.conditionsConfig = conditionsConfig).then(this.normalizeConditionsState.bind(this)).then(() => {
      this.setSubIdTitles.bind(this);
      this.setState({
        conditionsFetched: true
      });
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (!prevState.conditionsFetched && this.state.conditionsFetched) {
      this.setSubIdTitles();
    }
  }

  /**
   * Execute a request to save the template conditions.
   *
   * @return {any} Saved conditions
   */
  saveConditions() {
    const conditions = Object.values(this.state.conditions).map(condition => condition.forDb());
    return this.executeAction(ConditionsProvider.actions.SAVE, () => $e.data.update(_commands.TemplatesConditions.signature, {
      conditions
    }, {
      id: this.props.currentTemplate.id
    })).then(() => {
      const contextConditions = Object.values(this.state.conditions).map(condition => condition.forContext());
      this.props.onConditionsSaved(this.props.currentTemplate.id, {
        conditions: contextConditions,
        instances: this.conditionsConfig.calculateInstances(Object.values(this.state.conditions)),
        isActive: !!(Object.keys(this.state.conditions).length && 'publish' === this.props.currentTemplate.status)
      });
    });
  }

  /**
   * Check for conflicts in the server and mark the condition if there
   * is a conflict.
   *
   * @param {any} condition
   */
  checkConflicts(condition) {
    return this.executeAction(ConditionsProvider.actions.CHECK_CONFLICTS, () => $e.data.get(_commands.TemplatesConditionsConflicts.signature, {
      post_id: this.props.currentTemplate.id,
      condition: condition.clone().toString()
    })).then(response => this.updateConditionItemState(condition.id, {
      conflictErrors: Object.values(response.data)
    }, false));
  }

  /**
   * Fetching subId titles.
   *
   * @param {any} condition
   * @return {Promise<unknown>} Titles
   */
  fetchSubIdsTitles(condition) {
    return new Promise(resolve => {
      return elementorCommon.ajax.loadObjects({
        action: 'query_control_value_titles',
        ids: _.isArray(condition.subId) ? condition.subId : [condition.subId],
        data: {
          get_titles: condition.subIdAutocomplete,
          unique_id: elementorCommon.helpers.getUniqueId()
        },
        success(response) {
          resolve(response);
        }
      });
    });
  }

  /**
   * Get the conditions from the template and normalize it to data structure
   * that the components can work with.
   */
  normalizeConditionsState() {
    this.updateConditionsState(() => {
      return this.props.currentTemplate.conditions.reduce((current, condition) => {
        const conditionObj = new _condition.default({
          ...condition,
          default: this.props.currentTemplate.defaultCondition,
          options: this.conditionsConfig.getOptions(),
          subOptions: this.conditionsConfig.getSubOptions(condition.name),
          subIdAutocomplete: this.conditionsConfig.getSubIdAutocomplete(condition.sub),
          subIdOptions: condition.subId ? [{
            value: condition.subId,
            label: ''
          }] : []
        });
        return {
          ...current,
          [conditionObj.id]: conditionObj
        };
      }, {});
    }).then(() => {
      Object.values(this.state.conditions).forEach(condition => this.checkConflicts(condition));
    });
  }

  /**
   * Set titles to the subIds,
   * for the first render of the component.
   */
  setSubIdTitles() {
    return Object.values(this.state.conditions).forEach(condition => {
      if (!condition.subId) {
        return;
      }
      return this.fetchSubIdsTitles(condition).then(response => this.updateConditionItemState(condition.id, {
        subIdOptions: [{
          label: Object.values(response)[0],
          value: condition.subId
        }]
      }, false));
    });
  }

  /**
   * Update state of specific condition item.
   *
   * @param {any}     id
   * @param {any}     args
   * @param {boolean} shouldCheckConflicts
   */
  updateConditionItemState(id, args, shouldCheckConflicts = true) {
    if (args.name) {
      args.subOptions = this.conditionsConfig.getSubOptions(args.name);
    }
    if (args.sub || args.name) {
      args.subIdAutocomplete = this.conditionsConfig.getSubIdAutocomplete(args.sub);

      // In case that the condition has been changed, it will set the options of the subId
      // to empty array to let select2 autocomplete handle the options.
      args.subIdOptions = [];
    }
    this.updateConditionsState(prev => {
      const condition = prev[id];
      return {
        ...prev,
        [id]: condition.clone().set(args)
      };
    }).then(() => {
      if (shouldCheckConflicts) {
        this.checkConflicts(this.findConditionItemInState(id));
      }
    });
  }

  /**
   * Remove a condition item from the state.
   *
   * @param {any} id
   */
  removeConditionItemInState(id) {
    this.updateConditionsState(prev => {
      const newConditions = {
        ...prev
      };
      delete newConditions[id];
      return newConditions;
    });
  }

  /**
   * Add a new condition item into the state.
   *
   * @param {boolean} shouldCheckConflicts
   */
  createConditionItemInState(shouldCheckConflicts = true) {
    const defaultCondition = this.props.currentTemplate.defaultCondition,
      newCondition = new _condition.default({
        name: defaultCondition,
        default: defaultCondition,
        options: this.conditionsConfig.getOptions(),
        subOptions: this.conditionsConfig.getSubOptions(defaultCondition),
        subIdAutocomplete: this.conditionsConfig.getSubIdAutocomplete('')
      });
    this.updateConditionsState(prev => ({
      ...prev,
      [newCondition.id]: newCondition
    })).then(() => {
      if (shouldCheckConflicts) {
        this.checkConflicts(newCondition);
      }
    });
  }

  /**
   * Find a condition item from the conditions state.
   *
   * @param {any} id
   * @return {Condition|null} Condition
   */
  findConditionItemInState(id) {
    return Object.values(this.state.conditions).find(c => c.id === id);
  }

  /**
   * Update the whole conditions state.
   *
   * @param {Function} callback
   * @return {Promise<undefined>} Conditions state
   */
  updateConditionsState(callback) {
    return new Promise(resolve => this.setState(prev => ({
      conditions: callback(prev.conditions)
    }), resolve));
  }

  /**
   * Renders the provider.
   *
   * @return {any} Element
   */
  render() {
    if (this.state.action.current === ConditionsProvider.actions.FETCH_CONFIG) {
      if (this.state.error) {
        return /*#__PURE__*/_react.default.createElement("h3", null, __('Error:', 'elementor-pro'), " ", this.state.error);
      }
      if (this.state.loading) {
        return /*#__PURE__*/_react.default.createElement("h3", null, __('Loading', 'elementor-pro'), "...");
      }
    }
    return /*#__PURE__*/_react.default.createElement(Context.Provider, {
      value: this.state
    }, this.props.children);
  }
}
exports.ConditionsProvider = ConditionsProvider;
var _default = exports["default"] = ConditionsProvider;

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/context/models/condition.js":
/*!*****************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/context/models/condition.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class Condition {
  id = elementorCommon.helpers.getUniqueId();
  default = '';
  type = 'include';
  name = '';
  sub = '';
  subId = '';
  options = [];
  subOptions = [];
  subIdAutocomplete = [];
  subIdOptions = [];
  conflictErrors = [];
  constructor(args) {
    this.set(args);
  }
  set(args) {
    Object.assign(this, args);
    return this;
  }
  clone() {
    return Object.assign(new Condition(), this);
  }
  remove(keys) {
    if (!Array.isArray(keys)) {
      keys = [keys];
    }
    keys.forEach(key => {
      delete this[key];
    });
    return this;
  }
  only(keys) {
    if (!Array.isArray(keys)) {
      keys = [keys];
    }
    const keysToRemove = Object.keys(this).filter(conditionKey => !keys.includes(conditionKey));
    this.remove(keysToRemove);
    return this;
  }
  toJson() {
    return JSON.stringify(this);
  }
  toString() {
    return this.forDb().filter(item => item).join('/');
  }
  forDb() {
    return [this.type, this.name, this.sub, this.subId];
  }
  forContext() {
    return {
      type: this.type,
      name: this.name,
      sub: this.sub,
      subId: this.subId
    };
  }
}
exports["default"] = Condition;

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/context/services/conditions-config.js":
/*!***************************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/context/services/conditions-config.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.ConditionsConfig = void 0;
var _commands = __webpack_require__(/*! ../../data/commands */ "../core/app/modules/site-editor/assets/js/data/commands/index.js");
class ConditionsConfig {
  static instance;
  config = null;
  constructor(config) {
    this.config = config;
  }

  /**
   * @return {Promise<ConditionsConfig>} Conditions config
   */
  static create() {
    if (ConditionsConfig.instance) {
      return Promise.resolve(ConditionsConfig.instance);
    }
    return $e.data.get(_commands.ConditionsConfig.signature, {}, {
      refresh: true
    }).then(response => {
      ConditionsConfig.instance = new ConditionsConfig(response.data);
      return ConditionsConfig.instance;
    });
  }

  /**
   * Get main options for condition name.
   *
   * @return {Array} Condition options
   */
  getOptions() {
    return this.getSubOptions('general', true).map(({
      label,
      value
    }) => {
      return {
        label,
        value
      };
    });
  }

  /**
   * Get the sub options for the select.
   *
   * @param {string}  itemName
   * @param {boolean} isSubItem
   * @return {Array} Sub options
   */
  getSubOptions(itemName, isSubItem = false) {
    const config = this.config[itemName];
    if (!config) {
      return [];
    }
    return [{
      label: config.all_label,
      value: isSubItem ? itemName : ''
    }, ...config.sub_conditions.map(subName => {
      const subConfig = this.config[subName];
      return {
        label: subConfig.label,
        value: subName,
        children: subConfig.sub_conditions.length ? this.getSubOptions(subName, true) : null
      };
    })];
  }

  /**
   * Get the autocomplete property from the conditions config
   *
   * @param {string} sub
   * @return {{}|any} Conditions autocomplete
   */
  getSubIdAutocomplete(sub) {
    const config = this.config[sub];
    if (!config || !('object' === typeof config.controls)) {
      return {};
    }
    const controls = Object.values(config.controls);
    if (!controls?.[0]?.autocomplete) {
      return {};
    }
    return controls[0].autocomplete;
  }

  /**
   * Calculate instances from the conditions.
   *
   * @param {Array} conditions
   * @return {Object} Conditions Instances
   */
  calculateInstances(conditions) {
    let instances = conditions.reduce((current, condition) => {
      if ('exclude' === condition.type) {
        return current;
      }
      const key = condition.sub || condition.name,
        config = this.config[key];
      if (!config) {
        return current;
      }
      const instanceLabel = condition.subId ? `${config.label} #${condition.subId}` : config.all_label;
      return {
        ...current,
        [key]: instanceLabel
      };
    }, {});
    if (0 === Object.keys(instances).length) {
      instances = [__('No instances', 'elementor-pro')];
    }
    return instances;
  }
}
exports.ConditionsConfig = ConditionsConfig;
var _default = exports["default"] = ConditionsConfig;

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/data/commands/conditions-config.js":
/*!************************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/data/commands/conditions-config.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.ConditionsConfig = void 0;
class ConditionsConfig extends $e.modules.CommandData {
  static signature = 'site-editor/conditions-config';
  static getEndpointFormat() {
    return 'site-editor/conditions-config/{id}';
  }
}
exports.ConditionsConfig = ConditionsConfig;
var _default = exports["default"] = ConditionsConfig;

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/data/commands/index.js":
/*!************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/data/commands/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "ConditionsConfig", ({
  enumerable: true,
  get: function () {
    return _conditionsConfig.ConditionsConfig;
  }
}));
Object.defineProperty(exports, "Templates", ({
  enumerable: true,
  get: function () {
    return _templates.Templates;
  }
}));
Object.defineProperty(exports, "TemplatesConditions", ({
  enumerable: true,
  get: function () {
    return _templatesConditions.TemplatesConditions;
  }
}));
Object.defineProperty(exports, "TemplatesConditionsConflicts", ({
  enumerable: true,
  get: function () {
    return _templatesConditionsConflicts.TemplatesConditionsConflicts;
  }
}));
var _templates = __webpack_require__(/*! ./templates */ "../core/app/modules/site-editor/assets/js/data/commands/templates.js");
var _conditionsConfig = __webpack_require__(/*! ./conditions-config */ "../core/app/modules/site-editor/assets/js/data/commands/conditions-config.js");
var _templatesConditions = __webpack_require__(/*! ./templates-conditions */ "../core/app/modules/site-editor/assets/js/data/commands/templates-conditions.js");
var _templatesConditionsConflicts = __webpack_require__(/*! ./templates-conditions-conflicts */ "../core/app/modules/site-editor/assets/js/data/commands/templates-conditions-conflicts.js");

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/data/commands/templates-conditions-conflicts.js":
/*!*************************************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/data/commands/templates-conditions-conflicts.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.TemplatesConditionsConflicts = void 0;
class TemplatesConditionsConflicts extends $e.modules.CommandData {
  static signature = 'site-editor/templates-conditions-conflicts';
  static getEndpointFormat() {
    return `${TemplatesConditionsConflicts.signature}/{id}`;
  }
}
exports.TemplatesConditionsConflicts = TemplatesConditionsConflicts;
var _default = exports["default"] = TemplatesConditionsConflicts;

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/data/commands/templates-conditions.js":
/*!***************************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/data/commands/templates-conditions.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.TemplatesConditions = void 0;
class TemplatesConditions extends $e.modules.CommandData {
  static signature = 'site-editor/templates-conditions';
  static getEndpointFormat() {
    return 'site-editor/templates-conditions/{id}';
  }
}
exports.TemplatesConditions = TemplatesConditions;
var _default = exports["default"] = TemplatesConditions;

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/data/commands/templates.js":
/*!****************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/data/commands/templates.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.Templates = void 0;
class Templates extends $e.modules.CommandData {
  static signature = 'site-editor/templates';
  static getEndpointFormat() {
    return 'site-editor/templates/{id}';
  }
}
exports.Templates = Templates;
var _default = exports["default"] = Templates;

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/data/component.js":
/*!*******************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/data/component.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var dataCommands = _interopRequireWildcard(__webpack_require__(/*! ./commands */ "../core/app/modules/site-editor/assets/js/data/commands/index.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
class Component extends $e.modules.ComponentBase {
  static namespace = 'site-editor';
  getNamespace() {
    return this.constructor.namespace;
  }
  defaultData() {
    return this.importCommands(dataCommands);
  }
}
exports["default"] = Component;

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/pages/conditions/condition-button-portal.js":
/*!*********************************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/pages/conditions/condition-button-portal.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");
var _react = __webpack_require__(/*! react */ "react");
var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ConditionButtonPortal = props => {
  const [shouldCreatePortal, setShouldCreatePortal] = (0, _react.useState)(false),
    portalRoot = document.getElementById('portal-root');
  (0, _react.useEffect)(() => {
    setShouldCreatePortal(!!portalRoot);
  }, [portalRoot]);
  return shouldCreatePortal ? (0, _reactDom.createPortal)(props.children, portalRoot) : null;
};
ConditionButtonPortal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
};
var _default = exports["default"] = ConditionButtonPortal;

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/pages/conditions/condition-conflicts.js":
/*!*****************************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/pages/conditions/condition-conflicts.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = ConditionConflicts;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _appUi = __webpack_require__(/*! @elementor/app-ui */ "@elementor/app-ui");
function ConditionConflicts(props) {
  if (!props.conflicts.length) {
    return '';
  }
  const conflictLinks = props.conflicts.map(conflict => {
    return /*#__PURE__*/_react.default.createElement(_appUi.Button, {
      key: conflict.template_id,
      target: "_blank",
      url: conflict.edit_url,
      text: conflict.template_title
    });
  });
  return /*#__PURE__*/_react.default.createElement(_appUi.Text, {
    className: "e-site-editor-conditions__conflict",
    variant: "sm"
  }, __('Elementor recognized that you have set this location for other templates: ', 'elementor-pro'), " ", conflictLinks);
}
ConditionConflicts.propTypes = {
  conflicts: PropTypes.array.isRequired
};

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/pages/conditions/condition-name.js":
/*!************************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/pages/conditions/condition-name.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = ConditionName;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _appUi = __webpack_require__(/*! @elementor/app-ui */ "@elementor/app-ui");
function ConditionName(props) {
  // Hide for template types that has another default, like single & archive.
  if ('general' !== props.default) {
    return '';
  }
  const onChange = e => props.updateConditions(props.id, {
    name: e.target.value,
    sub: '',
    subId: ''
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "e-site-editor-conditions__input-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_appUi.Select, {
    options: props.options,
    value: props.name,
    onChange: onChange
  }));
}
ConditionName.propTypes = {
  updateConditions: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  default: PropTypes.string.isRequired
};
ConditionName.defaultProps = {
  name: ''
};

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/pages/conditions/condition-sub-id.js":
/*!**************************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/pages/conditions/condition-sub-id.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = ConditionSubId;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _appUi = __webpack_require__(/*! @elementor/app-ui */ "@elementor/app-ui");
/**
 * Main component.
 *
 * @param {any} props
 * @return {any} Element
 * @class
 */
function ConditionSubId(props) {
  const settings = _react.default.useMemo(() => Object.keys(props.subIdAutocomplete).length ? getSettings(props.subIdAutocomplete) : null, [props.subIdAutocomplete]);
  if (!props.sub || !settings) {
    return '';
  }
  const onChange = e => props.updateConditions(props.id, {
    subId: e.target.value
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "e-site-editor-conditions__input-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_appUi.Select2, {
    onChange: onChange,
    value: props.subId,
    settings: settings,
    options: props.subIdOptions
  }));
}

/**
 * Get settings for the select2 base on the autocomplete settings,
 * that passes as a prop
 *
 * @param {any} autocomplete
 * @return {Object} Settings
 */
function getSettings(autocomplete) {
  return {
    allowClear: false,
    placeholder: __('All', 'elementor-pro'),
    dir: elementorCommon.config.isRTL ? 'rtl' : 'ltr',
    ajax: {
      transport(params, success, failure) {
        return elementorCommon.ajax.addRequest('pro_panel_posts_control_filter_autocomplete', {
          data: {
            q: params.data.q,
            autocomplete
          },
          success,
          error: failure
        });
      },
      data(params) {
        return {
          q: params.term,
          page: params.page
        };
      },
      cache: true
    },
    escapeMarkup(markup) {
      return markup;
    },
    minimumInputLength: 1
  };
}
ConditionSubId.propTypes = {
  subIdAutocomplete: PropTypes.object,
  id: PropTypes.string.isRequired,
  sub: PropTypes.string,
  subId: PropTypes.string,
  updateConditions: PropTypes.func,
  subIdOptions: PropTypes.array
};
ConditionSubId.defaultProps = {
  subId: '',
  subIdOptions: []
};

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/pages/conditions/condition-sub.js":
/*!***********************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/pages/conditions/condition-sub.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = ConditionSub;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _appUi = __webpack_require__(/*! @elementor/app-ui */ "@elementor/app-ui");
function ConditionSub(props) {
  if ('general' === props.name || !props.subOptions.length) {
    return '';
  }
  const onChange = e => props.updateConditions(props.id, {
    sub: e.target.value,
    subId: ''
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "e-site-editor-conditions__input-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_appUi.Select, {
    options: props.subOptions,
    value: props.sub,
    onChange: onChange
  }));
}
ConditionSub.propTypes = {
  updateConditions: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  sub: PropTypes.string.isRequired,
  subOptions: PropTypes.array.isRequired
};
ConditionSub.defaultProps = {
  sub: '',
  subOptions: {}
};

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/pages/conditions/condition-type.js":
/*!************************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/pages/conditions/condition-type.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = ConditionType;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _appUi = __webpack_require__(/*! @elementor/app-ui */ "@elementor/app-ui");
function ConditionType(props) {
  const wrapperRef = _react.default.createRef();
  const options = [{
    label: __('Include', 'elementor-pro'),
    value: 'include'
  }, {
    label: __('Exclude', 'elementor-pro'),
    value: 'exclude'
  }];
  const onChange = e => {
    props.updateConditions(props.id, {
      type: e.target.value
    });
  };
  _react.default.useEffect(() => {
    wrapperRef.current.setAttribute('data-elementor-condition-type', props.type);
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "e-site-editor-conditions__input-wrapper e-site-editor-conditions__input-wrapper--condition-type",
    ref: wrapperRef
  }, /*#__PURE__*/_react.default.createElement(_appUi.Select, {
    options: options,
    value: props.type,
    onChange: onChange
  }));
}
ConditionType.propTypes = {
  updateConditions: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};
ConditionType.defaultProps = {
  type: ''
};

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/pages/conditions/conditions-rows.js":
/*!*************************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/pages/conditions/conditions-rows.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = ConditionsRows;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js"));
var _conditions = __webpack_require__(/*! ../../context/conditions */ "../core/app/modules/site-editor/assets/js/context/conditions.js");
var _appUi = __webpack_require__(/*! @elementor/app-ui */ "@elementor/app-ui");
var _conditionType = _interopRequireDefault(__webpack_require__(/*! ./condition-type */ "../core/app/modules/site-editor/assets/js/pages/conditions/condition-type.js"));
var _conditionName = _interopRequireDefault(__webpack_require__(/*! ./condition-name */ "../core/app/modules/site-editor/assets/js/pages/conditions/condition-name.js"));
var _conditionSub = _interopRequireDefault(__webpack_require__(/*! ./condition-sub */ "../core/app/modules/site-editor/assets/js/pages/conditions/condition-sub.js"));
var _conditionSubId = _interopRequireDefault(__webpack_require__(/*! ./condition-sub-id */ "../core/app/modules/site-editor/assets/js/pages/conditions/condition-sub-id.js"));
var _conditionConflicts = _interopRequireDefault(__webpack_require__(/*! ./condition-conflicts */ "../core/app/modules/site-editor/assets/js/pages/conditions/condition-conflicts.js"));
var _conditionButtonPortal = _interopRequireDefault(__webpack_require__(/*! ./condition-button-portal */ "../core/app/modules/site-editor/assets/js/pages/conditions/condition-button-portal.js"));
function ConditionsRows(props) {
  const {
    conditions,
    createConditionItemInState: create,
    updateConditionItemState: update,
    removeConditionItemInState: remove,
    saveConditions: save,
    action,
    resetActionState
  } = _react.default.useContext(_conditions.Context);
  const rows = Object.values(conditions).map(condition => /*#__PURE__*/_react.default.createElement("div", {
    key: condition.id
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "e-site-editor-conditions__row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: `e-site-editor-conditions__row-controls ${condition.conflictErrors.length && 'e-site-editor-conditions__row-controls--error'}`
  }, /*#__PURE__*/_react.default.createElement(_conditionType.default, (0, _extends2.default)({}, condition, {
    updateConditions: update
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "e-site-editor-conditions__row-controls-inner"
  }, /*#__PURE__*/_react.default.createElement(_conditionName.default, (0, _extends2.default)({}, condition, {
    updateConditions: update
  })), /*#__PURE__*/_react.default.createElement(_conditionSub.default, (0, _extends2.default)({}, condition, {
    updateConditions: update
  })), /*#__PURE__*/_react.default.createElement(_conditionSubId.default, (0, _extends2.default)({}, condition, {
    updateConditions: update
  })))), /*#__PURE__*/_react.default.createElement(_appUi.Button, {
    className: "e-site-editor-conditions__remove-condition",
    text: __('Delete', 'elementor-pro'),
    icon: "eicon-close",
    hideText: true,
    onClick: () => remove(condition.id)
  })), /*#__PURE__*/_react.default.createElement(_conditionConflicts.default, {
    conflicts: condition.conflictErrors
  })));
  const SaveButton = () => {
    return /*#__PURE__*/_react.default.createElement(_appUi.Button, {
      variant: "contained",
      color: "primary",
      size: "lg",
      hideText: isSaving,
      icon: isSaving ? 'eicon-loading eicon-animation-spin' : '',
      text: __('Save & Close', 'elementor-pro'),
      onClick: () => save().then(props.onAfterSave)
    });
  };
  const isSaving = action.current === _conditions.ConditionsProvider.actions.SAVE && action.loading;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, action.error && /*#__PURE__*/_react.default.createElement(_appUi.Dialog, {
    text: action.error,
    dismissButtonText: __('Go Back', 'elementor-pro'),
    dismissButtonOnClick: resetActionState,
    approveButtonText: __('Learn More', 'elementor-pro'),
    approveButtonColor: "link",
    approveButtonUrl: "https://go.elementor.com/app-theme-builder-conditions-load-issue",
    approveButtonTarget: "_target"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "e-site-editor-conditions__rows"
  }, rows), /*#__PURE__*/_react.default.createElement("div", {
    className: "e-site-editor-conditions__add-button-container"
  }, /*#__PURE__*/_react.default.createElement(_appUi.Button, {
    className: "e-site-editor-conditions__add-button",
    variant: "contained",
    size: "lg",
    text: __('Add Condition', 'elementor-pro'),
    onClick: create
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "e-site-editor-conditions__footer"
  }, props?.loadPortal ? /*#__PURE__*/_react.default.createElement(_conditionButtonPortal.default, null, /*#__PURE__*/_react.default.createElement(SaveButton, null)) : /*#__PURE__*/_react.default.createElement(SaveButton, null)));
}
ConditionsRows.propTypes = {
  onAfterSave: PropTypes.func,
  loadPortal: PropTypes.bool
};

/***/ }),

/***/ "../modules/custom-code/assets/js/admin/publish-metabox/conditions-modal.js":
/*!**********************************************************************************!*\
  !*** ../modules/custom-code/assets/js/admin/publish-metabox/conditions-modal.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = ConditionsModal;
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _appUi = __webpack_require__(/*! @elementor/app-ui */ "@elementor/app-ui");
var _conditions = _interopRequireDefault(__webpack_require__(/*! ./conditions */ "../modules/custom-code/assets/js/admin/publish-metabox/conditions.js"));
var _conditionsConfig = _interopRequireDefault(__webpack_require__(/*! elementor-pro-app-modules/site-editor/assets/js/context/services/conditions-config */ "../core/app/modules/site-editor/assets/js/context/services/conditions-config.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * Publish metabox conditions ( 'Edit' modal ).
 */
function ConditionsModal() {
  const [showModal, setShowModal] = (0, _react.useState)(false),
    [data, setData] = (0, _react.useState)({
      conditions: null,
      instances: null
    }),
    isSavedOnce = (0, _react.useRef)(false),
    post = elementorProAdmin.customCode.post,
    elements = (0, _react.useMemo)(() => {
      return {
        $form: jQuery('#post'),
        $formConditions: jQuery('<input />'),
        $publishButton: jQuery('#publish'),
        title: {
          $label: jQuery('#title-prompt-text'),
          $input: jQuery('#title')
        }
      };
    }, []),
    onPostSubmit = () => {
      const {
        title
      } = elements;
      if (!title.$input.attr('value').length) {
        title.$label.addClass('screen-reader-text');
        title.$input.attr('value', __('Elementor Custom-Code #', 'elementor-pro') + elementorProAdmin.customCode.post.ID);
      }
    },
    onPublishClick = e => {
      if ('auto-draft' === post.post_status && !showModal && !isSavedOnce.current) {
        e.preventDefault();

        // Set default condition for new post.
        const conditions = [{
          name: 'general',
          sub: '',
          subId: '',
          type: 'include'
        }];
        setData(prevState => ({
          ...prevState,
          conditions
        }));
        setShowModal(true);
      }
    },
    onConditionsSaved = args => {
      const conditions = args.conditions,
        instances = Object.values(args.instances).join(','),
        {
          $form,
          $formConditions,
          $publishButton
        } = elements;
      isSavedOnce.current = true;
      setData(prevState => ({
        ...prevState,
        conditions,
        instances
      }));

      // Temporary workaround for applying conditions for draft custom code post.
      if ('auto-draft' === post.post_status || 'draft' === post.post_status) {
        $formConditions.attr('type', 'hidden').attr('name', '_conditions').attr('value', JSON.stringify(conditions)).appendTo($form);
      }
      $publishButton.trigger('click');
      setShowModal(false);
    },
    initData = async () => {
      const conditionsConfig = await _conditionsConfig.default.create();
      $e.data.get('site-editor/templates-conditions', {
        id: post.ID
      }, {
        refresh: true
      }).then(result => {
        // Since the 'state' format is different from db one.
        const conditions = Object.values(result.data).map(condition => ({
            type: condition.type,
            name: condition.name,
            sub: condition.sub_name,
            subId: condition.sub_id
          })),
          instances = Object.values(conditionsConfig.calculateInstances(conditions)).join(',');
        setData(prevState => ({
          ...prevState,
          conditions,
          instances
        }));
      });
    },
    bindEvents = () => {
      elements.$publishButton.on('click', onPublishClick);
      elements.$form.on('submit', onPostSubmit);
    };
  (0, _react.useEffect)(() => {
    initData();
    bindEvents();
  }, []);
  if (!post || !data.conditions) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_appUi.Text, {
      tag: "span"
    }, __('Loading', 'elementor')), /*#__PURE__*/_react.default.createElement(_appUi.Icon, {
      className: "spinner"
    }));
  }
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_appUi.Text, {
    tag: "span",
    className: "post-conditions-display"
  }, /*#__PURE__*/_react.default.createElement("b", null, data.instances + ' ')), /*#__PURE__*/_react.default.createElement(_appUi.Button, {
    onClick: () => setShowModal(true),
    text: __('Edit', 'elementor'),
    variant: "underlined"
  }), /*#__PURE__*/_react.default.createElement(_appUi.ModalProvider, {
    show: showModal,
    setShow: setShowModal,
    title: __('Publish Settings', 'elementor'),
    icon: "eps-app__logo eicon-elementor"
  }, /*#__PURE__*/_react.default.createElement(_appUi.CssGrid, {
    columns: 1,
    spacing: 700
  }, /*#__PURE__*/_react.default.createElement("section", null, /*#__PURE__*/_react.default.createElement(_conditions.default, {
    id: post.ID,
    status: post.post_status,
    conditions: data.conditions,
    onConditionsSaved: onConditionsSaved,
    onAfterSave: () => {}
  })))));
}
ConditionsModal.propTypes = {
  children: PropTypes.object // Disable parent requirement.
};

/***/ }),

/***/ "../modules/custom-code/assets/js/admin/publish-metabox/conditions.js":
/*!****************************************************************************!*\
  !*** ../modules/custom-code/assets/js/admin/publish-metabox/conditions.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Conditions;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _appUi = __webpack_require__(/*! @elementor/app-ui */ "@elementor/app-ui");
var _conditions = _interopRequireDefault(__webpack_require__(/*! elementor-pro-app-modules/site-editor/assets/js/context/conditions */ "../core/app/modules/site-editor/assets/js/context/conditions.js"));
var _conditionsRows = _interopRequireDefault(__webpack_require__(/*! elementor-pro-app-modules/site-editor/assets/js/pages/conditions/conditions-rows */ "../core/app/modules/site-editor/assets/js/pages/conditions/conditions-rows.js"));
function Conditions(props) {
  const currentTemplateProps = {
      ...props,
      defaultCondition: 'general'
    },
    onConditionsSaved = (id, args) => {
      $e.data.setCache($e.components.get('site-editor'), 'site-editor/templates-conditions', {
        id
      }, args.conditions);
      props.onConditionsSaved(args);
    };
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "e-site-editor-conditions"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "e-site-editor-conditions__header"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "e-site-editor-conditions__header-image",
    src: `${elementorAppProConfig.baseUrl}/modules/theme-builder/assets/images/conditions-tab.svg`,
    alt: __('Conditions', 'elementor-pro')
  }), /*#__PURE__*/_react.default.createElement(_appUi.Heading, {
    variant: "h1",
    tag: "h1"
  }, __('Where Do You Want to Display Your Code?', 'elementor-pro')), /*#__PURE__*/_react.default.createElement(_appUi.Text, {
    variant: "md"
  }, __('Set the conditions that determine where your code snippet is used throughout your site.', 'elementor-pro'), /*#__PURE__*/_react.default.createElement("br", null), __('For example, choose \'Entire Site\' to display the code snippet across your site.', 'elementor-pro'))), /*#__PURE__*/_react.default.createElement(_conditions.default, {
    validateConflicts: false,
    currentTemplate: currentTemplateProps,
    onConditionsSaved: onConditionsSaved
  }, /*#__PURE__*/_react.default.createElement(_conditionsRows.default, {
    onAfterSave: props.onAfterSave,
    loadPortal: false
  })));
}
Conditions.propTypes = {
  id: PropTypes.number,
  status: PropTypes.string.isRequired,
  conditions: PropTypes.array,
  onConditionsSaved: PropTypes.func,
  onAfterSave: PropTypes.func.isRequired
};
Conditions.defaultProps = {
  conditions: [],
  onConditionsSaved: () => {}
};

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

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = ReactDOM;

/***/ }),

/***/ "elementor-ai-admin":
/*!**********************************************!*\
  !*** external "__UNSTABLE__elementorAI.App" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = __UNSTABLE__elementorAI.App;

/***/ }),

/***/ "@elementor/app-ui":
/*!*********************************************!*\
  !*** external "elementorAppPackages.appUi" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = elementorAppPackages.appUi;

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
var exports = __webpack_exports__;
/*!*******************************************************!*\
  !*** ../modules/custom-code/assets/js/admin/admin.js ***!
  \*******************************************************/
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _component = _interopRequireDefault(__webpack_require__(/*! elementor-pro-app-modules/site-editor/assets/js/data/component */ "../core/app/modules/site-editor/assets/js/data/component.js"));
var _conditionsModal = _interopRequireDefault(__webpack_require__(/*! ./publish-metabox/conditions-modal */ "../modules/custom-code/assets/js/admin/publish-metabox/conditions-modal.js"));
var _elementorAiAdmin = _interopRequireDefault(__webpack_require__(/*! elementor-ai-admin */ "elementor-ai-admin"));
class CustomCode extends elementorModules.Module {
  constructor() {
    super();
    jQuery(this.initialize.bind(this));
  }
  initialize() {
    $e.components.register(new _component.default());

    // eslint-disable-next-line react/no-deprecated
    ReactDOM.render(/*#__PURE__*/_react.default.createElement(_conditionsModal.default, null), document.querySelector('.post-conditions'));
    this.addTipsyToFields();
    this.addDescription();
    this.addLocationChangeHandler();
    this.addOpenAIButton();
    this.setOptionsPlacementVisibility('elementor_body_end' === jQuery('#location').val());
  }
  addTipsyToFields() {
    jQuery('.elementor-field-label i[data-info]').tipsy({
      title() {
        return this.getAttribute('data-info');
      },
      gravity: () => 's'
    });
  }
  addDescription() {
    const description = '<p>' + __('Manage and create all of your custom code here.<br />Organize all of your custom code and incorporate code snippets in your site. Add tracking codes, meta titles, and other scripts. Set display conditions, locations, and priority all from one place.', 'elementor-pro') + '&nbsp;<a target="_blank" href="https://go.elementor.com/wp-dash-custom-code">' + __('Learn more', 'elementor-pro') + '</a>' + '</p>';
    jQuery(description).insertBefore('.wp-header-end');
  }
  addLocationChangeHandler() {
    jQuery('#location').on('change', e => {
      this.setOptionsPlacementVisibility('elementor_body_end' === e.target.value);
    });
  }
  addOpenAIButton() {
    const $buttonOpenAI = jQuery(`<button class="e-ai-button"><i class="eicon-ai"></i> ${__('Code with AI', 'elementor-pro')}</button>`);
    $buttonOpenAI.on('click', event => {
      event.preventDefault();
      const isRTL = elementorCommon.config.isRTL;
      const rootElement = document.createElement('div');
      document.body.append(rootElement);

      // eslint-disable-next-line react/no-deprecated
      ReactDOM.render(/*#__PURE__*/_react.default.createElement(_elementorAiAdmin.default, {
        type: 'code',
        getControlValue: () => document.querySelector('.CodeMirror').CodeMirror.getValue(),
        setControlValue: value => document.querySelector('.CodeMirror').CodeMirror.setValue(value),
        additionalOptions: {
          codeLanguage: 'html'
        },
        onClose: () => {
          ReactDOM.unmountComponentAtNode(rootElement); // eslint-disable-line react/no-deprecated
          rootElement.parentNode.removeChild(rootElement);
        },
        isRTL: isRTL
      }), rootElement);
    });
    jQuery('.elementor-field.location.elementor-field-select').after($buttonOpenAI);
  }
  setOptionsPlacementVisibility(state) {
    const $optionsPlacement = jQuery('.elementor-custom-code-options-placement');
    $optionsPlacement.toggleClass('show', state);
  }
}
exports["default"] = CustomCode;
elementorProAdmin.customCode = new CustomCode();
})();

/******/ })()
;
//# sourceMappingURL=custom-code.js.map
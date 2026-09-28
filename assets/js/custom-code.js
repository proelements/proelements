/*! pro-elements - v4.3.0 - 22-09-2026 */
(function(react, _wordpress_i18n, react_dom, _elementor_app_ui, elementor_ai_admin) {
	//#region \0rolldown/runtime.js
	var __create = Object.create;
	var __defProp$5 = Object.defineProperty;
	var __name = (target, value) => __defProp$5(target, "name", {
		value,
		configurable: true
	});
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp$5 = Object.prototype.hasOwnProperty;
	var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
	var __exportAll = (all, no_symbols) => {
		let target = {};
		for (var name in all) __defProp$5(target, name, {
			get: all[name],
			enumerable: true
		});
		if (!no_symbols) __defProp$5(target, Symbol.toStringTag, { value: "Module" });
		return target;
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
			key = keys[i];
			if (!__hasOwnProp$5.call(to, key) && key !== except) __defProp$5(to, key, {
				get: ((k) => from[k]).bind(null, key),
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp$5(target, "default", {
		value: mod,
		enumerable: true
	}) : target, mod));
	//#endregion
	react = __toESM(react);
	elementor_ai_admin = __toESM(elementor_ai_admin);
	//#region \0@oxc-project+runtime@0.140.0/helpers/esm/typeof.js
	function _typeof(o) {
		"@babel/helpers - typeof";
		return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
			return typeof o;
		} : function(o) {
			return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
		}, _typeof(o);
	}
	//#endregion
	//#region \0@oxc-project+runtime@0.140.0/helpers/esm/toPrimitive.js
	function toPrimitive(t, r) {
		if ("object" != _typeof(t) || !t) return t;
		var e = t[Symbol.toPrimitive];
		if (void 0 !== e) {
			var i = e.call(t, r || "default");
			if ("object" != _typeof(i)) return i;
			throw new TypeError("@@toPrimitive must return a primitive value.");
		}
		return ("string" === r ? String : Number)(t);
	}
	//#endregion
	//#region \0@oxc-project+runtime@0.140.0/helpers/esm/toPropertyKey.js
	function toPropertyKey(t) {
		var i = toPrimitive(t, "string");
		return "symbol" == _typeof(i) ? i : i + "";
	}
	//#endregion
	//#region \0@oxc-project+runtime@0.140.0/helpers/esm/defineProperty.js
	function _defineProperty(e, r, t) {
		return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
			value: t,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[r] = t, e;
	}
	//#endregion
	//#region core/app/modules/site-editor/assets/js/data/commands/templates.js
	var Templates = class extends $e.modules.CommandData {
		static getEndpointFormat() {
			return "site-editor/templates/{id}";
		}
	};
	_defineProperty(Templates, "signature", "site-editor/templates");
	//#endregion
	//#region core/app/modules/site-editor/assets/js/data/commands/conditions-config.js
	var ConditionsConfig$1 = class extends $e.modules.CommandData {
		static {
			__name(this, "ConditionsConfig");
		}
		static getEndpointFormat() {
			return "site-editor/conditions-config/{id}";
		}
	};
	_defineProperty(ConditionsConfig$1, "signature", "site-editor/conditions-config");
	//#endregion
	//#region core/app/modules/site-editor/assets/js/data/commands/templates-conditions.js
	var TemplatesConditions = class extends $e.modules.CommandData {
		static getEndpointFormat() {
			return "site-editor/templates-conditions/{id}";
		}
	};
	_defineProperty(TemplatesConditions, "signature", "site-editor/templates-conditions");
	//#endregion
	//#region core/app/modules/site-editor/assets/js/data/commands/templates-conditions-conflicts.js
	var TemplatesConditionsConflicts = class TemplatesConditionsConflicts extends $e.modules.CommandData {
		static getEndpointFormat() {
			return `${TemplatesConditionsConflicts.signature}/{id}`;
		}
	};
	_defineProperty(TemplatesConditionsConflicts, "signature", "site-editor/templates-conditions-conflicts");
	//#endregion
	//#region core/app/modules/site-editor/assets/js/data/commands/index.js
	var commands_exports = /* @__PURE__ */ __exportAll({
		ConditionsConfig: () => ConditionsConfig$1,
		Templates: () => Templates,
		TemplatesConditions: () => TemplatesConditions,
		TemplatesConditionsConflicts: () => TemplatesConditionsConflicts
	});
	//#endregion
	//#region core/app/modules/site-editor/assets/js/data/component.js
	var Component = class extends $e.modules.ComponentBase {
		getNamespace() {
			return this.constructor.namespace;
		}
		defaultData() {
			return this.importCommands(commands_exports);
		}
	};
	_defineProperty(Component, "namespace", "site-editor");
	//#endregion
	//#region node_modules/prop-types/lib/ReactPropTypesSecret.js
	/**
	* Copyright (c) 2013-present, Facebook, Inc.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*/
	var require_ReactPropTypesSecret = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
	}));
	//#endregion
	//#region node_modules/prop-types/factoryWithThrowingShims.js
	/**
	* Copyright (c) 2013-present, Facebook, Inc.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*/
	var require_factoryWithThrowingShims = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var ReactPropTypesSecret = require_ReactPropTypesSecret();
		function emptyFunction() {}
		function emptyFunctionWithReset() {}
		emptyFunctionWithReset.resetWarningCache = emptyFunction;
		module.exports = function() {
			function shim(props, propName, componentName, location, propFullName, secret) {
				if (secret === ReactPropTypesSecret) return;
				var err = /* @__PURE__ */ new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
				err.name = "Invariant Violation";
				throw err;
			}
			shim.isRequired = shim;
			function getShim() {
				return shim;
			}
			var ReactPropTypes = {
				array: shim,
				bigint: shim,
				bool: shim,
				func: shim,
				number: shim,
				object: shim,
				string: shim,
				symbol: shim,
				any: shim,
				arrayOf: getShim,
				element: shim,
				elementType: shim,
				instanceOf: getShim,
				node: shim,
				objectOf: getShim,
				oneOf: getShim,
				oneOfType: getShim,
				shape: getShim,
				exact: getShim,
				checkPropTypes: emptyFunctionWithReset,
				resetWarningCache: emptyFunction
			};
			ReactPropTypes.PropTypes = ReactPropTypes;
			return ReactPropTypes;
		};
	}));
	//#endregion
	//#region core/app/modules/site-editor/assets/js/context/models/condition.js
	var import_prop_types = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = require_factoryWithThrowingShims()();
	})))());
	var Condition = class Condition {
		constructor(args) {
			_defineProperty(this, "id", elementorCommon.helpers.getUniqueId());
			_defineProperty(this, "default", "");
			_defineProperty(this, "type", "include");
			_defineProperty(this, "name", "");
			_defineProperty(this, "sub", "");
			_defineProperty(this, "subId", "");
			_defineProperty(this, "options", []);
			_defineProperty(this, "subOptions", []);
			_defineProperty(this, "subIdAutocomplete", []);
			_defineProperty(this, "subIdOptions", []);
			_defineProperty(this, "conflictErrors", []);
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
			if (!Array.isArray(keys)) keys = [keys];
			keys.forEach((key) => {
				delete this[key];
			});
			return this;
		}
		only(keys) {
			if (!Array.isArray(keys)) keys = [keys];
			const keysToRemove = Object.keys(this).filter((conditionKey) => !keys.includes(conditionKey));
			this.remove(keysToRemove);
			return this;
		}
		toJson() {
			return JSON.stringify(this);
		}
		toString() {
			return this.forDb().filter((item) => item).join("/");
		}
		forDb() {
			return [
				this.type,
				this.name,
				this.sub,
				this.subId
			];
		}
		forContext() {
			return {
				type: this.type,
				name: this.name,
				sub: this.sub,
				subId: this.subId
			};
		}
	};
	//#endregion
	//#region core/app/modules/site-editor/assets/js/context/services/conditions-config.js
	var __defProp$4 = Object.defineProperty;
	var __defProps$4 = Object.defineProperties;
	var __getOwnPropDescs$4 = Object.getOwnPropertyDescriptors;
	var __getOwnPropSymbols$4 = Object.getOwnPropertySymbols;
	var __hasOwnProp$4 = Object.prototype.hasOwnProperty;
	var __propIsEnum$4 = Object.prototype.propertyIsEnumerable;
	var __defNormalProp$4 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$4(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value, "__defNormalProp");
	var __spreadValues$4 = /* @__PURE__ */ __name((a, b) => {
		for (var prop in b || (b = {})) if (__hasOwnProp$4.call(b, prop)) __defNormalProp$4(a, prop, b[prop]);
		if (__getOwnPropSymbols$4) {
			for (var prop of __getOwnPropSymbols$4(b)) if (__propIsEnum$4.call(b, prop)) __defNormalProp$4(a, prop, b[prop]);
		}
		return a;
	}, "__spreadValues");
	var __spreadProps$4 = /* @__PURE__ */ __name((a, b) => __defProps$4(a, __getOwnPropDescs$4(b)), "__spreadProps");
	var __publicField$1 = /* @__PURE__ */ __name((obj, key, value) => __defNormalProp$4(obj, typeof key !== "symbol" ? key + "" : key, value), "__publicField");
	var _ConditionsConfig = class _ConditionsConfig {
		constructor(config) {
			__publicField$1(this, "config", null);
			this.config = config;
		}
		/**
		* @return {Promise<ConditionsConfig>} Conditions config
		*/
		static create() {
			if (_ConditionsConfig.instance) return Promise.resolve(_ConditionsConfig.instance);
			return $e.data.get(ConditionsConfig$1.signature, {}, { refresh: true }).then((response) => {
				_ConditionsConfig.instance = new _ConditionsConfig(response.data);
				return _ConditionsConfig.instance;
			});
		}
		/**
		* Get main options for condition name.
		*
		* @return {Array} Condition options
		*/
		getOptions() {
			return this.getSubOptions("general", true).map(({ label, value }) => {
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
			if (!config) return [];
			return [{
				label: config.all_label,
				value: isSubItem ? itemName : ""
			}, ...config.sub_conditions.map((subName) => {
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
			var _a;
			const config = this.config[sub];
			if (!config || !("object" === typeof config.controls)) return {};
			const controls = Object.values(config.controls);
			if (!((_a = controls == null ? void 0 : controls[0]) == null ? void 0 : _a.autocomplete)) return {};
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
				if ("exclude" === condition.type) return current;
				const key = condition.sub || condition.name;
				const config = this.config[key];
				if (!config) return current;
				const instanceLabel = condition.subId ? `${config.label} #${condition.subId}` : config.all_label;
				return __spreadProps$4(__spreadValues$4({}, current), { [key]: instanceLabel });
			}, {});
			if (0 === Object.keys(instances).length) instances = [(0, _wordpress_i18n.__)("No instances", "elementor-pro")];
			return instances;
		}
	};
	__publicField$1(_ConditionsConfig, "instance");
	var ConditionsConfig = _ConditionsConfig;
	//#endregion
	//#region \0@oxc-project+runtime@0.140.0/helpers/esm/objectSpread2.js
	function ownKeys(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(r2) {
				return Object.getOwnPropertyDescriptor(e, r2).enumerable;
			})), t.push.apply(t, o);
		}
		return t;
	}
	function _objectSpread2(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
				_defineProperty(e, r2, t[r2]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
				Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
			});
		}
		return e;
	}
	//#endregion
	//#region core/app/modules/site-editor/assets/js/context/base-context.js
	var BaseContext = class extends react.default.Component {
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
			return handler().then((response) => {
				this.resetActionState();
				return Promise.resolve(response);
			}).catch((error) => {
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
			return this.setState((prev) => ({ action: _objectSpread2(_objectSpread2({}, prev.action), data) }));
		}
		resetActionState() {
			this.updateActionState({
				current: null,
				loading: false,
				error: null,
				errorMeta: {}
			});
		}
	};
	//#endregion
	//#region core/app/modules/site-editor/assets/js/context/conditions.js
	var __defProp$3 = Object.defineProperty;
	var __defProps$3 = Object.defineProperties;
	var __getOwnPropDescs$3 = Object.getOwnPropertyDescriptors;
	var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
	var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
	var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
	var __defNormalProp$3 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$3(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value, "__defNormalProp");
	var __spreadValues$3 = /* @__PURE__ */ __name((a, b) => {
		for (var prop in b || (b = {})) if (__hasOwnProp$3.call(b, prop)) __defNormalProp$3(a, prop, b[prop]);
		if (__getOwnPropSymbols$3) {
			for (var prop of __getOwnPropSymbols$3(b)) if (__propIsEnum$3.call(b, prop)) __defNormalProp$3(a, prop, b[prop]);
		}
		return a;
	}, "__spreadValues");
	var __spreadProps$3 = /* @__PURE__ */ __name((a, b) => __defProps$3(a, __getOwnPropDescs$3(b)), "__spreadProps");
	var __publicField = (obj, key, value) => __defNormalProp$3(obj, typeof key !== "symbol" ? key + "" : key, value);
	var Context = react.default.createContext();
	var _ConditionsProvider = class _ConditionsProvider extends BaseContext {
		/**
		* ConditionsProvider constructor.
		*
		* @param {any} props
		*/
		constructor(props) {
			super(props);
			/**
			* Holds the conditions config object.
			*
			* @type {ConditionsConfig}
			*/
			__publicField(this, "conditionsConfig", null);
			this.state = __spreadProps$3(__spreadValues$3({}, this.state), {
				conditionsFetched: false,
				conditions: {},
				updateConditionItemState: this.updateConditionItemState.bind(this),
				removeConditionItemInState: this.removeConditionItemInState.bind(this),
				createConditionItemInState: this.createConditionItemInState.bind(this),
				findConditionItemInState: this.findConditionItemInState.bind(this),
				saveConditions: this.saveConditions.bind(this)
			});
		}
		/**
		* Fetch the conditions config, then normalize the conditions and then setup titles for
		* the subIds.
		*/
		componentDidMount() {
			this.executeAction(_ConditionsProvider.actions.FETCH_CONFIG, () => ConditionsConfig.create()).then((conditionsConfig) => this.conditionsConfig = conditionsConfig).then(this.normalizeConditionsState.bind(this)).then(() => {
				this.setSubIdTitles.bind(this);
				this.setState({ conditionsFetched: true });
			});
		}
		componentDidUpdate(prevProps, prevState) {
			if (!prevState.conditionsFetched && this.state.conditionsFetched) this.setSubIdTitles();
		}
		/**
		* Execute a request to save the template conditions.
		*
		* @return {any} Saved conditions
		*/
		saveConditions() {
			const conditions = Object.values(this.state.conditions).map((condition) => condition.forDb());
			return this.executeAction(_ConditionsProvider.actions.SAVE, () => $e.data.update(TemplatesConditions.signature, { conditions }, { id: this.props.currentTemplate.id })).then(() => {
				const contextConditions = Object.values(this.state.conditions).map((condition) => condition.forContext());
				this.props.onConditionsSaved(this.props.currentTemplate.id, {
					conditions: contextConditions,
					instances: this.conditionsConfig.calculateInstances(Object.values(this.state.conditions)),
					isActive: !!(Object.keys(this.state.conditions).length && "publish" === this.props.currentTemplate.status)
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
			return this.executeAction(_ConditionsProvider.actions.CHECK_CONFLICTS, () => $e.data.get(TemplatesConditionsConflicts.signature, {
				post_id: this.props.currentTemplate.id,
				condition: condition.clone().toString()
			})).then((response) => this.updateConditionItemState(condition.id, { conflictErrors: Object.values(response.data) }, false));
		}
		/**
		* Fetching subId titles.
		*
		* @param {any} condition
		* @return {Promise<unknown>} Titles
		*/
		fetchSubIdsTitles(condition) {
			return new Promise((resolve) => {
				return elementorCommon.ajax.loadObjects({
					action: "query_control_value_titles",
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
					const conditionObj = new Condition(__spreadProps$3(__spreadValues$3({}, condition), {
						default: this.props.currentTemplate.defaultCondition,
						options: this.conditionsConfig.getOptions(),
						subOptions: this.conditionsConfig.getSubOptions(condition.name),
						subIdAutocomplete: this.conditionsConfig.getSubIdAutocomplete(condition.sub),
						subIdOptions: condition.subId ? [{
							value: condition.subId,
							label: ""
						}] : []
					}));
					return __spreadProps$3(__spreadValues$3({}, current), { [conditionObj.id]: conditionObj });
				}, {});
			}).then(() => {
				Object.values(this.state.conditions).forEach((condition) => this.checkConflicts(condition));
			});
		}
		/**
		* Set titles to the subIds,
		* for the first render of the component.
		*/
		setSubIdTitles() {
			return Object.values(this.state.conditions).forEach((condition) => {
				if (!condition.subId) return;
				return this.fetchSubIdsTitles(condition).then((response) => this.updateConditionItemState(condition.id, { subIdOptions: [{
					label: Object.values(response)[0],
					value: condition.subId
				}] }, false));
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
			if (args.name) args.subOptions = this.conditionsConfig.getSubOptions(args.name);
			if (args.sub || args.name) {
				args.subIdAutocomplete = this.conditionsConfig.getSubIdAutocomplete(args.sub);
				args.subIdOptions = [];
			}
			this.updateConditionsState((prev) => {
				const condition = prev[id];
				return __spreadProps$3(__spreadValues$3({}, prev), { [id]: condition.clone().set(args) });
			}).then(() => {
				if (shouldCheckConflicts) this.checkConflicts(this.findConditionItemInState(id));
			});
		}
		/**
		* Remove a condition item from the state.
		*
		* @param {any} id
		*/
		removeConditionItemInState(id) {
			this.updateConditionsState((prev) => {
				const newConditions = __spreadValues$3({}, prev);
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
			const defaultCondition = this.props.currentTemplate.defaultCondition;
			const newCondition = new Condition({
				name: defaultCondition,
				default: defaultCondition,
				options: this.conditionsConfig.getOptions(),
				subOptions: this.conditionsConfig.getSubOptions(defaultCondition),
				subIdAutocomplete: this.conditionsConfig.getSubIdAutocomplete("")
			});
			this.updateConditionsState((prev) => __spreadProps$3(__spreadValues$3({}, prev), { [newCondition.id]: newCondition })).then(() => {
				if (shouldCheckConflicts) this.checkConflicts(newCondition);
			});
		}
		/**
		* Find a condition item from the conditions state.
		*
		* @param {any} id
		* @return {Condition|null} Condition
		*/
		findConditionItemInState(id) {
			return Object.values(this.state.conditions).find((c) => c.id === id);
		}
		/**
		* Update the whole conditions state.
		*
		* @param {Function} callback
		* @return {Promise<undefined>} Conditions state
		*/
		updateConditionsState(callback) {
			return new Promise((resolve) => this.setState((prev) => ({ conditions: callback(prev.conditions) }), resolve));
		}
		/**
		* Renders the provider.
		*
		* @return {any} Element
		*/
		render() {
			if (this.state.action.current === _ConditionsProvider.actions.FETCH_CONFIG) {
				if (this.state.error) return /* @__PURE__ */ react.default.createElement("h3", null, (0, _wordpress_i18n.__)("Error:", "elementor-pro"), " ", this.state.error);
				if (this.state.loading) return /* @__PURE__ */ react.default.createElement("h3", null, (0, _wordpress_i18n.__)("Loading", "elementor-pro"), "...");
			}
			return /* @__PURE__ */ react.default.createElement(Context.Provider, { value: this.state }, this.props.children);
		}
	};
	__publicField(_ConditionsProvider, "propTypes", {
		children: import_prop_types.default.any.isRequired,
		currentTemplate: import_prop_types.default.object.isRequired,
		onConditionsSaved: import_prop_types.default.func.isRequired,
		validateConflicts: import_prop_types.default.bool
	});
	__publicField(_ConditionsProvider, "defaultProps", { validateConflicts: true });
	__publicField(_ConditionsProvider, "actions", {
		FETCH_CONFIG: "fetch-config",
		SAVE: "save",
		CHECK_CONFLICTS: "check-conflicts"
	});
	var ConditionsProvider = _ConditionsProvider;
	//#endregion
	//#region core/app/modules/site-editor/assets/js/pages/conditions/condition-type.js
	function ConditionType(props) {
		const wrapperRef = react.default.createRef();
		const options = [{
			label: (0, _wordpress_i18n.__)("Include", "elementor-pro"),
			value: "include"
		}, {
			label: (0, _wordpress_i18n.__)("Exclude", "elementor-pro"),
			value: "exclude"
		}];
		const onChange = (e) => {
			props.updateConditions(props.id, { type: e.target.value });
		};
		react.default.useEffect(() => {
			wrapperRef.current.setAttribute("data-elementor-condition-type", props.type);
		});
		return /* @__PURE__ */ react.default.createElement("div", {
			className: "e-site-editor-conditions__input-wrapper e-site-editor-conditions__input-wrapper--condition-type",
			ref: wrapperRef
		}, /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Select, {
			options,
			value: props.type,
			onChange
		}));
	}
	ConditionType.propTypes = {
		updateConditions: import_prop_types.default.func.isRequired,
		id: import_prop_types.default.string.isRequired,
		type: import_prop_types.default.string.isRequired
	};
	ConditionType.defaultProps = { type: "" };
	//#endregion
	//#region core/app/modules/site-editor/assets/js/pages/conditions/condition-name.js
	function ConditionName(props) {
		if ("general" !== props.default) return "";
		const onChange = (e) => props.updateConditions(props.id, {
			name: e.target.value,
			sub: "",
			subId: ""
		});
		return /* @__PURE__ */ react.default.createElement("div", { className: "e-site-editor-conditions__input-wrapper" }, /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Select, {
			options: props.options,
			value: props.name,
			onChange
		}));
	}
	ConditionName.propTypes = {
		updateConditions: import_prop_types.default.func.isRequired,
		id: import_prop_types.default.string.isRequired,
		name: import_prop_types.default.string.isRequired,
		options: import_prop_types.default.array.isRequired,
		default: import_prop_types.default.string.isRequired
	};
	ConditionName.defaultProps = { name: "" };
	//#endregion
	//#region core/app/modules/site-editor/assets/js/pages/conditions/condition-sub.js
	function ConditionSub(props) {
		if ("general" === props.name || !props.subOptions.length) return "";
		const onChange = (e) => props.updateConditions(props.id, {
			sub: e.target.value,
			subId: ""
		});
		return /* @__PURE__ */ react.default.createElement("div", { className: "e-site-editor-conditions__input-wrapper" }, /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Select, {
			options: props.subOptions,
			value: props.sub,
			onChange
		}));
	}
	ConditionSub.propTypes = {
		updateConditions: import_prop_types.default.func.isRequired,
		id: import_prop_types.default.string.isRequired,
		name: import_prop_types.default.string.isRequired,
		sub: import_prop_types.default.string.isRequired,
		subOptions: import_prop_types.default.array.isRequired
	};
	ConditionSub.defaultProps = {
		sub: "",
		subOptions: {}
	};
	//#endregion
	//#region core/app/modules/site-editor/assets/js/pages/conditions/condition-sub-id.js
	function ConditionSubId(props) {
		const settings = react.default.useMemo(() => Object.keys(props.subIdAutocomplete).length ? getSettings(props.subIdAutocomplete) : null, [props.subIdAutocomplete]);
		if (!props.sub || !settings) return "";
		const onChange = (e) => props.updateConditions(props.id, { subId: e.target.value });
		return /* @__PURE__ */ react.default.createElement("div", { className: "e-site-editor-conditions__input-wrapper" }, /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Select2, {
			onChange,
			value: props.subId,
			settings,
			options: props.subIdOptions
		}));
	}
	function getSettings(autocomplete) {
		return {
			allowClear: false,
			placeholder: (0, _wordpress_i18n.__)("All", "elementor-pro"),
			dir: elementorCommon.config.isRTL ? "rtl" : "ltr",
			ajax: {
				transport(params, success, failure) {
					return elementorCommon.ajax.addRequest("pro_panel_posts_control_filter_autocomplete", {
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
		subIdAutocomplete: import_prop_types.default.object,
		id: import_prop_types.default.string.isRequired,
		sub: import_prop_types.default.string,
		subId: import_prop_types.default.string,
		updateConditions: import_prop_types.default.func,
		subIdOptions: import_prop_types.default.array
	};
	ConditionSubId.defaultProps = {
		subId: "",
		subIdOptions: []
	};
	//#endregion
	//#region core/app/modules/site-editor/assets/js/pages/conditions/condition-conflicts.js
	function ConditionConflicts(props) {
		if (!props.conflicts.length) return "";
		const conflictLinks = props.conflicts.map((conflict) => {
			return /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Button, {
				key: conflict.template_id,
				target: "_blank",
				url: conflict.edit_url,
				text: conflict.template_title
			});
		});
		return /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Text, {
			className: "e-site-editor-conditions__conflict",
			variant: "sm"
		}, (0, _wordpress_i18n.sprintf)((0, _wordpress_i18n.__)("We noticed that you already applied %s with the same condition.", "elementor-pro"), conflictLinks), /* @__PURE__ */ react.default.createElement("br", null), (0, _wordpress_i18n.__)("To continue, set different conditions for each so they don't conflict.", "elementor-pro"));
	}
	ConditionConflicts.propTypes = { conflicts: import_prop_types.default.array.isRequired };
	//#endregion
	//#region core/app/modules/site-editor/assets/js/pages/conditions/condition-button-portal.js
	var ConditionButtonPortal = (props) => {
		const [shouldCreatePortal, setShouldCreatePortal] = (0, react.useState)(false), portalRoot = document.getElementById("portal-root");
		(0, react.useEffect)(() => {
			setShouldCreatePortal(!!portalRoot);
		}, [portalRoot]);
		return shouldCreatePortal ? (0, react_dom.createPortal)(props.children, portalRoot) : null;
	};
	ConditionButtonPortal.propTypes = { children: import_prop_types.oneOfType([import_prop_types.node, import_prop_types.string]) };
	//#endregion
	//#region core/app/modules/site-editor/assets/js/pages/conditions/conditions-rows.js
	var __defProp$2 = Object.defineProperty;
	var __defProps$2 = Object.defineProperties;
	var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
	var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
	var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
	var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
	var __defNormalProp$2 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$2(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value, "__defNormalProp");
	var __spreadValues$2 = /* @__PURE__ */ __name((a, b) => {
		for (var prop in b || (b = {})) if (__hasOwnProp$2.call(b, prop)) __defNormalProp$2(a, prop, b[prop]);
		if (__getOwnPropSymbols$2) {
			for (var prop of __getOwnPropSymbols$2(b)) if (__propIsEnum$2.call(b, prop)) __defNormalProp$2(a, prop, b[prop]);
		}
		return a;
	}, "__spreadValues");
	var __spreadProps$2 = /* @__PURE__ */ __name((a, b) => __defProps$2(a, __getOwnPropDescs$2(b)), "__spreadProps");
	function ConditionsRows(props) {
		const { conditions, createConditionItemInState: create, updateConditionItemState: update, removeConditionItemInState: remove, saveConditions: save, action, resetActionState } = react.default.useContext(Context);
		const rows = Object.values(conditions).map((condition) => /* @__PURE__ */ react.default.createElement("div", { key: condition.id }, /* @__PURE__ */ react.default.createElement("div", { className: "e-site-editor-conditions__row" }, /* @__PURE__ */ react.default.createElement("div", { className: `e-site-editor-conditions__row-controls ${condition.conflictErrors.length && "e-site-editor-conditions__row-controls--error"}` }, /* @__PURE__ */ react.default.createElement(ConditionType, __spreadProps$2(__spreadValues$2({}, condition), { updateConditions: update })), /* @__PURE__ */ react.default.createElement("div", { className: "e-site-editor-conditions__row-controls-inner" }, /* @__PURE__ */ react.default.createElement(ConditionName, __spreadProps$2(__spreadValues$2({}, condition), { updateConditions: update })), /* @__PURE__ */ react.default.createElement(ConditionSub, __spreadProps$2(__spreadValues$2({}, condition), { updateConditions: update })), /* @__PURE__ */ react.default.createElement(ConditionSubId, __spreadProps$2(__spreadValues$2({}, condition), { updateConditions: update })))), /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Button, {
			className: "e-site-editor-conditions__remove-condition",
			text: (0, _wordpress_i18n.__)("Delete", "elementor-pro"),
			icon: "eicon-close",
			hideText: true,
			onClick: () => remove(condition.id)
		})), /* @__PURE__ */ react.default.createElement(ConditionConflicts, { conflicts: condition.conflictErrors })));
		const SaveButton = () => {
			return /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Button, {
				variant: "contained",
				color: "primary",
				size: "lg",
				hideText: isSaving,
				icon: isSaving ? "eicon-loading eicon-animation-spin" : "",
				text: (0, _wordpress_i18n.__)("Save & Close", "elementor-pro"),
				onClick: () => save().then(props.onAfterSave)
			});
		};
		const isSaving = action.current === ConditionsProvider.actions.SAVE && action.loading;
		return /* @__PURE__ */ react.default.createElement(react.default.Fragment, null, action.error && /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Dialog, {
			text: action.error,
			dismissButtonText: (0, _wordpress_i18n.__)("Go Back", "elementor-pro"),
			dismissButtonOnClick: resetActionState,
			approveButtonText: (0, _wordpress_i18n.__)("Learn More", "elementor-pro"),
			approveButtonColor: "link",
			approveButtonUrl: "https://go.elementor.com/app-theme-builder-conditions-load-issue",
			approveButtonTarget: "_target"
		}), /* @__PURE__ */ react.default.createElement("div", { className: "e-site-editor-conditions__rows" }, rows), /* @__PURE__ */ react.default.createElement("div", { className: "e-site-editor-conditions__add-button-container" }, /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Button, {
			className: "e-site-editor-conditions__add-button",
			variant: "contained",
			size: "lg",
			text: (0, _wordpress_i18n.__)("Add Condition", "elementor-pro"),
			onClick: create
		})), /* @__PURE__ */ react.default.createElement("div", { className: "e-site-editor-conditions__footer" }, (props == null ? void 0 : props.loadPortal) ? /* @__PURE__ */ react.default.createElement(ConditionButtonPortal, null, /* @__PURE__ */ react.default.createElement(SaveButton, null)) : /* @__PURE__ */ react.default.createElement(SaveButton, null)));
	}
	ConditionsRows.propTypes = {
		onAfterSave: import_prop_types.default.func,
		loadPortal: import_prop_types.default.bool
	};
	//#endregion
	//#region modules/custom-code/assets/js/admin/publish-metabox/conditions.js
	var __defProp$1 = Object.defineProperty;
	var __defProps$1 = Object.defineProperties;
	var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
	var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
	var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
	var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
	var __defNormalProp$1 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$1(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value, "__defNormalProp");
	var __spreadValues$1 = /* @__PURE__ */ __name((a, b) => {
		for (var prop in b || (b = {})) if (__hasOwnProp$1.call(b, prop)) __defNormalProp$1(a, prop, b[prop]);
		if (__getOwnPropSymbols$1) {
			for (var prop of __getOwnPropSymbols$1(b)) if (__propIsEnum$1.call(b, prop)) __defNormalProp$1(a, prop, b[prop]);
		}
		return a;
	}, "__spreadValues");
	var __spreadProps$1 = /* @__PURE__ */ __name((a, b) => __defProps$1(a, __getOwnPropDescs$1(b)), "__spreadProps");
	function Conditions(props) {
		const currentTemplateProps = __spreadProps$1(__spreadValues$1({}, props), { defaultCondition: "general" });
		const onConditionsSaved = (id, args) => {
			$e.data.setCache($e.components.get("site-editor"), "site-editor/templates-conditions", { id }, args.conditions);
			props.onConditionsSaved(args);
		};
		return /* @__PURE__ */ react.default.createElement("section", { className: "e-site-editor-conditions" }, /* @__PURE__ */ react.default.createElement("div", { className: "e-site-editor-conditions__header" }, /* @__PURE__ */ react.default.createElement("img", {
			className: "e-site-editor-conditions__header-image",
			src: `${elementorAppProConfig.baseUrl}/modules/theme-builder/assets/images/conditions-tab.svg`,
			alt: (0, _wordpress_i18n.__)("Conditions", "elementor-pro")
		}), /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Heading, {
			variant: "h1",
			tag: "h1"
		}, (0, _wordpress_i18n.__)("Where Do You Want to Display Your Code?", "elementor-pro")), /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Text, { variant: "md" }, (0, _wordpress_i18n.__)("Set the conditions that determine where your code snippet is used throughout your site.", "elementor-pro"), /* @__PURE__ */ react.default.createElement("br", null), (0, _wordpress_i18n.__)("For example, choose 'Entire Site' to display the code snippet across your site.", "elementor-pro"))), /* @__PURE__ */ react.default.createElement(ConditionsProvider, {
			validateConflicts: false,
			currentTemplate: currentTemplateProps,
			onConditionsSaved
		}, /* @__PURE__ */ react.default.createElement(ConditionsRows, {
			onAfterSave: props.onAfterSave,
			loadPortal: false
		})));
	}
	Conditions.propTypes = {
		id: import_prop_types.default.number,
		status: import_prop_types.default.string.isRequired,
		conditions: import_prop_types.default.array,
		onConditionsSaved: import_prop_types.default.func,
		onAfterSave: import_prop_types.default.func.isRequired
	};
	Conditions.defaultProps = {
		conditions: [],
		onConditionsSaved: () => {}
	};
	//#endregion
	//#region modules/custom-code/assets/js/admin/publish-metabox/conditions-modal.js
	var __defProp = Object.defineProperty;
	var __defProps = Object.defineProperties;
	var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
	var __getOwnPropSymbols = Object.getOwnPropertySymbols;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __propIsEnum = Object.prototype.propertyIsEnumerable;
	var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value;
	var __spreadValues = (a, b) => {
		for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
		if (__getOwnPropSymbols) {
			for (var prop of __getOwnPropSymbols(b)) if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
		}
		return a;
	};
	var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
	var __async = (__this, __arguments, generator) => {
		return new Promise((resolve, reject) => {
			var fulfilled = (value) => {
				try {
					step(generator.next(value));
				} catch (e) {
					reject(e);
				}
			};
			var rejected = (value) => {
				try {
					step(generator.throw(value));
				} catch (e) {
					reject(e);
				}
			};
			var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
			step((generator = generator.apply(__this, __arguments)).next());
		});
	};
	function ConditionsModal() {
		const [showModal, setShowModal] = (0, react.useState)(false), [data, setData] = (0, react.useState)({
			conditions: null,
			instances: null
		}), isSavedOnce = (0, react.useRef)(false), post = elementorProAdmin.customCode.post, elements = (0, react.useMemo)(() => {
			return {
				$form: jQuery("#post"),
				$formConditions: jQuery("<input />"),
				$publishButton: jQuery("#publish"),
				title: {
					$label: jQuery("#title-prompt-text"),
					$input: jQuery("#title")
				}
			};
		}, []), onPostSubmit = () => {
			const { title } = elements;
			if (!title.$input.attr("value").length) {
				title.$label.addClass("screen-reader-text");
				title.$input.attr("value", (0, _wordpress_i18n.__)("Elementor Custom-Code #", "elementor-pro") + elementorProAdmin.customCode.post.ID);
			}
		}, onPublishClick = (e) => {
			if ("auto-draft" === post.post_status && !showModal && !isSavedOnce.current) {
				e.preventDefault();
				const conditions = [{
					name: "general",
					sub: "",
					subId: "",
					type: "include"
				}];
				setData((prevState) => __spreadProps(__spreadValues({}, prevState), { conditions }));
				setShowModal(true);
			}
		}, onConditionsSaved = (args) => {
			const conditions = args.conditions, instances = Object.values(args.instances).join(","), { $form, $formConditions, $publishButton } = elements;
			isSavedOnce.current = true;
			setData((prevState) => __spreadProps(__spreadValues({}, prevState), {
				conditions,
				instances
			}));
			if ("auto-draft" === post.post_status || "draft" === post.post_status) $formConditions.attr("type", "hidden").attr("name", "_conditions").attr("value", JSON.stringify(conditions)).appendTo($form);
			$publishButton.trigger("click");
			setShowModal(false);
		}, initData = () => __async(null, null, function* () {
			const conditionsConfig = yield ConditionsConfig.create();
			$e.data.get("site-editor/templates-conditions", { id: post.ID }, { refresh: true }).then((result) => {
				const conditions = Object.values(result.data).map((condition) => ({
					type: condition.type,
					name: condition.name,
					sub: condition.sub_name,
					subId: condition.sub_id
				}));
				const instances = Object.values(conditionsConfig.calculateInstances(conditions)).join(",");
				setData((prevState) => __spreadProps(__spreadValues({}, prevState), {
					conditions,
					instances
				}));
			});
		}), bindEvents = () => {
			elements.$publishButton.on("click", onPublishClick);
			elements.$form.on("submit", onPostSubmit);
		};
		(0, react.useEffect)(() => {
			initData();
			bindEvents();
		}, []);
		if (!post || !data.conditions) return /* @__PURE__ */ react.default.createElement(react.default.Fragment, null, /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Text, { tag: "span" }, (0, _wordpress_i18n.__)("Loading", "elementor-pro")), /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Icon, { className: "spinner" }));
		return /* @__PURE__ */ react.default.createElement(react.default.Fragment, null, /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Text, {
			tag: "span",
			className: "post-conditions-display"
		}, /* @__PURE__ */ react.default.createElement("b", null, data.instances + " ")), /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Button, {
			onClick: () => setShowModal(true),
			text: (0, _wordpress_i18n.__)("Edit", "elementor-pro"),
			variant: "underlined"
		}), (0, react_dom.createPortal)(/* @__PURE__ */ react.default.createElement("div", { className: "e-custom-code-conditions-modal" }, /* @__PURE__ */ react.default.createElement(_elementor_app_ui.ModalProvider, {
			show: showModal,
			setShow: setShowModal,
			title: (0, _wordpress_i18n.__)("Publish Settings", "elementor-pro"),
			icon: "eps-app__logo eicon-elementor"
		}, /* @__PURE__ */ react.default.createElement(_elementor_app_ui.CssGrid, {
			columns: 1,
			spacing: 700
		}, /* @__PURE__ */ react.default.createElement("section", null, /* @__PURE__ */ react.default.createElement(Conditions, {
			id: post.ID,
			status: post.post_status,
			conditions: data.conditions,
			onConditionsSaved,
			onAfterSave: () => {}
		}))))), document.body));
	}
	ConditionsModal.propTypes = { children: import_prop_types.default.object };
	//#endregion
	//#region modules/custom-code/assets/js/admin/admin.js
	var CustomCode = class extends elementorModules.Module {
		constructor() {
			super();
			jQuery(this.initialize.bind(this));
		}
		initialize() {
			$e.components.register(new Component());
			ReactDOM.render(/* @__PURE__ */ react.default.createElement(ConditionsModal, null), document.querySelector(".post-conditions"));
			this.addTipsyToFields();
			this.addDescription();
			this.addLocationChangeHandler();
			this.addOpenAIButton();
			this.setOptionsPlacementVisibility("elementor_body_end" === jQuery("#location").val());
		}
		addTipsyToFields() {
			jQuery(".elementor-field-label i[data-info]").tipsy({
				title() {
					return this.getAttribute("data-info");
				},
				gravity: () => "s"
			});
		}
		addDescription() {
			const description = "<p>" + (0, _wordpress_i18n.__)("Manage and create all of your custom code here.<br />Organize all of your custom code and incorporate code snippets in your site. Add tracking codes, meta titles, and other scripts. Set display conditions, locations, and priority all from one place.", "elementor-pro") + "&nbsp;<a target=\"_blank\" href=\"https://go.elementor.com/wp-dash-custom-code\">" + (0, _wordpress_i18n.__)("Learn more", "elementor-pro") + "</a></p>";
			jQuery(description).insertBefore(".wp-header-end");
		}
		addLocationChangeHandler() {
			jQuery("#location").on("change", (e) => {
				this.setOptionsPlacementVisibility("elementor_body_end" === e.target.value);
			});
		}
		addOpenAIButton() {
			const $buttonOpenAI = jQuery(`<button class="e-ai-button"><i class="eicon-ai"></i> ${(0, _wordpress_i18n.__)("Code with AI", "elementor-pro")}</button>`);
			$buttonOpenAI.on("click", (event) => {
				event.preventDefault();
				const isRTL = elementorCommon.config.isRTL;
				const rootElement = document.createElement("div");
				document.body.append(rootElement);
				ReactDOM.render(/* @__PURE__ */ react.default.createElement(elementor_ai_admin.default, {
					type: "code",
					getControlValue: () => document.querySelector(".CodeMirror").CodeMirror.getValue(),
					setControlValue: (value) => document.querySelector(".CodeMirror").CodeMirror.setValue(value),
					additionalOptions: { codeLanguage: "html" },
					onClose: () => {
						ReactDOM.unmountComponentAtNode(rootElement);
						rootElement.parentNode.removeChild(rootElement);
					},
					isRTL
				}), rootElement);
			});
			jQuery(".elementor-field.location.elementor-field-select").after($buttonOpenAI);
		}
		setOptionsPlacementVisibility(state) {
			jQuery(".elementor-custom-code-options-placement").toggleClass("show", state);
		}
	};
	elementorProAdmin.customCode = new CustomCode();
	//#endregion
})(React, wp.i18n, ReactDOM, elementorAppPackages.appUi, __UNSTABLE__elementorAI.App);

//# sourceMappingURL=custom-code.js.map
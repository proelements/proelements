/*! pro-elements - v4.3.0 - 22-09-2026 */
this.elementorV2 = this.elementorV2 || {};
(function(exports, _elementor_license_api, _elementor_editor_controls, react, _wordpress_i18n, _elementor_icons, _elementor_ui, _elementor_editor_props, _elementor_schema, _elementor_editor_ui) {
	Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
	//#region \0rolldown/runtime.js
	var __create = Object.create;
	var __defProp = Object.defineProperty;
	var __name = (target, value) => __defProp(target, "name", {
		value,
		configurable: true
	});
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
			key = keys[i];
			if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
				get: ((k) => from[k]).bind(null, key),
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
		value: mod,
		enumerable: true
	}) : target, mod));
	//#endregion
	let react$1 = __toESM(react, 1);
	react = __toESM(react);
	//#region packages/packages/pro/editor-controls-extended/src/extend-transition-properties.ts
	function extendTransitionProperties(isDisabled = false) {
		if (!_elementor_editor_controls.transitionProperties || _elementor_editor_controls.transitionProperties.length === 0) return;
		_elementor_editor_controls.transitionProperties.forEach((category) => {
			category.properties.forEach((property) => {
				if (property.value !== "all") property.isDisabled = isDisabled;
			});
		});
		_elementor_editor_controls.transitionsItemsList.splice(0, _elementor_editor_controls.transitionsItemsList.length, ..._elementor_editor_controls.transitionProperties.map((category) => ({
			label: category.label,
			items: category.properties.map((property) => property.label)
		})));
	}
	//#endregion
	//#region \0@oxc-project+runtime@0.140.0/helpers/esm/asyncToGenerator.js
	function asyncGeneratorStep(n, t, e, r, o, a, c) {
		try {
			var i = n[a](c);
			var u = i.value;
		} catch (n) {
			e(n);
			return;
		}
		i.done ? t(u) : Promise.resolve(u).then(r, o);
	}
	function _asyncToGenerator(n) {
		return function() {
			var t = this;
			var e = arguments;
			return new Promise(function(r, o) {
				var a = n.apply(t, e);
				function _next(n) {
					asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
				}
				function _throw(n) {
					asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
				}
				_next(void 0);
			});
		};
	}
	//#endregion
	//#region packages/packages/pro/editor-controls-extended/src/init.ts
	function init$1() {
		return _init.apply(this, arguments);
	}
	__name(init$1, "init");
	function _init() {
		_init = _asyncToGenerator(function* () {
			const [isExpired, features] = yield Promise.all([(0, _elementor_license_api.fetchLicenseStatus)().catch(() => false), (0, _elementor_license_api.fetchTierFeatures)().catch(() => [])]);
			if (features.includes("transitions")) extendTransitionProperties(isExpired);
		});
		return _init.apply(this, arguments);
	}
	//#endregion
	//#region packages/packages/pro/editor-controls-extended/src/controls/attributes-control.tsx
	var AttributesControl = (0, _elementor_editor_controls.createControl)(() => {
		const getHelperText = (key, value) => {
			if (value && !key) return { keyHelper: (0, _wordpress_i18n.__)("Empty attribute names aren't valid and won't render on the page.", "elementor-pro") };
			return {};
		};
		return /* @__PURE__ */ react.createElement(_elementor_editor_controls.KeyValueControl, {
			keyName: (0, _wordpress_i18n.__)("Name", "elementor-pro"),
			valueName: (0, _wordpress_i18n.__)("Value", "elementor-pro"),
			regexKey: "^[a-zA-Z0-9_-]*$",
			validationErrorMessage: (0, _wordpress_i18n.__)("Names can only use letters, numbers, dashes (-) and underscores (_).", "elementor-pro"),
			getHelperText
		});
	});
	//#endregion
	//#region packages/packages/pro/editor-controls-extended/src/controls/options-control.tsx
	var OptionsControl = (0, _elementor_editor_controls.createControl)(() => {
		return /* @__PURE__ */ react.createElement(_elementor_editor_controls.KeyValueControl, {
			keyName: (0, _wordpress_i18n.__)("Name", "elementor-pro"),
			valueName: (0, _wordpress_i18n.__)("Value", "elementor-pro")
		});
	});
	//#endregion
	//#region packages/packages/pro/editor-controls-extended/src/prop-types/display-conditions.ts
	var unknownChildrenSchema$1 = _elementor_schema.z.any().nullable();
	var displayConditionsPropTypeUtil = (0, _elementor_editor_props.createPropUtils)("display-conditions", _elementor_schema.z.array(unknownChildrenSchema$1));
	//#endregion
	//#region packages/packages/pro/editor-controls-extended/src/utils/display-conditions-utils.ts
	function transformV3ToV4(displayConditions) {
		if (!Array.isArray(displayConditions) || !(displayConditions === null || displayConditions === void 0 ? void 0 : displayConditions.length)) return null;
		const transformed = displayConditions.filter((conditionGroup) => !!(conditionGroup === null || conditionGroup === void 0 ? void 0 : conditionGroup.length)).map((conditionGroup) => ({
			$$type: "condition-group",
			value: conditionGroup.map((condition) => _elementor_editor_props.stringPropTypeUtil.create(JSON.stringify(condition)))
		}));
		return transformed.length ? transformed : null;
	}
	function transformV4ToV3(value) {
		var _conditionGroups$map;
		const conditionGroups = value;
		return getStructuredConditions((_conditionGroups$map = conditionGroups === null || conditionGroups === void 0 ? void 0 : conditionGroups.map((group) => group.value.map((conditions) => {
			var _stringPropTypeUtil$e;
			return JSON.parse((_stringPropTypeUtil$e = _elementor_editor_props.stringPropTypeUtil.extract(conditions)) !== null && _stringPropTypeUtil$e !== void 0 ? _stringPropTypeUtil$e : "[]");
		}))) !== null && _conditionGroups$map !== void 0 ? _conditionGroups$map : null);
	}
	function shouldConvertConditionsStructure(conditions) {
		return !!(conditions === null || conditions === void 0 ? void 0 : conditions.length) && !Array.isArray(conditions === null || conditions === void 0 ? void 0 : conditions[0]);
	}
	function getStructuredConditions(conditions) {
		return shouldConvertConditionsStructure(conditions) ? [conditions] : conditions;
	}
	//#endregion
	//#region packages/packages/pro/editor-controls-extended/src/controls/display-conditions-control.tsx
	var OPEN_MODAL_EVENT = "elementor/display-conditions/open";
	var CLOSE_MODAL_EVENT = "elementor/display-conditions/close";
	var SET_CACHE_NOTICE_STATUS_EVENT = "elementor/display-conditions/set-cache-notice-status";
	var ariaLabel = (0, _wordpress_i18n.__)("Display Conditions", "elementor-pro");
	function setCacheNoticeStatus() {
		return _setCacheNoticeStatus.apply(this, arguments);
	}
	function _setCacheNoticeStatus() {
		_setCacheNoticeStatus = _asyncToGenerator(function* () {
			return new Promise((resolve, reject) => {
				window.dispatchEvent(new CustomEvent(SET_CACHE_NOTICE_STATUS_EVENT, { detail: {
					resolve,
					reject
				} }));
			});
		});
		return _setCacheNoticeStatus.apply(this, arguments);
	}
	var DisplayConditionsControl = (0, _elementor_editor_controls.createControl)(({ disabled = false }) => {
		const { setValue, value: displayConditionsValue } = (0, _elementor_editor_controls.useBoundProp)(displayConditionsPropTypeUtil);
		const [isModalOpen, setIsModalOpen] = (0, react.useState)(false);
		const hasValue = !!(displayConditionsValue === null || displayConditionsValue === void 0 ? void 0 : displayConditionsValue.length);
		const setControlValue = (value) => setValue(transformV3ToV4(JSON.parse(value !== null && value !== void 0 ? value : "[]")));
		const getControlValue = () => {
			var _transformV4ToV;
			return (_transformV4ToV = transformV4ToV3(displayConditionsValue)) !== null && _transformV4ToV !== void 0 ? _transformV4ToV : [];
		};
		const onClose = () => {
			setIsModalOpen(false);
			window.dispatchEvent(new CustomEvent(CLOSE_MODAL_EVENT));
		};
		const conditions = getControlValue();
		const openConditionsModal = () => {
			setIsModalOpen(true);
			window.dispatchEvent(new CustomEvent(OPEN_MODAL_EVENT, { detail: { props: {
				getControlValue,
				setControlValue,
				onClose,
				setCacheNoticeStatus
			} } }));
		};
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			spacing: 2,
			sx: {
				justifyContent: "flex-end",
				alignItems: "center"
			}
		}, disabled && /* @__PURE__ */ react.createElement(_elementor_ui.Chip, {
			icon: /* @__PURE__ */ react.createElement(_elementor_icons.CrownFilledIcon, { fontSize: "tiny" }),
			size: "tiny",
			color: "promotion",
			variant: "standard",
			sx: {
				width: "20px",
				"& .MuiChip-label": { display: "none" }
			}
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, {
			title: ariaLabel,
			placement: "top"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			cursor: disabled ? "not-allowed" : "pointer",
			display: "inline-flex"
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.ToggleButton, {
			value: JSON.stringify(conditions),
			size: "tiny",
			variant: "outline",
			"aria-pressed": hasValue,
			"aria-expanded": isModalOpen,
			selected: hasValue,
			"aria-haspopup": "dialog",
			"aria-label": ariaLabel,
			onClick: openConditionsModal,
			disabled,
			sx: { pointerEvents: disabled ? "none" : "auto" },
			"data-behavior": "display-conditions"
		}, /* @__PURE__ */ react.createElement(_elementor_icons.SitemapIcon, { fontSize: "tiny" }))))));
	});
	//#endregion
	//#region packages/packages/pro/editor-controls-extended/src/prop-types/condition-group.ts
	var unknownChildrenSchema = _elementor_schema.z.any().nullable();
	var conditionGroupPropTypeUtil = (0, _elementor_editor_props.createPropUtils)("condition-group", _elementor_schema.z.array(unknownChildrenSchema));
	//#endregion
	//#region node_modules/@monaco-editor/loader/lib/es/_virtual/_rollupPluginBabelHelpers.js
	function _arrayLikeToArray(r, a) {
		(null == a || a > r.length) && (a = r.length);
		for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
		return n;
	}
	function _arrayWithHoles(r) {
		if (Array.isArray(r)) return r;
	}
	function _defineProperty$2(e, r, t) {
		return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
			value: t,
			enumerable: true,
			configurable: true,
			writable: true
		}) : e[r] = t, e;
	}
	__name(_defineProperty$2, "_defineProperty");
	function _iterableToArrayLimit(r, l) {
		var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
		if (null != t) {
			var e;
			var n;
			var i;
			var u;
			var a = [];
			var f = true;
			var o = false;
			try {
				if (i = (t = t.call(r)).next, 0 === l);
				else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
			} catch (r) {
				o = true, n = r;
			} finally {
				try {
					if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
				} finally {
					if (o) throw n;
				}
			}
			return a;
		}
	}
	function _nonIterableRest() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	function ownKeys$2(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(r) {
				return Object.getOwnPropertyDescriptor(e, r).enumerable;
			})), t.push.apply(t, o);
		}
		return t;
	}
	__name(ownKeys$2, "ownKeys");
	function _objectSpread2$2(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys$2(Object(t), true).forEach(function(r) {
				_defineProperty$2(e, r, t[r]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
			});
		}
		return e;
	}
	__name(_objectSpread2$2, "_objectSpread2");
	function _objectWithoutProperties(e, t) {
		if (null == e) return {};
		var o;
		var r;
		var i = _objectWithoutPropertiesLoose(e, t);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
		}
		return i;
	}
	function _objectWithoutPropertiesLoose(r, e) {
		if (null == r) return {};
		var t = {};
		for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
			if (-1 !== e.indexOf(n)) continue;
			t[n] = r[n];
		}
		return t;
	}
	function _slicedToArray(r, e) {
		return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
	}
	function _toPrimitive(t, r) {
		if ("object" != typeof t || !t) return t;
		var e = t[Symbol.toPrimitive];
		if (void 0 !== e) {
			var i = e.call(t, r);
			if ("object" != typeof i) return i;
			throw new TypeError("@@toPrimitive must return a primitive value.");
		}
		return ("string" === r ? String : Number)(t);
	}
	function _toPropertyKey(t) {
		var i = _toPrimitive(t, "string");
		return "symbol" == typeof i ? i : i + "";
	}
	function _unsupportedIterableToArray(r, a) {
		if (r) {
			if ("string" == typeof r) return _arrayLikeToArray(r, a);
			var t = {}.toString.call(r).slice(8, -1);
			return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
		}
	}
	//#endregion
	//#region node_modules/state-local/lib/es/state-local.js
	function _defineProperty$1(obj, key, value) {
		if (key in obj) Object.defineProperty(obj, key, {
			value,
			enumerable: true,
			configurable: true,
			writable: true
		});
		else obj[key] = value;
		return obj;
	}
	__name(_defineProperty$1, "_defineProperty");
	function ownKeys$1(object, enumerableOnly) {
		var keys = Object.keys(object);
		if (Object.getOwnPropertySymbols) {
			var symbols = Object.getOwnPropertySymbols(object);
			if (enumerableOnly) symbols = symbols.filter(function(sym) {
				return Object.getOwnPropertyDescriptor(object, sym).enumerable;
			});
			keys.push.apply(keys, symbols);
		}
		return keys;
	}
	__name(ownKeys$1, "ownKeys");
	function _objectSpread2$1(target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i] != null ? arguments[i] : {};
			if (i % 2) ownKeys$1(Object(source), true).forEach(function(key) {
				_defineProperty$1(target, key, source[key]);
			});
			else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
			else ownKeys$1(Object(source)).forEach(function(key) {
				Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
			});
		}
		return target;
	}
	__name(_objectSpread2$1, "_objectSpread2");
	function compose$1() {
		for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) fns[_key] = arguments[_key];
		return function(x) {
			return fns.reduceRight(function(y, f) {
				return f(y);
			}, x);
		};
	}
	__name(compose$1, "compose");
	function curry$1(fn) {
		return function curried() {
			var _this = this;
			for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
			return args.length >= fn.length ? fn.apply(this, args) : function() {
				for (var _len3 = arguments.length, nextArgs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) nextArgs[_key3] = arguments[_key3];
				return curried.apply(_this, [].concat(args, nextArgs));
			};
		};
	}
	__name(curry$1, "curry");
	function isObject$1(value) {
		return {}.toString.call(value).includes("Object");
	}
	__name(isObject$1, "isObject");
	function isEmpty(obj) {
		return !Object.keys(obj).length;
	}
	function isFunction(value) {
		return typeof value === "function";
	}
	function hasOwnProperty(object, property) {
		return Object.prototype.hasOwnProperty.call(object, property);
	}
	function validateChanges(initial, changes) {
		if (!isObject$1(changes)) errorHandler$1("changeType");
		if (Object.keys(changes).some(function(field) {
			return !hasOwnProperty(initial, field);
		})) errorHandler$1("changeField");
		return changes;
	}
	function validateSelector(selector) {
		if (!isFunction(selector)) errorHandler$1("selectorType");
	}
	function validateHandler(handler) {
		if (!(isFunction(handler) || isObject$1(handler))) errorHandler$1("handlerType");
		if (isObject$1(handler) && Object.values(handler).some(function(_handler) {
			return !isFunction(_handler);
		})) errorHandler$1("handlersType");
	}
	function validateInitial(initial) {
		if (!initial) errorHandler$1("initialIsRequired");
		if (!isObject$1(initial)) errorHandler$1("initialType");
		if (isEmpty(initial)) errorHandler$1("initialContent");
	}
	function throwError$1(errorMessages, type) {
		throw new Error(errorMessages[type] || errorMessages["default"]);
	}
	__name(throwError$1, "throwError");
	var errorHandler$1 = curry$1(throwError$1)({
		initialIsRequired: "initial state is required",
		initialType: "initial state should be an object",
		initialContent: "initial state shouldn't be an empty object",
		handlerType: "handler should be an object or a function",
		handlersType: "all handlers should be a functions",
		selectorType: "selector should be a function",
		changeType: "provided value of changes should be an object",
		changeField: "it seams you want to change a field in the state which is not specified in the \"initial\" state",
		"default": "an unknown error accured in `state-local` package"
	});
	var validators$1 = {
		changes: validateChanges,
		selector: validateSelector,
		handler: validateHandler,
		initial: validateInitial
	};
	function create(initial) {
		var handler = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		validators$1.initial(initial);
		validators$1.handler(handler);
		var state = { current: initial };
		var didUpdate = curry$1(didStateUpdate)(state, handler);
		var update = curry$1(updateState)(state);
		var validate = curry$1(validators$1.changes)(initial);
		var getChanges = curry$1(extractChanges)(state);
		function getState() {
			var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(state) {
				return state;
			};
			validators$1.selector(selector);
			return selector(state.current);
		}
		function setState(causedChanges) {
			compose$1(didUpdate, update, validate, getChanges)(causedChanges);
		}
		return [getState, setState];
	}
	function extractChanges(state, causedChanges) {
		return isFunction(causedChanges) ? causedChanges(state.current) : causedChanges;
	}
	function updateState(state, changes) {
		state.current = _objectSpread2$1(_objectSpread2$1({}, state.current), changes);
		return changes;
	}
	function didStateUpdate(state, handler, changes) {
		isFunction(handler) ? handler(state.current) : Object.keys(changes).forEach(function(field) {
			var _handler$field;
			return (_handler$field = handler[field]) === null || _handler$field === void 0 ? void 0 : _handler$field.call(handler, state.current[field]);
		});
		return changes;
	}
	var index = { create };
	//#endregion
	//#region node_modules/@monaco-editor/loader/lib/es/config/index.js
	var config$1 = { paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs" } };
	//#endregion
	//#region node_modules/@monaco-editor/loader/lib/es/utils/curry.js
	function curry(fn) {
		return function curried() {
			var _this = this;
			for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
			return args.length >= fn.length ? fn.apply(this, args) : function() {
				for (var _len2 = arguments.length, nextArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) nextArgs[_key2] = arguments[_key2];
				return curried.apply(_this, [].concat(args, nextArgs));
			};
		};
	}
	//#endregion
	//#region node_modules/@monaco-editor/loader/lib/es/utils/isObject.js
	function isObject(value) {
		return {}.toString.call(value).includes("Object");
	}
	//#endregion
	//#region node_modules/@monaco-editor/loader/lib/es/validators/index.js
	/**
	* validates the configuration object and informs about deprecation
	* @param {Object} config - the configuration object 
	* @return {Object} config - the validated configuration object
	*/
	function validateConfig(config) {
		if (!config) errorHandler("configIsRequired");
		if (!isObject(config)) errorHandler("configType");
		if (config.urls) {
			informAboutDeprecation();
			return { paths: { vs: config.urls.monacoBase } };
		}
		return config;
	}
	/**
	* logs deprecation message
	*/
	function informAboutDeprecation() {
		console.warn(errorMessages.deprecation);
	}
	function throwError(errorMessages, type) {
		throw new Error(errorMessages[type] || errorMessages["default"]);
	}
	var errorMessages = {
		configIsRequired: "the configuration object is required",
		configType: "the configuration object should be an object",
		"default": "an unknown error accured in `@monaco-editor/loader` package",
		deprecation: "Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "
	};
	var errorHandler = curry(throwError)(errorMessages);
	var validators = { config: validateConfig };
	//#endregion
	//#region node_modules/@monaco-editor/loader/lib/es/utils/compose.js
	var compose = function compose() {
		for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) fns[_key] = arguments[_key];
		return function(x) {
			return fns.reduceRight(function(y, f) {
				return f(y);
			}, x);
		};
	};
	//#endregion
	//#region node_modules/@monaco-editor/loader/lib/es/utils/deepMerge.js
	function merge(target, source) {
		Object.keys(source).forEach(function(key) {
			if (source[key] instanceof Object) {
				if (target[key]) Object.assign(source[key], merge(target[key], source[key]));
			}
		});
		return _objectSpread2$2(_objectSpread2$2({}, target), source);
	}
	//#endregion
	//#region node_modules/@monaco-editor/loader/lib/es/utils/makeCancelable.js
	var CANCELATION_MESSAGE = {
		type: "cancelation",
		msg: "operation is manually canceled"
	};
	function makeCancelable(promise) {
		var hasCanceled_ = false;
		var wrappedPromise = new Promise(function(resolve, reject) {
			promise.then(function(val) {
				return hasCanceled_ ? reject(CANCELATION_MESSAGE) : resolve(val);
			});
			promise["catch"](reject);
		});
		return wrappedPromise.cancel = function() {
			return hasCanceled_ = true;
		}, wrappedPromise;
	}
	//#endregion
	//#region node_modules/@monaco-editor/loader/lib/es/loader/index.js
	var _excluded = ["monaco"];
	/** the local state of the module */
	var _state$create2 = _slicedToArray(index.create({
		config: config$1,
		isInitialized: false,
		resolve: null,
		reject: null,
		monaco: null
	}), 2);
	var getState = _state$create2[0];
	var setState = _state$create2[1];
	/**
	* set the loader configuration
	* @param {Object} config - the configuration object
	*/
	function config(globalConfig) {
		var _validators$config = validators.config(globalConfig);
		var monaco = _validators$config.monaco;
		var config = _objectWithoutProperties(_validators$config, _excluded);
		setState(function(state) {
			return {
				config: merge(state.config, config),
				monaco
			};
		});
	}
	/**
	* handles the initialization of the monaco-editor
	* @return {Promise} - returns an instance of monaco (with a cancelable promise)
	*/
	function init() {
		var state = getState(function(_ref) {
			return {
				monaco: _ref.monaco,
				isInitialized: _ref.isInitialized,
				resolve: _ref.resolve
			};
		});
		if (!state.isInitialized) {
			setState({ isInitialized: true });
			if (state.monaco) {
				state.resolve(state.monaco);
				return makeCancelable(wrapperPromise);
			}
			if (window.monaco && window.monaco.editor) {
				storeMonacoInstance(window.monaco);
				state.resolve(window.monaco);
				return makeCancelable(wrapperPromise);
			}
			compose(injectScripts, getMonacoLoaderScript)(configureLoader);
		}
		return makeCancelable(wrapperPromise);
	}
	/**
	* injects provided scripts into the document.body
	* @param {Object} script - an HTML script element
	* @return {Object} - the injected HTML script element
	*/
	function injectScripts(script) {
		return document.body.appendChild(script);
	}
	/**
	* creates an HTML script element with/without provided src
	* @param {string} [src] - the source path of the script
	* @return {Object} - the created HTML script element
	*/
	function createScript(src) {
		var script = document.createElement("script");
		return src && (script.src = src), script;
	}
	/**
	* creates an HTML script element with the monaco loader src
	* @return {Object} - the created HTML script element
	*/
	function getMonacoLoaderScript(configureLoader) {
		var state = getState(function(_ref2) {
			return {
				config: _ref2.config,
				reject: _ref2.reject
			};
		});
		var loaderScript = createScript("".concat(state.config.paths.vs, "/loader.js"));
		loaderScript.onload = function() {
			return configureLoader();
		};
		loaderScript.onerror = state.reject;
		return loaderScript;
	}
	/**
	* configures the monaco loader
	*/
	function configureLoader() {
		var state = getState(function(_ref3) {
			return {
				config: _ref3.config,
				resolve: _ref3.resolve,
				reject: _ref3.reject
			};
		});
		var require = window.require;
		require.config(state.config);
		require(["vs/editor/editor.main"], function(loaded) {
			var monaco = loaded.m || loaded;
			storeMonacoInstance(monaco);
			state.resolve(monaco);
		}, function(error) {
			state.reject(error);
		});
	}
	/**
	* store monaco instance in local state
	*/
	function storeMonacoInstance(monaco) {
		if (!getState().monaco) setState({ monaco });
	}
	/**
	* internal helper function
	* extracts stored monaco instance
	* @return {Object|null} - the monaco instance
	*/
	function __getMonacoInstance() {
		return getState(function(_ref4) {
			return _ref4.monaco;
		});
	}
	var wrapperPromise = new Promise(function(resolve, reject) {
		return setState({
			resolve,
			reject
		});
	});
	var loader = {
		config,
		init,
		__getMonacoInstance
	};
	//#endregion
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
	//#region node_modules/@monaco-editor/react/dist/index.mjs
	var v = {
		wrapper: {
			display: "flex",
			position: "relative",
			textAlign: "initial"
		},
		fullWidth: { width: "100%" },
		hide: { display: "none" }
	};
	var Y = { container: {
		display: "flex",
		height: "100%",
		width: "100%",
		justifyContent: "center",
		alignItems: "center"
	} };
	function Me({ children: e }) {
		return react$1.default.createElement("div", { style: Y.container }, e);
	}
	var $ = Me;
	function Ee({ width: e, height: r, isEditorReady: n, loading: t, _ref: a, className: m, wrapperProps: E }) {
		return react$1.default.createElement("section", _objectSpread2({ style: _objectSpread2(_objectSpread2({}, v.wrapper), {}, {
			width: e,
			height: r
		}) }, E), !n && react$1.default.createElement($, null, t), react$1.default.createElement("div", {
			ref: a,
			style: _objectSpread2(_objectSpread2({}, v.fullWidth), !n && v.hide),
			className: m
		}));
	}
	var H = (0, react$1.memo)(Ee);
	function Ce(e) {
		(0, react$1.useEffect)(e, []);
	}
	var k = Ce;
	function he(e, r, n = !0) {
		let t = (0, react$1.useRef)(!0);
		(0, react$1.useEffect)(t.current || !n ? () => {
			t.current = !1;
		} : e, r);
	}
	var l = he;
	function D() {}
	function h(e, r, n, t) {
		return De(e, t) || be(e, r, n, t);
	}
	function De(e, r) {
		return e.editor.getModel(te(e, r));
	}
	function be(e, r, n, t) {
		return e.editor.createModel(r, n, t ? te(e, t) : void 0);
	}
	function te(e, r) {
		return e.Uri.parse(r);
	}
	function Oe({ original: e, modified: r, language: n, originalLanguage: t, modifiedLanguage: a, originalModelPath: m, modifiedModelPath: E, keepCurrentOriginalModel: g = !1, keepCurrentModifiedModel: N = !1, theme: x = "light", loading: P = "Loading...", options: y = {}, height: V = "100%", width: z = "100%", className: F, wrapperProps: j = {}, beforeMount: A = D, onMount: q = D }) {
		let [M, O] = (0, react$1.useState)(!1), [T, s] = (0, react$1.useState)(!0), u = (0, react$1.useRef)(null), c = (0, react$1.useRef)(null), w = (0, react$1.useRef)(null), d = (0, react$1.useRef)(q), o = (0, react$1.useRef)(A), b = (0, react$1.useRef)(!1);
		k(() => {
			let i = loader.init();
			return i.then((f) => (c.current = f) && s(!1)).catch((f) => (f === null || f === void 0 ? void 0 : f.type) !== "cancelation" && console.error("Monaco initialization: error:", f)), () => u.current ? I() : i.cancel();
		}), l(() => {
			if (u.current && c.current) {
				let i = u.current.getOriginalEditor();
				let f = h(c.current, e || "", t || n || "text", m || "");
				f !== i.getModel() && i.setModel(f);
			}
		}, [m], M), l(() => {
			if (u.current && c.current) {
				let i = u.current.getModifiedEditor();
				let f = h(c.current, r || "", a || n || "text", E || "");
				f !== i.getModel() && i.setModel(f);
			}
		}, [E], M), l(() => {
			let i = u.current.getModifiedEditor();
			i.getOption(c.current.editor.EditorOption.readOnly) ? i.setValue(r || "") : r !== i.getValue() && (i.executeEdits("", [{
				range: i.getModel().getFullModelRange(),
				text: r || "",
				forceMoveMarkers: !0
			}]), i.pushUndoStop());
		}, [r], M), l(() => {
			var _u$current;
			(_u$current = u.current) === null || _u$current === void 0 || (_u$current = _u$current.getModel()) === null || _u$current === void 0 || _u$current.original.setValue(e || "");
		}, [e], M), l(() => {
			let { original: i, modified: f } = u.current.getModel();
			c.current.editor.setModelLanguage(i, t || n || "text"), c.current.editor.setModelLanguage(f, a || n || "text");
		}, [
			n,
			t,
			a
		], M), l(() => {
			var _c$current;
			(_c$current = c.current) === null || _c$current === void 0 || _c$current.editor.setTheme(x);
		}, [x], M), l(() => {
			var _u$current2;
			(_u$current2 = u.current) === null || _u$current2 === void 0 || _u$current2.updateOptions(y);
		}, [y], M);
		let L = (0, react$1.useCallback)(() => {
			var _u$current3;
			if (!c.current) return;
			o.current(c.current);
			let i = h(c.current, e || "", t || n || "text", m || "");
			let f = h(c.current, r || "", a || n || "text", E || "");
			(_u$current3 = u.current) === null || _u$current3 === void 0 || _u$current3.setModel({
				original: i,
				modified: f
			});
		}, [
			n,
			r,
			a,
			e,
			t,
			m,
			E
		]);
		let U = (0, react$1.useCallback)(() => {
			var _c$current2;
			!b.current && w.current && (u.current = c.current.editor.createDiffEditor(w.current, _objectSpread2({ automaticLayout: !0 }, y)), L(), (_c$current2 = c.current) === null || _c$current2 === void 0 || _c$current2.editor.setTheme(x), O(!0), b.current = !0);
		}, [
			y,
			x,
			L
		]);
		(0, react$1.useEffect)(() => {
			M && d.current(u.current, c.current);
		}, [M]), (0, react$1.useEffect)(() => {
			!T && !M && U();
		}, [
			T,
			M,
			U
		]);
		function I() {
			var _u$current4;
			var _i$original;
			var _i$modified;
			var _u$current5;
			let i = (_u$current4 = u.current) === null || _u$current4 === void 0 ? void 0 : _u$current4.getModel();
			g || i === null || i === void 0 || (_i$original = i.original) === null || _i$original === void 0 || _i$original.dispose(), N || i === null || i === void 0 || (_i$modified = i.modified) === null || _i$modified === void 0 || _i$modified.dispose(), (_u$current5 = u.current) === null || _u$current5 === void 0 || _u$current5.dispose();
		}
		return react$1.default.createElement(H, {
			width: z,
			height: V,
			isEditorReady: M,
			loading: P,
			_ref: w,
			className: F,
			wrapperProps: j
		});
	}
	(0, react$1.memo)(Oe);
	function He(e) {
		let r = (0, react$1.useRef)();
		return (0, react$1.useEffect)(() => {
			r.current = e;
		}, [e]), r.current;
	}
	var se = He;
	var _ = /* @__PURE__ */ new Map();
	function Ve({ defaultValue: e, defaultLanguage: r, defaultPath: n, value: t, language: a, path: m, theme: E = "light", line: g, loading: N = "Loading...", options: x = {}, overrideServices: P = {}, saveViewState: y = !0, keepCurrentModel: V = !1, width: z = "100%", height: F = "100%", className: j, wrapperProps: A = {}, beforeMount: q = D, onMount: M = D, onChange: O, onValidate: T = D }) {
		let [s, u] = (0, react$1.useState)(!1), [c, w] = (0, react$1.useState)(!0), d = (0, react$1.useRef)(null), o = (0, react$1.useRef)(null), b = (0, react$1.useRef)(null), L = (0, react$1.useRef)(M), U = (0, react$1.useRef)(q), I = (0, react$1.useRef)(), i = (0, react$1.useRef)(t), f = se(m), Q = (0, react$1.useRef)(!1), B = (0, react$1.useRef)(!1);
		k(() => {
			let p = loader.init();
			return p.then((R) => (d.current = R) && w(!1)).catch((R) => (R === null || R === void 0 ? void 0 : R.type) !== "cancelation" && console.error("Monaco initialization: error:", R)), () => o.current ? pe() : p.cancel();
		}), l(() => {
			var _o$current;
			var _o$current2;
			var _o$current3;
			var _o$current4;
			let p = h(d.current, e || t || "", r || a || "", m || n || "");
			p !== ((_o$current = o.current) === null || _o$current === void 0 ? void 0 : _o$current.getModel()) && (y && _.set(f, (_o$current2 = o.current) === null || _o$current2 === void 0 ? void 0 : _o$current2.saveViewState()), (_o$current3 = o.current) === null || _o$current3 === void 0 || _o$current3.setModel(p), y && ((_o$current4 = o.current) === null || _o$current4 === void 0 || _o$current4.restoreViewState(_.get(m))));
		}, [m], s), l(() => {
			var _o$current5;
			(_o$current5 = o.current) === null || _o$current5 === void 0 || _o$current5.updateOptions(x);
		}, [x], s), l(() => {
			!o.current || t === void 0 || (o.current.getOption(d.current.editor.EditorOption.readOnly) ? o.current.setValue(t) : t !== o.current.getValue() && (B.current = !0, o.current.executeEdits("", [{
				range: o.current.getModel().getFullModelRange(),
				text: t,
				forceMoveMarkers: !0
			}]), o.current.pushUndoStop(), B.current = !1));
		}, [t], s), l(() => {
			var _o$current6;
			var _d$current;
			let p = (_o$current6 = o.current) === null || _o$current6 === void 0 ? void 0 : _o$current6.getModel();
			p && a && ((_d$current = d.current) === null || _d$current === void 0 || _d$current.editor.setModelLanguage(p, a));
		}, [a], s), l(() => {
			var _o$current7;
			g !== void 0 && ((_o$current7 = o.current) === null || _o$current7 === void 0 || _o$current7.revealLine(g));
		}, [g], s), l(() => {
			var _d$current2;
			(_d$current2 = d.current) === null || _d$current2 === void 0 || _d$current2.editor.setTheme(E);
		}, [E], s);
		let X = (0, react$1.useCallback)(() => {
			if (!(!b.current || !d.current) && !Q.current) {
				var _d$current3;
				U.current(d.current);
				let p = m || n;
				let R = h(d.current, t || e || "", r || a || "", p || "");
				o.current = (_d$current3 = d.current) === null || _d$current3 === void 0 ? void 0 : _d$current3.editor.create(b.current, _objectSpread2({
					model: R,
					automaticLayout: !0
				}, x), P), y && o.current.restoreViewState(_.get(p)), d.current.editor.setTheme(E), g !== void 0 && o.current.revealLine(g), u(!0), Q.current = !0;
			}
		}, [
			e,
			r,
			n,
			t,
			a,
			m,
			x,
			P,
			y,
			E,
			g
		]);
		(0, react$1.useEffect)(() => {
			s && L.current(o.current, d.current);
		}, [s]), (0, react$1.useEffect)(() => {
			!c && !s && X();
		}, [
			c,
			s,
			X
		]), i.current = t, (0, react$1.useEffect)(() => {
			var _I$current;
			var _o$current8;
			s && O && ((_I$current = I.current) === null || _I$current === void 0 || _I$current.dispose(), I.current = (_o$current8 = o.current) === null || _o$current8 === void 0 ? void 0 : _o$current8.onDidChangeModelContent((p) => {
				B.current || O(o.current.getValue(), p);
			}));
		}, [s, O]), (0, react$1.useEffect)(() => {
			if (s) {
				let p = d.current.editor.onDidChangeMarkers((R) => {
					var _o$current$getModel;
					let G = (_o$current$getModel = o.current.getModel()) === null || _o$current$getModel === void 0 ? void 0 : _o$current$getModel.uri;
					if (G && R.find((J) => J.path === G.path)) {
						let J = d.current.editor.getModelMarkers({ resource: G });
						T === null || T === void 0 || T(J);
					}
				});
				return () => {
					p === null || p === void 0 || p.dispose();
				};
			}
			return () => {};
		}, [s, T]);
		function pe() {
			var _I$current2;
			var _o$current$getModel2;
			(_I$current2 = I.current) === null || _I$current2 === void 0 || _I$current2.dispose(), V ? y && _.set(m, o.current.saveViewState()) : (_o$current$getModel2 = o.current.getModel()) === null || _o$current$getModel2 === void 0 || _o$current$getModel2.dispose(), o.current.dispose();
		}
		return react$1.default.createElement(H, {
			width: z,
			height: F,
			isEditorReady: s,
			loading: N,
			_ref: b,
			className: j,
			wrapperProps: A
		});
	}
	var de = (0, react$1.memo)(Ve);
	//#endregion
	//#region packages/packages/pro/editor-controls-extended/src/components/css-code-editor/css-editor.styles.ts
	var EditorWrapper = (0, _elementor_ui.styled)(_elementor_ui.Box)`
	/* @noflip */
	direction: ltr;
	border: 1px solid var( --e-a-border-color );
	border-radius: 8px;
	padding: 4px;
	position: relative;
	height: 200px;

	.monaco-editor .suggest-widget {
		width: 220px !important;
		max-width: 220px !important;
		z-index: 1001;
	}

	.visual-content-dimmed {
		opacity: 0.6;
		color: #aaa !important;
		pointer-events: none;
	}

	.monaco-editor {
		.margin-view-overlays > div:nth-of-type( 1 ) .cldr.codicon.codicon-folding-expanded {
			visibility: hidden;
		}

		.monaco-scrollable-element {
			> .scrollbar {
				width: 6px !important;

				> .slider {
					width: 6px !important;
				}
			}
		}
	}
`;
	var ResizeHandle = (0, _elementor_ui.styled)(_elementor_ui.Button)`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	height: 6px;
	cursor: ns-resize;
	background: transparent;
	border: none;
	padding: 0;

	&:hover {
		background: rgba( 0, 0, 0, 0.05 );
	}

	&:active {
		background: rgba( 0, 0, 0, 0.1 );
	}

	&::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate( -50%, -50% );
		width: 30px;
		height: 2px;
		background: var( --e-a-border-color );
		border-radius: 1px;
	}
`;
	//#endregion
	//#region packages/packages/pro/editor-controls-extended/src/components/css-code-editor/css-validation.ts
	var syntaxRules = {
		pseudoState: {
			pattern: "^\\s*[&]{0,1}\\s*(?::hover|:active|:focus)",
			regex: true,
			message: (0, _wordpress_i18n.__)("The use of pseudo-states is not permitted. Instead, switch to the desired pseudo state and add your custom code there.", "elementor-pro")
		},
		mediaQuery: {
			pattern: "@media\\s+[^{]*\\b(?:min-width|max-width|width)\\b",
			regex: true,
			message: (0, _wordpress_i18n.__)("The use of @media width queries is not permitted. Instead, switch to the desired breakpoint and add your custom code there.", "elementor-pro")
		}
	};
	function setCustomSyntaxRules(editor, monaco, options) {
		const model = editor.getModel();
		if (!model) return true;
		const customMarkers = [];
		Object.entries(syntaxRules).forEach(([id, rule]) => {
			var _options$rules;
			var _rule$regex;
			if ((options === null || options === void 0 || (_options$rules = options.rules) === null || _options$rules === void 0 ? void 0 : _options$rules[id]) === false) return;
			model.findMatches(rule.pattern, true, (_rule$regex = rule.regex) !== null && _rule$regex !== void 0 ? _rule$regex : false, true, null, true).forEach((match) => {
				customMarkers.push({
					severity: monaco.MarkerSeverity.Error,
					message: rule.message,
					startLineNumber: match.range.startLineNumber,
					startColumn: match.range.startColumn,
					endLineNumber: match.range.endLineNumber,
					endColumn: match.range.endColumn,
					source: "custom-css-rules"
				});
			});
		});
		monaco.editor.setModelMarkers(model, "custom-css-rules", customMarkers);
		return customMarkers.length === 0;
	}
	function validate(editor, monaco) {
		const model = editor.getModel();
		if (!model) return true;
		return monaco.editor.getModelMarkers({ resource: model.uri }).filter((marker) => marker.severity === monaco.MarkerSeverity.Error).length === 0;
	}
	function clearMarkersFromVisualContent(editor, monaco) {
		const model = editor.getModel();
		if (!model) return;
		const allMarkers = monaco.editor.getModelMarkers({ resource: model.uri });
		const nonCustomMarkers = allMarkers.filter((marker) => marker.startLineNumber !== 1).filter((m) => m.source !== "custom-css-rules");
		if (nonCustomMarkers.length === allMarkers.length) return;
		monaco.editor.setModelMarkers(model, "css", nonCustomMarkers);
	}
	//#endregion
	//#region packages/packages/pro/editor-controls-extended/src/components/css-code-editor/resize-handle.tsx
	var ResizeHandleComponent = ({ onResize, containerRef, onHeightChange }) => {
		const handleResizeMove = react.useCallback((e) => {
			const container = containerRef.current;
			if (!container) return;
			const containerRect = container.getBoundingClientRect();
			const newHeight = Math.max(100, e.clientY - containerRect.top);
			onHeightChange === null || onHeightChange === void 0 || onHeightChange(newHeight);
			onResize(newHeight);
		}, [
			containerRef,
			onResize,
			onHeightChange
		]);
		const handleResizeEnd = react.useCallback(() => {
			document.removeEventListener("mousemove", handleResizeMove);
			document.removeEventListener("mouseup", handleResizeEnd);
		}, [handleResizeMove]);
		const handleResizeStart = react.useCallback((e) => {
			e.preventDefault();
			e.stopPropagation();
			document.addEventListener("mousemove", handleResizeMove);
			document.addEventListener("mouseup", handleResizeEnd);
		}, [handleResizeMove, handleResizeEnd]);
		react.useEffect(() => {
			return () => {
				document.removeEventListener("mousemove", handleResizeMove);
				document.removeEventListener("mouseup", handleResizeEnd);
			};
		}, [handleResizeMove, handleResizeEnd]);
		return /* @__PURE__ */ react.createElement(ResizeHandle, {
			onMouseDown: handleResizeStart,
			"aria-label": "Resize editor height",
			title: "Drag to resize editor height"
		});
	};
	//#endregion
	//#region packages/packages/pro/editor-controls-extended/src/components/css-code-editor/visual-content-change-protection.ts
	var preventChangeOnVisualContent = (editor) => {
		const model = editor.getModel();
		if (!model) return;
		applyVisualContentStyling(editor, model);
		model.onDidChangeContent(() => {
			applyVisualContentStyling(editor, model);
		});
		disableCursorOnVisualContent(editor);
		overridePushEditOperations(model);
	};
	var applyVisualContentStyling = (editor, model) => {
		const decorationsCollection = editor.createDecorationsCollection();
		const lineCount = model.getLineCount();
		const decorations = [];
		decorations.push({
			range: {
				startLineNumber: 1,
				startColumn: 1,
				endLineNumber: 1,
				endColumn: model.getLineContent(1).length + 1
			},
			options: {
				inlineClassName: "visual-content-dimmed",
				isWholeLine: false
			}
		});
		if (lineCount > 1) decorations.push({
			range: {
				startLineNumber: lineCount,
				startColumn: 1,
				endLineNumber: lineCount,
				endColumn: model.getLineContent(lineCount).length + 1
			},
			options: {
				inlineClassName: "visual-content-dimmed",
				isWholeLine: false
			}
		});
		decorationsCollection.set(decorations);
	};
	var disableCursorOnVisualContent = (editor) => {
		const model = editor.getModel();
		if (!model) return;
		editor.onDidChangeCursorPosition((e) => {
			const totalLines = model.getLineCount();
			const position = e.position;
			if (position.lineNumber === 1) editor.setPosition({
				lineNumber: 2,
				column: 1
			});
			else if (position.lineNumber === totalLines) editor.setPosition({
				lineNumber: totalLines - 1,
				column: model.getLineContent(totalLines - 1).length + 1
			});
		});
	};
	var overridePushEditOperations = (model) => {
		const originalPushEditOperations = model.pushEditOperations;
		model.pushEditOperations = (beforeCursorState, editOperations, cursorStateComputer) => {
			const totalLines = model.getLineCount();
			const modelRange = model.getFullModelRange();
			const filteredOperations = editOperations.filter((operation) => {
				const range = operation.range;
				const affectsProtectedLine = range.startLineNumber === 1 || range.endLineNumber === 1 || range.startLineNumber === totalLines || range.endLineNumber === totalLines;
				if (affectsProtectedLine && isFullContentReplacement(range, modelRange) && hasVisualContent(operation.text)) return true;
				return !affectsProtectedLine;
			});
			return originalPushEditOperations.call(model, beforeCursorState, filteredOperations, cursorStateComputer);
		};
	};
	var isFullContentReplacement = (range, modelRange) => {
		return range.startLineNumber === modelRange.startLineNumber && range.endLineNumber === modelRange.endLineNumber && range.startColumn === modelRange.startColumn && range.endColumn === modelRange.endColumn;
	};
	var hasVisualContent = (text) => {
		if (!text) return false;
		return text.startsWith("element.style {") && text.endsWith("}");
	};
	var setVisualContent = (value) => {
		const trimmed = value.trim();
		return `element.style {\n${trimmed ? "  " + trimmed.replace(/\n/g, "\n  ") + "\n" : "  \n"}}`;
	};
	var getActual = (value) => {
		const lines = value.split("\n");
		if (lines.length < 2) return "";
		return lines.slice(1, -1).map((line) => line.replace(/^ {2}/, "")).join("\n");
	};
	//#endregion
	//#region packages/packages/pro/editor-controls-extended/src/components/css-code-editor/css-editor.tsx
	var createEditorDidMountHandler = (editorRef, monacoRef, onUserContentChange, setIsValid, syntaxRuleOptions) => {
		return (editor, monaco) => {
			var _editor$getModel$getV;
			var _editor$getModel;
			var _editor$getModel$getL;
			var _editor$getModel2;
			editorRef.current = editor;
			monacoRef.current = monaco;
			preventChangeOnVisualContent(editor);
			setCustomSyntaxRules(editor, monaco, syntaxRuleOptions);
			onUserContentChange(getActual((_editor$getModel$getV = (_editor$getModel = editor.getModel()) === null || _editor$getModel === void 0 ? void 0 : _editor$getModel.getValue()) !== null && _editor$getModel$getV !== void 0 ? _editor$getModel$getV : ""));
			monaco.editor.onDidChangeMarkers(() => {
				clearMarkersFromVisualContent(editor, monaco);
				setIsValid(validate(editor, monaco));
			});
			editor.setPosition({
				lineNumber: 2,
				column: ((_editor$getModel$getL = (_editor$getModel2 = editor.getModel()) === null || _editor$getModel2 === void 0 ? void 0 : _editor$getModel2.getLineContent(2).length) !== null && _editor$getModel$getL !== void 0 ? _editor$getModel$getL : 0) + 1
			});
			disableFoldingFirstRow(editor);
			editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyA, () => {
				const editorModel = editor.getModel();
				if (!editorModel) return;
				const fullRange = editorModel.getFullModelRange();
				const contentEndLine = fullRange.endLineNumber - 1;
				let endColumn = editorModel.getLineLastNonWhitespaceColumn(contentEndLine);
				if (endColumn === 0) endColumn = editorModel.getLineMaxColumn(contentEndLine);
				editor.setSelection(new monaco.Selection(fullRange.startLineNumber + 1, fullRange.startColumn, contentEndLine, endColumn));
			});
		};
	};
	function disableFoldingFirstRow(editor) {
		var _editor$getDomNode;
		if (!(typeof editor.getDomNode === "function")) return;
		const marginViewOverlays = (_editor$getDomNode = editor.getDomNode()) === null || _editor$getDomNode === void 0 ? void 0 : _editor$getDomNode.querySelector(".margin-view-overlays");
		const handler = (event) => {
			const ev = event;
			if (ev.button !== 0) return;
			const target = ev.target;
			const firstElem = marginViewOverlays === null || marginViewOverlays === void 0 ? void 0 : marginViewOverlays.children[0];
			if (target === firstElem || target.parentElement === firstElem) {
				event.preventDefault();
				event.stopPropagation();
			}
		};
		marginViewOverlays === null || marginViewOverlays === void 0 || marginViewOverlays.addEventListener("mousedown", handler);
		editor.onDidDispose(() => {
			marginViewOverlays === null || marginViewOverlays === void 0 || marginViewOverlays.removeEventListener("mousedown", handler);
		});
	}
	var CssEditor = ({ value, onChange, syntaxRuleOptions, readOnly = false }) => {
		const theme = (0, _elementor_ui.useTheme)();
		const containerRef = (0, react.useRef)(null);
		const editorRef = (0, react.useRef)(null);
		const monacoRef = (0, react.useRef)(null);
		const debounceTimer = (0, react.useRef)(null);
		const [hasContent, setHasContent] = (0, react.useState)(value.trim() !== "");
		const [isValid, setIsValid] = (0, react.useState)(true);
		const [contentVersion, setContentVersion] = (0, react.useState)(0);
		useOnUpdate(() => {
			var _editorRef$current$ge;
			var _editorRef$current;
			const userContent = getActual((_editorRef$current$ge = (_editorRef$current = editorRef.current) === null || _editorRef$current === void 0 || (_editorRef$current = _editorRef$current.getModel()) === null || _editorRef$current === void 0 ? void 0 : _editorRef$current.getValue()) !== null && _editorRef$current$ge !== void 0 ? _editorRef$current$ge : "");
			setHasContent(!userContent.trim());
			onChange(userContent, isValid);
		}, [contentVersion, isValid]);
		const handleUserContentChange = (0, react.useCallback)((newValue) => {
			setHasContent(newValue.trim() !== "");
		}, []);
		const handleResize = (0, react.useCallback)(() => {
			var _editorRef$current2;
			(_editorRef$current2 = editorRef.current) === null || _editorRef$current2 === void 0 || _editorRef$current2.layout();
		}, []);
		const handleHeightChange = (0, react.useCallback)((height) => {
			if (containerRef.current) containerRef.current.style.height = `${height}px`;
		}, []);
		const handleEditorChange = () => {
			if (!editorRef.current || !monacoRef.current) return;
			setCustomSyntaxRules(editorRef === null || editorRef === void 0 ? void 0 : editorRef.current, monacoRef.current, syntaxRuleOptions);
			if (debounceTimer.current) clearTimeout(debounceTimer.current);
			debounceTimer.current = setTimeout(() => {
				setContentVersion((prev) => prev + 1);
			}, 500);
		};
		const handleEditorDidMount = createEditorDidMountHandler(editorRef, monacoRef, handleUserContentChange, setIsValid, syntaxRuleOptions);
		const handleReset = () => {
			var _editorRef$current3;
			return (_editorRef$current3 = editorRef.current) === null || _editorRef$current3 === void 0 || (_editorRef$current3 = _editorRef$current3.getModel()) === null || _editorRef$current3 === void 0 ? void 0 : _editorRef$current3.setValue(setVisualContent(""));
		};
		(0, react.useEffect)(() => {
			const timerRef = debounceTimer;
			return () => {
				const timer = timerRef.current;
				if (timer) clearTimeout(timer);
			};
		}, []);
		return /* @__PURE__ */ react.createElement(_elementor_editor_ui.FloatingActionsBar, { actions: hasContent ? [/* @__PURE__ */ react.createElement(_elementor_editor_controls.ClearIconButton, {
			key: "clear",
			tooltipText: (0, _wordpress_i18n.__)("Clear", "elementor-pro"),
			onClick: handleReset
		})] : [] }, /* @__PURE__ */ react.createElement(_elementor_ui.Box, null, /* @__PURE__ */ react.createElement(EditorWrapper, {
			ref: containerRef,
			dir: "ltr"
		}, /* @__PURE__ */ react.createElement(de, {
			height: "100%",
			language: "css",
			theme: theme.palette.mode === "dark" ? "vs-dark" : "vs",
			value: setVisualContent(value),
			onMount: handleEditorDidMount,
			onChange: handleEditorChange,
			options: {
				lineNumbers: "on",
				lineNumbersMinChars: 3,
				folding: true,
				minimap: { enabled: false },
				fontFamily: "Roboto, Arial, Helvetica, Verdana, sans-serif",
				fontSize: 12,
				renderLineHighlight: "none",
				hideCursorInOverviewRuler: true,
				overviewRulerBorder: false,
				fixedOverflowWidgets: true,
				suggestFontSize: 10,
				suggestLineHeight: 14,
				stickyScroll: { enabled: false },
				lineDecorationsWidth: 2,
				wordWrap: "on",
				scrollBeyondLastLine: false,
				readOnly,
				editContext: false
			}
		}), /* @__PURE__ */ react.createElement(ResizeHandleComponent, {
			onResize: handleResize,
			containerRef,
			onHeightChange: handleHeightChange
		}))));
	};
	function useOnUpdate(callback, dependencies) {
		const hasMounted = (0, react.useRef)(false);
		(0, react.useEffect)(() => {
			if (hasMounted.current) callback();
			else hasMounted.current = true;
		}, dependencies);
	}
	//#endregion
	//#region packages/packages/pro/editor-controls-extended/src/index.ts
	init$1();
	//#endregion
	exports.AttributesControl = AttributesControl;
	exports.CssEditor = CssEditor;
	exports.DisplayConditionsControl = DisplayConditionsControl;
	exports.OptionsControl = OptionsControl;
	exports.conditionGroupPropTypeUtil = conditionGroupPropTypeUtil;
	exports.displayConditionsPropTypeUtil = displayConditionsPropTypeUtil;
})(this.elementorV2.editorControlsExtended = this.elementorV2.editorControlsExtended || {}, elementorV2.licenseApi, elementorV2.editorControls, React, wp.i18n, elementorV2.icons, elementorV2.ui, elementorV2.editorProps, elementorV2.schema, elementorV2.editorUi);

window.elementorV2.editorControlsExtended?.init?.();
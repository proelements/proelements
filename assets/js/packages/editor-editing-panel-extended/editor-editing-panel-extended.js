/*! pro-elements - v4.3.0 - 22-09-2026 */
this.elementorV2 = this.elementorV2 || {};
(function(_elementor_editor_canvas, _elementor_editor_controls_extended, _elementor_editor_editing_panel, _elementor_editor_props, _elementor_license_api, react, _wordpress_i18n, _elementor_editor_controls, _elementor_ui) {
	//#region \0rolldown/runtime.js
	var __create = Object.create;
	var __defProp = Object.defineProperty;
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
	react = __toESM(react);
	//#region packages/packages/pro/editor-editing-panel-extended/src/components/custom-css-field.tsx
	var CustomCssField = ({ children }) => {
		return /* @__PURE__ */ react.createElement(_elementor_editor_controls.ControlAdornmentsProvider, { items: [{
			id: "custom-css-indicator",
			Adornment: _elementor_editor_editing_panel.CustomCssIndicator
		}] }, children);
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
	//#region packages/packages/pro/editor-editing-panel-extended/src/components/custom-css.tsx
	var CustomCss = () => {
		const { id, meta } = (0, _elementor_editor_editing_panel.useStyle)();
		const { customCss, setCustomCss } = (0, _elementor_editor_editing_panel.useCustomCss)();
		const { data: isLicenseExpired } = (0, _elementor_license_api.useIsLicenseExpired)();
		const metaKey = `${meta.breakpoint || "desktop"}-${meta.state || "default"}-${id}`;
		const [localStates, setLocalStates] = (0, react.useState)({});
		(0, react.useEffect)(() => {
			if (!localStates[metaKey]) setLocalStates((prev) => _objectSpread2(_objectSpread2({}, prev), {}, { [metaKey]: {
				value: (customCss === null || customCss === void 0 ? void 0 : customCss.raw) || "",
				isValid: true
			} }));
		}, [metaKey]);
		const currentLocalState = (0, react.useMemo)(() => {
			return localStates[metaKey] || {
				value: (customCss === null || customCss === void 0 ? void 0 : customCss.raw) || "",
				isValid: true
			};
		}, [
			localStates,
			metaKey,
			customCss === null || customCss === void 0 ? void 0 : customCss.raw
		]);
		const handleChange = (value, isValid) => {
			setLocalStates((prev) => _objectSpread2(_objectSpread2({}, prev), {}, { [metaKey]: {
				value,
				isValid
			} }));
			if (isValid) setCustomCss(value, { history: { propDisplayName: "Custom CSS" } });
		};
		const syntaxRuleOptions = (0, react.useMemo)(() => {
			if (!meta.breakpoint || meta.breakpoint === "desktop") return { rules: { mediaQuery: false } };
		}, [meta.breakpoint]);
		return /* @__PURE__ */ react.createElement(_elementor_editor_editing_panel.SectionContent, { gap: 1 }, /* @__PURE__ */ react.createElement(CustomCssField, null, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			alignItems: "center",
			gap: 1
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ControlFormLabel, null, (0, _wordpress_i18n.__)("CSS code", "elementor-pro")), /* @__PURE__ */ react.createElement(_elementor_editor_controls.ControlAdornments, null))), /* @__PURE__ */ react.createElement(_elementor_editor_controls_extended.CssEditor, {
			value: currentLocalState.value,
			onChange: handleChange,
			syntaxRuleOptions,
			readOnly: isLicenseExpired
		}));
	};
	//#endregion
	//#region packages/packages/pro/editor-editing-panel-extended/src/components/custom-css-section.tsx
	var CustomCssStyleSection = () => {
		return /* @__PURE__ */ react.createElement(_elementor_editor_editing_panel.StyleTabSection, {
			section: {
				component: CustomCss,
				name: "Custom CSS",
				title: (0, _wordpress_i18n.__)("Custom CSS", "elementor-pro")
			},
			fields: ["custom_css"],
			unmountOnExit: false
		});
	};
	//#endregion
	//#region \0@oxc-project+runtime@0.140.0/helpers/esm/objectWithoutPropertiesLoose.js
	function _objectWithoutPropertiesLoose(r, e) {
		if (null == r) return {};
		var t = {};
		for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
			if (e.includes(n)) continue;
			t[n] = r[n];
		}
		return t;
	}
	//#endregion
	//#region \0@oxc-project+runtime@0.140.0/helpers/esm/objectWithoutProperties.js
	function _objectWithoutProperties(e, t) {
		if (null == e) return {};
		var o;
		var r;
		var i = _objectWithoutPropertiesLoose(e, t);
		if (Object.getOwnPropertySymbols) {
			var s = Object.getOwnPropertySymbols(e);
			for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
		}
		return i;
	}
	//#endregion
	//#region packages/packages/pro/editor-editing-panel-extended/src/controls/number-range-control.tsx
	var _excluded = ["value", "setValue"];
	var RangeField = ({ bind, label }) => /* @__PURE__ */ react.createElement(_elementor_editor_controls.PropKeyProvider, { bind }, /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
		container: true,
		alignItems: "center"
	}, /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
		item: true,
		xs: 6
	}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ControlFormLabel, null, label)), /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
		item: true,
		xs: 6
	}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.NumberControl, {
		min: 0,
		step: 1
	}))));
	var NumberRangeControl = (0, _elementor_editor_controls.createControl)((props) => {
		var _props$minLabel;
		var _props$maxLabel;
		var _props$errorMessage;
		const minLabel = (_props$minLabel = props.minLabel) !== null && _props$minLabel !== void 0 ? _props$minLabel : (0, _wordpress_i18n.__)("Min", "elementor-pro");
		const maxLabel = (_props$maxLabel = props.maxLabel) !== null && _props$maxLabel !== void 0 ? _props$maxLabel : (0, _wordpress_i18n.__)("Max", "elementor-pro");
		const errorMessage = (_props$errorMessage = props.errorMessage) !== null && _props$errorMessage !== void 0 ? _props$errorMessage : (0, _wordpress_i18n.__)("Minimum value cannot be greater than maximum value.", "elementor-pro");
		const _useBoundProp = (0, _elementor_editor_controls.useBoundProp)(_elementor_editor_props.numberRangePropTypeUtil), { value, setValue } = _useBoundProp, propContext = _objectWithoutProperties(_useBoundProp, _excluded);
		const min = _elementor_editor_props.numberPropTypeUtil.extract(value === null || value === void 0 ? void 0 : value.min);
		const max = _elementor_editor_props.numberPropTypeUtil.extract(value === null || value === void 0 ? void 0 : value.max);
		const showError = typeof min === "number" && typeof max === "number" && max < min;
		return /* @__PURE__ */ react.createElement(_elementor_editor_controls.PropProvider, _objectSpread2(_objectSpread2({}, propContext), {}, {
			value,
			setValue
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Stack, { gap: 1 }, /* @__PURE__ */ react.createElement(RangeField, {
			bind: "min",
			label: minLabel
		}), /* @__PURE__ */ react.createElement(RangeField, {
			bind: "max",
			label: maxLabel
		}), showError && /* @__PURE__ */ react.createElement(_elementor_ui.FormHelperText, { error: true }, errorMessage)));
	});
	//#endregion
	//#region packages/packages/pro/editor-editing-panel-extended/src/controls/options-select-control.tsx
	var OPTIONS_PROP = "options";
	var OptionsSelectControl = (0, _elementor_editor_controls.createControl)(() => {
		var _settings$OPTIONS_PRO;
		const { elementType, settings } = (0, _elementor_editor_editing_panel.useElement)();
		const rawOptions = (_settings$OPTIONS_PRO = settings[OPTIONS_PROP]) !== null && _settings$OPTIONS_PRO !== void 0 ? _settings$OPTIONS_PRO : elementType.propsSchema[OPTIONS_PROP].default;
		return /* @__PURE__ */ react.createElement(_elementor_editor_controls.SelectControl, { options: toOptions(rawOptions) });
	});
	function unwrap(value) {
		return (0, _elementor_editor_props.isOverridable)(value) ? value.value.origin_value : value;
	}
	function inner(value) {
		var _unwrap;
		return (_unwrap = unwrap(value)) === null || _unwrap === void 0 ? void 0 : _unwrap.value;
	}
	function toOptions(rawOptions) {
		var _inner;
		return ((_inner = inner(rawOptions)) !== null && _inner !== void 0 ? _inner : []).map((item) => {
			var _inner2;
			var _inner3;
			var _inner4;
			const { key, value } = (_inner2 = inner(item)) !== null && _inner2 !== void 0 ? _inner2 : {};
			const label = (_inner3 = inner(key)) !== null && _inner3 !== void 0 ? _inner3 : "";
			return {
				label,
				value: ((_inner4 = inner(value)) !== null && _inner4 !== void 0 ? _inner4 : "") || label
			};
		}).filter((option) => Boolean(option.value));
	}
	//#endregion
	//#region packages/packages/pro/editor-editing-panel-extended/src/transformers/settings/attributes-transformer.ts
	var proAttributesTransformer = (0, _elementor_editor_canvas.createTransformer)((values) => {
		return values.map((value) => value.key && value.value ? `${value.key}="${value.value}"` : "").join(" ");
	});
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
	//#region packages/packages/pro/editor-editing-panel-extended/src/init.ts
	function init() {
		return _init.apply(this, arguments);
	}
	function _init() {
		_init = _asyncToGenerator(function* () {
			_elementor_editor_canvas.settingsTransformersRegistry.register("attributes", proAttributesTransformer);
			_elementor_editor_editing_panel.controlsRegistry.register("attributes", _elementor_editor_controls_extended.AttributesControl, "full", _elementor_editor_props.keyValuePropTypeUtil);
			_elementor_editor_editing_panel.controlsRegistry.register("options", _elementor_editor_controls_extended.OptionsControl, "full", _elementor_editor_props.keyValuePropTypeUtil);
			_elementor_editor_editing_panel.controlsRegistry.register("number-range", NumberRangeControl, "custom", _elementor_editor_props.numberRangePropTypeUtil);
			_elementor_editor_editing_panel.controlsRegistry.register("options-select", OptionsSelectControl, "two-columns", _elementor_editor_props.stringPropTypeUtil);
			if ((yield (0, _elementor_license_api.fetchTierFeatures)().catch(() => [])).includes("atomic-custom-css")) (0, _elementor_editor_editing_panel.injectIntoStyleTab)({
				id: "custom-css",
				component: CustomCssStyleSection,
				options: { overwrite: true }
			});
			_elementor_editor_editing_panel.controlsRegistry.register("display-conditions", _elementor_editor_controls_extended.DisplayConditionsControl, "two-columns", _elementor_editor_controls_extended.displayConditionsPropTypeUtil);
			if (typeof _elementor_editor_editing_panel.setLicenseConfig === "function") (0, _elementor_editor_editing_panel.setLicenseConfig)({ expired: yield (0, _elementor_license_api.fetchLicenseStatus)().catch(() => false) });
		});
		return _init.apply(this, arguments);
	}
	//#endregion
	//#region packages/packages/pro/editor-editing-panel-extended/src/index.ts
	_asyncToGenerator(function* () {
		yield init();
	})();
	//#endregion
})(elementorV2.editorCanvas, elementorV2.editorControlsExtended, elementorV2.editorEditingPanel, elementorV2.editorProps, elementorV2.licenseApi, React, wp.i18n, elementorV2.editorControls, elementorV2.ui);

window.elementorV2.editorEditingPanelExtended?.init?.();
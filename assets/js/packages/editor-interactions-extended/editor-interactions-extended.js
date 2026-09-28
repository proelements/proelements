/*! pro-elements - v4.3.0 - 22-09-2026 */
this.elementorV2 = this.elementorV2 || {};
(function(exports, _elementor_editor, _elementor_editor_interactions, _elementor_license_api, react, _elementor_editor_ui, _elementor_ui, _elementor_editor_controls, _elementor_editor_props, _wordpress_i18n, _elementor_icons, _elementor_editor_editing_panel, react_dom) {
	Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
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
	let react$1 = __toESM(react, 1);
	react = __toESM(react);
	react_dom = __toESM(react_dom, 1);
	//#region packages/packages/pro/editor-interactions-extended/src/components/controls/easing.tsx
	var DEFAULT_EASING = "easeIn";
	function Easing({ value = DEFAULT_EASING, onChange }) {
		const availableOptions = Object.entries(_elementor_editor_interactions.EASING_OPTIONS).map(([key, label]) => ({
			key,
			label
		}));
		const handleChange = (event) => {
			onChange(event.target.value);
		};
		return /* @__PURE__ */ react.createElement(_elementor_ui.Select, {
			onChange: handleChange,
			value,
			fullWidth: true,
			displayEmpty: true,
			size: "tiny"
		}, availableOptions.map((option) => {
			return /* @__PURE__ */ react.createElement(_elementor_editor_ui.MenuListItem, {
				key: option.key,
				value: option.key
			}, option.label);
		}));
	}
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/components/controls/easing-expired.tsx
	function EasingExpired({ value = DEFAULT_EASING, onChange }) {
		const availableOptions = Object.entries(_elementor_editor_interactions.EASING_OPTIONS).map(([key, label]) => ({
			key,
			label,
			disabled: !_elementor_editor_interactions.BASE_EASINGS.includes(key)
		}));
		const handleChange = (event) => {
			if (_elementor_editor_interactions.BASE_EASINGS.includes(event.target.value)) onChange(event.target.value);
		};
		return /* @__PURE__ */ react.createElement(_elementor_ui.Select, {
			onChange: handleChange,
			value,
			fullWidth: true,
			displayEmpty: true,
			size: "tiny"
		}, availableOptions.map((option) => {
			return /* @__PURE__ */ react.createElement(_elementor_editor_ui.MenuListItem, {
				key: option.key,
				value: option.key,
				disabled: option.disabled
			}, option.label);
		}));
	}
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/components/controls/effect-pro.tsx
	function EffectPro({ value, onChange }) {
		const availableOptions = Object.entries(_elementor_editor_interactions.EFFECT_OPTIONS).map(([key, label]) => ({
			key,
			label
		}));
		const handleChange = (event) => {
			onChange(event.target.value);
		};
		return /* @__PURE__ */ react.createElement(_elementor_ui.Select, {
			fullWidth: true,
			displayEmpty: true,
			size: "tiny",
			value,
			onChange: handleChange
		}, availableOptions.map((effect) => {
			return /* @__PURE__ */ react.createElement(_elementor_editor_ui.MenuListItem, {
				key: effect.key,
				value: effect.key
			}, effect.label);
		}));
	}
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/components/controls/effect-pro-expired.tsx
	function EffectProExpired({ value, onChange }) {
		const availableOptions = Object.entries(_elementor_editor_interactions.EFFECT_OPTIONS).map(([key, label]) => ({
			key,
			label,
			disabled: !_elementor_editor_interactions.BASE_EFFECTS.includes(key)
		}));
		const handleChange = (event) => {
			if (_elementor_editor_interactions.BASE_EFFECTS.includes(event.target.value)) onChange(event.target.value);
		};
		return /* @__PURE__ */ react.createElement(_elementor_ui.Select, {
			fullWidth: true,
			displayEmpty: true,
			size: "tiny",
			onChange: handleChange,
			value
		}, availableOptions.map((effect) => {
			return /* @__PURE__ */ react.createElement(_elementor_editor_ui.MenuListItem, {
				key: effect.key,
				value: effect.key,
				disabled: effect.disabled
			}, effect.label);
		}));
	}
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
	//#region packages/packages/pro/editor-interactions-extended/src/components/size-component.tsx
	var SizeComponent = (props) => {
		if (_elementor_editor_controls.SizeComponent) return /* @__PURE__ */ react.createElement(_elementor_editor_controls.SizeComponent, _objectSpread2(_objectSpread2({}, props), {}, { setValue: props.onChange }));
		return /* @__PURE__ */ react.createElement(_elementor_editor_controls.UnstableSizeField, props);
	};
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/components/controls/offset-indicator.tsx
	var DEFAULT_UNIT$5 = "%";
	function OffsetIndicator({ value, onChange, defaultValue }) {
		const setValue = (0, react.useCallback)((size) => {
			onChange(size === null ? DEFAULT_UNIT$5 : String(size));
		}, [onChange]);
		const handleChange = (newValue) => {
			const nextSize = newValue.size;
			setValue(typeof nextSize === "number" && Number.isFinite(nextSize) ? nextSize : null);
		};
		const handleBlur = () => {
			if (isEmptyOffsetValue(value)) setValue(defaultValue);
		};
		const toSizeValue = (rawValue) => {
			const parsedSize = Number(rawValue);
			return {
				size: rawValue === null || rawValue === void 0 || rawValue === "" || rawValue === DEFAULT_UNIT$5 || !Number.isFinite(parsedSize) ? null : parsedSize,
				unit: DEFAULT_UNIT$5
			};
		};
		const sizeValue = toSizeValue(value);
		return /* @__PURE__ */ react.createElement(SizeComponent, {
			units: [DEFAULT_UNIT$5],
			value: sizeValue,
			onChange: handleChange,
			onBlur: handleBlur
		});
	}
	var isEmptyOffsetValue = (value) => {
		if (value === null || value === void 0 || value === "" || value === DEFAULT_UNIT$5 || value === "null" || value === "undefined") return true;
		return !Number.isFinite(Number(value));
	};
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/components/controls/end.tsx
	function End(props) {
		return /* @__PURE__ */ react.createElement(OffsetIndicator, _objectSpread2(_objectSpread2({}, props), {}, { defaultValue: 15 }));
	}
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/components/controls/offset-expired.tsx
	var DEFAULT_UNIT$4 = "%";
	function OffsetExpired({ value, defaultValue }) {
		const sizeValue = toSizeValue(value !== null && value !== void 0 ? value : String(defaultValue));
		return /* @__PURE__ */ react.createElement(SizeComponent, {
			units: [DEFAULT_UNIT$4],
			value: sizeValue,
			onChange: () => {},
			disabled: true
		});
	}
	var toSizeValue = (value) => {
		return _elementor_editor_props.sizePropTypeUtil.create({
			size: Number(value),
			unit: DEFAULT_UNIT$4
		}).value;
	};
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/components/controls/end-expired.tsx
	function EndExpired(props) {
		return /* @__PURE__ */ react.createElement(OffsetExpired, _objectSpread2(_objectSpread2({}, props), {}, { defaultValue: 15 }));
	}
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/components/controls/relative-to.tsx
	var RELATIVE_TO_OPTIONS = {
		viewport: (0, _wordpress_i18n.__)("Viewport", "elementor-pro"),
		page: (0, _wordpress_i18n.__)("Page", "elementor-pro")
	};
	function RelativeTo({ value, onChange }) {
		const availableOptions = Object.entries(RELATIVE_TO_OPTIONS).map(([key, label]) => ({
			key,
			label
		}));
		return /* @__PURE__ */ react.createElement(_elementor_ui.Select, {
			fullWidth: true,
			displayEmpty: true,
			size: "tiny",
			onChange: (event) => onChange(event.target.value),
			value: value || "viewport"
		}, availableOptions.map(({ key, label }) => {
			return /* @__PURE__ */ react.createElement(_elementor_editor_ui.MenuListItem, {
				key,
				value: key
			}, label);
		}));
	}
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/components/controls/relative-to-expired.tsx
	function RelativeToExpired({ value }) {
		const availableOptions = Object.entries(RELATIVE_TO_OPTIONS).map(([key, label]) => ({
			key,
			label
		}));
		return /* @__PURE__ */ react.createElement(_elementor_ui.Select, {
			fullWidth: true,
			displayEmpty: true,
			size: "tiny",
			onChange: () => {},
			value,
			disabled: true
		}, availableOptions.map(({ key, label }) => {
			return /* @__PURE__ */ react.createElement(_elementor_editor_ui.MenuListItem, {
				key,
				value: key
			}, label);
		}));
	}
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/components/controls/repeat.tsx
	function Repeat({ value, onChange }) {
		const options = [{
			value: _elementor_editor_interactions.REPEAT_OPTIONS.times,
			label: _elementor_editor_interactions.REPEAT_TOOLTIPS.times,
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.Number123Icon, { fontSize: size }),
			showTooltip: true
		}, {
			value: _elementor_editor_interactions.REPEAT_OPTIONS.loop,
			label: _elementor_editor_interactions.REPEAT_TOOLTIPS.loop,
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.RepeatIcon, { fontSize: size }),
			showTooltip: true
		}];
		return /* @__PURE__ */ react.createElement(_elementor_editor_controls.ToggleButtonGroupUi, {
			items: options,
			exclusive: true,
			onChange: (nextValue) => onChange(nextValue || ""),
			value: value || ""
		});
	}
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/components/controls/repeat-expired.tsx
	function RepeatExpired({ value, onChange }) {
		const options = [{
			value: _elementor_editor_interactions.REPEAT_OPTIONS.times,
			label: _elementor_editor_interactions.REPEAT_TOOLTIPS.times,
			disabled: value !== _elementor_editor_interactions.REPEAT_OPTIONS.times,
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.Number123Icon, { fontSize: size }),
			showTooltip: true
		}, {
			value: _elementor_editor_interactions.REPEAT_OPTIONS.loop,
			label: _elementor_editor_interactions.REPEAT_TOOLTIPS.loop,
			disabled: value !== _elementor_editor_interactions.REPEAT_OPTIONS.loop,
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.RepeatIcon, { fontSize: size }),
			showTooltip: true
		}];
		return /* @__PURE__ */ react.createElement(_elementor_editor_controls.ToggleButtonGroupUi, {
			items: options,
			exclusive: true,
			onChange: () => onChange(""),
			value
		});
	}
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/components/controls/replay.tsx
	function Replay({ value, onChange }) {
		const options = [{
			value: false,
			label: _elementor_editor_interactions.REPLAY_OPTIONS.no,
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.MinusIcon, { fontSize: size })
		}, {
			value: true,
			label: _elementor_editor_interactions.REPLAY_OPTIONS.yes,
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.CheckIcon, { fontSize: size })
		}];
		return /* @__PURE__ */ react.createElement(_elementor_editor_controls.ToggleButtonGroupUi, {
			items: options,
			exclusive: true,
			onChange,
			value
		});
	}
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/components/controls/replay-expired.tsx
	function ReplayExpired({ value, onChange }) {
		const options = [{
			value: false,
			disabled: false,
			label: _elementor_editor_interactions.REPLAY_OPTIONS.no,
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.MinusIcon, { fontSize: size })
		}, {
			value: true,
			disabled: true,
			label: _elementor_editor_interactions.REPLAY_OPTIONS.yes,
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.CheckIcon, { fontSize: size })
		}];
		return /* @__PURE__ */ react.createElement(_elementor_editor_controls.ToggleButtonGroupUi, {
			items: options,
			exclusive: true,
			onChange,
			value
		});
	}
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/components/controls/start.tsx
	function Start(props) {
		return /* @__PURE__ */ react.createElement(OffsetIndicator, _objectSpread2(_objectSpread2({}, props), {}, { defaultValue: 85 }));
	}
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/components/controls/start-expired.tsx
	function StartExpired(props) {
		return /* @__PURE__ */ react.createElement(OffsetExpired, _objectSpread2(_objectSpread2({}, props), {}, { defaultValue: 85 }));
	}
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/components/controls/times.tsx
	var DEFAULT_TIMES = 1;
	function Times({ value, onChange }) {
		const handleChange = (event) => {
			const parsedValue = Number(event.target.value);
			onChange(Number.isFinite(parsedValue) ? Math.max(DEFAULT_TIMES, Math.trunc(parsedValue)) : DEFAULT_TIMES);
		};
		const handleBlur = () => {
			if (!Number.isFinite(Number(value)) || Number(value) < DEFAULT_TIMES) onChange(DEFAULT_TIMES);
		};
		return /* @__PURE__ */ react.createElement(_elementor_editor_controls.NumberInput, {
			size: "tiny",
			type: "number",
			fullWidth: true,
			value: Number.isFinite(Number(value)) ? Number(value) : "",
			onInput: handleChange,
			onBlur: handleBlur,
			InputProps: { inputProps: {
				min: DEFAULT_TIMES,
				step: 1
			} }
		});
	}
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/components/controls/times-expired.tsx
	function TimesExpired({ value }) {
		const handleChange = () => {};
		return /* @__PURE__ */ react.createElement(_elementor_editor_controls.NumberInput, {
			size: "tiny",
			type: "number",
			fullWidth: true,
			disabled: true,
			value: Number.isFinite(Number(value)) ? Number(value) : "",
			onInput: handleChange,
			InputProps: { inputProps: { min: 1 } }
		});
	}
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/components/controls/trigger.tsx
	function Trigger({ value, onChange }) {
		const availableTriggers = Object.entries(_elementor_editor_interactions.TRIGGER_OPTIONS).map(([key, label]) => ({
			key,
			label
		}));
		return /* @__PURE__ */ react.createElement(_elementor_ui.Select, {
			fullWidth: true,
			displayEmpty: true,
			size: "tiny",
			onChange: (event) => onChange(event.target.value),
			value
		}, availableTriggers.map((trigger) => {
			return /* @__PURE__ */ react.createElement(_elementor_editor_ui.MenuListItem, {
				key: trigger.key,
				value: trigger.key
			}, trigger.label);
		}));
	}
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/components/controls/trigger-expired.tsx
	function TriggerExpired({ value, onChange }) {
		const availableTriggers = Object.entries(_elementor_editor_interactions.TRIGGER_OPTIONS).map(([key, label]) => ({
			key,
			label,
			disabled: !_elementor_editor_interactions.BASE_TRIGGERS.includes(key)
		}));
		return /* @__PURE__ */ react.createElement(_elementor_ui.Select, {
			fullWidth: true,
			displayEmpty: true,
			size: "tiny",
			onChange: (event) => onChange(event.target.value),
			value
		}, availableTriggers.map((trigger) => {
			return /* @__PURE__ */ react.createElement(_elementor_editor_ui.MenuListItem, {
				key: trigger.key,
				value: trigger.key,
				disabled: trigger.disabled
			}, trigger.label);
		}));
	}
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/context/custom-effect/utils/merge-keyframe.ts
	var mergeKeyframe = (customEffect, updatedKeyframeStop) => {
		var _customEffect$value$k;
		var _customEffect$value;
		var _customEffect$value2;
		const existingStops = (_customEffect$value$k = customEffect === null || customEffect === void 0 || (_customEffect$value = customEffect.value) === null || _customEffect$value === void 0 || (_customEffect$value = _customEffect$value.keyframes) === null || _customEffect$value === void 0 ? void 0 : _customEffect$value.value) !== null && _customEffect$value$k !== void 0 ? _customEffect$value$k : [];
		const stopIndex = existingStops.findIndex((stop) => {
			var _updatedKeyframeStop$;
			return stop.value.stop.value.size === (updatedKeyframeStop === null || updatedKeyframeStop === void 0 || (_updatedKeyframeStop$ = updatedKeyframeStop.value) === null || _updatedKeyframeStop$ === void 0 || (_updatedKeyframeStop$ = _updatedKeyframeStop$.stop) === null || _updatedKeyframeStop$ === void 0 || (_updatedKeyframeStop$ = _updatedKeyframeStop$.value) === null || _updatedKeyframeStop$ === void 0 ? void 0 : _updatedKeyframeStop$.size);
		});
		const found = stopIndex !== -1;
		let updatedStops = [];
		if (found) updatedStops = replaceAt(existingStops, stopIndex, updatedKeyframeStop);
		if (!found) updatedStops = insert(existingStops, updatedKeyframeStop);
		return _objectSpread2(_objectSpread2({}, customEffect), {}, { value: _objectSpread2(_objectSpread2({}, customEffect === null || customEffect === void 0 ? void 0 : customEffect.value), {}, { keyframes: _objectSpread2(_objectSpread2({}, customEffect === null || customEffect === void 0 || (_customEffect$value2 = customEffect.value) === null || _customEffect$value2 === void 0 ? void 0 : _customEffect$value2.keyframes), {}, { value: updatedStops }) }) });
	};
	var replaceAt = (stops, index, updatedStop) => {
		const clone = structuredClone(stops);
		clone[index] = updatedStop;
		return clone;
	};
	var insert = (stops, newStop) => {
		const clone = structuredClone(stops);
		clone.push(newStop);
		return clone;
	};
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/context/custom-effect/utils/patch-keyframe.ts
	var patchKeyframe = (keyframeStop, newSettings) => {
		const updated = structuredClone(keyframeStop);
		updated.value.settings.value = _objectSpread2(_objectSpread2({}, updated.value.settings.value), newSettings);
		return updated;
	};
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/context/custom-effect/utils/prop-type-factory.ts
	var createPropValue = ($$type, value) => {
		return {
			$$type,
			value
		};
	};
	var createStopPosition = (stopPosition) => {
		return _elementor_editor_props.sizePropTypeUtil.create({
			size: stopPosition,
			unit: "%"
		});
	};
	var createKeyframeSettings = () => {
		return createPropValue("keyframe-stop-settings", {});
	};
	var createEmptyKeyframes = () => {
		return createPropValue("keyframes", []);
	};
	var createKeyframeStop = (stopPosition) => {
		return createPropValue("keyframe-stop", {
			stop: createStopPosition(stopPosition),
			settings: createKeyframeSettings()
		});
	};
	var createCustomEffect = () => {
		return createPropValue("custom-effect", { keyframes: createEmptyKeyframes() });
	};
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/context/custom-effect/utils/sanitise-custom-effects.ts
	var EMPTY_PROP_CHECKS = {
		number: (value) => value === null || value === "",
		size: (value) => value.size === null || value.size === ""
	};
	var sanitiseCustomEffects = (customEffect) => {
		var _customEffect$value;
		var _customEffect$value2;
		const stops = customEffect === null || customEffect === void 0 || (_customEffect$value = customEffect.value) === null || _customEffect$value === void 0 || (_customEffect$value = _customEffect$value.keyframes) === null || _customEffect$value === void 0 ? void 0 : _customEffect$value.value;
		if (!stops) return customEffect;
		const sanitisedStops = stops.map(sanitiseStop).filter((stop) => stop !== null);
		return _objectSpread2(_objectSpread2({}, customEffect), {}, { value: _objectSpread2(_objectSpread2({}, customEffect.value), {}, { keyframes: _objectSpread2(_objectSpread2({}, customEffect === null || customEffect === void 0 || (_customEffect$value2 = customEffect.value) === null || _customEffect$value2 === void 0 ? void 0 : _customEffect$value2.keyframes), {}, { value: sanitisedStops }) }) });
	};
	var sanitiseStop = (stop) => {
		const settings = stripNullValues(stop.value.settings.value);
		if (Object.keys(settings).length === 0) return null;
		return _objectSpread2(_objectSpread2({}, stop), {}, { value: _objectSpread2(_objectSpread2({}, stop.value), {}, { settings: _objectSpread2(_objectSpread2({}, stop.value.settings), {}, { value: settings }) }) });
	};
	var isTypedProp = (value) => {
		return typeof value === "object" && value !== null && "$$type" in value;
	};
	var stripNullValues = (settings) => {
		return Object.fromEntries(Object.entries(settings).map(([key, val]) => [key, sanitisePropValue(val)]).filter(([, val]) => val !== null));
	};
	var sanitisePropValue = (value) => {
		if (!isTypedProp(value)) return value;
		const checker = EMPTY_PROP_CHECKS[value.$$type];
		if (checker) return checker(value.value) ? null : value;
		if (typeof value.value === "object" && value.value !== null) {
			const stripped = stripNullValues(value.value);
			if (Object.keys(stripped).length === 0) return null;
			return _objectSpread2(_objectSpread2({}, value), {}, { value: stripped });
		}
		return value;
	};
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/context/custom-effect/custom-effect-context.tsx
	var CustomEffectContext = (0, react.createContext)(null);
	var CustomEffectProvider = ({ children, value, onChange }) => {
		const [stop, setStop] = (0, react.useState)(0);
		const createEffect = () => {
			onChange(createCustomEffect());
		};
		const updateSettings = (key, newValue) => {
			var _findKeyframeStop;
			const customEffect = value !== null && value !== void 0 ? value : createCustomEffect();
			onChange(sanitiseCustomEffects(mergeKeyframe(customEffect, patchKeyframe((_findKeyframeStop = findKeyframeStop(customEffect, stop)) !== null && _findKeyframeStop !== void 0 ? _findKeyframeStop : createKeyframeStop(stop), { [key]: newValue }))));
		};
		return /* @__PURE__ */ react.createElement(CustomEffectContext.Provider, { value: {
			customEffect: value,
			setStop,
			stop,
			setValue: updateSettings,
			createEffect
		} }, children);
	};
	function useCustomEffect(key) {
		const context = (0, react.useContext)(CustomEffectContext);
		if (!context) throw new Error("useCustomEffect must be used within CustomEffectProvider");
		const { customEffect, setValue, createEffect, setStop, stop } = context;
		if (!key) return {
			customEffect,
			selectStop: setStop,
			createCustomEffect: createEffect
		};
		return {
			value: getSetting(customEffect, stop, key),
			selectStop: setStop,
			setValue: (newValue) => setValue(key, newValue)
		};
	}
	var findKeyframeStop = (customEffect, stop) => {
		var _customEffect$value;
		const keyframes = customEffect === null || customEffect === void 0 || (_customEffect$value = customEffect.value) === null || _customEffect$value === void 0 || (_customEffect$value = _customEffect$value.keyframes) === null || _customEffect$value === void 0 ? void 0 : _customEffect$value.value;
		if (!keyframes) return null;
		return keyframes.find((keyframeStop) => keyframeStop.value.stop.value.size === stop);
	};
	var getSetting = (customEffect, stop, key) => {
		var _keyframeStop$value$s;
		const keyframeStop = findKeyframeStop(customEffect, stop);
		if (!keyframeStop) return null;
		return (_keyframeStop$value$s = keyframeStop.value.settings.value[key]) !== null && _keyframeStop$value$s !== void 0 ? _keyframeStop$value$s : null;
	};
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/context/collapsable-section-context.tsx
	var CollapsableSectionContext = (0, react.createContext)(null);
	var CollapsableSectionProvider = ({ children }) => {
		const [openSections, setOpenSections] = (0, react.useState)({});
		const [scrollPosition, setScrollPosition] = (0, react.useState)(0);
		const setSectionOpen = (0, react.useCallback)((label, open) => {
			setOpenSections((prev) => _objectSpread2(_objectSpread2({}, prev), {}, { [label]: open }));
		}, []);
		return /* @__PURE__ */ react.createElement(CollapsableSectionContext.Provider, { value: {
			openSections,
			scrollPosition,
			setScrollPosition,
			setSectionOpen
		} }, children);
	};
	var useScrollPosition = () => {
		const context = (0, react.useContext)(CollapsableSectionContext);
		if (!context) throw new Error("useScrollPosition must be used within SectionOpenProvider");
		const { scrollPosition, setScrollPosition } = context;
		return {
			scrollPosition,
			setScrollPosition
		};
	};
	var useSectionOpen = (label) => {
		var _openSections$label;
		const context = (0, react.useContext)(CollapsableSectionContext);
		if (!context) throw new Error("useSectionOpen must be used within SectionOpenProvider");
		const { openSections, setSectionOpen } = context;
		const isOpen = (_openSections$label = openSections[label]) !== null && _openSections$label !== void 0 ? _openSections$label : false;
		return {
			isOpen,
			toggle: (0, react.useCallback)(() => {
				setSectionOpen(label, !isOpen);
			}, [
				setSectionOpen,
				isOpen,
				label
			])
		};
	};
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/components/custom-effects/ui/field-layout.tsx
	var FieldLayout = ({ label, children }) => {
		return /* @__PURE__ */ react.createElement(_elementor_editor_controls.PopoverGridContainer, null, /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			item: true,
			xs: 6
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ControlFormLabel, null, label)), /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			item: true,
			xs: 6
		}, children));
	};
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/components/custom-effects/ui/axis.tsx
	var Axis = ({ configs, units, value, defaultUnit, setValue, propTypeUtil }) => {
		const handleChange = (size, bind) => {
			setValue(propTypeUtil.create(_objectSpread2(_objectSpread2({}, value), { [bind]: _elementor_editor_props.sizePropTypeUtil.create(size) })));
		};
		return /* @__PURE__ */ react.createElement(_elementor_editor_editing_panel.SectionContent, null, configs.map(({ label, bind, startIcon }) => {
			var _value$bind;
			return /* @__PURE__ */ react.createElement(FieldLayout, {
				key: label,
				label
			}, /* @__PURE__ */ react.createElement(SizeComponent, {
				startIcon,
				units,
				value: value === null || value === void 0 || (_value$bind = value[bind]) === null || _value$bind === void 0 ? void 0 : _value$bind.value,
				defaultUnit,
				onChange: (size) => handleChange(size, bind)
			}));
		}));
	};
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/components/custom-effects/controls/move.tsx
	var UNITS$3 = [
		"px",
		"%",
		"em",
		"rem",
		"vw"
	];
	var DEFAULT_UNIT$3 = "px";
	var configs$3 = [
		{
			label: (0, _wordpress_i18n.__)("Move X", "elementor-pro"),
			bind: "x",
			startIcon: /* @__PURE__ */ react.createElement(_elementor_icons.ArrowRightIcon, { fontSize: "tiny" })
		},
		{
			label: (0, _wordpress_i18n.__)("Move Y", "elementor-pro"),
			bind: "y",
			startIcon: /* @__PURE__ */ react.createElement(_elementor_icons.ArrowDownSmallIcon, { fontSize: "tiny" })
		},
		{
			label: (0, _wordpress_i18n.__)("Move Z", "elementor-pro"),
			bind: "z",
			startIcon: /* @__PURE__ */ react.createElement(_elementor_icons.ArrowDownLeftIcon, { fontSize: "tiny" })
		}
	];
	var Move = () => {
		const { value, setValue } = useCustomEffect("move");
		return /* @__PURE__ */ react.createElement(Axis, {
			configs: configs$3,
			value: value === null || value === void 0 ? void 0 : value.value,
			propTypeUtil: _elementor_editor_props.moveTransformPropTypeUtil,
			setValue,
			units: UNITS$3,
			defaultUnit: DEFAULT_UNIT$3
		});
	};
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/components/custom-effects/controls/opacity.tsx
	var UNITS$2 = ["%"];
	var DEFAULT_UNIT$2 = "%";
	var Opacity = () => {
		const { value, setValue } = useCustomEffect("opacity");
		const handleChange = (size) => {
			setValue(_elementor_editor_props.sizePropTypeUtil.create(size));
		};
		return /* @__PURE__ */ react.createElement(FieldLayout, { label: (0, _wordpress_i18n.__)("Opacity", "elementor-pro") }, /* @__PURE__ */ react.createElement(SizeComponent, {
			units: UNITS$2,
			defaultUnit: DEFAULT_UNIT$2,
			value: value === null || value === void 0 ? void 0 : value.value,
			onChange: handleChange
		}));
	};
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/components/custom-effects/controls/rotate.tsx
	var UNITS$1 = [
		"deg",
		"rad",
		"grad",
		"turn"
	];
	var DEFAULT_UNIT$1 = "deg";
	var configs$2 = [
		{
			label: (0, _wordpress_i18n.__)("Rotate X", "elementor-pro"),
			bind: "x",
			startIcon: /* @__PURE__ */ react.createElement(_elementor_icons.Arrow360Icon, { fontSize: "tiny" })
		},
		{
			label: (0, _wordpress_i18n.__)("Rotate Y", "elementor-pro"),
			bind: "y",
			startIcon: /* @__PURE__ */ react.createElement(_elementor_icons.Arrow360Icon, {
				fontSize: "tiny",
				style: { transform: "scaleX(-1) rotate(-90deg)" }
			})
		},
		{
			label: (0, _wordpress_i18n.__)("Rotate Z", "elementor-pro"),
			bind: "z",
			startIcon: /* @__PURE__ */ react.createElement(_elementor_icons.RotateClockwiseIcon, { fontSize: "tiny" })
		}
	];
	var Rotate = () => {
		const { value, setValue } = useCustomEffect("rotate");
		return /* @__PURE__ */ react.createElement(Axis, {
			configs: configs$2,
			value: value === null || value === void 0 ? void 0 : value.value,
			propTypeUtil: _elementor_editor_props.rotateTransformPropTypeUtil,
			setValue,
			units: UNITS$1,
			defaultUnit: DEFAULT_UNIT$1
		});
	};
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/components/custom-effects/ui/number-field.tsx
	var NumberField = ({ value, onChange, startIcon, step, min, max }) => {
		const numberValue = value === null || value === void 0 ? void 0 : value.value;
		const handleChange = (event) => {
			const newValue = "" !== event.target.value ? Number(event.target.value) : null;
			onChange(_elementor_editor_props.numberPropTypeUtil.create(newValue));
		};
		return /* @__PURE__ */ react.createElement(_elementor_editor_controls.NumberInput, {
			size: "tiny",
			type: "number",
			fullWidth: true,
			value: isValid(numberValue) ? numberValue : "",
			onInput: handleChange,
			inputProps: {
				step,
				min,
				max
			},
			InputProps: { startAdornment: startIcon ? /* @__PURE__ */ react.createElement(_elementor_ui.InputAdornment, { position: "start" }, startIcon) : void 0 }
		});
	};
	var isValid = (value) => {
		return value !== null && value !== void 0 && !Number.isNaN(Number(value));
	};
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/components/custom-effects/controls/scale.tsx
	var SCALE_STEP = .1;
	var configs$1 = [{
		label: (0, _wordpress_i18n.__)("Scale X", "elementor-pro"),
		bind: "x",
		startIcon: /* @__PURE__ */ react.createElement(_elementor_icons.ArrowRightIcon, { fontSize: "tiny" })
	}, {
		label: (0, _wordpress_i18n.__)("Scale Y", "elementor-pro"),
		bind: "y",
		startIcon: /* @__PURE__ */ react.createElement(_elementor_icons.ArrowDownSmallIcon, { fontSize: "tiny" })
	}];
	var Scale = () => {
		const { value, setValue } = useCustomEffect("scale");
		const propValue = value === null || value === void 0 ? void 0 : value.value;
		const handleChange = (newValue, bind) => {
			setValue(_elementor_editor_props.scaleTransformPropTypeUtil.create(_objectSpread2(_objectSpread2({}, propValue), { [bind]: newValue })));
		};
		return /* @__PURE__ */ react.createElement(_elementor_editor_editing_panel.SectionContent, null, configs$1.map(({ bind, label, startIcon }) => /* @__PURE__ */ react.createElement(FieldLayout, {
			key: label,
			label
		}, /* @__PURE__ */ react.createElement(NumberField, {
			step: SCALE_STEP,
			value: propValue === null || propValue === void 0 ? void 0 : propValue[bind],
			onChange: (newValue) => handleChange(newValue, bind),
			startIcon
		}))));
	};
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/components/custom-effects/controls/skew.tsx
	var UNITS = [
		"deg",
		"rad",
		"grad",
		"turn"
	];
	var DEFAULT_UNIT = "deg";
	var configs = [{
		label: (0, _wordpress_i18n.__)("Skew X", "elementor-pro"),
		bind: "x",
		startIcon: /* @__PURE__ */ react.createElement(_elementor_icons.ArrowRightIcon, { fontSize: "tiny" })
	}, {
		label: (0, _wordpress_i18n.__)("Skew Y", "elementor-pro"),
		bind: "y",
		startIcon: /* @__PURE__ */ react.createElement(_elementor_icons.ArrowLeftIcon, {
			fontSize: "tiny",
			style: { transform: "scaleX(-1) rotate(-90deg)" }
		})
	}];
	var Skew = () => {
		const { value, setValue } = useCustomEffect("skew");
		return /* @__PURE__ */ react.createElement(Axis, {
			configs,
			value: value === null || value === void 0 ? void 0 : value.value,
			propTypeUtil: _elementor_editor_props.skewTransformPropTypeUtil,
			setValue,
			units: UNITS,
			defaultUnit: DEFAULT_UNIT
		});
	};
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/components/custom-effects/ui/collapsable-section.tsx
	var CollapsableSection = ({ label, children }) => {
		const { isOpen, toggle } = useSectionOpen(label);
		const id = (0, react.useId)();
		const labelId = `label-${id}`;
		const contentId = `content-${id}`;
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.ListItemButton, {
			id: labelId,
			"aria-controls": contentId,
			"aria-label": `${label} section`,
			onClick: toggle,
			sx: {
				"&:hover": { backgroundColor: "transparent" },
				paddingInline: 0
			}
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			alignItems: "center",
			justifyItems: "start",
			flexGrow: 1,
			gap: .5
		}, /* @__PURE__ */ react.createElement(_elementor_ui.ListItemText, {
			secondary: label,
			secondaryTypographyProps: {
				color: "text.primary",
				variant: "caption",
				fontWeight: "bold"
			},
			sx: {
				flexGrow: 0,
				flexShrink: 1,
				marginInlineEnd: 1
			}
		})), /* @__PURE__ */ react.createElement(_elementor_editor_ui.CollapseIcon, {
			open: isOpen,
			color: "secondary",
			fontSize: "tiny",
			sx: { ml: 1 }
		})), /* @__PURE__ */ react.createElement(_elementor_ui.Collapse, {
			id: contentId,
			"aria-labelledby": labelId,
			in: isOpen,
			timeout: "auto"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			gap: 2.5,
			pb: 2
		}, /* @__PURE__ */ react.createElement(_elementor_editor_editing_panel.SectionContent, null, children))), /* @__PURE__ */ react.createElement(_elementor_ui.Divider, null));
	};
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/components/custom-effects/content.tsx
	var Content = ({ stopPosition }) => {
		const scrollRef = (0, react.useRef)(null);
		const { selectStop } = useCustomEffect();
		const { scrollPosition, setScrollPosition } = useScrollPosition();
		(0, react.useEffect)(() => {
			selectStop(stopPosition);
		}, [selectStop, stopPosition]);
		(0, react.useEffect)(() => {
			const element = scrollRef.current;
			if (element) element.scrollTop = scrollPosition;
		}, [scrollPosition]);
		const handleScroll = (0, react.useCallback)(() => {
			const element = scrollRef.current;
			if (element) setScrollPosition(element.scrollTop);
		}, [setScrollPosition]);
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			p: 1.5,
			ref: scrollRef,
			onScroll: handleScroll,
			sx: {
				maxHeight: 245,
				overflowY: "auto"
			}
		}, /* @__PURE__ */ react.createElement(_elementor_ui.List, {
			disablePadding: true,
			component: "div"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, { pb: 1.5 }, /* @__PURE__ */ react.createElement(Opacity, null)), /* @__PURE__ */ react.createElement(_elementor_ui.Divider, null), /* @__PURE__ */ react.createElement(CollapsableSection, { label: "Scale" }, /* @__PURE__ */ react.createElement(Scale, null)), /* @__PURE__ */ react.createElement(CollapsableSection, { label: "Move" }, /* @__PURE__ */ react.createElement(Move, null)), /* @__PURE__ */ react.createElement(CollapsableSection, { label: "Rotate" }, /* @__PURE__ */ react.createElement(Rotate, null)), /* @__PURE__ */ react.createElement(CollapsableSection, { label: "Skew" }, /* @__PURE__ */ react.createElement(Skew, null))));
	};
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/components/custom-effects/keyframes.tsx
	var Keyframes = () => {
		const { getTabsProps, getTabProps, getTabPanelProps } = (0, _elementor_ui.useTabs)("from");
		return /* @__PURE__ */ react.createElement(CollapsableSectionProvider, null, /* @__PURE__ */ react.createElement(_elementor_ui.Tabs, _objectSpread2({
			size: "small",
			variant: "fullWidth",
			"aria-label": (0, _wordpress_i18n.__)("Custom Effect", "elementor-pro")
		}, getTabsProps()), /* @__PURE__ */ react.createElement(_elementor_ui.Tab, _objectSpread2({ label: (0, _wordpress_i18n.__)("From", "elementor-pro") }, getTabProps("from"))), /* @__PURE__ */ react.createElement(_elementor_ui.Tab, _objectSpread2({ label: (0, _wordpress_i18n.__)("To", "elementor-pro") }, getTabProps("to")))), /* @__PURE__ */ react.createElement(_elementor_ui.Divider, null), /* @__PURE__ */ react.createElement(_elementor_ui.TabPanel, _objectSpread2({ sx: { p: 0 } }, getTabPanelProps("from")), /* @__PURE__ */ react.createElement(Content, {
			key: "from",
			stopPosition: 0
		})), /* @__PURE__ */ react.createElement(_elementor_ui.TabPanel, _objectSpread2({ sx: { p: 0 } }, getTabPanelProps("to")), /* @__PURE__ */ react.createElement(Content, {
			key: "to",
			stopPosition: 100
		})));
	};
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/components/custom-effects/ui/edit-toggle-button.tsx
	var EditToggleButton = (0, react.forwardRef)(({ disabled = false, onClick }, ref) => {
		const openProps = {};
		const isEditing = !Boolean(disabled);
		if (isEditing) Object.assign(openProps, {
			"aria-haspopup": "dialog",
			"aria-expanded": isEditing,
			onClick
		});
		return /* @__PURE__ */ react.createElement(_elementor_ui.ToggleButton, _objectSpread2({
			ref,
			value: "custom",
			size: "tiny",
			disabled
		}, openProps), /* @__PURE__ */ react.createElement(_elementor_icons.PencilIcon, { fontSize: "tiny" }));
	});
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/components/custom-effects/ui/row.tsx
	var Row = ({ justify, children }) => {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			justifyContent: justify
		}, children);
	};
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/components/custom-effects/popover.tsx
	var Popover = ({ autoOpen: shouldOpen }) => {
		const [autoOpen, setAutoOpen] = (0, react.useState)(!!shouldOpen);
		const popupState = (0, _elementor_ui.usePopupState)({ variant: "popover" });
		const anchorRef = (0, react.useRef)(null);
		const { customEffect, createCustomEffect } = useCustomEffect();
		const openPopover = () => {
			popupState.open(anchorRef.current);
		};
		const closePopover = () => {
			popupState.close();
			setAutoOpen(false);
		};
		(0, react.useEffect)(() => {
			if (popupState.isOpen && !customEffect) createCustomEffect();
		}, [popupState.isOpen]);
		(0, react.useEffect)(() => {
			if (autoOpen && anchorRef.current) popupState.open(anchorRef.current);
		}, [autoOpen]);
		return /* @__PURE__ */ react.createElement(Row, { justify: "flex-end" }, /* @__PURE__ */ react.createElement(EditToggleButton, {
			ref: anchorRef,
			onClick: openPopover,
			disabled: popupState.isOpen
		}), popupState.isOpen && /* @__PURE__ */ react.createElement(_elementor_ui.Popover, _objectSpread2(_objectSpread2({
			anchorOrigin: {
				vertical: "center",
				horizontal: "right"
			},
			transformOrigin: {
				vertical: 50,
				horizontal: -25
			}
		}, (0, _elementor_ui.bindPopover)(popupState)), {}, { onClose: closePopover }), /* @__PURE__ */ react.createElement(_elementor_editor_ui.PopoverHeader, {
			icon: /* @__PURE__ */ react.createElement(_elementor_icons.SwipeIcon, { fontSize: "tiny" }),
			title: (0, _wordpress_i18n.__)("Custom effect", "elementor-pro"),
			onClose: closePopover
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Divider, null), /* @__PURE__ */ react.createElement(_elementor_editor_ui.PopoverBody, {
			width: 297,
			height: 280
		}, /* @__PURE__ */ react.createElement(Keyframes, null))));
	};
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/components/custom-effects/custom-effects.tsx
	var CustomEffect = ({ value, onChange }) => {
		return /* @__PURE__ */ react.createElement(CustomEffectProvider, {
			value,
			onChange
		}, /* @__PURE__ */ react.createElement(Popover, { autoOpen: !value }));
	};
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/components/custom-effects/custom-effects-expired.tsx
	var CustomEffectExpired = () => {
		return /* @__PURE__ */ react.createElement(Row, { justify: "flex-end" }, /* @__PURE__ */ react.createElement(EditToggleButton, { disabled: true }));
	};
	//#endregion
	//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
	function hasWindow() {
		return typeof window !== "undefined";
	}
	function getWindow(node) {
		var _node$ownerDocument;
		return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
	}
	function isNode(value) {
		if (!hasWindow()) return false;
		return value instanceof Node || value instanceof getWindow(value).Node;
	}
	function isShadowRoot(value) {
		if (!hasWindow() || typeof ShadowRoot === "undefined") return false;
		return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
	}
	/*!
	* tabbable 6.5.0
	* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
	*/
	var candidateSelector = /* #__PURE__ */ [
		"input:not([inert]):not([inert] *)",
		"select:not([inert]):not([inert] *)",
		"textarea:not([inert]):not([inert] *)",
		"a[href]:not([inert]):not([inert] *)",
		"area[href]:not([inert]):not([inert] *)",
		"button:not([inert]):not([inert] *)",
		"[tabindex]:not(slot):not([inert]):not([inert] *)",
		"audio[controls]:not([inert]):not([inert] *)",
		"video[controls]:not([inert]):not([inert] *)",
		"[contenteditable]:not([contenteditable=\"false\"]):not([inert]):not([inert] *)",
		"details>summary:first-of-type:not([inert]):not([inert] *)",
		"details:not([inert]):not([inert] *)"
	].join(",");
	var NoElement = typeof Element === "undefined";
	var matches = NoElement ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
	var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
		var _element$getRootNode;
		return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
	} : function(element) {
		return element === null || element === void 0 ? void 0 : element.ownerDocument;
	};
	/**
	* Determines if a node is inert or in an inert ancestor.
	* @param {Node} [node]
	* @param {boolean} [lookUp] If true and `node` is not inert, looks up at ancestors to
	*  see if any of them are inert. If false, only `node` itself is considered.
	* @returns {boolean} True if inert itself or by way of being in an inert ancestor.
	*  False if `node` is falsy.
	*/
	var _isInert = function isInert(node, lookUp) {
		var _node$getAttribute;
		if (lookUp === void 0) lookUp = true;
		var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, "inert");
		return inertAtt === "" || inertAtt === "true" || lookUp && node && (typeof node.closest === "function" ? node.closest("[inert]") : _isInert(node.parentNode));
	};
	/**
	* Determines if a node's content is editable.
	* @param {Element} [node]
	* @returns True if it's content-editable; false if it's not or `node` is falsy.
	*/
	var isContentEditable = function isContentEditable(node) {
		var _node$getAttribute2;
		var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, "contenteditable");
		return attValue === "" || attValue === "true";
	};
	/**
	* @param {Element} el container to check in
	* @param {boolean} includeContainer add container to check
	* @param {(node: Element) => boolean} filter filter candidates
	* @returns {Element[]}
	*/
	var getCandidates = function getCandidates(el, includeContainer, filter) {
		if (_isInert(el)) return [];
		var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
		if (includeContainer && matches.call(el, candidateSelector)) candidates.unshift(el);
		candidates = candidates.filter(filter);
		return candidates;
	};
	/**
	* @callback GetShadowRoot
	* @param {Element} element to check for shadow root
	* @returns {ShadowRoot|boolean} ShadowRoot if available or boolean indicating if a shadowRoot is attached but not available.
	*/
	/**
	* @callback ShadowRootFilter
	* @param {Element} shadowHostNode the element which contains shadow content
	* @returns {boolean} true if a shadow root could potentially contain valid candidates.
	*/
	/**
	* @typedef {Object} CandidateScope
	* @property {Element} scopeParent contains inner candidates
	* @property {Element[]} candidates list of candidates found in the scope parent
	*/
	/**
	* @typedef {Object} IterativeOptions
	* @property {GetShadowRoot|boolean} getShadowRoot true if shadow support is enabled; falsy if not;
	*  if a function, implies shadow support is enabled and either returns the shadow root of an element
	*  or a boolean stating if it has an undisclosed shadow root
	* @property {(node: Element) => boolean} filter filter candidates
	* @property {boolean} flatten if true then result will flatten any CandidateScope into the returned list
	* @property {ShadowRootFilter} shadowRootFilter filter shadow roots;
	*/
	/**
	* @param {Element[]} elements list of element containers to match candidates from
	* @param {boolean} includeContainer add container list to check
	* @param {IterativeOptions} options
	* @returns {Array.<Element|CandidateScope>}
	*/
	var _getCandidatesIteratively = function getCandidatesIteratively(elements, includeContainer, options) {
		var candidates = [];
		var elementsToCheck = Array.from(elements);
		while (elementsToCheck.length) {
			var element = elementsToCheck.shift();
			if (_isInert(element, false)) continue;
			if (element.tagName === "SLOT") {
				var assigned = element.assignedElements();
				var nestedCandidates = _getCandidatesIteratively(assigned.length ? assigned : element.children, true, options);
				if (options.flatten) candidates.push.apply(candidates, nestedCandidates);
				else candidates.push({
					scopeParent: element,
					candidates: nestedCandidates
				});
			} else {
				if (matches.call(element, candidateSelector) && options.filter(element) && (includeContainer || !elements.includes(element))) candidates.push(element);
				var shadowRoot = element.shadowRoot || typeof options.getShadowRoot === "function" && options.getShadowRoot(element);
				var validShadowRoot = !_isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
				if (shadowRoot && validShadowRoot) {
					var _nestedCandidates = _getCandidatesIteratively(shadowRoot === true ? element.children : shadowRoot.children, true, options);
					if (options.flatten) candidates.push.apply(candidates, _nestedCandidates);
					else candidates.push({
						scopeParent: element,
						candidates: _nestedCandidates
					});
				} else elementsToCheck.unshift.apply(elementsToCheck, element.children);
			}
		}
		return candidates;
	};
	/**
	* @private
	* Determines if the node has an explicitly specified `tabindex` attribute.
	* @param {HTMLElement} node
	* @returns {boolean} True if so; false if not.
	*/
	var hasTabIndex = function hasTabIndex(node) {
		return !isNaN(parseInt(node.getAttribute("tabindex"), 10));
	};
	/**
	* Determine the tab index of a given node.
	* @param {HTMLElement} node
	* @returns {number} Tab order (negative, 0, or positive number).
	* @throws {Error} If `node` is falsy.
	*/
	var getTabIndex = function getTabIndex(node) {
		if (!node) throw new Error("No node provided");
		if (node.tabIndex < 0) {
			if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) return 0;
		}
		return node.tabIndex;
	};
	/**
	* Determine the tab index of a given node __for sort order purposes__.
	* @param {HTMLElement} node
	* @param {boolean} [isScope] True for a custom element with shadow root or slot that, by default,
	*  has tabIndex -1, but needs to be sorted by document order in order for its content to be
	*  inserted into the correct sort position.
	* @returns {number} Tab order (negative, 0, or positive number).
	*/
	var getSortOrderTabIndex = function getSortOrderTabIndex(node, isScope) {
		var tabIndex = getTabIndex(node);
		if (tabIndex < 0 && isScope && !hasTabIndex(node)) return 0;
		return tabIndex;
	};
	var sortOrderedTabbables = function sortOrderedTabbables(a, b) {
		return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
	};
	var isInput = function isInput(node) {
		return node.tagName === "INPUT";
	};
	var isHiddenInput = function isHiddenInput(node) {
		return isInput(node) && node.type === "hidden";
	};
	var isDetailsWithSummary = function isDetailsWithSummary(node) {
		return node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
			return child.tagName === "SUMMARY";
		});
	};
	var getCheckedRadio = function getCheckedRadio(nodes, form) {
		for (var i = 0; i < nodes.length; i++) if (nodes[i].checked && nodes[i].form === form) return nodes[i];
	};
	var isTabbableRadio = function isTabbableRadio(node) {
		if (!node.name) return true;
		var radioScope = node.form || getRootNode(node);
		var queryRadios = function queryRadios(name) {
			return radioScope.querySelectorAll("input[type=\"radio\"][name=\"" + name + "\"]");
		};
		var radioSet;
		if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") radioSet = queryRadios(window.CSS.escape(node.name));
		else try {
			radioSet = queryRadios(node.name);
		} catch (err) {
			console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
			return false;
		}
		var checked = getCheckedRadio(radioSet, node.form);
		return !checked || checked === node;
	};
	var isRadio = function isRadio(node) {
		return isInput(node) && node.type === "radio";
	};
	var isNonTabbableRadio = function isNonTabbableRadio(node) {
		return isRadio(node) && !isTabbableRadio(node);
	};
	var isNodeAttached = function isNodeAttached(node) {
		var _nodeRoot;
		var nodeRoot = node && getRootNode(node);
		var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;
		var attached = false;
		if (nodeRoot && nodeRoot !== node) {
			var _nodeRootHost;
			var _nodeRootHost$ownerDo;
			var _node$ownerDocument;
			attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
			while (!attached && nodeRootHost) {
				var _nodeRoot2;
				var _nodeRootHost2;
				var _nodeRootHost2$ownerD;
				nodeRoot = getRootNode(nodeRootHost);
				nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
				attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
			}
		}
		return attached;
	};
	var isZeroArea = function isZeroArea(node) {
		var _node$getBoundingClie = node.getBoundingClientRect();
		var width = _node$getBoundingClie.width;
		var height = _node$getBoundingClie.height;
		return width === 0 && height === 0;
	};
	var isHidden = function isHidden(node, _ref) {
		var displayCheck = _ref.displayCheck;
		var getShadowRoot = _ref.getShadowRoot;
		if (displayCheck === "full-native") {
			if ("checkVisibility" in node) return !node.checkVisibility({
				checkOpacity: false,
				opacityProperty: false,
				contentVisibilityAuto: true,
				visibilityProperty: true,
				checkVisibilityCSS: true
			});
		}
		var visibility = getComputedStyle(node).visibility;
		if (visibility === "hidden" || visibility === "collapse") return true;
		var nodeUnderDetails = matches.call(node, "details>summary:first-of-type") ? node.parentElement : node;
		if (matches.call(nodeUnderDetails, "details:not([open]) *")) return true;
		if (!displayCheck || displayCheck === "full" || displayCheck === "full-native" || displayCheck === "legacy-full") {
			if (typeof getShadowRoot === "function") {
				var originalNode = node;
				while (node) {
					var parentElement = node.parentElement;
					var rootNode = getRootNode(node);
					if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true) return isZeroArea(node);
					else if (node.assignedSlot) node = node.assignedSlot;
					else if (!parentElement && rootNode !== node.ownerDocument) node = rootNode.host;
					else node = parentElement;
				}
				node = originalNode;
			}
			if (isNodeAttached(node)) return !node.getClientRects().length;
			if (displayCheck !== "legacy-full") return true;
		} else if (displayCheck === "non-zero-area") return isZeroArea(node);
		return false;
	};
	var isDisabledFromFieldset = function isDisabledFromFieldset(node) {
		if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
			var parentNode = node.parentElement;
			while (parentNode) {
				if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
					for (var i = 0; i < parentNode.children.length; i++) {
						var child = parentNode.children.item(i);
						if (child.tagName === "LEGEND") return matches.call(parentNode, "fieldset[disabled] *") ? true : !child.contains(node);
					}
					return true;
				}
				parentNode = parentNode.parentElement;
			}
		}
		return false;
	};
	var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
		if (node.disabled || isHiddenInput(node) || isHidden(node, options) || isDetailsWithSummary(node) || isDisabledFromFieldset(node)) return false;
		return true;
	};
	var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(options, node) {
		if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) return false;
		return true;
	};
	var isShadowRootTabbable = function isShadowRootTabbable(shadowHostNode) {
		var tabIndex = parseInt(shadowHostNode.getAttribute("tabindex"), 10);
		if (isNaN(tabIndex) || tabIndex >= 0) return true;
		return false;
	};
	/**
	* @param {Array.<Element|CandidateScope>} candidates
	* @returns Element[]
	*/
	var _sortByOrder = function sortByOrder(candidates) {
		var regularTabbables = [];
		var orderedTabbables = [];
		candidates.forEach(function(item, i) {
			var isScope = !!item.scopeParent;
			var element = isScope ? item.scopeParent : item;
			var candidateTabindex = getSortOrderTabIndex(element, isScope);
			var elements = isScope ? _sortByOrder(item.candidates) : element;
			if (candidateTabindex === 0) isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
			else orderedTabbables.push({
				documentOrder: i,
				tabIndex: candidateTabindex,
				item,
				isScope,
				content: elements
			});
		});
		return orderedTabbables.sort(sortOrderedTabbables).reduce(function(acc, sortable) {
			sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
			return acc;
		}, []).concat(regularTabbables);
	};
	var tabbable = function tabbable(container, options) {
		options = options || {};
		var candidates;
		if (options.getShadowRoot) candidates = _getCandidatesIteratively([container], options.includeContainer, {
			filter: isNodeMatchingSelectorTabbable.bind(null, options),
			flatten: false,
			getShadowRoot: options.getShadowRoot,
			shadowRootFilter: isShadowRootTabbable
		});
		else candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
		return _sortByOrder(candidates);
	};
	//#endregion
	//#region node_modules/@floating-ui/react/dist/floating-ui.react.utils.mjs
	function isSafari() {
		return /apple/i.test(navigator.vendor);
	}
	function activeElement(doc) {
		let activeElement = doc.activeElement;
		while (((_activeElement = activeElement) == null || (_activeElement = _activeElement.shadowRoot) == null ? void 0 : _activeElement.activeElement) != null) {
			var _activeElement;
			activeElement = activeElement.shadowRoot.activeElement;
		}
		return activeElement;
	}
	function contains(parent, child) {
		if (!parent || !child) return false;
		const rootNode = child.getRootNode == null ? void 0 : child.getRootNode();
		if (parent.contains(child)) return true;
		if (rootNode && isShadowRoot(rootNode)) {
			let next = child;
			while (next) {
				if (parent === next) return true;
				next = next.parentNode || next.host;
			}
		}
		return false;
	}
	function getDocument(node) {
		return (node == null ? void 0 : node.ownerDocument) || document;
	}
	var index = typeof document !== "undefined" ? react$1.useLayoutEffect : function noop() {};
	_objectSpread2({}, react$1).useInsertionEffect;
	var getTabbableOptions = () => ({
		getShadowRoot: true,
		displayCheck: typeof ResizeObserver === "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
	});
	function getTabbableIn(container, dir) {
		const list = tabbable(container, getTabbableOptions());
		const len = list.length;
		if (len === 0) return;
		const active = activeElement(getDocument(container));
		const index = list.indexOf(active);
		return list[index === -1 ? dir === 1 ? 0 : len - 1 : index + dir];
	}
	function getNextTabbable(referenceElement) {
		return getTabbableIn(getDocument(referenceElement).body, 1) || referenceElement;
	}
	function getPreviousTabbable(referenceElement) {
		return getTabbableIn(getDocument(referenceElement).body, -1) || referenceElement;
	}
	function isOutsideEvent(event, container) {
		const containerElement = container || event.currentTarget;
		const relatedTarget = event.relatedTarget;
		return !relatedTarget || !contains(containerElement, relatedTarget);
	}
	function disableFocusInside(container) {
		tabbable(container, getTabbableOptions()).forEach((element) => {
			element.dataset.tabindex = element.getAttribute("tabindex") || "";
			element.setAttribute("tabindex", "-1");
		});
	}
	function enableFocusInside(container) {
		container.querySelectorAll("[data-tabindex]").forEach((element) => {
			const tabindex = element.dataset.tabindex;
			delete element.dataset.tabindex;
			if (tabindex) element.setAttribute("tabindex", tabindex);
			else element.removeAttribute("tabindex");
		});
	}
	//#endregion
	//#region scripts/vite/shims/react-jsx-runtime.js
	function jsx(type, props, key) {
		return react.createElement(type, key === void 0 ? props : _objectSpread2(_objectSpread2({}, props), {}, { key }));
	}
	var jsxs = jsx;
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
	//#region node_modules/@floating-ui/react/dist/floating-ui.react.mjs
	var ARROW_LEFT = "ArrowLeft";
	var ARROW_RIGHT = "ArrowRight";
	var ARROW_UP = "ArrowUp";
	var ARROW_DOWN = "ArrowDown";
	var horizontalKeys = [ARROW_LEFT, ARROW_RIGHT];
	var verticalKeys = [ARROW_UP, ARROW_DOWN];
	[...horizontalKeys, ...verticalKeys];
	var SafeReact = _objectSpread2({}, react$1);
	var serverHandoffComplete = false;
	var count = 0;
	var genId = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + count++;
	function useFloatingId() {
		const [id, setId] = react$1.useState(() => serverHandoffComplete ? genId() : void 0);
		index(() => {
			if (id == null) setId(genId());
		}, []);
		react$1.useEffect(() => {
			serverHandoffComplete = true;
		}, []);
		return id;
	}
	/**
	* Uses React 18's built-in `useId()` when available, or falls back to a
	* slightly less performant (requiring a double render) implementation for
	* earlier React versions.
	* @see https://floating-ui.com/docs/react-utils#useid
	*/
	var useId = SafeReact.useId || useFloatingId;
	function createAttribute(name) {
		return "data-floating-ui-" + name;
	}
	var HIDDEN_STYLES = {
		border: 0,
		clip: "rect(0 0 0 0)",
		height: "1px",
		margin: "-1px",
		overflow: "hidden",
		padding: 0,
		position: "fixed",
		whiteSpace: "nowrap",
		width: "1px",
		top: 0,
		left: 0
	};
	var FocusGuard = /*#__PURE__*/ react$1.forwardRef(function FocusGuard(props, ref) {
		const [role, setRole] = react$1.useState();
		index(() => {
			if (isSafari()) setRole("button");
		}, []);
		const restProps = {
			ref,
			tabIndex: 0,
			role,
			"aria-hidden": role ? void 0 : true,
			[createAttribute("focus-guard")]: "",
			style: HIDDEN_STYLES
		};
		return /*#__PURE__*/ jsx("span", _objectSpread2(_objectSpread2({}, props), restProps));
	});
	var HIDDEN_OWNER_STYLES = {
		clipPath: "inset(50%)",
		position: "fixed",
		top: 0,
		left: 0
	};
	var PortalContext = /*#__PURE__*/ react$1.createContext(null);
	var attr = /*#__PURE__*/ createAttribute("portal");
	/**
	* @see https://floating-ui.com/docs/FloatingPortal#usefloatingportalnode
	*/
	function useFloatingPortalNode(props) {
		if (props === void 0) props = {};
		const { id, root } = props;
		const uniqueId = useId();
		const portalContext = usePortalContext();
		const [portalNode, setPortalNode] = react$1.useState(null);
		const portalNodeRef = react$1.useRef(null);
		index(() => {
			return () => {
				portalNode == null || portalNode.remove();
				queueMicrotask(() => {
					portalNodeRef.current = null;
				});
			};
		}, [portalNode]);
		index(() => {
			if (!uniqueId) return;
			if (portalNodeRef.current) return;
			const existingIdRoot = id ? document.getElementById(id) : null;
			if (!existingIdRoot) return;
			const subRoot = document.createElement("div");
			subRoot.id = uniqueId;
			subRoot.setAttribute(attr, "");
			existingIdRoot.appendChild(subRoot);
			portalNodeRef.current = subRoot;
			setPortalNode(subRoot);
		}, [id, uniqueId]);
		index(() => {
			if (root === null) return;
			if (!uniqueId) return;
			if (portalNodeRef.current) return;
			let container = root || (portalContext == null ? void 0 : portalContext.portalNode);
			if (container && !isNode(container)) container = container.current;
			container = container || document.body;
			let idWrapper = null;
			if (id) {
				idWrapper = document.createElement("div");
				idWrapper.id = id;
				container.appendChild(idWrapper);
			}
			const subRoot = document.createElement("div");
			subRoot.id = uniqueId;
			subRoot.setAttribute(attr, "");
			container = idWrapper || container;
			container.appendChild(subRoot);
			portalNodeRef.current = subRoot;
			setPortalNode(subRoot);
		}, [
			id,
			root,
			uniqueId,
			portalContext
		]);
		return portalNode;
	}
	/**
	* Portals the floating element into a given container element вЂ” by default,
	* outside of the app root and into the body.
	* This is necessary to ensure the floating element can appear outside any
	* potential parent containers that cause clipping (such as `overflow: hidden`),
	* while retaining its location in the React tree.
	* @see https://floating-ui.com/docs/FloatingPortal
	*/
	function FloatingPortal(props) {
		const { children, id, root, preserveTabOrder = true } = props;
		const portalNode = useFloatingPortalNode({
			id,
			root
		});
		const [focusManagerState, setFocusManagerState] = react$1.useState(null);
		const beforeOutsideRef = react$1.useRef(null);
		const afterOutsideRef = react$1.useRef(null);
		const beforeInsideRef = react$1.useRef(null);
		const afterInsideRef = react$1.useRef(null);
		const modal = focusManagerState == null ? void 0 : focusManagerState.modal;
		const open = focusManagerState == null ? void 0 : focusManagerState.open;
		const shouldRenderGuards = !!focusManagerState && !focusManagerState.modal && focusManagerState.open && preserveTabOrder && !!(root || portalNode);
		react$1.useEffect(() => {
			if (!portalNode || !preserveTabOrder || modal) return;
			function onFocus(event) {
				if (portalNode && isOutsideEvent(event)) (event.type === "focusin" ? enableFocusInside : disableFocusInside)(portalNode);
			}
			portalNode.addEventListener("focusin", onFocus, true);
			portalNode.addEventListener("focusout", onFocus, true);
			return () => {
				portalNode.removeEventListener("focusin", onFocus, true);
				portalNode.removeEventListener("focusout", onFocus, true);
			};
		}, [
			portalNode,
			preserveTabOrder,
			modal
		]);
		react$1.useEffect(() => {
			if (!portalNode) return;
			if (open) return;
			enableFocusInside(portalNode);
		}, [open, portalNode]);
		return /*#__PURE__*/ jsxs(PortalContext.Provider, {
			value: react$1.useMemo(() => ({
				preserveTabOrder,
				beforeOutsideRef,
				afterOutsideRef,
				beforeInsideRef,
				afterInsideRef,
				portalNode,
				setFocusManagerState
			}), [preserveTabOrder, portalNode]),
			children: [
				shouldRenderGuards && portalNode && /*#__PURE__*/ jsx(FocusGuard, {
					"data-type": "outside",
					ref: beforeOutsideRef,
					onFocus: (event) => {
						if (isOutsideEvent(event, portalNode)) {
							var _beforeInsideRef$curr;
							(_beforeInsideRef$curr = beforeInsideRef.current) == null || _beforeInsideRef$curr.focus();
						} else {
							const prevTabbable = getPreviousTabbable(focusManagerState ? focusManagerState.domReference : null);
							prevTabbable == null || prevTabbable.focus();
						}
					}
				}),
				shouldRenderGuards && portalNode && /*#__PURE__*/ jsx("span", {
					"aria-owns": portalNode.id,
					style: HIDDEN_OWNER_STYLES
				}),
				portalNode && /*#__PURE__*/ react_dom.createPortal(children, portalNode),
				shouldRenderGuards && portalNode && /*#__PURE__*/ jsx(FocusGuard, {
					"data-type": "outside",
					ref: afterOutsideRef,
					onFocus: (event) => {
						if (isOutsideEvent(event, portalNode)) {
							var _afterInsideRef$curre;
							(_afterInsideRef$curre = afterInsideRef.current) == null || _afterInsideRef$curre.focus();
						} else {
							const nextTabbable = getNextTabbable(focusManagerState ? focusManagerState.domReference : null);
							nextTabbable == null || nextTabbable.focus();
							focusManagerState != null && focusManagerState.closeOnFocusOut && (focusManagerState == null || focusManagerState.onOpenChange(false, event.nativeEvent, "focus-out"));
						}
					}
				})
			]
		});
	}
	var usePortalContext = () => react$1.useContext(PortalContext);
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/hooks/use-scroll-interaction.ts
	function useScrollInteraction() {
		const [data, setData] = (0, react.useState)(null);
		(0, react.useEffect)(() => {
			const handler = (e) => setData(e.detail);
			window.addEventListener(_elementor_editor_interactions.SCROLL_INTERACTION_EVENT, handler);
			return () => window.removeEventListener(_elementor_editor_interactions.SCROLL_INTERACTION_EVENT, handler);
		}, []);
		return data;
	}
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/utils/compute-line-positions.ts
	function resolvePercentage(value, fallback) {
		const parsed = (0, _elementor_editor_interactions.parseSizeValue)(value, ["%"]).size;
		return typeof parsed === "number" ? parsed : fallback;
	}
	function getIframeViewport() {
		var _window$elementor;
		var _iframe$clientHeight;
		var _iframe$contentDocume;
		var _iframe$contentDocume2;
		var _iframe$contentWindow;
		var _iframe$contentWindow2;
		const iframe = (_window$elementor = window.elementor) === null || _window$elementor === void 0 || (_window$elementor = _window$elementor.$preview) === null || _window$elementor === void 0 ? void 0 : _window$elementor[0];
		return {
			viewHeight: (_iframe$clientHeight = iframe === null || iframe === void 0 ? void 0 : iframe.clientHeight) !== null && _iframe$clientHeight !== void 0 ? _iframe$clientHeight : 0,
			pageHeight: (_iframe$contentDocume = iframe === null || iframe === void 0 || (_iframe$contentDocume2 = iframe.contentDocument) === null || _iframe$contentDocume2 === void 0 ? void 0 : _iframe$contentDocume2.documentElement.scrollHeight) !== null && _iframe$contentDocume !== void 0 ? _iframe$contentDocume : 0,
			scrollY: (_iframe$contentWindow = iframe === null || iframe === void 0 || (_iframe$contentWindow2 = iframe.contentWindow) === null || _iframe$contentWindow2 === void 0 ? void 0 : _iframe$contentWindow2.scrollY) !== null && _iframe$contentWindow !== void 0 ? _iframe$contentWindow : 0
		};
	}
	function computeLinePositions(active) {
		const startPct = resolvePercentage(active.start, _elementor_editor_interactions.DEFAULT_VALUES.start);
		const endPct = resolvePercentage(active.end, _elementor_editor_interactions.DEFAULT_VALUES.end);
		if (active.relativeTo !== "page") return {
			startTop: `${startPct}%`,
			endTop: `${endPct}%`,
			startVisible: true,
			endVisible: true,
			startPct,
			endPct
		};
		const { viewHeight, pageHeight, scrollY } = getIframeViewport();
		const startY = startPct / 100 * pageHeight - scrollY;
		const endY = endPct / 100 * pageHeight - scrollY;
		return {
			startTop: `${startY}px`,
			endTop: `${endY}px`,
			startVisible: startY >= 0 && startY <= viewHeight,
			endVisible: endY >= 0 && endY <= viewHeight,
			startPct,
			endPct
		};
	}
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/components/scroll-grid-overlay.tsx
	var CANVAS_WRAPPER_ID = "elementor-preview-responsive-wrapper";
	var OVERLAY_COLOR = "rgba(113, 217, 149, 0.9)";
	var GridLine = (0, _elementor_ui.styled)(_elementor_ui.Box)({
		position: "absolute",
		left: 0,
		width: "100%",
		borderTop: `2px dashed ${OVERLAY_COLOR}`,
		pointerEvents: "none",
		zIndex: 1e4
	});
	var LineLabel = (0, _elementor_ui.styled)(_elementor_ui.Typography)({
		position: "absolute",
		right: 12,
		top: -20,
		fontSize: 11,
		fontWeight: 600,
		lineHeight: "18px",
		padding: "0 6px",
		borderRadius: 3,
		backgroundColor: OVERLAY_COLOR,
		color: "#fff",
		pointerEvents: "none",
		userSelect: "none",
		whiteSpace: "nowrap"
	});
	var ScrollGridOverlay = () => {
		const active = useScrollInteraction();
		if (!active) return null;
		const { startTop, endTop, startVisible, endVisible, startPct, endPct } = computeLinePositions(active);
		return /* @__PURE__ */ react.createElement(FloatingPortal, { id: CANVAS_WRAPPER_ID }, startVisible && /* @__PURE__ */ react.createElement(GridLine, { style: { top: startTop } }, /* @__PURE__ */ react.createElement(LineLabel, null, "Start ", startPct, "%")), endVisible && /* @__PURE__ */ react.createElement(GridLine, { style: { top: endTop } }, /* @__PURE__ */ react.createElement(LineLabel, null, "End ", endPct, "%")));
	};
	//#endregion
	//#region packages/packages/pro/editor-interactions-extended/src/init.ts
	function init() {
		return _init.apply(this, arguments);
	}
	function _init() {
		_init = _asyncToGenerator(function* () {
			(0, _elementor_editor.injectIntoTop)({
				id: "scroll-grid-overlay",
				component: ScrollGridOverlay
			});
			const isLicenseExpired = yield (0, _elementor_license_api.fetchLicenseStatus)().catch(() => true);
			(0, _elementor_editor_interactions.registerInteractionsControl)({
				type: "replay",
				component: isLicenseExpired ? ReplayExpired : Replay,
				options: Object.keys(_elementor_editor_interactions.REPLAY_OPTIONS)
			});
			(0, _elementor_editor_interactions.registerInteractionsControl)({
				type: "easing",
				component: isLicenseExpired ? EasingExpired : Easing,
				options: Object.keys(_elementor_editor_interactions.EASING_OPTIONS)
			});
			(0, _elementor_editor_interactions.registerInteractionsControl)({
				type: "trigger",
				component: isLicenseExpired ? TriggerExpired : Trigger,
				options: Object.keys(_elementor_editor_interactions.TRIGGER_OPTIONS)
			});
			(0, _elementor_editor_interactions.registerInteractionsControl)({
				type: "start",
				component: isLicenseExpired ? StartExpired : Start
			});
			(0, _elementor_editor_interactions.registerInteractionsControl)({
				type: "end",
				component: isLicenseExpired ? EndExpired : End
			});
			(0, _elementor_editor_interactions.registerInteractionsControl)({
				type: "relativeTo",
				component: isLicenseExpired ? RelativeToExpired : RelativeTo,
				options: Object.keys(RELATIVE_TO_OPTIONS)
			});
			(0, _elementor_editor_interactions.registerInteractionsControl)({
				type: "effect",
				component: isLicenseExpired ? EffectProExpired : EffectPro,
				options: Object.keys(_elementor_editor_interactions.EFFECT_OPTIONS)
			});
			(0, _elementor_editor_interactions.registerInteractionsControl)({
				type: "customEffects",
				component: isLicenseExpired ? CustomEffectExpired : CustomEffect
			});
			(0, _elementor_editor_interactions.registerInteractionsControl)({
				type: "repeat",
				component: isLicenseExpired ? RepeatExpired : Repeat
			});
			(0, _elementor_editor_interactions.registerInteractionsControl)({
				type: "times",
				component: isLicenseExpired ? TimesExpired : Times
			});
		});
		return _init.apply(this, arguments);
	}
	//#endregion
	exports.init = init;
})(this.elementorV2.editorInteractionsExtended = this.elementorV2.editorInteractionsExtended || {}, elementorV2.editor, elementorV2.editorInteractions, elementorV2.licenseApi, React, elementorV2.editorUi, elementorV2.ui, elementorV2.editorControls, elementorV2.editorProps, wp.i18n, elementorV2.icons, elementorV2.editorEditingPanel, ReactDOM);

window.elementorV2.editorInteractionsExtended?.init?.();
/*! pro-elements - v4.3.0 - 22-09-2026 */
this.elementorV2 = this.elementorV2 || {};
(function(exports, react, _elementor_core_adapter_utils, _elementor_editor_props, _elementor_editor_ui, _elementor_editor_variables, _elementor_icons, _elementor_license_api, _elementor_ui, _elementor_schema, _elementor_editor_controls, _wordpress_i18n) {
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
	react = __toESM(react);
	//#region packages/packages/pro/editor-variables-extended/src/hooks/use-size-field-refs.ts
	var useSizeFieldRefs = (externalRef) => {
		const anchorRef = (0, react.useRef)(null);
		return {
			anchorRef,
			setAnchorRef: (0, react.useCallback)((el) => {
				var _externalRef$current;
				anchorRef.current = (_externalRef$current = externalRef === null || externalRef === void 0 ? void 0 : externalRef.current) !== null && _externalRef$current !== void 0 ? _externalRef$current : el;
			}, [externalRef])
		};
	};
	var CUSTOM_UNIT_KEY = "custom";
	var AUTO_UNIT_KEY = "auto";
	var DEFAULT_UNITS = [
		"px",
		"%",
		"em",
		"rem",
		"ch",
		"vw",
		"vh",
		"s",
		"ms"
	];
	var EXTENDED_UNITS = [AUTO_UNIT_KEY, CUSTOM_UNIT_KEY];
	var allUnits = [...DEFAULT_UNITS, ...EXTENDED_UNITS];
	var getAvailableUnits = (propType) => {
		if (!propType) return normalizeUnits(allUnits);
		const settings = extractSettings(propType);
		if (!Array.isArray(settings.available_units) || settings.available_units.length === 0) return normalizeUnits(allUnits);
		return normalizeUnits(settings.available_units);
	};
	var getDefaultUnit = (propType) => {
		var _extractSettings$defa;
		var _extractSettings;
		if (!propType) return "px";
		return (_extractSettings$defa = (_extractSettings = extractSettings(propType)) === null || _extractSettings === void 0 ? void 0 : _extractSettings.default_unit) !== null && _extractSettings$defa !== void 0 ? _extractSettings$defa : "px";
	};
	var extractSettings = (propType) => {
		if ((propType === null || propType === void 0 ? void 0 : propType.kind) !== "union") return {};
		const sizeBranch = propType.prop_types[_elementor_editor_props.sizePropTypeUtil.key];
		if (sizeBranch) return sizeBranch.settings;
		for (const branch of Object.values(propType.prop_types)) {
			const settings = branch === null || branch === void 0 ? void 0 : branch.settings;
			if (settings && Array.isArray(settings.available_units)) return settings;
		}
		return {};
	};
	var normalizeUnits = (units) => {
		if ((0, _elementor_core_adapter_utils.isCoreAtLeast)("3.35")) return units;
		return units.filter((unit) => unit !== CUSTOM_UNIT_KEY);
	};
	//#endregion
	//#region packages/packages/pro/editor-variables-extended/src/prop-types/size-variable-prop-type.ts
	var sizeVariablePropTypeUtil = (0, _elementor_editor_props.createPropUtils)("global-size-variable", _elementor_schema.z.string());
	var GLOBAL_CUSTOM_SIZE_VARIABLE_KEY = "global-custom-size-variable";
	//#endregion
	//#region packages/packages/pro/editor-variables-extended/src/sync/get-supported-units.ts
	var getSupportedUnits = () => {
		var _extendedWindow$eleme;
		var _extendedWindow$eleme2;
		return (_extendedWindow$eleme = (_extendedWindow$eleme2 = window.elementor) === null || _extendedWindow$eleme2 === void 0 || (_extendedWindow$eleme2 = _extendedWindow$eleme2.config) === null || _extendedWindow$eleme2 === void 0 ? void 0 : _extendedWindow$eleme2.supported_size_units) !== null && _extendedWindow$eleme !== void 0 ? _extendedWindow$eleme : [];
	};
	//#endregion
	//#region packages/packages/pro/editor-variables-extended/src/utils/transform-utils.ts
	var parseSizeValue = (value, defaultUnit, unitsLookup, propTypeKey) => {
		if (propTypeKey && propTypeKey === "global-custom-size-variable") return {
			size: value,
			unit: "custom"
		};
		if ("string" !== typeof value) {
			if ((value === null || value === void 0 ? void 0 : value.unit) === "custom") return value;
			if (value.unit === "auto") return {
				size: null,
				unit: value.unit
			};
			return value;
		}
		const EMPTY_VALUE = {
			size: null,
			unit: defaultUnit !== null && defaultUnit !== void 0 ? defaultUnit : "px"
		};
		const unitsToCheck = unitsLookup !== null && unitsLookup !== void 0 ? unitsLookup : getSupportedUnits();
		if (value === "auto") {
			if (unitsToCheck.includes(value)) return {
				size: "",
				unit: value
			};
			return EMPTY_VALUE;
		}
		const match = value.match(/^(-?\d*\.?\d+)([a-z%]+)$/i);
		if (match) {
			const size = parseFloat(match[1]);
			const unit = match[2];
			if (unitsToCheck.includes(unit)) return {
				size,
				unit
			};
		}
		return EMPTY_VALUE;
	};
	var formatSizeValue = ({ size, unit }) => {
		if (unit === "auto") return "auto";
		if (unit === "custom") return size;
		return `${size !== null && size !== void 0 ? size : ""}${unit}`;
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
	//#region packages/packages/pro/editor-variables-extended/src/hooks/use-size-value.ts
	var useSizeValue = (value, onChange, onUnitChange, propType, propTypeKey) => {
		const defaultUnit = getDefaultUnit(propType);
		const units = getAvailableUnits(propType);
		const [currentValue, setCurrentValue] = (0, react.useState)(parseSizeValue(value, defaultUnit, units, propTypeKey));
		(0, react.useEffect)(() => {
			onChange(computeOutputValue(currentValue));
		}, [currentValue, onChange]);
		(0, react.useEffect)(() => {
			if (currentValue.unit === "custom") onUnitChange === null || onUnitChange === void 0 || onUnitChange(currentValue.unit);
		}, []);
		const setSize = (newSize) => {
			setCurrentValue((prev) => {
				const { unit } = prev;
				if (unit === "auto") return prev;
				if (unit === "custom") return _objectSpread2(_objectSpread2({}, prev), {}, { size: newSize });
				return _objectSpread2(_objectSpread2({}, prev), {}, { size: toStrictNumber(newSize) });
			});
		};
		const setUnit = (unit) => {
			onUnitChange(unit);
			setCurrentValue((prev) => ({
				unit,
				size: unit === "auto" ? null : prev.size
			}));
		};
		return {
			currentValue,
			units,
			setSize,
			setUnit
		};
	};
	var toStrictNumber = (value) => {
		return value.trim() === "" ? null : Number(value);
	};
	var computeOutputValue = (value) => {
		const { size, unit } = value;
		if (unit === "auto") return "auto";
		if (size === null) return "";
		return formatSizeValue(value);
	};
	//#endregion
	//#region packages/packages/pro/editor-variables-extended/src/bc/is-unit-extended-option.ts
	/**
	* @param      unit
	* @deprecated Will be removed in 4.2.0. Use `isUnitExtendedOption` from `@elementor/editor-controls` when Core provides it.
	*/
	var isUnitExtendedOption$1 = _elementor_editor_controls.isUnitExtendedOption !== null && _elementor_editor_controls.isUnitExtendedOption !== void 0 ? _elementor_editor_controls.isUnitExtendedOption : ((unit) => {
		return ["auto", "custom"].includes(unit);
	});
	//#endregion
	//#region packages/packages/pro/editor-variables-extended/src/bc/use-typing-buffer-pro.ts
	/**
	* @param      options
	* @deprecated Will be removed in 4.2.0. Use `useTypingBuffer` from `@elementor/editor-controls` when Core provides it.
	*/
	function useTypingBuffer$1(options = {}) {
		const { limit = 3, timeout = 600 } = options;
		const inputBufferRef = (0, react.useRef)("");
		const timeoutRef = (0, react.useRef)(null);
		const appendKey = (key) => {
			inputBufferRef.current = (inputBufferRef.current + key).slice(-limit);
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
			timeoutRef.current = setTimeout(() => {
				inputBufferRef.current = "";
				timeoutRef.current = null;
			}, timeout);
			return inputBufferRef.current;
		};
		const startsWith = (haystack, needle) => {
			if (3 < haystack.length && 2 > needle.length) return false;
			return haystack.startsWith(needle);
		};
		(0, react.useEffect)(() => {
			return () => {
				inputBufferRef.current = "";
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
	__name(useTypingBuffer$1, "useTypingBuffer");
	//#endregion
	//#region packages/packages/pro/editor-variables-extended/src/bc/use-typing-buffer.ts
	/**
	* @deprecated Will be removed in 4.2.0. Use `useTypingBuffer` from `@elementor/editor-controls` when Core provides it.
	*/
	var useTypingBuffer = _elementor_editor_controls.useTypingBuffer !== null && _elementor_editor_controls.useTypingBuffer !== void 0 ? _elementor_editor_controls.useTypingBuffer : useTypingBuffer$1;
	//#endregion
	//#region packages/packages/pro/editor-variables-extended/src/hooks/use-unit-shortcuts.ts
	var useUnitShortcuts = (unit, units, onUnitMatched) => {
		const { appendKey, startsWith } = useTypingBuffer();
		return (0, react.useCallback)((event) => {
			const { key, altKey, ctrlKey, metaKey } = event;
			if (altKey || ctrlKey || metaKey) return;
			if (isUnitExtendedOption$1(unit) && !isNaN(Number(key))) {
				const defaultUnit = units === null || units === void 0 ? void 0 : units[0];
				if (defaultUnit) onUnitMatched(defaultUnit);
				return;
			}
			if (!/^[a-zA-Z%]$/.test(key)) return;
			event.preventDefault();
			const char = key.toLowerCase();
			const newBuffer = appendKey(char);
			const matched = units.find((u) => startsWith(u, newBuffer));
			if (matched) onUnitMatched(matched);
		}, [
			unit,
			units,
			onUnitMatched,
			appendKey,
			startsWith
		]);
	};
	//#endregion
	//#region packages/packages/pro/editor-variables-extended/src/components/size/popover/custom-size-popover.tsx
	var SIZE = "tiny";
	var CustomSizePopover = ({ popupState, value, onChange, anchorRef }) => {
		var _anchorRef$current;
		const inputRef = (0, react.useRef)(null);
		const handleClose = () => {
			popupState.close();
		};
		(0, react.useEffect)(() => {
			focusInput();
		}, []);
		const focusInput = () => requestAnimationFrame(() => {
			if (inputRef.current) inputRef.current.focus();
		});
		return /* @__PURE__ */ react.createElement(_elementor_ui.Popover, _objectSpread2(_objectSpread2({
			slotProps: { paper: { sx: {
				minWidth: "250px",
				width: ((_anchorRef$current = anchorRef.current) === null || _anchorRef$current === void 0 ? void 0 : _anchorRef$current.offsetWidth) + "px",
				borderRadius: 2
			} } },
			anchorOrigin: {
				vertical: "bottom",
				horizontal: "center"
			},
			transformOrigin: {
				vertical: "top",
				horizontal: "center"
			}
		}, (0, _elementor_ui.bindPopover)(popupState)), {}, { onClose: handleClose }), /* @__PURE__ */ react.createElement(_elementor_editor_ui.PopoverHeader, {
			title: (0, _wordpress_i18n.__)("CSS function", "elementor-pro"),
			onClose: handleClose,
			icon: /* @__PURE__ */ react.createElement(_elementor_icons.MathFunctionIcon, { fontSize: SIZE })
		}), /* @__PURE__ */ react.createElement(_elementor_ui.TextField, {
			value: value !== null && value !== void 0 ? value : "",
			onChange: (e) => onChange(e.target.value),
			size: "tiny",
			type: "text",
			fullWidth: true,
			inputProps: {
				ref: inputRef,
				onKeyDown: (event) => {
					if (event.key === "Enter") {
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
	//#endregion
	//#region packages/packages/pro/editor-variables-extended/src/components/size/size-input.tsx
	var SizeInput = (0, react.forwardRef)(({ value, onChange, onKeyUp, onKeyDown, type, InputProps, focused }, ref) => {
		const getCursorStyle = () => ({ input: { cursor: InputProps.readOnly ? "default !important" : void 0 } });
		return /* @__PURE__ */ react.createElement(_elementor_ui.TextField, {
			ref,
			size: "tiny",
			type,
			fullWidth: true,
			value: value !== null && value !== void 0 ? value : "",
			onKeyUp,
			onKeyDown,
			onChange: (e) => onChange(e.target.value),
			InputProps,
			sx: getCursorStyle(),
			focused
		});
	});
	//#endregion
	//#region packages/packages/pro/editor-variables-extended/src/components/size/unit-selection.tsx
	var optionLabelOverrides = { custom: /* @__PURE__ */ react.createElement(_elementor_icons.MathFunctionIcon, { fontSize: "tiny" }) };
	var menuItemContentStyles = {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center"
	};
	var UnitSelection = ({ options, value, onClick, showPrimaryColor }) => {
		var _optionLabelOverrides;
		const popupState = (0, _elementor_ui.usePopupState)({
			variant: "popover",
			popupId: (0, react.useId)()
		});
		const handleMenuItemClick = (index) => {
			onClick(options[index]);
			popupState.close();
		};
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(StyledButton, _objectSpread2({
			isPrimaryColor: showPrimaryColor,
			size: "small"
		}, (0, _elementor_ui.bindTrigger)(popupState)), (_optionLabelOverrides = optionLabelOverrides[value]) !== null && _optionLabelOverrides !== void 0 ? _optionLabelOverrides : value), /* @__PURE__ */ react.createElement(_elementor_ui.Menu, _objectSpread2({ MenuListProps: { dense: true } }, (0, _elementor_ui.bindMenu)(popupState)), options.map((option, index) => {
			var _optionLabelOverrides2;
			return /* @__PURE__ */ react.createElement(_elementor_editor_ui.MenuListItem, {
				key: option,
				onClick: () => handleMenuItemClick(index),
				primaryTypographyProps: {
					variant: "caption",
					sx: _objectSpread2(_objectSpread2({}, menuItemContentStyles), {}, { lineHeight: "1" })
				},
				menuItemTextProps: { sx: menuItemContentStyles }
			}, (_optionLabelOverrides2 = optionLabelOverrides[option]) !== null && _optionLabelOverrides2 !== void 0 ? _optionLabelOverrides2 : option.toUpperCase());
		})));
	};
	var StyledButton = (0, _elementor_ui.styled)(_elementor_ui.Button, { shouldForwardProp: (prop) => prop !== "isPrimaryColor" })(({ isPrimaryColor, theme }) => ({
		color: isPrimaryColor ? theme.palette.text.primary : theme.palette.text.tertiary,
		font: "inherit",
		minWidth: "initial",
		textTransform: "uppercase"
	}));
	//#endregion
	//#region packages/packages/pro/editor-variables-extended/src/components/size/size-field.tsx
	var RESTRICTED_INPUT_KEYS = [
		"e",
		"E",
		"+",
		"-"
	];
	var SizeField = ({ value, onChange, propType, onPropTypeKeyChange, propTypeKey, ref, onKeyDown }) => {
		const { anchorRef, setAnchorRef } = useSizeFieldRefs(ref);
		const popupState = (0, _elementor_ui.usePopupState)({ variant: "popover" });
		const openPopover = () => {
			popupState.open(anchorRef === null || anchorRef === void 0 ? void 0 : anchorRef.current);
		};
		const handleUnitChange = (unit) => {
			if (unit !== "custom" && propTypeKey === "global-custom-size-variable") onPropTypeKeyChange === null || onPropTypeKeyChange === void 0 || onPropTypeKeyChange(sizeVariablePropTypeUtil.key);
			if (unit === "custom") {
				onPropTypeKeyChange === null || onPropTypeKeyChange === void 0 || onPropTypeKeyChange("global-custom-size-variable");
				openPopover();
			}
		};
		const { currentValue, units, setSize, setUnit } = useSizeValue(value, onChange, handleUnitChange, propType, propTypeKey);
		const handleShortcutKeys = useUnitShortcuts(currentValue === null || currentValue === void 0 ? void 0 : currentValue.unit, units, setUnit);
		const isUnitExtended = isUnitExtendedOption(currentValue.unit);
		const onSizeInputClick = (event) => {
			const target = event.target;
			if (target instanceof Element && target.closest("input") && currentValue.unit === "custom") openPopover();
		};
		const shouldHighlightUnit = () => {
			return notAnEmptySize(currentValue.size) || currentValue.unit === "auto";
		};
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(SizeInput, {
			ref: setAnchorRef,
			type: isUnitExtended ? "text" : "number",
			value: currentValue.size,
			onChange: setSize,
			onKeyDown: (event) => {
				if (RESTRICTED_INPUT_KEYS.includes(event.key)) event.preventDefault();
				handleShortcutKeys(event);
				onKeyDown === null || onKeyDown === void 0 || onKeyDown(event);
			},
			InputProps: {
				readOnly: isUnitExtended,
				onClick: onSizeInputClick,
				endAdornment: /* @__PURE__ */ react.createElement(_elementor_ui.InputAdornment, { position: "end" }, /* @__PURE__ */ react.createElement(UnitSelection, {
					options: units,
					value: currentValue.unit,
					onClick: setUnit,
					showPrimaryColor: shouldHighlightUnit()
				}))
			}
		}), (anchorRef === null || anchorRef === void 0 ? void 0 : anchorRef.current) && popupState.isOpen && /* @__PURE__ */ react.createElement(CustomSizePopover, {
			popupState,
			anchorRef,
			value: currentValue.size,
			onChange: setSize
		}));
	};
	var isUnitExtendedOption = (unit) => ["auto", "custom"].includes(unit);
	var notAnEmptySize = (value) => null !== value && void 0 !== value && value !== "";
	//#endregion
	//#region packages/packages/pro/editor-variables-extended/src/utils/prop-type-compatibility.ts
	function isPropTypeCompatible(propType, variable) {
		const availableUnits = getAvailableUnits(propType);
		const { unit } = parseSizeValue(variable.value);
		return availableUnits.includes(unit);
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
	//#region packages/packages/pro/editor-variables-extended/src/init.tsx
	var parse = (value, type) => {
		return parseSizeValue(value, void 0, void 0, type);
	};
	function init() {
		return _init.apply(this, arguments);
	}
	function _init() {
		_init = _asyncToGenerator(function* () {
			const isLicenseExpired = yield (0, _elementor_license_api.fetchLicenseStatus)().catch(() => false);
			const commonOptions = _objectSpread2({
				valueField: SizeField,
				icon: _elementor_icons.ExpandDiagonalIcon,
				propTypeUtil: sizeVariablePropTypeUtil,
				fallbackPropTypeUtil: _elementor_editor_props.sizePropTypeUtil,
				variableType: "size",
				valueTransformer: parse
			}, isLicenseExpired && { emptyState: /* @__PURE__ */ react.createElement(_elementor_editor_ui.CtaButton, {
				size: "small",
				href: "https://go.elementor.com/renew-license-manager-size-variable"
			}) });
			(0, _elementor_editor_variables.registerVariableType)(_objectSpread2(_objectSpread2({}, commonOptions), {}, {
				key: sizeVariablePropTypeUtil.key,
				defaultValue: "0px",
				selectionFilter: (variables, propType) => {
					const availableUnits = getAvailableUnits(propType);
					return variables.filter((variable) => {
						const { unit } = parseSizeValue(variable.value);
						return availableUnits.includes(unit);
					});
				},
				isCompatible: isPropTypeCompatible
			}));
			if ((0, _elementor_core_adapter_utils.isCoreAtLeast)("3.35")) (0, _elementor_editor_variables.registerVariableType)(_objectSpread2(_objectSpread2({}, commonOptions), {}, {
				key: GLOBAL_CUSTOM_SIZE_VARIABLE_KEY,
				isCompatible: () => true
			}));
		});
		return _init.apply(this, arguments);
	}
	//#endregion
	exports.init = init;
})(this.elementorV2.editorVariablesExtended = this.elementorV2.editorVariablesExtended || {}, React, elementorV2.coreAdapterUtils, elementorV2.editorProps, elementorV2.editorUi, elementorV2.editorVariables, elementorV2.icons, elementorV2.licenseApi, elementorV2.ui, elementorV2.schema, elementorV2.editorControls, wp.i18n);

window.elementorV2.editorVariablesExtended?.init?.();
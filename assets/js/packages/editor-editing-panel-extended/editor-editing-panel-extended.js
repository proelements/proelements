/*! pro-elements - v4.4.0 - 09-11-2026 */
this.elementorV2 = this.elementorV2 || {};
(function(_elementor_editor_canvas, _elementor_editor_controls_extended, _elementor_editor_editing_panel, _elementor_editor_props, _elementor_license_api, react, _wordpress_i18n, _elementor_editor_controls, _elementor_ui, _elementor_query, _elementor_editor_ui, _elementor_editor_documents, _elementor_editor_elements, _elementor_editor_v1_adapters) {
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
			if (!localStates[metaKey]) setLocalStates((prev) => _objectSpread2(_objectSpread2({}, prev), {}, { [metaKey]: { value: (customCss === null || customCss === void 0 ? void 0 : customCss.raw) || "" } }));
		}, [metaKey]);
		const currentLocalState = (0, react.useMemo)(() => {
			return localStates[metaKey] || { value: (customCss === null || customCss === void 0 ? void 0 : customCss.raw) || "" };
		}, [
			localStates,
			metaKey,
			customCss === null || customCss === void 0 ? void 0 : customCss.raw
		]);
		const handleChange = (value) => {
			setLocalStates((prev) => _objectSpread2(_objectSpread2({}, prev), {}, { [metaKey]: { value } }));
			setCustomCss(value, { history: { propDisplayName: "Custom CSS" } });
		};
		const syntaxRuleOptions = (0, react.useMemo)(() => {
			if (!meta.breakpoint || meta.breakpoint === "desktop") return { rules: { mediaQuery: false } };
		}, [meta.breakpoint]);
		return /* @__PURE__ */ react.createElement(_elementor_editor_editing_panel.SectionContent, { gap: 1 }, /* @__PURE__ */ react.createElement(CustomCssField, null, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			alignItems: "center",
			gap: 1
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ControlFormLabel, null, (0, _wordpress_i18n.__)("CSS code", "elementor-pro")), /* @__PURE__ */ react.createElement(_elementor_editor_controls.ControlAdornments, null))), /* @__PURE__ */ react.createElement(_elementor_editor_controls_extended.CssEditor, {
			syncKey: metaKey,
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
	//#region packages/packages/pro/editor-editing-panel-extended/src/controls/mailchimp/fields-map-prop-type.ts
	var fieldsMapPropTypeUtil = (0, _elementor_editor_props.createArrayPropUtils)(_elementor_editor_props.keyValuePropTypeUtil.key, _elementor_editor_props.keyValuePropTypeUtil.schema, "options");
	//#endregion
	//#region packages/packages/pro/editor-editing-panel-extended/src/controls/mailchimp/mailchimp-control-types.ts
	var MAILCHIMP_CONTROL_TYPE = {
		API_KEY_NOTICE: "mailchimp-api-key-notice",
		AUDIENCE: "mailchimp-audience",
		GROUPS: "mailchimp-groups",
		FIELDS_MAP: "mailchimp-fields-map"
	};
	var MAILCHIMP_SETTING = {
		API_KEY_SOURCE: "mailchimp-api-key-source",
		API_KEY: "mailchimp-api-key",
		AUDIENCE: "mailchimp-audience",
		GROUPS: "mailchimp-groups",
		FIELDS_MAP: "mailchimp-fields-map"
	};
	var MAILCHIMP_API_KEY_SOURCE = {
		DEFAULT: "default",
		CUSTOM: "custom"
	};
	var MAILCHIMP_API_KEY_STATUS_RESOURCE = "api-key-status";
	//#endregion
	//#region packages/packages/pro/editor-editing-panel-extended/src/controls/mailchimp/request-mailchimp-data.ts
	var AJAX_ACTION = "pro_atomic_form_mailchimp_data";
	function requestMailchimpData(data) {
		return new Promise((resolve, reject) => {
			var _window$elementorComm;
			const ajax = (_window$elementorComm = window.elementorCommon) === null || _window$elementorComm === void 0 ? void 0 : _window$elementorComm.ajax;
			if (!(ajax === null || ajax === void 0 ? void 0 : ajax.addRequest)) {
				reject(new Error((0, _wordpress_i18n.__)("Mailchimp data is unavailable.", "elementor-pro")));
				return;
			}
			ajax.addRequest(AJAX_ACTION, {
				data,
				success: (response) => resolve(response),
				error: (error) => reject(new Error("string" === typeof error && error ? error : (0, _wordpress_i18n.__)("Could not load Mailchimp data.", "elementor-pro")))
			}, true);
		});
	}
	//#endregion
	//#region packages/packages/pro/editor-editing-panel-extended/src/controls/mailchimp/use-mailchimp-key-status.ts
	var QUERY_KEY = ["mailchimp", MAILCHIMP_API_KEY_STATUS_RESOURCE];
	function useMailchimpKeyStatus(initialHasGlobalKey) {
		const { data, isLoading } = (0, _elementor_query.useQuery)({
			queryKey: QUERY_KEY,
			queryFn: () => requestMailchimpData({ resource: MAILCHIMP_API_KEY_STATUS_RESOURCE }),
			refetchOnWindowFocus: true,
			retry: false,
			placeholderData: void 0 === initialHasGlobalKey ? void 0 : { has_global_key: initialHasGlobalKey }
		});
		return {
			hasGlobalKey: !!(data === null || data === void 0 ? void 0 : data.has_global_key),
			isLoading
		};
	}
	//#endregion
	//#region packages/packages/pro/editor-editing-panel-extended/src/controls/mailchimp/use-mailchimp-api-key.ts
	function useMailchimpApiKey(initialHasGlobalKey) {
		var _stringPropTypeUtil$e;
		const { settings } = (0, _elementor_editor_editing_panel.useElement)();
		const { hasGlobalKey, isLoading: isKeyStatusLoading } = useMailchimpKeyStatus(initialHasGlobalKey);
		const source = _elementor_editor_props.stringPropTypeUtil.extract(settings[MAILCHIMP_SETTING.API_KEY_SOURCE]) || MAILCHIMP_API_KEY_SOURCE.DEFAULT;
		const customKey = ((_stringPropTypeUtil$e = _elementor_editor_props.stringPropTypeUtil.extract(settings[MAILCHIMP_SETTING.API_KEY])) !== null && _stringPropTypeUtil$e !== void 0 ? _stringPropTypeUtil$e : "").trim();
		const isCustom = MAILCHIMP_API_KEY_SOURCE.CUSTOM === source;
		return {
			source,
			customKey,
			isCustom,
			isKeyAvailable: isCustom ? "" !== customKey : hasGlobalKey,
			hasAnyKey: hasGlobalKey || "" !== customKey,
			isKeyStatusLoading,
			isLoading: !isCustom && isKeyStatusLoading
		};
	}
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
	//#region packages/packages/pro/editor-editing-panel-extended/src/controls/mailchimp/mailchimp-api-key-notice-control.tsx
	var _excluded$2 = ["hasGlobalApiKey"];
	var CORE_NOTICE_CONTROL_TYPE = "notice";
	var MailchimpApiKeyNoticeControl = (0, _elementor_editor_controls.createControl)((_ref) => {
		let { hasGlobalApiKey } = _ref, noticeProps = _objectWithoutProperties(_ref, _excluded$2);
		const { hasAnyKey, isKeyStatusLoading } = useMailchimpApiKey(hasGlobalApiKey);
		const NoticeControl = _elementor_editor_editing_panel.controlsRegistry.get(CORE_NOTICE_CONTROL_TYPE);
		if (hasAnyKey || isKeyStatusLoading || !NoticeControl) return null;
		return /* @__PURE__ */ react.createElement(NoticeControl, noticeProps);
	});
	//#endregion
	//#region packages/packages/pro/editor-editing-panel-extended/src/controls/mailchimp/change-mailchimp-audience.ts
	var AUDIENCE_SCOPED_SETTINGS = [MAILCHIMP_SETTING.GROUPS, MAILCHIMP_SETTING.FIELDS_MAP];
	var TOUCHED_SETTINGS = [MAILCHIMP_SETTING.AUDIENCE, ...AUDIENCE_SCOPED_SETTINGS];
	var changeMailchimpAudience = (0, _elementor_editor_v1_adapters.undoable)({
		do: ({ elementId, audience }) => {
			const previous = (0, _elementor_editor_elements.getElementSettings)(elementId, TOUCHED_SETTINGS);
			(0, _elementor_editor_elements.updateElementSettings)({
				id: elementId,
				props: _objectSpread2({ [MAILCHIMP_SETTING.AUDIENCE]: audience ? _elementor_editor_props.stringPropTypeUtil.create(audience) : null }, Object.fromEntries(AUDIENCE_SCOPED_SETTINGS.map((key) => [key, null]))),
				withHistory: false
			});
			(0, _elementor_editor_documents.setDocumentModifiedStatus)(true);
			return previous;
		},
		undo: ({ elementId }, previous) => {
			(0, _elementor_editor_elements.updateElementSettings)({
				id: elementId,
				props: Object.fromEntries(TOUCHED_SETTINGS.map((key) => {
					var _previous$key;
					return [key, (_previous$key = previous[key]) !== null && _previous$key !== void 0 ? _previous$key : null];
				})),
				withHistory: false
			});
		}
	}, {
		title: ({ elementId }) => (0, _elementor_editor_elements.getElementLabel)(elementId),
		subtitle: (0, _wordpress_i18n.__)("%s edited", "elementor-pro").replace("%s", (0, _wordpress_i18n.__)("Audience", "elementor-pro"))
	});
	var MAILCHIMP_DATA_STALE_TIME = 60 * 1e3;
	var NO_ITEMS = [];
	function useMailchimpData(resource) {
		var _stringPropTypeUtil$e;
		const { settings } = (0, _elementor_editor_editing_panel.useElement)();
		const { source, customKey, isCustom, isKeyAvailable, isLoading: isKeyStatusLoading } = useMailchimpApiKey();
		const debouncedCustomKey = useDebouncedValue(customKey, 500);
		const isAudienceResource = MAILCHIMP_SETTING.AUDIENCE === resource;
		const audience = isAudienceResource ? "" : (_stringPropTypeUtil$e = _elementor_editor_props.stringPropTypeUtil.extract(settings[MAILCHIMP_SETTING.AUDIENCE])) !== null && _stringPropTypeUtil$e !== void 0 ? _stringPropTypeUtil$e : "";
		const apiKey = isCustom ? debouncedCustomKey : "";
		const isKeyPending = isCustom && customKey !== debouncedCustomKey;
		const enabled = isKeyAvailable && !isKeyPending && (isAudienceResource || "" !== audience);
		const { data, isLoading, error } = (0, _elementor_query.useQuery)({
			queryKey: [
				"mailchimp",
				resource,
				source,
				apiKey,
				audience
			],
			queryFn: () => requestMailchimpData({
				resource,
				[MAILCHIMP_SETTING.API_KEY_SOURCE]: source,
				[MAILCHIMP_SETTING.API_KEY]: apiKey,
				[MAILCHIMP_SETTING.AUDIENCE]: audience
			}),
			enabled,
			staleTime: MAILCHIMP_DATA_STALE_TIME,
			refetchOnWindowFocus: false,
			retry: false
		});
		return {
			data: enabled ? data !== null && data !== void 0 ? data : NO_ITEMS : NO_ITEMS,
			isLoading: isKeyStatusLoading || isKeyPending || isLoading,
			error: enabled ? error : null
		};
	}
	function useDebouncedValue(value, delay) {
		const [debouncedValue, setDebouncedValue] = (0, react.useState)(value);
		(0, react.useEffect)(() => {
			const timeout = setTimeout(() => setDebouncedValue(value), delay);
			return () => clearTimeout(timeout);
		}, [value, delay]);
		return debouncedValue;
	}
	//#endregion
	//#region packages/packages/pro/editor-editing-panel-extended/src/controls/mailchimp/mailchimp-audience-control.tsx
	var MENU_PROPS = { MenuListProps: { sx: { maxHeight: "160px" } } };
	var MailchimpAudienceControl = (0, _elementor_editor_controls.createControl)(({ label }) => {
		const { element } = (0, _elementor_editor_editing_panel.useElement)();
		const { value, disabled } = (0, _elementor_editor_controls.useBoundProp)(_elementor_editor_props.stringPropTypeUtil);
		const { isKeyAvailable, isLoading: isKeyStatusLoading } = useMailchimpApiKey();
		const { data: options, isLoading: isDataLoading, error } = useMailchimpData("mailchimp-audience");
		const isLoading = isKeyStatusLoading || isDataLoading;
		const selectedOption = options.find((option) => option.value === value);
		const helperText = getHelperText({
			isLoading,
			isKeyAvailable,
			error,
			isAudienceNotFound: !isLoading && !error && isKeyAvailable && !!value && !selectedOption
		});
		const helperTextId = `${element.id}-mailchimp-audience-helper-text`;
		const isError = "error" === (helperText === null || helperText === void 0 ? void 0 : helperText.severity);
		const handleChange = (event) => {
			const audience = event.target.value || null;
			if (audience !== value) changeMailchimpAudience({
				elementId: element.id,
				audience
			});
		};
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, { gap: .5 }, /* @__PURE__ */ react.createElement(_elementor_editor_editing_panel.ControlTypeContainer, { layout: "two-columns" }, label && /* @__PURE__ */ react.createElement(_elementor_editor_editing_panel.ControlLabel, null, label), /* @__PURE__ */ react.createElement(_elementor_editor_controls.ControlActions, null, /* @__PURE__ */ react.createElement(_elementor_ui.Select, {
			sx: { overflow: "hidden" },
			displayEmpty: true,
			size: "tiny",
			MenuProps: MENU_PROPS,
			"aria-label": (0, _wordpress_i18n.__)("Audience", "elementor-pro"),
			error: isError,
			SelectDisplayProps: {
				"aria-describedby": helperText ? helperTextId : void 0,
				"aria-invalid": isError || void 0
			},
			renderValue: () => {
				var _ref;
				var _selectedOption$label;
				return isLoading ? /* @__PURE__ */ react.createElement(_elementor_ui.CircularProgress, {
					size: 12,
					"aria-label": (0, _wordpress_i18n.__)("Loading audiences", "elementor-pro")
				}) : (_ref = (_selectedOption$label = selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.label) !== null && _selectedOption$label !== void 0 ? _selectedOption$label : value) !== null && _ref !== void 0 ? _ref : "";
			},
			value: value !== null && value !== void 0 ? value : "",
			onChange: handleChange,
			disabled: disabled || isLoading || !isKeyAvailable || !options.length,
			fullWidth: true
		}, options.map((option) => /* @__PURE__ */ react.createElement(_elementor_editor_ui.MenuListItem, {
			key: option.value,
			value: option.value
		}, option.label)), value && !selectedOption && /* @__PURE__ */ react.createElement(_elementor_editor_ui.MenuListItem, {
			value,
			sx: { display: "none" }
		}, value)))), helperText && /* @__PURE__ */ react.createElement(_elementor_ui.FormHelperText, {
			id: helperTextId,
			role: isError ? "alert" : "status",
			error: isError,
			sx: "warning" === helperText.severity ? { color: "warning.main" } : void 0
		}, helperText.message));
	});
	function getHelperText({ isLoading, isKeyAvailable, error, isAudienceNotFound }) {
		if (isLoading) return null;
		if (!isKeyAvailable) return {
			severity: "error",
			message: (0, _wordpress_i18n.__)("`api_key` is required.", "elementor-pro")
		};
		if (error) return {
			severity: "error",
			message: error.message
		};
		if (isAudienceNotFound) return {
			severity: "warning",
			message: (0, _wordpress_i18n.__)("Audience not found for this key.", "elementor-pro")
		};
		return null;
	}
	//#endregion
	//#region packages/packages/pro/editor-editing-panel-extended/src/controls/mailchimp/collect-atomic-form-map-fields.ts
	var LABEL_WIDGET_TYPE = "e-form-label";
	var MAPPABLE_WIDGET_TYPES = /* @__PURE__ */ new Set([
		"e-form-input",
		"e-form-textarea",
		"e-form-checkbox",
		"e-form-radio-button",
		"e-form-date-picker",
		"e-form-time-picker",
		"e-form-select",
		"e-form-file-upload",
		"e-form-hidden"
	]);
	var GROUPED_WIDGET_TYPES = /* @__PURE__ */ new Set(["e-form-checkbox", "e-form-radio-button"]);
	var WIDGET_FIELD_TYPE = {
		"e-form-textarea": "textarea",
		"e-form-checkbox": "checkbox",
		"e-form-radio-button": "radio",
		"e-form-date-picker": "date",
		"e-form-time-picker": "time",
		"e-form-select": "select",
		"e-form-file-upload": "file",
		"e-form-hidden": "hidden"
	};
	function collectAtomicFormMapFields(formElementId) {
		const formContainer = (0, _elementor_editor_elements.getContainer)(formElementId);
		if (!formContainer) return [];
		const labelByInputId = /* @__PURE__ */ new Map();
		const entries = [];
		visitElementContainers(formContainer, (container) => {
			const widgetType = container.model.get("widgetType");
			if (LABEL_WIDGET_TYPE === widgetType) {
				const inputId = readString(getSetting(container, widgetType, "input-id"));
				const text = readLabelText(getSetting(container, widgetType, "text"));
				if (inputId && text && !labelByInputId.has(inputId)) labelByInputId.set(inputId, text);
				return;
			}
			if (widgetType && MAPPABLE_WIDGET_TYPES.has(widgetType)) entries.push(toFieldEntry(container, widgetType));
		});
		return toMapFields(entries, labelByInputId);
	}
	function toFieldEntry(container, widgetType) {
		var _container$settings;
		var _container$settings$g;
		var _WIDGET_FIELD_TYPE$wi;
		const storedCssid = readString((_container$settings = container.settings) === null || _container$settings === void 0 || (_container$settings$g = _container$settings.get) === null || _container$settings$g === void 0 ? void 0 : _container$settings$g.call(_container$settings, "_cssid"));
		return {
			elementId: container.id,
			widgetType,
			storedCssid,
			name: readString(getSetting(container, widgetType, "name")),
			type: "e-form-input" === widgetType ? readString(getSetting(container, widgetType, "type")) || "text" : (_WIDGET_FIELD_TYPE$wi = WIDGET_FIELD_TYPE[widgetType]) !== null && _WIDGET_FIELD_TYPE$wi !== void 0 ? _WIDGET_FIELD_TYPE$wi : "text",
			ownLabel: readString(getSetting(container, widgetType, "label"))
		};
	}
	function toMapFields(entries, labelByInputId) {
		const fields = [];
		const fieldByGroupName = /* @__PURE__ */ new Map();
		const fieldIds = /* @__PURE__ */ new Set();
		const countByWidgetType = /* @__PURE__ */ new Map();
		entries.forEach((entry) => {
			var _countByWidgetType$ge;
			const widgetNumber = ((_countByWidgetType$ge = countByWidgetType.get(entry.widgetType)) !== null && _countByWidgetType$ge !== void 0 ? _countByWidgetType$ge : 0) + 1;
			countByWidgetType.set(entry.widgetType, widgetNumber);
			const id = entry.storedCssid || entry.elementId;
			const aliases = [entry.storedCssid, entry.elementId].filter(Boolean);
			const groupName = GROUPED_WIDGET_TYPES.has(entry.widgetType) ? entry.name : "";
			const group = groupName ? fieldByGroupName.get(groupName) : void 0;
			if (group) {
				group.aliases.push(...aliases.filter((alias) => !group.aliases.includes(alias)));
				return;
			}
			if (fieldIds.has(id)) return;
			const field = {
				id,
				type: entry.type,
				label: groupName || resolveFieldLabel(entry, labelByInputId, widgetNumber),
				aliases
			};
			fieldIds.add(id);
			fields.push(field);
			if (groupName) fieldByGroupName.set(groupName, field);
		});
		return fields;
	}
	function resolveFieldLabel(entry, labelByInputId, widgetNumber) {
		var _getWidgetsCache;
		const storedLabel = entry.ownLabel || entry.storedCssid && labelByInputId.get(entry.storedCssid) || entry.name || entry.storedCssid;
		if (storedLabel) return storedLabel;
		const widgetTitle = (_getWidgetsCache = (0, _elementor_editor_elements.getWidgetsCache)()) === null || _getWidgetsCache === void 0 || (_getWidgetsCache = _getWidgetsCache[entry.widgetType]) === null || _getWidgetsCache === void 0 ? void 0 : _getWidgetsCache.title;
		return widgetTitle ? `${widgetTitle} ${widgetNumber}` : entry.elementId;
	}
	function getSetting(container, widgetType, key) {
		var _container$settings2;
		var _container$settings2$;
		var _getWidgetsCache2;
		var _schema$key$default;
		var _schema$key;
		const value = (_container$settings2 = container.settings) === null || _container$settings2 === void 0 || (_container$settings2$ = _container$settings2.get) === null || _container$settings2$ === void 0 ? void 0 : _container$settings2$.call(_container$settings2, key);
		if (null !== value && void 0 !== value) return value;
		const schema = (_getWidgetsCache2 = (0, _elementor_editor_elements.getWidgetsCache)()) === null || _getWidgetsCache2 === void 0 || (_getWidgetsCache2 = _getWidgetsCache2[widgetType]) === null || _getWidgetsCache2 === void 0 ? void 0 : _getWidgetsCache2.atomic_props_schema;
		return (_schema$key$default = schema === null || schema === void 0 || (_schema$key = schema[key]) === null || _schema$key === void 0 ? void 0 : _schema$key.default) !== null && _schema$key$default !== void 0 ? _schema$key$default : null;
	}
	function readLabelText(text) {
		const value = text === null || text === void 0 ? void 0 : text.value;
		if ("string" === typeof value) return stripHtml(value);
		const content = value === null || value === void 0 ? void 0 : value.content;
		return stripHtml("string" === typeof content ? content : readString(content));
	}
	function stripHtml(value) {
		return value.replace(/<[^>]*>/g, "").trim();
	}
	function readString(value) {
		var _stringPropTypeUtil$e;
		return (_stringPropTypeUtil$e = _elementor_editor_props.stringPropTypeUtil.extract(value)) !== null && _stringPropTypeUtil$e !== void 0 ? _stringPropTypeUtil$e : "";
	}
	function visitElementContainers(container, visitor) {
		var _container$children;
		var _container$children$f;
		(_container$children = container.children) === null || _container$children === void 0 || (_container$children$f = _container$children.forEach) === null || _container$children$f === void 0 || _container$children$f.call(_container$children, (child) => {
			visitor(child);
			visitElementContainers(child, visitor);
		});
	}
	//#endregion
	//#region packages/packages/pro/editor-editing-panel-extended/src/controls/mailchimp/use-atomic-form-map-fields.ts
	var ELEMENT_MUTATION_COMMANDS = [
		"document/elements/create",
		"document/elements/delete",
		"document/elements/move",
		"document/elements/settings",
		"document/elements/set-settings",
		"document/history/undo",
		"document/history/redo"
	];
	function useAtomicFormMapFields(formElementId) {
		const [formFields, setFormFields] = (0, react.useState)(() => collectAtomicFormMapFields(formElementId));
		const collectedFormIdRef = (0, react.useRef)(formElementId);
		(0, react.useEffect)(() => {
			const refreshFormFields = () => {
				const nextFormFields = collectAtomicFormMapFields(formElementId);
				setFormFields((currentFormFields) => JSON.stringify(currentFormFields) === JSON.stringify(nextFormFields) ? currentFormFields : nextFormFields);
			};
			if (collectedFormIdRef.current !== formElementId) {
				collectedFormIdRef.current = formElementId;
				refreshFormFields();
			}
			return (0, _elementor_editor_v1_adapters.__privateListenTo)(ELEMENT_MUTATION_COMMANDS.map((command) => (0, _elementor_editor_v1_adapters.commandEndEvent)(command)), refreshFormFields);
		}, [formElementId]);
		return formFields;
	}
	//#endregion
	//#region packages/packages/pro/editor-editing-panel-extended/src/controls/mailchimp/mailchimp-fields-map-control.tsx
	var EMAIL_TYPE = "email";
	var MailchimpFieldsMapControl = (0, _elementor_editor_controls.createControl)(() => {
		const { element } = (0, _elementor_editor_editing_panel.useElement)();
		const { value, setValue } = (0, _elementor_editor_controls.useBoundProp)(fieldsMapPropTypeUtil);
		const { isKeyAvailable } = useMailchimpApiKey();
		const { data: remoteFields, isLoading, error } = useMailchimpData("mailchimp-fields-map");
		const formFields = useAtomicFormMapFields(element.id);
		if (isLoading) return /* @__PURE__ */ react.createElement(_elementor_ui.Box, { role: "status" }, /* @__PURE__ */ react.createElement(_elementor_ui.CircularProgress, {
			size: 12,
			"aria-label": (0, _wordpress_i18n.__)("Loading fields", "elementor-pro")
		}));
		if (error) return /* @__PURE__ */ react.createElement(_elementor_ui.FormHelperText, {
			error: true,
			role: "alert"
		}, error.message);
		if (!isKeyAvailable) return null;
		if (!remoteFields.length) return /* @__PURE__ */ react.createElement(_elementor_ui.FormHelperText, { role: "status" }, (0, _wordpress_i18n.__)("This audience has no fields to map.", "elementor-pro"));
		const fieldsMap = Object.fromEntries((value !== null && value !== void 0 ? value : []).map((item) => {
			var _keyValuePropTypeUtil;
			var _stringPropTypeUtil$e;
			var _stringPropTypeUtil$e2;
			const { key, value: formFieldId } = (_keyValuePropTypeUtil = _elementor_editor_props.keyValuePropTypeUtil.extract(item)) !== null && _keyValuePropTypeUtil !== void 0 ? _keyValuePropTypeUtil : {};
			return [(_stringPropTypeUtil$e = _elementor_editor_props.stringPropTypeUtil.extract(key)) !== null && _stringPropTypeUtil$e !== void 0 ? _stringPropTypeUtil$e : "", (_stringPropTypeUtil$e2 = _elementor_editor_props.stringPropTypeUtil.extract(formFieldId)) !== null && _stringPropTypeUtil$e2 !== void 0 ? _stringPropTypeUtil$e2 : ""];
		}));
		const getOptions = (remoteField) => formFields.filter(({ type }) => EMAIL_TYPE !== remoteField.remote_type || EMAIL_TYPE === type);
		const updateField = (remoteId, formFieldId) => {
			const newFieldsMap = _objectSpread2(_objectSpread2({}, fieldsMap), {}, { [remoteId]: formFieldId });
			setValue(remoteFields.filter((remoteField) => resolveSelectedField(getOptions(remoteField), newFieldsMap[remoteField.remote_id])).map(({ remote_id: id }) => _elementor_editor_props.keyValuePropTypeUtil.create({
				key: _elementor_editor_props.stringPropTypeUtil.create(id),
				value: _elementor_editor_props.stringPropTypeUtil.create(newFieldsMap[id])
			})));
		};
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, { gap: 1 }, remoteFields.map((remoteField) => {
			const options = getOptions(remoteField);
			const labelId = `${element.id}-mailchimp-field-${remoteField.remote_id}-label`;
			return /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
				container: true,
				alignItems: "center",
				key: remoteField.remote_id
			}, /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
				item: true,
				xs: 6
			}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ControlFormLabel, { id: labelId }, remoteField.remote_label, remoteField.remote_required && /* @__PURE__ */ react.createElement("span", { "aria-hidden": "true" }, " *"))), /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
				item: true,
				xs: 6
			}, /* @__PURE__ */ react.createElement(_elementor_ui.Select, {
				size: "tiny",
				fullWidth: true,
				displayEmpty: true,
				SelectDisplayProps: {
					"aria-labelledby": labelId,
					"aria-required": remoteField.remote_required || void 0
				},
				value: resolveSelectedField(options, fieldsMap[remoteField.remote_id]),
				onChange: (event) => updateField(remoteField.remote_id, event.target.value)
			}, /* @__PURE__ */ react.createElement(_elementor_ui.MenuItem, { value: "" }, (0, _wordpress_i18n.__)("None", "elementor-pro")), options.map(({ id, label }) => /* @__PURE__ */ react.createElement(_elementor_ui.MenuItem, {
				key: id,
				value: id
			}, label)))));
		}));
	});
	function resolveSelectedField(options, savedId) {
		var _id;
		var _ref;
		var _options$find;
		if (!savedId) return "";
		return (_id = (_ref = (_options$find = options.find(({ id }) => id === savedId)) !== null && _options$find !== void 0 ? _options$find : options.find(({ aliases }) => aliases.includes(savedId))) === null || _ref === void 0 ? void 0 : _ref.id) !== null && _id !== void 0 ? _id : "";
	}
	//#endregion
	//#region packages/packages/pro/editor-editing-panel-extended/src/controls/mailchimp/mailchimp-groups-control.tsx
	var MailchimpGroupsControl = (0, _elementor_editor_controls.createControl)(() => {
		const { data: options } = useMailchimpData("mailchimp-groups");
		return /* @__PURE__ */ react.createElement(_elementor_editor_controls.ChipsControl, { options });
	});
	//#endregion
	//#region packages/packages/pro/editor-editing-panel-extended/src/controls/number-range-control.tsx
	var _excluded$1 = ["value", "setValue"];
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
		const _useBoundProp = (0, _elementor_editor_controls.useBoundProp)(_elementor_editor_props.numberRangePropTypeUtil), { value, setValue } = _useBoundProp, propContext = _objectWithoutProperties(_useBoundProp, _excluded$1);
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
	//#region packages/packages/pro/editor-editing-panel-extended/src/sync/remove-mailchimp-api-key-on-copy.ts
	var _excluded = ["settings", "elements"];
	var CUSTOM_API_KEY_PROP = MAILCHIMP_SETTING.API_KEY;
	function initRemoveMailchimpApiKeyOnCopy() {
		(0, _elementor_editor_v1_adapters.registerDataHook)("after", "document/elements/copy", (args, result) => {
			var _args$storageKey;
			var _window$elementorComm;
			var _clipboardData$elemen;
			if (false === result) return;
			const storageKey = (_args$storageKey = args.storageKey) !== null && _args$storageKey !== void 0 ? _args$storageKey : "clipboard";
			const clipboardData = (_window$elementorComm = window.elementorCommon) === null || _window$elementorComm === void 0 || (_window$elementorComm = _window$elementorComm.storage) === null || _window$elementorComm === void 0 ? void 0 : _window$elementorComm.get(storageKey);
			if (!(clipboardData === null || clipboardData === void 0 || (_clipboardData$elemen = clipboardData.elements) === null || _clipboardData$elemen === void 0 ? void 0 : _clipboardData$elemen.some(hasCustomApiKey))) return;
			copyJsonToClipboard(JSON.stringify(_objectSpread2(_objectSpread2({}, clipboardData), {}, { elements: clipboardData.elements.map(removeCustomApiKey) })));
		});
	}
	function copyJsonToClipboard(value) {
		const clipboard = document.createElement("textarea");
		clipboard.value = value;
		document.body.appendChild(clipboard);
		clipboard.select();
		let copied = false;
		try {
			copied = document.execCommand("copy");
		} catch (_unused) {
			copied = false;
		}
		document.body.removeChild(clipboard);
		if (!copied) {
			var _navigator$clipboard;
			(_navigator$clipboard = navigator.clipboard) === null || _navigator$clipboard === void 0 || _navigator$clipboard.writeText(value).catch(() => {});
		}
	}
	function hasCustomApiKey({ settings, elements }) {
		const setting = settings === null || settings === void 0 ? void 0 : settings[CUSTOM_API_KEY_PROP];
		const value = setting && "object" === typeof setting ? setting.value : setting;
		return "string" === typeof value && "" !== value.trim() || !!(elements === null || elements === void 0 ? void 0 : elements.some(hasCustomApiKey));
	}
	function removeCustomApiKey(_ref) {
		let { settings, elements } = _ref, element = _objectWithoutProperties(_ref, _excluded);
		const _ref2 = settings !== null && settings !== void 0 ? settings : {}, { [CUSTOM_API_KEY_PROP]: _customApiKey } = _ref2, restSettings = _objectWithoutProperties(_ref2, [CUSTOM_API_KEY_PROP].map(toPropertyKey));
		return _objectSpread2(_objectSpread2({}, element), {}, {
			settings: restSettings,
			elements: elements === null || elements === void 0 ? void 0 : elements.map(removeCustomApiKey)
		});
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
			_elementor_editor_editing_panel.controlsRegistry.register(MAILCHIMP_CONTROL_TYPE.API_KEY_NOTICE, MailchimpApiKeyNoticeControl, "custom", _elementor_editor_props.stringPropTypeUtil);
			_elementor_editor_editing_panel.controlsRegistry.register(MAILCHIMP_CONTROL_TYPE.AUDIENCE, MailchimpAudienceControl, "custom", _elementor_editor_props.stringPropTypeUtil);
			_elementor_editor_editing_panel.controlsRegistry.register(MAILCHIMP_CONTROL_TYPE.GROUPS, MailchimpGroupsControl, "full", _elementor_editor_props.stringArrayPropTypeUtil);
			_elementor_editor_editing_panel.controlsRegistry.register(MAILCHIMP_CONTROL_TYPE.FIELDS_MAP, MailchimpFieldsMapControl, "full", fieldsMapPropTypeUtil);
			initRemoveMailchimpApiKeyOnCopy();
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
})(elementorV2.editorCanvas, elementorV2.editorControlsExtended, elementorV2.editorEditingPanel, elementorV2.editorProps, elementorV2.licenseApi, React, wp.i18n, elementorV2.editorControls, elementorV2.ui, elementorV2.query, elementorV2.editorUi, elementorV2.editorDocuments, elementorV2.editorElements, elementorV2.editorV1Adapters);

window.elementorV2.editorEditingPanelExtended?.init?.();
/*! pro-elements - v4.3.0 - 22-09-2026 */
(function(_wordpress_i18n, react, _elementor_ui, _elementor_icons) {
	//#region \0rolldown/runtime.js
	var __create = Object.create;
	var __defProp$14 = Object.defineProperty;
	var __name = (target, value) => __defProp$14(target, "name", {
		value,
		configurable: true
	});
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp$14 = Object.prototype.hasOwnProperty;
	var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
			key = keys[i];
			if (!__hasOwnProp$14.call(to, key) && key !== except) __defProp$14(to, key, {
				get: ((k) => from[k]).bind(null, key),
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp$14(target, "default", {
		value: mod,
		enumerable: true
	}) : target, mod));
	//#endregion
	react = __toESM(react);
	//#region modules/display-conditions/assets/js/editor/behavior.js
	var DisplayConditionsBehavior = class extends Marionette.Behavior {
		ui() {
			const iconClass = ".eicon-flow.e-control-display-conditions";
			return {
				displayConditionsButton: iconClass,
				displayConditionsPromoButton: `${iconClass}-promo`
			};
		}
		events() {
			return {
				"click @ui.displayConditionsButton": "onClickControlButtonDisplayConditions",
				"mouseenter @ui.displayConditionsPromoButton": "onHoverControlButtonDisplayConditions"
			};
		}
		onClickControlButtonDisplayConditions(event) {
			event.stopPropagation();
			this.mount();
		}
		onHoverControlButtonDisplayConditions(event) {
			event.stopPropagation();
			elementor.promotion.showDialog({
				title: (0, _wordpress_i18n.__)("Display Conditions", "elementor-pro"),
				content: (0, _wordpress_i18n.__)("Upgrade to Elementor Pro Advanced to get the Display Conditions feature as well as additional professional and ecommerce widgets", "elementor-pro"),
				targetElement: this.el,
				actionButton: {
					url: "https://go.elementor.com/go-pro-advanced-display-conditions/",
					text: (0, _wordpress_i18n.__)("Upgrade Now", "elementor-pro"),
					classes: ["elementor-button", "go-pro"]
				}
			});
		}
		getRootElement() {
			let rootElement = window.parent.document.getElementById("elementor-conditions__modal");
			if (!!rootElement) return rootElement;
			rootElement = document.createElement("div");
			rootElement.setAttribute("id", "elementor-conditions__modal");
			return rootElement;
		}
		mount() {
			const rootElement = this.getRootElement();
			window.parent.document.body.appendChild(rootElement);
			window.dispatchEvent(new CustomEvent("elementor/display-conditions/open", { detail: {
				rootElement,
				props: {
					getControlValue: this.getOption("getControlValue"),
					setControlValue: this.getOption("setControlValue"),
					onClose: () => this.unmount(rootElement),
					setCacheNoticeStatus: this.getOption("setCacheNoticeStatus")
				}
			} }));
		}
		unmount(rootElement) {
			window.dispatchEvent(new CustomEvent("elementor/display-conditions/close", { detail: { rootElement } }));
		}
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
	//#region modules/display-conditions/assets/js/editor/module.js
	var Module = class extends elementorModules.editor.utils.Module {
		constructor(..._args) {
			var _this;
			super(..._args);
			_this = this;
			_defineProperty(this, "pasteAction", "paste");
			_defineProperty(this, "clearAction", "clear");
			_defineProperty(this, "atomicDisplayConditionsKey", "display-conditions");
			_defineProperty(this, "registerControlBehavior", (behaviors, view) => {
				if (this.getSettings("controls").trigger !== view.options.model.get("name")) return behaviors;
				if (!behaviors) behaviors = {};
				behaviors.displayConditions = {
					behaviorClass: DisplayConditionsBehavior,
					getControlValue: () => {
						const controlView = this.getEditorControlView(this.getSettings("controls").displayConditions);
						if (!controlView) return [];
						const value = controlView.getControlValue();
						return this.getStructuredConditions(JSON.parse(value || "[]"));
					},
					setControlValue: (value) => {
						const displayConditionsInput = this.getEditorControlView(this.getSettings("controls").displayConditions);
						const displayConditionsTemplate = this.getEditorControlView(this.getSettings("controls").trigger);
						if (displayConditionsInput) {
							value = !(value === null || value === void 0 ? void 0 : value.length) || "[]" === value[0] ? "" : value;
							displayConditionsInput.setValue(value);
							displayConditionsInput.applySavedValue();
						}
						if (displayConditionsTemplate.$el) {
							const icon = displayConditionsTemplate.$el.find(this.getSettings("selectors").icon);
							this.highlightIcon(icon, displayConditionsInput);
						}
					},
					setCacheNoticeStatus: function() {
						var _ref = _asyncToGenerator(function* () {
							const response = yield _this.doAjaxRequest("display_conditions_set_cache_notice_status");
							if (response) elementor.config.displayConditions.show_cache_notice = false;
							return response;
						});
						return function setCacheNoticeStatus() {
							return _ref.apply(this, arguments);
						};
					}()
				};
				return behaviors;
			});
			_defineProperty(this, "highlightIconIfFilled", (sectionName, editor) => {
				if (![
					"section_advanced",
					"_section_style",
					"section_layout"
				].includes(sectionName)) return;
				const controlView = this.getEditorControlView(this.getSettings("controls").displayConditions);
				if (!controlView) return;
				const icon = editor.$childViewContainer.find(this.getSettings("selectors").icon);
				this.highlightIcon(icon, controlView);
			});
			_defineProperty(this, "highlightIcon", (icon, controlView) => {
				if (!icon[0]) return;
				const conditionValue = controlView.getControlValue() || "[]";
				if (!("[]" !== conditionValue ? this.getStructuredConditions(JSON.parse(conditionValue)) : []).length) {
					var _icon$;
					(_icon$ = icon[0]) === null || _icon$ === void 0 || (_icon$ = _icon$.classList) === null || _icon$ === void 0 || _icon$.remove("filled");
				} else {
					var _icon$2;
					(_icon$2 = icon[0]) === null || _icon$2 === void 0 || (_icon$2 = _icon$2.classList) === null || _icon$2 === void 0 || _icon$2.add("filled");
				}
			});
			_defineProperty(this, "doAjaxRequest", (action, data) => {
				try {
					return new Promise((resolve, reject) => {
						elementorCommon.ajax.addRequest(action, {
							data,
							error: () => reject(),
							success: (res) => {
								resolve(res);
							}
						});
					});
				} catch (error) {
					return false;
				}
			});
			_defineProperty(this, "getStructuredConditions", (conditions) => {
				return this.shouldConvertConditionsStructure(conditions) ? [conditions] : conditions;
			});
			_defineProperty(this, "shouldConvertConditionsStructure", (conditions) => {
				return conditions.length && !Array.isArray(conditions[0]);
			});
			_defineProperty(this, "isAtomic", (model) => {
				return elementor.helpers.isAtomicWidget(model);
			});
			_defineProperty(this, "getSettingsKey", (isAtomic = false) => {
				return isAtomic ? this.atomicDisplayConditionsKey : "e_display_conditions";
			});
			_defineProperty(this, "getAtomicElementTypes", () => {
				return Object.entries(elementor.config.elements).filter(([, element]) => !!(element === null || element === void 0 ? void 0 : element.atomic_props_schema)).map(([elType]) => elType);
			});
			_defineProperty(this, "createDisplayConditions", (displayConditions, isAtomic = false) => {
				if (!(displayConditions === null || displayConditions === void 0 ? void 0 : displayConditions.length)) return isAtomic ? null : "";
				return isAtomic ? this.transformV3ToV4Conditions(displayConditions) : JSON.stringify(displayConditions);
			});
			_defineProperty(this, "extractDisplayConditions", (settings, isAtomic) => {
				const settingsKey = this.getSettingsKey(isAtomic);
				const displayConditions = settings === null || settings === void 0 ? void 0 : settings[settingsKey];
				return isAtomic ? this.transformV4ToV3Conditions(displayConditions, isAtomic) : JSON.parse(displayConditions || "[]");
			});
			_defineProperty(this, "transformV4ToV3Conditions", (conditions) => {
				var _conditions$value;
				return (conditions === null || conditions === void 0 || (_conditions$value = conditions.value) === null || _conditions$value === void 0 ? void 0 : _conditions$value.length) ? conditions.value.map(({ value: conditionGroup }) => {
					var _conditionGroup$map;
					return (_conditionGroup$map = conditionGroup === null || conditionGroup === void 0 ? void 0 : conditionGroup.map(({ value }) => JSON.parse(value))) !== null && _conditionGroup$map !== void 0 ? _conditionGroup$map : null;
				}).filter((conditionGroup) => !!(conditionGroup === null || conditionGroup === void 0 ? void 0 : conditionGroup.length)) : [];
			});
			_defineProperty(this, "transformV3ToV4Conditions", (displayConditions) => {
				return (displayConditions === null || displayConditions === void 0 ? void 0 : displayConditions.length) ? {
					$$type: this.atomicDisplayConditionsKey,
					value: displayConditions.map((conditions) => ({
						$$type: "condition-group",
						value: conditions.map((condition) => ({
							$$type: "string",
							value: JSON.stringify(condition)
						}))
					}))
				} : null;
			});
		}
		getDefaultSettings() {
			return {
				selectors: { icon: ".eicon-flow.e-control-display-conditions" },
				controls: {
					displayConditions: "e_display_conditions",
					trigger: "e_display_conditions_trigger"
				}
			};
		}
		onElementorInit() {
			elementor.hooks.addFilter("controls/base/behaviors", this.registerControlBehavior);
			elementor.channels.editor.on("section:activated", this.highlightIconIfFilled);
			elementor.on("navigator:init", this.onNavigatorInit.bind(this));
			[
				"widget",
				"section",
				"column",
				"container",
				...this.getAtomicElementTypes()
			].forEach((type) => {
				elementor.hooks.addFilter(`elements/${type}/contextMenuGroups`, this.registerContextMenuGroups.bind(this));
			});
		}
		onElementorInitComponents() {
			$e.commands.register("document/elements", "paste-display-conditions", (args) => {
				this.tryContextMenuActions(args, this.pasteAction);
			});
			$e.commands.register("document/elements", "clear-display-conditions", (args) => {
				this.tryContextMenuActions(args, this.clearAction);
			});
		}
		registerContextMenuGroups(groups, currentElement) {
			const clipboardGroup = groups.find((group) => "clipboard" === group.name);
			if (!clipboardGroup) return groups;
			const pasteStyleIndex = clipboardGroup.actions.findIndex((action) => "pasteStyle" === action.name);
			if (-1 !== pasteStyleIndex) clipboardGroup.actions.splice(pasteStyleIndex + 1, 0, {
				name: "pasteDisplayConditions",
				isEnabled: () => this.isPasteDisplayConditionsEnabled(currentElement),
				isVisible: () => this.isPasteDisplayConditionsEnabled(currentElement),
				title: (0, _wordpress_i18n.__)("Paste display conditions", "elementor-pro"),
				callback: () => $e.run("document/elements/paste-display-conditions", elementor.selection.getElements(currentElement.getContainer()))
			});
			clipboardGroup.actions.push({
				name: "clearDisplayConditions",
				isEnabled: () => this.isClearDisplayConditionsEnabled(currentElement),
				isVisible: () => this.isClearDisplayConditionsEnabled(currentElement),
				title: (0, _wordpress_i18n.__)("Clear display conditions", "elementor-pro"),
				callback: () => $e.run("document/elements/clear-display-conditions", elementor.selection.getElements(currentElement.getContainer()))
			});
			return groups;
		}
		isPasteDisplayConditionsEnabled(selectedElement) {
			var _window$ElementorProD;
			if (((_window$ElementorProD = window.ElementorProDisplayConditions) === null || _window$ElementorProD === void 0 ? void 0 : _window$ElementorProD.isLicenseExpired) || false) return false;
			const displayConditions = this.getSelectedElementDisplayCondition(selectedElement);
			const doesClipboardHaveConditions = !!this.getDisplayConditionsFromClipboard().length;
			return !displayConditions.length && !elementor.selection.isMultiple() && doesClipboardHaveConditions;
		}
		isClearDisplayConditionsEnabled(selectedElement) {
			return this.getSelectedElementDisplayCondition(selectedElement).length && !elementor.selection.isMultiple();
		}
		getSelectedElementDisplayCondition(selectedElement) {
			var _selectedElement$mode;
			const isAtomic = this.isAtomic(selectedElement === null || selectedElement === void 0 ? void 0 : selectedElement.model);
			const settingsKey = this.getSettingsKey(isAtomic);
			const displayConditions = selectedElement === null || selectedElement === void 0 || (_selectedElement$mode = selectedElement.model) === null || _selectedElement$mode === void 0 ? void 0 : _selectedElement$mode.getSetting(settingsKey);
			return isAtomic ? this.transformV4ToV3Conditions(displayConditions) : JSON.parse(displayConditions || "[]");
		}
		getDisplayConditionsFromClipboard() {
			const clipboard = elementorCommon.storage.get("clipboard");
			const elements = (clipboard === null || clipboard === void 0 ? void 0 : clipboard.elements) || [];
			if (1 !== elements.length) return [];
			const element = elements[0];
			const isAtomic = this.isAtomic(element);
			return this.extractDisplayConditions(element === null || element === void 0 ? void 0 : element.settings, isAtomic);
		}
		/**
		* Paste or clear display conditions to/of the selected element.
		*
		* @param {Array}             containers
		* @param {'paste' | 'clear'} action
		*/
		tryContextMenuActions(containers, action) {
			const container = (containers === null || containers === void 0 ? void 0 : containers[0]) || null;
			const displayConditions = this.pasteAction === action ? this.getDisplayConditionsFromClipboard() : null;
			if (!container) return;
			const isAtomic = this.isAtomic(container.model);
			const settingsKey = this.getSettingsKey(isAtomic);
			$e.run("document/elements/settings", {
				container,
				settings: { [settingsKey]: this.createDisplayConditions(displayConditions, isAtomic) }
			});
			container.panel.refresh();
			try {
				const controlView = container.panel.getControlView(this.getSettings("controls").displayConditions);
				const icon = this.getEditorControlView(this.getSettings("controls").trigger).$el.find(this.getSettings("selectors").icon);
				this.highlightIcon(icon, controlView);
			} catch (error) {
				return false;
			}
		}
		onNavigatorInit() {
			elementor.navigator.indicators.displayConditions = {
				icon: "flow",
				title: (0, _wordpress_i18n.__)("Display Conditions", "elementor-pro"),
				settingKeys: ["e_display_conditions", "display-conditions"],
				section: "e_display_conditions_trigger"
			};
		}
	};
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
	//#region modules/display-conditions/assets/js/editor/utils/constants.js
	var import_prop_types = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = require_factoryWithThrowingShims()();
	})))());
	var CONTROL_TYPES = {
		MULTIPLE_SELECT: "select2",
		SELECT: "select",
		QUERY: "query",
		DATE_TIME: "date_time",
		TEXT_FIELD: "text"
	};
	var DEFAULT_CONTROL_VALUES = {
		select2: [],
		query: [],
		select: "",
		text: "",
		date_time: null
	};
	var ACTION_TYPES = {
		CHANGE_CONTROL_VALUE: "CHANGE_CONTROL_VALUE",
		SET_ERRORS: "SET_ERRORS",
		ADD_OR_CONDITION: "ADD_OR_CONDITION",
		CHANGE_CONDITION_TYPE: "CHANGE_CONDITION_TYPE",
		ADD_AND_CONDITION: "ADD_AND_CONDITION",
		REMOVE_AND_CONDITION: "REMOVE_AND_CONDITION",
		REMOVE_OR_CONDITION: "REMOVE_OR_CONDITION"
	};
	var DISABLED_CONTROL_CONFIG = {
		CONDITION_NAME: "dynamic_tags",
		CONTROL_NAME: "dynamic_tag_value",
		COMPARATORS: ["is_empty", "is_not_empty"]
	};
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
	//#region modules/display-conditions/assets/js/editor/reducers/conditions-reducer.js
	var conditionsReducer = (state, action) => {
		switch (action.type) {
			case ACTION_TYPES.CHANGE_CONDITION_TYPE: return _objectSpread2(_objectSpread2({}, state), {}, { selectedConditions: _changeConditionType(_objectSpread2(_objectSpread2({}, state), action)) });
			case ACTION_TYPES.CHANGE_CONTROL_VALUE: return _objectSpread2(_objectSpread2({}, state), {}, { selectedConditions: _changeControlValue(_objectSpread2(_objectSpread2({}, state), action)) });
			case ACTION_TYPES.ADD_AND_CONDITION: return _objectSpread2(_objectSpread2({}, state), {}, { selectedConditions: _addAndCondition(_objectSpread2(_objectSpread2({}, state), action)) });
			case ACTION_TYPES.ADD_OR_CONDITION: return _objectSpread2(_objectSpread2({}, state), {}, { selectedConditions: [...state.selectedConditions, [action.andCondition]] });
			case ACTION_TYPES.REMOVE_AND_CONDITION: return _objectSpread2(_objectSpread2({}, state), {}, { selectedConditions: _removeAndCondition(_objectSpread2(_objectSpread2({}, state), action)) });
			case ACTION_TYPES.REMOVE_OR_CONDITION: return _objectSpread2(_objectSpread2({}, state), {}, { selectedConditions: state.selectedConditions.filter((_, index) => index !== action.orConditionIndex) });
			case ACTION_TYPES.SET_ERRORS: return _objectSpread2(_objectSpread2({}, state), {}, { selectedConditions: _setErrors(_objectSpread2(_objectSpread2({}, state), action)) });
			default: return state;
		}
	};
	var _changeConditionType = ({ selectedConditions, conditionToChange, orConditionIndex, andConditionIndex }) => {
		const newOrCondition = selectedConditions[orConditionIndex].map((andCondition, index) => index === andConditionIndex ? conditionToChange : _objectSpread2({}, andCondition));
		return selectedConditions.map((orCondition, index) => index === orConditionIndex ? newOrCondition : [...orCondition]);
	};
	var _changeControlValue = ({ selectedConditions, orConditionIndex, andConditionIndex, controlKey, value }) => {
		const existingOrCondition = [...selectedConditions[orConditionIndex]];
		const newAndCondition = _objectSpread2(_objectSpread2({}, _objectSpread2({}, existingOrCondition[andConditionIndex])), {}, { [controlKey]: value });
		const newOrCondition = existingOrCondition.map((andCondition, index) => index === andConditionIndex ? newAndCondition : _objectSpread2({}, andCondition));
		return selectedConditions.map((orCondition, index) => index === orConditionIndex ? newOrCondition : [...orCondition]);
	};
	var _addAndCondition = ({ selectedConditions, orConditionIndex, andConditionIndex, andCondition }) => {
		const existingOrCondition = selectedConditions[orConditionIndex];
		const newOrCondition = existingOrCondition.reduce((newAndConditions, condition, index) => {
			newAndConditions.push(_objectSpread2({}, condition));
			if (index === andConditionIndex || existingOrCondition.length === andConditionIndex && existingOrCondition.length - 1 === index) newAndConditions.push(andCondition);
			return newAndConditions;
		}, []);
		return selectedConditions.map((orCondition, index) => index === orConditionIndex ? newOrCondition : [...orCondition]);
	};
	var _removeAndCondition = ({ selectedConditions, orConditionIndex, andConditionIndex }) => {
		const newOrCondition = selectedConditions[orConditionIndex].reduce((newAndConditions, condition, index) => {
			if (index !== andConditionIndex) newAndConditions.push(_objectSpread2({}, condition));
			return newAndConditions;
		}, []);
		return selectedConditions.reduce((newOrConditions, orCondition, index) => {
			if (index === orConditionIndex && newOrCondition.length) newOrConditions.push(newOrCondition);
			if (index !== orConditionIndex) newOrConditions.push([...orCondition]);
			return newOrConditions;
		}, []);
	};
	var _setErrors = ({ selectedConditions, orConditionIndex, andConditionIndex, errors }) => {
		const newOrCondition = [...selectedConditions[orConditionIndex]];
		const newAndCondition = _objectSpread2({}, newOrCondition[andConditionIndex]);
		newAndCondition.errors = _objectSpread2(_objectSpread2({}, newAndCondition.errors), errors);
		newOrCondition[andConditionIndex] = newAndCondition;
		return selectedConditions.map((orCondition, index) => index === orConditionIndex ? [...newOrCondition] : [...orCondition]);
	};
	//#endregion
	//#region modules/display-conditions/assets/js/editor/contexts/conditions-context.js
	var ConditionsContext = react.default.createContext();
	//#endregion
	//#region modules/display-conditions/assets/js/editor/utils/utils.js
	function shouldCastToArray(controlType) {
		return CONTROL_TYPES.MULTIPLE_SELECT === controlType || CONTROL_TYPES.QUERY === controlType;
	}
	function getDefaultActiveCondition(conditionsByGroup) {
		return Object.values(conditionsByGroup)[0][0];
	}
	function getInvalidInputFeedback(type, variant, value, shouldShow = false) {
		return !(value === null || value === void 0 ? void 0 : value.length) ? {
			message: _getErrorMessage(type, variant),
			shouldShow
		} : {};
	}
	var getControlDefaults = (controlKey, control) => {
		const { type, variant = null, options } = control, defaultValue = (control === null || control === void 0 ? void 0 : control.default) || (options && CONTROL_TYPES.MULTIPLE_SELECT !== type ? Object.keys(options)[0] : DEFAULT_CONTROL_VALUES[type]), formattedDefaultValue = shouldCastToArray(type) && !Array.isArray(defaultValue) ? [defaultValue] : defaultValue;
		return {
			defaultValue: formattedDefaultValue,
			error: getInvalidInputFeedback(type, variant, formattedDefaultValue)
		};
	};
	var getConditionInitialState = (conditions, conditionKey) => {
		const { controls = {} } = (conditions === null || conditions === void 0 ? void 0 : conditions[conditionKey]) || {};
		return Object.keys(controls).reduce((defaults, controlKey) => {
			if ("__settings" === controlKey) return defaults;
			const { defaultValue, error } = getControlDefaults(controlKey, controls[controlKey]);
			defaults[controlKey] = defaultValue;
			defaults.errors[controlKey] = error;
			return defaults;
		}, { errors: {} });
	};
	function hasDecimalSeparator(newValue) {
		if (isNaN(parseFloat(newValue))) return false;
		if (newValue.toString().indexOf(".") !== -1) return true;
		if (newValue.toString().indexOf(",") !== -1) return true;
	}
	function getSelectOptionMaxWidth(controlCount) {
		return 3 === controlCount ? 200 : 150;
	}
	function getControlValueMaxWidth(controlCount) {
		return 3 === controlCount ? 190 : 135;
	}
	function getControlValue(value, altValue) {
		return "undefined" !== typeof value ? value : altValue;
	}
	function _getErrorMessage(controlType, variant = null) {
		if (shouldCastToArray(controlType)) return (0, _wordpress_i18n.__)("Select an option", "elementor-pro");
		if (CONTROL_TYPES.DATE_TIME === controlType) return "time" === variant ? (0, _wordpress_i18n.__)("Select a time", "elementor-pro") : (0, _wordpress_i18n.__)("Select a date", "elementor-pro");
		return (0, _wordpress_i18n.__)("Enter a value", "elementor-pro");
	}
	function shouldDisableControl(control, comparator) {
		return DISABLED_CONTROL_CONFIG.CONTROL_NAME === control && DISABLED_CONTROL_CONFIG.COMPARATORS.includes(comparator);
	}
	function shouldEmptyValuePassValidation(condition, comparator) {
		return DISABLED_CONTROL_CONFIG.CONDITION_NAME === condition && DISABLED_CONTROL_CONFIG.COMPARATORS.includes(comparator);
	}
	//#endregion
	//#region modules/display-conditions/assets/js/editor/components/icons/elementor-logo.js
	var __defProp$13 = Object.defineProperty;
	var __getOwnPropSymbols$13 = Object.getOwnPropertySymbols;
	var __hasOwnProp$13 = Object.prototype.hasOwnProperty;
	var __propIsEnum$13 = Object.prototype.propertyIsEnumerable;
	var __defNormalProp$13 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$13(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value, "__defNormalProp");
	var __spreadValues$13 = /* @__PURE__ */ __name((a, b) => {
		for (var prop in b || (b = {})) if (__hasOwnProp$13.call(b, prop)) __defNormalProp$13(a, prop, b[prop]);
		if (__getOwnPropSymbols$13) {
			for (var prop of __getOwnPropSymbols$13(b)) if (__propIsEnum$13.call(b, prop)) __defNormalProp$13(a, prop, b[prop]);
		}
		return a;
	}, "__spreadValues");
	var ElementorLogo = (props) => {
		return /* @__PURE__ */ react.createElement(_elementor_ui.SvgIcon, __spreadValues$13({ viewBox: "0 0 32 32" }, props), /* @__PURE__ */ react.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M2.69648 24.8891C0.938383 22.2579 0 19.1645 0 16C0 11.7566 1.68571 7.68687 4.68629 4.68629C7.68687 1.68571 11.7566 0 16 0C19.1645 0 22.2579 0.938383 24.8891 2.69648C27.5203 4.45459 29.5711 6.95344 30.7821 9.87706C31.9931 12.8007 32.3099 16.0177 31.6926 19.1214C31.0752 22.2251 29.5514 25.0761 27.3137 27.3137C25.0761 29.5514 22.2251 31.0752 19.1214 31.6926C16.0177 32.3099 12.8007 31.9931 9.87706 30.7821C6.95344 29.5711 4.45459 27.5203 2.69648 24.8891ZM12.0006 9.33281H9.33437V22.6665H12.0006V9.33281ZM22.6657 9.33281H14.6669V11.9991H22.6657V9.33281ZM22.6657 14.6654H14.6669V17.3316H22.6657V14.6654ZM22.6657 20.0003H14.6669V22.6665H22.6657V20.0003Z"
		}));
	};
	//#endregion
	//#region modules/display-conditions/assets/js/editor/components/header.js
	var Header = ({ onClose }) => {
		return /* @__PURE__ */ react.default.createElement(_elementor_ui.AppBar, {
			sx: { fontWeight: "normal" },
			color: "transparent",
			position: "relative"
		}, /* @__PURE__ */ react.default.createElement(_elementor_ui.Toolbar, { variant: "dense" }, /* @__PURE__ */ react.default.createElement(ElementorLogo, { sx: { mr: 1 } }), /* @__PURE__ */ react.default.createElement(_elementor_ui.Typography, {
			component: "span",
			variant: "subtitle2",
			sx: {
				fontWeight: "bold",
				textTransform: "uppercase"
			}
		}, (0, _wordpress_i18n.__)("Display Conditions", "elementor-pro")), /* @__PURE__ */ react.default.createElement(_elementor_ui.Stack, {
			direction: "row",
			spacing: 1,
			alignItems: "center",
			sx: { ml: "auto" }
		}, /* @__PURE__ */ react.default.createElement(_elementor_ui.IconButton, {
			size: "small",
			"aria-label": (0, _wordpress_i18n.__)("Close", "elementor-pro"),
			onClick: onClose,
			sx: { "&.MuiButtonBase-root": { mr: -1 } }
		}, /* @__PURE__ */ react.default.createElement(_elementor_icons.XIcon, null)))));
	};
	Header.propTypes = { onClose: import_prop_types.func.isRequired };
	//#endregion
	//#region modules/display-conditions/assets/js/editor/components/footer.js
	var Footer = ({ onClickSaveButton, isButtonDisabled }) => {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			justifyContent: "flex-end",
			sx: {
				py: 1,
				px: 3
			}
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			variant: "contained",
			className: "save-and-close-button",
			disabled: !isButtonDisabled,
			onClick: onClickSaveButton
		}, (0, _wordpress_i18n.__)("Save & Close", "elementor-pro")));
	};
	Footer.propTypes = {
		onClickSaveButton: import_prop_types.default.func,
		isButtonDisabled: import_prop_types.default.bool.isRequired
	};
	//#endregion
	//#region modules/display-conditions/assets/js/editor/components/icons/hierarchy-icon.js
	var __defProp$12 = Object.defineProperty;
	var __defProps$6 = Object.defineProperties;
	var __getOwnPropDescs$6 = Object.getOwnPropertyDescriptors;
	var __getOwnPropSymbols$12 = Object.getOwnPropertySymbols;
	var __hasOwnProp$12 = Object.prototype.hasOwnProperty;
	var __propIsEnum$12 = Object.prototype.propertyIsEnumerable;
	var __defNormalProp$12 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$12(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value, "__defNormalProp");
	var __spreadValues$12 = /* @__PURE__ */ __name((a, b) => {
		for (var prop in b || (b = {})) if (__hasOwnProp$12.call(b, prop)) __defNormalProp$12(a, prop, b[prop]);
		if (__getOwnPropSymbols$12) {
			for (var prop of __getOwnPropSymbols$12(b)) if (__propIsEnum$12.call(b, prop)) __defNormalProp$12(a, prop, b[prop]);
		}
		return a;
	}, "__spreadValues");
	var __spreadProps$6 = /* @__PURE__ */ __name((a, b) => __defProps$6(a, __getOwnPropDescs$6(b)), "__spreadProps");
	var HierarchyIcon = (0, _elementor_ui.styled)(react.forwardRef((props, ref) => {
		return /* @__PURE__ */ react.createElement(_elementor_ui.SvgIcon, __spreadProps$6(__spreadValues$12({ viewBox: "0 0 24 24" }, props), { ref }), /* @__PURE__ */ react.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M11 3.75C10.3096 3.75 9.75 4.30964 9.75 5V7C9.75 7.69036 10.3096 8.25 11 8.25H13C13.6904 8.25 14.25 7.69036 14.25 7V5C14.25 4.30964 13.6904 3.75 13 3.75H11ZM12.75 9.75H13C14.5188 9.75 15.75 8.51878 15.75 7V5C15.75 3.48122 14.5188 2.25 13 2.25H11C9.48122 2.25 8.25 3.48122 8.25 5V7C8.25 8.51878 9.48122 9.75 11 9.75H11.25V11.25H8C7.27065 11.25 6.57118 11.5397 6.05546 12.0555C5.53973 12.5712 5.25 13.2707 5.25 14V14.25H5C3.48122 14.25 2.25 15.4812 2.25 17V19C2.25 20.5188 3.48122 21.75 5 21.75H7C8.51878 21.75 9.75 20.5188 9.75 19V17C9.75 15.4812 8.51878 14.25 7 14.25H6.75V14C6.75 13.6685 6.8817 13.3505 7.11612 13.1161C7.35054 12.8817 7.66848 12.75 8 12.75H16C16.3315 12.75 16.6495 12.8817 16.8839 13.1161C17.1183 13.3505 17.25 13.6685 17.25 14V14.25H17C15.4812 14.25 14.25 15.4812 14.25 17V19C14.25 20.5188 15.4812 21.75 17 21.75H19C20.5188 21.75 21.75 20.5188 21.75 19V17C21.75 15.4812 20.5188 14.25 19 14.25H18.75V14C18.75 13.2707 18.4603 12.5712 17.9445 12.0555C17.4288 11.5397 16.7293 11.25 16 11.25H12.75V9.75ZM17 15.75C16.3096 15.75 15.75 16.3096 15.75 17V19C15.75 19.6904 16.3096 20.25 17 20.25H19C19.6904 20.25 20.25 19.6904 20.25 19V17C20.25 16.3096 19.6904 15.75 19 15.75H17ZM5 15.75C4.30964 15.75 3.75 16.3096 3.75 17V19C3.75 19.6904 4.30964 20.25 5 20.25H7C7.69036 20.25 8.25 19.6904 8.25 19V17C8.25 16.3096 7.69036 15.75 7 15.75H5Z"
		}));
	}))(({ theme }) => ({ "& path": { fill: theme.palette.text.primary } }));
	//#endregion
	//#region modules/display-conditions/assets/js/editor/hooks/use-conditions.js
	function useConditions() {
		return (0, react.useContext)(ConditionsContext);
	}
	//#endregion
	//#region modules/display-conditions/assets/js/editor/components/controls/ui/condition-select-control.js
	var __defProp$11 = Object.defineProperty;
	var __defProps$5 = Object.defineProperties;
	var __getOwnPropDescs$5 = Object.getOwnPropertyDescriptors;
	var __getOwnPropSymbols$11 = Object.getOwnPropertySymbols;
	var __hasOwnProp$11 = Object.prototype.hasOwnProperty;
	var __propIsEnum$11 = Object.prototype.propertyIsEnumerable;
	var __defNormalProp$11 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$11(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value, "__defNormalProp");
	var __spreadValues$11 = /* @__PURE__ */ __name((a, b) => {
		for (var prop in b || (b = {})) if (__hasOwnProp$11.call(b, prop)) __defNormalProp$11(a, prop, b[prop]);
		if (__getOwnPropSymbols$11) {
			for (var prop of __getOwnPropSymbols$11(b)) if (__propIsEnum$11.call(b, prop)) __defNormalProp$11(a, prop, b[prop]);
		}
		return a;
	}, "__spreadValues");
	var __spreadProps$5 = /* @__PURE__ */ __name((a, b) => __defProps$5(a, __getOwnPropDescs$5(b)), "__spreadProps");
	var __objRest$2 = /* @__PURE__ */ __name((source, exclude) => {
		var target = {};
		for (var prop in source) if (__hasOwnProp$11.call(source, prop) && exclude.indexOf(prop) < 0) target[prop] = source[prop];
		if (source != null && __getOwnPropSymbols$11) {
			for (var prop of __getOwnPropSymbols$11(source)) if (exclude.indexOf(prop) < 0 && __propIsEnum$11.call(source, prop)) target[prop] = source[prop];
		}
		return target;
	}, "__objRest");
	var ConditionSelect = (_a) => {
		var _b = _a, { controlCount } = _b, props = __objRest$2(_b, ["controlCount"]);
		return /* @__PURE__ */ react.default.createElement(_elementor_ui.Select, __spreadProps$5(__spreadValues$11({}, props), {
			size: "small",
			sx: {
				flex: 1,
				textAlign: "start",
				alignSelf: "flex-start",
				".MuiSelect-select .MuiTypography-root": { maxWidth: getControlValueMaxWidth(controlCount) }
			},
			color: "secondary",
			MenuProps: {
				PaperProps: { sx: {
					maxHeight: 280,
					"& .MuiListSubheader-root": { position: "initial" }
				} },
				classes: { paper: "e-conditions-select-menu" }
			}
		}));
	};
	ConditionSelect.propTypes = { controlCount: import_prop_types.number.isRequired };
	//#endregion
	//#region modules/display-conditions/assets/js/editor/components/controls/ui/condition-select-option.js
	var __defProp$10 = Object.defineProperty;
	var __defProps$4 = Object.defineProperties;
	var __getOwnPropDescs$4 = Object.getOwnPropertyDescriptors;
	var __getOwnPropSymbols$10 = Object.getOwnPropertySymbols;
	var __hasOwnProp$10 = Object.prototype.hasOwnProperty;
	var __propIsEnum$10 = Object.prototype.propertyIsEnumerable;
	var __defNormalProp$10 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$10(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value, "__defNormalProp");
	var __spreadValues$10 = /* @__PURE__ */ __name((a, b) => {
		for (var prop in b || (b = {})) if (__hasOwnProp$10.call(b, prop)) __defNormalProp$10(a, prop, b[prop]);
		if (__getOwnPropSymbols$10) {
			for (var prop of __getOwnPropSymbols$10(b)) if (__propIsEnum$10.call(b, prop)) __defNormalProp$10(a, prop, b[prop]);
		}
		return a;
	}, "__spreadValues");
	var __spreadProps$4 = /* @__PURE__ */ __name((a, b) => __defProps$4(a, __getOwnPropDescs$4(b)), "__spreadProps");
	var __objRest$1 = /* @__PURE__ */ __name((source, exclude) => {
		var target = {};
		for (var prop in source) if (__hasOwnProp$10.call(source, prop) && exclude.indexOf(prop) < 0) target[prop] = source[prop];
		if (source != null && __getOwnPropSymbols$10) {
			for (var prop of __getOwnPropSymbols$10(source)) if (exclude.indexOf(prop) < 0 && __propIsEnum$10.call(source, prop)) target[prop] = source[prop];
		}
		return target;
	}, "__objRest");
	var ConditionSelectOption = (_a) => {
		var _b = _a, { controlCount, sx = {} } = _b, props = __objRest$1(_b, ["controlCount", "sx"]);
		return /* @__PURE__ */ react.default.createElement(_elementor_ui.Typography, __spreadProps$4(__spreadValues$10({ noWrap: true }, props), {
			variant: props.variant || "inherit",
			sx: __spreadValues$10({ maxWidth: getSelectOptionMaxWidth(controlCount) }, sx)
		}));
	};
	ConditionSelectOption.propTypes = {
		sx: import_prop_types.object,
		isDropdownItem: import_prop_types.bool,
		variant: import_prop_types.string,
		controlCount: import_prop_types.number.isRequired
	};
	//#endregion
	//#region modules/display-conditions/assets/js/editor/components/controls/select-control.js
	var SelectControl = ({ condition, control, controlKey, onChangeOption, options, value, controlCount }) => {
		const [controlValue, setControlValue] = (0, react.useState)(value);
		(0, react.useEffect)(() => {
			setControlValue(value);
		}, [condition]);
		const handleChangeOption = (newValue) => {
			onChangeOption(newValue);
			setControlValue(newValue);
		};
		const getOptions = () => {
			return Object.entries(options).map(([optionKey, optionValue]) => {
				var _a;
				if (!optionValue) return null;
				if ("group" === optionValue.type) return /* @__PURE__ */ react.createElement(_elementor_ui.ListSubheader, { key: optionKey }, /* @__PURE__ */ react.createElement(ConditionSelectOption, { controlCount }, optionValue.label));
				const isDisabled = (_a = control == null ? void 0 : control.disabled_options) == null ? void 0 : _a.includes(optionKey);
				return /* @__PURE__ */ react.createElement(_elementor_ui.MenuItem, {
					key: optionKey,
					value: optionKey,
					disabled: isDisabled,
					className: isDisabled && "hidden" === (control == null ? void 0 : control.disabled_type) ? "elementor-hidden" : ""
				}, /* @__PURE__ */ react.createElement(ConditionSelectOption, { controlCount }, optionValue));
			});
		};
		return /* @__PURE__ */ react.createElement(ConditionSelect, {
			id: `select-${controlKey}`,
			value: controlValue,
			onChange: (event) => handleChangeOption(event.target.value),
			disabled: Object.keys(options).length <= 1,
			controlCount
		}, getOptions());
	};
	SelectControl.propTypes = {
		condition: import_prop_types.object.isRequired,
		control: import_prop_types.object.isRequired,
		controlKey: import_prop_types.string.isRequired,
		onChangeOption: import_prop_types.func.isRequired,
		options: import_prop_types.object.isRequired,
		value: import_prop_types.string.isRequired,
		controlCount: import_prop_types.number.isRequired
	};
	//#endregion
	//#region modules/display-conditions/assets/js/editor/components/controls/autocomplete-control.js
	var __defProp$9 = Object.defineProperty;
	var __defProps$3 = Object.defineProperties;
	var __getOwnPropDescs$3 = Object.getOwnPropertyDescriptors;
	var __getOwnPropSymbols$9 = Object.getOwnPropertySymbols;
	var __hasOwnProp$9 = Object.prototype.hasOwnProperty;
	var __propIsEnum$9 = Object.prototype.propertyIsEnumerable;
	var __defNormalProp$9 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$9(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value, "__defNormalProp");
	var __spreadValues$9 = /* @__PURE__ */ __name((a, b) => {
		for (var prop in b || (b = {})) if (__hasOwnProp$9.call(b, prop)) __defNormalProp$9(a, prop, b[prop]);
		if (__getOwnPropSymbols$9) {
			for (var prop of __getOwnPropSymbols$9(b)) if (__propIsEnum$9.call(b, prop)) __defNormalProp$9(a, prop, b[prop]);
		}
		return a;
	}, "__spreadValues");
	var __spreadProps$3 = /* @__PURE__ */ __name((a, b) => __defProps$3(a, __getOwnPropDescs$3(b)), "__spreadProps");
	var __objRest = (source, exclude) => {
		var target = {};
		for (var prop in source) if (__hasOwnProp$9.call(source, prop) && exclude.indexOf(prop) < 0) target[prop] = source[prop];
		if (source != null && __getOwnPropSymbols$9) {
			for (var prop of __getOwnPropSymbols$9(source)) if (exclude.indexOf(prop) < 0 && __propIsEnum$9.call(source, prop)) target[prop] = source[prop];
		}
		return target;
	};
	var formatValue$1 = /* @__PURE__ */ __name((valueToFormat) => {
		return Array.isArray(valueToFormat) ? valueToFormat : [valueToFormat];
	}, "formatValue");
	var AutocompleteControl = ({ conditions, condition, controlKey, onChangeOption, options, value, shouldShowError, errorMessage, isMultiple, controlCount }) => {
		const [controlValue, setControlValue] = (0, react.useState)(formatValue$1(value)), label = (controlValue == null ? void 0 : controlValue.length) ? "" : conditions[condition.condition].label || "";
		(0, react.useEffect)(() => {
			setControlValue(formatValue$1(value));
		}, [condition]);
		const handleChangeOption = (newValue) => {
			onChangeOption(newValue);
			setControlValue(newValue);
		};
		const renderOption = (_a, option) => {
			var _b = _a, { key } = _b, optionProps = __objRest(_b, ["key"]);
			return /* @__PURE__ */ react.createElement(_elementor_ui.Typography, __spreadProps$3(__spreadValues$9({ component: "li" }, optionProps), { key }), /* @__PURE__ */ react.createElement(ConditionSelectOption, {
				component: "span",
				variant: "inherit",
				noWrap: true,
				controlCount
			}, options[option]));
		};
		const renderInput = (params) => {
			return /* @__PURE__ */ react.createElement(_elementor_ui.TextField, __spreadProps$3(__spreadValues$9({
				error: shouldShowError,
				helperText: errorMessage
			}, params), {
				placeholder: label,
				color: "secondary"
			}));
		};
		return /* @__PURE__ */ react.createElement(_elementor_ui.Autocomplete, {
			multiple: isMultiple,
			id: `select-${controlKey}`,
			value: controlValue,
			options: Object.keys(options),
			getOptionLabel: (optionKey) => options[optionKey],
			sx: { flex: 1 },
			ChipProps: { sx: { "&.MuiAutocomplete-tag": { maxWidth: "100px" } } },
			renderInput,
			ListboxProps: { sx: { maxHeight: 280 } },
			size: "small",
			onChange: (_event, newValues) => handleChangeOption(formatValue$1(newValues)),
			renderOption,
			forcePopupIcon: !Object.keys(options).length <= 1
		});
	};
	AutocompleteControl.propTypes = {
		conditions: import_prop_types.object.isRequired,
		condition: import_prop_types.object.isRequired,
		controlKey: import_prop_types.string.isRequired,
		onChangeOption: import_prop_types.func.isRequired,
		value: import_prop_types.array.isRequired,
		options: import_prop_types.object.isRequired,
		errorMessage: import_prop_types.string.isRequired,
		shouldShowError: import_prop_types.bool.isRequired,
		isMultiple: import_prop_types.bool.isRequired,
		controlCount: import_prop_types.number.isRequired
	};
	//#endregion
	//#region core/app/assets/js/utils.js
	var htmlDecodeTextContent = (input) => {
		return new DOMParser().parseFromString(input, "text/html").documentElement.textContent;
	};
	//#endregion
	//#region modules/display-conditions/assets/js/editor/components/controls/query-control.js
	var __defProp$8 = Object.defineProperty;
	var __defProps$2 = Object.defineProperties;
	var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
	var __getOwnPropSymbols$8 = Object.getOwnPropertySymbols;
	var __hasOwnProp$8 = Object.prototype.hasOwnProperty;
	var __propIsEnum$8 = Object.prototype.propertyIsEnumerable;
	var __defNormalProp$8 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$8(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value, "__defNormalProp");
	var __spreadValues$8 = /* @__PURE__ */ __name((a, b) => {
		for (var prop in b || (b = {})) if (__hasOwnProp$8.call(b, prop)) __defNormalProp$8(a, prop, b[prop]);
		if (__getOwnPropSymbols$8) {
			for (var prop of __getOwnPropSymbols$8(b)) if (__propIsEnum$8.call(b, prop)) __defNormalProp$8(a, prop, b[prop]);
		}
		return a;
	}, "__spreadValues");
	var __spreadProps$2 = /* @__PURE__ */ __name((a, b) => __defProps$2(a, __getOwnPropDescs$2(b)), "__spreadProps");
	var __async$2 = /* @__PURE__ */ __name((__this, __arguments, generator) => {
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
	}, "__async");
	var formatValue = (valueToFormat) => {
		return Array.isArray(valueToFormat) ? valueToFormat : [valueToFormat];
	};
	var QueryControl = ({ conditions, condition, control, controlKey, onChangeOption, value, shouldShowError, errorMessage, isMultiple, controlCount }) => {
		const { fetchData } = (0, react.useContext)(ConditionsContext), [controlValue, setControlValue] = (0, react.useState)(formatValue(value)), [options, setOptions] = (0, react.useState)([]), [loading, setLoading] = (0, react.useState)(false), label = (controlValue == null ? void 0 : controlValue.length) ? "" : conditions[condition.condition].label || "";
		(0, react.useEffect)(() => {
			setControlValue(formatValue(value));
		}, [condition]);
		const handleSearchInputChange = (event, newInputValue, selectedValues) => __async$2(null, null, function* () {
			if ("" === newInputValue) {
				setOptions([]);
				return;
			}
			setLoading(true);
			const filteredResults = (yield fetchData(newInputValue, control)).filter((option) => {
				option.text = htmlDecodeTextContent(option.text);
				return !selectedValues.some((selectedOption) => (selectedOption == null ? void 0 : selectedOption.id) === (option == null ? void 0 : option.id));
			});
			setOptions(filteredResults);
			setLoading(false);
		});
		const handleChangeOption = (newValue) => {
			onChangeOption(newValue);
			setControlValue(newValue);
		};
		return /* @__PURE__ */ react.default.createElement(_elementor_ui.Autocomplete, {
			multiple: isMultiple,
			id: `select-${controlKey}`,
			value: controlValue,
			options,
			getOptionLabel: (option) => option ? option.text : "",
			isOptionEqualToValue: (option, optionToCompare) => option.id === optionToCompare.id,
			filterOptions: (x) => x,
			noOptionsText: (0, _wordpress_i18n.__)("No results", "elementor-pro"),
			loading,
			loadingText: (0, _wordpress_i18n.__)("Searching...", "elementor-pro"),
			size: "small",
			sx: { flex: 1 },
			ChipProps: { sx: { "&.MuiAutocomplete-tag": { maxWidth: "100px" } } },
			renderInput: (params) => /* @__PURE__ */ react.default.createElement(_elementor_ui.TextField, __spreadProps$2(__spreadValues$8({}, params), {
				placeholder: label,
				color: "secondary",
				error: shouldShowError,
				helperText: errorMessage,
				InputProps: __spreadProps$2(__spreadValues$8({}, params.InputProps), { endAdornment: /* @__PURE__ */ react.default.createElement(react.default.Fragment, null, loading ? /* @__PURE__ */ react.default.createElement(_elementor_ui.CircularProgress, {
					color: "inherit",
					size: 20
				}) : null, params.InputProps.endAdornment) })
			})),
			ListboxProps: { sx: { maxHeight: 280 } },
			onChange: (_event, newValues) => handleChangeOption(newValues),
			onInputChange: (event, newInputValue) => handleSearchInputChange(event, newInputValue, controlValue),
			renderOption: (optionProps, option) => /* @__PURE__ */ react.default.createElement(_elementor_ui.Typography, __spreadValues$8({ component: "li" }, optionProps), /* @__PURE__ */ react.default.createElement(ConditionSelectOption, {
				component: "span",
				variant: "inherit",
				noWrap: true,
				controlCount
			}, option.text))
		});
	};
	QueryControl.propTypes = {
		conditions: import_prop_types.object.isRequired,
		condition: import_prop_types.object.isRequired,
		onChangeOption: import_prop_types.func.isRequired,
		controlKey: import_prop_types.string.isRequired,
		control: import_prop_types.object.isRequired,
		value: import_prop_types.array.isRequired,
		errorMessage: import_prop_types.string.isRequired,
		shouldShowError: import_prop_types.bool.isRequired,
		isMultiple: import_prop_types.bool.isRequired,
		controlCount: import_prop_types.number.isRequired
	};
	//#endregion
	//#region modules/display-conditions/assets/js/editor/components/controls/text-field-control.js
	var __defProp$7 = Object.defineProperty;
	var __defProps$1 = Object.defineProperties;
	var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
	var __getOwnPropSymbols$7 = Object.getOwnPropertySymbols;
	var __hasOwnProp$7 = Object.prototype.hasOwnProperty;
	var __propIsEnum$7 = Object.prototype.propertyIsEnumerable;
	var __defNormalProp$7 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$7(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value, "__defNormalProp");
	var __spreadValues$7 = /* @__PURE__ */ __name((a, b) => {
		for (var prop in b || (b = {})) if (__hasOwnProp$7.call(b, prop)) __defNormalProp$7(a, prop, b[prop]);
		if (__getOwnPropSymbols$7) {
			for (var prop of __getOwnPropSymbols$7(b)) if (__propIsEnum$7.call(b, prop)) __defNormalProp$7(a, prop, b[prop]);
		}
		return a;
	}, "__spreadValues");
	var __spreadProps$1 = /* @__PURE__ */ __name((a, b) => __defProps$1(a, __getOwnPropDescs$1(b)), "__spreadProps");
	var TextFieldControl = ({ condition, controlKey, control, onChangeOption, value, errorMessage, shouldShowError, placeholder, disabled }) => {
		const [controlValue, setControlValue] = (0, react.useState)(value), { step = 1, min = 0, variant = null } = control;
		const numericProps = "number" === variant ? {
			type: "number",
			inputProps: {
				step,
				min
			}
		} : {};
		(0, react.useEffect)(() => {
			setControlValue(value);
		}, [condition]);
		const handleChangeOption = (newValue, controlVariant) => {
			let integerValue = null;
			if ("number" === controlVariant && hasDecimalSeparator(newValue)) integerValue = Math.floor(parseFloat(newValue));
			onChangeOption(integerValue != null ? integerValue : newValue.trim());
			setControlValue(integerValue != null ? integerValue : newValue);
		};
		return /* @__PURE__ */ react.createElement(_elementor_ui.TextField, __spreadProps$1(__spreadValues$7({}, numericProps), {
			sx: { flex: 1 },
			error: shouldShowError,
			helperText: errorMessage,
			value: controlValue,
			id: `text-${controlKey}`,
			variant: "outlined",
			onChange: (event) => handleChangeOption(event.target.value, variant),
			size: "small",
			color: "secondary",
			placeholder,
			disabled: disabled != null ? disabled : false
		}));
	};
	TextFieldControl.propTypes = {
		condition: import_prop_types.object.isRequired,
		controlKey: import_prop_types.string.isRequired,
		control: import_prop_types.object.isRequired,
		onChangeOption: import_prop_types.func.isRequired,
		value: import_prop_types.oneOfType([import_prop_types.string, import_prop_types.number]).isRequired,
		errorMessage: import_prop_types.string.isRequired,
		shouldShowError: import_prop_types.bool.isRequired,
		placeholder: import_prop_types.string.isRequired,
		disabled: import_prop_types.bool
	};
	//#endregion
	//#region modules/display-conditions/assets/js/editor/components/controls/date-picker-control.js
	var import_dayjs_min = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
		(function(t, e) {
			"object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e();
		})(exports, (function() {
			"use strict";
			var t = 1e3;
			var e = 6e4;
			var n = 36e5;
			var r = "millisecond";
			var i = "second";
			var s = "minute";
			var u = "hour";
			var a = "day";
			var o = "week";
			var c = "month";
			var f = "quarter";
			var h = "year";
			var d = "date";
			var l = "Invalid Date";
			var $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/;
			var y = /\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
			var M = {
				name: "en",
				weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
				months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
				ordinal: function(t) {
					var e = [
						"th",
						"st",
						"nd",
						"rd"
					];
					var n = t % 100;
					return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]";
				}
			};
			var m = function(t, e, n) {
				var r = String(t);
				return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
			};
			var v = {
				s: m,
				z: function(t) {
					var e = -t.utcOffset();
					var n = Math.abs(e);
					var r = Math.floor(n / 60);
					var i = n % 60;
					return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");
				},
				m: function t(e, n) {
					if (e.date() < n.date()) return -t(n, e);
					var r = 12 * (n.year() - e.year()) + (n.month() - e.month());
					var i = e.clone().add(r, c);
					var s = n - i < 0;
					var u = e.clone().add(r + (s ? -1 : 1), c);
					return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
				},
				a: function(t) {
					return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
				},
				p: function(t) {
					return {
						M: c,
						y: h,
						w: o,
						d: a,
						D: d,
						h: u,
						m: s,
						s: i,
						ms: r,
						Q: f
					}[t] || String(t || "").toLowerCase().replace(/s$/, "");
				},
				u: function(t) {
					return void 0 === t;
				}
			};
			var g = "en";
			var D = {};
			D[g] = M;
			var p = "$isDayjsObject";
			var S = function(t) {
				return t instanceof _ || !(!t || !t[p]);
			};
			var w = function t(e, n, r) {
				var i;
				if (!e) return g;
				if ("string" == typeof e) {
					var s = e.toLowerCase();
					D[s] && (i = s), n && (D[s] = n, i = s);
					var u = e.split("-");
					if (!i && u.length > 1) return t(u[0]);
				} else {
					var a = e.name;
					D[a] = e, i = a;
				}
				return !r && i && (g = i), i || !r && g;
			};
			var O = function(t, e) {
				if (S(t)) return t.clone();
				var n = "object" == typeof e ? e : {};
				return n.date = t, n.args = arguments, new _(n);
			};
			var b = v;
			b.l = w, b.i = S, b.w = function(t, e) {
				return O(t, {
					locale: e.$L,
					utc: e.$u,
					x: e.$x,
					$offset: e.$offset
				});
			};
			var _ = function() {
				function M(t) {
					this.$L = w(t.locale, null, !0), this.parse(t), this.$x = this.$x || t.x || {}, this[p] = !0;
				}
				var m = M.prototype;
				return m.parse = function(t) {
					this.$d = function(t) {
						var e = t.date;
						var n = t.utc;
						if (null === e) return /* @__PURE__ */ new Date(NaN);
						if (b.u(e)) return /* @__PURE__ */ new Date();
						if (e instanceof Date) return new Date(e);
						if ("string" == typeof e && !/Z$/i.test(e)) {
							var r = e.match($);
							if (r) {
								var i = r[2] - 1 || 0;
								var s = (r[7] || "0").substring(0, 3);
								return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
							}
						}
						return new Date(e);
					}(t), this.init();
				}, m.init = function() {
					var t = this.$d;
					this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
				}, m.$utils = function() {
					return b;
				}, m.isValid = function() {
					return !(this.$d.toString() === l);
				}, m.isSame = function(t, e) {
					var n = O(t);
					return this.startOf(e) <= n && n <= this.endOf(e);
				}, m.isAfter = function(t, e) {
					return O(t) < this.startOf(e);
				}, m.isBefore = function(t, e) {
					return this.endOf(e) < O(t);
				}, m.$g = function(t, e, n) {
					return b.u(t) ? this[e] : this.set(n, t);
				}, m.unix = function() {
					return Math.floor(this.valueOf() / 1e3);
				}, m.valueOf = function() {
					return this.$d.getTime();
				}, m.startOf = function(t, e) {
					var n = this;
					var r = !!b.u(e) || e;
					var f = b.p(t);
					var l = function(t, e) {
						var i = b.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
						return r ? i : i.endOf(a);
					};
					var $ = function(t, e) {
						return b.w(n.toDate()[t].apply(n.toDate("s"), (r ? [
							0,
							0,
							0,
							0
						] : [
							23,
							59,
							59,
							999
						]).slice(e)), n);
					};
					var y = this.$W;
					var M = this.$M;
					var m = this.$D;
					var v = "set" + (this.$u ? "UTC" : "");
					switch (f) {
						case h: return r ? l(1, 0) : l(31, 11);
						case c: return r ? l(1, M) : l(0, M + 1);
						case o:
							var g = this.$locale().weekStart || 0;
							var D = (y < g ? y + 7 : y) - g;
							return l(r ? m - D : m + (6 - D), M);
						case a:
						case d: return $(v + "Hours", 0);
						case u: return $(v + "Minutes", 1);
						case s: return $(v + "Seconds", 2);
						case i: return $(v + "Milliseconds", 3);
						default: return this.clone();
					}
				}, m.endOf = function(t) {
					return this.startOf(t, !1);
				}, m.$set = function(t, e) {
					var n;
					var o = b.p(t);
					var f = "set" + (this.$u ? "UTC" : "");
					var l = (n = {}, n[a] = f + "Date", n[d] = f + "Date", n[c] = f + "Month", n[h] = f + "FullYear", n[u] = f + "Hours", n[s] = f + "Minutes", n[i] = f + "Seconds", n[r] = f + "Milliseconds", n)[o];
					var $ = o === a ? this.$D + (e - this.$W) : e;
					if (o === c || o === h) {
						var y = this.clone().set(d, 1);
						y.$d[l]($), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d;
					} else l && this.$d[l]($);
					return this.init(), this;
				}, m.set = function(t, e) {
					return this.clone().$set(t, e);
				}, m.get = function(t) {
					return this[b.p(t)]();
				}, m.add = function(r, f) {
					var d;
					var l = this;
					r = Number(r);
					var $ = b.p(f);
					var y = function(t) {
						var e = O(l);
						return b.w(e.date(e.date() + Math.round(t * r)), l);
					};
					if ($ === c) return this.set(c, this.$M + r);
					if ($ === h) return this.set(h, this.$y + r);
					if ($ === a) return y(1);
					if ($ === o) return y(7);
					var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[$] || 1;
					var m = this.$d.getTime() + r * M;
					return b.w(m, this);
				}, m.subtract = function(t, e) {
					return this.add(-1 * t, e);
				}, m.format = function(t) {
					var e = this;
					var n = this.$locale();
					if (!this.isValid()) return n.invalidDate || l;
					var r = t || "YYYY-MM-DDTHH:mm:ssZ";
					var i = b.z(this);
					var s = this.$H;
					var u = this.$m;
					var a = this.$M;
					var o = n.weekdays;
					var c = n.months;
					var f = n.meridiem;
					var h = function(t, n, i, s) {
						return t && (t[n] || t(e, r)) || i[n].slice(0, s);
					};
					var d = function(t) {
						return b.s(s % 12 || 12, t, "0");
					};
					var $ = f || function(t, e, n) {
						var r = t < 12 ? "AM" : "PM";
						return n ? r.toLowerCase() : r;
					};
					return r.replace(y, (function(t, r) {
						return r || function(t) {
							switch (t) {
								case "YY": return String(e.$y).slice(-2);
								case "YYYY": return b.s(e.$y, 4, "0");
								case "M": return a + 1;
								case "MM": return b.s(a + 1, 2, "0");
								case "MMM": return h(n.monthsShort, a, c, 3);
								case "MMMM": return h(c, a);
								case "D": return e.$D;
								case "DD": return b.s(e.$D, 2, "0");
								case "d": return String(e.$W);
								case "dd": return h(n.weekdaysMin, e.$W, o, 2);
								case "ddd": return h(n.weekdaysShort, e.$W, o, 3);
								case "dddd": return o[e.$W];
								case "H": return String(s);
								case "HH": return b.s(s, 2, "0");
								case "h": return d(1);
								case "hh": return d(2);
								case "a": return $(s, u, !0);
								case "A": return $(s, u, !1);
								case "m": return String(u);
								case "mm": return b.s(u, 2, "0");
								case "s": return String(e.$s);
								case "ss": return b.s(e.$s, 2, "0");
								case "SSS": return b.s(e.$ms, 3, "0");
								case "Z": return i;
							}
							return null;
						}(t) || i.replace(":", "");
					}));
				}, m.utcOffset = function() {
					return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
				}, m.diff = function(r, d, l) {
					var $;
					var y = this;
					var M = b.p(d);
					var m = O(r);
					var v = (m.utcOffset() - this.utcOffset()) * e;
					var g = this - m;
					var D = function() {
						return b.m(y, m);
					};
					switch (M) {
						case h:
							$ = D() / 12;
							break;
						case c:
							$ = D();
							break;
						case f:
							$ = D() / 3;
							break;
						case o:
							$ = (g - v) / 6048e5;
							break;
						case a:
							$ = (g - v) / 864e5;
							break;
						case u:
							$ = g / n;
							break;
						case s:
							$ = g / e;
							break;
						case i:
							$ = g / t;
							break;
						default: $ = g;
					}
					return l ? $ : b.a($);
				}, m.daysInMonth = function() {
					return this.endOf(c).$D;
				}, m.$locale = function() {
					return D[this.$L];
				}, m.locale = function(t, e) {
					if (!t) return this.$L;
					var n = this.clone();
					var r = w(t, e, !0);
					return r && (n.$L = r), n;
				}, m.clone = function() {
					return b.w(this.$d, this);
				}, m.toDate = function() {
					return new Date(this.valueOf());
				}, m.toJSON = function() {
					return this.isValid() ? this.toISOString() : null;
				}, m.toISOString = function() {
					return this.$d.toISOString();
				}, m.toString = function() {
					return this.$d.toUTCString();
				}, M;
			}();
			var Y = _.prototype;
			return O.prototype = Y, [
				["$ms", r],
				["$s", i],
				["$m", s],
				["$H", u],
				["$W", a],
				["$M", c],
				["$y", h],
				["$D", d]
			].forEach((function(t) {
				Y[t[1]] = function(e) {
					return this.$g(e, t[0], t[1]);
				};
			})), O.extend = function(t, e) {
				return t.$i || (t(e, _, O), t.$i = !0), O;
			}, O.locale = w, O.isDayjs = S, O.unix = function(t) {
				return O(1e3 * t);
			}, O.en = D[g], O.Ls = D, O.p = {}, O;
		}));
	})))());
	var dateFormat$1 = "MM-DD-YYYY";
	var formattedValue$1 = /* @__PURE__ */ __name((dateString) => {
		return (0, import_dayjs_min.default)(dateString, dateFormat$1, true).isValid() ? (0, import_dayjs_min.default)(dateString, dateFormat$1) : null;
	}, "formattedValue");
	var DatePickerControl = ({ condition, onChangeOption, controlKey, value, shouldShowError, errorMessage }) => {
		const [controlValue, setControlValue] = (0, react.useState)(formattedValue$1(value));
		(0, react.useEffect)(() => {
			setControlValue(formattedValue$1(value));
		}, [condition]);
		const handleChangeOption = (newValue) => {
			if ((0, import_dayjs_min.default)(newValue, dateFormat$1, true).isValid()) {
				onChangeOption(newValue.format(dateFormat$1));
				setControlValue(formattedValue$1(newValue));
			} else onChangeOption("");
		};
		return /* @__PURE__ */ react.createElement(_elementor_ui.DatePicker, {
			value: controlValue,
			sx: { flex: 1 },
			id: `select-${controlKey}`,
			slotProps: {
				openPickerButton: { size: "small" },
				textField: {
					size: "small",
					color: "secondary",
					error: shouldShowError,
					helperText: errorMessage
				}
			},
			onChange: (newValue) => handleChangeOption(newValue)
		});
	};
	DatePickerControl.propTypes = {
		condition: import_prop_types.object.isRequired,
		controlKey: import_prop_types.string.isRequired,
		onChangeOption: import_prop_types.func.isRequired,
		value: import_prop_types.string,
		errorMessage: import_prop_types.string.isRequired,
		shouldShowError: import_prop_types.bool.isRequired
	};
	//#endregion
	//#region modules/display-conditions/assets/js/editor/components/controls/time-picker-control.js
	var timeFormat = "HH:mm";
	var dateFormat = "MM-DD-YYYY HH:mm";
	var formattedValue = (dateString) => {
		return (0, import_dayjs_min.default)(dateString, timeFormat, true).isValid() ? (0, import_dayjs_min.default)(dateString, timeFormat) : null;
	};
	var TimePickerControl = ({ condition, controlKey, onChangeOption, value, shouldShowError, errorMessage }) => {
		const lastInputValue = (0, react.useRef)(formattedValue(value)), [controlValue, setControlValue] = (0, react.useState)(lastInputValue.current);
		(0, react.useEffect)(() => {
			setControlValue(lastInputValue.current);
		}, [condition]);
		const handleChangeOption = (newValue) => {
			onChangeOption((0, import_dayjs_min.default)(newValue, dateFormat, true).isValid() ? newValue.format(dateFormat) : "");
			lastInputValue.current = newValue;
			setControlValue(newValue);
		};
		return /* @__PURE__ */ react.createElement(_elementor_ui.TimePicker, {
			sx: { flex: 1 },
			id: `select-${controlKey}`,
			value: controlValue,
			slotProps: { textField: {
				size: "small",
				error: shouldShowError,
				helperText: errorMessage
			} },
			onChange: (newValue) => handleChangeOption(newValue)
		});
	};
	TimePickerControl.propTypes = {
		condition: import_prop_types.object.isRequired,
		control: import_prop_types.object.isRequired,
		controlKey: import_prop_types.string.isRequired,
		onChangeOption: import_prop_types.func.isRequired,
		value: import_prop_types.string,
		errorMessage: import_prop_types.string.isRequired,
		shouldShowError: import_prop_types.bool.isRequired
	};
	//#endregion
	//#region modules/display-conditions/assets/js/editor/components/control-renderer.js
	var __defProp$6 = Object.defineProperty;
	var __getOwnPropSymbols$6 = Object.getOwnPropertySymbols;
	var __hasOwnProp$6 = Object.prototype.hasOwnProperty;
	var __propIsEnum$6 = Object.prototype.propertyIsEnumerable;
	var __defNormalProp$6 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$6(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value, "__defNormalProp");
	var __spreadValues$6 = /* @__PURE__ */ __name((a, b) => {
		for (var prop in b || (b = {})) if (__hasOwnProp$6.call(b, prop)) __defNormalProp$6(a, prop, b[prop]);
		if (__getOwnPropSymbols$6) {
			for (var prop of __getOwnPropSymbols$6(b)) if (__propIsEnum$6.call(b, prop)) __defNormalProp$6(a, prop, b[prop]);
		}
		return a;
	}, "__spreadValues");
	var ControlRenderer = ({ controlKey, andConditionIndex, orConditionIndex, controlCount }) => {
		const { conditionsConfig, selectedConditions, dispatch } = useConditions(), { conditions: availableConditions } = conditionsConfig, andCondition = selectedConditions[orConditionIndex][andConditionIndex];
		const { controls = {} } = availableConditions[andCondition.condition], control = {} = controls[controlKey], { options = {} } = control;
		if ("__settings" === controlKey) return null;
		const extractControlPropsFromGlobals = (defaultAltValue) => {
			const valueProps = getControlValueRelatedProps(defaultAltValue);
			const invalidInputProps = getControlInvalidInputRelatedProps();
			const controlProps = {
				controlKey,
				control,
				conditionIndex: andConditionIndex,
				condition: andCondition,
				conditions: availableConditions,
				options,
				onChangeOption: handleChangeOption,
				controlCount
			};
			if (shouldDisableControl(controlKey, controlProps.condition.comparator)) controlProps.disabled = true;
			return __spreadValues$6(__spreadValues$6(__spreadValues$6({}, valueProps), invalidInputProps), controlProps);
		};
		const getControlValueRelatedProps = (defaultAltValue) => {
			defaultAltValue = getControlValue(defaultAltValue, DEFAULT_CONTROL_VALUES[control.type]);
			const defaultValue = getControlValue(control == null ? void 0 : control.default, Object.keys(options)[0] || defaultAltValue);
			return {
				defaultValue,
				value: getControlValue(andCondition[controlKey], defaultValue),
				placeholder: (control == null ? void 0 : control.placeholder) || "",
				isMultiple: (control == null ? void 0 : control.multiple) || false
			};
		};
		const getControlInvalidInputRelatedProps = () => {
			const controlErrors = (andCondition.errors || {})[controlKey] || {};
			const errorMessage = controlErrors.shouldShow && controlErrors.message || "";
			return {
				errorMessage,
				shouldShowError: Boolean(errorMessage)
			};
		};
		const handleChangeOption = (value) => {
			const { type, variant } = controls[controlKey], error = getInvalidInputFeedback(type, variant, value);
			dispatch({
				type: ACTION_TYPES.CHANGE_CONTROL_VALUE,
				orConditionIndex,
				andConditionIndex,
				controlKey,
				value
			});
			dispatch({
				type: ACTION_TYPES.SET_ERRORS,
				andConditionIndex,
				orConditionIndex,
				errors: { [controlKey]: error }
			});
		};
		const getDateAndTimeBasedControl = (variant) => {
			switch (variant) {
				case "date": return /* @__PURE__ */ react.createElement(DatePickerControl, __spreadValues$6({}, extractControlPropsFromGlobals()));
				case "time": return /* @__PURE__ */ react.createElement(TimePickerControl, __spreadValues$6({}, extractControlPropsFromGlobals()));
			}
		};
		switch (control.type) {
			case CONTROL_TYPES.SELECT: return /* @__PURE__ */ react.createElement(SelectControl, __spreadValues$6({}, extractControlPropsFromGlobals()));
			case CONTROL_TYPES.MULTIPLE_SELECT: return /* @__PURE__ */ react.createElement(AutocompleteControl, __spreadValues$6({}, extractControlPropsFromGlobals()));
			case CONTROL_TYPES.DATE_TIME: return getDateAndTimeBasedControl(control == null ? void 0 : control.variant);
			case CONTROL_TYPES.QUERY: return /* @__PURE__ */ react.createElement(QueryControl, __spreadValues$6({}, extractControlPropsFromGlobals()));
		}
		return /* @__PURE__ */ react.createElement(TextFieldControl, __spreadValues$6({}, extractControlPropsFromGlobals()));
	};
	ControlRenderer.propTypes = {
		controlKey: import_prop_types.string.isRequired,
		andConditionIndex: import_prop_types.number.isRequired,
		orConditionIndex: import_prop_types.number.isRequired,
		controlCount: import_prop_types.number.isRequired
	};
	//#endregion
	//#region modules/display-conditions/assets/js/editor/components/ui/row-controls.js
	var __defProp$5 = Object.defineProperty;
	var __getOwnPropSymbols$5 = Object.getOwnPropertySymbols;
	var __hasOwnProp$5 = Object.prototype.hasOwnProperty;
	var __propIsEnum$5 = Object.prototype.propertyIsEnumerable;
	var __defNormalProp$5 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$5(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value, "__defNormalProp");
	var __spreadValues$5 = /* @__PURE__ */ __name((a, b) => {
		for (var prop in b || (b = {})) if (__hasOwnProp$5.call(b, prop)) __defNormalProp$5(a, prop, b[prop]);
		if (__getOwnPropSymbols$5) {
			for (var prop of __getOwnPropSymbols$5(b)) if (__propIsEnum$5.call(b, prop)) __defNormalProp$5(a, prop, b[prop]);
		}
		return a;
	}, "__spreadValues");
	var RowControls = ({ orConditionIndex, andConditionIndex }) => {
		const { conditionsConfig, dispatch } = useConditions(), { conditions: availableConditions, conditionsByGroup } = conditionsConfig;
		const addRepeaterRow = () => {
			const conditionKey = getDefaultActiveCondition(conditionsByGroup);
			const defaultValues = getConditionInitialState(availableConditions, conditionKey);
			const andCondition = __spreadValues$5({ condition: conditionKey }, defaultValues);
			dispatch({
				type: ACTION_TYPES.ADD_AND_CONDITION,
				andCondition,
				andConditionIndex,
				orConditionIndex
			});
		};
		const removeRepeaterRow = () => {
			dispatch({
				type: ACTION_TYPES.REMOVE_AND_CONDITION,
				andConditionIndex,
				orConditionIndex
			});
		};
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			alignItems: "center",
			sx: {
				left: "100%",
				gap: .5,
				ml: -1,
				mt: "2.5px",
				position: "absolute"
			}
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			color: "secondary",
			variant: "outlined",
			sx: {
				px: 1,
				minWidth: "unset"
			},
			className: "add-single-condition-button",
			onClick: addRepeaterRow
		}, (0, _wordpress_i18n.__)("AND", "elementor-pro")), /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
			color: "secondary",
			"aria-label": (0, _wordpress_i18n.__)("Delete", "elementor-pro"),
			className: "remove-single-condition-button",
			onClick: removeRepeaterRow
		}, /* @__PURE__ */ react.createElement(_elementor_icons.XIcon, { fontSize: "small" })));
	};
	RowControls.propTypes = {
		andConditionIndex: import_prop_types.default.number.isRequired,
		orConditionIndex: import_prop_types.default.number.isRequired
	};
	//#endregion
	//#region modules/display-conditions/assets/js/editor/components/conditions-repeater-row.js
	var __defProp$4 = Object.defineProperty;
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
	var ConditionsRepeaterRow = ({ andConditionIndex, orConditionIndex }) => {
		var _a;
		const { selectedConditions, conditionsConfig, dispatch } = useConditions(), { conditions: availableConditions, flattenedConditionOptions } = conditionsConfig;
		const andCondition = selectedConditions[orConditionIndex][andConditionIndex];
		const conditionControls = ((_a = availableConditions[andCondition == null ? void 0 : andCondition.condition]) == null ? void 0 : _a.controls) || {};
		const controlCount = Object.keys(conditionControls).length;
		const handleChangeCondition = (event) => {
			const conditionKey = event.target.value;
			const conditionToChange = __spreadValues$4({ condition: conditionKey }, getConditionInitialState(availableConditions, conditionKey));
			dispatch({
				type: ACTION_TYPES.CHANGE_CONDITION_TYPE,
				orConditionIndex,
				andConditionIndex,
				conditionToChange
			});
		};
		return /* @__PURE__ */ react.createElement(_elementor_ui.Container, {
			maxWidth: "md",
			sx: {
				display: "flex",
				gap: .5,
				mb: 1,
				position: "relative"
			},
			className: `and-condition-repeater-row and-condition-${andConditionIndex}`
		}, /* @__PURE__ */ react.createElement(ConditionSelect, {
			id: "condition-select",
			value: andCondition.condition || "",
			onChange: (event) => handleChangeCondition(event, andConditionIndex),
			controlCount
		}, flattenedConditionOptions.map(({ key, label, isGroup }) => isGroup ? /* @__PURE__ */ react.createElement(_elementor_ui.ListSubheader, { key }, /* @__PURE__ */ react.createElement(ConditionSelectOption, {
			variant: "caption",
			controlCount
		}, label)) : /* @__PURE__ */ react.createElement(_elementor_ui.MenuItem, {
			key,
			value: key
		}, /* @__PURE__ */ react.createElement(ConditionSelectOption, { controlCount }, label)))), Object.keys(conditionControls).map((controlKey) => /* @__PURE__ */ react.createElement(ControlRenderer, {
			key: controlKey,
			controlKey,
			andConditionIndex,
			orConditionIndex,
			controlCount
		})), /* @__PURE__ */ react.createElement(RowControls, {
			orConditionIndex,
			andConditionIndex
		}));
	};
	ConditionsRepeaterRow.propTypes = {
		andConditionIndex: import_prop_types.number.isRequired,
		orConditionIndex: import_prop_types.number.isRequired
	};
	//#endregion
	//#region modules/display-conditions/assets/js/editor/components/conditions-selectors.js
	var ConditionsSelectors = ({ orConditionIndex }) => {
		const { selectedConditions } = useConditions(), orCondition = selectedConditions[orConditionIndex];
		return /* @__PURE__ */ react.default.createElement(_elementor_ui.Box, {
			sx: {
				my: 2,
				gap: 1
			},
			className: `or-condition-repeater or-condition-${orConditionIndex}`
		}, orCondition.map((andCondition, andConditionIndex) => /* @__PURE__ */ react.default.createElement(ConditionsRepeaterRow, {
			key: "or-condition-row-" + andConditionIndex,
			andConditionIndex,
			orConditionIndex
		})));
	};
	ConditionsSelectors.propTypes = { orConditionIndex: import_prop_types.default.number.isRequired };
	//#endregion
	//#region modules/display-conditions/assets/js/editor/components/ui/conditions-or-divider.js
	var OrDivider = () => {
		return /* @__PURE__ */ react.default.createElement(_elementor_ui.Divider, { sx: { px: 3 } }, (0, _wordpress_i18n.__)("OR", "elementor-pro"));
	};
	//#endregion
	//#region modules/display-conditions/assets/js/editor/components/or-row-group.js
	var __defProp$3 = Object.defineProperty;
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
	var OrRowGroup = ({ showConditions, setShowConditions }) => {
		const { selectedConditions, conditionsConfig, dispatch } = useConditions(), { conditions: availableConditions, conditionsByGroup } = conditionsConfig, addButtonText = selectedConditions.length ? (0, _wordpress_i18n.__)("Add condition group", "elementor-pro") : (0, _wordpress_i18n.__)("Add Condition", "elementor-pro");
		const addOrCondition = () => {
			const conditionKey = getDefaultActiveCondition(conditionsByGroup);
			const defaultValues = getConditionInitialState(availableConditions, conditionKey);
			const andCondition = __spreadValues$3({ condition: conditionKey }, defaultValues);
			dispatch({
				type: ACTION_TYPES.ADD_OR_CONDITION,
				andCondition
			});
			setShowConditions(true);
		};
		return /* @__PURE__ */ react.default.createElement(_elementor_ui.Box, null, showConditions && selectedConditions.map((orCondition, orConditionIndex) => /* @__PURE__ */ react.default.createElement(react.Fragment, { key: orConditionIndex }, orConditionIndex > 0 && /* @__PURE__ */ react.default.createElement(OrDivider, null), /* @__PURE__ */ react.default.createElement(ConditionsSelectors, { orConditionIndex }))), /* @__PURE__ */ react.default.createElement(_elementor_ui.Button, {
			variant: "contained",
			className: "add-or-condition-button",
			color: "secondary",
			startIcon: /* @__PURE__ */ react.default.createElement(_elementor_icons.PlusIcon, null),
			sx: {
				mt: 1,
				mb: 5
			},
			onClick: () => addOrCondition()
		}, addButtonText));
	};
	OrRowGroup.propTypes = {
		showConditions: import_prop_types.default.bool.isRequired,
		setShowConditions: import_prop_types.default.func.isRequired
	};
	//#endregion
	//#region modules/display-conditions/assets/js/editor/components/conditions.js
	var __defProp$2 = Object.defineProperty;
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
	var Conditions = (props) => {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			display: "flex",
			justifyContent: "center",
			alignItems: "flex-start",
			sx: {
				flex: 1,
				overflow: "auto"
			}
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			maxWidth: "md",
			width: "100%",
			justifyContent: "center",
			textAlign: "center",
			sx: {
				pt: 5,
				pb: 10,
				px: 6
			}
		}, /* @__PURE__ */ react.createElement(HierarchyIcon, {
			fontSize: "large",
			sx: {
				mb: 1,
				mx: "auto"
			}
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			component: "h6",
			variant: "h6",
			color: "text.primary"
		}, (0, _wordpress_i18n.__)("Set one or more conditions for this element", "elementor-pro")), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "body2",
			color: "text.tertiary",
			sx: { mb: 4 }
		}, (0, _wordpress_i18n.__)("It will only appear on your website when all the conditions are met.", "elementor-pro"), " ", /* @__PURE__ */ react.createElement(_elementor_ui.Link, {
			href: "https://go.elementor.com/app-display-conditions/",
			target: "_blank",
			rel: "noreferrer",
			color: "info.main",
			underline: "hover",
			sx: { "&:hover": { color: (theme) => theme.palette.info.main } }
		}, (0, _wordpress_i18n.__)("Learn more", "elementor-pro"))), /* @__PURE__ */ react.createElement(OrRowGroup, __spreadValues$2({}, props))));
	};
	//#endregion
	//#region modules/display-conditions/assets/js/editor/components/cache-notice.js
	var __async$1 = /* @__PURE__ */ __name((__this, __arguments, generator) => {
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
	}, "__async");
	var CacheNotice = ({ setCacheNoticeStatus }) => {
		const [open, setOpen] = (0, react.useState)(true);
		const handleClose = () => __async$1(null, null, function* () {
			if (yield setCacheNoticeStatus()) setOpen(false);
		});
		return /* @__PURE__ */ react.default.createElement(_elementor_ui.Box, null, /* @__PURE__ */ react.default.createElement(_elementor_ui.Collapse, {
			in: open,
			sx: { px: 3 }
		}, /* @__PURE__ */ react.default.createElement(_elementor_ui.Alert, {
			color: "info",
			severity: "error",
			variant: "standard",
			onClose: handleClose,
			sx: { mt: 3 }
		}, (0, _wordpress_i18n.__)("Keep in mind: Certain cache plugins can conflict with your display conditions.", "elementor-pro"), " ", /* @__PURE__ */ react.default.createElement(_elementor_ui.Link, {
			href: "https://go.elementor.com/app-display-conditions-cache-notice/",
			underline: "hover",
			color: "info.main",
			target: "_blank",
			sx: { "&:hover": { color: (theme) => theme.palette.info.main } }
		}, (0, _wordpress_i18n.__)("Learn more", "elementor-pro")))));
	};
	CacheNotice.propTypes = { setCacheNoticeStatus: import_prop_types.default.func.isRequired };
	//#endregion
	//#region modules/display-conditions/assets/js/editor/components/content.js
	var __defProp$1 = Object.defineProperty;
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
	var Content = ({ getControlValue, setControlValue, conditionsConfig, onClose, fetchData, setCacheNoticeStatus }) => {
		const initialState = {
			conditionsConfig,
			selectedConditions: getControlValue() || [],
			fetchData
		};
		const [showConditions, setShowConditions] = react.default.useState(true), [conditionsStore, dispatch] = (0, react.useReducer)(conditionsReducer, initialState), [saveButtonDisplay, setSaveButtonDisplay] = (0, react.useState)(false), { selectedConditions } = conditionsStore;
		(0, react.useEffect)(() => {
			if (!saveButtonDisplay) setSaveButtonDisplay(true);
		}, [selectedConditions]);
		(0, react.useEffect)(() => {
			setSaveButtonDisplay(false);
		}, []);
		const handleEmptyFieldsAndGetFirstInvalidIndex = () => {
			let hasFoundInvalidCondition = false;
			let invalidOrConditionIndex = null;
			let invalidAndConditionIndex = null;
			selectedConditions.forEach((orCondition, orConditionIndex) => {
				const { hasFoundInvalidConditionInConditionSet, invalidAndConditionIndex: andConditionIndex } = handleEmptyFieldsPerConditionSet(orCondition, orConditionIndex);
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
			let hasFoundInvalidConditionInConditionSet = false;
			let invalidAndConditionIndex = null;
			orCondition.forEach((andCondition, andConditionIndex) => {
				const { condition: conditionKey } = andCondition, requiredKeys = getRequiredControlKeys(conditionKey);
				if (handleInvalidRequiredKeysPerCondition({
					requiredKeys,
					andCondition,
					orConditionIndex,
					andConditionIndex
				}) && !hasFoundInvalidConditionInConditionSet) {
					invalidAndConditionIndex = andConditionIndex;
					hasFoundInvalidConditionInConditionSet = true;
				}
			});
			return {
				hasFoundInvalidConditionInConditionSet,
				invalidAndConditionIndex
			};
		};
		const handleInvalidRequiredKeysPerCondition = ({ requiredKeys, andCondition, orConditionIndex, andConditionIndex }) => {
			const { condition: conditionKey } = andCondition;
			let hasFoundInvalidCondition = false;
			requiredKeys.forEach((controlKey) => {
				const value = andCondition[controlKey], { type, variant = null } = conditionsConfig.conditions[conditionKey].controls[controlKey];
				if ((value == null ? void 0 : value.length) || shouldEmptyValuePassValidation(andCondition.condition, andCondition.comparator)) return;
				if (!hasFoundInvalidCondition) hasFoundInvalidCondition = true;
				dispatch({
					type: ACTION_TYPES.SET_ERRORS,
					andConditionIndex,
					orConditionIndex,
					errors: { [controlKey]: getInvalidInputFeedback(type, variant, value, true) }
				});
			});
			return hasFoundInvalidCondition;
		};
		const handleSave = () => {
			const { hasFoundInvalidCondition, invalidOrConditionIndex, invalidAndConditionIndex } = handleEmptyFieldsAndGetFirstInvalidIndex();
			if (hasFoundInvalidCondition) {
				const className = `.or-condition-repeater.or-condition-${invalidOrConditionIndex} .and-condition-repeater-row.and-condition-${invalidAndConditionIndex}`;
				const conditionRepeaterRows = document.querySelector(className);
				setTimeout(() => conditionRepeaterRows == null ? void 0 : conditionRepeaterRows.scrollIntoView({ behavior: "smooth" }), 100);
				return;
			}
			setControlValue([JSON.stringify(getSanitizedConditions())]);
			onClose();
		};
		const getRequiredControlKeys = (condition) => {
			const { controls } = conditionsConfig.conditions[condition];
			return Object.keys(controls).filter((key) => controls[key].required);
		};
		const getSanitizedConditions = () => {
			return selectedConditions.map((orCondition) => {
				return orCondition.map((andCondition) => {
					const formattedCondition = __spreadValues$1({}, andCondition);
					delete formattedCondition.errors;
					return formattedCondition;
				});
			});
		};
		return /* @__PURE__ */ react.default.createElement(react.default.Fragment, null, /* @__PURE__ */ react.default.createElement(Header, { onClose }), /* @__PURE__ */ react.default.createElement(_elementor_ui.Divider, { orientation: "horizontal" }), conditionsConfig.show_cache_notice && /* @__PURE__ */ react.default.createElement(CacheNotice, { setCacheNoticeStatus }), /* @__PURE__ */ react.default.createElement(ConditionsContext.Provider, { value: __spreadValues$1({ dispatch }, conditionsStore) }, /* @__PURE__ */ react.default.createElement(Conditions, {
			showConditions,
			setShowConditions
		})), /* @__PURE__ */ react.default.createElement(_elementor_ui.Divider, { orientation: "horizontal" }), /* @__PURE__ */ react.default.createElement(Footer, {
			onClickSaveButton: () => handleSave(),
			showConditions,
			setShowConditions,
			isButtonDisabled: saveButtonDisplay
		}));
	};
	Content.propTypes = {
		getControlValue: import_prop_types.default.func.isRequired,
		setControlValue: import_prop_types.default.func.isRequired,
		fetchData: import_prop_types.default.func.isRequired,
		onClose: import_prop_types.default.func.isRequired,
		conditionsConfig: import_prop_types.default.object.isRequired,
		setCacheNoticeStatus: import_prop_types.default.func.isRequired
	};
	//#endregion
	//#region modules/display-conditions/assets/js/editor/app.js
	var App = (props) => {
		const [dialogOpen, setDialogOpen] = (0, react.useState)(true), fadeDuration = 500;
		(0, react.useEffect)(() => {
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
		return /* @__PURE__ */ react.default.createElement(_elementor_ui.DirectionProvider, { rtl: props.isRTL }, /* @__PURE__ */ react.default.createElement(_elementor_ui.LocalizationProvider, null, /* @__PURE__ */ react.default.createElement(_elementor_ui.ThemeProvider, { colorScheme: props.colorScheme }, /* @__PURE__ */ react.default.createElement(_elementor_ui.Dialog, {
			open: dialogOpen,
			fullWidth: true,
			maxWidth: "lg",
			TransitionComponent: _elementor_ui.Fade,
			transitionDuration: {
				enter: fadeDuration,
				exit: fadeDuration
			},
			sx: { "& .MuiDialog-paper": {
				height: "calc(100vh - 4rem)",
				maxHeight: 775
			} }
		}, /* @__PURE__ */ react.default.createElement(Content, {
			getControlValue: props.getControlValue,
			setControlValue: props.setControlValue,
			fetchData: props.fetchData,
			onClose: handleCloseDialog,
			conditionsConfig: props.conditionsConfig,
			setCacheNoticeStatus: props.setCacheNoticeStatus
		})))));
	};
	App.propTypes = {
		colorScheme: import_prop_types.default.oneOf([
			"auto",
			"light",
			"dark"
		]),
		isRTL: import_prop_types.default.bool,
		getControlValue: import_prop_types.default.func.isRequired,
		setControlValue: import_prop_types.default.func.isRequired,
		fetchData: import_prop_types.default.func.isRequired,
		onClose: import_prop_types.default.func.isRequired,
		conditionsConfig: import_prop_types.default.object.isRequired,
		setCacheNoticeStatus: import_prop_types.default.func.isRequired
	};
	//#endregion
	//#region modules/display-conditions/assets/js/editor/modal.js
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
	function getGroupedConditionKeys(conditionsConfig) {
		return Object.keys((conditionsConfig == null ? void 0 : conditionsConfig.groups) || {}).reduce((group, groupName) => {
			const conditions = getConditionKeyByGroup(conditionsConfig.conditions, groupName);
			if (conditions.length) group[groupName] = conditions;
			return group;
		}, {});
	}
	function getConditionKeyByGroup(conditions, groupName) {
		return Object.keys(conditions).filter((conditionKey) => groupName === conditions[conditionKey].group);
	}
	function getFlattenedConditionOptions(conditionsByGroup) {
		const { conditions = {}, groups = {} } = elementor.config.displayConditions || {};
		return Object.entries(conditionsByGroup).reduce((optionList, [groupName, conditionKeys]) => {
			const relevantConditions = conditionKeys.map((key) => ({
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
	}
	function doAjaxRequest(action, data) {
		try {
			return new Promise((resolve, reject) => {
				elementorCommon.ajax.addRequest(action, {
					data,
					error: () => reject(),
					success: (res) => {
						resolve(res);
					}
				});
			});
		} catch (error) {
			return false;
		}
	}
	function defaultFetchData(value, control) {
		return __async(this, null, function* () {
			var _a;
			const response = yield doAjaxRequest("pro_panel_posts_control_filter_autocomplete", {
				autocomplete: control.autocomplete,
				q: value
			});
			return (_a = response == null ? void 0 : response.results) != null ? _a : [];
		});
	}
	function defaultSetCacheNoticeStatus() {
		return __async(this, null, function* () {
			const response = yield doAjaxRequest("display_conditions_set_cache_notice_status");
			if (response) elementor.config.displayConditions.show_cache_notice = false;
			return response;
		});
	}
	function setupModal() {
		let appRoot = null;
		const getRootElement = () => {
			let rootElement = window.parent.document.getElementById("elementor-conditions__modal");
			if (!!rootElement) return rootElement;
			rootElement = document.createElement("div");
			rootElement.setAttribute("id", "elementor-conditions__modal");
			return rootElement;
		};
		const getConditionsConfig = () => {
			const conditionsByGroup = getGroupedConditionKeys(elementor.config.displayConditions || {});
			const flattenedConditionOptions = getFlattenedConditionOptions(conditionsByGroup);
			return __spreadProps(__spreadValues({}, elementor.config.displayConditions), {
				conditionsByGroup,
				flattenedConditionOptions
			});
		};
		const renderAppModal = ({ colorScheme, isRTL, getControlValue, setControlValue, fetchData, onClose, conditionsConfig, setCacheNoticeStatus }, rootElement) => {
			var _a;
			appRoot = ReactDOM.createRoot(rootElement);
			appRoot.render(/* @__PURE__ */ react.default.createElement(App, {
				colorScheme: colorScheme != null ? colorScheme : ((_a = elementor == null ? void 0 : elementor.getPreferences) == null ? void 0 : _a.call(elementor, "ui_theme")) || "auto",
				isRTL: isRTL != null ? isRTL : elementorCommon.config.isRTL,
				getControlValue,
				setControlValue,
				fetchData: fetchData != null ? fetchData : defaultFetchData,
				onClose,
				conditionsConfig: conditionsConfig != null ? conditionsConfig : getConditionsConfig(),
				setCacheNoticeStatus: setCacheNoticeStatus != null ? setCacheNoticeStatus : defaultSetCacheNoticeStatus
			}));
		};
		window.addEventListener("elementor/display-conditions/open", (event) => {
			var _a;
			renderAppModal(event.detail.props, (_a = event.detail.rootElement) != null ? _a : getRootElement());
		});
		window.addEventListener("elementor/display-conditions/close", (event) => {
			var _a;
			var _b;
			var _c;
			const { rootElement } = (_a = event.detail) != null ? _a : {};
			(_b = appRoot == null ? void 0 : appRoot.unmount) == null || _b.call(appRoot);
			(_c = rootElement == null ? void 0 : rootElement.remove) == null || _c.call(rootElement);
		});
		window.addEventListener("elementor/display-conditions/set-cache-notice-status", (event) => __async(null, null, function* () {
			var _a;
			const { resolve, reject } = (_a = event.detail) != null ? _a : {};
			if (!resolve || !reject) return;
			try {
				const success = !!(yield doAjaxRequest("display_conditions_set_cache_notice_status"));
				if (success) elementor.config.displayConditions.show_cache_notice = false;
				resolve(success);
			} catch (error) {
				reject(error);
			}
		}));
	}
	//#endregion
	//#region modules/display-conditions/assets/js/editor/index.js
	new Module();
	setupModal();
	//#endregion
})(wp.i18n, React, elementorV2.ui, elementorV2.icons);

//# sourceMappingURL=display-conditions.js.map
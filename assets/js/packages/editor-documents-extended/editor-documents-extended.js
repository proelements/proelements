/*! pro-elements - v4.3.0 - 22-09-2026 */
this.elementorV2 = this.elementorV2 || {};
(function(exports, _elementor_store, _elementor_editor_app_bar, _elementor_editor_v1_adapters, _wordpress_i18n, react, _elementor_ui, _elementor_editor_documents, _elementor_icons, _elementor_license_api) {
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
	//#region packages/packages/pro/editor-documents-extended/src/icons/hierarchy-icon.tsx
	var HierarchyIcon = react.forwardRef((props, ref) => {
		return /* @__PURE__ */ react.createElement(_elementor_ui.SvgIcon, _objectSpread2(_objectSpread2({ viewBox: "0 0 24 24" }, props), {}, { ref }), /* @__PURE__ */ react.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M11 3.75C10.3096 3.75 9.75 4.30964 9.75 5V7C9.75 7.69036 10.3096 8.25 11 8.25H13C13.6904 8.25 14.25 7.69036 14.25 7V5C14.25 4.30964 13.6904 3.75 13 3.75H11ZM12.75 9.75H13C14.5188 9.75 15.75 8.51878 15.75 7V5C15.75 3.48122 14.5188 2.25 13 2.25H11C9.48122 2.25 8.25 3.48122 8.25 5V7C8.25 8.51878 9.48122 9.75 11 9.75H11.25V11.25H8C7.27065 11.25 6.57118 11.5397 6.05546 12.0555C5.53973 12.5712 5.25 13.2707 5.25 14V14.25H5C3.48122 14.25 2.25 15.4812 2.25 17V19C2.25 20.5188 3.48122 21.75 5 21.75H7C8.51878 21.75 9.75 20.5188 9.75 19V17C9.75 15.4812 8.51878 14.25 7 14.25H6.75V14C6.75 13.6685 6.8817 13.3505 7.11612 13.1161C7.35054 12.8817 7.66848 12.75 8 12.75H16C16.3315 12.75 16.6495 12.8817 16.8839 13.1161C17.1183 13.3505 17.25 13.6685 17.25 14V14.25H17C15.4812 14.25 14.25 15.4812 14.25 17V19C14.25 20.5188 15.4812 21.75 17 21.75H19C20.5188 21.75 21.75 20.5188 21.75 19V17C21.75 15.4812 20.5188 14.25 19 14.25H18.75V14C18.75 13.2707 18.4603 12.5712 17.9445 12.0555C17.4288 11.5397 16.7293 11.25 16 11.25H12.75V9.75ZM17 15.75C16.3096 15.75 15.75 16.3096 15.75 17V19C15.75 19.6904 16.3096 20.25 17 20.25H19C19.6904 20.25 20.25 19.6904 20.25 19V17C20.25 16.3096 19.6904 15.75 19 15.75H17ZM5 15.75C4.30964 15.75 3.75 16.3096 3.75 17V19C3.75 19.6904 4.30964 20.25 5 20.25H7C7.69036 20.25 8.25 19.6904 8.25 19V17C8.25 16.3096 7.69036 15.75 7 15.75H5Z"
		}));
	});
	//#endregion
	//#region packages/packages/pro/editor-documents-extended/src/icons/trigger-icon.tsx
	var TriggerIcon = react.forwardRef((props, ref) => {
		return /* @__PURE__ */ react.createElement(_elementor_ui.SvgIcon, _objectSpread2(_objectSpread2({ viewBox: "0 0 24 24" }, props), {}, { ref }), /* @__PURE__ */ react.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M3.46967 1.46967C3.76256 1.17678 4.23744 1.17678 4.53033 1.46967L5.53033 2.46967C5.82322 2.76256 5.82322 3.23744 5.53033 3.53033C5.23744 3.82322 4.76256 3.82322 4.46967 3.53033L3.46967 2.53033C3.17678 2.23744 3.17678 1.76256 3.46967 1.46967ZM15.5303 1.46967C15.8232 1.76256 15.8232 2.23744 15.5303 2.53033L14.5303 3.53033C14.2374 3.82322 13.7626 3.82322 13.4697 3.53033C13.1768 3.23744 13.1768 2.76256 13.4697 2.46967L14.4697 1.46967C14.7626 1.17678 15.2374 1.17678 15.5303 1.46967ZM9.5 3.75C9.30109 3.75 9.11032 3.82902 8.96967 3.96967C8.82902 4.11032 8.75 4.30109 8.75 4.5V13C8.75 13.3033 8.56727 13.5768 8.28702 13.6929C8.00677 13.809 7.68418 13.7448 7.46968 13.5303L5.99991 12.0606C5.82378 11.8848 5.59369 11.7726 5.34668 11.7423C5.09954 11.7119 4.84934 11.765 4.63582 11.8931C4.4683 11.9936 4.34633 12.1555 4.29628 12.3443C4.24623 12.5331 4.27182 12.734 4.36759 12.9043C6.2544 16.2581 7.33302 18.1371 7.62819 18.5904C7.62825 18.5905 7.62812 18.5903 7.62819 18.5904L7.82231 18.8875C7.82253 18.8878 7.82274 18.8881 7.82295 18.8885C8.3011 19.6142 8.95191 20.2098 9.71702 20.622C10.482 21.0341 11.3372 21.2499 12.206 21.25C12.2066 21.25 12.2072 21.25 12.2078 21.25H13.9999C15.3923 21.25 16.7277 20.6969 17.7123 19.7123C18.6968 18.7277 19.2499 17.3924 19.2499 16V11.5C19.2499 11.3011 19.1709 11.1103 19.0303 10.9697C18.8896 10.829 18.6989 10.75 18.4999 10.75C18.301 10.75 18.1103 10.829 17.9696 10.9697C17.8312 11.1081 17.7525 11.295 17.75 11.4904V12C17.75 12.4142 17.4142 12.75 17 12.75C16.5858 12.75 16.25 12.4142 16.25 12V11.5097C16.25 11.5064 16.2499 11.5032 16.2499 11.5C16.2499 11.4945 16.25 11.4889 16.25 11.4834V10.5C16.25 10.3011 16.171 10.1103 16.0303 9.96967C15.8897 9.82902 15.6989 9.75 15.5 9.75C15.3011 9.75 15.1103 9.82902 14.9697 9.96967C14.829 10.1103 14.75 10.3011 14.75 10.5V12C14.75 12.4142 14.4142 12.75 14 12.75C13.5858 12.75 13.25 12.4142 13.25 12V9.5C13.25 9.30109 13.171 9.11032 13.0303 8.96967C12.8897 8.82902 12.6989 8.75 12.5 8.75C12.3011 8.75 12.1103 8.82902 11.9697 8.96967C11.829 9.11032 11.75 9.30109 11.75 9.5V12C11.75 12.4142 11.4142 12.75 11 12.75C10.5858 12.75 10.25 12.4142 10.25 12V4.5C10.25 4.30109 10.171 4.11032 10.0303 3.96967C9.88968 3.82902 9.69891 3.75 9.5 3.75ZM11.75 7.37868V4.5C11.75 3.90326 11.5129 3.33097 11.091 2.90901C10.669 2.48705 10.0967 2.25 9.5 2.25C8.90326 2.25 8.33097 2.48705 7.90901 2.90901C7.48705 3.33097 7.25 3.90326 7.25 4.5V11.1894L7.06026 10.9997C6.64751 10.5874 6.10855 10.3245 5.52952 10.2534C4.95058 10.1823 4.36448 10.3067 3.86429 10.6067M11.75 7.37868C11.9887 7.2943 12.242 7.25 12.5 7.25C13.0967 7.25 13.669 7.48705 14.091 7.90901C14.2603 8.0783 14.3998 8.2718 14.5062 8.48136C14.8125 8.33057 15.1521 8.25 15.5 8.25C16.0967 8.25 16.669 8.48705 17.091 8.90901C17.2603 9.0783 17.3998 9.27179 17.5062 9.48134C17.8125 9.33056 18.1521 9.25 18.4999 9.25C19.0967 9.25 19.669 9.48705 20.0909 9.90901C20.5129 10.331 20.7499 10.9033 20.7499 11.5V16C20.7499 17.7902 20.0388 19.5071 18.7729 20.773C17.507 22.0388 15.7901 22.75 13.9999 22.75H12.2081C12.208 22.75 12.2081 22.75 12.2081 22.75H11.9999C11.9646 22.75 11.9298 22.7476 11.8958 22.7428C10.8859 22.6962 9.89798 22.4233 9.00562 21.9426C8.02147 21.4124 7.1844 20.6461 6.56957 19.7125L6.56807 19.7102L6.3715 19.4093C6.04238 18.9041 4.93105 16.9651 3.06029 13.6397C2.77296 13.129 2.69621 12.5264 2.84636 11.96C2.99649 11.3936 3.36183 10.9081 3.86429 10.6067M16 6.75H15C14.5858 6.75 14.25 6.41421 14.25 6C14.25 5.58579 14.5858 5.25 15 5.25H16C16.4142 5.25 16.75 5.58579 16.75 6C16.75 6.41421 16.4142 6.75 16 6.75ZM2.25 7C2.25 6.58579 2.58579 6.25 3 6.25H4C4.41421 6.25 4.75 6.58579 4.75 7C4.75 7.41421 4.41421 7.75 4 7.75H3C2.58579 7.75 2.25 7.41421 2.25 7Z"
		}));
	});
	//#endregion
	//#region packages/packages/pro/editor-documents-extended/src/extensions/display-conditions/hooks/use-active-document-extended.ts
	function useActiveDocumentExtended() {
		const document = (0, _elementor_editor_documents.__useActiveDocument)();
		const documentExtensions = (0, _elementor_store.__useSelector)((state) => {
			if (!document) return null;
			return state.documentsExtended.entities[document.id] || null;
		});
		if (!documentExtensions) return null;
		return _objectSpread2(_objectSpread2({}, document), documentExtensions);
	}
	//#endregion
	//#region packages/packages/pro/editor-documents-extended/src/extensions/display-conditions/hooks/use-document-display-conditions-props.ts
	function useDocumentDisplayConditionsProps() {
		const document = useActiveDocumentExtended();
		const visible = !!(document === null || document === void 0 ? void 0 : document.locationKey);
		return {
			icon: HierarchyIcon,
			title: (0, _wordpress_i18n.__)("Display Conditions", "elementor-pro"),
			visible,
			onClick: () => {
				(0, _elementor_editor_v1_adapters.__privateOpenRoute)("theme-builder-publish/conditions");
			}
		};
	}
	//#endregion
	//#region packages/packages/pro/editor-documents-extended/src/extensions/display-conditions/index.ts
	function init$3() {
		_elementor_editor_app_bar.documentOptionsMenu.registerAction({
			id: "document-display-conditions",
			priority: 10,
			useProps: useDocumentDisplayConditionsProps
		});
	}
	__name(init$3, "init");
	//#endregion
	//#region packages/packages/pro/editor-documents-extended/src/extensions/popups/hooks/use-popup-advanced-rules-props.ts
	function usePopupAdvancedRulesProps() {
		const document = (0, _elementor_editor_documents.__useActiveDocument)();
		const visible = "popup" === (document === null || document === void 0 ? void 0 : document.type.value);
		return {
			icon: _elementor_icons.SettingsIcon,
			title: (0, _wordpress_i18n.__)("Advanced Rules", "elementor-pro"),
			visible,
			onClick: () => {
				(0, _elementor_editor_v1_adapters.__privateOpenRoute)("theme-builder-publish/timing");
			}
		};
	}
	//#endregion
	//#region packages/packages/pro/editor-documents-extended/src/extensions/popups/hooks/use-popup-triggers-props.ts
	function usePopupTriggersProps() {
		const document = (0, _elementor_editor_documents.__useActiveDocument)();
		const visible = "popup" === (document === null || document === void 0 ? void 0 : document.type.value);
		return {
			icon: TriggerIcon,
			title: (0, _wordpress_i18n.__)("Triggers", "elementor-pro"),
			visible,
			onClick: () => {
				(0, _elementor_editor_v1_adapters.__privateOpenRoute)("theme-builder-publish/triggers");
			}
		};
	}
	//#endregion
	//#region packages/packages/pro/editor-documents-extended/src/extensions/popups/index.ts
	function init$2() {
		_elementor_editor_app_bar.documentOptionsMenu.registerAction({
			id: "popup-triggers",
			priority: 20,
			useProps: usePopupTriggersProps
		});
		_elementor_editor_app_bar.documentOptionsMenu.registerAction({
			id: "popup-advanced-rules",
			priority: 30,
			useProps: usePopupAdvancedRulesProps
		});
	}
	__name(init$2, "init");
	//#endregion
	//#region packages/packages/pro/editor-documents-extended/src/extensions/index.ts
	function init$1() {
		init$2();
		init$3();
	}
	__name(init$1, "init");
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
	//#region packages/packages/pro/editor-documents-extended/src/form-feature-block.ts
	var FORM_FEATURE_NAME = "form";
	var MOVE_COMMAND = "document/elements/move";
	var BLOCKED_ELEMENT_TYPES = /* @__PURE__ */ new Set([
		"e-form",
		"e-form-input",
		"e-form-label",
		"e-form-textarea",
		"e-form-submit-button",
		"e-form-checkbox",
		"e-form-radio-button",
		"e-form-date-picker",
		"e-form-time-picker",
		"e-form-select",
		"e-form-file-upload"
	]);
	function getArgsElementType(args) {
		var _args$model;
		var _args$model2;
		return ((_args$model = args.model) === null || _args$model === void 0 ? void 0 : _args$model.widgetType) || ((_args$model2 = args.model) === null || _args$model2 === void 0 ? void 0 : _args$model2.elType);
	}
	function initFormFeatureBlock() {
		return _initFormFeatureBlock.apply(this, arguments);
	}
	function _initFormFeatureBlock() {
		_initFormFeatureBlock = _asyncToGenerator(function* () {
			const features = yield (0, _elementor_license_api.fetchTierFeatures)().catch(() => null);
			if (!features || features.includes(FORM_FEATURE_NAME)) return;
			(0, _elementor_editor_v1_adapters.registerDataHook)("dependency", "document/elements/create", (args, options) => {
				var _options$commandsCurr;
				if (options === null || options === void 0 || (_options$commandsCurr = options.commandsCurrentTrace) === null || _options$commandsCurr === void 0 ? void 0 : _options$commandsCurr.includes(MOVE_COMMAND)) return true;
				const elementType = getArgsElementType(args);
				return !elementType || !BLOCKED_ELEMENT_TYPES.has(elementType);
			});
		});
		return _initFormFeatureBlock.apply(this, arguments);
	}
	var slice = (0, _elementor_store.__createSlice)({
		name: "documentsExtended",
		initialState: { entities: {} },
		reducers: {
			init(state, { payload }) {
				state.entities = payload.entities;
			},
			addDocument(state, { payload }) {
				state.entities[payload.id] = payload;
			}
		}
	});
	//#endregion
	//#region packages/packages/pro/editor-documents-extended/src/sync/sync-store.ts
	function syncStore() {
		syncInitialization();
		syncOnDocumentOpen();
		syncOnLocationChange();
	}
	function syncInitialization() {
		const { init } = slice.actions;
		(0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.v1ReadyEvent)(), () => {
			const documentsManager = getV1DocumentsManager();
			const entities = Object.entries(documentsManager.documents).reduce((acc, [id, document]) => {
				acc[id] = normalizeV1Document(document);
				return acc;
			}, {});
			(0, _elementor_store.__dispatch)(init({ entities }));
		});
	}
	function syncOnDocumentOpen() {
		const { addDocument } = slice.actions;
		(0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.commandEndEvent)("editor/documents/open"), () => {
			const currentDocument = normalizeV1Document(getV1DocumentsManager().getCurrent());
			(0, _elementor_store.__dispatch)(addDocument(currentDocument));
		});
	}
	function syncOnLocationChange() {
		const { addDocument } = slice.actions;
		(0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/settings"), (event) => {
			var _event$args;
			const { settings } = (_event$args = event.args) !== null && _event$args !== void 0 ? _event$args : {};
			if (!(settings === null || settings === void 0 ? void 0 : settings.location)) return;
			const currentDocument = normalizeV1Document(getV1DocumentsManager().getCurrent());
			(0, _elementor_store.__dispatch)(addDocument(currentDocument));
		});
	}
	function getV1DocumentsManager() {
		var _window$elementor;
		const documentsManager = (_window$elementor = window.elementor) === null || _window$elementor === void 0 ? void 0 : _window$elementor.documents;
		if (!documentsManager) throw new Error("Elementor Editor V1 documents manager not found");
		return documentsManager;
	}
	function normalizeV1Document(documentData) {
		var _documentData$config$;
		return {
			id: documentData.id,
			locationKey: ((_documentData$config$ = documentData.config.theme_builder) === null || _documentData$config$ === void 0 || (_documentData$config$ = _documentData$config$.settings) === null || _documentData$config$ === void 0 ? void 0 : _documentData$config$.location) || null
		};
	}
	//#endregion
	//#region packages/packages/pro/editor-documents-extended/src/init.ts
	function init() {
		init$1();
		initFormFeatureBlock();
		initStore();
	}
	function initStore() {
		(0, _elementor_store.__registerSlice)(slice);
		syncStore();
	}
	//#endregion
	exports.init = init;
})(this.elementorV2.editorDocumentsExtended = this.elementorV2.editorDocumentsExtended || {}, elementorV2.store, elementorV2.editorAppBar, elementorV2.editorV1Adapters, wp.i18n, React, elementorV2.ui, elementorV2.editorDocuments, elementorV2.icons, elementorV2.licenseApi);

window.elementorV2.editorDocumentsExtended?.init?.();
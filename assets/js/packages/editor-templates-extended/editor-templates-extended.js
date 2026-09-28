/*! pro-elements - v4.3.0 - 22-09-2026 */
this.elementorV2 = this.elementorV2 || {};
(function(exports, _elementor_editor, _elementor_editor_embedded_documents_manager, _elementor_editor_styles_repository, _elementor_editor_v1_adapters, _elementor_store, _elementor_utils, _elementor_editor_documents, _elementor_editor_global_classes, _elementor_core_adapter_utils, react) {
	Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
	//#endregion
	//#region packages/packages/pro/editor-templates-extended/src/store.ts
	var initialState = { entities: {} };
	var SLICE = "templatesExtended";
	var slice = (0, _elementor_store.__createSlice)({
		name: SLICE,
		initialState,
		reducers: {
			setTemplates(state, action) {
				action.payload.forEach((doc) => {
					var _doc$elements;
					state.entities[doc.id] = (_doc$elements = doc.elements) !== null && _doc$elements !== void 0 ? _doc$elements : [];
				});
			},
			clearTemplates(state) {
				state.entities = {};
			}
		}
	});
	var selectEntities = (state) => state[SLICE].entities;
	var selectTemplates = (0, _elementor_store.__createSelector)([selectEntities], (entities) => Object.values(entities));
	//#endregion
	//#region packages/packages/pro/editor-templates-extended/src/template-shortcode-utils.ts
	var ELEMENTOR_TEMPLATE_SHORTCODE_PATTERN = /\[elementor-template\b[^\]]*\]/gi;
	function extractTemplateIdsFromShortcodeString(value) {
		const matches = value.match(ELEMENTOR_TEMPLATE_SHORTCODE_PATTERN);
		if (!matches) return [];
		return matches.map(parseElementorTemplateShortcodeId).filter((id) => id !== null);
	}
	function extractTemplateIdsFromSettingsValues(settings) {
		if (!settings) return [];
		return collectShortcodeTemplateIdsFromValue(settings);
	}
	function collectShortcodeTemplateIdsFromValue(value) {
		if (typeof value === "string") return extractTemplateIdsFromShortcodeString(value);
		if (Array.isArray(value)) return value.flatMap(collectShortcodeTemplateIdsFromValue);
		if (value && typeof value === "object") return Object.values(value).flatMap(collectShortcodeTemplateIdsFromValue);
		return [];
	}
	function parseElementorTemplateShortcodeId(shortcode) {
		const idMatch = shortcode.match(/\bid=["']?(\d+)["']?/i);
		if (!idMatch) return null;
		const id = Number(idMatch[1]);
		return isNaN(id) ? null : id;
	}
	//#endregion
	//#region packages/packages/pro/editor-templates-extended/src/utils.ts
	var CORE_VERSION_4_1 = "4.1";
	var CORE_VERSION_4_2 = "4.2";
	var isCoreHandlingTemplateStyles = () => !(0, _elementor_core_adapter_utils.isCoreAtLeast)(CORE_VERSION_4_1);
	var isCoreWithGlobalClassesPosts = () => (0, _elementor_core_adapter_utils.isCoreAtLeast)(CORE_VERSION_4_1);
	var isCoreWithEmbeddedDocumentsManager = () => (0, _elementor_core_adapter_utils.isCoreAtLeast)(CORE_VERSION_4_2);
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
	//#region packages/packages/pro/editor-templates-extended/src/load-templates.ts
	var TEMPLATE_ATTRIBUTE = "data-elementor-post-type=\"elementor_library\"";
	var DOCUMENT_WRAPPER_ATTR = "data-elementor-id";
	function loadCurrentDocumentTemplates() {
		return _loadCurrentDocumentTemplates.apply(this, arguments);
	}
	function _loadCurrentDocumentTemplates() {
		_loadCurrentDocumentTemplates = _asyncToGenerator(function* () {
			const iframeDocument = (0, _elementor_editor_v1_adapters.getCanvasIframeDocument)();
			if (!iframeDocument) return;
			const templateIds = getCurrentDocumentTemplateIds(iframeDocument);
			if (!templateIds.length) return;
			yield loadTemplatesByIds(templateIds);
		});
		return _loadCurrentDocumentTemplates.apply(this, arguments);
	}
	function loadTemplatesFromDocument(_x) {
		return _loadTemplatesFromDocument.apply(this, arguments);
	}
	function _loadTemplatesFromDocument() {
		_loadTemplatesFromDocument = _asyncToGenerator(function* (data) {
			var _data$elements;
			const templateIds = getTemplateIdsFromElements((_data$elements = data.elements) !== null && _data$elements !== void 0 ? _data$elements : []);
			if (!templateIds.length) return;
			yield loadTemplatesByIds(templateIds);
		});
		return _loadTemplatesFromDocument.apply(this, arguments);
	}
	function loadTemplatesByIds(_x2) {
		return _loadTemplatesByIds.apply(this, arguments);
	}
	function _loadTemplatesByIds() {
		_loadTemplatesByIds = _asyncToGenerator(function* (ids) {
			const documents = yield fetchDocuments(ids);
			(0, _elementor_store.__dispatch)(slice.actions.setTemplates(documents));
			if (isCoreWithEmbeddedDocumentsManager()) {
				documents.forEach((document) => {
					_elementor_editor_embedded_documents_manager.embeddedDocumentsManager.setDocument(document.id, document);
				});
				return;
			}
			if (isCoreWithGlobalClassesPosts()) documents.forEach((document) => (0, _elementor_editor_global_classes.addDocumentClasses)(document.id));
		});
		return _loadTemplatesByIds.apply(this, arguments);
	}
	function unloadTemplates() {
		(0, _elementor_store.__dispatch)(slice.actions.clearTemplates());
	}
	function getTemplateIdsFromDomElements(iframeDocument) {
		const { id: currentDocumentId } = (0, _elementor_editor_documents.getV1CurrentDocument)();
		return [...iframeDocument.body.querySelectorAll(`[${TEMPLATE_ATTRIBUTE}]`)].map((el) => Number(el.getAttribute(DOCUMENT_WRAPPER_ATTR))).filter((templateId) => !isNaN(templateId) && templateId !== currentDocumentId);
	}
	function getCurrentDocumentTemplateIds(iframeDocument) {
		var _getV1CurrentDocument;
		var _getV1CurrentDocument2;
		const fromConfig = getTemplateIdsFromElements((_getV1CurrentDocument = (_getV1CurrentDocument2 = (0, _elementor_editor_documents.getV1CurrentDocument)().config) === null || _getV1CurrentDocument2 === void 0 ? void 0 : _getV1CurrentDocument2.elements) !== null && _getV1CurrentDocument !== void 0 ? _getV1CurrentDocument : []);
		if (isCoreHandlingTemplateStyles()) return [...new Set(fromConfig)];
		const fromDom = getTemplateIdsFromDomElements(iframeDocument);
		return [.../* @__PURE__ */ new Set([...fromDom, ...fromConfig])];
	}
	function parseTemplateId({ template_id: templateId }) {
		if (!templateId) return null;
		const id = Number(templateId);
		return isNaN(id) ? null : id;
	}
	function getTemplateIdsFromSettings(settings) {
		if (!settings) return [];
		const { alternate_templates: alternateTemplates = [] } = settings;
		const fromTemplateId = [settings, ...alternateTemplates].map(parseTemplateId).filter((id) => id !== null);
		const fromShortcodes = extractTemplateIdsFromSettingsValues(settings);
		return [.../* @__PURE__ */ new Set([...fromTemplateId, ...fromShortcodes])];
	}
	function getTemplateIdsFromElements(elements) {
		const flattenElements = (els) => {
			return els.flatMap((element) => {
				var _element$elements;
				return [element, ...flattenElements((_element$elements = element.elements) !== null && _element$elements !== void 0 ? _element$elements : [])];
			});
		};
		return flattenElements(elements).flatMap((element) => getTemplateIdsFromSettings(element.settings));
	}
	function fetchDocuments(_x4) {
		return _fetchDocuments.apply(this, arguments);
	}
	function _fetchDocuments() {
		_fetchDocuments = _asyncToGenerator(function* (ids) {
			return (yield Promise.all(ids.map(function() {
				var _ref = _asyncToGenerator(function* (id) {
					try {
						return yield _elementor_editor_v1_adapters.ajax.load({
							data: { id },
							action: "get_document_config",
							unique_id: `template-${id}-styles-extended`
						});
					} catch (_unused) {
						return null;
					}
				});
				return function(_x3) {
					return _ref.apply(this, arguments);
				};
			}()))).filter((doc) => doc !== null);
		});
		return _fetchDocuments.apply(this, arguments);
	}
	//#endregion
	//#region packages/packages/pro/editor-templates-extended/src/templates-styles-provider.ts
	var styles = [];
	var listeners = /* @__PURE__ */ new Set();
	function addTemplateStyles(newStyles) {
		styles = [...styles, ...newStyles];
		listeners.forEach((cb) => cb());
	}
	function clearTemplatesStyles() {
		styles = [];
		listeners.forEach((cb) => cb());
	}
	var templatesStylesProvider = (0, _elementor_editor_styles_repository.createStylesProvider)({
		key: "templates-styles-extended",
		priority: 50,
		subscribe: (cb) => {
			listeners.add(cb);
			return () => {
				listeners.delete(cb);
			};
		},
		actions: {
			all: () => styles,
			get: (id) => {
				var _styles$find;
				return (_styles$find = styles.find((style) => style.id === id)) !== null && _styles$find !== void 0 ? _styles$find : null;
			}
		}
	});
	//#endregion
	//#region packages/packages/pro/editor-templates-extended/src/use-loaded-templates.ts
	function useLoadedTemplates() {
		return (0, _elementor_store.__useSelector)(selectTemplates);
	}
	//#endregion
	//#region packages/packages/pro/editor-templates-extended/src/render-template-styles.tsx
	var RenderTemplateStyles = () => {
		const templates = useLoadedTemplates();
		(0, react.useEffect)(() => {
			addTemplateStyles(templates.flatMap(extractStylesFromDocument));
		}, [templates]);
		return null;
	};
	function extractStylesFromDocument(elements) {
		if (!elements.length) return [];
		return elements.flatMap(extractStylesFromElement);
	}
	function extractStylesFromElement(element) {
		var _element$styles;
		var _element$elements;
		return [...Object.values((_element$styles = element.styles) !== null && _element$styles !== void 0 ? _element$styles : {}), ...((_element$elements = element.elements) !== null && _element$elements !== void 0 ? _element$elements : []).flatMap(extractStylesFromElement)];
	}
	//#endregion
	//#region packages/packages/pro/editor-templates-extended/src/init.ts
	var handleSettingsChange = (0, _elementor_utils.debounce)((args) => {
		const templateIds = getTemplateIdsFromSettings(args.settings);
		if (!templateIds.length) return;
		loadTemplatesByIds(templateIds);
	}, 150);
	function init() {
		(0, _elementor_store.__registerSlice)(slice);
		(0, _elementor_editor_v1_adapters.registerDataHook)("after", "document/elements/settings", handleSettingsChange);
		(0, _elementor_editor_v1_adapters.registerDataHook)("after", "editor/documents/attach-preview", _asyncToGenerator(function* () {
			unloadTemplates();
			if (!isCoreWithEmbeddedDocumentsManager()) {
				clearTemplatesStyles();
				yield loadCurrentDocumentTemplates();
				return;
			}
			yield loadCurrentDocumentTemplates();
		}));
		if (isCoreWithEmbeddedDocumentsManager()) {
			_elementor_editor_embedded_documents_manager.embeddedDocumentsManager.onDocumentLoad((_docId, data) => {
				loadTemplatesFromDocument(data);
			});
			return;
		}
		_elementor_editor_styles_repository.stylesRepository.register(templatesStylesProvider);
		(0, _elementor_editor.injectIntoLogic)({
			id: "templates-styles-extended",
			component: RenderTemplateStyles
		});
	}
	//#endregion
	exports.init = init;
	exports.isCoreHandlingTemplateStyles = isCoreHandlingTemplateStyles;
	exports.useLoadedTemplates = useLoadedTemplates;
})(this.elementorV2.editorTemplatesExtended = this.elementorV2.editorTemplatesExtended || {}, elementorV2.editor, elementorV2.editorEmbeddedDocumentsManager, elementorV2.editorStylesRepository, elementorV2.editorV1Adapters, elementorV2.store, elementorV2.utils, elementorV2.editorDocuments, elementorV2.editorGlobalClasses, elementorV2.coreAdapterUtils, React);

window.elementorV2.editorTemplatesExtended?.init?.();
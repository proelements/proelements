/*! pro-elements - v4.3.0 - 22-09-2026 */
(function() {
	//#region \0rolldown/runtime.js
	var __defProp = Object.defineProperty;
	var __exportAll = (all, no_symbols) => {
		let target = {};
		for (var name in all) __defProp(target, name, {
			get: all[name],
			enumerable: true
		});
		if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
		return target;
	};
	//#endregion
	//#region modules/atomic-form/assets/js/editor/utils/regenerate-cssid.js
	var LABEL_WIDGET_TYPE = "e-form-label";
	var NON_FIELD_FORM_WIDGETS = /* @__PURE__ */ new Set([
		"e-form",
		LABEL_WIDGET_TYPE,
		"e-form-submit-button"
	]);
	function getAtomicFormFieldTypes() {
		var _window$elementor$con;
		var _window$elementor;
		return Object.keys((_window$elementor$con = (_window$elementor = window.elementor) === null || _window$elementor === void 0 || (_window$elementor = _window$elementor.config) === null || _window$elementor === void 0 ? void 0 : _window$elementor.widgets) !== null && _window$elementor$con !== void 0 ? _window$elementor$con : {}).filter((type) => type.startsWith("e-form") && !NON_FIELD_FORM_WIDGETS.has(type));
	}
	function getElementChildren(model) {
		var _model$get$models;
		var _model$get;
		return [model, ...((_model$get$models = model === null || model === void 0 || (_model$get = model.get("elements")) === null || _model$get === void 0 ? void 0 : _model$get.models) !== null && _model$get$models !== void 0 ? _model$get$models : []).flatMap(getElementChildren)];
	}
	function isAtomicFormInput(model) {
		return getAtomicFormFieldTypes().includes(model.get("widgetType"));
	}
	function isLabel(model) {
		return LABEL_WIDGET_TYPE === model.get("widgetType");
	}
	function getSettingsJson(model) {
		var _model$get$toJSON;
		var _model$get2;
		var _model$get2$toJSON;
		const container = window.elementor.getContainer(model.get("id"));
		if (container) {
			var _container$settings$t;
			var _container$settings;
			var _container$settings$t2;
			return (_container$settings$t = (_container$settings = container.settings) === null || _container$settings === void 0 || (_container$settings$t2 = _container$settings.toJSON) === null || _container$settings$t2 === void 0 ? void 0 : _container$settings$t2.call(_container$settings)) !== null && _container$settings$t !== void 0 ? _container$settings$t : {};
		}
		return (_model$get$toJSON = (_model$get2 = model.get("settings")) === null || _model$get2 === void 0 || (_model$get2$toJSON = _model$get2.toJSON) === null || _model$get2$toJSON === void 0 ? void 0 : _model$get2$toJSON.call(_model$get2)) !== null && _model$get$toJSON !== void 0 ? _model$get$toJSON : {};
	}
	function updateSettings(model, settings) {
		var _model$get3;
		const container = window.elementor.getContainer(model.get("id"));
		if (container) {
			$e.internal("document/elements/set-settings", {
				container,
				settings
			});
			return;
		}
		(_model$get3 = model.get("settings")) === null || _model$get3 === void 0 || _model$get3.set(settings);
	}
	function regenerateInputCssId(model) {
		var _getSettingsJson$_css;
		const oldCssId = (_getSettingsJson$_css = getSettingsJson(model)._cssid) === null || _getSettingsJson$_css === void 0 ? void 0 : _getSettingsJson$_css.value;
		if (!oldCssId) return null;
		const newCssId = `${model.get("widgetType")}-${elementorCommon.helpers.getUniqueId()}`;
		updateSettings(model, { _cssid: {
			$$type: "string",
			value: newCssId
		} });
		return {
			oldCssId,
			newCssId
		};
	}
	function relinkLabel(model, idMap) {
		var _getSettingsJson$inpu;
		const currentInputId = (_getSettingsJson$inpu = getSettingsJson(model)["input-id"]) === null || _getSettingsJson$inpu === void 0 ? void 0 : _getSettingsJson$inpu.value;
		if (!currentInputId || !idMap.has(currentInputId)) return;
		updateSettings(model, { "input-id": {
			$$type: "string",
			value: idMap.get(currentInputId)
		} });
	}
	function regenerateCssIds(container, { recursive = true } = {}) {
		const models = recursive ? getElementChildren(container.model) : [container.model];
		const idMap = /* @__PURE__ */ new Map();
		models.filter(isAtomicFormInput).forEach((model) => {
			const result = regenerateInputCssId(model);
			if (result) idMap.set(result.oldCssId, result.newCssId);
		});
		if (idMap.size) models.filter(isLabel).forEach((model) => relinkLabel(model, idMap));
	}
	//#endregion
	//#region modules/atomic-form/assets/js/editor/hooks/data/regenerate-cssid/create-element.js
	var CreateElement = class extends $e.modules.hookData.After {
		getCommand() {
			return "document/elements/create";
		}
		getId() {
			return "regenerate-cssid--document/elements/create";
		}
		apply(args, result) {
			(Array.isArray(result) ? result : [result]).filter(Boolean).forEach((container) => regenerateCssIds(container, { recursive: false }));
		}
	};
	//#endregion
	//#region modules/atomic-form/assets/js/editor/hooks/data/regenerate-cssid/duplicate-element.js
	var DuplicateElement = class extends $e.modules.hookData.After {
		getCommand() {
			return "document/elements/duplicate";
		}
		getId() {
			return "regenerate-cssid--document/elements/duplicate";
		}
		apply(args, result) {
			(Array.isArray(result) ? result : [result]).filter(Boolean).forEach(regenerateCssIds);
		}
	};
	//#endregion
	//#region modules/atomic-form/assets/js/editor/hooks/data/regenerate-cssid/paste-element.js
	var PasteElement = class extends $e.modules.hookData.After {
		getCommand() {
			return "document/elements/paste";
		}
		getId() {
			return "regenerate-cssid--document/elements/paste";
		}
		apply(args, result) {
			(Array.isArray(result) ? result : [result]).filter(Boolean).forEach(regenerateCssIds);
		}
	};
	//#endregion
	//#region modules/atomic-form/assets/js/editor/hooks/data/regenerate-cssid/import-element.js
	var ImportElement = class extends $e.modules.hookData.After {
		getCommand() {
			return "document/elements/import";
		}
		getId() {
			return "regenerate-cssid--document/elements/import";
		}
		apply(args, result) {
			(Array.isArray(result) ? result : [result]).filter(Boolean).forEach(regenerateCssIds);
		}
	};
	//#endregion
	//#region modules/atomic-form/assets/js/editor/hooks/index.js
	var hooks_exports = /* @__PURE__ */ __exportAll({
		CreateElement: () => CreateElement,
		DuplicateElement: () => DuplicateElement,
		ImportElement: () => ImportElement,
		PasteElement: () => PasteElement
	});
	//#endregion
	//#region modules/atomic-form/assets/js/editor/component.js
	var Component = class extends $e.modules.ComponentBase {
		getNamespace() {
			return "document/atomic-form";
		}
		defaultHooks() {
			return this.importHooks(hooks_exports);
		}
	};
	//#endregion
	//#region modules/atomic-form/assets/js/editor/module.js
	var Module = class extends elementorModules.editor.utils.Module {
		onInit() {
			$e.components.register(new Component());
		}
	};
	new Module();
	//#endregion
})();

//# sourceMappingURL=atomic-form-editor.js.map
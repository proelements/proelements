/*! pro-elements - v4.3.0 - 22-09-2026 */
(function(_wordpress_i18n) {
	//#endregion
	//#region assets/dev/js/preview/utils/document-handle.js
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
	var EDIT_HANDLE_CLASS_NAME = "elementor-document-handle";
	var EDIT_MODE_CLASS_NAME = "elementor-edit-mode";
	var EDIT_CONTEXT = "edit";
	var SAVE_HANDLE_CLASS_NAME = "elementor-document-save-back-handle";
	function addDocumentHandle({ element, id, title = (0, _wordpress_i18n.__)("Template", "elementor-pro") }, context = EDIT_CONTEXT, onCloseDocument = null, selector = null) {
		if ("edit" === context) {
			if (!id || !element) throw Error("`id` and `element` are required.");
			if (isCurrentlyEditing(element) || hasHandle(element)) return;
		}
		const handleElement = createHandleElement({
			title,
			onClick: () => onDocumentClick(id, context, onCloseDocument, selector)
		}, context, element);
		element.prepend(handleElement);
		if ("edit" === context) element.dataset.editableElementorDocument = id;
	}
	function isCurrentlyEditing(element) {
		return element.classList.contains(EDIT_MODE_CLASS_NAME);
	}
	function hasHandle(element) {
		return !!element.querySelector(`:scope > .${EDIT_HANDLE_CLASS_NAME}`);
	}
	function createHandleElement({ title, onClick }, context, element = null) {
		const handleTitle = ["header", "footer"].includes(element == null ? void 0 : element.dataset.elementorType) ? "%s" : (0, _wordpress_i18n.__)("Edit %s", "elementor-pro");
		const innerElement = createElement({
			tag: "div",
			classNames: [`${EDIT_HANDLE_CLASS_NAME}__inner`],
			children: [createElement({
				tag: "i",
				classNames: [getHandleIcon(context)]
			}), createElement({
				tag: "div",
				classNames: [`${"edit" === context ? EDIT_HANDLE_CLASS_NAME : SAVE_HANDLE_CLASS_NAME}__title`],
				children: [document.createTextNode("edit" === context ? handleTitle.replace("%s", title) : (0, _wordpress_i18n.__)("Save %s", "elementor-pro").replace("%s", title))]
			})]
		});
		const classNames = [EDIT_HANDLE_CLASS_NAME];
		if ("edit" !== context) classNames.push(SAVE_HANDLE_CLASS_NAME);
		const containerElement = createElement({
			tag: "div",
			classNames,
			children: [innerElement]
		});
		containerElement.addEventListener("click", onClick);
		return containerElement;
	}
	function getHandleIcon(context) {
		let icon = "eicon-edit";
		if ("save" === context) icon = elementorFrontend.config.is_rtl ? "eicon-arrow-right" : "eicon-arrow-left";
		return icon;
	}
	function createElement({ tag, classNames = [], children = [] }) {
		const element = document.createElement(tag);
		element.classList.add(...classNames);
		children.forEach((child) => element.appendChild(child));
		return element;
	}
	function onDocumentClick(id, context, onCloseDocument = null, selector = null) {
		return __async(this, null, function* () {
			if ("edit" === context) {
				window.top.$e.internal("panel/state-loading");
				yield window.top.$e.run("editor/documents/switch", {
					id: parseInt(id),
					onClose: onCloseDocument,
					selector
				});
				window.top.$e.internal("panel/state-ready");
			} else {
				elementorCommon.api.internal("panel/state-loading");
				elementorCommon.api.run("editor/documents/switch", {
					id: elementor.config.initial_document.id,
					mode: "save",
					shouldScroll: false,
					selector
				}).finally(() => elementorCommon.api.internal("panel/state-ready"));
			}
		});
	}
	//#endregion
	//#region assets/dev/js/preview/preview.js
	var Preview = class extends elementorModules.ViewModule {
		constructor() {
			super();
			elementorFrontend.on("components:init", () => this.onFrontendComponentsInit());
		}
		addDocumentClass() {
			const document = elementor.documents.getCurrent();
			if (!document || !document.$element) return;
			document.$element.parents("[data-elementor-id]").addClass("e-embedded-document-active");
		}
		removeDocumentClass() {
			Object.values(elementorFrontend.documentsManager.documents).forEach((document) => {
				document.$element.get(0).classList.remove("e-embedded-document-active");
			});
		}
		createDocumentsHandles() {
			Object.values(elementorFrontend.documentsManager.documents).forEach((document) => {
				const element = document.$element.get(0), { elementorTitle: title, customEditHandle: hasCustomEditHandle } = element.dataset;
				if (hasCustomEditHandle) return;
				const id = document.getSettings("id");
				addDocumentHandle({
					element,
					title,
					id
				}, EDIT_CONTEXT, null, ".elementor-" + id);
			});
		}
		onFrontendComponentsInit() {
			this.addDocumentClass();
			this.createDocumentsHandles();
			elementor.on("document:loaded", () => {
				this.addDocumentClass();
				this.createDocumentsHandles();
			});
			elementor.on("document:unloaded", () => {
				this.removeDocumentClass();
			});
		}
	};
	window.elementorProPreview = new Preview();
	//#endregion
})(wp.i18n);

//# sourceMappingURL=preview.js.map
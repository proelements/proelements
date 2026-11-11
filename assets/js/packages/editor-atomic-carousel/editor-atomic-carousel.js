/*! pro-elements - v4.4.0 - 09-11-2026 */
this.elementorV2 = this.elementorV2 || {};
(function(exports, _elementor_editor_editing_panel, react, _elementor_editor_controls, _elementor_editor_elements, _elementor_ui, _wordpress_i18n) {
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
	react = __toESM(react);
	//#region packages/packages/pro/editor-atomic-carousel/src/components/slides-control/get-element-by-type.ts
	var getElementByType = (elementId, type) => {
		var _currentElement$child;
		var _currentElement$child2;
		var _currentElement$child3;
		const currentElement = (0, _elementor_editor_elements.getContainer)(elementId);
		if (!currentElement) return null;
		if (currentElement.model.get("elType") === type) return currentElement;
		return (_currentElement$child = (_currentElement$child2 = currentElement.children) === null || _currentElement$child2 === void 0 || (_currentElement$child3 = _currentElement$child2.findRecursive) === null || _currentElement$child3 === void 0 ? void 0 : _currentElement$child3.call(_currentElement$child2, (child) => child.model.get("elType") === type)) !== null && _currentElement$child !== void 0 ? _currentElement$child : null;
	};
	//#endregion
	//#region packages/packages/pro/editor-atomic-carousel/src/components/slides-control/use-actions.ts
	var VIEWPORT_ELEMENT_TYPE = "e-carousel-viewport";
	var CONTAINER_ELEMENT_TYPE = "e-carousel-container";
	var SLIDE_ELEMENT_TYPE = "e-carousel-slide";
	var getSlideTitle = (position) => (0, _wordpress_i18n.sprintf)((0, _wordpress_i18n.__)("Slide %d", "elementor-pro"), position);
	var TRAILING_NUMBER = /(\d+)\s*$/;
	var getNextSlideNumber = (existingTitles) => {
		const taken = new Set(existingTitles.filter((title) => Boolean(title)));
		let next = existingTitles.reduce((max, title) => {
			var _title$match;
			const [, trailingNumber] = (_title$match = title === null || title === void 0 ? void 0 : title.match(TRAILING_NUMBER)) !== null && _title$match !== void 0 ? _title$match : [];
			const parsed = trailingNumber ? Number(trailingNumber) : 0;
			return Number.isFinite(parsed) && parsed > max ? parsed : max;
		}, 0) + 1;
		while (taken.has(getSlideTitle(next))) next += 1;
		return next;
	};
	var buildSlideModel = (position) => ({
		elType: SLIDE_ELEMENT_TYPE,
		id: (0, _elementor_editor_elements.generateElementId)(),
		editor_settings: {
			title: getSlideTitle(position),
			initial_position: position
		},
		elements: []
	});
	var useActions = () => {
		const addItem = ({ containerId, existingTitles, items }) => {
			const container = (0, _elementor_editor_elements.getContainer)(containerId);
			if (!container) throw new Error("Carousel slide container not found");
			const titles = [...existingTitles];
			items.forEach(({ index }) => {
				const position = getNextSlideNumber(titles);
				(0, _elementor_editor_elements.createElements)({
					title: (0, _wordpress_i18n.__)("Carousel", "elementor-pro"),
					elements: [{
						container,
						model: buildSlideModel(position),
						options: { at: index }
					}]
				});
				titles.push(getSlideTitle(position));
			});
		};
		const removeItem = ({ items }) => {
			(0, _elementor_editor_elements.removeElements)({
				title: (0, _wordpress_i18n.__)("Carousel", "elementor-pro"),
				elementIds: items.map(({ item }) => item.id)
			});
		};
		const duplicateItem = ({ items }) => {
			(0, _elementor_editor_elements.duplicateElements)({
				title: (0, _wordpress_i18n.__)("Duplicate Slide", "elementor-pro"),
				elementIds: items.map(({ item }) => item.id)
			});
		};
		const moveItem = ({ containerId, movedElementId, toIndex }) => {
			const container = (0, _elementor_editor_elements.getContainer)(containerId);
			const movedElement = (0, _elementor_editor_elements.getContainer)(movedElementId);
			if (!container || !movedElement) throw new Error("Carousel slide or container not found");
			(0, _elementor_editor_elements.moveElements)({
				title: (0, _wordpress_i18n.__)("Reorder Slides", "elementor-pro"),
				moves: [{
					element: movedElement,
					targetContainer: container,
					options: { at: toIndex }
				}]
			});
		};
		return {
			addItem,
			removeItem,
			duplicateItem,
			moveItem
		};
	};
	//#endregion
	//#region packages/packages/pro/editor-atomic-carousel/src/components/slides-control/slides-control.tsx
	var SlidesControl = ({ label }) => {
		var _children$SLIDE_ELEME;
		const { element } = (0, _elementor_editor_editing_panel.useElement)();
		const { addItem, duplicateItem, moveItem, removeItem } = useActions();
		const viewport = getElementByType(element.id, VIEWPORT_ELEMENT_TYPE);
		const container = viewport ? getElementByType(viewport.id, CONTAINER_ELEMENT_TYPE) : null;
		const children = (0, _elementor_editor_elements.useElementChildren)(element.id, { [CONTAINER_ELEMENT_TYPE]: SLIDE_ELEMENT_TYPE });
		const slideElements = container ? (_children$SLIDE_ELEME = children["e-carousel-slide"]) !== null && _children$SLIDE_ELEME !== void 0 ? _children$SLIDE_ELEME : [] : [];
		const repeaterValues = slideElements.map((slide, index) => {
			var _slide$editorSettings;
			return {
				id: slide.id,
				title: (_slide$editorSettings = slide.editorSettings) === null || _slide$editorSettings === void 0 ? void 0 : _slide$editorSettings.title,
				index
			};
		});
		const setValue = (_newValues, _options, meta) => {
			var _meta$action;
			var _meta$action2;
			var _meta$action3;
			var _meta$action4;
			if (!(container === null || container === void 0 ? void 0 : container.id)) return;
			if ((meta === null || meta === void 0 || (_meta$action = meta.action) === null || _meta$action === void 0 ? void 0 : _meta$action.type) === "add") return addItem({
				containerId: container.id,
				existingTitles: repeaterValues.map(({ title }) => title),
				items: meta.action.payload
			});
			if ((meta === null || meta === void 0 || (_meta$action2 = meta.action) === null || _meta$action2 === void 0 ? void 0 : _meta$action2.type) === "remove") return removeItem({ items: meta.action.payload });
			if ((meta === null || meta === void 0 || (_meta$action3 = meta.action) === null || _meta$action3 === void 0 ? void 0 : _meta$action3.type) === "duplicate") return duplicateItem({ items: meta.action.payload });
			if ((meta === null || meta === void 0 || (_meta$action4 = meta.action) === null || _meta$action4 === void 0 ? void 0 : _meta$action4.type) === "reorder") {
				const { from, to } = meta.action.payload;
				const movedElement = slideElements[from];
				if (!movedElement) return;
				return moveItem({
					containerId: container.id,
					movedElementId: movedElement.id,
					toIndex: to
				});
			}
		};
		return /* @__PURE__ */ react.createElement(_elementor_editor_controls.Repeater, {
			showToggle: false,
			values: repeaterValues,
			setValues: setValue,
			showRemove: repeaterValues.length > 1,
			label,
			adornment: () => null,
			itemSettings: {
				getId: ({ item }) => item.id,
				initialValues: {
					id: "",
					title: (0, _wordpress_i18n.__)("Slide", "elementor-pro"),
					index: 0
				},
				Label: ItemLabel,
				Content: ItemContent,
				Icon: () => null
			}
		});
	};
	var ItemLabel = ({ value }) => /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
		sx: { minHeight: 20 },
		direction: "row",
		alignItems: "center",
		gap: 1.5
	}, /* @__PURE__ */ react.createElement("span", null, value === null || value === void 0 ? void 0 : value.title));
	var ItemContent = ({ value }) => {
		if (!value.id) return null;
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			p: 2,
			gap: 1.5
		}, /* @__PURE__ */ react.createElement(ItemNameControl, { elementId: value.id }));
	};
	var ItemNameControl = ({ elementId }) => {
		var _editorSettings$title;
		const editorSettings = (0, _elementor_editor_elements.useElementEditorSettings)(elementId);
		const slideTitle = (_editorSettings$title = editorSettings === null || editorSettings === void 0 ? void 0 : editorSettings.title) !== null && _editorSettings$title !== void 0 ? _editorSettings$title : "";
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, { gap: 1 }, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ControlFormLabel, null, (0, _wordpress_i18n.__)("Name", "elementor-pro")), /* @__PURE__ */ react.createElement(_elementor_ui.TextField, {
			size: "tiny",
			value: slideTitle,
			onChange: ({ target }) => {
				(0, _elementor_editor_elements.updateElementEditorSettings)({
					elementId,
					settings: { title: target.value }
				});
			}
		}));
	};
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
	//#region packages/packages/pro/editor-atomic-carousel/src/init.ts
	var SLIDES_CONTROL_TYPE = "slides";
	function init() {
		return _init.apply(this, arguments);
	}
	function _init() {
		_init = _asyncToGenerator(function* () {
			_elementor_editor_editing_panel.controlsRegistry.register(SLIDES_CONTROL_TYPE, SlidesControl, "full");
		});
		return _init.apply(this, arguments);
	}
	//#endregion
	exports.init = init;
})(this.elementorV2.editorAtomicCarousel = this.elementorV2.editorAtomicCarousel || {}, elementorV2.editorEditingPanel, React, elementorV2.editorControls, elementorV2.editorElements, elementorV2.ui, wp.i18n);

window.elementorV2.editorAtomicCarousel?.init?.();
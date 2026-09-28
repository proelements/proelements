/*! pro-elements - v4.3.0 - 22-09-2026 */
this.elementorV2 = this.elementorV2 || {};
(function(exports, _elementor_core_adapter_utils, _elementor_editor, _elementor_editor_canvas, _elementor_editor_editing_panel, _elementor_license_api, _elementor_editor_v1_adapters, _elementor_editor_elements, react, _elementor_editor_controls, _elementor_icons, _elementor_ui, _wordpress_i18n, _elementor_events, _elementor_editor_props, react_dom, _elementor_editor_panels, _elementor_session, _elementor_schema, _elementor_editor_canvas_extended, _elementor_editor_documents, _elementor_http_client) {
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
	react_dom = __toESM(react_dom);
	//#region packages/packages/pro/editor-collection-loop/src/constants.ts
	var COLLECTION_LOOP_TYPE = "e-collection-loop";
	var LAYOUT_TYPE = "e-collection-loop-layout";
	var ITEM_TYPE = "e-collection-loop-item";
	var LOOP_CONTEXT_KEY = "collection-loop";
	var COLLECTION_LOOP_FEATURE_NAME = "atomic-loop";
	//#endregion
	//#region packages/packages/pro/editor-collection-loop/src/legacy/loop-static-items.ts
	var STATIC_ITEM_ATTR = "data-loop-static";
	var LOOP_ITEM_TITLE_ATTR = "data-loop-item-title";
	var LOOP_ITEM_EMPTY_MIN_HEIGHT = "120px";
	var LOOP_ITEM_EMPTY_BORDER = "1px dashed var(--e-a-color-primary)";
	var EDIT_MODE_MIN_HEIGHT = LOOP_ITEM_EMPTY_MIN_HEIGHT;
	var STATIC_ITEM_DESCENDANT_STYLE_ID = "e-collection-loop-static-item-descendants";
	var STATIC_ITEM_DESCENDANT_STYLE = `[${STATIC_ITEM_ATTR}] * { pointer-events: none; }`;
	function appendStaticItems(view, fullHtml, items) {
		const el = view.el;
		if (!el) return;
		ensureStaticItemDescendantStyle(el.ownerDocument);
		removeStaticItems(el);
		extractStaticItemsFromHtml(fullHtml).forEach((item, index) => {
			var _items$index$title;
			var _items$index;
			var _items$index2;
			const title = (_items$index$title = items === null || items === void 0 || (_items$index = items[index]) === null || _items$index === void 0 ? void 0 : _items$index.title) !== null && _items$index$title !== void 0 ? _items$index$title : items === null || items === void 0 || (_items$index2 = items[index]) === null || _items$index2 === void 0 ? void 0 : _items$index2.id;
			if (title) item.setAttribute(LOOP_ITEM_TITLE_ATTR, String(title));
			markAsStatic(item);
			el.appendChild(item);
		});
		hideEditableItems(view);
	}
	function applyEditModeToView(view, activeItemId) {
		const el = view.el;
		if (!el) return;
		hideEditableItems(view);
		const activeBackboneEl = findEditableItemEl(view, activeItemId);
		if (!activeBackboneEl) return;
		const [firstStaticItem] = getStaticItems(el);
		firstStaticItem === null || firstStaticItem === void 0 || firstStaticItem.replaceWith(activeBackboneEl);
		clearStaticStyles(activeBackboneEl);
		activeBackboneEl.style.minHeight = EDIT_MODE_MIN_HEIGHT;
	}
	function resolveFirstStaticLoopItemElement(itemId) {
		var _getContainer$view$el;
		var _getContainer;
		var _backboneEl$ownerDocu;
		const backboneEl = (_getContainer$view$el = (_getContainer = (0, _elementor_editor_elements.getContainer)(itemId)) === null || _getContainer === void 0 || (_getContainer = _getContainer.view) === null || _getContainer === void 0 ? void 0 : _getContainer.el) !== null && _getContainer$view$el !== void 0 ? _getContainer$view$el : null;
		return queryFirstRenderedItemEl((_backboneEl$ownerDocu = backboneEl === null || backboneEl === void 0 ? void 0 : backboneEl.ownerDocument) !== null && _backboneEl$ownerDocu !== void 0 ? _backboneEl$ownerDocu : document, itemId, `[${STATIC_ITEM_ATTR}]`);
	}
	function resolveVisibleLoopItemElement(activeItemId) {
		var _getContainer$view$el2;
		var _getContainer2;
		var _backboneEl$dataset$i;
		var _backboneEl$ownerDocu2;
		const backboneEl = (_getContainer$view$el2 = (_getContainer2 = (0, _elementor_editor_elements.getContainer)(activeItemId)) === null || _getContainer2 === void 0 || (_getContainer2 = _getContainer2.view) === null || _getContainer2 === void 0 ? void 0 : _getContainer2.el) !== null && _getContainer$view$el2 !== void 0 ? _getContainer$view$el2 : null;
		if (backboneEl && isElementRendered(backboneEl)) return backboneEl;
		const elementId = (_backboneEl$dataset$i = backboneEl === null || backboneEl === void 0 ? void 0 : backboneEl.dataset.id) !== null && _backboneEl$dataset$i !== void 0 ? _backboneEl$dataset$i : activeItemId;
		return queryFirstRenderedItemEl((_backboneEl$ownerDocu2 = backboneEl === null || backboneEl === void 0 ? void 0 : backboneEl.ownerDocument) !== null && _backboneEl$ownerDocu2 !== void 0 ? _backboneEl$ownerDocu2 : document, elementId, `:not([${STATIC_ITEM_ATTR}])`);
	}
	function queryFirstRenderedItemEl(doc, itemId, attrFilter) {
		const escapedId = CSS.escape(itemId);
		for (const el of doc.querySelectorAll(`[data-id="${escapedId}"][data-element_type="${ITEM_TYPE}"]${attrFilter}`)) if (isElementRendered(el)) return el;
		return null;
	}
	function isElementRendered(el) {
		if (el.style.display === "none") return false;
		const rect = el.getBoundingClientRect();
		return rect.width > 0 && rect.height > 0;
	}
	function exitEditModeOnView(view) {
		const el = view.el;
		if (!el) return;
		getEditableItemEls(view).forEach((item) => {
			el.appendChild(item);
			item.style.display = "none";
			item.style.minHeight = "";
		});
	}
	function getEditableItemEls(view) {
		var _view$children;
		const elements = [];
		(_view$children = view.children) === null || _view$children === void 0 || _view$children.each((child) => {
			if (child.el) elements.push(child.el);
		});
		return elements;
	}
	function findEditableItemEl(view, id) {
		var _view$children2;
		let match = null;
		(_view$children2 = view.children) === null || _view$children2 === void 0 || _view$children2.each((child) => {
			var _child$model;
			if (!match && ((_child$model = child.model) === null || _child$model === void 0 ? void 0 : _child$model.get("id")) === id && child.el) match = child.el;
		});
		return match;
	}
	function hideEditableItems(view) {
		getEditableItemEls(view).forEach((item) => {
			item.style.display = "none";
		});
	}
	function getStaticItems(el) {
		return Array.from(el.querySelectorAll(`:scope > [${STATIC_ITEM_ATTR}]`));
	}
	function removeStaticItems(el) {
		getStaticItems(el).forEach((node) => node.remove());
	}
	function extractStaticItemsFromHtml(fullHtml) {
		const layoutEl = new DOMParser().parseFromString(fullHtml, "text/html").querySelector(`[data-element_type="${LAYOUT_TYPE}"]`);
		if (!layoutEl) return [];
		return Array.from(layoutEl.querySelectorAll(`:scope > [data-element_type="${ITEM_TYPE}"]`));
	}
	function ensureStaticItemDescendantStyle(doc) {
		var _doc$head;
		if (!doc || doc.getElementById(STATIC_ITEM_DESCENDANT_STYLE_ID)) return;
		const style = doc.createElement("style");
		style.id = STATIC_ITEM_DESCENDANT_STYLE_ID;
		style.textContent = STATIC_ITEM_DESCENDANT_STYLE;
		(_doc$head = doc.head) === null || _doc$head === void 0 || _doc$head.appendChild(style);
	}
	function markAsStatic(el) {
		el.setAttribute(STATIC_ITEM_ATTR, "");
		el.setAttribute("x-ignore", "true");
		const title = el.getAttribute(LOOP_ITEM_TITLE_ATTR);
		const isEmpty = el.children.length === 0;
		if (title && isEmpty) appendItemTitleTag(el, title);
	}
	function appendItemTitleTag(el, title) {
		el.style.position = "relative";
		el.style.minHeight = LOOP_ITEM_EMPTY_MIN_HEIGHT;
		el.style.border = LOOP_ITEM_EMPTY_BORDER;
		const tag = el.ownerDocument.createElement("span");
		Object.assign(tag.style, {
			position: "absolute",
			top: "0",
			left: "0",
			background: "var(--e-a-bg-primary)",
			color: "var(--e-a-color-primary-bold-dark)",
			borderRadius: "0 0 var(--e-a-border-radius) 0",
			padding: "2px 8px",
			fontSize: "11px",
			fontFamily: "var(--e-a-font-family)",
			lineHeight: "1.5",
			pointerEvents: "none",
			zIndex: "1",
			whiteSpace: "nowrap",
			maxWidth: "100%",
			overflow: "hidden",
			textOverflow: "ellipsis"
		});
		tag.textContent = title;
		el.appendChild(tag);
	}
	function clearStaticStyles(el) {
		el.style.display = "";
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
	//#region packages/packages/pro/editor-collection-loop/src/collection-loop-license-block.ts
	var MOVE_COMMAND$1 = "document/elements/move";
	function initCollectionLoopLicenseBlock() {
		return _initCollectionLoopLicenseBlock.apply(this, arguments);
	}
	function _initCollectionLoopLicenseBlock() {
		_initCollectionLoopLicenseBlock = _asyncToGenerator(function* () {
			if (!(yield (0, _elementor_license_api.fetchLicenseStatus)().catch(() => false))) return;
			(0, _elementor_editor_v1_adapters.registerDataHook)("dependency", "document/elements/create", (args, options) => {
				var _options$commandsCurr;
				var _args$model;
				if (options === null || options === void 0 || (_options$commandsCurr = options.commandsCurrentTrace) === null || _options$commandsCurr === void 0 ? void 0 : _options$commandsCurr.includes(MOVE_COMMAND$1)) return true;
				return ((_args$model = args.model) === null || _args$model === void 0 ? void 0 : _args$model.elType) !== COLLECTION_LOOP_TYPE;
			});
		});
		return _initCollectionLoopLicenseBlock.apply(this, arguments);
	}
	//#endregion
	//#region packages/packages/pro/editor-collection-loop/src/legacy/element-ancestors.ts
	function walkElementAncestors(startElementId, onElement) {
		let current = (0, _elementor_editor_elements.getContainer)(startElementId);
		while (current) {
			if (onElement(current)) return;
			current = current.parent;
		}
	}
	function findAncestorElementId(startElementId, matches) {
		let matchedId;
		walkElementAncestors(startElementId, (element) => {
			if (matches(element)) {
				matchedId = element.id;
				return true;
			}
			return false;
		});
		return matchedId;
	}
	function findAncestorInIds(startElementId, ancestorIds) {
		return findAncestorElementId(startElementId, (element) => ancestorIds.has(element.id));
	}
	function isElementDescendantOf(elementId, ancestorId) {
		if (elementId === ancestorId) return true;
		return findAncestorInIds(elementId, /* @__PURE__ */ new Set([ancestorId])) !== void 0;
	}
	//#endregion
	//#region packages/packages/pro/editor-collection-loop/src/legacy/tracking.ts
	var trackLoopEnterEditMode = (loopId, itemId) => (0, _elementor_events.trackEvent)({
		eventName: "loop_enter_edit_mode",
		loop_id: loopId,
		item_id: itemId
	});
	var trackLoopExitEditMode = (loopId, itemId) => (0, _elementor_events.trackEvent)({
		eventName: "loop_exit_edit_mode",
		loop_id: loopId,
		item_id: itemId
	});
	var trackLoopAddPagination = (state) => (0, _elementor_events.trackEvent)({
		eventName: "loop_add_pagination",
		state
	});
	var trackLoopAlternateItemAdded = (loopId, position) => (0, _elementor_events.trackEvent)({
		eventName: "loop_alternate_item_added",
		loop_id: loopId,
		position
	});
	var trackLoopAlternateItemRemoved = (loopId, count) => (0, _elementor_events.trackEvent)({
		eventName: "loop_alternate_item_removed",
		loop_id: loopId,
		count
	});
	var trackLoopEmptyStatePreviewToggle = (state) => (0, _elementor_events.trackEvent)({
		eventName: "loop_empty_state_preview_toggle",
		state
	});
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
	//#region packages/packages/pro/editor-collection-loop/src/legacy/loop-edit-mode/state.ts
	var LOOP_EDIT_MODE_CHANGED_EVENT = "elementor/loop-edit-mode/changed";
	var LOOP_EDIT_MODE_REQUEST_ENTER_EVENT = "elementor/loop-edit-mode/request-enter";
	function requestLoopEditMode(detail) {
		window.dispatchEvent(new CustomEvent(LOOP_EDIT_MODE_REQUEST_ENTER_EVENT, { detail }));
	}
	var loopEditModeChangedEvent = (0, _elementor_editor_v1_adapters.windowEvent)(LOOP_EDIT_MODE_CHANGED_EVENT);
	var LoopEditModeStore = class {
		constructor() {
			_defineProperty(this, "state", null);
		}
		getState() {
			return this.state;
		}
		setState(next) {
			if (next === null) {
				if (this.state === null) return;
				this.state = null;
				this.notify();
				return;
			}
			if (!next.activeItemId) return;
			if (this.isSameState(next)) return;
			this.state = {
				loopId: next.loopId,
				activeItemId: next.activeItemId
			};
			this.notify();
		}
		setLoopEditingId(loopId, activeItemId) {
			var _this$state;
			if (loopId === null) {
				this.setState(null);
				return;
			}
			const resolvedActiveItemId = activeItemId !== null && activeItemId !== void 0 ? activeItemId : (_this$state = this.state) === null || _this$state === void 0 ? void 0 : _this$state.activeItemId;
			if (!resolvedActiveItemId) return;
			this.setState({
				loopId,
				activeItemId: resolvedActiveItemId
			});
		}
		subscribe(callback) {
			return (0, _elementor_editor_v1_adapters.__privateListenTo)(loopEditModeChangedEvent, callback);
		}
		isSameState(next) {
			var _this$state2;
			var _this$state3;
			return ((_this$state2 = this.state) === null || _this$state2 === void 0 ? void 0 : _this$state2.loopId) === next.loopId && ((_this$state3 = this.state) === null || _this$state3 === void 0 ? void 0 : _this$state3.activeItemId) === next.activeItemId;
		}
		notify() {
			window.dispatchEvent(new CustomEvent(LOOP_EDIT_MODE_CHANGED_EVENT));
		}
	};
	var loopEditMode = new LoopEditModeStore();
	var getLoopEditState = () => loopEditMode.getState();
	var setLoopEditingId = (loopId, activeItemId) => loopEditMode.setLoopEditingId(loopId, activeItemId);
	var subscribeLoopEditState = (callback) => loopEditMode.subscribe(callback);
	function useLoopEditState() {
		return (0, _elementor_editor_v1_adapters.__privateUseListenTo)(loopEditModeChangedEvent, getLoopEditState);
	}
	//#endregion
	//#region packages/packages/pro/editor-collection-loop/src/legacy/loop-edit-mode/enter-loop-item-edit-mode.ts
	function enterLoopItemEditMode(activeItemId) {
		const loopId = findAncestorElementId(activeItemId, (ancestor) => {
			var _ancestor$model;
			return ((_ancestor$model = ancestor.model) === null || _ancestor$model === void 0 ? void 0 : _ancestor$model.get("elType")) === COLLECTION_LOOP_TYPE;
		});
		if (!loopId) return;
		(0, _elementor_editor_elements.selectElement)(activeItemId);
		requestLoopEditMode({
			loopId,
			activeItemId
		});
		trackLoopEnterEditMode(loopId, activeItemId);
	}
	//#endregion
	//#region packages/packages/pro/editor-collection-loop/src/components/alternating-items-control/constants.ts
	var ALTERNATE_APPLY_ONCE_PROP = "alternate_apply_once";
	var ALTERNATE_REPEAT_EVERY_PROP = "alternate_repeat_every";
	var ALTERNATE_STATIC_POSITION_PROP = "alternate_static_position";
	//#endregion
	//#region packages/packages/pro/editor-collection-loop/src/components/alternating-items-control/actions.ts
	var getLayoutContainer = (loopId) => {
		var _loopContainer$childr;
		var _loopContainer$childr2;
		const loopContainer = (0, _elementor_editor_elements.getContainer)(loopId);
		return (_loopContainer$childr = loopContainer === null || loopContainer === void 0 || (_loopContainer$childr2 = loopContainer.children) === null || _loopContainer$childr2 === void 0 ? void 0 : _loopContainer$childr2.find((child) => child.model.get("elType") === "e-collection-loop-layout")) !== null && _loopContainer$childr !== void 0 ? _loopContainer$childr : null;
	};
	var addAlternateItem = (loopId, { position }) => {
		const layout = getLayoutContainer(loopId);
		if (!layout) throw new Error("Loop layout not found");
		(0, _elementor_editor_elements.createElements)({
			title: (0, _wordpress_i18n.__)("Add Alternating Item", "elementor-pro"),
			elements: [{
				container: layout,
				model: {
					elType: ITEM_TYPE,
					editor_settings: { title: (0, _wordpress_i18n.__)("Alternating Item", "elementor-pro") }
				},
				options: { at: position + 1 }
			}]
		});
		trackLoopAlternateItemAdded(loopId, position);
	};
	var removeAlternateItem = (loopId, { items }) => {
		(0, _elementor_editor_elements.removeElements)({
			title: (0, _wordpress_i18n.__)("Remove Alternating Item", "elementor-pro"),
			elementIds: items.map(({ item }) => item.id)
		});
		trackLoopAlternateItemRemoved(loopId, items.length);
	};
	//#endregion
	//#region packages/packages/pro/editor-collection-loop/src/components/alternating-items-control/use-alternate-item-element-context.ts
	function useAlternateItemElementContext(itemId) {
		return (0, _elementor_editor_v1_adapters.__privateUseListenTo)([(0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/settings"), (0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/set-settings")], () => {
			const elementType = (0, _elementor_editor_elements.getElementType)(ITEM_TYPE);
			if (!elementType) return {
				element: null,
				elementType: null,
				settings: null
			};
			const settings = (0, _elementor_editor_elements.getElementSettings)(itemId, Object.keys(elementType.propsSchema));
			return {
				element: {
					id: itemId,
					type: ITEM_TYPE
				},
				elementType,
				settings
			};
		}, [itemId]);
	}
	//#endregion
	//#region packages/packages/pro/editor-collection-loop/src/components/alternating-items-control/alternating-items-control.tsx
	var FIRST_ALTERNATE_CHILD_INDEX = 1;
	var AlternatingItemsControl = ({ label }) => {
		const { element } = (0, _elementor_editor_editing_panel.useElement)();
		const { [ITEM_TYPE]: loopItems } = (0, _elementor_editor_elements.useElementChildren)(element.id, { [LAYOUT_TYPE]: ITEM_TYPE });
		const alternateItems = loopItems.slice(FIRST_ALTERNATE_CHILD_INDEX);
		const isMaxReached = alternateItems.length >= 5;
		const addButtonInfotipContent = isMaxReached ? /* @__PURE__ */ react.createElement(_elementor_ui.Alert, {
			color: "secondary",
			icon: /* @__PURE__ */ react.createElement(_elementor_icons.InfoCircleFilledIcon, null),
			size: "small"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.AlertTitle, null, (0, _wordpress_i18n.__)("Alternating items", "elementor-pro")), /* @__PURE__ */ react.createElement(_elementor_ui.Box, { component: "span" }, (0, _wordpress_i18n.__)("You've reached the limit of 5 alternating items for this loop. Please remove an alternating item before creating a new one.", "elementor-pro"))) : void 0;
		const repeaterValues = alternateItems.map((item) => {
			var _item$editorSettings;
			return {
				id: item.id,
				title: (_item$editorSettings = item.editorSettings) === null || _item$editorSettings === void 0 ? void 0 : _item$editorSettings.title
			};
		});
		const setValue = (_newValues, _options, meta) => {
			var _meta$action;
			var _meta$action2;
			if ((meta === null || meta === void 0 || (_meta$action = meta.action) === null || _meta$action === void 0 ? void 0 : _meta$action.type) === "add") return addAlternateItem(element.id, { position: alternateItems.length });
			if ((meta === null || meta === void 0 || (_meta$action2 = meta.action) === null || _meta$action2 === void 0 ? void 0 : _meta$action2.type) === "remove") return removeAlternateItem(element.id, { items: meta.action.payload });
		};
		return /* @__PURE__ */ react.createElement(_elementor_editor_controls.Repeater, {
			showRemove: true,
			label,
			isSortable: false,
			showToggle: false,
			showDuplicate: false,
			values: repeaterValues,
			setValues: setValue,
			disableAddItemButton: isMaxReached,
			addButtonInfotipContent,
			adornment: NoAdornment,
			itemSettings: {
				initialValues: {
					id: "",
					title: (0, _wordpress_i18n.__)("Alternating Item", "elementor-pro")
				},
				Label: ItemLabel,
				Content: ItemContent,
				Icon: () => null
			}
		});
	};
	var NoAdornment = () => null;
	var ItemLabel = ({ value }) => {
		return /* @__PURE__ */ react.createElement("span", null, value === null || value === void 0 ? void 0 : value.title);
	};
	var ItemContent = ({ value }) => {
		if (!value.id) return null;
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			p: 2,
			gap: 1.5
		}, /* @__PURE__ */ react.createElement(ItemNameControl, { elementId: value.id }), /* @__PURE__ */ react.createElement(ItemAlternateSettingsControl, { elementId: value.id }), /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			variant: "outlined",
			color: "secondary",
			size: "small",
			startIcon: /* @__PURE__ */ react.createElement(_elementor_icons.PencilIcon, { fontSize: "small" }),
			onClick: () => enterLoopItemEditMode(value.id)
		}, (0, _wordpress_i18n.__)("Edit Alternating Item", "elementor-pro")));
	};
	var ItemNameControl = ({ elementId }) => {
		var _editorSettings$title;
		const editorSettings = (0, _elementor_editor_elements.useElementEditorSettings)(elementId);
		const label = (_editorSettings$title = editorSettings === null || editorSettings === void 0 ? void 0 : editorSettings.title) !== null && _editorSettings$title !== void 0 ? _editorSettings$title : "";
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, { gap: 1 }, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ControlFormLabel, null, (0, _wordpress_i18n.__)("Name", "elementor-pro")), /* @__PURE__ */ react.createElement(_elementor_ui.TextField, {
			size: "tiny",
			value: label,
			onChange: ({ target }) => {
				(0, _elementor_editor_elements.updateElementEditorSettings)({
					elementId,
					settings: { title: target.value }
				});
			}
		}));
	};
	var ItemAlternateSettingsControl = ({ elementId }) => {
		const { element, elementType, settings } = useAlternateItemElementContext(elementId);
		if (!element || !elementType) return null;
		return /* @__PURE__ */ react.createElement(_elementor_editor_editing_panel.ElementProvider, {
			element,
			elementType,
			settings
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, { gap: 1.5 }, /* @__PURE__ */ react.createElement(SettingsRow, {
			bind: ALTERNATE_APPLY_ONCE_PROP,
			label: (0, _wordpress_i18n.__)("Apply once", "elementor-pro")
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.SwitchControl, null)), /* @__PURE__ */ react.createElement(SettingsRow, {
			bind: ALTERNATE_REPEAT_EVERY_PROP,
			label: (0, _wordpress_i18n.__)("Repeat every", "elementor-pro")
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.NumberControl, {
			min: 0,
			shouldForceInt: true
		})), /* @__PURE__ */ react.createElement(SettingsRow, {
			bind: ALTERNATE_STATIC_POSITION_PROP,
			label: (0, _wordpress_i18n.__)("Static position", "elementor-pro")
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.SwitchControl, null))));
	};
	var SettingsRow = ({ bind, label, children }) => /* @__PURE__ */ react.createElement(_elementor_editor_editing_panel.SettingsField, {
		bind,
		propDisplayName: label
	}, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
		direction: "row",
		alignItems: "center",
		justifyContent: "space-between",
		gap: 2
	}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ControlFormLabel, null, label), /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: { width: 80 } }, children)));
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
	//#region packages/packages/pro/editor-collection-loop/src/legacy/loop-render-context.ts
	var PAGINATION_TYPE = "e-pagination";
	var EMPTY_STATE_PREVIEW_EDITOR_KEY = "empty_state_preview";
	var EMPTY_STATE_SETTING_KEY = "empty_state";
	function getPaginationEnabledFromSettings(settings) {
		var _booleanPropTypeUtil$;
		const pagination = settings.pagination;
		return (_booleanPropTypeUtil$ = _elementor_editor_props.booleanPropTypeUtil.extract(pagination)) !== null && _booleanPropTypeUtil$ !== void 0 ? _booleanPropTypeUtil$ : false;
	}
	function buildLoopEditorRenderContext(model) {
		var _model$get$toJSON;
		var _model$get;
		var _model$get$toJSON2;
		return { pagination_enabled: getPaginationEnabledFromSettings((_model$get$toJSON = (_model$get = model.get("settings")) === null || _model$get === void 0 || (_model$get$toJSON2 = _model$get.toJSON) === null || _model$get$toJSON2 === void 0 ? void 0 : _model$get$toJSON2.call(_model$get)) !== null && _model$get$toJSON !== void 0 ? _model$get$toJSON : {}) };
	}
	function getEmptyStatePreviewFromModel(model) {
		var _model$get$toJSON3;
		var _model$get2;
		var _model$get2$toJSON;
		const editorSettings = model.get("editor_settings");
		if (!((editorSettings === null || editorSettings === void 0 ? void 0 : editorSettings["empty_state_preview"]) === true)) return false;
		const settings = (_model$get$toJSON3 = (_model$get2 = model.get("settings")) === null || _model$get2 === void 0 || (_model$get2$toJSON = _model$get2.toJSON) === null || _model$get2$toJSON === void 0 ? void 0 : _model$get2$toJSON.call(_model$get2)) !== null && _model$get$toJSON3 !== void 0 ? _model$get$toJSON3 : {};
		return _elementor_editor_props.booleanPropTypeUtil.extract(settings[EMPTY_STATE_SETTING_KEY]) === true;
	}
	function mergeLoopRenderContext(parentContext, loopContext) {
		return _objectSpread2(_objectSpread2({}, parentContext), {}, { [LOOP_CONTEXT_KEY]: loopContext });
	}
	//#endregion
	//#region packages/packages/pro/editor-collection-loop/src/components/empty-state-preview-indicator.tsx
	var PREVIEW_LABEL = "Preview empty state";
	var HIDE_PREVIEW_LABEL = "Hide empty state preview";
	var EmptyStatePreviewIndicator = () => {
		const { bind } = (0, _elementor_editor_controls.useBoundProp)();
		if (bind !== "empty_state") return null;
		return /* @__PURE__ */ react.createElement(EmptyStatePreviewToggle, null);
	};
	var EmptyStatePreviewToggle = () => {
		const { element, elementType } = (0, _elementor_editor_editing_panel.useElement)();
		const editorSettings = (0, _elementor_editor_elements.useElementEditorSettings)(element.id);
		const { settings } = (0, _elementor_editor_elements.useSelectedElementSettings)();
		if (elementType.key !== "e-collection-loop") return null;
		if (!_elementor_editor_props.booleanPropTypeUtil.extract(settings === null || settings === void 0 ? void 0 : settings["empty_state"])) return null;
		const isPreviewing = !!(editorSettings === null || editorSettings === void 0 ? void 0 : editorSettings[EMPTY_STATE_PREVIEW_EDITOR_KEY]);
		const togglePreview = () => {
			const nextState = isPreviewing ? "off" : "on";
			(0, _elementor_editor_elements.updateElementEditorSettings)({
				elementId: element.id,
				settings: { [EMPTY_STATE_PREVIEW_EDITOR_KEY]: !isPreviewing }
			});
			trackLoopEmptyStatePreviewToggle(nextState);
		};
		const Icon = isPreviewing ? _elementor_icons.EyeOffIcon : _elementor_icons.EyeIcon;
		const tooltipTitle = isPreviewing ? HIDE_PREVIEW_LABEL : PREVIEW_LABEL;
		return /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, {
			placement: "top",
			title: tooltipTitle
		}, /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
			size: "tiny",
			onClick: togglePreview,
			"aria-label": PREVIEW_LABEL,
			"aria-pressed": isPreviewing
		}, /* @__PURE__ */ react.createElement(Icon, { fontSize: "tiny" })));
	};
	//#endregion
	//#region packages/packages/pro/editor-collection-loop/src/legacy/loop-edit-mode/exit-loop-edit-mode.ts
	function exitLoopEditMode() {
		const editState = getLoopEditState();
		if (!editState) return;
		const { loopId, activeItemId } = editState;
		setLoopEditingId(null);
		(0, _elementor_editor_elements.selectElement)(loopId);
		trackLoopExitEditMode(loopId, activeItemId);
	}
	//#endregion
	//#region packages/packages/pro/editor-collection-loop/src/components/loop-edit-overlay/loop-edit-overlay.tsx
	function LoopEditOverlay() {
		var _editState$activeItem;
		const editState = useLoopEditState();
		const canvasDocument = (0, _elementor_editor_canvas.useCanvasDocument)();
		const activeElement = useActiveItemElement((_editState$activeItem = editState === null || editState === void 0 ? void 0 : editState.activeItemId) !== null && _editState$activeItem !== void 0 ? _editState$activeItem : null);
		const onExit = () => exitLoopEditMode();
		(0, _elementor_editor_canvas.useEscapeOnCanvas)(editState ? canvasDocument : null, onExit);
		(0, react.useEffect)(() => {
			return (0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.windowEvent)(LOOP_EDIT_MODE_REQUEST_ENTER_EVENT), ({ originalEvent }) => {
				const { detail } = originalEvent;
				const { loopId, activeItemId } = detail !== null && detail !== void 0 ? detail : {};
				if (loopId && activeItemId) setLoopEditingId(loopId, activeItemId);
			});
		}, []);
		if (!editState || !activeElement || !(canvasDocument === null || canvasDocument === void 0 ? void 0 : canvasDocument.body)) return null;
		return (0, react_dom.createPortal)(/* @__PURE__ */ react.createElement(_elementor_editor_canvas.SpotlightBackdrop, {
			canvas: canvasDocument,
			element: activeElement,
			onExit,
			ariaLabel: (0, _wordpress_i18n.__)("Exit loop editing mode", "elementor-pro")
		}), canvasDocument.body);
	}
	function useActiveItemElement(activeItemId) {
		const [element, setElement] = (0, react.useState)(null);
		(0, react.useEffect)(() => {
			if (!activeItemId) {
				setElement(null);
				return;
			}
			const updateElement = () => {
				var _getContainer$view$el;
				var _getContainer;
				const visibleElement = resolveVisibleLoopItemElement(activeItemId);
				if (visibleElement) {
					setElement(visibleElement);
					return;
				}
				setElement((_getContainer$view$el = (_getContainer = (0, _elementor_editor_elements.getContainer)(activeItemId)) === null || _getContainer === void 0 || (_getContainer = _getContainer.view) === null || _getContainer === void 0 ? void 0 : _getContainer.el) !== null && _getContainer$view$el !== void 0 ? _getContainer$view$el : null);
			};
			updateElement();
			const unsubscribers = [
				(0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.windowEvent)(LOOP_EDIT_MODE_CHANGED_EVENT), updateElement),
				(0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.windowEvent)(_elementor_editor_elements.ELEMENT_STYLE_CHANGE_EVENT), updateElement),
				(0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.commandEndEvent)("editor/documents/open"), updateElement)
			];
			return () => {
				unsubscribers.forEach((unsubscribe) => unsubscribe());
			};
		}, [activeItemId]);
		return element;
	}
	//#endregion
	//#region packages/packages/pro/editor-collection-loop/src/components/loop-edit-overlay/feature-guarded-loop-edit-overlay.tsx
	function FeatureGuardedLoopEditOverlay() {
		const { data: isFeatureEnabled, isFetched } = (0, _elementor_license_api.useHasFeature)(COLLECTION_LOOP_FEATURE_NAME);
		if (!isFetched || !isFeatureEnabled) return null;
		return /* @__PURE__ */ react.createElement(LoopEditOverlay, null);
	}
	//#endregion
	//#region packages/packages/pro/editor-collection-loop/src/components/loop-item-editing-panel.tsx
	function CollectionLoopItemEditingPanel() {
		const { element, elementType } = (0, _elementor_editor_editing_panel.useElement)();
		const editState = useLoopEditState();
		if ((editState === null || editState === void 0 ? void 0 : editState.activeItemId) === element.id) {
			const panelTitle = (0, _wordpress_i18n.__)("Edit %s", "elementor-pro").replace("%s", elementType.title);
			return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_editor_panels.PanelHeader, null, /* @__PURE__ */ react.createElement(_elementor_editor_panels.PanelHeaderTitle, null, panelTitle), /* @__PURE__ */ react.createElement(_elementor_icons.AtomIcon, {
				fontSize: "small",
				sx: { color: "text.tertiary" }
			})), /* @__PURE__ */ react.createElement(_elementor_editor_panels.PanelBody, null, /* @__PURE__ */ react.createElement(_elementor_editor_editing_panel.EditingPanelTabs, null)));
		}
		return /* @__PURE__ */ react.createElement(CollectionLoopItemEmptyPanel, { elementId: element.id });
	}
	function CollectionLoopItemEmptyPanel({ elementId }) {
		const handleEdit = () => enterLoopItemEditMode(elementId);
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, null, /* @__PURE__ */ react.createElement(_elementor_editor_panels.PanelHeader, null, /* @__PURE__ */ react.createElement(_elementor_editor_panels.PanelHeaderTitle, null, (0, _wordpress_i18n.__)("Loop Item", "elementor-pro"))), /* @__PURE__ */ react.createElement(_elementor_editor_panels.PanelBody, null, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			alignItems: "center",
			justifyContent: "start",
			color: "text.secondary",
			sx: {
				p: 2.5,
				pt: 8,
				pb: 5.5,
				mt: 1
			},
			gap: 1.5
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			align: "center",
			variant: "subtitle2"
		}, (0, _wordpress_i18n.__)("Edit your loop item", "elementor-pro")), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			align: "center",
			variant: "caption",
			maxWidth: "220px"
		}, (0, _wordpress_i18n.__)("Double-click the loop item on your canvas or click the button below to enter Edit mode.", "elementor-pro")), /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			variant: "outlined",
			color: "secondary",
			size: "small",
			sx: { mt: 1 },
			onClick: handleEdit
		}, /* @__PURE__ */ react.createElement(_elementor_icons.PencilIcon, { fontSize: "small" }), (0, _wordpress_i18n.__)("Edit loop item", "elementor-pro")))));
	}
	//#endregion
	//#region packages/packages/pro/editor-collection-loop/src/components/loop-layout-info-alert.tsx
	var DISMISSED_KEY = "elementor/collection-loop-layout-info-dismissed";
	var ELEMENT_STATE_PREFIX = "elementor/editor-state";
	var TAB_KEY = "tab";
	var STYLE_TAB_VALUE = "style";
	function LoopLayoutInfoAlert() {
		const [dismissed, setDismissed] = react.useState(() => localStorage.getItem(DISMISSED_KEY) === "true");
		const { element } = (0, _elementor_editor_editing_panel.useElement)();
		if (element.type !== "e-collection-loop") return null;
		if (dismissed) return null;
		const handleNavigateToLayout = (event) => {
			event.preventDefault();
			const layoutId = findLoopLayoutChildId(element.id);
			if (!layoutId) return;
			(0, _elementor_session.setSessionStorageItem)(`${ELEMENT_STATE_PREFIX}/${layoutId}/${TAB_KEY}`, STYLE_TAB_VALUE);
			(0, _elementor_session.setSessionStorageItem)(`${ELEMENT_STATE_PREFIX}/${layoutId}/${(0, _wordpress_i18n.__)("Layout", "elementor-pro")}`, true);
			(0, _elementor_editor_elements.selectElement)(layoutId);
		};
		return /* @__PURE__ */ react.createElement(_elementor_ui.Alert, {
			severity: "info",
			icon: false,
			onClose: () => {
				localStorage.setItem(DISMISSED_KEY, "true");
				setDismissed(true);
			},
			sx: { my: 2 }
		}, /* @__PURE__ */ react.createElement(_elementor_ui.AlertTitle, null, (0, _wordpress_i18n.__)("Loop Layout", "elementor-pro")), (0, _wordpress_i18n.__)("To control the layout of the items use the Style Panel of the \"Loop Layout\".", "elementor-pro"), " ", /* @__PURE__ */ react.createElement(_elementor_ui.Link, {
			href: "#",
			underline: "hover",
			onClick: handleNavigateToLayout
		}, (0, _wordpress_i18n.__)("Layout Style Panel", "elementor-pro")));
	}
	function findLoopLayoutChildId(loopListId) {
		var _container$children;
		var _layoutChild$id;
		const container = (0, _elementor_editor_elements.getContainer)(loopListId);
		const layoutChild = container === null || container === void 0 || (_container$children = container.children) === null || _container$children === void 0 ? void 0 : _container$children.find((child) => child.model.get("elType") === LAYOUT_TYPE);
		return (_layoutChild$id = layoutChild === null || layoutChild === void 0 ? void 0 : layoutChild.id) !== null && _layoutChild$id !== void 0 ? _layoutChild$id : null;
	}
	//#endregion
	//#region packages/packages/pro/editor-collection-loop/src/prop-types/loop-query-prop-type.ts
	var unknownChildrenSchema = _elementor_schema.z.any().nullable();
	var loopQueryPropTypeUtil = (0, _elementor_editor_props.createPropUtils)("loop-query", _elementor_schema.z.strictObject({
		template_type: unknownChildrenSchema,
		source: unknownChildrenSchema,
		selection: unknownChildrenSchema,
		include_filters: unknownChildrenSchema,
		exclude_filters: unknownChildrenSchema,
		posts_per_page: unknownChildrenSchema,
		select_date: unknownChildrenSchema,
		date_before: unknownChildrenSchema,
		date_after: unknownChildrenSchema,
		orderby: unknownChildrenSchema,
		order: unknownChildrenSchema,
		ignore_sticky_posts: unknownChildrenSchema,
		query_id: unknownChildrenSchema
	}).catchall(unknownChildrenSchema));
	//#endregion
	//#region packages/packages/pro/editor-collection-loop/src/components/loop-query-control.tsx
	var LoopQueryControl = (0, _elementor_editor_controls.createControl)(({ items }) => {
		var _propType$shape;
		const propContext = (0, _elementor_editor_controls.useBoundProp)(loopQueryPropTypeUtil);
		const { propType } = propContext;
		const shape = (_propType$shape = propType === null || propType === void 0 ? void 0 : propType.shape) !== null && _propType$shape !== void 0 ? _propType$shape : {};
		const { elementType, settings: elementSettings } = (0, _elementor_editor_editing_panel.useElement)();
		const elementSettingsWithDefaults = (0, _elementor_editor_editing_panel.getElementSettingsWithDefaults)(elementType.propsSchema, elementSettings);
		const scopedIsDisabled = (innerPropType) => !(0, _elementor_editor_props.isDependencyMet)(innerPropType === null || innerPropType === void 0 ? void 0 : innerPropType.dependencies, elementSettingsWithDefaults).isMet;
		return /* @__PURE__ */ react.createElement(_elementor_editor_controls.PropProvider, _objectSpread2(_objectSpread2({}, propContext), {}, { isDisabled: scopedIsDisabled }), /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			gap: 2,
			sx: { width: "100%" }
		}, items.map((item) => /* @__PURE__ */ react.createElement(LoopQueryChildControl, {
			key: item.bind,
			item,
			shape,
			elementSettingsWithDefaults
		}))));
	});
	var LoopQueryChildControl = ({ item, shape, elementSettingsWithDefaults }) => {
		var _item$meta;
		var _item$props;
		var _item$meta2;
		const propType = shape[item.bind];
		const depCheck = (0, _elementor_editor_props.isDependencyMet)(propType === null || propType === void 0 ? void 0 : propType.dependencies, elementSettingsWithDefaults);
		const failingTerm = !depCheck.isMet ? depCheck.failingDependencies[0] : void 0;
		if (!!failingTerm && !(0, _elementor_editor_props.isDependency)(failingTerm) && (failingTerm === null || failingTerm === void 0 ? void 0 : failingTerm.effect) === "hide") return null;
		const controlType = item.type;
		if (!_elementor_editor_editing_panel.controlsRegistry.get(controlType)) return null;
		const layout = ((_item$meta = item.meta) === null || _item$meta === void 0 ? void 0 : _item$meta.layout) || _elementor_editor_editing_panel.controlsRegistry.getLayout(controlType);
		const controlProps = _objectSpread2({}, (_item$props = item.props) !== null && _item$props !== void 0 ? _item$props : {});
		if (layout === "custom" && item.label) controlProps.label = item.label;
		return /* @__PURE__ */ react.createElement(_elementor_editor_controls.PropKeyProvider, { bind: item.bind }, ((_item$meta2 = item.meta) === null || _item$meta2 === void 0 ? void 0 : _item$meta2.topDivider) && /* @__PURE__ */ react.createElement(_elementor_ui.Divider, null), /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			"data-loop-query-control": item.bind,
			sx: { display: "contents" }
		}, /* @__PURE__ */ react.createElement(_elementor_editor_editing_panel.ControlTypeContainer, { layout }, item.label && layout !== "custom" ? /* @__PURE__ */ react.createElement(_elementor_editor_editing_panel.ControlLabel, null, item.label) : null, /* @__PURE__ */ react.createElement(_elementor_editor_editing_panel.BaseControl, {
			type: controlType,
			props: controlProps
		}))));
	};
	//#endregion
	//#region scripts/vite/shims/react-dom-client.js
	var createRoot = react_dom.createRoot;
	//#endregion
	//#region packages/packages/pro/editor-collection-loop/src/legacy/loop-item-context-menu.ts
	var CONTEXT_MENU_FILTER = `elements/${ITEM_TYPE}/contextMenuGroups`;
	var EDIT_ACTION_NAME = "edit";
	var GENERAL_GROUP_NAME = "general";
	function initLoopItemContextMenu() {
		(0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.v1ReadyEvent)(), registerContextMenuFilter);
	}
	function registerContextMenuFilter() {
		window.elementor.hooks.addFilter(CONTEXT_MENU_FILTER, (groups, view) => {
			return groups.map((group) => group.name === GENERAL_GROUP_NAME ? replaceEditAction(group, view) : group);
		});
	}
	function replaceEditAction(group, view) {
		return _objectSpread2(_objectSpread2({}, group), {}, { actions: group.actions.map((action) => action.name === EDIT_ACTION_NAME ? _objectSpread2(_objectSpread2({}, action), {}, { callback: () => editItemFromView(view) }) : action) });
	}
	function getLoopItemIdFromView(view) {
		var _view$getContainer;
		return (_view$getContainer = view.getContainer()) === null || _view$getContainer === void 0 ? void 0 : _view$getContainer.id;
	}
	function editItemFromView(view) {
		const itemId = getLoopItemIdFromView(view);
		if (!itemId) return;
		enterLoopItemEditMode(itemId);
	}
	//#endregion
	//#region packages/packages/pro/editor-collection-loop/src/legacy/loop-item-empty-view/import-into-container.ts
	var IMPORT_COMMAND = "document/elements/import";
	var LIBRARY_CLOSE_COMMAND = "library/close";
	var pendingTargetContainer = null;
	function setPendingImportTargetContainer(container) {
		pendingTargetContainer = container;
	}
	function consumePendingImportTargetContainer() {
		const container = pendingTargetContainer;
		pendingTargetContainer = null;
		return container;
	}
	function initImportIntoContainerHook() {
		(0, _elementor_editor_v1_adapters.registerDataHook)("dependency", IMPORT_COMMAND, (args) => {
			if (args.container) {
				setPendingImportTargetContainer(null);
				return true;
			}
			const target = consumePendingImportTargetContainer();
			if (target) args.container = target;
			return true;
		});
		(0, _elementor_editor_v1_adapters.registerDataHook)("after", LIBRARY_CLOSE_COMMAND, () => {
			setPendingImportTargetContainer(null);
		});
	}
	//#endregion
	//#region packages/packages/pro/editor-collection-loop/src/legacy/loop-item-empty-view/loop-item-empty-cta.tsx
	var ADD_SECTION_LAYOUT_STYLE = {
		all: "unset",
		alignItems: "center",
		display: "flex",
		inset: 0,
		justifyContent: "center",
		margin: 0,
		maxWidth: "none",
		position: "absolute"
	};
	function LoopItemEmptyCta({ onAddWidget, onOpenLibrary }) {
		return /* @__PURE__ */ react.createElement("div", {
			className: "elementor-first-add",
			style: {
				border: LOOP_ITEM_EMPTY_BORDER,
				minHeight: LOOP_ITEM_EMPTY_MIN_HEIGHT
			}
		}, /* @__PURE__ */ react.createElement("div", {
			className: "elementor-add-section",
			style: ADD_SECTION_LAYOUT_STYLE
		}, /* @__PURE__ */ react.createElement("div", { className: "elementor-add-new-section" }, /* @__PURE__ */ react.createElement(ActionButton, {
			className: "elementor-add-section-button",
			icon: "eicon-plus",
			label: (0, _wordpress_i18n.__)("Add widget", "elementor-pro"),
			onClick: onAddWidget
		}), /* @__PURE__ */ react.createElement(ActionButton, {
			className: "elementor-add-template-button",
			icon: "eicon-folder",
			label: (0, _wordpress_i18n.__)("Add template", "elementor-pro"),
			onClick: onOpenLibrary
		}), /* @__PURE__ */ react.createElement("div", { className: "elementor-add-section-drag-title" }, (0, _wordpress_i18n.__)("Drag widget here", "elementor-pro")))));
	}
	function ActionButton({ className, icon, label, onClick }) {
		return /* @__PURE__ */ react.createElement("button", {
			type: "button",
			className: `elementor-add-section-area-button ${className}`,
			"aria-label": label,
			title: label,
			onClick
		}, /* @__PURE__ */ react.createElement("i", {
			className: icon,
			"aria-hidden": "true"
		}));
	}
	//#endregion
	//#region packages/packages/pro/editor-collection-loop/src/legacy/loop-item-empty-view/create-loop-item-empty-view.tsx
	var EMPTY_VIEW_CLASS = "elementor-empty-view";
	function createLoopItemEmptyView() {
		return window.Marionette.ItemView.extend({
			template: "<div></div>",
			className: EMPTY_VIEW_CLASS,
			onBeforeRender() {
				if (this._reactRoot) {
					this._reactRoot.unmount();
					this._reactRoot = null;
				}
			},
			onRender() {
				this.$el.addClass(EMPTY_VIEW_CLASS);
				this._reactRoot = createRoot(this.el);
				this._reactRoot.render(/* @__PURE__ */ react.createElement(LoopItemEmptyCta, {
					onAddWidget: () => handleAddWidget(resolveLoopItemId(this)),
					onOpenLibrary: () => handleOpenLibrary(resolveLoopItemId(this))
				}));
			},
			onDestroy() {
				var _this$_reactRoot;
				(_this$_reactRoot = this._reactRoot) === null || _this$_reactRoot === void 0 || _this$_reactRoot.unmount();
				this._reactRoot = null;
			}
		});
	}
	function resolveLoopItemId(view) {
		var _getLoopItemIdFromVie;
		const parent = view._parent;
		if (!parent) return null;
		return (_getLoopItemIdFromVie = getLoopItemIdFromView(parent)) !== null && _getLoopItemIdFromVie !== void 0 ? _getLoopItemIdFromVie : null;
	}
	function handleAddWidget(loopItemId) {
		if (!loopItemId) return;
		enterLoopItemEditMode(loopItemId);
		window.$e.route("panel/elements/categories");
	}
	function handleOpenLibrary(loopItemId) {
		if (!loopItemId) return;
		const targetContainer = (0, _elementor_editor_elements.getContainer)(loopItemId);
		if (!targetContainer) return;
		enterLoopItemEditMode(loopItemId);
		setPendingImportTargetContainer(targetContainer);
		window.$e.run("library/open", { toDefault: true });
	}
	//#endregion
	//#region packages/packages/pro/editor-collection-loop/src/legacy/utils.ts
	function getMemoizedView(viewCreator) {
		let cachedView = null;
		if (!cachedView) cachedView = viewCreator();
		return cachedView;
	}
	//#endregion
	//#region packages/packages/pro/editor-collection-loop/src/legacy/collection-loop-item-type.ts
	function initCollectionLoopItemType() {
		(0, _elementor_editor_canvas.registerElementType)(ITEM_TYPE, function(options) {
			return createCollectionLoopItemType(options);
		});
	}
	function createCollectionLoopItemType(options) {
		const legacyWindow = window;
		const { type } = options;
		return class extends legacyWindow.elementor.modules.elements.types.Base {
			getType() {
				return type;
			}
			getView() {
				return getMemoizedView(() => buildLoopItemView(options));
			}
			getModel() {
				return legacyWindow.elementor.modules.elements.models.AtomicElementBase;
			}
		};
	}
	function buildLoopItemView(options) {
		return (0, _elementor_editor_canvas.createNestedTemplatedElementView)(options).extend({
			emptyView: createLoopItemEmptyView(),
			getDomElement() {
				const id = this.model.get("id");
				const jq = window.jQuery;
				const editModeEl = resolveVisibleLoopItemElement(id);
				if (editModeEl) return jq(editModeEl);
				const staticEl = resolveFirstStaticLoopItemElement(id);
				if (staticEl) return jq(staticEl);
				return this.$el;
			}
		});
	}
	//#endregion
	//#region packages/packages/pro/editor-collection-loop/src/legacy/loop-loading-overlay.ts
	var KEYFRAMES_STYLE_ID = "e-collection-loop-loading-keyframes";
	var KEYFRAMES_NAME = "eCollectionLoopLoadingPulse";
	var LOADING_CLASS = "e-collection-loop-loading";
	var STYLES_CSS = `
@keyframes ${KEYFRAMES_NAME} {
	0%, 100% { opacity: 1; }
	50% { opacity: 0.6; }
}

.${LOADING_CLASS} {
	animation: ${KEYFRAMES_NAME} 1s infinite alternate;
}
`;
	function setLayoutLoading(view, isLoading) {
		const el = view.el;
		if (!el) return;
		if (isLoading) ensureStyles(el.ownerDocument);
		el.classList.toggle(LOADING_CLASS, isLoading);
	}
	function ensureStyles(doc) {
		var _doc$head;
		if (doc.getElementById(KEYFRAMES_STYLE_ID)) return;
		const style = doc.createElement("style");
		style.id = KEYFRAMES_STYLE_ID;
		style.textContent = STYLES_CSS;
		((_doc$head = doc.head) !== null && _doc$head !== void 0 ? _doc$head : doc.documentElement).appendChild(style);
	}
	//#endregion
	//#region packages/packages/pro/editor-collection-loop/src/legacy/loop-render-cache.ts
	var RENDER_AJAX_ACTION = "render_atomic_element";
	function fetchRenderedLoop(_x) {
		return _fetchRenderedLoop.apply(this, arguments);
	}
	function _fetchRenderedLoop() {
		_fetchRenderedLoop = _asyncToGenerator(function* (parentModel) {
			const data = parentModel.toJSON();
			const requestParams = {
				action: RENDER_AJAX_ACTION,
				unique_id: `${RENDER_AJAX_ACTION}_${data.id}`,
				data: { data }
			};
			_elementor_editor_v1_adapters.ajax.invalidateCache(requestParams);
			try {
				return (yield _elementor_editor_v1_adapters.ajax.load(requestParams)).render;
			} catch (_unused) {
				return null;
			}
		});
		return _fetchRenderedLoop.apply(this, arguments);
	}
	//#endregion
	//#region packages/packages/pro/editor-collection-loop/src/legacy/collection-loop-layout-type.ts
	function initCollectionLoopLayoutType() {
		(0, _elementor_editor_canvas.registerElementType)(LAYOUT_TYPE, (options) => createCollectionLoopLayoutType(options));
	}
	function createCollectionLoopLayoutType(options) {
		const legacyWindow = window;
		const { type } = options;
		return class extends legacyWindow.elementor.modules.elements.types.Base {
			getType() {
				return type;
			}
			getView() {
				return getMemoizedView(() => buildLoopLayoutView(options));
			}
			getModel() {
				return legacyWindow.elementor.modules.elements.models.AtomicElementBase;
			}
		};
	}
	function buildLoopLayoutView(options) {
		const { type, renderer, element } = options;
		const BaseView = (0, _elementor_editor_canvas.createNestedTemplatedElementView)({
			type,
			renderer,
			element
		});
		const baseRenderChildren = BaseView.prototype._renderChildren;
		const baseAttachBuffer = BaseView.prototype.attachBuffer;
		return BaseView.extend({
			_staticRenderAbortController: null,
			_editorSubscriptions: [],
			_lastRenderedHtml: null,
			_wasInEditMode: false,
			_loopId: void 0,
			events() {
				var _BaseView$prototype$e;
				return _objectSpread2(_objectSpread2({}, (_BaseView$prototype$e = BaseView.prototype.events) === null || _BaseView$prototype$e === void 0 ? void 0 : _BaseView$prototype$e.call(this)), {}, {
					click: this.handleClick,
					dblclick: this.handleDblClick
				});
			},
			handleClick(e) {
				const target = e.target;
				if (!(target instanceof Element) || !target.closest(`[data-loop-static]`)) return;
				const loopId = getLoopId(this);
				if (!loopId) return;
				(0, _elementor_editor_elements.selectElement)(loopId);
			},
			handleDblClick(e) {
				e.stopPropagation();
				const activeItemId = getEditableChild(this);
				if (!activeItemId) return;
				enterLoopItemEditMode(activeItemId);
			},
			attachBuffer(collectionView, buffer) {
				baseAttachBuffer.call(this, collectionView, buffer);
				hideEditableItems(this);
			},
			_renderChildren() {
				var _this = this;
				return _asyncToGenerator(function* () {
					const { signal } = _this._createAbortController();
					_this._rehydrateFromLastRender();
					yield baseRenderChildren.call(_this);
					if (signal.aborted) return;
					yield _this._fetchAndAppendStaticItems(signal);
				})();
			},
			onRender() {
				getLoopId(this);
				this._bindEditorSubscriptions();
			},
			onDestroy() {
				var _this$_staticRenderAb;
				(_this$_staticRenderAb = this._staticRenderAbortController) === null || _this$_staticRenderAb === void 0 || _this$_staticRenderAb.abort();
				this._staticRenderAbortController = null;
				this._teardownEditorSubscriptions();
				this._lastRenderedHtml = null;
				setLayoutLoading(this, false);
				if (isLoopBeingEdited(getLoopId(this))) setLoopEditingId(null);
			},
			_bindEditorSubscriptions() {
				this._teardownEditorSubscriptions();
				this._editorSubscriptions = [
					subscribeLoopEditState(() => this._onEditModeChanged()),
					this._listenToCompositionBuilt(),
					(0, _elementor_editor_canvas_extended.subscribeToElementChanges)((elementId) => elementId === getLoopId(this), () => void this._refetchStaticItems())
				];
				this._onEditModeChanged();
			},
			_teardownEditorSubscriptions() {
				this._editorSubscriptions.forEach((unsubscribe) => unsubscribe());
				this._editorSubscriptions = [];
			},
			_listenToCompositionBuilt() {
				return (0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.windowEvent)("elementor/composition/built"), ({ originalEvent }) => {
					const detail = originalEvent === null || originalEvent === void 0 ? void 0 : originalEvent.detail;
					const rootContainers = detail === null || detail === void 0 ? void 0 : detail.rootContainers;
					const loopId = getLoopId(this);
					if (!loopId) return;
					if (!rootContainers || isLoopAffectedByRootContainers(loopId, rootContainers)) this._refetchStaticItems();
				});
			},
			_onEditModeChanged() {
				const loopId = getLoopId(this);
				if (!loopId) return;
				const { shouldBeInEditMode, activeItemId } = resolveLoopEditModeForView(loopId, this);
				if (shouldBeInEditMode && !this._wasInEditMode) {
					var _this$_staticRenderAb2;
					(_this$_staticRenderAb2 = this._staticRenderAbortController) === null || _this$_staticRenderAb2 === void 0 || _this$_staticRenderAb2.abort();
					this._wasInEditMode = true;
					this._enterEditMode(activeItemId);
					return;
				}
				if (!shouldBeInEditMode && this._wasInEditMode) {
					this._wasInEditMode = false;
					exitEditModeOnView(this);
					this._rehydrateFromLastRender();
					this._refetchStaticItems();
				}
			},
			_enterEditMode(activeItemId) {
				if (!activeItemId) return;
				applyEditModeToView(this, activeItemId);
			},
			_rehydrateFromLastRender() {
				var _ref;
				var _this$_lastRenderedHt;
				var _parentView$_loopPrev;
				if (!this.el) return;
				const parentView = this._parent;
				const html = (_ref = (_this$_lastRenderedHt = this._lastRenderedHtml) !== null && _this$_lastRenderedHt !== void 0 ? _this$_lastRenderedHt : parentView === null || parentView === void 0 ? void 0 : parentView._lastRenderedLoopHtml) !== null && _ref !== void 0 ? _ref : null;
				if (!html) return;
				const previewItems = parentView === null || parentView === void 0 || (_parentView$_loopPrev = parentView._loopPreviewContext) === null || _parentView$_loopPrev === void 0 ? void 0 : _parentView$_loopPrev.items;
				appendStaticItems(this, html, previewItems);
			},
			_fetchAndAppendStaticItems(signal) {
				var _this2 = this;
				return _asyncToGenerator(function* () {
					var _parentView$_loopPrev2;
					const collectionLoopModel = getCollectionLoopParentModel(_this2);
					if (!collectionLoopModel) return;
					setLayoutLoading(_this2, true);
					let html = null;
					try {
						html = yield fetchRenderedLoop(collectionLoopModel);
					} finally {
						setLayoutLoading(_this2, false);
					}
					if (signal.aborted || !html) return;
					_this2._lastRenderedHtml = html;
					const parentView = _this2._parent;
					if (parentView) parentView._lastRenderedLoopHtml = html;
					const previewItems = parentView === null || parentView === void 0 || (_parentView$_loopPrev2 = parentView._loopPreviewContext) === null || _parentView$_loopPrev2 === void 0 ? void 0 : _parentView$_loopPrev2.items;
					appendStaticItems(_this2, html, previewItems);
					const activeItemId = getActiveItemIdForLoop(getLoopId(_this2));
					if (activeItemId) _this2._enterEditMode(activeItemId);
				})();
			},
			_refetchStaticItems() {
				var _this3 = this;
				return _asyncToGenerator(function* () {
					if (isLoopBeingEdited(getLoopId(_this3))) return;
					hideEditableItems(_this3);
					yield _this3._fetchAndAppendStaticItems(_this3._createAbortController().signal);
				})();
			},
			_createAbortController() {
				var _this$_staticRenderAb3;
				(_this$_staticRenderAb3 = this._staticRenderAbortController) === null || _this$_staticRenderAb3 === void 0 || _this$_staticRenderAb3.abort();
				this._staticRenderAbortController = new AbortController();
				return this._staticRenderAbortController;
			}
		});
	}
	function getEditableItemIds(view) {
		var _view$collection$mode;
		var _view$collection;
		return ((_view$collection$mode = (_view$collection = view.collection) === null || _view$collection === void 0 ? void 0 : _view$collection.models) !== null && _view$collection$mode !== void 0 ? _view$collection$mode : []).map((model) => model.get("id"));
	}
	function getCollectionLoopParentModel(view) {
		var _view$_parent;
		return (_view$_parent = view._parent) === null || _view$_parent === void 0 ? void 0 : _view$_parent.model;
	}
	function getLoopId(view) {
		var _getCollectionLoopPar;
		const fromParent = (_getCollectionLoopPar = getCollectionLoopParentModel(view)) === null || _getCollectionLoopPar === void 0 ? void 0 : _getCollectionLoopPar.get("id");
		if (fromParent) view._loopId = fromParent;
		return view._loopId;
	}
	function resolveLoopEditModeForView(loopId, layoutView) {
		const editState = getLoopEditState();
		if (!editState) return { shouldBeInEditMode: false };
		if (editState.loopId === loopId) return {
			shouldBeInEditMode: true,
			activeItemId: editState.activeItemId
		};
		const containingEditableItemId = findEditableItemContainingLoop(editState.loopId, layoutView);
		return {
			shouldBeInEditMode: Boolean(containingEditableItemId),
			activeItemId: containingEditableItemId
		};
	}
	function findEditableItemContainingLoop(nestedLoopId, layoutView) {
		const ownedEditableItemIds = new Set(getEditableItemIds(layoutView));
		if (ownedEditableItemIds.size === 0) return;
		return findAncestorInIds(nestedLoopId, ownedEditableItemIds);
	}
	function getEditableChild(view) {
		return getEditableItemIds(view)[0];
	}
	function isLoopBeingEdited(loopId) {
		const editState = getLoopEditState();
		if (!loopId || !editState) return false;
		if (editState.loopId === loopId) return true;
		return Boolean(findAncestorInIds(editState.loopId, /* @__PURE__ */ new Set([loopId])));
	}
	function getActiveItemIdForLoop(loopId) {
		var _editState$activeItem;
		const editState = getLoopEditState();
		if (!loopId || (editState === null || editState === void 0 ? void 0 : editState.loopId) !== loopId) return null;
		return (_editState$activeItem = editState.activeItemId) !== null && _editState$activeItem !== void 0 ? _editState$activeItem : null;
	}
	function isLoopAffectedByRootContainers(loopId, rootContainers) {
		return rootContainers.some((rootId) => isElementDescendantOf(loopId, rootId));
	}
	//#endregion
	//#region packages/packages/pro/editor-collection-loop/src/utils/is-loop-preview-context.ts
	function isLoopPreviewContext(value) {
		return Boolean(value) && Array.isArray(value === null || value === void 0 ? void 0 : value.items);
	}
	//#endregion
	//#region packages/packages/pro/editor-collection-loop/src/legacy/loop-hover-edit-cta.ts
	var LOOP_HOVER_EDIT_CTA_TEST_ID = "loop-hover-edit-cta";
	var LOOP_HOVER_EDIT_OVERLAY_TEST_ID = "loop-hover-edit-overlay";
	var HANDLE_COLOR = "var(--e-a-color-primary)";
	var HANDLE_TEXT_COLOR = "var(--e-p-border-global-invert, #0C0D0E)";
	var OVERLAY_FILL_OPACITY = "0.3";
	function bindHoverCta(view) {
		var _view$el;
		var _view$el2;
		const show = () => showHoverEditCta(view);
		const hide = () => hideHoverEditCta(view);
		const onEditStateChange = () => {
			if (isLoopInEditMode(view)) hide();
		};
		(_view$el = view.el) === null || _view$el === void 0 || _view$el.addEventListener("mouseenter", show);
		(_view$el2 = view.el) === null || _view$el2 === void 0 || _view$el2.addEventListener("mouseleave", hide);
		const unsubscribeEditState = subscribeLoopEditState(onEditStateChange);
		return () => {
			var _view$el3;
			var _view$el4;
			(_view$el3 = view.el) === null || _view$el3 === void 0 || _view$el3.removeEventListener("mouseenter", show);
			(_view$el4 = view.el) === null || _view$el4 === void 0 || _view$el4.removeEventListener("mouseleave", hide);
			unsubscribeEditState();
			hide();
		};
	}
	function showHoverEditCta(view) {
		if (isLoopInEditMode(view)) return;
		const firstStaticItem = getFirstStaticItem(view);
		const firstItemId = getFirstLoopItemId(view);
		if (!firstStaticItem || !firstItemId || getHoverEditOverlay(firstStaticItem)) return;
		setStyles(firstStaticItem, {
			position: "relative",
			overflow: "visible"
		});
		firstStaticItem.appendChild(createHoverEditOverlay(firstItemId));
	}
	function hideHoverEditCta(view) {
		var _getHoverEditOverlay;
		(_getHoverEditOverlay = getHoverEditOverlay(view.el)) === null || _getHoverEditOverlay === void 0 || _getHoverEditOverlay.remove();
	}
	function isLoopInEditMode(view) {
		var _getLoopEditState;
		return ((_getLoopEditState = getLoopEditState()) === null || _getLoopEditState === void 0 ? void 0 : _getLoopEditState.loopId) === view.model.get("id");
	}
	function getFirstStaticItem(view) {
		var _view$el$querySelecto;
		var _view$el5;
		return (_view$el$querySelecto = (_view$el5 = view.el) === null || _view$el5 === void 0 ? void 0 : _view$el5.querySelector(`[data-loop-static]`)) !== null && _view$el$querySelecto !== void 0 ? _view$el$querySelecto : null;
	}
	function getFirstLoopItemId(view) {
		var _view$children;
		var _view$children$findBy;
		return (_view$children = view.children) === null || _view$children === void 0 || (_view$children$findBy = _view$children.findByIndex) === null || _view$children$findBy === void 0 || (_view$children$findBy = _view$children$findBy.call(_view$children, 0)) === null || _view$children$findBy === void 0 || (_view$children$findBy = _view$children$findBy.collection) === null || _view$children$findBy === void 0 || (_view$children$findBy = _view$children$findBy.models) === null || _view$children$findBy === void 0 || (_view$children$findBy = _view$children$findBy[0]) === null || _view$children$findBy === void 0 ? void 0 : _view$children$findBy.get("id");
	}
	function getHoverEditOverlay(root) {
		var _root$querySelector;
		return (_root$querySelector = root === null || root === void 0 ? void 0 : root.querySelector(`[data-testid="loop-hover-edit-overlay"]`)) !== null && _root$querySelector !== void 0 ? _root$querySelector : null;
	}
	function createHoverEditOverlay(itemId) {
		const overlay = createEl("div", {
			position: "absolute",
			inset: "0",
			"z-index": "1",
			"pointer-events": "none",
			overflow: "visible",
			border: `2px solid ${HANDLE_COLOR}`
		});
		overlay.dataset.testid = LOOP_HOVER_EDIT_OVERLAY_TEST_ID;
		overlay.append(createOverlayFill(), createHoverEditCta(itemId));
		return overlay;
	}
	function createOverlayFill() {
		return createEl("div", {
			position: "absolute",
			inset: "0",
			opacity: OVERLAY_FILL_OPACITY,
			"pointer-events": "none",
			"background-color": HANDLE_COLOR
		});
	}
	function createHoverEditCta(itemId) {
		const chip = createEl("button", {
			position: "absolute",
			top: "0",
			left: "50%",
			transform: "translateX(-50%)",
			"z-index": "2",
			display: "flex",
			"align-items": "center",
			gap: "8px",
			"pointer-events": "auto",
			color: HANDLE_TEXT_COLOR,
			border: "none",
			"border-radius": "0 0 3px 3px",
			padding: "8px 16px",
			"font-size": "12px",
			"line-height": "14px",
			"font-family": "var(--e-a-font-family)",
			cursor: "pointer",
			"white-space": "nowrap",
			"background-color": HANDLE_COLOR
		});
		chip.type = "button";
		chip.dataset.testid = LOOP_HOVER_EDIT_CTA_TEST_ID;
		chip.append(createIcon("eicon-edit"), createLabel((0, _wordpress_i18n.__)("Edit Template", "elementor-pro")));
		chip.addEventListener("click", (event) => {
			event.preventDefault();
			event.stopPropagation();
			enterLoopItemEditMode(itemId);
		});
		return chip;
	}
	function createIcon(className) {
		const icon = document.createElement("i");
		icon.className = className;
		icon.setAttribute("aria-hidden", "true");
		return icon;
	}
	function createLabel(text) {
		const label = document.createElement("span");
		label.textContent = text;
		return label;
	}
	function createEl(tag, styles) {
		const el = document.createElement(tag);
		setStyles(el, styles);
		return el;
	}
	function setStyles(el, styles) {
		for (const [prop, value] of Object.entries(styles)) el.style.setProperty(prop, value);
	}
	//#endregion
	//#region packages/packages/pro/editor-collection-loop/src/legacy/collection-loop-type.ts
	function initCollectionLoopType() {
		(0, _elementor_editor_canvas.registerElementType)(COLLECTION_LOOP_TYPE, (options) => createCollectionLoopType(options));
	}
	function createCollectionLoopType(options) {
		const BaseType = (0, _elementor_editor_canvas.createNestedTemplatedElementType)(options);
		return class extends BaseType {
			getView() {
				return getMemoizedView(() => createCollectionLoopView(options));
			}
		};
	}
	function createCollectionLoopView(options) {
		const BaseView = (0, _elementor_editor_canvas.createNestedTemplatedElementView)(options);
		const baseIsDroppingAllowed = BaseView.prototype.isDroppingAllowed;
		const baseInitialize = BaseView.prototype.initialize;
		return BaseView.extend({
			getNamespaceKey() {
				return LOOP_CONTEXT_KEY;
			},
			initialize(...args) {
				baseInitialize === null || baseInitialize === void 0 || baseInitialize.apply(this, args);
				bindEmptyStatePreviewListener(this);
				this._unbindHoverCta = bindHoverCta(this);
			},
			afterSettingsResolve(settings) {
				const query = settings.query;
				this._loopPreviewContext = isLoopPreviewContext(query) ? query : void 0;
				return settings;
			},
			getRenderContext() {
				var _this$_parent;
				var _this$_parent$getRend;
				var _this$_loopPreviewCon;
				return mergeLoopRenderContext((_this$_parent = this._parent) === null || _this$_parent === void 0 || (_this$_parent$getRend = _this$_parent.getRenderContext) === null || _this$_parent$getRend === void 0 ? void 0 : _this$_parent$getRend.call(_this$_parent), _objectSpread2(_objectSpread2({}, buildLoopEditorRenderContext(this.model)), (_this$_loopPreviewCon = this._loopPreviewContext) !== null && _this$_loopPreviewCon !== void 0 ? _this$_loopPreviewCon : {}));
			},
			isDroppingAllowed() {
				var _getLoopEditState;
				const isDroppingAllowed = baseIsDroppingAllowed.call(this);
				const isInEditMode = ((_getLoopEditState = getLoopEditState()) === null || _getLoopEditState === void 0 ? void 0 : _getLoopEditState.activeItemId) === this.model.get("id");
				return isDroppingAllowed && isInEditMode;
			},
			getResolverRenderContext() {
				var _this$_parent2;
				var _this$_parent2$getRes;
				var _this$_loopPreviewCon2;
				var _loopContext$items;
				const parentContext = (_this$_parent2 = this._parent) === null || _this$_parent2 === void 0 || (_this$_parent2$getRes = _this$_parent2.getResolverRenderContext) === null || _this$_parent2$getRes === void 0 ? void 0 : _this$_parent2$getRes.call(_this$_parent2);
				const loopElementId = this.model.get("id");
				const loopContext = _objectSpread2(_objectSpread2({}, buildLoopEditorRenderContext(this.model)), (_this$_loopPreviewCon2 = this._loopPreviewContext) !== null && _this$_loopPreviewCon2 !== void 0 ? _this$_loopPreviewCon2 : {});
				const currentPostId = (_loopContext$items = loopContext.items) === null || _loopContext$items === void 0 || (_loopContext$items = _loopContext$items[0]) === null || _loopContext$items === void 0 ? void 0 : _loopContext$items.id;
				return _objectSpread2(_objectSpread2({}, parentContext), {}, {
					loop_context: loopContext,
					loopElementId,
					forceEmptyPreview: getEmptyStatePreviewFromModel(this.model)
				}, currentPostId !== void 0 ? { currentPostId } : {});
			},
			onDestroy() {
				var _this$_unbindHoverCta;
				var _BaseView$prototype$o;
				(_this$_unbindHoverCta = this._unbindHoverCta) === null || _this$_unbindHoverCta === void 0 || _this$_unbindHoverCta.call(this);
				this._unbindHoverCta = void 0;
				this._loopPreviewContext = void 0;
				(_BaseView$prototype$o = BaseView.prototype.onDestroy) === null || _BaseView$prototype$o === void 0 || _BaseView$prototype$o.call(this);
			}
		});
	}
	function bindEmptyStatePreviewListener(view) {
		const invalidate = () => {
			var _view$invalidateRende;
			(_view$invalidateRende = view.invalidateRenderCache) === null || _view$invalidateRende === void 0 || _view$invalidateRende.call(view);
			view.render();
		};
		view.listenTo(view.model, "change:editor_settings", (_model, next) => {
			var _view$model$previous;
			const previous = (_view$model$previous = view.model.previous("editor_settings")) !== null && _view$model$previous !== void 0 ? _view$model$previous : {};
			const nextSettings = next;
			if (previous["empty_state_preview"] !== (nextSettings === null || nextSettings === void 0 ? void 0 : nextSettings["empty_state_preview"])) invalidate();
		});
		view.listenTo(view.model, `change:settings:${EMPTY_STATE_SETTING_KEY}`, invalidate);
	}
	//#endregion
	//#region packages/packages/pro/editor-collection-loop/src/legacy/pagination-session-storage.ts
	var EDITOR_STATE_PREFIX = "elementor/editor-state";
	var STORED_PAGINATION_SESSION_KEY = "stored-pagination";
	function getStoredPaginationSessionKey(loopId) {
		return `${EDITOR_STATE_PREFIX}/${loopId}/${STORED_PAGINATION_SESSION_KEY}`;
	}
	function getStoredPagination(loopId) {
		return (0, _elementor_session.getSessionStorageItem)(getStoredPaginationSessionKey(loopId));
	}
	function setStoredPagination(loopId, data) {
		(0, _elementor_session.setSessionStorageItem)(getStoredPaginationSessionKey(loopId), data);
	}
	function clearStoredPagination(loopId) {
		(0, _elementor_session.removeSessionStorageItem)(getStoredPaginationSessionKey(loopId));
	}
	//#endregion
	//#region packages/packages/pro/editor-collection-loop/src/legacy/pagination-sync.ts
	function syncAllCollectionLoopsInDocument() {
		const documentContainer = (0, _elementor_editor_elements.getCurrentDocumentContainer)();
		if (!documentContainer) return;
		syncCollectionLoopsInContainers(documentContainer);
	}
	function syncCollectionLoopsInContainers(containers) {
		(Array.isArray(containers) ? containers : [containers]).forEach((root) => {
			(0, _elementor_editor_elements.getAllDescendants)(root).filter((element) => {
				var _element$model;
				return ((_element$model = element.model) === null || _element$model === void 0 ? void 0 : _element$model.get("elType")) === COLLECTION_LOOP_TYPE;
			}).forEach((loop) => syncPaginationForLoopFromContainer(loop));
		});
	}
	function syncPaginationForLoopFromContainer(loopContainer) {
		var _loopContainer$settin;
		var _loopContainer$settin2;
		syncPaginationForLoop(loopContainer, (_loopContainer$settin = (_loopContainer$settin2 = loopContainer.settings) === null || _loopContainer$settin2 === void 0 ? void 0 : _loopContainer$settin2.toJSON()) !== null && _loopContainer$settin !== void 0 ? _loopContainer$settin : {}, { stashOnDetach: false });
	}
	function syncPaginationForLoop(loopContainer, settings, options = {}) {
		const { stashOnDetach = true } = options;
		const paginationEnabled = getPaginationEnabledFromSettings(settings);
		const paginationChild = findDirectPaginationChild(loopContainer);
		if (paginationEnabled && !paginationChild) {
			attachPagination(loopContainer);
			return;
		}
		if (!paginationEnabled && paginationChild) detachPagination(loopContainer, paginationChild, { stash: stashOnDetach });
	}
	function findDirectPaginationChild(loopContainer) {
		var _loopContainer$childr;
		var _children$find;
		return (_children$find = ((_loopContainer$childr = loopContainer.children) !== null && _loopContainer$childr !== void 0 ? _loopContainer$childr : []).find((child) => child.model.get("elType") === "e-pagination")) !== null && _children$find !== void 0 ? _children$find : null;
	}
	function detachPagination(loopContainer, paginationContainer, options = {}) {
		const { stash = true } = options;
		if (stash) setStoredPagination(loopContainer.id, paginationContainer.model.toJSON());
		(0, _elementor_editor_elements.deleteElement)({
			container: paginationContainer,
			options: { useHistory: true }
		});
	}
	function attachPagination(loopContainer) {
		const storedPagination = getStoredPagination(loopContainer.id);
		(0, _elementor_editor_elements.createElement)({
			container: loopContainer,
			model: buildPaginationCreateModel(storedPagination),
			options: {
				at: getPaginationInsertAt(loopContainer),
				useHistory: true
			}
		});
		if (storedPagination) clearStoredPagination(loopContainer.id);
	}
	function buildPaginationCreateModel(storedPagination) {
		if (storedPagination) return _objectSpread2(_objectSpread2({}, storedPagination), {}, { skipDefaultChildren: true });
		return {
			elType: PAGINATION_TYPE,
			isLocked: true
		};
	}
	function getPaginationInsertAt(loopContainer) {
		var _loopContainer$childr2;
		const children = (_loopContainer$childr2 = loopContainer.children) !== null && _loopContainer$childr2 !== void 0 ? _loopContainer$childr2 : [];
		const layoutIndex = children.findIndex((child) => child.model.get("elType") === LAYOUT_TYPE);
		return layoutIndex >= 0 ? layoutIndex + 1 : children.length;
	}
	//#endregion
	//#region packages/packages/pro/editor-collection-loop/src/legacy/pagination-reconcile-sync.ts
	var ELEMENTS_ADDED_COMMANDS = [
		"document/elements/create",
		"document/elements/import",
		"document/elements/paste",
		"document/elements/duplicate"
	];
	function initPaginationReconcileSync() {
		(0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.commandEndEvent)("editor/documents/attach-preview"), () => {
			syncAllCollectionLoopsInDocument();
		});
		ELEMENTS_ADDED_COMMANDS.forEach((command) => {
			(0, _elementor_editor_v1_adapters.registerDataHook)("after", command, handleElementsAdded);
		});
	}
	function handleElementsAdded(_args, result) {
		if (!result) return;
		syncCollectionLoopsInContainers(result);
	}
	//#endregion
	//#region packages/packages/pro/editor-collection-loop/src/legacy/pagination-settings-sync.ts
	var PAGINATION_PROP$1 = "pagination";
	function initPaginationSettingsSync() {
		(0, _elementor_editor_v1_adapters.__privateListenTo)([(0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/settings"), (0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/set-settings")], (event) => {
			handleSettingsChange(event);
		});
	}
	function handleSettingsChange(event) {
		var _event$args;
		const { container, settings } = (_event$args = event.args) !== null && _event$args !== void 0 ? _event$args : {};
		if (!container || !settings || !(PAGINATION_PROP$1 in settings)) return;
		if (container.model.get("elType") !== "e-collection-loop") return;
		syncPaginationForLoop(container, settings);
	}
	//#endregion
	//#region packages/packages/pro/editor-collection-loop/src/legacy/init-pagination-sync.ts
	function initPaginationSync() {
		initPaginationSettingsSync();
		initPaginationReconcileSync();
	}
	//#endregion
	//#region packages/packages/pro/editor-collection-loop/src/legacy/loop-edit-mode/handle-loop-item-drop-redirect.ts
	function initHandleLoopItemDropRedirect() {
		(0, _elementor_editor_canvas_extended.registerDropContainerRedirect)({
			shouldHandle: () => getLoopEditState() !== null,
			resolveRedirect: (container) => {
				var _getLoopEditState;
				const activeItemId = (_getLoopEditState = getLoopEditState()) === null || _getLoopEditState === void 0 ? void 0 : _getLoopEditState.activeItemId;
				if (!activeItemId || isElementDescendantOf(container.id, activeItemId)) return {
					shouldRedirect: false,
					container
				};
				const target = (0, _elementor_editor_elements.getContainer)(activeItemId);
				if (!target) return {
					shouldRedirect: false,
					container
				};
				return {
					shouldRedirect: true,
					container: target
				};
			}
		});
	}
	//#endregion
	//#region packages/packages/pro/editor-collection-loop/src/legacy/loop-edit-mode/selection-sync.ts
	var DOCUMENT_WRAPPER_ATTR = "data-elementor-id";
	function initLoopEditModeSelectionSync() {
		(0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/select"), handleSelectionChange);
	}
	function handleSelectionChange() {
		const editState = getLoopEditState();
		if (!editState) return;
		const selectedIds = (0, _elementor_editor_elements.getSelectedElements)().map((element) => element.id);
		if (selectedIds.length === 0) return;
		if (selectedIds.every((id) => isElementDescendantOf(id, editState.activeItemId))) return;
		if (!isSelectionInLoopDocument(selectedIds, editState.activeItemId)) return;
		setLoopEditingId(null);
	}
	function isSelectionInLoopDocument(selectedIds, activeItemId) {
		const loopDocumentId = getOwningDocumentId(activeItemId);
		if (!loopDocumentId) return false;
		return selectedIds.every((id) => getOwningDocumentId(id) === loopDocumentId);
	}
	function getOwningDocumentId(elementId) {
		var _getContainer;
		return (_getContainer = (0, _elementor_editor_elements.getContainer)(elementId)) === null || _getContainer === void 0 || (_getContainer = _getContainer.view) === null || _getContainer === void 0 || (_getContainer = _getContainer.el) === null || _getContainer === void 0 || (_getContainer = _getContainer.closest(`[${DOCUMENT_WRAPPER_ATTR}]`)) === null || _getContainer === void 0 ? void 0 : _getContainer.dataset.elementorId;
	}
	//#endregion
	//#region packages/packages/pro/editor-collection-loop/src/legacy/loop-item-create-guard.ts
	var MOVE_COMMAND = "document/elements/move";
	function initLoopItemCreateGuard() {
		(0, _elementor_editor_v1_adapters.registerDataHook)("dependency", "document/elements/create", (args, options) => {
			var _options$commandsCurr;
			var _args$model;
			var _args$container;
			var _args$containers;
			const isMove = options === null || options === void 0 || (_options$commandsCurr = options.commandsCurrentTrace) === null || _options$commandsCurr === void 0 ? void 0 : _options$commandsCurr.includes(MOVE_COMMAND);
			const isAddingLoopItemToLayout = ((_args$model = args.model) === null || _args$model === void 0 ? void 0 : _args$model.elType) === "e-collection-loop-item" && ((_args$container = args.container) === null || _args$container === void 0 ? void 0 : _args$container.model.get("elType")) === "e-collection-loop-layout";
			if (isMove || isAddingLoopItemToLayout) return true;
			return ((_args$containers = args.containers) !== null && _args$containers !== void 0 ? _args$containers : args.container ? [args.container] : []).every((container) => !isBlockedContainer(container));
		});
	}
	function isBlockedContainer(container) {
		var _getLoopEditState;
		if (!["e-collection-loop-item", "e-collection-loop-layout"].includes(container.model.get("elType"))) return false;
		const activeItemId = (_getLoopEditState = getLoopEditState()) === null || _getLoopEditState === void 0 ? void 0 : _getLoopEditState.activeItemId;
		return container.id !== activeItemId;
	}
	//#endregion
	//#region packages/packages/pro/editor-collection-loop/src/legacy/loop-navigator-children.ts
	var SHOW_CHILDREN_FILTER = "navigator/element/show-children";
	var REFRESH_CHILDREN_EVENT = "elementor/navigator/refresh-children";
	var lastActiveItemId = null;
	function initLoopNavigatorChildren() {
		(0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.v1ReadyEvent)(), registerNavigatorFilter);
		(0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.windowEvent)(LOOP_EDIT_MODE_CHANGED_EVENT), syncNavigatorForEditStateChange);
		(0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.commandEndEvent)("editor/documents/open"), resetLastActiveItemId);
	}
	function resetLastActiveItemId() {
		lastActiveItemId = null;
	}
	function registerNavigatorFilter() {
		var _legacyWindow$element;
		((_legacyWindow$element = window.elementor) === null || _legacyWindow$element === void 0 ? void 0 : _legacyWindow$element.hooks).addFilter(SHOW_CHILDREN_FILTER, (show, model) => {
			const elementModel = model;
			if ((elementModel === null || elementModel === void 0 ? void 0 : elementModel.get("elType")) !== "e-collection-loop-item") return show;
			return isLoopItemShowingChildrenInNavigator(elementModel.get("id"));
		});
		syncAllLoopItemNavigatorNodes();
	}
	function isLoopItemShowingChildrenInNavigator(itemId) {
		const editState = getLoopEditState();
		if (!editState) return false;
		if (editState.activeItemId === itemId) return true;
		return isAncestorLoopItemOfActiveItem(itemId, editState.activeItemId);
	}
	function isAncestorLoopItemOfActiveItem(ancestorItemId, activeItemId) {
		let isMatch = false;
		walkElementAncestors(activeItemId, (element) => {
			if (element.id === ancestorItemId) {
				isMatch = true;
				return true;
			}
			return false;
		});
		return isMatch;
	}
	function refreshLoopItemNavigator(itemId) {
		window.dispatchEvent(new CustomEvent(REFRESH_CHILDREN_EVENT, { detail: { elementId: itemId } }));
	}
	function syncNavigatorForEditStateChange() {
		var _getLoopEditState$act;
		var _getLoopEditState;
		const currentActiveItemId = (_getLoopEditState$act = (_getLoopEditState = getLoopEditState()) === null || _getLoopEditState === void 0 ? void 0 : _getLoopEditState.activeItemId) !== null && _getLoopEditState$act !== void 0 ? _getLoopEditState$act : null;
		const affectedIds = /* @__PURE__ */ new Set();
		if (lastActiveItemId) collectLoopItemNavigatorRefreshIds(lastActiveItemId, affectedIds);
		if (currentActiveItemId) collectLoopItemNavigatorRefreshIds(currentActiveItemId, affectedIds);
		lastActiveItemId = currentActiveItemId;
		affectedIds.forEach(refreshLoopItemNavigator);
	}
	function collectLoopItemNavigatorRefreshIds(activeItemId, affectedIds) {
		affectedIds.add(activeItemId);
		walkElementAncestors(activeItemId, (element) => {
			var _element$model;
			if (((_element$model = element.model) === null || _element$model === void 0 ? void 0 : _element$model.get("elType")) === "e-collection-loop-item") affectedIds.add(element.id);
			return false;
		});
	}
	function syncAllLoopItemNavigatorNodes() {
		forEachLoopItemModel((itemId) => refreshLoopItemNavigator(itemId));
	}
	function forEachLoopItemModel(visitor) {
		var _legacyWindow$element2;
		const rootElements = (_legacyWindow$element2 = window.elementor) === null || _legacyWindow$element2 === void 0 || (_legacyWindow$element2 = _legacyWindow$element2.elementsModel) === null || _legacyWindow$element2 === void 0 ? void 0 : _legacyWindow$element2.get("elements");
		if (!rootElements) return;
		walkElementsCollection(rootElements, visitor);
	}
	function walkElementsCollection(collection, visitor) {
		var _collection$models;
		for (const model of (_collection$models = collection.models) !== null && _collection$models !== void 0 ? _collection$models : []) {
			if (model.get("elType") === "e-collection-loop-item") visitor(model.get("id"));
			const childElements = model.get("elements");
			if (childElements) walkElementsCollection(childElements, visitor);
		}
	}
	//#endregion
	//#region packages/packages/pro/editor-collection-loop/src/legacy/track-pagination-toggle.ts
	var PAGINATION_PROP = "pagination";
	function initTrackPaginationToggle() {
		(0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/settings"), (e) => {
			var _event$args;
			var _container$model;
			const { container, settings } = (_event$args = e.args) !== null && _event$args !== void 0 ? _event$args : {};
			if (!container || !settings) return;
			if (((_container$model = container.model) === null || _container$model === void 0 ? void 0 : _container$model.get("elType")) !== "e-collection-loop") return;
			if (!(PAGINATION_PROP in settings)) return;
			const paginationValue = settings[PAGINATION_PROP];
			trackLoopAddPagination(resolveBooleanValue(paginationValue) ? "on" : "off");
		});
	}
	function resolveBooleanValue(value) {
		var _value$value;
		if (typeof value === "boolean") return value;
		return (_value$value = value === null || value === void 0 ? void 0 : value.value) !== null && _value$value !== void 0 ? _value$value : false;
	}
	//#endregion
	//#region packages/packages/pro/editor-collection-loop/src/api/loop-preview-api.ts
	var LOOP_PREVIEW_URL = "elementor-pro/v1/collection-loop/loop-preview";
	function fetchLoopPreview(_x) {
		return _fetchLoopPreview.apply(this, arguments);
	}
	function _fetchLoopPreview() {
		_fetchLoopPreview = _asyncToGenerator(function* (query, context = {}) {
			var _context$forceEmpty;
			var _response$data;
			const data = (_response$data = (yield (0, _elementor_http_client.httpService)().post(LOOP_PREVIEW_URL, {
				query,
				document_id: context.documentId,
				element_id: context.elementId,
				force_empty: (_context$forceEmpty = context.forceEmpty) !== null && _context$forceEmpty !== void 0 ? _context$forceEmpty : false
			})).data) === null || _response$data === void 0 ? void 0 : _response$data.data;
			if (!data) return {
				query_id: "",
				has_items: false,
				items: []
			};
			return data;
		});
		return _fetchLoopPreview.apply(this, arguments);
	}
	//#endregion
	//#region packages/packages/pro/editor-collection-loop/src/transformers/loop-query-transformer.ts
	var loopQueryTransformer = (0, _elementor_editor_canvas.createTransformer)(function() {
		var _ref = _asyncToGenerator(function* (value, { renderContext }) {
			var _getCurrentDocument;
			const elementId = typeof (renderContext === null || renderContext === void 0 ? void 0 : renderContext.loopElementId) === "string" ? renderContext.loopElementId : void 0;
			return fetchLoopPreview(value, {
				documentId: (_getCurrentDocument = (0, _elementor_editor_documents.getCurrentDocument)()) === null || _getCurrentDocument === void 0 ? void 0 : _getCurrentDocument.id,
				elementId,
				forceEmpty: (renderContext === null || renderContext === void 0 ? void 0 : renderContext.forceEmptyPreview) === true
			});
		});
		return function(_x, _x2) {
			return _ref.apply(this, arguments);
		};
	}());
	//#endregion
	//#region packages/packages/pro/editor-collection-loop/src/init.ts
	var LOOP_QUERY_CONTROL_TYPE = "loop-query";
	var ALTERNATING_ITEMS_CONTROL_TYPE = "alternating-items";
	function init() {
		return _init.apply(this, arguments);
	}
	function _init() {
		_init = _asyncToGenerator(function* () {
			if (!(0, _elementor_core_adapter_utils.isCoreAtLeast)("4.2.0")) return;
			initCollectionLoopLocations();
			if (!(yield (0, _elementor_license_api.fetchTierFeatures)().catch(() => [])).includes("atomic-loop")) return;
			initEditorCollectionLoop();
		});
		return _init.apply(this, arguments);
	}
	function initCollectionLoopLocations() {
		(0, _elementor_editor.injectIntoTop)({
			id: "collection-loop-edit-overlay",
			component: FeatureGuardedLoopEditOverlay
		});
	}
	function initEditorCollectionLoop() {
		_elementor_editor_canvas.settingsTransformersRegistry.register("loop-query", loopQueryTransformer);
		initCollectionLoopLicenseBlock();
		_elementor_editor_editing_panel.controlsRegistry.register(LOOP_QUERY_CONTROL_TYPE, LoopQueryControl, "full", loopQueryPropTypeUtil);
		_elementor_editor_editing_panel.controlsRegistry.register(ALTERNATING_ITEMS_CONTROL_TYPE, AlternatingItemsControl, "full");
		if ((0, _elementor_core_adapter_utils.isCoreAtLeast)("4.3.0")) (0, _elementor_editor_editing_panel.registerFieldIndicator)({
			fieldType: _elementor_editor_editing_panel.FIELD_TYPE.SETTINGS,
			id: "collection-loop-empty-state-preview",
			priority: 10,
			indicator: EmptyStatePreviewIndicator
		});
		(0, _elementor_editor_editing_panel.injectIntoGridFields)({
			id: "collection-loop-layout-info",
			component: LoopLayoutInfoAlert
		});
		initCollectionLoopType();
		initCollectionLoopLayoutType();
		initCollectionLoopItemType();
		initImportIntoContainerHook();
		initLoopEditModeSelectionSync();
		initHandleLoopItemDropRedirect();
		initLoopNavigatorChildren();
		initLoopItemContextMenu();
		initLoopItemCreateGuard();
		if (!(0, _elementor_core_adapter_utils.isCoreAtLeast)("4.3.0")) initPaginationSync();
		initTrackPaginationToggle();
		(0, _elementor_editor_editing_panel.registerEditingPanelReplacement)({
			id: "collection-loop-item-edit-panel",
			condition: (_, elementType) => elementType.key === ITEM_TYPE,
			component: CollectionLoopItemEditingPanel
		});
		(0, _elementor_editor_editing_panel.registerElementPanelDefaults)(COLLECTION_LOOP_TYPE, {
			defaultSectionsExpanded: {
				settings: ["query", "settings"],
				style: []
			},
			defaultTab: "settings"
		});
	}
	//#endregion
	exports.init = init;
})(this.elementorV2.editorCollectionLoop = this.elementorV2.editorCollectionLoop || {}, elementorV2.coreAdapterUtils, elementorV2.editor, elementorV2.editorCanvas, elementorV2.editorEditingPanel, elementorV2.licenseApi, elementorV2.editorV1Adapters, elementorV2.editorElements, React, elementorV2.editorControls, elementorV2.icons, elementorV2.ui, wp.i18n, elementorV2.events, elementorV2.editorProps, ReactDOM, elementorV2.editorPanels, elementorV2.session, elementorV2.schema, elementorV2.editorCanvasExtended, elementorV2.editorDocuments, elementorV2.httpClient);

window.elementorV2.editorCollectionLoop?.init?.();
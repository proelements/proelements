/*! pro-elements - v4.3.0 - 22-09-2026 */
this.elementorV2 = this.elementorV2 || {};
(function(exports, _elementor_license_api, _elementor_editor, _elementor_editor_components, _elementor_editor_controls, _elementor_editor_documents, _elementor_editor_editing_panel, _elementor_editor_elements_panel, _elementor_editor_mcp, _elementor_editor_panels, _elementor_editor_v1_adapters, _wordpress_i18n, react, _elementor_editor_current_user, _elementor_editor_ui, _elementor_icons, _elementor_store, _elementor_ui, _elementor_utils, _elementor_editor_elements, _elementor_core_adapter_utils, _elementor_editor_canvas, _elementor_editor_notifications, _elementor_schema, _elementor_events, react_dom, _elementor_editor_templates_extended, _elementor_http_client, _elementor_editor_canvas_extended) {
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
	//#region packages/packages/pro/editor-components-extended/src/consts.ts
	var OVERRIDABLE_PROP_REPLACEMENT_ID = "overridable-prop";
	var COMPONENTS_FEATURE_NAME = "atomic-components";
	var COMPONENT_DOCUMENT_TYPE = "elementor_component";
	var COMPONENTS_MCP_INSTRUCTIONS = `Elementor Editor Components MCP - Tools for creating and managing reusable components.
        Components are reusable blocks of content that can be used multiple times across the pages, its a widget which contains a set of elements and styles.
		
		Before using the tools, you must fetch the list of components from the resource (as mentioned in the required resources), if you see something that might fit, get the component instance.
		Then you can save the component instance as a new component (Name is unique so do not repeat it).

		If you see that there is a component that might match the needs of the user, get the component, see if it's published and suggest the user to use it (but only if you are 100% sure on that).
		Ignore this If statement when the users asks to create a new component, you can only suggest it after the work is done.`;
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/hooks/use-navigate-back.ts
	function useNavigateBack() {
		const path = (0, _elementor_store.__useSelector)(_elementor_editor_components.selectPath);
		const documentsManager = (0, _elementor_editor_documents.getV1DocumentsManager)();
		return (0, react.useCallback)(() => {
			var _path$at;
			const { componentId: prevComponentId, instanceId: prevComponentInstanceId } = (_path$at = path.at(-2)) !== null && _path$at !== void 0 ? _path$at : {};
			if (prevComponentId && prevComponentInstanceId) {
				(0, _elementor_editor_components.switchToComponent)(prevComponentId, prevComponentInstanceId);
				return;
			}
			(0, _elementor_editor_components.switchToComponent)(documentsManager.getInitialId());
		}, [path, documentsManager]);
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/components/component-introduction.tsx
	var ComponentIntroduction = ({ anchorRef, shouldShowIntroduction, onClose }) => {
		if (!anchorRef.current || !shouldShowIntroduction) return null;
		return /* @__PURE__ */ react.createElement(_elementor_ui.Popover, {
			anchorEl: anchorRef.current,
			open: shouldShowIntroduction,
			anchorOrigin: {
				vertical: "top",
				horizontal: "right"
			},
			transformOrigin: {
				vertical: "top",
				horizontal: -30
			},
			onClose
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: { width: "296px" } }, /* @__PURE__ */ react.createElement(_elementor_editor_ui.PopoverHeader, {
			title: (0, _wordpress_i18n.__)("Add your first property", "elementor-pro"),
			onClose
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Image, {
			sx: {
				width: "296px",
				height: "160px"
			},
			src: "https://assets.elementor.com/packages/v1/images/components-properties-intro.png",
			alt: ""
		}), /* @__PURE__ */ react.createElement(_elementor_editor_controls.PopoverContent, null, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, { sx: { p: 2 } }, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, { variant: "body2" }, (0, _wordpress_i18n.__)("Properties make instances flexible.", "elementor-pro")), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, { variant: "body2" }, (0, _wordpress_i18n.__)("Select any Element, then in the General tab, click next to any setting you want users to customize - like text, images, or links.", "elementor-pro")), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "body2",
			sx: { mt: 2 }
		}, (0, _wordpress_i18n.__)("Your properties will appear in the Properties panel, where you can organize and manage them anytime.", "elementor-pro")), /* @__PURE__ */ react.createElement(_elementor_ui.Link, {
			href: "http://go.elementor.com/components-guide",
			target: "_blank",
			sx: { mt: 2 },
			color: "info.main",
			variant: "body2"
		}, (0, _wordpress_i18n.__)("Learn more", "elementor-pro")), /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			alignItems: "center",
			justifyContent: "flex-end",
			sx: { pt: 1 }
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			size: "medium",
			variant: "contained",
			onClick: onClose
		}, (0, _wordpress_i18n.__)("Got it", "elementor-pro")))))));
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
	//#region packages/packages/pro/editor-components-extended/src/store/actions/add-overridable-group.ts
	function addOverridableGroup({ componentId, groupId, label, executedBy }) {
		const currentComponent = _elementor_editor_components.componentsSelectors.getCurrentComponent();
		const overridableProps = _elementor_editor_components.componentsSelectors.getOverridableProps(componentId);
		if (!overridableProps) return;
		const newGroup = {
			id: groupId,
			label,
			props: []
		};
		_elementor_editor_components.componentsActions.setOverridableProps(componentId, _objectSpread2(_objectSpread2({}, overridableProps), {}, { groups: _objectSpread2(_objectSpread2({}, overridableProps.groups), {}, {
			items: _objectSpread2(_objectSpread2({}, overridableProps.groups.items), {}, { [groupId]: newGroup }),
			order: [groupId, ...overridableProps.groups.order]
		}) }));
		(0, _elementor_editor_components.trackComponentEvent)({
			action: "propertiesGroupCreated",
			source: executedBy,
			executedBy,
			component_uid: currentComponent === null || currentComponent === void 0 ? void 0 : currentComponent.uid,
			group_name: label
		});
		return newGroup;
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/utils/revert-overridable-settings.ts
	function revertElementOverridableSetting(elementId, settingKey, originValue, overrideKey) {
		const container = (0, _elementor_editor_elements.getContainer)(elementId);
		if (!container) return;
		if ((0, _elementor_editor_components.isComponentInstance)(container.model.toJSON())) {
			revertComponentInstanceOverridableSetting(elementId, overrideKey);
			return;
		}
		(0, _elementor_editor_elements.updateElementSettings)({
			id: elementId,
			props: { [settingKey]: originValue !== null && originValue !== void 0 ? originValue : null },
			withHistory: false
		});
	}
	function revertComponentInstanceOverridableSetting(elementId, overrideKey) {
		const setting = (0, _elementor_editor_elements.getElementSetting)(elementId, "component_instance");
		const componentInstance = _elementor_editor_components.componentInstancePropTypeUtil.extract(setting);
		const overrides = _elementor_editor_components.componentInstanceOverridesPropTypeUtil.extract(componentInstance === null || componentInstance === void 0 ? void 0 : componentInstance.overrides);
		if (!(overrides === null || overrides === void 0 ? void 0 : overrides.length)) return;
		const revertedOverrides = revertComponentInstanceOverrides(overrides, overrideKey);
		(0, _elementor_editor_elements.updateElementSettings)({
			id: elementId,
			props: { component_instance: _elementor_editor_components.componentInstancePropTypeUtil.create(_objectSpread2(_objectSpread2({}, componentInstance), {}, { overrides: _elementor_editor_components.componentInstanceOverridesPropTypeUtil.create(revertedOverrides) })) },
			withHistory: false
		});
	}
	function revertComponentInstanceOverrides(overrides, filterByKey) {
		return overrides.map((item) => {
			if (!_elementor_editor_components.componentOverridablePropTypeUtil.isValid(item)) return item;
			if (!_elementor_editor_components.componentInstanceOverridePropTypeUtil.isValid(item.value.origin_value)) return null;
			if (filterByKey && item.value.override_key !== filterByKey) return item;
			return item.value.origin_value;
		}).filter((item) => item !== null);
	}
	function revertOverridablePropsFromSettings(settings) {
		let hasChanges = false;
		const revertedSettings = {};
		for (const [key, value] of Object.entries(settings)) if (_elementor_editor_components.componentOverridablePropTypeUtil.isValid(value)) {
			revertedSettings[key] = value.value.origin_value;
			hasChanges = true;
		} else revertedSettings[key] = value;
		return {
			hasChanges,
			settings: revertedSettings
		};
	}
	function revertAllOverridablesInElementData(elementData) {
		const revertedElement = _objectSpread2({}, elementData);
		if ((0, _elementor_editor_components.isComponentInstance)({
			widgetType: elementData.widgetType,
			elType: elementData.elType
		})) revertedElement.settings = revertComponentInstanceSettings(elementData.settings);
		else if (revertedElement.settings) {
			const { settings } = revertOverridablePropsFromSettings(revertedElement.settings);
			revertedElement.settings = settings;
		}
		if (revertedElement.elements) revertedElement.elements = revertedElement.elements.map(revertAllOverridablesInElementData);
		return revertedElement;
	}
	function revertComponentInstanceSettings(settings) {
		if (!(settings === null || settings === void 0 ? void 0 : settings.component_instance)) return settings;
		const componentInstance = _elementor_editor_components.componentInstancePropTypeUtil.extract(settings.component_instance);
		const overrides = _elementor_editor_components.componentInstanceOverridesPropTypeUtil.extract(componentInstance === null || componentInstance === void 0 ? void 0 : componentInstance.overrides);
		if (!(overrides === null || overrides === void 0 ? void 0 : overrides.length)) return settings;
		const revertedOverrides = revertComponentInstanceOverrides(overrides);
		return _objectSpread2(_objectSpread2({}, settings), {}, { component_instance: _elementor_editor_components.componentInstancePropTypeUtil.create(_objectSpread2(_objectSpread2({}, componentInstance), {}, { overrides: _elementor_editor_components.componentInstanceOverridesPropTypeUtil.create(revertedOverrides) })) });
	}
	function revertAllOverridablesInContainer(container) {
		(0, _elementor_editor_elements.getAllDescendants)(container).forEach((element) => {
			if (element.model.get("widgetType") === _elementor_editor_components.COMPONENT_WIDGET_TYPE) revertComponentInstanceOverridesInElement(element);
			else revertElementSettings(element);
		});
	}
	function revertComponentInstanceOverridesInElement(element) {
		var _element$settings$toJ;
		var _element$settings;
		const settings = (_element$settings$toJ = (_element$settings = element.settings) === null || _element$settings === void 0 ? void 0 : _element$settings.toJSON()) !== null && _element$settings$toJ !== void 0 ? _element$settings$toJ : {};
		const componentInstance = _elementor_editor_components.componentInstancePropTypeUtil.extract(settings.component_instance);
		const overrides = _elementor_editor_components.componentInstanceOverridesPropTypeUtil.extract(componentInstance === null || componentInstance === void 0 ? void 0 : componentInstance.overrides);
		if (!(overrides === null || overrides === void 0 ? void 0 : overrides.length)) return;
		const revertedOverrides = revertComponentInstanceOverrides(overrides);
		const updatedSetting = _elementor_editor_components.componentInstancePropTypeUtil.create(_objectSpread2(_objectSpread2({}, componentInstance), {}, { overrides: _elementor_editor_components.componentInstanceOverridesPropTypeUtil.create(revertedOverrides) }));
		(0, _elementor_editor_elements.updateElementSettings)({
			id: element.id,
			props: { component_instance: updatedSetting },
			withHistory: false
		});
	}
	function revertElementSettings(element) {
		var _element$settings$toJ2;
		var _element$settings2;
		const { hasChanges, settings: revertedSettings } = revertOverridablePropsFromSettings((_element$settings$toJ2 = (_element$settings2 = element.settings) === null || _element$settings2 === void 0 ? void 0 : _element$settings2.toJSON()) !== null && _element$settings$toJ2 !== void 0 ? _element$settings$toJ2 : {});
		if (!hasChanges) return;
		(0, _elementor_editor_elements.updateElementSettings)({
			id: element.id,
			props: revertedSettings,
			withHistory: false
		});
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
	//#region packages/packages/pro/editor-components-extended/src/store/utils/groups-transformers.ts
	function removePropFromAllGroups(groups, propKey) {
		const propKeys = Array.isArray(propKey) ? propKey : [propKey];
		return _objectSpread2(_objectSpread2({}, groups), {}, { items: Object.fromEntries(Object.entries(groups.items).map(([groupId, group]) => [groupId, _objectSpread2(_objectSpread2({}, group), {}, { props: group.props.filter((p) => !propKeys.includes(p)) })])) });
	}
	function addPropToGroup(groups, groupId, propKey) {
		const group = groups.items[groupId];
		if (!group) return groups;
		if (group.props.includes(propKey)) return groups;
		return _objectSpread2(_objectSpread2({}, groups), {}, { items: _objectSpread2(_objectSpread2({}, groups.items), {}, { [groupId]: _objectSpread2(_objectSpread2({}, group), {}, { props: [...group.props, propKey] }) }) });
	}
	function movePropBetweenGroups(groups, propKey, fromGroupId, toGroupId) {
		if (fromGroupId === toGroupId) return groups;
		return addPropToGroup(removePropFromGroup(groups, fromGroupId, propKey), toGroupId, propKey);
	}
	function removePropFromGroup(groups, groupId, propKey) {
		const group = groups.items[groupId];
		if (!group) return groups;
		return _objectSpread2(_objectSpread2({}, groups), {}, { items: _objectSpread2(_objectSpread2({}, groups.items), {}, { [groupId]: _objectSpread2(_objectSpread2({}, group), {}, { props: group.props.filter((p) => p !== propKey) }) }) });
	}
	function resolveOrCreateGroup(groups, requestedGroupId) {
		if (requestedGroupId && groups.items[requestedGroupId]) return {
			groups,
			groupId: requestedGroupId
		};
		if (!requestedGroupId && groups.order.length > 0) return {
			groups,
			groupId: groups.order[0]
		};
		return createGroup(groups, requestedGroupId);
	}
	function createGroup(groups, groupId, label) {
		const newGroupId = groupId || (0, _elementor_utils.generateUniqueId)("group");
		const newLabel = label || (0, _wordpress_i18n.__)("Default", "elementor-pro");
		return {
			groups: _objectSpread2(_objectSpread2({}, groups), {}, {
				items: _objectSpread2(_objectSpread2({}, groups.items), {}, { [newGroupId]: {
					id: newGroupId,
					label: newLabel,
					props: []
				} }),
				order: [...groups.order, newGroupId]
			}),
			groupId: newGroupId
		};
	}
	function removePropsFromState(overridableProps, propsToRemove) {
		const overrideKeysToRemove = propsToRemove.map((prop) => prop.overrideKey);
		return {
			props: Object.fromEntries(Object.entries(overridableProps.props).filter(([, prop]) => !propsToRemove.includes(prop))),
			groups: {
				items: Object.fromEntries(Object.entries(overridableProps.groups.items).map(([groupId, group]) => [groupId, _objectSpread2(_objectSpread2({}, group), {}, { props: group.props.filter((prop) => !overrideKeysToRemove.includes(prop)) })])),
				order: overridableProps.groups.order.filter((groupId) => !overrideKeysToRemove.includes(groupId))
			}
		};
	}
	function ensureGroupInOrder(groups, groupId) {
		if (groups.order.includes(groupId)) return groups;
		return _objectSpread2(_objectSpread2({}, groups), {}, { order: [...groups.order, groupId] });
	}
	function deleteGroup(groups, groupId) {
		const _groups$items = groups.items, { [groupId]: removed } = _groups$items;
		return {
			items: _objectWithoutProperties(_groups$items, [groupId].map(toPropertyKey)),
			order: groups.order.filter((id) => id !== groupId)
		};
	}
	function renameGroup(groups, groupId, newLabel) {
		const group = groups.items[groupId];
		if (!group) return groups;
		return _objectSpread2(_objectSpread2({}, groups), {}, { items: _objectSpread2(_objectSpread2({}, groups.items), {}, { [groupId]: _objectSpread2(_objectSpread2({}, group), {}, { label: newLabel }) }) });
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/store/actions/delete-component-overridable-prop.ts
	function deleteComponentOverridableProp({ componentId, propKey, executedBy, revertElementOverridable = true }) {
		const overridableProps = _elementor_editor_components.componentsSelectors.getOverridableProps(componentId);
		if (!overridableProps || Object.keys(overridableProps.props).length === 0) return;
		const propKeysToDelete = Array.isArray(propKey) ? propKey : [propKey];
		const deletedProps = [];
		for (const key of propKeysToDelete) {
			const prop = overridableProps.props[key];
			if (!prop) continue;
			deletedProps.push(prop);
			if (revertElementOverridable) revertElementOverridableSetting(prop.elementId, prop.propKey, prop.originValue, key);
		}
		if (deletedProps.length === 0) return;
		const remainingProps = Object.fromEntries(Object.entries(overridableProps.props).filter(([key]) => !propKeysToDelete.includes(key)));
		const updatedGroups = removePropFromAllGroups(overridableProps.groups, propKey);
		_elementor_editor_components.componentsActions.setOverridableProps(componentId, _objectSpread2(_objectSpread2({}, overridableProps), {}, {
			props: remainingProps,
			groups: updatedGroups
		}));
		const currentComponent = _elementor_editor_components.componentsSelectors.getCurrentComponent();
		for (const prop of deletedProps) {
			var _prop$widgetType;
			(0, _elementor_editor_components.trackComponentEvent)({
				action: "propertyRemoved",
				source: executedBy,
				executedBy,
				component_uid: currentComponent === null || currentComponent === void 0 ? void 0 : currentComponent.uid,
				property_id: prop.overrideKey,
				property_path: prop.propKey,
				property_name: prop.label,
				element_type: (_prop$widgetType = prop.widgetType) !== null && _prop$widgetType !== void 0 ? _prop$widgetType : prop.elType
			});
		}
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/store/actions/delete-overridable-group.ts
	function deleteOverridableGroup({ componentId, groupId }) {
		const overridableProps = _elementor_editor_components.componentsSelectors.getOverridableProps(componentId);
		if (!overridableProps) return false;
		const group = overridableProps.groups.items[groupId];
		if (!group || group.props.length > 0) return false;
		const updatedGroups = deleteGroup(overridableProps.groups, groupId);
		_elementor_editor_components.componentsActions.setOverridableProps(componentId, _objectSpread2(_objectSpread2({}, overridableProps), {}, { groups: updatedGroups }));
		return true;
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/store/actions/reorder-group-props.ts
	function reorderGroupProps({ componentId, groupId, newPropsOrder }) {
		const overridableProps = _elementor_editor_components.componentsSelectors.getOverridableProps(componentId);
		if (!overridableProps) return;
		const group = overridableProps.groups.items[groupId];
		if (!group) return;
		_elementor_editor_components.componentsActions.setOverridableProps(componentId, _objectSpread2(_objectSpread2({}, overridableProps), {}, { groups: _objectSpread2(_objectSpread2({}, overridableProps.groups), {}, { items: _objectSpread2(_objectSpread2({}, overridableProps.groups.items), {}, { [groupId]: _objectSpread2(_objectSpread2({}, group), {}, { props: newPropsOrder }) }) }) }));
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/store/actions/reorder-overridable-groups.ts
	function reorderOverridableGroups({ componentId, newOrder }) {
		const overridableProps = _elementor_editor_components.componentsSelectors.getOverridableProps(componentId);
		if (!overridableProps) return;
		_elementor_editor_components.componentsActions.setOverridableProps(componentId, _objectSpread2(_objectSpread2({}, overridableProps), {}, { groups: _objectSpread2(_objectSpread2({}, overridableProps.groups), {}, { order: newOrder }) }));
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/store/actions/update-overridable-prop-params.ts
	function updateOverridablePropParams({ componentId, overrideKey, label, groupId }) {
		const overridableProps = _elementor_editor_components.componentsSelectors.getOverridableProps(componentId);
		if (!overridableProps) return;
		const prop = overridableProps.props[overrideKey];
		if (!prop) return;
		const oldGroupId = prop.groupId;
		const newGroupId = groupId !== null && groupId !== void 0 ? groupId : oldGroupId;
		const updatedProp = _objectSpread2(_objectSpread2({}, prop), {}, {
			label,
			groupId: newGroupId
		});
		const updatedGroups = movePropBetweenGroups(overridableProps.groups, overrideKey, oldGroupId, newGroupId);
		_elementor_editor_components.componentsActions.setOverridableProps(componentId, _objectSpread2(_objectSpread2({}, overridableProps), {}, {
			props: _objectSpread2(_objectSpread2({}, overridableProps.props), {}, { [overrideKey]: updatedProp }),
			groups: updatedGroups
		}));
		return updatedProp;
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/components/component-properties-panel/component-properties-sortable-ids.ts
	var COMPONENT_PROP_GROUP_HEADERS_KEY = "__cpPropGroupHeaders__";
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/components/overridable-props/utils/validate-prop-label.ts
	var ERROR_MESSAGES$2 = {
		EMPTY_NAME: (0, _wordpress_i18n.__)("Property name is required", "elementor-pro"),
		DUPLICATE_NAME: (0, _wordpress_i18n.__)("Property name already exists", "elementor-pro")
	};
	function validatePropLabel(label, existingLabels, currentLabel) {
		const trimmedLabel = label.trim();
		if (!trimmedLabel) return {
			isValid: false,
			errorMessage: ERROR_MESSAGES$2.EMPTY_NAME
		};
		const normalizedLabel = trimmedLabel.toLowerCase();
		const normalizedCurrentLabel = currentLabel === null || currentLabel === void 0 ? void 0 : currentLabel.trim().toLowerCase();
		if (existingLabels.some((existingLabel) => {
			const normalizedExisting = existingLabel.trim().toLowerCase();
			if (normalizedCurrentLabel && normalizedExisting === normalizedCurrentLabel) return false;
			return normalizedExisting === normalizedLabel;
		})) return {
			isValid: false,
			errorMessage: ERROR_MESSAGES$2.DUPLICATE_NAME
		};
		return {
			isValid: true,
			errorMessage: null
		};
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/components/overridable-props/overridable-prop-form.tsx
	var _excluded$3 = ["label"];
	var SIZE$1 = "tiny";
	var DEFAULT_GROUP = {
		value: null,
		label: (0, _wordpress_i18n.__)("Default", "elementor-pro")
	};
	function OverridablePropForm({ onSubmit, groups, currentValue, existingLabels = [], sx }) {
		var _currentValue$label;
		var _ref;
		var _currentValue$groupId;
		var _selectGroups$;
		const selectGroups = (groups === null || groups === void 0 ? void 0 : groups.length) ? groups : [DEFAULT_GROUP];
		const [propLabel, setPropLabel] = (0, react.useState)((_currentValue$label = currentValue === null || currentValue === void 0 ? void 0 : currentValue.label) !== null && _currentValue$label !== void 0 ? _currentValue$label : null);
		const [group, setGroup] = (0, react.useState)((_ref = (_currentValue$groupId = currentValue === null || currentValue === void 0 ? void 0 : currentValue.groupId) !== null && _currentValue$groupId !== void 0 ? _currentValue$groupId : (_selectGroups$ = selectGroups[0]) === null || _selectGroups$ === void 0 ? void 0 : _selectGroups$.value) !== null && _ref !== void 0 ? _ref : null);
		const [error, setError] = (0, react.useState)(null);
		const name = (0, _wordpress_i18n.__)("Name", "elementor-pro");
		const groupName = (0, _wordpress_i18n.__)("Group Name", "elementor-pro");
		const isCreate = currentValue === void 0;
		const title = isCreate ? (0, _wordpress_i18n.__)("Create new property", "elementor-pro") : (0, _wordpress_i18n.__)("Update property", "elementor-pro");
		const ctaLabel = isCreate ? (0, _wordpress_i18n.__)("Create", "elementor-pro") : (0, _wordpress_i18n.__)("Update", "elementor-pro");
		const handleSubmit = () => {
			const validationResult = validatePropLabel(propLabel !== null && propLabel !== void 0 ? propLabel : "", existingLabels, currentValue === null || currentValue === void 0 ? void 0 : currentValue.label);
			if (!validationResult.isValid) {
				setError(validationResult.errorMessage);
				return;
			}
			onSubmit({
				label: propLabel !== null && propLabel !== void 0 ? propLabel : "",
				group
			});
		};
		return /* @__PURE__ */ react.createElement(_elementor_editor_ui.Form, {
			onSubmit: handleSubmit,
			"data-testid": "overridable-prop-form"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			alignItems: "start",
			sx: _objectSpread2({ width: "268px" }, sx)
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			alignItems: "center",
			py: 1,
			px: 1.5,
			sx: {
				columnGap: .5,
				borderBottom: "1px solid",
				borderColor: "divider",
				width: "100%",
				mb: 1.5
			}
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "caption",
			sx: {
				color: "text.primary",
				fontWeight: "500",
				lineHeight: 1
			}
		}, title)), /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			container: true,
			gap: .75,
			alignItems: "start",
			px: 1.5,
			mb: 1.5
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			item: true,
			xs: 12
		}, /* @__PURE__ */ react.createElement(_elementor_ui.FormLabel, { size: "tiny" }, name)), /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			item: true,
			xs: 12
		}, /* @__PURE__ */ react.createElement(_elementor_ui.TextField, {
			name,
			size: SIZE$1,
			fullWidth: true,
			autoFocus: true,
			placeholder: (0, _wordpress_i18n.__)("Enter value", "elementor-pro"),
			value: propLabel !== null && propLabel !== void 0 ? propLabel : "",
			onChange: (e) => {
				const newValue = e.target.value;
				setPropLabel(newValue);
				const validationResult = validatePropLabel(newValue, existingLabels, currentValue === null || currentValue === void 0 ? void 0 : currentValue.label);
				setError(validationResult.errorMessage);
			},
			error: Boolean(error),
			helperText: error
		}))), /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			container: true,
			gap: .75,
			alignItems: "start",
			px: 1.5,
			mb: 1.5
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			item: true,
			xs: 12
		}, /* @__PURE__ */ react.createElement(_elementor_ui.FormLabel, { size: "tiny" }, groupName)), /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			item: true,
			xs: 12
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Select, {
			name: groupName,
			size: SIZE$1,
			fullWidth: true,
			value: group !== null && group !== void 0 ? group : null,
			onChange: (e) => setGroup(e.target.value),
			displayEmpty: true,
			renderValue: (selectedValue) => {
				var _selectGroups$find$la;
				var _selectGroups$find;
				if (!selectedValue) return selectGroups[0].label;
				return (_selectGroups$find$la = (_selectGroups$find = selectGroups.find(({ value }) => value === selectedValue)) === null || _selectGroups$find === void 0 ? void 0 : _selectGroups$find.label) !== null && _selectGroups$find$la !== void 0 ? _selectGroups$find$la : selectedValue;
			}
		}, selectGroups.map((_ref2) => {
			var _props$value;
			let { label: groupLabel } = _ref2, props = _objectWithoutProperties(_ref2, _excluded$3);
			return /* @__PURE__ */ react.createElement(_elementor_editor_ui.MenuListItem, _objectSpread2(_objectSpread2({ key: props.value }, props), {}, { value: (_props$value = props.value) !== null && _props$value !== void 0 ? _props$value : "" }), groupLabel);
		})))), /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			justifyContent: "flex-end",
			alignSelf: "end",
			mt: 1.5,
			py: 1,
			px: 1.5
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			type: "submit",
			disabled: !propLabel || Boolean(error),
			variant: "contained",
			color: "primary",
			size: "small"
		}, ctaLabel))));
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/components/component-properties-panel/sortable.tsx
	var _excluded$2 = ["triggerClassName"];
	var SortableProvider = (props) => /* @__PURE__ */ react.createElement(_elementor_ui.UnstableSortableProvider, _objectSpread2({
		restrictAxis: true,
		variant: "static",
		dragPlaceholderStyle: { opacity: "1" }
	}, props));
	var SortableTrigger = (_ref) => {
		let { triggerClassName } = _ref, props = _objectWithoutProperties(_ref, _excluded$2);
		return /* @__PURE__ */ react.createElement(StyledSortableTrigger, _objectSpread2(_objectSpread2({}, props), {}, {
			role: "button",
			className: `sortable-trigger ${triggerClassName !== null && triggerClassName !== void 0 ? triggerClassName : ""}`.trim(),
			"aria-label": "sort"
		}), /* @__PURE__ */ react.createElement(_elementor_icons.GripVerticalIcon, { fontSize: "tiny" }));
	};
	var SortableItem = ({ children, id }) => /* @__PURE__ */ react.createElement(_elementor_ui.UnstableSortableItem, {
		id,
		render: ({ itemProps, isDragged, triggerProps, itemStyle, triggerStyle, dropIndicationStyle, showDropIndication, isDragOverlay, isDragPlaceholder }) => /* @__PURE__ */ react.createElement(_elementor_ui.Box, _objectSpread2(_objectSpread2({}, itemProps), {}, {
			style: itemStyle,
			component: "div",
			role: "listitem",
			sx: { backgroundColor: isDragOverlay ? "background.paper" : void 0 }
		}), children({
			isDragged,
			isDragPlaceholder,
			triggerProps,
			triggerStyle
		}), showDropIndication && /* @__PURE__ */ react.createElement(SortableItemIndicator, { style: dropIndicationStyle }))
	});
	var isMultiGroupSortingEnabled = (0, _elementor_core_adapter_utils.isCoreAtLeast)("4.1.0");
	function MultiSortableRoot({ children, value, onChange }) {
		return /* @__PURE__ */ react.createElement(_elementor_ui.UnstableSortable, {
			mode: "multiple",
			restrictAxis: true,
			dragPlaceholderStyle: { opacity: "1" },
			value,
			onChange
		}, children);
	}
	function MultiSortableGroup({ groupId, children }) {
		return /* @__PURE__ */ react.createElement(_elementor_ui.UnstableSortableGroup, { groupId }, children);
	}
	function MultiSortableItem({ id, children }) {
		return /* @__PURE__ */ react.createElement(_elementor_ui.UnstableSortableItem, { id }, children);
	}
	var StyledSortableTrigger = (0, _elementor_ui.styled)("div")(({ theme }) => ({
		position: "absolute",
		left: "-2px",
		top: "50%",
		transform: `translate( -${theme.spacing(1.5)}, -50% )`,
		color: theme.palette.action.active,
		cursor: "grab"
	}));
	var SortableItemIndicator = (0, _elementor_ui.styled)(_elementor_ui.Box)`
	width: 100%;
	height: 1px;
	background-color: ${({ theme }) => theme.palette.text.primary};
`;
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/components/component-properties-panel/multi-group-property-item.tsx
	function MultiGroupPropertyItem({ prop, sortableItemProps, sortableItemStyle, sortableTriggerProps, isDragPlaceholder, groups, existingLabels, onDelete, onUpdate }) {
		var _popoverState$anchorE;
		const popoverState = (0, _elementor_ui.usePopupState)({ variant: "popover" });
		const icon = getElementIcon$1(prop);
		const popoverProps = (0, _elementor_ui.bindPopover)(popoverState);
		const handleSubmit = (data) => {
			onUpdate(data);
			popoverState.close();
		};
		const handleDelete = (event) => {
			event.stopPropagation();
			onDelete(prop.overrideKey);
		};
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.Box, _objectSpread2(_objectSpread2(_objectSpread2({}, sortableItemProps), {}, { style: sortableItemStyle }, (0, _elementor_ui.bindTrigger)(popoverState)), {}, {
			"data-testid": "component-property-item",
			sx: {
				position: "relative",
				pl: .5,
				pr: 1,
				py: .25,
				minHeight: 28,
				borderRadius: 1,
				border: "1px solid",
				borderColor: "divider",
				display: "flex",
				alignItems: "center",
				gap: .5,
				opacity: isDragPlaceholder ? .5 : 1,
				cursor: "pointer",
				"&:hover": { backgroundColor: "action.hover" },
				"&:hover .sortable-trigger": { visibility: "visible" },
				"& .sortable-trigger": { visibility: "hidden" },
				"&:hover .delete-button": { visibility: "visible" },
				"& .delete-button": { visibility: "hidden" }
			}
		}), /* @__PURE__ */ react.createElement(SortableTrigger, sortableTriggerProps), /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			display: "flex",
			alignItems: "center",
			color: "text.primary",
			fontSize: 12,
			padding: .25
		} }, /* @__PURE__ */ react.createElement("i", { className: icon })), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "caption",
			sx: {
				color: "text.primary",
				flexGrow: 1,
				fontSize: 10
			}
		}, prop.label), /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
			className: "delete-button",
			size: "tiny",
			onClick: handleDelete,
			"aria-label": (0, _wordpress_i18n.__)("Delete property", "elementor-pro"),
			sx: { p: .25 }
		}, /* @__PURE__ */ react.createElement(_elementor_icons.XIcon, { fontSize: "tiny" }))), /* @__PURE__ */ react.createElement(_elementor_ui.Popover, _objectSpread2(_objectSpread2({}, popoverProps), {}, {
			anchorOrigin: {
				vertical: "bottom",
				horizontal: "left"
			},
			transformOrigin: {
				vertical: "top",
				horizontal: "left"
			},
			PaperProps: { sx: { width: (_popoverState$anchorE = popoverState.anchorEl) === null || _popoverState$anchorE === void 0 ? void 0 : _popoverState$anchorE.getBoundingClientRect().width } }
		}), /* @__PURE__ */ react.createElement(OverridablePropForm, {
			onSubmit: handleSubmit,
			currentValue: prop,
			groups,
			existingLabels,
			sx: { width: "100%" }
		})));
	}
	function getElementIcon$1(prop) {
		const elType = prop.elType === "widget" ? prop.widgetType : prop.elType;
		const widgetsCache = (0, _elementor_editor_elements.getWidgetsCache)();
		if (!widgetsCache) return "eicon-apps";
		const widgetConfig = widgetsCache[elType];
		return (widgetConfig === null || widgetConfig === void 0 ? void 0 : widgetConfig.icon) || "eicon-apps";
	}
	__name(getElementIcon$1, "getElementIcon");
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/components/component-properties-panel/multi-group-properties-group.tsx
	function MultiGroupPropertiesGroup({ group, props, allGroups, sortableItemProps, sortableItemStyle, sortableTriggerProps, isDragPlaceholder, onPropertyDelete, onPropertyUpdate, onGroupDelete, editableLabelProps }) {
		const popupState = (0, _elementor_ui.usePopupState)({
			variant: "popover",
			disableAutoFocus: true
		});
		const { editableRef, isEditing, error, getEditableProps, setEditingGroupId, editingGroupId } = editableLabelProps;
		const hasProperties = group.props.length > 0;
		const isThisGroupEditing = isEditing && editingGroupId === group.id;
		const handleRenameClick = () => {
			popupState.close();
			setEditingGroupId(group.id);
		};
		const handleDeleteClick = () => {
			popupState.close();
			onGroupDelete(group.id);
		};
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, _objectSpread2(_objectSpread2({}, sortableItemProps), {}, {
			style: sortableItemStyle,
			sx: { opacity: isDragPlaceholder ? .5 : 1 }
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Stack, { gap: 1 }, /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			className: "group-header",
			sx: {
				position: "relative",
				"&:hover .group-sortable-trigger": { visibility: "visible" },
				"& .group-sortable-trigger": { visibility: "hidden" },
				"&:hover .group-menu": { visibility: "visible" },
				"& .group-menu": { visibility: "hidden" }
			}
		}, /* @__PURE__ */ react.createElement(SortableTrigger, _objectSpread2({ triggerClassName: "group-sortable-trigger" }, sortableTriggerProps)), /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			alignItems: "center",
			justifyContent: "space-between",
			gap: 2
		}, isThisGroupEditing ? /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			height: 28,
			display: "flex",
			alignItems: "center",
			border: 2,
			borderColor: "text.secondary",
			borderRadius: 1,
			pl: .5,
			flexGrow: 1,
			overflow: "hidden",
			textOverflow: "ellipsis",
			whiteSpace: "nowrap",
			width: "100%"
		} }, /* @__PURE__ */ react.createElement(_elementor_editor_ui.EditableField, _objectSpread2({
			ref: editableRef,
			as: _elementor_ui.Typography,
			variant: "caption",
			error: error !== null && error !== void 0 ? error : void 0,
			sx: {
				color: "text.primary",
				fontWeight: 400,
				lineHeight: 1.66
			}
		}, getEditableProps()))) : /* @__PURE__ */ react.createElement(_elementor_editor_ui.EllipsisWithTooltip, {
			title: group.label,
			as: _elementor_ui.Typography,
			variant: "caption",
			sx: {
				color: "text.primary",
				fontWeight: 400,
				lineHeight: 1.66
			}
		}), /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, _objectSpread2({
			className: "group-menu",
			size: "tiny",
			sx: {
				p: .25,
				visibility: isThisGroupEditing ? "visible" : void 0
			},
			"aria-label": (0, _wordpress_i18n.__)("Group actions", "elementor-pro")
		}, (0, _elementor_ui.bindTrigger)(popupState)), /* @__PURE__ */ react.createElement(_elementor_icons.DotsVerticalIcon, { fontSize: "tiny" })))), /* @__PURE__ */ react.createElement(MultiSortableGroup, { groupId: group.id }, ({ setDroppableRef, isEmpty, items }) => /* @__PURE__ */ react.createElement(_elementor_ui.List, {
			ref: setDroppableRef,
			sx: _objectSpread2({
				p: 0,
				display: "flex",
				flexDirection: "column",
				gap: 1
			}, isEmpty && {
				minHeight: 40,
				backgroundColor: "action.hover",
				borderRadius: 1
			})
		}, items.map((propId) => {
			const property = props[String(propId)];
			if (!property) return null;
			return /* @__PURE__ */ react.createElement(MultiSortableItem, {
				key: String(propId),
				id: propId
			}, ({ itemProps, itemStyle, triggerProps, triggerStyle, isDragPlaceholder: isItemDragPlaceholder }) => /* @__PURE__ */ react.createElement(MultiGroupPropertyItem, {
				sortableItemProps: itemProps,
				sortableItemStyle: itemStyle,
				prop: property,
				sortableTriggerProps: _objectSpread2(_objectSpread2({}, triggerProps), {}, { style: triggerStyle }),
				isDragPlaceholder: isItemDragPlaceholder,
				groups: allGroups,
				existingLabels: Object.values(props).map((p) => p.label),
				onDelete: onPropertyDelete,
				onUpdate: (data) => onPropertyUpdate(property.overrideKey, data)
			}));
		})))), /* @__PURE__ */ react.createElement(_elementor_ui.Menu, _objectSpread2(_objectSpread2({}, (0, _elementor_ui.bindMenu)(popupState)), {}, {
			anchorOrigin: {
				vertical: "bottom",
				horizontal: "right"
			},
			transformOrigin: {
				vertical: "top",
				horizontal: "right"
			}
		}), /* @__PURE__ */ react.createElement(_elementor_editor_ui.MenuListItem, {
			sx: { minWidth: "160px" },
			onClick: handleRenameClick
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "caption",
			sx: { color: "text.primary" }
		}, (0, _wordpress_i18n.__)("Rename", "elementor-pro"))), hasProperties ? /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, {
			title: (0, _wordpress_i18n.__)("To delete the group, first remove all the properties", "elementor-pro"),
			placement: "right"
		}, /* @__PURE__ */ react.createElement("span", null, /* @__PURE__ */ react.createElement(_elementor_editor_ui.MenuListItem, { disabled: true }, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "caption",
			sx: { color: "text.disabled" }
		}, (0, _wordpress_i18n.__)("Delete", "elementor-pro"))))) : /* @__PURE__ */ react.createElement(_elementor_editor_ui.MenuListItem, { onClick: handleDeleteClick }, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "caption",
			sx: { color: "error.light" }
		}, (0, _wordpress_i18n.__)("Delete", "elementor-pro")))));
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/components/component-properties-panel/properties-empty-state.tsx
	function PropertiesEmptyState({ introductionRef }) {
		const [isOpen, setIsOpen] = (0, react.useState)(false);
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			alignItems: "center",
			justifyContent: "flex-start",
			height: "100%",
			color: "text.secondary",
			sx: {
				px: 2.5,
				pt: 10,
				pb: 5.5
			},
			gap: 1
		}, /* @__PURE__ */ react.createElement(_elementor_icons.ComponentPropListIcon, { fontSize: "large" }), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			align: "center",
			variant: "subtitle2"
		}, (0, _wordpress_i18n.__)("Add your first property", "elementor-pro")), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			align: "center",
			variant: "caption"
		}, (0, _wordpress_i18n.__)("Make instances flexible while keeping design synced.", "elementor-pro")), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			align: "center",
			variant: "caption"
		}, (0, _wordpress_i18n.__)("Select any element, then click + next to a setting to expose it.", "elementor-pro")), /* @__PURE__ */ react.createElement(_elementor_ui.Link, {
			variant: "caption",
			color: "secondary",
			sx: { textDecorationLine: "underline" },
			onClick: () => setIsOpen(true)
		}, (0, _wordpress_i18n.__)("Learn more", "elementor-pro"))), /* @__PURE__ */ react.createElement(ComponentIntroduction, {
			anchorRef: introductionRef,
			shouldShowIntroduction: isOpen,
			onClose: () => setIsOpen(false)
		}));
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/components/component-properties-panel/property-item.tsx
	function PropertyItem({ prop, sortableTriggerProps, isDragPlaceholder, groups, existingLabels, onDelete, onUpdate }) {
		var _popoverState$anchorE;
		const popoverState = (0, _elementor_ui.usePopupState)({ variant: "popover" });
		const icon = getElementIcon(prop);
		const popoverProps = (0, _elementor_ui.bindPopover)(popoverState);
		const handleSubmit = (data) => {
			onUpdate(data);
			popoverState.close();
		};
		const handleDelete = (event) => {
			event.stopPropagation();
			onDelete(prop.overrideKey);
		};
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.Box, _objectSpread2(_objectSpread2({}, (0, _elementor_ui.bindTrigger)(popoverState)), {}, {
			"data-testid": "component-property-item",
			sx: {
				position: "relative",
				pl: .5,
				pr: 1,
				py: .25,
				minHeight: 28,
				borderRadius: 1,
				border: "1px solid",
				borderColor: "divider",
				display: "flex",
				alignItems: "center",
				gap: .5,
				opacity: isDragPlaceholder ? .5 : 1,
				cursor: "pointer",
				"&:hover": { backgroundColor: "action.hover" },
				"&:hover .sortable-trigger": { visibility: "visible" },
				"& .sortable-trigger": { visibility: "hidden" },
				"&:hover .delete-button": { visibility: "visible" },
				"& .delete-button": { visibility: "hidden" }
			}
		}), /* @__PURE__ */ react.createElement(SortableTrigger, sortableTriggerProps), /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			display: "flex",
			alignItems: "center",
			color: "text.primary",
			fontSize: 12,
			padding: .25
		} }, /* @__PURE__ */ react.createElement("i", { className: icon })), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "caption",
			sx: {
				color: "text.primary",
				flexGrow: 1,
				fontSize: 10
			}
		}, prop.label), /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
			size: "tiny",
			onClick: handleDelete,
			"aria-label": "Delete property",
			sx: { p: .25 }
		}, /* @__PURE__ */ react.createElement(_elementor_icons.XIcon, { fontSize: "tiny" }))), /* @__PURE__ */ react.createElement(_elementor_ui.Popover, _objectSpread2(_objectSpread2({}, popoverProps), {}, {
			anchorOrigin: {
				vertical: "bottom",
				horizontal: "left"
			},
			transformOrigin: {
				vertical: "top",
				horizontal: "left"
			},
			PaperProps: { sx: { width: (_popoverState$anchorE = popoverState.anchorEl) === null || _popoverState$anchorE === void 0 ? void 0 : _popoverState$anchorE.getBoundingClientRect().width } }
		}), /* @__PURE__ */ react.createElement(OverridablePropForm, {
			onSubmit: handleSubmit,
			currentValue: prop,
			groups,
			existingLabels,
			sx: { width: "100%" }
		})));
	}
	function getElementIcon(prop) {
		const elType = prop.elType === "widget" ? prop.widgetType : prop.elType;
		const widgetsCache = (0, _elementor_editor_elements.getWidgetsCache)();
		if (!widgetsCache) return "eicon-apps";
		const widgetConfig = widgetsCache[elType];
		return (widgetConfig === null || widgetConfig === void 0 ? void 0 : widgetConfig.icon) || "eicon-apps";
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/components/component-properties-panel/properties-group.tsx
	function PropertiesGroup({ group, props, allGroups, sortableTriggerProps, isDragPlaceholder, onPropsReorder, onPropertyDelete, onPropertyUpdate, onGroupDelete, editableLabelProps }) {
		const groupProps = group.props.map((propId) => props[propId]).filter((prop) => Boolean(prop));
		const popupState = (0, _elementor_ui.usePopupState)({
			variant: "popover",
			disableAutoFocus: true
		});
		const { editableRef, isEditing, error, getEditableProps, setEditingGroupId, editingGroupId } = editableLabelProps;
		const hasProperties = group.props.length > 0;
		const isThisGroupEditing = isEditing && editingGroupId === group.id;
		const handleRenameClick = () => {
			popupState.close();
			setEditingGroupId(group.id);
		};
		const handleDeleteClick = () => {
			popupState.close();
			onGroupDelete(group.id);
		};
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: { opacity: isDragPlaceholder ? .5 : 1 } }, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, { gap: 1 }, /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			className: "group-header",
			sx: {
				position: "relative",
				"&:hover .group-sortable-trigger": { visibility: "visible" },
				"& .group-sortable-trigger": { visibility: "hidden" },
				"&:hover .group-menu": { visibility: "visible" },
				"& .group-menu": { visibility: "hidden" }
			}
		}, /* @__PURE__ */ react.createElement(SortableTrigger, _objectSpread2({ triggerClassName: "group-sortable-trigger" }, sortableTriggerProps)), /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			alignItems: "center",
			justifyContent: "space-between",
			gap: 2
		}, isThisGroupEditing ? /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			height: 28,
			display: "flex",
			alignItems: "center",
			border: 2,
			borderColor: "text.secondary",
			borderRadius: 1,
			pl: .5,
			flexGrow: 1,
			overflow: "hidden",
			textOverflow: "ellipsis",
			whiteSpace: "nowrap",
			width: "100%"
		} }, /* @__PURE__ */ react.createElement(_elementor_editor_ui.EditableField, _objectSpread2({
			ref: editableRef,
			as: _elementor_ui.Typography,
			variant: "caption",
			error: error !== null && error !== void 0 ? error : void 0,
			sx: {
				color: "text.primary",
				fontWeight: 400,
				lineHeight: 1.66
			}
		}, getEditableProps()))) : /* @__PURE__ */ react.createElement(_elementor_editor_ui.EllipsisWithTooltip, {
			title: group.label,
			as: _elementor_ui.Typography,
			variant: "caption",
			sx: {
				color: "text.primary",
				fontWeight: 400,
				lineHeight: 1.66
			}
		}), /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, _objectSpread2({
			className: "group-menu",
			size: "tiny",
			sx: {
				p: .25,
				visibility: isThisGroupEditing ? "visible" : void 0
			},
			"aria-label": (0, _wordpress_i18n.__)("Group actions", "elementor-pro")
		}, (0, _elementor_ui.bindTrigger)(popupState)), /* @__PURE__ */ react.createElement(_elementor_icons.DotsVerticalIcon, { fontSize: "tiny" })))), /* @__PURE__ */ react.createElement(_elementor_ui.List, { sx: {
			p: 0,
			display: "flex",
			flexDirection: "column",
			gap: 1
		} }, /* @__PURE__ */ react.createElement(SortableProvider, {
			value: group.props,
			onChange: onPropsReorder
		}, groupProps.map((prop) => /* @__PURE__ */ react.createElement(SortableItem, {
			key: prop.overrideKey,
			id: prop.overrideKey
		}, ({ triggerProps, triggerStyle, isDragPlaceholder: isItemDragPlaceholder }) => /* @__PURE__ */ react.createElement(PropertyItem, {
			prop,
			sortableTriggerProps: _objectSpread2(_objectSpread2({}, triggerProps), {}, { style: triggerStyle }),
			isDragPlaceholder: isItemDragPlaceholder,
			groups: allGroups,
			existingLabels: Object.values(props).map((p) => p.label),
			onDelete: onPropertyDelete,
			onUpdate: (data) => onPropertyUpdate(prop.overrideKey, data)
		})))))), /* @__PURE__ */ react.createElement(_elementor_ui.Menu, _objectSpread2(_objectSpread2({}, (0, _elementor_ui.bindMenu)(popupState)), {}, {
			anchorOrigin: {
				vertical: "bottom",
				horizontal: "right"
			},
			transformOrigin: {
				vertical: "top",
				horizontal: "right"
			}
		}), /* @__PURE__ */ react.createElement(_elementor_editor_ui.MenuListItem, {
			sx: { minWidth: "160px" },
			onClick: handleRenameClick
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "caption",
			sx: { color: "text.primary" }
		}, (0, _wordpress_i18n.__)("Rename", "elementor-pro"))), /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, {
			title: hasProperties ? (0, _wordpress_i18n.__)("To delete the group, first remove all the properties", "elementor-pro") : "",
			placement: "right"
		}, /* @__PURE__ */ react.createElement("span", null, /* @__PURE__ */ react.createElement(_elementor_editor_ui.MenuListItem, {
			onClick: handleDeleteClick,
			disabled: hasProperties
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "caption",
			sx: { color: hasProperties ? "text.disabled" : "error.light" }
		}, (0, _wordpress_i18n.__)("Delete", "elementor-pro")))))));
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/store/actions/rename-overridable-group.ts
	function renameOverridableGroup({ componentId, groupId, label }) {
		const overridableProps = _elementor_editor_components.componentsSelectors.getOverridableProps(componentId);
		if (!overridableProps) return false;
		if (!overridableProps.groups.items[groupId]) return false;
		const updatedGroups = renameGroup(overridableProps.groups, groupId, label);
		_elementor_editor_components.componentsActions.setOverridableProps(componentId, _objectSpread2(_objectSpread2({}, overridableProps), {}, { groups: updatedGroups }));
		return true;
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/components/component-properties-panel/utils/validate-group-label.ts
	var ERROR_MESSAGES$1 = {
		EMPTY_NAME: (0, _wordpress_i18n.__)("Group name is required", "elementor-pro"),
		DUPLICATE_NAME: (0, _wordpress_i18n.__)("Group name already exists", "elementor-pro")
	};
	function validateGroupLabel(label, existingGroups) {
		const trimmedLabel = label.trim();
		if (!trimmedLabel) return ERROR_MESSAGES$1.EMPTY_NAME;
		if (Object.values(existingGroups).some((group) => group.label === trimmedLabel)) return ERROR_MESSAGES$1.DUPLICATE_NAME;
		return "";
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/components/component-properties-panel/use-current-editable-item.ts
	function useCurrentEditableItem() {
		var _overridableProps$gro;
		var _overridableProps$gro2;
		var _currentGroup$label;
		const [editingGroupId, setEditingGroupId] = (0, react.useState)(null);
		const currentComponentId = (0, _elementor_editor_components.useCurrentComponentId)();
		const overridableProps = (0, _elementor_editor_components.useOverridableProps)(currentComponentId);
		const allGroupsRecord = (_overridableProps$gro = overridableProps === null || overridableProps === void 0 || (_overridableProps$gro2 = overridableProps.groups) === null || _overridableProps$gro2 === void 0 ? void 0 : _overridableProps$gro2.items) !== null && _overridableProps$gro !== void 0 ? _overridableProps$gro : {};
		const currentGroup = editingGroupId ? allGroupsRecord[editingGroupId] : null;
		const validateLabel = (newLabel) => {
			return validateGroupLabel(newLabel, Object.fromEntries(Object.entries(allGroupsRecord).filter(([id]) => id !== editingGroupId))) || null;
		};
		const handleSubmit = (newLabel) => {
			if (!editingGroupId || !currentComponentId) throw new Error((0, _wordpress_i18n.__)("Group ID or component ID is missing", "elementor-pro"));
			renameOverridableGroup({
				componentId: currentComponentId,
				groupId: editingGroupId,
				label: newLabel
			});
			(0, _elementor_editor_documents.setDocumentModifiedStatus)(true);
		};
		const { ref: editableRef, openEditMode, isEditing, error, getProps: getEditableProps } = (0, _elementor_editor_ui.useEditable)({
			value: (_currentGroup$label = currentGroup === null || currentGroup === void 0 ? void 0 : currentGroup.label) !== null && _currentGroup$label !== void 0 ? _currentGroup$label : "",
			onSubmit: handleSubmit,
			validation: validateLabel
		});
		return {
			editableRef,
			isEditing,
			error,
			getEditableProps,
			setEditingGroupId: (groupId) => {
				setEditingGroupId(groupId);
				openEditMode();
			},
			editingGroupId
		};
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/components/component-properties-panel/apply-multi-sortable-update.ts
	function hasDuplicateIds(updated) {
		return Object.entries(updated).some(([key, ids]) => key !== "__cpPropGroupHeaders__" && Array.isArray(ids) && ids.length !== new Set(ids).size);
	}
	function applyMultiSortableUpdate(updated, currentComponentId) {
		var _updated$COMPONENT_PR;
		const latest = _elementor_editor_components.componentsSelectors.getOverridableProps(currentComponentId);
		if (!latest) return;
		const newOrder = (_updated$COMPONENT_PR = updated["__cpPropGroupHeaders__"]) !== null && _updated$COMPONENT_PR !== void 0 ? _updated$COMPONENT_PR : [];
		const { items, props } = buildGroupsAndProps(updated, latest);
		_elementor_editor_components.componentsActions.setOverridableProps(currentComponentId, _objectSpread2(_objectSpread2({}, latest), {}, {
			props,
			groups: {
				items,
				order: newOrder.filter((id) => id in items)
			}
		}));
		(0, _elementor_editor_documents.setDocumentModifiedStatus)(true);
	}
	function buildGroupsAndProps(updated, latest) {
		const items = _objectSpread2({}, latest.groups.items);
		const props = _objectSpread2({}, latest.props);
		for (const [groupId, propKeys] of Object.entries(updated)) {
			if (groupId === "__cpPropGroupHeaders__" || !Array.isArray(propKeys)) continue;
			const uniquePropKeys = [...new Set(propKeys)];
			const group = items[groupId];
			if (group) items[groupId] = _objectSpread2(_objectSpread2({}, group), {}, { props: uniquePropKeys });
			for (const propKey of uniquePropKeys) {
				const prop = props[propKey];
				if (prop && prop.groupId !== groupId) props[propKey] = _objectSpread2(_objectSpread2({}, prop), {}, { groupId });
			}
		}
		return {
			items,
			props
		};
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/components/component-properties-panel/use-multi-sortable-sync.ts
	function useMultiSortableSync({ currentComponentId, overridableProps, groups, onPropertyDelete, onPropertyUpdate }) {
		const [syncNonce, setSyncNonce] = (0, react.useState)(0);
		const handlePropertyDelete = (propKey) => {
			onPropertyDelete(propKey);
			setSyncNonce((n) => n + 1);
		};
		const handlePropertyUpdate = (overrideKey, data) => {
			const existing = overridableProps.props[overrideKey];
			const groupChanged = existing ? data.group !== existing.groupId : false;
			onPropertyUpdate(overrideKey, data);
			if (groupChanged) setSyncNonce((n) => n + 1);
		};
		const handleSortableChange = (updated) => {
			applyMultiSortableUpdate(updated, currentComponentId);
			if (hasDuplicateIds(updated)) setSyncNonce((n) => n + 1);
		};
		const sortableValue = (0, react.useMemo)(() => {
			const headers = groups.map((g) => g.id);
			const byGroup = Object.fromEntries(groups.map((g) => [g.id, [...g.props]]));
			return _objectSpread2({ [COMPONENT_PROP_GROUP_HEADERS_KEY]: headers }, byGroup);
		}, [groups]);
		return {
			sortableKey: `${groups.length}:${syncNonce}`,
			sortableValue,
			handlePropertyDelete,
			handlePropertyUpdate,
			handleSortableChange
		};
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/components/component-properties-panel/utils/generate-unique-label.ts
	var DEFAULT_NEW_GROUP_LABEL = "New group";
	function generateUniqueLabel(groups) {
		const existingLabels = new Set(groups.map((group) => group.label));
		if (!existingLabels.has(DEFAULT_NEW_GROUP_LABEL)) return DEFAULT_NEW_GROUP_LABEL;
		let index = 1;
		let newLabel = `${DEFAULT_NEW_GROUP_LABEL}-${index}`;
		while (existingLabels.has(newLabel)) {
			index++;
			newLabel = `${DEFAULT_NEW_GROUP_LABEL}-${index}`;
		}
		return newLabel;
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/components/component-properties-panel/component-properties-panel-content.tsx
	function ComponentPropertiesPanelContent({ onClose }) {
		const currentComponentId = (0, _elementor_editor_components.useCurrentComponentId)();
		const overridableProps = (0, _elementor_editor_components.useSanitizeOverridableProps)(currentComponentId);
		const [isAddingGroup, setIsAddingGroup] = (0, react.useState)(false);
		const introductionRef = (0, react.useRef)(null);
		const groupLabelEditable = useCurrentEditableItem();
		const groups = (0, react.useMemo)(() => {
			if (!overridableProps) return [];
			return overridableProps.groups.order.map((groupId) => {
				var _overridableProps$gro;
				return (_overridableProps$gro = overridableProps.groups.items[groupId]) !== null && _overridableProps$gro !== void 0 ? _overridableProps$gro : null;
			}).filter(Boolean);
		}, [overridableProps]);
		const allGroupsForSelect = (0, react.useMemo)(() => groups.map((group) => ({
			value: group.id,
			label: group.label
		})), [groups]);
		if (!currentComponentId || !overridableProps) return null;
		const showEmptyState = !(groups.length > 0) && !isAddingGroup;
		const handleAddGroupClick = () => {
			if (isAddingGroup) return;
			const newGroupId = (0, _elementor_utils.generateUniqueId)("group");
			const newLabel = generateUniqueLabel(groups);
			addOverridableGroup({
				componentId: currentComponentId,
				groupId: newGroupId,
				label: newLabel,
				executedBy: "user"
			});
			(0, _elementor_editor_documents.setDocumentModifiedStatus)(true);
			setIsAddingGroup(false);
			groupLabelEditable.setEditingGroupId(newGroupId);
		};
		const handlePropertyDelete = (propKey) => {
			deleteComponentOverridableProp({
				componentId: currentComponentId,
				propKey,
				executedBy: "user"
			});
			(0, _elementor_editor_documents.setDocumentModifiedStatus)(true);
		};
		const handlePropertyUpdate = (overrideKey, data) => {
			updateOverridablePropParams({
				componentId: currentComponentId,
				overrideKey,
				label: data.label,
				groupId: data.group
			});
			(0, _elementor_editor_documents.setDocumentModifiedStatus)(true);
		};
		const handleGroupDelete = (groupId) => {
			deleteOverridableGroup({
				componentId: currentComponentId,
				groupId
			});
			(0, _elementor_editor_documents.setDocumentModifiedStatus)(true);
		};
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_editor_panels.PanelHeader, {
			sx: {
				justifyContent: "start",
				pl: 1.5,
				pr: 1,
				py: 1
			},
			"data-testid": "component-property-panel-header"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			alignItems: "center",
			gap: .5,
			flexGrow: 1
		}, /* @__PURE__ */ react.createElement(_elementor_icons.ComponentPropListIcon, { fontSize: "tiny" }), /* @__PURE__ */ react.createElement(_elementor_editor_panels.PanelHeaderTitle, { variant: "subtitle2" }, (0, _wordpress_i18n.__)("Component properties", "elementor-pro"))), !showEmptyState && /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, { title: (0, _wordpress_i18n.__)("Add new group", "elementor-pro") }, /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
			size: "tiny",
			"aria-label": (0, _wordpress_i18n.__)("Add new group", "elementor-pro"),
			onClick: handleAddGroupClick
		}, /* @__PURE__ */ react.createElement(_elementor_icons.FolderPlusIcon, { fontSize: "tiny" }))), /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, { title: (0, _wordpress_i18n.__)("Close panel", "elementor-pro") }, /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
			ref: introductionRef,
			size: "tiny",
			"aria-label": (0, _wordpress_i18n.__)("Close panel", "elementor-pro"),
			onClick: onClose
		}, /* @__PURE__ */ react.createElement(_elementor_icons.XIcon, { fontSize: "tiny" })))), /* @__PURE__ */ react.createElement(_elementor_ui.Divider, null), /* @__PURE__ */ react.createElement(_elementor_editor_panels.PanelBody, null, showEmptyState ? /* @__PURE__ */ react.createElement(PropertiesEmptyState, { introductionRef }) : /* @__PURE__ */ react.createElement(_elementor_ui.List, { sx: {
			p: 2,
			display: "flex",
			flexDirection: "column",
			gap: 2
		} }, isMultiGroupSortingEnabled ? /* @__PURE__ */ react.createElement(MultiGroupSortableContent, {
			currentComponentId,
			overridableProps,
			groups,
			allGroupsForSelect,
			groupLabelEditable,
			setIsAddingGroup,
			onPropertyDelete: handlePropertyDelete,
			onPropertyUpdate: handlePropertyUpdate,
			onGroupDelete: handleGroupDelete
		}) : /* @__PURE__ */ react.createElement(LegacySortableContent, {
			currentComponentId,
			overridableProps,
			groups,
			allGroupsForSelect,
			groupLabelEditable,
			setIsAddingGroup,
			onPropertyDelete: handlePropertyDelete,
			onPropertyUpdate: handlePropertyUpdate,
			onGroupDelete: handleGroupDelete
		}))));
	}
	function LegacySortableContent({ currentComponentId, overridableProps, groups, allGroupsForSelect, groupLabelEditable, setIsAddingGroup, onPropertyDelete, onPropertyUpdate, onGroupDelete }) {
		const groupIds = overridableProps.groups.order;
		const handleGroupsReorder = (newOrder) => {
			reorderOverridableGroups({
				componentId: currentComponentId,
				newOrder
			});
			(0, _elementor_editor_documents.setDocumentModifiedStatus)(true);
		};
		const handlePropsReorder = (groupId, newPropsOrder) => {
			reorderGroupProps({
				componentId: currentComponentId,
				groupId,
				newPropsOrder
			});
			(0, _elementor_editor_documents.setDocumentModifiedStatus)(true);
		};
		return /* @__PURE__ */ react.createElement(SortableProvider, {
			value: groupIds,
			onChange: handleGroupsReorder
		}, groups.map((group) => /* @__PURE__ */ react.createElement(SortableItem, {
			key: group.id,
			id: group.id
		}, ({ triggerProps, triggerStyle, isDragPlaceholder }) => /* @__PURE__ */ react.createElement(PropertiesGroup, {
			group,
			props: overridableProps.props,
			allGroups: allGroupsForSelect,
			allGroupsRecord: overridableProps.groups.items,
			sortableTriggerProps: _objectSpread2(_objectSpread2({}, triggerProps), {}, { style: triggerStyle }),
			isDragPlaceholder,
			setIsAddingGroup,
			onPropsReorder: (newOrder) => handlePropsReorder(group.id, newOrder),
			onPropertyDelete,
			onPropertyUpdate,
			editableLabelProps: groupLabelEditable,
			onGroupDelete
		}))));
	}
	function MultiGroupSortableContent({ currentComponentId, overridableProps, groups, allGroupsForSelect, groupLabelEditable, onPropertyDelete, onPropertyUpdate, onGroupDelete }) {
		const { sortableKey, sortableValue, handlePropertyDelete: handlePropertyDeleteWithSortableResync, handlePropertyUpdate: handlePropertyUpdateWithSortableResync, handleSortableChange } = useMultiSortableSync({
			currentComponentId,
			overridableProps,
			groups,
			onPropertyDelete,
			onPropertyUpdate
		});
		return /* @__PURE__ */ react.createElement(MultiSortableRoot, {
			key: sortableKey,
			value: sortableValue,
			onChange: handleSortableChange
		}, /* @__PURE__ */ react.createElement(MultiSortableGroup, { groupId: COMPONENT_PROP_GROUP_HEADERS_KEY }, ({ setDroppableRef, items }) => /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			ref: setDroppableRef,
			direction: "column",
			sx: {
				width: "100%",
				gap: 2
			}
		}, items.map((headerItemId) => {
			const groupId = String(headerItemId);
			const group = overridableProps.groups.items[groupId];
			if (!group) return null;
			return /* @__PURE__ */ react.createElement(MultiSortableItem, {
				key: groupId,
				id: headerItemId
			}, ({ itemProps, itemStyle, triggerProps, triggerStyle, isDragPlaceholder }) => /* @__PURE__ */ react.createElement(MultiGroupPropertiesGroup, {
				sortableItemProps: itemProps,
				sortableItemStyle: itemStyle,
				group,
				props: overridableProps.props,
				allGroups: allGroupsForSelect,
				sortableTriggerProps: _objectSpread2(_objectSpread2({}, triggerProps), {}, { style: triggerStyle }),
				isDragPlaceholder,
				onPropertyDelete: handlePropertyDeleteWithSortableResync,
				onPropertyUpdate: handlePropertyUpdateWithSortableResync,
				editableLabelProps: groupLabelEditable,
				onGroupDelete
			}));
		}))));
	}
	var { panel, usePanelActions } = (0, _elementor_editor_panels.__createPanel)({
		id: "component-properties-panel",
		component: ComponentPropertiesPanel
	});
	function ComponentPropertiesPanel() {
		const { close: closePanel } = usePanelActions();
		const { open: openEditingPanel } = (0, _elementor_editor_editing_panel.usePanelActions)();
		return /* @__PURE__ */ react.createElement(_elementor_editor_ui.ThemeProvider, null, /* @__PURE__ */ react.createElement(_elementor_ui.ErrorBoundary, { fallback: /* @__PURE__ */ react.createElement(ErrorBoundaryFallback, null) }, /* @__PURE__ */ react.createElement(_elementor_editor_panels.Panel, { "data-testid": "component-properties-panel" }, /* @__PURE__ */ react.createElement(ComponentPropertiesPanelContent, { onClose: () => {
			closePanel();
			openEditingPanel();
		} }))));
	}
	var ErrorBoundaryFallback = () => /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
		role: "alert",
		sx: {
			minHeight: "100%",
			p: 2
		}
	}, /* @__PURE__ */ react.createElement(_elementor_ui.Alert, {
		severity: "error",
		sx: {
			mb: 2,
			maxWidth: 400,
			textAlign: "center"
		}
	}, /* @__PURE__ */ react.createElement("strong", null, (0, _wordpress_i18n.__)("Something went wrong", "elementor-pro"))));
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/components/component-panel-header/component-badge.tsx
	var ComponentsBadge = react.forwardRef(({ overridablePropsCount, onClick }, ref) => {
		const isFirstExposedProperty = usePrevious(overridablePropsCount) === 0 && overridablePropsCount === 1;
		return /* @__PURE__ */ react.createElement(StyledBadge, {
			ref,
			color: "primary",
			key: overridablePropsCount,
			invisible: overridablePropsCount === 0,
			animate: isFirstExposedProperty,
			anchorOrigin: {
				vertical: "top",
				horizontal: "right"
			},
			badgeContent: /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: { animation: !isFirstExposedProperty ? `${slideUp} 300ms ease-out` : "none" } }, overridablePropsCount),
			"data-testid": "component-panel-header-properties-badge"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, { title: (0, _wordpress_i18n.__)("Component properties", "elementor-pro") }, /* @__PURE__ */ react.createElement(_elementor_ui.ToggleButton, {
			value: "exposed properties",
			size: "tiny",
			onClick,
			"aria-label": (0, _wordpress_i18n.__)("Component properties", "elementor-pro")
		}, /* @__PURE__ */ react.createElement(_elementor_icons.ComponentPropListIcon, { fontSize: "tiny" }))));
	});
	var StyledBadge = (0, _elementor_ui.styled)(_elementor_ui.Badge, { shouldForwardProp: (prop) => prop !== "animate" })(({ theme, animate }) => ({ "& .MuiBadge-badge": {
		minWidth: theme.spacing(2),
		height: theme.spacing(2),
		minHeight: theme.spacing(2),
		maxWidth: theme.spacing(2),
		fontSize: theme.typography.caption.fontSize,
		animation: animate ? `${bounceIn} 300ms ease-out` : "none"
	} }));
	function usePrevious(value) {
		const ref = (0, react.useRef)(value);
		(0, react.useEffect)(() => {
			ref.current = value;
		}, [value]);
		return ref.current;
	}
	var bounceIn = _elementor_ui.keyframes`
	0% { transform: scale(0) translate(50%, 50%); opacity: 0; }
	70% { transform: scale(1.1) translate(50%, -50%); opacity: 1; }
	100% { transform: scale(1) translate(50%, -50%); opacity: 1; }
`;
	var slideUp = _elementor_ui.keyframes`
	from { transform: translateY(100%); opacity: 0; }
	to { transform: translateY(0); opacity: 1; }
`;
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/components/component-panel-header/component-panel-header.tsx
	var MESSAGE_KEY = "components-properties-introduction";
	var ComponentPanelHeader = () => {
		var _useCurrentComponent;
		const { id: currentComponentId, uid: componentUid } = (_useCurrentComponent = (0, _elementor_editor_components.useCurrentComponent)()) !== null && _useCurrentComponent !== void 0 ? _useCurrentComponent : {
			id: null,
			uid: null
		};
		const overridableProps = (0, _elementor_editor_components.useSanitizeOverridableProps)(currentComponentId);
		const onBack = useNavigateBack();
		const componentName = getComponentName();
		const [isMessageSuppressed, suppressMessage] = (0, _elementor_editor_current_user.useSuppressedMessage)(MESSAGE_KEY);
		const [shouldShowIntroduction, setShouldShowIntroduction] = react.useState(!isMessageSuppressed);
		const { open: openPropertiesPanel } = usePanelActions();
		const overridablePropsCount = overridableProps ? Object.keys(overridableProps.props).length : 0;
		const anchorRef = react.useRef(null);
		if (!currentComponentId) return null;
		const handleCloseIntroduction = () => {
			suppressMessage();
			setShouldShowIntroduction(false);
		};
		const handleOpenPropertiesPanel = () => {
			openPropertiesPanel();
			(0, _elementor_editor_components.trackComponentEvent)({
				action: "propertiesPanelOpened",
				source: "user",
				executedBy: "user",
				component_uid: componentUid,
				properties_count: overridablePropsCount
			});
		};
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, { "data-testid": "component-panel-header" }, /* @__PURE__ */ react.createElement(_elementor_editor_panels.PanelHeader, { sx: {
			justifyContent: "start",
			px: 2
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, { title: (0, _wordpress_i18n.__)("Back", "elementor-pro") }, /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
			size: "tiny",
			onClick: onBack,
			"aria-label": (0, _wordpress_i18n.__)("Back", "elementor-pro")
		}, /* @__PURE__ */ react.createElement(_elementor_icons.ArrowLeftIcon, { fontSize: "tiny" }))), /* @__PURE__ */ react.createElement(_elementor_icons.ComponentsFilledIcon, {
			fontSize: "tiny",
			stroke: "currentColor"
		}), /* @__PURE__ */ react.createElement(_elementor_editor_ui.EllipsisWithTooltip, {
			title: componentName,
			as: _elementor_ui.Typography,
			variant: "caption",
			sx: {
				fontWeight: 500,
				flexGrow: 1
			}
		}), /* @__PURE__ */ react.createElement(ComponentsBadge, {
			overridablePropsCount,
			ref: anchorRef,
			onClick: handleOpenPropertiesPanel
		})), /* @__PURE__ */ react.createElement(_elementor_ui.Divider, null), /* @__PURE__ */ react.createElement(ComponentIntroduction, {
			anchorRef,
			shouldShowIntroduction,
			onClose: handleCloseIntroduction
		}));
	};
	function getComponentName() {
		var _path$at;
		var _currentDocument$cont;
		var _currentDocument$cont2;
		const { instanceTitle } = (_path$at = (0, _elementor_store.__getState)()[_elementor_editor_components.SLICE_NAME].path.at(-1)) !== null && _path$at !== void 0 ? _path$at : {};
		if (instanceTitle) return instanceTitle;
		const currentDocument = (0, _elementor_editor_documents.getV1DocumentsManager)().getCurrent();
		return (_currentDocument$cont = currentDocument === null || currentDocument === void 0 || (_currentDocument$cont2 = currentDocument.container) === null || _currentDocument$cont2 === void 0 || (_currentDocument$cont2 = _currentDocument$cont2.settings) === null || _currentDocument$cont2 === void 0 ? void 0 : _currentDocument$cont2.get("post_title")) !== null && _currentDocument$cont !== void 0 ? _currentDocument$cont : "";
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/store/actions/archive-component.ts
	var successNotification = (componentId, componentName) => ({
		type: "success",
		message: (0, _wordpress_i18n.__)("Successfully deleted component %s", "elementor-pro").replace("%s", componentName),
		id: `success-archived-components-notification-${componentId}`
	});
	var archiveComponent = (componentId, componentName) => {
		_elementor_editor_components.componentsActions.archive(componentId);
		(0, _elementor_editor_documents.setDocumentModifiedStatus)(true);
		(0, _elementor_editor_notifications.notify)(successNotification(componentId, componentName));
	};
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/store/actions/rename-component.ts
	var TITLE_EXTERNAL_CHANGE_COMMAND = "title_external_change";
	var renameComponent = (componentUid, newName) => {
		_elementor_editor_components.componentsActions.rename(componentUid, newName);
		(0, _elementor_editor_documents.setDocumentModifiedStatus)(true);
		refreshComponentInstanceTitles(componentUid);
	};
	function refreshComponentInstanceTitles(componentUid) {
		const documentContainer = getDocumentContainer();
		if (!documentContainer) return;
		findComponentInstancesByUid(documentContainer, componentUid).forEach((element) => {
			var _element$model$trigge;
			var _element$model;
			(_element$model$trigge = (_element$model = element.model).trigger) === null || _element$model$trigge === void 0 || _element$model$trigge.call(_element$model, TITLE_EXTERNAL_CHANGE_COMMAND);
		});
	}
	function getDocumentContainer() {
		var _documentsManager$get;
		const documentsManager = (0, _elementor_editor_documents.getV1DocumentsManager)();
		return documentsManager === null || documentsManager === void 0 || (_documentsManager$get = documentsManager.getCurrent()) === null || _documentsManager$get === void 0 ? void 0 : _documentsManager$get.container;
	}
	function findComponentInstancesByUid(documentContainer, componentUid) {
		return (0, _elementor_editor_elements.getAllDescendants)(documentContainer).filter((element) => {
			const widgetType = element.model.get("widgetType");
			const editorSettings = element.model.get("editor_settings");
			return widgetType === _elementor_editor_components.COMPONENT_WIDGET_TYPE && (editorSettings === null || editorSettings === void 0 ? void 0 : editorSettings.component_uid) === componentUid;
		});
	}
	var baseComponentSchema = _elementor_schema.z.string().trim().max(50, (0, _wordpress_i18n.__)("Component name is too long. Please keep it under 50 characters.", "elementor-pro"));
	var createBaseComponentSchema = (existingNames) => {
		return _elementor_schema.z.object({ componentName: baseComponentSchema.refine((value) => !existingNames.includes(value), { message: (0, _wordpress_i18n.__)("Component name already exists", "elementor-pro") }) });
	};
	var createSubmitComponentSchema = (existingNames) => {
		const baseSchema = createBaseComponentSchema(existingNames);
		return baseSchema.extend({ componentName: baseSchema.shape.componentName.refine((value) => value.length > 0, { message: (0, _wordpress_i18n.__)("Component name is required.", "elementor-pro") }).refine((value) => value.length >= 2, { message: (0, _wordpress_i18n.__)("Component name is too short. Please enter at least 2 characters.", "elementor-pro") }) });
	};
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/utils/component-name-validation.ts
	function validateComponentName(label) {
		var _componentsSelectors$;
		var _componentsSelectors$2;
		var _formattedErrors$comp;
		var _formattedErrors$comp2;
		const result = createSubmitComponentSchema((_componentsSelectors$ = (_componentsSelectors$2 = _elementor_editor_components.componentsSelectors.getComponents()) === null || _componentsSelectors$2 === void 0 ? void 0 : _componentsSelectors$2.map(({ name }) => name)) !== null && _componentsSelectors$ !== void 0 ? _componentsSelectors$ : []).safeParse({ componentName: label.toLowerCase() });
		if (result.success) return {
			isValid: true,
			errorMessage: null
		};
		const formattedErrors = result.error.format();
		return {
			isValid: false,
			errorMessage: (_formattedErrors$comp = (_formattedErrors$comp2 = formattedErrors.componentName) === null || _formattedErrors$comp2 === void 0 ? void 0 : _formattedErrors$comp2._errors[0]) !== null && _formattedErrors$comp !== void 0 ? _formattedErrors$comp : formattedErrors._errors[0]
		};
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/utils/create-component-model.ts
	var createComponentModel = (component) => {
		var _component$id;
		return {
			elType: "widget",
			widgetType: "e-component",
			settings: { component_instance: {
				$$type: "component-instance",
				value: { component_id: {
					$$type: "number",
					value: (_component$id = component.id) !== null && _component$id !== void 0 ? _component$id : component.uid
				} }
			} },
			editor_settings: { component_uid: component.uid }
		};
	};
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/utils/get-container-for-new-element.ts
	var getContainerForNewElement = () => {
		var _container;
		const currentDocumentContainer = (0, _elementor_editor_elements.getCurrentDocumentContainer)();
		const selectedElement = getSelectedElementContainer();
		let container;
		let options;
		if (selectedElement) switch (selectedElement.model.get("elType")) {
			case "widget": {
				var _selectedElement$view;
				var _selectedElement$view2;
				container = selectedElement === null || selectedElement === void 0 ? void 0 : selectedElement.parent;
				const selectedElIndex = (_selectedElement$view = (_selectedElement$view2 = selectedElement.view) === null || _selectedElement$view2 === void 0 ? void 0 : _selectedElement$view2._index) !== null && _selectedElement$view !== void 0 ? _selectedElement$view : -1;
				if (selectedElIndex > -1) options = { at: selectedElIndex + 1 };
				break;
			}
			case "section":
				var _selectedElement$chil;
				container = selectedElement === null || selectedElement === void 0 || (_selectedElement$chil = selectedElement.children) === null || _selectedElement$chil === void 0 ? void 0 : _selectedElement$chil[0];
				break;
			default:
				container = selectedElement;
				break;
		}
		return {
			container: (_container = container) !== null && _container !== void 0 ? _container : currentDocumentContainer,
			options
		};
	};
	function getSelectedElementContainer() {
		const selectedElements = (0, _elementor_editor_elements.getSelectedElements)();
		if (selectedElements.length !== 1) return;
		return (0, _elementor_editor_elements.getContainer)(selectedElements[0].id);
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/components/components-tab/delete-confirmation-dialog.tsx
	function DeleteConfirmationDialog({ open, onClose, onConfirm }) {
		return /* @__PURE__ */ react.createElement(_elementor_editor_ui.ConfirmationDialog, {
			open,
			onClose
		}, /* @__PURE__ */ react.createElement(_elementor_editor_ui.ConfirmationDialog.Title, null, (0, _wordpress_i18n.__)("Delete this component?", "elementor-pro")), /* @__PURE__ */ react.createElement(_elementor_editor_ui.ConfirmationDialog.Content, null, /* @__PURE__ */ react.createElement(_elementor_editor_ui.ConfirmationDialog.ContentText, null, (0, _wordpress_i18n.__)("Existing instances on your pages will remain functional. You will no longer find this component in your list.", "elementor-pro"))), /* @__PURE__ */ react.createElement(_elementor_editor_ui.ConfirmationDialog.Actions, {
			onClose,
			onConfirm
		}));
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/components/components-tab/component-item.tsx
	function ComponentItem({ component }) {
		var _itemRef$current;
		const itemRef = (0, react.useRef)(null);
		const [isDeleteDialogOpen, setIsDeleteDialogOpen] = (0, react.useState)(false);
		const { canRename, canDelete } = (0, _elementor_editor_components.useComponentsPermissions)();
		const { data: isLicenseExpired = true, isPending: isLicenseFetching } = (0, _elementor_license_api.useIsLicenseExpired)();
		const shouldShowActions = (canRename || canDelete) && !isLicenseExpired;
		const { ref: editableRef, isEditing, openEditMode, error, getProps: getEditableProps } = (0, _elementor_editor_ui.useEditable)({
			value: component.name,
			onSubmit: (newName) => renameComponent(component.uid, newName),
			validation: validateComponentTitle
		});
		const componentModel = createComponentModel(component);
		const popupState = (0, _elementor_ui.usePopupState)({
			variant: "popover",
			disableAutoFocus: true
		});
		const handleClick = () => {
			addComponentToPage(componentModel);
		};
		const handleDragEnd = () => {
			(0, _elementor_editor_components.loadComponentsAssets)([componentModel]);
			(0, _elementor_editor_canvas.endDragElementFromPanel)();
		};
		const handleDeleteClick = () => {
			setIsDeleteDialogOpen(true);
			popupState.close();
		};
		const handleDeleteConfirm = () => {
			if (!component.id) throw new Error("Component ID is required");
			setIsDeleteDialogOpen(false);
			archiveComponent(component.id, component.name);
		};
		const handleDeleteDialogClose = () => {
			setIsDeleteDialogOpen(false);
		};
		return /* @__PURE__ */ react.createElement(ComponentItemWrapper, { isAnimating: isLicenseFetching }, /* @__PURE__ */ react.createElement(_elementor_editor_ui.WarningInfotip, {
			open: Boolean(error),
			text: error !== null && error !== void 0 ? error : "",
			placement: "bottom",
			width: (_itemRef$current = itemRef.current) === null || _itemRef$current === void 0 ? void 0 : _itemRef$current.getBoundingClientRect().width,
			offset: [0, -15]
		}, /* @__PURE__ */ react.createElement(_elementor_editor_components.ComponentItem, {
			ref: itemRef,
			component,
			disabled: isLicenseExpired,
			draggable: !isLicenseExpired,
			onDragStart: (event) => (0, _elementor_editor_canvas.startDragElementFromPanel)(componentModel, event),
			onDragEnd: handleDragEnd,
			onClick: handleClick,
			isEditing,
			error,
			nameSlot: /* @__PURE__ */ react.createElement(_elementor_editor_components.ComponentName, {
				name: component.name,
				editable: {
					ref: editableRef,
					isEditing,
					getProps: getEditableProps
				}
			}),
			endSlot: shouldShowActions ? /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, _objectSpread2(_objectSpread2({ size: "tiny" }, (0, _elementor_ui.bindTrigger)(popupState)), {}, { "aria-label": "More actions" }), /* @__PURE__ */ react.createElement(_elementor_icons.DotsVerticalIcon, { fontSize: "tiny" })) : void 0
		})), shouldShowActions && /* @__PURE__ */ react.createElement(_elementor_ui.Menu, _objectSpread2(_objectSpread2({}, (0, _elementor_ui.bindMenu)(popupState)), {}, {
			anchorOrigin: {
				vertical: "bottom",
				horizontal: "right"
			},
			transformOrigin: {
				vertical: "top",
				horizontal: "right"
			}
		}), canRename && /* @__PURE__ */ react.createElement(_elementor_editor_ui.MenuListItem, {
			sx: { minWidth: "160px" },
			primaryTypographyProps: {
				variant: "caption",
				color: "text.primary"
			},
			onClick: () => {
				popupState.close();
				openEditMode();
			}
		}, (0, _wordpress_i18n.__)("Rename", "elementor-pro")), canDelete && /* @__PURE__ */ react.createElement(_elementor_editor_ui.MenuListItem, {
			sx: { minWidth: "160px" },
			primaryTypographyProps: {
				variant: "caption",
				color: "error.light"
			},
			onClick: handleDeleteClick
		}, (0, _wordpress_i18n.__)("Delete", "elementor-pro"))), /* @__PURE__ */ react.createElement(DeleteConfirmationDialog, {
			open: isDeleteDialogOpen,
			onClose: handleDeleteDialogClose,
			onConfirm: handleDeleteConfirm
		}));
	}
	var addComponentToPage = (model) => {
		const { container, options } = getContainerForNewElement();
		if (!container) throw new Error(`Can't find container to drop new component instance at`);
		(0, _elementor_editor_components.loadComponentsAssets)([model]);
		(0, _elementor_editor_elements.dropElement)({
			containerId: container.id,
			model,
			options: _objectSpread2(_objectSpread2({}, options), {}, {
				useHistory: false,
				scrollIntoView: true
			})
		});
	};
	var validateComponentTitle = (newTitle) => {
		const result = validateComponentName(newTitle);
		if (!result.errorMessage) return null;
		return result.errorMessage;
	};
	var pulse = _elementor_ui.keyframes`
	0%, 100% { opacity: 0.4; }
	50% { opacity: 0.8; }
`;
	var ComponentItemWrapper = ({ children, isAnimating }) => /* @__PURE__ */ react.createElement(_elementor_ui.Stack, { sx: { animation: isAnimating ? `${pulse} 1.5s ease-in-out infinite` : void 0 } }, children);
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/components/components-tab/components-footer.tsx
	var GENERATE_COMPONENT_PROMPT$1 = "Tell Angie what component you want to build";
	var ANGIE_COMPONENTS_TAB_ENTRY$2 = "components_tab";
	var ANGIE_CTA_CLICKED_EVENT$1 = "angie_cta_clicked";
	var ComponentsFooter = () => {
		const { canCreate } = (0, _elementor_editor_components.useComponentsPermissions)();
		if (!canCreate || !(0, _elementor_editor_mcp.isAngieAvailable)()) return null;
		const handleCreateClick = () => {
			(0, _elementor_events.trackEvent)({
				eventName: ANGIE_CTA_CLICKED_EVENT$1,
				entry_point: ANGIE_COMPONENTS_TAB_ENTRY$2,
				has_angie_installed: true
			});
			(0, _elementor_editor_mcp.sendPromptToAngie)(GENERATE_COMPONENT_PROMPT$1);
		};
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			position: "sticky",
			bottom: 0,
			backgroundColor: "background.default",
			px: 2,
			pb: 2
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, { gap: 1 }, /* @__PURE__ */ react.createElement(_elementor_ui.Divider, null), /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			alignItems: "center",
			justifyContent: "space-between"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "caption",
			color: "text.secondary"
		}, (0, _wordpress_i18n.__)("Create components with Angie", "elementor-pro")), /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			variant: "text",
			size: "small",
			startIcon: /* @__PURE__ */ react.createElement(_elementor_icons.AIIcon, { fontSize: "small" }),
			onClick: handleCreateClick,
			sx: {
				color: "#c00bb9",
				px: "5px",
				py: "4px",
				minWidth: "auto"
			}
		}, (0, _wordpress_i18n.__)("Create", "elementor-pro")))));
	};
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/components/components-tab/expired-components-promotion.tsx
	var RENEW_COMPONENTS_URL$1 = "https://go.elementor.com/renew-license-components-exist-footer/";
	var ExpiredComponentsPromotion = () => /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
		px: 2.5,
		pb: 2,
		position: "sticky",
		bottom: 0,
		zIndex: 1e3
	} }, /* @__PURE__ */ react.createElement(_elementor_ui.Alert, {
		variant: "standard",
		color: "promotion",
		icon: /* @__PURE__ */ react.createElement(_elementor_icons.CrownFilledIcon, { fontSize: "tiny" }),
		"aria-label": "expired-components-promotion",
		action: /* @__PURE__ */ react.createElement(_elementor_ui.AlertAction, {
			color: "promotion",
			variant: "contained",
			href: RENEW_COMPONENTS_URL$1,
			target: "_blank",
			rel: "noopener noreferrer"
		}, (0, _wordpress_i18n.__)("Upgrade Now", "elementor-pro")),
		sx: { maxWidth: 296 }
	}, /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
		gap: .5,
		display: "flex",
		flexDirection: "column"
	} }, /* @__PURE__ */ react.createElement(_elementor_ui.AlertTitle, null, (0, _wordpress_i18n.__)("Create New Components", "elementor-pro")), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, { variant: "caption" }, (0, _wordpress_i18n.__)("Your Pro subscription has expired. Renew to create new components.", "elementor-pro")))));
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/components/components-tab/expired-empty-state.tsx
	var RENEW_COMPONENTS_URL = "https://go.elementor.com/renew-license-components/";
	var SUBTITLE_OVERRIDE_SX$1 = {
		fontSize: "0.875rem !important",
		fontWeight: "500 !important"
	};
	var ExpiredEmptyState = () => {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			alignItems: "center",
			justifyContent: "start",
			sx: {
				px: 2,
				pt: 4
			},
			gap: 1.75,
			overflow: "hidden"
		}, /* @__PURE__ */ react.createElement(_elementor_icons.ComponentsIcon, {
			fontSize: "large",
			sx: { color: "text.secondary" }
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			align: "center",
			variant: "subtitle2",
			color: "text.secondary",
			sx: SUBTITLE_OVERRIDE_SX$1
		}, (0, _wordpress_i18n.__)("Create Reusable Components", "elementor-pro")), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			align: "center",
			variant: "caption",
			color: "text.secondary"
		}, (0, _wordpress_i18n.__)("Create design elements that sync across your entire site.", "elementor-pro")), /* @__PURE__ */ react.createElement(_elementor_editor_ui.CtaButton, {
			size: "small",
			href: RENEW_COMPONENTS_URL
		}));
	};
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/utils/can-show-angie-elementor-promotion.ts
	function canShowAngieElementorPromotion() {
		var _window$elementor;
		if ((0, _elementor_editor_mcp.isAngieAvailable)()) return true;
		return !!((_window$elementor = window.elementor) === null || _window$elementor === void 0 || (_window$elementor = _window$elementor.config) === null || _window$elementor === void 0 || (_window$elementor = _window$elementor.user) === null || _window$elementor === void 0 ? void 0 : _window$elementor.is_administrator);
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
	//#region packages/packages/pro/editor-components-extended/src/components/angie-install-dialog/angie-install-dialog.tsx
	var PROMOTION_IMAGE_URL = "https://assets.elementor.com/packages/v1/images/angie-components-promotion.svg";
	var ANGIE_COMPONENTS_TAB_ENTRY$1 = "components_tab";
	var ANGIE_INSTALL_STARTED_EVENT = "angie_install_started";
	function AngieInstallDialog({ open, onClose, prompt }) {
		const [installState, setInstallState] = (0, react.useState)("idle");
		const handleClose = () => {
			if (installState === "installing") return;
			setInstallState("idle");
			onClose();
		};
		const handleInstall = function() {
			var _ref = _asyncToGenerator(function* () {
				setInstallState("installing");
				(0, _elementor_events.trackEvent)({
					eventName: ANGIE_INSTALL_STARTED_EVENT,
					trigger_source: ANGIE_COMPONENTS_TAB_ENTRY$1
				});
				if (!(yield (0, _elementor_editor_mcp.installAngiePlugin)()).success) {
					setInstallState("error");
					return;
				}
				(0, _elementor_editor_mcp.redirectToAppAdmin)(prompt);
			});
			return function handleInstall() {
				return _ref.apply(this, arguments);
			};
		}();
		const handleFallbackInstall = () => {
			(0, _elementor_editor_mcp.redirectToInstallation)(prompt);
		};
		return /* @__PURE__ */ react.createElement(_elementor_ui.Dialog, {
			fullWidth: true,
			maxWidth: "md",
			open,
			onClose: handleClose
		}, /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
			"aria-label": (0, _wordpress_i18n.__)("Close", "elementor-pro"),
			onClick: handleClose,
			sx: {
				position: "absolute",
				right: 8,
				top: 8,
				zIndex: 1
			}
		}, /* @__PURE__ */ react.createElement(_elementor_icons.XIcon, null)), /* @__PURE__ */ react.createElement(_elementor_ui.DialogContent, { sx: {
			p: 0,
			overflow: "hidden"
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			sx: { height: 400 }
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Image, {
			sx: {
				height: "100%",
				aspectRatio: "1 / 1",
				objectFit: "cover",
				objectPosition: "right center"
			},
			src: PROMOTION_IMAGE_URL
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			gap: 2,
			justifyContent: "center",
			p: 4
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "h6",
			fontWeight: 600,
			whiteSpace: "nowrap"
		}, installState === "error" ? (0, _wordpress_i18n.__)("Installation failed", "elementor-pro") : (0, _wordpress_i18n.__)("Install Angie to build components", "elementor-pro")), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "body2",
			color: "text.secondary"
		}, installState === "error" ? (0, _wordpress_i18n.__)("We couldn't install Angie automatically. Click below to install it manually.", "elementor-pro") : (0, _wordpress_i18n.__)("Angie lets you create components, widgets, sections, and code using simple instructions.", "elementor-pro")), installState !== "error" && /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "body2",
			color: "text.secondary"
		}, (0, _wordpress_i18n.__)("Install once to start building directly inside the editor.", "elementor-pro")), /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			justifyContent: "flex-end",
			sx: { mt: 2 }
		}, installState === "error" ? /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			variant: "contained",
			color: "accent",
			onClick: handleFallbackInstall
		}, (0, _wordpress_i18n.__)("Install Manually", "elementor-pro")) : /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			variant: "contained",
			color: "accent",
			onClick: handleInstall,
			disabled: installState === "installing",
			startIcon: installState === "installing" ? /* @__PURE__ */ react.createElement(_elementor_ui.CircularProgress, {
				size: 18,
				color: "inherit"
			}) : void 0
		}, installState === "installing" ? (0, _wordpress_i18n.__)("InstallingвЂ¦", "elementor-pro") : (0, _wordpress_i18n.__)("Install Angie", "elementor-pro")))))));
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/components/angie-intro/angie-intro-popover.tsx
	var ANGIE_INTRO_MESSAGE_KEY = "angie-components-intro";
	var INTRO_IMAGE_URL = "https://assets.elementor.com/packages/v1/images/angie-components-promotion.svg";
	var IMAGE_OVERLAY_COLOR = "rgba(255, 0, 191, 0.6)";
	var BUTTON_COLOR = "#f0abfc";
	var BUTTON_HOVER_COLOR = "#e879f9";
	var BUTTON_TEXT_COLOR = "#0c0d0e";
	var AngieIntroPopover = ({ open, onClose, onConfirm, anchorRef }) => {
		const anchorEl = anchorRef === null || anchorRef === void 0 ? void 0 : anchorRef.current;
		const slotProps = anchorEl ? { popper: {
			anchorEl,
			modifiers: [{
				name: "offset",
				options: { offset: [-40, 8] }
			}]
		} } : void 0;
		const handleClose = (e) => {
			e.stopPropagation();
			onClose();
		};
		return /* @__PURE__ */ react.createElement(_elementor_ui.Infotip, {
			placement: "right-start",
			content: /* @__PURE__ */ react.createElement(AngieIntroCard, {
				onClose: handleClose,
				onConfirm
			}),
			open,
			slotProps
		}, /* @__PURE__ */ react.createElement("span", null));
	};
	function AngieIntroCard({ onClose, onConfirm }) {
		return /* @__PURE__ */ react.createElement(_elementor_ui.ClickAwayListener, {
			disableReactTree: true,
			mouseEvent: "onMouseDown",
			touchEvent: "onTouchStart",
			onClickAway: onClose
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Card, {
			elevation: 0,
			sx: {
				width: 296,
				borderRadius: "4px"
			}
		}, /* @__PURE__ */ react.createElement(_elementor_ui.CardHeader, {
			title: /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
				display: "flex",
				alignItems: "center",
				gap: 1
			} }, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, { variant: "subtitle2" }, (0, _wordpress_i18n.__)("Meet Angie", "elementor-pro")), /* @__PURE__ */ react.createElement(_elementor_ui.Chip, {
				label: (0, _wordpress_i18n.__)("New", "elementor-pro"),
				size: "small",
				sx: {
					height: 24,
					fontSize: "13px",
					backgroundColor: "#ebf2fe",
					color: "#1945a4",
					borderRadius: "1000px"
				}
			})),
			action: /* @__PURE__ */ react.createElement(_elementor_ui.CloseButton, {
				slotProps: { icon: { fontSize: "tiny" } },
				onClick: onClose
			}),
			sx: {
				py: 1,
				px: 2
			}
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			position: "relative",
			width: "100%",
			height: 148
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.CardMedia, {
			component: "img",
			image: INTRO_IMAGE_URL,
			alt: "",
			sx: {
				width: "100%",
				height: "100%",
				objectFit: "cover"
			}
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			position: "absolute",
			inset: 0,
			backgroundColor: IMAGE_OVERLAY_COLOR,
			pointerEvents: "none"
		} })), /* @__PURE__ */ react.createElement(_elementor_ui.CardContent, { sx: {
			px: 2,
			py: 1
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "body2",
			color: "text.secondary"
		}, (0, _wordpress_i18n.__)("Build components using simple instructions.", "elementor-pro"))), /* @__PURE__ */ react.createElement(_elementor_ui.CardActions, { sx: {
			justifyContent: "flex-end",
			px: 2,
			pb: 1.5,
			pt: 1
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			variant: "contained",
			size: "small",
			onClick: onConfirm,
			sx: {
				backgroundColor: BUTTON_COLOR,
				color: BUTTON_TEXT_COLOR,
				"&:hover": { backgroundColor: BUTTON_HOVER_COLOR }
			}
		}, (0, _wordpress_i18n.__)("Start building", "elementor-pro")))));
	}
	var useAngieIntro = () => {
		const [isMessageSuppressed, suppressMessage] = (0, _elementor_editor_current_user.useSuppressedMessage)(ANGIE_INTRO_MESSAGE_KEY);
		return {
			shouldShowIntro: !isMessageSuppressed,
			suppressIntro: suppressMessage
		};
	};
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/components/components-tab/pro-empty-state.tsx
	var LEARN_MORE_URL = "http://go.elementor.com/components-guide-article";
	var GENERATE_COMPONENT_PROMPT = "Tell Angie what component you want to build";
	var ANGIE_COMPONENTS_TAB_ENTRY = "components_tab";
	var ANGIE_CTA_CLICKED_EVENT = "angie_cta_clicked";
	var SUBTITLE_OVERRIDE_SX = {
		fontSize: "0.875rem !important",
		fontWeight: "500 !important"
	};
	var ProEmptyState = () => {
		const { canCreate } = (0, _elementor_editor_components.useComponentsPermissions)();
		const { shouldShowIntro, suppressIntro } = useAngieIntro();
		const [isIntroOpen, setIsIntroOpen] = (0, react.useState)(false);
		const [isInstallDialogOpen, setIsInstallDialogOpen] = (0, react.useState)(false);
		const linkRef = (0, react.useRef)(null);
		const handleGenerateClick = () => {
			const hasAngieInstalled = (0, _elementor_editor_mcp.isAngieAvailable)();
			(0, _elementor_events.trackEvent)({
				eventName: ANGIE_CTA_CLICKED_EVENT,
				entry_point: ANGIE_COMPONENTS_TAB_ENTRY,
				has_angie_installed: hasAngieInstalled
			});
			if (!hasAngieInstalled) {
				setIsInstallDialogOpen(true);
				return;
			}
			if ((0, _elementor_editor_mcp.isAngieSidebarOpen)()) {
				(0, _elementor_editor_mcp.sendPromptToAngie)(GENERATE_COMPONENT_PROMPT);
				return;
			}
			if (shouldShowIntro) {
				setIsIntroOpen(true);
				return;
			}
			(0, _elementor_editor_mcp.sendPromptToAngie)(GENERATE_COMPONENT_PROMPT);
		};
		const handleIntroConfirm = () => {
			suppressIntro();
			setIsIntroOpen(false);
			(0, _elementor_editor_mcp.sendPromptToAngie)(GENERATE_COMPONENT_PROMPT);
		};
		const handleIntroClose = () => {
			setIsIntroOpen(false);
		};
		const handleInstallDialogClose = () => {
			setIsInstallDialogOpen(false);
		};
		const shortcutKey = navigator.platform.toUpperCase().indexOf("MAC") >= 0 ? "Cmd" : "Ctrl";
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			alignItems: "center",
			justifyContent: "start",
			height: "100%",
			sx: {
				px: 2,
				py: 4
			},
			gap: 1,
			overflow: "hidden"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			alignItems: "center",
			gap: 1.75
		}, /* @__PURE__ */ react.createElement(_elementor_icons.ComponentsIcon, {
			fontSize: "large",
			sx: { color: "text.secondary" }
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			alignItems: "center",
			gap: 1.75
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			align: "center",
			variant: "subtitle2",
			color: "text.secondary",
			sx: SUBTITLE_OVERRIDE_SX
		}, (0, _wordpress_i18n.__)("Create your first component", "elementor-pro")), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			align: "center",
			variant: "caption",
			color: "text.tertiary"
		}, canCreate ? `${(0, _wordpress_i18n.__)("To create, press", "elementor-pro")} ${shortcutKey}+ Shift + K ${(0, _wordpress_i18n.__)("on div-block or flexbox.", "elementor-pro")}` : (0, _wordpress_i18n.__)("With your current role, you cannot create components. Contact an administrator to create one.", "elementor-pro")))), canCreate && canShowAngieElementorPromotion() && /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			alignItems: "center",
			gap: 1,
			width: "100%"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "subtitle2",
			color: "text.primary",
			sx: {
				py: .5,
				fontWeight: 500
			}
		}, (0, _wordpress_i18n.__)("Or", "elementor-pro")), /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			alignItems: "center",
			gap: 1
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			align: "center",
			variant: "caption",
			color: "text.tertiary"
		}, (0, _wordpress_i18n.__)("Create a custom component with Angie", "elementor-pro")), /* @__PURE__ */ react.createElement(_elementor_ui.Link, {
			ref: linkRef,
			component: "button",
			variant: "caption",
			onClick: handleGenerateClick,
			sx: {
				display: "flex",
				alignItems: "center",
				padding: .5,
				gap: .5,
				color: "#c00bb9",
				textDecoration: "none",
				"&:hover": { textDecoration: "underline" }
			}
		}, /* @__PURE__ */ react.createElement(_elementor_icons.AIIcon, { sx: { fontSize: 16 } }), (0, _wordpress_i18n.__)("Create component", "elementor-pro")), /* @__PURE__ */ react.createElement(AngieIntroPopover, {
			open: isIntroOpen,
			onClose: handleIntroClose,
			onConfirm: handleIntroConfirm,
			anchorRef: linkRef
		}))), /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			alignItems: "center",
			gap: .5,
			sx: {
				mt: "auto",
				width: "100%"
			}
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Divider, { sx: {
			width: "100%",
			mb: 2
		} }), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			align: "center",
			variant: "caption",
			color: "text.tertiary"
		}, (0, _wordpress_i18n.__)("Components are reusable elements that sync across your site.", "elementor-pro")), /* @__PURE__ */ react.createElement(_elementor_ui.Link, {
			href: LEARN_MORE_URL,
			target: "_blank",
			rel: "noopener noreferrer",
			variant: "caption",
			color: "info.main"
		}, (0, _wordpress_i18n.__)("Learn more", "elementor-pro"))), /* @__PURE__ */ react.createElement(AngieInstallDialog, {
			open: isInstallDialogOpen,
			onClose: handleInstallDialogClose,
			prompt: GENERATE_COMPONENT_PROMPT
		}));
	};
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/components/components-tab/components.tsx
	var ExtendedComponents = () => {
		return /* @__PURE__ */ react.createElement(_elementor_editor_ui.ThemeProvider, null, /* @__PURE__ */ react.createElement(_elementor_editor_components.SearchProvider, { localStorageKey: "elementor-components-search" }, /* @__PURE__ */ react.createElement(ExtendedComponentsContent, null)));
	};
	var ExtendedComponentsContent = () => {
		const { components, isLoading } = (0, _elementor_editor_components.useComponents)();
		const hasComponents = !isLoading && components.length > 0;
		return /* @__PURE__ */ react.createElement(react.Fragment, null, hasComponents && /* @__PURE__ */ react.createElement(_elementor_editor_components.ComponentSearch, null), /* @__PURE__ */ react.createElement(ExtendedComponentsList, null));
	};
	var EMPTY_STATE_STYLE_ID = "components-empty-state-full-height";
	var FULL_HEIGHT_CSS = `
#elementor-panel-page-elements {
	display: flex;
	flex-direction: column;
	height: 100%;
}

#elementor-panel-elements {
	display: flex;
	flex-direction: column;
	flex: 1;
	min-height: 0;
}

#elementor-panel-elements-wrapper {
	display: flex;
	flex-direction: column;
	flex: 1;
	min-height: 0;
}
`;
	var useFullHeightPanel = () => {
		(0, react.useLayoutEffect)(() => {
			let style = document.getElementById(EMPTY_STATE_STYLE_ID);
			if (!style) {
				style = document.createElement("style");
				style.id = EMPTY_STATE_STYLE_ID;
				style.textContent = FULL_HEIGHT_CSS;
				document.head.appendChild(style);
			}
			return () => {
				var _document$getElementB;
				(_document$getElementB = document.getElementById(EMPTY_STATE_STYLE_ID)) === null || _document$getElementB === void 0 || _document$getElementB.remove();
			};
		}, []);
	};
	var ExtendedComponentsList = () => {
		const { isLoading: isAllLoading } = (0, _elementor_editor_components.useComponents)();
		const { components: filteredComponents, isLoading, searchValue } = (0, _elementor_editor_components.useFilteredComponents)();
		const { data: isLicenseExpired = false, isPending: isLicenseFetching } = (0, _elementor_license_api.useIsLicenseExpired)();
		useFullHeightPanel();
		if (isLoading || isAllLoading || isLicenseFetching) return /* @__PURE__ */ react.createElement(_elementor_editor_components.LoadingComponents, null);
		const isEmpty = !(filteredComponents === null || filteredComponents === void 0 ? void 0 : filteredComponents.length);
		const isSearching = searchValue.length > 0;
		if (isEmpty) {
			if (isSearching) return /* @__PURE__ */ react.createElement(_elementor_editor_components.EmptySearchResult, null);
			if (isLicenseExpired) return /* @__PURE__ */ react.createElement(ExpiredEmptyState, null);
			return /* @__PURE__ */ react.createElement(ProEmptyState, null);
		}
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			justifyContent: "space-between",
			sx: {
				flex: 1,
				minHeight: 0
			}
		}, /* @__PURE__ */ react.createElement(_elementor_ui.List, { sx: {
			display: "flex",
			flexDirection: "column",
			gap: 1,
			px: 2
		} }, filteredComponents.map((component) => /* @__PURE__ */ react.createElement(ComponentItem, {
			key: component.uid,
			component
		}))), isLicenseExpired ? /* @__PURE__ */ react.createElement(ExpiredComponentsPromotion, null) : /* @__PURE__ */ react.createElement(ComponentsFooter, null));
	};
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/components/instance-editing-panel/instance-editing-panel.tsx
	function ExtendedInstanceEditingPanel() {
		const { canEdit } = (0, _elementor_editor_components.useComponentsPermissions)();
		const data = (0, _elementor_editor_components.useInstancePanelData)();
		if (!data) return null;
		const { componentId, component, overrides, overridableProps, groups, isEmpty, componentInstanceId } = data;
		const panelTitle = (0, _wordpress_i18n.__)("Edit %s", "elementor-pro").replace("%s", component.name);
		const handleEditComponent = () => (0, _elementor_editor_components.switchToComponent)(componentId, componentInstanceId);
		const actions = /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			gap: .5
		}, /* @__PURE__ */ react.createElement(_elementor_editor_components.DetachAction, {
			componentInstanceId,
			componentId
		}), canEdit ? /* @__PURE__ */ react.createElement(_elementor_editor_components.EditComponentAction, {
			label: panelTitle,
			onClick: handleEditComponent,
			icon: _elementor_icons.PencilIcon
		}) : null);
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			"data-testid": "instance-editing-panel",
			sx: { height: "100%" }
		}, /* @__PURE__ */ react.createElement(_elementor_editor_components.ComponentInstanceProvider, {
			componentId,
			overrides,
			overridableProps
		}, /* @__PURE__ */ react.createElement(_elementor_editor_components.InstancePanelHeader, {
			componentName: component.name,
			actions
		}), /* @__PURE__ */ react.createElement(_elementor_editor_components.InstancePanelBody, {
			groups,
			isEmpty,
			emptyState: /* @__PURE__ */ react.createElement(_elementor_editor_components.InstanceEmptyState, { onEditComponent: canEdit ? handleEditComponent : void 0 }),
			componentInstanceId
		})));
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/components/overridable-props/overridable-prop-control.tsx
	var _excluded$1 = ["OriginalControl"];
	var _excluded2 = [
		"value",
		"bind",
		"setValue",
		"placeholder"
	];
	function OverridablePropControl(_ref) {
		var _overridableProps$pro;
		var _value$origin_value;
		let { OriginalControl } = _ref, props = _objectWithoutProperties(_ref, _excluded$1);
		const { elementType } = (0, _elementor_editor_editing_panel.useElement)();
		const _useBoundProp = (0, _elementor_editor_controls.useBoundProp)(_elementor_editor_components.componentOverridablePropTypeUtil), { value, bind, setValue, placeholder } = _useBoundProp, propContext = _objectWithoutProperties(_useBoundProp, _excluded2);
		const componentId = (0, _elementor_editor_components.useCurrentComponentId)();
		const overridableProps = (0, _elementor_editor_components.useOverridableProps)(componentId);
		const filteredReplacements = (0, _elementor_editor_controls.getControlReplacements)().filter((r) => !r.id || r.id !== "overridable-prop");
		if (!componentId) return null;
		if (!(value === null || value === void 0 ? void 0 : value.override_key)) throw new Error("Override key is required");
		const isComponentInstance = elementType.key === "e-component";
		const overridablePropData = overridableProps === null || overridableProps === void 0 || (_overridableProps$pro = overridableProps.props) === null || _overridableProps$pro === void 0 ? void 0 : _overridableProps$pro[value.override_key];
		const setOverridableValue = (newValue) => {
			const propValue = _objectSpread2(_objectSpread2({}, value), {}, { origin_value: newValue[bind] });
			setValue(propValue);
			if (!isComponentInstance) (0, _elementor_editor_components.updateOverridableProp)(componentId, propValue, overridablePropData === null || overridablePropData === void 0 ? void 0 : overridablePropData.originPropFields);
		};
		const defaultPropType = elementType.propsSchema[bind];
		const overridePropType = overridablePropData ? (0, _elementor_editor_components.getPropTypeForComponentOverride)(overridablePropData) : void 0;
		const resolvedPropType = overridePropType !== null && overridePropType !== void 0 ? overridePropType : defaultPropType;
		if (!resolvedPropType) return null;
		const propType = (0, _elementor_editor_editing_panel.createTopLevelObjectType)({ schema: { [bind]: resolvedPropType } });
		const propValue = isComponentInstance ? ((_value$origin_value = value.origin_value) === null || _value$origin_value === void 0 ? void 0 : _value$origin_value.value).override_value : value.origin_value;
		const objectPlaceholder = placeholder ? { [bind]: placeholder } : void 0;
		return /* @__PURE__ */ react.createElement(_elementor_editor_components.OverridablePropProvider, { value }, /* @__PURE__ */ react.createElement(_elementor_editor_controls.PropProvider, _objectSpread2(_objectSpread2({}, propContext), {}, {
			propType,
			setValue: setOverridableValue,
			value: { [bind]: propValue },
			placeholder: objectPlaceholder
		}), /* @__PURE__ */ react.createElement(_elementor_editor_controls.PropKeyProvider, { bind }, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ControlReplacementsProvider, { replacements: filteredReplacements }, /* @__PURE__ */ react.createElement(ControlWithReplacements, {
			OriginalControl,
			props
		})))));
	}
	function ControlWithReplacements({ OriginalControl, props }) {
		const { ControlToRender, isReplaced } = (0, _elementor_editor_controls.useControlReplacement)(OriginalControl);
		if (isReplaced) {
			const ReplacementControl = ControlToRender;
			return /* @__PURE__ */ react.createElement(ReplacementControl, _objectSpread2(_objectSpread2({}, props), {}, { OriginalControl }));
		}
		return /* @__PURE__ */ react.createElement(OriginalControl, props);
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/store/actions/create-component-overridable-prop.ts
	function createComponentOverridableProp({ componentId, overrideKey, elementId, label, groupId, propKey, elType, widgetType, originValue, originPropFields, executedBy }) {
		const overridableProps = _elementor_editor_components.componentsSelectors.getOverridableProps(componentId);
		if (!overridableProps) throw new Error(`Component not found for componentId: ${componentId}`);
		const duplicatedTargetProps = Object.values(overridableProps.props).filter((prop) => prop.elementId === elementId && prop.propKey === propKey);
		const { groups: groupsAfterResolve, groupId: currentGroupId } = resolveOrCreateGroup(overridableProps.groups, groupId !== null && groupId !== void 0 ? groupId : void 0);
		const overridableProp = {
			overrideKey: overrideKey || (0, _elementor_utils.generateUniqueId)("prop"),
			label,
			elementId,
			propKey,
			widgetType,
			elType,
			originValue,
			groupId: currentGroupId,
			originPropFields
		};
		const stateAfterRemovingDuplicates = removePropsFromState(_objectSpread2(_objectSpread2({}, overridableProps), {}, { groups: groupsAfterResolve }), duplicatedTargetProps);
		const props = _objectSpread2(_objectSpread2({}, stateAfterRemovingDuplicates.props), {}, { [overridableProp.overrideKey]: overridableProp });
		let groups = addPropToGroup(stateAfterRemovingDuplicates.groups, currentGroupId, overridableProp.overrideKey);
		groups = ensureGroupInOrder(groups, currentGroupId);
		_elementor_editor_components.componentsActions.setOverridableProps(componentId, {
			props,
			groups
		});
		const currentComponent = _elementor_editor_components.componentsSelectors.getCurrentComponent();
		(0, _elementor_editor_components.trackComponentEvent)({
			action: "propertyExposed",
			source: executedBy,
			executedBy,
			component_uid: currentComponent === null || currentComponent === void 0 ? void 0 : currentComponent.uid,
			property_id: overridableProp.overrideKey,
			property_path: propKey,
			property_name: label,
			element_type: widgetType !== null && widgetType !== void 0 ? widgetType : elType
		});
		return overridableProp;
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/components/overridable-props/indicator.tsx
	var _excluded = ["isOpen", "isOverridable"];
	var SIZE = "tiny";
	var IconContainer = (0, _elementor_ui.styled)(_elementor_ui.Box)`
	pointer-events: none;
	opacity: 0;
	transition: opacity 0.2s ease-in-out;

	& > svg {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate( -50%, -50% );
		width: 10px;
		height: 10px;
		fill: ${({ theme }) => theme.palette.primary.contrastText};
		stroke: ${({ theme }) => theme.palette.primary.contrastText};
		stroke-width: 2px;
	}
`;
	var Content$1 = (0, _elementor_ui.styled)(_elementor_ui.Box)`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	width: 16px;
	height: 16px;
	margin-inline: ${({ theme }) => theme.spacing(.5)};

	&:before {
		content: '';
		display: block;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate( -50%, -50% ) rotate( 45deg );
		width: 5px;
		height: 5px;
		border-radius: 1px;
		background-color: ${({ theme }) => theme.palette.primary.main};
		transition: all 0.1s ease-in-out;
	}

	&:hover,
	&.enlarged {
		&:before {
			width: 12px;
			height: 12px;
			border-radius: 2px;
		}

		.icon {
			opacity: 1;
		}
	}
`;
	var Indicator = (0, react.forwardRef)((_ref, ref) => {
		let { isOpen, isOverridable } = _ref, props = _objectWithoutProperties(_ref, _excluded);
		return /* @__PURE__ */ react.createElement(Content$1, _objectSpread2(_objectSpread2({
			role: "button",
			ref
		}, props), {}, {
			className: isOpen || isOverridable ? "enlarged" : "",
			"aria-label": isOverridable ? (0, _wordpress_i18n.__)("Overridable property", "elementor-pro") : (0, _wordpress_i18n.__)("Make prop overridable", "elementor-pro")
		}), /* @__PURE__ */ react.createElement(IconContainer, { className: "icon" }, isOverridable ? /* @__PURE__ */ react.createElement(_elementor_icons.CheckIcon, { fontSize: SIZE }) : /* @__PURE__ */ react.createElement(_elementor_icons.PlusIcon, { fontSize: SIZE })));
	});
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/components/overridable-props/overridable-prop-indicator.tsx
	/**
	* Some consumers (e.g. repeater-based element controls) render field indicators outside
	* a `SettingsField`, where `OverridablePropIndicator` throws. This contains that instead
	* of crashing the panel.
	*/
	function SafeOverridablePropIndicator() {
		return /* @__PURE__ */ react.createElement(_elementor_ui.ErrorBoundary, { fallback: null }, /* @__PURE__ */ react.createElement(OverridablePropIndicator, null));
	}
	function OverridablePropIndicator() {
		const { propType } = (0, _elementor_editor_controls.useBoundProp)();
		const componentId = (0, _elementor_editor_components.useCurrentComponentId)();
		const overridableProps = (0, _elementor_editor_components.useSanitizeOverridableProps)(componentId);
		if (!isPropAllowed(propType) || !componentId || !overridableProps) return null;
		return /* @__PURE__ */ react.createElement(Content, {
			componentId,
			overridableProps
		});
	}
	function Content({ componentId, overridableProps }) {
		var _getWidgetsCache$elem;
		var _getWidgetsCache;
		var _overridableProps$pro2;
		const { element: { id: elementId }, elementType } = (0, _elementor_editor_editing_panel.useElement)();
		const { value, bind, propType, setValue: setElementOriginValue } = (0, _elementor_editor_controls.useBoundProp)();
		const contextOverridableValue = (0, _elementor_editor_components.useOverridablePropValue)();
		const componentInstanceElement = (0, _elementor_editor_components.useComponentInstanceElement)();
		const { value: boundPropOverridableValue, setValue: setElementOverridableValue } = (0, _elementor_editor_controls.useBoundProp)(_elementor_editor_components.componentOverridablePropTypeUtil);
		const makePropOverridable = useUndoableMakePropOverridable({
			setElementOverridableValue,
			setElementOriginValue
		});
		/**
		* This is intended to handle custom layout controls, such as <LinkControl />, which has <ControlLabel /> nested within it
		* i.e. its bound prop value would be the one manipulated by the new <PropProvider /> thus won't be considered overridable
		*/
		const overridableValue = boundPropOverridableValue !== null && boundPropOverridableValue !== void 0 ? boundPropOverridableValue : contextOverridableValue;
		const popupState = (0, _elementor_ui.usePopupState)({ variant: "popover" });
		const triggerProps = (0, _elementor_ui.bindTrigger)(popupState);
		const popoverProps = (0, _elementor_ui.bindPopover)(popupState);
		const { elType } = (_getWidgetsCache$elem = (_getWidgetsCache = (0, _elementor_editor_elements.getWidgetsCache)()) === null || _getWidgetsCache === void 0 ? void 0 : _getWidgetsCache[elementType.key]) !== null && _getWidgetsCache$elem !== void 0 ? _getWidgetsCache$elem : { elType: "widget" };
		const handleSubmit = ({ label, group }) => {
			var _overridableProps$pro;
			const matchingOverridableProp = overridableValue ? overridableProps === null || overridableProps === void 0 || (_overridableProps$pro = overridableProps.props) === null || _overridableProps$pro === void 0 ? void 0 : _overridableProps$pro[overridableValue.override_key] : void 0;
			if (matchingOverridableProp) updateOverridablePropParams({
				componentId,
				overrideKey: matchingOverridableProp.overrideKey,
				label,
				groupId: group
			});
			else {
				var _propType$default;
				var _ref;
				var _resolveOverridePropV;
				var _overridableValue$ove;
				var _componentInstanceEle;
				var _componentInstanceEle2;
				const propTypeDefault = (_propType$default = propType.default) !== null && _propType$default !== void 0 ? _propType$default : {};
				const elementOriginValue = (_ref = (_resolveOverridePropV = (0, _elementor_editor_components.resolveOverridePropValue)(overridableValue === null || overridableValue === void 0 ? void 0 : overridableValue.origin_value)) !== null && _resolveOverridePropV !== void 0 ? _resolveOverridePropV : value) !== null && _ref !== void 0 ? _ref : propTypeDefault;
				const componentOverridablePropConfig = {
					componentId,
					overrideKey: (_overridableValue$ove = overridableValue === null || overridableValue === void 0 ? void 0 : overridableValue.override_key) !== null && _overridableValue$ove !== void 0 ? _overridableValue$ove : null,
					elementId: (_componentInstanceEle = componentInstanceElement === null || componentInstanceElement === void 0 ? void 0 : componentInstanceElement.element.id) !== null && _componentInstanceEle !== void 0 ? _componentInstanceEle : elementId,
					label,
					groupId: group,
					propKey: bind,
					elType: elType !== null && elType !== void 0 ? elType : "widget",
					widgetType: (_componentInstanceEle2 = componentInstanceElement === null || componentInstanceElement === void 0 ? void 0 : componentInstanceElement.elementType.key) !== null && _componentInstanceEle2 !== void 0 ? _componentInstanceEle2 : elementType.key,
					originValue: elementOriginValue,
					executedBy: "user"
				};
				makePropOverridable({
					componentOverridablePropConfig,
					elementOriginValue
				});
			}
			popupState.close();
		};
		const overridableConfig = overridableValue ? (0, _elementor_editor_components.getOverridableProp)({
			componentId,
			overrideKey: overridableValue.override_key
		}) : void 0;
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, {
			placement: "top",
			title: (0, _wordpress_i18n.__)("Override Property", "elementor-pro")
		}, /* @__PURE__ */ react.createElement(Indicator, _objectSpread2(_objectSpread2({}, triggerProps), {}, {
			isOpen: !!popoverProps.open,
			isOverridable: !!overridableValue
		}))), /* @__PURE__ */ react.createElement(_elementor_ui.Popover, _objectSpread2({
			disableScrollLock: true,
			anchorOrigin: {
				vertical: "bottom",
				horizontal: "right"
			},
			transformOrigin: {
				vertical: "top",
				horizontal: "right"
			},
			PaperProps: { sx: { my: 2.5 } }
		}, popoverProps), /* @__PURE__ */ react.createElement(OverridablePropForm, {
			onSubmit: handleSubmit,
			groups: overridableProps === null || overridableProps === void 0 ? void 0 : overridableProps.groups.order.map((groupId) => ({
				value: groupId,
				label: overridableProps.groups.items[groupId].label
			})),
			existingLabels: Object.values((_overridableProps$pro2 = overridableProps === null || overridableProps === void 0 ? void 0 : overridableProps.props) !== null && _overridableProps$pro2 !== void 0 ? _overridableProps$pro2 : {}).map((prop) => prop.label),
			currentValue: overridableConfig
		})));
	}
	function isPropAllowed(propType) {
		return propType.meta.overridable !== false;
	}
	function useUndoableMakePropOverridable({ setElementOverridableValue, setElementOriginValue }) {
		return (0, react.useMemo)(() => {
			const makePropOverridable = ({ componentOverridablePropConfig, elementOriginValue }) => {
				const overridableProp = createComponentOverridableProp(componentOverridablePropConfig);
				setElementOverridableValue({
					override_key: overridableProp.overrideKey,
					origin_value: elementOriginValue
				}, void 0, { withHistory: false });
				(0, _elementor_editor_documents.setDocumentModifiedStatus)(true);
				return { createdOverridableProp: overridableProp };
			};
			return (0, _elementor_editor_v1_adapters.undoable)({
				do: ({ componentOverridablePropConfig, elementOriginValue }) => {
					return makePropOverridable({
						componentOverridablePropConfig,
						elementOriginValue
					});
				},
				undo: ({ componentOverridablePropConfig, elementOriginValue }, { createdOverridableProp }) => {
					deleteComponentOverridableProp({
						componentId: componentOverridablePropConfig.componentId,
						propKey: createdOverridableProp.overrideKey,
						executedBy: "system",
						revertElementOverridable: false
					});
					setElementOriginValue(elementOriginValue, void 0, { withHistory: false });
				},
				redo: ({ elementOriginValue, componentOverridablePropConfig }, { createdOverridableProp }) => {
					return makePropOverridable({
						componentOverridablePropConfig: _objectSpread2(_objectSpread2({}, componentOverridablePropConfig), {}, { overrideKey: createdOverridableProp.overrideKey }),
						elementOriginValue
					});
				}
			}, {
				title: ({ componentOverridablePropConfig }) => componentOverridablePropConfig.label,
				subtitle: (0, _wordpress_i18n.__)("property exposed", "elementor-pro")
			});
		}, [setElementOriginValue, setElementOverridableValue]);
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/utils/apply-overridables-to-elements.ts
	function applyOverridablesToElements(elements, overridableProps) {
		Object.values(overridableProps.props).forEach((prop) => {
			const element = findElementById$1(elements, prop.elementId);
			if (!(element === null || element === void 0 ? void 0 : element.settings)) return;
			element.settings[prop.propKey] = {
				$$type: "overridable",
				value: {
					override_key: prop.overrideKey,
					origin_value: element.settings[prop.propKey]
				}
			};
		});
	}
	function findElementById$1(elements, targetId) {
		for (const element of elements) {
			if (element.id === targetId) return element;
			if (element.elements) {
				const found = findElementById$1(element.elements, targetId);
				if (found) return found;
			}
		}
		return null;
	}
	__name(findElementById$1, "findElementById");
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/utils/replace-element-with-component.ts
	var replaceElementWithComponent = (element, component) => {
		return (0, _elementor_editor_elements.replaceElement)({
			currentElementId: element.id,
			newElement: createComponentModel(component),
			withHistory: false
		});
	};
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/store/actions/create-unpublished-component.ts
	function createUnpublishedComponent(_x) {
		return _createUnpublishedComponent.apply(this, arguments);
	}
	function _createUnpublishedComponent() {
		_createUnpublishedComponent = _asyncToGenerator(function* ({ name, element, eventData, uid, overridableProps, executedBy }) {
			var _container$model;
			var _container$model$toJS;
			var _container$parent$id;
			var _container$parent;
			var _container$view$_inde;
			var _container$view;
			const generatedUid = uid !== null && uid !== void 0 ? uid : (0, _elementor_utils.generateUniqueId)("component");
			const componentBase = {
				uid: generatedUid,
				name
			};
			const elements = [revertAllOverridablesInElementData(element)];
			if (overridableProps) applyOverridablesToElements(elements, overridableProps);
			const container = (0, _elementor_editor_elements.getContainer)(element.id);
			const modelFromContainer = container === null || container === void 0 || (_container$model = container.model) === null || _container$model === void 0 || (_container$model$toJS = _container$model.toJSON) === null || _container$model$toJS === void 0 ? void 0 : _container$model$toJS.call(_container$model);
			const originalElement = {
				model: modelFromContainer !== null && modelFromContainer !== void 0 ? modelFromContainer : element,
				parentId: (_container$parent$id = container === null || container === void 0 || (_container$parent = container.parent) === null || _container$parent === void 0 ? void 0 : _container$parent.id) !== null && _container$parent$id !== void 0 ? _container$parent$id : "",
				index: (_container$view$_inde = container === null || container === void 0 || (_container$view = container.view) === null || _container$view === void 0 ? void 0 : _container$view._index) !== null && _container$view$_inde !== void 0 ? _container$view$_inde : 0
			};
			_elementor_editor_components.componentsActions.addUnpublished(_objectSpread2(_objectSpread2({}, componentBase), {}, {
				elements,
				overridableProps
			}));
			_elementor_editor_components.componentsActions.addCreatedThisSession(generatedUid);
			const componentInstance = replaceElementWithComponent(element, componentBase);
			(0, _elementor_editor_components.trackComponentEvent)(_objectSpread2({
				action: "created",
				source: executedBy,
				executedBy,
				component_uid: generatedUid,
				component_name: name
			}, eventData));
			try {
				yield (0, _elementor_editor_v1_adapters.__privateRunCommand)("document/save/auto");
			} catch (error) {
				restoreOriginalElement(originalElement, componentInstance.id);
				_elementor_editor_components.componentsActions.removeUnpublished(generatedUid);
				_elementor_editor_components.componentsActions.removeCreatedThisSession(generatedUid);
				throw error;
			}
			try {
				yield (0, _elementor_editor_components.loadComponentsAssets)([componentInstance.model.toJSON()]);
			} catch (_unused) {}
			return {
				uid: generatedUid,
				instanceId: componentInstance.id
			};
		});
		return _createUnpublishedComponent.apply(this, arguments);
	}
	function restoreOriginalElement(originalElement, componentInstanceId) {
		const componentContainer = (0, _elementor_editor_elements.getContainer)(componentInstanceId);
		if (componentContainer) (0, _elementor_editor_elements.deleteElement)({
			container: componentContainer,
			options: { useHistory: false }
		});
		const parentContainer = (0, _elementor_editor_elements.getContainer)(originalElement.parentId);
		if (!parentContainer) return;
		const clonedModel = structuredClone(originalElement.model);
		(0, _elementor_editor_elements.createElements)({
			title: (0, _wordpress_i18n.__)("Restore Element", "elementor-pro"),
			elements: [{
				container: parentContainer,
				model: clonedModel,
				options: { at: originalElement.index }
			}]
		});
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/utils/is-editing-component.ts
	function isEditingComponent() {
		return _elementor_editor_components.componentsSelectors.getCurrentComponentId() !== null;
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/sync/prevent-non-atomic-nesting.ts
	var NON_ATOMIC_ELEMENT_ALERT = {
		type: "default",
		message: (0, _wordpress_i18n.__)("This widget isn't compatible with components. Use atomic elements instead.", "elementor-pro"),
		id: "non-atomic-element-blocked"
	};
	function initNonAtomicNestingPrevention() {
		(0, _elementor_editor_v1_adapters.blockCommand)({
			command: "document/elements/create",
			condition: blockNonAtomicCreate
		});
		(0, _elementor_editor_v1_adapters.blockCommand)({
			command: "document/elements/move",
			condition: blockNonAtomicMove
		});
		(0, _elementor_editor_v1_adapters.blockCommand)({
			command: "document/elements/paste",
			condition: blockNonAtomicPaste
		});
	}
	function isElementAtomic(elementType) {
		return (0, _elementor_editor_elements.getElementType)(elementType) !== null;
	}
	function blockNonAtomicCreate(args) {
		if (!isEditingComponent()) return false;
		const { model } = args;
		const elementType = (model === null || model === void 0 ? void 0 : model.widgetType) || (model === null || model === void 0 ? void 0 : model.elType);
		if (!elementType) return false;
		if (isElementAtomic(elementType)) return false;
		(0, _elementor_editor_notifications.notify)(NON_ATOMIC_ELEMENT_ALERT);
		return true;
	}
	function blockNonAtomicMove(args) {
		if (!isEditingComponent()) return false;
		const { containers = [args.container] } = args;
		const hasNonAtomicElement = containers.some((container) => {
			if (!container) return false;
			return (0, _elementor_editor_elements.getAllDescendants)(container).some((element) => !(0, _elementor_editor_canvas.isAtomicWidget)(element));
		});
		if (hasNonAtomicElement) (0, _elementor_editor_notifications.notify)(NON_ATOMIC_ELEMENT_ALERT);
		return hasNonAtomicElement;
	}
	function blockNonAtomicPaste(args) {
		var _window;
		var _data$clipboard;
		if (!isEditingComponent()) return false;
		const { storageType } = args;
		if (storageType !== "localstorage") return false;
		const data = (_window = window) === null || _window === void 0 || (_window = _window.elementorCommon) === null || _window === void 0 || (_window = _window.storage) === null || _window === void 0 ? void 0 : _window.get();
		if (!(data === null || data === void 0 || (_data$clipboard = data.clipboard) === null || _data$clipboard === void 0 ? void 0 : _data$clipboard.elements)) return false;
		const hasNonAtomicElement = hasNonAtomicElementsInTree(data.clipboard.elements);
		if (hasNonAtomicElement) (0, _elementor_editor_notifications.notify)(NON_ATOMIC_ELEMENT_ALERT);
		return hasNonAtomicElement;
	}
	function hasNonAtomicElementsInTree(elements) {
		for (const element of elements) {
			var _element$elements;
			const elementType = element.widgetType || element.elType;
			if (elementType && !isElementAtomic(elementType)) return true;
			if ((_element$elements = element.elements) === null || _element$elements === void 0 ? void 0 : _element$elements.length) {
				if (hasNonAtomicElementsInTree(element.elements)) return true;
			}
		}
		return false;
	}
	function findNonAtomicElementsInElement(element) {
		var _element$elements3;
		const nonAtomicElements = [];
		const elementType = element.widgetType || element.elType;
		if (elementType && !isElementAtomic(elementType)) nonAtomicElements.push(elementType);
		if ((_element$elements3 = element.elements) === null || _element$elements3 === void 0 ? void 0 : _element$elements3.length) for (const child of element.elements) nonAtomicElements.push(...findNonAtomicElementsInElement(child));
		return [...new Set(nonAtomicElements)];
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/components/create-component-form/hooks/use-form.ts
	var useForm = (initialValues) => {
		const [values, setValues] = (0, react.useState)(initialValues);
		const [errors, setErrors] = (0, react.useState)({});
		const isValid = (0, react.useMemo)(() => {
			return !Object.values(errors).some((error) => error);
		}, [errors]);
		const handleChange = (e, field, validationSchema) => {
			const updated = _objectSpread2(_objectSpread2({}, values), {}, { [field]: e.target.value });
			setValues(updated);
			const { success, errors: validationErrors } = validateForm(updated, validationSchema);
			if (!success) setErrors(validationErrors);
			else setErrors({});
		};
		const validate = (validationSchema) => {
			const { success, errors: validationErrors, parsedValues } = validateForm(values, validationSchema);
			if (!success) {
				setErrors(validationErrors);
				return { success };
			}
			setErrors({});
			return {
				success,
				parsedValues
			};
		};
		return {
			values,
			errors,
			isValid,
			handleChange,
			validateForm: validate
		};
	};
	var validateForm = (values, schema) => {
		const result = schema.safeParse(values);
		if (result.success) return {
			success: true,
			parsedValues: result.data
		};
		const errors = {};
		Object.entries(result.error.formErrors.fieldErrors).forEach(([field, error]) => {
			errors[field] = error[0];
		});
		return {
			success: false,
			errors
		};
	};
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/components/create-component-form/utils/get-component-event-data.ts
	var getComponentEventData = (containerElement, options) => {
		const { elementsCount, componentsCount } = countNestedElements(containerElement);
		return {
			nested_elements_count: elementsCount,
			nested_components_count: componentsCount,
			top_element_type: containerElement.elType,
			location: options === null || options === void 0 ? void 0 : options.location,
			secondary_location: options === null || options === void 0 ? void 0 : options.secondaryLocation,
			trigger: options === null || options === void 0 ? void 0 : options.trigger
		};
	};
	function countNestedElements(container) {
		if (!container.elements || container.elements.length === 0) return {
			elementsCount: 0,
			componentsCount: 0
		};
		let elementsCount = container.elements.length;
		let componentsCount = 0;
		for (const element of container.elements) {
			if (element.widgetType === "e-component") componentsCount++;
			const { elementsCount: nestedElementsCount, componentsCount: nestedComponentsCount } = countNestedElements(element);
			elementsCount += nestedElementsCount;
			componentsCount += nestedComponentsCount;
		}
		return {
			elementsCount,
			componentsCount
		};
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/components/create-component-form/create-component-form.tsx
	var MAX_COMPONENTS = 100;
	function CreateComponentForm() {
		const [element, setElement] = (0, react.useState)(null);
		const [anchorPosition, setAnchorPosition] = (0, react.useState)();
		const { components } = (0, _elementor_editor_components.useComponents)();
		const eventData = (0, react.useRef)(null);
		(0, react.useEffect)(() => {
			const OPEN_SAVE_AS_COMPONENT_FORM_EVENT = "elementor/editor/open-save-as-component-form";
			const openPopup = (event) => {
				var _components$length;
				const { shouldOpen, notification } = shouldOpenForm(event.detail.element, (_components$length = components === null || components === void 0 ? void 0 : components.length) !== null && _components$length !== void 0 ? _components$length : 0);
				if (!shouldOpen) {
					(0, _elementor_editor_notifications.notify)(notification);
					return;
				}
				setElement({
					element: event.detail.element,
					elementLabel: (0, _elementor_editor_elements.getElementLabel)(event.detail.element.id)
				});
				setAnchorPosition(event.detail.anchorPosition);
				eventData.current = getComponentEventData(event.detail.element, event.detail.options);
				(0, _elementor_editor_components.trackComponentEvent)(_objectSpread2({
					action: "createClicked",
					source: "user",
					executedBy: "user"
				}, eventData.current));
			};
			window.addEventListener(OPEN_SAVE_AS_COMPONENT_FORM_EVENT, openPopup);
			return () => {
				window.removeEventListener(OPEN_SAVE_AS_COMPONENT_FORM_EVENT, openPopup);
			};
		}, [components === null || components === void 0 ? void 0 : components.length]);
		const handleSave = function() {
			var _ref = _asyncToGenerator(function* (values) {
				try {
					var _componentsSelectors$;
					if (!element) throw new Error(`Can't save element as component: element not found`);
					const { uid, instanceId } = yield createUnpublishedComponent({
						name: values.componentName,
						element: element.element,
						eventData: eventData.current,
						executedBy: "user"
					});
					const publishedComponentId = (_componentsSelectors$ = _elementor_editor_components.componentsSelectors.getComponentByUid(uid)) === null || _componentsSelectors$ === void 0 ? void 0 : _componentsSelectors$.id;
					if (publishedComponentId) (0, _elementor_editor_components.switchToComponent)(publishedComponentId, instanceId);
					else throw new Error("Failed to find published component");
					(0, _elementor_editor_notifications.notify)({
						type: "success",
						message: (0, _wordpress_i18n.__)("Component created successfully.", "elementor-pro"),
						id: `component-saved-successfully-${uid}`
					});
					resetAndClosePopup();
				} catch (_unused) {
					(0, _elementor_editor_notifications.notify)({
						type: "error",
						message: (0, _wordpress_i18n.__)("Failed to create component. Please try again.", "elementor-pro"),
						id: "component-save-failed"
					});
					resetAndClosePopup();
				}
			});
			return function handleSave(_x) {
				return _ref.apply(this, arguments);
			};
		}();
		const resetAndClosePopup = () => {
			setElement(null);
			setAnchorPosition(void 0);
		};
		const cancelSave = () => {
			resetAndClosePopup();
			(0, _elementor_editor_components.trackComponentEvent)(_objectSpread2({
				action: "createCancelled",
				source: "user",
				executedBy: "user"
			}, eventData.current));
		};
		return /* @__PURE__ */ react.createElement(_elementor_editor_ui.ThemeProvider, null, /* @__PURE__ */ react.createElement(_elementor_ui.Popover, {
			open: element !== null,
			onClose: cancelSave,
			anchorReference: "anchorPosition",
			anchorPosition,
			"data-testid": "create-component-form"
		}, element !== null && /* @__PURE__ */ react.createElement(Form, {
			initialValues: { componentName: element.elementLabel },
			handleSave,
			closePopup: cancelSave
		})));
	}
	function shouldOpenForm(element, componentsCount) {
		if (findNonAtomicElementsInElement(element).length > 0) return {
			shouldOpen: false,
			notification: {
				type: "default",
				message: (0, _wordpress_i18n.__)("Components require atomic elements only. Remove widgets to create this component.", "elementor-pro"),
				id: "non-atomic-element-save-blocked"
			}
		};
		if (componentsCount >= MAX_COMPONENTS) return {
			shouldOpen: false,
			notification: {
				type: "default",
				message: (0, _wordpress_i18n.__)(`You've reached the limit of %s components. Please remove an existing one to create a new component.`, "elementor-pro").replace("%s", MAX_COMPONENTS.toString()),
				id: "maximum-number-of-components-exceeded"
			}
		};
		return {
			shouldOpen: true,
			notification: null
		};
	}
	var FONT_SIZE = "tiny";
	var Form = ({ initialValues, handleSave, closePopup }) => {
		const { values, errors, isValid, handleChange, validateForm } = useForm(initialValues);
		const nameInputRef = (0, _elementor_editor_ui.useTextFieldAutoSelect)();
		const { components } = (0, _elementor_editor_components.useComponents)();
		const existingComponentNames = (0, react.useMemo)(() => {
			var _components$map;
			return (_components$map = components === null || components === void 0 ? void 0 : components.map((component) => component.name)) !== null && _components$map !== void 0 ? _components$map : [];
		}, [components]);
		const changeValidationSchema = (0, react.useMemo)(() => createBaseComponentSchema(existingComponentNames), [existingComponentNames]);
		const submitValidationSchema = (0, react.useMemo)(() => createSubmitComponentSchema(existingComponentNames), [existingComponentNames]);
		const handleSubmit = () => {
			const { success, parsedValues } = validateForm(submitValidationSchema);
			if (success) handleSave(parsedValues);
		};
		const texts = {
			heading: (0, _wordpress_i18n.__)("Create component", "elementor-pro"),
			name: (0, _wordpress_i18n.__)("Name", "elementor-pro"),
			cancel: (0, _wordpress_i18n.__)("Cancel", "elementor-pro"),
			create: (0, _wordpress_i18n.__)("Create", "elementor-pro")
		};
		const nameInputId = "component-name";
		return /* @__PURE__ */ react.createElement(_elementor_editor_ui.Form, { onSubmit: handleSubmit }, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			alignItems: "start",
			width: "268px"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			alignItems: "center",
			py: 1,
			px: 1.5,
			sx: {
				columnGap: .5,
				borderBottom: "1px solid",
				borderColor: "divider",
				width: "100%"
			}
		}, /* @__PURE__ */ react.createElement(_elementor_icons.ComponentsIcon, { fontSize: FONT_SIZE }), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "caption",
			sx: {
				color: "text.primary",
				fontWeight: "500",
				lineHeight: 1
			}
		}, texts.heading)), /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			container: true,
			gap: .75,
			alignItems: "start",
			p: 1.5
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			item: true,
			xs: 12
		}, /* @__PURE__ */ react.createElement(_elementor_ui.FormLabel, {
			htmlFor: nameInputId,
			size: "tiny"
		}, texts.name)), /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			item: true,
			xs: 12
		}, /* @__PURE__ */ react.createElement(_elementor_ui.TextField, {
			id: nameInputId,
			size: FONT_SIZE,
			fullWidth: true,
			value: values.componentName,
			onChange: (e) => handleChange(e, "componentName", changeValidationSchema),
			inputProps: { style: {
				color: "text.primary",
				fontWeight: "600"
			} },
			error: Boolean(errors.componentName),
			helperText: errors.componentName,
			inputRef: nameInputRef
		}))), /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			justifyContent: "flex-end",
			alignSelf: "end",
			py: 1,
			px: 1.5
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			onClick: closePopup,
			color: "secondary",
			variant: "text",
			size: "small"
		}, texts.cancel), /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			type: "submit",
			disabled: !isValid,
			variant: "contained",
			color: "primary",
			size: "small"
		}, texts.create))));
	};
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/store/actions/reset-sanitized-components.ts
	function resetSanitizedComponents() {
		_elementor_editor_components.componentsActions.resetSanitizedComponents();
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/store/actions/update-current-component.ts
	function updateCurrentComponent(params) {
		_elementor_editor_components.componentsActions.setPath(params.path);
		_elementor_editor_components.componentsActions.setCurrentComponentId(params.currentComponentId);
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/components/edit-component/backward-compat/use-element-rect.ts
	function useElementRectFallback(element) {
		const [rect, setRect] = (0, react.useState)(new DOMRect(0, 0, 0, 0));
		const onChange = (0, _elementor_utils.throttle)(() => {
			var _element$getBoundingC;
			setRect((_element$getBoundingC = element === null || element === void 0 ? void 0 : element.getBoundingClientRect()) !== null && _element$getBoundingC !== void 0 ? _element$getBoundingC : new DOMRect(0, 0, 0, 0));
		}, 20, true);
		useScrollListener({
			element,
			onChange
		});
		useResizeListener({
			element,
			onChange
		});
		useMutationsListener({
			element,
			onChange
		});
		(0, react.useEffect)(() => () => {
			onChange.cancel();
		}, [onChange]);
		return rect;
	}
	function useScrollListener({ element, onChange }) {
		(0, react.useEffect)(() => {
			var _element$ownerDocumen;
			if (!element) return;
			const win = (_element$ownerDocumen = element.ownerDocument) === null || _element$ownerDocumen === void 0 ? void 0 : _element$ownerDocumen.defaultView;
			win === null || win === void 0 || win.addEventListener("scroll", onChange, { passive: true });
			return () => {
				win === null || win === void 0 || win.removeEventListener("scroll", onChange);
			};
		}, [element, onChange]);
	}
	function useResizeListener({ element, onChange }) {
		(0, react.useEffect)(() => {
			var _element$ownerDocumen2;
			if (!element) return;
			const resizeObserver = new ResizeObserver(onChange);
			resizeObserver.observe(element);
			const win = (_element$ownerDocumen2 = element.ownerDocument) === null || _element$ownerDocumen2 === void 0 ? void 0 : _element$ownerDocumen2.defaultView;
			win === null || win === void 0 || win.addEventListener("resize", onChange, { passive: true });
			return () => {
				resizeObserver.disconnect();
				win === null || win === void 0 || win.removeEventListener("resize", onChange);
			};
		}, [element, onChange]);
	}
	function useMutationsListener({ element, onChange }) {
		(0, react.useEffect)(() => {
			if (!element) return;
			const mutationObserver = new MutationObserver(onChange);
			mutationObserver.observe(element, {
				childList: true,
				subtree: true
			});
			return () => {
				mutationObserver.disconnect();
			};
		}, [element, onChange]);
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/components/edit-component/backward-compat/spotlight-backdrop.tsx
	function SpotlightBackdropFallback({ canvas, element, onExit, ariaLabel }) {
		const rect = useElementRectFallback(element);
		const backdropStyle = {
			position: "fixed",
			top: 0,
			left: 0,
			width: "100vw",
			height: "100vh",
			backgroundColor: "rgba(0, 0, 0, 0.5)",
			zIndex: 999,
			pointerEvents: "painted",
			cursor: "pointer",
			clipPath: element ? getRectClipPath(rect, canvas.defaultView) : void 0
		};
		const handleKeyDown = (event) => {
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				onExit();
			}
		};
		return /* @__PURE__ */ react.createElement("div", {
			style: backdropStyle,
			onClick: onExit,
			onKeyDown: handleKeyDown,
			role: "button",
			tabIndex: 0,
			"aria-label": ariaLabel
		});
	}
	function getRectClipPath(rect, viewport) {
		const { x, y, width, height } = rect;
		const { innerWidth: vw, innerHeight: vh } = viewport;
		return `path(evenodd, 'M 0 0 L ${vw} 0 L ${vw} ${vh} L 0 ${vh} Z M ${x} ${y} L ${x + width} ${y} L ${x + width} ${y + height} L ${x} ${y + height} L ${x} ${y} Z')`;
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/components/edit-component/backward-compat/use-canvas-document.ts
	function useCanvasDocumentFallback() {
		return (0, _elementor_editor_v1_adapters.__privateUseListenTo)((0, _elementor_editor_v1_adapters.commandEndEvent)("editor/documents/attach-preview"), () => (0, _elementor_editor_v1_adapters.getCanvasIframeDocument)());
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/components/edit-component/backward-compat/use-escape-on-canvas.ts
	function useEscapeOnCanvasFallback(canvasDocument, onEscape) {
		(0, react.useEffect)(() => {
			if (!canvasDocument) return;
			const handleEsc = (event) => {
				if (event.key === "Escape") onEscape();
			};
			canvasDocument.body.addEventListener("keydown", handleEsc);
			return () => {
				canvasDocument.body.removeEventListener("keydown", handleEsc);
			};
		}, [canvasDocument, onEscape]);
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/components/edit-component/edit-mode-infra.tsx
	var hasSharedEditModeInfra = (0, _elementor_core_adapter_utils.isCoreAtLeast)("4.2.0");
	var useCanvasDocument = hasSharedEditModeInfra ? _elementor_editor_canvas.useCanvasDocument : useCanvasDocumentFallback;
	var useEscapeOnCanvas = hasSharedEditModeInfra ? _elementor_editor_canvas.useEscapeOnCanvas : useEscapeOnCanvasFallback;
	var SpotlightBackdrop = hasSharedEditModeInfra ? _elementor_editor_canvas.SpotlightBackdrop : SpotlightBackdropFallback;
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/components/edit-component/component-modal.tsx
	function ComponentModal({ topLevelElementDom, onClose }) {
		const canvasDocument = useCanvasDocument();
		useEscapeOnCanvas(canvasDocument, onClose);
		if (!(canvasDocument === null || canvasDocument === void 0 ? void 0 : canvasDocument.body)) return null;
		return (0, react_dom.createPortal)(/* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(BlockEditPage, null), /* @__PURE__ */ react.createElement(SpotlightBackdrop, {
			canvas: canvasDocument,
			element: topLevelElementDom,
			onExit: onClose,
			ariaLabel: (0, _wordpress_i18n.__)("Exit component editing mode", "elementor-pro")
		})), canvasDocument.body);
	}
	/**
	* when switching to another document id, we get a document handler when hovering
	* this functionality originates in Pro, and is intended for editing templates, e.g. header/footer
	* in components we don't want that, so the easy way out is to prevent it of being displayed via a CSS rule
	*/
	function BlockEditPage() {
		return /* @__PURE__ */ react.createElement("style", { "data-e-style-id": "e-block-v3-document-handles-styles" }, `
	.elementor-editor-active {
		& .elementor-section-wrap.ui-sortable {
			display: contents;
		}

		& *[data-editable-elementor-document]:not(.elementor-edit-mode):hover {
			& .elementor-document-handle:not(.elementor-document-save-back-handle) {
				display: none;

				&::before,
				& .elementor-document-handle__inner {
					display: none;
				}
			}
		}
	}
	`);
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/components/edit-component/edit-component.tsx
	function EditComponent() {
		const currentComponentId = (0, _elementor_editor_components.useCurrentComponentId)();
		useHandleDocumentSwitches();
		const onClose = (0, _elementor_utils.throttle)(useNavigateBack(), 100);
		const topLevelElementDom = useComponentDOMElement(currentComponentId !== null && currentComponentId !== void 0 ? currentComponentId : void 0);
		if (!currentComponentId) return null;
		return /* @__PURE__ */ react.createElement(ComponentModal, {
			topLevelElementDom,
			onClose
		});
	}
	function useHandleDocumentSwitches() {
		const documentsManager = (0, _elementor_editor_documents.getV1DocumentsManager)();
		const currentComponentId = (0, _elementor_editor_components.useCurrentComponentId)();
		const path = (0, _elementor_store.__useSelector)(_elementor_editor_components.selectPath);
		(0, react.useEffect)(() => {
			return (0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.commandEndEvent)("editor/documents/open"), () => {
				const nextDocument = documentsManager.getCurrent();
				if (nextDocument.id === currentComponentId) return;
				if (currentComponentId) _elementor_editor_components.apiClient.unlockComponent(currentComponentId);
				resetSanitizedComponents();
				if (!(nextDocument.config.type === "elementor_component")) {
					updateCurrentComponent({
						path: [],
						currentComponentId: null
					});
					return;
				}
				updateCurrentComponent({
					path: getUpdatedComponentPath(path, nextDocument),
					currentComponentId: nextDocument.id
				});
			});
		}, [
			path,
			documentsManager,
			currentComponentId
		]);
	}
	function getUpdatedComponentPath(path, nextDocument) {
		var _nextDocument$contain;
		const componentIndex = path.findIndex(({ componentId }) => componentId === nextDocument.id);
		if (componentIndex >= 0) return path.slice(0, componentIndex + 1);
		const instanceId = nextDocument === null || nextDocument === void 0 || (_nextDocument$contain = nextDocument.container.view) === null || _nextDocument$contain === void 0 || (_nextDocument$contain = _nextDocument$contain.el) === null || _nextDocument$contain === void 0 ? void 0 : _nextDocument$contain.dataset.id;
		const instanceTitle = getInstanceTitle(instanceId, path);
		return [...path, {
			instanceId,
			instanceTitle,
			componentId: nextDocument.id
		}];
	}
	function getInstanceTitle(instanceId, path) {
		var _path$at$componentId;
		var _path$at;
		var _parentContainer$chil;
		var _parentContainer$chil2;
		var _widget$model;
		var _widget$model$get;
		if (!instanceId) return;
		const documentsManager = (0, _elementor_editor_documents.getV1DocumentsManager)();
		const parentDocId = (_path$at$componentId = (_path$at = path.at(-1)) === null || _path$at === void 0 ? void 0 : _path$at.componentId) !== null && _path$at$componentId !== void 0 ? _path$at$componentId : documentsManager.getInitialId();
		const parentDoc = documentsManager.get(parentDocId);
		const parentContainer = parentDoc === null || parentDoc === void 0 ? void 0 : parentDoc.container;
		const widget = parentContainer === null || parentContainer === void 0 || (_parentContainer$chil = parentContainer.children) === null || _parentContainer$chil === void 0 || (_parentContainer$chil2 = _parentContainer$chil.findRecursive) === null || _parentContainer$chil2 === void 0 ? void 0 : _parentContainer$chil2.call(_parentContainer$chil, (container) => container.id === instanceId);
		const editorSettings = widget === null || widget === void 0 || (_widget$model = widget.model) === null || _widget$model === void 0 || (_widget$model$get = _widget$model.get) === null || _widget$model$get === void 0 ? void 0 : _widget$model$get.call(_widget$model, "editor_settings");
		return editorSettings === null || editorSettings === void 0 ? void 0 : editorSettings.title;
	}
	function useComponentDOMElement(id) {
		const { componentContainerDomElement, topLevelElementDom } = getComponentDOMElements(id);
		const [currentElementDom, setCurrentElementDom] = (0, react.useState)(topLevelElementDom);
		(0, react.useEffect)(() => {
			setCurrentElementDom(topLevelElementDom);
		}, [topLevelElementDom]);
		(0, react.useEffect)(() => {
			if (!componentContainerDomElement) return;
			const mutationObserver = new MutationObserver(() => {
				const newElementDom = componentContainerDomElement.children[0];
				setCurrentElementDom(newElementDom);
			});
			mutationObserver.observe(componentContainerDomElement, { childList: true });
			return () => {
				mutationObserver.disconnect();
			};
		}, [componentContainerDomElement]);
		return currentElementDom;
	}
	function getComponentDOMElements(id) {
		var _componentContainer$v;
		var _componentContainer$v2;
		var _componentContainerDo;
		if (!id) return {
			componentContainerDomElement: null,
			topLevelElementDom: null
		};
		const currentComponent = (0, _elementor_editor_documents.getV1DocumentsManager)().get(id);
		const componentContainer = currentComponent === null || currentComponent === void 0 ? void 0 : currentComponent.container;
		const componentContainerDomElement = (_componentContainer$v = componentContainer === null || componentContainer === void 0 || (_componentContainer$v2 = componentContainer.view) === null || _componentContainer$v2 === void 0 || (_componentContainer$v2 = _componentContainer$v2.el) === null || _componentContainer$v2 === void 0 || (_componentContainer$v2 = _componentContainer$v2.children) === null || _componentContainer$v2 === void 0 ? void 0 : _componentContainer$v2[0]) !== null && _componentContainer$v !== void 0 ? _componentContainer$v : null;
		return {
			componentContainerDomElement,
			topLevelElementDom: (_componentContainerDo = componentContainerDomElement === null || componentContainerDomElement === void 0 ? void 0 : componentContainerDomElement.children[0]) !== null && _componentContainerDo !== void 0 ? _componentContainerDo : null
		};
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/components/load-template-components.tsx
	var LoadTemplateComponents = () => {
		if ((0, _elementor_editor_templates_extended.isCoreHandlingTemplateStyles)()) return null;
		return /* @__PURE__ */ react.createElement(LoadTemplateComponentsInternal, null);
	};
	function LoadTemplateComponentsInternal() {
		const templates = (0, _elementor_editor_templates_extended.useLoadedTemplates)();
		(0, react.useEffect)(() => {
			(0, _elementor_editor_components.loadComponentsAssets)(templates.flatMap((elements) => elements !== null && elements !== void 0 ? elements : []));
		}, [templates]);
		return null;
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/sync/cleanup-overridable-props-on-delete-and-detach.ts
	var deleteActionEntries = /* @__PURE__ */ new Map();
	function CleanupOverridablePropsOnDeleteAndDetach() {
		(0, react.useEffect)(() => {
			registerCleanupOverridablePropsOnDelete();
			registerRestoreOverridablePropsOnUndo();
			registerCleanupOverridablePropsOnRedo();
			const removeDetachEventHandlers = registerDetachEventHandlers();
			registerClearDeleteEntriesOnDocumentSwitch();
			return () => {
				removeDetachEventHandlers();
			};
		}, []);
		return null;
	}
	function cleanupOverridableProps(deletedElementIds, actionId) {
		const currentComponentId = _elementor_editor_components.componentsSelectors.getCurrentComponentId();
		if (!currentComponentId) return;
		const overridableProps = _elementor_editor_components.componentsSelectors.getOverridableProps(currentComponentId);
		if (!overridableProps || Object.keys(overridableProps.props).length === 0) return;
		const propsToDelete = Object.values(overridableProps.props).filter((prop) => deletedElementIds.includes(prop.elementId));
		if (propsToDelete.length === 0) return;
		if (actionId !== void 0) deleteActionEntries.set(actionId, {
			props: propsToDelete,
			elementIds: deletedElementIds
		});
		deleteComponentOverridableProp({
			componentId: currentComponentId,
			propKey: propsToDelete.map((prop) => prop.overrideKey),
			executedBy: "system",
			revertElementOverridable: false
		});
	}
	function undoCleanupOverridableProps(actionId) {
		const currentComponentId = _elementor_editor_components.componentsSelectors.getCurrentComponentId();
		if (!currentComponentId) return;
		const entry = deleteActionEntries.get(actionId);
		if (!entry) return;
		const restoreProps = () => {
			for (const prop of entry.props) createComponentOverridableProp(_objectSpread2(_objectSpread2({ componentId: currentComponentId }, prop), {}, { executedBy: "system" }));
		};
		if ((0, _elementor_core_adapter_utils.isCoreAtLeast)("4.1.0")) (0, _elementor_editor_canvas.doAfterRender)(entry.elementIds, restoreProps);
	}
	function redoCleanupOverridableProps(actionId) {
		const currentComponentId = _elementor_editor_components.componentsSelectors.getCurrentComponentId();
		if (!currentComponentId) return;
		const entry = deleteActionEntries.get(actionId);
		if (!entry) return;
		deleteComponentOverridableProp({
			componentId: currentComponentId,
			propKey: entry.props.map((prop) => prop.overrideKey),
			executedBy: "system",
			revertElementOverridable: false
		});
	}
	function registerCleanupOverridablePropsOnDelete() {
		(0, _elementor_editor_v1_adapters.registerDataHook)("dependency", "document/elements/delete", (args, options) => {
			var _args$containers;
			if (isPartOfMoveCommand(options)) return true;
			const containers = (_args$containers = args.containers) !== null && _args$containers !== void 0 ? _args$containers : args.container ? [args.container] : [];
			if (containers.length === 0) return true;
			const deletedElementIds = collectDeletedElementIds(containers);
			if (deletedElementIds.length === 0) return true;
			cleanupOverridableProps(deletedElementIds, options === null || options === void 0 ? void 0 : options.currentHistoryItemId);
			return true;
		});
	}
	function registerClearDeleteEntriesOnDocumentSwitch() {
		(0, _elementor_editor_v1_adapters.registerDataHook)("after", "editor/documents/attach-preview", () => {
			deleteActionEntries.clear();
		});
	}
	function registerRestoreOverridablePropsOnUndo() {
		(0, _elementor_editor_v1_adapters.registerDataHook)("after", "document/history/undo", function() {
			var _ref = _asyncToGenerator(function* (_, results) {
				if (!(results === null || results === void 0 ? void 0 : results.originHistoryItemId)) return;
				undoCleanupOverridableProps(results.originHistoryItemId);
			});
			return function(_x, _x2) {
				return _ref.apply(this, arguments);
			};
		}());
	}
	function registerCleanupOverridablePropsOnRedo() {
		(0, _elementor_editor_v1_adapters.registerDataHook)("after", "document/history/redo", (_, results) => {
			if (!(results === null || results === void 0 ? void 0 : results.originHistoryItemId)) return;
			redoCleanupOverridableProps(results.originHistoryItemId);
		});
	}
	var DETACH_EVENT = "elementor/components/detach-instance";
	var DETACH_UNDO_EVENT = "elementor/components/undo-detach-instance";
	var DETACH_REDO_EVENT = "elementor/components/redo-detach-instance";
	function registerDetachEventHandlers() {
		const onDetach = (event) => {
			const { detachedInstanceId, detachActionId } = event.detail;
			cleanupOverridableProps([detachedInstanceId], detachActionId);
		};
		const onDetachUndo = (event) => {
			const { detachActionId } = event.detail;
			undoCleanupOverridableProps(detachActionId);
		};
		const onDetachRedo = (event) => {
			const { detachActionId } = event.detail;
			redoCleanupOverridableProps(detachActionId);
		};
		window.addEventListener(DETACH_EVENT, onDetach);
		window.addEventListener(DETACH_UNDO_EVENT, onDetachUndo);
		window.addEventListener(DETACH_REDO_EVENT, onDetachRedo);
		return () => {
			window.removeEventListener(DETACH_EVENT, onDetach);
			window.removeEventListener(DETACH_UNDO_EVENT, onDetachUndo);
			window.removeEventListener(DETACH_REDO_EVENT, onDetachRedo);
		};
	}
	function collectDeletedElementIds(containers) {
		return containers.filter(Boolean).flatMap((container) => [container, ...(0, _elementor_editor_elements.getAllDescendants)(container)]).map((element) => {
			var _element$model$get;
			var _element$model;
			var _element$model$get2;
			return (_element$model$get = (_element$model = element.model) === null || _element$model === void 0 || (_element$model$get2 = _element$model.get) === null || _element$model$get2 === void 0 ? void 0 : _element$model$get2.call(_element$model, "id")) !== null && _element$model$get !== void 0 ? _element$model$get : element.id;
		}).filter((id) => Boolean(id));
	}
	function isPartOfMoveCommand(options) {
		var _options$commandsCurr;
		var _options$commandsCurr2;
		const isMoveCommandInTrace = (options === null || options === void 0 || (_options$commandsCurr = options.commandsCurrentTrace) === null || _options$commandsCurr === void 0 ? void 0 : _options$commandsCurr.includes("document/elements/move")) || (options === null || options === void 0 || (_options$commandsCurr2 = options.commandsCurrentTrace) === null || _options$commandsCurr2 === void 0 ? void 0 : _options$commandsCurr2.includes("document/repeater/move"));
		return Boolean(isMoveCommandInTrace);
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/store/actions/update-component-sanitized-attribute.ts
	function updateComponentSanitizedAttribute(componentId, attribute) {
		_elementor_editor_components.componentsActions.updateComponentSanitizedAttribute(componentId, attribute);
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/sync/sanitize-overridable-props.ts
	function SanitizeOverridableProps() {
		const currentComponentId = (0, _elementor_editor_components.useCurrentComponentId)();
		const overridableProps = (0, _elementor_editor_components.useOverridableProps)(currentComponentId);
		const isSanitized = (0, _elementor_editor_components.useIsSanitizedComponent)(currentComponentId, "overridableProps");
		(0, react.useEffect)(() => {
			var _overridableProps$pro;
			if (isSanitized || !overridableProps || !currentComponentId) return;
			const filtered = (0, _elementor_editor_components.filterValidOverridableProps)(overridableProps);
			const propsToDelete = Object.keys((_overridableProps$pro = overridableProps.props) !== null && _overridableProps$pro !== void 0 ? _overridableProps$pro : {}).filter((key) => !filtered.props[key]);
			if (propsToDelete.length > 0) propsToDelete.forEach((key) => {
				deleteComponentOverridableProp({
					componentId: currentComponentId,
					propKey: key,
					executedBy: "system"
				});
			});
			updateComponentSanitizedAttribute(currentComponentId, "overridableProps");
		}, [
			currentComponentId,
			isSanitized,
			overridableProps
		]);
		return null;
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/feature-guarded-injections.tsx
	function FeatureGuardedComponentPropertiesPanel() {
		return /* @__PURE__ */ react.createElement(FeatureGuard, null, /* @__PURE__ */ react.createElement(panel.component, null));
	}
	function FeatureGuardedTopInjections() {
		return /* @__PURE__ */ react.createElement(FeatureGuard, null, /* @__PURE__ */ react.createElement(CreateComponentForm, null), /* @__PURE__ */ react.createElement(EditComponent, null));
	}
	function FeatureGuardedLogicInjections() {
		return /* @__PURE__ */ react.createElement(FeatureGuard, null, /* @__PURE__ */ react.createElement(SanitizeOverridableProps, null), /* @__PURE__ */ react.createElement(LoadTemplateComponents, null), /* @__PURE__ */ react.createElement(CleanupOverridablePropsOnDeleteAndDetach, null));
	}
	function FeatureGuard({ children }) {
		const { data: isFeatureEnabled, isFetched: isFeatureFetched } = (0, _elementor_license_api.useHasFeature)(COMPONENTS_FEATURE_NAME);
		if (!isFeatureFetched || !isFeatureEnabled) return null;
		return /* @__PURE__ */ react.createElement(react.Fragment, null, children);
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/mcp/components-list-resource.ts
	var COMPONENTS_LIST_URI = "elementor://components/list";
	function buildComponentsList() {
		var _componentsSelectors$;
		var _componentsSelectors$2;
		const published = (_componentsSelectors$ = _elementor_editor_components.componentsSelectors.getComponents()) !== null && _componentsSelectors$ !== void 0 ? _componentsSelectors$ : [];
		const unpublished = (_componentsSelectors$2 = _elementor_editor_components.componentsSelectors.getUnpublishedComponents()) !== null && _componentsSelectors$2 !== void 0 ? _componentsSelectors$2 : [];
		return [...published, ...unpublished];
	}
	var initComponentsListResource = (reg) => {
		const { resource, sendResourceUpdated } = reg;
		resource("components-list", COMPONENTS_LIST_URI, { description: "Live list of all reusable components (published and unpublished) with full component data." }, () => ({ contents: [{
			uri: COMPONENTS_LIST_URI,
			mimeType: "application/json",
			text: JSON.stringify(buildComponentsList())
		}] }));
		(0, _elementor_store.__subscribeWithSelector)((state) => state[_elementor_editor_components.SLICE_NAME], () => {
			sendResourceUpdated({ uri: COMPONENTS_LIST_URI });
		});
	};
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/mcp/manage-component-tool.ts
	var InputSchema = {
		action: _elementor_schema.z.enum(["save", "get"]).describe("The operation to perform: \"get\" - retrieve a specific component by UID; \"save\" - create a new component from an existing element."),
		element_id: _elementor_schema.z.string().optional().describe("[Required for \"save\"] The unique identifier of the element to save as a component. Use the \"list-elements\" tool to find available element IDs in the current document."),
		component_name: _elementor_schema.z.string().optional().describe("[Required for \"save\"] The name for the new component. Should be descriptive and unique among existing components. Must be unique among all components."),
		overridable_props: _elementor_schema.z.object({ props: _elementor_schema.z.record(_elementor_schema.z.object({
			elementId: _elementor_schema.z.string().describe("The id of the child element that you want to override its settings"),
			propKey: _elementor_schema.z.string().describe("The property key of the child element that you want to override its settings (e.g., \"text\", \"url\", \"tag\"). To get the available propKeys for an element, use the \"get-element-type-config\" tool."),
			label: _elementor_schema.z.string().describe("A unique, user-friendly display name for this property (e.g., \"Hero Headline\", \"CTA Button Text\"). Must be unique within the same component."),
			group: _elementor_schema.z.string().optional().describe("Non unique, optional property grouping")
		})) }).optional().describe("[Optional for \"save\"] Overridable properties configuration. Specify which CHILD element properties can be customized. Only elementId and propKey are required; To get the available propKeys for a child element you must use the \"get-element-type-config\" tool."),
		groups: _elementor_schema.z.array(_elementor_schema.z.string()).describe("[Optional for \"save\"] Property Groups, by order, unique values").optional(),
		component_uid: _elementor_schema.z.string().optional().describe("[Required for \"get\"] The unique identifier of the component to retrieve.")
	};
	var OutputSchema = {
		message: _elementor_schema.z.string().optional().describe("Additional information about the operation result"),
		component_uid: _elementor_schema.z.string().optional().describe("The unique identifier of the newly created component (only present on \"save\" success)"),
		component: _elementor_schema.z.object({
			uid: _elementor_schema.z.string(),
			name: _elementor_schema.z.string(),
			status: _elementor_schema.z.enum(["published", "unpublished"]),
			id: _elementor_schema.z.number().optional(),
			overridableProps: _elementor_schema.z.unknown().optional(),
			elements: _elementor_schema.z.array(_elementor_schema.z.any()).optional().describe("The elements of the component (only when component is unpublished)")
		}).optional().describe("The requested component data (only present on \"get\")")
	};
	var ERROR_MESSAGES = {
		ELEMENT_NOT_FOUND: "Element not found. Use 'list-elements' to get valid element IDs.",
		ELEMENT_NOT_ONE_OF_TYPES: (validTypes) => `Element is not one of the following types: ${validTypes.join(", ")}`,
		ELEMENT_IS_LOCKED: "Cannot save a locked element as a component.",
		COMPONENT_NOT_FOUND: (uid) => `Component with UID "${uid}" not found.`,
		MISSING_ELEMENT_ID: "element_id is required for the \"save\" action.",
		MISSING_COMPONENT_NAME: "component_name is required for the \"save\" action.",
		MISSING_COMPONENT_UID: "component_uid is required for the \"get\" action."
	};
	var handleManageComponent = function() {
		var _ref = _asyncToGenerator(function* (params) {
			const { action } = params;
			switch (action) {
				case "get": return handleGet(params);
				case "save": return handleSave(params);
			}
		});
		return function handleManageComponent(_x) {
			return _ref.apply(this, arguments);
		};
	}();
	function handleGet(_x2) {
		return _handleGet.apply(this, arguments);
	}
	function _handleGet() {
		_handleGet = _asyncToGenerator(function* (params) {
			const { component_uid: componentUid } = params;
			if (!componentUid) throw new Error(ERROR_MESSAGES.MISSING_COMPONENT_UID);
			const found = _elementor_editor_components.componentsSelectors.getComponentByUid(componentUid);
			if (!found) throw new Error(ERROR_MESSAGES.COMPONENT_NOT_FOUND(componentUid));
			const isPublished = "id" in found;
			/** This block can be reused at version 4.2.0 with getComponentDocumentData function */
			let elements;
			if (isPublished) {
				const documentManager = (0, _elementor_editor_documents.getV1DocumentsManager)();
				try {
					const document = yield documentManager.request(found.id);
					elements = document === null || document === void 0 ? void 0 : document.elements;
				} catch (_unused) {
					elements = void 0;
				}
			}
			/** End of the block */
			return {
				status: "ok",
				component: {
					uid: found.uid,
					name: found.name,
					status: isPublished ? "published" : "unpublished",
					id: isPublished ? found.id : void 0,
					overridableProps: found.overridableProps,
					elements
				}
			};
		});
		return _handleGet.apply(this, arguments);
	}
	function handleSave(_x3) {
		return _handleSave.apply(this, arguments);
	}
	function _handleSave() {
		_handleSave = _asyncToGenerator(function* (params) {
			const { groups = [], element_id: elementId, component_name: componentName, overridable_props: overridablePropsInput } = params;
			if (!elementId) throw new Error(ERROR_MESSAGES.MISSING_ELEMENT_ID);
			if (!componentName) throw new Error(ERROR_MESSAGES.MISSING_COMPONENT_NAME);
			const validElementTypes = getValidElementTypes();
			const container = (0, _elementor_editor_elements.getContainer)(elementId);
			if (!container) throw new Error(ERROR_MESSAGES.ELEMENT_NOT_FOUND);
			const elType = container.model.get("elType");
			if (!validElementTypes.includes(elType)) throw new Error(ERROR_MESSAGES.ELEMENT_NOT_ONE_OF_TYPES(validElementTypes));
			const element = container.model.toJSON({ remove: ["default"] });
			if (element === null || element === void 0 ? void 0 : element.isLocked) throw new Error(ERROR_MESSAGES.ELEMENT_IS_LOCKED);
			const propertyGroups = (groups.indexOf("Default") >= 0 ? [...groups] : ["Default", ...groups]).map((groupName) => ({
				id: (0, _elementor_utils.generateUniqueId)("group"),
				label: groupName,
				props: []
			}));
			const overridableProps = overridablePropsInput ? enrichOverridableProps(overridablePropsInput, element, propertyGroups) : void 0;
			if (overridableProps) updateElementDataWithOverridableProps(element, overridableProps);
			const uid = (0, _elementor_utils.generateUniqueId)("component");
			try {
				yield _elementor_editor_components.apiClient.validate({ items: [{
					uid,
					title: componentName,
					elements: [element],
					settings: { overridable_props: overridableProps }
				}] });
			} catch (error) {
				if (error instanceof _elementor_http_client.AxiosError) {
					var _error$response;
					throw new Error((_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.data.message);
				}
				throw new Error("Unknown error");
			}
			yield createUnpublishedComponent({
				name: componentName,
				element,
				eventData: null,
				uid,
				overridableProps,
				executedBy: "mcp_tool"
			});
			if (overridableProps) Object.values(overridableProps.props).forEach((prop) => {
				var _prop$widgetType;
				(0, _elementor_editor_components.trackComponentEvent)({
					action: "propertyExposed",
					source: "mcp_tool",
					executedBy: "mcp_tool",
					component_uid: uid,
					property_id: prop.overrideKey,
					property_path: prop.propKey,
					property_name: prop.label,
					element_type: (_prop$widgetType = prop.widgetType) !== null && _prop$widgetType !== void 0 ? _prop$widgetType : prop.elType
				});
			});
			return {
				status: "ok",
				message: `Component "${componentName}" created successfully.`,
				component_uid: uid
			};
		});
		return _handleSave.apply(this, arguments);
	}
	function enrichOverridableProps(input, rootElement, propertyGroups) {
		const enrichedProps = {};
		const enrichedGroups = {};
		const defaultGroup = propertyGroups.find((g) => g.label === "Default");
		if (!defaultGroup) throw new Error("Internal mcp error: could not generate default group");
		Object.entries(input.props).forEach(([, prop]) => {
			var _element$settings;
			var _elementType$propsSch;
			const { elementId, propKey, label, group = "Default" } = prop;
			const targetGroup = propertyGroups.find((g) => g.label === group) || defaultGroup;
			const targetGroupId = targetGroup.id;
			const element = findElementById(rootElement, elementId);
			if (!element) throw new Error(`Element with ID "${elementId}" not found in component`);
			const elType = element.elType;
			const widgetType = element.widgetType || element.elType;
			const elementType = (0, _elementor_editor_elements.getElementType)(widgetType);
			if (!elementType) throw new Error(`Element type "${widgetType}" is not atomic or does not have a settings schema. Cannot expose property "${propKey}" for element "${elementId}".`);
			if (!elementType.propsSchema[propKey]) {
				const availableProps = Object.keys(elementType.propsSchema).join(", ");
				throw new Error(`Property "${propKey}" does not exist in element "${elementId}" (type: ${widgetType}). Available properties: ${availableProps}`);
			}
			const overrideKey = (0, _elementor_utils.generateUniqueId)("prop");
			const originValue = ((_element$settings = element.settings) === null || _element$settings === void 0 ? void 0 : _element$settings[propKey]) ? element.settings[propKey] : (_elementType$propsSch = elementType.propsSchema[propKey].default) !== null && _elementType$propsSch !== void 0 ? _elementType$propsSch : null;
			if (!enrichedGroups[targetGroupId]) enrichedGroups[targetGroupId] = {
				id: targetGroupId,
				label: targetGroup.label,
				props: []
			};
			enrichedGroups[targetGroupId].props.push(overrideKey);
			enrichedProps[overrideKey] = {
				overrideKey,
				label,
				elementId,
				propKey,
				elType,
				widgetType,
				originValue,
				groupId: targetGroupId
			};
		});
		return {
			props: enrichedProps,
			groups: {
				items: enrichedGroups,
				order: propertyGroups.filter((g) => enrichedGroups[g.id]).map((g) => g.id)
			}
		};
	}
	function updateElementDataWithOverridableProps(rootElement, overridableProps) {
		Object.values(overridableProps.props).forEach((prop) => {
			const element = findElementById(rootElement, prop.elementId);
			if (!element || !element.settings) return;
			element.settings[prop.propKey] = {
				$$type: "overridable",
				value: {
					override_key: prop.overrideKey,
					origin_value: prop.originValue
				}
			};
		});
	}
	function findElementById(root, targetId) {
		if (root.id === targetId) return root;
		if (root.elements) for (const child of root.elements) {
			const found = findElementById(child, targetId);
			if (found) return found;
		}
		return null;
	}
	function getValidElementTypes() {
		const types = (0, _elementor_editor_elements.getWidgetsCache)();
		if (!types) return [];
		return Object.entries(types).reduce((acc, [type, value]) => {
			if (!value.atomic_props_schema || !value.show_in_panel || value.elType === "widget") return acc;
			acc.push(type);
			return acc;
		}, []);
	}
	var generatePrompt = () => {
		const prompt = (0, _elementor_editor_mcp.toolPrompts)("manage-component");
		prompt.description(`
Manage reusable components in the Elementor editor: retrieve a specific component or save an element as a new component.

# **CRITICAL - Before any operation, read the resources**
Always read all required resources before performing any action.

# Actions

## "get" - Get a specific component
Returns full details of a component including its overridable properties.
Required: component_uid

## "save" - Save an element as a new component
Creates a new reusable component from an existing element.
Required: element_id, component_name
Optional: overridable_props, groups

# IMPORTANT - Before saving a new component
**Always read [${COMPONENTS_LIST_URI}] first** to see existing components and avoid creating duplicates.
Use "get" to inspect an existing component if you need to understand its structure.

# When NOT to use "save"
- Element is already a component (widgetType: 'e-component')
- Element is locked
- Element is not an atomic element (atomic_props_schema is not defined)
- Element elType is a 'widget'

# **REQUIRED RESOURCES (Must read before any operation)**
1. [${COMPONENTS_LIST_URI}]
   **MANDATORY** - Live list of all existing components. Always read this first to check for duplicates.

2. [${_elementor_editor_canvas.DOCUMENT_STRUCTURE_URI}]
   **MANDATORY** - Required to understand the document structure and identify child elements for overridable properties.

3. [${_elementor_editor_canvas.WIDGET_SCHEMA_URI}]
   **MANDATORY** - Required to understand which properties are available for each widget type.

# Instructions for "save" - MUST FOLLOW IN ORDER
## Step 1: Check existing components
1. Read the [${COMPONENTS_LIST_URI}] resource to see all existing components
2. If a suitable component already exists, consider using it instead

## Step 2: Identify the Target Element
1. Read the [${_elementor_editor_canvas.DOCUMENT_STRUCTURE_URI}] resource
2. Locate the element by its element_id
3. Verify the element type is valid, not locked, and not already a component

## Step 3: Define Overridable Properties
Skip ONLY if the user explicitly requests no customizable properties.

1. **Identify Child Elements** via [${_elementor_editor_canvas.DOCUMENT_STRUCTURE_URI}]
2. **Find Available Properties** via [${_elementor_editor_canvas.WIDGET_SCHEMA_URI}] в†’ atomic_props_schema
   - Use only top-level props (e.g., "text", "url", "tag", "size")
3. **Build the overridable_props object** with unique, user-friendly labels

## Step 4: Execute "save"
Call with element_id, component_name, and optionally overridable_props and groups.

# CONSTRAINTS
- NEVER try to override properties of the parent element itself вЂ” ONLY child elements
- NEVER use invalid propKeys вЂ” always verify against atomic_props_schema in [${_elementor_editor_canvas.WIDGET_SCHEMA_URI}]
- Element IDs must exist within the target element's children
- The element being saved must not be inside another component
`);
		prompt.parameter("action", `**MANDATORY** The operation to perform:
- "get": Returns details of a specific component. Requires component_uid.
- "save": Creates a new component from an element. Requires element_id and component_name.`);
		prompt.parameter("component_uid", `**Required for "get"** The unique identifier of the component to retrieve.
Read the [${COMPONENTS_LIST_URI}] resource first to discover available component UIDs.`);
		prompt.parameter("element_id", `**Required for "save"** The unique identifier of the element to save as a component.
Use the [${_elementor_editor_canvas.DOCUMENT_STRUCTURE_URI}] resource to find available element IDs.`);
		prompt.parameter("component_name", `**Required for "save"** A descriptive name for the new component.
Should be unique and clearly describe the component's purpose (e.g., "Hero Section", "Feature Card").`);
		prompt.parameter("overridable_props", `**Optional for "save"** Configuration for which child element properties can be customized in component instances.

Structure:
\`\`\`json
{
  "props": {
    "<unique-key>": {
      "elementId": "<child-element-id>",
      "propKey": "<property-key>",
      "label": "<user-friendly-name>"
    }
  }
}
\`\`\`

To populate this correctly:
1. Use [${_elementor_editor_canvas.DOCUMENT_STRUCTURE_URI}] to find child element IDs and their widgetType
2. Use [${_elementor_editor_canvas.WIDGET_SCHEMA_URI}] to find the atomic_props_schema for each child element's widgetType
3. Only include properties you want to be customizable in component instances
4. Provide a unique, user-friendly label for each property`);
		prompt.example(`
Get a specific component:
\`\`\`json
{ "action": "get", "component_uid": "component-abc123" }
\`\`\`

Save without overridable properties:
\`\`\`json
{ "action": "save", "element_id": "abc123", "component_name": "Hero Section" }
\`\`\`

Save with overridable properties:
\`\`\`json
{
  "action": "save",
  "element_id": "abc123",
  "component_name": "Feature Card",
  "overridable_props": {
    "props": {
      "heading-text": {
        "elementId": "heading-123",
        "propKey": "text",
        "label": "Card Title",
        "group": "Content"
      },
      "button-link": {
        "elementId": "button-456",
        "propKey": "url",
        "label": "Button Link",
        "group": "Settings"
      }
    }
  }
}
\`\`\`
`);
		prompt.instruction(`After successful "save", the component will be available in the components library and can be inserted into any page or template.`);
		prompt.instruction(`When overridable properties are defined, component instances will show customization controls for those specific properties in the editing panel.`);
		return prompt.prompt();
	};
	var initManageComponentTool = (reg) => {
		const { addTool } = reg;
		addTool({
			name: "manage-component",
			schema: InputSchema,
			outputSchema: OutputSchema,
			description: generatePrompt(),
			requiredResources: [
				{
					uri: COMPONENTS_LIST_URI,
					description: "List of all components"
				},
				{
					uri: _elementor_editor_canvas.DOCUMENT_STRUCTURE_URI,
					description: "Document structure"
				},
				{
					uri: _elementor_editor_canvas.WIDGET_SCHEMA_URI,
					description: "Widget schema"
				}
			],
			handler: handleManageComponent
		});
	};
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/mcp/index.ts
	function initMcp(reg) {
		const { setMCPDescription, waitForReady } = reg;
		setMCPDescription(`Components V4 MCP Server - Tools for creating and managing reusable components.`);
		waitForReady().then(() => {
			initComponentsListResource(reg);
			initManageComponentTool(reg);
		});
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/shortcuts/create-component-shortcut.ts
	var CREATE_COMPONENT_SHORTCUT_KEYS = "ctrl+shift+k";
	var OPEN_SAVE_AS_COMPONENT_FORM_EVENT = "elementor/editor/open-save-as-component-form";
	function isCreateComponentAllowed() {
		const selectedElements = (0, _elementor_editor_elements.getSelectedElements)();
		if (selectedElements.length !== 1) return { allowed: false };
		const element = selectedElements[0];
		if (!(0, _elementor_editor_elements.getElementType)(element.type)) return { allowed: false };
		const widgetsCache = (0, _elementor_editor_elements.getWidgetsCache)();
		const elementConfig = widgetsCache === null || widgetsCache === void 0 ? void 0 : widgetsCache[element.type];
		if (!(elementConfig === null || elementConfig === void 0 ? void 0 : elementConfig.atomic_props_schema) || !(elementConfig === null || elementConfig === void 0 ? void 0 : elementConfig.show_in_panel) || (elementConfig === null || elementConfig === void 0 ? void 0 : elementConfig.elType) === "widget") return { allowed: false };
		const container = window.elementor.getContainer(element.id);
		if (!container || container.isLocked()) return { allowed: false };
		return {
			allowed: true,
			container
		};
	}
	function triggerCreateComponentForm(container) {
		const legacyWindow = window;
		const elementRect = container.view.el.getBoundingClientRect();
		const iframeRect = legacyWindow.elementor.$preview[0].getBoundingClientRect();
		const anchorPosition = {
			left: iframeRect.left + elementRect.left + elementRect.width / 2,
			top: iframeRect.top + elementRect.top
		};
		window.dispatchEvent(new CustomEvent(OPEN_SAVE_AS_COMPONENT_FORM_EVENT, { detail: {
			element: container.model.toJSON({ remove: ["default"] }),
			anchorPosition,
			options: {
				trigger: "keyboard",
				location: "canvas",
				secondaryLocation: "canvasElement"
			}
		} }));
	}
	function initCreateComponentShortcut() {
		window.$e.shortcuts.register(CREATE_COMPONENT_SHORTCUT_KEYS, {
			callback: () => {
				const result = isCreateComponentAllowed();
				if (!result.allowed) return;
				triggerCreateComponentForm(result.container);
			},
			dependency: () => {
				return isCreateComponentAllowed().allowed;
			},
			exclude: ["input"]
		});
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/sync/set-component-overridable-props-settings-before-save.ts
	var setComponentOverridablePropsSettingsBeforeSave = ({ container }) => {
		const currentDocument = container.document;
		if (!currentDocument || currentDocument.config.type !== "elementor_component") return;
		const overridableProps = _elementor_editor_components.componentsSelectors.getOverridableProps(currentDocument.id);
		if (overridableProps) container.settings.set("overridable_props", overridableProps);
	};
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/sync/update-archived-component-before-save.ts
	var failedNotification = (message) => ({
		type: "error",
		message: `Failed to archive components: ${message}`,
		id: "failed-archived-components-notification"
	});
	var updateArchivedComponentBeforeSave = function() {
		var _ref = _asyncToGenerator(function* (status) {
			try {
				const archivedComponents = _elementor_editor_components.componentsSelectors.getArchivedThisSession();
				if (!archivedComponents.length) return;
				const failedIds = (yield _elementor_editor_components.apiClient.updateArchivedComponents(archivedComponents, status)).failedIds.join(", ");
				if (failedIds) (0, _elementor_editor_notifications.notify)(failedNotification(failedIds));
			} catch (error) {
				throw new Error(`Failed to update archived components: ${error}`);
			}
		});
		return function updateArchivedComponentBeforeSave(_x) {
			return _ref.apply(this, arguments);
		};
	}();
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/sync/update-component-title-before-save.ts
	var updateComponentTitleBeforeSave = function() {
		var _ref = _asyncToGenerator(function* (status) {
			const updatedComponentNames = _elementor_editor_components.componentsSelectors.getUpdatedComponentNames();
			if (!updatedComponentNames.length) return;
			if ((yield _elementor_editor_components.apiClient.updateComponentTitle(updatedComponentNames, status)).failedIds.length === 0) _elementor_editor_components.componentsActions.cleanUpdatedComponentNames();
		});
		return function updateComponentTitleBeforeSave(_x) {
			return _ref.apply(this, arguments);
		};
	}();
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/sync/create-components-before-save.ts
	function createComponentsBeforeSave(_x) {
		return _createComponentsBeforeSave.apply(this, arguments);
	}
	function _createComponentsBeforeSave() {
		_createComponentsBeforeSave = _asyncToGenerator(function* ({ elements, status }) {
			const unpublishedComponents = _elementor_editor_components.componentsSelectors.getUnpublishedComponents();
			if (!unpublishedComponents.length) return;
			try {
				const uidToComponentId = yield createComponents(unpublishedComponents, status);
				updateComponentInstances(elements, uidToComponentId);
				_elementor_editor_components.componentsActions.add(unpublishedComponents.map((component) => ({
					id: uidToComponentId.get(component.uid),
					name: component.name,
					uid: component.uid,
					overridableProps: component.overridableProps ? component.overridableProps : void 0
				})));
				_elementor_editor_components.componentsActions.resetUnpublished();
			} catch (error) {
				const failedUids = unpublishedComponents.map((component) => component.uid);
				_elementor_editor_components.componentsActions.removeUnpublished(failedUids);
				throw new Error(`Failed to publish components: ${error}`);
			}
		});
		return _createComponentsBeforeSave.apply(this, arguments);
	}
	function createComponents(_x2, _x3) {
		return _createComponents.apply(this, arguments);
	}
	function _createComponents() {
		_createComponents = _asyncToGenerator(function* (components, status) {
			const response = yield _elementor_editor_components.apiClient.create({
				status,
				items: components.map((component) => ({
					uid: component.uid,
					title: component.name,
					elements: component.elements,
					settings: component.overridableProps ? { overridable_props: component.overridableProps } : void 0
				}))
			});
			const map = /* @__PURE__ */ new Map();
			Object.entries(response).forEach(([key, value]) => {
				map.set(key, value);
			});
			return map;
		});
		return _createComponents.apply(this, arguments);
	}
	function updateComponentInstances(elements, uidToComponentId) {
		elements.forEach((element) => {
			const { shouldUpdate, newComponentId } = shouldUpdateElement(element, uidToComponentId);
			if (shouldUpdate) updateElementComponentId(element.id, newComponentId);
			if (element.elements) updateComponentInstances(element.elements, uidToComponentId);
		});
	}
	function shouldUpdateElement(element, uidToComponentId) {
		if (element.widgetType === "e-component") {
			var _element$settings;
			const currentComponentId = (_element$settings = element.settings) === null || _element$settings === void 0 || (_element$settings = _element$settings.component_instance) === null || _element$settings === void 0 || (_element$settings = _element$settings.value) === null || _element$settings === void 0 ? void 0 : _element$settings.component_id.value;
			if (currentComponentId && uidToComponentId.has(currentComponentId.toString())) return {
				shouldUpdate: true,
				newComponentId: uidToComponentId.get(currentComponentId.toString())
			};
		}
		return {
			shouldUpdate: false,
			newComponentId: null
		};
	}
	function updateElementComponentId(elementId, componentId) {
		(0, _elementor_editor_elements.updateElementSettings)({
			id: elementId,
			props: { component_instance: {
				$$type: "component-instance",
				value: { component_id: {
					$$type: "number",
					value: componentId
				} }
			} },
			withHistory: false
		});
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/sync/before-save.ts
	var beforeSave = ({ container, status }) => {
		var _container$model$get$;
		var _container$model$get;
		var _container$model$get$2;
		const elements = (_container$model$get$ = container === null || container === void 0 || (_container$model$get$2 = (_container$model$get = container.model.get("elements")).toJSON) === null || _container$model$get$2 === void 0 ? void 0 : _container$model$get$2.call(_container$model$get)) !== null && _container$model$get$ !== void 0 ? _container$model$get$ : [];
		return Promise.all([syncComponents({
			elements,
			status
		}), setComponentOverridablePropsSettingsBeforeSave({ container })]);
	};
	var syncComponents = function() {
		var _ref = _asyncToGenerator(function* ({ elements, status }) {
			yield updateExistingComponentsBeforeSave({
				elements,
				status
			});
			yield createComponentsBeforeSave({
				elements,
				status
			});
		});
		return function syncComponents(_x) {
			return _ref.apply(this, arguments);
		};
	}();
	var updateExistingComponentsBeforeSave = function() {
		var _ref2 = _asyncToGenerator(function* ({ elements, status }) {
			yield updateComponentTitleBeforeSave(status);
			yield updateArchivedComponentBeforeSave(status);
			yield (0, _elementor_editor_components.publishDraftComponentsInPageBeforeSave)({
				elements,
				status
			});
		});
		return function updateExistingComponentsBeforeSave(_x2) {
			return _ref2.apply(this, arguments);
		};
	}();
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/sync/handle-component-edit-mode-container.ts
	var V4_DEFAULT_CONTAINER_TYPE = "e-flexbox";
	function initHandleComponentEditModeContainer() {
		initRedirectDropIntoComponent();
		initHandleTopLevelElementDelete();
	}
	function initHandleTopLevelElementDelete() {
		(0, _elementor_editor_v1_adapters.registerDataHook)("after", "document/elements/delete", (args) => {
			var _args$containers;
			if (!isEditingComponent()) return;
			const containers = (_args$containers = args.containers) !== null && _args$containers !== void 0 ? _args$containers : args.container ? [args.container] : [];
			for (const container of containers) {
				var _component$children;
				if (!container.parent || !isComponent(container.parent)) continue;
				if (((_component$children = container.parent.children) === null || _component$children === void 0 ? void 0 : _component$children.length) === 0) createEmptyTopLevelContainer(container.parent);
			}
		});
	}
	function initRedirectDropIntoComponent() {
		(0, _elementor_editor_canvas_extended.registerDropContainerRedirect)({
			shouldHandle: isEditingComponent,
			resolveRedirect: (container) => {
				if (!isComponent(container)) return {
					shouldRedirect: false,
					container
				};
				return getComponentContainer(container);
			}
		});
	}
	function createEmptyTopLevelContainer(container) {
		(0, _elementor_editor_elements.selectElement)((0, _elementor_editor_elements.createElement)({
			container,
			model: { elType: V4_DEFAULT_CONTAINER_TYPE }
		}).id);
	}
	function getComponentContainer(container) {
		var _container$children;
		const topLevelElement = (_container$children = container.children) === null || _container$children === void 0 ? void 0 : _container$children[0];
		if (topLevelElement) return {
			shouldRedirect: true,
			container: topLevelElement
		};
		return {
			shouldRedirect: false,
			container
		};
	}
	function isComponent(container) {
		var _container$document;
		if (!(container.id === "document")) return false;
		return ((_container$document = container.document) === null || _container$document === void 0 ? void 0 : _container$document.config.type) === COMPONENT_DOCUMENT_TYPE;
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/sync/revert-overridables-on-copy-or-duplicate.ts
	function initRevertOverridablesOnCopyOrDuplicate() {
		(0, _elementor_editor_v1_adapters.registerDataHook)("after", "document/elements/duplicate", (_args, result) => {
			if (!isEditingComponent()) return;
			revertOverridablesForDuplicatedElements(result);
		});
		(0, _elementor_editor_v1_adapters.registerDataHook)("after", "document/elements/copy", (args) => {
			var _args$storageKey;
			if (!isEditingComponent()) return;
			revertOverridablesInStorage((_args$storageKey = args.storageKey) !== null && _args$storageKey !== void 0 ? _args$storageKey : "clipboard");
		});
	}
	function revertOverridablesForDuplicatedElements(duplicatedElements) {
		(Array.isArray(duplicatedElements) ? duplicatedElements : [duplicatedElements]).forEach((container) => {
			revertAllOverridablesInContainer(container);
		});
	}
	function revertOverridablesInStorage(storageKey) {
		var _window$elementorComm;
		var _storageData$elements;
		const storage = (_window$elementorComm = window.elementorCommon) === null || _window$elementorComm === void 0 ? void 0 : _window$elementorComm.storage;
		if (!storage) return;
		const storageData = storage.get(storageKey);
		if (!(storageData === null || storageData === void 0 || (_storageData$elements = storageData.elements) === null || _storageData$elements === void 0 ? void 0 : _storageData$elements.length)) return;
		const elementsDataWithOverridablesReverted = storageData.elements.map(revertAllOverridablesInElementData);
		storage.set(storageKey, _objectSpread2(_objectSpread2({}, storageData), {}, { elements: elementsDataWithOverridablesReverted }));
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/utils/track-instance-added.ts
	function TrackInstanceAdded() {
		(0, react.useEffect)(() => {
			window.addEventListener(_elementor_editor_canvas.ELEMENT_ADDED_EVENT, onElementAddedEvent);
			(0, _elementor_editor_v1_adapters.registerDataHook)("after", "preview/drop", (_args, element) => {
				var _element$model;
				if (!((element === null || element === void 0 || (_element$model = element.model) === null || _element$model === void 0 ? void 0 : _element$model.get("widgetType")) === "e-component")) return;
				onElementAdded(element.model.toJSON(), "user");
			});
			return () => {
				window.removeEventListener(_elementor_editor_canvas.ELEMENT_ADDED_EVENT, onElementAddedEvent);
			};
		}, []);
		return null;
	}
	function onElementAddedEvent(event) {
		const { element, executedBy } = event.detail;
		onElementAdded(element, executedBy);
	}
	function onElementAdded(element, executedBy) {
		var _selectComponentByUid;
		if (!((element === null || element === void 0 ? void 0 : element.widgetType) === "e-component")) return;
		const editorSettings = element.editor_settings;
		const componentUID = editorSettings === null || editorSettings === void 0 ? void 0 : editorSettings.component_uid;
		const componentName = _elementor_editor_components.selectComponentByUid === null || _elementor_editor_components.selectComponentByUid === void 0 || (_selectComponentByUid = (0, _elementor_editor_components.selectComponentByUid)((0, _elementor_store.__getState)(), componentUID !== null && componentUID !== void 0 ? componentUID : "")) === null || _selectComponentByUid === void 0 ? void 0 : _selectComponentByUid.name;
		const instanceId = element.id;
		const createdThisSession = (0, _elementor_editor_components.selectCreatedThisSession)((0, _elementor_store.__getState)());
		const isSameSessionReuse = componentUID && createdThisSession.includes(componentUID);
		const { locations, secondaryLocations } = window.elementorCommon.eventsManager.config;
		const componentPanelLocation = {
			location: locations.widgetPanel,
			secondary_location: secondaryLocations.componentsTab
		};
		let eventData = {
			source: executedBy,
			executedBy,
			instance_id: instanceId,
			component_uid: componentUID,
			component_name: componentName,
			is_same_session_reuse: isSameSessionReuse
		};
		if (executedBy !== "mcp_tool") eventData = _objectSpread2(_objectSpread2({}, eventData), componentPanelLocation);
		(0, _elementor_editor_components.trackComponentEvent)(_objectSpread2({ action: "instanceAdded" }, eventData));
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/initialize-editor-components-extended.ts
	var PRIORITY = 1;
	function initEditorComponentsExtended({ isLicenseExpired }) {
		(0, _elementor_editor_editing_panel.registerEditingPanelReplacement)({
			id: "extended-component-instance-edit-panel",
			priority: PRIORITY,
			condition: (_, elementType) => elementType.key === "e-component",
			component: ExtendedInstanceEditingPanel
		});
		(0, _elementor_editor_elements_panel.registerTab)({
			id: "components",
			label: (0, _wordpress_i18n.__)("Components", "elementor-pro"),
			component: ExtendedComponents,
			priority: PRIORITY
		});
		(0, _elementor_editor_v1_adapters.registerDataHook)("dependency", "editor/documents/close", (args) => {
			if ((0, _elementor_editor_documents.getV1CurrentDocument)().config.type === "elementor_component") args.mode = "autosave";
			return true;
		});
		window.elementorCommon.__beforeSave = beforeSave;
		(0, _elementor_editor_editing_panel.injectIntoPanelHeaderTop)({
			id: "component-panel-header",
			component: ComponentPanelHeader,
			options: { overwrite: true }
		});
		(0, _elementor_editor_editing_panel.registerFieldIndicator)({
			fieldType: _elementor_editor_editing_panel.FIELD_TYPE.SETTINGS,
			id: "component-overridable-prop",
			priority: 1,
			indicator: SafeOverridablePropIndicator
		});
		(0, _elementor_editor_controls.registerControlReplacement)({
			id: OVERRIDABLE_PROP_REPLACEMENT_ID,
			component: OverridablePropControl,
			condition: ({ value }) => _elementor_editor_components.componentOverridablePropTypeUtil.isValid(value)
		});
		initNonAtomicNestingPrevention();
		initHandleComponentEditModeContainer();
		initRevertOverridablesOnCopyOrDuplicate();
		if (!isLicenseExpired) initCreateComponentShortcut();
		initMcp((0, _elementor_editor_mcp.getMCPByDomain)("components", { instructions: COMPONENTS_MCP_INSTRUCTIONS }));
	}
	function initComponentLocations() {
		(0, _elementor_editor.injectIntoTop)({
			id: "component-popups",
			component: FeatureGuardedTopInjections,
			options: { overwrite: true }
		});
		(0, _elementor_editor_panels.__registerPanel)({
			id: panel.id,
			component: FeatureGuardedComponentPropertiesPanel
		});
		(0, _elementor_editor.injectIntoLogic)({
			id: "components-logic-effects",
			component: FeatureGuardedLogicInjections,
			options: { overwrite: true }
		});
		(0, _elementor_editor.injectIntoLogic)({
			id: "components-track-instance-added",
			component: TrackInstanceAdded
		});
	}
	//#endregion
	//#region packages/packages/pro/editor-components-extended/src/init.ts
	function init() {
		return _init.apply(this, arguments);
	}
	function _init() {
		_init = _asyncToGenerator(function* () {
			initComponentLocations();
			const { isFeatureEnabled, isLicenseExpired } = yield getTierFeaturesAndLicenseStatus();
			if (!isFeatureEnabled) return;
			initEditorComponentsExtended({ isLicenseExpired });
		});
		return _init.apply(this, arguments);
	}
	function getTierFeaturesAndLicenseStatus() {
		return _getTierFeaturesAndLicenseStatus.apply(this, arguments);
	}
	function _getTierFeaturesAndLicenseStatus() {
		_getTierFeaturesAndLicenseStatus = _asyncToGenerator(function* () {
			const [featuresPromise, licenseStatusPromise] = yield Promise.allSettled([(0, _elementor_license_api.fetchTierFeatures)(), (0, _elementor_license_api.fetchLicenseStatus)()]);
			const features = featuresPromise.status === "fulfilled" ? featuresPromise.value : [];
			const licenseStatus = licenseStatusPromise.status === "fulfilled" ? licenseStatusPromise.value : false;
			return {
				isFeatureEnabled: features.includes(COMPONENTS_FEATURE_NAME),
				isLicenseExpired: licenseStatus
			};
		});
		return _getTierFeaturesAndLicenseStatus.apply(this, arguments);
	}
	//#endregion
	exports.init = init;
})(this.elementorV2.editorComponentsExtended = this.elementorV2.editorComponentsExtended || {}, elementorV2.licenseApi, elementorV2.editor, elementorV2.editorComponents, elementorV2.editorControls, elementorV2.editorDocuments, elementorV2.editorEditingPanel, elementorV2.editorElementsPanel, elementorV2.editorMcp, elementorV2.editorPanels, elementorV2.editorV1Adapters, wp.i18n, React, elementorV2.editorCurrentUser, elementorV2.editorUi, elementorV2.icons, elementorV2.store, elementorV2.ui, elementorV2.utils, elementorV2.editorElements, elementorV2.coreAdapterUtils, elementorV2.editorCanvas, elementorV2.editorNotifications, elementorV2.schema, elementorV2.events, ReactDOM, elementorV2.editorTemplatesExtended, elementorV2.httpClient, elementorV2.editorCanvasExtended);

window.elementorV2.editorComponentsExtended?.init?.();
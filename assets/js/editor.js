/*! pro-elements - v4.3.0 - 22-09-2026 */
(function(_wordpress_i18n, react) {
	//#region \0rolldown/runtime.js
	var __create = Object.create;
	var __defProp$2 = Object.defineProperty;
	var __name = (target, value) => __defProp$2(target, "name", {
		value,
		configurable: true
	});
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
	var __esmMin = (fn, res, err) => () => {
		if (err) throw err[0];
		try {
			return fn && (res = fn(fn = 0)), res;
		} catch (e) {
			throw err = [e], e;
		}
	};
	var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
	var __exportAll = (all, no_symbols) => {
		let target = {};
		for (var name in all) __defProp$2(target, name, {
			get: all[name],
			enumerable: true
		});
		if (!no_symbols) __defProp$2(target, Symbol.toStringTag, { value: "Module" });
		return target;
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
			key = keys[i];
			if (!__hasOwnProp$1.call(to, key) && key !== except) __defProp$2(to, key, {
				get: ((k) => from[k]).bind(null, key),
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp$2(target, "default", {
		value: mod,
		enumerable: true
	}) : target, mod));
	var __toCommonJS = (mod) => __hasOwnProp$1.call(mod, "module.exports") ? mod["module.exports"] : __copyProps(__defProp$2({}, "__esModule", { value: true }), mod);
	//#endregion
	react = __toESM(react);
	//#region modules/custom-css/assets/js/editor/editor.js
	var editor_default$1 = class extends elementorModules.editor.utils.Module {
		static {
			__name(this, "default");
		}
		addCustomCss(css, context) {
			if (!context) return;
			const model = context.model;
			const customCSS = model.get("settings").get("custom_css");
			let selector = ".elementor-element.elementor-element-" + model.get("id");
			if ("document" === model.get("elType")) selector = elementor.config.document.settings.cssWrapperSelector;
			if (customCSS) css += customCSS.replace(/selector/g, selector);
			return css;
		}
		onElementorInit() {
			elementor.hooks.addFilter("editor/style/styleText", this.addCustomCss);
			elementor.on("navigator:init", this.onNavigatorInit.bind(this));
		}
		onNavigatorInit() {
			elementor.navigator.indicators.customCSS = {
				icon: "code-bold",
				settingKeys: ["custom_css"],
				title: (0, _wordpress_i18n.__)("Custom CSS", "elementor-pro"),
				section: "section_custom_css"
			};
		}
	};
	//#endregion
	//#region modules/motion-fx/assets/js/editor/editor.js
	var editor_default = class extends elementorModules.editor.utils.Module {
		static {
			__name(this, "default");
		}
		onElementorInit() {
			elementor.on("navigator:init", this.onNavigatorInit.bind(this));
		}
		onNavigatorInit() {
			elementor.navigator.indicators.motionFX = {
				icon: "flash",
				title: (0, _wordpress_i18n.__)("Motion Effects", "elementor-pro"),
				settingKeys: [
					"motion_fx_motion_fx_scrolling",
					"motion_fx_motion_fx_mouse",
					"background_motion_fx_motion_fx_scrolling",
					"background_motion_fx_motion_fx_mouse"
				],
				section: "section_effects"
			};
		}
	};
	//#endregion
	//#region modules/popup/assets/js/editor/hooks/data/save.js
	var PopupSave;
	var init_save = __esmMin((() => {
		PopupSave = class extends $e.modules.hookData.After {
			getCommand() {
				return "document/save/save";
			}
			getId() {
				return "elementor-pro-popup-save";
			}
			getConditions() {
				return "popup" === elementor.config.document.type;
			}
			apply() {
				const settings = {};
				jQuery.each(elementorPro.modules.popup.displaySettingsTypes, (type, data) => {
					settings[type] = data.model.toJSON({ remove: ["default"] });
				});
				elementorPro.ajax.addRequest("popup_save_display_settings", { data: { settings } });
			}
		};
	}));
	//#endregion
	//#region modules/popup/assets/js/editor/hooks/data/index.js
	var init_data$1 = __esmMin((() => {
		init_save();
	}));
	//#endregion
	//#region modules/popup/assets/js/editor/hooks/ui/editor/documents/open/add-library-tab.js
	var PopupAddLibraryTab;
	var init_add_library_tab = __esmMin((() => {
		PopupAddLibraryTab = class extends $e.modules.hookUI.After {
			getCommand() {
				return "editor/documents/open";
			}
			getId() {
				return "elementor-pro-popup-add-library-tab";
			}
			getConditions(args) {
				return "popup" === elementor.documents.get(args.id).config.type;
			}
			apply() {
				$e.components.get("library").addTab("templates/popups", {
					title: (0, _wordpress_i18n.__)("Popups", "elementor-pro"),
					filter: {
						source: "remote",
						type: "popup"
					}
				}, 1);
			}
		};
	}));
	//#endregion
	//#region modules/popup/assets/js/editor/controls/display-settings.js
	var display_settings_default;
	var init_display_settings = __esmMin((() => {
		display_settings_default = class extends elementorModules.editor.views.ControlsStack {
			static {
				__name(this, "default");
			}
			constructor(...args) {
				super(...args);
				this.template = _.noop;
				this.activeTab = "content";
				this.listenTo(this.model, "change", this.onModelChange);
			}
			getNamespaceArray() {
				return ["popup", "display-settings"];
			}
			className() {
				return super.className() + " elementor-popup__display-settings";
			}
			toggleGroup(groupName, $groupElement) {
				$groupElement.toggleClass("elementor-active", !!this.model.get(groupName));
			}
			onRenderTemplate() {
				this.activateFirstSection();
			}
			onRender() {
				const name = this.getOption("name");
				let $groupWrapper;
				this.children.each((child) => {
					if ("heading" !== child.model.get("type")) {
						if ($groupWrapper) $groupWrapper.append(child.$el);
						return;
					}
					const groupName = child.model.get("name").replace("_heading", "");
					$groupWrapper = jQuery("<div>", {
						id: `elementor-popup__${name}-controls-group--${groupName}`,
						class: "elementor-popup__display-settings_controls_group"
					});
					const $imageWrapper = jQuery("<div>", { class: "elementor-popup__display-settings_controls_group__icon" });
					const $image = jQuery("<img>", { src: elementorPro.config.urls.modules + `popup/assets/images/${name}/${groupName}.svg` });
					$imageWrapper.html($image);
					$groupWrapper.html($imageWrapper);
					child.$el.before($groupWrapper);
					$groupWrapper.append(child.$el);
					this.toggleGroup(groupName, $groupWrapper);
				});
			}
			onModelChange() {
				const changedControlName = Object.keys(this.model.changed)[0];
				const changedControlView = this.getControlViewByName(changedControlName);
				if ("switcher" !== changedControlView.model.get("type")) return;
				this.toggleGroup(changedControlName, changedControlView.$el.parent());
			}
		};
	}));
	//#endregion
	//#region modules/popup/assets/js/editor/hooks/ui/editor/documents/open/add-triggers.js
	var PopupAddTriggers;
	var init_add_triggers = __esmMin((() => {
		init_display_settings();
		PopupAddTriggers = class extends $e.modules.hookUI.After {
			getCommand() {
				return "editor/documents/open";
			}
			getId() {
				return "elementor-pro-popup-add-triggers";
			}
			getConditions(args) {
				return "popup" === elementor.documents.get(args.id).config.type;
			}
			apply() {
				if (elementor.panel) this.addUI();
				else elementor.once("preview:loaded", this.addUI.bind(this));
			}
			addUI() {
				if ($e.routes.commands["theme-builder-publish/triggers"]) return;
				this.addPublishTabs();
			}
			addPublishTabs() {
				const config = elementor.config.document.displaySettings;
				const component = $e.components.get("theme-builder-publish");
				const module = elementorPro.modules.popup;
				jQuery.each(module.displaySettingsTypes, (type, data) => {
					data.model = new elementorModules.editor.elements.models.BaseSettings(config[type].settings, { controls: config[type].controls });
					component.addTab(type, {
						View: display_settings_default,
						viewOptions: {
							name: type,
							id: `elementor-popup-${type}__controls`,
							model: data.model,
							controls: data.model.controls
						},
						name: type,
						title: data.title,
						description: data.publishScreenDescription,
						image: elementorPro.config.urls.modules + `popup/assets/images/${type}-tab.svg`
					});
				});
			}
		};
	}));
	//#endregion
	//#region modules/popup/assets/js/editor/hooks/ui/editor/documents/close/remove-library-tab.js
	var PopupRemoveLibraryTab;
	var init_remove_library_tab = __esmMin((() => {
		PopupRemoveLibraryTab = class extends $e.modules.hookUI.After {
			getCommand() {
				return "editor/documents/unload";
			}
			getId() {
				return "elementor-pro-popup-remove-library-tab";
			}
			getConditions(args) {
				const { document } = args;
				return "popup" === document.config.type;
			}
			apply() {
				$e.components.get("library").removeTab("templates/popups");
			}
		};
	}));
	//#endregion
	//#region modules/popup/assets/js/editor/hooks/ui/editor/documents/close/remove-triggers.js
	var PopupRemoveTriggers;
	var init_remove_triggers = __esmMin((() => {
		PopupRemoveTriggers = class extends $e.modules.hookUI.After {
			getCommand() {
				return "editor/documents/unload";
			}
			getId() {
				return "elementor-pro-popup-remove-triggers";
			}
			getConditions(args) {
				const { document } = args;
				return "popup" === document.config.type;
			}
			apply() {
				this.removePublishTabs();
			}
			removePublishTabs() {
				const component = $e.components.get("theme-builder-publish");
				const displaySettingsTypes = elementorPro.modules.popup.displaySettingsTypes;
				jQuery.each(displaySettingsTypes, (type) => {
					component.removeTab(type);
				});
			}
		};
	}));
	//#endregion
	//#region modules/popup/assets/js/editor/hooks/ui/index.js
	var init_ui = __esmMin((() => {
		init_add_library_tab();
		init_add_triggers();
		init_remove_library_tab();
		init_remove_triggers();
	}));
	//#endregion
	//#region modules/popup/assets/js/editor/hooks/index.js
	var hooks_exports$6 = /* @__PURE__ */ __exportAll({
		PopupAddLibraryTab: () => PopupAddLibraryTab,
		PopupAddTriggers: () => PopupAddTriggers,
		PopupRemoveLibraryTab: () => PopupRemoveLibraryTab,
		PopupRemoveTriggers: () => PopupRemoveTriggers,
		PopupSave: () => PopupSave
	});
	var init_hooks$2 = __esmMin((() => {
		init_data$1();
		init_ui();
	}));
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
	var init_typeof = __esmMin((() => {}));
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
	var init_toPrimitive = __esmMin((() => {
		init_typeof();
	}));
	//#endregion
	//#region \0@oxc-project+runtime@0.140.0/helpers/esm/toPropertyKey.js
	function toPropertyKey(t) {
		var i = toPrimitive(t, "string");
		return "symbol" == _typeof(i) ? i : i + "";
	}
	var init_toPropertyKey = __esmMin((() => {
		init_typeof();
		init_toPrimitive();
	}));
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
	var init_defineProperty = __esmMin((() => {
		init_toPropertyKey();
	}));
	//#endregion
	//#region modules/popup/assets/js/editor/component.js
	var PopupComponent;
	var init_component$2 = __esmMin((() => {
		init_hooks$2();
		init_defineProperty();
		PopupComponent = class extends $e.modules.ComponentBase {
			constructor(..._args) {
				super(..._args);
				_defineProperty(
					this,
					/**
					* @type {null|Function}
					*/
					"onPageSettingsCloseHandler",
					null
				);
			}
			getNamespace() {
				return "document/popup";
			}
			defaultHooks() {
				return this.importHooks(hooks_exports$6);
			}
		};
	}));
	//#endregion
	//#region modules/global-widget/assets/js/editor/commands/link.js
	var import_module = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
		init_component$2();
		var PopupModule = class extends elementorModules.editor.utils.Module {
			constructor(...args) {
				super(...args);
				this.displaySettingsTypes = {
					triggers: {
						icon: "eicon-click",
						title: (0, _wordpress_i18n.__)("Triggers", "elementor-pro"),
						publishScreenDescription: (0, _wordpress_i18n.__)("What action the user needs to do for the popup to open.", "elementor-pro")
					},
					timing: {
						icon: "eicon-cog",
						title: (0, _wordpress_i18n.__)("Advanced Rules", "elementor-pro"),
						publishScreenDescription: (0, _wordpress_i18n.__)("Requirements that have to be met for the popup to open.", "elementor-pro")
					}
				};
			}
			onElementorLoaded() {
				this.component = $e.components.register(new PopupComponent({ manager: this }));
			}
		};
		module.exports = PopupModule;
	})))());
	var Link = class extends $e.modules.editor.document.CommandHistoryBase {
		validateArgs(args) {
			this.requireContainer(args);
			this.requireArgumentConstructor("data", Object, args);
			const { containers = [args.container] } = args;
			containers.forEach((container) => {
				if ("global" === container.model.get("widgetType")) throw Error(`Invalid container, id: '${container.id}' is already global.`);
			});
		}
		getHistory(args) {
			const { data } = args;
			return {
				title: elementor.widgetsCache[data.widgetType].title,
				subTitle: data.title,
				type: (0, _wordpress_i18n.__)("Linked to Global", "elementor-pro")
			};
		}
		apply(args) {
			const { data, containers = [args.container] } = args;
			containers.forEach((container) => {
				const widgetModel = container.model;
				const widgetModelIndex = widgetModel.collection.indexOf(widgetModel);
				data.elType = data.type;
				data.settings = widgetModel.get("settings").attributes;
				data.widgetType = widgetModel.get("widgetType");
				const elementModelAttributes = elementorPro.modules.globalWidget.addGlobalWidget(data.template_id, data).attributes;
				$e.data.setCache(this.component, `document/global/global-widget/templates/${data.template_id}`, {}, data);
				$e.run("document/elements/create", {
					container: container.parent,
					model: {
						id: elementorCommon.helpers.getUniqueId(),
						elType: elementModelAttributes.elType,
						widgetType: elementModelAttributes.widgetType,
						templateID: data.template_id
					},
					options: { at: widgetModelIndex }
				});
				$e.run("document/elements/delete", { container });
			});
			$e.route("panel/elements/global");
		}
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
	var init_asyncToGenerator = __esmMin((() => {}));
	//#endregion
	//#region modules/global-widget/assets/js/editor/commands/unlink.js
	init_asyncToGenerator();
	var Unlink = class extends $e.modules.editor.document.CommandHistoryBase {
		validateArgs(args) {
			this.requireContainer(args);
		}
		getHistory(args) {
			const { containers = [args.container] } = args;
			return {
				title: elementor.helpers.getModelLabel(containers[0].model),
				type: (0, _wordpress_i18n.__)("Unlink Widget", "elementor-pro")
			};
		}
		apply(args) {
			return _asyncToGenerator(function* () {
				const { containers = [args.container] } = args;
				const ids = containers.map((container) => container.model.get("templateID"));
				const { data } = yield $e.data.get("document/global/templates", { ids });
				containers.forEach((container) => {
					const id = container.model.get("templateID");
					const elementModel = elementorPro.modules.globalWidget.createGlobalModel(id, data[id]);
					$e.run("document/elements/create", {
						container: container.parent,
						model: {
							id: elementorCommon.helpers.getUniqueId(),
							elType: "widget",
							widgetType: elementModel.get("widgetType"),
							settings: elementorCommon.helpers.cloneObject(elementModel.get("settings").attributes),
							defaultEditSettings: elementorCommon.helpers.cloneObject(elementModel.get("editSettings").attributes)
						},
						options: {
							at: container.model.collection.indexOf(container.model),
							edit: true
						}
					});
					$e.run("document/elements/delete", { container });
				});
			})();
		}
	};
	//#endregion
	//#region modules/global-widget/assets/js/editor/commands/index.js
	var commands_exports$2 = /* @__PURE__ */ __exportAll({
		Link: () => Link,
		Unlink: () => Unlink
	});
	//#endregion
	//#region modules/global-widget/assets/js/editor/commands-internal/save-templates.js
	/**
	* The command should run over all changed global widgets and
	* update the settings of the `document/global/global-widget/templates`,
	* And save cache templates according to the widget(s) which are under the save process.
	*/
	var SaveTemplates = class extends $e.modules.CommandInternalBase {
		apply() {
			const templateModels = this.getCurrentTemplatesModels(this.component.changedContainersId);
			if (!templateModels.length) return;
			return new Promise((resolve, reject) => {
				elementorCommon.ajax.addRequest("update_templates", {
					data: { templates: templateModels.map((templateModel) => {
						return {
							id: templateModel.get("id"),
							content: JSON.stringify([templateModel.toJSON()]),
							source: "local",
							type: "widget"
						};
					}) },
					error: reject,
					success: () => {
						/**
						* Since is used `document/global/global-widget/templates` to hold all globals template data.
						* And currently there are no request to update template data on each update of global widget,
						* editing the template will be not synced with The real latest data.
						* In other words, if dont update templates on each save,
						* Then the new created template will be different with the actual (saved) one, so updating the globals template
						* according to saved global widget is the solution.
						*/
						this.component.changedContainersId = {};
						templateModels.forEach((template) => {
							const settings = template.get("settings");
							$e.data.setCache(this.component, `document/global/global-widget/templates/${template.id}`, {}, { settings });
						});
						resolve(templateModels);
					}
				});
			});
		}
		getCurrentTemplatesModels(changedContainersId) {
			const templatesData = [];
			Object.entries(changedContainersId).forEach(([templateID, containerId]) => {
				if (!$e.data.getCache(this.component, `document/global/global-widget/templates/${templateID}`)) {
					if ($e.devTools) $e.devTools.log.warn(`$e.data.getCache( component, \`document/global/global-widget/templates/${templateID}\` ) - not found.`);
				}
				const container = elementor.getContainer(containerId);
				if (!container) return;
				templatesData.push(new Backbone.Model({
					id: templateID,
					elType: "widget",
					widgetType: container.model.get("widgetType"),
					settings: container.settings.toJSON({ remove: "default" }),
					templateID
				}));
			});
			return templatesData;
		}
	};
	//#endregion
	//#region modules/global-widget/assets/js/editor/commands-internal/index.js
	var commands_internal_exports = /* @__PURE__ */ __exportAll({ SaveTemplates: () => SaveTemplates });
	//#endregion
	//#region modules/global-widget/assets/js/editor/commands-data/templates.js
	/**
	* Data command: 'document/global/templates', accessing 'global-widget/templates' remote endpoint.
	* Used to get global templates from the backend/cache.
	*/
	var Templates$1 = class extends $e.modules.CommandData {
		static {
			__name(this, "Templates");
		}
		static getEndpointFormat() {
			return "global-widget/templates";
		}
		onAfterApply(args = {}, result) {
			$e.data.deleteCache(this.component, "document/global/global-widget/templates", args.query);
			Object.entries(result.data).forEach(([templateID, data]) => {
				$e.data.setCache(this.component, `document/global/global-widget/templates/${templateID}`, {}, data);
			});
		}
	};
	//#endregion
	//#region modules/global-widget/assets/js/editor/commands-data/index.js
	var commands_data_exports = /* @__PURE__ */ __exportAll({ Templates: () => Templates$1 });
	//#endregion
	//#region modules/global-widget/assets/js/editor/hooks/data/base-global-widget-prepare-update.js
	/**
	* Hook is responsible for saving last changed global widget and update
	* which containers are needed for updating the template.
	*/
	var BaseGlobalWidgetPrepareUpdate = class extends $e.modules.hookData.After {
		getConditions(args) {
			const { containers = [args.container] } = args;
			return containers.some((container) => {
				var _container$renderer;
				return (_container$renderer = container.renderer) === null || _container$renderer === void 0 || (_container$renderer = _container$renderer.model) === null || _container$renderer === void 0 ? void 0 : _container$renderer.get("templateID");
			});
		}
		apply(args) {
			const { containers = [args.container] } = args, component = $e.components.get("document/global");
			const globalWidgetContainers = containers.filter((container) => {
				var _container$renderer2;
				return (_container$renderer2 = container.renderer) === null || _container$renderer2 === void 0 || (_container$renderer2 = _container$renderer2.model) === null || _container$renderer2 === void 0 ? void 0 : _container$renderer2.get("templateID");
			});
			component.lastChangedContainers = globalWidgetContainers.map((container) => container.renderer);
			globalWidgetContainers.forEach((container) => {
				component.changedContainersId[container.renderer.model.get("templateID")] = container.renderer.id;
			});
		}
	};
	//#endregion
	//#region modules/global-widget/assets/js/editor/hooks/data/document/elements/set-settings/global-widget-prepare-update-element-set-settings.js
	/**
	* Hook is responsible for saving last changed global widget and update
	* which containers are needed for updating the template.
	*/
	var GlobalWidgetPrepareUpdateElementSetSettings = class extends BaseGlobalWidgetPrepareUpdate {
		getCommand() {
			return "document/elements/set-settings";
		}
		getId() {
			return "elementor-pro-global-widget-prepare-update-element-set-settings";
		}
	};
	//#endregion
	//#region modules/global-widget/assets/js/editor/hooks/data/document/repeater/insert/global-widget-prepare-update-repeater-insert.js
	/**
	* Hook is responsible for saving last changed global widget and update
	* which containers are needed for updating the template.
	*/
	var GlobalWidgetPrepareUpdateRepeaterInsert = class extends BaseGlobalWidgetPrepareUpdate {
		getCommand() {
			return "document/repeater/insert";
		}
		getId() {
			return "elementor-pro-global-widget-prepare-update-repeater-insert";
		}
	};
	//#endregion
	//#region modules/global-widget/assets/js/editor/hooks/data/document/repeater/remove/global-widget-prepare-update-repeater-remove.js
	/**
	* Hook is responsible for saving last changed global widget and update
	* which containers are needed for updating the template.
	*/
	var GlobalWidgetPrepareUpdateRepeaterRemove = class extends BaseGlobalWidgetPrepareUpdate {
		getCommand() {
			return "document/repeater/remove";
		}
		getId() {
			return "elementor-pro-global-widget-prepare-update-repeater-remove";
		}
	};
	//#endregion
	//#region modules/global-widget/assets/js/editor/hooks/data/document/history/end-log/global-widget-do-update.js
	/**
	* On after all `document/elements/set-settings` has stop, the history mechanism will call to
	* `document/history/end-log` the hook will update all other global widgets according to this last change.
	*/
	var GlobalWidgetDoUpdate = class extends $e.modules.hookData.After {
		getCommand() {
			return "document/history/end-log";
		}
		getId() {
			return "elementor-pro-global-widget-do-update";
		}
		getConditions() {
			return $e.components.get("document/global").lastChangedContainers;
		}
		apply() {
			const component = $e.components.get("document/global");
			component.lastChangedContainers.forEach((container) => component.updateGlobalsRecursive(container));
			component.lastChangedContainers = null;
		}
	};
	//#endregion
	//#region modules/global-widget/assets/js/editor/hooks/data/document/save/save/global-widget-save-templates.js
	/**
	* The hook is responsible for updating the global templates, on editor save,
	* hook will run 'document/global/save-templates' to handle the save.
	*/
	var GlobalWidgetSaveTemplates = class extends $e.modules.hookData.After {
		getCommand() {
			return "document/save/save";
		}
		getId() {
			return "elementor-pro-global-widget-save-templates";
		}
		getConditions(args) {
			if (!Object.keys($e.components.get("document/global").changedContainersId).length) return false;
			const { document = elementor.documents.getCurrent() } = args;
			return document.config.panel.has_elements && args.status && -1 !== ["private", "publish"].indexOf(args.status);
		}
		apply() {
			$e.internal("document/global/save-templates");
		}
	};
	//#endregion
	//#region modules/global-widget/assets/js/editor/hooks/data/editor/documents/attach-preview/global-widget-load-templates.js
	init_defineProperty();
	/**
	* Hook responsible to load current active templates ( global widget that are in used ) to `$e.data.cache`,
	* also it tells the component which templates are not active and required to be loaded from the backend.
	*/
	var GlobalWidgetLoadTemplates = class GlobalWidgetLoadTemplates extends $e.modules.hookData.After {
		initialize() {
			setTimeout(() => {
				this.component = $e.components.get("document/global");
			});
		}
		getCommand() {
			return "editor/documents/attach-preview";
		}
		getId() {
			return "elementor-pro-global-widget-load-templates";
		}
		getConditions() {
			return !GlobalWidgetLoadTemplates.calledOnce;
		}
		apply() {
			GlobalWidgetLoadTemplates.calledOnce = true;
			Object.entries(elementorPro.config.widget_templates).forEach(([id, data]) => {
				elementorPro.modules.globalWidget.addGlobalWidget(id, data);
				this.addTemplateToCache(id);
			});
		}
		addTemplateToCache(id) {
			const container = elementor.getPreviewContainer().children.findRecursive((i) => parseInt(i.model.get("templateID")) === parseInt(id));
			if (!container) return this.component.notLoadedTemplatesIds.push(id);
			const args = {
				id: container.model.get("templateID"),
				elType: "widget",
				widgetType: container.model.get("widgetType"),
				settings: container.settings.toJSON({ remove: "default" }),
				templateID: container.model.get("templateID")
			};
			$e.data.setCache(this.component, `document/global/global-widget/templates/${id}`, {}, args);
		}
	};
	_defineProperty(GlobalWidgetLoadTemplates, "calledOnce", false);
	//#endregion
	//#region modules/global-widget/assets/js/editor/hooks/ui/document/elements/set-settings/global-widget-history-update.js
	/**
	* Since editing of global widget applies changes to the all widgets with the same template id,
	* the same needs to be done on undo/redo.
	*/
	var GlobalWidgetHistoryUpdate = class extends $e.modules.hookUI.After {
		getCommand() {
			return "document/elements/set-settings";
		}
		getId() {
			return "elementor-pro-global-widget-history-update";
		}
		getContainerType() {
			return "widget";
		}
		getConditions(args) {
			const { containers = [args.container] } = args;
			return !elementor.documents.getCurrent().history.getActive() && containers.some((container) => container.model.get("templateID"));
		}
		apply(args) {
			const { containers = [args.container] } = args;
			containers.forEach((container) => $e.components.get("document/global").updateGlobalsRecursive(container));
		}
	};
	//#endregion
	//#region modules/global-widget/assets/js/editor/hooks/index.js
	var hooks_exports$5 = /* @__PURE__ */ __exportAll({
		GlobalWidgetDoUpdate: () => GlobalWidgetDoUpdate,
		GlobalWidgetHistoryUpdate: () => GlobalWidgetHistoryUpdate,
		GlobalWidgetLoadTemplates: () => GlobalWidgetLoadTemplates,
		GlobalWidgetPrepareUpdateElementSetSettings: () => GlobalWidgetPrepareUpdateElementSetSettings,
		GlobalWidgetPrepareUpdateRepeaterInsert: () => GlobalWidgetPrepareUpdateRepeaterInsert,
		GlobalWidgetPrepareUpdateRepeaterRemove: () => GlobalWidgetPrepareUpdateRepeaterRemove,
		GlobalWidgetSaveTemplates: () => GlobalWidgetSaveTemplates
	});
	//#endregion
	//#region modules/global-widget/assets/js/editor/component.js
	init_defineProperty();
	var Component$5 = class extends $e.modules.ComponentBase {
		static {
			__name(this, "Component");
		}
		constructor(..._args) {
			super(..._args);
			_defineProperty(
				this,
				/**
				* Holds all the template ids, which not available due they simply not exist in document data.
				* Those templates will be loaded later after requesting 'panel/elements/global' (global elements panel).
				*
				* @type {Array}
				*/
				"notLoadedTemplatesIds",
				[]
			);
			_defineProperty(
				this,
				/**
				* Last changed global widget(s).
				*
				* @type {null | Array} Container[]
				*/
				"lastChangedContainers",
				null
			);
			_defineProperty(
				this,
				/**
				* Hold unsaved changed container id for each template id.
				*
				* Each settings command that run over global widget, this logic is applied:
				* `changedContainersId[ templateId ] = containerId`.
				*
				* @type {{}}
				*/
				"changedContainersId",
				{}
			);
		}
		registerAPI() {
			super.registerAPI();
			$e.routes.on("run:after", (component, route) => {
				if ("panel/elements/global" === route) this.onRoutePanelElementsGlobal();
			});
		}
		getNamespace() {
			return "document/global";
		}
		defaultCommands() {
			return this.importCommands(commands_exports$2);
		}
		defaultCommandsInternal() {
			return this.importCommands(commands_internal_exports);
		}
		defaultData() {
			return this.importCommands(commands_data_exports);
		}
		defaultHooks() {
			return this.importHooks(hooks_exports$5);
		}
		onRoutePanelElementsGlobal() {
			if (this.notLoadedTemplatesIds.length) $e.data.get("document/global/templates", { ids: this.notLoadedTemplatesIds }).then(() => {
				this.notLoadedTemplatesIds = [];
			});
		}
		/**
		* Update each 'Backbone.Model' will handle issue when the global widget saved only in draft.
		* Scenario for better understanding the issue:
		* - Have global widget save with custom color, refresh the editor.
		* - Change it to global global color and save as draft (no update template).
		* - Create another global-widget from same template.
		* - Update one of first global widget that saved in draft to use custom color.
		* - By dependency of only 'container.settings' the new template will have the new custom color,
		*      but new custom color will unseen (since it has global).
		*
		* @param {Object} targetContainer Container class
		*/
		updateGlobalsRecursive(targetContainer) {
			const modelsToUpdate = [
				"dynamic",
				"globals",
				"settings"
			];
			elementor.getPreviewContainer().forEachChildrenRecursive((container) => {
				if (targetContainer !== container && parseInt(container.model.get("templateID")) === parseInt(targetContainer.model.get("templateID"))) {
					modelsToUpdate.forEach((modelName) => {
						const model = targetContainer[modelName];
						if (model instanceof Backbone.Model) {
							const accordingTo = "settings" === modelName ? targetContainer.settings.attributes : model.changed;
							Object.entries(accordingTo).forEach(([key, setting]) => {
								container[modelName].set(key, setting);
							});
						}
					});
					container.render();
				}
			});
		}
	};
	//#endregion
	//#region modules/global-widget/assets/js/editor/widget/view.js
	var view_exports = /* @__PURE__ */ __exportAll({ default: () => View$1 });
	var WidgetView, View$1;
	var init_view$1 = __esmMin((() => {
		WidgetView = elementor.modules.elements.views.Widget;
		View$1 = class extends WidgetView {
			static {
				__name(this, "View");
			}
			className() {
				return super.className() + " elementor-global-widget elementor-global-" + this.model.get("templateID");
			}
			addInlineEditingAttributes() {}
			unlink() {
				$e.run("document/global/unlink", { container: this.getContainer() });
			}
			onEditRequest() {
				$e.route("panel/editor/global", { view: this });
			}
			getContextMenuGroups() {
				return super.getContextMenuGroups().filter((group) => "save" !== group.name);
			}
			getContainer() {
				if (this.container) return this.container;
				const container = super.getContainer();
				container.label = container.label + " (" + (0, _wordpress_i18n.__)("global", "elementor-pro") + ")";
				return container;
			}
			render() {
				super.render();
				setTimeout(this.removeInlineAddingAttributes.bind(this));
			}
			/**
			* The issue is complex:
			* 1. There is a mechanism in the editor which responsible for adding inline the method below: `addInlineEditingAttributes`.
			* 2. There is a mechanism in the backend that adds inline attributes for each widget most of the time.
			*      its effect also the Global-Widget itself, in two ways:
			*      1. global-widget instance is calling to `$this->get_original_element_instance()->render_content();`.
			*          It means that the mechanism in the backend with adds the inline attributes will be triggered.
			*      2. each time you 'leave the editing mode' for most of the widgets it triggers `renderRemoteServer()`,
			*          which sends a request for `remoteRendering` for 'non-global widget' (the server doesn't know that it
			*          was linked to a template), that will trigger the original widget without knowing it's a part of the
			*          global mechanism.
			*          eventually it will trigger the logic of the backend for adding the inline attributes.
			*/
			removeInlineAddingAttributes() {
				const globalWidgetElementDom = this.el.querySelector(".elementor-inline-editing");
				if (globalWidgetElementDom) globalWidgetElementDom.classList.remove("elementor-inline-editing");
			}
		};
	}));
	//#endregion
	//#region modules/global-widget/assets/js/editor/widget/model.js
	var model_exports = /* @__PURE__ */ __exportAll({ default: () => Model });
	var ElementModel, Model;
	var init_model = __esmMin((() => {
		ElementModel = elementor.modules.elements.models.Element;
		Model = class extends ElementModel {
			initSettings() {
				if ($e.commands.is("document/elements/create")) return this.initSettingsFromTemplate();
				super.initSettings();
			}
			initEditSettings() {
				super.initEditSettings();
				this.get("editSettings").set("editTab", "global");
			}
			initSettingsFromTemplate() {
				const id = this.get("templateID");
				const component = $e.components.get("document/global");
				const data = $e.data.getCache(component, `document/global/global-widget/templates/${id}`) || this.attributes;
				const elementModel = elementorPro.modules.globalWidget.createGlobalModel(id, data);
				this.set("settings", elementModel.get("settings"));
				elementorFrontend.config.elements.data[this.cid] = this.get("settings");
			}
		};
	}));
	//#endregion
	//#region modules/global-widget/assets/js/editor/views/panel-page.js
	var require_panel_page = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = Marionette.ItemView.extend({
			id: "elementor-panel-global-widget",
			template: "#tmpl-elementor-panel-global-widget",
			ui: {
				editButton: "#elementor-global-widget-locked-edit .elementor-button",
				unlinkButton: "#elementor-global-widget-locked-unlink .elementor-button",
				loading: "#elementor-global-widget-loading"
			},
			events: {
				"click @ui.editButton": "onEditButtonClick",
				"click @ui.unlinkButton": "onUnlinkButtonClick"
			},
			initialize() {
				this.initUnlinkDialog();
			},
			buildUnlinkDialog() {
				var self = this;
				return elementorCommon.dialogsManager.createWidget("confirm", {
					id: "elementor-global-widget-unlink-dialog",
					headerMessage: (0, _wordpress_i18n.__)("Unlink Widget", "elementor-pro"),
					message: (0, _wordpress_i18n.__)("This will make the widget stop being global. It'll be reverted into being just a regular widget.", "elementor-pro"),
					position: {
						my: "center center",
						at: "center center"
					},
					strings: {
						confirm: (0, _wordpress_i18n.__)("Unlink", "elementor-pro"),
						cancel: (0, _wordpress_i18n.__)("Cancel", "elementor-pro")
					},
					onConfirm() {
						self.getOption("editedView").unlink();
					}
				});
			},
			initUnlinkDialog() {
				var dialog;
				this.getUnlinkDialog = function() {
					if (!dialog) dialog = this.buildUnlinkDialog();
					return dialog;
				};
			},
			editGlobalModel() {
				var editedView = this.getOption("editedView");
				$e.run("document/elements/select", { container: editedView.getContainer() });
			},
			onEditButtonClick() {
				this.editGlobalModel();
			},
			onUnlinkButtonClick() {
				this.getUnlinkDialog().show();
			}
		});
	}));
	//#endregion
	//#region modules/global-widget/assets/js/editor/views/promotion.js
	var require_promotion = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = elementor.modules.layouts.panel.pages.elements.views.Global.extend({
			template: "#tmpl-elementor-promotion",
			id: "tmpl-elementor-promotion",
			className: "elementor-nerd-box elementor-panel-nerd-box e-responsive-panel-stretch"
		});
	}));
	//#endregion
	//#region modules/global-widget/assets/js/editor/views/no-templates.js
	var require_no_templates = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = elementor.modules.layouts.panel.pages.elements.views.Global.extend({
			template: "#tmpl-elementor-panel-global-widget-no-templates",
			id: "elementor-panel-global-widget-no-templates",
			className: "elementor-nerd-box elementor-panel-nerd-box e-responsive-panel-stretch"
		});
	}));
	//#endregion
	//#region modules/global-widget/assets/js/editor/views/global-templates-view.js
	var require_global_templates_view = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = elementor.modules.layouts.panel.pages.elements.views.Elements.extend({
			id: "elementor-global-templates",
			getEmptyView() {
				if (this.collection.length) return null;
				return require_no_templates();
			},
			onFilterEmpty() {}
		});
	}));
	//#endregion
	//#region modules/global-widget/assets/js/editor/module.js
	var __defProp$1 = Object.defineProperty;
	var __defNormalProp$1 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$1(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value, "__defNormalProp");
	var __publicField = (obj, key, value) => __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
	var Module$7 = class extends elementorModules.editor.utils.Module {
		static {
			__name(this, "Module");
		}
		constructor() {
			super(...arguments);
			__publicField(this, "panelWidgets", new Backbone.Collection());
		}
		addGlobalWidget(templateId, templateData) {
			return this.panelWidgets.add(this.createGlobalModel(templateId, templateData));
		}
		createGlobalModel(templateId, templateData) {
			templateData = Object.assign({}, templateData, {
				id: templateId,
				categories: [],
				icon: elementor.widgetsCache[templateData.widgetType].icon,
				widgetType: templateData.widgetType,
				custom: { templateID: templateId }
			});
			const elementModel = new elementor.modules.elements.models.Element(templateData);
			elementModel.set("id", templateId);
			return elementModel;
		}
		setWidgetType() {
			elementor.hooks.addFilter("element/view", function(DefaultView, model) {
				if (model.get("templateID")) return (init_view$1(), __toCommonJS(view_exports)).default;
				return DefaultView;
			});
			elementor.hooks.addFilter("element/model", function(DefaultModel, attrs) {
				if (attrs.templateID) return (init_model(), __toCommonJS(model_exports)).default;
				return DefaultModel;
			});
		}
		registerTemplateType() {
			elementor.templates.registerTemplateType("widget", {
				showInLibrary: false,
				saveDialog: {
					title: (0, _wordpress_i18n.__)("Save your widget as a global widget", "elementor-pro"),
					description: (0, _wordpress_i18n.__)("You'll be able to add this global widget to multiple areas on your site, and edit it from one single place.", "elementor-pro")
				},
				prepareSavedData(data) {
					data.widgetType = data.content[0].widgetType;
					return data;
				},
				ajaxParams: { success: this.onWidgetTemplateSaved.bind(this) }
			});
		}
		addPanelPage() {
			elementor.getPanelView().addPage("globalWidget", { view: require_panel_page() });
		}
		/**
		* @param {string} id - The ID.
		* @deprecated since 3.5.0, use `$e.data.getCache( `document/global/global-widget/templates/${ id }` )` instead.
		*/
		getGlobalModels(id) {
			elementorDevTools.deprecation.deprecated("elementorPro.modules.globalWidget.getGlobalModels( id )", "3.5.0", "$e.data.getCache( `document/global/global-widget/templates/${ id }` )");
			return $e.data.getCache(this.component, `document/global/global-widget/templates/${id}`);
		}
		/**
		* @deprecated since 3.5.0, use `$e.internal( 'document/global/save-templates' )` instead.
		*/
		saveTemplates() {
			elementorDevTools.deprecation.deprecated("elementorPro.modules.globalWidget.saveTemplates()", "3.5.0", "$e.internal( 'document/global/save-templates' )");
			$e.internal("document/global/save-templates");
		}
		/**
		* @param {*}        globalModel - global model.
		* @param {Function} callback    - A callback function.
		* @deprecated since 3.5.0, use `$e.data.get( 'document/global/templates' )` instead.
		*/
		requestGlobalModelSettings(globalModel, callback) {
			elementorDevTools.deprecation.deprecated("elementorPro.modules.globalWidget.requestGlobalModelSettings()", "3.5.0", "$e.data.get( 'document/global/templates' )");
			$e.data.get("document/global/templates", { ids: globalModel.id }).then((data) => {
				callback(data);
			});
		}
		setWidgetContextMenuSaveAction() {
			elementor.hooks.addFilter("elements/widget/contextMenuGroups", (groups, widget) => {
				const saveGroup = _.findWhere(groups, { name: "save" });
				if (!saveGroup) return groups;
				const saveAction = _.findWhere(saveGroup.actions, { name: "save" });
				if (elementorPro.config.should_show_promotion) {
					saveAction.shortcut = jQuery("<i class=\"eicon-advanced\"></i><a class=\"elementor-context-menu-list__item__shortcut--link-fullwidth\" href=\"https://go.elementor.com/go-pro-advanced-global-widget-context-menu/\" target=\"_blank\" rel=\"noopener noreferrer\"></a>");
					saveAction.isEnabled = () => false;
					delete saveAction.callback;
					return groups;
				}
				saveAction.callback = widget.save.bind(widget);
				delete saveAction.shortcut;
				return groups;
			});
		}
		filterRegionViews(regionViews) {
			if (elementorPro.config.should_show_promotion) {
				_.extend(regionViews.global, {
					view: require_promotion(),
					options: {}
				});
				return regionViews;
			}
			_.extend(regionViews.global, {
				view: require_global_templates_view(),
				options: { collection: this.panelWidgets }
			});
			return regionViews;
		}
		onElementorInit() {
			elementor.on("panel:init", () => {
				elementor.hooks.addFilter("panel/elements/regionViews", this.filterRegionViews.bind(this));
			});
			this.registerTemplateType();
			this.setWidgetContextMenuSaveAction();
			this.setWidgetType();
		}
		onElementorInitComponents() {
			$e.components.register(new Component$5());
			$e.data.get("document/global/templates", {}, { refresh: true });
		}
		onElementorPreviewLoaded(isFirst) {
			if (!isFirst) return;
			this.addPanelPage();
			$e.routes.register("panel/editor", "global", (args) => {
				elementor.getPanelView().setPage("globalWidget", "Global Editing", { editedView: args.view });
			});
		}
		onWidgetTemplateSaved(data) {
			elementor.templates.layout.hideModal();
			const container = elementor.getContainer(elementor.templates.layout.modalContent.currentView.model.id);
			$e.run("document/global/link", {
				container,
				data
			});
		}
	};
	//#endregion
	//#region modules/theme-builder/assets/js/editor/publish/content.js
	var content_default = class extends Marionette.LayoutView {
		static {
			__name(this, "default");
		}
		id() {
			return "elementor-publish";
		}
		getTemplate() {
			return Marionette.TemplateCache.get("#tmpl-elementor-component-publish");
		}
		regions() {
			return { screen: "#elementor-publish__screen" };
		}
		templateHelpers() {
			return { tabs: this.getOption("component").getTabs() };
		}
	};
	//#endregion
	//#region modules/theme-builder/assets/js/editor/publish/layout.js
	var layout_default = class extends elementorModules.common.views.modal.Layout {
		static {
			__name(this, "default");
		}
		getModalOptions() {
			return {
				id: "elementor-publish__modal",
				hide: { onButtonClick: false }
			};
		}
		getLogoOptions() {
			return { title: (0, _wordpress_i18n.__)("Publish Settings", "elementor-pro") };
		}
		initModal() {
			super.initModal();
			this.modal.addButton({
				name: "publish",
				text: (0, _wordpress_i18n.__)("Save & Close", "elementor-pro"),
				callback: () => $e.run("theme-builder-publish/save")
			});
			this.modal.getElements("publish").addClass("e-btn-txt");
			this.modal.addButton({
				name: "next",
				text: (0, _wordpress_i18n.__)("Next", "elementor-pro"),
				callback: () => $e.run("theme-builder-publish/next")
			});
			const $publishButton = this.modal.getElements("publish");
			this.modal.getElements("next").addClass("e-primary").add($publishButton).addClass("elementor-button").removeClass("dialog-button");
		}
	};
	//#endregion
	//#region modules/theme-builder/assets/js/editor/hooks/data/document/elements/settings/save-and-reload.js
	/**
	* Hook fired when template: 'single' page layout changed.
	*/
	var ThemeBuilderSaveAndReload = class extends $e.modules.hookData.After {
		getCommand() {
			return "document/elements/settings";
		}
		getId() {
			return "elementor-pro-theme-builder-save-and-reload";
		}
		getContainerType() {
			return "document";
		}
		getConditions(args) {
			return args.settings && args.settings.page_template;
		}
		apply() {
			$e.run("document/save/auto", {
				force: true,
				onSuccess: () => {
					elementor.reloadPreview();
					elementor.once("preview:loaded", () => {
						$e.route("panel/page-settings/settings");
					});
				}
			});
		}
	};
	//#endregion
	//#region modules/theme-builder/assets/js/editor/hooks/data/document/elements/settings/update-preview-options.js
	var ThemeBuilderUpdatePreviewOptions = class extends $e.modules.hookData.After {
		getCommand() {
			return "document/elements/settings";
		}
		getId() {
			return "elementor-pro-theme-builder-update-preview-options";
		}
		getContainerType() {
			return "document";
		}
		getConditions(args) {
			return args.settings && args.settings.preview_type;
		}
		apply(args) {
			const { containers = [args.container] } = args, { themeBuilder } = elementorPro.modules;
			$e.run("document/elements/settings", {
				containers,
				settings: {
					preview_id: "",
					preview_search_term: ""
				}
			});
			if ($e.routes.is("panel/page-settings/settings")) themeBuilder.updatePreviewIdOptions(true);
		}
	};
	//#endregion
	//#region modules/theme-builder/assets/js/editor/hooks/data/document/save/save-conditions.js
	var ThemeBuilderSaveConditions = class extends $e.modules.hookData.After {
		getCommand() {
			return "document/save/save";
		}
		getId() {
			return "elementor-pro-theme-builder-save-conditions";
		}
		getConditions() {
			return !!elementor.config.document.theme_builder;
		}
		apply() {
			const { conditionsModel } = elementorPro.modules.themeBuilder;
			elementorPro.ajax.addRequest("theme_builder_save_conditions", {
				data: conditionsModel.toJSON({ remove: ["default"] }),
				success: () => {
					elementor.config.document.theme_builder.settings.conditions = conditionsModel.get("conditions");
				}
			});
		}
	};
	//#endregion
	//#region modules/theme-builder/assets/js/editor/hooks/data/document/save/show-conditions.js
	var ThemeBuilderShowConditions = class extends $e.modules.hookData.Dependency {
		getCommand() {
			return "document/save/default";
		}
		getId() {
			return "elementor-pro-theme-builder-show-conditions";
		}
		getConditions(args) {
			const { force = false } = args;
			if (force) return false;
			let showConditions = false;
			const themeBuilder = elementor.config.document.theme_builder;
			if (themeBuilder) {
				const hasConditions = themeBuilder.settings.conditions.length;
				const hasLocation = themeBuilder.settings.location;
				const isDraft = "draft" === elementor.settings.page.model.get("post_status");
				if (hasLocation && (!hasConditions || isDraft)) showConditions = true;
			}
			return showConditions;
		}
		apply() {
			$e.route("theme-builder-publish/conditions");
			return false;
		}
	};
	//#endregion
	//#region modules/theme-builder/assets/js/editor/hooks/data/editor/documents/preview/preview-break.js
	var ThemeBuilderPreviewBreak = class extends $e.modules.hookData.Dependency {
		getCommand() {
			return "editor/documents/preview";
		}
		getId() {
			return "elementor-pro-theme-builder-preview-break";
		}
		getConditions(args) {
			if (args.force) return false;
			return !!elementor.documents.get(args.id).config.theme_builder;
		}
		apply() {
			return false;
		}
	};
	//#endregion
	//#region assets/dev/js/editor/inline-controls-stack.js
	var require_inline_controls_stack = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = elementorModules.editor.views.ControlsStack.extend({
			activeTab: "content",
			activeSection: "settings",
			initialize() {
				this.collection = new Backbone.Collection(_.values(this.options.controls));
			},
			filter(model) {
				if ("section" === model.get("type")) return true;
				var section = model.get("section");
				return !section || section === this.activeSection;
			},
			childViewOptions() {
				return { elementSettingsModel: this.model };
			}
		});
	}));
	//#endregion
	//#region modules/theme-builder/assets/js/editor/conditions/view.js
	var require_view = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = require_inline_controls_stack().extend({
			id: "elementor-theme-builder-conditions-view",
			template: "#tmpl-elementor-theme-builder-conditions-view",
			childViewContainer: "#elementor-theme-builder-conditions-controls",
			childViewOptions() {
				return { elementSettingsModel: this.model };
			}
		});
	}));
	//#endregion
	//#region modules/theme-builder/assets/js/editor/conditions/repeater-row.js
	var require_repeater_row = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = elementor.modules.controls.RepeaterRow.extend({
			template: "#tmpl-elementor-theme-builder-conditions-repeater-row",
			childViewContainer: ".elementor-theme-builder-conditions-repeater-row-controls",
			conflictCheckedOnFirstRender: false,
			id() {
				return "elementor-condition-id-" + this.model.get("_id");
			},
			onBeforeRender() {
				var subNameModel = this.collection.findWhere({ name: "sub_name" });
				var subIdModel = this.collection.findWhere({ name: "sub_id" });
				var subConditionConfig = this.config.conditions[this.model.attributes.sub_name];
				subNameModel.attributes.groups = this.getOptions();
				if (subConditionConfig && subConditionConfig.controls) _(subConditionConfig.controls).each(function(control) {
					subIdModel.set(control);
					subIdModel.set("name", "sub_id");
				});
			},
			initialize() {
				elementor.modules.controls.RepeaterRow.prototype.initialize.apply(this, arguments);
				this.config = elementor.config.document.theme_builder;
			},
			updateOptions() {
				if (this.model.changed.name) this.model.set({
					sub_name: "",
					sub_id: ""
				});
				if (this.model.changed.name || this.model.changed.sub_name) {
					this.model.set("sub_id", "", { silent: true });
					this.collection.findWhere({ name: "sub_id" }).set({
						type: "select",
						options: { "": "All" }
					});
					this.render();
				}
				if (this.model.changed.type) this.setTypeAttribute();
			},
			getOptions() {
				var self = this;
				var conditionConfig = self.config.conditions[this.model.get("name")];
				if (!conditionConfig) return;
				var options = { "": conditionConfig.all_label };
				_(conditionConfig.sub_conditions).each(function(conditionId, conditionIndex) {
					var subConditionConfig = self.config.conditions[conditionId];
					var group;
					if (!subConditionConfig) return;
					if (subConditionConfig.sub_conditions.length) {
						group = {
							label: subConditionConfig.label,
							options: {}
						};
						group.options[conditionId] = subConditionConfig.all_label;
						_(subConditionConfig.sub_conditions).each(function(subConditionId) {
							group.options[subConditionId] = self.config.conditions[subConditionId].label;
						});
						options["key" + conditionIndex] = group;
					} else options[conditionId] = subConditionConfig.label;
				});
				return options;
			},
			setTypeAttribute() {
				var typeView = this.children.findByModel(this.collection.findWhere({ name: "type" }));
				typeView.$el.attr("data-elementor-condition-type", typeView.getControlValue());
			},
			checkConflicts() {
				var modelId = this.model.get("_id");
				var rowId = "elementor-condition-id-" + modelId;
				var errorMessageId = "elementor-conditions-conflict-message-" + modelId;
				var $error = jQuery("#" + errorMessageId);
				jQuery("#" + rowId).removeClass("elementor-error");
				$error.remove();
				elementorPro.ajax.addRequest("theme_builder_conditions_check_conflicts", {
					unique_id: rowId,
					data: { condition: this.model.toJSON() },
					success(data) {
						if (!_.isEmpty(data)) jQuery("#" + rowId).addClass("elementor-error").after("<div id=\"" + errorMessageId + "\" class=\"elementor-conditions-conflict-message\">" + data + "</div>");
					}
				});
			},
			onRender() {
				var nameModel = this.collection.findWhere({ name: "name" });
				var subNameModel = this.collection.findWhere({ name: "sub_name" });
				var subIdModel = this.collection.findWhere({ name: "sub_id" });
				var nameView = this.children.findByModel(nameModel);
				var subNameView = this.children.findByModel(subNameModel);
				var subIdView = this.children.findByModel(subIdModel);
				var conditionConfig = this.config.conditions[this.model.attributes.name];
				var subConditionConfig = this.config.conditions[this.model.attributes.sub_name];
				var typeConfig = this.config.types[this.config.settings.template_type];
				if (typeConfig.condition_type === nameView.getControlValue() && "general" !== nameView.getControlValue() && !_.isEmpty(conditionConfig.sub_conditions)) nameView.$el.hide();
				if (!conditionConfig || _.isEmpty(conditionConfig.sub_conditions) && _.isEmpty(conditionConfig.controls) || !nameView.getControlValue() || "general" === nameView.getControlValue()) subNameView.$el.hide();
				if (!subConditionConfig || _.isEmpty(subConditionConfig.controls) || !subNameView.getControlValue()) subIdView.$el.hide();
				if ("singular" === typeConfig.condition_type) {
					if ("" === subNameView.getControlValue()) subNameView.setValue("post");
				}
				this.setTypeAttribute();
				if (!this.conflictCheckedOnFirstRender) {
					this.checkConflicts();
					this.conflictCheckedOnFirstRender = true;
				}
			},
			onModelChange() {
				this.updateOptions();
				this.checkConflicts();
			}
		});
	}));
	//#endregion
	//#region modules/theme-builder/assets/js/editor/conditions/repeater.js
	var require_repeater = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var import_repeater_row = /* @__PURE__ */ __toESM(require_repeater_row());
		module.exports = elementor.modules.controls.Repeater.extend({
			childView: import_repeater_row.default,
			updateActiveRow() {},
			initialize() {
				elementor.modules.controls.Repeater.prototype.initialize.apply(this, arguments);
				this.config = elementor.config.document.theme_builder;
				this.updateConditionsOptions(this.config.settings.template_type);
			},
			updateConditionsOptions(templateType) {
				var self = this;
				var conditionType = self.config.types[templateType].condition_type;
				var options = {};
				_([conditionType]).each(function(conditionId, conditionIndex) {
					var conditionConfig = self.config.conditions[conditionId];
					var group = {
						label: conditionConfig.label,
						options: {}
					};
					group.options[conditionId] = conditionConfig.all_label;
					_(conditionConfig.sub_conditions).each(function(subConditionId) {
						group.options[subConditionId] = self.config.conditions[subConditionId].label;
					});
					options[conditionIndex] = group;
				});
				var fields = this.model.get("fields");
				fields[1].default = conditionType;
				if ("general" === conditionType) fields[1].groups = options;
				else fields[2].groups = options;
			},
			onRender() {
				this.ui.btnAddRow.text((0, _wordpress_i18n.__)("Add condition", "elementor-pro"));
			}
		});
	}));
	//#endregion
	//#region modules/theme-builder/assets/js/editor/hooks/ui/editor/documents/open/add-editor-ui.js
	var import_view = /* @__PURE__ */ __toESM(require_view());
	var ThemeBuilderAddEditorUI = class extends $e.modules.hookUI.After {
		getCommand() {
			return "editor/documents/open";
		}
		getId() {
			return "elementor-pro-theme-builder-add-editor-ui";
		}
		getConditions(args) {
			return elementor.documents.get(args.id).config.theme_builder;
		}
		apply() {
			if (elementor.panel) this.addUI();
			else elementor.once("preview:loaded", this.addUI.bind(this));
		}
		addUI() {
			this.addRepeaterControlView();
			this.addPublishTabs();
		}
		addRepeaterControlView() {
			elementor.addControlView("Conditions_repeater", require_repeater());
		}
		addPublishTabs() {
			const component = $e.components.get("theme-builder-publish");
			const themeBuilderModuleConfig = elementor.config.document.theme_builder;
			const settings = themeBuilderModuleConfig.settings;
			component.manager.conditionsModel = new elementorModules.editor.elements.models.BaseSettings(settings, { controls: themeBuilderModuleConfig.template_conditions.controls });
			component.addTab("conditions", {
				title: (0, _wordpress_i18n.__)("Conditions", "elementor-pro"),
				View: import_view.default,
				viewOptions: {
					model: component.manager.conditionsModel,
					controls: component.manager.conditionsModel.controls
				},
				name: "conditions",
				description: (0, _wordpress_i18n.__)("Apply current template to these pages.", "elementor-pro"),
				image: elementorPro.config.urls.modules + "theme-builder/assets/images/conditions-tab.svg"
			});
		}
	};
	//#endregion
	//#region modules/theme-builder/assets/js/editor/hooks/ui/editor/documents/close/remove-editor-ui.js
	var ThemeBuilderRemoveEditorUI = class extends $e.modules.hookUI.After {
		getCommand() {
			return "editor/documents/unload";
		}
		getId() {
			return "elementor-pro-theme-builder-remove-editor-ui";
		}
		getConditions(args) {
			const { document } = args;
			return document.config.theme_builder;
		}
		apply() {
			this.removePublishTabs();
		}
		removePublishTabs() {
			$e.components.get("theme-builder-publish").removeTab("conditions");
		}
	};
	//#endregion
	//#region modules/theme-builder/assets/js/editor/hooks/ui/save/after.js
	var ThemeBuilderFooterSaverAfterSave = class extends $e.modules.hookUI.After {
		getCommand() {
			return "document/save/save";
		}
		getId() {
			return "theme-builder-footer-saver-after-save";
		}
		getConditions() {
			return elementor.config.document.support_site_editor;
		}
		apply(args, result) {
			const { status } = args;
			if (result.statusChanged) this.onPageStatusChange(status);
		}
		onPageStatusChange(newStatus) {
			if ("publish" !== newStatus) return;
			const options = {
				classes: "e-theme-builder-save-toaster",
				message: elementor.config.document.panel.messages.publish_notification,
				buttons: [{
					name: "open_site_editor",
					text: "<i class=\"eicon-external-link-square\"></i><span class=\"e-theme-builder-toaster-button-text\">" + (0, _wordpress_i18n.__)("Open Site Editor", "elementor-pro") + "</span>",
					callback() {
						$e.run("app/open");
					}
				}, {
					name: "view_live_site",
					text: "<i class=\"eicon-preview-medium\"></i><span class=\"e-theme-builder-toaster-button-text\">" + (0, _wordpress_i18n.__)("View Live Site", "elementor-pro") + "</span>",
					callback() {
						open(elementor.config.document.urls.permalink);
					}
				}]
			};
			elementor.notifications.showToast(options);
		}
	};
	//#endregion
	//#region modules/theme-builder/assets/js/editor/hooks/index.js
	var hooks_exports$4 = /* @__PURE__ */ __exportAll({
		ThemeBuilderAddEditorUI: () => ThemeBuilderAddEditorUI,
		ThemeBuilderFooterSaverAfterSave: () => ThemeBuilderFooterSaverAfterSave,
		ThemeBuilderPreviewBreak: () => ThemeBuilderPreviewBreak,
		ThemeBuilderRemoveEditorUI: () => ThemeBuilderRemoveEditorUI,
		ThemeBuilderSaveAndReload: () => ThemeBuilderSaveAndReload,
		ThemeBuilderSaveConditions: () => ThemeBuilderSaveConditions,
		ThemeBuilderShowConditions: () => ThemeBuilderShowConditions,
		ThemeBuilderUpdatePreviewOptions: () => ThemeBuilderUpdatePreviewOptions
	});
	//#endregion
	//#region modules/theme-builder/assets/js/editor/publish/component.js
	var Component$4 = class extends $e.modules.ComponentModalBase {
		static {
			__name(this, "Component");
		}
		getNamespace() {
			return "theme-builder-publish";
		}
		getModalLayout() {
			return layout_default;
		}
		defaultCommands() {
			return {
				next: () => {
					const next = Object.keys(this.tabs)[this.currentTabIndex + 1];
					if (next) $e.route(this.getTabRoute(next));
				},
				save: () => {
					$e.run("document/save/default", { force: true });
					this.layout.hideModal();
				},
				"preview-settings": () => {
					const panel = elementor.getPanelView();
					$e.route("panel/page-settings/settings");
					panel.getCurrentPageView().activateSection("preview_settings")._renderChildren();
				}
			};
		}
		defaultHooks() {
			return this.importHooks(hooks_exports$4);
		}
		getTabsWrapperSelector() {
			return "#elementor-publish__tabs";
		}
		renderTab(tab) {
			const tabs = this.getTabs();
			const keys = Object.keys(tabs);
			const tabArgs = tabs[tab];
			this.currentTabIndex = keys.indexOf(tab);
			const isLastTab = !keys[this.currentTabIndex + 1];
			this.layout.modalContent.currentView.screen.show(new tabArgs.View(tabArgs.viewOptions));
			this.layout.modal.getElements("next").toggle(!isLastTab);
			this.layout.modal.getElements("publish").toggleClass("e-primary", isLastTab);
		}
		activateTab(tab) {
			$e.routes.saveState(this.getNamespace());
			super.activateTab(tab);
		}
		open() {
			super.open();
			if (!this.layoutContent) {
				this.layout.showLogo();
				this.layout.modalContent.show(new content_default({ component: this }));
				this.layoutContent = true;
			}
			return true;
		}
	};
	//#endregion
	//#region modules/theme-builder/assets/js/editor/module.js
	init_defineProperty();
	init_asyncToGenerator();
	var ThemeBuilderModule = class extends elementorModules.editor.utils.Module {
		constructor(..._args) {
			super(..._args);
			_defineProperty(this, "updatePreviewIdOptions", (render) => {
				let previewType = elementor.settings.page.model.get("preview_type");
				if (!previewType) return;
				previewType = previewType.split("/");
				const currentView = elementor.getPanelView().getCurrentPageView();
				const controlModel = currentView.collection.findWhere({ name: "preview_id" });
				const templateType = previewType[0];
				const sourceType = previewType[1];
				if ("author" === previewType[1]) controlModel.set({ autocomplete: { object: "author" } });
				else if (this.isTemplateTypeTaxonomyLoop(templateType)) controlModel.set({ autocomplete: {
					object: "tax",
					query: { taxonomy: sourceType }
				} });
				else if ("single" === templateType) controlModel.set({ autocomplete: {
					object: "post",
					query: { post_type: sourceType }
				} });
				else controlModel.set({ autocomplete: { object: "" } });
				if (true === render) {
					const controlView = currentView.children.findByModel(controlModel);
					controlView.render();
					controlView.$el.toggle(!!controlModel.get("autocomplete").object);
				}
			});
		}
		__construct(...args) {
			super.__construct(...args);
			Object.defineProperty(elementorPro.config, "theme_builder", { get() {
				elementorDevTools.deprecation.deprecated("theme_builder", "2.9.0", "elementor.config.document.theme_builder");
				return elementor.config.document.theme_builder;
			} });
		}
		onElementorLoaded() {
			this.component = $e.components.register(new Component$4({ manager: this }));
			elementor.on("document:loaded", this.onDocumentLoaded.bind(this));
			elementor.on("document:unload", this.onDocumentUnloaded.bind(this));
			this.onApplyPreview = this.onApplyPreview.bind(this);
			this.onSectionPreviewSettingsActive = this.onSectionPreviewSettingsActive.bind(this);
			elementor.channels.editor.on("elementorProSiteLogo:change", this.openSiteIdentity);
		}
		onDocumentLoaded(document) {
			if (!document.config.theme_builder) return;
			elementor.getPanelView().on("set:page:page_settings", this.updatePreviewIdOptions);
			elementor.channels.editor.on("elementorThemeBuilder:ApplyPreview", this.onApplyPreview);
			elementor.channels.editor.on("page_settings:preview_settings:activated", this.onSectionPreviewSettingsActive);
		}
		onDocumentUnloaded(document) {
			if (!document.config.theme_builder) return;
			elementor.getPanelView().off("set:page:page_settings", this.updatePreviewIdOptions);
			elementor.channels.editor.off("elementorThemeBuilder:ApplyPreview", this.onApplyPreview);
			elementor.channels.editor.off("page_settings:preview_settings:activated", this.onSectionPreviewSettingsActive);
		}
		saveAndReload() {
			$e.run("document/save/auto", {
				force: true,
				onSuccess: () => {
					elementor.dynamicTags.cleanCache();
					if (elementor.config.initial_document.id === elementor.documents.getCurrentId()) elementor.reloadPreview();
					else $e.internal("editor/documents/attach-preview");
				}
			});
		}
		onApplyPreview() {
			this.saveAndReload();
		}
		onSectionPreviewSettingsActive() {
			this.updatePreviewIdOptions(true);
		}
		isTemplateTypeTaxonomyLoop(templateType) {
			return ["post_taxonomy", "product_taxonomy"].includes(templateType);
		}
		openSiteIdentity() {
			return _asyncToGenerator(function* () {
				yield $e.run("panel/global/open");
				$e.route("panel/global/settings-site-identity");
			})();
		}
	};
	//#endregion
	//#region modules/forms/assets/js/editor/hooks/data/form-fields-sanitize-custom-id.js
	init_defineProperty();
	var FormFieldsSanitizeCustomId = class extends $e.modules.hookData.Dependency {
		constructor(..._args) {
			super(..._args);
			_defineProperty(this, "ID_SANITIZE_FILTER", /[^\w]/g);
		}
		getCommand() {
			return "document/elements/settings";
		}
		getId() {
			return "elementor-pro-forms-fields-sanitize-custom-id";
		}
		getContainerType() {
			return "repeater";
		}
		getConditions(args) {
			return void 0 !== args.settings.custom_id;
		}
		apply(args) {
			const { containers = [args.container], settings } = args, { custom_id: customId } = settings;
			if (customId.match(this.ID_SANITIZE_FILTER)) {
				containers.forEach((container) => {
					const idView = container.panel.getControlView("form_fields").children.findByModel(container.settings).children.find((view) => "custom_id" === view.model.get("name"));
					idView.render();
					idView.$el.find("input").trigger("focus");
				});
				return false;
			}
			return true;
		}
	};
	//#endregion
	//#region modules/forms/assets/js/editor/hooks/data/form-fields-set-custom-id.js
	var FormFieldsSetCustomId = class extends $e.modules.hookData.After {
		getCommand() {
			return "document/repeater/insert";
		}
		getId() {
			return "elementor-pro-forms-fields-set-custom-id";
		}
		getContainerType() {
			return "widget";
		}
		getConditions(args) {
			return "form_fields" === args.name;
		}
		apply(args, model) {
			const { containers = [args.container] } = args, isDuplicate = $e.commands.isCurrentFirstTrace("document/repeater/duplicate");
			containers.forEach((container) => {
				const itemContainer = container.repeaters.form_fields.children.find((childrenContainer) => {
					if (childrenContainer) return model.get("_id") === childrenContainer.id;
					return false;
				});
				if (!isDuplicate && itemContainer.settings.get("custom_id")) return;
				$e.run("document/elements/settings", {
					container: itemContainer,
					settings: { custom_id: "field_" + itemContainer.id },
					options: { external: true }
				});
			});
			return true;
		}
	};
	//#endregion
	//#region modules/forms/assets/js/editor/hooks/data/form-fields-step.js
	var FormFieldsAddFirstStep = class extends $e.modules.hookData.After {
		getCommand() {
			return "document/elements/settings";
		}
		getId() {
			return "elementor-pro-forms-fields-first-step";
		}
		getContainerType() {
			return "repeater";
		}
		getConditions(args) {
			const { containers = [args.container] } = args;
			return "form" === containers[0].parent.parent.model.get("widgetType") && "step" === args.settings.field_type;
		}
		apply(args) {
			const { containers = [args.container] } = args;
			containers.forEach((container) => {
				if ("step" === container.parent.children[0].settings.get("field_type")) return;
				$e.run("document/repeater/insert", {
					container: container.parent.parent,
					name: "form_fields",
					model: { field_type: "step" },
					options: {
						at: 0,
						external: true
					}
				});
			});
			return true;
		}
	};
	//#endregion
	//#region modules/forms/assets/js/editor/hooks/data/form-sanitize-id.js
	init_defineProperty();
	var FormSanitizeId = class extends $e.modules.hookData.Dependency {
		constructor(..._args) {
			super(..._args);
			_defineProperty(this, "ID_SANITIZE_FILTER", /[^\w]/g);
		}
		getCommand() {
			return "document/elements/settings";
		}
		getId() {
			return "elementor-pro-forms-sanitize-id";
		}
		getContainerType() {
			return "widget";
		}
		getConditions(args) {
			return void 0 !== args.settings.form_id;
		}
		apply(args) {
			const { container, settings } = args;
			const { form_id: formId } = settings;
			if (formId.match(this.ID_SANITIZE_FILTER)) {
				const formIdView = container.panel.getControlView("form_id");
				formIdView.render();
				formIdView.$el.find("input").trigger("focus");
				return false;
			}
			return true;
		}
	};
	//#endregion
	//#region modules/forms/assets/js/editor/hooks/ui/form-fields-update-shortcode.js
	var FormFieldsUpdateShortCode = class extends $e.modules.hookUI.After {
		getCommand() {
			return "document/elements/settings";
		}
		getId() {
			return "elementor-pro-forms-fields-update-shortcode";
		}
		getContainerType() {
			return "repeater";
		}
		getConditions(args) {
			if (!$e.routes.isPartOf("panel/editor") || void 0 === args.settings.custom_id) return false;
			return true;
		}
		apply(args) {
			const { containers = [args.container] } = args;
			containers.forEach((container) => {
				container.panel.getControlView("form_fields").children.find((view) => container.id === view.model.get("_id")).children.find((view) => "shortcode" === view.model.get("name")).render();
			});
		}
	};
	//#endregion
	//#region modules/forms/assets/js/editor/hooks/index.js
	var hooks_exports$3 = /* @__PURE__ */ __exportAll({
		FormFieldsAddFirstStep: () => FormFieldsAddFirstStep,
		FormFieldsSanitizeCustomId: () => FormFieldsSanitizeCustomId,
		FormFieldsSetCustomId: () => FormFieldsSetCustomId,
		FormFieldsUpdateShortCode: () => FormFieldsUpdateShortCode,
		FormSanitizeId: () => FormSanitizeId
	});
	//#endregion
	//#region modules/forms/assets/js/editor/component.js
	var Component$3 = class extends $e.modules.ComponentBase {
		static {
			__name(this, "Component");
		}
		getNamespace() {
			return "forms";
		}
		defaultHooks() {
			return this.importHooks(hooks_exports$3);
		}
	};
	//#endregion
	//#region modules/forms/assets/js/editor/reply-to-field.js
	var require_reply_to_field = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = function() {
			var editor;
			var editedModel;
			var replyToControl;
			var setReplyToControl = function() {
				replyToControl = editor.collection.findWhere({ name: "email_reply_to" });
			};
			var getReplyToView = function() {
				return editor.children.findByModelCid(replyToControl.cid);
			};
			var refreshReplyToElement = function() {
				var replyToView = getReplyToView();
				if (replyToView) replyToView.render();
			};
			var updateReplyToOptions = function() {
				var emailModels = editedModel.get("settings").get("form_fields").where({ field_type: "email" });
				var emailFields;
				emailModels = _.reject(emailModels, { field_label: "" });
				emailFields = _.map(emailModels, function(model) {
					return {
						id: model.get("custom_id"),
						label: (0, _wordpress_i18n.sprintf)((0, _wordpress_i18n.__)("%s Field", "elementor-pro"), model.get("field_label"))
					};
				});
				replyToControl.set("options", { "": replyToControl.get("options")[""] });
				_.each(emailFields, function(emailField) {
					replyToControl.get("options")[emailField.id] = emailField.label;
				});
				refreshReplyToElement();
			};
			var updateDefaultReplyTo = function(settingsModel) {
				replyToControl.get("options")[""] = settingsModel.get("email_from");
				refreshReplyToElement();
			};
			var onFormFieldsChange = function(changedModel) {
				if (changedModel.get("custom_id")) {
					if ("email" === changedModel.get("field_type")) updateReplyToOptions();
				}
				if (changedModel.changed.email_from) updateDefaultReplyTo(changedModel);
			};
			var onPanelShow = function(panel, model) {
				editor = panel.getCurrentPageView();
				editedModel = model;
				setReplyToControl();
				var settingsModel = editedModel.get("settings");
				settingsModel.on("change", onFormFieldsChange);
				updateDefaultReplyTo(settingsModel);
				updateReplyToOptions();
			};
			var init = function() {
				elementor.hooks.addAction("panel/open_editor/widget/form", onPanelShow);
			};
			init();
		};
	}));
	//#endregion
	//#region modules/forms/assets/js/editor/recaptcha.js
	var require_recaptcha = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = elementorModules.editor.utils.Module.extend({
			enqueueRecaptchaJs(url, type) {
				if (!elementorFrontend.elements.$body.find("[src=\"" + url + "\"]").length) elementorFrontend.elements.$body.append("<script src=\"" + url + "\" id=\"recaptcha-" + type + "\"<\/script>");
			},
			renderField(inputField, item) {
				inputField += "<div class=\"elementor-field " + item.field_type + " \">";
				inputField += this.getDataSettings(item);
				inputField += "</div>";
				return inputField;
			},
			getDataSettings(item) {
				const config = elementorPro.config.forms[item.field_type];
				const srcURL = "https://www.google.com/recaptcha/api.js?render=explicit";
				if (!config.enabled) return "<div class=\"elementor-alert elementor-alert-info\">" + config.setup_message + "</div>";
				let recaptchaData = "data-sitekey=\"" + config.site_key + "\" data-type=\"" + config.type + "\"";
				switch (config.type) {
					case "v3":
						recaptchaData += " data-action=\"form\" data-size=\"invisible\" data-badge=\"" + item.recaptcha_badge + "\"";
						break;
					case "v2_checkbox":
						recaptchaData += " data-theme=\"" + item.recaptcha_style + "\"";
						recaptchaData += " data-size=\"" + item.recaptcha_size + "\"";
						break;
				}
				this.enqueueRecaptchaJs(srcURL, config.type);
				return "<div class=\"elementor-g-recaptcha" + _.escape(item.css_classes) + "\" " + recaptchaData + "></div>";
			},
			filterItem(item) {
				if ("recaptcha" === item.field_type) item.field_label = false;
				return item;
			},
			onInit() {
				elementor.hooks.addFilter("elementor_pro/forms/content_template/item", this.filterItem);
				elementor.hooks.addFilter("elementor_pro/forms/content_template/field/recaptcha", this.renderField, 10, 2);
				elementor.hooks.addFilter("elementor_pro/forms/content_template/field/recaptcha_v3", this.renderField, 10, 2);
			}
		});
	}));
	//#endregion
	//#region assets/dev/js/editor/element-editor-module.js
	var require_element_editor_module = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = elementorModules.editor.utils.Module.extend({
			elementType: null,
			__construct(elementType) {
				this.elementType = elementType;
				this.addEditorListener();
			},
			updateOptions(name, options) {
				const controlView = this.getEditorControlView(name);
				if (controlView) {
					this.getEditorControlModel(name).set("options", options);
					controlView.render();
				}
			},
			addEditorListener() {
				var self = this;
				if (self.onElementChange) {
					var eventName = "change";
					if ("global" !== self.elementType) eventName += ":" + self.elementType;
					elementor.channels.editor.on(eventName, function(controlView, elementView) {
						self.onElementChange(controlView.model.get("name"), controlView, elementView);
					});
				}
			},
			/**
			* Add a spinner to a control inside its control title.
			*
			* @param {string} controlName - The control name to add the spinner to.
			*
			* @return {void}
			*/
			addControlSpinner(controlName) {
				const $el = this.getEditorControlView(controlName).$el;
				if ($el.find(".elementor-control-spinner").length) return;
				$el.find(":input").attr("disabled", true);
				$el.find(".elementor-control-title").after("<span class=\"elementor-control-spinner\"><i class=\"eicon-spinner eicon-animation-spin\"></i>&nbsp;</span>");
			},
			/**
			* Remove a spinner from a control.
			*
			* @param {string} controlName - The control name to remove the spinner from.
			*
			* @return {void}
			*/
			removeControlSpinner(controlName) {
				const $controlEl = this.getEditorControlView(controlName).$el;
				$controlEl.find(":input").attr("disabled", false);
				$controlEl.find(".elementor-control-spinner").remove();
			},
			/**
			* Add an error message under the control.
			*
			* @param {string} controlName - The control name to add the error to.
			* @param {string} error       - Set an error message.
			* @param {string} location    - A CSS selector to the element which the error will be appended to.
			*
			* @return {void}
			*/
			addControlError(controlName, error, location = ".elementor-control-content") {
				const $el = this.getEditorControlView(controlName).$el;
				if ($el.find(".e-control-error").length) $el.find(".e-control-error").remove();
				$el.find(location).first().after(`<span class="elementor-control-field-description e-control-error">${error}</span>`);
			},
			/**
			* Remove the control error message.
			*
			* @param {string} controlName - The control name to add the error to.
			*
			* @return {void}
			*/
			removeControlError(controlName) {
				this.getEditorControlView(controlName).$el.find(".e-control-error").remove();
			},
			/**
			* Remove any indicators that are related to the control. (e.g. spinner, error, etc.)
			*
			* @param {string} controlName - The control name to reset.
			*
			* @return {void}
			*/
			resetControlIndicators(controlName) {
				this.removeControlSpinner(controlName);
				this.removeControlError(controlName);
			},
			addSectionListener(section, callback) {
				const self = this;
				elementor.channels.editor.on("section:activated", function(sectionName, editor) {
					var model = editor.getOption("editedElementView").getEditModel();
					var currentElementType = model.get("elType");
					var _arguments = arguments;
					if ("widget" === currentElementType) currentElementType = model.get("widgetType");
					if (self.elementType === currentElementType && section === sectionName) setTimeout(function() {
						callback.apply(self, _arguments);
					}, 10);
				});
			}
		});
	}));
	//#endregion
	//#region modules/forms/assets/js/editor/integrations/base.js
	var require_base = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var ElementEditorModule = require_element_editor_module();
		module.exports = ElementEditorModule.extend({
			__construct() {
				this.cache = {};
				ElementEditorModule.prototype.__construct.apply(this, arguments);
			},
			getName() {
				return "";
			},
			getCacheKey(args) {
				return JSON.stringify({
					service: this.getName(),
					data: args
				});
			},
			fetchCache(type, cacheKey, requestArgs, immediately = false) {
				return elementorPro.ajax.addRequest("forms_panel_action_data", {
					unique_id: "integrations_" + this.getName(),
					data: requestArgs,
					success: (data) => {
						this.cache[type] = _.extend({}, this.cache[type]);
						this.cache[type][cacheKey] = data[type];
					}
				}, immediately);
			},
			onInit() {
				this.addSectionListener("section_" + this.getName(), this.onSectionActive);
			},
			onSectionActive() {
				this.onApiUpdate();
			},
			onApiUpdate() {}
		});
	}));
	//#endregion
	//#region modules/forms/assets/js/editor/integrations/mailerlite.js
	var require_mailerlite = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var BaseIntegrationModule = require_base();
		module.exports = BaseIntegrationModule.extend({
			fields: {},
			getName() {
				return "mailerlite";
			},
			onElementChange(setting) {
				switch (setting) {
					case "mailerlite_api_key_source":
					case "mailerlite_custom_api_key":
						this.onMailerliteApiKeyUpdate();
						break;
					case "mailerlite_group":
						this.updateFieldsMapping();
						break;
				}
			},
			onMailerliteApiKeyUpdate() {
				var self = this;
				var controlView = self.getEditorControlView("mailerlite_custom_api_key");
				var GlobalApiKeycontrolView = self.getEditorControlView("mailerlite_api_key_source");
				if ("default" !== GlobalApiKeycontrolView.getControlValue() && "" === controlView.getControlValue()) {
					self.updateOptions("mailerlite_group", []);
					self.getEditorControlView("mailerlite_group").setValue("");
					return;
				}
				self.addControlSpinner("mailerlite_group");
				const cacheKey = this.getCacheKey({
					type: "groups",
					controls: [controlView.getControlValue(), GlobalApiKeycontrolView.getControlValue()]
				});
				self.getMailerliteCache("groups", "groups", cacheKey).done(function(data) {
					self.updateOptions("mailerlite_group", data.groups);
					self.fields = data.fields;
				});
			},
			updateFieldsMapping() {
				if (!this.getEditorControlView("mailerlite_group").getControlValue()) return;
				const remoteFields = [
					{
						remote_label: (0, _wordpress_i18n.__)("Email", "elementor-pro"),
						remote_type: "email",
						remote_id: "email",
						remote_required: true
					},
					{
						remote_label: (0, _wordpress_i18n.__)("Name", "elementor-pro"),
						remote_type: "text",
						remote_id: "name",
						remote_required: false
					},
					{
						remote_label: (0, _wordpress_i18n.__)("Last Name", "elementor-pro"),
						remote_type: "text",
						remote_id: "last_name",
						remote_required: false
					},
					{
						remote_label: (0, _wordpress_i18n.__)("Company", "elementor-pro"),
						remote_type: "text",
						remote_id: "company",
						remote_required: false
					},
					{
						remote_label: (0, _wordpress_i18n.__)("Phone", "elementor-pro"),
						remote_type: "text",
						remote_id: "phone",
						remote_required: false
					},
					{
						remote_label: (0, _wordpress_i18n.__)("Country", "elementor-pro"),
						remote_type: "text",
						remote_id: "country",
						remote_required: false
					},
					{
						remote_label: (0, _wordpress_i18n.__)("State", "elementor-pro"),
						remote_type: "text",
						remote_id: "state",
						remote_required: false
					},
					{
						remote_label: (0, _wordpress_i18n.__)("City", "elementor-pro"),
						remote_type: "text",
						remote_id: "city",
						remote_required: false
					},
					{
						remote_label: (0, _wordpress_i18n.__)("Zip", "elementor-pro"),
						remote_type: "text",
						remote_id: "zip",
						remote_required: false
					}
				];
				for (const field in this.fields) if (Object.prototype.hasOwnProperty.call(this.fields, field)) remoteFields.push(this.fields[field]);
				this.getEditorControlView("mailerlite_fields_map").updateMap(remoteFields);
			},
			getMailerliteCache(type, action, cacheKey, requestArgs) {
				if (_.has(this.cache[type], cacheKey)) {
					const data = {};
					data[type] = this.cache[type][cacheKey];
					return jQuery.Deferred().resolve(data);
				}
				requestArgs = _.extend({}, requestArgs, {
					service: "mailerlite",
					mailerlite_action: action,
					custom_api_key: this.getEditorControlView("mailerlite_custom_api_key").getControlValue(),
					api_key: this.getEditorControlView("mailerlite_api_key_source").getControlValue()
				});
				return this.fetchCache(type, cacheKey, requestArgs);
			},
			onSectionActive() {
				BaseIntegrationModule.prototype.onSectionActive.apply(this, arguments);
				this.onMailerliteApiKeyUpdate();
			}
		});
	}));
	//#endregion
	//#region modules/forms/assets/js/editor/integrations/mailchimp.js
	var require_mailchimp = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var BaseIntegrationModule = require_base();
		module.exports = BaseIntegrationModule.extend({
			getName() {
				return "mailchimp";
			},
			onElementChange(setting) {
				switch (setting) {
					case "mailchimp_api_key_source":
					case "mailchimp_api_key":
						this.onApiUpdate();
						break;
					case "mailchimp_list":
						this.onMailchimpListUpdate();
						break;
				}
			},
			onApiUpdate() {
				var self = this;
				var controlView = self.getEditorControlView("mailchimp_api_key");
				var GlobalApiKeycontrolView = self.getEditorControlView("mailchimp_api_key_source");
				if ("default" !== GlobalApiKeycontrolView.getControlValue() && "" === controlView.getControlValue()) {
					self.updateOptions("mailchimp_list", []);
					self.getEditorControlView("mailchimp_list").setValue("");
					return;
				}
				self.resetControlIndicators("mailchimp_list");
				self.addControlSpinner("mailchimp_list");
				const cacheKey = this.getCacheKey({
					type: "lists",
					controls: [controlView.getControlValue(), GlobalApiKeycontrolView.getControlValue()]
				});
				self.getMailchimpCache("lists", "lists", cacheKey).done(function(data) {
					self.updateOptions("mailchimp_list", data.lists);
					self.updatMailchimpList();
				}).fail(function(error) {
					self.addControlError("mailchimp_list", error);
				}).always(function() {
					self.removeControlSpinner("mailchimp_list");
				});
			},
			onMailchimpListUpdate() {
				this.updateOptions("mailchimp_groups", []);
				this.getEditorControlView("mailchimp_groups").setValue("");
				this.updatMailchimpList();
			},
			updatMailchimpList() {
				var self = this;
				var controlView = self.getEditorControlView("mailchimp_list");
				if (!controlView.getControlValue()) return;
				self.resetControlIndicators("mailchimp_groups");
				self.addControlSpinner("mailchimp_groups");
				this.getCacheKey({
					type: "list_details",
					controls: [controlView.getControlValue()]
				});
				self.getMailchimpCache("list_details", "list_details", controlView.getControlValue(), { mailchimp_list: controlView.getControlValue() }).done(function(data) {
					self.updateOptions("mailchimp_groups", data.list_details.groups);
					self.getEditorControlView("mailchimp_fields_map").updateMap(data.list_details.fields);
				}).fail(function(error) {
					self.addControlError("mailchimp_groups", error);
				}).always(function() {
					self.removeControlSpinner("mailchimp_groups");
				});
				const args = {
					type: "fields",
					action: "fields",
					cacheKey: controlView.getControlValue(),
					args: { mailchimp_list: controlView.getControlValue() },
					immediately: true
				};
				self.getMailchimpCache(...Object.values(args)).done(function(data) {
					self.getEditorControlView("mailchimp_fields_map").updateMap(data.fields);
				});
			},
			getMailchimpCache(type, action, cacheKey, requestArgs, immediately = false) {
				if (_.has(this.cache[type], cacheKey)) {
					var data = {};
					data[type] = this.cache[type][cacheKey];
					return jQuery.Deferred().resolve(data);
				}
				requestArgs = _.extend({}, requestArgs, {
					service: "mailchimp",
					mailchimp_action: action,
					api_key: this.getEditorControlView("mailchimp_api_key").getControlValue(),
					use_global_api_key: this.getEditorControlView("mailchimp_api_key_source").getControlValue()
				});
				return this.fetchCache(type, cacheKey, requestArgs, immediately);
			},
			onSectionActive() {
				BaseIntegrationModule.prototype.onSectionActive.apply(this, arguments);
				this.onApiUpdate();
			}
		});
	}));
	//#endregion
	//#region modules/forms/assets/js/editor/integrations/drip.js
	var require_drip = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = require_base().extend({
			getName() {
				return "drip";
			},
			onElementChange(setting) {
				switch (setting) {
					case "drip_api_token_source":
					case "drip_custom_api_token":
						this.onApiUpdate();
						break;
					case "drip_account":
						this.onDripAccountsUpdate();
						break;
				}
			},
			onApiUpdate() {
				var self = this;
				var controlView = self.getEditorControlView("drip_api_token_source");
				var customControlView = self.getEditorControlView("drip_custom_api_token");
				if ("default" !== controlView.getControlValue() && "" === customControlView.getControlValue()) {
					self.updateOptions("drip_account", []);
					self.getEditorControlView("drip_account").setValue("");
					return;
				}
				self.addControlSpinner("drip_account");
				this.getCacheKey({
					type: "accounts",
					controls: [controlView.getControlValue(), customControlView.getControlValue()]
				});
				self.getDripCache("accounts", "accounts", controlView.getControlValue()).done(function(data) {
					self.updateOptions("drip_account", data.accounts);
				});
			},
			onDripAccountsUpdate() {
				this.updateFieldsMapping();
			},
			updateFieldsMapping() {
				if (!this.getEditorControlView("drip_account").getControlValue()) return;
				var remoteFields = {
					remote_label: (0, _wordpress_i18n.__)("Email", "elementor-pro"),
					remote_type: "email",
					remote_id: "email",
					remote_required: true
				};
				this.getEditorControlView("drip_fields_map").updateMap([remoteFields]);
			},
			getDripCache(type, action, cacheKey, requestArgs) {
				if (_.has(this.cache[type], cacheKey)) {
					var data = {};
					data[type] = this.cache[type][cacheKey];
					return jQuery.Deferred().resolve(data);
				}
				requestArgs = _.extend({}, requestArgs, {
					service: "drip",
					drip_action: action,
					api_token: this.getEditorControlView("drip_api_token_source").getControlValue(),
					custom_api_token: this.getEditorControlView("drip_custom_api_token").getControlValue()
				});
				return this.fetchCache(type, cacheKey, requestArgs);
			}
		});
	}));
	//#endregion
	//#region modules/forms/assets/js/editor/integrations/activecampaign.js
	var require_activecampaign = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = require_base().extend({
			fields: {},
			getName() {
				return "activecampaign";
			},
			onElementChange(setting) {
				switch (setting) {
					case "activecampaign_api_credentials_source":
					case "activecampaign_api_key":
					case "activecampaign_api_url":
						this.onApiUpdate();
						break;
					case "activecampaign_list":
						this.onListUpdate();
						break;
				}
			},
			onApiUpdate() {
				const self = this;
				const apikeyControlView = self.getEditorControlView("activecampaign_api_key");
				const apiUrlControlView = self.getEditorControlView("activecampaign_api_url");
				const apiCredControlView = self.getEditorControlView("activecampaign_api_credentials_source");
				if ("default" !== apiCredControlView.getControlValue() && ("" === apikeyControlView.getControlValue() || "" === apiUrlControlView.getControlValue())) {
					self.updateOptions("activecampaign_list", []);
					self.getEditorControlView("activecampaign_list").setValue("");
					return;
				}
				self.addControlSpinner("activecampaign_list");
				const cacheKey = this.getCacheKey({ controls: [
					apiCredControlView.getControlValue(),
					apiUrlControlView.getControlValue(),
					apikeyControlView.getControlValue()
				] });
				self.getActiveCampaignCache("lists", "activecampaign_list", cacheKey).done(function(data) {
					self.updateOptions("activecampaign_list", data.lists);
					self.fields = data.fields;
				});
			},
			onListUpdate() {
				this.updateFieldsMapping();
			},
			updateFieldsMapping() {
				if (!this.getEditorControlView("activecampaign_list").getControlValue()) return;
				var remoteFields = [
					{
						remote_label: (0, _wordpress_i18n.__)("Email", "elementor-pro"),
						remote_type: "email",
						remote_id: "email",
						remote_required: true
					},
					{
						remote_label: (0, _wordpress_i18n.__)("First Name", "elementor-pro"),
						remote_type: "text",
						remote_id: "first_name",
						remote_required: false
					},
					{
						remote_label: (0, _wordpress_i18n.__)("Last Name", "elementor-pro"),
						remote_type: "text",
						remote_id: "last_name",
						remote_required: false
					},
					{
						remote_label: (0, _wordpress_i18n.__)("Phone", "elementor-pro"),
						remote_type: "text",
						remote_id: "phone",
						remote_required: false
					},
					{
						remote_label: (0, _wordpress_i18n.__)("Organization name", "elementor-pro"),
						remote_type: "text",
						remote_id: "orgname",
						remote_required: false
					}
				];
				for (var field in this.fields) if (Object.prototype.hasOwnProperty.call(this.fields, field)) remoteFields.push(this.fields[field]);
				this.getEditorControlView("activecampaign_fields_map").updateMap(remoteFields);
			},
			getActiveCampaignCache(type, action, cacheKey, requestArgs) {
				if (_.has(this.cache[type], cacheKey)) {
					var data = {};
					data[type] = this.cache[type][cacheKey];
					return jQuery.Deferred().resolve(data);
				}
				requestArgs = _.extend({}, requestArgs, {
					service: "activecampaign",
					activecampaign_action: action,
					api_key: this.getEditorControlView("activecampaign_api_key").getControlValue(),
					api_url: this.getEditorControlView("activecampaign_api_url").getControlValue(),
					api_cred: this.getEditorControlView("activecampaign_api_credentials_source").getControlValue()
				});
				return this.fetchCache(type, cacheKey, requestArgs);
			}
		});
	}));
	//#endregion
	//#region modules/forms/assets/js/editor/integrations/getresponse.js
	var require_getresponse = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var BaseIntegrationModule = require_base();
		module.exports = BaseIntegrationModule.extend({
			getName() {
				return "getresponse";
			},
			onElementChange(setting) {
				switch (setting) {
					case "getresponse_custom_api_key":
					case "getresponse_api_key_source":
						this.onApiUpdate();
						break;
					case "getresponse_list":
						this.onGetResonseListUpdate();
						break;
				}
			},
			onApiUpdate() {
				var self = this;
				var controlView = self.getEditorControlView("getresponse_api_key_source");
				var customControlView = self.getEditorControlView("getresponse_custom_api_key");
				if ("default" !== controlView.getControlValue() && "" === customControlView.getControlValue()) {
					self.updateOptions("getresponse_list", []);
					self.getEditorControlView("getresponse_list").setValue("");
					return;
				}
				self.addControlSpinner("getresponse_list");
				const cacheKey = this.getCacheKey({
					type: "lists",
					controls: [controlView.getControlValue(), customControlView.getControlValue()]
				});
				self.getCache("lists", "lists", cacheKey).done(function(data) {
					self.updateOptions("getresponse_list", data.lists);
				});
			},
			onGetResonseListUpdate() {
				this.updatGetResonseList();
			},
			updatGetResonseList() {
				var self = this;
				var controlView = self.getEditorControlView("getresponse_list");
				if (!controlView.getControlValue()) return;
				self.addControlSpinner("getresponse_fields_map");
				const cacheKey = this.getCacheKey({
					type: "fields",
					controls: [controlView.getControlValue()]
				});
				self.getCache("fields", "get_fields", cacheKey, { getresponse_list: controlView.getControlValue() }).done(function(data) {
					self.getEditorControlView("getresponse_fields_map").updateMap(data.fields);
				});
			},
			getCache(type, action, cacheKey, requestArgs) {
				if (_.has(this.cache[type], cacheKey)) {
					var data = {};
					data[type] = this.cache[type][cacheKey];
					return jQuery.Deferred().resolve(data);
				}
				requestArgs = _.extend({}, requestArgs, {
					service: "getresponse",
					getresponse_action: action,
					api_key: this.getEditorControlView("getresponse_api_key_source").getControlValue(),
					custom_api_key: this.getEditorControlView("getresponse_custom_api_key").getControlValue()
				});
				return this.fetchCache(type, cacheKey, requestArgs);
			},
			onSectionActive() {
				BaseIntegrationModule.prototype.onSectionActive.apply(this, arguments);
				this.updatGetResonseList();
			}
		});
	}));
	//#endregion
	//#region modules/forms/assets/js/editor/integrations/convertkit.js
	var require_convertkit = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = require_base().extend({
			getName() {
				return "convertkit";
			},
			onElementChange(setting) {
				switch (setting) {
					case "convertkit_api_key_source":
					case "convertkit_custom_api_key":
						this.onApiUpdate();
						break;
					case "convertkit_form":
						this.onListUpdate();
						break;
				}
			},
			onApiUpdate() {
				var self = this;
				var apiKeyControlView = self.getEditorControlView("convertkit_api_key_source");
				var customApikeyControlView = self.getEditorControlView("convertkit_custom_api_key");
				if ("default" !== apiKeyControlView.getControlValue() && "" === customApikeyControlView.getControlValue()) {
					self.updateOptions("convertkit_form", []);
					self.getEditorControlView("convertkit_form").setValue("");
					return;
				}
				self.addControlSpinner("convertkit_form");
				const cacheKey = this.getCacheKey({
					type: "data",
					controls: [apiKeyControlView.getControlValue(), customApikeyControlView.getControlValue()]
				});
				self.getConvertKitCache("data", "convertkit_get_forms", cacheKey).done(function(data) {
					self.updateOptions("convertkit_form", data.data.forms);
					self.updateOptions("convertkit_tags", data.data.tags);
				});
			},
			onListUpdate() {
				this.updateFieldsMapping();
			},
			updateFieldsMapping() {
				if (!this.getEditorControlView("convertkit_form").getControlValue()) return;
				var remoteFields = [{
					remote_label: (0, _wordpress_i18n.__)("Email", "elementor-pro"),
					remote_type: "email",
					remote_id: "email",
					remote_required: true
				}, {
					remote_label: (0, _wordpress_i18n.__)("First Name", "elementor-pro"),
					remote_type: "text",
					remote_id: "first_name",
					remote_required: false
				}];
				this.getEditorControlView("convertkit_fields_map").updateMap(remoteFields);
			},
			getConvertKitCache(type, action, cacheKey, requestArgs) {
				if (_.has(this.cache[type], cacheKey)) {
					var data = {};
					data[type] = this.cache[type][cacheKey];
					return jQuery.Deferred().resolve(data);
				}
				requestArgs = _.extend({}, requestArgs, {
					service: "convertkit",
					convertkit_action: action,
					api_key: this.getEditorControlView("convertkit_api_key_source").getControlValue(),
					custom_api_key: this.getEditorControlView("convertkit_custom_api_key").getControlValue()
				});
				return this.fetchCache(type, cacheKey, requestArgs);
			}
		});
	}));
	//#endregion
	//#region modules/forms/assets/js/editor/hints/email-deliverability.js
	var require_email_deliverability = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = elementorModules.editor.utils.Module.extend({
			eventName: "site_mailer_forms_email_notice",
			suffix: "",
			control: null,
			onSectionActive(sectionName) {
				if (!["section_email", "section_email_2"].includes(sectionName)) return;
				this.suffix = "section_email_2" === sectionName ? "_2" : "";
				this.control = null;
				if (!this.hasPromoControl()) return;
				if (elementor.config.user.dismissed_editor_notices.includes("site_mailer_forms_email_notice")) {
					this.getPromoControl().remove();
					return;
				}
				this.registerEvents();
			},
			registerEvents() {
				const dismissBtn = this.getPromoControl().$el.find(".elementor-control-notice-dismiss");
				const onDismissBtnClick = (event) => {
					dismissBtn.off("click", onDismissBtnClick);
					event.preventDefault();
					this.dismiss();
					this.getPromoControl().remove();
				};
				dismissBtn.on("click", onDismissBtnClick);
				const actionBtn = this.getPromoControl().$el.find(".e-btn-1");
				const onActionBtn = (event) => {
					actionBtn.off("click", onActionBtn);
					event.preventDefault();
					this.onAction(event);
					this.getPromoControl().remove();
				};
				actionBtn.on("click", onActionBtn);
			},
			getPromoControl() {
				if (!this.control) this.control = this.getEditorControlView("site_mailer_promo" + this.suffix);
				return this.control;
			},
			hasPromoControl() {
				return !!this.getPromoControl();
			},
			ajaxRequest(name, data) {
				elementorCommon.ajax.addRequest(name, { data });
			},
			dismiss() {
				this.ajaxRequest("dismissed_editor_notices", { dismissId: this.eventName });
				this.ensureNoPromoControlInSession();
			},
			ensureNoPromoControlInSession() {
				elementor.config.user.dismissed_editor_notices.push(this.eventName);
			},
			onAction(event) {
				let actionURL = null;
				let source = "sm-form-install";
				try {
					const settings = JSON.parse(event.target.closest("button").dataset.settings);
					actionURL = settings.action_url || null;
					source = settings.source || "sm-form-install";
				} catch (error) {}
				if (actionURL) window.open(actionURL, "_blank");
				this.ajaxRequest("elementor_site_mailer_campaign", { source });
				this.ensureNoPromoControlInSession();
			},
			onInit() {
				elementor.channels.editor.on("section:activated", (sectionName) => this.onSectionActive(sectionName));
			}
		});
	}));
	//#endregion
	//#region modules/forms/assets/js/editor/fields/time.js
	var require_time = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = elementorModules.editor.utils.Module.extend({
			renderField(inputField, item, i, settings) {
				var itemClasses = _.escape(item.css_classes);
				var required = "";
				var placeholder = "";
				if (item.required) required = "required";
				if (item.placeholder) placeholder = " placeholder=\"" + item.placeholder + "\"";
				if ("yes" === item.use_native_time) itemClasses += " elementor-use-native";
				return "<input size=\"1\" type=\"time\"" + placeholder + " class=\"elementor-field-textual elementor-time-field elementor-field elementor-size-" + settings.input_size + " " + itemClasses + "\" name=\"form_field_" + i + "\" id=\"form_field_" + i + "\" " + required + " >";
			},
			onInit() {
				elementor.hooks.addFilter("elementor_pro/forms/content_template/field/time", this.renderField, 10, 4);
			}
		});
	}));
	//#endregion
	//#region modules/forms/assets/js/editor/fields/date.js
	var require_date = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = elementorModules.editor.utils.Module.extend({
			renderField(inputField, item, i, settings) {
				var itemClasses = _.escape(item.css_classes);
				var required = "";
				var min = "";
				var max = "";
				var placeholder = "";
				if (item.required) required = "required";
				if (item.min_date) min = " min=\"" + item.min_date + "\"";
				if (item.max_date) max = " max=\"" + item.max_date + "\"";
				if (item.placeholder) placeholder = " placeholder=\"" + item.placeholder + "\"";
				if ("yes" === item.use_native_date) itemClasses += " elementor-use-native";
				return "<input size=\"1\"" + min + max + placeholder + " pattern=\"[0-9]{4}-[0-9]{2}-[0-9]{2}\" type=\"date\" class=\"elementor-field-textual elementor-date-field elementor-field elementor-size-" + settings.input_size + " " + itemClasses + "\" name=\"form_field_" + i + "\" id=\"form_field_" + i + "\" " + required + " >";
			},
			onInit() {
				elementor.hooks.addFilter("elementor_pro/forms/content_template/field/date", this.renderField, 10, 4);
			}
		});
	}));
	//#endregion
	//#region modules/forms/assets/js/editor/fields/acceptance.js
	var require_acceptance = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = elementorModules.editor.utils.Module.extend({
			renderField(inputField, item, i, settings) {
				var itemClasses = _.escape(item.css_classes);
				var required = "";
				var label = "";
				var checked = "";
				if (item.required) required = "required";
				if (item.acceptance_text) label = "<label for=\"form_field_" + i + "\">" + item.acceptance_text + "</label>";
				if (item.checked_by_default) checked = " checked=\"checked\"";
				return "<div class=\"elementor-field-subgroup\"><span class=\"elementor-field-option\"><input size=\"1\" type=\"checkbox\"" + checked + " class=\"elementor-acceptance-field elementor-field elementor-size-" + settings.input_size + " " + itemClasses + "\" name=\"form_field_" + i + "\" id=\"form_field_" + i + "\" " + required + " > " + label + "</span></div>";
			},
			onInit() {
				elementor.hooks.addFilter("elementor_pro/forms/content_template/field/acceptance", this.renderField, 10, 4);
			}
		});
	}));
	//#endregion
	//#region modules/forms/assets/js/editor/fields/upload.js
	var require_upload = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = elementorModules.editor.utils.Module.extend({
			renderField(inputField, item, i, settings) {
				var itemClasses = _.escape(item.css_classes);
				var required = "";
				var multiple = "";
				var fieldName = "form_field_";
				if (item.required) required = "required";
				if (item.allow_multiple_upload) {
					multiple = " multiple=\"multiple\"";
					fieldName += "[]";
				}
				return "<input size=\"1\"  type=\"file\" class=\"elementor-file-field elementor-field elementor-size-" + settings.input_size + " " + itemClasses + "\" name=\"" + fieldName + "\" id=\"form_field_" + i + "\" " + required + multiple + " >";
			},
			onInit() {
				elementor.hooks.addFilter("elementor_pro/forms/content_template/field/upload", this.renderField, 10, 4);
			}
		});
	}));
	//#endregion
	//#region modules/forms/assets/js/editor/fields/tel.js
	var require_tel = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = elementorModules.editor.utils.Module.extend({
			renderField(inputField, item, i, settings) {
				var itemClasses = _.escape(item.css_classes);
				var required = "";
				var placeholder = "";
				if (item.required) required = "required";
				if (item.placeholder) placeholder = " placeholder=\"" + item.placeholder + "\"";
				itemClasses = "elementor-field-textual " + itemClasses;
				return "<input size=\"1\" type=\"" + item.field_type + "\" class=\"elementor-field-textual elementor-field elementor-size-" + settings.input_size + " " + itemClasses + "\" name=\"form_field_" + i + "\" id=\"form_field_" + i + "\" " + required + " " + placeholder + " pattern=\"[0-9()-]\" >";
			},
			onInit() {
				elementor.hooks.addFilter("elementor_pro/forms/content_template/field/tel", this.renderField, 10, 4);
			}
		});
	}));
	//#endregion
	//#region modules/forms/assets/js/editor/fields-map-control.js
	var require_fields_map_control = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = elementor.modules.controls.Repeater.extend({
			onBeforeRender() {
				this.$el.hide();
			},
			updateMap(fields) {
				var self = this;
				var savedMapObject = {};
				self.collection.each(function(model) {
					savedMapObject[model.get("remote_id")] = model.get("local_id");
				});
				self.collection.reset();
				_.each(fields, function(field) {
					var model = {
						remote_id: field.remote_id,
						remote_label: field.remote_label,
						remote_type: field.remote_type ? field.remote_type : "",
						remote_required: field.remote_required ? field.remote_required : false,
						local_id: savedMapObject[field.remote_id] ? savedMapObject[field.remote_id] : ""
					};
					self.collection.add(model);
				});
				self.render();
			},
			onRender() {
				elementor.modules.controls.Base.prototype.onRender.apply(this, arguments);
				var self = this;
				self.children.each(function(view) {
					var localFieldsControl = view.children.last();
					var options = { "": "- " + (0, _wordpress_i18n.__)("None", "elementor-pro") + " -" };
					var label = view.model.get("remote_label");
					if (view.model.get("remote_required")) label += "<span class=\"elementor-required\">*</span>";
					_.each(self.elementSettingsModel.get("form_fields").models, function(model, index) {
						var remoteType = view.model.get("remote_type");
						if ("text" !== remoteType && remoteType !== model.get("field_type")) return;
						options[model.get("custom_id")] = model.get("field_label") || "Field #" + (index + 1);
					});
					localFieldsControl.model.set("label", label);
					localFieldsControl.model.set("options", options);
					localFieldsControl.render();
					view.$el.find(".elementor-repeater-row-tools").hide();
					view.$el.find(".elementor-repeater-row-controls").removeClass("elementor-repeater-row-controls").find(".elementor-control").css({ paddingBottom: 0 });
				});
				self.$el.find(".elementor-button-wrapper").remove();
				if (self.children.length) self.$el.show();
			}
		});
	}));
	//#endregion
	//#region modules/forms/assets/js/editor/fields-repeater-row.js
	var fields_repeater_row_default;
	var init_fields_repeater_row = __esmMin((() => {
		fields_repeater_row_default = class extends elementor.modules.controls.RepeaterRow {
			static {
				__name(this, "default");
			}
			toggleFieldTypeControl(show) {
				const fieldTypeModel = this.collection.findWhere({ name: "field_type" });
				this.children.findByModel(fieldTypeModel).$el.toggle(show);
			}
			toggleStepField(isStep) {
				this.$el.toggleClass("elementor-repeater-row--form-step", isStep);
			}
			toggleTools(show) {
				this.ui.removeButton.add(this.ui.duplicateButton).toggle(show);
			}
		};
	}));
	//#endregion
	//#region modules/forms/assets/js/editor/fields-repeater-control.js
	var require_fields_repeater_control = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		init_fields_repeater_row();
		module.exports = class extends elementor.modules.controls.Repeater {
			className() {
				let classes = super.className();
				classes += " elementor-control-type-repeater";
				return classes;
			}
			getChildView() {
				return fields_repeater_row_default;
			}
			initialize(...args) {
				super.initialize(...args);
				const formFields = this.container.settings.get("form_fields");
				this.listenTo(formFields, "change", (model) => this.onFormFieldChange(model)).listenTo(formFields, "remove", (model) => this.onFormFieldRemove(model));
			}
			getFirstChild() {
				return this.children.findByModel(this.collection.models[0]);
			}
			lockFirstStep() {
				const firstChild = this.getFirstChild();
				if ("step" !== firstChild.model.get("field_type")) return;
				if (1 < this.collection.where({ field_type: "step" }).length) {
					firstChild.toggleFieldTypeControl(false);
					firstChild.toggleTools(false);
				}
				firstChild.toggleSort(false);
			}
			onFormFieldChange(model) {
				const fieldType = model.changed.field_type;
				if (!fieldType || "step" !== fieldType && "step" !== model._previousAttributes.field_type) return;
				const isStep = "step" === fieldType;
				this.children.findByModel(model).toggleStepField(isStep);
				this.onStepFieldChanged(isStep);
			}
			onFormFieldRemove(model) {
				if ("step" === model.get("field_type")) this.onStepFieldChanged(false);
			}
			onStepFieldChanged(isStep) {
				if (isStep) {
					this.lockFirstStep();
					return;
				}
				const stepFields = this.collection.where({ field_type: "step" });
				if (stepFields.length > 1) return;
				const firstChild = this.getFirstChild();
				if (1 === stepFields.length) {
					firstChild.toggleTools(true);
					firstChild.toggleFieldTypeControl(true);
					return;
				}
				firstChild.toggleSort(true);
			}
			onAddChild(childView) {
				super.onAddChild(childView);
				if ("step" === childView.model.get("field_type")) {
					this.lockFirstStep();
					childView.toggleStepField(true);
				}
			}
		};
	}));
	//#endregion
	//#region modules/forms/assets/js/editor/hints/atomic-form-promotion.js
	var require_atomic_form_promotion = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = elementorModules.editor.utils.Module.extend({
			eventName: "atomic_form_v3_promotion",
			control: null,
			onSectionActive(sectionName) {
				if ("section_form_fields" !== sectionName) return;
				this.control = null;
				if (!this.hasPromoControl()) return;
				this.registerEvents();
			},
			registerEvents() {
				const dismissBtn = this.getPromoControl().$el.find(".e-btn-1");
				const onDismissBtnClick = (event) => {
					dismissBtn.off("click", onDismissBtnClick);
					event.preventDefault();
					this.dismiss();
				};
				dismissBtn.on("click", onDismissBtnClick);
				const actionBtn = this.getPromoControl().$el.find(".e-btn-2");
				const onActionBtn = (event) => {
					actionBtn.off("click", onActionBtn);
					event.preventDefault();
					this.onUseAtomicForm();
					this.dismiss();
				};
				actionBtn.on("click", onActionBtn);
			},
			getPromoControl() {
				if (!this.control) this.control = this.getEditorControlView(this.eventName);
				return this.control;
			},
			hasPromoControl() {
				return !!this.getPromoControl();
			},
			getDismissId() {
				return `form-${this.eventName}`;
			},
			dismiss() {
				const dismissId = this.getDismissId();
				elementorCommon.ajax.addRequest("dismissed_editor_notices", { data: { dismissId } });
				elementor.config.user.dismissed_editor_notices.push(dismissId);
				this.getPromoControl().$el.remove();
			},
			onUseAtomicForm() {
				$e.route("panel/elements/categories");
				setTimeout(() => {
					const $category = jQuery("#elementor-panel-category-atomic-form");
					if (!$category.length) return;
					if (!$category.hasClass("elementor-active")) $category.find(".elementor-panel-category-title").trigger("click");
					setTimeout(() => {
						const $scrollContainer = jQuery("#elementor-panel-content-wrapper");
						if ($scrollContainer.length) $scrollContainer.animate({ scrollTop: $category[0].offsetTop }, 300);
						const $widget = $category.find(".elementor-element").first();
						if ($widget.length) {
							$widget.css({
								transition: "background-color 0.3s",
								"background-color": "#F1F2F3"
							});
							setTimeout(() => {
								$widget.css("background-color", "");
							}, 3e3);
						}
					}, 350);
				}, 200);
			},
			onInit() {
				elementor.channels.editor.on("section:activated", (sectionName) => this.onSectionActive(sectionName));
			}
		});
	}));
	//#endregion
	//#region modules/forms/assets/js/editor/module.js
	var FormsModule = class extends elementorModules.editor.utils.Module {
		onElementorInit() {
			const ReplyToField = require_reply_to_field();
			const Recaptcha = require_recaptcha();
			const MailerLite = require_mailerlite();
			const Mailchimp = require_mailchimp();
			const Drip = require_drip();
			const ActiveCampaign = require_activecampaign();
			const GetResponse = require_getresponse();
			const ConvertKit = require_convertkit();
			const EmailDeliverability = require_email_deliverability();
			this.replyToField = new ReplyToField();
			this.mailchimp = new Mailchimp("form");
			this.recaptcha = new Recaptcha("form");
			this.drip = new Drip("form");
			this.activecampaign = new ActiveCampaign("form");
			this.getresponse = new GetResponse("form");
			this.convertkit = new ConvertKit("form");
			this.mailerlite = new MailerLite("form");
			const TimeField = require_time();
			const DateField = require_date();
			const AcceptanceField = require_acceptance();
			const UploadField = require_upload();
			const TelField = require_tel();
			this.Fields = {
				time: new TimeField("form"),
				date: new DateField("form"),
				tel: new TelField("form"),
				acceptance: new AcceptanceField("form"),
				upload: new UploadField("form")
			};
			elementor.addControlView("Fields_map", require_fields_map_control());
			elementor.addControlView("form-fields-repeater", require_fields_repeater_control());
			const AtomicFormPromotion = require_atomic_form_promotion();
			this.hints = {
				emailDeliverability: new EmailDeliverability(),
				atomicFormPromotion: new AtomicFormPromotion()
			};
		}
		onElementorInitComponents() {
			$e.components.register(new Component$3({ manager: this }));
		}
	};
	//#endregion
	//#region modules/screenshots/assets/js/editor/hooks/data/document/save/save/delete-screenshot.js
	var DeleteScreenshot = class extends $e.modules.hookData.After {
		getCommand() {
			return "document/save/save";
		}
		getConditions(args) {
			const { status } = args, config = elementor.documents.getCurrent().config;
			return "publish" === status && config.support_site_editor;
		}
		getId() {
			return "document/save/save::delete-screenshot";
		}
		apply() {
			const postId = elementor.documents.getCurrent().id;
			return elementorCommon.ajax.addRequest("screenshot_delete", {
				unique_id: `delete_screenshot_${postId}`,
				data: { post_id: postId }
			});
		}
	};
	//#endregion
	//#region modules/screenshots/assets/js/editor/hooks/data/index.js
	var data_exports = /* @__PURE__ */ __exportAll({ DeleteScreenshot: () => DeleteScreenshot });
	//#endregion
	//#region modules/screenshots/assets/js/editor/component.js
	var component_default = class extends $e.modules.ComponentBase {
		static {
			__name(this, "default");
		}
		getNamespace() {
			return "screenshots";
		}
		defaultHooks() {
			return this.importHooks(data_exports);
		}
	};
	//#endregion
	//#region modules/screenshots/assets/js/editor/module.js
	var Module$6 = class extends elementorModules.editor.utils.Module {
		static {
			__name(this, "Module");
		}
		onElementorInit() {
			$e.components.register(new component_default());
		}
	};
	//#endregion
	//#region core/app/modules/site-editor/assets/js/data/commands/templates.js
	init_defineProperty();
	var Templates = class extends $e.modules.CommandData {
		static getEndpointFormat() {
			return "site-editor/templates/{id}";
		}
	};
	_defineProperty(Templates, "signature", "site-editor/templates");
	//#endregion
	//#region core/app/modules/site-editor/assets/js/data/commands/conditions-config.js
	init_defineProperty();
	var ConditionsConfig = class extends $e.modules.CommandData {
		static getEndpointFormat() {
			return "site-editor/conditions-config/{id}";
		}
	};
	_defineProperty(ConditionsConfig, "signature", "site-editor/conditions-config");
	//#endregion
	//#region core/app/modules/site-editor/assets/js/data/commands/templates-conditions.js
	init_defineProperty();
	var TemplatesConditions = class extends $e.modules.CommandData {
		static getEndpointFormat() {
			return "site-editor/templates-conditions/{id}";
		}
	};
	_defineProperty(TemplatesConditions, "signature", "site-editor/templates-conditions");
	//#endregion
	//#region core/app/modules/site-editor/assets/js/data/commands/templates-conditions-conflicts.js
	init_defineProperty();
	var TemplatesConditionsConflicts = class TemplatesConditionsConflicts extends $e.modules.CommandData {
		static getEndpointFormat() {
			return `${TemplatesConditionsConflicts.signature}/{id}`;
		}
	};
	_defineProperty(TemplatesConditionsConflicts, "signature", "site-editor/templates-conditions-conflicts");
	//#endregion
	//#region core/app/modules/site-editor/assets/js/data/commands/index.js
	var commands_exports$1 = /* @__PURE__ */ __exportAll({
		ConditionsConfig: () => ConditionsConfig,
		Templates: () => Templates,
		TemplatesConditions: () => TemplatesConditions,
		TemplatesConditionsConflicts: () => TemplatesConditionsConflicts
	});
	//#endregion
	//#region core/app/modules/site-editor/assets/js/data/component.js
	init_defineProperty();
	var Component$2 = class extends $e.modules.ComponentBase {
		static {
			__name(this, "Component");
		}
		getNamespace() {
			return this.constructor.namespace;
		}
		defaultData() {
			return this.importCommands(commands_exports$1);
		}
	};
	_defineProperty(Component$2, "namespace", "site-editor");
	//#endregion
	//#region core/app/modules/site-editor/assets/js/editor.js
	var Module$5 = class extends elementorModules.editor.utils.Module {
		static {
			__name(this, "Module");
		}
		onElementorInit() {
			if (elementor.documents.getCurrent().config.support_site_editor) {
				$e.components.register(new Component$2());
				$e.data.deleteCache($e.components.get(Component$2.namespace), Templates.signature);
			}
		}
	};
	//#endregion
	//#region modules/video-playlist/assets/js/editor/hooks/ui/document/elements/settings/active-tab.js
	/**
	* Hook fired when template: 'single' page layout changed.
	*/
	var ActiveTab = class extends $e.modules.hookData.After {
		getCommand() {
			return "document/elements/settings";
		}
		getId() {
			return "active-tab--document/elements/settings";
		}
		getContainerType() {
			return "repeater";
		}
		getConditions(args) {
			return args.settings.inner_tab_content_1 || args.settings.inner_tab_content_2;
		}
		apply(args) {
			if (args.settings.inner_tab_content_1) args.container.view.model.get("editSettings").set("innerActiveIndex", 0);
			else if (args.settings.inner_tab_content_2) args.container.view.model.get("editSettings").set("innerActiveIndex", 1);
		}
	};
	//#endregion
	//#region modules/video-playlist/assets/js/editor/hooks/ui/index.js
	var ui_exports$1 = /* @__PURE__ */ __exportAll({ ActiveTab: () => ActiveTab });
	//#endregion
	//#region modules/video-playlist/assets/js/editor/component.js
	var VideoPlaylistComponent = class extends $e.modules.ComponentBase {
		getNamespace() {
			return "video-playlist";
		}
		defaultHooks() {
			return this.importHooks(ui_exports$1);
		}
	};
	//#endregion
	//#region modules/video-playlist/assets/js/editor/module.js
	var Module$4 = class extends elementorModules.editor.utils.Module {
		static {
			__name(this, "Module");
		}
		/**
		* Init
		*/
		onInit() {
			super.onInit();
			$e.components.register(new VideoPlaylistComponent());
		}
		onElementorLoaded() {
			elementor.channels.editor.on("elementorPlaylistWidget:setVideoData", (e) => {
				$e.run("document/elements/settings", {
					container: e.container,
					settings: {
						thumbnail: { url: e.currentItem.thumbnail ? e.currentItem.thumbnail.url : "" },
						title: e.currentItem.video_title ? e.currentItem.video_title : "",
						duration: e.currentItem.duration ? e.currentItem.duration : ""
					},
					options: { external: true }
				});
			});
		}
	};
	//#endregion
	//#region modules/woocommerce/assets/js/editor/hooks/data/save-show-modal.js
	var WoocommerceSaveShowModal;
	var init_save_show_modal = __esmMin((() => {
		WoocommerceSaveShowModal = class extends $e.modules.hookData.After {
			getCommand() {
				return "document/save/save";
			}
			getId() {
				return "elementor-pro-woocommerce-save-show-modal";
			}
			getConditions(args) {
				return args.status && -1 !== ["private", "publish"].indexOf(args.status);
			}
			apply() {
				elementorPro.modules.woocommerce.onUpdateDocument();
			}
		};
	}));
	//#endregion
	//#region modules/woocommerce/assets/js/editor/hooks/data/create-widget-activate-settings-modal.js
	var WoocommerceCreateWidgetActivateSettingsModal;
	var init_create_widget_activate_settings_modal = __esmMin((() => {
		WoocommerceCreateWidgetActivateSettingsModal = class extends $e.modules.hookData.After {
			getCommand() {
				return "document/elements/create";
			}
			getId() {
				return "elementor-pro-woocommerce-create-widget-activate-settings-modal";
			}
			getContainerType() {
				return "column";
			}
			getConditions(args, container) {
				return Object.prototype.hasOwnProperty.call(elementorPro.modules.woocommerce.pageSettingsWidgets, container.model.get("widgetType"));
			}
			apply(args, container) {
				elementorPro.modules.woocommerce.onCreateWidget(container);
			}
		};
	}));
	//#endregion
	//#region modules/woocommerce/assets/js/editor/hooks/data/delete-widget-deactivate-settings-modal.js
	var WoocommerceDeleteWidgetDeactivateSettingsModal;
	var init_delete_widget_deactivate_settings_modal = __esmMin((() => {
		WoocommerceDeleteWidgetDeactivateSettingsModal = class extends $e.modules.hookData.After {
			getCommand() {
				return "document/elements/delete";
			}
			getId() {
				return "elementor-pro-woocommerce-delete-widget-deactivate-settings-modal";
			}
			getContainerType() {
				return "widget";
			}
			getConditions(args, container) {
				return Object.prototype.hasOwnProperty.call(elementorPro.modules.woocommerce.pageSettingsWidgets, container.model.get("widgetType"));
			}
			apply(args, container) {
				elementorPro.modules.woocommerce.onDeleteWidget(container);
			}
		};
	}));
	//#endregion
	//#region modules/woocommerce/assets/js/editor/hooks/data/notices.js
	var WoocommerceNotices;
	var init_notices = __esmMin((() => {
		WoocommerceNotices = class extends $e.modules.hookData.After {
			getCommand() {
				return "document/elements/settings";
			}
			getId() {
				return "woocommerce-notices";
			}
			getConditions(args) {
				return "kit" === elementor.documents.getCurrent().config.type && Array.isArray(args.settings.woocommerce_notices_elements);
			}
			apply(args) {
				const { woocommerce } = elementorPro.modules;
				woocommerce.renderMockNotices(args.settings.woocommerce_notices_elements);
			}
		};
	}));
	//#endregion
	//#region modules/woocommerce/assets/js/editor/hooks/data/index.js
	var init_data = __esmMin((() => {
		init_save_show_modal();
		init_create_widget_activate_settings_modal();
		init_delete_widget_deactivate_settings_modal();
		init_notices();
	}));
	//#endregion
	//#region modules/woocommerce/assets/js/editor/hooks/index.js
	var hooks_exports$2 = /* @__PURE__ */ __exportAll({
		WoocommerceCreateWidgetActivateSettingsModal: () => WoocommerceCreateWidgetActivateSettingsModal,
		WoocommerceDeleteWidgetDeactivateSettingsModal: () => WoocommerceDeleteWidgetDeactivateSettingsModal,
		WoocommerceNotices: () => WoocommerceNotices,
		WoocommerceSaveShowModal: () => WoocommerceSaveShowModal
	});
	var init_hooks$1 = __esmMin((() => {
		init_data();
	}));
	//#endregion
	//#region modules/woocommerce/assets/js/editor/component.js
	var Component$1;
	var init_component$1 = __esmMin((() => {
		init_hooks$1();
		Component$1 = class extends $e.modules.ComponentBase {
			static {
				__name(this, "Component");
			}
			getNamespace() {
				return "woocommerce";
			}
			defaultHooks() {
				return this.importHooks(hooks_exports$2);
			}
		};
	}));
	//#endregion
	//#region modules/scroll-snap/assets/js/editor/hooks/ui/document/elements/settings/focus-preview.js
	var import_module$1 = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
		init_component$1();
		var WoocommerceModule = class extends elementorModules.editor.utils.Module {
			constructor(...args) {
				super(...args);
				this.pageSettingsWidgets = {
					"woocommerce-checkout-page": {
						headerMessage: (0, _wordpress_i18n.__)("Want to save this as your checkout page?", "elementor-pro"),
						message: (0, _wordpress_i18n.__)("Changes you make here will override your existing WooCommerce settings.", "elementor-pro"),
						confirmMessage: (0, _wordpress_i18n.__)("You've updated your checkout page.", "elementor-pro"),
						cancelMessage: (0, _wordpress_i18n.__)("<h3>Set up a checkout page</h3><br>Without a checkout page, visitors can't complete transactions on your site. To set one up, go to Site Settings.", "elementor-pro"),
						failedMessage: (0, _wordpress_i18n.__)("<h3>Sorry, something went wrong.</h3><br>To define a checkout page for your site, head over to Site Settings.", "elementor-pro"),
						optionName: "woocommerce_checkout_page_id",
						woocommercePageName: "checkout"
					},
					"woocommerce-cart": {
						headerMessage: (0, _wordpress_i18n.__)("Want to save this as your cart page?", "elementor-pro"),
						message: (0, _wordpress_i18n.__)("Changes you make here will override your existing WooCommerce settings.", "elementor-pro"),
						confirmMessage: (0, _wordpress_i18n.__)("You've updated your cart page.", "elementor-pro"),
						cancelMessage: (0, _wordpress_i18n.__)("<h3>Set up a cart page</h3><br>The cart page shows an order summary. To set one up, go to Site Settings.", "elementor-pro"),
						failedMessage: (0, _wordpress_i18n.__)("<h3>Sorry, something went wrong.</h3><br>To define a cart page for your site, head over to Site Settings.", "elementor-pro"),
						optionName: "woocommerce_cart_page_id",
						woocommercePageName: "cart"
					},
					"woocommerce-my-account": {
						headerMessage: (0, _wordpress_i18n.__)("Want to save this as your my account page?", "elementor-pro"),
						message: (0, _wordpress_i18n.__)("Changes you make here will override your existing WooCommerce settings.", "elementor-pro"),
						confirmMessage: (0, _wordpress_i18n.__)("You've updated your my account page.", "elementor-pro"),
						cancelMessage: (0, _wordpress_i18n.__)("<h3>Set up a My Account page</h3><br>Without it, customers can't update their billing details, review past orders, etc. To set up My Account, go to Site Settings.", "elementor-pro"),
						failedMessage: (0, _wordpress_i18n.__)("<h3>Sorry, something went wrong.</h3><br>To define a my account page for your site, head over to Site Settings.", "elementor-pro"),
						optionName: "woocommerce_myaccount_page_id",
						woocommercePageName: "myaccount"
					},
					"woocommerce-purchase-summary": {
						headerMessage: (0, _wordpress_i18n.__)("Want to save this as your purchase summary page?", "elementor-pro"),
						message: (0, _wordpress_i18n.__)("Changes you make here will override your WooCommerce default purchase summary page.", "elementor-pro"),
						confirmMessage: (0, _wordpress_i18n.__)("You've updated your summary page.", "elementor-pro"),
						cancelMessage: (0, _wordpress_i18n.__)("<h3>Set up a purchase summary page</h3><br>This page shows payment and order details. To set one up, go to Site Settings.", "elementor-pro"),
						failedMessage: (0, _wordpress_i18n.__)("<h3>Sorry, something went wrong.</h3><br>To define a purchase summary page for your site, head over to Site Settings.", "elementor-pro"),
						optionName: "elementor_woocommerce_purchase_summary_page_id",
						woocommercePageName: "summary"
					}
				};
				this.createdPageSettingsWidgets = [];
			}
			addWooCommerceClassToLoopWrapper(LoopGridHandler) {
				LoopGridHandler.$element.addClass("woocommerce");
			}
			onElementorInit() {
				elementor.hooks.addAction("editor/widgets/loop-grid/on-init", this.addWooCommerceClassToLoopWrapper);
			}
			onElementorFrontendInit() {
				elementorFrontend.elements.$body.on("added_to_cart", (e, data) => {
					if (this.didManuallyTriggerAddToCartEvent(data)) return false;
				});
				if ("loop-item" === elementor.documents.currentDocument.config.type && "product" === elementor.documents.currentDocument.config.settings.settings.source) elementor.on("document:loaded", () => {
					elementor.$previewContents[0].querySelector(".e-loop-item").classList.add("woocommerce");
				});
			}
			didManuallyTriggerAddToCartEvent(data = null) {
				return data == null ? void 0 : data.e_manually_triggered;
			}
			onElementorLoaded() {
				this.component = $e.components.register(new Component$1({ manager: this }));
				for (const section of [
					"section_woocommerce_notices",
					"woocommerce_message_notices",
					"woocommerce_info_notices",
					"woocommerce_error_notices"
				]) elementor.channels.editor.on("kit_settings:" + section + ":activated", () => {
					this.renderMockNotices(elementor.documents.getCurrent().container.settings.get("woocommerce_notices_elements"));
				});
				elementor.channels.editor.on("editor:widget:woocommerce-cart:section_additional_options:activated", () => {
					this.onTemplateIdChange("additional_template_select");
				});
				elementor.channels.editor.on("editor:widget:woocommerce-my-account:section_additional_options:activated", () => {
					this.onTemplateIdChange("customize_dashboard_select");
				});
			}
			renderMockNotices(noticeElements) {
				const noticesWrapper = elementor.$previewContents.find(".woocommerce-notices-wrapper");
				if (noticeElements.length <= 0) {
					noticesWrapper.remove();
					return;
				}
				let noticesClass = "";
				for (const notice of noticeElements) {
					const className = notice.replace("_", "-");
					noticesClass += "e-" + className + "-notice ";
				}
				elementorFrontend.elements.$body.addClass(noticesClass.trim());
				noticesWrapper.addClass("elementor-loading");
				jQuery(".elementor-select2").attr("disabled", "disabled");
				elementorPro.ajax.addRequest("woocommerce_mock_notices", {
					data: { notice_elements: noticeElements },
					success(data) {
						noticesWrapper.remove();
						elementor.$previewContents.find(".elementor-editor-preview").prepend(data);
						noticesWrapper.removeClass("elementor-loading");
						jQuery(".elementor-select2").removeAttr("disabled");
					}
				});
			}
			onTemplateIdChange(sectionActive) {
				const editor = elementor.getPanelView().getCurrentPageView();
				const templateID = editor.getOption("editedElementView").getEditModel().get("settings").get(sectionActive);
				const $editButton = editor.$el.find(".elementor-edit-template");
				if (!templateID) $editButton.addClass("e-control-tool-disabled").hide();
				else {
					const editUrl = ElementorConfig.home_url + "?p=" + templateID + "&elementor";
					$editButton.prop("href", editUrl).removeClass("e-control-tool-disabled").show();
				}
			}
			onCreateWidget(container) {
				const widgetType = container.model.get("widgetType");
				if (void 0 === this.createdPageSettingsWidgets[widgetType]) this.createdPageSettingsWidgets[widgetType] = 0;
				this.createdPageSettingsWidgets[widgetType]++;
			}
			onDeleteWidget(container) {
				const widgetType = container.model.get("widgetType");
				this.createdPageSettingsWidgets[widgetType]--;
				if (!this.createdPageSettingsWidgets[widgetType]) delete this.createdPageSettingsWidgets[widgetType];
			}
			onUpdateDocument() {
				elementorFrontend.elements.$body.trigger("added_to_cart", [{ e_manually_triggered: true }]);
				const saveWoocommercePageSettingKeys = Object.keys(this.createdPageSettingsWidgets);
				const lastWidgetCreated = saveWoocommercePageSettingKeys[saveWoocommercePageSettingKeys.length - 1];
				const postId = elementor.documents.getCurrent().id;
				if (1 !== saveWoocommercePageSettingKeys.length) return;
				const lastWidgetCreatedOptions = this.pageSettingsWidgets[lastWidgetCreated];
				if (postId === elementorPro.config.woocommerce.woocommercePages[lastWidgetCreatedOptions.woocommercePageName]) return;
				elementorCommon.dialogsManager.createWidget("confirm", {
					id: "elementor-woocommerce-save-pages",
					className: "e-global__confirm-add",
					headerMessage: lastWidgetCreatedOptions.headerMessage,
					message: lastWidgetCreatedOptions.message,
					position: {
						my: "center center",
						at: "center center"
					},
					strings: {
						confirm: (0, _wordpress_i18n.__)("Save", "elementor-pro"),
						cancel: (0, _wordpress_i18n.__)("No thanks", "elementor-pro")
					},
					onConfirm: () => this.onConfirmModal(lastWidgetCreatedOptions),
					onCancel: () => this.onCancelModal(lastWidgetCreatedOptions)
				}).show();
				this.createdPageSettingsWidgets = [];
			}
			onConfirmModal(lastWidgetCreatedOptions) {
				elementorPro.ajax.addRequest("woocommerce_update_page_option", {
					data: { option_name: lastWidgetCreatedOptions.optionName },
					success: () => {
						elementor.notifications.showToast({ message: lastWidgetCreatedOptions.confirmMessage });
					},
					error: () => this.showPagesSettingsToast(lastWidgetCreatedOptions.failedMessage)
				});
			}
			onCancelModal(lastWidgetCreatedOptions) {
				this.showPagesSettingsToast(lastWidgetCreatedOptions.cancelMessage);
			}
			showPagesSettingsToast(message) {
				const buttons = [];
				elementor.notifications.initToast();
				buttons.push({
					name: "take_me_there",
					text: (0, _wordpress_i18n.__)("Take me there", "elementor-pro"),
					callback: () => this.openSiteSettingsTab("settings-woocommerce")
				});
				elementor.notifications.showToast({
					message,
					buttons
				});
			}
			openSiteSettingsTab(tabId = "", sectionId = "") {
				if (elementorCommon.elements.$body.hasClass("elementor-editor-preview")) elementor.exitPreviewMode();
				if ("panel/global/menu" === elementor.documents.currentDocument.config.panel.default_route) {
					$e.run("panel/global/close");
					return;
				}
				$e.run("editor/documents/switch", {
					id: elementor.config.kit_id,
					mode: "autosave"
				}).then(() => {
					if (tabId) $e.route("panel/global/" + tabId);
				}).then(() => {
					if (sectionId) {
						const sectionElement = jQuery(".elementor-control-" + sectionId);
						if (sectionElement.length) sectionElement.trigger("click");
					}
				});
			}
		};
		module.exports = WoocommerceModule;
	})))());
	var FocusPreview = class extends $e.modules.hookData.After {
		getCommand() {
			return "document/elements/settings";
		}
		getId() {
			return "focus-preview--document/elements/settings";
		}
		getConditions(args) {
			var _args$settings$scroll;
			return ((_args$settings$scroll = args.settings.scroll_snap_padding) === null || _args$settings$scroll === void 0 ? void 0 : _args$settings$scroll.size) !== "";
		}
		apply() {
			setTimeout(() => {
				elementor.$preview[0].contentWindow.scrollBy(0, 0);
			}, 100);
		}
	};
	//#endregion
	//#region modules/scroll-snap/assets/js/editor/hooks/ui/index.js
	var ui_exports = /* @__PURE__ */ __exportAll({ FocusPreview: () => FocusPreview });
	//#endregion
	//#region modules/scroll-snap/assets/js/editor/component.js
	var ScrollSnapComponent = class extends $e.modules.ComponentBase {
		getNamespace() {
			return "scroll-snap";
		}
		defaultHooks() {
			return this.importHooks(ui_exports);
		}
	};
	//#endregion
	//#region modules/scroll-snap/assets/js/editor/module.js
	var Module$3 = class extends elementorModules.editor.utils.Module {
		static {
			__name(this, "Module");
		}
		/**
		* Init
		*/
		onInit() {
			super.onInit();
			$e.components.register(new ScrollSnapComponent());
		}
	};
	//#endregion
	//#region modules/payments/assets/js/editor/module.js
	var import_stripe = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
		var ElementEditorModule = require_element_editor_module();
		module.exports = ElementEditorModule.extend({
			__construct() {
				ElementEditorModule.prototype.__construct.apply(this, arguments);
			},
			getName() {
				return "stripe-button";
			},
			onInit() {
				elementor.channels.editor.on("editor:widget:stripe-button:section_stripe_account:activated", this.onSectionActive);
			},
			onSectionActive() {
				return elementorPro.ajax.addRequest("get_stripe_tax_rates", { success: (data) => {
					this.updateOptions("stripe_test_env_tax_rates_list", data.test_api_key);
					this.updateOptions("stripe_live_env_tax_rates_list", data.live_api_key);
				} }, true);
			}
		});
	})))());
	var StripeModule = class extends elementorModules.editor.utils.Module {
		onElementorInit() {
			this.stripeButton = new import_stripe.default("stripe-button");
		}
	};
	//#endregion
	//#region assets/dev/js/preview/utils/document-handle.js
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
		return __async$1(this, null, function* () {
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
	var __async$1, EDIT_HANDLE_CLASS_NAME, EDIT_MODE_CLASS_NAME, EDIT_CONTEXT, SAVE_HANDLE_CLASS_NAME, SAVE_CONTEXT;
	var init_document_handle = __esmMin((() => {
		__async$1 = /* @__PURE__ */ __name((__this, __arguments, generator) => {
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
		EDIT_HANDLE_CLASS_NAME = "elementor-document-handle";
		EDIT_MODE_CLASS_NAME = "elementor-edit-mode";
		EDIT_CONTEXT = "edit";
		SAVE_HANDLE_CLASS_NAME = "elementor-document-save-back-handle";
		SAVE_CONTEXT = "save";
	}));
	//#endregion
	//#region modules/loop-builder/assets/js/editor/hooks/ui/editor/documents/open/add-loop-builders-tab.js
	var LoopBuilderAddLibraryTab;
	var init_add_loop_builders_tab = __esmMin((() => {
		LoopBuilderAddLibraryTab = class extends $e.modules.hookUI.After {
			getCommand() {
				return "editor/documents/open";
			}
			getId() {
				return "elementor-loop-items-add-library-tab";
			}
			getConditions(args) {
				var _elementor$documents;
				var _document$config;
				const document = (_elementor$documents = elementor.documents) === null || _elementor$documents === void 0 ? void 0 : _elementor$documents.get(args.id);
				return "loop-item" === (document === null || document === void 0 || (_document$config = document.config) === null || _document$config === void 0 ? void 0 : _document$config.type);
			}
			apply() {
				$e.components.get("library").addTab("templates/loop-items", {
					title: (0, _wordpress_i18n.__)("Loop", "elementor-pro"),
					filter: {
						source: "remote",
						type: "lb",
						subtype: elementor.config.document.settings.settings.source
					}
				}, 0);
				$e.components.get("library").removeTab("templates/blocks");
				$e.components.get("library").removeTab("templates/pages");
			}
		};
	}));
	//#endregion
	//#region modules/loop-builder/assets/js/editor/hooks/ui/editor/documents/close/remove-loop-builders-tab.js
	var LoopBuilderRemoveLibraryTab;
	var init_remove_loop_builders_tab = __esmMin((() => {
		LoopBuilderRemoveLibraryTab = class extends $e.modules.hookUI.After {
			getCommand() {
				return "editor/documents/unload";
			}
			getId() {
				return "elementor-loop-items-remove-library-tab";
			}
			getConditions(args) {
				var _document$config;
				const { document } = args;
				return "loop-item" === (document === null || document === void 0 || (_document$config = document.config) === null || _document$config === void 0 ? void 0 : _document$config.type);
			}
			apply() {
				$e.components.get("library").removeTab("templates/loop-items");
				$e.components.get("library").addTab("templates/blocks");
				$e.components.get("library").addTab("templates/pages");
			}
		};
	}));
	//#endregion
	//#region modules/loop-builder/assets/js/editor/hooks/index.js
	var hooks_exports$1 = /* @__PURE__ */ __exportAll({
		LoopBuilderAddLibraryTab: () => LoopBuilderAddLibraryTab,
		LoopBuilderRemoveLibraryTab: () => LoopBuilderRemoveLibraryTab
	});
	var init_hooks = __esmMin((() => {
		init_add_loop_builders_tab();
		init_remove_loop_builders_tab();
	}));
	//#endregion
	//#region modules/loop-builder/assets/js/editor/component.js
	var LoopBuilderComponent;
	var init_component = __esmMin((() => {
		init_hooks();
		LoopBuilderComponent = class extends $e.modules.ComponentBase {
			getNamespace() {
				return "document/loop";
			}
			defaultHooks() {
				return this.importHooks(hooks_exports$1);
			}
		};
	}));
	//#endregion
	//#region modules/loop-builder/assets/js/editor/behavior.js
	var LoopBuilderBehavior;
	var init_behavior = __esmMin((() => {
		LoopBuilderBehavior = class extends Marionette.Behavior {
			ui() {
				return {
					postSourceControlSelector: "[data-setting=\"post_taxonomy_query_post_type\"]",
					productSourceControlSelector: "[data-setting=\"product_taxonomy_query_post_type\"]"
				};
			}
			events() {
				return {
					"change @ui.postSourceControlSelector": "onApplySourceChange",
					"change @ui.productSourceControlSelector": "onApplySourceChange"
				};
			}
			onApplySourceChange(event) {
				var _event$target;
				const sourceType = ((_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.value) || this.getDefaultSourceType();
				this.getOption("updateTaxonomyTabsIdControls")(sourceType, true);
			}
			onRender() {
				const postType = this.getOption("getSourceControlValue")();
				this.getOption("updateTaxonomyTabsIdControls")(postType);
			}
			getDefaultSourceType() {
				const skinType = this.getOption("getSkinType")();
				return this.getOption("getDefaultSourceType")(skinType);
			}
		};
	}));
	//#endregion
	//#region assets/dev/js/editor/tiers.js
	var import_module$2 = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
		init_document_handle();
		init_component();
		init_behavior();
		init_defineProperty();
		init_asyncToGenerator();
		var loopBuilderModule = class extends elementorModules.editor.utils.Module {
			constructor(..._args) {
				super(..._args);
				_defineProperty(this, "taxonomyQueryOptions", ["post_taxonomy", "product_taxonomy"]);
				_defineProperty(this, "registerControlBehavior", (behaviors = {}, view) => {
					if (!["post_taxonomy_query_post_type", "product_taxonomy_query_post_type"].includes(view.options.model.get("name"))) return behaviors;
					behaviors.loopBuilder = {
						behaviorClass: LoopBuilderBehavior,
						getSourceControlValue: this.getSourceControlValue,
						updateTaxonomyTabsIdControls: this.updateTaxonomyTabsIdControls
					};
					return behaviors;
				});
				_defineProperty(this, "onDocumentLoaded", (document) => {
					if (!document.config.theme_builder) return;
					elementor.channels.editor.on("elementorLoopBuilder:ApplySourceChange", this.onApplySourceChange);
				});
				_defineProperty(this, "onDocumentUnloaded", (document) => {
					if (!document.config.theme_builder) return;
					elementor.channels.editor.off("elementorLoopBuilder:ApplySourceChange", this.onApplySourceChange);
				});
				_defineProperty(this, "onApplySourceChange", () => {
					this.saveAndRefresh().then(() => {
						location.reload();
					});
				});
				_defineProperty(this, "getCtaStyles", () => {
					const ctaStyle = document.createElement("link");
					ctaStyle.setAttribute("rel", "stylesheet");
					ctaStyle.setAttribute("href", `${elementorAppProConfig.baseUrl}/assets/css/modules/loop-grid-cta.min.css`);
					return ctaStyle;
				});
				_defineProperty(this, "getCtaContent", (widgetName) => {
					const ctaContent = document.createElement("div");
					ctaContent.classList.add("e-loop-empty-view__container", "elementor-grid", widgetName);
					ctaContent.innerHTML = Marionette.Renderer.render("#tmpl-" + widgetName + "-cta");
					return ctaContent;
				});
				_defineProperty(this, "getSourceControlValue", () => {
					const skinType = this.getSkinType();
					const controlView = this.getEditorControlView(`${skinType}_query_post_type`);
					if (!controlView) return skinType.includes("product") ? "product_cat" : "category";
					return controlView.getControlValue();
				});
				_defineProperty(this, "getSkinType", () => {
					return this.getEditorControlView("section_layout").options.container.settings.get("_skin");
				});
				_defineProperty(this, "getTemplateType", (templateKey) => {
					return templateKey.split("_")[0];
				});
				_defineProperty(this, "onApplySkinChange", () => {
					const skinType = this.getSkinType();
					if (!this.taxonomyQueryOptions.includes(skinType)) return;
					const postType = this.getDefaultSourceType(skinType);
					this.updateTaxonomyTabsIdControls(postType, true);
				});
				_defineProperty(this, "getDefaultSourceType", (skinType) => {
					return {
						post: "post",
						product: "product",
						post_taxonomy: "category",
						product_taxonomy: "product_cat"
					}[skinType];
				});
				_defineProperty(this, "updateTaxonomyTabsIdControls", (postType, shouldResetControlValues = false) => {
					const skinType = this.getSkinType();
					if (!this.taxonomyQueryOptions.includes(skinType)) return;
					const querySectionView = elementorPro.modules.loopBuilder.getEditorControlView("section_query");
					[querySectionView.model.collection.findWhere({ name: `${skinType}_posts_ids` }), querySectionView.model.collection.findWhere({ name: `${skinType}_exclude_ids` })].forEach((control) => {
						var _elementor$getPanelVi;
						const controlView = (_elementor$getPanelVi = elementor.getPanelView()) === null || _elementor$getPanelVi === void 0 || (_elementor$getPanelVi = _elementor$getPanelVi.getCurrentPageView()) === null || _elementor$getPanelVi === void 0 || (_elementor$getPanelVi = _elementor$getPanelVi.children) === null || _elementor$getPanelVi === void 0 ? void 0 : _elementor$getPanelVi.findByModel(control);
						this.updateControlQuery({
							control,
							controlView,
							postType,
							shouldResetControlValues
						});
					});
				});
				_defineProperty(this, "updateControlQuery", ({ control, controlView, postType, shouldResetControlValues }) => {
					control.set({ autocomplete: {
						object: "tax",
						query: { taxonomy: postType }
					} });
					if (controlView && shouldResetControlValues) {
						controlView.setValue([]);
						controlView.applySavedValue();
					}
				});
			}
			onElementorFrontendInit() {
				elementor.hooks.addFilter("controls/base/behaviors", this.registerControlBehavior);
				elementorFrontend.elements.$body.on("click", ".e-loop-empty-view__box-cta", () => {
					this.createTemplate();
				});
				this.createDocumentSaveHandles();
				elementor.on("document:loaded", this.createDocumentSaveHandles.bind(this));
			}
			createTemplate() {
				setTimeout(() => {
					elementor.getPanelView().getCurrentPageView().activateSection("section_layout")._renderChildren();
					this.getEditorControlView("template_id").createTemplate();
				});
			}
			createDocumentSaveHandles() {
				var _elementorFrontend$co;
				Object.entries((_elementorFrontend$co = elementorFrontend.config) === null || _elementorFrontend$co === void 0 || (_elementorFrontend$co = _elementorFrontend$co.elements) === null || _elementorFrontend$co === void 0 ? void 0 : _elementorFrontend$co.data).forEach(([cid, element]) => {
					const elementData = elementor.getElementData(element);
					if (!(elementData === null || elementData === void 0 ? void 0 : elementData.is_loop)) return;
					const templateId = element.attributes.template_id;
					if (!templateId) return;
					const widgetSelector = `.elementor-element[data-model-cid="${cid}"]`;
					const editHandleSelector = `[data-elementor-type="loop-item"].elementor-${templateId}`;
					const editHandleElement = elementorFrontend.elements.$body.find(`${widgetSelector} ${editHandleSelector}`).first()[0];
					if (editHandleElement) addDocumentHandle({
						element: editHandleElement,
						id: 0,
						title: "& Back"
					}, SAVE_CONTEXT, null, ".elementor-" + elementor.config.initial_document.id);
				});
			}
			onElementorLoaded() {
				elementor.on("document:loaded", this.onDocumentLoaded.bind(this));
				elementor.on("document:unload", this.onDocumentUnloaded.bind(this));
				this.component = $e.components.register(new LoopBuilderComponent({ manager: this }));
			}
			saveAndRefresh() {
				return _asyncToGenerator(function* () {
					yield $e.run("document/save/update", { force: true });
				})();
			}
		};
		module.exports = loopBuilderModule;
	})))());
	var TIERS_PRIORITY = Object.freeze([
		"free",
		"essential",
		"essential-oct2023",
		"advanced",
		"expert",
		"agency"
	]);
	var isTierAtLeast = (currentTier, expectedTier) => {
		const currentTierIndex = TIERS_PRIORITY.indexOf(currentTier);
		const expectedTierIndex = TIERS_PRIORITY.indexOf(expectedTier);
		if (-1 === currentTierIndex || -1 === expectedTierIndex) return false;
		return currentTierIndex >= expectedTierIndex;
	};
	//#endregion
	//#region modules/notes/assets/js/notes-context-menu.js
	var notesContextMenu = class {
		constructor() {
			[
				"widget",
				"section",
				"column",
				"container"
			].forEach((type) => {
				elementor.hooks.addFilter(`elements/${type}/contextMenuGroups`, this.notesContextMenuAddGroup);
			});
		}
		/**
		* Enable the 'Notes' context menu item
		*
		* @since 3.8.0
		*
		* @param {Array} groups
		* @return {Array} The updated groups.
		*/
		notesContextMenuAddGroup(groups) {
			const notesGroup = _.findWhere(groups, { name: "notes" });
			const notesGroupIndex = groups.indexOf(notesGroup);
			const notesActionItem = {
				name: "open_notes",
				title: (0, _wordpress_i18n.__)("Notes", "elementor-pro"),
				shortcut: "в‡§+C",
				isEnabled: () => true,
				callback: () => $e.route("notes")
			};
			if (elementorPro.config.should_show_promotion) {
				notesActionItem.shortcut = jQuery("<i class=\"eicon-advanced\"></i><a class=\"elementor-context-menu-list__item__shortcut--link-fullwidth\" href=\"https://go.elementor.com/go-pro-advanced-notes-context-menu/\" target=\"_blank\" rel=\"noopener noreferrer\"></a>");
				notesActionItem.isEnabled = () => false;
				delete notesActionItem.callback;
			}
			if (-1 === notesGroupIndex) {
				const deleteGroup = _.findWhere(groups, { name: "delete" });
				const deleteGroupIndex = groups.indexOf(deleteGroup);
				const newGroupPosition = -1 !== deleteGroupIndex ? deleteGroupIndex : groups.length;
				groups.splice(newGroupPosition, 0, {
					name: "notes",
					actions: [notesActionItem]
				});
				return groups;
			}
			const openNotesAction = _.findWhere(notesGroup.actions, { name: "open_notes" });
			const openNotesActionIndex = notesGroup.actions.indexOf(openNotesAction);
			groups[notesGroupIndex].actions[openNotesActionIndex] = notesActionItem;
			return groups;
		}
	};
	//#endregion
	//#region modules/page-transitions/assets/js/editor/commands/animate.js
	var Animate = class extends $e.modules.CommandBase {
		/**
		* Animate the Page Transition element.
		*
		* @return {void}
		*/
		apply() {
			const pageTransition = elementor.$previewContents[0].querySelector("e-page-transition");
			if (!pageTransition) return;
			pageTransition.animate();
		}
	};
	//#endregion
	//#region modules/page-transitions/assets/js/editor/commands/index.js
	var commands_exports = /* @__PURE__ */ __exportAll({ Animate: () => Animate });
	//#endregion
	//#region modules/page-transitions/assets/js/editor/hooks/data/animate-page-transition.js
	init_defineProperty();
	/**
	* Data hook that animates the Page Transition component when entrance / exit animations are changed.
	*/
	var AnimatePageTransition = class extends $e.modules.hookData.After {
		constructor(..._args) {
			super(..._args);
			_defineProperty(this, "prefix", "settings_page_transitions_");
			_defineProperty(this, "settings", ["entrance_animation", "exit_animation"]);
		}
		getCommand() {
			return "document/elements/settings";
		}
		getId() {
			return "animate-page-transitions--document/elements/settings";
		}
		getContainerType() {
			return "document";
		}
		getConditions(args) {
			return Object.keys(args.settings).some((key) => {
				key = key.replace(this.prefix, "");
				return this.settings.includes(key);
			});
		}
		apply() {
			$e.run("page-transitions/animate");
		}
	};
	//#endregion
	//#region modules/page-transitions/assets/js/editor/hooks/utils.js
	var prefix = "settings_page_transitions_";
	/**
	* Get only the Page Transitions controls' values from a Container.
	*
	* @param {Object} container
	*
	* @return {Object} - Controls' values.
	*/
	function getPageTransitionSettings(container) {
		const controls = Object.entries(container.settings.getActiveControls()).filter(([key, control]) => {
			return key.startsWith(prefix) && !control.selectors;
		});
		const settings = {};
		controls.forEach(([control]) => {
			settings[control] = container.settings.get(control);
		});
		return settings;
	}
	/**
	* Live render the Page Transition element, based on settings from the user.
	*
	* @param {Object} container - The container to get the settings from.
	*
	* @return {void}
	*/
	function renderPageTransition(container) {
		let pageTransition = elementor.$previewContents[0].querySelector("e-page-transition");
		const hasEntranceAnimation = !!container.settings.get(`${prefix}entrance_animation`);
		const hasPreloader = !!container.settings.get(`${prefix}preloader_type`);
		const shouldRender = hasEntranceAnimation || hasPreloader;
		if (!pageTransition) {
			pageTransition = document.createElement("e-page-transition");
			pageTransition.classList.add("e-page-transition--preview");
			elementor.$previewContents[0].body.append(pageTransition);
		}
		pageTransition.toggleAttribute("disabled", !shouldRender);
		const settings = getPageTransitionSettings(container);
		Object.entries(settings).forEach(([key, value]) => {
			key = key.replace(prefix, "");
			key = key.replaceAll("_", "-");
			if (!value) {
				pageTransition.removeAttribute(key);
				return;
			}
			if ("string" === typeof value) {
				pageTransition.setAttribute(key, value);
				return;
			}
			Object.entries(value).forEach(([subKey, subValue]) => {
				let newKey = key;
				if (subKey !== "value") newKey = `${key}-${subKey}`;
				pageTransition.setAttribute(newKey, subValue);
			});
		});
	}
	//#endregion
	//#region modules/page-transitions/assets/js/editor/hooks/data/re-render-page-transition.js
	init_defineProperty();
	/**
	* Data hook that passes the new settings from the panel as attributes to the Page Transition component, in order to re-render it.
	*/
	var ReRenderPageTransition = class extends $e.modules.hookData.After {
		constructor(..._args) {
			super(..._args);
			_defineProperty(this, "prefix", "settings_page_transitions_");
			_defineProperty(this, "settings", [
				"entrance_animation",
				"preloader_type",
				"preloader_icon",
				"preloader_image",
				"preloader_animation_type"
			]);
		}
		getCommand() {
			return "document/elements/settings";
		}
		getId() {
			return "re-render-page-transitions--document/elements/settings";
		}
		getContainerType() {
			return "document";
		}
		getConditions(args) {
			return Object.keys(args.settings).some((key) => {
				key = key.replace(this.prefix, "");
				return this.settings.includes(key);
			});
		}
		apply(args) {
			renderPageTransition(args.container);
		}
	};
	//#endregion
	//#region modules/page-transitions/assets/js/editor/hooks/index.js
	var hooks_exports = /* @__PURE__ */ __exportAll({
		AnimatePageTransition: () => AnimatePageTransition,
		ReRenderPageTransition: () => ReRenderPageTransition
	});
	//#endregion
	//#region modules/page-transitions/assets/js/editor/hooks/routes/page-transition-preview.js
	/**
	* A route hook that listens to route changes in the panel and change the preview mode for
	* the Page Transitions feature when navigating to the `Site Settings -> Page Transitions` tab.
	*
	* TODO: Convert to `$e.modules.hookRoute.After` when available.
	*/
	var PageTransitionPreview = class {
		/**
		* Run the hook.
		*
		* @param {Object} component
		* @param {string} route
		*
		* @return {void}
		*/
		run(component, route) {
			if ("panel/global/settings-page-transitions" === route) {
				renderPageTransition(elementor.documents.getCurrent().container);
				this.togglePageTransitionPreview(true);
			} else this.togglePageTransitionPreview(false);
		}
		/**
		* Toggle the Page Transition state to show or hide preview.
		*
		* @param {boolean} on
		*
		* @return {void}
		*/
		togglePageTransitionPreview(on = true) {
			const className = "e-page-transition--preview";
			const pageTransition = elementor.$previewContents[0].body.querySelector("e-page-transition");
			if (!pageTransition) return;
			pageTransition.classList.toggle(className, on);
		}
	};
	//#endregion
	//#region modules/page-transitions/assets/js/editor/component.js
	var Component = class extends $e.modules.ComponentBase {
		/**
		* Initialize the component.
		*
		* @return {void}
		*/
		constructor() {
			super();
			this.routesHooks = {};
			this.initRouteHooks();
		}
		/**
		* Add route hooks & listen to route changes.
		*
		* @return {void}
		*/
		initRouteHooks() {
			this.routesHooks.pageTransitionPreview = new PageTransitionPreview();
			$e.routes.on("run:after", (component, route) => {
				this.routesHooks.pageTransitionPreview.run(component, route);
			});
		}
		/**
		* Get the component namespace.
		*
		* @return {string} - Component namespace.
		*/
		getNamespace() {
			return "page-transitions";
		}
		/**
		* Get the component hooks.
		*
		* @return {Object} - Component hooks.
		*/
		defaultHooks() {
			return this.importHooks(hooks_exports);
		}
		/**
		* Get the component commands.
		*
		* @return {Object} - Component commands.
		*/
		defaultCommands() {
			return this.importCommands(commands_exports);
		}
	};
	//#endregion
	//#region modules/page-transitions/assets/js/editor/module.js
	var module_default = class extends elementorModules.editor.utils.Module {
		static {
			__name(this, "default");
		}
		/**
		* Register the component & bind events on init.
		*
		* @return {void}
		*/
		onInit() {
			$e.components.register(new Component());
			this.bindEvents();
		}
		/**
		* Listen to Page Transition event.
		*
		* @return {void}
		*/
		bindEvents() {
			if (window.elementor) {
				this.onAnimateButtonClick();
				return;
			}
			jQuery(window).on("elementor:init", () => this.onAnimateButtonClick());
		}
		/**
		* Listen to `animate` button click event and animate the Page Transition.
		*
		* @return {void}
		*/
		onAnimateButtonClick() {
			elementor.channels.editor.on("elementorPageTransitions:animate", () => {
				$e.run("page-transitions/animate");
			});
		}
	}, __vitePreload;
	var init_preload_helper = __esmMin((() => {
		__vitePreload = function preload(baseModule, deps, importerUrl) {
			let promise = Promise.resolve();
			function handlePreloadError(err) {
				const e = new Event("vite:preloadError", { cancelable: true });
				e.payload = err;
				window.dispatchEvent(e);
				if (!e.defaultPrevented) throw err;
			}
			return promise.then((res) => {
				for (const item of res || []) {
					if (item.status !== "rejected") continue;
					handlePreloadError(item.reason);
				}
				return baseModule().catch(handlePreloadError);
			});
		};
	}));
	//#endregion
	//#region modules/query-control/assets/js/editor/query-control.js
	var require_query_control = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = elementor.modules.controls.Select2.extend({
			cache: null,
			isTitlesReceived: false,
			getSelect2Placeholder() {
				return {
					id: "",
					text: (0, _wordpress_i18n.__)("All", "elementor-pro")
				};
			},
			getControlValueByName(controlName) {
				const name = this.model.get("group_prefix") + controlName;
				return this.elementSettingsModel.attributes[name];
			},
			getQueryDataDeprecated() {
				return {
					filter_type: this.model.get("filter_type"),
					object_type: this.model.get("object_type"),
					include_type: this.model.get("include_type"),
					query: this.model.get("query")
				};
			},
			getQueryData() {
				const autocomplete = elementorCommon.helpers.cloneObject(this.model.get("autocomplete"));
				if (_.isEmpty(autocomplete.query)) autocomplete.query = {};
				if ("cpt_tax" === autocomplete.object) {
					autocomplete.object = "tax";
					if (_.isEmpty(autocomplete.query) || _.isEmpty(autocomplete.query.post_type)) autocomplete.query.post_type = this.getControlValueByName("post_type");
				}
				return { autocomplete };
			},
			getSelect2DefaultOptions() {
				const self = this;
				return jQuery.extend(elementor.modules.controls.Select2.prototype.getSelect2DefaultOptions.apply(this, arguments), {
					ajax: {
						transport(params, success, failure) {
							const bcFormat = !_.isEmpty(self.model.get("filter_type"));
							let data = {};
							let action = "panel_posts_control_filter_autocomplete";
							if (bcFormat) {
								data = self.getQueryDataDeprecated();
								action = "panel_posts_control_filter_autocomplete_deprecated";
							} else data = self.getQueryData();
							data.q = params.data.q;
							return elementorPro.ajax.addRequest(action, {
								data,
								success,
								error: failure
							});
						},
						data(params) {
							return {
								q: params.term,
								page: params.page
							};
						},
						cache: true
					},
					escapeMarkup(markup) {
						return markup;
					},
					minimumInputLength: 1
				});
			},
			getValueTitles() {
				const self = this;
				const data = {};
				const bcFormat = !_.isEmpty(this.model.get("filter_type"));
				let ids = this.getControlValue();
				let action = "query_control_value_titles";
				let filterTypeName = "autocomplete";
				let filterType = {};
				if (bcFormat) {
					filterTypeName = "filter_type";
					filterType = this.model.get(filterTypeName).object;
					data.filter_type = filterType;
					data.object_type = self.model.get("object_type");
					data.include_type = self.model.get("include_type");
					data.unique_id = "" + self.cid + filterType;
					action = "query_control_value_titles_deprecated";
				} else {
					filterType = this.model.get(filterTypeName).object;
					data.get_titles = self.getQueryData().autocomplete;
					data.unique_id = "" + self.cid + filterType;
				}
				if (!ids || !filterType) return;
				if (!_.isArray(ids)) ids = [ids];
				elementorCommon.ajax.loadObjects({
					action,
					ids,
					data,
					before() {
						self.addControlSpinner();
					},
					success(ajaxData) {
						self.isTitlesReceived = true;
						self.model.set("options", ajaxData);
						self.render();
					}
				});
			},
			addControlSpinner() {
				this.ui.select.prop("disabled", true);
				this.$el.find(".elementor-control-title").after("<span class=\"elementor-control-spinner\">&nbsp;<i class=\"eicon-spinner eicon-animation-spin\"></i>&nbsp;</span>");
			},
			onReady() {
				if (!this.isTitlesReceived) this.getValueTitles();
			}
		});
	}));
	//#endregion
	//#region modules/query-control/assets/js/editor/template-query-control.js
	var template_query_control_exports = /* @__PURE__ */ __exportAll({ default: () => TemplateQueryControl });
	var import_query_control, __defProp, __defProps, __getOwnPropDescs, __getOwnPropSymbols, __hasOwnProp, __propIsEnum, __defNormalProp, __spreadValues, __spreadProps, __async, TemplateQueryControl;
	var init_template_query_control = __esmMin((() => {
		import_query_control = /* @__PURE__ */ __toESM(require_query_control());
		__defProp = Object.defineProperty;
		__defProps = Object.defineProperties;
		__getOwnPropDescs = Object.getOwnPropertyDescriptors;
		__getOwnPropSymbols = Object.getOwnPropertySymbols;
		__hasOwnProp = Object.prototype.hasOwnProperty;
		__propIsEnum = Object.prototype.propertyIsEnumerable;
		__defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
			enumerable: true,
			configurable: true,
			writable: true,
			value
		}) : obj[key] = value;
		__spreadValues = (a, b) => {
			for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
			if (__getOwnPropSymbols) {
				for (var prop of __getOwnPropSymbols(b)) if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
			}
			return a;
		};
		__spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
		__async = (__this, __arguments, generator) => {
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
		TemplateQueryControl = class extends import_query_control.default {
			ui() {
				return __spreadProps(__spreadValues({}, super.ui()), {
					newButton: "button[data-action=\"new\"]",
					editButton: "button[data-action=\"edit\"]"
				});
			}
			events() {
				return __spreadProps(__spreadValues({}, super.events()), {
					"click @ui.newButton": "onNewButtonClicked",
					"click @ui.editButton": "onEditButtonClicked"
				});
			}
			onRender(...args) {
				super.onRender(...args);
				this.toggleButtons(this.getControlValue());
			}
			onBaseInputChange(...args) {
				super.onBaseInputChange(...args);
				this.toggleButtons(this.getInputValue(args[0].currentTarget));
			}
			toggleButtons(templateID) {
				if (!templateID) this.showNewTemplateButton();
				else this.showEditTemplateButton();
			}
			showNewTemplateButton() {
				var _a;
				var _b;
				var _c;
				var _d;
				const newButton = (_b = (_a = this.ui) == null ? void 0 : _a.newButton) == null ? void 0 : _b.get(0);
				const editButton = (_d = (_c = this.ui) == null ? void 0 : _c.editButton) == null ? void 0 : _d.get(0);
				if (newButton) newButton.style.display = "block";
				if (editButton) editButton.style.display = "none";
			}
			showEditTemplateButton() {
				const newButton = this.ui.newButton.get(0);
				const editButton = this.ui.editButton.get(0);
				if (newButton) newButton.style.display = "none";
				if (editButton) editButton.style.display = "block";
			}
			onNewButtonClicked() {
				return __async(this, null, function* () {
					this.createTemplate();
				});
			}
			/**
			* This function is used to create a new template via the REST API.
			* We first show a confirm dialog so the user knows that the current document will be saved while creating
			* and editing a new template. If the user chooses to cancel the process will not continue,
			* and if confirmed the new template is created and the Editor switched to this newly created template.
			*
			* @since 3.8.0
			*
			* @return {void}
			*/
			createTemplate() {
				if (!this.confirmSaveBeforeTemplateCreateDialog) this.confirmSaveBeforeTemplateCreateDialog = elementorCommon.dialogsManager.createWidget("confirm", {
					id: "e-confirm-save-before-template-create",
					headerMessage: (0, _wordpress_i18n.__)("Save Changes", "elementor-pro"),
					message: (0, _wordpress_i18n.__)("Would you like to save the changes you've made?", "elementor-pro"),
					position: {
						my: "center center",
						at: "center center"
					},
					strings: {
						confirm: (0, _wordpress_i18n.__)("Save", "elementor-pro"),
						cancel: (0, _wordpress_i18n.__)("Discard", "elementor-pro")
					},
					onConfirm: () => __async(this, null, function* () {
						yield this.onConfirmCreateTemplate();
					})
				});
				this.confirmSaveBeforeTemplateCreateDialog.show();
			}
			onConfirmCreateTemplate() {
				return __async(this, null, function* () {
					$e.internal("panel/state-loading");
					const templateID = yield this.createAndSetTemplate();
					this.afterAction("new", templateID);
					$e.internal("panel/state-ready");
				});
			}
			createAndSetTemplate() {
				return __async(this, null, function* () {
					const controlId = this.model.get("name");
					const newTemplateType = this.options.container.controls[controlId].actions.new.document_config.type;
					const newTemplateSource = this.getTemplateSourceTypeValue();
					const newTemplate = yield $e.data.create("library/templates", {
						type: newTemplateType,
						page_settings: { source: newTemplateSource }
					});
					const templateID = parseInt(newTemplate.data.template_id);
					this.setValue(templateID);
					return templateID;
				});
			}
			getTemplateSourceTypeValue() {
				var _a;
				var _b;
				var _c;
				if ("repeater" === ((_c = (_b = (_a = this.options) == null ? void 0 : _a.container) == null ? void 0 : _b.args) == null ? void 0 : _c.type)) return this.options.container.renderer.args.settings.attributes._skin || void 0;
				return this.options.container.controls._skin ? this.options.container.panel.getControlView("_skin").getControlValue() : void 0;
			}
			/**
			* Function to switch the Editor when a user clicks to create a new template or edit the chosen template.
			*
			* @since 3.8.0
			*
			* @param {string|number} id
			*
			* @return {Promise<void>}
			*/
			switchDocument(id) {
				return __async(this, null, function* () {
					yield $e.run("editor/documents/switch", {
						id: parseInt(id),
						mode: "save"
					});
					const document = elementor.documents.getCurrent();
					if (document.config.container_attributes && document.config.container_attributes.class) document.$element.addClass(document.config.container_attributes.class);
				});
			}
			onEditButtonClicked() {
				return __async(this, null, function* () {
					this.afterAction("edit", this.getControlValue());
				});
			}
			getSelect2Placeholder() {
				return {
					id: "",
					text: (0, _wordpress_i18n.__)("Start typing its name", "elementor-pro")
				};
			}
			afterAction(context, templateID) {
				return __async(this, null, function* () {
					if ("switch_document" === ("new" === context ? this.ui.newButton[0].getAttribute("data-after-action") : this.ui.editButton[0].getAttribute("data-after-action"))) yield this.switchDocument(templateID);
					else window.open(this.getThemeBuilderURL(templateID), "_blank");
				});
			}
			getThemeBuilderURL(templateID) {
				return `${elementor.config.admin_url}post.php?post=${templateID}&action=elementor`;
			}
		};
	}));
	//#endregion
	//#region modules/query-control/assets/js/editor.js
	var require_editor$5 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		init_asyncToGenerator();
		init_preload_helper();
		module.exports = elementorModules.editor.utils.Module.extend({ onElementorPreviewLoaded() {
			elementor.addControlView("Query", require_query_control());
			__vitePreload(_asyncToGenerator(function* () {
				const { default: TemplateQueryControl } = yield Promise.resolve().then(() => (init_template_query_control(), template_query_control_exports));
				return { default: TemplateQueryControl };
			}), void 0).then(({ default: TemplateQueryControl }) => elementor.addControlView("template_query", TemplateQueryControl));
		} });
	}));
	//#endregion
	//#region modules/library/assets/js/editor/edit-button.js
	var require_edit_button = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = function() {
			var self = this;
			self.onPanelShow = function(panel) {
				var model = panel.content.currentView.collection.findWhere({ name: "template_id" });
				self.templateIdView = panel.content.currentView.children.findByModelCid(model.cid);
				self.templateIdView.elementSettingsModel.on("change", self.onTemplateIdChange);
				self.templateIdView.on("render", self.onTemplateIdChange);
			};
			self.onTemplateIdChange = function() {
				var templateID = self.templateIdView.elementSettingsModel.get("template_id");
				var $editButton = self.templateIdView.$el.find(".elementor-edit-template");
				if (!templateID) {
					$editButton.remove();
					return;
				}
				var editUrl = ElementorConfig.home_url + "?p=" + templateID + "&elementor";
				if ($editButton.length) $editButton.prop("href", editUrl);
				else {
					$editButton = jQuery("<a />", {
						target: "_blank",
						class: "elementor-button elementor-edit-template",
						href: editUrl,
						html: "<i class=\"eicon-pencil\" aria-hidden=\"true\"></i>" + (0, _wordpress_i18n.__)("Edit Template", "elementor-pro")
					});
					self.templateIdView.$el.find(".elementor-control-input-wrapper").after($editButton);
				}
			};
			self.init = function() {
				elementor.hooks.addAction("panel/open_editor/widget/template", self.onPanelShow);
			};
			self.init();
		};
	}));
	//#endregion
	//#region modules/library/assets/js/editor.js
	var require_editor$4 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = elementorModules.editor.utils.Module.extend({ onElementorPreviewLoaded() {
			var EditButton = require_edit_button();
			this.editButton = new EditButton();
		} });
	}));
	//#endregion
	//#region modules/flip-box/assets/js/editor/editor.js
	var require_editor$3 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = elementorModules.editor.utils.Module.extend({
			onElementorInit() {
				elementor.channels.editor.on("section:activated", this.onSectionActivated);
			},
			onSectionActivated(sectionName, editor) {
				var editedElement = editor.getOption("editedElementView");
				if ("flip-box" !== editedElement.model.get("widgetType")) return;
				var isSideBSection = -1 !== ["section_side_b_content", "section_style_b"].indexOf(sectionName);
				editedElement.$el.toggleClass("elementor-flip-box--flipped", isSideBSection);
				var $backLayer = editedElement.$el.find(".elementor-flip-box__back");
				if (isSideBSection) $backLayer.css("transition", "none");
				if (!isSideBSection) setTimeout(function() {
					$backLayer.css("transition", "");
				}, 10);
			}
		});
	}));
	//#endregion
	//#region modules/share-buttons/assets/js/editor/editor.js
	var require_editor$2 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = elementorModules.editor.utils.Module.extend({
			config: elementorPro.config.shareButtonsNetworks,
			networksClassDictionary: {
				google: "fab fa-google-plus",
				pocket: "fab fa-get-pocket",
				email: "fas fa-envelope",
				print: "fas fa-print"
			},
			getNetworkClass(networkName) {
				let networkClass = this.networksClassDictionary[networkName] || "fab fa-" + networkName;
				if (elementor.config.icons_update_needed) networkClass = "fa " + networkClass;
				return networkClass;
			},
			getNetworkTitle(buttonSettings) {
				var _this$getNetworkData;
				return buttonSettings.text || ((_this$getNetworkData = this.getNetworkData(buttonSettings)) === null || _this$getNetworkData === void 0 ? void 0 : _this$getNetworkData.title);
			},
			getNetworkData(buttonSettings) {
				return this.config[buttonSettings.button];
			},
			hasCounter(networkName, settings) {
				return "icon" !== settings.view && "yes" === settings.show_counter && this.config[networkName].has_counter;
			}
		});
	}));
	//#endregion
	//#region modules/assets-manager/assets/js/editor/font-manager.js
	var require_font_manager = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = elementorModules.Module.extend({
			_enqueuedFonts: [],
			_enqueuedTypekit: false,
			onFontChange(fontType, font) {
				if ("custom" !== fontType && "typekit" !== fontType && "variable" !== fontType) return;
				if (-1 !== this._enqueuedFonts.indexOf(font)) return;
				if ("typekit" === fontType && this._enqueuedTypekit) return;
				this.getCustomFont(fontType, font);
			},
			getCustomFont(fontType, font) {
				elementorPro.ajax.addRequest("assets_manager_panel_action_data", {
					unique_id: "font_" + fontType + font,
					data: {
						service: "font",
						type: fontType,
						font
					},
					success(data) {
						if (data.font_face) elementor.$previewContents.find("style").last().after("<style type=\"text/css\">" + data.font_face + "</style>");
						if (data.font_url) elementor.$previewContents.find("link").last().after("<link href=\"" + data.font_url + "\" rel=\"stylesheet\" type=\"text/css\">");
					}
				});
				this._enqueuedFonts.push(font);
				if ("typekit" === fontType) this._enqueuedTypekit = true;
			},
			onInit() {
				elementor.channels.editor.on("font:insertion", this.onFontChange.bind(this));
			}
		});
	}));
	//#endregion
	//#region modules/assets-manager/assets/js/editor/editor.js
	var require_editor$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = elementorModules.editor.utils.Module.extend({ onElementorInit() {
			var FontsManager = require_font_manager();
			this.assets = { font: new FontsManager() };
		} });
	}));
	//#endregion
	//#region modules/theme-elements/assets/js/editor/comments-skin.js
	var require_comments_skin = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = function() {
			var self = this;
			self.onPanelShow = function(panel, model) {
				var settingsModel = model.get("settings");
				if (!settingsModel.controls._skin.default) settingsModel.set("_skin", "theme_comments");
			};
			self.init = function() {
				elementor.hooks.addAction("panel/open_editor/widget/post-comments", self.onPanelShow);
			};
			self.init();
		};
	}));
	//#endregion
	//#region modules/theme-elements/assets/js/editor/editor.js
	var require_editor = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = elementorModules.editor.utils.Module.extend({ onElementorPreviewLoaded() {
			var CommentsSkin = require_comments_skin();
			this.commentsSkin = new CommentsSkin();
		} });
	}));
	//#endregion
	//#region modules/mega-menu/assets/js/editor/views/view.js
	var View;
	var init_view = __esmMin((() => {
		init_asyncToGenerator();
		View = class extends $e.components.get("nested-elements").exports.NestedView {
			constructor(...args) {
				super(...args);
				this.isRendering = false;
				this.itemTitle = "item_title";
				this.itemLink = "item_link";
				this.internalUrl = "internal-url";
				this.itemLinkSelector = ".elementor-control-item_link";
			}
			filter(child, index) {
				child.attributes.dataIndex = index + 1;
				child.attributes.widgetId = child.id;
				return true;
			}
			onAddChild(childView) {
				var _childView$_parent$$e;
				var _childView$_parent$$e2;
				const widgetNumber = ((_childView$_parent$$e = childView._parent.$el.find(".e-n-menu")[0]) === null || _childView$_parent$$e === void 0 ? void 0 : _childView$_parent$$e.dataset.widgetNumber) || childView.model.attributes.widgetId;
				const index = childView.model.attributes.dataIndex;
				const tabId = ((_childView$_parent$$e2 = childView._parent.$el.find(`.e-n-menu-item-title[data-tab-index="${index}"]`)) === null || _childView$_parent$$e2 === void 0 ? void 0 : _childView$_parent$$e2.attr("id")) || childView.model.attributes.widgetId + " " + index;
				childView.$el.attr({
					id: "e-n-menu-content-" + widgetNumber + index,
					role: "menu",
					"aria-labelledby": tabId,
					"data-tab-index": index
				});
			}
			getChildViewContainer(containerView, childView) {
				const { elements_placeholder_selector: customSelector, child_container_placeholder_selector: childContainerSelector } = this.model.config.defaults;
				if (childView !== void 0 && childView._index !== void 0 && childContainerSelector) return containerView.$el.find(`${childContainerSelector}`)[childView._index];
				if (customSelector) return containerView.$el.find(this.model.config.defaults.elements_placeholder_selector);
				return super.getChildViewContainer(containerView, childView);
			}
			attachBuffer(compositeView, buffer) {
				var _this$model;
				var _this$model2;
				const $container = this.getChildViewContainer(compositeView);
				if (((_this$model = this.model) === null || _this$model === void 0 || (_this$model = _this$model.config) === null || _this$model === void 0 ? void 0 : _this$model.support_improved_repeaters) && ((_this$model2 = this.model) === null || _this$model2 === void 0 || (_this$model2 = _this$model2.config) === null || _this$model2 === void 0 ? void 0 : _this$model2.is_interlaced)) {
					var _this$model3;
					const childContainerClass = (((_this$model3 = this.model) === null || _this$model3 === void 0 || (_this$model3 = _this$model3.config) === null || _this$model3 === void 0 || (_this$model3 = _this$model3.defaults) === null || _this$model3 === void 0 ? void 0 : _this$model3.child_container_placeholder_selector) || "").replace(".", "");
					this._updateChildContainers($container[0], childContainerClass, buffer);
				} else $container.append(buffer);
			}
			_updateChildContainers(wrapper, childContainerClass, buffer) {
				_.each(wrapper.children, (childContainer) => {
					var _childContainer$class;
					if (!((_childContainer$class = childContainer.classList) === null || _childContainer$class === void 0 ? void 0 : _childContainer$class.contains(childContainerClass))) {
						this._updateChildContainers(childContainer, childContainerClass, buffer);
						return;
					}
					const numberOfItems = buffer.childNodes.length;
					if (0 === numberOfItems) return;
					childContainer.appendChild(buffer.childNodes[0]);
					buffer.appendChild(childContainer);
					wrapper.append(buffer.childNodes[numberOfItems - 1]);
				});
			}
			/**
			* Function renderOnChange().
			*
			* Render the changes in the settings according to the current situation.
			*
			* @param {Object} settings
			* @param {Array}  widget
			*/
			renderOnChange(settings, widget = []) {
				if (!this.allowRender) return;
				if (this.isRendering) {
					this.isRendering = false;
					return;
				}
				const renderResult = this.renderDataBindings(settings, this.dataBindings, widget);
				if (renderResult instanceof Promise) renderResult.then((result) => {
					if (!result) this.renderChanges(settings);
				});
				if (!renderResult) this.renderChanges(settings);
			}
			/**
			* Function renderDataBindings().
			*
			* Render linked data.
			*
			* @param {Object} settings
			* @param {Array}  dataBindings
			* @param {Array}  widget
			*
			* @return {boolean} - false on fail.
			*/
			renderDataBindings(settings, dataBindings, widget = []) {
				var _this = this;
				var _this$dataBindings;
				if (!((_this$dataBindings = this.dataBindings) === null || _this$dataBindings === void 0 ? void 0 : _this$dataBindings.length)) return false;
				let changed = false;
				const renderDataBinding = function() {
					var _ref = _asyncToGenerator(function* (dataBinding) {
						var _settings$changed;
						if (void 0 !== settings.changed[dataBinding.dataset.bindingSetting]) {
							dataBinding.el.innerHTML = settings.changed[dataBinding.dataset.bindingSetting];
							return true;
						}
						if (!(settings === null || settings === void 0 ? void 0 : settings.changed.__dynamic__) || !widget.length) return false;
						if (!_this.isTitleOrLinkChanged(settings)) return true;
						const { bindingSetting } = dataBinding.dataset, changedControl = _this.getChangedDynamicControlKey(settings);
						let change = settings.changed[bindingSetting];
						if (_this.isInternalUrl(settings === null || settings === void 0 || (_settings$changed = settings.changed) === null || _settings$changed === void 0 || (_settings$changed = _settings$changed.__dynamic__) === null || _settings$changed === void 0 ? void 0 : _settings$changed.item_link) && _this.isSettingChanged(settings, _this.itemLink)) return yield _this.getDynamicValue(settings, changedControl, bindingSetting, dataBinding, widget);
						if (_this.isAtomicDynamic(settings.changed, dataBinding, changedControl)) {
							const dynamicValue = yield _this.getDynamicValue(settings, changedControl, bindingSetting, dataBinding, widget);
							if (_this.itemLink === changedControl) return true;
							if (dynamicValue) change = dynamicValue;
						}
						if (change !== void 0) {
							dataBinding.el.innerHTML = change;
							return true;
						}
						return false;
					});
					return function renderDataBinding(_x) {
						return _ref.apply(this, arguments);
					};
				}();
				for (const dataBinding of dataBindings) {
					switch (dataBinding.dataset.bindingType) {
						case "repeater-item":
							{
								var _container$parent;
								const repeater = this.container.repeaters[dataBinding.dataset.bindingRepeaterName];
								if (!repeater) break;
								const container = repeater.children.find((i) => i.id === settings.attributes._id);
								if ((container === null || container === void 0 || (_container$parent = container.parent) === null || _container$parent === void 0 ? void 0 : _container$parent.children.indexOf(container)) + 1 === parseInt(dataBinding.dataset.bindingIndex)) changed = renderDataBinding(dataBinding);
								else if (dataBindings.indexOf(dataBinding) + 1 === this.getRepeaterItemActiveIndex()) {
									if (this.isItemLinkChild(widget)) return true;
									changed = this.tryHandleDynamicCoverSettings(dataBinding, settings);
								}
							}
							break;
						case "content":
							changed = renderDataBinding(dataBinding);
							break;
					}
					if (changed) break;
				}
				return changed;
			}
			isAtomicDynamic(changedSettings, dataBinding, changedControl) {
				return dataBinding.el.hasAttribute("data-binding-dynamic") && (this.itemTitle === changedControl || this.itemLink === changedControl);
			}
			getDynamicValue(settings, changedControlKey, bindingSetting, dataBinding, widget) {
				var _this2 = this;
				return _asyncToGenerator(function* () {
					const dynamicSettings = { active: true };
					const valueToParse = _this2.extractValueToParse(_this2.getChangedData(settings, changedControlKey, bindingSetting));
					if (void 0 === valueToParse) return settings.attributes[changedControlKey];
					const data = yield _this2.getDataFromCacheOrBackend(valueToParse, dynamicSettings);
					if (_this2.itemTitle === changedControlKey) return data;
					if (void 0 !== data) _this2.tryFormatDynamicMegaMenuUrl(valueToParse, dataBinding, widget, changedControlKey, dynamicSettings);
					return settings.attributes[changedControlKey];
				})();
			}
			extractValueToParse(valueToParse, keyToExtract = "url") {
				if ("object" === typeof valueToParse) return valueToParse[keyToExtract];
				return valueToParse;
			}
			getChangedDynamicControlKey(settings) {
				var _settings$changed2;
				var _settings$changed3;
				var _settings$_previousAt;
				if (!(settings === null || settings === void 0 || (_settings$changed2 = settings.changed) === null || _settings$changed2 === void 0 ? void 0 : _settings$changed2.__dynamic__)) return Object.keys(settings.changed)[0];
				const changedControlKey = this.findUniqueKey(settings === null || settings === void 0 || (_settings$changed3 = settings.changed) === null || _settings$changed3 === void 0 ? void 0 : _settings$changed3.__dynamic__, settings === null || settings === void 0 || (_settings$_previousAt = settings._previousAttributes) === null || _settings$_previousAt === void 0 ? void 0 : _settings$_previousAt.__dynamic__)[0];
				if (changedControlKey) return changedControlKey;
				return this.isSettingChanged(settings, this.itemLink) ? this.itemLink : this.itemTitle;
			}
			tryFormatDynamicMegaMenuUrl(valueToParse, dataBinding, widget, changedControl, dynamicSettings) {
				const dynamicTagName = this.getDynamicTagName(valueToParse);
				if (this.itemLink !== changedControl || "internal_link" === dynamicTagName) return false;
				const value = elementor.dynamicTags.parseTagsText(valueToParse, dynamicSettings, elementor.dynamicTags.getTagDataContent);
				elementor.$preview[0].contentWindow.dispatchEvent(new CustomEvent("elementor/dynamic/url_change", { detail: {
					element: dataBinding.el,
					actionName: valueToParse && dynamicTagName,
					value
				} }));
				dataBinding.el = Array.from(widget)[0].querySelectorAll(".e-n-menu-title-text")[dataBinding.dataset.bindingIndex - 1];
			}
			getDynamicTagName(changedDataForAddedItem) {
				const match = changedDataForAddedItem.match(/name="([^"]*)"/);
				return match ? match[1] : null;
			}
			isInternalUrl(dynamicData) {
				if (!dynamicData) return false;
				return this.internalUrl === this.getDynamicTagName(dynamicData);
			}
			isItemLinkChild(widget) {
				return widget[0].closest(this.itemLinkSelector);
			}
			getDataFromCacheOrBackend(valueToParse, dynamicSettings) {
				return _asyncToGenerator(function* () {
					try {
						return elementor.dynamicTags.parseTagsText(valueToParse, dynamicSettings, elementor.dynamicTags.getTagDataContent);
					} catch (_unused) {
						yield new Promise((resolve) => {
							elementor.dynamicTags.refreshCacheFromServer(() => {
								resolve();
							});
						});
						return !_.isEmpty(elementor.dynamicTags.cache) ? elementor.dynamicTags.parseTagsText(valueToParse, dynamicSettings, elementor.dynamicTags.getTagDataContent) : false;
					}
				})();
			}
			getChangedDataForRemovedItem(settings, changedControlKey, bindingSetting) {
				var _settings$attributes;
				var _settings$attributes2;
				return ((_settings$attributes = settings.attributes) === null || _settings$attributes === void 0 || (_settings$attributes = _settings$attributes[changedControlKey]) === null || _settings$attributes === void 0 ? void 0 : _settings$attributes[bindingSetting]) || ((_settings$attributes2 = settings.attributes) === null || _settings$attributes2 === void 0 ? void 0 : _settings$attributes2[changedControlKey]);
			}
			getChangedDataForAddedItem(settings, changedControlKey, bindingSetting) {
				var _settings$attributes3;
				var _settings$attributes4;
				return ((_settings$attributes3 = settings.attributes) === null || _settings$attributes3 === void 0 || (_settings$attributes3 = _settings$attributes3.__dynamic__) === null || _settings$attributes3 === void 0 || (_settings$attributes3 = _settings$attributes3[changedControlKey]) === null || _settings$attributes3 === void 0 ? void 0 : _settings$attributes3[bindingSetting]) || ((_settings$attributes4 = settings.attributes) === null || _settings$attributes4 === void 0 || (_settings$attributes4 = _settings$attributes4.__dynamic__) === null || _settings$attributes4 === void 0 ? void 0 : _settings$attributes4[changedControlKey]);
			}
			getChangedData(settings, changedControlKey, bindingSetting) {
				const changedDataForRemovedItem = this.getChangedDataForRemovedItem(settings, changedControlKey, bindingSetting);
				return this.getChangedDataForAddedItem(settings, changedControlKey, bindingSetting) || changedDataForRemovedItem;
			}
			/**
			* Function getTitleWithAdvancedValues().
			*
			* Renders before / after / fallback for dynamic item titles.
			*
			* @param {Object} settings
			* @param {string} text
			*/
			getTitleWithAdvancedValues(settings, text) {
				const { attributes, _previousAttributes: previousAttributes } = settings;
				if (this.compareSettings(attributes, previousAttributes, "fallback")) text = text.replace(new RegExp(previousAttributes.fallback), "");
				if (!text || attributes.fallback === text) return attributes.fallback || "";
				if (this.compareSettings(attributes, previousAttributes, "before")) text = text.replace(previousAttributes.before, "");
				if (this.compareSettings(attributes, previousAttributes, "after")) text = text.replace(new RegExp(previousAttributes.after + "$"), "");
				if (!text) return attributes.fallback || "";
				const newBefore = this.getNewSettingsValue(attributes, previousAttributes, "before");
				const newAfter = this.getNewSettingsValue(attributes, previousAttributes, "after");
				text = newBefore + text;
				text += newAfter;
				return text;
			}
			compareSettings(attributes, previousAttributes, key) {
				return previousAttributes[key] && previousAttributes[key] !== attributes[key];
			}
			getNewSettingsValue(attributes, previousAttributes, key) {
				return previousAttributes[key] !== attributes[key] ? attributes[key] || "" : "";
			}
			getRepeaterItemActiveIndex() {
				return this.getContainer().renderer.view.model.changed.editSettings.changed.activeItemIndex || this.getContainer().renderer.view.model.changed.editSettings.attributes.activeItemIndex;
			}
			tryHandleDynamicCoverSettings(dataBinding, settings) {
				if (!this.isAdvancedDynamicSettings(settings.attributes)) return false;
				this.isRendering = true;
				dataBinding.el.textContent = this.getTitleWithAdvancedValues(settings, dataBinding.el.textContent);
				return true;
			}
			isAdvancedDynamicSettings(attributes) {
				return "before" in attributes && "after" in attributes && "fallback" in attributes;
			}
			isSettingChanged(settings, bindingSettings) {
				var _settings$attributes$;
				var _settings$_previousAt2;
				return ((_settings$attributes$ = settings.attributes.__dynamic__) === null || _settings$attributes$ === void 0 ? void 0 : _settings$attributes$[bindingSettings]) !== ((_settings$_previousAt2 = settings._previousAttributes.__dynamic__) === null || _settings$_previousAt2 === void 0 ? void 0 : _settings$_previousAt2[bindingSettings]);
			}
			isTitleOrLinkChanged(settings) {
				return this.isSettingChanged(settings, this.itemTitle) || this.isSettingChanged(settings, this.itemLink);
			}
		};
	}));
	//#endregion
	//#region modules/mega-menu/assets/js/editor/nested-module.js
	var NestedModule;
	var init_nested_module = __esmMin((() => {
		init_view();
		NestedModule = class extends elementor.modules.elements.types.NestedElementBase {
			getType() {
				return "mega-menu";
			}
			getView() {
				return View;
			}
		};
	}));
	//#endregion
	//#region modules/mega-menu/assets/js/editor/editor-module.js
	var require_editor_module = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var ElementEditorModule = require_element_editor_module();
		module.exports = ElementEditorModule.extend({
			__construct() {
				this.cache = {};
				ElementEditorModule.prototype.__construct.apply(this, arguments);
			},
			onInit() {
				elementor.channels.editor.on("editor:widget:mega-menu:section_layout:activated", this.maybeSetContentWidthValue);
			},
			maybeSetContentWidthValue() {
				const contentWidthControlView = this.getEditorControlView("content_width");
				const contentWidthControlValue = contentWidthControlView.getControlValue();
				if ([
					"",
					"full",
					"boxed"
				].includes(contentWidthControlValue)) {
					contentWidthControlView.setValue("full_width");
					contentWidthControlView.applySavedValue();
				}
			}
		});
	}));
	//#endregion
	//#region modules/mega-menu/assets/js/editor/utils/url-helper.js
	var UrlHelper;
	var init_url_helper = __esmMin((() => {
		UrlHelper = class {
			parse_url(url) {
				try {
					const { hostname, pathname, search } = new URL(url);
					return [
						hostname.replace("www.", ""),
						pathname.replace(/^\/+|\/+$/g, ""),
						search
					];
				} catch (err) {
					return false;
				}
			}
		};
	}));
	//#endregion
	//#region modules/mega-menu/assets/js/editor/module.js
	var module_exports$3 = /* @__PURE__ */ __exportAll({ default: () => Module$2 });
	var import_editor_module, Module$2;
	var init_module$3 = __esmMin((() => {
		init_nested_module();
		import_editor_module = /* @__PURE__ */ __toESM(require_editor_module());
		init_url_helper();
		Module$2 = class extends elementorModules.editor.utils.Module {
			static {
				__name(this, "Module");
			}
			constructor() {
				super();
				elementor.elementsManager.registerElementType(new NestedModule());
				new import_editor_module.default();
				this.urlHelper = new UrlHelper();
			}
			getCurrentMenuItemClass(menuLinkUrl, permalinkUrl) {
				menuLinkUrl = menuLinkUrl === null || menuLinkUrl === void 0 ? void 0 : menuLinkUrl.trim(menuLinkUrl);
				if (!menuLinkUrl || !permalinkUrl) return "";
				const permalinkArray = this.urlHelper.parse_url(permalinkUrl);
				const menuItemUrlArray = this.urlHelper.parse_url(menuLinkUrl);
				return _.isEqual(permalinkArray, menuItemUrlArray) ? "e-current" : "";
			}
			onElementorFrontendInit() {
				elementor.on("document:loaded", this.closeAllMegaMenus.bind(this));
			}
			closeAllMegaMenus() {
				const megaMenus = elementor.$previewContents[0].querySelectorAll(".elementor-widget-n-menu");
				if (megaMenus.length) Array.from(megaMenus).forEach((node) => {
					const id = node.getAttribute("data-id");
					window.jQuery(window).trigger("elementor/mega-menu/dropdown-toggle-by-keyboard", {
						widgetId: id,
						show: false
					});
				});
			}
		};
	}));
	//#endregion
	//#region modules/nested-carousel/assets/js/editor/nested-carousel.js
	var NestedCarousel;
	var init_nested_carousel = __esmMin((() => {
		NestedCarousel = class extends elementor.modules.elements.types.NestedElementBase {
			getType() {
				return "nested-carousel";
			}
		};
	}));
	//#endregion
	//#region modules/nested-carousel/assets/js/editor/module.js
	var module_exports$2 = /* @__PURE__ */ __exportAll({ default: () => Module$1 });
	var Module$1;
	var init_module$2 = __esmMin((() => {
		init_nested_carousel();
		Module$1 = class {
			static {
				__name(this, "Module");
			}
			constructor() {
				elementor.elementsManager.registerElementType(new NestedCarousel());
			}
		};
	}));
	//#endregion
	//#region modules/loop-filter/assets/js/editor/taxonomy-filter.js
	var require_taxonomy_filter = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var __defProp = Object.defineProperty;
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
		var ElementEditorModule = require_element_editor_module();
		module.exports = ElementEditorModule.extend({
			__construct() {
				this.cache = {};
				ElementEditorModule.prototype.__construct.apply(this, arguments);
			},
			onInit() {
				elementor.channels.editor.on("editor:widget:taxonomy-filter:section_taxonomy_filter:activated", this.onTaxonomyFilterSectionActive);
			},
			onTaxonomyFilterSectionActive() {
				this.updateSelectedElementOptions();
				const selectedElementControlValue = this.getEditorControlView("selected_element").getControlValue();
				if (!selectedElementControlValue) return;
				if (this.handleInvalidSetup(selectedElementControlValue)) return;
				if (selectedElementControlValue) this.updateTaxonomyOptions(selectedElementControlValue);
			},
			updateSelectedElementOptions() {
				const selectedElementControlView = this.getEditorControlView("selected_element");
				const selectedElementControlValue = selectedElementControlView.getControlValue();
				if (!(!!selectedElementControlValue ? elementor.$previewContents[0].querySelector(`[data-elementor-id="${elementor.config.document.id}"] .elementor-element-${selectedElementControlValue}`) : "")) selectedElementControlView.setValue("");
				const loopWidgets = elementor.$previewContents[0].querySelectorAll(`[data-elementor-id="${elementor.config.document.id}"] .elementor-widget-loop-grid`);
				const selectedElementControlOptions = { "": (0, _wordpress_i18n.__)("Select a widget", "elementor-pro") };
				if (!loopWidgets.length) {
					this.updateOptions("selected_element", selectedElementControlOptions);
					selectedElementControlView.setValue("");
				}
				let index = 1;
				for (const loopWidget of loopWidgets) selectedElementControlOptions[loopWidget.dataset.id] = `${(0, _wordpress_i18n.__)("Loop Grid", "elementor-pro")} ${index++}`;
				this.updateOptions("selected_element", selectedElementControlOptions);
			},
			onElementChange(setting, controlView) {
				if ("selected_element" !== setting) return;
				const controlValue = controlView.getControlValue();
				if (this.handleInvalidSetup(controlValue)) return;
				if (controlValue) this.updateTaxonomyOptions(controlValue);
				else this.updateOptions("taxonomy", { "": (0, _wordpress_i18n.__)("Select a taxonomy", "elementor-pro") });
			},
			getPostSourceQueryPostType(loopWidgetContainer) {
				const querySource = loopWidgetContainer.settings.attributes.post_query_post_type;
				let queryPostType = "";
				switch (querySource) {
					case "current_query":
						queryPostType = elementorPro.config.loopFilter.mainQueryPostType;
						break;
					case "by_id":
						queryPostType = "post";
						break;
					case "related":
						queryPostType = "post";
						break;
					default: queryPostType = querySource;
				}
				return queryPostType;
			},
			getLoopQueryPostType(loopWidgetId) {
				const loopWidgetContainer = elementor.getContainer(loopWidgetId);
				if ("post" === loopWidgetContainer.settings.attributes._skin) return this.getPostSourceQueryPostType(loopWidgetContainer);
				return "product";
			},
			updateTaxonomyOptions(loopWidgetId) {
				const postType = this.getLoopQueryPostType(loopWidgetId);
				return this.getPostTypeTaxonomies(postType).then((response) => {
					if (!(response instanceof Response)) return response;
					else if (!response.ok || 400 <= response.status) {
						this.displayErrorDialog();
						return {};
					}
					return response.json();
				}).catch(() => {
					this.displayErrorDialog();
					return {};
				}).then((response) => {
					let data = (response == null ? void 0 : response.data) || response;
					if (!Object.keys(data).length) {
						this.updateOptions("taxonomy", { "": (0, _wordpress_i18n.__)("No taxonomies found", "elementor-pro") });
						return;
					}
					data = __spreadValues(__spreadValues({}, { "": (0, _wordpress_i18n.__)("Select a taxonomy", "elementor-pro") }), data);
					this.cache[postType] = data;
					this.updateOptions("taxonomy", data);
				});
			},
			/**
			*
			* @param {string} postType
			* @return {Promise} Promise that should resolve with taxonomies data.
			*/
			getPostTypeTaxonomies(postType) {
				if (this.cache[postType] && Object.keys(this.cache[postType]).length) return Promise.resolve(this.cache[postType]);
				return this.fetchPostTypeTaxonomies(postType);
			},
			fetchPostTypeTaxonomies(postType) {
				return fetch(`${elementorCommon.config.urls.rest}elementor-pro/v1/get-post-type-taxonomies`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"X-WP-Nonce": elementorWebCliConfig.nonce
					},
					body: JSON.stringify({ post_type: postType })
				});
			},
			displayErrorDialog(options = {}) {
				const id = (options == null ? void 0 : options.id) || "e-filter-error-message";
				const showDialog = () => {
					elementorCommon.dialogsManager.createWidget("alert", {
						id,
						className: "e-filter__error-message",
						headerMessage: (options == null ? void 0 : options.headerMessage) || (0, _wordpress_i18n.__)("Something went wrong", "elementor-pro"),
						message: (options == null ? void 0 : options.message) || (0, _wordpress_i18n.__)("We are experiencing technical difficulties on our end. Please try again to reconnect.", "elementor-pro"),
						position: {
							my: "center center",
							at: "center center"
						},
						strings: { confirm: (0, _wordpress_i18n.__)("OK", "elementor-pro") }
					}).show();
				};
				setTimeout(showDialog, 0);
			},
			handleInvalidSetup(loopWidgetId) {
				const loopWidgetContainer = elementor.getContainer(loopWidgetId);
				if (!loopWidgetContainer) return false;
				if (!("current_query" === loopWidgetContainer.settings.attributes.post_query_post_type && "single-post" === elementor.config.document.type)) return false;
				this.displayErrorDialog({
					id: "e-filter-invalid-setup-error",
					headerMessage: (0, _wordpress_i18n.__)("Invalid Setup", "elementor-pro"),
					message: (0, _wordpress_i18n.__)("Cannot filter a single-item list, please change from \"Current Query\" to a different query setting.", "elementor-pro")
				});
				return true;
			}
		});
	}));
	//#endregion
	//#region modules/loop-filter/assets/js/editor/module.js
	var module_exports$1 = /* @__PURE__ */ __exportAll({ default: () => LoopFilter });
	var import_taxonomy_filter, LoopFilter;
	var init_module$1 = __esmMin((() => {
		import_taxonomy_filter = /* @__PURE__ */ __toESM(require_taxonomy_filter());
		LoopFilter = class extends elementorModules.editor.utils.Module {
			onElementorInit() {
				this.taxonomyFilter = new import_taxonomy_filter.default("taxonomy-filter");
			}
		};
	}));
	//#endregion
	//#region modules/off-canvas/assets/js/editor/components/empty-component.js
	function empty_component_default() {
		return /* @__PURE__ */ react.default.createElement("div", { className: "elementor-first-add" }, /* @__PURE__ */ react.default.createElement("div", {
			className: "elementor-icon eicon-plus",
			onClick: () => $e.route("panel/elements/categories")
		}));
	}
	var init_empty_component = __esmMin((() => {
		__name(empty_component_default, "default");
	}));
	//#endregion
	//#region modules/off-canvas/assets/js/editor/off-canvas.js
	var OffCanvas;
	var init_off_canvas = __esmMin((() => {
		init_empty_component();
		OffCanvas = class extends elementor.modules.elements.types.NestedElementBase {
			getType() {
				return "off-canvas";
			}
			getEmptyView() {
				return empty_component_default;
			}
		};
	}));
	//#endregion
	//#region modules/off-canvas/assets/js/editor/module.js
	var module_exports = /* @__PURE__ */ __exportAll({ default: () => Module });
	var Module;
	var init_module = __esmMin((() => {
		init_off_canvas();
		init_defineProperty();
		Module = class extends elementorModules.editor.utils.Module {
			constructor(...args) {
				super(args);
				_defineProperty(this, "populateOffCanvasDropdownOptions", (eventName, ...args) => {
					if (!this.isOffCanvasTagPopover(eventName)) return;
					const currentView = args[0];
					const controlModel = currentView.collection.findWhere({ name: "off_canvas" });
					if (!controlModel) return;
					const offCanvasWidgets = this.getOffCanvasWidgetsForCurrentDocument();
					const selectedElementControlOptions = { "": (0, _wordpress_i18n.__)("Select a widget", "elementor-pro") };
					if (!offCanvasWidgets.length) this.updateControl(controlModel, selectedElementControlOptions);
					for (const offCanvasWidget of offCanvasWidgets) {
						const offCanvasId = offCanvasWidget.dataset.id;
						selectedElementControlOptions[offCanvasId] = offCanvasWidget.querySelector(".e-off-canvas").getAttribute("aria-label");
					}
					this.updateControl(controlModel, selectedElementControlOptions);
					currentView.children.findByModel(controlModel).render();
				});
				elementor.elementsManager.registerElementType(new OffCanvas());
				elementor.listenTo(elementor.channels.editor, "all", this.populateOffCanvasDropdownOptions);
			}
			showOffCanvas() {
				const settings = {
					id: elementor.getPanelView().getCurrentPageView().getOption("editedElementView").getEditModel().get("id"),
					displayMode: "open"
				};
				elementor.$preview[0].contentWindow.dispatchEvent(new CustomEvent("elementor-pro/off-canvas/toggle-display-mode", { detail: settings }));
			}
			updateControl(controlModel, values) {
				controlModel.set({ options: values });
			}
			getOffCanvasWidgetsForCurrentDocument() {
				return elementor.$previewContents[0].querySelectorAll(`[data-elementor-id="${elementor.config.document.id}"] .elementor-widget-off-canvas.elementor-element-edit-mode`);
			}
			isOffCanvasTagPopover(eventName) {
				return eventName.endsWith(":off-canvas:settings:activated");
			}
			hideAdvancedTab(sectionName, editor) {
				var _editor$model;
				if ("off-canvas" !== ((editor === null || editor === void 0 || (_editor$model = editor.model) === null || _editor$model === void 0 ? void 0 : _editor$model.get("widgetType")) || "")) return;
				const advancedTab = (editor === null || editor === void 0 ? void 0 : editor.el.querySelector(".elementor-tab-control-advanced")) || false;
				if (advancedTab) advancedTab.style.display = "none";
			}
			onInit() {
				elementor.channels.editor.on("editor:widget:off-canvas:section_layout:activated", this.showOffCanvas.bind(this));
				elementor.channels.editor.on("section:activated", this.hideAdvancedTab.bind(this));
			}
		};
	}));
	//#endregion
	//#region assets/dev/js/editor/editor.js
	init_asyncToGenerator();
	init_preload_helper();
	var ElementorPro = Marionette.Application.extend({
		config: {},
		modules: {},
		initModules() {
			var _this = this;
			var QueryControl = require_editor$5();
			var Library = require_editor$4();
			var FlipBox = require_editor$3();
			var ShareButtons = require_editor$2();
			var AssetsManager = require_editor$1();
			var ThemeElements = require_editor();
			this.modules = {
				queryControl: new QueryControl(),
				forms: new FormsModule(),
				library: new Library(),
				customCSS: new editor_default$1(),
				globalWidget: new Module$7(),
				flipBox: new FlipBox(),
				motionFX: new editor_default(),
				shareButtons: new ShareButtons(),
				assetsManager: new AssetsManager(),
				themeElements: new ThemeElements(),
				themeBuilder: new ThemeBuilderModule(),
				siteEditor: new Module$5(),
				screenshots: new Module$6(),
				woocommerce: new import_module$1.default(),
				stripe: new StripeModule(),
				loopBuilder: new import_module$2.default(),
				pageTransitions: new module_default(),
				popup: new import_module.default(),
				videoPlaylistModule: new Module$4(),
				ScrollSnapModule: new Module$3()
			};
			if (elementorCommon.config.experimentalFeatures["mega-menu"]) elementorCommon.elements.$window.on("elementor/nested-element-type-loaded", _asyncToGenerator(function* () {
				_this.modules.megaMenu = new (yield __vitePreload(_asyncToGenerator(function* () {
					const { default: __vite_default__ } = yield Promise.resolve().then(() => (init_module$3(), module_exports$3));
					return { default: __vite_default__ };
				}), void 0)).default();
			}));
			if (elementorCommon.config.experimentalFeatures.container) elementorCommon.elements.$window.on("elementor/nested-element-type-loaded", _asyncToGenerator(function* () {
				_this.modules.nestedCarousel = new (yield __vitePreload(_asyncToGenerator(function* () {
					const { default: __vite_default__ } = yield Promise.resolve().then(() => (init_module$2(), module_exports$2));
					return { default: __vite_default__ };
				}), void 0)).default();
			}));
			__vitePreload(_asyncToGenerator(function* () {
				const { default: LoopFilter } = yield Promise.resolve().then(() => (init_module$1(), module_exports$1));
				return { default: LoopFilter };
			}), void 0).then(({ default: LoopFilter }) => {
				this.modules.loopFilter = new LoopFilter();
			});
			if (elementorCommon.config.experimentalFeatures.container) elementorCommon.elements.$window.on("elementor/nested-element-type-loaded", _asyncToGenerator(function* () {
				_this.modules.offCanvas = new (yield __vitePreload(_asyncToGenerator(function* () {
					const { default: __vite_default__ } = yield Promise.resolve().then(() => (init_module(), module_exports));
					return { default: __vite_default__ };
				}), void 0)).default();
			}));
		},
		ajax: {
			prepareArgs(args) {
				args[0] = "pro_" + args[0];
				return args;
			},
			send() {
				return elementorCommon.ajax.send.apply(elementorCommon.ajax, this.prepareArgs(arguments));
			},
			addRequest() {
				return elementorCommon.ajax.addRequest.apply(elementorCommon.ajax, this.prepareArgs(arguments));
			}
		},
		translate(stringKey, templateArgs) {
			return elementorCommon.translate(stringKey, null, templateArgs, this.config.i18n);
		},
		onStart() {
			this.config = elementorProEditorConfig;
			this.initModules();
			jQuery(window).on("elementor:init", () => this.onElementorInit()).on("elementor/connect/success/editor-pro-activate", this.onActivateSuccess);
		},
		onElementorInit() {
			elementor.on("preview:loaded", () => this.onElementorPreviewLoaded());
			elementorPro.libraryRemoveGetProButtons();
			elementorCommon.debug.addURLToWatch("elementor-pro/assets");
			if (elementorPro.config.should_show_promotion) new notesContextMenu();
		},
		onElementorPreviewLoaded() {
			elementor.$preview[0].contentWindow.elementorPro = this;
		},
		libraryRemoveGetProButtons() {
			elementor.hooks.addFilter("elementor/editor/template-library/template/action-button", (viewID, templateData) => {
				var _elementor$config;
				if (!templateData.accessTier || !((_elementor$config = elementor.config) === null || _elementor$config === void 0 || (_elementor$config = _elementor$config.library_connect) === null || _elementor$config === void 0 ? void 0 : _elementor$config.current_access_tier)) return this.getProButtonViewIdBC(viewID, templateData);
				if (templateData.accessTier !== elementor.config.library_connect.base_access_tier && !elementorPro.config.isActive) return "#tmpl-elementor-pro-template-library-activate-license-button";
				return isTierAtLeast(elementor.config.library_connect.current_access_tier, templateData.accessTier) ? "#tmpl-elementor-template-library-insert-button" : viewID;
			});
		},
		getProButtonViewIdBC(viewID, templateData) {
			if (templateData.accessLevel > 0 && !elementorPro.config.isActive) return "#tmpl-elementor-pro-template-library-activate-license-button";
			if (templateData.accessLevel > elementor.config.library_connect.current_access_level) return viewID;
			return "#tmpl-elementor-template-library-insert-button";
		},
		onActivateSuccess() {
			elementor.noticeBar.onCloseClick();
			elementor.config.library_connect.is_connected = true;
			elementorPro.config.isActive = true;
			elementor.notifications.showToast({ message: (0, _wordpress_i18n.__)("Connected Successfully", "elementor-pro") });
		}
	});
	window.elementorPro = new ElementorPro();
	elementorPro.start();
	//#endregion
})(wp.i18n, React);

//# sourceMappingURL=editor.js.map
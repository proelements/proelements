/*! pro-elements - v4.3.0 - 22-09-2026 */
(function(_wordpress_i18n) {
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
		for (var name in all) __defProp(target, name, {
			get: all[name],
			enumerable: true
		});
		if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
		return target;
	};
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
	var __toCommonJS = (mod) => __hasOwnProp.call(mod, "module.exports") ? mod["module.exports"] : __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	//#endregion
	//#region modules/popup/assets/js/admin/admin.js
	var admin_default = class extends elementorModules.Module {
		static {
			__name(this, "default");
		}
		constructor() {
			var _elementorModules$adm;
			super();
			if (!((_elementorModules$adm = elementorModules.admin) === null || _elementorModules$adm === void 0 ? void 0 : _elementorModules$adm.MenuHandler)) return;
			new elementorModules.admin.MenuHandler({ path: "edit.php?post_type=elementor_library&tabs_group=popup&elementor_library_type=popup" });
		}
	};
	//#endregion
	//#region \0@oxc-project+runtime@0.140.0/helpers/esm/checkPrivateRedeclaration.js
	function _checkPrivateRedeclaration(e, t) {
		if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
	}
	//#endregion
	//#region \0@oxc-project+runtime@0.140.0/helpers/esm/classPrivateFieldInitSpec.js
	function _classPrivateFieldInitSpec(e, t, a) {
		_checkPrivateRedeclaration(e, t), t.set(e, a);
	}
	//#endregion
	//#region \0@oxc-project+runtime@0.140.0/helpers/esm/assertClassBrand.js
	function _assertClassBrand(e, t, n) {
		if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
		throw new TypeError("Private element is not present on this object");
	}
	//#endregion
	//#region \0@oxc-project+runtime@0.140.0/helpers/esm/classPrivateFieldGet2.js
	function _classPrivateFieldGet2(s, a) {
		return s.get(_assertClassBrand(s, a));
	}
	//#endregion
	//#region license/assets/js/admin.js
	var _actionLinks = /* @__PURE__ */ new WeakMap();
	var Module = class extends elementorModules.Module {
		constructor(..._args) {
			super(..._args);
			_classPrivateFieldInitSpec(this, _actionLinks, [{
				href: "elementor_pro_renew_license_menu_link",
				external_url: "https://go.elementor.com/wp-menu-renew/"
			}, {
				href: "elementor_pro_upgrade_license_menu_link",
				external_url: "https://go.elementor.com/go-pro-advanced-elementor-menu/"
			}]);
		}
		onInit() {
			this.assignMenuItemActions();
			this.assignProLicenseActivateEvent();
		}
		assignMenuItemActions() {
			window.addEventListener("DOMContentLoaded", () => {
				_classPrivateFieldGet2(_actionLinks, this).forEach((item) => {
					const link = document.querySelector(`a[href="${item.href}"]`);
					if (!link) return;
					link.addEventListener("click", (e) => {
						e.preventDefault();
						window.open(item.external_url, "_blank");
					});
				});
			});
		}
		assignProLicenseActivateEvent() {
			window.addEventListener("DOMContentLoaded", () => {
				const activateButton = document.querySelector(".button-primary[href*=\"elementor-connect\"]");
				if (activateButton) activateButton.addEventListener("click", () => {
					var _window$elementorComm;
					var _window$elementorComm2;
					var _eventsManager$dispat;
					if (!((_window$elementorComm = window.elementorCommon) === null || _window$elementorComm === void 0 || (_window$elementorComm = _window$elementorComm.config) === null || _window$elementorComm === void 0 || (_window$elementorComm = _window$elementorComm.experimentalFeatures) === null || _window$elementorComm === void 0 ? void 0 : _window$elementorComm.editor_events)) return;
					const eventsManager = ((_window$elementorComm2 = window.elementorCommon) === null || _window$elementorComm2 === void 0 ? void 0 : _window$elementorComm2.eventsManager) || {};
					const dispatchEvent = (_eventsManager$dispat = eventsManager.dispatchEvent) === null || _eventsManager$dispat === void 0 ? void 0 : _eventsManager$dispat.bind(eventsManager);
					dispatchEvent === null || dispatchEvent === void 0 || dispatchEvent("pro_license_activate", {
						app_type: "editor",
						location: "Elementor WP-admin pages",
						secondaryLocation: "license page",
						trigger: "click"
					});
				});
			});
		}
	};
	//#endregion
	//#region modules/library/assets/js/admin/edit-button.js
	var require_edit_button = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = function() {
			var self = this;
			self.init = function() {
				jQuery(document).on("change", ".elementor-widget-template-select", function() {
					var $this = jQuery(this);
					var templateID = $this.val();
					var $editButton = $this.parents("p").find(".elementor-edit-template");
					if ("page" !== $this.find("[value=\"" + templateID + "\"]").data("type")) {
						$editButton.hide();
						return;
					}
					var editUrl = elementorAdmin.config.home_url + "?p=" + templateID + "&elementor";
					$editButton.prop("href", editUrl).show();
				});
			};
			self.init();
		};
	}));
	//#endregion
	//#region modules/library/assets/js/admin/shortcode-textarea.js
	var require_shortcode_textarea = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = function() {
			const resizeAllTextareas = () => {
				document.querySelectorAll(".elementor-shortcode-textarea").forEach((textarea) => {
					textarea.style.height = "auto";
					textarea.style.height = textarea.scrollHeight + 5 + "px";
				});
			};
			const init = () => {
				resizeAllTextareas();
				window.addEventListener("resize", () => {
					resizeAllTextareas();
				});
				document.addEventListener("click", (event) => {
					if (event.target.matches("button.toggle-row")) resizeAllTextareas();
				});
			};
			init();
		};
	}));
	//#endregion
	//#region modules/library/assets/js/admin.js
	var require_admin$5 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = function() {
			var EditButton = require_edit_button();
			var ShortcodeTextarea = require_shortcode_textarea();
			this.editButton = new EditButton();
			this.shortcodeTextarea = new ShortcodeTextarea();
		};
	}));
	//#endregion
	//#region modules/forms/assets/js/admin/api-validations.js
	var require_api_validations$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = function(key, fieldID) {
			var self = this;
			self.cacheElements = function() {
				this.cache = {
					$button: jQuery("#elementor_pro_" + key + "_button"),
					$apiKeyField: jQuery("#elementor_pro_" + key),
					$apiUrlField: jQuery("#elementor_pro_" + fieldID)
				};
			};
			self.bindEvents = function() {
				this.cache.$button.on("click", function(event) {
					event.preventDefault();
					self.validateApi();
				});
				this.cache.$apiKeyField.on("change", function() {
					self.setState("clear");
				});
			};
			self.validateApi = function() {
				this.setState("loading");
				var apiKey = this.cache.$apiKeyField.val();
				if ("" === apiKey) {
					this.setState("clear");
					return;
				}
				if (this.cache.$apiUrlField.length && "" === this.cache.$apiUrlField.val()) {
					this.setState("clear");
					return;
				}
				jQuery.post(ajaxurl, {
					action: self.cache.$button.data("action"),
					api_key: apiKey,
					api_url: this.cache.$apiUrlField.val(),
					_nonce: self.cache.$button.data("nonce")
				}).done(function(data) {
					if (data.success) self.setState("success");
					else self.setState("error");
				}).fail(function() {
					self.setState();
				});
			};
			self.setState = function(type) {
				var classes = [
					"loading",
					"success",
					"error"
				];
				var currentClass;
				var classIndex;
				for (classIndex in classes) {
					currentClass = classes[classIndex];
					if (type === currentClass) this.cache.$button.addClass(currentClass);
					else this.cache.$button.removeClass(currentClass);
				}
			};
			self.init = function() {
				this.cacheElements();
				this.bindEvents();
			};
			self.init();
		};
	}));
	//#endregion
	//#region modules/forms/assets/js/admin.js
	var require_admin$4 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = function() {
			var _document$querySelect;
			var ApiValidations = require_api_validations$1();
			this.dripButton = new ApiValidations("drip_api_token");
			this.getResponse = new ApiValidations("getresponse_api_key");
			this.convertKit = new ApiValidations("convertkit_api_key");
			this.mailChimp = new ApiValidations("mailchimp_api_key");
			this.mailerLite = new ApiValidations("mailerlite_api_key");
			this.activeCcampaign = new ApiValidations("activecampaign_api_key", "activecampaign_api_url");
			(_document$querySelect = document.querySelector(".e-notice--cta.e-notice--dismissible[data-notice_id=\"site_mailer_forms_submissions_notice\"] a.e-button--cta")) === null || _document$querySelect === void 0 || _document$querySelect.addEventListener("click", function() {
				const source = $(this).closest(".e-notice").data("source") || "sm-submission-install";
				elementorCommon.ajax.addRequest("elementor_site_mailer_campaign", { data: { source } });
			});
		};
	}));
	//#endregion
	//#region modules/assets-manager/assets/js/admin/custom-assets-base.js
	var CustomAssetsBase;
	var init_custom_assets_base = __esmMin((() => {
		CustomAssetsBase = class extends elementorModules.ViewModule {
			showAlertDialog(id, message, onConfirm = false, onHide = false) {
				const alertData = {
					id,
					message
				};
				if (onConfirm) alertData.onConfirm = onConfirm;
				if (onHide) alertData.onHide = onHide;
				if (!this.alertWidget) this.alertWidget = elementorCommon.dialogsManager.createWidget("alert", alertData);
				this.alertWidget.show();
			}
			onDialogDismiss() {
				this.elements.$publishButton.removeClass("disabled");
				this.elements.$publishButtonSpinner.removeClass("is-active");
			}
			handleSubmit(event) {
				if (this.fileWasUploaded) return;
				if (this.checkInputsForValues()) {
					this.fileWasUploaded = true;
					this.elements.$postForm.trigger("submit");
					return;
				}
				event.preventDefault();
				this.showAlertDialog("noData", this.getSettings("notice"), () => this.onDialogDismiss(), () => this.onDialogDismiss());
				return false;
			}
			bindEvents() {
				this.elements.$postForm.on("submit", this.handleSubmit.bind(this));
			}
		};
	}));
	//#endregion
	//#region modules/assets-manager/assets/js/admin/fields/elementor-pro-upload.js
	var require_elementor_pro_upload = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = {
			$btn: null,
			fileId: null,
			fileUrl: null,
			fileFrame: [],
			selectors: {
				uploadBtnClass: "elementor-upload-btn",
				clearBtnClass: "elementor-upload-clear-btn",
				uploadBtn: ".elementor-upload-btn",
				clearBtn: ".elementor-upload-clear-btn",
				inputURLField: ".elementor-field-file input[type=\"text\"]"
			},
			hasValue() {
				return "" !== jQuery(this.fileUrl).val();
			},
			setLabels($el) {
				if (!this.hasValue()) $el.val($el.data("upload_text"));
				else $el.val($el.data("remove_text"));
			},
			setFields(el) {
				const self = this;
				self.fileUrl = jQuery(el).prev();
				self.fileId = jQuery(self.fileUrl).prev();
			},
			setUploadParams(ext, name) {
				const uploader = this.fileFrame[name].uploader.uploader;
				uploader.param("uploadType", ext);
				uploader.param("uploadTypeCaller", "elementor-admin-font-upload");
				uploader.param("post_id", this.getPostId());
			},
			setUploadMimeType(frame, ext) {
				const oldExtensions = _wpPluploadSettings.defaults.filters.mime_types[0].extensions;
				const self = this;
				frame.on("ready", () => {
					_wpPluploadSettings.defaults.filters.mime_types[0].extensions = ext;
				});
				frame.on("close", () => {
					_wpPluploadSettings.defaults.filters.mime_types[0].extensions = oldExtensions;
					self.replaceButtonClass(self.$btn);
				});
			},
			replaceButtonClass(el) {
				if (this.hasValue()) jQuery(el).removeClass(this.selectors.uploadBtnClass).addClass(this.selectors.clearBtnClass);
				else jQuery(el).removeClass(this.selectors.clearBtnClass).addClass(this.selectors.uploadBtnClass);
				this.setLabels(el);
			},
			uploadFile(el) {
				const self = this;
				const $el = jQuery(el);
				const mime = $el.attr("data-mime_type") || "";
				const ext = $el.attr("data-ext") || false;
				const name = $el.attr("id");
				if ("undefined" !== typeof self.fileFrame[name]) {
					if (ext) self.setUploadParams(ext, name);
					self.fileFrame[name].open();
					return;
				}
				self.fileFrame[name] = wp.media({
					library: { type: [...mime.split(","), mime.split(",").join("")] },
					title: $el.data("box_title"),
					button: { text: $el.data("box_action") },
					multiple: false
				});
				self.fileFrame[name].on("select", function() {
					const attachment = self.fileFrame[name].state().get("selection").first().toJSON();
					jQuery(self.fileId).val(attachment.id);
					jQuery(self.fileUrl).val(attachment.url);
					self.replaceButtonClass(el);
					self.updatePreview(el);
				});
				self.fileFrame[name].on("open", () => {
					const selectedId = this.fileId.val();
					if (!selectedId) return;
					self.fileFrame[name].state().get("selection").add(wp.media.attachment(selectedId));
				});
				self.setUploadMimeType(self.fileFrame[name], ext);
				self.fileFrame[name].open();
				if (ext) self.setUploadParams(ext, name);
			},
			updatePreview(el) {
				const self = this;
				const $ul = jQuery(el).parent().find("ul");
				const $li = jQuery("<li>");
				const showUrlType = jQuery(el).data("preview_anchor") || "full";
				$ul.html("");
				if (self.hasValue() && "none" !== showUrlType) {
					let anchor = jQuery(self.fileUrl).val();
					if ("full" !== showUrlType) anchor = anchor.substring(anchor.lastIndexOf("/") + 1);
					$li.html("<a href=\"" + jQuery(self.fileUrl).val() + "\" download>" + anchor + "</a>");
					$ul.append($li);
				}
			},
			setup() {
				const self = this;
				jQuery(self.selectors.uploadBtn + ", " + self.selectors.clearBtn).each(function() {
					self.setFields(jQuery(this));
					self.updatePreview(jQuery(this));
					self.setLabels(jQuery(this));
					self.replaceButtonClass(jQuery(this));
				});
			},
			getPostId() {
				return jQuery("#post_ID").val();
			},
			handleUploadClick(event) {
				event.preventDefault();
				const $element = jQuery(event.target);
				if ("text" === $element.attr("type")) return $element.next().removeClass(this.selectors.clearBtnClass).addClass(this.selectors.uploadBtnClass).trigger("click");
				this.$btn = $element;
				this.setFields($element);
				this.uploadFile($element);
			},
			init() {
				const self = this, { uploadBtn, inputURLField, clearBtn } = this.selectors, handleUpload = (event) => this.handleUploadClick(event);
				jQuery(document).on("click", uploadBtn, handleUpload);
				jQuery(document).on("click", inputURLField, (event) => {
					if ("" !== event.target.value) handleUpload(event);
				});
				jQuery(document).on("click", clearBtn, function(event) {
					event.preventDefault();
					const $element = jQuery(this);
					self.setFields($element);
					jQuery(self.fileUrl).val("");
					jQuery(self.fileId).val("");
					self.updatePreview($element);
					self.replaceButtonClass($element);
				});
				this.setup();
				jQuery(document).on("onRepeaterNewRow", function() {
					self.setup();
				});
			}
		};
	}));
	//#endregion
	//#region modules/assets-manager/assets/js/admin/fields/elementor-pro-repeater.js
	var require_elementor_pro_repeater = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = {
			selectors: {
				add: ".add-repeater-row",
				remove: ".remove-repeater-row",
				toggle: ".toggle-repeater-row",
				close: ".close-repeater-row",
				sort: ".sort-repeater-row",
				table: ".form-table",
				block: ".repeater-block",
				repeaterLabel: ".repeater-title",
				repeaterField: ".elementor-field-repeater"
			},
			counters: [],
			trigger(eventName, params) {
				jQuery(document).trigger(eventName, params);
			},
			triggerHandler(eventName, params) {
				return jQuery(document).triggerHandler(eventName, params);
			},
			countBlocks($btn) {
				return $btn.closest(this.selectors.repeaterField).find(this.selectors.block).length || 0;
			},
			add(btn) {
				var self = this;
				var $btn = jQuery(btn);
				var id = $btn.data("template-id");
				var repeaterBlock;
				if (!Object.prototype.hasOwnProperty.call(self.counters, id)) self.counters[id] = self.countBlocks($btn);
				self.counters[id] += 1;
				repeaterBlock = jQuery("#" + id).html();
				repeaterBlock = self.replaceAll("__counter__", self.counters[id], repeaterBlock);
				$btn.before(repeaterBlock);
				self.trigger("onRepeaterNewRow", [$btn, $btn.prev()]);
			},
			remove(btn) {
				var self = this;
				jQuery(btn).closest(self.selectors.block).remove();
				self.trigger("onRepeaterRemoveRow", [btn]);
			},
			toggle(btn) {
				var self = this;
				var $btn = jQuery(btn);
				var $table = $btn.closest(self.selectors.block).find(self.selectors.table);
				var $toggleLabel = $btn.closest(self.selectors.block).find(self.selectors.repeaterLabel);
				$table.toggle(0, function() {
					if ($table.is(":visible")) {
						$table.closest(self.selectors.block).addClass("block-visible");
						self.trigger("onRepeaterToggleVisible", [
							$btn,
							$table,
							$toggleLabel
						]);
					} else {
						$table.closest(self.selectors.block).removeClass("block-visible");
						self.trigger("onRepeaterToggleHidden", [
							$btn,
							$table,
							$toggleLabel
						]);
					}
				});
				$toggleLabel.toggle();
				self.updateRowLabel(btn);
			},
			close(btn) {
				var self = this;
				var $btn = jQuery(btn);
				var $table = $btn.closest(self.selectors.block).find(self.selectors.table);
				var $toggleLabel = $btn.closest(self.selectors.block).find(self.selectors.repeaterLabel);
				$table.closest(self.selectors.block).removeClass("block-visible");
				$table.hide();
				self.trigger("onRepeaterToggleHidden", [
					$btn,
					$table,
					$toggleLabel
				]);
				$toggleLabel.show();
				self.updateRowLabel(btn);
			},
			updateRowLabel(btn) {
				var self = this;
				var $btn = jQuery(btn);
				var $table = $btn.closest(self.selectors.block).find(self.selectors.table);
				var $toggleLabel = $btn.closest(self.selectors.block).find(self.selectors.repeaterLabel);
				var selector = $toggleLabel.data("selector");
				if (typeof selector !== "undefined" && false !== selector) {
					var value = false;
					var std = $toggleLabel.data("default");
					if ($table.find(selector).length) value = $table.find(selector).val();
					var computedLabel = self.triggerHandler("repeaterComputedLabel", [
						$table,
						$toggleLabel,
						value
					]);
					if (void 0 !== computedLabel && false !== computedLabel) value = computedLabel;
					if (void 0 === value || false === value) value = std;
					$toggleLabel.html(value);
				}
			},
			replaceAll(search, replace, string) {
				return string.replace(new RegExp(search, "g"), replace);
			},
			init() {
				var self = this;
				jQuery(document).on("click", this.selectors.add, function(event) {
					event.preventDefault();
					self.add(jQuery(this), event);
				}).on("click", this.selectors.remove, function(event) {
					event.preventDefault();
					if (!confirm(jQuery(this).data("confirm").toString())) return;
					self.remove(jQuery(this), event);
				}).on("click", this.selectors.toggle, function(event) {
					event.preventDefault();
					event.stopPropagation();
					self.toggle(jQuery(this), event);
				}).on("click", this.selectors.close, function(event) {
					event.preventDefault();
					event.stopPropagation();
					self.close(jQuery(this), event);
				});
				jQuery(this.selectors.toggle).each(function() {
					self.updateRowLabel(jQuery(this));
				});
				this.trigger("onRepeaterLoaded", [this]);
			}
		};
	}));
	//#endregion
	//#region modules/assets-manager/assets/js/admin/elementor-font-manager.js
	var import_elementor_pro_upload, import_elementor_pro_repeater, CustomFontsManager;
	var init_elementor_font_manager = __esmMin((() => {
		init_custom_assets_base();
		import_elementor_pro_upload = /* @__PURE__ */ __toESM(require_elementor_pro_upload());
		import_elementor_pro_repeater = /* @__PURE__ */ __toESM(require_elementor_pro_repeater());
		CustomFontsManager = class extends CustomAssetsBase {
			getDefaultSettings() {
				return {
					fields: {
						upload: import_elementor_pro_upload.default,
						repeater: import_elementor_pro_repeater.default
					},
					selectors: {
						editPageClass: "post-type-elementor_font",
						title: "#title",
						repeaterBlock: ".repeater-block",
						repeaterTitle: ".repeater-title",
						removeRowBtn: ".remove-repeater-row",
						editRowBtn: ".toggle-repeater-row",
						closeRowBtn: ".close-repeater-row",
						styleInput: ".font_style",
						weightInput: ".font_weight",
						customFontsMetaBox: "#elementor-font-custommetabox",
						closeHandle: "button.handlediv",
						toolbar: ".elementor-field-toolbar",
						inlinePreview: ".inline-preview",
						fileUrlInput: ".elementor-field-file input[type=\"text\"]",
						postForm: "#post",
						publishButton: "#publish",
						publishButtonSpinner: "#publishing-action > .spinner"
					},
					notice: (0, _wordpress_i18n.__)("Choose a font to publish.", "elementor-pro"),
					fontLabelTemplate: "<ul class=\"row-font-label\"><li class=\"row-font-weight\">{{weight}}</li><li class=\"row-font-style\">{{style}}</li><li class=\"row-font-preview\">{{preview}}</li>{{toolbar}}</ul>"
				};
			}
			getDefaultElements() {
				const selectors = this.getSettings("selectors");
				return {
					$postForm: jQuery(selectors.postForm),
					$publishButton: jQuery(selectors.publishButton),
					$publishButtonSpinner: jQuery(selectors.publishButtonSpinner),
					$closeHandle: jQuery(selectors.closeHandle),
					$customFontsMetaBox: jQuery(selectors.customFontsMetaBox),
					$title: jQuery(selectors.title)
				};
			}
			renderTemplate(tpl, data) {
				const re = /{{([^}}]+)?}}/g;
				let match;
				while (match = re.exec(tpl)) tpl = tpl.replace(match[0], data[match[1]]);
				return tpl;
			}
			ucFirst(string) {
				return string.charAt(0).toUpperCase() + string.slice(1);
			}
			getPreviewStyle($table) {
				const selectors = this.getSettings("selectors");
				const fontFamily = this.elements.$title.val();
				const style = $table.find("select" + selectors.styleInput).first().val();
				const weight = $table.find("select" + selectors.weightInput).first().val();
				return {
					style: this.ucFirst(style),
					weight: this.ucFirst(weight),
					styleAttribute: "font-family: " + fontFamily + " ;font-style: " + style + "; font-weight: " + weight + ";"
				};
			}
			updateRowLabel(event, $table) {
				const selectors = this.getSettings("selectors");
				const fontLabelTemplate = this.getSettings("fontLabelTemplate");
				const $block = $table.closest(selectors.repeaterBlock);
				const $deleteBtn = $block.find(selectors.removeRowBtn).first();
				const $editBtn = $block.find(selectors.editRowBtn).first();
				const $closeBtn = $block.find(selectors.closeRowBtn).first();
				const $toolbar = $table.find(selectors.toolbar).last().clone();
				const previewStyle = this.getPreviewStyle($table);
				if ($editBtn.length > 0) $editBtn.not(selectors.toolbar + " " + selectors.editRowBtn).remove();
				if ($closeBtn.length > 0) $closeBtn.not(selectors.toolbar + " " + selectors.closeRowBtn).remove();
				if ($deleteBtn.length > 0) $deleteBtn.not(selectors.toolbar + " " + selectors.removeRowBtn).remove();
				const toolbarHtml = jQuery("<li class=\"row-font-actions\">").append($toolbar)[0].outerHTML;
				return this.renderTemplate(fontLabelTemplate, {
					weight: "<span class=\"label\">Weight:</span>" + previewStyle.weight,
					style: "<span class=\"label\">Style:</span>" + previewStyle.style,
					preview: "<span style=\"" + previewStyle.styleAttribute + "\">Elementor is making the web beautiful</span>",
					toolbar: toolbarHtml
				});
			}
			onRepeaterToggleVisible(event, $btn, $table) {
				const selectors = this.getSettings("selectors");
				const $previewElement = $table.find(selectors.inlinePreview);
				const previewStyle = this.getPreviewStyle($table);
				$previewElement.attr("style", previewStyle.styleAttribute);
			}
			onRepeaterNewRow(event, $btn, $block) {
				const selectors = this.getSettings("selectors");
				$block.find(selectors.removeRowBtn).first().remove();
				$block.find(selectors.editRowBtn).first().remove();
				$block.find(selectors.closeRowBtn).first().remove();
			}
			maybeToggle(event) {
				event.preventDefault();
				const selectors = this.getSettings("selectors");
				if (jQuery(this).is(":visible") && !jQuery(event.target).hasClass(selectors.editRowBtn)) jQuery(this).find(selectors.editRowBtn).trigger("click");
			}
			onInputChange(event) {
				const $el = jQuery(event.target).next();
				const fields = this.getSettings("fields");
				fields.upload.setFields($el);
				fields.upload.setLabels($el);
				fields.upload.replaceButtonClass($el);
			}
			bindEvents() {
				const selectors = this.getSettings("selectors");
				jQuery(document).on("repeaterComputedLabel", this.updateRowLabel.bind(this)).on("onRepeaterToggleVisible", this.onRepeaterToggleVisible.bind(this)).on("onRepeaterNewRow", this.onRepeaterNewRow.bind(this)).on("click", selectors.repeaterTitle, this.maybeToggle.bind(this)).on("input", selectors.fileUrlInput, this.onInputChange.bind(this));
				super.bindEvents();
			}
			checkInputsForValues() {
				const selectors = this.getSettings("selectors");
				let hasValue = false;
				jQuery(selectors.fileUrlInput).each((index, element) => {
					if ("" !== jQuery(element).val()) {
						hasValue = true;
						return false;
					}
				});
				return hasValue;
			}
			removeCloseHandle() {
				this.elements.$closeHandle.remove();
				this.elements.$customFontsMetaBox.removeClass("closed").removeClass("postbox");
			}
			titleRequired() {
				this.elements.$title.prop("required", true);
			}
			onInit(...args) {
				const settings = this.getSettings();
				if (!jQuery("body").hasClass(settings.selectors.editPageClass)) return;
				super.onInit(...args);
				this.removeCloseHandle();
				this.titleRequired();
				settings.fields.upload.init();
				settings.fields.repeater.init();
				const $document = jQuery(document);
				const markMetaboxIfVariableFont = this.markMetaboxIfVariableFont.bind(this);
				jQuery("#add-variable-font").on("click", () => {
					jQuery(document).one("onRepeaterNewRow", (event, $repeaterBtn, $repeaterBlock) => {
						$repeaterBlock.find("input[name$=\"font_type]\"]").val("variable");
						markMetaboxIfVariableFont();
					});
					jQuery("#elementor-font-custommetabox").find(".add-repeater-row").trigger("click");
				});
				$document.on("onRepeaterNewRow", markMetaboxIfVariableFont);
				$document.on("onRepeaterRemoveRow", markMetaboxIfVariableFont);
				$document.on("change", "input[name$=\"variable_width]\"], input[name$=\"variable_weight]\"]", this.onFontVariableTypeChange);
				markMetaboxIfVariableFont();
			}
			markMetaboxIfVariableFont() {
				const $fontType = jQuery("input[name$=\"font_type]\"]");
				const $metaboxContent = jQuery(".elementor-metabox-content");
				$metaboxContent.removeClass("has-font-variable has-font-static");
				if (!$fontType.length) return;
				const hasVariableRow = "variable" === $fontType.val();
				if (hasVariableRow) $metaboxContent.addClass("has-font-variable", hasVariableRow);
				else $metaboxContent.addClass("has-font-static");
				jQuery("input[name$=\"variable_width]\"], input[name$=\"variable_weight]\"]").each(this.onFontVariableTypeChange);
			}
			onFontVariableTypeChange() {
				const $this = jQuery(this);
				$this.parents().eq(1).toggleClass("e-font-variable-hidden", !$this.is(":checked"));
			}
		};
	}));
	//#endregion
	//#region modules/assets-manager/assets/js/admin/fields/elementor-pro-dropzone.js
	var DropZoneField;
	var init_elementor_pro_dropzone = __esmMin((() => {
		DropZoneField = class extends elementorModules.ViewModule {
			getDefaultSettings() {
				return {
					droppedFiles: false,
					selectors: {
						dropZone: ".elementor-dropzone-field",
						input: ".elementor-dropzone-field [type=\"file\"]",
						label: ".elementor-dropzone-fieldlabel",
						errorMsg: ".elementor-dropzone-field.box__error span",
						restart: ".elementor-dropzone-field.box__restart",
						browseButton: ".elementor-dropzone-field .elementor--dropzone--upload__browse",
						postId: "#post_ID"
					},
					classes: {
						drag: "is-dragover",
						error: "is-error",
						success: "is-success",
						upload: "is-uploading"
					},
					onSuccess: null,
					onError: null
				};
			}
			getDefaultElements() {
				const elements = {};
				const selectors = this.getSettings("selectors");
				jQuery.each(selectors, (element, selector) => {
					elements["$" + element] = jQuery(selector);
				});
				return elements;
			}
			bindEvents() {
				const { $dropZone, $browseButton, $input } = this.elements;
				const { drag } = this.getSettings("classes");
				$browseButton.on("click", () => $input.trigger("click"));
				$dropZone.on("drag dragstart dragend dragover dragenter dragleave drop", (event) => {
					event.preventDefault();
					event.stopPropagation();
				}).on("dragover dragenter", () => {
					$dropZone.addClass(drag);
				}).on("dragleave dragend drop", () => {
					$dropZone.removeClass(drag);
				}).on("drop change", (event) => {
					if ("change" === event.type) this.setSettings("droppedFiles", event.originalEvent.target.files);
					else this.setSettings("droppedFiles", event.originalEvent.dataTransfer.files);
					this.handleUpload();
				});
			}
			handleUpload() {
				const droppedFiles = this.getSettings("droppedFiles");
				if (!droppedFiles) return;
				const { $input, $dropZone, $postId, $errorMsg } = this.elements, { error, success, upload } = this.getSettings("classes"), { onSuccess, onError } = this.getSettings(), ajaxData = new FormData(), fieldName = $input.attr("name"), actionKey = "pro_assets_manager_custom_icon_upload", self = this;
				Object.entries(droppedFiles).forEach((file) => {
					ajaxData.append(fieldName, file[1]);
				});
				ajaxData.append("actions", JSON.stringify({ pro_assets_manager_custom_icon_upload: {
					action: actionKey,
					data: { post_id: $postId.val() }
				} }));
				$dropZone.removeClass(success).removeClass(error);
				elementorCommon.ajax.send("ajax", {
					data: ajaxData,
					cache: false,
					enctype: "multipart/form-data",
					contentType: false,
					processData: false,
					complete: () => {
						$dropZone.removeClass(upload);
					},
					success: (response) => {
						const data = response.responses[actionKey];
						$dropZone.addClass(data.success ? success : error);
						if (data.success) {
							if (onSuccess) onSuccess(data, self);
						} else {
							$errorMsg.text(data.error);
							if (onError) onError(self, arguments);
						}
					},
					error: () => {
						if ("function" === typeof onError) onError(self, arguments);
					}
				});
			}
			onInit() {
				super.onInit();
				elementorCommon.elements.$document.trigger("onDropzoneLoaded", [this]);
			}
		};
	}));
	//#endregion
	//#region modules/assets-manager/assets/js/admin/elementor-custom-icons.js
	var CustomIcons;
	var init_elementor_custom_icons = __esmMin((() => {
		init_custom_assets_base();
		init_elementor_pro_dropzone();
		CustomIcons = class extends CustomAssetsBase {
			getDefaultSettings() {
				return {
					fields: { dropzone: DropZoneField },
					classes: {
						editPageClass: "post-type-elementor_icons",
						editPhp: "edit-php",
						hasIcons: "elementor--has-icons"
					},
					selectors: {
						editPageClass: "post-type-elementor_icons",
						title: "#title",
						metaboxContainer: "#elementor-custom-icons-metabox",
						metabox: ".elementor-custom-icons-metabox",
						closeHandle: "button.handlediv",
						iconsTemplate: "#elementor-icons-template",
						dataInput: "#elementor_custom_icon_set_config",
						dropzone: ".zip_upload",
						submitDelete: ".submitdelete",
						dayInput: "#hidden_jj",
						mmInput: "#hidden_mm",
						yearInput: "#hidden_aa",
						hourInput: "#hidden_hh",
						minuteInput: "#hidden_mn",
						publishButton: "#publish",
						publishButtonSpinner: "#publishing-action > .spinner",
						submitMetabox: "#postbox-container-1",
						postForm: "#post",
						fileInput: "#zip_upload",
						iconSetConfigInput: "#elementor_custom_icon_set_config"
					},
					templates: {
						icon: "<li><div class=\"icon\"><i class=\"{{icon}}\"></i><div class=\"icon-name\">{{label}}</div></div></li>",
						header: jQuery("#elementor-custom-icons-template-header").html(),
						footer: jQuery("#elementor-custom-icons-template-footer").html(),
						duplicatePrefix: jQuery("#elementor-custom-icons-template-duplicate-prefix").html()
					},
					notice: (0, _wordpress_i18n.__)("Upload an icon set to publish.", "elementor-pro")
				};
			}
			getDefaultElements() {
				const elements = {};
				const selectors = this.getSettings("selectors");
				jQuery.each(selectors, (element, selector) => {
					elements["$" + element] = jQuery(selector);
				});
				return elements;
			}
			bindEvents() {
				super.bindEvents();
				if ("" !== this.getData()) this.bindOnTitleChange();
			}
			bindOnTitleChange() {
				const { $title } = this.elements, onTitleInput = (event) => this.onTitleInput(event);
				$title.on("input change", onTitleInput);
			}
			removeCloseHandle() {
				const { $metaboxContainer } = this.elements;
				$metaboxContainer.find("h2").remove();
				$metaboxContainer.find("button").remove();
				$metaboxContainer.removeClass("closed").removeClass("postbox");
			}
			prepareIconName(icon) {
				const iconName = icon.replace("_", " ").replace("-", " ");
				return elementorCommon.helpers.upperCaseWords(iconName);
			}
			getCreatedOn() {
				const { $dayInput, $mmInput, $yearInput, $hourInput, $minuteInput } = this.elements;
				return {
					day: $dayInput.val(),
					mm: $mmInput.val(),
					year: $yearInput.val(),
					hour: $hourInput.val(),
					minute: $minuteInput.val()
				};
			}
			enqueueCSS(url) {
				if (!elementorCommon.elements.$document.find("link[href=\"" + url + "\"]").length) elementorCommon.elements.$document.find("link").last().after("<link href=\"" + url + "\" rel=\"stylesheet\" type=\"text/css\">");
			}
			setData(data) {
				this.elements.$dataInput.val(JSON.stringify(data));
			}
			getData() {
				const value = this.elements.$dataInput.val();
				return "" === value ? "" : JSON.parse(value);
			}
			renderIconList(config) {
				const iconTemplate = this.getSettings("templates.icon");
				return config.icons.map((icon) => {
					const data = {
						icon: config.displayPrefix + " " + config.prefix + icon,
						label: this.prepareIconName(icon)
					};
					return elementorCommon.compileTemplate(iconTemplate, data);
				}).join("\n");
			}
			renderIcons(config) {
				const { $metaboxContainer, $metabox, $submitMetabox } = this.elements;
				const { header, footer } = this.getSettings("templates");
				$metaboxContainer.addClass(this.getSettings("classes.hasIcons"));
				$submitMetabox.show();
				this.setData(config);
				this.enqueueCSS(config.url);
				$metabox.html("");
				$metaboxContainer.prepend(elementorCommon.compileTemplate(header, config));
				$metabox.append("<ul>" + this.renderIconList(config) + "</ul>");
				$metaboxContainer.append(elementorCommon.compileTemplate(footer, this.getCreatedOn()));
			}
			onTitleInput(event) {
				const data = this.getData();
				data.label = event.target.value;
				this.setData(data);
			}
			checkInputsForValues() {
				if ("" !== this.elements.$fileInput.val() || "" !== this.elements.$iconSetConfigInput.val()) return true;
				return false;
			}
			onSuccess(data) {
				if (data.data.errors) {
					let id;
					let message;
					jQuery.each(data.data.errors, (errorId, errorMessage) => {
						id = errorId;
						message = errorMessage;
						return false;
					});
					return this.showAlertDialog(id, message);
				}
				if (data.data.config.duplicate_prefix) {
					delete data.data.config.duplicatePrefix;
					return this.showAlertDialog("duplicate-prefix", this.getSettings("templates.duplicatePrefix"), () => this.saveInitialUpload(data.data.config));
				}
				this.saveInitialUpload(data.data.config);
			}
			saveInitialUpload(config) {
				this.setData(config);
				const { $publishButton, $title, $submitMetabox } = this.elements;
				$submitMetabox.show();
				if ("" === $title.val()) $title.val(config.name);
				this.fileWasUploaded = true;
				$publishButton.trigger("click");
			}
			onInit() {
				const { $body } = elementorCommon.elements, { editPageClass, editPhp } = this.getSettings("classes");
				if (!$body.hasClass(editPageClass) || $body.hasClass(editPhp)) return;
				super.onInit();
				this.removeCloseHandle();
				const dropzoneField = new (this.getSettings("fields.dropzone"))(), config = this.getData(), { $dropzone, $metaboxContainer } = this.elements;
				if ("" === config) {
					$dropzone.show("fast");
					dropzoneField.setSettings("onSuccess", (...args) => this.onSuccess(...args));
				} else this.renderIcons(config);
				$metaboxContainer.show("fast");
			}
		};
	}));
	//#endregion
	//#region modules/assets-manager/assets/js/admin/typekit.js
	var require_typekit = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = function() {
			var self = this;
			self.cacheElements = function() {
				this.cache = {
					$button: jQuery("#elementor_pro_typekit_validate_button"),
					$kitIdField: jQuery("#elementor_typekit-kit-id"),
					$dataLabelSpan: jQuery(".elementor-pro-typekit-data")
				};
			};
			self.bindEvents = function() {
				this.cache.$button.on("click", function(event) {
					event.preventDefault();
					self.fetchFonts();
				});
				this.cache.$kitIdField.on("change", function() {
					self.setState("clear");
				});
			};
			self.fetchFonts = function() {
				this.setState("loading");
				this.cache.$dataLabelSpan.addClass("hidden");
				var kitID = this.cache.$kitIdField.val();
				if ("" === kitID) {
					this.setState("clear");
					return;
				}
				jQuery.post(ajaxurl, {
					action: "elementor_pro_admin_fetch_fonts",
					kit_id: kitID,
					_nonce: self.cache.$button.data("nonce")
				}).done(function(data) {
					if (data.success) {
						var template = self.cache.$button.data("found");
						template = template.replace("{{count}}", data.data.count);
						self.cache.$dataLabelSpan.html(template).removeClass("hidden");
						self.setState("success");
					} else self.setState("error");
				}).fail(function() {
					self.setState();
				});
			};
			self.setState = function(type) {
				var classes = [
					"loading",
					"success",
					"error"
				];
				var currentClass;
				var classIndex;
				for (classIndex in classes) {
					currentClass = classes[classIndex];
					if (type === currentClass) this.cache.$button.addClass(currentClass);
					else this.cache.$button.removeClass(currentClass);
				}
			};
			self.init = function() {
				this.cacheElements();
				this.bindEvents();
			};
			self.init();
		};
	}));
	//#endregion
	//#region modules/assets-manager/assets/js/admin/font-awesome-pro.js
	var font_awesome_pro_exports = /* @__PURE__ */ __exportAll({ default: () => font_awesome_pro_default });
	var font_awesome_pro_default;
	var init_font_awesome_pro = __esmMin((() => {
		font_awesome_pro_default = class extends elementorModules.ViewModule {
			static {
				__name(this, "default");
			}
			getDefaultSettings() {
				return { selectors: {
					button: "#elementor_pro_fa_pro_validate_button",
					kitIdField: "#elementor_font_awesome_pro_kit_id"
				} };
			}
			getDefaultElements() {
				const elements = {};
				const selectors = this.getSettings("selectors");
				jQuery.each(selectors, (element, selector) => {
					elements["$" + element] = jQuery(selector);
				});
				return elements;
			}
			bindEvents() {
				const { $button, $kitIdField } = this.elements;
				$button.on("click", (event) => {
					event.preventDefault();
					this.testKitUrl();
				});
				$kitIdField.on("change", () => {
					this.setState("clear");
				});
			}
			setState(type) {
				const classes = [
					"loading",
					"success",
					"error"
				], { $button } = this.elements;
				let currentClass;
				let classIndex;
				for (classIndex in classes) {
					currentClass = classes[classIndex];
					if (type === currentClass) $button.addClass(currentClass);
					else $button.removeClass(currentClass);
				}
			}
			testKitUrl() {
				this.setState("loading");
				const self = this;
				const kitID = this.elements.$kitIdField.val();
				if ("" === kitID) {
					this.setState("clear");
					return;
				}
				jQuery.ajax({
					url: "https://kit.fontawesome.com/" + kitID + ".js",
					method: "GET",
					complete: (xhr) => {
						if (200 !== xhr.status) self.setState("error");
						else self.setState("success");
					}
				});
			}
		};
	}));
	//#endregion
	//#region modules/assets-manager/assets/js/admin.js
	var require_admin$3 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		init_elementor_font_manager();
		init_elementor_custom_icons();
		module.exports = function() {
			const TypekitAdmin = require_typekit();
			const CustomIcon = CustomIcons;
			const FontAwesomeProAdmin = (init_font_awesome_pro(), __toCommonJS(font_awesome_pro_exports)).default;
			this.fontManager = new CustomFontsManager();
			this.typekit = new TypekitAdmin();
			this.fontAwesomePro = new FontAwesomeProAdmin();
			this.customIcons = new CustomIcon();
		};
	}));
	//#endregion
	//#region modules/role-manager/assets/js/admin/role-mananger.js
	var require_role_mananger = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = function() {
			var self = this;
			self.cacheElements = function() {
				this.cache = {
					$checkBox: jQuery("input[name=\"elementor_exclude_user_roles[]\"]"),
					$advanced: jQuery("#elementor_advanced_role_manager")
				};
			};
			self.bindEvents = function() {
				this.cache.$checkBox.on("change", function(event) {
					event.preventDefault();
					self.checkBoxUpdate(jQuery(this));
				});
			};
			self.checkBoxUpdate = function($element) {
				var role = $element.val();
				if ($element.is(":checked")) self.cache.$advanced.find("div." + role).addClass("hidden");
				else self.cache.$advanced.find("div." + role).removeClass("hidden");
			};
			self.init = function() {
				if (!jQuery("body").hasClass("elementor_page_elementor-role-manager")) return;
				this.cacheElements();
				this.bindEvents();
			};
			self.init();
		};
	}));
	//#endregion
	//#region modules/role-manager/assets/js/admin.js
	var require_admin$2 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = function() {
			var AdvancedRoleManager = require_role_mananger();
			this.advancedRoleManager = new AdvancedRoleManager();
		};
	}));
	//#endregion
	//#region modules/theme-builder/assets/js/admin/create-template-dialog.js
	var require_create_template_dialog = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = function() {
			var selectors = {
				templateTypeInput: "#elementor-new-template__form__template-type",
				locationWrapper: "#elementor-new-template__form__location__wrapper",
				postTypeWrapper: "#elementor-new-template__form__post-type__wrapper"
			};
			var elements = {
				$templateTypeInput: null,
				$locationWrapper: null,
				$postTypeWrapper: null
			};
			var setElements = function() {
				jQuery.each(selectors, function(key, selector) {
					key = "$" + key;
					elements[key] = elementorNewTemplate.layout.getModal().getElements("content").find(selector);
				});
			};
			var setLocationFieldVisibility = function() {
				elements.$locationWrapper.toggle("section" === elements.$templateTypeInput.val());
				elements.$postTypeWrapper.toggle("single" === elements.$templateTypeInput.val());
			};
			const setPostType = () => {
				const postType = { "error-404": "not_found404" }[elements.$templateTypeInput.val()] || "";
				elements.$postTypeWrapper.find("select").val(postType);
			};
			var run = function() {
				setElements();
				setLocationFieldVisibility();
				elements.$templateTypeInput.on("change", () => {
					setLocationFieldVisibility();
					setPostType();
				});
			};
			this.init = function() {
				if (!window.elementorNewTemplate) return;
				elementorNewTemplate.layout.getModal();
				run();
			};
			jQuery(setTimeout.bind(window, this.init));
		};
	}));
	//#endregion
	//#region modules/theme-builder/assets/js/admin/admin.js
	var require_admin$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = function() {
			var CreateTemplateDialog = require_create_template_dialog();
			this.createTemplateDialog = new CreateTemplateDialog();
		};
	}));
	//#endregion
	//#region modules/payments/assets/js/admin/api-validations.js
	var require_api_validations = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = function(key) {
			var self = this;
			self.cacheElements = function() {
				this.cache = {
					$button: jQuery("#elementor_pro_" + key + "_button"),
					$apiKeyField: jQuery("#elementor_pro_" + key)
				};
			};
			self.bindEvents = function() {
				this.cache.$button.on("click", function(event) {
					event.preventDefault();
					self.validateApi();
				});
				this.cache.$apiKeyField.on("change", function() {
					self.setState("clear");
				});
			};
			self.validateApi = function() {
				this.setState("loading");
				var apiKey = this.cache.$apiKeyField.val();
				if ("" === apiKey) {
					this.setState("clear");
					return;
				}
				jQuery.post(ajaxurl, {
					action: self.cache.$button.data("action"),
					secret_key: apiKey,
					_nonce: self.cache.$button.data("nonce")
				}).done(function(data) {
					if (data.success) self.setState("success");
					else self.setState("error");
				}).fail(function() {
					self.setState();
				});
			};
			self.setState = function(type) {
				var classes = [
					"loading",
					"success",
					"error"
				];
				var currentClass;
				var classIndex;
				for (classIndex in classes) {
					currentClass = classes[classIndex];
					if (type === currentClass) this.cache.$button.addClass(currentClass);
					else this.cache.$button.removeClass(currentClass);
				}
			};
			self.init = function() {
				this.cacheElements();
				this.bindEvents();
			};
			self.init();
		};
	}));
	//#endregion
	//#region modules/payments/assets/js/admin.js
	var require_admin = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = function() {
			const ApiValidations = require_api_validations();
			this.stripeTestSecretKey = new ApiValidations("stripe_test_secret_key");
			this.stripeLiveSecretKey = new ApiValidations("stripe_live_secret_key");
		};
	}));
	//#endregion
	//#region assets/dev/js/admin/admin.js
	var modules = {
		widget_template_edit_button: require_admin$5(),
		forms_integrations: require_admin$4(),
		AssetsManager: require_admin$3(),
		RoleManager: require_admin$2(),
		ThemeBuilder: require_admin$1(),
		StripeIntegration: require_admin(),
		License: Module
	};
	window.elementorProAdmin = {
		widget_template_edit_button: new modules.widget_template_edit_button(),
		forms_integrations: new modules.forms_integrations(),
		assetsManager: new modules.AssetsManager(),
		roleManager: new modules.RoleManager(),
		themeBuilder: new modules.ThemeBuilder(),
		StripeIntegration: new modules.StripeIntegration(),
		popup: new admin_default(),
		license: new modules.License()
	};
	jQuery(function() {
		elementorProAdmin.roleManager.advancedRoleManager.init();
	});
	//#endregion
})(wp.i18n);

//# sourceMappingURL=admin.js.map
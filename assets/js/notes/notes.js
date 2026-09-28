/*! pro-elements - v4.3.0 - 22-09-2026 */
(function(_wordpress_i18n, react, react_dom) {
	//#region \0rolldown/runtime.js
	var __create = Object.create;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
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
	//#endregion
	react = __toESM(react);
	//#region modules/notes/assets/js/commands/clear-active.js
	var ClearActive = class extends $e.modules.CommandBase {
		apply({ id = null } = {}) {
			const { store } = window.top.$e, { actions } = store.get("notes");
			store.dispatch(actions.clearActive(id));
		}
	};
	//#endregion
	//#region modules/notes/assets/js/commands/close.js
	var Close = class extends $e.modules.CommandBase {
		apply() {
			this.component.close();
		}
	};
	//#endregion
	//#region modules/notes/assets/js/app/models/base-model.js
	var BaseModel = class {
		/**
		* Using init and not the default constructor because there is a problem to fill the instance
		* dynamically in the constructor.
		*
		* @param {Object} data all the properties
		* @return {BaseModel} Instance of base model
		*/
		init(data = {}) {
			Object.entries(data).forEach(([key, value]) => {
				this[key] = value;
			});
			return this;
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
	//#region modules/notes/assets/js/app/models/user.js
	var User = class User extends BaseModel {
		constructor(..._args) {
			super(..._args);
			_defineProperty(this, "id", null);
			_defineProperty(this, "name", "");
			_defineProperty(this, "slug", "");
			_defineProperty(this, "avatarUrls", {
				24: null,
				48: null,
				96: null
			});
			_defineProperty(this, "capabilities", {});
		}
		/**
		* Create a user from server response
		*
		* @param {Object} data
		*/
		static createFromResponse(data) {
			var _data$capabilities;
			var _data$capabilities2;
			return new User().init({
				id: data.id,
				name: data.name,
				slug: data.slug,
				avatarUrls: data.avatar_urls,
				capabilities: {
					notes: { read: (_data$capabilities = data.capabilities) === null || _data$capabilities === void 0 || (_data$capabilities = _data$capabilities.notes) === null || _data$capabilities === void 0 ? void 0 : _data$capabilities.can_read },
					post: { edit: (_data$capabilities2 = data.capabilities) === null || _data$capabilities2 === void 0 || (_data$capabilities2 = _data$capabilities2.post) === null || _data$capabilities2 === void 0 ? void 0 : _data$capabilities2.can_edit }
				}
			});
		}
		/**
		* A factory to create a User model when a user was deleted or not exist for some reason.
		*
		* @param {string} name
		* @return {BaseModel} user
		*/
		static createDeleted(name = "") {
			const { avatar_defaults: avatarUrls } = window.top.$e.components.get("notes").config.urls;
			return new User().init({
				name: [name, (0, _wordpress_i18n.__)("(deleted user)", "elementor-pro")].join(" "),
				avatarUrls
			});
		}
	};
	//#endregion
	//#region modules/notes/assets/js/app/models/document.js
	var Document = class Document extends BaseModel {
		constructor(..._args) {
			super(..._args);
			_defineProperty(this, "id", void 0);
			_defineProperty(this, "type", void 0);
			_defineProperty(this, "typeTitle", void 0);
		}
		/**
		* Create a document from server response
		*
		* @param {Object} data
		*/
		static createFromResponse(data) {
			return new Document().init({
				id: data.id,
				type: data.type,
				typeTitle: data.type_title
			});
		}
	};
	//#endregion
	//#region modules/notes/assets/js/app/models/note.js
	var Note = class Note extends BaseModel {
		constructor(..._args) {
			super(..._args);
			_defineProperty(this, "id", null);
			_defineProperty(this, "parentId", 0);
			_defineProperty(this, "elementId", null);
			_defineProperty(this, "content", "");
			_defineProperty(this, "position", {
				x: 0,
				y: 0
			});
			_defineProperty(this, "repliesCount", 0);
			_defineProperty(this, "unreadRepliesCount", 0);
			_defineProperty(this, "replies", []);
			_defineProperty(this, "author", null);
			_defineProperty(this, "readers", []);
			_defineProperty(this, "isRead", false);
			_defineProperty(this, "isResolved", false);
			_defineProperty(this, "routeUrl", "");
			_defineProperty(this, "routeTitle", "");
			_defineProperty(this, "userCan", {});
			_defineProperty(this, "createdAt", null);
			_defineProperty(this, "updatedAt", null);
			_defineProperty(this, "lastActivityAt", null);
			_defineProperty(this, "_formattedLastActivityAt", "");
			_defineProperty(this, "_formattedCreatedAt", "");
		}
		/**
		* Create a note from server response
		*
		* @param {Object} data
		*/
		static createFromResponse(data) {
			return new Note().init({
				id: data.id,
				parentId: data.parent_id,
				elementId: data.element_id,
				content: data.content,
				position: data.position,
				repliesCount: data.replies_count,
				unreadRepliesCount: data.unread_replies_count,
				replies: data.replies.map((reply) => Note.createFromResponse(reply)),
				author: data.author ? User.createFromResponse(data.author) : User.createDeleted(data.author_display_name),
				document: data.document ? Document.createFromResponse(data.document) : null,
				readers: data.readers ? data.readers.map((reader) => User.createFromResponse(reader)) : [],
				isRead: data.is_read,
				isResolved: data.is_resolved,
				routeUrl: data.route_url,
				routeTitle: data.route_title,
				userCan: data.user_can,
				createdAt: new Date(data.created_at),
				updatedAt: new Date(data.updated_at),
				lastActivityAt: new Date(data.last_activity_at)
			});
		}
		/**
		* TODO: Change to WP site settings format.
		*
		* @return {string} Last activity date formatted.
		*/
		getFormattedLastActivityAt() {
			if (!this._formattedLastActivityAt) this._formattedLastActivityAt = this.lastActivityAt.toLocaleString();
			return this._formattedLastActivityAt;
		}
		/**
		* TODO: Change to WP site settings format.
		*
		* @return {string} Created at date formatted.
		*/
		getFormattedCreatedAt() {
			if (!this._formattedCreatedAt) this._formattedCreatedAt = this.createdAt.toLocaleString();
			return this._formattedCreatedAt;
		}
		/**
		* Get the note deep link.
		*
		* @return {string} url
		*/
		getURL() {
			const id = this.isReply() ? this.parentId : this.id;
			return this.constructor.getURL(id);
		}
		/**
		* Get a note deep link by ID.
		*
		* @param {number} id
		*
		* @return {string} url
		*/
		static getURL(id) {
			const { route } = window.top.$e.components.get("notes").config;
			return route.note_url_pattern.replace("{{NOTE_ID}}", id);
		}
		/**
		* Check if the current note or one of its replies are unread.
		*
		* @return {boolean} is unread thread
		*/
		isUnreadThread() {
			return this.isThread() && (!this.isRead || this.unreadRepliesCount > 0);
		}
		/**
		* Determine if the Note is a Thread.
		*
		* @return {boolean} - Is thread.
		*/
		isThread() {
			return 0 === this.parentId;
		}
		/**
		* Determine if the Note is a Reply.
		*
		* @return {boolean} - Is reply.
		*/
		isReply() {
			return !this.isThread();
		}
	};
	//#endregion
	//#region modules/notes/assets/js/services/copy-to-clipboard/index.js
	/**
	* Check if there is access to the clipboard API
	* (Usually, when a website doesn't have an SSL certificate, the browser won't expose the clipboard API).
	*
	* @return {boolean} can copy to clipboard?
	*/
	function canCopyToClipboard() {
		var _navigator;
		return !!((_navigator = navigator) === null || _navigator === void 0 ? void 0 : _navigator.clipboard);
	}
	/**
	* Will copy value to the clipboard
	*
	* @param {string} value
	*/
	function copyToClipboard(value) {
		if (!canCopyToClipboard()) throw new Error("Cannot copy to clipboard, please make sure you are using SSL in your website.");
		navigator.clipboard.writeText(value);
	}
	//#endregion
	//#region modules/notes/assets/js/commands/copy-link.js
	/**
	* Copy note deep link by ID.
	*/
	var CopyLink = class extends $e.modules.CommandBase {
		validateArgs(args = {}) {
			this.requireArgumentType("id", "number", args);
		}
		apply(args) {
			return copyToClipboard(Note.getURL(args.id));
		}
	};
	//#endregion
	//#region modules/notes/assets/js/commands/filter.js
	/**
	* Set / modify the global Notes filter state.
	*/
	var Filter = class extends $e.modules.CommandBase {
		validateArgs(args = {}) {
			this.requireArgument("filters", args);
		}
		apply(args) {
			const { store } = window.top.$e, { actions } = store.get("notes"), action = args.overwrite ? actions.setFilters : actions.modifyFilters;
			store.dispatch(action(args.filters));
		}
	};
	typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? react.useLayoutEffect : react.useEffect;
	//#endregion
	//#region node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js
	/** @license React v16.13.1
	* react-is.production.min.js
	*
	* Copyright (c) Facebook, Inc. and its affiliates.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*/
	var require_react_is_production_min$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
		var b = "function" === typeof Symbol && Symbol.for;
		var c = b ? Symbol.for("react.element") : 60103;
		var d = b ? Symbol.for("react.portal") : 60106;
		var e = b ? Symbol.for("react.fragment") : 60107;
		var f = b ? Symbol.for("react.strict_mode") : 60108;
		var g = b ? Symbol.for("react.profiler") : 60114;
		var h = b ? Symbol.for("react.provider") : 60109;
		var k = b ? Symbol.for("react.context") : 60110;
		var l = b ? Symbol.for("react.async_mode") : 60111;
		var m = b ? Symbol.for("react.concurrent_mode") : 60111;
		var n = b ? Symbol.for("react.forward_ref") : 60112;
		var p = b ? Symbol.for("react.suspense") : 60113;
		var q = b ? Symbol.for("react.suspense_list") : 60120;
		var r = b ? Symbol.for("react.memo") : 60115;
		var t = b ? Symbol.for("react.lazy") : 60116;
		var v = b ? Symbol.for("react.block") : 60121;
		var w = b ? Symbol.for("react.fundamental") : 60117;
		var x = b ? Symbol.for("react.responder") : 60118;
		var y = b ? Symbol.for("react.scope") : 60119;
		function z(a) {
			if ("object" === typeof a && null !== a) {
				var u = a.$$typeof;
				switch (u) {
					case c: switch (a = a.type, a) {
						case l:
						case m:
						case e:
						case g:
						case f:
						case p: return a;
						default: switch (a = a && a.$$typeof, a) {
							case k:
							case n:
							case t:
							case r:
							case h: return a;
							default: return u;
						}
					}
					case d: return u;
				}
			}
		}
		function A(a) {
			return z(a) === m;
		}
		exports.AsyncMode = l;
		exports.ConcurrentMode = m;
		exports.ContextConsumer = k;
		exports.ContextProvider = h;
		exports.Element = c;
		exports.ForwardRef = n;
		exports.Fragment = e;
		exports.Lazy = t;
		exports.Memo = r;
		exports.Portal = d;
		exports.Profiler = g;
		exports.StrictMode = f;
		exports.Suspense = p;
		exports.isAsyncMode = function(a) {
			return A(a) || z(a) === l;
		};
		exports.isConcurrentMode = A;
		exports.isContextConsumer = function(a) {
			return z(a) === k;
		};
		exports.isContextProvider = function(a) {
			return z(a) === h;
		};
		exports.isElement = function(a) {
			return "object" === typeof a && null !== a && a.$$typeof === c;
		};
		exports.isForwardRef = function(a) {
			return z(a) === n;
		};
		exports.isFragment = function(a) {
			return z(a) === e;
		};
		exports.isLazy = function(a) {
			return z(a) === t;
		};
		exports.isMemo = function(a) {
			return z(a) === r;
		};
		exports.isPortal = function(a) {
			return z(a) === d;
		};
		exports.isProfiler = function(a) {
			return z(a) === g;
		};
		exports.isStrictMode = function(a) {
			return z(a) === f;
		};
		exports.isSuspense = function(a) {
			return z(a) === p;
		};
		exports.isValidElementType = function(a) {
			return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
		};
		exports.typeOf = z;
	}));
	//#endregion
	//#region node_modules/hoist-non-react-statics/node_modules/react-is/index.js
	var require_react_is$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = require_react_is_production_min$1();
	}));
	//#endregion
	//#region node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
	var require_hoist_non_react_statics_cjs = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var reactIs = require_react_is$1();
		/**
		* Copyright 2015, Yahoo! Inc.
		* Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
		*/
		var REACT_STATICS = {
			childContextTypes: true,
			contextType: true,
			contextTypes: true,
			defaultProps: true,
			displayName: true,
			getDefaultProps: true,
			getDerivedStateFromError: true,
			getDerivedStateFromProps: true,
			mixins: true,
			propTypes: true,
			type: true
		};
		var KNOWN_STATICS = {
			name: true,
			length: true,
			prototype: true,
			caller: true,
			callee: true,
			arguments: true,
			arity: true
		};
		var FORWARD_REF_STATICS = {
			"$$typeof": true,
			render: true,
			defaultProps: true,
			displayName: true,
			propTypes: true
		};
		var MEMO_STATICS = {
			"$$typeof": true,
			compare: true,
			defaultProps: true,
			displayName: true,
			propTypes: true,
			type: true
		};
		var TYPE_STATICS = {};
		TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
		TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
		function getStatics(component) {
			if (reactIs.isMemo(component)) return MEMO_STATICS;
			return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
		}
		var defineProperty = Object.defineProperty;
		var getOwnPropertyNames = Object.getOwnPropertyNames;
		var getOwnPropertySymbols = Object.getOwnPropertySymbols;
		var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
		var getPrototypeOf = Object.getPrototypeOf;
		var objectPrototype = Object.prototype;
		function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
			if (typeof sourceComponent !== "string") {
				if (objectPrototype) {
					var inheritedComponent = getPrototypeOf(sourceComponent);
					if (inheritedComponent && inheritedComponent !== objectPrototype) hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
				}
				var keys = getOwnPropertyNames(sourceComponent);
				if (getOwnPropertySymbols) keys = keys.concat(getOwnPropertySymbols(sourceComponent));
				var targetStatics = getStatics(targetComponent);
				var sourceStatics = getStatics(sourceComponent);
				for (var i = 0; i < keys.length; ++i) {
					var key = keys[i];
					if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
						var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
						try {
							defineProperty(targetComponent, key, descriptor);
						} catch (e) {}
					}
				}
			}
			return targetComponent;
		}
		module.exports = hoistNonReactStatics;
	}));
	//#endregion
	//#region node_modules/react-redux/node_modules/react-is/cjs/react-is.production.min.js
	/** @license React v17.0.2
	* react-is.production.min.js
	*
	* Copyright (c) Facebook, Inc. and its affiliates.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*/
	var require_react_is_production_min = /* @__PURE__ */ __commonJSMin(((exports) => {
		if ("function" === typeof Symbol && Symbol.for) {
			var x = Symbol.for;
			x("react.element");
			x("react.portal");
			x("react.fragment");
			x("react.strict_mode");
			x("react.profiler");
			x("react.provider");
			x("react.context");
			x("react.forward_ref");
			x("react.suspense");
			x("react.suspense_list");
			x("react.memo");
			x("react.lazy");
			x("react.block");
			x("react.server.block");
			x("react.fundamental");
			x("react.debug_trace_mode");
			x("react.legacy_hidden");
		}
	}));
	//#endregion
	//#region node_modules/react-redux/node_modules/react-is/index.js
	var require_react_is = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = require_react_is_production_min();
	}));
	require_hoist_non_react_statics_cjs();
	require_react_is();
	//#endregion
	//#region node_modules/react-redux/es/index.js
	react_dom.unstable_batchedUpdates;
	//#endregion
	//#region modules/notes/assets/js/app/hooks/use-active-thread.js
	var THREAD = "thread";
	//#endregion
	//#region modules/notes/assets/js/commands/open.js
	var Open = class extends $e.modules.CommandBase {
		static getInfo() {
			return {
				isSafe: true,
				isSafeWithArgs: true
			};
		}
		apply(args) {
			window.top.$e.route(this.component.getNamespace());
			const noteId = parseInt(args.id || "0");
			if (noteId > 0) window.top.$e.run("notes/set-active", {
				type: THREAD,
				data: { noteId }
			});
		}
	};
	//#endregion
	//#region modules/notes/assets/js/commands/set-active.js
	var SetActive = class extends $e.modules.CommandBase {
		validateArgs(args = {}) {
			this.requireArgument("type", args);
			this.requireArgument("data", args);
		}
		apply({ type, data }) {
			const { store } = window.top.$e;
			if (store.getState().notes.formsInWritingMode.length > 0) return;
			const { actions } = store.get("notes");
			store.dispatch(actions.setActive({
				type,
				data
			}));
		}
	};
	//#endregion
	//#region modules/notes/assets/js/commands/toggle.js
	var Toggle = class extends $e.modules.CommandBase {
		apply() {
			if (this.component.isOpen) window.top.$e.run("notes/close");
			else window.top.$e.run("notes/open");
		}
	};
	//#endregion
	//#region modules/notes/assets/js/commands/index.js
	var commands_exports = /* @__PURE__ */ __exportAll({
		ClearActive: () => ClearActive,
		Close: () => Close,
		CopyLink: () => CopyLink,
		Filter: () => Filter,
		Open: () => Open,
		SetActive: () => SetActive,
		Toggle: () => Toggle
	});
	//#endregion
	//#region modules/notes/assets/js/data-commands/read-status.js
	var ReadStatus = class extends $e.modules.CommandData {
		static getEndpointFormat() {
			return "notes/read-status";
		}
	};
	//#endregion
	//#region modules/notes/assets/js/data-commands/summary.js
	var Summary = class extends $e.modules.CommandData {
		static getEndpointFormat() {
			return "notes/summary";
		}
	};
	//#endregion
	//#region modules/notes/assets/js/data-commands/users.js
	var Users = class extends $e.modules.CommandData {
		static getEndpointFormat() {
			return "notes/users";
		}
	};
	//#endregion
	//#region modules/notes/assets/js/data-commands/index.js
	var data_commands_exports = /* @__PURE__ */ __exportAll({
		Index: () => Index,
		ReadStatus: () => ReadStatus,
		Summary: () => Summary,
		Users: () => Users
	});
	var Index = class extends $e.modules.CommandData {
		static getEndpointFormat() {
			return "notes/{id}";
		}
	};
	//#endregion
	//#region modules/notes/assets/js/hooks/ui/panel/state-ready/notes-add-panel-menu-item.js
	var NotesAddPanelMenuItem = class extends $e.modules.hookUI.After {
		getCommand() {
			return "panel/state-ready";
		}
		getId() {
			return "notes-add-panel-menu-item";
		}
		apply() {
			elementor.modules.layouts.panel.pages.menu.Menu.addItem({
				name: "notes",
				icon: "eicon-commenting-o",
				title: (0, _wordpress_i18n.__)("Notes", "elementor-pro"),
				callback: () => window.top.$e.run("notes/open")
			}, "navigate_from_page", "finder");
		}
	};
	//#endregion
	//#region modules/notes/assets/js/hooks/index.js
	var hooks_exports = /* @__PURE__ */ __exportAll({ NotesAddPanelMenuItem: () => NotesAddPanelMenuItem });
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
	//#region modules/notes/assets/js/e-component.js
	var EComponent = class extends $e.modules.ComponentBase {
		constructor(args) {
			super(args);
			_defineProperty(
				this,
				/**
				* Config for the current components (to share across related apps).
				*
				* @type {Object}
				*/
				"config",
				{}
			);
			window.addEventListener("message", (event) => {
				if (event.data.name !== "elementor-pro/notes/config") return;
				this.config = _objectSpread2(_objectSpread2({}, this.config), event.data.payload);
				if (!this.isInEditor()) window.top.$e.extras.hashCommands.runOnce();
				this.contextMenuNotesGroup();
			});
			window.addEventListener("DOMContentLoaded", () => {
				const adminBarButton = document.getElementById("wp-admin-bar-elementor_notes");
				if (!adminBarButton) return;
				adminBarButton.addEventListener("click", (e) => {
					e.preventDefault();
					window.top.$e.run("notes/toggle");
				});
			});
		}
		/**
		* @return {string} the namespace of the component
		*/
		getNamespace() {
			return "notes";
		}
		/**
		* @return {Object} All the routes of the component
		*/
		defaultRoutes() {
			return { "": () => {} };
		}
		/**
		* @return {*} All the commands of the components
		*/
		defaultCommands() {
			const trackingCommands = [
				"create",
				"reply",
				"edit",
				"delete",
				"resolve",
				"re-open",
				"cancel-create",
				"cancel-reply",
				"cancel-edit",
				"choose-mention",
				"open-note-actions",
				"close-note-actions",
				"open-panel-filters",
				"close-panel-filters",
				"refresh-panel"
			].reduce((allCommands, command) => _objectSpread2(_objectSpread2({}, allCommands), {}, { [command]: () => {} }), {});
			return _objectSpread2(_objectSpread2({}, this.importCommands(commands_exports)), trackingCommands);
		}
		/**
		* @return {*} All the data commands of the components
		*/
		defaultData() {
			return this.importCommands(data_commands_exports);
		}
		/**
		* @return {*} All the hooks
		*/
		defaultHooks() {
			return this.importHooks(hooks_exports);
		}
		/**
		* @return {Object} All the shortcuts of the component.
		*/
		defaultShortcuts() {
			return { toggle: {
				keys: "shift+c",
				exclude: ["input", "textarea"]
			} };
		}
		/**
		* @return {Object} All the states of the component.
		*/
		defaultStates() {
			return { "": {
				initialState: {
					/**
					* @typedef {Object} Active
					* @property {'thread'|'new-thread'} type           - What is currently active (thread or a new thread).
					* @property {Object}                data           - The active element data.
					* @property {string}                data.noteId    - ID of the currently active note (used for existing threads).
					* @property {string}                data.elementId - ID of the currently active element (used for new threads).
					*/
					/**
					* @type {Active|null} active
					*/
					active: null,
					formsInWritingMode: [],
					filters: {
						is_resolved: null,
						only_unread: null,
						only_relevant: null
					}
				},
				reducers: {
					setFilters: (state, { payload }) => {
						return _objectSpread2(_objectSpread2({}, state), {}, { filters: payload });
					},
					modifyFilters: (state, { payload }) => {
						return _objectSpread2(_objectSpread2({}, state), {}, { filters: _objectSpread2(_objectSpread2({}, state.filters), payload) });
					},
					setActive: (state, { payload }) => {
						return _objectSpread2(_objectSpread2({}, state), {}, {
							active: {
								type: payload.type,
								data: payload.data
							},
							formsInWritingMode: []
						});
					},
					clearActive: (state, { payload: id } = {}) => {
						var _state$active;
						if (!(!id || ((_state$active = state.active) === null || _state$active === void 0 || (_state$active = _state$active.data) === null || _state$active === void 0 ? void 0 : _state$active.noteId) === id)) return state;
						return _objectSpread2(_objectSpread2({}, state), {}, {
							active: null,
							formsInWritingMode: []
						});
					},
					addFormToWritingMode(state, { payload }) {
						return _objectSpread2(_objectSpread2({}, state), {}, { formsInWritingMode: [...state.formsInWritingMode, payload] });
					},
					removeFormFromWritingMode(state, { payload }) {
						return _objectSpread2(_objectSpread2({}, state), {}, { formsInWritingMode: state.formsInWritingMode.filter((id) => id !== payload) });
					}
				}
			} };
		}
		/**
		* When open the component this method will be triggered.
		*
		* @return {boolean} Should disable the opening or not.
		*/
		open() {
			if (this.isOpen) return false;
			if (this.isInEditor()) this.updateEditorState(this.constructor.NOTES_MODE_OPEN);
			this.getPreviewFrame().postMessage({ name: "elementor-pro/notes/open" }, "*");
			return true;
		}
		/**
		* When close the component this method will be triggered.
		*
		* @return {boolean} Should disable the closing or not.
		*/
		close() {
			if (!super.close()) return false;
			if (this.isInEditor()) this.updateEditorState(this.constructor.NOTES_MODE_CLOSE);
			this.getPreviewFrame().postMessage({ name: "elementor-pro/notes/close" }, "*");
			return true;
		}
		/**
		* @return {boolean} Is the current view is the editor
		*/
		isInEditor() {
			return !!window.elementor;
		}
		/**
		* Update the editor edit mode base on mode ('open' or 'close').
		*
		* @param {string} mode
		*/
		updateEditorState(mode) {
			switch (mode) {
				case this.constructor.NOTES_MODE_OPEN:
					elementor.getPanelView().modeSwitcher.currentView.setMode("preview");
					elementor.channels.dataEditMode.once("switch", () => {
						if (!this.isOpen) return;
						window.top.$e.run("notes/close");
					});
					break;
				case this.constructor.NOTES_MODE_CLOSE:
					elementor.getPanelView().modeSwitcher.currentView.setMode("editor");
					break;
				default: throw new Error(`mode '${mode}' is not supported.`);
			}
		}
		/**
		* Get the Preview frame, in edit mode it is the iframe and on the frontend it is the current window.
		*
		* @return {Window} The preview frame.
		*/
		getPreviewFrame() {
			return this.isInEditor() ? elementor.$preview[0].contentWindow : window;
		}
		contextMenuNotesGroup() {
			if (!this.isInEditor()) return;
			new notesContextMenu();
		}
	};
	_defineProperty(EComponent, "NOTES_MODE_OPEN", "open");
	_defineProperty(EComponent, "NOTES_MODE_CLOSE", "close");
	//#endregion
	//#region modules/notes/assets/js/notes.js
	window.top.$e.components.register(new EComponent());
	//#endregion
})(wp.i18n, React, ReactDOM);

//# sourceMappingURL=notes.js.map
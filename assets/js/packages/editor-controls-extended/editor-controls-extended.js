/*! pro-elements - v4.4.0 - 09-11-2026 */
this.elementorV2 = this.elementorV2 || {};
(function(exports, _elementor_license_api, _elementor_editor_controls, _elementor_http_client, _elementor_query, react, _wordpress_i18n, _elementor_icons, _elementor_ui, _elementor_editor_props, _elementor_schema, _elementor_editor_ui) {
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
	_elementor_editor_controls = __toESM(_elementor_editor_controls);
	let react$1 = __toESM(react, 1);
	react = __toESM(react);
	//#region packages/packages/pro/editor-controls-extended/src/extend-transition-properties.ts
	function extendTransitionProperties(isDisabled = false) {
		if (!_elementor_editor_controls.transitionProperties || _elementor_editor_controls.transitionProperties.length === 0) return;
		_elementor_editor_controls.transitionProperties.forEach((category) => {
			category.properties.forEach((property) => {
				if (property.value !== "all") property.isDisabled = isDisabled;
			});
		});
		_elementor_editor_controls.transitionsItemsList.splice(0, _elementor_editor_controls.transitionsItemsList.length, ..._elementor_editor_controls.transitionProperties.map((category) => ({
			label: category.label,
			items: category.properties.map((property) => property.label)
		})));
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
	function _defineProperty$2(e, r, t) {
		return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
			value: t,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[r] = t, e;
	}
	__name(_defineProperty$2, "_defineProperty");
	//#endregion
	//#region \0@oxc-project+runtime@0.140.0/helpers/esm/objectSpread2.js
	function ownKeys$2(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(r2) {
				return Object.getOwnPropertyDescriptor(e, r2).enumerable;
			})), t.push.apply(t, o);
		}
		return t;
	}
	__name(ownKeys$2, "ownKeys");
	function _objectSpread2$2(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys$2(Object(t), true).forEach(function(r2) {
				_defineProperty$2(e, r2, t[r2]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function(r2) {
				Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
			});
		}
		return e;
	}
	__name(_objectSpread2$2, "_objectSpread2");
	//#endregion
	//#region packages/packages/pro/editor-controls-extended/src/icon-libraries/atomic-custom-icons.ts
	var NATIVE_TAB_NAMES = /* @__PURE__ */ new Set([
		"all",
		"recommended",
		"GoPro"
	]);
	var SUPPORTED_CUSTOM_ICON_TYPES = /* @__PURE__ */ new Set([
		"fontello",
		"icomoon",
		"fontastic"
	]);
	var DEFAULT_ICON_SIZE$1 = 512;
	var CUSTOM_ICON_LIBRARIES_QUERY_KEY = ["atomic-custom-icons"];
	var CUSTOM_ICON_SVG_URL = "elementor-pro/v1/custom-icon-svg";
	var PAGE_SIZE = 250;
	var MAX_PAGES = 100;
	var FAILURE_RETRY_MS = 3e4;
	var iconMaps = /* @__PURE__ */ new Map();
	var singleIcons = /* @__PURE__ */ new Map();
	function useCustomIconLibraries(enabled) {
		return (0, _elementor_query.useQuery)({
			queryKey: CUSTOM_ICON_LIBRARIES_QUERY_KEY,
			queryFn: () => loadCustomIconLibraries(),
			enabled: enabled && areCustomIconLibrariesEnabled(),
			staleTime: Infinity
		});
	}
	function loadCustomIconLibraries() {
		return _loadCustomIconLibraries.apply(this, arguments);
	}
	function _loadCustomIconLibraries() {
		_loadCustomIconLibraries = _asyncToGenerator(function* () {
			return (yield Promise.all(getCustomIconLibraryConfigs().map((library) => loadCustomLibrary(library)))).flat();
		});
		return _loadCustomIconLibraries.apply(this, arguments);
	}
	function resolveCustomIconSvg(_x, _x2) {
		return _resolveCustomIconSvg.apply(this, arguments);
	}
	function _resolveCustomIconSvg() {
		_resolveCustomIconSvg = _asyncToGenerator(function* (library, iconValue) {
			const config = getRenderableIconLibraryConfigs().find((item) => item.name === String(library));
			if (!config) {
				iconMaps.delete(String(library));
				return null;
			}
			if (!areCustomIconLibrariesEnabled()) return resolveSingleIconSvg(config.name, iconValue);
			const markup = (yield loadIconMap(config.name))[iconValue];
			return typeof markup === "string" && markup !== "" ? markup : null;
		});
		return _resolveCustomIconSvg.apply(this, arguments);
	}
	function resolveSingleIconSvg(library, iconValue) {
		const key = `${library}\0${iconValue}`;
		const cached = singleIcons.get(key);
		if (cached && (null === cached.failedAt || Date.now() - cached.failedAt < FAILURE_RETRY_MS)) return cached.request;
		const entry = {
			request: Promise.resolve(null),
			failedAt: null
		};
		entry.request = fetchSingleIconSvg(library, iconValue, () => {
			entry.failedAt = Date.now();
		});
		singleIcons.set(key, entry);
		return entry.request;
	}
	function fetchSingleIconSvg(_x3, _x4, _x5) {
		return _fetchSingleIconSvg.apply(this, arguments);
	}
	function _fetchSingleIconSvg() {
		_fetchSingleIconSvg = _asyncToGenerator(function* (library, iconValue, onFailure) {
			try {
				return extractHtml(yield (0, _elementor_http_client.httpService)().get(CUSTOM_ICON_SVG_URL, { params: {
					library,
					value: iconValue
				} }));
			} catch (_unused) {
				onFailure();
				return null;
			}
		});
		return _fetchSingleIconSvg.apply(this, arguments);
	}
	function extractHtml(payload) {
		let current = payload;
		for (let depth = 0; depth < 4; depth++) {
			if (!current || typeof current !== "object") return null;
			const record = current;
			if (typeof record.html === "string") return record.html !== "" ? record.html : null;
			current = "data" in record ? record.data : void 0;
		}
		return null;
	}
	function loadCustomLibrary(_x6) {
		return _loadCustomLibrary.apply(this, arguments);
	}
	function _loadCustomLibrary() {
		_loadCustomLibrary = _asyncToGenerator(function* (library) {
			const iconMap = yield loadIconMap(library.name);
			return Object.entries(iconMap).map(([value, svgMarkup]) => {
				const name = getIconName(library, value);
				return {
					id: `${library.name}:${name}`,
					name,
					label: name.replace(/-/g, " "),
					library: library.name,
					value,
					aliases: [],
					width: DEFAULT_ICON_SIZE$1,
					height: DEFAULT_ICON_SIZE$1,
					paths: [],
					glyphClass: value,
					svgMarkup
				};
			});
		});
		return _loadCustomLibrary.apply(this, arguments);
	}
	function loadIconMap(library) {
		const cached = iconMaps.get(library);
		if (cached && (null === cached.failedAt || Date.now() - cached.failedAt < FAILURE_RETRY_MS)) return cached.request;
		const entry = {
			request: Promise.resolve({}),
			failedAt: null
		};
		entry.request = fetchIconMap(library, () => {
			entry.failedAt = Date.now();
		});
		iconMaps.set(library, entry);
		return entry.request;
	}
	function fetchIconMap(_x7, _x8) {
		return _fetchIconMap.apply(this, arguments);
	}
	function _fetchIconMap() {
		_fetchIconMap = _asyncToGenerator(function* (library, onFailure) {
			const icons = {};
			try {
				for (let page = 0; page < MAX_PAGES; page++) {
					const result = yield fetchLibraryPage(library, page * PAGE_SIZE);
					Object.assign(icons, result.icons);
					if (!result.truncated) break;
				}
			} catch (_unused2) {
				onFailure();
			}
			return icons;
		});
		return _fetchIconMap.apply(this, arguments);
	}
	function fetchLibraryPage(_x9, _x10) {
		return _fetchLibraryPage.apply(this, arguments);
	}
	function _fetchLibraryPage() {
		_fetchLibraryPage = _asyncToGenerator(function* (library, offset) {
			return normalizePage(yield (0, _elementor_http_client.httpService)().get(CUSTOM_ICON_SVG_URL, { params: {
				library,
				offset,
				limit: PAGE_SIZE
			} }));
		});
		return _fetchLibraryPage.apply(this, arguments);
	}
	function normalizePage(payload) {
		const empty = {
			icons: {},
			truncated: false,
			total: 0
		};
		let current = payload;
		for (let depth = 0; depth < 4; depth++) {
			if (!current || typeof current !== "object") return empty;
			const record = current;
			if (record.icons && typeof record.icons === "object" && !Array.isArray(record.icons)) {
				const icons = {};
				Object.entries(record.icons).forEach(([key, value]) => {
					if (typeof value === "string" && value !== "") icons[key] = value;
				});
				return {
					icons,
					truncated: true === record.truncated,
					total: typeof record.total === "number" ? record.total : 0
				};
			}
			current = "data" in record ? record.data : void 0;
		}
		return empty;
	}
	function getIconName(library, value) {
		var _value$trim$split$pop;
		const className = (_value$trim$split$pop = value.trim().split(/\s+/).pop()) !== null && _value$trim$split$pop !== void 0 ? _value$trim$split$pop : value;
		return className.startsWith(library.prefix) ? className.slice(library.prefix.length) : className;
	}
	function getFontAwesomeConfig() {
		var _common$config;
		const common = window.elementorCommon;
		return common === null || common === void 0 || (_common$config = common.config) === null || _common$config === void 0 || (_common$config = _common$config.fontAwesome) === null || _common$config === void 0 ? void 0 : _common$config.v7;
	}
	function areCustomIconLibrariesEnabled() {
		var _getFontAwesomeConfig;
		return true === ((_getFontAwesomeConfig = getFontAwesomeConfig()) === null || _getFontAwesomeConfig === void 0 ? void 0 : _getFontAwesomeConfig.customIconLibrariesEnabled);
	}
	function areCustomIconsRenderable() {
		var _getFontAwesomeConfig2;
		return areCustomIconLibrariesEnabled() || true === ((_getFontAwesomeConfig2 = getFontAwesomeConfig()) === null || _getFontAwesomeConfig2 === void 0 ? void 0 : _getFontAwesomeConfig2.customIconRenderingEnabled);
	}
	function getCustomIconLibrariesUploadUrl() {
		var _getFontAwesomeConfig3;
		var _getFontAwesomeConfig4;
		return (_getFontAwesomeConfig3 = (_getFontAwesomeConfig4 = getFontAwesomeConfig()) === null || _getFontAwesomeConfig4 === void 0 ? void 0 : _getFontAwesomeConfig4.customIconLibrariesUploadUrl) !== null && _getFontAwesomeConfig3 !== void 0 ? _getFontAwesomeConfig3 : "";
	}
	function getCustomIconLibraryConfigs() {
		return areCustomIconLibrariesEnabled() ? readLibraryConfigs() : [];
	}
	function getRenderableIconLibraryConfigs() {
		return areCustomIconsRenderable() ? readLibraryConfigs() : [];
	}
	function readLibraryConfigs() {
		var _window$elementor;
		var _libraries$icons;
		const libraries = (_window$elementor = window.elementor) === null || _window$elementor === void 0 ? void 0 : _window$elementor.config;
		return (Array.isArray(libraries === null || libraries === void 0 || (_libraries$icons = libraries.icons) === null || _libraries$icons === void 0 ? void 0 : _libraries$icons.libraries) ? libraries.icons.libraries : []).flatMap((value) => {
			const library = normalizeCustomIconLibraryConfig(value);
			return library ? [library] : [];
		});
	}
	function normalizeCustomIconLibraryConfig(value) {
		if (!value || typeof value !== "object") return null;
		const library = value;
		const name = coerceLibraryName(library.name);
		if (name === "" || NATIVE_TAB_NAMES.has(name) || library.native === true || name.startsWith("fa-")) return null;
		if (typeof library.prefix !== "string") return null;
		const type = typeof library.custom_icon_type === "string" ? library.custom_icon_type.toLowerCase() : "";
		if (!SUPPORTED_CUSTOM_ICON_TYPES.has(type)) return null;
		return _objectSpread2$2(_objectSpread2$2({}, library), {}, {
			name,
			prefix: library.prefix
		});
	}
	function coerceLibraryName(value) {
		if (typeof value === "string") return value;
		if (typeof value === "number" && Number.isFinite(value)) return String(value);
		return "";
	}
	//#endregion
	//#region packages/packages/pro/editor-controls-extended/src/icon-libraries/atomic-font-awesome-pro.ts
	var PRO_LIBRARIES = [
		{
			file: "solid",
			library: "fa-solid",
			prefix: "fas"
		},
		{
			file: "regular",
			library: "fa-regular",
			prefix: "far"
		},
		{
			file: "light",
			library: "fa-light",
			prefix: "fal"
		},
		{
			file: "brands",
			library: "fa-brands",
			prefix: "fab"
		}
	];
	var FONT_AWESOME_PRO_QUERY_KEY = ["atomic-font-awesome-pro"];
	var FONT_AWESOME_PRO_ICON_URL = "elementor-pro/v1/font-awesome-pro-icon";
	var SVG_KIT_METHOD = "js";
	var DEFAULT_ICON_SIZE = 512;
	var KIT_MISS_TTL_MS = 6e4;
	var UNRESOLVED_TTL_MS = 5 * 6e4;
	var STORE_RETRY_MS = 5 * 6e4;
	var kitRequests = /* @__PURE__ */ new Map();
	var namesRequest = null;
	var persistedIcons = /* @__PURE__ */ new Set();
	var storedRequests = /* @__PURE__ */ new Map();
	var pendingTimers = /* @__PURE__ */ new Set();
	var kitMisses = /* @__PURE__ */ new Map();
	var aliasGroups = /* @__PURE__ */ new Map();
	var unresolvedIcons = /* @__PURE__ */ new Set();
	var unresolvedListeners = /* @__PURE__ */ new Set();
	var unresolvedVersion = 0;
	var MIN_KIT_ICONS = 500;
	var KIT_RULE_PATTERN = /((?:\.fa-[a-z0-9-]+,?)+)\{--fa:"(\\[0-9a-f]+|[^"\\])"\}/g;
	var KIT_RESOURCE_PATTERN = /^(https:\/\/[^/]+)\/releases\/v(\d[\w.-]*)\/.*[?&]token=([\w]+)/;
	function isFontAwesomeProEnabled() {
		var _getConfig;
		return true === ((_getConfig = getConfig()) === null || _getConfig === void 0 ? void 0 : _getConfig.enabled) && isSvgKit() && getKitConfig() !== void 0;
	}
	function useFontAwesomeProIcons(enabled) {
		const query = (0, _elementor_query.useQuery)({
			queryKey: FONT_AWESOME_PRO_QUERY_KEY,
			queryFn: loadNonEmptyIcons,
			enabled: enabled && isFontAwesomeProEnabled(),
			staleTime: Infinity,
			retry: false
		});
		const version = (0, react.useSyncExternalStore)(subscribeToUnresolved, getUnresolvedVersion);
		const data = (0, react.useMemo)(() => withoutUnresolved(query.data, version), [query.data, version]);
		return _objectSpread2$2(_objectSpread2$2({}, query), {}, { data });
	}
	function loadNonEmptyIcons() {
		return _loadNonEmptyIcons.apply(this, arguments);
	}
	function _loadNonEmptyIcons() {
		_loadNonEmptyIcons = _asyncToGenerator(function* () {
			const icons = yield loadFontAwesomeProIcons();
			if (icons.length === 0) throw new Error("Font Awesome Pro icons are unavailable");
			return icons;
		});
		return _loadNonEmptyIcons.apply(this, arguments);
	}
	function withoutUnresolved(icons, version) {
		return version >= 0 ? icons === null || icons === void 0 ? void 0 : icons.filter((icon) => !unresolvedIcons.has(icon.id)) : icons;
	}
	function subscribeToUnresolved(listener) {
		unresolvedListeners.add(listener);
		return () => {
			unresolvedListeners.delete(listener);
		};
	}
	function getUnresolvedVersion() {
		return unresolvedVersion;
	}
	function markUnresolved(library, name) {
		const id = `${library}:${name}`;
		if (unresolvedIcons.has(id)) return;
		unresolvedIcons.add(id);
		notifyUnresolvedChange();
		schedule(() => {
			if (unresolvedIcons.delete(id)) notifyUnresolvedChange();
		}, UNRESOLVED_TTL_MS);
	}
	function schedule(callback, delay) {
		const timer = setTimeout(() => {
			pendingTimers.delete(timer);
			callback();
		}, delay);
		pendingTimers.add(timer);
	}
	function notifyUnresolvedChange() {
		unresolvedVersion++;
		unresolvedListeners.forEach((listener) => listener());
	}
	function loadFontAwesomeProIcons() {
		var _getConfig2;
		const namesUrl = (_getConfig2 = getConfig()) === null || _getConfig2 === void 0 ? void 0 : _getConfig2.namesUrl;
		if (!isFontAwesomeProEnabled() || typeof namesUrl !== "string" || namesUrl === "") return Promise.resolve([]);
		if (!namesRequest) namesRequest = loadIconNames(namesUrl).then((icons) => {
			if (icons.length === 0) namesRequest = null;
			return icons;
		});
		return namesRequest;
	}
	function resolveFontAwesomeProPreviewSvg(_x, _x2, _x3) {
		return _resolveFontAwesomeProPreviewSvg.apply(this, arguments);
	}
	function _resolveFontAwesomeProPreviewSvg() {
		_resolveFontAwesomeProPreviewSvg = _asyncToGenerator(function* (library, iconValue, signal) {
			const owned = getOwnedIcon(library, iconValue);
			if (!owned) return null;
			if (!isBrowsingLicensed() || !isSvgKit()) return getConfig() ? loadStoredMarkup(library, iconValue) : null;
			const definition = yield findKitDefinition(owned, signal);
			if (definition === null) markUnresolved(owned.library, owned.name);
			return definition ? buildSvg(definition) : null;
		});
		return _resolveFontAwesomeProPreviewSvg.apply(this, arguments);
	}
	function resolveFontAwesomeProSvg(_x4, _x5, _x6) {
		return _resolveFontAwesomeProSvg.apply(this, arguments);
	}
	function _resolveFontAwesomeProSvg() {
		_resolveFontAwesomeProSvg = _asyncToGenerator(function* (library, iconValue, signal) {
			const owned = getOwnedIcon(library, iconValue);
			if (!owned) return null;
			if (!isBrowsingLicensed() || !isSvgKit()) return getConfig() ? loadStoredMarkup(library, iconValue) : null;
			const definition = yield findKitDefinition(owned, signal);
			if (!definition) return definition === void 0 ? loadStoredMarkup(library, iconValue) : null;
			persistIcon(library, iconValue, definition);
			return buildSvg(definition);
		});
		return _resolveFontAwesomeProSvg.apply(this, arguments);
	}
	function loadIconNames(_x7) {
		return _loadIconNames.apply(this, arguments);
	}
	function _loadIconNames() {
		_loadIconNames = _asyncToGenerator(function* (namesUrl) {
			const fromKit = yield loadKitIcons(namesUrl);
			if (fromKit.length > 0) return fromKit;
			return (yield Promise.all(PRO_LIBRARIES.map((library) => loadLibraryNames(namesUrl, library)))).flat();
		});
		return _loadIconNames.apply(this, arguments);
	}
	function loadKitIcons(_x8) {
		return _loadKitIcons.apply(this, arguments);
	}
	function _loadKitIcons() {
		_loadKitIcons = _asyncToGenerator(function* (namesUrl) {
			const kit = getKitConfig();
			if (!kit) return [];
			try {
				const brandsLibrary = PRO_LIBRARIES.find((item) => item.file === "brands");
				const url = `${kit.baseUrl}/releases/v${kit.version}/css/pro.min.css?token=${kit.token}`;
				const [response, brands, coreBrands] = yield Promise.all([
					fetch(url),
					loadLibraryNames(namesUrl, brandsLibrary),
					loadCoreBrandNames()
				]);
				if (!response.ok) return [];
				const groups = parseKitGroups(yield response.text());
				if (groups.length < MIN_KIT_ICONS) return [];
				return buildKitIcons(groups, /* @__PURE__ */ new Set([...brands.map((icon) => icon.name), ...coreBrands]));
			} catch (_unused) {
				return [];
			}
		});
		return _loadKitIcons.apply(this, arguments);
	}
	function loadCoreBrandNames() {
		return _loadCoreBrandNames.apply(this, arguments);
	}
	function _loadCoreBrandNames() {
		_loadCoreBrandNames = _asyncToGenerator(function* () {
			var _common$config;
			var _v7$jsonFiles;
			const common = window.elementorCommon;
			const v7 = common === null || common === void 0 || (_common$config = common.config) === null || _common$config === void 0 || (_common$config = _common$config.fontAwesome) === null || _common$config === void 0 ? void 0 : _common$config.v7;
			if (typeof (v7 === null || v7 === void 0 ? void 0 : v7.jsonBaseUrl) !== "string" || !((_v7$jsonFiles = v7.jsonFiles) === null || _v7$jsonFiles === void 0 ? void 0 : _v7$jsonFiles.includes("brands"))) return [];
			try {
				var _data$icons;
				const response = yield fetch(`${v7.jsonBaseUrl}brands.json`);
				if (!response.ok) return [];
				const data = yield response.json();
				return Object.keys((_data$icons = data.icons) !== null && _data$icons !== void 0 ? _data$icons : {});
			} catch (_unused2) {
				return [];
			}
		});
		return _loadCoreBrandNames.apply(this, arguments);
	}
	function parseKitGroups(css) {
		const byCodepoint = /* @__PURE__ */ new Map();
		for (const [, selectors, codepoint] of css.matchAll(KIT_RULE_PATTERN)) {
			var _byCodepoint$get;
			const names = (_byCodepoint$get = byCodepoint.get(codepoint)) !== null && _byCodepoint$get !== void 0 ? _byCodepoint$get : /* @__PURE__ */ new Set();
			selectors.split(",").forEach((selector) => selector && names.add(selector.slice(4)));
			byCodepoint.set(codepoint, names);
		}
		return [...byCodepoint.values()].map((names) => [...names].sort((a, b) => a.length - b.length || a.localeCompare(b)));
	}
	function buildKitIcons(groups, brandNames) {
		const classicLibraries = PRO_LIBRARIES.filter((item) => item.file !== "brands");
		const brandsLibrary = PRO_LIBRARIES.find((item) => item.file === "brands");
		const icons = [];
		groups.forEach((names) => {
			names.forEach((name) => aliasGroups.set(name, names));
			const brandName = names.find((name) => brandNames.has(name));
			const name = brandName !== null && brandName !== void 0 ? brandName : names[0];
			(brandName ? [brandsLibrary] : classicLibraries).forEach(({ library }) => icons.push(createLazyIcon(library, name, names)));
		});
		return icons;
	}
	function createLazyIcon(library, name, names = [name]) {
		return {
			id: `${library}:${name}`,
			name,
			label: name.replace(/-/g, " "),
			library,
			value: `${library} fa-${name}`,
			aliases: names.filter((alias) => alias !== name),
			width: DEFAULT_ICON_SIZE,
			height: DEFAULT_ICON_SIZE,
			paths: [],
			lazySvg: true
		};
	}
	function loadLibraryNames(_x9, _x10) {
		return _loadLibraryNames.apply(this, arguments);
	}
	function _loadLibraryNames() {
		_loadLibraryNames = _asyncToGenerator(function* (namesUrl, { file, library }) {
			try {
				const response = yield fetch(`${namesUrl}${file}.js`);
				if (!response.ok) return [];
				const data = yield response.json();
				return (Array.isArray(data.icons) ? data.icons : []).filter((name) => typeof name === "string" && name !== "").map((name) => createLazyIcon(library, name));
			} catch (_unused3) {
				return [];
			}
		});
		return _loadLibraryNames.apply(this, arguments);
	}
	function getOwnedIcon(library, iconValue) {
		var _iconValue$trim$split;
		const match = PRO_LIBRARIES.find((item) => item.library === library);
		const className = (_iconValue$trim$split = iconValue.trim().split(/\s+/).pop()) !== null && _iconValue$trim$split !== void 0 ? _iconValue$trim$split : "";
		const name = className.slice(3);
		if (!match || !className.startsWith("fa-") || !/^[a-z0-9-]+$/.test(name)) return null;
		return _objectSpread2$2(_objectSpread2$2({}, match), {}, { name });
	}
	function findKitDefinition(_x11, _x12) {
		return _findKitDefinition.apply(this, arguments);
	}
	function _findKitDefinition() {
		_findKitDefinition = _asyncToGenerator(function* (owned, signal) {
			var _aliasGroups$get$leng;
			var _aliasGroups$get2;
			const lookup = () => {
				var _aliasGroups$get;
				return getKitDefinition(owned, (_aliasGroups$get = aliasGroups.get(owned.name)) !== null && _aliasGroups$get !== void 0 ? _aliasGroups$get : [owned.name], signal);
			};
			const definition = yield lookup();
			if (definition || aliasGroups.size > 0) return definition;
			yield loadFontAwesomeProIcons().catch(() => []);
			return ((_aliasGroups$get$leng = (_aliasGroups$get2 = aliasGroups.get(owned.name)) === null || _aliasGroups$get2 === void 0 ? void 0 : _aliasGroups$get2.length) !== null && _aliasGroups$get$leng !== void 0 ? _aliasGroups$get$leng : 0) > 1 ? lookup() : definition;
		});
		return _findKitDefinition.apply(this, arguments);
	}
	function getKitDefinition(_x13, _x14, _x15) {
		return _getKitDefinition.apply(this, arguments);
	}
	function _getKitDefinition() {
		_getKitDefinition = _asyncToGenerator(function* ({ file, prefix }, names, signal) {
			for (const name of names) {
				var _getKit;
				var _getKit$findIconDefin;
				const loaded = (_getKit = getKit()) === null || _getKit === void 0 || (_getKit$findIconDefin = _getKit.findIconDefinition) === null || _getKit$findIconDefin === void 0 || (_getKit$findIconDefin = _getKit$findIconDefin.call(_getKit, {
					prefix,
					iconName: name
				})) === null || _getKit$findIconDefin === void 0 ? void 0 : _getKit$findIconDefin.icon;
				if (loaded) return loaded;
			}
			const key = `${file}:${names.join("|")}`;
			const missedAt = kitMisses.get(key);
			if (missedAt && Date.now() - missedAt < KIT_MISS_TTL_MS) return null;
			let request = kitRequests.get(key);
			if (!request) {
				request = fetchKitDefinition(file, names).finally(() => kitRequests.delete(key));
				kitRequests.set(key, request);
			}
			const definition = yield request;
			if (signal === null || signal === void 0 ? void 0 : signal.aborted) throw new DOMException("Aborted", "AbortError");
			if (definition === null) kitMisses.set(key, Date.now());
			return definition;
		});
		return _getKitDefinition.apply(this, arguments);
	}
	function fetchKitDefinition(_x16, _x17) {
		return _fetchKitDefinition.apply(this, arguments);
	}
	function _fetchKitDefinition() {
		_fetchKitDefinition = _asyncToGenerator(function* (file, names) {
			const kit = getKitConfig();
			if (!kit) return;
			let unreachable = false;
			for (const name of names) try {
				const response = yield fetch(`${kit.baseUrl}/releases/v${kit.version}/svgs/${file}/${name}.svg?token=${kit.token}`);
				if (!response.ok) {
					unreachable = unreachable || response.status !== 404;
					continue;
				}
				const definition = parseKitSvg(yield response.text());
				if (definition) return definition;
			} catch (_unused4) {
				unreachable = unreachable || false === navigator.onLine;
			}
			return unreachable ? void 0 : null;
		});
		return _fetchKitDefinition.apply(this, arguments);
	}
	function parseKitSvg(markup) {
		const viewBox = markup.match(/viewBox\s*=\s*"\s*([-\d.]+)[\s,]+([-\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)\s*"/);
		const paths = [...markup.matchAll(/<path\b[^>]*?\sd\s*=\s*"([^"]+)"/g)].map((match) => match[1]);
		if (!viewBox || Number(viewBox[1]) !== 0 || Number(viewBox[2]) !== 0 || paths.length === 0) return null;
		return [
			Math.round(Number(viewBox[3])),
			Math.round(Number(viewBox[4])),
			[],
			"",
			paths
		];
	}
	function buildSvg(icon) {
		const [width, height, , , pathData] = icon;
		const paths = getPaths(pathData);
		if (paths.length === 0) return null;
		const pathMarkup = paths.map((path) => `<path d="${escapeAttribute(path)}"></path>`).join("");
		return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${Number(width)} ${Number(height)}">${pathMarkup}</svg>`;
	}
	function persistIcon(library, iconValue, icon) {
		const key = `${library}:${iconValue}`;
		if (persistedIcons.has(key)) return;
		persistedIcons.add(key);
		const [width, height, , , pathData] = icon;
		const paths = getPaths(pathData);
		Promise.resolve((0, _elementor_http_client.httpService)().post(FONT_AWESOME_PRO_ICON_URL, {
			library,
			value: iconValue,
			width,
			height,
			paths
		})).catch((error) => {
			var _error$response$statu;
			var _error$response;
			const status = (_error$response$statu = error === null || error === void 0 || (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status) !== null && _error$response$statu !== void 0 ? _error$response$statu : 0;
			if (status < 400 || status >= 500) persistedIcons.delete(key);
			else if (status === 400) schedule(() => persistedIcons.delete(key), STORE_RETRY_MS);
		});
	}
	function getPaths(pathData) {
		return (Array.isArray(pathData) ? pathData : [pathData]).filter((path) => typeof path === "string" && path !== "");
	}
	function isBrowsingLicensed() {
		var _getConfig3;
		return true === ((_getConfig3 = getConfig()) === null || _getConfig3 === void 0 ? void 0 : _getConfig3.enabled);
	}
	function loadStoredMarkup(library, iconValue) {
		const key = `${library}:${iconValue}`;
		let request = storedRequests.get(key);
		if (!request) {
			request = fetchStoredMarkup(library, iconValue);
			storedRequests.set(key, request);
		}
		return request;
	}
	function fetchStoredMarkup(_x18, _x19) {
		return _fetchStoredMarkup.apply(this, arguments);
	}
	function _fetchStoredMarkup() {
		_fetchStoredMarkup = _asyncToGenerator(function* (library, iconValue) {
			try {
				var _response$data;
				const response = yield (0, _elementor_http_client.httpService)().get(FONT_AWESOME_PRO_ICON_URL, { params: {
					library,
					value: iconValue
				} });
				const html = response === null || response === void 0 || (_response$data = response.data) === null || _response$data === void 0 || (_response$data = _response$data.data) === null || _response$data === void 0 ? void 0 : _response$data.html;
				return typeof html === "string" && html !== "" ? html : null;
			} catch (_unused5) {
				storedRequests.delete(`${library}:${iconValue}`);
				return null;
			}
		});
		return _fetchStoredMarkup.apply(this, arguments);
	}
	function escapeAttribute(value) {
		return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
	}
	function getConfig() {
		var _common$config2;
		const common = window.elementorCommon;
		return common === null || common === void 0 || (_common$config2 = common.config) === null || _common$config2 === void 0 || (_common$config2 = _common$config2.fontAwesome) === null || _common$config2 === void 0 || (_common$config2 = _common$config2.v7) === null || _common$config2 === void 0 ? void 0 : _common$config2.fontAwesomePro;
	}
	function getKitConfig() {
		const config = window.FontAwesomeKitConfig;
		if ((config === null || config === void 0 ? void 0 : config.version) && config.token && config.baseUrl) return {
			version: config.version,
			token: config.token,
			baseUrl: config.baseUrl
		};
		if (typeof performance === "undefined" || typeof performance.getEntriesByType !== "function") return;
		for (const entry of performance.getEntriesByType("resource")) {
			const match = KIT_RESOURCE_PATTERN.exec(entry.name);
			if (match) {
				var _config$baseUrl;
				var _config$version;
				var _config$token;
				return {
					baseUrl: (_config$baseUrl = config === null || config === void 0 ? void 0 : config.baseUrl) !== null && _config$baseUrl !== void 0 ? _config$baseUrl : match[1],
					version: (_config$version = config === null || config === void 0 ? void 0 : config.version) !== null && _config$version !== void 0 ? _config$version : match[2],
					token: (_config$token = config === null || config === void 0 ? void 0 : config.token) !== null && _config$token !== void 0 ? _config$token : match[3]
				};
			}
		}
	}
	function getKit() {
		return window.FontAwesome;
	}
	function isSvgKit() {
		const config = window.FontAwesomeKitConfig;
		return (config === null || config === void 0 ? void 0 : config.method) === SVG_KIT_METHOD;
	}
	//#endregion
	//#region packages/packages/pro/editor-controls-extended/src/icon-libraries/register-atomic-custom-icons.ts
	var CUSTOM_ICON_LIBRARIES_PROVIDER_ID = "custom-icon-libraries";
	var FONT_AWESOME_PRO_PROVIDER_ID = "font-awesome-pro";
	function registerCustomIconLibraries() {
		const core = _elementor_editor_controls;
		const register = core.registerIconLibraryProvider;
		if (typeof register !== "function") return;
		register({
			id: CUSTOM_ICON_LIBRARIES_PROVIDER_ID,
			useIcons: useCustomIconLibraries,
			resolveSvg: resolveCustomIconSvg
		});
		if (typeof core.resolveProviderIconPreviewSvg !== "function") return;
		register({
			id: FONT_AWESOME_PRO_PROVIDER_ID,
			useIcons: useFontAwesomeProIcons,
			resolveSvg: resolveFontAwesomeProSvg,
			resolvePreviewSvg: resolveFontAwesomeProPreviewSvg
		});
	}
	//#endregion
	//#region packages/packages/pro/editor-controls-extended/src/icon-libraries/register-custom-icons-upload-action.tsx
	var CUSTOM_ICONS_UPLOAD_ACTION_ID = "pro-custom-icons-upload-action";
	var CUSTOM_ICONS_UPLOAD_RENEW_URL = "https://go.elementor.com/renew-license-svg-library-upload";
	function registerCustomIconsUploadAction(isExpired) {
		const { injectIntoIconLibraryUploadAction: inject, IconLibraryUploadPromotion: Promotion, IconLibraryUploadButton: UploadButton } = _elementor_editor_controls;
		if (typeof inject !== "function" || !Promotion || !UploadButton) return;
		inject({
			id: CUSTOM_ICONS_UPLOAD_ACTION_ID,
			component: () => /* @__PURE__ */ react.createElement(CustomIconsUploadAction, {
				isExpired,
				Promotion,
				UploadButton
			})
		});
	}
	function CustomIconsUploadAction({ isExpired, Promotion, UploadButton }) {
		if (!areCustomIconLibrariesEnabled()) return isExpired ? /* @__PURE__ */ react.createElement(Promotion, {
			ctaUrl: CUSTOM_ICONS_UPLOAD_RENEW_URL,
			ctaText: (0, _wordpress_i18n.__)("Renew now", "elementor-pro")
		}) : /* @__PURE__ */ react.createElement(Promotion, null);
		const uploadUrl = getCustomIconLibrariesUploadUrl();
		if (!uploadUrl) return null;
		return /* @__PURE__ */ react.createElement(UploadButton, { onClick: () => window.open(uploadUrl, "_blank", "noopener") });
	}
	//#endregion
	//#region packages/packages/pro/editor-controls-extended/src/init.ts
	function init$1() {
		return _init.apply(this, arguments);
	}
	__name(init$1, "init");
	function _init() {
		_init = _asyncToGenerator(function* () {
			registerCustomIconLibraries();
			const [isExpired, features] = yield Promise.all([(0, _elementor_license_api.fetchLicenseStatus)().catch(() => false), (0, _elementor_license_api.fetchTierFeatures)().catch(() => [])]);
			registerCustomIconsUploadAction(isExpired);
			if (features.includes("transitions")) extendTransitionProperties(isExpired);
		});
		return _init.apply(this, arguments);
	}
	//#endregion
	//#region packages/packages/pro/editor-controls-extended/src/controls/attributes-control.tsx
	var AttributesControl = (0, _elementor_editor_controls.createControl)(() => {
		const getHelperText = (key, value) => {
			if (value && !key) return { keyHelper: (0, _wordpress_i18n.__)("Empty attribute names aren't valid and won't render on the page.", "elementor-pro") };
			return {};
		};
		return /* @__PURE__ */ react.createElement(_elementor_editor_controls.KeyValueControl, {
			keyName: (0, _wordpress_i18n.__)("Name", "elementor-pro"),
			valueName: (0, _wordpress_i18n.__)("Value", "elementor-pro"),
			regexKey: "^[a-zA-Z0-9_-]*$",
			validationErrorMessage: (0, _wordpress_i18n.__)("Names can only use letters, numbers, dashes (-) and underscores (_).", "elementor-pro"),
			getHelperText
		});
	});
	//#endregion
	//#region packages/packages/pro/editor-controls-extended/src/controls/options-control.tsx
	var OptionsControl = (0, _elementor_editor_controls.createControl)(() => {
		return /* @__PURE__ */ react.createElement(_elementor_editor_controls.KeyValueControl, {
			keyName: (0, _wordpress_i18n.__)("Name", "elementor-pro"),
			valueName: (0, _wordpress_i18n.__)("Value", "elementor-pro")
		});
	});
	//#endregion
	//#region packages/packages/pro/editor-controls-extended/src/prop-types/display-conditions.ts
	var unknownChildrenSchema$1 = _elementor_schema.z.any().nullable();
	var displayConditionsPropTypeUtil = (0, _elementor_editor_props.createPropUtils)("display-conditions", _elementor_schema.z.array(unknownChildrenSchema$1));
	//#endregion
	//#region packages/packages/pro/editor-controls-extended/src/utils/display-conditions-utils.ts
	function transformV3ToV4(displayConditions) {
		if (!Array.isArray(displayConditions) || !(displayConditions === null || displayConditions === void 0 ? void 0 : displayConditions.length)) return null;
		const transformed = displayConditions.filter((conditionGroup) => !!(conditionGroup === null || conditionGroup === void 0 ? void 0 : conditionGroup.length)).map((conditionGroup) => ({
			$$type: "condition-group",
			value: conditionGroup.map((condition) => _elementor_editor_props.stringPropTypeUtil.create(JSON.stringify(condition)))
		}));
		return transformed.length ? transformed : null;
	}
	function transformV4ToV3(value) {
		var _conditionGroups$map;
		const conditionGroups = value;
		return getStructuredConditions((_conditionGroups$map = conditionGroups === null || conditionGroups === void 0 ? void 0 : conditionGroups.map((group) => group.value.map((conditions) => {
			var _stringPropTypeUtil$e;
			return JSON.parse((_stringPropTypeUtil$e = _elementor_editor_props.stringPropTypeUtil.extract(conditions)) !== null && _stringPropTypeUtil$e !== void 0 ? _stringPropTypeUtil$e : "[]");
		}))) !== null && _conditionGroups$map !== void 0 ? _conditionGroups$map : null);
	}
	function shouldConvertConditionsStructure(conditions) {
		return !!(conditions === null || conditions === void 0 ? void 0 : conditions.length) && !Array.isArray(conditions === null || conditions === void 0 ? void 0 : conditions[0]);
	}
	function getStructuredConditions(conditions) {
		return shouldConvertConditionsStructure(conditions) ? [conditions] : conditions;
	}
	//#endregion
	//#region packages/packages/pro/editor-controls-extended/src/controls/display-conditions-control.tsx
	var OPEN_MODAL_EVENT = "elementor/display-conditions/open";
	var CLOSE_MODAL_EVENT = "elementor/display-conditions/close";
	var SET_CACHE_NOTICE_STATUS_EVENT = "elementor/display-conditions/set-cache-notice-status";
	var ariaLabel = (0, _wordpress_i18n.__)("Display Conditions", "elementor-pro");
	function setCacheNoticeStatus() {
		return _setCacheNoticeStatus.apply(this, arguments);
	}
	function _setCacheNoticeStatus() {
		_setCacheNoticeStatus = _asyncToGenerator(function* () {
			return new Promise((resolve, reject) => {
				window.dispatchEvent(new CustomEvent(SET_CACHE_NOTICE_STATUS_EVENT, { detail: {
					resolve,
					reject
				} }));
			});
		});
		return _setCacheNoticeStatus.apply(this, arguments);
	}
	var DisplayConditionsControl = (0, _elementor_editor_controls.createControl)(({ disabled = false }) => {
		const { setValue, value: displayConditionsValue } = (0, _elementor_editor_controls.useBoundProp)(displayConditionsPropTypeUtil);
		const [isModalOpen, setIsModalOpen] = (0, react.useState)(false);
		const hasValue = !!(displayConditionsValue === null || displayConditionsValue === void 0 ? void 0 : displayConditionsValue.length);
		const setControlValue = (value) => setValue(transformV3ToV4(JSON.parse(value !== null && value !== void 0 ? value : "[]")));
		const getControlValue = () => {
			var _transformV4ToV;
			return (_transformV4ToV = transformV4ToV3(displayConditionsValue)) !== null && _transformV4ToV !== void 0 ? _transformV4ToV : [];
		};
		const onClose = () => {
			setIsModalOpen(false);
			window.dispatchEvent(new CustomEvent(CLOSE_MODAL_EVENT));
		};
		const conditions = getControlValue();
		const openConditionsModal = () => {
			setIsModalOpen(true);
			window.dispatchEvent(new CustomEvent(OPEN_MODAL_EVENT, { detail: { props: {
				getControlValue,
				setControlValue,
				onClose,
				setCacheNoticeStatus
			} } }));
		};
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			spacing: 2,
			sx: {
				justifyContent: "flex-end",
				alignItems: "center"
			}
		}, disabled && /* @__PURE__ */ react.createElement(_elementor_ui.Chip, {
			icon: /* @__PURE__ */ react.createElement(_elementor_icons.CrownFilledIcon, { fontSize: "tiny" }),
			size: "tiny",
			color: "promotion",
			variant: "standard",
			sx: {
				width: "20px",
				"& .MuiChip-label": { display: "none" }
			}
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, {
			title: ariaLabel,
			placement: "top"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			cursor: disabled ? "not-allowed" : "pointer",
			display: "inline-flex"
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.ToggleButton, {
			value: JSON.stringify(conditions),
			size: "tiny",
			variant: "outline",
			"aria-pressed": hasValue,
			"aria-expanded": isModalOpen,
			selected: hasValue,
			"aria-haspopup": "dialog",
			"aria-label": ariaLabel,
			onClick: openConditionsModal,
			disabled,
			sx: { pointerEvents: disabled ? "none" : "auto" },
			"data-behavior": "display-conditions"
		}, /* @__PURE__ */ react.createElement(_elementor_icons.SitemapIcon, { fontSize: "tiny" }))))));
	});
	//#endregion
	//#region packages/packages/pro/editor-controls-extended/src/prop-types/condition-group.ts
	var unknownChildrenSchema = _elementor_schema.z.any().nullable();
	var conditionGroupPropTypeUtil = (0, _elementor_editor_props.createPropUtils)("condition-group", _elementor_schema.z.array(unknownChildrenSchema));
	//#endregion
	//#region node_modules/@monaco-editor/loader/lib/es/_virtual/_rollupPluginBabelHelpers.js
	function _arrayLikeToArray(r, a) {
		(null == a || a > r.length) && (a = r.length);
		for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
		return n;
	}
	function _arrayWithHoles(r) {
		if (Array.isArray(r)) return r;
	}
	function _defineProperty$1(e, r, t) {
		return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
			value: t,
			enumerable: true,
			configurable: true,
			writable: true
		}) : e[r] = t, e;
	}
	__name(_defineProperty$1, "_defineProperty");
	function _iterableToArrayLimit(r, l) {
		var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
		if (null != t) {
			var e;
			var n;
			var i;
			var u;
			var a = [];
			var f = true;
			var o = false;
			try {
				if (i = (t = t.call(r)).next, 0 === l);
				else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
			} catch (r) {
				o = true, n = r;
			} finally {
				try {
					if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
				} finally {
					if (o) throw n;
				}
			}
			return a;
		}
	}
	function _nonIterableRest() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	function ownKeys$1(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(r) {
				return Object.getOwnPropertyDescriptor(e, r).enumerable;
			})), t.push.apply(t, o);
		}
		return t;
	}
	__name(ownKeys$1, "ownKeys");
	function _objectSpread2$1(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys$1(Object(t), true).forEach(function(r) {
				_defineProperty$1(e, r, t[r]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
			});
		}
		return e;
	}
	__name(_objectSpread2$1, "_objectSpread2");
	function _objectWithoutProperties(e, t) {
		if (null == e) return {};
		var o;
		var r;
		var i = _objectWithoutPropertiesLoose(e, t);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
		}
		return i;
	}
	function _objectWithoutPropertiesLoose(r, e) {
		if (null == r) return {};
		var t = {};
		for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
			if (-1 !== e.indexOf(n)) continue;
			t[n] = r[n];
		}
		return t;
	}
	function _slicedToArray(r, e) {
		return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
	}
	function _toPrimitive(t, r) {
		if ("object" != typeof t || !t) return t;
		var e = t[Symbol.toPrimitive];
		if (void 0 !== e) {
			var i = e.call(t, r);
			if ("object" != typeof i) return i;
			throw new TypeError("@@toPrimitive must return a primitive value.");
		}
		return ("string" === r ? String : Number)(t);
	}
	function _toPropertyKey(t) {
		var i = _toPrimitive(t, "string");
		return "symbol" == typeof i ? i : i + "";
	}
	function _unsupportedIterableToArray(r, a) {
		if (r) {
			if ("string" == typeof r) return _arrayLikeToArray(r, a);
			var t = {}.toString.call(r).slice(8, -1);
			return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
		}
	}
	//#endregion
	//#region node_modules/state-local/lib/es/state-local.js
	function _defineProperty(obj, key, value) {
		if (key in obj) Object.defineProperty(obj, key, {
			value,
			enumerable: true,
			configurable: true,
			writable: true
		});
		else obj[key] = value;
		return obj;
	}
	function ownKeys(object, enumerableOnly) {
		var keys = Object.keys(object);
		if (Object.getOwnPropertySymbols) {
			var symbols = Object.getOwnPropertySymbols(object);
			if (enumerableOnly) symbols = symbols.filter(function(sym) {
				return Object.getOwnPropertyDescriptor(object, sym).enumerable;
			});
			keys.push.apply(keys, symbols);
		}
		return keys;
	}
	function _objectSpread2(target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i] != null ? arguments[i] : {};
			if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
				_defineProperty(target, key, source[key]);
			});
			else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
			else ownKeys(Object(source)).forEach(function(key) {
				Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
			});
		}
		return target;
	}
	function compose$1() {
		for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) fns[_key] = arguments[_key];
		return function(x) {
			return fns.reduceRight(function(y, f) {
				return f(y);
			}, x);
		};
	}
	__name(compose$1, "compose");
	function curry$1(fn) {
		return function curried() {
			var _this = this;
			for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
			return args.length >= fn.length ? fn.apply(this, args) : function() {
				for (var _len3 = arguments.length, nextArgs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) nextArgs[_key3] = arguments[_key3];
				return curried.apply(_this, [].concat(args, nextArgs));
			};
		};
	}
	__name(curry$1, "curry");
	function isObject$1(value) {
		return {}.toString.call(value).includes("Object");
	}
	__name(isObject$1, "isObject");
	function isEmpty(obj) {
		return !Object.keys(obj).length;
	}
	function isFunction(value) {
		return typeof value === "function";
	}
	function hasOwnProperty(object, property) {
		return Object.prototype.hasOwnProperty.call(object, property);
	}
	function validateChanges(initial, changes) {
		if (!isObject$1(changes)) errorHandler$1("changeType");
		if (Object.keys(changes).some(function(field) {
			return !hasOwnProperty(initial, field);
		})) errorHandler$1("changeField");
		return changes;
	}
	function validateSelector(selector) {
		if (!isFunction(selector)) errorHandler$1("selectorType");
	}
	function validateHandler(handler) {
		if (!(isFunction(handler) || isObject$1(handler))) errorHandler$1("handlerType");
		if (isObject$1(handler) && Object.values(handler).some(function(_handler) {
			return !isFunction(_handler);
		})) errorHandler$1("handlersType");
	}
	function validateInitial(initial) {
		if (!initial) errorHandler$1("initialIsRequired");
		if (!isObject$1(initial)) errorHandler$1("initialType");
		if (isEmpty(initial)) errorHandler$1("initialContent");
	}
	function throwError$1(errorMessages, type) {
		throw new Error(errorMessages[type] || errorMessages["default"]);
	}
	__name(throwError$1, "throwError");
	var errorHandler$1 = curry$1(throwError$1)({
		initialIsRequired: "initial state is required",
		initialType: "initial state should be an object",
		initialContent: "initial state shouldn't be an empty object",
		handlerType: "handler should be an object or a function",
		handlersType: "all handlers should be a functions",
		selectorType: "selector should be a function",
		changeType: "provided value of changes should be an object",
		changeField: "it seams you want to change a field in the state which is not specified in the \"initial\" state",
		"default": "an unknown error accured in `state-local` package"
	});
	var validators$1 = {
		changes: validateChanges,
		selector: validateSelector,
		handler: validateHandler,
		initial: validateInitial
	};
	function create(initial) {
		var handler = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		validators$1.initial(initial);
		validators$1.handler(handler);
		var state = { current: initial };
		var didUpdate = curry$1(didStateUpdate)(state, handler);
		var update = curry$1(updateState)(state);
		var validate = curry$1(validators$1.changes)(initial);
		var getChanges = curry$1(extractChanges)(state);
		function getState() {
			var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(state) {
				return state;
			};
			validators$1.selector(selector);
			return selector(state.current);
		}
		function setState(causedChanges) {
			compose$1(didUpdate, update, validate, getChanges)(causedChanges);
		}
		return [getState, setState];
	}
	function extractChanges(state, causedChanges) {
		return isFunction(causedChanges) ? causedChanges(state.current) : causedChanges;
	}
	function updateState(state, changes) {
		state.current = _objectSpread2(_objectSpread2({}, state.current), changes);
		return changes;
	}
	function didStateUpdate(state, handler, changes) {
		isFunction(handler) ? handler(state.current) : Object.keys(changes).forEach(function(field) {
			var _handler$field;
			return (_handler$field = handler[field]) === null || _handler$field === void 0 ? void 0 : _handler$field.call(handler, state.current[field]);
		});
		return changes;
	}
	var index = { create };
	//#endregion
	//#region node_modules/@monaco-editor/loader/lib/es/config/index.js
	var config$1 = { paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs" } };
	//#endregion
	//#region node_modules/@monaco-editor/loader/lib/es/utils/curry.js
	function curry(fn) {
		return function curried() {
			var _this = this;
			for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
			return args.length >= fn.length ? fn.apply(this, args) : function() {
				for (var _len2 = arguments.length, nextArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) nextArgs[_key2] = arguments[_key2];
				return curried.apply(_this, [].concat(args, nextArgs));
			};
		};
	}
	//#endregion
	//#region node_modules/@monaco-editor/loader/lib/es/utils/isObject.js
	function isObject(value) {
		return {}.toString.call(value).includes("Object");
	}
	//#endregion
	//#region node_modules/@monaco-editor/loader/lib/es/validators/index.js
	/**
	* validates the configuration object and informs about deprecation
	* @param {Object} config - the configuration object 
	* @return {Object} config - the validated configuration object
	*/
	function validateConfig(config) {
		if (!config) errorHandler("configIsRequired");
		if (!isObject(config)) errorHandler("configType");
		if (config.urls) {
			informAboutDeprecation();
			return { paths: { vs: config.urls.monacoBase } };
		}
		return config;
	}
	/**
	* logs deprecation message
	*/
	function informAboutDeprecation() {
		console.warn(errorMessages.deprecation);
	}
	function throwError(errorMessages, type) {
		throw new Error(errorMessages[type] || errorMessages["default"]);
	}
	var errorMessages = {
		configIsRequired: "the configuration object is required",
		configType: "the configuration object should be an object",
		"default": "an unknown error accured in `@monaco-editor/loader` package",
		deprecation: "Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "
	};
	var errorHandler = curry(throwError)(errorMessages);
	var validators = { config: validateConfig };
	//#endregion
	//#region node_modules/@monaco-editor/loader/lib/es/utils/compose.js
	var compose = function compose() {
		for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) fns[_key] = arguments[_key];
		return function(x) {
			return fns.reduceRight(function(y, f) {
				return f(y);
			}, x);
		};
	};
	//#endregion
	//#region node_modules/@monaco-editor/loader/lib/es/utils/deepMerge.js
	function merge(target, source) {
		Object.keys(source).forEach(function(key) {
			if (source[key] instanceof Object) {
				if (target[key]) Object.assign(source[key], merge(target[key], source[key]));
			}
		});
		return _objectSpread2$1(_objectSpread2$1({}, target), source);
	}
	//#endregion
	//#region node_modules/@monaco-editor/loader/lib/es/utils/makeCancelable.js
	var CANCELATION_MESSAGE = {
		type: "cancelation",
		msg: "operation is manually canceled"
	};
	function makeCancelable(promise) {
		var hasCanceled_ = false;
		var wrappedPromise = new Promise(function(resolve, reject) {
			promise.then(function(val) {
				return hasCanceled_ ? reject(CANCELATION_MESSAGE) : resolve(val);
			});
			promise["catch"](reject);
		});
		return wrappedPromise.cancel = function() {
			return hasCanceled_ = true;
		}, wrappedPromise;
	}
	//#endregion
	//#region node_modules/@monaco-editor/loader/lib/es/loader/index.js
	var _excluded = ["monaco"];
	/** the local state of the module */
	var _state$create2 = _slicedToArray(index.create({
		config: config$1,
		isInitialized: false,
		resolve: null,
		reject: null,
		monaco: null
	}), 2);
	var getState = _state$create2[0];
	var setState = _state$create2[1];
	/**
	* set the loader configuration
	* @param {Object} config - the configuration object
	*/
	function config(globalConfig) {
		var _validators$config = validators.config(globalConfig);
		var monaco = _validators$config.monaco;
		var config = _objectWithoutProperties(_validators$config, _excluded);
		setState(function(state) {
			return {
				config: merge(state.config, config),
				monaco
			};
		});
	}
	/**
	* handles the initialization of the monaco-editor
	* @return {Promise} - returns an instance of monaco (with a cancelable promise)
	*/
	function init() {
		var state = getState(function(_ref) {
			return {
				monaco: _ref.monaco,
				isInitialized: _ref.isInitialized,
				resolve: _ref.resolve
			};
		});
		if (!state.isInitialized) {
			setState({ isInitialized: true });
			if (state.monaco) {
				state.resolve(state.monaco);
				return makeCancelable(wrapperPromise);
			}
			if (window.monaco && window.monaco.editor) {
				storeMonacoInstance(window.monaco);
				state.resolve(window.monaco);
				return makeCancelable(wrapperPromise);
			}
			compose(injectScripts, getMonacoLoaderScript)(configureLoader);
		}
		return makeCancelable(wrapperPromise);
	}
	/**
	* injects provided scripts into the document.body
	* @param {Object} script - an HTML script element
	* @return {Object} - the injected HTML script element
	*/
	function injectScripts(script) {
		return document.body.appendChild(script);
	}
	/**
	* creates an HTML script element with/without provided src
	* @param {string} [src] - the source path of the script
	* @return {Object} - the created HTML script element
	*/
	function createScript(src) {
		var script = document.createElement("script");
		return src && (script.src = src), script;
	}
	/**
	* creates an HTML script element with the monaco loader src
	* @return {Object} - the created HTML script element
	*/
	function getMonacoLoaderScript(configureLoader) {
		var state = getState(function(_ref2) {
			return {
				config: _ref2.config,
				reject: _ref2.reject
			};
		});
		var loaderScript = createScript("".concat(state.config.paths.vs, "/loader.js"));
		loaderScript.onload = function() {
			return configureLoader();
		};
		loaderScript.onerror = state.reject;
		return loaderScript;
	}
	/**
	* configures the monaco loader
	*/
	function configureLoader() {
		var state = getState(function(_ref3) {
			return {
				config: _ref3.config,
				resolve: _ref3.resolve,
				reject: _ref3.reject
			};
		});
		var require = window.require;
		require.config(state.config);
		require(["vs/editor/editor.main"], function(loaded) {
			var monaco = loaded.m || loaded;
			storeMonacoInstance(monaco);
			state.resolve(monaco);
		}, function(error) {
			state.reject(error);
		});
	}
	/**
	* store monaco instance in local state
	*/
	function storeMonacoInstance(monaco) {
		if (!getState().monaco) setState({ monaco });
	}
	/**
	* internal helper function
	* extracts stored monaco instance
	* @return {Object|null} - the monaco instance
	*/
	function __getMonacoInstance() {
		return getState(function(_ref4) {
			return _ref4.monaco;
		});
	}
	var wrapperPromise = new Promise(function(resolve, reject) {
		return setState({
			resolve,
			reject
		});
	});
	var loader = {
		config,
		init,
		__getMonacoInstance
	};
	//#endregion
	//#region node_modules/@monaco-editor/react/dist/index.mjs
	var v = {
		wrapper: {
			display: "flex",
			position: "relative",
			textAlign: "initial"
		},
		fullWidth: { width: "100%" },
		hide: { display: "none" }
	};
	var Y = { container: {
		display: "flex",
		height: "100%",
		width: "100%",
		justifyContent: "center",
		alignItems: "center"
	} };
	function Me({ children: e }) {
		return react$1.default.createElement("div", { style: Y.container }, e);
	}
	var $ = Me;
	function Ee({ width: e, height: r, isEditorReady: n, loading: t, _ref: a, className: m, wrapperProps: E }) {
		return react$1.default.createElement("section", _objectSpread2$2({ style: _objectSpread2$2(_objectSpread2$2({}, v.wrapper), {}, {
			width: e,
			height: r
		}) }, E), !n && react$1.default.createElement($, null, t), react$1.default.createElement("div", {
			ref: a,
			style: _objectSpread2$2(_objectSpread2$2({}, v.fullWidth), !n && v.hide),
			className: m
		}));
	}
	var H = (0, react$1.memo)(Ee);
	function Ce(e) {
		(0, react$1.useEffect)(e, []);
	}
	var k = Ce;
	function he(e, r, n = !0) {
		let t = (0, react$1.useRef)(!0);
		(0, react$1.useEffect)(t.current || !n ? () => {
			t.current = !1;
		} : e, r);
	}
	var l = he;
	function D() {}
	function h(e, r, n, t) {
		return De(e, t) || be(e, r, n, t);
	}
	function De(e, r) {
		return e.editor.getModel(te(e, r));
	}
	function be(e, r, n, t) {
		return e.editor.createModel(r, n, t ? te(e, t) : void 0);
	}
	function te(e, r) {
		return e.Uri.parse(r);
	}
	function Oe({ original: e, modified: r, language: n, originalLanguage: t, modifiedLanguage: a, originalModelPath: m, modifiedModelPath: E, keepCurrentOriginalModel: g = !1, keepCurrentModifiedModel: N = !1, theme: x = "light", loading: P = "Loading...", options: y = {}, height: V = "100%", width: z = "100%", className: F, wrapperProps: j = {}, beforeMount: A = D, onMount: q = D }) {
		let [M, O] = (0, react$1.useState)(!1), [T, s] = (0, react$1.useState)(!0), u = (0, react$1.useRef)(null), c = (0, react$1.useRef)(null), w = (0, react$1.useRef)(null), d = (0, react$1.useRef)(q), o = (0, react$1.useRef)(A), b = (0, react$1.useRef)(!1);
		k(() => {
			let i = loader.init();
			return i.then((f) => (c.current = f) && s(!1)).catch((f) => (f === null || f === void 0 ? void 0 : f.type) !== "cancelation" && console.error("Monaco initialization: error:", f)), () => u.current ? I() : i.cancel();
		}), l(() => {
			if (u.current && c.current) {
				let i = u.current.getOriginalEditor();
				let f = h(c.current, e || "", t || n || "text", m || "");
				f !== i.getModel() && i.setModel(f);
			}
		}, [m], M), l(() => {
			if (u.current && c.current) {
				let i = u.current.getModifiedEditor();
				let f = h(c.current, r || "", a || n || "text", E || "");
				f !== i.getModel() && i.setModel(f);
			}
		}, [E], M), l(() => {
			let i = u.current.getModifiedEditor();
			i.getOption(c.current.editor.EditorOption.readOnly) ? i.setValue(r || "") : r !== i.getValue() && (i.executeEdits("", [{
				range: i.getModel().getFullModelRange(),
				text: r || "",
				forceMoveMarkers: !0
			}]), i.pushUndoStop());
		}, [r], M), l(() => {
			var _u$current;
			(_u$current = u.current) === null || _u$current === void 0 || (_u$current = _u$current.getModel()) === null || _u$current === void 0 || _u$current.original.setValue(e || "");
		}, [e], M), l(() => {
			let { original: i, modified: f } = u.current.getModel();
			c.current.editor.setModelLanguage(i, t || n || "text"), c.current.editor.setModelLanguage(f, a || n || "text");
		}, [
			n,
			t,
			a
		], M), l(() => {
			var _c$current;
			(_c$current = c.current) === null || _c$current === void 0 || _c$current.editor.setTheme(x);
		}, [x], M), l(() => {
			var _u$current2;
			(_u$current2 = u.current) === null || _u$current2 === void 0 || _u$current2.updateOptions(y);
		}, [y], M);
		let L = (0, react$1.useCallback)(() => {
			var _u$current3;
			if (!c.current) return;
			o.current(c.current);
			let i = h(c.current, e || "", t || n || "text", m || "");
			let f = h(c.current, r || "", a || n || "text", E || "");
			(_u$current3 = u.current) === null || _u$current3 === void 0 || _u$current3.setModel({
				original: i,
				modified: f
			});
		}, [
			n,
			r,
			a,
			e,
			t,
			m,
			E
		]);
		let U = (0, react$1.useCallback)(() => {
			var _c$current2;
			!b.current && w.current && (u.current = c.current.editor.createDiffEditor(w.current, _objectSpread2$2({ automaticLayout: !0 }, y)), L(), (_c$current2 = c.current) === null || _c$current2 === void 0 || _c$current2.editor.setTheme(x), O(!0), b.current = !0);
		}, [
			y,
			x,
			L
		]);
		(0, react$1.useEffect)(() => {
			M && d.current(u.current, c.current);
		}, [M]), (0, react$1.useEffect)(() => {
			!T && !M && U();
		}, [
			T,
			M,
			U
		]);
		function I() {
			var _u$current4;
			var _i$original;
			var _i$modified;
			var _u$current5;
			let i = (_u$current4 = u.current) === null || _u$current4 === void 0 ? void 0 : _u$current4.getModel();
			g || i === null || i === void 0 || (_i$original = i.original) === null || _i$original === void 0 || _i$original.dispose(), N || i === null || i === void 0 || (_i$modified = i.modified) === null || _i$modified === void 0 || _i$modified.dispose(), (_u$current5 = u.current) === null || _u$current5 === void 0 || _u$current5.dispose();
		}
		return react$1.default.createElement(H, {
			width: z,
			height: V,
			isEditorReady: M,
			loading: P,
			_ref: w,
			className: F,
			wrapperProps: j
		});
	}
	(0, react$1.memo)(Oe);
	function He(e) {
		let r = (0, react$1.useRef)();
		return (0, react$1.useEffect)(() => {
			r.current = e;
		}, [e]), r.current;
	}
	var se = He;
	var _ = /* @__PURE__ */ new Map();
	function Ve({ defaultValue: e, defaultLanguage: r, defaultPath: n, value: t, language: a, path: m, theme: E = "light", line: g, loading: N = "Loading...", options: x = {}, overrideServices: P = {}, saveViewState: y = !0, keepCurrentModel: V = !1, width: z = "100%", height: F = "100%", className: j, wrapperProps: A = {}, beforeMount: q = D, onMount: M = D, onChange: O, onValidate: T = D }) {
		let [s, u] = (0, react$1.useState)(!1), [c, w] = (0, react$1.useState)(!0), d = (0, react$1.useRef)(null), o = (0, react$1.useRef)(null), b = (0, react$1.useRef)(null), L = (0, react$1.useRef)(M), U = (0, react$1.useRef)(q), I = (0, react$1.useRef)(), i = (0, react$1.useRef)(t), f = se(m), Q = (0, react$1.useRef)(!1), B = (0, react$1.useRef)(!1);
		k(() => {
			let p = loader.init();
			return p.then((R) => (d.current = R) && w(!1)).catch((R) => (R === null || R === void 0 ? void 0 : R.type) !== "cancelation" && console.error("Monaco initialization: error:", R)), () => o.current ? pe() : p.cancel();
		}), l(() => {
			var _o$current;
			var _o$current2;
			var _o$current3;
			var _o$current4;
			let p = h(d.current, e || t || "", r || a || "", m || n || "");
			p !== ((_o$current = o.current) === null || _o$current === void 0 ? void 0 : _o$current.getModel()) && (y && _.set(f, (_o$current2 = o.current) === null || _o$current2 === void 0 ? void 0 : _o$current2.saveViewState()), (_o$current3 = o.current) === null || _o$current3 === void 0 || _o$current3.setModel(p), y && ((_o$current4 = o.current) === null || _o$current4 === void 0 || _o$current4.restoreViewState(_.get(m))));
		}, [m], s), l(() => {
			var _o$current5;
			(_o$current5 = o.current) === null || _o$current5 === void 0 || _o$current5.updateOptions(x);
		}, [x], s), l(() => {
			!o.current || t === void 0 || (o.current.getOption(d.current.editor.EditorOption.readOnly) ? o.current.setValue(t) : t !== o.current.getValue() && (B.current = !0, o.current.executeEdits("", [{
				range: o.current.getModel().getFullModelRange(),
				text: t,
				forceMoveMarkers: !0
			}]), o.current.pushUndoStop(), B.current = !1));
		}, [t], s), l(() => {
			var _o$current6;
			var _d$current;
			let p = (_o$current6 = o.current) === null || _o$current6 === void 0 ? void 0 : _o$current6.getModel();
			p && a && ((_d$current = d.current) === null || _d$current === void 0 || _d$current.editor.setModelLanguage(p, a));
		}, [a], s), l(() => {
			var _o$current7;
			g !== void 0 && ((_o$current7 = o.current) === null || _o$current7 === void 0 || _o$current7.revealLine(g));
		}, [g], s), l(() => {
			var _d$current2;
			(_d$current2 = d.current) === null || _d$current2 === void 0 || _d$current2.editor.setTheme(E);
		}, [E], s);
		let X = (0, react$1.useCallback)(() => {
			if (!(!b.current || !d.current) && !Q.current) {
				var _d$current3;
				U.current(d.current);
				let p = m || n;
				let R = h(d.current, t || e || "", r || a || "", p || "");
				o.current = (_d$current3 = d.current) === null || _d$current3 === void 0 ? void 0 : _d$current3.editor.create(b.current, _objectSpread2$2({
					model: R,
					automaticLayout: !0
				}, x), P), y && o.current.restoreViewState(_.get(p)), d.current.editor.setTheme(E), g !== void 0 && o.current.revealLine(g), u(!0), Q.current = !0;
			}
		}, [
			e,
			r,
			n,
			t,
			a,
			m,
			x,
			P,
			y,
			E,
			g
		]);
		(0, react$1.useEffect)(() => {
			s && L.current(o.current, d.current);
		}, [s]), (0, react$1.useEffect)(() => {
			!c && !s && X();
		}, [
			c,
			s,
			X
		]), i.current = t, (0, react$1.useEffect)(() => {
			var _I$current;
			var _o$current8;
			s && O && ((_I$current = I.current) === null || _I$current === void 0 || _I$current.dispose(), I.current = (_o$current8 = o.current) === null || _o$current8 === void 0 ? void 0 : _o$current8.onDidChangeModelContent((p) => {
				B.current || O(o.current.getValue(), p);
			}));
		}, [s, O]), (0, react$1.useEffect)(() => {
			if (s) {
				let p = d.current.editor.onDidChangeMarkers((R) => {
					var _o$current$getModel;
					let G = (_o$current$getModel = o.current.getModel()) === null || _o$current$getModel === void 0 ? void 0 : _o$current$getModel.uri;
					if (G && R.find((J) => J.path === G.path)) {
						let J = d.current.editor.getModelMarkers({ resource: G });
						T === null || T === void 0 || T(J);
					}
				});
				return () => {
					p === null || p === void 0 || p.dispose();
				};
			}
			return () => {};
		}, [s, T]);
		function pe() {
			var _I$current2;
			var _o$current$getModel2;
			(_I$current2 = I.current) === null || _I$current2 === void 0 || _I$current2.dispose(), V ? y && _.set(m, o.current.saveViewState()) : (_o$current$getModel2 = o.current.getModel()) === null || _o$current$getModel2 === void 0 || _o$current$getModel2.dispose(), o.current.dispose();
		}
		return react$1.default.createElement(H, {
			width: z,
			height: F,
			isEditorReady: s,
			loading: N,
			_ref: b,
			className: j,
			wrapperProps: A
		});
	}
	var de = (0, react$1.memo)(Ve);
	//#endregion
	//#region packages/packages/pro/editor-controls-extended/src/components/css-code-editor/css-editor-options.ts
	var CSS_EDITOR_QUICK_SUGGESTIONS = {
		other: true,
		comments: false,
		strings: true
	};
	function getCssEditorAutocompleteOptions() {
		return {
			acceptSuggestionOnCommitCharacter: false,
			acceptSuggestionOnEnter: "off",
			inlineSuggest: { enabled: false },
			quickSuggestions: CSS_EDITOR_QUICK_SUGGESTIONS,
			suggestOnTriggerCharacters: true,
			tabCompletion: "off",
			wordBasedSuggestions: "off"
		};
	}
	function getCssEditorMonacoOptions(readOnly) {
		return _objectSpread2$2(_objectSpread2$2({}, getCssEditorAutocompleteOptions()), {}, {
			lineNumbers: "on",
			lineNumbersMinChars: 3,
			folding: true,
			minimap: { enabled: false },
			fontFamily: "Roboto, Arial, Helvetica, Verdana, sans-serif",
			fontSize: 12,
			renderLineHighlight: "none",
			hideCursorInOverviewRuler: true,
			overviewRulerBorder: false,
			fixedOverflowWidgets: true,
			suggestFontSize: 10,
			suggestLineHeight: 14,
			stickyScroll: { enabled: false },
			lineDecorationsWidth: 2,
			wordWrap: "on",
			scrollBeyondLastLine: false,
			readOnly,
			editContext: false
		});
	}
	//#endregion
	//#region packages/packages/pro/editor-controls-extended/src/components/css-code-editor/css-validation.ts
	var syntaxRules = {
		pseudoState: {
			pattern: "^\\s*[&]{0,1}\\s*(?::hover|:active|:focus)",
			regex: true,
			message: (0, _wordpress_i18n.__)("Consider switching to the desired pseudo state in the panel instead of using pseudo-classes here.", "elementor-pro")
		},
		mediaQuery: {
			pattern: "@media\\s+[^{]*\\b(?:min-width|max-width|width)\\b",
			regex: true,
			message: (0, _wordpress_i18n.__)("Consider switching to the desired breakpoint in the panel instead of using @media width queries here.", "elementor-pro")
		}
	};
	function setCustomSyntaxRules(editor, monaco, options) {
		const model = editor.getModel();
		if (!model) return;
		const customMarkers = [];
		Object.entries(syntaxRules).forEach(([id, rule]) => {
			var _options$rules;
			var _rule$regex;
			if ((options === null || options === void 0 || (_options$rules = options.rules) === null || _options$rules === void 0 ? void 0 : _options$rules[id]) === false) return;
			model.findMatches(rule.pattern, true, (_rule$regex = rule.regex) !== null && _rule$regex !== void 0 ? _rule$regex : false, true, null, true).forEach((match) => {
				customMarkers.push({
					severity: monaco.MarkerSeverity.Warning,
					message: rule.message,
					startLineNumber: match.range.startLineNumber,
					startColumn: match.range.startColumn,
					endLineNumber: match.range.endLineNumber,
					endColumn: match.range.endColumn,
					source: "custom-css-rules"
				});
			});
		});
		monaco.editor.setModelMarkers(model, "custom-css-rules", customMarkers);
	}
	function clearMarkersFromVisualContent(editor, monaco) {
		const model = editor.getModel();
		if (!model) return;
		const allMarkers = monaco.editor.getModelMarkers({ resource: model.uri });
		const nonCustomMarkers = allMarkers.filter((marker) => marker.startLineNumber !== 1).filter((m) => m.source !== "custom-css-rules");
		if (nonCustomMarkers.length === allMarkers.length) return;
		monaco.editor.setModelMarkers(model, "css", nonCustomMarkers);
	}
	//#endregion
	//#region packages/packages/pro/editor-controls-extended/src/components/css-code-editor/configure-css-editor.ts
	function configureCssEditorAutocomplete(editor) {
		editor.updateOptions(getCssEditorAutocompleteOptions());
	}
	function applyCustomSyntaxRules(editor, monaco, syntaxRuleOptions) {
		setCustomSyntaxRules(editor, monaco, syntaxRuleOptions);
	}
	//#endregion
	//#region packages/packages/pro/editor-controls-extended/src/components/css-code-editor/css-editor.styles.ts
	var EditorWrapper = (0, _elementor_ui.styled)(_elementor_ui.Box)`
	/* @noflip */
	direction: ltr;
	border: 1px solid var( --e-a-border-color );
	border-radius: 8px;
	padding: 4px;
	position: relative;
	height: 200px;

	.monaco-editor .suggest-widget {
		width: 220px !important;
		max-width: 220px !important;
		z-index: 1001;
	}

	.visual-content-dimmed {
		opacity: 0.6;
		color: #aaa !important;
		pointer-events: none;
	}

	.monaco-editor {
		.margin-view-overlays > div:nth-of-type( 1 ) .cldr.codicon.codicon-folding-expanded {
			visibility: hidden;
		}

		.monaco-scrollable-element {
			> .scrollbar {
				width: 6px !important;

				> .slider {
					width: 6px !important;
				}
			}
		}
	}
`;
	var ResizeHandle = (0, _elementor_ui.styled)(_elementor_ui.Button)`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	height: 6px;
	cursor: ns-resize;
	background: transparent;
	border: none;
	padding: 0;

	&:hover {
		background: rgba( 0, 0, 0, 0.05 );
	}

	&:active {
		background: rgba( 0, 0, 0, 0.1 );
	}

	&::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate( -50%, -50% );
		width: 30px;
		height: 2px;
		background: var( --e-a-border-color );
		border-radius: 1px;
	}
`;
	//#endregion
	//#region packages/packages/pro/editor-controls-extended/src/components/css-code-editor/visual-content-change-protection.ts
	var preventChangeOnVisualContent = (editor) => {
		const model = editor.getModel();
		if (!model) return;
		applyVisualContentStyling(editor, model);
		model.onDidChangeContent(() => {
			applyVisualContentStyling(editor, model);
		});
		disableCursorOnVisualContent(editor);
		moveCursorToEditableContentOnFocus(editor);
		overridePushEditOperations(model);
	};
	var moveCursorToEditableContent = (editor) => {
		const model = editor.getModel();
		if (!model) return;
		const position = editor.getPosition();
		const totalLines = model.getLineCount();
		if (!position) {
			editor.setPosition({
				lineNumber: 2,
				column: 1
			});
			return;
		}
		if (position.lineNumber === 1) {
			editor.setPosition({
				lineNumber: 2,
				column: 1
			});
			return;
		}
		if (position.lineNumber === totalLines) editor.setPosition({
			lineNumber: totalLines - 1,
			column: model.getLineContent(totalLines - 1).length + 1
		});
	};
	var moveCursorToEditableContentOnFocus = (editor) => {
		editor.onDidFocusEditorWidget(() => {
			moveCursorToEditableContent(editor);
		});
	};
	var applyVisualContentStyling = (editor, model) => {
		const decorationsCollection = editor.createDecorationsCollection();
		const lineCount = model.getLineCount();
		const decorations = [];
		decorations.push({
			range: {
				startLineNumber: 1,
				startColumn: 1,
				endLineNumber: 1,
				endColumn: model.getLineContent(1).length + 1
			},
			options: {
				inlineClassName: "visual-content-dimmed",
				isWholeLine: false
			}
		});
		if (lineCount > 1) decorations.push({
			range: {
				startLineNumber: lineCount,
				startColumn: 1,
				endLineNumber: lineCount,
				endColumn: model.getLineContent(lineCount).length + 1
			},
			options: {
				inlineClassName: "visual-content-dimmed",
				isWholeLine: false
			}
		});
		decorationsCollection.set(decorations);
	};
	var disableCursorOnVisualContent = (editor) => {
		const model = editor.getModel();
		if (!model) return;
		editor.onDidChangeCursorPosition((e) => {
			const totalLines = model.getLineCount();
			const position = e.position;
			if (position.lineNumber === 1) editor.setPosition({
				lineNumber: 2,
				column: 1
			});
			else if (position.lineNumber === totalLines) editor.setPosition({
				lineNumber: totalLines - 1,
				column: model.getLineContent(totalLines - 1).length + 1
			});
		});
	};
	var overridePushEditOperations = (model) => {
		const originalPushEditOperations = model.pushEditOperations;
		model.pushEditOperations = (beforeCursorState, editOperations, cursorStateComputer) => {
			const totalLines = model.getLineCount();
			const modelRange = model.getFullModelRange();
			const filteredOperations = editOperations.map((operation) => {
				if (!isFullContentReplacement(operation.range, modelRange) || operation.text === null || hasVisualContent(operation.text) || !isPlainUserCssForFullReplace(operation.text)) return operation;
				return _objectSpread2$2(_objectSpread2$2({}, operation), {}, { text: setVisualContent(operation.text.trim()) });
			}).filter((operation) => {
				const range = operation.range;
				const affectsProtectedLine = range.startLineNumber === 1 || range.endLineNumber === 1 || range.startLineNumber === totalLines || range.endLineNumber === totalLines;
				if (affectsProtectedLine && isFullContentReplacement(range, modelRange) && hasVisualContent(operation.text)) return true;
				return !affectsProtectedLine;
			});
			return originalPushEditOperations.call(model, beforeCursorState, filteredOperations, cursorStateComputer);
		};
	};
	var isFullContentReplacement = (range, modelRange) => {
		return range.startLineNumber === modelRange.startLineNumber && range.endLineNumber === modelRange.endLineNumber && range.startColumn === modelRange.startColumn && range.endColumn === modelRange.endColumn;
	};
	var hasVisualContent = (text) => {
		if (!text) return false;
		return text.startsWith("element.style {") && text.endsWith("}");
	};
	var isPlainUserCssForFullReplace = (text) => {
		const trimmed = text.trim();
		if (trimmed === "") return true;
		if (trimmed.includes("element.style") || trimmed.includes("{") || trimmed.includes("}")) return false;
		return trimmed.includes(":");
	};
	var setVisualContent = (value) => {
		const trimmed = value.trim();
		return `element.style {\n${trimmed ? "  " + trimmed.replace(/\n/g, "\n  ") + "\n" : "  \n"}}`;
	};
	var getActual = (value) => {
		const lines = value.split("\n");
		if (lines.length < 2) return "";
		return lines.slice(1, -1).map((line) => line.replace(/^ {2}/, "")).join("\n");
	};
	//#endregion
	//#region packages/packages/pro/editor-controls-extended/src/components/css-code-editor/css-editor-programmatic-sync.ts
	var PROGRAMMATIC_MODEL_SYNC_SUPPRESS_RELEASE_MS = 10;
	var setModelValueWithoutNotifyingParent = (model, suppressContentChangeRef, debounceTimerRef, userValue) => {
		if (debounceTimerRef.current) {
			clearTimeout(debounceTimerRef.current);
			debounceTimerRef.current = null;
		}
		suppressContentChangeRef.current = true;
		const contentChangeDisposable = model.onDidChangeContent(() => {
			contentChangeDisposable.dispose();
		});
		model.setValue(setVisualContent(userValue));
		setTimeout(() => {
			contentChangeDisposable.dispose();
			suppressContentChangeRef.current = false;
		}, PROGRAMMATIC_MODEL_SYNC_SUPPRESS_RELEASE_MS);
	};
	//#endregion
	//#region packages/packages/pro/editor-controls-extended/src/components/css-code-editor/monaco-panel-escape.ts
	var CONTROL_ANCHOR_SELECTOR = ".elementor-control, [data-type=\"settings-field\"], [role=\"group\"]";
	function getRenderedAnchor(anchor) {
		var _candidate$ownerDocum;
		let candidate = anchor;
		while (candidate && "contents" === ((_candidate$ownerDocum = candidate.ownerDocument.defaultView) === null || _candidate$ownerDocum === void 0 ? void 0 : _candidate$ownerDocum.getComputedStyle(candidate).display)) candidate = candidate.firstElementChild;
		return candidate;
	}
	function getEscapeAnchor(field) {
		const monacoRoot = field.closest(".monaco-editor");
		return getRenderedAnchor(field.closest(CONTROL_ANCHOR_SELECTOR) || (monacoRoot ? monacoRoot.parentElement : field.parentElement));
	}
	function parkFocusOnAnchor(anchor) {
		const hadTabIndex = anchor.hasAttribute("tabindex");
		if (!hadTabIndex) anchor.setAttribute("tabindex", "-1");
		anchor.focus({ preventScroll: true });
		if (anchor.ownerDocument.activeElement !== anchor) {
			if (!hadTabIndex) anchor.removeAttribute("tabindex");
			return;
		}
		const onFocusOut = (event) => {
			if (event.relatedTarget && anchor.contains(event.relatedTarget)) return;
			anchor.removeEventListener("focusout", onFocusOut);
			if (!hadTabIndex) anchor.removeAttribute("tabindex");
		};
		anchor.addEventListener("focusout", onFocusOut);
	}
	function isMonacoSuggestWidgetVisible(editor) {
		var _editor$getDomNode;
		return !!((_editor$getDomNode = editor.getDomNode()) === null || _editor$getDomNode === void 0 ? void 0 : _editor$getDomNode.querySelector(".suggest-widget.visible"));
	}
	function blurMonacoField(editor) {
		var _editor$getDomNode2;
		const field = (_editor$getDomNode2 = editor.getDomNode()) === null || _editor$getDomNode2 === void 0 ? void 0 : _editor$getDomNode2.ownerDocument.activeElement;
		if (!field || !(field instanceof HTMLElement)) return;
		const anchor = getEscapeAnchor(field);
		field.blur();
		if (anchor) parkFocusOnAnchor(anchor);
	}
	function registerMonacoPanelEscape(editor, monaco) {
		var _editor$getDomNode3;
		const panelRoot = (_editor$getDomNode3 = editor.getDomNode()) === null || _editor$getDomNode3 === void 0 ? void 0 : _editor$getDomNode3.closest("#elementor-panel-inner");
		if (!panelRoot || !(panelRoot instanceof HTMLElement)) return;
		const disposable = editor.onKeyDown((keyboardEvent) => {
			if (keyboardEvent.keyCode !== monaco.KeyCode.Escape) return;
			if (isMonacoSuggestWidgetVisible(editor)) return;
			keyboardEvent.browserEvent.stopPropagation();
			keyboardEvent.browserEvent.preventDefault();
			blurMonacoField(editor);
		});
		editor.onDidDispose(() => {
			disposable.dispose();
		});
	}
	//#endregion
	//#region packages/packages/pro/editor-controls-extended/src/components/css-code-editor/resize-handle.tsx
	var ResizeHandleComponent = ({ onResize, containerRef, onHeightChange }) => {
		const handleResizeMove = react.useCallback((e) => {
			const container = containerRef.current;
			if (!container) return;
			const containerRect = container.getBoundingClientRect();
			const newHeight = Math.max(100, e.clientY - containerRect.top);
			onHeightChange === null || onHeightChange === void 0 || onHeightChange(newHeight);
			onResize(newHeight);
		}, [
			containerRef,
			onResize,
			onHeightChange
		]);
		const handleResizeEnd = react.useCallback(() => {
			document.removeEventListener("mousemove", handleResizeMove);
			document.removeEventListener("mouseup", handleResizeEnd);
		}, [handleResizeMove]);
		const handleResizeStart = react.useCallback((e) => {
			e.preventDefault();
			e.stopPropagation();
			document.addEventListener("mousemove", handleResizeMove);
			document.addEventListener("mouseup", handleResizeEnd);
		}, [handleResizeMove, handleResizeEnd]);
		react.useEffect(() => {
			return () => {
				document.removeEventListener("mousemove", handleResizeMove);
				document.removeEventListener("mouseup", handleResizeEnd);
			};
		}, [handleResizeMove, handleResizeEnd]);
		return /* @__PURE__ */ react.createElement(ResizeHandle, {
			onMouseDown: handleResizeStart,
			"aria-label": "Resize editor height",
			title: "Drag to resize editor height"
		});
	};
	//#endregion
	//#region packages/packages/pro/editor-controls-extended/src/components/css-code-editor/css-editor.tsx
	var createEditorDidMountHandler = (editorRef, monacoRef, latestValueRef, suppressContentChangeRef, debounceTimerRef, lastEmittedValueRef, onUserContentChange, syntaxRuleOptions) => {
		return (editor, monaco) => {
			var _editor$getModel$getV;
			var _editor$getModel;
			editorRef.current = editor;
			monacoRef.current = monaco;
			const model = editor.getModel();
			if (model) {
				setModelValueWithoutNotifyingParent(model, suppressContentChangeRef, debounceTimerRef, latestValueRef.current);
				lastEmittedValueRef.current = latestValueRef.current;
			}
			preventChangeOnVisualContent(editor);
			configureCssEditorAutocomplete(editor);
			applyCustomSyntaxRules(editor, monaco, syntaxRuleOptions);
			onUserContentChange(getActual((_editor$getModel$getV = (_editor$getModel = editor.getModel()) === null || _editor$getModel === void 0 ? void 0 : _editor$getModel.getValue()) !== null && _editor$getModel$getV !== void 0 ? _editor$getModel$getV : ""));
			monaco.editor.onDidChangeMarkers(() => {
				clearMarkersFromVisualContent(editor, monaco);
			});
			disableFoldingFirstRow(editor);
			registerMonacoPanelEscape(editor, monaco);
			editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyA, () => {
				const editorModel = editor.getModel();
				if (!editorModel) return;
				const fullRange = editorModel.getFullModelRange();
				const contentEndLine = fullRange.endLineNumber - 1;
				let endColumn = editorModel.getLineLastNonWhitespaceColumn(contentEndLine);
				if (endColumn === 0) endColumn = editorModel.getLineMaxColumn(contentEndLine);
				editor.setSelection(new monaco.Selection(fullRange.startLineNumber + 1, fullRange.startColumn, contentEndLine, endColumn));
			});
		};
	};
	function disableFoldingFirstRow(editor) {
		var _editor$getDomNode;
		if (!(typeof editor.getDomNode === "function")) return;
		const marginViewOverlays = (_editor$getDomNode = editor.getDomNode()) === null || _editor$getDomNode === void 0 ? void 0 : _editor$getDomNode.querySelector(".margin-view-overlays");
		const handler = (event) => {
			const ev = event;
			if (ev.button !== 0) return;
			const target = ev.target;
			const firstElem = marginViewOverlays === null || marginViewOverlays === void 0 ? void 0 : marginViewOverlays.children[0];
			if (target === firstElem || target.parentElement === firstElem) {
				event.preventDefault();
				event.stopPropagation();
			}
		};
		marginViewOverlays === null || marginViewOverlays === void 0 || marginViewOverlays.addEventListener("mousedown", handler);
		editor.onDidDispose(() => {
			marginViewOverlays === null || marginViewOverlays === void 0 || marginViewOverlays.removeEventListener("mousedown", handler);
		});
	}
	var CssEditor = ({ value, onChange, syncKey, syntaxRuleOptions, readOnly = false }) => {
		const theme = (0, _elementor_ui.useTheme)();
		const containerRef = (0, react.useRef)(null);
		const editorRef = (0, react.useRef)(null);
		const monacoRef = (0, react.useRef)(null);
		const debounceTimer = (0, react.useRef)(null);
		const suppressContentChangeRef = (0, react.useRef)(false);
		const lastSyncKeyRef = (0, react.useRef)(syncKey);
		const lastEmittedValueRef = (0, react.useRef)(value);
		const latestValueRef = (0, react.useRef)(value);
		const initialWrappedValueRef = (0, react.useRef)(setVisualContent(value));
		latestValueRef.current = value;
		const [hasContent, setHasContent] = (0, react.useState)(value.trim() !== "");
		const [contentVersion, setContentVersion] = (0, react.useState)(0);
		useOnUpdate(() => {
			var _editorRef$current$ge;
			var _editorRef$current;
			const userContent = getActual((_editorRef$current$ge = (_editorRef$current = editorRef.current) === null || _editorRef$current === void 0 || (_editorRef$current = _editorRef$current.getModel()) === null || _editorRef$current === void 0 ? void 0 : _editorRef$current.getValue()) !== null && _editorRef$current$ge !== void 0 ? _editorRef$current$ge : "");
			setHasContent(userContent.trim() !== "");
			onChange(userContent);
			lastEmittedValueRef.current = userContent;
		}, [contentVersion]);
		const handleUserContentChange = (0, react.useCallback)((newValue) => {
			setHasContent(newValue.trim() !== "");
		}, []);
		const handleResize = (0, react.useCallback)(() => {
			var _editorRef$current2;
			(_editorRef$current2 = editorRef.current) === null || _editorRef$current2 === void 0 || _editorRef$current2.layout();
		}, []);
		const handleHeightChange = (0, react.useCallback)((height) => {
			if (containerRef.current) containerRef.current.style.height = `${height}px`;
		}, []);
		const handleEditorChange = (0, react.useCallback)(() => {
			if (suppressContentChangeRef.current || !editorRef.current || !monacoRef.current) return;
			applyCustomSyntaxRules(editorRef.current, monacoRef.current, syntaxRuleOptions);
			if (debounceTimer.current) clearTimeout(debounceTimer.current);
			debounceTimer.current = setTimeout(() => {
				setContentVersion((prev) => prev + 1);
			}, 500);
		}, [syntaxRuleOptions]);
		const handleEditorDidMount = (0, react.useCallback)((editor, monaco) => {
			createEditorDidMountHandler(editorRef, monacoRef, latestValueRef, suppressContentChangeRef, debounceTimer, lastEmittedValueRef, handleUserContentChange, syntaxRuleOptions)(editor, monaco);
		}, [handleUserContentChange, syntaxRuleOptions]);
		const handleReset = () => {
			var _editorRef$current3;
			return (_editorRef$current3 = editorRef.current) === null || _editorRef$current3 === void 0 || (_editorRef$current3 = _editorRef$current3.getModel()) === null || _editorRef$current3 === void 0 ? void 0 : _editorRef$current3.setValue(setVisualContent(""));
		};
		(0, react.useEffect)(() => {
			var _editorRef$current4;
			const model = (_editorRef$current4 = editorRef.current) === null || _editorRef$current4 === void 0 ? void 0 : _editorRef$current4.getModel();
			if (!model) return;
			const syncKeyChanged = lastSyncKeyRef.current !== syncKey;
			if (syncKeyChanged) lastSyncKeyRef.current = syncKey;
			const modelUserContent = getActual(model.getValue());
			const shouldSyncForExternalValue = !syncKeyChanged && value !== lastEmittedValueRef.current && value !== modelUserContent;
			if (!syncKeyChanged && !shouldSyncForExternalValue) return;
			setModelValueWithoutNotifyingParent(model, suppressContentChangeRef, debounceTimer, value);
			lastEmittedValueRef.current = value;
		}, [syncKey, value]);
		(0, react.useEffect)(() => {
			if (!editorRef.current || !monacoRef.current) return;
			applyCustomSyntaxRules(editorRef.current, monacoRef.current, syntaxRuleOptions);
		}, [syntaxRuleOptions]);
		(0, react.useEffect)(() => {
			var _editorRef$current5;
			(_editorRef$current5 = editorRef.current) === null || _editorRef$current5 === void 0 || _editorRef$current5.updateOptions(getCssEditorMonacoOptions(readOnly));
		}, [readOnly]);
		(0, react.useEffect)(() => {
			const timerRef = debounceTimer;
			return () => {
				const timer = timerRef.current;
				if (timer) clearTimeout(timer);
			};
		}, []);
		const monacoOptions = getCssEditorMonacoOptions(readOnly);
		return /* @__PURE__ */ react.createElement(_elementor_editor_ui.FloatingActionsBar, { actions: hasContent ? [/* @__PURE__ */ react.createElement(_elementor_editor_controls.ClearIconButton, {
			key: "clear",
			tooltipText: (0, _wordpress_i18n.__)("Clear", "elementor-pro"),
			onClick: handleReset
		})] : [] }, /* @__PURE__ */ react.createElement(_elementor_ui.Box, null, /* @__PURE__ */ react.createElement(EditorWrapper, {
			ref: containerRef,
			dir: "ltr"
		}, /* @__PURE__ */ react.createElement(de, {
			height: "100%",
			language: "css",
			theme: theme.palette.mode === "dark" ? "vs-dark" : "vs",
			defaultValue: initialWrappedValueRef.current,
			onMount: handleEditorDidMount,
			onChange: handleEditorChange,
			options: monacoOptions
		}), /* @__PURE__ */ react.createElement(ResizeHandleComponent, {
			onResize: handleResize,
			containerRef,
			onHeightChange: handleHeightChange
		}))));
	};
	function useOnUpdate(callback, dependencies) {
		const hasMounted = (0, react.useRef)(false);
		(0, react.useEffect)(() => {
			if (hasMounted.current) callback();
			else hasMounted.current = true;
		}, dependencies);
	}
	//#endregion
	//#region packages/packages/pro/editor-controls-extended/src/index.ts
	init$1();
	//#endregion
	exports.AttributesControl = AttributesControl;
	exports.CssEditor = CssEditor;
	exports.DisplayConditionsControl = DisplayConditionsControl;
	exports.OptionsControl = OptionsControl;
	exports.conditionGroupPropTypeUtil = conditionGroupPropTypeUtil;
	exports.displayConditionsPropTypeUtil = displayConditionsPropTypeUtil;
})(this.elementorV2.editorControlsExtended = this.elementorV2.editorControlsExtended || {}, elementorV2.licenseApi, elementorV2.editorControls, elementorV2.httpClient, elementorV2.query, React, wp.i18n, elementorV2.icons, elementorV2.ui, elementorV2.editorProps, elementorV2.schema, elementorV2.editorUi);

window.elementorV2.editorControlsExtended?.init?.();
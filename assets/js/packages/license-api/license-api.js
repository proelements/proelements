/*! pro-elements - v4.3.0 - 22-09-2026 */
this.elementorV2 = this.elementorV2 || {};
(function(exports, _elementor_http_client, _elementor_query) {
	Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
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
	//#region packages/packages/pro/license-api/src/api.ts
	var TIER_FEATURES_URL = "elementor-pro/v1/license/tier-features";
	var LICENSE_STATUS_URL = "elementor-pro/v1/license/get-license-status";
	var CACHE_TTL_MS = 2e4;
	var cache = /* @__PURE__ */ new Map();
	function cachedGet(url) {
		const now = Date.now();
		const cached = cache.get(url);
		if (cached && now < cached.expiry) return cached.promise;
		const promise = (0, _elementor_http_client.httpService)().get(url).catch((error) => {
			cache.delete(url);
			throw error;
		});
		cache.set(url, {
			promise,
			expiry: now + CACHE_TTL_MS
		});
		return promise;
	}
	function fetchTierFeatures() {
		return _fetchTierFeatures.apply(this, arguments);
	}
	function _fetchTierFeatures() {
		_fetchTierFeatures = _asyncToGenerator(function* () {
			var _response$data;
			return ((_response$data = (yield cachedGet(TIER_FEATURES_URL)).data) === null || _response$data === void 0 ? void 0 : _response$data.features) || [];
		});
		return _fetchTierFeatures.apply(this, arguments);
	}
	function fetchLicenseStatus() {
		return _fetchLicenseStatus.apply(this, arguments);
	}
	function _fetchLicenseStatus() {
		_fetchLicenseStatus = _asyncToGenerator(function* () {
			var _response$data2;
			return !!((_response$data2 = (yield cachedGet(LICENSE_STATUS_URL)).data) === null || _response$data2 === void 0 ? void 0 : _response$data2.isExpired);
		});
		return _fetchLicenseStatus.apply(this, arguments);
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
	//#region packages/packages/pro/license-api/src/hooks/use-tier-features.ts
	var _excluded$1 = ["data"];
	var QUERY_KEY$1 = ["license", "tier-features"];
	function useTierFeatures() {
		return (0, _elementor_query.useQuery)({
			queryKey: QUERY_KEY$1,
			queryFn: fetchTierFeatures,
			staleTime: Infinity
		});
	}
	function useHasFeature(featureName) {
		const _useTierFeatures = useTierFeatures(), { data: features = [] } = _useTierFeatures;
		return _objectSpread2(_objectSpread2({}, _objectWithoutProperties(_useTierFeatures, _excluded$1)), {}, { data: features.includes(featureName) });
	}
	//#endregion
	//#region packages/packages/pro/license-api/src/hooks/use-license-status.ts
	var _excluded = ["data"];
	var QUERY_KEY = ["license", "status"];
	function useLicenseStatus() {
		return (0, _elementor_query.useQuery)({
			queryKey: QUERY_KEY,
			queryFn: fetchLicenseStatus,
			staleTime: Infinity
		});
	}
	function useIsLicenseExpired() {
		const _useLicenseStatus = useLicenseStatus(), { data: isExpired = false } = _useLicenseStatus;
		return _objectSpread2(_objectSpread2({}, _objectWithoutProperties(_useLicenseStatus, _excluded)), {}, { data: isExpired });
	}
	//#endregion
	exports.fetchLicenseStatus = fetchLicenseStatus;
	exports.fetchTierFeatures = fetchTierFeatures;
	exports.useHasFeature = useHasFeature;
	exports.useIsLicenseExpired = useIsLicenseExpired;
	exports.useLicenseStatus = useLicenseStatus;
	exports.useTierFeatures = useTierFeatures;
})(this.elementorV2.licenseApi = this.elementorV2.licenseApi || {}, elementorV2.httpClient, elementorV2.query);

window.elementorV2.licenseApi?.init?.();
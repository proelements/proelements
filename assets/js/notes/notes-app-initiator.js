/*! pro-elements - v4.3.0 - 22-09-2026 */
(function(react, react_dom, _wordpress_i18n) {
	//#region \0rolldown/runtime.js
	var __create = Object.create;
	var __defProp$18 = Object.defineProperty;
	var __name = (target, value) => __defProp$18(target, "name", {
		value,
		configurable: true
	});
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp$18 = Object.prototype.hasOwnProperty;
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
		for (var name in all) __defProp$18(target, name, {
			get: all[name],
			enumerable: true
		});
		if (!no_symbols) __defProp$18(target, Symbol.toStringTag, { value: "Module" });
		return target;
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
			key = keys[i];
			if (!__hasOwnProp$18.call(to, key) && key !== except) __defProp$18(to, key, {
				get: ((k) => from[k]).bind(null, key),
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp$18(target, "default", {
		value: mod,
		enumerable: true
	}) : target, mod));
	//#endregion
	let react$1 = __toESM(react, 1);
	react = __toESM(react);
	let react_dom$1 = __toESM(react_dom, 1);
	react_dom = __toESM(react_dom);
	var __vitePreload = function preload(baseModule, deps, importerUrl) {
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
	//#endregion
	//#region node_modules/prop-types/lib/ReactPropTypesSecret.js
	/**
	* Copyright (c) 2013-present, Facebook, Inc.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*/
	var require_ReactPropTypesSecret = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
	}));
	//#endregion
	//#region node_modules/prop-types/factoryWithThrowingShims.js
	/**
	* Copyright (c) 2013-present, Facebook, Inc.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*/
	var require_factoryWithThrowingShims = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var ReactPropTypesSecret = require_ReactPropTypesSecret();
		function emptyFunction() {}
		function emptyFunctionWithReset() {}
		emptyFunctionWithReset.resetWarningCache = emptyFunction;
		module.exports = function() {
			function shim(props, propName, componentName, location, propFullName, secret) {
				if (secret === ReactPropTypesSecret) return;
				var err = /* @__PURE__ */ new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
				err.name = "Invariant Violation";
				throw err;
			}
			shim.isRequired = shim;
			function getShim() {
				return shim;
			}
			var ReactPropTypes = {
				array: shim,
				bigint: shim,
				bool: shim,
				func: shim,
				number: shim,
				object: shim,
				string: shim,
				symbol: shim,
				any: shim,
				arrayOf: getShim,
				element: shim,
				elementType: shim,
				instanceOf: getShim,
				node: shim,
				objectOf: getShim,
				oneOf: getShim,
				oneOfType: getShim,
				shape: getShim,
				exact: getShim,
				checkPropTypes: emptyFunctionWithReset,
				resetWarningCache: emptyFunction
			};
			ReactPropTypes.PropTypes = ReactPropTypes;
			return ReactPropTypes;
		};
	}));
	//#endregion
	//#region node_modules/prop-types/index.js
	var require_prop_types = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = require_factoryWithThrowingShims()();
	}));
	//#endregion
	//#region node_modules/react-is/cjs/react-is.production.js
	/**
	* @license React
	* react-is.production.js
	*
	* Copyright (c) Meta Platforms, Inc. and affiliates.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*/
	var require_react_is_production = /* @__PURE__ */ __commonJSMin(((exports) => {
		var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
		var REACT_PORTAL_TYPE = Symbol.for("react.portal");
		var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
		var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
		var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
		var REACT_CONSUMER_TYPE = Symbol.for("react.consumer");
		var REACT_CONTEXT_TYPE = Symbol.for("react.context");
		var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
		var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
		var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
		var REACT_MEMO_TYPE = Symbol.for("react.memo");
		var REACT_LAZY_TYPE = Symbol.for("react.lazy");
		var REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition");
		var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
		function typeOf(object) {
			if ("object" === typeof object && null !== object) {
				var $$typeof = object.$$typeof;
				switch ($$typeof) {
					case REACT_ELEMENT_TYPE: switch (object = object.type, object) {
						case REACT_FRAGMENT_TYPE:
						case REACT_PROFILER_TYPE:
						case REACT_STRICT_MODE_TYPE:
						case REACT_SUSPENSE_TYPE:
						case REACT_SUSPENSE_LIST_TYPE:
						case REACT_VIEW_TRANSITION_TYPE: return object;
						default: switch (object = object && object.$$typeof, object) {
							case REACT_CONTEXT_TYPE:
							case REACT_FORWARD_REF_TYPE:
							case REACT_LAZY_TYPE:
							case REACT_MEMO_TYPE: return object;
							case REACT_CONSUMER_TYPE: return object;
							default: return $$typeof;
						}
					}
					case REACT_PORTAL_TYPE: return $$typeof;
				}
			}
		}
		exports.isValidElementType = function(type) {
			return "string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE || void 0 !== type.getModuleId) ? !0 : !1;
		};
		exports.typeOf = typeOf;
	}));
	//#endregion
	//#region node_modules/react-is/index.js
	var require_react_is$2 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = require_react_is_production();
	}));
	//#endregion
	//#region node_modules/shallowequal/index.js
	var require_shallowequal = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = function shallowEqual(objA, objB, compare, compareContext) {
			var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
			if (ret !== void 0) return !!ret;
			if (objA === objB) return true;
			if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) return false;
			var keysA = Object.keys(objA);
			var keysB = Object.keys(objB);
			if (keysA.length !== keysB.length) return false;
			var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
			for (var idx = 0; idx < keysA.length; idx++) {
				var key = keysA[idx];
				if (!bHasOwnProperty(key)) return false;
				var valueA = objA[key];
				var valueB = objB[key];
				ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
				if (ret === false || ret === void 0 && valueA !== valueB) return false;
			}
			return true;
		};
	}));
	//#endregion
	//#region node_modules/@emotion/stylis/dist/stylis.browser.esm.js
	function stylis_min(W) {
		function M(d, c, e, h, a) {
			for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = "", p = "", F = "", G = "", C; l < B;) {
				g = e.charCodeAt(l);
				l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);
				if (0 === b + n + v + m) {
					if (l === J && (0 < r && (f = f.replace(N, "")), 0 < f.trim().length)) {
						switch (g) {
							case 32:
							case 9:
							case 59:
							case 13:
							case 10: break;
							default: f += e.charAt(l);
						}
						g = 59;
					}
					switch (g) {
						case 123:
							f = f.trim();
							q = f.charCodeAt(0);
							k = 1;
							for (t = ++l; l < B;) {
								switch (g = e.charCodeAt(l)) {
									case 123:
										k++;
										break;
									case 125:
										k--;
										break;
									case 47:
										switch (g = e.charCodeAt(l + 1)) {
											case 42:
											case 47: a: {
												for (u = l + 1; u < J; ++u) switch (e.charCodeAt(u)) {
													case 47:
														if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
															l = u + 1;
															break a;
														}
														break;
													case 10: if (47 === g) {
														l = u + 1;
														break a;
													}
												}
												l = u;
											}
										}
										break;
									case 91: g++;
									case 40: g++;
									case 34:
									case 39: for (; l++ < J && e.charCodeAt(l) !== g;);
								}
								if (0 === k) break;
								l++;
							}
							k = e.substring(t, l);
							0 === q && (q = (f = f.replace(ca, "").trim()).charCodeAt(0));
							switch (q) {
								case 64:
									0 < r && (f = f.replace(N, ""));
									g = f.charCodeAt(1);
									switch (g) {
										case 100:
										case 109:
										case 115:
										case 45:
											r = c;
											break;
										default: r = O;
									}
									k = M(c, r, k, g, a + 1);
									t = k.length;
									0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(""), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ""));
									if (0 < t) switch (g) {
										case 115: f = f.replace(da, ea);
										case 100:
										case 109:
										case 45:
											k = f + "{" + k + "}";
											break;
										case 107:
											f = f.replace(fa, "$1 $2");
											k = f + "{" + k + "}";
											k = 1 === w || 2 === w && L("@" + k, 3) ? "@-webkit-" + k + "@" + k : "@" + k;
											break;
										default: k = f + k, 112 === h && (k = (p += k, ""));
									}
									else k = "";
									break;
								default: k = M(c, X(c, f, I), k, h, a + 1);
							}
							F += k;
							k = I = r = u = q = 0;
							f = "";
							g = e.charCodeAt(++l);
							break;
						case 125:
						case 59:
							f = (0 < r ? f.replace(N, "") : f).trim();
							if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(" ", ":")).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = "\0\0"), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
								case 0: break;
								case 64: if (105 === g || 99 === g) {
									G += f + e.charAt(l);
									break;
								}
								default: 58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
							}
							I = r = u = q = 0;
							f = "";
							g = e.charCodeAt(++l);
					}
				}
				switch (g) {
					case 13:
					case 10:
						47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += "\0");
						0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
						z = 1;
						D++;
						break;
					case 59:
					case 125: if (0 === b + n + v + m) {
						z++;
						break;
					}
					default:
						z++;
						y = e.charAt(l);
						switch (g) {
							case 9:
							case 32:
								if (0 === n + m + b) switch (x) {
									case 44:
									case 58:
									case 9:
									case 32:
										y = "";
										break;
									default: 32 !== g && (y = " ");
								}
								break;
							case 0:
								y = "\\0";
								break;
							case 12:
								y = "\\f";
								break;
							case 11:
								y = "\\v";
								break;
							case 38:
								0 === n + b + m && (r = I = 1, y = "\f" + y);
								break;
							case 108:
								if (0 === n + b + m + E && 0 < u) switch (l - u) {
									case 2: 112 === x && 58 === e.charCodeAt(l - 3) && (E = x);
									case 8: 111 === K && (E = K);
								}
								break;
							case 58:
								0 === n + b + m && (u = l);
								break;
							case 44:
								0 === b + v + n + m && (r = 1, y += "\r");
								break;
							case 34:
							case 39:
								0 === b && (n = n === g ? 0 : 0 === n ? g : n);
								break;
							case 91:
								0 === n + b + v && m++;
								break;
							case 93:
								0 === n + b + v && m--;
								break;
							case 41:
								0 === n + b + m && v--;
								break;
							case 40:
								if (0 === n + b + m) {
									if (0 === q) switch (2 * x + 3 * K) {
										case 533: break;
										default: q = 1;
									}
									v++;
								}
								break;
							case 64:
								0 === b + v + n + m + u + k && (k = 1);
								break;
							case 42:
							case 47: if (!(0 < n + m + v)) switch (b) {
								case 0:
									switch (2 * g + 3 * e.charCodeAt(l + 1)) {
										case 235:
											b = 47;
											break;
										case 220: t = l, b = 42;
									}
									break;
								case 42: 47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = "", b = 0);
							}
						}
						0 === b && (f += y);
				}
				K = x;
				x = g;
				l++;
			}
			t = p.length;
			if (0 < t) {
				r = c;
				if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
				p = r.join(",") + "{" + p + "}";
				if (0 !== w * E) {
					2 !== w || L(p, 2) || (E = 0);
					switch (E) {
						case 111:
							p = p.replace(ha, ":-moz-$1") + p;
							break;
						case 112: p = p.replace(Q, "::-webkit-input-$1") + p.replace(Q, "::-moz-$1") + p.replace(Q, ":-ms-input-$1") + p;
					}
					E = 0;
				}
			}
			return G + p + F;
		}
		function X(d, c, e) {
			var h = c.trim().split(ia);
			c = h;
			var a = h.length;
			var m = d.length;
			switch (m) {
				case 0:
				case 1:
					var b = 0;
					for (d = 0 === m ? "" : d[0] + " "; b < a; ++b) c[b] = Z(d, c[b], e).trim();
					break;
				default:
					var v = b = 0;
					for (c = []; b < a; ++b) for (var n = 0; n < m; ++n) c[v++] = Z(d[n] + " ", h[b], e).trim();
			}
			return c;
		}
		function Z(d, c, e) {
			var h = c.charCodeAt(0);
			33 > h && (h = (c = c.trim()).charCodeAt(0));
			switch (h) {
				case 38: return c.replace(F, "$1" + d.trim());
				case 58: return d.trim() + c.replace(F, "$1" + d.trim());
				default: if (0 < 1 * e && 0 < c.indexOf("\f")) return c.replace(F, (58 === d.charCodeAt(0) ? "" : "$1") + d.trim());
			}
			return d + c;
		}
		function P(d, c, e, h) {
			var a = d + ";";
			var m = 2 * c + 3 * e + 4 * h;
			if (944 === m) {
				d = a.indexOf(":", 9) + 1;
				var b = a.substring(d, a.length - 1).trim();
				b = a.substring(0, d).trim() + b + ";";
				return 1 === w || 2 === w && L(b, 1) ? "-webkit-" + b + b : b;
			}
			if (0 === w || 2 === w && !L(a, 1)) return a;
			switch (m) {
				case 1015: return 97 === a.charCodeAt(10) ? "-webkit-" + a + a : a;
				case 951: return 116 === a.charCodeAt(3) ? "-webkit-" + a + a : a;
				case 963: return 110 === a.charCodeAt(5) ? "-webkit-" + a + a : a;
				case 1009: if (100 !== a.charCodeAt(4)) break;
				case 969:
				case 942: return "-webkit-" + a + a;
				case 978: return "-webkit-" + a + "-moz-" + a + a;
				case 1019:
				case 983: return "-webkit-" + a + "-moz-" + a + "-ms-" + a + a;
				case 883:
					if (45 === a.charCodeAt(8)) return "-webkit-" + a + a;
					if (0 < a.indexOf("image-set(", 11)) return a.replace(ja, "$1-webkit-$2") + a;
					break;
				case 932:
					if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
						case 103: return "-webkit-box-" + a.replace("-grow", "") + "-webkit-" + a + "-ms-" + a.replace("grow", "positive") + a;
						case 115: return "-webkit-" + a + "-ms-" + a.replace("shrink", "negative") + a;
						case 98: return "-webkit-" + a + "-ms-" + a.replace("basis", "preferred-size") + a;
					}
					return "-webkit-" + a + "-ms-" + a + a;
				case 964: return "-webkit-" + a + "-ms-flex-" + a + a;
				case 1023:
					if (99 !== a.charCodeAt(8)) break;
					b = a.substring(a.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify");
					return "-webkit-box-pack" + b + "-webkit-" + a + "-ms-flex-pack" + b + a;
				case 1005: return ka.test(a) ? a.replace(aa, ":-webkit-") + a.replace(aa, ":-moz-") + a : a;
				case 1e3:
					b = a.substring(13).trim();
					c = b.indexOf("-") + 1;
					switch (b.charCodeAt(0) + b.charCodeAt(c)) {
						case 226:
							b = a.replace(G, "tb");
							break;
						case 232:
							b = a.replace(G, "tb-rl");
							break;
						case 220:
							b = a.replace(G, "lr");
							break;
						default: return a;
					}
					return "-webkit-" + a + "-ms-" + b + a;
				case 1017: if (-1 === a.indexOf("sticky", 9)) break;
				case 975:
					c = (a = d).length - 10;
					b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(":", 7) + 1).trim();
					switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
						case 203: if (111 > b.charCodeAt(8)) break;
						case 115:
							a = a.replace(b, "-webkit-" + b) + ";" + a;
							break;
						case 207:
						case 102: a = a.replace(b, "-webkit-" + (102 < m ? "inline-" : "") + "box") + ";" + a.replace(b, "-webkit-" + b) + ";" + a.replace(b, "-ms-" + b + "box") + ";" + a;
					}
					return a + ";";
				case 938:
					if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
						case 105: return b = a.replace("-items", ""), "-webkit-" + a + "-webkit-box-" + b + "-ms-flex-" + b + a;
						case 115: return "-webkit-" + a + "-ms-flex-item-" + a.replace(ba, "") + a;
						default: return "-webkit-" + a + "-ms-flex-line-pack" + a.replace("align-content", "").replace(ba, "") + a;
					}
					break;
				case 973:
				case 989: if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;
				case 931:
				case 953:
					if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(":") + 1)).charCodeAt(0) ? P(d.replace("stretch", "fill-available"), c, e, h).replace(":fill-available", ":stretch") : a.replace(b, "-webkit-" + b) + a.replace(b, "-moz-" + b.replace("fill-", "")) + a;
					break;
				case 962: if (a = "-webkit-" + a + (102 === a.charCodeAt(5) ? "-ms-" + a : "") + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf("transform", 10)) return a.substring(0, a.indexOf(";", 27) + 1).replace(ma, "$1-webkit-$2") + a;
			}
			return a;
		}
		function L(d, c) {
			var e = d.indexOf(1 === c ? ":" : "{");
			var h = d.substring(0, 3 !== c ? e : 10);
			e = d.substring(e + 1, d.length - 1);
			return R(2 !== c ? h : h.replace(na, "$1"), e, c);
		}
		function ea(d, c) {
			var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
			return e !== c + ";" ? e.replace(oa, " or ($1)").substring(4) : "(" + c + ")";
		}
		function H(d, c, e, h, a, m, b, v, n, q) {
			for (var g = 0, x = c, w; g < A; ++g) switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
				case void 0:
				case !1:
				case !0:
				case null: break;
				default: x = w;
			}
			if (x !== c) return x;
		}
		function T(d) {
			switch (d) {
				case void 0:
				case null:
					A = S.length = 0;
					break;
				default: if ("function" === typeof d) S[A++] = d;
				else if ("object" === typeof d) for (var c = 0, e = d.length; c < e; ++c) T(d[c]);
				else Y = !!d | 0;
			}
			return T;
		}
		function U(d) {
			d = d.prefix;
			void 0 !== d && (R = null, d ? "function" !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
			return U;
		}
		function B(d, c) {
			var e = d;
			33 > e.charCodeAt(0) && (e = e.trim());
			V = e;
			e = [V];
			if (0 < A) {
				var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
				void 0 !== h && "string" === typeof h && (c = h);
			}
			var a = M(O, e, c, 0, 0);
			0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
			V = "";
			E = 0;
			z = D = 1;
			return a;
		}
		var ca = /^\0+/g;
		var N = /[\0\r\f]/g;
		var aa = /: */g;
		var ka = /zoo|gra/;
		var ma = /([,: ])(transform)/g;
		var ia = /,\r+?/g;
		var F = /([\t\r\n ])*\f?&/g;
		var fa = /@(k\w+)\s*(\S*)\s*/;
		var Q = /::(place)/g;
		var ha = /:(read-only)/g;
		var G = /[svh]\w+-[tblr]{2}/;
		var da = /\(\s*(.*)\s*\)/g;
		var oa = /([\s\S]*?);/g;
		var ba = /-self|flex-/g;
		var na = /[^]*?(:[rp][el]a[\w-]+)[^]*/;
		var la = /stretch|:\s*\w+\-(?:conte|avail)/;
		var ja = /([^-])(image-set\()/;
		var z = 1;
		var D = 1;
		var E = 0;
		var w = 1;
		var O = [];
		var S = [];
		var A = 0;
		var R = null;
		var Y = 0;
		var V = "";
		B.use = T;
		B.set = U;
		void 0 !== W && U(W);
		return B;
	}
	var init_stylis_browser_esm = __esmMin((() => {}));
	//#endregion
	//#region node_modules/styled-components/node_modules/@emotion/unitless/dist/unitless.browser.esm.js
	var unitlessKeys;
	var init_unitless_browser_esm = __esmMin((() => {
		unitlessKeys = {
			animationIterationCount: 1,
			borderImageOutset: 1,
			borderImageSlice: 1,
			borderImageWidth: 1,
			boxFlex: 1,
			boxFlexGroup: 1,
			boxOrdinalGroup: 1,
			columnCount: 1,
			columns: 1,
			flex: 1,
			flexGrow: 1,
			flexPositive: 1,
			flexShrink: 1,
			flexNegative: 1,
			flexOrder: 1,
			gridRow: 1,
			gridRowEnd: 1,
			gridRowSpan: 1,
			gridRowStart: 1,
			gridColumn: 1,
			gridColumnEnd: 1,
			gridColumnSpan: 1,
			gridColumnStart: 1,
			msGridRow: 1,
			msGridRowSpan: 1,
			msGridColumn: 1,
			msGridColumnSpan: 1,
			fontWeight: 1,
			lineHeight: 1,
			opacity: 1,
			order: 1,
			orphans: 1,
			tabSize: 1,
			widows: 1,
			zIndex: 1,
			zoom: 1,
			WebkitLineClamp: 1,
			fillOpacity: 1,
			floodOpacity: 1,
			stopOpacity: 1,
			strokeDasharray: 1,
			strokeDashoffset: 1,
			strokeMiterlimit: 1,
			strokeOpacity: 1,
			strokeWidth: 1
		};
	}));
	//#endregion
	//#region node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
	function memoize(fn) {
		var cache = Object.create(null);
		return function(arg) {
			if (cache[arg] === void 0) cache[arg] = fn(arg);
			return cache[arg];
		};
	}
	var init_emotion_memoize_esm = __esmMin((() => {}));
	//#endregion
	//#region node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js
	var reactPropsRegex, isPropValid;
	var init_emotion_is_prop_valid_esm = __esmMin((() => {
		init_emotion_memoize_esm();
		reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
		isPropValid = /* #__PURE__ */ memoize(function(prop) {
			return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
		});
	}));
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
	//#region node_modules/styled-components/dist/styled-components.browser.esm.js
	function y$4() {
		return (y$4 = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
			}
			return e;
		}).apply(this, arguments);
	}
	function E$5(e) {
		return "function" == typeof e;
	}
	function b$7(e) {
		return e.displayName || e.name || "Component";
	}
	function _$3(e) {
		return e && "string" == typeof e.styledComponentId;
	}
	function D$3(e) {
		for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
		throw /* @__PURE__ */ new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : ""));
	}
	function Q(e) {
		var t;
		var n = "";
		for (t = Math.abs(e); t > 52; t = t / 52 | 0) n = K$1(t % 52) + n;
		return (K$1(t % 52) + n).replace(Z$1, "$1-$2");
	}
	function ne(e) {
		for (var t = 0; t < e.length; t += 1) {
			var n = e[t];
			if (E$5(n) && !_$3(n)) return !1;
		}
		return !0;
	}
	function ae(e) {
		var t;
		var n;
		var r;
		var o;
		var s = void 0 === e ? w$6 : e;
		var i = s.options;
		var a = void 0 === i ? w$6 : i;
		var c = s.plugins;
		var u = void 0 === c ? S$1 : c;
		var l = new stylis_min(a);
		var d = [];
		var p = function(e) {
			function t(t) {
				if (t) try {
					e(t + "}");
				} catch (e) {}
			}
			return function(n, r, o, s, i, a, c, u, l, d) {
				switch (n) {
					case 1:
						if (0 === l && 64 === r.charCodeAt(0)) return e(r + ";"), "";
						break;
					case 2:
						if (0 === u) return r + "/*|*/";
						break;
					case 3: switch (u) {
						case 102:
						case 112: return e(o[0] + r), "";
						default: return r + (0 === d ? "/*|*/" : "");
					}
					case -2: r.split("/*|*/}").forEach(t);
				}
			};
		}((function(e) {
			d.push(e);
		}));
		var f = function(e, r, s) {
			return 0 === r && -1 !== ie.indexOf(s[n.length]) || s.match(o) ? e : "." + t;
		};
		function m(e, s, i, a) {
			void 0 === a && (a = "&");
			var c = e.replace(se, "");
			var u = s && i ? i + " " + s + " { " + c + " }" : c;
			return t = a, n = s, r = new RegExp("\\" + n + "\\b", "g"), o = new RegExp("(\\" + n + "\\b){2,}"), l(i || !s ? "" : s, u);
		}
		return l.use([].concat(u, [
			function(e, t, o) {
				2 === e && o.length && o[0].lastIndexOf(n) > 0 && (o[0] = o[0].replace(r, f));
			},
			p,
			function(e) {
				if (-2 === e) {
					var t = d;
					return d = [], t;
				}
			}
		])), m.hash = u.length ? u.reduce((function(e, t) {
			return t.name || D$3(15), ee(e, t.name);
		}), 5381).toString() : "", m;
	}
	function pe() {
		return (0, react.useContext)(ce) || de;
	}
	function fe() {
		return (0, react.useContext)(le) || he;
	}
	function me(e) {
		var t = (0, react.useState)(e.stylisPlugins);
		var n = t[0];
		var s = t[1];
		var c = pe();
		var u = (0, react.useMemo)((function() {
			var t = c;
			return e.sheet ? t = e.sheet : e.target && (t = t.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (t = t.reconstructWithOptions({ useCSSOMInjection: !1 })), t;
		}), [
			e.disableCSSOMInjection,
			e.sheet,
			e.target
		]);
		var l = (0, react.useMemo)((function() {
			return ae({
				options: { prefix: !e.disableVendorPrefixes },
				plugins: n
			});
		}), [e.disableVendorPrefixes, n]);
		return (0, react.useEffect)((function() {
			(0, import_shallowequal.default)(n, e.stylisPlugins) || s(e.stylisPlugins);
		}), [e.stylisPlugins]), react.default.createElement(ce.Provider, { value: u }, react.default.createElement(le.Provider, { value: l }, e.children));
	}
	function Ee(e) {
		return ve.test(e) ? e.replace(ge, we).replace(Se, "-ms-") : e;
	}
	function _e(e, n, r, o) {
		if (Array.isArray(e)) {
			for (var s, i = [], a = 0, c = e.length; a < c; a += 1) "" !== (s = _e(e[a], n, r, o)) && (Array.isArray(s) ? i.push.apply(i, s) : i.push(s));
			return i;
		}
		if (be(e)) return "";
		if (_$3(e)) return "." + e.styledComponentId;
		if (E$5(e)) {
			if ("function" != typeof (l = e) || l.prototype && l.prototype.isReactComponent || !n) return e;
			return _e(e(n), n, r, o);
		}
		var l;
		return e instanceof ye ? r ? (e.inject(r, o), e.getName(o)) : e : g$7(e) ? function e(t, n) {
			var r;
			var o;
			var s = [];
			for (var i in t) t.hasOwnProperty(i) && !be(t[i]) && (Array.isArray(t[i]) && t[i].isCss || E$5(t[i]) ? s.push(Ee(i) + ":", t[i], ";") : g$7(t[i]) ? s.push.apply(s, e(t[i], i)) : s.push(Ee(i) + ": " + (r = i, null == (o = t[i]) || "boolean" == typeof o || "" === o ? "" : "number" != typeof o || 0 === o || r in unitlessKeys || r.startsWith("--") ? String(o).trim() : o + "px") + ";"));
			return n ? [n + " {"].concat(s, ["}"]) : s;
		}(e) : e.toString();
	}
	function Ae(e) {
		for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
		return E$5(e) || g$7(e) ? Ne(_e(v$5(S$1, [e].concat(n)))) : 0 === n.length && 1 === e.length && "string" == typeof e[0] ? e : Ne(_e(v$5(e, n)));
	}
	function je(e) {
		return e.replace(Re, "-").replace(De, "");
	}
	function xe(e) {
		return "string" == typeof e && true;
	}
	function Be(e, t, n) {
		var r = e[n];
		ke(t) && ke(r) ? ze(r, t) : e[n] = t;
	}
	function ze(e) {
		for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
		for (var o = 0, s = n; o < s.length; o++) {
			var i = s[o];
			if (ke(i)) for (var a in i) Ve(a) && Be(e, i[a], a);
		}
		return e;
	}
	function Ye(e, t, n) {
		var o = _$3(e);
		var i = !xe(e);
		var a = t.attrs;
		var c = void 0 === a ? S$1 : a;
		var l = t.componentId;
		var d = void 0 === l ? function(e, t) {
			var n = "string" != typeof e ? "sc" : je(e);
			Fe[n] = (Fe[n] || 0) + 1;
			var r = n + "-" + Te("5.3.11" + n + Fe[n]);
			return t ? t + "-" + r : r;
		}(t.displayName, t.parentComponentId) : l;
		var h = t.displayName;
		var p = void 0 === h ? function(e) {
			return xe(e) ? "styled." + e : "Styled(" + b$7(e) + ")";
		}(e) : h;
		var v = t.displayName && t.componentId ? je(t.displayName) + "-" + t.componentId : t.componentId || d;
		var g = o && e.attrs ? Array.prototype.concat(e.attrs, c).filter(Boolean) : c;
		var N = t.shouldForwardProp;
		o && e.shouldForwardProp && (N = t.shouldForwardProp ? function(n, r, o) {
			return e.shouldForwardProp(n, r, o) && t.shouldForwardProp(n, r, o);
		} : e.shouldForwardProp);
		var A;
		var C = new oe(n, v, o ? e.componentStyle : void 0);
		var I = C.isStatic && 0 === c.length;
		var P = function(e, t) {
			return function(e, t, n, r) {
				var o = e.attrs;
				var i = e.componentStyle;
				var a = e.defaultProps;
				var c = e.foldedComponentIds;
				var l = e.shouldForwardProp;
				var d = e.styledComponentId;
				var h = e.target;
				var p = function(e, t, n) {
					void 0 === e && (e = w$6);
					var r = y$4({}, t, { theme: e });
					var o = {};
					return n.forEach((function(e) {
						var t;
						var n;
						var s;
						var i = e;
						for (t in E$5(i) && (i = i(r)), i) r[t] = o[t] = "className" === t ? (n = o[t], s = i[t], n && s ? n + " " + s : n || s) : i[t];
					})), [r, o];
				}(Oe(t, (0, react.useContext)(Me), a) || w$6, t, o);
				var m = p[0];
				var v = p[1];
				var g = function(e, t, n, r) {
					var o = pe();
					var s = fe();
					return t ? e.generateAndInjectStyles(w$6, o, s) : e.generateAndInjectStyles(n, o, s);
				}(i, r, m, void 0);
				var S = n;
				var b = v.$as || t.$as || v.as || t.as || h;
				var _ = xe(b);
				var N = v !== t ? y$4({}, t, {}, v) : t;
				var A = {};
				for (var C in N) "$" !== C[0] && "as" !== C && ("forwardedAs" === C ? A.as = N[C] : (l ? l(C, isPropValid, b) : !_ || isPropValid(C)) && (A[C] = N[C]));
				return t.style && v.style !== t.style && (A.style = y$4({}, t.style, {}, v.style)), A.className = Array.prototype.concat(c, d, g !== d ? g : null, t.className, v.className).filter(Boolean).join(" "), A.ref = S, (0, react.createElement)(b, A);
			}(A, e, t, I);
		};
		return P.displayName = p, (A = react.default.forwardRef(P)).attrs = g, A.componentStyle = C, A.displayName = p, A.shouldForwardProp = N, A.foldedComponentIds = o ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : S$1, A.styledComponentId = v, A.target = o ? e.target : e, A.withComponent = function(e) {
			var r = t.componentId;
			var o = function(e, t) {
				if (null == e) return {};
				var n;
				var r;
				var o = {};
				var s = Object.keys(e);
				for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
				return o;
			}(t, ["componentId"]);
			var s = r && r + "-" + (xe(e) ? e : je(b$7(e)));
			return Ye(e, y$4({}, o, {
				attrs: g,
				componentId: s
			}), n);
		}, Object.defineProperty(A, "defaultProps", {
			get: function() {
				return this._foldedDefaultProps;
			},
			set: function(t) {
				this._foldedDefaultProps = o ? ze({}, e.defaultProps, t) : t;
			}
		}), Object.defineProperty(A, "toString", { value: function() {
			return "." + A.styledComponentId;
		} }), i && (0, import_hoist_non_react_statics_cjs$1.default)(A, e, {
			attrs: !0,
			componentStyle: !0,
			displayName: !0,
			foldedComponentIds: !0,
			shouldForwardProp: !0,
			styledComponentId: !0,
			target: !0,
			withComponent: !0
		}), A;
	}
	function We(e) {
		for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
		var o = Ae.apply(void 0, [e].concat(n)).join("");
		return new ye(Te(o), o);
	}
	var import_react_is$1, import_shallowequal, import_hoist_non_react_statics_cjs$1, v$5, g$7, S$1, w$6, N, C$4, I$2, j$1, T$2, x$7, k$3, V$1, B$1, z$1, M$1, G$2, L$1, F$3, Y$1, q, H$1, $, W$1, U$1, J$1, X$1, Z$1, K$1, ee, te, re, oe, se, ie, ce, le, de, he, ye, ve, ge, Se, we, be, Ne, Oe, Re, De, Te, ke, Ve, Me, Fe, qe;
	var init_styled_components_browser_esm = __esmMin((() => {
		import_react_is$1 = require_react_is$2();
		import_shallowequal = /* @__PURE__ */ __toESM(require_shallowequal());
		init_stylis_browser_esm();
		init_unitless_browser_esm();
		init_emotion_is_prop_valid_esm();
		import_hoist_non_react_statics_cjs$1 = /* @__PURE__ */ __toESM(require_hoist_non_react_statics_cjs());
		__name(y$4, "y");
		v$5 = /* @__PURE__ */ __name(function(e, t) {
			for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
			return n;
		}, "v");
		g$7 = /* @__PURE__ */ __name(function(t) {
			return null !== t && "object" == typeof t && "[object Object]" === (t.toString ? t.toString() : Object.prototype.toString.call(t)) && !(0, import_react_is$1.typeOf)(t);
		}, "g");
		S$1 = Object.freeze([]);
		w$6 = Object.freeze({});
		__name(E$5, "E");
		__name(b$7, "b");
		__name(_$3, "_");
		N = "undefined" != typeof process && ({}.REACT_APP_SC_ATTR || {}.SC_ATTR) || "data-styled";
		C$4 = "undefined" != typeof window && "HTMLElement" in window;
		I$2 = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && (void 0 !== {}.REACT_APP_SC_DISABLE_SPEEDY && "" !== {}.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== {}.REACT_APP_SC_DISABLE_SPEEDY && {}.REACT_APP_SC_DISABLE_SPEEDY : void 0 !== {}.SC_DISABLE_SPEEDY && "" !== {}.SC_DISABLE_SPEEDY ? "false" !== {}.SC_DISABLE_SPEEDY && {}.SC_DISABLE_SPEEDY : false));
		__name(D$3, "D");
		j$1 = function() {
			function e(e) {
				this.groupSizes = /* @__PURE__ */ new Uint32Array(512), this.length = 512, this.tag = e;
			}
			var t = e.prototype;
			return t.indexOfGroup = function(e) {
				for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
				return t;
			}, t.insertRules = function(e, t) {
				if (e >= this.groupSizes.length) {
					for (var n = this.groupSizes, r = n.length, o = r; e >= o;) (o <<= 1) < 0 && D$3(16, "" + e);
					this.groupSizes = new Uint32Array(o), this.groupSizes.set(n), this.length = o;
					for (var s = r; s < o; s++) this.groupSizes[s] = 0;
				}
				for (var i = this.indexOfGroup(e + 1), a = 0, c = t.length; a < c; a++) this.tag.insertRule(i, t[a]) && (this.groupSizes[e]++, i++);
			}, t.clearGroup = function(e) {
				if (e < this.length) {
					var t = this.groupSizes[e];
					var n = this.indexOfGroup(e);
					var r = n + t;
					this.groupSizes[e] = 0;
					for (var o = n; o < r; o++) this.tag.deleteRule(n);
				}
			}, t.getGroup = function(e) {
				var t = "";
				if (e >= this.length || 0 === this.groupSizes[e]) return t;
				for (var n = this.groupSizes[e], r = this.indexOfGroup(e), o = r + n, s = r; s < o; s++) t += this.tag.getRule(s) + "/*!sc*/\n";
				return t;
			}, e;
		}();
		T$2 = /* @__PURE__ */ new Map();
		x$7 = /* @__PURE__ */ new Map();
		k$3 = 1;
		V$1 = /* @__PURE__ */ __name(function(e) {
			if (T$2.has(e)) return T$2.get(e);
			for (; x$7.has(k$3);) k$3++;
			var t = k$3++;
			return T$2.set(e, t), x$7.set(t, e), t;
		}, "V");
		B$1 = /* @__PURE__ */ __name(function(e) {
			return x$7.get(e);
		}, "B");
		z$1 = /* @__PURE__ */ __name(function(e, t) {
			t >= k$3 && (k$3 = t + 1), T$2.set(e, t), x$7.set(t, e);
		}, "z");
		M$1 = "style[" + N + "][data-styled-version=\"5.3.11\"]";
		G$2 = new RegExp("^" + N + "\\.g(\\d+)\\[id=\"([\\w\\d-]+)\"\\].*?\"([^\"]*)");
		L$1 = /* @__PURE__ */ __name(function(e, t, n) {
			for (var r, o = n.split(","), s = 0, i = o.length; s < i; s++) (r = o[s]) && e.registerName(t, r);
		}, "L");
		F$3 = /* @__PURE__ */ __name(function(e, t) {
			for (var n = (t.textContent || "").split("/*!sc*/\n"), r = [], o = 0, s = n.length; o < s; o++) {
				var i = n[o].trim();
				if (i) {
					var a = i.match(G$2);
					if (a) {
						var c = 0 | parseInt(a[1], 10);
						var u = a[2];
						0 !== c && (z$1(u, c), L$1(e, u, a[3]), e.getTag().insertRules(c, r)), r.length = 0;
					} else r.push(i);
				}
			}
		}, "F");
		Y$1 = /* @__PURE__ */ __name(function() {
			return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
		}, "Y");
		q = function(e) {
			var t = document.head;
			var n = e || t;
			var r = document.createElement("style");
			var o = function(e) {
				for (var t = e.childNodes, n = t.length; n >= 0; n--) {
					var r = t[n];
					if (r && 1 === r.nodeType && r.hasAttribute(N)) return r;
				}
			}(n);
			var s = void 0 !== o ? o.nextSibling : null;
			r.setAttribute(N, "active"), r.setAttribute("data-styled-version", "5.3.11");
			var i = Y$1();
			return i && r.setAttribute("nonce", i), n.insertBefore(r, s), r;
		};
		H$1 = function() {
			function e(e) {
				var t = this.element = q(e);
				t.appendChild(document.createTextNode("")), this.sheet = function(e) {
					if (e.sheet) return e.sheet;
					for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++) {
						var o = t[n];
						if (o.ownerNode === e) return o;
					}
					D$3(17);
				}(t), this.length = 0;
			}
			var t = e.prototype;
			return t.insertRule = function(e, t) {
				try {
					return this.sheet.insertRule(t, e), this.length++, !0;
				} catch (e) {
					return !1;
				}
			}, t.deleteRule = function(e) {
				this.sheet.deleteRule(e), this.length--;
			}, t.getRule = function(e) {
				var t = this.sheet.cssRules[e];
				return void 0 !== t && "string" == typeof t.cssText ? t.cssText : "";
			}, e;
		}();
		$ = function() {
			function e(e) {
				var t = this.element = q(e);
				this.nodes = t.childNodes, this.length = 0;
			}
			var t = e.prototype;
			return t.insertRule = function(e, t) {
				if (e <= this.length && e >= 0) {
					var n = document.createTextNode(t);
					var r = this.nodes[e];
					return this.element.insertBefore(n, r || null), this.length++, !0;
				}
				return !1;
			}, t.deleteRule = function(e) {
				this.element.removeChild(this.nodes[e]), this.length--;
			}, t.getRule = function(e) {
				return e < this.length ? this.nodes[e].textContent : "";
			}, e;
		}();
		W$1 = function() {
			function e(e) {
				this.rules = [], this.length = 0;
			}
			var t = e.prototype;
			return t.insertRule = function(e, t) {
				return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0);
			}, t.deleteRule = function(e) {
				this.rules.splice(e, 1), this.length--;
			}, t.getRule = function(e) {
				return e < this.length ? this.rules[e] : "";
			}, e;
		}();
		U$1 = C$4;
		J$1 = {
			isServer: !C$4,
			useCSSOMInjection: !I$2
		};
		X$1 = function() {
			function e(e, t, n) {
				void 0 === e && (e = w$6), void 0 === t && (t = {}), this.options = y$4({}, J$1, {}, e), this.gs = t, this.names = new Map(n), this.server = !!e.isServer, !this.server && C$4 && U$1 && (U$1 = !1, function(e) {
					for (var t = document.querySelectorAll(M$1), n = 0, r = t.length; n < r; n++) {
						var o = t[n];
						o && "active" !== o.getAttribute(N) && (F$3(e, o), o.parentNode && o.parentNode.removeChild(o));
					}
				}(this));
			}
			e.registerId = function(e) {
				return V$1(e);
			};
			var t = e.prototype;
			return t.reconstructWithOptions = function(t, n) {
				return void 0 === n && (n = !0), new e(y$4({}, this.options, {}, t), this.gs, n && this.names || void 0);
			}, t.allocateGSInstance = function(e) {
				return this.gs[e] = (this.gs[e] || 0) + 1;
			}, t.getTag = function() {
				return this.tag || (this.tag = (n = (t = this.options).isServer, r = t.useCSSOMInjection, o = t.target, e = n ? new W$1(o) : r ? new H$1(o) : new $(o), new j$1(e)));
				var e, t, n, r, o;
			}, t.hasNameForId = function(e, t) {
				return this.names.has(e) && this.names.get(e).has(t);
			}, t.registerName = function(e, t) {
				if (V$1(e), this.names.has(e)) this.names.get(e).add(t);
				else {
					var n = /* @__PURE__ */ new Set();
					n.add(t), this.names.set(e, n);
				}
			}, t.insertRules = function(e, t, n) {
				this.registerName(e, t), this.getTag().insertRules(V$1(e), n);
			}, t.clearNames = function(e) {
				this.names.has(e) && this.names.get(e).clear();
			}, t.clearRules = function(e) {
				this.getTag().clearGroup(V$1(e)), this.clearNames(e);
			}, t.clearTag = function() {
				this.tag = void 0;
			}, t.toString = function() {
				return function(e) {
					for (var t = e.getTag(), n = t.length, r = "", o = 0; o < n; o++) {
						var s = B$1(o);
						if (void 0 !== s) {
							var i = e.names.get(s);
							var a = t.getGroup(o);
							if (i && a && i.size) {
								var c = N + ".g" + o + "[id=\"" + s + "\"]";
								var u = "";
								void 0 !== i && i.forEach((function(e) {
									e.length > 0 && (u += e + ",");
								})), r += "" + a + c + "{content:\"" + u + "\"}/*!sc*/\n";
							}
						}
					}
					return r;
				}(this);
			}, e;
		}();
		Z$1 = /(a)(d)/gi;
		K$1 = /* @__PURE__ */ __name(function(e) {
			return String.fromCharCode(e + (e > 25 ? 39 : 97));
		}, "K");
		ee = function(e, t) {
			for (var n = t.length; n;) e = 33 * e ^ t.charCodeAt(--n);
			return e;
		};
		te = function(e) {
			return ee(5381, e);
		};
		re = te("5.3.11");
		oe = function() {
			function e(e, t, n) {
				this.rules = e, this.staticRulesId = "", this.isStatic = (void 0 === n || n.isStatic) && ne(e), this.componentId = t, this.baseHash = ee(re, t), this.baseStyle = n, X$1.registerId(t);
			}
			return e.prototype.generateAndInjectStyles = function(e, t, n) {
				var r = this.componentId;
				var o = [];
				if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(e, t, n)), this.isStatic && !n.hash) if (this.staticRulesId && t.hasNameForId(r, this.staticRulesId)) o.push(this.staticRulesId);
				else {
					var s = _e(this.rules, e, t, n).join("");
					var i = Q(ee(this.baseHash, s) >>> 0);
					if (!t.hasNameForId(r, i)) {
						var a = n(s, "." + i, void 0, r);
						t.insertRules(r, i, a);
					}
					o.push(i), this.staticRulesId = i;
				}
				else {
					for (var c = this.rules.length, u = ee(this.baseHash, n.hash), l = "", d = 0; d < c; d++) {
						var h = this.rules[d];
						if ("string" == typeof h) l += h;
						else if (h) {
							var p = _e(h, e, t, n);
							var f = Array.isArray(p) ? p.join("") : p;
							u = ee(u, f + d), l += f;
						}
					}
					if (l) {
						var m = Q(u >>> 0);
						if (!t.hasNameForId(r, m)) {
							var y = n(l, "." + m, void 0, r);
							t.insertRules(r, m, y);
						}
						o.push(m);
					}
				}
				return o.join(" ");
			}, e;
		}();
		se = /^\s*\/\/.*$/gm;
		ie = [
			":",
			"[",
			".",
			"#"
		];
		ce = react.default.createContext();
		ce.Consumer;
		le = react.default.createContext();
		de = (le.Consumer, new X$1());
		he = ae();
		ye = function() {
			function e(e, t) {
				var n = this;
				this.inject = function(e, t) {
					void 0 === t && (t = he);
					var r = n.name + t.hash;
					e.hasNameForId(n.id, r) || e.insertRules(n.id, r, t(n.rules, r, "@keyframes"));
				}, this.toString = function() {
					return D$3(12, String(n.name));
				}, this.name = e, this.id = "sc-keyframes-" + e, this.rules = t;
			}
			return e.prototype.getName = function(e) {
				return void 0 === e && (e = he), this.name + e.hash;
			}, e;
		}();
		ve = /([A-Z])/;
		ge = /([A-Z])/g;
		Se = /^ms-/;
		we = function(e) {
			return "-" + e.toLowerCase();
		};
		be = function(e) {
			return null == e || !1 === e || "" === e;
		};
		Ne = function(e) {
			return Array.isArray(e) && (e.isCss = !0), e;
		};
		Oe = function(e, t, n) {
			return void 0 === n && (n = w$6), e.theme !== n.theme && e.theme || t || n.theme;
		};
		Re = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g;
		De = /(^-|-$)/g;
		Te = function(e) {
			return Q(te(e) >>> 0);
		};
		ke = function(e) {
			return "function" == typeof e || "object" == typeof e && null !== e && !Array.isArray(e);
		};
		Ve = function(e) {
			return "__proto__" !== e && "constructor" !== e && "prototype" !== e;
		};
		Me = react.default.createContext();
		Me.Consumer;
		Fe = {};
		qe = function(e) {
			return function e(t, r, o) {
				if (void 0 === o && (o = w$6), !(0, import_react_is$1.isValidElementType)(r)) return D$3(1, String(r));
				var s = function() {
					return t(r, o, Ae.apply(void 0, arguments));
				};
				return s.withConfig = function(n) {
					return e(t, r, y$4({}, o, {}, n));
				}, s.attrs = function(n) {
					return e(t, r, y$4({}, o, { attrs: Array.prototype.concat(o.attrs, n).filter(Boolean) }));
				}, s;
			}(Ye, e);
		};
		[
			"a",
			"abbr",
			"address",
			"area",
			"article",
			"aside",
			"audio",
			"b",
			"base",
			"bdi",
			"bdo",
			"big",
			"blockquote",
			"body",
			"br",
			"button",
			"canvas",
			"caption",
			"cite",
			"code",
			"col",
			"colgroup",
			"data",
			"datalist",
			"dd",
			"del",
			"details",
			"dfn",
			"dialog",
			"div",
			"dl",
			"dt",
			"em",
			"embed",
			"fieldset",
			"figcaption",
			"figure",
			"footer",
			"form",
			"h1",
			"h2",
			"h3",
			"h4",
			"h5",
			"h6",
			"head",
			"header",
			"hgroup",
			"hr",
			"html",
			"i",
			"iframe",
			"img",
			"input",
			"ins",
			"kbd",
			"keygen",
			"label",
			"legend",
			"li",
			"link",
			"main",
			"map",
			"mark",
			"marquee",
			"menu",
			"menuitem",
			"meta",
			"meter",
			"nav",
			"noscript",
			"object",
			"ol",
			"optgroup",
			"option",
			"output",
			"p",
			"param",
			"picture",
			"pre",
			"progress",
			"q",
			"rp",
			"rt",
			"ruby",
			"s",
			"samp",
			"script",
			"section",
			"select",
			"small",
			"source",
			"span",
			"strong",
			"style",
			"sub",
			"summary",
			"sup",
			"table",
			"tbody",
			"td",
			"textarea",
			"tfoot",
			"th",
			"thead",
			"time",
			"title",
			"tr",
			"track",
			"u",
			"ul",
			"var",
			"video",
			"wbr",
			"circle",
			"clipPath",
			"defs",
			"ellipse",
			"foreignObject",
			"g",
			"image",
			"line",
			"linearGradient",
			"marker",
			"mask",
			"path",
			"pattern",
			"polygon",
			"polyline",
			"radialGradient",
			"rect",
			"stop",
			"svg",
			"text",
			"textPath",
			"tspan"
		].forEach((function(e) {
			qe[e] = qe(e);
		}));
		(function() {
			function e(e, t) {
				this.rules = e, this.componentId = t, this.isStatic = ne(e), X$1.registerId(this.componentId + 1);
			}
			var t = e.prototype;
			return t.createStyles = function(e, t, n, r) {
				var o = r(_e(this.rules, t, n, r).join(""), "");
				var s = this.componentId + e;
				n.insertRules(s, s, o);
			}, t.removeStyles = function(e, t) {
				t.clearRules(this.componentId + e);
			}, t.renderStyles = function(e, t, n, r) {
				e > 2 && X$1.registerId(this.componentId + e), this.removeStyles(e, n), this.createStyles(e, t, n, r);
			}, e;
		})();
		(function() {
			function e() {
				var e = this;
				this._emitSheetCSS = function() {
					var t = e.instance.toString();
					if (!t) return "";
					var n = Y$1();
					return "<style " + [
						n && "nonce=\"" + n + "\"",
						N + "=\"true\"",
						"data-styled-version=\"5.3.11\""
					].filter(Boolean).join(" ") + ">" + t + "</style>";
				}, this.getStyleTags = function() {
					return e.sealed ? D$3(2) : e._emitSheetCSS();
				}, this.getStyleElement = function() {
					var t;
					if (e.sealed) return D$3(2);
					var n = ((t = {})[N] = "", t["data-styled-version"] = "5.3.11", t.dangerouslySetInnerHTML = { __html: e.instance.toString() }, t);
					var o = Y$1();
					return o && (n.nonce = o), [react.default.createElement("style", y$4({}, n, { key: "sc-0-0" }))];
				}, this.seal = function() {
					e.sealed = !0;
				}, this.instance = new X$1({ isServer: !0 }), this.sealed = !1;
			}
			var t = e.prototype;
			return t.collectStyles = function(e) {
				return this.sealed ? D$3(2) : react.default.createElement(me, { sheet: this.instance }, e);
			}, t.interleaveWithNodeStream = function(e) {
				return D$3(3);
			}, e;
		})();
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/button-base.js
	var ButtonBase;
	var init_button_base = __esmMin((() => {
		init_styled_components_browser_esm();
		ButtonBase = qe.button`
	all: revert;

	--color: #000;
	--padding: 0;
	--background: transparent;
	--font-weight: 500;
	--font-size: 16px;
	--font-family: Roboto, sans-serif;
	--text-transform: none;
	--letter-spacing: 0;
	--font-style: normal;
	--text-decoration: none;
	--line-height: normal;
	--word-spacing: normal;
	--text-shadow: none;
	--box-shadow: none;
	--border: none;
	--border-radius: 0;

	// Override themes selectors.
	&,
	&&,
	&[type="button"],
	&[type="submit"],
	&[type="reset"],
	&:hover,
	&:focus,
	&:active,
	&:not( :hover ):not( :active ):not( .has-background ),
	&:not( :hover ):not( :active ):not( .has-text-color ) {
		font-family: var( --font-family ) !important;
		font-size: var( --font-size ) !important;
		font-weight: var( --font-weight ) !important;
		text-transform: var( --text-transform ) !important;
		letter-spacing: var( --letter-spacing ) !important;
		font-style: normal !important;
		text-decoration: none !important;
		line-height: normal !important;
		word-spacing: normal !important;
		color: var( --color ) !important;
		background: var( --background ) !important;
		border: var( --border ) !important;
		text-shadow: var( --text-shadow ) !important;
		box-shadow: var( --box-shadow ) !important;
		border-radius: var( --border-radius ) !important;
		padding: var( --padding ) !important;
		outline: none !important;
		width: var( --width, auto ) !important;
		height: var( --height, auto ) !important;
		display: var( --display, inline-block ) !important;
		min-height: revert !important;
	}

	&:before,
	&:after {
		display: none !important;
	}
`;
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/button.js
	var import_prop_types$46, colorsMap$2, sizesMap$3, Button;
	var init_button = __esmMin((() => {
		import_prop_types$46 = /* @__PURE__ */ __toESM(require_prop_types());
		init_styled_components_browser_esm();
		init_button_base();
		colorsMap$2 = {
			contained: {
				background: "--color-editor-info",
				border: "--color-editor-info",
				text: "--color-white",
				backgroundHover: "--color-editor-info-dark"
			},
			outlined: {
				background: "--color-ghost",
				border: "--color-gray-400",
				text: "--color-gray-600",
				backgroundHover: "--color-darken"
			},
			transparent: {
				background: "--color-ghost",
				border: "--color-ghost",
				text: "--color-default"
			}
		};
		sizesMap$3 = { md: {
			padding: "--padding-md",
			fontSize: "--font-size-md"
		} };
		Button = qe(ButtonBase)`
	--color-editor-info: #58d0f5;
	--color-editor-info-dark: #10bcf2;
	--color-default: inherit;
	--color-ghost: transparent;
	--color-white: #fff;
	--color-gray-400: #c2cbd2;
	--color-gray-600: #6d7882;
	--color-darken: rgba( 0, 0, 0, .05 );

	--font-size-md: 13px;
	--padding-md: 8px 12px;

	--padding: var( ${({ size }) => sizesMap$3[size].padding} );
	--color: var( ${({ variant }) => colorsMap$2[variant].text} );
	--background: var( ${({ variant }) => colorsMap$2[variant].background} );
	--border-color: var( ${({ variant }) => colorsMap$2[variant].border} );
	--border: 1px solid var( --border-color );
	--cursor: pointer;
	--font-weight: 400;
	--font-family: Roboto, sans-serif;
	--font-size: var( ${({ size }) => sizesMap$3[size].fontSize} );
	--border-radius: 3px;

	font-style: normal !important;
	text-align: center !important;
	line-height: 1 !important;
	cursor: var( --cursor ) !important;
	transition: .3s all !important;

  	&, & * {
	  cursor: var( --cursor ) !important;
	}

	${({ disabled }) => disabled && Ae`
			opacity: .5;
			pointer-events: none;
			--cursor: not-allowed;
	`}

	${({ variant }) => "transparent" === variant && Ae`
			--padding: 0;
	`}

	&:hover, &:focus {
		--background: var(
			${({ variant }) => colorsMap$2[variant].backgroundHover || colorsMap$2[variant].background}
		);
	}
`;
		Button.propTypes = {
			variant: import_prop_types$46.default.oneOf([
				"contained",
				"outlined",
				"transparent"
			]).isRequired,
			size: import_prop_types$46.default.oneOf(["md"]).isRequired,
			disabled: import_prop_types$46.default.bool
		};
		Button.defaultProps = {
			variant: "contained",
			size: "md"
		};
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/marker.js
	var import_prop_types$45, sizesMap$2, colorsMap$1, bounce$1, Marker;
	var init_marker = __esmMin((() => {
		import_prop_types$45 = /* @__PURE__ */ __toESM(require_prop_types());
		init_styled_components_browser_esm();
		sizesMap$2 = {
			xs: 20,
			sm: 25,
			md: 34,
			lg: 80,
			xl: 160
		};
		colorsMap$1 = {
			active: {
				background: "--color-editor-info",
				text: "--color-white"
			},
			solid: {
				background: "--color-editor-info",
				text: "--color-white"
			},
			ghost: {
				background: "--color-ghost",
				text: "--color-gray"
			}
		};
		bounce$1 = We`
  0% {
	opacity: 0;
	transform: scale(.8);
	transform-origin: 50% 100%;
  }

  50% {
	opacity: 1;
	transform: scale(1.2);
	transform-origin: 50% 100%;
  }

  100% {
	opacity: 1;
	transform: scale(1);
	transform-origin: 50% 100%;
  }
`;
		Marker = qe.span.withConfig({ shouldForwardProp: (prop) => "children" === prop })`
  all: revert;

  --color-editor-info: #58d0f5;
  --color-ghost: #fff;
  --color-white: #fff;
  --color-gray: #a4afb6;
  --color-shadow: rgba(0, 0, 0, 0.2);
  --size: ${({ size }) => sizesMap$2[size]};
  --position: relative;

  display: grid;
  place-items: center;
  position: relative;
  height: calc(var(--size) * 1px);
  width: calc(var(--size) * 1px);
  line-height: 2.8;
  font-family: Roboto, sans-serif !important;
  font-size: calc(var(--size) * .38px);
  font-weight: 500;
  color: var(${({ variant }) => colorsMap$1[variant].text});
  isolation: isolate;
  animation: .3s ${bounce$1} both;
  transition: .3s all;

  ${({ muted }) => muted && Ae`
	--color-shadow: transparent;
	opacity: .5 !important;
  `}

  &::before {
	--background-color: var(${({ variant }) => colorsMap$1[variant].background});
	--border-color: var( --background-color );

	content: '';
	display: block;
	position: absolute;
	z-index: -1;
	inset: 0;
	background-color: var( --background-color );
	border: calc(var(--size) / 20 * 1px) solid var(--border-color);
	border-radius: 100% 100% 25% 100%;
	transform: rotate(45deg);

	${({ variant }) => "active" === variant && Ae`
		  mask-image: radial-gradient(transparent 30%, #000 32%);
	`}

	${({ variant }) => "ghost" === variant && Ae`
		  --border-color: var(--color-gray);
	`}
  }
`;
		Marker.propTypes = {
			variant: import_prop_types$45.default.oneOf([
				"active",
				"solid",
				"ghost"
			]).isRequired,
			size: import_prop_types$45.default.oneOf([
				"xs",
				"sm",
				"md",
				"lg",
				"xl"
			]).isRequired,
			muted: import_prop_types$45.default.bool,
			children: import_prop_types$45.default.oneOfType([import_prop_types$45.default.node, import_prop_types$45.default.arrayOf(import_prop_types$45.default.node)])
		};
		Marker.defaultProps = {
			variant: "solid",
			size: "md",
			muted: false
		};
	}));
	//#endregion
	//#region node_modules/aria-hidden/dist/es2015/index.js
	var getDefaultParent, counterMap, uncontrolledNodes, markerMap, lockCount, unwrapHost, correctTargets, applyAttributeToOthers, hideOthers;
	var init_es2015$6 = __esmMin((() => {
		getDefaultParent = function(originalTarget) {
			if (typeof document === "undefined") return null;
			return (Array.isArray(originalTarget) ? originalTarget[0] : originalTarget).ownerDocument.body;
		};
		counterMap = /* @__PURE__ */ new WeakMap();
		uncontrolledNodes = /* @__PURE__ */ new WeakMap();
		markerMap = {};
		lockCount = 0;
		unwrapHost = function(node) {
			return node && (node.host || unwrapHost(node.parentNode));
		};
		correctTargets = function(parent, targets) {
			return targets.map(function(target) {
				if (parent.contains(target)) return target;
				var correctedTarget = unwrapHost(target);
				if (correctedTarget && parent.contains(correctedTarget)) return correctedTarget;
				console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
				return null;
			}).filter(function(x) {
				return Boolean(x);
			});
		};
		applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
			var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
			if (!markerMap[markerName]) markerMap[markerName] = /* @__PURE__ */ new WeakMap();
			var markerCounter = markerMap[markerName];
			var hiddenNodes = [];
			var elementsToKeep = /* @__PURE__ */ new Set();
			var elementsToStop = new Set(targets);
			var keep = function(el) {
				if (!el || elementsToKeep.has(el)) return;
				elementsToKeep.add(el);
				keep(el.parentNode);
			};
			targets.forEach(keep);
			var deep = function(parent) {
				if (!parent || elementsToStop.has(parent)) return;
				Array.prototype.forEach.call(parent.children, function(node) {
					if (elementsToKeep.has(node)) deep(node);
					else try {
						var attr = node.getAttribute(controlAttribute);
						var alreadyHidden = attr !== null && attr !== "false";
						var counterValue = (counterMap.get(node) || 0) + 1;
						var markerValue = (markerCounter.get(node) || 0) + 1;
						counterMap.set(node, counterValue);
						markerCounter.set(node, markerValue);
						hiddenNodes.push(node);
						if (counterValue === 1 && alreadyHidden) uncontrolledNodes.set(node, true);
						if (markerValue === 1) node.setAttribute(markerName, "true");
						if (!alreadyHidden) node.setAttribute(controlAttribute, "true");
					} catch (e) {
						console.error("aria-hidden: cannot operate on ", node, e);
					}
				});
			};
			deep(parentNode);
			elementsToKeep.clear();
			lockCount++;
			return function() {
				hiddenNodes.forEach(function(node) {
					var counterValue = counterMap.get(node) - 1;
					var markerValue = markerCounter.get(node) - 1;
					counterMap.set(node, counterValue);
					markerCounter.set(node, markerValue);
					if (!counterValue) {
						if (!uncontrolledNodes.has(node)) node.removeAttribute(controlAttribute);
						uncontrolledNodes.delete(node);
					}
					if (!markerValue) node.removeAttribute(markerName);
				});
				lockCount--;
				if (!lockCount) {
					counterMap = /* @__PURE__ */ new WeakMap();
					counterMap = /* @__PURE__ */ new WeakMap();
					uncontrolledNodes = /* @__PURE__ */ new WeakMap();
					markerMap = {};
				}
			};
		};
		hideOthers = function(originalTarget, parentNode, markerName) {
			if (markerName === void 0) markerName = "data-aria-hidden";
			var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
			var activeParentNode = parentNode || getDefaultParent(originalTarget);
			if (!activeParentNode) return function() {
				return null;
			};
			targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live], script")));
			return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
		};
	}));
	//#endregion
	//#region node_modules/tslib/tslib.es6.mjs
	function __rest(s, e) {
		var t = {};
		for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
		if (s != null && typeof Object.getOwnPropertySymbols === "function") {
			for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
		}
		return t;
	}
	function __spreadArray(to, from, pack) {
		if (pack || arguments.length === 2) {
			for (var i = 0, l = from.length, ar; i < l; i++) if (ar || !(i in from)) {
				if (!ar) ar = Array.prototype.slice.call(from, 0, i);
				ar[i] = from[i];
			}
		}
		return to.concat(ar || Array.prototype.slice.call(from));
	}
	var __assign;
	var init_tslib_es6 = __esmMin((() => {
		__assign = function() {
			__assign = Object.assign || function __assign(t) {
				for (var s, i = 1, n = arguments.length; i < n; i++) {
					s = arguments[i];
					for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
				}
				return t;
			};
			return __assign.apply(this, arguments);
		};
	}));
	//#endregion
	//#region node_modules/react-remove-scroll-bar/dist/es2015/constants.js
	var zeroRightClassName, fullWidthClassName, noScrollbarsClassName, removedBarSizeVariable;
	var init_constants = __esmMin((() => {
		zeroRightClassName = "right-scroll-bar-position";
		fullWidthClassName = "width-before-scroll-bar";
		noScrollbarsClassName = "with-scroll-bars-hidden";
		removedBarSizeVariable = "--removed-body-scroll-bar-size";
	}));
	//#endregion
	//#region node_modules/use-callback-ref/dist/es2015/assignRef.js
	/**
	* Assigns a value for a given ref, no matter of the ref format
	* @param {RefObject} ref - a callback function or ref object
	* @param value - a new value
	*
	* @see https://github.com/theKashey/use-callback-ref#assignref
	* @example
	* const refObject = useRef();
	* const refFn = (ref) => {....}
	*
	* assignRef(refObject, "refValue");
	* assignRef(refFn, "refValue");
	*/
	function assignRef(ref, value) {
		if (typeof ref === "function") ref(value);
		else if (ref) ref.current = value;
		return ref;
	}
	var init_assignRef = __esmMin((() => {}));
	//#endregion
	//#region node_modules/use-callback-ref/dist/es2015/useRef.js
	/**
	* creates a MutableRef with ref change callback
	* @param initialValue - initial ref value
	* @param {Function} callback - a callback to run when value changes
	*
	* @example
	* const ref = useCallbackRef(0, (newValue, oldValue) => console.log(oldValue, '->', newValue);
	* ref.current = 1;
	* // prints 0 -> 1
	*
	* @see https://reactjs.org/docs/hooks-reference.html#useref
	* @see https://github.com/theKashey/use-callback-ref#usecallbackref---to-replace-reactuseref
	* @returns {MutableRefObject}
	*/
	function useCallbackRef$1(initialValue, callback) {
		var ref = (0, react.useState)(function() {
			return {
				value: initialValue,
				callback,
				facade: {
					get current() {
						return ref.value;
					},
					set current(value) {
						var last = ref.value;
						if (last !== value) {
							ref.value = value;
							ref.callback(value, last);
						}
					}
				}
			};
		})[0];
		ref.callback = callback;
		return ref.facade;
	}
	var init_useRef = __esmMin((() => {
		__name(useCallbackRef$1, "useCallbackRef");
	}));
	//#endregion
	//#region node_modules/use-callback-ref/dist/es2015/useMergeRef.js
	/**
	* Merges two or more refs together providing a single interface to set their value
	* @param {RefObject|Ref} refs
	* @returns {MutableRefObject} - a new ref, which translates all changes to {refs}
	*
	* @see {@link mergeRefs} a version without buit-in memoization
	* @see https://github.com/theKashey/use-callback-ref#usemergerefs
	* @example
	* const Component = React.forwardRef((props, ref) => {
	*   const ownRef = useRef();
	*   const domRef = useMergeRefs([ref, ownRef]); // рџ‘€ merge together
	*   return <div ref={domRef}>...</div>
	* }
	*/
	function useMergeRefs(refs, defaultValue) {
		var callbackRef = useCallbackRef$1(defaultValue || null, function(newValue) {
			return refs.forEach(function(ref) {
				return assignRef(ref, newValue);
			});
		});
		useIsomorphicLayoutEffect$1(function() {
			var oldValue = currentValues.get(callbackRef);
			if (oldValue) {
				var prevRefs_1 = new Set(oldValue);
				var nextRefs_1 = new Set(refs);
				var current_1 = callbackRef.current;
				prevRefs_1.forEach(function(ref) {
					if (!nextRefs_1.has(ref)) assignRef(ref, null);
				});
				nextRefs_1.forEach(function(ref) {
					if (!prevRefs_1.has(ref)) assignRef(ref, current_1);
				});
			}
			currentValues.set(callbackRef, refs);
		}, [refs]);
		return callbackRef;
	}
	var useIsomorphicLayoutEffect$1, currentValues;
	var init_useMergeRef = __esmMin((() => {
		init_assignRef();
		init_useRef();
		useIsomorphicLayoutEffect$1 = typeof window !== "undefined" ? react.useLayoutEffect : react.useEffect;
		currentValues = /* @__PURE__ */ new WeakMap();
	}));
	//#endregion
	//#region node_modules/use-callback-ref/dist/es2015/index.js
	var init_es2015$5 = __esmMin((() => {
		init_assignRef();
		init_useRef();
		init_useMergeRef();
	}));
	//#endregion
	//#region node_modules/use-sidecar/dist/es2015/medium.js
	function ItoI(a) {
		return a;
	}
	function innerCreateMedium(defaults, middleware) {
		if (middleware === void 0) middleware = ItoI;
		var buffer = [];
		var assigned = false;
		return {
			read: function() {
				if (assigned) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
				if (buffer.length) return buffer[buffer.length - 1];
				return defaults;
			},
			useMedium: function(data) {
				var item = middleware(data, assigned);
				buffer.push(item);
				return function() {
					buffer = buffer.filter(function(x) {
						return x !== item;
					});
				};
			},
			assignSyncMedium: function(cb) {
				assigned = true;
				while (buffer.length) {
					var cbs = buffer;
					buffer = [];
					cbs.forEach(cb);
				}
				buffer = {
					push: function(x) {
						return cb(x);
					},
					filter: function() {
						return buffer;
					}
				};
			},
			assignMedium: function(cb) {
				assigned = true;
				var pendingQueue = [];
				if (buffer.length) {
					var cbs = buffer;
					buffer = [];
					cbs.forEach(cb);
					pendingQueue = buffer;
				}
				var executeQueue = function() {
					var cbs = pendingQueue;
					pendingQueue = [];
					cbs.forEach(cb);
				};
				var cycle = function() {
					return Promise.resolve().then(executeQueue);
				};
				cycle();
				buffer = {
					push: function(x) {
						pendingQueue.push(x);
						cycle();
					},
					filter: function(filter) {
						pendingQueue = pendingQueue.filter(filter);
						return buffer;
					}
				};
			}
		};
	}
	function createSidecarMedium(options) {
		if (options === void 0) options = {};
		var medium = innerCreateMedium(null);
		medium.options = __assign({
			async: true,
			ssr: false
		}, options);
		return medium;
	}
	var init_medium$1 = __esmMin((() => {
		init_tslib_es6();
	}));
	//#endregion
	//#region node_modules/use-sidecar/dist/es2015/exports.js
	function exportSidecar(medium, exported) {
		medium.useMedium(exported);
		return SideCar;
	}
	var SideCar;
	var init_exports$1 = __esmMin((() => {
		init_tslib_es6();
		SideCar = function(_a) {
			var sideCar = _a.sideCar;
			var rest = __rest(_a, ["sideCar"]);
			if (!sideCar) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
			var Target = sideCar.read();
			if (!Target) throw new Error("Sidecar medium not found");
			return react.createElement(Target, __assign({}, rest));
		};
		SideCar.isSideCarExport = true;
	}));
	//#endregion
	//#region node_modules/use-sidecar/dist/es2015/index.js
	var init_es2015$4 = __esmMin((() => {
		init_tslib_es6();
		init_medium$1();
		init_exports$1();
	}));
	//#endregion
	//#region node_modules/react-remove-scroll/dist/es2015/medium.js
	var effectCar;
	var init_medium = __esmMin((() => {
		init_es2015$4();
		effectCar = createSidecarMedium();
	}));
	//#endregion
	//#region node_modules/react-remove-scroll/dist/es2015/UI.js
	var nothing, RemoveScroll;
	var init_UI = __esmMin((() => {
		init_tslib_es6();
		init_constants();
		init_es2015$5();
		init_medium();
		nothing = function() {};
		RemoveScroll = react.forwardRef(function(props, parentRef) {
			var ref = react.useRef(null);
			var _a = react.useState({
				onScrollCapture: nothing,
				onWheelCapture: nothing,
				onTouchMoveCapture: nothing
			});
			var callbacks = _a[0];
			var setCallbacks = _a[1];
			var forwardProps = props.forwardProps;
			var children = props.children;
			var className = props.className;
			var removeScrollBar = props.removeScrollBar;
			var enabled = props.enabled;
			var shards = props.shards;
			var sideCar = props.sideCar;
			var noRelative = props.noRelative;
			var noIsolation = props.noIsolation;
			var inert = props.inert;
			var allowPinchZoom = props.allowPinchZoom;
			var _b = props.as;
			var Container = _b === void 0 ? "div" : _b;
			var gapMode = props.gapMode;
			var rest = __rest(props, [
				"forwardProps",
				"children",
				"className",
				"removeScrollBar",
				"enabled",
				"shards",
				"sideCar",
				"noRelative",
				"noIsolation",
				"inert",
				"allowPinchZoom",
				"as",
				"gapMode"
			]);
			var SideCar = sideCar;
			var containerRef = useMergeRefs([ref, parentRef]);
			var containerProps = __assign(__assign({}, rest), callbacks);
			return react.createElement(react.Fragment, null, enabled && react.createElement(SideCar, {
				sideCar: effectCar,
				removeScrollBar,
				shards,
				noRelative,
				noIsolation,
				inert,
				setCallbacks,
				allowPinchZoom: !!allowPinchZoom,
				lockRef: ref,
				gapMode
			}), forwardProps ? react.cloneElement(react.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : react.createElement(Container, __assign({}, containerProps, {
				className,
				ref: containerRef
			}), children));
		});
		RemoveScroll.defaultProps = {
			enabled: true,
			removeScrollBar: true,
			inert: false
		};
		RemoveScroll.classNames = {
			fullWidth: fullWidthClassName,
			zeroRight: zeroRightClassName
		};
	}));
	//#endregion
	//#region node_modules/get-nonce/dist/es2015/index.js
	var currentNonce, getNonce;
	var init_es2015$3 = __esmMin((() => {
		getNonce = function() {
			if (currentNonce) return currentNonce;
			if (typeof __webpack_nonce__ !== "undefined") return __webpack_nonce__;
		};
	}));
	//#endregion
	//#region node_modules/react-style-singleton/dist/es2015/singleton.js
	function makeStyleTag() {
		if (!document) return null;
		var tag = document.createElement("style");
		tag.type = "text/css";
		var nonce = getNonce();
		if (nonce) tag.setAttribute("nonce", nonce);
		return tag;
	}
	function injectStyles(tag, css) {
		if (tag.styleSheet) tag.styleSheet.cssText = css;
		else tag.appendChild(document.createTextNode(css));
	}
	function insertStyleTag(tag) {
		(document.head || document.getElementsByTagName("head")[0]).appendChild(tag);
	}
	var stylesheetSingleton;
	var init_singleton = __esmMin((() => {
		init_es2015$3();
		stylesheetSingleton = function() {
			var counter = 0;
			var stylesheet = null;
			return {
				add: function(style) {
					if (counter == 0) {
						if (stylesheet = makeStyleTag()) {
							injectStyles(stylesheet, style);
							insertStyleTag(stylesheet);
						}
					}
					counter++;
				},
				remove: function() {
					counter--;
					if (!counter && stylesheet) {
						stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
						stylesheet = null;
					}
				}
			};
		};
	}));
	//#endregion
	//#region node_modules/react-style-singleton/dist/es2015/hook.js
	var styleHookSingleton;
	var init_hook = __esmMin((() => {
		init_singleton();
		styleHookSingleton = function() {
			var sheet = stylesheetSingleton();
			return function(styles, isDynamic) {
				react.useEffect(function() {
					sheet.add(styles);
					return function() {
						sheet.remove();
					};
				}, [styles && isDynamic]);
			};
		};
	}));
	//#endregion
	//#region node_modules/react-style-singleton/dist/es2015/component.js
	var styleSingleton;
	var init_component$1 = __esmMin((() => {
		init_hook();
		styleSingleton = function() {
			var useStyle = styleHookSingleton();
			var Sheet = function(_a) {
				var styles = _a.styles;
				var dynamic = _a.dynamic;
				useStyle(styles, dynamic);
				return null;
			};
			return Sheet;
		};
	}));
	//#endregion
	//#region node_modules/react-style-singleton/dist/es2015/index.js
	var init_es2015$2 = __esmMin((() => {
		init_component$1();
		init_singleton();
		init_hook();
	}));
	//#endregion
	//#region node_modules/react-remove-scroll-bar/dist/es2015/utils.js
	var zeroGap, parse, getOffset, getGapWidth;
	var init_utils$4 = __esmMin((() => {
		zeroGap = {
			left: 0,
			top: 0,
			right: 0,
			gap: 0
		};
		parse = function(x) {
			return parseInt(x || "", 10) || 0;
		};
		getOffset = function(gapMode) {
			var cs = window.getComputedStyle(document.body);
			var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
			var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
			var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
			return [
				parse(left),
				parse(top),
				parse(right)
			];
		};
		getGapWidth = function(gapMode) {
			if (gapMode === void 0) gapMode = "margin";
			if (typeof window === "undefined") return zeroGap;
			var offsets = getOffset(gapMode);
			var documentWidth = document.documentElement.clientWidth;
			var windowWidth = window.innerWidth;
			return {
				left: offsets[0],
				top: offsets[1],
				right: offsets[2],
				gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
			};
		};
	}));
	//#endregion
	//#region node_modules/react-remove-scroll-bar/dist/es2015/component.js
	var Style, lockAttribute, getStyles, getCurrentUseCounter, useLockAttribute, RemoveScrollBar;
	var init_component = __esmMin((() => {
		init_es2015$2();
		init_constants();
		init_utils$4();
		Style = styleSingleton();
		lockAttribute = "data-scroll-locked";
		getStyles = function(_a, allowRelative, gapMode, important) {
			var left = _a.left;
			var top = _a.top;
			var right = _a.right;
			var gap = _a.gap;
			if (gapMode === void 0) gapMode = "margin";
			return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
				allowRelative && "position: relative ".concat(important, ";"),
				gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
				gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
			].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
		};
		getCurrentUseCounter = function() {
			var counter = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
			return isFinite(counter) ? counter : 0;
		};
		useLockAttribute = function() {
			react.useEffect(function() {
				document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
				return function() {
					var newCounter = getCurrentUseCounter() - 1;
					if (newCounter <= 0) document.body.removeAttribute(lockAttribute);
					else document.body.setAttribute(lockAttribute, newCounter.toString());
				};
			}, []);
		};
		RemoveScrollBar = function(_a) {
			var noRelative = _a.noRelative;
			var noImportant = _a.noImportant;
			var _b = _a.gapMode;
			var gapMode = _b === void 0 ? "margin" : _b;
			useLockAttribute();
			var gap = react.useMemo(function() {
				return getGapWidth(gapMode);
			}, [gapMode]);
			return react.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
		};
	}));
	//#endregion
	//#region node_modules/react-remove-scroll-bar/dist/es2015/index.js
	var init_es2015$1 = __esmMin((() => {
		init_component();
	}));
	//#endregion
	//#region node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
	var passiveSupported, options, nonPassive;
	var init_aggresiveCapture = __esmMin((() => {
		passiveSupported = false;
		if (typeof window !== "undefined") try {
			options = Object.defineProperty({}, "passive", { get: function() {
				passiveSupported = true;
				return true;
			} });
			window.addEventListener("test", options, options);
			window.removeEventListener("test", options, options);
		} catch (err) {
			passiveSupported = false;
		}
		nonPassive = passiveSupported ? { passive: false } : false;
	}));
	//#endregion
	//#region node_modules/react-remove-scroll/dist/es2015/handleScroll.js
	var alwaysContainsScroll, elementCanBeScrolled, elementCouldBeVScrolled, elementCouldBeHScrolled, locationCouldBeScrolled, getVScrollVariables, getHScrollVariables, elementCouldBeScrolled, getScrollVariables, getDirectionFactor, handleScroll;
	var init_handleScroll = __esmMin((() => {
		alwaysContainsScroll = function(node) {
			return node.tagName === "TEXTAREA";
		};
		elementCanBeScrolled = function(node, overflow) {
			if (!(node instanceof Element)) return false;
			var styles = window.getComputedStyle(node);
			return styles[overflow] !== "hidden" && !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible");
		};
		elementCouldBeVScrolled = function(node) {
			return elementCanBeScrolled(node, "overflowY");
		};
		elementCouldBeHScrolled = function(node) {
			return elementCanBeScrolled(node, "overflowX");
		};
		locationCouldBeScrolled = function(axis, node) {
			var ownerDocument = node.ownerDocument;
			var current = node;
			do {
				if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) current = current.host;
				if (elementCouldBeScrolled(axis, current)) {
					var _a = getScrollVariables(axis, current);
					if (_a[1] > _a[2]) return true;
				}
				current = current.parentNode;
			} while (current && current !== ownerDocument.body);
			return false;
		};
		getVScrollVariables = function(_a) {
			return [
				_a.scrollTop,
				_a.scrollHeight,
				_a.clientHeight
			];
		};
		getHScrollVariables = function(_a) {
			return [
				_a.scrollLeft,
				_a.scrollWidth,
				_a.clientWidth
			];
		};
		elementCouldBeScrolled = function(axis, node) {
			return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
		};
		getScrollVariables = function(axis, node) {
			return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
		};
		getDirectionFactor = function(axis, direction) {
			/**
			* If the element's direction is rtl (right-to-left), then scrollLeft is 0 when the scrollbar is at its rightmost position,
			* and then increasingly negative as you scroll towards the end of the content.
			* @see https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
			*/
			return axis === "h" && direction === "rtl" ? -1 : 1;
		};
		handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
			var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
			var delta = directionFactor * sourceDelta;
			var target = event.target;
			var targetInLock = endTarget.contains(target);
			var shouldCancelScroll = false;
			var isDeltaPositive = delta > 0;
			var availableScroll = 0;
			var availableScrollTop = 0;
			do {
				if (!target) break;
				var _a = getScrollVariables(axis, target);
				var position = _a[0];
				var elementScroll = _a[1] - _a[2] - directionFactor * position;
				if (position || elementScroll) {
					if (elementCouldBeScrolled(axis, target)) {
						availableScroll += elementScroll;
						availableScrollTop += position;
					}
				}
				var parent_1 = target.parentNode;
				target = parent_1 && parent_1.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? parent_1.host : parent_1;
			} while (!targetInLock && target !== document.body || targetInLock && (endTarget.contains(target) || endTarget === target));
			if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) shouldCancelScroll = true;
			else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) shouldCancelScroll = true;
			return shouldCancelScroll;
		};
	}));
	//#endregion
	//#region node_modules/react-remove-scroll/dist/es2015/SideEffect.js
	function RemoveScrollSideCar(props) {
		var shouldPreventQueue = react.useRef([]);
		var touchStartRef = react.useRef([0, 0]);
		var activeAxis = react.useRef();
		var id = react.useState(idCounter++)[0];
		var Style = react.useState(styleSingleton)[0];
		var lastProps = react.useRef(props);
		react.useEffect(function() {
			lastProps.current = props;
		}, [props]);
		react.useEffect(function() {
			if (props.inert) {
				document.body.classList.add("block-interactivity-".concat(id));
				var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
				allow_1.forEach(function(el) {
					return el.classList.add("allow-interactivity-".concat(id));
				});
				return function() {
					document.body.classList.remove("block-interactivity-".concat(id));
					allow_1.forEach(function(el) {
						return el.classList.remove("allow-interactivity-".concat(id));
					});
				};
			}
		}, [
			props.inert,
			props.lockRef.current,
			props.shards
		]);
		var shouldCancelEvent = react.useCallback(function(event, parent) {
			if ("touches" in event && event.touches.length === 2 || event.type === "wheel" && event.ctrlKey) return !lastProps.current.allowPinchZoom;
			var touch = getTouchXY(event);
			var touchStart = touchStartRef.current;
			var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
			var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
			var currentAxis;
			var target = event.target;
			var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
			if ("touches" in event && moveDirection === "h" && target.type === "range") return false;
			var selection = window.getSelection();
			var anchorNode = selection && selection.anchorNode;
			if (anchorNode ? anchorNode === target || anchorNode.contains(target) : false) return false;
			var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
			if (!canBeScrolledInMainDirection) return true;
			if (canBeScrolledInMainDirection) currentAxis = moveDirection;
			else {
				currentAxis = moveDirection === "v" ? "h" : "v";
				canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
			}
			if (!canBeScrolledInMainDirection) return false;
			if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) activeAxis.current = currentAxis;
			if (!currentAxis) return true;
			var cancelingAxis = activeAxis.current || currentAxis;
			return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
		}, []);
		var shouldPrevent = react.useCallback(function(_event) {
			var event = _event;
			if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) return;
			var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
			var sourceEvent = shouldPreventQueue.current.filter(function(e) {
				return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
			})[0];
			if (sourceEvent && sourceEvent.should) {
				if (event.cancelable) event.preventDefault();
				return;
			}
			if (!sourceEvent) {
				var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
					return node.contains(event.target);
				});
				if (shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation) {
					if (event.cancelable) event.preventDefault();
				}
			}
		}, []);
		var shouldCancel = react.useCallback(function(name, delta, target, should) {
			var event = {
				name,
				delta,
				target,
				should,
				shadowParent: getOutermostShadowParent(target)
			};
			shouldPreventQueue.current.push(event);
			setTimeout(function() {
				shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
					return e !== event;
				});
			}, 1);
		}, []);
		var scrollTouchStart = react.useCallback(function(event) {
			touchStartRef.current = getTouchXY(event);
			activeAxis.current = void 0;
		}, []);
		var scrollWheel = react.useCallback(function(event) {
			shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
		}, []);
		var scrollTouchMove = react.useCallback(function(event) {
			shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
		}, []);
		react.useEffect(function() {
			lockStack.push(Style);
			props.setCallbacks({
				onScrollCapture: scrollWheel,
				onWheelCapture: scrollWheel,
				onTouchMoveCapture: scrollTouchMove
			});
			document.addEventListener("wheel", shouldPrevent, nonPassive);
			document.addEventListener("touchmove", shouldPrevent, nonPassive);
			document.addEventListener("touchstart", scrollTouchStart, nonPassive);
			return function() {
				lockStack = lockStack.filter(function(inst) {
					return inst !== Style;
				});
				document.removeEventListener("wheel", shouldPrevent, nonPassive);
				document.removeEventListener("touchmove", shouldPrevent, nonPassive);
				document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
			};
		}, []);
		var removeScrollBar = props.removeScrollBar;
		var inert = props.inert;
		return react.createElement(react.Fragment, null, inert ? react.createElement(Style, { styles: generateStyle(id) }) : null, removeScrollBar ? react.createElement(RemoveScrollBar, {
			noRelative: props.noRelative,
			gapMode: props.gapMode
		}) : null);
	}
	function getOutermostShadowParent(node) {
		var shadowParent = null;
		while (node !== null) {
			if (node instanceof ShadowRoot) {
				shadowParent = node.host;
				node = node.host;
			}
			node = node.parentNode;
		}
		return shadowParent;
	}
	var getTouchXY, getDeltaXY, extractRef, deltaCompare, generateStyle, idCounter, lockStack;
	var init_SideEffect = __esmMin((() => {
		init_tslib_es6();
		init_es2015$1();
		init_es2015$2();
		init_aggresiveCapture();
		init_handleScroll();
		getTouchXY = function(event) {
			return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
		};
		getDeltaXY = function(event) {
			return [event.deltaX, event.deltaY];
		};
		extractRef = function(ref) {
			return ref && "current" in ref ? ref.current : ref;
		};
		deltaCompare = function(x, y) {
			return x[0] === y[0] && x[1] === y[1];
		};
		generateStyle = function(id) {
			return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
		};
		idCounter = 0;
		lockStack = [];
	}));
	//#endregion
	//#region node_modules/react-remove-scroll/dist/es2015/sidecar.js
	var sidecar_default;
	var init_sidecar = __esmMin((() => {
		init_es2015$4();
		init_SideEffect();
		init_medium();
		sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);
	}));
	//#endregion
	//#region node_modules/react-remove-scroll/dist/es2015/Combination.js
	var ReactRemoveScroll;
	var init_Combination = __esmMin((() => {
		init_tslib_es6();
		init_UI();
		init_sidecar();
		ReactRemoveScroll = react.forwardRef(function(props, ref) {
			return react.createElement(RemoveScroll, __assign({}, props, {
				ref,
				sideCar: sidecar_default
			}));
		});
		ReactRemoveScroll.classNames = RemoveScroll.classNames;
	}));
	//#endregion
	//#region node_modules/react-remove-scroll/dist/es2015/index.js
	var init_es2015 = __esmMin((() => {
		init_Combination();
	}));
	//#endregion
	//#region node_modules/@radix-ui/react-use-layout-effect/dist/index.module.js
	var useLayoutEffect$1;
	var init_index_module$37 = __esmMin((() => {
		useLayoutEffect$1 = Boolean(null === globalThis || void 0 === globalThis ? void 0 : globalThis.document) ? react.useLayoutEffect : () => {};
	}));
	//#endregion
	//#region node_modules/@radix-ui/react-id/dist/index.module.js
	function useId(o) {
		const [u, i] = react.useState(r$4());
		return useLayoutEffect$1((() => {
			o || i(((t) => null != t ? t : String(n$4++)));
		}), [o]), o || (u ? `radix-${u}` : "");
	}
	var r$4, n$4;
	var init_index_module$36 = __esmMin((() => {
		init_index_module$37();
		r$4 = react["useId".toString()] || (() => {});
		n$4 = 0;
	}));
	//#endregion
	//#region node_modules/@radix-ui/react-compose-refs/dist/index.module.js
	function composeRefs(...o) {
		return (e) => o.forEach(((o) => function(o, e) {
			"function" == typeof o ? o(e) : null != o && (o.current = e);
		}(o, e)));
	}
	function useComposedRefs(...e) {
		return react.useCallback(composeRefs(...e), e);
	}
	var init_index_module$35 = __esmMin((() => {}));
	//#endregion
	//#region node_modules/@babel/runtime/helpers/esm/extends.js
	function _extends() {
		return _extends = Object.assign ? Object.assign.bind() : function(n) {
			for (var e = 1; e < arguments.length; e++) {
				var t = arguments[e];
				for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
			}
			return n;
		}, _extends.apply(null, arguments);
	}
	var init_extends = __esmMin((() => {}));
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
	var init_objectWithoutPropertiesLoose = __esmMin((() => {}));
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
	var init_objectWithoutProperties = __esmMin((() => {
		init_objectWithoutPropertiesLoose();
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
	var init_objectSpread2 = __esmMin((() => {
		init_defineProperty();
	}));
	//#endregion
	//#region node_modules/@radix-ui/react-slot/dist/index.module.js
	function l$3(e) {
		/*#__PURE__*/ return react.isValidElement(e) && e.type === Slottable;
	}
	function o$4(e, t) {
		const r = _objectSpread2({}, t);
		for (const n in t) {
			const l = e[n];
			const o = t[n];
			/^on[A-Z]/.test(n) ? r[n] = (...e) => {
				null == o || o(...e), null == l || l(...e);
			} : "style" === n ? r[n] = _objectSpread2(_objectSpread2({}, l), o) : "className" === n && (r[n] = [l, o].filter(Boolean).join(" "));
		}
		return _objectSpread2(_objectSpread2({}, e), r);
	}
	var _excluded$22, _excluded2$13, Slot, n$3, Slottable;
	var init_index_module$34 = __esmMin((() => {
		init_index_module$35();
		init_extends();
		init_objectWithoutProperties();
		init_objectSpread2();
		_excluded$22 = ["children"];
		_excluded2$13 = ["children"];
		Slot = /*#__PURE__*/ react.forwardRef(((e, o) => {
			const { children: a } = e, s = _objectWithoutProperties(e, _excluded$22);
			return react.Children.toArray(a).some(l$3) ? /*#__PURE__*/ react.createElement(react.Fragment, null, react.Children.map(a, ((e) => l$3(e) ? /*#__PURE__*/ react.createElement(n$3, _extends({}, s, { ref: o }), e.props.children) : e))) : /*#__PURE__*/ react.createElement(n$3, _extends({}, s, { ref: o }), a);
		}));
		Slot.displayName = "Slot";
		n$3 = /*#__PURE__*/ react.forwardRef(((r, n) => {
			const { children: l } = r, a = _objectWithoutProperties(r, _excluded2$13);
			/*#__PURE__*/ return react.isValidElement(l) ? /*#__PURE__*/ react.cloneElement(l, _objectSpread2(_objectSpread2({}, o$4(a, l.props)), {}, { ref: composeRefs(n, l.ref) })) : react.Children.count(l) > 1 ? react.Children.only(null) : null;
		}));
		n$3.displayName = "SlotClone";
		Slottable = ({ children: e }) => /*#__PURE__*/ react.createElement(react.Fragment, null, e);
		__name(l$3, "l");
		__name(o$4, "o");
	}));
	//#endregion
	//#region node_modules/@radix-ui/react-primitive/dist/index.module.js
	var _excluded$21, Primitive;
	var init_index_module$33 = __esmMin((() => {
		init_index_module$34();
		init_extends();
		init_objectSpread2();
		init_objectWithoutProperties();
		_excluded$21 = ["asChild"];
		Primitive = [
			"a",
			"button",
			"div",
			"h2",
			"h3",
			"img",
			"li",
			"nav",
			"ol",
			"p",
			"span",
			"svg",
			"ul"
		].reduce(((o, i) => _objectSpread2(_objectSpread2({}, o), {}, { [i]: /*#__PURE__*/ react.forwardRef(((o, m) => {
			const { asChild: a } = o, s = _objectWithoutProperties(o, _excluded$21), n = a ? Slot : i;
			return react.useEffect((() => {
				window[Symbol.for("radix-ui")] = !0;
			}), []), /*#__PURE__*/ react.createElement(n, _extends({}, s, { ref: m }));
		})) })), {});
	}));
	//#endregion
	//#region node_modules/@radix-ui/react-presence/dist/index.module.js
	function r$3(e) {
		return (null == e ? void 0 : e.animationName) || "none";
	}
	var Presence;
	var init_index_module$32 = __esmMin((() => {
		init_index_module$37();
		init_index_module$35();
		Presence = (u) => {
			const { present: o, children: i } = u, s = function(n) {
				const [u, o] = react.useState(), i = react.useRef({}), s = react.useRef(n), c = react.useRef("none"), [d, m] = function(e, n) {
					return react.useReducer(((e, t) => {
						const r = n[e][t];
						return null != r ? r : e;
					}), e);
				}(n ? "mounted" : "unmounted", {
					mounted: {
						UNMOUNT: "unmounted",
						ANIMATION_OUT: "unmountSuspended"
					},
					unmountSuspended: {
						MOUNT: "mounted",
						ANIMATION_END: "unmounted"
					},
					unmounted: { MOUNT: "mounted" }
				});
				return react.useEffect((() => {
					const e = r$3(i.current);
					c.current = "mounted" === d ? e : "none";
				}), [d]), useLayoutEffect$1((() => {
					const e = i.current;
					const t = s.current;
					if (t !== n) {
						const u = c.current;
						const o = r$3(e);
						if (n) m("MOUNT");
						else if ("none" === o || "none" === (null == e ? void 0 : e.display)) m("UNMOUNT");
						else m(t && u !== o ? "ANIMATION_OUT" : "UNMOUNT");
						s.current = n;
					}
				}), [n, m]), useLayoutEffect$1((() => {
					if (u) {
						const e = (e) => {
							const n = r$3(i.current).includes(e.animationName);
							e.target === u && n && m("ANIMATION_END");
						};
						const n = (e) => {
							e.target === u && (c.current = r$3(i.current));
						};
						return u.addEventListener("animationstart", n), u.addEventListener("animationcancel", e), u.addEventListener("animationend", e), () => {
							u.removeEventListener("animationstart", n), u.removeEventListener("animationcancel", e), u.removeEventListener("animationend", e);
						};
					}
					m("ANIMATION_END");
				}), [u, m]), {
					isPresent: ["mounted", "unmountSuspended"].includes(d),
					ref: react.useCallback(((e) => {
						e && (i.current = getComputedStyle(e)), o(e);
					}), [])
				};
			}(o), c = "function" == typeof i ? i({ present: s.isPresent }) : react.Children.only(i), a = useComposedRefs(s.ref, c.ref);
			return "function" == typeof i || s.isPresent ? /*#__PURE__*/ react.cloneElement(c, { ref: a }) : null;
		};
		__name(r$3, "r");
		Presence.displayName = "Presence";
	}));
	//#endregion
	//#region node_modules/@radix-ui/react-focus-guards/dist/index.module.js
	function useFocusGuards() {
		react.useEffect((() => {
			var e;
			var n;
			const r = document.querySelectorAll("[data-radix-focus-guard]");
			return document.body.insertAdjacentElement("afterbegin", null !== (e = r[0]) && void 0 !== e ? e : o$3()), document.body.insertAdjacentElement("beforeend", null !== (n = r[1]) && void 0 !== n ? n : o$3()), t$3++, () => {
				1 === t$3 && document.querySelectorAll("[data-radix-focus-guard]").forEach(((e) => e.remove())), t$3--;
			};
		}), []);
	}
	function o$3() {
		const e = document.createElement("span");
		return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
	}
	var t$3;
	var init_index_module$31 = __esmMin((() => {
		t$3 = 0;
		__name(o$3, "o");
	}));
	//#endregion
	//#region node_modules/@radix-ui/react-portal/dist/index.module.js
	var _excluded$20, _excluded2$12, Portal$2, UnstablePortal;
	var init_index_module$30 = __esmMin((() => {
		init_index_module$33();
		init_index_module$37();
		init_extends();
		init_objectWithoutProperties();
		init_objectSpread2();
		_excluded$20 = ["containerRef", "style"];
		_excluded2$12 = ["container"];
		Portal$2 = /*#__PURE__*/ react.forwardRef(((a, i) => {
			var n;
			var d;
			const { containerRef: s, style: u } = a, c = _objectWithoutProperties(a, _excluded$20), m = null !== (n = null == s ? void 0 : s.current) && void 0 !== n ? n : null === globalThis || void 0 === globalThis || null === (d = globalThis.document) || void 0 === d ? void 0 : d.body, [, f] = react.useState({});
			return useLayoutEffect$1((() => {
				f({});
			}), []), m ? /*#__PURE__*/ react_dom.default.createPortal(/*#__PURE__*/ react.createElement(Primitive.div, _extends({ "data-radix-portal": "" }, c, {
				ref: i,
				style: m === document.body ? _objectSpread2({
					position: "absolute",
					top: 0,
					left: 0,
					zIndex: 2147483647
				}, u) : void 0
			})), m) : null;
		}));
		UnstablePortal = /*#__PURE__*/ react.forwardRef(((t, a) => {
			var i;
			const { container: n = null === globalThis || void 0 === globalThis || null === (i = globalThis.document) || void 0 === i ? void 0 : i.body } = t, d = _objectWithoutProperties(t, _excluded2$12);
			return n ? /*#__PURE__*/ react_dom.default.createPortal(/*#__PURE__*/ react.createElement(Primitive.div, _extends({}, d, { ref: a })), n) : null;
		}));
	}));
	//#endregion
	//#region node_modules/@radix-ui/react-use-callback-ref/dist/index.module.js
	function useCallbackRef(r) {
		const t = react.useRef(r);
		return react.useEffect((() => {
			t.current = r;
		})), react.useMemo((() => (...e) => {
			var r;
			return null === (r = t.current) || void 0 === r ? void 0 : r.call(t, ...e);
		}), []);
	}
	var init_index_module$29 = __esmMin((() => {}));
	//#endregion
	//#region node_modules/@radix-ui/react-focus-scope/dist/index.module.js
	/*#__PURE__*/ function r$2(e) {
		const t = [];
		const n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
			const t = "INPUT" === e.tagName && "hidden" === e.type;
			return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
		} });
		for (; n.nextNode();) t.push(n.currentNode);
		return t;
	}
	function s$3(e, t) {
		for (const n of e) if (!i$4(n, { upTo: t })) return n;
	}
	function i$4(e, { upTo: t }) {
		if ("hidden" === getComputedStyle(e).visibility) return !0;
		for (; e;) {
			if (void 0 !== t && e === t) return !1;
			if ("none" === getComputedStyle(e).display) return !0;
			e = e.parentElement;
		}
		return !1;
	}
	function a$2(e, { select: t = !1 } = {}) {
		if (e && e.focus) {
			const n = document.activeElement;
			e.focus({ preventScroll: !0 }), e !== n && function(e) {
				return e instanceof HTMLInputElement && "select" in e;
			}(e) && t && e.select();
		}
	}
	function f$7(e, t) {
		const n = [...e];
		const o = n.indexOf(t);
		return -1 !== o && n.splice(o, 1), n;
	}
	var _excluded$19, c$4, FocusScope, d$3;
	var init_index_module$28 = __esmMin((() => {
		init_index_module$29();
		init_index_module$33();
		init_index_module$35();
		init_extends();
		init_objectWithoutProperties();
		_excluded$19 = [
			"loop",
			"trapped",
			"onMountAutoFocus",
			"onUnmountAutoFocus"
		];
		c$4 = {
			bubbles: !1,
			cancelable: !0
		};
		FocusScope = /*#__PURE__*/ react.forwardRef(((i, f) => {
			const { loop: l = !1, trapped: m = !1, onMountAutoFocus: p, onUnmountAutoFocus: v } = i, E = _objectWithoutProperties(i, _excluded$19), [F, S] = react.useState(null), b = useCallbackRef(p), T = useCallbackRef(v), y = react.useRef(null), L = useComposedRefs(f, ((e) => S(e))), h = react.useRef({
				paused: !1,
				pause() {
					this.paused = !0;
				},
				resume() {
					this.paused = !1;
				}
			}).current;
			react.useEffect((() => {
				if (m) {
					function e(e) {
						if (h.paused || !F) return;
						const t = e.target;
						F.contains(t) ? y.current = t : a$2(y.current, { select: !0 });
					}
					function t(e) {
						!h.paused && F && (F.contains(e.relatedTarget) || a$2(y.current, { select: !0 }));
					}
					return document.addEventListener("focusin", e), document.addEventListener("focusout", t), () => {
						document.removeEventListener("focusin", e), document.removeEventListener("focusout", t);
					};
				}
			}), [
				m,
				F,
				h.paused
			]), react.useEffect((() => {
				if (F) {
					d$3.add(h);
					const t = document.activeElement;
					if (!F.contains(t)) {
						const n = new Event("focusScope.autoFocusOnMount", c$4);
						F.addEventListener("focusScope.autoFocusOnMount", b), F.dispatchEvent(n), n.defaultPrevented || (function(e, { select: t = !1 } = {}) {
							const n = document.activeElement;
							for (const o of e) if (a$2(o, { select: t }), document.activeElement !== n) return;
						}((e = r$2(F), e.filter(((e) => "A" !== e.tagName))), { select: !0 }), document.activeElement === t && a$2(F));
					}
					return () => {
						F.removeEventListener("focusScope.autoFocusOnMount", b), setTimeout((() => {
							const e = new Event("focusScope.autoFocusOnUnmount", c$4);
							F.addEventListener("focusScope.autoFocusOnUnmount", T), F.dispatchEvent(e), e.defaultPrevented || a$2(null != t ? t : document.body, { select: !0 }), F.removeEventListener("focusScope.autoFocusOnUnmount", T), d$3.remove(h);
						}), 0);
					};
				}
				var e;
			}), [
				F,
				b,
				T,
				h
			]);
			const N = react.useCallback(((e) => {
				if (!l && !m) return;
				if (h.paused) return;
				const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey;
				const n = document.activeElement;
				if (t && n) {
					const t = e.currentTarget, [o, u] = function(e) {
						const t = r$2(e);
						return [s$3(t, e), s$3(t.reverse(), e)];
					}(t);
					o && u ? e.shiftKey || n !== u ? e.shiftKey && n === o && (e.preventDefault(), l && a$2(u, { select: !0 })) : (e.preventDefault(), l && a$2(o, { select: !0 })) : n === t && e.preventDefault();
				}
			}), [
				l,
				m,
				h.paused
			]);
			/*#__PURE__*/ return react.createElement(Primitive.div, _extends({ tabIndex: -1 }, E, {
				ref: L,
				onKeyDown: N
			}));
		}));
		__name(r$2, "r");
		__name(s$3, "s");
		__name(i$4, "i");
		__name(a$2, "a");
		d$3 = function() {
			let e = [];
			return {
				add(t) {
					const n = e[0];
					t !== n && (null == n || n.pause()), e = f$7(e, t), e.unshift(t);
				},
				remove(t) {
					var n;
					e = f$7(e, t), null === (n = e[0]) || void 0 === n || n.resume();
				}
			};
		}();
		__name(f$7, "f");
	}));
	//#endregion
	//#region node_modules/@radix-ui/react-use-escape-keydown/dist/index.module.js
	function useEscapeKeydown(n) {
		const o = useCallbackRef(n);
		react.useEffect((() => {
			const e = (e) => {
				"Escape" === e.key && o(e);
			};
			return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
		}), [o]);
	}
	var init_index_module$27 = __esmMin((() => {
		init_index_module$29();
	}));
	//#endregion
	//#region node_modules/@radix-ui/react-use-body-pointer-events/dist/index.module.js
	function useBodyPointerEvents({ disabled: r }) {
		const i = react.useRef(!1);
		useLayoutEffect$1((() => {
			if (r) {
				function e() {
					o$2--, 0 === o$2 && (document.body.style.pointerEvents = n$2);
				}
				function t(e) {
					i.current = "mouse" !== e.pointerType;
				}
				return 0 === o$2 && (n$2 = document.body.style.pointerEvents), document.body.style.pointerEvents = "none", o$2++, document.addEventListener("pointerup", t), () => {
					i.current ? document.addEventListener("click", e, { once: !0 }) : e(), document.removeEventListener("pointerup", t);
				};
			}
		}), [r]);
	}
	var n$2, o$2;
	var init_index_module$26 = __esmMin((() => {
		init_index_module$37();
		o$2 = 0;
	}));
	//#endregion
	//#region node_modules/@radix-ui/primitive/dist/index.module.js
	function composeEventHandlers(e, n, { checkForDefaultPrevented: t = !0 } = {}) {
		return function(r) {
			if (null == e || e(r), !1 === t || !r.defaultPrevented) return null == n ? void 0 : n(r);
		};
	}
	var init_index_module$25 = __esmMin((() => {}));
	//#endregion
	//#region node_modules/@radix-ui/react-dismissable-layer/dist/index.module.js
	/*#__PURE__*/ function c$3() {
		const e = new Event("dismissableLayer.update");
		document.dispatchEvent(e);
	}
	function d$2(e, t, n) {
		const r = n.originalEvent.target;
		const s = new CustomEvent(e, {
			bubbles: !1,
			cancelable: !0,
			detail: n
		});
		return t && r.addEventListener(e, t, { once: !0 }), !r.dispatchEvent(s);
	}
	var _excluded$18, u$2, DismissableLayer, DismissableLayerBranch, Root$12, Branch;
	var init_index_module$24 = __esmMin((() => {
		init_index_module$27();
		init_index_module$29();
		init_index_module$26();
		init_index_module$35();
		init_index_module$33();
		init_index_module$25();
		init_extends();
		init_objectWithoutProperties();
		init_objectSpread2();
		_excluded$18 = [
			"disableOutsidePointerEvents",
			"onEscapeKeyDown",
			"onPointerDownOutside",
			"onFocusOutside",
			"onInteractOutside",
			"onDismiss"
		];
		u$2 = /*#__PURE__*/ react.createContext({
			layers: /* @__PURE__ */ new Set(),
			layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
			branches: /* @__PURE__ */ new Set()
		});
		DismissableLayer = /*#__PURE__*/ react.forwardRef(((l, m) => {
			const { disableOutsidePointerEvents: f = !1, onEscapeKeyDown: p, onPointerDownOutside: v, onFocusOutside: b, onInteractOutside: E, onDismiss: y } = l, w = _objectWithoutProperties(l, _excluded$18), h = react.useContext(u$2), [D, x] = react.useState(null), [, C] = react.useState({}), L = useComposedRefs(m, ((e) => x(e))), P = Array.from(h.layers), [O] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1), g = P.indexOf(O), B = D ? P.indexOf(D) : -1, R = h.layersWithOutsidePointerEventsDisabled.size > 0, F = B >= g, S = function(e) {
				const n = useCallbackRef(e);
				const r = react.useRef(!1);
				return react.useEffect((() => {
					const e = (e) => {
						if (e.target && !r.current) d$2("dismissableLayer.pointerDownOutside", n, { originalEvent: e });
						r.current = !1;
					};
					const t = window.setTimeout((() => {
						document.addEventListener("pointerdown", e);
					}), 0);
					return () => {
						window.clearTimeout(t), document.removeEventListener("pointerdown", e);
					};
				}), [n]), { onPointerDownCapture: () => r.current = !0 };
			}(((e) => {
				const t = e.target;
				const n = [...h.branches].some(((e) => e.contains(t)));
				F && !n && (null == v || v(e), null == E || E(e), e.defaultPrevented || null == y || y());
			})), W = function(e) {
				const n = useCallbackRef(e);
				const r = react.useRef(!1);
				return react.useEffect((() => {
					const e = (e) => {
						if (e.target && !r.current) d$2("dismissableLayer.focusOutside", n, { originalEvent: e });
					};
					return document.addEventListener("focusin", e), () => document.removeEventListener("focusin", e);
				}), [n]), {
					onFocusCapture: () => r.current = !0,
					onBlurCapture: () => r.current = !1
				};
			}(((e) => {
				const t = e.target;
				[...h.branches].some(((e) => e.contains(t))) || (null == b || b(e), null == E || E(e), e.defaultPrevented || null == y || y());
			}));
			return useEscapeKeydown(((e) => {
				B === h.layers.size - 1 && (null == p || p(e), e.defaultPrevented || null == y || y());
			})), useBodyPointerEvents({ disabled: f }), react.useEffect((() => {
				D && (f && h.layersWithOutsidePointerEventsDisabled.add(D), h.layers.add(D), c$3());
			}), [
				D,
				f,
				h
			]), react.useEffect((() => () => {
				D && (h.layers.delete(D), h.layersWithOutsidePointerEventsDisabled.delete(D), c$3());
			}), [D, h]), react.useEffect((() => {
				const e = () => C({});
				return document.addEventListener("dismissableLayer.update", e), () => document.removeEventListener("dismissableLayer.update", e);
			}), []), /*#__PURE__*/ react.createElement(Primitive.div, _extends({}, w, {
				ref: L,
				style: _objectSpread2({ pointerEvents: R ? F ? "auto" : "none" : void 0 }, l.style),
				onFocusCapture: composeEventHandlers(l.onFocusCapture, W.onFocusCapture),
				onBlurCapture: composeEventHandlers(l.onBlurCapture, W.onBlurCapture),
				onPointerDownCapture: composeEventHandlers(l.onPointerDownCapture, S.onPointerDownCapture)
			}));
		}));
		DismissableLayerBranch = /*#__PURE__*/ react.forwardRef(((e, t) => {
			const n = react.useContext(u$2);
			const o = react.useRef(null);
			const c = useComposedRefs(t, o);
			return react.useEffect((() => {
				const e = o.current;
				if (e) return n.branches.add(e), () => {
					n.branches.delete(e);
				};
			}), [n.branches]), /*#__PURE__*/ react.createElement(Primitive.div, _extends({}, e, { ref: c }));
		}));
		__name(c$3, "c");
		__name(d$2, "d");
		Root$12 = DismissableLayer;
		Branch = DismissableLayerBranch;
	}));
	//#endregion
	//#region node_modules/@radix-ui/react-arrow/dist/index.module.js
	var _excluded$17, Arrow$5, Root$11;
	var init_index_module$23 = __esmMin((() => {
		init_index_module$33();
		init_extends();
		init_objectWithoutProperties();
		_excluded$17 = [
			"children",
			"width",
			"height"
		];
		Arrow$5 = /*#__PURE__*/ react.forwardRef(((o, i) => {
			const { children: n, width: s = 10, height: m = 5 } = o, p = _objectWithoutProperties(o, _excluded$17);
			/*#__PURE__*/ return react.createElement(Primitive.svg, _extends({}, p, {
				ref: i,
				width: s,
				height: m,
				viewBox: "0 0 30 10",
				preserveAspectRatio: "none"
			}), o.asChild ? n : /*#__PURE__*/ react.createElement("polygon", { points: "0,0 30,0 15,10" }));
		}));
		Root$11 = Arrow$5;
	}));
	//#endregion
	//#region node_modules/@radix-ui/react-use-size/dist/index.module.js
	function useSize(r) {
		const [i, t] = react.useState(void 0);
		return react.useEffect((() => {
			if (r) {
				const e = new ResizeObserver(((e) => {
					if (!Array.isArray(e)) return;
					if (!e.length) return;
					const i = e[0];
					let o;
					let n;
					if ("borderBoxSize" in i) {
						const e = i.borderBoxSize;
						const r = Array.isArray(e) ? e[0] : e;
						o = r.inlineSize, n = r.blockSize;
					} else {
						const e = r.getBoundingClientRect();
						o = e.width, n = e.height;
					}
					t({
						width: o,
						height: n
					});
				}));
				return e.observe(r, { box: "border-box" }), () => e.unobserve(r);
			}
			t(void 0);
		}), [r]), i;
	}
	var init_index_module$22 = __esmMin((() => {}));
	//#endregion
	//#region node_modules/@radix-ui/rect/dist/index.module.js
	function observeElementRect(n, o) {
		const i = e$2.get(n);
		return void 0 === i ? (e$2.set(n, {
			rect: {},
			callbacks: [o]
		}), 1 === e$2.size && (t$2 = requestAnimationFrame(c$2))) : (i.callbacks.push(o), o(n.getBoundingClientRect())), () => {
			const c = e$2.get(n);
			if (void 0 === c) return;
			const i = c.callbacks.indexOf(o);
			i > -1 && c.callbacks.splice(i, 1), 0 === c.callbacks.length && (e$2.delete(n), 0 === e$2.size && cancelAnimationFrame(t$2));
		};
	}
	function c$2() {
		const n = [];
		e$2.forEach(((t, e) => {
			const c = e.getBoundingClientRect();
			var o = t.rect;
			var i = c;
			(o.width !== i.width || o.height !== i.height || o.top !== i.top || o.right !== i.right || o.bottom !== i.bottom || o.left !== i.left) && (t.rect = c, n.push(t));
		})), n.forEach(((t) => {
			t.callbacks.forEach(((e) => e(t.rect)));
		})), t$2 = requestAnimationFrame(c$2);
	}
	var t$2, e$2;
	var init_index_module$21 = __esmMin((() => {
		e$2 = /* @__PURE__ */ new Map();
		__name(c$2, "c");
	}));
	//#endregion
	//#region node_modules/@radix-ui/react-use-rect/dist/index.module.js
	function useRect(e) {
		const [o, c] = react.useState();
		return react.useEffect((() => {
			if (e) {
				const r = observeElementRect(e, c);
				return () => {
					c(void 0), r();
				};
			}
		}), [e]), o;
	}
	var init_index_module$20 = __esmMin((() => {
		init_index_module$21();
	}));
	//#endregion
	//#region node_modules/@radix-ui/react-context/dist/index.module.js
	function createContext$3(t, n) {
		const o = /*#__PURE__*/ react.createContext(n);
		function r(t) {
			const { children: n } = t, r = _objectWithoutProperties(t, _excluded$16), c = react.useMemo((() => r), Object.values(r));
			/*#__PURE__*/ return react.createElement(o.Provider, { value: c }, n);
		}
		return r.displayName = t + "Provider", [r, function(r) {
			const c = react.useContext(o);
			if (c) return c;
			if (void 0 !== n) return n;
			throw new Error(`\`${r}\` must be used within \`${t}\``);
		}];
	}
	function createContextScope(n, o = []) {
		let r = [];
		const c = () => {
			const t = r.map(((t) => /*#__PURE__*/ react.createContext(t)));
			return function(o) {
				const r = (null == o ? void 0 : o[n]) || t;
				return react.useMemo((() => ({ [`__scope${n}`]: _objectSpread2(_objectSpread2({}, o), {}, { [n]: r }) })), [o, r]);
			};
		};
		return c.scopeName = n, [function(t, o) {
			const c = /*#__PURE__*/ react.createContext(o);
			const u = r.length;
			function s(t) {
				const { scope: o, children: r } = t, s = _objectWithoutProperties(t, _excluded2$11), i = (null == o ? void 0 : o[n][u]) || c, a = react.useMemo((() => s), Object.values(s));
				/*#__PURE__*/ return react.createElement(i.Provider, { value: a }, r);
			}
			return r = [...r, o], s.displayName = t + "Provider", [s, function(r, s) {
				const i = (null == s ? void 0 : s[n][u]) || c;
				const a = react.useContext(i);
				if (a) return a;
				if (void 0 !== o) return o;
				throw new Error(`\`${r}\` must be used within \`${t}\``);
			}];
		}, t$1(c, ...o)];
	}
	function t$1(...t) {
		const n = t[0];
		if (1 === t.length) return n;
		const o = () => {
			const o = t.map(((e) => ({
				useScope: e(),
				scopeName: e.scopeName
			})));
			return function(t) {
				const r = o.reduce(((e, { useScope: n, scopeName: o }) => _objectSpread2(_objectSpread2({}, e), n(t)[`__scope${o}`])), {});
				return react.useMemo((() => ({ [`__scope${n.scopeName}`]: r })), [r]);
			};
		};
		return o.scopeName = n.scopeName, o;
	}
	var _excluded$16, _excluded2$11;
	var init_index_module$19 = __esmMin((() => {
		init_objectWithoutProperties();
		init_objectSpread2();
		_excluded$16 = ["children"];
		_excluded2$11 = ["scope", "children"];
		__name(createContext$3, "createContext");
		__name(t$1, "t");
	}));
	//#endregion
	//#region node_modules/@radix-ui/popper/dist/index.module.js
	function getPlacementData({ anchorRect: p, popperSize: c, arrowSize: f, arrowOffset: l = 0, side: d, sideOffset: h = 0, align: x, alignOffset: g = 0, shouldAvoidCollisions: u = !0, collisionBoundariesRect: w, collisionTolerance: m = 0 }) {
		if (!p || !c || !w) return {
			popperStyles: o$1,
			arrowStyles: n$1
		};
		const y = function(e, r, o = 0, n = 0, i) {
			const p = i ? i.height : 0;
			const a = t(r, e, "x");
			const s = t(r, e, "y");
			const c = s.before - o - p;
			const f = s.after + o + p;
			const l = a.before - o - p;
			const d = a.after + o + p;
			return {
				top: {
					start: {
						x: a.start + n,
						y: c
					},
					center: {
						x: a.center,
						y: c
					},
					end: {
						x: a.end - n,
						y: c
					}
				},
				right: {
					start: {
						x: d,
						y: s.start + n
					},
					center: {
						x: d,
						y: s.center
					},
					end: {
						x: d,
						y: s.end - n
					}
				},
				bottom: {
					start: {
						x: a.start + n,
						y: f
					},
					center: {
						x: a.center,
						y: f
					},
					end: {
						x: a.end - n,
						y: f
					}
				},
				left: {
					start: {
						x: l,
						y: s.start + n
					},
					center: {
						x: l,
						y: s.center
					},
					end: {
						x: l,
						y: s.end - n
					}
				}
			};
		}(c, p, h, g, f);
		const b = y[d][x];
		if (!1 === u) {
			const t = e$1(b);
			let o = n$1;
			f && (o = i$3({
				popperSize: c,
				arrowSize: f,
				arrowOffset: l,
				side: d,
				align: x
			}));
			return {
				popperStyles: _objectSpread2(_objectSpread2({}, t), {}, { "--radix-popper-transform-origin": r$1(c, d, x, l, f) }),
				arrowStyles: o,
				placedSide: d,
				placedAlign: x
			};
		}
		const S = DOMRect.fromRect(_objectSpread2(_objectSpread2({}, c), b));
		const $ = (O = w, z = m, DOMRect.fromRect({
			width: O.width - 2 * z,
			height: O.height - 2 * z,
			x: O.left + z,
			y: O.top + z
		}));
		var O;
		var z;
		const R = s$2(S, $);
		const M = y[a$1(d)][x];
		const D = function(t, e, r) {
			const o = a$1(t);
			return e[t] && !r[o] ? o : t;
		}(d, R, s$2(DOMRect.fromRect(_objectSpread2(_objectSpread2({}, c), M)), $));
		const A = function(t, e, r, o, n) {
			const i = "top" === r || "bottom" === r;
			const p = i ? "left" : "top";
			const a = i ? "right" : "bottom";
			const s = i ? "width" : "height";
			const c = e[s] > t[s];
			if (("start" === o || "center" === o) && (n[p] && c || n[a] && !c)) return "end";
			if (("end" === o || "center" === o) && (n[a] && c || n[p] && !c)) return "start";
			return o;
		}(c, p, d, x, R);
		const I = e$1(y[D][A]);
		let C = n$1;
		f && (C = i$3({
			popperSize: c,
			arrowSize: f,
			arrowOffset: l,
			side: D,
			align: A
		}));
		return {
			popperStyles: _objectSpread2(_objectSpread2({}, I), {}, { "--radix-popper-transform-origin": r$1(c, D, A, l, f) }),
			arrowStyles: C,
			placedSide: D,
			placedAlign: A
		};
	}
	function t(t, e, r) {
		const o = t["x" === r ? "left" : "top"];
		const n = "x" === r ? "width" : "height";
		const i = t[n];
		const p = e[n];
		return {
			before: o - p,
			start: o,
			center: o + (i - p) / 2,
			end: o + i - p,
			after: o + i
		};
	}
	function e$1(t) {
		return {
			position: "absolute",
			top: 0,
			left: 0,
			minWidth: "max-content",
			willChange: "transform",
			transform: `translate3d(${Math.round(t.x + window.scrollX)}px, ${Math.round(t.y + window.scrollY)}px, 0)`
		};
	}
	function r$1(t, e, r, o, n) {
		const i = "top" === e || "bottom" === e;
		const p = n ? n.width : 0;
		const a = n ? n.height : 0;
		const s = p / 2 + o;
		let c = "";
		let f = "";
		return i ? (c = {
			start: `${s}px`,
			center: "center",
			end: t.width - s + "px"
		}[r], f = "top" === e ? `${t.height + a}px` : -a + "px") : (c = "left" === e ? `${t.width + a}px` : -a + "px", f = {
			start: `${s}px`,
			center: "center",
			end: t.height - s + "px"
		}[r]), `${c} ${f}`;
	}
	function i$3({ popperSize: t, arrowSize: e, arrowOffset: r, side: o, align: n }) {
		const i = (t.width - e.width) / 2;
		const a = (t.height - e.width) / 2;
		const s = {
			top: 0,
			right: 90,
			bottom: 180,
			left: -90
		}[o];
		const c = Math.max(e.width, e.height);
		const f = {
			width: `${c}px`,
			height: `${c}px`,
			transform: `rotate(${s}deg)`,
			willChange: "transform",
			position: "absolute",
			[o]: "100%",
			direction: p$3(o, n)
		};
		return "top" !== o && "bottom" !== o || ("start" === n && (f.left = `${r}px`), "center" === n && (f.left = `${i}px`), "end" === n && (f.right = `${r}px`)), "left" !== o && "right" !== o || ("start" === n && (f.top = `${r}px`), "center" === n && (f.top = `${a}px`), "end" === n && (f.bottom = `${r}px`)), f;
	}
	function p$3(t, e) {
		return ("top" !== t && "right" !== t || "end" !== e) && ("bottom" !== t && "left" !== t || "end" === e) ? "ltr" : "rtl";
	}
	function a$1(t) {
		return {
			top: "bottom",
			right: "left",
			bottom: "top",
			left: "right"
		}[t];
	}
	function s$2(t, e) {
		return {
			top: t.top < e.top,
			right: t.right > e.right,
			bottom: t.bottom > e.bottom,
			left: t.left < e.left
		};
	}
	var o$1, n$1;
	var init_index_module$18 = __esmMin((() => {
		init_objectSpread2();
		__name(e$1, "e");
		__name(r$1, "r");
		o$1 = {
			position: "fixed",
			top: 0,
			left: 0,
			opacity: 0,
			transform: "translate3d(0, -200%, 0)"
		};
		n$1 = {
			position: "absolute",
			opacity: 0
		};
		__name(i$3, "i");
		__name(p$3, "p");
		__name(a$1, "a");
		__name(s$2, "s");
	}));
	//#endregion
	//#region node_modules/@radix-ui/react-popper/dist/index.module.js
	var _excluded$15, _excluded2$10, _excluded3$9, c$1, l$2, f$6, d$1, Popper, PopperAnchor, u$1, m$5, PopperContent, PopperArrow, Root$10, Anchor$1, Content$7, Arrow$4;
	var init_index_module$17 = __esmMin((() => {
		init_index_module$23();
		init_index_module$33();
		init_index_module$22();
		init_index_module$20();
		init_index_module$19();
		init_index_module$35();
		init_index_module$18();
		init_extends();
		init_objectWithoutProperties();
		init_objectSpread2();
		_excluded$15 = ["__scopePopper", "virtualRef"];
		_excluded2$10 = [
			"__scopePopper",
			"side",
			"sideOffset",
			"align",
			"alignOffset",
			"collisionTolerance",
			"avoidCollisions"
		];
		_excluded3$9 = ["__scopePopper", "offset"];
		[c$1, l$2] = createContextScope("Popper");
		[f$6, d$1] = c$1("Popper");
		Popper = (e) => {
			const { __scopePopper: o, children: r } = e, [t, n] = react.useState(null);
			/*#__PURE__*/ return react.createElement(f$6, {
				scope: o,
				anchor: t,
				onAnchorChange: n
			}, r);
		};
		PopperAnchor = /*#__PURE__*/ react.forwardRef(((e, r) => {
			const { __scopePopper: t, virtualRef: n } = e, p = _objectWithoutProperties(e, _excluded$15), c = d$1("PopperAnchor", t), l = react.useRef(null), f = useComposedRefs(r, l);
			return react.useEffect((() => {
				c.onAnchorChange((null == n ? void 0 : n.current) || l.current);
			})), n ? null : /*#__PURE__*/ react.createElement(Primitive.div, _extends({}, p, { ref: f }));
		}));
		[u$1, m$5] = c$1("PopperContent");
		PopperContent = /*#__PURE__*/ react.forwardRef(((e, n) => {
			const { __scopePopper: c, side: l = "bottom", sideOffset: f, align: m = "center", alignOffset: w, collisionTolerance: h, avoidCollisions: x = !0 } = e, v = _objectWithoutProperties(e, _excluded2$10), P = d$1("PopperContent", c), [A, g] = react.useState(), E = useRect(P.anchor), [y, C] = react.useState(null), S = useSize(y), [R, O] = react.useState(null), _ = useSize(R), b = useComposedRefs(n, ((e) => C(e))), z = function() {
				const [e, o] = react.useState(void 0);
				return react.useEffect((() => {
					let e;
					function r() {
						o({
							width: window.innerWidth,
							height: window.innerHeight
						});
					}
					function t() {
						window.clearTimeout(e), e = window.setTimeout(r, 100);
					}
					return r(), window.addEventListener("resize", t), () => window.removeEventListener("resize", t);
				}), []), e;
			}(), { popperStyles: k, arrowStyles: L, placedSide: B, placedAlign: D } = getPlacementData({
				anchorRect: E,
				popperSize: S,
				arrowSize: _,
				arrowOffset: A,
				side: l,
				sideOffset: f,
				align: m,
				alignOffset: w,
				shouldAvoidCollisions: x,
				collisionBoundariesRect: z ? DOMRect.fromRect(_objectSpread2(_objectSpread2({}, z), {}, {
					x: 0,
					y: 0
				})) : void 0,
				collisionTolerance: h
			}), H = void 0 !== B;
			/*#__PURE__*/ return react.createElement("div", {
				style: k,
				"data-radix-popper-content-wrapper": ""
			}, /*#__PURE__*/ react.createElement(u$1, {
				scope: c,
				arrowStyles: L,
				onArrowChange: O,
				onArrowOffsetChange: g
			}, /*#__PURE__*/ react.createElement(Primitive.div, _extends({
				"data-side": B,
				"data-align": D
			}, v, {
				style: _objectSpread2(_objectSpread2({}, v.style), {}, { animation: H ? void 0 : "none" }),
				ref: b
			}))));
		}));
		PopperArrow = /*#__PURE__*/ react.forwardRef((function(o, r) {
			const { __scopePopper: t, offset: n } = o, i = _objectWithoutProperties(o, _excluded3$9), p = m$5("PopperArrow", t), { onArrowOffsetChange: c } = p;
			return react.useEffect((() => c(n)), [c, n]), /*#__PURE__*/ react.createElement("span", { style: _objectSpread2(_objectSpread2({}, p.arrowStyles), {}, { pointerEvents: "none" }) }, /*#__PURE__*/ react.createElement("span", {
				ref: p.onArrowChange,
				style: {
					display: "inline-block",
					verticalAlign: "top",
					pointerEvents: "auto"
				}
			}, /*#__PURE__*/ react.createElement(Root$11, _extends({}, i, {
				ref: r,
				style: _objectSpread2(_objectSpread2({}, i.style), {}, { display: "block" })
			}))));
		}));
		Root$10 = Popper;
		Anchor$1 = PopperAnchor;
		Content$7 = PopperContent;
		Arrow$4 = PopperArrow;
	}));
	//#endregion
	//#region node_modules/@radix-ui/react-use-controllable-state/dist/index.module.js
	function useControllableState({ prop: o, defaultProp: r, onChange: n = (() => {}) }) {
		const [a, u] = function({ defaultProp: o, onChange: r }) {
			const n = react.useState(o), [a] = n, u = react.useRef(a), c = useCallbackRef(r);
			return react.useEffect((() => {
				u.current !== a && (c(a), u.current = a);
			}), [
				a,
				u,
				c
			]), n;
		}({
			defaultProp: r,
			onChange: n
		}), c = void 0 !== o, f = c ? o : a, l = useCallbackRef(n);
		return [f, react.useCallback(((e) => {
			if (c) {
				const r = "function" == typeof e ? e(o) : e;
				r !== o && l(r);
			} else u(e);
		}), [
			c,
			o,
			u,
			l
		])];
	}
	var init_index_module$16 = __esmMin((() => {
		init_index_module$29();
	}));
	//#endregion
	//#region node_modules/@radix-ui/react-popover/dist/index.module.js
	/*#__PURE__*/ function w$5(e) {
		return e ? "open" : "closed";
	}
	var _excluded2$9, _excluded3$8, _excluded4$5, _excluded5$4, _excluded6$6, _excluded7$4, _excluded8$3, C$3, g$6, x$6, h$5, E$4, Popover$1, PopoverTrigger, PopoverContent$2, A$1, O$2, R$4, PopoverClose, PopoverArrow$1, Root$9, Trigger$4, Content$6, Close$1, Arrow$3;
	var init_index_module$15 = __esmMin((() => {
		init_es2015$6();
		init_es2015();
		init_index_module$36();
		init_index_module$33();
		init_index_module$32();
		init_index_module$31();
		init_index_module$30();
		init_index_module$28();
		init_index_module$24();
		init_index_module$17();
		init_index_module$16();
		init_index_module$19();
		init_index_module$35();
		init_index_module$25();
		init_extends();
		init_objectWithoutProperties();
		init_objectSpread2();
		_excluded2$9 = ["__scopePopover"];
		_excluded3$8 = ["forceMount"];
		_excluded4$5 = ["allowPinchZoom", "portalled"];
		_excluded5$4 = ["portalled"];
		_excluded6$6 = [
			"__scopePopover",
			"trapFocus",
			"onOpenAutoFocus",
			"onCloseAutoFocus",
			"disableOutsidePointerEvents",
			"onEscapeKeyDown",
			"onPointerDownOutside",
			"onFocusOutside",
			"onInteractOutside"
		];
		_excluded7$4 = ["__scopePopover"];
		_excluded8$3 = ["__scopePopover"];
		[C$3, g$6] = createContextScope("Popover", [l$2]);
		x$6 = l$2(), [h$5, E$4] = C$3("Popover");
		Popover$1 = /* @__PURE__ */ __name((e) => {
			const { __scopePopover: o, children: t, open: n, defaultOpen: c, onOpenChange: a, modal: s = !1 } = e, i = x$6(o), u = react.useRef(null), [d, m] = react.useState(!1), [f = !1, P] = useControllableState({
				prop: n,
				defaultProp: c,
				onChange: a
			});
			/*#__PURE__*/ return react.createElement(Root$10, i, /*#__PURE__*/ react.createElement(h$5, {
				scope: o,
				contentId: useId(),
				triggerRef: u,
				open: f,
				onOpenChange: P,
				onOpenToggle: react.useCallback((() => P(((e) => !e))), [P]),
				hasCustomAnchor: d,
				onCustomAnchorAdd: react.useCallback((() => m(!0)), []),
				onCustomAnchorRemove: react.useCallback((() => m(!1)), []),
				modal: s
			}, t));
		}, "Popover");
		PopoverTrigger = /*#__PURE__*/ react.forwardRef(((e, o) => {
			const { __scopePopover: r } = e, n = _objectWithoutProperties(e, _excluded2$9), c = E$4("PopoverTrigger", r), a = x$6(r), s = useComposedRefs(o, c.triggerRef), i = /*#__PURE__*/ react.createElement(Primitive.button, _extends({
				type: "button",
				"aria-haspopup": "dialog",
				"aria-expanded": c.open,
				"aria-controls": c.contentId,
				"data-state": w$5(c.open)
			}, n, {
				ref: s,
				onClick: composeEventHandlers(e.onClick, c.onOpenToggle)
			}));
			return c.hasCustomAnchor ? i : /*#__PURE__*/ react.createElement(Anchor$1, _extends({ asChild: !0 }, a), i);
		}));
		PopoverContent$2 = /*#__PURE__*/ react.forwardRef(((e, o) => {
			const { forceMount: r } = e, t = _objectWithoutProperties(e, _excluded3$8), c = E$4("PopoverContent", e.__scopePopover);
			/*#__PURE__*/ return react.createElement(Presence, { present: r || c.open }, c.modal ? /*#__PURE__*/ react.createElement(A$1, _extends({}, t, { ref: o })) : /*#__PURE__*/ react.createElement(O$2, _extends({}, t, { ref: o })));
		}));
		A$1 = /*#__PURE__*/ react.forwardRef(((r, t) => {
			const { allowPinchZoom: n, portalled: c = !0 } = r, s = _objectWithoutProperties(r, _excluded4$5), i = E$4("PopoverContent", r.__scopePopover), p = react.useRef(null), u = useComposedRefs(t, p), l = react.useRef(!1);
			react.useEffect((() => {
				const o = p.current;
				if (o) return hideOthers(o);
			}), []);
			const d = c ? Portal$2 : react.Fragment;
			/*#__PURE__*/ return react.createElement(d, null, /*#__PURE__*/ react.createElement(ReactRemoveScroll, { allowPinchZoom: n }, /*#__PURE__*/ react.createElement(R$4, _extends({}, s, {
				ref: u,
				trapFocus: i.open,
				disableOutsidePointerEvents: !0,
				onCloseAutoFocus: composeEventHandlers(r.onCloseAutoFocus, ((e) => {
					var o;
					e.preventDefault(), l.current || null === (o = i.triggerRef.current) || void 0 === o || o.focus();
				})),
				onPointerDownOutside: composeEventHandlers(r.onPointerDownOutside, ((e) => {
					const o = e.detail.originalEvent;
					const r = 0 === o.button && !0 === o.ctrlKey;
					const t = 2 === o.button || r;
					l.current = t;
				}), { checkForDefaultPrevented: !1 }),
				onFocusOutside: composeEventHandlers(r.onFocusOutside, ((e) => e.preventDefault()), { checkForDefaultPrevented: !1 })
			}))));
		}));
		O$2 = /*#__PURE__*/ react.forwardRef(((e, o) => {
			const { portalled: r = !0 } = e, t = _objectWithoutProperties(e, _excluded5$4), n = E$4("PopoverContent", e.__scopePopover), c = react.useRef(!1), s = r ? Portal$2 : react.Fragment;
			/*#__PURE__*/ return react.createElement(s, null, /*#__PURE__*/ react.createElement(R$4, _extends({}, t, {
				ref: o,
				trapFocus: !1,
				disableOutsidePointerEvents: !1,
				onCloseAutoFocus: (o) => {
					var r;
					var t;
					(null === (r = e.onCloseAutoFocus) || void 0 === r || r.call(e, o), o.defaultPrevented) || (c.current || null === (t = n.triggerRef.current) || void 0 === t || t.focus(), o.preventDefault());
					c.current = !1;
				},
				onInteractOutside: (o) => {
					var r;
					var t;
					null === (r = e.onInteractOutside) || void 0 === r || r.call(e, o), o.defaultPrevented || (c.current = !0);
					const a = o.target;
					null !== (t = n.triggerRef.current) && void 0 !== t && t.contains(a) && o.preventDefault();
				}
			})));
		}));
		R$4 = /*#__PURE__*/ react.forwardRef(((e, o) => {
			const { __scopePopover: r, trapFocus: t, onOpenAutoFocus: n, onCloseAutoFocus: a, disableOutsidePointerEvents: u, onEscapeKeyDown: l, onPointerDownOutside: d, onFocusOutside: m, onInteractOutside: f } = e, C = _objectWithoutProperties(e, _excluded6$6), g = E$4("PopoverContent", r), h = x$6(r);
			return useFocusGuards(), /*#__PURE__*/ react.createElement(FocusScope, {
				asChild: !0,
				loop: !0,
				trapped: t,
				onMountAutoFocus: n,
				onUnmountAutoFocus: a
			}, /*#__PURE__*/ react.createElement(DismissableLayer, {
				asChild: !0,
				disableOutsidePointerEvents: u,
				onInteractOutside: f,
				onEscapeKeyDown: l,
				onPointerDownOutside: d,
				onFocusOutside: m,
				onDismiss: () => g.onOpenChange(!1)
			}, /*#__PURE__*/ react.createElement(Content$7, _extends({
				"data-state": w$5(g.open),
				role: "dialog",
				id: g.contentId
			}, h, C, {
				ref: o,
				style: _objectSpread2(_objectSpread2({}, C.style), {}, { "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)" })
			}))));
		}));
		PopoverClose = /*#__PURE__*/ react.forwardRef(((e, o) => {
			const { __scopePopover: r } = e, n = _objectWithoutProperties(e, _excluded7$4), c = E$4("PopoverClose", r);
			/*#__PURE__*/ return react.createElement(Primitive.button, _extends({ type: "button" }, n, {
				ref: o,
				onClick: composeEventHandlers(e.onClick, (() => c.onOpenChange(!1)))
			}));
		}));
		PopoverArrow$1 = /*#__PURE__*/ react.forwardRef(((e, o) => {
			const { __scopePopover: r } = e, t = _objectWithoutProperties(e, _excluded8$3), n = x$6(r);
			/*#__PURE__*/ return react.createElement(Arrow$4, _extends({}, n, t, { ref: o }));
		}));
		__name(w$5, "w");
		Root$9 = Popover$1;
		Trigger$4 = PopoverTrigger;
		Content$6 = PopoverContent$2;
		Close$1 = PopoverClose;
		Arrow$3 = PopoverArrow$1;
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/popover/popover-arrow.js
	var PopoverArrow;
	var init_popover_arrow = __esmMin((() => {
		init_index_module$15();
		init_styled_components_browser_esm();
		PopoverArrow = qe(Arrow$3)`
  fill: #fff;
  margin: 0 10px;
`;
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/icon.js
	var Icon$2;
	var init_icon = __esmMin((() => {
		init_styled_components_browser_esm();
		Icon$2 = qe.i`
	margin: 0 !important;
	padding: 0 !important;
`;
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/icon-button/icon-button.js
	var import_prop_types$44, __defProp$17, __defProps$8, __getOwnPropDescs$8, __getOwnPropSymbols$17, __hasOwnProp$17, __propIsEnum$17, __defNormalProp$17, __spreadValues$17, __spreadProps$8, __objRest$5, fontSizeMapping, StyledIconButton$1, IconButton;
	var init_icon_button = __esmMin((() => {
		import_prop_types$44 = /* @__PURE__ */ __toESM(require_prop_types());
		init_styled_components_browser_esm();
		init_button_base();
		init_icon();
		__defProp$17 = Object.defineProperty;
		__defProps$8 = Object.defineProperties;
		__getOwnPropDescs$8 = Object.getOwnPropertyDescriptors;
		__getOwnPropSymbols$17 = Object.getOwnPropertySymbols;
		__hasOwnProp$17 = Object.prototype.hasOwnProperty;
		__propIsEnum$17 = Object.prototype.propertyIsEnumerable;
		__defNormalProp$17 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$17(obj, key, {
			enumerable: true,
			configurable: true,
			writable: true,
			value
		}) : obj[key] = value, "__defNormalProp");
		__spreadValues$17 = /* @__PURE__ */ __name((a, b) => {
			for (var prop in b || (b = {})) if (__hasOwnProp$17.call(b, prop)) __defNormalProp$17(a, prop, b[prop]);
			if (__getOwnPropSymbols$17) {
				for (var prop of __getOwnPropSymbols$17(b)) if (__propIsEnum$17.call(b, prop)) __defNormalProp$17(a, prop, b[prop]);
			}
			return a;
		}, "__spreadValues");
		__spreadProps$8 = /* @__PURE__ */ __name((a, b) => __defProps$8(a, __getOwnPropDescs$8(b)), "__spreadProps");
		__objRest$5 = /* @__PURE__ */ __name((source, exclude) => {
			var target = {};
			for (var prop in source) if (__hasOwnProp$17.call(source, prop) && exclude.indexOf(prop) < 0) target[prop] = source[prop];
			if (source != null && __getOwnPropSymbols$17) {
				for (var prop of __getOwnPropSymbols$17(source)) if (exclude.indexOf(prop) < 0 && __propIsEnum$17.call(source, prop)) target[prop] = source[prop];
			}
			return target;
		}, "__objRest");
		fontSizeMapping = {
			sm: "15px",
			md: "18px"
		};
		StyledIconButton$1 = qe(ButtonBase)`
  --color: #a4afb7;
  --background: transparent;
  --padding: 4px;
  --font-size: ${({ size }) => fontSizeMapping[size]};
  --border: none;
  --border-radius: 100%;
  --display: grid;

  transition: 0.2s all;
  place-items: center;
  border-radius: 100%;
  cursor: pointer;

  &:hover, &:focus {
	--background: transparent;
	--color: #6d7882;
	outline: none;
  }

  &:focus {
	--background: #f1f3f5;
  }

  ${({ disabled }) => disabled && Ae`
	opacity: .5;
	pointer-events: none;
	cursor: not-allowed;
  `}
`;
		IconButton = react.default.forwardRef((_a, ref) => {
			var _b = _a, { name } = _b, props = __objRest$5(_b, ["name"]);
			return /* @__PURE__ */ react.default.createElement(StyledIconButton$1, __spreadProps$8(__spreadValues$17({}, props), { ref }), /* @__PURE__ */ react.default.createElement(Icon$2, { className: name }));
		});
		IconButton.displayName = "IconButton";
		IconButton.propTypes = {
			size: import_prop_types$44.default.oneOf(["sm", "md"]),
			name: import_prop_types$44.default.string.isRequired,
			onClick: import_prop_types$44.default.func,
			disabled: import_prop_types$44.default.bool
		};
		IconButton.defaultProps = { size: "md" };
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/popover/popover-close-button.js
	function PopoverCloseButton(props) {
		return /* @__PURE__ */ react.default.createElement(Close$1, { asChild: true }, /* @__PURE__ */ react.default.createElement(StyledCloseButton, __spreadProps$7(__spreadValues$16({}, props), {
			name: "eicon-editor-close",
			size: "sm"
		})));
	}
	var __defProp$16, __defProps$7, __getOwnPropDescs$7, __getOwnPropSymbols$16, __hasOwnProp$16, __propIsEnum$16, __defNormalProp$16, __spreadValues$16, __spreadProps$7, StyledCloseButton;
	var init_popover_close_button = __esmMin((() => {
		init_index_module$15();
		init_styled_components_browser_esm();
		init_icon_button();
		__defProp$16 = Object.defineProperty;
		__defProps$7 = Object.defineProperties;
		__getOwnPropDescs$7 = Object.getOwnPropertyDescriptors;
		__getOwnPropSymbols$16 = Object.getOwnPropertySymbols;
		__hasOwnProp$16 = Object.prototype.hasOwnProperty;
		__propIsEnum$16 = Object.prototype.propertyIsEnumerable;
		__defNormalProp$16 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$16(obj, key, {
			enumerable: true,
			configurable: true,
			writable: true,
			value
		}) : obj[key] = value, "__defNormalProp");
		__spreadValues$16 = /* @__PURE__ */ __name((a, b) => {
			for (var prop in b || (b = {})) if (__hasOwnProp$16.call(b, prop)) __defNormalProp$16(a, prop, b[prop]);
			if (__getOwnPropSymbols$16) {
				for (var prop of __getOwnPropSymbols$16(b)) if (__propIsEnum$16.call(b, prop)) __defNormalProp$16(a, prop, b[prop]);
			}
			return a;
		}, "__spreadValues");
		__spreadProps$7 = /* @__PURE__ */ __name((a, b) => __defProps$7(a, __getOwnPropDescs$7(b)), "__spreadProps");
		StyledCloseButton = qe(IconButton)`
  --position-spacing: 4px;

  position: absolute;
  top: var(--position-spacing);
  inset-inline-end: var(--position-spacing);
`;
		PopoverCloseButton.propTypes = __spreadValues$16({}, Close$1.propTypes);
	}));
	//#endregion
	//#region modules/notes/assets/js/app/styles/animation.js
	var slideUpAndFade, slideRightAndFade, slideDownAndFade, slideLeftAndFade, fadeOut, spin;
	var init_animation = __esmMin((() => {
		init_styled_components_browser_esm();
		slideUpAndFade = We`
  0% {
	opacity: 0;
	transform: translateY(3px);
  }
  100% {
	opacity: 1;
	transform: translateY(0);
  }
`;
		slideRightAndFade = We`
  0% {
	opacity: 0;
	transform: translateX(-3px);
  }
  100% {
	opacity: 1;
	transform: translateX(0);
  }
`;
		slideDownAndFade = We`
  0% {
	opacity: 0;
	transform: translateY(-3px);
  }
  100% {
	opacity: 1;
	transform: translateY(0);
  }
`;
		slideLeftAndFade = We`
  0% {
	opacity: 0;
	transform: translateX(3px);
  }
  100% {
	opacity: 1;
	transform: translateX(0);
  }
`;
		fadeOut = We`
  0% {
	opacity: 1;
  }

  100% {
	opacity: 0;
  }
`;
		spin = We`
  0% {
	transform: rotate(0deg);
  }
  100% {
	transform: rotate(360deg);
  }
`;
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/popover/popover-content.js
	var PopoverContent$1;
	var init_popover_content = __esmMin((() => {
		init_styled_components_browser_esm();
		init_index_module$15();
		init_animation();
		PopoverContent$1 = qe(Content$6)`
  all: revert;

  font-family: Roboto, sans-serif !important;
  font-size: 1em !important;
  font-weight: normal !important;
  text-transform: none !important;
  font-style: normal !important;
  text-decoration: none !important;
  line-height: normal !important;
  letter-spacing: normal !important;
  word-spacing: normal !important;
  background: #fff !important;
  border-radius: 3px !important;
  min-width: 120px !important;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.15) !important;
  animation-duration: 400ms !important;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1) !important;

  &[data-state="open"] {
	&[data-side="top"] {
	  animation-name: ${slideUpAndFade};
	}

	&[data-side="right"] {
	  animation-name: ${slideRightAndFade};
	}

	&[data-side="bottom"] {
	  animation-name: ${slideDownAndFade};
	}

	&[data-side="left"] {
	  animation-name: ${slideLeftAndFade};
	}

    *:focus {
      outline: none;
    }
  }
`;
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/popover/popover.js
	var Popover;
	var init_popover = __esmMin((() => {
		init_popover_arrow();
		init_popover_close_button();
		init_popover_content();
		init_index_module$15();
		Popover = Root$9;
		Popover.Trigger = Trigger$4;
		Popover.Content = PopoverContent$1;
		Popover.Arrow = PopoverArrow;
		Popover.CloseButton = PopoverCloseButton;
		Popover.propTypes = Root$9.propTypes;
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/avatar.js
	var import_prop_types$43, sizesMap$1, Avatar;
	var init_avatar = __esmMin((() => {
		import_prop_types$43 = /* @__PURE__ */ __toESM(require_prop_types());
		init_styled_components_browser_esm();
		sizesMap$1 = {
			sm: { width: 16 },
			md: { width: 32 },
			lg: { width: 64 }
		};
		Avatar = qe.img`
	all: revert;

	aspect-ratio: 1 / 1;
	border-radius: 100%;
	height: auto;
	width: ${({ size }) => sizesMap$1[size].width}px;
`;
		Avatar.propTypes = {
			size: import_prop_types$43.default.oneOf([
				"sm",
				"md",
				"lg"
			]).isRequired,
			src: import_prop_types$43.default.string.isRequired
		};
		Avatar.defaultProps = { size: "md" };
	}));
	//#endregion
	//#region node_modules/@radix-ui/react-use-direction/dist/index.module.js
	function useDirection(t, n) {
		const [r, o] = react.useState("ltr"), [i, u] = react.useState(), c = react.useRef(0);
		return react.useEffect((() => {
			if (void 0 === n && null != t && t.parentElement) {
				const e = getComputedStyle(t.parentElement);
				u(e);
			}
		}), [t, n]), react.useEffect((() => (void 0 === n && function e() {
			c.current = requestAnimationFrame((() => {
				const t = null == i ? void 0 : i.direction;
				t && o(t), e();
			}));
		}(), () => cancelAnimationFrame(c.current))), [
			i,
			n,
			o
		]), n || r;
	}
	var init_index_module$14 = __esmMin((() => {}));
	//#endregion
	//#region node_modules/@radix-ui/react-collection/dist/index.module.js
	function createCollection(c) {
		const n = c + "CollectionProvider", [l, i] = createContextScope(n), [f, a] = l(n, {
			collectionRef: { current: null },
			itemMap: /* @__PURE__ */ new Map()
		}), u = (e) => {
			const { scope: r, children: t } = e, c = react.default.useRef(null), n = react.default.useRef(/* @__PURE__ */ new Map()).current;
			/*#__PURE__*/ return react.default.createElement(f, {
				scope: r,
				itemMap: n,
				collectionRef: c
			}, t);
		}, m = c + "CollectionSlot", s = /*#__PURE__*/ react.default.forwardRef(((t, c) => {
			const { scope: n, children: l } = t, f = useComposedRefs(c, a(m, n).collectionRef);
			/*#__PURE__*/ return react.default.createElement(Slot, { ref: f }, l);
		})), p = c + "CollectionItemSlot", d = "data-radix-collection-item";
		return [
			{
				Provider: u,
				Slot: s,
				ItemSlot: /* @__PURE__ */ react.default.forwardRef(((t, c) => {
					const { scope: n, children: l } = t, i = _objectWithoutProperties(t, _excluded$14), f = react.default.useRef(null), u = useComposedRefs(c, f), m = a(p, n);
					return react.default.useEffect((() => (m.itemMap.set(f, _objectSpread2({ ref: f }, i)), () => {
						m.itemMap.delete(f);
					}))), /*#__PURE__*/ react.default.createElement(Slot, {
						[d]: "",
						ref: u
					}, l);
				}))
			},
			function(e) {
				const r = a(c + "CollectionConsumer", e);
				return react.default.useCallback((() => {
					const e = r.collectionRef.current;
					if (!e) return [];
					const t = Array.from(e.querySelectorAll(`[${d}]`));
					return Array.from(r.itemMap.values()).sort(((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current)));
				}), [r.collectionRef, r.itemMap]);
			},
			i
		];
	}
	var _excluded$14;
	var init_index_module$13 = __esmMin((() => {
		init_index_module$34();
		init_index_module$35();
		init_index_module$19();
		init_objectWithoutProperties();
		init_objectSpread2();
		_excluded$14 = ["scope", "children"];
	}));
	//#endregion
	//#region node_modules/@radix-ui/react-roving-focus/dist/index.module.js
	function R$3(e) {
		const o = document.activeElement;
		for (const r of e) {
			if (r === o) return;
			if (r.focus(), document.activeElement !== o) return;
		}
	}
	var _excluded$13, _excluded2$8, f$5, p$2, l$1, m$4, d, v$4, g$5, F$2, RovingFocusGroup, w$4, RovingFocusGroupItem, b$6, Root$8, Item$3;
	var init_index_module$12 = __esmMin((() => {
		init_index_module$16();
		init_index_module$29();
		init_index_module$33();
		init_index_module$36();
		init_index_module$19();
		init_index_module$35();
		init_index_module$13();
		init_index_module$25();
		init_extends();
		init_objectWithoutProperties();
		init_objectSpread2();
		_excluded$13 = [
			"__scopeRovingFocusGroup",
			"orientation",
			"dir",
			"loop",
			"currentTabStopId",
			"defaultCurrentTabStopId",
			"onCurrentTabStopIdChange",
			"onEntryFocus"
		];
		_excluded2$8 = [
			"__scopeRovingFocusGroup",
			"focusable",
			"active"
		];
		f$5 = {
			bubbles: !1,
			cancelable: !0
		}, [p$2, l$1, m$4] = createCollection("RovingFocusGroup"), [d, v$4] = createContextScope("RovingFocusGroup", [m$4]);
		[g$5, F$2] = d("RovingFocusGroup");
		RovingFocusGroup = /*#__PURE__*/ react.forwardRef(((e, o) => /*#__PURE__*/ react.createElement(p$2.Provider, { scope: e.__scopeRovingFocusGroup }, /*#__PURE__*/ react.createElement(p$2.Slot, { scope: e.__scopeRovingFocusGroup }, /*#__PURE__*/ react.createElement(w$4, _extends({}, e, { ref: o }))))));
		w$4 = /*#__PURE__*/ react.forwardRef(((t, n) => {
			const { __scopeRovingFocusGroup: c, orientation: p, dir: m = "ltr", loop: d = !1, currentTabStopId: v, defaultCurrentTabStopId: F, onCurrentTabStopIdChange: w, onEntryFocus: b } = t, x = _objectWithoutProperties(t, _excluded$13), E = react.useRef(null), I = useComposedRefs(n, E), [G = null, h] = useControllableState({
				prop: v,
				defaultProp: F,
				onChange: w
			}), [T, A] = react.useState(!1), y = useCallbackRef(b), D = l$1(c), S = react.useRef(!1);
			return react.useEffect((() => {
				const e = E.current;
				if (e) return e.addEventListener("rovingFocusGroup.onEntryFocus", y), () => e.removeEventListener("rovingFocusGroup.onEntryFocus", y);
			}), [y]), /*#__PURE__*/ react.createElement(g$5, {
				scope: c,
				orientation: p,
				dir: m,
				loop: d,
				currentTabStopId: G,
				onItemFocus: react.useCallback(((e) => h(e)), [h]),
				onItemShiftTab: react.useCallback((() => A(!0)), [])
			}, /*#__PURE__*/ react.createElement(Primitive.div, _extends({
				tabIndex: T ? -1 : 0,
				"data-orientation": p
			}, x, {
				ref: I,
				style: _objectSpread2({ outline: "none" }, t.style),
				onMouseDown: composeEventHandlers(t.onMouseDown, (() => {
					S.current = !0;
				})),
				onFocus: composeEventHandlers(t.onFocus, ((e) => {
					const o = !S.current;
					if (e.target === e.currentTarget && o && !T) {
						const o = new Event("rovingFocusGroup.onEntryFocus", f$5);
						if (e.currentTarget.dispatchEvent(o), !o.defaultPrevented) {
							const e = D().filter(((e) => e.focusable));
							R$3([
								e.find(((e) => e.active)),
								e.find(((e) => e.id === G)),
								...e
							].filter(Boolean).map(((e) => e.ref.current)));
						}
					}
					S.current = !1;
				})),
				onBlur: composeEventHandlers(t.onBlur, (() => A(!1)))
			})));
		}));
		RovingFocusGroupItem = /*#__PURE__*/ react.forwardRef(((e, o) => {
			const { __scopeRovingFocusGroup: n, focusable: i = !0, active: c = !1 } = e, f = _objectWithoutProperties(e, _excluded2$8), m = useId(), d = F$2("RovingFocusGroupItem", n), v = d.currentTabStopId === m, g = l$1(n);
			/*#__PURE__*/ return react.createElement(p$2.ItemSlot, {
				scope: n,
				id: m,
				focusable: i,
				active: c
			}, /*#__PURE__*/ react.createElement(Primitive.span, _extends({
				tabIndex: v ? 0 : -1,
				"data-orientation": d.orientation
			}, f, {
				ref: o,
				onMouseDown: composeEventHandlers(e.onMouseDown, ((e) => {
					i ? d.onItemFocus(m) : e.preventDefault();
				})),
				onFocus: composeEventHandlers(e.onFocus, (() => d.onItemFocus(m))),
				onKeyDown: composeEventHandlers(e.onKeyDown, ((e) => {
					if ("Tab" === e.key && e.shiftKey) return void d.onItemShiftTab();
					if (e.target !== e.currentTarget) return;
					const o = function(e, o, r) {
						const t = function(e, o) {
							return "rtl" !== o ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e;
						}(e.key, r);
						return "vertical" === o && ["ArrowLeft", "ArrowRight"].includes(t) || "horizontal" === o && ["ArrowUp", "ArrowDown"].includes(t) ? void 0 : b$6[t];
					}(e, d.orientation, d.dir);
					if (void 0 !== o) {
						e.preventDefault();
						let n = g().filter(((e) => e.focusable)).map(((e) => e.ref.current));
						if ("last" === o) n.reverse();
						else if ("prev" === o || "next" === o) {
							"prev" === o && n.reverse();
							const i = n.indexOf(e.currentTarget);
							n = d.loop ? (t = i + 1, (r = n).map(((e, o) => r[(t + o) % r.length]))) : n.slice(i + 1);
						}
						setTimeout((() => R$3(n)));
					}
					var r;
					var t;
				}))
			})));
		}));
		b$6 = {
			ArrowLeft: "prev",
			ArrowUp: "prev",
			ArrowRight: "next",
			ArrowDown: "next",
			PageUp: "first",
			Home: "first",
			PageDown: "last",
			End: "last"
		};
		__name(R$3, "R");
		Root$8 = RovingFocusGroup;
		Item$3 = RovingFocusGroupItem;
	}));
	//#endregion
	//#region node_modules/@radix-ui/react-menu/dist/index.module.js
	/*#__PURE__*/ function j(e) {
		return e ? "open" : "closed";
	}
	function J(e) {
		return (n) => "mouse" === n.pointerType ? e(n) : void 0;
	}
	var _excluded$12, _excluded2$7, _excluded3$7, _excluded6$5, _excluded7$3, _excluded12$1, _excluded13$1, x$5, b$5, R$2, y$3, I$1, k$2, P, D$2, S, O$1, T$1, L, A, Menu, MenuSub, MenuAnchor, F$1, K, MenuContent, G$1, U, V, X, B, MenuItem, Y, Z, z, H, W, MenuSeparator, MenuArrow, Root$7, Sub, Anchor, Content$5, Item$2, Separator$3, Arrow$2;
	var init_index_module$11 = __esmMin((() => {
		init_index_module$36();
		init_index_module$31();
		init_index_module$29();
		init_index_module$14();
		init_index_module$12();
		init_index_module$30();
		init_index_module$17();
		init_index_module$33();
		init_index_module$32();
		init_index_module$28();
		init_index_module$24();
		init_index_module$19();
		init_index_module$35();
		init_index_module$13();
		init_index_module$25();
		init_es2015$6();
		init_es2015();
		init_extends();
		init_objectWithoutProperties();
		init_objectSpread2();
		_excluded$12 = ["__scopeMenu"];
		_excluded2$7 = ["forceMount"];
		_excluded3$7 = [
			"__scopeMenu",
			"loop",
			"trapFocus",
			"onOpenAutoFocus",
			"onCloseAutoFocus",
			"disableOutsidePointerEvents",
			"onEscapeKeyDown",
			"onPointerDownOutside",
			"onFocusOutside",
			"onInteractOutside",
			"onDismiss",
			"disableOutsideScroll",
			"allowPinchZoom",
			"portalled"
		];
		_excluded6$5 = ["disabled", "onSelect"];
		_excluded7$3 = [
			"__scopeMenu",
			"disabled",
			"textValue"
		];
		_excluded12$1 = ["__scopeMenu"];
		_excluded13$1 = ["__scopeMenu"];
		x$5 = ["Enter", " "], b$5 = [
			"ArrowUp",
			"PageDown",
			"End"
		], R$2 = [
			"ArrowDown",
			"PageUp",
			"Home",
			...b$5
		], [...x$5], [...x$5], y$3 = {
			ltr: ["ArrowLeft"],
			rtl: ["ArrowRight"]
		}, [I$1, k$2, P] = createCollection("Menu"), [D$2, S] = createContextScope("Menu", [
			P,
			l$2,
			v$4
		]);
		O$1 = l$2(), T$1 = v$4(), [L, A] = D$2("Menu");
		Menu = (e) => {
			const { __scopeMenu: n, open: o = !1, children: u, onOpenChange: c, modal: i = !0 } = e, s = O$1(n), [l, d] = react.useState(null), p = react.useRef(!1), f = useCallbackRef(c), m = useDirection(l, e.dir);
			return react.useEffect((() => {
				const e = () => {
					p.current = !0, document.addEventListener("pointerdown", n, {
						capture: !0,
						once: !0
					}), document.addEventListener("pointermove", n, {
						capture: !0,
						once: !0
					});
				};
				const n = () => p.current = !1;
				return document.addEventListener("keydown", e, { capture: !0 }), () => {
					document.removeEventListener("keydown", e, { capture: !0 }), document.removeEventListener("pointerdown", n, { capture: !0 }), document.removeEventListener("pointermove", n, { capture: !0 });
				};
			}), []), /*#__PURE__*/ react.createElement(Root$10, s, /*#__PURE__*/ react.createElement(L, {
				scope: n,
				isSubmenu: !1,
				isUsingKeyboardRef: p,
				dir: m,
				open: o,
				onOpenChange: f,
				content: l,
				onContentChange: d,
				onRootClose: react.useCallback((() => f(!1)), [f]),
				modal: i
			}, u));
		};
		MenuSub = (n) => {
			const { __scopeMenu: r, children: o, open: u = !1, onOpenChange: c } = n, i = A("MenuSub", r), s = O$1(r), [l, d] = react.useState(null), [p, f] = react.useState(null), m = useCallbackRef(c);
			return react.useEffect((() => (!1 === i.open && m(!1), () => m(!1))), [i.open, m]), /*#__PURE__*/ react.createElement(Root$10, s, /*#__PURE__*/ react.createElement(L, {
				scope: r,
				isSubmenu: !0,
				isUsingKeyboardRef: i.isUsingKeyboardRef,
				dir: i.dir,
				open: u,
				onOpenChange: m,
				content: p,
				onContentChange: f,
				onRootClose: i.onRootClose,
				contentId: useId(),
				trigger: l,
				onTriggerChange: d,
				triggerId: useId(),
				modal: !1
			}, o));
		};
		MenuAnchor = /*#__PURE__*/ react.forwardRef(((e, n) => {
			const { __scopeMenu: t } = e, r = _objectWithoutProperties(e, _excluded$12), o = O$1(t);
			/*#__PURE__*/ return react.createElement(Anchor$1, _extends({}, o, r, { ref: n }));
		}));
		[F$1, K] = D$2("MenuContent");
		MenuContent = /*#__PURE__*/ react.forwardRef(((e, n) => {
			const { forceMount: t } = e, r = _objectWithoutProperties(e, _excluded2$7), o = A("MenuContent", e.__scopeMenu);
			/*#__PURE__*/ return react.createElement(I$1.Provider, { scope: e.__scopeMenu }, /*#__PURE__*/ react.createElement(Presence, { present: t || o.open }, /*#__PURE__*/ react.createElement(I$1.Slot, { scope: e.__scopeMenu }, o.isSubmenu ? /*#__PURE__*/ react.createElement(X, _extends({}, r, { ref: n })) : /*#__PURE__*/ react.createElement(G$1, _extends({}, r, { ref: n })))));
		}));
		G$1 = /*#__PURE__*/ react.forwardRef(((e, n) => A("MenuContent", e.__scopeMenu).modal ? /*#__PURE__*/ react.createElement(U, _extends({}, e, { ref: n })) : /*#__PURE__*/ react.createElement(V, _extends({}, e, { ref: n }))));
		U = /*#__PURE__*/ react.forwardRef(((e, n) => {
			const t = A("MenuContent", e.__scopeMenu);
			const r = react.useRef(null);
			const o = useComposedRefs(n, r);
			return react.useEffect((() => {
				const e = r.current;
				if (e) return hideOthers(e);
			}), []), /*#__PURE__*/ react.createElement(B, _extends({}, e, {
				ref: o,
				trapFocus: t.open,
				disableOutsidePointerEvents: t.open,
				disableOutsideScroll: !0,
				onFocusOutside: composeEventHandlers(e.onFocusOutside, ((e) => e.preventDefault()), { checkForDefaultPrevented: !1 }),
				onDismiss: () => t.onOpenChange(!1)
			}));
		}));
		V = /*#__PURE__*/ react.forwardRef(((e, n) => {
			const t = A("MenuContent", e.__scopeMenu);
			/*#__PURE__*/ return react.createElement(B, _extends({}, e, {
				ref: n,
				trapFocus: !1,
				disableOutsidePointerEvents: !1,
				disableOutsideScroll: !1,
				onDismiss: () => t.onOpenChange(!1)
			}));
		}));
		X = /*#__PURE__*/ react.forwardRef(((e, n) => {
			const t = A("MenuContent", e.__scopeMenu);
			const r = react.useRef(null);
			const o = useComposedRefs(n, r);
			return t.isSubmenu ? /*#__PURE__*/ react.createElement(B, _extends({
				id: t.contentId,
				"aria-labelledby": t.triggerId
			}, e, {
				ref: o,
				align: "start",
				side: "rtl" === t.dir ? "left" : "right",
				portalled: !0,
				disableOutsidePointerEvents: !1,
				disableOutsideScroll: !1,
				trapFocus: !1,
				onOpenAutoFocus: (e) => {
					var n;
					t.isUsingKeyboardRef.current && (null === (n = r.current) || void 0 === n || n.focus()), e.preventDefault();
				},
				onCloseAutoFocus: (e) => e.preventDefault(),
				onFocusOutside: composeEventHandlers(e.onFocusOutside, ((e) => {
					e.target !== t.trigger && t.onOpenChange(!1);
				})),
				onEscapeKeyDown: composeEventHandlers(e.onEscapeKeyDown, t.onRootClose),
				onKeyDown: composeEventHandlers(e.onKeyDown, ((e) => {
					const n = e.currentTarget.contains(e.target);
					const r = y$3[t.dir].includes(e.key);
					var o;
					n && r && (t.onOpenChange(!1), null === (o = t.trigger) || void 0 === o || o.focus(), e.preventDefault());
				}))
			})) : null;
		}));
		B = /*#__PURE__*/ react.forwardRef(((e, t) => {
			const { __scopeMenu: r, loop: u = !1, trapFocus: i, onOpenAutoFocus: s, onCloseAutoFocus: l, disableOutsidePointerEvents: f, onEscapeKeyDown: v, onPointerDownOutside: g, onFocusOutside: h, onInteractOutside: x, onDismiss: _, disableOutsideScroll: y, allowPinchZoom: I, portalled: P } = e, D = _objectWithoutProperties(e, _excluded3$7), S = A("MenuContent", r), L = O$1(r), K = T$1(r), G = k$2(r), [U, V] = react.useState(null), X = react.useRef(null), B = useComposedRefs(t, X, S.onContentChange), Y = react.useRef(0), Z = react.useRef(""), z = react.useRef(0), H = react.useRef(null), W = react.useRef("right"), q = react.useRef(0), N = P ? Portal$2 : react.Fragment, Q = y ? ReactRemoveScroll : react.Fragment, $ = y ? { allowPinchZoom: I } : void 0, ee = (e) => {
				var n;
				var t;
				const r = Z.current + e;
				const o = G().filter(((e) => !e.disabled));
				const u = document.activeElement;
				const c = null === (n = o.find(((e) => e.ref.current === u))) || void 0 === n ? void 0 : n.textValue;
				const a = function(e, n, t) {
					const r = n.length > 1 && Array.from(n).every(((e) => e === n[0])) ? n[0] : n;
					const o = t ? e.indexOf(t) : -1;
					let u = (c = e, a = Math.max(o, 0), c.map(((e, n) => c[(a + n) % c.length])));
					var c;
					var a;
					1 === r.length && (u = u.filter(((e) => e !== t)));
					const i = u.find(((e) => e.toLowerCase().startsWith(r.toLowerCase())));
					return i !== t ? i : void 0;
				}(o.map(((e) => e.textValue)), r, c);
				const i = null === (t = o.find(((e) => e.textValue === a))) || void 0 === t ? void 0 : t.ref.current;
				(function e(n) {
					Z.current = n, window.clearTimeout(Y.current), "" !== n && (Y.current = window.setTimeout((() => e("")), 1e3));
				})(r), i && setTimeout((() => i.focus()));
			};
			react.useEffect((() => () => window.clearTimeout(Y.current)), []), useFocusGuards();
			const ne = react.useCallback(((e) => {
				var n;
				var t;
				return W.current === (null === (n = H.current) || void 0 === n ? void 0 : n.side) && function(e, n) {
					if (!n) return !1;
					return function(e, n) {
						const { x: t, y: r } = e;
						let o = !1;
						for (let e = 0, u = n.length - 1; e < n.length; u = e++) {
							const c = n[e].x;
							const a = n[e].y;
							const i = n[u].x;
							const s = n[u].y;
							a > r != s > r && t < (i - c) * (r - a) / (s - a) + c && (o = !o);
						}
						return o;
					}({
						x: e.clientX,
						y: e.clientY
					}, n);
				}(e, null === (t = H.current) || void 0 === t ? void 0 : t.area);
			}), []);
			/*#__PURE__*/ return react.createElement(N, null, /*#__PURE__*/ react.createElement(Q, $, /*#__PURE__*/ react.createElement(F$1, {
				scope: r,
				searchRef: Z,
				onItemEnter: react.useCallback(((e) => {
					ne(e) && e.preventDefault();
				}), [ne]),
				onItemLeave: react.useCallback(((e) => {
					var n;
					ne(e) || (null === (n = X.current) || void 0 === n || n.focus(), V(null));
				}), [ne]),
				onTriggerLeave: react.useCallback(((e) => {
					ne(e) && e.preventDefault();
				}), [ne]),
				pointerGraceTimerRef: z,
				onPointerGraceIntentChange: react.useCallback(((e) => {
					H.current = e;
				}), [])
			}, /*#__PURE__*/ react.createElement(FocusScope, {
				asChild: !0,
				trapped: i,
				onMountAutoFocus: composeEventHandlers(s, ((e) => {
					var n;
					e.preventDefault(), null === (n = X.current) || void 0 === n || n.focus();
				})),
				onUnmountAutoFocus: l
			}, /*#__PURE__*/ react.createElement(DismissableLayer, {
				asChild: !0,
				disableOutsidePointerEvents: f,
				onEscapeKeyDown: v,
				onPointerDownOutside: g,
				onFocusOutside: h,
				onInteractOutside: x,
				onDismiss: _
			}, /*#__PURE__*/ react.createElement(Root$8, _extends({ asChild: !0 }, K, {
				dir: S.dir,
				orientation: "vertical",
				loop: u,
				currentTabStopId: U,
				onCurrentTabStopIdChange: V,
				onEntryFocus: (e) => {
					S.isUsingKeyboardRef.current || e.preventDefault();
				}
			}), /*#__PURE__*/ react.createElement(Content$7, _extends({
				role: "menu",
				"aria-orientation": "vertical",
				"data-state": j(S.open),
				dir: S.dir
			}, L, D, {
				ref: B,
				style: _objectSpread2({ outline: "none" }, D.style),
				onKeyDown: composeEventHandlers(D.onKeyDown, ((e) => {
					const n = e.target;
					const t = e.currentTarget.contains(n);
					const r = e.ctrlKey || e.altKey || e.metaKey;
					const o = 1 === e.key.length;
					t && ("Tab" === e.key && e.preventDefault(), !r && o && ee(e.key));
					const u = X.current;
					if (e.target !== u) return;
					if (!R$2.includes(e.key)) return;
					e.preventDefault();
					const c = G().filter(((e) => !e.disabled)).map(((e) => e.ref.current));
					b$5.includes(e.key) && c.reverse(), function(e) {
						const n = document.activeElement;
						for (const t of e) {
							if (t === n) return;
							if (t.focus(), document.activeElement !== n) return;
						}
					}(c);
				})),
				onBlur: composeEventHandlers(e.onBlur, ((e) => {
					e.currentTarget.contains(e.target) || (window.clearTimeout(Y.current), Z.current = "");
				})),
				onPointerMove: composeEventHandlers(e.onPointerMove, J(((e) => {
					const n = e.target;
					const t = q.current !== e.clientX;
					if (e.currentTarget.contains(n) && t) {
						const n = e.clientX > q.current ? "right" : "left";
						W.current = n, q.current = e.clientX;
					}
				})))
			}))))))));
		}));
		MenuItem = /*#__PURE__*/ react.forwardRef(((e, n) => {
			const { disabled: t = !1, onSelect: r } = e, o = _objectWithoutProperties(e, _excluded6$5), u = react.useRef(null), c = A("MenuItem", e.__scopeMenu), a = K("MenuItem", e.__scopeMenu), i = useComposedRefs(n, u), s = react.useRef(!1);
			/*#__PURE__*/ return react.createElement(Y, _extends({}, o, {
				ref: i,
				disabled: t,
				onClick: composeEventHandlers(e.onClick, (() => {
					const e = u.current;
					if (!t && e) {
						const n = new Event("menu.itemSelect", {
							bubbles: !0,
							cancelable: !0
						});
						e.addEventListener("menu.itemSelect", ((e) => null == r ? void 0 : r(e)), { once: !0 }), e.dispatchEvent(n), n.defaultPrevented ? s.current = !1 : c.onRootClose();
					}
				})),
				onPointerDown: (n) => {
					var t;
					null === (t = e.onPointerDown) || void 0 === t || t.call(e, n), s.current = !0;
				},
				onPointerUp: composeEventHandlers(e.onPointerUp, ((e) => {
					var n;
					s.current || null === (n = e.currentTarget) || void 0 === n || n.click();
				})),
				onKeyDown: composeEventHandlers(e.onKeyDown, ((e) => {
					const n = "" !== a.searchRef.current;
					t || n && " " === e.key || x$5.includes(e.key) && (e.currentTarget.click(), e.preventDefault());
				}))
			}));
		}));
		Y = /*#__PURE__*/ react.forwardRef(((e, n) => {
			const { __scopeMenu: t, disabled: r = !1, textValue: u } = e, c = _objectWithoutProperties(e, _excluded7$3), a = K("MenuItem", t), i = T$1(t), l = react.useRef(null), d = useComposedRefs(n, l), [p, f] = react.useState("");
			return react.useEffect((() => {
				const e = l.current;
				var n;
				e && f((null !== (n = e.textContent) && void 0 !== n ? n : "").trim());
			}), [c.children]), /*#__PURE__*/ react.createElement(I$1.ItemSlot, {
				scope: t,
				disabled: r,
				textValue: null != u ? u : p
			}, /*#__PURE__*/ react.createElement(Item$3, _extends({ asChild: !0 }, i, { focusable: !r }), /*#__PURE__*/ react.createElement(Primitive.div, _extends({
				role: "menuitem",
				"aria-disabled": r || void 0,
				"data-disabled": r ? "" : void 0
			}, c, {
				ref: d,
				onPointerMove: composeEventHandlers(e.onPointerMove, J(((e) => {
					if (r) a.onItemLeave(e);
					else if (a.onItemEnter(e), !e.defaultPrevented) e.currentTarget.focus();
				}))),
				onPointerLeave: composeEventHandlers(e.onPointerLeave, J(((e) => a.onItemLeave(e))))
			}))));
		}));
		[Z, z] = D$2("MenuRadioGroup", {
			value: void 0,
			onValueChange: () => {}
		});
		[H, W] = D$2("MenuItemIndicator", { checked: !1 });
		MenuSeparator = /*#__PURE__*/ react.forwardRef(((e, n) => {
			const { __scopeMenu: t } = e, r = _objectWithoutProperties(e, _excluded12$1);
			/*#__PURE__*/ return react.createElement(Primitive.div, _extends({
				role: "separator",
				"aria-orientation": "horizontal"
			}, r, { ref: n }));
		}));
		MenuArrow = /*#__PURE__*/ react.forwardRef(((e, n) => {
			const { __scopeMenu: t } = e, r = _objectWithoutProperties(e, _excluded13$1), o = O$1(t);
			/*#__PURE__*/ return react.createElement(Arrow$4, _extends({}, o, r, { ref: n }));
		}));
		Root$7 = Menu;
		Sub = MenuSub;
		Anchor = MenuAnchor;
		Content$5 = MenuContent;
		Item$2 = MenuItem;
		Separator$3 = MenuSeparator;
		Arrow$2 = MenuArrow;
	}));
	//#endregion
	//#region node_modules/@radix-ui/react-dropdown-menu/dist/index.module.js
	var _excluded$11, _excluded2$6, _excluded3$6, _excluded6$4, _excluded12, _excluded13, s$1, i$2, l, m$3, w$3, DropdownMenu, f$4, DropdownMenuTrigger, D$1, M, DropdownMenuContent, g$4, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuArrow, Root$6, Trigger$3, Content$4, Item$1, Separator$2, Arrow$1;
	var init_index_module$10 = __esmMin((() => {
		init_index_module$36();
		init_index_module$11();
		init_index_module$33();
		init_index_module$16();
		init_index_module$19();
		init_index_module$35();
		init_index_module$25();
		init_extends();
		init_objectWithoutProperties();
		init_objectSpread2();
		_excluded$11 = ["__scopeDropdownMenu", "disabled"];
		_excluded2$6 = ["__scopeDropdownMenu"];
		_excluded3$6 = ["__scopeDropdownMenu", "portalled"];
		_excluded6$4 = ["__scopeDropdownMenu"];
		_excluded12 = ["__scopeDropdownMenu"];
		_excluded13 = ["__scopeDropdownMenu"];
		[s$1, i$2] = createContextScope("DropdownMenu", [S]);
		l = S(), [m$3, w$3] = s$1("DropdownMenu");
		DropdownMenu = (e) => {
			const { __scopeDropdownMenu: n, children: r, open: p, defaultOpen: d, onOpenChange: a } = e, s = M("DropdownMenu", n), i = l(n), [w = !1, D] = useControllableState({
				prop: p,
				defaultProp: d,
				onChange: a
			}), g = react.useCallback((() => D(((e) => !e))), [D]);
			return s.isInsideContent ? /*#__PURE__*/ react.createElement(m$3, {
				scope: n,
				isRootMenu: !1,
				open: w,
				onOpenChange: D,
				onOpenToggle: g
			}, /*#__PURE__*/ react.createElement(Sub, _extends({}, i, {
				open: w,
				onOpenChange: D
			}), r)) : /*#__PURE__*/ react.createElement(f$4, _extends({}, e, {
				open: w,
				onOpenChange: D,
				onOpenToggle: g
			}), r);
		};
		f$4 = /* @__PURE__ */ __name((n) => {
			const { __scopeDropdownMenu: r, children: t, dir: p, open: d, onOpenChange: a, onOpenToggle: s, modal: i = !0 } = n, w = l(r), f = react.useRef(null);
			/*#__PURE__*/ return react.createElement(m$3, {
				scope: r,
				isRootMenu: !0,
				triggerId: useId(),
				triggerRef: f,
				contentId: useId(),
				open: d,
				onOpenChange: a,
				onOpenToggle: s,
				modal: i
			}, /*#__PURE__*/ react.createElement(Root$7, _extends({}, w, {
				open: d,
				onOpenChange: a,
				dir: p,
				modal: i
			}), t));
		}, "f");
		DropdownMenuTrigger = /*#__PURE__*/ react.forwardRef(((e, n) => {
			const { __scopeDropdownMenu: t, disabled: p = !1 } = e, s = _objectWithoutProperties(e, _excluded$11), i = w$3("DropdownMenuTrigger", t), m = l(t);
			return i.isRootMenu ? /*#__PURE__*/ react.createElement(Anchor, _extends({ asChild: !0 }, m), /*#__PURE__*/ react.createElement(Primitive.button, _extends({
				type: "button",
				id: i.triggerId,
				"aria-haspopup": "menu",
				"aria-expanded": !!i.open || void 0,
				"aria-controls": i.open ? i.contentId : void 0,
				"data-state": i.open ? "open" : "closed",
				"data-disabled": p ? "" : void 0,
				disabled: p
			}, s, {
				ref: composeRefs(n, i.triggerRef),
				onPointerDown: composeEventHandlers(e.onPointerDown, ((e) => {
					p || 0 !== e.button || !1 !== e.ctrlKey || (i.open || e.preventDefault(), i.onOpenToggle());
				})),
				onKeyDown: composeEventHandlers(e.onKeyDown, ((e) => {
					p || (["Enter", " "].includes(e.key) && i.onOpenToggle(), "ArrowDown" === e.key && i.onOpenChange(!0), [" ", "ArrowDown"].includes(e.key) && e.preventDefault());
				}))
			}))) : null;
		}));
		[D$1, M] = s$1("DropdownMenuContent", { isInsideContent: !1 });
		DropdownMenuContent = /*#__PURE__*/ react.forwardRef(((e, n) => {
			const { __scopeDropdownMenu: r } = e, t = _objectWithoutProperties(e, _excluded2$6), p = w$3("DropdownMenuContent", r), d = l(r), a = _objectSpread2(_objectSpread2({}, t), {}, { style: _objectSpread2(_objectSpread2({}, e.style), {}, { "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)" }) });
			/*#__PURE__*/ return react.createElement(D$1, {
				scope: r,
				isInsideContent: !0
			}, p.isRootMenu ? /*#__PURE__*/ react.createElement(g$4, _extends({ __scopeDropdownMenu: r }, a, { ref: n })) : /*#__PURE__*/ react.createElement(Content$5, _extends({}, d, a, { ref: n })));
		}));
		g$4 = /*#__PURE__*/ react.forwardRef(((e, n) => {
			const { __scopeDropdownMenu: r, portalled: t = !0 } = e, p = _objectWithoutProperties(e, _excluded3$6), d = w$3("DropdownMenuContent", r), s = l(r), i = react.useRef(!1);
			return d.isRootMenu ? /*#__PURE__*/ react.createElement(Content$5, _extends({
				id: d.contentId,
				"aria-labelledby": d.triggerId
			}, s, p, {
				ref: n,
				portalled: t,
				onCloseAutoFocus: composeEventHandlers(e.onCloseAutoFocus, ((e) => {
					var o;
					i.current || null === (o = d.triggerRef.current) || void 0 === o || o.focus(), i.current = !1, e.preventDefault();
				})),
				onInteractOutside: composeEventHandlers(e.onInteractOutside, ((e) => {
					const o = e.detail.originalEvent;
					const n = 0 === o.button && !0 === o.ctrlKey;
					const r = 2 === o.button || n;
					d.modal && !r || (i.current = !0);
				}))
			})) : null;
		}));
		DropdownMenuItem = /*#__PURE__*/ react.forwardRef(((e, n) => {
			const { __scopeDropdownMenu: r } = e, t = _objectWithoutProperties(e, _excluded6$4), p = l(r);
			/*#__PURE__*/ return react.createElement(Item$2, _extends({}, p, t, { ref: n }));
		}));
		DropdownMenuSeparator = /*#__PURE__*/ react.forwardRef(((e, n) => {
			const { __scopeDropdownMenu: r } = e, t = _objectWithoutProperties(e, _excluded12), p = l(r);
			/*#__PURE__*/ return react.createElement(Separator$3, _extends({}, p, t, { ref: n }));
		}));
		DropdownMenuArrow = /*#__PURE__*/ react.forwardRef(((e, n) => {
			const { __scopeDropdownMenu: r } = e, t = _objectWithoutProperties(e, _excluded13), p = l(r);
			/*#__PURE__*/ return react.createElement(Arrow$2, _extends({}, p, t, { ref: n }));
		}));
		Root$6 = DropdownMenu;
		Trigger$3 = DropdownMenuTrigger;
		Content$4 = DropdownMenuContent;
		Item$1 = DropdownMenuItem;
		Separator$2 = DropdownMenuSeparator;
		Arrow$1 = DropdownMenuArrow;
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/dropdown/dropdown-content.js
	var DropdownContent;
	var init_dropdown_content = __esmMin((() => {
		init_styled_components_browser_esm();
		init_index_module$10();
		init_animation();
		DropdownContent = qe(Content$4)`
  all: revert;

  background: #fff !important;
  border-radius: 3px !important;
  min-width: 120px !important;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.15) !important;
  animation-duration: 400ms !important;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1) !important;
  padding: 4px !important;

  &[data-state="open"] {
	&[data-side="top"] {
	  animation-name: ${slideUpAndFade};
	}

	&[data-side="right"] {
	  animation-name: ${slideRightAndFade};
	}

	&[data-side="bottom"] {
	  animation-name: ${slideDownAndFade};
	}

	&[data-side="left"] {
	  animation-name: ${slideLeftAndFade};
	}
  }
`;
	}));
	//#endregion
	//#region node_modules/@radix-ui/react-visually-hidden/dist/index.module.js
	var VisuallyHidden, Root$5;
	var init_index_module$9 = __esmMin((() => {
		init_index_module$33();
		init_extends();
		init_objectSpread2();
		VisuallyHidden = /*#__PURE__*/ react.forwardRef(((i, o) => /*#__PURE__*/ react.createElement(Primitive.span, _extends({}, i, {
			ref: o,
			style: _objectSpread2({
				position: "absolute",
				border: 0,
				width: 1,
				height: 1,
				padding: 0,
				margin: -1,
				overflow: "hidden",
				clip: "rect(0, 0, 0, 0)",
				whiteSpace: "nowrap",
				wordWrap: "normal"
			}, i.style)
		}))));
		Root$5 = VisuallyHidden;
	}));
	//#endregion
	//#region node_modules/@radix-ui/react-use-previous/dist/index.module.js
	function usePrevious(r) {
		const u = react.useRef({
			value: r,
			previous: r
		});
		return react.useMemo((() => (u.current.value !== r && (u.current.previous = u.current.value, u.current.value = r), u.current.previous)), [r]);
	}
	var init_index_module$8 = __esmMin((() => {}));
	//#endregion
	//#region node_modules/@radix-ui/react-tooltip/dist/index.module.js
	/*#__PURE__*/ function k$1(e) {
		const { __scopeTooltip: o } = e, t = _$1("CheckTriggerMoved", o), r = useRect(t.trigger), n = null == r ? void 0 : r.left, i = usePrevious(n), a = null == r ? void 0 : r.top, l = usePrevious(a), u = t.onClose;
		return react.useEffect((() => {
			(void 0 !== i && i !== n || void 0 !== l && l !== a) && u();
		}), [
			u,
			i,
			l,
			n,
			a
		]), null;
	}
	var _excluded$10, _excluded2$5, _excluded3$5, _excluded4$4, w$2, x$4, g$3, E$3, v$3, b$4, y$2, _$1, Tooltip$1, TooltipTrigger, TooltipContent$3, h$4, TooltipArrow$1, Root$4, Trigger$2, Content$3, Arrow;
	var init_index_module$7 = __esmMin((() => {
		init_index_module$36();
		init_index_module$9();
		init_index_module$34();
		init_index_module$30();
		init_index_module$17();
		init_index_module$33();
		init_index_module$32();
		init_index_module$20();
		init_index_module$8();
		init_index_module$27();
		init_index_module$16();
		init_index_module$19();
		init_index_module$35();
		init_index_module$25();
		init_extends();
		init_objectWithoutProperties();
		init_objectSpread2();
		_excluded$10 = ["__scopeTooltip"];
		_excluded2$5 = ["forceMount"];
		_excluded3$5 = [
			"__scopeTooltip",
			"children",
			"aria-label",
			"portalled"
		];
		_excluded4$4 = ["__scopeTooltip"];
		[w$2, x$4] = createContextScope("Tooltip", [l$2]);
		g$3 = l$2(), E$3 = 700, [v$3, b$4] = w$2("TooltipProvider", {
			isOpenDelayed: !0,
			delayDuration: E$3,
			onOpen: () => {},
			onClose: () => {}
		});
		[y$2, _$1] = w$2("Tooltip");
		Tooltip$1 = /* @__PURE__ */ __name((o) => {
			const { __scopeTooltip: t, children: r, open: i, defaultOpen: a = !1, onOpenChange: l, delayDuration: c } = o, s = b$4("Tooltip", t), u = g$3(t), [d, m] = react.useState(null), f = useId(), C = react.useRef(0), w = null != c ? c : s.delayDuration, x = react.useRef(!1), { onOpen: E, onClose: v } = s, [_ = !1, h] = useControllableState({
				prop: i,
				defaultProp: a,
				onChange: (e) => {
					e && (document.dispatchEvent(new CustomEvent("tooltip.open")), E()), null == l || l(e);
				}
			}), k = react.useMemo((() => _ ? x.current ? "delayed-open" : "instant-open" : "closed"), [_]), D = react.useCallback((() => {
				window.clearTimeout(C.current), x.current = !1, h(!0);
			}), [h]), O = react.useCallback((() => {
				window.clearTimeout(C.current), C.current = window.setTimeout((() => {
					x.current = !0, h(!0);
				}), w);
			}), [w, h]);
			return react.useEffect((() => () => window.clearTimeout(C.current)), []), /*#__PURE__*/ react.createElement(Root$10, u, /*#__PURE__*/ react.createElement(y$2, {
				scope: t,
				contentId: f,
				open: _,
				stateAttribute: k,
				trigger: d,
				onTriggerChange: m,
				onTriggerEnter: react.useCallback((() => {
					s.isOpenDelayed ? O() : D();
				}), [
					s.isOpenDelayed,
					O,
					D
				]),
				onOpen: react.useCallback(D, [D]),
				onClose: react.useCallback((() => {
					window.clearTimeout(C.current), h(!1), v();
				}), [h, v])
			}, r));
		}, "Tooltip");
		TooltipTrigger = /*#__PURE__*/ react.forwardRef(((e, o) => {
			const { __scopeTooltip: t } = e, r = _objectWithoutProperties(e, _excluded$10), i = _$1("TooltipTrigger", t), l = g$3(t), c = useComposedRefs(o, i.onTriggerChange), s = react.useRef(!1), u = react.useCallback((() => s.current = !1), []);
			return react.useEffect((() => () => document.removeEventListener("mouseup", u)), [u]), /*#__PURE__*/ react.createElement(Anchor$1, _extends({ asChild: !0 }, l), /*#__PURE__*/ react.createElement(Primitive.button, _extends({
				"aria-describedby": i.open ? i.contentId : void 0,
				"data-state": i.stateAttribute
			}, r, {
				ref: c,
				onMouseEnter: composeEventHandlers(e.onMouseEnter, i.onTriggerEnter),
				onMouseLeave: composeEventHandlers(e.onMouseLeave, i.onClose),
				onMouseDown: composeEventHandlers(e.onMouseDown, (() => {
					i.onClose(), s.current = !0, document.addEventListener("mouseup", u, { once: !0 });
				})),
				onFocus: composeEventHandlers(e.onFocus, (() => {
					s.current || i.onOpen();
				})),
				onBlur: composeEventHandlers(e.onBlur, i.onClose),
				onClick: composeEventHandlers(e.onClick, ((e) => {
					0 === e.detail && i.onClose();
				}))
			})));
		}));
		TooltipContent$3 = /*#__PURE__*/ react.forwardRef(((e, o) => {
			const { forceMount: t } = e, r = _objectWithoutProperties(e, _excluded2$5), n = _$1("TooltipContent", e.__scopeTooltip);
			/*#__PURE__*/ return react.createElement(Presence, { present: t || n.open }, /*#__PURE__*/ react.createElement(h$4, _extends({ ref: o }, r)));
		}));
		h$4 = /*#__PURE__*/ react.forwardRef(((e, i) => {
			const { __scopeTooltip: a, children: l, "aria-label": c, portalled: s = !0 } = e, p = _objectWithoutProperties(e, _excluded3$5), d = _$1("TooltipContent", a), m = g$3(a), f = s ? Portal$2 : react.Fragment, { onClose: w } = d;
			return useEscapeKeydown((() => w())), react.useEffect((() => (document.addEventListener("tooltip.open", w), () => document.removeEventListener("tooltip.open", w))), [w]), /*#__PURE__*/ react.createElement(f, null, /*#__PURE__*/ react.createElement(k$1, { __scopeTooltip: a }), /*#__PURE__*/ react.createElement(Content$7, _extends({ "data-state": d.stateAttribute }, m, p, {
				ref: i,
				style: _objectSpread2(_objectSpread2({}, p.style), {}, { "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)" })
			}), /*#__PURE__*/ react.createElement(Slottable, null, l), /*#__PURE__*/ react.createElement(Root$5, {
				id: d.contentId,
				role: "tooltip"
			}, c || l)));
		}));
		TooltipArrow$1 = /*#__PURE__*/ react.forwardRef(((e, o) => {
			const { __scopeTooltip: t } = e, r = _objectWithoutProperties(e, _excluded4$4), i = g$3(t);
			/*#__PURE__*/ return react.createElement(Arrow$4, _extends({}, i, r, { ref: o }));
		}));
		__name(k$1, "k");
		Root$4 = Tooltip$1;
		Trigger$2 = TooltipTrigger;
		Content$3 = TooltipContent$3;
		Arrow = TooltipArrow$1;
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/tooltip/tooltip-arrow.js
	var TooltipArrow;
	var init_tooltip_arrow = __esmMin((() => {
		init_index_module$7();
		init_styled_components_browser_esm();
		TooltipArrow = qe(Arrow)`
  fill: #26292c;
`;
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/tooltip/tooltip-content.js
	var TooltipContent$2;
	var init_tooltip_content = __esmMin((() => {
		init_styled_components_browser_esm();
		init_index_module$7();
		init_animation();
		TooltipContent$2 = qe(Content$3)`
  all: revert;

  font-family: Roboto, sans-serif !important;
  font-size: 12px !important;
  font-weight: normal !important;
  text-transform: none !important;
  font-style: normal !important;
  text-decoration: none !important;
  line-height: normal !important;
  letter-spacing: normal !important;
  word-spacing: normal !important;
  background: #26292c !important;
  color: #fff !important;
  border-radius: 3px !important;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.15) !important;
  padding: 5px 12px !important;
  animation-duration: 400ms !important;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1) !important;
  will-change: transform, opacity !important;
  max-width: 150px !important;

  &[data-state="delayed-open"] {
	&[data-side="top"] {
	  animation-name: ${slideUpAndFade}
	}

	&[data-side="right"] {
	  animation-name: ${slideRightAndFade}
	}

	&[data-side="bottom"] {
	  animation-name: ${slideDownAndFade}
	}

	&[data-side="left"] {
	  animation-name: ${slideLeftAndFade}
	}
  }
`;
		TooltipContent$2.propTypes = Content$3.propTypes;
		TooltipContent$2.defaultProps = { side: "top" };
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/tooltip/tooltip.js
	var Tooltip;
	var init_tooltip = __esmMin((() => {
		init_index_module$7();
		init_tooltip_arrow();
		init_tooltip_content();
		Tooltip = Root$4;
		Tooltip.Trigger = Trigger$2;
		Tooltip.Arrow = TooltipArrow;
		Tooltip.Content = TooltipContent$2;
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/dropdown/dropdown-item.js
	function DropdownItem(_a) {
		var _b = _a, { children, icon, tooltip } = _b, props = __objRest$4(_b, [
			"children",
			"icon",
			"tooltip"
		]);
		const DropdownItemContent = /* @__PURE__ */ react.default.createElement(ItemWrapper, null, icon && /* @__PURE__ */ react.default.createElement(Icon$1, { className: icon }), children);
		return /* @__PURE__ */ react.default.createElement(StyledDropdownItem, __spreadValues$15({}, props), tooltip ? /* @__PURE__ */ react.default.createElement(Tooltip, null, /* @__PURE__ */ react.default.createElement(Tooltip.Trigger, { asChild: true }, DropdownItemContent), /* @__PURE__ */ react.default.createElement(Tooltip.Content, null, tooltip, /* @__PURE__ */ react.default.createElement(Tooltip.Arrow, null))) : DropdownItemContent);
	}
	var import_prop_types$42, __defProp$15, __defProps$6, __getOwnPropDescs$6, __getOwnPropSymbols$15, __hasOwnProp$15, __propIsEnum$15, __defNormalProp$15, __spreadValues$15, __spreadProps$6, __objRest$4, variants, Icon$1, ItemWrapper, StyledDropdownItem;
	var init_dropdown_item = __esmMin((() => {
		import_prop_types$42 = /* @__PURE__ */ __toESM(require_prop_types());
		init_styled_components_browser_esm();
		init_index_module$10();
		init_icon();
		init_tooltip();
		__defProp$15 = Object.defineProperty;
		__defProps$6 = Object.defineProperties;
		__getOwnPropDescs$6 = Object.getOwnPropertyDescriptors;
		__getOwnPropSymbols$15 = Object.getOwnPropertySymbols;
		__hasOwnProp$15 = Object.prototype.hasOwnProperty;
		__propIsEnum$15 = Object.prototype.propertyIsEnumerable;
		__defNormalProp$15 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$15(obj, key, {
			enumerable: true,
			configurable: true,
			writable: true,
			value
		}) : obj[key] = value, "__defNormalProp");
		__spreadValues$15 = /* @__PURE__ */ __name((a, b) => {
			for (var prop in b || (b = {})) if (__hasOwnProp$15.call(b, prop)) __defNormalProp$15(a, prop, b[prop]);
			if (__getOwnPropSymbols$15) {
				for (var prop of __getOwnPropSymbols$15(b)) if (__propIsEnum$15.call(b, prop)) __defNormalProp$15(a, prop, b[prop]);
			}
			return a;
		}, "__spreadValues");
		__spreadProps$6 = /* @__PURE__ */ __name((a, b) => __defProps$6(a, __getOwnPropDescs$6(b)), "__spreadProps");
		__objRest$4 = /* @__PURE__ */ __name((source, exclude) => {
			var target = {};
			for (var prop in source) if (__hasOwnProp$15.call(source, prop) && exclude.indexOf(prop) < 0) target[prop] = source[prop];
			if (source != null && __getOwnPropSymbols$15) {
				for (var prop of __getOwnPropSymbols$15(source)) if (exclude.indexOf(prop) < 0 && __propIsEnum$15.call(source, prop)) target[prop] = source[prop];
			}
			return target;
		}, "__objRest");
		variants = {
			default: {
				hoverTextColor: "#6d7882",
				hoverIconColor: "#a4afb6"
			},
			danger: {
				hoverTextColor: "#b01b1b",
				hoverIconColor: "#d9534f"
			}
		};
		Icon$1 = qe(Icon$2)`
  color: #a4afb6 !important;
  transition: 0.2s all;
`;
		ItemWrapper = qe.span`
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
`;
		StyledDropdownItem = qe(Item$1)`
  all: revert;

  font-family: Roboto, sans-serif !important;
  font-size: 11px !important;
  font-weight: 500 !important;
  text-transform: none !important;
  font-style: normal !important;
  text-decoration: none !important;
  line-height: 1.2 !important;
  letter-spacing: normal !important;
  word-spacing: normal !important;
  cursor: pointer !important;
  border-radius: 4px !important;
  padding: 7px 12px !important;
  color: #6d7882 !important;
  transition: 0.2s all !important;

  &[data-disabled] {
	opacity: 0.5 !important;
	cursor: default !important;
  }

  &:focus {
	background: #f1f3f5 !important;
	outline: none !important;

	color: ${({ variant }) => variants[variant].hoverTextColor} !important;

	${Icon$1} {
	  color: ${({ variant }) => variants[variant].hoverIconColor} !important;
	}
  }
`;
		DropdownItem.propTypes = __spreadProps$6(__spreadValues$15({}, DropdownItem.propTypes), {
			icon: import_prop_types$42.default.string,
			tooltip: import_prop_types$42.default.node,
			variant: import_prop_types$42.default.oneOf(["default", "danger"])
		});
		DropdownItem.defaultProps = { variant: "default" };
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/dropdown/dropdown-arrow.js
	var DropdownArrow;
	var init_dropdown_arrow = __esmMin((() => {
		init_index_module$10();
		init_styled_components_browser_esm();
		DropdownArrow = qe(Arrow$1)`
  fill: #fff;
  margin: 0 10px;
`;
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/dropdown/dropdown-separator.js
	var DropdownSeparator;
	var init_dropdown_separator = __esmMin((() => {
		init_styled_components_browser_esm();
		init_index_module$10();
		DropdownSeparator = qe(Separator$2)`
  height: 1px !important;
  background: #f1f3f5 !important;
  margin: 7px 10px !important;
`;
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/dropdown/dropdown.js
	var Dropdown;
	var init_dropdown = __esmMin((() => {
		init_index_module$10();
		init_dropdown_content();
		init_dropdown_item();
		init_dropdown_arrow();
		init_dropdown_separator();
		Dropdown = Root$6;
		Dropdown.Trigger = Trigger$3;
		Dropdown.Content = DropdownContent;
		Dropdown.Item = DropdownItem;
		Dropdown.Arrow = DropdownArrow;
		Dropdown.Separator = DropdownSeparator;
	}));
	//#endregion
	//#region node_modules/@radix-ui/react-dialog/dist/index.module.js
	/*#__PURE__*/ function b$3(e) {
		return e ? "open" : "closed";
	}
	var _excluded$9, _excluded2$4, _excluded3$4, _excluded4$3, _excluded5$3, _excluded6$3, _excluded7$2, _excluded8$2, x$3, C$2, v$2, E$2, Dialog, DialogTrigger, DialogPortal, DialogOverlay, R$1, DialogContent, _, O, h$3, DialogTitle, DialogDescription, DialogClose, w$1, F, Root$3, Trigger$1, Portal$1, Overlay$1, Content$2, Title$2, Description$1, Close;
	var init_index_module$6 = __esmMin((() => {
		init_index_module$34();
		init_es2015$6();
		init_es2015();
		init_index_module$31();
		init_index_module$33();
		init_index_module$32();
		init_index_module$30();
		init_index_module$28();
		init_index_module$24();
		init_index_module$16();
		init_index_module$36();
		init_index_module$19();
		init_index_module$35();
		init_index_module$25();
		init_extends();
		init_objectWithoutProperties();
		init_objectSpread2();
		_excluded$9 = ["__scopeDialog"];
		_excluded2$4 = ["forceMount"];
		_excluded3$4 = ["__scopeDialog"];
		_excluded4$3 = ["forceMount"];
		_excluded5$3 = [
			"__scopeDialog",
			"trapFocus",
			"onOpenAutoFocus",
			"onCloseAutoFocus"
		];
		_excluded6$3 = ["__scopeDialog"];
		_excluded7$2 = ["__scopeDialog"];
		_excluded8$2 = ["__scopeDialog"];
		[x$3, C$2] = createContextScope("Dialog");
		[v$2, E$2] = x$3("Dialog");
		Dialog = (e) => {
			const { __scopeDialog: o, children: t, open: r, defaultOpen: n, onOpenChange: a, modal: i = !0, allowPinchZoom: l } = e, c = react.useRef(null), p = react.useRef(null), [d = !1, f] = useControllableState({
				prop: r,
				defaultProp: n,
				onChange: a
			});
			/*#__PURE__*/ return react.createElement(v$2, {
				scope: o,
				triggerRef: c,
				contentRef: p,
				contentId: useId(),
				titleId: useId(),
				descriptionId: useId(),
				open: d,
				onOpenChange: f,
				onOpenToggle: react.useCallback((() => f(((e) => !e))), [f]),
				modal: i,
				allowPinchZoom: l
			}, t);
		};
		DialogTrigger = /*#__PURE__*/ react.forwardRef(((e, o) => {
			const { __scopeDialog: t } = e, r = _objectWithoutProperties(e, _excluded$9), a = E$2("DialogTrigger", t), i = useComposedRefs(o, a.triggerRef);
			/*#__PURE__*/ return react.createElement(Primitive.button, _extends({
				type: "button",
				"aria-haspopup": "dialog",
				"aria-expanded": a.open,
				"aria-controls": a.contentId,
				"data-state": b$3(a.open)
			}, r, {
				ref: i,
				onClick: composeEventHandlers(e.onClick, a.onOpenToggle)
			}));
		}));
		DialogPortal = (e) => {
			const { __scopeDialog: o, forceMount: t, children: r, container: n } = e, l = E$2("DialogPortal", o);
			/*#__PURE__*/ return react.createElement(react.Fragment, null, react.Children.map(r, ((e) => /*#__PURE__*/ react.createElement(Presence, { present: t || l.open }, /*#__PURE__*/ react.createElement(UnstablePortal, {
				asChild: !0,
				container: n
			}, e)))));
		};
		DialogOverlay = /*#__PURE__*/ react.forwardRef(((e, o) => {
			const { forceMount: t } = e, r = _objectWithoutProperties(e, _excluded2$4), n = E$2("DialogOverlay", e.__scopeDialog);
			return n.modal ? /*#__PURE__*/ react.createElement(Presence, { present: t || n.open }, /*#__PURE__*/ react.createElement(R$1, _extends({}, r, { ref: o }))) : null;
		}));
		R$1 = /*#__PURE__*/ react.forwardRef(((o, r) => {
			const { __scopeDialog: a } = o, i = _objectWithoutProperties(o, _excluded3$4), l = E$2("DialogOverlay", a);
			/*#__PURE__*/ return react.createElement(ReactRemoveScroll, {
				as: Slot,
				allowPinchZoom: l.allowPinchZoom,
				shards: [l.contentRef]
			}, /*#__PURE__*/ react.createElement(Primitive.div, _extends({ "data-state": b$3(l.open) }, i, {
				ref: r,
				style: _objectSpread2({ pointerEvents: "auto" }, i.style)
			})));
		}));
		DialogContent = /*#__PURE__*/ react.forwardRef(((e, o) => {
			const { forceMount: t } = e, r = _objectWithoutProperties(e, _excluded4$3), n = E$2("DialogContent", e.__scopeDialog);
			/*#__PURE__*/ return react.createElement(Presence, { present: t || n.open }, n.modal ? /*#__PURE__*/ react.createElement(_, _extends({}, r, { ref: o })) : /*#__PURE__*/ react.createElement(O, _extends({}, r, { ref: o })));
		}));
		_ = /*#__PURE__*/ react.forwardRef(((e, t) => {
			const r = E$2("DialogContent", e.__scopeDialog);
			const n = react.useRef(null);
			const a = useComposedRefs(t, r.contentRef, n);
			return react.useEffect((() => {
				const e = n.current;
				if (e) return hideOthers(e);
			}), []), /*#__PURE__*/ react.createElement(h$3, _extends({}, e, {
				ref: a,
				trapFocus: r.open,
				disableOutsidePointerEvents: !0,
				onCloseAutoFocus: composeEventHandlers(e.onCloseAutoFocus, ((e) => {
					var o;
					e.preventDefault(), null === (o = r.triggerRef.current) || void 0 === o || o.focus();
				})),
				onPointerDownOutside: composeEventHandlers(e.onPointerDownOutside, ((e) => {
					const o = e.detail.originalEvent;
					const t = 0 === o.button && !0 === o.ctrlKey;
					(2 === o.button || t) && e.preventDefault();
				})),
				onFocusOutside: composeEventHandlers(e.onFocusOutside, ((e) => e.preventDefault()))
			}));
		}));
		O = /*#__PURE__*/ react.forwardRef(((e, o) => {
			const t = E$2("DialogContent", e.__scopeDialog);
			const r = react.useRef(!1);
			/*#__PURE__*/ return react.createElement(h$3, _extends({}, e, {
				ref: o,
				trapFocus: !1,
				disableOutsidePointerEvents: !1,
				onCloseAutoFocus: (o) => {
					var n;
					var a;
					(null === (n = e.onCloseAutoFocus) || void 0 === n || n.call(e, o), o.defaultPrevented) || (r.current || null === (a = t.triggerRef.current) || void 0 === a || a.focus(), o.preventDefault());
					r.current = !1;
				},
				onInteractOutside: (o) => {
					var n;
					var a;
					null === (n = e.onInteractOutside) || void 0 === n || n.call(e, o), o.defaultPrevented || (r.current = !0);
					const i = o.target;
					null !== (a = t.triggerRef.current) && void 0 !== a && a.contains(i) && o.preventDefault();
				}
			}));
		}));
		h$3 = /*#__PURE__*/ react.forwardRef(((e, o) => {
			const { __scopeDialog: t, trapFocus: n, onOpenAutoFocus: a, onCloseAutoFocus: i } = e, s = _objectWithoutProperties(e, _excluded5$3), u = E$2("DialogContent", t), d = useComposedRefs(o, react.useRef(null));
			return useFocusGuards(), /*#__PURE__*/ react.createElement(react.Fragment, null, /*#__PURE__*/ react.createElement(FocusScope, {
				asChild: !0,
				loop: !0,
				trapped: n,
				onMountAutoFocus: a,
				onUnmountAutoFocus: i
			}, /*#__PURE__*/ react.createElement(DismissableLayer, _extends({
				role: "dialog",
				id: u.contentId,
				"aria-describedby": u.descriptionId,
				"aria-labelledby": u.titleId,
				"data-state": b$3(u.open)
			}, s, {
				ref: d,
				onDismiss: () => u.onOpenChange(!1)
			}))), !1);
		}));
		DialogTitle = /*#__PURE__*/ react.forwardRef(((e, o) => {
			const { __scopeDialog: t } = e, r = _objectWithoutProperties(e, _excluded6$3), a = E$2("DialogTitle", t);
			/*#__PURE__*/ return react.createElement(Primitive.h2, _extends({ id: a.titleId }, r, { ref: o }));
		}));
		DialogDescription = /*#__PURE__*/ react.forwardRef(((e, o) => {
			const { __scopeDialog: t } = e, r = _objectWithoutProperties(e, _excluded7$2), a = E$2("DialogDescription", t);
			/*#__PURE__*/ return react.createElement(Primitive.p, _extends({ id: a.descriptionId }, r, { ref: o }));
		}));
		DialogClose = /*#__PURE__*/ react.forwardRef(((e, o) => {
			const { __scopeDialog: t } = e, r = _objectWithoutProperties(e, _excluded8$2), a = E$2("DialogClose", t);
			/*#__PURE__*/ return react.createElement(Primitive.button, _extends({ type: "button" }, r, {
				ref: o,
				onClick: composeEventHandlers(e.onClick, (() => a.onOpenChange(!1)))
			}));
		}));
		__name(b$3, "b");
		[w$1, F] = createContext$3("DialogTitleWarning", {
			contentName: "DialogContent",
			titleName: "DialogTitle",
			docsSlug: "dialog"
		});
		Root$3 = Dialog;
		Trigger$1 = DialogTrigger;
		Portal$1 = DialogPortal;
		Overlay$1 = DialogOverlay;
		Content$2 = DialogContent;
		Title$2 = DialogTitle;
		Description$1 = DialogDescription;
		Close = DialogClose;
	}));
	//#endregion
	//#region node_modules/@radix-ui/react-alert-dialog/dist/index.module.js
	var _excluded$8, _excluded2$3, _excluded3$3, _excluded4$2, _excluded5$2, _excluded6$2, _excluded7$1, _excluded8$1, _excluded9, c, s, p$1, AlertDialog$1, AlertDialogTrigger, AlertDialogPortal, AlertDialogOverlay, g$2, D, AlertDialogContent$1, f$3, AlertDialogTitle$1, AlertDialogDescription$1, AlertDialogAction$1, AlertDialogCancel$1, Root$2, Trigger, Portal, Overlay, Content$1, Action, Cancel, Title$1, Description;
	var init_index_module$5 = __esmMin((() => {
		init_index_module$34();
		init_index_module$25();
		init_index_module$6();
		init_index_module$35();
		init_index_module$19();
		init_extends();
		init_objectWithoutProperties();
		_excluded$8 = ["__scopeAlertDialog"];
		_excluded2$3 = ["__scopeAlertDialog"];
		_excluded3$3 = ["__scopeAlertDialog"];
		_excluded4$2 = ["__scopeAlertDialog"];
		_excluded5$2 = ["__scopeAlertDialog", "children"];
		_excluded6$2 = ["__scopeAlertDialog"];
		_excluded7$1 = ["__scopeAlertDialog"];
		_excluded8$1 = ["__scopeAlertDialog"];
		_excluded9 = ["__scopeAlertDialog"];
		[c, s] = createContextScope("AlertDialog", [C$2]);
		p$1 = C$2();
		AlertDialog$1 = /* @__PURE__ */ __name((e) => {
			const { __scopeAlertDialog: t } = e, o = _objectWithoutProperties(e, _excluded$8), l = p$1(t);
			/*#__PURE__*/ return react.createElement(Root$3, _extends({}, l, o, { modal: !0 }));
		}, "AlertDialog");
		AlertDialogTrigger = /*#__PURE__*/ react.forwardRef(((e, t) => {
			const { __scopeAlertDialog: o } = e, l = _objectWithoutProperties(e, _excluded2$3), n = p$1(o);
			/*#__PURE__*/ return react.createElement(Trigger$1, _extends({}, n, l, { ref: t }));
		}));
		AlertDialogPortal = (e) => {
			const { __scopeAlertDialog: t } = e, o = _objectWithoutProperties(e, _excluded3$3), l = p$1(t);
			/*#__PURE__*/ return react.createElement(Portal$1, _extends({}, l, o));
		};
		AlertDialogOverlay = /*#__PURE__*/ react.forwardRef(((e, t) => {
			const { __scopeAlertDialog: o } = e, l = _objectWithoutProperties(e, _excluded4$2), n = p$1(o);
			/*#__PURE__*/ return react.createElement(Overlay$1, _extends({}, n, l, { ref: t }));
		}));
		[g$2, D] = c("AlertDialogContent");
		AlertDialogContent$1 = /*#__PURE__*/ react.forwardRef(((o, n) => {
			const { __scopeAlertDialog: c, children: s } = o, D = _objectWithoutProperties(o, _excluded5$2), A = p$1(c), u = useComposedRefs(n, react.useRef(null)), x = react.useRef(null);
			/*#__PURE__*/ return react.createElement(w$1, {
				contentName: "AlertDialogContent",
				titleName: f$3,
				docsSlug: "alert-dialog"
			}, /*#__PURE__*/ react.createElement(g$2, {
				scope: c,
				cancelRef: x
			}, /*#__PURE__*/ react.createElement(Content$2, _extends({ role: "alertdialog" }, A, D, {
				ref: u,
				onOpenAutoFocus: composeEventHandlers(D.onOpenAutoFocus, ((e) => {
					var t;
					e.preventDefault(), null === (t = x.current) || void 0 === t || t.focus({ preventScroll: !0 });
				})),
				onPointerDownOutside: (e) => e.preventDefault(),
				onInteractOutside: (e) => e.preventDefault()
			}), /*#__PURE__*/ react.createElement(Slottable, null, s), !1)));
		}));
		f$3 = "AlertDialogTitle";
		AlertDialogTitle$1 = /*#__PURE__*/ react.forwardRef(((e, t) => {
			const { __scopeAlertDialog: o } = e, l = _objectWithoutProperties(e, _excluded6$2), n = p$1(o);
			/*#__PURE__*/ return react.createElement(Title$2, _extends({}, n, l, { ref: t }));
		}));
		AlertDialogDescription$1 = /*#__PURE__*/ react.forwardRef(((e, t) => {
			const { __scopeAlertDialog: o } = e, l = _objectWithoutProperties(e, _excluded7$1), n = p$1(o);
			/*#__PURE__*/ return react.createElement(Description$1, _extends({}, n, l, { ref: t }));
		}));
		AlertDialogAction$1 = /*#__PURE__*/ react.forwardRef(((e, t) => {
			const { __scopeAlertDialog: o } = e, l = _objectWithoutProperties(e, _excluded8$1), n = p$1(o);
			/*#__PURE__*/ return react.createElement(Close, _extends({}, n, l, { ref: t }));
		}));
		AlertDialogCancel$1 = /*#__PURE__*/ react.forwardRef(((e, t) => {
			const { __scopeAlertDialog: o } = e, n = _objectWithoutProperties(e, _excluded9), { cancelRef: c } = D("AlertDialogCancel", o), s = p$1(o), g = useComposedRefs(t, c);
			/*#__PURE__*/ return react.createElement(Close, _extends({}, s, n, { ref: g }));
		}));
		Root$2 = AlertDialog$1;
		Trigger = AlertDialogTrigger;
		Portal = AlertDialogPortal;
		Overlay = AlertDialogOverlay;
		Content$1 = AlertDialogContent$1;
		Action = AlertDialogAction$1;
		Cancel = AlertDialogCancel$1;
		Title$1 = AlertDialogTitle$1;
		Description = AlertDialogDescription$1;
	}));
	//#endregion
	//#region modules/notes/assets/js/services/rich-text-parser/utils.js
	/**
	* A util function to transform data through transform functions
	*
	* @param {Function[]} functions
	* @return {Function} function
	*/
	function pipe(...functions) {
		return (value, ...args) => functions.reduce((currentValue, currentFunction) => currentFunction(currentValue, ...args), value);
	}
	var init_utils$3 = __esmMin((() => {}));
	//#endregion
	//#region modules/notes/assets/js/services/rich-text-parser/rich-text-parser.js
	var RichTextParser;
	var init_rich_text_parser$1 = __esmMin((() => {
		init_utils$3();
		init_defineProperty();
		RichTextParser = class {
			/**
			* @param {Object}     options
			* @param {Array}      options.tokenClasses
			* @param {Object}     options.fallbackTokenClass
			* @param {Function[]} options.parsePipeFunctions
			*/
			constructor({ tokenClasses, fallbackTokenClass, parsePipeFunctions } = {}) {
				_defineProperty(this, "tokenClasses", void 0);
				_defineProperty(this, "fallbackTokenClass", void 0);
				_defineProperty(this, "parsePipeFunctions", void 0);
				this.tokenClasses = tokenClasses;
				this.fallbackTokenClass = fallbackTokenClass;
				this.parsePipeFunctions = parsePipeFunctions;
			}
			/**
			* Takes a string and parse it into a meaningful object, based on the configuration that was provided to this class.
			* input: 'This is text and email: test@elementor.com'
			* output: {
			*     type: 'Content',
			*     value: [
			*         {
			*             type: 'Paragraph',
			*             value: [
			*                 { type: 'Text', value: 'This is text and email: ' },
			*                 { type: 'Email', value: 'test@elementor.com' },
			*             ]
			*         }
			*     ]
			* }
			*
			* @param {string} value
			*
			* @return {Object|Array} content
			*/
			parse(value) {
				var _this$parsePipeFuncti;
				const lexemes = this.extractLexemes(value);
				const tokens = this.tokenize(lexemes);
				return pipe(...(_this$parsePipeFuncti = this.parsePipeFunctions) !== null && _this$parsePipeFuncti !== void 0 ? _this$parsePipeFuncti : [])(tokens);
			}
			/**
			* Split the value into lexemes (an array of strings without the meaning)
			*
			* @param {string} value
			*
			* @return {string[]} lexemes
			*/
			extractLexemes(value) {
				return value.trim().split(this.getLexerRegex()).reduce((lexemes, currentLexeme) => {
					if (currentLexeme) lexemes.push(currentLexeme);
					return lexemes;
				}, []);
			}
			/**
			* Get all the array of lexemes and transform them into tokens (An object that represent what the part of string is).
			*
			* @param {string[]} lexemes
			*
			* @return {Object[]} tokens
			*/
			tokenize(lexemes) {
				return lexemes.map((lexeme) => {
					const TokenClass = this.tokenClasses.find((tc) => tc.isToken(lexeme));
					if (!TokenClass) return this.fallbackTokenClass ? this.fallbackTokenClass.create(lexeme) : null;
					return TokenClass.create(lexeme);
				}).filter((lexeme) => !!lexeme);
			}
			/**
			* Generate a regex from each token class that was provided.
			*
			* @return {RegExp} regular expression
			*/
			getLexerRegex() {
				const patterns = this.tokenClasses.map((tokenClass) => {
					var _tokenClass$getPatter;
					return (_tokenClass$getPatter = tokenClass.getPattern()) === null || _tokenClass$getPatter === void 0 ? void 0 : _tokenClass$getPatter.source;
				}).filter((pattern) => !!pattern);
				return new RegExp(`(${patterns.join("|")})`, "igm");
			}
		};
	}));
	//#endregion
	//#region modules/notes/assets/js/services/rich-text-parser/tokens/base-token.js
	var BaseToken;
	var init_base_token = __esmMin((() => {
		init_defineProperty();
		BaseToken = class {
			/**
			* @param {string | Array | null} value
			*/
			constructor(value) {
				_defineProperty(this, "type", void 0);
				_defineProperty(this, "value", void 0);
				this.value = value;
				this.type = this.constructor.type;
			}
			/**
			* Regex pattern for the lexer.
			*
			* @return {RegExp} regular expression
			*/
			static getPattern() {
				return null;
			}
			/**
			* Checks if a lexeme belongs to the current token.
			*
			* @param {string} lexeme
			*
			* @return {boolean} does lexeme belong to the current token
			*/
			static isToken(lexeme) {
				return !!lexeme.match(new RegExp(this.getPattern(), "igm"));
			}
			/**
			* Creates a new Token instance.
			*
			* @param {string | Array | null } value
			*
			* @return {this} token
			*/
			static create(value = null) {
				return new this(value);
			}
			/**
			* Check if the current token is instance of the provided token class
			*
			* @param {Object} tokenClass
			*
			* @return {boolean} is a token class instance
			*/
			is(tokenClass) {
				return this.type === tokenClass.type;
			}
		};
		_defineProperty(BaseToken, "type", "");
	}));
	//#endregion
	//#region modules/notes/assets/js/services/rich-text-parser/tokens/email.js
	var Email;
	var init_email = __esmMin((() => {
		init_base_token();
		init_defineProperty();
		Email = class extends BaseToken {
			static getPattern() {
				return /[\w\-.]+@(?:[\w-]+\.)+[\w-]{2,4}/;
			}
		};
		_defineProperty(Email, "type", "Email");
	}));
	//#endregion
	//#region modules/notes/assets/js/services/rich-text-parser/tokens/line-break.js
	var LineBreak;
	var init_line_break = __esmMin((() => {
		init_base_token();
		init_defineProperty();
		LineBreak = class extends BaseToken {
			constructor(value) {
				super(value || "\n");
			}
			static getPattern() {
				return /(?:\r?\n)/;
			}
		};
		_defineProperty(LineBreak, "type", "LineBreak");
	}));
	//#endregion
	//#region modules/notes/assets/js/services/rich-text-parser/tokens/paragraph.js
	var Paragraph;
	var init_paragraph = __esmMin((() => {
		init_base_token();
		init_defineProperty();
		Paragraph = class extends BaseToken {};
		_defineProperty(Paragraph, "type", "Paragraph");
	}));
	//#endregion
	//#region modules/notes/assets/js/services/rich-text-parser/tokens/text.js
	var Text$4;
	var init_text = __esmMin((() => {
		init_base_token();
		init_defineProperty();
		Text$4 = class extends BaseToken {
			static {
				__name(this, "Text");
			}
		};
		_defineProperty(Text$4, "type", "Text");
	}));
	//#endregion
	//#region modules/notes/assets/js/services/rich-text-parser/tokens/content.js
	var Content;
	var init_content = __esmMin((() => {
		init_base_token();
		init_defineProperty();
		Content = class extends BaseToken {};
		_defineProperty(Content, "type", "Content");
	}));
	//#endregion
	//#region modules/notes/assets/js/services/rich-text-parser/tokens/mention.js
	var Mention;
	var init_mention = __esmMin((() => {
		init_base_token();
		init_tokens();
		init_defineProperty();
		Mention = class extends BaseToken {
			constructor(value) {
				super(value);
				_defineProperty(this, "handle", void 0);
				_defineProperty(this, "username", void 0);
				this.handle = Handle$1.create(this.constructor.handleChar);
				this.username = Username.create(value.replace(this.constructor.handleChar, ""));
			}
			static getPattern() {
				return new RegExp(`\\B${this.handleChar}[\\w\\-]+`);
			}
		};
		_defineProperty(Mention, "type", "Mention");
		_defineProperty(Mention, "handleChar", "@");
	}));
	//#endregion
	//#region modules/notes/assets/js/services/rich-text-parser/tokens/handle.js
	var Handle$1;
	var init_handle = __esmMin((() => {
		init_base_token();
		init_defineProperty();
		Handle$1 = class extends BaseToken {
			static {
				__name(this, "Handle");
			}
		};
		_defineProperty(Handle$1, "type", "Handle");
	}));
	//#endregion
	//#region modules/notes/assets/js/services/rich-text-parser/tokens/username.js
	var Username;
	var init_username = __esmMin((() => {
		init_base_token();
		init_defineProperty();
		Username = class extends BaseToken {};
		_defineProperty(Username, "type", "Username");
	}));
	//#endregion
	//#region modules/notes/assets/js/services/rich-text-parser/tokens/url.js
	var Url;
	var init_url = __esmMin((() => {
		init_base_token();
		init_defineProperty();
		Url = class extends BaseToken {
			/**
			* @see https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url
			*
			* @return {RegExp} pattern
			*/
			static getPattern() {
				return /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)/;
			}
		};
		_defineProperty(Url, "type", "Url");
	}));
	//#endregion
	//#region modules/notes/assets/js/services/rich-text-parser/tokens/wow.js
	var Wow;
	var init_wow = __esmMin((() => {
		init_base_token();
		init_defineProperty();
		Wow = class extends BaseToken {
			static getPattern() {
				return /(?:(?:\b(?:yay|wow)\b)|рџЋ‰)/;
			}
		};
		_defineProperty(Wow, "type", "Wow");
	}));
	//#endregion
	//#region modules/notes/assets/js/services/rich-text-parser/tokens/index.js
	var init_tokens = __esmMin((() => {
		init_email();
		init_line_break();
		init_paragraph();
		init_text();
		init_content();
		init_mention();
		init_handle();
		init_username();
		init_url();
		init_wow();
	}));
	//#endregion
	//#region modules/notes/assets/js/services/rich-text-parser/parse-pipe-functions/wrap-tokens-into-paragraph.js
	/**
	* Convert LineBreak tokens into Paragraphs.
	* input: [ Text, Text, Email, LineBreak, Text, Text ]
	* output: [
	* 		Paragraph: [ Text, Text, Email ],
	* 		Paragraph: [ Text, Text ]
	* ]
	*
	* @param {Object[]} tokens
	*
	* @return {Object[]} paragraphs
	*/
	function wrapTokensIntoParagraph(tokens) {
		tokens.push(LineBreak.create());
		return tokens.reduce((carry, token) => {
			let currentToken = token;
			if (token.is(LineBreak)) {
				const lastParagraphIndex = findLastIndex(carry, (t) => t.is(Paragraph));
				currentToken = Paragraph.create(carry.slice(lastParagraphIndex + 1, carry.length));
				carry = carry.slice(0, lastParagraphIndex + 1);
			}
			carry.push(currentToken);
			return carry;
		}, []);
	}
	/**
	* Find an index of based on the callback but it runs from last to first item.
	*
	* @param {Array}    array
	* @param {Function} callback
	* @return {number} last index
	*/
	function findLastIndex(array, callback) {
		for (let i = array.length - 1; i >= 0; i--) if (callback(array[i], i)) return i;
		return -1;
	}
	var init_wrap_tokens_into_paragraph = __esmMin((() => {
		init_tokens();
	}));
	//#endregion
	//#region modules/notes/assets/js/services/rich-text-parser/parse-pipe-functions/wrap-tokens-into-content.js
	/**
	* Wrap tokens tree with one Content token.
	*
	* @param {Object[]} tokens
	*
	* @return {Content} content
	*/
	function wrapTokensIntoContent(tokens) {
		return Content.create(tokens);
	}
	var init_wrap_tokens_into_content = __esmMin((() => {
		init_tokens();
	}));
	//#endregion
	//#region modules/notes/assets/js/services/rich-text-parser/parse-pipe-functions/index.js
	var init_parse_pipe_functions = __esmMin((() => {
		init_wrap_tokens_into_paragraph();
		init_wrap_tokens_into_content();
	}));
	//#endregion
	//#region modules/notes/assets/js/services/rich-text-parser/index.js
	/**
	* Create a RichTextParser instance, set default tokens, and parse pipe functions.
	*
	* @param {Object}       options
	* @param {Object[]}     options.tokenClasses       - Token classes to tokenize into.
	* @param {Object|false} options.fallbackTokenClass
	* @param {Function[]}   options.parsePipeFunctions - Parsing pipe functions to trigger after basic parsing.
	* @return {RichTextParser} parser
	*/
	function createRichTextParser({ tokenClasses, fallbackTokenClass, parsePipeFunctions } = {}) {
		return new RichTextParser({
			tokenClasses: tokenClasses !== null && tokenClasses !== void 0 ? tokenClasses : [
				Email,
				LineBreak,
				Mention,
				Url,
				Wow
			],
			fallbackTokenClass: fallbackTokenClass !== null && fallbackTokenClass !== void 0 ? fallbackTokenClass : Text$4,
			parsePipeFunctions: parsePipeFunctions !== null && parsePipeFunctions !== void 0 ? parsePipeFunctions : [wrapTokensIntoParagraph, wrapTokensIntoContent]
		});
	}
	var init_rich_text_parser = __esmMin((() => {
		init_rich_text_parser$1();
		init_parse_pipe_functions();
		init_tokens();
	}));
	//#endregion
	//#region modules/notes/assets/js/app/utils.js
	function extractMentions(content) {
		const usernames = createRichTextParser({
			tokenClasses: [Mention],
			fallbackTokenClass: false,
			parsePipeFunctions: []
		}).parse(content).map((token) => token.username.value);
		return [...new Set(usernames)];
	}
	function normalizeQueryParams(params) {
		return Object.entries(params).reduce((queryParams, [param, value]) => {
			if (null === value) return queryParams;
			if ("boolean" === typeof value) value = value ? 1 : 0;
			return __spreadProps$5(__spreadValues$14({}, queryParams), { [param]: value });
		}, {});
	}
	function scrollIntoView(element, _a = {}) {
		var _b = _a, { onlyIfNeeded = true } = _b, scrollOptions = __objRest$3(_b, ["onlyIfNeeded"]);
		if (onlyIfNeeded && isFullyInViewport(element)) return Promise.resolve();
		return new Promise((resolve) => {
			observeForFirstIntersection(element, () => {
				resolve();
			});
			element.scrollIntoView(__spreadValues$14({
				behavior: "smooth",
				block: "center",
				inline: "center"
			}, scrollOptions));
		});
	}
	function isFullyInViewport(element) {
		const { top, left, bottom, right } = element.getBoundingClientRect();
		const { top: parentTop, right: parentRight, bottom: parentBottom, left: parentLeft } = element.parentElement.getBoundingClientRect();
		return top >= 0 && left >= 0 && top <= window.innerHeight && left <= window.innerWidth && top >= parentTop && right <= parentRight && bottom <= parentBottom && left >= parentLeft;
	}
	function observeForFirstIntersection(element, callback) {
		new IntersectionObserver((entries, currentObserver) => {
			var _a;
			if ((_a = entries == null ? void 0 : entries[0]) == null ? void 0 : _a.isIntersecting) {
				currentObserver.disconnect();
				callback();
			}
		}).observe(element);
	}
	function submitForm(form) {
		form.dispatchEvent(new Event("submit", {
			cancelable: true,
			bubbles: true
		}));
	}
	var __defProp$14, __defProps$5, __getOwnPropDescs$5, __getOwnPropSymbols$14, __hasOwnProp$14, __propIsEnum$14, __defNormalProp$14, __spreadValues$14, __spreadProps$5, __objRest$3, MAX_Z_INDEX;
	var init_utils$2 = __esmMin((() => {
		init_rich_text_parser();
		init_tokens();
		__defProp$14 = Object.defineProperty;
		__defProps$5 = Object.defineProperties;
		__getOwnPropDescs$5 = Object.getOwnPropertyDescriptors;
		__getOwnPropSymbols$14 = Object.getOwnPropertySymbols;
		__hasOwnProp$14 = Object.prototype.hasOwnProperty;
		__propIsEnum$14 = Object.prototype.propertyIsEnumerable;
		__defNormalProp$14 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$14(obj, key, {
			enumerable: true,
			configurable: true,
			writable: true,
			value
		}) : obj[key] = value, "__defNormalProp");
		__spreadValues$14 = /* @__PURE__ */ __name((a, b) => {
			for (var prop in b || (b = {})) if (__hasOwnProp$14.call(b, prop)) __defNormalProp$14(a, prop, b[prop]);
			if (__getOwnPropSymbols$14) {
				for (var prop of __getOwnPropSymbols$14(b)) if (__propIsEnum$14.call(b, prop)) __defNormalProp$14(a, prop, b[prop]);
			}
			return a;
		}, "__spreadValues");
		__spreadProps$5 = /* @__PURE__ */ __name((a, b) => __defProps$5(a, __getOwnPropDescs$5(b)), "__spreadProps");
		__objRest$3 = /* @__PURE__ */ __name((source, exclude) => {
			var target = {};
			for (var prop in source) if (__hasOwnProp$14.call(source, prop) && exclude.indexOf(prop) < 0) target[prop] = source[prop];
			if (source != null && __getOwnPropSymbols$14) {
				for (var prop of __getOwnPropSymbols$14(source)) if (exclude.indexOf(prop) < 0 && __propIsEnum$14.call(source, prop)) target[prop] = source[prop];
			}
			return target;
		}, "__objRest");
		MAX_Z_INDEX = 2147483647;
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/alert-dialog/alert-dialog-content.js
	function AlertDialogContent(props) {
		return /* @__PURE__ */ react.default.createElement(Portal, null, /* @__PURE__ */ react.default.createElement(StyledOverlay, null), /* @__PURE__ */ react.default.createElement(StyledContent, __spreadValues$13({}, props)));
	}
	var __defProp$13, __getOwnPropSymbols$13, __hasOwnProp$13, __propIsEnum$13, __defNormalProp$13, __spreadValues$13, overlayShow, contentShow, StyledContent, StyledOverlay;
	var init_alert_dialog_content = __esmMin((() => {
		init_index_module$5();
		init_styled_components_browser_esm();
		init_utils$2();
		__defProp$13 = Object.defineProperty;
		__getOwnPropSymbols$13 = Object.getOwnPropertySymbols;
		__hasOwnProp$13 = Object.prototype.hasOwnProperty;
		__propIsEnum$13 = Object.prototype.propertyIsEnumerable;
		__defNormalProp$13 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$13(obj, key, {
			enumerable: true,
			configurable: true,
			writable: true,
			value
		}) : obj[key] = value, "__defNormalProp");
		__spreadValues$13 = /* @__PURE__ */ __name((a, b) => {
			for (var prop in b || (b = {})) if (__hasOwnProp$13.call(b, prop)) __defNormalProp$13(a, prop, b[prop]);
			if (__getOwnPropSymbols$13) {
				for (var prop of __getOwnPropSymbols$13(b)) if (__propIsEnum$13.call(b, prop)) __defNormalProp$13(a, prop, b[prop]);
			}
			return a;
		}, "__spreadValues");
		overlayShow = We`
  0% {
	opacity: 0;
  }
  100% {
	opacity: 1;
  }
`;
		contentShow = We`
  0% {
	opacity: 0;
	transform: translate(-50%, -48%) scale(.96);
  }
  100% {
	opacity: 1;
	transform: translate(-50%, -50%) scale(1);
  }
`;
		StyledContent = qe(Content$1)`
  all: revert;

  font-family: Roboto, sans-serif !important;
  font-size: 1em !important;
  font-weight: normal !important;
  text-transform: none !important;
  font-style: normal !important;
  text-decoration: none !important;
  line-height: normal !important;
  letter-spacing: normal !important;
  word-spacing: normal !important;
  background-color: #fff !important;
  box-shadow: 2px 8px 23px rgba(0, 0, 0, 0.2) !important;
  border-radius: 3px !important;
  width: 375px !important;
  text-align: center !important;
  position: fixed !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  max-height: 85vh !important;
  animation-duration: 150ms !important;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1) !important;
  animation-name: ${contentShow} !important;
  z-index: ${MAX_Z_INDEX} !important;

  &:focus {
	outline: none !important;
  }
`;
		StyledOverlay = qe(Overlay)`
  background-color: rgba(0, 0, 0, 0.5) !important;
  position: fixed !important;
  inset: 0 !important;
  animation-duration: 150ms !important;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1) !important;
  animation-name: ${overlayShow} !important;
  z-index: ${MAX_Z_INDEX} !important;
`;
		AlertDialogContent.propTypes = __spreadValues$13({}, Content$1.propTypes);
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/alert-dialog/alert-dialog-title.js
	var AlertDialogTitle;
	var init_alert_dialog_title = __esmMin((() => {
		init_index_module$5();
		init_styled_components_browser_esm();
		init_objectSpread2();
		AlertDialogTitle = qe(Title$1)`
  all: revert;

  font-family: Roboto, sans-serif !important;
  font-size: 17px !important;
  font-weight: 500 !important;
  text-transform: none !important;
  font-style: normal !important;
  text-decoration: none !important;
  line-height: normal !important;
  letter-spacing: normal !important;
  word-spacing: normal !important;
  margin: 0 !important;
  color: #495157 !important;

  &::before, &::after {
    display: none;
  }
`;
		AlertDialogTitle.propTypes = _objectSpread2({}, Title$1.propTypes);
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/div-base.js
	var DivBase;
	var init_div_base = __esmMin((() => {
		init_styled_components_browser_esm();
		DivBase = qe.div`
	all: revert;
	box-sizing: border-box;

	&:before,
	&:after {
		display: none !important;
	}
`;
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/alert-dialog/alert-dialog-description-container.js
	var AlertDialogDescriptionContainer;
	var init_alert_dialog_description_container = __esmMin((() => {
		init_styled_components_browser_esm();
		init_div_base();
		AlertDialogDescriptionContainer = qe(DivBase)`
  padding: 30px !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 12px !important;
`;
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/alert-dialog/alert-dialog-actions-container.js
	var AlertDialogActionsContainer;
	var init_alert_dialog_actions_container = __esmMin((() => {
		init_styled_components_browser_esm();
		init_div_base();
		AlertDialogActionsContainer = qe(DivBase)`
  display: flex;
  align-items: center;
  border-top: 1px solid #d5dadf;

  & > button:not(:first-child) {
	/**
	 * will create a divider between the buttons,
	 * not matter how much buttons exists in the container.
	 */
	border-inline-start: 1px solid #d5dadf;
  }
`;
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/alert-dialog/alert-dialog-description.js
	var AlertDialogDescription;
	var init_alert_dialog_description = __esmMin((() => {
		init_index_module$5();
		init_styled_components_browser_esm();
		init_objectSpread2();
		AlertDialogDescription = qe(Description)`
  all: revert;

  font-family: Roboto, sans-serif !important;
  font-size: 13px !important;
  font-weight: 500 !important;
  text-transform: none !important;
  font-style: normal !important;
  text-decoration: none !important;
  line-height: normal !important;
  letter-spacing: normal !important;
  word-spacing: normal !important;
  margin: 0 !important;
  color: #495157 !important;
`;
		AlertDialogDescription.propTypes = _objectSpread2({}, Description.propTypes);
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/alert-dialog/alert-dialog-cancel.js
	var AlertDialogCancel;
	var init_alert_dialog_cancel = __esmMin((() => {
		init_index_module$5();
		init_styled_components_browser_esm();
		init_button_base();
		init_objectSpread2();
		AlertDialogCancel = qe(ButtonBase).attrs(() => ({ as: Cancel }))`
  --color: #6d7882;
  --padding: 13px;
  --font-size: 16px;
  --border: none;

  margin: 0;
  flex-grow: 1;
  transition: 0.2s all;
  border-radius: 0;

  &:focus, &:hover {
    --background: #f1f3f5;
	--color: #6d7882;
  }
`;
		AlertDialogCancel.propTypes = _objectSpread2({}, Cancel.propTypes);
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/alert-dialog/alert-dialog-action.js
	var AlertDialogAction;
	var init_alert_dialog_action = __esmMin((() => {
		init_index_module$5();
		init_styled_components_browser_esm();
		init_button_base();
		init_objectSpread2();
		AlertDialogAction = qe(ButtonBase).attrs(() => ({ as: Action }))`

  --font-size: 16px;
  --color: #b01b1b;
  --padding: 13px;

  margin: 0;
  flex-grow: 1;
  transition: 0.2s all;
  border: none;
  border-radius: 0;

  &:focus, &:hover {
	--background: #f1f3f5;
	--color: #b01b1b;
  }
`;
		AlertDialogAction.propTypes = _objectSpread2({}, Action.propTypes);
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/alert-dialog/alert-dialog.js
	var AlertDialog;
	var init_alert_dialog = __esmMin((() => {
		init_index_module$5();
		init_alert_dialog_content();
		init_alert_dialog_title();
		init_alert_dialog_description_container();
		init_alert_dialog_actions_container();
		init_alert_dialog_description();
		init_alert_dialog_cancel();
		init_alert_dialog_action();
		AlertDialog = Root$2;
		AlertDialog.Trigger = Trigger;
		AlertDialog.Content = AlertDialogContent;
		AlertDialog.Description = AlertDialogDescription;
		AlertDialog.DescriptionContainer = AlertDialogDescriptionContainer;
		AlertDialog.ActionsContainer = AlertDialogActionsContainer;
		AlertDialog.Title = AlertDialogTitle;
		AlertDialog.Cancel = AlertDialogCancel;
		AlertDialog.Action = AlertDialogAction;
		AlertDialog.propTypes = Root$2.propTypes;
	}));
	//#endregion
	//#region modules/notes/assets/js/app/models/base-model.js
	var BaseModel;
	var init_base_model = __esmMin((() => {
		BaseModel = class {
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
	}));
	//#endregion
	//#region modules/notes/assets/js/app/models/user.js
	var User;
	var init_user = __esmMin((() => {
		init_base_model();
		init_defineProperty();
		User = class User extends BaseModel {
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
	}));
	//#endregion
	//#region modules/notes/assets/js/app/models/document.js
	var Document;
	var init_document = __esmMin((() => {
		init_base_model();
		init_defineProperty();
		Document = class Document extends BaseModel {
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
	}));
	//#endregion
	//#region modules/notes/assets/js/app/models/note.js
	var Note;
	var init_note = __esmMin((() => {
		init_base_model();
		init_user();
		init_document();
		init_defineProperty();
		Note = class Note extends BaseModel {
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
	}));
	//#endregion
	//#region modules/notes/assets/js/app/hooks/use-watch.js
	/**
	* A util to trigger a callback only when the value changed except the first render.
	*
	* @param {Function} callback
	* @param {Array}    deps
	*/
	function useWatch(callback, deps) {
		const isFirstRender = useRef$13(true);
		useEffect$12(() => {
			if (isFirstRender.current) {
				isFirstRender.current = false;
				return;
			}
			callback();
		}, deps);
	}
	var useEffect$12, useRef$13;
	var init_use_watch = __esmMin((() => {
		({useEffect: useEffect$12, useRef: useRef$13} = react.default);
	}));
	//#endregion
	//#region modules/notes/assets/js/app/hooks/use-notes-config.js
	/**
	* Returns notes configuration
	*
	* @return {Object} config
	*/
	function useNotesConfig() {
		return (0, react.useMemo)(() => window.top.$e.components.get("notes").config, []);
	}
	var init_use_notes_config = __esmMin((() => {}));
	//#endregion
	//#region node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
	function _setPrototypeOf(t, e) {
		return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
			return t.__proto__ = e, t;
		}, _setPrototypeOf(t, e);
	}
	var init_setPrototypeOf = __esmMin((() => {}));
	//#endregion
	//#region node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
	function _inheritsLoose(t, o) {
		t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
	}
	var init_inheritsLoose = __esmMin((() => {
		init_setPrototypeOf();
	}));
	//#endregion
	//#region node_modules/react-query/es/core/subscribable.js
	var Subscribable;
	var init_subscribable = __esmMin((() => {
		Subscribable = /*#__PURE__*/ function() {
			function Subscribable() {
				this.listeners = [];
			}
			var _proto = Subscribable.prototype;
			_proto.subscribe = function subscribe(listener) {
				var _this = this;
				var callback = listener || function() {};
				this.listeners.push(callback);
				this.onSubscribe();
				return function() {
					_this.listeners = _this.listeners.filter(function(x) {
						return x !== callback;
					});
					_this.onUnsubscribe();
				};
			};
			_proto.hasListeners = function hasListeners() {
				return this.listeners.length > 0;
			};
			_proto.onSubscribe = function onSubscribe() {};
			_proto.onUnsubscribe = function onUnsubscribe() {};
			return Subscribable;
		}();
	}));
	//#endregion
	//#region node_modules/react-query/es/core/utils.js
	function noop() {}
	function functionalUpdate(updater, input) {
		return typeof updater === "function" ? updater(input) : updater;
	}
	function isValidTimeout(value) {
		return typeof value === "number" && value >= 0 && value !== Infinity;
	}
	function ensureQueryKeyArray(value) {
		return Array.isArray(value) ? value : [value];
	}
	function timeUntilStale(updatedAt, staleTime) {
		return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
	}
	function parseQueryArgs(arg1, arg2, arg3) {
		if (!isQueryKey(arg1)) return arg1;
		if (typeof arg2 === "function") return _extends({}, arg3, {
			queryKey: arg1,
			queryFn: arg2
		});
		return _extends({}, arg2, { queryKey: arg1 });
	}
	function parseMutationArgs(arg1, arg2, arg3) {
		if (isQueryKey(arg1)) {
			if (typeof arg2 === "function") return _extends({}, arg3, {
				mutationKey: arg1,
				mutationFn: arg2
			});
			return _extends({}, arg2, { mutationKey: arg1 });
		}
		if (typeof arg1 === "function") return _extends({}, arg2, { mutationFn: arg1 });
		return _extends({}, arg1);
	}
	function parseFilterArgs(arg1, arg2, arg3) {
		return isQueryKey(arg1) ? [_extends({}, arg2, { queryKey: arg1 }), arg3] : [arg1 || {}, arg2];
	}
	function mapQueryStatusFilter(active, inactive) {
		if (active === true && inactive === true || active == null && inactive == null) return "all";
		else if (active === false && inactive === false) return "none";
		else return (active != null ? active : !inactive) ? "active" : "inactive";
	}
	function matchQuery(filters, query) {
		var active = filters.active;
		var exact = filters.exact;
		var fetching = filters.fetching;
		var inactive = filters.inactive;
		var predicate = filters.predicate;
		var queryKey = filters.queryKey;
		var stale = filters.stale;
		if (isQueryKey(queryKey)) {
			if (exact) {
				if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) return false;
			} else if (!partialMatchKey(query.queryKey, queryKey)) return false;
		}
		var queryStatusFilter = mapQueryStatusFilter(active, inactive);
		if (queryStatusFilter === "none") return false;
		else if (queryStatusFilter !== "all") {
			var isActive = query.isActive();
			if (queryStatusFilter === "active" && !isActive) return false;
			if (queryStatusFilter === "inactive" && isActive) return false;
		}
		if (typeof stale === "boolean" && query.isStale() !== stale) return false;
		if (typeof fetching === "boolean" && query.isFetching() !== fetching) return false;
		if (predicate && !predicate(query)) return false;
		return true;
	}
	function matchMutation(filters, mutation) {
		var exact = filters.exact;
		var fetching = filters.fetching;
		var predicate = filters.predicate;
		var mutationKey = filters.mutationKey;
		if (isQueryKey(mutationKey)) {
			if (!mutation.options.mutationKey) return false;
			if (exact) {
				if (hashQueryKey(mutation.options.mutationKey) !== hashQueryKey(mutationKey)) return false;
			} else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) return false;
		}
		if (typeof fetching === "boolean" && mutation.state.status === "loading" !== fetching) return false;
		if (predicate && !predicate(mutation)) return false;
		return true;
	}
	function hashQueryKeyByOptions(queryKey, options) {
		return ((options == null ? void 0 : options.queryKeyHashFn) || hashQueryKey)(queryKey);
	}
	/**
	* Default query keys hash function.
	*/
	function hashQueryKey(queryKey) {
		return stableValueHash(ensureQueryKeyArray(queryKey));
	}
	/**
	* Hashes the value into a stable hash.
	*/
	function stableValueHash(value) {
		return JSON.stringify(value, function(_, val) {
			return isPlainObject(val) ? Object.keys(val).sort().reduce(function(result, key) {
				result[key] = val[key];
				return result;
			}, {}) : val;
		});
	}
	/**
	* Checks if key `b` partially matches with key `a`.
	*/
	function partialMatchKey(a, b) {
		return partialDeepEqual(ensureQueryKeyArray(a), ensureQueryKeyArray(b));
	}
	/**
	* Checks if `b` partially matches with `a`.
	*/
	function partialDeepEqual(a, b) {
		if (a === b) return true;
		if (typeof a !== typeof b) return false;
		if (a && b && typeof a === "object" && typeof b === "object") return !Object.keys(b).some(function(key) {
			return !partialDeepEqual(a[key], b[key]);
		});
		return false;
	}
	/**
	* This function returns `a` if `b` is deeply equal.
	* If not, it will replace any deeply equal children of `b` with those of `a`.
	* This can be used for structural sharing between JSON values for example.
	*/
	function replaceEqualDeep(a, b) {
		if (a === b) return a;
		var array = Array.isArray(a) && Array.isArray(b);
		if (array || isPlainObject(a) && isPlainObject(b)) {
			var aSize = array ? a.length : Object.keys(a).length;
			var bItems = array ? b : Object.keys(b);
			var bSize = bItems.length;
			var copy = array ? [] : {};
			var equalItems = 0;
			for (var i = 0; i < bSize; i++) {
				var key = array ? i : bItems[i];
				copy[key] = replaceEqualDeep(a[key], b[key]);
				if (copy[key] === a[key]) equalItems++;
			}
			return aSize === bSize && equalItems === aSize ? a : copy;
		}
		return b;
	}
	/**
	* Shallow compare objects. Only works with objects that always have the same properties.
	*/
	function shallowEqualObjects(a, b) {
		if (a && !b || b && !a) return false;
		for (var key in a) if (a[key] !== b[key]) return false;
		return true;
	}
	function isPlainObject(o) {
		if (!hasObjectPrototype(o)) return false;
		var ctor = o.constructor;
		if (typeof ctor === "undefined") return true;
		var prot = ctor.prototype;
		if (!hasObjectPrototype(prot)) return false;
		if (!prot.hasOwnProperty("isPrototypeOf")) return false;
		return true;
	}
	function hasObjectPrototype(o) {
		return Object.prototype.toString.call(o) === "[object Object]";
	}
	function isQueryKey(value) {
		return typeof value === "string" || Array.isArray(value);
	}
	function sleep(timeout) {
		return new Promise(function(resolve) {
			setTimeout(resolve, timeout);
		});
	}
	/**
	* Schedules a microtask.
	* This can be useful to schedule state updates after rendering.
	*/
	function scheduleMicrotask(callback) {
		Promise.resolve().then(callback).catch(function(error) {
			return setTimeout(function() {
				throw error;
			});
		});
	}
	function getAbortController() {
		if (typeof AbortController === "function") return new AbortController();
	}
	var isServer;
	var init_utils$1 = __esmMin((() => {
		init_extends();
		isServer = typeof window === "undefined";
	}));
	//#endregion
	//#region node_modules/react-query/es/core/focusManager.js
	var FocusManager, focusManager;
	var init_focusManager = __esmMin((() => {
		init_inheritsLoose();
		init_subscribable();
		init_utils$1();
		FocusManager = /*#__PURE__*/ function(_Subscribable) {
			_inheritsLoose(FocusManager, _Subscribable);
			function FocusManager() {
				var _this = _Subscribable.call(this) || this;
				_this.setup = function(onFocus) {
					var _window;
					if (!isServer && ((_window = window) == null ? void 0 : _window.addEventListener)) {
						var listener = function listener() {
							return onFocus();
						};
						window.addEventListener("visibilitychange", listener, false);
						window.addEventListener("focus", listener, false);
						return function() {
							window.removeEventListener("visibilitychange", listener);
							window.removeEventListener("focus", listener);
						};
					}
				};
				return _this;
			}
			var _proto = FocusManager.prototype;
			_proto.onSubscribe = function onSubscribe() {
				if (!this.cleanup) this.setEventListener(this.setup);
			};
			_proto.onUnsubscribe = function onUnsubscribe() {
				if (!this.hasListeners()) {
					var _this$cleanup;
					(_this$cleanup = this.cleanup) == null || _this$cleanup.call(this);
					this.cleanup = void 0;
				}
			};
			_proto.setEventListener = function setEventListener(setup) {
				var _this$cleanup2;
				var _this2 = this;
				this.setup = setup;
				(_this$cleanup2 = this.cleanup) == null || _this$cleanup2.call(this);
				this.cleanup = setup(function(focused) {
					if (typeof focused === "boolean") _this2.setFocused(focused);
					else _this2.onFocus();
				});
			};
			_proto.setFocused = function setFocused(focused) {
				this.focused = focused;
				if (focused) this.onFocus();
			};
			_proto.onFocus = function onFocus() {
				this.listeners.forEach(function(listener) {
					listener();
				});
			};
			_proto.isFocused = function isFocused() {
				if (typeof this.focused === "boolean") return this.focused;
				if (typeof document === "undefined") return true;
				return [
					void 0,
					"visible",
					"prerender"
				].includes(document.visibilityState);
			};
			return FocusManager;
		}(Subscribable);
		focusManager = new FocusManager();
	}));
	//#endregion
	//#region node_modules/react-query/es/core/onlineManager.js
	var OnlineManager, onlineManager;
	var init_onlineManager = __esmMin((() => {
		init_inheritsLoose();
		init_subscribable();
		init_utils$1();
		OnlineManager = /*#__PURE__*/ function(_Subscribable) {
			_inheritsLoose(OnlineManager, _Subscribable);
			function OnlineManager() {
				var _this = _Subscribable.call(this) || this;
				_this.setup = function(onOnline) {
					var _window;
					if (!isServer && ((_window = window) == null ? void 0 : _window.addEventListener)) {
						var listener = function listener() {
							return onOnline();
						};
						window.addEventListener("online", listener, false);
						window.addEventListener("offline", listener, false);
						return function() {
							window.removeEventListener("online", listener);
							window.removeEventListener("offline", listener);
						};
					}
				};
				return _this;
			}
			var _proto = OnlineManager.prototype;
			_proto.onSubscribe = function onSubscribe() {
				if (!this.cleanup) this.setEventListener(this.setup);
			};
			_proto.onUnsubscribe = function onUnsubscribe() {
				if (!this.hasListeners()) {
					var _this$cleanup;
					(_this$cleanup = this.cleanup) == null || _this$cleanup.call(this);
					this.cleanup = void 0;
				}
			};
			_proto.setEventListener = function setEventListener(setup) {
				var _this$cleanup2;
				var _this2 = this;
				this.setup = setup;
				(_this$cleanup2 = this.cleanup) == null || _this$cleanup2.call(this);
				this.cleanup = setup(function(online) {
					if (typeof online === "boolean") _this2.setOnline(online);
					else _this2.onOnline();
				});
			};
			_proto.setOnline = function setOnline(online) {
				this.online = online;
				if (online) this.onOnline();
			};
			_proto.onOnline = function onOnline() {
				this.listeners.forEach(function(listener) {
					listener();
				});
			};
			_proto.isOnline = function isOnline() {
				if (typeof this.online === "boolean") return this.online;
				if (typeof navigator === "undefined" || typeof navigator.onLine === "undefined") return true;
				return navigator.onLine;
			};
			return OnlineManager;
		}(Subscribable);
		onlineManager = new OnlineManager();
	}));
	//#endregion
	//#region node_modules/react-query/es/core/retryer.js
	function defaultRetryDelay(failureCount) {
		return Math.min(1e3 * Math.pow(2, failureCount), 3e4);
	}
	function isCancelable(value) {
		return typeof (value == null ? void 0 : value.cancel) === "function";
	}
	function isCancelledError(value) {
		return value instanceof CancelledError;
	}
	var CancelledError, Retryer;
	var init_retryer = __esmMin((() => {
		init_focusManager();
		init_onlineManager();
		init_utils$1();
		CancelledError = function CancelledError(options) {
			this.revert = options == null ? void 0 : options.revert;
			this.silent = options == null ? void 0 : options.silent;
		};
		Retryer = function Retryer(config) {
			var _this = this;
			var cancelRetry = false;
			var cancelFn;
			var continueFn;
			var promiseResolve;
			var promiseReject;
			this.abort = config.abort;
			this.cancel = function(cancelOptions) {
				return cancelFn == null ? void 0 : cancelFn(cancelOptions);
			};
			this.cancelRetry = function() {
				cancelRetry = true;
			};
			this.continueRetry = function() {
				cancelRetry = false;
			};
			this.continue = function() {
				return continueFn == null ? void 0 : continueFn();
			};
			this.failureCount = 0;
			this.isPaused = false;
			this.isResolved = false;
			this.isTransportCancelable = false;
			this.promise = new Promise(function(outerResolve, outerReject) {
				promiseResolve = outerResolve;
				promiseReject = outerReject;
			});
			var resolve = function resolve(value) {
				if (!_this.isResolved) {
					_this.isResolved = true;
					config.onSuccess == null || config.onSuccess(value);
					continueFn == null || continueFn();
					promiseResolve(value);
				}
			};
			var reject = function reject(value) {
				if (!_this.isResolved) {
					_this.isResolved = true;
					config.onError == null || config.onError(value);
					continueFn == null || continueFn();
					promiseReject(value);
				}
			};
			var pause = function pause() {
				return new Promise(function(continueResolve) {
					continueFn = continueResolve;
					_this.isPaused = true;
					config.onPause == null || config.onPause();
				}).then(function() {
					continueFn = void 0;
					_this.isPaused = false;
					config.onContinue == null || config.onContinue();
				});
			};
			(function run() {
				if (_this.isResolved) return;
				var promiseOrValue;
				try {
					promiseOrValue = config.fn();
				} catch (error) {
					promiseOrValue = Promise.reject(error);
				}
				cancelFn = function cancelFn(cancelOptions) {
					if (!_this.isResolved) {
						reject(new CancelledError(cancelOptions));
						_this.abort == null || _this.abort();
						if (isCancelable(promiseOrValue)) try {
							promiseOrValue.cancel();
						} catch (_unused) {}
					}
				};
				_this.isTransportCancelable = isCancelable(promiseOrValue);
				Promise.resolve(promiseOrValue).then(resolve).catch(function(error) {
					var _config$retry;
					var _config$retryDelay;
					if (_this.isResolved) return;
					var retry = (_config$retry = config.retry) != null ? _config$retry : 3;
					var retryDelay = (_config$retryDelay = config.retryDelay) != null ? _config$retryDelay : defaultRetryDelay;
					var delay = typeof retryDelay === "function" ? retryDelay(_this.failureCount, error) : retryDelay;
					var shouldRetry = retry === true || typeof retry === "number" && _this.failureCount < retry || typeof retry === "function" && retry(_this.failureCount, error);
					if (cancelRetry || !shouldRetry) {
						reject(error);
						return;
					}
					_this.failureCount++;
					config.onFail == null || config.onFail(_this.failureCount, error);
					sleep(delay).then(function() {
						if (!focusManager.isFocused() || !onlineManager.isOnline()) return pause();
					}).then(function() {
						if (cancelRetry) reject(error);
						else run();
					});
				});
			})();
		};
	}));
	//#endregion
	//#region node_modules/react-query/es/core/notifyManager.js
	var NotifyManager, notifyManager;
	var init_notifyManager = __esmMin((() => {
		init_utils$1();
		NotifyManager = /*#__PURE__*/ function() {
			function NotifyManager() {
				this.queue = [];
				this.transactions = 0;
				this.notifyFn = function(callback) {
					callback();
				};
				this.batchNotifyFn = function(callback) {
					callback();
				};
			}
			var _proto = NotifyManager.prototype;
			_proto.batch = function batch(callback) {
				var result;
				this.transactions++;
				try {
					result = callback();
				} finally {
					this.transactions--;
					if (!this.transactions) this.flush();
				}
				return result;
			};
			_proto.schedule = function schedule(callback) {
				var _this = this;
				if (this.transactions) this.queue.push(callback);
				else scheduleMicrotask(function() {
					_this.notifyFn(callback);
				});
			};
			_proto.batchCalls = function batchCalls(callback) {
				var _this2 = this;
				return function() {
					for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
					_this2.schedule(function() {
						callback.apply(void 0, args);
					});
				};
			};
			_proto.flush = function flush() {
				var _this3 = this;
				var queue = this.queue;
				this.queue = [];
				if (queue.length) scheduleMicrotask(function() {
					_this3.batchNotifyFn(function() {
						queue.forEach(function(callback) {
							_this3.notifyFn(callback);
						});
					});
				});
			};
			_proto.setNotifyFunction = function setNotifyFunction(fn) {
				this.notifyFn = fn;
			};
			_proto.setBatchNotifyFunction = function setBatchNotifyFunction(fn) {
				this.batchNotifyFn = fn;
			};
			return NotifyManager;
		}();
		notifyManager = new NotifyManager();
	}));
	//#endregion
	//#region node_modules/react-query/es/core/logger.js
	function getLogger() {
		return logger$1;
	}
	function setLogger(newLogger) {
		logger$1 = newLogger;
	}
	var logger$1;
	var init_logger$1 = __esmMin((() => {
		logger$1 = console;
	}));
	//#endregion
	//#region node_modules/react-query/es/core/query.js
	var Query;
	var init_query = __esmMin((() => {
		init_extends();
		init_utils$1();
		init_notifyManager();
		init_logger$1();
		init_retryer();
		Query = /*#__PURE__*/ function() {
			function Query(config) {
				this.abortSignalConsumed = false;
				this.hadObservers = false;
				this.defaultOptions = config.defaultOptions;
				this.setOptions(config.options);
				this.observers = [];
				this.cache = config.cache;
				this.queryKey = config.queryKey;
				this.queryHash = config.queryHash;
				this.initialState = config.state || this.getDefaultState(this.options);
				this.state = this.initialState;
				this.meta = config.meta;
				this.scheduleGc();
			}
			var _proto = Query.prototype;
			_proto.setOptions = function setOptions(options) {
				var _this$options$cacheTi;
				this.options = _extends({}, this.defaultOptions, options);
				this.meta = options == null ? void 0 : options.meta;
				this.cacheTime = Math.max(this.cacheTime || 0, (_this$options$cacheTi = this.options.cacheTime) != null ? _this$options$cacheTi : 300 * 1e3);
			};
			_proto.setDefaultOptions = function setDefaultOptions(options) {
				this.defaultOptions = options;
			};
			_proto.scheduleGc = function scheduleGc() {
				var _this = this;
				this.clearGcTimeout();
				if (isValidTimeout(this.cacheTime)) this.gcTimeout = setTimeout(function() {
					_this.optionalRemove();
				}, this.cacheTime);
			};
			_proto.clearGcTimeout = function clearGcTimeout() {
				if (this.gcTimeout) {
					clearTimeout(this.gcTimeout);
					this.gcTimeout = void 0;
				}
			};
			_proto.optionalRemove = function optionalRemove() {
				if (!this.observers.length) if (this.state.isFetching) {
					if (this.hadObservers) this.scheduleGc();
				} else this.cache.remove(this);
			};
			_proto.setData = function setData(updater, options) {
				var _this$options$isDataE;
				var _this$options;
				var prevData = this.state.data;
				var data = functionalUpdate(updater, prevData);
				if ((_this$options$isDataE = (_this$options = this.options).isDataEqual) == null ? void 0 : _this$options$isDataE.call(_this$options, prevData, data)) data = prevData;
				else if (this.options.structuralSharing !== false) data = replaceEqualDeep(prevData, data);
				this.dispatch({
					data,
					type: "success",
					dataUpdatedAt: options == null ? void 0 : options.updatedAt
				});
				return data;
			};
			_proto.setState = function setState(state, setStateOptions) {
				this.dispatch({
					type: "setState",
					state,
					setStateOptions
				});
			};
			_proto.cancel = function cancel(options) {
				var _this$retryer;
				var promise = this.promise;
				(_this$retryer = this.retryer) == null || _this$retryer.cancel(options);
				return promise ? promise.then(noop).catch(noop) : Promise.resolve();
			};
			_proto.destroy = function destroy() {
				this.clearGcTimeout();
				this.cancel({ silent: true });
			};
			_proto.reset = function reset() {
				this.destroy();
				this.setState(this.initialState);
			};
			_proto.isActive = function isActive() {
				return this.observers.some(function(observer) {
					return observer.options.enabled !== false;
				});
			};
			_proto.isFetching = function isFetching() {
				return this.state.isFetching;
			};
			_proto.isStale = function isStale() {
				return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some(function(observer) {
					return observer.getCurrentResult().isStale;
				});
			};
			_proto.isStaleByTime = function isStaleByTime(staleTime) {
				if (staleTime === void 0) staleTime = 0;
				return this.state.isInvalidated || !this.state.dataUpdatedAt || !timeUntilStale(this.state.dataUpdatedAt, staleTime);
			};
			_proto.onFocus = function onFocus() {
				var _this$retryer2;
				var observer = this.observers.find(function(x) {
					return x.shouldFetchOnWindowFocus();
				});
				if (observer) observer.refetch();
				(_this$retryer2 = this.retryer) == null || _this$retryer2.continue();
			};
			_proto.onOnline = function onOnline() {
				var _this$retryer3;
				var observer = this.observers.find(function(x) {
					return x.shouldFetchOnReconnect();
				});
				if (observer) observer.refetch();
				(_this$retryer3 = this.retryer) == null || _this$retryer3.continue();
			};
			_proto.addObserver = function addObserver(observer) {
				if (this.observers.indexOf(observer) === -1) {
					this.observers.push(observer);
					this.hadObservers = true;
					this.clearGcTimeout();
					this.cache.notify({
						type: "observerAdded",
						query: this,
						observer
					});
				}
			};
			_proto.removeObserver = function removeObserver(observer) {
				if (this.observers.indexOf(observer) !== -1) {
					this.observers = this.observers.filter(function(x) {
						return x !== observer;
					});
					if (!this.observers.length) {
						if (this.retryer) if (this.retryer.isTransportCancelable || this.abortSignalConsumed) this.retryer.cancel({ revert: true });
						else this.retryer.cancelRetry();
						if (this.cacheTime) this.scheduleGc();
						else this.cache.remove(this);
					}
					this.cache.notify({
						type: "observerRemoved",
						query: this,
						observer
					});
				}
			};
			_proto.getObserversCount = function getObserversCount() {
				return this.observers.length;
			};
			_proto.invalidate = function invalidate() {
				if (!this.state.isInvalidated) this.dispatch({ type: "invalidate" });
			};
			_proto.fetch = function fetch(options, fetchOptions) {
				var _this2 = this;
				var _this$options$behavio;
				var _context$fetchOptions;
				var _abortController$abor;
				if (this.state.isFetching) {
					if (this.state.dataUpdatedAt && (fetchOptions == null ? void 0 : fetchOptions.cancelRefetch)) this.cancel({ silent: true });
					else if (this.promise) {
						var _this$retryer4;
						(_this$retryer4 = this.retryer) == null || _this$retryer4.continueRetry();
						return this.promise;
					}
				}
				if (options) this.setOptions(options);
				if (!this.options.queryFn) {
					var observer = this.observers.find(function(x) {
						return x.options.queryFn;
					});
					if (observer) this.setOptions(observer.options);
				}
				var queryKey = ensureQueryKeyArray(this.queryKey);
				var abortController = getAbortController();
				var queryFnContext = {
					queryKey,
					pageParam: void 0,
					meta: this.meta
				};
				Object.defineProperty(queryFnContext, "signal", {
					enumerable: true,
					get: function get() {
						if (abortController) {
							_this2.abortSignalConsumed = true;
							return abortController.signal;
						}
					}
				});
				var context = {
					fetchOptions,
					options: this.options,
					queryKey,
					state: this.state,
					fetchFn: function fetchFn() {
						if (!_this2.options.queryFn) return Promise.reject("Missing queryFn");
						_this2.abortSignalConsumed = false;
						return _this2.options.queryFn(queryFnContext);
					},
					meta: this.meta
				};
				if ((_this$options$behavio = this.options.behavior) == null ? void 0 : _this$options$behavio.onFetch) {
					var _this$options$behavio2;
					(_this$options$behavio2 = this.options.behavior) == null || _this$options$behavio2.onFetch(context);
				}
				this.revertState = this.state;
				if (!this.state.isFetching || this.state.fetchMeta !== ((_context$fetchOptions = context.fetchOptions) == null ? void 0 : _context$fetchOptions.meta)) {
					var _context$fetchOptions2;
					this.dispatch({
						type: "fetch",
						meta: (_context$fetchOptions2 = context.fetchOptions) == null ? void 0 : _context$fetchOptions2.meta
					});
				}
				this.retryer = new Retryer({
					fn: context.fetchFn,
					abort: abortController == null ? void 0 : (_abortController$abor = abortController.abort) == null ? void 0 : _abortController$abor.bind(abortController),
					onSuccess: function onSuccess(data) {
						_this2.setData(data);
						_this2.cache.config.onSuccess == null || _this2.cache.config.onSuccess(data, _this2);
						if (_this2.cacheTime === 0) _this2.optionalRemove();
					},
					onError: function onError(error) {
						if (!(isCancelledError(error) && error.silent)) _this2.dispatch({
							type: "error",
							error
						});
						if (!isCancelledError(error)) {
							_this2.cache.config.onError == null || _this2.cache.config.onError(error, _this2);
							getLogger().error(error);
						}
						if (_this2.cacheTime === 0) _this2.optionalRemove();
					},
					onFail: function onFail() {
						_this2.dispatch({ type: "failed" });
					},
					onPause: function onPause() {
						_this2.dispatch({ type: "pause" });
					},
					onContinue: function onContinue() {
						_this2.dispatch({ type: "continue" });
					},
					retry: context.options.retry,
					retryDelay: context.options.retryDelay
				});
				this.promise = this.retryer.promise;
				return this.promise;
			};
			_proto.dispatch = function dispatch(action) {
				var _this3 = this;
				this.state = this.reducer(this.state, action);
				notifyManager.batch(function() {
					_this3.observers.forEach(function(observer) {
						observer.onQueryUpdate(action);
					});
					_this3.cache.notify({
						query: _this3,
						type: "queryUpdated",
						action
					});
				});
			};
			_proto.getDefaultState = function getDefaultState(options) {
				var data = typeof options.initialData === "function" ? options.initialData() : options.initialData;
				var initialDataUpdatedAt = typeof options.initialData !== "undefined" ? typeof options.initialDataUpdatedAt === "function" ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
				var hasData = typeof data !== "undefined";
				return {
					data,
					dataUpdateCount: 0,
					dataUpdatedAt: hasData ? initialDataUpdatedAt != null ? initialDataUpdatedAt : Date.now() : 0,
					error: null,
					errorUpdateCount: 0,
					errorUpdatedAt: 0,
					fetchFailureCount: 0,
					fetchMeta: null,
					isFetching: false,
					isInvalidated: false,
					isPaused: false,
					status: hasData ? "success" : "idle"
				};
			};
			_proto.reducer = function reducer(state, action) {
				var _action$meta;
				var _action$dataUpdatedAt;
				switch (action.type) {
					case "failed": return _extends({}, state, { fetchFailureCount: state.fetchFailureCount + 1 });
					case "pause": return _extends({}, state, { isPaused: true });
					case "continue": return _extends({}, state, { isPaused: false });
					case "fetch": return _extends({}, state, {
						fetchFailureCount: 0,
						fetchMeta: (_action$meta = action.meta) != null ? _action$meta : null,
						isFetching: true,
						isPaused: false
					}, !state.dataUpdatedAt && {
						error: null,
						status: "loading"
					});
					case "success": return _extends({}, state, {
						data: action.data,
						dataUpdateCount: state.dataUpdateCount + 1,
						dataUpdatedAt: (_action$dataUpdatedAt = action.dataUpdatedAt) != null ? _action$dataUpdatedAt : Date.now(),
						error: null,
						fetchFailureCount: 0,
						isFetching: false,
						isInvalidated: false,
						isPaused: false,
						status: "success"
					});
					case "error":
						var error = action.error;
						if (isCancelledError(error) && error.revert && this.revertState) return _extends({}, this.revertState);
						return _extends({}, state, {
							error,
							errorUpdateCount: state.errorUpdateCount + 1,
							errorUpdatedAt: Date.now(),
							fetchFailureCount: state.fetchFailureCount + 1,
							isFetching: false,
							isPaused: false,
							status: "error"
						});
					case "invalidate": return _extends({}, state, { isInvalidated: true });
					case "setState": return _extends({}, state, action.state);
					default: return state;
				}
			};
			return Query;
		}();
	}));
	//#endregion
	//#region node_modules/react-query/es/core/queryCache.js
	var QueryCache;
	var init_queryCache = __esmMin((() => {
		init_inheritsLoose();
		init_utils$1();
		init_query();
		init_notifyManager();
		init_subscribable();
		QueryCache = /*#__PURE__*/ function(_Subscribable) {
			_inheritsLoose(QueryCache, _Subscribable);
			function QueryCache(config) {
				var _this = _Subscribable.call(this) || this;
				_this.config = config || {};
				_this.queries = [];
				_this.queriesMap = {};
				return _this;
			}
			var _proto = QueryCache.prototype;
			_proto.build = function build(client, options, state) {
				var _options$queryHash;
				var queryKey = options.queryKey;
				var queryHash = (_options$queryHash = options.queryHash) != null ? _options$queryHash : hashQueryKeyByOptions(queryKey, options);
				var query = this.get(queryHash);
				if (!query) {
					query = new Query({
						cache: this,
						queryKey,
						queryHash,
						options: client.defaultQueryOptions(options),
						state,
						defaultOptions: client.getQueryDefaults(queryKey),
						meta: options.meta
					});
					this.add(query);
				}
				return query;
			};
			_proto.add = function add(query) {
				if (!this.queriesMap[query.queryHash]) {
					this.queriesMap[query.queryHash] = query;
					this.queries.push(query);
					this.notify({
						type: "queryAdded",
						query
					});
				}
			};
			_proto.remove = function remove(query) {
				var queryInMap = this.queriesMap[query.queryHash];
				if (queryInMap) {
					query.destroy();
					this.queries = this.queries.filter(function(x) {
						return x !== query;
					});
					if (queryInMap === query) delete this.queriesMap[query.queryHash];
					this.notify({
						type: "queryRemoved",
						query
					});
				}
			};
			_proto.clear = function clear() {
				var _this2 = this;
				notifyManager.batch(function() {
					_this2.queries.forEach(function(query) {
						_this2.remove(query);
					});
				});
			};
			_proto.get = function get(queryHash) {
				return this.queriesMap[queryHash];
			};
			_proto.getAll = function getAll() {
				return this.queries;
			};
			_proto.find = function find(arg1, arg2) {
				var filters = parseFilterArgs(arg1, arg2)[0];
				if (typeof filters.exact === "undefined") filters.exact = true;
				return this.queries.find(function(query) {
					return matchQuery(filters, query);
				});
			};
			_proto.findAll = function findAll(arg1, arg2) {
				var filters = parseFilterArgs(arg1, arg2)[0];
				return Object.keys(filters).length > 0 ? this.queries.filter(function(query) {
					return matchQuery(filters, query);
				}) : this.queries;
			};
			_proto.notify = function notify(event) {
				var _this3 = this;
				notifyManager.batch(function() {
					_this3.listeners.forEach(function(listener) {
						listener(event);
					});
				});
			};
			_proto.onFocus = function onFocus() {
				var _this4 = this;
				notifyManager.batch(function() {
					_this4.queries.forEach(function(query) {
						query.onFocus();
					});
				});
			};
			_proto.onOnline = function onOnline() {
				var _this5 = this;
				notifyManager.batch(function() {
					_this5.queries.forEach(function(query) {
						query.onOnline();
					});
				});
			};
			return QueryCache;
		}(Subscribable);
	}));
	//#endregion
	//#region node_modules/react-query/es/core/mutation.js
	function getDefaultState() {
		return {
			context: void 0,
			data: void 0,
			error: null,
			failureCount: 0,
			isPaused: false,
			status: "idle",
			variables: void 0
		};
	}
	function reducer(state, action) {
		switch (action.type) {
			case "failed": return _extends({}, state, { failureCount: state.failureCount + 1 });
			case "pause": return _extends({}, state, { isPaused: true });
			case "continue": return _extends({}, state, { isPaused: false });
			case "loading": return _extends({}, state, {
				context: action.context,
				data: void 0,
				error: null,
				isPaused: false,
				status: "loading",
				variables: action.variables
			});
			case "success": return _extends({}, state, {
				data: action.data,
				error: null,
				status: "success",
				isPaused: false
			});
			case "error": return _extends({}, state, {
				data: void 0,
				error: action.error,
				failureCount: state.failureCount + 1,
				isPaused: false,
				status: "error"
			});
			case "setState": return _extends({}, state, action.state);
			default: return state;
		}
	}
	var Mutation;
	var init_mutation = __esmMin((() => {
		init_extends();
		init_logger$1();
		init_notifyManager();
		init_retryer();
		init_utils$1();
		Mutation = /*#__PURE__*/ function() {
			function Mutation(config) {
				this.options = _extends({}, config.defaultOptions, config.options);
				this.mutationId = config.mutationId;
				this.mutationCache = config.mutationCache;
				this.observers = [];
				this.state = config.state || getDefaultState();
				this.meta = config.meta;
			}
			var _proto = Mutation.prototype;
			_proto.setState = function setState(state) {
				this.dispatch({
					type: "setState",
					state
				});
			};
			_proto.addObserver = function addObserver(observer) {
				if (this.observers.indexOf(observer) === -1) this.observers.push(observer);
			};
			_proto.removeObserver = function removeObserver(observer) {
				this.observers = this.observers.filter(function(x) {
					return x !== observer;
				});
			};
			_proto.cancel = function cancel() {
				if (this.retryer) {
					this.retryer.cancel();
					return this.retryer.promise.then(noop).catch(noop);
				}
				return Promise.resolve();
			};
			_proto.continue = function _continue() {
				if (this.retryer) {
					this.retryer.continue();
					return this.retryer.promise;
				}
				return this.execute();
			};
			_proto.execute = function execute() {
				var _this = this;
				var data;
				var restored = this.state.status === "loading";
				var promise = Promise.resolve();
				if (!restored) {
					this.dispatch({
						type: "loading",
						variables: this.options.variables
					});
					promise = promise.then(function() {
						_this.mutationCache.config.onMutate == null || _this.mutationCache.config.onMutate(_this.state.variables, _this);
					}).then(function() {
						return _this.options.onMutate == null ? void 0 : _this.options.onMutate(_this.state.variables);
					}).then(function(context) {
						if (context !== _this.state.context) _this.dispatch({
							type: "loading",
							context,
							variables: _this.state.variables
						});
					});
				}
				return promise.then(function() {
					return _this.executeMutation();
				}).then(function(result) {
					data = result;
					_this.mutationCache.config.onSuccess == null || _this.mutationCache.config.onSuccess(data, _this.state.variables, _this.state.context, _this);
				}).then(function() {
					return _this.options.onSuccess == null ? void 0 : _this.options.onSuccess(data, _this.state.variables, _this.state.context);
				}).then(function() {
					return _this.options.onSettled == null ? void 0 : _this.options.onSettled(data, null, _this.state.variables, _this.state.context);
				}).then(function() {
					_this.dispatch({
						type: "success",
						data
					});
					return data;
				}).catch(function(error) {
					_this.mutationCache.config.onError == null || _this.mutationCache.config.onError(error, _this.state.variables, _this.state.context, _this);
					getLogger().error(error);
					return Promise.resolve().then(function() {
						return _this.options.onError == null ? void 0 : _this.options.onError(error, _this.state.variables, _this.state.context);
					}).then(function() {
						return _this.options.onSettled == null ? void 0 : _this.options.onSettled(void 0, error, _this.state.variables, _this.state.context);
					}).then(function() {
						_this.dispatch({
							type: "error",
							error
						});
						throw error;
					});
				});
			};
			_proto.executeMutation = function executeMutation() {
				var _this2 = this;
				var _this$options$retry;
				this.retryer = new Retryer({
					fn: function fn() {
						if (!_this2.options.mutationFn) return Promise.reject("No mutationFn found");
						return _this2.options.mutationFn(_this2.state.variables);
					},
					onFail: function onFail() {
						_this2.dispatch({ type: "failed" });
					},
					onPause: function onPause() {
						_this2.dispatch({ type: "pause" });
					},
					onContinue: function onContinue() {
						_this2.dispatch({ type: "continue" });
					},
					retry: (_this$options$retry = this.options.retry) != null ? _this$options$retry : 0,
					retryDelay: this.options.retryDelay
				});
				return this.retryer.promise;
			};
			_proto.dispatch = function dispatch(action) {
				var _this3 = this;
				this.state = reducer(this.state, action);
				notifyManager.batch(function() {
					_this3.observers.forEach(function(observer) {
						observer.onMutationUpdate(action);
					});
					_this3.mutationCache.notify(_this3);
				});
			};
			return Mutation;
		}();
	}));
	//#endregion
	//#region node_modules/react-query/es/core/mutationCache.js
	var MutationCache;
	var init_mutationCache = __esmMin((() => {
		init_inheritsLoose();
		init_notifyManager();
		init_mutation();
		init_utils$1();
		init_subscribable();
		MutationCache = /*#__PURE__*/ function(_Subscribable) {
			_inheritsLoose(MutationCache, _Subscribable);
			function MutationCache(config) {
				var _this = _Subscribable.call(this) || this;
				_this.config = config || {};
				_this.mutations = [];
				_this.mutationId = 0;
				return _this;
			}
			var _proto = MutationCache.prototype;
			_proto.build = function build(client, options, state) {
				var mutation = new Mutation({
					mutationCache: this,
					mutationId: ++this.mutationId,
					options: client.defaultMutationOptions(options),
					state,
					defaultOptions: options.mutationKey ? client.getMutationDefaults(options.mutationKey) : void 0,
					meta: options.meta
				});
				this.add(mutation);
				return mutation;
			};
			_proto.add = function add(mutation) {
				this.mutations.push(mutation);
				this.notify(mutation);
			};
			_proto.remove = function remove(mutation) {
				this.mutations = this.mutations.filter(function(x) {
					return x !== mutation;
				});
				mutation.cancel();
				this.notify(mutation);
			};
			_proto.clear = function clear() {
				var _this2 = this;
				notifyManager.batch(function() {
					_this2.mutations.forEach(function(mutation) {
						_this2.remove(mutation);
					});
				});
			};
			_proto.getAll = function getAll() {
				return this.mutations;
			};
			_proto.find = function find(filters) {
				if (typeof filters.exact === "undefined") filters.exact = true;
				return this.mutations.find(function(mutation) {
					return matchMutation(filters, mutation);
				});
			};
			_proto.findAll = function findAll(filters) {
				return this.mutations.filter(function(mutation) {
					return matchMutation(filters, mutation);
				});
			};
			_proto.notify = function notify(mutation) {
				var _this3 = this;
				notifyManager.batch(function() {
					_this3.listeners.forEach(function(listener) {
						listener(mutation);
					});
				});
			};
			_proto.onFocus = function onFocus() {
				this.resumePausedMutations();
			};
			_proto.onOnline = function onOnline() {
				this.resumePausedMutations();
			};
			_proto.resumePausedMutations = function resumePausedMutations() {
				var pausedMutations = this.mutations.filter(function(x) {
					return x.state.isPaused;
				});
				return notifyManager.batch(function() {
					return pausedMutations.reduce(function(promise, mutation) {
						return promise.then(function() {
							return mutation.continue().catch(noop);
						});
					}, Promise.resolve());
				});
			};
			return MutationCache;
		}(Subscribable);
	}));
	//#endregion
	//#region node_modules/react-query/es/core/infiniteQueryBehavior.js
	function infiniteQueryBehavior() {
		return { onFetch: function onFetch(context) {
			context.fetchFn = function() {
				var _context$fetchOptions;
				var _context$fetchOptions2;
				var _context$fetchOptions3;
				var _context$fetchOptions4;
				var _context$state$data;
				var _context$state$data2;
				var refetchPage = (_context$fetchOptions = context.fetchOptions) == null ? void 0 : (_context$fetchOptions2 = _context$fetchOptions.meta) == null ? void 0 : _context$fetchOptions2.refetchPage;
				var fetchMore = (_context$fetchOptions3 = context.fetchOptions) == null ? void 0 : (_context$fetchOptions4 = _context$fetchOptions3.meta) == null ? void 0 : _context$fetchOptions4.fetchMore;
				var pageParam = fetchMore == null ? void 0 : fetchMore.pageParam;
				var isFetchingNextPage = (fetchMore == null ? void 0 : fetchMore.direction) === "forward";
				var isFetchingPreviousPage = (fetchMore == null ? void 0 : fetchMore.direction) === "backward";
				var oldPages = ((_context$state$data = context.state.data) == null ? void 0 : _context$state$data.pages) || [];
				var oldPageParams = ((_context$state$data2 = context.state.data) == null ? void 0 : _context$state$data2.pageParams) || [];
				var abortController = getAbortController();
				var abortSignal = abortController == null ? void 0 : abortController.signal;
				var newPageParams = oldPageParams;
				var cancelled = false;
				var queryFn = context.options.queryFn || function() {
					return Promise.reject("Missing queryFn");
				};
				var buildNewPages = function buildNewPages(pages, param, page, previous) {
					newPageParams = previous ? [param].concat(newPageParams) : [].concat(newPageParams, [param]);
					return previous ? [page].concat(pages) : [].concat(pages, [page]);
				};
				var fetchPage = function fetchPage(pages, manual, param, previous) {
					if (cancelled) return Promise.reject("Cancelled");
					if (typeof param === "undefined" && !manual && pages.length) return Promise.resolve(pages);
					var queryFnResult = queryFn({
						queryKey: context.queryKey,
						signal: abortSignal,
						pageParam: param,
						meta: context.meta
					});
					var promise = Promise.resolve(queryFnResult).then(function(page) {
						return buildNewPages(pages, param, page, previous);
					});
					if (isCancelable(queryFnResult)) {
						var promiseAsAny = promise;
						promiseAsAny.cancel = queryFnResult.cancel;
					}
					return promise;
				};
				var promise;
				if (!oldPages.length) promise = fetchPage([]);
				else if (isFetchingNextPage) {
					var manual = typeof pageParam !== "undefined";
					promise = fetchPage(oldPages, manual, manual ? pageParam : getNextPageParam(context.options, oldPages));
				} else if (isFetchingPreviousPage) {
					var _manual = typeof pageParam !== "undefined";
					promise = fetchPage(oldPages, _manual, _manual ? pageParam : getPreviousPageParam(context.options, oldPages), true);
				} else (function() {
					newPageParams = [];
					var manual = typeof context.options.getNextPageParam === "undefined";
					promise = (refetchPage && oldPages[0] ? refetchPage(oldPages[0], 0, oldPages) : true) ? fetchPage([], manual, oldPageParams[0]) : Promise.resolve(buildNewPages([], oldPageParams[0], oldPages[0]));
					var _loop = function _loop(i) {
						promise = promise.then(function(pages) {
							if (refetchPage && oldPages[i] ? refetchPage(oldPages[i], i, oldPages) : true) return fetchPage(pages, manual, manual ? oldPageParams[i] : getNextPageParam(context.options, pages));
							return Promise.resolve(buildNewPages(pages, oldPageParams[i], oldPages[i]));
						});
					};
					for (var i = 1; i < oldPages.length; i++) _loop(i);
				})();
				var finalPromise = promise.then(function(pages) {
					return {
						pages,
						pageParams: newPageParams
					};
				});
				var finalPromiseAsAny = finalPromise;
				finalPromiseAsAny.cancel = function() {
					cancelled = true;
					abortController == null || abortController.abort();
					if (isCancelable(promise)) promise.cancel();
				};
				return finalPromise;
			};
		} };
	}
	function getNextPageParam(options, pages) {
		return options.getNextPageParam == null ? void 0 : options.getNextPageParam(pages[pages.length - 1], pages);
	}
	function getPreviousPageParam(options, pages) {
		return options.getPreviousPageParam == null ? void 0 : options.getPreviousPageParam(pages[0], pages);
	}
	var init_infiniteQueryBehavior = __esmMin((() => {
		init_retryer();
		init_utils$1();
	}));
	//#endregion
	//#region node_modules/react-query/es/core/queryClient.js
	var QueryClient;
	var init_queryClient = __esmMin((() => {
		init_extends();
		init_utils$1();
		init_queryCache();
		init_mutationCache();
		init_focusManager();
		init_onlineManager();
		init_notifyManager();
		init_infiniteQueryBehavior();
		QueryClient = /*#__PURE__*/ function() {
			function QueryClient(config) {
				if (config === void 0) config = {};
				this.queryCache = config.queryCache || new QueryCache();
				this.mutationCache = config.mutationCache || new MutationCache();
				this.defaultOptions = config.defaultOptions || {};
				this.queryDefaults = [];
				this.mutationDefaults = [];
			}
			var _proto = QueryClient.prototype;
			_proto.mount = function mount() {
				var _this = this;
				this.unsubscribeFocus = focusManager.subscribe(function() {
					if (focusManager.isFocused() && onlineManager.isOnline()) {
						_this.mutationCache.onFocus();
						_this.queryCache.onFocus();
					}
				});
				this.unsubscribeOnline = onlineManager.subscribe(function() {
					if (focusManager.isFocused() && onlineManager.isOnline()) {
						_this.mutationCache.onOnline();
						_this.queryCache.onOnline();
					}
				});
			};
			_proto.unmount = function unmount() {
				var _this$unsubscribeFocu;
				var _this$unsubscribeOnli;
				(_this$unsubscribeFocu = this.unsubscribeFocus) == null || _this$unsubscribeFocu.call(this);
				(_this$unsubscribeOnli = this.unsubscribeOnline) == null || _this$unsubscribeOnli.call(this);
			};
			_proto.isFetching = function isFetching(arg1, arg2) {
				var filters = parseFilterArgs(arg1, arg2)[0];
				filters.fetching = true;
				return this.queryCache.findAll(filters).length;
			};
			_proto.isMutating = function isMutating(filters) {
				return this.mutationCache.findAll(_extends({}, filters, { fetching: true })).length;
			};
			_proto.getQueryData = function getQueryData(queryKey, filters) {
				var _this$queryCache$find;
				return (_this$queryCache$find = this.queryCache.find(queryKey, filters)) == null ? void 0 : _this$queryCache$find.state.data;
			};
			_proto.getQueriesData = function getQueriesData(queryKeyOrFilters) {
				return this.getQueryCache().findAll(queryKeyOrFilters).map(function(_ref) {
					return [_ref.queryKey, _ref.state.data];
				});
			};
			_proto.setQueryData = function setQueryData(queryKey, updater, options) {
				var parsedOptions = parseQueryArgs(queryKey);
				var defaultedOptions = this.defaultQueryOptions(parsedOptions);
				return this.queryCache.build(this, defaultedOptions).setData(updater, options);
			};
			_proto.setQueriesData = function setQueriesData(queryKeyOrFilters, updater, options) {
				var _this2 = this;
				return notifyManager.batch(function() {
					return _this2.getQueryCache().findAll(queryKeyOrFilters).map(function(_ref2) {
						var queryKey = _ref2.queryKey;
						return [queryKey, _this2.setQueryData(queryKey, updater, options)];
					});
				});
			};
			_proto.getQueryState = function getQueryState(queryKey, filters) {
				var _this$queryCache$find2;
				return (_this$queryCache$find2 = this.queryCache.find(queryKey, filters)) == null ? void 0 : _this$queryCache$find2.state;
			};
			_proto.removeQueries = function removeQueries(arg1, arg2) {
				var filters = parseFilterArgs(arg1, arg2)[0];
				var queryCache = this.queryCache;
				notifyManager.batch(function() {
					queryCache.findAll(filters).forEach(function(query) {
						queryCache.remove(query);
					});
				});
			};
			_proto.resetQueries = function resetQueries(arg1, arg2, arg3) {
				var _this3 = this;
				var _parseFilterArgs3 = parseFilterArgs(arg1, arg2, arg3);
				var filters = _parseFilterArgs3[0];
				var options = _parseFilterArgs3[1];
				var queryCache = this.queryCache;
				var refetchFilters = _extends({}, filters, { active: true });
				return notifyManager.batch(function() {
					queryCache.findAll(filters).forEach(function(query) {
						query.reset();
					});
					return _this3.refetchQueries(refetchFilters, options);
				});
			};
			_proto.cancelQueries = function cancelQueries(arg1, arg2, arg3) {
				var _this4 = this;
				var _parseFilterArgs4 = parseFilterArgs(arg1, arg2, arg3);
				var filters = _parseFilterArgs4[0];
				var _parseFilterArgs4$ = _parseFilterArgs4[1];
				var cancelOptions = _parseFilterArgs4$ === void 0 ? {} : _parseFilterArgs4$;
				if (typeof cancelOptions.revert === "undefined") cancelOptions.revert = true;
				var promises = notifyManager.batch(function() {
					return _this4.queryCache.findAll(filters).map(function(query) {
						return query.cancel(cancelOptions);
					});
				});
				return Promise.all(promises).then(noop).catch(noop);
			};
			_proto.invalidateQueries = function invalidateQueries(arg1, arg2, arg3) {
				var _ref3;
				var _filters$refetchActiv;
				var _filters$refetchInact;
				var _this5 = this;
				var _parseFilterArgs5 = parseFilterArgs(arg1, arg2, arg3);
				var filters = _parseFilterArgs5[0];
				var options = _parseFilterArgs5[1];
				var refetchFilters = _extends({}, filters, {
					active: (_ref3 = (_filters$refetchActiv = filters.refetchActive) != null ? _filters$refetchActiv : filters.active) != null ? _ref3 : true,
					inactive: (_filters$refetchInact = filters.refetchInactive) != null ? _filters$refetchInact : false
				});
				return notifyManager.batch(function() {
					_this5.queryCache.findAll(filters).forEach(function(query) {
						query.invalidate();
					});
					return _this5.refetchQueries(refetchFilters, options);
				});
			};
			_proto.refetchQueries = function refetchQueries(arg1, arg2, arg3) {
				var _this6 = this;
				var _parseFilterArgs6 = parseFilterArgs(arg1, arg2, arg3);
				var filters = _parseFilterArgs6[0];
				var options = _parseFilterArgs6[1];
				var promises = notifyManager.batch(function() {
					return _this6.queryCache.findAll(filters).map(function(query) {
						return query.fetch(void 0, _extends({}, options, { meta: { refetchPage: filters == null ? void 0 : filters.refetchPage } }));
					});
				});
				var promise = Promise.all(promises).then(noop);
				if (!(options == null ? void 0 : options.throwOnError)) promise = promise.catch(noop);
				return promise;
			};
			_proto.fetchQuery = function fetchQuery(arg1, arg2, arg3) {
				var parsedOptions = parseQueryArgs(arg1, arg2, arg3);
				var defaultedOptions = this.defaultQueryOptions(parsedOptions);
				if (typeof defaultedOptions.retry === "undefined") defaultedOptions.retry = false;
				var query = this.queryCache.build(this, defaultedOptions);
				return query.isStaleByTime(defaultedOptions.staleTime) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
			};
			_proto.prefetchQuery = function prefetchQuery(arg1, arg2, arg3) {
				return this.fetchQuery(arg1, arg2, arg3).then(noop).catch(noop);
			};
			_proto.fetchInfiniteQuery = function fetchInfiniteQuery(arg1, arg2, arg3) {
				var parsedOptions = parseQueryArgs(arg1, arg2, arg3);
				parsedOptions.behavior = infiniteQueryBehavior();
				return this.fetchQuery(parsedOptions);
			};
			_proto.prefetchInfiniteQuery = function prefetchInfiniteQuery(arg1, arg2, arg3) {
				return this.fetchInfiniteQuery(arg1, arg2, arg3).then(noop).catch(noop);
			};
			_proto.cancelMutations = function cancelMutations() {
				var _this7 = this;
				var promises = notifyManager.batch(function() {
					return _this7.mutationCache.getAll().map(function(mutation) {
						return mutation.cancel();
					});
				});
				return Promise.all(promises).then(noop).catch(noop);
			};
			_proto.resumePausedMutations = function resumePausedMutations() {
				return this.getMutationCache().resumePausedMutations();
			};
			_proto.executeMutation = function executeMutation(options) {
				return this.mutationCache.build(this, options).execute();
			};
			_proto.getQueryCache = function getQueryCache() {
				return this.queryCache;
			};
			_proto.getMutationCache = function getMutationCache() {
				return this.mutationCache;
			};
			_proto.getDefaultOptions = function getDefaultOptions() {
				return this.defaultOptions;
			};
			_proto.setDefaultOptions = function setDefaultOptions(options) {
				this.defaultOptions = options;
			};
			_proto.setQueryDefaults = function setQueryDefaults(queryKey, options) {
				var result = this.queryDefaults.find(function(x) {
					return hashQueryKey(queryKey) === hashQueryKey(x.queryKey);
				});
				if (result) result.defaultOptions = options;
				else this.queryDefaults.push({
					queryKey,
					defaultOptions: options
				});
			};
			_proto.getQueryDefaults = function getQueryDefaults(queryKey) {
				var _this$queryDefaults$f;
				return queryKey ? (_this$queryDefaults$f = this.queryDefaults.find(function(x) {
					return partialMatchKey(queryKey, x.queryKey);
				})) == null ? void 0 : _this$queryDefaults$f.defaultOptions : void 0;
			};
			_proto.setMutationDefaults = function setMutationDefaults(mutationKey, options) {
				var result = this.mutationDefaults.find(function(x) {
					return hashQueryKey(mutationKey) === hashQueryKey(x.mutationKey);
				});
				if (result) result.defaultOptions = options;
				else this.mutationDefaults.push({
					mutationKey,
					defaultOptions: options
				});
			};
			_proto.getMutationDefaults = function getMutationDefaults(mutationKey) {
				var _this$mutationDefault;
				return mutationKey ? (_this$mutationDefault = this.mutationDefaults.find(function(x) {
					return partialMatchKey(mutationKey, x.mutationKey);
				})) == null ? void 0 : _this$mutationDefault.defaultOptions : void 0;
			};
			_proto.defaultQueryOptions = function defaultQueryOptions(options) {
				if (options == null ? void 0 : options._defaulted) return options;
				var defaultedOptions = _extends({}, this.defaultOptions.queries, this.getQueryDefaults(options == null ? void 0 : options.queryKey), options, { _defaulted: true });
				if (!defaultedOptions.queryHash && defaultedOptions.queryKey) defaultedOptions.queryHash = hashQueryKeyByOptions(defaultedOptions.queryKey, defaultedOptions);
				return defaultedOptions;
			};
			_proto.defaultQueryObserverOptions = function defaultQueryObserverOptions(options) {
				return this.defaultQueryOptions(options);
			};
			_proto.defaultMutationOptions = function defaultMutationOptions(options) {
				if (options == null ? void 0 : options._defaulted) return options;
				return _extends({}, this.defaultOptions.mutations, this.getMutationDefaults(options == null ? void 0 : options.mutationKey), options, { _defaulted: true });
			};
			_proto.clear = function clear() {
				this.queryCache.clear();
				this.mutationCache.clear();
			};
			return QueryClient;
		}();
	}));
	//#endregion
	//#region node_modules/react-query/es/core/queryObserver.js
	function shouldLoadOnMount(query, options) {
		return options.enabled !== false && !query.state.dataUpdatedAt && !(query.state.status === "error" && options.retryOnMount === false);
	}
	function shouldFetchOnMount(query, options) {
		return shouldLoadOnMount(query, options) || query.state.dataUpdatedAt > 0 && shouldFetchOn(query, options, options.refetchOnMount);
	}
	function shouldFetchOn(query, options, field) {
		if (options.enabled !== false) {
			var value = typeof field === "function" ? field(query) : field;
			return value === "always" || value !== false && isStale(query, options);
		}
		return false;
	}
	function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
		return options.enabled !== false && (query !== prevQuery || prevOptions.enabled === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
	}
	function isStale(query, options) {
		return query.isStaleByTime(options.staleTime);
	}
	var QueryObserver;
	var init_queryObserver = __esmMin((() => {
		init_extends();
		init_inheritsLoose();
		init_utils$1();
		init_notifyManager();
		init_focusManager();
		init_subscribable();
		init_logger$1();
		init_retryer();
		QueryObserver = /*#__PURE__*/ function(_Subscribable) {
			_inheritsLoose(QueryObserver, _Subscribable);
			function QueryObserver(client, options) {
				var _this = _Subscribable.call(this) || this;
				_this.client = client;
				_this.options = options;
				_this.trackedProps = [];
				_this.selectError = null;
				_this.bindMethods();
				_this.setOptions(options);
				return _this;
			}
			var _proto = QueryObserver.prototype;
			_proto.bindMethods = function bindMethods() {
				this.remove = this.remove.bind(this);
				this.refetch = this.refetch.bind(this);
			};
			_proto.onSubscribe = function onSubscribe() {
				if (this.listeners.length === 1) {
					this.currentQuery.addObserver(this);
					if (shouldFetchOnMount(this.currentQuery, this.options)) this.executeFetch();
					this.updateTimers();
				}
			};
			_proto.onUnsubscribe = function onUnsubscribe() {
				if (!this.listeners.length) this.destroy();
			};
			_proto.shouldFetchOnReconnect = function shouldFetchOnReconnect() {
				return shouldFetchOn(this.currentQuery, this.options, this.options.refetchOnReconnect);
			};
			_proto.shouldFetchOnWindowFocus = function shouldFetchOnWindowFocus() {
				return shouldFetchOn(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
			};
			_proto.destroy = function destroy() {
				this.listeners = [];
				this.clearTimers();
				this.currentQuery.removeObserver(this);
			};
			_proto.setOptions = function setOptions(options, notifyOptions) {
				var prevOptions = this.options;
				var prevQuery = this.currentQuery;
				this.options = this.client.defaultQueryObserverOptions(options);
				if (typeof this.options.enabled !== "undefined" && typeof this.options.enabled !== "boolean") throw new Error("Expected enabled to be a boolean");
				if (!this.options.queryKey) this.options.queryKey = prevOptions.queryKey;
				this.updateQuery();
				var mounted = this.hasListeners();
				if (mounted && shouldFetchOptionally(this.currentQuery, prevQuery, this.options, prevOptions)) this.executeFetch();
				this.updateResult(notifyOptions);
				if (mounted && (this.currentQuery !== prevQuery || this.options.enabled !== prevOptions.enabled || this.options.staleTime !== prevOptions.staleTime)) this.updateStaleTimeout();
				var nextRefetchInterval = this.computeRefetchInterval();
				if (mounted && (this.currentQuery !== prevQuery || this.options.enabled !== prevOptions.enabled || nextRefetchInterval !== this.currentRefetchInterval)) this.updateRefetchInterval(nextRefetchInterval);
			};
			_proto.getOptimisticResult = function getOptimisticResult(options) {
				var defaultedOptions = this.client.defaultQueryObserverOptions(options);
				var query = this.client.getQueryCache().build(this.client, defaultedOptions);
				return this.createResult(query, defaultedOptions);
			};
			_proto.getCurrentResult = function getCurrentResult() {
				return this.currentResult;
			};
			_proto.trackResult = function trackResult(result, defaultedOptions) {
				var _this2 = this;
				var trackedResult = {};
				var trackProp = function trackProp(key) {
					if (!_this2.trackedProps.includes(key)) _this2.trackedProps.push(key);
				};
				Object.keys(result).forEach(function(key) {
					Object.defineProperty(trackedResult, key, {
						configurable: false,
						enumerable: true,
						get: function get() {
							trackProp(key);
							return result[key];
						}
					});
				});
				if (defaultedOptions.useErrorBoundary || defaultedOptions.suspense) trackProp("error");
				return trackedResult;
			};
			_proto.getNextResult = function getNextResult(options) {
				var _this3 = this;
				return new Promise(function(resolve, reject) {
					var unsubscribe = _this3.subscribe(function(result) {
						if (!result.isFetching) {
							unsubscribe();
							if (result.isError && (options == null ? void 0 : options.throwOnError)) reject(result.error);
							else resolve(result);
						}
					});
				});
			};
			_proto.getCurrentQuery = function getCurrentQuery() {
				return this.currentQuery;
			};
			_proto.remove = function remove() {
				this.client.getQueryCache().remove(this.currentQuery);
			};
			_proto.refetch = function refetch(options) {
				return this.fetch(_extends({}, options, { meta: { refetchPage: options == null ? void 0 : options.refetchPage } }));
			};
			_proto.fetchOptimistic = function fetchOptimistic(options) {
				var _this4 = this;
				var defaultedOptions = this.client.defaultQueryObserverOptions(options);
				var query = this.client.getQueryCache().build(this.client, defaultedOptions);
				return query.fetch().then(function() {
					return _this4.createResult(query, defaultedOptions);
				});
			};
			_proto.fetch = function fetch(fetchOptions) {
				var _this5 = this;
				return this.executeFetch(fetchOptions).then(function() {
					_this5.updateResult();
					return _this5.currentResult;
				});
			};
			_proto.executeFetch = function executeFetch(fetchOptions) {
				this.updateQuery();
				var promise = this.currentQuery.fetch(this.options, fetchOptions);
				if (!(fetchOptions == null ? void 0 : fetchOptions.throwOnError)) promise = promise.catch(noop);
				return promise;
			};
			_proto.updateStaleTimeout = function updateStaleTimeout() {
				var _this6 = this;
				this.clearStaleTimeout();
				if (isServer || this.currentResult.isStale || !isValidTimeout(this.options.staleTime)) return;
				var timeout = timeUntilStale(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
				this.staleTimeoutId = setTimeout(function() {
					if (!_this6.currentResult.isStale) _this6.updateResult();
				}, timeout);
			};
			_proto.computeRefetchInterval = function computeRefetchInterval() {
				var _this$options$refetch;
				return typeof this.options.refetchInterval === "function" ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : (_this$options$refetch = this.options.refetchInterval) != null ? _this$options$refetch : false;
			};
			_proto.updateRefetchInterval = function updateRefetchInterval(nextInterval) {
				var _this7 = this;
				this.clearRefetchInterval();
				this.currentRefetchInterval = nextInterval;
				if (isServer || this.options.enabled === false || !isValidTimeout(this.currentRefetchInterval) || this.currentRefetchInterval === 0) return;
				this.refetchIntervalId = setInterval(function() {
					if (_this7.options.refetchIntervalInBackground || focusManager.isFocused()) _this7.executeFetch();
				}, this.currentRefetchInterval);
			};
			_proto.updateTimers = function updateTimers() {
				this.updateStaleTimeout();
				this.updateRefetchInterval(this.computeRefetchInterval());
			};
			_proto.clearTimers = function clearTimers() {
				this.clearStaleTimeout();
				this.clearRefetchInterval();
			};
			_proto.clearStaleTimeout = function clearStaleTimeout() {
				if (this.staleTimeoutId) {
					clearTimeout(this.staleTimeoutId);
					this.staleTimeoutId = void 0;
				}
			};
			_proto.clearRefetchInterval = function clearRefetchInterval() {
				if (this.refetchIntervalId) {
					clearInterval(this.refetchIntervalId);
					this.refetchIntervalId = void 0;
				}
			};
			_proto.createResult = function createResult(query, options) {
				var prevQuery = this.currentQuery;
				var prevOptions = this.options;
				var prevResult = this.currentResult;
				var prevResultState = this.currentResultState;
				var prevResultOptions = this.currentResultOptions;
				var queryChange = query !== prevQuery;
				var queryInitialState = queryChange ? query.state : this.currentQueryInitialState;
				var prevQueryResult = queryChange ? this.currentResult : this.previousQueryResult;
				var state = query.state;
				var dataUpdatedAt = state.dataUpdatedAt;
				var error = state.error;
				var errorUpdatedAt = state.errorUpdatedAt;
				var isFetching = state.isFetching;
				var status = state.status;
				var isPreviousData = false;
				var isPlaceholderData = false;
				var data;
				if (options.optimisticResults) {
					var mounted = this.hasListeners();
					var fetchOnMount = !mounted && shouldFetchOnMount(query, options);
					var fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
					if (fetchOnMount || fetchOptionally) {
						isFetching = true;
						if (!dataUpdatedAt) status = "loading";
					}
				}
				if (options.keepPreviousData && !state.dataUpdateCount && (prevQueryResult == null ? void 0 : prevQueryResult.isSuccess) && status !== "error") {
					data = prevQueryResult.data;
					dataUpdatedAt = prevQueryResult.dataUpdatedAt;
					status = prevQueryResult.status;
					isPreviousData = true;
				} else if (options.select && typeof state.data !== "undefined") if (prevResult && state.data === (prevResultState == null ? void 0 : prevResultState.data) && options.select === this.selectFn) data = this.selectResult;
				else try {
					this.selectFn = options.select;
					data = options.select(state.data);
					if (options.structuralSharing !== false) data = replaceEqualDeep(prevResult == null ? void 0 : prevResult.data, data);
					this.selectResult = data;
					this.selectError = null;
				} catch (selectError) {
					getLogger().error(selectError);
					this.selectError = selectError;
				}
				else data = state.data;
				if (typeof options.placeholderData !== "undefined" && typeof data === "undefined" && (status === "loading" || status === "idle")) {
					var placeholderData;
					if ((prevResult == null ? void 0 : prevResult.isPlaceholderData) && options.placeholderData === (prevResultOptions == null ? void 0 : prevResultOptions.placeholderData)) placeholderData = prevResult.data;
					else {
						placeholderData = typeof options.placeholderData === "function" ? options.placeholderData() : options.placeholderData;
						if (options.select && typeof placeholderData !== "undefined") try {
							placeholderData = options.select(placeholderData);
							if (options.structuralSharing !== false) placeholderData = replaceEqualDeep(prevResult == null ? void 0 : prevResult.data, placeholderData);
							this.selectError = null;
						} catch (selectError) {
							getLogger().error(selectError);
							this.selectError = selectError;
						}
					}
					if (typeof placeholderData !== "undefined") {
						status = "success";
						data = placeholderData;
						isPlaceholderData = true;
					}
				}
				if (this.selectError) {
					error = this.selectError;
					data = this.selectResult;
					errorUpdatedAt = Date.now();
					status = "error";
				}
				return {
					status,
					isLoading: status === "loading",
					isSuccess: status === "success",
					isError: status === "error",
					isIdle: status === "idle",
					data,
					dataUpdatedAt,
					error,
					errorUpdatedAt,
					failureCount: state.fetchFailureCount,
					errorUpdateCount: state.errorUpdateCount,
					isFetched: state.dataUpdateCount > 0 || state.errorUpdateCount > 0,
					isFetchedAfterMount: state.dataUpdateCount > queryInitialState.dataUpdateCount || state.errorUpdateCount > queryInitialState.errorUpdateCount,
					isFetching,
					isRefetching: isFetching && status !== "loading",
					isLoadingError: status === "error" && state.dataUpdatedAt === 0,
					isPlaceholderData,
					isPreviousData,
					isRefetchError: status === "error" && state.dataUpdatedAt !== 0,
					isStale: isStale(query, options),
					refetch: this.refetch,
					remove: this.remove
				};
			};
			_proto.shouldNotifyListeners = function shouldNotifyListeners(result, prevResult) {
				if (!prevResult) return true;
				var _this$options = this.options;
				var notifyOnChangeProps = _this$options.notifyOnChangeProps;
				var notifyOnChangePropsExclusions = _this$options.notifyOnChangePropsExclusions;
				if (!notifyOnChangeProps && !notifyOnChangePropsExclusions) return true;
				if (notifyOnChangeProps === "tracked" && !this.trackedProps.length) return true;
				var includedProps = notifyOnChangeProps === "tracked" ? this.trackedProps : notifyOnChangeProps;
				return Object.keys(result).some(function(key) {
					var typedKey = key;
					var changed = result[typedKey] !== prevResult[typedKey];
					var isIncluded = includedProps == null ? void 0 : includedProps.some(function(x) {
						return x === key;
					});
					var isExcluded = notifyOnChangePropsExclusions == null ? void 0 : notifyOnChangePropsExclusions.some(function(x) {
						return x === key;
					});
					return changed && !isExcluded && (!includedProps || isIncluded);
				});
			};
			_proto.updateResult = function updateResult(notifyOptions) {
				var prevResult = this.currentResult;
				this.currentResult = this.createResult(this.currentQuery, this.options);
				this.currentResultState = this.currentQuery.state;
				this.currentResultOptions = this.options;
				if (shallowEqualObjects(this.currentResult, prevResult)) return;
				var defaultNotifyOptions = { cache: true };
				if ((notifyOptions == null ? void 0 : notifyOptions.listeners) !== false && this.shouldNotifyListeners(this.currentResult, prevResult)) defaultNotifyOptions.listeners = true;
				this.notify(_extends({}, defaultNotifyOptions, notifyOptions));
			};
			_proto.updateQuery = function updateQuery() {
				var query = this.client.getQueryCache().build(this.client, this.options);
				if (query === this.currentQuery) return;
				var prevQuery = this.currentQuery;
				this.currentQuery = query;
				this.currentQueryInitialState = query.state;
				this.previousQueryResult = this.currentResult;
				if (this.hasListeners()) {
					prevQuery == null || prevQuery.removeObserver(this);
					query.addObserver(this);
				}
			};
			_proto.onQueryUpdate = function onQueryUpdate(action) {
				var notifyOptions = {};
				if (action.type === "success") notifyOptions.onSuccess = true;
				else if (action.type === "error" && !isCancelledError(action.error)) notifyOptions.onError = true;
				this.updateResult(notifyOptions);
				if (this.hasListeners()) this.updateTimers();
			};
			_proto.notify = function notify(notifyOptions) {
				var _this8 = this;
				notifyManager.batch(function() {
					if (notifyOptions.onSuccess) {
						_this8.options.onSuccess == null || _this8.options.onSuccess(_this8.currentResult.data);
						_this8.options.onSettled == null || _this8.options.onSettled(_this8.currentResult.data, null);
					} else if (notifyOptions.onError) {
						_this8.options.onError == null || _this8.options.onError(_this8.currentResult.error);
						_this8.options.onSettled == null || _this8.options.onSettled(void 0, _this8.currentResult.error);
					}
					if (notifyOptions.listeners) _this8.listeners.forEach(function(listener) {
						listener(_this8.currentResult);
					});
					if (notifyOptions.cache) _this8.client.getQueryCache().notify({
						query: _this8.currentQuery,
						type: "observerResultsUpdated"
					});
				});
			};
			return QueryObserver;
		}(Subscribable);
	}));
	//#endregion
	//#region node_modules/react-query/es/core/mutationObserver.js
	var MutationObserver$1;
	var init_mutationObserver = __esmMin((() => {
		init_extends();
		init_inheritsLoose();
		init_mutation();
		init_notifyManager();
		init_subscribable();
		MutationObserver$1 = /*#__PURE__*/ function(_Subscribable) {
			_inheritsLoose(MutationObserver, _Subscribable);
			function MutationObserver(client, options) {
				var _this = _Subscribable.call(this) || this;
				_this.client = client;
				_this.setOptions(options);
				_this.bindMethods();
				_this.updateResult();
				return _this;
			}
			var _proto = MutationObserver.prototype;
			_proto.bindMethods = function bindMethods() {
				this.mutate = this.mutate.bind(this);
				this.reset = this.reset.bind(this);
			};
			_proto.setOptions = function setOptions(options) {
				this.options = this.client.defaultMutationOptions(options);
			};
			_proto.onUnsubscribe = function onUnsubscribe() {
				if (!this.listeners.length) {
					var _this$currentMutation;
					(_this$currentMutation = this.currentMutation) == null || _this$currentMutation.removeObserver(this);
				}
			};
			_proto.onMutationUpdate = function onMutationUpdate(action) {
				this.updateResult();
				var notifyOptions = { listeners: true };
				if (action.type === "success") notifyOptions.onSuccess = true;
				else if (action.type === "error") notifyOptions.onError = true;
				this.notify(notifyOptions);
			};
			_proto.getCurrentResult = function getCurrentResult() {
				return this.currentResult;
			};
			_proto.reset = function reset() {
				this.currentMutation = void 0;
				this.updateResult();
				this.notify({ listeners: true });
			};
			_proto.mutate = function mutate(variables, options) {
				this.mutateOptions = options;
				if (this.currentMutation) this.currentMutation.removeObserver(this);
				this.currentMutation = this.client.getMutationCache().build(this.client, _extends({}, this.options, { variables: typeof variables !== "undefined" ? variables : this.options.variables }));
				this.currentMutation.addObserver(this);
				return this.currentMutation.execute();
			};
			_proto.updateResult = function updateResult() {
				var state = this.currentMutation ? this.currentMutation.state : getDefaultState();
				var result = _extends({}, state, {
					isLoading: state.status === "loading",
					isSuccess: state.status === "success",
					isError: state.status === "error",
					isIdle: state.status === "idle",
					mutate: this.mutate,
					reset: this.reset
				});
				this.currentResult = result;
			};
			_proto.notify = function notify(options) {
				var _this2 = this;
				notifyManager.batch(function() {
					if (_this2.mutateOptions) {
						if (options.onSuccess) {
							_this2.mutateOptions.onSuccess == null || _this2.mutateOptions.onSuccess(_this2.currentResult.data, _this2.currentResult.variables, _this2.currentResult.context);
							_this2.mutateOptions.onSettled == null || _this2.mutateOptions.onSettled(_this2.currentResult.data, null, _this2.currentResult.variables, _this2.currentResult.context);
						} else if (options.onError) {
							_this2.mutateOptions.onError == null || _this2.mutateOptions.onError(_this2.currentResult.error, _this2.currentResult.variables, _this2.currentResult.context);
							_this2.mutateOptions.onSettled == null || _this2.mutateOptions.onSettled(void 0, _this2.currentResult.error, _this2.currentResult.variables, _this2.currentResult.context);
						}
					}
					if (options.listeners) _this2.listeners.forEach(function(listener) {
						listener(_this2.currentResult);
					});
				});
			};
			return MutationObserver;
		}(Subscribable);
	}));
	//#endregion
	//#region node_modules/react-query/es/core/types.js
	var init_types$1 = __esmMin((() => {}));
	//#endregion
	//#region node_modules/react-query/es/core/index.js
	var init_core = __esmMin((() => {
		init_retryer();
		init_queryCache();
		init_queryClient();
		init_queryObserver();
		init_inheritsLoose();
		init_utils$1();
		init_notifyManager();
		init_subscribable();
		init_extends();
		init_infiniteQueryBehavior();
		init_mutationCache();
		init_mutationObserver();
		init_logger$1();
		init_focusManager();
		init_onlineManager();
		init_types$1();
	}));
	//#endregion
	//#region node_modules/react-query/es/react/reactBatchedUpdates.js
	var unstable_batchedUpdates$1;
	var init_reactBatchedUpdates$1 = __esmMin((() => {
		unstable_batchedUpdates$1 = react_dom.default.unstable_batchedUpdates;
	}));
	//#endregion
	//#region node_modules/react-query/es/react/setBatchUpdatesFn.js
	var init_setBatchUpdatesFn = __esmMin((() => {
		init_core();
		init_reactBatchedUpdates$1();
		notifyManager.setBatchNotifyFunction(unstable_batchedUpdates$1);
	}));
	//#endregion
	//#region node_modules/react-query/es/react/logger.js
	var logger;
	var init_logger = __esmMin((() => {
		logger = console;
	}));
	//#endregion
	//#region node_modules/react-query/es/react/setLogger.js
	var init_setLogger = __esmMin((() => {
		init_core();
		init_logger();
		setLogger(logger);
	}));
	//#endregion
	//#region node_modules/react-query/es/react/QueryClientProvider.js
	function getQueryClientContext(contextSharing) {
		if (contextSharing && typeof window !== "undefined") {
			if (!window.ReactQueryClientContext) window.ReactQueryClientContext = defaultContext;
			return window.ReactQueryClientContext;
		}
		return defaultContext;
	}
	var defaultContext, QueryClientSharingContext, useQueryClient, QueryClientProvider;
	var init_QueryClientProvider = __esmMin((() => {
		defaultContext = /*#__PURE__*/ react.default.createContext(void 0);
		QueryClientSharingContext = /*#__PURE__*/ react.default.createContext(false);
		useQueryClient = function useQueryClient() {
			var queryClient = react.default.useContext(getQueryClientContext(react.default.useContext(QueryClientSharingContext)));
			if (!queryClient) throw new Error("No QueryClient set, use QueryClientProvider to set one");
			return queryClient;
		};
		QueryClientProvider = function QueryClientProvider(_ref) {
			var client = _ref.client;
			var _ref$contextSharing = _ref.contextSharing;
			var contextSharing = _ref$contextSharing === void 0 ? false : _ref$contextSharing;
			var children = _ref.children;
			react.default.useEffect(function() {
				client.mount();
				return function() {
					client.unmount();
				};
			}, [client]);
			var Context = getQueryClientContext(contextSharing);
			return /*#__PURE__*/ react.default.createElement(QueryClientSharingContext.Provider, { value: contextSharing }, /*#__PURE__*/ react.default.createElement(Context.Provider, { value: client }, children));
		};
	}));
	//#endregion
	//#region node_modules/react-query/es/react/QueryErrorResetBoundary.js
	function createValue() {
		var _isReset = false;
		return {
			clearReset: function clearReset() {
				_isReset = false;
			},
			reset: function reset() {
				_isReset = true;
			},
			isReset: function isReset() {
				return _isReset;
			}
		};
	}
	var QueryErrorResetBoundaryContext, useQueryErrorResetBoundary;
	var init_QueryErrorResetBoundary = __esmMin((() => {
		QueryErrorResetBoundaryContext = /*#__PURE__*/ react.default.createContext(createValue());
		useQueryErrorResetBoundary = function useQueryErrorResetBoundary() {
			return react.default.useContext(QueryErrorResetBoundaryContext);
		};
	}));
	//#endregion
	//#region node_modules/react-query/es/react/utils.js
	function shouldThrowError(suspense, _useErrorBoundary, params) {
		if (typeof _useErrorBoundary === "function") return _useErrorBoundary.apply(void 0, params);
		if (typeof _useErrorBoundary === "boolean") return _useErrorBoundary;
		return !!suspense;
	}
	var init_utils = __esmMin((() => {}));
	//#endregion
	//#region node_modules/react-query/es/react/useMutation.js
	function useMutation(arg1, arg2, arg3) {
		var mountedRef = react.default.useRef(false);
		var forceUpdate = react.default.useState(0)[1];
		var options = parseMutationArgs(arg1, arg2, arg3);
		var queryClient = useQueryClient();
		var obsRef = react.default.useRef();
		if (!obsRef.current) obsRef.current = new MutationObserver$1(queryClient, options);
		else obsRef.current.setOptions(options);
		var currentResult = obsRef.current.getCurrentResult();
		react.default.useEffect(function() {
			mountedRef.current = true;
			var unsubscribe = obsRef.current.subscribe(notifyManager.batchCalls(function() {
				if (mountedRef.current) forceUpdate(function(x) {
					return x + 1;
				});
			}));
			return function() {
				mountedRef.current = false;
				unsubscribe();
			};
		}, []);
		var mutate = react.default.useCallback(function(variables, mutateOptions) {
			obsRef.current.mutate(variables, mutateOptions).catch(noop);
		}, []);
		if (currentResult.error && shouldThrowError(void 0, obsRef.current.options.useErrorBoundary, [currentResult.error])) throw currentResult.error;
		return _extends({}, currentResult, {
			mutate,
			mutateAsync: currentResult.mutate
		});
	}
	var init_useMutation = __esmMin((() => {
		init_extends();
		init_notifyManager();
		init_utils$1();
		init_mutationObserver();
		init_QueryClientProvider();
		init_utils();
	}));
	//#endregion
	//#region node_modules/react-query/es/react/useBaseQuery.js
	function useBaseQuery(options, Observer) {
		var mountedRef = react.default.useRef(false);
		var forceUpdate = react.default.useState(0)[1];
		var queryClient = useQueryClient();
		var errorResetBoundary = useQueryErrorResetBoundary();
		var defaultedOptions = queryClient.defaultQueryObserverOptions(options);
		defaultedOptions.optimisticResults = true;
		if (defaultedOptions.onError) defaultedOptions.onError = notifyManager.batchCalls(defaultedOptions.onError);
		if (defaultedOptions.onSuccess) defaultedOptions.onSuccess = notifyManager.batchCalls(defaultedOptions.onSuccess);
		if (defaultedOptions.onSettled) defaultedOptions.onSettled = notifyManager.batchCalls(defaultedOptions.onSettled);
		if (defaultedOptions.suspense) {
			if (typeof defaultedOptions.staleTime !== "number") defaultedOptions.staleTime = 1e3;
			if (defaultedOptions.cacheTime === 0) defaultedOptions.cacheTime = 1;
		}
		if (defaultedOptions.suspense || defaultedOptions.useErrorBoundary) {
			if (!errorResetBoundary.isReset()) defaultedOptions.retryOnMount = false;
		}
		var observer = react.default.useState(function() {
			return new Observer(queryClient, defaultedOptions);
		})[0];
		var result = observer.getOptimisticResult(defaultedOptions);
		react.default.useEffect(function() {
			mountedRef.current = true;
			errorResetBoundary.clearReset();
			var unsubscribe = observer.subscribe(notifyManager.batchCalls(function() {
				if (mountedRef.current) forceUpdate(function(x) {
					return x + 1;
				});
			}));
			observer.updateResult();
			return function() {
				mountedRef.current = false;
				unsubscribe();
			};
		}, [errorResetBoundary, observer]);
		react.default.useEffect(function() {
			observer.setOptions(defaultedOptions, { listeners: false });
		}, [defaultedOptions, observer]);
		if (defaultedOptions.suspense && result.isLoading) throw observer.fetchOptimistic(defaultedOptions).then(function(_ref) {
			var data = _ref.data;
			defaultedOptions.onSuccess == null || defaultedOptions.onSuccess(data);
			defaultedOptions.onSettled == null || defaultedOptions.onSettled(data, null);
		}).catch(function(error) {
			errorResetBoundary.clearReset();
			defaultedOptions.onError == null || defaultedOptions.onError(error);
			defaultedOptions.onSettled == null || defaultedOptions.onSettled(void 0, error);
		});
		if (result.isError && !errorResetBoundary.isReset() && !result.isFetching && shouldThrowError(defaultedOptions.suspense, defaultedOptions.useErrorBoundary, [result.error, observer.getCurrentQuery()])) throw result.error;
		if (defaultedOptions.notifyOnChangeProps === "tracked") result = observer.trackResult(result, defaultedOptions);
		return result;
	}
	var init_useBaseQuery = __esmMin((() => {
		init_notifyManager();
		init_QueryErrorResetBoundary();
		init_QueryClientProvider();
		init_utils();
	}));
	//#endregion
	//#region node_modules/react-query/es/react/useQuery.js
	function useQuery(arg1, arg2, arg3) {
		return useBaseQuery(parseQueryArgs(arg1, arg2, arg3), QueryObserver);
	}
	var init_useQuery = __esmMin((() => {
		init_core();
		init_utils$1();
		init_useBaseQuery();
	}));
	//#endregion
	//#region node_modules/react-query/es/react/types.js
	var init_types = __esmMin((() => {}));
	//#endregion
	//#region node_modules/react-query/es/react/index.js
	var init_react = __esmMin((() => {
		init_setBatchUpdatesFn();
		init_setLogger();
		init_QueryClientProvider();
		init_QueryErrorResetBoundary();
		init_notifyManager();
		init_utils$1();
		init_useMutation();
		init_useQuery();
		init_inheritsLoose();
		init_queryObserver();
		init_subscribable();
		init_extends();
		init_infiniteQueryBehavior();
		init_useBaseQuery();
		init_core();
		init_types();
	}));
	//#endregion
	//#region node_modules/react-query/es/index.js
	var init_es$1 = __esmMin((() => {
		init_core();
		init_react();
	}));
	//#endregion
	//#region modules/notes/assets/js/app/context/elements.js
	var __defProp$12, __getOwnPropSymbols$12, __hasOwnProp$12, __propIsEnum$12, __defNormalProp$12, __spreadValues$12, ElementsContext, useElements, ElementsProvider;
	var init_elements = __esmMin((() => {
		__defProp$12 = Object.defineProperty;
		__getOwnPropSymbols$12 = Object.getOwnPropertySymbols;
		__hasOwnProp$12 = Object.prototype.hasOwnProperty;
		__propIsEnum$12 = Object.prototype.propertyIsEnumerable;
		__defNormalProp$12 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$12(obj, key, {
			enumerable: true,
			configurable: true,
			writable: true,
			value
		}) : obj[key] = value, "__defNormalProp");
		__spreadValues$12 = /* @__PURE__ */ __name((a, b) => {
			for (var prop in b || (b = {})) if (__hasOwnProp$12.call(b, prop)) __defNormalProp$12(a, prop, b[prop]);
			if (__getOwnPropSymbols$12) {
				for (var prop of __getOwnPropSymbols$12(b)) if (__propIsEnum$12.call(b, prop)) __defNormalProp$12(a, prop, b[prop]);
			}
			return a;
		}, "__spreadValues");
		ElementsContext = (0, react.createContext)(null);
		useElements = () => {
			return (0, react.useContext)(ElementsContext);
		};
		ElementsProvider = (props) => {
			const [elements, setElements] = (0, react.useState)(() => /* @__PURE__ */ new Map());
			(0, react.useEffect)(() => {
				const map = /* @__PURE__ */ new Map();
				document.querySelectorAll(".elementor-element[data-id]").forEach((element) => {
					const { id } = element.dataset;
					if (!map.has(id)) map.set(id, element);
				});
				setElements(map);
			}, []);
			const value = {
				elements,
				getDocumentIdByElement: (0, react.useCallback)((elementId, defaultId = window.top.$e.components.get("notes").config.route.post_id) => {
					if (!elements.has(elementId)) return defaultId;
					const document2 = elements.get(elementId).closest("[data-elementor-id]");
					if (!document2) return defaultId;
					return document2.dataset.elementorId;
				}, [elements])
			};
			return /* @__PURE__ */ react.default.createElement(ElementsContext.Provider, __spreadValues$12({ value }, props));
		};
	}));
	//#endregion
	//#region node_modules/react-redux/es/components/Context.js
	var ReactReduxContext;
	var init_Context = __esmMin((() => {
		ReactReduxContext = /*#__PURE__*/ react.default.createContext(null);
	}));
	//#endregion
	//#region node_modules/react-redux/es/utils/batch.js
	function defaultNoopBatch(callback) {
		callback();
	}
	var batch, setBatch, getBatch;
	var init_batch = __esmMin((() => {
		batch = defaultNoopBatch;
		setBatch = function setBatch(newBatch) {
			return batch = newBatch;
		};
		getBatch = function getBatch() {
			return batch;
		};
	}));
	//#endregion
	//#region node_modules/react-redux/es/utils/Subscription.js
	function createListenerCollection() {
		var batch = getBatch();
		var first = null;
		var last = null;
		return {
			clear: function clear() {
				first = null;
				last = null;
			},
			notify: function notify() {
				batch(function() {
					var listener = first;
					while (listener) {
						listener.callback();
						listener = listener.next;
					}
				});
			},
			get: function get() {
				var listeners = [];
				var listener = first;
				while (listener) {
					listeners.push(listener);
					listener = listener.next;
				}
				return listeners;
			},
			subscribe: function subscribe(callback) {
				var isSubscribed = true;
				var listener = last = {
					callback,
					next: null,
					prev: last
				};
				if (listener.prev) listener.prev.next = listener;
				else first = listener;
				return function unsubscribe() {
					if (!isSubscribed || first === null) return;
					isSubscribed = false;
					if (listener.next) listener.next.prev = listener.prev;
					else last = listener.prev;
					if (listener.prev) listener.prev.next = listener.next;
					else first = listener.next;
				};
			}
		};
	}
	function createSubscription(store, parentSub) {
		var unsubscribe;
		var listeners = nullListeners;
		function addNestedSub(listener) {
			trySubscribe();
			return listeners.subscribe(listener);
		}
		function notifyNestedSubs() {
			listeners.notify();
		}
		function handleChangeWrapper() {
			if (subscription.onStateChange) subscription.onStateChange();
		}
		function isSubscribed() {
			return Boolean(unsubscribe);
		}
		function trySubscribe() {
			if (!unsubscribe) {
				unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
				listeners = createListenerCollection();
			}
		}
		function tryUnsubscribe() {
			if (unsubscribe) {
				unsubscribe();
				unsubscribe = void 0;
				listeners.clear();
				listeners = nullListeners;
			}
		}
		var subscription = {
			addNestedSub,
			notifyNestedSubs,
			handleChangeWrapper,
			isSubscribed,
			trySubscribe,
			tryUnsubscribe,
			getListeners: function getListeners() {
				return listeners;
			}
		};
		return subscription;
	}
	var nullListeners;
	var init_Subscription = __esmMin((() => {
		init_batch();
		nullListeners = {
			notify: function notify() {},
			get: function get() {
				return [];
			}
		};
	}));
	//#endregion
	//#region node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js
	var useIsomorphicLayoutEffect;
	var init_useIsomorphicLayoutEffect = __esmMin((() => {
		useIsomorphicLayoutEffect = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? react.useLayoutEffect : react.useEffect;
	}));
	//#endregion
	//#region node_modules/react-redux/es/components/Provider.js
	function Provider(_ref) {
		var store = _ref.store;
		var context = _ref.context;
		var children = _ref.children;
		var contextValue = (0, react.useMemo)(function() {
			return {
				store,
				subscription: createSubscription(store)
			};
		}, [store]);
		var previousState = (0, react.useMemo)(function() {
			return store.getState();
		}, [store]);
		useIsomorphicLayoutEffect(function() {
			var subscription = contextValue.subscription;
			subscription.onStateChange = subscription.notifyNestedSubs;
			subscription.trySubscribe();
			if (previousState !== store.getState()) subscription.notifyNestedSubs();
			return function() {
				subscription.tryUnsubscribe();
				subscription.onStateChange = null;
			};
		}, [contextValue, previousState]);
		var Context = context || ReactReduxContext;
		return /*#__PURE__*/ react.default.createElement(Context.Provider, { value: contextValue }, children);
	}
	var init_Provider = __esmMin((() => {
		init_Context();
		init_Subscription();
		init_useIsomorphicLayoutEffect();
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
	var init_connectAdvanced = __esmMin((() => {
		require_hoist_non_react_statics_cjs();
		require_react_is();
		init_useIsomorphicLayoutEffect();
		init_Context();
	}));
	//#endregion
	//#region node_modules/react-redux/es/connect/connect.js
	var init_connect = __esmMin((() => {
		init_connectAdvanced();
	}));
	//#endregion
	//#region node_modules/react-redux/es/hooks/useReduxContext.js
	/**
	* A hook to access the value of the `ReactReduxContext`. This is a low-level
	* hook that you should usually not need to call directly.
	*
	* @returns {any} the value of the `ReactReduxContext`
	*
	* @example
	*
	* import React from 'react'
	* import { useReduxContext } from 'react-redux'
	*
	* export const CounterComponent = ({ value }) => {
	*   const { store } = useReduxContext()
	*   return <div>{store.getState()}</div>
	* }
	*/
	function useReduxContext() {
		return (0, react.useContext)(ReactReduxContext);
	}
	var init_useReduxContext = __esmMin((() => {
		init_Context();
	}));
	//#endregion
	//#region node_modules/react-redux/es/hooks/useStore.js
	/**
	* Hook factory, which creates a `useStore` hook bound to a given context.
	*
	* @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
	* @returns {Function} A `useStore` hook bound to the specified context.
	*/
	function createStoreHook(context) {
		if (context === void 0) context = ReactReduxContext;
		var useReduxContext$2 = context === ReactReduxContext ? useReduxContext : function() {
			return (0, react.useContext)(context);
		};
		return function useStore() {
			return useReduxContext$2().store;
		};
	}
	var useStore;
	var init_useStore = __esmMin((() => {
		init_Context();
		init_useReduxContext();
		useStore = /*#__PURE__*/ createStoreHook();
	}));
	//#endregion
	//#region node_modules/react-redux/es/hooks/useDispatch.js
	/**
	* Hook factory, which creates a `useDispatch` hook bound to a given context.
	*
	* @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
	* @returns {Function} A `useDispatch` hook bound to the specified context.
	*/
	function createDispatchHook(context) {
		if (context === void 0) context = ReactReduxContext;
		var useStore$1 = context === ReactReduxContext ? useStore : createStoreHook(context);
		return function useDispatch() {
			return useStore$1().dispatch;
		};
	}
	var useDispatch;
	var init_useDispatch = __esmMin((() => {
		init_Context();
		init_useStore();
		useDispatch = /*#__PURE__*/ createDispatchHook();
	}));
	//#endregion
	//#region node_modules/react-redux/es/hooks/useSelector.js
	function useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub) {
		var forceRender = (0, react.useReducer)(function(s) {
			return s + 1;
		}, 0)[1];
		var subscription = (0, react.useMemo)(function() {
			return createSubscription(store, contextSub);
		}, [store, contextSub]);
		var latestSubscriptionCallbackError = (0, react.useRef)();
		var latestSelector = (0, react.useRef)();
		var latestStoreState = (0, react.useRef)();
		var latestSelectedState = (0, react.useRef)();
		var storeState = store.getState();
		var selectedState;
		try {
			if (selector !== latestSelector.current || storeState !== latestStoreState.current || latestSubscriptionCallbackError.current) {
				var newSelectedState = selector(storeState);
				if (latestSelectedState.current === void 0 || !equalityFn(newSelectedState, latestSelectedState.current)) selectedState = newSelectedState;
				else selectedState = latestSelectedState.current;
			} else selectedState = latestSelectedState.current;
		} catch (err) {
			if (latestSubscriptionCallbackError.current) err.message += "\nThe error may be correlated with this previous error:\n" + latestSubscriptionCallbackError.current.stack + "\n\n";
			throw err;
		}
		useIsomorphicLayoutEffect(function() {
			latestSelector.current = selector;
			latestStoreState.current = storeState;
			latestSelectedState.current = selectedState;
			latestSubscriptionCallbackError.current = void 0;
		});
		useIsomorphicLayoutEffect(function() {
			function checkForUpdates() {
				try {
					var newStoreState = store.getState();
					if (newStoreState === latestStoreState.current) return;
					var _newSelectedState = latestSelector.current(newStoreState);
					if (equalityFn(_newSelectedState, latestSelectedState.current)) return;
					latestSelectedState.current = _newSelectedState;
					latestStoreState.current = newStoreState;
				} catch (err) {
					latestSubscriptionCallbackError.current = err;
				}
				forceRender();
			}
			subscription.onStateChange = checkForUpdates;
			subscription.trySubscribe();
			checkForUpdates();
			return function() {
				return subscription.tryUnsubscribe();
			};
		}, [store, subscription]);
		return selectedState;
	}
	/**
	* Hook factory, which creates a `useSelector` hook bound to a given context.
	*
	* @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
	* @returns {Function} A `useSelector` hook bound to the specified context.
	*/
	function createSelectorHook(context) {
		if (context === void 0) context = ReactReduxContext;
		var useReduxContext$1 = context === ReactReduxContext ? useReduxContext : function() {
			return (0, react.useContext)(context);
		};
		return function useSelector(selector, equalityFn) {
			if (equalityFn === void 0) equalityFn = refEquality;
			var _useReduxContext = useReduxContext$1();
			var store = _useReduxContext.store;
			var contextSub = _useReduxContext.subscription;
			var selectedState = useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub);
			(0, react.useDebugValue)(selectedState);
			return selectedState;
		};
	}
	var refEquality, useSelector;
	var init_useSelector = __esmMin((() => {
		init_useReduxContext();
		init_Subscription();
		init_useIsomorphicLayoutEffect();
		init_Context();
		refEquality = function refEquality(a, b) {
			return a === b;
		};
		useSelector = /*#__PURE__*/ createSelectorHook();
	}));
	//#endregion
	//#region node_modules/react-redux/es/exports.js
	var init_exports = __esmMin((() => {
		init_Provider();
		init_connectAdvanced();
		init_Context();
		init_connect();
		init_useDispatch();
		init_useSelector();
		init_useStore();
	}));
	//#endregion
	//#region node_modules/react-redux/es/utils/reactBatchedUpdates.js
	var init_reactBatchedUpdates = __esmMin((() => {}));
	//#endregion
	//#region node_modules/react-redux/es/index.js
	var init_es = __esmMin((() => {
		init_exports();
		init_reactBatchedUpdates();
		init_batch();
		setBatch(react_dom.unstable_batchedUpdates);
	}));
	//#endregion
	//#region modules/notes/assets/js/app/hooks/use-active-thread.js
	function useActiveThread() {
		const activeThread = useSelector((state) => state.notes.active);
		return {
			activeThread,
			setActive: (0, react.useCallback)(({ type, data }) => {
				const allowedTypes = [THREAD, NEW_THREAD];
				if (!allowedTypes.includes(type)) throw new Error("`setActive()` type must be one of: " + allowedTypes.join(", "));
				return window.top.$e.run("notes/set-active", {
					type,
					data
				});
			}, []),
			clearActive: (0, react.useCallback)((id = null) => {
				return window.top.$e.run("notes/clear-active", { id });
			}, []),
			isThreadActive: (0, react.useCallback)((noteId) => {
				return "thread" === (activeThread === null || activeThread === void 0 ? void 0 : activeThread.type) && (activeThread === null || activeThread === void 0 ? void 0 : activeThread.data.noteId) === noteId;
			}, [activeThread])
		};
	}
	var THREAD, NEW_THREAD;
	var init_use_active_thread = __esmMin((() => {
		init_es();
		THREAD = "thread";
		NEW_THREAD = "new-thread";
	}));
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
	//#region modules/notes/assets/js/app/hooks/use-notes-mutations.js
	function useCreateMutation() {
		const invalidateSingle = useInvalidateSingle(), invalidateList = useInvalidateList(), invalidateSummary = useInvalidateSummary(), { getDocumentIdByElement } = useElements(), config = useNotesConfig();
		return useMutation(function() {
			var _ref = _asyncToGenerator(function* ({ postId, elementId, content, position = {
				x: 0,
				y: 0
			}, routeUrl = config.route.url, routeTitle = config.route.title, routePostId = config.route.post_id, status = "publish", parentId, isPublic = null }) {
				if (!postId) postId = getDocumentIdByElement(elementId);
				const { data } = yield window.top.$e.data.create("notes/index", _objectSpread2({
					post_id: postId,
					element_id: elementId,
					content,
					position,
					route_post_id: routePostId,
					route_url: routeUrl,
					route_title: routeTitle,
					status,
					parent_id: parentId,
					mentioned_usernames: extractMentions(content)
				}, null !== isPublic ? { is_public: isPublic } : {}));
				return Note.createFromResponse(data.data);
			});
			return function(_x) {
				return _ref.apply(this, arguments);
			};
		}(), { onSuccess: (note) => Promise.all(note.isThread() ? [invalidateSummary({ exact: false }), invalidateList({ exact: false })] : [invalidateSingle({ id: note.parentId })]) });
	}
	function useUpdateMutation() {
		const invalidateSingle = useInvalidateSingle();
		return useMutation(function() {
			var _ref2 = _asyncToGenerator(function* ({ id, values: { content } }) {
				const { data } = yield window.top.$e.data.update("notes/index", {
					content,
					mentioned_usernames: extractMentions(content)
				}, { id });
				return Note.createFromResponse(data.data);
			});
			return function(_x2) {
				return _ref2.apply(this, arguments);
			};
		}(), { onSuccess: (note) => invalidateSingle({ id: note.isThread() ? note.id : note.parentId }) });
	}
	function useDeleteMutation() {
		const invalidateList = useInvalidateList(), invalidateSingle = useInvalidateSingle(), invalidateSummary = useInvalidateSummary(), { clearActive } = useActiveThread();
		return useMutation(function() {
			var _ref3 = _asyncToGenerator(function* ({ id, parentId, force = false }) {
				yield window.top.$e.data.delete("notes/index", normalizeQueryParams({
					id,
					force
				}));
				return {
					id,
					parentId
				};
			});
			return function(_x3) {
				return _ref3.apply(this, arguments);
			};
		}(), { onSuccess: ({ id, parentId }) => {
			clearActive(id);
			const isThread = !parentId;
			return Promise.all(isThread ? [invalidateSummary({ exact: false }), invalidateList({ exact: false })] : [invalidateSingle({ id: parentId })]);
		} });
	}
	function useResolveMutation() {
		const invalidateList = useInvalidateList();
		const invalidateSingle = useInvalidateSingle();
		const invalidateSummary = useInvalidateSummary();
		return useMutation(function() {
			var _ref4 = _asyncToGenerator(function* ({ id, isResolved }) {
				const { data } = yield window.top.$e.data.update("notes/index", { is_resolved: isResolved }, { id });
				return Note.createFromResponse(data.data);
			});
			return function(_x4) {
				return _ref4.apply(this, arguments);
			};
		}(), { onSuccess: (note) => {
			const listPredicate = ({ queryKey }) => Object.prototype.hasOwnProperty.call(queryKey[1] || {}, "is_resolved");
			return Promise.all([
				invalidateSingle({ id: note.id }),
				invalidateList({ predicate: listPredicate }),
				invalidateSummary({ predicate: listPredicate })
			]);
		} });
	}
	function useReadMutation() {
		const invalidateList = useInvalidateList();
		const invalidateSingle = useInvalidateSingle();
		const invalidateSummary = useInvalidateSummary();
		return useMutation(function() {
			var _ref5 = _asyncToGenerator(function* ({ ids, isRead }) {
				ids = ids.filter((id) => !!id && id > 0);
				yield window.top.$e.data[isRead ? "create" : "delete"]("notes/read-status", { ids });
				return ids;
			});
			return function(_x5) {
				return _ref5.apply(this, arguments);
			};
		}(), { onSuccess: (ids) => {
			const singlePredicate = ({ queryKey }) => ids.includes(queryKey[1]);
			const listPredicate = ({ queryKey }) => Object.prototype.hasOwnProperty.call(queryKey[1] || {}, "only_unread");
			return Promise.all([
				invalidateSingle({ predicate: singlePredicate }),
				invalidateSummary({ predicate: listPredicate }),
				invalidateList({
					predicate: listPredicate,
					refetchActive: false
				})
			]);
		} });
	}
	function useInvalidateSingle() {
		const queryClient = useQueryClient();
		return (0, react.useCallback)((_ref6) => {
			let { id } = _ref6, options = _objectWithoutProperties(_ref6, _excluded$7);
			const queryKey = ["note"];
			if (id) queryKey.push(id);
			return queryClient.invalidateQueries(queryKey, options);
		}, [queryClient]);
	}
	function useInvalidateList() {
		const queryClient = useQueryClient();
		return (0, react.useCallback)((options = {}) => {
			return queryClient.invalidateQueries(["notes"], options);
		}, [queryClient]);
	}
	function useInvalidateSummary() {
		const queryClient = useQueryClient();
		return (0, react.useCallback)((options = {}) => {
			return queryClient.invalidateQueries(["notes/summary"], options);
		}, [queryClient]);
	}
	var _excluded$7;
	var init_use_notes_mutations = __esmMin((() => {
		init_note();
		init_use_notes_config();
		init_utils$2();
		init_es$1();
		init_elements();
		init_use_active_thread();
		init_objectSpread2();
		init_asyncToGenerator();
		init_objectWithoutProperties();
		_excluded$7 = ["id"];
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/marks-note-actions-delete-dialog.js
	function MarksNoteActionsDeleteDialog(props) {
		const deleteMutation = useDeleteMutation();
		useWatch(() => {
			if (props.onLoadingChange) props.onLoadingChange(deleteMutation.isLoading);
		}, [deleteMutation.isLoading]);
		return /* @__PURE__ */ react.default.createElement(AlertDialog, {
			open: props.isOpen,
			onOpenChange: props.onOpenChange
		}, /* @__PURE__ */ react.default.createElement(AlertDialog.Content, null, /* @__PURE__ */ react.default.createElement(AlertDialog.DescriptionContainer, null, /* @__PURE__ */ react.default.createElement(AlertDialog.Title, null, props.note.isReply() ? (0, _wordpress_i18n.__)("Delete this reply?", "elementor-pro") : (0, _wordpress_i18n.__)("Delete this note?", "elementor-pro")), /* @__PURE__ */ react.default.createElement(AlertDialog.Description, null, props.note.isReply() ? (0, _wordpress_i18n.__)("Deleted replies can't be recovered.", "elementor-pro") : (0, _wordpress_i18n.__)("Deleted notes can't be recovered.", "elementor-pro"))), /* @__PURE__ */ react.default.createElement(AlertDialog.ActionsContainer, null, /* @__PURE__ */ react.default.createElement(AlertDialog.Cancel, null, (0, _wordpress_i18n.__)("Cancel", "elementor-pro")), /* @__PURE__ */ react.default.createElement(AlertDialog.Action, { onClick: () => {
			window.top.$e.run("notes/delete", { noteId: props.note.id });
			deleteMutation.mutateAsync({
				id: props.note.id,
				parentId: props.note.parentId,
				force: true
			});
		} }, (0, _wordpress_i18n.__)("Delete", "elementor-pro")))));
	}
	var import_prop_types$41;
	var init_marks_note_actions_delete_dialog = __esmMin((() => {
		import_prop_types$41 = /* @__PURE__ */ __toESM(require_prop_types());
		init_alert_dialog();
		init_note();
		init_use_watch();
		init_use_notes_mutations();
		MarksNoteActionsDeleteDialog.propTypes = {
			isOpen: import_prop_types$41.default.bool.isRequired,
			onOpenChange: import_prop_types$41.default.func.isRequired,
			note: import_prop_types$41.default.instanceOf(Note),
			onLoadingChange: import_prop_types$41.default.func
		};
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/marks-note-actions-read.js
	function MarksNoteActionsRead(props) {
		const alreadyRead = props.note.isRead;
		const readMutation = useReadMutation();
		return /* @__PURE__ */ react.default.createElement(Dropdown.Item, {
			icon: "eicon-envelope",
			disabled: readMutation.isLoading,
			onSelect: () => readMutation.mutateAsync({
				ids: [props.note.id, props.note.parentId],
				isRead: !alreadyRead
			})
		}, alreadyRead ? (0, _wordpress_i18n.__)("Mark as unread", "elementor-pro") : (0, _wordpress_i18n.__)("Mark as read", "elementor-pro"));
	}
	var import_prop_types$40;
	var init_marks_note_actions_read = __esmMin((() => {
		import_prop_types$40 = /* @__PURE__ */ __toESM(require_prop_types());
		init_dropdown();
		init_use_notes_mutations();
		MarksNoteActionsRead.propTypes = { note: import_prop_types$40.default.shape({
			id: import_prop_types$40.default.number,
			parentId: import_prop_types$40.default.number,
			isRead: import_prop_types$40.default.bool
		}).isRequired };
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/marks-note-actions-resolve.js
	function MarksNoteActionsResolve(props) {
		const alreadyResolved = props.note.isResolved, resolveMutation = useResolveMutation(), { clearActive } = useActiveThread();
		useWatch(() => {
			if (props.onLoadingChange) props.onLoadingChange(resolveMutation.isLoading);
		}, [resolveMutation.isLoading]);
		return /* @__PURE__ */ react.default.createElement(Tooltip, null, /* @__PURE__ */ react.default.createElement(Tooltip.Trigger, { asChild: true }, /* @__PURE__ */ react.default.createElement(IconButton, {
			name: alreadyResolved ? "eicon-check-circle-o" : "eicon-check",
			disabled: resolveMutation.isLoading,
			onClick: () => __async$6(null, null, function* () {
				const isResolved = !alreadyResolved;
				if (isResolved) window.top.$e.run("notes/resolve", { noteId: props.note.id });
				else window.top.$e.run("notes/re-open", { noteId: props.note.id });
				yield resolveMutation.mutateAsync({
					id: props.note.id,
					isResolved
				});
				if (isResolved) clearActive(props.note.id);
			})
		})), /* @__PURE__ */ react.default.createElement(Tooltip.Content, null, alreadyResolved ? (0, _wordpress_i18n.__)("Re-open", "elementor-pro") : (0, _wordpress_i18n.__)("Resolve", "elementor-pro"), /* @__PURE__ */ react.default.createElement(Tooltip.Arrow, null)));
	}
	var import_prop_types$39, __async$6;
	var init_marks_note_actions_resolve = __esmMin((() => {
		import_prop_types$39 = /* @__PURE__ */ __toESM(require_prop_types());
		init_icon_button();
		init_tooltip();
		init_use_notes_mutations();
		init_use_watch();
		init_use_active_thread();
		init_note();
		__async$6 = /* @__PURE__ */ __name((__this, __arguments, generator) => {
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
		MarksNoteActionsResolve.propTypes = {
			note: import_prop_types$39.default.instanceOf(Note).isRequired,
			onLoadingChange: import_prop_types$39.default.func
		};
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/marks-note-actions-show-readers.js
	function MarksNoteActionsShowReaders(props) {
		if (0 === props.readers.length) return null;
		return /* @__PURE__ */ react.default.createElement(Tooltip, { delayDuration: 400 }, /* @__PURE__ */ react.default.createElement(Tooltip.Trigger, { asChild: true }, /* @__PURE__ */ react.default.createElement(Icon, {
			className: "eicon-preview-medium",
			tabIndex: 0
		})), /* @__PURE__ */ react.default.createElement(TooltipContent$1, null, /* @__PURE__ */ react.default.createElement("strong", null, (0, _wordpress_i18n.__)("Seen by", "elementor-pro") + ": "), props.readers.map((reader) => reader.name).join(", "), /* @__PURE__ */ react.default.createElement(Tooltip.Arrow, null)));
	}
	var import_prop_types$38, TooltipContent$1, Icon;
	var init_marks_note_actions_show_readers = __esmMin((() => {
		import_prop_types$38 = /* @__PURE__ */ __toESM(require_prop_types());
		init_tooltip();
		init_styled_components_browser_esm();
		init_icon();
		TooltipContent$1 = qe(Tooltip.Content)`
  max-width: 200px;
`;
		Icon = qe(Icon$2)`
  padding: 4px !important;
  color: #a4afb7 !important;
  transition: 0.2s all !important;
  display: grid !important;
  place-items: center !important;
  font-size: 18px !important;
  border-radius: 100% !important;

  &:hover, &:focus {
    color: #6d7882;
	outline: none;
	background: #f1f3f5;
  }
`;
		MarksNoteActionsShowReaders.propTypes = { readers: import_prop_types$38.default.arrayOf(import_prop_types$38.default.shape({ name: import_prop_types$38.default.string })).isRequired };
	}));
	//#endregion
	//#region modules/notes/assets/js/app/hooks/use-user-can.js
	var CAPABILITY_CREATE, CAPABILITY_EDIT, CAPABILITY_DELETE, CAPABILITY_CREATE_USERS, CAPABILITY_EDIT_USERS, useUserCan;
	var init_use_user_can = __esmMin((() => {
		init_use_notes_config();
		CAPABILITY_CREATE = "create";
		CAPABILITY_EDIT = "edit";
		CAPABILITY_DELETE = "delete";
		CAPABILITY_CREATE_USERS = "create_users";
		CAPABILITY_EDIT_USERS = "edit_users";
		useUserCan = (capability, note = null) => {
			const notesConfig = useNotesConfig();
			return (0, react.useMemo)(() => {
				if (note) return !!note.userCan[capability];
				return !!notesConfig.current_user_can[capability];
			}, [
				capability,
				note,
				notesConfig
			]);
		};
	}));
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
	var init_copy_to_clipboard = __esmMin((() => {}));
	//#endregion
	//#region modules/notes/assets/js/app/components/marks-note-actions.js
	function MarksNoteActions(props) {
		const { direction } = useNotesConfig(), { setIsDisabled } = useMarksThreadContext(), [isDeleteDialogOpen, setIsDeleteDialogOpen] = (0, react.useState)(false), canDeleteNote = useUserCan(CAPABILITY_DELETE, props.note), canEditNote = useUserCan(CAPABILITY_EDIT, props.note), canResolveNote = props.note.isThread() && canEditNote, shouldRenderDropdown = canEditNote || canDeleteNote || props.note.isThread();
		(0, react.useEffect)(() => {
			return () => setIsDisabled(false);
		}, []);
		return /* @__PURE__ */ react.default.createElement(react.default.Fragment, null, canResolveNote && /* @__PURE__ */ react.default.createElement(MarksNoteActionsResolve, {
			note: props.note,
			onLoadingChange: (isLoading) => setIsDisabled(isLoading)
		}), /* @__PURE__ */ react.default.createElement(MarksNoteActionsShowReaders, { readers: props.note.readers }), shouldRenderDropdown && /* @__PURE__ */ react.default.createElement(Dropdown, {
			modal: false,
			dir: direction,
			onOpenChange: (isOpen) => {
				if (isOpen) window.top.$e.run("notes/open-note-actions");
				else window.top.$e.run("notes/close-note-actions");
			}
		}, /* @__PURE__ */ react.default.createElement(Dropdown.Trigger, { asChild: true }, /* @__PURE__ */ react.default.createElement(IconButton, { name: "eicon-ellipsis-h" })), /* @__PURE__ */ react.default.createElement(Dropdown.Content, { align: "end" }, props.note.isThread() && /* @__PURE__ */ react.default.createElement(MarksNoteActionsRead, { note: props.note }), canEditNote && /* @__PURE__ */ react.default.createElement(Dropdown.Item, {
			onSelect: () => props.setIsEditMode(true),
			icon: "eicon-edit"
		}, (0, _wordpress_i18n.__)("Edit", "elementor-pro")), props.note.isThread() && /* @__PURE__ */ react.default.createElement(Dropdown.Item, {
			onSelect: () => {
				window.top.$e.run("notes/copy-link", { id: props.note.id });
			},
			icon: "eicon-copy",
			disabled: !canCopyToClipboard(),
			tooltip: !canCopyToClipboard() && (0, _wordpress_i18n.__)("Supported in \"https\" sites only", "elementor-pro")
		}, (0, _wordpress_i18n.__)("Copy Link", "elementor-pro")), canDeleteNote && /* @__PURE__ */ react.default.createElement(react.default.Fragment, null, /* @__PURE__ */ react.default.createElement(Dropdown.Separator, null), /* @__PURE__ */ react.default.createElement(Dropdown.Item, {
			onSelect: () => setIsDeleteDialogOpen(true),
			icon: "eicon-trash",
			variant: "danger"
		}, (0, _wordpress_i18n.__)("Delete", "elementor-pro"))), /* @__PURE__ */ react.default.createElement(Dropdown.Arrow, null))), canDeleteNote && /* @__PURE__ */ react.default.createElement(MarksNoteActionsDeleteDialog, {
			note: props.note,
			isOpen: isDeleteDialogOpen,
			onOpenChange: setIsDeleteDialogOpen,
			onLoadingChange: (isLoading) => setIsDisabled(isLoading)
		}));
	}
	var import_prop_types$37;
	var init_marks_note_actions = __esmMin((() => {
		import_prop_types$37 = /* @__PURE__ */ __toESM(require_prop_types());
		init_dropdown();
		init_icon_button();
		init_marks_note_actions_delete_dialog();
		init_marks_note_actions_read();
		init_marks_note_actions_resolve();
		init_marks_note_actions_show_readers();
		init_use_notes_config();
		init_use_user_can();
		init_copy_to_clipboard();
		init_marks_thread();
		init_note();
		MarksNoteActions.propTypes = {
			note: import_prop_types$37.default.instanceOf(Note).isRequired,
			setIsEditMode: import_prop_types$37.default.func.isRequired
		};
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/textarea.js
	var import_prop_types$36, __defProp$11, __defProps$4, __getOwnPropDescs$4, __getOwnPropSymbols$11, __hasOwnProp$11, __propIsEnum$11, __defNormalProp$11, __spreadValues$11, __spreadProps$4, __objRest$2, Container$8, Textarea;
	var init_textarea = __esmMin((() => {
		import_prop_types$36 = /* @__PURE__ */ __toESM(require_prop_types());
		init_styled_components_browser_esm();
		init_div_base();
		__defProp$11 = Object.defineProperty;
		__defProps$4 = Object.defineProperties;
		__getOwnPropDescs$4 = Object.getOwnPropertyDescriptors;
		__getOwnPropSymbols$11 = Object.getOwnPropertySymbols;
		__hasOwnProp$11 = Object.prototype.hasOwnProperty;
		__propIsEnum$11 = Object.prototype.propertyIsEnumerable;
		__defNormalProp$11 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$11(obj, key, {
			enumerable: true,
			configurable: true,
			writable: true,
			value
		}) : obj[key] = value, "__defNormalProp");
		__spreadValues$11 = /* @__PURE__ */ __name((a, b) => {
			for (var prop in b || (b = {})) if (__hasOwnProp$11.call(b, prop)) __defNormalProp$11(a, prop, b[prop]);
			if (__getOwnPropSymbols$11) {
				for (var prop of __getOwnPropSymbols$11(b)) if (__propIsEnum$11.call(b, prop)) __defNormalProp$11(a, prop, b[prop]);
			}
			return a;
		}, "__spreadValues");
		__spreadProps$4 = /* @__PURE__ */ __name((a, b) => __defProps$4(a, __getOwnPropDescs$4(b)), "__spreadProps");
		__objRest$2 = /* @__PURE__ */ __name((source, exclude) => {
			var target = {};
			for (var prop in source) if (__hasOwnProp$11.call(source, prop) && exclude.indexOf(prop) < 0) target[prop] = source[prop];
			if (source != null && __getOwnPropSymbols$11) {
				for (var prop of __getOwnPropSymbols$11(source)) if (exclude.indexOf(prop) < 0 && __propIsEnum$11.call(source, prop)) target[prop] = source[prop];
			}
			return target;
		}, "__objRest");
		Container$8 = qe(DivBase)`
  --font: 300 12px Roboto, sans-serif;
  --line-height: 1.5;
  --padding-block: 8px;

  font-size: 12px !important;
  border-radius: 4px !important;
  border: 1px solid #c2cbd2 !important;
  transition: .3s border-color, .3s opacity !important;
  padding: var(--padding-block) 12px !important;
  overflow: auto !important;
  width: 100% !important;
  box-sizing: border-box !important;

  ${({ maxRows }) => maxRows && Ae`
	--max-rows: ${maxRows};

	max-height: calc((1em * var(--line-height) * var(--max-rows)) + (var(--padding-block) * 2)) !important;
  `};

  textarea {
    all: revert;

	border: none !important;
    font: var( --font ) !important;
	line-height: var(--line-height) !important;
	padding: 0 !important;
	margin: 0 !important;
	color: #6d7882 !important;
	display: block !important;
	height: 100% !important;

	&::placeholder {
	  color: #c2cbd2 !important;
	}
  }

  &:focus-within {
	border-color: #a4afb6 !important;

	// Accessibility-friendly, since the Container itself has a border on focus.
	textarea:focus {
	  outline: none !important;
	  border: none !important;
	}
  }

  ${({ disabled }) => disabled && Ae`
	opacity: .5 !important;
	pointer-events: none !important;
  `}

  ${({ autoSize }) => autoSize && Ae`
	display: inline-grid !important;
	vertical-align: top !important;
	align-items: center !important;

	textarea {
	  grid-area: 2 / 1 !important;
	  resize: none !important;
	  background: none !important;
	  appearance: none !important;
	  box-shadow: none !important;
	  overflow: hidden !important;

	  &::placeholder {
	    all: revert;
	  }
	}

	&::after {
	  content: attr(data-value) ' ' !important;
	  display: block !important;
	  font: var( --font ) !important;
	  white-space: pre-wrap !important;
	  grid-area: 2 / 1 !important;
	  visibility: hidden !important;
	  line-height: var(--line-height) !important;
	}`}`;
		Textarea = react.default.forwardRef((_a, ref) => {
			var _b = _a, { maxRows, autoSize } = _b, props = __objRest$2(_b, ["maxRows", "autoSize"]);
			const containerRef = (0, react.useRef)();
			return /* @__PURE__ */ react.default.createElement(Container$8, {
				maxRows,
				"data-value": props.value || props.defaultValue,
				autoSize,
				ref: containerRef,
				disabled: props.disabled
			}, /* @__PURE__ */ react.default.createElement("textarea", __spreadProps$4(__spreadValues$11({}, props), {
				ref,
				onInput: (e) => {
					if (props.onInput) props.onInput(e);
					containerRef.current.dataset.value = e.target.value;
				}
			})));
		});
		Textarea.displayName = "Textarea";
		Textarea.propTypes = {
			disabled: import_prop_types$36.default.bool,
			autoSize: import_prop_types$36.default.bool,
			maxRows: import_prop_types$36.default.number,
			onInput: import_prop_types$36.default.func,
			value: import_prop_types$36.default.string,
			defaultValue: import_prop_types$36.default.string
		};
	}));
	//#endregion
	//#region modules/notes/assets/js/app/hooks/use-auto-focus.js
	function useAutoFocus(value) {
		const ref = (0, react.useRef)();
		(0, react.useEffect)(() => {
			if (ref.current) {
				const lastCharPosition = value ? value.length : 0;
				ref.current.focus();
				ref.current.setSelectionRange(lastCharPosition, lastCharPosition);
			}
		}, []);
		return ref;
	}
	var init_use_auto_focus = __esmMin((() => {}));
	//#endregion
	//#region modules/notes/assets/js/app/hooks/use-users.js
	function useUsers(rawOptions = {}) {
		const options = (0, react.useMemo)(() => _objectSpread2(_objectSpread2({}, defaultOptions$2), rawOptions), [rawOptions]);
		return useQuery(["users", (0, react.useMemo)(() => {
			return normalizeQueryParams(options.params || {});
		}, [options.params])], function() {
			var _ref = _asyncToGenerator(function* ({ queryKey: [, params], signal }) {
				const { data } = yield window.top.$e.data.get("notes/users", params, {
					refresh: true,
					signal
				});
				return data.data.map((user) => {
					return User.createFromResponse(user);
				});
			});
			return function(_x) {
				return _ref.apply(this, arguments);
			};
		}(), {
			keepPreviousData: true,
			enabled: options.enabled
		});
	}
	var defaultOptions$2;
	var init_use_users = __esmMin((() => {
		init_utils$2();
		init_es$1();
		init_user();
		init_objectSpread2();
		init_asyncToGenerator();
		defaultOptions$2 = {
			enabled: true,
			params: {}
		};
	}));
	//#endregion
	//#region modules/notes/assets/js/app/hooks/use-debounced-callback.js
	function useDebouncedCallback(callback, wait) {
		const timeout = (0, react.useRef)();
		return (0, react.useCallback)((...args) => {
			const later = () => {
				clearTimeout(timeout.current);
				callback(...args);
			};
			clearTimeout(timeout.current);
			timeout.current = setTimeout(later, wait);
		}, [callback, wait]);
	}
	var init_use_debounced_callback = __esmMin((() => {}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/typeahead/typeahead-list.js
	var TypeaheadList;
	var init_typeahead_list = __esmMin((() => {
		init_styled_components_browser_esm();
		TypeaheadList = qe.ul`
	all: revert;

	padding: 0 !important;
	margin: 0 !important;
	list-style: none !important;
	width: 272px !important;
	z-index: 1 !important; // Just needs any 'z-index' value in order to appear above other things.
	background: #ffffff !important;
	border-radius: 3px !important;
	box-shadow: 0 1px 20px rgba(0, 0, 0, 0.15) !important;
`;
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/typeahead/typeahead-list-item.js
	function TypeaheadListItem(_a) {
		var _b = _a, { children, value, disabled } = _b, rest = __objRest$1(_b, [
			"children",
			"value",
			"disabled"
		]);
		return /* @__PURE__ */ react.default.createElement(StyledItem$1, __spreadValues$10(__spreadValues$10({
			role: disabled ? "listitem" : "option",
			"data-value": value
		}, disabled ? { "aria-disabled": true } : {}), rest), children);
	}
	var import_prop_types$35, __defProp$10, __getOwnPropSymbols$10, __hasOwnProp$10, __propIsEnum$10, __defNormalProp$10, __spreadValues$10, __objRest$1, StyledItem$1;
	var init_typeahead_list_item = __esmMin((() => {
		import_prop_types$35 = /* @__PURE__ */ __toESM(require_prop_types());
		init_styled_components_browser_esm();
		__defProp$10 = Object.defineProperty;
		__getOwnPropSymbols$10 = Object.getOwnPropertySymbols;
		__hasOwnProp$10 = Object.prototype.hasOwnProperty;
		__propIsEnum$10 = Object.prototype.propertyIsEnumerable;
		__defNormalProp$10 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$10(obj, key, {
			enumerable: true,
			configurable: true,
			writable: true,
			value
		}) : obj[key] = value, "__defNormalProp");
		__spreadValues$10 = /* @__PURE__ */ __name((a, b) => {
			for (var prop in b || (b = {})) if (__hasOwnProp$10.call(b, prop)) __defNormalProp$10(a, prop, b[prop]);
			if (__getOwnPropSymbols$10) {
				for (var prop of __getOwnPropSymbols$10(b)) if (__propIsEnum$10.call(b, prop)) __defNormalProp$10(a, prop, b[prop]);
			}
			return a;
		}, "__spreadValues");
		__objRest$1 = /* @__PURE__ */ __name((source, exclude) => {
			var target = {};
			for (var prop in source) if (__hasOwnProp$10.call(source, prop) && exclude.indexOf(prop) < 0) target[prop] = source[prop];
			if (source != null && __getOwnPropSymbols$10) {
				for (var prop of __getOwnPropSymbols$10(source)) if (exclude.indexOf(prop) < 0 && __propIsEnum$10.call(source, prop)) target[prop] = source[prop];
			}
			return target;
		}, "__objRest");
		StyledItem$1 = qe.li`
	all: revert;

	font-family: Roboto, sans-serif !important;
	font-size: 12px !important;
	color: #6d7882 !important;
	background: #ffffff !important;
	padding: 8px !important;
	cursor: pointer !important;

	&:first-child {
		border-top-right-radius: inherit;
		border-top-left-radius: inherit;
	}

	&:last-child {
		border-bottom-right-radius: inherit;
		border-bottom-left-radius: inherit;
	}

	&[role="option"]:hover,
	&[aria-selected="true"] {
		background: #58d0f5 !important;

		&,
		& * {
			color: #ffffff !important;
		}
	}

	&[aria-disabled="true"] {
		cursor: not-allowed !important;
		opacity: .5 !important;
	}
`;
		TypeaheadListItem.propTypes = {
			value: import_prop_types$35.default.string.isRequired,
			disabled: import_prop_types$35.default.bool,
			children: import_prop_types$35.default.oneOfType([import_prop_types$35.default.node, import_prop_types$35.default.arrayOf(import_prop_types$35.default.node)]).isRequired
		};
		TypeaheadListItem.defaultProps = { value: "" };
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/typeahead/typeahead-list-footer.js
	var TypeaheadListFooter;
	var init_typeahead_list_footer = __esmMin((() => {
		init_typeahead_list_item();
		init_styled_components_browser_esm();
		TypeaheadListFooter = qe(TypeaheadListItem).attrs(() => ({ role: "contentinfo" }))`
	font-family: Roboto, sans-serif !important;
	background: #f1f3f5 !important;
	text-align: center !important;
	font-size: 12px !important;
  	line-height: 1.5 !important;
`;
	}));
	//#endregion
	//#region node_modules/@github/combobox-nav/dist/index.js
	function keyboardBindings(event, combobox) {
		if (event.shiftKey || event.metaKey || event.altKey) return;
		if (!combobox.ctrlBindings && event.ctrlKey) return;
		if (combobox.isComposing) return;
		switch (event.key) {
			case "Enter":
				if (commit(combobox.input, combobox.list)) event.preventDefault();
				break;
			case "Tab":
				if (combobox.tabInsertsSuggestions && commit(combobox.input, combobox.list)) event.preventDefault();
				break;
			case "Escape":
				combobox.clearSelection();
				break;
			case "ArrowDown":
				combobox.navigate(1);
				event.preventDefault();
				break;
			case "ArrowUp":
				combobox.navigate(-1);
				event.preventDefault();
				break;
			case "n":
				if (combobox.ctrlBindings && event.ctrlKey) {
					combobox.navigate(1);
					event.preventDefault();
				}
				break;
			case "p":
				if (combobox.ctrlBindings && event.ctrlKey) {
					combobox.navigate(-1);
					event.preventDefault();
				}
				break;
			default:
				if (event.ctrlKey) break;
				combobox.clearSelection();
		}
	}
	function commitWithElement(event) {
		if (!(event.target instanceof Element)) return;
		const target = event.target.closest("[role=\"option\"]");
		if (!target) return;
		if (target.getAttribute("aria-disabled") === "true") return;
		fireCommitEvent(target, { event });
	}
	function commit(input, list) {
		const target = list.querySelector("[aria-selected=\"true\"], [data-combobox-option-default=\"true\"]");
		if (!target) return false;
		if (target.getAttribute("aria-disabled") === "true") return true;
		target.click();
		return true;
	}
	function fireCommitEvent(target, detail) {
		target.dispatchEvent(new CustomEvent("combobox-commit", {
			bubbles: true,
			detail
		}));
	}
	function fireSelectEvent(target) {
		target.dispatchEvent(new Event("combobox-select", { bubbles: true }));
	}
	function visible(el) {
		return !el.hidden && !(el instanceof HTMLInputElement && el.type === "hidden") && (el.offsetWidth > 0 || el.offsetHeight > 0);
	}
	function trackComposition(event, combobox) {
		combobox.isComposing = event.type === "compositionstart";
		if (!document.getElementById(combobox.input.getAttribute("aria-controls") || "")) return;
		combobox.clearSelection();
	}
	var Combobox;
	var init_dist$1 = __esmMin((() => {
		Combobox = class {
			constructor(input, list, { tabInsertsSuggestions, defaultFirstOption, scrollIntoViewOptions } = {}) {
				this.input = input;
				this.list = list;
				this.tabInsertsSuggestions = tabInsertsSuggestions !== null && tabInsertsSuggestions !== void 0 ? tabInsertsSuggestions : true;
				this.defaultFirstOption = defaultFirstOption !== null && defaultFirstOption !== void 0 ? defaultFirstOption : false;
				this.scrollIntoViewOptions = scrollIntoViewOptions !== null && scrollIntoViewOptions !== void 0 ? scrollIntoViewOptions : {
					block: "nearest",
					inline: "nearest"
				};
				this.isComposing = false;
				if (!list.id) list.id = `combobox-${Math.random().toString().slice(2, 6)}`;
				this.ctrlBindings = !!navigator.userAgent.match(/Macintosh/);
				this.keyboardEventHandler = (event) => keyboardBindings(event, this);
				this.compositionEventHandler = (event) => trackComposition(event, this);
				this.inputHandler = this.clearSelection.bind(this);
				input.setAttribute("role", "combobox");
				input.setAttribute("aria-controls", list.id);
				input.setAttribute("aria-expanded", "false");
				input.setAttribute("aria-autocomplete", "list");
				input.setAttribute("aria-haspopup", "listbox");
			}
			destroy() {
				this.clearSelection();
				this.stop();
				this.input.removeAttribute("role");
				this.input.removeAttribute("aria-controls");
				this.input.removeAttribute("aria-expanded");
				this.input.removeAttribute("aria-autocomplete");
				this.input.removeAttribute("aria-haspopup");
			}
			start() {
				this.input.setAttribute("aria-expanded", "true");
				this.input.addEventListener("compositionstart", this.compositionEventHandler);
				this.input.addEventListener("compositionend", this.compositionEventHandler);
				this.input.addEventListener("input", this.inputHandler);
				this.input.addEventListener("keydown", this.keyboardEventHandler);
				this.list.addEventListener("click", commitWithElement);
				this.indicateDefaultOption();
			}
			stop() {
				this.clearSelection();
				this.input.setAttribute("aria-expanded", "false");
				this.input.removeEventListener("compositionstart", this.compositionEventHandler);
				this.input.removeEventListener("compositionend", this.compositionEventHandler);
				this.input.removeEventListener("input", this.inputHandler);
				this.input.removeEventListener("keydown", this.keyboardEventHandler);
				this.list.removeEventListener("click", commitWithElement);
			}
			indicateDefaultOption() {
				var _a;
				if (this.defaultFirstOption) (_a = Array.from(this.list.querySelectorAll("[role=\"option\"]:not([aria-disabled=\"true\"])")).filter(visible)[0]) === null || _a === void 0 || _a.setAttribute("data-combobox-option-default", "true");
			}
			navigate(indexDiff = 1) {
				const focusEl = Array.from(this.list.querySelectorAll("[aria-selected=\"true\"]")).filter(visible)[0];
				const els = Array.from(this.list.querySelectorAll("[role=\"option\"]")).filter(visible);
				const focusIndex = els.indexOf(focusEl);
				if (focusIndex === els.length - 1 && indexDiff === 1 || focusIndex === 0 && indexDiff === -1) {
					this.clearSelection();
					this.input.focus();
					return;
				}
				let indexOfItem = indexDiff === 1 ? 0 : els.length - 1;
				if (focusEl && focusIndex >= 0) {
					const newIndex = focusIndex + indexDiff;
					if (newIndex >= 0 && newIndex < els.length) indexOfItem = newIndex;
				}
				const target = els[indexOfItem];
				if (!target) return;
				for (const el of els) {
					el.removeAttribute("data-combobox-option-default");
					if (target === el) {
						this.input.setAttribute("aria-activedescendant", target.id);
						target.setAttribute("aria-selected", "true");
						fireSelectEvent(target);
						target.scrollIntoView(this.scrollIntoViewOptions);
					} else el.removeAttribute("aria-selected");
				}
			}
			clearSelection() {
				this.input.removeAttribute("aria-activedescendant");
				for (const el of this.list.querySelectorAll("[aria-selected=\"true\"]")) el.removeAttribute("aria-selected");
				this.indicateDefaultOption();
			}
		};
	}));
	//#endregion
	//#region \0@oxc-project+runtime@0.140.0/helpers/esm/checkPrivateRedeclaration.js
	function _checkPrivateRedeclaration(e, t) {
		if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
	}
	var init_checkPrivateRedeclaration = __esmMin((() => {}));
	//#endregion
	//#region \0@oxc-project+runtime@0.140.0/helpers/esm/classPrivateMethodInitSpec.js
	function _classPrivateMethodInitSpec(e, a) {
		_checkPrivateRedeclaration(e, a), a.add(e);
	}
	var init_classPrivateMethodInitSpec = __esmMin((() => {
		init_checkPrivateRedeclaration();
	}));
	//#endregion
	//#region \0@oxc-project+runtime@0.140.0/helpers/esm/classPrivateFieldInitSpec.js
	function _classPrivateFieldInitSpec(e, t, a) {
		_checkPrivateRedeclaration(e, t), t.set(e, a);
	}
	var init_classPrivateFieldInitSpec = __esmMin((() => {
		init_checkPrivateRedeclaration();
	}));
	//#endregion
	//#region \0@oxc-project+runtime@0.140.0/helpers/esm/assertClassBrand.js
	function _assertClassBrand(e, t, n) {
		if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
		throw new TypeError("Private element is not present on this object");
	}
	var init_assertClassBrand = __esmMin((() => {}));
	//#endregion
	//#region \0@oxc-project+runtime@0.140.0/helpers/esm/classPrivateFieldSet2.js
	function _classPrivateFieldSet2(s, a, r) {
		return s.set(_assertClassBrand(s, a), r), r;
	}
	var init_classPrivateFieldSet2 = __esmMin((() => {
		init_assertClassBrand();
	}));
	//#endregion
	//#region \0@oxc-project+runtime@0.140.0/helpers/esm/classPrivateFieldGet2.js
	function _classPrivateFieldGet2(s, a) {
		return s.get(_assertClassBrand(s, a));
	}
	var init_classPrivateFieldGet2 = __esmMin((() => {
		init_assertClassBrand();
	}));
	//#endregion
	//#region node_modules/@github/text-expander-element/dist/index.js
	function query(text, key, cursor, { multiWord, lookBackIndex, lastMatchPosition } = {
		multiWord: false,
		lookBackIndex: 0,
		lastMatchPosition: null
	}) {
		let keyIndex = text.lastIndexOf(key, cursor - 1);
		if (keyIndex === -1) return;
		if (keyIndex < lookBackIndex) return;
		if (multiWord) {
			if (lastMatchPosition != null) {
				if (lastMatchPosition === keyIndex) return;
				keyIndex = lastMatchPosition - key.length;
			}
			if (text[keyIndex + 1] === " " && cursor >= keyIndex + key.length + 1) return;
			if (text.lastIndexOf("\n", cursor - 1) > keyIndex) return;
			if (text.lastIndexOf(".", cursor - 1) > keyIndex) return;
		} else if (text.lastIndexOf(" ", cursor - 1) > keyIndex) return;
		const pre = text[keyIndex - 1];
		if (pre && !boundary.test(pre)) return;
		return {
			text: text.substring(keyIndex + key.length, cursor),
			position: keyIndex + key.length
		};
	}
	function _get_input() {
		var _classPrivateFieldGet3;
		return (_classPrivateFieldGet3 = _classPrivateFieldGet2(_inputRef, this)) === null || _classPrivateFieldGet3 === void 0 ? void 0 : _classPrivateFieldGet3.deref();
	}
	/** Perform `fn` using the `input` if it is still available. If not, clean up the clone instead. */
	function _usingInput(fn) {
		const input = _get_input.call(_assertClassBrand(_InputStyleClone_brand, this));
		if (!input) return this.disconnect();
		return fn(input);
	}
	/**
	* Update only geometric properties without recalculating styles. Typically call `#requestUpdateLayout` instead to
	* only update once per animation frame.
	*/
	function _updateLayout() {
		_assertClassBrand(_InputStyleClone_brand, this, _usingInput).call(this, (input) => {
			const inputStyle = window.getComputedStyle(input);
			_classPrivateFieldGet2(_cloneElement, this).style.height = inputStyle.height;
			_classPrivateFieldGet2(_cloneElement, this).style.width = inputStyle.width;
			if (input.clientHeight !== _classPrivateFieldGet2(_cloneElement, this).clientHeight) _classPrivateFieldGet2(_cloneElement, this).style.height = `calc(${inputStyle.height} + ${input.clientHeight - _classPrivateFieldGet2(_cloneElement, this).clientHeight}px)`;
			if (input.clientWidth !== _classPrivateFieldGet2(_cloneElement, this).clientWidth) _classPrivateFieldGet2(_cloneElement, this).style.width = `calc(${inputStyle.width} + ${input.clientWidth - _classPrivateFieldGet2(_cloneElement, this).clientWidth}px)`;
			const inputRect = input.getBoundingClientRect();
			const cloneRect = _classPrivateFieldGet2(_cloneElement, this).getBoundingClientRect();
			_classPrivateFieldSet2(_xOffset, this, _classPrivateFieldGet2(_xOffset, this) + inputRect.left - cloneRect.left);
			_classPrivateFieldSet2(_yOffset, this, _classPrivateFieldGet2(_yOffset, this) + inputRect.top - cloneRect.top);
			_classPrivateFieldGet2(_cloneElement, this).style.transform = `translate(${_classPrivateFieldGet2(_xOffset, this)}px, ${_classPrivateFieldGet2(_yOffset, this)}px)`;
			_classPrivateFieldGet2(_cloneElement, this).scrollTop = input.scrollTop;
			_classPrivateFieldGet2(_cloneElement, this).scrollLeft = input.scrollLeft;
			this.dispatchEvent(new InputStyleCloneUpdateEvent());
		});
	}
	/** Request a layout update. Will only happen once per animation frame, to avoid unecessary updates. */
	function _requestUpdateLayout() {
		if (_classPrivateFieldGet2(_isLayoutUpdating, this)) return;
		_classPrivateFieldSet2(_isLayoutUpdating, this, true);
		requestAnimationFrame(() => {
			_assertClassBrand(_InputStyleClone_brand, this, _updateLayout).call(this);
			_classPrivateFieldSet2(_isLayoutUpdating, this, false);
		});
	}
	/** Update the styles of the clone based on the styles of the input, then request a layout update. */
	function _updateStyles() {
		_assertClassBrand(_InputStyleClone_brand, this, _usingInput).call(this, (input) => {
			const inputStyle = window.getComputedStyle(input);
			for (const prop of propertiesToCopy) _classPrivateFieldGet2(_cloneElement, this).style[prop] = inputStyle[prop];
			_assertClassBrand(_InputStyleClone_brand, this, _requestUpdateLayout).call(this);
		});
	}
	/**
	* Update the text content of the clone based on the text content of the input. Triggers a layout update in case the
	* text update caused scrolling.
	*/
	function _updateText() {
		_assertClassBrand(_InputStyleClone_brand, this, _usingInput).call(this, (input) => {
			_classPrivateFieldGet2(_cloneElement, this).textContent = input.value;
			_assertClassBrand(_InputStyleClone_brand, this, _updateLayout).call(this);
		});
	}
	function _get_styleClone() {
		return InputStyleClone.for(_classPrivateFieldGet2(_inputElement, this));
	}
	function _get_cloneElement() {
		return _get_styleClone.call(_assertClassBrand(_InputRange_brand, this));
	}
	function _clampOffset(offset) {
		return Math.max(0, Math.min(offset, _classPrivateFieldGet2(_inputElement, this).value.length));
	}
	function _createCloneRange() {
		const range = document.createRange();
		const textNode = _get_cloneElement.call(_assertClassBrand(_InputRange_brand, this)).element.childNodes[0];
		if (textNode) {
			range.setStart(textNode, this.startOffset);
			range.setEnd(textNode, this.endOffset);
		}
		return range;
	}
	var boundary, InputStyleCloneUpdateEvent, CloneRegistry, _styleObserver, _resizeObserver, _inputRef, _container, _cloneElement, _InputStyleClone_brand, _xOffset, _yOffset, _isLayoutUpdating, _onInput, _onDocumentScrollOrResize, InputStyleClone, propertiesToCopy, _inputElement, _startOffset, _endOffset, _InputRange_brand, InputRange, states, TextExpander, TextExpanderElement;
	var init_dist = __esmMin((() => {
		init_dist$1();
		init_classPrivateMethodInitSpec();
		init_classPrivateFieldInitSpec();
		init_assertClassBrand();
		init_classPrivateFieldSet2();
		init_classPrivateFieldGet2();
		init_asyncToGenerator();
		boundary = /\s|\(|\[/;
		InputStyleCloneUpdateEvent = class extends Event {
			constructor() {
				super("update");
			}
		};
		CloneRegistry = /* @__PURE__ */ new WeakMap();
		_styleObserver = /* @__PURE__ */ new WeakMap();
		_resizeObserver = /* @__PURE__ */ new WeakMap();
		_inputRef = /* @__PURE__ */ new WeakMap();
		_container = /* @__PURE__ */ new WeakMap();
		_cloneElement = /* @__PURE__ */ new WeakMap();
		_InputStyleClone_brand = /* @__PURE__ */ new WeakSet();
		_xOffset = /* @__PURE__ */ new WeakMap();
		_yOffset = /* @__PURE__ */ new WeakMap();
		_isLayoutUpdating = /* @__PURE__ */ new WeakMap();
		_onInput = /* @__PURE__ */ new WeakMap();
		_onDocumentScrollOrResize = /* @__PURE__ */ new WeakMap();
		InputStyleClone = class InputStyleClone extends EventTarget {
			/**
			* Get the clone for an input, reusing an existing one if available. This avoids creating unecessary clones, which
			* have a performance cost due to their high-frequency event-based updates. Because these elements are shared, they
			* should be mutated with caution. If you're planning to mutate the clone, consider constructing a new one instead.
			*
			* Upon initial creation the clone element will automatically be inserted into the DOM and begin observing the
			* linked input.
			* @param input The target input to clone.
			*/
			static for(input) {
				let clone = CloneRegistry.get(input);
				if (!clone) {
					clone = new InputStyleClone(input);
					CloneRegistry.set(input, clone);
				}
				return clone;
			}
			/**
			* Connect this instance to a target input element and insert this instance into the DOM in the correct location.
			*
			* NOTE: calling the static `for` method is usually preferable as it will reuse an existing clone if available.
			* However, if reusing clones is problematic (ie, if the clone needs to be mutated), a clone can be constructed
			* directly with `new InputStyleClone(target)`.
			*/
			constructor(input) {
				super();
				_classPrivateMethodInitSpec(this, _InputStyleClone_brand);
				_classPrivateFieldInitSpec(this, _styleObserver, new MutationObserver(() => _assertClassBrand(_InputStyleClone_brand, this, _updateStyles).call(this)));
				_classPrivateFieldInitSpec(this, _resizeObserver, new ResizeObserver(() => _assertClassBrand(_InputStyleClone_brand, this, _requestUpdateLayout).call(this)));
				_classPrivateFieldInitSpec(this, _inputRef, void 0);
				_classPrivateFieldInitSpec(this, _container, document.createElement("div"));
				_classPrivateFieldInitSpec(this, _cloneElement, document.createElement("div"));
				_classPrivateFieldInitSpec(this, _xOffset, 0);
				_classPrivateFieldInitSpec(this, _yOffset, 0);
				_classPrivateFieldInitSpec(this, _isLayoutUpdating, false);
				_classPrivateFieldInitSpec(this, _onInput, () => _assertClassBrand(_InputStyleClone_brand, this, _updateText).call(this));
				_classPrivateFieldInitSpec(this, _onDocumentScrollOrResize, (event) => {
					_assertClassBrand(_InputStyleClone_brand, this, _usingInput).call(this, (input) => {
						if (event.target === document || event.target === window || event.target instanceof Node && event.target.contains(input)) _assertClassBrand(_InputStyleClone_brand, this, _requestUpdateLayout).call(this);
					});
				});
				_classPrivateFieldSet2(_inputRef, this, new WeakRef(input));
				_classPrivateFieldGet2(_container, this).style.position = "absolute";
				_classPrivateFieldGet2(_container, this).style.pointerEvents = "none";
				_classPrivateFieldGet2(_container, this).setAttribute("aria-hidden", "true");
				_classPrivateFieldGet2(_container, this).appendChild(_classPrivateFieldGet2(_cloneElement, this));
				_classPrivateFieldGet2(_cloneElement, this).style.pointerEvents = "none";
				_classPrivateFieldGet2(_cloneElement, this).style.userSelect = "none";
				_classPrivateFieldGet2(_cloneElement, this).style.overflow = "hidden";
				_classPrivateFieldGet2(_cloneElement, this).style.display = "block";
				_classPrivateFieldGet2(_cloneElement, this).style.visibility = "hidden";
				if (input instanceof HTMLTextAreaElement) {
					_classPrivateFieldGet2(_cloneElement, this).style.whiteSpace = "pre-wrap";
					_classPrivateFieldGet2(_cloneElement, this).style.wordWrap = "break-word";
				} else {
					_classPrivateFieldGet2(_cloneElement, this).style.whiteSpace = "nowrap";
					_classPrivateFieldGet2(_cloneElement, this).style.display = "table-cell";
					_classPrivateFieldGet2(_cloneElement, this).style.verticalAlign = "middle";
				}
				input.after(_classPrivateFieldGet2(_container, this));
				_assertClassBrand(_InputStyleClone_brand, this, _updateStyles).call(this);
				_assertClassBrand(_InputStyleClone_brand, this, _updateText).call(this);
				_classPrivateFieldGet2(_styleObserver, this).observe(input, { attributeFilter: ["style", "dir"] });
				_classPrivateFieldGet2(_resizeObserver, this).observe(input);
				document.addEventListener("scroll", _classPrivateFieldGet2(_onDocumentScrollOrResize, this), { capture: true });
				window.addEventListener("resize", _classPrivateFieldGet2(_onDocumentScrollOrResize, this), { capture: true });
				input.addEventListener("input", _classPrivateFieldGet2(_onInput, this), { capture: true });
			}
			/** Get the clone element. */
			get element() {
				return _classPrivateFieldGet2(_cloneElement, this);
			}
			/**
			* Force a recalculation. Will emit an `update` event. This is typically not needed unless the input has changed in
			* an unobservable way, eg by directly writing to the `value` property.
			*/
			forceUpdate() {
				_assertClassBrand(_InputStyleClone_brand, this, _updateStyles).call(this);
				_assertClassBrand(_InputStyleClone_brand, this, _updateText).call(this);
			}
			disconnect() {
				var _classPrivateFieldGet2$1;
				(_classPrivateFieldGet2$1 = _classPrivateFieldGet2(_container, this)) === null || _classPrivateFieldGet2$1 === void 0 || _classPrivateFieldGet2$1.remove();
				_classPrivateFieldGet2(_styleObserver, this).disconnect();
				_classPrivateFieldGet2(_resizeObserver, this).disconnect();
				document.removeEventListener("scroll", _classPrivateFieldGet2(_onDocumentScrollOrResize, this), { capture: true });
				window.removeEventListener("resize", _classPrivateFieldGet2(_onDocumentScrollOrResize, this), { capture: true });
				const input = _get_input.call(_assertClassBrand(_InputStyleClone_brand, this));
				if (input) {
					input.removeEventListener("input", _classPrivateFieldGet2(_onInput, this), { capture: true });
					CloneRegistry.delete(input);
				}
			}
		};
		propertiesToCopy = [
			"direction",
			"writingMode",
			"unicodeBidi",
			"textOrientation",
			"boxSizing",
			"borderTopWidth",
			"borderRightWidth",
			"borderBottomWidth",
			"borderLeftWidth",
			"borderStyle",
			"paddingTop",
			"paddingRight",
			"paddingBottom",
			"paddingLeft",
			"fontStyle",
			"fontVariant",
			"fontWeight",
			"fontStretch",
			"fontSize",
			"fontSizeAdjust",
			"lineHeight",
			"fontFamily",
			"textAlign",
			"textTransform",
			"textIndent",
			"textDecoration",
			"letterSpacing",
			"wordSpacing",
			"tabSize",
			"MozTabSize"
		];
		_inputElement = /* @__PURE__ */ new WeakMap();
		_startOffset = /* @__PURE__ */ new WeakMap();
		_endOffset = /* @__PURE__ */ new WeakMap();
		_InputRange_brand = /* @__PURE__ */ new WeakSet();
		InputRange = class InputRange {
			/**
			* Construct a new `InputRange`.
			* @param element The target input element that contains the content for the range.
			* @param startOffset The inclusive 0-based start index for the range. Will be adjusted to fit in the input contents.
			* @param endOffset The exclusive 0-based end index for the range. Will be adjusted to fit in the input contents.
			*/
			constructor(element, startOffset = 0, endOffset = startOffset) {
				_classPrivateMethodInitSpec(this, _InputRange_brand);
				_classPrivateFieldInitSpec(this, _inputElement, void 0);
				_classPrivateFieldInitSpec(this, _startOffset, void 0);
				_classPrivateFieldInitSpec(this, _endOffset, void 0);
				_classPrivateFieldSet2(_inputElement, this, element);
				_classPrivateFieldSet2(_startOffset, this, startOffset);
				_classPrivateFieldSet2(_endOffset, this, endOffset);
			}
			/**
			* Create a new range from the current user selection. If the input is not focused, the range will just be the start
			* of the input (offsets `0` to `0`).
			*
			* This can be used to get the caret coordinates: if the resulting range is `collapsed`, the location of the
			* `getBoundingClientRect` will be the location of the caret caret (note, however, that the width will be `0` in
			* this case).
			*/
			static fromSelection(input) {
				const { selectionStart, selectionEnd } = input;
				return new InputRange(input, selectionStart !== null && selectionStart !== void 0 ? selectionStart : void 0, selectionEnd !== null && selectionEnd !== void 0 ? selectionEnd : void 0);
			}
			/** Returns true if the start is equal to the end of this range. */
			get collapsed() {
				return this.startOffset === this.endOffset;
			}
			/** Always returns the containing input element. */
			get commonAncestorContainer() {
				return _classPrivateFieldGet2(_inputElement, this);
			}
			/** Always returns the containing input element. */
			get endContainer() {
				return _classPrivateFieldGet2(_inputElement, this);
			}
			/** Always returns the containing input element. */
			get startContainer() {
				return _classPrivateFieldGet2(_inputElement, this);
			}
			get startOffset() {
				return _classPrivateFieldGet2(_startOffset, this);
			}
			get endOffset() {
				return _classPrivateFieldGet2(_endOffset, this);
			}
			/** Update the inclusive start offset. Will be adjusted to fit within the content size. */
			setStartOffset(offset) {
				_classPrivateFieldSet2(_startOffset, this, _assertClassBrand(_InputRange_brand, this, _clampOffset).call(this, offset));
			}
			/** Update the exclusive end offset. Will be adjusted to fit within the content size. */
			setEndOffset(offset) {
				_classPrivateFieldSet2(_endOffset, this, _assertClassBrand(_InputRange_brand, this, _clampOffset).call(this, offset));
			}
			/**
			* Collapse this range to one side.
			* @param toStart If `true`, will collapse to the start side. Otherwise, will collapse to the end.
			*/
			collapse(toStart = false) {
				if (toStart) this.setEndOffset(this.startOffset);
				else this.setStartOffset(this.endOffset);
			}
			/** Returns a `DocumentFragment` containing a new `Text` node containing the content in the range. */
			cloneContents() {
				return _assertClassBrand(_InputRange_brand, this, _createCloneRange).call(this).cloneContents();
			}
			/** Create a copy of this range. */
			cloneRange() {
				return new InputRange(_classPrivateFieldGet2(_inputElement, this), this.startOffset, this.endOffset);
			}
			/**
			* Obtain one rect that contains the entire contents of the range. If the range spans multiple lines, this box will
			* contain all pieces of the range but may also contain some space outside the range.
			* @see https://iansan5653.github.io/dom-input-range/demos/playground/
			*/
			getBoundingClientRect() {
				return _assertClassBrand(_InputRange_brand, this, _createCloneRange).call(this).getBoundingClientRect();
			}
			/**
			* Obtain the rects that contain contents of this range. If the range spans multiple lines, there will be multiple
			* bounding boxes. These boxes can be used, for example, to draw a highlight over the range.
			* @see https://iansan5653.github.io/dom-input-range/demos/playground/
			*/
			getClientRects() {
				return _assertClassBrand(_InputRange_brand, this, _createCloneRange).call(this).getClientRects();
			}
			/** Get the contents of the range as a string. */
			toString() {
				return _assertClassBrand(_InputRange_brand, this, _createCloneRange).call(this).toString();
			}
			/**
			* Get the underlying `InputStyleClone` instance powering these calculations. This can be used to listen for
			* updates to trigger layout recalculation.
			*/
			getStyleClone() {
				return _get_styleClone.call(_assertClassBrand(_InputRange_brand, this));
			}
		};
		states = /* @__PURE__ */ new WeakMap();
		TextExpander = class {
			constructor(expander, input) {
				this.expander = expander;
				this.input = input;
				this.combobox = null;
				this.menu = null;
				this.match = null;
				this.justPasted = false;
				this.lookBackIndex = 0;
				this.oninput = this.onInput.bind(this);
				this.onpaste = this.onPaste.bind(this);
				this.onkeydown = this.onKeydown.bind(this);
				this.oncommit = this.onCommit.bind(this);
				this.onmousedown = this.onMousedown.bind(this);
				this.onblur = this.onBlur.bind(this);
				this.interactingWithList = false;
				input.addEventListener("paste", this.onpaste);
				input.addEventListener("input", this.oninput);
				input.addEventListener("keydown", this.onkeydown);
				input.addEventListener("blur", this.onblur);
			}
			destroy() {
				this.input.removeEventListener("paste", this.onpaste);
				this.input.removeEventListener("input", this.oninput);
				this.input.removeEventListener("keydown", this.onkeydown);
				this.input.removeEventListener("blur", this.onblur);
			}
			dismissMenu() {
				if (this.deactivate()) this.lookBackIndex = this.input.selectionEnd || this.lookBackIndex;
			}
			activate(match, menu) {
				var _a;
				var _b;
				if (this.input !== document.activeElement && this.input !== ((_b = (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.activeElement)) return;
				this.deactivate();
				this.menu = menu;
				if (!menu.id) menu.id = `text-expander-${Math.floor(Math.random() * 1e5).toString()}`;
				this.expander.append(menu);
				this.combobox = new Combobox(this.input, menu);
				this.expander.dispatchEvent(new Event("text-expander-activate"));
				this.positionMenu(menu, match.position);
				this.combobox.start();
				menu.addEventListener("combobox-commit", this.oncommit);
				menu.addEventListener("mousedown", this.onmousedown);
				this.combobox.navigate(1);
			}
			positionMenu(menu, position) {
				const clampedPosition = Math.min(position, this.input.value.length);
				const caretRect = new InputRange(this.input, clampedPosition).getBoundingClientRect();
				const targetPosition = {
					left: caretRect.left,
					top: caretRect.top + caretRect.height
				};
				const currentPosition = menu.getBoundingClientRect();
				const delta = {
					left: targetPosition.left - currentPosition.left,
					top: targetPosition.top - currentPosition.top
				};
				if (delta.left !== 0 || delta.top !== 0) {
					const currentStyle = getComputedStyle(menu);
					menu.style.left = currentStyle.left ? `calc(${currentStyle.left} + ${delta.left}px)` : `${delta.left}px`;
					menu.style.top = currentStyle.top ? `calc(${currentStyle.top} + ${delta.top}px)` : `${delta.top}px`;
				}
			}
			deactivate() {
				const menu = this.menu;
				if (!menu || !this.combobox) return false;
				this.expander.dispatchEvent(new Event("text-expander-deactivate"));
				this.menu = null;
				menu.removeEventListener("combobox-commit", this.oncommit);
				menu.removeEventListener("mousedown", this.onmousedown);
				this.combobox.destroy();
				this.combobox = null;
				menu.remove();
				return true;
			}
			onCommit({ target }) {
				var _a;
				const item = target;
				if (!(item instanceof HTMLElement)) return;
				if (!this.combobox) return;
				const match = this.match;
				if (!match) return;
				const beginning = this.input.value.substring(0, match.position - match.key.length);
				const remaining = this.input.value.substring(match.position + match.text.length);
				const detail = {
					item,
					key: match.key,
					value: null,
					continue: false
				};
				if (!this.expander.dispatchEvent(new CustomEvent("text-expander-value", {
					cancelable: true,
					detail
				}))) return;
				if (!detail.value) return;
				let suffix = (_a = this.expander.getAttribute("suffix")) !== null && _a !== void 0 ? _a : " ";
				if (detail.continue) suffix = "";
				const value = `${detail.value}${suffix}`;
				this.input.value = beginning + value + remaining;
				const cursor = beginning.length + value.length;
				this.deactivate();
				this.input.focus({ preventScroll: true });
				this.input.selectionStart = cursor;
				this.input.selectionEnd = cursor;
				if (!detail.continue) {
					this.lookBackIndex = cursor;
					this.match = null;
				}
				this.expander.dispatchEvent(new CustomEvent("text-expander-committed", {
					cancelable: false,
					detail: { input: this.input }
				}));
			}
			onBlur() {
				if (this.interactingWithList) {
					this.interactingWithList = false;
					return;
				}
				this.deactivate();
			}
			onPaste() {
				this.justPasted = true;
			}
			isMatchStillValid(match) {
				return match.position <= this.input.value.length;
			}
			onInput() {
				var _this = this;
				return _asyncToGenerator(function* () {
					if (_this.justPasted) {
						_this.justPasted = false;
						return;
					}
					const match = _this.findMatch();
					if (match) {
						_this.match = match;
						const menu = yield _this.notifyProviders(match);
						if (!_this.match || !_this.isMatchStillValid(match)) {
							_this.match = null;
							_this.deactivate();
							return;
						}
						if (menu) _this.activate(match, menu);
						else _this.deactivate();
					} else {
						_this.match = null;
						_this.deactivate();
					}
				})();
			}
			findMatch() {
				const cursor = this.input.selectionEnd || 0;
				const text = this.input.value;
				if (cursor <= this.lookBackIndex) this.lookBackIndex = cursor - 1;
				for (const { key, multiWord } of this.expander.keys) {
					const found = query(text, key, cursor, {
						multiWord,
						lookBackIndex: this.lookBackIndex,
						lastMatchPosition: this.match ? this.match.position : null
					});
					if (found) return {
						text: found.text,
						key,
						position: found.position
					};
				}
			}
			notifyProviders(match) {
				var _this2 = this;
				return _asyncToGenerator(function* () {
					const providers = [];
					const provide = (result) => providers.push(result);
					const changeEvent = new CustomEvent("text-expander-change", {
						cancelable: true,
						detail: {
							provide,
							text: match.text,
							key: match.key
						}
					});
					if (!_this2.expander.dispatchEvent(changeEvent)) return;
					return (yield Promise.all(providers)).filter((x) => x.matched).map((x) => x.fragment)[0];
				})();
			}
			onMousedown() {
				this.interactingWithList = true;
			}
			onKeydown(event) {
				if (event.key === "Escape") {
					this.match = null;
					if (this.deactivate()) {
						this.lookBackIndex = this.input.selectionEnd || this.lookBackIndex;
						event.stopImmediatePropagation();
						event.preventDefault();
					}
				}
			}
		};
		TextExpanderElement = class extends HTMLElement {
			get keys() {
				const keysAttr = this.getAttribute("keys");
				const keys = keysAttr ? keysAttr.split(" ") : [];
				const multiWordAttr = this.getAttribute("multiword");
				const multiWord = multiWordAttr ? multiWordAttr.split(" ") : [];
				const globalMultiWord = multiWord.length === 0 && this.hasAttribute("multiword");
				return keys.map((key) => ({
					key,
					multiWord: globalMultiWord || multiWord.includes(key)
				}));
			}
			set keys(value) {
				this.setAttribute("keys", value);
			}
			connectedCallback() {
				const input = this.querySelector("input[type=\"text\"], textarea");
				if (!(input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement)) return;
				const state = new TextExpander(this, input);
				states.set(this, state);
			}
			disconnectedCallback() {
				const state = states.get(this);
				if (!state) return;
				state.destroy();
				states.delete(this);
			}
			dismiss() {
				const state = states.get(this);
				if (!state) return;
				state.dismissMenu();
			}
		};
		if (!window.customElements.get("text-expander")) {
			window.TextExpanderElement = TextExpanderElement;
			window.customElements.define("text-expander", TextExpanderElement);
		}
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/typeahead/typeahead.js
	var import_prop_types$34, Typeahead;
	var init_typeahead = __esmMin((() => {
		import_prop_types$34 = /* @__PURE__ */ __toESM(require_prop_types());
		init_use_debounced_callback();
		init_typeahead_list();
		init_typeahead_list_item();
		init_typeahead_list_footer();
		init_dist();
		Typeahead = (props) => {
			const ref = (0, react.useRef)(null);
			const fragment = (0, react.useRef)(null);
			const debouncedResultsRender = useDebouncedCallback(({ resolve, text }) => {
				if (!fragment.current) fragment.current = document.createElement("div");
				const result = props.fragment({ search: text });
				ReactDOM.render(result, fragment.current);
				resolve({
					matched: true,
					fragment: fragment.current
				});
			}, props.debounce);
			const onChange = (e) => {
				const { provide, text } = e.detail;
				provide(new Promise((resolve) => debouncedResultsRender({
					resolve,
					text
				})));
			};
			const onValue = (e) => {
				const { item } = e.detail;
				e.detail.value = `${props.handle}${item.dataset.value}`;
				props.onSelect(item, e);
			};
			(0, react.useEffect)(() => {
				ref.current.addEventListener("text-expander-change", onChange);
				ref.current.addEventListener("text-expander-value", onValue);
				return () => {
					if (ref.current) {
						ref.current.removeEventListener("text-expander-change", onChange);
						ref.current.removeEventListener("text-expander-value", onValue);
					}
				};
			}, []);
			return /* @__PURE__ */ react.default.createElement("text-expander", {
				keys: props.handle,
				ref,
				multiword: props.multiword ? props.handle : null
			}, props.children);
		};
		Typeahead.List = TypeaheadList;
		Typeahead.ListItem = TypeaheadListItem;
		Typeahead.ListFooter = TypeaheadListFooter;
		Typeahead.propTypes = {
			fragment: import_prop_types$34.default.func.isRequired,
			debounce: import_prop_types$34.default.number.isRequired,
			handle: import_prop_types$34.default.string.isRequired,
			multiword: import_prop_types$34.default.bool.isRequired,
			children: import_prop_types$34.default.node.isRequired,
			onSelect: import_prop_types$34.default.func.isRequired
		};
		Typeahead.defaultProps = {
			debounce: 0,
			handle: "@",
			multiword: false,
			onSelect: () => {}
		};
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/mentions/mentions-user-disabled.js
	function MentionsUserDisabled(props) {
		const { urls } = useNotesConfig(), mentionedUserCanEditPost = props.user.capabilities.post.edit, currentUserCanEditUsers = useUserCan(CAPABILITY_EDIT_USERS), currentUserCanFixPermissions = currentUserCanEditUsers && mentionedUserCanEditPost;
		const tooltipLink = currentUserCanEditUsers ? urls.help_notes_features : "";
		const tooltipLabel = currentUserCanFixPermissions ? (0, _wordpress_i18n.__)("Give access to Notes", "elementor-pro") : (0, _wordpress_i18n.__)("Can't mention them", "elementor-pro");
		const tooltipMessage = useTooltipMessage(props.user.capabilities);
		return /* @__PURE__ */ react.default.createElement(UserDisabledTooltip, {
			role: "tooltip",
			"aria-label": tooltipLabel
		}, /* @__PURE__ */ react.default.createElement(TooltipShadow, null), currentUserCanFixPermissions ? /* @__PURE__ */ react.default.createElement(SetPermissionsLink, {
			href: `${urls.admin_url_edit_user}?user_id=${props.user.id}#e-notes`,
			className: "elementor-clickable"
		}, tooltipLabel + " ", /* @__PURE__ */ react.default.createElement(Icon$2, { className: "eicon-editor-external-link" })) : /* @__PURE__ */ react.default.createElement(Tooltip, { delayDuration: 0 }, /* @__PURE__ */ react.default.createElement(Tooltip.Trigger, {
			onMouseDown: (e) => e.preventDefault(),
			asChild: true
		}, /* @__PURE__ */ react.default.createElement(TooltipTriggerText, { "aria-label": tooltipMessage }, tooltipLabel + " ", /* @__PURE__ */ react.default.createElement(Icon$2, { className: "eicon-help-o" }), /* @__PURE__ */ react.default.createElement(TooltipContent, { portalled: false }, tooltipMessage, tooltipLink && /* @__PURE__ */ react.default.createElement(LearnMoreLink, {
			href: tooltipLink,
			className: "elementor-clickable"
		}, (0, _wordpress_i18n.__)("Learn more", "elementor-pro")))))));
	}
	function useTooltipMessage(capabilities) {
		const mentionedUserCanReadNotes = capabilities.notes.read;
		const mentionedUserCanEditPost = capabilities.post.edit;
		if (!useUserCan("edit_users")) return (0, _wordpress_i18n.__)("Contact the site admin to give this person the right permissions.", "elementor-pro");
		if (!mentionedUserCanEditPost) {
			if (!mentionedUserCanReadNotes) return (0, _wordpress_i18n.__)("This person needs: (1) permission to view this post, as well as (2) access to use Notes.", "elementor-pro");
			return (0, _wordpress_i18n.__)("They need permission to view this post.", "elementor-pro");
		}
		return "";
	}
	var import_prop_types$33, UserDisabledTooltip, TooltipShadow, TooltipTriggerText, SetPermissionsLink, TooltipContent, LearnMoreLink;
	var init_mentions_user_disabled = __esmMin((() => {
		import_prop_types$33 = /* @__PURE__ */ __toESM(require_prop_types());
		init_user();
		init_styled_components_browser_esm();
		init_use_notes_config();
		init_use_user_can();
		init_tooltip();
		init_icon();
		UserDisabledTooltip = qe.div`
	display: flex !important;
	position: absolute !important;
	width: 100% !important;
	height: 100% !important;
	inset-inline-start: 0 !important;
	margin: 0 !important;
	padding: 0 !important;
	font-size: 11px !important;

	// Fixes bug with the position of Popover with portalled=false inside another Popover
	// @see https://github.com/radix-ui/primitives/issues/370
	[data-radix-popper-content-wrapper] {
		transform: translateY(-100%) !important;
		top: 10px !important;
		inset-inline-start: auto !important;
		inset-inline-end: -10px !important;
	}
`;
		TooltipShadow = qe.div`
	overflow: hidden !important;
	position: relative !important;
	flex: 1 !important;
	height: 100% !important;

	&::before {
		content: '' !important;
		position: absolute !important;
		width: 100vw !important;
		height: 100vh !important;
		top: 50% !important;
		transform: translateY(-50%) !important;
		inset-inline-end: 0 !important;
		box-shadow: inset 0 0 60px 40px #f1f3f5 !important;
	}
`;
		TooltipTriggerText = qe.div`
	display: inline-flex !important;
	align-items: center !important;
	white-space: pre-wrap !important;
	padding: 10px !important;
	background: #f1f3f5 !important;
`;
		SetPermissionsLink = qe.a.attrs(() => ({
			target: "_blank",
			rel: "noreferrer"
		}))`
	color: #6d7882 !important;
	background: #f1f3f5 !important;
	padding: 10px !important;
	display: inline-flex !important;
	align-items: center !important;

	&:hover,
	&:focus {
		color: #58d0f5 !important;
		text-decoration: none !important;
	}
`;
		TooltipContent = qe(Tooltip.Content)`
	background: #ffffff !important;
	color: #6d7882 !important;
	line-height: 1.3 !important;
	font-style: italic !important;
	padding: 12px !important;
	box-shadow: 0 1px 20px rgba(0, 0, 0, 0.15) !important;
	max-width: 262px !important;
	box-sizing: border-box !important;

	&::after {
		content: '' !important;
		position: absolute !important;
		width: 10px !important;
		height: 10px !important;
		border: 5px solid transparent !important;
		border-top-color: #ffffff !important;
		bottom: -9px !important;
		inset-inline-end: 20px !important;
	}
`;
		LearnMoreLink = qe.a.attrs(() => ({ target: "_blank" }))`
	all: revert;
	display: block !important;
	text-decoration: none !important;
	color: #58d0f5 !important;

	&:hover,
	&:focus {
		text-decoration: underline !important;
	}
`;
		MentionsUserDisabled.propTypes = { user: import_prop_types$33.default.instanceOf(User).isRequired };
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/mentions/mentions-user-list.js
	function MentionsUserList(props) {
		var _a;
		const { route, urls } = useNotesConfig(), canCreateUsers = useUserCan(CAPABILITY_CREATE_USERS);
		const { data = [], isSuccess } = useUsers({ params: __spreadProps$3(__spreadValues$9({}, defaultParams), {
			search: props.search,
			post_id: (_a = route.post_id) != null ? _a : null
		}) });
		return /* @__PURE__ */ react.default.createElement(List, null, data.map((user) => {
			const isUserDisabled = !user.capabilities.notes.read || !user.capabilities.post.edit;
			return /* @__PURE__ */ react.default.createElement(UserContainer, {
				key: user.id,
				value: user.slug,
				disabled: isUserDisabled
			}, /* @__PURE__ */ react.default.createElement(Avatar, {
				size: "md",
				src: user.avatarUrls["48"]
			}), /* @__PURE__ */ react.default.createElement(UserDetails, null, /* @__PURE__ */ react.default.createElement(UserName, null, user.name), /* @__PURE__ */ react.default.createElement(UserSlug, null, user.slug)), isUserDisabled && /* @__PURE__ */ react.default.createElement(MentionsUserDisabled, { user }));
		}), isSuccess && /* @__PURE__ */ react.default.createElement(Typeahead.ListFooter, null, /* @__PURE__ */ react.default.createElement(FooterTitle, null, (0, _wordpress_i18n.__)("Can't find someone?", "elementor-pro")), /* @__PURE__ */ react.default.createElement("br", null), /* @__PURE__ */ react.default.createElement("span", null, canCreateUsers ? /* @__PURE__ */ react.default.createElement(react.default.Fragment, null, (0, _wordpress_i18n.__)("Add them from the", "elementor-pro"), " ", /* @__PURE__ */ react.default.createElement(Link$1, {
			href: urls.admin_url_create_user,
			className: "elementor-clickable"
		}, (0, _wordpress_i18n.__)("WP Dashboard", "elementor-pro"))) : (0, _wordpress_i18n.__)("Ask the site admin to add them", "elementor-pro"))));
	}
	var import_prop_types$32, __defProp$9, __defProps$3, __getOwnPropDescs$3, __getOwnPropSymbols$9, __hasOwnProp$9, __propIsEnum$9, __defNormalProp$9, __spreadValues$9, __spreadProps$3, defaultParams, List, UserDetails, UserContainer, UserName, UserSlug, Link$1, FooterTitle;
	var init_mentions_user_list = __esmMin((() => {
		import_prop_types$32 = /* @__PURE__ */ __toESM(require_prop_types());
		init_use_users();
		init_typeahead();
		init_avatar();
		init_styled_components_browser_esm();
		init_use_notes_config();
		init_use_user_can();
		init_div_base();
		init_mentions_user_disabled();
		__defProp$9 = Object.defineProperty;
		__defProps$3 = Object.defineProperties;
		__getOwnPropDescs$3 = Object.getOwnPropertyDescriptors;
		__getOwnPropSymbols$9 = Object.getOwnPropertySymbols;
		__hasOwnProp$9 = Object.prototype.hasOwnProperty;
		__propIsEnum$9 = Object.prototype.propertyIsEnumerable;
		__defNormalProp$9 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$9(obj, key, {
			enumerable: true,
			configurable: true,
			writable: true,
			value
		}) : obj[key] = value, "__defNormalProp");
		__spreadValues$9 = /* @__PURE__ */ __name((a, b) => {
			for (var prop in b || (b = {})) if (__hasOwnProp$9.call(b, prop)) __defNormalProp$9(a, prop, b[prop]);
			if (__getOwnPropSymbols$9) {
				for (var prop of __getOwnPropSymbols$9(b)) if (__propIsEnum$9.call(b, prop)) __defNormalProp$9(a, prop, b[prop]);
			}
			return a;
		}, "__spreadValues");
		__spreadProps$3 = /* @__PURE__ */ __name((a, b) => __defProps$3(a, __getOwnPropDescs$3(b)), "__spreadProps");
		defaultParams = {
			limit: 5,
			order_by: "user_registered",
			order: "desc"
		};
		List = qe(Typeahead.List)`
	position: absolute !important;
	top: 100% !important;
`;
		UserDetails = qe(DivBase)`
	display: flex !important;
	flex-direction: column !important;
	justify-content: space-between !important;
	gap: 2px !important;

	&::before,
	&::after {
		display: none !important;
	}
`;
		UserContainer = qe(Typeahead.ListItem)`
	display: flex !important;
	flex-direction: row !important;
	align-items: center !important;
	gap: 10px !important;
	position: relative !important;

	&[aria-disabled='true'] {
		opacity: 1 !important;

		&:hover {
			background-color: #f1f3f5 !important;
		}

		${UserDetails} {
			opacity: .5 !important;
		}

		&:not(:hover) {
			> [role='tooltip'] {
				display: none !important;
			}
		}
	}
`;
		UserName = qe.span`
	all: revert;

	padding: 0 !important;
	margin: 0 !important;
	font-size: 12px !important;
	font-weight: 500 !important;
	color: inherit !important;
`;
		UserSlug = qe.span`
	font-size: 10px !important;
	color: #a4afb6 !important;
`;
		Link$1 = qe.a.attrs(() => ({
			target: "_blank",
			rel: "noreferrer"
		}))`
	all: revert;

	color: #58d0f5 !important;
	font-family: Roboto, sans-serif !important;
	font-size: 1em !important;
	font-weight: normal !important;
	text-transform: none !important;
	font-style: normal !important;
	text-decoration: underline !important;
	line-height: normal !important;
	letter-spacing: normal !important;
	word-spacing: normal !important;

	&:hover,
	&:focus {
		color: #6d7882 !important;
		text-decoration: underline; // Repeat in order to override theme styles.
	}
`;
		FooterTitle = qe.strong`
  font-weight: 500 !important;
`;
		MentionsUserList.propTypes = { search: import_prop_types$32.default.string };
	}));
	//#endregion
	//#region modules/notes/assets/js/app/query-client.js
	var query_client_default;
	var init_query_client = __esmMin((() => {
		init_es$1();
		query_client_default = new QueryClient({ defaultOptions: {
			queries: {
				retry: 2,
				refetchOnWindowFocus: true
			},
			mutations: { retry: 2 }
		} });
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/marks-note-textarea.js
	function MarksNoteTextarea(props) {
		const ref = useAutoFocus(props.defaultValue);
		const placeholder = props.isReply ? (0, _wordpress_i18n.__)("Type your reply. Use @ to mention...", "elementor-pro") : (0, _wordpress_i18n.__)("Type a note. Use @ to mention...", "elementor-pro");
		const fragment = ({ search }) => /* @__PURE__ */ react.default.createElement(QueryClientProvider, { client: query_client_default }, /* @__PURE__ */ react.default.createElement(MentionsUserList, { search }));
		return /* @__PURE__ */ react.default.createElement(Container$7, null, /* @__PURE__ */ react.default.createElement(Typeahead, {
			debounce: 250,
			fragment,
			onSelect: () => window.top.$e.run("notes/choose-mention")
		}, /* @__PURE__ */ react.default.createElement(Textarea, {
			name: "content",
			placeholder,
			onKeyDown: (e) => {
				if (props.onMetaAndEnterKeyDown && (e.metaKey || e.ctrlKey) && "enter" === e.key.toLowerCase()) props.onMetaAndEnterKeyDown(e);
			},
			disabled: props.disabled,
			ref,
			defaultValue: props.defaultValue,
			onChange: props.onChange,
			rows: 1,
			maxRows: 6,
			autoSize: true
		})));
	}
	var import_prop_types$31, Container$7;
	var init_marks_note_textarea = __esmMin((() => {
		import_prop_types$31 = /* @__PURE__ */ __toESM(require_prop_types());
		init_textarea();
		init_use_auto_focus();
		init_mentions_user_list();
		init_typeahead();
		init_styled_components_browser_esm();
		init_es$1();
		init_query_client();
		init_div_base();
		Container$7 = qe(DivBase)`
  position: relative;
`;
		MarksNoteTextarea.propTypes = {
			name: import_prop_types$31.default.string,
			disabled: import_prop_types$31.default.bool,
			onMetaAndEnterKeyDown: import_prop_types$31.default.func,
			defaultValue: import_prop_types$31.default.string,
			onChange: import_prop_types$31.default.func,
			isReply: import_prop_types$31.default.bool.isRequired
		};
		MarksNoteTextarea.defaultProps = { isReply: false };
	}));
	//#endregion
	//#region modules/notes/assets/js/app/hooks/use-forms-in-writing-mode.js
	/**
	* A util that manage all the forms that the user start to write some content on them.
	*
	* @return {Object} results
	*/
	function useFormsInWritingMode() {
		const dispatch = useDispatch(), { actions } = window.top.$e.store.get("notes"), formsInWritingMode = useSelector((state) => state.notes.formsInWritingMode);
		return {
			formsInWritingMode,
			isInWritingMode: (0, react.useCallback)((id) => formsInWritingMode.includes(id), [formsInWritingMode]),
			addToWritingMode: (0, react.useCallback)((id) => dispatch(actions.addFormToWritingMode(id)), [dispatch]),
			removeFromWritingMode: (0, react.useCallback)((id) => dispatch(actions.removeFormFromWritingMode(id)), [dispatch])
		};
	}
	var init_use_forms_in_writing_mode = __esmMin((() => {
		init_es();
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/shared/note-form.js
	function NoteForm(_a) {
		var _b = _a, { onReset, onChange, onSubmit } = _b, props = __objRest(_b, [
			"onReset",
			"onChange",
			"onSubmit"
		]);
		const { isInWritingMode, addToWritingMode, removeFromWritingMode } = useFormsInWritingMode();
		return /* @__PURE__ */ react.default.createElement(StyledForm, __spreadProps$2(__spreadValues$8({}, props), {
			onReset: (e) => {
				removeFromWritingMode(props.id);
				const contentEl = e.currentTarget.content;
				if ("undefined" !== typeof contentEl) {
					const event = new Event("input", { bubbles: true });
					contentEl.value = "";
					contentEl.dispatchEvent(event);
				}
				onReset == null || onReset(e);
			},
			onChange: (e) => {
				const hasChanged = e.target.value.trim() !== e.target.defaultValue;
				const isCurrentFormInWritingMode = isInWritingMode(props.id);
				if (hasChanged && !isCurrentFormInWritingMode) addToWritingMode(props.id);
				if (!hasChanged && isCurrentFormInWritingMode) removeFromWritingMode(props.id);
				onChange == null || onChange(e);
			},
			onSubmit: (e) => __async$5(null, null, function* () {
				e.preventDefault();
				if (!isInWritingMode(props.id)) return;
				const form = e.currentTarget;
				const content = form.content.value.trim();
				yield onSubmit == null ? void 0 : onSubmit(e, {
					form,
					content
				});
			})
		}));
	}
	var import_prop_types$30, __defProp$8, __defProps$2, __getOwnPropDescs$2, __getOwnPropSymbols$8, __hasOwnProp$8, __propIsEnum$8, __defNormalProp$8, __spreadValues$8, __spreadProps$2, __objRest, __async$5, StyledForm;
	var init_note_form = __esmMin((() => {
		import_prop_types$30 = /* @__PURE__ */ __toESM(require_prop_types());
		init_styled_components_browser_esm();
		init_div_base();
		init_use_forms_in_writing_mode();
		__defProp$8 = Object.defineProperty;
		__defProps$2 = Object.defineProperties;
		__getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
		__getOwnPropSymbols$8 = Object.getOwnPropertySymbols;
		__hasOwnProp$8 = Object.prototype.hasOwnProperty;
		__propIsEnum$8 = Object.prototype.propertyIsEnumerable;
		__defNormalProp$8 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$8(obj, key, {
			enumerable: true,
			configurable: true,
			writable: true,
			value
		}) : obj[key] = value, "__defNormalProp");
		__spreadValues$8 = /* @__PURE__ */ __name((a, b) => {
			for (var prop in b || (b = {})) if (__hasOwnProp$8.call(b, prop)) __defNormalProp$8(a, prop, b[prop]);
			if (__getOwnPropSymbols$8) {
				for (var prop of __getOwnPropSymbols$8(b)) if (__propIsEnum$8.call(b, prop)) __defNormalProp$8(a, prop, b[prop]);
			}
			return a;
		}, "__spreadValues");
		__spreadProps$2 = /* @__PURE__ */ __name((a, b) => __defProps$2(a, __getOwnPropDescs$2(b)), "__spreadProps");
		__objRest = (source, exclude) => {
			var target = {};
			for (var prop in source) if (__hasOwnProp$8.call(source, prop) && exclude.indexOf(prop) < 0) target[prop] = source[prop];
			if (source != null && __getOwnPropSymbols$8) {
				for (var prop of __getOwnPropSymbols$8(source)) if (exclude.indexOf(prop) < 0 && __propIsEnum$8.call(source, prop)) target[prop] = source[prop];
			}
			return target;
		};
		__async$5 = /* @__PURE__ */ __name((__this, __arguments, generator) => {
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
		StyledForm = qe.form`
  all: revert;

  display: flex !important;
  flex-direction: column !important;
  gap: 16px !important;
`;
		NoteForm.ButtonsContainer = qe(DivBase)`
  display: flex !important;
  flex-direction: row-reverse !important;
  justify-content: end !important;
  gap: 8px !important;
`;
		NoteForm.propTypes = {
			id: import_prop_types$30.default.string.isRequired,
			onChange: import_prop_types$30.default.func,
			onReset: import_prop_types$30.default.func,
			onSubmit: import_prop_types$30.default.func
		};
	}));
	//#endregion
	//#region modules/notes/assets/js/app/hooks/use-reverse-html-entities.js
	function useReverseHtmlEntities(escapedHTML) {
		return (0, react.useMemo)(() => {
			const textarea = document.createElement("textarea");
			textarea.innerHTML = escapedHTML;
			const { value } = textarea;
			textarea.remove();
			return value;
		}, [escapedHTML]);
	}
	var init_use_reverse_html_entities = __esmMin((() => {}));
	//#endregion
	//#region modules/notes/assets/js/app/components/marks-edit-note-form.js
	function MarksEditNoteForm(props) {
		const formId = `e-notes-edit-${props.note.id}`;
		const noteContent = useReverseHtmlEntities(props.note.content);
		const updateMutation = useUpdateMutation(), { isInWritingMode } = useFormsInWritingMode();
		const onSubmit = (_0, _1) => __async$4(null, [_0, _1], function* (e, { content, form }) {
			window.top.$e.run("notes/edit", { noteId: props.note.id });
			yield updateMutation.mutateAsync({
				id: props.note.id,
				values: { content }
			});
			form.reset();
			props.onClose();
		});
		return /* @__PURE__ */ react.default.createElement(NoteForm, {
			onSubmit,
			id: formId
		}, /* @__PURE__ */ react.default.createElement(MarksNoteTextarea, {
			disabled: updateMutation.isLoading,
			defaultValue: noteContent,
			onMetaAndEnterKeyDown: (e) => submitForm(e.currentTarget.form),
			isReply: props.note.isReply()
		}), /* @__PURE__ */ react.default.createElement(NoteForm.ButtonsContainer, null, /* @__PURE__ */ react.default.createElement(Button, {
			disabled: updateMutation.isLoading || !isInWritingMode(formId),
			type: "submit"
		}, (0, _wordpress_i18n.__)("Save", "elementor-pro")), /* @__PURE__ */ react.default.createElement(Button, {
			disabled: updateMutation.isLoading,
			variant: "outlined",
			type: "reset",
			onClick: (e) => {
				window.top.$e.run("notes/cancel-edit", { noteId: props.note.id });
				e.target.form.reset();
				props.onClose(e);
			}
		}, (0, _wordpress_i18n.__)("Cancel", "elementor-pro"))));
	}
	var import_prop_types$29, __async$4;
	var init_marks_edit_note_form = __esmMin((() => {
		import_prop_types$29 = /* @__PURE__ */ __toESM(require_prop_types());
		init_button();
		init_use_notes_mutations();
		init_marks_note_textarea();
		init_note_form();
		init_note();
		init_use_forms_in_writing_mode();
		init_utils$2();
		init_use_reverse_html_entities();
		__async$4 = /* @__PURE__ */ __name((__this, __arguments, generator) => {
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
		MarksEditNoteForm.propTypes = {
			note: import_prop_types$29.default.instanceOf(Note).isRequired,
			onClose: import_prop_types$29.default.func.isRequired
		};
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/shared/note-content/note-content-paragraph.js
	var NoteContentParagraph;
	var init_note_content_paragraph = __esmMin((() => {
		init_styled_components_browser_esm();
		NoteContentParagraph = qe.p`
  --color-gray-600: #6d7882;

  font-family: Roboto, sans-serif !important;
  font-size: 12px !important;
  font-weight: 400 !important;
  text-transform: none !important;
  font-style: normal !important;
  text-decoration: none !important;
  line-height: 1.5 !important;
  letter-spacing: normal !important;
  word-spacing: normal !important;
  color: var(--color-gray-600);
  margin: 0 0 .5em 0 !important;
`;
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/shared/note-content/note-content-mention.js
	var NoteContentMention;
	var init_note_content_mention = __esmMin((() => {
		init_styled_components_browser_esm();
		NoteContentMention = qe.span`
  color: #58d0f5;
`;
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/shared/note-content/note-content-link.js
	var NoteContentLink;
	var init_note_content_link = __esmMin((() => {
		init_styled_components_browser_esm();
		NoteContentLink = qe.a`
  all: revert;

  --color-editor-info: #58d0f5;
  --color-editor-info-dark: #10bcf2;

  font-family: Roboto, sans-serif !important;
  font-size: 1em !important;
  font-weight: normal !important;
  text-transform: none !important;
  font-style: normal !important;
  text-decoration: none !important;
  line-height: normal !important;
  letter-spacing: normal !important;
  word-spacing: normal !important;
  cursor: pointer;


  &,
  &:visited {
    color: var( --color-editor-info ) !important;
  }

  &:hover,
  &:focus {
    color: var( --color-editor-info-dark ) !important;
  }
`;
		NoteContentLink.defaultProps = {
			target: "_blank",
			rel: "noopener noreferrer",
			className: "elementor-clickable"
		};
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/shared/note-content/note-content-url.js
	function NoteContentUrl(props) {
		return /* @__PURE__ */ react.default.createElement(NoteContentLink, { href: props.token.value }, props.children);
	}
	var import_prop_types$28;
	var init_note_content_url = __esmMin((() => {
		import_prop_types$28 = /* @__PURE__ */ __toESM(require_prop_types());
		init_note_content_link();
		NoteContentUrl.propTypes = {
			children: import_prop_types$28.default.node.isRequired,
			token: import_prop_types$28.default.shape({ value: import_prop_types$28.default.string }).isRequired
		};
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/shared/note-content/note-content-email.js
	function NoteContentEmail(props) {
		return /* @__PURE__ */ react.default.createElement(NoteContentLink, { href: `mailto:${props.token.value}` }, props.children);
	}
	var import_prop_types$27;
	var init_note_content_email = __esmMin((() => {
		import_prop_types$27 = /* @__PURE__ */ __toESM(require_prop_types());
		init_note_content_link();
		NoteContentEmail.propTypes = {
			children: import_prop_types$27.default.node.isRequired,
			token: import_prop_types$27.default.shape({ value: import_prop_types$27.default.string }).isRequired
		};
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/shared/note-content/note-content-wow.js
	function NoteContentWow(props) {
		const [isAnimated, setIsAnimated] = (0, react.useState)(false);
		return /* @__PURE__ */ react.default.createElement(StyledSurprise, {
			isAnimated,
			onMouseEnter: () => setIsAnimated(true),
			onAnimationEnd: () => setIsAnimated(false)
		}, props.children);
	}
	var import_prop_types$26, confetti, StyledSurprise;
	var init_note_content_wow = __esmMin((() => {
		import_prop_types$26 = /* @__PURE__ */ __toESM(require_prop_types());
		init_styled_components_browser_esm();
		confetti = We`
  0% {
	opacity: 1;
	background-position: 40% 66%, 54% 40%, 32% 36%, 46% 38%, 38% 55%, 60% 32%, 43% 34%, 31% 35%, 53% 63%, 58% 42%, 56% 37%, 40% 50%, 46% 46%, 36% 59%, 43% 50%, 63% 70%, 44% 40%, 51% 30%, 38% 45%, 37% 62%, 46% 34%, 45% 45%, 43% 44%, 43% 53%, 64% 42%, 31% 36%, 38% 54%, 40% 34%, 64% 48%, 43% 47%, 43% 50%, 56% 40%, 35% 68%, 68% 69%, 63% 35%, 32% 61%, 67% 57%, 51% 43%, 53% 45%, 47% 40%, 33% 42%, 35% 65%, 67% 47%, 30% 44%, 67% 52%, 41% 46%, 44% 55%, 38% 40%, 39% 37%, 37% 35%;
  }

  45% {
	opacity: 1;
	background-size: var(--radius) var(--radius);
  }

  100% {
	opacity: 0;
	background-size: 0 0;
	background-position: 8% 105%, 83% 50%, 53% 74%, 44% 9%, 6% 67%, 13% 62%, 88% 47%, 60% 18%, 78% 50%, 105% 11%, 59% 22%, 47% 98%, 77% 84%, 51% 60%, 70% 10%, 91% 103%, 8% 16%, 61% 1%, -5% 52%, 75% 74%, 58% 52%, 74% 30%, 51% 55%, 13% 78%, 28% 86%, 40% 1%, 24% 38%, 58% 6%, 70% 42%, 11% 22%, 73% 59%, 10% 57%, 72% 22%, 48% 26%, 44% -7%, 72% 29%, 50% 74%, 99% 87%, 17% 36%, 4% -8%, -11% 22%, 79% 95%, 19% 60%, 30% 4%, 110% 5%, 0% 71%, 82% 56%, 9% 68%, 69% 41%, 19% 61%;
  }
`;
		StyledSurprise = qe.span`
  display: inline-block !important;
  position: relative !important;
  isolation: isolate !important;
  box-sizing: border-box !important;

  &::before {
	--radius: 2px;
	--color-1: #d50000;
	--color-2: #c51162;
	--color-3: #aa00ff;
	--color-4: #2962ff;
	--color-5: #00c853;
	--color-6: #ffd600;

	content: '' !important;
	position: absolute !important;
	inset: -25px !important;
	pointer-events: none !important;
	opacity: 0;
	z-index: -1 !important;
	transform: scale(1.5) !important;
	background-repeat: no-repeat !important;
	background-size: calc(2 * var(--radius)) calc(2 * var(--radius));
	background-image: radial-gradient( circle at center, var( --color-6 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-6 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-3 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-4 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-2 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-5 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-1 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-2 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-1 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-1 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-5 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-6 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-5 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-1 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-4 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-1 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-2 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-1 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-3 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-6 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-6 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-4 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-4 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-2 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-3 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-2 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-5 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-5 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-4 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-1 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-6 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-6 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-4 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-3 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-6 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-6 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-4 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-5 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-3 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-3 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-2 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-4 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-2 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-4 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-6 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-4 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-2 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-1 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-6 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-5 ) 49%,transparent 50% ) !important;

  	${({ isAnimated }) => isAnimated && Ae`
	  animation: ${confetti} ease 1s forwards !important;
  	`}
  }
`;
		NoteContentWow.propTypes = {
			children: import_prop_types$26.default.node.isRequired,
			token: import_prop_types$26.default.shape({ value: import_prop_types$26.default.string }).isRequired
		};
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/shared/note-content/note-content-token-renderer.js
	function NoteContentTokenRenderer(props) {
		const Component = (0, react.useMemo)(() => componentMap[props.token.type] || componentMap.default, [props.token.type]);
		return /* @__PURE__ */ react.default.createElement(Component, { token: props.token }, Array.isArray(props.token.value) ? props.token.value.map((childToken, index) => /* @__PURE__ */ react.default.createElement(NoteContentTokenRenderer, {
			token: childToken,
			key: index
		})) : props.token.value);
	}
	var import_prop_types$25, componentMap, tokenShape;
	var init_note_content_token_renderer = __esmMin((() => {
		import_prop_types$25 = /* @__PURE__ */ __toESM(require_prop_types());
		init_note_content_paragraph();
		init_note_content_mention();
		init_note_content_url();
		init_note_content_email();
		init_note_content_wow();
		componentMap = {
			Paragraph: NoteContentParagraph,
			Mention: NoteContentMention,
			Url: NoteContentUrl,
			Email: NoteContentEmail,
			Wow: NoteContentWow,
			default: ({ children }) => children
		};
		tokenShape = {};
		tokenShape.value = import_prop_types$25.default.oneOfType([import_prop_types$25.default.string, import_prop_types$25.default.arrayOf(import_prop_types$25.default.shape(tokenShape))]);
		NoteContentTokenRenderer.propTypes = { token: import_prop_types$25.default.shape(tokenShape) };
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/shared/note-content/note-content.js
	function NoteContent$1(props) {
		const contentToken = (0, react.useMemo)(() => richTextParser.parse(props.children), [props.children]);
		return /* @__PURE__ */ react.default.createElement(Wrapper, {
			disableInteractions: props.disableInteractions,
			className: props.className
		}, contentToken && /* @__PURE__ */ react.default.createElement(NoteContentTokenRenderer, { token: contentToken }));
	}
	var import_prop_types$24, richTextParser, Wrapper;
	var init_note_content$1 = __esmMin((() => {
		import_prop_types$24 = /* @__PURE__ */ __toESM(require_prop_types());
		init_note_content_token_renderer();
		init_rich_text_parser();
		init_styled_components_browser_esm();
		init_div_base();
		richTextParser = createRichTextParser();
		Wrapper = qe(DivBase)`
  white-space: normal;
  word-break: break-word;
  word-wrap: break-word;

  ${({ disableInteractions }) => disableInteractions && Ae`
	pointer-events: none;
  `};
`;
		__name(NoteContent$1, "NoteContent");
		NoteContent$1.propTypes = {
			children: import_prop_types$24.default.string.isRequired,
			disableInteractions: import_prop_types$24.default.bool,
			className: import_prop_types$24.default.string
		};
		NoteContent$1.defaultProps = { disableInteractions: false };
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/shared/note-content/index.js
	var note_content_default;
	var init_note_content = __esmMin((() => {
		init_note_content$1();
		note_content_default = NoteContent$1;
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/marks-note-view-external-indicator.js
	function MarksNoteViewExternalIndicator(props) {
		var _a;
		const { route: currentRoute } = useNotesConfig(), isSameDocument = ((_a = props.note.document) == null ? void 0 : _a.id) === currentRoute.post_id, isSameRoute = props.note.routeUrl === currentRoute.url;
		if (!props.note.document || isSameDocument && isSameRoute) return null;
		return /* @__PURE__ */ react.default.createElement(Text$3, null, (0, _wordpress_i18n.__)("Noted on:", "elementor-pro"), " ", /* @__PURE__ */ react.default.createElement(Strong, null, isSameDocument ? props.note.routeTitle : props.note.document.typeTitle));
	}
	var import_prop_types$23, Text$3, Strong;
	var init_marks_note_view_external_indicator = __esmMin((() => {
		import_prop_types$23 = /* @__PURE__ */ __toESM(require_prop_types());
		init_use_notes_config();
		init_note();
		init_styled_components_browser_esm();
		Text$3 = qe.p`
  all: revert;

  color: #a4afb6 !important;
  margin: 0 !important;
  padding: 0 !important;
  font-family: Roboto, sans-serif !important;
  font-size: 10px !important;
  font-weight: normal !important;
  text-transform: none !important;
  font-style: normal !important;
  text-decoration: none !important;
  line-height: 1.5 !important;
  letter-spacing: normal !important;
  word-spacing: normal !important;
`;
		Strong = qe.strong`
  font-weight: 500;
`;
		MarksNoteViewExternalIndicator.propTypes = { note: import_prop_types$23.default.instanceOf(Note).isRequired };
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/marks-note-view.js
	function MarksNoteView(props) {
		const [isEditMode, setIsEditMode] = (0, react.useState)(false), noteContent = useReverseHtmlEntities(props.note.content);
		return /* @__PURE__ */ react.default.createElement(Container$6, null, /* @__PURE__ */ react.default.createElement(Avatar, {
			size: "md",
			src: props.note.author.avatarUrls["48"]
		}), /* @__PURE__ */ react.default.createElement(Body, null, /* @__PURE__ */ react.default.createElement(Header, null, /* @__PURE__ */ react.default.createElement(HeaderMeta, null, /* @__PURE__ */ react.default.createElement(Text$2, {
			size: "md",
			weight: 500
		}, props.note.author.name), /* @__PURE__ */ react.default.createElement(Text$2, {
			size: "sm",
			lineHeight: 1.5,
			muted: true
		}, props.note.getFormattedCreatedAt())), /* @__PURE__ */ react.default.createElement(HeaderActions, null, !isEditMode && /* @__PURE__ */ react.default.createElement(MarksNoteActions, {
			note: props.note,
			setIsEditMode
		}))), !isEditMode && /* @__PURE__ */ react.default.createElement(note_content_default, null, noteContent), isEditMode && /* @__PURE__ */ react.default.createElement(MarksEditNoteForm, {
			note: props.note,
			onClose: () => setIsEditMode(false)
		}), /* @__PURE__ */ react.default.createElement(MarksNoteViewExternalIndicator, { note: props.note })));
	}
	var import_prop_types$22, sizesMap, Container$6, Body, Header, HeaderMeta, HeaderActions, Text$2;
	var init_marks_note_view = __esmMin((() => {
		import_prop_types$22 = /* @__PURE__ */ __toESM(require_prop_types());
		init_avatar();
		init_marks_note_actions();
		init_marks_edit_note_form();
		init_styled_components_browser_esm();
		init_note();
		init_note_content();
		init_marks_note_view_external_indicator();
		init_div_base();
		init_use_reverse_html_entities();
		sizesMap = {
			sm: { text: 9 },
			md: { text: 12 }
		};
		Container$6 = qe(DivBase)`
  --color-gray-500: #a4afb6;
  --color-gray-600: #6d7882;

  display: flex !important;
  align-items: start !important;
  gap: 12px !important;

  &, & *:not( [class*="eicon"] ) {
    font-family: Roboto, sans-serif !important;
  }
`;
		Body = qe(DivBase)`
  display: flex !important;
  flex-direction: column !important;
  gap: 12px !important;
  flex-grow: 1 !important;
  line-height: 1 !important;
`;
		Header = qe(DivBase)`
  display: flex !important;
  gap: 10px !important;
  padding-top: 4px !important;
  line-height: 1 !important;
`;
		HeaderMeta = qe(DivBase)`
  display: flex !important;
  flex-direction: column !important;
  gap: 5px !important;
  flex-grow: 1 !important;
  line-height: 1 !important;
`;
		HeaderActions = qe(DivBase)`
  display: flex !important;
  gap: 5px !important;
  flex-shrink: 0 !important;
  align-items: center !important;
  line-height: 1 !important;
`;
		Text$2 = qe.span`
  color: var(${({ muted }) => muted ? "--color-gray-500" : "--color-gray-600"}) !important;
  margin: 0 !important;
  padding: 0 !important;

  ${({ size }) => size && Ae`
	font-size: ${sizesMap[size].text}px !important;
  `};

  ${({ weight }) => weight && Ae`
	font-weight: ${weight} !important;
  `};

  ${({ lineHeight }) => Ae`
	line-height: ${lineHeight || 1} !important;
  `};
`;
		MarksNoteView.propTypes = { note: import_prop_types$22.default.instanceOf(Note).isRequired };
	}));
	//#endregion
	//#region modules/notes/assets/js/app/hooks/use-note.js
	function useNote(noteId) {
		const queryClient = useQueryClient();
		const onSuccess = useOnSuccess(queryClient);
		const placeholderData = usePlaceholderDataCallback(queryClient, noteId);
		return useQuery(["note", noteId], function() {
			var _ref = _asyncToGenerator(function* ({ queryKey: [, id], signal }) {
				const { data } = yield window.top.$e.data.get("notes/index", { id }, {
					refresh: true,
					signal
				});
				return Note.createFromResponse(data.data);
			});
			return function(_x) {
				return _ref.apply(this, arguments);
			};
		}(), {
			onSuccess,
			placeholderData
		});
	}
	function usePlaceholderDataCallback(queryClient, noteId) {
		return (0, react.useCallback)(() => {
			var _queryClient$getQuery;
			return (_queryClient$getQuery = queryClient.getQueryData("notes", {
				active: true,
				exact: false
			})) === null || _queryClient$getQuery === void 0 ? void 0 : _queryClient$getQuery.find((note) => note.id === noteId);
		}, [queryClient, noteId]);
	}
	function useOnSuccess(queryClient) {
		return (0, react.useCallback)((fetchedNote) => {
			if (fetchedNote.isReply()) return;
			queryClient.setQueriesData({
				queryKey: ["notes"],
				exact: false,
				active: true
			}, (notes) => {
				if (!notes) return notes;
				return notes.map((note) => note.id === fetchedNote.id ? fetchedNote : note);
			});
		}, [queryClient]);
	}
	var init_use_note = __esmMin((() => {
		init_note();
		init_es$1();
		init_asyncToGenerator();
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/marks-reply-form.js
	function MarksReplyForm(props) {
		const formId = `e-notes-new-reply-for-${props.thread.id}`;
		const createMutation = useCreateMutation(), { clearActive } = useActiveThread(), { isInWritingMode } = useFormsInWritingMode();
		const onSubmit = (_0, _1) => __async$3(null, [_0, _1], function* (e, { content, form }) {
			window.top.$e.run("notes/reply", { parentId: props.thread.id });
			yield createMutation.mutateAsync({
				elementId: props.thread.elementId,
				parentId: props.thread.id,
				content
			});
			form.reset();
		});
		return /* @__PURE__ */ react.default.createElement(NoteForm, {
			id: formId,
			onSubmit
		}, /* @__PURE__ */ react.default.createElement(MarksNoteTextarea, {
			disabled: createMutation.isLoading,
			onMetaAndEnterKeyDown: (e) => submitForm(e.currentTarget.form),
			isReply: true
		}), isInWritingMode(formId) && /* @__PURE__ */ react.default.createElement(NoteForm.ButtonsContainer, null, /* @__PURE__ */ react.default.createElement(Button, {
			disabled: createMutation.isLoading,
			type: "submit"
		}, (0, _wordpress_i18n.__)("Reply", "elementor-pro")), /* @__PURE__ */ react.default.createElement(Button, {
			disabled: createMutation.isLoading,
			variant: "outlined",
			type: "reset",
			onClick: (e) => {
				window.top.$e.run("notes/cancel-reply", { parentId: props.thread.id });
				e.target.form.reset();
				clearActive();
			}
		}, (0, _wordpress_i18n.__)("Cancel", "elementor-pro"))));
	}
	var import_prop_types$21, __async$3;
	var init_marks_reply_form = __esmMin((() => {
		import_prop_types$21 = /* @__PURE__ */ __toESM(require_prop_types());
		init_button();
		init_use_notes_mutations();
		init_marks_note_textarea();
		init_note_form();
		init_use_active_thread();
		init_use_forms_in_writing_mode();
		init_utils$2();
		init_note();
		__async$3 = /* @__PURE__ */ __name((__this, __arguments, generator) => {
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
		MarksReplyForm.propTypes = { thread: import_prop_types$21.default.instanceOf(Note) };
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/marks-thread-view.js
	function MarksThreadView(props) {
		const { isLoading, isPlaceholderData, isFetching, data: thread, isSuccess, isError } = useNote(props.threadId), hasReplies = 0 !== thread.repliesCount;
		useSetReadStatus({
			thread,
			shouldTrigger: isSuccess && !isPlaceholderData && !isFetching
		});
		if (isLoading) return /* @__PURE__ */ react.default.createElement(Loader, null);
		if (isError) return /* @__PURE__ */ react.default.createElement(Error$1, null, (0, _wordpress_i18n.__)("Something went wrong.", "elementor-pro"));
		return /* @__PURE__ */ react.default.createElement(react.default.Fragment, null, /* @__PURE__ */ react.default.createElement(MarksNoteView, {
			note: thread,
			key: thread.id
		}), hasReplies && isPlaceholderData && /* @__PURE__ */ react.default.createElement(Loader, null), thread.replies.map((reply) => /* @__PURE__ */ react.default.createElement(MarksNoteView, {
			key: reply.id,
			note: reply
		})), /* @__PURE__ */ react.default.createElement(MarksReplyForm, { thread }));
	}
	function useSetReadStatus({ thread, shouldTrigger }) {
		const didRunOnce = (0, react.useRef)(false);
		const readMutation = useReadMutation();
		(0, react.useEffect)(() => {
			if (didRunOnce.current || !shouldTrigger) return;
			const ids = [thread, ...thread.replies || []].filter((note) => !note.isRead).map((note) => note.id);
			if (0 !== ids.length) readMutation.mutate({
				ids,
				isRead: true
			});
			didRunOnce.current = true;
		}, [thread, shouldTrigger]);
	}
	var import_prop_types$20, Loader, Error$1;
	var init_marks_thread_view = __esmMin((() => {
		import_prop_types$20 = /* @__PURE__ */ __toESM(require_prop_types());
		init_marks_note_view();
		init_use_note();
		init_use_notes_mutations();
		init_styled_components_browser_esm();
		init_marks_reply_form();
		init_icon();
		Loader = qe(Icon$2).attrs({ className: "eicon-loading eicon-animation-spin" })`
  align-self: center !important;
  color: #a4afb6 !important;
`;
		Error$1 = qe.p`
  all: revert;

  font-family: Roboto, sans-serif !important;
  font-size: 12px !important;
  font-weight: normal !important;
  text-transform: none !important;
  font-style: normal !important;
  text-decoration: none !important;
  line-height: normal !important;
  letter-spacing: normal !important;
  word-spacing: normal !important;
  color: #6d7882 !important;
  margin: 0 !important;
  padding: 0 !important;
`;
		MarksThreadView.propTypes = { threadId: import_prop_types$20.default.number.isRequired };
	}));
	//#endregion
	//#region modules/notes/assets/js/app/hooks/use-new-thread-events.js
	/**
	* Bind click events to notable elements.
	*
	* @return {void}
	*/
	function useNewThreadEvents() {
		const canCreateThread = useCanCreateThread(), { elements } = useElements(), { setActive } = useActiveThread();
		const isNewThreadDisabled = (e) => {
			const isDisabledByKeyboard = e.ctrlKey || e.metaKey || e.altKey;
			const isDisabledByClass = e.target.closest(`.${DISABLE_NEW_THREAD}`);
			return isDisabledByKeyboard || isDisabledByClass;
		};
		(0, react.useEffect)(() => {
			const onClick = (e) => {
				if (isNewThreadDisabled(e)) return;
				e.preventDefault();
				e.stopPropagation();
			};
			elements.forEach((element) => {
				element.addEventListener("click", onClick);
			});
			return () => {
				elements.forEach((element) => {
					element.removeEventListener("click", onClick);
				});
			};
		}, [elements]);
		(0, react.useEffect)(() => {
			const onPointerDown = (e) => {
				if (!(1 === e.buttons) || isNewThreadDisabled(e)) return;
				e.preventDefault();
				e.stopPropagation();
				setActive({
					type: NEW_THREAD,
					data: {
						elementId: e.currentTarget.dataset.id,
						position: getClickPositionRelativeToTarget(e)
					}
				});
			};
			if (elements.size && canCreateThread) {
				elements.forEach((element) => {
					element.addEventListener("pointerdown", onPointerDown);
				});
				document.body.classList.add(NOTABLE_CLASSNAME);
			}
			return () => {
				elements.forEach((element) => {
					element.removeEventListener("pointerdown", onPointerDown);
				});
				document.body.classList.remove(NOTABLE_CLASSNAME);
			};
		}, [elements, canCreateThread]);
	}
	/**
	* Check if the user has permissions to create thread and there is no active thread.
	*
	* @return {boolean} does user have permissions to create a thread
	*/
	function useCanCreateThread() {
		const hasPermission = useUserCan(CAPABILITY_CREATE), { activeThread } = useActiveThread();
		return (0, react.useMemo)(() => hasPermission && !activeThread, [hasPermission, activeThread]);
	}
	/**
	* Get the mouse click position as percentages, relative to the `currentTarget`.
	*
	* @param {MouseEvent} e
	*
	* @return {{x: number, y: number}} location
	*/
	function getClickPositionRelativeToTarget(e) {
		const rect = e.currentTarget.getBoundingClientRect();
		return {
			x: (e.clientX - rect.left) / rect.width * 100,
			y: (e.clientY - rect.top) / rect.height * 100
		};
	}
	var DISABLE_NEW_THREAD, NOTABLE_CLASSNAME;
	var init_use_new_thread_events = __esmMin((() => {
		init_use_user_can();
		init_use_active_thread();
		init_elements();
		DISABLE_NEW_THREAD = "e-notes--disable-new-thread";
		NOTABLE_CLASSNAME = "e-route-notes--notable";
	}));
	//#endregion
	//#region modules/notes/assets/js/app/hooks/use-scroll-into-view.js
	function useScrollIntoView(condition = true, _ref = {}) {
		let { onlyIfNeeded = true } = _ref, scrollOptions = _objectWithoutProperties(_ref, _excluded$6);
		const ref = (0, react.useRef)(null);
		(0, react.useEffect)(() => {
			if (condition)
 /**
			* Defer to wait for React state stack to be empty, and all of the components have finished rendering,
			* since it causes a bug in Chromium based browsers.
			*
			* @see https://stackoverflow.com/questions/68263352/smooth-scroll-bug-in-react-useeffect-hook-only-on-chrome-chromium
			* @see https://stackoverflow.com/questions/59782858/scrollintoview-behavior-smooth-is-broken-in-react
			*/
			setTimeout(() => {
				scrollIntoView(ref.current, _objectSpread2({ onlyIfNeeded }, scrollOptions));
			});
		}, [condition]);
		return ref;
	}
	var _excluded$6;
	var init_use_scroll_into_view = __esmMin((() => {
		init_utils$2();
		init_objectWithoutProperties();
		init_objectSpread2();
		_excluded$6 = ["onlyIfNeeded"];
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/shared/note-popover-content.js
	function NotePopoverContent(props) {
		const { direction } = useNotesConfig(), { formsInWritingMode } = useFormsInWritingMode(), ref = (0, react.useRef)();
		return /* @__PURE__ */ react.default.createElement(Popover.Content, __spreadProps$1(__spreadValues$7({}, props), {
			align: "rtl" === direction ? "end" : "start",
			alignOffset: 18,
			sideOffset: 15,
			ref,
			onInteractOutside: (e) => __async$2(null, null, function* () {
				if (0 === formsInWritingMode.length) return;
				e.preventDefault();
				if (0 === ref.current.getAnimations().length) {
					yield scrollIntoView(ref.current);
					ref.current.animate(bounce.keyframes, bounce.options);
				}
			})
		}));
	}
	var __defProp$7, __defProps$1, __getOwnPropDescs$1, __getOwnPropSymbols$7, __hasOwnProp$7, __propIsEnum$7, __defNormalProp$7, __spreadValues$7, __spreadProps$1, __async$2, bounce;
	var init_note_popover_content = __esmMin((() => {
		init_popover();
		init_use_notes_config();
		init_utils$2();
		init_use_forms_in_writing_mode();
		__defProp$7 = Object.defineProperty;
		__defProps$1 = Object.defineProperties;
		__getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
		__getOwnPropSymbols$7 = Object.getOwnPropertySymbols;
		__hasOwnProp$7 = Object.prototype.hasOwnProperty;
		__propIsEnum$7 = Object.prototype.propertyIsEnumerable;
		__defNormalProp$7 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$7(obj, key, {
			enumerable: true,
			configurable: true,
			writable: true,
			value
		}) : obj[key] = value, "__defNormalProp");
		__spreadValues$7 = /* @__PURE__ */ __name((a, b) => {
			for (var prop in b || (b = {})) if (__hasOwnProp$7.call(b, prop)) __defNormalProp$7(a, prop, b[prop]);
			if (__getOwnPropSymbols$7) {
				for (var prop of __getOwnPropSymbols$7(b)) if (__propIsEnum$7.call(b, prop)) __defNormalProp$7(a, prop, b[prop]);
			}
			return a;
		}, "__spreadValues");
		__spreadProps$1 = /* @__PURE__ */ __name((a, b) => __defProps$1(a, __getOwnPropDescs$1(b)), "__spreadProps");
		__async$2 = /* @__PURE__ */ __name((__this, __arguments, generator) => {
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
		bounce = {
			keyframes: [
				{
					transform: "scale(1)",
					opacity: "1"
				},
				{
					transform: "scale(1.05)",
					opacity: "0.85"
				},
				{
					transform: "scale(1)",
					opacity: "1"
				}
			],
			options: {
				easing: "ease-in-out",
				duration: 500
			}
		};
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/marks-element-portal.js
	function MarksElementPortal(props) {
		const { elements } = useElements();
		const ref = { current: elements.get(props.elementId) };
		if (!ref.current) return null;
		return /* @__PURE__ */ react.default.createElement(StyledPortal, {
			containerRef: ref,
			"data-e-notes-portal": true,
			position: props.position
		}, props.children);
	}
	var import_prop_types$19, StyledPortal;
	var init_marks_element_portal = __esmMin((() => {
		import_prop_types$19 = /* @__PURE__ */ __toESM(require_prop_types());
		init_index_module$30();
		init_styled_components_browser_esm();
		init_elements();
		StyledPortal = qe(Portal$2).withConfig({ shouldForwardProp: (prop) => "position" !== prop })`
	all: revert;

	position: absolute;
  	z-index: 98; // One under sticky elements & wp-admin-bar.
  	top: ${({ position }) => (position == null ? void 0 : position.y) || 0}%;
  	left: ${({ position }) => (position == null ? void 0 : position.x) || 0}%;
  	transform: translate( -25%, -100% );
`;
		MarksElementPortal.propTypes = {
			elementId: import_prop_types$19.default.string.isRequired,
			position: import_prop_types$19.default.shape({
				x: import_prop_types$19.default.number.isRequired,
				y: import_prop_types$19.default.number.isRequired
			}),
			children: import_prop_types$19.default.oneOfType([import_prop_types$19.default.node, import_prop_types$19.default.arrayOf(import_prop_types$19.default.node)])
		};
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/marks-thread.js
	function useMarksThreadContext() {
		return (0, react.useContext)(Context);
	}
	function MarksThread(props) {
		const [isDisabled, setIsDisabled] = (0, react.useState)(false), ref = useScrollIntoView(props.isActive);
		return /* @__PURE__ */ react.default.createElement(MarksElementPortal, {
			elementId: props.note.elementId,
			position: props.note.position
		}, /* @__PURE__ */ react.default.createElement(Popover, {
			open: props.isActive,
			onOpenChange: props.onOpenChange
		}, /* @__PURE__ */ react.default.createElement(Popover.Trigger, { asChild: true }, /* @__PURE__ */ react.default.createElement(Button, {
			variant: "transparent",
			className: DISABLE_NEW_THREAD
		}, /* @__PURE__ */ react.default.createElement(Marker, {
			ref,
			variant: props.isActive || props.note.isUnreadThread() ? "solid" : "ghost",
			size: "md",
			muted: props.note.isResolved
		}, props.note.id))), /* @__PURE__ */ react.default.createElement(NotePopoverContent, null, /* @__PURE__ */ react.default.createElement(Container$5, { disabled: isDisabled }, /* @__PURE__ */ react.default.createElement(Context.Provider, { value: {
			isDisabled,
			setIsDisabled
		} }, /* @__PURE__ */ react.default.createElement(MarksThreadView, { threadId: props.note.id }))))));
	}
	var import_prop_types$18, Container$5, Context;
	var init_marks_thread = __esmMin((() => {
		import_prop_types$18 = /* @__PURE__ */ __toESM(require_prop_types());
		init_styled_components_browser_esm();
		init_button();
		init_marker();
		init_popover();
		init_marks_thread_view();
		init_use_new_thread_events();
		init_use_scroll_into_view();
		init_note();
		init_div_base();
		init_note_popover_content();
		init_marks_element_portal();
		Container$5 = qe(DivBase)`
  display: flex !important;
  flex-direction: column !important;
  gap: 28px !important;
  padding: 20px 16px !important;
  width: 360px !important;
  border-radius: 4px !important;
  transition: 0.3s all !important;

  ${({ disabled }) => disabled && Ae`
	opacity: 0.5;
	pointer-events: none;
  `}
`;
		Context = (0, react.createContext)();
		MarksThread.propTypes = {
			note: import_prop_types$18.default.instanceOf(Note).isRequired,
			onOpenChange: import_prop_types$18.default.func.isRequired,
			isActive: import_prop_types$18.default.bool.isRequired
		};
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/marks-new-thread-form.js
	function MarksNewThreadForm(props) {
		const { clearActive, setActive } = useActiveThread(), createMutation = useCreateMutation(), { isInWritingMode } = useFormsInWritingMode();
		const onSubmit = (_0, _1) => __async$1(null, [_0, _1], function* (e, { content, form }) {
			window.top.$e.run("notes/create");
			const createdThread = yield createMutation.mutateAsync({
				elementId: props.elementId,
				parentId: 0,
				content,
				position: props.position
			});
			form.reset();
			setActive({
				type: THREAD,
				data: { noteId: createdThread.id }
			});
		});
		return /* @__PURE__ */ react.default.createElement(NoteForm, {
			onSubmit,
			id: formId
		}, /* @__PURE__ */ react.default.createElement(MarksNoteTextarea, {
			disabled: createMutation.isLoading,
			onMetaAndEnterKeyDown: (e) => submitForm(e.currentTarget.form)
		}), /* @__PURE__ */ react.default.createElement(NoteForm.ButtonsContainer, null, /* @__PURE__ */ react.default.createElement(Button, {
			disabled: createMutation.isLoading || !isInWritingMode(formId),
			type: "submit"
		}, (0, _wordpress_i18n.__)("Leave a Note", "elementor-pro")), /* @__PURE__ */ react.default.createElement(Button, {
			disabled: createMutation.isLoading,
			variant: "outlined",
			type: "reset",
			onClick: (e) => {
				window.top.$e.run("notes/cancel-create");
				e.target.form.reset();
				clearActive();
			}
		}, (0, _wordpress_i18n.__)("Cancel", "elementor-pro"))));
	}
	var import_prop_types$17, __async$1, formId;
	var init_marks_new_thread_form = __esmMin((() => {
		import_prop_types$17 = /* @__PURE__ */ __toESM(require_prop_types());
		init_button();
		init_use_notes_mutations();
		init_use_active_thread();
		init_marks_note_textarea();
		init_note_form();
		init_use_forms_in_writing_mode();
		init_utils$2();
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
		formId = "e-notes-new-thread";
		MarksNewThreadForm.propTypes = {
			elementId: import_prop_types$17.default.string.isRequired,
			position: import_prop_types$17.default.shape({
				x: import_prop_types$17.default.number.isRequired,
				y: import_prop_types$17.default.number.isRequired
			})
		};
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/marks-new-thread.js
	function MarksNewThread(props) {
		const ref = useScrollIntoView();
		return /* @__PURE__ */ react.default.createElement(MarksElementPortal, {
			elementId: props.elementId,
			position: props.position
		}, /* @__PURE__ */ react.default.createElement(Popover, {
			defaultOpen: true,
			onOpenChange: props.onOpenChange
		}, /* @__PURE__ */ react.default.createElement(Popover.Trigger, { asChild: true }, /* @__PURE__ */ react.default.createElement(Button, {
			variant: "transparent",
			ref
		}, /* @__PURE__ */ react.default.createElement(Marker, {
			variant: "active",
			size: "md"
		}))), /* @__PURE__ */ react.default.createElement(NotePopoverContent, null, /* @__PURE__ */ react.default.createElement(Container$4, null, /* @__PURE__ */ react.default.createElement(MarksNewThreadForm, {
			elementId: props.elementId,
			position: props.position
		})))));
	}
	var import_prop_types$16, Container$4;
	var init_marks_new_thread = __esmMin((() => {
		import_prop_types$16 = /* @__PURE__ */ __toESM(require_prop_types());
		init_styled_components_browser_esm();
		init_button();
		init_marker();
		init_popover();
		init_marks_new_thread_form();
		init_use_scroll_into_view();
		init_div_base();
		init_note_popover_content();
		init_marks_element_portal();
		Container$4 = qe(DivBase)`
	display: flex !important;
	flex-direction: column !important;
	gap: 28px !important;
	padding: 20px 16px !important;
	width: 360px !important;
	border-radius: 4px !important;
`;
		MarksNewThread.propTypes = {
			elementId: import_prop_types$16.default.string.isRequired,
			position: import_prop_types$16.default.shape({
				x: import_prop_types$16.default.number.isRequired,
				y: import_prop_types$16.default.number.isRequired
			}),
			onOpenChange: import_prop_types$16.default.func.isRequired
		};
	}));
	//#endregion
	//#region modules/notes/assets/js/app/hooks/use-notes-filters.js
	/**
	* Use & set Notes filters from the global state.
	*/
	function useNotesFilters() {
		return [useSelector((state) => state.notes.filters), (0, react.useCallback)((newFilters, overwrite = false) => {
			return window.top.$e.run("notes/filter", {
				filters: newFilters,
				overwrite
			});
		}, [])];
	}
	var init_use_notes_filters = __esmMin((() => {
		init_es();
	}));
	//#endregion
	//#region modules/notes/assets/js/app/hooks/use-notes.js
	function useNotes(rawOptions = {}) {
		const { route } = useNotesConfig();
		const [filters] = useNotesFilters();
		const options = (0, react.useMemo)(() => _objectSpread2(_objectSpread2({}, defaultOptions$1), rawOptions), [rawOptions]);
		return useQuery(["notes", (0, react.useMemo)(() => {
			return normalizeQueryParams(_objectSpread2(_objectSpread2(_objectSpread2({
				parent_id: 0,
				order_by: "last_activity_at",
				order: "desc"
			}, route.is_elementor_library ? { post_id: route.post_id } : { route_url: encodeURIComponent(route.url) }), filters), options.params || {}));
		}, [
			route,
			filters,
			options.params
		])], function() {
			var _ref = _asyncToGenerator(function* ({ queryKey: [, params], signal }) {
				const { data } = yield window.top.$e.data.get("notes/index", params, {
					refresh: true,
					signal
				});
				return data.data.map((rawNote) => {
					return Note.createFromResponse(rawNote);
				});
			});
			return function(_x) {
				return _ref.apply(this, arguments);
			};
		}(), {
			keepPreviousData: true,
			enabled: options.enabled
		});
	}
	var defaultOptions$1;
	var init_use_notes = __esmMin((() => {
		init_note();
		init_es$1();
		init_utils$2();
		init_use_notes_config();
		init_use_notes_filters();
		init_objectSpread2();
		init_asyncToGenerator();
		defaultOptions$1 = {
			enabled: true,
			params: {}
		};
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/marks.js
	function Marks() {
		const { data: notes = [] } = useNotes(), { activeThread, clearActive, setActive, isThreadActive } = useActiveThread();
		useNewThreadEvents();
		return /* @__PURE__ */ react.default.createElement(react.default.Fragment, null, notes.map((note) => /* @__PURE__ */ react.default.createElement(MarksThread, {
			key: note.id,
			note,
			isActive: isThreadActive(note.id),
			onOpenChange: (isOpen) => {
				if (!isOpen) {
					clearActive(note.id);
					return;
				}
				setActive({
					type: THREAD,
					data: { noteId: note.id }
				});
			}
		})), "new-thread" === (activeThread == null ? void 0 : activeThread.type) && /* @__PURE__ */ react.default.createElement(MarksNewThread, {
			elementId: activeThread.data.elementId,
			position: activeThread.data.position,
			onOpenChange: (isOpen) => {
				if (!isOpen) clearActive();
			}
		}));
	}
	var init_marks = __esmMin((() => {
		init_marks_thread();
		init_marks_new_thread();
		init_use_active_thread();
		init_use_notes();
		init_use_new_thread_events();
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/panel-note-item.js
	function PanelNoteItem(props) {
		const ref = useScrollIntoView(props.isActive, {
			block: "nearest",
			inline: "nearest"
		});
		const noteContent = useReverseHtmlEntities(props.note.content);
		return /* @__PURE__ */ react.default.createElement(Container$3, {
			isActive: props.isActive,
			onClick: props.onClick,
			ref
		}, /* @__PURE__ */ react.default.createElement(IconCol, null, /* @__PURE__ */ react.default.createElement(Marker, {
			variant: props.isActive || props.note.isUnreadThread() ? "solid" : "ghost",
			size: "sm",
			muted: props.note.isResolved
		}, props.note.id)), /* @__PURE__ */ react.default.createElement(ContentCol, null, /* @__PURE__ */ react.default.createElement(Title, null, props.note.author.name, " ", /* @__PURE__ */ react.default.createElement(Date$1, null, props.note.getFormattedCreatedAt())), /* @__PURE__ */ react.default.createElement(NoteContent, { disableInteractions: true }, noteContent), props.note.repliesCount > 0 && /* @__PURE__ */ react.default.createElement(RepliesCount, null, (0, _wordpress_i18n.__)("%s replies", "elementor-pro").replace("%s", props.note.repliesCount))));
	}
	var import_prop_types$15, Container$3, IconCol, ContentCol, Title, Date$1, RepliesCount, NoteContent;
	var init_panel_note_item = __esmMin((() => {
		import_prop_types$15 = /* @__PURE__ */ __toESM(require_prop_types());
		init_note();
		init_styled_components_browser_esm();
		init_marker();
		init_use_scroll_into_view();
		init_note_content();
		init_div_base();
		init_button_base();
		init_use_reverse_html_entities();
		Container$3 = qe(ButtonBase)`
	--spacing: 12px;
	--background: #fafbfb;
	--color: #6d7882;
	--padding: var( --spacing );
	--font-family: Roboto, sans-serif;
	--font-size: 12px;
	--font-weight: 400;
	--width: 100%;
	--display: flex;

	gap: var( --spacing );
	margin: 1px 0 0 0 !important;
	border: none;
	text-align: inherit;
	border-radius: 0;
	transition: 0.2s all;
	line-height: 1.5;
	cursor: pointer;
	white-space: normal;

	&:hover,
	&:focus {
		--background: #f1f1f1;
		--color: #6d7882;
	}

	${({ isActive }) => {
			return isActive && Ae`
			--background: #e8f4fb;

			&:hover,
			&:focus {
				--background: #e0f2fc;
			}
		`;
		}}
`;
		IconCol = qe(DivBase)`
	flex-shrink: 0;

	&::before,
	&::after {
		display: none !important;
	}
`;
		ContentCol = qe(DivBase)`
	flex-grow: 1;

	&::before,
	&::after {
		display: none !important;
	}
`;
		Title = qe.p`
	all: revert;

	margin: 0 0 8px 0 !important;
	font-family: Roboto, sans-serif !important;
	font-size: 10px !important;
	font-weight: 500 !important;
	text-transform: none !important;
	font-style: normal !important;
	text-decoration: none !important;
	line-height: normal !important;
	letter-spacing: normal !important;
	word-spacing: normal !important;
`;
		Date$1 = qe.span`
	color: #a4afb6;
`;
		RepliesCount = qe.p`
	all: revert;

	margin: 4px 0 0 0 !important;
	color: #a4afb6 !important;
	font-family: Roboto, sans-serif !important;
	font-size: 10px !important;
	font-weight: normal !important;
	text-transform: none !important;
	font-style: normal !important;
	text-decoration: none !important;
	line-height: normal !important;
	letter-spacing: normal !important;
	word-spacing: normal !important;
`;
		NoteContent = qe(note_content_default)`
  --line-height: 1.5;
  --max-rows: 6;

  display: -webkit-box !important;
  -webkit-box-orient: vertical !important;
  -webkit-line-clamp: var( --max-rows ) !important;
  max-height: calc( ( 1em * var( --line-height ) * var( --max-rows ) ) ) !important;
  overflow: hidden !important;

  & > p {
	margin: 0 !important; // To make the ellipsis look better on multi-paragraph content.
  }
`;
		PanelNoteItem.propTypes = {
			note: import_prop_types$15.default.instanceOf(Note).isRequired,
			onClick: import_prop_types$15.default.func,
			isActive: import_prop_types$15.default.bool
		};
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/panel-page-title.js
	function PanelPageTitle(props) {
		return /* @__PURE__ */ react.default.createElement(StyledPanelPageTitle, null, props.children, " ", props.count && /* @__PURE__ */ react.default.createElement(StyledCount, null, "(", props.count, ")"));
	}
	var import_prop_types$14, StyledPanelPageTitle, StyledCount;
	var init_panel_page_title = __esmMin((() => {
		import_prop_types$14 = /* @__PURE__ */ __toESM(require_prop_types());
		init_styled_components_browser_esm();
		StyledPanelPageTitle = qe.h4`
  all: revert;

  padding: 10px 12px !important;
  background: #fff !important;
  font-family: Roboto, sans-serif !important;
  font-size: 12px !important;
  font-weight: 600 !important;
  color: #6d7882 !important;
  margin: 1px 0 0 0 !important;
  line-height: 1.2 !important;
  text-transform: none !important;
  font-style: normal !important;
  text-decoration: none !important;
  letter-spacing: normal !important;
  word-spacing: normal !important;
  position: relative !important;

  &::before, &::after {
    display: none !important;
  }
`;
		StyledCount = qe.span`
  color: #a4afb6;
  font-size: 11px;
`;
		PanelPageTitle.propTypes = {
			children: import_prop_types$14.default.oneOfType([import_prop_types$14.default.node, import_prop_types$14.default.arrayOf(import_prop_types$14.default.node)]),
			count: import_prop_types$14.default.number
		};
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/panel-empty.js
	function PanelEmpty() {
		return /* @__PURE__ */ react.default.createElement(Container$2, null, /* @__PURE__ */ react.default.createElement("div", null, /* @__PURE__ */ react.default.createElement(IconContainer, null, /* @__PURE__ */ react.default.createElement(Icon$2, { className: "eicon-commenting-o" })), /* @__PURE__ */ react.default.createElement(Heading, null, (0, _wordpress_i18n.__)("Share your thoughts with a Note", "elementor-pro")), /* @__PURE__ */ react.default.createElement(Text$1, null, (0, _wordpress_i18n.__)("Select an element on the page to leave a comment, ask a question, etc.", "elementor-pro")), /* @__PURE__ */ react.default.createElement(Link, {
			href: "https://go.elementor.com/app-notes/",
			target: "_blank",
			className: "elementor-clickable"
		}, (0, _wordpress_i18n.__)("Learn More", "elementor-pro"), /* @__PURE__ */ react.default.createElement(Icon$2, { className: "eicon-info" }))));
	}
	var Container$2, IconContainer, Heading, Text$1, Link;
	var init_panel_empty = __esmMin((() => {
		init_styled_components_browser_esm();
		init_div_base();
		init_icon();
		Container$2 = qe(DivBase)`
	display: flex !important;
	align-items: center !important;
	justify-content: center !important;
	height: 100% !important;
	width: 100% !important;
	text-align: center !important;
	padding: 13px 20px 43px 20px !important;
`;
		IconContainer = qe(DivBase)`
	font-size: 30px !important;
	color: #a4afb6 !important;
	margin: 0 0 20px 0 !important;
`;
		Heading = qe.h4`
	all: revert;

	font-family: Roboto, sans-serif !important;
	font-size: 16px !important;
	font-weight: 700 !important;
	text-transform: none !important;
	font-style: normal !important;
	text-decoration: none !important;
	line-height: 1.4 !important;
	letter-spacing: normal !important;
	word-spacing: normal !important;
	color: #6d7882 !important;
	margin: 0 0 12px 0 !important;
  	padding: 0 15px !important;

	&::before, &::after {
		display: none;
	}
`;
		Text$1 = qe.p`
	all: revert;

	font-family: Roboto, sans-serif !important;
	font-size: 11px !important;
	font-weight: normal !important;
	text-transform: none !important;
	font-style: normal !important;
	text-decoration: none !important;
	line-height: 1.5 !important;
	letter-spacing: normal !important;
	word-spacing: normal !important;
	margin: 0 !important;
	color: #6d7882 !important;
`;
		Link = qe.a`
	all: revert;

	display: inline-flex !important;
	justify-content: center !important;
	align-item: center !important;
	font-family: Roboto, sans-serif !important;
	font-size: 12px !important;
	font-weight: 500 !important;
	text-transform: none !important;
	font-style: normal !important;
	text-decoration: none !important;
	line-height: 1.4 !important;
	letter-spacing: normal !important;
	word-spacing: normal !important;
	margin: 42px 0 0 0 !important;
	color: #6d7882 !important;

	> i {
		color: #a4afb7 !important;
		font-size: 18px !important;
		margin-inline-start: 4px !important;
	}

	&:hover {
		i::before {
			color: #58d0f5;
			content: '\\e926'; // eicon-info-circle
		}
	}
`;
	}));
	//#endregion
	//#region node_modules/@radix-ui/react-toast/dist/index.module.js
	/*#__PURE__*/ function b$2(e, t, r) {
		const o = r.originalEvent.currentTarget;
		const n = new CustomEvent(e, {
			bubbles: !0,
			cancelable: !0,
			detail: r
		});
		t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(n);
	}
	var _excluded$5, _excluded2$2, _excluded3$2, _excluded4$1, _excluded5$1, _excluded6$1, _excluded7, _excluded8, v$1, f$2, m$2, T, ToastProvider, E$1, ToastViewport$1, Toast$1, x$2, y$1, g$1, h$2, ToastTitle$1, ToastDescription$1, ToastAction$1, ToastClose$1, C$1;
	var init_index_module$4 = __esmMin((() => {
		init_index_module$9();
		init_index_module$37();
		init_index_module$16();
		init_index_module$29();
		init_index_module$33();
		init_index_module$32();
		init_index_module$30();
		init_index_module$24();
		init_index_module$19();
		init_index_module$35();
		init_index_module$25();
		init_extends();
		init_objectWithoutProperties();
		init_objectSpread2();
		_excluded$5 = [
			"__scopeToast",
			"hotkey",
			"label"
		];
		_excluded2$2 = [
			"forceMount",
			"open",
			"defaultOpen",
			"onOpenChange"
		];
		_excluded3$2 = [
			"__scopeToast",
			"type",
			"duration",
			"open",
			"onClose",
			"onEscapeKeyDown",
			"onSwipeStart",
			"onSwipeMove",
			"onSwipeCancel",
			"onSwipeEnd"
		];
		_excluded4$1 = ["__scopeToast"];
		_excluded5$1 = ["__scopeToast"];
		_excluded6$1 = ["__scopeToast"];
		_excluded7 = ["altText"];
		_excluded8 = ["__scopeToast"];
		[v$1, f$2] = createContextScope("Toast");
		[m$2, T] = v$1("ToastProvider");
		ToastProvider = (e) => {
			const { __scopeToast: t, label: r = "Notification", duration: o = 5e3, swipeDirection: n = "right", swipeThreshold: s = 50, children: a } = e, [i, c] = react.useState(null), [u, l] = react.useState(0), p = react.useRef(!1), w = react.useRef(!1);
			/*#__PURE__*/ return react.createElement(m$2, {
				scope: t,
				label: r,
				duration: o,
				swipeDirection: n,
				swipeThreshold: s,
				toastCount: u,
				viewport: i,
				onViewportChange: c,
				onToastAdd: react.useCallback((() => l(((e) => e + 1))), []),
				onToastRemove: react.useCallback((() => l(((e) => e - 1))), []),
				isFocusedToastEscapeKeyDownRef: p,
				isClosePausedRef: w
			}, a);
		};
		E$1 = ["F8"];
		ToastViewport$1 = /*#__PURE__*/ react.forwardRef(((e, t) => {
			const { __scopeToast: r, hotkey: o = E$1, label: s = "Notifications ({hotkey})" } = e, a = _objectWithoutProperties(e, _excluded$5), c = T("ToastViewport", r), l = react.useRef(null), p = react.useRef(null), v = useComposedRefs(t, p, c.onViewportChange), f = o.join("+").replace(/Key/g, "").replace(/Digit/g, "");
			return react.useEffect((() => {
				const e = (e) => {
					var t;
					o.every(((t) => e[t] || e.code === t)) && (null === (t = p.current) || void 0 === t || t.focus());
				};
				return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
			}), [o]), react.useEffect((() => {
				const e = l.current;
				const t = p.current;
				if (e && t) {
					const r = () => {
						const e = new Event("toast.viewportPause");
						t.dispatchEvent(e), c.isClosePausedRef.current = !0;
					};
					const o = () => {
						const e = new Event("toast.viewportResume");
						t.dispatchEvent(e), c.isClosePausedRef.current = !1;
					};
					return e.addEventListener("focusin", r), e.addEventListener("focusout", o), e.addEventListener("pointerenter", r), e.addEventListener("pointerleave", o), window.addEventListener("blur", r), window.addEventListener("focus", o), () => {
						e.removeEventListener("focusin", r), e.removeEventListener("focusout", o), e.removeEventListener("pointerenter", r), e.removeEventListener("pointerleave", o), window.removeEventListener("blur", r), window.removeEventListener("focus", o);
					};
				}
			}), [c.isClosePausedRef]), react.useEffect((() => {
				const e = p.current;
				if (e) {
					let t = [];
					const r = new MutationObserver(((r) => {
						const [o] = r;
						o.addedNodes.forEach(((r) => {
							t.includes(r) || (e.prepend(r), t = [...t, r]);
						}));
					}));
					return r.observe(e, { childList: !0 }), () => r.disconnect();
				}
			}), []), /*#__PURE__*/ react.createElement(Branch, {
				ref: l,
				role: "region",
				"aria-label": s.replace("{hotkey}", f),
				tabIndex: -1,
				style: { pointerEvents: c.toastCount > 0 ? void 0 : "none" }
			}, /*#__PURE__*/ react.createElement(Primitive.ol, _extends({ tabIndex: -1 }, a, { ref: v })));
		}));
		Toast$1 = /*#__PURE__*/ react.forwardRef(((e, t) => {
			const { forceMount: o, open: n, defaultOpen: a, onOpenChange: i } = e, c = _objectWithoutProperties(e, _excluded2$2), [u = !0, p] = useControllableState({
				prop: n,
				defaultProp: a,
				onChange: i
			});
			/*#__PURE__*/ return react.createElement(Presence, { present: o || u }, /*#__PURE__*/ react.createElement(g$1, _extends({ open: u }, c, {
				ref: t,
				onClose: () => p(!1),
				onSwipeStart: composeEventHandlers(e.onSwipeStart, ((e) => {
					e.currentTarget.setAttribute("data-swipe", "start");
				})),
				onSwipeMove: composeEventHandlers(e.onSwipeMove, ((e) => {
					const { x: t, y: r } = e.detail.delta;
					e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${r}px`);
				})),
				onSwipeCancel: composeEventHandlers(e.onSwipeCancel, ((e) => {
					e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
				})),
				onSwipeEnd: composeEventHandlers(e.onSwipeEnd, ((e) => {
					const { x: t, y: r } = e.detail.delta;
					e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${r}px`), p(!1);
				}))
			})));
		}));
		[x$2, y$1] = v$1("Toast", {
			isInteractive: !1,
			onClose() {}
		}), g$1 = /*#__PURE__*/ react.forwardRef(((e, t) => {
			const { __scopeToast: r, type: s = "foreground", duration: a, open: c, onClose: v, onEscapeKeyDown: f, onSwipeStart: m, onSwipeMove: E, onSwipeCancel: y, onSwipeEnd: g } = e, P = _objectWithoutProperties(e, _excluded3$2), R = T("Toast", r), D = react.useRef(null), L = useComposedRefs(t, D), S = react.useRef(null), _ = react.useRef(null), A = a || R.duration, k = react.useRef(0), M = react.useRef(A), F = react.useRef(0), { onToastAdd: I, onToastRemove: K } = R, V = useCallbackRef((() => {
				var e;
				var t;
				null !== (e = D.current) && void 0 !== e && e.contains(document.activeElement) && (null === (t = R.viewport) || void 0 === t || t.focus()), v();
			})), $ = react.useCallback(((e) => {
				e && e !== Infinity && (window.clearTimeout(F.current), k.current = (/* @__PURE__ */ new Date()).getTime(), F.current = window.setTimeout(V, e));
			}), [V]);
			return react.useEffect((() => {
				const e = R.viewport;
				if (e) {
					const t = () => {
						$(M.current);
					};
					const r = () => {
						const e = (/* @__PURE__ */ new Date()).getTime() - k.current;
						M.current = M.current - e, window.clearTimeout(F.current);
					};
					return e.addEventListener("toast.viewportPause", r), e.addEventListener("toast.viewportResume", t), () => {
						e.removeEventListener("toast.viewportPause", r), e.removeEventListener("toast.viewportResume", t);
					};
				}
			}), [
				R.viewport,
				A,
				$
			]), react.useEffect((() => {
				c && !R.isClosePausedRef.current && $(A);
			}), [
				c,
				A,
				R.isClosePausedRef,
				$
			]), react.useEffect((() => (I(), () => K())), [I, K]), R.viewport ? /*#__PURE__*/ react.createElement(react.Fragment, null, /*#__PURE__*/ react.createElement(h$2, {
				__scopeToast: r,
				role: "status",
				"aria-live": "foreground" === s ? "assertive" : "polite",
				"aria-atomic": !0
			}, e.children), /*#__PURE__*/ react.createElement(x$2, {
				scope: r,
				isInteractive: !0,
				onClose: V
			}, /*#__PURE__*/ react_dom.createPortal(/*#__PURE__*/ react.createElement(Root$12, {
				asChild: !0,
				onEscapeKeyDown: composeEventHandlers(f, (() => {
					R.isFocusedToastEscapeKeyDownRef.current || V(), R.isFocusedToastEscapeKeyDownRef.current = !1;
				}))
			}, /*#__PURE__*/ react.createElement(Primitive.li, _extends({
				role: "status",
				"aria-live": "off",
				"aria-atomic": !0,
				tabIndex: 0,
				"data-state": c ? "open" : "closed",
				"data-swipe-direction": R.swipeDirection
			}, P, {
				ref: L,
				style: _objectSpread2({
					userSelect: "none",
					touchAction: "none"
				}, e.style),
				onKeyDown: composeEventHandlers(e.onKeyDown, ((e) => {
					"Escape" === e.key && (null == f || f(e.nativeEvent), e.nativeEvent.defaultPrevented || (R.isFocusedToastEscapeKeyDownRef.current = !0, V()));
				})),
				onPointerDown: composeEventHandlers(e.onPointerDown, ((e) => {
					0 === e.button && (S.current = {
						x: e.clientX,
						y: e.clientY
					});
				})),
				onPointerMove: composeEventHandlers(e.onPointerMove, ((e) => {
					if (!S.current) return;
					const t = e.clientX - S.current.x;
					const r = e.clientY - S.current.y;
					const o = Boolean(_.current);
					const n = ["left", "right"].includes(R.swipeDirection);
					const s = ["left", "up"].includes(R.swipeDirection) ? Math.min : Math.max;
					const a = n ? s(0, t) : 0;
					const i = n ? 0 : s(0, r);
					const c = "touch" === e.pointerType ? 10 : 2;
					const u = {
						x: a,
						y: i
					};
					const l = {
						originalEvent: e,
						delta: u
					};
					o ? (_.current = u, b$2("toast.swipeMove", E, l)) : C$1(u, R.swipeDirection, c) ? (_.current = u, b$2("toast.swipeStart", m, l), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > c || Math.abs(r) > c) && (S.current = null);
				})),
				onPointerUp: composeEventHandlers(e.onPointerUp, ((e) => {
					const t = _.current;
					if (e.target.releasePointerCapture(e.pointerId), _.current = null, S.current = null, t) {
						const r = e.currentTarget;
						const o = {
							originalEvent: e,
							delta: t
						};
						C$1(t, R.swipeDirection, R.swipeThreshold) ? b$2("toast.swipeEnd", g, o) : b$2("toast.swipeCancel", y, o), r.addEventListener("click", ((e) => e.preventDefault()), { once: !0 });
					}
				}))
			}))), R.viewport))) : null;
		}));
		g$1.propTypes = { type(e) {
			if (e.type && !["foreground", "background"].includes(e.type)) throw new Error("Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.");
			return null;
		} };
		h$2 = /* @__PURE__ */ __name((r) => {
			const { __scopeToast: n } = r, s = _objectWithoutProperties(r, _excluded4$1), i = T("Toast", n), [c, u] = react.useState(!1), [l, p] = react.useState(!1);
			return function(e = (() => {})) {
				const r = useCallbackRef(e);
				useLayoutEffect$1((() => {
					let e = 0;
					let t = 0;
					return e = window.requestAnimationFrame((() => t = window.requestAnimationFrame(r))), () => {
						window.cancelAnimationFrame(e), window.cancelAnimationFrame(t);
					};
				}), [r]);
			}((() => u(!0))), react.useEffect((() => {
				const e = window.setTimeout((() => p(!0)), 1e3);
				return () => window.clearTimeout(e);
			}), []), l ? null : /*#__PURE__*/ react.createElement(UnstablePortal, { asChild: !0 }, /*#__PURE__*/ react.createElement(VisuallyHidden, { asChild: !0 }, /*#__PURE__*/ react.createElement("div", s, c && /*#__PURE__*/ react.createElement(react.Fragment, null, i.label, " ", r.children))));
		}, "h");
		ToastTitle$1 = /*#__PURE__*/ react.forwardRef(((e, t) => {
			const { __scopeToast: r } = e, o = _objectWithoutProperties(e, _excluded5$1);
			/*#__PURE__*/ return react.createElement(Primitive.div, _extends({}, o, { ref: t }));
		}));
		ToastDescription$1 = /*#__PURE__*/ react.forwardRef(((e, t) => {
			const { __scopeToast: r } = e, o = _objectWithoutProperties(e, _excluded6$1);
			/*#__PURE__*/ return react.createElement(Primitive.div, _extends({}, o, { ref: t }));
		}));
		ToastAction$1 = /*#__PURE__*/ react.forwardRef(((e, t) => {
			const { altText: r } = e, o = _objectWithoutProperties(e, _excluded7), n = y$1("ToastAction", e.__scopeToast);
			return r ? n.isInteractive ? /*#__PURE__*/ react.createElement(ToastClose$1, _extends({}, o, { ref: t })) : /*#__PURE__*/ react.createElement("span", null, r) : null;
		}));
		ToastAction$1.propTypes = { altText(e) {
			if (!e.altText) throw new Error("Missing prop `altText` expected on `ToastAction`");
			return null;
		} };
		ToastClose$1 = /*#__PURE__*/ react.forwardRef(((e, t) => {
			const { __scopeToast: r } = e, o = _objectWithoutProperties(e, _excluded8), s = y$1("ToastClose", r);
			return s.isInteractive ? /*#__PURE__*/ react.createElement(Primitive.button, _extends({ type: "button" }, o, {
				ref: t,
				onClick: composeEventHandlers(e.onClick, s.onClose)
			})) : null;
		}));
		__name(b$2, "b");
		C$1 = /* @__PURE__ */ __name((e, t, r = 0) => {
			const o = Math.abs(e.x);
			const n = Math.abs(e.y);
			const s = o > n;
			return "left" === t || "right" === t ? s && o > r : !s && n > r;
		}, "C");
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/toast/toast-action.js
	var ToastAction;
	var init_toast_action = __esmMin((() => {
		init_styled_components_browser_esm();
		init_index_module$4();
		init_button_base();
		ToastAction = qe(ButtonBase).attrs(() => ({ as: ToastAction$1 }))`
  --font-weight: 600 !important;
  --font-size: inherit !important;
  --font-family: inherit !important;
`;
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/toast/toast-icon.js
	var ToastIcon;
	var init_toast_icon = __esmMin((() => {
		init_styled_components_browser_esm();
		init_icon();
		ToastIcon = qe(Icon$2)`
  color: var( --color ) !important; // Inherited from the <Toast /> component.
`;
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/toast/toast.js
	var import_prop_types$13, colorsMap, Toast;
	var init_toast = __esmMin((() => {
		import_prop_types$13 = /* @__PURE__ */ __toESM(require_prop_types());
		init_index_module$4();
		init_styled_components_browser_esm();
		init_toast_action();
		init_toast_icon();
		init_animation();
		colorsMap = {
			default: {
				background: "#f1f2f3",
				icon: "#69727d",
				action: "#69727d"
			},
			success: {
				background: "#e9fbee",
				icon: "#1d6d38",
				action: "#1d6d38"
			},
			warning: {
				background: "#fff5e6",
				icon: "#976402",
				action: "#976402"
			},
			info: {
				background: "#e6f6ff",
				icon: "#006bb8",
				action: "#006bb8"
			},
			danger: {
				background: "#fde8ec",
				icon: "#b92136",
				action: "#b92136"
			}
		};
		Toast = qe(Toast$1)`
  display: flex !important;
  gap: 8px !important;
  align-items: center !important;
  width: 100% !important;
  box-sizing: border-box !important;
  padding: 12px 16px !important;
  font-size: 14px !important;
  line-height: normal !important;
  color: #3a3f45 !important;
  text-align: start !important;
  border-radius: 6px !important;
  box-shadow: 0 0 15px 0 rgba( 0,0,0,.2 ) !important;
  animation-duration: 400ms !important;
  animation-timing-function: cubic-bezier( 0.16, 1, 0.3, 1 ) !important;
  background-color: ${({ variant }) => colorsMap[variant].background} !important;

	&[data-state="open"] {
	  animation-name: ${slideUpAndFade} !important;
	}

	&[data-state="closed"] {
	  animation-name: ${fadeOut} !important;
	}

	${ToastIcon} {
	  --color: ${({ variant }) => colorsMap[variant].icon} !important;
	}

	${ToastAction} {
	  --color: ${({ variant }) => colorsMap[variant].icon} !important;
	}
`;
		Toast.propTypes = { variant: import_prop_types$13.default.oneOf([
			"default",
			"success",
			"warning",
			"info",
			"danger"
		]).isRequired };
		Toast.defaultProps = { variant: "default" };
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/toast/toast-title.js
	var ToastTitle;
	var init_toast_title = __esmMin((() => {
		init_styled_components_browser_esm();
		init_index_module$4();
		ToastTitle = qe(ToastTitle$1)`
	font-weight: bold !important;
`;
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/toast/toast-description.js
	var ToastDescription;
	var init_toast_description = __esmMin((() => {
		init_styled_components_browser_esm();
		init_index_module$4();
		ToastDescription = qe(ToastDescription$1)`
  font-weight: normal !important;
`;
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/toast/toast-close.js
	var ToastClose;
	var init_toast_close = __esmMin((() => {
		init_styled_components_browser_esm();
		init_index_module$4();
		init_button_base();
		ToastClose = qe(ButtonBase).attrs(() => ({ as: ToastClose$1 }))`
  --height: 1em !important;
  --width: 1em !important;
  --display: block !important;

  margin-inline-start: auto !important;
  position: relative !important;

  &::before,
  &::after {
	content: '' !important;
	display: block !important;
	position: absolute !important;
	left: 50% !important;
	top: 50% !important;
	margin-left: -1px !important;
	margin-top: -.5em !important;
	height: 1em !important;
	width: 2px;
	border-radius: 9999px !important;
	background-color: #69727d !important;
	transform-origin: center center !important;
	transition: .3s all;
  }

  &::before {
	transform: rotate( 45deg ) !important;
  }

  &::after {
	transform: rotate( -45deg ) !important;
  }

  &:hover::before,
  &:hover::after {
	background-color: #232629 !important
  }
`;
	}));
	//#endregion
	//#region modules/notes/assets/js/app/hooks/use-stoppable-effect.js
	/**
	* Use an effect with an option to stop it.
	*
	* Usage:
	* 		useStoppableEffect( ( stop ) => {
	* 			console.log( 'stuff' );
	*
	* 			if ( a === 1 ) {
	* 				stop();
	* 			}
	* 		}, [ deps ] );
	*
	* @param {Function} effect
	* @param {Array}    deps
	*
	* @return {void}
	*/
	function useStoppableEffect(effect, deps) {
		const shouldRun = (0, react.useRef)(true);
		const stop = (0, react.useCallback)(() => {
			shouldRun.current = false;
		}, []);
		(0, react.useEffect)(() => {
			if (shouldRun.current) effect(stop);
		}, deps);
	}
	var init_use_stoppable_effect = __esmMin((() => {}));
	//#endregion
	//#region modules/notes/assets/js/app/hooks/use-viewable-notes.js
	/**
	* @typedef {import('../models/note')} Note
	*/
	/**
	* Return a tuple of filtered notes based their visibility to the user in the current page (e.g. have elements).
	* The first item contains the viewable notes and the second is the non-viewable ones.
	*
	* @param {Note[]} notes
	*
	* @return {[Note[], Note[]]} notes
	*/
	function useViewableNotes(notes) {
		const { elements } = useElements();
		return (0, react.useMemo)(() => {
			if (!(notes === null || notes === void 0 ? void 0 : notes.length) || !(elements === null || elements === void 0 ? void 0 : elements.size)) return [[], []];
			const reduced = notes.reduce((carry, note) => {
				carry[elements.has(note.elementId) ? "viewable" : "nonViewable"].push(note);
				return carry;
			}, {
				viewable: [],
				nonViewable: []
			});
			return Object.values(reduced);
		}, [notes, elements]);
	}
	var init_use_viewable_notes = __esmMin((() => {
		init_elements();
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/panel-body-current-route.js
	function PanelBodyCurrentRoute(props) {
		const { route } = useNotesConfig(), { activeThread, isThreadActive, setActive, clearActive } = useActiveThread(), [isToastOpen, setIsToastOpen] = (0, react.useState)(false), [viewableNotes, nonViewableNotes] = useViewableNotes(props.notes);
		(0, react.useEffect)(() => {
			const { noteId } = (activeThread == null ? void 0 : activeThread.data) || {};
			if (noteId) {
				if (!!!viewableNotes.find((note) => note.id === noteId && note.isThread())) clearActive(noteId);
			}
		}, [viewableNotes, activeThread]);
		useStoppableEffect((stop) => {
			if (nonViewableNotes.length > 0) {
				setIsToastOpen(true);
				stop();
			}
		}, [nonViewableNotes]);
		return /* @__PURE__ */ react.default.createElement(react.default.Fragment, null, !viewableNotes.length ? /* @__PURE__ */ react.default.createElement(PanelEmpty, null) : /* @__PURE__ */ react.default.createElement(react.default.Fragment, null, /* @__PURE__ */ react.default.createElement(PanelPageTitle, { count: viewableNotes.length }, route.title), viewableNotes.map((note) => /* @__PURE__ */ react.default.createElement(PanelNoteItem, {
			key: note.id,
			note,
			isActive: isThreadActive(note.id),
			onClick: () => setActive({
				type: THREAD,
				data: { noteId: note.id }
			})
		}))), /* @__PURE__ */ react.default.createElement(Toast, {
			open: isToastOpen,
			onOpenChange: setIsToastOpen,
			variant: "info"
		}, /* @__PURE__ */ react.default.createElement(ToastIcon, { className: "eicon-info-circle" }), /* @__PURE__ */ react.default.createElement(ToastTitle, null, (0, _wordpress_i18n.__)("Some notes are not shown.", "elementor-pro")), /* @__PURE__ */ react.default.createElement(ToastDescription, null, (0, _wordpress_i18n.__)("This page contains notes on elements that are still in draft mode.", "elementor-pro")), /* @__PURE__ */ react.default.createElement(ToastClose, null)));
	}
	var import_prop_types$12;
	var init_panel_body_current_route = __esmMin((() => {
		import_prop_types$12 = /* @__PURE__ */ __toESM(require_prop_types());
		init_panel_note_item();
		init_panel_page_title();
		init_use_active_thread();
		init_use_notes_config();
		init_note();
		init_panel_empty();
		init_toast();
		init_toast_icon();
		init_toast_title();
		init_toast_description();
		init_toast_close();
		init_use_stoppable_effect();
		init_use_viewable_notes();
		PanelBodyCurrentRoute.propTypes = { notes: import_prop_types$12.default.arrayOf(import_prop_types$12.default.instanceOf(Note)).isRequired };
	}));
	//#endregion
	//#region modules/notes/assets/js/app/models/note-summary.js
	var NoteSummary;
	var init_note_summary = __esmMin((() => {
		init_base_model();
		init_defineProperty();
		NoteSummary = class NoteSummary extends BaseModel {
			constructor(..._args) {
				super(..._args);
				_defineProperty(this, "url", "");
				_defineProperty(this, "fullURL", "");
				_defineProperty(this, "title", "");
				_defineProperty(this, "notesCount", 0);
			}
			/**
			* Create a note from server response
			*
			* @param {Object} data
			*/
			static createFromResponse(data) {
				return new NoteSummary().init({
					url: data.url,
					fullURL: data.full_url,
					title: data.title,
					notesCount: data.notes_count
				});
			}
		};
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/panel-body-summary.js
	function PanelBodySummary(props) {
		const { route: { url: currentRouteURL } } = useNotesConfig();
		if (!props.notesSummary.length) return /* @__PURE__ */ react.default.createElement(PanelEmpty, null);
		return props.notesSummary.map((noteSummary) => /* @__PURE__ */ react.default.createElement(PanelPageTitle, {
			count: noteSummary.notesCount,
			key: noteSummary.url
		}, noteSummary.title, noteSummary.url !== currentRouteURL && /* @__PURE__ */ react.default.createElement(Tooltip, null, /* @__PURE__ */ react.default.createElement(Tooltip.Trigger, { asChild: true }, /* @__PURE__ */ react.default.createElement(StyledLink, {
			href: `${noteSummary.fullURL}#e:run:notes/open`,
			rel: "noopener noreferrer",
			target: "_blank",
			className: "elementor-clickable"
		}, /* @__PURE__ */ react.default.createElement(Icon$2, { className: "eicon-editor-external-link" }))), /* @__PURE__ */ react.default.createElement(Tooltip.Content, null, (0, _wordpress_i18n.__)("Open page in a new tab", "elementor-pro"), /* @__PURE__ */ react.default.createElement(Tooltip.Arrow, null)))));
	}
	var import_prop_types$11, StyledLink;
	var init_panel_body_summary = __esmMin((() => {
		import_prop_types$11 = /* @__PURE__ */ __toESM(require_prop_types());
		init_panel_page_title();
		init_note_summary();
		init_icon();
		init_tooltip();
		init_styled_components_browser_esm();
		init_use_notes_config();
		init_panel_empty();
		StyledLink = qe.a`
	position: absolute !important;
	font-size: 14px !important;
	inset-inline-end: 14px !important;
	top: 50% !important;
	margin-top: -.5em !important;
	color: #a4afb7 !important;
`;
		PanelBodySummary.propTypes = { notesSummary: import_prop_types$11.default.arrayOf(import_prop_types$11.default.instanceOf(NoteSummary)).isRequired };
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/panel-close-button.js
	function PanelCloseButton() {
		const handleClick = () => window.top.$e.run("notes/close");
		return /* @__PURE__ */ react.default.createElement(Tooltip, null, /* @__PURE__ */ react.default.createElement(Tooltip.Trigger, { asChild: true }, /* @__PURE__ */ react.default.createElement(IconButton, {
			name: "eicon-editor-close",
			onClick: handleClick
		})), /* @__PURE__ */ react.default.createElement(Tooltip.Content, null, (0, _wordpress_i18n.__)("Close notes mode", "elementor-pro"), /* @__PURE__ */ react.default.createElement(Tooltip.Arrow, null)));
	}
	var init_panel_close_button = __esmMin((() => {
		init_tooltip();
		init_icon_button();
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/panel-error.js
	function PanelError() {
		return /* @__PURE__ */ react.default.createElement(Container$1, null, /* @__PURE__ */ react.default.createElement("div", null, /* @__PURE__ */ react.default.createElement(Text, { weight: 700 }, (0, _wordpress_i18n.__)("Could not load the panel.", "elementor-pro")), /* @__PURE__ */ react.default.createElement(Text, null, (0, _wordpress_i18n.__)("Please refresh the page and try again.", "elementor-pro"))));
	}
	var Container$1, Text;
	var init_panel_error = __esmMin((() => {
		init_styled_components_browser_esm();
		init_div_base();
		Container$1 = qe(DivBase)`
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  height: 100% !important;
  width: 100% !important;
  text-align: center !important;
  padding: 13px 13px 43px 13px !important;
`;
		Text = qe.p`
  all: revert;

  font-family: Roboto, sans-serif !important;
  font-size: 12px !important;
  font-weight: ${({ weight }) => weight || 400} !important;
  text-transform: none !important;
  font-style: normal !important;
  text-decoration: none !important;
  line-height: normal !important;
  letter-spacing: normal !important;
  word-spacing: normal !important;
  margin: 0 !important;
  color: #6d7882 !important;
`;
	}));
	//#endregion
	//#region node_modules/@radix-ui/react-label/dist/index.module.js
	var _excluded$4, i$1, a, Label$1, useLabelContext;
	var init_index_module$3 = __esmMin((() => {
		init_index_module$36();
		init_index_module$33();
		init_index_module$35();
		init_index_module$19();
		init_extends();
		init_objectWithoutProperties();
		_excluded$4 = ["htmlFor", "id"];
		[i$1, a] = createContext$3("Label", {
			id: void 0,
			controlRef: { current: null }
		});
		Label$1 = /*#__PURE__*/ react.forwardRef(((o, a) => {
			const { htmlFor: c, id: u } = o, s = _objectWithoutProperties(o, _excluded$4), d = react.useRef(null), f = react.useRef(null), m = useComposedRefs(a, f), b = useId(u);
			return react.useEffect((() => {
				if (c) {
					const e = document.getElementById(c);
					if (f.current && e) {
						const t = () => e.getAttribute("aria-labelledby");
						const r = [b, t()].filter(Boolean).join(" ");
						return e.setAttribute("aria-labelledby", r), d.current = e, () => {
							var r;
							const o = null === (r = t()) || void 0 === r ? void 0 : r.replace(b, "");
							"" === o ? e.removeAttribute("aria-labelledby") : o && e.setAttribute("aria-labelledby", o);
						};
					}
				}
			}), [b, c]), /*#__PURE__*/ react.createElement(i$1, {
				id: b,
				controlRef: d
			}, /*#__PURE__*/ react.createElement(Primitive.span, _extends({
				role: "label",
				id: b
			}, s, {
				ref: m,
				onMouseDown: (e) => {
					var t;
					null === (t = o.onMouseDown) || void 0 === t || t.call(o, e), !e.defaultPrevented && e.detail > 1 && e.preventDefault();
				},
				onClick: (e) => {
					var t;
					if (null === (t = o.onClick) || void 0 === t || t.call(o, e), !d.current || e.defaultPrevented) return;
					const r = d.current.contains(e.target);
					const l = !0 === e.isTrusted;
					!r && l && (d.current.click(), d.current.focus());
				}
			})));
		}));
		useLabelContext = (e) => {
			const t = a("LabelConsumer"), { controlRef: r } = t;
			return react.useEffect((() => {
				e && (r.current = e);
			}), [e, r]), t.id;
		};
	}));
	//#endregion
	//#region node_modules/@radix-ui/react-checkbox/dist/index.module.js
	function x$1(e) {
		return "indeterminate" === e;
	}
	function h$1(e) {
		return x$1(e) ? "indeterminate" : e ? "checked" : "unchecked";
	}
	var _excluded$3, _excluded2$1, _excluded3$1, u, p, m$1, b$1, Checkbox$1, CheckboxIndicator, f$1, Root$1, Indicator$1;
	var init_index_module$2 = __esmMin((() => {
		init_index_module$33();
		init_index_module$32();
		init_index_module$3();
		init_index_module$22();
		init_index_module$8();
		init_index_module$16();
		init_index_module$25();
		init_index_module$19();
		init_index_module$35();
		init_extends();
		init_objectWithoutProperties();
		init_objectSpread2();
		_excluded$3 = [
			"__scopeCheckbox",
			"aria-labelledby",
			"name",
			"checked",
			"defaultChecked",
			"required",
			"disabled",
			"value",
			"onCheckedChange"
		];
		_excluded2$1 = ["__scopeCheckbox", "forceMount"];
		_excluded3$1 = [
			"control",
			"checked",
			"bubbles"
		];
		[u, p] = createContextScope("Checkbox");
		[m$1, b$1] = u("Checkbox");
		Checkbox$1 = /*#__PURE__*/ react.forwardRef(((t, o) => {
			const { __scopeCheckbox: a, "aria-labelledby": i, name: u, checked: p, defaultChecked: b, required: k, disabled: C, value: y = "on", onCheckedChange: v } = t, E = _objectWithoutProperties(t, _excluded$3), [w, g] = react.useState(null), I = useComposedRefs(o, ((e) => g(e))), R = useLabelContext(w), D = i || R, P = react.useRef(!1), _ = !w || Boolean(w.closest("form")), [q = !1, K] = useControllableState({
				prop: p,
				defaultProp: b,
				onChange: v
			});
			/*#__PURE__*/ return react.createElement(m$1, {
				scope: a,
				state: q,
				disabled: C
			}, /*#__PURE__*/ react.createElement(Primitive.button, _extends({
				type: "button",
				role: "checkbox",
				"aria-checked": x$1(q) ? "mixed" : q,
				"aria-labelledby": D,
				"aria-required": k,
				"data-state": h$1(q),
				"data-disabled": C ? "" : void 0,
				disabled: C,
				value: y
			}, E, {
				ref: I,
				onKeyDown: composeEventHandlers(t.onKeyDown, ((e) => {
					"Enter" === e.key && e.preventDefault();
				})),
				onClick: composeEventHandlers(t.onClick, ((e) => {
					K(((e) => !!x$1(e) || !e)), _ && (P.current = e.isPropagationStopped(), P.current || e.stopPropagation());
				}))
			})), _ && /*#__PURE__*/ react.createElement(f$1, {
				control: w,
				bubbles: !P.current,
				name: u,
				value: y,
				checked: q,
				required: k,
				disabled: C,
				style: { transform: "translateX(-100%)" }
			}));
		}));
		CheckboxIndicator = /*#__PURE__*/ react.forwardRef(((r, o) => {
			const { __scopeCheckbox: a, forceMount: n } = r, c = _objectWithoutProperties(r, _excluded2$1), i = b$1("CheckboxIndicator", a);
			/*#__PURE__*/ return react.createElement(Presence, { present: n || x$1(i.state) || !0 === i.state }, /*#__PURE__*/ react.createElement(Primitive.span, _extends({
				"data-state": h$1(i.state),
				"data-disabled": i.disabled ? "" : void 0
			}, c, {
				ref: o,
				style: _objectSpread2({ pointerEvents: "none" }, r.style)
			})));
		}));
		f$1 = /* @__PURE__ */ __name((e) => {
			const { control: t, checked: r, bubbles: n = !0 } = e, c = _objectWithoutProperties(e, _excluded3$1), i = react.useRef(null), s = usePrevious(r), u = useSize(t);
			return react.useEffect((() => {
				const e = i.current;
				const t = window.HTMLInputElement.prototype;
				const o = Object.getOwnPropertyDescriptor(t, "checked").set;
				if (s !== r && o) {
					const t = new Event("click", { bubbles: n });
					e.indeterminate = x$1(r), o.call(e, !x$1(r) && r), e.dispatchEvent(t);
				}
			}), [
				s,
				r,
				n
			]), /*#__PURE__*/ react.createElement("input", _extends({
				type: "checkbox",
				"aria-hidden": !0,
				defaultChecked: !x$1(r) && r
			}, c, {
				tabIndex: -1,
				ref: i,
				style: _objectSpread2(_objectSpread2(_objectSpread2({}, e.style), u), {}, {
					position: "absolute",
					pointerEvents: "none",
					opacity: 0,
					margin: 0
				})
			}));
		}, "f");
		__name(x$1, "x");
		__name(h$1, "h");
		Root$1 = Checkbox$1;
		Indicator$1 = CheckboxIndicator;
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/checkbox/checkbox.js
	function Checkbox(props) {
		return /* @__PURE__ */ react.default.createElement(StyledCheckbox, __spreadValues$6({}, props), /* @__PURE__ */ react.default.createElement(StyledIndicator$1, null, /* @__PURE__ */ react.default.createElement(Icon$2, { className: "eicon-check" })));
	}
	var __defProp$6, __getOwnPropSymbols$6, __hasOwnProp$6, __propIsEnum$6, __defNormalProp$6, __spreadValues$6, StyledCheckbox, StyledIndicator$1;
	var init_checkbox = __esmMin((() => {
		init_styled_components_browser_esm();
		init_index_module$2();
		init_button_base();
		init_icon();
		__defProp$6 = Object.defineProperty;
		__getOwnPropSymbols$6 = Object.getOwnPropertySymbols;
		__hasOwnProp$6 = Object.prototype.hasOwnProperty;
		__propIsEnum$6 = Object.prototype.propertyIsEnumerable;
		__defNormalProp$6 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$6(obj, key, {
			enumerable: true,
			configurable: true,
			writable: true,
			value
		}) : obj[key] = value, "__defNormalProp");
		__spreadValues$6 = /* @__PURE__ */ __name((a, b) => {
			for (var prop in b || (b = {})) if (__hasOwnProp$6.call(b, prop)) __defNormalProp$6(a, prop, b[prop]);
			if (__getOwnPropSymbols$6) {
				for (var prop of __getOwnPropSymbols$6(b)) if (__propIsEnum$6.call(b, prop)) __defNormalProp$6(a, prop, b[prop]);
			}
			return a;
		}, "__spreadValues");
		StyledCheckbox = qe(ButtonBase).attrs(() => ({ as: Root$1 }))`
  --border-color: #a4afb6;
  --background: #fff;
  --border: 1px solid var( --border-color );
  --border-radius: 3px;
  --width: 12px;
  --height: 12px;
  --display: inline-flex;

  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0;
  outline: none;
  transition: 0.2s all;
  overflow: hidden;

  &[data-state="checked"] {
    --border-color: #39b54a;
  }

  &:hover, &:focus {
	outline: none;
	--background: #eee;

	& > * {
	  --background: rgba(57, 181, 74, 0.8);
	}
  }
`;
		StyledIndicator$1 = qe(Indicator$1)`
  all: revert;

  position: absolute !important;
  inset: 0 !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  background: #39b54a !important;
  color: #fff !important;
  outline: none !important;
  font-size: 8px !important;
`;
		Checkbox.propTypes = __spreadValues$6({}, Root$1.propTypes);
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/label/label.js
	var Label;
	var init_label = __esmMin((() => {
		init_index_module$3();
		init_styled_components_browser_esm();
		Label = qe(Label$1)`
  all: revert;

  font-size: 11px !important;
  color: #a4afb6 !important;
  font-weight: 500 !important;
  font-family: Roboto, sans-serif !important;
  user-select: none !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 8px !important;
  line-height: 2 !important;
`;
	}));
	//#endregion
	//#region node_modules/@radix-ui/react-radio-group/dist/index.module.js
	function E(e) {
		return e ? "checked" : "unchecked";
	}
	var _excluded$2, _excluded2, _excluded3, _excluded4, _excluded5, _excluded6, m, f, b, v, R, h, k, x, y, w, g, G, C, I, RadioGroup, RadioGroupItem, RadioGroupIndicator, Item, Indicator;
	var init_index_module$1 = __esmMin((() => {
		init_index_module$32();
		init_index_module$8();
		init_index_module$22();
		init_index_module$16();
		init_index_module$12();
		init_index_module$33();
		init_index_module$19();
		init_index_module$35();
		init_index_module$3();
		init_index_module$25();
		init_extends();
		init_objectWithoutProperties();
		init_objectSpread2();
		_excluded$2 = [
			"__scopeRadio",
			"aria-labelledby",
			"name",
			"checked",
			"required",
			"disabled",
			"value",
			"onCheck"
		];
		_excluded2 = ["__scopeRadio", "forceMount"];
		_excluded3 = [
			"control",
			"checked",
			"bubbles"
		];
		_excluded4 = [
			"__scopeRadioGroup",
			"name",
			"aria-labelledby",
			"defaultValue",
			"value",
			"required",
			"orientation",
			"dir",
			"loop",
			"onValueChange"
		];
		_excluded5 = ["__scopeRadioGroup", "disabled"];
		_excluded6 = ["__scopeRadioGroup"];
		[m, f] = createContextScope("Radio"), [b, v] = m("Radio"), R = /*#__PURE__*/ react.forwardRef(((e, r) => {
			const { __scopeRadio: o, "aria-labelledby": t, name: a, checked: n = !1, required: c, disabled: m, value: f = "on", onCheck: v } = e, R = _objectWithoutProperties(e, _excluded$2), [h, x] = react.useState(null), y = useComposedRefs(r, ((e) => x(e))), w = useLabelContext(h), g = t || w, G = react.useRef(!1), C = !h || Boolean(h.closest("form"));
			/*#__PURE__*/ return react.createElement(b, {
				scope: o,
				checked: n,
				disabled: m
			}, /*#__PURE__*/ react.createElement(Primitive.button, _extends({
				type: "button",
				role: "radio",
				"aria-checked": n,
				"aria-labelledby": g,
				"data-state": E(n),
				"data-disabled": m ? "" : void 0,
				disabled: m,
				value: f
			}, R, {
				ref: y,
				onClick: composeEventHandlers(e.onClick, ((e) => {
					n || null == v || v(), C && (G.current = e.isPropagationStopped(), G.current || e.stopPropagation());
				}))
			})), C && /*#__PURE__*/ react.createElement(k, {
				control: h,
				bubbles: !G.current,
				name: a,
				value: f,
				checked: n,
				required: c,
				disabled: m,
				style: { transform: "translateX(-100%)" }
			}));
		})), h = /*#__PURE__*/ react.forwardRef(((r, o) => {
			const { __scopeRadio: t, forceMount: a } = r, n = _objectWithoutProperties(r, _excluded2), c = v("RadioIndicator", t);
			/*#__PURE__*/ return react.createElement(Presence, { present: a || c.checked }, /*#__PURE__*/ react.createElement(Primitive.span, _extends({
				"data-state": E(c.checked),
				"data-disabled": c.disabled ? "" : void 0
			}, n, { ref: o })));
		})), k = (e) => {
			const { control: t, checked: a, bubbles: n = !0 } = e, i = _objectWithoutProperties(e, _excluded3), c = react.useRef(null), d = usePrevious(a), u = useSize(t);
			return react.useEffect((() => {
				const e = c.current;
				const r = window.HTMLInputElement.prototype;
				const o = Object.getOwnPropertyDescriptor(r, "checked").set;
				if (d !== a && o) {
					const r = new Event("click", { bubbles: n });
					o.call(e, a), e.dispatchEvent(r);
				}
			}), [
				d,
				a,
				n
			]), /*#__PURE__*/ react.createElement("input", _extends({
				type: "radio",
				"aria-hidden": !0,
				defaultChecked: a
			}, i, {
				tabIndex: -1,
				ref: c,
				style: _objectSpread2(_objectSpread2(_objectSpread2({}, e.style), u), {}, {
					position: "absolute",
					pointerEvents: "none",
					opacity: 0,
					margin: 0
				})
			}));
		};
		x = [
			"ArrowUp",
			"ArrowDown",
			"ArrowLeft",
			"ArrowRight"
		], [y, w] = createContextScope("RadioGroup", [v$4, f]);
		g = v$4(), G = f(), [C, I] = y("RadioGroup");
		RadioGroup = /*#__PURE__*/ react.forwardRef(((e, r) => {
			const { __scopeRadioGroup: o, name: n, "aria-labelledby": c, defaultValue: d, value: l, required: m = !1, orientation: f, dir: b = "ltr", loop: v = !0, onValueChange: R } = e, h = _objectWithoutProperties(e, _excluded4), k = useLabelContext(), E = c || k, x = g(o), [y, w] = useControllableState({
				prop: l,
				defaultProp: d,
				onChange: R
			});
			/*#__PURE__*/ return react.createElement(C, {
				scope: o,
				name: n,
				required: m,
				value: y,
				onValueChange: w
			}, /*#__PURE__*/ react.createElement(Root$8, _extends({ asChild: !0 }, x, {
				orientation: f,
				dir: b,
				loop: v
			}), /*#__PURE__*/ react.createElement(Primitive.div, _extends({
				role: "radiogroup",
				"aria-orientation": f,
				"aria-labelledby": E,
				dir: b
			}, h, { ref: r }))));
		}));
		RadioGroupItem = /*#__PURE__*/ react.forwardRef(((e, r) => {
			const { __scopeRadioGroup: o, disabled: t } = e, n = _objectWithoutProperties(e, _excluded5), i = I("RadioGroupItem", o), c = g(o), u = G(o), m = react.useRef(null), f = useComposedRefs(r, m), b = i.value === n.value, v = react.useRef(!1);
			return react.useEffect((() => {
				const e = (e) => {
					x.includes(e.key) && (v.current = !0);
				};
				const r = () => v.current = !1;
				return document.addEventListener("keydown", e), document.addEventListener("keyup", r), () => {
					document.removeEventListener("keydown", e), document.removeEventListener("keyup", r);
				};
			}), []), /*#__PURE__*/ react.createElement(Item$3, _extends({ asChild: !0 }, c, {
				focusable: !t,
				active: b
			}), /*#__PURE__*/ react.createElement(R, _extends({
				disabled: t,
				required: i.required,
				checked: b
			}, u, n, {
				name: i.name,
				ref: f,
				onCheck: () => i.onValueChange(n.value),
				onKeyDown: composeEventHandlers(((e) => {
					"Enter" === e.key && e.preventDefault();
				})),
				onFocus: composeEventHandlers(n.onFocus, (() => {
					var e;
					v.current && (null === (e = m.current) || void 0 === e || e.click());
				}))
			})));
		}));
		RadioGroupIndicator = /*#__PURE__*/ react.forwardRef(((e, r) => {
			const { __scopeRadioGroup: o } = e, t = _objectWithoutProperties(e, _excluded6), a = G(o);
			/*#__PURE__*/ return react.createElement(h, _extends({}, a, t, { ref: r }));
		}));
		Item = RadioGroupItem;
		Indicator = RadioGroupIndicator;
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/radio/radio.js
	function Radio(props) {
		return /* @__PURE__ */ react.default.createElement(StyledItem, __spreadValues$5({}, props), /* @__PURE__ */ react.default.createElement(StyledIndicator, null));
	}
	var __defProp$5, __getOwnPropSymbols$5, __hasOwnProp$5, __propIsEnum$5, __defNormalProp$5, __spreadValues$5, StyledItem, StyledIndicator;
	var init_radio = __esmMin((() => {
		init_index_module$1();
		init_styled_components_browser_esm();
		init_button_base();
		__defProp$5 = Object.defineProperty;
		__getOwnPropSymbols$5 = Object.getOwnPropertySymbols;
		__hasOwnProp$5 = Object.prototype.hasOwnProperty;
		__propIsEnum$5 = Object.prototype.propertyIsEnumerable;
		__defNormalProp$5 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$5(obj, key, {
			enumerable: true,
			configurable: true,
			writable: true,
			value
		}) : obj[key] = value, "__defNormalProp");
		__spreadValues$5 = /* @__PURE__ */ __name((a, b) => {
			for (var prop in b || (b = {})) if (__hasOwnProp$5.call(b, prop)) __defNormalProp$5(a, prop, b[prop]);
			if (__getOwnPropSymbols$5) {
				for (var prop of __getOwnPropSymbols$5(b)) if (__propIsEnum$5.call(b, prop)) __defNormalProp$5(a, prop, b[prop]);
			}
			return a;
		}, "__spreadValues");
		StyledItem = qe(ButtonBase).attrs(() => ({ as: Item }))`
  --border-color: #a4afb6;
  --background: #fff;
  --border: 1px solid var( --border-color );
  --border-radius: 100%;
  --width: 12px;
  --height: 12px;
  --display: inline-flex;

  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0;
  outline: none;
  transition: 0.2s all;
  overflow: hidden;

  &[data-state="checked"] {
    --border-color: #39b54a;
  }

  &:hover, &:focus {
	outline: none;
	--background: #eee;

	& > * {
	  --background: rgba(57, 181, 74, 0.8);
	}
  }
`;
		StyledIndicator = qe(Indicator)`
  all: revert;

  position: absolute !important;
  top: 0 !important;
  right: 0 !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  background: #39b54a !important;
  color: #fff !important;
  outline: none !important;
  font-size: 8px !important;
  margin: 2px !important;
  border-radius: 100% !important;
  width: 6px !important;
  height: 6px !important;
`;
		Radio.propTypes = __spreadValues$5({}, Item.propTypes);
		Radio.Group = RadioGroup;
	}));
	//#endregion
	//#region node_modules/@radix-ui/react-separator/dist/index.module.js
	/*#__PURE__*/ function i(r) {
		return n.includes(r);
	}
	var _excluded$1, e, n, Separator$1, Root;
	var init_index_module = __esmMin((() => {
		init_index_module$33();
		init_extends();
		init_objectWithoutProperties();
		_excluded$1 = ["decorative", "orientation"];
		e = "horizontal";
		n = ["horizontal", "vertical"];
		Separator$1 = /*#__PURE__*/ react.forwardRef(((n, a) => {
			const { decorative: p, orientation: l = e } = n, c = _objectWithoutProperties(n, _excluded$1), s = i(l) ? l : e, u = p ? { role: "none" } : {
				"aria-orientation": "vertical" === s ? s : void 0,
				role: "separator"
			};
			/*#__PURE__*/ return react.createElement(Primitive.div, _extends({ "data-orientation": s }, u, c, { ref: a }));
		}));
		Separator$1.propTypes = { orientation(r, o, t) {
			const n = r[o];
			const a = String(n);
			return n && !i(n) ? new Error(function(r, o) {
				return `Invalid prop \`orientation\` of value \`${r}\` supplied to \`${o}\`, expected one of:\n  - horizontal\n  - vertical\n\nDefaulting to \`${e}\`.`;
			}(a, t)) : null;
		} };
		Root = Separator$1;
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/separator/separator.js
	function Separator() {
		return /* @__PURE__ */ react.default.createElement(StyledSeparator, null);
	}
	var __defProp$4, __getOwnPropSymbols$4, __hasOwnProp$4, __propIsEnum$4, __defNormalProp$4, __spreadValues$4, StyledSeparator;
	var init_separator = __esmMin((() => {
		init_index_module();
		init_styled_components_browser_esm();
		__defProp$4 = Object.defineProperty;
		__getOwnPropSymbols$4 = Object.getOwnPropertySymbols;
		__hasOwnProp$4 = Object.prototype.hasOwnProperty;
		__propIsEnum$4 = Object.prototype.propertyIsEnumerable;
		__defNormalProp$4 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$4(obj, key, {
			enumerable: true,
			configurable: true,
			writable: true,
			value
		}) : obj[key] = value, "__defNormalProp");
		__spreadValues$4 = /* @__PURE__ */ __name((a, b) => {
			for (var prop in b || (b = {})) if (__hasOwnProp$4.call(b, prop)) __defNormalProp$4(a, prop, b[prop]);
			if (__getOwnPropSymbols$4) {
				for (var prop of __getOwnPropSymbols$4(b)) if (__propIsEnum$4.call(b, prop)) __defNormalProp$4(a, prop, b[prop]);
			}
			return a;
		}, "__spreadValues");
		StyledSeparator = qe(Root)`
  background: #f1f3f5;

  &[data-orientation=horizontal] {
	height: 1px;
	width: 100%;
	margin: 10px 0;
  }

  &[data-orientation=vertical] {
	height: 100%;
	width: 1px;
	margin: 0 10px;
  }
`;
		Separator.propTypes = __spreadValues$4({}, Root.propTypes);
	}));
	//#endregion
	//#region modules/notes/assets/js/app/hooks/use-notes-summary.js
	function useNotesSummary(rawOptions = {}) {
		const [filters] = useNotesFilters();
		const options = (0, react.useMemo)(() => _objectSpread2(_objectSpread2({}, defaultOptions), rawOptions), [rawOptions]);
		return useQuery(["notes/summary", (0, react.useMemo)(() => normalizeQueryParams(_objectSpread2(_objectSpread2({}, filters), options.params || {})), [options.params, filters])], function() {
			var _ref = _asyncToGenerator(function* ({ queryKey: [, params], signal }) {
				const { data } = yield window.top.$e.data.get("notes/summary", _objectSpread2({ parent_id: 0 }, params), {
					refresh: true,
					signal
				});
				return data.data.map((rawNote) => {
					return NoteSummary.createFromResponse(rawNote);
				});
			});
			return function(_x) {
				return _ref.apply(this, arguments);
			};
		}(), {
			keepPreviousData: true,
			enabled: options.enabled
		});
	}
	var defaultOptions;
	var init_use_notes_summary = __esmMin((() => {
		init_es$1();
		init_utils$2();
		init_note_summary();
		init_use_notes_filters();
		init_objectSpread2();
		init_asyncToGenerator();
		defaultOptions = {
			enabled: true,
			params: {}
		};
	}));
	//#endregion
	//#region modules/notes/assets/js/app/hooks/use-notes-or-notes-summary.js
	function useNotesOrNotesSummary() {
		const [view, setView] = (0, react.useState)(VIEW_NOTES), isNotesView = (0, react.useMemo)(() => VIEW_NOTES === view, [view]), isNotesSummaryView = (0, react.useMemo)(() => VIEW_NOTES_SUMMARY === view, [view]);
		const notesQuery = useNotes({ enabled: isNotesView });
		const notesSummaryQuery = useNotesSummary({ enabled: isNotesSummaryView });
		return (0, react.useMemo)(() => _objectSpread2(_objectSpread2({}, "notes" === view ? notesQuery : notesSummaryQuery), {}, {
			setView,
			view,
			isNotesView,
			isNotesSummaryView
		}), [notesQuery, notesSummaryQuery]);
	}
	var VIEW_NOTES, VIEW_NOTES_SUMMARY;
	var init_use_notes_or_notes_summary = __esmMin((() => {
		init_use_notes();
		init_use_notes_summary();
		init_objectSpread2();
		VIEW_NOTES = "notes";
		VIEW_NOTES_SUMMARY = "notes-summary";
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/panel-popover.js
	function PanelPopover(props) {
		const [filters, setFilters] = useNotesFilters();
		const { direction } = useNotesConfig();
		return /* @__PURE__ */ react.default.createElement(Popover, { onOpenChange: (isOpen) => {
			if (isOpen) window.top.$e.run("notes/open-panel-filters");
			else window.top.$e.run("notes/close-panel-filters");
		} }, /* @__PURE__ */ react.default.createElement(Popover.Trigger, { asChild: true }, /* @__PURE__ */ react.default.createElement(IconButton, {
			name: "eicon-ellipsis-h",
			size: "sm"
		})), /* @__PURE__ */ react.default.createElement(PopoverContent, {
			align: "rtl" === direction ? "end" : "start",
			sideOffset: 5
		}, /* @__PURE__ */ react.default.createElement(Radio.Group, {
			value: props.view,
			onValueChange: props.setView,
			dir: direction
		}, /* @__PURE__ */ react.default.createElement("div", null, /* @__PURE__ */ react.default.createElement(Label, null, /* @__PURE__ */ react.default.createElement(Radio, { value: VIEW_NOTES }), (0, _wordpress_i18n.__)("Current page", "elementor-pro"))), /* @__PURE__ */ react.default.createElement("div", null, /* @__PURE__ */ react.default.createElement(Label, null, /* @__PURE__ */ react.default.createElement(Radio, { value: VIEW_NOTES_SUMMARY }), (0, _wordpress_i18n.__)("All site", "elementor-pro")))), /* @__PURE__ */ react.default.createElement(Separator, null), /* @__PURE__ */ react.default.createElement(Radio.Group, {
			value: filters.only_relevant ? "1" : "0",
			onValueChange: (value) => setFilters({ only_relevant: "1" === value ? true : null }),
			dir: direction
		}, /* @__PURE__ */ react.default.createElement("div", null, /* @__PURE__ */ react.default.createElement(Label, null, /* @__PURE__ */ react.default.createElement(Radio, { value: "0" }), (0, _wordpress_i18n.__)("All notes", "elementor-pro"))), /* @__PURE__ */ react.default.createElement("div", null, /* @__PURE__ */ react.default.createElement(Label, null, /* @__PURE__ */ react.default.createElement(Radio, { value: "1" }), (0, _wordpress_i18n.__)("Only yours", "elementor-pro")))), /* @__PURE__ */ react.default.createElement(Separator, null), /* @__PURE__ */ react.default.createElement("div", null, /* @__PURE__ */ react.default.createElement(Label, { htmlFor: "notes-filter-show-resolved" }, /* @__PURE__ */ react.default.createElement(Checkbox, {
			id: "notes-filter-show-resolved",
			checked: null === filters.is_resolved,
			onCheckedChange: (value) => setFilters({ is_resolved: value ? null : false })
		}), (0, _wordpress_i18n.__)("Show resolved", "elementor-pro"))), /* @__PURE__ */ react.default.createElement("div", null, /* @__PURE__ */ react.default.createElement(Label, { htmlFor: "notes-filter-only-unread" }, /* @__PURE__ */ react.default.createElement(Checkbox, {
			id: "notes-filter-only-unread",
			checked: filters.only_unread,
			onCheckedChange: (value) => setFilters({ only_unread: value ? true : null })
		}), (0, _wordpress_i18n.__)("Show unread only", "elementor-pro"))), /* @__PURE__ */ react.default.createElement(Popover.Arrow, null), /* @__PURE__ */ react.default.createElement(Popover.CloseButton, null)));
	}
	var import_prop_types$10, PopoverContent;
	var init_panel_popover = __esmMin((() => {
		import_prop_types$10 = /* @__PURE__ */ __toESM(require_prop_types());
		init_checkbox();
		init_icon_button();
		init_label();
		init_popover();
		init_radio();
		init_separator();
		init_use_notes_filters();
		init_use_notes_or_notes_summary();
		init_styled_components_browser_esm();
		init_use_notes_config();
		PopoverContent = qe(Popover.Content)`
  padding: 16px 16px 10px !important;
`;
		PanelPopover.propTypes = {
			view: import_prop_types$10.default.string.isRequired,
			setView: import_prop_types$10.default.func.isRequired
		};
	}));
	//#endregion
	//#region node_modules/react-draggable/node_modules/clsx/dist/clsx.mjs
	function r(e) {
		var t;
		var f;
		var n = "";
		if ("string" == typeof e || "number" == typeof e) n += e;
		else if ("object" == typeof e) if (Array.isArray(e)) {
			var o = e.length;
			for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
		} else for (f in e) e[f] && (n && (n += " "), n += f);
		return n;
	}
	function clsx() {
		for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
		return n;
	}
	var init_clsx = __esmMin((() => {}));
	//#endregion
	//#region node_modules/react-draggable/build/cjs/chunk-RXGSR3JC.mjs
	function findInArray(array, callback) {
		for (let i = 0, length = array.length; i < length; i++) if (callback.apply(callback, [
			array[i],
			i,
			array
		])) return array[i];
	}
	function isFunction(func) {
		return typeof func === "function" || Object.prototype.toString.call(func) === "[object Function]";
	}
	function isNum(num) {
		return typeof num === "number" && !isNaN(num);
	}
	function int(a) {
		return parseInt(a, 10);
	}
	function dontSetMe(props, propName, componentName) {
		if (props[propName]) return /* @__PURE__ */ new Error(`Invalid prop ${propName} passed to ${componentName} - do not set this, set it on the child.`);
	}
	function getPrefix(prop = "transform") {
		var _a;
		var _b;
		if (typeof window === "undefined") return "";
		const style = (_b = (_a = window.document) == null ? void 0 : _a.documentElement) == null ? void 0 : _b.style;
		if (!style) return "";
		if (prop in style) return "";
		for (let i = 0; i < prefixes.length; i++) if (browserPrefixToKey(prop, prefixes[i]) in style) return prefixes[i];
		return "";
	}
	function browserPrefixToKey(prop, prefix) {
		return prefix ? `${prefix}${kebabToTitleCase(prop)}` : prop;
	}
	function kebabToTitleCase(str) {
		let out = "";
		let shouldCapitalize = true;
		for (let i = 0; i < str.length; i++) if (shouldCapitalize) {
			out += str[i].toUpperCase();
			shouldCapitalize = false;
		} else if (str[i] === "-") shouldCapitalize = true;
		else out += str[i];
		return out;
	}
	function matchesSelector(el, selector) {
		var _a;
		if (!matchesSelectorFunc) matchesSelectorFunc = (_a = findInArray([
			"matches",
			"webkitMatchesSelector",
			"mozMatchesSelector",
			"msMatchesSelector",
			"oMatchesSelector"
		], function(method) {
			return isFunction(el[method]);
		})) != null ? _a : "";
		const matchFn = el[matchesSelectorFunc];
		if (!isFunction(matchFn)) return false;
		return Boolean(matchFn.call(el, selector));
	}
	function matchesSelectorAndParentsTo(el, selector, baseNode) {
		let node = el;
		do {
			if (matchesSelector(node, selector)) return true;
			if (node === baseNode) return false;
			node = node.parentNode;
		} while (node);
		return false;
	}
	function addEvent(el, event, handler, inputOptions) {
		if (!el) return;
		const options = _objectSpread2({ capture: true }, inputOptions);
		const listener = handler;
		if (el.addEventListener) el.addEventListener(event, listener, options);
		else if (el.attachEvent) el.attachEvent("on" + event, listener);
		else el["on" + event] = listener;
	}
	function removeEvent(el, event, handler, inputOptions) {
		if (!el) return;
		const options = _objectSpread2({ capture: true }, inputOptions);
		const listener = handler;
		if (el.removeEventListener) el.removeEventListener(event, listener, options);
		else if (el.detachEvent) el.detachEvent("on" + event, listener);
		else el["on" + event] = null;
	}
	function outerHeight(node) {
		let height = node.clientHeight;
		const computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
		height += int(computedStyle.borderTopWidth);
		height += int(computedStyle.borderBottomWidth);
		return height;
	}
	function outerWidth(node) {
		let width = node.clientWidth;
		const computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
		width += int(computedStyle.borderLeftWidth);
		width += int(computedStyle.borderRightWidth);
		return width;
	}
	function innerHeight(node) {
		let height = node.clientHeight;
		const computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
		height -= int(computedStyle.paddingTop);
		height -= int(computedStyle.paddingBottom);
		return height;
	}
	function innerWidth(node) {
		let width = node.clientWidth;
		const computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
		width -= int(computedStyle.paddingLeft);
		width -= int(computedStyle.paddingRight);
		return width;
	}
	function offsetXYFromParent(evt, offsetParent, scale) {
		const offsetParentRect = offsetParent === offsetParent.ownerDocument.body ? {
			left: 0,
			top: 0
		} : offsetParent.getBoundingClientRect();
		return {
			x: (evt.clientX + offsetParent.scrollLeft - offsetParentRect.left) / scale,
			y: (evt.clientY + offsetParent.scrollTop - offsetParentRect.top) / scale
		};
	}
	function createCSSTransform(controlPos, positionOffset) {
		const translation = getTranslation(controlPos, positionOffset, "px");
		return { [browserPrefixToKey("transform", getPrefix_default)]: translation };
	}
	function createSVGTransform(controlPos, positionOffset) {
		return getTranslation(controlPos, positionOffset, "");
	}
	function getTranslation({ x, y }, positionOffset, unitSuffix) {
		let translation = `translate(${x}${unitSuffix},${y}${unitSuffix})`;
		if (positionOffset) translation = `translate(${`${typeof positionOffset.x === "string" ? positionOffset.x : positionOffset.x + unitSuffix}`}, ${`${typeof positionOffset.y === "string" ? positionOffset.y : positionOffset.y + unitSuffix}`})` + translation;
		return translation;
	}
	function getTouch(e, identifier) {
		return e.targetTouches && findInArray(e.targetTouches, (t) => identifier === t.identifier) || e.changedTouches && findInArray(e.changedTouches, (t) => identifier === t.identifier);
	}
	function getTouchIdentifier(e) {
		if (e.targetTouches && e.targetTouches[0]) return e.targetTouches[0].identifier;
		if (e.changedTouches && e.changedTouches[0]) return e.changedTouches[0].identifier;
	}
	function getDefaultNonce() {
		return typeof __webpack_nonce__ !== "undefined" ? __webpack_nonce__ : void 0;
	}
	function addUserSelectStyles(doc, nonce) {
		if (!doc) return;
		let styleEl = doc.getElementById("react-draggable-style-el");
		if (!styleEl) {
			styleEl = doc.createElement("style");
			styleEl.type = "text/css";
			styleEl.id = "react-draggable-style-el";
			const resolvedNonce = nonce != null ? nonce : getDefaultNonce();
			if (resolvedNonce) styleEl.setAttribute("nonce", resolvedNonce);
			styleEl.innerHTML = ".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n";
			styleEl.innerHTML += ".react-draggable-transparent-selection *::selection {all: inherit;}\n";
			doc.getElementsByTagName("head")[0].appendChild(styleEl);
		}
		if (doc.body) addClassName(doc.body, "react-draggable-transparent-selection");
	}
	function scheduleRemoveUserSelectStyles(doc) {
		if (window.requestAnimationFrame) window.requestAnimationFrame(() => {
			removeUserSelectStyles(doc);
		});
		else removeUserSelectStyles(doc);
	}
	function removeUserSelectStyles(doc) {
		if (!doc) return;
		try {
			if (doc.body) removeClassName(doc.body, "react-draggable-transparent-selection");
			const ieSelection = doc.selection;
			if (ieSelection) ieSelection.empty();
			else {
				const selection = (doc.defaultView || window).getSelection();
				if (selection && selection.type !== "Caret") selection.removeAllRanges();
			}
		} catch (_unused) {}
	}
	function addClassName(el, className) {
		if (el.classList) el.classList.add(className);
		else if (!el.className.match(new RegExp(`(?:^|\\s)${className}(?!\\S)`))) el.className += ` ${className}`;
	}
	function removeClassName(el, className) {
		if (el.classList) el.classList.remove(className);
		else el.className = el.className.replace(new RegExp(`(?:^|\\s)${className}(?!\\S)`, "g"), "");
	}
	function getBoundPosition(draggable, x, y) {
		if (!draggable.props.bounds) return [x, y];
		let { bounds } = draggable.props;
		bounds = typeof bounds === "string" ? bounds : cloneBounds(bounds);
		const node = findDOMNode(draggable);
		if (typeof bounds === "string") {
			const { ownerDocument } = node;
			const ownerWindow = ownerDocument.defaultView;
			if (!ownerWindow) throw new Error("Cannot resolve the owner window of the draggable node.");
			let boundNode;
			if (bounds === "parent") boundNode = node.parentNode;
			else boundNode = node.getRootNode().querySelector(bounds);
			if (!(boundNode instanceof ownerWindow.HTMLElement)) throw new Error("Bounds selector \"" + bounds + "\" could not find an element.");
			const boundNodeEl = boundNode;
			const nodeStyle = ownerWindow.getComputedStyle(node);
			const boundNodeStyle = ownerWindow.getComputedStyle(boundNodeEl);
			bounds = {
				left: -node.offsetLeft + int(boundNodeStyle.paddingLeft) + int(nodeStyle.marginLeft),
				top: -node.offsetTop + int(boundNodeStyle.paddingTop) + int(nodeStyle.marginTop),
				right: innerWidth(boundNodeEl) - outerWidth(node) - node.offsetLeft + int(boundNodeStyle.paddingRight) - int(nodeStyle.marginRight),
				bottom: innerHeight(boundNodeEl) - outerHeight(node) - node.offsetTop + int(boundNodeStyle.paddingBottom) - int(nodeStyle.marginBottom)
			};
		}
		if (isNum(bounds.right)) x = Math.min(x, bounds.right);
		if (isNum(bounds.bottom)) y = Math.min(y, bounds.bottom);
		if (isNum(bounds.left)) x = Math.max(x, bounds.left);
		if (isNum(bounds.top)) y = Math.max(y, bounds.top);
		return [x, y];
	}
	function snapToGrid(grid, pendingX, pendingY) {
		return [Math.round(pendingX / grid[0]) * grid[0], Math.round(pendingY / grid[1]) * grid[1]];
	}
	function canDragX(draggable) {
		return draggable.props.axis === "both" || draggable.props.axis === "x";
	}
	function canDragY(draggable) {
		return draggable.props.axis === "both" || draggable.props.axis === "y";
	}
	function getControlPosition(e, touchIdentifier, draggableCore) {
		const touchObj = typeof touchIdentifier === "number" ? getTouch(e, touchIdentifier) : null;
		if (typeof touchIdentifier === "number" && !touchObj) return null;
		const node = findDOMNode(draggableCore);
		const offsetParent = draggableCore.props.offsetParent || node.offsetParent || node.ownerDocument.body;
		return offsetXYFromParent(touchObj || e, offsetParent, draggableCore.props.scale);
	}
	function createCoreData(draggable, x, y) {
		const isStart = !isNum(draggable.lastX);
		const node = findDOMNode(draggable);
		if (isStart) return {
			node,
			deltaX: 0,
			deltaY: 0,
			lastX: x,
			lastY: y,
			x,
			y
		};
		else return {
			node,
			deltaX: x - draggable.lastX,
			deltaY: y - draggable.lastY,
			lastX: draggable.lastX,
			lastY: draggable.lastY,
			x,
			y
		};
	}
	function createDraggableData(draggable, coreData) {
		const scale = draggable.props.scale;
		return {
			node: coreData.node,
			x: draggable.state.x + coreData.deltaX / scale,
			y: draggable.state.y + coreData.deltaY / scale,
			deltaX: coreData.deltaX / scale,
			deltaY: coreData.deltaY / scale,
			lastX: draggable.state.x,
			lastY: draggable.state.y
		};
	}
	function cloneBounds(bounds) {
		return {
			left: bounds.left,
			top: bounds.top,
			right: bounds.right,
			bottom: bounds.bottom
		};
	}
	function findDOMNode(draggable) {
		const node = draggable.findDOMNode();
		if (!node) throw new Error("<DraggableCore>: Unmounted during event!");
		return node;
	}
	function log(...args) {
		if ({}.DRAGGABLE_DEBUG) console.log(...args);
	}
	var import_prop_types$8, import_prop_types$9, _excluded, prefixes, getPrefix_default, matchesSelectorFunc, eventsFor, dragEventFor, DraggableCore, Draggable;
	var init_chunk_RXGSR3JC = __esmMin((() => {
		import_prop_types$8 = /* @__PURE__ */ __toESM(require_prop_types(), 1);
		init_clsx();
		init_objectSpread2();
		init_objectWithoutProperties();
		import_prop_types$9 = /* @__PURE__ */ __toESM(require_prop_types(), 1);
		_excluded = [
			"axis",
			"bounds",
			"children",
			"defaultPosition",
			"defaultClassName",
			"defaultClassNameDragging",
			"defaultClassNameDragged",
			"position",
			"positionOffset",
			"scale"
		];
		prefixes = [
			"Moz",
			"Webkit",
			"O",
			"ms"
		];
		getPrefix_default = getPrefix();
		matchesSelectorFunc = "";
		eventsFor = {
			touch: {
				start: "touchstart",
				move: "touchmove",
				stop: "touchend"
			},
			mouse: {
				start: "mousedown",
				move: "mousemove",
				stop: "mouseup"
			}
		};
		dragEventFor = eventsFor.mouse;
		DraggableCore = class extends react$1.Component {
			constructor() {
				super(...arguments);
				this.dragging = false;
				this.lastX = NaN;
				this.lastY = NaN;
				this.touchIdentifier = null;
				this.mounted = false;
				this.handleDragStart = (e) => {
					this.props.onMouseDown(e);
					if (!this.props.allowAnyClick && (typeof e.button === "number" && e.button !== 0 || e.ctrlKey)) return false;
					const thisNode = this.findDOMNode();
					if (!thisNode || !thisNode.ownerDocument || !thisNode.ownerDocument.body) throw new Error("<DraggableCore> not mounted on DragStart!");
					const { ownerDocument } = thisNode;
					if (this.props.disabled || !(e.target instanceof ownerDocument.defaultView.Node) || this.props.handle && !matchesSelectorAndParentsTo(e.target, this.props.handle, thisNode) || this.props.cancel && matchesSelectorAndParentsTo(e.target, this.props.cancel, thisNode)) return;
					if (e.type === "touchstart" && !this.props.allowMobileScroll) e.preventDefault();
					const touchIdentifier = getTouchIdentifier(e);
					this.touchIdentifier = touchIdentifier;
					const position = getControlPosition(e, touchIdentifier, this);
					if (position == null) return;
					const { x, y } = position;
					const coreEvent = createCoreData(this, x, y);
					log("DraggableCore: handleDragStart: %j", coreEvent);
					log("calling", this.props.onStart);
					if (this.props.onStart(e, coreEvent) === false || this.mounted === false) return;
					if (this.props.enableUserSelectHack) addUserSelectStyles(ownerDocument, this.props.nonce);
					this.dragging = true;
					this.lastX = x;
					this.lastY = y;
					addEvent(ownerDocument, dragEventFor.move, this.handleDrag);
					addEvent(ownerDocument, dragEventFor.stop, this.handleDragStop);
				};
				this.handleDrag = (e) => {
					const position = getControlPosition(e, this.touchIdentifier, this);
					if (position == null) return;
					let { x, y } = position;
					if (Array.isArray(this.props.grid)) {
						let deltaX = x - this.lastX;
						let deltaY = y - this.lastY;
						[deltaX, deltaY] = snapToGrid(this.props.grid, deltaX, deltaY);
						if (!deltaX && !deltaY) return;
						x = this.lastX + deltaX;
						y = this.lastY + deltaY;
					}
					const coreEvent = createCoreData(this, x, y);
					log("DraggableCore: handleDrag: %j", coreEvent);
					if (this.props.onDrag(e, coreEvent) === false || this.mounted === false) {
						try {
							this.handleDragStop(new MouseEvent("mouseup"));
						} catch (_unused2) {
							const event = document.createEvent("MouseEvents");
							event.initMouseEvent("mouseup", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
							this.handleDragStop(event);
						}
						return;
					}
					this.lastX = x;
					this.lastY = y;
				};
				this.handleDragStop = (e) => {
					if (!this.dragging) return;
					const position = getControlPosition(e, this.touchIdentifier, this);
					if (position == null) return;
					let { x, y } = position;
					if (Array.isArray(this.props.grid)) {
						let deltaX = x - this.lastX || 0;
						let deltaY = y - this.lastY || 0;
						[deltaX, deltaY] = snapToGrid(this.props.grid, deltaX, deltaY);
						x = this.lastX + deltaX;
						y = this.lastY + deltaY;
					}
					const coreEvent = createCoreData(this, x, y);
					if (this.props.onStop(e, coreEvent) === false || this.mounted === false) return false;
					const thisNode = this.findDOMNode();
					if (thisNode) {
						if (this.props.enableUserSelectHack) scheduleRemoveUserSelectStyles(thisNode.ownerDocument);
					}
					log("DraggableCore: handleDragStop: %j", coreEvent);
					this.dragging = false;
					this.lastX = NaN;
					this.lastY = NaN;
					if (thisNode) {
						log("DraggableCore: Removing handlers");
						removeEvent(thisNode.ownerDocument, dragEventFor.move, this.handleDrag);
						removeEvent(thisNode.ownerDocument, dragEventFor.stop, this.handleDragStop);
					}
				};
				this.onMouseDown = (e) => {
					dragEventFor = eventsFor.mouse;
					return this.handleDragStart(e);
				};
				this.onMouseUp = (e) => {
					dragEventFor = eventsFor.mouse;
					return this.handleDragStop(e);
				};
				this.onTouchStart = (e) => {
					dragEventFor = eventsFor.touch;
					return this.handleDragStart(e);
				};
				this.onTouchEnd = (e) => {
					dragEventFor = eventsFor.touch;
					return this.handleDragStop(e);
				};
			}
			componentDidMount() {
				this.mounted = true;
				const thisNode = this.findDOMNode();
				if (thisNode) addEvent(thisNode, eventsFor.touch.start, this.onTouchStart, { passive: false });
			}
			componentWillUnmount() {
				this.mounted = false;
				const thisNode = this.findDOMNode();
				if (thisNode) {
					const { ownerDocument } = thisNode;
					removeEvent(ownerDocument, eventsFor.mouse.move, this.handleDrag);
					removeEvent(ownerDocument, eventsFor.touch.move, this.handleDrag);
					removeEvent(ownerDocument, eventsFor.mouse.stop, this.handleDragStop);
					removeEvent(ownerDocument, eventsFor.touch.stop, this.handleDragStop);
					removeEvent(thisNode, eventsFor.touch.start, this.onTouchStart, { passive: false });
					if (this.props.enableUserSelectHack) scheduleRemoveUserSelectStyles(ownerDocument);
				}
			}
			findDOMNode() {
				var _a;
				if ((_a = this.props) == null ? void 0 : _a.nodeRef) return this.props.nodeRef.current;
				const legacyReactDOM = react_dom$1.default;
				if (typeof legacyReactDOM.findDOMNode === "function") return legacyReactDOM.findDOMNode(this);
				log("react-draggable: ReactDOM.findDOMNode is not available in React 19+. You must provide a nodeRef prop. See: https://github.com/react-grid-layout/react-draggable#noderef");
				return null;
			}
			render() {
				return react$1.cloneElement(react$1.Children.only(this.props.children), {
					onMouseDown: this.onMouseDown,
					onMouseUp: this.onMouseUp,
					onTouchEnd: this.onTouchEnd
				});
			}
		};
		DraggableCore.displayName = "DraggableCore";
		DraggableCore.propTypes = {
			/**
			* `allowAnyClick` allows dragging using any mouse button.
			* By default, we only accept the left button.
			*
			* Defaults to `false`.
			*/
			allowAnyClick: import_prop_types$9.default.bool,
			/**
			* `allowMobileScroll` turns off cancellation of the 'touchstart' event
			* on mobile devices. Only enable this if you are having trouble with click
			* events. Prefer using 'handle' / 'cancel' instead.
			*
			* Defaults to `false`.
			*/
			allowMobileScroll: import_prop_types$9.default.bool,
			children: import_prop_types$9.default.node.isRequired,
			/**
			* `disabled`, if true, stops the <Draggable> from dragging. All handlers,
			* with the exception of `onMouseDown`, will not fire.
			*/
			disabled: import_prop_types$9.default.bool,
			/**
			* By default, we add 'user-select:none' attributes to the document body
			* to prevent ugly text selection during drag. If this is causing problems
			* for your app, set this to `false`.
			*/
			enableUserSelectHack: import_prop_types$9.default.bool,
			/**
			* `offsetParent`, if set, uses the passed DOM node to compute drag offsets
			* instead of using the parent node.
			*/
			offsetParent: function(props, propName) {
				if (props[propName] && props[propName].nodeType !== 1) throw new Error("Draggable's offsetParent must be a DOM Node.");
			},
			/**
			* `grid` specifies the x and y that dragging should snap to.
			*/
			grid: import_prop_types$9.default.arrayOf(import_prop_types$9.default.number),
			/**
			* `handle` specifies a selector to be used as the handle that initiates drag.
			*
			* Example:
			*
			* ```jsx
			*   let App = React.createClass({
			*       render: function () {
			*         return (
			*            <Draggable handle=".handle">
			*              <div>
			*                  <div className="handle">Click me to drag</div>
			*                  <div>This is some other content</div>
			*              </div>
			*           </Draggable>
			*         );
			*       }
			*   });
			* ```
			*/
			handle: import_prop_types$9.default.string,
			/**
			* `cancel` specifies a selector to be used to prevent drag initialization.
			*
			* Example:
			*
			* ```jsx
			*   let App = React.createClass({
			*       render: function () {
			*           return(
			*               <Draggable cancel=".cancel">
			*                   <div>
			*                     <div className="cancel">You can't drag from here</div>
			*                     <div>Dragging here works fine</div>
			*                   </div>
			*               </Draggable>
			*           );
			*       }
			*   });
			* ```
			*/
			cancel: import_prop_types$9.default.string,
			nodeRef: import_prop_types$9.default.object,
			/**
			* `nonce` is applied to the dynamically-injected <style> element used by the
			* user-select hack, so it isn't blocked under a strict Content Security
			* Policy (`style-src` without `'unsafe-inline'`). If omitted, webpack's
			* `__webpack_nonce__` global is used when available.
			*/
			nonce: import_prop_types$9.default.string,
			/**
			* Called when dragging starts.
			* If this function returns the boolean false, dragging will be canceled.
			*/
			onStart: import_prop_types$9.default.func,
			/**
			* Called while dragging.
			* If this function returns the boolean false, dragging will be canceled.
			*/
			onDrag: import_prop_types$9.default.func,
			/**
			* Called when dragging stops.
			* If this function returns the boolean false, the drag will remain active.
			*/
			onStop: import_prop_types$9.default.func,
			/**
			* A workaround option which can be passed if onMouseDown needs to be accessed,
			* since it'll always be blocked (as there is internal use of onMouseDown)
			*/
			onMouseDown: import_prop_types$9.default.func,
			/**
			* `scale`, if set, applies scaling while dragging an element
			*/
			scale: import_prop_types$9.default.number,
			/**
			* These properties should be defined on the child, not here.
			*/
			className: dontSetMe,
			style: dontSetMe,
			transform: dontSetMe
		};
		DraggableCore.defaultProps = {
			allowAnyClick: false,
			allowMobileScroll: false,
			disabled: false,
			enableUserSelectHack: true,
			onStart: function() {},
			onDrag: function() {},
			onStop: function() {},
			onMouseDown: function() {},
			scale: 1
		};
		Draggable = class extends react$1.Component {
			constructor(props) {
				super(props);
				this.onDragStart = (e, coreData) => {
					log("Draggable: onDragStart: %j", coreData);
					if (this.props.onStart(e, createDraggableData(this, coreData)) === false) return false;
					this.setState({
						dragging: true,
						dragged: true
					});
				};
				this.onDrag = (e, coreData) => {
					if (!this.state.dragging) return false;
					log("Draggable: onDrag: %j", coreData);
					const uiData = createDraggableData(this, coreData);
					const newState = {
						x: uiData.x,
						y: uiData.y,
						slackX: 0,
						slackY: 0
					};
					if (this.props.bounds) {
						const { x, y } = newState;
						newState.x += this.state.slackX;
						newState.y += this.state.slackY;
						const [newStateX, newStateY] = getBoundPosition(this, newState.x, newState.y);
						newState.x = newStateX;
						newState.y = newStateY;
						newState.slackX = this.state.slackX + (x - newState.x);
						newState.slackY = this.state.slackY + (y - newState.y);
						uiData.x = newState.x;
						uiData.y = newState.y;
						uiData.deltaX = newState.x - this.state.x;
						uiData.deltaY = newState.y - this.state.y;
					}
					if (this.props.onDrag(e, uiData) === false) return false;
					this.setState(newState);
				};
				this.onDragStop = (e, coreData) => {
					if (!this.state.dragging) return false;
					if (this.props.onStop(e, createDraggableData(this, coreData)) === false) return false;
					log("Draggable: onDragStop: %j", coreData);
					const newState = {
						dragging: false,
						slackX: 0,
						slackY: 0
					};
					if (Boolean(this.props.position)) {
						const { x, y } = this.props.position;
						newState.x = x;
						newState.y = y;
					}
					this.setState(newState);
				};
				this.state = {
					dragging: false,
					dragged: false,
					x: props.position ? props.position.x : props.defaultPosition.x,
					y: props.position ? props.position.y : props.defaultPosition.y,
					prevPropsPosition: _objectSpread2({}, props.position),
					slackX: 0,
					slackY: 0,
					isElementSVG: false
				};
				if (props.position && !(props.onDrag || props.onStop)) console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
			}
			static getDerivedStateFromProps({ position }, { prevPropsPosition }) {
				if (position && (!prevPropsPosition || position.x !== prevPropsPosition.x || position.y !== prevPropsPosition.y)) {
					log("Draggable: getDerivedStateFromProps %j", {
						position,
						prevPropsPosition
					});
					return {
						x: position.x,
						y: position.y,
						prevPropsPosition: _objectSpread2({}, position)
					};
				}
				return null;
			}
			componentDidMount() {
				if (typeof window.SVGElement !== "undefined" && this.findDOMNode() instanceof window.SVGElement) this.setState({ isElementSVG: true });
			}
			componentWillUnmount() {
				if (this.state.dragging) this.setState({ dragging: false });
			}
			findDOMNode() {
				var _a;
				if ((_a = this.props) == null ? void 0 : _a.nodeRef) return this.props.nodeRef.current;
				const legacyReactDOM = react_dom$1.default;
				if (typeof legacyReactDOM.findDOMNode === "function") return legacyReactDOM.findDOMNode(this);
				return null;
			}
			render() {
				const _this$props = this.props, { axis, bounds, children, defaultPosition, defaultClassName, defaultClassNameDragging, defaultClassNameDragged, position, positionOffset, scale } = _this$props, draggableCoreProps = _objectWithoutProperties(_this$props, _excluded);
				let style = {};
				let svgTransform = null;
				const draggable = !Boolean(position) || this.state.dragging;
				const validPosition = position || defaultPosition;
				const transformOpts = {
					x: canDragX(this) && draggable ? this.state.x : validPosition.x,
					y: canDragY(this) && draggable ? this.state.y : validPosition.y
				};
				if (this.state.isElementSVG) svgTransform = createSVGTransform(transformOpts, positionOffset);
				else style = createCSSTransform(transformOpts, positionOffset);
				const onlyChild = react$1.Children.only(children);
				const className = clsx(onlyChild.props.className || "", defaultClassName, {
					[defaultClassNameDragging]: this.state.dragging,
					[defaultClassNameDragged]: this.state.dragged
				});
				return /* @__PURE__ */ react$1.createElement(DraggableCore, _objectSpread2(_objectSpread2({}, draggableCoreProps), {}, {
					onStart: this.onDragStart,
					onDrag: this.onDrag,
					onStop: this.onDragStop
				}), react$1.cloneElement(onlyChild, {
					className,
					style: _objectSpread2(_objectSpread2({}, onlyChild.props.style), style),
					transform: svgTransform
				}));
			}
		};
		Draggable.displayName = "Draggable";
		Draggable.propTypes = _objectSpread2(_objectSpread2({}, DraggableCore.propTypes), {}, {
			/**
			* `axis` determines which axis the draggable can move.
			*
			*  Note that all callbacks will still return data as normal. This only
			*  controls flushing to the DOM.
			*
			* 'both' allows movement horizontally and vertically.
			* 'x' limits movement to horizontal axis.
			* 'y' limits movement to vertical axis.
			* 'none' limits all movement.
			*
			* Defaults to 'both'.
			*/
			axis: import_prop_types$8.default.oneOf([
				"both",
				"x",
				"y",
				"none"
			]),
			/**
			* `bounds` determines the range of movement available to the element.
			* Available values are:
			*
			* 'parent' restricts movement within the Draggable's parent node.
			*
			* Alternatively, pass an object with the following properties, all of which are optional:
			*
			* {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
			*
			* All values are in px.
			*
			* Example:
			*
			* ```jsx
			*   let App = React.createClass({
			*       render: function () {
			*         return (
			*            <Draggable bounds={{right: 300, bottom: 300}}>
			*              <div>Content</div>
			*           </Draggable>
			*         );
			*       }
			*   });
			* ```
			*/
			bounds: import_prop_types$8.default.oneOfType([
				import_prop_types$8.default.shape({
					left: import_prop_types$8.default.number,
					right: import_prop_types$8.default.number,
					top: import_prop_types$8.default.number,
					bottom: import_prop_types$8.default.number
				}),
				import_prop_types$8.default.string,
				import_prop_types$8.default.oneOf([false])
			]),
			defaultClassName: import_prop_types$8.default.string,
			defaultClassNameDragging: import_prop_types$8.default.string,
			defaultClassNameDragged: import_prop_types$8.default.string,
			/**
			* `defaultPosition` specifies the x and y that the dragged item should start at
			*
			* Example:
			*
			* ```jsx
			*      let App = React.createClass({
			*          render: function () {
			*              return (
			*                  <Draggable defaultPosition={{x: 25, y: 25}}>
			*                      <div>I start with transformX: 25px and transformY: 25px;</div>
			*                  </Draggable>
			*              );
			*          }
			*      });
			* ```
			*/
			defaultPosition: import_prop_types$8.default.shape({
				x: import_prop_types$8.default.number,
				y: import_prop_types$8.default.number
			}),
			positionOffset: import_prop_types$8.default.shape({
				x: import_prop_types$8.default.oneOfType([import_prop_types$8.default.number, import_prop_types$8.default.string]),
				y: import_prop_types$8.default.oneOfType([import_prop_types$8.default.number, import_prop_types$8.default.string])
			}),
			/**
			* `position`, if present, defines the current position of the element.
			*
			*  This is similar to how form elements in React work - if no `position` is supplied, the component
			*  is uncontrolled.
			*
			* Example:
			*
			* ```jsx
			*      let App = React.createClass({
			*          render: function () {
			*              return (
			*                  <Draggable position={{x: 25, y: 25}}>
			*                      <div>I start with transformX: 25px and transformY: 25px;</div>
			*                  </Draggable>
			*              );
			*          }
			*      });
			* ```
			*/
			position: import_prop_types$8.default.shape({
				x: import_prop_types$8.default.number,
				y: import_prop_types$8.default.number
			}),
			/**
			* These properties should be defined on the child, not here.
			*/
			className: dontSetMe,
			style: dontSetMe,
			transform: dontSetMe
		});
		Draggable.defaultProps = _objectSpread2(_objectSpread2({}, DraggableCore.defaultProps), {}, {
			axis: "both",
			bounds: false,
			defaultClassName: "react-draggable",
			defaultClassNameDragging: "react-draggable-dragging",
			defaultClassNameDragged: "react-draggable-dragged",
			defaultPosition: {
				x: 0,
				y: 0
			},
			scale: 1
		});
	}));
	//#endregion
	//#region node_modules/react-draggable/build/cjs/cjs.mjs
	var cjs_default;
	var init_cjs = __esmMin((() => {
		init_chunk_RXGSR3JC();
		cjs_default = Draggable;
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/panel/panel-draggable.js
	function PanelDraggable(props) {
		const { size: { defaultWidth } } = usePanelContext(), [bounds, setBounds] = (0, react.useState)({}), [position, setPosition] = (0, react.useState)(props.defaultPosition), positionRef = (0, react.useRef)({});
		positionRef.current = position;
		const onStopDrag = (event, dragElement) => {
			const { x, y } = dragElement;
			setPosition({
				x,
				y
			});
		};
		const resetPosition = () => {
			const { x: currentX, y: currentY } = positionRef.current;
			const { x: defaultX, y: defaultY } = props.defaultPosition;
			if (currentX === defaultX && currentY === defaultY) return;
			const newX = currentX < bounds.left || currentX > bounds.right ? defaultX : currentX;
			const newY = currentY < bounds.top || currentY > bounds.bottom ? defaultY : currentY;
			if (newX === currentX && newY === currentY) return;
			setPosition({
				x: newX,
				y: newY
			});
		};
		const calculateBounds = useDebouncedCallback(() => {
			var _a;
			var _b;
			const { innerWidth: windowWidth, innerHeight: windowHeight } = window;
			setBounds({
				top: 0,
				left: 0 - defaultWidth * .85,
				right: windowWidth - defaultWidth * .15,
				bottom: windowHeight - (((_b = (_a = props.nodeRef.current) == null ? void 0 : _a.querySelector(props.handleClass)) == null ? void 0 : _b.offsetHeight) || 0)
			});
		}, 100);
		(0, react.useEffect)(() => {
			resetPosition();
		}, [bounds]);
		(0, react.useEffect)(() => {
			calculateBounds();
			window.addEventListener("resize", calculateBounds);
			return () => {
				window.removeEventListener("resize", calculateBounds);
			};
		}, []);
		return /* @__PURE__ */ react.default.createElement(cjs_default, {
			handle: props.handleClass,
			defaultPosition: props.defaultPosition,
			nodeRef: props.nodeRef,
			bounds,
			position: positionRef.current,
			onStop: onStopDrag
		}, props.children);
	}
	var import_prop_types$7;
	var init_panel_draggable = __esmMin((() => {
		import_prop_types$7 = /* @__PURE__ */ __toESM(require_prop_types());
		init_cjs();
		init_use_debounced_callback();
		init_panel$1();
		PanelDraggable.propTypes = {
			children: import_prop_types$7.default.oneOfType([import_prop_types$7.default.node, import_prop_types$7.default.arrayOf(import_prop_types$7.default.node)]),
			handleClass: import_prop_types$7.default.string,
			defaultPosition: import_prop_types$7.default.shape({
				x: import_prop_types$7.default.number,
				y: import_prop_types$7.default.number
			}),
			nodeRef: import_prop_types$7.default.shape({ current: import_prop_types$7.default.object }),
			isFloating: import_prop_types$7.default.bool
		};
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/panel/panel-resizer.js
	function PanelResizer(props) {
		const { size: { defaultHeight } } = usePanelContext();
		const resizableRef = (0, react.useRef)(null);
		const childrenRef = (0, react.useRef)(null);
		const handleRef = (0, react.useRef)(null);
		let minHeight = 0;
		let maxHeight;
		let currentHeight;
		let currentY = 0;
		const onMouseMove = (e) => {
			resizableRef.current.classList.add("resizing");
			const delta = e.clientY - currentY;
			currentHeight = currentHeight + delta;
			if (currentHeight < minHeight) currentHeight = minHeight;
			if (currentHeight > maxHeight) currentHeight = maxHeight;
			currentY = e.clientY;
			setCurrentHeight();
		};
		const onMouseUp = () => {
			document.removeEventListener("mousemove", onMouseMove);
			resizableRef.current.classList.remove("resizing");
		};
		const onMouseDown = (e) => {
			currentY = e.clientY;
			document.addEventListener("mousemove", onMouseMove);
			document.addEventListener("mouseup", onMouseUp);
		};
		const calculateMinMax = () => {
			currentHeight = defaultHeight;
			setCurrentHeight();
			minHeight += handleProps.height;
			maxHeight = window.innerHeight;
		};
		const setCurrentHeight = () => {
			resizableRef.current.style.height = `${currentHeight}px`;
		};
		(0, react.useEffect)(() => {
			calculateMinMax();
			handleRef.current.addEventListener("mousedown", onMouseDown);
			return () => {
				if (handleRef.current) handleRef.current.removeEventListener("mousedown", onMouseDown);
			};
		}, [props.children]);
		return /* @__PURE__ */ react.default.createElement(Container, { ref: resizableRef }, /* @__PURE__ */ react.default.createElement(Children, { ref: childrenRef }, props.children), /* @__PURE__ */ react.default.createElement(Handle, { ref: handleRef }, /* @__PURE__ */ react.default.createElement("i", { className: "eicon-ellipsis-h" })));
	}
	var import_prop_types$6, Container, Children, handleProps, Handle;
	var init_panel_resizer = __esmMin((() => {
		import_prop_types$6 = /* @__PURE__ */ __toESM(require_prop_types());
		init_styled_components_browser_esm();
		init_div_base();
		init_panel$1();
		Container = qe(DivBase)`
  flex: 1 1 auto !important;
  inset: 0 !important;
  display: inline-flex !important;
  flex-direction: column !important;
  overflow: hidden !important;

  &.resizing {
    user-select: none;
  }
`;
		Children = qe(DivBase)`
  overflow-y: auto !important;
  flex-grow: 1 !important;
  flex-shrink: 1 !important;
`;
		handleProps = { height: 20 };
		Handle = qe(DivBase)`
  flex: 0 0 ${handleProps.height}px !important;
  display: inline-flex !important;
  justify-content: center !important;
  align-items: center !important;
  background-color: #fff !important;
  margin-top: 1px !important;
  cursor: row-resize !important;
`;
		PanelResizer.propTypes = { children: import_prop_types$6.default.oneOfType([import_prop_types$6.default.node, import_prop_types$6.default.arrayOf(import_prop_types$6.default.node)]) };
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/panel/panel-body.js
	function PanelBody(props) {
		return /* @__PURE__ */ react.default.createElement(StyledPanelBody, __spreadValues$3({}, props), /* @__PURE__ */ react.default.createElement(PanelResizer, null, props.children));
	}
	var import_prop_types$5, __defProp$3, __getOwnPropSymbols$3, __hasOwnProp$3, __propIsEnum$3, __defNormalProp$3, __spreadValues$3, StyledPanelBody;
	var init_panel_body = __esmMin((() => {
		import_prop_types$5 = /* @__PURE__ */ __toESM(require_prop_types());
		init_styled_components_browser_esm();
		init_div_base();
		init_panel_resizer();
		__defProp$3 = Object.defineProperty;
		__getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
		__hasOwnProp$3 = Object.prototype.hasOwnProperty;
		__propIsEnum$3 = Object.prototype.propertyIsEnumerable;
		__defNormalProp$3 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$3(obj, key, {
			enumerable: true,
			configurable: true,
			writable: true,
			value
		}) : obj[key] = value, "__defNormalProp");
		__spreadValues$3 = /* @__PURE__ */ __name((a, b) => {
			for (var prop in b || (b = {})) if (__hasOwnProp$3.call(b, prop)) __defNormalProp$3(a, prop, b[prop]);
			if (__getOwnPropSymbols$3) {
				for (var prop of __getOwnPropSymbols$3(b)) if (__propIsEnum$3.call(b, prop)) __defNormalProp$3(a, prop, b[prop]);
			}
			return a;
		}, "__spreadValues");
		StyledPanelBody = qe(DivBase)`
  position: relative !important;
  display: flex !important;
  flex-direction: column !important;
  overflow: hidden !important;
`;
		PanelBody.propTypes = { children: import_prop_types$5.default.oneOfType([import_prop_types$5.default.node, import_prop_types$5.default.arrayOf(import_prop_types$5.default.node)]) };
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/panel/panel-footer.js
	var PanelFooter;
	var init_panel_footer = __esmMin((() => {
		init_styled_components_browser_esm();
		init_div_base();
		PanelFooter = qe(DivBase)`
  background: #fff !important;
`;
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/panel/panel-header.js
	function PanelHeader(props) {
		const { floating: { active, handleClassName } } = usePanelContext();
		return /* @__PURE__ */ react.default.createElement(StyledPanelHeader, {
			className: handleClassName,
			isFloating: active
		}, props.children);
	}
	var import_prop_types$4, StyledPanelHeader;
	var init_panel_header = __esmMin((() => {
		import_prop_types$4 = /* @__PURE__ */ __toESM(require_prop_types());
		init_styled_components_browser_esm();
		init_panel$1();
		init_div_base();
		StyledPanelHeader = qe(DivBase)`
  display: grid !important;
  grid-template-columns: 1fr 2fr 1fr !important;
  grid-column-gap: 10px !important;
  align-items: center !important;
  background: #ffffff !important;
  padding: 6px 8px !important;
  flex-shrink: 0 !important;

  ${({ isFloating }) => isFloating && Ae`
  	cursor: move;
  `}
`;
		PanelHeader.propTypes = { children: import_prop_types$4.default.oneOfType([import_prop_types$4.default.node, import_prop_types$4.default.arrayOf(import_prop_types$4.default.node)]) };
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/panel/panel-header-side-col.js
	var import_prop_types$3, PanelHeaderSideCol;
	var init_panel_header_side_col = __esmMin((() => {
		import_prop_types$3 = /* @__PURE__ */ __toESM(require_prop_types());
		init_styled_components_browser_esm();
		init_div_base();
		PanelHeaderSideCol = qe(DivBase)`
  display: flex !important;
  justify-self: ${({ align }) => align} !important;
`;
		PanelHeaderSideCol.propTypes = {
			children: import_prop_types$3.default.oneOfType([import_prop_types$3.default.node, import_prop_types$3.default.arrayOf(import_prop_types$3.default.node)]),
			align: import_prop_types$3.default.oneOf(["start", "end"]).isRequired
		};
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/panel/panel-header-title.js
	var PanelHeaderTitle;
	var init_panel_header_title = __esmMin((() => {
		init_styled_components_browser_esm();
		PanelHeaderTitle = qe.h3`
	all: revert;

	font-family: Roboto, sans-serif !important;
	font-size: 13px !important;
	font-weight: 400 !important;
	text-transform: none !important;
	font-style: normal !important;
	text-decoration: none !important;
	line-height: 24px !important;
	letter-spacing: normal !important;
	word-spacing: normal !important;
  	color: #6d7882 !important;
  	text-align: center !important;
  	flex-grow: 1 !important;
  	margin: 0 !important;
  	user-select: none !important;

	&::before, &::after {
		display: none !important;
	}
`;
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/panel/panel-loading.js
	function PanelLoading(props) {
		return /* @__PURE__ */ react.default.createElement(StyledPanelLoading, __spreadValues$2({}, props), /* @__PURE__ */ react.default.createElement(Icon$2, { className: "eicon-loading eicon-animation-spin" }));
	}
	var import_prop_types$2, __defProp$2, __getOwnPropSymbols$2, __hasOwnProp$2, __propIsEnum$2, __defNormalProp$2, __spreadValues$2, StyledPanelLoading;
	var init_panel_loading = __esmMin((() => {
		import_prop_types$2 = /* @__PURE__ */ __toESM(require_prop_types());
		init_styled_components_browser_esm();
		init_div_base();
		init_icon();
		__defProp$2 = Object.defineProperty;
		__getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
		__hasOwnProp$2 = Object.prototype.hasOwnProperty;
		__propIsEnum$2 = Object.prototype.propertyIsEnumerable;
		__defNormalProp$2 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$2(obj, key, {
			enumerable: true,
			configurable: true,
			writable: true,
			value
		}) : obj[key] = value, "__defNormalProp");
		__spreadValues$2 = /* @__PURE__ */ __name((a, b) => {
			for (var prop in b || (b = {})) if (__hasOwnProp$2.call(b, prop)) __defNormalProp$2(a, prop, b[prop]);
			if (__getOwnPropSymbols$2) {
				for (var prop of __getOwnPropSymbols$2(b)) if (__propIsEnum$2.call(b, prop)) __defNormalProp$2(a, prop, b[prop]);
			}
			return a;
		}, "__spreadValues");
		StyledPanelLoading = qe(DivBase)`
  position: absolute !important;
  inset: 0 !important;
  background: #e6e9ec !important;
  transition: 0.3s all !important;
  font-size: 30px !important;
  display: grid !important;
  place-items: center !important;
  color: #a4afb6 !important;

  ${({ show }) => !show && Ae`
	opacity: 0 !important;
	pointer-events: none !important;
  `}
`;
		PanelLoading.propTypes = { show: import_prop_types$2.default.bool };
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/panel/panel.js
	function Panel$1(props) {
		const panelRef = (0, react.useRef)();
		const contextValue = (0, react.useMemo)(() => {
			return {
				floating: {
					active: !!props.isFloating,
					handleClassName: "floating-handle"
				},
				size: {
					defaultWidth: props.defaultSize.width,
					defaultHeight: props.defaultSize.height
				}
			};
		}, [props.isFloating]);
		return /* @__PURE__ */ react.default.createElement(PanelContext.Provider, { value: contextValue }, props.isFloating ? /* @__PURE__ */ react.default.createElement(PanelDraggable, {
			handleClass: `.${contextValue.floating.handleClassName}`,
			defaultPosition: props.defaultPosition,
			nodeRef: panelRef
		}, /* @__PURE__ */ react.default.createElement(StyledPanel, __spreadProps(__spreadValues$1({}, props), {
			ref: panelRef,
			defaultSize: props.defaultSize
		}))) : /* @__PURE__ */ react.default.createElement(StyledPanel, __spreadProps(__spreadValues$1({}, props), { defaultSize: props.defaultSize })));
	}
	function usePanelContext() {
		const contextValue = (0, react.useContext)(PanelContext);
		if (!contextValue) throw new Error("`usePanelContext` must be used inside Panel's components.");
		return contextValue;
	}
	var import_prop_types$1, __defProp$1, __defProps, __getOwnPropDescs, __getOwnPropSymbols$1, __hasOwnProp$1, __propIsEnum$1, __defNormalProp$1, __spreadValues$1, __spreadProps, StyledPanel, PanelContext;
	var init_panel$1 = __esmMin((() => {
		import_prop_types$1 = /* @__PURE__ */ __toESM(require_prop_types());
		init_div_base();
		init_panel_draggable();
		init_panel_body();
		init_panel_footer();
		init_panel_header();
		init_panel_header_side_col();
		init_panel_header_title();
		init_panel_loading();
		init_styled_components_browser_esm();
		init_utils$2();
		__defProp$1 = Object.defineProperty;
		__defProps = Object.defineProperties;
		__getOwnPropDescs = Object.getOwnPropertyDescriptors;
		__getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
		__hasOwnProp$1 = Object.prototype.hasOwnProperty;
		__propIsEnum$1 = Object.prototype.propertyIsEnumerable;
		__defNormalProp$1 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$1(obj, key, {
			enumerable: true,
			configurable: true,
			writable: true,
			value
		}) : obj[key] = value, "__defNormalProp");
		__spreadValues$1 = /* @__PURE__ */ __name((a, b) => {
			for (var prop in b || (b = {})) if (__hasOwnProp$1.call(b, prop)) __defNormalProp$1(a, prop, b[prop]);
			if (__getOwnPropSymbols$1) {
				for (var prop of __getOwnPropSymbols$1(b)) if (__propIsEnum$1.call(b, prop)) __defNormalProp$1(a, prop, b[prop]);
			}
			return a;
		}, "__spreadValues");
		__spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
		StyledPanel = qe(DivBase)`
  display: flex !important;
  flex-direction: column !important;
  background: #e6e9ec !important;
  overflow: hidden !important;
  border-radius: 3px !important;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1) !important;

  ${({ defaultSize }) => defaultSize && Ae`
	width: ${defaultSize.width}px !important;
	max-height: 100vh !important;
  `}

  ${({ isFloating }) => isFloating && Ae`
	position: fixed !important;
	top: 0 !important;
	inset-inline-start: 0 !important;
	z-index: ${2147483647} !important;
  `}

  // The class comes from the react-draggable component.
  &:not(.react-draggable-dragging) {
    transition: transform 0.3s ease-out !important;
  }

  *:focus {
    outline: none;
  }
`;
		PanelContext = (0, react.createContext)({});
		__name(Panel$1, "Panel");
		Panel$1.propTypes = {
			children: import_prop_types$1.default.oneOfType([import_prop_types$1.default.node, import_prop_types$1.default.arrayOf(import_prop_types$1.default.node)]),
			defaultPosition: import_prop_types$1.default.shape({
				x: import_prop_types$1.default.number,
				y: import_prop_types$1.default.number
			}),
			defaultSize: import_prop_types$1.default.shape({
				width: import_prop_types$1.default.number,
				height: import_prop_types$1.default.number
			}),
			isFloating: import_prop_types$1.default.bool
		};
		Panel$1.Header = PanelHeader;
		Panel$1.HeaderTitle = PanelHeaderTitle;
		Panel$1.HeaderSideCol = PanelHeaderSideCol;
		Panel$1.Body = PanelBody;
		Panel$1.Loading = PanelLoading;
		Panel$1.Footer = PanelFooter;
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/panel-fetch-icon.js
	function PanelFetchIcon(props) {
		const [loading, setLoading] = (0, react.useState)(props.isFetching);
		useWatch(() => {
			if (props.isFetching) setLoading(true);
		}, [props.isFetching]);
		return /* @__PURE__ */ react.default.createElement(Tooltip, null, /* @__PURE__ */ react.default.createElement(Tooltip.Trigger, { asChild: true }, /* @__PURE__ */ react.default.createElement(StyledIconButton, {
			name: "eicon-sync",
			"data-state": loading ? "loading" : "none",
			onClick: () => {
				window.top.$e.run("notes/refresh-panel");
				props.refetch();
			},
			onAnimationIteration: () => {
				if (!props.isFetching) setLoading(false);
			}
		})), /* @__PURE__ */ react.default.createElement(Tooltip.Content, null, (0, _wordpress_i18n.__)("Refresh", "elementor-pro"), /* @__PURE__ */ react.default.createElement(Tooltip.Arrow, null)));
	}
	var import_prop_types, StyledIconButton;
	var init_panel_fetch_icon = __esmMin((() => {
		import_prop_types = /* @__PURE__ */ __toESM(require_prop_types());
		init_icon_button();
		init_styled_components_browser_esm();
		init_tooltip();
		init_use_watch();
		init_animation();
		StyledIconButton = qe(IconButton)`
  animation-duration: 1.3s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  &[data-state="loading"] {
	animation-name: ${spin};
  }

  &[data-state="none"] {
	animation-name: none;
  }
`;
		PanelFetchIcon.propTypes = {
			isFetching: import_prop_types.default.bool.isRequired,
			refetch: import_prop_types.default.func.isRequired
		};
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/panel.js
	function Panel() {
		const { direction } = useNotesConfig(), { view, setView, data = [], refetch, isSuccess, isLoading, isFetching, isError, isNotesView, isNotesSummaryView } = useNotesOrNotesSummary();
		return /* @__PURE__ */ react.default.createElement(Panel$1, {
			isFloating: true,
			defaultPosition: {
				x: "rtl" === direction ? -50 : 50,
				y: 50
			},
			defaultSize: {
				width: 240,
				height: 400
			}
		}, /* @__PURE__ */ react.default.createElement(Panel$1.Header, null, /* @__PURE__ */ react.default.createElement(Panel$1.HeaderSideCol, { align: "start" }, /* @__PURE__ */ react.default.createElement(PanelPopover, {
			view,
			setView
		})), /* @__PURE__ */ react.default.createElement(Panel$1.HeaderTitle, null, (0, _wordpress_i18n.__)("Notes Panel", "elementor-pro")), /* @__PURE__ */ react.default.createElement(Panel$1.HeaderSideCol, { align: "end" }, /* @__PURE__ */ react.default.createElement(PanelFetchIcon, {
			isFetching,
			refetch
		}), /* @__PURE__ */ react.default.createElement(PanelCloseButton, null))), /* @__PURE__ */ react.default.createElement(Panel$1.Body, null, /* @__PURE__ */ react.default.createElement(Panel$1.Loading, { show: isLoading }), isError && /* @__PURE__ */ react.default.createElement(PanelError, null), isSuccess && isNotesView && /* @__PURE__ */ react.default.createElement(PanelBodyCurrentRoute, { notes: data }), isSuccess && isNotesSummaryView && /* @__PURE__ */ react.default.createElement(PanelBodySummary, { notesSummary: data })), /* @__PURE__ */ react.default.createElement(Panel$1.Footer, null));
	}
	var init_panel = __esmMin((() => {
		init_panel_body_current_route();
		init_panel_body_summary();
		init_panel_close_button();
		init_panel_error();
		init_panel_popover();
		init_panel$1();
		init_use_notes_or_notes_summary();
		init_use_notes_config();
		init_panel_fetch_icon();
	}));
	//#endregion
	//#region node_modules/react-query/devtools/index.js
	var require_devtools = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = {
			ReactQueryDevtools: function() {
				return null;
			},
			ReactQueryDevtoolsPanel: function() {
				return null;
			}
		};
	}));
	//#endregion
	//#region modules/notes/assets/js/app/components/ui/toast/toast-viewport.js
	var ToastViewport;
	var init_toast_viewport = __esmMin((() => {
		init_styled_components_browser_esm();
		init_index_module$4();
		init_utils$2();
		ToastViewport = qe(ToastViewport$1)`
  display: flex !important;
  flex-direction: column !important;
  gap: 12px !important;
  position: fixed !important;
  max-width: 960px !important;
  width: 100% !important;
  left: 50% !important;
  bottom: 10px !important;
  padding-inline: 0 10px !important;
  transform: translateX( -50% ) !important;
  z-index: ${MAX_Z_INDEX} !important;
`;
	}));
	//#endregion
	//#region modules/notes/assets/js/app/app.js
	var app_exports = /* @__PURE__ */ __exportAll({ default: () => App });
	function App() {
		const { is_debug: isDebug } = useNotesConfig(), Wrapper = isDebug ? react.default.StrictMode : react.default.Fragment;
		return /* @__PURE__ */ react.default.createElement(Wrapper, null, /* @__PURE__ */ react.default.createElement("link", {
			rel: "stylesheet",
			href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
		}), /* @__PURE__ */ react.default.createElement(Provider, { store }, /* @__PURE__ */ react.default.createElement(ElementsProvider, null, /* @__PURE__ */ react.default.createElement(ToastProvider, { duration: Infinity }, /* @__PURE__ */ react.default.createElement(ToastViewport, null), /* @__PURE__ */ react.default.createElement(QueryClientProvider, { client: query_client_default }, /* @__PURE__ */ react.default.createElement(Marks, null), /* @__PURE__ */ react.default.createElement(Panel, null), isDebug && /* @__PURE__ */ react.default.createElement(import_devtools.ReactQueryDevtools, { initialIsOpen: false }))))));
	}
	var import_devtools, store;
	var init_app = __esmMin((() => {
		init_marks();
		init_panel();
		init_query_client();
		init_use_notes_config();
		init_es();
		init_es$1();
		import_devtools = require_devtools();
		init_elements();
		init_index_module$4();
		init_toast_viewport();
		store = window.top.$e.store.getReduxStore();
	}));
	//#endregion
	//#region modules/notes/assets/js/notes-app-initiator.js
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
	(() => {
		let rootElement = null;
		function mount() {
			return __async(this, null, function* () {
				rootElement = document.createElement("div");
				document.body.appendChild(rootElement);
				const { default: App } = yield __vitePreload(() => Promise.resolve().then(() => (init_app(), app_exports)), void 0);
				ReactDOM.render(/* @__PURE__ */ react.default.createElement(App, null), rootElement);
			});
		}
		function unmount() {
			if (!rootElement) return;
			ReactDOM.unmountComponentAtNode(rootElement);
		}
		window.addEventListener("message", (event) => {
			var _a;
			var _b;
			if (!((_b = (_a = event.data) == null ? void 0 : _a.name) == null ? void 0 : _b.startsWith("elementor-pro/notes"))) return;
			const classNames = ["e-route-notes"];
			switch (event.data.name) {
				case "elementor-pro/notes/open":
					document.body.classList.add(...classNames);
					mount();
					break;
				case "elementor-pro/notes/close":
					document.body.classList.remove(...classNames);
					unmount();
					break;
			}
		});
		window.top.postMessage({
			name: "elementor-pro/notes/config",
			payload: __spreadValues({}, elementorNotesConfig)
		}, "*");
	})();
	//#endregion
})(React, ReactDOM, wp.i18n);

//# sourceMappingURL=notes-app-initiator.js.map
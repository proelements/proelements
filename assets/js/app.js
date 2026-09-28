/*! pro-elements - v4.3.0 - 22-09-2026 */
(function(react, _wordpress_i18n, _elementor_app_ui, _elementor_site_editor, react_dom, _elementor_hooks, _elementor_router, _elementor_ui, _elementor_icons) {
	var __vite_style__ = document.createElement("style");
	__vite_style__.textContent = "/*$vite$:1*/";
	document.head.appendChild(__vite_style__);
	//#region \0rolldown/runtime.js
	var __create = Object.create;
	var __defProp$16 = Object.defineProperty;
	var __name = (target, value) => __defProp$16(target, "name", {
		value,
		configurable: true
	});
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp$16 = Object.prototype.hasOwnProperty;
	var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
	var __exportAll = (all, no_symbols) => {
		let target = {};
		for (var name in all) __defProp$16(target, name, {
			get: all[name],
			enumerable: true
		});
		if (!no_symbols) __defProp$16(target, Symbol.toStringTag, { value: "Module" });
		return target;
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
			key = keys[i];
			if (!__hasOwnProp$16.call(to, key) && key !== except) __defProp$16(to, key, {
				get: ((k) => from[k]).bind(null, key),
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp$16(target, "default", {
		value: mod,
		enumerable: true
	}) : target, mod));
	//#endregion
	react = __toESM(react);
	_elementor_router = __toESM(_elementor_router);
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
	//#region scripts/vite/shims/create-react-context.js
	var import_browser = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
		/**
		* Use invariant() to assert state which your program assumes to be true.
		*
		* Provide sprintf-style format (only %s is supported) and arguments
		* to provide information about what broke and what you were
		* expecting.
		*
		* The invariant message will be stripped in production, but the invariant
		* will remain to ensure logic does not differ in production.
		*/
		var invariant = function(condition, format, a, b, c, d, e, f) {
			if (!condition) {
				var error;
				if (format === void 0) error = /* @__PURE__ */ new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
				else {
					var args = [
						a,
						b,
						c,
						d,
						e,
						f
					];
					var argIndex = 0;
					error = new Error(format.replace(/%s/g, function() {
						return args[argIndex++];
					}));
					error.name = "Invariant Violation";
				}
				error.framesToPop = 1;
				throw error;
			}
		};
		module.exports = invariant;
	})))());
	var create_react_context_default = react.createContext;
	//#endregion
	//#region node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
	/**
	* Copyright (c) 2013-present, Facebook, Inc.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*/
	function componentWillMount() {
		var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
		if (state !== null && state !== void 0) this.setState(state);
	}
	function componentWillReceiveProps(nextProps) {
		function updater(prevState) {
			var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
			return state !== null && state !== void 0 ? state : null;
		}
		this.setState(updater.bind(this));
	}
	function componentWillUpdate(nextProps, nextState) {
		try {
			var prevProps = this.props;
			var prevState = this.state;
			this.props = nextProps;
			this.state = nextState;
			this.__reactInternalSnapshotFlag = true;
			this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(prevProps, prevState);
		} finally {
			this.props = prevProps;
			this.state = prevState;
		}
	}
	componentWillMount.__suppressDeprecationWarning = true;
	componentWillReceiveProps.__suppressDeprecationWarning = true;
	componentWillUpdate.__suppressDeprecationWarning = true;
	function polyfill(Component) {
		var prototype = Component.prototype;
		if (!prototype || !prototype.isReactComponent) throw new Error("Can only polyfill class components");
		if (typeof Component.getDerivedStateFromProps !== "function" && typeof prototype.getSnapshotBeforeUpdate !== "function") return Component;
		var foundWillMountName = null;
		var foundWillReceivePropsName = null;
		var foundWillUpdateName = null;
		if (typeof prototype.componentWillMount === "function") foundWillMountName = "componentWillMount";
		else if (typeof prototype.UNSAFE_componentWillMount === "function") foundWillMountName = "UNSAFE_componentWillMount";
		if (typeof prototype.componentWillReceiveProps === "function") foundWillReceivePropsName = "componentWillReceiveProps";
		else if (typeof prototype.UNSAFE_componentWillReceiveProps === "function") foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps";
		if (typeof prototype.componentWillUpdate === "function") foundWillUpdateName = "componentWillUpdate";
		else if (typeof prototype.UNSAFE_componentWillUpdate === "function") foundWillUpdateName = "UNSAFE_componentWillUpdate";
		if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
			var componentName = Component.displayName || Component.name;
			var newApiName = typeof Component.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
			throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + componentName + " uses " + newApiName + " but also contains the following legacy lifecycles:" + (foundWillMountName !== null ? "\n  " + foundWillMountName : "") + (foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : "") + (foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks");
		}
		if (typeof Component.getDerivedStateFromProps === "function") {
			prototype.componentWillMount = componentWillMount;
			prototype.componentWillReceiveProps = componentWillReceiveProps;
		}
		if (typeof prototype.getSnapshotBeforeUpdate === "function") {
			if (typeof prototype.componentDidUpdate !== "function") throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
			prototype.componentWillUpdate = componentWillUpdate;
			var componentDidUpdate = prototype.componentDidUpdate;
			prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
				var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
				componentDidUpdate.call(this, prevProps, prevState, snapshot);
			};
		}
		return Component;
	}
	//#endregion
	//#region node_modules/@reach/router/es/lib/utils.js
	var startsWith = function startsWith(string, search) {
		return string.substr(0, search.length) === search;
	};
	var pick = function pick(routes, uri) {
		var match = void 0;
		var default_ = void 0;
		var uriPathname = uri.split("?")[0];
		var uriSegments = segmentize(uriPathname);
		var isRootUri = uriSegments[0] === "";
		var ranked = rankRoutes(routes);
		for (var i = 0, l = ranked.length; i < l; i++) {
			var missed = false;
			var route = ranked[i].route;
			if (route.default) {
				default_ = {
					route,
					params: {},
					uri
				};
				continue;
			}
			var routeSegments = segmentize(route.path);
			var params = {};
			var max = Math.max(uriSegments.length, routeSegments.length);
			var index = 0;
			for (; index < max; index++) {
				var routeSegment = routeSegments[index];
				var uriSegment = uriSegments[index];
				if (isSplat(routeSegment)) {
					var param = routeSegment.slice(1) || "*";
					params[param] = uriSegments.slice(index).map(decodeURIComponent).join("/");
					break;
				}
				if (uriSegment === void 0) {
					missed = true;
					break;
				}
				var dynamicMatch = paramRe.exec(routeSegment);
				if (dynamicMatch && !isRootUri) {
					!(reservedNames.indexOf(dynamicMatch[1]) === -1) && (0, import_browser.default)(false);
					var value = decodeURIComponent(uriSegment);
					params[dynamicMatch[1]] = value;
				} else if (routeSegment !== uriSegment) {
					missed = true;
					break;
				}
			}
			if (!missed) {
				match = {
					route,
					params,
					uri: "/" + uriSegments.slice(0, index).join("/")
				};
				break;
			}
		}
		return match || default_ || null;
	};
	var resolve = function resolve(to, base) {
		if (startsWith(to, "/")) return to;
		var _to$split = to.split("?");
		var toPathname = _to$split[0];
		var toQuery = _to$split[1];
		var basePathname = base.split("?")[0];
		var toSegments = segmentize(toPathname);
		var baseSegments = segmentize(basePathname);
		if (toSegments[0] === "") return addQuery(basePathname, toQuery);
		if (!startsWith(toSegments[0], ".")) {
			var pathname = baseSegments.concat(toSegments).join("/");
			return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
		}
		var allSegments = baseSegments.concat(toSegments);
		var segments = [];
		for (var i = 0, l = allSegments.length; i < l; i++) {
			var segment = allSegments[i];
			if (segment === "..") segments.pop();
			else if (segment !== ".") segments.push(segment);
		}
		return addQuery("/" + segments.join("/"), toQuery);
	};
	var insertParams = function insertParams(path, params) {
		var _path$split = path.split("?");
		var pathBase = _path$split[0];
		var _path$split$ = _path$split[1];
		var query = _path$split$ === void 0 ? "" : _path$split$;
		var constructedPath = "/" + segmentize(pathBase).map(function(segment) {
			var match = paramRe.exec(segment);
			return match ? params[match[1]] : segment;
		}).join("/");
		var _params$location = params.location;
		_params$location = _params$location === void 0 ? {} : _params$location;
		var _params$location$sear = _params$location.search;
		var searchSplit = (_params$location$sear === void 0 ? "" : _params$location$sear).split("?")[1] || "";
		constructedPath = addQuery(constructedPath, query, searchSplit);
		return constructedPath;
	};
	var validateRedirect = function validateRedirect(from, to) {
		var filter = function filter(segment) {
			return isDynamic(segment);
		};
		return segmentize(from).filter(filter).sort().join("/") === segmentize(to).filter(filter).sort().join("/");
	};
	var paramRe = /^:(.+)/;
	var SEGMENT_POINTS = 4;
	var STATIC_POINTS = 3;
	var DYNAMIC_POINTS = 2;
	var SPLAT_PENALTY = 1;
	var ROOT_POINTS = 1;
	var isRootSegment = function isRootSegment(segment) {
		return segment === "";
	};
	var isDynamic = function isDynamic(segment) {
		return paramRe.test(segment);
	};
	var isSplat = function isSplat(segment) {
		return segment && segment[0] === "*";
	};
	var rankRoute = function rankRoute(route, index) {
		return {
			route,
			score: route.default ? 0 : segmentize(route.path).reduce(function(score, segment) {
				score += SEGMENT_POINTS;
				if (isRootSegment(segment)) score += ROOT_POINTS;
				else if (isDynamic(segment)) score += DYNAMIC_POINTS;
				else if (isSplat(segment)) score -= SEGMENT_POINTS + SPLAT_PENALTY;
				else score += STATIC_POINTS;
				return score;
			}, 0),
			index
		};
	};
	var rankRoutes = function rankRoutes(routes) {
		return routes.map(rankRoute).sort(function(a, b) {
			return a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index;
		});
	};
	var segmentize = function segmentize(uri) {
		return uri.replace(/(^\/+|\/+$)/g, "").split("/");
	};
	var addQuery = function addQuery(pathname) {
		for (var _len = arguments.length, query = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) query[_key - 1] = arguments[_key];
		query = query.filter(function(q) {
			return q && q.length > 0;
		});
		return pathname + (query && query.length > 0 ? "?" + query.join("&") : "");
	};
	var reservedNames = ["uri", "path"];
	/**
	* Shallow compares two objects.
	* @param {Object} obj1 The first object to compare.
	* @param {Object} obj2 The second object to compare.
	*/
	var shallowCompare = function shallowCompare(obj1, obj2) {
		var obj1Keys = Object.keys(obj1);
		return obj1Keys.length === Object.keys(obj2).length && obj1Keys.every(function(key) {
			return obj2.hasOwnProperty(key) && obj1[key] === obj2[key];
		});
	};
	//#endregion
	//#region node_modules/@reach/router/es/lib/history.js
	var _extends$1 = Object.assign || function(target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];
			for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
		}
		return target;
	};
	var getLocation = function getLocation(source) {
		var _source$location = source.location;
		var search = _source$location.search;
		var hash = _source$location.hash;
		var href = _source$location.href;
		var origin = _source$location.origin;
		var protocol = _source$location.protocol;
		var host = _source$location.host;
		var hostname = _source$location.hostname;
		var port = _source$location.port;
		var pathname = source.location.pathname;
		if (!pathname && href && canUseDOM) pathname = new URL(href).pathname;
		return {
			pathname: encodeURI(decodeURI(pathname)),
			search,
			hash,
			href,
			origin,
			protocol,
			host,
			hostname,
			port,
			state: source.history.state,
			key: source.history.state && source.history.state.key || "initial"
		};
	};
	var createHistory = function createHistory(source, options) {
		var listeners = [];
		var location = getLocation(source);
		var transitioning = false;
		var resolveTransition = function resolveTransition() {};
		return {
			get location() {
				return location;
			},
			get transitioning() {
				return transitioning;
			},
			_onTransitionComplete: function _onTransitionComplete() {
				transitioning = false;
				resolveTransition();
			},
			listen: function listen(listener) {
				listeners.push(listener);
				var popstateListener = function popstateListener() {
					location = getLocation(source);
					listener({
						location,
						action: "POP"
					});
				};
				source.addEventListener("popstate", popstateListener);
				return function() {
					source.removeEventListener("popstate", popstateListener);
					listeners = listeners.filter(function(fn) {
						return fn !== listener;
					});
				};
			},
			navigate: function navigate(to) {
				var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
				var state = _ref.state;
				var _ref$replace = _ref.replace;
				var replace = _ref$replace === void 0 ? false : _ref$replace;
				if (typeof to === "number") source.history.go(to);
				else {
					state = _extends$1({}, state, { key: Date.now() + "" });
					try {
						if (transitioning || replace) source.history.replaceState(state, null, to);
						else source.history.pushState(state, null, to);
					} catch (e) {
						source.location[replace ? "replace" : "assign"](to);
					}
				}
				location = getLocation(source);
				transitioning = true;
				var transition = new Promise(function(res) {
					return resolveTransition = res;
				});
				listeners.forEach(function(listener) {
					return listener({
						location,
						action: "PUSH"
					});
				});
				return transition;
			}
		};
	};
	var createMemorySource = function createMemorySource() {
		var initialPath = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "/";
		var searchIndex = initialPath.indexOf("?");
		var initialLocation = {
			pathname: searchIndex > -1 ? initialPath.substr(0, searchIndex) : initialPath,
			search: searchIndex > -1 ? initialPath.substr(searchIndex) : ""
		};
		var index = 0;
		var stack = [initialLocation];
		var states = [null];
		return {
			get location() {
				return stack[index];
			},
			addEventListener: function addEventListener(name, fn) {},
			removeEventListener: function removeEventListener(name, fn) {},
			history: {
				get entries() {
					return stack;
				},
				get index() {
					return index;
				},
				get state() {
					return states[index];
				},
				pushState: function pushState(state, _, uri) {
					var _uri$split = uri.split("?");
					var pathname = _uri$split[0];
					var _uri$split$ = _uri$split[1];
					var search = _uri$split$ === void 0 ? "" : _uri$split$;
					index++;
					stack.push({
						pathname,
						search: search.length ? "?" + search : search
					});
					states.push(state);
				},
				replaceState: function replaceState(state, _, uri) {
					var _uri$split2 = uri.split("?");
					var pathname = _uri$split2[0];
					var _uri$split2$ = _uri$split2[1];
					stack[index] = {
						pathname,
						search: _uri$split2$ === void 0 ? "" : _uri$split2$
					};
					states[index] = state;
				},
				go: function go(to) {
					var newIndex = index + to;
					if (newIndex < 0 || newIndex > states.length - 1) return;
					index = newIndex;
				}
			}
		};
	};
	var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
	var globalHistory = createHistory(function getSource() {
		return canUseDOM ? window : createMemorySource();
	}());
	globalHistory.navigate;
	//#endregion
	//#region node_modules/@reach/router/es/index.js
	var _extends = Object.assign || function(target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];
			for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
		}
		return target;
	};
	function _objectWithoutProperties(obj, keys) {
		var target = {};
		for (var i in obj) {
			if (keys.indexOf(i) >= 0) continue;
			if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
			target[i] = obj[i];
		}
		return target;
	}
	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
	}
	function _possibleConstructorReturn(self, call) {
		if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}
	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: {
			value: subClass,
			enumerable: false,
			writable: true,
			configurable: true
		} });
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	var createNamedContext = function createNamedContext(name, defaultValue) {
		var Ctx = create_react_context_default(defaultValue);
		Ctx.displayName = name;
		return Ctx;
	};
	var LocationContext = createNamedContext("Location");
	var Location = function Location(_ref) {
		var children = _ref.children;
		return react.default.createElement(LocationContext.Consumer, null, function(context) {
			return context ? children(context) : react.default.createElement(LocationProvider, null, children);
		});
	};
	var LocationProvider = function(_React$Component) {
		_inherits(LocationProvider, _React$Component);
		function LocationProvider() {
			var _temp;
			var _this;
			var _ret;
			_classCallCheck(this, LocationProvider);
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
			return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
				context: _this.getContext(),
				refs: { unlisten: null }
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}
		LocationProvider.prototype.getContext = function getContext() {
			var _props$history = this.props.history;
			return {
				navigate: _props$history.navigate,
				location: _props$history.location
			};
		};
		LocationProvider.prototype.componentDidCatch = function componentDidCatch(error, info) {
			if (isRedirect(error)) {
				var _navigate = this.props.history.navigate;
				_navigate(error.uri, { replace: true });
			} else throw error;
		};
		LocationProvider.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
			if (prevState.context.location !== this.state.context.location) this.props.history._onTransitionComplete();
		};
		LocationProvider.prototype.componentDidMount = function componentDidMount() {
			var _this2 = this;
			var refs = this.state.refs;
			var history = this.props.history;
			history._onTransitionComplete();
			refs.unlisten = history.listen(function() {
				Promise.resolve().then(function() {
					requestAnimationFrame(function() {
						if (!_this2.unmounted) _this2.setState(function() {
							return { context: _this2.getContext() };
						});
					});
				});
			});
		};
		LocationProvider.prototype.componentWillUnmount = function componentWillUnmount() {
			var refs = this.state.refs;
			this.unmounted = true;
			refs.unlisten();
		};
		LocationProvider.prototype.render = function render() {
			var context = this.state.context;
			var children = this.props.children;
			return react.default.createElement(LocationContext.Provider, { value: context }, typeof children === "function" ? children(context) : children || null);
		};
		return LocationProvider;
	}(react.default.Component);
	LocationProvider.defaultProps = { history: globalHistory };
	var BaseContext$1 = createNamedContext("Base", {
		baseuri: "/",
		basepath: "/"
	});
	var Router = function Router(props) {
		return react.default.createElement(BaseContext$1.Consumer, null, function(baseContext) {
			return react.default.createElement(Location, null, function(locationContext) {
				return react.default.createElement(RouterImpl, _extends({}, baseContext, locationContext, props));
			});
		});
	};
	var RouterImpl = function(_React$PureComponent) {
		_inherits(RouterImpl, _React$PureComponent);
		function RouterImpl() {
			_classCallCheck(this, RouterImpl);
			return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
		}
		RouterImpl.prototype.render = function render() {
			var _props = this.props;
			var location = _props.location;
			var _navigate2 = _props.navigate;
			var basepath = _props.basepath;
			var primary = _props.primary;
			var children = _props.children;
			_props.baseuri;
			var _props$component = _props.component;
			var component = _props$component === void 0 ? "div" : _props$component;
			var domProps = _objectWithoutProperties(_props, [
				"location",
				"navigate",
				"basepath",
				"primary",
				"children",
				"baseuri",
				"component"
			]);
			var routes = react.default.Children.toArray(children).reduce(function(array, child) {
				var routes = createRoute(basepath)(child);
				return array.concat(routes);
			}, []);
			var pathname = location.pathname;
			var match = pick(routes, pathname);
			if (match) {
				var params = match.params;
				var uri = match.uri;
				var route = match.route;
				var element = match.route.value;
				basepath = route.default ? basepath : route.path.replace(/\*$/, "");
				var props = _extends({}, params, {
					uri,
					location,
					navigate: function navigate(to, options) {
						return _navigate2(resolve(to, uri), options);
					}
				});
				var clone = react.default.cloneElement(element, props, element.props.children ? react.default.createElement(Router, {
					location,
					primary
				}, element.props.children) : void 0);
				var FocusWrapper = primary ? FocusHandler : component;
				var wrapperProps = primary ? _extends({
					uri,
					location,
					component
				}, domProps) : domProps;
				return react.default.createElement(BaseContext$1.Provider, { value: {
					baseuri: uri,
					basepath
				} }, react.default.createElement(FocusWrapper, wrapperProps, clone));
			} else return null;
		};
		return RouterImpl;
	}(react.default.PureComponent);
	RouterImpl.defaultProps = { primary: true };
	var FocusContext = createNamedContext("Focus");
	var FocusHandler = function FocusHandler(_ref3) {
		var uri = _ref3.uri;
		var location = _ref3.location;
		var component = _ref3.component;
		var domProps = _objectWithoutProperties(_ref3, [
			"uri",
			"location",
			"component"
		]);
		return react.default.createElement(FocusContext.Consumer, null, function(requestFocus) {
			return react.default.createElement(FocusHandlerImpl, _extends({}, domProps, {
				component,
				requestFocus,
				uri,
				location
			}));
		});
	};
	var initialRender = true;
	var focusHandlerCount = 0;
	var FocusHandlerImpl = function(_React$Component2) {
		_inherits(FocusHandlerImpl, _React$Component2);
		function FocusHandlerImpl() {
			var _temp2;
			var _this4;
			var _ret2;
			_classCallCheck(this, FocusHandlerImpl);
			for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
			return _ret2 = (_temp2 = (_this4 = _possibleConstructorReturn(this, _React$Component2.call.apply(_React$Component2, [this].concat(args))), _this4), _this4.state = {}, _this4.requestFocus = function(node) {
				if (!_this4.state.shouldFocus && node) node.focus();
			}, _temp2), _possibleConstructorReturn(_this4, _ret2);
		}
		FocusHandlerImpl.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
			if (prevState.uri == null) return _extends({ shouldFocus: true }, nextProps);
			else {
				var myURIChanged = nextProps.uri !== prevState.uri;
				var navigatedUpToMe = prevState.location.pathname !== nextProps.location.pathname && nextProps.location.pathname === nextProps.uri;
				return _extends({ shouldFocus: myURIChanged || navigatedUpToMe }, nextProps);
			}
		};
		FocusHandlerImpl.prototype.componentDidMount = function componentDidMount() {
			focusHandlerCount++;
			this.focus();
		};
		FocusHandlerImpl.prototype.componentWillUnmount = function componentWillUnmount() {
			focusHandlerCount--;
			if (focusHandlerCount === 0) initialRender = true;
		};
		FocusHandlerImpl.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
			if (prevProps.location !== this.props.location && this.state.shouldFocus) this.focus();
		};
		FocusHandlerImpl.prototype.focus = function focus() {
			var requestFocus = this.props.requestFocus;
			if (requestFocus) requestFocus(this.node);
			else if (initialRender) initialRender = false;
			else if (this.node) {
				if (!this.node.contains(document.activeElement)) this.node.focus();
			}
		};
		FocusHandlerImpl.prototype.render = function render() {
			var _this5 = this;
			var _props2 = this.props;
			_props2.children;
			var style = _props2.style;
			_props2.requestFocus;
			var _props2$component = _props2.component;
			var Comp = _props2$component === void 0 ? "div" : _props2$component;
			_props2.uri;
			_props2.location;
			var domProps = _objectWithoutProperties(_props2, [
				"children",
				"style",
				"requestFocus",
				"component",
				"uri",
				"location"
			]);
			return react.default.createElement(Comp, _extends({
				style: _extends({ outline: "none" }, style),
				tabIndex: "-1",
				ref: function ref(n) {
					return _this5.node = n;
				}
			}, domProps), react.default.createElement(FocusContext.Provider, { value: this.requestFocus }, this.props.children));
		};
		return FocusHandlerImpl;
	}(react.default.Component);
	polyfill(FocusHandlerImpl);
	var k = function k() {};
	var forwardRef = react.default.forwardRef;
	if (typeof forwardRef === "undefined") forwardRef = function forwardRef(C) {
		return C;
	};
	var Link$2 = forwardRef(function(_ref4, ref) {
		var innerRef = _ref4.innerRef;
		var props = _objectWithoutProperties(_ref4, ["innerRef"]);
		return react.default.createElement(BaseContext$1.Consumer, null, function(_ref5) {
			_ref5.basepath;
			var baseuri = _ref5.baseuri;
			return react.default.createElement(Location, null, function(_ref6) {
				var location = _ref6.location;
				var navigate = _ref6.navigate;
				var to = props.to;
				var state = props.state;
				var replace = props.replace;
				var _props$getProps = props.getProps;
				var getProps = _props$getProps === void 0 ? k : _props$getProps;
				var anchorProps = _objectWithoutProperties(props, [
					"to",
					"state",
					"replace",
					"getProps"
				]);
				var href = resolve(to, baseuri);
				var encodedHref = encodeURI(href);
				var isCurrent = location.pathname === encodedHref;
				var isPartiallyCurrent = startsWith(location.pathname, encodedHref);
				return react.default.createElement("a", _extends({
					ref: ref || innerRef,
					"aria-current": isCurrent ? "page" : void 0
				}, anchorProps, getProps({
					isCurrent,
					isPartiallyCurrent,
					href,
					location
				}), {
					href,
					onClick: function onClick(event) {
						if (anchorProps.onClick) anchorProps.onClick(event);
						if (shouldNavigate(event)) {
							event.preventDefault();
							var shouldReplace = replace;
							if (typeof replace !== "boolean" && isCurrent) {
								var _location$state = _extends({}, location.state);
								_location$state.key;
								var restState = _objectWithoutProperties(_location$state, ["key"]);
								shouldReplace = shallowCompare(_extends({}, state), restState);
							}
							navigate(href, {
								state,
								replace: shouldReplace
							});
						}
					}
				}));
			});
		});
	});
	Link$2.displayName = "Link";
	function RedirectRequest(uri) {
		this.uri = uri;
	}
	var isRedirect = function isRedirect(o) {
		return o instanceof RedirectRequest;
	};
	var redirectTo = function redirectTo(to) {
		throw new RedirectRequest(to);
	};
	var RedirectImpl = function(_React$Component3) {
		_inherits(RedirectImpl, _React$Component3);
		function RedirectImpl() {
			_classCallCheck(this, RedirectImpl);
			return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
		}
		RedirectImpl.prototype.componentDidMount = function componentDidMount() {
			var _props3 = this.props;
			var navigate = _props3.navigate;
			var to = _props3.to;
			_props3.from;
			var _props3$replace = _props3.replace;
			var replace = _props3$replace === void 0 ? true : _props3$replace;
			var state = _props3.state;
			_props3.noThrow;
			var baseuri = _props3.baseuri;
			var props = _objectWithoutProperties(_props3, [
				"navigate",
				"to",
				"from",
				"replace",
				"state",
				"noThrow",
				"baseuri"
			]);
			Promise.resolve().then(function() {
				navigate(insertParams(resolve(to, baseuri), props), {
					replace,
					state
				});
			});
		};
		RedirectImpl.prototype.render = function render() {
			var _props4 = this.props;
			_props4.navigate;
			var to = _props4.to;
			_props4.from;
			_props4.replace;
			_props4.state;
			var noThrow = _props4.noThrow;
			var baseuri = _props4.baseuri;
			var props = _objectWithoutProperties(_props4, [
				"navigate",
				"to",
				"from",
				"replace",
				"state",
				"noThrow",
				"baseuri"
			]);
			var resolvedTo = resolve(to, baseuri);
			if (!noThrow) redirectTo(insertParams(resolvedTo, props));
			return null;
		};
		return RedirectImpl;
	}(react.default.Component);
	var Redirect = function Redirect(props) {
		return react.default.createElement(BaseContext$1.Consumer, null, function(_ref7) {
			var baseuri = _ref7.baseuri;
			return react.default.createElement(Location, null, function(locationContext) {
				return react.default.createElement(RedirectImpl, _extends({}, locationContext, { baseuri }, props));
			});
		});
	};
	var stripSlashes = function stripSlashes(str) {
		return str.replace(/(^\/+|\/+$)/g, "");
	};
	var createRoute = function createRoute(basepath) {
		return function(element) {
			if (!element) return null;
			if (element.type === react.default.Fragment && element.props.children) return react.default.Children.map(element.props.children, createRoute(basepath));
			!(element.props.path || element.props.default || element.type === Redirect) && (0, import_browser.default)(false);
			element.type === Redirect && (!element.props.from || !element.props.to) && (0, import_browser.default)(false);
			element.type === Redirect && !validateRedirect(element.props.from, element.props.to) && (0, import_browser.default)(false);
			if (element.props.default) return {
				value: element,
				default: true
			};
			var elementPath = element.type === Redirect ? element.props.from : element.props.path;
			var path = elementPath === "/" ? basepath : stripSlashes(basepath) + "/" + stripSlashes(elementPath);
			return {
				value: element,
				default: element.props.default,
				path: element.props.children ? stripSlashes(path) + "/*" : path
			};
		};
	};
	var shouldNavigate = function shouldNavigate(event) {
		return !event.defaultPrevented && event.button === 0 && !(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
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
	//#region core/app/modules/site-editor/assets/js/context/base-context.js
	var BaseContext = class extends react.default.Component {
		constructor(props) {
			super(props);
			this.state = {
				action: {
					current: null,
					loading: false,
					error: null,
					errorMeta: {}
				},
				updateActionState: this.updateActionState.bind(this),
				resetActionState: this.resetActionState.bind(this)
			};
		}
		executeAction(name, handler) {
			this.updateActionState({
				current: name,
				loading: true,
				error: null,
				errorMeta: {}
			});
			return handler().then((response) => {
				this.resetActionState();
				return Promise.resolve(response);
			}).catch((error) => {
				this.updateActionState({
					current: name,
					loading: false,
					error: error.message,
					errorMeta: error
				});
				return Promise.reject(error);
			});
		}
		updateActionState(data) {
			return this.setState((prev) => ({ action: _objectSpread2(_objectSpread2({}, prev.action), data) }));
		}
		resetActionState() {
			this.updateActionState({
				current: null,
				loading: false,
				error: null,
				errorMeta: {}
			});
		}
	};
	//#endregion
	//#region core/app/modules/site-editor/assets/js/data/commands/templates.js
	var Templates$1 = class extends $e.modules.CommandData {
		static {
			__name(this, "Templates");
		}
		static getEndpointFormat() {
			return "site-editor/templates/{id}";
		}
	};
	_defineProperty(Templates$1, "signature", "site-editor/templates");
	//#endregion
	//#region core/app/modules/site-editor/assets/js/data/commands/conditions-config.js
	var ConditionsConfig$1 = class extends $e.modules.CommandData {
		static {
			__name(this, "ConditionsConfig");
		}
		static getEndpointFormat() {
			return "site-editor/conditions-config/{id}";
		}
	};
	_defineProperty(ConditionsConfig$1, "signature", "site-editor/conditions-config");
	//#endregion
	//#region core/app/modules/site-editor/assets/js/data/commands/templates-conditions.js
	var TemplatesConditions = class extends $e.modules.CommandData {
		static getEndpointFormat() {
			return "site-editor/templates-conditions/{id}";
		}
	};
	_defineProperty(TemplatesConditions, "signature", "site-editor/templates-conditions");
	//#endregion
	//#region core/app/modules/site-editor/assets/js/data/commands/templates-conditions-conflicts.js
	var TemplatesConditionsConflicts = class TemplatesConditionsConflicts extends $e.modules.CommandData {
		static getEndpointFormat() {
			return `${TemplatesConditionsConflicts.signature}/{id}`;
		}
	};
	_defineProperty(TemplatesConditionsConflicts, "signature", "site-editor/templates-conditions-conflicts");
	//#endregion
	//#region core/app/modules/site-editor/assets/js/data/commands/index.js
	var commands_exports = /* @__PURE__ */ __exportAll({
		ConditionsConfig: () => ConditionsConfig$1,
		Templates: () => Templates$1,
		TemplatesConditions: () => TemplatesConditions,
		TemplatesConditionsConflicts: () => TemplatesConditionsConflicts
	});
	//#endregion
	//#region core/app/modules/site-editor/assets/js/data/component.js
	var Component = class extends $e.modules.ComponentBase {
		getNamespace() {
			return this.constructor.namespace;
		}
		defaultData() {
			return this.importCommands(commands_exports);
		}
	};
	_defineProperty(Component, "namespace", "site-editor");
	//#endregion
	//#region core/app/modules/site-editor/assets/js/context/templates.js
	var import_prop_types = /* @__PURE__ */ __toESM(require_prop_types());
	var __defProp$15 = Object.defineProperty;
	var __defProps$9 = Object.defineProperties;
	var __getOwnPropDescs$9 = Object.getOwnPropertyDescriptors;
	var __getOwnPropSymbols$15 = Object.getOwnPropertySymbols;
	var __hasOwnProp$15 = Object.prototype.hasOwnProperty;
	var __propIsEnum$15 = Object.prototype.propertyIsEnumerable;
	var __defNormalProp$15 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$15(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value, "__defNormalProp");
	var __spreadValues$15 = /* @__PURE__ */ __name((a, b) => {
		for (var prop in b || (b = {})) if (__hasOwnProp$15.call(b, prop)) __defNormalProp$15(a, prop, b[prop]);
		if (__getOwnPropSymbols$15) {
			for (var prop of __getOwnPropSymbols$15(b)) if (__propIsEnum$15.call(b, prop)) __defNormalProp$15(a, prop, b[prop]);
		}
		return a;
	}, "__spreadValues");
	var __spreadProps$9 = /* @__PURE__ */ __name((a, b) => __defProps$9(a, __getOwnPropDescs$9(b)), "__spreadProps");
	var __publicField$2 = /* @__PURE__ */ __name((obj, key, value) => __defNormalProp$15(obj, typeof key !== "symbol" ? key + "" : key, value), "__publicField");
	var Context$1 = react.default.createContext();
	var _TemplatesProvider = class _TemplatesProvider extends BaseContext {
		constructor(props) {
			super(props);
			this.state = __spreadProps$9(__spreadValues$15({}, this.state), {
				action: __spreadProps$9(__spreadValues$15({}, this.state.action), {
					current: _TemplatesProvider.actions.FETCH,
					loading: true
				}),
				templates: {},
				updateTemplateItemState: this.updateTemplateItemState.bind(this),
				findTemplateItemInState: this.findTemplateItemInState.bind(this),
				fetchTemplates: this.fetchTemplates.bind(this),
				deleteTemplate: this.deleteTemplate.bind(this),
				updateTemplate: this.updateTemplate.bind(this),
				importTemplates: this.importTemplates.bind(this)
			});
		}
		componentDidMount() {
			this.fetchTemplates();
		}
		importTemplates({ fileName, fileData }) {
			return this.executeAction(_TemplatesProvider.actions.IMPORT, () => $e.data.create(Templates$1.signature, {
				fileName,
				fileData
			})).then((response) => {
				this.updateTemplatesState((prev) => __spreadValues$15(__spreadValues$15({}, prev), Object.values(response.data).reduce((current, template) => {
					if (!template.supportsSiteEditor) return current;
					return __spreadProps$9(__spreadValues$15({}, current), { [template.id]: template });
				}, {})));
				return response;
			});
		}
		deleteTemplate(id) {
			return this.executeAction(_TemplatesProvider.actions.DELETE, () => $e.data.delete(Templates$1.signature, { id })).then(() => {
				this.updateTemplatesState((prev) => {
					const newTemplates = __spreadValues$15({}, prev);
					delete newTemplates[id];
					return newTemplates;
				});
			});
		}
		updateTemplate(id, args) {
			return this.executeAction(_TemplatesProvider.actions.UPDATE, () => $e.data.update(Templates$1.signature, args, { id })).then((response) => {
				this.updateTemplateItemState(id, response.data);
			});
		}
		fetchTemplates() {
			return this.executeAction(_TemplatesProvider.actions.FETCH, () => $e.data.get(Templates$1.signature, {}, { refresh: true })).then((response) => {
				this.updateTemplatesState(() => Object.values(response.data).reduce((current, template) => __spreadProps$9(__spreadValues$15({}, current), { [template.id]: template }), {}), false);
			});
		}
		updateTemplateItemState(id, args) {
			return this.updateTemplatesState((prev) => {
				const template = __spreadValues$15(__spreadValues$15({}, prev[id]), args);
				return __spreadProps$9(__spreadValues$15({}, prev), { [id]: template });
			});
		}
		updateTemplatesState(callback, clearCache = true) {
			if (clearCache) $e.data.deleteCache($e.components.get(Component.namespace), Templates$1.signature);
			return this.setState((prev) => {
				return { templates: callback(prev.templates) };
			});
		}
		findTemplateItemInState(id) {
			return this.state.templates[id];
		}
		render() {
			if (this.state.action.current === _TemplatesProvider.actions.FETCH) {
				if (this.state.action.error) return /* @__PURE__ */ react.default.createElement("h3", null, (0, _wordpress_i18n.__)("Error:", "elementor-pro"), " ", this.state.action.error);
				if (this.state.action.loading) return /* @__PURE__ */ react.default.createElement("h3", null, (0, _wordpress_i18n.__)("Loading", "elementor-pro"), "...");
			}
			return /* @__PURE__ */ react.default.createElement(Context$1.Provider, { value: this.state }, this.props.children);
		}
	};
	__publicField$2(_TemplatesProvider, "propTypes", { children: import_prop_types.default.object.isRequired });
	__publicField$2(_TemplatesProvider, "actions", {
		FETCH: "fetch",
		DELETE: "delete",
		UPDATE: "update",
		IMPORT: "import"
	});
	var TemplatesProvider = _TemplatesProvider;
	//#endregion
	//#region core/app/modules/site-editor/assets/js/part-actions/dialog-rename.js
	function DialogRename(props) {
		const { findTemplateItemInState, updateTemplate } = react.default.useContext(Context$1), template = findTemplateItemInState(props.id);
		const [title, setTitle] = react.default.useState("");
		(0, react.useEffect)(() => {
			if (template) setTitle(template.title);
		}, [template]);
		const closeDialog = (shouldUpdate) => {
			props.setId(null);
			if (shouldUpdate) updateTemplate(props.id, { post_title: title });
		};
		if (!props.id) return "";
		return /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Dialog, {
			title: (0, _wordpress_i18n.__)("Rename Site Part", "elementor-pro"),
			approveButtonText: (0, _wordpress_i18n.__)("Change", "elementor-pro"),
			onSubmit: () => closeDialog(true),
			approveButtonOnClick: () => closeDialog(true),
			approveButtonColor: "primary",
			dismissButtonText: (0, _wordpress_i18n.__)("Cancel", "elementor-pro"),
			dismissButtonOnClick: () => closeDialog(),
			onClose: () => closeDialog()
		}, /* @__PURE__ */ react.default.createElement("input", {
			type: "text",
			className: "eps-input eps-input-text eps-input--block",
			autoFocus: true,
			value: title,
			onChange: (e) => setTitle(e.target.value)
		}));
	}
	DialogRename.propTypes = {
		id: import_prop_types.default.number,
		setId: import_prop_types.default.func.isRequired
	};
	//#endregion
	//#region core/app/modules/site-editor/assets/js/part-actions/dialog-delete.js
	function DialogDelete(props) {
		const { deleteTemplate, findTemplateItemInState } = react.default.useContext(Context$1);
		const closeDialog = (shouldUpdate) => {
			props.setId(null);
			if (shouldUpdate) deleteTemplate(props.id);
		};
		if (!props.id) return "";
		const template = findTemplateItemInState(props.id);
		return /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Dialog, {
			title: (0, _wordpress_i18n.__)("Move Item To Trash", "elementor-pro"),
			text: (0, _wordpress_i18n.__)("Are you sure you want to move this item to trash:", "elementor-pro") + ` "${template.title}"`,
			onSubmit: () => closeDialog(true),
			approveButtonText: (0, _wordpress_i18n.__)("Move to Trash", "elementor-pro"),
			approveButtonOnClick: () => closeDialog(true),
			approveButtonColor: "danger",
			dismissButtonText: (0, _wordpress_i18n.__)("Cancel", "elementor-pro"),
			dismissButtonOnClick: () => closeDialog(),
			onClose: () => closeDialog()
		});
	}
	DialogDelete.propTypes = {
		id: import_prop_types.default.number,
		setId: import_prop_types.default.func.isRequired
	};
	//#endregion
	//#region core/app/modules/site-editor/assets/js/part-actions/dialogs-and-buttons.js
	var handlers = {
		rename: null,
		delete: null
	};
	function PartActionsDialogs() {
		const [DialogRenameId, setDialogRenameId] = react.default.useState(null);
		const [DialogDeleteId, setDialogDeleteId] = react.default.useState(null);
		handlers.rename = setDialogRenameId;
		handlers.delete = setDialogDeleteId;
		return /* @__PURE__ */ react.default.createElement(react.default.Fragment, null, /* @__PURE__ */ react.default.createElement(DialogRename, {
			id: DialogRenameId,
			setId: setDialogRenameId
		}), /* @__PURE__ */ react.default.createElement(DialogDelete, {
			id: DialogDeleteId,
			setId: setDialogDeleteId
		}));
	}
	function PartActionsButtons(props) {
		const [showMenu, setShowMenu] = react.default.useState(false);
		let SiteTemplatePopover = "";
		if (showMenu) SiteTemplatePopover = /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Popover, { closeFunction: () => setShowMenu(!showMenu) }, /* @__PURE__ */ react.default.createElement("li", null, /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Button, {
			className: "eps-popover__item",
			icon: "eicon-sign-out",
			text: (0, _wordpress_i18n.__)("Export", "elementor-pro"),
			url: props.exportLink
		})), /* @__PURE__ */ react.default.createElement("li", null, /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Button, {
			className: "eps-popover__item eps-popover__item--danger",
			icon: "eicon-trash-o",
			text: (0, _wordpress_i18n.__)("Trash", "elementor-pro"),
			onClick: () => handlers.delete(props.id)
		})), /* @__PURE__ */ react.default.createElement("li", null, /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Button, {
			className: "eps-popover__item",
			icon: "eicon-edit",
			text: (0, _wordpress_i18n.__)("Rename", "elementor-pro"),
			onClick: () => handlers.rename(props.id)
		})));
		return /* @__PURE__ */ react.default.createElement("div", { className: "eps-popover__container" }, /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Button, {
			text: (0, _wordpress_i18n.__)("Toggle", "elementor-pro"),
			hideText: true,
			icon: "eicon-ellipsis-h",
			size: "lg",
			onClick: () => setShowMenu(!showMenu)
		}), SiteTemplatePopover);
	}
	PartActionsButtons.propTypes = {
		id: import_prop_types.default.number.isRequired,
		exportLink: import_prop_types.default.string.isRequired
	};
	//#endregion
	//#region core/app/modules/site-editor/assets/js/atoms/indicator-bullet.js
	var Indicator = (props) => {
		let className = "eps-indicator-bullet";
		if (props.active) className += ` ${className}--active`;
		return /* @__PURE__ */ react.default.createElement("i", { className });
	};
	Indicator.propTypes = { active: import_prop_types.default.bool };
	//#endregion
	//#region core/app/modules/site-editor/assets/js/molecules/site-template-header.js
	var __defProp$14 = Object.defineProperty;
	var __getOwnPropSymbols$14 = Object.getOwnPropertySymbols;
	var __hasOwnProp$14 = Object.prototype.hasOwnProperty;
	var __propIsEnum$14 = Object.prototype.propertyIsEnumerable;
	var __defNormalProp$14 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$14(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value, "__defNormalProp");
	var __spreadValues$14 = /* @__PURE__ */ __name((a, b) => {
		for (var prop in b || (b = {})) if (__hasOwnProp$14.call(b, prop)) __defNormalProp$14(a, prop, b[prop]);
		if (__getOwnPropSymbols$14) {
			for (var prop of __getOwnPropSymbols$14(b)) if (__propIsEnum$14.call(b, prop)) __defNormalProp$14(a, prop, b[prop]);
		}
		return a;
	}, "__spreadValues");
	var SiteTemplateHeader = (props) => {
		const status = props.status && "publish" !== props.status ? ` (${props.status})` : "";
		const title = props.title + status;
		const ActionButtons = () => /* @__PURE__ */ react.default.createElement(react.default.Fragment, null, /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Button, {
			text: (0, _wordpress_i18n.__)("Edit", "elementor-pro"),
			icon: "eicon-edit",
			className: "e-site-template__edit-btn",
			size: "sm",
			url: props.editURL
		}), /* @__PURE__ */ react.default.createElement(PartActionsButtons, __spreadValues$14({}, props)));
		const MetaDataIcon = (innerProps) => /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Text, {
			tag: "span",
			className: "e-site-template__meta-data"
		}, /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Icon, { className: innerProps.icon }), innerProps.content);
		const MetaData = () => /* @__PURE__ */ react.default.createElement(react.default.Fragment, null, /* @__PURE__ */ react.default.createElement(MetaDataIcon, {
			icon: "eicon-user-circle-o",
			content: props.author
		}), /* @__PURE__ */ react.default.createElement(MetaDataIcon, {
			icon: "eicon-clock-o",
			content: props.modifiedDate
		}));
		const IndicatorDot = props.showInstances ? /* @__PURE__ */ react.default.createElement(Indicator, { active: props.isActive }) : "";
		return /* @__PURE__ */ react.default.createElement(_elementor_app_ui.CardHeader, null, IndicatorDot, /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Heading, {
			tag: "h1",
			title,
			variant: "text-sm",
			className: "eps-card__headline"
		}, title), props.extended && /* @__PURE__ */ react.default.createElement(MetaData, null), props.extended && /* @__PURE__ */ react.default.createElement(ActionButtons, null));
	};
	SiteTemplateHeader.propTypes = {
		isActive: import_prop_types.default.bool,
		author: import_prop_types.default.string,
		editURL: import_prop_types.default.string,
		extended: import_prop_types.default.bool,
		modifiedDate: import_prop_types.default.string,
		status: import_prop_types.default.string,
		title: import_prop_types.default.string,
		showInstances: import_prop_types.default.bool
	};
	//#endregion
	//#region core/app/modules/site-editor/assets/js/molecules/site-template-thumbnail.js
	function SiteTemplateThumbnail(props) {
		return /* @__PURE__ */ react.default.createElement(_elementor_app_ui.CardImage, {
			alt: props.title,
			src: props.thumbnail || props.placeholder,
			className: !props.thumbnail ? "e-site-template__placeholder" : ""
		}, /* @__PURE__ */ react.default.createElement(_elementor_app_ui.CardOverlay, { className: "e-site-template__overlay-preview" }, /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Button, {
			className: "e-site-template__overlay-preview-button",
			text: (0, _wordpress_i18n.__)("Preview", "elementor-pro"),
			icon: "eicon-preview-medium",
			url: `/site-editor/templates/${props.type}/${props.id}`
		})));
	}
	SiteTemplateThumbnail.propTypes = {
		id: import_prop_types.default.number,
		title: import_prop_types.default.string,
		type: import_prop_types.default.string,
		thumbnail: import_prop_types.default.string,
		placeholder: import_prop_types.default.string
	};
	//#endregion
	//#region core/app/modules/site-editor/assets/js/atoms/preview-iframe.js
	function PreviewIFrame(props) {
		const ref = react.default.useRef(null), previewBreakpoint = 1200, [scale, setScale] = react.default.useState(1), [height, setHeight] = react.default.useState(0);
		react.default.useEffect(() => {
			const currentScale = ref.current.clientWidth / previewBreakpoint;
			setScale(currentScale);
			setHeight(ref.current.clientHeight / currentScale);
		}, []);
		return /* @__PURE__ */ react.default.createElement("div", {
			ref,
			className: `site-editor__preview-iframe site-editor__preview-iframe--${props.templateType}`
		}, /* @__PURE__ */ react.default.createElement("iframe", {
			title: "preview",
			src: props.src,
			className: `site-editor__preview-iframe__iframe`,
			style: {
				transform: `scale(${scale})`,
				height,
				width: previewBreakpoint
			}
		}));
	}
	PreviewIFrame.propTypes = {
		src: import_prop_types.default.string.isRequired,
		templateType: import_prop_types.default.string.isRequired
	};
	//#endregion
	//#region core/app/modules/site-editor/assets/js/molecules/site-template-body.js
	var SiteTemplateBody = (props) => {
		return /* @__PURE__ */ react.default.createElement(_elementor_app_ui.CardBody, null, props.extended ? /* @__PURE__ */ react.default.createElement(PreviewIFrame, {
			src: props.previewUrl,
			templateType: props.type
		}) : /* @__PURE__ */ react.default.createElement(SiteTemplateThumbnail, {
			id: props.id,
			title: props.title,
			type: props.type,
			thumbnail: props.thumbnail,
			placeholder: props.placeholderUrl
		}));
	};
	SiteTemplateBody.propTypes = {
		extended: import_prop_types.default.bool,
		id: import_prop_types.default.number,
		title: import_prop_types.default.string,
		thumbnail: import_prop_types.default.string,
		placeholderUrl: import_prop_types.default.string,
		type: import_prop_types.default.string,
		previewUrl: import_prop_types.default.string
	};
	//#endregion
	//#region core/app/modules/site-editor/assets/js/molecules/site-template-footer.js
	var SiteTemplateFooter = (props) => {
		const instances = Object.values(props.instances).join(", ");
		return /* @__PURE__ */ react.default.createElement(_elementor_app_ui.CardFooter, null, /* @__PURE__ */ react.default.createElement("div", { className: "e-site-template__instances" }, /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Icon, { className: "eicon-flow" }), /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Text, {
			tag: "span",
			variant: "sm"
		}, /* @__PURE__ */ react.default.createElement("b", null, (0, _wordpress_i18n.__)("Instances", "elementor-pro"), ":")), /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Text, {
			className: "e-site-template__instances-list",
			tag: "span",
			variant: "xxs"
		}, " ", instances), /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Button, {
			text: (0, _wordpress_i18n.__)("Edit Conditions", "elementor-pro"),
			className: "e-site-template__edit-conditions",
			url: `/site-editor/conditions/${props.id}`
		})));
	};
	SiteTemplateFooter.propTypes = {
		id: import_prop_types.default.number.isRequired,
		instances: import_prop_types.default.any
	};
	//#endregion
	//#region core/app/modules/site-editor/assets/js/molecules/site-template.js
	var __defProp$13 = Object.defineProperty;
	var __getOwnPropSymbols$13 = Object.getOwnPropertySymbols;
	var __hasOwnProp$13 = Object.prototype.hasOwnProperty;
	var __propIsEnum$13 = Object.prototype.propertyIsEnumerable;
	var __defNormalProp$13 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$13(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value, "__defNormalProp");
	var __spreadValues$13 = /* @__PURE__ */ __name((a, b) => {
		for (var prop in b || (b = {})) if (__hasOwnProp$13.call(b, prop)) __defNormalProp$13(a, prop, b[prop]);
		if (__getOwnPropSymbols$13) {
			for (var prop of __getOwnPropSymbols$13(b)) if (__propIsEnum$13.call(b, prop)) __defNormalProp$13(a, prop, b[prop]);
		}
		return a;
	}, "__spreadValues");
	function SiteTemplate(props) {
		const baseClassName = "e-site-template";
		const classes = [baseClassName];
		const ref = react.default.useRef(null);
		react.default.useEffect(() => {
			if (!props.isSelected) return;
			ref.current.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		}, [props.isSelected]);
		if (props.extended) classes.push(`${baseClassName}--extended`);
		if (props.aspectRatio) classes.push(`${baseClassName}--${props.aspectRatio}`);
		const CardFooter = props.extended && props.showInstances ? /* @__PURE__ */ react.default.createElement(SiteTemplateFooter, __spreadValues$13({}, props)) : "";
		return /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Card, {
			className: classes.join(" "),
			ref
		}, /* @__PURE__ */ react.default.createElement(SiteTemplateHeader, __spreadValues$13({}, props)), /* @__PURE__ */ react.default.createElement(SiteTemplateBody, __spreadValues$13({}, props)), CardFooter);
	}
	SiteTemplate.propTypes = {
		aspectRatio: import_prop_types.default.string,
		className: import_prop_types.default.string,
		extended: import_prop_types.default.bool,
		id: import_prop_types.default.number.isRequired,
		isActive: import_prop_types.default.bool.isRequired,
		status: import_prop_types.default.string,
		thumbnail: import_prop_types.default.string.isRequired,
		title: import_prop_types.default.string.isRequired,
		isSelected: import_prop_types.default.bool,
		type: import_prop_types.default.string.isRequired,
		showInstances: import_prop_types.default.bool
	};
	SiteTemplate.defaultProps = { isSelected: false };
	//#endregion
	//#region modules/screenshots/app/assets/js/hooks/use-screenshot.js
	var { useState: useState$11, useEffect: useEffect$11, useMemo: useMemo$7, useCallback: useCallback$5 } = react.default;
	var SCREENSHOT_STATUS_QUEUE = "queue";
	var SCREENSHOT_STATUS_IN_PROGRESS = "in-progress";
	var SCREENSHOT_STATUS_SUCCEED = "succeed";
	var SCREENSHOT_STATUS_FAILED = "failed";
	/**
	* Default options for the hook function
	*
	* @type {{numberOfScreenshotInParallel: number}}
	*/
	var defaultOptions = { numberOfScreenshotInParallel: 1 };
	/**
	* Filter the posts by status.
	*
	* @param {Array}  posts
	* @param {string} status
	* @return {Array} Filtered posts
	*/
	function filterPostByStatus(posts, status) {
		return posts.filter((item) => status === item.status);
	}
	/**
	* Receive the initial posts and normalize it
	* to an array that the hook can work with.
	*
	* @param {Array} posts
	*/
	function normalizeInitialPosts(posts) {
		return posts.map((post) => ({
			id: post.id,
			screenshot_url: post.screenshot_url,
			status: "queue",
			iframe: null,
			imageUrl: null
		}));
	}
	/**
	* Find the post id inside the posts array, update it with the attrs,
	* and make sure to return the whole posts array.
	*
	* @param {Array}  posts
	* @param {number} id
	* @param {Object} attrs
	* @return {Array} Posts array
	*/
	function updatePostsAttrs(posts, id, attrs = {}) {
		return posts.map((post) => {
			if (post.id !== id) return post;
			return _objectSpread2(_objectSpread2({}, post), attrs);
		});
	}
	/**
	* Creates an IFrame that will create the screenshot.
	*
	* @param {Object} post
	* @return {HTMLIFrameElement} iframe
	*/
	function createScreenshotIframe(post) {
		const iframe = document.createElement("iframe");
		iframe.src = post.screenshot_url;
		iframe.width = "1200";
		iframe.style = "visibility: hidden;";
		document.body.appendChild(iframe);
		return iframe;
	}
	/**
	* Returns a callback, that will be bind to the iframe message event.
	*
	* @param {Array}    inProgressPosts
	* @param {Function} setPosts
	*/
	function useIFrameMessageListener(inProgressPosts, setPosts) {
		return useCallback$5((message) => {
			const { data } = message;
			if (!data.name || data.name !== "capture-screenshot-done") return;
			const post = inProgressPosts.find((item) => item.id === parseInt(data.id));
			if (!post) return;
			post.iframe.remove();
			setPosts((prevState) => updatePostsAttrs(prevState, post.id, {
				status: data.success ? SCREENSHOT_STATUS_SUCCEED : SCREENSHOT_STATUS_FAILED,
				imageUrl: data.imageUrl
			}));
		}, [inProgressPosts]);
	}
	/**
	* Will create a screenshot based on the posts that was passed to it.
	*
	* @param {Array}  initialPosts
	* @param {number} numberOfScreenshotInParallel
	* @return {{inProgress: Array, succeed: Array, failed: Array, posts: Array, queue: Array}} An array of posts, queue, inProgress, succeed, failed
	*/
	function useScreenshot(initialPosts, { numberOfScreenshotInParallel } = defaultOptions) {
		const [posts, setPosts] = useState$11([]);
		const queue = useMemo$7(() => filterPostByStatus(posts, SCREENSHOT_STATUS_QUEUE), [posts]);
		const inProgress = useMemo$7(() => filterPostByStatus(posts, SCREENSHOT_STATUS_IN_PROGRESS), [posts]);
		const succeed = useMemo$7(() => filterPostByStatus(posts, SCREENSHOT_STATUS_SUCCEED), [posts]);
		const failed = useMemo$7(() => filterPostByStatus(posts, SCREENSHOT_STATUS_FAILED), [posts]);
		useEffect$11(() => {
			const postsDiff = initialPosts.filter((initialPost) => !posts.find((statePost) => statePost.id === initialPost.id));
			if (!postsDiff.length) return;
			setPosts((prev) => [...prev, ...normalizeInitialPosts(postsDiff)]);
		}, [initialPosts]);
		const iframeMessageListener = useIFrameMessageListener(inProgress, setPosts);
		useEffect$11(() => {
			window.addEventListener("message", iframeMessageListener, false);
			return () => {
				window.removeEventListener("message", iframeMessageListener);
			};
		}, [iframeMessageListener]);
		useEffect$11(() => {
			if (0 === queue.length || inProgress.length >= numberOfScreenshotInParallel) return;
			const [nextPost] = queue;
			const iframe = createScreenshotIframe(nextPost);
			setPosts((prevState) => updatePostsAttrs(prevState, nextPost.id, {
				status: SCREENSHOT_STATUS_IN_PROGRESS,
				iframe
			}));
		}, [posts]);
		return {
			posts,
			queue,
			inProgress,
			succeed,
			failed
		};
	}
	//#endregion
	//#region core/app/modules/site-editor/assets/js/hooks/use-templates-screenshot.js
	/**
	* Wrapper function that was made to take screenshots specific for template.
	* it will capture a screenshot and update the templates context with the new screenshot.
	*
	* @param {any} templateType
	*/
	function useTemplatesScreenshot(templateType = null) {
		const { updateTemplateItemState, templates } = react.default.useContext(Context$1);
		const screenshot = useScreenshot(Object.values(templates).filter((template) => shouldScreenshotTemplate(template, templateType)));
		react.default.useEffect(() => {
			screenshot.posts.filter((post) => post.status === SCREENSHOT_STATUS_SUCCEED).forEach((post) => updateTemplateItemState(post.id, { thumbnail: post.imageUrl }));
		}, [screenshot.succeed]);
		react.default.useEffect(() => {
			screenshot.posts.filter((post) => post.status === SCREENSHOT_STATUS_FAILED).forEach((post) => updateTemplateItemState(post.id, { screenshot_url: null }));
		}, [screenshot.failed]);
		return screenshot;
	}
	/**
	* Filter handler.
	* will remove all the drafts and private and also will filter by template type if exists.
	*
	* @param {any} template
	* @param {any} templateType
	* @return {boolean} should screenshot template
	*/
	function shouldScreenshotTemplate(template, templateType = null) {
		if (templateType) return false;
		return "publish" === template.status && !template.thumbnail && template.screenshot_url;
	}
	//#endregion
	//#region core/app/modules/site-editor/assets/js/organisms/site-templates.js
	var __defProp$12 = Object.defineProperty;
	var __defProps$8 = Object.defineProperties;
	var __getOwnPropDescs$8 = Object.getOwnPropertyDescriptors;
	var __getOwnPropSymbols$12 = Object.getOwnPropertySymbols;
	var __hasOwnProp$12 = Object.prototype.hasOwnProperty;
	var __propIsEnum$12 = Object.prototype.propertyIsEnumerable;
	var __defNormalProp$12 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$12(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value, "__defNormalProp");
	var __spreadValues$12 = /* @__PURE__ */ __name((a, b) => {
		for (var prop in b || (b = {})) if (__hasOwnProp$12.call(b, prop)) __defNormalProp$12(a, prop, b[prop]);
		if (__getOwnPropSymbols$12) {
			for (var prop of __getOwnPropSymbols$12(b)) if (__propIsEnum$12.call(b, prop)) __defNormalProp$12(a, prop, b[prop]);
		}
		return a;
	}, "__spreadValues");
	var __spreadProps$8 = /* @__PURE__ */ __name((a, b) => __defProps$8(a, __getOwnPropDescs$8(b)), "__spreadProps");
	function SiteTemplates(props) {
		const { templates: contextTemplates, action, resetActionState } = react.default.useContext(Context$1);
		let gridColumns;
		let templates;
		templates = react.default.useMemo(() => {
			return Object.values(contextTemplates).sort((a, b) => {
				if (!b.isActive && !a.isActive) {
					if ("draft" === b.status && "draft" === a.status || "draft" !== b.status && "draft" !== a.status) return b.date < a.date ? 1 : -1;
					return "draft" === a.status ? 1 : -1;
				}
				if (b.isActive && a.isActive) return b.date < a.date ? 1 : -1;
				return b.isActive ? 1 : -1;
			});
		}, [contextTemplates]);
		useTemplatesScreenshot(props.type);
		const siteTemplateConfig = {};
		if (props.type) {
			templates = templates.filter((item) => item.type === props.type);
			siteTemplateConfig.extended = true;
			siteTemplateConfig.type = props.type;
			switch (props.type) {
				case "header":
				case "footer":
					gridColumns = 1;
					siteTemplateConfig.aspectRatio = "wide";
					break;
				default: gridColumns = 2;
			}
		}
		if (!templates || !templates.length) return /* @__PURE__ */ react.default.createElement("h3", null, (0, _wordpress_i18n.__)("No Templates found. Want to create one?", "elementor-pro"), "...");
		return /* @__PURE__ */ react.default.createElement("section", { className: "e-site-editor__site-templates" }, /* @__PURE__ */ react.default.createElement(PartActionsDialogs, null), action.error && /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Dialog, {
			text: action.error,
			dismissButtonText: (0, _wordpress_i18n.__)("Go Back", "elementor-pro"),
			dismissButtonOnClick: resetActionState,
			approveButtonText: (0, _wordpress_i18n.__)("Learn More", "elementor-pro"),
			approveButtonColor: "link",
			approveButtonUrl: "https://go.elementor.com/app-theme-builder-template-load-issue",
			approveButtonTarget: "_target"
		}), /* @__PURE__ */ react.default.createElement(_elementor_app_ui.CssGrid, {
			columns: gridColumns,
			spacing: 24,
			colMinWidth: 200
		}, templates.map((item) => /* @__PURE__ */ react.default.createElement(SiteTemplate, __spreadProps$8(__spreadValues$12(__spreadValues$12({ key: item.id }, item), siteTemplateConfig), { isSelected: parseInt(props.id) === item.id })))));
	}
	SiteTemplates.propTypes = {
		type: import_prop_types.default.string,
		id: import_prop_types.default.string
	};
	//#endregion
	//#region core/app/assets/js/utils.js
	var arrayToClassName = (array, action) => {
		return array.filter((item) => "object" === typeof item ? Object.entries(item)[0][1] : item).map((item) => {
			const value = "object" === typeof item ? Object.entries(item)[0][0] : item;
			return action ? action(value) : value;
		}).join(" ");
	};
	var htmlDecodeTextContent = (input) => {
		return new DOMParser().parseFromString(input, "text/html").documentElement.textContent;
	};
	var replaceUtmPlaceholders = (link = "", utms = {}) => {
		if (!link || !utms) return link;
		Object.keys(utms).forEach((key) => {
			const match = new RegExp(`%%${key}%%`, "g");
			link = link.replace(match, utms[key]);
		});
		return link;
	};
	//#endregion
	//#region core/app/assets/js/ui/connect-button.js
	var __defProp$11 = Object.defineProperty;
	var __defProps$7 = Object.defineProperties;
	var __getOwnPropDescs$7 = Object.getOwnPropertyDescriptors;
	var __getOwnPropSymbols$11 = Object.getOwnPropertySymbols;
	var __hasOwnProp$11 = Object.prototype.hasOwnProperty;
	var __propIsEnum$11 = Object.prototype.propertyIsEnumerable;
	var __defNormalProp$11 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$11(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value, "__defNormalProp");
	var __spreadValues$11 = /* @__PURE__ */ __name((a, b) => {
		for (var prop in b || (b = {})) if (__hasOwnProp$11.call(b, prop)) __defNormalProp$11(a, prop, b[prop]);
		if (__getOwnPropSymbols$11) {
			for (var prop of __getOwnPropSymbols$11(b)) if (__propIsEnum$11.call(b, prop)) __defNormalProp$11(a, prop, b[prop]);
		}
		return a;
	}, "__spreadValues");
	var __spreadProps$7 = /* @__PURE__ */ __name((a, b) => __defProps$7(a, __getOwnPropDescs$7(b)), "__spreadProps");
	var ConnectButton = (props) => {
		const className = arrayToClassName(["e-app-connect-button", props.className]);
		const buttonRef = (0, react.useRef)(null);
		(0, react.useEffect)(() => {
			if (!buttonRef.current) return;
			jQuery(buttonRef.current).elementorConnect();
		}, []);
		return /* @__PURE__ */ react.createElement(_elementor_app_ui.Button, __spreadProps$7(__spreadValues$11({}, props), {
			elRef: buttonRef,
			className
		}));
	};
	ConnectButton.propTypes = __spreadProps$7(__spreadValues$11({}, _elementor_app_ui.Button.propTypes), {
		text: import_prop_types.default.string.isRequired,
		url: import_prop_types.default.string.isRequired,
		className: import_prop_types.default.string
	});
	ConnectButton.defaultProps = {
		className: "",
		variant: "contained",
		size: "sm",
		color: "cta",
		target: "_blank",
		rel: "noopener noreferrer",
		text: (0, _wordpress_i18n.__)("Connect & Activate", "elementor-pro")
	};
	var connect_button_default = react.memo(ConnectButton);
	//#endregion
	//#region core/app/assets/js/hooks/use-feature-lock.js
	function useFeatureLock(featureName) {
		var _a;
		var _b;
		var _c;
		var _d;
		var _e;
		var _f;
		var _g;
		const appConfig = (_a = elementorAppProConfig[featureName]) != null ? _a : {};
		const isLocked = (_c = (_b = appConfig.lock) == null ? void 0 : _b.is_locked) != null ? _c : false;
		const buttonText = htmlDecodeTextContent((_d = appConfig.lock) == null ? void 0 : _d.button.text);
		const buttonLink = replaceUtmPlaceholders((_f = (_e = appConfig.lock) == null ? void 0 : _e.button.url) != null ? _f : "", (_g = appConfig.utms) != null ? _g : {});
		const ConnectButton = () => /* @__PURE__ */ react.default.createElement(connect_button_default, {
			text: buttonText,
			url: buttonLink
		});
		return {
			isLocked,
			ConnectButton
		};
	}
	//#endregion
	//#region core/app/modules/site-editor/assets/js/pages/templates.js
	function Templates() {
		const { isLocked, ConnectButton } = useFeatureLock("site-editor");
		return /* @__PURE__ */ react.default.createElement("section", { className: "e-site-editor__site-templates" }, /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Grid, {
			container: true,
			justify: "space-between",
			alignItems: "start",
			className: "page-header"
		}, /* @__PURE__ */ react.default.createElement("h1", null, (0, _wordpress_i18n.__)("Your Site's Global Parts", "elementor-pro")), isLocked ? /* @__PURE__ */ react.default.createElement(ConnectButton, null) : /* @__PURE__ */ react.default.createElement(_elementor_app_ui.AddNewButton, { url: "/site-editor/add-new" })), /* @__PURE__ */ react.default.createElement("hr", { className: "eps-separator" }), /* @__PURE__ */ react.default.createElement(SiteTemplates, null));
	}
	//#endregion
	//#region core/app/modules/site-editor/assets/js/pages/template-type.js
	function TemplateType(props) {
		const { templateTypes } = react.default.useContext(_elementor_site_editor.TemplateTypesContext), currentType = templateTypes.find((item) => item.type === props.type), { isLocked, ConnectButton } = useFeatureLock("site-editor");
		if (!currentType) return /* @__PURE__ */ react.default.createElement(_elementor_app_ui.NotFound, null);
		return /* @__PURE__ */ react.default.createElement("section", { className: `e-site-editor__templates e-site-editor__templates--type-${props.type}` }, /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Grid, {
			className: "page-header",
			container: true,
			justify: "space-between"
		}, /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Heading, { variant: "h1" }, currentType.page_title), isLocked ? /* @__PURE__ */ react.default.createElement(ConnectButton, null) : /* @__PURE__ */ react.default.createElement(_elementor_app_ui.AddNewButton, {
			url: currentType.urls.create,
			text: (0, _wordpress_i18n.__)("Add New", "elementor-pro")
		})), /* @__PURE__ */ react.default.createElement("hr", { className: "eps-separator" }), /* @__PURE__ */ react.default.createElement(SiteTemplates, {
			type: currentType.type,
			id: props.id
		}));
	}
	TemplateType.propTypes = {
		type: import_prop_types.default.string,
		page_title: import_prop_types.default.string,
		id: import_prop_types.default.string
	};
	//#endregion
	//#region core/app/modules/site-editor/assets/js/molecules/back-button.js
	function BackButton(props) {
		return /* @__PURE__ */ react.default.createElement("div", { className: "back-button-wrapper" }, /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Button, {
			className: "eps-back-button",
			text: (0, _wordpress_i18n.__)("Back", "elementor-pro"),
			icon: "eicon-chevron-left",
			onClick: props.onClick
		}));
	}
	BackButton.propTypes = { onClick: import_prop_types.default.func };
	BackButton.defaultProps = { onClick: () => history.back() };
	//#endregion
	//#region core/app/modules/site-editor/assets/js/pages/add-new.js
	function AddNew() {
		const { templates } = react.default.useContext(Context$1), hasTemplates = 1 <= Object.keys(templates).length;
		const { isLocked, ConnectButton } = useFeatureLock("site-editor");
		const HoverElement = (props) => {
			if (isLocked) return /* @__PURE__ */ react.default.createElement(_elementor_app_ui.CardOverlay, { className: "e-site-editor__promotion-overlay" }, /* @__PURE__ */ react.default.createElement("div", { className: "e-site-editor__promotion-overlay__link" }, /* @__PURE__ */ react.default.createElement("i", { className: "e-site-editor__promotion-overlay__icon eicon-lock" })));
			return /* @__PURE__ */ react.default.createElement("a", {
				href: props.urls.create,
				className: "eps-card__image-overlay eps-add-new__overlay"
			}, /* @__PURE__ */ react.default.createElement(_elementor_app_ui.AddNewButton, { hideText: true }));
		};
		HoverElement.propTypes = { urls: import_prop_types.default.object.isRequired };
		return /* @__PURE__ */ react.default.createElement("section", { className: "e-site-editor__add-new" }, /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Grid, {
			container: true,
			direction: "column",
			className: "e-site-editor__header"
		}, hasTemplates && /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Grid, { item: true }, /* @__PURE__ */ react.default.createElement(BackButton, null)), /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Grid, {
			item: true,
			container: true,
			justify: "space-between",
			alignItems: "start"
		}, /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Heading, { variant: "h1" }, (0, _wordpress_i18n.__)("Start customizing every part of your site", "elementor-pro")), isLocked && /* @__PURE__ */ react.default.createElement(ConnectButton, null))), /* @__PURE__ */ react.default.createElement(_elementor_site_editor.SiteParts, { hoverElement: HoverElement }));
	}
	//#endregion
	//#region core/app/modules/site-editor/assets/js/context/models/condition.js
	var Condition = class Condition {
		constructor(args) {
			_defineProperty(this, "id", elementorCommon.helpers.getUniqueId());
			_defineProperty(this, "default", "");
			_defineProperty(this, "type", "include");
			_defineProperty(this, "name", "");
			_defineProperty(this, "sub", "");
			_defineProperty(this, "subId", "");
			_defineProperty(this, "options", []);
			_defineProperty(this, "subOptions", []);
			_defineProperty(this, "subIdAutocomplete", []);
			_defineProperty(this, "subIdOptions", []);
			_defineProperty(this, "conflictErrors", []);
			this.set(args);
		}
		set(args) {
			Object.assign(this, args);
			return this;
		}
		clone() {
			return Object.assign(new Condition(), this);
		}
		remove(keys) {
			if (!Array.isArray(keys)) keys = [keys];
			keys.forEach((key) => {
				delete this[key];
			});
			return this;
		}
		only(keys) {
			if (!Array.isArray(keys)) keys = [keys];
			const keysToRemove = Object.keys(this).filter((conditionKey) => !keys.includes(conditionKey));
			this.remove(keysToRemove);
			return this;
		}
		toJson() {
			return JSON.stringify(this);
		}
		toString() {
			return this.forDb().filter((item) => item).join("/");
		}
		forDb() {
			return [
				this.type,
				this.name,
				this.sub,
				this.subId
			];
		}
		forContext() {
			return {
				type: this.type,
				name: this.name,
				sub: this.sub,
				subId: this.subId
			};
		}
	};
	//#endregion
	//#region core/app/modules/site-editor/assets/js/context/services/conditions-config.js
	var __defProp$10 = Object.defineProperty;
	var __defProps$6 = Object.defineProperties;
	var __getOwnPropDescs$6 = Object.getOwnPropertyDescriptors;
	var __getOwnPropSymbols$10 = Object.getOwnPropertySymbols;
	var __hasOwnProp$10 = Object.prototype.hasOwnProperty;
	var __propIsEnum$10 = Object.prototype.propertyIsEnumerable;
	var __defNormalProp$10 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$10(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value, "__defNormalProp");
	var __spreadValues$10 = /* @__PURE__ */ __name((a, b) => {
		for (var prop in b || (b = {})) if (__hasOwnProp$10.call(b, prop)) __defNormalProp$10(a, prop, b[prop]);
		if (__getOwnPropSymbols$10) {
			for (var prop of __getOwnPropSymbols$10(b)) if (__propIsEnum$10.call(b, prop)) __defNormalProp$10(a, prop, b[prop]);
		}
		return a;
	}, "__spreadValues");
	var __spreadProps$6 = /* @__PURE__ */ __name((a, b) => __defProps$6(a, __getOwnPropDescs$6(b)), "__spreadProps");
	var __publicField$1 = /* @__PURE__ */ __name((obj, key, value) => __defNormalProp$10(obj, typeof key !== "symbol" ? key + "" : key, value), "__publicField");
	var _ConditionsConfig = class _ConditionsConfig {
		constructor(config) {
			__publicField$1(this, "config", null);
			this.config = config;
		}
		/**
		* @return {Promise<ConditionsConfig>} Conditions config
		*/
		static create() {
			if (_ConditionsConfig.instance) return Promise.resolve(_ConditionsConfig.instance);
			return $e.data.get(ConditionsConfig$1.signature, {}, { refresh: true }).then((response) => {
				_ConditionsConfig.instance = new _ConditionsConfig(response.data);
				return _ConditionsConfig.instance;
			});
		}
		/**
		* Get main options for condition name.
		*
		* @return {Array} Condition options
		*/
		getOptions() {
			return this.getSubOptions("general", true).map(({ label, value }) => {
				return {
					label,
					value
				};
			});
		}
		/**
		* Get the sub options for the select.
		*
		* @param {string}  itemName
		* @param {boolean} isSubItem
		* @return {Array} Sub options
		*/
		getSubOptions(itemName, isSubItem = false) {
			const config = this.config[itemName];
			if (!config) return [];
			return [{
				label: config.all_label,
				value: isSubItem ? itemName : ""
			}, ...config.sub_conditions.map((subName) => {
				const subConfig = this.config[subName];
				return {
					label: subConfig.label,
					value: subName,
					children: subConfig.sub_conditions.length ? this.getSubOptions(subName, true) : null
				};
			})];
		}
		/**
		* Get the autocomplete property from the conditions config
		*
		* @param {string} sub
		* @return {{}|any} Conditions autocomplete
		*/
		getSubIdAutocomplete(sub) {
			var _a;
			const config = this.config[sub];
			if (!config || !("object" === typeof config.controls)) return {};
			const controls = Object.values(config.controls);
			if (!((_a = controls == null ? void 0 : controls[0]) == null ? void 0 : _a.autocomplete)) return {};
			return controls[0].autocomplete;
		}
		/**
		* Calculate instances from the conditions.
		*
		* @param {Array} conditions
		* @return {Object} Conditions Instances
		*/
		calculateInstances(conditions) {
			let instances = conditions.reduce((current, condition) => {
				if ("exclude" === condition.type) return current;
				const key = condition.sub || condition.name;
				const config = this.config[key];
				if (!config) return current;
				const instanceLabel = condition.subId ? `${config.label} #${condition.subId}` : config.all_label;
				return __spreadProps$6(__spreadValues$10({}, current), { [key]: instanceLabel });
			}, {});
			if (0 === Object.keys(instances).length) instances = [(0, _wordpress_i18n.__)("No instances", "elementor-pro")];
			return instances;
		}
	};
	__publicField$1(_ConditionsConfig, "instance");
	var ConditionsConfig = _ConditionsConfig;
	//#endregion
	//#region core/app/modules/site-editor/assets/js/context/conditions.js
	var __defProp$9 = Object.defineProperty;
	var __defProps$5 = Object.defineProperties;
	var __getOwnPropDescs$5 = Object.getOwnPropertyDescriptors;
	var __getOwnPropSymbols$9 = Object.getOwnPropertySymbols;
	var __hasOwnProp$9 = Object.prototype.hasOwnProperty;
	var __propIsEnum$9 = Object.prototype.propertyIsEnumerable;
	var __defNormalProp$9 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$9(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value, "__defNormalProp");
	var __spreadValues$9 = /* @__PURE__ */ __name((a, b) => {
		for (var prop in b || (b = {})) if (__hasOwnProp$9.call(b, prop)) __defNormalProp$9(a, prop, b[prop]);
		if (__getOwnPropSymbols$9) {
			for (var prop of __getOwnPropSymbols$9(b)) if (__propIsEnum$9.call(b, prop)) __defNormalProp$9(a, prop, b[prop]);
		}
		return a;
	}, "__spreadValues");
	var __spreadProps$5 = /* @__PURE__ */ __name((a, b) => __defProps$5(a, __getOwnPropDescs$5(b)), "__spreadProps");
	var __publicField = (obj, key, value) => __defNormalProp$9(obj, typeof key !== "symbol" ? key + "" : key, value);
	var Context = react.default.createContext();
	var _ConditionsProvider = class _ConditionsProvider extends BaseContext {
		/**
		* ConditionsProvider constructor.
		*
		* @param {any} props
		*/
		constructor(props) {
			super(props);
			/**
			* Holds the conditions config object.
			*
			* @type {ConditionsConfig}
			*/
			__publicField(this, "conditionsConfig", null);
			this.state = __spreadProps$5(__spreadValues$9({}, this.state), {
				conditionsFetched: false,
				conditions: {},
				updateConditionItemState: this.updateConditionItemState.bind(this),
				removeConditionItemInState: this.removeConditionItemInState.bind(this),
				createConditionItemInState: this.createConditionItemInState.bind(this),
				findConditionItemInState: this.findConditionItemInState.bind(this),
				saveConditions: this.saveConditions.bind(this)
			});
		}
		/**
		* Fetch the conditions config, then normalize the conditions and then setup titles for
		* the subIds.
		*/
		componentDidMount() {
			this.executeAction(_ConditionsProvider.actions.FETCH_CONFIG, () => ConditionsConfig.create()).then((conditionsConfig) => this.conditionsConfig = conditionsConfig).then(this.normalizeConditionsState.bind(this)).then(() => {
				this.setSubIdTitles.bind(this);
				this.setState({ conditionsFetched: true });
			});
		}
		componentDidUpdate(prevProps, prevState) {
			if (!prevState.conditionsFetched && this.state.conditionsFetched) this.setSubIdTitles();
		}
		/**
		* Execute a request to save the template conditions.
		*
		* @return {any} Saved conditions
		*/
		saveConditions() {
			const conditions = Object.values(this.state.conditions).map((condition) => condition.forDb());
			return this.executeAction(_ConditionsProvider.actions.SAVE, () => $e.data.update(TemplatesConditions.signature, { conditions }, { id: this.props.currentTemplate.id })).then(() => {
				const contextConditions = Object.values(this.state.conditions).map((condition) => condition.forContext());
				this.props.onConditionsSaved(this.props.currentTemplate.id, {
					conditions: contextConditions,
					instances: this.conditionsConfig.calculateInstances(Object.values(this.state.conditions)),
					isActive: !!(Object.keys(this.state.conditions).length && "publish" === this.props.currentTemplate.status)
				});
			});
		}
		/**
		* Check for conflicts in the server and mark the condition if there
		* is a conflict.
		*
		* @param {any} condition
		*/
		checkConflicts(condition) {
			return this.executeAction(_ConditionsProvider.actions.CHECK_CONFLICTS, () => $e.data.get(TemplatesConditionsConflicts.signature, {
				post_id: this.props.currentTemplate.id,
				condition: condition.clone().toString()
			})).then((response) => this.updateConditionItemState(condition.id, { conflictErrors: Object.values(response.data) }, false));
		}
		/**
		* Fetching subId titles.
		*
		* @param {any} condition
		* @return {Promise<unknown>} Titles
		*/
		fetchSubIdsTitles(condition) {
			return new Promise((resolve) => {
				return elementorCommon.ajax.loadObjects({
					action: "query_control_value_titles",
					ids: _.isArray(condition.subId) ? condition.subId : [condition.subId],
					data: {
						get_titles: condition.subIdAutocomplete,
						unique_id: elementorCommon.helpers.getUniqueId()
					},
					success(response) {
						resolve(response);
					}
				});
			});
		}
		/**
		* Get the conditions from the template and normalize it to data structure
		* that the components can work with.
		*/
		normalizeConditionsState() {
			this.updateConditionsState(() => {
				return this.props.currentTemplate.conditions.reduce((current, condition) => {
					const conditionObj = new Condition(__spreadProps$5(__spreadValues$9({}, condition), {
						default: this.props.currentTemplate.defaultCondition,
						options: this.conditionsConfig.getOptions(),
						subOptions: this.conditionsConfig.getSubOptions(condition.name),
						subIdAutocomplete: this.conditionsConfig.getSubIdAutocomplete(condition.sub),
						subIdOptions: condition.subId ? [{
							value: condition.subId,
							label: ""
						}] : []
					}));
					return __spreadProps$5(__spreadValues$9({}, current), { [conditionObj.id]: conditionObj });
				}, {});
			}).then(() => {
				Object.values(this.state.conditions).forEach((condition) => this.checkConflicts(condition));
			});
		}
		/**
		* Set titles to the subIds,
		* for the first render of the component.
		*/
		setSubIdTitles() {
			return Object.values(this.state.conditions).forEach((condition) => {
				if (!condition.subId) return;
				return this.fetchSubIdsTitles(condition).then((response) => this.updateConditionItemState(condition.id, { subIdOptions: [{
					label: Object.values(response)[0],
					value: condition.subId
				}] }, false));
			});
		}
		/**
		* Update state of specific condition item.
		*
		* @param {any}     id
		* @param {any}     args
		* @param {boolean} shouldCheckConflicts
		*/
		updateConditionItemState(id, args, shouldCheckConflicts = true) {
			if (args.name) args.subOptions = this.conditionsConfig.getSubOptions(args.name);
			if (args.sub || args.name) {
				args.subIdAutocomplete = this.conditionsConfig.getSubIdAutocomplete(args.sub);
				args.subIdOptions = [];
			}
			this.updateConditionsState((prev) => {
				const condition = prev[id];
				return __spreadProps$5(__spreadValues$9({}, prev), { [id]: condition.clone().set(args) });
			}).then(() => {
				if (shouldCheckConflicts) this.checkConflicts(this.findConditionItemInState(id));
			});
		}
		/**
		* Remove a condition item from the state.
		*
		* @param {any} id
		*/
		removeConditionItemInState(id) {
			this.updateConditionsState((prev) => {
				const newConditions = __spreadValues$9({}, prev);
				delete newConditions[id];
				return newConditions;
			});
		}
		/**
		* Add a new condition item into the state.
		*
		* @param {boolean} shouldCheckConflicts
		*/
		createConditionItemInState(shouldCheckConflicts = true) {
			const defaultCondition = this.props.currentTemplate.defaultCondition;
			const newCondition = new Condition({
				name: defaultCondition,
				default: defaultCondition,
				options: this.conditionsConfig.getOptions(),
				subOptions: this.conditionsConfig.getSubOptions(defaultCondition),
				subIdAutocomplete: this.conditionsConfig.getSubIdAutocomplete("")
			});
			this.updateConditionsState((prev) => __spreadProps$5(__spreadValues$9({}, prev), { [newCondition.id]: newCondition })).then(() => {
				if (shouldCheckConflicts) this.checkConflicts(newCondition);
			});
		}
		/**
		* Find a condition item from the conditions state.
		*
		* @param {any} id
		* @return {Condition|null} Condition
		*/
		findConditionItemInState(id) {
			return Object.values(this.state.conditions).find((c) => c.id === id);
		}
		/**
		* Update the whole conditions state.
		*
		* @param {Function} callback
		* @return {Promise<undefined>} Conditions state
		*/
		updateConditionsState(callback) {
			return new Promise((resolve) => this.setState((prev) => ({ conditions: callback(prev.conditions) }), resolve));
		}
		/**
		* Renders the provider.
		*
		* @return {any} Element
		*/
		render() {
			if (this.state.action.current === _ConditionsProvider.actions.FETCH_CONFIG) {
				if (this.state.error) return /* @__PURE__ */ react.default.createElement("h3", null, (0, _wordpress_i18n.__)("Error:", "elementor-pro"), " ", this.state.error);
				if (this.state.loading) return /* @__PURE__ */ react.default.createElement("h3", null, (0, _wordpress_i18n.__)("Loading", "elementor-pro"), "...");
			}
			return /* @__PURE__ */ react.default.createElement(Context.Provider, { value: this.state }, this.props.children);
		}
	};
	__publicField(_ConditionsProvider, "propTypes", {
		children: import_prop_types.default.any.isRequired,
		currentTemplate: import_prop_types.default.object.isRequired,
		onConditionsSaved: import_prop_types.default.func.isRequired,
		validateConflicts: import_prop_types.default.bool
	});
	__publicField(_ConditionsProvider, "defaultProps", { validateConflicts: true });
	__publicField(_ConditionsProvider, "actions", {
		FETCH_CONFIG: "fetch-config",
		SAVE: "save",
		CHECK_CONFLICTS: "check-conflicts"
	});
	var ConditionsProvider = _ConditionsProvider;
	//#endregion
	//#region core/app/modules/site-editor/assets/js/pages/conditions/condition-type.js
	function ConditionType(props) {
		const wrapperRef = react.default.createRef();
		const options = [{
			label: (0, _wordpress_i18n.__)("Include", "elementor-pro"),
			value: "include"
		}, {
			label: (0, _wordpress_i18n.__)("Exclude", "elementor-pro"),
			value: "exclude"
		}];
		const onChange = (e) => {
			props.updateConditions(props.id, { type: e.target.value });
		};
		react.default.useEffect(() => {
			wrapperRef.current.setAttribute("data-elementor-condition-type", props.type);
		});
		return /* @__PURE__ */ react.default.createElement("div", {
			className: "e-site-editor-conditions__input-wrapper e-site-editor-conditions__input-wrapper--condition-type",
			ref: wrapperRef
		}, /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Select, {
			options,
			value: props.type,
			onChange
		}));
	}
	ConditionType.propTypes = {
		updateConditions: import_prop_types.default.func.isRequired,
		id: import_prop_types.default.string.isRequired,
		type: import_prop_types.default.string.isRequired
	};
	ConditionType.defaultProps = { type: "" };
	//#endregion
	//#region core/app/modules/site-editor/assets/js/pages/conditions/condition-name.js
	function ConditionName(props) {
		if ("general" !== props.default) return "";
		const onChange = (e) => props.updateConditions(props.id, {
			name: e.target.value,
			sub: "",
			subId: ""
		});
		return /* @__PURE__ */ react.default.createElement("div", { className: "e-site-editor-conditions__input-wrapper" }, /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Select, {
			options: props.options,
			value: props.name,
			onChange
		}));
	}
	ConditionName.propTypes = {
		updateConditions: import_prop_types.default.func.isRequired,
		id: import_prop_types.default.string.isRequired,
		name: import_prop_types.default.string.isRequired,
		options: import_prop_types.default.array.isRequired,
		default: import_prop_types.default.string.isRequired
	};
	ConditionName.defaultProps = { name: "" };
	//#endregion
	//#region core/app/modules/site-editor/assets/js/pages/conditions/condition-sub.js
	function ConditionSub(props) {
		if ("general" === props.name || !props.subOptions.length) return "";
		const onChange = (e) => props.updateConditions(props.id, {
			sub: e.target.value,
			subId: ""
		});
		return /* @__PURE__ */ react.default.createElement("div", { className: "e-site-editor-conditions__input-wrapper" }, /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Select, {
			options: props.subOptions,
			value: props.sub,
			onChange
		}));
	}
	ConditionSub.propTypes = {
		updateConditions: import_prop_types.default.func.isRequired,
		id: import_prop_types.default.string.isRequired,
		name: import_prop_types.default.string.isRequired,
		sub: import_prop_types.default.string.isRequired,
		subOptions: import_prop_types.default.array.isRequired
	};
	ConditionSub.defaultProps = {
		sub: "",
		subOptions: {}
	};
	//#endregion
	//#region core/app/modules/site-editor/assets/js/pages/conditions/condition-sub-id.js
	function ConditionSubId(props) {
		const settings = react.default.useMemo(() => Object.keys(props.subIdAutocomplete).length ? getSettings(props.subIdAutocomplete) : null, [props.subIdAutocomplete]);
		if (!props.sub || !settings) return "";
		const onChange = (e) => props.updateConditions(props.id, { subId: e.target.value });
		return /* @__PURE__ */ react.default.createElement("div", { className: "e-site-editor-conditions__input-wrapper" }, /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Select2, {
			onChange,
			value: props.subId,
			settings,
			options: props.subIdOptions
		}));
	}
	function getSettings(autocomplete) {
		return {
			allowClear: false,
			placeholder: (0, _wordpress_i18n.__)("All", "elementor-pro"),
			dir: elementorCommon.config.isRTL ? "rtl" : "ltr",
			ajax: {
				transport(params, success, failure) {
					return elementorCommon.ajax.addRequest("pro_panel_posts_control_filter_autocomplete", {
						data: {
							q: params.data.q,
							autocomplete
						},
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
		};
	}
	ConditionSubId.propTypes = {
		subIdAutocomplete: import_prop_types.default.object,
		id: import_prop_types.default.string.isRequired,
		sub: import_prop_types.default.string,
		subId: import_prop_types.default.string,
		updateConditions: import_prop_types.default.func,
		subIdOptions: import_prop_types.default.array
	};
	ConditionSubId.defaultProps = {
		subId: "",
		subIdOptions: []
	};
	//#endregion
	//#region core/app/modules/site-editor/assets/js/pages/conditions/condition-conflicts.js
	function ConditionConflicts(props) {
		if (!props.conflicts.length) return "";
		const conflictLinks = props.conflicts.map((conflict) => {
			return /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Button, {
				key: conflict.template_id,
				target: "_blank",
				url: conflict.edit_url,
				text: conflict.template_title
			});
		});
		return /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Text, {
			className: "e-site-editor-conditions__conflict",
			variant: "sm"
		}, (0, _wordpress_i18n.sprintf)((0, _wordpress_i18n.__)("We noticed that you already applied %s with the same condition.", "elementor-pro"), conflictLinks), /* @__PURE__ */ react.default.createElement("br", null), (0, _wordpress_i18n.__)("To continue, set different conditions for each so they don't conflict.", "elementor-pro"));
	}
	ConditionConflicts.propTypes = { conflicts: import_prop_types.default.array.isRequired };
	//#endregion
	//#region core/app/modules/site-editor/assets/js/pages/conditions/condition-button-portal.js
	var ConditionButtonPortal = (props) => {
		const [shouldCreatePortal, setShouldCreatePortal] = (0, react.useState)(false), portalRoot = document.getElementById("portal-root");
		(0, react.useEffect)(() => {
			setShouldCreatePortal(!!portalRoot);
		}, [portalRoot]);
		return shouldCreatePortal ? (0, react_dom.createPortal)(props.children, portalRoot) : null;
	};
	ConditionButtonPortal.propTypes = { children: import_prop_types.oneOfType([import_prop_types.node, import_prop_types.string]) };
	//#endregion
	//#region core/app/modules/site-editor/assets/js/pages/conditions/conditions-rows.js
	var __defProp$8 = Object.defineProperty;
	var __defProps$4 = Object.defineProperties;
	var __getOwnPropDescs$4 = Object.getOwnPropertyDescriptors;
	var __getOwnPropSymbols$8 = Object.getOwnPropertySymbols;
	var __hasOwnProp$8 = Object.prototype.hasOwnProperty;
	var __propIsEnum$8 = Object.prototype.propertyIsEnumerable;
	var __defNormalProp$8 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$8(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value, "__defNormalProp");
	var __spreadValues$8 = /* @__PURE__ */ __name((a, b) => {
		for (var prop in b || (b = {})) if (__hasOwnProp$8.call(b, prop)) __defNormalProp$8(a, prop, b[prop]);
		if (__getOwnPropSymbols$8) {
			for (var prop of __getOwnPropSymbols$8(b)) if (__propIsEnum$8.call(b, prop)) __defNormalProp$8(a, prop, b[prop]);
		}
		return a;
	}, "__spreadValues");
	var __spreadProps$4 = /* @__PURE__ */ __name((a, b) => __defProps$4(a, __getOwnPropDescs$4(b)), "__spreadProps");
	function ConditionsRows(props) {
		const { conditions, createConditionItemInState: create, updateConditionItemState: update, removeConditionItemInState: remove, saveConditions: save, action, resetActionState } = react.default.useContext(Context);
		const rows = Object.values(conditions).map((condition) => /* @__PURE__ */ react.default.createElement("div", { key: condition.id }, /* @__PURE__ */ react.default.createElement("div", { className: "e-site-editor-conditions__row" }, /* @__PURE__ */ react.default.createElement("div", { className: `e-site-editor-conditions__row-controls ${condition.conflictErrors.length && "e-site-editor-conditions__row-controls--error"}` }, /* @__PURE__ */ react.default.createElement(ConditionType, __spreadProps$4(__spreadValues$8({}, condition), { updateConditions: update })), /* @__PURE__ */ react.default.createElement("div", { className: "e-site-editor-conditions__row-controls-inner" }, /* @__PURE__ */ react.default.createElement(ConditionName, __spreadProps$4(__spreadValues$8({}, condition), { updateConditions: update })), /* @__PURE__ */ react.default.createElement(ConditionSub, __spreadProps$4(__spreadValues$8({}, condition), { updateConditions: update })), /* @__PURE__ */ react.default.createElement(ConditionSubId, __spreadProps$4(__spreadValues$8({}, condition), { updateConditions: update })))), /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Button, {
			className: "e-site-editor-conditions__remove-condition",
			text: (0, _wordpress_i18n.__)("Delete", "elementor-pro"),
			icon: "eicon-close",
			hideText: true,
			onClick: () => remove(condition.id)
		})), /* @__PURE__ */ react.default.createElement(ConditionConflicts, { conflicts: condition.conflictErrors })));
		const SaveButton = () => {
			return /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Button, {
				variant: "contained",
				color: "primary",
				size: "lg",
				hideText: isSaving,
				icon: isSaving ? "eicon-loading eicon-animation-spin" : "",
				text: (0, _wordpress_i18n.__)("Save & Close", "elementor-pro"),
				onClick: () => save().then(props.onAfterSave)
			});
		};
		const isSaving = action.current === ConditionsProvider.actions.SAVE && action.loading;
		return /* @__PURE__ */ react.default.createElement(react.default.Fragment, null, action.error && /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Dialog, {
			text: action.error,
			dismissButtonText: (0, _wordpress_i18n.__)("Go Back", "elementor-pro"),
			dismissButtonOnClick: resetActionState,
			approveButtonText: (0, _wordpress_i18n.__)("Learn More", "elementor-pro"),
			approveButtonColor: "link",
			approveButtonUrl: "https://go.elementor.com/app-theme-builder-conditions-load-issue",
			approveButtonTarget: "_target"
		}), /* @__PURE__ */ react.default.createElement("div", { className: "e-site-editor-conditions__rows" }, rows), /* @__PURE__ */ react.default.createElement("div", { className: "e-site-editor-conditions__add-button-container" }, /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Button, {
			className: "e-site-editor-conditions__add-button",
			variant: "contained",
			size: "lg",
			text: (0, _wordpress_i18n.__)("Add Condition", "elementor-pro"),
			onClick: create
		})), /* @__PURE__ */ react.default.createElement("div", { className: "e-site-editor-conditions__footer" }, (props == null ? void 0 : props.loadPortal) ? /* @__PURE__ */ react.default.createElement(ConditionButtonPortal, null, /* @__PURE__ */ react.default.createElement(SaveButton, null)) : /* @__PURE__ */ react.default.createElement(SaveButton, null)));
	}
	ConditionsRows.propTypes = {
		onAfterSave: import_prop_types.default.func,
		loadPortal: import_prop_types.default.bool
	};
	//#endregion
	//#region core/app/modules/site-editor/assets/js/pages/conditions/conditions.js
	function Conditions(props) {
		const { findTemplateItemInState, updateTemplateItemState } = react.default.useContext(Context$1), template = findTemplateItemInState(parseInt(props.id));
		if (!template) return /* @__PURE__ */ react.default.createElement("div", null, (0, _wordpress_i18n.__)("Not Found", "elementor-pro"));
		return /* @__PURE__ */ react.default.createElement("section", { className: "e-site-editor-conditions" }, /* @__PURE__ */ react.default.createElement(BackButton, null), /* @__PURE__ */ react.default.createElement("div", { className: "e-site-editor-conditions__header" }, /* @__PURE__ */ react.default.createElement("img", {
			className: "e-site-editor-conditions__header-image",
			src: `${elementorAppProConfig.baseUrl}/modules/theme-builder/assets/images/conditions-tab.svg`,
			alt: (0, _wordpress_i18n.__)("Import template", "elementor-pro")
		}), /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Heading, {
			variant: "h1",
			tag: "h1"
		}, (0, _wordpress_i18n.__)("Where do you want to display your template?", "elementor-pro")), /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Text, { variant: "p" }, (0, _wordpress_i18n.__)("Set the conditions that determine where your template is used throughout your site.", "elementor-pro"), /* @__PURE__ */ react.default.createElement("br", null), (0, _wordpress_i18n.__)("For example, choose 'Entire Site' to display the template across your site.", "elementor-pro"))), /* @__PURE__ */ react.default.createElement(ConditionsProvider, {
			currentTemplate: template,
			onConditionsSaved: updateTemplateItemState
		}, /* @__PURE__ */ react.default.createElement(ConditionsRows, {
			onAfterSave: () => history.back(),
			loadPortal: true
		})));
	}
	Conditions.propTypes = { id: import_prop_types.default.string };
	//#endregion
	//#region core/app/modules/site-editor/assets/js/pages/import.js
	var _a;
	var useConfirmActionFallback = ({ action }) => ({
		runAction: action,
		dialog: { isOpen: false }
	});
	var useConfirmAction = (_a = _elementor_hooks.useConfirmAction) != null ? _a : useConfirmActionFallback;
	function Import() {
		const { importTemplates, action, resetActionState } = react.default.useContext(Context$1), [importedTemplate, setImportedTemplate] = react.default.useState(null), isImport = action.current === TemplatesProvider.actions.IMPORT, isUploading = isImport && action.loading, hasError = isImport && action.error;
		const { runAction: uploadFile, dialog, checkbox } = useConfirmAction({
			doNotShowAgainKey: "upload_json_warning_generic_message",
			action: react.default.useCallback((file) => {
				if (isUploading) return;
				readFile(file).then((fileData) => importTemplates({
					fileName: file.name,
					fileData
				})).then((response) => {
					setImportedTemplate(response.data[0]);
				});
			}, [])
		});
		return /* @__PURE__ */ react.default.createElement("section", { className: "site-editor__import" }, importedTemplate && /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Dialog, {
			title: (0, _wordpress_i18n.__)("Your template was imported", "elementor-pro"),
			approveButtonText: (0, _wordpress_i18n.__)("Preview", "elementor-pro"),
			approveButtonUrl: importedTemplate.url,
			approveButtonTarget: "_blank",
			dismissButtonText: (0, _wordpress_i18n.__)("Edit", "elementor-pro"),
			dismissButtonUrl: importedTemplate.editURL,
			dismissButtonTarget: "_top",
			onClose: () => setImportedTemplate(null)
		}), hasError && /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Dialog, {
			title: action.error,
			approveButtonText: (0, _wordpress_i18n.__)("Learn More", "elementor-pro"),
			approveButtonUrl: "https://go.elementor.com/app-theme-builder-import-issue",
			approveButtonTarget: "_blank",
			approveButtonColor: "link",
			dismissButtonText: (0, _wordpress_i18n.__)("Go Back", "elementor-pro"),
			dismissButtonOnClick: resetActionState,
			onClose: resetActionState
		}), dialog.isOpen && /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Dialog, {
			title: (0, _wordpress_i18n.__)("Warning: JSON or ZIP files may be unsafe", "elementor-pro"),
			text: (0, _wordpress_i18n.__)("Uploading JSON or ZIP files from unknown sources can be harmful and put your site at risk. For maximum safety, upload only JSON or ZIP files from trusted sources.", "elementor-pro"),
			approveButtonColor: "link",
			approveButtonText: (0, _wordpress_i18n.__)("Continue", "elementor-pro"),
			approveButtonOnClick: dialog.approve,
			dismissButtonText: (0, _wordpress_i18n.__)("Cancel", "elementor-pro"),
			dismissButtonOnClick: dialog.dismiss,
			onClose: dialog.dismiss
		}, /* @__PURE__ */ react.default.createElement("label", {
			htmlFor: "do-not-show-upload-json-warning-again",
			style: {
				display: "flex",
				alignItems: "center",
				gap: "5px"
			}
		}, /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Checkbox, {
			id: "do-not-show-upload-json-warning-again",
			type: "checkbox",
			value: checkbox.isChecked,
			onChange: (event) => checkbox.setIsChecked(!!event.target.checked)
		}), (0, _wordpress_i18n.__)("Do not show this message again", "elementor-pro"))), /* @__PURE__ */ react.default.createElement(BackButton, null), /* @__PURE__ */ react.default.createElement(_elementor_app_ui.DropZone, {
			heading: (0, _wordpress_i18n.__)("Import Template To Your Library", "elementor-pro"),
			text: (0, _wordpress_i18n.__)("Drag & Drop your .JSON or .zip template file", "elementor-pro"),
			secondaryText: (0, _wordpress_i18n.__)("or", "elementor-pro"),
			onFileSelect: uploadFile,
			isLoading: isUploading,
			filetypes: ["zip", "json"]
		}));
	}
	function readFile(file) {
		return new Promise(((resolve) => {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file);
			fileReader.onload = (event) => {
				resolve(event.target.result.replace(/^[^,]+,/, ""));
			};
		}));
	}
	//#endregion
	//#region core/app/modules/site-editor/assets/js/site-editor.js
	function SiteEditor() {
		var _a;
		var _b;
		const { isLocked } = useFeatureLock("site-editor");
		const basePath = "site-editor";
		const headerButtons = [{
			id: "import",
			text: (0, _wordpress_i18n.__)("import", "elementor-pro"),
			hideText: true,
			icon: "eicon-upload-circle-o",
			onClick: () => _elementor_router.default.appHistory.navigate("site-editor/import")
		}];
		elementorCommon.ajax.invalidateCache({ unique_id: "app_site_editor_template_types" });
		const SiteEditorDefault = () => {
			const { templates } = react.default.useContext(Context$1);
			if (Object.keys(templates).length) return /* @__PURE__ */ react.default.createElement(Redirect, {
				from: "/",
				to: "/site-editor/templates",
				noThrow: true
			});
			return /* @__PURE__ */ react.default.createElement(Redirect, {
				from: "/",
				to: "/site-editor/add-new",
				noThrow: true
			});
		};
		return /* @__PURE__ */ react.default.createElement(_elementor_app_ui.ErrorBoundary, {
			title: (0, _wordpress_i18n.__)("Theme Builder could not be loaded", "elementor-pro"),
			learnMoreUrl: "https://go.elementor.com/app-theme-builder-load-issue"
		}, /* @__PURE__ */ react.default.createElement(_elementor_site_editor.Layout, {
			allPartsButton: /* @__PURE__ */ react.default.createElement(_elementor_site_editor.AllPartsButton, { url: "/site-editor" }),
			headerButtons,
			titleRedirectRoute: "/site-editor",
			promotion: isLocked
		}, /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Grid, {
			container: true,
			className: "e-site-editor__content_container"
		}, /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Grid, {
			item: true,
			className: "e-site-editor__content_container_main"
		}, /* @__PURE__ */ react.default.createElement(TemplatesProvider, null, /* @__PURE__ */ react.default.createElement(LocationProvider, { history: _elementor_router.default.appHistory }, /* @__PURE__ */ react.default.createElement(Router, null, /* @__PURE__ */ react.default.createElement(SiteEditorDefault, { path: basePath }), /* @__PURE__ */ react.default.createElement(Templates, { path: "site-editor/templates" }), /* @__PURE__ */ react.default.createElement(TemplateType, { path: "site-editor/templates/:type/*id" }), /* @__PURE__ */ react.default.createElement(AddNew, { path: "site-editor/add-new" }), /* @__PURE__ */ react.default.createElement(Conditions, { path: "site-editor/conditions/:id" }), /* @__PURE__ */ react.default.createElement(Import, { path: "site-editor/import" }), /* @__PURE__ */ react.default.createElement(_elementor_site_editor.NotFound, { default: true }))))), /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Grid, {
			container: true,
			justify: "space-between",
			className: "e-site-editor__content_container_secondary"
		}, /* @__PURE__ */ react.default.createElement(_elementor_app_ui.Button, {
			text: (0, _wordpress_i18n.__)("Switch to table view", "elementor-pro"),
			url: (_b = (_a = elementorAppProConfig["site-editor"]) == null ? void 0 : _a.urls) == null ? void 0 : _b.legacy_view
		}), window.location.href.indexOf("conditions") !== -1 && /* @__PURE__ */ react.default.createElement("div", { id: "portal-root" })))));
	}
	var Module$1 = class {
		static {
			__name(this, "Module");
		}
		constructor() {
			elementorCommon.debug.addURLToWatch("elementor-pro/assets");
			$e.components.register(new Component());
			_elementor_router.default.addRoute({
				path: "/site-editor/*",
				component: SiteEditor
			});
		}
	};
	//#endregion
	//#region core/app/modules/import-export-customization/assets/js/components/kit-customization-dialog.js
	function KitCustomizationDialog({ open, title, handleClose, handleSaveChanges, children, saveDisabled = false }) {
		return /* @__PURE__ */ react.default.createElement(_elementor_ui.Dialog, {
			open,
			onClose: handleClose,
			maxWidth: "md",
			fullWidth: true
		}, /* @__PURE__ */ react.default.createElement(_elementor_ui.DialogHeader, { onClose: handleClose }, /* @__PURE__ */ react.default.createElement(_elementor_ui.DialogTitle, null, title)), /* @__PURE__ */ react.default.createElement(_elementor_ui.DialogContent, {
			dividers: true,
			sx: {
				pt: 3,
				px: 3,
				pb: 0
			}
		}, children), /* @__PURE__ */ react.default.createElement(_elementor_ui.DialogActions, null, /* @__PURE__ */ react.default.createElement(_elementor_ui.Button, {
			onClick: handleClose,
			color: "secondary"
		}, (0, _wordpress_i18n.__)("Cancel", "elementor")), /* @__PURE__ */ react.default.createElement(_elementor_ui.Button, {
			disabled: saveDisabled,
			onClick: handleSaveChanges,
			variant: "contained",
			color: "primary"
		}, (0, _wordpress_i18n.__)("Save changes", "elementor"))));
	}
	KitCustomizationDialog.propTypes = {
		open: import_prop_types.bool.isRequired,
		handleClose: import_prop_types.func.isRequired,
		handleSaveChanges: import_prop_types.func.isRequired,
		children: import_prop_types.node.isRequired,
		title: import_prop_types.string.isRequired,
		saveDisabled: import_prop_types.bool
	};
	//#endregion
	//#region core/app/modules/import-export-customization/assets/js/components/upgrade-tooltip.js
	var __defProp$7 = Object.defineProperty;
	var __getOwnPropSymbols$7 = Object.getOwnPropertySymbols;
	var __hasOwnProp$7 = Object.prototype.hasOwnProperty;
	var __propIsEnum$7 = Object.prototype.propertyIsEnumerable;
	var __defNormalProp$7 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$7(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value, "__defNormalProp");
	var __spreadValues$7 = /* @__PURE__ */ __name((a, b) => {
		for (var prop in b || (b = {})) if (__hasOwnProp$7.call(b, prop)) __defNormalProp$7(a, prop, b[prop]);
		if (__getOwnPropSymbols$7) {
			for (var prop of __getOwnPropSymbols$7(b)) if (__propIsEnum$7.call(b, prop)) __defNormalProp$7(a, prop, b[prop]);
		}
		return a;
	}, "__spreadValues");
	var __objRest = (source, exclude) => {
		var target = {};
		for (var prop in source) if (__hasOwnProp$7.call(source, prop) && exclude.indexOf(prop) < 0) target[prop] = source[prop];
		if (source != null && __getOwnPropSymbols$7) {
			for (var prop of __getOwnPropSymbols$7(source)) if (exclude.indexOf(prop) < 0 && __propIsEnum$7.call(source, prop)) target[prop] = source[prop];
		}
		return target;
	};
	var UpgradeTooltip = (_a) => {
		var _b = _a, { children, disabled = false, tooltip = false } = _b, props = __objRest(_b, [
			"children",
			"disabled",
			"tooltip"
		]);
		if (disabled && tooltip) return /* @__PURE__ */ react.default.createElement(_elementor_ui.Tooltip, __spreadValues$7({
			title: (0, _wordpress_i18n.__)("Upgrade your plan to choose which elements to adjust.", "elementor"),
			placement: "top",
			arrow: true,
			componentsProps: {
				tooltip: { sx: {
					maxWidth: 200,
					fontSize: "12px",
					fontWeight: 500,
					lineHeight: 1.4,
					textAlign: "center",
					backgroundColor: "background.paper",
					color: "text.secondary",
					padding: 1.5,
					boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)"
				} },
				arrow: { sx: {
					fontSize: "1.2rem",
					color: "background.paper",
					filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.15))",
					"&::before": { backgroundColor: "background.paper" }
				} }
			}
		}, props), /* @__PURE__ */ react.default.createElement(_elementor_ui.Box, { component: "span" }, children));
		return children;
	};
	UpgradeTooltip.propTypes = {
		children: import_prop_types.node.isRequired,
		disabled: import_prop_types.bool,
		tooltip: import_prop_types.bool
	};
	//#endregion
	//#region core/app/modules/import-export-customization/assets/js/components/customization-list-setting-section.js
	var __defProp$6 = Object.defineProperty;
	var __getOwnPropSymbols$6 = Object.getOwnPropertySymbols;
	var __hasOwnProp$6 = Object.prototype.hasOwnProperty;
	var __propIsEnum$6 = Object.prototype.propertyIsEnumerable;
	var __defNormalProp$6 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$6(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value, "__defNormalProp");
	var __spreadValues$6 = /* @__PURE__ */ __name((a, b) => {
		for (var prop in b || (b = {})) if (__hasOwnProp$6.call(b, prop)) __defNormalProp$6(a, prop, b[prop]);
		if (__getOwnPropSymbols$6) {
			for (var prop of __getOwnPropSymbols$6(b)) if (__propIsEnum$6.call(b, prop)) __defNormalProp$6(a, prop, b[prop]);
		}
		return a;
	}, "__spreadValues");
	var DEFAULT_VISIBLE_ITEMS_COUNT = 16;
	function ListSettingSection({ items, title, loading, settings, onSettingChange, settingKey, disabled = false, tooltip = false }) {
		const [showMore, setShowMore] = (0, react.useState)(false);
		return /* @__PURE__ */ react.default.createElement(_elementor_ui.Box, {
			key: settingKey,
			sx: {
				mb: 3,
				border: 1,
				borderRadius: 1,
				borderColor: "action.focus",
				p: 2.5
			}
		}, /* @__PURE__ */ react.default.createElement(_elementor_ui.Stack, { spacing: 2 }, /* @__PURE__ */ react.default.createElement(_elementor_ui.Typography, { variant: "h6" }, title), /* @__PURE__ */ react.default.createElement(_elementor_ui.Grid, {
			container: true,
			spacing: 1,
			alignItems: "start"
		}, loading ? /* @__PURE__ */ react.default.createElement(_elementor_ui.Grid, {
			item: true,
			xs: 12,
			sx: {
				p: 1,
				alignItems: "center",
				textAlign: "center"
			}
		}, /* @__PURE__ */ react.default.createElement(_elementor_ui.CircularProgress, { size: 30 })) : /* @__PURE__ */ react.default.createElement(react.default.Fragment, null, /* @__PURE__ */ react.default.createElement(_elementor_ui.Grid, {
			key: "all",
			item: true,
			xs: 12,
			sx: {
				py: 1,
				px: 0
			}
		}, /* @__PURE__ */ react.default.createElement(UpgradeTooltip, {
			disabled: disabled && settings.length === items.length,
			tooltip
		}, /* @__PURE__ */ react.default.createElement(_elementor_ui.Box, { sx: __spreadValues$6({ pointerEvents: "auto" }, settings.length === items.length && disabled && { cursor: "pointer" }) }, /* @__PURE__ */ react.default.createElement(_elementor_ui.FormControlLabel, {
			control: /* @__PURE__ */ react.default.createElement(_elementor_ui.Checkbox, {
				color: "info",
				checked: settings.length === items.length,
				indeterminate: settings.length > 0 && settings.length !== items.length,
				onChange: (e, checked) => {
					if (checked) onSettingChange(items.map(({ value }) => value), true);
					else onSettingChange([], true);
				},
				sx: { p: 0 },
				disabled
			}),
			sx: __spreadValues$6({ gap: 1 }, settings.length === items.length && disabled && { cursor: "pointer" }),
			slotProps: { typography: { sx: __spreadValues$6({ fontWeight: 500 }, settings.length === items.length && disabled && { cursor: "pointer" }) } },
			label: `${(0, _wordpress_i18n.__)("All", "elementor-pro")} ${title.toLowerCase()}`
		})))), (showMore ? items : items.slice(0, DEFAULT_VISIBLE_ITEMS_COUNT)).map((item) => {
			return /* @__PURE__ */ react.default.createElement(_elementor_ui.Grid, {
				key: item.value,
				item: true,
				xs: 3,
				sx: {
					py: 1,
					px: 0
				}
			}, /* @__PURE__ */ react.default.createElement(UpgradeTooltip, {
				disabled: disabled && settings.includes(item.value),
				tooltip
			}, /* @__PURE__ */ react.default.createElement(_elementor_ui.Box, { sx: __spreadValues$6({ pointerEvents: "auto" }, settings.includes(item.value) && disabled && { cursor: "pointer" }) }, /* @__PURE__ */ react.default.createElement(_elementor_ui.FormControlLabel, {
				control: /* @__PURE__ */ react.default.createElement(_elementor_ui.Checkbox, {
					color: "info",
					checked: settings.includes(item.value),
					onChange: (e, checked) => {
						if (checked) onSettingChange([...settings, item.value]);
						else onSettingChange(settings.filter((setting) => setting !== item.value));
					},
					sx: __spreadValues$6({ p: 0 }, settings.includes(item.value) && disabled && { cursor: "pointer" }),
					disabled
				}),
				sx: __spreadValues$6({
					maxWidth: "100%",
					gap: 1
				}, settings.includes(item.value) && disabled && { cursor: "pointer" }),
				slotProps: { typography: { sx: __spreadValues$6({
					fontWeight: 400,
					maxWidth: "100%",
					overflow: "hidden",
					textOverflow: "ellipsis",
					whiteSpace: "nowrap"
				}, settings.includes(item.value) && disabled && { cursor: "pointer" }) } },
				label: htmlDecodeTextContent(item.label)
			}))));
		})))), items.length > DEFAULT_VISIBLE_ITEMS_COUNT && /* @__PURE__ */ react.default.createElement(_elementor_ui.Button, {
			variant: "text",
			color: "info",
			onClick: () => setShowMore(!showMore)
		}, showMore ? (0, _wordpress_i18n.__)("Show less", "elementor") : (0, _wordpress_i18n.__)("Show more", "elementor")));
	}
	ListSettingSection.propTypes = {
		title: import_prop_types.string.isRequired,
		children: import_prop_types.node,
		loading: import_prop_types.bool,
		disabled: import_prop_types.bool,
		checked: import_prop_types.bool,
		settingKey: import_prop_types.string,
		onSettingChange: import_prop_types.func.isRequired,
		tooltip: import_prop_types.bool,
		items: import_prop_types.arrayOf(import_prop_types.shape({
			label: import_prop_types.string.isRequired,
			value: import_prop_types.oneOfType([import_prop_types.string, import_prop_types.number])
		})),
		settings: import_prop_types.arrayOf(import_prop_types.oneOfType([import_prop_types.string, import_prop_types.number]))
	};
	//#endregion
	//#region core/app/modules/import-export-customization/assets/js/components/customization-setting-section.js
	var __defProp$5 = Object.defineProperty;
	var __getOwnPropSymbols$5 = Object.getOwnPropertySymbols;
	var __hasOwnProp$5 = Object.prototype.hasOwnProperty;
	var __propIsEnum$5 = Object.prototype.propertyIsEnumerable;
	var __defNormalProp$5 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$5(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value, "__defNormalProp");
	var __spreadValues$5 = /* @__PURE__ */ __name((a, b) => {
		for (var prop in b || (b = {})) if (__hasOwnProp$5.call(b, prop)) __defNormalProp$5(a, prop, b[prop]);
		if (__getOwnPropSymbols$5) {
			for (var prop of __getOwnPropSymbols$5(b)) if (__propIsEnum$5.call(b, prop)) __defNormalProp$5(a, prop, b[prop]);
		}
		return a;
	}, "__spreadValues");
	var SettingSection = ({ checked = false, title, description, children, settingKey, onSettingChange, hasToggle = true, disabled = false, notExported = false, tooltip = false }) => {
		const getToggle = () => {
			if (notExported) return /* @__PURE__ */ react.default.createElement(_elementor_ui.Typography, {
				"data-testid": `${settingKey}-description`,
				variant: "body1",
				color: "text.secondary"
			}, (0, _wordpress_i18n.__)("Not exported", "elementor"));
			if (!hasToggle) return null;
			const switchElement = /* @__PURE__ */ react.default.createElement(_elementor_ui.Switch, {
				"data-testid": `${settingKey}-switch`,
				checked,
				onChange: (_, isChecked) => onSettingChange && onSettingChange(settingKey, isChecked),
				color: "info",
				size: "medium",
				sx: __spreadValues$5({ alignSelf: "center" }, disabled && tooltip && { cursor: "pointer" }),
				disabled
			});
			return /* @__PURE__ */ react.default.createElement(UpgradeTooltip, {
				disabled,
				tooltip
			}, switchElement);
		};
		return /* @__PURE__ */ react.default.createElement(_elementor_ui.Box, {
			key: settingKey,
			sx: {
				mb: 3,
				border: 1,
				borderRadius: 1,
				borderColor: "action.focus",
				p: 2.5
			}
		}, /* @__PURE__ */ react.default.createElement(_elementor_ui.Box, { sx: {
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center"
		} }, /* @__PURE__ */ react.default.createElement(_elementor_ui.Stack, { spacing: 1 }, /* @__PURE__ */ react.default.createElement(_elementor_ui.Typography, { variant: "h6" }, title), description && /* @__PURE__ */ react.default.createElement(_elementor_ui.Typography, {
			"data-testid": `${settingKey}-description`,
			variant: "body1",
			color: "text.secondary"
		}, description)), getToggle()), children && /* @__PURE__ */ react.default.createElement(_elementor_ui.Box, { sx: { mt: 1 } }, children));
	};
	SettingSection.propTypes = {
		title: import_prop_types.string.isRequired,
		description: import_prop_types.string,
		children: import_prop_types.node,
		hasToggle: import_prop_types.bool,
		checked: import_prop_types.bool,
		disabled: import_prop_types.bool,
		settingKey: import_prop_types.string,
		onSettingChange: import_prop_types.func,
		notExported: import_prop_types.bool,
		tooltip: import_prop_types.bool
	};
	//#endregion
	//#region core/app/modules/import-export-customization/assets/js/components/customization-sub-setting.js
	var __defProp$4 = Object.defineProperty;
	var __getOwnPropSymbols$4 = Object.getOwnPropertySymbols;
	var __hasOwnProp$4 = Object.prototype.hasOwnProperty;
	var __propIsEnum$4 = Object.prototype.propertyIsEnumerable;
	var __defNormalProp$4 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$4(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value, "__defNormalProp");
	var __spreadValues$4 = /* @__PURE__ */ __name((a, b) => {
		for (var prop in b || (b = {})) if (__hasOwnProp$4.call(b, prop)) __defNormalProp$4(a, prop, b[prop]);
		if (__getOwnPropSymbols$4) {
			for (var prop of __getOwnPropSymbols$4(b)) if (__propIsEnum$4.call(b, prop)) __defNormalProp$4(a, prop, b[prop]);
		}
		return a;
	}, "__spreadValues");
	var SubSetting = ({ label, settingKey, onSettingChange, checked = false, disabled = false, notExported = false, tooltip = false }) => {
		const getToggle = () => {
			if (notExported) return /* @__PURE__ */ react.default.createElement(_elementor_ui.Typography, {
				"data-testid": `${settingKey}-description`,
				variant: "body1",
				color: "text.secondary",
				sx: {
					fontWeight: 400,
					alignSelf: "center"
				}
			}, (0, _wordpress_i18n.__)("Not exported", "elementor"));
			const switchElement = /* @__PURE__ */ react.default.createElement(_elementor_ui.Switch, {
				"data-testid": `${settingKey}-switch`,
				checked,
				disabled,
				onChange: (_, isChecked) => onSettingChange && onSettingChange(settingKey, isChecked),
				color: "info",
				size: "medium",
				sx: __spreadValues$4({ alignSelf: "center" }, disabled && tooltip && { cursor: "pointer" })
			});
			return /* @__PURE__ */ react.default.createElement(UpgradeTooltip, {
				disabled,
				tooltip
			}, switchElement);
		};
		return /* @__PURE__ */ react.default.createElement(_elementor_ui.Box, { sx: {
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center"
		} }, /* @__PURE__ */ react.default.createElement(_elementor_ui.Typography, {
			"data-testid": `${settingKey}-label`,
			variant: "body1"
		}, label), getToggle());
	};
	SubSetting.propTypes = {
		checked: import_prop_types.bool,
		disabled: import_prop_types.bool,
		notExported: import_prop_types.bool,
		label: import_prop_types.string.isRequired,
		settingKey: import_prop_types.string.isRequired,
		onSettingChange: import_prop_types.func,
		tooltip: import_prop_types.bool
	};
	//#endregion
	//#region core/app/modules/import-export-customization/assets/js/hooks/use-tier.js
	var isHighTier = () => {
		try {
			var _elementorCommon;
			var _elementorCommon2;
			return "expert" === ((_elementorCommon = elementorCommon) === null || _elementorCommon === void 0 || (_elementorCommon = _elementorCommon.config) === null || _elementorCommon === void 0 || (_elementorCommon = _elementorCommon.library_connect) === null || _elementorCommon === void 0 ? void 0 : _elementorCommon.plan_type) || "agency" === ((_elementorCommon2 = elementorCommon) === null || _elementorCommon2 === void 0 || (_elementorCommon2 = _elementorCommon2.config) === null || _elementorCommon2 === void 0 || (_elementorCommon2 = _elementorCommon2.library_connect) === null || _elementorCommon2 === void 0 ? void 0 : _elementorCommon2.plan_type);
		} catch (error) {
			return false;
		}
	};
	//#endregion
	//#region core/app/modules/import-export-customization/assets/js/components/upgrade-notice-banner.js
	function UpgradeNoticeBanner() {
		if (isHighTier()) return null;
		return /* @__PURE__ */ react.default.createElement(_elementor_ui.Paper, { sx: {
			position: "sticky",
			bottom: 0,
			marginLeft: -3,
			marginRight: -3,
			zIndex: 1e3,
			py: 2,
			px: 3
		} }, /* @__PURE__ */ react.default.createElement(_elementor_ui.Paper, {
			elevation: 0,
			color: "promotion",
			sx: {
				borderRadius: 1,
				p: 2
			}
		}, /* @__PURE__ */ react.default.createElement(_elementor_ui.Box, { sx: {
			display: "flex",
			alignItems: "flex-start",
			justifyContent: "space-between",
			gap: 2
		} }, /* @__PURE__ */ react.default.createElement(_elementor_ui.Box, { sx: {
			flex: 1,
			minWidth: 0
		} }, /* @__PURE__ */ react.default.createElement(_elementor_ui.Typography, {
			variant: "body2",
			color: "text.secondary"
		}, (0, _wordpress_i18n.__)("Take control of your workflow. The Expert plan lets you decide exactly what's included in your export/import kits, from themes to experiments so nothing gets left behind.", "elementor"))), /* @__PURE__ */ react.default.createElement(_elementor_ui.Button, {
			variant: "outlined",
			color: "promotion",
			onClick: () => window.open("https://go.elementor.com/go-pro-import-export", "_blank"),
			startIcon: /* @__PURE__ */ react.default.createElement("span", { className: "eicon-upgrade-crown" }),
			sx: {
				flexShrink: 0,
				whiteSpace: "nowrap"
			}
		}, (0, _wordpress_i18n.__)("Check Expert plan", "elementor")))));
	}
	//#endregion
	//#region core/app/modules/import-export-customization/assets/js/hooks/use-pages.js
	var __async$2 = /* @__PURE__ */ __name((__this, __arguments, generator) => {
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
	function usePages({ skipLoading = false } = {}) {
		const [pages, setPages] = (0, react.useState)([]);
		const [isLoading, setIsLoading] = (0, react.useState)(false);
		const [error, setError] = (0, react.useState)(null);
		const [hasMorePages, setHasMorePages] = (0, react.useState)(true);
		const isLoaded = (0, react.useRef)(null);
		const fetchAllPages = (0, react.useCallback)(() => __async$2(null, null, function* () {
			var _a;
			if (isLoaded.current) return;
			try {
				setIsLoading(true);
				setError(null);
				setPages([]);
				setHasMorePages(true);
				let currentPage = 1;
				let allPages = [];
				while (hasMorePages || 1 === currentPage) {
					const baseUrl = new URL(elementorCommon.config.urls.rest, window.location.origin);
					const isPlainPermalink = "index.php" === baseUrl.pathname.replace(/\//g, "");
					baseUrl.pathname = isPlainPermalink ? baseUrl.pathname : `${baseUrl.pathname}wp/v2/pages`;
					if (isPlainPermalink) baseUrl.searchParams.set("rest_route", "/wp/v2/pages");
					baseUrl.searchParams.append("page", 1);
					baseUrl.searchParams.append("per_page", 100);
					baseUrl.searchParams.append("_embed", "");
					const response = yield fetch(baseUrl.toString(), {
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							"X-WP-Nonce": ((_a = window.wpApiSettings) == null ? void 0 : _a.nonce) || ""
						}
					});
					if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
					const data = yield response.json();
					const totalPages = parseInt(response.headers.get("X-WP-TotalPages") || "1");
					allPages = [...allPages, ...data];
					if (totalPages <= currentPage) {
						setHasMorePages(false);
						break;
					}
					currentPage++;
				}
				setPages(allPages);
				isLoaded.current = true;
			} catch (err) {
				setError(err.message);
			} finally {
				setIsLoading(false);
			}
		}), [hasMorePages]);
		const refreshPages = (0, react.useCallback)(() => {
			fetchAllPages();
		}, [fetchAllPages]);
		const pageOptions = (0, react.useMemo)(() => {
			return pages.map((page) => ({
				value: page.id,
				label: page.title.rendered
			}));
		}, [pages]);
		(0, react.useEffect)(() => {
			if (!skipLoading) fetchAllPages();
		}, [skipLoading]);
		return {
			pages,
			isLoading,
			error,
			refreshPages,
			pageOptions,
			isLoaded: isLoaded.current
		};
	}
	//#endregion
	//#region core/app/modules/import-export-customization/assets/js/hooks/use-kit-customization-pages.js
	function useKitCustomizationPages({ data, open }) {
		const isImport = data === null || data === void 0 ? void 0 : data.hasOwnProperty("uploadedData");
		const { isLoading, pageOptions: loadedPagesOptions, isLoaded } = usePages({ skipLoading: isImport || !open });
		return {
			isLoading,
			pageOptions: (0, react.useMemo)(() => {
				var _data$uploadedData;
				var _data$uploadedData2;
				if (!isImport) return loadedPagesOptions;
				const elementorPages = Object.entries((data === null || data === void 0 || (_data$uploadedData = data.uploadedData) === null || _data$uploadedData === void 0 || (_data$uploadedData = _data$uploadedData.manifest) === null || _data$uploadedData === void 0 || (_data$uploadedData = _data$uploadedData.content) === null || _data$uploadedData === void 0 ? void 0 : _data$uploadedData.page) || {}).map(([id, page]) => {
					return {
						value: id,
						label: page.title
					};
				});
				const wpPages = Object.entries((data === null || data === void 0 || (_data$uploadedData2 = data.uploadedData) === null || _data$uploadedData2 === void 0 || (_data$uploadedData2 = _data$uploadedData2.manifest) === null || _data$uploadedData2 === void 0 || (_data$uploadedData2 = _data$uploadedData2["wp-content"]) === null || _data$uploadedData2 === void 0 ? void 0 : _data$uploadedData2.page) || {}).map(([id, page]) => {
					return {
						value: id,
						label: page.title
					};
				});
				return [...elementorPages, ...wpPages];
			}, [
				loadedPagesOptions,
				isImport,
				data === null || data === void 0 ? void 0 : data.uploadedData
			]),
			isLoaded
		};
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
	//#region core/app/modules/import-export-customization/assets/js/hooks/use-taxonomies.js
	var fetchTaxonomies = function() {
		var _ref = _asyncToGenerator(function* () {
			var _window$wpApiSettings;
			const requestUrl = `${elementorCommon.config.urls.rest}wp/v2/taxonomies`;
			const response = yield fetch(requestUrl, { headers: {
				"Content-Type": "application/json",
				"X-WP-Nonce": ((_window$wpApiSettings = window.wpApiSettings) === null || _window$wpApiSettings === void 0 ? void 0 : _window$wpApiSettings.nonce) || ""
			} });
			const result = yield response.json();
			if (!response.ok) {
				var _result$data;
				var _result$data2;
				const errorMessage = (result === null || result === void 0 || (_result$data = result.data) === null || _result$data === void 0 ? void 0 : _result$data.message) || `HTTP error! with the following code: ${result === null || result === void 0 || (_result$data2 = result.data) === null || _result$data2 === void 0 ? void 0 : _result$data2.code}`;
				throw new Error(errorMessage);
			}
			return Object.values(result);
		});
		return function fetchTaxonomies() {
			return _ref.apply(this, arguments);
		};
	}();
	function useTaxonomies({ skipLoading = false, exclude = [] } = {}) {
		const [taxonomies, setTaxonomies] = (0, react.useState)([]);
		const [isLoading, setIsLoading] = (0, react.useState)(false);
		const [error, setError] = (0, react.useState)(null);
		const isLoaded = (0, react.useRef)(null);
		const fetchAllTaxonomies = (0, react.useCallback)(_asyncToGenerator(function* () {
			if (isLoaded.current) return;
			try {
				setIsLoading(true);
				setError(null);
				const data = yield fetchTaxonomies();
				setTaxonomies(exclude.length ? data.filter((taxonomy) => !exclude.includes(taxonomy.slug)) : data);
				isLoaded.current = true;
			} catch (err) {
				setError(err.message);
			} finally {
				setIsLoading(false);
			}
		}), []);
		const refreshTaxonomies = (0, react.useCallback)(() => {
			fetchAllTaxonomies();
		}, [fetchAllTaxonomies]);
		const taxonomyOptions = (0, react.useMemo)(() => {
			return taxonomies.map((taxonomy) => ({
				value: taxonomy.slug,
				label: taxonomy.name
			}));
		}, [taxonomies]);
		(0, react.useEffect)(() => {
			if (!skipLoading) fetchAllTaxonomies();
		}, [skipLoading]);
		return {
			taxonomies,
			isLoading,
			error,
			refreshTaxonomies,
			taxonomyOptions,
			isLoaded: isLoaded.current
		};
	}
	//#endregion
	//#region core/app/modules/import-export-customization/assets/js/hooks/use-kit-customization-taxonomies.js
	function useKitCustomizationTaxonomies({ data, open }) {
		const isImport = data === null || data === void 0 ? void 0 : data.hasOwnProperty("uploadedData");
		const { isLoading, taxonomyOptions: loadedTaxonomyOptions, isLoaded } = useTaxonomies({
			skipLoading: isImport || !open,
			exclude: ["nav_menu"]
		});
		return {
			taxonomyOptions: (0, react.useMemo)(() => {
				var _data$uploadedData;
				if (!isImport) return loadedTaxonomyOptions;
				const taxonomiesMap = {};
				Object.values((data === null || data === void 0 || (_data$uploadedData = data.uploadedData) === null || _data$uploadedData === void 0 || (_data$uploadedData = _data$uploadedData.manifest) === null || _data$uploadedData === void 0 ? void 0 : _data$uploadedData.taxonomies) || {}).forEach((taxonomiesListForPostType) => {
					taxonomiesListForPostType.forEach((taxonomy) => {
						const taxonomyObj = "string" === typeof taxonomy ? {
							name: taxonomy,
							label: taxonomy.split("_").join(" ")
						} : taxonomy;
						if (!taxonomiesMap[taxonomyObj.name]) taxonomiesMap[taxonomyObj.name] = {
							value: taxonomyObj.name,
							label: taxonomyObj.label
						};
					});
				});
				return Object.values(taxonomiesMap);
			}, [
				data === null || data === void 0 ? void 0 : data.uploadedData,
				isImport,
				loadedTaxonomyOptions
			]),
			isLoading,
			isLoaded
		};
	}
	//#endregion
	//#region core/app/modules/import-export-customization/assets/js/hooks/use-custom-post-types.js
	function useCustomPostTypes({ include = [] } = {}) {
		const [customPostTypes, setCustomPostTypes] = (0, react.useState)([]);
		(0, react.useEffect)(() => {
			var _elementorAppConfig$i;
			const cpt = Object.assign({}, ((_elementorAppConfig$i = elementorAppConfig["import-export-customization"]) === null || _elementorAppConfig$i === void 0 || (_elementorAppConfig$i = _elementorAppConfig$i.summaryTitles) === null || _elementorAppConfig$i === void 0 || (_elementorAppConfig$i = _elementorAppConfig$i.content) === null || _elementorAppConfig$i === void 0 ? void 0 : _elementorAppConfig$i.customPostTypes) || {});
			if (include.length) {
				var _elementorAppConfig$i2;
				Object.entries(((_elementorAppConfig$i2 = elementorAppConfig["import-export-customization"]) === null || _elementorAppConfig$i2 === void 0 || (_elementorAppConfig$i2 = _elementorAppConfig$i2.summaryTitles) === null || _elementorAppConfig$i2 === void 0 ? void 0 : _elementorAppConfig$i2.content) || {}).forEach(([postType, post]) => {
					if (include.includes(postType)) cpt[postType] = post;
				});
			}
			if (Object.keys(cpt).length) setCustomPostTypes(Object.entries(cpt).map(([postType, post]) => ({
				value: postType,
				label: post.single
			})));
		}, []);
		return { customPostTypes };
	}
	//#endregion
	//#region core/app/modules/import-export-customization/assets/js/hooks/use-kit-customization-custom-post-types.js
	function useKitCustomizationCustomPostTypes({ data }) {
		const isImport = data === null || data === void 0 ? void 0 : data.hasOwnProperty("uploadedData");
		const { customPostTypes: builtInCustomPostTypes } = useCustomPostTypes({ include: ["post"] });
		return { customPostTypes: (0, react.useMemo)(() => {
			var _data$uploadedData;
			var _data$uploadedData2;
			var _data$uploadedData3;
			if (!isImport) return builtInCustomPostTypes;
			const customPostTypesTitles = Object.values((data === null || data === void 0 || (_data$uploadedData = data.uploadedData) === null || _data$uploadedData === void 0 || (_data$uploadedData = _data$uploadedData.manifest) === null || _data$uploadedData === void 0 ? void 0 : _data$uploadedData["custom-post-type-title"]) || {}).map((postType) => {
				return {
					value: postType.name,
					label: postType.label
				};
			});
			if (!customPostTypesTitles.some((postType) => "post" === postType.value)) customPostTypesTitles.push({
				value: "post",
				label: "Post"
			});
			const wpContent = (data === null || data === void 0 || (_data$uploadedData2 = data.uploadedData) === null || _data$uploadedData2 === void 0 || (_data$uploadedData2 = _data$uploadedData2.manifest) === null || _data$uploadedData2 === void 0 ? void 0 : _data$uploadedData2["wp-content"]) || {};
			const content = (data === null || data === void 0 || (_data$uploadedData3 = data.uploadedData) === null || _data$uploadedData3 === void 0 || (_data$uploadedData3 = _data$uploadedData3.manifest) === null || _data$uploadedData3 === void 0 ? void 0 : _data$uploadedData3.content) || {};
			return customPostTypesTitles.filter((postType) => {
				const postTypeValue = postType.value;
				const wpContentObject = wpContent[postTypeValue];
				const isInWpContent = wpContentObject && "object" === typeof wpContentObject && Object.keys(wpContentObject).length > 0;
				const contentObject = content[postTypeValue];
				const isInElementorContent = contentObject && "object" === typeof contentObject && Object.keys(contentObject).length > 0;
				return isInWpContent || isInElementorContent;
			});
		}, [
			isImport,
			data === null || data === void 0 ? void 0 : data.uploadedData,
			builtInCustomPostTypes
		]) };
	}
	//#endregion
	//#region core/app/modules/import-export-customization/assets/js/components/upgrade-version-banner.js
	function UpgradeVersionBanner() {
		return /* @__PURE__ */ react.default.createElement(_elementor_ui.Paper, {
			color: "info",
			elevation: 0,
			variant: "elevation"
		}, /* @__PURE__ */ react.default.createElement(_elementor_ui.Stack, {
			direction: "row",
			sx: {
				alignItems: "center",
				justifyContent: "space-between",
				gap: "5px",
				py: 1.5,
				px: 2.5
			}
		}, /* @__PURE__ */ react.default.createElement(_elementor_ui.Stack, {
			direction: "row",
			sx: {
				alignItems: "center",
				gap: "5px"
			}
		}, /* @__PURE__ */ react.default.createElement(_elementor_ui.SvgIcon, {
			viewBox: "0 0 22 22",
			sx: {
				fontSize: 16,
				color: "info.light"
			}
		}, /* @__PURE__ */ react.default.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M4.58268 4.35352C4.5219 4.35352 4.46361 4.37766 4.42064 4.42064C4.37766 4.46361 4.35352 4.5219 4.35352 4.58268V6.64518H6.64518V4.35352H4.58268ZM4.58268 2.97852C4.15723 2.97852 3.7492 3.14753 3.44837 3.44837C3.14753 3.7492 2.97852 4.15723 2.97852 4.58268V17.416C2.97852 17.8415 3.14753 18.2495 3.44837 18.5503C3.74921 18.8512 4.15723 19.0202 4.58268 19.0202H17.416C17.8415 19.0202 18.2495 18.8512 18.5503 18.5503C18.8512 18.2495 19.0202 17.8415 19.0202 17.416V4.58268C19.0202 4.15723 18.8512 3.74921 18.5503 3.44837C18.2495 3.14753 17.8415 2.97852 17.416 2.97852H4.58268ZM8.02018 4.35352V6.64518H17.6452V4.58268C17.6452 4.5219 17.621 4.46361 17.5781 4.42064C17.5351 4.37766 17.4768 4.35352 17.416 4.35352H8.02018ZM17.6452 8.02018H4.35352V17.416C4.35352 17.4768 4.37766 17.5351 4.42064 17.5781C4.46361 17.621 4.5219 17.6452 4.58268 17.6452H17.416C17.4768 17.6452 17.5351 17.621 17.5781 17.5781C17.621 17.5351 17.6452 17.4768 17.6452 17.416V8.02018Z",
			fill: "currentColor"
		})), /* @__PURE__ */ react.default.createElement(_elementor_ui.Typography, { variant: "body2" }, (0, _wordpress_i18n.__)("YouвЂ™re using an older Elementor version. Update for full customization.", "elementor"))), /* @__PURE__ */ react.default.createElement(_elementor_ui.Button, {
			variant: "outlined",
			onClick: () => {
				var _a;
				return window.open((_a = elementorAppConfig["import-export-customization"]) == null ? void 0 : _a.upgradeVersionUrl, "_blank");
			},
			color: "info"
		}, (0, _wordpress_i18n.__)("Update version", "elementor"))));
	}
	//#endregion
	//#region core/app/modules/import-export-customization/assets/js/utils/analytics-transformer.js
	var ANALYTICS_TRANSFORM_RULES = {
		STRING: (value) => value,
		BOOLEAN: (value) => value,
		EMPTY_ARRAY: () => "None",
		FULL_ARRAY: () => "All",
		PARTIAL_ARRAY: () => "Partial"
	};
	var getTotalAvailableCount = (key, optionsArray) => {
		return optionsArray.reduce((map, { key: optionKey, options }) => {
			map[optionKey] = options.length;
			return map;
		}, {})[key] || 0;
	};
	var transformValueForAnalytics = (key, value, optionsArray) => {
		if ("string" === typeof value || "boolean" === typeof value) return ANALYTICS_TRANSFORM_RULES[(typeof value).toUpperCase()](value);
		if ("object" === typeof value && value !== null && !Array.isArray(value) && "enabled" in value) return value.enabled;
		if (Array.isArray(value)) {
			if (0 === value.length) return ANALYTICS_TRANSFORM_RULES.EMPTY_ARRAY();
			const totalAvailable = getTotalAvailableCount(key, optionsArray);
			return value.length === totalAvailable ? ANALYTICS_TRANSFORM_RULES.FULL_ARRAY() : ANALYTICS_TRANSFORM_RULES.PARTIAL_ARRAY();
		}
		return value;
	};
	//#endregion
	//#region core/app/modules/import-export-customization/assets/js/components/kit-content-customization-dialog.js
	var __defProp$3 = Object.defineProperty;
	var __defProps$3 = Object.defineProperties;
	var __getOwnPropDescs$3 = Object.getOwnPropertyDescriptors;
	var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
	var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
	var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
	var __defNormalProp$3 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$3(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value, "__defNormalProp");
	var __spreadValues$3 = /* @__PURE__ */ __name((a, b) => {
		for (var prop in b || (b = {})) if (__hasOwnProp$3.call(b, prop)) __defNormalProp$3(a, prop, b[prop]);
		if (__getOwnPropSymbols$3) {
			for (var prop of __getOwnPropSymbols$3(b)) if (__propIsEnum$3.call(b, prop)) __defNormalProp$3(a, prop, b[prop]);
		}
		return a;
	}, "__spreadValues");
	var __spreadProps$3 = /* @__PURE__ */ __name((a, b) => __defProps$3(a, __getOwnPropDescs$3(b)), "__spreadProps");
	var MEDIA_FORMAT_OPTIONS = {
		LINK: "link",
		CLOUD: "cloud"
	};
	var MEDIA_FORMAT_CONFIG = [{
		value: MEDIA_FORMAT_OPTIONS.LINK,
		title: (0, _wordpress_i18n.__)("Link to media", "elementor-pro"),
		description: (0, _wordpress_i18n.__)("Stores only the URLs. The export stays light, but files load only while the original site is online.", "elementor-pro")
	}, {
		value: MEDIA_FORMAT_OPTIONS.CLOUD,
		title: (0, _wordpress_i18n.__)("Save media to the cloud", "elementor-pro"),
		description: (0, _wordpress_i18n.__)("All images and files are stored with the template. Keeps everything intact, but the file is larger.", "elementor-pro")
	}];
	var transformAnalyticsData$2 = /* @__PURE__ */ __name((payload, pageOptions, taxonomyOptions, customPostTypes) => {
		const optionsArray = [
			{
				key: "pages",
				options: pageOptions
			},
			{
				key: "taxonomies",
				options: taxonomyOptions
			},
			{
				key: "customPostTypes",
				options: customPostTypes
			}
		];
		const transformed = {};
		for (const [key, value] of Object.entries(payload)) transformed[key] = transformValueForAnalytics(key, value, optionsArray);
		return transformed;
	}, "transformAnalyticsData");
	function KitContentCustomizationDialog({ open, handleClose, handleSaveChanges, data, isImport, isOldExport, isOldElementorVersion, isCloudKitsEligible = false, showMediaFormatValidation = false }) {
		var _a;
		var _b;
		var _c;
		var _d;
		var _e;
		var _f;
		var _g;
		const initialState = data.includes.includes("content");
		const { isLoading: isPagesLoading, pageOptions, isLoaded: isPagesLoaded } = useKitCustomizationPages({
			open,
			data
		});
		const { isLoading: isTaxonomiesLoading, taxonomyOptions, isLoaded: isTaxonomiesLoaded } = useKitCustomizationTaxonomies({
			open,
			data
		});
		const { customPostTypes } = useKitCustomizationCustomPostTypes({ data });
		const alertRef = (0, react.useRef)(null);
		const mediaFormatSectionRef = (0, react.useRef)(null);
		const [settings, setSettings] = (0, react.useState)(() => {
			if (data.customization.content) return data.customization.content;
			return {
				pages: [],
				menus: initialState,
				taxonomies: [],
				customPostTypes: [],
				mediaFormat: MEDIA_FORMAT_OPTIONS.LINK
			};
		});
		(0, react.useEffect)(() => {
			if (!open || data.includes.includes("content")) return;
			setSettings({
				pages: [],
				menus: false,
				taxonomies: [],
				customPostTypes: [],
				mediaFormat: MEDIA_FORMAT_OPTIONS.LINK
			});
		}, [open, data.includes]);
		(0, react.useEffect)(() => {
			if (!open || !data.includes.includes("content")) return;
			setSettings((prevSettings) => {
				var _a2;
				return __spreadProps$3(__spreadValues$3({}, prevSettings), { pages: isPagesLoaded || isImport ? ((_a2 = data.customization.content) == null ? void 0 : _a2.pages) || pageOptions.map(({ value }) => value) : prevSettings.pages });
			});
		}, [
			open,
			data.includes,
			(_a = data.customization.content) == null ? void 0 : _a.pages,
			isPagesLoaded,
			isImport,
			pageOptions
		]);
		(0, react.useEffect)(() => {
			if (!open || !data.includes.includes("content")) return;
			setSettings((prevSettings) => {
				var _a2;
				return __spreadProps$3(__spreadValues$3({}, prevSettings), { taxonomies: isTaxonomiesLoaded || isImport ? ((_a2 = data.customization.content) == null ? void 0 : _a2.taxonomies) || taxonomyOptions.map(({ value }) => value) : prevSettings.taxonomies });
			});
		}, [
			open,
			data.includes,
			(_b = data.customization.content) == null ? void 0 : _b.taxonomies,
			isTaxonomiesLoaded,
			isImport,
			taxonomyOptions
		]);
		(0, react.useEffect)(() => {
			if (!open || !data.includes.includes("content")) return;
			setSettings((prevSettings) => {
				var _a2;
				return __spreadProps$3(__spreadValues$3({}, prevSettings), { customPostTypes: customPostTypes ? ((_a2 = data.customization.content) == null ? void 0 : _a2.customPostTypes) || customPostTypes.map(({ value }) => value) : prevSettings.customPostTypes });
			});
		}, [
			open,
			data.includes,
			(_c = data.customization.content) == null ? void 0 : _c.customPostTypes,
			customPostTypes
		]);
		(0, react.useEffect)(() => {
			if (!open || !data.includes.includes("content")) return;
			setSettings((prevSettings) => {
				var _a2;
				var _b2;
				var _c2;
				var _d2;
				var _e2;
				return __spreadProps$3(__spreadValues$3({}, prevSettings), { menus: isImport ? ((_a2 = data.customization.content) == null ? void 0 : _a2.menus) || Object.keys(((_c2 = (_b2 = data == null ? void 0 : data.uploadedData) == null ? void 0 : _b2.manifest["wp-content"]) == null ? void 0 : _c2.nav_menu_item) || {}).length > 0 : (_e2 = (_d2 = data.customization.content) == null ? void 0 : _d2.menus) != null ? _e2 : initialState });
			});
		}, [
			open,
			data.includes,
			(_d = data.customization.content) == null ? void 0 : _d.menus,
			(_e = data.uploadedData) == null ? void 0 : _e.manifest,
			isImport
		]);
		(0, react.useEffect)(() => {
			if (!open || !data.includes.includes("content")) return;
			setSettings((prevSettings) => {
				var _a2;
				return __spreadProps$3(__spreadValues$3({}, prevSettings), { mediaFormat: ((_a2 = data.customization.content) == null ? void 0 : _a2.mediaFormat) || MEDIA_FORMAT_OPTIONS.LINK });
			});
		}, [
			open,
			data.includes,
			(_f = data.customization.content) == null ? void 0 : _f.mediaFormat
		]);
		(0, react.useEffect)(() => {
			var _a2;
			var _b2;
			var _c2;
			if (open) (_c2 = (_b2 = (_a2 = window.elementorModules) == null ? void 0 : _a2.appsEventTracking) == null ? void 0 : _b2.AppsEventTracking) == null || _c2.sendPageViewsWebsiteTemplates(elementorCommon.eventsManager.config.secondaryLocations.kitLibrary.kitExportCustomizationEdit);
		}, [open]);
		(0, react.useEffect)(() => {
			if (showMediaFormatValidation) setTimeout(() => {
				const targetElement = alertRef.current || mediaFormatSectionRef.current;
				if (targetElement) targetElement.scrollIntoView({
					behavior: "smooth",
					block: "center"
				});
			});
		}, [showMediaFormatValidation]);
		const handleSettingsChange = (settingKey, payload) => {
			setSettings((prev) => __spreadProps$3(__spreadValues$3({}, prev), { [settingKey]: payload }));
		};
		const isTaxonomiesExported = () => {
			return isImport && (taxonomyOptions == null ? void 0 : taxonomyOptions.length) > 0;
		};
		const isPagesExported = () => {
			var _a2;
			var _b2;
			var _c2;
			var _d2;
			var _e2;
			var _f2;
			const content = (_b2 = (_a2 = data == null ? void 0 : data.uploadedData) == null ? void 0 : _a2.manifest) == null ? void 0 : _b2.content;
			const wpContent = (_d2 = (_c2 = data == null ? void 0 : data.uploadedData) == null ? void 0 : _c2.manifest) == null ? void 0 : _d2["wp-content"];
			const isSomeContentExported = (_e2 = Object.keys((content == null ? void 0 : content.page) || {})) == null ? void 0 : _e2.length;
			const isSomeWPContentExported = (_f2 = Object.keys((wpContent == null ? void 0 : wpContent.page) || {})) == null ? void 0 : _f2.length;
			return Boolean(isSomeContentExported || isSomeWPContentExported);
		};
		const isMenusExported = () => {
			var _a2;
			var _b2;
			var _c2;
			return Object.keys(((_c2 = (_b2 = (_a2 = data == null ? void 0 : data.uploadedData) == null ? void 0 : _a2.manifest) == null ? void 0 : _b2["wp-content"]) == null ? void 0 : _c2.nav_menu_item) || {}).length > 0 || (customPostTypes == null ? void 0 : customPostTypes.find((cpt) => cpt.value.includes("nav_menu")));
		};
		const isCustomPostTypesExported = () => {
			return isImport && (customPostTypes == null ? void 0 : customPostTypes.length) > 0;
		};
		const renderPagesSection = () => {
			if (isImport && isOldExport) return null;
			return isImport && !isPagesExported() ? /* @__PURE__ */ react.default.createElement(SettingSection, {
				title: (0, _wordpress_i18n.__)("Site pages", "elementor-pro"),
				settingKey: "pages",
				notExported: true
			}) : /* @__PURE__ */ react.default.createElement(ListSettingSection, {
				settingKey: "pages",
				title: (0, _wordpress_i18n.__)("Site pages", "elementor-pro"),
				onSettingChange: (selectedPages) => {
					handleSettingsChange("pages", selectedPages);
				},
				settings: settings.pages,
				items: pageOptions,
				loading: isPagesLoading,
				disabled: !isHighTier(),
				tooltip: !isHighTier()
			});
		};
		const renderMenusSection = () => {
			if (isImport && isOldExport) return null;
			return /* @__PURE__ */ react.default.createElement(SettingSection, {
				checked: settings.menus,
				disabled: isImport && !isMenusExported() || !isHighTier(),
				title: (0, _wordpress_i18n.__)("Menus", "elementor-pro"),
				settingKey: "menus",
				tooltip: !isHighTier(),
				onSettingChange: (key, isChecked) => {
					handleSettingsChange(key, isChecked);
				}
			});
		};
		const renderMediaFormatSection = () => {
			if (isImport) return /* @__PURE__ */ react.default.createElement(SettingSection, {
				title: (0, _wordpress_i18n.__)("Media format", "elementor-pro"),
				settingKey: "mediaFormat",
				hasToggle: false
			}, /* @__PURE__ */ react.default.createElement(_elementor_ui.Alert, {
				icon: /* @__PURE__ */ react.default.createElement(_elementor_ui.SvgIcon, {
					color: "info",
					viewBox: "0 0 24 24"
				}, /* @__PURE__ */ react.default.createElement("path", {
					d: "M11.8623 14.7549C12.3665 14.8061 12.7598 15.2322 12.7598 15.75C12.7598 16.2678 12.3665 16.6939 11.8623 16.7451L11.7598 16.75H11.75C11.1977 16.75 10.75 16.3023 10.75 15.75C10.75 15.1977 11.1977 14.75 11.75 14.75H11.7598L11.8623 14.7549Z",
					fill: "currentColor"
				}), /* @__PURE__ */ react.default.createElement("path", {
					d: "M11.75 7C12.1642 7 12.5 7.33579 12.5 7.75V12.75C12.5 13.1642 12.1642 13.5 11.75 13.5C11.3358 13.5 11 13.1642 11 12.75V7.75C11 7.33579 11.3358 7 11.75 7Z",
					fill: "currentColor"
				}), /* @__PURE__ */ react.default.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M11.75 2C17.1348 2 21.5 6.36522 21.5 11.75C21.5 17.1348 17.1348 21.5 11.75 21.5C6.36522 21.5 2 17.1348 2 11.75C2 6.36522 6.36522 2 11.75 2ZM11.75 3.5C7.19365 3.5 3.5 7.19365 3.5 11.75C3.5 16.3063 7.19365 20 11.75 20C16.3063 20 20 16.3063 20 11.75C20 7.19365 16.3063 3.5 11.75 3.5Z",
					fill: "currentColor"
				})),
				sx: {
					backgroundColor: "transparent",
					p: 0
				}
			}, /* @__PURE__ */ react.default.createElement(_elementor_ui.Typography, {
				variant: "body2",
				color: "text.primary"
			}, /* @__PURE__ */ react.default.createElement("strong", null, (0, _wordpress_i18n.__)("Note:", "elementor-pro")), " ", (0, _wordpress_i18n.__)("The media will be uploaded automatically, just as it was saved during export", "elementor-pro"))));
			if (!isImport && !isCloudKitsEligible) return null;
			return /* @__PURE__ */ react.default.createElement(SettingSection, {
				ref: mediaFormatSectionRef,
				description: (0, _wordpress_i18n.__)("Select how do you want to save & export the media files.", "elementor-pro"),
				title: (0, _wordpress_i18n.__)("Media format", "elementor-pro"),
				settingKey: "mediaFormat",
				hasToggle: false,
				disabled: !isHighTier(),
				tooltip: !isHighTier()
			}, /* @__PURE__ */ react.default.createElement(_elementor_ui.Box, { sx: { pt: 2.5 } }, /* @__PURE__ */ react.default.createElement(_elementor_ui.FormControl, {
				component: "fieldset",
				disabled: !isHighTier(),
				sx: { width: "100%" }
			}, /* @__PURE__ */ react.default.createElement(_elementor_ui.RadioGroup, {
				value: settings.mediaFormat,
				onChange: (event) => {
					handleSettingsChange("mediaFormat", event.target.value);
				},
				sx: { width: "100%" }
			}, MEDIA_FORMAT_CONFIG.map((option, index) => /* @__PURE__ */ react.default.createElement(_elementor_ui.Box, {
				key: option.value,
				sx: {
					border: 1,
					borderColor: settings.mediaFormat === option.value ? "info.light" : "divider",
					borderRadius: 2,
					p: 1,
					mb: index < MEDIA_FORMAT_CONFIG.length - 1 ? 1.5 : 0,
					width: "100%"
				}
			}, /* @__PURE__ */ react.default.createElement(_elementor_ui.FormControlLabel, {
				value: option.value,
				control: /* @__PURE__ */ react.default.createElement(_elementor_ui.Radio, {
					color: "info",
					"data-testid": `media-format-${option.value}`
				}),
				label: /* @__PURE__ */ react.default.createElement(_elementor_ui.Box, null, /* @__PURE__ */ react.default.createElement(_elementor_ui.Typography, {
					variant: "body2",
					sx: { mb: .25 }
				}, option.title), /* @__PURE__ */ react.default.createElement(_elementor_ui.Typography, {
					variant: "body2",
					color: "text.secondary"
				}, option.description)),
				sx: {
					alignItems: "flex-start",
					m: 0,
					width: "100%"
				}
			}))))), showMediaFormatValidation && /* @__PURE__ */ react.default.createElement(_elementor_ui.Alert, {
				ref: alertRef,
				icon: /* @__PURE__ */ react.default.createElement(_elementor_ui.SvgIcon, {
					color: "error",
					viewBox: "0 0 24 24"
				}, /* @__PURE__ */ react.default.createElement("path", {
					d: "M11.8623 14.7549C12.3665 14.8061 12.7598 15.2322 12.7598 15.75C12.7598 16.2678 12.3665 16.6939 11.8623 16.7451L11.7598 16.75H11.75C11.1977 16.75 10.75 16.3023 10.75 15.75C10.75 15.1977 11.1977 14.75 11.75 14.75H11.7598L11.8623 14.7549Z",
					fill: "currentColor"
				}), /* @__PURE__ */ react.default.createElement("path", {
					d: "M11.75 7C12.1642 7 12.5 7.33579 12.5 7.75V12.75C12.5 13.1642 12.1642 13.5 11.75 13.5C11.3358 13.5 11 13.1642 11 12.75V7.75C11 7.33579 11.3358 7 11.75 7Z",
					fill: "currentColor"
				}), /* @__PURE__ */ react.default.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M11.75 2C17.1348 2 21.5 6.36522 21.5 11.75C21.5 17.1348 17.1348 21.5 11.75 21.5C6.36522 21.5 2 17.1348 2 11.75C2 6.36522 6.36522 2 11.75 2ZM11.75 3.5C7.19365 3.5 3.5 7.19365 3.5 11.75C3.5 16.3063 7.19365 20 11.75 20C16.3063 20 20 16.3063 20 11.75C20 7.19365 16.3063 3.5 11.75 3.5Z",
					fill: "currentColor"
				})),
				sx: {
					mt: 2,
					ml: 1,
					backgroundColor: "transparent",
					p: 0
				}
			}, /* @__PURE__ */ react.default.createElement(_elementor_ui.Typography, {
				variant: "body2",
				color: "text.primary"
			}, /* @__PURE__ */ react.default.createElement("strong", null, (0, _wordpress_i18n.__)("Note:", "elementor-pro")), " ", (0, _wordpress_i18n.__)("To export a ZIP, go to Edit Content, choose 'Link to Media', then Export as ZIP.", "elementor-pro"), /* @__PURE__ */ react.default.createElement("br", null), (0, _wordpress_i18n.__)("Or, save this template to the cloud instead.", "elementor-pro")))));
		};
		const renderTaxonomiesSection = () => {
			if (isImport && isOldExport) return null;
			return /* @__PURE__ */ react.default.createElement(SettingSection, {
				description: (0, _wordpress_i18n.__)("Group your content by type, topic, or any structure you choose.", "elementor-pro"),
				title: (0, _wordpress_i18n.__)("Taxonomies", "elementor-pro"),
				settingKey: "taxonomies",
				notExported: isImport && !isTaxonomiesExported(),
				hasToggle: false
			}, isTaxonomiesLoading ? /* @__PURE__ */ react.default.createElement(_elementor_ui.Box, { sx: {
				p: 1,
				alignItems: "center",
				textAlign: "center"
			} }, /* @__PURE__ */ react.default.createElement(_elementor_ui.CircularProgress, { size: 30 })) : taxonomyOptions.map((taxonomy) => {
				return /* @__PURE__ */ react.default.createElement(SubSetting, {
					key: taxonomy.value,
					label: taxonomy.label,
					settingKey: `taxonomies_${taxonomy.value}`,
					checked: settings.taxonomies.includes(taxonomy.value),
					disabled: !isHighTier(),
					tooltip: !isHighTier(),
					onSettingChange: (key, isChecked) => {
						setSettings((prevState) => {
							const selectedTaxonomies = isChecked ? [...prevState.taxonomies, taxonomy.value] : prevState.taxonomies.filter((value) => value !== taxonomy.value);
							return __spreadProps$3(__spreadValues$3({}, prevState), { taxonomies: selectedTaxonomies });
						});
					}
				});
			}));
		};
		return /* @__PURE__ */ react.default.createElement(KitCustomizationDialog, {
			open,
			title: (0, _wordpress_i18n.__)("Edit content", "elementor-pro"),
			handleClose,
			handleSaveChanges: () => {
				const hasEnabledCustomization = settings.pages.length > 0 || settings.menus || settings.customPostTypes.length > 0 || settings.taxonomies.length > 0 || settings.mediaFormat !== MEDIA_FORMAT_OPTIONS.LINK;
				const transformedAnalytics = transformAnalyticsData$2(settings, pageOptions, taxonomyOptions, customPostTypes);
				handleSaveChanges("content", settings, hasEnabledCustomization, transformedAnalytics);
				handleClose();
			}
		}, /* @__PURE__ */ react.default.createElement(_elementor_ui.Stack, {
			sx: { position: "relative" },
			gap: 2
		}, isOldElementorVersion && /* @__PURE__ */ react.default.createElement(UpgradeVersionBanner, null), /* @__PURE__ */ react.default.createElement(_elementor_ui.Stack, null, renderPagesSection(), isImport && !isCustomPostTypesExported() ? /* @__PURE__ */ react.default.createElement(SettingSection, {
			title: (0, _wordpress_i18n.__)("Custom post types", "elementor-pro"),
			settingKey: "customPostTypes",
			notExported: true
		}) : /* @__PURE__ */ react.default.createElement(ListSettingSection, {
			settingKey: "customPostTypes",
			title: (0, _wordpress_i18n.__)("Custom post types", "elementor-pro"),
			onSettingChange: (selectedCustomPostTypes) => {
				handleSettingsChange("customPostTypes", selectedCustomPostTypes);
			},
			settings: settings.customPostTypes,
			items: customPostTypes,
			disabled: isImport && void 0 === ((_g = data == null ? void 0 : data.uploadedData) == null ? void 0 : _g.manifest["custom-post-type-title"]) || !isHighTier(),
			tooltip: !isHighTier()
		}), renderMediaFormatSection(), renderMenusSection(), renderTaxonomiesSection()), /* @__PURE__ */ react.default.createElement(UpgradeNoticeBanner, null)));
	}
	KitContentCustomizationDialog.propTypes = {
		open: import_prop_types.bool.isRequired,
		isImport: import_prop_types.bool,
		isOldExport: import_prop_types.bool,
		isOldElementorVersion: import_prop_types.bool,
		handleClose: import_prop_types.func.isRequired,
		handleSaveChanges: import_prop_types.func.isRequired,
		data: import_prop_types.object.isRequired,
		isCloudKitsEligible: import_prop_types.bool,
		showMediaFormatValidation: import_prop_types.bool
	};
	//#endregion
	//#region core/app/modules/import-export-customization/assets/js/components/theme-builder-customization.js
	var __defProp$2 = Object.defineProperty;
	var __defProps$2 = Object.defineProperties;
	var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
	var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
	var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
	var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
	var __defNormalProp$2 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$2(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value, "__defNormalProp");
	var __spreadValues$2 = /* @__PURE__ */ __name((a, b) => {
		for (var prop in b || (b = {})) if (__hasOwnProp$2.call(b, prop)) __defNormalProp$2(a, prop, b[prop]);
		if (__getOwnPropSymbols$2) {
			for (var prop of __getOwnPropSymbols$2(b)) if (__propIsEnum$2.call(b, prop)) __defNormalProp$2(a, prop, b[prop]);
		}
		return a;
	}, "__spreadValues");
	var __spreadProps$2 = /* @__PURE__ */ __name((a, b) => __defProps$2(a, __getOwnPropDescs$2(b)), "__spreadProps");
	var __async$1 = /* @__PURE__ */ __name((__this, __arguments, generator) => {
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
	function ThemeBuilderCustomization({ state, settingKey, onStateChange, data, disabled, tooltip = false }) {
		const isImport = data.hasOwnProperty("uploadedData");
		const [conflicts, setConflicts] = (0, react.useState)([]);
		const [loading, setLoading] = (0, react.useState)(false);
		(0, react.useEffect)(() => {
			if ((state == null ? void 0 : state.enabled) && isImport) loadConflicts();
			else {
				setConflicts([]);
				setLoading(false);
			}
		}, [
			state == null ? void 0 : state.enabled,
			isImport,
			data
		]);
		const loadConflicts = () => __async$1(null, null, function* () {
			var _a;
			setLoading(true);
			try {
				const formattedConflicts = (((_a = data == null ? void 0 : data.uploadedData) == null ? void 0 : _a.conflicts) ? Object.entries(data.uploadedData.conflicts) : []).map(([importedTemplateId, conflictsList]) => {
					var _a2;
					var _b;
					var _c;
					const importedTemplate = (_c = (_b = (_a2 = data == null ? void 0 : data.uploadedData) == null ? void 0 : _a2.manifest) == null ? void 0 : _b.templates) == null ? void 0 : _c[importedTemplateId];
					const firstConflict = conflictsList[0];
					return {
						template_id: firstConflict.template_id,
						template_name: firstConflict.template_title,
						edit_url: firstConflict.edit_url,
						imported_template_id: parseInt(importedTemplateId),
						imported_template_name: (importedTemplate == null ? void 0 : importedTemplate.title) || "Unknown Template",
						location: (importedTemplate == null ? void 0 : importedTemplate.location) || "",
						location_label: getTemplateTypeLabel(importedTemplateId)
					};
				});
				setConflicts(formattedConflicts);
				if (!(state == null ? void 0 : state.overrideConditions) || 0 === state.overrideConditions.length) {
					const defaultOverrides = formattedConflicts.map((conflict) => conflict.imported_template_id);
					onStateChange(settingKey, __spreadProps$2(__spreadValues$2({}, state), { overrideConditions: defaultOverrides }));
				}
			} catch (error) {
				setConflicts([]);
			} finally {
				setLoading(false);
			}
		});
		const getTemplateTypeLabel = (templateId) => {
			var _a;
			var _b;
			var _c;
			var _d;
			var _e;
			var _f;
			const template = (_c = (_b = (_a = data == null ? void 0 : data.uploadedData) == null ? void 0 : _a.manifest) == null ? void 0 : _b.templates) == null ? void 0 : _c[templateId];
			if (!template) return "Unknown Template";
			const templateType = template.doc_type;
			const summaryTitle = (_f = (_e = (_d = elementorAppConfig == null ? void 0 : elementorAppConfig["import-export-customization"]) == null ? void 0 : _d.summaryTitles) == null ? void 0 : _e.templates) == null ? void 0 : _f[templateType];
			return (summaryTitle == null ? void 0 : summaryTitle.single) || templateType;
		};
		const handleToggleEnabled = () => {
			const newState = { enabled: !(state == null ? void 0 : state.enabled) };
			if (isImport) newState.overrideConditions = (state == null ? void 0 : state.enabled) ? [] : (state == null ? void 0 : state.overrideConditions) || [];
			onStateChange(settingKey, newState);
		};
		const handleConflictChoice = (location, choice, importedTemplateId) => {
			const currentOverrides = (state == null ? void 0 : state.overrideConditions) || [];
			let newOverrides;
			if ("imported" === choice) if (!currentOverrides.includes(importedTemplateId)) newOverrides = [...currentOverrides, importedTemplateId];
			else newOverrides = currentOverrides;
			else newOverrides = currentOverrides.filter((templateId) => templateId !== importedTemplateId);
			onStateChange(settingKey, __spreadProps$2(__spreadValues$2({}, state), { overrideConditions: newOverrides }));
		};
		const getConflictChoice = (importedTemplateId) => {
			return ((state == null ? void 0 : state.overrideConditions) || []).includes(importedTemplateId) ? "imported" : "current";
		};
		const renderConflictTable = () => {
			if (loading) return /* @__PURE__ */ react.default.createElement(_elementor_ui.Typography, {
				variant: "body2",
				color: "text.secondary"
			}, (0, _wordpress_i18n.__)("Checking for conflicts...", "elementor-pro"));
			return /* @__PURE__ */ react.default.createElement(_elementor_ui.Stack, { spacing: 2 }, /* @__PURE__ */ react.default.createElement(_elementor_ui.Alert, { severity: "warning" }, /* @__PURE__ */ react.default.createElement(_elementor_ui.AlertTitle, { key: "title" }, (0, _wordpress_i18n.__)("Conflicted part", "elementor-pro")), (0, _wordpress_i18n.__)("Some parts are in conflict. Choose which one you want to assign.", "elementor-pro")), /* @__PURE__ */ react.default.createElement(_elementor_ui.TableContainer, {
				component: _elementor_ui.Box,
				sx: {
					maxWidth: "100%",
					border: 1,
					borderRadius: 1,
					borderColor: "action.focus"
				}
			}, /* @__PURE__ */ react.default.createElement(_elementor_ui.Table, { size: "small" }, /* @__PURE__ */ react.default.createElement(_elementor_ui.TableHead, null, /* @__PURE__ */ react.default.createElement(_elementor_ui.TableRow, null, /* @__PURE__ */ react.default.createElement(_elementor_ui.TableCell, null, (0, _wordpress_i18n.__)("Conflicted part", "elementor-pro")), /* @__PURE__ */ react.default.createElement(_elementor_ui.TableCell, null, (0, _wordpress_i18n.__)("Current site part", "elementor-pro")), /* @__PURE__ */ react.default.createElement(_elementor_ui.TableCell, null, (0, _wordpress_i18n.__)("Imported template part", "elementor-pro")))), /* @__PURE__ */ react.default.createElement(_elementor_ui.TableBody, null, conflicts.map((conflict, index) => /* @__PURE__ */ react.default.createElement(_elementor_ui.TableRow, { key: index }, /* @__PURE__ */ react.default.createElement(_elementor_ui.TableCell, null, /* @__PURE__ */ react.default.createElement(_elementor_ui.Typography, {
				variant: "body2",
				fontWeight: "medium"
			}, getTemplateTypeLabel(conflict.imported_template_id))), /* @__PURE__ */ react.default.createElement(_elementor_ui.TableCell, null, /* @__PURE__ */ react.default.createElement(_elementor_ui.FormControlLabel, {
				control: /* @__PURE__ */ react.default.createElement(_elementor_ui.Radio, {
					checked: "current" === getConflictChoice(conflict.imported_template_id, conflict.location),
					onChange: () => handleConflictChoice(conflict.location, "current", conflict.imported_template_id),
					size: "small"
				}),
				label: conflict.template_name
			})), /* @__PURE__ */ react.default.createElement(_elementor_ui.TableCell, null, /* @__PURE__ */ react.default.createElement(_elementor_ui.FormControlLabel, {
				control: /* @__PURE__ */ react.default.createElement(_elementor_ui.Radio, {
					checked: "imported" === getConflictChoice(conflict.imported_template_id, conflict.location),
					onChange: () => handleConflictChoice(conflict.location, "imported", conflict.imported_template_id),
					size: "small"
				}),
				label: conflict.imported_template_name
			}))))))));
		};
		return /* @__PURE__ */ react.default.createElement(_elementor_ui.Box, { sx: {
			mb: 3,
			border: 1,
			borderRadius: 1,
			borderColor: "action.focus",
			p: 2.5
		} }, /* @__PURE__ */ react.default.createElement(_elementor_ui.Box, { sx: {
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center"
		} }, /* @__PURE__ */ react.default.createElement(_elementor_ui.Stack, { spacing: 1 }, /* @__PURE__ */ react.default.createElement(_elementor_ui.Typography, { variant: "h6" }, (0, _wordpress_i18n.__)("Theme builder", "elementor-pro")), /* @__PURE__ */ react.default.createElement(_elementor_ui.Link, {
			href: elementorAppConfig.base_url + "#/site-editor/templates",
			target: "_blank",
			rel: "noopener noreferrer",
			color: "info.light",
			underline: "hover",
			sx: {
				display: "inline-flex",
				alignItems: "center",
				gap: .5
			}
		}, (0, _wordpress_i18n.__)("Check your themes builder", "elementor-pro"), /* @__PURE__ */ react.default.createElement(_elementor_icons.ExternalLinkIcon, null))), /* @__PURE__ */ react.default.createElement(UpgradeTooltip, {
			disabled,
			tooltip
		}, /* @__PURE__ */ react.default.createElement(_elementor_ui.Switch, {
			"data-testid": `${settingKey}-switch`,
			checked: (state == null ? void 0 : state.enabled) || false,
			disabled,
			onChange: handleToggleEnabled,
			color: "info",
			size: "medium",
			sx: __spreadValues$2({ alignSelf: "center" }, disabled && tooltip && { cursor: "pointer" })
		}))), (state == null ? void 0 : state.enabled) && isImport && 0 < conflicts.length && /* @__PURE__ */ react.default.createElement(_elementor_ui.Box, { sx: { mt: 1 } }, renderConflictTable()));
	}
	ThemeBuilderCustomization.propTypes = {
		state: import_prop_types.object.isRequired,
		settingKey: import_prop_types.string.isRequired,
		onStateChange: import_prop_types.func.isRequired,
		data: import_prop_types.object.isRequired,
		disabled: import_prop_types.bool,
		tooltip: import_prop_types.bool
	};
	//#endregion
	//#region core/app/modules/import-export-customization/assets/js/components/kit-templates-customization-dialog.js
	var __defProp$1 = Object.defineProperty;
	var __defProps$1 = Object.defineProperties;
	var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
	var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
	var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
	var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
	var __defNormalProp$1 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$1(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value, "__defNormalProp");
	var __spreadValues$1 = /* @__PURE__ */ __name((a, b) => {
		for (var prop in b || (b = {})) if (__hasOwnProp$1.call(b, prop)) __defNormalProp$1(a, prop, b[prop]);
		if (__getOwnPropSymbols$1) {
			for (var prop of __getOwnPropSymbols$1(b)) if (__propIsEnum$1.call(b, prop)) __defNormalProp$1(a, prop, b[prop]);
		}
		return a;
	}, "__spreadValues");
	var __spreadProps$1 = /* @__PURE__ */ __name((a, b) => __defProps$1(a, __getOwnPropDescs$1(b)), "__spreadProps");
	var transformAnalyticsData$1 = /* @__PURE__ */ __name((payload) => {
		const transformed = {};
		for (const [key, value] of Object.entries(payload)) transformed[key] = transformValueForAnalytics(key, value, []);
		return transformed;
	}, "transformAnalyticsData");
	var hasTemplatesForExportGroup = (exportGroup, manifest) => {
		var _a;
		if (!(manifest == null ? void 0 : manifest.templates)) return false;
		const exportGroups = ((_a = elementorAppConfig == null ? void 0 : elementorAppConfig["import-export-customization"]) == null ? void 0 : _a.exportGroups) || {};
		return Object.values(manifest.templates).some((template) => {
			if (!template || typeof template !== "object" || !template.doc_type) return false;
			return exportGroups[template.doc_type] === exportGroup;
		});
	};
	function KitTemplatesCustomizationDialog({ open, handleClose, handleSaveChanges, data, isImport, isOldExport, isOldElementorVersion }) {
		var _a;
		var _b;
		var _c;
		var _d;
		var _e;
		var _f;
		var _g;
		const initialState = data.includes.includes("templates");
		const getState = (0, react.useCallback)((parentInitialState) => {
			var _a2;
			var _b2;
			var _c2;
			var _d2;
			var _e2;
			var _f2;
			var _g2;
			var _h;
			var _i;
			var _j;
			var _k;
			var _l;
			var _m;
			var _n;
			var _o;
			var _p;
			var _q;
			var _r;
			if (!data.includes.includes("templates")) return {
				siteTemplates: { enabled: parentInitialState },
				themeBuilder: { enabled: parentInitialState },
				globalWidgets: { enabled: parentInitialState }
			};
			if (isImport) return {
				siteTemplates: { enabled: isImport && isOldExport ? true : (_b2 = hasTemplatesForExportGroup("site-templates", (_a2 = data == null ? void 0 : data.uploadedData) == null ? void 0 : _a2.manifest)) != null ? _b2 : parentInitialState },
				themeBuilder: { enabled: isImport && isOldExport ? true : (_d2 = hasTemplatesForExportGroup("theme-builder", (_c2 = data == null ? void 0 : data.uploadedData) == null ? void 0 : _c2.manifest)) != null ? _d2 : parentInitialState },
				globalWidgets: { enabled: isImport && isOldExport ? true : (_f2 = hasTemplatesForExportGroup("global-widget", (_e2 = data == null ? void 0 : data.uploadedData) == null ? void 0 : _e2.manifest)) != null ? _f2 : parentInitialState }
			};
			return {
				siteTemplates: { enabled: (_j = (_i = (_h = (_g2 = data == null ? void 0 : data.customization) == null ? void 0 : _g2.templates) == null ? void 0 : _h.siteTemplates) == null ? void 0 : _i.enabled) != null ? _j : parentInitialState },
				themeBuilder: { enabled: (_n = (_m = (_l = (_k = data == null ? void 0 : data.customization) == null ? void 0 : _k.templates) == null ? void 0 : _l.themeBuilder) == null ? void 0 : _m.enabled) != null ? _n : parentInitialState },
				globalWidgets: { enabled: (_r = (_q = (_p = (_o = data == null ? void 0 : data.customization) == null ? void 0 : _o.templates) == null ? void 0 : _p.globalWidgets) == null ? void 0 : _q.enabled) != null ? _r : parentInitialState }
			};
		}, [
			data.includes,
			(_a = data == null ? void 0 : data.uploadedData) == null ? void 0 : _a.manifest,
			(_b = data == null ? void 0 : data.customization) == null ? void 0 : _b.templates,
			isImport,
			isOldExport
		]);
		const [templates, setTemplates] = (0, react.useState)({});
		(0, react.useEffect)(() => {
			if (open) if (data.customization.templates) setTemplates(data.customization.templates);
			else {
				const state = getState(initialState);
				setTemplates(state);
			}
		}, [
			open,
			data.customization.templates,
			data == null ? void 0 : data.uploadedData,
			initialState,
			getState
		]);
		(0, react.useEffect)(() => {
			var _a2;
			var _b2;
			if (open) (_b2 = (_a2 = elementorModules == null ? void 0 : elementorModules.appsEventTracking) == null ? void 0 : _a2.AppsEventTracking) == null || _b2.sendPageViewsWebsiteTemplates(elementorCommon.eventsManager.config.secondaryLocations.kitLibrary.kitExportCustomizationEdit);
		}, [open]);
		const handleToggleChange = (settingKey, isChecked) => {
			setTemplates((prev) => __spreadProps$1(__spreadValues$1({}, prev), { [settingKey]: __spreadProps$1(__spreadValues$1({}, prev[settingKey]), { enabled: isChecked }) }));
		};
		return /* @__PURE__ */ react.default.createElement(KitCustomizationDialog, {
			open,
			title: (0, _wordpress_i18n.__)("Edit templates", "elementor"),
			handleClose,
			handleSaveChanges: () => {
				var _a2;
				var _b2;
				var _c2;
				const hasEnabledCustomization = ((_a2 = templates.siteTemplates) == null ? void 0 : _a2.enabled) || ((_b2 = templates.themeBuilder) == null ? void 0 : _b2.enabled) || ((_c2 = templates.globalWidgets) == null ? void 0 : _c2.enabled);
				const transformedAnalytics = transformAnalyticsData$1(templates);
				handleSaveChanges("templates", templates, hasEnabledCustomization, transformedAnalytics);
				handleClose();
			},
			minHeight: "auto"
		}, /* @__PURE__ */ react.default.createElement(_elementor_ui.Stack, {
			sx: { position: "relative" },
			gap: 2
		}, isOldElementorVersion && /* @__PURE__ */ react.default.createElement(UpgradeVersionBanner, null), /* @__PURE__ */ react.default.createElement(_elementor_ui.Stack, null, !isOldExport && /* @__PURE__ */ react.default.createElement(SettingSection, {
			checked: ((_c = templates.siteTemplates) == null ? void 0 : _c.enabled) || false,
			title: (0, _wordpress_i18n.__)("Site Templates", "elementor"),
			settingKey: "siteTemplates",
			onSettingChange: handleToggleChange,
			disabled: !isHighTier() || isImport && !hasTemplatesForExportGroup("site-templates", (_d = data == null ? void 0 : data.uploadedData) == null ? void 0 : _d.manifest),
			tooltip: !isHighTier()
		}), /* @__PURE__ */ react.default.createElement(ThemeBuilderCustomization, {
			state: templates.themeBuilder,
			settingKey: "themeBuilder",
			onStateChange: (key, newState, mergeMode = false) => {
				setTemplates((prev) => {
					if (mergeMode) return __spreadProps$1(__spreadValues$1({}, prev), { [key]: __spreadValues$1(__spreadValues$1({}, prev[key]), newState) });
					return __spreadProps$1(__spreadValues$1({}, prev), { [key]: newState });
				});
			},
			data,
			disabled: !isHighTier() || isImport && !hasTemplatesForExportGroup("theme-builder", (_e = data == null ? void 0 : data.uploadedData) == null ? void 0 : _e.manifest),
			tooltip: !isHighTier()
		}), !isOldExport && /* @__PURE__ */ react.default.createElement(SettingSection, {
			checked: ((_f = templates.globalWidgets) == null ? void 0 : _f.enabled) || false,
			title: "Global Widgets",
			settingKey: "globalWidgets",
			onSettingChange: handleToggleChange,
			disabled: !isHighTier() || isImport && !hasTemplatesForExportGroup("global-widget", (_g = data == null ? void 0 : data.uploadedData) == null ? void 0 : _g.manifest),
			tooltip: !isHighTier()
		})), /* @__PURE__ */ react.default.createElement(UpgradeNoticeBanner, null)));
	}
	KitTemplatesCustomizationDialog.propTypes = {
		open: import_prop_types.bool.isRequired,
		isImport: import_prop_types.bool,
		isOldExport: import_prop_types.bool,
		isOldElementorVersion: import_prop_types.bool,
		handleClose: import_prop_types.func.isRequired,
		handleSaveChanges: import_prop_types.func.isRequired,
		data: import_prop_types.object.isRequired
	};
	//#endregion
	//#region core/app/modules/import-export-customization/assets/js/components/classes-variables-section.js
	var SubSettingRow = ({ label, checked, onChange, disabled = false, limitExceeded = false, overLimitCount = 0, onReviewClick, overrideAll = false, onOverrideAllChange, showOverrideOption = false, notExported = false }) => {
		if (notExported) return /* @__PURE__ */ react.default.createElement(_elementor_ui.Box, { sx: {
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
			px: 1.25
		} }, /* @__PURE__ */ react.default.createElement(_elementor_ui.Typography, {
			variant: "body1",
			color: "text.primary"
		}, label), /* @__PURE__ */ react.default.createElement(_elementor_ui.Typography, {
			variant: "body1",
			color: "text.secondary"
		}, (0, _wordpress_i18n.__)("Not exported", "elementor")));
		return /* @__PURE__ */ react.default.createElement(_elementor_ui.Box, { sx: {
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
			px: 1.25
		} }, /* @__PURE__ */ react.default.createElement(_elementor_ui.Stack, {
			direction: "row",
			alignItems: "center",
			spacing: 1,
			sx: { flex: 1 }
		}, /* @__PURE__ */ react.default.createElement(_elementor_ui.Typography, {
			variant: "body1",
			color: "text.primary"
		}, label), limitExceeded && overLimitCount > 0 && /* @__PURE__ */ react.default.createElement(_elementor_ui.Chip, {
			label: `${overLimitCount} ${(0, _wordpress_i18n.__)("over limit", "elementor")}`,
			size: "tiny",
			sx: {
				height: 20,
				borderColor: "warning.main",
				color: "warning.main",
				backgroundColor: "transparent",
				"& .MuiChip-label": {
					px: .75,
					fontSize: 12
				}
			},
			variant: "outlined"
		}), limitExceeded && onReviewClick && /* @__PURE__ */ react.default.createElement(_elementor_ui.Link, {
			component: "button",
			variant: "body2",
			color: "info.main",
			onClick: onReviewClick,
			sx: {
				display: "flex",
				alignItems: "center",
				gap: .5,
				textDecoration: "none",
				"&:hover": { textDecoration: "underline" }
			}
		}, (0, _wordpress_i18n.__)("Review", "elementor"), /* @__PURE__ */ react.default.createElement(_elementor_icons.ExternalLinkIcon, { sx: { fontSize: 16 } }))), /* @__PURE__ */ react.default.createElement(_elementor_ui.Stack, {
			direction: "row",
			alignItems: "center",
			spacing: 1
		}, showOverrideOption && limitExceeded && /* @__PURE__ */ react.default.createElement(_elementor_ui.Stack, {
			direction: "row",
			alignItems: "center",
			spacing: .5
		}, /* @__PURE__ */ react.default.createElement(_elementor_ui.FormControlLabel, {
			control: /* @__PURE__ */ react.default.createElement(_elementor_ui.Checkbox, {
				checked: overrideAll,
				onChange: (e) => onOverrideAllChange == null ? void 0 : onOverrideAllChange(e.target.checked),
				color: "info",
				size: "small",
				sx: { p: 0 }
			}),
			label: (0, _wordpress_i18n.__)("Override all", "elementor"),
			sx: {
				gap: 1,
				mr: 0,
				"& .MuiFormControlLabel-label": { fontSize: 14 }
			}
		}), /* @__PURE__ */ react.default.createElement(_elementor_ui.Tooltip, {
			title: (0, _wordpress_i18n.__)("This will delete all existing items and replace them with the imported ones", "elementor"),
			placement: "top",
			arrow: true
		}, /* @__PURE__ */ react.default.createElement(_elementor_icons.AlertTriangleFilledIcon, { sx: {
			fontSize: 16,
			color: "warning.main",
			cursor: "pointer"
		} }))), /* @__PURE__ */ react.default.createElement(_elementor_ui.Switch, {
			checked,
			onChange: (e, isChecked) => onChange == null ? void 0 : onChange(isChecked),
			color: "info",
			size: "medium",
			disabled: disabled || limitExceeded && !overrideAll
		})));
	};
	SubSettingRow.propTypes = {
		label: import_prop_types.string.isRequired,
		checked: import_prop_types.bool,
		onChange: import_prop_types.func,
		disabled: import_prop_types.bool,
		limitExceeded: import_prop_types.bool,
		overLimitCount: import_prop_types.number,
		onReviewClick: import_prop_types.func,
		overrideAll: import_prop_types.bool,
		onOverrideAllChange: import_prop_types.func,
		showOverrideOption: import_prop_types.bool,
		notExported: import_prop_types.bool
	};
	function ClassesVariablesSection({ settings, onSettingChange, isImport = false, classesExported = true, variablesExported = true, classesLimitExceeded = false, variablesLimitExceeded = false, classesOverLimitCount = 0, variablesOverLimitCount = 0, onClassesReviewClick, onVariablesReviewClick, disabled = false, notExported = false }) {
		var _a;
		var _b;
		var _c;
		var _d;
		const [classesOverrideAll, setClassesOverrideAll] = (0, react.useState)((_a = settings.classesOverrideAll) != null ? _a : false);
		const [variablesOverrideAll, setVariablesOverrideAll] = (0, react.useState)((_b = settings.variablesOverrideAll) != null ? _b : false);
		const hasLimitWarning = isImport && (classesLimitExceeded || variablesLimitExceeded);
		const classesNotExported = isImport && !classesExported;
		const variablesNotExported = isImport && !variablesExported;
		return /* @__PURE__ */ react.default.createElement(_elementor_ui.Box, { sx: {
			mb: 3,
			border: 1,
			borderRadius: 1,
			borderColor: "action.focus",
			p: 2.5
		} }, /* @__PURE__ */ react.default.createElement(_elementor_ui.Stack, { spacing: 2.5 }, /* @__PURE__ */ react.default.createElement(_elementor_ui.Box, { sx: {
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center"
		} }, /* @__PURE__ */ react.default.createElement(_elementor_ui.Typography, { variant: "h6" }, (0, _wordpress_i18n.__)("Classes & variables", "elementor"))), hasLimitWarning && !notExported && /* @__PURE__ */ react.default.createElement(_elementor_ui.Alert, {
			severity: "warning",
			icon: /* @__PURE__ */ react.default.createElement(_elementor_icons.AlertTriangleFilledIcon, { sx: { color: "warning.main" } }),
			sx: {
				alignItems: "center",
				backgroundColor: "warning.background",
				"& .MuiAlert-message": {
					display: "flex",
					alignItems: "center",
					gap: .75
				}
			}
		}, /* @__PURE__ */ react.default.createElement(_elementor_ui.Typography, {
			variant: "body2",
			component: "span",
			sx: { fontWeight: 500 },
			color: "text.secondary"
		}, (0, _wordpress_i18n.__)("Import limit reached.", "elementor")), /* @__PURE__ */ react.default.createElement(_elementor_ui.Typography, {
			variant: "body2",
			component: "span",
			color: "text.secondary"
		}, (0, _wordpress_i18n.__)("To resolve this, review existing items or choose to override", "elementor"))), /* @__PURE__ */ react.default.createElement(_elementor_ui.Stack, { spacing: 1.5 }, /* @__PURE__ */ react.default.createElement(SubSettingRow, {
			label: (0, _wordpress_i18n.__)("Classes", "elementor"),
			checked: (_c = settings.classes) != null ? _c : false,
			onChange: (isChecked) => onSettingChange("classes", isChecked),
			disabled,
			limitExceeded: isImport && classesLimitExceeded && !classesNotExported,
			overLimitCount: classesOverLimitCount,
			onReviewClick: onClassesReviewClick,
			overrideAll: classesOverrideAll,
			onOverrideAllChange: (checked) => {
				setClassesOverrideAll(checked);
				onSettingChange("classesOverrideAll", checked);
			},
			showOverrideOption: isImport && !classesNotExported,
			notExported: classesNotExported
		}), /* @__PURE__ */ react.default.createElement(SubSettingRow, {
			label: (0, _wordpress_i18n.__)("Variables", "elementor"),
			checked: (_d = settings.variables) != null ? _d : false,
			onChange: (isChecked) => onSettingChange("variables", isChecked),
			disabled,
			limitExceeded: isImport && variablesLimitExceeded && !variablesNotExported,
			overLimitCount: variablesOverLimitCount,
			onReviewClick: onVariablesReviewClick,
			overrideAll: variablesOverrideAll,
			onOverrideAllChange: (checked) => {
				setVariablesOverrideAll(checked);
				onSettingChange("variablesOverrideAll", checked);
			},
			showOverrideOption: isImport && !variablesNotExported,
			notExported: variablesNotExported
		}))));
	}
	ClassesVariablesSection.propTypes = {
		settings: import_prop_types.shape({
			classes: import_prop_types.bool,
			variables: import_prop_types.bool,
			classesOverrideAll: import_prop_types.bool,
			variablesOverrideAll: import_prop_types.bool
		}).isRequired,
		onSettingChange: import_prop_types.func.isRequired,
		isImport: import_prop_types.bool,
		classesExported: import_prop_types.bool,
		variablesExported: import_prop_types.bool,
		classesLimitExceeded: import_prop_types.bool,
		variablesLimitExceeded: import_prop_types.bool,
		classesOverLimitCount: import_prop_types.number,
		variablesOverLimitCount: import_prop_types.number,
		onClassesReviewClick: import_prop_types.func,
		onVariablesReviewClick: import_prop_types.func,
		disabled: import_prop_types.bool,
		notExported: import_prop_types.bool
	};
	//#endregion
	//#region core/app/modules/import-export-customization/assets/js/components/override-confirmation-dialog.js
	var getDialogContent = (type) => {
		switch (type) {
			case "both": return {
				title: (0, _wordpress_i18n.__)("Override all classes and variables?", "elementor"),
				description: (0, _wordpress_i18n.__)("This will delete all existing classes and variables and replace them with the imported ones. This action cannot be undone.", "elementor")
			};
			case "variables": return {
				title: (0, _wordpress_i18n.__)("Override all variables?", "elementor"),
				description: (0, _wordpress_i18n.__)("This will delete all existing variables and replace them with the imported ones. This action cannot be undone.", "elementor")
			};
			default: return {
				title: (0, _wordpress_i18n.__)("Override all classes?", "elementor"),
				description: (0, _wordpress_i18n.__)("This will delete all existing classes and replace them with the imported ones. This action cannot be undone.", "elementor")
			};
		}
	};
	function OverrideConfirmationDialog({ open, onClose, onConfirm, type = "classes" }) {
		const { title, description } = getDialogContent(type);
		return /* @__PURE__ */ react.default.createElement(_elementor_ui.Dialog, {
			open,
			onClose,
			maxWidth: "xs",
			fullWidth: true
		}, /* @__PURE__ */ react.default.createElement(_elementor_ui.DialogContent, { sx: {
			pt: 2,
			pb: 1.5
		} }, /* @__PURE__ */ react.default.createElement(_elementor_ui.Stack, { spacing: 1.5 }, /* @__PURE__ */ react.default.createElement(_elementor_ui.Stack, {
			direction: "row",
			justifyContent: "space-between",
			alignItems: "flex-start"
		}, /* @__PURE__ */ react.default.createElement(_elementor_ui.Stack, {
			direction: "row",
			spacing: 1.5,
			alignItems: "flex-start",
			sx: { flex: 1 }
		}, /* @__PURE__ */ react.default.createElement(_elementor_icons.AlertTriangleFilledIcon, { sx: {
			color: "warning.dark",
			fontSize: 24,
			flexShrink: 0
		} }), /* @__PURE__ */ react.default.createElement(_elementor_ui.Typography, {
			variant: "subtitle1",
			sx: { fontWeight: 500 }
		}, title)), /* @__PURE__ */ react.default.createElement(_elementor_ui.Button, {
			onClick: onClose,
			sx: {
				minWidth: "auto",
				p: .5,
				color: "text.primary"
			}
		}, /* @__PURE__ */ react.default.createElement(_elementor_icons.XIcon, { sx: { fontSize: 20 } }))), /* @__PURE__ */ react.default.createElement(_elementor_ui.Typography, {
			variant: "body2",
			color: "text.secondary",
			sx: { pr: 1 }
		}, description))), /* @__PURE__ */ react.default.createElement(_elementor_ui.DialogActions, { sx: {
			px: 3,
			pb: 2
		} }, /* @__PURE__ */ react.default.createElement(_elementor_ui.Button, {
			onClick: onClose,
			color: "secondary",
			variant: "text"
		}, (0, _wordpress_i18n.__)("Cancel", "elementor")), /* @__PURE__ */ react.default.createElement(_elementor_ui.Button, {
			onClick: onConfirm,
			variant: "contained",
			sx: {
				color: "white",
				backgroundColor: "warning.main",
				"&:hover": { backgroundColor: "warning.dark" }
			}
		}, (0, _wordpress_i18n.__)("Save and override", "elementor"))));
	}
	OverrideConfirmationDialog.propTypes = {
		open: import_prop_types.bool.isRequired,
		onClose: import_prop_types.func.isRequired,
		onConfirm: import_prop_types.func.isRequired,
		type: import_prop_types.oneOf([
			"classes",
			"variables",
			"both"
		])
	};
	//#endregion
	//#region core/app/modules/import-export-customization/assets/js/hooks/use-tab-focus.js
	function useTabFocus(callback) {
		(0, react.useEffect)(() => {
			const handleVisibilityChange = () => {
				if ("visible" === document.visibilityState) callback();
			};
			document.addEventListener("visibilitychange", handleVisibilityChange);
			return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
		}, [callback]);
	}
	//#endregion
	//#region core/app/modules/import-export-customization/assets/js/hooks/use-classes-variables-limits.js
	var DEFAULT_CLASSES_LIMIT = 100;
	var DEFAULT_VARIABLES_LIMIT = 100;
	function getLimitsFromConfig() {
		var _window$elementorAppC;
		var _config$limits$classe;
		var _config$limits;
		var _config$limits$variab;
		var _config$limits2;
		const config = (_window$elementorAppC = window.elementorAppConfig) === null || _window$elementorAppC === void 0 ? void 0 : _window$elementorAppC["import-export-customization"];
		return {
			classes: (_config$limits$classe = config === null || config === void 0 || (_config$limits = config.limits) === null || _config$limits === void 0 ? void 0 : _config$limits.classes) !== null && _config$limits$classe !== void 0 ? _config$limits$classe : DEFAULT_CLASSES_LIMIT,
			variables: (_config$limits$variab = config === null || config === void 0 || (_config$limits2 = config.limits) === null || _config$limits2 === void 0 ? void 0 : _config$limits2.variables) !== null && _config$limits$variab !== void 0 ? _config$limits$variab : DEFAULT_VARIABLES_LIMIT
		};
	}
	function useClassesVariablesLimits({ open, isImport }) {
		const [existingClassesCount, setExistingClassesCount] = (0, react.useState)(0);
		const [existingVariablesCount, setExistingVariablesCount] = (0, react.useState)(0);
		const [isLoading, setIsLoading] = (0, react.useState)(false);
		const [error, setError] = (0, react.useState)(null);
		const limits = (0, react.useMemo)(() => getLimitsFromConfig(), []);
		const fetchCounts = (0, react.useCallback)(_asyncToGenerator(function* () {
			if (!open || !isImport) return;
			setIsLoading(true);
			setError(null);
			try {
				var _window$wpApiSettings;
				var _window$wpApiSettings2;
				const baseUrl = ((_window$wpApiSettings = window.wpApiSettings) === null || _window$wpApiSettings === void 0 ? void 0 : _window$wpApiSettings.root) || "/wp-json/";
				const nonce = ((_window$wpApiSettings2 = window.wpApiSettings) === null || _window$wpApiSettings2 === void 0 ? void 0 : _window$wpApiSettings2.nonce) || "";
				const [classesResponse, variablesResponse] = yield Promise.all([fetch(`${baseUrl}elementor/v1/global-classes`, { headers: { "X-WP-Nonce": nonce } }), fetch(`${baseUrl}elementor/v1/variables/list`, { headers: { "X-WP-Nonce": nonce } })]);
				if (classesResponse.ok) {
					const classesData = yield classesResponse.json();
					const classesCount = Object.keys((classesData === null || classesData === void 0 ? void 0 : classesData.data) || {}).length;
					setExistingClassesCount(classesCount);
				}
				if (variablesResponse.ok) {
					var _variablesData$data;
					const variablesData = yield variablesResponse.json();
					const variablesCount = (variablesData === null || variablesData === void 0 || (_variablesData$data = variablesData.data) === null || _variablesData$data === void 0 ? void 0 : _variablesData$data.total) || 0;
					setExistingVariablesCount(variablesCount);
				}
			} catch (err) {
				setError(err);
			} finally {
				setIsLoading(false);
			}
		}), [open, isImport]);
		(0, react.useEffect)(() => {
			fetchCounts();
		}, [fetchCounts]);
		useTabFocus(fetchCounts);
		const calculateLimitInfo = (0, react.useCallback)((existingCount, importedCount, limit) => {
			const totalAfterImport = existingCount + importedCount;
			const isExceeded = totalAfterImport > limit;
			return {
				isExceeded,
				overLimitCount: isExceeded ? totalAfterImport - limit : 0,
				totalAfterImport
			};
		}, []);
		return {
			existingClassesCount,
			existingVariablesCount,
			classesLimit: limits.classes,
			variablesLimit: limits.variables,
			isLoading,
			error,
			calculateLimitInfo,
			refetch: fetchCounts
		};
	}
	//#endregion
	//#region core/app/modules/import-export-customization/assets/js/components/kit-settings-customization-dialog.js
	var __defProp = Object.defineProperty;
	var __defProps = Object.defineProperties;
	var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
	var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
	function isExperimentActive(experimentName) {
		var _a;
		var _b;
		return !!((_b = (_a = elementorCommon == null ? void 0 : elementorCommon.config) == null ? void 0 : _a.experimentalFeatures) == null ? void 0 : _b[experimentName]);
	}
	function isClassesFeatureActive() {
		return isExperimentActive("e_atomic_elements");
	}
	function isVariablesFeatureActive() {
		return isExperimentActive("e_atomic_elements");
	}
	function isClassesExported(data) {
		var _a;
		var _b;
		var _c;
		return !!((_c = (_b = (_a = data == null ? void 0 : data.uploadedData) == null ? void 0 : _a.manifest) == null ? void 0 : _b["site-settings"]) == null ? void 0 : _c.classes);
	}
	function isVariablesExported(data) {
		var _a;
		var _b;
		var _c;
		return !!((_c = (_b = (_a = data == null ? void 0 : data.uploadedData) == null ? void 0 : _a.manifest) == null ? void 0 : _b["site-settings"]) == null ? void 0 : _c.variables);
	}
	var transformAnalyticsData = (payload) => {
		const transformed = {};
		for (const [key, value] of Object.entries(payload)) transformed[key] = transformValueForAnalytics(key, value, []);
		return transformed;
	};
	function fetchManagerUrl(panelId) {
		return __async(this, null, function* () {
			var _a;
			var _b;
			var _c;
			const baseUrl = ((_a = window.wpApiSettings) == null ? void 0 : _a.root) || "/wp-json/";
			const nonce = ((_b = window.wpApiSettings) == null ? void 0 : _b.nonce) || "";
			const response = yield fetch(`${baseUrl}elementor/v1/import-export-customization/manager-url?panel=${panelId}`, { headers: { "X-WP-Nonce": nonce } });
			if (!response.ok) throw new Error("Failed to fetch manager URL");
			const data = yield response.json();
			return ((_c = data.data) == null ? void 0 : _c.url) || data.url;
		});
	}
	function KitSettingsCustomizationDialog({ open, handleClose, handleSaveChanges, data, isImport, isOldExport, isOldElementorVersion }) {
		var _a;
		var _b;
		var _c;
		var _d;
		var _e;
		var _f;
		var _g;
		var _h;
		var _i;
		var _j;
		var _k;
		var _l;
		var _m;
		var _n;
		var _o;
		var _p;
		var _q;
		var _r;
		var _s;
		var _t;
		var _u;
		var _v;
		var _w;
		var _x;
		var _y;
		var _z;
		var _A;
		var _B;
		var _C;
		var _D;
		var _E;
		var _F;
		var _G;
		var _H;
		var _I;
		var _J;
		var _K;
		var _L;
		var _M;
		var _N;
		var _O;
		var _P;
		var _Q;
		var _R;
		var _S;
		var _T;
		var _U;
		const showClassesSection = (0, react.useMemo)(() => isClassesFeatureActive(), []);
		const showVariablesSection = (0, react.useMemo)(() => isVariablesFeatureActive(), []);
		const showClassesVariablesSection = showClassesSection || showVariablesSection;
		const classesExportedInManifest = !!((_c = (_b = (_a = data == null ? void 0 : data.uploadedData) == null ? void 0 : _a.manifest) == null ? void 0 : _b["site-settings"]) == null ? void 0 : _c.classes);
		const variablesExportedInManifest = !!((_f = (_e = (_d = data == null ? void 0 : data.uploadedData) == null ? void 0 : _d.manifest) == null ? void 0 : _e["site-settings"]) == null ? void 0 : _f.variables);
		const { existingClassesCount, existingVariablesCount, classesLimit, variablesLimit, calculateLimitInfo } = useClassesVariablesLimits({
			open,
			isImport
		});
		const importedClassesCount = (_j = (_i = (_h = (_g = data == null ? void 0 : data.uploadedData) == null ? void 0 : _g.manifest) == null ? void 0 : _h["site-settings"]) == null ? void 0 : _i.classesCount) != null ? _j : 0;
		const importedVariablesCount = (_n = (_m = (_l = (_k = data == null ? void 0 : data.uploadedData) == null ? void 0 : _k.manifest) == null ? void 0 : _l["site-settings"]) == null ? void 0 : _m.variablesCount) != null ? _n : 0;
		const classesLimitInfo = (0, react.useMemo)(() => calculateLimitInfo(existingClassesCount, importedClassesCount, classesLimit), [
			existingClassesCount,
			importedClassesCount,
			classesLimit,
			calculateLimitInfo
		]);
		const variablesLimitInfo = (0, react.useMemo)(() => calculateLimitInfo(existingVariablesCount, importedVariablesCount, variablesLimit), [
			existingVariablesCount,
			importedVariablesCount,
			variablesLimit,
			calculateLimitInfo
		]);
		const classesVariablesInitialState = (0, react.useMemo)(() => {
			if (!showClassesVariablesSection) return {};
			return {
				classes: !isImport || classesExportedInManifest,
				variables: !isImport || variablesExportedInManifest,
				classesOverrideAll: false,
				variablesOverrideAll: false
			};
		}, [
			showClassesVariablesSection,
			isImport,
			classesExportedInManifest,
			variablesExportedInManifest
		]);
		const getState = (0, react.useCallback)((initialState2) => {
			var _a2;
			var _b2;
			var _c2;
			var _d2;
			var _e2;
			var _f2;
			var _g2;
			var _h2;
			var _i2;
			var _j2;
			var _k2;
			var _l2;
			var _m2;
			var _n2;
			var _o2;
			var _p2;
			var _q2;
			var _r2;
			var _s2;
			var _t2;
			var _u2;
			var _v2;
			var _w2;
			if (!data.includes.includes("settings")) return __spreadValues({
				theme: initialState2,
				globalColors: initialState2,
				globalFonts: initialState2,
				themeStyleSettings: initialState2,
				generalSettings: initialState2,
				experiments: initialState2,
				customFonts: initialState2,
				customIcons: initialState2,
				customCode: initialState2
			}, showClassesVariablesSection ? classesVariablesInitialState : {});
			if (isImport) {
				const manifestData = (_b2 = (_a2 = data == null ? void 0 : data.uploadedData) == null ? void 0 : _a2.manifest) == null ? void 0 : _b2["site-settings"];
				let themeState = false;
				if (isOldExport) themeState = !initialState2 ? false : (_d2 = (_c2 = data == null ? void 0 : data.uploadedData) == null ? void 0 : _c2.manifest) == null ? void 0 : _d2.theme;
				else themeState = (_e2 = manifestData == null ? void 0 : manifestData.theme) != null ? _e2 : initialState2;
				return __spreadValues({
					theme: themeState,
					globalColors: isOldExport ? true : (_f2 = manifestData == null ? void 0 : manifestData.globalColors) != null ? _f2 : initialState2,
					globalFonts: isOldExport ? true : (_g2 = manifestData == null ? void 0 : manifestData.globalFonts) != null ? _g2 : initialState2,
					themeStyleSettings: isOldExport ? true : (_h2 = manifestData == null ? void 0 : manifestData.themeStyleSettings) != null ? _h2 : initialState2,
					generalSettings: isOldExport ? true : (_i2 = manifestData == null ? void 0 : manifestData.generalSettings) != null ? _i2 : initialState2,
					experiments: isOldExport ? true : (_j2 = manifestData == null ? void 0 : manifestData.experiments) != null ? _j2 : initialState2,
					customFonts: isOldExport ? true : (_k2 = manifestData == null ? void 0 : manifestData.customFonts) != null ? _k2 : initialState2,
					customIcons: isOldExport ? true : (_l2 = manifestData == null ? void 0 : manifestData.customIcons) != null ? _l2 : initialState2,
					customCode: isOldExport ? true : (_m2 = manifestData == null ? void 0 : manifestData.customCode) != null ? _m2 : initialState2
				}, showClassesVariablesSection ? classesVariablesInitialState : {});
			}
			const customization = (_n2 = data == null ? void 0 : data.customization) == null ? void 0 : _n2.settings;
			return __spreadValues({
				theme: (_o2 = customization == null ? void 0 : customization.theme) != null ? _o2 : initialState2,
				globalColors: (_p2 = customization == null ? void 0 : customization.globalColors) != null ? _p2 : initialState2,
				globalFonts: (_q2 = customization == null ? void 0 : customization.globalFonts) != null ? _q2 : initialState2,
				themeStyleSettings: (_r2 = customization == null ? void 0 : customization.themeStyleSettings) != null ? _r2 : initialState2,
				generalSettings: (_s2 = customization == null ? void 0 : customization.generalSettings) != null ? _s2 : initialState2,
				experiments: (_t2 = customization == null ? void 0 : customization.experiments) != null ? _t2 : initialState2,
				customFonts: (_u2 = customization == null ? void 0 : customization.customFonts) != null ? _u2 : initialState2,
				customIcons: (_v2 = customization == null ? void 0 : customization.customIcons) != null ? _v2 : initialState2,
				customCode: (_w2 = customization == null ? void 0 : customization.customCode) != null ? _w2 : initialState2
			}, showClassesVariablesSection ? classesVariablesInitialState : {});
		}, [
			data.includes,
			(_o = data == null ? void 0 : data.uploadedData) == null ? void 0 : _o.manifest,
			(_p = data == null ? void 0 : data.customization) == null ? void 0 : _p.settings,
			isImport,
			isOldExport,
			showClassesVariablesSection,
			classesVariablesInitialState
		]);
		const initialState = data.includes.includes("settings");
		const [settings, setSettings] = (0, react.useState)(() => {
			if (data.customization.settings) return data.customization.settings;
			return getState(initialState);
		});
		(0, react.useEffect)(() => {
			if (open) if (data.customization.settings) setSettings(data.customization.settings);
			else {
				const state = getState(initialState);
				setSettings(state);
			}
		}, [open]);
		(0, react.useEffect)(() => {
			var _a2;
			var _b2;
			var _c2;
			if (open) (_c2 = (_b2 = (_a2 = window.elementorModules) == null ? void 0 : _a2.appsEventTracking) == null ? void 0 : _b2.AppsEventTracking) == null || _c2.sendPageViewsWebsiteTemplates(elementorCommon.eventsManager.config.secondaryLocations.kitLibrary.kitExportCustomizationEdit);
		}, [open]);
		const handleToggleChange = (settingKey) => {
			setSettings((prev) => __spreadProps(__spreadValues({}, prev), { [settingKey]: !prev[settingKey] }));
		};
		const handleClassesVariablesChange = (settingKey, value) => {
			setSettings((prev) => __spreadProps(__spreadValues({}, prev), { [settingKey]: value }));
		};
		const handleReviewClick = (0, react.useCallback)((panelId) => __async(null, null, function* () {
			const transformedAnalytics = transformAnalyticsData(settings);
			handleSaveChanges("settings", settings, true, transformedAnalytics);
			handleClose();
			try {
				const url = yield fetchManagerUrl(panelId);
				window.open(url, "_blank");
			} catch (error) {
				console.error(`Failed to open ${panelId}:`, error);
			}
		}), [
			settings,
			handleSaveChanges,
			handleClose
		]);
		const handleClassesReviewClick = (0, react.useCallback)(() => {
			handleReviewClick("global-classes-manager");
		}, [handleReviewClick]);
		const handleVariablesReviewClick = (0, react.useCallback)(() => {
			handleReviewClick("variables-manager");
		}, [handleReviewClick]);
		const classesNotExported = isImport && !isClassesExported(data);
		const variablesNotExported = isImport && !isVariablesExported(data);
		const classesVariablesNotExported = classesNotExported && variablesNotExported;
		const classesLimitExceeded = isImport && classesLimitInfo.isExceeded;
		const variablesLimitExceeded = isImport && variablesLimitInfo.isExceeded;
		const classesOverLimitCount = classesLimitInfo.overLimitCount;
		const variablesOverLimitCount = variablesLimitInfo.overLimitCount;
		const [confirmationDialog, setConfirmationDialog] = (0, react.useState)({
			open: false,
			type: "classes"
		});
		const performSave = (0, react.useCallback)(() => {
			const hasEnabledCustomization = settings.theme || settings.globalColors || settings.globalFonts || settings.themeStyleSettings || settings.generalSettings || settings.experiments || settings.customFonts || settings.customIcons || settings.customCode || settings.classes || settings.variables;
			const transformedAnalytics = transformAnalyticsData(settings);
			handleSaveChanges("settings", settings, hasEnabledCustomization, transformedAnalytics);
			handleClose();
		}, [
			settings,
			handleSaveChanges,
			handleClose
		]);
		const handleSaveClick = (0, react.useCallback)(() => {
			const classesOverrideEnabled = settings.classesOverrideAll && settings.classes;
			const variablesOverrideEnabled = settings.variablesOverrideAll && settings.variables;
			if (classesOverrideEnabled && variablesOverrideEnabled) {
				setConfirmationDialog({
					open: true,
					type: "both"
				});
				return;
			}
			if (classesOverrideEnabled) {
				setConfirmationDialog({
					open: true,
					type: "classes"
				});
				return;
			}
			if (variablesOverrideEnabled) {
				setConfirmationDialog({
					open: true,
					type: "variables"
				});
				return;
			}
			performSave();
		}, [settings, performSave]);
		const handleConfirmationClose = (0, react.useCallback)(() => {
			setConfirmationDialog({
				open: false,
				type: ""
			});
		}, []);
		const handleConfirmationConfirm = (0, react.useCallback)(() => {
			setConfirmationDialog({
				open: false,
				type: ""
			});
			performSave();
		}, [performSave]);
		return /* @__PURE__ */ react.default.createElement(react.default.Fragment, null, /* @__PURE__ */ react.default.createElement(KitCustomizationDialog, {
			open,
			title: (0, _wordpress_i18n.__)("Edit settings & configurations", "elementor"),
			handleClose,
			handleSaveChanges: handleSaveClick
		}, /* @__PURE__ */ react.default.createElement(_elementor_ui.Stack, {
			sx: { position: "relative" },
			gap: 2
		}, isOldElementorVersion && /* @__PURE__ */ react.default.createElement(UpgradeVersionBanner, null), /* @__PURE__ */ react.default.createElement(_elementor_ui.Stack, null, /* @__PURE__ */ react.default.createElement(SettingSection, {
			checked: settings.theme,
			title: (0, _wordpress_i18n.__)("Theme", "elementor"),
			description: (0, _wordpress_i18n.__)("Only public WordPress themes are supported", "elementor"),
			settingKey: "theme",
			onSettingChange: handleToggleChange,
			notExported: isImport && !((_q = data == null ? void 0 : data.uploadedData) == null ? void 0 : _q.manifest.theme)
		}), showClassesVariablesSection && /* @__PURE__ */ react.default.createElement(ClassesVariablesSection, {
			settings: {
				classes: (_r = settings.classes) != null ? _r : false,
				variables: (_s = settings.variables) != null ? _s : false,
				classesOverrideAll: (_t = settings.classesOverrideAll) != null ? _t : false,
				variablesOverrideAll: (_u = settings.variablesOverrideAll) != null ? _u : false
			},
			onSettingChange: handleClassesVariablesChange,
			isImport,
			classesExported: !classesNotExported && showClassesSection,
			variablesExported: !variablesNotExported && showVariablesSection,
			classesLimitExceeded,
			variablesLimitExceeded,
			classesOverLimitCount,
			variablesOverLimitCount,
			onClassesReviewClick: handleClassesReviewClick,
			onVariablesReviewClick: handleVariablesReviewClick,
			notExported: classesVariablesNotExported
		}), !isOldExport && /* @__PURE__ */ react.default.createElement(react.default.Fragment, null, /* @__PURE__ */ react.default.createElement(SettingSection, {
			title: (0, _wordpress_i18n.__)("Site settings", "elementor"),
			hasToggle: false
		}, /* @__PURE__ */ react.default.createElement(_elementor_ui.Stack, null, /* @__PURE__ */ react.default.createElement(SubSetting, {
			label: (0, _wordpress_i18n.__)("Global colors", "elementor"),
			settingKey: "globalColors",
			onSettingChange: handleToggleChange,
			checked: settings.globalColors,
			disabled: isImport && !((_x = (_w = (_v = data == null ? void 0 : data.uploadedData) == null ? void 0 : _v.manifest) == null ? void 0 : _w["site-settings"]) == null ? void 0 : _x.globalColors) || !isHighTier(),
			tooltip: !isHighTier()
		}), /* @__PURE__ */ react.default.createElement(SubSetting, {
			label: (0, _wordpress_i18n.__)("Global fonts", "elementor"),
			settingKey: "globalFonts",
			onSettingChange: handleToggleChange,
			checked: settings.globalFonts,
			disabled: isImport && !((_A = (_z = (_y = data == null ? void 0 : data.uploadedData) == null ? void 0 : _y.manifest) == null ? void 0 : _z["site-settings"]) == null ? void 0 : _A.globalFonts) || !isHighTier(),
			tooltip: !isHighTier()
		}), /* @__PURE__ */ react.default.createElement(SubSetting, {
			label: (0, _wordpress_i18n.__)("Theme style settings", "elementor"),
			settingKey: "themeStyleSettings",
			onSettingChange: handleToggleChange,
			checked: settings.themeStyleSettings,
			disabled: isImport && !((_D = (_C = (_B = data == null ? void 0 : data.uploadedData) == null ? void 0 : _B.manifest) == null ? void 0 : _C["site-settings"]) == null ? void 0 : _D.themeStyleSettings) || !isHighTier(),
			tooltip: !isHighTier()
		}))), /* @__PURE__ */ react.default.createElement(SettingSection, {
			checked: settings.generalSettings,
			title: (0, _wordpress_i18n.__)("Settings", "elementor"),
			description: (0, _wordpress_i18n.__)("Include site identity, background, layout, Lightbox, page transitions, and custom CSS", "elementor"),
			settingKey: "generalSettings",
			onSettingChange: handleToggleChange,
			disabled: isImport && !((_G = (_F = (_E = data == null ? void 0 : data.uploadedData) == null ? void 0 : _E.manifest) == null ? void 0 : _F["site-settings"]) == null ? void 0 : _G.generalSettings) || !isHighTier(),
			tooltip: !isHighTier()
		}), /* @__PURE__ */ react.default.createElement(SettingSection, {
			checked: settings.experiments,
			title: (0, _wordpress_i18n.__)("Experiments", "elementor"),
			description: (0, _wordpress_i18n.__)("This will apply all experiments that are still active during import", "elementor"),
			settingKey: "experiments",
			onSettingChange: handleToggleChange,
			disabled: isImport && !((_I = (_H = data == null ? void 0 : data.uploadedData) == null ? void 0 : _H.manifest) == null ? void 0 : _I.experiments) || !isHighTier(),
			tooltip: !isHighTier()
		}), /* @__PURE__ */ react.default.createElement(SettingSection, {
			title: (0, _wordpress_i18n.__)("Custom files", "elementor"),
			hasToggle: false
		}, /* @__PURE__ */ react.default.createElement(_elementor_ui.Stack, null, /* @__PURE__ */ react.default.createElement(SubSetting, {
			label: (0, _wordpress_i18n.__)("Custom fonts", "elementor"),
			settingKey: "customFonts",
			onSettingChange: handleToggleChange,
			checked: settings.customFonts,
			disabled: isImport && !((_K = (_J = data == null ? void 0 : data.uploadedData) == null ? void 0 : _J.manifest) == null ? void 0 : _K["custom-fonts"]) || !isHighTier(),
			tooltip: !isHighTier(),
			notExported: isImport && !((_M = (_L = data == null ? void 0 : data.uploadedData) == null ? void 0 : _L.manifest) == null ? void 0 : _M["custom-fonts"])
		}), /* @__PURE__ */ react.default.createElement(SubSetting, {
			label: (0, _wordpress_i18n.__)("Custom icons", "elementor"),
			settingKey: "customIcons",
			onSettingChange: handleToggleChange,
			checked: settings.customIcons,
			disabled: isImport && !((_O = (_N = data == null ? void 0 : data.uploadedData) == null ? void 0 : _N.manifest) == null ? void 0 : _O["custom-icons"]) || !isHighTier(),
			tooltip: !isHighTier(),
			notExported: isImport && !((_Q = (_P = data == null ? void 0 : data.uploadedData) == null ? void 0 : _P.manifest) == null ? void 0 : _Q["custom-icons"])
		}), /* @__PURE__ */ react.default.createElement(SubSetting, {
			label: (0, _wordpress_i18n.__)("Custom code", "elementor"),
			settingKey: "customCode",
			onSettingChange: handleToggleChange,
			checked: settings.customCode,
			disabled: isImport && !((_S = (_R = data == null ? void 0 : data.uploadedData) == null ? void 0 : _R.manifest) == null ? void 0 : _S["custom-code"]) || !isHighTier(),
			tooltip: !isHighTier(),
			notExported: isImport && !((_U = (_T = data == null ? void 0 : data.uploadedData) == null ? void 0 : _T.manifest) == null ? void 0 : _U["custom-code"])
		}))))), /* @__PURE__ */ react.default.createElement(UpgradeNoticeBanner, null))), /* @__PURE__ */ react.default.createElement(OverrideConfirmationDialog, {
			open: confirmationDialog.open,
			onClose: handleConfirmationClose,
			onConfirm: handleConfirmationConfirm,
			type: confirmationDialog.type
		}));
	}
	KitSettingsCustomizationDialog.propTypes = {
		open: import_prop_types.bool.isRequired,
		isImport: import_prop_types.bool,
		isOldExport: import_prop_types.bool,
		isOldElementorVersion: import_prop_types.bool,
		handleClose: import_prop_types.func.isRequired,
		handleSaveChanges: import_prop_types.func.isRequired,
		data: import_prop_types.object.isRequired
	};
	//#endregion
	//#region core/app/modules/import-export-customization/assets/js/module.js
	var Module = class {
		constructor() {
			this.registerCustomizationDialogs();
		}
		registerCustomizationDialogs() {
			var _elementorCommon;
			var _window$elementorModu;
			if (!((_elementorCommon = elementorCommon) === null || _elementorCommon === void 0 || (_elementorCommon = _elementorCommon.config) === null || _elementorCommon === void 0 || (_elementorCommon = _elementorCommon.experimentalFeatures) === null || _elementorCommon === void 0 ? void 0 : _elementorCommon["import-export-customization"])) return;
			const registry = (_window$elementorModu = window.elementorModules) === null || _window$elementorModu === void 0 || (_window$elementorModu = _window$elementorModu.importExport) === null || _window$elementorModu === void 0 ? void 0 : _window$elementorModu.customizationDialogsRegistry;
			if (!registry) return;
			registry.register({
				key: "content",
				title: "Content Dialog",
				component: KitContentCustomizationDialog
			});
			registry.register({
				key: "templates",
				title: "Templates Dialog",
				component: KitTemplatesCustomizationDialog
			});
			registry.register({
				key: "settings",
				title: "Settings Dialog",
				component: KitSettingsCustomizationDialog
			});
		}
	};
	//#endregion
	//#region core/app/assets/js/index.js
	new Module$1();
	new Module();
	//#endregion
})(React, wp.i18n, elementorAppPackages.appUi, elementorAppPackages.siteEditor, ReactDOM, elementorAppPackages.hooks, elementorAppPackages.router, elementorV2.ui, elementorV2.icons);

//# sourceMappingURL=app.js.map
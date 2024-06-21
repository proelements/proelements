/*! pro-elements - - v3.22.0 - 16-06-2024 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/@reach/router/es/index.js":
/*!*************************************************!*\
  !*** ../node_modules/@reach/router/es/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Link: () => (/* binding */ Link),
/* harmony export */   Location: () => (/* binding */ Location),
/* harmony export */   LocationProvider: () => (/* binding */ LocationProvider),
/* harmony export */   Match: () => (/* binding */ Match),
/* harmony export */   Redirect: () => (/* binding */ Redirect),
/* harmony export */   Router: () => (/* binding */ Router),
/* harmony export */   ServerLocation: () => (/* binding */ ServerLocation),
/* harmony export */   createHistory: () => (/* reexport safe */ _lib_history__WEBPACK_IMPORTED_MODULE_5__.createHistory),
/* harmony export */   createMemorySource: () => (/* reexport safe */ _lib_history__WEBPACK_IMPORTED_MODULE_5__.createMemorySource),
/* harmony export */   globalHistory: () => (/* reexport safe */ _lib_history__WEBPACK_IMPORTED_MODULE_5__.globalHistory),
/* harmony export */   isRedirect: () => (/* binding */ isRedirect),
/* harmony export */   matchPath: () => (/* reexport safe */ _lib_utils__WEBPACK_IMPORTED_MODULE_4__.match),
/* harmony export */   navigate: () => (/* reexport safe */ _lib_history__WEBPACK_IMPORTED_MODULE_5__.navigate),
/* harmony export */   redirectTo: () => (/* binding */ redirectTo),
/* harmony export */   useLocation: () => (/* binding */ useLocation),
/* harmony export */   useMatch: () => (/* binding */ useMatch),
/* harmony export */   useNavigate: () => (/* binding */ useNavigate),
/* harmony export */   useParams: () => (/* binding */ useParams)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ "../node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var create_react_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! create-react-context */ "../node_modules/@reach/router/node_modules/create-react-context/lib/index.js");
/* harmony import */ var create_react_context__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(create_react_context__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lifecycles-compat */ "../node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/utils */ "../node_modules/@reach/router/es/lib/utils.js");
/* harmony import */ var _lib_history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/history */ "../node_modules/@reach/router/es/lib/history.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable jsx-a11y/anchor-has-content */








////////////////////////////////////////////////////////////////////////////////

var createNamedContext = function createNamedContext(name, defaultValue) {
  var Ctx = create_react_context__WEBPACK_IMPORTED_MODULE_2___default()(defaultValue);
  Ctx.displayName = name;
  return Ctx;
};

////////////////////////////////////////////////////////////////////////////////
// Location Context/Provider
var LocationContext = createNamedContext("Location");

// sets up a listener if there isn't one already so apps don't need to be
// wrapped in some top level provider
var Location = function Location(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    LocationContext.Consumer,
    null,
    function (context) {
      return context ? children(context) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        LocationProvider,
        null,
        children
      );
    }
  );
};

var LocationProvider = function (_React$Component) {
  _inherits(LocationProvider, _React$Component);

  function LocationProvider() {
    var _temp, _this, _ret;

    _classCallCheck(this, LocationProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      context: _this.getContext(),
      refs: { unlisten: null }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  LocationProvider.prototype.getContext = function getContext() {
    var _props$history = this.props.history,
        navigate = _props$history.navigate,
        location = _props$history.location;

    return { navigate: navigate, location: location };
  };

  LocationProvider.prototype.componentDidCatch = function componentDidCatch(error, info) {
    if (isRedirect(error)) {
      var _navigate = this.props.history.navigate;

      _navigate(error.uri, { replace: true });
    } else {
      throw error;
    }
  };

  LocationProvider.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevState.context.location !== this.state.context.location) {
      this.props.history._onTransitionComplete();
    }
  };

  LocationProvider.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var refs = this.state.refs,
        history = this.props.history;

    history._onTransitionComplete();
    refs.unlisten = history.listen(function () {
      Promise.resolve().then(function () {
        // TODO: replace rAF with react deferred update API when it's ready https://github.com/facebook/react/issues/13306
        requestAnimationFrame(function () {
          if (!_this2.unmounted) {
            _this2.setState(function () {
              return { context: _this2.getContext() };
            });
          }
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
    var context = this.state.context,
        children = this.props.children;

    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      LocationContext.Provider,
      { value: context },
      typeof children === "function" ? children(context) : children || null
    );
  };

  return LocationProvider;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

////////////////////////////////////////////////////////////////////////////////


LocationProvider.defaultProps = {
  history: _lib_history__WEBPACK_IMPORTED_MODULE_5__.globalHistory
};
 true ? LocationProvider.propTypes = {
  history: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object).isRequired
} : 0;
var ServerLocation = function ServerLocation(_ref2) {
  var url = _ref2.url,
      children = _ref2.children;

  var searchIndex = url.indexOf("?");
  var searchExists = searchIndex > -1;
  var pathname = void 0;
  var search = "";
  var hash = "";

  if (searchExists) {
    pathname = url.substring(0, searchIndex);
    search = url.substring(searchIndex);
  } else {
    pathname = url;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    LocationContext.Provider,
    {
      value: {
        location: {
          pathname: pathname,
          search: search,
          hash: hash
        },
        navigate: function navigate() {
          throw new Error("You can't call navigate on the server.");
        }
      }
    },
    children
  );
};
////////////////////////////////////////////////////////////////////////////////
// Sets baseuri and basepath for nested routers and links
var BaseContext = createNamedContext("Base", { baseuri: "/", basepath: "/" });

////////////////////////////////////////////////////////////////////////////////
// The main event, welcome to the show everybody.
var Router = function Router(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    BaseContext.Consumer,
    null,
    function (baseContext) {
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        Location,
        null,
        function (locationContext) {
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RouterImpl, _extends({}, baseContext, locationContext, props));
        }
      );
    }
  );
};

var RouterImpl = function (_React$PureComponent) {
  _inherits(RouterImpl, _React$PureComponent);

  function RouterImpl() {
    _classCallCheck(this, RouterImpl);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  RouterImpl.prototype.render = function render() {
    var _props = this.props,
        location = _props.location,
        _navigate2 = _props.navigate,
        basepath = _props.basepath,
        primary = _props.primary,
        children = _props.children,
        baseuri = _props.baseuri,
        _props$component = _props.component,
        component = _props$component === undefined ? "div" : _props$component,
        domProps = _objectWithoutProperties(_props, ["location", "navigate", "basepath", "primary", "children", "baseuri", "component"]);

    var routes = react__WEBPACK_IMPORTED_MODULE_0___default().Children.toArray(children).reduce(function (array, child) {
      var routes = createRoute(basepath)(child);
      return array.concat(routes);
    }, []);
    var pathname = location.pathname;


    var match = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.pick)(routes, pathname);

    if (match) {
      var params = match.params,
          uri = match.uri,
          route = match.route,
          element = match.route.value;

      // remove the /* from the end for child routes relative paths

      basepath = route.default ? basepath : route.path.replace(/\*$/, "");

      var props = _extends({}, params, {
        uri: uri,
        location: location,
        navigate: function navigate(to, options) {
          return _navigate2((0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.resolve)(to, uri), options);
        }
      });

      var clone = react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(element, props, element.props.children ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        Router,
        { location: location, primary: primary },
        element.props.children
      ) : undefined);

      // using 'div' for < 16.3 support
      var FocusWrapper = primary ? FocusHandler : component;
      // don't pass any props to 'div'
      var wrapperProps = primary ? _extends({ uri: uri, location: location, component: component }, domProps) : domProps;

      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        BaseContext.Provider,
        { value: { baseuri: uri, basepath: basepath } },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          FocusWrapper,
          wrapperProps,
          clone
        )
      );
    } else {
      // Not sure if we want this, would require index routes at every level
      // warning(
      //   false,
      //   `<Router basepath="${basepath}">\n\nNothing matched:\n\t${
      //     location.pathname
      //   }\n\nPaths checked: \n\t${routes
      //     .map(route => route.path)
      //     .join(
      //       "\n\t"
      //     )}\n\nTo get rid of this warning, add a default NotFound component as child of Router:
      //   \n\tlet NotFound = () => <div>Not Found!</div>
      //   \n\t<Router>\n\t  <NotFound default/>\n\t  {/* ... */}\n\t</Router>`
      // );
      return null;
    }
  };

  return RouterImpl;
}((react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent));

RouterImpl.defaultProps = {
  primary: true
};


var FocusContext = createNamedContext("Focus");

var FocusHandler = function FocusHandler(_ref3) {
  var uri = _ref3.uri,
      location = _ref3.location,
      component = _ref3.component,
      domProps = _objectWithoutProperties(_ref3, ["uri", "location", "component"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    FocusContext.Consumer,
    null,
    function (requestFocus) {
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FocusHandlerImpl, _extends({}, domProps, {
        component: component,
        requestFocus: requestFocus,
        uri: uri,
        location: location
      }));
    }
  );
};

// don't focus on initial render
var initialRender = true;
var focusHandlerCount = 0;

var FocusHandlerImpl = function (_React$Component2) {
  _inherits(FocusHandlerImpl, _React$Component2);

  function FocusHandlerImpl() {
    var _temp2, _this4, _ret2;

    _classCallCheck(this, FocusHandlerImpl);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this4 = _possibleConstructorReturn(this, _React$Component2.call.apply(_React$Component2, [this].concat(args))), _this4), _this4.state = {}, _this4.requestFocus = function (node) {
      if (!_this4.state.shouldFocus && node) {
        node.focus();
      }
    }, _temp2), _possibleConstructorReturn(_this4, _ret2);
  }

  FocusHandlerImpl.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var initial = prevState.uri == null;
    if (initial) {
      return _extends({
        shouldFocus: true
      }, nextProps);
    } else {
      var myURIChanged = nextProps.uri !== prevState.uri;
      var navigatedUpToMe = prevState.location.pathname !== nextProps.location.pathname && nextProps.location.pathname === nextProps.uri;
      return _extends({
        shouldFocus: myURIChanged || navigatedUpToMe
      }, nextProps);
    }
  };

  FocusHandlerImpl.prototype.componentDidMount = function componentDidMount() {
    focusHandlerCount++;
    this.focus();
  };

  FocusHandlerImpl.prototype.componentWillUnmount = function componentWillUnmount() {
    focusHandlerCount--;
    if (focusHandlerCount === 0) {
      initialRender = true;
    }
  };

  FocusHandlerImpl.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevProps.location !== this.props.location && this.state.shouldFocus) {
      this.focus();
    }
  };

  FocusHandlerImpl.prototype.focus = function focus() {
    if (false) {}

    var requestFocus = this.props.requestFocus;


    if (requestFocus) {
      requestFocus(this.node);
    } else {
      if (initialRender) {
        initialRender = false;
      } else if (this.node) {
        // React polyfills [autofocus] and it fires earlier than cDM,
        // so we were stealing focus away, this line prevents that.
        if (!this.node.contains(document.activeElement)) {
          this.node.focus();
        }
      }
    }
  };

  FocusHandlerImpl.prototype.render = function render() {
    var _this5 = this;

    var _props2 = this.props,
        children = _props2.children,
        style = _props2.style,
        requestFocus = _props2.requestFocus,
        _props2$component = _props2.component,
        Comp = _props2$component === undefined ? "div" : _props2$component,
        uri = _props2.uri,
        location = _props2.location,
        domProps = _objectWithoutProperties(_props2, ["children", "style", "requestFocus", "component", "uri", "location"]);

    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      Comp,
      _extends({
        style: _extends({ outline: "none" }, style),
        tabIndex: "-1",
        ref: function ref(n) {
          return _this5.node = n;
        }
      }, domProps),
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        FocusContext.Provider,
        { value: this.requestFocus },
        this.props.children
      )
    );
  };

  return FocusHandlerImpl;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

(0,react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_3__.polyfill)(FocusHandlerImpl);

var k = function k() {};

////////////////////////////////////////////////////////////////////////////////
var forwardRef = (react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef);

if (typeof forwardRef === "undefined") {
  forwardRef = function forwardRef(C) {
    return C;
  };
}

var Link = forwardRef(function (_ref4, ref) {
  var innerRef = _ref4.innerRef,
      props = _objectWithoutProperties(_ref4, ["innerRef"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    BaseContext.Consumer,
    null,
    function (_ref5) {
      var basepath = _ref5.basepath,
          baseuri = _ref5.baseuri;
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        Location,
        null,
        function (_ref6) {
          var location = _ref6.location,
              navigate = _ref6.navigate;

          var to = props.to,
              state = props.state,
              replace = props.replace,
              _props$getProps = props.getProps,
              getProps = _props$getProps === undefined ? k : _props$getProps,
              anchorProps = _objectWithoutProperties(props, ["to", "state", "replace", "getProps"]);

          var href = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.resolve)(to, baseuri);
          var encodedHref = encodeURI(href);
          var isCurrent = location.pathname === encodedHref;
          var isPartiallyCurrent = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.startsWith)(location.pathname, encodedHref);

          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", _extends({
            ref: ref || innerRef,
            "aria-current": isCurrent ? "page" : undefined
          }, anchorProps, getProps({ isCurrent: isCurrent, isPartiallyCurrent: isPartiallyCurrent, href: href, location: location }), {
            href: href,
            onClick: function onClick(event) {
              if (anchorProps.onClick) anchorProps.onClick(event);
              if (shouldNavigate(event)) {
                event.preventDefault();
                var shouldReplace = replace;
                if (typeof replace !== "boolean" && isCurrent) {
                  var _location$state = _extends({}, location.state),
                      key = _location$state.key,
                      restState = _objectWithoutProperties(_location$state, ["key"]);

                  shouldReplace = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.shallowCompare)(_extends({}, state), restState);
                }
                navigate(href, {
                  state: state,
                  replace: shouldReplace
                });
              }
            }
          }));
        }
      );
    }
  );
});

Link.displayName = "Link";

 true ? Link.propTypes = {
  to: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string).isRequired
} : 0;

////////////////////////////////////////////////////////////////////////////////
function RedirectRequest(uri) {
  this.uri = uri;
}

var isRedirect = function isRedirect(o) {
  return o instanceof RedirectRequest;
};

var redirectTo = function redirectTo(to) {
  throw new RedirectRequest(to);
};

var RedirectImpl = function (_React$Component3) {
  _inherits(RedirectImpl, _React$Component3);

  function RedirectImpl() {
    _classCallCheck(this, RedirectImpl);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  }

  // Support React < 16 with this hook
  RedirectImpl.prototype.componentDidMount = function componentDidMount() {
    var _props3 = this.props,
        navigate = _props3.navigate,
        to = _props3.to,
        from = _props3.from,
        _props3$replace = _props3.replace,
        replace = _props3$replace === undefined ? true : _props3$replace,
        state = _props3.state,
        noThrow = _props3.noThrow,
        baseuri = _props3.baseuri,
        props = _objectWithoutProperties(_props3, ["navigate", "to", "from", "replace", "state", "noThrow", "baseuri"]);

    Promise.resolve().then(function () {
      var resolvedTo = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.resolve)(to, baseuri);
      navigate((0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.insertParams)(resolvedTo, props), { replace: replace, state: state });
    });
  };

  RedirectImpl.prototype.render = function render() {
    var _props4 = this.props,
        navigate = _props4.navigate,
        to = _props4.to,
        from = _props4.from,
        replace = _props4.replace,
        state = _props4.state,
        noThrow = _props4.noThrow,
        baseuri = _props4.baseuri,
        props = _objectWithoutProperties(_props4, ["navigate", "to", "from", "replace", "state", "noThrow", "baseuri"]);

    var resolvedTo = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.resolve)(to, baseuri);
    if (!noThrow) redirectTo((0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.insertParams)(resolvedTo, props));
    return null;
  };

  return RedirectImpl;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

var Redirect = function Redirect(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    BaseContext.Consumer,
    null,
    function (_ref7) {
      var baseuri = _ref7.baseuri;
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        Location,
        null,
        function (locationContext) {
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RedirectImpl, _extends({}, locationContext, { baseuri: baseuri }, props));
        }
      );
    }
  );
};

 true ? Redirect.propTypes = {
  from: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  to: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string).isRequired
} : 0;

////////////////////////////////////////////////////////////////////////////////
var Match = function Match(_ref8) {
  var path = _ref8.path,
      children = _ref8.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    BaseContext.Consumer,
    null,
    function (_ref9) {
      var baseuri = _ref9.baseuri;
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        Location,
        null,
        function (_ref10) {
          var navigate = _ref10.navigate,
              location = _ref10.location;

          var resolvedPath = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.resolve)(path, baseuri);
          var result = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.match)(resolvedPath, location.pathname);
          return children({
            navigate: navigate,
            location: location,
            match: result ? _extends({}, result.params, {
              uri: result.uri,
              path: path
            }) : null
          });
        }
      );
    }
  );
};

////////////////////////////////////////////////////////////////////////////////
// Hooks

var useLocation = function useLocation() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LocationContext);

  if (!context) {
    throw new Error("useLocation hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  return context.location;
};

var useNavigate = function useNavigate() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LocationContext);

  if (!context) {
    throw new Error("useNavigate hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  return context.navigate;
};

var useParams = function useParams() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(BaseContext);

  if (!context) {
    throw new Error("useParams hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  var location = useLocation();

  var results = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.match)(context.basepath, location.pathname);

  return results ? results.params : null;
};

var useMatch = function useMatch(path) {
  if (!path) {
    throw new Error("useMatch(path: string) requires an argument of a string to match against");
  }
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(BaseContext);

  if (!context) {
    throw new Error("useMatch hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  var location = useLocation();

  var resolvedPath = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.resolve)(path, context.baseuri);
  var result = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.match)(resolvedPath, location.pathname);
  return result ? _extends({}, result.params, {
    uri: result.uri,
    path: path
  }) : null;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var stripSlashes = function stripSlashes(str) {
  return str.replace(/(^\/+|\/+$)/g, "");
};

var createRoute = function createRoute(basepath) {
  return function (element) {
    if (!element) {
      return null;
    }

    if (element.type === (react__WEBPACK_IMPORTED_MODULE_0___default().Fragment) && element.props.children) {
      return react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(element.props.children, createRoute(basepath));
    }
    !(element.props.path || element.props.default || element.type === Redirect) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, "<Router>: Children of <Router> must have a `path` or `default` prop, or be a `<Redirect>`. None found on element type `" + element.type + "`") : 0 : void 0;

    !!(element.type === Redirect && (!element.props.from || !element.props.to)) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, "<Redirect from=\"" + element.props.from + "\" to=\"" + element.props.to + "\"/> requires both \"from\" and \"to\" props when inside a <Router>.") : 0 : void 0;

    !!(element.type === Redirect && !(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.validateRedirect)(element.props.from, element.props.to)) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, "<Redirect from=\"" + element.props.from + " to=\"" + element.props.to + "\"/> has mismatched dynamic segments, ensure both paths have the exact same dynamic segments.") : 0 : void 0;

    if (element.props.default) {
      return { value: element, default: true };
    }

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

////////////////////////////////////////////////////////////////////////


/***/ }),

/***/ "../node_modules/@reach/router/es/lib/history.js":
/*!*******************************************************!*\
  !*** ../node_modules/@reach/router/es/lib/history.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHistory: () => (/* binding */ createHistory),
/* harmony export */   createMemorySource: () => (/* binding */ createMemorySource),
/* harmony export */   globalHistory: () => (/* binding */ globalHistory),
/* harmony export */   navigate: () => (/* binding */ navigate)
/* harmony export */ });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getLocation = function getLocation(source) {
  var _source$location = source.location,
      search = _source$location.search,
      hash = _source$location.hash,
      href = _source$location.href,
      origin = _source$location.origin,
      protocol = _source$location.protocol,
      host = _source$location.host,
      hostname = _source$location.hostname,
      port = _source$location.port;
  var pathname = source.location.pathname;


  if (!pathname && href && canUseDOM) {
    var url = new URL(href);
    pathname = url.pathname;
  }

  return {
    pathname: encodeURI(decodeURI(pathname)),
    search: search,
    hash: hash,
    href: href,
    origin: origin,
    protocol: protocol,
    host: host,
    hostname: hostname,
    port: port,
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
        listener({ location: location, action: "POP" });
      };

      source.addEventListener("popstate", popstateListener);

      return function () {
        source.removeEventListener("popstate", popstateListener);
        listeners = listeners.filter(function (fn) {
          return fn !== listener;
        });
      };
    },
    navigate: function navigate(to) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          state = _ref.state,
          _ref$replace = _ref.replace,
          replace = _ref$replace === undefined ? false : _ref$replace;

      if (typeof to === "number") {
        source.history.go(to);
      } else {
        state = _extends({}, state, { key: Date.now() + "" });
        // try...catch iOS Safari limits to 100 pushState calls
        try {
          if (transitioning || replace) {
            source.history.replaceState(state, null, to);
          } else {
            source.history.pushState(state, null, to);
          }
        } catch (e) {
          source.location[replace ? "replace" : "assign"](to);
        }
      }

      location = getLocation(source);
      transitioning = true;
      var transition = new Promise(function (res) {
        return resolveTransition = res;
      });
      listeners.forEach(function (listener) {
        return listener({ location: location, action: "PUSH" });
      });
      return transition;
    }
  };
};

////////////////////////////////////////////////////////////////////////////////
// Stores history entries in memory for testing or other platforms like Native
var createMemorySource = function createMemorySource() {
  var initialPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";

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
        var _uri$split = uri.split("?"),
            pathname = _uri$split[0],
            _uri$split$ = _uri$split[1],
            search = _uri$split$ === undefined ? "" : _uri$split$;

        index++;
        stack.push({ pathname: pathname, search: search.length ? "?" + search : search });
        states.push(state);
      },
      replaceState: function replaceState(state, _, uri) {
        var _uri$split2 = uri.split("?"),
            pathname = _uri$split2[0],
            _uri$split2$ = _uri$split2[1],
            search = _uri$split2$ === undefined ? "" : _uri$split2$;

        stack[index] = { pathname: pathname, search: search };
        states[index] = state;
      },
      go: function go(to) {
        var newIndex = index + to;

        if (newIndex < 0 || newIndex > states.length - 1) {
          return;
        }

        index = newIndex;
      }
    }
  };
};

////////////////////////////////////////////////////////////////////////////////
// global history - uses window.history as the source if available, otherwise a
// memory history
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var getSource = function getSource() {
  return canUseDOM ? window : createMemorySource();
};

var globalHistory = createHistory(getSource());
var navigate = globalHistory.navigate;

////////////////////////////////////////////////////////////////////////////////



/***/ }),

/***/ "../node_modules/@reach/router/es/lib/utils.js":
/*!*****************************************************!*\
  !*** ../node_modules/@reach/router/es/lib/utils.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   insertParams: () => (/* binding */ insertParams),
/* harmony export */   match: () => (/* binding */ match),
/* harmony export */   pick: () => (/* binding */ pick),
/* harmony export */   resolve: () => (/* binding */ resolve),
/* harmony export */   shallowCompare: () => (/* binding */ shallowCompare),
/* harmony export */   startsWith: () => (/* binding */ startsWith),
/* harmony export */   validateRedirect: () => (/* binding */ validateRedirect)
/* harmony export */ });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "../node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);


////////////////////////////////////////////////////////////////////////////////
// startsWith(string, search) - Check if `string` starts with `search`
var startsWith = function startsWith(string, search) {
  return string.substr(0, search.length) === search;
};

////////////////////////////////////////////////////////////////////////////////
// pick(routes, uri)
//
// Ranks and picks the best route to match. Each segment gets the highest
// amount of points, then the type of segment gets an additional amount of
// points where
//
//     static > dynamic > splat > root
//
// This way we don't have to worry about the order of our routes, let the
// computers do it.
//
// A route looks like this
//
//     { path, default, value }
//
// And a returned match looks like:
//
//     { route, params, uri }
//
// I know, I should use TypeScript not comments for these types.
var pick = function pick(routes, uri) {
  var match = void 0;
  var default_ = void 0;

  var _uri$split = uri.split("?"),
      uriPathname = _uri$split[0];

  var uriSegments = segmentize(uriPathname);
  var isRootUri = uriSegments[0] === "";
  var ranked = rankRoutes(routes);

  for (var i = 0, l = ranked.length; i < l; i++) {
    var missed = false;
    var route = ranked[i].route;

    if (route.default) {
      default_ = {
        route: route,
        params: {},
        uri: uri
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
        // Hit a splat, just grab the rest, and return a match
        // uri:   /files/documents/work
        // route: /files/*
        var param = routeSegment.slice(1) || "*";
        params[param] = uriSegments.slice(index).map(decodeURIComponent).join("/");
        break;
      }

      if (uriSegment === undefined) {
        // URI is shorter than the route, no match
        // uri:   /users
        // route: /users/:userId
        missed = true;
        break;
      }

      var dynamicMatch = paramRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        var matchIsNotReserved = reservedNames.indexOf(dynamicMatch[1]) === -1;
        !matchIsNotReserved ?  true ? invariant__WEBPACK_IMPORTED_MODULE_0___default()(false, "<Router> dynamic segment \"" + dynamicMatch[1] + "\" is a reserved name. Please use a different name in path \"" + route.path + "\".") : 0 : void 0;
        var value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        // Current segments don't match, not dynamic, not splat, so no match
        // uri:   /users/123/settings
        // route: /users/:id/profile
        missed = true;
        break;
      }
    }

    if (!missed) {
      match = {
        route: route,
        params: params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }

  return match || default_ || null;
};

////////////////////////////////////////////////////////////////////////////////
// match(path, uri) - Matches just one path to a uri, also lol
var match = function match(path, uri) {
  return pick([{ path: path }], uri);
};

////////////////////////////////////////////////////////////////////////////////
// resolve(to, basepath)
//
// Resolves URIs as though every path is a directory, no files.  Relative URIs
// in the browser can feel awkward because not only can you be "in a directory"
// you can be "at a file", too. For example
//
//     browserSpecResolve('foo', '/bar/') => /bar/foo
//     browserSpecResolve('foo', '/bar') => /foo
//
// But on the command line of a file system, it's not as complicated, you can't
// `cd` from a file, only directories.  This way, links have to know less about
// their current path. To go deeper you can do this:
//
//     <Link to="deeper"/>
//     // instead of
//     <Link to=`{${props.uri}/deeper}`/>
//
// Just like `cd`, if you want to go deeper from the command line, you do this:
//
//     cd deeper
//     # not
//     cd $(pwd)/deeper
//
// By treating every path as a directory, linking to relative paths should
// require less contextual information and (fingers crossed) be more intuitive.
var resolve = function resolve(to, base) {
  // /foo/bar, /baz/qux => /foo/bar
  if (startsWith(to, "/")) {
    return to;
  }

  var _to$split = to.split("?"),
      toPathname = _to$split[0],
      toQuery = _to$split[1];

  var _base$split = base.split("?"),
      basePathname = _base$split[0];

  var toSegments = segmentize(toPathname);
  var baseSegments = segmentize(basePathname);

  // ?a=b, /users?b=c => /users?a=b
  if (toSegments[0] === "") {
    return addQuery(basePathname, toQuery);
  }

  // profile, /users/789 => /users/789/profile
  if (!startsWith(toSegments[0], ".")) {
    var pathname = baseSegments.concat(toSegments).join("/");
    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
  }

  // ./         /users/123  =>  /users/123
  // ../        /users/123  =>  /users
  // ../..      /users/123  =>  /
  // ../../one  /a/b/c/d    =>  /a/b/one
  // .././one   /a/b/c/d    =>  /a/b/c/one
  var allSegments = baseSegments.concat(toSegments);
  var segments = [];
  for (var i = 0, l = allSegments.length; i < l; i++) {
    var segment = allSegments[i];
    if (segment === "..") segments.pop();else if (segment !== ".") segments.push(segment);
  }

  return addQuery("/" + segments.join("/"), toQuery);
};

////////////////////////////////////////////////////////////////////////////////
// insertParams(path, params)

var insertParams = function insertParams(path, params) {
  var _path$split = path.split("?"),
      pathBase = _path$split[0],
      _path$split$ = _path$split[1],
      query = _path$split$ === undefined ? "" : _path$split$;

  var segments = segmentize(pathBase);
  var constructedPath = "/" + segments.map(function (segment) {
    var match = paramRe.exec(segment);
    return match ? params[match[1]] : segment;
  }).join("/");
  var _params$location = params.location;
  _params$location = _params$location === undefined ? {} : _params$location;
  var _params$location$sear = _params$location.search,
      search = _params$location$sear === undefined ? "" : _params$location$sear;

  var searchSplit = search.split("?")[1] || "";
  constructedPath = addQuery(constructedPath, query, searchSplit);
  return constructedPath;
};

var validateRedirect = function validateRedirect(from, to) {
  var filter = function filter(segment) {
    return isDynamic(segment);
  };
  var fromString = segmentize(from).filter(filter).sort().join("/");
  var toString = segmentize(to).filter(filter).sort().join("/");
  return fromString === toString;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
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
  var score = route.default ? 0 : segmentize(route.path).reduce(function (score, segment) {
    score += SEGMENT_POINTS;
    if (isRootSegment(segment)) score += ROOT_POINTS;else if (isDynamic(segment)) score += DYNAMIC_POINTS;else if (isSplat(segment)) score -= SEGMENT_POINTS + SPLAT_PENALTY;else score += STATIC_POINTS;
    return score;
  }, 0);
  return { route: route, score: score, index: index };
};

var rankRoutes = function rankRoutes(routes) {
  return routes.map(rankRoute).sort(function (a, b) {
    return a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index;
  });
};

var segmentize = function segmentize(uri) {
  return uri
  // strip starting/ending slashes
  .replace(/(^\/+|\/+$)/g, "").split("/");
};

var addQuery = function addQuery(pathname) {
  for (var _len = arguments.length, query = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    query[_key - 1] = arguments[_key];
  }

  query = query.filter(function (q) {
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
  return obj1Keys.length === Object.keys(obj2).length && obj1Keys.every(function (key) {
    return obj2.hasOwnProperty(key) && obj1[key] === obj2[key];
  });
};

////////////////////////////////////////////////////////////////////////////////


/***/ }),

/***/ "../node_modules/@reach/router/node_modules/create-react-context/lib/implementation.js":
/*!*********************************************************************************************!*\
  !*** ../node_modules/@reach/router/node_modules/create-react-context/lib/implementation.js ***!
  \*********************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _gud = __webpack_require__(/*! gud */ "../node_modules/gud/index.js");

var _gud2 = _interopRequireDefault(_gud);

var _warning = __webpack_require__(/*! warning */ "../node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_SIGNED_31_BIT_INT = 1073741823;

// Inlined Object.is polyfill.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    function Provider() {
      var _temp, _this, _ret;

      _classCallCheck(this, Provider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
    }

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits = void 0;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0; // No change
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
          if (true) {
            (0, _warning2.default)((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s', changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    Provider.prototype.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(_react.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);

  var Consumer = function (_Component2) {
    _inherits(Consumer, _Component2);

    function Consumer() {
      var _temp2, _this2, _ret2;

      _classCallCheck(this, Consumer);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
        value: _this2.getValue()
      }, _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;
        if ((observedBits & changedBits) !== 0) {
          _this2.setState({ value: _this2.getValue() });
        }
      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }
      var observedBits = this.props.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    Consumer.prototype.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    Consumer.prototype.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(_react.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);


  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

exports["default"] = createReactContext;
module.exports = exports['default'];

/***/ }),

/***/ "../node_modules/@reach/router/node_modules/create-react-context/lib/index.js":
/*!************************************************************************************!*\
  !*** ../node_modules/@reach/router/node_modules/create-react-context/lib/index.js ***!
  \************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _implementation = __webpack_require__(/*! ./implementation */ "../node_modules/@reach/router/node_modules/create-react-context/lib/implementation.js");

var _implementation2 = _interopRequireDefault(_implementation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports["default"] = _react2.default.createContext || _implementation2.default;
module.exports = exports['default'];

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/app.js":
/*!***********************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/app.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = App;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _router = __webpack_require__(/*! @reach/router */ "../node_modules/@reach/router/es/index.js");
var _noticesContext = __webpack_require__(/*! ./context/notices-context */ "../modules/forms/submissions/assets/js/admin/context/notices-context.js");
var _settingsContext = __webpack_require__(/*! ./context/settings-context */ "../modules/forms/submissions/assets/js/admin/context/settings-context.js");
var _notices = _interopRequireDefault(__webpack_require__(/*! ./components/notices */ "../modules/forms/submissions/assets/js/admin/components/notices.js"));
var _item = _interopRequireDefault(__webpack_require__(/*! ./pages/item */ "../modules/forms/submissions/assets/js/admin/pages/item.js"));
var _pages = _interopRequireDefault(__webpack_require__(/*! ./pages */ "../modules/forms/submissions/assets/js/admin/pages/index.js"));
var _reachRouterHashHistory = __webpack_require__(/*! reach-router-hash-history */ "../node_modules/reach-router-hash-history/index.js");
const history = (0, _router.createHistory)((0, _reachRouterHashHistory.createHashSource)());
function App() {
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "elementor-form-submissions"
  }, /*#__PURE__*/_react.default.createElement(_settingsContext.SettingsProvider, {
    value: window.elementorSubmissionsConfig
  }, /*#__PURE__*/_react.default.createElement(_noticesContext.NoticesProvider, null, /*#__PURE__*/_react.default.createElement(_notices.default, null), /*#__PURE__*/_react.default.createElement(_router.LocationProvider, {
    history: history
  }, /*#__PURE__*/_react.default.createElement(_router.Router, null, /*#__PURE__*/_react.default.createElement(_pages.default, {
    path: "/"
  }), /*#__PURE__*/_react.default.createElement(_item.default, {
    path: "/:id"
  }))))));
}

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/components/bulk-action-select.js":
/*!*************************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/components/bulk-action-select.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.BulkActionSelect = BulkActionSelect;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const {
  useState,
  useCallback
} = _react.default;
function BulkActionSelect(props) {
  const [value, setValue] = useState(''),
    applyAction = useCallback(e => {
      e.preventDefault();
      const action = props.actions.find(item => item.value === value);
      if (!action) {
        return;
      }
      action.onApply();
      setValue('');
    }, [value, props.actions]);
  return /*#__PURE__*/_react.default.createElement("form", {
    className: `actions bulkactions ${props.className}`,
    onSubmit: applyAction
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "bulk-action-selector-top",
    className: "screen-reader-text"
  }, __('Select bulk action', 'elementor-pro')), /*#__PURE__*/_react.default.createElement("select", {
    name: "action",
    value: value,
    onChange: e => setValue(e.target.value)
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "",
    disabled: true
  }, __('Bulk actions', 'elementor-pro')), props.actions.map(action => {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: action.value,
      value: action.value
    }, action.label);
  })), /*#__PURE__*/_react.default.createElement("input", {
    type: "submit",
    className: "button action",
    value: __('Apply', 'elementor-pro')
  }));
}
BulkActionSelect.propTypes = {
  className: PropTypes.string,
  actions: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onApply: PropTypes.func.isRequired
  })).isRequired
};
BulkActionSelect.defaultProps = {
  className: ''
};

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/components/checkbox/bulk.js":
/*!********************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/components/checkbox/bulk.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Bulk;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const {
  useCallback
} = _react.default;
function Bulk(props) {
  const onChange = useCallback(e => {
    const value = e.target.checked ? [...props.allValues] : [];
    props.onChange(value);
  }, [props.onChange, props.checkedGroup, props.allValues]);
  return /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    checked: props.checkedGroup.length === props.allValues.length && props.allValues.length > 0,
    onChange: onChange
  });
}
Bulk.propTypes = {
  checkedGroup: PropTypes.array.isRequired,
  allValues: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/components/checkbox/index.js":
/*!*********************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/components/checkbox/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Checkbox;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _bulk = _interopRequireDefault(__webpack_require__(/*! ./bulk */ "../modules/forms/submissions/assets/js/admin/components/checkbox/bulk.js"));
var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const {
  useCallback
} = _react.default;
function Checkbox(props) {
  const onChange = useCallback(e => {
    const value = e.target.checked ? [...props.checkedGroup, props.value] : props.checkedGroup.filter(checkedItem => checkedItem !== props.value);
    props.onChange(value);
  }, [props.onChange, props.checkedGroup, props.value]);
  return /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    checked: props.checkedGroup.includes(props.value),
    onChange: onChange
  });
}
Checkbox.propTypes = {
  checkedGroup: PropTypes.array.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};
Checkbox.Bulk = _bulk.default;

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/components/date-filter.js":
/*!******************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/components/date-filter.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = DateFilter;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
const {
  useState,
  useMemo,
  useCallback
} = _react.default;
function DateFilter(props) {
  const [forceCustomSelect, setForceCustomSelect] = useState(false);

  // All the options of the select input
  const options = useMemo(() => {
    const format = date => wp.date.date('Y-m-d', date),
      now = new Date(),
      yesterday = new Date(now),
      last7Days = new Date(now),
      last30Days = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);
    last7Days.setDate(last7Days.getDate() - 7);
    last30Days.setDate(last30Days.getDate() - 30);
    return [{
      label: __('All Time', 'elementor-pro'),
      value: 'all',
      filter: {
        before: null,
        after: null
      }
    }, {
      label: __('Today', 'elementor-pro'),
      value: 'today',
      filter: {
        before: null,
        after: format(now)
      }
    }, {
      label: __('Yesterday', 'elementor-pro'),
      value: 'yesterday',
      filter: {
        before: format(yesterday),
        after: format(yesterday)
      }
    }, {
      label: __('Last 7 days', 'elementor-pro'),
      value: 'last7',
      filter: {
        before: null,
        after: format(last7Days)
      }
    }, {
      label: __('Last 30 days', 'elementor-pro'),
      value: 'last_30',
      filter: {
        before: null,
        after: format(last30Days)
      }
    }, {
      label: __('Custom', 'elementor-pro'),
      value: 'custom',
      filter: {
        before: null,
        after: null
      }
    }];
  }, []);

  // Response to show the selected value of the select.
  const selectedValue = useMemo(() => {
    if (forceCustomSelect) {
      return 'custom';
    }
    const selected = options.find(option => option.filter.after === props.value.after && option.filter.before === props.value.before);
    if (!selected) {
      return 'custom';
    }
    return selected.value;
  }, [options, props.value, forceCustomSelect]);

  // On select changed.
  const onSelectChanged = useCallback(({
    target: {
      value
    }
  }) => {
    const selected = options.find(option => option.value === value);
    setForceCustomSelect('custom' === selected.value);
    props.onChange(selected.filter);
  }, [options]);

  // On date inputs changed.
  const onDateInputChanged = useCallback(value => {
    if (selectedValue !== 'custom') {
      return;
    }
    props.onChange(value);
  }, [selectedValue]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.label && /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: `filter-by-${props.name}`,
    className: "screen-reader-text"
  }, props.label), /*#__PURE__*/_react.default.createElement("select", {
    id: `filter-by-${props.name}`,
    value: selectedValue,
    onChange: onSelectChanged
  }, options.map(({
    value,
    label
  }) => {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: value,
      value: value
    }, " ", label, " ");
  })), 'custom' === selectedValue && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("input", {
    type: "date",
    "aria-label": __('Start Date', 'elementor-pro'),
    value: props.value.after || '',
    onChange: ({
      target: {
        value
      }
    }) => onDateInputChanged({
      after: value
    })
  }), "\xA0 - \xA0", /*#__PURE__*/_react.default.createElement("input", {
    type: "date",
    "aria-label": __('End Date', 'elementor-pro'),
    value: props.value.before || '',
    onChange: ({
      target: {
        value
      }
    }) => onDateInputChanged({
      before: value
    })
  })));
}
DateFilter.propTypes = {
  value: PropTypes.shape({
    after: PropTypes.string,
    before: PropTypes.string
  }),
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};
DateFilter.defaultProps = {
  value: {
    after: null,
    before: null
  },
  options: []
};

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/components/export-button.js":
/*!********************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/components/export-button.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = ExportButton;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _useExport = __webpack_require__(/*! modules/forms/submissions/assets/js/admin/hooks/use-export */ "../modules/forms/submissions/assets/js/admin/hooks/use-export.js");
const {
  useMemo
} = _react.default;
const buttonContentOptions = {
  [_useExport.EXPORT_MODE_ALL]: __('Export All to CSV', 'elementor-pro'),
  [_useExport.EXPORT_MODE_FILTERED]: __('Export Filtered to CSV', 'elementor-pro'),
  [_useExport.EXPORT_MODE_SELECTED]: __('Export Selected to CSV', 'elementor-pro')
};
function ExportButton(props) {
  const ProgressPercentage = useMemo(() => {
    if (!props.progress) {
      return 0;
    }
    const {
      count,
      success
    } = props.progress;
    if (0 === count || 0 === success) {
      return 0;
    }
    return Math.round(success / count * 100);
  }, [props.progress]);
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "button button-primary e-export-button",
    onClick: () => !props.disabled && props.onClick(),
    disabled: props.disabled
  }, props.isLoading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("i", {
    className: "eicon-loading eicon-animation-spin"
  }), " \xA0", /*#__PURE__*/_react.default.createElement("span", null, " ", ProgressPercentage, "% "), " \xA0", __('Click to Cancel', 'elementor-pro')) : buttonContentOptions[props.mode]);
}
ExportButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  mode: PropTypes.oneOf([_useExport.EXPORT_MODE_ALL, _useExport.EXPORT_MODE_SELECTED, _useExport.EXPORT_MODE_FILTERED]),
  disabled: PropTypes.bool,
  progress: PropTypes.shape({
    count: PropTypes.number,
    success: PropTypes.number
  })
};
ExportButton.defaultProps = {
  isLoading: false,
  hasSelected: false,
  disabled: false
};

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/components/form-actions-log.js":
/*!***********************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/components/form-actions-log.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = FormActionsLog;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _postBox = _interopRequireDefault(__webpack_require__(/*! ./post-box */ "../modules/forms/submissions/assets/js/admin/components/post-box.js"));
var _date = __webpack_require__(/*! ../utils/date */ "../modules/forms/submissions/assets/js/admin/utils/date.js");
var _noticeMessages = _interopRequireDefault(__webpack_require__(/*! ../notice-messages */ "../modules/forms/submissions/assets/js/admin/notice-messages.js"));
function FormActionsLog(props) {
  return /*#__PURE__*/_react.default.createElement(_postBox.default, {
    header: /*#__PURE__*/_react.default.createElement("h2", null, __('Actions Log', 'elementor-pro'))
  }, 0 === props.actions.length && /*#__PURE__*/_react.default.createElement("div", {
    className: "inside"
  }, /*#__PURE__*/_react.default.createElement("p", {
    style: {
      margin: 0
    }
  }, " ", __('No form actions.', 'elementor-pro'), " ")), props.actions.map(actionLog => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: `inside e-form-submissions-action-log e-form-submissions-action-log--${'success' === actionLog.status ? 'success' : 'error'}`,
      key: actionLog.name
    }, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", {
      className: "e-form-submissions-action-log__label"
    }, " ", actionLog.label, " "), /*#__PURE__*/_react.default.createElement("i", {
      className: `${'success' === actionLog.status ? 'eicon-success eicon-check-circle-o' : 'eicon-error eicon-warning'} e-form-submissions-action-log__icon`
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: "e-form-submissions-action-log__date"
    }, " ", (0, _date.formatToLocalDateTime)(actionLog.created_at), " ")), /*#__PURE__*/_react.default.createElement("p", {
      className: `e-form-submissions-action-log__message`
    }, actionLog.log || _noticeMessages.default.actionLogs[actionLog.status]()));
  }));
}
FormActionsLog.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.shape({
    status: PropTypes.oneOf(['success', 'failed']),
    name: PropTypes.string,
    label: PropTypes.string,
    created_at: PropTypes.string,
    log: PropTypes.string
  })).isRequired
};

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/components/link.js":
/*!***********************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/components/link.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Link;
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js"));
var _router = __webpack_require__(/*! @reach/router */ "../node_modules/@reach/router/es/index.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function Link(props) {
  const ref = (0, _react.useRef)();
  (0, _react.useEffect)(() => {
    if (!ref.current) {
      return;
    }
    ref.current.setAttribute('href', `${location.href.split('#')[0]}#${props.to}`);
  }, [props.to, ref.current]);
  return /*#__PURE__*/_react.default.createElement(_router.Link, (0, _extends2.default)({}, props, {
    ref: ref
  }));
}
Link.propTypes = {
  ..._router.Link.propTypes
};

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/components/links-filter.js":
/*!*******************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/components/links-filter.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = LinksFilter;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
/* eslint-disable jsx-a11y/anchor-is-valid */
const {
  useCallback,
  useMemo
} = _react.default;
function LinksFilter(props) {
  const onChange = useCallback((e, value) => {
    e.preventDefault();
    if (!props.onChange) {
      return;
    }
    props.onChange(value);
  }, []);
  const options = useMemo(() => {
    return props.options.filter(option => option.shouldShow);
  }, [props.options]);
  return /*#__PURE__*/_react.default.createElement("ul", {
    className: "subsubsub"
  }, options.map((option, index) => {
    const isLast = index + 1 === options.length;
    return /*#__PURE__*/_react.default.createElement("li", {
      key: option.value
    }, "\xA0", /*#__PURE__*/_react.default.createElement("a", {
      href: "#",
      className: option.value === props.value ? 'current' : '',
      onClick: e => onChange(e, option.value)
    }, option.label, undefined !== option.count && /*#__PURE__*/_react.default.createElement("span", {
      className: "count"
    }, " (", option.count, ")")), "\xA0", isLast ? '' : '|');
  }));
}
LinksFilter.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
    count: PropTypes.number,
    shouldShow: PropTypes.bool
  })),
  value: PropTypes.string,
  onChange: PropTypes.func
};

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/components/notice.js":
/*!*************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/components/notice.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Notice;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _noticesContext = __webpack_require__(/*! ../context/notices-context */ "../modules/forms/submissions/assets/js/admin/context/notices-context.js");
/* eslint-disable jsx-a11y/anchor-is-valid */

function Notice(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: `notice notice-${props.model.type} ${props.model.dismissible ? 'is-dismissible' : ''}`
  }, /*#__PURE__*/_react.default.createElement("p", null, props.model.message, props.model.undoAction && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "\xA0", /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      props.model.undoAction();
    }
  }, __('Undo', 'elementor-pro')))), props.model.dismissible && /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "notice-dismiss",
    onClick: props.dismiss
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "screen-reader-text"
  }, __('Dismiss this notice.', 'elementor-pro'))));
}
Notice.propTypes = {
  model: PropTypes.shape({
    key: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    type: PropTypes.oneOf([_noticesContext.NOTICE_TYPE_SUCCESS, _noticesContext.NOTICE_TYPE_ERROR]).isRequired,
    dismissible: PropTypes.bool,
    undoAction: PropTypes.func
  }),
  dismiss: PropTypes.func
};

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/components/notices.js":
/*!**************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/components/notices.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Notices;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _noticesContext = __webpack_require__(/*! ../context/notices-context */ "../modules/forms/submissions/assets/js/admin/context/notices-context.js");
var _notice = _interopRequireDefault(__webpack_require__(/*! ./notice */ "../modules/forms/submissions/assets/js/admin/components/notice.js"));
function Notices() {
  const {
    notices,
    dismiss
  } = (0, _noticesContext.useNoticesContext)();
  return notices.map(notice => /*#__PURE__*/_react.default.createElement(_notice.default, {
    key: notice.key,
    model: notice,
    dismiss: () => dismiss(notice.key)
  }));
}

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/components/pagination.js":
/*!*****************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/components/pagination.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Pagination;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
const {
  useCallback,
  useMemo
} = _react.default;

/**
 * The characters » ‹, ›, » are flipped automatically in RTL.
 *
 * @see https://developer.mozilla.org/en-US/docs/Mozilla/Localization/Web_Localizability/Creating_localizable_web_applications#D'ont_use_text_as_decoration
 *
 * @param {any} props
 * @return {JSX.Element|string} Element
 * @class
 */
function Pagination(props) {
  const canNavigateBack = useMemo(() => 1 !== props.currentPage, [props.currentPage]);
  const canNavigateNext = useMemo(() => props.lastPage > props.currentPage, [props.currentPage, props.lastPage]);
  const NavigateBackElement = canNavigateBack ? 'a' : 'span';
  const NavigateNextElement = canNavigateNext ? 'a' : 'span';
  const navigate = useCallback((e, shouldNavigate, page) => {
    e.preventDefault();
    if (!shouldNavigate) {
      return;
    }
    props.onChange(page);
  }, [props.onChange]);
  if (!props.currentPage) {
    return '';
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: `tablenav-pages ${props.lastPage <= 1 && 'one-page'}`
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "displaying-num"
  }, props.total, " ", __('items', 'elementor-pro')), 1 < props.lastPage && /*#__PURE__*/_react.default.createElement("span", {
    className: "pagination-links"
  }, /*#__PURE__*/_react.default.createElement(NavigateBackElement, {
    className: `tablenav-pages-navspan button ${!canNavigateBack && 'disabled'}`,
    onClick: e => navigate(e, canNavigateBack, 1)
  }, "\xAB"), "\xA0", /*#__PURE__*/_react.default.createElement(NavigateBackElement, {
    className: `tablenav-pages-navspan button ${!canNavigateBack && 'disabled'}`,
    onClick: e => navigate(e, canNavigateBack, props.currentPage - 1)
  }, "\u2039"), /*#__PURE__*/_react.default.createElement("span", {
    className: "paging-input"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "screen-reader-text"
  }, __('Current Page', 'elementor-pro')), /*#__PURE__*/_react.default.createElement("span", {
    className: "paging-input",
    style: {
      margin: '0 6px'
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "tablenav-paging-text"
  }, props.currentPage, " ", __('of', 'elementor-pro'), /*#__PURE__*/_react.default.createElement("span", {
    className: "total-pages",
    style: {
      margin: '0'
    }
  }, " ", props.lastPage)))), /*#__PURE__*/_react.default.createElement(NavigateNextElement, {
    className: `tablenav-pages-navspan button ${!canNavigateNext && 'disabled'}`,
    onClick: e => navigate(e, canNavigateNext, props.currentPage + 1)
  }, "\u203A"), "\xA0", /*#__PURE__*/_react.default.createElement(NavigateNextElement, {
    className: `tablenav-pages-navspan button ${!canNavigateNext && 'disabled'}`,
    onClick: e => navigate(e, canNavigateNext, props.lastPage)
  }, "\xBB")));
}
Pagination.propTypes = {
  currentPage: PropTypes.number,
  total: PropTypes.number,
  lastPage: PropTypes.number,
  perPage: PropTypes.number,
  onChange: PropTypes.func.isRequired
};

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/components/post-box.js":
/*!***************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/components/post-box.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = PostBox;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
function PostBox(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "postbox"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "postbox-header"
  }, props.header), /*#__PURE__*/_react.default.createElement("div", {
    className: "inner"
  }, props.children));
}
PostBox.propTypes = {
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/components/referer-filter.js":
/*!*********************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/components/referer-filter.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = RefererFilter;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
const {
  useEffect,
  useRef,
  useState
} = _react.default;
function renderSelect2(el, onChange) {
  jQuery(el).select2({
    allowClear: true,
    placeholder: __('All Pages', 'elementor-pro'),
    dir: elementorCommon.config.isRTL ? 'rtl' : 'ltr',
    ajax: {
      delay: 400,
      transport({
        data: {
          search
        }
      }, success, failure) {
        return $e.data.get('form-submissions/referer', {
          search
        }, {
          refresh: true
        }).then(success).catch(failure);
      },
      data(params) {
        return {
          search: params.term
        };
      },
      processResults({
        data
      }) {
        return {
          results: data.data.map(({
            value,
            label
          }) => ({
            id: encodeURIComponent(value),
            text: label
          }))
        };
      },
      cache: true
    },
    minimumInputLength: 3
  }).on('select2:select select2:unselect', e => {
    onChange(e.target.value);
  });
}
function RefererFilter(props) {
  const [options, setOptions] = useState([{
    value: '',
    label: __('All Pages', 'elementor-pro')
  }]);
  const ref = useRef();
  useEffect(() => {
    let $select2 = null;
    if (props.value) {
      $e.data.get('form-submissions/referer', {
        value: props.value
      }, {
        refresh: true
      }).then(({
        data
      }) => setOptions(prev => [...prev, ...data.data])).then(() => $select2 = renderSelect2(ref.current, props.onChange));
    } else {
      $select2 = renderSelect2(ref.current, props.onChange);
    }
    return () => {
      if (!$select2) {
        return;
      }
      $select2.select2('destroy').off('select2:select select2:unselect');
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "filter-by-referer",
    className: "screen-reader-text"
  }, __('Filter by Page', 'elementor-pro')), /*#__PURE__*/_react.default.createElement("select", {
    ref: ref,
    id: "filter-by-referer",
    value: props.value
  }, options.map(({
    value,
    label
  }) => {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: value,
      value: encodeURIComponent(value)
    }, " ", label, " ");
  })));
}
RefererFilter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};
RefererFilter.defaultProps = {
  value: ''
};

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/components/resource-filter.js":
/*!**********************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/components/resource-filter.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = ResourceFilter;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
const {
  useState,
  useEffect
} = _react.default;
function ResourceFilter(props) {
  const [localOptions, setLocalOptions] = useState([]);
  useEffect(() => {
    $e.data.get(props.resourceOptions.command, props.resourceOptions.args, {
      refresh: true
    }).then(result => setLocalOptions(result.data.data));
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.label && /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: `filter-by-${props.name}`,
    className: "screen-reader-text"
  }, props.label), /*#__PURE__*/_react.default.createElement("select", {
    id: `filter-by-${props.name}`,
    value: props.value,
    onChange: e => props.onChange(e.target.value)
  }, [...props.options, ...localOptions].map(({
    value,
    label
  }) => {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: value,
      value: value
    }, " ", label, " ");
  })));
}
ResourceFilter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string
  })),
  resourceOptions: PropTypes.shape({
    command: PropTypes.string,
    args: PropTypes.object
  })
};
ResourceFilter.defaultProps = {
  value: '',
  options: []
};

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/components/search-box.js":
/*!*****************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/components/search-box.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = SearchBox;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
const {
  useState,
  useRef,
  useCallback
} = _react.default;

// In milliseconds
const DEFAULT_DEBOUNCE_TIMEOUT = 600;

/**
 * First render - nothing happens.
 * Second render - the query string value fills the search (should not trigger the debounce here in order to avoid onChange call)
 * Third render - the user type and the debounce get activate, and then it send the value up in the component tree.
 *
 * @param {any} props
 * @return {JSX.Element} Element
 * @class
 */
function SearchBox(props) {
  const [localValue, setLocalValue] = useState(props.value || ''),
    debounceHandler = useRef(null);
  const onChange = useCallback(e => {
    if (debounceHandler.current) {
      clearTimeout(debounceHandler.current);
    }
    const value = e.target.value;
    setLocalValue(value);
    debounceHandler.current = setTimeout(() => props.onChange(value), props.debounceTimeout);
  }, []);
  return /*#__PURE__*/_react.default.createElement("p", {
    className: "search-box e-form-submissions-search"
  }, props.label && /*#__PURE__*/_react.default.createElement("label", {
    className: "screen-reader-text",
    htmlFor: "search-input"
  }, props.label), props.isSearching && /*#__PURE__*/_react.default.createElement("span", {
    className: "e-form-submissions-search__spinner"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "eicon-loading eicon-animation-spin"
  })), /*#__PURE__*/_react.default.createElement("input", {
    type: "search",
    id: "search-input",
    name: "s",
    value: localValue,
    onChange: onChange,
    placeholder: __('Search...', 'elementor-pro')
  }));
}
SearchBox.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  debounceTimeout: PropTypes.number,
  isSearching: PropTypes.bool
};
SearchBox.defaultProps = {
  debounceTimeout: DEFAULT_DEBOUNCE_TIMEOUT,
  isSearching: false
};

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/components/submission-row.js":
/*!*********************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/components/submission-row.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = SubmissionRow;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _link = _interopRequireDefault(__webpack_require__(/*! ./link */ "../modules/forms/submissions/assets/js/admin/components/link.js"));
var _wpTable = _interopRequireDefault(__webpack_require__(/*! ./wp-table */ "../modules/forms/submissions/assets/js/admin/components/wp-table/index.js"));
var _date = __webpack_require__(/*! ../utils/date */ "../modules/forms/submissions/assets/js/admin/utils/date.js");
const {
  useState
} = _react.default;
function SubmissionRow(props) {
  const [isMobileRowOpen, setIsMobileRowOpen] = useState(false);
  const mainValue = props.item?.main?.value || __('Unknown', 'elementor-pro');
  return /*#__PURE__*/_react.default.createElement(_wpTable.default.Row, {
    className: isMobileRowOpen ? 'is-expanded' : '',
    style: {
      fontWeight: !props.item.is_read ? 'bold' : 'inherit'
    }
  }, /*#__PURE__*/_react.default.createElement(_wpTable.default.Cell, {
    component: "th",
    className: "check-column"
  }, props.checkBoxComponent), /*#__PURE__*/_react.default.createElement(_wpTable.default.Cell, {
    className: "has-row-actions column-primary"
  }, 'trash' === props.item.status ? mainValue : /*#__PURE__*/_react.default.createElement(_link.default, {
    to: `/${props.item.id}`,
    "aria-label": "View"
  }, mainValue), props.rowActionComponent, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "toggle-row",
    onClick: () => setIsMobileRowOpen(prev => !prev)
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "screen-reader-text"
  }, __('Show more details', 'elementor-pro')))), /*#__PURE__*/_react.default.createElement(_wpTable.default.Cell, {
    className: "column-actions",
    colName: props.tableTitles.actions_log_status.label
  }, props.item.actions_count > 0 && /*#__PURE__*/_react.default.createElement("i", {
    className: `${props.item.actions_count === props.item.actions_succeeded_count ? 'eicon-success eicon-check-circle-o' : 'eicon-error eicon-warning'}`,
    title: `${props.item.actions_succeeded_count}/${props.item.actions_count} ${__('Succeed', 'elementor-pro')}`
  })), /*#__PURE__*/_react.default.createElement(_wpTable.default.Cell, {
    className: "column-form",
    colName: props.tableTitles.form.label
  }, props.item.post && /*#__PURE__*/_react.default.createElement("a", {
    href: props.item.post.edit_url,
    target: "_blank",
    rel: "noreferrer"
  }, props.item.form.name, " (", props.item.form.element_id, ")")), /*#__PURE__*/_react.default.createElement(_wpTable.default.Cell, {
    className: "column-page",
    colName: props.tableTitles.page.label
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: props.item.referer,
    target: "_blank",
    rel: "noreferrer",
    title: props.item.referer_title
  }, props.item.referer_title || /*#__PURE__*/_react.default.createElement("i", {
    className: "eicon-editor-external-link e-form-submissions-referer-icon"
  }))), /*#__PURE__*/_react.default.createElement(_wpTable.default.Cell, {
    className: "column-id",
    colName: props.tableTitles.id.label
  }, props.item.id), /*#__PURE__*/_react.default.createElement(_wpTable.default.Cell, {
    className: "column-date",
    colName: props.tableTitles.created_at.label
  }, (0, _date.formatToLocalDateTime)(props.item.created_at)));
}
SubmissionRow.propTypes = {
  // The resource item that the table present.
  item: PropTypes.object.isRequired,
  tableTitles: PropTypes.objectOf(PropTypes.shape({
    label: PropTypes.string
  })),
  rowActionComponent: PropTypes.node,
  checkBoxComponent: PropTypes.node
};

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/components/submission-value/acceptance.js":
/*!**********************************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/components/submission-value/acceptance.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Acceptance;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _index = __webpack_require__(/*! ./index */ "../modules/forms/submissions/assets/js/admin/components/submission-value/index.js");
const {
  useState
} = _react.default;
function Acceptance(props) {
  const [localValue, setLocalValue] = useState(props.value),
    id = props.field.id + '-' + props.value;
  return /*#__PURE__*/_react.default.createElement("label", {
    className: "e-form-submissions-value-label",
    htmlFor: id
  }, /*#__PURE__*/_react.default.createElement("input", {
    id: id,
    type: "checkbox",
    value: "on",
    checked: props.isEditMode ? 'on' === localValue : 'on' === props.value,
    onChange: e => {
      const value = e.target.checked ? 'on' : '';
      setLocalValue(value);
      props.onChange(value);
    },
    disabled: !props.isEditMode
  }));
}
Acceptance.propTypes = {
  ..._index.basePropTypes
};

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/components/submission-value/checkbox.js":
/*!********************************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/components/submission-value/checkbox.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Checkbox;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _index = __webpack_require__(/*! ./index */ "../modules/forms/submissions/assets/js/admin/components/submission-value/index.js");
var _useWatch = _interopRequireDefault(__webpack_require__(/*! ../../hooks/use-watch */ "../modules/forms/submissions/assets/js/admin/hooks/use-watch.js"));
var _useFormFieldOptions = _interopRequireDefault(__webpack_require__(/*! ../../hooks/use-form-field-options */ "../modules/forms/submissions/assets/js/admin/hooks/use-form-field-options.js"));
const {
  useState,
  useMemo
} = _react.default;
function Checkbox(props) {
  const value = useMemo(() => props.value.split(', '), [props.value]),
    [localValue, setLocalValue] = useState(value);
  (0, _useWatch.default)(() => props.onChange(localValue.join(', ')), [localValue]);
  const options = (0, _useFormFieldOptions.default)(props.field.options);
  return options.map(option => {
    const id = props.field.id + '-' + option.value;
    return /*#__PURE__*/_react.default.createElement("label", {
      className: "e-form-submissions-value-label",
      key: option.value,
      htmlFor: id
    }, /*#__PURE__*/_react.default.createElement("input", {
      id: id,
      type: "checkbox",
      value: option.value,
      checked: props.isEditMode ? localValue.includes(option.value) : value.includes(option.value),
      onChange: e => {
        const checked = e.target.checked;
        setLocalValue(prev => {
          if (!checked) {
            prev = prev.filter(item => item !== option.value);
          } else {
            prev = [...prev, option.value];
          }
          return prev;
        });
      },
      disabled: !props.isEditMode
    }), option.label);
  });
}
Checkbox.propTypes = {
  ..._index.basePropTypes
};

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/components/submission-value/date.js":
/*!****************************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/components/submission-value/date.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Date;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _index = __webpack_require__(/*! ./index */ "../modules/forms/submissions/assets/js/admin/components/submission-value/index.js");
var _text = _interopRequireDefault(__webpack_require__(/*! ./text */ "../modules/forms/submissions/assets/js/admin/components/submission-value/text.js"));
var _date = __webpack_require__(/*! ../../utils/date */ "../modules/forms/submissions/assets/js/admin/utils/date.js");
function Date(props) {
  return /*#__PURE__*/_react.default.createElement(_text.default, {
    value: props.value,
    isEditMode: props.isEditMode,
    onChange: props.onChange,
    field: props.field
  }, props.value && (0, _date.formatToLocalDate)(props.value));
}
Date.propTypes = {
  ..._index.basePropTypes
};

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/components/submission-value/email.js":
/*!*****************************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/components/submission-value/email.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Email;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _index = __webpack_require__(/*! ./index */ "../modules/forms/submissions/assets/js/admin/components/submission-value/index.js");
var _text = _interopRequireDefault(__webpack_require__(/*! ./text */ "../modules/forms/submissions/assets/js/admin/components/submission-value/text.js"));
function Email(props) {
  return /*#__PURE__*/_react.default.createElement(_text.default, {
    value: props.value,
    isEditMode: props.isEditMode,
    onChange: props.onChange,
    field: props.field
  }, props.value && /*#__PURE__*/_react.default.createElement("a", {
    href: `mailto:${props.value}`
  }, props.value));
}
Email.propTypes = {
  ..._index.basePropTypes
};

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/components/submission-value/index.js":
/*!*****************************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/components/submission-value/index.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.basePropTypes = void 0;
exports["default"] = SubmissionValue;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _text = _interopRequireDefault(__webpack_require__(/*! ./text */ "../modules/forms/submissions/assets/js/admin/components/submission-value/text.js"));
var _email = _interopRequireDefault(__webpack_require__(/*! ./email */ "../modules/forms/submissions/assets/js/admin/components/submission-value/email.js"));
var _tel = _interopRequireDefault(__webpack_require__(/*! ./tel */ "../modules/forms/submissions/assets/js/admin/components/submission-value/tel.js"));
var _url = _interopRequireDefault(__webpack_require__(/*! ./url */ "../modules/forms/submissions/assets/js/admin/components/submission-value/url.js"));
var _radio = _interopRequireDefault(__webpack_require__(/*! ./radio */ "../modules/forms/submissions/assets/js/admin/components/submission-value/radio.js"));
var _select = _interopRequireDefault(__webpack_require__(/*! ./select */ "../modules/forms/submissions/assets/js/admin/components/submission-value/select.js"));
var _checkbox = _interopRequireDefault(__webpack_require__(/*! ./checkbox */ "../modules/forms/submissions/assets/js/admin/components/submission-value/checkbox.js"));
var _acceptance = _interopRequireDefault(__webpack_require__(/*! ./acceptance */ "../modules/forms/submissions/assets/js/admin/components/submission-value/acceptance.js"));
var _upload = _interopRequireDefault(__webpack_require__(/*! ./upload */ "../modules/forms/submissions/assets/js/admin/components/submission-value/upload.js"));
var _date = _interopRequireDefault(__webpack_require__(/*! ./date */ "../modules/forms/submissions/assets/js/admin/components/submission-value/date.js"));
var _time = _interopRequireDefault(__webpack_require__(/*! ./time */ "../modules/forms/submissions/assets/js/admin/components/submission-value/time.js"));
var _textarea = _interopRequireDefault(__webpack_require__(/*! ./textarea */ "../modules/forms/submissions/assets/js/admin/components/submission-value/textarea.js"));
const {
  useMemo
} = _react.default;
const defaultComponent = _text.default;
const components = Object.entries({
  Email: _email.default,
  Tel: _tel.default,
  Url: _url.default,
  Radio: _radio.default,
  Select: _select.default,
  Checkbox: _checkbox.default,
  Acceptance: _acceptance.default,
  Upload: _upload.default,
  Date: _date.default,
  Time: _time.default,
  Textarea: _textarea.default,
  Text: _text.default
}).reduce((current, [key, component]) => ({
  ...current,
  [key.toLowerCase()]: component
}), {});
const basePropTypes = exports.basePropTypes = {
  value: PropTypes.string,
  isEditMode: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  field: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
    is_multiple: PropTypes.bool
  })
};
function SubmissionValue(props) {
  const Component = useMemo(() => {
    const key = props.field?.type;
    return Object.prototype.hasOwnProperty.call(components, key) ? components[key] : defaultComponent;
  }, [props.field, props.value]);
  return /*#__PURE__*/_react.default.createElement(Component, {
    value: props.value,
    field: props.field,
    isEditMode: props.isEditMode,
    onChange: value => props.onChange(props.field.id, value)
  });
}
SubmissionValue.propTypes = {
  ...basePropTypes
};
SubmissionValue.defaultProps = {
  isEditMode: false
};

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/components/submission-value/radio.js":
/*!*****************************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/components/submission-value/radio.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Radio;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _index = __webpack_require__(/*! ./index */ "../modules/forms/submissions/assets/js/admin/components/submission-value/index.js");
var _useFormFieldOptions = _interopRequireDefault(__webpack_require__(/*! ../../hooks/use-form-field-options */ "../modules/forms/submissions/assets/js/admin/hooks/use-form-field-options.js"));
const {
  useState
} = _react.default;
function Radio(props) {
  const [localValue, setLocalValue] = useState(props.value);
  const options = (0, _useFormFieldOptions.default)(props.field.options);
  return options.map(option => {
    const id = props.field.id + '-' + option.value;
    return /*#__PURE__*/_react.default.createElement("label", {
      className: "e-form-submissions-value-label",
      key: option.value,
      htmlFor: id
    }, /*#__PURE__*/_react.default.createElement("input", {
      id: id,
      type: "radio",
      value: option.value,
      checked: props.isEditMode ? option.value === localValue : option.value === props.value,
      onChange: () => {
        setLocalValue(option.value);
        props.onChange(option.value);
      },
      disabled: !props.isEditMode
    }), option.label);
  });
}
Radio.propTypes = {
  ..._index.basePropTypes
};

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/components/submission-value/select.js":
/*!******************************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/components/submission-value/select.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Select;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _index = __webpack_require__(/*! ./index */ "../modules/forms/submissions/assets/js/admin/components/submission-value/index.js");
var _useFormFieldOptions = _interopRequireDefault(__webpack_require__(/*! ../../hooks/use-form-field-options */ "../modules/forms/submissions/assets/js/admin/hooks/use-form-field-options.js"));
const {
  useState
} = _react.default;
function Select(props) {
  const value = props.field.is_multiple ? props.value.split(', ') : props.value;
  const [localValue, setLocalValue] = useState(value);
  const options = (0, _useFormFieldOptions.default)(props.field.options);
  return /*#__PURE__*/_react.default.createElement("select", {
    value: props.isEditMode ? localValue : value,
    multiple: props.field.is_multiple,
    onChange: e => {
      const selectedValues = Array.from(e.target.selectedOptions, option => option.value);
      setLocalValue(props.field.is_multiple ? selectedValues : selectedValues[0]);
      props.onChange(selectedValues.join(', '));
    },
    disabled: !props.isEditMode
  }, options.map(option => /*#__PURE__*/_react.default.createElement("option", {
    value: option.value,
    key: option.value
  }, option.label)));
}
Select.propTypes = {
  ..._index.basePropTypes
};

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/components/submission-value/tel.js":
/*!***************************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/components/submission-value/tel.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Tel;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _index = __webpack_require__(/*! ./index */ "../modules/forms/submissions/assets/js/admin/components/submission-value/index.js");
var _text = _interopRequireDefault(__webpack_require__(/*! ./text */ "../modules/forms/submissions/assets/js/admin/components/submission-value/text.js"));
function Tel(props) {
  return /*#__PURE__*/_react.default.createElement(_text.default, {
    value: props.value,
    isEditMode: props.isEditMode,
    onChange: props.onChange,
    field: props.field
  }, props.value && /*#__PURE__*/_react.default.createElement("a", {
    href: `tel:${props.value}`
  }, props.value));
}
Tel.propTypes = {
  ..._index.basePropTypes
};

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/components/submission-value/text.js":
/*!****************************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/components/submission-value/text.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Text;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _index = __webpack_require__(/*! ./index */ "../modules/forms/submissions/assets/js/admin/components/submission-value/index.js");
const {
  useState,
  useMemo
} = _react.default;
const availableInputTypes = {
  email: 'email',
  date: 'date',
  time: 'time',
  tel: 'tel',
  url: 'url',
  number: 'number',
  text: 'text'
};
const defaultInputType = availableInputTypes.text;
function Text(props) {
  const [localValue, setLocalValue] = useState(props.value);
  const inputType = useMemo(() => Object.prototype.hasOwnProperty.call(availableInputTypes, props.field?.type) ? availableInputTypes[props.field.type] : defaultInputType, [props.field]);
  return props.isEditMode ? /*#__PURE__*/_react.default.createElement("input", {
    type: inputType,
    value: localValue,
    onChange: ({
      target: {
        value
      }
    }) => {
      setLocalValue(value);
      props.onChange(value);
    }
  }) : props.children || props.value;
}
Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  ..._index.basePropTypes
};

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/components/submission-value/textarea.js":
/*!********************************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/components/submission-value/textarea.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Textarea;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _index = __webpack_require__(/*! ./index */ "../modules/forms/submissions/assets/js/admin/components/submission-value/index.js");
const {
  useState
} = _react.default;
function Textarea(props) {
  const [localValue, setLocalValue] = useState(props.value);
  return props.isEditMode ? /*#__PURE__*/_react.default.createElement("textarea", {
    value: props.isEditMode ? localValue : props.value,
    rows: "4",
    onChange: e => {
      const value = e.target.value;
      setLocalValue(value);
      props.onChange(value);
    }
  }) : props.value;
}
Textarea.propTypes = {
  ..._index.basePropTypes
};

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/components/submission-value/time.js":
/*!****************************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/components/submission-value/time.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Time;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _index = __webpack_require__(/*! ./index */ "../modules/forms/submissions/assets/js/admin/components/submission-value/index.js");
var _text = _interopRequireDefault(__webpack_require__(/*! ./text */ "../modules/forms/submissions/assets/js/admin/components/submission-value/text.js"));
var _date = __webpack_require__(/*! ../../utils/date */ "../modules/forms/submissions/assets/js/admin/utils/date.js");
function Time(props) {
  return /*#__PURE__*/_react.default.createElement(_text.default, {
    value: props.value,
    isEditMode: props.isEditMode,
    onChange: props.onChange,
    field: props.field
  }, props.value && (0, _date.formatToLocalTime)(`2000-01-01 ${props.value}`));
}
Time.propTypes = {
  ..._index.basePropTypes
};

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/components/submission-value/upload.js":
/*!******************************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/components/submission-value/upload.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Upload;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _index = __webpack_require__(/*! ./index */ "../modules/forms/submissions/assets/js/admin/components/submission-value/index.js");
function Upload(props) {
  const value = props.value.split(' , ');
  const isAttached = 'attached' === value[0];
  if (isAttached) {
    const message = value.length > 1 ? __("Attachments to email won't be saved.", 'elementor-pro') : __("Attachment to email won't be saved.", 'elementor-pro');
    return /*#__PURE__*/_react.default.createElement("span", null, message);
  }
  return value.map(path => /*#__PURE__*/_react.default.createElement("div", {
    key: path
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: path,
    target: "_blank",
    rel: "noreferrer"
  }, path)));
}
Upload.propTypes = {
  ..._index.basePropTypes
};

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/components/submission-value/url.js":
/*!***************************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/components/submission-value/url.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Url;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _index = __webpack_require__(/*! ./index */ "../modules/forms/submissions/assets/js/admin/components/submission-value/index.js");
var _text = _interopRequireDefault(__webpack_require__(/*! ./text */ "../modules/forms/submissions/assets/js/admin/components/submission-value/text.js"));
function Url(props) {
  return /*#__PURE__*/_react.default.createElement(_text.default, {
    value: props.value,
    isEditMode: props.isEditMode,
    onChange: props.onChange,
    field: props.field
  }, props.value && /*#__PURE__*/_react.default.createElement("a", {
    href: props.value,
    target: "_blank",
    rel: "noreferrer"
  }, props.value));
}
Url.propTypes = {
  ..._index.basePropTypes
};

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/components/wp-table/body.js":
/*!********************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/components/wp-table/body.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Body;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
function Body(props) {
  return /*#__PURE__*/_react.default.createElement("tbody", {
    id: "the-list"
  }, props.children);
}
Body.propTypes = {
  children: PropTypes.any
};

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/components/wp-table/cell.js":
/*!********************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/components/wp-table/cell.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Cell;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
function Cell(props) {
  const Component = props.component;
  return /*#__PURE__*/_react.default.createElement(Component, {
    className: props.className,
    style: props.style,
    "data-colname": props.colName,
    colSpan: props.colSpan
  }, props.children);
}
Cell.propTypes = {
  component: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object,
  colName: PropTypes.string,
  colSpan: PropTypes.number
};
Cell.defaultProps = {
  component: 'td',
  className: ''
};

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/components/wp-table/footer.js":
/*!**********************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/components/wp-table/footer.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Footer;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
function Footer(props) {
  return /*#__PURE__*/_react.default.createElement("tfoot", null, props.children);
}
Footer.propTypes = {
  children: PropTypes.any
};

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/components/wp-table/header.js":
/*!**********************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/components/wp-table/header.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Header;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
function Header(props) {
  return /*#__PURE__*/_react.default.createElement("thead", null, props.children);
}
Header.propTypes = {
  children: PropTypes.any
};

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/components/wp-table/index.js":
/*!*********************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/components/wp-table/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = WpTable;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _header = _interopRequireDefault(__webpack_require__(/*! ./header */ "../modules/forms/submissions/assets/js/admin/components/wp-table/header.js"));
var _body = _interopRequireDefault(__webpack_require__(/*! ./body */ "../modules/forms/submissions/assets/js/admin/components/wp-table/body.js"));
var _footer = _interopRequireDefault(__webpack_require__(/*! ./footer */ "../modules/forms/submissions/assets/js/admin/components/wp-table/footer.js"));
var _row = _interopRequireDefault(__webpack_require__(/*! ./row */ "../modules/forms/submissions/assets/js/admin/components/wp-table/row.js"));
var _cell = _interopRequireDefault(__webpack_require__(/*! ./cell */ "../modules/forms/submissions/assets/js/admin/components/wp-table/cell.js"));
var _orderableCell = _interopRequireDefault(__webpack_require__(/*! ./orderable-cell */ "../modules/forms/submissions/assets/js/admin/components/wp-table/orderable-cell.js"));
var _rowActions = _interopRequireDefault(__webpack_require__(/*! ./row-actions */ "../modules/forms/submissions/assets/js/admin/components/wp-table/row-actions.js"));
function WpTable(props) {
  return /*#__PURE__*/_react.default.createElement("table", {
    className: `wp-list-table widefat fixed table-view-list ${props.className}`,
    style: props.style
  }, props.children);
}
WpTable.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
  className: PropTypes.string
};
WpTable.defaultProps = {
  className: ''
};
WpTable.Header = _header.default;
WpTable.Body = _body.default;
WpTable.Footer = _footer.default;
WpTable.Row = _row.default;
WpTable.Cell = _cell.default;
WpTable.OrderableCell = _orderableCell.default;
WpTable.RowActions = _rowActions.default;

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/components/wp-table/orderable-cell.js":
/*!******************************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/components/wp-table/orderable-cell.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = OrderableCell;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _cell = _interopRequireDefault(__webpack_require__(/*! ./cell */ "../modules/forms/submissions/assets/js/admin/components/wp-table/cell.js"));
/* eslint-disable jsx-a11y/anchor-is-valid */

function OrderableCell(props) {
  const className = `${props.className} sortable ${props.order.current.by === props.order.key && `sorted ${props.order.current.direction}`}`;
  return /*#__PURE__*/_react.default.createElement(_cell.default, {
    component: props.component,
    style: props.style,
    className: className
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    onClick: () => props.order.onChange({
      by: props.order.key,
      direction: props.order.key === props.order.current.by && 'asc' === props.order.current.direction ? 'desc' : 'asc'
    })
  }, /*#__PURE__*/_react.default.createElement("span", null, props.children), /*#__PURE__*/_react.default.createElement("span", {
    className: "sorting-indicator"
  })));
}
OrderableCell.propTypes = {
  ..._cell.default.propTypes,
  order: PropTypes.shape({
    key: PropTypes.string.isRequired,
    current: PropTypes.shape({
      by: PropTypes.string,
      direction: PropTypes.oneOf(['asc', 'desc'])
    }).isRequired,
    onChange: PropTypes.func.isRequired
  }).isRequired
};
OrderableCell.defaultProps = {
  ..._cell.default.defaultProps,
  component: 'th'
};

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/components/wp-table/row-actions.js":
/*!***************************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/components/wp-table/row-actions.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = RowActions;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js"));
function RowActions(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "row-actions",
    style: {
      fontWeight: 'normal'
    }
  }, props.actions.map((action, index) => {
    const isLastAction = index + 1 === props.actions.length;
    const ActionComponent = action.component || 'a';
    return /*#__PURE__*/_react.default.createElement("span", {
      key: action.key,
      className: action.className
    }, /*#__PURE__*/_react.default.createElement(ActionComponent, (0, _extends2.default)({
      href: "#",
      "aria-label": action.label,
      onClick: e => {
        e.preventDefault();
        action.onApply(props.item);
      }
    }, action.props ? action.props(props.item) : {}), action.label), !isLastAction && /*#__PURE__*/_react.default.createElement("span", null, "\xA0|\xA0"));
  }));
}
RowActions.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onApply: PropTypes.func,
    className: PropTypes.string,
    props: PropTypes.func,
    component: PropTypes.any
  })),
  // The resource item that the table present.
  item: PropTypes.object
};

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/components/wp-table/row.js":
/*!*******************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/components/wp-table/row.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Row;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
function Row(props) {
  return /*#__PURE__*/_react.default.createElement("tr", {
    style: props.style,
    className: props.className
  }, props.children);
}
Row.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
  className: PropTypes.string
};
Row.defaultProps = {
  style: {},
  className: ''
};

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/context/notices-context.js":
/*!*******************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/context/notices-context.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.NOTICE_TYPE_SUCCESS = exports.NOTICE_TYPE_ERROR = void 0;
exports.NoticesProvider = NoticesProvider;
exports.useNoticesContext = useNoticesContext;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
const {
  createContext,
  useState,
  useCallback,
  useContext
} = _react.default;
const NOTICE_TYPE_SUCCESS = exports.NOTICE_TYPE_SUCCESS = 'success';
const NOTICE_TYPE_ERROR = exports.NOTICE_TYPE_ERROR = 'error';
const NoticesContext = createContext({
  notices: []
});

/**
 * Use Notifications context.
 *
 * @return {{}} Notices context
 */
function useNoticesContext() {
  return useContext(NoticesContext);
}

/**
 * Notification Provider.
 *
 * @param {any} props
 * @return {JSX.Element} Element
 * @class
 */
function NoticesProvider(props) {
  const [notices, setNotices] = useState([]);

  // Dismiss notification (remove from view).
  const dismiss = useCallback(key => {
    setNotices(prev => prev.filter(notice => notice.key !== key));
  }, []);

  // Add notification (show in view).
  const notify = useCallback(({
    message,
    undoAction,
    type,
    dismissible = true
  }) => {
    if (!message) {
      return;
    }
    const key = Date.now() + Math.random();
    setNotices(prev => [{
      key,
      message,
      type,
      undoAction,
      dismissible
    }, ...prev]);
    if (props.dismissTimeout) {
      setTimeout(() => dismiss(key), props.dismissTimeout);
    }
  }, []);

  // Notify an error message
  const notifyError = useCallback(message => {
    notify({
      message,
      type: NOTICE_TYPE_ERROR
    });
  }, [notify]);

  // Notify a success message
  const notifySuccess = useCallback((message, undoAction) => {
    notify({
      message,
      undoAction,
      type: NOTICE_TYPE_SUCCESS
    });
  }, [notify]);
  return /*#__PURE__*/_react.default.createElement(NoticesContext.Provider, {
    value: {
      notices,
      notify,
      notifyError,
      notifySuccess,
      dismiss
    }
  }, props.children);
}
NoticesProvider.propTypes = {
  children: PropTypes.any,
  dismissTimeout: PropTypes.number
};
NoticesProvider.defaultProps = {
  dismissTimeout: 4000
};

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/context/settings-context.js":
/*!********************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/context/settings-context.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SettingsProvider = SettingsProvider;
exports.useSettingsContext = useSettingsContext;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
const {
  createContext,
  useContext
} = _react.default;
const SettingsContext = createContext({});

/**
 * Consume the context
 *
 * @return {{emptyTrashDays: number}} Settings context
 */
function useSettingsContext() {
  return useContext(SettingsContext);
}

/**
 * Settings Provider
 *
 * @param {any} props
 * @return {JSX.Element} Element
 * @class
 */
function SettingsProvider(props) {
  return /*#__PURE__*/_react.default.createElement(SettingsContext.Provider, {
    value: props.value
  }, props.children);
}
SettingsProvider.propTypes = {
  children: PropTypes.any,
  value: PropTypes.object.isRequired
};

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/data/commands/export.js":
/*!****************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/data/commands/export.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Export = void 0;
class Export extends $e.modules.CommandData {
  static getEndpointFormat() {
    return 'form-submissions/export/{id}';
  }
  onCatchApply() {
    // Do nothing. (override parent behavior)
  }
}
exports.Export = Export;

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/data/commands/forms-index.js":
/*!*********************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/data/commands/forms-index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Index = void 0;
class Index extends $e.modules.CommandData {
  static getEndpointFormat() {
    return 'forms/{id}';
  }
}
exports.Index = Index;

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/data/commands/index.js":
/*!***************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/data/commands/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Export", ({
  enumerable: true,
  get: function () {
    return _export.Export;
  }
}));
exports.Index = void 0;
Object.defineProperty(exports, "Referer", ({
  enumerable: true,
  get: function () {
    return _referer.Referer;
  }
}));
Object.defineProperty(exports, "Restore", ({
  enumerable: true,
  get: function () {
    return _restore.Restore;
  }
}));
var _restore = __webpack_require__(/*! ./restore */ "../modules/forms/submissions/assets/js/admin/data/commands/restore.js");
var _export = __webpack_require__(/*! ./export */ "../modules/forms/submissions/assets/js/admin/data/commands/export.js");
var _referer = __webpack_require__(/*! ./referer */ "../modules/forms/submissions/assets/js/admin/data/commands/referer.js");
class Index extends $e.modules.CommandData {
  static getEndpointFormat() {
    return 'form-submissions/{id}';
  }
}
exports.Index = Index;

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/data/commands/referer.js":
/*!*****************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/data/commands/referer.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Referer = void 0;
class Referer extends $e.modules.CommandData {
  static getEndpointFormat() {
    return 'form-submissions/referer/{id}';
  }
}
exports.Referer = Referer;

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/data/commands/restore.js":
/*!*****************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/data/commands/restore.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Restore = void 0;
class Restore extends $e.modules.CommandData {
  static getEndpointFormat() {
    return 'form-submissions/restore/{id}';
  }
}
exports.Restore = Restore;

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/data/component.js":
/*!**********************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/data/component.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var dataCommands = _interopRequireWildcard(__webpack_require__(/*! ./commands */ "../modules/forms/submissions/assets/js/admin/data/commands/index.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
class Component extends $e.modules.ComponentBase {
  getNamespace() {
    return 'form-submissions';
  }
  defaultData() {
    return this.importCommands(dataCommands);
  }
}
exports["default"] = Component;

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/data/forms-component.js":
/*!****************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/data/forms-component.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var dataCommands = _interopRequireWildcard(__webpack_require__(/*! ./commands/forms-index */ "../modules/forms/submissions/assets/js/admin/data/commands/forms-index.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
class FormsComponent extends $e.modules.ComponentBase {
  static namespace = 'forms';
  getNamespace() {
    return this.constructor.namespace;
  }
  defaultData() {
    return this.importCommands(dataCommands);
  }
}
exports["default"] = FormsComponent;

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/hooks/use-data-action.js":
/*!*****************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/hooks/use-data-action.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.STATUS_SUCCESS = exports.STATUS_LOADING = exports.STATUS_IDLE = exports.STATUS_ERROR = void 0;
exports["default"] = useDataAction;
const {
  useRef,
  useCallback,
  useState,
  useMemo
} = React;
const STATUS_IDLE = exports.STATUS_IDLE = 'idle';
const STATUS_LOADING = exports.STATUS_LOADING = 'loading';
const STATUS_SUCCESS = exports.STATUS_SUCCESS = 'success';
const STATUS_ERROR = exports.STATUS_ERROR = 'error';
function useDataAction(action, deps = []) {
  const abortControllerRef = useRef();
  const [status, setStatus] = useState(STATUS_IDLE);

  // To avoid multiple declaration of the action callback, it memorize the argument that SHOULD
  // trigger a new declaration of the action callback.
  const calculatedDeps = useMemo(() => [...deps, status], [deps, status]);
  const wrappedAction = useCallback((...args) => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();
    setStatus(STATUS_LOADING);
    return action(args, {
      abortController: abortControllerRef.current,
      status
    }).then(result => {
      setStatus(STATUS_SUCCESS);
      return result;
    }).catch(error => {
      setStatus(STATUS_ERROR);
      return Promise.reject(error);
    });
  }, [calculatedDeps]);
  return [wrappedAction, {
    abortController: abortControllerRef.current,
    status
  }];
}

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/hooks/use-export.js":
/*!************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/hooks/use-export.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.EXPORT_MODE_SELECTED = exports.EXPORT_MODE_FILTERED = exports.EXPORT_MODE_ALL = void 0;
exports.useExport = useExport;
var _useDataAction = _interopRequireWildcard(__webpack_require__(/*! ./use-data-action */ "../modules/forms/submissions/assets/js/admin/hooks/use-data-action.js"));
var _downloadBlob = _interopRequireDefault(__webpack_require__(/*! ../utils/download-blob */ "../modules/forms/submissions/assets/js/admin/utils/download-blob.js"));
var _noticesContext = __webpack_require__(/*! ../context/notices-context */ "../modules/forms/submissions/assets/js/admin/context/notices-context.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const EXPORT_MODE_ALL = exports.EXPORT_MODE_ALL = 'all';
const EXPORT_MODE_SELECTED = exports.EXPORT_MODE_SELECTED = 'selected';
const EXPORT_MODE_FILTERED = exports.EXPORT_MODE_FILTERED = 'filtered';
const {
  useState,
  useMemo
} = React;
const ZIP_NAME_FORMAT = 'elementor-submissions-export-{DATE}';
const EXPORT_FILE_NAME_FORMAT = 'elementor-submissions-export-{FORM_LABEL}-{DATE}';
const DEFAULT_MAX_ROWS_PER_REQUEST = 10000;
const defaultOptions = {
  maxRowsPerRequest: DEFAULT_MAX_ROWS_PER_REQUEST,
  checked: [],
  filter: {}
};

/**
 * Export functionality
 *
 * @param {any} hookOptions
 * @return {(any|{mode: (string), progress: {success: number, count: number}, status: string})[]} [ exportSubmissions, { mode, progress, status: exportStatus } ]
 */
function useExport(hookOptions) {
  const options = useMemo(() => ({
    ...defaultOptions,
    ...hookOptions
  }), [hookOptions]);
  const {
    notifyError
  } = (0, _noticesContext.useNoticesContext)();
  const [progress, setProgress] = useState({
    count: 0,
    success: 0
  });
  const mode = useMemo(() => {
    if (options.checked.length > 0) {
      return EXPORT_MODE_SELECTED;
    }
    const filter = Object.fromEntries(Object.entries(options.filter).filter(([, value]) => value));
    if (1 === Object.keys(filter).length && 'all' === filter.status) {
      return EXPORT_MODE_ALL;
    }
    return EXPORT_MODE_FILTERED;
  }, [options.checked, options.filter]);
  const [exportSubmissions, {
    status: exportStatus
  }] = (0, _useDataAction.default)(([query, total], {
    abortController,
    status
  }) => {
    if (status === _useDataAction.STATUS_LOADING && abortController) {
      abortController.abort();
      return Promise.reject({
        message: 'Aborted'
      });
    }
    const numberOfRequests = Math.ceil(total / options.maxRowsPerRequest);
    let exportDataByForm = {};
    let promise = Promise.resolve();
    setProgress({
      count: numberOfRequests,
      success: 0
    });
    for (let i = 1; i <= numberOfRequests; i++) {
      promise = promise.then(() => $e.data.get('form-submissions/export', {
        ...query,
        per_page: options.maxRowsPerRequest,
        page: i
      }, {
        refresh: true,
        signal: abortController.signal
      })).then(result => {
        const shouldSaveHeaders = 1 === i;
        exportDataByForm = mergeFormExportData(result.data.data, exportDataByForm, shouldSaveHeaders);
        setProgress(prev => ({
          ...prev,
          success: i
        }));
      });
    }
    return promise.then(() => downloadExportsResults(Object.values(exportDataByForm))).catch(error => notifyError(error.message));
  }, [options.maxRowsPerRequest]);
  return [exportSubmissions, {
    mode,
    progress,
    status: exportStatus
  }];
}

/**
 * Merge data from one response into the current data from all the other responses.
 *
 * @param {Array}   response
 * @param {any}     current
 * @param {boolean} shouldSaveHeaders
 * @return {any} Form results
 */
function mergeFormExportData(response, current, shouldSaveHeaders) {
  response.forEach(formResult => {
    // The first row of each csv response is the headers row. When it merges all csv responses, it deletes
    // the headers for each response except from the first one, the result will be only one row headers in the final csv.
    if (!shouldSaveHeaders) {
      delete formResult.content[0];
    }
    current = {
      ...current,
      [formResult.id]: {
        ...formResult,
        content: (current[formResult.id]?.content || '') + formResult.content.join('\n')
      }
    };
  });
  return current;
}

/**
 * Merge all the promises result into one csv and download it.
 *
 * @param {Array} dataResults
 */
function downloadExportsResults(dataResults) {
  const currentDate = wp.date.date('Y-m-d');
  const files = dataResults.map(item => transformFormResultIntoBlob(item, currentDate));

  // If there is only one form file, just download it as csv instead of compressing it into a zip file.
  if (1 === files.length) {
    (0, _downloadBlob.default)(files[0].blob, files[0].filename);
    return;
  }
  __webpack_require__.e(/*! import() | jszip.vendor */ "jszip.vendor").then(__webpack_require__.t.bind(__webpack_require__, /*! jszip */ "../node_modules/jszip/dist/jszip.min.js", 23)).then(({
    default: JSZip
  }) => {
    const zip = new JSZip();
    files.forEach(({
      filename,
      blob
    }) => zip.file(filename, blob));
    return zip.generateAsync({
      type: 'blob'
    });
  }).then(zipBlob => {
    (0, _downloadBlob.default)(zipBlob, ZIP_NAME_FORMAT.replace('{DATE}', currentDate));
  });
}

/**
 * Transform the merged result from the server into a blob.
 *
 * @param {any}  formResult
 * @param {Date} currentDate
 * @return {{filename: string, blob: Blob}} Filename and blob
 */
function transformFormResultIntoBlob(formResult, currentDate) {
  return {
    filename: EXPORT_FILE_NAME_FORMAT.replace('{FORM_LABEL}', formResult.form_label).replace('{DATE}', currentDate).concat(`.${formResult.extension}`),
    blob: new Blob([
    // UTF-8 BOM to support microsoft excel
    // ref: https://stackoverflow.com/questions/31959487/utf-8-encoidng-issue-when-exporting-csv-file-javascript
    '\ufeff', formResult.content], {
      type: formResult.mimetype
    })
  };
}

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/hooks/use-form-field-options.js":
/*!************************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/hooks/use-form-field-options.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useFormFieldOptions;
const {
  useMemo
} = React;

/**
 * The options that received from the API is an array of strings,
 * each string can be a regular value e.g: 'red' or 'blue'
 * or a pair of label and value e.g: 'Red|red' or 'Blue|blue'
 * this parse the array and return an object of 'value' and 'label'
 *
 * @param {Array} options
 */
function useFormFieldOptions(options) {
  return useMemo(() => {
    return options.map(rawOption => {
      const [label, value] = rawOption.split('|');
      return {
        label,
        value: value === undefined ? label : value
      };
    });
  }, [options]);
}

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/hooks/use-methods-reducer.js":
/*!*********************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/hooks/use-methods-reducer.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useMethodsReducer;
/**
 * Creates a more convenient way to use `useReducer`.
 * Inspired by useMethods package
 *
 * @see https://github.com/pelotom/use-methods
 *
 * @param {any} methods
 * @param {any} initialState
 * @param {any} init
 * @return {Array<any>} [state, actions, dispatch]
 */
function useMethodsReducer(methods, initialState, init = undefined) {
  const [state, dispatch] = React.useReducer((currentState, action) => {
    if (!Object.prototype.hasOwnProperty.call(methods, action.type)) {
      throw Error(`The action type ${action.type} is not exists`);
    }
    return methods[action.type](currentState, action.payload);
  }, initialState, init);
  return [state, generateActions(methods, dispatch), dispatch];
}

/**
 * Bind all the actions to the dispatcher.
 *
 * @param {any}      methods
 * @param {Function} dispatch
 * @return {{}} Actions
 */
function generateActions(methods, dispatch) {
  return Object.keys(methods).reduce((current, type) => {
    return {
      ...current,
      [type]: payload => dispatch({
        type,
        payload
      })
    };
  }, {});
}

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/hooks/use-rest-data-list.js":
/*!********************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/hooks/use-rest-data-list.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useRestDataList;
var _useMethodsReducer = _interopRequireDefault(__webpack_require__(/*! ./use-methods-reducer */ "../modules/forms/submissions/assets/js/admin/hooks/use-methods-reducer.js"));
var _useRouterQueryString = _interopRequireDefault(__webpack_require__(/*! ./use-router-query-string */ "../modules/forms/submissions/assets/js/admin/hooks/use-router-query-string.js"));
var _useDataAction = _interopRequireDefault(__webpack_require__(/*! ./use-data-action */ "../modules/forms/submissions/assets/js/admin/hooks/use-data-action.js"));
const {
  useState,
  useEffect,
  useMemo
} = React;

/**
 * Default options for the use function
 *
 * @type {{useRouterQueryString: boolean, allowedFilters: Array}}
 */
const defaultOptions = {
  allowedFilters: [],
  useRouterQueryString: false,
  hooks: {
    afterFetch: () => {}
  }
};
const defaultQueryArgs = ['order', 'order_by', 'page', 'per_page'];
let currentFlatQuery = {};

/**
 * Main function
 *
 * @param {any}    command
 * @param {Object} options
 * @return {{fetchData: any, data: any, meta: any, query: any, actions: {setOrder: any, setFilter: any, setPage: any}}} REST data
 */
function useRestDataList(command, options = {}) {
  options = {
    ...defaultOptions,
    ...options
  };
  const queryArgs = [...defaultQueryArgs, ...options.allowedFilters],
    [{
      data,
      meta
    }, setFetchResult] = useState({
      data: [],
      meta: {}
    }),
    {
      query,
      flatQuery,
      actions: {
        setFilter,
        setPage,
        setOrder,
        setInitial
      }
    } = useQuery(),
    [routerQueryString, setRouterQueryString] = (0, _useRouterQueryString.default)(queryArgs);

  // There is a weird bug, when calling the fetch data function from another function
  // the flatQuery inside the function is an old version of the flatQuery and not the updated one.
  // this cause a wrong request to the server that retrieve a wrong result.
  currentFlatQuery = flatQuery;

  // The fetch data action.
  const [fetchData, {
    status: fetchDataStatus
  }] = (0, _useDataAction.default)((args, {
    abortController
  }) => $e.data.get(command, currentFlatQuery, {
    refresh: true,
    signal: abortController.signal
  }).then(response => setFetchResult(response.data)).then(() => options.hooks.afterFetch()), [command, flatQuery]);
  useEffect(() => {
    const queryStringResult = options.useRouterQueryString ? routerQueryString : {};
    setInitial({
      filter: {
        search: queryStringResult?.search || null,
        status: queryStringResult?.status || 'all',
        form: queryStringResult?.form || null,
        referer: queryStringResult?.referer || null,
        after: queryStringResult?.after || null,
        before: queryStringResult?.before || null
      },
      page: queryStringResult.page || 1,
      perPage: queryStringResult.per_page || 50,
      order: {
        by: queryStringResult.order_by || 'created_at',
        direction: queryStringResult.order || 'desc'
      }
    });
  }, []);

  // This effect runs every time the query object changes, and it fetch the data from the server.
  useEffect(() => {
    if (!query.ready) {
      return;
    }
    if (options.useRouterQueryString) {
      setRouterQueryString(flatQuery);
    }
    fetchData();
  }, [flatQuery]);
  return {
    data,
    meta,
    query,
    flatQuery,
    fetchData,
    statuses: {
      fetchDataStatus
    },
    actions: {
      setFilter,
      setOrder,
      setPage
    }
  };
}

/**
 * A reducer for the query of the rest list fetch.
 *
 * @return {{perPage: any, page: number}|{filter: any, page: number}|{ready: boolean}|{page: any}|(any|{})|Array|{sort: any}} { query, flatQuery, actions }
 */
function useQuery() {
  const [query, actions] = (0, _useMethodsReducer.default)({
    setFilter: (state, filter) => ({
      ...state,
      page: 1,
      filter: {
        ...state.filter,
        ...filter
      }
    }),
    setPage: (state, page) => ({
      ...state,
      page
    }),
    setPerPage: (state, perPage) => ({
      ...state,
      page: 1,
      perPage
    }),
    setOrder: (state, order) => ({
      ...state,
      order
    }),
    setInitial: (state, payload) => ({
      ...state,
      ...payload,
      ready: true
    })
  }, {
    ready: false,
    filter: {},
    page: 1,
    perPage: null,
    order: {
      by: 'id',
      direction: 'desc'
    }
  });
  const flatQuery = useMemo(() => {
    return Object.fromEntries(Object.entries({
      ...query.filter,
      page: query.page,
      per_page: query.perPage,
      order: query.order.direction,
      order_by: query.order.by
    }).filter(([, value]) => {
      // Removes all the falsy values from the flatQuery. In JS empty array is not a falsy value
      // so there is a special case that checks array and removes it from the flatQuery if it is an empty array.
      if (Array.isArray(value) && 0 === value.length) {
        return false;
      }
      return !!value;
    }));
  }, [query]);
  return {
    query,
    flatQuery,
    actions
  };
}

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/hooks/use-router-query-string.js":
/*!*************************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/hooks/use-router-query-string.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useRouterQueryString;
var _router = __webpack_require__(/*! @reach/router */ "../node_modules/@reach/router/es/index.js");
const {
  useEffect,
  useState
} = React;

/**
 * Manage the router query string base on "hash" history.
 *
 * @param {string[]} queryArgs
 * @return {Array<any, any>} [ query, setQuery ]
 */
function useRouterQueryString(queryArgs = []) {
  const location = (0, _router.useLocation)(),
    [isLocationRead, setIsLocationRead] = useState(false),
    [query, setQuery] = useState(false);

  // Read the query string (only at first render)
  useEffect(() => {
    if (!location?.pathname || isLocationRead) {
      return;
    }
    const parsedQueryString = queryArgs.reduce((current, arg) => {
      const value = wp.url.getQueryArg(location.pathname, arg);
      if (undefined === value) {
        return current;
      }
      return {
        ...current,
        [arg]: value
      };
    }, {});
    setQuery(parsedQueryString);
    setIsLocationRead(true);
  }, [location]);

  // Update the query string based on the query.
  useEffect(() => {
    if (!query) {
      return;
    }
    const basePath = location.pathname.split('?')[0] || '/';
    history.pushState(undefined, undefined, `#${wp.url.addQueryArgs(basePath, query)}`);
  }, [query]);
  return [query, setQuery];
}

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/hooks/use-watch.js":
/*!***********************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/hooks/use-watch.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useWatch;
const {
  useEffect,
  useRef
} = React;
function useWatch(callback, deps) {
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    callback();
  }, deps);
}

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/notice-messages.js":
/*!***********************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/notice-messages.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
const generalError = () => __('Something went wrong, please try again later.', 'elementor-pro');
var _default = exports["default"] = {
  trashed: {
    success: (count = 1) => (0, _i18n.sprintf)((0, _i18n._n)('%d submission moved to Trash.', '%d submissions moved to Trash.', count, 'elementor-pro'), count),
    error: generalError
  },
  deleted: {
    success: (count = 1) => (0, _i18n.sprintf)((0, _i18n._n)('%d submission permanently deleted.', '%d submissions permanently deleted.', count, 'elementor-pro'), count),
    error: generalError
  },
  updated: {
    success: (count = 1) => (0, _i18n.sprintf)((0, _i18n._n)('Submission has been successfully updated.', '%d submissions have been successfully updated.', count, 'elementor-pro'), count),
    error: generalError
  },
  restored: {
    success: (count = 1) => (0, _i18n.sprintf)((0, _i18n._n)('%d submission restored from Trash.', '%d submissions restored from Trash.', count, 'elementor-pro'), count),
    error: generalError
  },
  markedAsRead: {
    success: () => null,
    error: generalError
  },
  markedAsUnread: {
    success: () => null,
    error: generalError
  },
  actionLogs: {
    success: () => __('Action completed successfully.', 'elementor-pro'),
    failed: () => __('Action failed to run, please check your integration.', 'elementor-pro')
  }
};

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/pages/index.js":
/*!*******************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/pages/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Index;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js"));
var _checkbox = _interopRequireDefault(__webpack_require__(/*! ../components/checkbox */ "../modules/forms/submissions/assets/js/admin/components/checkbox/index.js"));
var _dateFilter = _interopRequireDefault(__webpack_require__(/*! ../components/date-filter */ "../modules/forms/submissions/assets/js/admin/components/date-filter.js"));
var _exportButton = _interopRequireDefault(__webpack_require__(/*! ../components/export-button */ "../modules/forms/submissions/assets/js/admin/components/export-button.js"));
var _link = _interopRequireDefault(__webpack_require__(/*! ../components/link */ "../modules/forms/submissions/assets/js/admin/components/link.js"));
var _linksFilter = _interopRequireDefault(__webpack_require__(/*! ../components/links-filter */ "../modules/forms/submissions/assets/js/admin/components/links-filter.js"));
var _noticeMessages = _interopRequireDefault(__webpack_require__(/*! ../notice-messages */ "../modules/forms/submissions/assets/js/admin/notice-messages.js"));
var _pagination = _interopRequireDefault(__webpack_require__(/*! ../components/pagination */ "../modules/forms/submissions/assets/js/admin/components/pagination.js"));
var _refererFilter = _interopRequireDefault(__webpack_require__(/*! ../components/referer-filter */ "../modules/forms/submissions/assets/js/admin/components/referer-filter.js"));
var _resourceFilter = _interopRequireDefault(__webpack_require__(/*! ../components/resource-filter */ "../modules/forms/submissions/assets/js/admin/components/resource-filter.js"));
var _searchBox = _interopRequireDefault(__webpack_require__(/*! ../components/search-box */ "../modules/forms/submissions/assets/js/admin/components/search-box.js"));
var _submissionRow = _interopRequireDefault(__webpack_require__(/*! ../components/submission-row */ "../modules/forms/submissions/assets/js/admin/components/submission-row.js"));
var _useDataAction = _interopRequireWildcard(__webpack_require__(/*! ../hooks/use-data-action */ "../modules/forms/submissions/assets/js/admin/hooks/use-data-action.js"));
var _useRestDataList = _interopRequireDefault(__webpack_require__(/*! ../hooks/use-rest-data-list */ "../modules/forms/submissions/assets/js/admin/hooks/use-rest-data-list.js"));
var _wpTable = _interopRequireDefault(__webpack_require__(/*! ../components/wp-table */ "../modules/forms/submissions/assets/js/admin/components/wp-table/index.js"));
var _bulkActionSelect = __webpack_require__(/*! ../components/bulk-action-select */ "../modules/forms/submissions/assets/js/admin/components/bulk-action-select.js");
var _useExport = __webpack_require__(/*! ../hooks/use-export */ "../modules/forms/submissions/assets/js/admin/hooks/use-export.js");
var _noticesContext = __webpack_require__(/*! ../context/notices-context */ "../modules/forms/submissions/assets/js/admin/context/notices-context.js");
var _settingsContext = __webpack_require__(/*! ../context/settings-context */ "../modules/forms/submissions/assets/js/admin/context/settings-context.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const {
  useMemo,
  useState
} = _react.default;
const ORDERABLE_CELLS = ['id', 'created_at', 'main_meta_id'];
const STATUSES = [{
  value: 'all',
  label: __('All', 'elementor-pro')
}, {
  value: 'unread',
  label: __('Unread', 'elementor-pro')
}, {
  value: 'read',
  label: __('Read', 'elementor-pro')
}, {
  value: 'trash',
  label: __('Trash', 'elementor-pro')
}];
function Index() {
  const {
    notifyError,
    notifySuccess
  } = (0, _noticesContext.useNoticesContext)();
  const {
    isTrashEnabled
  } = (0, _settingsContext.useSettingsContext)();
  const [checked, setChecked] = useState([]);
  const {
    data,
    meta,
    fetchData,
    flatQuery,
    query: {
      order,
      filter
    },
    statuses: {
      fetchDataStatus
    },
    actions: {
      setFilter,
      setOrder,
      setPage
    }
  } = (0, _useRestDataList.default)('form-submissions/index', {
    allowedFilters: ['search', 'status', 'form', 'referer', 'after', 'before'],
    useRouterQueryString: true,
    hooks: {
      afterFetch: () => setChecked([])
    }
  });
  const isTrashFilterOn = useMemo(() => 'trash' === filter.status, [filter.status]);
  const [exportSubmissions, exportOptions] = (0, _useExport.useExport)({
    checked,
    filter
  });
  const [updateRead] = (0, _useDataAction.default)(([query, isRead], {
    abortController
  }) => {
    if (!validateRestAction(query)) {
      return Promise.reject();
    }
    const messages = _noticeMessages.default[isRead ? 'markedAsRead' : 'markedAsUnread'];
    return $e.data.update('form-submissions/index', {
      is_read: isRead
    }, query, {
      signal: abortController.signal
    }).then(result => notifySuccess(messages.success(result.data.meta?.affected || 1))).then(fetchData).catch(() => notifyError(messages.error()));
  });
  const [restoreItems] = (0, _useDataAction.default)(([query], {
    abortController
  }) => {
    if (!validateRestAction(query)) {
      return Promise.reject();
    }
    return $e.data.update('form-submissions/restore', {}, query, {
      signal: abortController.signal
    }).then(result => notifySuccess(_noticeMessages.default.restored.success(result.data.meta?.affected || 1))).then(fetchData).catch(() => notifyError(_noticeMessages.default.restored.error()));
  });
  const [deleteItems] = (0, _useDataAction.default)(([query], {
    abortController
  }) => {
    if (!validateRestAction(query)) {
      return Promise.reject();
    }
    const messages = _noticeMessages.default[query.force ? 'deleted' : 'trashed'];
    return $e.data.delete('form-submissions/index', query, {
      signal: abortController.signal
    }).then(result => notifySuccess(messages.success(result.data.meta?.affected || 1), query.force ? null : () => restoreItems(query))).then(fetchData).catch(() => notifyError(messages.error()));
  });
  const rowActions = useMemo(() => [{
    key: 'view',
    label: __('View', 'elementor-pro'),
    shouldShow: item => 'trash' !== item.status,
    props: item => ({
      to: `/${item.id}`,
      // Override the default behavior of click event
      onClick: undefined
    }),
    component: _link.default
  }, {
    key: 'restore',
    label: __('Restore', 'elementor-pro'),
    onApply: item => restoreItems({
      id: item.id
    }),
    shouldShow: item => 'trash' === item.status
  }, {
    key: 'trash',
    label: __('Trash', 'elementor-pro'),
    onApply: item => deleteItems({
      id: item.id
    }),
    shouldShow: item => 'trash' !== item.status && isTrashEnabled,
    className: 'trash'
  }, {
    key: 'delete',
    label: __('Delete Permanently', 'elementor-pro'),
    onApply: item => deleteItems({
      id: item.id,
      force: 1
    }),
    shouldShow: item => 'trash' === item.status || !isTrashEnabled,
    className: 'trash'
  }, {
    key: 'read',
    label: __('Mark as Read', 'elementor-pro'),
    onApply: item => updateRead({
      id: item.id
    }, true),
    shouldShow: item => 'trash' !== item.status && !item.is_read
  }, {
    key: 'unread',
    label: __('Mark as Unread', 'elementor-pro'),
    onApply: item => updateRead({
      id: item.id
    }, false),
    shouldShow: item => 'trash' !== item.status && item.is_read
  }], []);
  const bulkActions = useMemo(() => {
    return [{
      label: __('Mark as Read', 'elementor-pro'),
      value: 'read',
      onApply: () => updateRead({
        ids: checked
      }, true),
      shouldShow: () => !isTrashFilterOn
    }, {
      label: __('Mark as Unread', 'elementor-pro'),
      value: 'unread',
      onApply: () => updateRead({
        ids: checked
      }, false),
      shouldShow: () => !isTrashFilterOn
    }, {
      label: __('Move to Trash', 'elementor-pro'),
      value: 'trash',
      onApply: () => deleteItems({
        ids: checked
      }),
      shouldShow: () => !isTrashFilterOn && isTrashEnabled
    }, {
      label: __('Delete Permanently', 'elementor-pro'),
      value: 'delete',
      onApply: () => deleteItems({
        ids: checked,
        force: 1
      }),
      shouldShow: () => isTrashFilterOn || !isTrashEnabled
    }, {
      label: __('Restore', 'elementor-pro'),
      value: 'restore',
      onApply: () => restoreItems({
        ids: checked
      }),
      shouldShow: () => isTrashFilterOn
    }].filter(action => action.shouldShow());
  }, [checked, isTrashFilterOn]);
  const tableTitles = useMemo(() => ({
    main_meta_id: {
      label: __('Main', 'elementor-pro'),
      className: 'column-primary'
    },
    actions_log_status: {
      label: __('Actions Status', 'elementor-pro'),
      className: 'column-actions'
    },
    form: {
      label: __('Form', 'elementor-pro'),
      className: 'column-form'
    },
    page: {
      label: __('Page', 'elementor-pro'),
      className: 'column-page'
    },
    id: {
      label: __('ID', 'elementor-pro'),
      className: 'column-id'
    },
    created_at: {
      label: __('Submission Date', 'elementor-pro'),
      className: 'column-date'
    }
  }), []);
  const headerFooterRow = /*#__PURE__*/_react.default.createElement(_wpTable.default.Row, null, /*#__PURE__*/_react.default.createElement(_wpTable.default.Cell, {
    className: "manage-column bulk-checkbox-column"
  }, /*#__PURE__*/_react.default.createElement(_checkbox.default.Bulk, {
    checkedGroup: checked,
    onChange: setChecked,
    allValues: data.map(checkedItem => checkedItem.id)
  })), Object.entries(tableTitles).map(([key, tableTitle]) => {
    const cellProps = {
      component: 'th',
      className: `manage-column ${tableTitle.className || ''}`
    };
    if (ORDERABLE_CELLS.includes(key)) {
      return /*#__PURE__*/_react.default.createElement(_wpTable.default.OrderableCell, (0, _extends2.default)({}, cellProps, {
        key: key,
        order: {
          key,
          current: order,
          onChange: value => setOrder(value)
        }
      }), tableTitle.label);
    }
    return /*#__PURE__*/_react.default.createElement(_wpTable.default.Cell, (0, _extends2.default)({
      key: key
    }, cellProps), tableTitle.label);
  }));
  const exportButton = /*#__PURE__*/_react.default.createElement("div", {
    className: "alignright"
  }, /*#__PURE__*/_react.default.createElement(_exportButton.default, {
    onClick: () => {
      exportSubmissions(_useExport.EXPORT_MODE_SELECTED === exportOptions.mode ? {
        ids: checked
      } : {
        ...flatQuery
      }, checked.length || meta.pagination?.total);
    },
    isLoading: _useDataAction.STATUS_LOADING === exportOptions.status,
    progress: exportOptions.progress,
    mode: exportOptions.mode,
    disabled: !meta.pagination?.total && _useDataAction.STATUS_LOADING !== exportOptions.status
  }));
  const tablePagination = meta.pagination && /*#__PURE__*/_react.default.createElement(_pagination.default, {
    total: meta.pagination.total,
    currentPage: meta.pagination.current_page,
    lastPage: meta.pagination.last_page,
    perPage: meta.pagination.per_page,
    onChange: value => setPage(value)
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_searchBox.default, {
    key: 'search',
    value: filter.search,
    onChange: value => setFilter({
      search: value
    }),
    isSearching: !!filter.search && fetchDataStatus === _useDataAction.STATUS_LOADING
  }), /*#__PURE__*/_react.default.createElement(_linksFilter.default, {
    options: STATUSES.map(({
      value,
      label
    }) => ({
      value,
      label,
      count: meta.count?.[value],
      shouldShow: 'all' === value || meta.count?.[value] > 0
    })),
    value: filter.status,
    onChange: value => setFilter({
      status: value
    })
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "clear"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "tablenav top"
  }, /*#__PURE__*/_react.default.createElement(_bulkActionSelect.BulkActionSelect, {
    actions: bulkActions,
    className: "alignleft"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "alignleft actions"
  }, /*#__PURE__*/_react.default.createElement(_refererFilter.default, {
    value: filter.referer || '',
    onChange: value => setFilter({
      referer: value
    })
  }), /*#__PURE__*/_react.default.createElement(_resourceFilter.default, {
    value: filter.form || '',
    onChange: value => setFilter({
      form: value
    }),
    options: [{
      value: '',
      label: __('All Forms', 'elementor-pro')
    }],
    resourceOptions: {
      type: 'resource',
      command: 'forms/index',
      args: {
        context: 'options'
      }
    },
    name: 'form',
    label: __('Filter by form', 'elementor-pro')
  }), /*#__PURE__*/_react.default.createElement(_dateFilter.default, {
    value: {
      after: filter.after,
      before: filter.before
    },
    onChange: ({
      after,
      before
    }) => {
      setFilter({
        ...(after !== undefined ? {
          after
        } : {}),
        ...(before !== undefined ? {
          before
        } : {})
      });
    },
    label: __('Filter by date', 'elementor-pro'),
    name: "date"
  })), exportButton, tablePagination), /*#__PURE__*/_react.default.createElement(_wpTable.default, {
    className: "e-form-submissions-list-table striped table-view-list"
  }, headerFooterRow && /*#__PURE__*/_react.default.createElement(_wpTable.default.Header, null, headerFooterRow), /*#__PURE__*/_react.default.createElement(_wpTable.default.Body, null, !['loading', 'idle'].includes(fetchDataStatus) && 0 === data.length && /*#__PURE__*/_react.default.createElement(_wpTable.default.Row, {
    className: "no-items"
  }, /*#__PURE__*/_react.default.createElement(_wpTable.default.Cell, {
    className: "colspanchange",
    colSpan: 7
  }, __('No submissions found.', 'elementor-pro'))), data.map(item => {
    const filteredRowActions = rowActions.filter(action => action.shouldShow(item));
    return /*#__PURE__*/_react.default.createElement(_submissionRow.default, {
      key: item.id,
      item: item,
      tableTitles: tableTitles,
      checkBoxComponent: /*#__PURE__*/_react.default.createElement(_checkbox.default, {
        checkedGroup: checked,
        onChange: setChecked,
        value: item.id
      }),
      rowActionComponent: /*#__PURE__*/_react.default.createElement(_wpTable.default.RowActions, {
        actions: filteredRowActions,
        item: item
      })
    });
  })), headerFooterRow && /*#__PURE__*/_react.default.createElement(_wpTable.default.Footer, null, headerFooterRow)), /*#__PURE__*/_react.default.createElement("div", {
    className: "tablenav bottom"
  }, /*#__PURE__*/_react.default.createElement(_bulkActionSelect.BulkActionSelect, {
    actions: bulkActions,
    className: "alignleft"
  }), exportButton, tablePagination)));
}
function validateRestAction(query) {
  return query.id || query.ids && query.ids.length > 0;
}

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/pages/item.js":
/*!******************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/pages/item.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Item;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _wpTable = _interopRequireDefault(__webpack_require__(/*! ../components/wp-table */ "../modules/forms/submissions/assets/js/admin/components/wp-table/index.js"));
var _router = __webpack_require__(/*! @reach/router */ "../node_modules/@reach/router/es/index.js");
var _noticesContext = __webpack_require__(/*! ../context/notices-context */ "../modules/forms/submissions/assets/js/admin/context/notices-context.js");
var _postBox = _interopRequireDefault(__webpack_require__(/*! ../components/post-box */ "../modules/forms/submissions/assets/js/admin/components/post-box.js"));
var _formActionsLog = _interopRequireDefault(__webpack_require__(/*! ../components/form-actions-log */ "../modules/forms/submissions/assets/js/admin/components/form-actions-log.js"));
var _noticeMessages = _interopRequireDefault(__webpack_require__(/*! ../notice-messages */ "../modules/forms/submissions/assets/js/admin/notice-messages.js"));
var _useDataAction = _interopRequireWildcard(__webpack_require__(/*! ../hooks/use-data-action */ "../modules/forms/submissions/assets/js/admin/hooks/use-data-action.js"));
var _date = __webpack_require__(/*! ../utils/date */ "../modules/forms/submissions/assets/js/admin/utils/date.js");
var _submissionValue = _interopRequireDefault(__webpack_require__(/*! ../components/submission-value */ "../modules/forms/submissions/assets/js/admin/components/submission-value/index.js"));
var _settingsContext = __webpack_require__(/*! ../context/settings-context */ "../modules/forms/submissions/assets/js/admin/context/settings-context.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/* eslint-disable jsx-a11y/anchor-is-valid */

const {
  useEffect,
  useState,
  useMemo
} = _react.default;
function Item(props) {
  const [{
      data
    }, setFetchResult] = useState({
      data: {},
      meta: {}
    }),
    [error, setError] = useState(null),
    [isEditMode, setIsEditMode] = useState(false),
    [formData, setFormData] = useState({}),
    navigate = (0, _router.useNavigate)(),
    {
      notifySuccess,
      notifyError
    } = (0, _noticesContext.useNoticesContext)(),
    {
      isTrashEnabled
    } = (0, _settingsContext.useSettingsContext)();
  const fields = useMemo(() => data.form?.fields.reduce((current, field) => ({
    ...current,
    [field.id]: field
  }), {}), [data.form?.fields]);

  // Fetch a single submission on first render
  useEffect(() => {
    $e.data.get('form-submissions/index', {
      id: props.id
    }, {
      refresh: true
    }).then(result => {
      setFetchResult(result.data);
      return result.data;
    }).then(resultData => {
      if (resultData.data.is_read) {
        return;
      }

      // Mark the submission as read if is not read already
      $e.data.update('form-submissions/index', {
        is_read: true
      }, {
        id: props.id
      });
    }).catch(e => setError(e));
  }, []);

  // Move submission to trash
  const [deleteItem] = (0, _useDataAction.default)(([query = {}], {
    abortController
  }) => {
    const messages = _noticeMessages.default[query.force ? 'deleted' : 'trashed'];
    return $e.data.delete('form-submissions/index', {
      id: props.id,
      ...query
    }, {
      signal: abortController.signal
    }).then(() => notifySuccess(messages.success(1))).then(() => navigate('/')).catch(() => notifyError(messages.error()));
  }, [props.id]);

  // Update field values.
  const [update, {
    status: updateStatus
  }] = (0, _useDataAction.default)(([values]) => {
    return $e.data.update('form-submissions/index', {
      values
    }, {
      id: props.id
    }).then(result => setFetchResult(result.data)).then(() => {
      setIsEditMode(false);
      setFormData({});
    }).then(() => notifySuccess(_noticeMessages.default.updated.success(1))).catch(() => notifyError(_noticeMessages.default.updated.error()));
  }, [props.id]);
  if (!Object.keys(data).length) {
    if (error) {
      return /*#__PURE__*/_react.default.createElement("p", null, " ", error.message || __('Not Found', 'elementor-pro'), " ");
    }
    return __('Loading...', 'elementor-pro');
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "poststuff"
  }, /*#__PURE__*/_react.default.createElement("form", {
    id: "post-body",
    className: "metabox-holder columns-2",
    onSubmit: e => {
      e.preventDefault();
      if (!isEditMode || updateStatus === _useDataAction.STATUS_LOADING) {
        return;
      }
      update(formData);
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "post-body-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "e-form-submissions-main"
  }, /*#__PURE__*/_react.default.createElement(_postBox.default, {
    header: /*#__PURE__*/_react.default.createElement("div", {
      className: "e-form-submissions-main__header"
    }, /*#__PURE__*/_react.default.createElement("h2", null, __('Submission', 'elementor-pro'), " #", data.id), /*#__PURE__*/_react.default.createElement("button", {
      onClick: e => {
        e.preventDefault();
        if (updateStatus === _useDataAction.STATUS_LOADING) {
          return;
        }
        setIsEditMode(prev => !prev);
      },
      className: "button button-secondary",
      type: "button",
      disabled: updateStatus === _useDataAction.STATUS_LOADING
    }, isEditMode ? __('Cancel', 'elementor-pro') : __('Edit', 'elementor-pro')))
  }, /*#__PURE__*/_react.default.createElement(_wpTable.default, {
    className: "e-form-submissions-item-table"
  }, /*#__PURE__*/_react.default.createElement(_wpTable.default.Body, null, data.values?.length > 0 ? data.values.map(value => /*#__PURE__*/_react.default.createElement(_wpTable.default.Row, {
    key: value.id
  }, /*#__PURE__*/_react.default.createElement(_wpTable.default.Cell, null, fields?.[value.key]?.label || value.key), /*#__PURE__*/_react.default.createElement(_wpTable.default.Cell, null, /*#__PURE__*/_react.default.createElement(_submissionValue.default, {
    value: value.value,
    field: fields?.[value.key] || {
      id: value.key,
      type: 'text'
    },
    isEditMode: isEditMode,
    onChange: (id, fieldValue) => setFormData(prev => ({
      ...prev,
      [id]: fieldValue
    }))
  })))) : /*#__PURE__*/_react.default.createElement(_wpTable.default.Row, null, /*#__PURE__*/_react.default.createElement(_wpTable.default.Cell, {
    colSpan: "2"
  }, __('No data', 'elementor-pro'))))))), data.form_actions_log && /*#__PURE__*/_react.default.createElement(_formActionsLog.default, {
    actions: data.form_actions_log
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "postbox-container",
    id: "postbox-container-1"
  }, /*#__PURE__*/_react.default.createElement(_postBox.default, {
    header: /*#__PURE__*/_react.default.createElement("h2", null, __('Additional Info', 'elementor-pro'), " ")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "submitbox"
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "misc-publishing-actions"
  }, data.post && /*#__PURE__*/_react.default.createElement("div", {
    className: "misc-pub-section"
  }, __('Form:', 'elementor-pro'), " ", /*#__PURE__*/_react.default.createElement("a", {
    href: data.post.edit_url,
    target: "_blank",
    rel: "noreferrer"
  }, data.form.name, " (#", data.form.element_id, ")")), /*#__PURE__*/_react.default.createElement("div", {
    className: "misc-pub-section"
  }, __('Page:', 'elementor-pro'), " ", /*#__PURE__*/_react.default.createElement("a", {
    href: data.referer,
    target: "_blank",
    rel: "noreferrer"
  }, data.referer_title || /*#__PURE__*/_react.default.createElement("i", {
    className: "eicon-editor-external-link e-form-submissions-referer-icon"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "misc-pub-section"
  }, __('Create Date:', 'elementor-pro'), " ", /*#__PURE__*/_react.default.createElement("strong", null, (0, _date.formatToLocalDateTime)(data.created_at))), /*#__PURE__*/_react.default.createElement("div", {
    className: "misc-pub-section"
  }, __('Update Date:', 'elementor-pro'), " ", /*#__PURE__*/_react.default.createElement("strong", null, (0, _date.formatToLocalDateTime)(data.updated_at))), data.user_name && /*#__PURE__*/_react.default.createElement("div", {
    className: "misc-pub-section"
  }, __('User Name:', 'elementor-pro'), " ", /*#__PURE__*/_react.default.createElement("strong", null, data.user_name)), data.user_ip && /*#__PURE__*/_react.default.createElement("div", {
    className: "misc-pub-section"
  }, __('User IP:', 'elementor-pro'), " ", /*#__PURE__*/_react.default.createElement("strong", null, data.user_ip)), data.user_agent && /*#__PURE__*/_react.default.createElement("div", {
    className: "misc-pub-section"
  }, __('User Agent:', 'elementor-pro'), " ", /*#__PURE__*/_react.default.createElement("strong", null, data.user_agent))), /*#__PURE__*/_react.default.createElement("div", {
    id: "major-publishing-actions"
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "delete-action"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "submitdelete deletion",
    href: "#",
    onClick: e => {
      e.preventDefault();
      deleteItem({
        force: isTrashEnabled ? 0 : 1
      });
    }
  }, isTrashEnabled ? __('Move to Trash', 'elementor-pro') : __('Delete Permanently', 'elementor-pro'))), /*#__PURE__*/_react.default.createElement("div", {
    id: "publishing-action"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    name: "save",
    id: "publish",
    className: "button button-primary button-large",
    disabled: !isEditMode || updateStatus === _useDataAction.STATUS_LOADING
  }, __('Update', 'elementor-pro'))), /*#__PURE__*/_react.default.createElement("div", {
    className: "clear"
  })))))), /*#__PURE__*/_react.default.createElement("br", {
    className: "clear"
  }));
}
Item.propTypes = {
  id: PropTypes.string
};

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/utils/date.js":
/*!******************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/utils/date.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.formatToLocalDate = formatToLocalDate;
exports.formatToLocalDateTime = formatToLocalDateTime;
exports.formatToLocalTime = formatToLocalTime;
const momentLocale = moment.localeData();
function formatToLocalDate(dateString) {
  return wp.date.format(momentLocale.longDateFormat('LL'), dateString);
}
function formatToLocalTime(dateString) {
  return wp.date.format(momentLocale.longDateFormat('LT'), dateString);
}
function formatToLocalDateTime(dateString) {
  return `${formatToLocalDate(dateString)} ${formatToLocalTime(dateString)}`;
}

/***/ }),

/***/ "../modules/forms/submissions/assets/js/admin/utils/download-blob.js":
/*!***************************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/utils/download-blob.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = downloadBlob;
/**
 * A util function to make sure the user download the blob data.
 *
 * @param {any}    blob
 * @param {string} filename
 */
function downloadBlob(blob, filename = '') {
  const link = document.createElement('a');
  link.setAttribute('href', URL.createObjectURL(blob));
  link.style.visibility = 'hidden';
  if (filename) {
    link.setAttribute('download', filename);
  }
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/***/ }),

/***/ "../node_modules/gud/index.js":
/*!************************************!*\
  !*** ../node_modules/gud/index.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// @flow


var key = '__global_unique_id__';

module.exports = function() {
  return __webpack_require__.g[key] = (__webpack_require__.g[key] || 0) + 1;
};


/***/ }),

/***/ "../node_modules/invariant/browser.js":
/*!********************************************!*\
  !*** ../node_modules/invariant/browser.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



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
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "../node_modules/object-assign/index.js":
/*!**********************************************!*\
  !*** ../node_modules/object-assign/index.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "../node_modules/prop-types/checkPropTypes.js":
/*!****************************************************!*\
  !*** ../node_modules/prop-types/checkPropTypes.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "../node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "../node_modules/prop-types/factoryWithTypeCheckers.js":
/*!*************************************************************!*\
  !*** ../node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "../node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "../node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "../node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "../node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "../node_modules/prop-types/index.js":
/*!*******************************************!*\
  !*** ../node_modules/prop-types/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "../node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "../node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "../node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!**************************************************************!*\
  !*** ../node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "../node_modules/prop-types/lib/has.js":
/*!*********************************************!*\
  !*** ../node_modules/prop-types/lib/has.js ***!
  \*********************************************/
/***/ ((module) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "../node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!************************************************************************************!*\
  !*** ../node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "../node_modules/prop-types/node_modules/react-is/index.js":
/*!*****************************************************************!*\
  !*** ../node_modules/prop-types/node_modules/react-is/index.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "../node_modules/reach-router-hash-history/index.js":
/*!**********************************************************!*\
  !*** ../node_modules/reach-router-hash-history/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHashSource: () => (/* binding */ createHashSource)
/* harmony export */ });
// take some code from
// https://github.com/ReactTraining/history/blob/master/modules/createHashHistory.js

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  const href = window.location.href;
  const hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = '#' + path;
}

function replaceHashPath(path) {
  const hashIndex = window.location.href.indexOf('#');
  window.location.replace(
    window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path
  );
}

let createHashSource = (initialPathname = '/') => {
  let index = 0;
  // let stack = [{ pathname: initialPathname, search: '' }];
  // let states = [];

  return {
    get location() {
      return { pathname: getHashPath(), search: '' };
      // return stack[index];
    },
    addEventListener(name, fn) {
      if (name === 'popstate') {
        window.addEventListener('hashchange', fn);
      }
    },
    removeEventListener(name, fn) {
      if (name === 'popstate') {
        window.addEventListener('hashchange', fn);
      }
    },
    history: {
      get entries() {
        return [{ pathname: getHashPath(), search: '' }];
        // return stack;
      },
      get index() {
        return index;
      },
      get state() {
        return undefined;
        // return states[index];
      },
      pushState(state, _, uri) {
        pushHashPath(uri);
        // let [pathname, search = ''] = uri.split('?');
        // index++;
        // stack.push({ pathname, search });
        // states.push(state);
      },
      replaceState(state, _, uri) {
        replaceHashPath(uri);
        // let [pathname, search = ''] = uri.split('?');
        // stack[index] = { pathname, search };
        // states[index] = state;
      }
    }
  };
};




/***/ }),

/***/ "../node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   polyfill: () => (/* binding */ polyfill)
/* harmony export */ });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ "../node_modules/warning/warning.js":
/*!******************************************!*\
  !*** ../node_modules/warning/warning.js ***!
  \******************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = React;

/***/ }),

/***/ "@wordpress/i18n":
/*!**************************!*\
  !*** external "wp.i18n" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = wp.i18n;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/extends.js":
/*!*********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/extends.js ***!
  \*********************************************************/
/***/ ((module) => {

function _extends() {
  module.exports = _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _extends.apply(this, arguments);
}
module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \***********************************************************************/
/***/ ((module) => {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames not based on template
/******/ 			if (chunkId === "jszip.vendor") return "" + chunkId + ".a3c65615c1de5560962d.bundle.js";
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "elementor-pro:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"form-submission-admin": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************************************************!*\
  !*** ../modules/forms/submissions/assets/js/admin/admin.js ***!
  \*************************************************************/


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _component = _interopRequireDefault(__webpack_require__(/*! ./data/component */ "../modules/forms/submissions/assets/js/admin/data/component.js"));
var _formsComponent = _interopRequireDefault(__webpack_require__(/*! ./data/forms-component */ "../modules/forms/submissions/assets/js/admin/data/forms-component.js"));
var _app = _interopRequireDefault(__webpack_require__(/*! ./app */ "../modules/forms/submissions/assets/js/admin/app.js"));
$e.components.register(new _component.default());
$e.components.register(new _formsComponent.default());
const AppWrapper = elementorCommon.config.isDebug ? _react.default.StrictMode : _react.default.Fragment;

// eslint-disable-next-line react/no-deprecated
ReactDOM.render( /*#__PURE__*/_react.default.createElement(AppWrapper, null, /*#__PURE__*/_react.default.createElement(_app.default, null)), document.getElementById('e-form-submissions'));
})();

/******/ })()
;
//# sourceMappingURL=form-submission-admin.js.map
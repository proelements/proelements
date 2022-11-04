/*! pro-elements - v3.8.0 - 30-10-2022 */
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["page-transitions-editor"],{

/***/ "../modules/page-transitions/assets/js/editor/commands/animate.js":
/*!************************************************************************!*\
  !*** ../modules/page-transitions/assets/js/editor/commands/animate.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "../node_modules/core-js/modules/es.reflect.to-string-tag.js");

__webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "../node_modules/core-js/modules/es.reflect.construct.js");

__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "../node_modules/core-js/modules/es.object.define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.Animate = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Animate = /*#__PURE__*/function (_$e$modules$CommandBa) {
  (0, _inherits2["default"])(Animate, _$e$modules$CommandBa);

  var _super = _createSuper(Animate);

  function Animate() {
    (0, _classCallCheck2["default"])(this, Animate);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Animate, [{
    key: "apply",
    value:
    /**
     * Animate the Page Transition element.
     *
     * @return {void}
     */
    function apply() {
      var pageTransition = elementor.$previewContents[0].querySelector('e-page-transition');

      if (!pageTransition) {
        return;
      }

      pageTransition.animate();
    }
  }]);
  return Animate;
}($e.modules.CommandBase);

exports.Animate = Animate;
var _default = Animate;
exports["default"] = _default;

/***/ }),

/***/ "../modules/page-transitions/assets/js/editor/commands/index.js":
/*!**********************************************************************!*\
  !*** ../modules/page-transitions/assets/js/editor/commands/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "../node_modules/core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Animate", ({
  enumerable: true,
  get: function get() {
    return _animate.Animate;
  }
}));

var _animate = __webpack_require__(/*! ./animate */ "../modules/page-transitions/assets/js/editor/commands/animate.js");

/***/ }),

/***/ "../modules/page-transitions/assets/js/editor/component.js":
/*!*****************************************************************!*\
  !*** ../modules/page-transitions/assets/js/editor/component.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "../node_modules/core-js/modules/es.reflect.to-string-tag.js");

__webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "../node_modules/core-js/modules/es.reflect.construct.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "../node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.weak-map.js */ "../node_modules/core-js/modules/es.weak-map.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "../node_modules/core-js/modules/es.object.get-own-property-descriptor.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var commands = _interopRequireWildcard(__webpack_require__(/*! ./commands/ */ "../modules/page-transitions/assets/js/editor/commands/index.js"));

var hooks = _interopRequireWildcard(__webpack_require__(/*! ./hooks/ */ "../modules/page-transitions/assets/js/editor/hooks/index.js"));

var _pageTransitionPreview = _interopRequireDefault(__webpack_require__(/*! ./hooks/routes/page-transition-preview */ "../modules/page-transitions/assets/js/editor/hooks/routes/page-transition-preview.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Component = /*#__PURE__*/function (_$e$modules$Component) {
  (0, _inherits2["default"])(Component, _$e$modules$Component);

  var _super = _createSuper(Component);

  /**
   * Initialize the component.
   *
   * @return {void}
   */
  function Component() {
    var _this;

    (0, _classCallCheck2["default"])(this, Component);
    _this = _super.call(this);
    _this.routesHooks = {};

    _this.initRouteHooks();

    return _this;
  }
  /**
   * Add route hooks & listen to route changes.
   *
   * @return {void}
   */


  (0, _createClass2["default"])(Component, [{
    key: "initRouteHooks",
    value: function initRouteHooks() {
      var _this2 = this;

      // TODO: Remove when route hooks are available.
      this.routesHooks.pageTransitionPreview = new _pageTransitionPreview["default"]();
      $e.routes.on('run:after', function (component, route) {
        _this2.routesHooks.pageTransitionPreview.run(component, route);
      });
    }
    /**
     * Get the component namespace.
     *
     * @return {string} - Component namespace.
     */

  }, {
    key: "getNamespace",
    value: function getNamespace() {
      return 'page-transitions';
    }
    /**
     * Get the component hooks.
     *
     * @return {Object} - Component hooks.
     */

  }, {
    key: "defaultHooks",
    value: function defaultHooks() {
      return this.importHooks(hooks);
    }
    /**
     * Get the component commands.
     *
     * @return {Object} - Component commands.
     */

  }, {
    key: "defaultCommands",
    value: function defaultCommands() {
      return this.importCommands(commands);
    }
  }]);
  return Component;
}($e.modules.ComponentBase);

exports["default"] = Component;

/***/ }),

/***/ "../modules/page-transitions/assets/js/editor/hooks/data/animate-page-transition.js":
/*!******************************************************************************************!*\
  !*** ../modules/page-transitions/assets/js/editor/hooks/data/animate-page-transition.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "../node_modules/core-js/modules/es.reflect.to-string-tag.js");

__webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "../node_modules/core-js/modules/es.reflect.construct.js");

__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "../node_modules/core-js/modules/es.object.define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.AnimatePageTransition = void 0;

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "../node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.some.js */ "../node_modules/core-js/modules/es.array.some.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.keys.js */ "../node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.array.includes.js */ "../node_modules/core-js/modules/es.array.includes.js");

__webpack_require__(/*! core-js/modules/es.string.includes.js */ "../node_modules/core-js/modules/es.string.includes.js");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Data hook that animates the Page Transition component when entrance / exit animations are changed.
 */
var AnimatePageTransition = /*#__PURE__*/function (_$e$modules$hookData$) {
  (0, _inherits2["default"])(AnimatePageTransition, _$e$modules$hookData$);

  var _super = _createSuper(AnimatePageTransition);

  function AnimatePageTransition() {
    var _this;

    (0, _classCallCheck2["default"])(this, AnimatePageTransition);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "prefix", 'settings_page_transitions_');
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "settings", ['entrance_animation', 'exit_animation']);
    return _this;
  }

  (0, _createClass2["default"])(AnimatePageTransition, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/settings';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'animate-page-transitions--document/elements/settings';
    }
  }, {
    key: "getContainerType",
    value: function getContainerType() {
      return 'document';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      var _this2 = this;

      // Execute only for specific settings.
      return Object.keys(args.settings).some(function (key) {
        key = key.replace(_this2.prefix, '');
        return _this2.settings.includes(key);
      });
    }
  }, {
    key: "apply",
    value: function apply() {
      $e.run('page-transitions/animate');
    }
  }]);
  return AnimatePageTransition;
}($e.modules.hookData.After);

exports.AnimatePageTransition = AnimatePageTransition;
var _default = AnimatePageTransition;
exports["default"] = _default;

/***/ }),

/***/ "../modules/page-transitions/assets/js/editor/hooks/data/index.js":
/*!************************************************************************!*\
  !*** ../modules/page-transitions/assets/js/editor/hooks/data/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "../node_modules/core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "AnimatePageTransition", ({
  enumerable: true,
  get: function get() {
    return _animatePageTransition.AnimatePageTransition;
  }
}));
Object.defineProperty(exports, "ReRenderPageTransition", ({
  enumerable: true,
  get: function get() {
    return _reRenderPageTransition.ReRenderPageTransition;
  }
}));

var _animatePageTransition = __webpack_require__(/*! ./animate-page-transition */ "../modules/page-transitions/assets/js/editor/hooks/data/animate-page-transition.js");

var _reRenderPageTransition = __webpack_require__(/*! ./re-render-page-transition */ "../modules/page-transitions/assets/js/editor/hooks/data/re-render-page-transition.js");

/***/ }),

/***/ "../modules/page-transitions/assets/js/editor/hooks/data/re-render-page-transition.js":
/*!********************************************************************************************!*\
  !*** ../modules/page-transitions/assets/js/editor/hooks/data/re-render-page-transition.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "../node_modules/core-js/modules/es.reflect.to-string-tag.js");

__webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "../node_modules/core-js/modules/es.reflect.construct.js");

__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "../node_modules/core-js/modules/es.object.define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.ReRenderPageTransition = void 0;

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "../node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.some.js */ "../node_modules/core-js/modules/es.array.some.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.keys.js */ "../node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.array.includes.js */ "../node_modules/core-js/modules/es.array.includes.js");

__webpack_require__(/*! core-js/modules/es.string.includes.js */ "../node_modules/core-js/modules/es.string.includes.js");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));

var _utils = __webpack_require__(/*! ../utils */ "../modules/page-transitions/assets/js/editor/hooks/utils.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Data hook that passes the new settings from the panel as attributes to the Page Transition component, in order to re-render it.
 */
var ReRenderPageTransition = /*#__PURE__*/function (_$e$modules$hookData$) {
  (0, _inherits2["default"])(ReRenderPageTransition, _$e$modules$hookData$);

  var _super = _createSuper(ReRenderPageTransition);

  function ReRenderPageTransition() {
    var _this;

    (0, _classCallCheck2["default"])(this, ReRenderPageTransition);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "prefix", 'settings_page_transitions_');
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "settings", ['entrance_animation', 'preloader_type', 'preloader_icon', 'preloader_image', 'preloader_animation_type']);
    return _this;
  }

  (0, _createClass2["default"])(ReRenderPageTransition, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/settings';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 're-render-page-transitions--document/elements/settings';
    }
  }, {
    key: "getContainerType",
    value: function getContainerType() {
      return 'document';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      var _this2 = this;

      // Execute only for specific settings.
      return Object.keys(args.settings).some(function (key) {
        key = key.replace(_this2.prefix, '');
        return _this2.settings.includes(key);
      });
    }
  }, {
    key: "apply",
    value: function apply(args) {
      (0, _utils.renderPageTransition)(args.container);
    }
  }]);
  return ReRenderPageTransition;
}($e.modules.hookData.After);

exports.ReRenderPageTransition = ReRenderPageTransition;
var _default = ReRenderPageTransition;
exports["default"] = _default;

/***/ }),

/***/ "../modules/page-transitions/assets/js/editor/hooks/index.js":
/*!*******************************************************************!*\
  !*** ../modules/page-transitions/assets/js/editor/hooks/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.keys.js */ "../node_modules/core-js/modules/es.object.keys.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _data = __webpack_require__(/*! ./data */ "../modules/page-transitions/assets/js/editor/hooks/data/index.js");

Object.keys(_data).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _data[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _data[key];
    }
  });
});

/***/ }),

/***/ "../modules/page-transitions/assets/js/editor/hooks/routes/page-transition-preview.js":
/*!********************************************************************************************!*\
  !*** ../modules/page-transitions/assets/js/editor/hooks/routes/page-transition-preview.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "../node_modules/core-js/modules/es.object.define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js"));

var _utils = __webpack_require__(/*! ../utils */ "../modules/page-transitions/assets/js/editor/hooks/utils.js");

/**
 * A route hook that listens to route changes in the panel and change the preview mode for
 * the Page Transitions feature when navigating to the `Site Settings -> Page Transitions` tab.
 *
 * TODO: Convert to `$e.modules.hookRoute.After` when available.
 */
var PageTransitionPreview = /*#__PURE__*/function () {
  function PageTransitionPreview() {
    (0, _classCallCheck2["default"])(this, PageTransitionPreview);
  }

  (0, _createClass2["default"])(PageTransitionPreview, [{
    key: "run",
    value:
    /**
     * Run the hook.
     *
     * @param {Object} component
     * @param {string} route
     *
     * @return {void}
     */
    function run(component, route) {
      if ('panel/global/settings-page-transitions' === route) {
        (0, _utils.renderPageTransition)(elementor.documents.getCurrent().container);
        this.togglePageTransitionPreview(true);
      } else {
        this.togglePageTransitionPreview(false);
      }
    }
    /**
     * Toggle the Page Transition state to show or hide preview.
     *
     * @param {boolean} on
     *
     * @return {void}
     */

  }, {
    key: "togglePageTransitionPreview",
    value: function togglePageTransitionPreview() {
      var on = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var className = 'e-page-transition--preview',
          pageTransition = elementor.$previewContents[0].body.querySelector('e-page-transition');

      if (!pageTransition) {
        return;
      }

      pageTransition.classList.toggle(className, on);
    }
  }]);
  return PageTransitionPreview;
}();

exports["default"] = PageTransitionPreview;

/***/ }),

/***/ "../modules/page-transitions/assets/js/editor/hooks/utils.js":
/*!*******************************************************************!*\
  !*** ../modules/page-transitions/assets/js/editor/hooks/utils.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "../node_modules/core-js/modules/es.object.define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getPageTransitionSettings = getPageTransitionSettings;
exports.renderPageTransition = renderPageTransition;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../node_modules/@babel/runtime/helpers/slicedToArray.js"));

__webpack_require__(/*! core-js/modules/es.array.filter.js */ "../node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.entries.js */ "../node_modules/core-js/modules/es.object.entries.js");

__webpack_require__(/*! core-js/modules/es.string.starts-with.js */ "../node_modules/core-js/modules/es.string.starts-with.js");

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.string.replace-all.js */ "../node_modules/core-js/modules/es.string.replace-all.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "../node_modules/core-js/modules/es.array.concat.js");

var prefix = 'settings_page_transitions_';
/**
 * Get only the Page Transitions controls' values from a Container.
 *
 * @param {Object} container
 *
 * @return {Object} - Controls' values.
 */

function getPageTransitionSettings(container) {
  // Filter only the Page Transitions controls which doesn't change CSS values.
  // (since they shouldn't affect the render)
  var controls = Object.entries(container.settings.getActiveControls()).filter(function (_ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
        key = _ref2[0],
        control = _ref2[1];

    return key.startsWith(prefix) && !control.selectors;
  });
  var settings = {};
  controls.forEach(function (_ref3) {
    var _ref4 = (0, _slicedToArray2["default"])(_ref3, 1),
        control = _ref4[0];

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
  var pageTransition = elementor.$previewContents[0].querySelector('e-page-transition');
  var hasEntranceAnimation = !!container.settings.get("".concat(prefix, "entrance_animation")),
      hasPreloader = !!container.settings.get("".concat(prefix, "preloader_type")),
      shouldRender = hasEntranceAnimation || hasPreloader; // Create the Page Transition element if it doesn't exist.

  if (!pageTransition) {
    pageTransition = document.createElement('e-page-transition');
    pageTransition.classList.add('e-page-transition--preview');
    elementor.$previewContents[0].body.append(pageTransition);
  } // Disable the Page Transition if needed.


  pageTransition.toggleAttribute('disabled', !shouldRender);
  var settings = getPageTransitionSettings(container); // Iterate over the settings and set them as attributes.

  Object.entries(settings).forEach(function (_ref5) {
    var _ref6 = (0, _slicedToArray2["default"])(_ref5, 2),
        key = _ref6[0],
        value = _ref6[1];

    key = key.replace(prefix, '');
    key = key.replaceAll('_', '-');

    if (!value) {
      pageTransition.removeAttribute(key);
      return;
    }

    if ('string' === typeof value) {
      pageTransition.setAttribute(key, value);
      return;
    } // For object values (e.g. image control).


    Object.entries(value).forEach(function (_ref7) {
      var _ref8 = (0, _slicedToArray2["default"])(_ref7, 2),
          subKey = _ref8[0],
          subValue = _ref8[1];

      var newKey = key; // Append the sub key only if it's not `value` (e.g. `url`), in order to avoid weird
      // attributes like `preloader-icon-value`.

      if (subKey !== 'value') {
        newKey = "".concat(key, "-").concat(subKey);
      }

      pageTransition.setAttribute(newKey, subValue);
    });
  });
}

/***/ }),

/***/ "../modules/page-transitions/assets/js/editor/module.js":
/*!**************************************************************!*\
  !*** ../modules/page-transitions/assets/js/editor/module.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "../node_modules/core-js/modules/es.reflect.to-string-tag.js");

__webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "../node_modules/core-js/modules/es.reflect.construct.js");

__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "../node_modules/core-js/modules/es.object.define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _component = _interopRequireDefault(__webpack_require__(/*! ./component */ "../modules/page-transitions/assets/js/editor/component.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var _default = /*#__PURE__*/function (_elementorModules$edi) {
  (0, _inherits2["default"])(_default, _elementorModules$edi);

  var _super = _createSuper(_default);

  function _default() {
    (0, _classCallCheck2["default"])(this, _default);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(_default, [{
    key: "onInit",
    value:
    /**
     * Register the component & bind events on init.
     *
     * @return {void}
     */
    function onInit() {
      $e.components.register(new _component["default"]());
      this.bindEvents();
    }
    /**
     * Listen to Page Transition event.
     *
     * @return {void}
     */

  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      // Make sure that `window.elementor` is initialized.
      // TODO: Find a better solution. It's caused because of the dynamic import.
      if (window.elementor) {
        this.onAnimateButtonClick();
        return;
      }

      jQuery(window).on('elementor:init', function () {
        return _this.onAnimateButtonClick();
      });
    }
    /**
     * Listen to `animate` button click event and animate the Page Transition.
     *
     * @return {void}
     */

  }, {
    key: "onAnimateButtonClick",
    value: function onAnimateButtonClick() {
      elementor.channels.editor.on('elementorPageTransitions:animate', function () {
        $e.run('page-transitions/animate');
      });
    }
  }]);
  return _default;
}(elementorModules.editor.utils.Module);

exports["default"] = _default;

/***/ }),

/***/ "../node_modules/core-js/internals/correct-is-regexp-logic.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js/internals/correct-is-regexp-logic.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "../node_modules/core-js/internals/not-a-regexp.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/internals/not-a-regexp.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "../node_modules/core-js/internals/is-regexp.js");

var $TypeError = TypeError;

module.exports = function (it) {
  if (isRegExp(it)) {
    throw $TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "../node_modules/core-js/internals/regexp-get-flags.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/internals/regexp-get-flags.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var call = __webpack_require__(/*! ../internals/function-call */ "../node_modules/core-js/internals/function-call.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../node_modules/core-js/internals/has-own-property.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "../node_modules/core-js/internals/object-is-prototype-of.js");
var regExpFlags = __webpack_require__(/*! ../internals/regexp-flags */ "../node_modules/core-js/internals/regexp-flags.js");

var RegExpPrototype = RegExp.prototype;

module.exports = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype) && !hasOwn(R, 'flags') && isPrototypeOf(RegExpPrototype, R)
    ? call(regExpFlags, R) : flags;
};


/***/ }),

/***/ "../node_modules/core-js/modules/es.array.includes.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/modules/es.array.includes.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var $includes = (__webpack_require__(/*! ../internals/array-includes */ "../node_modules/core-js/internals/array-includes.js").includes);
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "../node_modules/core-js/internals/add-to-unscopables.js");

// FF99+ bug
var BROKEN_ON_SPARSE = fails(function () {
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "../node_modules/core-js/modules/es.string.includes.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/modules/es.string.includes.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "../node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../node_modules/core-js/internals/require-object-coercible.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "../node_modules/core-js/internals/to-string.js");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "../node_modules/core-js/internals/correct-is-regexp-logic.js");

var stringIndexOf = uncurryThis(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf(
      toString(requireObjectCoercible(this)),
      toString(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.string.replace-all.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js/modules/es.string.replace-all.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var call = __webpack_require__(/*! ../internals/function-call */ "../node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../node_modules/core-js/internals/require-object-coercible.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");
var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "../node_modules/core-js/internals/is-regexp.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "../node_modules/core-js/internals/to-string.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "../node_modules/core-js/internals/get-method.js");
var getRegExpFlags = __webpack_require__(/*! ../internals/regexp-get-flags */ "../node_modules/core-js/internals/regexp-get-flags.js");
var getSubstitution = __webpack_require__(/*! ../internals/get-substitution */ "../node_modules/core-js/internals/get-substitution.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../node_modules/core-js/internals/is-pure.js");

var REPLACE = wellKnownSymbol('replace');
var $TypeError = TypeError;
var indexOf = uncurryThis(''.indexOf);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
var max = Math.max;

var stringIndexOf = function (string, searchValue, fromIndex) {
  if (fromIndex > string.length) return -1;
  if (searchValue === '') return fromIndex;
  return indexOf(string, searchValue, fromIndex);
};

// `String.prototype.replaceAll` method
// https://tc39.es/ecma262/#sec-string.prototype.replaceall
$({ target: 'String', proto: true }, {
  replaceAll: function replaceAll(searchValue, replaceValue) {
    var O = requireObjectCoercible(this);
    var IS_REG_EXP, flags, replacer, string, searchString, functionalReplace, searchLength, advanceBy, replacement;
    var position = 0;
    var endOfLastMatch = 0;
    var result = '';
    if (searchValue != null) {
      IS_REG_EXP = isRegExp(searchValue);
      if (IS_REG_EXP) {
        flags = toString(requireObjectCoercible(getRegExpFlags(searchValue)));
        if (!~indexOf(flags, 'g')) throw $TypeError('`.replaceAll` does not allow non-global regexes');
      }
      replacer = getMethod(searchValue, REPLACE);
      if (replacer) {
        return call(replacer, searchValue, O, replaceValue);
      } else if (IS_PURE && IS_REG_EXP) {
        return replace(toString(O), searchValue, replaceValue);
      }
    }
    string = toString(O);
    searchString = toString(searchValue);
    functionalReplace = isCallable(replaceValue);
    if (!functionalReplace) replaceValue = toString(replaceValue);
    searchLength = searchString.length;
    advanceBy = max(1, searchLength);
    position = stringIndexOf(string, searchString, 0);
    while (position !== -1) {
      replacement = functionalReplace
        ? toString(replaceValue(searchString, position, string))
        : getSubstitution(searchString, string, position, [], undefined, replaceValue);
      result += stringSlice(string, endOfLastMatch, position) + replacement;
      endOfLastMatch = position + searchLength;
      position = stringIndexOf(string, searchString, position + advanceBy);
    }
    if (endOfLastMatch < string.length) {
      result += stringSlice(string, endOfLastMatch);
    }
    return result;
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.string.starts-with.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js/modules/es.string.starts-with.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");
var getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../node_modules/core-js/internals/object-get-own-property-descriptor.js").f);
var toLength = __webpack_require__(/*! ../internals/to-length */ "../node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "../node_modules/core-js/internals/to-string.js");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "../node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../node_modules/core-js/internals/require-object-coercible.js");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "../node_modules/core-js/internals/correct-is-regexp-logic.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../node_modules/core-js/internals/is-pure.js");

// eslint-disable-next-line es-x/no-string-prototype-startswith -- safe
var un$StartsWith = uncurryThis(''.startsWith);
var stringSlice = uncurryThis(''.slice);
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = toString(requireObjectCoercible(this));
    notARegExp(searchString);
    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = toString(searchString);
    return un$StartsWith
      ? un$StartsWith(that, search, index)
      : stringSlice(that, index, index + search.length) === search;
  }
});


/***/ })

}]);
//# sourceMappingURL=page-transitions-editor.251266d9830e868aa1cf.bundle.js.map
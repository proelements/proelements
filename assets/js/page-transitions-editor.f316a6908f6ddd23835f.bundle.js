/*! pro-elements - v3.6.4 - 15-03-2022 */
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["page-transitions-editor"],{

/***/ "../modules/page-transitions/assets/js/editor/commands/animate.js":
/*!************************************************************************!*\
  !*** ../modules/page-transitions/assets/js/editor/commands/animate.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = exports.Animate = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var Animate = /*#__PURE__*/function (_$e$modules$CommandBa) {
  (0, _inherits2.default)(Animate, _$e$modules$CommandBa);

  var _super = (0, _createSuper2.default)(Animate);

  function Animate() {
    (0, _classCallCheck2.default)(this, Animate);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Animate, [{
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


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "Animate", {
  enumerable: true,
  get: function get() {
    return _animate.Animate;
  }
});

var _animate = __webpack_require__(/*! ./animate */ "../modules/page-transitions/assets/js/editor/commands/animate.js");

/***/ }),

/***/ "../modules/page-transitions/assets/js/editor/component.js":
/*!*****************************************************************!*\
  !*** ../modules/page-transitions/assets/js/editor/component.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var commands = _interopRequireWildcard(__webpack_require__(/*! ./commands/ */ "../modules/page-transitions/assets/js/editor/commands/index.js"));

var hooks = _interopRequireWildcard(__webpack_require__(/*! ./hooks/ */ "../modules/page-transitions/assets/js/editor/hooks/index.js"));

var _pageTransitionPreview = _interopRequireDefault(__webpack_require__(/*! ./hooks/routes/page-transition-preview */ "../modules/page-transitions/assets/js/editor/hooks/routes/page-transition-preview.js"));

var Component = /*#__PURE__*/function (_$e$modules$Component) {
  (0, _inherits2.default)(Component, _$e$modules$Component);

  var _super = (0, _createSuper2.default)(Component);

  /**
   * Initialize the component.
   *
   * @return {void}
   */
  function Component() {
    var _this;

    (0, _classCallCheck2.default)(this, Component);
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


  (0, _createClass2.default)(Component, [{
    key: "initRouteHooks",
    value: function initRouteHooks() {
      var _this2 = this;

      // TODO: Remove when route hooks are available.
      this.routesHooks.pageTransitionPreview = new _pageTransitionPreview.default();
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


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = exports.AnimatePageTransition = void 0;

__webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ "../node_modules/core-js/modules/es6.regexp.replace.js");

__webpack_require__(/*! core-js/modules/es6.string.includes.js */ "../node_modules/core-js/modules/es6.string.includes.js");

__webpack_require__(/*! core-js/modules/es7.array.includes.js */ "../node_modules/core-js/modules/es7.array.includes.js");

var _keys = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

/**
 * Data hook that animates the Page Transition component when entrance / exit animations are changed.
 */
var AnimatePageTransition = /*#__PURE__*/function (_$e$modules$hookData$) {
  (0, _inherits2.default)(AnimatePageTransition, _$e$modules$hookData$);

  var _super = (0, _createSuper2.default)(AnimatePageTransition);

  function AnimatePageTransition() {
    var _this;

    (0, _classCallCheck2.default)(this, AnimatePageTransition);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "prefix", 'settings_page_transitions_');
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "settings", ['entrance_animation', 'exit_animation']);
    return _this;
  }

  (0, _createClass2.default)(AnimatePageTransition, [{
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
      return (0, _keys.default)(args.settings).some(function (key) {
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


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "AnimatePageTransition", {
  enumerable: true,
  get: function get() {
    return _animatePageTransition.AnimatePageTransition;
  }
});

_Object$defineProperty(exports, "ReRenderPageTransition", {
  enumerable: true,
  get: function get() {
    return _reRenderPageTransition.ReRenderPageTransition;
  }
});

var _animatePageTransition = __webpack_require__(/*! ./animate-page-transition */ "../modules/page-transitions/assets/js/editor/hooks/data/animate-page-transition.js");

var _reRenderPageTransition = __webpack_require__(/*! ./re-render-page-transition */ "../modules/page-transitions/assets/js/editor/hooks/data/re-render-page-transition.js");

/***/ }),

/***/ "../modules/page-transitions/assets/js/editor/hooks/data/re-render-page-transition.js":
/*!********************************************************************************************!*\
  !*** ../modules/page-transitions/assets/js/editor/hooks/data/re-render-page-transition.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = exports.ReRenderPageTransition = void 0;

__webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ "../node_modules/core-js/modules/es6.regexp.replace.js");

__webpack_require__(/*! core-js/modules/es6.string.includes.js */ "../node_modules/core-js/modules/es6.string.includes.js");

__webpack_require__(/*! core-js/modules/es7.array.includes.js */ "../node_modules/core-js/modules/es7.array.includes.js");

var _keys = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _utils = __webpack_require__(/*! ../utils */ "../modules/page-transitions/assets/js/editor/hooks/utils.js");

/**
 * Data hook that passes the new settings from the panel as attributes to the Page Transition component, in order to re-render it.
 */
var ReRenderPageTransition = /*#__PURE__*/function (_$e$modules$hookData$) {
  (0, _inherits2.default)(ReRenderPageTransition, _$e$modules$hookData$);

  var _super = (0, _createSuper2.default)(ReRenderPageTransition);

  function ReRenderPageTransition() {
    var _this;

    (0, _classCallCheck2.default)(this, ReRenderPageTransition);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "prefix", 'settings_page_transitions_');
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "settings", ['entrance_animation', 'preloader_type', 'preloader_icon', 'preloader_image', 'preloader_animation_type']);
    return _this;
  }

  (0, _createClass2.default)(ReRenderPageTransition, [{
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
      return (0, _keys.default)(args.settings).some(function (key) {
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


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var _data = __webpack_require__(/*! ./data */ "../modules/page-transitions/assets/js/editor/hooks/data/index.js");

_Object$keys(_data).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _data[key]) return;

  _Object$defineProperty(exports, key, {
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


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _utils = __webpack_require__(/*! ../utils */ "../modules/page-transitions/assets/js/editor/hooks/utils.js");

/**
 * A route hook that listens to route changes in the panel and change the preview mode for
 * the Page Transitions feature when navigating to the `Site Settings -> Page Transitions` tab.
 *
 * TODO: Convert to `$e.modules.hookRoute.After` when available.
 */
var PageTransitionPreview = /*#__PURE__*/function () {
  function PageTransitionPreview() {
    (0, _classCallCheck2.default)(this, PageTransitionPreview);
  }

  (0, _createClass2.default)(PageTransitionPreview, [{
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


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.getPageTransitionSettings = getPageTransitionSettings;
exports.renderPageTransition = renderPageTransition;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js"));

var _entries = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "../node_modules/@babel/runtime-corejs2/core-js/object/entries.js"));

__webpack_require__(/*! core-js/modules/es6.array.filter.js */ "../node_modules/core-js/modules/es6.array.filter.js");

__webpack_require__(/*! core-js/modules/es6.string.starts-with.js */ "../node_modules/core-js/modules/es6.string.starts-with.js");

__webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ "../node_modules/core-js/modules/es6.regexp.replace.js");

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
  var controls = (0, _entries.default)(container.settings.getActiveControls()).filter(function (_ref) {
    var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
        key = _ref2[0],
        control = _ref2[1];

    return key.startsWith(prefix) && !control.selectors;
  });
  var settings = {};
  controls.forEach(function (_ref3) {
    var _ref4 = (0, _slicedToArray2.default)(_ref3, 1),
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

  (0, _entries.default)(settings).forEach(function (_ref5) {
    var _ref6 = (0, _slicedToArray2.default)(_ref5, 2),
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


    (0, _entries.default)(value).forEach(function (_ref7) {
      var _ref8 = (0, _slicedToArray2.default)(_ref7, 2),
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


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _component = _interopRequireDefault(__webpack_require__(/*! ./component */ "../modules/page-transitions/assets/js/editor/component.js"));

var _default = /*#__PURE__*/function (_elementorModules$edi) {
  (0, _inherits2.default)(_default, _elementorModules$edi);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(_default, [{
    key: "onInit",
    value:
    /**
     * Register the component & bind events on init.
     *
     * @return {void}
     */
    function onInit() {
      $e.components.register(new _component.default());
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

/***/ "../node_modules/core-js/modules/_fails-is-regexp.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/modules/_fails-is-regexp.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MATCH = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/modules/_wks.js")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_string-context.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/modules/_string-context.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "../node_modules/core-js/modules/_is-regexp.js");
var defined = __webpack_require__(/*! ./_defined */ "../node_modules/core-js/modules/_defined.js");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "../node_modules/core-js/modules/es6.string.includes.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.string.includes.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var context = __webpack_require__(/*! ./_string-context */ "../node_modules/core-js/modules/_string-context.js");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "../node_modules/core-js/modules/_fails-is-regexp.js")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.string.starts-with.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.string.starts-with.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/core-js/modules/_to-length.js");
var context = __webpack_require__(/*! ./_string-context */ "../node_modules/core-js/modules/_string-context.js");
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "../node_modules/core-js/modules/_fails-is-regexp.js")(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ })

}]);
//# sourceMappingURL=page-transitions-editor.f316a6908f6ddd23835f.bundle.js.map
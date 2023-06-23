/*! pro-elements - v3.14.0 - 18-06-2023 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["page-transitions-editor"],{

/***/ "../modules/page-transitions/assets/js/editor/commands/animate.js":
/*!************************************************************************!*\
  !*** ../modules/page-transitions/assets/js/editor/commands/animate.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.Animate = void 0;
class Animate extends $e.modules.CommandBase {
  /**
   * Animate the Page Transition element.
   *
   * @return {void}
   */
  apply() {
    const pageTransition = elementor.$previewContents[0].querySelector('e-page-transition');
    if (!pageTransition) {
      return;
    }
    pageTransition.animate();
  }
}
exports.Animate = Animate;
var _default = Animate;
exports["default"] = _default;

/***/ }),

/***/ "../modules/page-transitions/assets/js/editor/commands/index.js":
/*!**********************************************************************!*\
  !*** ../modules/page-transitions/assets/js/editor/commands/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Animate", ({
  enumerable: true,
  get: function () {
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



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var commands = _interopRequireWildcard(__webpack_require__(/*! ./commands/ */ "../modules/page-transitions/assets/js/editor/commands/index.js"));
var hooks = _interopRequireWildcard(__webpack_require__(/*! ./hooks/ */ "../modules/page-transitions/assets/js/editor/hooks/index.js"));
var _pageTransitionPreview = _interopRequireDefault(__webpack_require__(/*! ./hooks/routes/page-transition-preview */ "../modules/page-transitions/assets/js/editor/hooks/routes/page-transition-preview.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
class Component extends $e.modules.ComponentBase {
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
    // TODO: Remove when route hooks are available.
    this.routesHooks.pageTransitionPreview = new _pageTransitionPreview.default();
    $e.routes.on('run:after', (component, route) => {
      this.routesHooks.pageTransitionPreview.run(component, route);
    });
  }

  /**
   * Get the component namespace.
   *
   * @return {string} - Component namespace.
   */
  getNamespace() {
    return 'page-transitions';
  }

  /**
   * Get the component hooks.
   *
   * @return {Object} - Component hooks.
   */
  defaultHooks() {
    return this.importHooks(hooks);
  }

  /**
   * Get the component commands.
   *
   * @return {Object} - Component commands.
   */
  defaultCommands() {
    return this.importCommands(commands);
  }
}
exports["default"] = Component;

/***/ }),

/***/ "../modules/page-transitions/assets/js/editor/hooks/data/animate-page-transition.js":
/*!******************************************************************************************!*\
  !*** ../modules/page-transitions/assets/js/editor/hooks/data/animate-page-transition.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.AnimatePageTransition = void 0;
/**
 * Data hook that animates the Page Transition component when entrance / exit animations are changed.
 */
class AnimatePageTransition extends $e.modules.hookData.After {
  // Page Transitions settings prefix.
  prefix = 'settings_page_transitions_';

  // Controls that the hook should listen to.
  settings = ['entrance_animation', 'exit_animation'];
  getCommand() {
    return 'document/elements/settings';
  }
  getId() {
    return 'animate-page-transitions--document/elements/settings';
  }
  getContainerType() {
    return 'document';
  }
  getConditions(args) {
    // Execute only for specific settings.
    return Object.keys(args.settings).some(key => {
      key = key.replace(this.prefix, '');
      return this.settings.includes(key);
    });
  }
  apply() {
    $e.run('page-transitions/animate');
  }
}
exports.AnimatePageTransition = AnimatePageTransition;
var _default = AnimatePageTransition;
exports["default"] = _default;

/***/ }),

/***/ "../modules/page-transitions/assets/js/editor/hooks/data/index.js":
/*!************************************************************************!*\
  !*** ../modules/page-transitions/assets/js/editor/hooks/data/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "AnimatePageTransition", ({
  enumerable: true,
  get: function () {
    return _animatePageTransition.AnimatePageTransition;
  }
}));
Object.defineProperty(exports, "ReRenderPageTransition", ({
  enumerable: true,
  get: function () {
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



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.ReRenderPageTransition = void 0;
var _utils = __webpack_require__(/*! ../utils */ "../modules/page-transitions/assets/js/editor/hooks/utils.js");
/**
 * Data hook that passes the new settings from the panel as attributes to the Page Transition component, in order to re-render it.
 */
class ReRenderPageTransition extends $e.modules.hookData.After {
  // Page Transitions settings prefix.
  prefix = 'settings_page_transitions_';

  // Controls that the hook should listen to.
  settings = ['entrance_animation', 'preloader_type', 'preloader_icon', 'preloader_image', 'preloader_animation_type'];
  getCommand() {
    return 'document/elements/settings';
  }
  getId() {
    return 're-render-page-transitions--document/elements/settings';
  }
  getContainerType() {
    return 'document';
  }
  getConditions(args) {
    // Execute only for specific settings.
    return Object.keys(args.settings).some(key => {
      key = key.replace(this.prefix, '');
      return this.settings.includes(key);
    });
  }
  apply(args) {
    (0, _utils.renderPageTransition)(args.container);
  }
}
exports.ReRenderPageTransition = ReRenderPageTransition;
var _default = ReRenderPageTransition;
exports["default"] = _default;

/***/ }),

/***/ "../modules/page-transitions/assets/js/editor/hooks/index.js":
/*!*******************************************************************!*\
  !*** ../modules/page-transitions/assets/js/editor/hooks/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _data = __webpack_require__(/*! ./data */ "../modules/page-transitions/assets/js/editor/hooks/data/index.js");
Object.keys(_data).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _data[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
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



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _utils = __webpack_require__(/*! ../utils */ "../modules/page-transitions/assets/js/editor/hooks/utils.js");
/**
 * A route hook that listens to route changes in the panel and change the preview mode for
 * the Page Transitions feature when navigating to the `Site Settings -> Page Transitions` tab.
 *
 * TODO: Convert to `$e.modules.hookRoute.After` when available.
 */
class PageTransitionPreview {
  /**
   * Run the hook.
   *
   * @param {Object} component
   * @param {string} route
   *
   * @return {void}
   */
  run(component, route) {
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
  togglePageTransitionPreview() {
    let on = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    const className = 'e-page-transition--preview',
      pageTransition = elementor.$previewContents[0].body.querySelector('e-page-transition');
    if (!pageTransition) {
      return;
    }
    pageTransition.classList.toggle(className, on);
  }
}
exports["default"] = PageTransitionPreview;

/***/ }),

/***/ "../modules/page-transitions/assets/js/editor/hooks/utils.js":
/*!*******************************************************************!*\
  !*** ../modules/page-transitions/assets/js/editor/hooks/utils.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getPageTransitionSettings = getPageTransitionSettings;
exports.renderPageTransition = renderPageTransition;
const prefix = 'settings_page_transitions_';

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
  const controls = Object.entries(container.settings.getActiveControls()).filter(_ref => {
    let [key, control] = _ref;
    return key.startsWith(prefix) && !control.selectors;
  });
  const settings = {};
  controls.forEach(_ref2 => {
    let [control] = _ref2;
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
  let pageTransition = elementor.$previewContents[0].querySelector('e-page-transition');
  const hasEntranceAnimation = !!container.settings.get(`${prefix}entrance_animation`),
    hasPreloader = !!container.settings.get(`${prefix}preloader_type`),
    shouldRender = hasEntranceAnimation || hasPreloader;

  // Create the Page Transition element if it doesn't exist.
  if (!pageTransition) {
    pageTransition = document.createElement('e-page-transition');
    pageTransition.classList.add('e-page-transition--preview');
    elementor.$previewContents[0].body.append(pageTransition);
  }

  // Disable the Page Transition if needed.
  pageTransition.toggleAttribute('disabled', !shouldRender);
  const settings = getPageTransitionSettings(container);

  // Iterate over the settings and set them as attributes.
  Object.entries(settings).forEach(_ref3 => {
    let [key, value] = _ref3;
    key = key.replace(prefix, '');
    key = key.replaceAll('_', '-');
    if (!value) {
      pageTransition.removeAttribute(key);
      return;
    }
    if ('string' === typeof value) {
      pageTransition.setAttribute(key, value);
      return;
    }

    // For object values (e.g. image control).
    Object.entries(value).forEach(_ref4 => {
      let [subKey, subValue] = _ref4;
      let newKey = key;

      // Append the sub key only if it's not `value` (e.g. `url`), in order to avoid weird
      // attributes like `preloader-icon-value`.
      if (subKey !== 'value') {
        newKey = `${key}-${subKey}`;
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



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _component = _interopRequireDefault(__webpack_require__(/*! ./component */ "../modules/page-transitions/assets/js/editor/component.js"));
class _default extends elementorModules.editor.utils.Module {
  /**
   * Register the component & bind events on init.
   *
   * @return {void}
   */
  onInit() {
    $e.components.register(new _component.default());
    this.bindEvents();
  }

  /**
   * Listen to Page Transition event.
   *
   * @return {void}
   */
  bindEvents() {
    // Make sure that `window.elementor` is initialized.
    // TODO: Find a better solution. It's caused because of the dynamic import.
    if (window.elementor) {
      this.onAnimateButtonClick();
      return;
    }
    jQuery(window).on('elementor:init', () => this.onAnimateButtonClick());
  }

  /**
   * Listen to `animate` button click event and animate the Page Transition.
   *
   * @return {void}
   */
  onAnimateButtonClick() {
    elementor.channels.editor.on('elementorPageTransitions:animate', () => {
      $e.run('page-transitions/animate');
    });
  }
}
exports["default"] = _default;

/***/ })

}]);
//# sourceMappingURL=page-transitions-editor.930bfd9119ee62d5ccd6.bundle.js.map
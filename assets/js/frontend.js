/*! pro-elements - v3.21.0 - 20-05-2024 */
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["frontend"],{

/***/ "../assets/dev/js/frontend/frontend.js":
/*!*********************************************!*\
  !*** ../assets/dev/js/frontend/frontend.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
__webpack_require__(/*! ../public-path */ "../assets/dev/js/public-path.js");
var _frontend = _interopRequireDefault(__webpack_require__(/*! ../../../../modules/motion-fx/assets/js/frontend/frontend */ "../modules/motion-fx/assets/js/frontend/frontend.js"));
var _frontend2 = _interopRequireDefault(__webpack_require__(/*! ../../../../modules/sticky/assets/js/frontend/frontend */ "../modules/sticky/assets/js/frontend/frontend.js"));
var _frontend3 = _interopRequireDefault(__webpack_require__(/*! ../../../../modules/code-highlight/assets/js/frontend/frontend */ "../modules/code-highlight/assets/js/frontend/frontend.js"));
var _frontend4 = _interopRequireDefault(__webpack_require__(/*! ../../../../modules/video-playlist/assets/js/frontend/frontend */ "../modules/video-playlist/assets/js/frontend/frontend.js"));
var _frontend5 = _interopRequireDefault(__webpack_require__(/*! ../../../../modules/payments/assets/js/frontend/frontend */ "../modules/payments/assets/js/frontend/frontend.js"));
var _frontend6 = _interopRequireDefault(__webpack_require__(/*! ../../../../modules/progress-tracker/assets/js/frontend/frontend */ "../modules/progress-tracker/assets/js/frontend/frontend.js"));
var _controls = _interopRequireDefault(__webpack_require__(/*! ./utils/controls */ "../assets/dev/js/frontend/utils/controls.js"));
var _dropdownMenuHeightController = _interopRequireDefault(__webpack_require__(/*! ./utils/dropdown-menu-height-controller */ "../assets/dev/js/frontend/utils/dropdown-menu-height-controller.js"));
class ElementorProFrontend extends elementorModules.ViewModule {
  onInit() {
    super.onInit();
    this.config = ElementorProFrontendConfig;
    this.modules = {};
    this.initOnReadyComponents();
  }
  bindEvents() {
    jQuery(window).on('elementor/frontend/init', this.onElementorFrontendInit.bind(this));
  }
  initModules() {
    // Handlers that should be available by default for sections usage.
    let handlers = {
      motionFX: _frontend.default,
      sticky: _frontend2.default,
      codeHighlight: _frontend3.default,
      videoPlaylist: _frontend4.default,
      payments: _frontend5.default,
      progressTracker: _frontend6.default
    };

    // Keep this line before applying filter on the handlers.
    // TODO: BC - Deprecated since 3.7.0
    elementorProFrontend.trigger('elementor-pro/modules/init:before');

    // TODO: Use this instead.
    elementorProFrontend.trigger('elementor-pro/modules/init/before');
    handlers = elementorFrontend.hooks.applyFilters('elementor-pro/frontend/handlers', handlers);
    jQuery.each(handlers, (moduleName, ModuleClass) => {
      this.modules[moduleName] = new ModuleClass();
    });

    // TODO: BC Since 2.9.0
    this.modules.linkActions = {
      addAction: function () {
        elementorFrontend.utils.urlActions.addAction(...arguments);
      }
    };
  }
  onElementorFrontendInit() {
    this.initModules();
  }
  initOnReadyComponents() {
    this.utils = {
      controls: new _controls.default(),
      DropdownMenuHeightController: _dropdownMenuHeightController.default
    };
  }
}
window.elementorProFrontend = new ElementorProFrontend();

/***/ }),

/***/ "../assets/dev/js/frontend/utils/controls.js":
/*!***************************************************!*\
  !*** ../assets/dev/js/frontend/utils/controls.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class Controls {
  /**
   * Get Control Value
   *
   * Retrieves a control value.
   * This function has been copied from `elementor/assets/dev/js/editor/utils/conditions.js`.
   *
   * @since 3.11.0
   *
   * @param {{}}     controlSettings A settings object (e.g. element settings - keys and values)
   * @param {string} controlKey      The control key name
   * @param {string} controlSubKey   A specific property of the control object.
   * @return {*} Control Value
   */
  getControlValue(controlSettings, controlKey, controlSubKey) {
    let value;
    if ('object' === typeof controlSettings[controlKey] && controlSubKey) {
      value = controlSettings[controlKey][controlSubKey];
    } else {
      value = controlSettings[controlKey];
    }
    return value;
  }

  /**
   * Get the value of a responsive control.
   *
   * Retrieves the value of a responsive control for the current device or for this first parent device which has a control value.
   *
   * @since 3.11.0
   *
   * @param {{}}     controlSettings A settings object (e.g. element settings - keys and values)
   * @param {string} controlKey      The control key name
   * @param {string} controlSubKey   A specific property of the control object.
   * @return {*} Control Value
   */
  getResponsiveControlValue(controlSettings, controlKey) {
    let controlSubKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    const currentDeviceMode = elementorFrontend.getCurrentDeviceMode(),
      controlValueDesktop = this.getControlValue(controlSettings, controlKey, controlSubKey);

    // Set the control value for the current device mode.
    // First check the widescreen device mode.
    if ('widescreen' === currentDeviceMode) {
      const controlValueWidescreen = this.getControlValue(controlSettings, `${controlKey}_widescreen`, controlSubKey);
      return !!controlValueWidescreen || 0 === controlValueWidescreen ? controlValueWidescreen : controlValueDesktop;
    }

    // Loop through all responsive and desktop device modes.
    const activeBreakpoints = elementorFrontend.breakpoints.getActiveBreakpointsList({
      withDesktop: true
    });
    let parentDeviceMode = currentDeviceMode,
      deviceIndex = activeBreakpoints.indexOf(currentDeviceMode),
      controlValue = '';
    while (deviceIndex <= activeBreakpoints.length) {
      if ('desktop' === parentDeviceMode) {
        controlValue = controlValueDesktop;
        break;
      }
      const responsiveControlKey = `${controlKey}_${parentDeviceMode}`,
        responsiveControlValue = this.getControlValue(controlSettings, responsiveControlKey, controlSubKey);
      if (!!responsiveControlValue || 0 === responsiveControlValue) {
        controlValue = responsiveControlValue;
        break;
      }

      // If no control value has been set for the current device mode, then check the parent device mode.
      deviceIndex++;
      parentDeviceMode = activeBreakpoints[deviceIndex];
    }
    return controlValue;
  }
}
exports["default"] = Controls;

/***/ }),

/***/ "../assets/dev/js/frontend/utils/dropdown-menu-height-controller.js":
/*!**************************************************************************!*\
  !*** ../assets/dev/js/frontend/utils/dropdown-menu-height-controller.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class DropdownMenuHeightController {
  constructor(widgetConfig) {
    this.widgetConfig = widgetConfig;
  }
  calculateStickyMenuNavHeight() {
    this.widgetConfig.elements.$dropdownMenuContainer.css(this.widgetConfig.settings.menuHeightCssVarName, '');
    const menuToggleHeight = this.widgetConfig.elements.$dropdownMenuContainer.offset().top - jQuery(window).scrollTop();
    return elementorFrontend.elements.$window.height() - menuToggleHeight;
  }
  calculateMenuTabContentHeight($tab) {
    return elementorFrontend.elements.$window.height() - $tab[0].getBoundingClientRect().top;
  }
  isElementSticky() {
    return this.widgetConfig.elements.$element.hasClass('elementor-sticky') || this.widgetConfig.elements.$element.parents('.elementor-sticky').length;
  }
  getMenuHeight() {
    return this.isElementSticky() ? this.calculateStickyMenuNavHeight() + 'px' : this.widgetConfig.settings.dropdownMenuContainerMaxHeight;
  }
  setMenuHeight(menuHeight) {
    this.widgetConfig.elements.$dropdownMenuContainer.css(this.widgetConfig.settings.menuHeightCssVarName, menuHeight);
  }
  reassignMobileMenuHeight() {
    const menuHeight = this.isToggleActive() ? this.getMenuHeight() : 0;
    return this.setMenuHeight(menuHeight);
  }
  reassignMenuHeight($activeTabContent) {
    if (!this.isElementSticky() || 0 === $activeTabContent.length) {
      return;
    }
    const offsetBottom = elementorFrontend.elements.$window.height() - $activeTabContent[0].getBoundingClientRect().top,
      isContentHeightBiggerThanWindow = $activeTabContent.height() > offsetBottom;
    if (!isContentHeightBiggerThanWindow) {
      return;
    }
    $activeTabContent.css('height', this.calculateMenuTabContentHeight($activeTabContent) + 'px');
    $activeTabContent.css('overflow-y', 'scroll');
  }
  resetMenuHeight($activeTabContent) {
    if (!this.isElementSticky()) {
      return;
    }
    $activeTabContent.css('height', 'initial');
    $activeTabContent.css('overflow-y', 'visible');
  }
  isToggleActive() {
    const $menuToggle = this.widgetConfig.elements.$menuToggle;

    // New approach.
    // Aria attributes instead of css classes.
    if (!!this.widgetConfig.attributes?.menuToggleState) {
      return 'true' === $menuToggle.attr(this.widgetConfig.attributes.menuToggleState);
    }

    // This can be removed once the new markup of the Mega Menu has been implemented.
    // Previously we used state classes to indicate the active state of the menu toggle.
    return $menuToggle.hasClass(this.widgetConfig.classes.menuToggleActiveClass);
  }
}
exports["default"] = DropdownMenuHeightController;

/***/ }),

/***/ "../assets/dev/js/public-path.js":
/*!***************************************!*\
  !*** ../assets/dev/js/public-path.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* eslint-disable camelcase */
__webpack_require__.p = ElementorProFrontendConfig.urls.assets + 'js/';

/***/ }),

/***/ "../modules/code-highlight/assets/js/frontend/frontend.js":
/*!****************************************************************!*\
  !*** ../modules/code-highlight/assets/js/frontend/frontend.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class _default extends elementorModules.Module {
  constructor() {
    super();
    elementorFrontend.elementsHandler.attachHandler('code-highlight', () => __webpack_require__.e(/*! import() | code-highlight */ "code-highlight").then(__webpack_require__.bind(__webpack_require__, /*! ./handler */ "../modules/code-highlight/assets/js/frontend/handler.js")));
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/motion-fx/assets/js/frontend/frontend.js":
/*!***********************************************************!*\
  !*** ../modules/motion-fx/assets/js/frontend/frontend.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _handler = _interopRequireDefault(__webpack_require__(/*! ./handler */ "../modules/motion-fx/assets/js/frontend/handler.js"));
class _default extends elementorModules.Module {
  constructor() {
    super();
    elementorFrontend.elementsHandler.attachHandler('global', _handler.default, null);
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/motion-fx/assets/js/frontend/handler.js":
/*!**********************************************************!*\
  !*** ../modules/motion-fx/assets/js/frontend/handler.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _motionFx = _interopRequireDefault(__webpack_require__(/*! ./motion-fx/motion-fx */ "../modules/motion-fx/assets/js/frontend/motion-fx/motion-fx.js"));
class _default extends elementorModules.frontend.handlers.Base {
  __construct() {
    super.__construct(...arguments);
    this.toggle = elementorFrontend.debounce(this.toggle, 200);
  }
  getDefaultSettings() {
    return {
      selectors: {
        container: '.elementor-widget-container'
      }
    };
  }
  getDefaultElements() {
    const selectors = this.getSettings('selectors');
    return {
      $container: this.$element.find(selectors.container)
    };
  }
  bindEvents() {
    elementorFrontend.elements.$window.on('resize', this.toggle);
  }
  unbindEvents() {
    elementorFrontend.elements.$window.off('resize', this.toggle);
  }
  addCSSTransformEvents() {
    // Remove CSS transition variable that assigned from scroll.js in order to allow the transition of the CSS-Transform.
    const motionFxScrolling = this.getElementSettings('motion_fx_motion_fx_scrolling');
    if (motionFxScrolling && !this.isTransitionEventAdded) {
      this.isTransitionEventAdded = true;
      this.elements.$container.on('mouseenter', () => {
        this.elements.$container.css('--e-transform-transition-duration', '');
      });
    }
  }
  initEffects() {
    this.effects = {
      translateY: {
        interaction: 'scroll',
        actions: ['translateY']
      },
      translateX: {
        interaction: 'scroll',
        actions: ['translateX']
      },
      rotateZ: {
        interaction: 'scroll',
        actions: ['rotateZ']
      },
      scale: {
        interaction: 'scroll',
        actions: ['scale']
      },
      opacity: {
        interaction: 'scroll',
        actions: ['opacity']
      },
      blur: {
        interaction: 'scroll',
        actions: ['blur']
      },
      mouseTrack: {
        interaction: 'mouseMove',
        actions: ['translateXY']
      },
      tilt: {
        interaction: 'mouseMove',
        actions: ['tilt']
      }
    };
  }
  prepareOptions(name) {
    const elementSettings = this.getElementSettings(),
      type = 'motion_fx' === name ? 'element' : 'background',
      interactions = {};
    jQuery.each(elementSettings, (key, value) => {
      const keyRegex = new RegExp('^' + name + '_(.+?)_effect'),
        keyMatches = key.match(keyRegex);
      if (!keyMatches || !value) {
        return;
      }
      const options = {},
        effectName = keyMatches[1];
      jQuery.each(elementSettings, (subKey, subValue) => {
        const subKeyRegex = new RegExp(name + '_' + effectName + '_(.+)'),
          subKeyMatches = subKey.match(subKeyRegex);
        if (!subKeyMatches) {
          return;
        }
        const subFieldName = subKeyMatches[1];
        if ('effect' === subFieldName) {
          return;
        }
        if ('object' === typeof subValue) {
          subValue = Object.keys(subValue.sizes).length ? subValue.sizes : subValue.size;
        }
        options[subKeyMatches[1]] = subValue;
      });
      const effect = this.effects[effectName],
        interactionName = effect.interaction;
      if (!interactions[interactionName]) {
        interactions[interactionName] = {};
      }
      effect.actions.forEach(action => interactions[interactionName][action] = options);
    });
    let $element = this.$element,
      $dimensionsElement;
    const elementType = this.getElementType();
    if ('element' === type && !['section', 'container'].includes(elementType)) {
      $dimensionsElement = $element;
      let childElementSelector;
      if ('column' === elementType) {
        childElementSelector = '.elementor-widget-wrap';
      } else {
        childElementSelector = '.elementor-widget-container';
      }
      $element = $element.find('> ' + childElementSelector);
    }
    const options = {
      type,
      interactions,
      elementSettings,
      $element,
      $dimensionsElement,
      refreshDimensions: this.isEdit,
      range: elementSettings[name + '_range'],
      classes: {
        element: 'elementor-motion-effects-element',
        parent: 'elementor-motion-effects-parent',
        backgroundType: 'elementor-motion-effects-element-type-background',
        container: 'elementor-motion-effects-container',
        layer: 'elementor-motion-effects-layer',
        perspective: 'elementor-motion-effects-perspective'
      }
    };
    if (!options.range && 'fixed' === this.getCurrentDeviceSetting('_position')) {
      options.range = 'page';
    }
    if ('fixed' === this.getCurrentDeviceSetting('_position')) {
      options.isFixedPosition = true;
    }
    if ('background' === type && 'column' === this.getElementType()) {
      options.addBackgroundLayerTo = ' > .elementor-element-populated';
    }
    return options;
  }
  activate(name) {
    const options = this.prepareOptions(name);
    if (jQuery.isEmptyObject(options.interactions)) {
      return;
    }
    this[name] = new _motionFx.default(options);
  }
  deactivate(name) {
    if (this[name]) {
      this[name].destroy();
      delete this[name];
    }
  }
  toggle() {
    const currentDeviceMode = elementorFrontend.getCurrentDeviceMode(),
      elementSettings = this.getElementSettings();
    ['motion_fx', 'background_motion_fx'].forEach(name => {
      const devices = elementSettings[name + '_devices'],
        isCurrentModeActive = !devices || -1 !== devices.indexOf(currentDeviceMode);
      if (isCurrentModeActive && (elementSettings[name + '_motion_fx_scrolling'] || elementSettings[name + '_motion_fx_mouse'])) {
        if (this[name]) {
          this.refreshInstance(name);
        } else {
          this.activate(name);
        }
      } else {
        this.deactivate(name);
      }
    });
  }
  refreshInstance(instanceName) {
    const instance = this[instanceName];
    if (!instance) {
      return;
    }
    const preparedOptions = this.prepareOptions(instanceName);
    instance.setSettings(preparedOptions);
    instance.refresh();
  }
  onInit() {
    super.onInit();
    this.initEffects();
    this.addCSSTransformEvents();
    this.toggle();
  }
  onElementChange(propertyName) {
    if (/motion_fx_((scrolling)|(mouse)|(devices))$/.test(propertyName)) {
      if ('motion_fx_motion_fx_scrolling' === propertyName) {
        this.addCSSTransformEvents();
      }
      this.toggle();
      return;
    }
    const propertyMatches = propertyName.match('.*?(motion_fx|_transform)');
    if (propertyMatches) {
      const instanceName = propertyMatches[0].match('(_transform)') ? 'motion_fx' : propertyMatches[0];
      this.refreshInstance(instanceName);
      if (!this[instanceName]) {
        this.activate(instanceName);
      }
    }
    if (/^_position/.test(propertyName)) {
      ['motion_fx', 'background_motion_fx'].forEach(instanceName => {
        this.refreshInstance(instanceName);
      });
    }
  }
  onDestroy() {
    super.onDestroy();
    ['motion_fx', 'background_motion_fx'].forEach(name => {
      this.deactivate(name);
    });
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/motion-fx/assets/js/frontend/motion-fx/actions.js":
/*!********************************************************************!*\
  !*** ../modules/motion-fx/assets/js/frontend/motion-fx/actions.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class _default extends elementorModules.Module {
  getMovePointFromPassedPercents(movableRange, passedPercents) {
    const movePoint = passedPercents / movableRange * 100;
    return +movePoint.toFixed(2);
  }
  getEffectValueFromMovePoint(range, movePoint) {
    return range * movePoint / 100;
  }
  getStep(passedPercents, options) {
    if ('element' === this.getSettings('type')) {
      return this.getElementStep(passedPercents, options);
    }
    return this.getBackgroundStep(passedPercents, options);
  }
  getElementStep(passedPercents, options) {
    return -(passedPercents - 50) * options.speed;
  }
  getBackgroundStep(passedPercents, options) {
    const movableRange = this.getSettings('dimensions.movable' + options.axis.toUpperCase());
    return -this.getEffectValueFromMovePoint(movableRange, passedPercents);
  }
  getDirectionMovePoint(passedPercents, direction, range) {
    let movePoint;
    if (passedPercents < range.start) {
      if ('out-in' === direction) {
        movePoint = 0;
      } else if ('in-out' === direction) {
        movePoint = 100;
      } else {
        movePoint = this.getMovePointFromPassedPercents(range.start, passedPercents);
        if ('in-out-in' === direction) {
          movePoint = 100 - movePoint;
        }
      }
    } else if (passedPercents < range.end) {
      if ('in-out-in' === direction) {
        movePoint = 0;
      } else if ('out-in-out' === direction) {
        movePoint = 100;
      } else {
        movePoint = this.getMovePointFromPassedPercents(range.end - range.start, passedPercents - range.start);
        if ('in-out' === direction) {
          movePoint = 100 - movePoint;
        }
      }
    } else if ('in-out' === direction) {
      movePoint = 0;
    } else if ('out-in' === direction) {
      movePoint = 100;
    } else {
      movePoint = this.getMovePointFromPassedPercents(100 - range.end, 100 - passedPercents);
      if ('in-out-in' === direction) {
        movePoint = 100 - movePoint;
      }
    }
    return movePoint;
  }
  translateX(actionData, passedPercents) {
    actionData.axis = 'x';
    actionData.unit = 'px';
    this.transform('translateX', passedPercents, actionData);
  }
  translateY(actionData, passedPercents) {
    actionData.axis = 'y';
    actionData.unit = 'px';
    this.transform('translateY', passedPercents, actionData);
  }
  translateXY(actionData, passedPercentsX, passedPercentsY) {
    this.translateX(actionData, passedPercentsX);
    this.translateY(actionData, passedPercentsY);
  }
  tilt(actionData, passedPercentsX, passedPercentsY) {
    const options = {
      speed: actionData.speed / 10,
      direction: actionData.direction
    };
    this.rotateX(options, passedPercentsY);
    this.rotateY(options, 100 - passedPercentsX);
  }
  rotateX(actionData, passedPercents) {
    actionData.axis = 'x';
    actionData.unit = 'deg';
    this.transform('rotateX', passedPercents, actionData);
  }
  rotateY(actionData, passedPercents) {
    actionData.axis = 'y';
    actionData.unit = 'deg';
    this.transform('rotateY', passedPercents, actionData);
  }
  rotateZ(actionData, passedPercents) {
    actionData.unit = 'deg';
    this.transform('rotateZ', passedPercents, actionData);
  }
  scale(actionData, passedPercents) {
    const movePoint = this.getDirectionMovePoint(passedPercents, actionData.direction, actionData.range);
    this.updateRulePart('transform', 'scale', 1 + actionData.speed * movePoint / 1000);
  }
  transform(action, passedPercents, actionData) {
    if (actionData.direction) {
      passedPercents = 100 - passedPercents;
    }
    this.updateRulePart('transform', action, this.getStep(passedPercents, actionData) + actionData.unit);
  }
  setCSSTransformVariables(elementSettings) {
    this.CSSTransformVariables = [];
    jQuery.each(elementSettings, (settingKey, settingValue) => {
      const transformKeyMatches = settingKey.match(/_transform_(.+?)_effect/m);
      if (transformKeyMatches && settingValue) {
        if ('perspective' === transformKeyMatches[1]) {
          this.CSSTransformVariables.unshift(transformKeyMatches[1]);
          return;
        }
        if (this.CSSTransformVariables.includes(transformKeyMatches[1])) {
          return;
        }
        this.CSSTransformVariables.push(transformKeyMatches[1]);
      }
    });
  }
  opacity(actionData, passedPercents) {
    const movePoint = this.getDirectionMovePoint(passedPercents, actionData.direction, actionData.range),
      level = actionData.level / 10,
      opacity = 1 - level + this.getEffectValueFromMovePoint(level, movePoint);
    this.$element.css({
      opacity,
      'will-change': 'opacity'
    });
  }
  blur(actionData, passedPercents) {
    const movePoint = this.getDirectionMovePoint(passedPercents, actionData.direction, actionData.range),
      blur = actionData.level - this.getEffectValueFromMovePoint(actionData.level, movePoint);
    this.updateRulePart('filter', 'blur', blur + 'px');
  }
  updateRulePart(ruleName, key, value) {
    if (!this.rulesVariables[ruleName]) {
      this.rulesVariables[ruleName] = {};
    }
    if (!this.rulesVariables[ruleName][key]) {
      this.rulesVariables[ruleName][key] = true;
      this.updateRule(ruleName);
    }
    const cssVarKey = `--${key}`;
    this.$element[0].style.setProperty(cssVarKey, value);
  }
  updateRule(ruleName) {
    let value = '';
    value += this.concatTransformCSSProperties(ruleName);
    value += this.concatTransformMotionEffectCSSProperties(ruleName);
    this.$element.css(ruleName, value);
  }
  concatTransformCSSProperties(ruleName) {
    let value = '';
    if ('transform' === ruleName) {
      jQuery.each(this.CSSTransformVariables, (index, variableKey) => {
        const variableName = variableKey;
        if (variableKey.startsWith('flip')) {
          variableKey = variableKey.replace('flip', 'scale');
        }

        // Adding default value because of the hover state. if there is no default the transform will break.
        const defaultUnit = variableKey.startsWith('rotate') || variableKey.startsWith('skew') ? 'deg' : 'px',
          defaultValue = variableKey.startsWith('scale') ? 1 : 0 + defaultUnit;
        value += `${variableKey}(var(--e-transform-${variableName}, ${defaultValue}))`;
      });
    }
    return value;
  }
  concatTransformMotionEffectCSSProperties(ruleName) {
    let value = '';
    jQuery.each(this.rulesVariables[ruleName], variableKey => {
      value += `${variableKey}(var(--${variableKey}))`;
    });
    return value;
  }
  runAction(actionName, actionData, passedPercents) {
    if (actionData.affectedRange) {
      if (actionData.affectedRange.start > passedPercents) {
        passedPercents = actionData.affectedRange.start;
      }
      if (actionData.affectedRange.end < passedPercents) {
        passedPercents = actionData.affectedRange.end;
      }
    }
    for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      args[_key - 3] = arguments[_key];
    }
    this[actionName](actionData, passedPercents, ...args);
  }
  refresh() {
    this.rulesVariables = {};
    this.CSSTransformVariables = [];
    this.$element.css({
      transform: '',
      filter: '',
      opacity: '',
      'will-change': ''
    });
  }
  onInit() {
    this.$element = this.getSettings('$targetElement');
    this.refresh();
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/motion-fx/assets/js/frontend/motion-fx/interactions/base.js":
/*!******************************************************************************!*\
  !*** ../modules/motion-fx/assets/js/frontend/motion-fx/interactions/base.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));
class _default extends elementorModules.ViewModule {
  constructor() {
    super(...arguments);
    (0, _defineProperty2.default)(this, "onInsideViewport", () => {
      this.run();
      this.animationFrameRequest = requestAnimationFrame(this.onInsideViewport);
    });
  }
  __construct(options) {
    this.motionFX = options.motionFX;
    if (!this.intersectionObservers) {
      this.setElementInViewportObserver();
    }
  }
  setElementInViewportObserver() {
    this.intersectionObserver = elementorModules.utils.Scroll.scrollObserver({
      callback: event => {
        if (event.isInViewport) {
          this.onInsideViewport();
        } else {
          this.removeAnimationFrameRequest();
        }
      }
    });

    // Determine which element we should observe.
    const observedElement = 'page' === this.motionFX.getSettings('range') ? elementorFrontend.elements.$body[0] : this.motionFX.elements.$parent[0];
    this.intersectionObserver.observe(observedElement);
  }
  runCallback() {
    const callback = this.getSettings('callback');
    callback(...arguments);
  }
  removeIntersectionObserver() {
    if (this.intersectionObserver) {
      this.intersectionObserver.unobserve(this.motionFX.elements.$parent[0]);
    }
  }
  removeAnimationFrameRequest() {
    if (this.animationFrameRequest) {
      cancelAnimationFrame(this.animationFrameRequest);
    }
  }
  destroy() {
    this.removeAnimationFrameRequest();
    this.removeIntersectionObserver();
  }
  onInit() {
    super.onInit();
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/motion-fx/assets/js/frontend/motion-fx/interactions/mouse-move.js":
/*!************************************************************************************!*\
  !*** ../modules/motion-fx/assets/js/frontend/motion-fx/interactions/mouse-move.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/motion-fx/assets/js/frontend/motion-fx/interactions/base.js"));
class MouseMoveInteraction extends _base.default {
  bindEvents() {
    if (!MouseMoveInteraction.mouseTracked) {
      elementorFrontend.elements.$window.on('mousemove', MouseMoveInteraction.updateMousePosition);
      MouseMoveInteraction.mouseTracked = true;
    }
  }
  run() {
    const mousePosition = MouseMoveInteraction.mousePosition,
      oldMousePosition = this.oldMousePosition;
    if (oldMousePosition.x === mousePosition.x && oldMousePosition.y === mousePosition.y) {
      return;
    }
    this.oldMousePosition = {
      x: mousePosition.x,
      y: mousePosition.y
    };
    const passedPercentsX = 100 / innerWidth * mousePosition.x,
      passedPercentsY = 100 / innerHeight * mousePosition.y;
    this.runCallback(passedPercentsX, passedPercentsY);
  }
  onInit() {
    this.oldMousePosition = {};
    super.onInit();
  }
}
exports["default"] = MouseMoveInteraction;
MouseMoveInteraction.mousePosition = {};
MouseMoveInteraction.updateMousePosition = event => {
  MouseMoveInteraction.mousePosition = {
    x: event.clientX,
    y: event.clientY
  };
};

/***/ }),

/***/ "../modules/motion-fx/assets/js/frontend/motion-fx/interactions/scroll.js":
/*!********************************************************************************!*\
  !*** ../modules/motion-fx/assets/js/frontend/motion-fx/interactions/scroll.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/motion-fx/assets/js/frontend/motion-fx/interactions/base.js"));
class _default extends _base.default {
  run() {
    if (pageYOffset === this.windowScrollTop) {
      return false;
    }
    this.onScrollMovement();
    this.windowScrollTop = pageYOffset;
  }
  onScrollMovement() {
    this.updateMotionFxDimensions();
    this.updateAnimation();
    this.resetTransitionVariable();
  }
  resetTransitionVariable() {
    this.motionFX.$element.css('--e-transform-transition-duration', '100ms');
  }
  updateMotionFxDimensions() {
    const motionFXSettings = this.motionFX.getSettings();
    if (motionFXSettings.refreshDimensions) {
      this.motionFX.defineDimensions();
    }
  }
  updateAnimation() {
    let passedRangePercents;
    if ('page' === this.motionFX.getSettings('range')) {
      passedRangePercents = elementorModules.utils.Scroll.getPageScrollPercentage();
    } else if (this.motionFX.getSettings('isFixedPosition')) {
      passedRangePercents = elementorModules.utils.Scroll.getPageScrollPercentage({}, window.innerHeight);
    } else {
      passedRangePercents = elementorModules.utils.Scroll.getElementViewportPercentage(this.motionFX.elements.$parent);
    }
    this.runCallback(passedRangePercents);
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/motion-fx/assets/js/frontend/motion-fx/motion-fx.js":
/*!**********************************************************************!*\
  !*** ../modules/motion-fx/assets/js/frontend/motion-fx/motion-fx.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _scroll = _interopRequireDefault(__webpack_require__(/*! ./interactions/scroll */ "../modules/motion-fx/assets/js/frontend/motion-fx/interactions/scroll.js"));
var _mouseMove = _interopRequireDefault(__webpack_require__(/*! ./interactions/mouse-move */ "../modules/motion-fx/assets/js/frontend/motion-fx/interactions/mouse-move.js"));
var _actions = _interopRequireDefault(__webpack_require__(/*! ./actions */ "../modules/motion-fx/assets/js/frontend/motion-fx/actions.js"));
class _default extends elementorModules.ViewModule {
  getDefaultSettings() {
    return {
      type: 'element',
      $element: null,
      $dimensionsElement: null,
      addBackgroundLayerTo: null,
      interactions: {},
      refreshDimensions: false,
      range: 'viewport',
      classes: {
        element: 'motion-fx-element',
        parent: 'motion-fx-parent',
        backgroundType: 'motion-fx-element-type-background',
        container: 'motion-fx-container',
        layer: 'motion-fx-layer',
        perspective: 'motion-fx-perspective'
      }
    };
  }
  bindEvents() {
    this.defineDimensions = this.defineDimensions.bind(this);
    elementorFrontend.elements.$window.on('resize elementor-pro/motion-fx/recalc', this.defineDimensions);
  }
  unbindEvents() {
    elementorFrontend.elements.$window.off('resize elementor-pro/motion-fx/recalc', this.defineDimensions);
  }
  addBackgroundLayer() {
    const settings = this.getSettings();
    this.elements.$motionFXContainer = jQuery('<div>', {
      class: settings.classes.container
    });
    this.elements.$motionFXLayer = jQuery('<div>', {
      class: settings.classes.layer
    });
    this.updateBackgroundLayerSize();
    this.elements.$motionFXContainer.prepend(this.elements.$motionFXLayer);
    const $addBackgroundLayerTo = settings.addBackgroundLayerTo ? this.$element.find(settings.addBackgroundLayerTo) : this.$element;
    $addBackgroundLayerTo.prepend(this.elements.$motionFXContainer);
  }
  removeBackgroundLayer() {
    this.elements.$motionFXContainer.remove();
  }
  updateBackgroundLayerSize() {
    const settings = this.getSettings(),
      speed = {
        x: 0,
        y: 0
      },
      mouseInteraction = settings.interactions.mouseMove,
      scrollInteraction = settings.interactions.scroll;
    if (mouseInteraction && mouseInteraction.translateXY) {
      speed.x = mouseInteraction.translateXY.speed * 10;
      speed.y = mouseInteraction.translateXY.speed * 10;
    }
    if (scrollInteraction) {
      if (scrollInteraction.translateX) {
        speed.x = scrollInteraction.translateX.speed * 10;
      }
      if (scrollInteraction.translateY) {
        speed.y = scrollInteraction.translateY.speed * 10;
      }
    }
    this.elements.$motionFXLayer.css({
      width: 100 + speed.x + '%',
      height: 100 + speed.y + '%'
    });
  }
  defineDimensions() {
    const $dimensionsElement = this.getSettings('$dimensionsElement') || this.$element,
      elementOffset = $dimensionsElement.offset();
    const dimensions = {
      elementHeight: $dimensionsElement.outerHeight(),
      elementWidth: $dimensionsElement.outerWidth(),
      elementTop: elementOffset.top,
      elementLeft: elementOffset.left
    };
    dimensions.elementRange = dimensions.elementHeight + innerHeight;
    this.setSettings('dimensions', dimensions);
    if ('background' === this.getSettings('type')) {
      this.defineBackgroundLayerDimensions();
    }
  }
  defineBackgroundLayerDimensions() {
    const dimensions = this.getSettings('dimensions');
    dimensions.layerHeight = this.elements.$motionFXLayer.height();
    dimensions.layerWidth = this.elements.$motionFXLayer.width();
    dimensions.movableX = dimensions.layerWidth - dimensions.elementWidth;
    dimensions.movableY = dimensions.layerHeight - dimensions.elementHeight;
    this.setSettings('dimensions', dimensions);
  }
  initInteractionsTypes() {
    this.interactionsTypes = {
      scroll: _scroll.default,
      mouseMove: _mouseMove.default
    };
  }
  prepareSpecialActions() {
    const settings = this.getSettings(),
      hasTiltEffect = !!(settings.interactions.mouseMove && settings.interactions.mouseMove.tilt);
    this.elements.$parent.toggleClass(settings.classes.perspective, hasTiltEffect);
  }
  cleanSpecialActions() {
    const settings = this.getSettings();
    this.elements.$parent.removeClass(settings.classes.perspective);
  }
  runInteractions() {
    var _this = this;
    const settings = this.getSettings();
    this.actions.setCSSTransformVariables(settings.elementSettings);
    this.prepareSpecialActions();
    jQuery.each(settings.interactions, (interactionName, actions) => {
      this.interactions[interactionName] = new this.interactionsTypes[interactionName]({
        motionFX: this,
        callback: function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          jQuery.each(actions, (actionName, actionData) => _this.actions.runAction(actionName, actionData, ...args));
        }
      });
      this.interactions[interactionName].run();
    });
  }
  destroyInteractions() {
    this.cleanSpecialActions();
    jQuery.each(this.interactions, (interactionName, interaction) => interaction.destroy());
    this.interactions = {};
  }
  refresh() {
    this.actions.setSettings(this.getSettings());
    if ('background' === this.getSettings('type')) {
      this.updateBackgroundLayerSize();
      this.defineBackgroundLayerDimensions();
    }
    this.actions.refresh();
    this.destroyInteractions();
    this.runInteractions();
  }
  destroy() {
    this.destroyInteractions();
    this.actions.refresh();
    const settings = this.getSettings();
    this.$element.removeClass(settings.classes.element);
    this.elements.$parent.removeClass(settings.classes.parent);
    if ('background' === settings.type) {
      this.$element.removeClass(settings.classes.backgroundType);
      this.removeBackgroundLayer();
    }
  }
  onInit() {
    super.onInit();
    const settings = this.getSettings();
    this.$element = settings.$element;
    this.elements.$parent = this.$element.parent();
    this.$element.addClass(settings.classes.element);
    this.elements.$parent = this.$element.parent();
    this.elements.$parent.addClass(settings.classes.parent);
    if ('background' === settings.type) {
      this.$element.addClass(settings.classes.backgroundType);
      this.addBackgroundLayer();
    }
    this.defineDimensions();
    settings.$targetElement = 'element' === settings.type ? this.$element : this.elements.$motionFXLayer;
    this.interactions = {};
    this.actions = new _actions.default(settings);
    this.initInteractionsTypes();
    this.runInteractions();
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/payments/assets/js/frontend/frontend.js":
/*!**********************************************************!*\
  !*** ../modules/payments/assets/js/frontend/frontend.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class _default extends elementorModules.Module {
  constructor() {
    super();
    elementorFrontend.elementsHandler.attachHandler('paypal-button', () => __webpack_require__.e(/*! import() | paypal-button */ "paypal-button").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/paypal-button */ "../modules/payments/assets/js/frontend/handlers/paypal-button.js")));
    elementorFrontend.elementsHandler.attachHandler('stripe-button', () => Promise.all(/*! import() | stripe-button */[__webpack_require__.e("vendors-node_modules_dompurify_dist_purify_js"), __webpack_require__.e("stripe-button")]).then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/stripe-button */ "../modules/payments/assets/js/frontend/handlers/stripe-button.js")));
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/progress-tracker/assets/js/frontend/frontend.js":
/*!******************************************************************!*\
  !*** ../modules/progress-tracker/assets/js/frontend/frontend.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class _default extends elementorModules.Module {
  constructor() {
    super();
    elementorFrontend.elementsHandler.attachHandler('progress-tracker', () => __webpack_require__.e(/*! import() | progress-tracker */ "progress-tracker").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/progress-tracker */ "../modules/progress-tracker/assets/js/frontend/handlers/progress-tracker.js")));
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/sticky/assets/js/frontend/frontend.js":
/*!********************************************************!*\
  !*** ../modules/sticky/assets/js/frontend/frontend.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _sticky = _interopRequireDefault(__webpack_require__(/*! ./handlers/sticky */ "../modules/sticky/assets/js/frontend/handlers/sticky.js"));
class _default extends elementorModules.Module {
  constructor() {
    super();
    elementorFrontend.elementsHandler.attachHandler('section', _sticky.default, null);
    elementorFrontend.elementsHandler.attachHandler('container', _sticky.default, null);
    elementorFrontend.elementsHandler.attachHandler('widget', _sticky.default, null);
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/sticky/assets/js/frontend/handlers/sticky.js":
/*!***************************************************************!*\
  !*** ../modules/sticky/assets/js/frontend/handlers/sticky.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = elementorModules.frontend.handlers.Base.extend({
  currentConfig: {},
  debouncedReactivate: null,
  bindEvents() {
    elementorFrontend.addListenerOnce(this.getUniqueHandlerID() + 'sticky', 'resize', this.reactivateOnResize);
  },
  unbindEvents() {
    elementorFrontend.removeListeners(this.getUniqueHandlerID() + 'sticky', 'resize', this.reactivateOnResize);
  },
  isStickyInstanceActive() {
    return undefined !== this.$element.data('sticky');
  },
  /**
   * Get the current active setting value for a responsive control.
   *
   * @param {string} setting
   * @return {any} - Setting value.
   */
  getResponsiveSetting(setting) {
    const elementSettings = this.getElementSettings();
    return elementorFrontend.getCurrentDeviceSetting(elementSettings, setting);
  },
  /**
   * Return an array of settings names for responsive control (e.g. `settings`, `setting_tablet`, `setting_mobile` ).
   *
   * @param {string} setting
   * @return {string[]} - List of settings.
   */
  getResponsiveSettingList(setting) {
    const breakpoints = Object.keys(elementorFrontend.config.responsive.activeBreakpoints);
    return ['', ...breakpoints].map(suffix => {
      return suffix ? `${setting}_${suffix}` : setting;
    });
  },
  getConfig() {
    const elementSettings = this.getElementSettings(),
      stickyOptions = {
        to: elementSettings.sticky,
        offset: this.getResponsiveSetting('sticky_offset'),
        effectsOffset: this.getResponsiveSetting('sticky_effects_offset'),
        classes: {
          sticky: 'elementor-sticky',
          stickyActive: 'elementor-sticky--active elementor-section--handles-inside',
          stickyEffects: 'elementor-sticky--effects',
          spacer: 'elementor-sticky__spacer'
        },
        isRTL: elementorFrontend.config.is_rtl,
        // In edit mode, since the preview is an iframe, the scrollbar is on the left. The scrollbar width is
        // compensated for in this case.
        handleScrollbarWidth: elementorFrontend.isEditMode()
      },
      $wpAdminBar = elementorFrontend.elements.$wpAdminBar,
      isParentContainer = this.isContainerElement(this.$element[0]) && !this.isContainerElement(this.$element[0].parentElement);
    if ($wpAdminBar.length && 'top' === elementSettings.sticky && 'fixed' === $wpAdminBar.css('position')) {
      stickyOptions.offset += $wpAdminBar.height();
    }

    // The `stickyOptions.parent` value should only be applied to inner elements, and not to top level containers.
    if (elementSettings.sticky_parent && !isParentContainer) {
      // TODO: The e-container classes should be removed in the next update.
      stickyOptions.parent = '.e-container, .e-container__inner, .e-con, .e-con-inner, .elementor-widget-wrap';
    }
    return stickyOptions;
  },
  activate() {
    this.currentConfig = this.getConfig();
    this.$element.sticky(this.currentConfig);
  },
  deactivate() {
    if (!this.isStickyInstanceActive()) {
      return;
    }
    this.$element.sticky('destroy');
  },
  run(refresh) {
    if (!this.getElementSettings('sticky')) {
      this.deactivate();
      return;
    }
    var currentDeviceMode = elementorFrontend.getCurrentDeviceMode(),
      activeDevices = this.getElementSettings('sticky_on');
    if (-1 !== activeDevices.indexOf(currentDeviceMode)) {
      if (true === refresh) {
        this.reactivate();
      } else if (!this.isStickyInstanceActive()) {
        this.activate();
      }
    } else {
      this.deactivate();
    }
  },
  /**
   * Reactivate the sticky instance on resize only if the new sticky config is different from the current active one,
   * in order to avoid re-initializing the sticky when not needed, and avoid layout shifts.
   * The config can be different between devices, so this need to be checked on each screen resize to make sure that
   * the current screen size uses the appropriate Sticky config.
   *
   * @return {void}
   */
  reactivateOnResize() {
    clearTimeout(this.debouncedReactivate);
    this.debouncedReactivate = setTimeout(() => {
      const config = this.getConfig(),
        isDifferentConfig = JSON.stringify(config) !== JSON.stringify(this.currentConfig);
      if (isDifferentConfig) {
        this.run(true);
      }
    }, 300);
  },
  reactivate() {
    this.deactivate();
    this.activate();
  },
  onElementChange(settingKey) {
    if (-1 !== ['sticky', 'sticky_on'].indexOf(settingKey)) {
      this.run(true);
    }

    // Settings that trigger a re-activation when changed.
    const settings = [...this.getResponsiveSettingList('sticky_offset'), ...this.getResponsiveSettingList('sticky_effects_offset'), 'sticky_parent'];
    if (-1 !== settings.indexOf(settingKey)) {
      this.reactivate();
    }
  },
  /**
   * Listen to device mode changes and re-initialize the sticky.
   *
   * @return {void}
   */
  onDeviceModeChange() {
    // Wait for the call stack to be empty.
    // The `run` function requests the current device mode from the CSS so it's not ready immediately.
    // (need to wait for the `deviceMode` event to change the CSS).
    // See `elementorFrontend.getCurrentDeviceMode()` for reference.
    setTimeout(() => this.run(true));
  },
  onInit() {
    elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);
    if (elementorFrontend.isEditMode()) {
      elementor.listenTo(elementor.channels.deviceMode, 'change', () => this.onDeviceModeChange());
    }
    this.run();
  },
  onDestroy() {
    elementorModules.frontend.handlers.Base.prototype.onDestroy.apply(this, arguments);
    this.deactivate();
  },
  /**
   *
   * @param {HTMLElement|null|undefined} element
   * @return {boolean} Is the passed element a container.
   */
  isContainerElement(element) {
    const containerClasses = [
    // TODO: The e-container classes should be removed in the next update.
    'e-container', 'e-container__inner', 'e-con', 'e-con-inner'];
    return containerClasses.some(containerClass => {
      return element?.classList.contains(containerClass);
    });
  }
});

/***/ }),

/***/ "../modules/video-playlist/assets/js/frontend/frontend.js":
/*!****************************************************************!*\
  !*** ../modules/video-playlist/assets/js/frontend/frontend.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class _default extends elementorModules.Module {
  constructor() {
    super();
    elementorFrontend.hooks.addAction('frontend/element_ready/video-playlist.default', $element => {
      __webpack_require__.e(/*! import() | video-playlist */ "video-playlist").then(__webpack_require__.bind(__webpack_require__, /*! ./handler */ "../modules/video-playlist/assets/js/frontend/handler.js")).then(_ref => {
        let {
          default: dynamicHandler
        } = _ref;
        elementorFrontend.elementsHandler.addHandler(dynamicHandler, {
          $element,
          toggleSelf: false
        });
      });
    });
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ "../node_modules/@babel/runtime/helpers/toPropertyKey.js");
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

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

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/toPrimitive.js":
/*!*************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "../node_modules/@babel/runtime/helpers/typeof.js")["default"]);
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/toPropertyKey.js":
/*!***************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "../node_modules/@babel/runtime/helpers/typeof.js")["default"]);
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ "../node_modules/@babel/runtime/helpers/toPrimitive.js");
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/typeof.js":
/*!********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/typeof.js ***!
  \********************************************************/
/***/ ((module) => {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("../assets/dev/js/frontend/frontend.js"));
/******/ }
]);
//# sourceMappingURL=frontend.js.map
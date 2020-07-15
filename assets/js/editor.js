/*! pro-elements - v2.10.3 - 29-06-2020 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(8);

var assertThisInitialized = __webpack_require__(7);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(9);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(13);

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ElementEditorModule = __webpack_require__(86);

module.exports = ElementEditorModule.extend({
  __construct: function __construct() {
    this.cache = {};

    ElementEditorModule.prototype.__construct.apply(this, arguments);
  },
  getName: function getName() {
    return '';
  },
  getCacheKey: function getCacheKey(args) {
    return JSON.stringify({
      service: this.getName(),
      data: args
    });
  },
  fetchCache: function fetchCache(type, cacheKey, requestArgs) {
    var _this = this;

    return elementorPro.ajax.addRequest('forms_panel_action_data', {
      unique_id: 'integrations_' + this.getName(),
      data: requestArgs,
      success: function success(data) {
        _this.cache[type] = _.extend({}, _this.cache[type]);
        _this.cache[type][cacheKey] = data[type];
      }
    });
  },
  updateOptions: function updateOptions(name, options) {
    var controlView = this.getEditorControlView(name);

    if (controlView) {
      this.getEditorControlModel(name).set('options', options);
      controlView.render();
    }
  },
  onInit: function onInit() {
    this.addSectionListener('section_' + this.getName(), this.onSectionActive);
  },
  onSectionActive: function onSectionActive() {
    this.onApiUpdate();
  },
  onApiUpdate: function onApiUpdate() {}
});

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(1);

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(8);

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
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

module.exports = _defineProperty;

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _editor = _interopRequireDefault(__webpack_require__(26));

var _editor2 = _interopRequireDefault(__webpack_require__(27));

var _module = _interopRequireDefault(__webpack_require__(28));

var _module2 = _interopRequireDefault(__webpack_require__(41));

var _module3 = _interopRequireDefault(__webpack_require__(54));

var _module4 = _interopRequireDefault(__webpack_require__(74));

var ElementorPro = Marionette.Application.extend({
  config: {},
  modules: {},
  initModules: function initModules() {
    var QueryControl = __webpack_require__(100),
        Library = __webpack_require__(102),
        FlipBox = __webpack_require__(104),
        ShareButtons = __webpack_require__(105),
        AssetsManager = __webpack_require__(106),
        ThemeElements = __webpack_require__(108);

    this.modules = {
      queryControl: new QueryControl(),
      forms: new _module4.default(),
      library: new Library(),
      customCSS: new _editor.default(),
      globalWidget: new _module2.default(),
      flipBox: new FlipBox(),
      motionFX: new _editor2.default(),
      shareButtons: new ShareButtons(),
      assetsManager: new AssetsManager(),
      themeElements: new ThemeElements(),
      themeBuilder: new _module3.default(),
      // Popup is depended on Theme Builder.
      popup: new _module.default()
    };
  },
  ajax: {
    prepareArgs: function prepareArgs(args) {
      args[0] = 'pro_' + args[0];
      return args;
    },
    send: function send() {
      return elementorCommon.ajax.send.apply(elementorCommon.ajax, this.prepareArgs(arguments));
    },
    addRequest: function addRequest() {
      return elementorCommon.ajax.addRequest.apply(elementorCommon.ajax, this.prepareArgs(arguments));
    }
  },
  translate: function translate(stringKey, templateArgs) {
    return elementorCommon.translate(stringKey, null, templateArgs, this.config.i18n);
  },
  onStart: function onStart() {
    var _this = this;

    this.config = elementorProEditorConfig;
    this.initModules();
    jQuery(window).on('elementor:init', function () {
      return _this.onElementorInit();
    }).on('elementor/connect/success/editor-pro-activate', this.onActivateSuccess);
  },
  onElementorInit: function onElementorInit() {
    var _this2 = this;

    elementor.on('preview:loaded', function () {
      return _this2.onElementorPreviewLoaded();
    });
    elementorPro.libraryRemoveGetProButtons();
    elementor.debug.addURLToWatch('elementor-pro/assets');
  },
  onElementorPreviewLoaded: function onElementorPreviewLoaded() {
    elementor.$preview[0].contentWindow.elementorPro = this;
  },
  libraryRemoveGetProButtons: function libraryRemoveGetProButtons() {
    elementor.hooks.addFilter('elementor/editor/template-library/template/action-button', function (viewID, templateData) {
      return templateData.isPro && !false ? '#tmpl-elementor-pro-template-library-activate-license-button' : '#tmpl-elementor-template-library-insert-button';
    });
  },
  onActivateSuccess: function onActivateSuccess() {
    // Hide notice.
    elementor.noticeBar.onCloseClick(); // Mark site connect for insert templates connect screen.

    elementor.config.library_connect.is_connected = true; // Mark pro is active - for `this.libraryRemoveGetProButtons`.

    elementorPro.config.isActive = true;
    elementor.notifications.showToast({
      message: elementor.translate('connected_successfully')
    });
  }
});
window.elementorPro = new ElementorPro();
elementorPro.start();

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _default = /*#__PURE__*/function (_elementorModules$edi) {
  (0, _inherits2.default)(_default, _elementorModules$edi);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_default).apply(this, arguments));
  }

  (0, _createClass2.default)(_default, [{
    key: "addCustomCss",
    value: function addCustomCss(css, context) {
      if (!context) {
        return;
      }

      var model = context.model,
          customCSS = model.get('settings').get('custom_css');
      var selector = '.elementor-element.elementor-element-' + model.get('id');

      if ('document' === model.get('elType')) {
        selector = elementor.config.settings.page.cssWrapperSelector;
      }

      if (customCSS) {
        css += customCSS.replace(/selector/g, selector);
      }

      return css;
    }
  }, {
    key: "onElementorInit",
    value: function onElementorInit() {
      elementor.hooks.addFilter('editor/style/styleText', this.addCustomCss);
      elementor.on('navigator:init', this.onNavigatorInit.bind(this));
    }
  }, {
    key: "onNavigatorInit",
    value: function onNavigatorInit() {
      elementor.navigator.indicators.customCSS = {
        icon: 'code-bold',
        settingKeys: ['custom_css'],
        title: elementorPro.translate('custom_css'),
        section: 'section_custom_css'
      };
    }
  }]);
  return _default;
}(elementorModules.editor.utils.Module);

exports.default = _default;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _default = /*#__PURE__*/function (_elementorModules$edi) {
  (0, _inherits2.default)(_default, _elementorModules$edi);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_default).apply(this, arguments));
  }

  (0, _createClass2.default)(_default, [{
    key: "onElementorInit",
    value: function onElementorInit() {
      elementor.on('navigator:init', this.onNavigatorInit.bind(this));
    }
  }, {
    key: "onNavigatorInit",
    value: function onNavigatorInit() {
      elementor.navigator.indicators.motionFX = {
        icon: 'flash',
        title: elementorPro.translate('motion_effects'),
        settingKeys: ['motion_fx_motion_fx_scrolling', 'motion_fx_motion_fx_mouse', 'background_motion_fx_motion_fx_scrolling', 'background_motion_fx_motion_fx_mouse'],
        section: 'section_effects'
      };
    }
  }]);
  return _default;
}(elementorModules.editor.utils.Module);

exports.default = _default;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _component = _interopRequireDefault(__webpack_require__(29));

var PopupModule = /*#__PURE__*/function (_elementorModules$edi) {
  (0, _inherits2.default)(PopupModule, _elementorModules$edi);

  function PopupModule() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, PopupModule);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(PopupModule)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.displaySettingsTypes = {
      triggers: {
        icon: 'eicon-click'
      },
      timing: {
        icon: 'eicon-cog'
      }
    };
    return _this;
  }

  (0, _createClass2.default)(PopupModule, [{
    key: "onElementorLoaded",
    value: function onElementorLoaded() {
      this.component = $e.components.register(new _component.default({
        manager: this
      }));
    }
  }]);
  return PopupModule;
}(elementorModules.editor.utils.Module);

module.exports = PopupModule;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(14);

var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var hooks = _interopRequireWildcard(__webpack_require__(30));

var Component = /*#__PURE__*/function (_$e$modules$Component) {
  (0, _inherits2.default)(Component, _$e$modules$Component);

  function Component() {
    (0, _classCallCheck2.default)(this, Component);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Component).apply(this, arguments));
  }

  (0, _createClass2.default)(Component, [{
    key: "getNamespace",
    value: function getNamespace() {
      return 'document/popup';
    }
  }, {
    key: "defaultHooks",
    value: function defaultHooks() {
      return this.importHooks(hooks);
    }
  }]);
  return Component;
}($e.modules.ComponentBase);

exports.default = Component;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _data = __webpack_require__(31);

Object.keys(_data).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _data[key];
    }
  });
});

var _ui = __webpack_require__(33);

Object.keys(_ui).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ui[key];
    }
  });
});

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "PopupSave", {
  enumerable: true,
  get: function get() {
    return _save.PopupSave;
  }
});

var _save = __webpack_require__(32);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PopupSave = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var PopupSave = /*#__PURE__*/function (_$e$modules$hookData$) {
  (0, _inherits2.default)(PopupSave, _$e$modules$hookData$);

  function PopupSave() {
    (0, _classCallCheck2.default)(this, PopupSave);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(PopupSave).apply(this, arguments));
  }

  (0, _createClass2.default)(PopupSave, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/save/save';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'elementor-pro-popup-save';
    }
  }, {
    key: "getConditions",
    value: function getConditions() {
      return 'popup' === elementor.config.document.type;
    }
  }, {
    key: "apply",
    value: function apply() {
      var settings = {};
      jQuery.each(elementorPro.modules.popup.displaySettingsTypes, function (type, data) {
        settings[type] = data.model.toJSON({
          remove: ['default']
        });
      });
      elementorPro.ajax.addRequest('popup_save_display_settings', {
        data: {
          settings: settings
        }
      });
    }
  }]);
  return PopupSave;
}($e.modules.hookData.After);

exports.PopupSave = PopupSave;
var _default = PopupSave;
exports.default = _default;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "PopupAddInstructions", {
  enumerable: true,
  get: function get() {
    return _addInstructions.PopupAddInstructions;
  }
});
Object.defineProperty(exports, "PopupAddLibraryTab", {
  enumerable: true,
  get: function get() {
    return _addLibraryTab.PopupAddLibraryTab;
  }
});
Object.defineProperty(exports, "PopupAddTriggers", {
  enumerable: true,
  get: function get() {
    return _addTriggers.PopupAddTriggers;
  }
});
Object.defineProperty(exports, "PopupRemoveInstructions", {
  enumerable: true,
  get: function get() {
    return _removeInstructions.PopupRemoveInstructions;
  }
});
Object.defineProperty(exports, "PopupRemoveLibraryTab", {
  enumerable: true,
  get: function get() {
    return _removeLibraryTab.PopupRemoveLibraryTab;
  }
});
Object.defineProperty(exports, "PopupRemoveTriggers", {
  enumerable: true,
  get: function get() {
    return _removeTriggers.PopupRemoveTriggers;
  }
});

var _addInstructions = __webpack_require__(34);

var _addLibraryTab = __webpack_require__(35);

var _addTriggers = __webpack_require__(36);

var _removeInstructions = __webpack_require__(38);

var _removeLibraryTab = __webpack_require__(39);

var _removeTriggers = __webpack_require__(40);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PopupAddInstructions = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var PopupAddInstructions = /*#__PURE__*/function (_$e$modules$hookUI$Af) {
  (0, _inherits2.default)(PopupAddInstructions, _$e$modules$hookUI$Af);

  function PopupAddInstructions() {
    (0, _classCallCheck2.default)(this, PopupAddInstructions);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(PopupAddInstructions).apply(this, arguments));
  }

  (0, _createClass2.default)(PopupAddInstructions, [{
    key: "getCommand",
    value: function getCommand() {
      return 'editor/documents/open';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'elementor-pro-popup-add-instructions';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      var document = elementor.documents.get(args.id);
      return 'popup' === document.config.type && !elementor.config.user.introduction.popupSettings;
    }
  }, {
    key: "apply",
    value: function apply() {
      // Expose for the remove hook.
      this.component.onPageSettingsClose = this.onPageSettingsClose.bind(this);
      $e.components.get('panel/page-settings').on('route/close', this.component.onPageSettingsClose);
    }
  }, {
    key: "onPageSettingsClose",
    value: function onPageSettingsClose() {
      var introduction = this.getIntroduction();
      introduction.show(elementor.getPanelView().footer.currentView.ui.settings[0]);
      introduction.setViewed();
      $e.components.get('panel/page-settings').off('route/close', this.component.onPageSettingsClose);
    }
  }, {
    key: "getIntroduction",
    value: function getIntroduction() {
      return new elementorModules.editor.utils.Introduction({
        introductionKey: 'popupSettings',
        dialogOptions: {
          id: 'elementor-popup-settings-introduction',
          headerMessage: '<i class="eicon-info"></i>' + elementorPro.translate('popup_settings_introduction_title'),
          message: elementorPro.translate('popup_settings_introduction_message'),
          closeButton: true,
          closeButtonClass: 'eicon-close',
          position: {
            my: 'left bottom',
            at: 'right bottom-5',
            autoRefresh: true
          },
          hide: {
            onOutsideClick: false
          }
        }
      });
    }
  }]);
  return PopupAddInstructions;
}($e.modules.hookUI.After);

exports.PopupAddInstructions = PopupAddInstructions;
var _default = PopupAddInstructions;
exports.default = _default;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PopupAddLibraryTab = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var PopupAddLibraryTab = /*#__PURE__*/function (_$e$modules$hookUI$Af) {
  (0, _inherits2.default)(PopupAddLibraryTab, _$e$modules$hookUI$Af);

  function PopupAddLibraryTab() {
    (0, _classCallCheck2.default)(this, PopupAddLibraryTab);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(PopupAddLibraryTab).apply(this, arguments));
  }

  (0, _createClass2.default)(PopupAddLibraryTab, [{
    key: "getCommand",
    value: function getCommand() {
      return 'editor/documents/open';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'elementor-pro-popup-add-library-tab';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      var document = elementor.documents.get(args.id);
      return 'popup' === document.config.type;
    }
  }, {
    key: "apply",
    value: function apply() {
      $e.components.get('library').addTab('templates/popups', {
        title: elementorPro.translate('popups'),
        filter: {
          source: 'remote',
          type: 'popup'
        }
      }, 1);
    }
  }]);
  return PopupAddLibraryTab;
}($e.modules.hookUI.After);

exports.PopupAddLibraryTab = PopupAddLibraryTab;
var _default = PopupAddLibraryTab;
exports.default = _default;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PopupAddTriggers = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _displaySettings = _interopRequireDefault(__webpack_require__(37));

var PopupAddTriggers = /*#__PURE__*/function (_$e$modules$hookUI$Af) {
  (0, _inherits2.default)(PopupAddTriggers, _$e$modules$hookUI$Af);

  function PopupAddTriggers() {
    (0, _classCallCheck2.default)(this, PopupAddTriggers);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(PopupAddTriggers).apply(this, arguments));
  }

  (0, _createClass2.default)(PopupAddTriggers, [{
    key: "getCommand",
    value: function getCommand() {
      return 'editor/documents/open';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'elementor-pro-popup-add-triggers';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      var document = elementor.documents.get(args.id);
      return 'popup' === document.config.type;
    }
  }, {
    key: "apply",
    value: function apply() {
      if (elementor.panel) {
        this.addUI();
      } else {
        // First open, the panel is not available yet.
        elementor.on('preview:loaded', this.addUI.bind(this));
      }
    }
  }, {
    key: "addUI",
    value: function addUI() {
      this.addPanelFooterSubmenuItems();
      this.addPublishTabs();
    }
  }, {
    key: "addPublishTabs",
    value: function addPublishTabs() {
      var config = elementor.config.document.displaySettings,
          component = $e.components.get('theme-builder-publish'),
          module = elementorPro.modules.popup;
      jQuery.each(module.displaySettingsTypes, function (type, data) {
        // Init models for editor save.
        data.model = new elementorModules.editor.elements.models.BaseSettings(config[type].settings, {
          controls: config[type].controls
        });
        component.addTab(type, {
          View: _displaySettings.default,
          viewOptions: {
            name: type,
            id: "elementor-popup-".concat(type, "__controls"),
            model: data.model,
            controls: data.model.controls
          },
          name: type,
          title: elementorPro.translate(type),
          description: elementorPro.translate("popup_publish_screen_".concat(type, "_description")),
          image: elementorPro.config.urls.modules + "popup/assets/images/".concat(type, "-tab.svg")
        });
      });
    }
  }, {
    key: "addPanelFooterSubmenuItems",
    value: function addPanelFooterSubmenuItems() {
      var component = $e.components.get('theme-builder-publish'),
          displaySettingsTypes = elementorPro.modules.popup.displaySettingsTypes;
      jQuery.each(displaySettingsTypes, function (type, data) {
        elementor.getPanelView().footer.currentView.addSubMenuItem('saver-options', {
          before: 'save-template',
          name: type,
          icon: data.icon,
          title: elementorPro.translate(type),
          callback: function callback() {
            return $e.route(component.getTabRoute(type));
          }
        });
      });
    }
  }]);
  return PopupAddTriggers;
}($e.modules.hookUI.After);

exports.PopupAddTriggers = PopupAddTriggers;
var _default = PopupAddTriggers;
exports.default = _default;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(1));

var _get2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _default = /*#__PURE__*/function (_elementorModules$edi) {
  (0, _inherits2.default)(_default, _elementorModules$edi);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.template = _.noop;
    _this.activeTab = 'content';

    _this.listenTo(_this.model, 'change', _this.onModelChange);

    return _this;
  }

  (0, _createClass2.default)(_default, [{
    key: "getNamespaceArray",
    value: function getNamespaceArray() {
      return ['popup', 'display-settings'];
    }
  }, {
    key: "className",
    value: function className() {
      return (0, _get2.default)((0, _getPrototypeOf3.default)(_default.prototype), "className", this).call(this) + ' elementor-popup__display-settings';
    }
  }, {
    key: "toggleGroup",
    value: function toggleGroup(groupName, $groupElement) {
      $groupElement.toggleClass('elementor-active', !!this.model.get(groupName));
    }
  }, {
    key: "onRenderTemplate",
    value: function onRenderTemplate() {
      this.activateFirstSection();
    }
  }, {
    key: "onRender",
    value: function onRender() {
      var _this2 = this;

      var name = this.getOption('name');
      var $groupWrapper;
      this.children.each(function (child) {
        var type = child.model.get('type');

        if ('heading' !== type) {
          if ($groupWrapper) {
            $groupWrapper.append(child.$el);
          }

          return;
        }

        var groupName = child.model.get('name').replace('_heading', '');
        $groupWrapper = jQuery('<div>', {
          id: "elementor-popup__".concat(name, "-controls-group--").concat(groupName),
          class: 'elementor-popup__display-settings_controls_group'
        });
        var $imageWrapper = jQuery('<div>', {
          class: 'elementor-popup__display-settings_controls_group__icon'
        }),
            $image = jQuery('<img>', {
          src: elementorPro.config.urls.modules + "popup/assets/images/".concat(name, "/").concat(groupName, ".svg")
        });
        $imageWrapper.html($image);
        $groupWrapper.html($imageWrapper);
        child.$el.before($groupWrapper);
        $groupWrapper.append(child.$el);

        _this2.toggleGroup(groupName, $groupWrapper);
      });
    }
  }, {
    key: "onModelChange",
    value: function onModelChange() {
      var changedControlName = Object.keys(this.model.changed)[0],
          changedControlView = this.getControlViewByName(changedControlName);

      if ('switcher' !== changedControlView.model.get('type')) {
        return;
      }

      this.toggleGroup(changedControlName, changedControlView.$el.parent());
    }
  }]);
  return _default;
}(elementorModules.editor.views.ControlsStack);

exports.default = _default;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PopupRemoveInstructions = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var PopupRemoveInstructions = /*#__PURE__*/function (_$e$modules$hookUI$Af) {
  (0, _inherits2.default)(PopupRemoveInstructions, _$e$modules$hookUI$Af);

  function PopupRemoveInstructions() {
    (0, _classCallCheck2.default)(this, PopupRemoveInstructions);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(PopupRemoveInstructions).apply(this, arguments));
  }

  (0, _createClass2.default)(PopupRemoveInstructions, [{
    key: "getCommand",
    value: function getCommand() {
      return 'editor/documents/unload';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'elementor-pro-popup-remove-instructions';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      var document = args.document;
      return 'popup' === document.config.type && !elementor.config.user.introduction.popupSettings;
    }
  }, {
    key: "apply",
    value: function apply() {
      $e.components.get('panel/page-settings').off('route/close', this.component.onPageSettingsClose);
    }
  }]);
  return PopupRemoveInstructions;
}($e.modules.hookUI.After);

exports.PopupRemoveInstructions = PopupRemoveInstructions;
var _default = PopupRemoveInstructions;
exports.default = _default;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PopupRemoveLibraryTab = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var PopupRemoveLibraryTab = /*#__PURE__*/function (_$e$modules$hookUI$Af) {
  (0, _inherits2.default)(PopupRemoveLibraryTab, _$e$modules$hookUI$Af);

  function PopupRemoveLibraryTab() {
    (0, _classCallCheck2.default)(this, PopupRemoveLibraryTab);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(PopupRemoveLibraryTab).apply(this, arguments));
  }

  (0, _createClass2.default)(PopupRemoveLibraryTab, [{
    key: "getCommand",
    value: function getCommand() {
      return 'editor/documents/unload';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'elementor-pro-popup-remove-library-tab';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      var document = args.document;
      return 'popup' === document.config.type;
    }
  }, {
    key: "apply",
    value: function apply() {
      $e.components.get('library').removeTab('templates/popups');
    }
  }]);
  return PopupRemoveLibraryTab;
}($e.modules.hookUI.After);

exports.PopupRemoveLibraryTab = PopupRemoveLibraryTab;
var _default = PopupRemoveLibraryTab;
exports.default = _default;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PopupRemoveTriggers = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var PopupRemoveTriggers = /*#__PURE__*/function (_$e$modules$hookUI$Af) {
  (0, _inherits2.default)(PopupRemoveTriggers, _$e$modules$hookUI$Af);

  function PopupRemoveTriggers() {
    (0, _classCallCheck2.default)(this, PopupRemoveTriggers);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(PopupRemoveTriggers).apply(this, arguments));
  }

  (0, _createClass2.default)(PopupRemoveTriggers, [{
    key: "getCommand",
    value: function getCommand() {
      return 'editor/documents/unload';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'elementor-pro-popup-remove-triggers';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      var document = args.document;
      return 'popup' === document.config.type;
    }
  }, {
    key: "apply",
    value: function apply() {
      this.removePanelFooterSubmenuItems();
      this.removePublishTabs();
    }
  }, {
    key: "removePanelFooterSubmenuItems",
    value: function removePanelFooterSubmenuItems() {
      var displaySettingsTypes = elementorPro.modules.popup.displaySettingsTypes;
      jQuery.each(displaySettingsTypes, function (type) {
        elementor.getPanelView().footer.currentView.removeSubMenuItem('saver-options', {
          name: type
        });
      });
    }
  }, {
    key: "removePublishTabs",
    value: function removePublishTabs() {
      var component = $e.components.get('theme-builder-publish'),
          displaySettingsTypes = elementorPro.modules.popup.displaySettingsTypes;
      jQuery.each(displaySettingsTypes, function (type) {
        component.removeTab(type);
      });
    }
  }]);
  return PopupRemoveTriggers;
}($e.modules.hookUI.After);

exports.PopupRemoveTriggers = PopupRemoveTriggers;
var _default = PopupRemoveTriggers;
exports.default = _default;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _component = _interopRequireDefault(__webpack_require__(42));

var Module = /*#__PURE__*/function (_elementorModules$edi) {
  (0, _inherits2.default)(Module, _elementorModules$edi);

  function Module() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Module);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Module)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.globalModels = {};
    _this.panelWidgets = null; // TODO: This property is unused.

    _this.templatesAreSaved = true;
    return _this;
  }

  (0, _createClass2.default)(Module, [{
    key: "addGlobalWidget",
    value: function addGlobalWidget(id, args) {
      args = _.extend({}, args, {
        categories: [],
        icon: elementor.widgetsCache[args.widgetType].icon,
        widgetType: args.widgetType,
        custom: {
          templateID: id
        }
      });
      var globalModel = this.createGlobalModel(id, args);
      return this.panelWidgets.add(globalModel);
    }
  }, {
    key: "createGlobalModel",
    value: function createGlobalModel(id, modelArgs) {
      var globalModel = new elementor.modules.elements.models.Element(modelArgs),
          settingsModel = globalModel.get('settings');
      globalModel.set('id', id);
      settingsModel.on('change', _.bind(this.onGlobalModelChange, this));
      return this.globalModels[id] = globalModel;
    }
  }, {
    key: "onGlobalModelChange",
    value: function onGlobalModelChange() {
      this.templatesAreSaved = false;
    }
  }, {
    key: "setWidgetType",
    value: function setWidgetType() {
      elementor.hooks.addFilter('element/view', function (DefaultView, model) {
        if (model.get('templateID')) {
          return __webpack_require__(49);
        }

        return DefaultView;
      });
      elementor.hooks.addFilter('element/model', function (DefaultModel, attrs) {
        if (attrs.templateID) {
          return __webpack_require__(50);
        }

        return DefaultModel;
      });
    }
  }, {
    key: "registerTemplateType",
    value: function registerTemplateType() {
      elementor.templates.registerTemplateType('widget', {
        showInLibrary: false,
        saveDialog: {
          title: elementorPro.translate('global_widget_save_title'),
          description: elementorPro.translate('global_widget_save_description')
        },
        prepareSavedData: function prepareSavedData(data) {
          data.widgetType = data.content[0].widgetType;
          return data;
        },
        ajaxParams: {
          success: this.onWidgetTemplateSaved.bind(this)
        }
      });
    }
  }, {
    key: "addSavedWidgetsToPanel",
    value: function addSavedWidgetsToPanel() {
      var _this2 = this;

      this.panelWidgets = new Backbone.Collection();

      _.each(elementorPro.config.widget_templates, function (templateArgs, id) {
        _this2.addGlobalWidget(id, templateArgs);
      });

      elementor.hooks.addFilter('panel/elements/regionViews', function (regionViews) {
        _.extend(regionViews.global, {
          view: __webpack_require__(51),
          options: {
            collection: _this2.panelWidgets
          }
        });

        return regionViews;
      });
    }
  }, {
    key: "addPanelPage",
    value: function addPanelPage() {
      elementor.getPanelView().addPage('globalWidget', {
        view: __webpack_require__(53)
      });
    }
  }, {
    key: "getGlobalModels",
    value: function getGlobalModels(id) {
      if (!id) {
        return this.globalModels;
      }

      return this.globalModels[id];
    }
  }, {
    key: "saveTemplates",
    value: function saveTemplates() {
      if (!Object.keys(this.globalModels).length) {
        return;
      }

      var templatesData = [];

      _.each(this.globalModels, function (templateModel, id) {
        if ('loaded' !== templateModel.get('settingsLoadedStatus')) {
          return;
        }

        var data = {
          content: JSON.stringify([templateModel.toJSON({
            remove: ['default']
          })]),
          source: 'local',
          type: 'widget',
          id: id
        };
        templatesData.push(data);
      });

      if (!templatesData.length) {
        return;
      }

      elementorCommon.ajax.addRequest('update_templates', {
        data: {
          templates: templatesData
        },
        success: function success() {
          this.templatesAreSaved = true;
        }
      });
    }
  }, {
    key: "requestGlobalModelSettings",
    value: function requestGlobalModelSettings(globalModel, callback) {
      elementor.templates.requestTemplateContent('local', globalModel.get('id'), {
        success: function success(data) {
          globalModel.set('settingsLoadedStatus', 'loaded').trigger('settings:loaded');
          var settings = data.content[0].settings,
              settingsModel = globalModel.get('settings');
          settingsModel.handleRepeaterData(settings);
          settingsModel.set(settings);

          if (callback) {
            callback(globalModel);
          }
        }
      });
    }
  }, {
    key: "setWidgetContextMenuSaveAction",
    value: function setWidgetContextMenuSaveAction() {
      elementor.hooks.addFilter('elements/widget/contextMenuGroups', function (groups, widget) {
        var saveGroup = _.findWhere(groups, {
          name: 'save'
        });

        if (!saveGroup) {
          return groups;
        }

        var saveAction = _.findWhere(saveGroup.actions, {
          name: 'save'
        });

        saveAction.callback = widget.save.bind(widget);
        delete saveAction.shortcut;
        return groups;
      });
    }
  }, {
    key: "onElementorInit",
    value: function onElementorInit() {
      var _this3 = this;

      this.registerTemplateType();
      this.setWidgetContextMenuSaveAction();
      elementor.on('panel:init', function () {
        _this3.addSavedWidgetsToPanel(); // setWidgetType depends on addSavedWidgetsToPanel.


        _this3.setWidgetType();
      });
    }
  }, {
    key: "onElementorPreviewLoaded",
    value: function onElementorPreviewLoaded(isFirst) {
      if (!isFirst) {
        return;
      }

      this.addPanelPage();
      $e.routes.register('panel/editor', 'global', function (args) {
        elementor.getPanelView().setPage('globalWidget', 'Global Editing', {
          editedView: args.view
        });
      });
    }
  }, {
    key: "onElementorInitComponents",
    value: function onElementorInitComponents() {
      $e.components.register(new _component.default({
        manager: this
      }));
    }
  }, {
    key: "onWidgetTemplateSaved",
    value: function onWidgetTemplateSaved(data) {
      elementor.templates.layout.hideModal();
      var container = $e.components.get('document').utils.findContainerById(elementor.templates.layout.modalContent.currentView.model.id);
      $e.run('document/global/link', {
        container: container,
        data: data
      });
    }
  }]);
  return Module;
}(elementorModules.editor.utils.Module);

exports.default = Module;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(14);

var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var commands = _interopRequireWildcard(__webpack_require__(43));

var hooks = _interopRequireWildcard(__webpack_require__(46));

var Component = /*#__PURE__*/function (_$e$modules$Component) {
  (0, _inherits2.default)(Component, _$e$modules$Component);

  function Component() {
    (0, _classCallCheck2.default)(this, Component);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Component).apply(this, arguments));
  }

  (0, _createClass2.default)(Component, [{
    key: "getNamespace",
    value: function getNamespace() {
      return 'document/global';
    }
  }, {
    key: "defaultCommands",
    value: function defaultCommands() {
      return this.importCommands(commands);
    }
  }, {
    key: "defaultHooks",
    value: function defaultHooks() {
      return this.importHooks(hooks);
    }
  }]);
  return Component;
}($e.modules.ComponentBase);

exports.default = Component;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Link", {
  enumerable: true,
  get: function get() {
    return _link.Link;
  }
});
Object.defineProperty(exports, "Unlink", {
  enumerable: true,
  get: function get() {
    return _unlink.Unlink;
  }
});

var _link = __webpack_require__(44);

var _unlink = __webpack_require__(45);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Link = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var Link = /*#__PURE__*/function (_$e$modules$document$) {
  (0, _inherits2.default)(Link, _$e$modules$document$);

  function Link() {
    (0, _classCallCheck2.default)(this, Link);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments));
  }

  (0, _createClass2.default)(Link, [{
    key: "validateArgs",
    value: function validateArgs(args) {
      this.requireContainer(args);
      this.requireArgumentConstructor('data', Object, args);
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      containers.forEach(function (
      /* Container */
      container) {
        if ('global' === container.model.get('widgetType')) {
          throw Error("Invalid container, id: '".concat(container.id, "' is already global."));
        }
      });
    }
  }, {
    key: "getHistory",
    value: function getHistory(args) {
      var data = args.data;
      return {
        title: elementor.widgetsCache[data.widgetType].title,
        subTitle: data.title,
        type: elementorPro.translate('linked_to_global')
      };
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var data = args.data,
          _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2;
      containers.forEach(function (
      /** Container */
      container) {
        var widgetModel = container.model,
            widgetModelIndex = widgetModel.collection.indexOf(widgetModel);
        data.elType = data.type;
        data.settings = widgetModel.get('settings').attributes;
        var globalModel = elementorPro.modules.globalWidget.addGlobalWidget(data.template_id, data),
            globalModelAttributes = globalModel.attributes;
        $e.run('document/elements/create', {
          container: container.parent,
          model: {
            id: elementor.helpers.getUniqueID(),
            elType: globalModelAttributes.type,
            templateID: globalModelAttributes.template_id,
            widgetType: 'global'
          },
          options: {
            at: widgetModelIndex
          }
        });
        $e.run('document/elements/delete', {
          container: container
        });
      });
      $e.route('panel/elements/global');
    }
  }]);
  return Link;
}($e.modules.document.CommandHistoryBase);

exports.Link = Link;
var _default = Link;
exports.default = _default;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Unlink = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var Unlink = /*#__PURE__*/function (_$e$modules$document$) {
  (0, _inherits2.default)(Unlink, _$e$modules$document$);

  function Unlink() {
    (0, _classCallCheck2.default)(this, Unlink);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Unlink).apply(this, arguments));
  }

  (0, _createClass2.default)(Unlink, [{
    key: "validateArgs",
    value: function validateArgs(args) {
      this.requireContainer(args);
    }
  }, {
    key: "getHistory",
    value: function getHistory(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      return {
        title: elementor.helpers.getModelLabel(containers[0].model),
        // TODO: add support multi containers.
        type: elementorPro.translate('unlink_widget')
      };
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2;
      containers.forEach(function (
      /** Container */
      container) {
        var globalModel = elementorPro.modules.globalWidget.getGlobalModels(container.model.get('templateID'));
        $e.run('document/elements/create', {
          container: container.parent,
          model: {
            id: elementor.helpers.getUniqueID(),
            elType: 'widget',
            widgetType: globalModel.get('widgetType'),
            settings: elementorCommon.helpers.cloneObject(globalModel.get('settings').attributes),
            defaultEditSettings: elementorCommon.helpers.cloneObject(globalModel.get('editSettings').attributes)
          },
          options: {
            at: container.model.collection.indexOf(container.model),
            edit: true
          }
        });
        $e.run('document/elements/delete', {
          container: container
        });
      });
    }
  }]);
  return Unlink;
}($e.modules.document.CommandHistoryBase);

exports.Unlink = Unlink;
var _default = Unlink;
exports.default = _default;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _data = __webpack_require__(47);

Object.keys(_data).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _data[key];
    }
  });
});

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "GlobalWidgetSave", {
  enumerable: true,
  get: function get() {
    return _save.GlobalWidgetSave;
  }
});

var _save = __webpack_require__(48);

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.GlobalWidgetSave = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var GlobalWidgetSave = /*#__PURE__*/function (_$e$modules$hookData$) {
  (0, _inherits2.default)(GlobalWidgetSave, _$e$modules$hookData$);

  function GlobalWidgetSave() {
    (0, _classCallCheck2.default)(this, GlobalWidgetSave);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(GlobalWidgetSave).apply(this, arguments));
  }

  (0, _createClass2.default)(GlobalWidgetSave, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/save/save';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'elementor-pro-global-widget-save';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      var _args$document = args.document,
          document = _args$document === void 0 ? elementor.documents.getCurrent() : _args$document;
      return document.config.panel.has_elements && args.status && -1 !== ['private', 'publish'].indexOf(args.status);
    }
  }, {
    key: "apply",
    value: function apply() {
      elementorPro.modules.globalWidget.saveTemplates();
    }
  }]);
  return GlobalWidgetSave;
}($e.modules.hookData.After);

exports.GlobalWidgetSave = GlobalWidgetSave;
var _default = GlobalWidgetSave;
exports.default = _default;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var WidgetView = elementor.modules.elements.views.Widget,
    GlobalWidgetView;
GlobalWidgetView = WidgetView.extend({
  globalModel: null,
  className: function className() {
    return WidgetView.prototype.className.apply(this, arguments) + ' elementor-global-widget elementor-global-' + this.model.get('templateID');
  },
  initialize: function initialize() {
    var self = this,
        previewSettings = self.model.get('previewSettings'),
        globalModel = self.getGlobalModel();

    if (previewSettings) {
      globalModel.set('settingsLoadedStatus', 'loaded').trigger('settings:loaded');
      var settingsModel = globalModel.get('settings');
      settingsModel.handleRepeaterData(previewSettings);
      settingsModel.set(previewSettings, {
        silent: true
      });
    } else {
      var globalSettingsLoadedStatus = globalModel.get('settingsLoadedStatus');

      if (!globalSettingsLoadedStatus) {
        globalModel.set('settingsLoadedStatus', 'pending');
        elementorPro.modules.globalWidget.requestGlobalModelSettings(globalModel);
      }

      if ('loaded' !== globalSettingsLoadedStatus) {
        self.$el.addClass('elementor-loading');
      }

      globalModel.on('settings:loaded', function () {
        self.$el.removeClass('elementor-loading');
        self.render();
      });
    }

    WidgetView.prototype.initialize.apply(self, arguments);
  },
  getGlobalModel: function getGlobalModel() {
    if (!this.globalModel) {
      this.globalModel = elementorPro.modules.globalWidget.getGlobalModels(this.model.get('templateID'));
    }

    return this.globalModel;
  },
  getEditModel: function getEditModel() {
    return this.getGlobalModel();
  },
  getHTMLContent: function getHTMLContent(html) {
    if ('loaded' === this.getGlobalModel().get('settingsLoadedStatus')) {
      return WidgetView.prototype.getHTMLContent.call(this, html);
    }

    return '';
  },
  serializeModel: function serializeModel() {
    var globalModel = this.getGlobalModel();
    return globalModel.toJSON.apply(globalModel, _.rest(arguments));
  },
  unlink: function unlink() {
    $e.run('document/global/unlink', {
      container: this.getContainer()
    });
  },
  onEditRequest: function onEditRequest() {
    $e.route('panel/editor/global', {
      view: this
    });
  }
});
module.exports = GlobalWidgetView;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elementor.modules.elements.models.Element.extend({
  initialize: function initialize() {
    this.set({
      widgetType: 'global'
    }, {
      silent: true
    });
    elementor.modules.elements.models.Element.prototype.initialize.apply(this, arguments);
    elementorFrontend.config.elements.data[this.cid].on('change', this.onSettingsChange.bind(this));
  },
  initSettings: function initSettings() {
    var globalModel = this.getGlobalModel(),
        settingsModel = globalModel.get('settings');
    this.set('settings', settingsModel);
    elementorFrontend.config.elements.data[this.cid] = settingsModel;
    elementorFrontend.config.elements.editSettings[this.cid] = globalModel.get('editSettings');
  },
  initEditSettings: function initEditSettings() {
    var editSettings = new Backbone.Model(this.get('defaultEditSettings'));
    this.set('editSettings', editSettings); // Set default edit tab.

    this.get('editSettings').set('editTab', 'global');
  },
  getGlobalModel: function getGlobalModel() {
    var templateID = this.get('templateID');
    return elementorPro.modules.globalWidget.getGlobalModels(templateID);
  },
  getTitle: function getTitle() {
    var title = this.getSetting('_title');

    if (!title) {
      title = this.getGlobalModel().get('title');
    }

    var global = elementorPro.translate('global');
    title = title.replace(new RegExp('\\(' + global + '\\)$'), '');
    return title + ' (' + global + ')';
  },
  getIcon: function getIcon() {
    return this.getGlobalModel().getIcon();
  },
  onSettingsChange: function onSettingsChange(model) {
    if (!model.changed.elements) {
      this.set('previewSettings', model.toJSON({
        remove: ['default']
      }), {
        silent: true
      });
    }
  },
  onDestroy: function onDestroy() {
    // Can be also 'panel/editor/global'.
    if ($e.routes.isPartOf('panel/editor')) {
      $e.route('panel/elements/categories');
    }
  }
});

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elementor.modules.layouts.panel.pages.elements.views.Elements.extend({
  id: 'elementor-global-templates',
  getEmptyView: function getEmptyView() {
    if (this.collection.length) {
      return null;
    }

    return __webpack_require__(52);
  },
  onFilterEmpty: function onFilterEmpty() {}
});

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GlobalWidgetsView = elementor.modules.layouts.panel.pages.elements.views.Global;
module.exports = GlobalWidgetsView.extend({
  template: '#tmpl-elementor-panel-global-widget-no-templates',
  id: 'elementor-panel-global-widget-no-templates',
  className: 'elementor-nerd-box elementor-panel-nerd-box'
});

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Marionette.ItemView.extend({
  id: 'elementor-panel-global-widget',
  template: '#tmpl-elementor-panel-global-widget',
  ui: {
    editButton: '#elementor-global-widget-locked-edit .elementor-button',
    unlinkButton: '#elementor-global-widget-locked-unlink .elementor-button',
    loading: '#elementor-global-widget-loading'
  },
  events: {
    'click @ui.editButton': 'onEditButtonClick',
    'click @ui.unlinkButton': 'onUnlinkButtonClick'
  },
  initialize: function initialize() {
    this.initUnlinkDialog();
  },
  buildUnlinkDialog: function buildUnlinkDialog() {
    var self = this;
    return elementorCommon.dialogsManager.createWidget('confirm', {
      id: 'elementor-global-widget-unlink-dialog',
      headerMessage: elementorPro.translate('unlink_widget'),
      message: elementorPro.translate('dialog_confirm_unlink'),
      position: {
        my: 'center center',
        at: 'center center'
      },
      strings: {
        confirm: elementorPro.translate('unlink'),
        cancel: elementorPro.translate('cancel')
      },
      onConfirm: function onConfirm() {
        self.getOption('editedView').unlink();
      }
    });
  },
  initUnlinkDialog: function initUnlinkDialog() {
    var dialog;

    this.getUnlinkDialog = function () {
      if (!dialog) {
        dialog = this.buildUnlinkDialog();
      }

      return dialog;
    };
  },
  editGlobalModel: function editGlobalModel() {
    var editedView = this.getOption('editedView');
    $e.run('panel/editor/open', {
      model: editedView.getEditModel(),
      view: editedView
    });
  },
  onEditButtonClick: function onEditButtonClick() {
    var self = this,
        editedView = self.getOption('editedView'),
        editedModel = editedView.getEditModel();

    if ('loaded' === editedModel.get('settingsLoadedStatus')) {
      self.editGlobalModel();
      return;
    }

    self.ui.loading.removeClass('elementor-hidden');
    elementorPro.modules.globalWidget.requestGlobalModelSettings(editedModel, function () {
      self.ui.loading.addClass('elementor-hidden');
      self.editGlobalModel();
    });
  },
  onUnlinkButtonClick: function onUnlinkButtonClick() {
    this.getUnlinkDialog().show();
  }
});

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _get3 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _component = _interopRequireDefault(__webpack_require__(55));

var ThemeBuilderModule = /*#__PURE__*/function (_elementorModules$edi) {
  (0, _inherits2.default)(ThemeBuilderModule, _elementorModules$edi);

  function ThemeBuilderModule() {
    (0, _classCallCheck2.default)(this, ThemeBuilderModule);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ThemeBuilderModule).apply(this, arguments));
  }

  (0, _createClass2.default)(ThemeBuilderModule, [{
    key: "__construct",
    value: function __construct() {
      var _get2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_get2 = (0, _get3.default)((0, _getPrototypeOf2.default)(ThemeBuilderModule.prototype), "__construct", this)).call.apply(_get2, [this].concat(args));

      Object.defineProperty(elementorPro.config, 'theme_builder', {
        get: function get() {
          elementorCommon.helpers.softDeprecated('theme_builder', '2.9.0', 'elementor.config.document.theme_builder');
          return elementor.config.document.theme_builder;
        }
      });
    }
  }, {
    key: "onElementorLoaded",
    value: function onElementorLoaded() {
      this.component = $e.components.register(new _component.default({
        manager: this
      }));
      elementor.on('document:loaded', this.onDocumentLoaded.bind(this));
      elementor.on('document:unload', this.onDocumentUnloaded.bind(this));
      this.onApplyPreview = this.onApplyPreview.bind(this);
      this.onSectionPreviewSettingsActive = this.onSectionPreviewSettingsActive.bind(this);
    }
  }, {
    key: "onDocumentLoaded",
    value: function onDocumentLoaded(document) {
      if (!document.config.theme_builder) {
        return;
      }

      elementor.getPanelView().on('set:page:page_settings', this.updatePreviewIdOptions);
      elementor.channels.editor.on('elementorThemeBuilder:ApplyPreview', this.onApplyPreview);
      elementor.channels.editor.on('page_settings:preview_settings:activated', this.onSectionPreviewSettingsActive);
    }
  }, {
    key: "onDocumentUnloaded",
    value: function onDocumentUnloaded(document) {
      if (!document.config.theme_builder) {
        return;
      }

      elementor.getPanelView().off('set:page:page_settings', this.updatePreviewIdOptions);
      elementor.channels.editor.off('elementorThemeBuilder:ApplyPreview', this.onApplyPreview);
      elementor.channels.editor.off('page_settings:preview_settings:activated', this.onSectionPreviewSettingsActive);
    }
  }, {
    key: "saveAndReload",
    value: function saveAndReload() {
      $e.run('document/save/auto', {
        force: true,
        onSuccess: function onSuccess() {
          elementor.dynamicTags.cleanCache();
          elementor.reloadPreview();
        }
      });
    }
  }, {
    key: "onApplyPreview",
    value: function onApplyPreview() {
      this.saveAndReload();
    }
  }, {
    key: "onSectionPreviewSettingsActive",
    value: function onSectionPreviewSettingsActive() {
      this.updatePreviewIdOptions(true);
    }
  }, {
    key: "updatePreviewIdOptions",
    value: function updatePreviewIdOptions(render) {
      var previewType = elementor.settings.page.model.get('preview_type');

      if (!previewType) {
        return;
      }

      previewType = previewType.split('/');
      var currentView = elementor.getPanelView().getCurrentPageView(),
          controlModel = currentView.collection.findWhere({
        name: 'preview_id'
      });

      if ('author' === previewType[1]) {
        controlModel.set({
          autocomplete: {
            object: 'author'
          }
        });
      } else if ('taxonomy' === previewType[0]) {
        controlModel.set({
          autocomplete: {
            object: 'tax',
            query: {
              taxonomy: previewType[1]
            }
          }
        });
      } else if ('single' === previewType[0]) {
        controlModel.set({
          autocomplete: {
            object: 'post',
            query: {
              post_type: previewType[1]
            }
          }
        });
      } else {
        controlModel.set({
          autocomplete: {
            object: ''
          }
        });
      }

      if (true === render) {
        // Can be model.
        var controlView = currentView.children.findByModel(controlModel);
        controlView.render();
        controlView.$el.toggle(!!controlModel.get('autocomplete').object);
      }
    }
  }]);
  return ThemeBuilderModule;
}(elementorModules.editor.utils.Module);

exports.default = ThemeBuilderModule;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(14);

var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _get2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _content = _interopRequireDefault(__webpack_require__(56));

var _layout = _interopRequireDefault(__webpack_require__(57));

var hooks = _interopRequireWildcard(__webpack_require__(58));

var Component = /*#__PURE__*/function (_$e$modules$Component) {
  (0, _inherits2.default)(Component, _$e$modules$Component);

  function Component() {
    (0, _classCallCheck2.default)(this, Component);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Component).apply(this, arguments));
  }

  (0, _createClass2.default)(Component, [{
    key: "getNamespace",
    value: function getNamespace() {
      // TODO: should be 'theme-builder/publish'.
      return 'theme-builder-publish';
    }
  }, {
    key: "getModalLayout",
    value: function getModalLayout() {
      return _layout.default;
    }
  }, {
    key: "defaultCommands",
    value: function defaultCommands() {
      var _this = this;

      return {
        next: function next() {
          var tabs = Object.keys(_this.tabs),
              next = tabs[_this.currentTabIndex + 1];

          if (next) {
            $e.route(_this.getTabRoute(next));
          }
        },
        save: function save() {
          $e.run('document/save/default', {
            force: true
          });

          _this.layout.hideModal();
        },
        'preview-settings': function previewSettings() {
          // TODO: This is function is not part of this component.
          var panel = elementor.getPanelView();
          $e.route('panel/page-settings/settings');

          panel.getCurrentPageView().activateSection('preview_settings')._renderChildren();
        }
      };
    }
  }, {
    key: "defaultHooks",
    value: function defaultHooks() {
      return this.importHooks(hooks);
    }
  }, {
    key: "getTabsWrapperSelector",
    value: function getTabsWrapperSelector() {
      return '#elementor-publish__tabs';
    }
  }, {
    key: "renderTab",
    value: function renderTab(tab) {
      var tabs = this.getTabs(),
          keys = Object.keys(tabs),
          tabArgs = tabs[tab];
      this.currentTabIndex = keys.indexOf(tab);
      var isLastTab = !keys[this.currentTabIndex + 1];
      this.layout.modalContent.currentView.screen.show(new tabArgs.View(tabArgs.viewOptions));
      this.layout.modal.getElements('next').toggle(!isLastTab);
      this.layout.modal.getElements('publish').toggleClass('elementor-button-success', isLastTab);
    }
  }, {
    key: "activateTab",
    value: function activateTab(tab) {
      $e.routes.saveState(this.getNamespace());
      (0, _get2.default)((0, _getPrototypeOf2.default)(Component.prototype), "activateTab", this).call(this, tab);
    }
  }, {
    key: "open",
    value: function open() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(Component.prototype), "open", this).call(this);

      if (!this.layoutContent) {
        this.layout.showLogo();
        this.layout.modalContent.show(new _content.default({
          component: this
        }));
        this.layoutContent = true;
      }

      return true;
    }
  }]);
  return Component;
}($e.modules.ComponentModalBase);

exports.default = Component;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _default = /*#__PURE__*/function (_Marionette$LayoutVie) {
  (0, _inherits2.default)(_default, _Marionette$LayoutVie);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_default).apply(this, arguments));
  }

  (0, _createClass2.default)(_default, [{
    key: "id",
    value: function id() {
      return 'elementor-publish';
    }
  }, {
    key: "getTemplate",
    value: function getTemplate() {
      return Marionette.TemplateCache.get('#tmpl-elementor-component-publish');
    }
  }, {
    key: "regions",
    value: function regions() {
      return {
        screen: '#elementor-publish__screen'
      };
    }
  }, {
    key: "templateHelpers",
    value: function templateHelpers() {
      return {
        tabs: this.getOption('component').getTabs()
      };
    }
  }]);
  return _default;
}(Marionette.LayoutView);

exports.default = _default;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _get2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _default = /*#__PURE__*/function (_elementorModules$com) {
  (0, _inherits2.default)(_default, _elementorModules$com);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_default).apply(this, arguments));
  }

  (0, _createClass2.default)(_default, [{
    key: "getModalOptions",
    value: function getModalOptions() {
      return {
        id: 'elementor-publish__modal',
        hide: {
          onButtonClick: false
        }
      };
    }
  }, {
    key: "getLogoOptions",
    value: function getLogoOptions() {
      return {
        title: elementorPro.translate('publish_settings')
      };
    }
  }, {
    key: "initModal",
    value: function initModal() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(_default.prototype), "initModal", this).call(this);
      this.modal.addButton({
        name: 'publish',
        text: elementorPro.translate('save_and_close'),
        callback: function callback() {
          return $e.run('theme-builder-publish/save');
        }
      });
      this.modal.addButton({
        name: 'next',
        text: elementorPro.translate('next'),
        callback: function callback() {
          return $e.run('theme-builder-publish/next');
        }
      });
      var $publishButton = this.modal.getElements('publish');
      this.modal.getElements('next').addClass('elementor-button-success').add($publishButton).addClass('elementor-button').removeClass('dialog-button');
    }
  }]);
  return _default;
}(elementorModules.common.views.modal.Layout);

exports.default = _default;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _data = __webpack_require__(59);

Object.keys(_data).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _data[key];
    }
  });
});

var _ui = __webpack_require__(66);

Object.keys(_ui).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ui[key];
    }
  });
});

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  ThemeBuilderSaveConditions: true,
  ThemeBuilderShowConditions: true,
  ThemeBuilderPreviewBreak: true
};
Object.defineProperty(exports, "ThemeBuilderSaveConditions", {
  enumerable: true,
  get: function get() {
    return _saveConditions.ThemeBuilderSaveConditions;
  }
});
Object.defineProperty(exports, "ThemeBuilderShowConditions", {
  enumerable: true,
  get: function get() {
    return _showConditions.ThemeBuilderShowConditions;
  }
});
Object.defineProperty(exports, "ThemeBuilderPreviewBreak", {
  enumerable: true,
  get: function get() {
    return _previewBreak.ThemeBuilderPreviewBreak;
  }
});

var _settings = __webpack_require__(60);

Object.keys(_settings).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _settings[key];
    }
  });
});

var _saveConditions = __webpack_require__(63);

var _showConditions = __webpack_require__(64);

var _previewBreak = __webpack_require__(65);

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ThemeBuilderSaveAndReload", {
  enumerable: true,
  get: function get() {
    return _saveAndReload.ThemeBuilderSaveAndReload;
  }
});
Object.defineProperty(exports, "ThemeBuilderUpdatePreviewOptions", {
  enumerable: true,
  get: function get() {
    return _updatePreviewOptions.ThemeBuilderUpdatePreviewOptions;
  }
});

var _saveAndReload = __webpack_require__(61);

var _updatePreviewOptions = __webpack_require__(62);

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ThemeBuilderSaveAndReload = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

/**
 * Hook fired when template: 'single' page layout changed.
 */
var ThemeBuilderSaveAndReload = /*#__PURE__*/function (_$e$modules$hookData$) {
  (0, _inherits2.default)(ThemeBuilderSaveAndReload, _$e$modules$hookData$);

  function ThemeBuilderSaveAndReload() {
    (0, _classCallCheck2.default)(this, ThemeBuilderSaveAndReload);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ThemeBuilderSaveAndReload).apply(this, arguments));
  }

  (0, _createClass2.default)(ThemeBuilderSaveAndReload, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/settings';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'elementor-pro-theme-builder-save-and-reload';
    }
  }, {
    key: "getContainerType",
    value: function getContainerType() {
      return 'document';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      return args.settings && args.settings.page_template;
    }
  }, {
    key: "apply",
    value: function apply() {
      $e.run('document/save/auto', {
        force: true,
        onSuccess: function onSuccess() {
          elementor.reloadPreview();
          elementor.once('preview:loaded', function () {
            $e.route('panel/page-settings/settings');
          });
        }
      });
    }
  }]);
  return ThemeBuilderSaveAndReload;
}($e.modules.hookData.After);

exports.ThemeBuilderSaveAndReload = ThemeBuilderSaveAndReload;
var _default = ThemeBuilderSaveAndReload;
exports.default = _default;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ThemeBuilderUpdatePreviewOptions = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var ThemeBuilderUpdatePreviewOptions = /*#__PURE__*/function (_$e$modules$hookData$) {
  (0, _inherits2.default)(ThemeBuilderUpdatePreviewOptions, _$e$modules$hookData$);

  function ThemeBuilderUpdatePreviewOptions() {
    (0, _classCallCheck2.default)(this, ThemeBuilderUpdatePreviewOptions);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ThemeBuilderUpdatePreviewOptions).apply(this, arguments));
  }

  (0, _createClass2.default)(ThemeBuilderUpdatePreviewOptions, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/settings';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'elementor-pro-theme-builder-update-preview-options';
    }
  }, {
    key: "getContainerType",
    value: function getContainerType() {
      return 'document';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      return args.settings && args.settings.preview_type;
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers,
          themeBuilder = elementorPro.modules.themeBuilder;
      $e.run('document/elements/settings', {
        containers: containers,
        settings: {
          preview_id: '',
          preview_search_term: ''
        }
      });

      if ($e.routes.is('panel/page-settings/settings')) {
        themeBuilder.updatePreviewIdOptions(true);
      }
    }
  }]);
  return ThemeBuilderUpdatePreviewOptions;
}($e.modules.hookData.After);

exports.ThemeBuilderUpdatePreviewOptions = ThemeBuilderUpdatePreviewOptions;
var _default = ThemeBuilderUpdatePreviewOptions;
exports.default = _default;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ThemeBuilderSaveConditions = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var ThemeBuilderSaveConditions = /*#__PURE__*/function (_$e$modules$hookData$) {
  (0, _inherits2.default)(ThemeBuilderSaveConditions, _$e$modules$hookData$);

  function ThemeBuilderSaveConditions() {
    (0, _classCallCheck2.default)(this, ThemeBuilderSaveConditions);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ThemeBuilderSaveConditions).apply(this, arguments));
  }

  (0, _createClass2.default)(ThemeBuilderSaveConditions, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/save/save';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'elementor-pro-theme-builder-save-conditions';
    }
  }, {
    key: "getConditions",
    value: function getConditions() {
      return !!elementor.config.document.theme_builder;
    }
  }, {
    key: "apply",
    value: function apply() {
      var conditionsModel = elementorPro.modules.themeBuilder.conditionsModel;
      elementorPro.ajax.addRequest('theme_builder_save_conditions', {
        data: conditionsModel.toJSON({
          remove: ['default']
        }),
        success: function success() {
          elementor.config.document.theme_builder.settings.conditions = conditionsModel.get('conditions');
        }
      });
    }
  }]);
  return ThemeBuilderSaveConditions;
}($e.modules.hookData.After);

exports.ThemeBuilderSaveConditions = ThemeBuilderSaveConditions;
var _default = ThemeBuilderSaveConditions;
exports.default = _default;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ThemeBuilderShowConditions = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var ThemeBuilderShowConditions = /*#__PURE__*/function (_$e$modules$hookData$) {
  (0, _inherits2.default)(ThemeBuilderShowConditions, _$e$modules$hookData$);

  function ThemeBuilderShowConditions() {
    (0, _classCallCheck2.default)(this, ThemeBuilderShowConditions);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ThemeBuilderShowConditions).apply(this, arguments));
  }

  (0, _createClass2.default)(ThemeBuilderShowConditions, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/save/default';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'elementor-pro-theme-builder-show-conditions';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      var _args$force = args.force,
          force = _args$force === void 0 ? false : _args$force; // If force save, do not show conditions.

      if (force) {
        return false;
      }

      var showConditions = false;
      var themeBuilder = elementor.config.document.theme_builder;

      if (themeBuilder) {
        var hasConditions = themeBuilder.settings.conditions.length,
            hasLocation = themeBuilder.settings.location,
            isDraft = 'draft' === elementor.settings.page.model.get('post_status');

        if (hasLocation && (!hasConditions || isDraft)) {
          showConditions = true;
        }
      }

      return showConditions;
    }
  }, {
    key: "apply",
    value: function apply() {
      $e.route('theme-builder-publish/conditions');
      return false; // HookBreak.
    }
  }]);
  return ThemeBuilderShowConditions;
}($e.modules.hookData.Dependency);

exports.ThemeBuilderShowConditions = ThemeBuilderShowConditions;
var _default = ThemeBuilderShowConditions;
exports.default = _default;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ThemeBuilderPreviewBreak = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var ThemeBuilderPreviewBreak = /*#__PURE__*/function (_$e$modules$hookData$) {
  (0, _inherits2.default)(ThemeBuilderPreviewBreak, _$e$modules$hookData$);

  function ThemeBuilderPreviewBreak() {
    (0, _classCallCheck2.default)(this, ThemeBuilderPreviewBreak);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ThemeBuilderPreviewBreak).apply(this, arguments));
  }

  (0, _createClass2.default)(ThemeBuilderPreviewBreak, [{
    key: "getCommand",
    value: function getCommand() {
      return 'editor/documents/preview';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'elementor-pro-theme-builder-preview-break';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      // If preview is forced, do not break it.
      if (args.force) {
        return false;
      }

      return !!elementor.documents.get(args.id).config.theme_builder;
    }
  }, {
    key: "apply",
    value: function apply() {
      return false; // HookBreak.
    }
  }]);
  return ThemeBuilderPreviewBreak;
}($e.modules.hookData.Dependency);

exports.ThemeBuilderPreviewBreak = ThemeBuilderPreviewBreak;
var _default = ThemeBuilderPreviewBreak;
exports.default = _default;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ThemeBuilderAddEditorUI", {
  enumerable: true,
  get: function get() {
    return _addEditorUi.ThemeBuilderAddEditorUI;
  }
});
Object.defineProperty(exports, "ThemeBuilderRemoveEditorUI", {
  enumerable: true,
  get: function get() {
    return _removeEditorUi.ThemeBuilderRemoveEditorUI;
  }
});
Object.defineProperty(exports, "ThemeBuilderToggleMenuConditions", {
  enumerable: true,
  get: function get() {
    return _toggleMenuConditions.ThemeBuilderToggleMenuConditions;
  }
});

var _addEditorUi = __webpack_require__(67);

var _removeEditorUi = __webpack_require__(72);

var _toggleMenuConditions = __webpack_require__(73);

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ThemeBuilderAddEditorUI = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _view = _interopRequireDefault(__webpack_require__(68));

var ThemeBuilderAddEditorUI = /*#__PURE__*/function (_$e$modules$hookUI$Af) {
  (0, _inherits2.default)(ThemeBuilderAddEditorUI, _$e$modules$hookUI$Af);

  function ThemeBuilderAddEditorUI() {
    (0, _classCallCheck2.default)(this, ThemeBuilderAddEditorUI);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ThemeBuilderAddEditorUI).apply(this, arguments));
  }

  (0, _createClass2.default)(ThemeBuilderAddEditorUI, [{
    key: "getCommand",
    value: function getCommand() {
      return 'editor/documents/open';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'elementor-pro-theme-builder-add-editor-ui';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      return elementor.documents.get(args.id).config.theme_builder;
    }
  }, {
    key: "apply",
    value: function apply() {
      if (elementor.panel) {
        this.addUI();
      } else {
        // First open, the panel is not available yet.
        elementor.once('preview:loaded', this.addUI.bind(this));
      }
    }
  }, {
    key: "addUI",
    value: function addUI() {
      this.addRepeaterControlView();
      this.addPanelFooterSubmenuItems();
      this.addPublishTabs();
    }
  }, {
    key: "addRepeaterControlView",
    value: function addRepeaterControlView() {
      elementor.addControlView('Conditions_repeater', __webpack_require__(70));
    }
  }, {
    key: "addPublishTabs",
    value: function addPublishTabs() {
      var component = $e.components.get('theme-builder-publish'),
          themeBuilderModuleConfig = elementor.config.document.theme_builder,
          settings = themeBuilderModuleConfig.settings;
      component.manager.conditionsModel = new elementorModules.editor.elements.models.BaseSettings(settings, {
        controls: themeBuilderModuleConfig.template_conditions.controls
      });
      component.addTab('conditions', {
        title: elementorPro.translate('conditions'),
        View: _view.default,
        viewOptions: {
          model: component.manager.conditionsModel,
          controls: component.manager.conditionsModel.controls
        },
        name: 'conditions',
        description: elementorPro.translate('conditions_publish_screen_description'),
        image: elementorPro.config.urls.modules + 'theme-builder/assets/images/conditions-tab.svg'
      });
    }
  }, {
    key: "addPanelFooterSubmenuItems",
    value: function addPanelFooterSubmenuItems() {
      var footerView = elementor.getPanelView().footer.currentView,
          behavior = footerView._behaviors[Object.keys(footerView.behaviors()).indexOf('saver')];

      footerView.ui.menuConditions = footerView.addSubMenuItem('saver-options', {
        before: 'save-template',
        name: 'conditions',
        icon: 'eicon-flow',
        title: elementorPro.translate('display_conditions'),
        callback: function callback() {
          return $e.route('theme-builder-publish/conditions');
        }
      });
      footerView.ui.menuConditions.toggle(!!elementor.config.document.theme_builder.settings.location);
      behavior.ui.buttonPreview.tipsy('disable').html(jQuery('#tmpl-elementor-theme-builder-button-preview').html()).addClass('elementor-panel-footer-theme-builder-buttons-wrapper elementor-toggle-state');
    }
  }]);
  return ThemeBuilderAddEditorUI;
}($e.modules.hookUI.After);

exports.ThemeBuilderAddEditorUI = ThemeBuilderAddEditorUI;
var _default = ThemeBuilderAddEditorUI;
exports.default = _default;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inlineControlsStack = __webpack_require__(69);

module.exports = inlineControlsStack.extend({
  id: 'elementor-theme-builder-conditions-view',
  template: '#tmpl-elementor-theme-builder-conditions-view',
  childViewContainer: '#elementor-theme-builder-conditions-controls',
  childViewOptions: function childViewOptions() {
    return {
      elementSettingsModel: this.model
    };
  }
});

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elementorModules.editor.views.ControlsStack.extend({
  activeTab: 'content',
  activeSection: 'settings',
  initialize: function initialize() {
    this.collection = new Backbone.Collection(_.values(this.options.controls));
  },
  filter: function filter(model) {
    if ('section' === model.get('type')) {
      return true;
    }

    var section = model.get('section');
    return !section || section === this.activeSection;
  },
  childViewOptions: function childViewOptions() {
    return {
      elementSettingsModel: this.model
    };
  }
});

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _repeaterRow = _interopRequireDefault(__webpack_require__(71));

module.exports = elementor.modules.controls.Repeater.extend({
  childView: _repeaterRow.default,
  updateActiveRow: function updateActiveRow() {},
  initialize: function initialize() {
    elementor.modules.controls.Repeater.prototype.initialize.apply(this, arguments);
    this.config = elementor.config.document.theme_builder;
    this.updateConditionsOptions(this.config.settings.template_type);
  },
  checkConflicts: function checkConflicts(model) {
    var modelId = model.get('_id'),
        rowId = 'elementor-condition-id-' + modelId,
        errorMessageId = 'elementor-conditions-conflict-message-' + modelId,
        $error = jQuery('#' + errorMessageId); // On render - the row isn't exist, so don't cache it.

    jQuery('#' + rowId).removeClass('elementor-error');
    $error.remove();
    elementorPro.ajax.addRequest('theme_builder_conditions_check_conflicts', {
      unique_id: rowId,
      data: {
        condition: model.toJSON({
          remove: ['default']
        })
      },
      success: function success(data) {
        if (!_.isEmpty(data)) {
          jQuery('#' + rowId).addClass('elementor-error').after('<div id="' + errorMessageId + '" class="elementor-conditions-conflict-message">' + data + '</div>');
        }
      }
    });
  },
  updateConditionsOptions: function updateConditionsOptions(templateType) {
    var self = this,
        conditionType = self.config.types[templateType].condition_type,
        options = {};

    _([conditionType]).each(function (conditionId, conditionIndex) {
      var conditionConfig = self.config.conditions[conditionId],
          group = {
        label: conditionConfig.label,
        options: {}
      };
      group.options[conditionId] = conditionConfig.all_label;

      _(conditionConfig.sub_conditions).each(function (subConditionId) {
        group.options[subConditionId] = self.config.conditions[subConditionId].label;
      });

      options[conditionIndex] = group;
    });

    var fields = this.model.get('fields');
    fields[1].default = conditionType;

    if ('general' === conditionType) {
      fields[1].groups = options;
    } else {
      fields[2].groups = options;
    }
  },
  onRender: function onRender() {
    this.ui.btnAddRow.text(elementorPro.translate('add_condition'));
    var self = this;
    this.collection.each(function (model) {
      self.checkConflicts(model);
    });
  },
  // Overwrite the original + checkConflicts.
  onRowControlChange: function onRowControlChange(model) {
    this.checkConflicts(model);
  }
});

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elementor.modules.controls.RepeaterRow.extend({
  template: '#tmpl-elementor-theme-builder-conditions-repeater-row',
  childViewContainer: '.elementor-theme-builder-conditions-repeater-row-controls',
  id: function id() {
    return 'elementor-condition-id-' + this.model.get('_id');
  },
  onBeforeRender: function onBeforeRender() {
    var subNameModel = this.collection.findWhere({
      name: 'sub_name'
    }),
        subIdModel = this.collection.findWhere({
      name: 'sub_id'
    }),
        subConditionConfig = this.config.conditions[this.model.attributes.sub_name];
    subNameModel.attributes.groups = this.getOptions();

    if (subConditionConfig && subConditionConfig.controls) {
      _(subConditionConfig.controls).each(function (control) {
        subIdModel.set(control);
        subIdModel.set('name', 'sub_id');
      });
    }
  },
  initialize: function initialize() {
    elementor.modules.controls.RepeaterRow.prototype.initialize.apply(this, arguments);
    this.config = elementor.config.document.theme_builder;
  },
  updateOptions: function updateOptions() {
    if (this.model.changed.name) {
      this.model.set({
        sub_name: '',
        sub_id: ''
      });
    }

    if (this.model.changed.name || this.model.changed.sub_name) {
      this.model.set('sub_id', '', {
        silent: true
      });
      var subIdModel = this.collection.findWhere({
        name: 'sub_id'
      });
      subIdModel.set({
        type: 'select',
        options: {
          '': 'All'
        }
      });
      this.render();
    }

    if (this.model.changed.type) {
      this.setTypeAttribute();
    }
  },
  getOptions: function getOptions() {
    var self = this,
        conditionConfig = self.config.conditions[this.model.get('name')];

    if (!conditionConfig) {
      return;
    }

    var options = {
      '': conditionConfig.all_label
    };

    _(conditionConfig.sub_conditions).each(function (conditionId, conditionIndex) {
      var subConditionConfig = self.config.conditions[conditionId],
          group;

      if (!subConditionConfig) {
        return;
      }

      if (subConditionConfig.sub_conditions.length) {
        group = {
          label: subConditionConfig.label,
          options: {}
        };
        group.options[conditionId] = subConditionConfig.all_label;

        _(subConditionConfig.sub_conditions).each(function (subConditionId) {
          group.options[subConditionId] = self.config.conditions[subConditionId].label;
        }); // Use a sting key - to keep order


        options['key' + conditionIndex] = group;
      } else {
        options[conditionId] = subConditionConfig.label;
      }
    });

    return options;
  },
  setTypeAttribute: function setTypeAttribute() {
    var typeView = this.children.findByModel(this.collection.findWhere({
      name: 'type'
    }));
    typeView.$el.attr('data-elementor-condition-type', typeView.getControlValue());
  },
  onRender: function onRender() {
    var nameModel = this.collection.findWhere({
      name: 'name'
    }),
        subNameModel = this.collection.findWhere({
      name: 'sub_name'
    }),
        subIdModel = this.collection.findWhere({
      name: 'sub_id'
    }),
        nameView = this.children.findByModel(nameModel),
        subNameView = this.children.findByModel(subNameModel),
        subIdView = this.children.findByModel(subIdModel),
        conditionConfig = this.config.conditions[this.model.attributes.name],
        subConditionConfig = this.config.conditions[this.model.attributes.sub_name],
        typeConfig = this.config.types[this.config.settings.template_type];

    if (typeConfig.condition_type === nameView.getControlValue() && 'general' !== nameView.getControlValue() && !_.isEmpty(conditionConfig.sub_conditions)) {
      nameView.$el.hide();
    }

    if (!conditionConfig || _.isEmpty(conditionConfig.sub_conditions) && _.isEmpty(conditionConfig.controls) || !nameView.getControlValue() || 'general' === nameView.getControlValue()) {
      subNameView.$el.hide();
    }

    if (!subConditionConfig || _.isEmpty(subConditionConfig.controls) || !subNameView.getControlValue()) {
      subIdView.$el.hide();
    } // Avoid set a `single` for a-l-l singular types. (conflicted with 404 & custom cpt like Shops and Events plugins).


    if ('singular' === typeConfig.condition_type) {
      if ('' === subNameView.getControlValue()) {
        subNameView.setValue('post');
      }
    }

    this.setTypeAttribute();
  },
  onModelChange: function onModelChange() {
    elementor.modules.controls.RepeaterRow.prototype.onModelChange.apply(this, arguments);
    this.updateOptions();
  }
});

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ThemeBuilderRemoveEditorUI = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var ThemeBuilderRemoveEditorUI = /*#__PURE__*/function (_$e$modules$hookUI$Af) {
  (0, _inherits2.default)(ThemeBuilderRemoveEditorUI, _$e$modules$hookUI$Af);

  function ThemeBuilderRemoveEditorUI() {
    (0, _classCallCheck2.default)(this, ThemeBuilderRemoveEditorUI);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ThemeBuilderRemoveEditorUI).apply(this, arguments));
  }

  (0, _createClass2.default)(ThemeBuilderRemoveEditorUI, [{
    key: "getCommand",
    value: function getCommand() {
      return 'editor/documents/unload';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'elementor-pro-theme-builder-remove-editor-ui';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      var document = args.document;
      return document.config.theme_builder;
    }
  }, {
    key: "apply",
    value: function apply() {
      this.removePanelFooterSubmenuItems();
      this.removePublishTabs();
    }
  }, {
    key: "removePanelFooterSubmenuItems",
    value: function removePanelFooterSubmenuItems() {
      var footerView = elementor.getPanelView().footer.currentView,
          behavior = footerView._behaviors[Object.keys(footerView.behaviors()).indexOf('saver')];

      elementor.getPanelView().footer.currentView.removeSubMenuItem('saver-options', {
        name: 'conditions'
      });
      behavior.ui.buttonPreview.tipsy('enable').removeClass('elementor-panel-footer-theme-builder-buttons-wrapper elementor-toggle-state');
    }
  }, {
    key: "removePublishTabs",
    value: function removePublishTabs() {
      var component = $e.components.get('theme-builder-publish');
      component.removeTab('conditions');
    }
  }]);
  return ThemeBuilderRemoveEditorUI;
}($e.modules.hookUI.After);

exports.ThemeBuilderRemoveEditorUI = ThemeBuilderRemoveEditorUI;
var _default = ThemeBuilderRemoveEditorUI;
exports.default = _default;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ThemeBuilderToggleMenuConditions = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var ThemeBuilderToggleMenuConditions = /*#__PURE__*/function (_$e$modules$hookUI$Af) {
  (0, _inherits2.default)(ThemeBuilderToggleMenuConditions, _$e$modules$hookUI$Af);

  function ThemeBuilderToggleMenuConditions() {
    (0, _classCallCheck2.default)(this, ThemeBuilderToggleMenuConditions);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ThemeBuilderToggleMenuConditions).apply(this, arguments));
  }

  (0, _createClass2.default)(ThemeBuilderToggleMenuConditions, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/settings';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'elementor-pro-theme-builder-toggle-menu-conditions';
    }
  }, {
    key: "getContainerType",
    value: function getContainerType() {
      return 'document';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      return args.settings && args.settings.location;
    }
  }, {
    key: "apply",
    value: function apply() {
      var themeBuilder = elementorPro.modules.themeBuilder;
      themeBuilder.ui.menuConditions.toggle(!!elementor.config.document.theme_builder.settings.location);
    }
  }]);
  return ThemeBuilderToggleMenuConditions;
}($e.modules.hookUI.After);

exports.ThemeBuilderToggleMenuConditions = ThemeBuilderToggleMenuConditions;
var _default = ThemeBuilderToggleMenuConditions;
exports.default = _default;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _component = _interopRequireDefault(__webpack_require__(75));

var FormsModule = /*#__PURE__*/function (_elementorModules$edi) {
  (0, _inherits2.default)(FormsModule, _elementorModules$edi);

  function FormsModule() {
    (0, _classCallCheck2.default)(this, FormsModule);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(FormsModule).apply(this, arguments));
  }

  (0, _createClass2.default)(FormsModule, [{
    key: "onElementorInit",
    value: function onElementorInit() {
      var ReplyToField = __webpack_require__(83),
          Recaptcha = __webpack_require__(84),
          MailerLite = __webpack_require__(85),
          Mailchimp = __webpack_require__(87),
          Drip = __webpack_require__(88),
          ActiveCampaign = __webpack_require__(89),
          GetResponse = __webpack_require__(90),
          ConvertKit = __webpack_require__(91);

      this.replyToField = new ReplyToField();
      this.mailchimp = new Mailchimp('form');
      this.recaptcha = new Recaptcha('form');
      this.drip = new Drip('form');
      this.activecampaign = new ActiveCampaign('form');
      this.getresponse = new GetResponse('form');
      this.convertkit = new ConvertKit('form');
      this.mailerlite = new MailerLite('form'); // Form fields

      var TimeField = __webpack_require__(92),
          DateField = __webpack_require__(93),
          AcceptanceField = __webpack_require__(94),
          UploadField = __webpack_require__(95),
          TelField = __webpack_require__(96);

      this.Fields = {
        time: new TimeField('form'),
        date: new DateField('form'),
        tel: new TelField('form'),
        acceptance: new AcceptanceField('form'),
        upload: new UploadField('form')
      };
      elementor.addControlView('Fields_map', __webpack_require__(97));
      elementor.addControlView('form-fields-repeater', __webpack_require__(98));
    }
  }, {
    key: "onElementorInitComponents",
    value: function onElementorInitComponents() {
      $e.components.register(new _component.default({
        manager: this
      }));
    }
  }]);
  return FormsModule;
}(elementorModules.editor.utils.Module);

exports.default = FormsModule;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(14);

var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var hooks = _interopRequireWildcard(__webpack_require__(76));

var Component = /*#__PURE__*/function (_$e$modules$Component) {
  (0, _inherits2.default)(Component, _$e$modules$Component);

  function Component() {
    (0, _classCallCheck2.default)(this, Component);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Component).apply(this, arguments));
  }

  (0, _createClass2.default)(Component, [{
    key: "getNamespace",
    value: function getNamespace() {
      return 'forms';
    }
  }, {
    key: "defaultHooks",
    value: function defaultHooks() {
      return this.importHooks(hooks);
    }
  }]);
  return Component;
}($e.modules.ComponentBase);

exports.default = Component;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _data = __webpack_require__(77);

Object.keys(_data).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _data[key];
    }
  });
});

var _ui = __webpack_require__(81);

Object.keys(_ui).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ui[key];
    }
  });
});

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "FormFieldsSanitizeCustomId", {
  enumerable: true,
  get: function get() {
    return _formFieldsSanitizeCustomId.FormFieldsSanitizeCustomId;
  }
});
Object.defineProperty(exports, "FormFieldsSetCustomId", {
  enumerable: true,
  get: function get() {
    return _formFieldsSetCustomId.FormFieldsSetCustomId;
  }
});
Object.defineProperty(exports, "FormFieldsAddFirstStep", {
  enumerable: true,
  get: function get() {
    return _formFieldsStep.FormFieldsAddFirstStep;
  }
});

var _formFieldsSanitizeCustomId = __webpack_require__(78);

var _formFieldsSetCustomId = __webpack_require__(79);

var _formFieldsStep = __webpack_require__(80);

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FormFieldsSanitizeCustomId = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(1));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(7));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(15));

var FormFieldsSanitizeCustomId = /*#__PURE__*/function (_$e$modules$hookData$) {
  (0, _inherits2.default)(FormFieldsSanitizeCustomId, _$e$modules$hookData$);

  function FormFieldsSanitizeCustomId() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, FormFieldsSanitizeCustomId);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(FormFieldsSanitizeCustomId)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "ID_SANITIZE_FILTER", /[^\w]/g);
    return _this;
  }

  (0, _createClass2.default)(FormFieldsSanitizeCustomId, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/settings';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'elementor-pro-forms-fields-sanitize-custom-id';
    }
  }, {
    key: "getContainerType",
    value: function getContainerType() {
      return 'repeater';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      return undefined !== args.settings.custom_id;
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers,
          settings = args.settings,
          custom_id = settings.custom_id; // eslint-disable-line camelcase

      if (custom_id.match(this.ID_SANITIZE_FILTER)) {
        // Re-render with old settings.
        containers.forEach(function (container) {
          var panelView = container.panel.getControlView('form_fields'),
              currentItemView = panelView.children.findByModel(container.settings),
              idView = currentItemView.children.find(function (view) {
            return 'custom_id' === view.model.get('name');
          });
          idView.render();
          idView.$el.find('input').focus();
        }); // Hook-Break.

        return false;
      }

      return true;
    }
  }]);
  return FormFieldsSanitizeCustomId;
}($e.modules.hookData.Dependency);

exports.FormFieldsSanitizeCustomId = FormFieldsSanitizeCustomId;
var _default = FormFieldsSanitizeCustomId;
exports.default = _default;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FormFieldsSetCustomId = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var FormFieldsSetCustomId = /*#__PURE__*/function (_$e$modules$hookData$) {
  (0, _inherits2.default)(FormFieldsSetCustomId, _$e$modules$hookData$);

  function FormFieldsSetCustomId() {
    (0, _classCallCheck2.default)(this, FormFieldsSetCustomId);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(FormFieldsSetCustomId).apply(this, arguments));
  }

  (0, _createClass2.default)(FormFieldsSetCustomId, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/repeater/insert';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'elementor-pro-forms-fields-set-custom-id';
    }
  }, {
    key: "getContainerType",
    value: function getContainerType() {
      return 'widget';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      return 'form_fields' === args.name;
    }
  }, {
    key: "apply",
    value: function apply(args, model) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers,
          isDuplicate = $e.commands.isCurrentFirstTrace('document/repeater/duplicate');
      containers.forEach(function (
      /** Container */
      container) {
        var itemContainer = container.children.find(function (childrenContainer) {
          // Sometimes, one of children is {Empty}.
          if (childrenContainer) {
            return model.get('_id') === childrenContainer.id;
          }

          return false;
        });

        if (!isDuplicate && itemContainer.settings.get('custom_id')) {
          return;
        }

        $e.run('document/elements/settings', {
          container: itemContainer,
          settings: {
            custom_id: 'field_' + itemContainer.id
          },
          options: {
            external: true
          }
        });
      });
      return true;
    }
  }]);
  return FormFieldsSetCustomId;
}($e.modules.hookData.After);

exports.FormFieldsSetCustomId = FormFieldsSetCustomId;
var _default = FormFieldsSetCustomId;
exports.default = _default;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FormFieldsAddFirstStep = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var FormFieldsAddFirstStep = /*#__PURE__*/function (_$e$modules$hookData$) {
  (0, _inherits2.default)(FormFieldsAddFirstStep, _$e$modules$hookData$);

  function FormFieldsAddFirstStep() {
    (0, _classCallCheck2.default)(this, FormFieldsAddFirstStep);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(FormFieldsAddFirstStep).apply(this, arguments));
  }

  (0, _createClass2.default)(FormFieldsAddFirstStep, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/settings';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'elementor-pro-forms-fields-first-step';
    }
  }, {
    key: "getContainerType",
    value: function getContainerType() {
      return 'repeater';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      return 'form' === containers[0].parent.model.get('widgetType') && 'step' === args.settings.field_type;
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2;
      containers.forEach(function (
      /** Container */
      container) {
        var firstItem = container.parent.children[0];

        if ('step' === firstItem.settings.get('field_type')) {
          return;
        }

        $e.run('document/repeater/insert', {
          container: container.parent,
          // widget
          name: 'form_fields',
          model: {
            field_type: 'step'
          },
          options: {
            at: 0,
            external: true
          }
        });
      });
      return true;
    }
  }]);
  return FormFieldsAddFirstStep;
}($e.modules.hookData.After);

exports.FormFieldsAddFirstStep = FormFieldsAddFirstStep;
var _default = FormFieldsAddFirstStep;
exports.default = _default;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "FormFieldsUpdateShortCode", {
  enumerable: true,
  get: function get() {
    return _formFieldsUpdateShortcode.FormFieldsUpdateShortCode;
  }
});

var _formFieldsUpdateShortcode = __webpack_require__(82);

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FormFieldsUpdateShortCode = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var FormFieldsUpdateShortCode = /*#__PURE__*/function (_$e$modules$hookUI$Af) {
  (0, _inherits2.default)(FormFieldsUpdateShortCode, _$e$modules$hookUI$Af);

  function FormFieldsUpdateShortCode() {
    (0, _classCallCheck2.default)(this, FormFieldsUpdateShortCode);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(FormFieldsUpdateShortCode).apply(this, arguments));
  }

  (0, _createClass2.default)(FormFieldsUpdateShortCode, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/settings';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'elementor-pro-forms-fields-update-shortcode';
    }
  }, {
    key: "getContainerType",
    value: function getContainerType() {
      return 'repeater';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      if (!$e.routes.isPartOf('panel/editor') || undefined === args.settings.custom_id) {
        return false;
      }

      return true;
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      containers.forEach(function (
      /** Container */
      container) {
        var panelView = container.panel.getControlView('form_fields'),
            currentItemView = panelView.children.find(function (view) {
          return container.id === view.model.get('_id');
        }),
            shortcodeView = currentItemView.children.find(function (view) {
          return 'shortcode' === view.model.get('name');
        });
        shortcodeView.render();
      });
    }
  }]);
  return FormFieldsUpdateShortCode;
}($e.modules.hookUI.After);

exports.FormFieldsUpdateShortCode = FormFieldsUpdateShortCode;
var _default = FormFieldsUpdateShortCode;
exports.default = _default;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var editor, editedModel, replyToControl;

  var setReplyToControl = function setReplyToControl() {
    replyToControl = editor.collection.findWhere({
      name: 'email_reply_to'
    });
  };

  var getReplyToView = function getReplyToView() {
    return editor.children.findByModelCid(replyToControl.cid);
  };

  var refreshReplyToElement = function refreshReplyToElement() {
    var replyToView = getReplyToView();

    if (replyToView) {
      replyToView.render();
    }
  };

  var updateReplyToOptions = function updateReplyToOptions() {
    var settingsModel = editedModel.get('settings'),
        emailModels = settingsModel.get('form_fields').where({
      field_type: 'email'
    }),
        emailFields;
    emailModels = _.reject(emailModels, {
      field_label: ''
    });
    emailFields = _.map(emailModels, function (model) {
      return {
        id: model.get('custom_id'),
        label: elementorPro.translate('x_field', [model.get('field_label')])
      };
    });
    replyToControl.set('options', {
      '': replyToControl.get('options')['']
    });

    _.each(emailFields, function (emailField) {
      replyToControl.get('options')[emailField.id] = emailField.label;
    });

    refreshReplyToElement();
  };

  var updateDefaultReplyTo = function updateDefaultReplyTo(settingsModel) {
    replyToControl.get('options')[''] = settingsModel.get('email_from');
    refreshReplyToElement();
  };

  var onFormFieldsChange = function onFormFieldsChange(changedModel) {
    // If it's repeater field
    if (changedModel.get('custom_id')) {
      if ('email' === changedModel.get('field_type')) {
        updateReplyToOptions();
      }
    }

    if (changedModel.changed.email_from) {
      updateDefaultReplyTo(changedModel);
    }
  };

  var onPanelShow = function onPanelShow(panel, model) {
    editor = panel.getCurrentPageView();
    editedModel = model;
    setReplyToControl();
    var settingsModel = editedModel.get('settings');
    settingsModel.on('change', onFormFieldsChange);
    updateDefaultReplyTo(settingsModel);
    updateReplyToOptions();
  };

  var init = function init() {
    elementor.hooks.addAction('panel/open_editor/widget/form', onPanelShow);
  };

  init();
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elementorModules.editor.utils.Module.extend({
  enqueueRecaptchaJs: function enqueueRecaptchaJs(url, type) {
    if (!elementorFrontend.elements.$body.find('[src="' + url + '"]').length) {
      elementorFrontend.elements.$body.append('<scr' + 'ipt src="' + url + '" id="recaptcha-' + type + '"</scri' + 'pt>');
    }
  },
  renderField: function renderField(inputField, item) {
    inputField += '<div class="elementor-field ' + item.field_type + ' ">';
    inputField += this.getDataSettings(item);
    inputField += '</div>';
    return inputField;
  },
  getDataSettings: function getDataSettings(item) {
    var config = elementorPro.config.forms[item.field_type],
        srcURL = 'https://www.google.com/recaptcha/api.js?render=explicit';

    if (!config.enabled) {
      return '<div class="elementor-alert elementor-alert-info">' + config.setup_message + '</div>';
    }

    var recaptchaData = 'data-sitekey="' + config.site_key + '" data-type="' + config.type + '"';

    switch (config.type) {
      case 'v3':
        recaptchaData += ' data-action="form" data-size="invisible" data-badge="' + item.recaptcha_badge + '"';
        break;

      case 'v2_checkbox':
        recaptchaData += ' data-theme="' + item.recaptcha_style + '"';
        recaptchaData += ' data-size="' + item.recaptcha_size + '"';
        break;
    }

    this.enqueueRecaptchaJs(srcURL, config.type);
    return '<div class="elementor-g-recaptcha' + _.escape(item.css_classes) + '" ' + recaptchaData + '></div>';
  },
  filterItem: function filterItem(item) {
    if ('recaptcha' === item.field_type) {
      item.field_label = false;
    }

    return item;
  },
  onInit: function onInit() {
    elementor.hooks.addFilter('elementor_pro/forms/content_template/item', this.filterItem);
    elementor.hooks.addFilter('elementor_pro/forms/content_template/field/recaptcha', this.renderField, 10, 2);
    elementor.hooks.addFilter('elementor_pro/forms/content_template/field/recaptcha_v3', this.renderField, 10, 2);
  }
});

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseIntegrationModule = __webpack_require__(11);

module.exports = BaseIntegrationModule.extend({
  fields: {},
  getName: function getName() {
    return 'mailerlite';
  },
  onElementChange: function onElementChange(setting) {
    switch (setting) {
      case 'mailerlite_api_key_source':
      case 'mailerlite_custom_api_key':
        this.onMailerliteApiKeyUpdate();
        break;

      case 'mailerlite_group':
        this.updateFieldsMapping();
        break;
    }
  },
  onMailerliteApiKeyUpdate: function onMailerliteApiKeyUpdate() {
    var self = this,
        controlView = self.getEditorControlView('mailerlite_custom_api_key'),
        GlobalApiKeycontrolView = self.getEditorControlView('mailerlite_api_key_source');

    if ('default' !== GlobalApiKeycontrolView.getControlValue() && '' === controlView.getControlValue()) {
      self.updateOptions('mailerlite_group', []);
      self.getEditorControlView('mailerlite_group').setValue('');
      return;
    }

    self.addControlSpinner('mailerlite_group');
    var cacheKey = this.getCacheKey({
      type: 'groups',
      controls: [controlView.getControlValue(), GlobalApiKeycontrolView.getControlValue()]
    });
    self.getMailerliteCache('groups', 'groups', cacheKey).done(function (data) {
      self.updateOptions('mailerlite_group', data.groups);
      self.fields = data.fields;
    });
  },
  updateFieldsMapping: function updateFieldsMapping() {
    var controlView = this.getEditorControlView('mailerlite_group');

    if (!controlView.getControlValue()) {
      return;
    }

    var remoteFields = [{
      remote_label: elementor.translate('Email'),
      remote_type: 'email',
      remote_id: 'email',
      remote_required: true
    }, {
      remote_label: elementor.translate('Name'),
      remote_type: 'text',
      remote_id: 'name',
      remote_required: false
    }, {
      remote_label: elementor.translate('Last Name'),
      remote_type: 'text',
      remote_id: 'last_name',
      remote_required: false
    }, {
      remote_label: elementor.translate('Company'),
      remote_type: 'text',
      remote_id: 'company',
      remote_required: false
    }, {
      remote_label: elementor.translate('Phone'),
      remote_type: 'text',
      remote_id: 'phone',
      remote_required: false
    }, {
      remote_label: elementor.translate('Country'),
      remote_type: 'text',
      remote_id: 'country',
      remote_required: false
    }, {
      remote_label: elementor.translate('State'),
      remote_type: 'text',
      remote_id: 'state',
      remote_required: false
    }, {
      remote_label: elementor.translate('City'),
      remote_type: 'text',
      remote_id: 'city',
      remote_required: false
    }, {
      remote_label: elementor.translate('Zip'),
      remote_type: 'text',
      remote_id: 'zip',
      remote_required: false
    }];

    for (var field in this.fields) {
      if (this.fields.hasOwnProperty(field)) {
        remoteFields.push(this.fields[field]);
      }
    }

    this.getEditorControlView('mailerlite_fields_map').updateMap(remoteFields);
  },
  getMailerliteCache: function getMailerliteCache(type, action, cacheKey, requestArgs) {
    if (_.has(this.cache[type], cacheKey)) {
      var data = {};
      data[type] = this.cache[type][cacheKey];
      return jQuery.Deferred().resolve(data);
    }

    requestArgs = _.extend({}, requestArgs, {
      service: 'mailerlite',
      mailerlite_action: action,
      custom_api_key: this.getEditorControlView('mailerlite_custom_api_key').getControlValue(),
      api_key: this.getEditorControlView('mailerlite_api_key_source').getControlValue()
    });
    return this.fetchCache(type, cacheKey, requestArgs);
  },
  onSectionActive: function onSectionActive() {
    BaseIntegrationModule.prototype.onSectionActive.apply(this, arguments);
    this.onMailerliteApiKeyUpdate();
  }
});

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elementorModules.editor.utils.Module.extend({
  elementType: null,
  __construct: function __construct(elementType) {
    this.elementType = elementType;
    this.addEditorListener();
  },
  addEditorListener: function addEditorListener() {
    var self = this;

    if (self.onElementChange) {
      var eventName = 'change';

      if ('global' !== self.elementType) {
        eventName += ':' + self.elementType;
      }

      elementor.channels.editor.on(eventName, function (controlView, elementView) {
        self.onElementChange(controlView.model.get('name'), controlView, elementView);
      });
    }
  },
  addControlSpinner: function addControlSpinner(name) {
    var $el = this.getEditorControlView(name).$el,
        $input = $el.find(':input');

    if ($input.attr('disabled')) {
      return;
    }

    $input.attr('disabled', true);
    $el.find('.elementor-control-title').after('<span class="elementor-control-spinner"><i class="eicon-spinner eicon-animation-spin"></i>&nbsp;</span>');
  },
  removeControlSpinner: function removeControlSpinner(name) {
    var $controlEl = this.getEditorControlView(name).$el;
    $controlEl.find(':input').attr('disabled', false);
    $controlEl.find('.elementor-control-spinner').remove();
  },
  addSectionListener: function addSectionListener(section, callback) {
    var self = this;
    elementor.channels.editor.on('section:activated', function (sectionName, editor) {
      var model = editor.getOption('editedElementView').getEditModel(),
          currentElementType = model.get('elType'),
          _arguments = arguments;

      if ('widget' === currentElementType) {
        currentElementType = model.get('widgetType');
      }

      if (self.elementType === currentElementType && section === sectionName) {
        setTimeout(function () {
          callback.apply(self, _arguments);
        }, 10);
      }
    });
  }
});

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseIntegrationModule = __webpack_require__(11);

module.exports = BaseIntegrationModule.extend({
  getName: function getName() {
    return 'mailchimp';
  },
  onElementChange: function onElementChange(setting) {
    switch (setting) {
      case 'mailchimp_api_key_source':
      case 'mailchimp_api_key':
        this.onApiUpdate();
        break;

      case 'mailchimp_list':
        this.onMailchimpListUpdate();
        break;
    }
  },
  onApiUpdate: function onApiUpdate() {
    var self = this,
        controlView = self.getEditorControlView('mailchimp_api_key'),
        GlobalApiKeycontrolView = self.getEditorControlView('mailchimp_api_key_source');

    if ('default' !== GlobalApiKeycontrolView.getControlValue() && '' === controlView.getControlValue()) {
      self.updateOptions('mailchimp_list', []);
      self.getEditorControlView('mailchimp_list').setValue('');
      return;
    }

    self.addControlSpinner('mailchimp_list');
    var cacheKey = this.getCacheKey({
      type: 'lists',
      controls: [controlView.getControlValue(), GlobalApiKeycontrolView.getControlValue()]
    });
    self.getMailchimpCache('lists', 'lists', cacheKey).done(function (data) {
      self.updateOptions('mailchimp_list', data.lists);
      self.updatMailchimpList();
    });
  },
  onMailchimpListUpdate: function onMailchimpListUpdate() {
    this.updateOptions('mailchimp_groups', []);
    this.getEditorControlView('mailchimp_groups').setValue('');
    this.updatMailchimpList();
  },
  updatMailchimpList: function updatMailchimpList() {
    var self = this,
        controlView = self.getEditorControlView('mailchimp_list');

    if (!controlView.getControlValue()) {
      return;
    }

    self.addControlSpinner('mailchimp_groups');
    this.getCacheKey({
      type: 'list_details',
      controls: [controlView.getControlValue()]
    });
    self.getMailchimpCache('list_details', 'list_details', controlView.getControlValue(), {
      mailchimp_list: controlView.getControlValue()
    }).done(function (data) {
      self.updateOptions('mailchimp_groups', data.list_details.groups);
      self.getEditorControlView('mailchimp_fields_map').updateMap(data.list_details.fields);
    });
  },
  getMailchimpCache: function getMailchimpCache(type, action, cacheKey, requestArgs) {
    if (_.has(this.cache[type], cacheKey)) {
      var data = {};
      data[type] = this.cache[type][cacheKey];
      return jQuery.Deferred().resolve(data);
    }

    requestArgs = _.extend({}, requestArgs, {
      service: 'mailchimp',
      mailchimp_action: action,
      api_key: this.getEditorControlView('mailchimp_api_key').getControlValue(),
      use_global_api_key: this.getEditorControlView('mailchimp_api_key_source').getControlValue()
    });
    return this.fetchCache(type, cacheKey, requestArgs);
  },
  onSectionActive: function onSectionActive() {
    BaseIntegrationModule.prototype.onSectionActive.apply(this, arguments);
    this.onApiUpdate();
  }
});

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseIntegrationModule = __webpack_require__(11);

module.exports = BaseIntegrationModule.extend({
  getName: function getName() {
    return 'drip';
  },
  onElementChange: function onElementChange(setting) {
    switch (setting) {
      case 'drip_api_token_source':
      case 'drip_custom_api_token':
        this.onApiUpdate();
        break;

      case 'drip_account':
        this.onDripAccountsUpdate();
        break;
    }
  },
  onApiUpdate: function onApiUpdate() {
    var self = this,
        controlView = self.getEditorControlView('drip_api_token_source'),
        customControlView = self.getEditorControlView('drip_custom_api_token');

    if ('default' !== controlView.getControlValue() && '' === customControlView.getControlValue()) {
      self.updateOptions('drip_account', []);
      self.getEditorControlView('drip_account').setValue('');
      return;
    }

    self.addControlSpinner('drip_account');
    this.getCacheKey({
      type: 'accounts',
      controls: [controlView.getControlValue(), customControlView.getControlValue()]
    });
    self.getDripCache('accounts', 'accounts', controlView.getControlValue()).done(function (data) {
      self.updateOptions('drip_account', data.accounts);
    });
  },
  onDripAccountsUpdate: function onDripAccountsUpdate() {
    this.updateFieldsMapping();
  },
  updateFieldsMapping: function updateFieldsMapping() {
    var controlView = this.getEditorControlView('drip_account');

    if (!controlView.getControlValue()) {
      return;
    }

    var remoteFields = {
      remote_label: elementor.translate('Email'),
      remote_type: 'email',
      remote_id: 'email',
      remote_required: true
    };
    this.getEditorControlView('drip_fields_map').updateMap([remoteFields]);
  },
  getDripCache: function getDripCache(type, action, cacheKey, requestArgs) {
    if (_.has(this.cache[type], cacheKey)) {
      var data = {};
      data[type] = this.cache[type][cacheKey];
      return jQuery.Deferred().resolve(data);
    }

    requestArgs = _.extend({}, requestArgs, {
      service: 'drip',
      drip_action: action,
      api_token: this.getEditorControlView('drip_api_token_source').getControlValue(),
      custom_api_token: this.getEditorControlView('drip_custom_api_token').getControlValue()
    });
    return this.fetchCache(type, cacheKey, requestArgs);
  }
});

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseIntegrationModule = __webpack_require__(11);

module.exports = BaseIntegrationModule.extend({
  fields: {},
  getName: function getName() {
    return 'activecampaign';
  },
  onElementChange: function onElementChange(setting) {
    switch (setting) {
      case 'activecampaign_api_credentials_source':
      case 'activecampaign_api_key':
      case 'activecampaign_api_url':
        this.onApiUpdate();
        break;

      case 'activecampaign_list':
        this.onListUpdate();
        break;
    }
  },
  onApiUpdate: function onApiUpdate() {
    var self = this,
        apikeyControlView = self.getEditorControlView('activecampaign_api_key'),
        apiUrlControlView = self.getEditorControlView('activecampaign_api_url'),
        apiCredControlView = self.getEditorControlView('activecampaign_api_credentials_source');

    if ('default' !== apiCredControlView.getControlValue() && ('' === apikeyControlView.getControlValue() || '' === apiUrlControlView.getControlValue())) {
      self.updateOptions('activecampaign_list', []);
      self.getEditorControlView('activecampaign_list').setValue('');
      return;
    }

    self.addControlSpinner('activecampaign_list');
    var cacheKey = this.getCacheKey({
      controls: [apiCredControlView.getControlValue(), apiUrlControlView.getControlValue(), apikeyControlView.getControlValue()]
    });
    self.getActiveCampaignCache('lists', 'activecampaign_list', cacheKey).done(function (data) {
      self.updateOptions('activecampaign_list', data.lists);
      self.fields = data.fields;
    });
  },
  onListUpdate: function onListUpdate() {
    this.updateFieldsMapping();
  },
  updateFieldsMapping: function updateFieldsMapping() {
    var controlView = this.getEditorControlView('activecampaign_list');

    if (!controlView.getControlValue()) {
      return;
    }

    var remoteFields = [{
      remote_label: elementor.translate('Email'),
      remote_type: 'email',
      remote_id: 'email',
      remote_required: true
    }, {
      remote_label: elementor.translate('First Name'),
      remote_type: 'text',
      remote_id: 'first_name',
      remote_required: false
    }, {
      remote_label: elementor.translate('Last Name'),
      remote_type: 'text',
      remote_id: 'last_name',
      remote_required: false
    }, {
      remote_label: elementor.translate('Phone'),
      remote_type: 'text',
      remote_id: 'phone',
      remote_required: false
    }, {
      remote_label: elementor.translate('Organization name'),
      remote_type: 'text',
      remote_id: 'orgname',
      remote_required: false
    }];

    for (var field in this.fields) {
      if (this.fields.hasOwnProperty(field)) {
        remoteFields.push(this.fields[field]);
      }
    }

    this.getEditorControlView('activecampaign_fields_map').updateMap(remoteFields);
  },
  getActiveCampaignCache: function getActiveCampaignCache(type, action, cacheKey, requestArgs) {
    if (_.has(this.cache[type], cacheKey)) {
      var data = {};
      data[type] = this.cache[type][cacheKey];
      return jQuery.Deferred().resolve(data);
    }

    requestArgs = _.extend({}, requestArgs, {
      service: 'activecampaign',
      activecampaign_action: action,
      api_key: this.getEditorControlView('activecampaign_api_key').getControlValue(),
      api_url: this.getEditorControlView('activecampaign_api_url').getControlValue(),
      api_cred: this.getEditorControlView('activecampaign_api_credentials_source').getControlValue()
    });
    return this.fetchCache(type, cacheKey, requestArgs);
  }
});

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseIntegrationModule = __webpack_require__(11);

module.exports = BaseIntegrationModule.extend({
  getName: function getName() {
    return 'getresponse';
  },
  onElementChange: function onElementChange(setting) {
    switch (setting) {
      case 'getresponse_custom_api_key':
      case 'getresponse_api_key_source':
        this.onApiUpdate();
        break;

      case 'getresponse_list':
        this.onGetResonseListUpdate();
        break;
    }
  },
  onApiUpdate: function onApiUpdate() {
    var self = this,
        controlView = self.getEditorControlView('getresponse_api_key_source'),
        customControlView = self.getEditorControlView('getresponse_custom_api_key');

    if ('default' !== controlView.getControlValue() && '' === customControlView.getControlValue()) {
      self.updateOptions('getresponse_list', []);
      self.getEditorControlView('getresponse_list').setValue('');
      return;
    }

    self.addControlSpinner('getresponse_list');
    var cacheKey = this.getCacheKey({
      type: 'lists',
      controls: [controlView.getControlValue(), customControlView.getControlValue()]
    });
    self.getCache('lists', 'lists', cacheKey).done(function (data) {
      self.updateOptions('getresponse_list', data.lists);
    });
  },
  onGetResonseListUpdate: function onGetResonseListUpdate() {
    this.updatGetResonseList();
  },
  updatGetResonseList: function updatGetResonseList() {
    var self = this,
        controlView = self.getEditorControlView('getresponse_list');

    if (!controlView.getControlValue()) {
      return;
    }

    self.addControlSpinner('getresponse_fields_map');
    var cacheKey = this.getCacheKey({
      type: 'fields',
      controls: [controlView.getControlValue()]
    });
    self.getCache('fields', 'get_fields', cacheKey, {
      getresponse_list: controlView.getControlValue()
    }).done(function (data) {
      self.getEditorControlView('getresponse_fields_map').updateMap(data.fields);
    });
  },
  getCache: function getCache(type, action, cacheKey, requestArgs) {
    if (_.has(this.cache[type], cacheKey)) {
      var data = {};
      data[type] = this.cache[type][cacheKey];
      return jQuery.Deferred().resolve(data);
    }

    requestArgs = _.extend({}, requestArgs, {
      service: 'getresponse',
      getresponse_action: action,
      api_key: this.getEditorControlView('getresponse_api_key_source').getControlValue(),
      custom_api_key: this.getEditorControlView('getresponse_custom_api_key').getControlValue()
    });
    return this.fetchCache(type, cacheKey, requestArgs);
  },
  onSectionActive: function onSectionActive() {
    BaseIntegrationModule.prototype.onSectionActive.apply(this, arguments);
    this.updatGetResonseList();
  }
});

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseIntegrationModule = __webpack_require__(11);

module.exports = BaseIntegrationModule.extend({
  getName: function getName() {
    return 'convertkit';
  },
  onElementChange: function onElementChange(setting) {
    switch (setting) {
      case 'convertkit_api_key_source':
      case 'convertkit_custom_api_key':
        this.onApiUpdate();
        break;

      case 'convertkit_form':
        this.onListUpdate();
        break;
    }
  },
  onApiUpdate: function onApiUpdate() {
    var self = this,
        apiKeyControlView = self.getEditorControlView('convertkit_api_key_source'),
        customApikeyControlView = self.getEditorControlView('convertkit_custom_api_key');

    if ('default' !== apiKeyControlView.getControlValue() && '' === customApikeyControlView.getControlValue()) {
      self.updateOptions('convertkit_form', []);
      self.getEditorControlView('convertkit_form').setValue('');
      return;
    }

    self.addControlSpinner('convertkit_form');
    var cacheKey = this.getCacheKey({
      type: 'data',
      controls: [apiKeyControlView.getControlValue(), customApikeyControlView.getControlValue()]
    });
    self.getConvertKitCache('data', 'convertkit_get_forms', cacheKey).done(function (data) {
      self.updateOptions('convertkit_form', data.data.forms);
      self.updateOptions('convertkit_tags', data.data.tags);
    });
  },
  onListUpdate: function onListUpdate() {
    this.updateFieldsMapping();
  },
  updateFieldsMapping: function updateFieldsMapping() {
    var controlView = this.getEditorControlView('convertkit_form');

    if (!controlView.getControlValue()) {
      return;
    }

    var remoteFields = [{
      remote_label: elementor.translate('Email'),
      remote_type: 'email',
      remote_id: 'email',
      remote_required: true
    }, {
      remote_label: elementor.translate('First Name'),
      remote_type: 'text',
      remote_id: 'first_name',
      remote_required: false
    }];
    this.getEditorControlView('convertkit_fields_map').updateMap(remoteFields);
  },
  getConvertKitCache: function getConvertKitCache(type, action, cacheKey, requestArgs) {
    if (_.has(this.cache[type], cacheKey)) {
      var data = {};
      data[type] = this.cache[type][cacheKey];
      return jQuery.Deferred().resolve(data);
    }

    requestArgs = _.extend({}, requestArgs, {
      service: 'convertkit',
      convertkit_action: action,
      api_key: this.getEditorControlView('convertkit_api_key_source').getControlValue(),
      custom_api_key: this.getEditorControlView('convertkit_custom_api_key').getControlValue()
    });
    return this.fetchCache(type, cacheKey, requestArgs);
  }
});

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elementorModules.editor.utils.Module.extend({
  renderField: function renderField(inputField, item, i, settings) {
    var itemClasses = _.escape(item.css_classes),
        required = '',
        placeholder = '';

    if (item.required) {
      required = 'required';
    }

    if (item.placeholder) {
      placeholder = ' placeholder="' + item.placeholder + '"';
    }

    if ('yes' === item.use_native_time) {
      itemClasses += ' elementor-use-native';
    }

    return '<input size="1" type="time"' + placeholder + ' class="elementor-field-textual elementor-time-field elementor-field elementor-size-' + settings.input_size + ' ' + itemClasses + '" name="form_field_' + i + '" id="form_field_' + i + '" ' + required + ' >';
  },
  onInit: function onInit() {
    elementor.hooks.addFilter('elementor_pro/forms/content_template/field/time', this.renderField, 10, 4);
  }
});

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elementorModules.editor.utils.Module.extend({
  renderField: function renderField(inputField, item, i, settings) {
    var itemClasses = _.escape(item.css_classes),
        required = '',
        min = '',
        max = '',
        placeholder = '';

    if (item.required) {
      required = 'required';
    }

    if (item.min_date) {
      min = ' min="' + item.min_date + '"';
    }

    if (item.max_date) {
      max = ' max="' + item.max_date + '"';
    }

    if (item.placeholder) {
      placeholder = ' placeholder="' + item.placeholder + '"';
    }

    if ('yes' === item.use_native_date) {
      itemClasses += ' elementor-use-native';
    }

    return '<input size="1"' + min + max + placeholder + ' pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" type="date" class="elementor-field-textual elementor-date-field elementor-field elementor-size-' + settings.input_size + ' ' + itemClasses + '" name="form_field_' + i + '" id="form_field_' + i + '" ' + required + ' >';
  },
  onInit: function onInit() {
    elementor.hooks.addFilter('elementor_pro/forms/content_template/field/date', this.renderField, 10, 4);
  }
});

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elementorModules.editor.utils.Module.extend({
  renderField: function renderField(inputField, item, i, settings) {
    var itemClasses = _.escape(item.css_classes),
        required = '',
        label = '',
        checked = '';

    if (item.required) {
      required = 'required';
    }

    if (item.acceptance_text) {
      label = '<label for="form_field_' + i + '">' + item.acceptance_text + '</label>';
    }

    if (item.checked_by_default) {
      checked = ' checked="checked"';
    }

    return '<div class="elementor-field-subgroup">' + '<span class="elementor-field-option">' + '<input size="1" type="checkbox"' + checked + ' class="elementor-acceptance-field elementor-field elementor-size-' + settings.input_size + ' ' + itemClasses + '" name="form_field_' + i + '" id="form_field_' + i + '" ' + required + ' > ' + label + '</span></div>';
  },
  onInit: function onInit() {
    elementor.hooks.addFilter('elementor_pro/forms/content_template/field/acceptance', this.renderField, 10, 4);
  }
});

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elementorModules.editor.utils.Module.extend({
  renderField: function renderField(inputField, item, i, settings) {
    var itemClasses = _.escape(item.css_classes),
        required = '',
        multiple = '',
        fieldName = 'form_field_';

    if (item.required) {
      required = 'required';
    }

    if (item.allow_multiple_upload) {
      multiple = ' multiple="multiple"';
      fieldName += '[]';
    }

    return '<input size="1"  type="file" class="elementor-file-field elementor-field elementor-size-' + settings.input_size + ' ' + itemClasses + '" name="' + fieldName + '" id="form_field_' + i + '" ' + required + multiple + ' >';
  },
  onInit: function onInit() {
    elementor.hooks.addFilter('elementor_pro/forms/content_template/field/upload', this.renderField, 10, 4);
  }
});

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elementorModules.editor.utils.Module.extend({
  renderField: function renderField(inputField, item, i, settings) {
    var itemClasses = _.escape(item.css_classes),
        required = '',
        placeholder = '';

    if (item.required) {
      required = 'required';
    }

    if (item.placeholder) {
      placeholder = ' placeholder="' + item.placeholder + '"';
    }

    itemClasses = 'elementor-field-textual ' + itemClasses;
    return '<input size="1" type="' + item.field_type + '" class="elementor-field-textual elementor-field elementor-size-' + settings.input_size + ' ' + itemClasses + '" name="form_field_' + i + '" id="form_field_' + i + '" ' + required + ' ' + placeholder + ' pattern="[0-9()-]" >';
  },
  onInit: function onInit() {
    elementor.hooks.addFilter('elementor_pro/forms/content_template/field/tel', this.renderField, 10, 4);
  }
});

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elementor.modules.controls.Repeater.extend({
  onBeforeRender: function onBeforeRender() {
    this.$el.hide();
  },
  updateMap: function updateMap(fields) {
    var self = this,
        savedMapObject = {};
    self.collection.each(function (model) {
      savedMapObject[model.get('remote_id')] = model.get('local_id');
    });
    self.collection.reset();

    _.each(fields, function (field) {
      var model = {
        remote_id: field.remote_id,
        remote_label: field.remote_label,
        remote_type: field.remote_type ? field.remote_type : '',
        remote_required: field.remote_required ? field.remote_required : false,
        local_id: savedMapObject[field.remote_id] ? savedMapObject[field.remote_id] : ''
      };
      self.collection.add(model);
    });

    self.render();
  },
  onRender: function onRender() {
    elementor.modules.controls.Base.prototype.onRender.apply(this, arguments);
    var self = this;
    self.children.each(function (view) {
      var localFieldsControl = view.children.last(),
          options = {
        '': '- ' + elementor.translate('None') + ' -'
      },
          label = view.model.get('remote_label');

      if (view.model.get('remote_required')) {
        label += '<span class="elementor-required">*</span>';
      }

      _.each(self.elementSettingsModel.get('form_fields').models, function (model, index) {
        // If it's an email field, add only email fields from thr form
        var remoteType = view.model.get('remote_type');

        if ('text' !== remoteType && remoteType !== model.get('field_type')) {
          return;
        }

        options[model.get('custom_id')] = model.get('field_label') || 'Field #' + (index + 1);
      });

      localFieldsControl.model.set('label', label);
      localFieldsControl.model.set('options', options);
      localFieldsControl.render();
      view.$el.find('.elementor-repeater-row-tools').hide();
      view.$el.find('.elementor-repeater-row-controls').removeClass('elementor-repeater-row-controls').find('.elementor-control').css({
        paddingBottom: 0
      });
    });
    self.$el.find('.elementor-button-wrapper').remove();

    if (self.children.length) {
      self.$el.show();
    }
  }
});

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _get3 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _fieldsRepeaterRow = _interopRequireDefault(__webpack_require__(99));

module.exports = /*#__PURE__*/function (_elementor$modules$co) {
  (0, _inherits2.default)(_class, _elementor$modules$co);

  function _class() {
    (0, _classCallCheck2.default)(this, _class);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).apply(this, arguments));
  }

  (0, _createClass2.default)(_class, [{
    key: "className",
    value: function className() {
      var classes = (0, _get3.default)((0, _getPrototypeOf2.default)(_class.prototype), "className", this).call(this);
      classes += ' elementor-control-type-repeater';
      return classes;
    }
  }, {
    key: "getChildView",
    value: function getChildView() {
      return _fieldsRepeaterRow.default;
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var _get2,
          _this = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_get2 = (0, _get3.default)((0, _getPrototypeOf2.default)(_class.prototype), "initialize", this)).call.apply(_get2, [this].concat(args));

      var formFields = this.container.settings.get('form_fields');
      this.listenTo(formFields, 'change', function (model) {
        return _this.onFormFieldChange(model);
      }).listenTo(formFields, 'remove', function (model) {
        return _this.onFormFieldRemove(model);
      });
    }
  }, {
    key: "getFirstChild",
    value: function getFirstChild() {
      return this.children.findByModel(this.collection.models[0]);
    }
  }, {
    key: "lockFirstStep",
    value: function lockFirstStep() {
      var firstChild = this.getFirstChild();

      if ('step' !== firstChild.model.get('field_type')) {
        return;
      }

      var stepFields = this.collection.where({
        field_type: 'step'
      });

      if (1 < stepFields.length) {
        firstChild.toggleFieldTypeControl(false);
        firstChild.toggleTools(false);
      }

      firstChild.toggleSort(false);
    }
  }, {
    key: "onFormFieldChange",
    value: function onFormFieldChange(model) {
      var fieldType = model.changed.field_type;

      if (!fieldType || 'step' !== fieldType && 'step' !== model._previousAttributes.field_type) {
        return;
      }

      var isStep = 'step' === fieldType;
      this.children.findByModel(model).toggleStepField(isStep);
      this.onStepFieldChanged(isStep);
    }
  }, {
    key: "onFormFieldRemove",
    value: function onFormFieldRemove(model) {
      if ('step' === model.get('field_type')) {
        this.onStepFieldChanged(false);
      }
    }
  }, {
    key: "onStepFieldChanged",
    value: function onStepFieldChanged(isStep) {
      if (isStep) {
        this.lockFirstStep();
        return;
      }

      var stepFields = this.collection.where({
        field_type: 'step'
      });

      if (stepFields.length > 1) {
        return;
      }

      var firstChild = this.getFirstChild();

      if (1 === stepFields.length) {
        firstChild.toggleTools(true);
        firstChild.toggleFieldTypeControl(true);
        return;
      }

      firstChild.toggleSort(true);
    }
  }, {
    key: "onAddChild",
    value: function onAddChild(childView) {
      (0, _get3.default)((0, _getPrototypeOf2.default)(_class.prototype), "onAddChild", this).call(this);

      if ('step' === childView.model.get('field_type')) {
        this.lockFirstStep();
        childView.toggleStepField(true);
      }
    }
  }]);
  return _class;
}(elementor.modules.controls.Repeater);

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _default = /*#__PURE__*/function (_elementor$modules$co) {
  (0, _inherits2.default)(_default, _elementor$modules$co);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_default).apply(this, arguments));
  }

  (0, _createClass2.default)(_default, [{
    key: "toggleFieldTypeControl",
    value: function toggleFieldTypeControl(show) {
      var fieldTypeModel = this.collection.findWhere({
        name: 'field_type'
      }),
          fieldTypeControl = this.children.findByModel(fieldTypeModel);
      fieldTypeControl.$el.toggle(show);
    }
  }, {
    key: "toggleStepField",
    value: function toggleStepField(isStep) {
      this.$el.toggleClass('elementor-repeater-row--form-step', isStep);
    }
  }, {
    key: "toggleTools",
    value: function toggleTools(show) {
      this.ui.removeButton.add(this.ui.duplicateButton).toggle(show);
    }
  }]);
  return _default;
}(elementor.modules.controls.RepeaterRow);

exports.default = _default;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elementorModules.editor.utils.Module.extend({
  onElementorPreviewLoaded: function onElementorPreviewLoaded() {
    elementor.addControlView('Query', __webpack_require__(101));
  }
});

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elementor.modules.controls.Select2.extend({
  cache: null,
  isTitlesReceived: false,
  getSelect2Placeholder: function getSelect2Placeholder() {
    return {
      id: '',
      text: elementorPro.translate('all')
    };
  },
  getControlValueByName: function getControlValueByName(controlName) {
    var name = this.model.get('group_prefix') + controlName;
    return this.elementSettingsModel.attributes[name];
  },
  getQueryDataDeprecated: function getQueryDataDeprecated() {
    return {
      filter_type: this.model.get('filter_type'),
      object_type: this.model.get('object_type'),
      include_type: this.model.get('include_type'),
      query: this.model.get('query')
    };
  },
  getQueryData: function getQueryData() {
    // Use a clone to keep model data unchanged:
    var autocomplete = elementorCommon.helpers.cloneObject(this.model.get('autocomplete'));

    if (_.isEmpty(autocomplete.query)) {
      autocomplete.query = {};
    } // Specific for Group_Control_Query


    if ('cpt_tax' === autocomplete.object) {
      autocomplete.object = 'tax';

      if (_.isEmpty(autocomplete.query) || _.isEmpty(autocomplete.query.post_type)) {
        autocomplete.query.post_type = this.getControlValueByName('post_type');
      }
    }

    return {
      autocomplete: autocomplete
    };
  },
  getSelect2DefaultOptions: function getSelect2DefaultOptions() {
    var self = this;
    return jQuery.extend(elementor.modules.controls.Select2.prototype.getSelect2DefaultOptions.apply(this, arguments), {
      ajax: {
        transport: function transport(params, success, failure) {
          var bcFormat = !_.isEmpty(self.model.get('filter_type'));
          var data = {},
              action = 'panel_posts_control_filter_autocomplete';

          if (bcFormat) {
            data = self.getQueryDataDeprecated();
            action = 'panel_posts_control_filter_autocomplete_deprecated';
          } else {
            data = self.getQueryData();
          }

          data.q = params.data.q;
          return elementorPro.ajax.addRequest(action, {
            data: data,
            success: success,
            error: failure
          });
        },
        data: function data(params) {
          return {
            q: params.term,
            page: params.page
          };
        },
        cache: true
      },
      escapeMarkup: function escapeMarkup(markup) {
        return markup;
      },
      minimumInputLength: 1
    });
  },
  getValueTitles: function getValueTitles() {
    var self = this,
        data = {},
        bcFormat = !_.isEmpty(this.model.get('filter_type'));
    var ids = this.getControlValue(),
        action = 'query_control_value_titles',
        filterTypeName = 'autocomplete',
        filterType = {};

    if (bcFormat) {
      filterTypeName = 'filter_type';
      filterType = this.model.get(filterTypeName).object;
      data.filter_type = filterType;
      data.object_type = self.model.get('object_type');
      data.include_type = self.model.get('include_type');
      data.unique_id = '' + self.cid + filterType;
      action = 'query_control_value_titles_deprecated';
    } else {
      filterType = this.model.get(filterTypeName).object;
      data.get_titles = self.getQueryData().autocomplete;
      data.unique_id = '' + self.cid + filterType;
    }

    if (!ids || !filterType) {
      return;
    }

    if (!_.isArray(ids)) {
      ids = [ids];
    }

    elementorCommon.ajax.loadObjects({
      action: action,
      ids: ids,
      data: data,
      before: function before() {
        self.addControlSpinner();
      },
      success: function success(ajaxData) {
        self.isTitlesReceived = true;
        self.model.set('options', ajaxData);
        self.render();
      }
    });
  },
  addControlSpinner: function addControlSpinner() {
    this.ui.select.prop('disabled', true);
    this.$el.find('.elementor-control-title').after('<span class="elementor-control-spinner">&nbsp;<i class="eicon-spinner eicon-animation-spin"></i>&nbsp;</span>');
  },
  onReady: function onReady() {
    // Safari takes it's time to get the original select width
    setTimeout(elementor.modules.controls.Select2.prototype.onReady.bind(this));

    if (!this.isTitlesReceived) {
      this.getValueTitles();
    }
  }
});

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elementorModules.editor.utils.Module.extend({
  onElementorPreviewLoaded: function onElementorPreviewLoaded() {
    var EditButton = __webpack_require__(103);

    this.editButton = new EditButton();
  }
});

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var self = this;

  self.onPanelShow = function (panel) {
    var model = panel.content.currentView.collection.findWhere({
      name: 'template_id'
    });
    self.templateIdView = panel.content.currentView.children.findByModelCid(model.cid); // Change Edit link on render & on change template.

    self.templateIdView.elementSettingsModel.on('change', self.onTemplateIdChange);
    self.templateIdView.on('render', self.onTemplateIdChange);
  };

  self.onTemplateIdChange = function () {
    var templateID = self.templateIdView.elementSettingsModel.get('template_id'),
        $editButton = self.templateIdView.$el.find('.elementor-edit-template');

    if (!templateID) {
      $editButton.remove();
      return;
    }

    var editUrl = ElementorConfig.home_url + '?p=' + templateID + '&elementor';

    if ($editButton.length) {
      $editButton.prop('href', editUrl);
    } else {
      $editButton = jQuery('<a />', {
        target: '_blank',
        class: 'elementor-button elementor-button-default elementor-edit-template',
        href: editUrl,
        html: '<i class="eicon-pencil" /> ' + elementorPro.config.i18n.edit_template
      });
      self.templateIdView.$el.find('.elementor-control-input-wrapper').after($editButton);
    }
  };

  self.init = function () {
    elementor.hooks.addAction('panel/open_editor/widget/template', self.onPanelShow);
  };

  self.init();
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elementorModules.editor.utils.Module.extend({
  onElementorInit: function onElementorInit() {
    elementor.channels.editor.on('section:activated', this.onSectionActivated);
  },
  onSectionActivated: function onSectionActivated(sectionName, editor) {
    var editedElement = editor.getOption('editedElementView');

    if ('flip-box' !== editedElement.model.get('widgetType')) {
      return;
    }

    var isSideBSection = -1 !== ['section_side_b_content', 'section_style_b'].indexOf(sectionName);
    editedElement.$el.toggleClass('elementor-flip-box--flipped', isSideBSection);
    var $backLayer = editedElement.$el.find('.elementor-flip-box__back');

    if (isSideBSection) {
      $backLayer.css('transition', 'none');
    }

    if (!isSideBSection) {
      setTimeout(function () {
        $backLayer.css('transition', '');
      }, 10);
    }
  }
});

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elementorModules.editor.utils.Module.extend({
  config: elementorPro.config.shareButtonsNetworks,
  networksClassDictionary: {
    google: 'fab fa-google-plus',
    pocket: 'fab fa-get-pocket',
    email: 'fas fa-envelope'
  },
  getNetworkClass: function getNetworkClass(networkName) {
    var networkClass = this.networksClassDictionary[networkName] || 'fab fa-' + networkName;

    if (elementor.config.icons_update_needed) {
      networkClass = 'fa ' + networkClass;
    }

    return networkClass;
  },
  getNetworkTitle: function getNetworkTitle(buttonSettings) {
    return buttonSettings.text || this.config[buttonSettings.button].title;
  },
  hasCounter: function hasCounter(networkName, settings) {
    return 'icon' !== settings.view && 'yes' === settings.show_counter && this.config[networkName].has_counter;
  }
});

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elementorModules.editor.utils.Module.extend({
  onElementorInit: function onElementorInit() {
    var FontsManager = __webpack_require__(107);

    this.assets = {
      font: new FontsManager()
    };
  }
});

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elementorModules.Module.extend({
  _enqueuedFonts: [],
  _enqueuedTypekit: false,
  onFontChange: function onFontChange(fontType, font) {
    if ('custom' !== fontType && 'typekit' !== fontType) {
      return;
    }

    if (-1 !== this._enqueuedFonts.indexOf(font)) {
      return;
    }

    if ('typekit' === fontType && this._enqueuedTypekit) {
      return;
    }

    this.getCustomFont(fontType, font);
  },
  getCustomFont: function getCustomFont(fontType, font) {
    elementorPro.ajax.addRequest('assets_manager_panel_action_data', {
      unique_id: 'font_' + fontType + font,
      data: {
        service: 'font',
        type: fontType,
        font: font
      },
      success: function success(data) {
        if (data.font_face) {
          elementor.$previewContents.find('style:last').after('<style type="text/css">' + data.font_face + '</style>');
        }

        if (data.font_url) {
          elementor.$previewContents.find('link:last').after('<link href="' + data.font_url + '" rel="stylesheet" type="text/css">');
        }
      }
    });

    this._enqueuedFonts.push(font);

    if ('typekit' === fontType) {
      this._enqueuedTypekit = true;
    }
  },
  onInit: function onInit() {
    elementor.channels.editor.on('font:insertion', this.onFontChange.bind(this));
  }
});

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elementorModules.editor.utils.Module.extend({
  onElementorPreviewLoaded: function onElementorPreviewLoaded() {
    var CommentsSkin = __webpack_require__(109);

    this.commentsSkin = new CommentsSkin();
  }
});

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var self = this;

  self.onPanelShow = function (panel, model) {
    var settingsModel = model.get('settings'); // If no skins - set the skin to `theme_comments`.

    if (!settingsModel.controls._skin.default) {
      settingsModel.set('_skin', 'theme_comments');
    }
  };

  self.init = function () {
    elementor.hooks.addAction('panel/open_editor/widget/post-comments', self.onPanelShow);
  };

  self.init();
};

/***/ })
/******/ ]);
//# sourceMappingURL=editor.js.map
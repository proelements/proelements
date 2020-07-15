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
/******/ 	return __webpack_require__(__webpack_require__.s = 110);
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
/* 11 */,
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
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
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

var CustomAssetsBase = /*#__PURE__*/function (_elementorModules$Vie) {
  (0, _inherits2.default)(CustomAssetsBase, _elementorModules$Vie);

  function CustomAssetsBase() {
    (0, _classCallCheck2.default)(this, CustomAssetsBase);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CustomAssetsBase).apply(this, arguments));
  }

  (0, _createClass2.default)(CustomAssetsBase, [{
    key: "showAlertDialog",
    value: function showAlertDialog(id, message) {
      var onConfirm = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var onHide = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var alertData = {
        id: id,
        message: message
      };

      if (onConfirm) {
        alertData.onConfirm = onConfirm;
      }

      if (onHide) {
        alertData.onHide = onHide;
      } // Save the instance of the alert dialog to check for its visibility later


      if (!this.alertWidget) {
        this.alertWidget = elementorCommon.dialogsManager.createWidget('alert', alertData);
      }

      this.alertWidget.show();
    }
  }, {
    key: "onDialogDismiss",
    value: function onDialogDismiss() {
      // WP's publish button gets a disabled class on submit attempt
      this.elements.$publishButton.removeClass('disabled'); // Prevent WP's publish spinner from appearing on publish attempt

      this.elements.$publishButtonSpinner.removeClass('is-active');
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      var _this = this;

      // if we know there is a file already, return to continue submission normally
      if (this.fileWasUploaded) {
        return;
      }

      var hasValue = this.checkInputsForValues(); // method exists in the child classes
      // If the file input is not empty, continue the submission process

      if (hasValue) {
        this.fileWasUploaded = true;
        this.elements.$postForm.submit();
        return;
      }

      event.preventDefault(); // prevent new asset submission
      // If no value was found, stop submission and display a notice modal

      this.showAlertDialog('noData', this.getSettings('notice'), function () {
        return _this.onDialogDismiss();
      }, // onConfirm
      function () {
        return _this.onDialogDismiss();
      } // onHide
      );
      return false;
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      this.elements.$postForm.on('submit', this.handleSubmit.bind(this));
    }
  }]);
  return CustomAssetsBase;
}(elementorModules.ViewModule);

var _default = CustomAssetsBase;
exports.default = _default;

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var modules = {
  widget_template_edit_button: __webpack_require__(111),
  forms_integrations: __webpack_require__(113),
  AssetsManager: __webpack_require__(115),
  RoleManager: __webpack_require__(127),
  ThemeBuilder: __webpack_require__(129)
};
window.elementorProAdmin = {
  widget_template_edit_button: new modules.widget_template_edit_button(),
  forms_integrations: new modules.forms_integrations(),
  assetsManager: new modules.AssetsManager(),
  roleManager: new modules.RoleManager(),
  themeBuilder: new modules.ThemeBuilder()
};
jQuery(function () {
  elementorProAdmin.roleManager.advancedRoleManager.init();
});

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var EditButton = __webpack_require__(112);

  this.editButton = new EditButton();
};

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var self = this;

  self.init = function () {
    jQuery(document).on('change', '.elementor-widget-template-select', function () {
      var $this = jQuery(this),
          templateID = $this.val(),
          $editButton = $this.parents('p').find('.elementor-edit-template'),
          type = $this.find('[value="' + templateID + '"]').data('type');

      if ('page' !== type) {
        // 'widget' is editable only from Elementor page
        $editButton.hide();
        return;
      }

      var editUrl = ElementorProConfig.i18n.home_url + '?p=' + templateID + '&elementor';
      $editButton.prop('href', editUrl).show();
    });
  };

  self.init();
};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var ApiValidations = __webpack_require__(114);

  this.dripButton = new ApiValidations('drip_api_token');
  this.getResponse = new ApiValidations('getresponse_api_key');
  this.convertKit = new ApiValidations('convertkit_api_key');
  this.mailChimp = new ApiValidations('mailchimp_api_key');
  this.mailerLite = new ApiValidations('mailerlite_api_key');
  this.activeCcampaign = new ApiValidations('activecampaign_api_key', 'activecampaign_api_url');
};

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (key, fieldID) {
  var self = this;

  self.cacheElements = function () {
    this.cache = {
      $button: jQuery('#elementor_pro_' + key + '_button'),
      $apiKeyField: jQuery('#elementor_pro_' + key),
      $apiUrlField: jQuery('#elementor_pro_' + fieldID)
    };
  };

  self.bindEvents = function () {
    this.cache.$button.on('click', function (event) {
      event.preventDefault();
      self.validateApi();
    });
    this.cache.$apiKeyField.on('change', function () {
      self.setState('clear');
    });
  };

  self.validateApi = function () {
    this.setState('loading');
    var apiKey = this.cache.$apiKeyField.val();

    if ('' === apiKey) {
      this.setState('clear');
      return;
    }

    if (this.cache.$apiUrlField.length && '' === this.cache.$apiUrlField.val()) {
      this.setState('clear');
      return;
    }

    jQuery.post(ajaxurl, {
      action: self.cache.$button.data('action'),
      api_key: apiKey,
      api_url: this.cache.$apiUrlField.val(),
      _nonce: self.cache.$button.data('nonce')
    }).done(function (data) {
      if (data.success) {
        self.setState('success');
      } else {
        self.setState('error');
      }
    }).fail(function () {
      self.setState();
    });
  };

  self.setState = function (type) {
    var classes = ['loading', 'success', 'error'],
        currentClass,
        classIndex;

    for (classIndex in classes) {
      currentClass = classes[classIndex];

      if (type === currentClass) {
        this.cache.$button.addClass(currentClass);
      } else {
        this.cache.$button.removeClass(currentClass);
      }
    }
  };

  self.init = function () {
    this.cacheElements();
    this.bindEvents();
  };

  self.init();
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _elementorFontManager = _interopRequireDefault(__webpack_require__(116));

var _elementorCustomIcons = _interopRequireDefault(__webpack_require__(123));

module.exports = function () {
  var TypekitAdmin = __webpack_require__(125),
      CustomIcon = _elementorCustomIcons.default,
      FontAwesomeProAdmin = __webpack_require__(126).default;

  this.fontManager = new _elementorFontManager.default();
  this.typekit = new TypekitAdmin();
  this.fontAwesomePro = new FontAwesomeProAdmin();
  this.customIcons = new CustomIcon();
};

/***/ }),
/* 116 */
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

var _customAssetsBase = _interopRequireDefault(__webpack_require__(18));

var _elementorProUpload = _interopRequireDefault(__webpack_require__(117));

var _elementorProRepeater = _interopRequireDefault(__webpack_require__(122));

var CustomFontsManager = /*#__PURE__*/function (_CustomAssetsBase) {
  (0, _inherits2.default)(CustomFontsManager, _CustomAssetsBase);

  function CustomFontsManager() {
    (0, _classCallCheck2.default)(this, CustomFontsManager);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CustomFontsManager).apply(this, arguments));
  }

  (0, _createClass2.default)(CustomFontsManager, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        fields: {
          upload: _elementorProUpload.default,
          repeater: _elementorProRepeater.default
        },
        selectors: {
          editPageClass: 'post-type-elementor_font',
          title: '#title',
          repeaterBlock: '.repeater-block',
          repeaterTitle: '.repeater-title',
          removeRowBtn: '.remove-repeater-row',
          editRowBtn: '.toggle-repeater-row',
          closeRowBtn: '.close-repeater-row',
          styleInput: '.font_style',
          weightInput: '.font_weight',
          customFontsMetaBox: '#elementor-font-custommetabox',
          closeHandle: 'button.handlediv',
          toolbar: '.elementor-field-toolbar',
          inlinePreview: '.inline-preview',
          fileUrlInput: '.elementor-field-file input[type="text"]',
          postForm: '#post',
          publishButton: '#publish',
          publishButtonSpinner: '#publishing-action > .spinner'
        },
        notice: ElementorProConfig.i18n.fontsUploadEmptyNotice,
        fontLabelTemplate: '<ul class="row-font-label">' + '<li class="row-font-weight">{{weight}}</li>' + '<li class="row-font-style">{{style}}</li>' + '<li class="row-font-preview">{{preview}}</li>' + '{{toolbar}}' + '</ul>'
      };
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var selectors = this.getSettings('selectors');
      return {
        $postForm: jQuery(selectors.postForm),
        $publishButton: jQuery(selectors.publishButton),
        $publishButtonSpinner: jQuery(selectors.publishButtonSpinner),
        $closeHandle: jQuery(selectors.closeHandle),
        $customFontsMetaBox: jQuery(selectors.customFontsMetaBox),
        $title: jQuery(selectors.title)
      };
    }
  }, {
    key: "renderTemplate",
    value: function renderTemplate(tpl, data) {
      var re = /{{([^}}]+)?}}/g;
      var match;

      while (match = re.exec(tpl)) {
        // eslint-disable-line no-cond-assign
        tpl = tpl.replace(match[0], data[match[1]]);
      }

      return tpl;
    }
  }, {
    key: "ucFirst",
    value: function ucFirst(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }, {
    key: "getPreviewStyle",
    value: function getPreviewStyle($table) {
      var selectors = this.getSettings('selectors'),
          fontFamily = this.elements.$title.val(),
          style = $table.find('select' + selectors.styleInput).first().val(),
          weight = $table.find('select' + selectors.weightInput).first().val();
      return {
        style: this.ucFirst(style),
        weight: this.ucFirst(weight),
        styleAttribute: 'font-family: ' + fontFamily + ' ;font-style: ' + style + '; font-weight: ' + weight + ';'
      };
    }
  }, {
    key: "updateRowLabel",
    value: function updateRowLabel(event, $table) {
      var selectors = this.getSettings('selectors'),
          fontLabelTemplate = this.getSettings('fontLabelTemplate'),
          $block = $table.closest(selectors.repeaterBlock),
          $deleteBtn = $block.find(selectors.removeRowBtn).first(),
          $editBtn = $block.find(selectors.editRowBtn).first(),
          $closeBtn = $block.find(selectors.closeRowBtn).first(),
          $toolbar = $table.find(selectors.toolbar).last().clone(),
          previewStyle = this.getPreviewStyle($table);

      if ($editBtn.length > 0) {
        $editBtn.not(selectors.toolbar + ' ' + selectors.editRowBtn).remove();
      }

      if ($closeBtn.length > 0) {
        $closeBtn.not(selectors.toolbar + ' ' + selectors.closeRowBtn).remove();
      }

      if ($deleteBtn.length > 0) {
        $deleteBtn.not(selectors.toolbar + ' ' + selectors.removeRowBtn).remove();
      }

      var toolbarHtml = jQuery('<li class="row-font-actions">').append($toolbar)[0].outerHTML;
      return this.renderTemplate(fontLabelTemplate, {
        weight: '<span class="label">Weight:</span>' + previewStyle.weight,
        style: '<span class="label">Style:</span>' + previewStyle.style,
        preview: '<span style="' + previewStyle.styleAttribute + '">Elementor is making the web beautiful</span>',
        toolbar: toolbarHtml
      });
    }
  }, {
    key: "onRepeaterToggleVisible",
    value: function onRepeaterToggleVisible(event, $btn, $table) {
      var selectors = this.getSettings('selectors'),
          $previewElement = $table.find(selectors.inlinePreview),
          previewStyle = this.getPreviewStyle($table);
      $previewElement.attr('style', previewStyle.styleAttribute);
    }
  }, {
    key: "onRepeaterNewRow",
    value: function onRepeaterNewRow(event, $btn, $block) {
      var selectors = this.getSettings('selectors');
      $block.find(selectors.removeRowBtn).first().remove();
      $block.find(selectors.editRowBtn).first().remove();
      $block.find(selectors.closeRowBtn).first().remove();
    }
  }, {
    key: "maybeToggle",
    value: function maybeToggle(event) {
      event.preventDefault();
      var selectors = this.getSettings('selectors');

      if (jQuery(this).is(':visible') && !jQuery(event.target).hasClass(selectors.editRowBtn)) {
        jQuery(this).find(selectors.editRowBtn).click();
      }
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(event) {
      var $el = jQuery(event.target).next(),
          fields = this.getSettings('fields');
      fields.upload.setFields($el);
      fields.upload.setLabels($el);
      fields.upload.replaceButtonClass($el);
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var selectors = this.getSettings('selectors');
      jQuery(document).on('repeaterComputedLabel', this.updateRowLabel.bind(this)).on('onRepeaterToggleVisible', this.onRepeaterToggleVisible.bind(this)).on('onRepeaterNewRow', this.onRepeaterNewRow.bind(this)).on('click', selectors.repeaterTitle, this.maybeToggle.bind(this)).on('input', selectors.fileUrlInput, this.onInputChange.bind(this));
      (0, _get3.default)((0, _getPrototypeOf2.default)(CustomFontsManager.prototype), "bindEvents", this).call(this);
    }
  }, {
    key: "checkInputsForValues",
    value: function checkInputsForValues() {
      var selectors = this.getSettings('selectors');
      var hasValue = false; // Check the file inputs for a value

      jQuery(selectors.fileUrlInput).each(function (index, element) {
        if ('' !== jQuery(element).val()) {
          hasValue = true;
          return false; // If a value was found, break the loop
        }
      });
      return hasValue;
    }
  }, {
    key: "removeCloseHandle",
    value: function removeCloseHandle() {
      this.elements.$closeHandle.remove();
      this.elements.$customFontsMetaBox.removeClass('closed').removeClass('postbox');
    }
  }, {
    key: "titleRequired",
    value: function titleRequired() {
      this.elements.$title.prop('required', true);
    }
  }, {
    key: "onInit",
    value: function onInit() {
      var _get2;

      var settings = this.getSettings();

      if (!jQuery('body').hasClass(settings.selectors.editPageClass)) {
        return;
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_get2 = (0, _get3.default)((0, _getPrototypeOf2.default)(CustomFontsManager.prototype), "onInit", this)).call.apply(_get2, [this].concat(args));

      this.removeCloseHandle();
      this.titleRequired();
      settings.fields.upload.init();
      settings.fields.repeater.init();
    }
  }]);
  return CustomFontsManager;
}(_customAssetsBase.default);

exports.default = CustomFontsManager;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(118));

module.exports = {
  $btn: null,
  fileId: null,
  fileUrl: null,
  fileFrame: [],
  selectors: {
    uploadBtnClass: 'elementor-upload-btn',
    clearBtnClass: 'elementor-upload-clear-btn',
    uploadBtn: '.elementor-upload-btn',
    clearBtn: '.elementor-upload-clear-btn',
    inputURLField: '.elementor-field-file input[type="text"]'
  },
  hasValue: function hasValue() {
    return '' !== jQuery(this.fileUrl).val();
  },
  setLabels: function setLabels($el) {
    if (!this.hasValue()) {
      $el.val($el.data('upload_text'));
    } else {
      $el.val($el.data('remove_text'));
    }
  },
  setFields: function setFields(el) {
    var self = this;
    self.fileUrl = jQuery(el).prev();
    self.fileId = jQuery(self.fileUrl).prev();
  },
  setUploadParams: function setUploadParams(ext, name) {
    var uploader = this.fileFrame[name].uploader.uploader;
    uploader.param('uploadType', ext);
    uploader.param('uploadTypeCaller', 'elementor-admin-font-upload');
    uploader.param('post_id', this.getPostId());
  },
  setUploadMimeType: function setUploadMimeType(frame, ext) {
    // Set {ext} as only allowed upload extensions
    var oldExtensions = _wpPluploadSettings.defaults.filters.mime_types[0].extensions,
        self = this;
    frame.on('ready', function () {
      _wpPluploadSettings.defaults.filters.mime_types[0].extensions = ext;
    });
    frame.on('close', function () {
      // restore allowed upload extensions
      _wpPluploadSettings.defaults.filters.mime_types[0].extensions = oldExtensions;
      self.replaceButtonClass(self.$btn);
    });
  },
  replaceButtonClass: function replaceButtonClass(el) {
    if (this.hasValue()) {
      jQuery(el).removeClass(this.selectors.uploadBtnClass).addClass(this.selectors.clearBtnClass);
    } else {
      jQuery(el).removeClass(this.selectors.clearBtnClass).addClass(this.selectors.uploadBtnClass);
    }

    this.setLabels(el);
  },
  uploadFile: function uploadFile(el) {
    var _this = this;

    var self = this,
        $el = jQuery(el),
        mime = $el.attr('data-mime_type') || '',
        ext = $el.attr('data-ext') || false,
        name = $el.attr('id'); // If the media frame already exists, reopen it.

    if ('undefined' !== typeof self.fileFrame[name]) {
      if (ext) {
        self.setUploadParams(ext, name);
      }

      self.fileFrame[name].open();
      return;
    } // Create the media frame.


    self.fileFrame[name] = wp.media({
      library: {
        type: [].concat((0, _toConsumableArray2.default)(mime.split(',')), [mime.split(',').join('')])
      },
      title: $el.data('box_title'),
      button: {
        text: $el.data('box_action')
      },
      multiple: false
    }); // When an file is selected, run a callback.

    self.fileFrame[name].on('select', function () {
      // We set multiple to false so only get one image from the uploader
      var attachment = self.fileFrame[name].state().get('selection').first().toJSON(); // Do something with attachment.id and/or attachment.url here

      jQuery(self.fileId).val(attachment.id);
      jQuery(self.fileUrl).val(attachment.url);
      self.replaceButtonClass(el);
      self.updatePreview(el);
    });
    self.fileFrame[name].on('open', function () {
      var selectedId = _this.fileId.val();

      if (!selectedId) {
        return;
      }

      var selection = self.fileFrame[name].state().get('selection');
      selection.add(wp.media.attachment(selectedId));
    });
    self.setUploadMimeType(self.fileFrame[name], ext); // Finally, open the modal

    self.fileFrame[name].open();

    if (ext) {
      self.setUploadParams(ext, name);
    }
  },
  updatePreview: function updatePreview(el) {
    var self = this,
        $ul = jQuery(el).parent().find('ul'),
        $li = jQuery('<li>'),
        showUrlType = jQuery(el).data('preview_anchor') || 'full';
    $ul.html('');

    if (self.hasValue() && 'none' !== showUrlType) {
      var anchor = jQuery(self.fileUrl).val();

      if ('full' !== showUrlType) {
        anchor = anchor.substring(anchor.lastIndexOf('/') + 1);
      }

      $li.html('<a href="' + jQuery(self.fileUrl).val() + '" download>' + anchor + '</a>');
      $ul.append($li);
    }
  },
  setup: function setup() {
    var self = this;
    jQuery(self.selectors.uploadBtn + ', ' + self.selectors.clearBtn).each(function () {
      self.setFields(jQuery(this));
      self.updatePreview(jQuery(this));
      self.setLabels(jQuery(this));
      self.replaceButtonClass(jQuery(this));
    });
  },
  getPostId: function getPostId() {
    return jQuery('#post_ID').val();
  },
  handleUploadClick: function handleUploadClick(event) {
    event.preventDefault();
    var $element = jQuery(event.target);

    if ('text' === $element.attr('type')) {
      return $element.next().removeClass(this.selectors.clearBtnClass).addClass(this.selectors.uploadBtnClass).click();
    }

    this.$btn = $element;
    this.setFields($element);
    this.uploadFile($element);
  },
  init: function init() {
    var _this2 = this;

    var self = this,
        _this$selectors = this.selectors,
        uploadBtn = _this$selectors.uploadBtn,
        inputURLField = _this$selectors.inputURLField,
        clearBtn = _this$selectors.clearBtn,
        handleUpload = function handleUpload(event) {
      return _this2.handleUploadClick(event);
    };

    jQuery(document).on('click', uploadBtn, handleUpload);
    jQuery(document).on('click', inputURLField, function (event) {
      if ('' !== event.target.value) {
        handleUpload(event);
      }
    });
    jQuery(document).on('click', clearBtn, function (event) {
      event.preventDefault();
      var $element = jQuery(this);
      self.setFields($element);
      jQuery(self.fileUrl).val('');
      jQuery(self.fileId).val('');
      self.updatePreview($element);
      self.replaceButtonClass($element);
    });
    this.setup();
    jQuery(document).on('onRepeaterNewRow', function () {
      self.setup();
    });
  }
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(119);

var iterableToArray = __webpack_require__(120);

var nonIterableSpread = __webpack_require__(121);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 119 */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 120 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 121 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _typeof2 = _interopRequireDefault(__webpack_require__(8));

module.exports = {
  selectors: {
    add: '.add-repeater-row',
    remove: '.remove-repeater-row',
    toggle: '.toggle-repeater-row',
    close: '.close-repeater-row',
    sort: '.sort-repeater-row',
    table: '.form-table',
    block: '.repeater-block',
    repeaterLabel: '.repeater-title',
    repeaterField: '.elementor-field-repeater'
  },
  counters: [],
  trigger: function trigger(eventName, params) {
    jQuery(document).trigger(eventName, params);
  },
  triggerHandler: function triggerHandler(eventName, params) {
    return jQuery(document).triggerHandler(eventName, params);
  },
  countBlocks: function countBlocks($btn) {
    return $btn.closest(this.selectors.repeaterField).find(this.selectors.block).length || 0;
  },
  add: function add(btn) {
    var self = this,
        $btn = jQuery(btn),
        id = $btn.data('template-id'),
        repeaterBlock;

    if (!self.counters.hasOwnProperty(id)) {
      self.counters[id] = self.countBlocks($btn);
    }

    self.counters[id] += 1;
    repeaterBlock = jQuery('#' + id).html();
    repeaterBlock = self.replaceAll('__counter__', self.counters[id], repeaterBlock);
    $btn.before(repeaterBlock);
    self.trigger('onRepeaterNewRow', [$btn, $btn.prev()]);
  },
  remove: function remove(btn) {
    var self = this;
    jQuery(btn).closest(self.selectors.block).remove();
  },
  toggle: function toggle(btn) {
    var self = this,
        $btn = jQuery(btn),
        $table = $btn.closest(self.selectors.block).find(self.selectors.table),
        $toggleLabel = $btn.closest(self.selectors.block).find(self.selectors.repeaterLabel);
    $table.toggle(0, 'none', function () {
      if ($table.is(':visible')) {
        $table.closest(self.selectors.block).addClass('block-visible');
        self.trigger('onRepeaterToggleVisible', [$btn, $table, $toggleLabel]);
      } else {
        $table.closest(self.selectors.block).removeClass('block-visible');
        self.trigger('onRepeaterToggleHidden', [$btn, $table, $toggleLabel]);
      }
    });
    $toggleLabel.toggle(); // Update row label

    self.updateRowLabel(btn);
  },
  close: function close(btn) {
    var self = this,
        $btn = jQuery(btn),
        $table = $btn.closest(self.selectors.block).find(self.selectors.table),
        $toggleLabel = $btn.closest(self.selectors.block).find(self.selectors.repeaterLabel);
    $table.closest(self.selectors.block).removeClass('block-visible');
    $table.hide();
    self.trigger('onRepeaterToggleHidden', [$btn, $table, $toggleLabel]);
    $toggleLabel.show();
    self.updateRowLabel(btn);
  },
  updateRowLabel: function updateRowLabel(btn) {
    var self = this,
        $btn = jQuery(btn),
        $table = $btn.closest(self.selectors.block).find(self.selectors.table),
        $toggleLabel = $btn.closest(self.selectors.block).find(self.selectors.repeaterLabel);
    var selector = $toggleLabel.data('selector'); // For some browsers, `attr` is undefined; for others,  `attr` is false.  Check for both.

    if ((0, _typeof2.default)(selector) !== ( true ? "undefined" : undefined) && false !== selector) {
      var value = false,
          std = $toggleLabel.data('default');

      if ($table.find(selector).length) {
        value = $table.find(selector).val();
      } //filter hook


      var computedLabel = self.triggerHandler('repeaterComputedLabel', [$table, $toggleLabel, value]); // For some browsers, `attr` is undefined; for others,  `attr` is false.  Check for both.

      if (undefined !== computedLabel && false !== computedLabel) {
        value = computedLabel;
      } // Fallback to default row label


      if (undefined === value || false === value) {
        value = std;
      }

      $toggleLabel.html(value);
    }
  },
  replaceAll: function replaceAll(search, replace, string) {
    return string.replace(new RegExp(search, 'g'), replace);
  },
  init: function init() {
    var self = this;
    jQuery(document).on('click', this.selectors.add, function (event) {
      event.preventDefault();
      self.add(jQuery(this), event);
    }).on('click', this.selectors.remove, function (event) {
      event.preventDefault();
      var result = confirm(jQuery(this).data('confirm').toString());

      if (!result) {
        return;
      }

      self.remove(jQuery(this), event);
    }).on('click', this.selectors.toggle, function (event) {
      event.preventDefault();
      event.stopPropagation();
      self.toggle(jQuery(this), event);
    }).on('click', this.selectors.close, function (event) {
      event.preventDefault();
      event.stopPropagation();
      self.close(jQuery(this), event);
    });
    jQuery(this.selectors.toggle).each(function () {
      self.updateRowLabel(jQuery(this));
    });
    this.trigger('onRepeaterLoaded', [this]);
  }
};

/***/ }),
/* 123 */
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

var _customAssetsBase = _interopRequireDefault(__webpack_require__(18));

var _elementorProDropzone = _interopRequireDefault(__webpack_require__(124));

var CustomIcons = /*#__PURE__*/function (_CustomAssetsBase) {
  (0, _inherits2.default)(CustomIcons, _CustomAssetsBase);

  function CustomIcons() {
    (0, _classCallCheck2.default)(this, CustomIcons);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CustomIcons).apply(this, arguments));
  }

  (0, _createClass2.default)(CustomIcons, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        fields: {
          dropzone: _elementorProDropzone.default
        },
        classes: {
          editPageClass: 'post-type-elementor_icons',
          editPhp: 'edit-php',
          hasIcons: 'elementor--has-icons'
        },
        selectors: {
          editPageClass: 'post-type-elementor_icons',
          title: '#title',
          metaboxContainer: '#elementor-custom-icons-metabox',
          metabox: '.elementor-custom-icons-metabox',
          closeHandle: 'button.handlediv',
          iconsTemplate: '#elementor-icons-template',
          dataInput: '#elementor_custom_icon_set_config',
          dropzone: '.zip_upload',
          submitDelete: '.submitdelete',
          dayInput: '#hidden_jj',
          mmInput: '#hidden_mm',
          yearInput: '#hidden_aa',
          hourInput: '#hidden_hh',
          minuteInput: '#hidden_mn',
          publishButton: '#publish',
          publishButtonSpinner: '#publishing-action > .spinner',
          submitMetabox: '#postbox-container-1',
          postForm: '#post',
          fileInput: '#zip_upload',
          iconSetConfigInput: '#elementor_custom_icon_set_config'
        },
        templates: {
          icon: '<li><div class="icon"><i class="{{icon}}"></i><div class="icon-name">{{label}}</div></div></li>',
          header: jQuery('#elementor-custom-icons-template-header').html(),
          footer: jQuery('#elementor-custom-icons-template-footer').html(),
          duplicatePrefix: jQuery('#elementor-custom-icons-template-duplicate-prefix').html()
        },
        notice: ElementorProConfig.i18n.fontsUploadEmptyNotice
      };
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var elements = {},
          selectors = this.getSettings('selectors');
      jQuery.each(selectors, function (element, selector) {
        elements['$' + element] = jQuery(selector);
      });
      return elements;
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var $submitDelete = this.elements.$submitDelete,
          triggerDelete = function triggerDelete() {
        return $submitDelete[0].click();
      };

      elementorCommon.elements.$document.on('click', '.remove', triggerDelete);
      (0, _get2.default)((0, _getPrototypeOf2.default)(CustomIcons.prototype), "bindEvents", this).call(this);

      if ('' !== this.getData()) {
        this.bindOnTitleChange();
      }
    }
  }, {
    key: "bindOnTitleChange",
    value: function bindOnTitleChange() {
      var _this = this;

      var $title = this.elements.$title,
          onTitleInput = function onTitleInput(event) {
        return _this.onTitleInput(event);
      };

      $title.on('input change', onTitleInput);
    }
  }, {
    key: "removeCloseHandle",
    value: function removeCloseHandle() {
      var $metaboxContainer = this.elements.$metaboxContainer;
      $metaboxContainer.find('h2').remove();
      $metaboxContainer.find('button').remove();
      $metaboxContainer.removeClass('closed').removeClass('postbox');
    }
  }, {
    key: "prepareIconName",
    value: function prepareIconName(icon) {
      var iconName = icon.replace('_', ' ').replace('-', ' ');
      return elementorCommon.helpers.upperCaseWords(iconName);
    }
  }, {
    key: "getCreatedOn",
    value: function getCreatedOn() {
      var _this$elements = this.elements,
          $dayInput = _this$elements.$dayInput,
          $mmInput = _this$elements.$mmInput,
          $yearInput = _this$elements.$yearInput,
          $hourInput = _this$elements.$hourInput,
          $minuteInput = _this$elements.$minuteInput;
      return {
        day: $dayInput.val(),
        mm: $mmInput.val(),
        year: $yearInput.val(),
        hour: $hourInput.val(),
        minute: $minuteInput.val()
      };
    }
  }, {
    key: "enqueueCSS",
    value: function enqueueCSS(url) {
      if (!elementorCommon.elements.$document.find('link[href="' + url + '"]').length) {
        elementorCommon.elements.$document.find('link:last').after('<link href="' + url + '" rel="stylesheet" type="text/css">');
      }
    }
  }, {
    key: "setData",
    value: function setData(data) {
      this.elements.$dataInput.val(JSON.stringify(data));
    }
  }, {
    key: "getData",
    value: function getData() {
      var value = this.elements.$dataInput.val();
      return '' === value ? '' : JSON.parse(value);
    }
  }, {
    key: "renderIconList",
    value: function renderIconList(config) {
      var _this2 = this;

      var iconTemplate = this.getSettings('templates.icon');
      return config.icons.map(function (icon) {
        var data = {
          icon: config.displayPrefix + ' ' + config.prefix + icon,
          label: _this2.prepareIconName(icon)
        };
        return elementorCommon.compileTemplate(iconTemplate, data);
      }).join('\n');
    }
  }, {
    key: "renderIcons",
    value: function renderIcons(config) {
      var _this$elements2 = this.elements,
          $metaboxContainer = _this$elements2.$metaboxContainer,
          $metabox = _this$elements2.$metabox,
          $submitMetabox = _this$elements2.$submitMetabox;

      var _this$getSettings = this.getSettings('templates'),
          header = _this$getSettings.header,
          footer = _this$getSettings.footer;

      $metaboxContainer.addClass(this.getSettings('classes.hasIcons'));
      $submitMetabox.show();
      this.setData(config);
      this.enqueueCSS(config.url);
      $metabox.html('');
      $metaboxContainer.prepend(elementorCommon.compileTemplate(header, config));
      $metabox.append('<ul>' + this.renderIconList(config) + '</ul>');
      $metaboxContainer.append(elementorCommon.compileTemplate(footer, this.getCreatedOn()));
    }
  }, {
    key: "onTitleInput",
    value: function onTitleInput(event) {
      var data = this.getData();
      data.label = event.target.value;
      this.setData(data);
    }
  }, {
    key: "checkInputsForValues",
    value: function checkInputsForValues() {
      // If creating new icon set - check the file input for a value
      // If editing an existing icon set - check the icon set config input for a value
      if ('' !== this.elements.$fileInput.val() || '' !== this.elements.$iconSetConfigInput.val()) {
        return true;
      }

      return false;
    }
  }, {
    key: "onSuccess",
    value: function onSuccess(data) {
      var _this3 = this;

      // it is possible to add a `dropzoneElement` param to this method for implementing upload progress bar
      if (data.data.errors) {
        var id, message;
        jQuery.each(data.data.errors, function (errorId, errorMessage) {
          id = errorId;
          message = errorMessage;
          return false;
        });
        return this.showAlertDialog(id, message);
      }

      if (data.data.config.duplicate_prefix) {
        delete data.data.config.duplicatePrefix;
        return this.showAlertDialog('duplicate-prefix', this.getSettings('templates.duplicatePrefix'), function () {
          return _this3.saveInitialUpload(data.data.config);
        });
      }

      this.saveInitialUpload(data.data.config);
    }
  }, {
    key: "saveInitialUpload",
    value: function saveInitialUpload(config) {
      this.setData(config);
      var _this$elements3 = this.elements,
          $publishButton = _this$elements3.$publishButton,
          $title = _this$elements3.$title,
          $submitMetabox = _this$elements3.$submitMetabox;
      $submitMetabox.show();

      if ('' === $title.val()) {
        $title.val(config.name);
      }

      this.fileWasUploaded = true; // Flag to prevent infinite loop in the handleSubmit() method

      $publishButton.click();
    }
  }, {
    key: "onInit",
    value: function onInit() {
      var _this4 = this;

      var $body = elementorCommon.elements.$body,
          _this$getSettings2 = this.getSettings('classes'),
          editPageClass = _this$getSettings2.editPageClass,
          editPhp = _this$getSettings2.editPhp;

      if (!$body.hasClass(editPageClass) || $body.hasClass(editPhp)) {
        return;
      }

      (0, _get2.default)((0, _getPrototypeOf2.default)(CustomIcons.prototype), "onInit", this).call(this);
      this.removeCloseHandle();
      var dropzoneFieldClass = this.getSettings('fields.dropzone'),
          dropzoneField = new dropzoneFieldClass(),
          config = this.getData(),
          _this$elements4 = this.elements,
          $dropzone = _this$elements4.$dropzone,
          $metaboxContainer = _this$elements4.$metaboxContainer;

      if ('' === config) {
        $dropzone.show('fast');
        dropzoneField.setSettings('onSuccess', function () {
          return _this4.onSuccess.apply(_this4, arguments);
        });
      } else {
        this.renderIcons(config);
      }

      $metaboxContainer.show('fast');
    }
  }]);
  return CustomIcons;
}(_customAssetsBase.default);

var _default = CustomIcons;
exports.default = _default;

/***/ }),
/* 124 */
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

var DropZoneField = /*#__PURE__*/function (_elementorModules$Vie) {
  (0, _inherits2.default)(DropZoneField, _elementorModules$Vie);

  function DropZoneField() {
    (0, _classCallCheck2.default)(this, DropZoneField);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DropZoneField).apply(this, arguments));
  }

  (0, _createClass2.default)(DropZoneField, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      var baseSelector = '.elementor-dropzone-field';
      return {
        droppedFiles: false,
        selectors: {
          dropZone: baseSelector,
          input: baseSelector + ' [type="file"]',
          label: baseSelector + 'label',
          errorMsg: baseSelector + '.box__error span',
          restart: baseSelector + '.box__restart',
          browseButton: baseSelector + ' .elementor--dropzone--upload__browse',
          postId: '#post_ID'
        },
        classes: {
          drag: 'is-dragover',
          error: 'is-error',
          success: 'is-success',
          upload: 'is-uploading'
        },
        onSuccess: null,
        onError: null
      };
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var elements = {};
      var selectors = this.getSettings('selectors');
      jQuery.each(selectors, function (element, selector) {
        elements['$' + element] = jQuery(selector);
      });
      return elements;
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      var _this$elements = this.elements,
          $dropZone = _this$elements.$dropZone,
          $browseButton = _this$elements.$browseButton,
          $input = _this$elements.$input;

      var _this$getSettings = this.getSettings('classes'),
          drag = _this$getSettings.drag;

      $browseButton.on('click', function () {
        return $input.click();
      });
      $dropZone.on('drag dragstart dragend dragover dragenter dragleave drop', function (event) {
        event.preventDefault();
        event.stopPropagation();
      }).on('dragover dragenter', function () {
        $dropZone.addClass(drag);
      }).on('dragleave dragend drop', function () {
        $dropZone.removeClass(drag);
      }).on('drop change', function (event) {
        if ('change' === event.type) {
          _this.setSettings('droppedFiles', event.originalEvent.target.files);
        } else {
          _this.setSettings('droppedFiles', event.originalEvent.dataTransfer.files);
        }

        _this.handleUpload();
      });
    }
  }, {
    key: "handleUpload",
    value: function handleUpload() {
      var _arguments = arguments;
      var droppedFiles = this.getSettings('droppedFiles');

      if (!droppedFiles) {
        return;
      }

      var _this$elements2 = this.elements,
          $input = _this$elements2.$input,
          $dropZone = _this$elements2.$dropZone,
          $postId = _this$elements2.$postId,
          $errorMsg = _this$elements2.$errorMsg,
          _this$getSettings2 = this.getSettings('classes'),
          error = _this$getSettings2.error,
          _success = _this$getSettings2.success,
          upload = _this$getSettings2.upload,
          _this$getSettings3 = this.getSettings(),
          onSuccess = _this$getSettings3.onSuccess,
          onError = _this$getSettings3.onError,
          ajaxData = new FormData(),
          fieldName = $input.attr('name'),
          actionKey = 'pro_assets_manager_custom_icon_upload',
          self = this;

      Object.entries(droppedFiles).forEach(function (file) {
        ajaxData.append(fieldName, file[1]);
      });
      ajaxData.append('actions', JSON.stringify({
        pro_assets_manager_custom_icon_upload: {
          action: actionKey,
          data: {
            post_id: $postId.val()
          }
        }
      }));
      $dropZone.removeClass(_success).removeClass(error);
      elementorCommon.ajax.send('ajax', {
        data: ajaxData,
        cache: false,
        enctype: 'multipart/form-data',
        contentType: false,
        processData: false,
        //TODO: Do something with upload progress

        /*xhr: () => {
        	const xhr = jQuery.ajaxSettings.xhr();
        	xhr.upload.onprogress = ( evt ) => {
        		if ( evt.lengthComputable ) {
        			const percentComplete = Math.round( ( evt.loaded * 100 / evt.total ) );
        		}
        	};
        		return xhr;
        },*/
        complete: function complete() {
          $dropZone.removeClass(upload);
        },
        success: function success(response) {
          var data = response.responses[actionKey];
          $dropZone.addClass(data.success ? _success : error);

          if (data.success) {
            if (onSuccess) {
              onSuccess(data, self);
            }
          } else {
            $errorMsg.text(data.error);

            if (onError) {
              onError(self, _arguments);
            }
          }
        },
        error: function error() {
          if ('function' === typeof onError) {
            onError(self, _arguments);
          }
        }
      });
    }
  }, {
    key: "onInit",
    value: function onInit() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(DropZoneField.prototype), "onInit", this).call(this);
      elementorCommon.elements.$document.trigger('onDropzoneLoaded', [this]);
    }
  }]);
  return DropZoneField;
}(elementorModules.ViewModule);

var _default = DropZoneField;
exports.default = _default;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var self = this;

  self.cacheElements = function () {
    this.cache = {
      $button: jQuery('#elementor_pro_typekit_validate_button'),
      $kitIdField: jQuery('#elementor_typekit-kit-id'),
      $dataLabelSpan: jQuery('.elementor-pro-typekit-data')
    };
  };

  self.bindEvents = function () {
    this.cache.$button.on('click', function (event) {
      event.preventDefault();
      self.fetchFonts();
    });
    this.cache.$kitIdField.on('change', function () {
      self.setState('clear');
    });
  };

  self.fetchFonts = function () {
    this.setState('loading');
    this.cache.$dataLabelSpan.addClass('hidden');
    var kitID = this.cache.$kitIdField.val();

    if ('' === kitID) {
      this.setState('clear');
      return;
    }

    jQuery.post(ajaxurl, {
      action: 'elementor_pro_admin_fetch_fonts',
      kit_id: kitID,
      _nonce: self.cache.$button.data('nonce')
    }).done(function (data) {
      if (data.success) {
        var template = self.cache.$button.data('found');
        template = template.replace('{{count}}', data.data.count);
        self.cache.$dataLabelSpan.html(template).removeClass('hidden');
        self.setState('success');
      } else {
        self.setState('error');
      }
    }).fail(function () {
      self.setState();
    });
  };

  self.setState = function (type) {
    var classes = ['loading', 'success', 'error'],
        currentClass,
        classIndex;

    for (classIndex in classes) {
      currentClass = classes[classIndex];

      if (type === currentClass) {
        this.cache.$button.addClass(currentClass);
      } else {
        this.cache.$button.removeClass(currentClass);
      }
    }
  };

  self.init = function () {
    this.cacheElements();
    this.bindEvents();
  };

  self.init();
};

/***/ }),
/* 126 */
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

var _default = /*#__PURE__*/function (_elementorModules$Vie) {
  (0, _inherits2.default)(_default, _elementorModules$Vie);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_default).apply(this, arguments));
  }

  (0, _createClass2.default)(_default, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        selectors: {
          button: '#elementor_pro_fa_pro_validate_button',
          kitIdField: '#elementor_font_awesome_pro_kit_id'
        }
      };
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var elements = {};
      var selectors = this.getSettings('selectors');
      jQuery.each(selectors, function (element, selector) {
        elements['$' + element] = jQuery(selector);
      });
      return elements;
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      var _this$elements = this.elements,
          $button = _this$elements.$button,
          $kitIdField = _this$elements.$kitIdField;
      $button.on('click', function (event) {
        event.preventDefault();

        _this.testKitUrl();
      });
      $kitIdField.on('change', function () {
        _this.setState('clear');
      });
    }
  }, {
    key: "setState",
    value: function setState(type) {
      var classes = ['loading', 'success', 'error'],
          $button = this.elements.$button;
      var currentClass, classIndex;

      for (classIndex in classes) {
        currentClass = classes[classIndex];

        if (type === currentClass) {
          $button.addClass(currentClass);
        } else {
          $button.removeClass(currentClass);
        }
      }
    }
  }, {
    key: "testKitUrl",
    value: function testKitUrl() {
      this.setState('loading');
      var self = this,
          kitID = this.elements.$kitIdField.val();

      if ('' === kitID) {
        this.setState('clear');
        return;
      }

      jQuery.ajax({
        url: 'https://kit.fontawesome.com/' + kitID + '.js',
        method: 'GET',
        complete: function complete(xhr) {
          if (200 !== xhr.status) {
            self.setState('error');
          } else {
            self.setState('success');
          }
        }
      });
    }
  }]);
  return _default;
}(elementorModules.ViewModule);

exports.default = _default;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var AdvancedRoleManager = __webpack_require__(128);

  this.advancedRoleManager = new AdvancedRoleManager();
};

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var self = this;

  self.cacheElements = function () {
    this.cache = {
      $checkBox: jQuery('input[name="elementor_exclude_user_roles[]"]'),
      $advanced: jQuery('#elementor_advanced_role_manager')
    };
  };

  self.bindEvents = function () {
    this.cache.$checkBox.on('change', function (event) {
      event.preventDefault();
      self.checkBoxUpdate(jQuery(this));
    });
  };

  self.checkBoxUpdate = function ($element) {
    var role = $element.val();

    if ($element.is(':checked')) {
      self.cache.$advanced.find('div.' + role).addClass('hidden');
    } else {
      self.cache.$advanced.find('div.' + role).removeClass('hidden');
    }
  };

  self.init = function () {
    if (!jQuery('body').hasClass('elementor_page_elementor-role-manager')) {
      return;
    }

    this.cacheElements();
    this.bindEvents();
  };

  self.init();
};

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var CreateTemplateDialog = __webpack_require__(130);

  this.createTemplateDialog = new CreateTemplateDialog();
};

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var selectors = {
    templateTypeInput: '#elementor-new-template__form__template-type',
    locationWrapper: '#elementor-new-template__form__location__wrapper',
    postTypeWrapper: '#elementor-new-template__form__post-type__wrapper'
  };
  var elements = {
    $templateTypeInput: null,
    $locationWrapper: null,
    $postTypeWrapper: null
  };

  var setElements = function setElements() {
    jQuery.each(selectors, function (key, selector) {
      key = '$' + key;
      elements[key] = elementorNewTemplate.layout.getModal().getElements('content').find(selector);
    });
  };

  var setLocationFieldVisibility = function setLocationFieldVisibility() {
    elements.$locationWrapper.toggle('section' === elements.$templateTypeInput.val());
    elements.$postTypeWrapper.toggle('single' === elements.$templateTypeInput.val());
  };

  var run = function run() {
    setElements();
    setLocationFieldVisibility();
    elements.$templateTypeInput.change(setLocationFieldVisibility);
  };

  this.init = function () {
    if (!window.elementorNewTemplate) {
      return;
    } // Make sure the modal has already been initialized


    elementorNewTemplate.layout.getModal();
    run();
  };

  jQuery(setTimeout.bind(window, this.init));
};

/***/ })
/******/ ]);
//# sourceMappingURL=admin.js.map
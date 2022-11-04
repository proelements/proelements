/*! pro-elements - v3.8.0 - 30-10-2022 */
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["modules_query-control_assets_js_editor_template-query-control_js"],{

/***/ "../modules/query-control/assets/js/editor/template-query-control.js":
/*!***************************************************************************!*\
  !*** ../modules/query-control/assets/js/editor/template-query-control.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "../node_modules/core-js/modules/es.reflect.to-string-tag.js");

__webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "../node_modules/core-js/modules/es.reflect.construct.js");

__webpack_require__(/*! core-js/modules/es.object.keys.js */ "../node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "../node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.array.filter.js */ "../node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "../node_modules/core-js/modules/es.object.get-own-property-descriptor.js");

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "../node_modules/core-js/modules/es.object.get-own-property-descriptors.js");

__webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "../node_modules/core-js/modules/es.object.define-properties.js");

__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "../node_modules/core-js/modules/es.object.define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js"));

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "../node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.parse-int.js */ "../node_modules/core-js/modules/es.parse-int.js");

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js"));

var _get4 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "../node_modules/@babel/runtime/helpers/get.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _queryControl = _interopRequireDefault(__webpack_require__(/*! ./query-control */ "../modules/query-control/assets/js/editor/query-control.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var TemplateQueryControl = /*#__PURE__*/function (_QueryControl) {
  (0, _inherits2["default"])(TemplateQueryControl, _QueryControl);

  var _super = _createSuper(TemplateQueryControl);

  function TemplateQueryControl() {
    (0, _classCallCheck2["default"])(this, TemplateQueryControl);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(TemplateQueryControl, [{
    key: "ui",
    value: function ui() {
      return _objectSpread(_objectSpread({}, (0, _get4["default"])((0, _getPrototypeOf2["default"])(TemplateQueryControl.prototype), "ui", this).call(this)), {}, {
        newButton: 'button[data-action="new"]',
        editButton: 'button[data-action="edit"]'
      });
    }
  }, {
    key: "events",
    value: function events() {
      return _objectSpread(_objectSpread({}, (0, _get4["default"])((0, _getPrototypeOf2["default"])(TemplateQueryControl.prototype), "events", this).call(this)), {}, {
        'click @ui.newButton': 'onNewButtonClicked',
        'click @ui.editButton': 'onEditButtonClicked'
      });
    }
  }, {
    key: "onRender",
    value: function onRender() {
      var _get2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_get2 = (0, _get4["default"])((0, _getPrototypeOf2["default"])(TemplateQueryControl.prototype), "onRender", this)).call.apply(_get2, [this].concat(args));

      this.toggleButtons(this.getControlValue());
    }
  }, {
    key: "onBaseInputChange",
    value: function onBaseInputChange() {
      var _get3;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      (_get3 = (0, _get4["default"])((0, _getPrototypeOf2["default"])(TemplateQueryControl.prototype), "onBaseInputChange", this)).call.apply(_get3, [this].concat(args));

      this.toggleButtons(this.getInputValue(args[0].currentTarget));
    }
  }, {
    key: "toggleButtons",
    value: function toggleButtons(templateID) {
      if (!templateID) {
        this.showNewTemplateButton();
      } else {
        this.showEditTemplateButton();
      }
    }
  }, {
    key: "showNewTemplateButton",
    value: function showNewTemplateButton() {
      this.ui.newButton.get(0).style.display = 'block';
      this.ui.editButton.get(0).style.display = 'none';
    }
  }, {
    key: "showEditTemplateButton",
    value: function showEditTemplateButton() {
      this.ui.newButton.get(0).style.display = 'none';
      this.ui.editButton.get(0).style.display = 'block';
    }
  }, {
    key: "onNewButtonClicked",
    value: function () {
      var _onNewButtonClicked = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.createTemplate();

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onNewButtonClicked() {
        return _onNewButtonClicked.apply(this, arguments);
      }

      return onNewButtonClicked;
    }()
    /**
     * This function is used to create a new template via the REST API.
     * We first show a confirm dialog so the user knows that the current document will be saved while creating
     * and editing a new template. If the user chooses to cancel the process will not continue,
     * and if confirmed the new template is created and the Editor switched to this newly created template.
     *
     * @since 3.8.0
     *
     * @return {void}
     */

  }, {
    key: "createTemplate",
    value: function createTemplate() {
      var _this = this;

      if (!this.confirmSaveBeforeTemplateCreateDialog) {
        this.confirmSaveBeforeTemplateCreateDialog = elementorCommon.dialogsManager.createWidget('confirm', {
          id: 'e-confirm-save-before-template-create',
          headerMessage: __('Save Changes', 'elementor-pro'),
          message: __('Would you like to save the changes you\'ve made?', 'elementor-pro'),
          position: {
            my: 'center center',
            at: 'center center'
          },
          strings: {
            confirm: __('Save', 'elementor-pro'),
            cancel: __('Discard', 'elementor-pro')
          },
          onConfirm: function onConfirm() {
            _this.onConfirmCreateTemplate();
          },
          onCancel: function onCancel() {}
        });
      }

      this.confirmSaveBeforeTemplateCreateDialog.show();
    }
  }, {
    key: "onConfirmCreateTemplate",
    value: function () {
      var _onConfirmCreateTemplate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var controlId, newTemplateType, newTemplateSource, newTemplate, templateID;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                controlId = this.model.get('name');
                newTemplateType = this.options.container.controls[controlId].actions["new"].document_config.type;
                newTemplateSource = this.options.container.controls._skin ? this.options.container.panel.getControlView('_skin').getControlValue() : undefined;
                _context2.next = 5;
                return $e.data.create('library/templates', {
                  type: newTemplateType,
                  page_settings: {
                    source: newTemplateSource
                  }
                });

              case 5:
                newTemplate = _context2.sent;
                templateID = parseInt(newTemplate.data.template_id);
                _context2.next = 9;
                return this.setValue(templateID);

              case 9:
                this.switchDocument(templateID);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onConfirmCreateTemplate() {
        return _onConfirmCreateTemplate.apply(this, arguments);
      }

      return onConfirmCreateTemplate;
    }()
    /**
     * Function to switch the Editor when a user clicks to create a new template or edit the chosen template.
     *
     * @since 3.8.0
     *
     * @param {string|number} id
     *
     * @return {Promise<void>}
     */

  }, {
    key: "switchDocument",
    value: function () {
      var _switchDocument = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                $e.internal('panel/state-loading');
                _context3.next = 3;
                return $e.run('editor/documents/switch', {
                  id: parseInt(id),
                  mode: 'autosave'
                });

              case 3:
                $e.internal('panel/state-ready');

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function switchDocument(_x) {
        return _switchDocument.apply(this, arguments);
      }

      return switchDocument;
    }()
  }, {
    key: "onEditButtonClicked",
    value: function () {
      var _onEditButtonClicked = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.switchDocument(this.getControlValue());

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function onEditButtonClicked() {
        return _onEditButtonClicked.apply(this, arguments);
      }

      return onEditButtonClicked;
    }()
  }, {
    key: "getSelect2Placeholder",
    value: function getSelect2Placeholder() {
      return {
        id: '',
        text: __('Start typing its name', 'elementor-pro')
      };
    }
  }]);
  return TemplateQueryControl;
}(_queryControl["default"]);

exports["default"] = TemplateQueryControl;

/***/ }),

/***/ "../node_modules/core-js/modules/es.object.define-properties.js":
/*!**********************************************************************!*\
  !*** ../node_modules/core-js/modules/es.object.define-properties.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var defineProperties = (__webpack_require__(/*! ../internals/object-define-properties */ "../node_modules/core-js/internals/object-define-properties.js").f);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es-x/no-object-defineproperties -- safe
$({ target: 'Object', stat: true, forced: Object.defineProperties !== defineProperties, sham: !DESCRIPTORS }, {
  defineProperties: defineProperties
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.object.get-own-property-descriptors.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/core-js/modules/es.object.get-own-property-descriptors.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "../node_modules/core-js/internals/own-keys.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/core-js/internals/to-indexed-object.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../node_modules/core-js/internals/object-get-own-property-descriptor.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "../node_modules/core-js/internals/create-property.js");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ })

}]);
//# sourceMappingURL=e861d21c4c1f2400d90f.bundle.js.map
/*! pro-elements - v3.2.0 - 14-03-2021 */
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["social"],{

/***/ "../modules/social/assets/js/frontend/handlers/facebook.js":
/*!*****************************************************************!*\
  !*** ../modules/social/assets/js/frontend/handlers/facebook.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _get3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/get */ "../node_modules/@babel/runtime-corejs2/helpers/get.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var FacebookHandler = /*#__PURE__*/function (_elementorModules$fro) {
  (0, _inherits2.default)(FacebookHandler, _elementorModules$fro);

  var _super = (0, _createSuper2.default)(FacebookHandler);

  function FacebookHandler() {
    (0, _classCallCheck2.default)(this, FacebookHandler);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(FacebookHandler, [{
    key: "getConfig",
    value: function getConfig() {
      return elementorProFrontend.config.facebook_sdk;
    }
  }, {
    key: "setConfig",
    value: function setConfig(prop, value) {
      elementorProFrontend.config.facebook_sdk[prop] = value;
    }
  }, {
    key: "parse",
    value: function parse() {
      // On FB SDK is loaded, parse current element
      FB.XFBML.parse(this.$element[0]);
    }
  }, {
    key: "loadSDK",
    value: function loadSDK() {
      var _this = this;

      var config = this.getConfig(); // Preventing from ajax request to be sent multiple times when loading multiple widgets

      if (config.isLoading || config.isLoaded) {
        return;
      }

      this.setConfig('isLoading', true);
      jQuery.ajax({
        url: 'https://connect.facebook.net/' + config.lang + '/sdk.js',
        dataType: 'script',
        cache: true,
        success: function success() {
          FB.init({
            appId: config.app_id,
            version: 'v2.10',
            xfbml: false
          });

          _this.setConfig('isLoaded', true);

          _this.setConfig('isLoading', false);

          elementorFrontend.elements.$document.trigger('fb:sdk:loaded');
        }
      });
    }
  }, {
    key: "onInit",
    value: function onInit() {
      var _get2,
          _this2 = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_get2 = (0, _get3.default)((0, _getPrototypeOf2.default)(FacebookHandler.prototype), "onInit", this)).call.apply(_get2, [this].concat(args));

      this.loadSDK();
      var config = this.getConfig();

      if (config.isLoaded) {
        this.parse();
      } else {
        elementorFrontend.elements.$document.on('fb:sdk:loaded', function () {
          return _this2.parse();
        });
      }
    }
  }]);
  return FacebookHandler;
}(elementorModules.frontend.handlers.Base);

exports.default = FacebookHandler;

/***/ })

}]);
//# sourceMappingURL=social.3d098e67c2733abd1e00.bundle.js.map
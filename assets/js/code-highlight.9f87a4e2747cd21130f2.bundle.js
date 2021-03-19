/*! pro-elements - v3.2.0 - 14-03-2021 */
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["code-highlight"],{

/***/ "../modules/code-highlight/assets/js/frontend/handler.js":
/*!***************************************************************!*\
  !*** ../modules/code-highlight/assets/js/frontend/handler.js ***!
  \***************************************************************/
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

var codeHighlightHandler = /*#__PURE__*/function (_elementorModules$fro) {
  (0, _inherits2.default)(codeHighlightHandler, _elementorModules$fro);

  var _super = (0, _createSuper2.default)(codeHighlightHandler);

  function codeHighlightHandler() {
    (0, _classCallCheck2.default)(this, codeHighlightHandler);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(codeHighlightHandler, [{
    key: "onInit",
    value: function onInit() {
      var _get2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_get2 = (0, _get3.default)((0, _getPrototypeOf2.default)(codeHighlightHandler.prototype), "onInit", this)).call.apply(_get2, [this].concat(args));

      Prism.highlightAllUnder(this.$element[0], false);
    }
  }, {
    key: "onElementChange",
    value: function onElementChange() {
      // Handle the changes for "Word Wrap" feature
      Prism.highlightAllUnder(this.$element[0], false);
    }
  }]);
  return codeHighlightHandler;
}(elementorModules.frontend.handlers.Base);

exports.default = codeHighlightHandler;

/***/ })

}]);
//# sourceMappingURL=code-highlight.9f87a4e2747cd21130f2.bundle.js.map
/*! pro-elements - v3.14.0 - 18-06-2023 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["nested-carousel-editor"],{

/***/ "../modules/nested-carousel/assets/js/editor/module.js":
/*!*************************************************************!*\
  !*** ../modules/nested-carousel/assets/js/editor/module.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _nestedCarousel = _interopRequireDefault(__webpack_require__(/*! ./nested-carousel */ "../modules/nested-carousel/assets/js/editor/nested-carousel.js"));
class Module {
  constructor() {
    elementor.elementsManager.registerElementType(new _nestedCarousel.default());
  }
}
exports["default"] = Module;

/***/ }),

/***/ "../modules/nested-carousel/assets/js/editor/nested-carousel.js":
/*!**********************************************************************!*\
  !*** ../modules/nested-carousel/assets/js/editor/nested-carousel.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.NestedCarousel = void 0;
class NestedCarousel extends elementor.modules.elements.types.NestedElementBase {
  getType() {
    return 'nested-carousel';
  }
}
exports.NestedCarousel = NestedCarousel;
var _default = NestedCarousel;
exports["default"] = _default;

/***/ })

}]);
//# sourceMappingURL=nested-carousel-editor.04e1965a317cbb6d22df.bundle.js.map
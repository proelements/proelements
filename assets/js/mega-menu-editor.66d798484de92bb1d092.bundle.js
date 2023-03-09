/*! pro-elements - v3.11.3 - 26-02-2023 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["mega-menu-editor"],{

/***/ "../modules/mega-menu/assets/js/editor/mega-menu.js":
/*!**********************************************************!*\
  !*** ../modules/mega-menu/assets/js/editor/mega-menu.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.MegaMenu = void 0;
class MegaMenu extends elementor.modules.elements.types.NestedElementBase {
  getType() {
    return 'mega-menu';
  }
}
exports.MegaMenu = MegaMenu;
var _default = MegaMenu;
exports["default"] = _default;

/***/ }),

/***/ "../modules/mega-menu/assets/js/editor/module.js":
/*!*******************************************************!*\
  !*** ../modules/mega-menu/assets/js/editor/module.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _megaMenu = _interopRequireDefault(__webpack_require__(/*! ./mega-menu */ "../modules/mega-menu/assets/js/editor/mega-menu.js"));
class Module {
  constructor() {
    elementor.elementsManager.registerElementType(new _megaMenu.default());
  }
}
exports["default"] = Module;

/***/ })

}]);
//# sourceMappingURL=mega-menu-editor.66d798484de92bb1d092.bundle.js.map
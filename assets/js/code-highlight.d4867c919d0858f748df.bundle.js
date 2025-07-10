/*! elementor-pro - v3.30.0 - 01-07-2025 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["code-highlight"],{

/***/ "../modules/code-highlight/assets/js/frontend/handler.js":
/*!***************************************************************!*\
  !*** ../modules/code-highlight/assets/js/frontend/handler.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class codeHighlightHandler extends elementorModules.frontend.handlers.Base {
  onInit() {
    super.onInit(...arguments);
    Prism.highlightAllUnder(this.$element[0], false);
  }
  onElementChange() {
    // Handle the changes for "Word Wrap" feature
    Prism.highlightAllUnder(this.$element[0], false);
  }
}
exports["default"] = codeHighlightHandler;

/***/ })

}]);
//# sourceMappingURL=code-highlight.d4867c919d0858f748df.bundle.js.map
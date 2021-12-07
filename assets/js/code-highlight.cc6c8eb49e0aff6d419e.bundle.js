/*! pro-elements - v3.5.1 - 10-11-2021 */
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["code-highlight"],{

/***/ "../modules/code-highlight/assets/js/frontend/handler.js":
/*!***************************************************************!*\
  !*** ../modules/code-highlight/assets/js/frontend/handler.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

class codeHighlightHandler extends elementorModules.frontend.handlers.Base {
  onInit(...args) {
    super.onInit(...args);
    Prism.highlightAllUnder(this.$element[0], false);
  }

  onElementChange() {
    // Handle the changes for "Word Wrap" feature
    Prism.highlightAllUnder(this.$element[0], false);
  }

}

exports.default = codeHighlightHandler;

/***/ })

}]);
//# sourceMappingURL=code-highlight.cc6c8eb49e0aff6d419e.bundle.js.map
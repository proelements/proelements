/*! pro-elements - v3.3.1 - 20-06-2021 */
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["share-buttons"],{

/***/ "../modules/share-buttons/assets/js/frontend/handlers/share-buttons.js":
/*!*****************************************************************************!*\
  !*** ../modules/share-buttons/assets/js/frontend/handlers/share-buttons.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(/*! core-js/modules/es6.array.find.js */ "../node_modules/core-js/modules/es6.array.find.js");

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

var _default = elementorModules.frontend.handlers.Base.extend({
  onInit: function onInit() {
    var _arguments = arguments,
        _this = this;

    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var elementSettings, classes, isCustomURL, shareLinkSettings;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (_this.isActive()) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              elementorModules.frontend.handlers.Base.prototype.onInit.apply(_this, _arguments);
              elementSettings = _this.getElementSettings(), classes = _this.getSettings('classes'), isCustomURL = elementSettings.share_url && elementSettings.share_url.url, shareLinkSettings = {
                classPrefix: classes.shareLinkPrefix
              };

              if (isCustomURL) {
                shareLinkSettings.url = elementSettings.share_url.url;
              } else {
                shareLinkSettings.url = location.href;
                shareLinkSettings.title = elementorFrontend.config.post.title;
                shareLinkSettings.text = elementorFrontend.config.post.excerpt;
                shareLinkSettings.image = elementorFrontend.config.post.featuredImage;
              }
              /**
               * First check of the ShareLink is for detecting if the optimized mode is disabled and the library should be loaded dynamically.
               * Checking if the assetsLoader exist, in case that the library is not loaded due to Ad Blockers and not because the optimized mode is enabled.
               */


              if (!(!window.ShareLink && elementorFrontend.utils.assetsLoader)) {
                _context.next = 8;
                break;
              }

              _context.next = 8;
              return elementorFrontend.utils.assetsLoader.load('script', 'share-link');

            case 8:
              if (_this.elements.$shareButton.shareLink) {
                _context.next = 10;
                break;
              }

              return _context.abrupt("return");

            case 10:
              _this.elements.$shareButton.shareLink(shareLinkSettings);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  getDefaultSettings: function getDefaultSettings() {
    return {
      selectors: {
        shareButton: '.elementor-share-btn'
      },
      classes: {
        shareLinkPrefix: 'elementor-share-btn_'
      }
    };
  },
  getDefaultElements: function getDefaultElements() {
    var selectors = this.getSettings('selectors');
    return {
      $shareButton: this.$element.find(selectors.shareButton)
    };
  },
  isActive: function isActive() {
    return !elementorFrontend.isEditMode();
  }
});

exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=share-buttons.a4ac583614766c17243b.bundle.js.map
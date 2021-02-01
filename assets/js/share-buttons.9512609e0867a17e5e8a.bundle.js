/*! pro-elements - v3.0.10 - 20-01-2021 */
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["share-buttons"],{

/***/ "../modules/share-buttons/assets/js/frontend/handlers/share-buttons.js":
/*!*****************************************************************************!*\
  !*** ../modules/share-buttons/assets/js/frontend/handlers/share-buttons.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(/*! core-js/modules/es6.array.find */ "../node_modules/core-js/modules/es6.array.find.js");

var _default = elementorModules.frontend.handlers.Base.extend({
  onInit: function onInit() {
    if (!this.isActive()) {
      return;
    }

    elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);
    var elementSettings = this.getElementSettings(),
        classes = this.getSettings('classes'),
        isCustomURL = elementSettings.share_url && elementSettings.share_url.url,
        shareLinkSettings = {
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
     * Ad Blockers may block the share script. (/assets/lib/social-share/social-share.js).
     */


    if (!this.elements.$shareButton.shareLink) {
      return;
    }

    this.elements.$shareButton.shareLink(shareLinkSettings);
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
//# sourceMappingURL=share-buttons.9512609e0867a17e5e8a.bundle.js.map
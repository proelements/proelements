/*! pro-elements - v3.23.0 - 05-08-2024 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["share-buttons"],{

/***/ "../assets/dev/js/frontend/utils/handle-parameter-pollution.js":
/*!*********************************************************************!*\
  !*** ../assets/dev/js/frontend/utils/handle-parameter-pollution.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = handleParameterPollution;
function handleParameterPollution(inputURL) {
  const urlObject = new URL(inputURL),
    mainDomain = urlObject.hostname,
    params = new URLSearchParams(urlObject.search),
    paramKeysToCheck = ['u']; // Can add more items if we find more problems with other social networks.

  paramKeysToCheck.forEach(key => {
    const paramValue = params.get(key);
    if (paramValue) {
      try {
        const paramDomain = new URL(paramValue).hostname;
        if (paramDomain !== mainDomain) {
          params.delete(key);
        }
      } catch (error) {
        params.delete(key);
      }
    }
  });
  urlObject.search = params.toString();
  return urlObject.toString();
}

/***/ }),

/***/ "../modules/share-buttons/assets/js/frontend/handlers/share-buttons.js":
/*!*****************************************************************************!*\
  !*** ../modules/share-buttons/assets/js/frontend/handlers/share-buttons.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _handleParameterPollution = _interopRequireDefault(__webpack_require__(/*! elementor-pro/frontend/utils/handle-parameter-pollution */ "../assets/dev/js/frontend/utils/handle-parameter-pollution.js"));
var _default = exports["default"] = elementorModules.frontend.handlers.Base.extend({
  async onInit() {
    if (!this.isActive()) {
      return;
    }
    elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);
    const elementSettings = this.getElementSettings(),
      classes = this.getSettings('classes'),
      isCustomURL = elementSettings.share_url && elementSettings.share_url.url,
      shareLinkSettings = {
        classPrefix: classes.shareLinkPrefix
      };
    if (isCustomURL) {
      shareLinkSettings.url = elementSettings.share_url.url;
    } else {
      shareLinkSettings.url = (0, _handleParameterPollution.default)(location.href);
      shareLinkSettings.title = elementorFrontend.config.post.title;
      shareLinkSettings.text = elementorFrontend.config.post.excerpt;
      shareLinkSettings.image = elementorFrontend.config.post.featuredImage;
    }

    /**
     * First check of the ShareLink is for detecting if the optimized mode is disabled and the library should be loaded dynamically.
     * Checking if the assetsLoader exist, in case that the library is not loaded due to Ad Blockers and not because the optimized mode is enabled.
     */
    if (!window.ShareLink && elementorFrontend.utils.assetsLoader) {
      await elementorFrontend.utils.assetsLoader.load('script', 'share-link');
    }

    /**
     * The following condition should remain regardless of the share-link dynamic loading.
     * Ad Blockers may block the share script. (/assets/lib/share-link/share-link.js).
     */
    if (!this.elements.$shareButton.shareLink) {
      return;
    }
    this.elements.$shareButton.shareLink(shareLinkSettings);
  },
  getDefaultSettings() {
    return {
      selectors: {
        shareButton: '.elementor-share-btn'
      },
      classes: {
        shareLinkPrefix: 'elementor-share-btn_'
      }
    };
  },
  getDefaultElements() {
    var selectors = this.getSettings('selectors');
    return {
      $shareButton: this.$element.find(selectors.shareButton)
    };
  },
  isActive() {
    return !elementorFrontend.isEditMode();
  }
});

/***/ })

}]);
//# sourceMappingURL=share-buttons.58e0fcb000aa02df3f24.bundle.js.map
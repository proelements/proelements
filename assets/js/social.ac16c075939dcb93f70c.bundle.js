/*! pro-elements - v3.28.0 - 23-03-2025 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["social"],{

/***/ "../modules/social/assets/js/frontend/handlers/facebook.js":
/*!*****************************************************************!*\
  !*** ../modules/social/assets/js/frontend/handlers/facebook.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class FacebookHandler extends elementorModules.frontend.handlers.Base {
  getConfig() {
    return elementorProFrontend.config.facebook_sdk;
  }
  setConfig(prop, value) {
    elementorProFrontend.config.facebook_sdk[prop] = value;
  }
  parse() {
    // On FB SDK is loaded, parse current element
    FB.XFBML.parse(this.$element[0]);
  }
  loadSDK() {
    const config = this.getConfig();

    // Preventing from ajax request to be sent multiple times when loading multiple widgets
    if (config.isLoading || config.isLoaded) {
      return;
    }
    this.setConfig('isLoading', true);
    jQuery.ajax({
      url: 'https://connect.facebook.net/' + config.lang + '/sdk.js',
      dataType: 'script',
      cache: true,
      success: () => {
        FB.init({
          appId: config.app_id,
          version: 'v2.10',
          xfbml: false
        });
        this.setConfig('isLoaded', true);
        this.setConfig('isLoading', false);
        elementorFrontend.elements.$document.trigger('fb:sdk:loaded');
      }
    });
  }
  onInit() {
    super.onInit(...arguments);
    this.loadSDK();
    const config = this.getConfig();
    if (config.isLoaded) {
      this.parse();
    } else {
      elementorFrontend.elements.$document.on('fb:sdk:loaded', () => this.parse());
    }
  }
}
exports["default"] = FacebookHandler;

/***/ })

}]);
//# sourceMappingURL=social.ac16c075939dcb93f70c.bundle.js.map
/*! pro-elements - v3.21.0 - 20-05-2024 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["woocommerce-notices"],{

/***/ "../modules/woocommerce/assets/js/frontend/handlers/notices.js":
/*!*********************************************************************!*\
  !*** ../modules/woocommerce/assets/js/frontend/handlers/notices.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class _default extends elementorModules.frontend.handlers.Base {
  getDefaultSettings() {
    return {
      selectors: {
        woocommerceNotices: ':not(.woocommerce-NoticeGroup) .wc-block-components-notice-banner, .woocommerce-NoticeGroup, :not(.woocommerce-NoticeGroup) .woocommerce-error, :not(.woocommerce-NoticeGroup) .woocommerce-message, :not(.woocommerce-NoticeGroup) .woocommerce-info',
        noticesWrapper: '.e-woocommerce-notices-wrapper'
      }
    };
  }
  getDefaultElements() {
    const selectors = this.getSettings('selectors');
    return {
      $documentScrollToElements: elementorFrontend.elements.$document.find('html, body'),
      $woocommerceCheckoutForm: elementorFrontend.elements.$body.find('.form.checkout'),
      $noticesWrapper: this.$element.find(selectors.noticesWrapper)
    };
  }
  moveNotices() {
    let scrollToNotices = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    const selectors = this.getSettings('selectors');
    let $notices = elementorFrontend.elements.$body.find(selectors.woocommerceNotices);
    if (elementorFrontend.isEditMode() || elementorFrontend.isWPPreviewMode()) {
      $notices = $notices.filter(':not(.e-notices-demo-notice)');
    }
    if (scrollToNotices) {
      this.elements.$documentScrollToElements.stop();
    }
    this.elements.$noticesWrapper.prepend($notices);
    if (!this.is_ready) {
      this.elements.$noticesWrapper.removeClass('e-woocommerce-notices-wrapper-loading');
      this.is_ready = true;
    }
    if (scrollToNotices) {
      let $scrollToElement = $notices;
      if (!$scrollToElement.length) {
        $scrollToElement = this.elements.$woocommerceCheckoutForm;
      }
      if ($scrollToElement.length) {
        // Scrolls to the notice and puts it in the middle of the window so users' attention is drawn to it.
        this.elements.$documentScrollToElements.animate({
          scrollTop: $scrollToElement.offset().top - document.documentElement.clientHeight / 2
        }, 1000);
      }
    }
  }
  onInit() {
    super.onInit();
    this.is_ready = false;
    this.moveNotices(true);
  }
  bindEvents() {
    elementorFrontend.elements.$body.on('updated_wc_div updated_checkout updated_cart_totals applied_coupon removed_coupon applied_coupon_in_checkout removed_coupon_in_checkout checkout_error', () => this.moveNotices(true));
  }
}
exports["default"] = _default;

/***/ })

}]);
//# sourceMappingURL=woocommerce-notices.d8c0850de1984ac89f33.bundle.js.map
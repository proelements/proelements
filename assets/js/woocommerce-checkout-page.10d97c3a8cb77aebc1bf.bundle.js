/*! pro-elements - v3.26.0 - 17-12-2024 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["woocommerce-checkout-page"],{

/***/ "../modules/woocommerce/assets/js/frontend/handlers/base.js":
/*!******************************************************************!*\
  !*** ../modules/woocommerce/assets/js/frontend/handlers/base.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class Base extends elementorModules.frontend.handlers.Base {
  getDefaultSettings() {
    return {
      selectors: {
        stickyRightColumn: '.e-sticky-right-column'
      },
      classes: {
        stickyRightColumnActive: 'e-sticky-right-column--active'
      }
    };
  }
  getDefaultElements() {
    const selectors = this.getSettings('selectors');
    return {
      $stickyRightColumn: this.$element.find(selectors.stickyRightColumn)
    };
  }
  bindEvents() {
    // Add our wrapper class around the select2 whenever it is opened.
    elementorFrontend.elements.$document.on('select2:open', event => {
      this.addSelect2Wrapper(event);
    });
  }
  addSelect2Wrapper(event) {
    // The select element is recaptured every time because the markup can refresh
    const selectElement = jQuery(event.target).data('select2');
    if (selectElement.$dropdown) {
      selectElement.$dropdown.addClass('e-woo-select2-wrapper');
    }
  }
  isStickyRightColumnActive() {
    const classes = this.getSettings('classes');
    return this.elements.$stickyRightColumn.hasClass(classes.stickyRightColumnActive);
  }
  activateStickyRightColumn() {
    const elementSettings = this.getElementSettings(),
      $wpAdminBar = elementorFrontend.elements.$wpAdminBar,
      classes = this.getSettings('classes');
    let stickyOptionsOffset = elementSettings.sticky_right_column_offset || 0;
    if ($wpAdminBar.length && 'fixed' === $wpAdminBar.css('position')) {
      stickyOptionsOffset += $wpAdminBar.height();
    }
    if ('yes' === this.getElementSettings('sticky_right_column')) {
      this.elements.$stickyRightColumn.addClass(classes.stickyRightColumnActive);
      this.elements.$stickyRightColumn.css('top', stickyOptionsOffset + 'px');
    }
  }
  deactivateStickyRightColumn() {
    if (!this.isStickyRightColumnActive()) {
      return;
    }
    const classes = this.getSettings('classes');
    this.elements.$stickyRightColumn.removeClass(classes.stickyRightColumnActive);
  }

  /**
   * Activates the sticky column
   *
   * @return {void}
   */
  toggleStickyRightColumn() {
    if (!this.getElementSettings('sticky_right_column')) {
      this.deactivateStickyRightColumn();
      return;
    }
    if (!this.isStickyRightColumnActive()) {
      this.activateStickyRightColumn();
    }
  }
  equalizeElementHeight($element) {
    if ($element.length) {
      $element.removeAttr('style'); // First remove the custom height we added so that the new height can be re-calculated according to the content

      let maxHeight = 0;
      $element.each((index, element) => {
        maxHeight = Math.max(maxHeight, element.offsetHeight);
      });
      if (0 < maxHeight) {
        $element.css({
          height: maxHeight + 'px'
        });
      }
    }
  }

  /**
   * WooCommerce prints the Purchase Note separated from the product name by a border and padding.
   * In Elementor's Order Summary design, the product name and purchase note are displayed un-separated.
   * To achieve this design, it is necessary to access the Product Name line before the Purchase Note line to adjust
   * its padding. Since this cannot be achieved in CSS, it is done in this method.
   *
   * @param {Object} $element
   *
   * @return {void}
   */
  removePaddingBetweenPurchaseNote($element) {
    if ($element) {
      $element.each((index, element) => {
        jQuery(element).prev().children('td').addClass('product-purchase-note-is-below');
      });
    }
  }

  /**
   * `elementorPageId` and `elementorWidgetId` are added to the url in the `_wp_http_referer` input which is then
   * received when WooCommerce does its cart and checkout ajax requests e.g `update_order_review` and `update_cart`.
   * These query strings are extracted from the url and used in our `load_widget_before_wc_ajax` method.
   */
  updateWpReferers() {
    const selectors = this.getSettings('selectors'),
      wpHttpRefererInputs = this.$element.find(selectors.wpHttpRefererInputs),
      url = new URL(document.location);
    url.searchParams.set('elementorPageId', elementorFrontend.config.post.id);
    url.searchParams.set('elementorWidgetId', this.getID());
    wpHttpRefererInputs.attr('value', url);
  }
}
exports["default"] = Base;

/***/ }),

/***/ "../modules/woocommerce/assets/js/frontend/handlers/checkout-page.js":
/*!***************************************************************************!*\
  !*** ../modules/woocommerce/assets/js/frontend/handlers/checkout-page.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/woocommerce/assets/js/frontend/handlers/base.js"));
class Checkout extends _base.default {
  getDefaultSettings() {
    const defaultSettings = super.getDefaultSettings(...arguments);
    return {
      selectors: {
        ...defaultSettings.selectors,
        container: '.elementor-widget-woocommerce-checkout-page',
        loginForm: '.e-woocommerce-login-anchor',
        loginSubmit: '.e-woocommerce-form-login-submit',
        loginSection: '.e-woocommerce-login-section',
        showCouponForm: '.e-show-coupon-form',
        couponSection: '.e-coupon-anchor',
        showLoginForm: '.e-show-login',
        applyCoupon: '.e-apply-coupon',
        checkoutForm: 'form.woocommerce-checkout',
        couponBox: '.e-coupon-box',
        address: 'address',
        wpHttpRefererInputs: '[name="_wp_http_referer"]'
      },
      classes: defaultSettings.classes,
      ajaxUrl: elementorProFrontend.config.ajaxurl
    };
  }
  getDefaultElements() {
    const selectors = this.getSettings('selectors');
    return {
      ...super.getDefaultElements(...arguments),
      $container: this.$element.find(selectors.container),
      $loginForm: this.$element.find(selectors.loginForm),
      $showCouponForm: this.$element.find(selectors.showCouponForm),
      $couponSection: this.$element.find(selectors.couponSection),
      $showLoginForm: this.$element.find(selectors.showLoginForm),
      $applyCoupon: this.$element.find(selectors.applyCoupon),
      $loginSubmit: this.$element.find(selectors.loginSubmit),
      $couponBox: this.$element.find(selectors.couponBox),
      $checkoutForm: this.$element.find(selectors.checkoutForm),
      $loginSection: this.$element.find(selectors.loginSection),
      $address: this.$element.find(selectors.address)
    };
  }
  bindEvents() {
    super.bindEvents(...arguments);
    this.elements.$showCouponForm.on('click', event => {
      event.preventDefault();
      this.elements.$couponSection.slideToggle();
    });
    this.elements.$showLoginForm.on('click', event => {
      event.preventDefault();
      this.elements.$loginForm.slideToggle();
    });
    this.elements.$applyCoupon.on('click', event => {
      event.preventDefault();
      this.applyCoupon();
    });
    this.elements.$loginSubmit.on('click', event => {
      event.preventDefault();
      this.loginUser();
    });
    elementorFrontend.elements.$body.on('updated_checkout', () => {
      this.applyPurchaseButtonHoverAnimation();
      this.updateWpReferers();
    });
  }
  onInit() {
    super.onInit(...arguments);
    this.toggleStickyRightColumn();
    this.updateWpReferers();
    this.equalizeElementHeight(this.elements.$address); // Equalize <address> boxes height

    if (elementorFrontend.isEditMode()) {
      this.elements.$loginForm.show();
      this.elements.$couponSection.show();
      this.applyPurchaseButtonHoverAnimation();
    }
  }
  onElementChange(propertyName) {
    if ('sticky_right_column' === propertyName) {
      this.toggleStickyRightColumn();
    }
  }
  onDestroy() {
    super.onDestroy(...arguments);
    this.deactivateStickyRightColumn();
  }
  applyPurchaseButtonHoverAnimation() {
    const purchaseButtonHoverAnimation = this.getElementSettings('purchase_button_hover_animation');
    if (purchaseButtonHoverAnimation) {
      // This element is recaptured every time because the checkout markup can refresh
      jQuery('#place_order').addClass('elementor-animation-' + purchaseButtonHoverAnimation);
    }
  }
  applyCoupon() {
    // Wc_checkout_params is required to continue, ensure the object exists
    // eslint-disable-next-line camelcase
    if (!wc_checkout_params) {
      return;
    }
    this.startProcessing(this.elements.$couponBox);
    const data = {
      // eslint-disable-next-line camelcase
      security: wc_checkout_params.apply_coupon_nonce,
      coupon_code: this.elements.$couponBox.find('input[name="coupon_code"]').val()
    };
    jQuery.ajax({
      type: 'POST',
      // eslint-disable-next-line camelcase
      url: wc_checkout_params.wc_ajax_url.toString().replace('%%endpoint%%', 'apply_coupon'),
      context: this,
      data,
      success(code) {
        jQuery('.woocommerce-error, .woocommerce-message').remove();
        this.elements.$couponBox.removeClass('processing').unblock();
        if (code) {
          this.elements.$checkoutForm.before(code);
          this.elements.$couponSection.slideUp();
          elementorFrontend.elements.$body.trigger('applied_coupon_in_checkout', [data.coupon_code]);
          elementorFrontend.elements.$body.trigger('update_checkout', {
            update_shipping_method: false
          });
        }
      },
      dataType: 'html'
    });
  }
  loginUser() {
    this.startProcessing(this.elements.$loginSection);
    const data = {
      action: 'elementor_woocommerce_checkout_login_user',
      username: this.elements.$loginSection.find('input[name="username"]').val(),
      password: this.elements.$loginSection.find('input[name="password"]').val(),
      nonce: this.elements.$loginSection.find('input[name="woocommerce-login-nonce"]').val(),
      remember: this.elements.$loginSection.find('input#rememberme').prop('checked')
    };
    jQuery.ajax({
      type: 'POST',
      url: this.getSettings('ajaxUrl'),
      context: this,
      data,
      success(code) {
        code = JSON.parse(code);
        this.elements.$loginSection.removeClass('processing').unblock();
        const messages = jQuery('.woocommerce-error, .woocommerce-message');
        messages.remove();
        if (code.logged_in) {
          location.reload();
        } else {
          this.elements.$checkoutForm.before(code.message);
          elementorFrontend.elements.$body.trigger('checkout_error', [code.message]);
        }
      }
    });
  }
  startProcessing($form) {
    if ($form.is('.processing')) {
      return;
    }

    /**
     * .block() is from a jQuery blockUI plugin loaded by WooCommerce. This code is based on WooCommerce
     * core in order for the Checkout widget to behave the same as WooCommerce Checkout pages.
     */
    $form.addClass('processing').block({
      message: null,
      overlayCSS: {
        background: '#fff',
        opacity: 0.6
      }
    });
  }
}
exports["default"] = Checkout;

/***/ })

}]);
//# sourceMappingURL=woocommerce-checkout-page.10d97c3a8cb77aebc1bf.bundle.js.map
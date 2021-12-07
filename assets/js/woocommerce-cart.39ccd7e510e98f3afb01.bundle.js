/*! pro-elements - v3.5.1 - 10-11-2021 */
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["woocommerce-cart"],{

/***/ "../modules/woocommerce/assets/js/frontend/handlers/base.js":
/*!******************************************************************!*\
  !*** ../modules/woocommerce/assets/js/frontend/handlers/base.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

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
      $element.removeAttr('style'); // first remove the custom height we added so that the new height can be re-calculated according to the content

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

}

exports.default = Base;

/***/ }),

/***/ "../modules/woocommerce/assets/js/frontend/handlers/cart.js":
/*!******************************************************************!*\
  !*** ../modules/woocommerce/assets/js/frontend/handlers/cart.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/woocommerce/assets/js/frontend/handlers/base.js"));

class Cart extends _base.default {
  getDefaultSettings(...args) {
    const defaultSettings = super.getDefaultSettings(...args);
    return {
      selectors: { ...defaultSettings.selectors,
        shippingForm: '.shipping-calculator-form',
        quantityInput: '.qty',
        updateCartButton: 'button[name=update_cart]',
        wpHttpRefererInputs: '[name=_wp_http_referer]',
        hiddenInput: 'input[type=hidden]',
        productRemove: '.product-remove a'
      },
      classes: defaultSettings.classes,
      ajaxUrl: elementorProFrontend.config.ajaxurl
    };
  }

  getDefaultElements(...args) {
    const selectors = this.getSettings('selectors');
    return { ...super.getDefaultElements(...args),
      $shippingForm: this.$element.find(selectors.shippingForm),
      $stickyColumn: this.$element.find(selectors.stickyColumn),
      $hiddenInput: this.$element.find(selectors.hiddenInput)
    };
  }

  bindEvents() {
    super.bindEvents();
    const selectors = this.getSettings('selectors');
    elementorFrontend.elements.$body.on('wc_fragments_refreshed', () => this.applyButtonsHoverAnimation());

    if ('yes' === this.getElementSettings('update_cart_automatically')) {
      this.$element.on('click', selectors.quantityInput, () => this.updateCart());
    }

    if (elementorFrontend.isEditMode() || elementorFrontend.isWPPreviewMode()) {
      elementorFrontend.elements.$body.on('wc_fragments_loaded wc_fragments_refreshed', () => {
        this.modifyWpHttpReferer();
        this.disableActions();
      });
    }
  }

  onInit(...args) {
    super.onInit(...args);
    this.toggleStickyRightColumn();
    this.hideHiddenInputsParentElements();

    if (elementorFrontend.isEditMode()) {
      this.elements.$shippingForm.show();
    }

    this.applyButtonsHoverAnimation();

    if (elementorFrontend.isEditMode() || elementorFrontend.isWPPreviewMode()) {
      this.modifyWpHttpReferer();
      this.disableActions();
    }
  }
  /**
   * Using the WooCommerce Cart controls (quantity, remove product) in the editor will cause the cart to disappear.
   * This is because WooCommerce does an ajax round trip where it modifies the cart, then loads that cart into the
   * current page and attempts to grab the elements from that page via ajax. In the Editor, if the page is not
   * published yet, it fetches an empty page that does not contain the required elements. As a result, the cart
   * is rendered empty.
   *
   * Due to this issue, the cart controls (quantity, remove product) need to be disabled in the Editor.
   */


  disableActions() {
    const selectors = this.getSettings('selectors');
    this.$element.find(selectors.updateCartButton).attr({
      disabled: 'disabled',
      'aria-disabled': 'true'
    });

    if (elementorFrontend.isEditMode()) {
      this.$element.find(selectors.quantityInput).attr('disabled', 'disabled');
      this.$element.find(selectors.productRemove).css('pointer-events', 'none');
    }
  }

  onElementChange(propertyName) {
    if ('sticky_right_column' === propertyName) {
      this.toggleStickyRightColumn();
    }
  }

  onDestroy(...args) {
    super.onDestroy(...args);
    this.deactivateStickyRightColumn();
  }

  updateCart() {
    const selectors = this.getSettings('selectors');
    clearTimeout(this._debounce);
    this._debounce = setTimeout(() => {
      this.$element.find(selectors.updateCartButton).trigger('click');
    }, 600);
  }

  applyButtonsHoverAnimation() {
    const elementSettings = this.getElementSettings();

    if (elementSettings.checkout_button_hover_animation) {
      // This element is recaptured every time because the cart markup can refresh
      jQuery('.checkout-button').addClass('elementor-animation-' + elementSettings.checkout_button_hover_animation);
    }

    if (elementSettings.forms_buttons_hover_animation) {
      // This element is recaptured every time because the cart markup can refresh
      jQuery('.shop_table .button').addClass('elementor-animation-' + elementSettings.forms_buttons_hover_animation);
    }
  }
  /**
   * In the editor, WC Frontend JS does not fire (not registered).
   * This causes that hidden inputs parent paragraph elements do not get display:none
   * as they would have on the front end.
   * So this function manually display:none the parent elements of these hidden inputs to avoid having
   * gaps/spaces in the layout caused by these parent elements' margins/paddings.
   */


  hideHiddenInputsParentElements() {
    if (this.isEdit) {
      if (this.elements.$hiddenInput) {
        this.elements.$hiddenInput.parent('.form-row').addClass('elementor-hidden');
      }
    }
  }

  modifyWpHttpReferer() {
    const selectors = this.getSettings('selectors');

    if (elementorFrontend.isEditMode()) {
      this.$element.find(selectors.wpHttpRefererInputs).attr('value', elementor.documents.getCurrent().config.urls.wp_preview);
    }
  }

}

exports.default = Cart;

/***/ })

}]);
//# sourceMappingURL=woocommerce-cart.39ccd7e510e98f3afb01.bundle.js.map
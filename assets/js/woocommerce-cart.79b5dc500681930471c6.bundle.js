/*! pro-elements - v3.24.0 - 18-09-2024 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["woocommerce-cart"],{

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

/***/ "../modules/woocommerce/assets/js/frontend/handlers/cart.js":
/*!******************************************************************!*\
  !*** ../modules/woocommerce/assets/js/frontend/handlers/cart.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/woocommerce/assets/js/frontend/handlers/base.js"));
class Cart extends _base.default {
  getDefaultSettings() {
    const defaultSettings = super.getDefaultSettings(...arguments);
    return {
      selectors: {
        ...defaultSettings.selectors,
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
  getDefaultElements() {
    const selectors = this.getSettings('selectors');
    return {
      ...super.getDefaultElements(...arguments),
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
      this.$element.on('input', selectors.quantityInput, () => this.updateCart());
    }
    elementorFrontend.elements.$body.on('wc_fragments_loaded wc_fragments_refreshed', () => {
      this.updateWpReferers();
      if (elementorFrontend.isEditMode() || elementorFrontend.isWPPreviewMode()) {
        this.disableActions();
      }
    });
    elementorFrontend.elements.$body.on('added_to_cart', function (e, data) {
      // We do not want the page to reload in the Editor after we triggered the 'added_to_cart' event.
      if (data.e_manually_triggered) {
        return false;
      }
    });
  }
  onInit() {
    super.onInit(...arguments);
    this.toggleStickyRightColumn();
    this.hideHiddenInputsParentElements();
    if (elementorFrontend.isEditMode()) {
      this.elements.$shippingForm.show();
    }
    this.applyButtonsHoverAnimation();
    this.updateWpReferers();
    if (elementorFrontend.isEditMode() || elementorFrontend.isWPPreviewMode()) {
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
    if ('additional_template_select' === propertyName) {
      elementorPro.modules.woocommerce.onTemplateIdChange('additional_template_select');
    }
  }
  onDestroy() {
    super.onDestroy(...arguments);
    this.deactivateStickyRightColumn();
  }
  updateCart() {
    const selectors = this.getSettings('selectors');
    clearTimeout(this._debounce);
    this._debounce = setTimeout(() => {
      this.$element.find(selectors.updateCartButton).trigger('click');
    }, 1500);
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
}
exports["default"] = Cart;

/***/ })

}]);
//# sourceMappingURL=woocommerce-cart.79b5dc500681930471c6.bundle.js.map
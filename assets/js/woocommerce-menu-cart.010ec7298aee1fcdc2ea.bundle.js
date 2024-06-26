/*! pro-elements - v3.22.0 - 24-06-2024 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["woocommerce-menu-cart"],{

/***/ "../modules/woocommerce/assets/js/frontend/handlers/menu-cart.js":
/*!***********************************************************************!*\
  !*** ../modules/woocommerce/assets/js/frontend/handlers/menu-cart.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class _default extends elementorModules.frontend.handlers.Base {
  getDefaultSettings() {
    return {
      selectors: {
        container: '.elementor-menu-cart__container',
        main: '.elementor-menu-cart__main',
        toggle: '.elementor-menu-cart__toggle',
        toggleButton: '#elementor-menu-cart__toggle_button',
        toggleWrapper: '.elementor-menu-cart__toggle_wrapper',
        closeButton: '.elementor-menu-cart__close-button, .elementor-menu-cart__close-button-custom',
        productList: '.elementor-menu-cart__products'
      },
      classes: {
        isShown: 'elementor-menu-cart--shown'
      }
    };
  }
  getDefaultElements() {
    const selectors = this.getSettings('selectors');
    return {
      $container: this.$element.find(selectors.container),
      $main: this.$element.find(selectors.main),
      $toggleWrapper: this.$element.find(selectors.toggleWrapper),
      $closeButton: this.$element.find(selectors.closeButton)
    };
  }
  toggleCart() {
    if (!this.isCartOpen) {
      this.showCart();
    } else {
      this.hideCart();
    }
  }
  showCart() {
    if (this.isCartOpen) {
      return;
    }
    const classes = this.getSettings('classes'),
      selectors = this.getSettings('selectors');
    this.isCartOpen = true;
    this.$element.addClass(classes.isShown);
    this.$element.find(selectors.toggleButton).attr('aria-expanded', true);
    this.elements.$main.attr('aria-hidden', false);
    this.elements.$container.attr('aria-hidden', false);
  }
  hideCart() {
    if (!this.isCartOpen) {
      return;
    }
    const classes = this.getSettings('classes'),
      selectors = this.getSettings('selectors');
    this.isCartOpen = false;
    this.$element.removeClass(classes.isShown);
    this.$element.find(selectors.toggleButton).attr('aria-expanded', false);
    this.elements.$main.attr('aria-hidden', true);
    this.elements.$container.attr('aria-hidden', true);
  }
  automaticallyOpenCart() {
    const settings = this.getElementSettings();
    if ('yes' === settings.automatically_open_cart) {
      this.showCart();
    }
  }
  refreshFragments(eventType) {
    let data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    if (elementorFrontend.isEditMode() && elementorPro.modules.woocommerce.didManuallyTriggerAddToCartEvent(data)) {
      return false;
    }
    const templatesInPage = [];
    jQuery.each(elementorFrontend.documentsManager.documents, index => {
      templatesInPage.push(index);
    });
    jQuery.ajax({
      type: 'POST',
      url: elementorProFrontend.config.ajaxurl,
      context: this,
      data: {
        action: 'elementor_menu_cart_fragments',
        templates: templatesInPage,
        _nonce: ElementorProFrontendConfig.woocommerce.menu_cart.fragments_nonce,
        is_editor: elementorFrontend.isEditMode()
      },
      success(successData) {
        if (successData?.fragments) {
          jQuery.each(successData.fragments, (key, value) => {
            jQuery(key).replaceWith(value);
          });
        }
      },
      complete() {
        if ('added_to_cart' === eventType) {
          this.automaticallyOpenCart();
        }
      }
    });
  }
  bindEvents() {
    const menuCart = elementorProFrontend.config.woocommerce.menu_cart,
      noQueryParams = -1 === menuCart.cart_page_url.indexOf('?'),
      currentUrl = noQueryParams ? window.location.origin + window.location.pathname : window.location.href,
      cartUrl = menuCart.cart_page_url,
      isCart = menuCart.cart_page_url === currentUrl,
      isCheckout = menuCart.checkout_page_url === currentUrl,
      selectors = this.getSettings('selectors');

    // If on cart page or checkout page don't open cart, rather stay on, or go to cart page, and bail from init.
    if (isCart && isCheckout) {
      this.$element.find(selectors.toggleButton).attr('href', cartUrl);
      return;
    }

    // Cache cart open state.
    const classes = this.getSettings('classes');
    this.isCartOpen = this.$element.hasClass(classes.isShown);
    const settings = this.getElementSettings();
    if ('mouseover' === settings.open_cart) {
      // Enable opening of mini-cart and side-cart by hover (include click so we can `preventDefault()` page-top jump on click).
      this.elements.$toggleWrapper.on('mouseover click', selectors.toggleButton, event => {
        event.preventDefault();
        this.showCart();
      });

      // Close Cart on mouseleave.
      this.elements.$toggleWrapper.on('mouseleave', () => this.hideCart());
    } else {
      // Enable opening of mini-cart and side-cart by click.
      this.elements.$toggleWrapper.on('click', selectors.toggleButton, event => {
        event.preventDefault();
        this.toggleCart();
      });
    }

    // Listen for clicks outside to close any open cart.
    elementorFrontend.elements.$document.on('click', event => {
      if (!this.isCartOpen) {
        return;
      }
      const $target = jQuery(event.target);

      // Don't close if this is click on the main panel or toggle button.
      if ($target.closest(this.elements.$main).length || $target.closest(selectors.toggle).length) {
        return;
      }
      this.hideCart();
    });
    this.elements.$closeButton.on('click', event => {
      event.preventDefault();
      this.hideCart();
    });
    elementorFrontend.elements.$document.on('keyup', event => {
      const ESC_KEY = 27;
      if (ESC_KEY === event.keyCode) {
        this.hideCart();
      }
    });
    elementorFrontend.elements.$body.on('wc_fragments_refreshed removed_from_cart added_to_cart', (event, data) => this.refreshFragments(event.type, data));

    // Govern the height of the mini-cart dropdown.
    elementorFrontend.addListenerOnce(this.getUniqueHandlerID() + '_window_resize_dropdown', 'resize', () => this.governDropdownHeight());
    elementorFrontend.elements.$body.on('wc_fragments_loaded wc_fragments_refreshed', () => this.governDropdownHeight());
  }
  unbindEvents() {
    elementorFrontend.removeListeners(this.getUniqueHandlerID() + '_window_resize_dropdown', 'resize');
  }
  onInit() {
    super.onInit();

    /**
     * When the page is reloaded after an item is added to cart, and the user activated the
     * "Automatically Open Cart" option, the cart should open to show the updated contents.
     */
    if (elementorProFrontend.config.woocommerce.productAddedToCart) {
      this.automaticallyOpenCart();
    }

    // Govern the height of the mini-cart dropdown.
    this.governDropdownHeight();
  }
  governDropdownHeight() {
    const settings = this.getElementSettings();

    // Only do this for mini-cart.
    if ('mini-cart' !== settings.cart_type) {
      return;
    }

    // Elements need to be re-instantiated every time as WooCommerce reloads the toggle button
    // and cart contents in our widget when the cart changes e.g. adding products to the cart.
    const selectors = this.getSettings('selectors');
    const $productList = this.$element.find(selectors.productList),
      $toggle = this.$element.find(selectors.toggle);

    // Make sure required elements exist.
    if (!$productList.length || !$toggle.length) {
      return;
    }

    // Remove max-height of productList so we can take new measurements.
    this.$element.find(selectors.productList).css('max-height', '');

    // Calculate what the height of the productList should be based on elements above, below and it's vertical position.
    const windowHeight = document.documentElement.clientHeight,
      toggleHeight = $toggle.height() + parseInt(this.elements.$main.css('margin-top')),
      toggleTopPosition = $toggle[0].getBoundingClientRect().top,
      productListHeight = $productList.height(),
      dropdownWithoutViewportHeight = this.elements.$main.prop('scrollHeight') - productListHeight,
      extraBottomSpacing = 30,
      maxViewportHeight = windowHeight - toggleTopPosition - toggleHeight - dropdownWithoutViewportHeight - extraBottomSpacing,
      optimalViewportHeight = Math.max(120, maxViewportHeight);

    // Apply max-height to the productList.
    $productList.css('max-height', optimalViewportHeight);
  }
}
exports["default"] = _default;

/***/ })

}]);
//# sourceMappingURL=woocommerce-menu-cart.010ec7298aee1fcdc2ea.bundle.js.map
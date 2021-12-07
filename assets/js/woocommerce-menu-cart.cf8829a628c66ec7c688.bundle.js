/*! pro-elements - v3.5.1 - 10-11-2021 */
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["woocommerce-menu-cart"],{

/***/ "../modules/woocommerce/assets/js/frontend/handlers/menu-cart.js":
/*!***********************************************************************!*\
  !*** ../modules/woocommerce/assets/js/frontend/handlers/menu-cart.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

class _default extends elementorModules.frontend.handlers.Base {
  getDefaultSettings() {
    return {
      selectors: {
        container: '.elementor-menu-cart__container',
        main: '.elementor-menu-cart__main',
        toggle: '.elementor-menu-cart__toggle',
        toggleButton: '#elementor-menu-cart__toggle_button',
        toggleWrapper: '.elementor-menu-cart__toggle_wrapper',
        closeButton: '.elementor-menu-cart__close-button'
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

  bindEvents() {
    const menuCart = elementorProFrontend.config.menu_cart,
          noQueryParams = -1 === menuCart.cart_page_url.indexOf('?'),
          currentUrl = noQueryParams ? window.location.origin + window.location.pathname : window.location.href,
          cartUrl = menuCart.cart_page_url,
          isCart = menuCart.cart_page_url === currentUrl,
          isCheckout = menuCart.checkout_page_url === currentUrl,
          selectors = this.getSettings('selectors'),
          settings = this.getElementSettings(),
          classes = this.getSettings('classes'); // If on cart page or checkout page don't open cart, rather stay on, or go to cart page, and bail from init.

    if (isCart && isCheckout) {
      this.$element.find(selectors.toggleButton).attr('href', cartUrl);
      return;
    } // Cache cart open state.


    this.isCartOpen = this.$element.hasClass(classes.isShown);

    if ('mouseover' === settings.open_cart) {
      // Enable opening of mini-cart and side-cart by hover (include click so we can `preventDefault()` page-top jump on click).
      this.elements.$toggleWrapper.on('mouseover click', selectors.toggleButton, event => {
        event.preventDefault();
        this.showCart();
      }); // Close Cart on mouseleave.

      this.elements.$toggleWrapper.on('mouseleave', () => this.hideCart());
    } else {
      // Enable opening of mini-cart and side-cart by click.
      this.elements.$toggleWrapper.on('click', selectors.toggleButton, event => {
        event.preventDefault();
        this.toggleCart();
      });
    } // Listen for clicks outside to close any open cart.


    elementorFrontend.elements.$document.on('click', event => {
      if (!this.isCartOpen) {
        return;
      }

      const $target = jQuery(event.target); // Don't close if this is click on the main panel or toggle button.

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
      var ESC_KEY = 27;

      if (ESC_KEY === event.keyCode) {
        this.hideCart();
      }
    }); // Option to open cart on add to cart.

    elementorFrontend.elements.$body.on('added_to_cart', () => this.automaticallyOpenCart());
  }

}

exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=woocommerce-menu-cart.cf8829a628c66ec7c688.bundle.js.map
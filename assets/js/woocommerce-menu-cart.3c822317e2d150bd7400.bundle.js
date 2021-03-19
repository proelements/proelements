/*! pro-elements - v3.2.0 - 14-03-2021 */
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["woocommerce-menu-cart"],{

/***/ "../modules/woocommerce/assets/js/frontend/handlers/menu-cart.js":
/*!***********************************************************************!*\
  !*** ../modules/woocommerce/assets/js/frontend/handlers/menu-cart.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(/*! core-js/modules/es6.array.find */ "../node_modules/core-js/modules/es6.array.find.js");

var _default = elementorModules.frontend.handlers.Base.extend({
  getDefaultSettings: function getDefaultSettings() {
    return {
      selectors: {
        container: '.elementor-menu-cart__container',
        main: '.elementor-menu-cart__main',
        toggle: '.elementor-menu-cart__toggle .elementor-button',
        closeButton: '.elementor-menu-cart__close-button',
        cartLink: '#elementor-menu-cart__toggle_button'
      },
      classes: {
        isShown: 'elementor-menu-cart--shown',
        lightbox: 'elementor-lightbox'
      }
    };
  },
  getDefaultElements: function getDefaultElements() {
    var selectors = this.getSettings('selectors'),
        elements = {};
    elements.$container = this.$element.find(selectors.container);
    elements.$main = this.$element.find(selectors.main);
    elements.$toggle = this.$element.find(selectors.toggle);
    elements.$closeButton = this.$element.find(selectors.closeButton);
    elements.$cartLink = this.$element.find(selectors.cartLink);
    return elements;
  },
  toggleAriaExpanded: function toggleAriaExpanded($element) {
    $element.attr('aria-expanded', function (index, isExpanded) {
      if (typeof isExpanded !== 'undefined') {
        // Check if aria-expanded property even exists
        return 'true' !== isExpanded;
      }

      return true;
    });
  },
  removeAttributesOnHide: function removeAttributesOnHide() {
    var _this$elements = this.elements,
        $container = _this$elements.$container,
        $main = _this$elements.$main,
        classes = this.getSettings('classes');
    $container.removeClass(classes.isShown).attr('aria-expanded', false);
    $main.attr('aria-expanded', false);
  },
  bindEvents: function bindEvents() {
    var _this = this;

    var _this$elements2 = this.elements,
        $container = _this$elements2.$container,
        $main = _this$elements2.$main,
        $toggle = _this$elements2.$toggle,
        $closeButton = _this$elements2.$closeButton,
        $cartLink = _this$elements2.$cartLink,
        classes = this.getSettings('classes'); // Activate full-screen mode on click

    $toggle.on('click', function (event) {
      var noQueryParams = -1 === ElementorProFrontendConfig.menu_cart.cart_page_url.indexOf('?'),
          currentUrl = noQueryParams ? window.location.origin + window.location.pathname : window.location.href,
          isCart = ElementorProFrontendConfig.menu_cart.cart_page_url === currentUrl,
          isCheckout = ElementorProFrontendConfig.menu_cart.checkout_page_url === currentUrl;

      if (!isCart && !isCheckout) {
        event.preventDefault();
        $container.toggleClass(classes.isShown);

        _this.toggleAriaExpanded($container);

        _this.toggleAriaExpanded($main);
      } else {
        var cartUrl = ElementorProFrontendConfig.menu_cart.cart_page_url;
        $cartLink.attr('href', cartUrl);

        _this.removeAttributesOnHide();
      }
    }); // Deactivate full-screen mode on click or on esc.

    $container.on('click', function (event) {
      if ($container.hasClass(classes.isShown) && $container[0] === event.target) {
        _this.removeAttributesOnHide();
      }
    });
    $closeButton.on('click', function () {
      _this.removeAttributesOnHide();
    });
    elementorFrontend.elements.$document.on('keyup', function (event) {
      var ESC_KEY = 27;

      if (ESC_KEY === event.keyCode) {
        if ($container.hasClass(classes.isShown)) {
          $container.trigger('click');
        }
      }
    });
  }
});

exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=woocommerce-menu-cart.3c822317e2d150bd7400.bundle.js.map
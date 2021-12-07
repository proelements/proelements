/*! pro-elements - v3.5.1 - 10-11-2021 */
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["woocommerce-my-account"],{

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

/***/ "../modules/woocommerce/assets/js/frontend/handlers/my-account.js":
/*!************************************************************************!*\
  !*** ../modules/woocommerce/assets/js/frontend/handlers/my-account.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../modules/woocommerce/assets/js/frontend/handlers/base.js"));

class MyAccountHandler extends _base.default {
  getDefaultSettings() {
    return {
      selectors: {
        address: 'address',
        tabLinks: '.woocommerce-MyAccount-navigation-link a',
        viewOrderButtons: '.my_account_orders .woocommerce-button.view',
        viewOrderLinks: '.woocommerce-orders-table__cell-order-number a',
        authForms: 'form.login, form.register',
        tabWrapper: '.e-my-account-tab',
        tabItem: '.woocommerce-MyAccount-navigation li',
        allPageElements: '[e-my-account-page]',
        purchasenote: 'tr.product-purchase-note'
      }
    };
  }

  getDefaultElements() {
    const selectors = this.getSettings('selectors');
    return {
      $address: this.$element.find(selectors.address),
      $tabLinks: this.$element.find(selectors.tabLinks),
      $viewOrderButtons: this.$element.find(selectors.viewOrderButtons),
      $viewOrderLinks: this.$element.find(selectors.viewOrderLinks),
      $authForms: this.$element.find(selectors.authForms),
      $tabWrapper: this.$element.find(selectors.tabWrapper),
      $tabItem: this.$element.find(selectors.tabItem),
      $allPageElements: this.$element.find(selectors.allPageElements),
      $purchasenote: this.$element.find(selectors.purchasenote)
    };
  }

  editorInitTabs() {
    this.elements.$allPageElements.each((index, element) => {
      const currentPage = element.getAttribute('e-my-account-page');
      let $linksToThisPage;

      switch (currentPage) {
        case 'view-order':
          $linksToThisPage = this.elements.$viewOrderLinks.add(this.elements.$viewOrderButtons);
          break;

        default:
          $linksToThisPage = this.$element.find('.woocommerce-MyAccount-navigation-link--' + currentPage);
      }

      $linksToThisPage.on('click', () => {
        this.currentPage = currentPage;
        this.editorShowTab();
      });
    });
  }

  editorShowTab() {
    const $currentPage = this.$element.find('[e-my-account-page="' + this.currentPage + '"]');
    this.$element.attr('e-my-account-page', this.currentPage);
    this.elements.$allPageElements.hide();
    $currentPage.show();
    this.toggleEndpointClasses();

    if ('view-order' !== this.currentPage) {
      this.elements.$tabItem.removeClass('is-active');
      this.$element.find('.woocommerce-MyAccount-navigation-link--' + this.currentPage).addClass('is-active');
    }
    /**
     * We need to run equalizeElementHeights() again when the 'edit-address' or 'view-order' tab is shown, because jQuery cannot
     * get the height of hidden elements, and this tab was hidden on initial page load in the editor.
     */


    if ('edit-address' === this.currentPage || 'view-order' === this.currentPage) {
      this.equalizeElementHeights();
    }
  }

  toggleEndpointClasses() {
    const wcPages = ['dashboard', 'orders', 'view-order', 'downloads', 'edit-account', 'edit-address', 'payment-methods'];
    this.elements.$tabWrapper.removeClass('e-my-account-tab__' + wcPages.join(' e-my-account-tab__'));

    if (wcPages.includes(this.currentPage)) {
      this.elements.$tabWrapper.addClass('e-my-account-tab__' + this.currentPage);
    }
  }

  applyButtonsHoverAnimation() {
    const elementSettings = this.getElementSettings();

    if (elementSettings.forms_buttons_hover_animation) {
      this.$element.find('.woocommerce button.button').addClass('elementor-animation-' + elementSettings.forms_buttons_hover_animation);
    }

    if (elementSettings.tables_button_hover_animation) {
      this.$element.find('.order-again .button, td .button, .woocommerce-pagination .button').addClass('elementor-animation-' + elementSettings.tables_button_hover_animation);
    }
  }

  equalizeElementHeights() {
    this.equalizeElementHeight(this.elements.$address); // equalize <address> boxes height

    if (!this.isEdit) {
      // Auth forms do not display in the Editor
      this.equalizeElementHeight(this.elements.$authForms); // equalize login/reg boxes height
    }
  }
  /**
   * WooCommerce prints the Purchase Note separated from the product name by a border and padding.
   * In Elementor's Order Summary design, the product name and purchase note are displayed un-separated.
   * To achieve this design, it is necessary to access the Product Name line before the Purchase Note line to adjust
   * its padding. Since this cannot be achieved in CSS, it is done in this method.
   */


  removePaddingBetweenPurchaseNote() {
    if (this.elements.$purchasenote) {
      this.elements.$purchasenote.each((index, element) => {
        jQuery(element).prev().children('td').addClass('product-purchase-note-is-below');
      });
    }
  }

  onElementChange(propertyName) {
    // When the 'General Text' Typography or 'Section' Padding is changed, the height of the boxes need to update as well.
    if (0 === propertyName.indexOf('general_text_typography') || 0 === propertyName.indexOf('sections_padding')) {
      this.equalizeElementHeights();
    }

    if (0 === propertyName.indexOf('forms_rows_gap')) {
      this.removePaddingBetweenPurchaseNote();
    }
  }

  bindEvents() {
    super.bindEvents(); // The heights of the Registration and Login boxes need to be recaclulated and equalized when
    // WooCommerce adds validation messages (such as the password strength meter) into these sections.

    elementorFrontend.elements.$body.on('keyup change', '.register #reg_password', () => {
      this.equalizeElementHeights();
    });
  }

  onInit(...args) {
    super.onInit(...args);

    if (this.isEdit) {
      this.editorInitTabs();

      if (!this.$element.attr('e-my-account-page')) {
        this.currentPage = 'dashboard';
      } else {
        this.currentPage = this.$element.attr('e-my-account-page');
      }

      this.editorShowTab();
    }

    this.applyButtonsHoverAnimation();
    this.equalizeElementHeights();
    this.removePaddingBetweenPurchaseNote();
  }

}

exports.default = MyAccountHandler;

/***/ })

}]);
//# sourceMappingURL=woocommerce-my-account.d52e81c74f27be09eb2e.bundle.js.map
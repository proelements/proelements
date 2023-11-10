/*! pro-elements - v3.17.0 - 01-11-2023 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["stripe-button"],{

/***/ "../modules/payments/assets/js/frontend/handlers/stripe-button.js":
/*!************************************************************************!*\
  !*** ../modules/payments/assets/js/frontend/handlers/stripe-button.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _dompurify = _interopRequireDefault(__webpack_require__(/*! dompurify */ "../node_modules/dompurify/dist/purify.js"));
class StripeHandler extends elementorModules.frontend.handlers.Base {
  getDefaultSettings() {
    return {
      selectors: {
        form: '.elementor-stripe-form',
        errors: '.elementor-message-danger'
      }
    };
  }
  getDefaultElements() {
    const settings = this.getSettings();
    return {
      form: this.$element[0].querySelector(settings.selectors.form),
      errors: this.$element[0].querySelectorAll(settings.selectors.errors),
      post_id: this.$element.closest('[data-elementor-id]').attr('data-elementor-id')
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    if (elementorFrontend.isEditMode()) {
      return;
    }
    if (this.elements.errors.innerHTML !== '') {
      document.querySelectorAll('.elementor-stripe-error-message').forEach(e => e.remove());
    }
    const stripeForm = this.elements.form,
      formData = new FormData(stripeForm),
      ajaxurl = formData.get('url'),
      action = formData.get('action'),
      postId = parseInt(this.elements.post_id),
      widgetId = formData.get('widget_id'),
      customErrorMsg = formData.get('custom_error_msg'),
      customErrorMsgGlobal = formData.get('custom_error_msg_global'),
      customErrorMsgPayment = formData.get('custom_error_msg_payment'),
      nonce = formData.get('stripe_form_submit_nonce'),
      pageUrl = document.URL,
      // Should the page open in a new tab or not
      openInNewWindow = formData.get('open_in_new_window'),
      target = 'yes' === openInNewWindow ? '_blank' : '_self';

    // Create error container
    const createErrorContainer = errorMsg => {
      const errorDiv = document.createElement('div'),
        errorCont = stripeForm.appendChild(errorDiv);
      errorCont.className = 'elementor-message elementor-stripe-error-message elementor-message-danger';
      errorCont.innerHTML = `${_dompurify.default.sanitize(errorMsg)}`;
    };
    const data = {
      action,
      postId,
      widgetId,
      pageUrl,
      nonce
    };
    if (0 < this.elements.errors.length) {
      this.elements.errors.forEach(error => {
        error.classList.remove('elementor-hidden');
      });
    } else {
      jQuery.post(ajaxurl, {
        action,
        data
      }).done(response => {
        const code = response.response.code;
        const result = response.body && JSON.parse(response.body);
        switch (code) {
          case 200:
            window.open(result.url, target);
            break;
          case 401:
          case 403:
            if (customErrorMsg) {
              createErrorContainer(customErrorMsgPayment);
            } else {
              createErrorContainer(result.error.message);
            }
            break;
          default:
            if (customErrorMsg) {
              createErrorContainer(customErrorMsgGlobal);
            } else {
              createErrorContainer(result.error.message);
            }
        }
      }).fail(() => {
        if (customErrorMsg) {
          createErrorContainer(customErrorMsgGlobal);
        } else {
          createErrorContainer(result.error.message);
        }
      });
    }
  }
  bindEvents() {
    this.elements.form.addEventListener('submit', e => this.handleSubmit(e));
  }
}
exports["default"] = StripeHandler;

/***/ })

}]);
//# sourceMappingURL=stripe-button.0b77acd00b7163edd0ec.bundle.js.map
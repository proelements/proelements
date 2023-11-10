/*! pro-elements - v3.17.0 - 01-11-2023 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["search-form"],{

/***/ "../modules/theme-elements/assets/js/frontend/handlers/search-form.js":
/*!****************************************************************************!*\
  !*** ../modules/theme-elements/assets/js/frontend/handlers/search-form.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = elementorModules.frontend.handlers.Base.extend({
  getDefaultSettings() {
    return {
      selectors: {
        wrapper: '.elementor-search-form',
        container: '.elementor-search-form__container',
        icon: '.elementor-search-form__icon',
        input: '.elementor-search-form__input',
        toggle: '.elementor-search-form__toggle',
        submit: '.elementor-search-form__submit',
        closeButton: '.dialog-close-button'
      },
      classes: {
        isFocus: 'elementor-search-form--focus',
        isFullScreen: 'elementor-search-form--full-screen',
        lightbox: 'elementor-lightbox'
      }
    };
  },
  getDefaultElements() {
    var selectors = this.getSettings('selectors'),
      elements = {};
    elements.$wrapper = this.$element.find(selectors.wrapper);
    elements.$container = this.$element.find(selectors.container);
    elements.$input = this.$element.find(selectors.input);
    elements.$icon = this.$element.find(selectors.icon);
    elements.$toggle = this.$element.find(selectors.toggle);
    elements.$submit = this.$element.find(selectors.submit);
    elements.$closeButton = this.$element.find(selectors.closeButton);
    return elements;
  },
  bindEvents() {
    var self = this,
      $container = self.elements.$container,
      $closeButton = self.elements.$closeButton,
      $input = self.elements.$input,
      $wrapper = self.elements.$wrapper,
      $icon = self.elements.$icon,
      $toggle = self.elements.$toggle,
      skin = this.getElementSettings('skin'),
      classes = this.getSettings('classes');
    const openFullScreenSearch = () => {
      $container.addClass(classes.isFullScreen).addClass(classes.lightbox);
      $input.trigger('focus');
    };
    const closeFullScreenSearch = () => {
      $container.removeClass(classes.isFullScreen).removeClass(classes.lightbox);
      $toggle.trigger('focus');
    };
    const triggerClickOnEnterSpace = event => {
      const ENTER_KEY = 13,
        SPACE_KEY = 32;
      if (ENTER_KEY === event.keyCode || SPACE_KEY === event.keyCode) {
        event.currentTarget.click();
        event.stopPropagation();
      }
    };
    if ('full_screen' === skin) {
      // Activate full-screen mode on mouse click or keyboard Enter & Space keyup.
      $toggle.on('click', () => openFullScreenSearch()).on('keyup', event => triggerClickOnEnterSpace(event));

      // Deactivate full-screen mode when clicking outside the container.
      $container.on('click', function (event) {
        if ($container.hasClass(classes.isFullScreen) && $container[0] === event.target) {
          $container.removeClass(classes.isFullScreen).removeClass(classes.lightbox);
        }
      });

      // Deactivate full-screen mode on mouse click or keyboard Enter & Space keyup.
      $closeButton.on('click', () => closeFullScreenSearch()).on('keyup', event => triggerClickOnEnterSpace(event));

      // Deactivate full-screen mode on keyboard Esc keyup.
      elementorFrontend.elements.$document.on('keyup', function (event) {
        const ESC_KEY = 27;
        if (ESC_KEY === event.keyCode) {
          if ($container.hasClass(classes.isFullScreen)) {
            $container.trigger('click');
          }
        }
      });
    } else {
      // Apply focus style on wrapper element when input is focused
      $input.on({
        focus() {
          $wrapper.addClass(classes.isFocus);
        },
        blur() {
          $wrapper.removeClass(classes.isFocus);
        }
      });
    }
    if ('minimal' === skin) {
      // Apply focus style on wrapper element when icon is clicked in minimal skin
      $icon.on('click', function () {
        $wrapper.addClass(classes.isFocus);
        $input.trigger('focus');
      });
    }
  }
});
exports["default"] = _default;

/***/ })

}]);
//# sourceMappingURL=search-form.416aa432fdfe2bcfe9b5.bundle.js.map
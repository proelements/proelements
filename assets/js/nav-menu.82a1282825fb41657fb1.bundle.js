/*! pro-elements - v3.11.3 - 26-02-2023 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["nav-menu"],{

/***/ "../modules/nav-menu/assets/js/frontend/handlers/nav-menu.js":
/*!*******************************************************************!*\
  !*** ../modules/nav-menu/assets/js/frontend/handlers/nav-menu.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = elementorModules.frontend.handlers.Base.extend({
  stretchElement: null,
  getDefaultSettings() {
    return {
      selectors: {
        menu: '.elementor-nav-menu',
        anchorLink: '.elementor-nav-menu--main .elementor-item-anchor',
        dropdownMenu: '.elementor-nav-menu__container.elementor-nav-menu--dropdown',
        menuToggle: '.elementor-menu-toggle'
      }
    };
  },
  getDefaultElements() {
    var selectors = this.getSettings('selectors'),
      elements = {};
    elements.$menu = this.$element.find(selectors.menu);
    elements.$anchorLink = this.$element.find(selectors.anchorLink);
    elements.$dropdownMenu = this.$element.find(selectors.dropdownMenu);
    elements.$dropdownMenuFinalItems = elements.$dropdownMenu.find('.menu-item:not(.menu-item-has-children) > a');
    elements.$menuToggle = this.$element.find(selectors.menuToggle);
    elements.$links = elements.$dropdownMenu.find('a.elementor-item');
    return elements;
  },
  bindEvents() {
    if (!this.elements.$menu.length) {
      return;
    }
    this.elements.$menuToggle.on('click', this.toggleMenu.bind(this));
    if (this.getElementSettings('full_width')) {
      this.elements.$dropdownMenuFinalItems.on('click', this.toggleMenu.bind(this, false));
    }
    elementorFrontend.addListenerOnce(this.$element.data('model-cid'), 'resize', this.stretchMenu);
    elementorFrontend.addListenerOnce(this.$element.data('model-cid'), 'scroll', this.debounce(this.reassignMobileMenuHeight, 250));
  },
  initStretchElement() {
    this.stretchElement = new elementorModules.frontend.tools.StretchElement({
      element: this.elements.$dropdownMenu
    });
  },
  toggleNavLinksTabIndex() {
    let enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    this.elements.$links.attr('tabindex', enabled ? 0 : -1);
  },
  toggleMenu(show) {
    var isDropdownVisible = this.elements.$menuToggle.hasClass('elementor-active');
    if ('boolean' !== typeof show) {
      show = !isDropdownVisible;
    }
    this.elements.$menuToggle.attr('aria-expanded', show);
    this.elements.$dropdownMenu.attr('aria-hidden', !show);
    this.elements.$menuToggle.toggleClass('elementor-active', show);
    this.toggleNavLinksTabIndex(show);
    this.reassignMobileMenuHeight(show);
    if (show && this.getElementSettings('full_width')) {
      this.stretchElement.stretch();
    }
  },
  followMenuAnchors() {
    var self = this;
    self.elements.$anchorLink.each(function () {
      if (location.pathname === this.pathname && '' !== this.hash) {
        self.followMenuAnchor(jQuery(this));
      }
    });
  },
  followMenuAnchor($element) {
    const anchorSelector = $element[0].hash;
    let offset = -300,
      $anchor;
    try {
      // `decodeURIComponent` for UTF8 characters in the hash.
      $anchor = jQuery(decodeURIComponent(anchorSelector));
    } catch (e) {
      return;
    }
    if (!$anchor.length) {
      return;
    }
    if (!$anchor.hasClass('elementor-menu-anchor')) {
      var halfViewport = jQuery(window).height() / 2;
      offset = -$anchor.outerHeight() + halfViewport;
    }
    elementorFrontend.waypoint($anchor, function (direction) {
      if ('down' === direction) {
        $element.addClass('elementor-item-active');
      } else {
        $element.removeClass('elementor-item-active');
      }
    }, {
      offset: '50%',
      triggerOnce: false
    });
    elementorFrontend.waypoint($anchor, function (direction) {
      if ('down' === direction) {
        $element.removeClass('elementor-item-active');
      } else {
        $element.addClass('elementor-item-active');
      }
    }, {
      offset,
      triggerOnce: false
    });
  },
  stretchMenu() {
    if (this.getElementSettings('full_width')) {
      this.stretchElement.stretch();
      this.elements.$dropdownMenu.css('top', this.elements.$menuToggle.outerHeight());
    } else {
      this.stretchElement.reset();
    }
  },
  onInit() {
    elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);
    if (!this.elements.$menu.length) {
      return;
    }
    const elementSettings = this.getElementSettings(),
      iconValue = elementSettings.submenu_icon.value;
    let subIndicatorsContent = '';
    if (iconValue) {
      // The value of iconValue can be either className inside the editor or a markup in the frontend.
      subIndicatorsContent = iconValue.indexOf('<') > -1 ? iconValue : `<i class="${iconValue}"></i>`;
    }

    // SubIndicators param - Added for backwards compatibility:
    // If the old 'indicator' control value = 'none', the <span class="sub-arrow"> wrapper element is removed
    this.elements.$menu.smartmenus({
      subIndicators: '' !== subIndicatorsContent,
      subIndicatorsText: subIndicatorsContent,
      subIndicatorsPos: 'append',
      subMenusMaxWidth: '1000px'
    });
    this.initStretchElement();
    this.stretchMenu();
    if (!elementorFrontend.isEditMode()) {
      this.followMenuAnchors();
    }
  },
  onElementChange(propertyName) {
    if ('full_width' === propertyName) {
      this.stretchMenu();
    }
  },
  calculateStickyMenuNavHeight() {
    const menuToggleHeight = this.elements.$dropdownMenu?.offset().top - jQuery(window).scrollTop();
    return elementorFrontend.elements.$window.height() - menuToggleHeight;
  },
  isElementSticky() {
    return this.$element.hasClass('elementor-sticky') || this.$element.parents('.elementor-sticky').length;
  },
  getMenuHeight() {
    // Max-height value is fixed to 1000vmax in order to allow the mobile menu closing animation.
    return this.isElementSticky() ? this.calculateStickyMenuNavHeight() + 'px' : '1000vmax';
  },
  setMenuHeight(menuHeight) {
    this.elements.$dropdownMenu.css('--menu-height', menuHeight);
  },
  reassignMobileMenuHeight() {
    const menuHeight = this.elements.$menuToggle.hasClass('elementor-active') ? this.getMenuHeight() : 0;
    return this.setMenuHeight(menuHeight);
  },
  debounce(fn, time) {
    let timer;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, time);
    };
  }
});
exports["default"] = _default;

/***/ })

}]);
//# sourceMappingURL=nav-menu.82a1282825fb41657fb1.bundle.js.map
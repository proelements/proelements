/*! pro-elements - v3.14.0 - 18-06-2023 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["nav-menu"],{

/***/ "../assets/dev/js/frontend/utils/anchor-link.js":
/*!******************************************************!*\
  !*** ../assets/dev/js/frontend/utils/anchor-link.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class AnchorLinks {
  followMenuAnchors($anchorLinks, classes) {
    $anchorLinks.each((index, anchorLink) => {
      if (location.pathname === anchorLink.pathname && '' !== anchorLink.hash) {
        this.followMenuAnchor(jQuery(anchorLink), classes);
      }
    });
  }
  followMenuAnchor($element, classes) {
    const anchorSelector = $element[0].hash,
      activeAnchorClass = classes.activeAnchorItem,
      anchorClass = classes.anchorItem,
      $targetElement = $element.hasClass(anchorClass) ? $element : $element.closest(`.${anchorClass}`);
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
      const halfViewport = jQuery(window).height() / 2;
      offset = -$anchor.outerHeight() + halfViewport;
    }
    elementorFrontend.waypoint($anchor, direction => {
      if ('down' === direction) {
        $targetElement.addClass(activeAnchorClass);
        $element.attr('aria-current', 'location');
      } else {
        $targetElement.removeClass(activeAnchorClass);
        $element.attr('aria-current', '');
      }
    }, {
      offset: '50%',
      triggerOnce: false
    });
    elementorFrontend.waypoint($anchor, direction => {
      if ('down' === direction) {
        $targetElement.removeClass(activeAnchorClass);
        $element.attr('aria-current', '');
      } else {
        $targetElement.addClass(activeAnchorClass);
        $element.attr('aria-current', 'location');
      }
    }, {
      offset,
      triggerOnce: false
    });
  }
}
exports["default"] = AnchorLinks;

/***/ }),

/***/ "../modules/nav-menu/assets/js/frontend/handlers/nav-menu.js":
/*!*******************************************************************!*\
  !*** ../modules/nav-menu/assets/js/frontend/handlers/nav-menu.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _anchorLink = _interopRequireDefault(__webpack_require__(/*! ../../../../../../assets/dev/js/frontend/utils/anchor-link */ "../assets/dev/js/frontend/utils/anchor-link.js"));
var _default = elementorModules.frontend.handlers.Base.extend({
  stretchElement: null,
  getDefaultSettings() {
    return {
      selectors: {
        menu: '.elementor-nav-menu',
        anchorLink: '.elementor-nav-menu--main .elementor-item-anchor',
        dropdownMenu: '.elementor-nav-menu__container.elementor-nav-menu--dropdown',
        menuToggle: '.elementor-menu-toggle'
      },
      classes: {
        anchorItem: 'elementor-item-anchor',
        activeAnchorItem: 'elementor-item-active'
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
  dropdownMenuHeightControllerConfig() {
    const selectors = this.getSettings('selectors');
    return {
      elements: {
        $element: this.$element,
        $dropdownMenuContainer: this.$element.find(selectors.dropdownMenu),
        $menuToggle: this.$element.find(selectors.menuToggle)
      },
      classes: {
        menuToggleActiveClass: 'elementor-active'
      },
      settings: {
        dropdownMenuContainerMaxHeight: '1000vmax',
        // Max-height value is fixed to 1000vmax in order to allow the mobile menu closing animation.
        menuHeightCssVarName: '--menu-height'
      }
    };
  },
  bindEvents() {
    if (!this.elements.$menu.length) {
      return;
    }
    this.elements.$menuToggle.on('click', this.toggleMenu.bind(this)).on('keyup', this.triggerClickOnEnterSpace.bind(this));
    if (this.getElementSettings('full_width')) {
      this.elements.$dropdownMenuFinalItems.on('click', this.toggleMenu.bind(this, false)).on('keyup', this.triggerClickOnEnterSpace.bind(this));
    }
    elementorFrontend.addListenerOnce(this.$element.data('model-cid'), 'resize', this.stretchMenu);
    elementorFrontend.addListenerOnce(this.$element.data('model-cid'), 'scroll', elementorFrontend.debounce(this.menuHeightController.reassignMobileMenuHeight.bind(this.menuHeightController), 250));
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
    this.menuHeightController.reassignMobileMenuHeight(this);
    if (show && this.getElementSettings('full_width')) {
      this.stretchElement.stretch();
    }
  },
  triggerClickOnEnterSpace(event) {
    const ENTER_KEY = 13,
      SPACE_KEY = 32;
    if (ENTER_KEY === event.keyCode || SPACE_KEY === event.keyCode) {
      event.currentTarget.click();
      event.stopPropagation();
    }
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
    this.menuHeightController = new elementorProFrontend.utils.DropdownMenuHeightController(this.dropdownMenuHeightControllerConfig());
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
      const classes = this.getSettings('classes');
      this.anchorLinks = new _anchorLink.default();
      this.anchorLinks.followMenuAnchors(this.elements.$anchorLink, classes);
    }
  },
  onElementChange(propertyName) {
    if ('full_width' === propertyName) {
      this.stretchMenu();
    }
  }
});
exports["default"] = _default;

/***/ })

}]);
//# sourceMappingURL=nav-menu.ded2ef1815c81841b6b8.bundle.js.map
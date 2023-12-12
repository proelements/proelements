/*! pro-elements - v3.18.0 - 06-12-2023 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["menu-title-keyboard-handler"],{

/***/ "../modules/mega-menu/assets/js/frontend/handlers/menu-title-keyboard-handler.js":
/*!***************************************************************************************!*\
  !*** ../modules/mega-menu/assets/js/frontend/handlers/menu-title-keyboard-handler.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class MenuTitleKeyboardHandler extends elementorModules.frontend.handlers.NestedTitleKeyboardHandler {
  __construct() {
    super.__construct(...arguments);
    this.handleMenuToggleKeydown = this.handleMenuToggleKeydown.bind(this);
  }
  getDefaultSettings() {
    const settings = super.getDefaultSettings();
    settings.selectors.widgetInnerWrapper = '.e-n-menu';
    settings.selectors.menuToggle = '.e-n-menu-toggle';
    settings.selectors.itemTitle = '.e-focus';
    settings.selectors.itemContainer = '.e-n-menu-content > .e-con';
    settings.ariaAttributes.titleStateAttribute = 'aria-expanded';
    settings.ariaAttributes.activeTitleSelector = '[aria-expanded="true"]';
    settings.datasets.titleIndex = 'data-focus-index';
    return settings;
  }
  getDefaultElements() {
    const elements = super.getDefaultElements(),
      selectors = this.getSettings('selectors');
    elements.$menuToggle = this.findElement(selectors.menuToggle);
    return elements;
  }
  bindEvents() {
    super.bindEvents();
    this.elements.$menuToggle.on('keydown', this.handleMenuToggleKeydown);
  }
  unbindEvents() {
    super.unbindEvents();
    this.elements.$menuToggle.off('keydown', this.handleMenuToggleKeydown);
  }
  onInit() {
    super.onInit(...arguments);
    let focusTitleCount = 1;
    this.elements.$itemTitles.each((index, title) => {
      title.setAttribute(this.getSettings('datasets').titleIndex, focusTitleCount++);
    });
  }
  setTitleTabindex(titleIndex) {
    this.elements.$itemTitles.attr('tabindex', '-1');
    const $newTitle = this.elements.$itemTitles.filter(this.getTitleFilterSelector(titleIndex));
    $newTitle.attr('tabindex', '0');
    $newTitle.closest('.e-n-menu-title-container').next('.e-n-menu-dropdown-icon').attr('tabindex', '0');
    $newTitle.prev('.e-n-menu-title-container').find('a').attr('tabindex', '0');
  }
  handleMenuToggleKeydown(event) {
    if ('Escape' !== event.key) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    elementorFrontend.elements.$window.trigger('elementor/mega-menu/dropdown-toggle-by-keyboard', {
      widgetId: this.getID(),
      show: false
    });
  }
  handleTitleEscapeKeyEvents(event) {
    event.preventDefault();
    event.stopPropagation();
    const selectors = this.getSettings('selectors'),
      isDropdownLayout = 'dropdown' === this.$element.find(selectors.widgetInnerWrapper).data('layout');
    if (isDropdownLayout) {
      elementorFrontend.elements.$window.trigger('elementor/mega-menu/dropdown-toggle-by-keyboard', {
        widgetId: this.getID()
      });
      this.$element.find(selectors.menuToggle).trigger('focus');
    }
    elementorFrontend.elements.$window.trigger('elementor/nested-elements/activate-by-keyboard', {
      widgetId: this.getID()
    });
  }
  handleContentElementEscapeEvents() {
    this.getActiveTitleElement().trigger('focus');
    elementorFrontend.elements.$window.trigger('elementor/nested-elements/activate-by-keyboard', {
      widgetId: this.getID()
    });
  }
  handleContentElementTabEvents(event) {
    const $currentElement = jQuery(event.currentTarget),
      containerSelector = this.getSettings('selectors').itemContainer,
      $focusableContainerElements = this.getFocusableElements($currentElement.closest(containerSelector)),
      $lastFocusableElement = $focusableContainerElements.last(),
      isCurrentElementLastFocusableElement = $currentElement.is($lastFocusableElement);
    if (!isCurrentElementLastFocusableElement) {
      return;
    }
    event.preventDefault();
    const $activeTitle = this.getActiveTitleElement(),
      activeTitleIndex = parseInt(this.getTitleIndex($activeTitle[0]));
    elementorFrontend.elements.$window.trigger('elementor/nested-elements/activate-by-keyboard', {
      widgetId: this.getID()
    });
    this.changeTitleFocus(activeTitleIndex);
  }
}
exports["default"] = MenuTitleKeyboardHandler;

/***/ })

}]);
//# sourceMappingURL=menu-title-keyboard-handler.a60d7c4bb79732a4244e.bundle.js.map
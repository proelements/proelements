/*! pro-elements - v3.21.0 - 20-05-2024 */
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
class MenuTitleKeyboardHandler extends elementorModules.frontend.handlers.Base {
  __construct() {
    super.__construct(...arguments);
    this.focusableElementSelector = 'audio, button, canvas, details, iframe, input, select, summary, textarea, video, [accesskey], [contenteditable], a[href], area[href], [tabindex]';
    this.handleMenuToggleKeydown = this.handleMenuToggleKeydown.bind(this);
  }
  getDefaultSettings() {
    return {
      selectors: {
        widgetInnerWrapper: '.e-n-menu',
        menuItemWrapper: '.e-n-menu-title',
        menuItemElement: '.e-focus',
        itemContainer: '.e-n-menu-content > .e-con',
        menuToggle: '.e-n-menu-toggle'
      },
      ariaAttributes: {
        titleStateAttribute: 'aria-expanded',
        activeTitleSelector: '[aria-expanded="true"]',
        titleControlAttribute: 'aria-controls'
      },
      datasets: {
        titleIndex: 'data-focus-index'
      }
    };
  }
  getDefaultElements() {
    const selectors = this.getSettings('selectors');
    return {
      $menuItemWrappers: this.findElement(selectors.menuItemWrapper),
      $menuItemElements: this.findElement(selectors.menuItemElement),
      $itemContainers: this.findElement(selectors.itemContainer),
      $focusableContainerElements: this.getFocusableElements(this.findElement(selectors.itemContainer)),
      $menuToggle: this.findElement(selectors.menuToggle)
    };
  }
  getFocusableElements($elements) {
    return $elements.find(this.focusableElementSelector).not('[disabled], [inert], [tabindex="-1"]');
  }
  getTitleIndex(menuItemElement) {
    const {
      titleIndex: indexAttribute
    } = this.getSettings('datasets');
    return parseInt(menuItemElement?.getAttribute(indexAttribute));
  }
  getTitleFilterSelector(titleIndex) {
    const {
      titleIndex: indexAttribute
    } = this.getSettings('datasets');
    return `[${indexAttribute}="${titleIndex}"]`;
  }
  getActiveTitleElement() {
    const activeTitleFilter = this.getSettings('ariaAttributes').activeTitleSelector;
    return this.elements.$menuItemElements.filter(activeTitleFilter);
  }
  onInit() {
    super.onInit(...arguments);
    let focusTitleCount = 1;
    this.elements.$menuItemElements.each((index, title) => {
      title.setAttribute(this.getSettings('datasets').titleIndex, focusTitleCount++);
    });
  }
  getTitleEvents() {
    return {
      keydown: this.handleTitleKeyboardNavigation.bind(this)
    };
  }
  getContentElementEvents() {
    return {
      keydown: this.handleContentElementKeyboardNavigation.bind(this)
    };
  }
  bindEvents() {
    this.elements.$menuItemElements.on(this.getTitleEvents());
    this.elements.$focusableContainerElements.on(this.getContentElementEvents());
    this.elements.$menuToggle.on('keydown', this.handleMenuToggleKeydown);
  }
  unbindEvents() {
    this.elements.$menuItemElements.off();
    this.elements.$focusableContainerElements.off(this.getContentElementEvents());
    this.elements.$menuToggle.off('keydown', this.handleMenuToggleKeydown);
  }
  handleMenuToggleKeydown(event) {
    if ('Escape' !== event.key) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    this.closeMenuDropdown();
  }
  handleTitleKeyboardNavigation(event) {
    switch (event.key) {
      case 'Tab':
        if (event.shiftKey) {
          this.closeActiveContentElements();
        } else {
          this.handleTitleTab(event);
        }
        break;
      case 'Home':
      case 'End':
        this.handleTitleHomeOrEndKey(event);
        break;
      case 'Enter':
      case ' ':
        this.handleTitleActivationKey(event);
        break;
      case 'Escape':
        this.handleTitleEscapeKey(event);
        break;
    }
  }
  handleTitleTab(event) {
    const currentTitleIndex = this.getTitleIndex(event.currentTarget);
    this.maybeFocusMenuToggle(event, currentTitleIndex);
    const $activeTitle = this.getActiveTitleElement(),
      activeTitleIndex = this.getTitleIndex($activeTitle[0]) || false,
      isActiveTitle = currentTitleIndex === activeTitleIndex,
      activeTitleControl = $activeTitle.attr(this.getSettings('ariaAttributes').titleControlAttribute),
      $activeContainer = this.elements.$itemContainers.filter(`#${activeTitleControl}`),
      activeContainerHasFocusableItems = 0 !== this.getFocusableElements($activeContainer).length;
    if (!isActiveTitle || !activeContainerHasFocusableItems) {
      this.closeActiveContentElements();
      return;
    }
    this.focusFirstFocusableContainerElement(event, activeTitleControl);
  }
  maybeFocusMenuToggle(event, titleIndex) {
    const isLastTitle = this.isLastTitle(titleIndex);
    if (!isLastTitle || !this.isDropdownLayout()) {
      return;
    }
    const activeStateAttribute = this.getSettings('ariaAttributes').titleStateAttribute,
      currentTitle = event.currentTarget,
      isContainerOpen = 'true' === currentTitle.getAttribute(activeStateAttribute),
      containerHasFocusableItems = 0 !== this.getFocusableElements(this.elements.$itemContainers.last()).length;
    if (isContainerOpen && containerHasFocusableItems) {
      return;
    }
    this.setFocusToMenuToggle();
    event.preventDefault();
    event.stopPropagation();
  }
  setFocusToMenuToggle() {
    const selectors = this.getSettings('selectors');
    this.$element.find(selectors.menuToggle).trigger('focus');
  }
  isDropdownLayout() {
    const selectors = this.getSettings('selectors');
    return 'dropdown' === this.$element.find(selectors.widgetInnerWrapper).attr('data-layout');
  }
  closeMenuDropdown() {
    elementorFrontend.elements.$window.trigger('elementor/mega-menu/dropdown-toggle-by-keyboard', {
      widgetId: this.getID(),
      show: false
    });
  }
  handleTitleHomeOrEndKey(event) {
    event.preventDefault();
    const currentTitleIndex = this.getTitleIndex(event.currentTarget) || 1,
      numberOfTitles = this.elements.$menuItemElements.length,
      titleIndexUpdated = this.getTitleIndexFocusUpdated(event, currentTitleIndex, numberOfTitles);
    this.setTitleFocus(titleIndexUpdated);
    event.stopPropagation();
  }
  handleTitleActivationKey(event) {
    event.preventDefault();
    if (this.handleTitleLinkEnterOrSpaceEvent(event)) {
      return;
    }
    const titleIndex = this.getTitleIndex(event.currentTarget);
    elementorFrontend.elements.$window.trigger('elementor/nested-elements/activate-by-keyboard', {
      widgetId: this.getID(),
      titleIndex
    });
  }
  setTitleFocus(titleIndexUpdated) {
    const $newTitle = this.elements.$menuItemElements.filter(this.getTitleFilterSelector(titleIndexUpdated));
    $newTitle.trigger('focus');
  }
  isLastTitle(titleIndex) {
    return this.elements.$menuItemElements.length === titleIndex;
  }
  handleTitleLinkEnterOrSpaceEvent(event) {
    const isLinkElement = 'a' === event?.currentTarget?.tagName?.toLowerCase();
    if (!elementorFrontend.isEditMode() && isLinkElement) {
      event?.currentTarget?.click();
      event.stopPropagation();
    }
    return isLinkElement;
  }
  handleTitleEscapeKey(event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.isDropdownLayout()) {
      elementorFrontend.elements.$window.trigger('elementor/mega-menu/dropdown-toggle-by-keyboard', {
        widgetId: this.getID()
      });
      this.setFocusToMenuToggle();
    }
    elementorFrontend.elements.$window.trigger('elementor/nested-elements/activate-by-keyboard', {
      widgetId: this.getID()
    });
  }
  handleContentElementKeyboardNavigation(event) {
    switch (event.key) {
      case 'Tab':
        const tabDirection = event.shiftKey ? 'previous' : 'next';
        this.handleContentElementTabEvents(event, tabDirection);
        break;
      case 'Escape':
        event.preventDefault();
        event.stopPropagation();
        this.handleContentElementEscapeEvents(event);
        break;
    }
  }
  handleContentElementTabEvents(event, direction) {
    const $currentElement = jQuery(event.currentTarget),
      containerSelector = this.getSettings('selectors').itemContainer,
      $currentContainer = $currentElement.closest(containerSelector),
      $focusableContainerElements = this.getFocusableElements($currentContainer);
    let $lastFocusableElement;
    if ('previous' === direction) {
      $lastFocusableElement = $focusableContainerElements.first();
    } else {
      $lastFocusableElement = $focusableContainerElements.last();
    }
    const isCurrentElementLastFocusableElement = $currentElement.is($lastFocusableElement);
    if (!isCurrentElementLastFocusableElement) {
      return;
    }
    event.preventDefault();
    const $activeTitle = this.getActiveTitleElement(),
      activeTitleIndex = this.getTitleIndex($activeTitle[0]);
    this.setTitleFocus(activeTitleIndex);
    event.stopPropagation();
  }
  handleContentElementEscapeEvents() {
    this.getActiveTitleElement().trigger('focus');
    this.closeActiveContentElements();
  }
  focusFirstFocusableContainerElement(event, titleControl) {
    const currentContainerSelector = `#${titleControl}`,
      $activeContainer = this.elements.$itemContainers.filter(currentContainerSelector),
      $firstFocusableContainer = this.getFocusableElements($activeContainer).first();
    if (0 === $firstFocusableContainer.length) {
      return;
    }
    event.preventDefault();
    $firstFocusableContainer[0]?.focus();
    event.stopPropagation();
  }
  closeActiveContentElements() {
    elementorFrontend.elements.$window.trigger('elementor/nested-elements/activate-by-keyboard', {
      widgetId: this.getID()
    });
  }
}
exports["default"] = MenuTitleKeyboardHandler;

/***/ })

}]);
//# sourceMappingURL=menu-title-keyboard-handler.255f6b16a2f292e5c260.bundle.js.map
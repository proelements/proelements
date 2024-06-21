/*! pro-elements - - v3.22.0 - 16-06-2024 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["menu-title-keyboard-handler"],{

/***/ "../modules/mega-menu/assets/js/frontend/handlers/menu-title-keyboard-handler.js":
/*!***************************************************************************************!*\
  !*** ../modules/mega-menu/assets/js/frontend/handlers/menu-title-keyboard-handler.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));
var _focusableElementSelectors = __webpack_require__(/*! elementor-pro/frontend/utils/focusable-element-selectors */ "../assets/dev/js/frontend/utils/focusable-element-selectors.js");
class MenuTitleKeyboardHandler extends elementorModules.frontend.handlers.Base {
  constructor() {
    super(...arguments);
    (0, _defineProperty2.default)(this, "isEditorElementsChanged", false);
  }
  __construct() {
    super.__construct(...arguments);
    this.focusableElementSelector = (0, _focusableElementSelectors.focusableElementSelectors)();
    this.handleMenuToggleKeydown = this.handleMenuToggleKeydown.bind(this);
  }
  getDefaultSettings() {
    return {
      selectors: {
        widgetInnerWrapper: '.e-n-menu',
        menuItemWrapper: '.e-n-menu-title',
        focusableMenuElement: '.e-focus',
        itemContainer: '.e-n-menu-content > .e-con',
        menuToggle: '.e-n-menu-toggle',
        directTabTitle: ':scope > .elementor-widget-container > .e-n-menu > .e-n-menu-wrapper > .e-n-menu-heading > .e-n-menu-title',
        tabDropdown: '.e-n-menu-dropdown-icon'
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
      $focusableMenuElements: this.findElement(selectors.focusableMenuElement),
      $itemContainers: this.findElement(selectors.itemContainer),
      $focusableContainerElements: this.getFocusableElements(this.findElement(selectors.itemContainer)),
      $menuToggle: this.findElement(selectors.menuToggle)
    };
  }
  getFocusableElements($elements) {
    return $elements.find(this.focusableElementSelector).not('[disabled], [inert], [tabindex="-1"]');
  }
  getTitleIndex(focusableMenuElement) {
    const {
      titleIndex: indexAttribute
    } = this.getSettings('datasets');
    return parseInt(focusableMenuElement?.getAttribute(indexAttribute));
  }
  getTitleFilterSelector(titleIndex) {
    const {
      titleIndex: indexAttribute
    } = this.getSettings('datasets');
    return `[${indexAttribute}="${titleIndex}"]`;
  }
  getActiveTitleElement() {
    const activeTitleFilter = this.getSettings('ariaAttributes').activeTitleSelector;
    return this.elements.$focusableMenuElements.filter(activeTitleFilter);
  }
  onInit() {
    super.onInit(...arguments);
    let focusTitleCount = 1;
    this.elements.$focusableMenuElements.each((index, title) => {
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
    this.elements.$focusableMenuElements.on(this.getTitleEvents());
    this.elements.$focusableContainerElements.on(this.getContentElementEvents());
    this.elements.$menuToggle.on('keydown', this.handleMenuToggleKeydown);
    elementorFrontend.elements.$window.on('elementor/nested-container/atomic-repeater', this.linkContainer.bind(this));
  }
  unbindEvents() {
    this.elements.$focusableMenuElements.off();
    this.elements.$focusableContainerElements.off(this.getContentElementEvents());
    this.elements.$menuToggle.off('keydown', this.handleMenuToggleKeydown);
    elementorFrontend.elements.$window.off('elementor/nested-container/atomic-repeater', this.linkContainer.bind(this));
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
    if (this.isEditorElementsChanged) {
      this.rebindFocusableElements();
    }
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
      numberOfTitles = this.elements.$focusableMenuElements.length,
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
    const $newTitle = this.elements.$focusableMenuElements.filter(this.getTitleFilterSelector(titleIndexUpdated));
    $newTitle.trigger('focus');
  }
  isLastTitle(titleIndex) {
    return this.elements.$focusableMenuElements.length === titleIndex;
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
  rebindFocusableElements() {
    this.elements.$focusableContainerElements.off();
    this.elements.$focusableContainerElements = this.getFocusableElements(this.elements.$itemContainers);
    this.elements.$focusableContainerElements.on(this.getContentElementEvents());
    this.isEditorElementsChanged = false;
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
  linkContainer(event) {
    const {
        container
      } = event.detail,
      id = container.model.get('id'),
      currentId = String(this.$element.data('id')),
      view = container.view.$el;
    if (id === currentId) {
      this.updateIndexValues(view);
      this.updateListeners(view);
    }
  }
  updateIndexValues(view) {
    const {
        selectors: {
          directTabTitle,
          tabDropdown
        }
      } = this.getDefaultSettings(),
      currentMenu = view[0],
      tabTitles = currentMenu.querySelectorAll(directTabTitle);
    let focusTitleCount = 1;
    tabTitles.forEach(element => {
      if (element.querySelector('a')) {
        element.querySelector('a').setAttribute('data-focus-index', focusTitleCount++);
      }
      if (element.querySelector(tabDropdown)) {
        element.querySelector(tabDropdown).setAttribute('data-focus-index', focusTitleCount++);
      }
    });
  }
  updateListeners(view) {
    this.elements.$focusableMenuElements.off();
    const {
      selectors: {
        focusableMenuElement,
        itemContainer
      }
    } = this.getSettings();
    this.elements.$focusableMenuElements = view.find(focusableMenuElement);
    this.elements.$itemContainers = view.find(itemContainer);
    this.elements.$focusableMenuElements.on(this.getTitleEvents());
    this.isEditorElementsChanged = true;
  }
}
exports["default"] = MenuTitleKeyboardHandler;

/***/ })

}]);
//# sourceMappingURL=menu-title-keyboard-handler.c652b7c2092bb13e8824.bundle.js.map
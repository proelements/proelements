/*! pro-elements - v3.14.0 - 18-06-2023 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["mega-menu"],{

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

/***/ "../modules/mega-menu/assets/js/frontend/handlers/mega-menu.js":
/*!*********************************************************************!*\
  !*** ../modules/mega-menu/assets/js/frontend/handlers/mega-menu.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _utils = __webpack_require__(/*! ../utils */ "../modules/mega-menu/assets/js/frontend/utils.js");
var _anchorLink = _interopRequireDefault(__webpack_require__(/*! ../../../../../../assets/dev/js/frontend/utils/anchor-link */ "../assets/dev/js/frontend/utils/anchor-link.js"));
class MegaMenu extends elementorModules.frontend.handlers.NestedTabs {
  constructor() {
    super(...arguments);
    if (elementorFrontend.isEditMode()) {
      this.lifecycleChangeListener = null;
    }
    this.resizeListener = null;
  }
  getDefaultSettings() {
    const settings = super.getDefaultSettings();
    settings.selectors.menuContainer = '.e-n-menu';
    settings.selectors.tabTitle = '.e-n-menu-item-title';
    settings.selectors.desktopTabTitle = '.e-n-menu-items-heading .e-n-menu-item-title';
    settings.selectors.mobileTabTitle = '.e-n-menu-items-content .e-n-menu-item-title';
    settings.selectors.headingContainer = '.e-n-menu-items-heading';
    settings.autoExpand = false;
    settings.autoFocus = false;
    settings.selectors.dropdownMenuToggle = '.e-n-menu-toggle';
    settings.selectors.menuContent = '.e-n-menu-items-content';
    settings.selectors.contentContainer = '.e-n-menu-items-content .e-con';
    settings.selectors.anchorLink = '.e-anchor a';
    settings.classes.anchorItem = 'e-anchor';
    settings.classes.activeAnchorItem = 'e-current';
    return settings;
  }
  getDefaultElements() {
    const elements = super.getDefaultElements(),
      selectors = this.getSettings('selectors');
    elements.$menuContainer = this.$element.find(selectors.menuContainer);
    elements.$dropdownMenuToggle = this.$element.find(selectors.dropdownMenuToggle);
    elements.$menuContent = this.$element.find(selectors.menuContent);
    elements.$headingContainer = this.$element.find(selectors.headingContainer);
    elements.$desktopTabTitles = this.$element.find(selectors.desktopTabTitle);
    elements.$mobileTabTitles = this.$element.find(selectors.mobileTabTitle);
    elements.$contentContainers = this.$element.find(selectors.contentContainer);
    elements.$anchorLink = this.$element.find(selectors.anchorLink);
    return elements;
  }
  dropdownMenuHeightControllerConfig() {
    const selectors = this.getSettings('selectors');
    return {
      elements: {
        $element: this.$element,
        $dropdownMenuContainer: this.$element.find(selectors.menuContent),
        $menuToggle: this.$element.find(selectors.dropdownMenuToggle)
      },
      classes: {
        menuToggleActiveClass: 'e-active'
      },
      settings: {
        dropdownMenuContainerMaxHeight: 'auto',
        menuHeightCssVarName: '--n-menu-dropdown-content-box-height'
      }
    };
  }
  handleContentContainerPosition() {
    let $contentContainer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    this.resetContentContainersPosition();

    // If no container is passed as an argument, check if there is an active container.
    $contentContainer = $contentContainer || this.elements.$contentContainers.filter('.e-active');
    if (!$contentContainer.length) {
      return;
    }
    this.setContentContainerAbsolutePosition($contentContainer);
  }
  setContentContainerAbsolutePosition($contentContainer) {
    const elementSettings = this.getElementSettings(),
      isFitToContent = 'fit_to_content' === elementSettings.content_width;
    if ((0, _utils.isMenuInDropdownMode)(elementSettings)) {
      return;
    }
    if (isFitToContent) {
      const direction = elementorFrontend.config.is_rtl ? 'right' : 'left',
        menuItemContainerOffset = 0 < this.getMenuItemContainerAbsolutePosition($contentContainer) ? this.getMenuItemContainerAbsolutePosition($contentContainer) : 0;
      $contentContainer.css(direction, menuItemContainerOffset);
    }
    const headingsHeight = this.elements.$headingContainer[0].getBoundingClientRect().height;
    if (this.shouldPositionContentAbove($contentContainer, headingsHeight)) {
      const contentContainerBoundingBox = $contentContainer[0].getBoundingClientRect();
      $contentContainer.css({
        width: isFitToContent ? 'max-content' : '',
        'max-width': contentContainerBoundingBox.width
      });
      this.elements.$menuContent.addClass('content-above');
    }
  }
  getMenuItemContainerAbsolutePosition($contentContainer) {
    const tabIndex = $contentContainer.data('content'),
      $titleEl = this.elements.$tabTitles.filter(this.getTabTitleFilterSelector(tabIndex))[0],
      titleBoundingBox = $titleEl.getBoundingClientRect(),
      contentContainerWidth = $contentContainer[0].clientWidth;
    let menuItemContainerOffset = null;
    switch (this.getElementSettings('content_horizontal_position')) {
      case 'left':
        menuItemContainerOffset = this.getLeftDirectionContainerOffset(contentContainerWidth, titleBoundingBox);
        break;
      case 'right':
        menuItemContainerOffset = this.getRightDirectionContainerOffset(contentContainerWidth, titleBoundingBox);
        break;
      default:
        menuItemContainerOffset = this.getCenteredContainerOffset(contentContainerWidth, titleBoundingBox);
    }
    return menuItemContainerOffset;
  }
  getCenteredContainerOffset(contentContainerWidth, titleBoundingBox) {
    const menuItemContentContainerHalfWidth = contentContainerWidth / 2,
      bodyWidth = elementorFrontend.elements.$body[0].clientWidth;
    let titleMiddleOffset = this.adjustForScrollbarIfNeeded(titleBoundingBox.left + titleBoundingBox.width / 2);
    if (elementorFrontend.config.is_rtl) {
      titleMiddleOffset = bodyWidth - titleMiddleOffset;
    }
    let offset = titleMiddleOffset - menuItemContentContainerHalfWidth;
    if (titleMiddleOffset + menuItemContentContainerHalfWidth > bodyWidth) {
      offset = bodyWidth - contentContainerWidth;
    } else if (menuItemContentContainerHalfWidth > titleMiddleOffset) {
      offset = 0;
    }
    return offset;
  }
  getLeftDirectionContainerOffset(contentContainerWidth, titleBoundingBox) {
    return elementorFrontend.config.is_rtl ? this.getRtlLeftDirectionContainerOffset(contentContainerWidth, titleBoundingBox) : this.getLtrLeftDirectionContainerOffset(contentContainerWidth, titleBoundingBox);
  }
  getRtlLeftDirectionContainerOffset(contentContainerWidth, titleBoundingBox) {
    const bodyWidth = elementorFrontend.elements.$body[0].clientWidth,
      titleLeftOffset = this.adjustForScrollbarIfNeeded(titleBoundingBox.left);
    let offset = bodyWidth - titleLeftOffset - contentContainerWidth;

    // If the content container doesn't fit in the viewport, align its right edge with the viewport's right edge.
    if (-offset + contentContainerWidth > bodyWidth) {
      offset = 0;
    }
    return offset;
  }
  getLtrLeftDirectionContainerOffset(contentContainerWidth, titleBoundingBox) {
    let offset = this.adjustForScrollbarIfNeeded(titleBoundingBox.left);
    offset = this.adjustStartOffsetToViewport(offset, contentContainerWidth);
    return offset;
  }
  getRightDirectionContainerOffset(contentContainerWidth, titleBoundingBox) {
    return elementorFrontend.config.is_rtl ? this.getRtlRightDirectionContainerOffset(contentContainerWidth, titleBoundingBox) : this.getLtrRightDirectionContainerOffset(contentContainerWidth, titleBoundingBox);
  }
  getRtlRightDirectionContainerOffset(contentContainerWidth, titleBoundingBox) {
    const bodyWidth = elementorFrontend.elements.$body[0].clientWidth;
    let offset = bodyWidth - this.adjustForScrollbarIfNeeded(titleBoundingBox.right);
    offset = this.adjustStartOffsetToViewport(offset, contentContainerWidth);
    return offset;
  }

  /**
   * If the content container doesn't fit in the viewport, align its right edge with the viewport's right edge.
   *
   * @param {number} offset
   * @param {number} contentContainerWidth
   */
  adjustStartOffsetToViewport(offset, contentContainerWidth) {
    const bodyWidth = elementorFrontend.elements.$body[0].clientWidth;
    if (offset + contentContainerWidth > bodyWidth) {
      offset = bodyWidth - contentContainerWidth;
    }
    return offset;
  }
  getLtrRightDirectionContainerOffset(contentContainerWidth, titleBoundingBox) {
    return contentContainerWidth > titleBoundingBox.right ? 0 : titleBoundingBox.right - contentContainerWidth;
  }
  adjustForScrollbarIfNeeded(offset) {
    if (elementorFrontend.config.is_rtl && elementorFrontend.isEditMode()) {
      const scrollbarWidth = window.innerWidth - elementorFrontend.elements.$body[0].clientWidth;
      offset -= scrollbarWidth;
    }
    return offset;
  }
  getMenuContainerOffset() {
    const menuContainerBoundingBox = this.elements.$menuContainer[0].getBoundingClientRect();
    return elementorFrontend.config.is_rtl ? this.getMenuContainerOffsetRtl(menuContainerBoundingBox) : menuContainerBoundingBox.left;
  }
  getMenuContainerOffsetRtl(menuContainerBoundingBox) {
    const bodyWidth = elementorFrontend.elements.$body[0].clientWidth;
    let menuContainerOffset = bodyWidth - menuContainerBoundingBox.right;
    if (elementorFrontend.isEditMode()) {
      // In RTL mode, the editor's scrollbar is on the left side, so we need to add its width to the offset.
      const scrollbarWidth = window.innerWidth - bodyWidth;
      menuContainerOffset += scrollbarWidth;
    }
    return menuContainerOffset;
  }
  resetContentContainersPosition() {
    this.elements.$contentContainers.css({
      left: '',
      right: '',
      bottom: '',
      position: 'var(--position)',
      'max-width': '',
      width: 'var(--width)'
    });
    this.elements.$menuContent.removeClass('content-above');
  }
  getTabContentFilterSelector(tabIndex) {
    return `[data-content="${tabIndex}"]`;
  }
  activateTab(tabIndex) {
    const settings = this.getSettings(),
      activeClass = settings.classes.active,
      containerClass = settings.selectors.tabContent,
      $requestedTitle = this.elements.$tabTitles.filter(this.getTabTitleFilterSelector(tabIndex)),
      animationDuration = 'show' === settings.showTabFn ? 0 : 400,
      $requestedContent = this.elements.$tabContents.filter(this.getTabContentFilterSelector(tabIndex));
    this.addAnimationToContentIfNeeded(tabIndex);
    if ($requestedContent.hasClass(containerClass.replace('.', ''))) {
      $requestedContent[settings.showTabFn](animationDuration, () => this.onShowTabContent($requestedContent));
      $requestedTitle.add($requestedContent).addClass(activeClass);
      $requestedContent.css({
        display: 'var(--display)'
      });
      $requestedContent.removeAttr('hidden display');
      if (elementorFrontend.isEditMode()) {
        this.activeContainerWidthListener($requestedContent);
      }
    }
  }
  deactivateActiveTab(tabIndex) {
    const settings = this.getSettings(),
      activeClass = settings.classes.active,
      activeContentFilter = tabIndex ? this.getTabContentFilterSelector(tabIndex) : '.' + activeClass,
      $activeContent = this.elements.$tabContents.filter(activeContentFilter);
    super.deactivateActiveTab(tabIndex);
    this.removeAnimationFromContentIfNeeded();
    if (elementorFrontend.isEditMode() && !!$activeContent.length) {
      this.observedContainer?.unobserve($activeContent[0]);
    }
  }
  shouldPositionContentAbove($contentContainer) {
    let offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    const contentDimensions = $contentContainer[0].getBoundingClientRect();
    return this.isContentShorterThanItsTopOffset(contentDimensions, offset) && this.isContentTallerThanItsBottomOffset(contentDimensions);
  }
  isContentShorterThanItsTopOffset(contentDimensions, offset) {
    return contentDimensions.height < contentDimensions.top - offset;
  }
  isContentTallerThanItsBottomOffset(contentDimensions) {
    return window.innerHeight - contentDimensions.top < contentDimensions.height;
  }
  onShowTabContent($requestedContent) {
    this.handleContentContainerPosition($requestedContent);
    super.onShowTabContent($requestedContent);
  }
  onHideTabContent() {
    if (this.elements.$menuContent.hasClass('content-above')) {
      this.resetContentContainersPosition();
    }
  }
  changeActiveTab(tabIndex) {
    let fromUser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    const isActiveTab = this.isActiveTab(tabIndex);
    this.deactivateActiveTab();
    if (!isActiveTab || isActiveTab && !fromUser) {
      this.activateTab(tabIndex);
    }
  }
  onTabClick(event) {
    if (event.currentTarget.classList.contains('link-only')) {
      return;
    }
    this.changeActiveTab(event.currentTarget.getAttribute('data-tab'), true);
  }
  bindEvents() {
    this.elements.$desktopTabTitles.on(this.getDesktopTabEvents());
    this.elements.$mobileTabTitles.on(this.getTabEvents());
    this.elements.$dropdownMenuToggle.on('click', this.onClickToggleDropdownMenu.bind(this));
    this.elements.$tabContents.on(this.getContentEvents());
    this.elements.$menuContent.on(this.getContentEvents());
    elementorFrontend.addListenerOnce(this.getModelCID(), 'scroll', elementorFrontend.debounce(this.menuHeightController.reassignMobileMenuHeight.bind(this.menuHeightController), 250));
    elementorFrontend.elements.$window.on('elementor/nested-tabs/activate', this.reInitSwipers);
    this.resizeListener = this.handleContentContainerPosition.bind(this);
    elementorFrontend.elements.$window.on('resize', this.resizeListener);
    if (elementorFrontend.isEditMode()) {
      this.addChildLifeCycleEventListeners();
    }
  }

  /**
   * Add Child Lifecycle Event Listeners
   *
   * This method adds event listeners for the elementor/editor/element-rendered and elementor/editor/element-destroyed
   * events. These events are fired when an element is rendered or destroyed in the editor. The callback functions
   * check if the rendered/destroyed element is nested in this mega-menu instance, and if it is, triggeres the
   * recalculation of the mega-menu's content containers position.
   */
  addChildLifeCycleEventListeners() {
    this.lifecycleChangeListener = this.handleContentContainerChildrenChanges.bind(this);
    window.addEventListener('elementor/editor/element-rendered', this.lifecycleChangeListener);
    window.addEventListener('elementor/editor/element-destroyed', this.lifecycleChangeListener);
  }
  removeChildLifeCycleEventListeners() {
    window.removeEventListener('elementor/editor/element-rendered', this.lifecycleChangeListener);
    window.removeEventListener('elementor/editor/element-destroyed', this.lifecycleChangeListener);
  }
  unbindEvents() {
    this.elements.$desktopTabTitles.off();
    this.elements.$mobileTabTitles.off();
    this.elements.$menuContent.off();
    this.elements.$tabContents.off();
    elementorFrontend.elements.$window.off('resize', this.resizeListener);
    if (elementorFrontend.isEditMode()) {
      this.removeChildLifeCycleEventListeners();
    }
  }
  handleContentContainerChildrenChanges(event) {
    if (!this.isNestedElementRenderedInContentContainer(event.detail.elementView)) {
      return;
    }
    this.handleContentContainerPosition();
  }
  isNestedElementRenderedInContentContainer(elementView) {
    const elementContainer = elementView?.getContainer();
    if (!elementContainer) {
      return false;
    }
    const elementAncestors = elementContainer.getParentAncestry();
    return elementAncestors.some(parent => this.getID() === parent.model.get('id'));
  }
  getDesktopTabEvents() {
    const tabEvents = this.getTabEvents();
    return this.isNeedToOpenOnClick() ? tabEvents : this.replaceClickWithHover(tabEvents);
  }
  getContentEvents() {
    return this.isNeedToOpenOnClick() ? {} : {
      mouseleave: this.onMouseLeave.bind(this)
    };
  }
  isNeedToOpenOnClick() {
    const elementSettings = this.getElementSettings();
    return this.isEdit || this.isMobileDevice() || 'hover' !== elementSettings.open_on || 'dropdown' === elementSettings.item_layout;
  }
  isMobileDevice() {
    const mobileDevices = ['mobile', 'mobile_extra', 'tablet', 'tablet_extra'];
    return mobileDevices.includes(elementorFrontend.getCurrentDeviceMode());
  }
  replaceClickWithHover(tabEvents) {
    delete tabEvents.click;
    tabEvents.mouseenter = this.onMouseTitleEnter.bind(this);
    tabEvents.mouseleave = this.onMouseLeave.bind(this);
    return tabEvents;
  }
  onMouseTitleEnter(event) {
    event.preventDefault();
    const isActiveTabTitle = event.currentTarget.classList.contains(this.getActiveClass());
    if (isActiveTabTitle) {
      return;
    }
    this.changeActiveTab(event.currentTarget.getAttribute('data-tab'), true);
  }
  onClickToggleDropdownMenu(show) {
    const settings = this.getSettings(),
      activeClass = settings.classes.active,
      isDropdownVisible = this.elements.$dropdownMenuToggle.hasClass(activeClass);
    if ('boolean' !== typeof show) {
      show = !isDropdownVisible;
    }
    this.elements.$dropdownMenuToggle.toggleClass(activeClass, show);
    this.elements.$menuContent.toggleClass(activeClass, show);
    elementorFrontend.utils.events.dispatch(window, 'elementor-pro/mega-menu/dropdown-open');
    this.menuHeightController.reassignMobileMenuHeight();
  }
  addAnimationToContentIfNeeded(tabIndex) {
    const openAnimation = this.getElementSettings('open_animation');
    if ('none' === openAnimation) {
      return;
    }
    const $requestedContent = this.elements.$tabContents.filter(this.getTabContentFilterSelector(tabIndex));
    $requestedContent.addClass(`animated ${openAnimation}`);
  }
  removeAnimationFromContentIfNeeded() {
    const openAnimation = this.getElementSettings('open_animation');
    if ('none' === openAnimation) {
      return;
    }
    this.elements.$tabContents.removeClass(`animated ${openAnimation}`);
  }
  isHoveredDropdownMenu(isMouseLeavingTabContent) {
    const settings = this.getSettings(),
      $widget = this.$element,
      isMenuContentHover = 0 < $widget.find(`${settings.selectors.menuContent}:hover`).length,
      isTabContentHover = 0 < $widget.find(`${settings.selectors.tabContent}:hover`).length;
    return isTabContentHover || !isMouseLeavingTabContent && isMenuContentHover;
  }
  onMouseLeave(event) {
    event.preventDefault();
    const isMouseLeavingTabContent = event.currentTarget.classList.contains('e-con');
    if (this.isHoveredDropdownMenu(isMouseLeavingTabContent)) {
      return;
    }
    this.deactivateActiveTab();
  }
  createMobileTabs() {
    const settings = this.getSettings();
    if (elementorFrontend.isEditMode()) {
      let index = 1;
      const $widget = this.$element,
        $contentAreaContainer = this.findElement('.e-n-menu-items-content');
      this.findElement('.e-n-menu-items-heading > .e-n-menu-item-title').each(function () {
        const $desktopTabTitle = $widget.find(`${settings.selectors.headingContainer} > *:nth-child( ${index})`).clone(),
          $mobileTitleHTML = $desktopTabTitle.removeClass('e-normal').addClass('e-collapse');

        // Avoid any possible duplication.
        if ($widget.find(`#${$mobileTitleHTML[0].id}.e-collapse`).length > 0) {
          return;
        }
        $contentAreaContainer.append($mobileTitleHTML);
        const $currentContainer = $widget.find(`.e-con[data-content="${index}"]`);
        if ($currentContainer[0]) {
          $currentContainer.insertAfter($widget.find(`.e-n-menu-items-content > .e-collapse[data-tab="${index}"]`));
        }
        index++;
      });
    }
  }
  onInit() {
    this.menuHeightController = new elementorProFrontend.utils.DropdownMenuHeightController(this.dropdownMenuHeightControllerConfig());
    super.onInit(...arguments);
    if (!elementorFrontend.isEditMode()) {
      const classes = this.getSettings('classes');
      this.anchorLinks = new _anchorLink.default();
      this.anchorLinks.followMenuAnchors(this.elements.$anchorLink, classes);
    }
  }
  getPropsThatTriggerContentPositionCalculations() {
    return ['content_horizontal_position', 'content_position', 'item_position_horizontal', 'content_width', 'item_layout'];
  }
  activeContainerWidthListener($activeContainer) {
    let previousWidth = 0;
    this.observedContainer = new ResizeObserver(activeContainer => {
      const currentWidth = activeContainer[0].borderBoxSize?.[0].inlineSize;
      if (!!currentWidth && currentWidth !== previousWidth) {
        previousWidth = currentWidth;
        if (0 !== previousWidth) {
          this.handleContentContainerPosition();
        }
      }
    });
    this.observedContainer.observe($activeContainer[0]);
  }
  onElementChange(propertyName) {
    if (this.getPropsThatTriggerContentPositionCalculations().includes(propertyName)) {
      this.handleContentContainerPosition();
    }
  }
  onEditSettingsChange(propertyName, value) {
    const settings = this.getSettings();
    if (settings.autoFocus) {
      super.onEditSettingsChange(propertyName, value);
    }
  }
}
exports["default"] = MegaMenu;

/***/ }),

/***/ "../modules/mega-menu/assets/js/frontend/utils.js":
/*!********************************************************!*\
  !*** ../modules/mega-menu/assets/js/frontend/utils.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isMenuInDropdownMode = isMenuInDropdownMode;
function isMenuInDropdownMode(elementSettings) {
  if ('dropdown' === elementSettings.item_layout) {
    return true;
  }
  const activeBreakpointsList = elementorFrontend.breakpoints.getActiveBreakpointsList({
      withDesktop: true
    }),
    breakpointIndex = activeBreakpointsList.indexOf(elementSettings.breakpoint_selector),
    currentDeviceModeIndex = activeBreakpointsList.indexOf(elementorFrontend.getCurrentDeviceMode());
  return currentDeviceModeIndex <= breakpointIndex;
}

/***/ })

}]);
//# sourceMappingURL=mega-menu.6a41b17ca3362b2df95d.bundle.js.map
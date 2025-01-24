/*!pro-elements - v3.27.0 - 20-01-2025 */
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
  observer = null;
  constructor($anchorLinks, classes) {
    this.$anchorLinks = $anchorLinks;
    this.activeAnchorClass = classes.activeAnchorItem;
    this.anchorClass = classes.anchorItem;
  }
  getViewportHeight() {
    return window.innerHeight;
  }
  bindEvents() {
    this.onResize = this.onResize.bind(this);
    window.addEventListener('resize', this.onResize);
  }
  initialize() {
    this.viewPortHeight = this.getViewportHeight();
    this.followMenuAnchors();
    this.bindEvents();
  }
  followMenuAnchors() {
    this.$anchorLinks.each((index, anchorLink) => {
      if (location.pathname === anchorLink.pathname && '' !== anchorLink.hash) {
        this.followMenuAnchor(jQuery(anchorLink));
      }
    });
  }
  followMenuAnchor($element) {
    const $targetElement = $element.hasClass(this.anchorClass) ? $element : $element.closest(`.${this.anchorClass}`);
    const anchorElement = this.getAnchorElement($element);
    if (!anchorElement) {
      return;
    }
    const options = this.getObserverOptions(anchorElement);
    this.observer = this.createObserver($targetElement, $element, options);
    this.observer.observe(anchorElement);
  }
  getAnchorElement($element) {
    const anchorSelector = $element[0].hash;
    try {
      // `decodeURIComponent` for UTF8 characters in the hash.
      const decodedSelector = decodeURIComponent(anchorSelector);
      return document.querySelector(decodedSelector);
    } catch (e) {
      return null;
    }
  }
  getObserverOptions(element) {
    return {
      root: null,
      rootMargin: this.calculateRootMargin(element)
    };
  }
  calculateRootMargin(element) {
    const anchorHeight = element?.offsetHeight || 0;
    const isAnchorHeightLargerThanHalfViewport = anchorHeight > this.viewPortHeight / 2;
    const rootMarginBlockEnd = -1 * this.viewPortHeight / 2;
    const rootMarginBlockStart = isAnchorHeightLargerThanHalfViewport ? rootMarginBlockEnd : 0;
    return `${rootMarginBlockStart}px 0px ${rootMarginBlockEnd}px 0px`;
  }
  createObserver($targetElement, $element, options) {
    return new IntersectionObserver(entries => {
      entries.forEach(entry => {
        $targetElement.toggleClass(this.activeAnchorClass, entry.isIntersecting);
        $element.attr('aria-current', entry.isIntersecting ? 'location' : '');
      });
    }, options);
  }
  onResize() {
    this.viewPortHeight = this.getViewportHeight();
    if (this.observer) {
      this.observer.disconnect();
    }
    this.followMenuAnchors();
  }
}
exports["default"] = AnchorLinks;

/***/ }),

/***/ "../assets/dev/js/frontend/utils/flex-horizontal-scroll.js":
/*!*****************************************************************!*\
  !*** ../assets/dev/js/frontend/utils/flex-horizontal-scroll.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.changeScrollStatus = changeScrollStatus;
exports.setHorizontalScrollAlignment = setHorizontalScrollAlignment;
exports.setHorizontalTitleScrollValues = setHorizontalTitleScrollValues;
function changeScrollStatus(element, event) {
  if ('mousedown' === event.type) {
    element.classList.add('e-scroll');
    element.dataset.pageX = event.pageX;
  } else {
    element.classList.remove('e-scroll', 'e-scroll-active');
    element.dataset.pageX = '';
  }
}

// This function was written using this example https://codepen.io/thenutz/pen/VwYeYEE.
function setHorizontalTitleScrollValues(element, horizontalScrollStatus, event) {
  const isActiveScroll = element.classList.contains('e-scroll'),
    isHorizontalScrollActive = 'enable' === horizontalScrollStatus,
    headingContentIsWiderThanWrapper = element.scrollWidth > element.clientWidth;
  if (!isActiveScroll || !isHorizontalScrollActive || !headingContentIsWiderThanWrapper) {
    return;
  }
  event.preventDefault();
  const previousPositionX = parseFloat(element.dataset.pageX),
    mouseMoveX = event.pageX - previousPositionX,
    maximumScrollValue = 5,
    stepLimit = 20;
  let toScrollDistanceX = 0;
  if (stepLimit < mouseMoveX) {
    toScrollDistanceX = maximumScrollValue;
  } else if (stepLimit * -1 > mouseMoveX) {
    toScrollDistanceX = -1 * maximumScrollValue;
  } else {
    toScrollDistanceX = mouseMoveX;
  }
  element.scrollLeft = element.scrollLeft - toScrollDistanceX;
  element.classList.add('e-scroll-active');
}
function setHorizontalScrollAlignment(_ref) {
  let {
    element,
    direction,
    justifyCSSVariable,
    horizontalScrollStatus
  } = _ref;
  if (!element) {
    return;
  }
  if (isHorizontalScroll(element, horizontalScrollStatus)) {
    initialScrollPosition(element, direction, justifyCSSVariable);
  } else {
    element.style.setProperty(justifyCSSVariable, '');
  }
}
function isHorizontalScroll(element, horizontalScrollStatus) {
  return element.clientWidth < getChildrenWidth(element.children) && 'enable' === horizontalScrollStatus;
}
function getChildrenWidth(children) {
  let totalWidth = 0;
  const parentContainer = children[0].parentNode,
    computedStyles = getComputedStyle(parentContainer),
    gap = parseFloat(computedStyles.gap) || 0; // Get the gap value or default to 0 if it's not specified

  for (let i = 0; i < children.length; i++) {
    totalWidth += children[i].offsetWidth + gap;
  }
  return totalWidth;
}
function initialScrollPosition(element, direction, justifyCSSVariable) {
  const isRTL = elementorFrontend.config.is_rtl;
  switch (direction) {
    case 'end':
      element.style.setProperty(justifyCSSVariable, 'start');
      element.scrollLeft = isRTL ? -1 * getChildrenWidth(element.children) : getChildrenWidth(element.children);
      break;
    default:
      element.style.setProperty(justifyCSSVariable, 'start');
      element.scrollLeft = 0;
  }
}

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
var _flexHorizontalScroll = __webpack_require__(/*! elementor-pro/frontend/utils/flex-horizontal-scroll */ "../assets/dev/js/frontend/utils/flex-horizontal-scroll.js");
class MegaMenu extends elementorModules.frontend.handlers.Base {
  constructor() {
    super(...arguments);
    if (elementorFrontend.isEditMode()) {
      this.lifecycleChangeListener = null;
    }
    this.resizeListener = null;
    this.prevMouseY = null;
    this.isKeyboardNavigation = false;
  }
  getDefaultSettings() {
    return {
      selectors: {
        elementorWidgetWrapper: '.elementor-widget-n-menu',
        widgetContainer: '.e-n-menu',
        dropdownMenuToggle: '.e-n-menu-toggle',
        menuWrapper: '.e-n-menu-wrapper',
        headingContainer: '.e-n-menu-heading',
        menuItem: '.e-n-menu-item',
        tabTitle: '.e-n-menu-title',
        tabTitleText: '.e-n-menu-title-text',
        directTabTitle: ':scope > .elementor-widget-container > .e-n-menu > .e-n-menu-wrapper > .e-n-menu-heading > .e-n-menu-item > .e-n-menu-title',
        tabClickableTitle: '.e-n-menu-title.e-click',
        tabDropdown: '.e-n-menu-dropdown-icon',
        menuContent: '.e-n-menu-content',
        tabContent: '.e-n-menu-content > .e-con, .e-n-menu-heading > .e-con',
        directTabContent: ':scope > .elementor-widget-container > .e-n-menu > .e-n-menu-wrapper > .e-n-menu-heading > .e-n-menu-item > .e-n-menu-content > .e-con, :scope > .elementor-widget-container > .e-n-menu > .e-n-menu-wrapper > .e-n-menu-heading > .e-con',
        tabContentBeforeInterlacing: '> .elementor-widget-container > .e-n-menu > .e-n-menu-wrapper > .e-n-menu-heading > .e-con',
        newContainerAfterRepeaterAction: '> .elementor-widget-container > .e-n-menu > .e-n-menu-wrapper > .e-n-menu-heading > .e-con, > .elementor-widget-container > .e-n-menu > .e-n-menu-wrapper > .e-n-menu-heading > .e-n-menu-item > .e-n-menu-content > .e-con:nth-child(2)',
        anchorLink: '.e-anchor a'
      },
      classes: {
        active: 'e-active',
        anchorItem: 'e-anchor',
        activeAnchorItem: 'e-current'
      },
      dataAttributes: {
        tabIndex: 'data-tab-index'
      },
      ariaAttributes: {
        titleStateAttribute: 'aria-expanded',
        activeTitleSelector: '[aria-expanded="true"]'
      },
      autoExpand: false,
      autoFocus: false,
      showTabFn: 'show',
      hideTabFn: 'hide',
      toggleSelf: false,
      hidePrevious: true,
      postUrl: 'post-url',
      internalUrl: 'internal-url'
    };
  }
  getDefaultElements() {
    const selectors = this.getSettings('selectors');
    return {
      $tabContents: this.findElement(selectors.tabContent),
      $widgetContainer: this.findElement(selectors.widgetContainer),
      $dropdownMenuToggle: this.findElement(selectors.dropdownMenuToggle),
      $menuWrapper: this.findElement(selectors.menuWrapper),
      $menuContent: this.findElement(selectors.menuContent),
      $headingContainer: this.findElement(selectors.headingContainer),
      $menuItems: this.findElement(selectors.menuItem),
      $tabTitles: this.findElement(selectors.tabTitle),
      $tabDropdowns: this.findElement(selectors.tabDropdown),
      $anchorLink: this.findElement(selectors.anchorLink),
      $tabContentsBeforeInterlacing: this.findElement(selectors.tabContentBeforeInterlacing)
    };
  }
  getTabTitleFilterSelector(tabIndex) {
    return `[${this.getSettings('dataAttributes').tabIndex}="${tabIndex}"]`;
  }
  getTabIndex(tabTitleElement) {
    return tabTitleElement.getAttribute(this.getSettings('dataAttributes').tabIndex);
  }
  setKeyboardNavigation(event) {
    if ('Tab' === event.key) {
      this.isKeyboardNavigation = true;
    }
  }
  dropdownMenuHeightControllerConfig() {
    const selectors = this.getSettings('selectors');
    return {
      elements: {
        $element: this.$element,
        $dropdownMenuContainer: this.$element.find(selectors.menuWrapper),
        $menuToggle: this.$element.find(selectors.dropdownMenuToggle)
      },
      attributes: {
        menuToggleState: 'aria-expanded'
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
    const activeTitleSelector = this.getSettings('ariaAttributes').activeTitleSelector,
      tabIndex = this.elements.$tabDropdowns.filter(activeTitleSelector).attr('data-tab-index');
    $contentContainer = $contentContainer || this.elements.$tabContents.filter(this.getTabContentFilterSelector(tabIndex));
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
      this.elements.$widgetContainer.addClass('content-above');
    }
  }
  getMenuItemContainerAbsolutePosition($contentContainer) {
    const tabIndex = $contentContainer.data('tab-index'),
      $activeDropdown = this.elements.$tabDropdowns.filter(this.getTabTitleFilterSelector(tabIndex))[0],
      $titleElement = $activeDropdown.closest(this.getSettings('selectors').tabTitle),
      titleBoundingBox = $titleElement.getBoundingClientRect(),
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
    const menuContainerBoundingBox = this.elements.$widgetContainer[0].getBoundingClientRect();
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
    this.elements.$tabContents.css({
      left: '',
      right: '',
      bottom: '',
      position: 'var(--position)',
      'max-width': '',
      width: 'var(--width)'
    });
    this.elements.$widgetContainer.removeClass('content-above');
  }
  getTabContentFilterSelector(tabIndex) {
    return `[data-tab-index="${tabIndex}"]`;
  }
  isActiveTab(tabIndex) {
    return 'true' === this.elements.$tabDropdowns.filter('[data-tab-index="' + tabIndex + '"]').attr(this.getSettings('ariaAttributes').titleStateAttribute);
  }
  activateDefaultTab() {
    const settings = this.getSettings();
    const defaultActiveTab = this.getEditSettings('activeItemIndex') || 1,
      originalToggleMethods = {
        showTabFn: settings.showTabFn,
        hideTabFn: settings.hideTabFn
      };

    // Toggle tabs without animation to avoid jumping
    this.setSettings({
      showTabFn: 'show',
      hideTabFn: 'hide'
    });
    this.changeActiveTab(defaultActiveTab);

    // Return back original toggle effects
    this.setSettings(originalToggleMethods);
    this.elements.$widgetContainer.addClass('e-activated');
  }
  activateTab(tabIndex) {
    const settings = this.getSettings(),
      activeClass = settings.classes.active,
      childMenuDropdownSelector = `.elementor-element-${this.getID()} .e-n-menu .e-n-menu .e-n-menu-dropdown-icon`,
      childMenuContentSelector = `.elementor-element-${this.getID()} .e-n-menu .e-n-menu .e-n-menu-content > .e-con`,
      $requestedTitle = this.elements.$tabDropdowns.filter(this.getTabTitleFilterSelector(tabIndex)).not(childMenuDropdownSelector),
      animationDuration = 'show' === settings.showTabFn ? 0 : 400,
      $requestedContent = this.elements.$tabContents.filter(this.getTabContentFilterSelector(tabIndex)).not(childMenuContentSelector);
    this.addAnimationToContentIfNeeded(tabIndex);
    $requestedContent[settings.showTabFn](animationDuration, () => this.onShowTabContent($requestedContent));
    $requestedTitle.attr(this.getTitleActivationAttributes());
    $requestedTitle.prev('.e-n-menu-title-container').find('a').attr(this.getTitleActivationAttributes('link'));
    $requestedContent.addClass(activeClass).parent().addClass(activeClass);
    $requestedContent.css({
      display: 'var(--display)'
    });
    $requestedContent.removeAttr('display');
    if (elementorFrontend.isEditMode() && !!$requestedContent.length) {
      this.activeContainerWidthListener($requestedContent);
    }
    this.menuHeightController.reassignMenuHeight($requestedContent);
  }
  deactivateActiveTab() {
    const settings = this.getSettings(),
      activeClass = settings.classes.active,
      activeTitleFilter = settings.ariaAttributes.activeTitleSelector,
      activeContentFilter = '.' + activeClass,
      $activeTitle = this.elements.$tabDropdowns.filter(activeTitleFilter),
      $activeContent = this.elements.$tabContents.filter(activeContentFilter);
    this.setTabDeactivationAttributes($activeTitle);
    this.elements.$menuContent.removeClass(activeClass);
    $activeContent.removeClass(activeClass);
    $activeContent[settings.hideTabFn](0, () => this.onHideTabContent($activeContent));
    this.removeAnimationFromContentIfNeeded();
    if (elementorFrontend.isEditMode() && !!$activeContent.length) {
      this.observedContainer?.unobserve($activeContent[0]);
    }
    this.menuHeightController.resetMenuHeight($activeContent);
    this.clickInProgress = true;
  }
  getTitleActivationAttributes() {
    let elementType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'tab';
    const titleAttributes = {};
    if ('tab' === elementType) {
      titleAttributes['aria-expanded'] = 'true';
    }
    return titleAttributes;
  }
  setTabDeactivationAttributes($activeTitle) {
    const titleStateAttribute = this.getSettings('ariaAttributes').titleStateAttribute;
    $activeTitle.attr(`${titleStateAttribute}`, 'false');
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
    elementorFrontend.elements.$window.trigger('elementor-pro/motion-fx/recalc');
    elementorFrontend.elements.$window.trigger('elementor/nested-tabs/activate', $requestedContent);
    elementorFrontend.elements.$window.trigger('elementor/bg-video/recalc');
  }
  onHideTabContent() {
    if (this.elements.$widgetContainer.hasClass('content-above')) {
      this.resetContentContainersPosition();
    }
  }
  changeActiveTab(tabIndex) {
    let fromUser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    let byKeyboard = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    if (this.clickInProgress && elementorFrontend.isEditMode() && !byKeyboard) {
      return;
    }
    const isActiveTab = this.isActiveTab(tabIndex);
    this.deactivateActiveTab();
    if (!isActiveTab || isActiveTab && !fromUser) {
      this.clickInProgress = true;
      this.activateTab(tabIndex);
    }
    setTimeout(() => {
      this.clickInProgress = false;
    });
  }
  changeActiveTabByKeyboard(event, settings) {
    if (settings.widgetId.toString() !== this.getID().toString()) {
      return;
    }
    if (!settings.titleIndex) {
      this.changeActiveTab('', true, true);
      return;
    }
    const $focusableElement = this.$element.find(`[data-focus-index="${settings.titleIndex}"]`),
      isLinkElement = 'a' === $focusableElement[0].tagName.toLowerCase(),
      dropdownSelector = this.getSettings('selectors.tabDropdown'),
      $tabDropdown = isLinkElement ? $focusableElement.next(dropdownSelector) : $focusableElement,
      tabIndex = this.getTabIndex($tabDropdown[0]);
    this.changeActiveTab(tabIndex, true, true);
    event.stopPropagation();
  }
  onTabClick(event) {
    if (elementorFrontend.isEditMode()) {
      event.preventDefault();
    }
    const hasNoDropdown = event?.currentTarget?.classList?.contains('link-only');

    // Tweak for NVDA screen reader with Windows Edge.
    // Ref: https://github.com/nvaccess/nvda/issues/7898
    const dropdownOpensWithHover = !this.isNeedToOpenOnClick(),
      blockMouseClickEvents = dropdownOpensWithHover && !this.isKeyboardNavigation;
    if (hasNoDropdown || blockMouseClickEvents) {
      return;
    }
    const selectors = this.getSettings('selectors'),
      getClickedMenuId = event?.target?.closest(selectors.elementorWidgetWrapper)?.getAttribute('data-id'),
      getWidgetId = this.getID().toString();
    if (getClickedMenuId !== getWidgetId) {
      return;
    }
    const clickedElement = event?.currentTarget,
      dropdownElement = clickedElement?.querySelector(selectors.tabDropdown),
      tabIndex = this.getTabIndex(dropdownElement);
    this.changeActiveTab(tabIndex, true);
  }
  bindEvents() {
    this.elements.$tabTitles.on(this.getTabEvents());
    this.elements.$dropdownMenuToggle.on('click', this.onClickToggleDropdownMenu.bind(this));
    this.elements.$tabContents.on(this.getContentEvents());
    this.elements.$menuContent.on(this.getContentEvents());
    this.elements.$headingContainer.on(this.getHeadingEvents());
    elementorFrontend.addListenerOnce(this.getModelCID(), 'scroll', elementorFrontend.debounce(this.menuHeightController.reassignMobileMenuHeight.bind(this.menuHeightController), 250));
    elementorFrontend.elements.$window.on('elementor/nested-tabs/activate', this.reInitSwipers);
    elementorFrontend.elements.$window.on('elementor/nested-elements/activate-by-keyboard', this.changeActiveTabByKeyboard.bind(this));
    elementorFrontend.elements.$window.on('elementor/mega-menu/dropdown-toggle-by-keyboard', this.onClickToggleDropdownMenuByKeyboard.bind(this));
    elementorFrontend.elements.$window.on('resize', this.resizeEventHandler.bind(this));
    if (elementorFrontend.isEditMode()) {
      this.addChildLifeCycleEventListeners();
      elementorFrontend.elements.$window.on('elementor/dynamic/url_change', this.changeMegaMenuTitleContainerTag.bind(this));
    }
    elementorFrontend.elements.$window.on('elementor/nested-container/atomic-repeater', this.linkContainer.bind(this));
  }
  unbindEvents() {
    this.elements.$tabTitles.off();
    this.elements.$menuContent.off();
    this.elements.$tabContents.off();
    this.elements.$headingContainer.off();
    elementorFrontend.elements.$window.off('resize');
    if (elementorFrontend.isEditMode()) {
      this.removeChildLifeCycleEventListeners();
      elementorFrontend.elements.$window.on('elementor/dynamic/url_change', this.changeMegaMenuTitleContainerTag.bind(this));
    }
    elementorFrontend.elements.$window.off('elementor/nested-tabs/activate', this.reInitSwipers);
    elementorFrontend.elements.$window.off('elementor/nested-elements/activate-by-keyboard', this.changeActiveTabByKeyboard.bind(this));
    elementorFrontend.elements.$window.off('elementor/mega-menu/dropdown-toggle-by-keyboard', this.onClickToggleDropdownMenuByKeyboard.bind(this));
    elementorFrontend.elements.$window.off('resize', this.resizeEventHandler.bind(this));
    elementorFrontend.elements.$window.off('elementor/nested-container/atomic-repeater', this.linkContainer.bind(this));
  }

  /**
   * Fixes issues where Swipers that have been initialized while a tab is not visible are not properly rendered
   * and when switching to the tab the swiper will not respect any of the chosen `autoplay` related settings.
   *
   * This is triggered when switching to a nested tab, looks for Swipers in the tab content and reinitializes them.
   *
   * @param {Object} event   - Incoming event.
   * @param {Object} content - Active nested tab dom element.
   */
  reInitSwipers(event, content) {
    const swiperElements = content.querySelectorAll('.swiper');
    for (const element of swiperElements) {
      if (!element.swiper) {
        return;
      }
      element.swiper.initialized = false;
      element.swiper.init();
    }
  }
  resizeEventHandler() {
    this.resizeListener = this.handleContentContainerPosition();
    this.setLayoutType();
    this.setTouchMode();
    this.menuHeightController.reassignMobileMenuHeight();
    this.setScrollPosition();
    const activeTitleSelector = this.getSettings('ariaAttributes').activeTitleSelector,
      tabIndex = this.elements.$tabDropdowns.filter(activeTitleSelector).attr('data-tab-index'),
      childMenuContentSelector = `.elementor-element-${this.getID()} .e-n-menu .e-n-menu .e-n-menu-content > .e-con`,
      $requestedContent = this.elements.$tabContents.filter(this.getTabContentFilterSelector(tabIndex)).not(childMenuContentSelector);
    this.menuHeightController.resetMenuHeight($requestedContent);
    this.menuHeightController.reassignMenuHeight($requestedContent);
  }

  /**
   * Add Child Lifecycle Event Listeners
   *
   * This method adds event listeners for the elementor/editor/element-rendered and elementor/editor/element-destroyed
   * events. These events are fired when an element is rendered or destroyed in the editor. The callback functions
   * check if the rendered/destroyed element is nested in this mega-menu instance, and if it is, triggers the
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
    return elementAncestors.some(parent => this.getID().toString() === parent.model.get('id').toString());
  }
  getTabEvents() {
    const tabEvents = {
      click: this.onTabClick.bind(this)
    };
    return this.isNeedToOpenOnClick() ? tabEvents : this.replaceClickWithHover(tabEvents);
  }
  getContentEvents() {
    return this.isNeedToOpenOnClick() ? {} : {
      mouseleave: this.onMouseLeave.bind(this),
      mousemove: this.trackMousePosition.bind(this)
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
    tabEvents.mouseenter = this.onMouseTitleEnter.bind(this);
    tabEvents.mouseleave = this.onMouseLeave.bind(this);
    tabEvents.keyup = this.setKeyboardNavigation.bind(this);
    return tabEvents;
  }
  onMouseTitleEnter(event) {
    event.preventDefault();
    const settings = this.getSettings(),
      currentTarget = event?.currentTarget,
      currentTargetWidgetId = currentTarget?.closest(settings.selectors.elementorWidgetWrapper)?.getAttribute('data-id'),
      widgetId = this.$element[0].getAttribute('data-id');
    if (widgetId !== currentTargetWidgetId) {
      return;
    }
    const titleStateAttribute = settings.ariaAttributes.titleStateAttribute,
      dropdownSelector = settings.selectors.tabDropdown,
      activeDropdownElement = currentTarget?.querySelector(dropdownSelector),
      isActiveTabTitle = 'true' === activeDropdownElement?.getAttribute(titleStateAttribute);
    if (isActiveTabTitle) {
      return;
    }
    const tabIndex = activeDropdownElement?.getAttribute('data-tab-index');
    this.changeActiveTab(tabIndex, true);
  }
  onClickToggleDropdownMenu(show) {
    this.elements.$widgetContainer.attr('data-layout', 'dropdown');
    const titleStateAttribute = this.getSettings('ariaAttributes').titleStateAttribute,
      isDropdownVisible = 'true' === this.elements.$dropdownMenuToggle.attr(titleStateAttribute);
    if ('boolean' !== typeof show) {
      show = !isDropdownVisible;
    }
    const activeTabTitleValue = show ? 'true' : 'false';
    this.elements.$dropdownMenuToggle.attr(titleStateAttribute, activeTabTitleValue);
    elementorFrontend.utils.events.dispatch(window, 'elementor-pro/mega-menu/dropdown-open');
    this.menuHeightController.reassignMobileMenuHeight();
  }
  onClickOutsideDropdownMenu(event) {
    if (!this.isNeedToOpenOnClick()) {
      return;
    }
    const settings = this.getSettings(),
      selectors = settings.selectors,
      widgetWrapper = `.elementor-element-${this.getID()}`,
      activeClass = settings.classes.active,
      activeContentFilter = `> .e-con.${activeClass}`,
      $activeContent = this.elements.$menuContent.find(activeContentFilter),
      isMenuDropdownsClosed = 0 === $activeContent.length,
      isElementRemovedFromDOM = elementorFrontend.isEditMode() && !document.body.contains(event?.target),
      isClickedInsideCurrentMenu = !!event?.target?.closest(`${widgetWrapper} ${selectors.widgetContainer}`),
      isMenuContentWrapperClicked = event?.target?.classList?.contains(selectors.menuContent.replace('.', ''));
    if (isMenuContentWrapperClicked) {
      this.deactivateActiveTab();
      return;
    }
    if (isMenuDropdownsClosed || isClickedInsideCurrentMenu || isElementRemovedFromDOM) {
      return;
    }
    this.deactivateActiveTab();
  }
  onClickToggleDropdownMenuByKeyboard(event, settings) {
    if (settings.widgetId.toString() !== this.getID().toString()) {
      return;
    }
    this.onClickToggleDropdownMenu(settings.show);
  }
  addAnimationToContentIfNeeded(tabIndex) {
    const openAnimation = this.getElementSettings('open_animation');
    if ('none' === openAnimation || '' === openAnimation) {
      return;
    }
    const $requestedContent = this.elements.$tabContents.filter(this.getTabContentFilterSelector(tabIndex));
    $requestedContent.addClass(`animated ${openAnimation}`);
  }
  removeAnimationFromContentIfNeeded() {
    const openAnimation = this.getElementSettings('open_animation');
    if ('none' === openAnimation || '' === openAnimation) {
      return;
    }
    this.elements.$tabContents.removeClass(`animated ${openAnimation}`);
  }

  /**
   * Store the current Y-coordinate of the mouse cursor.
   *
   * @param {Event} event - The mouse event object.
   */
  trackMousePosition(event) {
    this.prevMouseY = event?.clientY;
  }

  /**
   * Check if the menu content is currently hovered.
   *
   * @return {boolean} - True if menu content is hovered, otherwise false.
   */
  isMenuContentHovered() {
    const settings = this.getSettings(),
      $widget = this.$element;
    return $widget.find(`${settings.selectors.menuContent}:hover`).length > 0;
  }
  isCursorInBetweenMenuTitleAndContent(event) {
    const settings = this.getSettings();
    const selectors = settings.selectors;
    const currentElement = event?.currentTarget;
    const activeContent = currentElement?.closest(selectors.menuItem)?.querySelector(selectors.menuContent);
    const isMouseLeavingTabTitle = currentElement.classList?.contains(selectors.tabTitle.replace('.', ''));
    const hasActiveTabTitle = activeContent?.classList?.contains(settings.classes.active);
    if (!isMouseLeavingTabTitle || !hasActiveTabTitle) {
      return false;
    }
    const titleBoundingClientRect = currentElement.getBoundingClientRect();
    const contentBoundingClientRect = activeContent.getBoundingClientRect();
    const mouseY = event.clientY;
    const isTitleAboveContent = titleBoundingClientRect.bottom <= contentBoundingClientRect.top;
    return isTitleAboveContent ? mouseY >= titleBoundingClientRect.bottom && mouseY < contentBoundingClientRect.top : mouseY <= titleBoundingClientRect.top && mouseY > contentBoundingClientRect.bottom;
  }

  /**
   * Determines whether the cursor moved sideways or downwards.
   *
   * @param {Event} event - The mouse event object.
   * @return {boolean} - True if the cursor moved sideways or downwards, otherwise false.
   */
  didCursorMoveSidewaysOrDown(event) {
    // Detects if the Y-coordinate of the mouse has not decreased (i.e., either remained the same or increased).
    return this.prevMouseY !== null && event?.clientY >= this.prevMouseY;
  }

  /**
   * Check whether the dropdown menu should remain open based on hover and cursor movement.
   *
   * @param {boolean} isMouseLeavingTabContent - True if the mouse is leaving the tab content.
   * @param {Event}   event                    - The mouse event object.
   * @return {boolean} - True if dropdown should be considered as hovered, otherwise false.
   */
  isHoveredDropdownMenu(isMouseLeavingTabContent, event) {
    // If the mouse is leaving the tab content and it moved sideways or downwards, close the dropdown.
    if (isMouseLeavingTabContent && this.didCursorMoveSidewaysOrDown(event)) {
      return false;
    }

    // Otherwise, return true if the menu content is hovered.
    return this.isMenuContentHovered();
  }

  /**
   * Handle the event when the mouse leaves the dropdown.
   *
   * @param {Event} event - The mouse event object.
   */
  onMouseLeave(event) {
    event.preventDefault();
    const isMouseLeavingTabContent = event?.currentTarget?.classList?.contains('e-con');
    if (!this.isHoveredDropdownMenu(isMouseLeavingTabContent, event) && !this.isCursorInBetweenMenuTitleAndContent(event)) {
      this.deactivateActiveTab();
    }
  }
  onInit() {
    this.menuHeightController = new elementorProFrontend.utils.DropdownMenuHeightController(this.dropdownMenuHeightControllerConfig());
    super.onInit(...arguments);
    if (this.getSettings('autoExpand')) {
      this.activateDefaultTab();
    }
    (0, _flexHorizontalScroll.setHorizontalScrollAlignment)(this.getHorizontalScrollingSettings());
    this.setTouchMode();
    if (!elementorFrontend.isEditMode()) {
      const classes = this.getSettings('classes');
      this.anchorLinks = new _anchorLink.default(this.elements.$anchorLink, classes);
      this.anchorLinks.initialize();
      elementorFrontend.elements.$window.on('elementor/dynamic/url_change', this.changeMegaMenuTitleContainerTag.bind(this));
    }
    this.menuToggleVisibilityListener(this.elements.$dropdownMenuToggle);
    this.setScrollPosition();
    this.onClickOutsideDropdownMenu = this.onClickOutsideDropdownMenu.bind(this);
    document.addEventListener('click', this.onClickOutsideDropdownMenu);
    this.clickInProgress = false;
  }
  onDestroy() {
    document.removeEventListener('click', this.onClickOutsideDropdownMenu);
    elementorFrontend.elements.$window.off('elementor/dynamic/url_change');
  }
  setScrollPosition() {
    const settingsObject = {
      element: this.elements.$headingContainer[0],
      direction: this.getItemPosition(),
      justifyCSSVariable: '--n-menu-heading-justify-content',
      horizontalScrollStatus: this.getHorizontalScrollSetting()
    };
    (0, _flexHorizontalScroll.setHorizontalScrollAlignment)(settingsObject);
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
  menuToggleVisibilityListener($menuToggle) {
    let previousWidth;
    this.observedContainer = new ResizeObserver(menuToggle => {
      const currentWidth = menuToggle[0].borderBoxSize?.[0].inlineSize;
      if (currentWidth !== previousWidth) {
        previousWidth = currentWidth;
        this.setLayoutType();
      }
    });
    this.observedContainer.observe($menuToggle[0]);
  }
  onElementChange(propertyName) {
    if (this.getPropsThatTriggerContentPositionCalculations().includes(propertyName)) {
      this.handleContentContainerPosition();
    }
    this.setLayoutType();
  }
  onEditSettingsChange(propertyName, value) {
    const settings = this.getSettings();
    if (settings.autoFocus && 'activeItemIndex' === propertyName) {
      this.changeActiveTab(value, false);
    }
    this.setLayoutType();
  }

  /**
   * Sets the layout type as a data attribute, so that it can be use for the responsive or dropdown menu styling.
   *
   * Originally this styling was handled by the distinction between the heading and the content styling elements.
   * Since we removed the title duplication, we needed another way to distinguish between the horizontal and the dropdown styling.
   */
  setLayoutType() {
    const layoutType = 'none' === this.elements.$dropdownMenuToggle.css('display') ? 'horizontal' : 'dropdown';
    this.elements.$widgetContainer.attr('data-layout', layoutType);
  }
  getHeadingEvents() {
    const navigationWrapper = this.elements.$headingContainer[0];
    return {
      mousedown: this.changeScrollStatusAndDispatch.bind(this, navigationWrapper),
      mouseup: this.changeScrollStatusAndDispatch.bind(this, navigationWrapper),
      mouseleave: this.changeScrollStatusAndDispatch.bind(this, navigationWrapper),
      mousemove: this.setHorizontalTitleScrollValuesAndDispatch.bind(this, navigationWrapper)
    };
  }
  getHorizontalScrollSetting() {
    const currentDevice = elementorFrontend.getCurrentDeviceMode();
    return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(), 'horizontal_scroll', '', currentDevice);
  }
  getItemPosition() {
    const currentDevice = elementorFrontend.getCurrentDeviceMode();
    return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(), 'item_position_horizontal', '', currentDevice);
  }
  changeScrollStatusAndDispatch(navigationWrapper, event) {
    (0, _flexHorizontalScroll.changeScrollStatus)(navigationWrapper, event);
    elementorFrontend.elements.$window.trigger('elementor-pro/mega-menu/heading-mouse-event');
  }
  setHorizontalTitleScrollValuesAndDispatch(navigationWrapper, event) {
    (0, _flexHorizontalScroll.setHorizontalTitleScrollValues)(navigationWrapper, this.getHorizontalScrollSetting(), event);
    elementorFrontend.elements.$window.trigger('elementor-pro/mega-menu/heading-mouse-event');
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
          directTabContent
        }
      } = this.getDefaultSettings(),
      currentMenu = view[0],
      tabsContents = currentMenu.querySelectorAll(directTabContent),
      tabTitles = currentMenu.querySelectorAll(directTabTitle),
      settings = this.getSettings(),
      itemIdBase = tabTitles[0].getAttribute('id').slice(0, -1);
    tabTitles.forEach((element, index) => {
      const newIndex = index + 1,
        updatedTabID = itemIdBase + newIndex,
        updatedContainerID = updatedTabID.replace('e-n-menu-title-', 'e-n-menu-content-'),
        updatedTabDropdownID = updatedTabID.replace('e-n-menu-title-', 'e-n-menu-dropdown-icon-');
      element.setAttribute('id', updatedTabID);
      element.querySelector(settings.selectors.tabDropdown)?.setAttribute('data-tab-index', newIndex);
      element.querySelector(settings.selectors.tabDropdown)?.setAttribute('id', updatedTabDropdownID);
      element.querySelector(settings.selectors.tabDropdown)?.setAttribute('aria-controls', updatedContainerID);
      element.querySelector(settings.selectors.tabTitleText)?.setAttribute('data-binding-index', newIndex);
      tabsContents[index]?.setAttribute('aria-labelledby', updatedTabDropdownID);
      tabsContents[index]?.setAttribute('data-tab-index', newIndex);
      tabsContents[index]?.setAttribute('id', updatedContainerID);
    });
  }
  updateListeners(view) {
    const {
        selectors: {
          tabClickableTitle,
          tabDropdown,
          tabContent,
          tabTitle
        }
      } = this.getSettings(),
      $tabTitles = view.find(tabTitle),
      $tabClickableTitle = view.find(tabClickableTitle);
    this.elements.$tabTitles = view.find(tabClickableTitle);
    this.elements.$tabDropdowns = view.find(tabDropdown);
    this.elements.$tabContents = view.find(tabContent);
    $tabTitles.off();
    $tabClickableTitle.on(this.getTabEvents());
    this.clickInProgress = false;
  }

  /**
   * Toggle the container tag of the mega menu title.
   * Needs to be places in pro Mega Menu frontend handler
   *
   * @param {Event} event
   * @return {undefined}
   */
  changeMegaMenuTitleContainerTag(event) {
    const {
        element,
        actionName,
        value
      } = event.detail,
      elementParent = element.parentNode,
      closestMenuItemTitle = elementParent.parentNode,
      newElement = this.maybeCreateNewElement(elementParent, value),
      elementToUpdate = this.maybeReplaceMenuItemTitleContent(elementParent, newElement, closestMenuItemTitle),
      currentUrl = element.dataset?.currentUrl || null;
    this.maybeUpdateNewElementsHref(value, elementToUpdate);
    this.eCurrentClassHandler(actionName, closestMenuItemTitle, currentUrl === value);
    return undefined;
  }
  maybeReplaceMenuItemTitleContent(elementParent, newElement, closestMenuItemTitle) {
    if (!newElement) {
      return elementParent;
    }
    Array.from(elementParent.attributes).forEach(attr => {
      newElement.setAttribute(attr.name, attr.value);
    });
    if ('A' === newElement.tagName) {
      newElement.classList.add('e-link', 'e-focus');
    } else if ('DIV' === newElement.tagName) {
      newElement.classList.remove('e-link', 'e-focus');
    }
    newElement.innerHTML = elementParent.innerHTML;
    closestMenuItemTitle.replaceChild(newElement, elementParent);
    return newElement;
  }
  maybeCreateNewElement(elementParent, value) {
    if (!value) {
      return document.createElement('div');
    }
    if (value && 'DIV' === elementParent.tagName) {
      return document.createElement('a');
    }
  }
  maybeUpdateNewElementsHref(value, newElement) {
    if (value) {
      newElement.setAttribute('href', value);
    } else {
      newElement.removeAttribute('href');
    }
  }
  eCurrentClassHandler(actionName, closestMenuItemTitle, isCurrentUrl) {
    const settings = this.getSettings(),
      {
        classes: {
          activeAnchorItem: eCurrentClassName
        },
        postUrl,
        internalUrl
      } = settings;
    switch (actionName) {
      case postUrl:
        closestMenuItemTitle.classList.add(eCurrentClassName);
        break;
      case internalUrl:
        if (isCurrentUrl) {
          closestMenuItemTitle.classList.add(eCurrentClassName);
        } else {
          closestMenuItemTitle.classList.remove(eCurrentClassName);
        }
        break;
      default:
        if (closestMenuItemTitle.classList.contains(eCurrentClassName) && postUrl !== actionName) {
          closestMenuItemTitle.classList.remove(eCurrentClassName);
        }
        break;
    }
  }
  setTouchMode() {
    const widgetSelector = this.getSettings('selectors').widgetContainer;
    if (elementorFrontend.isEditMode() || 'resize' === event?.type) {
      const responsiveDevices = ['mobile', 'mobile_extra', 'tablet', 'tablet_extra'],
        currentDevice = elementorFrontend.getCurrentDeviceMode();
      if (-1 !== responsiveDevices.indexOf(currentDevice)) {
        this.$element.find(widgetSelector).attr('data-touch-mode', 'true');
        return;
      }
    } else if ('ontouchstart' in window) {
      this.$element.find(widgetSelector).attr('data-touch-mode', 'true');
      return;
    }
    this.$element.find(widgetSelector).attr('data-touch-mode', 'false');
  }
  getTabsDirection() {
    const currentDevice = elementorFrontend.getCurrentDeviceMode();
    return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(), 'tabs_justify_horizontal', '', currentDevice);
  }
  getHorizontalScrollingSettings() {
    return {
      element: this.elements.$headingContainer[0],
      direction: this.getTabsDirection(),
      justifyCSSVariable: '--n-tabs-heading-justify-content',
      horizontalScrollStatus: this.getHorizontalScrollSetting()
    };
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
//# sourceMappingURL=mega-menu.4a05edbefebc8de41e36.bundle.js.map
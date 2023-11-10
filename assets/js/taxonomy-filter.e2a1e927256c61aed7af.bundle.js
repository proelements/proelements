/*! pro-elements - v3.17.0 - 01-11-2023 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["taxonomy-filter"],{

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

/***/ "../modules/loop-filter/assets/js/frontend/handlers/taxonomy-filter.js":
/*!*****************************************************************************!*\
  !*** ../modules/loop-filter/assets/js/frontend/handlers/taxonomy-filter.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _flexHorizontalScroll = __webpack_require__(/*! elementor-pro/frontend/utils/flex-horizontal-scroll */ "../assets/dev/js/frontend/utils/flex-horizontal-scroll.js");
class TaxonomyFilter extends elementorModules.frontend.handlers.Base {
  constructor() {
    super(...arguments);
    this.resizeListenerNestedTabs = null;
  }
  getDefaultSettings() {
    return {
      selectors: {
        item: '.e-filter-item',
        container: '.e-filter'
      },
      filterValues: {
        default: '__all'
      }
    };
  }
  getDefaultElements() {
    return {
      $filterButtons: this.$element.find(this.getSettings('selectors.item')),
      $container: this.$element.find(this.getSettings('selectors.container'))
    };
  }
  getHeadingEvents(event) {
    const container = this.elements.$container[0];
    return {
      mousedown: _flexHorizontalScroll.changeScrollStatus.bind(this, container),
      mouseup: _flexHorizontalScroll.changeScrollStatus.bind(this, container),
      mouseleave: _flexHorizontalScroll.changeScrollStatus.bind(this, container),
      mousemove: _flexHorizontalScroll.setHorizontalTitleScrollValues.bind(this, container, this.getHorizontalScrollSetting())
    };
  }
  bindEvents() {
    this.elements.$filterButtons.on('click', this.onFilterButtonClick.bind(this));
    this.elements.$container.on(this.getHeadingEvents());
    const settingsObject = {
      element: this.elements.$container[0],
      direction: this.getItemsAlignment(),
      justifyCSSVariable: '--e-filter-justify-content',
      horizontalScrollStatus: this.getHorizontalScrollSetting()
    };
    this.resizeListenerNestedTabs = _flexHorizontalScroll.setHorizontalScrollAlignment.bind(this, settingsObject);
    elementorFrontend.elements.$window.on('resize', this.resizeListenerNestedTabs);
  }
  onElementChange(propertyName) {
    if (this.checkSliderPropsToWatch(propertyName)) {
      const settingsObject = {
        element: this.elements.$container[0],
        direction: this.getItemsAlignment(),
        justifyCSSVariable: '--e-filter-justify-content',
        horizontalScrollStatus: this.getHorizontalScrollSetting()
      };
      (0, _flexHorizontalScroll.setHorizontalScrollAlignment)(settingsObject);
    }
  }
  checkSliderPropsToWatch(propertyName) {
    return 0 === propertyName.indexOf('horizontal_scroll') || 0 === propertyName.indexOf('item_alignment_horizontal');
  }

  /**
   * Get the filter buttons elements.
   *
   * If the filter buttons weren't rendered when the handler was initialized, this method will cache the filter
   * button elements and add the necessary event listeners.
   *
   * @return {*} jQuery collection of filter button elements. Might be empty.
   */
  getFilterButtonElements() {
    if (this.elements?.$filterButtons.length) {
      return this.elements.$filterButtons;
    }
    this.elements = this.getDefaultElements();
    this.bindEvents();
    return this.elements.$filterButtons;
  }
  activateFilterButton(selectedTermSlug) {
    const $filterButtons = this.getFilterButtonElements();
    if (!$filterButtons.length) {
      return;
    }
    const $activeButton = $filterButtons.filter('[data-filter="' + selectedTermSlug + '"]');
    $filterButtons.attr('aria-pressed', false);
    $activeButton.attr('aria-pressed', true);
  }
  deactivateFilterButton(clickedFilter) {
    const $filterButtons = this.getFilterButtonElements();
    if (!$filterButtons.length) {
      return;
    }
    const $activeButton = $filterButtons.filter('[data-filter="' + clickedFilter + '"]'),
      $defaultButton = $filterButtons.filter('[data-filter="' + this.getSettings('filterValues.default') + '"]');
    $activeButton.attr('aria-pressed', false);
    $defaultButton.attr('aria-pressed', true);
    elementorProFrontend.modules.taxonomyFilter.removeFilterFromLoopWidget(this.getElementSettings('selected_element'), this.getID());
  }
  getCurrentlyActiveFilter() {
    const filterButtons = this.getFilterButtonElements(),
      $activeButton = filterButtons.filter('[aria-pressed=true]');
    if (!$activeButton.length) {
      return this.getSettings('filterValues.default');
    }
    return $activeButton.data('filter');
  }
  filterItems(selectedTermSlug) {
    const elementSettings = this.getElementSettings();
    if (this.getSettings('filterValues.default') === selectedTermSlug) {
      elementorProFrontend.modules.taxonomyFilter.removeFilterFromLoopWidget(elementSettings.selected_element, this.getID());
      return;
    }
    elementorProFrontend.modules.taxonomyFilter.setFilterDataForLoopWidget(elementSettings.selected_element, this.getID(), {
      filterType: 'taxonomy',
      filterData: {
        selectedTaxonomy: elementSettings.taxonomy,
        term: selectedTermSlug
      }
    });
  }
  setFilter() {
    let filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getSettings('filterValues.default');
    this.filterItems(filter);
    this.activateFilterButton(filter);
  }
  onFilterButtonClick(event) {
    this.removePaginationHiddenClassOnLoopWidgetContainer();
    const currentlyActiveFilter = this.getCurrentlyActiveFilter(),
      clickedFilter = event.currentTarget.dataset.filter;
    if (this.userClickedOnAllWhileItWasActive(clickedFilter, currentlyActiveFilter)) {
      return;
    }
    if (clickedFilter === currentlyActiveFilter) {
      this.deactivateFilterButton(clickedFilter);
      return;
    }
    this.setFilter(clickedFilter);
  }
  removePaginationHiddenClassOnLoopWidgetContainer() {
    const elementSettings = this.getElementSettings();
    const loopWidget = document.querySelector('.elementor-element-' + elementSettings.selected_element);
    if (loopWidget) {
      loopWidget.classList.remove('e-load-more-pagination-end');
    }
  }
  userClickedOnAllWhileItWasActive(clickedFilter, currentlyActiveFilter) {
    return clickedFilter === currentlyActiveFilter && clickedFilter === this.getSettings('filterValues.default');
  }
  onDestroy() {
    const selectedElementId = this.getElementSettings('selected_element'),
      selectedTaxonomy = this.getElementSettings('taxonomy'),
      filterId = this.getID();
    if (selectedElementId && selectedTaxonomy) {
      elementorProFrontend.modules.taxonomyFilter.removeFilterFromLoopWidget(selectedElementId, filterId);
    }
    super.onDestroy();
  }
  populateLoopWidgetStoreOnInitialPageLoad() {
    const elementSettings = this.getElementSettings();
    const urlParams = new URLSearchParams(window.location.search);
    const selectedTermSlug = urlParams.get('e-filter-' + elementSettings.selected_element + '-' + elementSettings.taxonomy);
    if (selectedTermSlug) {
      elementorProFrontend.modules.taxonomyFilter.setFilterDataForLoopWidget(elementSettings.selected_element, this.getID(), {
        filterType: 'taxonomy',
        filterData: {
          selectedTaxonomy: elementSettings.taxonomy,
          term: selectedTermSlug
        }
      }, false);
    }
  }
  onInit() {
    super.onInit();
    this.populateLoopWidgetStoreOnInitialPageLoad();
    const settingsObject = {
      element: this.elements.$container[0],
      direction: this.getItemsAlignment(),
      justifyCSSVariable: '--e-filter-justify-content',
      horizontalScrollStatus: this.getHorizontalScrollSetting()
    };
    (0, _flexHorizontalScroll.setHorizontalScrollAlignment)(settingsObject);
  }
  getHorizontalScrollSetting() {
    const currentDevice = elementorFrontend.getCurrentDeviceMode();
    return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(), 'horizontal_scroll', '', currentDevice);
  }
  getItemsAlignment() {
    const currentDevice = elementorFrontend.getCurrentDeviceMode();
    return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(), 'item_alignment_horizontal', '', currentDevice);
  }
}
exports["default"] = TaxonomyFilter;

/***/ })

}]);
//# sourceMappingURL=taxonomy-filter.e2a1e927256c61aed7af.bundle.js.map
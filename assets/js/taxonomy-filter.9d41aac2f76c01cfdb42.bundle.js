/*! pro-elements - v3.23.0 - 05-08-2024 */
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
var _queryConstants = __webpack_require__(/*! ../../query-constants */ "../modules/loop-filter/assets/js/query-constants.js");
class TaxonomyFilter extends elementorModules.frontend.handlers.Base {
  constructor() {
    super(...arguments);
    this.resizeListenerNestedTabs = null;
  }

  /**
   *
   * @return {{filterValues: {default: string}, selectors: {container: string, item: string}}} Default Settings
   */
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

  /**
   *
   * @return {{$filterButtons: *, $container: *}} Default Elements
   */
  getDefaultElements() {
    return {
      $filterButtons: this.$element.find(this.getSettings('selectors.item')),
      $container: this.$element.find(this.getSettings('selectors.container'))
    };
  }
  getHeadingEvents() {
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

  /**
   *
   * @param {string} propertyName
   */
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

  /**
   *
   * @param {string} propertyName
   * @return {boolean} Is slider property
   */
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

  /**
   * Get the active filter buttons elements.
   *
   * @return {*} jQuery collection of the active filter button elements. Might be empty.
   */
  getActiveFilterButtonElements() {
    return this.getFilterButtonElements().filter('[aria-pressed="true"]');
  }

  /**
   *
   * @param {string} selectedTermSlug
   */
  activateFilterButton(selectedTermSlug) {
    const $filterButtons = this.getFilterButtonElements(),
      multipleSelectionActive = 'yes' === this.getElementSettings('multiple_selection');
    if (!$filterButtons.length) {
      return;
    }
    const defaultFilter = this.getSettings('filterValues.default');
    if (!multipleSelectionActive || defaultFilter === selectedTermSlug) {
      $filterButtons.attr('aria-pressed', false);
    }
    const $activeButton = $filterButtons.filter('[data-filter="' + selectedTermSlug + '"]');
    $activeButton.attr('aria-pressed', true);
    const activeFiltersButtons = this.getCurrentlyActiveFilter();
    if (activeFiltersButtons && activeFiltersButtons.includes(defaultFilter) && defaultFilter !== selectedTermSlug) {
      this.deactivateDefaultFilterButton($filterButtons);
    }
  }

  /**
   *
   * @param {string} clickedFilter
   */
  deactivateFilterButton(clickedFilter) {
    const $filterButtons = this.getFilterButtonElements(),
      multipleSelectionActive = 'yes' === this.getElementSettings('multiple_selection');
    if (!$filterButtons.length) {
      return;
    }
    const $activeButton = $filterButtons.filter('[data-filter="' + clickedFilter + '"]'),
      defaultFilter = this.getSettings('filterValues.default'),
      currentlyActiveButtons = this.getCurrentlyActiveFilter(),
      isActivateDefaultFilterButtonNeeded = !multipleSelectionActive || !currentlyActiveButtons.includes(defaultFilter) && 1 === currentlyActiveButtons.length;
    $activeButton.attr('aria-pressed', false);
    if (isActivateDefaultFilterButtonNeeded) {
      this.activateDefaultFilterButton();
    }
    elementorProFrontend.modules.taxonomyFilter.removeFilterFromLoopWidget(this.getElementSettings('selected_element'), this.getID(), clickedFilter, defaultFilter);
  }
  activateDefaultFilterButton() {
    const $filterButtons = this.getFilterButtonElements(),
      $defaultButton = $filterButtons.filter('[data-filter="' + this.getSettings('filterValues.default') + '"]');
    $filterButtons.attr('aria-pressed', false);
    $defaultButton.attr('aria-pressed', true);
  }
  deactivateDefaultFilterButton() {
    const $filterButtons = this.getFilterButtonElements();
    const $defaultButton = $filterButtons.filter('[data-filter="' + this.getSettings('filterValues.default') + '"]');
    $defaultButton.attr('aria-pressed', false);
  }

  /**
   * Gets the currently active buttons independent of URL params.
   * @return {Array} Currently active filter(s).
   */
  getCurrentlyActiveFilter() {
    const $activeFilterButtons = this.getActiveFilterButtonElements(),
      currentlyActiveFilterButtons = [];
    for (let i = 0; i < $activeFilterButtons.length; i++) {
      currentlyActiveFilterButtons.push($activeFilterButtons[i].dataset.filter);
    }
    return currentlyActiveFilterButtons;
  }

  /**
   * Get the filter operator for WP_Query. OR is translated IN.
   * @return {string} 'IN' or 'AND' for WP_Query or DISABLED for single selection.
   */
  getFilterOperator() {
    const elementSettings = this.getElementSettings(),
      multipleSelection = elementSettings.multiple_selection;
    if (!multipleSelection || !['AND', 'OR'].includes(elementSettings.logical_combination)) {
      return 'DISABLED';
    }
    return elementSettings.logical_combination;
  }

  /**
   *
   * @param {string} selectedTermSlug - Slug of currently selected term relating to last clicked button
   */
  filterItems(selectedTermSlug) {
    const elementSettings = this.getElementSettings(),
      defaultFilterValue = this.getSettings('filterValues.default');
    if (defaultFilterValue === selectedTermSlug) {
      elementorProFrontend.modules.taxonomyFilter.removeFilterFromLoopWidget(elementSettings.selected_element, this.getID(), selectedTermSlug, defaultFilterValue);
      return;
    }
    const multipleSelectionLogicalJoin = this.getFilterOperator();
    elementorProFrontend.modules.taxonomyFilter.setFilterDataForLoopWidget(elementSettings.selected_element, this.getID(), {
      filterType: 'taxonomy',
      filterData: {
        selectedTaxonomy: elementSettings.taxonomy,
        terms: [selectedTermSlug]
      }
    }, true, multipleSelectionLogicalJoin);
  }

  /**
   *
   * @param {string} filter
   */
  setFilter() {
    let filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getSettings('filterValues.default');
    this.filterItems(filter);
    this.activateFilterButton(filter);
  }
  onFilterButtonClick(event) {
    this.removePaginationHiddenClassOnLoopWidgetContainer();
    const currentlyActiveFilterButtons = this.getCurrentlyActiveFilter(),
      clickedFilter = event.currentTarget?.dataset?.filter;
    if (this.userClickedOnAllWhileItWasActive(clickedFilter, currentlyActiveFilterButtons)) {
      return;
    }
    if (currentlyActiveFilterButtons.includes(clickedFilter)) {
      this.deactivateFilterButton(clickedFilter);
      return;
    }
    this.setFilter(clickedFilter);
  }
  removePaginationHiddenClassOnLoopWidgetContainer() {
    const elementSettings = this.getElementSettings(),
      loopWidget = document.querySelector('.elementor-element-' + elementSettings.selected_element);
    if (loopWidget) {
      loopWidget.classList.remove('e-load-more-pagination-end');
    }
  }

  /**
   *
   * @param {string} clickedFilter
   * @param {Array}  currentlyActiveFilter
   * @return {boolean} User clicked on all while it was active.
   */
  userClickedOnAllWhileItWasActive(clickedFilter, currentlyActiveFilter) {
    return currentlyActiveFilter.includes(clickedFilter) && clickedFilter === this.getSettings('filterValues.default');
  }
  onDestroy() {
    const selectedElementId = this.getElementSettings('selected_element'),
      selectedTaxonomy = this.getElementSettings('taxonomy'),
      filterId = this.getID();
    if (selectedElementId && selectedTaxonomy) {
      elementorProFrontend.modules.taxonomyFilter.removeFilterFromLoopWidget(selectedElementId, filterId, '');
    }
    super.onDestroy();
  }
  populateLoopWidgetsStoreOnInitialPageLoad() {
    const elementSettings = this.getElementSettings(),
      urlParams = new URLSearchParams(window.location.search);
    let selectedTermSlugs = urlParams.get('e-filter-' + elementSettings.selected_element + '-' + elementSettings.taxonomy);
    if (selectedTermSlugs) {
      // Avoid null values in elementSettings.taxonomy when multiple taxonomies deselected to trigger all (Default) state.
      selectedTermSlugs = this.getTermsFromParams(selectedTermSlugs);
      const multipleSelectionLogicalJoin = this.getFilterOperator();
      elementorProFrontend.modules.taxonomyFilter.setFilterDataForLoopWidget(elementSettings.selected_element, this.getID(), {
        filterType: 'taxonomy',
        filterData: {
          selectedTaxonomy: elementSettings.taxonomy,
          terms: selectedTermSlugs
        }
      }, false, multipleSelectionLogicalJoin);
    }
  }
  getTermsFromParams(params) {
    let separator = _queryConstants.queryConstants.AND.separator.fromBrowser; // The web browser automatically replaces the plus sign with a space character before sending the data to the server.

    if (params.includes(_queryConstants.queryConstants.OR.separator.fromBrowser)) {
      separator = _queryConstants.queryConstants.OR.separator.fromBrowser;
    }
    return params.split(separator);
  }
  onInit() {
    super.onInit();
    this.populateLoopWidgetsStoreOnInitialPageLoad();
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
//# sourceMappingURL=taxonomy-filter.9d41aac2f76c01cfdb42.bundle.js.map
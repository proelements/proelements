/*! pro-elements - v3.24.0 - 09-10-2024 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["search"],{

/***/ "../modules/search/assets/js/frontend/handlers/search-keyboard-handler.js":
/*!********************************************************************************!*\
  !*** ../modules/search/assets/js/frontend/handlers/search-keyboard-handler.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));
var _focusableElementSelectors = __webpack_require__(/*! elementor-pro/frontend/utils/focusable-element-selectors */ "../assets/dev/js/frontend/utils/focusable-element-selectors.js");
class SearchKeyboardHandler extends elementorModules.frontend.handlers.Base {
  constructor() {
    super(...arguments);
    (0, _defineProperty2.default)(this, "focusableResultElements", void 0);
    (0, _defineProperty2.default)(this, "currentResultFocusedIndex", -1);
  }
  __construct() {
    super.__construct(...arguments);
    elementorFrontend.hooks.addAction('search:results-updated', this.loadResultElementsEvents.bind(this));
  }
  getDefaultSettings() {
    return {
      selectors: {
        searchWrapper: '.e-search',
        searchField: '.e-search-input',
        resultsContainer: '.e-search-results-container',
        loopItem: '.e-loop-item',
        clearIcon: '.e-search-input-wrapper > svg, .e-search-input-wrapper > i'
      }
    };
  }
  getDefaultElements() {
    const selectors = this.getSettings('selectors');
    return {
      resultsContainer: this.$element[0].querySelector(selectors.resultsContainer),
      searchField: this.$element[0].querySelector(selectors.searchField),
      clearIcon: this.$element[0].querySelector(selectors.clearIcon)
    };
  }
  setFocusableElements(elementContainer) {
    const focusableSelectors = (0, _focusableElementSelectors.focusableElementSelectors)();
    const focusableElements = elementContainer.querySelectorAll(focusableSelectors);
    this.focusableResultElements = Array.from(focusableElements).filter(element => !element.disabled && !element.inert && element.tabIndex !== -1);
  }
  isSearchInputFocused() {
    return this.elements.searchField === elementorFrontend.elements.window.document.activeElement;
  }
  bindEvents() {
    this.boundHandleKeyboardNavigation = this.handleKeyboardNavigation.bind(this);
    this.boundHandleEscapeKey = this.handleEscapeKey.bind(this);
    this.elements.searchField.addEventListener('keydown', this.boundHandleKeyboardNavigation);
    elementorFrontend.elements.window.document.addEventListener('keydown', this.boundHandleEscapeKey);
    this.elements.searchField.addEventListener('focus', this.openResults.bind(this));
  }
  loadResultElementsEvents() {
    this.setFocusableElements(this.$element[0].querySelector(this.getSettings('selectors.resultsContainer')));
    this.focusableResultElements?.forEach(element => {
      element.addEventListener('keydown', this.handleKeyboardNavigation.bind(this));
    });
  }
  unbindEvents() {
    if (this.boundHandleKeyboardNavigation) {
      this.elements.searchField.removeEventListener('keydown', this.boundHandleKeyboardNavigation);
    }
    elementorFrontend.elements.window.document.removeEventListener('keydown', this.boundHandleEscapeKey);
    this.elements.searchField.removeEventListener('focus', this.openResults.bind(this));
  }
  handleKeyboardNavigation(event) {
    switch (event.key) {
      case 'ArrowDown':
        this.focusNextElement();
        break;
      case 'ArrowUp':
        this.focusPreviousElement();
        break;
      case 'Enter':
        this.handleEnterKey();
        break;
    }
  }
  areResultsClosed() {
    const existingResults = this.elements.resultsContainer.querySelectorAll(this.getSettings('selectors.loopItem'));
    return 0 === existingResults.length || this.elements.resultsContainer.classList.contains('hidden');
  }
  openResults() {
    if (this.areResultsClosed()) {
      this.elements.resultsContainer.classList.remove('hidden');
      elementorFrontend.hooks.doAction('search:results-displayed', this.getID());
    }
  }
  handleEnterKey() {
    this.closeResults();
  }
  handleEscapeKey(event) {
    if ('Escape' !== event.key) {
      return;
    }
    const activeElement = elementorFrontend.elements.window.document.activeElement,
      isSearchResultsFocused = this.elements.resultsContainer.contains(activeElement) || false;
    if (isSearchResultsFocused) {
      this.elements.searchField.focus();
    }
    this.closeResults();
  }
  focusNextElement() {
    if (this.isSearchInputFocused()) {
      this.currentResultFocusedIndex = 0;
    } else {
      this.currentResultFocusedIndex++;
      this.checkFocusIndexBounds();
    }
    this.updateFocus();
  }
  focusPreviousElement() {
    if (this.isSearchInputFocused()) {
      this.currentResultFocusedIndex = this.focusableResultElements.length - 1;
    } else {
      this.currentResultFocusedIndex--;
      this.checkFocusIndexBounds();
    }
    this.updateFocus();
  }
  checkFocusIndexBounds() {
    if (this.currentResultFocusedIndex >= this.focusableResultElements.length) {
      this.currentResultFocusedIndex = -1;
    } else if (this.currentResultFocusedIndex < -1) {
      this.currentResultFocusedIndex = this.focusableResultElements.length - 1;
    }
  }
  updateFocus() {
    if (-1 === this.currentResultFocusedIndex) {
      this.focusSearchAndMoveCursorToEnd();
    } else {
      this.setFocusToElement(this.focusableResultElements[this.currentResultFocusedIndex]);
    }
  }
  closeResults() {
    this.elements.resultsContainer.classList.add('hidden');
    this.updateAriaExpanded(false);
  }
  updateAriaExpanded(expanded) {
    this.elements.searchField.setAttribute('aria-expanded', expanded);
  }
  focusSearchAndMoveCursorToEnd() {
    const searchField = this.elements.searchField;
    const length = searchField.value.length;
    this.setFocusToElement(this.elements.searchField);
    searchField.setSelectionRange(length, length);
  }
  setFocusToElement(element) {
    element.focus();
  }
}
exports["default"] = SearchKeyboardHandler;

/***/ }),

/***/ "../modules/search/assets/js/frontend/handlers/search.js":
/*!***************************************************************!*\
  !*** ../modules/search/assets/js/frontend/handlers/search.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));
var _runElementHandlers = _interopRequireDefault(__webpack_require__(/*! elementor-pro/frontend/utils/run-element-handlers */ "../assets/dev/js/frontend/utils/run-element-handlers.js"));
class Search extends elementorModules.frontend.handlers.Base {
  constructor() {
    super(...arguments);
    (0, _defineProperty2.default)(this, "debounceTimeoutId", void 0);
  }
  __construct() {
    super.__construct(...arguments);
    elementorFrontend.hooks.addAction('search:results-displayed', this.hideOtherResults.bind(this));
  }
  getDefaultSettings() {
    return {
      selectors: {
        searchWrapper: '.e-search',
        searchField: '.e-search-input',
        submitButton: '.e-search-submit',
        clearIcon: '.e-search-input-wrapper > svg, .e-search-input-wrapper > i',
        searchIcon: '.e-search-label > svg, .e-search-label > i',
        resultsContainer: '.e-search-results-container',
        results: '.e-search-results'
      },
      classes: {
        searchResultsListWrapper: 'e-search-results-list'
      }
    };
  }
  getDefaultElements() {
    const selectors = this.getSettings('selectors');
    return {
      searchWidget: this.$element[0],
      searchWrapper: this.$element[0].querySelector(selectors.searchWrapper),
      searchField: this.$element[0].querySelector(selectors.searchField),
      submitButton: this.$element[0].querySelector(selectors.submitButton),
      clearIcon: this.$element[0].querySelector(selectors.clearIcon),
      searchIcon: this.$element[0].querySelector(selectors.searchIcon),
      resultsContainer: this.$element[0].querySelector(selectors.resultsContainer),
      results: this.$element[0].querySelector(selectors.results)
    };
  }
  onInit() {
    super.onInit();
    this.changeClearIconVisibility(true);
    this.updateInputStyle();
    this.toggleSearchResultsVisibility = this.toggleSearchResultsVisibility.bind(this);
    document.addEventListener('click', this.toggleSearchResultsVisibility);
    document.fonts.ready.then(() => this.updateInputStyle());
  }
  onDestroy() {
    document.removeEventListener('click', this.toggleSearchResultsVisibility);
  }
  bindEvents() {
    this.elements.submitButton.addEventListener('click', this.onSubmit.bind(this));
    this.elements.searchField.addEventListener('input', event => {
      this.changeClearIconVisibility(!event.target.value.length);
      this.debounce(this.onType)(event);
    });
    this.elements.searchField.addEventListener('keydown', this.onSearchFieldKeydown.bind(this));
    this.elements.searchWidget.addEventListener('click', this.onClick.bind(this));
    ['focusin', 'focusout'].forEach(eventType => {
      this.elements.searchField.addEventListener(eventType, this.toggleWidgetFocusClass.bind(this));
    });
    this.elements.clearIcon?.addEventListener('click', this.onClear.bind(this));
  }
  onClick() {
    this.elements.resultsContainer.classList.add('hide-loader');
  }
  onType(event) {
    event.preventDefault();
    this.updateAriaLabel(this.elements.searchField.value);
    if (!this.elements.searchField.value.length) {
      this.clearResultsMarkup();
      return;
    }
    const minimumSearchLength = this.getMinimumSearchLength();
    const shouldShowLiveResults = this.shouldShowLiveResults();
    if (shouldShowLiveResults && this.elements.searchField.value.length >= minimumSearchLength) {
      this.renderLiveResults();
    }
  }
  toggleWidgetFocusClass(event) {
    const isFocusIn = 'focusin' === event.type;
    this.$element[0].classList.toggle('e-focus', isFocusIn);
  }
  onSubmit(event) {
    if (elementorFrontend.isEditMode()) {
      event.preventDefault();
    }
  }
  onClear(event) {
    event.preventDefault();
    this.elements.searchField.value = '';
    this.clearResultsMarkup();
    this.elements.searchField.focus();
    this.changeClearIconVisibility(true);
  }
  onSearchFieldKeydown(event) {
    if ('Enter' === event.code) {
      this.clearResultsMarkup();
      this.onSubmit(event);
    }
  }
  fetchUpdatedSearchWidgetMarkup() {
    return fetch(`${elementorProFrontend.config.urls.rest}elementor-pro/v1/refresh-search`, this.getFetchArgumentsForSearchUpdate());
  }
  getMinimumSearchLength() {
    return this.getElementSettings().minimum_search_characters || 3;
  }
  shouldShowLiveResults() {
    return this.getElementSettings().live_results && this.getElementSettings().template_id;
  }
  renderLiveResults() {
    const widget = document.querySelector(`.elementor-element-${this.getID()}`);
    if (!widget) {
      return;
    }
    if (!this.elements.searchField.value) {
      this.clearResultsMarkup();
      return;
    }
    this.elements.resultsContainer.classList.remove('hide-loader');
    this.elements.resultsContainer.classList.remove('hidden');
    return this.fetchUpdatedSearchWidgetMarkup().then(response => {
      if (!(response instanceof Response) || !response?.ok || 400 <= response?.status) {
        return {};
      }
      return response.json();
    }).catch(() => {
      return {};
    }).then(response => {
      if (!response?.data) {
        this.updateAriaExpanded(false);
        return;
      }
      const resultNode = this.createResultNode(response.data);
      this.elements.results.replaceChildren(resultNode);
      this.elements.resultsContainer.classList.add('hide-loader');
      this.maybeHandleNoResults(resultNode);
      elementorFrontend.hooks.doAction('search:results-updated');
    }).finally(() => {
      const resultsElements = document.querySelectorAll(`[data-id="${this.getID()}"] .e-loop-item`);
      (0, _runElementHandlers.default)(resultsElements);
      if (ElementorProFrontendConfig.settings.lazy_load_background_images) {
        document.dispatchEvent(new Event('elementor/lazyload/observe'));
      }
    });
  }
  maybeHandleNoResults(resultsNode) {
    const isNoResultsMessage = !!resultsNode.querySelector('.e-search-nothing-found-message');
    this.elements.results.classList[isNoResultsMessage ? 'add' : 'remove']('no-results');
    if (!isNoResultsMessage) {
      this.hideOtherResults();
    }
  }
  hideOtherResults() {
    let id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    if (id && id !== this.getID()) {
      return;
    }
    const visibleResultsContainers = document.querySelectorAll(`${this.getSettings('selectors').resultsContainer}:not(.hidden)`);
    Array.from(visibleResultsContainers).filter(resultsContainer => !resultsContainer.closest(`.elementor-element-${this.getID()}`)).forEach(resultsContainer => resultsContainer.classList.add('hidden'));
  }
  createResultNode(responseData) {
    const resultNode = document.createElement('div');
    const searchResultsList = this.getSettings('classes.searchResultsListWrapper');
    resultNode.setAttribute('class', searchResultsList);
    resultNode.innerHTML = responseData;
    const loopItems = resultNode.querySelectorAll('.e-loop-item'),
      hasResults = loopItems.length > 0;
    this.updateAriaExpanded(hasResults);
    return resultNode;
  }
  updateAriaExpanded(expanded) {
    this.elements.searchField.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  }
  updateAriaLabel(searchTerms) {
    if (searchTerms) {
      this.elements.resultsContainer.setAttribute('aria-label', `Results for ${searchTerms}`);
    } else {
      this.elements.resultsContainer.removeAttribute('aria-label');
    }
  }
  clearResultsMarkup() {
    this.elements.results.innerHTML = '';
    this.updateAriaExpanded(false);
  }
  getFetchArgumentsForSearchUpdate() {
    const data = this.prepareSearchUpdateRequestData();
    const args = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    if (elementorFrontend.isEditMode() && !!elementorPro.config.eSearch?.nonce) {
      args.headers['X-WP-Nonce'] = elementorPro.config.eSearch?.nonce;
    }
    return args;
  }
  prepareSearchUpdateRequestData() {
    const widgetId = '' + this.getID(),
      data = {
        post_id: this.getClosestDataElementorId(this.$element[0]),
        widget_id: widgetId,
        search_term: this.elements.searchField.value || ''
      };
    if (elementorFrontend.isEditMode()) {
      // In the editor, we have to support Search widgets that have been created but not saved to the database yet.
      const widgetContainer = window.top.$e.components.get('document').utils.findContainerById(widgetId);
      data.widget_model = widgetContainer.model.toJSON({
        remove: ['default', 'editSettings', 'defaultEditSettings']
      });
      data.is_edit_mode = true;
    }
    return data;
  }
  getClosestDataElementorId(element) {
    const closestParent = element.closest('[data-elementor-id]');
    return closestParent ? closestParent.getAttribute('data-elementor-id') : 0;
  }
  debounce(callback) {
    var _this = this;
    let timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      clearTimeout(_this.debounceTimeoutId);
      _this.debounceTimeoutId = setTimeout(() => callback.apply(_this, args), timeout);
    };
  }
  updateInputStyle() {
    let iconSlugs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['searchIcon', 'clearIcon'];
    const cssVariableNamesMap = {
        searchIcon: 'icon-label',
        clearIcon: 'icon-clear'
      },
      widgetStyle = this.$element[0].style,
      hiddenRoots = this.getAllDisplayNoneParents(this.$element[0].parentNode);
    this.setElementsDisplay(hiddenRoots, 'block');
    for (const iconSlug of iconSlugs) {
      const {
          width
        } = this.elements[iconSlug]?.getBoundingClientRect() || {
          width: 0
        },
        cssVariableSlug = cssVariableNamesMap[iconSlug];
      widgetStyle.setProperty(`--e-search-${cssVariableSlug}-absolute-width`, width + 'px');
      this.elements.searchField.classList[width ? 'remove' : 'add'](`no-${cssVariableSlug}`);
    }
    this.setElementsDisplay(hiddenRoots, '');
    this.elements.searchWrapper.classList.remove('hidden');
  }

  /**
   * Sets the clear icon visibility.
   * @param { boolean } shouldHide true to hide or false to show.
   * @return { void } the width.
   */
  changeClearIconVisibility(shouldHide) {
    this.elements.clearIcon?.classList[shouldHide ? 'add' : 'remove']('hidden');
  }
  toggleSearchResultsVisibility(event) {
    const selectors = this.getSettings('selectors'),
      widgetWrapper = `.elementor-element-${this.getID()}`,
      {
        target
      } = event,
      isTargetPartOfResults = !!target?.closest(`${widgetWrapper} ${selectors.resultsContainer}`) || target?.classList?.contains(selectors.resultsContainer) && !!target?.closest(widgetWrapper),
      isSearchContainerClicked = !!target?.closest(`${widgetWrapper} ${selectors.searchWrapper}`),
      isSearchInputClicked = target?.classList?.contains(selectors.searchField.replace('.', '')),
      isSearchResultsPresent = this.elements.resultsContainer?.children?.length;
    if (isTargetPartOfResults) {
      this.hideOtherResults();
    }
    if (!isSearchResultsPresent || isTargetPartOfResults) {
      return;
    }
    if (!isSearchInputClicked || !isSearchContainerClicked) {
      this.elements.resultsContainer.classList.add('hidden');
    }
  }
  getAllDisplayNoneParents(elementNode) {
    let foundElements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    if (!elementNode || elementNode === document.body) {
      return foundElements;
    }
    const style = window.getComputedStyle(elementNode),
      isNotDisplayed = 'none' === style.display;
    if (isNotDisplayed) {
      foundElements.push(elementNode);
    }
    return this.getAllDisplayNoneParents(elementNode.parentNode, foundElements);
  }
  setElementsDisplay(elements, displayValue) {
    elements.forEach(element => {
      element.style.display = displayValue;
    });
  }
  onElementChange(propertyName) {
    const propertyNameCallbackMap = {
      search_field_icon_label_size: () => this.updateInputStyle(['searchIcon']),
      icon_clear_size: () => this.updateInputStyle(['clearIcon'])
    };
    if (propertyNameCallbackMap[propertyName]) {
      propertyNameCallbackMap[propertyName]();
    }
  }
}
exports["default"] = Search;

/***/ })

}]);
//# sourceMappingURL=search.8457dd916c5a97a6dc73.bundle.js.map
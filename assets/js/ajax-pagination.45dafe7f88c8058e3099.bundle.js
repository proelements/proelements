/*! pro-elements - v3.28.0 - 23-03-2025 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["ajax-pagination"],{

/***/ "../modules/loop-builder/assets/js/frontend/handlers/ajax-pagination.js":
/*!******************************************************************************!*\
  !*** ../modules/loop-builder/assets/js/frontend/handlers/ajax-pagination.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _ajaxHelper = _interopRequireDefault(__webpack_require__(/*! elementor-pro/frontend/utils/ajax-helper */ "../assets/dev/js/frontend/utils/ajax-helper.js"));
var _runElementHandlers = _interopRequireDefault(__webpack_require__(/*! elementor-pro/frontend/utils/run-element-handlers */ "../assets/dev/js/frontend/utils/run-element-handlers.js"));
class AjaxPagination extends elementorModules.frontend.handlers.Base {
  getDefaultSettings() {
    return {
      selectors: {
        links: 'a.page-numbers:not(.current)',
        postWrapperTag: '.e-loop-item'
      }
    };
  }
  getDefaultElements() {
    const selectors = this.getSettings('selectors');
    return {
      links: this.$element[0].querySelectorAll(selectors.links)
    };
  }
  bindEvents() {
    super.bindEvents();
    this.linksEventListeners();
  }
  linksEventListeners() {
    if (!this.elements.links.length) {
      return;
    }
    if ('ajax' !== this.getElementSettings('pagination_load_type')) {
      return;
    }
    this.elements.links.forEach(link => {
      link.addEventListener('click', event => {
        this.handleLinkClick(event);
      });
    });
  }
  handleLinkClick(event) {
    event.preventDefault();
    if (this.isLoading) {
      return;
    }
    this.removeLinksListeners();
    this.handleUiBeforeLoading();
    const nextPageUrl = event?.target.getAttribute('href');
    this.updateURLQueryString(nextPageUrl);
    return fetch(nextPageUrl).then(response => response.text()).then(html => {
      // Convert the HTML string into a document object
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      this.handleSuccessFetch(doc);
    });
  }
  removeLinksListeners() {
    if (!this.elements.links.length) {
      return;
    }
    this.elements.links.forEach(link => {
      link.removeEventListener('click', this.handleLinkClick);
    });
  }
  updateURLQueryString(nextPageUrl) {
    const currentUrl = new URL(window.location.href);
    const currentParams = currentUrl.searchParams;
    const targetUrl = new URL(nextPageUrl);
    const targetParams = targetUrl.searchParams;
    targetParams.forEach((value, key) => {
      currentParams.set(key, value);
    });

    // Clicked on page 1.
    if (!targetParams.has('e-page-' + this.elementId)) {
      currentParams.delete('e-page-' + this.elementId);
    }
    history.pushState(null, '', currentUrl.href);
  }
  handleUiBeforeLoading() {
    this.setLoading(true);
    this.ajaxHelper.addLoadingAnimationOverlay(this.elementId);
    this.maybeScrollToTop();
  }
  setLoading(loadng) {
    this.isLoading = loadng;
  }
  maybeScrollToTop() {
    if ('yes' !== this.getElementSettings('auto_scroll')) {
      return;
    }
    const widget = document.querySelector(`.elementor-element-${this.elementId}`);
    if (!widget) {
      return;
    }
    widget.scrollIntoView({
      behavior: 'smooth'
    });
  }
  handleUiAfterLoading() {
    this.setLoading(false);
    this.ajaxHelper.removeLoadingAnimationOverlay(this.elementId);
  }
  handleSuccessFetch(result) {
    this.handleUiAfterLoading();
    const newWidgetContainer = result.querySelector(`[data-id="${this.elementId}"]`);
    const existingWidgetContainer = document.querySelector(`[data-id="${this.elementId}"]`);
    if (!newWidgetContainer || !existingWidgetContainer) {
      return;
    }
    const parentElement = existingWidgetContainer.parentNode;
    if (parentElement) {
      parentElement.replaceChild(newWidgetContainer, existingWidgetContainer);
    }
    this.afterInsertPosts();
  }
  afterInsertPosts() {
    const selectors = this.getSettings('selectors'),
      postsElements = document.querySelectorAll(`[data-id="${this.elementId}"] ${selectors.postWrapperTag}`);
    elementorFrontend.elementsHandler.runReadyTrigger(document.querySelector(`.elementor-element-${this.elementId}`));
    (0, _runElementHandlers.default)(postsElements);
    if (ElementorProFrontendConfig.settings.lazy_load_background_images) {
      document.dispatchEvent(new Event('elementor/lazyload/observe'));
    }
  }
  onInit() {
    super.onInit();
    this.setLoading(false);
    this.elementId = this.getID();
    this.ajaxHelper = new _ajaxHelper.default();
  }
}
exports["default"] = AjaxPagination;

/***/ })

}]);
//# sourceMappingURL=ajax-pagination.45dafe7f88c8058e3099.bundle.js.map
/*! pro-elements - - v3.22.0 - 16-06-2024 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["load-more"],{

/***/ "../modules/loop-builder/assets/js/frontend/handlers/load-more.js":
/*!************************************************************************!*\
  !*** ../modules/loop-builder/assets/js/frontend/handlers/load-more.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _loadMore = _interopRequireDefault(__webpack_require__(/*! modules/posts/assets/js/frontend/handlers/load-more */ "../modules/posts/assets/js/frontend/handlers/load-more.js"));
var _runElementHandlers = _interopRequireDefault(__webpack_require__(/*! elementor-pro/frontend/utils/run-element-handlers */ "../assets/dev/js/frontend/utils/run-element-handlers.js"));
class LoopLoadMore extends _loadMore.default {
  getDefaultSettings() {
    const defaultSettings = super.getDefaultSettings();
    defaultSettings.selectors.postsContainer = '.elementor-loop-container';
    defaultSettings.selectors.postWrapperTag = '.e-loop-item';
    defaultSettings.selectors.loadMoreButton = '.e-loop__load-more .elementor-button';
    defaultSettings.selectors.dynamicStyleElement = 'style[id^="loop-dynamic"]';
    return defaultSettings;
  }
  afterInsertPosts(postsElements, result) {
    super.afterInsertPosts(postsElements);
    if (elementorFrontend.config.experimentalFeatures.e_lazyload) {
      document.dispatchEvent(new Event('elementor/lazyload/observe'));
    }
    this.handleDynamicStyleElements(result);
    (0, _runElementHandlers.default)(postsElements);
  }

  /**
   * Handle Dynamic Style Elements.
   *
   * Adds the dynamic `<style>` block responsible for any styling that effects each individual loop-item
   * e.g. dynamic-tag background images
   *
   * @param {Object} result - Dom element after the remaining content `afterInsertPosts()` has run.
   */
  handleDynamicStyleElements(result) {
    const selectors = this.getSettings('selectors'),
      dynamicStyleElements = result.querySelectorAll(`[data-id="${this.elementId}"] ${selectors.dynamicStyleElement}`);
    this.$element.append(dynamicStyleElements);
  }
}
exports["default"] = LoopLoadMore;

/***/ }),

/***/ "../modules/posts/assets/js/frontend/handlers/load-more.js":
/*!*****************************************************************!*\
  !*** ../modules/posts/assets/js/frontend/handlers/load-more.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class LoadMore extends elementorModules.frontend.handlers.Base {
  getDefaultSettings() {
    return {
      selectors: {
        postsContainer: '.elementor-posts-container',
        postWrapperTag: 'article',
        loadMoreButton: '.elementor-button',
        loadMoreSpinnerWrapper: '.e-load-more-spinner',
        loadMoreSpinner: '.e-load-more-spinner i, .e-load-more-spinner svg',
        loadMoreAnchor: '.e-load-more-anchor'
      },
      classes: {
        loadMoreSpin: 'eicon-animation-spin',
        loadMoreIsLoading: 'e-load-more-pagination-loading',
        loadMorePaginationEnd: 'e-load-more-pagination-end',
        loadMoreNoSpinner: 'e-load-more-no-spinner'
      }
    };
  }
  getDefaultElements() {
    const selectors = this.getSettings('selectors');
    return {
      postsWidgetWrapper: this.$element[0],
      postsContainer: this.$element[0].querySelector(selectors.postsContainer),
      loadMoreButton: this.$element[0].querySelector(selectors.loadMoreButton),
      loadMoreSpinnerWrapper: this.$element[0].querySelector(selectors.loadMoreSpinnerWrapper),
      loadMoreSpinner: this.$element[0].querySelector(selectors.loadMoreSpinner),
      loadMoreAnchor: this.$element[0].querySelector(selectors.loadMoreAnchor)
    };
  }
  bindEvents() {
    super.bindEvents();

    // Handle load more functionality for on-click type.
    if (!this.elements.loadMoreButton) {
      return;
    }
    this.elements.loadMoreButton.addEventListener('click', event => {
      if (this.isLoading) {
        return;
      }
      event.preventDefault();
      this.handlePostsQuery();
    });
  }
  onInit() {
    super.onInit();
    this.classes = this.getSettings('classes');
    this.isLoading = false;
    const paginationType = this.getElementSettings('pagination_type');
    if ('load_more_on_click' !== paginationType && 'load_more_infinite_scroll' !== paginationType) {
      return;
    }
    this.isInfinteScroll = 'load_more_infinite_scroll' === paginationType;

    // When spinner is not available, the button's text should not be hidden.
    this.isSpinnerAvailable = this.getElementSettings('load_more_spinner').value;
    if (!this.isSpinnerAvailable) {
      this.elements.postsWidgetWrapper.classList.add(this.classes.loadMoreNoSpinner);
    }
    if (this.isInfinteScroll) {
      this.handleInfiniteScroll();
    } else if (this.elements.loadMoreSpinnerWrapper && this.elements.loadMoreButton) {
      // Instead of creating 2 spinners for on-click and infinity-scroll, one spinner will be used so it should be appended to the button in on-click mode.
      this.elements.loadMoreButton.insertAdjacentElement('beforeEnd', this.elements.loadMoreSpinnerWrapper);
    }

    // Set the post id and element id for the ajax request.
    this.elementId = this.getID();
    this.postId = elementorFrontendConfig.post.id;

    // Set the current page and last page for handling the load more post and when no more posts to show.
    if (this.elements.loadMoreAnchor) {
      this.currentPage = parseInt(this.elements.loadMoreAnchor.getAttribute('data-page'));
      this.maxPage = parseInt(this.elements.loadMoreAnchor.getAttribute('data-max-page'));
      if (this.currentPage === this.maxPage || !this.currentPage) {
        this.handleUiWhenNoPosts();
      }
    }
  }

  // Handle load more functionality for infinity-scroll type.
  handleInfiniteScroll() {
    if (this.isEdit) {
      return;
    }
    this.observer = elementorModules.utils.Scroll.scrollObserver({
      callback: event => {
        if (!event.isInViewport || this.isLoading) {
          return;
        }

        // When the observer is triggered it won't be triggered without scrolling, but sometimes there will be no scrollbar to trigger it again.
        this.observer.unobserve(this.elements.loadMoreAnchor);
        this.handlePostsQuery().then(() => {
          if (this.currentPage !== this.maxPage) {
            this.observer.observe(this.elements.loadMoreAnchor);
          }
        });
      }
    });
    this.observer.observe(this.elements.loadMoreAnchor);
  }
  handleUiBeforeLoading() {
    this.isLoading = true;
    if (this.elements.loadMoreSpinner) {
      this.elements.loadMoreSpinner.classList.add(this.classes.loadMoreSpin);
    }
    this.elements.postsWidgetWrapper.classList.add(this.classes.loadMoreIsLoading);
  }
  handleUiAfterLoading() {
    this.isLoading = false;
    if (this.elements.loadMoreSpinner) {
      this.elements.loadMoreSpinner.classList.remove(this.classes.loadMoreSpin);
    }
    if (this.isInfinteScroll && this.elements.loadMoreSpinnerWrapper && this.elements.loadMoreAnchor) {
      // Since the spinner has to be shown after the new content (posts), it should be appended after the anchor element.
      this.elements.loadMoreAnchor.insertAdjacentElement('afterend', this.elements.loadMoreSpinnerWrapper);
    }
    this.elements.postsWidgetWrapper.classList.remove(this.classes.loadMoreIsLoading);
  }
  handleUiWhenNoPosts() {
    this.elements.postsWidgetWrapper.classList.add(this.classes.loadMorePaginationEnd);
  }
  afterInsertPosts() {}
  handleSuccessFetch(result) {
    this.handleUiAfterLoading();
    const selectors = this.getSettings('selectors');

    // Grabbing only the new articles from the response without the existing ones (prevent posts duplication).
    const postsElements = result.querySelectorAll(`[data-id="${this.elementId}"] ${selectors.postsContainer} > ${selectors.postWrapperTag}`);
    const nextPageUrl = result.querySelector(`[data-id="${this.elementId}"] .e-load-more-anchor`).getAttribute('data-next-page');
    postsElements.forEach(element => this.elements.postsContainer.append(element));
    this.elements.loadMoreAnchor.setAttribute('data-page', this.currentPage);
    this.elements.loadMoreAnchor.setAttribute('data-next-page', nextPageUrl);
    if (this.currentPage === this.maxPage) {
      this.handleUiWhenNoPosts();
    }
    this.afterInsertPosts(postsElements, result);
  }
  handlePostsQuery() {
    this.handleUiBeforeLoading();
    this.currentPage++;
    const nextPageUrl = this.elements.loadMoreAnchor.getAttribute('data-next-page');
    return fetch(nextPageUrl).then(response => response.text()).then(html => {
      // Convert the HTML string into a document object
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      this.handleSuccessFetch(doc);
    });
  }
}
exports["default"] = LoadMore;

/***/ })

}]);
//# sourceMappingURL=load-more.ad89e46f2f6bfd9c27e8.bundle.js.map
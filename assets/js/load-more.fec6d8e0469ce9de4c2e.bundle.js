/*! pro-elements - v3.7.3 - 31-07-2022 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["load-more"],{

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
    super.bindEvents(); // Handle load more functionality for on-click type.

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

    this.isInfinteScroll = 'load_more_infinite_scroll' === paginationType; // When spinner is not available, the button's text should not be hidden.

    this.isSpinnerAvailable = this.getElementSettings('load_more_spinner').value;

    if (!this.isSpinnerAvailable) {
      this.elements.postsWidgetWrapper.classList.add(this.classes.loadMoreNoSpinner);
    }

    if (this.isInfinteScroll) {
      this.handleInfiniteScroll();
    } else if (this.elements.loadMoreSpinnerWrapper && this.elements.loadMoreButton) {
      // Instead of creating 2 spinners for on-click and infinity-scroll, one spinner will be used so it should be appended to the button in on-click mode.
      this.elements.loadMoreButton.insertAdjacentElement('beforeEnd', this.elements.loadMoreSpinnerWrapper);
    } // Set the post id and element id for the ajax request.


    this.elementId = this.getID();
    this.postId = elementorFrontendConfig.post.id; // Set the current page and last page for handling the load more post and when no more posts to show.

    if (this.elements.loadMoreAnchor) {
      this.currentPage = parseInt(this.elements.loadMoreAnchor.getAttribute('data-page'));
      this.maxPage = parseInt(this.elements.loadMoreAnchor.getAttribute('data-max-page'));

      if (this.currentPage === this.maxPage || !this.currentPage) {
        this.handleUiWhenNoPosts();
      }
    }
  } // Handle load more functionality for infinity-scroll type.


  handleInfiniteScroll() {
    if (this.isEdit) {
      return;
    }

    this.observer = elementorModules.utils.Scroll.scrollObserver({
      callback: event => {
        if (!event.isInViewport || this.isLoading) {
          return;
        } // When the observer is triggered it won't be triggered without scrolling, but sometimes there will be no scrollbar to trigger it again.


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

  handleSuccessFetch(result) {
    this.handleUiAfterLoading(); // Grabbing only the new articles from the response without the existing once (prevent posts duplication).

    const posts = result.querySelectorAll(`[data-id="${this.elementId}"] .elementor-posts-container > article`);
    const nextPageUrl = result.querySelector('.e-load-more-anchor').getAttribute('data-next-page'); // Converting HTMLCollection to an Array and iterate it.

    const postsHTML = [...posts].reduce((accumulator, post) => {
      return accumulator + post.outerHTML;
    }, '');
    this.elements.postsContainer.insertAdjacentHTML('beforeend', postsHTML);
    this.elements.loadMoreAnchor.setAttribute('data-page', this.currentPage);
    this.elements.loadMoreAnchor.setAttribute('data-next-page', nextPageUrl);

    if (this.currentPage === this.maxPage) {
      this.handleUiWhenNoPosts();
    }
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
    }).catch(err => {
      console.warn('Something went wrong.', err);
    });
  }

}

exports["default"] = LoadMore;

/***/ })

}]);
//# sourceMappingURL=load-more.fec6d8e0469ce9de4c2e.bundle.js.map
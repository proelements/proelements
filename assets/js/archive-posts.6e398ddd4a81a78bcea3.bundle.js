/*! elementor-pro - v3.30.0 - 01-07-2025 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["archive-posts"],{

/***/ "../modules/posts/assets/js/frontend/handlers/cards.js":
/*!*************************************************************!*\
  !*** ../modules/posts/assets/js/frontend/handlers/cards.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _posts = _interopRequireDefault(__webpack_require__(/*! ./posts */ "../modules/posts/assets/js/frontend/handlers/posts.js"));
var _default = exports["default"] = _posts.default.extend({
  getSkinPrefix() {
    return 'cards_';
  }
});

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

/***/ }),

/***/ "../modules/posts/assets/js/frontend/handlers/posts.js":
/*!*************************************************************!*\
  !*** ../modules/posts/assets/js/frontend/handlers/posts.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = elementorModules.frontend.handlers.Base.extend({
  getSkinPrefix() {
    return 'classic_';
  },
  bindEvents() {
    elementorFrontend.addListenerOnce(this.getModelCID(), 'resize', this.onWindowResize);
  },
  unbindEvents() {
    elementorFrontend.removeListeners(this.getModelCID(), 'resize', this.onWindowResize);
  },
  getClosureMethodsNames() {
    return elementorModules.frontend.handlers.Base.prototype.getClosureMethodsNames.apply(this, arguments).concat(['fitImages', 'onWindowResize', 'runMasonry']);
  },
  getDefaultSettings() {
    return {
      classes: {
        fitHeight: 'elementor-fit-height',
        hasItemRatio: 'elementor-has-item-ratio'
      },
      selectors: {
        postsContainer: '.elementor-posts-container',
        post: '.elementor-post',
        postThumbnail: '.elementor-post__thumbnail',
        postThumbnailImage: '.elementor-post__thumbnail img'
      }
    };
  },
  getDefaultElements() {
    var selectors = this.getSettings('selectors');
    return {
      $postsContainer: this.$element.find(selectors.postsContainer),
      $posts: this.$element.find(selectors.post)
    };
  },
  fitImage($post) {
    var settings = this.getSettings(),
      $imageParent = $post.find(settings.selectors.postThumbnail),
      $image = $imageParent.find('img'),
      image = $image[0];
    if (!image) {
      return;
    }
    var imageParentRatio = $imageParent.outerHeight() / $imageParent.outerWidth(),
      imageRatio = image.naturalHeight / image.naturalWidth;
    $imageParent.toggleClass(settings.classes.fitHeight, imageRatio < imageParentRatio);
  },
  fitImages() {
    var $ = jQuery,
      self = this,
      itemRatio = getComputedStyle(this.$element[0], ':after').content,
      settings = this.getSettings();
    if (self.isMasonryEnabled()) {
      this.elements.$postsContainer.removeClass(settings.classes.hasItemRatio);
      return;
    }
    this.elements.$postsContainer.toggleClass(settings.classes.hasItemRatio, !!itemRatio.match(/\d/));
    this.elements.$posts.each(function () {
      var $post = $(this),
        $image = $post.find(settings.selectors.postThumbnailImage);
      self.fitImage($post);
      $image.on('load', function () {
        self.fitImage($post);
      });
    });
  },
  setColsCountSettings() {
    const settings = this.getElementSettings(),
      skinPrefix = this.getSkinPrefix(),
      colsCount = elementorProFrontend.utils.controls.getResponsiveControlValue(settings, `${skinPrefix}columns`);
    this.setSettings('colsCount', colsCount);
  },
  isMasonryEnabled() {
    return !!this.getElementSettings(this.getSkinPrefix() + 'masonry');
  },
  initMasonry() {
    imagesLoaded(this.elements.$posts, this.runMasonry);
  },
  getVerticalSpaceBetween() {
    /* The `verticalSpaceBetween` variable is set up in a way that supports older versions of the portfolio widget */
    let verticalSpaceBetween = elementorProFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(), `${this.getSkinPrefix()}row_gap`, 'size');
    if ('' === this.getSkinPrefix() && '' === verticalSpaceBetween) {
      verticalSpaceBetween = this.getElementSettings('item_gap.size');
    }
    return verticalSpaceBetween;
  },
  runMasonry() {
    var elements = this.elements;
    elements.$posts.css({
      marginTop: '',
      transitionDuration: ''
    });
    this.setColsCountSettings();
    var colsCount = this.getSettings('colsCount'),
      hasMasonry = this.isMasonryEnabled() && colsCount >= 2;
    elements.$postsContainer.toggleClass('elementor-posts-masonry', hasMasonry);
    if (!hasMasonry) {
      elements.$postsContainer.height('');
      return;
    }
    const verticalSpaceBetween = this.getVerticalSpaceBetween();
    var masonry = new elementorModules.utils.Masonry({
      container: elements.$postsContainer,
      items: elements.$posts.filter(':visible'),
      columnsCount: this.getSettings('colsCount'),
      verticalSpaceBetween: verticalSpaceBetween || 0
    });
    masonry.run();
  },
  run() {
    // For slow browsers
    setTimeout(this.fitImages, 0);
    this.initMasonry();
  },
  onInit() {
    elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);
    this.bindEvents();
    this.run();
  },
  onWindowResize() {
    this.fitImages();
    this.runMasonry();
  },
  onElementChange() {
    this.fitImages();
    setTimeout(this.runMasonry);
  }
});

/***/ }),

/***/ "../modules/theme-builder/assets/js/frontend/handlers/archive-posts-load-more.js":
/*!***************************************************************************************!*\
  !*** ../modules/theme-builder/assets/js/frontend/handlers/archive-posts-load-more.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _loadMore = _interopRequireDefault(__webpack_require__(/*! ../../../../../posts/assets/js/frontend/handlers/load-more */ "../modules/posts/assets/js/frontend/handlers/load-more.js"));
class ArchivePostsLoadMore extends _loadMore.default {}
exports["default"] = ArchivePostsLoadMore;

/***/ }),

/***/ "../modules/theme-builder/assets/js/frontend/handlers/archive-posts-skin-cards.js":
/*!****************************************************************************************!*\
  !*** ../modules/theme-builder/assets/js/frontend/handlers/archive-posts-skin-cards.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _cards = _interopRequireDefault(__webpack_require__(/*! ../../../../../posts/assets/js/frontend/handlers/cards */ "../modules/posts/assets/js/frontend/handlers/cards.js"));
var _default = exports["default"] = _cards.default.extend({
  getSkinPrefix() {
    return 'archive_cards_';
  }
});

/***/ }),

/***/ "../modules/theme-builder/assets/js/frontend/handlers/archive-posts-skin-classic.js":
/*!******************************************************************************************!*\
  !*** ../modules/theme-builder/assets/js/frontend/handlers/archive-posts-skin-classic.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _posts = _interopRequireDefault(__webpack_require__(/*! modules/posts/assets/js/frontend/handlers/posts */ "../modules/posts/assets/js/frontend/handlers/posts.js"));
var _default = exports["default"] = _posts.default.extend({
  getSkinPrefix() {
    return 'archive_classic_';
  }
});

/***/ })

}]);
//# sourceMappingURL=archive-posts.6e398ddd4a81a78bcea3.bundle.js.map
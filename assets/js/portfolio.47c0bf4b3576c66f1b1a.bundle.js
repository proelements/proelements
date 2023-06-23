/*! pro-elements - v3.14.0 - 18-06-2023 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["portfolio"],{

/***/ "../modules/posts/assets/js/frontend/handlers/portfolio.js":
/*!*****************************************************************!*\
  !*** ../modules/posts/assets/js/frontend/handlers/portfolio.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _posts = _interopRequireDefault(__webpack_require__(/*! ./posts */ "../modules/posts/assets/js/frontend/handlers/posts.js"));
var _default = _posts.default.extend({
  isActive(settings) {
    return settings.$element.find('.elementor-portfolio').length;
  },
  getSkinPrefix() {
    return '';
  },
  getDefaultSettings() {
    var settings = _posts.default.prototype.getDefaultSettings.apply(this, arguments);
    settings.transitionDuration = 450;
    jQuery.extend(settings.classes, {
      active: 'elementor-active',
      item: 'elementor-portfolio-item',
      ghostItem: 'elementor-portfolio-ghost-item'
    });
    return settings;
  },
  getDefaultElements() {
    var elements = _posts.default.prototype.getDefaultElements.apply(this, arguments);
    elements.$filterButtons = this.$element.find('.elementor-portfolio__filter');
    return elements;
  },
  getOffset(itemIndex, itemWidth, itemHeight) {
    var settings = this.getSettings(),
      itemGap = this.elements.$postsContainer.width() / settings.colsCount - itemWidth;
    itemGap += itemGap / (settings.colsCount - 1);
    return {
      start: (itemWidth + itemGap) * (itemIndex % settings.colsCount),
      top: (itemHeight + itemGap) * Math.floor(itemIndex / settings.colsCount)
    };
  },
  getClosureMethodsNames() {
    var baseClosureMethods = _posts.default.prototype.getClosureMethodsNames.apply(this, arguments);
    return baseClosureMethods.concat(['onFilterButtonClick']);
  },
  filterItems(term) {
    var $posts = this.elements.$posts,
      activeClass = this.getSettings('classes.active'),
      termSelector = '.elementor-filter-' + term;
    if ('__all' === term) {
      $posts.addClass(activeClass);
      return;
    }
    $posts.not(termSelector).removeClass(activeClass);
    $posts.filter(termSelector).addClass(activeClass);
  },
  removeExtraGhostItems() {
    var settings = this.getSettings(),
      $shownItems = this.elements.$posts.filter(':visible'),
      emptyColumns = (settings.colsCount - $shownItems.length % settings.colsCount) % settings.colsCount,
      $ghostItems = this.elements.$postsContainer.find('.' + settings.classes.ghostItem);
    $ghostItems.slice(emptyColumns).remove();
  },
  handleEmptyColumns() {
    this.removeExtraGhostItems();
    var settings = this.getSettings(),
      $shownItems = this.elements.$posts.filter(':visible'),
      $ghostItems = this.elements.$postsContainer.find('.' + settings.classes.ghostItem),
      emptyColumns = (settings.colsCount - ($shownItems.length + $ghostItems.length) % settings.colsCount) % settings.colsCount;
    for (var i = 0; i < emptyColumns; i++) {
      this.elements.$postsContainer.append(jQuery('<div>', {
        class: settings.classes.item + ' ' + settings.classes.ghostItem
      }));
    }
  },
  showItems($activeHiddenItems) {
    $activeHiddenItems.show();
    setTimeout(function () {
      $activeHiddenItems.css({
        opacity: 1
      });
    });
  },
  hideItems($inactiveShownItems) {
    $inactiveShownItems.hide();
  },
  arrangeGrid() {
    var $ = jQuery,
      self = this,
      settings = self.getSettings(),
      $activeItems = self.elements.$posts.filter('.' + settings.classes.active),
      $inactiveItems = self.elements.$posts.not('.' + settings.classes.active),
      $activeHiddenItems = $activeItems.filter(':hidden'),
      $inactiveShownItems = $inactiveItems.filter(':visible');
    self.elements.$posts.css('transition-duration', settings.transitionDuration + 'ms');
    self.showItems($activeHiddenItems);
    if (self.isEdit) {
      self.fitImages();
    }
    self.handleEmptyColumns();
    if (self.isMasonryEnabled()) {
      self.hideItems($inactiveShownItems);
      self.showItems($activeHiddenItems);
      self.handleEmptyColumns();
      self.runMasonry();
      return;
    }
    $inactiveShownItems.css({
      opacity: 0,
      transform: 'scale3d(0.2, 0.2, 1)'
    });
    const $shownItems = self.elements.$posts.filter(':visible'),
      $activeOrShownItems = $activeItems.add($shownItems),
      $activeShownItems = $activeItems.filter(':visible'),
      itemWidth = $shownItems.outerWidth(),
      itemHeight = $shownItems.outerHeight();
    $activeShownItems.each(function () {
      var $item = $(this),
        currentOffset = self.getOffset($activeOrShownItems.index($item), itemWidth, itemHeight),
        requiredOffset = self.getOffset($shownItems.index($item), itemWidth, itemHeight);
      if (currentOffset.start === requiredOffset.start && currentOffset.top === requiredOffset.top) {
        return;
      }
      requiredOffset.start -= currentOffset.start;
      requiredOffset.top -= currentOffset.top;
      if (elementorFrontend.config.is_rtl) {
        requiredOffset.start *= -1;
      }
      $item.css({
        transitionDuration: '',
        transform: 'translate3d(' + requiredOffset.start + 'px, ' + requiredOffset.top + 'px, 0)'
      });
    });
    setTimeout(function () {
      $activeItems.each(function () {
        var $item = $(this),
          currentOffset = self.getOffset($activeOrShownItems.index($item), itemWidth, itemHeight),
          requiredOffset = self.getOffset($activeItems.index($item), itemWidth, itemHeight);
        $item.css({
          transitionDuration: settings.transitionDuration + 'ms'
        });
        requiredOffset.start -= currentOffset.start;
        requiredOffset.top -= currentOffset.top;
        if (elementorFrontend.config.is_rtl) {
          requiredOffset.start *= -1;
        }
        setTimeout(function () {
          $item.css('transform', 'translate3d(' + requiredOffset.start + 'px, ' + requiredOffset.top + 'px, 0)');
        });
      });
    });
    setTimeout(function () {
      self.hideItems($inactiveShownItems);
      $activeItems.css({
        transitionDuration: '',
        transform: 'translate3d(0px, 0px, 0px)'
      });
      self.handleEmptyColumns();
    }, settings.transitionDuration);
  },
  activeFilterButton(filter) {
    var activeClass = this.getSettings('classes.active'),
      $filterButtons = this.elements.$filterButtons,
      $button = $filterButtons.filter('[data-filter="' + filter + '"]');
    $filterButtons.removeClass(activeClass);
    $button.addClass(activeClass);
  },
  setFilter(filter) {
    this.activeFilterButton(filter);
    this.filterItems(filter);
    this.arrangeGrid();
  },
  refreshGrid() {
    this.setColsCountSettings();
    this.arrangeGrid();
  },
  bindEvents() {
    _posts.default.prototype.bindEvents.apply(this, arguments);
    this.elements.$filterButtons.on('click', this.onFilterButtonClick);
  },
  isMasonryEnabled() {
    return !!this.getElementSettings('masonry');
  },
  run() {
    _posts.default.prototype.run.apply(this, arguments);
    this.setColsCountSettings();
    this.setFilter('__all');
    this.handleEmptyColumns();
  },
  onFilterButtonClick(event) {
    this.setFilter(jQuery(event.currentTarget).data('filter'));
  },
  onWindowResize() {
    _posts.default.prototype.onWindowResize.apply(this, arguments);
    this.refreshGrid();
  },
  onElementChange(propertyName) {
    _posts.default.prototype.onElementChange.apply(this, arguments);
    if ('classic_item_ratio' === propertyName) {
      this.refreshGrid();
    }
  }
});
exports["default"] = _default;

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
var _default = elementorModules.frontend.handlers.Base.extend({
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
exports["default"] = _default;

/***/ })

}]);
//# sourceMappingURL=portfolio.47c0bf4b3576c66f1b1a.bundle.js.map
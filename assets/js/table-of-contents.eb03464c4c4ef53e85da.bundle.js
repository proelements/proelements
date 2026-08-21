/*! pro-elements - v4.2.0 - 19-08-2026 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["table-of-contents"],{

/***/ "../modules/table-of-contents/assets/js/frontend/handlers/table-of-contents.js"
/*!*************************************************************************************!*\
  !*** ../modules/table-of-contents/assets/js/frontend/handlers/table-of-contents.js ***!
  \*************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _dompurify = _interopRequireDefault(__webpack_require__(/*! dompurify */ "../node_modules/dompurify/dist/purify.cjs.js"));
class TOCHandler extends elementorModules.frontend.handlers.Base {
  getDefaultSettings() {
    const elementSettings = this.getElementSettings(),
      listWrapperTag = 'numbers' === elementSettings.marker_view ? 'ol' : 'ul';
    return {
      selectors: {
        widgetContainer: '.elementor-widget-container',
        postContentContainer: '.elementor:not([data-elementor-type="header"]):not([data-elementor-type="footer"]):not([data-elementor-type="popup"])',
        expandButton: '.elementor-toc__toggle-button--expand',
        collapseButton: '.elementor-toc__toggle-button--collapse',
        body: '.elementor-toc__body',
        headerTitle: '.elementor-toc__header-title'
      },
      classes: {
        anchor: 'elementor-menu-anchor',
        listWrapper: 'elementor-toc__list-wrapper',
        listItem: 'elementor-toc__list-item',
        listTextWrapper: 'elementor-toc__list-item-text-wrapper',
        firstLevelListItem: 'elementor-toc__top-level',
        listItemText: 'elementor-toc__list-item-text',
        activeItem: 'elementor-item-active',
        headingAnchor: 'elementor-toc__heading-anchor',
        collapsed: 'elementor-toc--collapsed'
      },
      listWrapperTag
    };
  }
  getDefaultElements() {
    const settings = this.getSettings();
    let widgetContainer = this.$element.find(settings.selectors.widgetContainer);
    if (0 === widgetContainer.length) {
      widgetContainer = this.$element;
    }
    return {
      $pageContainer: this.getContainer(),
      $widgetContainer: widgetContainer,
      $expandButton: this.$element.find(settings.selectors.expandButton),
      $collapseButton: this.$element.find(settings.selectors.collapseButton),
      $tocBody: this.$element.find(settings.selectors.body),
      $listItems: this.$element.find('.' + settings.classes.listItem)
    };
  }
  getContainer() {
    const elementSettings = this.getElementSettings();

    // If there is a custom container defined by the user, use it as the headings-scan container
    if (elementSettings.container) {
      return jQuery(_dompurify.default.sanitize(elementSettings.container));
    }

    // Get the document wrapper element in which the TOC is located
    const $documentWrapper = this.$element.parents('.elementor');

    // If the TOC container is a popup, only scan the popup for headings
    if ('popup' === $documentWrapper.attr('data-elementor-type')) {
      return $documentWrapper;
    }

    // If the TOC container is anything other than a popup, scan only the post/page content for headings
    const settings = this.getSettings();
    return jQuery(settings.selectors.postContentContainer);
  }
  bindEvents() {
    const elementSettings = this.getElementSettings();
    if (elementSettings.minimize_box) {
      this.elements.$expandButton.on('click', () => this.expandBox()).on('keyup', event => this.triggerClickOnEnterSpace(event));
      this.elements.$collapseButton.on('click', () => this.collapseBox()).on('keyup', event => this.triggerClickOnEnterSpace(event));
    }
    if (elementSettings.collapse_subitems) {
      this.elements.$listItems.on('hover', event => jQuery(event.target).slideToggle());
    }
  }
  getHeadings() {
    // Get all headings from document by user-selected tags
    const elementSettings = this.getElementSettings(),
      tags = elementSettings.headings_by_tags.join(','),
      selectors = this.getSettings('selectors'),
      excludedSelectors = elementSettings.exclude_headings_by_selector;
    return this.elements.$pageContainer.find(tags).not(selectors.headerTitle).filter((index, heading) => {
      return !jQuery(heading).closest(excludedSelectors).length; // Handle excluded selectors if there are any
    });
  }
  addAnchorsBeforeHeadings() {
    const classes = this.getSettings('classes');

    // Add an anchor element right before each TOC heading to create anchors for TOC links
    this.elements.$headings.before(index => {
      // Check if the heading element itself has an ID, or if it is a widget which includes a main heading element, whether the widget wrapper has an ID
      if (jQuery(this.elements.$headings[index]).data('hasOwnID')) {
        return;
      }
      return `<span id="${classes.headingAnchor}-${index}" class="${classes.anchor} "></span>`;
    });
  }
  activateItems($listItems) {
    const classes = this.getSettings('classes');
    this.deactivateItems($listItems);
    const $activeListsToExpand = [];
    $listItems.forEach($item => {
      $item.addClass(classes.activeItem);
      if (!this.getElementSettings('collapse_subitems')) {
        return;
      }
      let $activeList;
      if ($item.hasClass(classes.firstLevelListItem)) {
        $activeList = $item.parent().next();
      } else {
        $activeList = $item.parents('.' + classes.listWrapper).eq(-2);
      }
      if ($activeList.length && !$activeListsToExpand.some($list => $list[0].contains($activeList[0]))) {
        $activeListsToExpand.push($activeList);
      }
    });
    this.deactivateLists($activeListsToExpand);
    this.$activeItems = $listItems;
    this.$activeLists = $activeListsToExpand;
    this.$activeLists.forEach($list => $list.stop().slideDown());
  }
  deactivateItems($activeToBe) {
    if (!this.$activeItems || 0 === this.$activeItems.length) {
      return;
    }
    const {
      classes
    } = this.getSettings();
    this.$activeItems.forEach($item => {
      const shouldRemain = $activeToBe.some($toBe => $item.is($toBe));
      if (!shouldRemain) {
        $item.removeClass(classes.activeItem);
      }
    });
  }
  deactivateLists($activeListsToBe) {
    if (this.$activeLists) {
      this.$activeLists.forEach($list => {
        const shouldKeepExpanded = $activeListsToBe.some($listToBe => $list[0].contains($listToBe[0]));
        if (!shouldKeepExpanded) {
          $list.slideUp();
        }
      });
    }
  }
  updateActiveItemFromViewport(scrollDirection) {
    const $visibleItems = [];
    this.$listItemTexts.each((_, element) => {
      const anchorSelector = element.hash;
      if (!anchorSelector) {
        return;
      }
      let $anchor;
      try {
        $anchor = jQuery(decodeURIComponent(anchorSelector));
      } catch (e) {
        return;
      }
      const id = $anchor.attr('id');
      if (this.viewportItems[id]) {
        $visibleItems.push(jQuery(element));
      }
    });
    if ($visibleItems.length > 0) {
      this.activateItems($visibleItems);
      // In case there are no headings visible in viewport, the wanted behavior is to activate the last heading above the viewport
      // If the user is scrolling up, we activate the heading above the current active heading.
      // If the user is scrolling down, no need to activate any heading - the last heading above the viewport is already active
    } else if ('up' === scrollDirection) {
      const currentIndex = this.$listItemTexts.index(this.$activeItems[0]);

      // No heading above viewport - deactivate all items
      if (0 === currentIndex) {
        this.activateItems([]);
        return;
      }

      // Activate the heading above the current active heading
      const itemToActivate = this.$listItemTexts.eq(currentIndex - 1);
      if (itemToActivate.length) {
        this.activateItems([itemToActivate]);
      }
    }
  }
  followAnchor($element) {
    const anchorSelector = $element[0].hash;
    let $anchor;
    try {
      // `decodeURIComponent` for UTF8 characters in the hash.
      $anchor = jQuery(decodeURIComponent(anchorSelector));
    } catch (e) {
      return;
    }
    const observerOptions = {
      rootMargin: '0px',
      threshold: 0
    };
    const observer = this.createObserver($anchor, observerOptions);
    observer.observe($anchor[0]);
  }
  createObserver($anchor, options) {
    let lastScrollTop = 0;
    return new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const scrollTop = document.documentElement.scrollTop,
          isScrollingDown = scrollTop > lastScrollTop,
          id = $anchor.attr('id');
        if (entry.isIntersecting) {
          this.viewportItems[id] = true;
        } else {
          delete this.viewportItems[id];
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        if (this.itemClicked) {
          return;
        }
        this.updateActiveItemFromViewport(isScrollingDown ? 'down' : 'up');
      });
    }, options);
  }
  followAnchors() {
    this.$listItemTexts.each((_index, element) => this.followAnchor(jQuery(element)));
  }
  populateTOC() {
    this.listItemPointer = 0;
    const elementSettings = this.getElementSettings();
    if (elementSettings.hierarchical_view) {
      this.createNestedList();
    } else {
      this.createFlatList();
    }
    this.$listItemTexts = this.$element.find('.elementor-toc__list-item-text');
    this.$listItemTexts.on('click', this.onListItemClick.bind(this));
    if (!elementorFrontend.isEditMode()) {
      this.followAnchors();
      requestAnimationFrame(() => this.updateActiveItemFromViewport());
    }
  }
  createNestedList() {
    this.headingsData.forEach((heading, index) => {
      heading.level = 0;
      for (let i = index - 1; i >= 0; i--) {
        const currentOrderedItem = this.headingsData[i];
        if (currentOrderedItem.tag <= heading.tag) {
          heading.level = currentOrderedItem.level;
          if (currentOrderedItem.tag < heading.tag) {
            heading.level++;
          }
          break;
        }
      }
    });
    this.elements.$tocBody.html(this.getNestedLevel(0));
  }
  createFlatList() {
    this.elements.$tocBody.html(this.getNestedLevel());
  }
  getNestedLevel(level) {
    const settings = this.getSettings(),
      elementSettings = this.getElementSettings(),
      icon = this.getElementSettings('icon');
    let renderedIcon;
    if (icon) {
      // We generate the icon markup in PHP and make it available via get_frontend_settings(). As a result, the
      // rendered icon is not available in the editor, so in the editor we use the regular <i> tag.
      if (elementorFrontend.config.experimentalFeatures.e_font_icon_svg && !elementorFrontend.isEditMode()) {
        renderedIcon = typeof icon.rendered_tag !== 'undefined' ? icon.rendered_tag : '';
      } else {
        renderedIcon = icon.value ? `<i class="${icon.value}"></i>` : '';
      }
    }

    // Open new list/nested list
    let html = `<${settings.listWrapperTag} class="${settings.classes.listWrapper}">`;

    // For each list item, build its markup.
    while (this.listItemPointer < this.headingsData.length) {
      const currentItem = this.headingsData[this.listItemPointer];
      let listItemTextClasses = settings.classes.listItemText;
      if (0 === currentItem.level) {
        // If the current list item is a top level item, give it the first level class
        listItemTextClasses += ' ' + settings.classes.firstLevelListItem;
      }
      if (level > currentItem.level) {
        break;
      }
      if (level === currentItem.level) {
        html += `<li class="${settings.classes.listItem}">`;
        html += `<div class="${settings.classes.listTextWrapper}">`;
        let liContent = `<a href="#${currentItem.anchorLink}" class="${listItemTextClasses}">${currentItem.text}</a>`;

        // If list type is bullets, add the bullet icon as an <i> tag
        if ('bullets' === elementSettings.marker_view && icon) {
          liContent = `${renderedIcon}${liContent}`;
        }
        liContent = _dompurify.default.sanitize(liContent);
        html += liContent;
        html += '</div>';
        this.listItemPointer++;
        const nextItem = this.headingsData[this.listItemPointer];
        if (nextItem && level < nextItem.level) {
          // If a new nested list has to be created under the current item,
          // this entire method is called recursively (outside the while loop, a list wrapper is created)
          html += this.getNestedLevel(nextItem.level);
        }
        html += '</li>';
      }
    }
    html += `</${settings.listWrapperTag}>`;
    return html;
  }
  handleNoHeadingsFound() {
    const noHeadingsText = this.getElementSettings('no_headings_message');
    return this.elements.$tocBody.html(noHeadingsText);
  }
  collapseBodyListener() {
    const activeBreakpoints = elementorFrontend.breakpoints.getActiveBreakpointsList({
      withDesktop: true
    });
    const minimizedOn = this.getElementSettings('minimized_on'),
      currentDeviceMode = elementorFrontend.getCurrentDeviceMode(),
      isCollapsed = this.$element.hasClass(this.getSettings('classes.collapsed'));

    // If minimizedOn value is set to desktop, it applies for widescreen as well.
    if ('desktop' === minimizedOn || activeBreakpoints.indexOf(minimizedOn) >= activeBreakpoints.indexOf(currentDeviceMode)) {
      if (!isCollapsed) {
        this.collapseBox(false);
      }
    } else if (isCollapsed) {
      this.expandBox(false);
    }
  }
  onElementChange(settings) {
    if ('minimized_on' === settings) {
      this.collapseBodyListener();
    }
  }
  getHeadingAnchorLink(index, classes) {
    const headingID = this.elements.$headings[index].id,
      wrapperID = this.elements.$headings[index].closest('.elementor-widget')?.id;
    const anchorLink = headingID || wrapperID;
    if (anchorLink) {
      jQuery(this.elements.$headings[index]).data('hasOwnID', true);
      return anchorLink;
    }
    return `${classes.headingAnchor}-${index}`;
  }
  setHeadingsData() {
    this.headingsData = [];
    const classes = this.getSettings('classes');

    // Create an array for simplifying TOC list creation
    this.elements.$headings.each((index, element) => {
      const anchorLink = this.getHeadingAnchorLink(index, classes);
      this.headingsData.push({
        tag: +element.nodeName.slice(1),
        text: element.textContent,
        anchorLink
      });
    });
  }
  run() {
    this.elements.$headings = this.getHeadings();
    if (!this.elements.$headings.length) {
      return this.handleNoHeadingsFound();
    }
    this.setHeadingsData();
    if (!elementorFrontend.isEditMode()) {
      this.addAnchorsBeforeHeadings();
    }
    this.populateTOC();
    if (this.getElementSettings('minimize_box')) {
      this.collapseBodyListener();
    }
  }
  expandBox(changeFocus = true) {
    const boxHeight = this.getCurrentDeviceSetting('min_height');
    this.$element.removeClass(this.getSettings('classes.collapsed'));
    this.elements.$tocBody.slideDown();
    this.elements.$expandButton.attr('aria-expanded', 'true');
    this.elements.$collapseButton.attr('aria-expanded', 'true');

    // Return container to the full height in case a min-height is defined by the user
    this.elements.$widgetContainer.css('min-height', boxHeight.size + boxHeight.unit);
    if (changeFocus) {
      this.elements.$collapseButton.trigger('focus');
    }
  }
  collapseBox(changeFocus = true) {
    this.$element.addClass(this.getSettings('classes.collapsed'));
    this.elements.$tocBody.slideUp();
    this.elements.$expandButton.attr('aria-expanded', 'false');
    this.elements.$collapseButton.attr('aria-expanded', 'false');

    // Close container in case a min-height is defined by the user
    this.elements.$widgetContainer.css('min-height', '0px');
    if (changeFocus) {
      this.elements.$expandButton.trigger('focus');
    }
  }
  triggerClickOnEnterSpace(event) {
    const ENTER_KEY = 13,
      SPACE_KEY = 32;
    if (ENTER_KEY === event.keyCode || SPACE_KEY === event.keyCode) {
      event.currentTarget.click();
      event.stopPropagation();
    }
  }
  onInit(...args) {
    super.onInit(...args);
    this.viewportItems = {};
    this.$activeItems = [];
    this.$activeLists = [];
    jQuery(() => this.run());
  }
  onListItemClick(event) {
    this.itemClicked = true;

    // Fallback for browsers that don't support scrollend event
    const scrollEndFallbackTimer = setTimeout(() => {
      this.itemClicked = false;
      this.updateActiveItemFromViewport();
    }, 2000);
    window.addEventListener('scrollend', () => {
      this.itemClicked = false;
      clearTimeout(scrollEndFallbackTimer);
      this.updateActiveItemFromViewport();
    }, {
      once: true
    });
    const $clickedItem = jQuery(event.target),
      $list = $clickedItem.parent().next(),
      collapseNestedList = this.getElementSettings('collapse_subitems');
    let listIsActive;
    if (collapseNestedList && $clickedItem.hasClass(this.getSettings('classes.firstLevelListItem'))) {
      if ($list.is(':visible')) {
        listIsActive = true;
      }
    }
    this.activateItems([$clickedItem]);
    if (collapseNestedList && listIsActive) {
      $list.slideUp();
    }
  }
}
exports["default"] = TOCHandler;

/***/ }

}]);
//# sourceMappingURL=table-of-contents.eb03464c4c4ef53e85da.bundle.js.map
/*! pro-elements - v3.21.0 - 20-05-2024 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["gallery"],{

/***/ "../modules/gallery/assets/js/frontend/handler.js":
/*!********************************************************!*\
  !*** ../modules/gallery/assets/js/frontend/handler.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class galleryHandler extends elementorModules.frontend.handlers.Base {
  getDefaultSettings() {
    return {
      selectors: {
        container: '.elementor-gallery__container',
        galleryTitles: '.elementor-gallery-title',
        galleryImages: '.e-gallery-image',
        galleryItemOverlay: '.elementor-gallery-item__overlay',
        galleryItemContent: '.elementor-gallery-item__content'
      },
      classes: {
        activeTitle: 'elementor-item-active'
      }
    };
  }
  getDefaultElements() {
    const {
        selectors
      } = this.getSettings(),
      elements = {
        $container: this.$element.find(selectors.container),
        $titles: this.$element.find(selectors.galleryTitles)
      };
    elements.$items = elements.$container.children();
    elements.$images = elements.$items.children(selectors.galleryImages);
    elements.$itemsOverlay = elements.$items.children(selectors.galleryItemOverlay);
    elements.$itemsContent = elements.$items.children(selectors.galleryItemContent);
    elements.$itemsContentElements = elements.$itemsContent.children();
    return elements;
  }
  getGallerySettings() {
    const settings = this.getElementSettings(),
      activeBreakpoints = elementorFrontend.config.responsive.activeBreakpoints,
      activeBreakpointsKeys = Object.keys(activeBreakpoints),
      breakPointSettings = {},
      desktopIdealRowHeight = elementorFrontend.getDeviceSetting('desktop', settings, 'ideal_row_height');
    activeBreakpointsKeys.forEach(breakpoint => {
      // The Gallery widget currently does not support widescreen.
      if ('widescreen' !== breakpoint) {
        const idealRowHeight = elementorFrontend.getDeviceSetting(breakpoint, settings, 'ideal_row_height');
        breakPointSettings[activeBreakpoints[breakpoint].value] = {
          horizontalGap: elementorFrontend.getDeviceSetting(breakpoint, settings, 'gap').size,
          verticalGap: elementorFrontend.getDeviceSetting(breakpoint, settings, 'gap').size,
          columns: elementorFrontend.getDeviceSetting(breakpoint, settings, 'columns'),
          idealRowHeight: idealRowHeight?.size
        };
      }
    });
    return {
      type: settings.gallery_layout,
      idealRowHeight: desktopIdealRowHeight?.size,
      container: this.elements.$container,
      columns: settings.columns,
      aspectRatio: settings.aspect_ratio,
      lastRow: 'normal',
      horizontalGap: elementorFrontend.getDeviceSetting('desktop', settings, 'gap').size,
      verticalGap: elementorFrontend.getDeviceSetting('desktop', settings, 'gap').size,
      animationDuration: settings.content_animation_duration,
      breakpoints: breakPointSettings,
      rtl: elementorFrontend.config.is_rtl,
      lazyLoad: 'yes' === settings.lazyload
    };
  }
  initGallery() {
    this.gallery = new EGallery(this.getGallerySettings());
    this.toggleAllAnimationsClasses();
  }
  removeAnimationClasses($element) {
    $element.removeClass((index, className) => (className.match(/elementor-animated-item-\S+/g) || []).join(' '));
  }
  toggleOverlayHoverAnimation() {
    this.removeAnimationClasses(this.elements.$itemsOverlay);
    const hoverAnimation = this.getElementSettings('background_overlay_hover_animation');
    if (hoverAnimation) {
      this.elements.$itemsOverlay.addClass('elementor-animated-item--' + hoverAnimation);
    }
  }
  toggleOverlayContentAnimation() {
    this.removeAnimationClasses(this.elements.$itemsContentElements);
    const contentHoverAnimation = this.getElementSettings('content_hover_animation');
    if (contentHoverAnimation) {
      this.elements.$itemsContentElements.addClass('elementor-animated-item--' + contentHoverAnimation);
    }
  }
  toggleOverlayContentSequencedAnimation() {
    this.elements.$itemsContent.toggleClass('elementor-gallery--sequenced-animation', 'yes' === this.getElementSettings('content_sequenced_animation'));
  }
  toggleImageHoverAnimation() {
    const imageHoverAnimation = this.getElementSettings('image_hover_animation');
    this.removeAnimationClasses(this.elements.$images);
    if (imageHoverAnimation) {
      this.elements.$images.addClass('elementor-animated-item--' + imageHoverAnimation);
    }
  }
  toggleAllAnimationsClasses() {
    const elementSettings = this.getElementSettings(),
      animation = elementSettings.background_overlay_hover_animation || elementSettings.content_hover_animation || elementSettings.image_hover_animation;
    this.elements.$items.toggleClass('elementor-animated-content', !!animation);
    this.toggleImageHoverAnimation();
    this.toggleOverlayHoverAnimation();
    this.toggleOverlayContentAnimation();
    this.toggleOverlayContentSequencedAnimation();
  }
  toggleAnimationClasses(settingKey) {
    if ('content_sequenced_animation' === settingKey) {
      this.toggleOverlayContentSequencedAnimation();
    }
    if ('background_overlay_hover_animation' === settingKey) {
      this.toggleOverlayHoverAnimation();
    }
    if ('content_hover_animation' === settingKey) {
      this.toggleOverlayContentAnimation();
    }
    if ('image_hover_animation' === settingKey) {
      this.toggleImageHoverAnimation();
    }
  }
  setGalleryTags(id) {
    this.gallery.setSettings('tags', 'all' === id ? [] : ['' + id]);
  }
  bindEvents() {
    this.elements.$titles.on('click', this.galleriesNavigationListener.bind(this)).on('keyup', event => {
      const ENTER_KEY = 13,
        SPACE_KEY = 32;
      if (ENTER_KEY === event.keyCode || SPACE_KEY === event.keyCode) {
        event.currentTarget.click();
      }
    });
  }
  galleriesNavigationListener(event) {
    const classes = this.getSettings('classes'),
      clickedElement = jQuery(event.target);

    // Make sure no other gallery title has an active class
    this.elements.$titles.removeClass(classes.activeTitle);

    // Give the gallery being activated the active class
    clickedElement.addClass(classes.activeTitle);
    this.setGalleryTags(clickedElement.data('gallery-index'));
    const updateLightboxGroup = () => this.setLightboxGalleryIndex(clickedElement.data('gallery-index'));

    // Wait for the gallery to filter before grouping items for the Light-box
    setTimeout(updateLightboxGroup, 1000);
  }
  setLightboxGalleryIndex() {
    let index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';
    if ('all' === index) {
      return this.elements.$items.attr('data-elementor-lightbox-slideshow', 'all_' + this.getID());
    }
    this.elements.$items.not('.e-gallery-item--hidden').attr('data-elementor-lightbox-slideshow', index + '_' + this.getID());
  }
  onInit() {
    super.onInit(...arguments);
    if (elementorFrontend.isEditMode() && 1 <= this.$element.find('.elementor-widget-empty-icon').length) {
      this.$element.addClass('elementor-widget-empty');
    }
    if (!this.elements.$container.length) {
      return;
    }
    this.initGallery();
    this.elements.$titles.first().trigger('click');
  }
  getSettingsDictionary() {
    if (this.settingsDictionary) {
      return this.settingsDictionary;
    }
    const activeBreakpoints = elementorFrontend.config.responsive.activeBreakpoints,
      activeBreakpointsKeys = Object.keys(activeBreakpoints);
    const settingsDictionary = {
      columns: ['columns'],
      gap: ['horizontalGap', 'verticalGap'],
      ideal_row_height: ['idealRowHeight']
    };
    activeBreakpointsKeys.forEach(breakpoint => {
      // The Gallery widget currently does not support widescreen.
      if ('widescreen' === breakpoint) {
        return;
      }
      settingsDictionary['columns_' + breakpoint] = ['breakpoints.' + activeBreakpoints[breakpoint].value + '.columns'];
      settingsDictionary['gap_' + breakpoint] = ['breakpoints.' + activeBreakpoints[breakpoint].value + '.horizontalGap', 'breakpoints.' + activeBreakpoints[breakpoint].value + '.verticalGap'];
      settingsDictionary['ideal_row_height_' + breakpoint] = ['breakpoints.' + activeBreakpoints[breakpoint].value + '.idealRowHeight'];
    });
    settingsDictionary.aspect_ratio = ['aspectRatio'];
    this.settingsDictionary = settingsDictionary;
    return this.settingsDictionary;
  }
  onElementChange(settingKey) {
    if (-1 !== ['background_overlay_hover_animation', 'content_hover_animation', 'image_hover_animation', 'content_sequenced_animation'].indexOf(settingKey)) {
      this.toggleAnimationClasses(settingKey);
      return;
    }
    const settingsDictionary = this.getSettingsDictionary();
    const settingsToUpdate = settingsDictionary[settingKey];
    if (settingsToUpdate) {
      const gallerySettings = this.getGallerySettings();
      settingsToUpdate.forEach(settingToUpdate => {
        this.gallery.setSettings(settingToUpdate, this.getItems(gallerySettings, settingToUpdate));
      });
    }
  }
  onDestroy() {
    super.onDestroy();
    if (this.gallery) {
      this.gallery.destroy();
    }
  }
}
exports["default"] = galleryHandler;

/***/ })

}]);
//# sourceMappingURL=gallery.805130d33e18cb04635f.bundle.js.map
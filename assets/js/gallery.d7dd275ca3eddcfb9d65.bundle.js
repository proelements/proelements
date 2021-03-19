/*! pro-elements - v3.2.0 - 14-03-2021 */
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["gallery"],{

/***/ "../modules/gallery/assets/js/frontend/handler.js":
/*!********************************************************!*\
  !*** ../modules/gallery/assets/js/frontend/handler.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(/*! core-js/modules/es6.regexp.match */ "../node_modules/core-js/modules/es6.regexp.match.js");

__webpack_require__(/*! core-js/modules/es6.array.find */ "../node_modules/core-js/modules/es6.array.find.js");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _get3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/get */ "../node_modules/@babel/runtime-corejs2/helpers/get.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var galleryHandler = /*#__PURE__*/function (_elementorModules$fro) {
  (0, _inherits2.default)(galleryHandler, _elementorModules$fro);

  var _super = (0, _createSuper2.default)(galleryHandler);

  function galleryHandler() {
    (0, _classCallCheck2.default)(this, galleryHandler);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(galleryHandler, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
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
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var _this$getSettings = this.getSettings(),
          selectors = _this$getSettings.selectors,
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
  }, {
    key: "getGallerySettings",
    value: function getGallerySettings() {
      var settings = this.getElementSettings(),
          breakpoints = elementorFrontend.config.breakpoints,
          breakPointSettings = {};
      breakPointSettings[breakpoints.lg - 1] = {
        horizontalGap: elementorFrontend.getDeviceSetting('tablet', settings, 'gap').size,
        verticalGap: elementorFrontend.getDeviceSetting('tablet', settings, 'gap').size,
        columns: elementorFrontend.getDeviceSetting('tablet', settings, 'columns')
      };
      breakPointSettings[breakpoints.md - 1] = {
        horizontalGap: elementorFrontend.getDeviceSetting('mobile', settings, 'gap').size,
        verticalGap: elementorFrontend.getDeviceSetting('mobile', settings, 'gap').size,
        columns: elementorFrontend.getDeviceSetting('mobile', settings, 'columns')
      };
      var desktopIdealRowHeight = elementorFrontend.getDeviceSetting('desktop', settings, 'ideal_row_height'),
          tabletIdealRowHeight = elementorFrontend.getDeviceSetting('tablet', settings, 'ideal_row_height'),
          mobileIdealRowHeight = elementorFrontend.getDeviceSetting('mobile', settings, 'ideal_row_height');
      breakPointSettings[breakpoints.lg - 1].idealRowHeight = tabletIdealRowHeight && tabletIdealRowHeight.size ? tabletIdealRowHeight.size : null;
      breakPointSettings[breakpoints.md - 1].idealRowHeight = mobileIdealRowHeight && mobileIdealRowHeight.size ? mobileIdealRowHeight.size : null;
      return {
        type: settings.gallery_layout,
        idealRowHeight: desktopIdealRowHeight && desktopIdealRowHeight.size ? desktopIdealRowHeight.size : null,
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
  }, {
    key: "initGallery",
    value: function initGallery() {
      this.gallery = new EGallery(this.getGallerySettings());
      this.toggleAllAnimationsClasses();
    }
  }, {
    key: "removeAnimationClasses",
    value: function removeAnimationClasses($element) {
      $element.removeClass(function (index, className) {
        return (className.match(/elementor-animated-item-\S+/g) || []).join(' ');
      });
    }
  }, {
    key: "toggleOverlayHoverAnimation",
    value: function toggleOverlayHoverAnimation() {
      this.removeAnimationClasses(this.elements.$itemsOverlay);
      var hoverAnimation = this.getElementSettings('background_overlay_hover_animation');

      if (hoverAnimation) {
        this.elements.$itemsOverlay.addClass('elementor-animated-item--' + hoverAnimation);
      }
    }
  }, {
    key: "toggleOverlayContentAnimation",
    value: function toggleOverlayContentAnimation() {
      this.removeAnimationClasses(this.elements.$itemsContentElements);
      var contentHoverAnimation = this.getElementSettings('content_hover_animation');

      if (contentHoverAnimation) {
        this.elements.$itemsContentElements.addClass('elementor-animated-item--' + contentHoverAnimation);
      }
    }
  }, {
    key: "toggleOverlayContentSequencedAnimation",
    value: function toggleOverlayContentSequencedAnimation() {
      this.elements.$itemsContent.toggleClass('elementor-gallery--sequenced-animation', 'yes' === this.getElementSettings('content_sequenced_animation'));
    }
  }, {
    key: "toggleImageHoverAnimation",
    value: function toggleImageHoverAnimation() {
      var imageHoverAnimation = this.getElementSettings('image_hover_animation');
      this.removeAnimationClasses(this.elements.$images);

      if (imageHoverAnimation) {
        this.elements.$images.addClass('elementor-animated-item--' + imageHoverAnimation);
      }
    }
  }, {
    key: "toggleAllAnimationsClasses",
    value: function toggleAllAnimationsClasses() {
      var elementSettings = this.getElementSettings(),
          animation = elementSettings.background_overlay_hover_animation || elementSettings.content_hover_animation || elementSettings.image_hover_animation;
      this.elements.$items.toggleClass('elementor-animated-content', !!animation);
      this.toggleImageHoverAnimation();
      this.toggleOverlayHoverAnimation();
      this.toggleOverlayContentAnimation();
      this.toggleOverlayContentSequencedAnimation();
    }
  }, {
    key: "toggleAnimationClasses",
    value: function toggleAnimationClasses(settingKey) {
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
  }, {
    key: "setGalleryTags",
    value: function setGalleryTags(id) {
      this.gallery.setSettings('tags', 'all' === id ? [] : ['' + id]);
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      this.elements.$titles.on('click', this.galleriesNavigationListener.bind(this));
    }
  }, {
    key: "galleriesNavigationListener",
    value: function galleriesNavigationListener(event) {
      var _this = this;

      var classes = this.getSettings('classes'),
          clickedElement = jQuery(event.target); // Make sure no other gallery title has an active class

      this.elements.$titles.removeClass(classes.activeTitle); // Give the gallery being activated the active class

      clickedElement.addClass(classes.activeTitle);
      this.setGalleryTags(clickedElement.data('gallery-index'));

      var updateLightboxGroup = function updateLightboxGroup() {
        return _this.setLightboxGalleryIndex(clickedElement.data('gallery-index'));
      }; // Wait for the gallery to filter before grouping items for the Light-box


      setTimeout(updateLightboxGroup, 1000);
    }
  }, {
    key: "setLightboxGalleryIndex",
    value: function setLightboxGalleryIndex() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';

      if ('all' === index) {
        return this.elements.$items.attr('data-elementor-lightbox-slideshow', 'all_' + this.getID());
      }

      this.elements.$items.not('.e-gallery-item--hidden').attr('data-elementor-lightbox-slideshow', index + '_' + this.getID());
    }
  }, {
    key: "onInit",
    value: function onInit() {
      var _get2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_get2 = (0, _get3.default)((0, _getPrototypeOf2.default)(galleryHandler.prototype), "onInit", this)).call.apply(_get2, [this].concat(args));

      if (elementorFrontend.isEditMode() && 1 <= this.$element.find('.elementor-widget-empty-icon').length) {
        this.$element.addClass('elementor-widget-empty');
      }

      if (!this.elements.$container.length) {
        return;
      }

      this.initGallery();
      this.elements.$titles.first().trigger('click');
    }
  }, {
    key: "onElementChange",
    value: function onElementChange(settingKey) {
      var _this2 = this;

      if (-1 !== ['background_overlay_hover_animation', 'content_hover_animation', 'image_hover_animation', 'content_sequenced_animation'].indexOf(settingKey)) {
        this.toggleAnimationClasses(settingKey);
        return;
      }

      var elementorBreakpoints = elementorFrontend.config.breakpoints;
      var settingsDictionary = {
        columns: ['columns'],
        columns_tablet: ['breakpoints.' + (elementorBreakpoints.lg - 1) + '.columns'],
        columns_mobile: ['breakpoints.' + (elementorBreakpoints.md - 1) + '.columns'],
        gap: ['horizontalGap', 'verticalGap'],
        gap_tablet: ['breakpoints.' + (elementorBreakpoints.lg - 1) + '.horizontalGap', 'breakpoints.' + (elementorBreakpoints.lg - 1) + '.verticalGap'],
        gap_mobile: ['breakpoints.' + (elementorBreakpoints.md - 1) + '.horizontalGap', 'breakpoints.' + (elementorBreakpoints.md - 1) + '.verticalGap'],
        aspect_ratio: ['aspectRatio'],
        ideal_row_height: ['idealRowHeight'],
        ideal_row_height_tablet: ['breakpoints.' + (elementorBreakpoints.lg - 1) + '.idealRowHeight'],
        ideal_row_height_mobile: ['breakpoints.' + (elementorBreakpoints.md - 1) + '.idealRowHeight']
      };
      var settingsToUpdate = settingsDictionary[settingKey];

      if (settingsToUpdate) {
        var gallerySettings = this.getGallerySettings();
        settingsToUpdate.forEach(function (settingToUpdate) {
          _this2.gallery.setSettings(settingToUpdate, _this2.getItems(gallerySettings, settingToUpdate));
        });
      }
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      (0, _get3.default)((0, _getPrototypeOf2.default)(galleryHandler.prototype), "onDestroy", this).call(this);

      if (this.gallery) {
        this.gallery.destroy();
      }
    }
  }]);
  return galleryHandler;
}(elementorModules.frontend.handlers.Base);

exports.default = galleryHandler;

/***/ })

}]);
//# sourceMappingURL=gallery.d7dd275ca3eddcfb9d65.bundle.js.map
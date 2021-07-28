/*! pro-elements - v3.3.1 - 20-06-2021 */
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["video-playlist"],{

/***/ "../node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "../node_modules/core-js/library/fn/array/from.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "../node_modules/core-js/library/fn/json/stringify.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "../node_modules/core-js/library/fn/object/define-properties.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!*********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "../node_modules/core-js/library/fn/object/get-own-property-descriptors.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "../node_modules/core-js/library/fn/object/get-own-property-symbols.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "../node_modules/core-js/library/fn/parse-int.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "../node_modules/core-js/library/fn/promise.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/objectSpread2.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/objectSpread2.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$getOwnPropertySymbols = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$getOwnPropertyDescriptors = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");

var _Object$defineProperties = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var defineProperty = __webpack_require__(/*! ./defineProperty.js */ "../node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) {
  var keys = _Object$keys(object);

  if (_Object$getOwnPropertySymbols) {
    var symbols = _Object$getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return _Object$getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        defineProperty(target, key, source[key]);
      });
    } else if (_Object$getOwnPropertyDescriptors) {
      _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

module.exports = _objectSpread2;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "../modules/video-playlist/assets/js/frontend/base-tabs.js":
/*!*****************************************************************!*\
  !*** ../modules/video-playlist/assets/js/frontend/base-tabs.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(/*! core-js/modules/es6.array.find.js */ "../node_modules/core-js/modules/es6.array.find.js");

__webpack_require__(/*! core-js/modules/es6.array.filter.js */ "../node_modules/core-js/modules/es6.array.filter.js");

__webpack_require__(/*! core-js/modules/es7.array.includes.js */ "../node_modules/core-js/modules/es7.array.includes.js");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _get3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/get */ "../node_modules/@babel/runtime-corejs2/helpers/get.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

// Copied from the core, original path: elementor/assets/dev/js/frontend/handlers/base-tabs.js.
var baseTabs = /*#__PURE__*/function (_elementorModules$fro) {
  (0, _inherits2.default)(baseTabs, _elementorModules$fro);

  var _super = (0, _createSuper2.default)(baseTabs);

  function baseTabs() {
    (0, _classCallCheck2.default)(this, baseTabs);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(baseTabs, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        selectors: {
          tablist: '[role="tablist"]',
          tabTitle: '.e-tab-title',
          tabContent: '.e-tab-content'
        },
        classes: {
          active: 'e-active'
        },
        showTabFn: 'show',
        hideTabFn: 'hide',
        toggleSelf: true,
        hidePrevious: true,
        autoExpand: true,
        keyDirection: {
          ArrowLeft: elementorFrontendConfig.is_rtl ? 1 : -1,
          ArrowUp: -1,
          ArrowRight: elementorFrontendConfig.is_rtl ? -1 : 1,
          ArrowDown: 1
        }
      };
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var selectors = this.getSettings('selectors');
      return {
        $tabTitles: this.findElement(selectors.tabTitle),
        $tabContents: this.findElement(selectors.tabContent)
      };
    }
  }, {
    key: "activateDefaultTab",
    value: function activateDefaultTab(videoId) {
      var settings = this.getSettings();

      if (!settings.autoExpand || 'editor' === settings.autoExpand && !this.isEdit) {
        return;
      }

      var defaultActiveTab = this.getEditSettings('activeItemIndex') || videoId || 1,
          originalToggleMethods = {
        showTabFn: settings.showTabFn,
        hideTabFn: settings.hideTabFn
      }; // Toggle tabs without animation to avoid jumping.

      this.setSettings({
        showTabFn: 'show',
        hideTabFn: 'hide'
      });
      this.changeActiveTab(defaultActiveTab); // Return back original toggle effects.

      this.setSettings(originalToggleMethods);
    }
  }, {
    key: "handleKeyboardNavigation",
    value: function handleKeyboardNavigation(event) {
      var tab = event.currentTarget,
          $tabList = jQuery(tab.closest(this.getSettings('selectors').tablist)),
          $tabs = $tabList.find(this.getSettings('selectors').tabTitle),
          isVertical = 'vertical' === $tabList.attr('aria-orientation');

      switch (event.key) {
        case 'ArrowLeft':
        case 'ArrowRight':
          if (isVertical) {
            return;
          }

          break;

        case 'ArrowUp':
        case 'ArrowDown':
          if (!isVertical) {
            return;
          }

          event.preventDefault();
          break;

        case 'Home':
          event.preventDefault();
          $tabs.first().trigger('focus');
          return;

        case 'End':
          event.preventDefault();
          $tabs.last().trigger('focus');
          return;

        default:
          return;
      }

      var tabIndex = tab.getAttribute('data-tab') - 1,
          direction = this.getSettings('keyDirection')[event.key],
          nextTab = $tabs[tabIndex + direction];

      if (nextTab) {
        nextTab.focus();
      } else if (-1 === tabIndex + direction) {
        $tabs.last().trigger('focus');
      } else {
        $tabs.first().trigger('focus');
      }
    }
  }, {
    key: "deactivateActiveTab",
    value: function deactivateActiveTab(tabIndex) {
      var settings = this.getSettings(),
          activeClass = settings.classes.active,
          activeFilter = tabIndex ? '[data-tab="' + tabIndex + '"]' : '.' + activeClass,
          $activeTitle = this.elements.$tabTitles.filter(activeFilter),
          $activeContent = this.elements.$tabContents.filter(activeFilter);
      $activeTitle.add($activeContent).removeClass(activeClass);
      $activeTitle.attr({
        tabindex: '-1',
        'aria-selected': 'false'
      });
      $activeContent[settings.hideTabFn]();
      $activeContent.attr('hidden', 'hidden');
    }
  }, {
    key: "activateTab",
    value: function activateTab(tabIndex) {
      var settings = this.getSettings(),
          activeClass = settings.classes.active,
          $requestedTitle = this.elements.$tabTitles.filter('[data-tab="' + tabIndex + '"]'),
          $requestedContent = this.elements.$tabContents.filter('[data-tab="' + tabIndex + '"]'),
          animationDuration = 'show' === settings.showTabFn ? 0 : 400;
      $requestedTitle.add($requestedContent).addClass(activeClass);
      $requestedTitle.attr({
        tabindex: '0',
        'aria-selected': 'true'
      });
      $requestedContent[settings.showTabFn](animationDuration, function () {
        return elementorFrontend.elements.$window.trigger('resize');
      });
      $requestedContent.removeAttr('hidden');
    }
  }, {
    key: "isActiveTab",
    value: function isActiveTab(tabIndex) {
      return this.elements.$tabTitles.filter('[data-tab="' + tabIndex + '"]').hasClass(this.getSettings('classes.active'));
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      this.elements.$tabTitles.on({
        keydown: function keydown(event) {
          // Support for old markup that includes an `<a>` tag in the tab.
          if (jQuery(event.target).is('a') && "Enter" === event.key) {
            event.preventDefault();
          } // We listen to keydowon event for these keys in order to prevent undesired page scrolling.


          if (['End', 'Home', 'ArrowUp', 'ArrowDown'].includes(event.key)) {
            _this.handleKeyboardNavigation(event);
          }
        },
        keyup: function keyup(event) {
          switch (event.key) {
            case 'ArrowLeft':
            case 'ArrowRight':
              _this.handleKeyboardNavigation(event);

              break;

            case 'Enter':
            case 'Space':
              event.preventDefault();

              _this.changeActiveTab(event.currentTarget.getAttribute('data-tab'));

              break;
          }
        },
        click: function click(event) {
          event.preventDefault();

          _this.changeActiveTab(event.currentTarget.getAttribute('data-tab'));
        }
      });
    }
  }, {
    key: "onInit",
    value: function onInit() {
      var _get2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_get2 = (0, _get3.default)((0, _getPrototypeOf2.default)(baseTabs.prototype), "onInit", this)).call.apply(_get2, [this].concat(args)); //this.activateDefaultTab();

    }
  }, {
    key: "onEditSettingsChange",
    value: function onEditSettingsChange(propertyName) {
      if ('activeItemIndex' === propertyName) {
        this.activateDefaultTab();
      }
    }
  }, {
    key: "changeActiveTab",
    value: function changeActiveTab(tabIndex) {
      var isActiveTab = this.isActiveTab(tabIndex),
          settings = this.getSettings();

      if ((settings.toggleSelf || !isActiveTab) && settings.hidePrevious) {
        this.deactivateActiveTab();
      }

      if (!settings.hidePrevious && isActiveTab) {
        this.deactivateActiveTab(tabIndex);
      }

      if (!isActiveTab) {
        this.activateTab(tabIndex);
      }
    }
  }]);
  return baseTabs;
}(elementorModules.frontend.handlers.Base);

exports.default = baseTabs;

/***/ }),

/***/ "../modules/video-playlist/assets/js/frontend/event-trigger.js":
/*!*********************************************************************!*\
  !*** ../modules/video-playlist/assets/js/frontend/event-trigger.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = triggerEvent;

__webpack_require__(/*! core-js/modules/es6.array.find.js */ "../node_modules/core-js/modules/es6.array.find.js");

__webpack_require__(/*! core-js/modules/es6.array.filter.js */ "../node_modules/core-js/modules/es6.array.filter.js");

var _playlistEvent = _interopRequireDefault(__webpack_require__(/*! ./playlist-event */ "../modules/video-playlist/assets/js/frontend/playlist-event.js"));

// Functions to get objects for the playlist event object.
function getEventTabsObject(widgetObject) {
  var currentInnerTabsTitleElements = widgetObject.elements.$innerTabs.filter('.e-active').find('.e-inner-tabs-wrapper .e-inner-tab-title');

  if (currentInnerTabsTitleElements.length) {
    var activeInnerTabTitleElement = currentInnerTabsTitleElements.filter('.e-inner-tab-active');
    return {
      name: activeInnerTabTitleElement.text().trim(),
      index: activeInnerTabTitleElement.index() + 1
    };
  }

  return {
    name: 'none',
    index: 'none'
  };
}

function getEventPlaylistObject(widgetObject) {
  return {
    name: widgetObject.getElementSettings('playlist_title'),
    currentItem: widgetObject.currentPlaylistItemIndex,
    amount: widgetObject.playlistItemsArray.filter(function (video) {
      return video.videoType !== 'section';
    }).length
  };
}

function getEventVideoObject(widgetObject) {
  var currentVideo = widgetObject.playlistItemsArray[widgetObject.currentPlaylistItemIndex - 1];
  return {
    provider: currentVideo.videoType,
    url: currentVideo.videoUrl,
    title: currentVideo.videoTitle,
    duration: currentVideo.videoDuration
  };
}

function getEventEventObject(widgetObject, eventType, eventTrigger) {
  var currentVideo = widgetObject.playlistItemsArray[widgetObject.currentPlaylistItemIndex - 1];
  return {
    type: eventType,
    time: currentVideo.playerInstance.getCurrentTime(),
    element: widgetObject.$element,
    trigger: eventTrigger,
    watchCount: currentVideo.playerInstance.watchCount
  };
}

function triggerEvent(widgetObject, eventType, eventTrigger) {
  var currentEvent = new _playlistEvent.default({
    event: getEventEventObject(widgetObject, eventType, eventTrigger),
    tab: getEventTabsObject(widgetObject),
    playlist: getEventPlaylistObject(widgetObject),
    video: getEventVideoObject(widgetObject)
  });
  jQuery('body').trigger('elementor-video-playList', currentEvent);
}

/***/ }),

/***/ "../modules/video-playlist/assets/js/frontend/handler.js":
/*!***************************************************************!*\
  !*** ../modules/video-playlist/assets/js/frontend/handler.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _parseInt2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "../node_modules/@babel/runtime-corejs2/core-js/parse-int.js"));

__webpack_require__(/*! core-js/modules/es6.array.find.js */ "../node_modules/core-js/modules/es6.array.find.js");

__webpack_require__(/*! core-js/modules/es6.array.filter.js */ "../node_modules/core-js/modules/es6.array.filter.js");

__webpack_require__(/*! core-js/modules/es6.string.includes.js */ "../node_modules/core-js/modules/es6.string.includes.js");

__webpack_require__(/*! core-js/modules/es7.array.includes.js */ "../node_modules/core-js/modules/es7.array.includes.js");

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread2 */ "../node_modules/@babel/runtime-corejs2/helpers/objectSpread2.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _get3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/get */ "../node_modules/@babel/runtime-corejs2/helpers/get.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _baseTabs = _interopRequireDefault(__webpack_require__(/*! ./base-tabs */ "../modules/video-playlist/assets/js/frontend/base-tabs.js"));

var _playerYoutube = _interopRequireDefault(__webpack_require__(/*! ./player-youtube */ "../modules/video-playlist/assets/js/frontend/player-youtube.js"));

var _playerHosted = _interopRequireDefault(__webpack_require__(/*! ./player-hosted */ "../modules/video-playlist/assets/js/frontend/player-hosted.js"));

var _scrollUtils = __webpack_require__(/*! ./scroll-utils */ "../modules/video-playlist/assets/js/frontend/scroll-utils.js");

var _innerTabs = __webpack_require__(/*! ./inner-tabs */ "../modules/video-playlist/assets/js/frontend/inner-tabs.js");

var _urlParams = __webpack_require__(/*! ./url-params */ "../modules/video-playlist/assets/js/frontend/url-params.js");

var _eventTrigger = _interopRequireDefault(__webpack_require__(/*! ./event-trigger */ "../modules/video-playlist/assets/js/frontend/event-trigger.js"));

var VideoPlaylistHandler = /*#__PURE__*/function (_TabsModule) {
  (0, _inherits2.default)(VideoPlaylistHandler, _TabsModule);

  var _super = (0, _createSuper2.default)(VideoPlaylistHandler);

  function VideoPlaylistHandler() {
    (0, _classCallCheck2.default)(this, VideoPlaylistHandler);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(VideoPlaylistHandler, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      var defaultSettings = (0, _get3.default)((0, _getPrototypeOf2.default)(VideoPlaylistHandler.prototype), "getDefaultSettings", this).call(this),
          selectors = {
        tabsWrapper: '.e-tabs-items-wrapper',
        tabsItems: '.e-tabs-items',
        toggleVideosDisplayButton: '.e-tabs-toggle-videos-display-button',
        videos: '.e-tabs-content-wrapper .e-tab-content',
        innerTabs: '.e-tabs-inner-tabs .e-tab-content',
        imageOverlay: '.elementor-custom-embed-image-overlay'
      };
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, defaultSettings), {}, {
        selectors: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, defaultSettings.selectors), selectors)
      });
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var elements = (0, _get3.default)((0, _getPrototypeOf2.default)(VideoPlaylistHandler.prototype), "getDefaultElements", this).call(this),
          selectors = this.getSettings('selectors');
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, elements), {}, {
        $tabsWrapper: this.findElement(selectors.tabsWrapper),
        $tabsItems: this.findElement(selectors.tabsItems),
        $toggleVideosDisplayButton: this.findElement(selectors.toggleVideosDisplayButton),
        $videos: this.findElement(selectors.videos),
        $innerTabs: this.findElement(selectors.innerTabs),
        $imageOverlay: this.findElement(selectors.imageOverlay)
      });
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      (0, _get3.default)((0, _getPrototypeOf2.default)(VideoPlaylistHandler.prototype), "bindEvents", this).call(this); // TODO: Remove - When elements-handler-manager will have a method for receiving the instance.

      if (this.isEdit) {
        elementor.channels.editor.on('elementorPlaylistWidget:fetchData', function (e) {
          _this.getCurrentPlayerSelected().setVideoProviderData();

          e.currentItem = _this.getCurrentItemSelected();
          elementor.channels.editor.trigger('elementorPlaylistWidget:setData', e);
        });
      } // Handle the click on the image overlay.


      this.elements.$imageOverlay.on({
        click: function click(e) {
          // Remove image overlay if the user clicked it and play the video in case it is not playing.
          e.currentTarget.remove();

          _this.getCurrentPlayerSelected().play();
        }
      }); // Handle the inner tab functionality.

      this.elements.$innerTabs.on({
        click: function click(event) {
          (0, _innerTabs.handleInnerTabs)(event, _this);
        }
      }); // Handle scroll on the right panel to make the "shadows" effect when the panel is scrollable.

      this.elements.$tabsItems.on({
        scroll: function scroll(event) {
          (0, _scrollUtils.handleVideosPanelScroll)(_this.elements, event);
        }
      }); // Handle the closing/opening right panel in mobile mode.

      this.elements.$toggleVideosDisplayButton.on({
        click: function click(event) {
          jQuery(event.target).toggleClass('rotate-up');
          jQuery(event.target).toggleClass('rotate-down');

          _this.elements.$tabsWrapper.slideToggle('slow');
        }
      });
    }
  }, {
    key: "onInit",
    value: function onInit() {
      var _get2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_get2 = (0, _get3.default)((0, _getPrototypeOf2.default)(VideoPlaylistHandler.prototype), "onInit", this)).call.apply(_get2, [this].concat(args));

      this.playlistId = this.getID(); // Handle watched videos.

      this.storageKey = 'watched_videos_' + this.getID();
      var storageObject = elementorFrontend.storage.get(this.storageKey);

      if (storageObject) {
        this.watchedVideosArray = JSON.parse(storageObject);
      } else {
        this.watchedVideosArray = [];
      }

      this.watchedIndication = this.getElementSettings('show_watched_indication'); // Handle indication for scrolling in the right panel.

      (0, _scrollUtils.handleVideosPanelScroll)(this.elements); // Handle the video player functionality, includes "on load" and "next up".

      this.isAutoplayOnLoad = 'yes' === this.getElementSettings('autoplay_on_load');
      this.isAutoplayNextUp = 'yes' === this.getElementSettings('autoplay_next');
      this.isFirstVideoActivated = true;
      this.createPlaylistItems(); // Handle display for show more/less button.

      this.isCollapsible = this.getElementSettings('inner_tab_is_content_collapsible');
      this.innerTabsHeightLimit = this.getElementSettings('inner_tab_collapsible_height'); // Keep track of the element that supposed to be paused since the user selected other video.

      this.currentPlayingPlaylistItemIndex = 1; // Handle the first initial activation of the video in the playlist.

      this.activateInitialVideo(); // Handle Inner Tab activation in edit mode.

      this.activateInnerTabInEditMode();
    }
  }, {
    key: "activateInitialVideo",
    value: function activateInitialVideo() {
      this.isPageOnLoad = true;
      var isLazyLoad = !!this.getElementSettings('lazy_load'),
          initialTabIndex = (0, _urlParams.handleURLParams)(this.playlistId, this.playlistItemsArray);
      var isUrlParamsExist = false;

      if (initialTabIndex) {
        this.currentPlaylistItemIndex = initialTabIndex;
        this.currentPlayingPlaylistItemIndex = initialTabIndex;
        isUrlParamsExist = true;
      } else {
        this.currentPlaylistItemIndex = 1;
        this.currentPlayingPlaylistItemIndex = 1;
      }

      this.handleFirstVideoActivation(isLazyLoad, isUrlParamsExist);
    }
    /*
    	The scenarios for playing the first video after page load:
    	- No url parameters and lazy load on - No scrolling and video will load when user scroll the video to view.
    	- No url parameters and lazy load off - No scrolling and video will load instantly.
    	- With url parameters and lazy load on - Scrolling playlist to view and video will load.
    	- With url parameters and lazy load off - Scrolling playlist to view and video will load.
       */

  }, {
    key: "handleFirstVideoActivation",
    value: function handleFirstVideoActivation(isLazyLoad, isUrlParamsExist) {
      var _this2 = this;

      if (!isLazyLoad) {
        this.activateDefaultTab(this.currentPlaylistItemIndex); // No need to use the observer since there are no url parameters

        if (!isUrlParamsExist) {
          return;
        }
      }

      var playlistElement = document.querySelector('.elementor-element-' + this.playlistId + ' .e-tabs-main-area'),
          observer = elementorModules.utils.Scroll.scrollObserver({
        callback: function callback(event) {
          if (event.isInViewport) {
            if (isLazyLoad) {
              _this2.activateDefaultTab(_this2.currentPlaylistItemIndex);
            }

            observer.unobserve(playlistElement);
          } else if (isUrlParamsExist) {
            setTimeout(function () {
              playlistElement.scrollIntoView();

              if (isLazyLoad) {
                _this2.activateDefaultTab(_this2.currentPlaylistItemIndex);
              }

              observer.unobserve(playlistElement);
            }, 500);
          }
        }
      });
      observer.observe(playlistElement);
    }
  }, {
    key: "getCurrentItemSelected",
    value: function getCurrentItemSelected() {
      return this.playlistItemsArray[this.currentPlaylistItemIndex - 1];
    }
  }, {
    key: "getCurrentPlayerSelected",
    value: function getCurrentPlayerSelected() {
      return this.getCurrentItemSelected().playerInstance;
    }
  }, {
    key: "getCurrentPlayerPlaying",
    value: function getCurrentPlayerPlaying() {
      return this.playlistItemsArray[this.currentPlayingPlaylistItemIndex - 1].playerInstance;
    } // Handle video selection.

  }, {
    key: "isVideoShouldBePlayed",
    value: function isVideoShouldBePlayed() {
      // When user select other video, the current video will be paused if is playing.
      if (this.currentPlayingPlaylistItemIndex !== this.currentPlaylistItemIndex) {
        this.getCurrentPlayerPlaying().pause();
        this.currentPlayingPlaylistItemIndex = this.currentPlaylistItemIndex; // When user select the same video, the current video will be paused if is playing.
      } else if (this.getCurrentPlayerPlaying().isVideoPlaying) {
        this.getCurrentPlayerPlaying().pause();
        return false;
      } // When none of the videos are playing, the selected video should be played.


      return true;
    }
  }, {
    key: "activateInnerTabInEditMode",
    value: function activateInnerTabInEditMode() {
      if (this.isEdit && this.getEditSettings('innerActiveIndex')) {
        var innerTabActivated = this.getEditSettings('innerActiveIndex');
        var innerTabs = jQuery(this.elements.$innerTabs.eq(this.currentPlaylistItemIndex - 1).find('.e-inner-tab-title a'));
        innerTabs[innerTabActivated].click();
      }
    } // Handle video creation including event listeners and playing video if needed.

  }, {
    key: "handleVideo",
    value: function handleVideo(playListItem) {
      var _this3 = this;

      // If the video already created (visited once), then just play it if it's not playing already, otherwise pause it.
      if (playListItem.playerInstance) {
        if (this.isVideoShouldBePlayed()) {
          // Remove image overlay if first video item is playing without clicking the image overlay.
          if (1 === this.currentPlaylistItemIndex && this.elements.$imageOverlay) {
            this.elements.$imageOverlay.remove();
          }

          this.playVideoAfterCreation(playListItem);
        }
      } else {
        // If the video is not created yet (first visit), then create the video instance and the event listeners.
        var players = {
          youtube: _playerYoutube.default,
          hosted: _playerHosted.default
        };
        playListItem.playerInstance = new players[playListItem.videoType](playListItem);
        playListItem.playerInstance.create().then(function () {
          if (_this3.isVideoShouldBePlayed()) {
            _this3.playVideoOnCreation(playListItem);
          } // Handle the functionality when video full screen mode changes.


          playListItem.playerInstance.handleFullScreenChange(function (isEnterFullScreenMode) {
            // Trigger event when enter/exit full screen mode.
            (0, _eventTrigger.default)(_this3, isEnterFullScreenMode ? 'videoFullScreen' : 'videoExitFullScreen', 'click');
          }); // Handle the functionality when video play.

          playListItem.playerInstance.handlePlayed(function () {
            var currentPlaylistItem = _this3.getCurrentItemSelected();

            var videoTrigger = 'click';

            if (currentPlaylistItem.isAutoplayOnLoad) {
              videoTrigger = 'onLoad';
              playListItem.isAutoplayOnLoad = false;
            } else if (currentPlaylistItem.isAutoPlayNextUp) {
              videoTrigger = 'nextVideo';
            } // Trigger event when video started.


            (0, _eventTrigger.default)(_this3, currentPlaylistItem.playerInstance.isVideoPausedLocal ? 'videoResume' : 'videoStart', videoTrigger);
          }); // Handle the functionality when video ended.

          playListItem.playerInstance.handleEnded(function () {
            // Trigger event when video ended.
            (0, _eventTrigger.default)(_this3, 'videoEnded', 'click'); // Handle the indication for videos that have been watched and ended.

            if (_this3.watchedIndication) {
              _this3.elements.$tabTitles.filter('.e-active').addClass('watched-video');
            }

            var endedVideoId = _this3.getCurrentItemSelected().dataItemId;

            if (!_this3.watchedVideosArray.includes(endedVideoId) && _this3.watchedIndication) {
              _this3.watchedVideosArray.push(_this3.getCurrentItemSelected().dataItemId);

              elementorFrontend.storage.set(_this3.storageKey, (0, _stringify.default)(_this3.watchedVideosArray));
            } // Handle "next up" functionality.


            if (_this3.isAutoplayNextUp) {
              // If there are more videos in the list, play next video.
              if (_this3.playlistItemsArray.length >= ++_this3.currentPlaylistItemIndex) {
                // Handle the logic for playing next video.
                while ('section' === _this3.getCurrentItemSelected().videoType) {
                  _this3.currentPlaylistItemIndex++; // When last video in the playlist ended, we reset the this.currentPlaylistItemIndex to the last playlist item index.

                  if (_this3.playlistItemsArray.length < _this3.currentPlaylistItemIndex) {
                    _this3.currentPlaylistItemIndex = _this3.playlistItemsArray.length;
                    return;
                  }
                }

                _this3.changeActiveTab(_this3.currentPlaylistItemIndex, true);
              }
            }
          }); // Handle the functionality when video paused.

          playListItem.playerInstance.handlePaused(function () {
            // Trigger event when video paused.
            (0, _eventTrigger.default)(_this3, 'videoPaused', 'click');
          });
        });
      }
    } // Handle the actual playing of the video that already exists (already created before).

  }, {
    key: "playVideoAfterCreation",
    value: function playVideoAfterCreation(playListItem) {
      playListItem.playerInstance.play();
    } // Handle the actual playing of the video when the video is created.

  }, {
    key: "playVideoOnCreation",
    value: function playVideoOnCreation(playListItem) {
      // Play the video according to "on load" and "next up" indications.
      if (this.isAutoplayOnLoad) {
        playListItem.isAutoplayOnLoad = true;
        playListItem.playerInstance.play();
        this.isAutoplayOnLoad = false;
      } else if (!this.isFirstVideoActivated) {
        playListItem.isAutoPlayNextUp = true;
        playListItem.playerInstance.play();
      }

      this.isFirstVideoActivated = false;
    }
  }, {
    key: "createPlaylistItems",
    value: function createPlaylistItems() {
      var _this4 = this;

      this.playlistItemsArray = [];
      this.elements.$videos.each(function (index, tabContent) {
        var playListItem = {};
        var $tabContent = jQuery(tabContent);
        playListItem.videoUrl = $tabContent.attr('data-video-url');
        playListItem.videoType = $tabContent.attr('data-video-type');
        playListItem.videoTitle = $tabContent.attr('data-video-title');
        playListItem.videoDuration = $tabContent.attr('data-video-duration');
        playListItem.tabContent = tabContent;
        playListItem.dataTab = index + 1;
        playListItem.dataItemId = _this4.getElementSettings().tabs[index]._id;

        _this4.playlistItemsArray.push(playListItem);
      }); // When the page loads,the code checks which videos already watched and adding a class accordingly.

      if (this.watchedVideosArray.length > 0 && this.watchedIndication) {
        this.watchedVideosArray.forEach(function (watchedVideoId) {
          var watchedPlaylistItem = _this4.playlistItemsArray.find(function (playlistItem) {
            return playlistItem.dataItemId === watchedVideoId;
          });

          _this4.elements.$tabTitles.filter('[data-tab="' + watchedPlaylistItem.dataTab + '"]').addClass('watched-video');
        });
      }
    }
  }, {
    key: "changeActiveTab",
    value: function changeActiveTab(tabIndex, isVideoSelectedAutomatically) {
      (0, _get3.default)((0, _getPrototypeOf2.default)(VideoPlaylistHandler.prototype), "changeActiveTab", this).call(this, tabIndex);

      if (this.playlistItemsArray[tabIndex - 1] && this.playlistItemsArray[tabIndex - 1].videoType !== 'section') {
        this.currentPlaylistItemIndex = (0, _parseInt2.default)(tabIndex);

        if (isVideoSelectedAutomatically) {
          this.currentPlayingPlaylistItemIndex = this.currentPlaylistItemIndex;
        } // Handle on creation of the video and working with it.


        this.handleVideo(this.getCurrentItemSelected(), isVideoSelectedAutomatically); // Set Video params in url only if its not the first video when page load.

        if (!this.isPageOnLoad) {
          (0, _urlParams.setVideoParams)(this.playlistId, this.playlistItemsArray, this.currentPlaylistItemIndex);
        }

        this.isPageOnLoad = false; // Handle the display for the inner tabs buttons as long there are actually inner tabs.

        if (jQuery(this.elements.$innerTabs.eq(tabIndex - 1)).find('.e-inner-tab-content').length > 0) {
          var innerTabsContent = this.elements.$innerTabs.filter('.e-active').find('.e-inner-tab-content');
          (0, _innerTabs.handleInnerTabsButtonsDisplay)(innerTabsContent.toArray(), this.isCollapsible, this.innerTabsHeightLimit);
        }
      }
    }
  }]);
  return VideoPlaylistHandler;
}(_baseTabs.default);

exports.default = VideoPlaylistHandler;

/***/ }),

/***/ "../modules/video-playlist/assets/js/frontend/inner-tabs.js":
/*!******************************************************************!*\
  !*** ../modules/video-playlist/assets/js/frontend/inner-tabs.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.handleInnerTabs = handleInnerTabs;
exports.handleInnerTabsButtonsDisplay = handleInnerTabsButtonsDisplay;
exports.onTabContentButtonsClick = onTabContentButtonsClick;

__webpack_require__(/*! core-js/modules/es6.array.filter.js */ "../node_modules/core-js/modules/es6.array.filter.js");

__webpack_require__(/*! core-js/modules/es6.array.find.js */ "../node_modules/core-js/modules/es6.array.find.js");

var _from = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "../node_modules/@babel/runtime-corejs2/core-js/array/from.js"));

var _parseInt2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "../node_modules/@babel/runtime-corejs2/core-js/parse-int.js"));

var _eventTrigger = _interopRequireDefault(__webpack_require__(/*! ./event-trigger */ "../modules/video-playlist/assets/js/frontend/event-trigger.js"));

function toggleInnerTabs(event, clickedTab, widgetObject) {
  var activeTabWrapper = event.currentTarget,
      tabTitles = activeTabWrapper.querySelectorAll('.e-inner-tab-title');

  if (clickedTab.hasClass('e-inner-tab-active') || tabTitles.length < 2) {
    return;
  }

  var tabsContents = activeTabWrapper.querySelectorAll('.e-inner-tab-content');
  tabTitles.forEach(function (tabTitle) {
    tabTitle.classList.toggle('e-inner-tab-active');
  });
  tabsContents.forEach(function (tabContent) {
    tabContent.toggleAttribute('hidden');
    tabContent.classList.toggle('e-inner-tab-active');
  });
  handleInnerTabsButtonsDisplay((0, _from.default)(tabsContents), widgetObject.isCollapsible, widgetObject.innerTabsHeightLimit); // Trigger event when tab open.

  (0, _eventTrigger.default)(widgetObject, 'tabOpened', 'click');
}

function handleInnerTabs(event, widgetObject) {
  event.preventDefault(); // Handle click on tab on mobile mode.

  if (event.target.classList.contains('e-tab-mobile-title')) {
    var $clickedTab = jQuery(event.target);
    toggleInnerTabs(event, $clickedTab, widgetObject);
    return;
  } // Handle click on tab on Desktop mode.


  if ('A' === event.target.tagName) {
    var _$clickedTab = jQuery(event.target).parent('.e-inner-tab-title');

    toggleInnerTabs(event, _$clickedTab, widgetObject);
  } // Handle click on show-less buttons in tab content.


  if ('BUTTON' === event.target.tagName) {
    onTabContentButtonsClick(event, widgetObject);
  }
}

function handleInnerTabsButtonsDisplay(tabsContents, isCollapsible, innerTabsHeightLimit) {
  if (!isCollapsible) {
    return;
  }

  var activeInnerTab = tabsContents.filter(function (tabsContent) {
    return tabsContent.classList.contains('e-inner-tab-active');
  }),
      innerTabScrollableHeight = activeInnerTab[0].querySelector('.e-inner-tab-text > div').offsetHeight,
      innerTabsLimitHeight = (0, _parseInt2.default)(innerTabsHeightLimit.size);

  if (innerTabsLimitHeight && innerTabScrollableHeight > innerTabsLimitHeight) {
    activeInnerTab[0].classList.add('show-inner-tab-buttons');
  }
}

function onTabContentButtonsClick(event, widgetObject) {
  var $tabsContent = jQuery(event.currentTarget).find('.e-inner-tab-content'),
      $activeTabContent = $tabsContent.filter('.e-inner-tab-active'),
      buttonsElements = $activeTabContent.find('button');
  buttonsElements.toggleClass('show-button');
  $activeTabContent.toggleClass('show-full-height');
  var eventType = $activeTabContent.hasClass('show-full-height') ? 'tabExpanded' : 'tabCollapsed'; // Trigger event when collapsed/expanded clicked.

  (0, _eventTrigger.default)(widgetObject, eventType, 'click');
}

/***/ }),

/***/ "../modules/video-playlist/assets/js/frontend/player-base.js":
/*!*******************************************************************!*\
  !*** ../modules/video-playlist/assets/js/frontend/player-base.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var PlayerBase = function PlayerBase(playlistItem) {
  (0, _classCallCheck2.default)(this, PlayerBase);
  this.playlistItem = playlistItem;
};

exports.default = PlayerBase;

/***/ }),

/***/ "../modules/video-playlist/assets/js/frontend/player-hosted.js":
/*!*********************************************************************!*\
  !*** ../modules/video-playlist/assets/js/frontend/player-hosted.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(/*! core-js/modules/es6.regexp.split.js */ "../node_modules/core-js/modules/es6.regexp.split.js");

var _promise = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "../node_modules/@babel/runtime-corejs2/core-js/promise.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _playerBase = _interopRequireDefault(__webpack_require__(/*! ./player-base */ "../modules/video-playlist/assets/js/frontend/player-base.js"));

var playerHosted = /*#__PURE__*/function (_PlayerBase) {
  (0, _inherits2.default)(playerHosted, _PlayerBase);

  var _super = (0, _createSuper2.default)(playerHosted);

  function playerHosted(playlistItem) {
    var _this;

    (0, _classCallCheck2.default)(this, playerHosted);
    _this = _super.call(this, playlistItem);
    _this.playerObject = null;
    _this.watchCount = 0;
    _this.isVideoPlaying = false;
    _this.isVideoPausedLocal = false;
    _this.isVideoSeeking = false;
    _this.isVideoEnded = false;
    _this.isReady = false;
    return _this;
  }

  (0, _createClass2.default)(playerHosted, [{
    key: "create",
    value: function create() {
      var _this2 = this;

      var videoPromise = new _promise.default(function (resolve) {
        var video = document.createElement('video');
        video.setAttribute('controls', '');
        var text = document.createTextNode('Sorry, your browser doesn\'t support embedded videos.');
        var source = document.createElement('source');
        source.setAttribute('src', _this2.playlistItem.videoUrl);
        source.setAttribute('type', 'video/' + _this2.playlistItem.videoUrl.split('.').pop());
        video.appendChild(source);
        video.appendChild(text);
        video.muted = true;
        _this2.playerObject = video;

        _this2.playlistItem.tabContent.querySelector('div').replaceWith(_this2.playerObject);

        _this2.playerObject.addEventListener('canplay', function () {
          // Indication that the video is loaded and can be played and paused.
          _this2.isReady = true;
          resolve();
        }); // Seeked event indicates that the seeking has been finished, so we reset the boolean for that.


        _this2.playerObject.addEventListener('seeked', function () {
          _this2.isVideoSeeking = false;
        }); // Seeking event indicates that the seeking is currently happening, so we change the boolean.


        _this2.playerObject.addEventListener('seeking', function () {
          clearTimeout(_this2.seekTimeOut);
          _this2.isVideoSeeking = true;
        });
      });
      return videoPromise;
    }
  }, {
    key: "handleEnded",
    value: function handleEnded(callback) {
      var _this3 = this;

      this.playerObject.addEventListener('ended', function () {
        _this3.watchCount++; // This property will prevent automatic pause trigger when video ended.

        _this3.isVideoEnded = true;
        _this3.isVideoPlaying = false;
        callback(_this3.playlistItem);
      });
    }
  }, {
    key: "handlePaused",
    value: function handlePaused(callback) {
      var _this4 = this;

      this.playerObject.addEventListener('pause', function () {
        // Prevent pause trigger when the user is seeking video or when the video automatically trigger pause event when ended.
        _this4.seekTimeOut = setTimeout(function () {
          if (!_this4.isVideoSeeking && !_this4.isVideoEnded) {
            callback(); // Indication to know when there is a resume trigger event.

            _this4.isVideoPausedLocal = true;
          } else {
            _this4.isVideoEnded = false;
          }
        }, 30);
      });
    }
  }, {
    key: "handlePlayed",
    value: function handlePlayed(callback) {
      var _this5 = this;

      this.playerObject.addEventListener('play', function () {
        // Prevent play trigger when user is seeking video.
        if (!_this5.isVideoSeeking) {
          callback(_this5.playlistItem);
        }
      });
    }
  }, {
    key: "handleFullScreenChange",
    value: function handleFullScreenChange(callback) {
      // Wrapping with jQuery to easily listen all 3 prefixed screen change.
      jQuery(this.playerObject).on('webkitfullscreenchange mozfullscreenchange fullscreenchange', function () {
        callback(document.fullscreenElement);
      });
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.playerObject.currentTime;
    }
  }, {
    key: "play",
    value: function play() {
      if (!this.isReady) {
        return;
      }

      this.isVideoPlaying = true;
      this.playerObject.play();
    }
  }, {
    key: "pause",
    value: function pause() {
      if (!this.isReady) {
        return;
      }

      this.isVideoPlaying = false;
      this.playerObject.pause();
    }
  }]);
  return playerHosted;
}(_playerBase.default);

exports.default = playerHosted;

/***/ }),

/***/ "../modules/video-playlist/assets/js/frontend/player-youtube.js":
/*!**********************************************************************!*\
  !*** ../modules/video-playlist/assets/js/frontend/player-youtube.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(/*! core-js/modules/es6.object.to-string.js */ "../node_modules/core-js/modules/es6.object.to-string.js");

__webpack_require__(/*! core-js/modules/es6.regexp.to-string.js */ "../node_modules/core-js/modules/es6.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es7.string.pad-start.js */ "../node_modules/core-js/modules/es7.string.pad-start.js");

var _promise = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "../node_modules/@babel/runtime-corejs2/core-js/promise.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var _playerBase = _interopRequireDefault(__webpack_require__(/*! ./player-base */ "../modules/video-playlist/assets/js/frontend/player-base.js"));

var playerYoutube = /*#__PURE__*/function (_PlayerBase) {
  (0, _inherits2.default)(playerYoutube, _PlayerBase);

  var _super = (0, _createSuper2.default)(playerYoutube);

  function playerYoutube(playlistItem) {
    var _this;

    (0, _classCallCheck2.default)(this, playerYoutube);
    _this = _super.call(this, playlistItem);
    _this.apiProvider = elementorFrontend.utils.youtube;
    _this.playerObject = null;
    _this.watchCount = 0;
    _this.isVideoPlaying = false;
    _this.isVideoPausedLocal = false;
    _this.isVideoEnded = false;
    _this.seekSequenceArray = [];
    _this.pauseCurrentTime = null;
    _this.isReady = false;
    return _this;
  }

  (0, _createClass2.default)(playerYoutube, [{
    key: "create",
    value: function create() {
      var _this2 = this;

      this.currentVideoID = this.apiProvider.getVideoIDFromURL(this.playlistItem.videoUrl);
      var videoPromise = new _promise.default(function (resolve) {
        _this2.apiProvider.onApiReady(function (apiObject) {
          var playerOptions = {
            width: '773',
            videoId: _this2.currentVideoID,
            playerVars: {
              rel: 0,
              showinfo: 0,
              ecver: 2
            },
            events: {
              onReady: function onReady(event) {
                // When the video is created, the first play must be in mute.
                event.target.mute(); // Indication that the video is loaded and can be played and paused.

                _this2.isReady = true;
                resolve();
              }
            }
          };
          _this2.playerObject = new apiObject.Player(_this2.playlistItem.tabContent.querySelector('div'), playerOptions);

          _this2.playerObject.addEventListener('onStateChange', function (event) {
            // Buffering state.
            if (3 === event.data) {
              // When user is seeking we want to prevent triggering for "pause" and "play".
              // Seeking means a sequence as [2,3], so we check that 2 (pause) is exist before adding "3" (buffering).
              // If there is no "2", it means that this is not a seeking event and we can reset the array.
              if (2 === _this2.seekSequenceArray[_this2.seekSequenceArray.length - 1]) {
                _this2.seekSequenceArray.push(3);
              } else {
                _this2.seekSequenceArray = [];
                clearTimeout(_this2.seekTimeOut);
              }
            }
          });
        });
      });
      return videoPromise;
    }
  }, {
    key: "handleEnded",
    value: function handleEnded(callback) {
      var _this3 = this;

      this.playerObject.addEventListener('onStateChange', function (event) {
        // Ended state.
        if (0 === event.data) {
          _this3.watchCount++; // Prevent "video start" event when we seek to "0" on video ended event.
          // We seek to "0" to prevent the display of suggested videos by youtube when video ended.

          _this3.isVideoEnded = true;
          event.target.seekTo(0);
          event.target.stopVideo();
          _this3.isVideoPlaying = false;
          callback();
        }
      });
    }
  }, {
    key: "handlePaused",
    value: function handlePaused(callback) {
      var _this4 = this;

      this.playerObject.addEventListener('onStateChange', function (event) {
        // Pause state.
        if (2 === event.data) {
          // The pause event can be the start of seek event ([2,3] sequence) so we reset the sequence array and adding 2.
          _this4.seekSequenceArray = [];

          _this4.seekSequenceArray.push(2); // Save the current time when pause event occur.


          _this4.pauseCurrentTime = _this4.playerObject.playerInfo.currentTime; // We use here a setTimeout, since we don't want to fire the pause event before we can be sure that its not part of seek event.

          _this4.seekTimeOut = setTimeout(function () {
            if (2 === _this4.seekSequenceArray.length && 2 === _this4.seekSequenceArray[0] && 3 === _this4.seekSequenceArray[1]) {
              _this4.seekSequenceArray = [];
              clearTimeout(_this4.seekTimeOut);
            } else {
              callback(); // Indication to know when there is a resume trigger event.

              _this4.isVideoPausedLocal = true;
            }
          }, 1000);
        }
      });
    }
  }, {
    key: "handlePlayed",
    value: function handlePlayed(callback) {
      var _this5 = this;

      this.playerObject.addEventListener('onStateChange', function (event) {
        // Prevent "video start" event when we seek to "0" on video ended event.
        if (1 === event.data && !_this5.isVideoEnded) {
          // Prevent "play" event when it is a seek event ([2,3] sequence).
          if (!(2 === _this5.seekSequenceArray.length && 2 === _this5.seekSequenceArray[0] && 3 === _this5.seekSequenceArray[1])) {
            callback();
          }
        } else {
          _this5.isVideoEnded = false;
        }
      });
    }
  }, {
    key: "handleError",
    value: function handleError(callback) {
      this.playerObject.addEventListener('onError', function () {
        callback();
      });
    }
  }, {
    key: "handleFullScreenChange",
    value: function handleFullScreenChange(callback) {
      // Wrapping with jQuery to easily listen all 3 prefixed screen change.
      jQuery(this.playerObject.h).on('webkitfullscreenchange mozfullscreenchange fullscreenchange', function () {
        callback(document.fullscreenElement);
      });
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      var currentTime = this.pauseCurrentTime ? this.pauseCurrentTime : this.playerObject.playerInfo.currentTime;
      this.pauseCurrentTime = null;
      return currentTime;
    }
  }, {
    key: "play",
    value: function play() {
      if (!this.isReady) {
        return;
      }

      this.isVideoPlaying = true;
      this.playerObject.playVideo();
    }
  }, {
    key: "pause",
    value: function pause() {
      if (!this.isReady) {
        return;
      }

      this.isVideoPlaying = false;
      this.playerObject.pauseVideo();
    }
  }, {
    key: "formatDuration",
    value: function formatDuration(duration) {
      var dateObj = new Date(duration * 1000),
          hours = dateObj.getUTCHours(),
          minutes = dateObj.getUTCMinutes(),
          seconds = dateObj.getSeconds();

      if (hours !== 0) {
        return "".concat(hours.toString(), ":").concat(minutes.toString().padStart(2, '0'), ":").concat(seconds.toString().padStart(2, '0'));
      }

      return "".concat(minutes.toString(), ":").concat(seconds.toString().padStart(2, '0'));
    }
  }, {
    key: "setVideoProviderData",
    value: function setVideoProviderData() {
      if (!this.isReady) {
        return;
      }

      if (this.currentVideoID && 11 === this.currentVideoID.length) {
        this.playlistItem.thumbnail = {
          url: 'http://img.youtube.com/vi/' + this.playerObject.getVideoData().video_id + '/maxresdefault.jpg'
        };
        this.playlistItem.video_title = this.playerObject.getVideoData().title;
        this.playlistItem.duration = this.formatDuration(this.playerObject.getDuration());
      } else {
        this.playlistItem.thumbnail = {
          url: ''
        };
        this.playlistItem.video_title = '';
        this.playlistItem.duration = '';
      }
    }
  }]);
  return playerYoutube;
}(_playerBase.default);

exports.default = playerYoutube;

/***/ }),

/***/ "../modules/video-playlist/assets/js/frontend/playlist-event.js":
/*!**********************************************************************!*\
  !*** ../modules/video-playlist/assets/js/frontend/playlist-event.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(/*! core-js/modules/es6.function.name.js */ "../node_modules/core-js/modules/es6.function.name.js");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

// state transfer object
var PlaylistEvent = function PlaylistEvent(_ref) {
  var event = _ref.event,
      tab = _ref.tab,
      playlist = _ref.playlist,
      video = _ref.video;
  (0, _classCallCheck2.default)(this, PlaylistEvent);
  this.event = {
    type: event.type || '',
    time: event.time || 0,
    element: event.element,
    trigger: event.trigger || '',
    watchCount: event.watchCount || 0
  };
  this.tab = {
    name: tab.name,
    index: tab.index
  };
  this.playlist = {
    name: playlist.name,
    currentItem: playlist.currentItem,
    amount: playlist.amount
  };
  this.video = {
    provider: video.provider,
    url: video.url,
    title: video.title,
    duration: video.duration
  };
};

exports.default = PlaylistEvent;

/***/ }),

/***/ "../modules/video-playlist/assets/js/frontend/scroll-utils.js":
/*!********************************************************************!*\
  !*** ../modules/video-playlist/assets/js/frontend/scroll-utils.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.handleVideosPanelScroll = handleVideosPanelScroll;

// Handle the display of top/bottom shadows in playlist item's panel.
function handleVideosPanelScroll(elements, event) {
  if (!event) {
    if (elements.$tabsItems[0].offsetHeight < elements.$tabsItems[0].scrollHeight) {
      elements.$tabsWrapper.addClass('bottom-shadow');
    }

    return;
  }

  if (event.target.scrollTop > 0) {
    elements.$tabsWrapper.addClass('top-shadow');
  } else {
    elements.$tabsWrapper.removeClass('top-shadow');
  }

  if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
    elements.$tabsWrapper.removeClass('bottom-shadow');
  } else {
    elements.$tabsWrapper.addClass('bottom-shadow');
  }
}

/***/ }),

/***/ "../modules/video-playlist/assets/js/frontend/url-params.js":
/*!******************************************************************!*\
  !*** ../modules/video-playlist/assets/js/frontend/url-params.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.handleURLParams = handleURLParams;
exports.setVideoParams = setVideoParams;

__webpack_require__(/*! core-js/modules/es6.regexp.search.js */ "../node_modules/core-js/modules/es6.regexp.search.js");

__webpack_require__(/*! core-js/modules/es6.array.find.js */ "../node_modules/core-js/modules/es6.array.find.js");

// Handling the functionality for existing/not-existing url params.
function handleURLParams(playlistId, playlistItemsArray) {
  var params = new URLSearchParams(location.search),
      videoId = params.get('video'),
      playlistName = params.get('playlist'),
      defaultTabIndex = 1; // When there is no data in params, the params will be set with the first video in the list.

  if (!playlistName) {
    setVideoParams(playlistId, playlistItemsArray, defaultTabIndex);
    return false;
  } // When there is data in params, we return the tab number for the video.


  if (playlistName === playlistId) {
    var videoItem = playlistItemsArray.find(function (playlistItem) {
      return videoId === playlistItem.dataItemId;
    }),
        tabIndex = videoItem ? videoItem.dataTab : defaultTabIndex;

    if (!tabIndex) {
      setVideoParams(playlistId, playlistItemsArray, defaultTabIndex);
    }

    return tabIndex || false;
  }
} // Setting the playlist id and video id on the url.


function setVideoParams(playlistId, playlistItemsArray, videoId) {
  var params = new URLSearchParams(location.search);
  params.set('playlist', playlistId);
  params.set('video', playlistItemsArray[videoId - 1].dataItemId);
  history.replaceState({}, '', location.pathname + '?' + params);
}

/***/ }),

/***/ "../node_modules/core-js/library/fn/array/from.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/library/fn/array/from.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "../node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/es6.array.from */ "../node_modules/core-js/library/modules/es6.array.from.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "../node_modules/core-js/library/modules/_core.js").Array.from;


/***/ }),

/***/ "../node_modules/core-js/library/fn/json/stringify.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/library/fn/json/stringify.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var core = __webpack_require__(/*! ../../modules/_core */ "../node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "../node_modules/core-js/library/fn/object/define-properties.js":
/*!**********************************************************************!*\
  !*** ../node_modules/core-js/library/fn/object/define-properties.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es6.object.define-properties */ "../node_modules/core-js/library/modules/es6.object.define-properties.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "../node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperties(T, D) {
  return $Object.defineProperties(T, D);
};


/***/ }),

/***/ "../node_modules/core-js/library/fn/object/get-own-property-descriptors.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/core-js/library/fn/object/get-own-property-descriptors.js ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.object.get-own-property-descriptors */ "../node_modules/core-js/library/modules/es7.object.get-own-property-descriptors.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "../node_modules/core-js/library/modules/_core.js").Object.getOwnPropertyDescriptors;


/***/ }),

/***/ "../node_modules/core-js/library/fn/object/get-own-property-symbols.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/core-js/library/fn/object/get-own-property-symbols.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es6.symbol */ "../node_modules/core-js/library/modules/es6.symbol.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "../node_modules/core-js/library/modules/_core.js").Object.getOwnPropertySymbols;


/***/ }),

/***/ "../node_modules/core-js/library/fn/parse-int.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/library/fn/parse-int.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../modules/es6.parse-int */ "../node_modules/core-js/library/modules/es6.parse-int.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "../node_modules/core-js/library/modules/_core.js").parseInt;


/***/ }),

/***/ "../node_modules/core-js/library/fn/promise.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/library/fn/promise.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../modules/es6.object.to-string */ "../node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "../node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "../node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.promise */ "../node_modules/core-js/library/modules/es6.promise.js");
__webpack_require__(/*! ../modules/es7.promise.finally */ "../node_modules/core-js/library/modules/es7.promise.finally.js");
__webpack_require__(/*! ../modules/es7.promise.try */ "../node_modules/core-js/library/modules/es7.promise.try.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "../node_modules/core-js/library/modules/_core.js").Promise;


/***/ }),

/***/ "../node_modules/core-js/library/modules/_an-instance.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_an-instance.js ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_classof.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_classof.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "../node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_create-property.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_create-property.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "../node_modules/core-js/library/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_for-of.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_for-of.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ctx = __webpack_require__(/*! ./_ctx */ "../node_modules/core-js/library/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "../node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "../node_modules/core-js/library/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/library/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/core-js/library/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "../node_modules/core-js/library/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "../node_modules/core-js/library/modules/_is-array-iter.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_is-array-iter.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "../node_modules/core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_iter-call.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_iter-call.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_iter-detect.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_iter-detect.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ITERATOR = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/library/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_microtask.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_microtask.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/library/modules/_global.js");
var macrotask = __webpack_require__(/*! ./_task */ "../node_modules/core-js/library/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "../node_modules/core-js/library/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_new-promise-capability.js":
/*!**************************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_new-promise-capability.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "../node_modules/core-js/library/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_own-keys.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_own-keys.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(/*! ./_object-gopn */ "../node_modules/core-js/library/modules/_object-gopn.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "../node_modules/core-js/library/modules/_object-gops.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/library/modules/_an-object.js");
var Reflect = __webpack_require__(/*! ./_global */ "../node_modules/core-js/library/modules/_global.js").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_parse-int.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_parse-int.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $parseInt = __webpack_require__(/*! ./_global */ "../node_modules/core-js/library/modules/_global.js").parseInt;
var $trim = __webpack_require__(/*! ./_string-trim */ "../node_modules/core-js/library/modules/_string-trim.js").trim;
var ws = __webpack_require__(/*! ./_string-ws */ "../node_modules/core-js/library/modules/_string-ws.js");
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "../node_modules/core-js/library/modules/_perform.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_perform.js ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_promise-resolve.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_promise-resolve.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/library/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "../node_modules/core-js/library/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_redefine-all.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_redefine-all.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hide = __webpack_require__(/*! ./_hide */ "../node_modules/core-js/library/modules/_hide.js");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_set-species.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_set-species.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "../node_modules/core-js/library/modules/_core.js");
var dP = __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/library/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/library/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_species-constructor.js":
/*!***********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_species-constructor.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/library/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "../node_modules/core-js/library/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/library/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_string-trim.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_string-trim.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/library/modules/_export.js");
var defined = __webpack_require__(/*! ./_defined */ "../node_modules/core-js/library/modules/_defined.js");
var fails = __webpack_require__(/*! ./_fails */ "../node_modules/core-js/library/modules/_fails.js");
var spaces = __webpack_require__(/*! ./_string-ws */ "../node_modules/core-js/library/modules/_string-ws.js");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "../node_modules/core-js/library/modules/_string-ws.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_string-ws.js ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "../node_modules/core-js/library/modules/_task.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_task.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ctx = __webpack_require__(/*! ./_ctx */ "../node_modules/core-js/library/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "../node_modules/core-js/library/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "../node_modules/core-js/library/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "../node_modules/core-js/library/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/library/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "../node_modules/core-js/library/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_user-agent.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_user-agent.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/library/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "../node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!***************************************************************************!*\
  !*** ../node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ./_classof */ "../node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "../node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "../node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.array.from.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.array.from.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "../node_modules/core-js/library/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/library/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../node_modules/core-js/library/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "../node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "../node_modules/core-js/library/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/core-js/library/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "../node_modules/core-js/library/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "../node_modules/core-js/library/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "../node_modules/core-js/library/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.object.define-properties.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.object.define-properties.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/library/modules/_export.js");
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperties: __webpack_require__(/*! ./_object-dps */ "../node_modules/core-js/library/modules/_object-dps.js") });


/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.parse-int.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.parse-int.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/library/modules/_export.js");
var $parseInt = __webpack_require__(/*! ./_parse-int */ "../node_modules/core-js/library/modules/_parse-int.js");
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.promise.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.promise.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "../node_modules/core-js/library/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/library/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "../node_modules/core-js/library/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "../node_modules/core-js/library/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/library/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/library/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "../node_modules/core-js/library/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "../node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "../node_modules/core-js/library/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "../node_modules/core-js/library/modules/_species-constructor.js");
var task = __webpack_require__(/*! ./_task */ "../node_modules/core-js/library/modules/_task.js").set;
var microtask = __webpack_require__(/*! ./_microtask */ "../node_modules/core-js/library/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "../node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "../node_modules/core-js/library/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "../node_modules/core-js/library/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "../node_modules/core-js/library/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "../node_modules/core-js/library/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "../node_modules/core-js/library/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "../node_modules/core-js/library/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "../node_modules/core-js/library/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "../node_modules/core-js/library/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "../node_modules/core-js/library/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "../node_modules/core-js/library/modules/es7.object.get-own-property-descriptors.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es7.object.get-own-property-descriptors.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/library/modules/_export.js");
var ownKeys = __webpack_require__(/*! ./_own-keys */ "../node_modules/core-js/library/modules/_own-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../node_modules/core-js/library/modules/_to-iobject.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "../node_modules/core-js/library/modules/_object-gopd.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "../node_modules/core-js/library/modules/_create-property.js");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ "../node_modules/core-js/library/modules/es7.promise.finally.js":
/*!**********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es7.promise.finally.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "../node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/library/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "../node_modules/core-js/library/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "../node_modules/core-js/library/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "../node_modules/core-js/library/modules/es7.promise.try.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es7.promise.try.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/library/modules/_export.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "../node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "../node_modules/core-js/library/modules/_perform.js");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "../node_modules/core-js/modules/_fails-is-regexp.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/modules/_fails-is-regexp.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MATCH = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/modules/_wks.js")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_same-value.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/modules/_same-value.js ***!
  \******************************************************/
/***/ ((module) => {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_species-constructor.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/modules/_species-constructor.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "../node_modules/core-js/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "../node_modules/core-js/modules/_strict-method.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/_strict-method.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ./_fails */ "../node_modules/core-js/modules/_fails.js");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "../node_modules/core-js/modules/_string-context.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/modules/_string-context.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "../node_modules/core-js/modules/_is-regexp.js");
var defined = __webpack_require__(/*! ./_defined */ "../node_modules/core-js/modules/_defined.js");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "../node_modules/core-js/modules/_string-pad.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/modules/_string-pad.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/core-js/modules/_to-length.js");
var repeat = __webpack_require__(/*! ./_string-repeat */ "../node_modules/core-js/modules/_string-repeat.js");
var defined = __webpack_require__(/*! ./_defined */ "../node_modules/core-js/modules/_defined.js");

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_string-repeat.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/_string-repeat.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toInteger = __webpack_require__(/*! ./_to-integer */ "../node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "../node_modules/core-js/modules/_defined.js");

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_user-agent.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/modules/_user-agent.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "../node_modules/core-js/modules/es6.array.filter.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.array.filter.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var $filter = __webpack_require__(/*! ./_array-methods */ "../node_modules/core-js/modules/_array-methods.js")(2);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "../node_modules/core-js/modules/_strict-method.js")([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.function.name.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.function.name.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/modules/_object-dp.js").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/modules/_descriptors.js") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.object.to-string.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.object.to-string.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(/*! ./_classof */ "../node_modules/core-js/modules/_classof.js");
var test = {};
test[__webpack_require__(/*! ./_wks */ "../node_modules/core-js/modules/_wks.js")('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(/*! ./_redefine */ "../node_modules/core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),

/***/ "../node_modules/core-js/modules/es6.regexp.flags.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.regexp.flags.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/modules/_descriptors.js") && /./g.flags != 'g') __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/modules/_object-dp.js").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(/*! ./_flags */ "../node_modules/core-js/modules/_flags.js")
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.regexp.search.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.regexp.search.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var sameValue = __webpack_require__(/*! ./_same-value */ "../node_modules/core-js/modules/_same-value.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "../node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@search logic
__webpack_require__(/*! ./_fix-re-wks */ "../node_modules/core-js/modules/_fix-re-wks.js")('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.regexp.split.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.regexp.split.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isRegExp = __webpack_require__(/*! ./_is-regexp */ "../node_modules/core-js/modules/_is-regexp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "../node_modules/core-js/modules/_species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "../node_modules/core-js/modules/_advance-string-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/core-js/modules/_to-length.js");
var callRegExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "../node_modules/core-js/modules/_regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "../node_modules/core-js/modules/_regexp-exec.js");
var fails = __webpack_require__(/*! ./_fails */ "../node_modules/core-js/modules/_fails.js");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(/*! ./_fix-re-wks */ "../node_modules/core-js/modules/_fix-re-wks.js")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.regexp.to-string.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(/*! ./es6.regexp.flags */ "../node_modules/core-js/modules/es6.regexp.flags.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var $flags = __webpack_require__(/*! ./_flags */ "../node_modules/core-js/modules/_flags.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/modules/_descriptors.js");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(/*! ./_redefine */ "../node_modules/core-js/modules/_redefine.js")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(/*! ./_fails */ "../node_modules/core-js/modules/_fails.js")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "../node_modules/core-js/modules/es6.string.includes.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.string.includes.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var context = __webpack_require__(/*! ./_string-context */ "../node_modules/core-js/modules/_string-context.js");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "../node_modules/core-js/modules/_fails-is-regexp.js")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es7.array.includes.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/modules/es7.array.includes.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var $includes = __webpack_require__(/*! ./_array-includes */ "../node_modules/core-js/modules/_array-includes.js")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "../node_modules/core-js/modules/_add-to-unscopables.js")('includes');


/***/ }),

/***/ "../node_modules/core-js/modules/es7.string.pad-start.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/modules/es7.string.pad-start.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var $pad = __webpack_require__(/*! ./_string-pad */ "../node_modules/core-js/modules/_string-pad.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "../node_modules/core-js/modules/_user-agent.js");

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});


/***/ })

}]);
//# sourceMappingURL=video-playlist.1b36054052aa15db889b.bundle.js.map
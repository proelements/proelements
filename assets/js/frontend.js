/*! pro-elements - v2.10.3 - 29-06-2020 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 132);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(8);

var assertThisInitialized = __webpack_require__(7);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(9);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(13);

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  function _default(settings, document) {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_default).call(this, settings));
    _this.document = document;
    return _this;
  }

  (0, _createClass2.default)(_default, [{
    key: "getTimingSetting",
    value: function getTimingSetting(settingKey) {
      return this.getSettings(this.getName() + '_' + settingKey);
    }
  }]);
  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  function _default(settings, callback) {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_default).call(this, settings));
    _this.callback = callback;
    return _this;
  }

  (0, _createClass2.default)(_default, [{
    key: "getTriggerSetting",
    value: function getTriggerSetting(settingKey) {
      return this.getSettings(this.getName() + '_' + settingKey);
    }
  }]);
  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(1);

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elementorModules.frontend.handlers.Base.extend({
  getSkinPrefix: function getSkinPrefix() {
    return 'classic_';
  },
  bindEvents: function bindEvents() {
    var cid = this.getModelCID();
    elementorFrontend.addListenerOnce(cid, 'resize', this.onWindowResize);
  },
  getClosureMethodsNames: function getClosureMethodsNames() {
    return elementorModules.frontend.handlers.Base.prototype.getClosureMethodsNames.apply(this, arguments).concat(['fitImages', 'onWindowResize', 'runMasonry']);
  },
  getDefaultSettings: function getDefaultSettings() {
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
  getDefaultElements: function getDefaultElements() {
    var selectors = this.getSettings('selectors');
    return {
      $postsContainer: this.$element.find(selectors.postsContainer),
      $posts: this.$element.find(selectors.post)
    };
  },
  fitImage: function fitImage($post) {
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
  fitImages: function fitImages() {
    var $ = jQuery,
        self = this,
        itemRatio = getComputedStyle(this.$element[0], ':after').content,
        settings = this.getSettings();
    this.elements.$postsContainer.toggleClass(settings.classes.hasItemRatio, !!itemRatio.match(/\d/));

    if (self.isMasonryEnabled()) {
      return;
    }

    this.elements.$posts.each(function () {
      var $post = $(this),
          $image = $post.find(settings.selectors.postThumbnailImage);
      self.fitImage($post);
      $image.on('load', function () {
        self.fitImage($post);
      });
    });
  },
  setColsCountSettings: function setColsCountSettings() {
    var currentDeviceMode = elementorFrontend.getCurrentDeviceMode(),
        settings = this.getElementSettings(),
        skinPrefix = this.getSkinPrefix(),
        colsCount;

    switch (currentDeviceMode) {
      case 'mobile':
        colsCount = settings[skinPrefix + 'columns_mobile'];
        break;

      case 'tablet':
        colsCount = settings[skinPrefix + 'columns_tablet'];
        break;

      default:
        colsCount = settings[skinPrefix + 'columns'];
    }

    this.setSettings('colsCount', colsCount);
  },
  isMasonryEnabled: function isMasonryEnabled() {
    return !!this.getElementSettings(this.getSkinPrefix() + 'masonry');
  },
  initMasonry: function initMasonry() {
    imagesLoaded(this.elements.$posts, this.runMasonry);
  },
  runMasonry: function runMasonry() {
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
    /* The `verticalSpaceBetween` variable is setup in a way that supports older versions of the portfolio widget */


    var verticalSpaceBetween = this.getElementSettings(this.getSkinPrefix() + 'row_gap.size');

    if ('' === this.getSkinPrefix() && '' === verticalSpaceBetween) {
      verticalSpaceBetween = this.getElementSettings(this.getSkinPrefix() + 'item_gap.size');
    }

    var masonry = new elementorModules.utils.Masonry({
      container: elements.$postsContainer,
      items: elements.$posts.filter(':visible'),
      columnsCount: this.getSettings('colsCount'),
      verticalSpaceBetween: verticalSpaceBetween
    });
    masonry.run();
  },
  run: function run() {
    // For slow browsers
    setTimeout(this.fitImages, 0);
    this.initMasonry();
  },
  onInit: function onInit() {
    elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);
    this.bindEvents();
    this.run();
  },
  onWindowResize: function onWindowResize() {
    this.fitImages();
    this.runMasonry();
  },
  onElementChange: function onElementChange() {
    this.fitImages();
    setTimeout(this.runMasonry);
  }
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var Scroll = /*#__PURE__*/function () {
  function Scroll() {
    (0, _classCallCheck2.default)(this, Scroll);
  }

  (0, _createClass2.default)(Scroll, null, [{
    key: "scrollObserver",

    /**
     * @param {object} obj
     * @param {number} obj.sensitivity - Value between 0-100 - Will determine the intersection trigger points on the element
     * @param {function} obj.callback - Will be triggered on each intersection point between the element and the viewport top/bottom
     * @param {string} obj.offset - Offset between the element intersection points and the viewport, written like in CSS: '-50% 0 -25%'
     * @param {HTMLElement} obj.root - The element that the events will be relative to, if 'null' will be relative to the viewport
     */
    value: function scrollObserver(obj) {
      var lastScrollY = 0; // Generating threshholds points along the animation height
      // More threshholds points = more trigger points of the callback

      var buildThreshholds = function buildThreshholds() {
        var sensitivityPercentage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var threshholds = [];

        if (sensitivityPercentage > 0 && sensitivityPercentage <= 100) {
          var increment = 100 / sensitivityPercentage;

          for (var i = 0; i <= 100; i += increment) {
            threshholds.push(i / 100);
          }
        } else {
          threshholds.push(0);
        }

        return threshholds;
      };

      var options = {
        root: obj.root || null,
        rootMargin: obj.offset || '0px',
        threshold: buildThreshholds(obj.sensitivity)
      };

      function handleIntersect(entries, observer) {
        var currentScrollY = entries[0].boundingClientRect.y,
            isInViewport = entries[0].isIntersecting,
            intersectionScrollDirection = currentScrollY < lastScrollY ? 'down' : 'up',
            scrollPercentage = Math.abs(parseFloat((entries[0].intersectionRatio * 100).toFixed(2)));
        obj.callback({
          sensitivity: obj.sensitivity,
          isInViewport: isInViewport,
          scrollPercentage: scrollPercentage,
          intersectionScrollDirection: intersectionScrollDirection
        });
        lastScrollY = currentScrollY;
      }

      return new IntersectionObserver(handleIntersect, options);
    }
    /**
     * @param {jQuery Element} $element
     * @param {object} offsetObj
     * @param {number} offsetObj.start - Offset start value in percentages
     * @param {number} offsetObj.end - Offset end value in percentages
     */

  }, {
    key: "getElementViewportPercentage",
    value: function getElementViewportPercentage($element) {
      var offsetObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var elementOffset = $element[0].getBoundingClientRect(),
          offsetStart = offsetObj.start || 0,
          offsetEnd = offsetObj.end || 0,
          windowStartOffset = window.innerHeight * offsetStart / 100,
          windowEndOffset = window.innerHeight * offsetEnd / 100,
          y1 = elementOffset.top - window.innerHeight,
          y2 = elementOffset.top + windowStartOffset + $element.height(),
          startPosition = 0 - y1 + windowStartOffset,
          endPosition = y2 - y1 + windowEndOffset,
          percent = Math.max(0, Math.min(startPosition / endPosition, 1));
      return parseFloat((percent * 100).toFixed(2));
    }
    /**
     * @param {object} offsetObj
     * @param {number} offsetObj.start - Offset start value in percentages
     * @param {number} offsetObj.end - Offset end value in percentages
     * @param {number} limitPageHeight - Will limit the page height calculation
     */

  }, {
    key: "getPageScrollPercentage",
    value: function getPageScrollPercentage() {
      var offsetObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var limitPageHeight = arguments.length > 1 ? arguments[1] : undefined;
      var offsetStart = offsetObj.start || 0,
          offsetEnd = offsetObj.end || 0,
          initialPageHeight = limitPageHeight || document.documentElement.scrollHeight - document.documentElement.clientHeight,
          heightOffset = initialPageHeight * offsetStart / 100,
          pageRange = initialPageHeight + heightOffset + initialPageHeight * offsetEnd / 100,
          scrollPos = document.documentElement.scrollTop + document.body.scrollTop + heightOffset;
      return scrollPos / pageRange * 100;
    }
  }]);
  return Scroll;
}();

exports.default = Scroll;

/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(7));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(1));

var _get2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(15));

var _scroll = _interopRequireDefault(__webpack_require__(17));

var _default = /*#__PURE__*/function (_elementorModules$Vie) {
  (0, _inherits2.default)(_default, _elementorModules$Vie);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onInsideViewport", function () {
      _this.run();

      _this.animationFrameRequest = requestAnimationFrame(_this.onInsideViewport);
    });
    return _this;
  }

  (0, _createClass2.default)(_default, [{
    key: "__construct",
    value: function __construct(options) {
      this.motionFX = options.motionFX;

      if (!this.intersectionObservers) {
        this.setElementInViewportObserver();
      }
    }
  }, {
    key: "setElementInViewportObserver",
    value: function setElementInViewportObserver() {
      var _this2 = this;

      this.intersectionObserver = _scroll.default.scrollObserver({
        callback: function callback(event) {
          if (event.isInViewport) {
            _this2.onInsideViewport();
          } else {
            _this2.removeAnimationFrameRequest();
          }
        }
      });
      this.intersectionObserver.observe(this.motionFX.elements.$parent[0]);
    }
  }, {
    key: "runCallback",
    value: function runCallback() {
      var callback = this.getSettings('callback');
      callback.apply(void 0, arguments);
    }
  }, {
    key: "removeIntersectionObserver",
    value: function removeIntersectionObserver() {
      if (this.intersectionObserver) {
        this.intersectionObserver.unobserve(this.motionFX.elements.$parent[0]);
      }
    }
  }, {
    key: "removeAnimationFrameRequest",
    value: function removeAnimationFrameRequest() {
      if (this.animationFrameRequest) {
        cancelAnimationFrame(this.animationFrameRequest);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.removeAnimationFrameRequest();
      this.removeIntersectionObserver();
    }
  }, {
    key: "onInit",
    value: function onInit() {
      (0, _get2.default)((0, _getPrototypeOf3.default)(_default.prototype), "onInit", this).call(this);
    }
  }]);
  return _default;
}(elementorModules.ViewModule);

exports.default = _default;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(15);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
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
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

module.exports = _objectSpread2;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elementorModules.frontend.handlers.Base.extend({
  getDefaultSettings: function getDefaultSettings() {
    return {
      selectors: {
        mainSwiper: '.elementor-main-swiper',
        swiperSlide: '.swiper-slide'
      },
      slidesPerView: {
        desktop: 3,
        tablet: 2,
        mobile: 1
      }
    };
  },
  getDefaultElements: function getDefaultElements() {
    var selectors = this.getSettings('selectors');
    var elements = {
      $mainSwiper: this.$element.find(selectors.mainSwiper)
    };
    elements.$mainSwiperSlides = elements.$mainSwiper.find(selectors.swiperSlide);
    return elements;
  },
  getSlidesCount: function getSlidesCount() {
    return this.elements.$mainSwiperSlides.length;
  },
  getInitialSlide: function getInitialSlide() {
    var editSettings = this.getEditSettings();
    return editSettings.activeItemIndex ? editSettings.activeItemIndex - 1 : 0;
  },
  getEffect: function getEffect() {
    return this.getElementSettings('effect');
  },
  getDeviceSlidesPerView: function getDeviceSlidesPerView(device) {
    var slidesPerViewKey = 'slides_per_view' + ('desktop' === device ? '' : '_' + device);
    return Math.min(this.getSlidesCount(), +this.getElementSettings(slidesPerViewKey) || this.getSettings('slidesPerView')[device]);
  },
  getSlidesPerView: function getSlidesPerView(device) {
    if ('slide' === this.getEffect()) {
      return this.getDeviceSlidesPerView(device);
    }

    return 1;
  },
  getDesktopSlidesPerView: function getDesktopSlidesPerView() {
    return this.getSlidesPerView('desktop');
  },
  getTabletSlidesPerView: function getTabletSlidesPerView() {
    return this.getSlidesPerView('tablet');
  },
  getMobileSlidesPerView: function getMobileSlidesPerView() {
    return this.getSlidesPerView('mobile');
  },
  getDeviceSlidesToScroll: function getDeviceSlidesToScroll(device) {
    var slidesToScrollKey = 'slides_to_scroll' + ('desktop' === device ? '' : '_' + device);
    return Math.min(this.getSlidesCount(), +this.getElementSettings(slidesToScrollKey) || 1);
  },
  getSlidesToScroll: function getSlidesToScroll(device) {
    if ('slide' === this.getEffect()) {
      return this.getDeviceSlidesToScroll(device);
    }

    return 1;
  },
  getDesktopSlidesToScroll: function getDesktopSlidesToScroll() {
    return this.getSlidesToScroll('desktop');
  },
  getTabletSlidesToScroll: function getTabletSlidesToScroll() {
    return this.getSlidesToScroll('tablet');
  },
  getMobileSlidesToScroll: function getMobileSlidesToScroll() {
    return this.getSlidesToScroll('mobile');
  },
  getSpaceBetween: function getSpaceBetween(device) {
    var propertyName = 'space_between';

    if (device && 'desktop' !== device) {
      propertyName += '_' + device;
    }

    return this.getElementSettings(propertyName).size || 0;
  },
  getSwiperOptions: function getSwiperOptions() {
    var elementSettings = this.getElementSettings(); // TODO: Temp migration for old saved values since 2.2.0

    if ('progress' === elementSettings.pagination) {
      elementSettings.pagination = 'progressbar';
    }

    var swiperOptions = {
      grabCursor: true,
      initialSlide: this.getInitialSlide(),
      slidesPerView: this.getDesktopSlidesPerView(),
      slidesPerGroup: this.getDesktopSlidesToScroll(),
      spaceBetween: this.getSpaceBetween(),
      loop: 'yes' === elementSettings.loop,
      speed: elementSettings.speed,
      effect: this.getEffect(),
      preventClicksPropagation: false,
      slideToClickedSlide: true,
      handleElementorBreakpoints: true
    };

    if (elementSettings.show_arrows) {
      swiperOptions.navigation = {
        prevEl: '.elementor-swiper-button-prev',
        nextEl: '.elementor-swiper-button-next'
      };
    }

    if (elementSettings.pagination) {
      swiperOptions.pagination = {
        el: '.swiper-pagination',
        type: elementSettings.pagination,
        clickable: true
      };
    }

    if ('cube' !== this.getEffect()) {
      var breakpointsSettings = {},
          breakpoints = elementorFrontend.config.breakpoints;
      breakpointsSettings[breakpoints.lg - 1] = {
        slidesPerView: this.getTabletSlidesPerView(),
        slidesPerGroup: this.getTabletSlidesToScroll(),
        spaceBetween: this.getSpaceBetween('tablet')
      };
      breakpointsSettings[breakpoints.md - 1] = {
        slidesPerView: this.getMobileSlidesPerView(),
        slidesPerGroup: this.getMobileSlidesToScroll(),
        spaceBetween: this.getSpaceBetween('mobile')
      };
      swiperOptions.breakpoints = breakpointsSettings;
    }

    if (!this.isEdit && elementSettings.autoplay) {
      swiperOptions.autoplay = {
        delay: elementSettings.autoplay_speed,
        disableOnInteraction: !!elementSettings.pause_on_interaction
      };
    }

    return swiperOptions;
  },
  updateSpaceBetween: function updateSpaceBetween(swiper, propertyName) {
    var deviceMatch = propertyName.match('space_between_(.*)'),
        device = deviceMatch ? deviceMatch[1] : 'desktop',
        newSpaceBetween = this.getSpaceBetween(device),
        breakpoints = elementorFrontend.config.breakpoints;

    if ('desktop' !== device) {
      var breakpointDictionary = {
        tablet: breakpoints.lg - 1,
        mobile: breakpoints.md - 1
      };
      swiper.params.breakpoints[breakpointDictionary[device]].spaceBetween = newSpaceBetween;
    } else {
      swiper.originalParams.spaceBetween = newSpaceBetween;
    }

    swiper.params.spaceBetween = newSpaceBetween;
    swiper.update();
  },
  onInit: function onInit() {
    var _this = this;

    elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);
    var elementSettings = this.getElementSettings();
    this.swipers = {};

    if (1 >= this.getSlidesCount()) {
      return;
    }

    this.swipers.main = new Swiper(this.elements.$mainSwiper, this.getSwiperOptions()); // Expose the swiper instance in the frontend

    this.elements.$mainSwiper.data('swiper', this.swipers.main);

    if (elementSettings.pause_on_hover) {
      this.elements.$mainSwiper.on({
        mouseenter: function mouseenter() {
          _this.swipers.main.autoplay.stop();
        },
        mouseleave: function mouseleave() {
          _this.swipers.main.autoplay.start();
        }
      });
    }
  },
  onElementChange: function onElementChange(propertyName) {
    if (1 >= this.getSlidesCount()) {
      return;
    }

    if (0 === propertyName.indexOf('width')) {
      this.swipers.main.update();
    }

    if (0 === propertyName.indexOf('space_between')) {
      this.updateSpaceBetween(this.swipers.main, propertyName);
    }
  },
  onEditSettingsChange: function onEditSettingsChange(propertyName) {
    if (1 >= this.getSlidesCount()) {
      return;
    }

    if ('activeItemIndex' === propertyName) {
      this.swipers.main.slideToLoop(this.getEditSettings('activeItemIndex') - 1);
    }
  }
});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Base = __webpack_require__(21),
    TestimonialCarousel;

TestimonialCarousel = Base.extend({
  getDefaultSettings: function getDefaultSettings() {
    var defaultSettings = Base.prototype.getDefaultSettings.apply(this, arguments);
    defaultSettings.slidesPerView = {
      desktop: 1,
      tablet: 1,
      mobile: 1
    };

    if (defaultSettings.loop) {
      defaultSettings.loopedSlides = this.getSlidesCount();
    }

    return defaultSettings;
  },
  getEffect: function getEffect() {
    return 'slide';
  }
});

module.exports = function ($scope) {
  new TestimonialCarousel({
    $element: $scope
  });
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PostsHandler = __webpack_require__(16);

module.exports = PostsHandler.extend({
  getSkinPrefix: function getSkinPrefix() {
    return 'cards_';
  }
});

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var StickyHandler = elementorModules.frontend.handlers.Base.extend({
  bindEvents: function bindEvents() {
    elementorFrontend.addListenerOnce(this.getUniqueHandlerID() + 'sticky', 'resize', this.run);
  },
  unbindEvents: function unbindEvents() {
    elementorFrontend.removeListeners(this.getUniqueHandlerID() + 'sticky', 'resize', this.run);
  },
  isActive: function isActive() {
    return undefined !== this.$element.data('sticky');
  },
  activate: function activate() {
    var elementSettings = this.getElementSettings(),
        stickyOptions = {
      to: elementSettings.sticky,
      offset: elementSettings.sticky_offset,
      effectsOffset: elementSettings.sticky_effects_offset,
      classes: {
        sticky: 'elementor-sticky',
        stickyActive: 'elementor-sticky--active elementor-section--handles-inside',
        stickyEffects: 'elementor-sticky--effects',
        spacer: 'elementor-sticky__spacer'
      }
    },
        $wpAdminBar = elementorFrontend.elements.$wpAdminBar;

    if (elementSettings.sticky_parent) {
      stickyOptions.parent = '.elementor-widget-wrap';
    }

    if ($wpAdminBar.length && 'top' === elementSettings.sticky && 'fixed' === $wpAdminBar.css('position')) {
      stickyOptions.offset += $wpAdminBar.height();
    }

    this.$element.sticky(stickyOptions);
  },
  deactivate: function deactivate() {
    if (!this.isActive()) {
      return;
    }

    this.$element.sticky('destroy');
  },
  run: function run(refresh) {
    if (!this.getElementSettings('sticky')) {
      this.deactivate();
      return;
    }

    var currentDeviceMode = elementorFrontend.getCurrentDeviceMode(),
        activeDevices = this.getElementSettings('sticky_on');

    if (-1 !== activeDevices.indexOf(currentDeviceMode)) {
      if (true === refresh) {
        this.reactivate();
      } else if (!this.isActive()) {
        this.activate();
      }
    } else {
      this.deactivate();
    }
  },
  reactivate: function reactivate() {
    this.deactivate();
    this.activate();
  },
  onElementChange: function onElementChange(settingKey) {
    if (-1 !== ['sticky', 'sticky_on'].indexOf(settingKey)) {
      this.run(true);
    }

    if (-1 !== ['sticky_offset', 'sticky_effects_offset', 'sticky_parent'].indexOf(settingKey)) {
      this.reactivate();
    }
  },
  onInit: function onInit() {
    elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);
    this.run();
  },
  onDestroy: function onDestroy() {
    elementorModules.frontend.handlers.Base.prototype.onDestroy.apply(this, arguments);
    this.deactivate();
  }
});

module.exports = function ($scope) {
  new StickyHandler({
    $element: $scope
  });
};

/***/ }),
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _get2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _frontend = _interopRequireDefault(__webpack_require__(133));

var _frontend2 = _interopRequireDefault(__webpack_require__(151));

var _frontend3 = _interopRequireDefault(__webpack_require__(157));

var _frontend4 = _interopRequireDefault(__webpack_require__(159));

var _frontend5 = _interopRequireDefault(__webpack_require__(161));

var ElementorProFrontend = /*#__PURE__*/function (_elementorModules$Vie) {
  (0, _inherits2.default)(ElementorProFrontend, _elementorModules$Vie);

  function ElementorProFrontend() {
    (0, _classCallCheck2.default)(this, ElementorProFrontend);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ElementorProFrontend).apply(this, arguments));
  }

  (0, _createClass2.default)(ElementorProFrontend, [{
    key: "onInit",
    value: function onInit() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(ElementorProFrontend.prototype), "onInit", this).call(this);
      this.config = ElementorProFrontendConfig;
      this.modules = {};
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      jQuery(window).on('elementor/frontend/init', this.onElementorFrontendInit.bind(this));
    }
  }, {
    key: "initModules",
    value: function initModules() {
      var _this = this;

      var handlers = {
        animatedText: __webpack_require__(163),
        carousel: __webpack_require__(165),
        countdown: __webpack_require__(167),
        form: __webpack_require__(169),
        gallery: _frontend3.default,
        nav_menu: __webpack_require__(176),
        motionFX: _frontend2.default,
        popup: _frontend.default,
        posts: __webpack_require__(178),
        share_buttons: __webpack_require__(180),
        slides: __webpack_require__(182),
        social: __webpack_require__(184),
        sticky: __webpack_require__(186),
        themeBuilder: __webpack_require__(187),
        themeElements: __webpack_require__(190),
        woocommerce: __webpack_require__(192),
        tableOfContents: _frontend5.default,
        lottie: _frontend4.default
      };
      jQuery.each(handlers, function (moduleName, ModuleClass) {
        _this.modules[moduleName] = new ModuleClass();
      }); // TODO: BC Since 2.9.0

      this.modules.linkActions = {
        addAction: function addAction() {
          var _elementorFrontend$ut;

          (_elementorFrontend$ut = elementorFrontend.utils.urlActions).addAction.apply(_elementorFrontend$ut, arguments);
        }
      };
    }
  }, {
    key: "onElementorFrontendInit",
    value: function onElementorFrontendInit() {
      this.initModules();
    }
  }]);
  return ElementorProFrontend;
}(elementorModules.ViewModule);

window.elementorProFrontend = new ElementorProFrontend();

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _document = _interopRequireDefault(__webpack_require__(134));

var _formsAction = _interopRequireDefault(__webpack_require__(150));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_default).call(this));
    elementorFrontend.hooks.addAction('elementor/frontend/documents-manager/init-classes', _this.addDocumentClass);
    elementorFrontend.hooks.addAction('frontend/element_ready/form.default', _formsAction.default);
    elementorFrontend.on('components:init', function () {
      return _this.onElementorFrontendComponentsInit();
    });

    if (!elementorFrontend.isEditMode() && !elementorFrontend.isWPPreviewMode()) {
      _this.setViewsAndSessions();
    }

    return _this;
  }

  (0, _createClass2.default)(_default, [{
    key: "addDocumentClass",
    value: function addDocumentClass(documentsManager) {
      documentsManager.addDocumentClass('popup', _document.default);
    }
  }, {
    key: "setViewsAndSessions",
    value: function setViewsAndSessions() {
      var pageViews = elementorFrontend.storage.get('pageViews') || 0;
      elementorFrontend.storage.set('pageViews', pageViews + 1);
      var activeSession = elementorFrontend.storage.get('activeSession', {
        session: true
      });

      if (!activeSession) {
        elementorFrontend.storage.set('activeSession', true, {
          session: true
        });
        var sessions = elementorFrontend.storage.get('sessions') || 0;
        elementorFrontend.storage.set('sessions', sessions + 1);
      }
    }
  }, {
    key: "showPopup",
    value: function showPopup(settings) {
      var popup = elementorFrontend.documentsManager.documents[settings.id];

      if (!popup) {
        return;
      }

      var modal = popup.getModal();

      if (settings.toggle && modal.isVisible()) {
        modal.hide();
      } else {
        popup.showModal();
      }
    }
  }, {
    key: "closePopup",
    value: function closePopup(settings, event) {
      var popupID = jQuery(event.target).parents('[data-elementor-type="popup"]').data('elementorId');

      if (!popupID) {
        return;
      }

      var document = elementorFrontend.documentsManager.documents[popupID];
      document.getModal().hide();

      if (settings.do_not_show_again) {
        document.disable();
      }
    }
  }, {
    key: "onElementorFrontendComponentsInit",
    value: function onElementorFrontendComponentsInit() {
      elementorFrontend.utils.urlActions.addAction('popup:open', this.showPopup.bind(this));
      elementorFrontend.utils.urlActions.addAction('popup:close', this.closePopup.bind(this));
    }
  }]);
  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _get2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _triggers = _interopRequireDefault(__webpack_require__(135));

var _timing = _interopRequireDefault(__webpack_require__(142));

var _default = /*#__PURE__*/function (_elementorModules$fro) {
  (0, _inherits2.default)(_default, _elementorModules$fro);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_default).apply(this, arguments));
  }

  (0, _createClass2.default)(_default, [{
    key: "bindEvents",
    value: function bindEvents() {
      var openSelector = this.getDocumentSettings('open_selector');

      if (openSelector) {
        elementorFrontend.elements.$body.on('click', openSelector, this.showModal.bind(this));
      }
    }
  }, {
    key: "startTiming",
    value: function startTiming() {
      var timing = new _timing.default(this.getDocumentSettings('timing'), this);

      if (timing.check()) {
        this.initTriggers();
      }
    }
  }, {
    key: "initTriggers",
    value: function initTriggers() {
      this.triggers = new _triggers.default(this.getDocumentSettings('triggers'), this);
    }
  }, {
    key: "showModal",
    value: function showModal(avoidMultiple) {
      var settings = this.getDocumentSettings();

      if (!this.isEdit) {
        if (!elementorFrontend.isWPPreviewMode()) {
          if (this.getStorage('disable')) {
            return;
          }

          if (avoidMultiple && elementorProFrontend.modules.popup.popupPopped && settings.avoid_multiple_popups) {
            return;
          }
        } // A clean copy of the element without previous initializations and events


        this.$element = jQuery(this.elementHTML);
        this.elements.$elements = this.$element.find(this.getSettings('selectors.elements'));
      }

      var modal = this.getModal(),
          $closeButton = modal.getElements('closeButton');
      modal.setMessage(this.$element).show();

      if (!this.isEdit) {
        if (settings.close_button_delay) {
          $closeButton.hide();
          clearTimeout(this.closeButtonTimeout);
          this.closeButtonTimeout = setTimeout(function () {
            return $closeButton.show();
          }, settings.close_button_delay * 1000);
        }

        (0, _get2.default)((0, _getPrototypeOf2.default)(_default.prototype), "runElementsHandlers", this).call(this);
      }

      this.setEntranceAnimation();

      if (!settings.timing || !settings.timing.times_count) {
        this.countTimes();
      }

      elementorProFrontend.modules.popup.popupPopped = true;
    }
  }, {
    key: "setEntranceAnimation",
    value: function setEntranceAnimation() {
      var $widgetContent = this.getModal().getElements('widgetContent'),
          settings = this.getDocumentSettings(),
          newAnimation = elementorFrontend.getCurrentDeviceSetting(settings, 'entrance_animation');

      if (this.currentAnimation) {
        $widgetContent.removeClass(this.currentAnimation);
      }

      this.currentAnimation = newAnimation;

      if (!newAnimation) {
        return;
      }

      var animationDuration = settings.entrance_animation_duration.size;
      $widgetContent.addClass(newAnimation);
      setTimeout(function () {
        return $widgetContent.removeClass(newAnimation);
      }, animationDuration * 1000);
    }
  }, {
    key: "setExitAnimation",
    value: function setExitAnimation() {
      var _this = this;

      var modal = this.getModal(),
          settings = this.getDocumentSettings(),
          $widgetContent = modal.getElements('widgetContent'),
          newAnimation = elementorFrontend.getCurrentDeviceSetting(settings, 'exit_animation'),
          animationDuration = newAnimation ? settings.entrance_animation_duration.size : 0;
      setTimeout(function () {
        if (newAnimation) {
          $widgetContent.removeClass(newAnimation + ' reverse');
        }

        if (!_this.isEdit) {
          _this.$element.remove();

          modal.getElements('widget').hide();
        }
      }, animationDuration * 1000);

      if (newAnimation) {
        $widgetContent.addClass(newAnimation + ' reverse');
      }
    }
  }, {
    key: "initModal",
    value: function initModal() {
      var _this2 = this;

      var modal;

      this.getModal = function () {
        if (!modal) {
          var settings = _this2.getDocumentSettings(),
              id = _this2.getSettings('id'),
              triggerPopupEvent = function triggerPopupEvent(eventType) {
            return elementorFrontend.elements.$document.trigger('elementor/popup/' + eventType, id, _this2);
          };

          var classes = 'elementor-popup-modal';

          if (settings.classes) {
            classes += ' ' + settings.classes;
          }

          modal = elementorFrontend.getDialogsManager().createWidget('lightbox', {
            id: 'elementor-popup-modal-' + id,
            className: classes,
            closeButton: true,
            closeButtonClass: 'eicon-close',
            preventScroll: settings.prevent_scroll,
            onShow: function onShow() {
              return triggerPopupEvent('show');
            },
            onHide: function onHide() {
              return triggerPopupEvent('hide');
            },
            effects: {
              hide: function hide() {
                if (settings.timing && settings.timing.times_count) {
                  _this2.countTimes();
                }

                _this2.setExitAnimation();
              },
              show: 'show'
            },
            hide: {
              auto: !!settings.close_automatically,
              autoDelay: settings.close_automatically * 1000,
              onBackgroundClick: !settings.prevent_close_on_background_click,
              onOutsideClick: !settings.prevent_close_on_background_click,
              onEscKeyPress: !settings.prevent_close_on_esc_key,
              ignore: '.flatpickr-calendar'
            },
            position: {
              enable: false
            }
          });
          modal.getElements('widgetContent').addClass('animated');
          var $closeButton = modal.getElements('closeButton');

          if (_this2.isEdit) {
            $closeButton.off('click');

            modal.hide = function () {};
          }

          _this2.setCloseButtonPosition();
        }

        return modal;
      };
    }
  }, {
    key: "setCloseButtonPosition",
    value: function setCloseButtonPosition() {
      var modal = this.getModal(),
          closeButtonPosition = this.getDocumentSettings('close_button_position'),
          $closeButton = modal.getElements('closeButton');
      $closeButton.appendTo(modal.getElements('outside' === closeButtonPosition ? 'widget' : 'widgetContent'));
    }
  }, {
    key: "disable",
    value: function disable() {
      this.setStorage('disable', true);
    }
  }, {
    key: "setStorage",
    value: function setStorage(key, value, options) {
      elementorFrontend.storage.set("popup_".concat(this.getSettings('id'), "_").concat(key), value, options);
    }
  }, {
    key: "getStorage",
    value: function getStorage(key, options) {
      return elementorFrontend.storage.get("popup_".concat(this.getSettings('id'), "_").concat(key), options);
    }
  }, {
    key: "countTimes",
    value: function countTimes() {
      var displayTimes = this.getStorage('times') || 0;
      this.setStorage('times', displayTimes + 1);
    }
  }, {
    key: "runElementsHandlers",
    value: function runElementsHandlers() {}
  }, {
    key: "onInit",
    value: function onInit() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(_default.prototype), "onInit", this).call(this);
      this.initModal();

      if (this.isEdit) {
        this.showModal();
        return;
      }

      this.$element.show().remove();
      this.elementHTML = this.$element[0].outerHTML;

      if (elementorFrontend.isEditMode()) {
        return;
      }

      if (elementorFrontend.isWPPreviewMode() && elementorFrontend.config.post.id === this.getSettings('id')) {
        this.showModal();
        return;
      }

      this.startTiming();
    }
  }, {
    key: "onSettingsChange",
    value: function onSettingsChange(model) {
      var changedKey = Object.keys(model.changed)[0];

      if (-1 !== changedKey.indexOf('entrance_animation')) {
        this.setEntranceAnimation();
      }

      if ('exit_animation' === changedKey) {
        this.setExitAnimation();
      }

      if ('close_button_position' === changedKey) {
        this.setCloseButtonPosition();
      }
    }
  }]);
  return _default;
}(elementorModules.frontend.Document);

exports.default = _default;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _pageLoad = _interopRequireDefault(__webpack_require__(136));

var _scrolling = _interopRequireDefault(__webpack_require__(137));

var _scrollingTo = _interopRequireDefault(__webpack_require__(138));

var _click = _interopRequireDefault(__webpack_require__(139));

var _inactivity = _interopRequireDefault(__webpack_require__(140));

var _exitIntent = _interopRequireDefault(__webpack_require__(141));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  function _default(settings, document) {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_default).call(this, settings));
    _this.document = document;
    _this.triggers = [];
    _this.triggerClasses = {
      page_load: _pageLoad.default,
      scrolling: _scrolling.default,
      scrolling_to: _scrollingTo.default,
      click: _click.default,
      inactivity: _inactivity.default,
      exit_intent: _exitIntent.default
    };

    _this.runTriggers();

    return _this;
  }

  (0, _createClass2.default)(_default, [{
    key: "runTriggers",
    value: function runTriggers() {
      var _this2 = this;

      var settings = this.getSettings();
      jQuery.each(this.triggerClasses, function (key, TriggerClass) {
        if (!settings[key]) {
          return;
        }

        var trigger = new TriggerClass(settings, function () {
          return _this2.onTriggerFired();
        });
        trigger.run();

        _this2.triggers.push(trigger);
      });
    }
  }, {
    key: "destroyTriggers",
    value: function destroyTriggers() {
      this.triggers.forEach(function (trigger) {
        return trigger.destroy();
      });
      this.triggers = [];
    }
  }, {
    key: "onTriggerFired",
    value: function onTriggerFired() {
      this.document.showModal(true);
      this.destroyTriggers();
    }
  }]);
  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _base = _interopRequireDefault(__webpack_require__(12));

var _default = /*#__PURE__*/function (_BaseTrigger) {
  (0, _inherits2.default)(_default, _BaseTrigger);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_default).apply(this, arguments));
  }

  (0, _createClass2.default)(_default, [{
    key: "getName",
    value: function getName() {
      return 'page_load';
    }
  }, {
    key: "run",
    value: function run() {
      this.timeout = setTimeout(this.callback, this.getTriggerSetting('delay') * 1000);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      clearTimeout(this.timeout);
    }
  }]);
  return _default;
}(_base.default);

exports.default = _default;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(1));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(7));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _base = _interopRequireDefault(__webpack_require__(12));

var _default = /*#__PURE__*/function (_BaseTrigger) {
  (0, _inherits2.default)(_default, _BaseTrigger);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.checkScroll = _this.checkScroll.bind((0, _assertThisInitialized2.default)(_this));
    _this.lastScrollOffset = 0;
    return _this;
  }

  (0, _createClass2.default)(_default, [{
    key: "getName",
    value: function getName() {
      return 'scrolling';
    }
  }, {
    key: "checkScroll",
    value: function checkScroll() {
      var scrollDirection = scrollY > this.lastScrollOffset ? 'down' : 'up',
          requestedDirection = this.getTriggerSetting('direction');
      this.lastScrollOffset = scrollY;

      if (scrollDirection !== requestedDirection) {
        return;
      }

      if ('up' === scrollDirection) {
        this.callback();
        return;
      }

      var fullScroll = elementorFrontend.elements.$document.height() - innerHeight,
          scrollPercent = scrollY / fullScroll * 100;

      if (scrollPercent >= this.getTriggerSetting('offset')) {
        this.callback();
      }
    }
  }, {
    key: "run",
    value: function run() {
      elementorFrontend.elements.$window.on('scroll', this.checkScroll);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      elementorFrontend.elements.$window.off('scroll', this.checkScroll);
    }
  }]);
  return _default;
}(_base.default);

exports.default = _default;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _base = _interopRequireDefault(__webpack_require__(12));

var _default = /*#__PURE__*/function (_BaseTrigger) {
  (0, _inherits2.default)(_default, _BaseTrigger);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_default).apply(this, arguments));
  }

  (0, _createClass2.default)(_default, [{
    key: "getName",
    value: function getName() {
      return 'scrolling_to';
    }
  }, {
    key: "run",
    value: function run() {
      var $targetElement;

      try {
        $targetElement = jQuery(this.getTriggerSetting('selector'));
      } catch (e) {
        return;
      }

      this.waypointInstance = elementorFrontend.waypoint($targetElement, this.callback)[0];
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.waypointInstance) {
        this.waypointInstance.destroy();
      }
    }
  }]);
  return _default;
}(_base.default);

exports.default = _default;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(1));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(7));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _base = _interopRequireDefault(__webpack_require__(12));

var _default = /*#__PURE__*/function (_BaseTrigger) {
  (0, _inherits2.default)(_default, _BaseTrigger);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.checkClick = _this.checkClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.clicksCount = 0;
    return _this;
  }

  (0, _createClass2.default)(_default, [{
    key: "getName",
    value: function getName() {
      return 'click';
    }
  }, {
    key: "checkClick",
    value: function checkClick() {
      this.clicksCount++;

      if (this.clicksCount === this.getTriggerSetting('times')) {
        this.callback();
      }
    }
  }, {
    key: "run",
    value: function run() {
      elementorFrontend.elements.$body.on('click', this.checkClick);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      elementorFrontend.elements.$body.off('click', this.checkClick);
    }
  }]);
  return _default;
}(_base.default);

exports.default = _default;

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(1));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(7));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _base = _interopRequireDefault(__webpack_require__(12));

var _default = /*#__PURE__*/function (_BaseTrigger) {
  (0, _inherits2.default)(_default, _BaseTrigger);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.restartTimer = _this.restartTimer.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(_default, [{
    key: "getName",
    value: function getName() {
      return 'inactivity';
    }
  }, {
    key: "run",
    value: function run() {
      this.startTimer();
      elementorFrontend.elements.$document.on('keypress mousemove', this.restartTimer);
    }
  }, {
    key: "startTimer",
    value: function startTimer() {
      this.timeOut = setTimeout(this.callback, this.getTriggerSetting('time') * 1000);
    }
  }, {
    key: "clearTimer",
    value: function clearTimer() {
      clearTimeout(this.timeOut);
    }
  }, {
    key: "restartTimer",
    value: function restartTimer() {
      this.clearTimer();
      this.startTimer();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.clearTimer();
      elementorFrontend.elements.$document.off('keypress mousemove', this.restartTimer);
    }
  }]);
  return _default;
}(_base.default);

exports.default = _default;

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(1));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(7));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _base = _interopRequireDefault(__webpack_require__(12));

var _default = /*#__PURE__*/function (_BaseTrigger) {
  (0, _inherits2.default)(_default, _BaseTrigger);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.detectExitIntent = _this.detectExitIntent.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(_default, [{
    key: "getName",
    value: function getName() {
      return 'exit_intent';
    }
  }, {
    key: "detectExitIntent",
    value: function detectExitIntent(event) {
      if (event.clientY <= 0) {
        this.callback();
      }
    }
  }, {
    key: "run",
    value: function run() {
      elementorFrontend.elements.$window.on('mouseleave', this.detectExitIntent);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      elementorFrontend.elements.$window.off('mouseleave', this.detectExitIntent);
    }
  }]);
  return _default;
}(_base.default);

exports.default = _default;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _pageViews = _interopRequireDefault(__webpack_require__(143));

var _sessions = _interopRequireDefault(__webpack_require__(144));

var _url = _interopRequireDefault(__webpack_require__(145));

var _sources = _interopRequireDefault(__webpack_require__(146));

var _loggedIn = _interopRequireDefault(__webpack_require__(147));

var _devices = _interopRequireDefault(__webpack_require__(148));

var _times = _interopRequireDefault(__webpack_require__(149));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  function _default(settings, document) {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_default).call(this, settings));
    _this.document = document;
    _this.timingClasses = {
      page_views: _pageViews.default,
      sessions: _sessions.default,
      url: _url.default,
      sources: _sources.default,
      logged_in: _loggedIn.default,
      devices: _devices.default,
      times: _times.default
    };
    return _this;
  }

  (0, _createClass2.default)(_default, [{
    key: "check",
    value: function check() {
      var _this2 = this;

      var settings = this.getSettings();
      var checkPassed = true;
      jQuery.each(this.timingClasses, function (key, TimingClass) {
        if (!settings[key]) {
          return;
        }

        var timing = new TimingClass(settings, _this2.document);

        if (!timing.check()) {
          checkPassed = false;
        }
      });
      return checkPassed;
    }
  }]);
  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _base = _interopRequireDefault(__webpack_require__(10));

var _default = /*#__PURE__*/function (_BaseTiming) {
  (0, _inherits2.default)(_default, _BaseTiming);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_default).apply(this, arguments));
  }

  (0, _createClass2.default)(_default, [{
    key: "getName",
    value: function getName() {
      return 'page_views';
    }
  }, {
    key: "check",
    value: function check() {
      var pageViews = elementorFrontend.storage.get('pageViews'),
          name = this.getName();
      var initialPageViews = this.document.getStorage(name + '_initialPageViews');

      if (!initialPageViews) {
        this.document.setStorage(name + '_initialPageViews', pageViews);
        initialPageViews = pageViews;
      }

      return pageViews - initialPageViews >= this.getTimingSetting('views');
    }
  }]);
  return _default;
}(_base.default);

exports.default = _default;

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _base = _interopRequireDefault(__webpack_require__(10));

var _default = /*#__PURE__*/function (_BaseTiming) {
  (0, _inherits2.default)(_default, _BaseTiming);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_default).apply(this, arguments));
  }

  (0, _createClass2.default)(_default, [{
    key: "getName",
    value: function getName() {
      return 'sessions';
    }
  }, {
    key: "check",
    value: function check() {
      var sessions = elementorFrontend.storage.get('sessions'),
          name = this.getName();
      var initialSessions = this.document.getStorage(name + '_initialSessions');

      if (!initialSessions) {
        this.document.setStorage(name + '_initialSessions', sessions);
        initialSessions = sessions;
      }

      return sessions - initialSessions >= this.getTimingSetting('sessions');
    }
  }]);
  return _default;
}(_base.default);

exports.default = _default;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _base = _interopRequireDefault(__webpack_require__(10));

var _default = /*#__PURE__*/function (_BaseTiming) {
  (0, _inherits2.default)(_default, _BaseTiming);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_default).apply(this, arguments));
  }

  (0, _createClass2.default)(_default, [{
    key: "getName",
    value: function getName() {
      return 'url';
    }
  }, {
    key: "check",
    value: function check() {
      var url = this.getTimingSetting('url'),
          action = this.getTimingSetting('action'),
          referrer = document.referrer;

      if ('regex' !== action) {
        return 'hide' === action ^ -1 !== referrer.indexOf(url);
      }

      var regexp;

      try {
        regexp = new RegExp(url);
      } catch (e) {
        return false;
      }

      return regexp.test(referrer);
    }
  }]);
  return _default;
}(_base.default);

exports.default = _default;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _base = _interopRequireDefault(__webpack_require__(10));

var _default = /*#__PURE__*/function (_BaseTiming) {
  (0, _inherits2.default)(_default, _BaseTiming);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_default).apply(this, arguments));
  }

  (0, _createClass2.default)(_default, [{
    key: "getName",
    value: function getName() {
      return 'sources';
    }
  }, {
    key: "check",
    value: function check() {
      var sources = this.getTimingSetting('sources');

      if (3 === sources.length) {
        return true;
      }

      var referrer = document.referrer.replace(/https?:\/\/(?:www\.)?/, ''),
          isInternal = 0 === referrer.indexOf(location.host.replace('www.', ''));

      if (isInternal) {
        return -1 !== sources.indexOf('internal');
      }

      if (-1 !== sources.indexOf('external')) {
        return true;
      }

      if (-1 !== sources.indexOf('search')) {
        return /\.(google|yahoo|bing|yandex|baidu)\./.test(referrer);
      }

      return false;
    }
  }]);
  return _default;
}(_base.default);

exports.default = _default;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _base = _interopRequireDefault(__webpack_require__(10));

var _default = /*#__PURE__*/function (_BaseTiming) {
  (0, _inherits2.default)(_default, _BaseTiming);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_default).apply(this, arguments));
  }

  (0, _createClass2.default)(_default, [{
    key: "getName",
    value: function getName() {
      return 'logged_in';
    }
  }, {
    key: "check",
    value: function check() {
      var userConfig = elementorFrontend.config.user;

      if (!userConfig) {
        return true;
      }

      if ('all' === this.getTimingSetting('users')) {
        return false;
      }

      var userRolesInHideList = this.getTimingSetting('roles').filter(function (role) {
        return -1 !== userConfig.roles.indexOf(role);
      });
      return !userRolesInHideList.length;
    }
  }]);
  return _default;
}(_base.default);

exports.default = _default;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _base = _interopRequireDefault(__webpack_require__(10));

var _default = /*#__PURE__*/function (_BaseTiming) {
  (0, _inherits2.default)(_default, _BaseTiming);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_default).apply(this, arguments));
  }

  (0, _createClass2.default)(_default, [{
    key: "getName",
    value: function getName() {
      return 'devices';
    }
  }, {
    key: "check",
    value: function check() {
      return -1 !== this.getTimingSetting('devices').indexOf(elementorFrontend.getCurrentDeviceMode());
    }
  }]);
  return _default;
}(_base.default);

exports.default = _default;

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _base = _interopRequireDefault(__webpack_require__(10));

var _default = /*#__PURE__*/function (_BaseTiming) {
  (0, _inherits2.default)(_default, _BaseTiming);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_default).apply(this, arguments));
  }

  (0, _createClass2.default)(_default, [{
    key: "getName",
    value: function getName() {
      return 'times';
    }
  }, {
    key: "check",
    value: function check() {
      var displayTimes = this.document.getStorage('times') || 0;
      return this.getTimingSetting('times') > displayTimes;
    }
  }]);
  return _default;
}(_base.default);

exports.default = _default;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PopupFormActions = elementorModules.frontend.handlers.Base.extend({
  getDefaultSettings: function getDefaultSettings() {
    return {
      selectors: {
        form: '.elementor-form'
      }
    };
  },
  getDefaultElements: function getDefaultElements() {
    var selectors = this.getSettings('selectors'),
        elements = {};
    elements.$form = this.$element.find(selectors.form);
    return elements;
  },
  bindEvents: function bindEvents() {
    this.elements.$form.on('submit_success', this.handleFormAction);
  },
  handleFormAction: function handleFormAction(event, response) {
    if ('undefined' === typeof response.data.popup) {
      return;
    }

    var popupSettings = response.data.popup;

    if ('open' === popupSettings.action) {
      return elementorProFrontend.modules.popup.showPopup(popupSettings);
    }

    setTimeout(function () {
      return elementorProFrontend.modules.popup.closePopup(popupSettings, event);
    }, 1000);
  }
});

module.exports = function ($scope) {
  new PopupFormActions({
    $element: $scope
  });
};

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _handler = _interopRequireDefault(__webpack_require__(152));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_default).call(this));
    elementorFrontend.hooks.addAction('frontend/element_ready/global', function ($element) {
      elementorFrontend.elementsHandler.addHandler(_handler.default, {
        $element: $element
      });
    });
    return _this;
  }

  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(8));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _get3 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _motionFx = _interopRequireDefault(__webpack_require__(153));

var _default = /*#__PURE__*/function (_elementorModules$fro) {
  (0, _inherits2.default)(_default, _elementorModules$fro);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_default).apply(this, arguments));
  }

  (0, _createClass2.default)(_default, [{
    key: "__construct",
    value: function __construct() {
      var _get2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_get2 = (0, _get3.default)((0, _getPrototypeOf2.default)(_default.prototype), "__construct", this)).call.apply(_get2, [this].concat(args));

      this.toggle = elementorFrontend.debounce(this.toggle, 200);
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      elementorFrontend.elements.$window.on('resize', this.toggle);
    }
  }, {
    key: "unbindEvents",
    value: function unbindEvents() {
      elementorFrontend.elements.$window.off('resize', this.toggle);
    }
  }, {
    key: "initEffects",
    value: function initEffects() {
      this.effects = {
        translateY: {
          interaction: 'scroll',
          actions: ['translateY']
        },
        translateX: {
          interaction: 'scroll',
          actions: ['translateX']
        },
        rotateZ: {
          interaction: 'scroll',
          actions: ['rotateZ']
        },
        scale: {
          interaction: 'scroll',
          actions: ['scale']
        },
        opacity: {
          interaction: 'scroll',
          actions: ['opacity']
        },
        blur: {
          interaction: 'scroll',
          actions: ['blur']
        },
        mouseTrack: {
          interaction: 'mouseMove',
          actions: ['translateXY']
        },
        tilt: {
          interaction: 'mouseMove',
          actions: ['tilt']
        }
      };
    }
  }, {
    key: "prepareOptions",
    value: function prepareOptions(name) {
      var _this = this;

      var elementSettings = this.getElementSettings(),
          type = 'motion_fx' === name ? 'element' : 'background',
          interactions = {};
      jQuery.each(elementSettings, function (key, value) {
        var keyRegex = new RegExp('^' + name + '_(.+?)_effect'),
            keyMatches = key.match(keyRegex);

        if (!keyMatches || !value) {
          return;
        }

        var options = {},
            effectName = keyMatches[1];
        jQuery.each(elementSettings, function (subKey, subValue) {
          var subKeyRegex = new RegExp(name + '_' + effectName + '_(.+)'),
              subKeyMatches = subKey.match(subKeyRegex);

          if (!subKeyMatches) {
            return;
          }

          var subFieldName = subKeyMatches[1];

          if ('effect' === subFieldName) {
            return;
          }

          if ('object' === (0, _typeof2.default)(subValue)) {
            subValue = Object.keys(subValue.sizes).length ? subValue.sizes : subValue.size;
          }

          options[subKeyMatches[1]] = subValue;
        });
        var effect = _this.effects[effectName],
            interactionName = effect.interaction;

        if (!interactions[interactionName]) {
          interactions[interactionName] = {};
        }

        effect.actions.forEach(function (action) {
          return interactions[interactionName][action] = options;
        });
      });
      var $element = this.$element,
          $dimensionsElement;
      var elementType = this.getElementType();

      if ('element' === type && 'section' !== elementType) {
        $dimensionsElement = $element;
        var childElementSelector;

        if ('column' === elementType) {
          childElementSelector = '.elementor-column-wrap';
        } else {
          childElementSelector = '.elementor-widget-container';
        }

        $element = $element.find('> ' + childElementSelector);
      }

      var options = {
        type: type,
        interactions: interactions,
        $element: $element,
        $dimensionsElement: $dimensionsElement,
        refreshDimensions: this.isEdit,
        range: elementSettings[name + '_range'],
        classes: {
          element: 'elementor-motion-effects-element',
          parent: 'elementor-motion-effects-parent',
          backgroundType: 'elementor-motion-effects-element-type-background',
          container: 'elementor-motion-effects-container',
          layer: 'elementor-motion-effects-layer',
          perspective: 'elementor-motion-effects-perspective'
        }
      };

      if (!options.range && 'fixed' === this.getCurrentDeviceSetting('_position')) {
        options.range = 'page';
      }

      if ('fixed' === this.getCurrentDeviceSetting('_position')) {
        options.isFixedPosition = true;
      }

      if ('background' === type && 'column' === this.getElementType()) {
        options.addBackgroundLayerTo = ' > .elementor-element-populated';
      }

      return options;
    }
  }, {
    key: "activate",
    value: function activate(name) {
      var options = this.prepareOptions(name);

      if (jQuery.isEmptyObject(options.interactions)) {
        return;
      }

      this[name] = new _motionFx.default(options);
    }
  }, {
    key: "deactivate",
    value: function deactivate(name) {
      if (this[name]) {
        this[name].destroy();
        delete this[name];
      }
    }
  }, {
    key: "toggle",
    value: function toggle() {
      var _this2 = this;

      var currentDeviceMode = elementorFrontend.getCurrentDeviceMode(),
          elementSettings = this.getElementSettings();
      ['motion_fx', 'background_motion_fx'].forEach(function (name) {
        var devices = elementSettings[name + '_devices'],
            isCurrentModeActive = !devices || -1 !== devices.indexOf(currentDeviceMode);

        if (isCurrentModeActive && (elementSettings[name + '_motion_fx_scrolling'] || elementSettings[name + '_motion_fx_mouse'])) {
          if (_this2[name]) {
            _this2.refreshInstance(name);
          } else {
            _this2.activate(name);
          }
        } else {
          _this2.deactivate(name);
        }
      });
    }
  }, {
    key: "refreshInstance",
    value: function refreshInstance(instanceName) {
      var instance = this[instanceName];

      if (!instance) {
        return;
      }

      var preparedOptions = this.prepareOptions(instanceName);
      instance.setSettings(preparedOptions);
      instance.refresh();
    }
  }, {
    key: "onInit",
    value: function onInit() {
      (0, _get3.default)((0, _getPrototypeOf2.default)(_default.prototype), "onInit", this).call(this);
      this.initEffects();
      this.toggle();
    }
  }, {
    key: "onElementChange",
    value: function onElementChange(propertyName) {
      var _this3 = this;

      if (/motion_fx_((scrolling)|(mouse)|(devices))$/.test(propertyName)) {
        this.toggle();
        return;
      }

      var propertyMatches = propertyName.match('.*?motion_fx');

      if (propertyMatches) {
        var instanceName = propertyMatches[0];
        this.refreshInstance(instanceName);

        if (!this[instanceName]) {
          this.activate(instanceName);
        }
      }

      if (/^_position/.test(propertyName)) {
        ['motion_fx', 'background_motion_fx'].forEach(function (instanceName) {
          _this3.refreshInstance(instanceName);
        });
      }
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      var _this4 = this;

      (0, _get3.default)((0, _getPrototypeOf2.default)(_default.prototype), "onDestroy", this).call(this);
      ['motion_fx', 'background_motion_fx'].forEach(function (name) {
        _this4.deactivate(name);
      });
    }
  }]);
  return _default;
}(elementorModules.frontend.handlers.Base);

exports.default = _default;

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _get2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _scroll = _interopRequireDefault(__webpack_require__(154));

var _mouseMove = _interopRequireDefault(__webpack_require__(155));

var _actions = _interopRequireDefault(__webpack_require__(156));

var _default = /*#__PURE__*/function (_elementorModules$Vie) {
  (0, _inherits2.default)(_default, _elementorModules$Vie);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_default).apply(this, arguments));
  }

  (0, _createClass2.default)(_default, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        type: 'element',
        $element: null,
        $dimensionsElement: null,
        addBackgroundLayerTo: null,
        interactions: {},
        refreshDimensions: false,
        range: 'viewport',
        classes: {
          element: 'motion-fx-element',
          parent: 'motion-fx-parent',
          backgroundType: 'motion-fx-element-type-background',
          container: 'motion-fx-container',
          layer: 'motion-fx-layer',
          perspective: 'motion-fx-perspective'
        }
      };
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      this.onWindowResize = this.onWindowResize.bind(this);
      elementorFrontend.elements.$window.on('resize', this.onWindowResize);
    }
  }, {
    key: "unbindEvents",
    value: function unbindEvents() {
      elementorFrontend.elements.$window.off('resize', this.onWindowResize);
    }
  }, {
    key: "addBackgroundLayer",
    value: function addBackgroundLayer() {
      var settings = this.getSettings();
      this.elements.$motionFXContainer = jQuery('<div>', {
        class: settings.classes.container
      });
      this.elements.$motionFXLayer = jQuery('<div>', {
        class: settings.classes.layer
      });
      this.updateBackgroundLayerSize();
      this.elements.$motionFXContainer.prepend(this.elements.$motionFXLayer);
      var $addBackgroundLayerTo = settings.addBackgroundLayerTo ? this.$element.find(settings.addBackgroundLayerTo) : this.$element;
      $addBackgroundLayerTo.prepend(this.elements.$motionFXContainer);
    }
  }, {
    key: "removeBackgroundLayer",
    value: function removeBackgroundLayer() {
      this.elements.$motionFXContainer.remove();
    }
  }, {
    key: "updateBackgroundLayerSize",
    value: function updateBackgroundLayerSize() {
      var settings = this.getSettings(),
          speed = {
        x: 0,
        y: 0
      },
          mouseInteraction = settings.interactions.mouseMove,
          scrollInteraction = settings.interactions.scroll;

      if (mouseInteraction && mouseInteraction.translateXY) {
        speed.x = mouseInteraction.translateXY.speed * 10;
        speed.y = mouseInteraction.translateXY.speed * 10;
      }

      if (scrollInteraction) {
        if (scrollInteraction.translateX) {
          speed.x = scrollInteraction.translateX.speed * 10;
        }

        if (scrollInteraction.translateY) {
          speed.y = scrollInteraction.translateY.speed * 10;
        }
      }

      this.elements.$motionFXLayer.css({
        width: 100 + speed.x + '%',
        height: 100 + speed.y + '%'
      });
    }
  }, {
    key: "defineDimensions",
    value: function defineDimensions() {
      var $dimensionsElement = this.getSettings('$dimensionsElement') || this.$element,
          elementOffset = $dimensionsElement.offset();
      var dimensions = {
        elementHeight: $dimensionsElement.outerHeight(),
        elementWidth: $dimensionsElement.outerWidth(),
        elementTop: elementOffset.top,
        elementLeft: elementOffset.left
      };
      dimensions.elementRange = dimensions.elementHeight + innerHeight;
      this.setSettings('dimensions', dimensions);

      if ('background' === this.getSettings('type')) {
        this.defineBackgroundLayerDimensions();
      }
    }
  }, {
    key: "defineBackgroundLayerDimensions",
    value: function defineBackgroundLayerDimensions() {
      var dimensions = this.getSettings('dimensions');
      dimensions.layerHeight = this.elements.$motionFXLayer.height();
      dimensions.layerWidth = this.elements.$motionFXLayer.width();
      dimensions.movableX = dimensions.layerWidth - dimensions.elementWidth;
      dimensions.movableY = dimensions.layerHeight - dimensions.elementHeight;
      this.setSettings('dimensions', dimensions);
    }
  }, {
    key: "initInteractionsTypes",
    value: function initInteractionsTypes() {
      this.interactionsTypes = {
        scroll: _scroll.default,
        mouseMove: _mouseMove.default
      };
    }
  }, {
    key: "prepareSpecialActions",
    value: function prepareSpecialActions() {
      var settings = this.getSettings(),
          hasTiltEffect = !!(settings.interactions.mouseMove && settings.interactions.mouseMove.tilt);
      this.elements.$parent.toggleClass(settings.classes.perspective, hasTiltEffect);
    }
  }, {
    key: "cleanSpecialActions",
    value: function cleanSpecialActions() {
      var settings = this.getSettings();
      this.elements.$parent.removeClass(settings.classes.perspective);
    }
  }, {
    key: "runInteractions",
    value: function runInteractions() {
      var _this = this;

      var settings = this.getSettings();
      this.prepareSpecialActions();
      jQuery.each(settings.interactions, function (interactionName, actions) {
        _this.interactions[interactionName] = new _this.interactionsTypes[interactionName]({
          motionFX: _this,
          callback: function callback() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            jQuery.each(actions, function (actionName, actionData) {
              var _this$actions;

              return (_this$actions = _this.actions).runAction.apply(_this$actions, [actionName, actionData].concat(args));
            });
          }
        });

        _this.interactions[interactionName].run();
      });
    }
  }, {
    key: "destroyInteractions",
    value: function destroyInteractions() {
      this.cleanSpecialActions();
      jQuery.each(this.interactions, function (interactionName, interaction) {
        return interaction.destroy();
      });
      this.interactions = {};
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.actions.setSettings(this.getSettings());

      if ('background' === this.getSettings('type')) {
        this.updateBackgroundLayerSize();
        this.defineBackgroundLayerDimensions();
      }

      this.actions.refresh();
      this.destroyInteractions();
      this.runInteractions();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.destroyInteractions();
      this.actions.refresh();
      var settings = this.getSettings();
      this.$element.removeClass(settings.classes.element);
      this.elements.$parent.removeClass(settings.classes.parent);

      if ('background' === settings.type) {
        this.$element.removeClass(settings.classes.backgroundType);
        this.removeBackgroundLayer();
      }
    }
  }, {
    key: "onInit",
    value: function onInit() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(_default.prototype), "onInit", this).call(this);
      var settings = this.getSettings();
      this.$element = settings.$element;
      this.elements.$parent = this.$element.parent();
      this.$element.addClass(settings.classes.element);
      this.elements.$parent = this.$element.parent();
      this.elements.$parent.addClass(settings.classes.parent);

      if ('background' === settings.type) {
        this.$element.addClass(settings.classes.backgroundType);
        this.addBackgroundLayer();
      }

      this.defineDimensions();
      settings.$targetElement = 'element' === settings.type ? this.$element : this.elements.$motionFXLayer;
      this.interactions = {};
      this.actions = new _actions.default(settings);
      this.initInteractionsTypes();
      this.runInteractions();
    }
  }, {
    key: "onWindowResize",
    value: function onWindowResize() {
      this.defineDimensions();
    }
  }]);
  return _default;
}(elementorModules.ViewModule);

exports.default = _default;

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _base = _interopRequireDefault(__webpack_require__(19));

var _scroll = _interopRequireDefault(__webpack_require__(17));

var _default = /*#__PURE__*/function (_BaseInteraction) {
  (0, _inherits2.default)(_default, _BaseInteraction);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_default).apply(this, arguments));
  }

  (0, _createClass2.default)(_default, [{
    key: "run",
    value: function run() {
      if (pageYOffset === this.windowScrollTop) {
        return false;
      }

      this.onScrollMovement();
      this.windowScrollTop = pageYOffset;
    }
  }, {
    key: "onScrollMovement",
    value: function onScrollMovement() {
      this.updateMotionFxDimensions();
      this.updateAnimation();
    }
  }, {
    key: "updateMotionFxDimensions",
    value: function updateMotionFxDimensions() {
      var motionFXSettings = this.motionFX.getSettings();

      if (motionFXSettings.refreshDimensions) {
        this.motionFX.defineDimensions();
      }
    }
  }, {
    key: "updateAnimation",
    value: function updateAnimation() {
      var passedRangePercents;

      if ('page' === this.motionFX.getSettings('range')) {
        passedRangePercents = _scroll.default.getPageScrollPercentage();
      } else if (this.motionFX.getSettings('isFixedPosition')) {
        passedRangePercents = _scroll.default.getPageScrollPercentage({}, window.innerHeight);
      } else {
        passedRangePercents = _scroll.default.getElementViewportPercentage(this.motionFX.elements.$parent);
      }

      this.runCallback(passedRangePercents);
    }
  }]);
  return _default;
}(_base.default);

exports.default = _default;

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _get2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _base = _interopRequireDefault(__webpack_require__(19));

var MouseMoveInteraction = /*#__PURE__*/function (_BaseInteraction) {
  (0, _inherits2.default)(MouseMoveInteraction, _BaseInteraction);

  function MouseMoveInteraction() {
    (0, _classCallCheck2.default)(this, MouseMoveInteraction);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MouseMoveInteraction).apply(this, arguments));
  }

  (0, _createClass2.default)(MouseMoveInteraction, [{
    key: "bindEvents",
    value: function bindEvents() {
      if (!MouseMoveInteraction.mouseTracked) {
        elementorFrontend.elements.$window.on('mousemove', MouseMoveInteraction.updateMousePosition);
        MouseMoveInteraction.mouseTracked = true;
      }
    }
  }, {
    key: "run",
    value: function run() {
      var mousePosition = MouseMoveInteraction.mousePosition,
          oldMousePosition = this.oldMousePosition;

      if (oldMousePosition.x === mousePosition.x && oldMousePosition.y === mousePosition.y) {
        return;
      }

      this.oldMousePosition = {
        x: mousePosition.x,
        y: mousePosition.y
      };
      var passedPercentsX = 100 / innerWidth * mousePosition.x,
          passedPercentsY = 100 / innerHeight * mousePosition.y;
      this.runCallback(passedPercentsX, passedPercentsY);
    }
  }, {
    key: "onInit",
    value: function onInit() {
      this.oldMousePosition = {};
      (0, _get2.default)((0, _getPrototypeOf2.default)(MouseMoveInteraction.prototype), "onInit", this).call(this);
    }
  }]);
  return MouseMoveInteraction;
}(_base.default);

exports.default = MouseMoveInteraction;
MouseMoveInteraction.mousePosition = {};

MouseMoveInteraction.updateMousePosition = function (event) {
  MouseMoveInteraction.mousePosition = {
    x: event.clientX,
    y: event.clientY
  };
};

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_default).apply(this, arguments));
  }

  (0, _createClass2.default)(_default, [{
    key: "getMovePointFromPassedPercents",
    value: function getMovePointFromPassedPercents(movableRange, passedPercents) {
      var movePoint = passedPercents / movableRange * 100;
      return +movePoint.toFixed(2);
    }
  }, {
    key: "getEffectValueFromMovePoint",
    value: function getEffectValueFromMovePoint(range, movePoint) {
      return range * movePoint / 100;
    }
  }, {
    key: "getStep",
    value: function getStep(passedPercents, options) {
      if ('element' === this.getSettings('type')) {
        return this.getElementStep(passedPercents, options);
      }

      return this.getBackgroundStep(passedPercents, options);
    }
  }, {
    key: "getElementStep",
    value: function getElementStep(passedPercents, options) {
      return -(passedPercents - 50) * options.speed;
    }
  }, {
    key: "getBackgroundStep",
    value: function getBackgroundStep(passedPercents, options) {
      var movableRange = this.getSettings('dimensions.movable' + options.axis.toUpperCase());
      return -this.getEffectValueFromMovePoint(movableRange, passedPercents);
    }
  }, {
    key: "getDirectionMovePoint",
    value: function getDirectionMovePoint(passedPercents, direction, range) {
      var movePoint;

      if (passedPercents < range.start) {
        if ('out-in' === direction) {
          movePoint = 0;
        } else if ('in-out' === direction) {
          movePoint = 100;
        } else {
          movePoint = this.getMovePointFromPassedPercents(range.start, passedPercents);

          if ('in-out-in' === direction) {
            movePoint = 100 - movePoint;
          }
        }
      } else if (passedPercents < range.end) {
        if ('in-out-in' === direction) {
          movePoint = 0;
        } else if ('out-in-out' === direction) {
          movePoint = 100;
        } else {
          movePoint = this.getMovePointFromPassedPercents(range.end - range.start, passedPercents - range.start);

          if ('in-out' === direction) {
            movePoint = 100 - movePoint;
          }
        }
      } else if ('in-out' === direction) {
        movePoint = 0;
      } else if ('out-in' === direction) {
        movePoint = 100;
      } else {
        movePoint = this.getMovePointFromPassedPercents(100 - range.end, 100 - passedPercents);

        if ('in-out-in' === direction) {
          movePoint = 100 - movePoint;
        }
      }

      return movePoint;
    }
  }, {
    key: "translateX",
    value: function translateX(actionData, passedPercents) {
      actionData.axis = 'x';
      actionData.unit = 'px';
      this.transform('translateX', passedPercents, actionData);
    }
  }, {
    key: "translateY",
    value: function translateY(actionData, passedPercents) {
      actionData.axis = 'y';
      actionData.unit = 'px';
      this.transform('translateY', passedPercents, actionData);
    }
  }, {
    key: "translateXY",
    value: function translateXY(actionData, passedPercentsX, passedPercentsY) {
      this.translateX(actionData, passedPercentsX);
      this.translateY(actionData, passedPercentsY);
    }
  }, {
    key: "tilt",
    value: function tilt(actionData, passedPercentsX, passedPercentsY) {
      var options = {
        speed: actionData.speed / 10,
        direction: actionData.direction
      };
      this.rotateX(options, passedPercentsY);
      this.rotateY(options, 100 - passedPercentsX);
    }
  }, {
    key: "rotateX",
    value: function rotateX(actionData, passedPercents) {
      actionData.axis = 'x';
      actionData.unit = 'deg';
      this.transform('rotateX', passedPercents, actionData);
    }
  }, {
    key: "rotateY",
    value: function rotateY(actionData, passedPercents) {
      actionData.axis = 'y';
      actionData.unit = 'deg';
      this.transform('rotateY', passedPercents, actionData);
    }
  }, {
    key: "rotateZ",
    value: function rotateZ(actionData, passedPercents) {
      actionData.unit = 'deg';
      this.transform('rotateZ', passedPercents, actionData);
    }
  }, {
    key: "scale",
    value: function scale(actionData, passedPercents) {
      var movePoint = this.getDirectionMovePoint(passedPercents, actionData.direction, actionData.range);
      this.updateRulePart('transform', 'scale', 1 + actionData.speed * movePoint / 1000);
    }
  }, {
    key: "transform",
    value: function transform(action, passedPercents, actionData) {
      if (actionData.direction) {
        passedPercents = 100 - passedPercents;
      }

      this.updateRulePart('transform', action, this.getStep(passedPercents, actionData) + actionData.unit);
    }
  }, {
    key: "opacity",
    value: function opacity(actionData, passedPercents) {
      var movePoint = this.getDirectionMovePoint(passedPercents, actionData.direction, actionData.range),
          level = actionData.level / 10,
          opacity = 1 - level + this.getEffectValueFromMovePoint(level, movePoint);
      this.$element.css({
        opacity: opacity,
        'will-change': 'opacity'
      });
    }
  }, {
    key: "blur",
    value: function blur(actionData, passedPercents) {
      var movePoint = this.getDirectionMovePoint(passedPercents, actionData.direction, actionData.range),
          blur = actionData.level - this.getEffectValueFromMovePoint(actionData.level, movePoint);
      this.updateRulePart('filter', 'blur', blur + 'px');
    }
  }, {
    key: "updateRulePart",
    value: function updateRulePart(ruleName, key, value) {
      if (!this.rulesVariables[ruleName]) {
        this.rulesVariables[ruleName] = {};
      }

      if (!this.rulesVariables[ruleName][key]) {
        this.rulesVariables[ruleName][key] = true;
        this.updateRule(ruleName);
      }

      var cssVarKey = "--".concat(key);
      this.$element[0].style.setProperty(cssVarKey, value);
    }
  }, {
    key: "updateRule",
    value: function updateRule(ruleName) {
      var value = '';
      jQuery.each(this.rulesVariables[ruleName], function (variableKey) {
        value += "".concat(variableKey, "(var(--").concat(variableKey, "))");
      });
      this.$element.css(ruleName, value);
    }
  }, {
    key: "runAction",
    value: function runAction(actionName, actionData, passedPercents) {
      if (actionData.affectedRange) {
        if (actionData.affectedRange.start > passedPercents) {
          passedPercents = actionData.affectedRange.start;
        }

        if (actionData.affectedRange.end < passedPercents) {
          passedPercents = actionData.affectedRange.end;
        }
      }

      for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        args[_key - 3] = arguments[_key];
      }

      this[actionName].apply(this, [actionData, passedPercents].concat(args));
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.rulesVariables = {};
      this.$element.css({
        transform: '',
        filter: '',
        opacity: '',
        'will-change': ''
      });
    }
  }, {
    key: "onInit",
    value: function onInit() {
      this.$element = this.getSettings('$targetElement');
      this.refresh();
    }
  }]);
  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _handler = _interopRequireDefault(__webpack_require__(158));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_default).call(this));
    elementorFrontend.hooks.addAction('frontend/element_ready/gallery.default', function ($element) {
      elementorFrontend.elementsHandler.addHandler(_handler.default, {
        $element: $element
      });
    });
    return _this;
  }

  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _get3 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var galleryHandler = /*#__PURE__*/function (_elementorModules$fro) {
  (0, _inherits2.default)(galleryHandler, _elementorModules$fro);

  function galleryHandler() {
    (0, _classCallCheck2.default)(this, galleryHandler);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(galleryHandler).apply(this, arguments));
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

      this.elements.$items.not('.gallery-item--hidden').attr('data-elementor-lightbox-slideshow', index + '_' + this.getID());
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

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _handler = _interopRequireDefault(__webpack_require__(160));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_default).call(this));
    elementorFrontend.hooks.addAction('frontend/element_ready/lottie.default', function ($element) {
      elementorFrontend.elementsHandler.addHandler(_handler.default, {
        $element: $element
      });
    });
    return _this;
  }

  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(20));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _get3 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _scroll = _interopRequireDefault(__webpack_require__(17));

var lottieHandler = /*#__PURE__*/function (_elementorModules$fro) {
  (0, _inherits2.default)(lottieHandler, _elementorModules$fro);

  function lottieHandler() {
    (0, _classCallCheck2.default)(this, lottieHandler);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(lottieHandler).apply(this, arguments));
  }

  (0, _createClass2.default)(lottieHandler, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        selectors: {
          container: '.e-lottie__container',
          containerLink: '.e-lottie__container__link',
          animation: '.e-lottie__animation',
          caption: '.e-lottie__caption'
        },
        classes: {
          caption: 'e-lottie__caption'
        }
      };
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var _this$getSettings = this.getSettings(),
          selectors = _this$getSettings.selectors;

      return {
        $widgetWrapper: this.$element,
        $container: this.$element.find(selectors.container),
        $containerLink: this.$element.find(selectors.containerLink),
        $animation: this.$element.find(selectors.animation),
        $caption: this.$element.find(selectors.caption),
        $sectionParent: this.$element.closest('.elementor-section'),
        $columnParent: this.$element.closest('.elementor-column')
      };
    }
  }, {
    key: "onInit",
    value: function onInit() {
      var _get2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_get2 = (0, _get3.default)((0, _getPrototypeOf2.default)(lottieHandler.prototype), "onInit", this)).call.apply(_get2, [this].concat(args));

      this.lottie = null;
      this.state = {
        isAnimationScrollUpdateNeededOnFirstLoad: true,
        isNewLoopCycle: false,
        isInViewport: false,
        loop: false,
        animationDirection: 'forward',
        currentAnimationTrigger: '',
        effectsRelativeTo: '',
        hoverOutMode: '',
        hoverArea: '',
        caption: '',
        playAnimationCount: 0,
        animationSpeed: 0,
        linkTimeout: 0,
        viewportOffset: {
          start: 0,
          end: 100
        }
      };
      this.intersectionObservers = {
        animation: {
          observer: null,
          element: null
        },
        lazyload: {
          observer: null,
          element: null
        }
      };
      this.animationFrameRequest = {
        timer: null,
        lastScrollY: 0
      };
      this.listeners = {
        collection: [],
        elements: {
          $widgetArea: {
            triggerAnimationHoverIn: null,
            triggerAnimationHoverOut: null
          },
          $container: {
            triggerAnimationClick: null
          }
        }
      };
      this.initLottie();
    }
  }, {
    key: "initLottie",
    value: function initLottie() {
      var lottieSettings = this.getLottieSettings();

      if (lottieSettings.lazyload) {
        this.lazyloadLottie();
      } else {
        this.generateLottie();
      }
    }
  }, {
    key: "lazyloadLottie",
    value: function lazyloadLottie() {
      var _this = this;

      var bufferHeightBeforeTriggerLottie = 200;
      this.intersectionObservers.lazyload.observer = _scroll.default.scrollObserver({
        offset: "0px 0px ".concat(bufferHeightBeforeTriggerLottie, "px"),
        callback: function callback(event) {
          if (event.isInViewport) {
            _this.generateLottie();

            _this.intersectionObservers.lazyload.observer.unobserve(_this.intersectionObservers.lazyload.element);
          }
        }
      });
      this.intersectionObservers.lazyload.element = this.elements.$container[0];
      this.intersectionObservers.lazyload.observer.observe(this.intersectionObservers.lazyload.element);
    }
  }, {
    key: "generateLottie",
    value: function generateLottie() {
      this.createLottieInstance();
      this.setLottieEvents();
    }
  }, {
    key: "createLottieInstance",
    value: function createLottieInstance() {
      var lottieSettings = this.getLottieSettings();
      this.lottie = bodymovin.loadAnimation({
        container: this.elements.$animation[0],
        path: this.getAnimationPath(),
        renderer: lottieSettings.renderer,
        autoplay: false,
        // We always want to trigger the animation manually for considering start/end frame.
        name: 'lottie-widget'
      }); // Expose the lottie instance in the frontend.

      this.elements.$animation.data('lottie', this.lottie);
    }
  }, {
    key: "getAnimationPath",
    value: function getAnimationPath() {
      var _lottieSettings$sourc, _lottieSettings$sourc2;

      var lottieSettings = this.getLottieSettings();

      if (((_lottieSettings$sourc = lottieSettings.source_json) === null || _lottieSettings$sourc === void 0 ? void 0 : _lottieSettings$sourc.url) && 'json' === lottieSettings.source_json.url.toLowerCase().substr(-4)) {
        return lottieSettings.source_json.url;
      } else if ((_lottieSettings$sourc2 = lottieSettings.source_external_url) === null || _lottieSettings$sourc2 === void 0 ? void 0 : _lottieSettings$sourc2.url) {
        return lottieSettings.source_external_url.url;
      } // Default animation path.


      return elementorProFrontend.config.lottie.defaultAnimationUrl;
    }
  }, {
    key: "setCaption",
    value: function setCaption() {
      var lottieSettings = this.getLottieSettings();

      if ('external_url' === lottieSettings.source || 'media_file' === lottieSettings.source && 'custom' === lottieSettings.caption_source) {
        var $captionElement = this.getCaptionElement();
        $captionElement.text(lottieSettings.caption);
      }
    }
  }, {
    key: "getCaptionElement",
    value: function getCaptionElement() {
      if (!this.elements.$caption.length) {
        var _this$getSettings2 = this.getSettings(),
            classes = _this$getSettings2.classes;

        this.elements.$caption = jQuery('<p>', {
          class: classes.caption
        });
        this.elements.$container.append(this.elements.$caption);
        return this.elements.$caption;
      }

      return this.elements.$caption;
    }
  }, {
    key: "setLottieEvents",
    value: function setLottieEvents() {
      var _this2 = this;

      this.lottie.addEventListener('DOMLoaded', function () {
        return _this2.onLottieDomLoaded();
      });
      this.lottie.addEventListener('complete', function () {
        return _this2.onComplete();
      });
    }
  }, {
    key: "saveInitialValues",
    value: function saveInitialValues() {
      var _lottieSettings$play_;

      var lottieSettings = this.getLottieSettings();
      /*
      These values of the animation are being changed during the animation runtime
      and saved in the lottie instance (and not in the state) for the instance expose in the frontend.
       */

      this.lottie.__initialTotalFrames = this.lottie.totalFrames;
      this.lottie.__initialFirstFrame = this.lottie.firstFrame;
      this.state.currentAnimationTrigger = lottieSettings.trigger;
      this.state.effectsRelativeTo = lottieSettings.effects_relative_to;
      this.state.viewportOffset.start = lottieSettings.viewport ? lottieSettings.viewport.sizes.start : 0;
      this.state.viewportOffset.end = lottieSettings.viewport ? lottieSettings.viewport.sizes.end : 100;
      this.state.animationSpeed = (_lottieSettings$play_ = lottieSettings.play_speed) === null || _lottieSettings$play_ === void 0 ? void 0 : _lottieSettings$play_.size;
      this.state.linkTimeout = lottieSettings.link_timeout;
      this.state.caption = lottieSettings.caption;
      this.state.loop = lottieSettings.loop;
    }
  }, {
    key: "setAnimationFirstFrame",
    value: function setAnimationFirstFrame() {
      var frame = this.getAnimationFrames();
      /*
      We need to subtract the initial first frame from the first frame for handling scenarios
      when the animation first frame is not 0, this way we always get the relevant first frame.
      example: when start point is 70 and initial first frame is 60, the animation should start at 10.
       */

      frame.first = frame.first - this.lottie.__initialFirstFrame;
      this.lottie.goToAndStop(frame.first, true);
    }
  }, {
    key: "initAnimationTrigger",
    value: function initAnimationTrigger() {
      var lottieSettings = this.getLottieSettings();

      switch (lottieSettings.trigger) {
        case 'none':
          this.playLottie();
          break;

        case 'arriving_to_viewport':
          this.playAnimationWhenArrivingToViewport();
          break;

        case 'bind_to_scroll':
          this.playAnimationWhenBindToScroll();
          break;

        case 'on_click':
          this.bindAnimationClickEvents();
          break;

        case 'on_hover':
          this.bindAnimationHoverEvents();
          break;
      }
    }
  }, {
    key: "playAnimationWhenArrivingToViewport",
    value: function playAnimationWhenArrivingToViewport() {
      var _this3 = this;

      var offset = this.getOffset();
      this.intersectionObservers.animation.observer = _scroll.default.scrollObserver({
        offset: "".concat(offset.end, "% 0% ").concat(offset.start, "%"),
        callback: function callback(event) {
          if (event.isInViewport) {
            _this3.state.isInViewport = true;

            _this3.playLottie();
          } else {
            _this3.state.isInViewport = false;

            _this3.lottie.pause();
          }
        }
      });
      this.intersectionObservers.animation.element = this.elements.$widgetWrapper[0];
      this.intersectionObservers.animation.observer.observe(this.intersectionObservers.animation.element);
    }
  }, {
    key: "getOffset",
    value: function getOffset() {
      var lottieSettings = this.getLottieSettings(),
          start = -lottieSettings.viewport.sizes.start || 0,
          end = -(100 - lottieSettings.viewport.sizes.end) || 0;
      return {
        start: start,
        end: end
      };
    }
  }, {
    key: "playAnimationWhenBindToScroll",
    value: function playAnimationWhenBindToScroll() {
      var _this4 = this;

      var lottieSettings = this.getLottieSettings(),
          offset = this.getOffset(); // Generate scroll detection by Intersection Observer API

      this.intersectionObservers.animation.observer = _scroll.default.scrollObserver({
        offset: "".concat(offset.end, "% 0% ").concat(offset.start, "%"),
        callback: function callback(event) {
          return _this4.onLottieIntersection(event);
        }
      });
      this.intersectionObservers.animation.element = 'viewport' === lottieSettings.effects_relative_to ? this.elements.$widgetWrapper[0] : document.documentElement;
      this.intersectionObservers.animation.observer.observe(this.intersectionObservers.animation.element);
    }
  }, {
    key: "updateAnimationByScrollPosition",
    value: function updateAnimationByScrollPosition() {
      var lottieSettings = this.getLottieSettings();
      var percentage;

      if ('page' === lottieSettings.effects_relative_to) {
        percentage = this.getLottiePagePercentage();
      } else if ('fixed' === this.getCurrentDeviceSetting('_position')) {
        percentage = this.getLottieViewportHeightPercentage();
      } else {
        percentage = this.getLottieViewportPercentage();
      }

      var nextFrameToPlay = this.getFrameNumberByPercent(percentage);
      nextFrameToPlay = nextFrameToPlay - this.lottie.__initialFirstFrame;
      this.lottie.goToAndStop(nextFrameToPlay, true);
    }
  }, {
    key: "getLottieViewportPercentage",
    value: function getLottieViewportPercentage() {
      return _scroll.default.getElementViewportPercentage(this.elements.$widgetWrapper, this.getOffset());
    }
  }, {
    key: "getLottiePagePercentage",
    value: function getLottiePagePercentage() {
      return _scroll.default.getPageScrollPercentage(this.getOffset());
    }
  }, {
    key: "getLottieViewportHeightPercentage",
    value: function getLottieViewportHeightPercentage() {
      return _scroll.default.getPageScrollPercentage(this.getOffset(), window.innerHeight);
    }
    /**
     * @param {number} percent - Percent value between 0-100
     */

  }, {
    key: "getFrameNumberByPercent",
    value: function getFrameNumberByPercent(percent) {
      var frame = this.getAnimationFrames();
      /*
      In mobile devices the document height can be 'stretched' at the top and bottom points of the document,
      this 'stretched' will make percent to be either negative or larger than 100, therefore we need to limit percent between 0-100.
      */

      percent = Math.min(100, Math.max(0, percent)); // Getting frame number by percent of range, considering start/end frame values if exist.

      return frame.first + (frame.last - frame.first) * percent / 100;
    }
  }, {
    key: "getAnimationFrames",
    value: function getAnimationFrames() {
      var lottieSettings = this.getLottieSettings(),
          currentFrame = this.getAnimationCurrentFrame(),
          startPoint = this.getAnimationRange().start,
          endPoint = this.getAnimationRange().end;
      var firstFrame = this.lottie.__initialFirstFrame,
          lastFrame = 0 === this.lottie.__initialFirstFrame ? this.lottie.__initialTotalFrames : this.lottie.__initialFirstFrame + this.lottie.__initialTotalFrames; // Limiting min start point to animation first frame.

      if (startPoint && startPoint > firstFrame) {
        firstFrame = startPoint;
      } // limiting max end point to animation last frame.


      if (endPoint && endPoint < lastFrame) {
        lastFrame = endPoint;
      }
      /*
      Getting the relevant first frame after loop complete and when not bind to scroll.
      when the animation is in progress (no when a new loop start), the first frame should be the current frame.
      when the trigger is bind_to_scroll we DON'T need to get this functionality.
      */


      if (!this.state.isNewLoopCycle && 'bind_to_scroll' !== lottieSettings.trigger) {
        // When we have a custom start point, we need to check if the start point is larger than the last pause stop of the animation.
        firstFrame = startPoint && startPoint > currentFrame ? startPoint : currentFrame;
      } // Reverse Mode.


      if ('backward' === this.state.animationDirection && this.isReverseMode()) {
        firstFrame = currentFrame;
        lastFrame = startPoint && startPoint > this.lottie.__initialFirstFrame ? startPoint : this.lottie.__initialFirstFrame;
      }

      return {
        first: firstFrame,
        last: lastFrame,
        current: currentFrame,
        total: this.lottie.__initialTotalFrames
      };
    }
  }, {
    key: "getAnimationRange",
    value: function getAnimationRange() {
      var lottieSettings = this.getLottieSettings();
      return {
        start: this.getInitialFrameNumberByPercent(lottieSettings.start_point.size),
        end: this.getInitialFrameNumberByPercent(lottieSettings.end_point.size)
      };
    }
  }, {
    key: "getInitialFrameNumberByPercent",
    value: function getInitialFrameNumberByPercent(percent) {
      percent = Math.min(100, Math.max(0, percent));
      return this.lottie.__initialFirstFrame + (this.lottie.__initialTotalFrames - this.lottie.__initialFirstFrame) * percent / 100;
    }
  }, {
    key: "getAnimationCurrentFrame",
    value: function getAnimationCurrentFrame() {
      // When pausing the animation (when out of viewport) the first frame of the animation changes.
      return 0 === this.lottie.firstFrame ? this.lottie.currentFrame : this.lottie.firstFrame + this.lottie.currentFrame;
    }
  }, {
    key: "setLinkTimeout",
    value: function setLinkTimeout() {
      var _lottieSettings$custo,
          _this5 = this;

      var lottieSettings = this.getLottieSettings();

      if ('on_click' === lottieSettings.trigger && ((_lottieSettings$custo = lottieSettings.custom_link) === null || _lottieSettings$custo === void 0 ? void 0 : _lottieSettings$custo.url) && lottieSettings.link_timeout) {
        this.elements.$containerLink.click(function (event) {
          event.preventDefault();

          if (!_this5.isEdit) {
            setTimeout(function () {
              var tabTarget = 'on' === lottieSettings.custom_link.is_external ? '_blank' : '_self';
              window.open(lottieSettings.custom_link.url, tabTarget);
            }, lottieSettings.link_timeout);
          }
        });
      }
    }
  }, {
    key: "bindAnimationClickEvents",
    value: function bindAnimationClickEvents() {
      var _this6 = this;

      this.listeners.elements.$container.triggerAnimationClick = function () {
        _this6.playLottie();
      };

      this.addSessionEventListener(this.elements.$container, 'click', this.listeners.elements.$container.triggerAnimationClick);
    }
  }, {
    key: "getLottieSettings",
    value: function getLottieSettings() {
      var lottieSettings = this.getElementSettings();
      return (0, _objectSpread2.default)({}, lottieSettings, {
        lazyload: 'yes' === lottieSettings.lazyload,
        loop: 'yes' === lottieSettings.loop
      });
    }
  }, {
    key: "playLottie",
    value: function playLottie() {
      var frame = this.getAnimationFrames();
      this.lottie.stop();
      this.lottie.playSegments([frame.first, frame.last], true); // We reset the loop cycle state after playing the animation.

      this.state.isNewLoopCycle = false;
    }
  }, {
    key: "bindAnimationHoverEvents",
    value: function bindAnimationHoverEvents() {
      this.createAnimationHoverInEvents();
      this.createAnimationHoverOutEvents();
    }
  }, {
    key: "createAnimationHoverInEvents",
    value: function createAnimationHoverInEvents() {
      var _this7 = this;

      var lottieSettings = this.getLottieSettings(),
          $widgetArea = this.getHoverAreaElement();
      this.state.hoverArea = lottieSettings.hover_area;

      this.listeners.elements.$widgetArea.triggerAnimationHoverIn = function () {
        _this7.state.animationDirection = 'forward';

        _this7.playLottie();
      };

      this.addSessionEventListener($widgetArea, 'mouseenter', this.listeners.elements.$widgetArea.triggerAnimationHoverIn);
    }
    /**
     * @param {jQuery} $el
     * @param {string} event - event type
     * @param {function} callback
     */

  }, {
    key: "addSessionEventListener",
    value: function addSessionEventListener($el, event, callback) {
      $el.on(event, callback);
      this.listeners.collection.push({
        $el: $el,
        event: event,
        callback: callback
      });
    }
  }, {
    key: "createAnimationHoverOutEvents",
    value: function createAnimationHoverOutEvents() {
      var _this8 = this;

      var lottieSettings = this.getLottieSettings(),
          $widgetArea = this.getHoverAreaElement();

      if ('pause' === lottieSettings.on_hover_out || 'reverse' === lottieSettings.on_hover_out) {
        this.state.hoverOutMode = lottieSettings.on_hover_out;

        this.listeners.elements.$widgetArea.triggerAnimationHoverOut = function () {
          if ('pause' === lottieSettings.on_hover_out) {
            _this8.lottie.pause();
          } else {
            _this8.state.animationDirection = 'backward';

            _this8.playLottie();
          }
        };

        this.addSessionEventListener($widgetArea, 'mouseleave', this.listeners.elements.$widgetArea.triggerAnimationHoverOut);
      }
    }
  }, {
    key: "getHoverAreaElement",
    value: function getHoverAreaElement() {
      var lottieSettings = this.getLottieSettings();

      if ('section' === lottieSettings.hover_area) {
        return this.elements.$sectionParent;
      } else if ('column' === lottieSettings.hover_area) {
        return this.elements.$columnParent;
      }

      return this.elements.$container;
    }
  }, {
    key: "setLoopOnAnimationComplete",
    value: function setLoopOnAnimationComplete() {
      var lottieSettings = this.getLottieSettings();
      this.state.isNewLoopCycle = true;

      if (lottieSettings.loop && !this.isReverseMode()) {
        this.setLoopWhenNotReverse();
      } else if (lottieSettings.loop && this.isReverseMode()) {
        this.setReverseAnimationOnLoop();
      } else if (!lottieSettings.loop && this.isReverseMode()) {
        this.setReverseAnimationOnSingleTrigger();
      }
    }
  }, {
    key: "isReverseMode",
    value: function isReverseMode() {
      var lottieSettings = this.getLottieSettings();
      return 'yes' === lottieSettings.reverse_animation || 'reverse' === lottieSettings.on_hover_out && 'backward' === this.state.animationDirection;
    }
  }, {
    key: "setLoopWhenNotReverse",
    value: function setLoopWhenNotReverse() {
      var lottieSettings = this.getLottieSettings();

      if (lottieSettings.number_of_times > 0) {
        this.state.playAnimationCount++;

        if (this.state.playAnimationCount < lottieSettings.number_of_times) {
          this.playLottie();
        } else {
          this.state.playAnimationCount = 0;
        }
      } else {
        this.playLottie();
      }
    }
  }, {
    key: "setReverseAnimationOnLoop",
    value: function setReverseAnimationOnLoop() {
      var lottieSettings = this.getLottieSettings();
      /*
      We trigger the reverse animation:
      either when we don't have any value in the 'Number of Times" field, and then it will be an infinite forward/backward loop,
      or, when we have a value in the 'Number of Times" field and then we need to limit the number of times of the loop cycles.
       */

      if (!lottieSettings.number_of_times || this.state.playAnimationCount < lottieSettings.number_of_times) {
        this.state.animationDirection = 'forward' === this.state.animationDirection ? 'backward' : 'forward';
        this.playLottie();
        /*
        We need to increment the count only on the backward movements,
        because forward movement + backward movement are equal together to one full movement count.
        */

        if ('backward' === this.state.animationDirection) {
          this.state.playAnimationCount++;
        }
      } else {
        // Reset the values for the loop counting for the next trigger.
        this.state.playAnimationCount = 0;
        this.state.animationDirection = 'forward';
      }
    }
  }, {
    key: "setReverseAnimationOnSingleTrigger",
    value: function setReverseAnimationOnSingleTrigger() {
      if (this.state.playAnimationCount < 1) {
        this.state.playAnimationCount++;
        this.state.animationDirection = 'backward';
        this.playLottie();
      } else if (this.state.playAnimationCount >= 1 && 'forward' === this.state.animationDirection) {
        this.state.animationDirection = 'backward';
        this.playLottie();
      } else {
        this.state.playAnimationCount = 0;
        this.state.animationDirection = 'forward';
      }
    }
  }, {
    key: "setAnimationSpeed",
    value: function setAnimationSpeed() {
      var lottieSettings = this.getLottieSettings();

      if (lottieSettings.play_speed) {
        this.lottie.setSpeed(lottieSettings.play_speed.size);
      }
    }
  }, {
    key: "onElementChange",
    value: function onElementChange() {
      this.updateLottieValues();
      this.resetAnimationTrigger();
    }
  }, {
    key: "updateLottieValues",
    value: function updateLottieValues() {
      var _lottieSettings$play_2,
          _this9 = this;

      var lottieSettings = this.getLottieSettings(),
          valuesComparison = [{
        sourceVal: (_lottieSettings$play_2 = lottieSettings.play_speed) === null || _lottieSettings$play_2 === void 0 ? void 0 : _lottieSettings$play_2.size,
        stateProp: 'animationSpeed',
        callback: function callback() {
          return _this9.setAnimationSpeed();
        }
      }, {
        sourceVal: lottieSettings.link_timeout,
        stateProp: 'linkTimeout',
        callback: function callback() {
          return _this9.setLinkTimeout();
        }
      }, {
        sourceVal: lottieSettings.caption,
        stateProp: 'caption',
        callback: function callback() {
          return _this9.setCaption();
        }
      }, {
        sourceVal: lottieSettings.effects_relative_to,
        stateProp: 'effectsRelativeTo',
        callback: function callback() {
          return _this9.updateAnimationByScrollPosition();
        }
      }, {
        sourceVal: lottieSettings.loop,
        stateProp: 'loop',
        callback: function callback() {
          return _this9.onLoopStateChange();
        }
      }];
      valuesComparison.forEach(function (item) {
        if ('undefined' !== typeof item.sourceVal && item.sourceVal !== _this9.state[item.stateProp]) {
          _this9.state[item.stateProp] = item.sourceVal;
          item.callback();
        }
      });
    }
  }, {
    key: "onLoopStateChange",
    value: function onLoopStateChange() {
      var isInActiveViewportMode = 'arriving_to_viewport' === this.state.currentAnimationTrigger && this.state.isInViewport;

      if (this.state.loop && (isInActiveViewportMode || 'none' === this.state.currentAnimationTrigger)) {
        this.playLottie();
      }
    }
  }, {
    key: "resetAnimationTrigger",
    value: function resetAnimationTrigger() {
      var lottieSettings = this.getLottieSettings(),
          isTriggerChange = lottieSettings.trigger !== this.state.currentAnimationTrigger,
          isViewportOffsetChange = lottieSettings.viewport ? this.isViewportOffsetChange() : false,
          isHoverOutModeChange = lottieSettings.on_hover_out ? this.isHoverOutModeChange() : false,
          isHoverAreaChange = lottieSettings.hover_area ? this.isHoverAreaChange() : false;

      if (isTriggerChange || isViewportOffsetChange || isHoverOutModeChange || isHoverAreaChange) {
        this.removeAnimationFrameRequests();
        this.removeObservers();
        this.removeEventListeners();
        this.initAnimationTrigger();
      }
    }
  }, {
    key: "isViewportOffsetChange",
    value: function isViewportOffsetChange() {
      var lottieSettings = this.getLottieSettings(),
          isStartOffsetChange = lottieSettings.viewport.sizes.start !== this.state.viewportOffset.start,
          isEndOffsetChange = lottieSettings.viewport.sizes.end !== this.state.viewportOffset.end;
      return isStartOffsetChange || isEndOffsetChange;
    }
  }, {
    key: "isHoverOutModeChange",
    value: function isHoverOutModeChange() {
      var lottieSettings = this.getLottieSettings();
      return lottieSettings.on_hover_out !== this.state.hoverOutMode;
    }
  }, {
    key: "isHoverAreaChange",
    value: function isHoverAreaChange() {
      var lottieSettings = this.getLottieSettings();
      return lottieSettings.hover_area !== this.state.hoverArea;
    }
  }, {
    key: "removeEventListeners",
    value: function removeEventListeners() {
      this.listeners.collection.forEach(function (listener) {
        listener.$el.off(listener.event, null, listener.callback);
      });
    }
  }, {
    key: "removeObservers",
    value: function removeObservers() {
      // Removing all observers.
      for (var type in this.intersectionObservers) {
        if (this.intersectionObservers[type].observer && this.intersectionObservers[type].element) {
          this.intersectionObservers[type].observer.unobserve(this.intersectionObservers[type].element);
        }
      }
    }
  }, {
    key: "removeAnimationFrameRequests",
    value: function removeAnimationFrameRequests() {
      cancelAnimationFrame(this.animationFrameRequest.timer);
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      (0, _get3.default)((0, _getPrototypeOf2.default)(lottieHandler.prototype), "onDestroy", this).call(this);
      this.destroyLottie();
    }
  }, {
    key: "destroyLottie",
    value: function destroyLottie() {
      this.removeAnimationFrameRequests();
      this.removeObservers();
      this.removeEventListeners();
      this.elements.$animation.removeData('lottie');

      if (this.lottie) {
        this.lottie.destroy();
      }
    }
  }, {
    key: "onLottieDomLoaded",
    value: function onLottieDomLoaded() {
      this.saveInitialValues();
      this.setAnimationSpeed();
      this.setLinkTimeout();
      this.setCaption();
      this.setAnimationFirstFrame();
      this.initAnimationTrigger();
    }
  }, {
    key: "onComplete",
    value: function onComplete() {
      this.setLoopOnAnimationComplete();
    }
  }, {
    key: "onLottieIntersection",
    value: function onLottieIntersection(event) {
      var _this10 = this;

      if (event.isInViewport) {
        /*
        It's required to update the animation progress on first load when lottie is inside the viewport on load
        but, there is a problem when the browser is refreshed when the scroll bar is not in 0 position,
        in this scenario, after the refresh the browser will trigger 2 scroll events
        one trigger on immediate load and second after a f ew ms to move the scroll bar to previous position (before refresh)
        therefore, we use the this.state.isAnimationScrollUpdateNeededOnFirstLoad flag
        to make sure that this.updateAnimationByScrollPosition() function will be triggered only once.
         */
        if (this.state.isAnimationScrollUpdateNeededOnFirstLoad) {
          this.state.isAnimationScrollUpdateNeededOnFirstLoad = false;
          this.updateAnimationByScrollPosition();
        }

        this.animationFrameRequest.timer = requestAnimationFrame(function () {
          return _this10.onAnimationFrameRequest();
        });
      } else {
        var frame = this.getAnimationFrames(),
            finalFrame = 'up' === event.intersectionScrollDirection ? frame.first : frame.last;
        this.state.isAnimationScrollUpdateNeededOnFirstLoad = false;
        cancelAnimationFrame(this.animationFrameRequest.timer); // Set the animation values to min/max when out of viewport.

        this.lottie.goToAndStop(finalFrame, true);
      }
    }
  }, {
    key: "onAnimationFrameRequest",
    value: function onAnimationFrameRequest() {
      var _this11 = this;

      // Making calculation only when there is a change with the scroll position.
      if (window.scrollY !== this.animationFrameRequest.lastScrollY) {
        this.updateAnimationByScrollPosition();
        this.animationFrameRequest.lastScrollY = window.scrollY;
      }

      this.animationFrameRequest.timer = requestAnimationFrame(function () {
        return _this11.onAnimationFrameRequest();
      });
    }
  }]);
  return lottieHandler;
}(elementorModules.frontend.handlers.Base);

exports.default = lottieHandler;

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _tableOfContents = _interopRequireDefault(__webpack_require__(162));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_default).call(this));
    elementorFrontend.hooks.addAction('frontend/element_ready/table-of-contents.default', function ($element) {
      elementorFrontend.elementsHandler.addHandler(_tableOfContents.default, {
        $element: $element
      });
    });
    return _this;
  }

  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _get3 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var TOCHandler = /*#__PURE__*/function (_elementorModules$fro) {
  (0, _inherits2.default)(TOCHandler, _elementorModules$fro);

  function TOCHandler() {
    (0, _classCallCheck2.default)(this, TOCHandler);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TOCHandler).apply(this, arguments));
  }

  (0, _createClass2.default)(TOCHandler, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      var elementSettings = this.getElementSettings(),
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
        listWrapperTag: listWrapperTag
      };
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var settings = this.getSettings();
      return {
        $pageContainer: this.getContainer(),
        $widgetContainer: this.$element.find(settings.selectors.widgetContainer),
        $expandButton: this.$element.find(settings.selectors.expandButton),
        $collapseButton: this.$element.find(settings.selectors.collapseButton),
        $tocBody: this.$element.find(settings.selectors.body),
        $listItems: this.$element.find('.' + settings.classes.listItem)
      };
    }
  }, {
    key: "getContainer",
    value: function getContainer() {
      var settings = this.getSettings(),
          elementSettings = this.getElementSettings(); // If there is a custom container defined by the user, use it as the headings-scan container

      if (elementSettings.container) {
        return jQuery(elementSettings.container);
      } // Get the document wrapper element in which the TOC is located


      var $documentWrapper = this.$element.parents('.elementor'); // If the TOC container is a popup, only scan the popup for headings

      if ('popup' === $documentWrapper.attr('data-elementor-type')) {
        return $documentWrapper;
      } // If the TOC container is anything other than a popup, scan only the post/page content for headings


      return jQuery(settings.selectors.postContentContainer);
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      var elementSettings = this.getElementSettings();

      if (elementSettings.minimize_box) {
        this.elements.$expandButton.on('click', function () {
          return _this.expandBox();
        });
        this.elements.$collapseButton.on('click', function () {
          return _this.collapseBox();
        });
      }

      if (elementSettings.collapse_subitems) {
        this.elements.$listItems.hover(function (event) {
          return jQuery(event.target).slideToggle();
        });
      }
    }
  }, {
    key: "getHeadings",
    value: function getHeadings() {
      // Get all headings from document by user-selected tags
      var elementSettings = this.getElementSettings(),
          tags = elementSettings.headings_by_tags.join(','),
          selectors = this.getSettings('selectors'),
          excludedSelectors = elementSettings.exclude_headings_by_selector;
      return this.elements.$pageContainer.find(tags).not(selectors.headerTitle).filter(function (index, heading) {
        return !jQuery(heading).closest(excludedSelectors).length; // Handle excluded selectors if there are any
      });
    }
  }, {
    key: "addAnchorsBeforeHeadings",
    value: function addAnchorsBeforeHeadings() {
      // Add an anchor element right before each TOC heading to create anchors for TOC links
      var classes = this.getSettings('classes');
      this.elements.$headings.before(function (index) {
        return "<span id=\"".concat(classes.headingAnchor, "-").concat(index, "\" class=\"").concat(classes.anchor, " \"></span>");
      });
    }
  }, {
    key: "activateItem",
    value: function activateItem($listItem) {
      var classes = this.getSettings('classes');
      this.deactivateActiveItem($listItem);
      $listItem.addClass(classes.activeItem);
      this.$activeItem = $listItem;

      if (!this.getElementSettings('collapse_subitems')) {
        return;
      }

      var $activeList;

      if ($listItem.hasClass(classes.firstLevelListItem)) {
        $activeList = $listItem.parent().next();
      } else {
        $activeList = $listItem.parents('.' + classes.listWrapper).eq(-2);
      }

      if (!$activeList.length) {
        delete this.$activeList;
        return;
      }

      this.$activeList = $activeList;
      this.$activeList.stop().slideDown();
    }
  }, {
    key: "deactivateActiveItem",
    value: function deactivateActiveItem($activeToBe) {
      if (!this.$activeItem || this.$activeItem.is($activeToBe)) {
        return;
      }

      var _this$getSettings = this.getSettings(),
          classes = _this$getSettings.classes;

      this.$activeItem.removeClass(classes.activeItem);

      if (this.$activeList && (!$activeToBe || !this.$activeList[0].contains($activeToBe[0]))) {
        this.$activeList.slideUp();
      }
    }
  }, {
    key: "followAnchor",
    value: function followAnchor($element, index) {
      var _this2 = this;

      var anchorSelector = $element[0].hash;
      var $anchor;

      try {
        // `decodeURIComponent` for UTF8 characters in the hash.
        $anchor = jQuery(decodeURIComponent(anchorSelector));
      } catch (e) {
        return;
      }

      elementorFrontend.waypoint($anchor, function (direction) {
        if (_this2.itemClicked) {
          return;
        }

        var id = $anchor.attr('id');

        if ('down' === direction) {
          _this2.viewportItems[id] = true;

          _this2.activateItem($element);
        } else {
          delete _this2.viewportItems[id];

          _this2.activateItem(_this2.$listItemTexts.eq(index - 1));
        }
      }, {
        offset: 'bottom-in-view',
        triggerOnce: false
      });
      elementorFrontend.waypoint($anchor, function (direction) {
        if (_this2.itemClicked) {
          return;
        }

        var id = $anchor.attr('id');

        if ('down' === direction) {
          delete _this2.viewportItems[id];

          if (Object.keys(_this2.viewportItems).length) {
            _this2.activateItem(_this2.$listItemTexts.eq(index + 1));
          }
        } else {
          _this2.viewportItems[id] = true;

          _this2.activateItem($element);
        }
      }, {
        offset: 0,
        triggerOnce: false
      });
    }
  }, {
    key: "followAnchors",
    value: function followAnchors() {
      var _this3 = this;

      this.$listItemTexts.each(function (index, element) {
        return _this3.followAnchor(jQuery(element), index);
      });
    }
  }, {
    key: "populateTOC",
    value: function populateTOC() {
      this.listItemPointer = 0;
      var elementSettings = this.getElementSettings();

      if (elementSettings.hierarchical_view) {
        this.createNestedList();
      } else {
        this.createFlatList();
      }

      this.$listItemTexts = this.$element.find('.elementor-toc__list-item-text');
      this.$listItemTexts.on('click', this.onListItemClick.bind(this));

      if (!elementorFrontend.isEditMode()) {
        this.followAnchors();
      }
    }
  }, {
    key: "createNestedList",
    value: function createNestedList() {
      var _this4 = this;

      this.headingsData.forEach(function (heading, index) {
        heading.level = 0;

        for (var i = index - 1; i >= 0; i--) {
          var currentOrderedItem = _this4.headingsData[i];

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
  }, {
    key: "createFlatList",
    value: function createFlatList() {
      this.elements.$tocBody.html(this.getNestedLevel());
    }
  }, {
    key: "getNestedLevel",
    value: function getNestedLevel(level) {
      var settings = this.getSettings(),
          elementSettings = this.getElementSettings(),
          icon = this.getElementSettings('icon'); // Open new list/nested list

      var html = "<".concat(settings.listWrapperTag, " class=\"").concat(settings.classes.listWrapper, "\">"); // for each list item, build its markup.

      while (this.listItemPointer < this.headingsData.length) {
        var currentItem = this.headingsData[this.listItemPointer];
        var listItemTextClasses = settings.classes.listItemText;

        if (0 === currentItem.level) {
          // If the current list item is a top level item, give it the first level class
          listItemTextClasses += ' ' + settings.classes.firstLevelListItem;
        }

        if (level > currentItem.level) {
          break;
        }

        if (level === currentItem.level) {
          html += "<li class=\"".concat(settings.classes.listItem, "\">");
          html += "<div class=\"".concat(settings.classes.listTextWrapper, "\">");
          var liContent = "<a href=\"#".concat(settings.classes.headingAnchor, "-").concat(this.listItemPointer, "\" class=\"").concat(listItemTextClasses, "\">").concat(currentItem.text, "</a>"); // If list type is bullets, add the bullet icon as an <i> tag

          if ('bullets' === elementSettings.marker_view && icon) {
            liContent = "<i class=\"".concat(icon.value, "\"></i>").concat(liContent);
          }

          html += liContent;
          html += '</div>';
          this.listItemPointer++;
          var nextItem = this.headingsData[this.listItemPointer];

          if (nextItem && level < nextItem.level) {
            // If a new nested list has to be created under the current item,
            // this entire method is called recursively (outside the while loop, a list wrapper is created)
            html += this.getNestedLevel(nextItem.level);
          }

          html += '</li>';
        }
      }

      html += "</".concat(settings.listWrapperTag, ">");
      return html;
    }
  }, {
    key: "handleNoHeadingsFound",
    value: function handleNoHeadingsFound() {
      var noHeadingsText = elementorProFrontend.config.i18n['toc_no_headings_found'];

      if (elementorFrontend.isEditMode()) {
        noHeadingsText = elementorPro.translate('toc_no_headings_found');
      }

      return this.elements.$tocBody.html(noHeadingsText);
    }
  }, {
    key: "collapseOnInit",
    value: function collapseOnInit() {
      var minimizedOn = this.getElementSettings('minimized_on'),
          currentDeviceMode = elementorFrontend.getCurrentDeviceMode();

      if ('tablet' === minimizedOn && 'desktop' !== currentDeviceMode || 'mobile' === minimizedOn && 'mobile' === currentDeviceMode) {
        this.collapseBox();
      }
    }
  }, {
    key: "setHeadingsData",
    value: function setHeadingsData() {
      var _this5 = this;

      this.headingsData = []; // Create an array for simplifying TOC list creation

      this.elements.$headings.each(function (index, element) {
        _this5.headingsData.push({
          tag: +element.nodeName.slice(1),
          text: element.textContent
        });
      });
    }
  }, {
    key: "run",
    value: function run() {
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
        this.collapseOnInit();
      }
    }
  }, {
    key: "expandBox",
    value: function expandBox() {
      var boxHeight = this.getCurrentDeviceSetting('min_height');
      this.$element.removeClass(this.getSettings('classes.collapsed'));
      this.elements.$tocBody.slideDown(); // return container to the full height in case a min-height is defined by the user

      this.elements.$widgetContainer.css('min-height', boxHeight.size + boxHeight.unit);
    }
  }, {
    key: "collapseBox",
    value: function collapseBox() {
      this.$element.addClass(this.getSettings('classes.collapsed'));
      this.elements.$tocBody.slideUp(); // close container in case a min-height is defined by the user

      this.elements.$widgetContainer.css('min-height', '0px');
    }
  }, {
    key: "onInit",
    value: function onInit() {
      var _get2,
          _this6 = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_get2 = (0, _get3.default)((0, _getPrototypeOf2.default)(TOCHandler.prototype), "onInit", this)).call.apply(_get2, [this].concat(args));

      this.viewportItems = [];
      jQuery(document).ready(function () {
        return _this6.run();
      });
    }
  }, {
    key: "onListItemClick",
    value: function onListItemClick(event) {
      var _this7 = this;

      this.itemClicked = true;
      setTimeout(function () {
        return _this7.itemClicked = false;
      }, 2000);
      var $clickedItem = jQuery(event.target),
          $list = $clickedItem.parent().next(),
          collapseNestedList = this.getElementSettings('collapse_subitems');
      var listIsActive;

      if (collapseNestedList && $clickedItem.hasClass(this.getSettings('classes.firstLevelListItem'))) {
        if ($list.is(':visible')) {
          listIsActive = true;
        }
      }

      this.activateItem($clickedItem);

      if (collapseNestedList && listIsActive) {
        $list.slideUp();
      }
    }
  }]);
  return TOCHandler;
}(elementorModules.frontend.handlers.Base);

exports.default = TOCHandler;

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  elementorFrontend.hooks.addAction('frontend/element_ready/animated-headline.default', __webpack_require__(164));
};

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var AnimatedHeadlineHandler = elementorModules.frontend.handlers.Base.extend({
  svgPaths: {
    circle: ['M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7'],
    underline_zigzag: ['M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9'],
    x: ['M497.4,23.9C301.6,40,155.9,80.6,4,144.4', 'M14.1,27.6c204.5,20.3,393.8,74,467.3,111.7'],
    strikethrough: ['M3,75h493.5'],
    curly: ['M3,146.1c17.1-8.8,33.5-17.8,51.4-17.8c15.6,0,17.1,18.1,30.2,18.1c22.9,0,36-18.6,53.9-18.6 c17.1,0,21.3,18.5,37.5,18.5c21.3,0,31.8-18.6,49-18.6c22.1,0,18.8,18.8,36.8,18.8c18.8,0,37.5-18.6,49-18.6c20.4,0,17.1,19,36.8,19 c22.9,0,36.8-20.6,54.7-18.6c17.7,1.4,7.1,19.5,33.5,18.8c17.1,0,47.2-6.5,61.1-15.6'],
    diagonal: ['M13.5,15.5c131,13.7,289.3,55.5,475,125.5'],
    double: ['M8.4,143.1c14.2-8,97.6-8.8,200.6-9.2c122.3-0.4,287.5,7.2,287.5,7.2', 'M8,19.4c72.3-5.3,162-7.8,216-7.8c54,0,136.2,0,267,7.8'],
    double_underline: ['M5,125.4c30.5-3.8,137.9-7.6,177.3-7.6c117.2,0,252.2,4.7,312.7,7.6', 'M26.9,143.8c55.1-6.1,126-6.3,162.2-6.1c46.5,0.2,203.9,3.2,268.9,6.4'],
    underline: ['M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7']
  },
  getDefaultSettings: function getDefaultSettings() {
    var settings = {
      animationDelay: 2500,
      //letters effect
      lettersDelay: 50,
      //typing effect
      typeLettersDelay: 150,
      selectionDuration: 500,
      //clip effect
      revealDuration: 600,
      revealAnimationDelay: 1500
    };
    settings.typeAnimationDelay = settings.selectionDuration + 800;
    settings.selectors = {
      headline: '.elementor-headline',
      dynamicWrapper: '.elementor-headline-dynamic-wrapper'
    };
    settings.classes = {
      dynamicText: 'elementor-headline-dynamic-text',
      dynamicLetter: 'elementor-headline-dynamic-letter',
      textActive: 'elementor-headline-text-active',
      textInactive: 'elementor-headline-text-inactive',
      letters: 'elementor-headline-letters',
      animationIn: 'elementor-headline-animation-in',
      typeSelected: 'elementor-headline-typing-selected'
    };
    return settings;
  },
  getDefaultElements: function getDefaultElements() {
    var selectors = this.getSettings('selectors');
    return {
      $headline: this.$element.find(selectors.headline),
      $dynamicWrapper: this.$element.find(selectors.dynamicWrapper)
    };
  },
  getNextWord: function getNextWord($word) {
    return $word.is(':last-child') ? $word.parent().children().eq(0) : $word.next();
  },
  switchWord: function switchWord($oldWord, $newWord) {
    $oldWord.removeClass('elementor-headline-text-active').addClass('elementor-headline-text-inactive');
    $newWord.removeClass('elementor-headline-text-inactive').addClass('elementor-headline-text-active');
    this.setDynamicWrapperWidth($newWord);
  },
  singleLetters: function singleLetters() {
    var classes = this.getSettings('classes');
    this.elements.$dynamicText.each(function () {
      var $word = jQuery(this),
          letters = $word.text().split(''),
          isActive = $word.hasClass(classes.textActive);
      $word.empty();
      letters.forEach(function (letter) {
        var $letter = jQuery('<span>', {
          class: classes.dynamicLetter
        }).text(letter);

        if (isActive) {
          $letter.addClass(classes.animationIn);
        }

        $word.append($letter);
      });
      $word.css('opacity', 1);
    });
  },
  showLetter: function showLetter($letter, $word, bool, duration) {
    var self = this,
        classes = this.getSettings('classes');
    $letter.addClass(classes.animationIn);

    if (!$letter.is(':last-child')) {
      setTimeout(function () {
        self.showLetter($letter.next(), $word, bool, duration);
      }, duration);
    } else if (!bool) {
      setTimeout(function () {
        self.hideWord($word);
      }, self.getSettings('animationDelay'));
    }
  },
  hideLetter: function hideLetter($letter, $word, bool, duration) {
    var self = this,
        settings = this.getSettings();
    $letter.removeClass(settings.classes.animationIn);

    if (!$letter.is(':last-child')) {
      setTimeout(function () {
        self.hideLetter($letter.next(), $word, bool, duration);
      }, duration);
    } else if (bool) {
      setTimeout(function () {
        self.hideWord(self.getNextWord($word));
      }, self.getSettings('animationDelay'));
    }
  },
  showWord: function showWord($word, $duration) {
    var self = this,
        settings = self.getSettings(),
        animationType = self.getElementSettings('animation_type');

    if ('typing' === animationType) {
      self.showLetter($word.find('.' + settings.classes.dynamicLetter).eq(0), $word, false, $duration);
      $word.addClass(settings.classes.textActive).removeClass(settings.classes.textInactive);
    } else if ('clip' === animationType) {
      self.elements.$dynamicWrapper.animate({
        width: $word.width() + 10
      }, settings.revealDuration, function () {
        setTimeout(function () {
          self.hideWord($word);
        }, settings.revealAnimationDelay);
      });
    }
  },
  hideWord: function hideWord($word) {
    var self = this,
        settings = self.getSettings(),
        classes = settings.classes,
        letterSelector = '.' + classes.dynamicLetter,
        animationType = self.getElementSettings('animation_type'),
        nextWord = self.getNextWord($word);

    if ('typing' === animationType) {
      self.elements.$dynamicWrapper.addClass(classes.typeSelected);
      setTimeout(function () {
        self.elements.$dynamicWrapper.removeClass(classes.typeSelected);
        $word.addClass(settings.classes.textInactive).removeClass(classes.textActive).children(letterSelector).removeClass(classes.animationIn);
      }, settings.selectionDuration);
      setTimeout(function () {
        self.showWord(nextWord, settings.typeLettersDelay);
      }, settings.typeAnimationDelay);
    } else if (self.elements.$headline.hasClass(classes.letters)) {
      var bool = $word.children(letterSelector).length >= nextWord.children(letterSelector).length;
      self.hideLetter($word.find(letterSelector).eq(0), $word, bool, settings.lettersDelay);
      self.showLetter(nextWord.find(letterSelector).eq(0), nextWord, bool, settings.lettersDelay);
      self.setDynamicWrapperWidth(nextWord);
    } else if ('clip' === animationType) {
      self.elements.$dynamicWrapper.animate({
        width: '2px'
      }, settings.revealDuration, function () {
        self.switchWord($word, nextWord);
        self.showWord(nextWord);
      });
    } else {
      self.switchWord($word, nextWord);
      setTimeout(function () {
        self.hideWord(nextWord);
      }, settings.animationDelay);
    }
  },
  setDynamicWrapperWidth: function setDynamicWrapperWidth($newWord) {
    var animationType = this.getElementSettings('animation_type');

    if ('clip' !== animationType && 'typing' !== animationType) {
      this.elements.$dynamicWrapper.css('width', $newWord.width());
    }
  },
  animateHeadline: function animateHeadline() {
    var self = this,
        animationType = self.getElementSettings('animation_type'),
        $dynamicWrapper = self.elements.$dynamicWrapper;

    if ('clip' === animationType) {
      $dynamicWrapper.width($dynamicWrapper.width() + 10);
    } else if ('typing' !== animationType) {
      //assign to .elementor-headline-dynamic-wrapper the width of its longest word
      var width = 0;
      self.elements.$dynamicText.each(function () {
        var wordWidth = jQuery(this).width();

        if (wordWidth > width) {
          width = wordWidth;
        }
      });
      $dynamicWrapper.css('width', width);
    } //trigger animation


    setTimeout(function () {
      self.hideWord(self.elements.$dynamicText.eq(0));
    }, self.getSettings('animationDelay'));
  },
  getSvgPaths: function getSvgPaths(pathName) {
    var pathsInfo = this.svgPaths[pathName],
        $paths = jQuery();
    pathsInfo.forEach(function (pathInfo) {
      $paths = $paths.add(jQuery('<path>', {
        d: pathInfo
      }));
    });
    return $paths;
  },
  fillWords: function fillWords() {
    var elementSettings = this.getElementSettings(),
        classes = this.getSettings('classes'),
        $dynamicWrapper = this.elements.$dynamicWrapper;

    if ('rotate' === elementSettings.headline_style) {
      var rotatingText = (elementSettings.rotating_text || '').split('\n');
      rotatingText.forEach(function (word, index) {
        var $dynamicText = jQuery('<span>', {
          class: classes.dynamicText
        }).html(word.replace(/ /g, '&nbsp;'));

        if (!index) {
          $dynamicText.addClass(classes.textActive);
        }

        $dynamicWrapper.append($dynamicText);
      });
    } else {
      var $dynamicText = jQuery('<span>', {
        class: classes.dynamicText + ' ' + classes.textActive
      }).text(elementSettings.highlighted_text),
          $svg = jQuery('<svg>', {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 500 150',
        preserveAspectRatio: 'none'
      }).html(this.getSvgPaths(elementSettings.marker));
      $dynamicWrapper.append($dynamicText, $svg[0].outerHTML);
    }

    this.elements.$dynamicText = $dynamicWrapper.children('.' + classes.dynamicText);
  },
  rotateHeadline: function rotateHeadline() {
    var settings = this.getSettings(); //insert <span> for each letter of a changing word

    if (this.elements.$headline.hasClass(settings.classes.letters)) {
      this.singleLetters();
    } //initialise headline animation


    this.animateHeadline();
  },
  initHeadline: function initHeadline() {
    if ('rotate' === this.getElementSettings('headline_style')) {
      this.rotateHeadline();
    }
  },
  onInit: function onInit() {
    elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);
    this.fillWords();
    this.initHeadline();
  }
});

module.exports = function ($scope) {
  new AnimatedHeadlineHandler({
    $element: $scope
  });
};

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  elementorFrontend.hooks.addAction('frontend/element_ready/media-carousel.default', __webpack_require__(166));
  elementorFrontend.hooks.addAction('frontend/element_ready/testimonial-carousel.default', __webpack_require__(22));
  elementorFrontend.hooks.addAction('frontend/element_ready/reviews.default', __webpack_require__(22));
};

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Base = __webpack_require__(21),
    MediaCarousel;

MediaCarousel = Base.extend({
  slideshowSpecialElementSettings: ['slides_per_view', 'slides_per_view_tablet', 'slides_per_view_mobile'],
  isSlideshow: function isSlideshow() {
    return 'slideshow' === this.getElementSettings('skin');
  },
  getDefaultSettings: function getDefaultSettings() {
    var defaultSettings = Base.prototype.getDefaultSettings.apply(this, arguments);

    if (this.isSlideshow()) {
      defaultSettings.selectors.thumbsSwiper = '.elementor-thumbnails-swiper';
      defaultSettings.slidesPerView = {
        desktop: 5,
        tablet: 4,
        mobile: 3
      };
    }

    return defaultSettings;
  },
  getElementSettings: function getElementSettings(setting) {
    if (-1 !== this.slideshowSpecialElementSettings.indexOf(setting) && this.isSlideshow()) {
      setting = 'slideshow_' + setting;
    }

    return Base.prototype.getElementSettings.call(this, setting);
  },
  getDefaultElements: function getDefaultElements() {
    var selectors = this.getSettings('selectors'),
        defaultElements = Base.prototype.getDefaultElements.apply(this, arguments);

    if (this.isSlideshow()) {
      defaultElements.$thumbsSwiper = this.$element.find(selectors.thumbsSwiper);
    }

    return defaultElements;
  },
  getEffect: function getEffect() {
    if ('coverflow' === this.getElementSettings('skin')) {
      return 'coverflow';
    }

    return Base.prototype.getEffect.apply(this, arguments);
  },
  getSlidesPerView: function getSlidesPerView(device) {
    if (this.isSlideshow()) {
      return 1;
    }

    if ('coverflow' === this.getElementSettings('skin')) {
      return this.getDeviceSlidesPerView(device);
    }

    return Base.prototype.getSlidesPerView.apply(this, arguments);
  },
  getSwiperOptions: function getSwiperOptions() {
    var options = Base.prototype.getSwiperOptions.apply(this, arguments);

    if (this.isSlideshow()) {
      options.loopedSlides = this.getSlidesCount();
      delete options.pagination;
      delete options.breakpoints;
    }

    return options;
  },
  onInit: function onInit() {
    Base.prototype.onInit.apply(this, arguments);
    var slidesCount = this.getSlidesCount();

    if (!this.isSlideshow() || 1 >= slidesCount) {
      return;
    }

    var elementSettings = this.getElementSettings(),
        loop = 'yes' === elementSettings.loop,
        breakpointsSettings = {},
        breakpoints = elementorFrontend.config.breakpoints,
        desktopSlidesPerView = this.getDeviceSlidesPerView('desktop');
    breakpointsSettings[breakpoints.lg - 1] = {
      slidesPerView: this.getDeviceSlidesPerView('tablet'),
      spaceBetween: this.getSpaceBetween('tablet')
    };
    breakpointsSettings[breakpoints.md - 1] = {
      slidesPerView: this.getDeviceSlidesPerView('mobile'),
      spaceBetween: this.getSpaceBetween('mobile')
    };
    var thumbsSliderOptions = {
      slidesPerView: desktopSlidesPerView,
      initialSlide: this.getInitialSlide(),
      centeredSlides: elementSettings.centered_slides,
      slideToClickedSlide: true,
      spaceBetween: this.getSpaceBetween(),
      loopedSlides: slidesCount,
      loop: loop,
      breakpoints: breakpointsSettings,
      handleElementorBreakpoints: true
    };
    this.swipers.main.controller.control = this.swipers.thumbs = new Swiper(this.elements.$thumbsSwiper, thumbsSliderOptions); // Expose the swiper instance in the frontend

    this.elements.$thumbsSwiper.data('swiper', this.swipers.thumbs);
    this.swipers.thumbs.controller.control = this.swipers.main;
  },
  onElementChange: function onElementChange(propertyName) {
    if (1 >= this.getSlidesCount()) {
      return;
    }

    if (!this.isSlideshow()) {
      Base.prototype.onElementChange.apply(this, arguments);
      return;
    }

    if (0 === propertyName.indexOf('width')) {
      this.swipers.main.update();
      this.swipers.thumbs.update();
    }

    if (0 === propertyName.indexOf('space_between')) {
      this.updateSpaceBetween(this.swipers.thumbs, propertyName);
    }
  }
});

module.exports = function ($scope) {
  new MediaCarousel({
    $element: $scope
  });
};

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  elementorFrontend.hooks.addAction('frontend/element_ready/countdown.default', __webpack_require__(168));
};

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CountDown = elementorModules.frontend.handlers.Base.extend({
  cache: null,
  cacheElements: function cacheElements() {
    var $countDown = this.$element.find('.elementor-countdown-wrapper');
    this.cache = {
      $countDown: $countDown,
      timeInterval: null,
      elements: {
        $countdown: $countDown.find('.elementor-countdown-wrapper'),
        $daysSpan: $countDown.find('.elementor-countdown-days'),
        $hoursSpan: $countDown.find('.elementor-countdown-hours'),
        $minutesSpan: $countDown.find('.elementor-countdown-minutes'),
        $secondsSpan: $countDown.find('.elementor-countdown-seconds'),
        $expireMessage: $countDown.parent().find('.elementor-countdown-expire--message')
      },
      data: {
        id: this.$element.data('id'),
        endTime: new Date($countDown.data('date') * 1000),
        actions: $countDown.data('expire-actions'),
        evergreenInterval: $countDown.data('evergreen-interval')
      }
    };
  },
  onInit: function onInit() {
    elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);
    this.cacheElements();

    if (0 < this.cache.data.evergreenInterval) {
      this.cache.data.endTime = this.getEvergreenDate();
    }

    this.initializeClock();
  },
  updateClock: function updateClock() {
    var self = this,
        timeRemaining = this.getTimeRemaining(this.cache.data.endTime);
    jQuery.each(timeRemaining.parts, function (timePart) {
      var $element = self.cache.elements['$' + timePart + 'Span'];
      var partValue = this.toString();

      if (1 === partValue.length) {
        partValue = 0 + partValue;
      }

      if ($element.length) {
        $element.text(partValue);
      }
    });

    if (timeRemaining.total <= 0) {
      clearInterval(this.cache.timeInterval);
      this.runActions();
    }
  },
  initializeClock: function initializeClock() {
    var self = this;
    this.updateClock();
    this.cache.timeInterval = setInterval(function () {
      self.updateClock();
    }, 1000);
  },
  runActions: function runActions() {
    var self = this; // Trigger general event for 3rd patry actions

    self.$element.trigger('countdown_expire', self.$element);

    if (!this.cache.data.actions) {
      return;
    }

    this.cache.data.actions.forEach(function (action) {
      switch (action.type) {
        case 'hide':
          self.cache.$countDown.hide();
          break;

        case 'redirect':
          if (action.redirect_url) {
            window.location.href = action.redirect_url;
          }

          break;

        case 'message':
          self.cache.elements.$expireMessage.show();
          break;
      }
    });
  },
  getTimeRemaining: function getTimeRemaining(endTime) {
    var timeRemaining = endTime - new Date();
    var seconds = Math.floor(timeRemaining / 1000 % 60),
        minutes = Math.floor(timeRemaining / 1000 / 60 % 60),
        hours = Math.floor(timeRemaining / (1000 * 60 * 60) % 24),
        days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

    if (days < 0 || hours < 0 || minutes < 0) {
      seconds = minutes = hours = days = 0;
    }

    return {
      total: timeRemaining,
      parts: {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      }
    };
  },
  getEvergreenDate: function getEvergreenDate() {
    var self = this,
        id = this.cache.data.id,
        interval = this.cache.data.evergreenInterval,
        dueDateKey = id + '-evergreen_due_date',
        intervalKey = id + '-evergreen_interval',
        localData = {
      dueDate: localStorage.getItem(dueDateKey),
      interval: localStorage.getItem(intervalKey)
    },
        initEvergreen = function initEvergreen() {
      var evergreenDueDate = new Date();
      self.cache.data.endTime = evergreenDueDate.setSeconds(evergreenDueDate.getSeconds() + interval);
      localStorage.setItem(dueDateKey, self.cache.data.endTime);
      localStorage.setItem(intervalKey, interval);
      return self.cache.data.endTime;
    };

    if (null === localData.dueDate && null === localData.interval) {
      return initEvergreen();
    }

    if (null !== localData.dueDate && interval !== parseInt(localData.interval, 10)) {
      return initEvergreen();
    }

    if (localData.dueDate > 0 && parseInt(localData.interval, 10) === interval) {
      return localData.dueDate;
    }
  }
});

module.exports = function ($scope) {
  new CountDown({
    $element: $scope
  });
};

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _formSteps = _interopRequireDefault(__webpack_require__(170));

var _formSender = _interopRequireDefault(__webpack_require__(171));

var _formRedirect = _interopRequireDefault(__webpack_require__(172));

module.exports = function () {
  var handlersInit = function handlersInit($scope) {
    elementorFrontend.elementsHandler.addHandler(_formSteps.default, {
      $element: $scope
    });
    elementorFrontend.elementsHandler.addHandler(_formSender.default, {
      $element: $scope
    });
    elementorFrontend.elementsHandler.addHandler(_formRedirect.default, {
      $element: $scope
    });
  };

  elementorFrontend.hooks.addAction('frontend/element_ready/form.default', handlersInit);
  elementorFrontend.hooks.addAction('frontend/element_ready/subscribe.default', handlersInit);
  elementorFrontend.hooks.addAction('frontend/element_ready/form.default', __webpack_require__(173));
  elementorFrontend.hooks.addAction('frontend/element_ready/form.default', __webpack_require__(174));
  elementorFrontend.hooks.addAction('frontend/element_ready/form.default', __webpack_require__(175));
};

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(20));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(5));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(3));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(1));

var _get3 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var FormSteps = /*#__PURE__*/function (_elementorModules$fro) {
  (0, _inherits2.default)(FormSteps, _elementorModules$fro);

  function FormSteps() {
    (0, _classCallCheck2.default)(this, FormSteps);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(FormSteps).apply(this, arguments));
  }

  (0, _createClass2.default)(FormSteps, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        selectors: {
          form: '.elementor-form',
          fieldsWrapper: '.elementor-form-fields-wrapper',
          fieldGroup: '.elementor-field-group',
          stepWrapper: '.elementor-field-type-step',
          stepField: '.e-field-step',
          submitWrapper: '.elementor-field-type-submit',
          submitButton: '[type="submit"]',
          buttons: '.e-form__buttons',
          buttonWrapper: '.e-form__buttons__wrapper',
          button: '.e-form__buttons__wrapper__button',
          indicator: '.e-form__indicators__indicator',
          indicatorProgress: '.e-form__indicators__indicator__progress',
          indicatorProgressMeter: '.e-form__indicators__indicator__progress__meter'
        },
        classes: {
          hidden: 'elementor-hidden',
          column: 'elementor-column',
          fieldGroup: 'elementor-field-group',
          elementorButton: 'elementor-button',
          step: 'e-form__step',
          buttons: 'e-form__buttons',
          buttonWrapper: 'e-form__buttons__wrapper',
          button: 'e-form__buttons__wrapper__button',
          indicators: 'e-form__indicators',
          indicator: 'e-form__indicators__indicator',
          indicatorIcon: 'e-form__indicators__indicator__icon',
          indicatorNumber: 'e-form__indicators__indicator__number',
          indicatorLabel: 'e-form__indicators__indicator__label',
          indicatorProgress: 'e-form__indicators__indicator__progress',
          indicatorProgressMeter: 'e-form__indicators__indicator__progress__meter',
          indicatorSeparator: 'e-form__indicators__indicator__separator',
          indicatorInactive: 'e-form__indicators__indicator--state-inactive',
          indicatorActive: 'e-form__indicators__indicator--state-active',
          indicatorCompleted: 'e-form__indicators__indicator--state-completed',
          indicatorShapeCircle: 'e-form__indicators__indicator--shape-circle',
          indicatorShapeSquare: 'e-form__indicators__indicator--shape-square',
          indicatorShapeRounded: 'e-form__indicators__indicator--shape-rounded',
          indicatorShapeNone: 'e-form__indicators__indicator--shape-none'
        }
      };
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var _this$getSettings = this.getSettings(),
          selectors = _this$getSettings.selectors,
          elements = {
        $form: this.$element.find(selectors.form)
      };

      elements.$fieldsWrapper = elements.$form.children(selectors.fieldsWrapper);
      elements.$stepWrapper = elements.$fieldsWrapper.children(selectors.stepWrapper);
      elements.$stepField = elements.$stepWrapper.children(selectors.stepField);
      elements.$fieldGroup = elements.$fieldsWrapper.children(selectors.fieldGroup);
      elements.$submitWrapper = elements.$fieldsWrapper.children(selectors.submitWrapper);
      elements.$submitButton = elements.$submitWrapper.children(selectors.submitButton);
      return elements;
    }
  }, {
    key: "onInit",
    value: function onInit() {
      var _get2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_get2 = (0, _get3.default)((0, _getPrototypeOf2.default)(FormSteps.prototype), "onInit", this)).call.apply(_get2, [this].concat(args));

      if (!this.isStepsExist()) {
        return;
      }

      this.data = {
        steps: []
      };
      this.state = {
        currentStep: 0,
        stepsType: '',
        stepsShape: ''
      };
      this.buildSteps();
      this.elements = (0, _objectSpread2.default)({}, this.elements, {}, this.createStepsIndicators(), {}, this.createStepsButtons());
      this.initProgressBar();
      this.extractResponsiveSizeFromSubmitWrapper();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      if (!this.isStepsExist()) {
        return;
      }

      this.elements.$form.on({
        submit: function submit() {
          return _this.resetForm();
        },
        keydown: function keydown(e) {
          if (13 === e.keyCode && !_this.isLastStep()) {
            e.preventDefault();

            _this.applyStep('next');
          }
        }
      });
    }
  }, {
    key: "isStepsExist",
    value: function isStepsExist() {
      return this.elements.$stepWrapper.length;
    }
  }, {
    key: "initProgressBar",
    value: function initProgressBar() {
      var stepsSettings = this.getElementSettings();

      if ('progress_bar' === stepsSettings.step_type) {
        this.setProgressBar();
      }
    }
  }, {
    key: "buildSteps",
    value: function buildSteps() {
      var _this2 = this;

      this.elements.$stepWrapper.each(function (index, el) {
        var _this2$getSettings = _this2.getSettings(),
            selectors = _this2$getSettings.selectors,
            classes = _this2$getSettings.classes,
            $currentStep = jQuery(el);

        $currentStep.addClass(classes.step).removeClass(classes.fieldGroup, classes.column);

        if (index) {
          $currentStep.addClass(classes.hidden);
        }

        _this2.setStepData($currentStep.children(selectors.stepField));

        $currentStep.append($currentStep.nextUntil(_this2.elements.$stepWrapper).not(_this2.elements.$submitWrapper));
      });
    }
  }, {
    key: "setStepData",
    value: function setStepData($stepElement) {
      var dataAttributes = ['label', 'previousButton', 'nextButton', 'iconUrl', 'iconLibrary'],
          stepData = {};
      dataAttributes.forEach(function (attr) {
        var attrValue = $stepElement.attr('data-' + attr);

        if (attrValue) {
          stepData[attr] = attrValue;
        }
      });
      this.data.steps.push(stepData);
    }
  }, {
    key: "createStepsIndicators",
    value: function createStepsIndicators() {
      var stepsSettings = this.getElementSettings(),
          stepsElements = {};

      if ('none' !== stepsSettings.step_type) {
        var _this$getSettings2 = this.getSettings(),
            selectors = _this$getSettings2.selectors,
            classes = _this$getSettings2.classes,
            indicatorsTypeClass = classes.indicators + '--type-' + stepsSettings.step_type,
            indicatorsClasses = [classes.indicators, indicatorsTypeClass];

        stepsElements.$indicatorsWrapper = jQuery('<div>', {
          class: indicatorsClasses.join(' ')
        });
        stepsElements.$indicatorsWrapper.append(this.buildIndicators());
        this.elements.$fieldsWrapper.before(stepsElements.$indicatorsWrapper);

        if ('progress_bar' === stepsSettings.step_type) {
          stepsElements.$progressBar = stepsElements.$indicatorsWrapper.find(selectors.indicatorProgress);
          stepsElements.$progressBarMeter = stepsElements.$indicatorsWrapper.find(selectors.indicatorProgressMeter);
        } else {
          stepsElements.$indicators = stepsElements.$indicatorsWrapper.find(selectors.indicator);
          stepsElements.$currentIndicator = stepsElements.$indicators.eq(this.state.currentStep);
        }
      }

      this.saveIndicatorsState();
      return stepsElements;
    }
  }, {
    key: "buildIndicators",
    value: function buildIndicators() {
      var stepsSettings = this.getElementSettings();
      return 'progress_bar' === stepsSettings.step_type ? this.buildProgressBar() : this.buildIndicatorsFromStepsData();
    }
  }, {
    key: "buildProgressBar",
    value: function buildProgressBar() {
      var _this$getSettings3 = this.getSettings(),
          classes = _this$getSettings3.classes,
          $progressBar = jQuery('<div>', {
        class: classes.indicatorProgress
      }),
          $progressBarMeter = jQuery('<div>', {
        class: classes.indicatorProgressMeter
      });

      $progressBar.append($progressBarMeter);
      return $progressBar;
    }
  }, {
    key: "getProgressBarValue",
    value: function getProgressBarValue() {
      var totalSteps = this.data.steps.length,
          currentStep = this.state.currentStep,
          percentage = currentStep ? (currentStep + 1) / totalSteps * 100 : 100 / totalSteps;
      return Math.floor(percentage) + '%';
    }
  }, {
    key: "setProgressBar",
    value: function setProgressBar() {
      var progressBarValue = this.getProgressBarValue();
      this.updateProgressMeterCSSVariable(progressBarValue);
      this.elements.$progressBarMeter.text(progressBarValue);
    }
  }, {
    key: "updateProgressMeterCSSVariable",
    value: function updateProgressMeterCSSVariable(value) {
      this.$element[0].style.setProperty('--e-form-steps-indicator-progress-meter-width', value);
    }
  }, {
    key: "saveIndicatorsState",
    value: function saveIndicatorsState() {
      var stepsSettings = this.getElementSettings();
      this.state.stepsType = stepsSettings.step_type;

      if (!['none', 'text', 'progress_bar'].includes(stepsSettings.step_type)) {
        this.state.stepsShape = stepsSettings.step_icon_shape;
      }
    }
  }, {
    key: "buildIndicatorsFromStepsData",
    value: function buildIndicatorsFromStepsData() {
      var _this3 = this;

      var indicators = [];
      this.data.steps.forEach(function (stepObj, index) {
        if (index) {
          indicators.push(_this3.getStepSeparator());
        }

        indicators.push(_this3.getStepIndicatorElement(stepObj, index));
      });
      return indicators;
    }
  }, {
    key: "getStepIndicatorElement",
    value: function getStepIndicatorElement(stepObj, index) {
      var _this$getSettings4 = this.getSettings(),
          classes = _this$getSettings4.classes,
          stepsSettings = this.getElementSettings(),
          indicatorStateClass = this.getIndicatorStateClass(index),
          indicatorClasses = [classes.indicator, indicatorStateClass],
          $stepIndicator = jQuery('<div>', {
        class: indicatorClasses.join(' ')
      });

      if (stepsSettings.step_type.includes('icon')) {
        $stepIndicator.append(this.getStepIconElement(stepObj));
      }

      if (stepsSettings.step_type.includes('number')) {
        $stepIndicator.append(this.getStepNumberElement(index));
      }

      if (stepsSettings.step_type.includes('text')) {
        $stepIndicator.append(this.getStepLabelElement(stepObj.label));
      }

      return $stepIndicator;
    }
  }, {
    key: "getIndicatorStateClass",
    value: function getIndicatorStateClass(index) {
      var _this$getSettings5 = this.getSettings(),
          classes = _this$getSettings5.classes;

      if (index < this.state.currentStep) {
        return classes.indicatorCompleted;
      } else if (index > this.state.currentStep) {
        return classes.indicatorInactive;
      }

      return classes.indicatorActive;
    }
  }, {
    key: "getIndicatorShapeClass",
    value: function getIndicatorShapeClass() {
      var stepsSettings = this.getElementSettings(),
          _this$getSettings6 = this.getSettings(),
          classes = _this$getSettings6.classes;

      return classes['indicatorShape' + this.firstLetterToUppercase(stepsSettings.step_icon_shape)];
    }
  }, {
    key: "firstLetterToUppercase",
    value: function firstLetterToUppercase(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  }, {
    key: "getStepNumberElement",
    value: function getStepNumberElement(index) {
      var _this$getSettings7 = this.getSettings(),
          classes = _this$getSettings7.classes,
          numberClasses = [classes.indicatorNumber, this.getIndicatorShapeClass()];

      return jQuery('<div>', {
        class: numberClasses.join(' '),
        text: index + 1
      });
    }
  }, {
    key: "getStepIconElement",
    value: function getStepIconElement(stepObj) {
      var _this$getSettings8 = this.getSettings(),
          classes = _this$getSettings8.classes,
          iconClasses = [classes.indicatorIcon, this.getIndicatorShapeClass()],
          $icon = jQuery('<div>', {
        class: iconClasses.join(' ')
      }),
          iconType = stepObj.iconLibrary ? '<i>' : '<img>',
          iconAttrObj = stepObj.iconLibrary ? {
        class: stepObj.iconLibrary
      } : {
        src: stepObj.iconUrl
      };

      $icon.append(jQuery(iconType, iconAttrObj));
      return $icon;
    }
  }, {
    key: "getStepLabelElement",
    value: function getStepLabelElement(label) {
      var _this$getSettings9 = this.getSettings(),
          classes = _this$getSettings9.classes;

      return jQuery('<label>', {
        class: classes.indicatorLabel,
        text: label
      });
    }
  }, {
    key: "getStepSeparator",
    value: function getStepSeparator() {
      var _this$getSettings10 = this.getSettings(),
          classes = _this$getSettings10.classes;

      return jQuery('<div>', {
        class: classes.indicatorSeparator
      });
    }
  }, {
    key: "createStepsButtons",
    value: function createStepsButtons() {
      var _this$getSettings11 = this.getSettings(),
          selectors = _this$getSettings11.selectors,
          stepsElements = {};

      this.injectButtonsToSteps(stepsElements);
      stepsElements.$buttonsContainer = this.elements.$stepWrapper.find(selectors.buttons);
      stepsElements.$buttonsWrappers = stepsElements.$buttonsContainer.children(selectors.buttonWrapper);
      return stepsElements;
    }
  }, {
    key: "injectButtonsToSteps",
    value: function injectButtonsToSteps() {
      var _this4 = this;

      var totalSteps = this.elements.$stepWrapper.length;
      this.elements.$stepWrapper.each(function (index, el) {
        var $el = jQuery(el),
            $container = _this4.getButtonsContainer();

        var $nextButton;

        if (index) {
          $container.append(_this4.getStepButton('previous', index));
          $nextButton = index === totalSteps - 1 ? _this4.getSubmitButton() : _this4.getStepButton('next', index);
        } else {
          $nextButton = _this4.getStepButton('next', index);
        }

        $container.append($nextButton);
        $el.append($container);
      });
    }
  }, {
    key: "getButtonsContainer",
    value: function getButtonsContainer() {
      var _this$getSettings12 = this.getSettings(),
          classes = _this$getSettings12.classes,
          stepsSettings = this.getElementSettings(),
          buttonColumnWidthClasses = [classes.buttons, classes.column, 'elementor-col-' + stepsSettings.button_width];

      return jQuery('<div>', {
        class: buttonColumnWidthClasses.join(' ')
      });
    }
  }, {
    key: "extractResponsiveSizeFromSubmitWrapper",
    value: function extractResponsiveSizeFromSubmitWrapper() {
      var sizeClasses = [];
      this.elements.$submitWrapper.removeClass(function (index, className) {
        var _className$match;

        sizeClasses = (_className$match = className.match(/elementor-(sm|md)-[0-9]+/g)) === null || _className$match === void 0 ? void 0 : _className$match.join(' ');
        return sizeClasses;
      });
      this.elements.$buttonsContainer.addClass(sizeClasses);
    }
  }, {
    key: "getStepButton",
    value: function getStepButton(buttonType, index) {
      var _this5 = this;

      var _this$getSettings13 = this.getSettings(),
          classes = _this$getSettings13.classes,
          $button = this.getButton(buttonType, index).on('click', function () {
        return _this5.applyStep(buttonType);
      }),
          buttonWrapperClasses = [classes.fieldGroup, classes.buttonWrapper, 'elementor-field-type-' + buttonType];

      return jQuery('<div>', {
        class: buttonWrapperClasses.join(' ')
      }).append($button);
    }
  }, {
    key: "getSubmitButton",
    value: function getSubmitButton() {
      var _this6 = this;

      var _this$getSettings14 = this.getSettings(),
          classes = _this$getSettings14.classes;

      this.elements.$submitButton.addClass(classes.button); // TODO: When a solution for the conditions will be found, check if can remove the elementor-col-x manipulation.

      return this.elements.$submitWrapper.attr('class', function (index, className) {
        return _this6.replaceClassNameColSize(className, '');
      }).removeClass(classes.column).removeClass(classes.buttons).addClass(classes.buttonWrapper);
    }
  }, {
    key: "replaceClassNameColSize",
    value: function replaceClassNameColSize(className, value) {
      return className.replace(/elementor-col-([0-9]+)/g, value);
    }
  }, {
    key: "getButton",
    value: function getButton(buttonType, index) {
      var _this$getSettings15 = this.getSettings(),
          classes = _this$getSettings15.classes,
          submitSizeClass = this.elements.$submitButton.attr('class').match(/elementor-size-([^\W\d]+)/g),
          buttonClasses = [classes.elementorButton, submitSizeClass, classes.button, classes.button + '-' + buttonType];

      return jQuery('<input>', {
        type: 'button',
        val: this.getButtonLabel(buttonType, index),
        class: buttonClasses.join(' ')
      });
    }
  }, {
    key: "getButtonLabel",
    value: function getButtonLabel(buttonType, index) {
      var stepsSettings = this.getElementSettings(),
          stepData = this.data.steps[index],
          buttonName = buttonType + 'Button',
          buttonSettingsProp = "step_".concat(buttonType, "_label");
      return stepData[buttonName] || stepsSettings[buttonSettingsProp];
    }
  }, {
    key: "applyStep",
    value: function applyStep(direction) {
      var nextIndex = 'next' === direction ? this.state.currentStep + 1 : this.state.currentStep - 1;

      if ('next' === direction && !this.isFieldsValid(this.elements.$stepWrapper)) {
        return false;
      }

      this.goToStep(nextIndex);
      this.state.currentStep = nextIndex;

      if ('progress_bar' === this.state.stepsType) {
        this.setProgressBar();
      } else if ('none' !== this.state.stepsType) {
        this.updateIndicatorsState(direction);
      }
    }
  }, {
    key: "goToStep",
    value: function goToStep(index) {
      var _this$getSettings16 = this.getSettings(),
          classes = _this$getSettings16.classes;

      this.elements.$stepWrapper.eq(this.state.currentStep).addClass(classes.hidden);
      this.elements.$stepWrapper.eq(index).removeClass(classes.hidden).children(this.getSettings('selectors.fieldGroup')).first().find(':input').first().focus();
    }
  }, {
    key: "isFieldsValid",
    value: function isFieldsValid($stepWrapper) {
      var isValid = true;
      $stepWrapper.eq(this.state.currentStep).find('.elementor-field-group [required]').each(function (index, el) {
        if (!el.checkValidity()) {
          el.reportValidity();
          return isValid = false;
        }
      });
      return isValid;
    }
  }, {
    key: "isLastStep",
    value: function isLastStep() {
      return this.state.currentStep === this.data.steps.length - 1;
    }
  }, {
    key: "resetForm",
    value: function resetForm() {
      this.state.currentStep = 0;
      this.resetSteps();

      if ('progress_bar' === this.state.stepsType) {
        this.setProgressBar();
      } else if ('none' !== this.state.stepsType) {
        this.elements.$currentIndicator = this.elements.$indicators.eq(this.state.currentStep);
        this.resetIndicators();
      }
    }
  }, {
    key: "resetSteps",
    value: function resetSteps() {
      var _this$getSettings17 = this.getSettings(),
          classes = _this$getSettings17.classes;

      this.elements.$stepWrapper.addClass(classes.hidden).eq(0).removeClass(classes.hidden);
    }
  }, {
    key: "resetIndicators",
    value: function resetIndicators() {
      var _this$getSettings18 = this.getSettings(),
          classes = _this$getSettings18.classes,
          stateTypes = ['inactive', 'active', 'completed'],
          stateClasses = stateTypes.map(function (state) {
        return classes.indicator + '--state-' + state;
      });

      this.elements.$indicators.removeClass(stateClasses.join(' ')).not(':eq(0)').addClass(classes.indicatorInactive);
      this.elements.$indicators.eq(0).addClass(classes.indicatorActive);
    }
  }, {
    key: "updateIndicatorsState",
    value: function updateIndicatorsState(direction) {
      var _this$getSettings19 = this.getSettings(),
          classes = _this$getSettings19.classes,
          indicatorsClasses = {
        current: {
          remove: classes.indicatorActive,
          add: 'next' === direction ? classes.indicatorCompleted : classes.indicatorInactive
        },
        next: {
          remove: 'next' === direction ? classes.indicatorInactive : classes.indicatorCompleted,
          add: classes.indicatorActive
        }
      };

      this.elements.$currentIndicator.removeClass(indicatorsClasses.current.remove).addClass(indicatorsClasses.current.add);
      this.elements.$currentIndicator = this.elements.$indicators.eq(this.state.currentStep);
      this.elements.$currentIndicator.removeClass(indicatorsClasses.next.remove).addClass(indicatorsClasses.next.add);
    }
  }, {
    key: "updateValue",
    value: function updateValue(updatedValue) {
      var _this7 = this;

      var actionsMap = {
        step_type: function step_type() {
          return _this7.updateStepsType();
        },
        step_icon_shape: function step_icon_shape() {
          return _this7.updateStepsShape();
        },
        step_next_label: function step_next_label() {
          return _this7.updateStepButtonsLabel('next');
        },
        step_previous_label: function step_previous_label() {
          return _this7.updateStepButtonsLabel('previous');
        }
      };

      if (actionsMap[updatedValue]) {
        actionsMap[updatedValue]();
      }
    }
  }, {
    key: "updateStepsType",
    value: function updateStepsType() {
      var stepsSettings = this.getElementSettings();

      if (this.elements.$indicatorsWrapper) {
        this.elements.$indicatorsWrapper.remove();
      }

      if ('none' !== stepsSettings.step_type) {
        this.rebuildIndicators();
      }

      this.state.stepsType = stepsSettings.step_type;
    }
  }, {
    key: "rebuildIndicators",
    value: function rebuildIndicators() {
      this.elements = (0, _objectSpread2.default)({}, this.elements, {}, this.createStepsIndicators());
      this.initProgressBar();
    }
  }, {
    key: "updateStepsShape",
    value: function updateStepsShape() {
      var stepsSettings = this.getElementSettings(),
          _this$getSettings20 = this.getSettings(),
          selectors = _this$getSettings20.selectors,
          classes = _this$getSettings20.classes,
          shapeClassStart = classes.indicator + '--shape-',
          currentShapeClass = shapeClassStart + this.state.stepsShape,
          newShapeClass = shapeClassStart + stepsSettings.step_icon_shape;

      var elementsTargetType = '';

      if (stepsSettings.step_type.includes('icon')) {
        elementsTargetType = 'icon';
      } else if (stepsSettings.step_type.includes('number')) {
        elementsTargetType = 'number';
      }

      this.elements.$indicators.children(selectors.indicator + '__' + elementsTargetType).removeClass(currentShapeClass).addClass(newShapeClass);
      this.state.stepsShape = stepsSettings.step_icon_shape;
    }
  }, {
    key: "updateStepButtonsLabel",
    value: function updateStepButtonsLabel(buttonType) {
      var _this8 = this;

      var _this$getSettings21 = this.getSettings(),
          selectors = _this$getSettings21.selectors,
          buttonSelector = {
        previous: selectors.button + '-previous',
        next: selectors.button + '-next'
      };

      this.elements.$stepWrapper.each(function (index, el) {
        jQuery(el).find(buttonSelector[buttonType]).val(_this8.getButtonLabel(buttonType, index));
      });
    }
  }, {
    key: "onElementChange",
    value: function onElementChange(updatedValue) {
      if (!this.isStepsExist()) {
        return;
      }

      this.updateValue(updatedValue);
    }
  }]);
  return FormSteps;
}(elementorModules.frontend.handlers.Base);

exports.default = FormSteps;

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elementorModules.frontend.handlers.Base.extend({
  getDefaultSettings: function getDefaultSettings() {
    return {
      selectors: {
        form: '.elementor-form',
        submitButton: '[type="submit"]'
      },
      action: 'elementor_pro_forms_send_form',
      ajaxUrl: elementorProFrontend.config.ajaxurl
    };
  },
  getDefaultElements: function getDefaultElements() {
    var selectors = this.getSettings('selectors'),
        elements = {};
    elements.$form = this.$element.find(selectors.form);
    elements.$submitButton = elements.$form.find(selectors.submitButton);
    return elements;
  },
  bindEvents: function bindEvents() {
    this.elements.$form.on('submit', this.handleSubmit);
    var $fileInput = this.elements.$form.find('input[type=file]');

    if ($fileInput.length) {
      $fileInput.on('change', this.validateFileSize);
    }
  },
  validateFileSize: function validateFileSize(event) {
    var _this = this;

    var $field = jQuery(event.currentTarget),
        files = $field[0].files;

    if (!files.length) {
      return;
    }

    var maxSize = parseInt($field.attr('data-maxsize')) * 1024 * 1024,
        maxSizeMessage = $field.attr('data-maxsize-message');
    var filesArray = Array.prototype.slice.call(files);
    filesArray.forEach(function (file) {
      if (maxSize < file.size) {
        $field.parent().addClass('elementor-error').append('<span class="elementor-message elementor-message-danger elementor-help-inline elementor-form-help-inline" role="alert">' + maxSizeMessage + '</span>').find(':input').attr('aria-invalid', 'true');

        _this.elements.$form.trigger('error');
      }
    });
  },
  beforeSend: function beforeSend() {
    var $form = this.elements.$form;
    $form.animate({
      opacity: '0.45'
    }, 500).addClass('elementor-form-waiting');
    $form.find('.elementor-message').remove();
    $form.find('.elementor-error').removeClass('elementor-error');
    $form.find('div.elementor-field-group').removeClass('error').find('span.elementor-form-help-inline').remove().end().find(':input').attr('aria-invalid', 'false');
    this.elements.$submitButton.attr('disabled', 'disabled').find('> span').prepend('<span class="elementor-button-text elementor-form-spinner"><i class="fa fa-spinner fa-spin"></i>&nbsp;</span>');
  },
  getFormData: function getFormData() {
    var formData = new FormData(this.elements.$form[0]);
    formData.append('action', this.getSettings('action'));
    formData.append('referrer', location.toString());
    return formData;
  },
  onSuccess: function onSuccess(response) {
    var $form = this.elements.$form;
    this.elements.$submitButton.removeAttr('disabled').find('.elementor-form-spinner').remove();
    $form.animate({
      opacity: '1'
    }, 100).removeClass('elementor-form-waiting');

    if (!response.success) {
      if (response.data.errors) {
        jQuery.each(response.data.errors, function (key, title) {
          $form.find('#form-field-' + key).parent().addClass('elementor-error').append('<span class="elementor-message elementor-message-danger elementor-help-inline elementor-form-help-inline" role="alert">' + title + '</span>').find(':input').attr('aria-invalid', 'true');
        });
        $form.trigger('error');
      }

      $form.append('<div class="elementor-message elementor-message-danger" role="alert">' + response.data.message + '</div>');
    } else {
      $form.trigger('submit_success', response.data); // For actions like redirect page

      $form.trigger('form_destruct', response.data);
      $form.trigger('reset');

      if ('undefined' !== typeof response.data.message && '' !== response.data.message) {
        $form.append('<div class="elementor-message elementor-message-success" role="alert">' + response.data.message + '</div>');
      }
    }
  },
  onError: function onError(xhr, desc) {
    var $form = this.elements.$form;
    $form.append('<div class="elementor-message elementor-message-danger" role="alert">' + desc + '</div>');
    this.elements.$submitButton.html(this.elements.$submitButton.text()).removeAttr('disabled');
    $form.animate({
      opacity: '1'
    }, 100).removeClass('elementor-form-waiting');
    $form.trigger('error');
  },
  handleSubmit: function handleSubmit(event) {
    var self = this,
        $form = this.elements.$form;
    event.preventDefault();

    if ($form.hasClass('elementor-form-waiting')) {
      return false;
    }

    this.beforeSend();
    jQuery.ajax({
      url: self.getSettings('ajaxUrl'),
      type: 'POST',
      dataType: 'json',
      data: self.getFormData(),
      processData: false,
      contentType: false,
      success: self.onSuccess,
      error: self.onError
    });
  }
});

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elementorModules.frontend.handlers.Base.extend({
  getDefaultSettings: function getDefaultSettings() {
    return {
      selectors: {
        form: '.elementor-form'
      }
    };
  },
  getDefaultElements: function getDefaultElements() {
    var selectors = this.getSettings('selectors'),
        elements = {};
    elements.$form = this.$element.find(selectors.form);
    return elements;
  },
  bindEvents: function bindEvents() {
    this.elements.$form.on('form_destruct', this.handleSubmit);
  },
  handleSubmit: function handleSubmit(event, response) {
    if ('undefined' !== typeof response.data.redirect_url) {
      location.href = response.data.redirect_url;
    }
  }
});

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function ($scope) {
  var $element = $scope.find('.elementor-g-recaptcha:last');
  var captchaIds = [];

  if (!$element.length) {
    return;
  }

  var addRecaptcha = function addRecaptcha($elementRecaptcha) {
    var $form = $elementRecaptcha.parents('form'),
        settings = $elementRecaptcha.data(),
        isV2 = 'v3' !== settings.type;
    captchaIds.forEach(function (id) {
      return grecaptcha.reset(id);
    });
    var widgetId = grecaptcha.render($elementRecaptcha[0], settings);
    $form.on('reset error', function () {
      grecaptcha.reset(widgetId);
    });

    if (isV2) {
      $elementRecaptcha.data('widgetId', widgetId);
    } else {
      captchaIds.push(widgetId);
      $form.find('button[type="submit"]').on('click', function (e) {
        e.preventDefault();
        grecaptcha.ready(function () {
          grecaptcha.execute(widgetId, {
            action: $elementRecaptcha.data('action')
          }).then(function (token) {
            $form.find('[name="g-recaptcha-response"]').remove();
            $form.append(jQuery('<input>', {
              type: 'hidden',
              value: token,
              name: 'g-recaptcha-response'
            }));
            $form.submit();
          });
        });
      });
    }
  };

  var onRecaptchaApiReady = function onRecaptchaApiReady(callback) {
    if (window.grecaptcha && window.grecaptcha.render) {
      callback();
    } else {
      // If not ready check again by timeout..
      setTimeout(function () {
        onRecaptchaApiReady(callback);
      }, 350);
    }
  };

  onRecaptchaApiReady(function () {
    addRecaptcha($element);
  });
};

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function ($scope, $) {
  var $elements = $scope.find('.elementor-date-field');

  if (!$elements.length) {
    return;
  }

  var addDatePicker = function addDatePicker($element) {
    if ($($element).hasClass('elementor-use-native')) {
      return;
    }

    var options = {
      minDate: $($element).attr('min') || null,
      maxDate: $($element).attr('max') || null,
      allowInput: true
    };
    $element.flatpickr(options);
  };

  $.each($elements, function (i, $element) {
    addDatePicker($element);
  });
};

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function ($scope, $) {
  var $elements = $scope.find('.elementor-time-field');

  if (!$elements.length) {
    return;
  }

  var addTimePicker = function addTimePicker($element) {
    if ($($element).hasClass('elementor-use-native')) {
      return;
    }

    $element.flatpickr({
      noCalendar: true,
      enableTime: true,
      allowInput: true
    });
  };

  $.each($elements, function (i, $element) {
    addTimePicker($element);
  });
};

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  if (jQuery.fn.smartmenus) {
    // Override the default stupid detection
    jQuery.SmartMenus.prototype.isCSSOn = function () {
      return true;
    };

    if (elementorFrontend.config.is_rtl) {
      jQuery.fn.smartmenus.defaults.rightToLeftSubMenus = true;
    }
  }

  elementorFrontend.hooks.addAction('frontend/element_ready/nav-menu.default', __webpack_require__(177));
};

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MenuHandler = elementorModules.frontend.handlers.Base.extend({
  stretchElement: null,
  getDefaultSettings: function getDefaultSettings() {
    return {
      selectors: {
        menu: '.elementor-nav-menu',
        anchorLink: '.elementor-nav-menu--main .elementor-item-anchor',
        dropdownMenu: '.elementor-nav-menu__container.elementor-nav-menu--dropdown',
        menuToggle: '.elementor-menu-toggle'
      }
    };
  },
  getDefaultElements: function getDefaultElements() {
    var selectors = this.getSettings('selectors'),
        elements = {};
    elements.$menu = this.$element.find(selectors.menu);
    elements.$anchorLink = this.$element.find(selectors.anchorLink);
    elements.$dropdownMenu = this.$element.find(selectors.dropdownMenu);
    elements.$dropdownMenuFinalItems = elements.$dropdownMenu.find('.menu-item:not(.menu-item-has-children) > a');
    elements.$menuToggle = this.$element.find(selectors.menuToggle);
    return elements;
  },
  bindEvents: function bindEvents() {
    if (!this.elements.$menu.length) {
      return;
    }

    this.elements.$menuToggle.on('click', this.toggleMenu.bind(this));

    if (this.getElementSettings('full_width')) {
      this.elements.$dropdownMenuFinalItems.on('click', this.toggleMenu.bind(this, false));
    }

    elementorFrontend.addListenerOnce(this.$element.data('model-cid'), 'resize', this.stretchMenu);
  },
  initStretchElement: function initStretchElement() {
    this.stretchElement = new elementorModules.frontend.tools.StretchElement({
      element: this.elements.$dropdownMenu
    });
  },
  toggleMenu: function toggleMenu(show) {
    var isDropdownVisible = this.elements.$menuToggle.hasClass('elementor-active');

    if ('boolean' !== typeof show) {
      show = !isDropdownVisible;
    }

    this.elements.$menuToggle.attr('aria-expanded', show);
    this.elements.$dropdownMenu.attr('aria-hidden', !show);
    this.elements.$menuToggle.toggleClass('elementor-active', show);

    if (show && this.getElementSettings('full_width')) {
      this.stretchElement.stretch();
    }
  },
  followMenuAnchors: function followMenuAnchors() {
    var self = this;
    self.elements.$anchorLink.each(function () {
      if (location.pathname === this.pathname && '' !== this.hash) {
        self.followMenuAnchor(jQuery(this));
      }
    });
  },
  followMenuAnchor: function followMenuAnchor($element) {
    var anchorSelector = $element[0].hash;
    var offset = -300,
        $anchor;

    try {
      // `decodeURIComponent` for UTF8 characters in the hash.
      $anchor = jQuery(decodeURIComponent(anchorSelector));
    } catch (e) {
      return;
    }

    if (!$anchor.length) {
      return;
    }

    if (!$anchor.hasClass('elementor-menu-anchor')) {
      var halfViewport = jQuery(window).height() / 2;
      offset = -$anchor.outerHeight() + halfViewport;
    }

    elementorFrontend.waypoint($anchor, function (direction) {
      if ('down' === direction) {
        $element.addClass('elementor-item-active');
      } else {
        $element.removeClass('elementor-item-active');
      }
    }, {
      offset: '50%',
      triggerOnce: false
    });
    elementorFrontend.waypoint($anchor, function (direction) {
      if ('down' === direction) {
        $element.removeClass('elementor-item-active');
      } else {
        $element.addClass('elementor-item-active');
      }
    }, {
      offset: offset,
      triggerOnce: false
    });
  },
  stretchMenu: function stretchMenu() {
    if (this.getElementSettings('full_width')) {
      this.stretchElement.stretch();
      this.elements.$dropdownMenu.css('top', this.elements.$menuToggle.outerHeight());
    } else {
      this.stretchElement.reset();
    }
  },
  onInit: function onInit() {
    elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);

    if (!this.elements.$menu.length) {
      return;
    }

    this.elements.$menu.smartmenus({
      subIndicatorsText: '<i class="fa"></i>',
      subIndicatorsPos: 'append',
      subMenusMaxWidth: '1000px'
    });
    this.initStretchElement();
    this.stretchMenu();

    if (!elementorFrontend.isEditMode()) {
      this.followMenuAnchors();
    }
  },
  onElementChange: function onElementChange(propertyName) {
    if ('full_width' === propertyName) {
      this.stretchMenu();
    }
  }
});

module.exports = function ($scope) {
  new MenuHandler({
    $element: $scope
  });
};

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var PostsModule = __webpack_require__(16),
      CardsModule = __webpack_require__(23),
      PortfolioModule = __webpack_require__(179);

  elementorFrontend.hooks.addAction('frontend/element_ready/posts.classic', function ($scope) {
    new PostsModule({
      $element: $scope
    });
  });
  elementorFrontend.hooks.addAction('frontend/element_ready/posts.full_content', function ($scope) {
    new PostsModule({
      $element: $scope
    });
  });
  elementorFrontend.hooks.addAction('frontend/element_ready/posts.cards', function ($scope) {
    new CardsModule({
      $element: $scope
    });
  });
  elementorFrontend.hooks.addAction('frontend/element_ready/portfolio.default', function ($scope) {
    if (!$scope.find('.elementor-portfolio').length) {
      return;
    }

    new PortfolioModule({
      $element: $scope
    });
  });
};

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PostsHandler = __webpack_require__(16);

module.exports = PostsHandler.extend({
  getSkinPrefix: function getSkinPrefix() {
    return '';
  },
  getDefaultSettings: function getDefaultSettings() {
    var settings = PostsHandler.prototype.getDefaultSettings.apply(this, arguments);
    settings.transitionDuration = 450;
    jQuery.extend(settings.classes, {
      active: 'elementor-active',
      item: 'elementor-portfolio-item',
      ghostItem: 'elementor-portfolio-ghost-item'
    });
    return settings;
  },
  getDefaultElements: function getDefaultElements() {
    var elements = PostsHandler.prototype.getDefaultElements.apply(this, arguments);
    elements.$filterButtons = this.$element.find('.elementor-portfolio__filter');
    return elements;
  },
  getOffset: function getOffset(itemIndex, itemWidth, itemHeight) {
    var settings = this.getSettings(),
        itemGap = this.elements.$postsContainer.width() / settings.colsCount - itemWidth;
    itemGap += itemGap / (settings.colsCount - 1);
    return {
      start: (itemWidth + itemGap) * (itemIndex % settings.colsCount),
      top: (itemHeight + itemGap) * Math.floor(itemIndex / settings.colsCount)
    };
  },
  getClosureMethodsNames: function getClosureMethodsNames() {
    var baseClosureMethods = PostsHandler.prototype.getClosureMethodsNames.apply(this, arguments);
    return baseClosureMethods.concat(['onFilterButtonClick']);
  },
  filterItems: function filterItems(term) {
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
  removeExtraGhostItems: function removeExtraGhostItems() {
    var settings = this.getSettings(),
        $shownItems = this.elements.$posts.filter(':visible'),
        emptyColumns = (settings.colsCount - $shownItems.length % settings.colsCount) % settings.colsCount,
        $ghostItems = this.elements.$postsContainer.find('.' + settings.classes.ghostItem);
    $ghostItems.slice(emptyColumns).remove();
  },
  handleEmptyColumns: function handleEmptyColumns() {
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
  showItems: function showItems($activeHiddenItems) {
    $activeHiddenItems.show();
    setTimeout(function () {
      $activeHiddenItems.css({
        opacity: 1
      });
    });
  },
  hideItems: function hideItems($inactiveShownItems) {
    $inactiveShownItems.hide();
  },
  arrangeGrid: function arrangeGrid() {
    var $ = jQuery,
        self = this,
        settings = self.getSettings(),
        $activeItems = self.elements.$posts.filter('.' + settings.classes.active),
        $inactiveItems = self.elements.$posts.not('.' + settings.classes.active),
        $shownItems = self.elements.$posts.filter(':visible'),
        $activeOrShownItems = $activeItems.add($shownItems),
        $activeShownItems = $activeItems.filter(':visible'),
        $activeHiddenItems = $activeItems.filter(':hidden'),
        $inactiveShownItems = $inactiveItems.filter(':visible'),
        itemWidth = $shownItems.outerWidth(),
        itemHeight = $shownItems.outerHeight();
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
  activeFilterButton: function activeFilterButton(filter) {
    var activeClass = this.getSettings('classes.active'),
        $filterButtons = this.elements.$filterButtons,
        $button = $filterButtons.filter('[data-filter="' + filter + '"]');
    $filterButtons.removeClass(activeClass);
    $button.addClass(activeClass);
  },
  setFilter: function setFilter(filter) {
    this.activeFilterButton(filter);
    this.filterItems(filter);
    this.arrangeGrid();
  },
  refreshGrid: function refreshGrid() {
    this.setColsCountSettings();
    this.arrangeGrid();
  },
  bindEvents: function bindEvents() {
    PostsHandler.prototype.bindEvents.apply(this, arguments);
    this.elements.$filterButtons.on('click', this.onFilterButtonClick);
  },
  isMasonryEnabled: function isMasonryEnabled() {
    return !!this.getElementSettings('masonry');
  },
  run: function run() {
    PostsHandler.prototype.run.apply(this, arguments);
    this.setColsCountSettings();
    this.setFilter('__all');
    this.handleEmptyColumns();
  },
  onFilterButtonClick: function onFilterButtonClick(event) {
    this.setFilter(jQuery(event.currentTarget).data('filter'));
  },
  onWindowResize: function onWindowResize() {
    PostsHandler.prototype.onWindowResize.apply(this, arguments);
    this.refreshGrid();
  },
  onElementChange: function onElementChange(propertyName) {
    PostsHandler.prototype.onElementChange.apply(this, arguments);

    if ('classic_item_ratio' === propertyName) {
      this.refreshGrid();
    }
  }
});

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  if (!elementorFrontend.isEditMode()) {
    elementorFrontend.hooks.addAction('frontend/element_ready/share-buttons.default', __webpack_require__(181));
  }
};

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ShareButtonsHandler = elementorModules.frontend.handlers.Base.extend({
  onInit: function onInit() {
    elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);
    var elementSettings = this.getElementSettings(),
        classes = this.getSettings('classes'),
        isCustomURL = elementSettings.share_url && elementSettings.share_url.url,
        shareLinkSettings = {
      classPrefix: classes.shareLinkPrefix
    };

    if (isCustomURL) {
      shareLinkSettings.url = elementSettings.share_url.url;
    } else {
      shareLinkSettings.url = location.href;
      shareLinkSettings.title = elementorFrontend.config.post.title;
      shareLinkSettings.text = elementorFrontend.config.post.excerpt;
      shareLinkSettings.image = elementorFrontend.config.post.featuredImage;
    }
    /**
     * Ad Blockers may block the share script. (/assets/lib/social-share/social-share.js).
     */


    if (!this.elements.$shareButton.shareLink) {
      return;
    }

    this.elements.$shareButton.shareLink(shareLinkSettings);
  },
  getDefaultSettings: function getDefaultSettings() {
    return {
      selectors: {
        shareButton: '.elementor-share-btn'
      },
      classes: {
        shareLinkPrefix: 'elementor-share-btn_'
      }
    };
  },
  getDefaultElements: function getDefaultElements() {
    var selectors = this.getSettings('selectors');
    return {
      $shareButton: this.$element.find(selectors.shareButton)
    };
  }
});

module.exports = function ($scope) {
  new ShareButtonsHandler({
    $element: $scope
  });
};

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  elementorFrontend.hooks.addAction('frontend/element_ready/slides.default', __webpack_require__(183));
};

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SlidesHandler = elementorModules.frontend.handlers.Base.extend({
  getDefaultSettings: function getDefaultSettings() {
    return {
      selectors: {
        slider: '.elementor-slides-wrapper',
        slide: '.swiper-slide',
        slideBackground: '.swiper-slide-bg',
        slideInnerContents: '.swiper-slide-contents',
        activeSlide: '.swiper-slide-active',
        activeDuplicate: '.swiper-slide-duplicate-active'
      },
      classes: {
        animated: 'animated',
        kenBurnsActive: 'elementor-ken-burns--active'
      },
      attributes: {
        dataSliderOptions: 'slider_options',
        dataAnimation: 'animation'
      }
    };
  },
  getDefaultElements: function getDefaultElements() {
    var selectors = this.getSettings('selectors');
    var elements = {
      $slider: this.$element.find(selectors.slider)
    };
    elements.$mainSwiperSlides = elements.$slider.find(selectors.slide);
    return elements;
  },
  getSlidesCount: function getSlidesCount() {
    return this.elements.$mainSwiperSlides.length;
  },
  getInitialSlide: function getInitialSlide() {
    var editSettings = this.getEditSettings();
    return editSettings.activeItemIndex ? editSettings.activeItemIndex - 1 : 0;
  },
  getSwiperOptions: function getSwiperOptions() {
    var _this = this;

    var elementSettings = this.getElementSettings();
    var swiperOptions = {
      grabCursor: true,
      initialSlide: this.getInitialSlide(),
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: 'yes' === elementSettings.infinite,
      speed: elementSettings.transition_speed,
      effect: elementSettings.transition,
      observeParents: true,
      observer: true,
      handleElementorBreakpoints: true,
      on: {
        slideChange: function slideChange() {
          _this.handleKenBurns();
        }
      }
    };
    var showArrows = 'arrows' === elementSettings.navigation || 'both' === elementSettings.navigation,
        pagination = 'dots' === elementSettings.navigation || 'both' === elementSettings.navigation;

    if (showArrows) {
      swiperOptions.navigation = {
        prevEl: '.elementor-swiper-button-prev',
        nextEl: '.elementor-swiper-button-next'
      };
    }

    if (pagination) {
      swiperOptions.pagination = {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      };
    }

    if (!this.isEdit && elementSettings.autoplay) {
      swiperOptions.autoplay = {
        delay: elementSettings.autoplay_speed,
        disableOnInteraction: !!elementSettings.pause_on_interaction
      };
    }

    if (true === swiperOptions.loop) {
      swiperOptions.loopedSlides = this.getSlidesCount();
    }

    if ('fade' === swiperOptions.effect) {
      swiperOptions.fadeEffect = {
        crossFade: true
      };
    }

    return swiperOptions;
  },
  handleKenBurns: function handleKenBurns() {
    var settings = this.getSettings();

    if (this.$activeImageBg) {
      this.$activeImageBg.removeClass(settings.classes.kenBurnsActive);
    }

    this.activeItemIndex = this.swipers.main ? this.swipers.main.activeIndex : this.getInitialSlide();

    if (this.swipers.main) {
      this.$activeImageBg = jQuery(this.swipers.main.slides[this.activeItemIndex]).children(settings.selectors.slideBackground);
    } else {
      this.$activeImageBg = jQuery(this.elements.$mainSwiperSlides[0]).children(settings.selectors.slideBackground);
    }

    this.$activeImageBg.addClass(settings.classes.kenBurnsActive);
  },
  initSingleSlideAnimations: function initSingleSlideAnimations() {
    var settings = this.getSettings(),
        animation = this.elements.$slider.data(settings.attributes.dataAnimation);
    this.elements.$slider.find(settings.selectors.slideBackground).addClass(settings.classes.kenBurnsActive); // If there is an animation, get the container of the slide's inner contents and add the animation classes to it

    if (animation) {
      this.elements.$slider.find(settings.selectors.slideInnerContents).addClass(settings.classes.animated + ' ' + animation);
    }
  },
  initSlider: function initSlider() {
    var _this2 = this;

    var $slider = this.elements.$slider,
        settings = this.getSettings(),
        elementSettings = this.getElementSettings(),
        animation = $slider.data(settings.attributes.dataAnimation);

    if (!$slider.length) {
      return;
    }

    this.swipers = {};

    if (1 >= this.getSlidesCount()) {
      return;
    }

    this.swipers.main = new Swiper($slider, this.getSwiperOptions()); // Expose the swiper instance in the frontend

    $slider.data('swiper', this.swipers.main); // The Ken Burns effect will only apply on the specific slides that toggled the effect ON,
    // since it depends on an additional class besides 'elementor-ken-burns--active'

    this.handleKenBurns();

    if (elementSettings.pause_on_hover) {
      $slider.on({
        mouseenter: function mouseenter() {
          _this2.swipers.main.autoplay.stop();
        },
        mouseleave: function mouseleave() {
          _this2.swipers.main.autoplay.start();
        }
      });
    }

    if (!animation) {
      return;
    }

    this.swipers.main.on('slideChangeTransitionStart', function () {
      var $sliderContent = $slider.find(settings.selectors.slideInnerContents);
      $sliderContent.removeClass(settings.classes.animated + ' ' + animation).hide();
    });
    this.swipers.main.on('slideChangeTransitionEnd', function () {
      var $currentSlide = $slider.find(settings.selectors.slideInnerContents);
      $currentSlide.show().addClass(settings.classes.animated + ' ' + animation);
    });
  },
  onInit: function onInit() {
    elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);

    if (2 > this.getSlidesCount()) {
      this.initSingleSlideAnimations();
      return;
    }

    this.initSlider();
  },
  onElementChange: function onElementChange(propertyName) {
    if (1 >= this.getSlidesCount()) {
      return;
    }

    if (0 === propertyName.indexOf('width')) {
      this.swipers.main.update();
    }
  },
  onEditSettingsChange: function onEditSettingsChange(propertyName) {
    if (1 >= this.getSlidesCount()) {
      return;
    }

    if ('activeItemIndex' === propertyName) {
      this.swipers.main.slideToLoop(this.getEditSettings('activeItemIndex') - 1);
    }
  }
});

module.exports = function ($scope) {
  new SlidesHandler({
    $element: $scope
  });
};

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var facebookHandler = __webpack_require__(185);

module.exports = function () {
  elementorFrontend.hooks.addAction('frontend/element_ready/facebook-button.default', facebookHandler);
  elementorFrontend.hooks.addAction('frontend/element_ready/facebook-comments.default', facebookHandler);
  elementorFrontend.hooks.addAction('frontend/element_ready/facebook-embed.default', facebookHandler);
  elementorFrontend.hooks.addAction('frontend/element_ready/facebook-page.default', facebookHandler);
};

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var config = ElementorProFrontendConfig.facebook_sdk,
    loadSDK = function loadSDK() {
  // Don't load in parallel
  if (config.isLoading || config.isLoaded) {
    return;
  }

  config.isLoading = true;
  jQuery.ajax({
    url: 'https://connect.facebook.net/' + config.lang + '/sdk.js',
    dataType: 'script',
    cache: true,
    success: function success() {
      FB.init({
        appId: config.app_id,
        version: 'v2.10',
        xfbml: false
      });
      config.isLoaded = true;
      config.isLoading = false;
      jQuery(document).trigger('fb:sdk:loaded');
    }
  });
};

module.exports = function ($scope) {
  loadSDK(); // On FB SDK is loaded, parse current element

  var parse = function parse() {
    $scope.find('.elementor-widget-container div').attr('data-width', $scope.width() + 'px');
    FB.XFBML.parse($scope[0]);
  };

  if (config.isLoaded) {
    parse();
  } else {
    jQuery(document).on('fb:sdk:loaded', parse);
  }
};

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  elementorFrontend.hooks.addAction('frontend/element_ready/section', __webpack_require__(24));
  elementorFrontend.hooks.addAction('frontend/element_ready/widget', __webpack_require__(24));
};

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var PostsArchiveClassic = __webpack_require__(188),
      PostsArchiveCards = __webpack_require__(189);

  elementorFrontend.hooks.addAction('frontend/element_ready/archive-posts.archive_classic', function ($scope) {
    new PostsArchiveClassic({
      $element: $scope
    });
  });
  elementorFrontend.hooks.addAction('frontend/element_ready/archive-posts.archive_full_content', function ($scope) {
    new PostsArchiveClassic({
      $element: $scope
    });
  });
  elementorFrontend.hooks.addAction('frontend/element_ready/archive-posts.archive_cards', function ($scope) {
    new PostsArchiveCards({
      $element: $scope
    });
  });
  jQuery(function () {
    // Go to elementor element - if the URL is something like http://domain.com/any-page?preview=true&theme_template_id=6479
    var match = location.search.match(/theme_template_id=(\d*)/),
        $element = match ? jQuery('.elementor-' + match[1]) : [];

    if ($element.length) {
      jQuery('html, body').animate({
        scrollTop: $element.offset().top - window.innerHeight / 2
      });
    }
  });
};

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PostsClassicHandler = __webpack_require__(16);

module.exports = PostsClassicHandler.extend({
  getSkinPrefix: function getSkinPrefix() {
    return 'archive_classic_';
  }
});

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PostsCardHandler = __webpack_require__(23);

module.exports = PostsCardHandler.extend({
  getSkinPrefix: function getSkinPrefix() {
    return 'archive_cards_';
  }
});

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  elementorFrontend.hooks.addAction('frontend/element_ready/search-form.default', __webpack_require__(191));
};

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SearchBerHandler = elementorModules.frontend.handlers.Base.extend({
  getDefaultSettings: function getDefaultSettings() {
    return {
      selectors: {
        wrapper: '.elementor-search-form',
        container: '.elementor-search-form__container',
        icon: '.elementor-search-form__icon',
        input: '.elementor-search-form__input',
        toggle: '.elementor-search-form__toggle',
        submit: '.elementor-search-form__submit',
        closeButton: '.dialog-close-button'
      },
      classes: {
        isFocus: 'elementor-search-form--focus',
        isFullScreen: 'elementor-search-form--full-screen',
        lightbox: 'elementor-lightbox'
      }
    };
  },
  getDefaultElements: function getDefaultElements() {
    var selectors = this.getSettings('selectors'),
        elements = {};
    elements.$wrapper = this.$element.find(selectors.wrapper);
    elements.$container = this.$element.find(selectors.container);
    elements.$input = this.$element.find(selectors.input);
    elements.$icon = this.$element.find(selectors.icon);
    elements.$toggle = this.$element.find(selectors.toggle);
    elements.$submit = this.$element.find(selectors.submit);
    elements.$closeButton = this.$element.find(selectors.closeButton);
    return elements;
  },
  bindEvents: function bindEvents() {
    var self = this,
        $container = self.elements.$container,
        $closeButton = self.elements.$closeButton,
        $input = self.elements.$input,
        $wrapper = self.elements.$wrapper,
        $icon = self.elements.$icon,
        skin = this.getElementSettings('skin'),
        classes = this.getSettings('classes');

    if ('full_screen' === skin) {
      // Activate full-screen mode on click
      self.elements.$toggle.on('click', function () {
        $container.toggleClass(classes.isFullScreen).toggleClass(classes.lightbox);
        $input.focus();
      }); // Deactivate full-screen mode on click or on esc.

      $container.on('click', function (event) {
        if ($container.hasClass(classes.isFullScreen) && $container[0] === event.target) {
          $container.removeClass(classes.isFullScreen).removeClass(classes.lightbox);
        }
      });
      $closeButton.on('click', function () {
        $container.removeClass(classes.isFullScreen).removeClass(classes.lightbox);
      });
      elementorFrontend.elements.$document.keyup(function (event) {
        var ESC_KEY = 27;

        if (ESC_KEY === event.keyCode) {
          if ($container.hasClass(classes.isFullScreen)) {
            $container.click();
          }
        }
      });
    } else {
      // Apply focus style on wrapper element when input is focused
      $input.on({
        focus: function focus() {
          $wrapper.addClass(classes.isFocus);
        },
        blur: function blur() {
          $wrapper.removeClass(classes.isFocus);
        }
      });
    }

    if ('minimal' === skin) {
      // Apply focus style on wrapper element when icon is clicked in minimal skin
      $icon.on('click', function () {
        $wrapper.addClass(classes.isFocus);
        $input.focus();
      });
    }
  }
});

module.exports = function ($scope) {
  new SearchBerHandler({
    $element: $scope
  });
};

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  elementorFrontend.hooks.addAction('frontend/element_ready/woocommerce-menu-cart.default', __webpack_require__(193));

  if (elementorFrontend.isEditMode()) {
    return;
  }

  jQuery(document.body).on('wc_fragments_loaded wc_fragments_refreshed', function () {
    jQuery('div.elementor-widget-woocommerce-menu-cart').each(function () {
      elementorFrontend.elementsHandler.runReadyTrigger(jQuery(this));
    });
  });
};

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MiniCartHandler = elementorModules.frontend.handlers.Base.extend({
  getDefaultSettings: function getDefaultSettings() {
    return {
      selectors: {
        container: '.elementor-menu-cart__container',
        main: '.elementor-menu-cart__main',
        toggle: '.elementor-menu-cart__toggle .elementor-button',
        closeButton: '.elementor-menu-cart__close-button',
        cartLink: '#elementor-menu-cart__toggle_button'
      },
      classes: {
        isShown: 'elementor-menu-cart--shown',
        lightbox: 'elementor-lightbox'
      }
    };
  },
  getDefaultElements: function getDefaultElements() {
    var selectors = this.getSettings('selectors'),
        elements = {};
    elements.$container = this.$element.find(selectors.container);
    elements.$main = this.$element.find(selectors.main);
    elements.$toggle = this.$element.find(selectors.toggle);
    elements.$closeButton = this.$element.find(selectors.closeButton);
    elements.$cartLink = this.$element.find(selectors.cartLink);
    return elements;
  },
  toggleAriaExpanded: function toggleAriaExpanded($element) {
    $element.attr('aria-expanded', function (index, isExpanded) {
      if (typeof isExpanded !== 'undefined') {
        // Check if aria-expanded property even exists
        return 'true' !== isExpanded;
      }

      return true;
    });
  },
  removeAttributesOnHide: function removeAttributesOnHide() {
    var _this$elements = this.elements,
        $container = _this$elements.$container,
        $main = _this$elements.$main,
        classes = this.getSettings('classes');
    $container.removeClass(classes.isShown).attr('aria-expanded', false);
    $main.attr('aria-expanded', false);
  },
  bindEvents: function bindEvents() {
    var _this = this;

    var _this$elements2 = this.elements,
        $container = _this$elements2.$container,
        $main = _this$elements2.$main,
        $toggle = _this$elements2.$toggle,
        $closeButton = _this$elements2.$closeButton,
        $cartLink = _this$elements2.$cartLink,
        classes = this.getSettings('classes'); // Activate full-screen mode on click

    $toggle.on('click', function (event) {
      var noQueryParams = -1 === ElementorProFrontendConfig.menu_cart.cart_page_url.indexOf('?'),
          currentUrl = noQueryParams ? window.location.origin + window.location.pathname : window.location.href,
          isCart = ElementorProFrontendConfig.menu_cart.cart_page_url === currentUrl,
          isCheckout = ElementorProFrontendConfig.menu_cart.checkout_page_url === currentUrl;

      if (!isCart && !isCheckout) {
        event.preventDefault();
        $container.toggleClass(classes.isShown);

        _this.toggleAriaExpanded($container);

        _this.toggleAriaExpanded($main);
      } else {
        var cartUrl = ElementorProFrontendConfig.menu_cart.cart_page_url;
        $cartLink.attr('href', cartUrl);

        _this.removeAttributesOnHide();
      }
    }); // Deactivate full-screen mode on click or on esc.

    $container.on('click', function (event) {
      if ($container.hasClass(classes.isShown) && $container[0] === event.target) {
        _this.removeAttributesOnHide();
      }
    });
    $closeButton.on('click', function () {
      _this.removeAttributesOnHide();
    });
    elementorFrontend.elements.$document.keyup(function (event) {
      var ESC_KEY = 27;

      if (ESC_KEY === event.keyCode) {
        if ($container.hasClass(classes.isShown)) {
          $container.click();
        }
      }
    });
  }
});

module.exports = function ($scope) {
  new MiniCartHandler({
    $element: $scope
  });
};

/***/ })
/******/ ]);
//# sourceMappingURL=frontend.js.map
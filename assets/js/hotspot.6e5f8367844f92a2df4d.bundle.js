/*! pro-elements - v3.3.1 - 20-06-2021 */
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["hotspot"],{

/***/ "../modules/hotspot/assets/js/frontend/handlers/hotspot.js":
/*!*****************************************************************!*\
  !*** ../modules/hotspot/assets/js/frontend/handlers/hotspot.js ***!
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

__webpack_require__(/*! core-js/modules/es6.regexp.match.js */ "../node_modules/core-js/modules/es6.regexp.match.js");

__webpack_require__(/*! core-js/modules/es6.string.starts-with.js */ "../node_modules/core-js/modules/es6.string.starts-with.js");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _get3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/get */ "../node_modules/@babel/runtime-corejs2/helpers/get.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "../node_modules/@babel/runtime-corejs2/helpers/createSuper.js"));

var Hotspot = /*#__PURE__*/function (_elementorModules$fro) {
  (0, _inherits2.default)(Hotspot, _elementorModules$fro);

  var _super = (0, _createSuper2.default)(Hotspot);

  function Hotspot() {
    (0, _classCallCheck2.default)(this, Hotspot);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Hotspot, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        selectors: {
          hotspot: '.e-hotspot',
          tooltip: '.e-hotspot__tooltip'
        }
      };
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var selectors = this.getSettings('selectors');
      return {
        $hotspot: this.$element.find(selectors.hotspot),
        $hotspotsExcludesLinks: this.$element.find(selectors.hotspot).filter(':not(.e-hotspot--link)'),
        $tooltip: this.$element.find(selectors.tooltip)
      };
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      var tooltipTrigger = this.getCurrentDeviceSetting('tooltip_trigger'),
          tooltipTriggerEvent = 'mouseenter' === tooltipTrigger ? 'mouseleave mouseenter' : tooltipTrigger;

      if (tooltipTriggerEvent !== 'none') {
        this.elements.$hotspotsExcludesLinks.on(tooltipTriggerEvent, function (event) {
          return _this.onHotspotTriggerEvent(event);
        });
      }
    }
  }, {
    key: "onDeviceModeChange",
    value: function onDeviceModeChange() {
      this.elements.$hotspotsExcludesLinks.off();
      this.bindEvents();
    }
  }, {
    key: "onHotspotTriggerEvent",
    value: function onHotspotTriggerEvent(event) {
      var elementTarget = jQuery(event.target),
          isHotspotButtonEvent = elementTarget.closest('.e-hotspot__button').length,
          isTooltipMouseLeave = 'mouseleave' === event.type && (elementTarget.is('.e-hotspot--tooltip-position') || elementTarget.parents('.e-hotspot--tooltip-position').length);

      if (isHotspotButtonEvent || isTooltipMouseLeave) {
        var currentHotspot = jQuery(event.currentTarget);
        this.elements.$hotspot.not(currentHotspot).removeClass('e-hotspot--active');
        currentHotspot.toggleClass('e-hotspot--active');
      }
    } // Fix bad UX of "Sequenced Animation" when editing other controls

  }, {
    key: "editorAddSequencedAnimation",
    value: function editorAddSequencedAnimation() {
      this.elements.$hotspot.toggleClass('e-hotspot--sequenced', 'yes' === this.getElementSettings('hotspot_sequenced_animation'));
    }
  }, {
    key: "hotspotSequencedAnimation",
    value: function hotspotSequencedAnimation() {
      var _this2 = this;

      var elementSettings = this.getElementSettings(),
          isSequencedAnimation = elementSettings.hotspot_sequenced_animation;

      if ('no' === isSequencedAnimation) {
        return;
      } //start sequenced animation when element on viewport


      var hotspotObserver = elementorModules.utils.Scroll.scrollObserver({
        callback: function callback(event) {
          if (event.isInViewport) {
            hotspotObserver.unobserve(_this2.$element[0]); //add delay for each hotspot

            _this2.elements.$hotspot.each(function (index, element) {
              if (0 === index) {
                return;
              }

              var sequencedAnimation = elementSettings.hotspot_sequenced_animation_duration,
                  sequencedAnimationDuration = sequencedAnimation ? sequencedAnimation.size : 1000,
                  animationDelay = index * (sequencedAnimationDuration / _this2.elements.$hotspot.length);
              element.style.animationDelay = animationDelay + 'ms';
            });
          }
        }
      });
      hotspotObserver.observe(this.$element[0]);
    }
  }, {
    key: "setTooltipPositionControl",
    value: function setTooltipPositionControl() {
      var elementSettings = this.getElementSettings(),
          isDirectionAnimation = 'undefined' !== typeof elementSettings.tooltip_animation && elementSettings.tooltip_animation.match(/^e-hotspot--(slide|fade)-direction/);

      if (isDirectionAnimation) {
        this.elements.$tooltip.removeClass('e-hotspot--tooltip-animation-from-left e-hotspot--tooltip-animation-from-top e-hotspot--tooltip-animation-from-right e-hotspot--tooltip-animation-from-bottom');
        this.elements.$tooltip.addClass('e-hotspot--tooltip-animation-from-' + elementSettings.tooltip_position);
      }
    }
  }, {
    key: "onInit",
    value: function onInit() {
      var _get2,
          _this3 = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_get2 = (0, _get3.default)((0, _getPrototypeOf2.default)(Hotspot.prototype), "onInit", this)).call.apply(_get2, [this].concat(args));

      this.hotspotSequencedAnimation();
      this.setTooltipPositionControl();

      if (window.elementor) {
        elementor.listenTo(elementor.channels.deviceMode, 'change', function () {
          return _this3.onDeviceModeChange();
        });
      }
    }
  }, {
    key: "onElementChange",
    value: function onElementChange(propertyName) {
      if (propertyName.startsWith('tooltip_position')) {
        this.setTooltipPositionControl();
      }

      if (propertyName.startsWith('hotspot_sequenced_animation')) {
        this.editorAddSequencedAnimation();
      }
    }
  }]);
  return Hotspot;
}(elementorModules.frontend.handlers.Base);

exports.default = Hotspot;

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

/***/ "../node_modules/core-js/modules/es6.string.starts-with.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.string.starts-with.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/core-js/modules/_to-length.js");
var context = __webpack_require__(/*! ./_string-context */ "../node_modules/core-js/modules/_string-context.js");
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "../node_modules/core-js/modules/_fails-is-regexp.js")(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ })

}]);
//# sourceMappingURL=hotspot.6e5f8367844f92a2df4d.bundle.js.map
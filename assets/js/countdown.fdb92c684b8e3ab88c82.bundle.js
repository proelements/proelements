/*! pro-elements - v3.2.0 - 14-03-2021 */
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["countdown"],{

/***/ "../node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/parse-int.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/parse-int.js":
/*!*******************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/parse-int.js ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../modules/es6.parse-int */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.parse-int.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").parseInt;


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_parse-int.js":
/*!*************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_parse-int.js ***!
  \*************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $parseInt = __webpack_require__(/*! ./_global */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").parseInt;
var $trim = __webpack_require__(/*! ./_string-trim */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-trim.js").trim;
var ws = __webpack_require__(/*! ./_string-ws */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-ws.js");
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-trim.js":
/*!***************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-trim.js ***!
  \***************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var defined = __webpack_require__(/*! ./_defined */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js");
var fails = __webpack_require__(/*! ./_fails */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js");
var spaces = __webpack_require__(/*! ./_string-ws */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-ws.js");
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

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-ws.js":
/*!*************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-ws.js ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.parse-int.js":
/*!****************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.parse-int.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var $parseInt = __webpack_require__(/*! ./_parse-int */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_parse-int.js");
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),

/***/ "../modules/countdown/assets/js/frontend/handlers/countdown.js":
/*!*********************************************************************!*\
  !*** ../modules/countdown/assets/js/frontend/handlers/countdown.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _parseInt2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "../node_modules/@babel/runtime-corejs2/core-js/parse-int.js"));

__webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "../node_modules/core-js/modules/es6.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es6.object.to-string */ "../node_modules/core-js/modules/es6.object.to-string.js");

__webpack_require__(/*! core-js/modules/es6.array.find */ "../node_modules/core-js/modules/es6.array.find.js");

var _default = elementorModules.frontend.handlers.Base.extend({
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

    if (null !== localData.dueDate && interval !== (0, _parseInt2.default)(localData.interval, 10)) {
      return initEvergreen();
    }

    if (localData.dueDate > 0 && (0, _parseInt2.default)(localData.interval, 10) === interval) {
      return localData.dueDate;
    }
  }
});

exports.default = _default;

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


/***/ })

}]);
//# sourceMappingURL=countdown.fdb92c684b8e3ab88c82.bundle.js.map
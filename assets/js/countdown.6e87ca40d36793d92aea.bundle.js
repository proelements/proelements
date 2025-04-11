/*! pro-elements - v3.28.0 - 23-03-2025 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["countdown"],{

/***/ "../modules/countdown/assets/js/frontend/handlers/countdown.js":
/*!*********************************************************************!*\
  !*** ../modules/countdown/assets/js/frontend/handlers/countdown.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = elementorModules.frontend.handlers.Base.extend({
  cache: null,
  cacheElements() {
    const $countDown = this.$element.find('.elementor-countdown-wrapper');
    this.cache = {
      $countDown,
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
  onInit() {
    elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);
    this.cacheElements();
    if (0 < this.cache.data.evergreenInterval) {
      this.cache.data.endTime = this.getEvergreenDate();
    }
    this.initializeClock();
  },
  updateClock() {
    const self = this,
      timeRemaining = this.getTimeRemaining(this.cache.data.endTime);
    jQuery.each(timeRemaining.parts, function (timePart) {
      const $element = self.cache.elements['$' + timePart + 'Span'];
      let partValue = this.toString();
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
  initializeClock() {
    const self = this;
    this.updateClock();
    this.cache.timeInterval = setInterval(function () {
      self.updateClock();
    }, 1000);
  },
  runActions() {
    const self = this;

    // Trigger general event for 3rd patry actions
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
          if (action.redirect_url && action.redirect_url.startsWith('http')) {
            window.location.href = action.redirect_url;
          }
          break;
        case 'message':
          self.cache.elements.$expireMessage.show();
          break;
      }
    });
  },
  getTimeRemaining(endTime) {
    const timeRemaining = endTime - new Date();
    let seconds = Math.floor(timeRemaining / 1000 % 60),
      minutes = Math.floor(timeRemaining / 1000 / 60 % 60),
      hours = Math.floor(timeRemaining / (1000 * 60 * 60) % 24),
      days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    if (days < 0 || hours < 0 || minutes < 0) {
      seconds = minutes = hours = days = 0;
    }
    return {
      total: timeRemaining,
      parts: {
        days,
        hours,
        minutes,
        seconds
      }
    };
  },
  getEvergreenDate() {
    const self = this,
      id = this.cache.data.id,
      interval = this.cache.data.evergreenInterval,
      dueDateKey = id + '-evergreen_due_date',
      intervalKey = id + '-evergreen_interval',
      localData = {
        dueDate: localStorage.getItem(dueDateKey),
        interval: localStorage.getItem(intervalKey)
      },
      initEvergreen = function () {
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

/***/ })

}]);
//# sourceMappingURL=countdown.6e87ca40d36793d92aea.bundle.js.map
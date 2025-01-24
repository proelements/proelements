/*!pro-elements - v3.27.0 - 20-01-2025 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["contact-buttons-var-10"],{

/***/ "../modules/floating-buttons/assets/js/frontend/handlers/contact-buttons-v10.js":
/*!**************************************************************************************!*\
  !*** ../modules/floating-buttons/assets/js/frontend/handlers/contact-buttons-v10.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _base = _interopRequireDefault(__webpack_require__(/*! elementor-frontend/handlers/base */ "../../elementor/assets/dev/js/frontend/handlers/base.js"));
var _clickTracking = _interopRequireDefault(__webpack_require__(/*! ../../shared/frontend/handlers/click-tracking */ "../modules/floating-buttons/assets/js/shared/frontend/handlers/click-tracking.js"));
class ContactButtonsv10Handler extends _base.default {
  getDefaultSettings() {
    return {
      selectors: {
        main: '.e-contact-buttons-var-10',
        links: '.e-contact-buttons__contact-icon-link'
      },
      constants: {
        active: 'active'
      }
    };
  }
  getDefaultElements() {
    const selectors = this.getSettings('selectors');
    return {
      main: this.$element[0].querySelector(selectors.main),
      links: this.$element[0].querySelectorAll(selectors.links)
    };
  }
  isMobileDevice() {
    const mobileDevices = ['mobile', 'mobile_extra'];
    return mobileDevices.includes(elementorFrontend.getCurrentDeviceMode());
  }
  handleLinkClick(event) {
    event.preventDefault();
    const {
      active
    } = this.getSettings('constants');
    if (event.currentTarget.classList.contains(active)) {
      const href = event.currentTarget.getAttribute('href');
      const target = event.currentTarget.getAttribute('target');

      // If the target is set, open in a new window, otherwise just change location
      if (target) {
        window.open(href, target);
      } else if (href) {
        window.location.href = href;
      }
      event.currentTarget.classList.remove(active);
    } else {
      this.closeAllLinks();
      event.currentTarget.classList.add(active);
    }
  }
  closeAllLinks() {
    const {
      active
    } = this.getSettings('constants');
    this.elements.links.forEach(link => link.classList.remove(active));
  }
  linksEventListeners() {
    if (!this.elements.links.length) {
      return;
    }
    if (this.isMobileDevice()) {
      this.elements.links.forEach(link => {
        link.addEventListener('click', event => {
          this.handleLinkClick(event);
        });
      });

      // Click outside will close all the links
      document.addEventListener('click', event => {
        if (!this.elements.main.contains(event.target)) {
          this.closeAllLinks();
        }
      });
    }
  }
  bindEvents() {
    this.linksEventListeners();
  }
  setupInnerContainer() {
    this.elements.main.closest('.e-con-inner').classList.add('e-con-inner--floating-buttons');
  }
  onInit() {
    super.onInit(...arguments);
    this.clickTrackingHandler = new _clickTracking.default({
      $element: this.$element
    });
    this.setupInnerContainer();
  }
}
exports["default"] = ContactButtonsv10Handler;

/***/ }),

/***/ "../modules/floating-buttons/assets/js/shared/frontend/handlers/click-tracking.js":
/*!****************************************************************************************!*\
  !*** ../modules/floating-buttons/assets/js/shared/frontend/handlers/click-tracking.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _base = _interopRequireDefault(__webpack_require__(/*! elementor-frontend/handlers/base */ "../../elementor/assets/dev/js/frontend/handlers/base.js"));
class ClickTrackingHandler extends _base.default {
  clicks = [];
  getDefaultSettings() {
    return {
      selectors: {
        contentWrapper: '.e-contact-buttons__content-wrapper',
        contentWrapperFloatingBars: '.e-floating-bars',
        floatingBarCouponButton: '.e-floating-bars__coupon-button',
        floatingBarsHeadline: '.e-floating-bars__headline',
        contactButtonsVar4: '.e-contact-buttons__contact-icon-link',
        contactButtonsVar5: '.e-contact-buttons__chat-button',
        contactButtonsVar6: '.e-contact-buttons-var-6',
        contactButtonsVar8: '.e-contact-buttons-var-8',
        elementorWrapper: '[data-elementor-type="floating-buttons"]',
        contactButtonCore: '.e-contact-buttons__send-button'
      }
    };
  }
  getDefaultElements() {
    const selectors = this.getSettings('selectors');
    return {
      contentWrapper: this.$element[0].querySelector(selectors.contentWrapper),
      contentWrapperFloatingBars: this.$element[0].querySelector(selectors.contentWrapperFloatingBars),
      contactButtonsVar5: this.$element[0].querySelector(selectors.contactButtonsVar5),
      contactButtonsVar6: this.$element[0].querySelector(selectors.contactButtonsVar6)
    };
  }
  bindEvents() {
    if (this.elements.contentWrapper) {
      this.elements.contentWrapper.addEventListener('click', this.onChatButtonTrackClick.bind(this));
    }
    if (this.elements.contactButtonsVar5) {
      this.elements.contactButtonsVar5.addEventListener('click', this.onChatButtonTrackClick.bind(this));
    }
    if (this.elements.contactButtonsVar6) {
      this.elements.contactButtonsVar6.addEventListener('click', this.onChatButtonTrackClick.bind(this));
    }
    if (this.elements.contentWrapperFloatingBars) {
      this.elements.contentWrapperFloatingBars.addEventListener('click', this.onChatButtonTrackClick.bind(this));
    }
    window.addEventListener('beforeunload', () => {
      if (this.clicks.length > 0) {
        this.sendClicks();
      }
    });
  }
  onChatButtonTrackClick(event) {
    const targetElement = event.target || event.srcElement;
    const selectors = this.getSettings('selectors');
    const buttonSelectors = [selectors.contactButtonsVar4, selectors.contactButtonsVar6, selectors.floatingBarCouponButton, selectors.floatingBarsHeadline, selectors.contactButtonCore];
    for (const selector of buttonSelectors) {
      if (targetElement.matches(selector) || targetElement.closest(selector)) {
        this.getDocumentIdAndTrack(targetElement, selectors);
      }
    }
    if ((targetElement.matches(selectors.contactButtonsVar5) || targetElement.closest(selectors.contactButtonsVar5)) && targetElement.closest('.e-contact-buttons-var-5')) {
      this.getDocumentIdAndTrack(targetElement, selectors);
    }
  }
  getDocumentIdAndTrack(targetElement, selectors) {
    const documentId = targetElement.closest(selectors.elementorWrapper).dataset.elementorId;
    this.trackClick(documentId);
  }
  trackClick(documentId) {
    if (!documentId) {
      return;
    }
    this.clicks.push(documentId);
    if (this.clicks.length >= 10) {
      this.sendClicks();
    }
  }
  sendClicks() {
    const formData = new FormData();
    formData.append('action', 'elementor_send_clicks');
    formData.append('_nonce', elementorFrontendConfig?.nonces?.floatingButtonsClickTracking);
    this.clicks.forEach(documentId => formData.append('clicks[]', documentId));
    fetch(elementorFrontendConfig?.urls?.ajaxurl, {
      method: 'POST',
      body: formData
    }).then(() => {
      this.clicks = [];
    });
  }
}
exports["default"] = ClickTrackingHandler;

/***/ }),

/***/ "../../elementor/assets/dev/js/frontend/handlers/base.js":
/*!***************************************************************!*\
  !*** ../../elementor/assets/dev/js/frontend/handlers/base.js ***!
  \***************************************************************/
/***/ ((module) => {



module.exports = elementorModules.ViewModule.extend({
  $element: null,
  editorListeners: null,
  onElementChange: null,
  onEditSettingsChange: null,
  onPageSettingsChange: null,
  isEdit: null,
  __construct(settings) {
    if (!this.isActive(settings)) {
      return;
    }
    this.$element = settings.$element;
    this.isEdit = this.$element.hasClass('elementor-element-edit-mode');
    if (this.isEdit) {
      this.addEditorListeners();
    }
  },
  isActive() {
    return true;
  },
  isElementInTheCurrentDocument() {
    if (!elementorFrontend.isEditMode()) {
      return false;
    }
    return elementor.documents.currentDocument.id.toString() === this.$element[0].closest('.elementor').dataset.elementorId;
  },
  findElement(selector) {
    var $mainElement = this.$element;
    return $mainElement.find(selector).filter(function () {
      // Start `closest` from parent since self can be `.elementor-element`.
      return jQuery(this).parent().closest('.elementor-element').is($mainElement);
    });
  },
  getUniqueHandlerID(cid, $element) {
    if (!cid) {
      cid = this.getModelCID();
    }
    if (!$element) {
      $element = this.$element;
    }
    return cid + $element.attr('data-element_type') + this.getConstructorID();
  },
  initEditorListeners() {
    var self = this;
    self.editorListeners = [{
      event: 'element:destroy',
      to: elementor.channels.data,
      callback(removedModel) {
        if (removedModel.cid !== self.getModelCID()) {
          return;
        }
        self.onDestroy();
      }
    }];
    if (self.onElementChange) {
      const elementType = self.getWidgetType() || self.getElementType();
      let eventName = 'change';
      if ('global' !== elementType) {
        eventName += ':' + elementType;
      }
      self.editorListeners.push({
        event: eventName,
        to: elementor.channels.editor,
        callback(controlView, elementView) {
          var elementViewHandlerID = self.getUniqueHandlerID(elementView.model.cid, elementView.$el);
          if (elementViewHandlerID !== self.getUniqueHandlerID()) {
            return;
          }
          self.onElementChange(controlView.model.get('name'), controlView, elementView);
        }
      });
    }
    if (self.onEditSettingsChange) {
      self.editorListeners.push({
        event: 'change:editSettings',
        to: elementor.channels.editor,
        callback(changedModel, view) {
          if (view.model.cid !== self.getModelCID()) {
            return;
          }
          const propName = Object.keys(changedModel.changed)[0];
          self.onEditSettingsChange(propName, changedModel.changed[propName]);
        }
      });
    }
    ['page'].forEach(function (settingsType) {
      var listenerMethodName = 'on' + settingsType[0].toUpperCase() + settingsType.slice(1) + 'SettingsChange';
      if (self[listenerMethodName]) {
        self.editorListeners.push({
          event: 'change',
          to: elementor.settings[settingsType].model,
          callback(model) {
            self[listenerMethodName](model.changed);
          }
        });
      }
    });
  },
  getEditorListeners() {
    if (!this.editorListeners) {
      this.initEditorListeners();
    }
    return this.editorListeners;
  },
  addEditorListeners() {
    var uniqueHandlerID = this.getUniqueHandlerID();
    this.getEditorListeners().forEach(function (listener) {
      elementorFrontend.addListenerOnce(uniqueHandlerID, listener.event, listener.callback, listener.to);
    });
  },
  removeEditorListeners() {
    var uniqueHandlerID = this.getUniqueHandlerID();
    this.getEditorListeners().forEach(function (listener) {
      elementorFrontend.removeListeners(uniqueHandlerID, listener.event, null, listener.to);
    });
  },
  getElementType() {
    return this.$element.data('element_type');
  },
  getWidgetType() {
    const widgetType = this.$element.data('widget_type');
    if (!widgetType) {
      return;
    }
    return widgetType.split('.')[0];
  },
  getID() {
    return this.$element.data('id');
  },
  getModelCID() {
    return this.$element.data('model-cid');
  },
  getElementSettings(setting) {
    let elementSettings = {};
    const modelCID = this.getModelCID();
    if (this.isEdit && modelCID) {
      const settings = elementorFrontend.config.elements.data[modelCID],
        attributes = settings.attributes;
      let type = attributes.widgetType || attributes.elType;
      if (attributes.isInner) {
        type = 'inner-' + type;
      }
      let settingsKeys = elementorFrontend.config.elements.keys[type];
      if (!settingsKeys) {
        settingsKeys = elementorFrontend.config.elements.keys[type] = [];
        jQuery.each(settings.controls, (name, control) => {
          if (control.frontend_available || control.editor_available) {
            settingsKeys.push(name);
          }
        });
      }
      jQuery.each(settings.getActiveControls(), function (controlKey) {
        if (-1 !== settingsKeys.indexOf(controlKey)) {
          let value = attributes[controlKey];
          if (value.toJSON) {
            value = value.toJSON();
          }
          elementSettings[controlKey] = value;
        }
      });
    } else {
      elementSettings = this.$element.data('settings') || {};
    }
    return this.getItems(elementSettings, setting);
  },
  getEditSettings(setting) {
    var attributes = {};
    if (this.isEdit) {
      attributes = elementorFrontend.config.elements.editSettings[this.getModelCID()].attributes;
    }
    return this.getItems(attributes, setting);
  },
  getCurrentDeviceSetting(settingKey) {
    return elementorFrontend.getCurrentDeviceSetting(this.getElementSettings(), settingKey);
  },
  onInit() {
    if (this.isActive(this.getSettings())) {
      elementorModules.ViewModule.prototype.onInit.apply(this, arguments);
    }
  },
  onDestroy() {
    if (this.isEdit) {
      this.removeEditorListeners();
    }
    if (this.unbindEvents) {
      this.unbindEvents();
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=contact-buttons-var-10.49a45dadc9c2facb4972.bundle.js.map
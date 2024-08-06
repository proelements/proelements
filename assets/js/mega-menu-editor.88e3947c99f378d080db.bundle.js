/*! pro-elements - v3.23.0 - 05-08-2024 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["mega-menu-editor"],{

/***/ "../modules/mega-menu/assets/js/editor/mega-menu.js":
/*!**********************************************************!*\
  !*** ../modules/mega-menu/assets/js/editor/mega-menu.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.MegaMenu = void 0;
var _view = _interopRequireDefault(__webpack_require__(/*! ./views/view */ "../modules/mega-menu/assets/js/editor/views/view.js"));
class MegaMenu extends elementor.modules.elements.types.NestedElementBase {
  getType() {
    return 'mega-menu';
  }
  getView() {
    return _view.default;
  }
}
exports.MegaMenu = MegaMenu;
var _default = exports["default"] = MegaMenu;

/***/ }),

/***/ "../modules/mega-menu/assets/js/editor/module.js":
/*!*******************************************************!*\
  !*** ../modules/mega-menu/assets/js/editor/module.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _megaMenu = _interopRequireDefault(__webpack_require__(/*! ./mega-menu */ "../modules/mega-menu/assets/js/editor/mega-menu.js"));
var _urlHelper = _interopRequireDefault(__webpack_require__(/*! ./utils/url-helper */ "../modules/mega-menu/assets/js/editor/utils/url-helper.js"));
class Module extends elementorModules.editor.utils.Module {
  constructor() {
    super();
    elementor.elementsManager.registerElementType(new _megaMenu.default());
    this.urlHelper = new _urlHelper.default();
  }
  getCurrentMenuItemClass(menuLinkUrl, permalinkUrl) {
    menuLinkUrl = menuLinkUrl?.trim(menuLinkUrl);
    if (!menuLinkUrl || !permalinkUrl) {
      return '';
    }
    const permalinkArray = this.urlHelper.parse_url(permalinkUrl),
      menuItemUrlArray = this.urlHelper.parse_url(menuLinkUrl),
      hasEqualUrls = _.isEqual(permalinkArray, menuItemUrlArray);
    return hasEqualUrls ? 'e-current' : '';
  }
  onElementorFrontendInit() {
    elementor.on('document:loaded', this.closeAllMegaMenus.bind(this));
  }
  closeAllMegaMenus() {
    const megaMenus = elementor.$previewContents[0].querySelectorAll('.elementor-widget-n-menu');
    if (megaMenus.length) {
      Array.from(megaMenus).forEach(node => {
        const id = node.getAttribute('data-id');
        window.jQuery(window).trigger('elementor/mega-menu/dropdown-toggle-by-keyboard', {
          widgetId: id,
          show: false
        });
      });
    }
  }
}
exports["default"] = Module;

/***/ }),

/***/ "../modules/mega-menu/assets/js/editor/utils/url-helper.js":
/*!*****************************************************************!*\
  !*** ../modules/mega-menu/assets/js/editor/utils/url-helper.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.UrlHelper = void 0;
class UrlHelper {
  parse_url(url) {
    try {
      const {
          hostname,
          pathname,
          search
        } = new URL(url),
        host = hostname.replace('www.', ''),
        trailingSlashesRegex = /^\/+|\/+$/g,
        path = pathname.replace(trailingSlashesRegex, '');
      return [host, path, search];
    } catch (err) {
      return false;
    }
  }
}
exports.UrlHelper = UrlHelper;
var _default = exports["default"] = UrlHelper;

/***/ }),

/***/ "../modules/mega-menu/assets/js/editor/views/view.js":
/*!***********************************************************!*\
  !*** ../modules/mega-menu/assets/js/editor/views/view.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class View extends $e.components.get('nested-elements').exports.NestedView {
  filter(child, index) {
    child.attributes.dataIndex = index + 1;
    child.attributes.widgetId = child.id;
    return true;
  }
  onAddChild(childView) {
    const widgetNumber = childView._parent.$el.find('.e-n-menu')[0]?.dataset.widgetNumber || childView.model.attributes.widgetId,
      index = childView.model.attributes.dataIndex,
      tabId = childView._parent.$el.find(`.e-n-menu-item-title[data-tab-index="${index}"]`)?.attr('id') || childView.model.attributes.widgetId + ' ' + index;
    childView.$el.attr({
      id: 'e-n-menu-content-' + widgetNumber + '' + index,
      role: 'menu',
      'aria-labelledby': tabId,
      'data-tab-index': index
    });
  }
  getChildViewContainer(containerView, childView) {
    const {
      elements_placeholder_selector: customSelector,
      child_container_placeholder_selector: childContainerSelector
    } = this.model.config.defaults;
    if (childView !== undefined && childView._index !== undefined && childContainerSelector) {
      return containerView.$el.find(`${childContainerSelector}`)[childView._index];
    }
    if (customSelector) {
      return containerView.$el.find(this.model.config.defaults.elements_placeholder_selector);
    }
    return super.getChildViewContainer(containerView, childView);
  }
  attachBuffer(compositeView, buffer) {
    const $container = this.getChildViewContainer(compositeView);
    if (this.model?.config?.support_improved_repeaters && this.model?.config?.is_interlaced) {
      const childContainerSelector = this.model?.config?.defaults?.child_container_placeholder_selector || '',
        childContainerClass = childContainerSelector.replace('.', '');
      this._updateChildContainers($container[0], childContainerClass, buffer);
    } else {
      $container.append(buffer);
    }
  }
  _updateChildContainers(wrapper, childContainerClass, buffer, index = 0) {
    _.each(wrapper.children, childContainer => {
      if (childContainer.classList?.contains(childContainerClass)) {
        const numberOfItems = buffer.childNodes.length;
        childContainer.appendChild(buffer.childNodes[0]);
        buffer.appendChild(childContainer);
        wrapper.append(buffer.childNodes[numberOfItems - 1]);
        index++;
      } else {
        this._updateChildContainers(childContainer, childContainerClass, buffer, index);
      }
    });
  }
}
exports["default"] = View;

/***/ })

}]);
//# sourceMappingURL=mega-menu-editor.88e3947c99f378d080db.bundle.js.map
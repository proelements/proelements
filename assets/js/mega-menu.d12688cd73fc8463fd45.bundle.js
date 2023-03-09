/*! pro-elements - v3.11.3 - 26-02-2023 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["mega-menu"],{

/***/ "../modules/mega-menu/assets/js/frontend/handlers/mega-menu.js":
/*!*********************************************************************!*\
  !*** ../modules/mega-menu/assets/js/frontend/handlers/mega-menu.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class MegaMenu extends elementorModules.frontend.handlers.NestedTabs {
  getDefaultSettings() {
    const settings = super.getDefaultSettings();
    settings.selectors.tabTitle = '.e-n-menu-item-title';
    settings.selectors.headingContainer = '.e-n-menu-items-heading';
    settings.autoExpand = this.isEdit;
    return settings;
  }
  changeActiveTab(tabIndex) {
    let fromUser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    const isActiveTab = this.isActiveTab(tabIndex);
    if (!isActiveTab || isActiveTab && !fromUser) {
      this.deactivateActiveTab();
      this.activateTab(tabIndex);
    } else {
      this.deactivateActiveTab();
    }
  }
  bindEvents() {
    super.bindEvents();
    this.elements.$tabContents.on(this.getTabContentEvents());
  }
  getTabEvents() {
    const tabEvents = super.getTabEvents();
    return this.isNeedToOpenOnClick() ? tabEvents : this.replaceClickWithHover(tabEvents);
  }
  getTabContentEvents() {
    return this.isNeedToOpenOnClick() ? {} : {
      mouseleave: this.onMouseContentLeave.bind(this)
    };
  }
  isNeedToOpenOnClick() {
    const nonMobileDevices = ['mobile', 'mobile_extra', 'tablet', 'tablet_extra'];
    return this.isEdit || nonMobileDevices.includes(elementorFrontend.getCurrentDeviceMode()) || this.getElementSettings('open_on') !== 'hover';
  }
  replaceClickWithHover(tabEvents) {
    delete tabEvents.click;
    tabEvents.mouseenter = this.onMouseTitleEnter.bind(this);
    tabEvents.mouseleave = this.onMouseTitleLeave.bind(this);
    return tabEvents;
  }
  onMouseTitleEnter(event) {
    event.preventDefault();
    this.changeActiveTab(event.currentTarget.getAttribute('data-tab'), true);
  }
  onMouseTitleLeave(event) {
    event.preventDefault();
    const itemsUnderMouseArray = Array.prototype.slice.call(document.querySelectorAll(':hover'));
    if (this.isContainingMenuContentTab(itemsUnderMouseArray)) {
      return;
    }
    this.deactivateActiveTab();
  }
  isContainingMenuContentTab(itemsUnderMouse) {
    return itemsUnderMouse.some(item => item.classList.contains('e-n-menu-items-content'));
  }
  onMouseContentLeave(event) {
    event.preventDefault();
    this.deactivateActiveTab();
  }
  onTabClick(event) {
    if (!this.isEdit && 'a' === event.target.nodeName.toLowerCase()) {
      return;
    }
    event.preventDefault();
    this.changeActiveTab(event.currentTarget.getAttribute('data-tab'), true);
  }
}
exports["default"] = MegaMenu;

/***/ })

}]);
//# sourceMappingURL=mega-menu.d12688cd73fc8463fd45.bundle.js.map
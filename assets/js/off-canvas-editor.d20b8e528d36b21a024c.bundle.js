/*! pro-elements - v3.28.0 - 23-03-2025 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["off-canvas-editor"],{

/***/ "../modules/off-canvas/assets/js/editor/components/empty-component.js":
/*!****************************************************************************!*\
  !*** ../modules/off-canvas/assets/js/editor/components/empty-component.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = _default;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

function _default() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "elementor-first-add"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "elementor-icon eicon-plus",
    onClick: () => $e.route('panel/elements/categories')
  }));
}

/***/ }),

/***/ "../modules/off-canvas/assets/js/editor/module.js":
/*!********************************************************!*\
  !*** ../modules/off-canvas/assets/js/editor/module.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _offCanvas = _interopRequireDefault(__webpack_require__(/*! ./off-canvas */ "../modules/off-canvas/assets/js/editor/off-canvas.js"));
class Module extends elementorModules.editor.utils.Module {
  constructor() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    super(args);
    elementor.elementsManager.registerElementType(new _offCanvas.default());
    elementor.listenTo(elementor.channels.editor, 'all', this.populateOffCanvasDropdownOptions);
  }
  showOffCanvas() {
    const editor = elementor.getPanelView().getCurrentPageView(),
      model = editor.getOption('editedElementView').getEditModel(),
      offCanvasID = model.get('id'),
      settings = {
        id: offCanvasID,
        displayMode: 'open' // Always 'open' when the widget is selected.
      };
    elementor.$preview[0].contentWindow.dispatchEvent(new CustomEvent('elementor-pro/off-canvas/toggle-display-mode', {
      detail: settings
    }));
  }
  populateOffCanvasDropdownOptions = (() => {
    var _this = this;
    return function (eventName) {
      if (!_this.isOffCanvasTagPopover(eventName)) {
        return;
      }
      const currentView = arguments.length <= 1 ? undefined : arguments[1],
        controlModel = currentView.collection.findWhere({
          name: 'off_canvas'
        });
      if (!controlModel) {
        return;
      }
      const offCanvasWidgets = _this.getOffCanvasWidgetsForCurrentDocument(),
        selectedElementControlOptions = {
          '': __('Select a widget', 'elementor-pro')
        };
      if (!offCanvasWidgets.length) {
        _this.updateControl(controlModel, selectedElementControlOptions);
      }
      for (const offCanvasWidget of offCanvasWidgets) {
        const offCanvasId = offCanvasWidget.dataset.id;
        const offCanvasName = offCanvasWidget.querySelector('.e-off-canvas').getAttribute('aria-label');
        selectedElementControlOptions[offCanvasId] = offCanvasName;
      }
      _this.updateControl(controlModel, selectedElementControlOptions);
      const controlView = currentView.children.findByModel(controlModel);
      controlView.render();
    };
  })();
  updateControl(controlModel, values) {
    controlModel.set({
      options: values
    });
  }
  getOffCanvasWidgetsForCurrentDocument() {
    return elementor.$previewContents[0].querySelectorAll(`[data-elementor-id="${elementor.config.document.id}"] .elementor-widget-off-canvas.elementor-element-edit-mode`);
  }
  isOffCanvasTagPopover(eventName) {
    return eventName.endsWith(':off-canvas:settings:activated');
  }

  /*
  	TODO: Remove when Elementor provides an official API to remove the
  	Advanced Tab in any given widget.
  		Done with JS because the get_stack() PHP method sometimes proves inconsistent.
  */
  hideAdvancedTab(sectionName, editor) {
    const widgetType = editor?.model?.get('widgetType') || '';
    if ('off-canvas' !== widgetType) {
      return;
    }
    const advancedTab = editor?.el.querySelector('.elementor-tab-control-advanced') || false;
    if (advancedTab) {
      advancedTab.style.display = 'none';
    }
  }
  onInit() {
    elementor.channels.editor.on('editor:widget:off-canvas:section_layout:activated', this.showOffCanvas.bind(this));
    elementor.channels.editor.on('section:activated', this.hideAdvancedTab.bind(this));
  }
}
exports["default"] = Module;

/***/ }),

/***/ "../modules/off-canvas/assets/js/editor/off-canvas.js":
/*!************************************************************!*\
  !*** ../modules/off-canvas/assets/js/editor/off-canvas.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.OffCanvas = void 0;
var _emptyComponent = _interopRequireDefault(__webpack_require__(/*! ./components/empty-component */ "../modules/off-canvas/assets/js/editor/components/empty-component.js"));
class OffCanvas extends elementor.modules.elements.types.NestedElementBase {
  getType() {
    return 'off-canvas';
  }
  getEmptyView() {
    return _emptyComponent.default;
  }
}
exports.OffCanvas = OffCanvas;
var _default = exports["default"] = OffCanvas;

/***/ })

}]);
//# sourceMappingURL=off-canvas-editor.d20b8e528d36b21a024c.bundle.js.map
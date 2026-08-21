/*! pro-elements - v4.2.0 - 19-08-2026 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["loop-filter-editor"],{

/***/ "../modules/loop-filter/assets/js/editor/module.js"
/*!*********************************************************!*\
  !*** ../modules/loop-filter/assets/js/editor/module.js ***!
  \*********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _taxonomyFilter = _interopRequireDefault(__webpack_require__(/*! ./taxonomy-filter */ "../modules/loop-filter/assets/js/editor/taxonomy-filter.js"));
class LoopFilter extends elementorModules.editor.utils.Module {
  onElementorInit() {
    this.taxonomyFilter = new _taxonomyFilter.default('taxonomy-filter');
  }
}
exports["default"] = LoopFilter;

/***/ },

/***/ "../modules/loop-filter/assets/js/editor/taxonomy-filter.js"
/*!******************************************************************!*\
  !*** ../modules/loop-filter/assets/js/editor/taxonomy-filter.js ***!
  \******************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


__webpack_require__(/*! core-js/modules/es.json.stringify.js */ "../node_modules/core-js/modules/es.json.stringify.js");
const ElementEditorModule = __webpack_require__(/*! elementor-pro/editor/element-editor-module */ "../assets/dev/js/editor/element-editor-module.js");
module.exports = ElementEditorModule.extend({
  __construct() {
    this.cache = {};
    ElementEditorModule.prototype.__construct.apply(this, arguments);
  },
  onInit() {
    elementor.channels.editor.on('editor:widget:taxonomy-filter:section_taxonomy_filter:activated', this.onTaxonomyFilterSectionActive);
  },
  onTaxonomyFilterSectionActive() {
    this.updateSelectedElementOptions();
    const selectedElementControlView = this.getEditorControlView('selected_element'),
      selectedElementControlValue = selectedElementControlView.getControlValue();
    if (!selectedElementControlValue) {
      return;
    }
    if (this.handleInvalidSetup(selectedElementControlValue)) {
      return;
    }
    if (selectedElementControlValue) {
      this.updateTaxonomyOptions(selectedElementControlValue);
    }
  },
  updateSelectedElementOptions() {
    const selectedElementControlView = this.getEditorControlView('selected_element'),
      selectedElementControlValue = selectedElementControlView.getControlValue(),
      selectedElement = !!selectedElementControlValue ? elementor.$previewContents[0].querySelector(`[data-elementor-id="${elementor.config.document.id}"] .elementor-element-${selectedElementControlValue}`) : '';
    if (!selectedElement) {
      selectedElementControlView.setValue('');
    }
    const loopWidgets = elementor.$previewContents[0].querySelectorAll(`[data-elementor-id="${elementor.config.document.id}"] .elementor-widget-loop-grid`),
      selectedElementControlOptions = {
        '': __('Select a widget', 'elementor-pro')
      };
    if (!loopWidgets.length) {
      this.updateOptions('selected_element', selectedElementControlOptions);
      selectedElementControlView.setValue('');
    }
    let index = 1;
    for (const loopWidget of loopWidgets) {
      selectedElementControlOptions[loopWidget.dataset.id] = `${__('Loop Grid', 'elementor-pro')} ${index++}`;
    }
    this.updateOptions('selected_element', selectedElementControlOptions);
  },
  onElementChange(setting, controlView) {
    if ('selected_element' !== setting) {
      return;
    }
    const controlValue = controlView.getControlValue();
    if (this.handleInvalidSetup(controlValue)) {
      return;
    }
    if (controlValue) {
      this.updateTaxonomyOptions(controlValue);
    } else {
      this.updateOptions('taxonomy', {
        '': __('Select a taxonomy', 'elementor-pro')
      });
    }
  },
  getPostSourceQueryPostType(loopWidgetContainer) {
    const querySource = loopWidgetContainer.settings.attributes.post_query_post_type;
    let queryPostType = '';
    switch (querySource) {
      case 'current_query':
        queryPostType = elementorPro.config.loopFilter.mainQueryPostType;
        break;
      case 'by_id':
        // Currently 'by ID' is not supported since it can include multiple post types.
        queryPostType = 'post';
        break;
      case 'related':
        queryPostType = 'post';
        break;
      default:
        queryPostType = querySource;
    }
    return queryPostType;
  },
  getLoopQueryPostType(loopWidgetId) {
    const loopWidgetContainer = elementor.getContainer(loopWidgetId);
    const loopSource = loopWidgetContainer.settings.attributes._skin;
    if ('post' === loopSource) {
      return this.getPostSourceQueryPostType(loopWidgetContainer);
    }
    return 'product';
  },
  updateTaxonomyOptions(loopWidgetId) {
    const postType = this.getLoopQueryPostType(loopWidgetId);
    const postTypeTaxonomies = this.getPostTypeTaxonomies(postType).then(response => {
      if (!(response instanceof Response)) {
        return response;
      } else if (!response.ok || 400 <= response.status) {
        this.displayErrorDialog();
        return {};
      }
      return response.json();
    }).catch(() => {
      this.displayErrorDialog();
      return {};
    }).then(response => {
      let data = response?.data || response;
      if (!Object.keys(data).length) {
        this.updateOptions('taxonomy', {
          '': __('No taxonomies found', 'elementor-pro')
        });
        return;
      }
      data = {
        ...{
          '': __('Select a taxonomy', 'elementor-pro')
        },
        ...data
      };
      this.cache[postType] = data;
      this.updateOptions('taxonomy', data);
    });
    return postTypeTaxonomies;
  },
  /**
   *
   * @param {string} postType
   * @return {Promise} Promise that should resolve with taxonomies data.
   */
  getPostTypeTaxonomies(postType) {
    if (this.cache[postType] && Object.keys(this.cache[postType]).length) {
      return Promise.resolve(this.cache[postType]);
    }
    return this.fetchPostTypeTaxonomies(postType);
  },
  fetchPostTypeTaxonomies(postType) {
    return fetch(`${elementorCommon.config.urls.rest}elementor-pro/v1/get-post-type-taxonomies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-WP-Nonce': elementorWebCliConfig.nonce
      },
      body: JSON.stringify({
        post_type: postType
      })
    });
  },
  displayErrorDialog(options = {}) {
    const id = options?.id || 'e-filter-error-message';
    const showDialog = () => {
      elementorCommon.dialogsManager.createWidget('alert', {
        id,
        className: 'e-filter__error-message',
        headerMessage: options?.headerMessage || __('Something went wrong', 'elementor-pro'),
        message: options?.message || __('We are experiencing technical difficulties on our end. Please try again to reconnect.', 'elementor-pro'),
        position: {
          my: 'center center',
          at: 'center center'
        },
        strings: {
          confirm: __('OK', 'elementor-pro')
        }
      }).show();
    };
    setTimeout(showDialog, 0);
  },
  handleInvalidSetup(loopWidgetId) {
    const loopWidgetContainer = elementor.getContainer(loopWidgetId);
    if (!loopWidgetContainer) {
      return false;
    }
    const loopSource = loopWidgetContainer.settings.attributes.post_query_post_type;
    const isInvalidSetup = 'current_query' === loopSource && 'single-post' === elementor.config.document.type;
    if (!isInvalidSetup) {
      return false;
    }
    this.displayErrorDialog({
      id: 'e-filter-invalid-setup-error',
      headerMessage: __('Invalid Setup', 'elementor-pro'),
      message: __('Cannot filter a single-item list, please change from "Current Query" to a different query setting.', 'elementor-pro')
    });
    return true;
  }
});

/***/ }

}]);
//# sourceMappingURL=loop-filter-editor.55beef3d38bc920a7daf.bundle.js.map
/*! pro-elements - v3.18.0 - 06-12-2023 */
"use strict";
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["modules_query-control_assets_js_editor_template-query-control_js"],{

/***/ "../modules/query-control/assets/js/editor/template-query-control.js":
/*!***************************************************************************!*\
  !*** ../modules/query-control/assets/js/editor/template-query-control.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _queryControl = _interopRequireDefault(__webpack_require__(/*! ./query-control */ "../modules/query-control/assets/js/editor/query-control.js"));
class TemplateQueryControl extends _queryControl.default {
  ui() {
    return {
      ...super.ui(),
      newButton: 'button[data-action="new"]',
      editButton: 'button[data-action="edit"]'
    };
  }
  events() {
    return {
      ...super.events(),
      'click @ui.newButton': 'onNewButtonClicked',
      'click @ui.editButton': 'onEditButtonClicked'
    };
  }
  onRender(...args) {
    super.onRender(...args);
    this.toggleButtons(this.getControlValue());
  }
  onBaseInputChange(...args) {
    super.onBaseInputChange(...args);
    this.toggleButtons(this.getInputValue(args[0].currentTarget));
  }
  toggleButtons(templateID) {
    if (!templateID) {
      this.showNewTemplateButton();
    } else {
      this.showEditTemplateButton();
    }
  }
  showNewTemplateButton() {
    this.ui.newButton.get(0).style.display = 'block';
    this.ui.editButton.get(0).style.display = 'none';
  }
  showEditTemplateButton() {
    this.ui.newButton.get(0).style.display = 'none';
    this.ui.editButton.get(0).style.display = 'block';
  }
  async onNewButtonClicked() {
    this.createTemplate();
  }

  /**
   * This function is used to create a new template via the REST API.
   * We first show a confirm dialog so the user knows that the current document will be saved while creating
   * and editing a new template. If the user chooses to cancel the process will not continue,
   * and if confirmed the new template is created and the Editor switched to this newly created template.
   *
   * @since 3.8.0
   *
   * @return {void}
   */
  createTemplate() {
    if (!this.confirmSaveBeforeTemplateCreateDialog) {
      this.confirmSaveBeforeTemplateCreateDialog = elementorCommon.dialogsManager.createWidget('confirm', {
        id: 'e-confirm-save-before-template-create',
        headerMessage: __('Save Changes', 'elementor-pro'),
        message: __('Would you like to save the changes you\'ve made?', 'elementor-pro'),
        position: {
          my: 'center center',
          at: 'center center'
        },
        strings: {
          confirm: __('Save', 'elementor-pro'),
          cancel: __('Discard', 'elementor-pro')
        },
        onConfirm: async () => {
          await this.onConfirmCreateTemplate();
        }
      });
    }
    this.confirmSaveBeforeTemplateCreateDialog.show();
  }
  async onConfirmCreateTemplate() {
    $e.internal('panel/state-loading');
    const templateID = await this.createAndSetTemplate();
    this.afterAction('new', templateID);
    $e.internal('panel/state-ready');
  }
  async createAndSetTemplate() {
    const controlId = this.model.get('name'),
      newTemplateType = this.options.container.controls[controlId].actions.new.document_config.type,
      newTemplateSource = this.getTemplateSourceTypeValue(),
      newTemplate = await $e.data.create('library/templates', {
        type: newTemplateType,
        page_settings: {
          source: newTemplateSource
        }
      }),
      templateID = parseInt(newTemplate.data.template_id);
    this.setValue(templateID);
    return templateID;
  }
  getTemplateSourceTypeValue() {
    if ('repeater' === this.options?.container?.args?.type) {
      return this.options.container.renderer.args.settings.attributes._skin || undefined;
    }
    return this.options.container.controls._skin ? this.options.container.panel.getControlView('_skin').getControlValue() : undefined;
  }

  /**
   * Function to switch the Editor when a user clicks to create a new template or edit the chosen template.
   *
   * @since 3.8.0
   *
   * @param {string|number} id
   *
   * @return {Promise<void>}
   */
  async switchDocument(id) {
    // Await $e.run( 'document/save/update', { force: true } );
    await $e.run('editor/documents/switch', {
      id: parseInt(id),
      mode: 'save'
    });
    const document = elementor.documents.getCurrent();
    if (document.config.container_attributes && document.config.container_attributes.class) {
      document.$element.addClass(document.config.container_attributes.class);
    }
  }
  async onEditButtonClicked() {
    this.afterAction('edit', this.getControlValue());
  }
  getSelect2Placeholder() {
    return {
      id: '',
      text: __('Start typing its name', 'elementor-pro')
    };
  }
  async afterAction(context, templateID) {
    const action = 'new' === context ? this.ui.newButton[0].getAttribute('data-after-action') : this.ui.editButton[0].getAttribute('data-after-action');
    if ('switch_document' === action) {
      await this.switchDocument(templateID);
    } else {
      window.open(this.getThemeBuilderURL(templateID), '_blank');
    }
  }
  getThemeBuilderURL(templateID) {
    return `${elementor.config.admin_url}post.php?post=${templateID}&action=elementor`;
  }
}
exports["default"] = TemplateQueryControl;

/***/ })

}]);
//# sourceMappingURL=4abfbfd970d6f7680bc7.bundle.js.map
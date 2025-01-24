/*!pro-elements - v3.27.0 - 20-01-2025 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../license/assets/js/admin.js":
/*!*************************************!*\
  !*** ../license/assets/js/admin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class Module extends elementorModules.Module {
  #actionLinks = [{
    href: 'elementor_pro_renew_license_menu_link',
    external_url: 'https://go.elementor.com/wp-menu-renew/'
  }, {
    href: 'elementor_pro_upgrade_license_menu_link',
    external_url: 'https://go.elementor.com/go-pro-advanced-elementor-menu/'
  }];
  onInit() {
    this.assignMenuItemActions();
  }
  assignMenuItemActions() {
    window.addEventListener('DOMContentLoaded', () => {
      this.#actionLinks.forEach(item => {
        const link = document.querySelector(`a[href="${item.href}"]`);
        if (!link) {
          return;
        }
        link.addEventListener('click', e => {
          e.preventDefault();
          window.open(item.external_url, '_blank');
        });
      });
    });
  }
}
exports["default"] = Module;

/***/ }),

/***/ "../modules/assets-manager/assets/js/admin.js":
/*!****************************************************!*\
  !*** ../modules/assets-manager/assets/js/admin.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _elementorFontManager = _interopRequireDefault(__webpack_require__(/*! ./admin/elementor-font-manager */ "../modules/assets-manager/assets/js/admin/elementor-font-manager.js"));
var _elementorCustomIcons = _interopRequireDefault(__webpack_require__(/*! ./admin/elementor-custom-icons */ "../modules/assets-manager/assets/js/admin/elementor-custom-icons.js"));
module.exports = function () {
  const TypekitAdmin = __webpack_require__(/*! ./admin/typekit */ "../modules/assets-manager/assets/js/admin/typekit.js"),
    CustomIcon = _elementorCustomIcons.default,
    FontAwesomeProAdmin = (__webpack_require__(/*! ./admin/font-awesome-pro */ "../modules/assets-manager/assets/js/admin/font-awesome-pro.js")["default"]);
  this.fontManager = new _elementorFontManager.default();
  this.typekit = new TypekitAdmin();
  this.fontAwesomePro = new FontAwesomeProAdmin();
  this.customIcons = new CustomIcon();
};

/***/ }),

/***/ "../modules/assets-manager/assets/js/admin/custom-assets-base.js":
/*!***********************************************************************!*\
  !*** ../modules/assets-manager/assets/js/admin/custom-assets-base.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class CustomAssetsBase extends elementorModules.ViewModule {
  showAlertDialog(id, message) {
    let onConfirm = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    let onHide = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    const alertData = {
      id,
      message
    };
    if (onConfirm) {
      alertData.onConfirm = onConfirm;
    }
    if (onHide) {
      alertData.onHide = onHide;
    }

    // Save the instance of the alert dialog to check for its visibility later
    if (!this.alertWidget) {
      this.alertWidget = elementorCommon.dialogsManager.createWidget('alert', alertData);
    }
    this.alertWidget.show();
  }
  onDialogDismiss() {
    // WP's publish button gets a disabled class on submit attempt
    this.elements.$publishButton.removeClass('disabled');

    // Prevent WP's publish spinner from appearing on publish attempt
    this.elements.$publishButtonSpinner.removeClass('is-active');
  }
  handleSubmit(event) {
    // If we know there is a file already, return to continue submission normally
    if (this.fileWasUploaded) {
      return;
    }
    const hasValue = this.checkInputsForValues(); // Method exists in the child classes

    // If the file input is not empty, continue the submission process
    if (hasValue) {
      this.fileWasUploaded = true;
      this.elements.$postForm.trigger('submit');
      return;
    }
    event.preventDefault(); // Prevent new asset submission

    // If no value was found, stop submission and display a notice modal
    this.showAlertDialog('noData', this.getSettings('notice'), () => this.onDialogDismiss(),
    // OnConfirm
    () => this.onDialogDismiss() // OnHide
    );
    return false;
  }
  bindEvents() {
    this.elements.$postForm.on('submit', this.handleSubmit.bind(this));
  }
}
var _default = exports["default"] = CustomAssetsBase;

/***/ }),

/***/ "../modules/assets-manager/assets/js/admin/elementor-custom-icons.js":
/*!***************************************************************************!*\
  !*** ../modules/assets-manager/assets/js/admin/elementor-custom-icons.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _customAssetsBase = _interopRequireDefault(__webpack_require__(/*! ./custom-assets-base */ "../modules/assets-manager/assets/js/admin/custom-assets-base.js"));
var _elementorProDropzone = _interopRequireDefault(__webpack_require__(/*! ./fields/elementor-pro-dropzone */ "../modules/assets-manager/assets/js/admin/fields/elementor-pro-dropzone.js"));
class CustomIcons extends _customAssetsBase.default {
  getDefaultSettings() {
    return {
      fields: {
        dropzone: _elementorProDropzone.default
      },
      classes: {
        editPageClass: 'post-type-elementor_icons',
        editPhp: 'edit-php',
        hasIcons: 'elementor--has-icons'
      },
      selectors: {
        editPageClass: 'post-type-elementor_icons',
        title: '#title',
        metaboxContainer: '#elementor-custom-icons-metabox',
        metabox: '.elementor-custom-icons-metabox',
        closeHandle: 'button.handlediv',
        iconsTemplate: '#elementor-icons-template',
        dataInput: '#elementor_custom_icon_set_config',
        dropzone: '.zip_upload',
        submitDelete: '.submitdelete',
        dayInput: '#hidden_jj',
        mmInput: '#hidden_mm',
        yearInput: '#hidden_aa',
        hourInput: '#hidden_hh',
        minuteInput: '#hidden_mn',
        publishButton: '#publish',
        publishButtonSpinner: '#publishing-action > .spinner',
        submitMetabox: '#postbox-container-1',
        postForm: '#post',
        fileInput: '#zip_upload',
        iconSetConfigInput: '#elementor_custom_icon_set_config'
      },
      templates: {
        icon: '<li><div class="icon"><i class="{{icon}}"></i><div class="icon-name">{{label}}</div></div></li>',
        header: jQuery('#elementor-custom-icons-template-header').html(),
        footer: jQuery('#elementor-custom-icons-template-footer').html(),
        duplicatePrefix: jQuery('#elementor-custom-icons-template-duplicate-prefix').html()
      },
      notice: __('Upload an icon set to publish.', 'elementor-pro')
    };
  }
  getDefaultElements() {
    const elements = {},
      selectors = this.getSettings('selectors');
    jQuery.each(selectors, (element, selector) => {
      elements['$' + element] = jQuery(selector);
    });
    return elements;
  }
  bindEvents() {
    super.bindEvents();
    if ('' !== this.getData()) {
      this.bindOnTitleChange();
    }
  }
  bindOnTitleChange() {
    const {
        $title
      } = this.elements,
      onTitleInput = event => this.onTitleInput(event);
    $title.on('input change', onTitleInput);
  }
  removeCloseHandle() {
    const {
      $metaboxContainer
    } = this.elements;
    $metaboxContainer.find('h2').remove();
    $metaboxContainer.find('button').remove();
    $metaboxContainer.removeClass('closed').removeClass('postbox');
  }
  prepareIconName(icon) {
    const iconName = icon.replace('_', ' ').replace('-', ' ');
    return elementorCommon.helpers.upperCaseWords(iconName);
  }
  getCreatedOn() {
    const {
      $dayInput,
      $mmInput,
      $yearInput,
      $hourInput,
      $minuteInput
    } = this.elements;
    return {
      day: $dayInput.val(),
      mm: $mmInput.val(),
      year: $yearInput.val(),
      hour: $hourInput.val(),
      minute: $minuteInput.val()
    };
  }
  enqueueCSS(url) {
    if (!elementorCommon.elements.$document.find('link[href="' + url + '"]').length) {
      elementorCommon.elements.$document.find('link').last().after('<link href="' + url + '" rel="stylesheet" type="text/css">');
    }
  }
  setData(data) {
    this.elements.$dataInput.val(JSON.stringify(data));
  }
  getData() {
    const value = this.elements.$dataInput.val();
    return '' === value ? '' : JSON.parse(value);
  }
  renderIconList(config) {
    const iconTemplate = this.getSettings('templates.icon');
    return config.icons.map(icon => {
      const data = {
        icon: config.displayPrefix + ' ' + config.prefix + icon,
        label: this.prepareIconName(icon)
      };
      return elementorCommon.compileTemplate(iconTemplate, data);
    }).join('\n');
  }
  renderIcons(config) {
    const {
      $metaboxContainer,
      $metabox,
      $submitMetabox
    } = this.elements;
    const {
      header,
      footer
    } = this.getSettings('templates');
    $metaboxContainer.addClass(this.getSettings('classes.hasIcons'));
    $submitMetabox.show();
    this.setData(config);
    this.enqueueCSS(config.url);
    $metabox.html('');
    $metaboxContainer.prepend(elementorCommon.compileTemplate(header, config));
    $metabox.append('<ul>' + this.renderIconList(config) + '</ul>');
    $metaboxContainer.append(elementorCommon.compileTemplate(footer, this.getCreatedOn()));
  }
  onTitleInput(event) {
    const data = this.getData();
    data.label = event.target.value;
    this.setData(data);
  }
  checkInputsForValues() {
    // If creating new icon set - check the file input for a value
    // If editing an existing icon set - check the icon set config input for a value
    if ('' !== this.elements.$fileInput.val() || '' !== this.elements.$iconSetConfigInput.val()) {
      return true;
    }
    return false;
  }
  onSuccess(data) {
    // It is possible to add a `dropzoneElement` param to this method for implementing upload progress bar
    if (data.data.errors) {
      let id, message;
      jQuery.each(data.data.errors, (errorId, errorMessage) => {
        id = errorId;
        message = errorMessage;
        return false;
      });
      return this.showAlertDialog(id, message);
    }
    if (data.data.config.duplicate_prefix) {
      delete data.data.config.duplicatePrefix;
      return this.showAlertDialog('duplicate-prefix', this.getSettings('templates.duplicatePrefix'), () => this.saveInitialUpload(data.data.config));
    }
    this.saveInitialUpload(data.data.config);
  }
  saveInitialUpload(config) {
    this.setData(config);
    const {
      $publishButton,
      $title,
      $submitMetabox
    } = this.elements;
    $submitMetabox.show();
    if ('' === $title.val()) {
      $title.val(config.name);
    }
    this.fileWasUploaded = true; // Flag to prevent infinite loop in the handleSubmit() method
    $publishButton.trigger('click');
  }
  onInit() {
    var _this = this;
    const {
        $body
      } = elementorCommon.elements,
      {
        editPageClass,
        editPhp
      } = this.getSettings('classes');
    if (!$body.hasClass(editPageClass) || $body.hasClass(editPhp)) {
      return;
    }
    super.onInit();
    this.removeCloseHandle();
    const dropzoneFieldClass = this.getSettings('fields.dropzone'),
      dropzoneField = new dropzoneFieldClass(),
      config = this.getData(),
      {
        $dropzone,
        $metaboxContainer
      } = this.elements;
    if ('' === config) {
      $dropzone.show('fast');
      dropzoneField.setSettings('onSuccess', function () {
        return _this.onSuccess(...arguments);
      });
    } else {
      this.renderIcons(config);
    }
    $metaboxContainer.show('fast');
  }
}
var _default = exports["default"] = CustomIcons;

/***/ }),

/***/ "../modules/assets-manager/assets/js/admin/elementor-font-manager.js":
/*!***************************************************************************!*\
  !*** ../modules/assets-manager/assets/js/admin/elementor-font-manager.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _customAssetsBase = _interopRequireDefault(__webpack_require__(/*! ./custom-assets-base */ "../modules/assets-manager/assets/js/admin/custom-assets-base.js"));
var _elementorProUpload = _interopRequireDefault(__webpack_require__(/*! ./fields/elementor-pro-upload */ "../modules/assets-manager/assets/js/admin/fields/elementor-pro-upload.js"));
var _elementorProRepeater = _interopRequireDefault(__webpack_require__(/*! ./fields/elementor-pro-repeater */ "../modules/assets-manager/assets/js/admin/fields/elementor-pro-repeater.js"));
class CustomFontsManager extends _customAssetsBase.default {
  getDefaultSettings() {
    return {
      fields: {
        upload: _elementorProUpload.default,
        repeater: _elementorProRepeater.default
      },
      selectors: {
        editPageClass: 'post-type-elementor_font',
        title: '#title',
        repeaterBlock: '.repeater-block',
        repeaterTitle: '.repeater-title',
        removeRowBtn: '.remove-repeater-row',
        editRowBtn: '.toggle-repeater-row',
        closeRowBtn: '.close-repeater-row',
        styleInput: '.font_style',
        weightInput: '.font_weight',
        customFontsMetaBox: '#elementor-font-custommetabox',
        closeHandle: 'button.handlediv',
        toolbar: '.elementor-field-toolbar',
        inlinePreview: '.inline-preview',
        fileUrlInput: '.elementor-field-file input[type="text"]',
        postForm: '#post',
        publishButton: '#publish',
        publishButtonSpinner: '#publishing-action > .spinner'
      },
      notice: __('Choose a font to publish.', 'elementor-pro'),
      fontLabelTemplate: '<ul class="row-font-label">' + '<li class="row-font-weight">{{weight}}</li>' + '<li class="row-font-style">{{style}}</li>' + '<li class="row-font-preview">{{preview}}</li>' + '{{toolbar}}' + '</ul>'
    };
  }
  getDefaultElements() {
    const selectors = this.getSettings('selectors');
    return {
      $postForm: jQuery(selectors.postForm),
      $publishButton: jQuery(selectors.publishButton),
      $publishButtonSpinner: jQuery(selectors.publishButtonSpinner),
      $closeHandle: jQuery(selectors.closeHandle),
      $customFontsMetaBox: jQuery(selectors.customFontsMetaBox),
      $title: jQuery(selectors.title)
    };
  }
  renderTemplate(tpl, data) {
    const re = /{{([^}}]+)?}}/g;
    let match;
    while (match = re.exec(tpl)) {
      // eslint-disable-line no-cond-assign
      tpl = tpl.replace(match[0], data[match[1]]);
    }
    return tpl;
  }
  ucFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  getPreviewStyle($table) {
    const selectors = this.getSettings('selectors'),
      fontFamily = this.elements.$title.val(),
      style = $table.find('select' + selectors.styleInput).first().val(),
      weight = $table.find('select' + selectors.weightInput).first().val();
    return {
      style: this.ucFirst(style),
      weight: this.ucFirst(weight),
      styleAttribute: 'font-family: ' + fontFamily + ' ;font-style: ' + style + '; font-weight: ' + weight + ';'
    };
  }
  updateRowLabel(event, $table) {
    const selectors = this.getSettings('selectors'),
      fontLabelTemplate = this.getSettings('fontLabelTemplate'),
      $block = $table.closest(selectors.repeaterBlock),
      $deleteBtn = $block.find(selectors.removeRowBtn).first(),
      $editBtn = $block.find(selectors.editRowBtn).first(),
      $closeBtn = $block.find(selectors.closeRowBtn).first(),
      $toolbar = $table.find(selectors.toolbar).last().clone(),
      previewStyle = this.getPreviewStyle($table);
    if ($editBtn.length > 0) {
      $editBtn.not(selectors.toolbar + ' ' + selectors.editRowBtn).remove();
    }
    if ($closeBtn.length > 0) {
      $closeBtn.not(selectors.toolbar + ' ' + selectors.closeRowBtn).remove();
    }
    if ($deleteBtn.length > 0) {
      $deleteBtn.not(selectors.toolbar + ' ' + selectors.removeRowBtn).remove();
    }
    const toolbarHtml = jQuery('<li class="row-font-actions">').append($toolbar)[0].outerHTML;
    return this.renderTemplate(fontLabelTemplate, {
      weight: '<span class="label">Weight:</span>' + previewStyle.weight,
      style: '<span class="label">Style:</span>' + previewStyle.style,
      preview: '<span style="' + previewStyle.styleAttribute + '">Elementor is making the web beautiful</span>',
      toolbar: toolbarHtml
    });
  }
  onRepeaterToggleVisible(event, $btn, $table) {
    const selectors = this.getSettings('selectors'),
      $previewElement = $table.find(selectors.inlinePreview),
      previewStyle = this.getPreviewStyle($table);
    $previewElement.attr('style', previewStyle.styleAttribute);
  }
  onRepeaterNewRow(event, $btn, $block) {
    const selectors = this.getSettings('selectors');
    $block.find(selectors.removeRowBtn).first().remove();
    $block.find(selectors.editRowBtn).first().remove();
    $block.find(selectors.closeRowBtn).first().remove();
  }
  maybeToggle(event) {
    event.preventDefault();
    const selectors = this.getSettings('selectors');
    if (jQuery(this).is(':visible') && !jQuery(event.target).hasClass(selectors.editRowBtn)) {
      jQuery(this).find(selectors.editRowBtn).trigger('click');
    }
  }
  onInputChange(event) {
    const $el = jQuery(event.target).next(),
      fields = this.getSettings('fields');
    fields.upload.setFields($el);
    fields.upload.setLabels($el);
    fields.upload.replaceButtonClass($el);
  }
  bindEvents() {
    const selectors = this.getSettings('selectors');
    jQuery(document).on('repeaterComputedLabel', this.updateRowLabel.bind(this)).on('onRepeaterToggleVisible', this.onRepeaterToggleVisible.bind(this)).on('onRepeaterNewRow', this.onRepeaterNewRow.bind(this)).on('click', selectors.repeaterTitle, this.maybeToggle.bind(this)).on('input', selectors.fileUrlInput, this.onInputChange.bind(this));
    super.bindEvents();
  }
  checkInputsForValues() {
    const selectors = this.getSettings('selectors');
    let hasValue = false;

    // Check the file inputs for a value
    jQuery(selectors.fileUrlInput).each((index, element) => {
      if ('' !== jQuery(element).val()) {
        hasValue = true;
        return false; // If a value was found, break the loop
      }
    });
    return hasValue;
  }
  removeCloseHandle() {
    this.elements.$closeHandle.remove();
    this.elements.$customFontsMetaBox.removeClass('closed').removeClass('postbox');
  }
  titleRequired() {
    this.elements.$title.prop('required', true);
  }
  onInit() {
    const settings = this.getSettings();
    if (!jQuery('body').hasClass(settings.selectors.editPageClass)) {
      return;
    }
    super.onInit(...arguments);
    this.removeCloseHandle();
    this.titleRequired();
    settings.fields.upload.init();
    settings.fields.repeater.init();
    const $document = jQuery(document);
    const markMetaboxIfVariableFont = this.markMetaboxIfVariableFont.bind(this);
    jQuery('#add-variable-font').on('click', () => {
      jQuery(document).one('onRepeaterNewRow', (event, $repeaterBtn, $repeaterBlock) => {
        $repeaterBlock.find('input[name$="font_type]"]').val('variable');
        markMetaboxIfVariableFont();
      });
      jQuery('#elementor-font-custommetabox').find('.add-repeater-row').trigger('click');
    });
    $document.on('onRepeaterNewRow', markMetaboxIfVariableFont);
    $document.on('onRepeaterRemoveRow', markMetaboxIfVariableFont);
    $document.on('change', 'input[name$="variable_width]"], input[name$="variable_weight]"]', this.onFontVariableTypeChange);
    markMetaboxIfVariableFont();
  }
  markMetaboxIfVariableFont() {
    const $fontType = jQuery('input[name$="font_type]"]');
    const $metaboxContent = jQuery('.elementor-metabox-content');
    $metaboxContent.removeClass('has-font-variable has-font-static');
    if (!$fontType.length) {
      return;
    }
    const hasVariableRow = 'variable' === $fontType.val();
    if (hasVariableRow) {
      $metaboxContent.addClass('has-font-variable', hasVariableRow);
    } else {
      $metaboxContent.addClass('has-font-static');
    }
    jQuery('input[name$="variable_width]"], input[name$="variable_weight]"]').each(this.onFontVariableTypeChange);
  }
  onFontVariableTypeChange() {
    const $this = jQuery(this);
    const wrapDiv = $this.parents().eq(1);
    wrapDiv.toggleClass('e-font-variable-hidden', !$this.is(':checked'));
  }
}
exports["default"] = CustomFontsManager;

/***/ }),

/***/ "../modules/assets-manager/assets/js/admin/fields/elementor-pro-dropzone.js":
/*!**********************************************************************************!*\
  !*** ../modules/assets-manager/assets/js/admin/fields/elementor-pro-dropzone.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class DropZoneField extends elementorModules.ViewModule {
  getDefaultSettings() {
    const baseSelector = '.elementor-dropzone-field';
    return {
      droppedFiles: false,
      selectors: {
        dropZone: baseSelector,
        input: baseSelector + ' [type="file"]',
        label: baseSelector + 'label',
        errorMsg: baseSelector + '.box__error span',
        restart: baseSelector + '.box__restart',
        browseButton: baseSelector + ' .elementor--dropzone--upload__browse',
        postId: '#post_ID'
      },
      classes: {
        drag: 'is-dragover',
        error: 'is-error',
        success: 'is-success',
        upload: 'is-uploading'
      },
      onSuccess: null,
      onError: null
    };
  }
  getDefaultElements() {
    const elements = {};
    const selectors = this.getSettings('selectors');
    jQuery.each(selectors, (element, selector) => {
      elements['$' + element] = jQuery(selector);
    });
    return elements;
  }
  bindEvents() {
    const {
      $dropZone,
      $browseButton,
      $input
    } = this.elements;
    const {
      drag
    } = this.getSettings('classes');
    $browseButton.on('click', () => $input.trigger('click'));
    $dropZone.on('drag dragstart dragend dragover dragenter dragleave drop', event => {
      event.preventDefault();
      event.stopPropagation();
    }).on('dragover dragenter', () => {
      $dropZone.addClass(drag);
    }).on('dragleave dragend drop', () => {
      $dropZone.removeClass(drag);
    }).on('drop change', event => {
      if ('change' === event.type) {
        this.setSettings('droppedFiles', event.originalEvent.target.files);
      } else {
        this.setSettings('droppedFiles', event.originalEvent.dataTransfer.files);
      }
      this.handleUpload();
    });
  }
  handleUpload() {
    const droppedFiles = this.getSettings('droppedFiles');
    if (!droppedFiles) {
      return;
    }
    const {
        $input,
        $dropZone,
        $postId,
        $errorMsg
      } = this.elements,
      {
        error,
        success,
        upload
      } = this.getSettings('classes'),
      {
        onSuccess,
        onError
      } = this.getSettings(),
      ajaxData = new FormData(),
      fieldName = $input.attr('name'),
      actionKey = 'pro_assets_manager_custom_icon_upload',
      self = this;
    Object.entries(droppedFiles).forEach(file => {
      ajaxData.append(fieldName, file[1]);
    });
    ajaxData.append('actions', JSON.stringify({
      pro_assets_manager_custom_icon_upload: {
        action: actionKey,
        data: {
          post_id: $postId.val()
        }
      }
    }));
    $dropZone.removeClass(success).removeClass(error);
    elementorCommon.ajax.send('ajax', {
      data: ajaxData,
      cache: false,
      enctype: 'multipart/form-data',
      contentType: false,
      processData: false,
      // TODO: Do something with upload progress
      /* xhr: () => {
      	const xhr = jQuery.ajaxSettings.xhr();
      	xhr.upload.onprogress = ( evt ) => {
      		if ( evt.lengthComputable ) {
      			const percentComplete = Math.round( ( evt.loaded * 100 / evt.total ) );
      		}
      	};
      		return xhr;
      },*/
      complete: () => {
        $dropZone.removeClass(upload);
      },
      success: response => {
        const data = response.responses[actionKey];
        $dropZone.addClass(data.success ? success : error);
        if (data.success) {
          if (onSuccess) {
            onSuccess(data, self);
          }
        } else {
          $errorMsg.text(data.error);
          if (onError) {
            onError(self, arguments);
          }
        }
      },
      error: () => {
        if ('function' === typeof onError) {
          onError(self, arguments);
        }
      }
    });
  }
  onInit() {
    super.onInit();
    elementorCommon.elements.$document.trigger('onDropzoneLoaded', [this]);
  }
}
var _default = exports["default"] = DropZoneField;

/***/ }),

/***/ "../modules/assets-manager/assets/js/admin/fields/elementor-pro-repeater.js":
/*!**********************************************************************************!*\
  !*** ../modules/assets-manager/assets/js/admin/fields/elementor-pro-repeater.js ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = {
  selectors: {
    add: '.add-repeater-row',
    remove: '.remove-repeater-row',
    toggle: '.toggle-repeater-row',
    close: '.close-repeater-row',
    sort: '.sort-repeater-row',
    table: '.form-table',
    block: '.repeater-block',
    repeaterLabel: '.repeater-title',
    repeaterField: '.elementor-field-repeater'
  },
  counters: [],
  trigger(eventName, params) {
    jQuery(document).trigger(eventName, params);
  },
  triggerHandler(eventName, params) {
    return jQuery(document).triggerHandler(eventName, params);
  },
  countBlocks($btn) {
    return $btn.closest(this.selectors.repeaterField).find(this.selectors.block).length || 0;
  },
  add(btn) {
    var self = this,
      $btn = jQuery(btn),
      id = $btn.data('template-id'),
      repeaterBlock;
    if (!Object.prototype.hasOwnProperty.call(self.counters, id)) {
      self.counters[id] = self.countBlocks($btn);
    }
    self.counters[id] += 1;
    repeaterBlock = jQuery('#' + id).html();
    repeaterBlock = self.replaceAll('__counter__', self.counters[id], repeaterBlock);
    $btn.before(repeaterBlock);
    self.trigger('onRepeaterNewRow', [$btn, $btn.prev()]);
  },
  remove(btn) {
    var self = this;
    jQuery(btn).closest(self.selectors.block).remove();
    self.trigger('onRepeaterRemoveRow', [btn]);
  },
  toggle(btn) {
    var self = this,
      $btn = jQuery(btn),
      $table = $btn.closest(self.selectors.block).find(self.selectors.table),
      $toggleLabel = $btn.closest(self.selectors.block).find(self.selectors.repeaterLabel);
    $table.toggle(0, function () {
      if ($table.is(':visible')) {
        $table.closest(self.selectors.block).addClass('block-visible');
        self.trigger('onRepeaterToggleVisible', [$btn, $table, $toggleLabel]);
      } else {
        $table.closest(self.selectors.block).removeClass('block-visible');
        self.trigger('onRepeaterToggleHidden', [$btn, $table, $toggleLabel]);
      }
    });
    $toggleLabel.toggle();

    // Update row label
    self.updateRowLabel(btn);
  },
  close(btn) {
    var self = this,
      $btn = jQuery(btn),
      $table = $btn.closest(self.selectors.block).find(self.selectors.table),
      $toggleLabel = $btn.closest(self.selectors.block).find(self.selectors.repeaterLabel);
    $table.closest(self.selectors.block).removeClass('block-visible');
    $table.hide();
    self.trigger('onRepeaterToggleHidden', [$btn, $table, $toggleLabel]);
    $toggleLabel.show();
    self.updateRowLabel(btn);
  },
  updateRowLabel(btn) {
    var self = this,
      $btn = jQuery(btn),
      $table = $btn.closest(self.selectors.block).find(self.selectors.table),
      $toggleLabel = $btn.closest(self.selectors.block).find(self.selectors.repeaterLabel);
    var selector = $toggleLabel.data('selector');
    // For some browsers, `attr` is undefined; for others,  `attr` is false.  Check for both.
    if (typeof selector !== typeof undefined && false !== selector) {
      var value = false,
        std = $toggleLabel.data('default');
      if ($table.find(selector).length) {
        value = $table.find(selector).val();
      }

      // Filter hook
      var computedLabel = self.triggerHandler('repeaterComputedLabel', [$table, $toggleLabel, value]);

      // For some browsers, `attr` is undefined; for others,  `attr` is false.  Check for both.
      if (undefined !== computedLabel && false !== computedLabel) {
        value = computedLabel;
      }

      // Fallback to default row label
      if (undefined === value || false === value) {
        value = std;
      }
      $toggleLabel.html(value);
    }
  },
  replaceAll(search, replace, string) {
    return string.replace(new RegExp(search, 'g'), replace);
  },
  init() {
    var self = this;
    jQuery(document).on('click', this.selectors.add, function (event) {
      event.preventDefault();
      self.add(jQuery(this), event);
    }).on('click', this.selectors.remove, function (event) {
      event.preventDefault();
      // eslint-disable-next-line no-alert
      var result = confirm(jQuery(this).data('confirm').toString());
      if (!result) {
        return;
      }
      self.remove(jQuery(this), event);
    }).on('click', this.selectors.toggle, function (event) {
      event.preventDefault();
      event.stopPropagation();
      self.toggle(jQuery(this), event);
    }).on('click', this.selectors.close, function (event) {
      event.preventDefault();
      event.stopPropagation();
      self.close(jQuery(this), event);
    });
    jQuery(this.selectors.toggle).each(function () {
      self.updateRowLabel(jQuery(this));
    });
    this.trigger('onRepeaterLoaded', [this]);
  }
};

/***/ }),

/***/ "../modules/assets-manager/assets/js/admin/fields/elementor-pro-upload.js":
/*!********************************************************************************!*\
  !*** ../modules/assets-manager/assets/js/admin/fields/elementor-pro-upload.js ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = {
  $btn: null,
  fileId: null,
  fileUrl: null,
  fileFrame: [],
  selectors: {
    uploadBtnClass: 'elementor-upload-btn',
    clearBtnClass: 'elementor-upload-clear-btn',
    uploadBtn: '.elementor-upload-btn',
    clearBtn: '.elementor-upload-clear-btn',
    inputURLField: '.elementor-field-file input[type="text"]'
  },
  hasValue() {
    return '' !== jQuery(this.fileUrl).val();
  },
  setLabels($el) {
    if (!this.hasValue()) {
      $el.val($el.data('upload_text'));
    } else {
      $el.val($el.data('remove_text'));
    }
  },
  setFields(el) {
    const self = this;
    self.fileUrl = jQuery(el).prev();
    self.fileId = jQuery(self.fileUrl).prev();
  },
  setUploadParams(ext, name) {
    const uploader = this.fileFrame[name].uploader.uploader;
    uploader.param('uploadType', ext);
    uploader.param('uploadTypeCaller', 'elementor-admin-font-upload');
    uploader.param('post_id', this.getPostId());
  },
  setUploadMimeType(frame, ext) {
    // Set {ext} as only allowed upload extensions
    const oldExtensions = _wpPluploadSettings.defaults.filters.mime_types[0].extensions,
      self = this;
    frame.on('ready', () => {
      _wpPluploadSettings.defaults.filters.mime_types[0].extensions = ext;
    });
    frame.on('close', () => {
      // Restore allowed upload extensions
      _wpPluploadSettings.defaults.filters.mime_types[0].extensions = oldExtensions;
      self.replaceButtonClass(self.$btn);
    });
  },
  replaceButtonClass(el) {
    if (this.hasValue()) {
      jQuery(el).removeClass(this.selectors.uploadBtnClass).addClass(this.selectors.clearBtnClass);
    } else {
      jQuery(el).removeClass(this.selectors.clearBtnClass).addClass(this.selectors.uploadBtnClass);
    }
    this.setLabels(el);
  },
  uploadFile(el) {
    const self = this,
      $el = jQuery(el),
      mime = $el.attr('data-mime_type') || '',
      ext = $el.attr('data-ext') || false,
      name = $el.attr('id');
    // If the media frame already exists, reopen it.
    if ('undefined' !== typeof self.fileFrame[name]) {
      if (ext) {
        self.setUploadParams(ext, name);
      }
      self.fileFrame[name].open();
      return;
    }

    // Create the media frame.
    self.fileFrame[name] = wp.media({
      library: {
        type: [...mime.split(','), mime.split(',').join('')]
      },
      title: $el.data('box_title'),
      button: {
        text: $el.data('box_action')
      },
      multiple: false
    });

    // When an file is selected, run a callback.
    self.fileFrame[name].on('select', function () {
      // We set multiple to false so only get one image from the uploader
      const attachment = self.fileFrame[name].state().get('selection').first().toJSON();
      // Do something with attachment.id and/or attachment.url here
      jQuery(self.fileId).val(attachment.id);
      jQuery(self.fileUrl).val(attachment.url);
      self.replaceButtonClass(el);
      self.updatePreview(el);
    });
    self.fileFrame[name].on('open', () => {
      const selectedId = this.fileId.val();
      if (!selectedId) {
        return;
      }
      const selection = self.fileFrame[name].state().get('selection');
      selection.add(wp.media.attachment(selectedId));
    });
    self.setUploadMimeType(self.fileFrame[name], ext);

    // Finally, open the modal
    self.fileFrame[name].open();
    if (ext) {
      self.setUploadParams(ext, name);
    }
  },
  updatePreview(el) {
    const self = this,
      $ul = jQuery(el).parent().find('ul'),
      $li = jQuery('<li>'),
      showUrlType = jQuery(el).data('preview_anchor') || 'full';
    $ul.html('');
    if (self.hasValue() && 'none' !== showUrlType) {
      let anchor = jQuery(self.fileUrl).val();
      if ('full' !== showUrlType) {
        anchor = anchor.substring(anchor.lastIndexOf('/') + 1);
      }
      $li.html('<a href="' + jQuery(self.fileUrl).val() + '" download>' + anchor + '</a>');
      $ul.append($li);
    }
  },
  setup() {
    const self = this;
    jQuery(self.selectors.uploadBtn + ', ' + self.selectors.clearBtn).each(function () {
      self.setFields(jQuery(this));
      self.updatePreview(jQuery(this));
      self.setLabels(jQuery(this));
      self.replaceButtonClass(jQuery(this));
    });
  },
  getPostId() {
    return jQuery('#post_ID').val();
  },
  handleUploadClick(event) {
    event.preventDefault();
    const $element = jQuery(event.target);
    if ('text' === $element.attr('type')) {
      return $element.next().removeClass(this.selectors.clearBtnClass).addClass(this.selectors.uploadBtnClass).trigger('click');
    }
    this.$btn = $element;
    this.setFields($element);
    this.uploadFile($element);
  },
  init() {
    const self = this,
      {
        uploadBtn,
        inputURLField,
        clearBtn
      } = this.selectors,
      handleUpload = event => this.handleUploadClick(event);
    jQuery(document).on('click', uploadBtn, handleUpload);
    jQuery(document).on('click', inputURLField, event => {
      if ('' !== event.target.value) {
        handleUpload(event);
      }
    });
    jQuery(document).on('click', clearBtn, function (event) {
      event.preventDefault();
      const $element = jQuery(this);
      self.setFields($element);
      jQuery(self.fileUrl).val('');
      jQuery(self.fileId).val('');
      self.updatePreview($element);
      self.replaceButtonClass($element);
    });
    this.setup();
    jQuery(document).on('onRepeaterNewRow', function () {
      self.setup();
    });
  }
};

/***/ }),

/***/ "../modules/assets-manager/assets/js/admin/font-awesome-pro.js":
/*!*********************************************************************!*\
  !*** ../modules/assets-manager/assets/js/admin/font-awesome-pro.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class _default extends elementorModules.ViewModule {
  getDefaultSettings() {
    return {
      selectors: {
        button: '#elementor_pro_fa_pro_validate_button',
        kitIdField: '#elementor_font_awesome_pro_kit_id'
      }
    };
  }
  getDefaultElements() {
    const elements = {};
    const selectors = this.getSettings('selectors');
    jQuery.each(selectors, (element, selector) => {
      elements['$' + element] = jQuery(selector);
    });
    return elements;
  }
  bindEvents() {
    const {
      $button,
      $kitIdField
    } = this.elements;
    $button.on('click', event => {
      event.preventDefault();
      this.testKitUrl();
    });
    $kitIdField.on('change', () => {
      this.setState('clear');
    });
  }
  setState(type) {
    const classes = ['loading', 'success', 'error'],
      {
        $button
      } = this.elements;
    let currentClass, classIndex;
    for (classIndex in classes) {
      currentClass = classes[classIndex];
      if (type === currentClass) {
        $button.addClass(currentClass);
      } else {
        $button.removeClass(currentClass);
      }
    }
  }
  testKitUrl() {
    this.setState('loading');
    const self = this,
      kitID = this.elements.$kitIdField.val();
    if ('' === kitID) {
      this.setState('clear');
      return;
    }
    jQuery.ajax({
      url: 'https://kit.fontawesome.com/' + kitID + '.js',
      method: 'GET',
      complete: xhr => {
        if (200 !== xhr.status) {
          self.setState('error');
        } else {
          self.setState('success');
        }
      }
    });
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/assets-manager/assets/js/admin/typekit.js":
/*!************************************************************!*\
  !*** ../modules/assets-manager/assets/js/admin/typekit.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function () {
  var self = this;
  self.cacheElements = function () {
    this.cache = {
      $button: jQuery('#elementor_pro_typekit_validate_button'),
      $kitIdField: jQuery('#elementor_typekit-kit-id'),
      $dataLabelSpan: jQuery('.elementor-pro-typekit-data')
    };
  };
  self.bindEvents = function () {
    this.cache.$button.on('click', function (event) {
      event.preventDefault();
      self.fetchFonts();
    });
    this.cache.$kitIdField.on('change', function () {
      self.setState('clear');
    });
  };
  self.fetchFonts = function () {
    this.setState('loading');
    this.cache.$dataLabelSpan.addClass('hidden');
    var kitID = this.cache.$kitIdField.val();
    if ('' === kitID) {
      this.setState('clear');
      return;
    }
    jQuery.post(ajaxurl, {
      action: 'elementor_pro_admin_fetch_fonts',
      kit_id: kitID,
      _nonce: self.cache.$button.data('nonce')
    }).done(function (data) {
      if (data.success) {
        var template = self.cache.$button.data('found');
        template = template.replace('{{count}}', data.data.count);
        self.cache.$dataLabelSpan.html(template).removeClass('hidden');
        self.setState('success');
      } else {
        self.setState('error');
      }
    }).fail(function () {
      self.setState();
    });
  };
  self.setState = function (type) {
    var classes = ['loading', 'success', 'error'],
      currentClass,
      classIndex;
    for (classIndex in classes) {
      currentClass = classes[classIndex];
      if (type === currentClass) {
        this.cache.$button.addClass(currentClass);
      } else {
        this.cache.$button.removeClass(currentClass);
      }
    }
  };
  self.init = function () {
    this.cacheElements();
    this.bindEvents();
  };
  self.init();
};

/***/ }),

/***/ "../modules/forms/assets/js/admin.js":
/*!*******************************************!*\
  !*** ../modules/forms/assets/js/admin.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = function () {
  var ApiValidations = __webpack_require__(/*! ./admin/api-validations */ "../modules/forms/assets/js/admin/api-validations.js");
  this.dripButton = new ApiValidations('drip_api_token');
  this.getResponse = new ApiValidations('getresponse_api_key');
  this.convertKit = new ApiValidations('convertkit_api_key');
  this.mailChimp = new ApiValidations('mailchimp_api_key');
  this.mailerLite = new ApiValidations('mailerlite_api_key');
  this.activeCcampaign = new ApiValidations('activecampaign_api_key', 'activecampaign_api_url');
  jQuery('.e-notice--cta.e-notice--dismissible[data-notice_id="site_mailer_forms_submissions_notice"] a.e-button--cta').on('click', function () {
    elementorCommon.ajax.addRequest('elementor_site_mailer_campaign', {
      data: {
        source: 'sm-submission-install'
      }
    });
  });
};

/***/ }),

/***/ "../modules/forms/assets/js/admin/api-validations.js":
/*!***********************************************************!*\
  !*** ../modules/forms/assets/js/admin/api-validations.js ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (key, fieldID) {
  var self = this;
  self.cacheElements = function () {
    this.cache = {
      $button: jQuery('#elementor_pro_' + key + '_button'),
      $apiKeyField: jQuery('#elementor_pro_' + key),
      $apiUrlField: jQuery('#elementor_pro_' + fieldID)
    };
  };
  self.bindEvents = function () {
    this.cache.$button.on('click', function (event) {
      event.preventDefault();
      self.validateApi();
    });
    this.cache.$apiKeyField.on('change', function () {
      self.setState('clear');
    });
  };
  self.validateApi = function () {
    this.setState('loading');
    var apiKey = this.cache.$apiKeyField.val();
    if ('' === apiKey) {
      this.setState('clear');
      return;
    }
    if (this.cache.$apiUrlField.length && '' === this.cache.$apiUrlField.val()) {
      this.setState('clear');
      return;
    }
    jQuery.post(ajaxurl, {
      action: self.cache.$button.data('action'),
      api_key: apiKey,
      api_url: this.cache.$apiUrlField.val(),
      _nonce: self.cache.$button.data('nonce')
    }).done(function (data) {
      if (data.success) {
        self.setState('success');
      } else {
        self.setState('error');
      }
    }).fail(function () {
      self.setState();
    });
  };
  self.setState = function (type) {
    var classes = ['loading', 'success', 'error'],
      currentClass,
      classIndex;
    for (classIndex in classes) {
      currentClass = classes[classIndex];
      if (type === currentClass) {
        this.cache.$button.addClass(currentClass);
      } else {
        this.cache.$button.removeClass(currentClass);
      }
    }
  };
  self.init = function () {
    this.cacheElements();
    this.bindEvents();
  };
  self.init();
};

/***/ }),

/***/ "../modules/library/assets/js/admin.js":
/*!*********************************************!*\
  !*** ../modules/library/assets/js/admin.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = function () {
  var EditButton = __webpack_require__(/*! ./admin/edit-button */ "../modules/library/assets/js/admin/edit-button.js");
  this.editButton = new EditButton();
};

/***/ }),

/***/ "../modules/library/assets/js/admin/edit-button.js":
/*!*********************************************************!*\
  !*** ../modules/library/assets/js/admin/edit-button.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function () {
  var self = this;
  self.init = function () {
    jQuery(document).on('change', '.elementor-widget-template-select', function () {
      var $this = jQuery(this),
        templateID = $this.val(),
        $editButton = $this.parents('p').find('.elementor-edit-template'),
        type = $this.find('[value="' + templateID + '"]').data('type');
      if ('page' !== type) {
        // 'widget' is editable only from Elementor page
        $editButton.hide();
        return;
      }
      var editUrl = elementorAdmin.config.home_url + '?p=' + templateID + '&elementor';
      $editButton.prop('href', editUrl).show();
    });
  };
  self.init();
};

/***/ }),

/***/ "../modules/payments/assets/js/admin.js":
/*!**********************************************!*\
  !*** ../modules/payments/assets/js/admin.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = function () {
  const ApiValidations = __webpack_require__(/*! ./admin/api-validations */ "../modules/payments/assets/js/admin/api-validations.js");
  this.stripeTestSecretKey = new ApiValidations('stripe_test_secret_key');
  this.stripeLiveSecretKey = new ApiValidations('stripe_live_secret_key');
};

/***/ }),

/***/ "../modules/payments/assets/js/admin/api-validations.js":
/*!**************************************************************!*\
  !*** ../modules/payments/assets/js/admin/api-validations.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (key) {
  var self = this;
  self.cacheElements = function () {
    this.cache = {
      $button: jQuery('#elementor_pro_' + key + '_button'),
      $apiKeyField: jQuery('#elementor_pro_' + key)
    };
  };
  self.bindEvents = function () {
    this.cache.$button.on('click', function (event) {
      event.preventDefault();
      self.validateApi();
    });
    this.cache.$apiKeyField.on('change', function () {
      self.setState('clear');
    });
  };
  self.validateApi = function () {
    this.setState('loading');
    var apiKey = this.cache.$apiKeyField.val();
    if ('' === apiKey) {
      this.setState('clear');
      return;
    }
    jQuery.post(ajaxurl, {
      action: self.cache.$button.data('action'),
      secret_key: apiKey,
      _nonce: self.cache.$button.data('nonce')
    }).done(function (data) {
      if (data.success) {
        self.setState('success');
      } else {
        self.setState('error');
      }
    }).fail(function () {
      self.setState();
    });
  };
  self.setState = function (type) {
    var classes = ['loading', 'success', 'error'],
      currentClass,
      classIndex;
    for (classIndex in classes) {
      currentClass = classes[classIndex];
      if (type === currentClass) {
        this.cache.$button.addClass(currentClass);
      } else {
        this.cache.$button.removeClass(currentClass);
      }
    }
  };
  self.init = function () {
    this.cacheElements();
    this.bindEvents();
  };
  self.init();
};

/***/ }),

/***/ "../modules/popup/assets/js/admin/admin.js":
/*!*************************************************!*\
  !*** ../modules/popup/assets/js/admin/admin.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class _default extends elementorModules.Module {
  constructor() {
    super();
    if (!elementorModules.admin?.MenuHandler) {
      return;
    }
    new elementorModules.admin.MenuHandler({
      path: 'edit.php?post_type=elementor_library&tabs_group=popup&elementor_library_type=popup'
    });
  }
}
exports["default"] = _default;

/***/ }),

/***/ "../modules/role-manager/assets/js/admin.js":
/*!**************************************************!*\
  !*** ../modules/role-manager/assets/js/admin.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = function () {
  var AdvancedRoleManager = __webpack_require__(/*! ./admin/role-mananger */ "../modules/role-manager/assets/js/admin/role-mananger.js");
  this.advancedRoleManager = new AdvancedRoleManager();
};

/***/ }),

/***/ "../modules/role-manager/assets/js/admin/role-mananger.js":
/*!****************************************************************!*\
  !*** ../modules/role-manager/assets/js/admin/role-mananger.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function () {
  var self = this;
  self.cacheElements = function () {
    this.cache = {
      $checkBox: jQuery('input[name="elementor_exclude_user_roles[]"]'),
      $advanced: jQuery('#elementor_advanced_role_manager')
    };
  };
  self.bindEvents = function () {
    this.cache.$checkBox.on('change', function (event) {
      event.preventDefault();
      self.checkBoxUpdate(jQuery(this));
    });
  };
  self.checkBoxUpdate = function ($element) {
    var role = $element.val();
    if ($element.is(':checked')) {
      self.cache.$advanced.find('div.' + role).addClass('hidden');
    } else {
      self.cache.$advanced.find('div.' + role).removeClass('hidden');
    }
  };
  self.init = function () {
    if (!jQuery('body').hasClass('elementor_page_elementor-role-manager')) {
      return;
    }
    this.cacheElements();
    this.bindEvents();
  };
  self.init();
};

/***/ }),

/***/ "../modules/theme-builder/assets/js/admin/admin.js":
/*!*********************************************************!*\
  !*** ../modules/theme-builder/assets/js/admin/admin.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = function () {
  var CreateTemplateDialog = __webpack_require__(/*! ./create-template-dialog */ "../modules/theme-builder/assets/js/admin/create-template-dialog.js");
  this.createTemplateDialog = new CreateTemplateDialog();
};

/***/ }),

/***/ "../modules/theme-builder/assets/js/admin/create-template-dialog.js":
/*!**************************************************************************!*\
  !*** ../modules/theme-builder/assets/js/admin/create-template-dialog.js ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function () {
  var selectors = {
    templateTypeInput: '#elementor-new-template__form__template-type',
    locationWrapper: '#elementor-new-template__form__location__wrapper',
    postTypeWrapper: '#elementor-new-template__form__post-type__wrapper'
  };
  var elements = {
    $templateTypeInput: null,
    $locationWrapper: null,
    $postTypeWrapper: null
  };
  var setElements = function () {
    jQuery.each(selectors, function (key, selector) {
      key = '$' + key;
      elements[key] = elementorNewTemplate.layout.getModal().getElements('content').find(selector);
    });
  };
  var setLocationFieldVisibility = function () {
    elements.$locationWrapper.toggle('section' === elements.$templateTypeInput.val());
    elements.$postTypeWrapper.toggle('single' === elements.$templateTypeInput.val());
  };
  const setPostType = () => {
    const postTypeMap = {
      'error-404': 'not_found404'
    };
    const postType = postTypeMap[elements.$templateTypeInput.val()] || '';
    elements.$postTypeWrapper.find('select').val(postType);
  };
  var run = function () {
    setElements();
    setLocationFieldVisibility();
    elements.$templateTypeInput.on('change', () => {
      setLocationFieldVisibility();
      setPostType();
    });
  };
  this.init = function () {
    if (!window.elementorNewTemplate) {
      return;
    }

    // Make sure the modal has already been initialized
    elementorNewTemplate.layout.getModal();
    run();
  };
  jQuery(setTimeout.bind(window, this.init));
};

/***/ }),

/***/ "@wordpress/i18n":
/*!**************************!*\
  !*** external "wp.i18n" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = wp.i18n;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \***********************************************************************/
/***/ ((module) => {

function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************************!*\
  !*** ../assets/dev/js/admin/admin.js ***!
  \***************************************/


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _admin = _interopRequireDefault(__webpack_require__(/*! modules/popup/assets/js/admin/admin */ "../modules/popup/assets/js/admin/admin.js"));
var _admin2 = _interopRequireDefault(__webpack_require__(/*! ../../../../license/assets/js/admin */ "../license/assets/js/admin.js"));
const modules = {
  widget_template_edit_button: __webpack_require__(/*! modules/library/assets/js/admin */ "../modules/library/assets/js/admin.js"),
  forms_integrations: __webpack_require__(/*! modules/forms/assets/js/admin */ "../modules/forms/assets/js/admin.js"),
  AssetsManager: __webpack_require__(/*! modules/assets-manager/assets/js/admin */ "../modules/assets-manager/assets/js/admin.js"),
  RoleManager: __webpack_require__(/*! modules/role-manager/assets/js/admin */ "../modules/role-manager/assets/js/admin.js"),
  ThemeBuilder: __webpack_require__(/*! modules/theme-builder/assets/js/admin/admin */ "../modules/theme-builder/assets/js/admin/admin.js"),
  StripeIntegration: __webpack_require__(/*! modules/payments/assets/js/admin */ "../modules/payments/assets/js/admin.js"),
  License: _admin2.default
};
window.elementorProAdmin = {
  widget_template_edit_button: new modules.widget_template_edit_button(),
  forms_integrations: new modules.forms_integrations(),
  assetsManager: new modules.AssetsManager(),
  roleManager: new modules.RoleManager(),
  themeBuilder: new modules.ThemeBuilder(),
  StripeIntegration: new modules.StripeIntegration(),
  popup: new _admin.default(),
  license: new modules.License()
};
jQuery(function () {
  elementorProAdmin.roleManager.advancedRoleManager.init();
});
})();

/******/ })()
;
//# sourceMappingURL=admin.js.map
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./packages/packages/pro/editor-collection-loop/src/api/loop-preview-api.ts":
/*!**********************************************************************************!*\
  !*** ./packages/packages/pro/editor-collection-loop/src/api/loop-preview-api.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchLoopPreview: function() { return /* binding */ fetchLoopPreview; }
/* harmony export */ });
/* harmony import */ var _elementor_http_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/http-client */ "@elementor/http-client");
/* harmony import */ var _elementor_http_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_http_client__WEBPACK_IMPORTED_MODULE_0__);

const LOOP_PREVIEW_URL = 'elementor-pro/v1/collection-loop/loop-preview';
async function fetchLoopPreview(query, context = {}) {
  const response = await (0,_elementor_http_client__WEBPACK_IMPORTED_MODULE_0__.httpService)().post(LOOP_PREVIEW_URL, {
    query,
    document_id: context.documentId,
    element_id: context.elementId
  });
  const data = response.data?.data;
  if (!data) {
    return {
      args: {},
      query_id: '',
      has_items: false,
      items: []
    };
  }
  return data;
}

/***/ }),

/***/ "./packages/packages/pro/editor-collection-loop/src/collection-loop-license-block.ts":
/*!*******************************************************************************************!*\
  !*** ./packages/packages/pro/editor-collection-loop/src/collection-loop-license-block.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initCollectionLoopLicenseBlock: function() { return /* binding */ initCollectionLoopLicenseBlock; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-v1-adapters */ "@elementor/editor-v1-adapters");
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_license_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/license-api */ "@elementor/license-api");
/* harmony import */ var _elementor_license_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_license_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _legacy_loop_static_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./legacy/loop-static-items */ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-static-items.ts");



const MOVE_COMMAND = 'document/elements/move';
async function initCollectionLoopLicenseBlock() {
  const isExpired = await (0,_elementor_license_api__WEBPACK_IMPORTED_MODULE_1__.fetchLicenseStatus)().catch(() => false);
  if (!isExpired) {
    return;
  }
  (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__.registerDataHook)('dependency', 'document/elements/create', (args, options) => {
    const isTriggeredByMove = options?.commandsCurrentTrace?.includes(MOVE_COMMAND);
    if (isTriggeredByMove) {
      return true;
    }
    return args.model?.elType !== _legacy_loop_static_items__WEBPACK_IMPORTED_MODULE_2__.COLLECTION_LOOP_TYPE;
  });
}

/***/ }),

/***/ "./packages/packages/pro/editor-collection-loop/src/components/loop-edit-overlay/feature-guarded-loop-edit-overlay.tsx":
/*!*****************************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-collection-loop/src/components/loop-edit-overlay/feature-guarded-loop-edit-overlay.tsx ***!
  \*****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatureGuardedLoopEditOverlay: function() { return /* binding */ FeatureGuardedLoopEditOverlay; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_license_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/license-api */ "@elementor/license-api");
/* harmony import */ var _elementor_license_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_license_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./packages/packages/pro/editor-collection-loop/src/constants.ts");
/* harmony import */ var _loop_edit_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loop-edit-overlay */ "./packages/packages/pro/editor-collection-loop/src/components/loop-edit-overlay/loop-edit-overlay.tsx");




function FeatureGuardedLoopEditOverlay() {
  const {
    data: isFeatureEnabled,
    isFetched
  } = (0,_elementor_license_api__WEBPACK_IMPORTED_MODULE_1__.useHasFeature)(_constants__WEBPACK_IMPORTED_MODULE_2__.COLLECTION_LOOP_FEATURE_NAME);
  if (!isFetched || !isFeatureEnabled) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_loop_edit_overlay__WEBPACK_IMPORTED_MODULE_3__.LoopEditOverlay, null);
}

/***/ }),

/***/ "./packages/packages/pro/editor-collection-loop/src/components/loop-edit-overlay/loop-edit-overlay.tsx":
/*!*************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-collection-loop/src/components/loop-edit-overlay/loop-edit-overlay.tsx ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoopEditOverlay: function() { return /* binding */ LoopEditOverlay; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/editor-canvas */ "@elementor/editor-canvas");
/* harmony import */ var _elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elementor/editor-elements */ "@elementor/editor-elements");
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elementor/editor-v1-adapters */ "@elementor/editor-v1-adapters");
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _legacy_loop_edit_mode_exit_loop_edit_mode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../legacy/loop-edit-mode/exit-loop-edit-mode */ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-edit-mode/exit-loop-edit-mode.ts");
/* harmony import */ var _legacy_loop_edit_mode_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../legacy/loop-edit-mode/state */ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-edit-mode/state.ts");
/* harmony import */ var _legacy_loop_static_items__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../legacy/loop-static-items */ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-static-items.ts");










function LoopEditOverlay() {
  const editState = (0,_legacy_loop_edit_mode_state__WEBPACK_IMPORTED_MODULE_7__.useLoopEditState)();
  const canvasDocument = (0,_elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_2__.useCanvasDocument)();
  const activeElement = useActiveItemElement(editState?.activeItemId ?? null);
  const onExit = () => (0,_legacy_loop_edit_mode_exit_loop_edit_mode__WEBPACK_IMPORTED_MODULE_6__.exitLoopEditMode)();
  (0,_elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_2__.useEscapeOnCanvas)(editState ? canvasDocument : null, onExit);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_4__.__privateListenTo)((0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_4__.windowEvent)(_legacy_loop_edit_mode_state__WEBPACK_IMPORTED_MODULE_7__.LOOP_EDIT_MODE_REQUEST_ENTER_EVENT), ({
      originalEvent
    }) => {
      const {
        detail
      } = originalEvent;
      const {
        loopId,
        activeItemId
      } = detail ?? {};
      if (loopId && activeItemId) {
        (0,_legacy_loop_edit_mode_state__WEBPACK_IMPORTED_MODULE_7__.setLoopEditingId)(loopId, activeItemId);
      }
    });
  }, []);
  if (!editState || !activeElement || !canvasDocument?.body) {
    return null;
  }
  return /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_2__.SpotlightBackdrop, {
    canvas: canvasDocument,
    element: activeElement,
    onExit: onExit,
    ariaLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Exit loop editing mode', 'elementor-pro')
  }), canvasDocument.body);
}
function useActiveItemElement(activeItemId) {
  const [element, setElement] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!activeItemId) {
      setElement(null);
      return;
    }
    const updateElement = () => {
      const visibleElement = (0,_legacy_loop_static_items__WEBPACK_IMPORTED_MODULE_8__.resolveVisibleLoopItemElement)(activeItemId);
      if (visibleElement) {
        setElement(visibleElement);
        return;
      }
      setElement((0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_3__.getContainer)(activeItemId)?.view?.el ?? null);
    };
    updateElement();
    const unsubscribers = [(0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_4__.__privateListenTo)((0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_4__.windowEvent)(_legacy_loop_edit_mode_state__WEBPACK_IMPORTED_MODULE_7__.LOOP_EDIT_MODE_CHANGED_EVENT), updateElement), (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_4__.__privateListenTo)((0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_4__.windowEvent)(_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_3__.ELEMENT_STYLE_CHANGE_EVENT), updateElement), (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_4__.__privateListenTo)((0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_4__.commandEndEvent)('editor/documents/open'), updateElement)];
    return () => {
      unsubscribers.forEach(unsubscribe => unsubscribe());
    };
  }, [activeItemId]);
  return element;
}

/***/ }),

/***/ "./packages/packages/pro/editor-collection-loop/src/components/loop-item-editing-panel.tsx":
/*!*************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-collection-loop/src/components/loop-item-editing-panel.tsx ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollectionLoopItemEditingPanel: function() { return /* binding */ CollectionLoopItemEditingPanel; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-editing-panel */ "@elementor/editor-editing-panel");
/* harmony import */ var _elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_editor_panels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/editor-panels */ "@elementor/editor-panels");
/* harmony import */ var _elementor_editor_panels__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_panels__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elementor/icons */ "@elementor/icons");
/* harmony import */ var _elementor_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elementor_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elementor_ui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _legacy_loop_edit_mode_enter_loop_item_edit_mode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../legacy/loop-edit-mode/enter-loop-item-edit-mode */ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-edit-mode/enter-loop-item-edit-mode.ts");
/* harmony import */ var _legacy_loop_edit_mode_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../legacy/loop-edit-mode/state */ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-edit-mode/state.ts");








function CollectionLoopItemEditingPanel() {
  const {
    element,
    elementType
  } = (0,_elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_1__.useElement)();
  const editState = (0,_legacy_loop_edit_mode_state__WEBPACK_IMPORTED_MODULE_7__.useLoopEditState)();
  const isEditingThisItem = editState?.activeItemId === element.id;
  if (isEditingThisItem) {
    /* translators: %s: Item title. */
    const panelTitle = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Edit %s', 'elementor-pro').replace('%s', elementType.title);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_panels__WEBPACK_IMPORTED_MODULE_2__.PanelHeader, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_panels__WEBPACK_IMPORTED_MODULE_2__.PanelHeaderTitle, null, panelTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_icons__WEBPACK_IMPORTED_MODULE_3__.AtomIcon, {
      fontSize: "small",
      sx: {
        color: 'text.tertiary'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_panels__WEBPACK_IMPORTED_MODULE_2__.PanelBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_1__.EditingPanelTabs, null)));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CollectionLoopItemEmptyPanel, {
    elementId: element.id
  });
}
function CollectionLoopItemEmptyPanel({
  elementId
}) {
  const handleEdit = () => (0,_legacy_loop_edit_mode_enter_loop_item_edit_mode__WEBPACK_IMPORTED_MODULE_6__.enterLoopItemEditMode)(elementId);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_4__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_panels__WEBPACK_IMPORTED_MODULE_2__.PanelHeader, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_panels__WEBPACK_IMPORTED_MODULE_2__.PanelHeaderTitle, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Loop Item', 'elementor-pro'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_panels__WEBPACK_IMPORTED_MODULE_2__.PanelBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, {
    alignItems: "center",
    justifyContent: "start",
    color: "text.secondary",
    sx: {
      p: 2.5,
      pt: 8,
      pb: 5.5,
      mt: 1
    },
    gap: 1.5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_4__.Typography, {
    align: "center",
    variant: "subtitle2"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Edit your loop item', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_4__.Typography, {
    align: "center",
    variant: "caption",
    maxWidth: "220px"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Double-click the loop item on your canvas or click the button below to enter Edit mode.', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
    variant: "outlined",
    color: "secondary",
    size: "small",
    sx: {
      mt: 1
    },
    onClick: handleEdit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_icons__WEBPACK_IMPORTED_MODULE_3__.PencilIcon, {
    fontSize: "small"
  }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Edit loop item', 'elementor-pro')))));
}

/***/ }),

/***/ "./packages/packages/pro/editor-collection-loop/src/components/loop-layout-info-alert.tsx":
/*!************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-collection-loop/src/components/loop-layout-info-alert.tsx ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoopLayoutInfoAlert: function() { return /* binding */ LoopLayoutInfoAlert; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-editing-panel */ "@elementor/editor-editing-panel");
/* harmony import */ var _elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/editor-elements */ "@elementor/editor-elements");
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elementor_session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elementor/session */ "@elementor/session");
/* harmony import */ var _elementor_session__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elementor_session__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elementor_ui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./packages/packages/pro/editor-collection-loop/src/constants.ts");







const DISMISSED_KEY = 'elementor/collection-loop-layout-info-dismissed';
const ELEMENT_STATE_PREFIX = 'elementor/editor-state';
const TAB_KEY = 'tab';
const STYLE_TAB_VALUE = 'style';
function LoopLayoutInfoAlert() {
  const [dismissed, setDismissed] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => localStorage.getItem(DISMISSED_KEY) === 'true');
  const {
    element
  } = (0,_elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_1__.useElement)();
  if (element.type !== _constants__WEBPACK_IMPORTED_MODULE_6__.COLLECTION_LOOP_TYPE) {
    return null;
  }
  if (dismissed) {
    return null;
  }
  const handleNavigateToLayout = event => {
    event.preventDefault();
    const layoutId = findLoopLayoutChildId(element.id);
    if (!layoutId) {
      return;
    }
    (0,_elementor_session__WEBPACK_IMPORTED_MODULE_3__.setSessionStorageItem)(`${ELEMENT_STATE_PREFIX}/${layoutId}/${TAB_KEY}`, STYLE_TAB_VALUE);
    (0,_elementor_session__WEBPACK_IMPORTED_MODULE_3__.setSessionStorageItem)(`${ELEMENT_STATE_PREFIX}/${layoutId}/${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Layout', 'elementor-pro')}`, true);
    (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_2__.selectElement)(layoutId);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_4__.Alert, {
    severity: "info",
    icon: false,
    onClose: () => {
      localStorage.setItem(DISMISSED_KEY, 'true');
      setDismissed(true);
    },
    sx: {
      my: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_4__.AlertTitle, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Loop Layout', 'elementor-pro')), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('To control the layout of the items use the Style Panel of the "Loop Layout".', 'elementor-pro'), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_4__.Link, {
    href: "#",
    underline: "hover",
    onClick: handleNavigateToLayout
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Layout Style Panel', 'elementor-pro')));
}
function findLoopLayoutChildId(loopListId) {
  const container = (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_2__.getContainer)(loopListId);
  const layoutChild = container?.children?.find(child => child.model.get('elType') === _constants__WEBPACK_IMPORTED_MODULE_6__.LAYOUT_TYPE);
  return layoutChild?.id ?? null;
}

/***/ }),

/***/ "./packages/packages/pro/editor-collection-loop/src/components/loop-query-control.tsx":
/*!********************************************************************************************!*\
  !*** ./packages/packages/pro/editor-collection-loop/src/components/loop-query-control.tsx ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoopQueryControl: function() { return /* binding */ LoopQueryControl; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-controls */ "@elementor/editor-controls");
/* harmony import */ var _elementor_editor_controls__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_controls__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/editor-editing-panel */ "@elementor/editor-editing-panel");
/* harmony import */ var _elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elementor_editor_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elementor/editor-props */ "@elementor/editor-props");
/* harmony import */ var _elementor_editor_props__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_props__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
/* harmony import */ var _elementor_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elementor_ui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _prop_types_loop_query_prop_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../prop-types/loop-query-prop-type */ "./packages/packages/pro/editor-collection-loop/src/prop-types/loop-query-prop-type.ts");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }






const LoopQueryControl = (0,_elementor_editor_controls__WEBPACK_IMPORTED_MODULE_1__.createControl)(({
  items
}) => {
  const propContext = (0,_elementor_editor_controls__WEBPACK_IMPORTED_MODULE_1__.useBoundProp)(_prop_types_loop_query_prop_type__WEBPACK_IMPORTED_MODULE_5__.loopQueryPropTypeUtil);
  const {
    propType
  } = propContext;
  const shape = propType?.shape ?? {};
  const {
    elementType,
    settings: elementSettings
  } = (0,_elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_2__.useElement)();
  const elementSettingsWithDefaults = (0,_elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_2__.getElementSettingsWithDefaults)(elementType.propsSchema, elementSettings);
  const scopedIsDisabled = innerPropType => !(0,_elementor_editor_props__WEBPACK_IMPORTED_MODULE_3__.isDependencyMet)(innerPropType?.dependencies, elementSettingsWithDefaults).isMet;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_controls__WEBPACK_IMPORTED_MODULE_1__.PropProvider, _extends({}, propContext, {
    isDisabled: scopedIsDisabled
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, {
    gap: 2,
    sx: {
      width: '100%'
    }
  }, items.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LoopQueryChildControl, {
    key: item.bind,
    item: item,
    shape: shape,
    elementSettingsWithDefaults: elementSettingsWithDefaults
  }))));
});
const LoopQueryChildControl = ({
  item,
  shape,
  elementSettingsWithDefaults
}) => {
  const propType = shape[item.bind];
  const depCheck = (0,_elementor_editor_props__WEBPACK_IMPORTED_MODULE_3__.isDependencyMet)(propType?.dependencies, elementSettingsWithDefaults);
  const failingTerm = !depCheck.isMet ? depCheck.failingDependencies[0] : undefined;
  const isHidden = !!failingTerm && !(0,_elementor_editor_props__WEBPACK_IMPORTED_MODULE_3__.isDependency)(failingTerm) && failingTerm?.effect === 'hide';
  if (isHidden) {
    return null;
  }
  const controlType = item.type;
  if (!_elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_2__.controlsRegistry.get(controlType)) {
    return null;
  }
  const layout = item.meta?.layout || _elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_2__.controlsRegistry.getLayout(controlType);
  const controlProps = {
    ...(item.props ?? {})
  };
  if (layout === 'custom' && item.label) {
    controlProps.label = item.label;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_controls__WEBPACK_IMPORTED_MODULE_1__.PropKeyProvider, {
    bind: item.bind
  }, item.meta?.topDivider && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_4__.Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_ui__WEBPACK_IMPORTED_MODULE_4__.Box, {
    "data-loop-query-control": item.bind,
    sx: {
      display: 'contents'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_2__.ControlTypeContainer, {
    layout: layout
  }, item.label && layout !== 'custom' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_2__.ControlLabel, null, item.label) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    type: controlType,
    props: controlProps
  }))));
};

/***/ }),

/***/ "./packages/packages/pro/editor-collection-loop/src/constants.ts":
/*!***********************************************************************!*\
  !*** ./packages/packages/pro/editor-collection-loop/src/constants.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COLLECTION_LOOP_FEATURE_NAME: function() { return /* binding */ COLLECTION_LOOP_FEATURE_NAME; },
/* harmony export */   COLLECTION_LOOP_TYPE: function() { return /* binding */ COLLECTION_LOOP_TYPE; },
/* harmony export */   ITEM_TYPE: function() { return /* binding */ ITEM_TYPE; },
/* harmony export */   LAYOUT_TYPE: function() { return /* binding */ LAYOUT_TYPE; },
/* harmony export */   LOOP_CONTEXT_KEY: function() { return /* binding */ LOOP_CONTEXT_KEY; }
/* harmony export */ });
const COLLECTION_LOOP_TYPE = 'e-collection-loop';
const LAYOUT_TYPE = 'e-collection-loop-layout';
const ITEM_TYPE = 'e-collection-loop-item';
const LOOP_CONTEXT_KEY = 'collection-loop';
const COLLECTION_LOOP_FEATURE_NAME = 'atomic-loop';

/***/ }),

/***/ "./packages/packages/pro/editor-collection-loop/src/init.ts":
/*!******************************************************************!*\
  !*** ./packages/packages/pro/editor-collection-loop/src/init.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: function() { return /* binding */ init; }
/* harmony export */ });
/* harmony import */ var _elementor_core_adapter_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/core-adapter-utils */ "@elementor/core-adapter-utils");
/* harmony import */ var _elementor_core_adapter_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_core_adapter_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor */ "@elementor/editor");
/* harmony import */ var _elementor_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/editor-canvas */ "@elementor/editor-canvas");
/* harmony import */ var _elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elementor/editor-editing-panel */ "@elementor/editor-editing-panel");
/* harmony import */ var _elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elementor_license_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elementor/license-api */ "@elementor/license-api");
/* harmony import */ var _elementor_license_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elementor_license_api__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _collection_loop_license_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./collection-loop-license-block */ "./packages/packages/pro/editor-collection-loop/src/collection-loop-license-block.ts");
/* harmony import */ var _components_loop_edit_overlay_feature_guarded_loop_edit_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/loop-edit-overlay/feature-guarded-loop-edit-overlay */ "./packages/packages/pro/editor-collection-loop/src/components/loop-edit-overlay/feature-guarded-loop-edit-overlay.tsx");
/* harmony import */ var _components_loop_item_editing_panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/loop-item-editing-panel */ "./packages/packages/pro/editor-collection-loop/src/components/loop-item-editing-panel.tsx");
/* harmony import */ var _components_loop_layout_info_alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/loop-layout-info-alert */ "./packages/packages/pro/editor-collection-loop/src/components/loop-layout-info-alert.tsx");
/* harmony import */ var _components_loop_query_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/loop-query-control */ "./packages/packages/pro/editor-collection-loop/src/components/loop-query-control.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants */ "./packages/packages/pro/editor-collection-loop/src/constants.ts");
/* harmony import */ var _legacy_collection_loop_item_type__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./legacy/collection-loop-item-type */ "./packages/packages/pro/editor-collection-loop/src/legacy/collection-loop-item-type.ts");
/* harmony import */ var _legacy_collection_loop_layout_type__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./legacy/collection-loop-layout-type */ "./packages/packages/pro/editor-collection-loop/src/legacy/collection-loop-layout-type.ts");
/* harmony import */ var _legacy_collection_loop_type__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./legacy/collection-loop-type */ "./packages/packages/pro/editor-collection-loop/src/legacy/collection-loop-type.ts");
/* harmony import */ var _legacy_init_pagination_sync__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./legacy/init-pagination-sync */ "./packages/packages/pro/editor-collection-loop/src/legacy/init-pagination-sync.ts");
/* harmony import */ var _legacy_loop_edit_mode_handle_loop_item_drop_redirect__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./legacy/loop-edit-mode/handle-loop-item-drop-redirect */ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-edit-mode/handle-loop-item-drop-redirect.ts");
/* harmony import */ var _legacy_loop_edit_mode_selection_sync__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./legacy/loop-edit-mode/selection-sync */ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-edit-mode/selection-sync.ts");
/* harmony import */ var _legacy_loop_item_context_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./legacy/loop-item-context-menu */ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-item-context-menu.ts");
/* harmony import */ var _legacy_loop_item_create_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./legacy/loop-item-create-guard */ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-item-create-guard.ts");
/* harmony import */ var _legacy_loop_item_empty_view_import_into_container__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./legacy/loop-item-empty-view/import-into-container */ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-item-empty-view/import-into-container.ts");
/* harmony import */ var _legacy_loop_navigator_children__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./legacy/loop-navigator-children */ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-navigator-children.ts");
/* harmony import */ var _legacy_track_pagination_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./legacy/track-pagination-toggle */ "./packages/packages/pro/editor-collection-loop/src/legacy/track-pagination-toggle.ts");
/* harmony import */ var _prop_types_loop_query_prop_type__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./prop-types/loop-query-prop-type */ "./packages/packages/pro/editor-collection-loop/src/prop-types/loop-query-prop-type.ts");
/* harmony import */ var _transformers_loop_query_transformer__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./transformers/loop-query-transformer */ "./packages/packages/pro/editor-collection-loop/src/transformers/loop-query-transformer.ts");
























const LOOP_QUERY_CONTROL_TYPE = 'loop-query';
async function init() {
  // BC check, can be removed at 4.4.0 version
  if (!(0,_elementor_core_adapter_utils__WEBPACK_IMPORTED_MODULE_0__.isCoreAtLeast)('4.2.0')) {
    return;
  }
  initCollectionLoopLocations();
  const features = await (0,_elementor_license_api__WEBPACK_IMPORTED_MODULE_4__.fetchTierFeatures)().catch(() => []);
  if (!features.includes(_constants__WEBPACK_IMPORTED_MODULE_10__.COLLECTION_LOOP_FEATURE_NAME)) {
    return;
  }
  initEditorCollectionLoop();
}
function initCollectionLoopLocations() {
  (0,_elementor_editor__WEBPACK_IMPORTED_MODULE_1__.injectIntoTop)({
    id: 'collection-loop-edit-overlay',
    component: _components_loop_edit_overlay_feature_guarded_loop_edit_overlay__WEBPACK_IMPORTED_MODULE_6__.FeatureGuardedLoopEditOverlay
  });
}
function initEditorCollectionLoop() {
  _elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_2__.settingsTransformersRegistry.register('loop-query', _transformers_loop_query_transformer__WEBPACK_IMPORTED_MODULE_23__.loopQueryTransformer);
  (0,_collection_loop_license_block__WEBPACK_IMPORTED_MODULE_5__.initCollectionLoopLicenseBlock)();
  _elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_3__.controlsRegistry.register(LOOP_QUERY_CONTROL_TYPE, _components_loop_query_control__WEBPACK_IMPORTED_MODULE_9__.LoopQueryControl, 'full', _prop_types_loop_query_prop_type__WEBPACK_IMPORTED_MODULE_22__.loopQueryPropTypeUtil);
  (0,_elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_3__.injectIntoGridFields)({
    id: 'collection-loop-layout-info',
    component: _components_loop_layout_info_alert__WEBPACK_IMPORTED_MODULE_8__.LoopLayoutInfoAlert
  });
  (0,_legacy_collection_loop_type__WEBPACK_IMPORTED_MODULE_13__.initCollectionLoopType)();
  (0,_legacy_collection_loop_layout_type__WEBPACK_IMPORTED_MODULE_12__.initCollectionLoopLayoutType)();
  (0,_legacy_collection_loop_item_type__WEBPACK_IMPORTED_MODULE_11__.initCollectionLoopItemType)();
  (0,_legacy_loop_item_empty_view_import_into_container__WEBPACK_IMPORTED_MODULE_19__.initImportIntoContainerHook)();
  (0,_legacy_loop_edit_mode_selection_sync__WEBPACK_IMPORTED_MODULE_16__.initLoopEditModeSelectionSync)();
  (0,_legacy_loop_edit_mode_handle_loop_item_drop_redirect__WEBPACK_IMPORTED_MODULE_15__.initHandleLoopItemDropRedirect)();
  (0,_legacy_loop_navigator_children__WEBPACK_IMPORTED_MODULE_20__.initLoopNavigatorChildren)();
  (0,_legacy_loop_item_context_menu__WEBPACK_IMPORTED_MODULE_17__.initLoopItemContextMenu)();
  (0,_legacy_loop_item_create_guard__WEBPACK_IMPORTED_MODULE_18__.initLoopItemCreateGuard)();
  (0,_legacy_init_pagination_sync__WEBPACK_IMPORTED_MODULE_14__.initPaginationSync)();
  (0,_legacy_track_pagination_toggle__WEBPACK_IMPORTED_MODULE_21__.initTrackPaginationToggle)();
  (0,_elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_3__.registerEditingPanelReplacement)({
    id: 'collection-loop-item-edit-panel',
    condition: (_, elementType) => elementType.key === _constants__WEBPACK_IMPORTED_MODULE_10__.ITEM_TYPE,
    component: _components_loop_item_editing_panel__WEBPACK_IMPORTED_MODULE_7__.CollectionLoopItemEditingPanel
  });
  (0,_elementor_editor_editing_panel__WEBPACK_IMPORTED_MODULE_3__.registerElementPanelDefaults)(_constants__WEBPACK_IMPORTED_MODULE_10__.COLLECTION_LOOP_TYPE, {
    defaultSectionsExpanded: {
      settings: ['query', 'settings'],
      style: []
    },
    defaultTab: 'settings'
  });
}

/***/ }),

/***/ "./packages/packages/pro/editor-collection-loop/src/legacy/collection-loop-item-type.ts":
/*!**********************************************************************************************!*\
  !*** ./packages/packages/pro/editor-collection-loop/src/legacy/collection-loop-item-type.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initCollectionLoopItemType: function() { return /* binding */ initCollectionLoopItemType; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-canvas */ "@elementor/editor-canvas");
/* harmony import */ var _elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./packages/packages/pro/editor-collection-loop/src/constants.ts");
/* harmony import */ var _loop_item_empty_view_create_loop_item_empty_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loop-item-empty-view/create-loop-item-empty-view */ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-item-empty-view/create-loop-item-empty-view.tsx");
/* harmony import */ var _loop_static_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loop-static-items */ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-static-items.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./packages/packages/pro/editor-collection-loop/src/legacy/utils.ts");





function initCollectionLoopItemType() {
  (0,_elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0__.registerElementType)(_constants__WEBPACK_IMPORTED_MODULE_1__.ITEM_TYPE, function (options) {
    return createCollectionLoopItemType(options);
  });
}
function createCollectionLoopItemType(options) {
  const legacyWindow = window;
  const {
    type
  } = options;
  return class extends legacyWindow.elementor.modules.elements.types.Base {
    getType() {
      return type;
    }
    getView() {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getMemoizedView)(() => buildLoopItemView(options));
    }
    getModel() {
      return legacyWindow.elementor.modules.elements.models.AtomicElementBase;
    }
  };
}
function buildLoopItemView(options) {
  const BaseView = (0,_elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0__.createNestedTemplatedElementView)(options);
  return BaseView.extend({
    emptyView: (0,_loop_item_empty_view_create_loop_item_empty_view__WEBPACK_IMPORTED_MODULE_2__.createLoopItemEmptyView)(),
    getDomElement() {
      const id = this.model.get('id');
      const jq = window.jQuery;
      const editModeEl = (0,_loop_static_items__WEBPACK_IMPORTED_MODULE_3__.resolveVisibleLoopItemElement)(id);
      if (editModeEl) {
        return jq(editModeEl);
      }
      const staticEl = (0,_loop_static_items__WEBPACK_IMPORTED_MODULE_3__.resolveFirstStaticLoopItemElement)(id);
      if (staticEl) {
        return jq(staticEl);
      }
      return this.$el;
    }
  });
}

/***/ }),

/***/ "./packages/packages/pro/editor-collection-loop/src/legacy/collection-loop-layout-type.ts":
/*!************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-collection-loop/src/legacy/collection-loop-layout-type.ts ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initCollectionLoopLayoutType: function() { return /* binding */ initCollectionLoopLayoutType; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-canvas */ "@elementor/editor-canvas");
/* harmony import */ var _elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-v1-adapters */ "@elementor/editor-v1-adapters");
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _element_ancestors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./element-ancestors */ "./packages/packages/pro/editor-collection-loop/src/legacy/element-ancestors.ts");
/* harmony import */ var _loop_edit_mode_enter_loop_item_edit_mode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loop-edit-mode/enter-loop-item-edit-mode */ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-edit-mode/enter-loop-item-edit-mode.ts");
/* harmony import */ var _loop_edit_mode_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loop-edit-mode/state */ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-edit-mode/state.ts");
/* harmony import */ var _loop_loading_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loop-loading-overlay */ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-loading-overlay.ts");
/* harmony import */ var _loop_render_cache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loop-render-cache */ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-render-cache.ts");
/* harmony import */ var _loop_static_items__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loop-static-items */ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-static-items.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./packages/packages/pro/editor-collection-loop/src/legacy/utils.ts");









function initCollectionLoopLayoutType() {
  (0,_elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0__.registerElementType)(_loop_static_items__WEBPACK_IMPORTED_MODULE_7__.LAYOUT_TYPE, options => createCollectionLoopLayoutType(options));
}
function createCollectionLoopLayoutType(options) {
  const legacyWindow = window;
  const {
    type
  } = options;
  return class extends legacyWindow.elementor.modules.elements.types.Base {
    getType() {
      return type;
    }
    getView() {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_8__.getMemoizedView)(() => buildLoopLayoutView(options));
    }
    getModel() {
      return legacyWindow.elementor.modules.elements.models.AtomicElementBase;
    }
  };
}
function buildLoopLayoutView(options) {
  const {
    type,
    renderer,
    element
  } = options;
  const BaseView = (0,_elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0__.createNestedTemplatedElementView)({
    type,
    renderer,
    element
  });
  const baseRenderChildren = BaseView.prototype._renderChildren;
  const baseAttachBuffer = BaseView.prototype.attachBuffer;
  return BaseView.extend({
    _parentSettingsListener: null,
    _staticRenderAbortController: null,
    _editorSubscriptions: [],
    _lastRenderedHtml: null,
    _wasInEditMode: false,
    _loopId: undefined,
    events() {
      return {
        ...BaseView.prototype.events?.call(this),
        dblclick: this.handleDblClick
      };
    },
    handleDblClick(e) {
      e.stopPropagation();
      const activeItemId = getEditableChild(this);
      if (!activeItemId) {
        return;
      }
      (0,_loop_edit_mode_enter_loop_item_edit_mode__WEBPACK_IMPORTED_MODULE_3__.enterLoopItemEditMode)(activeItemId);
    },
    attachBuffer(collectionView, buffer) {
      baseAttachBuffer.call(this, collectionView, buffer);
      (0,_loop_static_items__WEBPACK_IMPORTED_MODULE_7__.hideEditableItems)(this);
    },
    async _renderChildren() {
      const {
        signal
      } = this._createAbortController();
      this._rehydrateFromLastRender();
      await baseRenderChildren.call(this);
      if (signal.aborted) {
        return;
      }
      await this._fetchAndAppendStaticItems(signal);
    },
    onRender() {
      getLoopId(this);
      this._listenToParentSettings();
      this._bindEditorSubscriptions();
    },
    onDestroy() {
      this._staticRenderAbortController?.abort();
      this._staticRenderAbortController = null;
      this._stopListeningToParentSettings();
      this._teardownEditorSubscriptions();
      this._lastRenderedHtml = null;
      (0,_loop_loading_overlay__WEBPACK_IMPORTED_MODULE_5__.setLayoutLoading)(this, false);
      const loopId = getLoopId(this);
      if (isLoopBeingEdited(loopId)) {
        (0,_loop_edit_mode_state__WEBPACK_IMPORTED_MODULE_4__.setLoopEditingId)(null);
      }
    },
    _bindEditorSubscriptions() {
      this._teardownEditorSubscriptions();
      this._editorSubscriptions = [(0,_loop_edit_mode_state__WEBPACK_IMPORTED_MODULE_4__.subscribeLoopEditState)(() => this._onEditModeChanged()), this._listenToCompositionBuilt()];
      this._onEditModeChanged();
    },
    _teardownEditorSubscriptions() {
      this._editorSubscriptions.forEach(unsubscribe => unsubscribe());
      this._editorSubscriptions = [];
    },
    _listenToCompositionBuilt() {
      return (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_1__.__privateListenTo)((0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_1__.windowEvent)('elementor/composition/built'), ({
        originalEvent
      }) => {
        const detail = originalEvent?.detail;
        const rootContainers = detail?.rootContainers;
        const loopId = getLoopId(this);
        if (!loopId) {
          return;
        }
        if (!rootContainers || isLoopAffectedByRootContainers(loopId, rootContainers)) {
          void this._refetchStaticItems();
        }
      });
    },
    _onEditModeChanged() {
      const loopId = getLoopId(this);
      if (!loopId) {
        return;
      }
      const {
        shouldBeInEditMode,
        activeItemId
      } = resolveLoopEditModeForView(loopId, this);
      if (shouldBeInEditMode && !this._wasInEditMode) {
        this._staticRenderAbortController?.abort();
        this._wasInEditMode = true;
        void this._enterEditMode(activeItemId);
        return;
      }
      if (!shouldBeInEditMode && this._wasInEditMode) {
        this._wasInEditMode = false;
        (0,_loop_static_items__WEBPACK_IMPORTED_MODULE_7__.exitEditModeOnView)(this);
        this._rehydrateFromLastRender();
        void this._refetchStaticItems();
      }
    },
    _enterEditMode(activeItemId) {
      if (!activeItemId) {
        return;
      }
      (0,_loop_static_items__WEBPACK_IMPORTED_MODULE_7__.applyEditModeToView)(this, activeItemId);
    },
    _listenToParentSettings() {
      this._stopListeningToParentSettings();
      const collectionLoopModel = getCollectionLoopParentModel(this);
      if (!collectionLoopModel) {
        return;
      }
      const handler = () => {
        void this._refetchStaticItems();
      };
      this._parentSettingsListener = listenToBackboneSettingChanges(collectionLoopModel, handler);
    },
    _stopListeningToParentSettings() {
      if (this._parentSettingsListener) {
        this._parentSettingsListener();
        this._parentSettingsListener = null;
      }
    },
    _rehydrateFromLastRender() {
      if (!this.el) {
        return;
      }
      const parentView = this._parent;
      const html = this._lastRenderedHtml ?? parentView?._lastRenderedLoopHtml ?? null;
      if (!html) {
        return;
      }
      const previewItems = parentView?._loopPreviewContext?.items;
      (0,_loop_static_items__WEBPACK_IMPORTED_MODULE_7__.appendStaticItems)(this, html, previewItems);
    },
    async _fetchAndAppendStaticItems(signal) {
      const collectionLoopModel = getCollectionLoopParentModel(this);
      if (!collectionLoopModel) {
        return;
      }
      (0,_loop_loading_overlay__WEBPACK_IMPORTED_MODULE_5__.setLayoutLoading)(this, true);
      let html = null;
      try {
        html = await (0,_loop_render_cache__WEBPACK_IMPORTED_MODULE_6__.fetchRenderedLoop)(collectionLoopModel);
      } finally {
        (0,_loop_loading_overlay__WEBPACK_IMPORTED_MODULE_5__.setLayoutLoading)(this, false);
      }
      if (signal.aborted || !html) {
        return;
      }
      this._lastRenderedHtml = html;
      const parentView = this._parent;
      if (parentView) {
        parentView._lastRenderedLoopHtml = html;
      }
      const previewItems = parentView?._loopPreviewContext?.items;
      (0,_loop_static_items__WEBPACK_IMPORTED_MODULE_7__.appendStaticItems)(this, html, previewItems);
      const activeItemId = getActiveItemIdForLoop(getLoopId(this));
      if (activeItemId) {
        this._enterEditMode(activeItemId);
      }
    },
    async _refetchStaticItems() {
      if (isLoopBeingEdited(getLoopId(this))) {
        return;
      }
      await this._fetchAndAppendStaticItems(this._createAbortController().signal);
    },
    _createAbortController() {
      this._staticRenderAbortController?.abort();
      this._staticRenderAbortController = new AbortController();
      return this._staticRenderAbortController;
    }
  });
}
function getEditableItemIds(view) {
  return (view.collection?.models ?? []).map(model => model.get('id'));
}
function getCollectionLoopParentModel(view) {
  return view._parent?.model;
}
function getLoopId(view) {
  const fromParent = getCollectionLoopParentModel(view)?.get('id');
  if (fromParent) {
    view._loopId = fromParent;
  }
  return view._loopId;
}
function resolveLoopEditModeForView(loopId, layoutView) {
  const editState = (0,_loop_edit_mode_state__WEBPACK_IMPORTED_MODULE_4__.getLoopEditState)();
  if (!editState) {
    return {
      shouldBeInEditMode: false
    };
  }
  if (editState.loopId === loopId) {
    return {
      shouldBeInEditMode: true,
      activeItemId: editState.activeItemId
    };
  }
  const containingEditableItemId = findEditableItemContainingLoop(editState.loopId, layoutView);
  return {
    shouldBeInEditMode: Boolean(containingEditableItemId),
    activeItemId: containingEditableItemId
  };
}
function findEditableItemContainingLoop(nestedLoopId, layoutView) {
  const ownedEditableItemIds = new Set(getEditableItemIds(layoutView));
  if (ownedEditableItemIds.size === 0) {
    return undefined;
  }
  return (0,_element_ancestors__WEBPACK_IMPORTED_MODULE_2__.findAncestorInIds)(nestedLoopId, ownedEditableItemIds);
}
function getEditableChild(view) {
  return getEditableItemIds(view)[0];
}
function isLoopBeingEdited(loopId) {
  const editState = (0,_loop_edit_mode_state__WEBPACK_IMPORTED_MODULE_4__.getLoopEditState)();
  if (!loopId || !editState) {
    return false;
  }
  if (editState.loopId === loopId) {
    return true;
  }
  return Boolean((0,_element_ancestors__WEBPACK_IMPORTED_MODULE_2__.findAncestorInIds)(editState.loopId, new Set([loopId])));
}
function getActiveItemIdForLoop(loopId) {
  const editState = (0,_loop_edit_mode_state__WEBPACK_IMPORTED_MODULE_4__.getLoopEditState)();
  if (!loopId || editState?.loopId !== loopId) {
    return null;
  }
  return editState.activeItemId ?? null;
}
function isLoopAffectedByRootContainers(loopId, rootContainers) {
  return rootContainers.some(rootId => (0,_element_ancestors__WEBPACK_IMPORTED_MODULE_2__.isElementDescendantOf)(loopId, rootId));
}
function listenToBackboneSettingChanges(model, onChange) {
  const settings = model.get('settings');
  settings.on('change', onChange);
  return () => settings.off('change', onChange);
}

/***/ }),

/***/ "./packages/packages/pro/editor-collection-loop/src/legacy/collection-loop-type.ts":
/*!*****************************************************************************************!*\
  !*** ./packages/packages/pro/editor-collection-loop/src/legacy/collection-loop-type.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initCollectionLoopType: function() { return /* binding */ initCollectionLoopType; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-canvas */ "@elementor/editor-canvas");
/* harmony import */ var _elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./packages/packages/pro/editor-collection-loop/src/constants.ts");
/* harmony import */ var _utils_is_loop_preview_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/is-loop-preview-context */ "./packages/packages/pro/editor-collection-loop/src/utils/is-loop-preview-context.ts");
/* harmony import */ var _loop_edit_mode_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loop-edit-mode/state */ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-edit-mode/state.ts");
/* harmony import */ var _loop_render_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loop-render-context */ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-render-context.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./packages/packages/pro/editor-collection-loop/src/legacy/utils.ts");






function initCollectionLoopType() {
  (0,_elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0__.registerElementType)(_constants__WEBPACK_IMPORTED_MODULE_1__.COLLECTION_LOOP_TYPE, options => createCollectionLoopType(options));
}
function createCollectionLoopType(options) {
  const BaseType = (0,_elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0__.createNestedTemplatedElementType)(options);
  return class extends BaseType {
    getView() {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_5__.getMemoizedView)(() => createCollectionLoopView(options));
    }
  };
}
function createCollectionLoopView(options) {
  const BaseView = (0,_elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0__.createNestedTemplatedElementView)(options);
  const baseIsDroppingAllowed = BaseView.prototype.isDroppingAllowed;
  return BaseView.extend({
    getNamespaceKey() {
      return _constants__WEBPACK_IMPORTED_MODULE_1__.LOOP_CONTEXT_KEY;
    },
    afterSettingsResolve(settings) {
      const query = settings.query;
      this._loopPreviewContext = (0,_utils_is_loop_preview_context__WEBPACK_IMPORTED_MODULE_2__.isLoopPreviewContext)(query) ? query : undefined;
      return settings;
    },
    getRenderContext() {
      const parentContext = this._parent?.getRenderContext?.();
      return (0,_loop_render_context__WEBPACK_IMPORTED_MODULE_4__.mergeLoopRenderContext)(parentContext, {
        ...(0,_loop_render_context__WEBPACK_IMPORTED_MODULE_4__.buildLoopEditorRenderContext)(this.model),
        ...(this._loopPreviewContext ?? {})
      });
    },
    isDroppingAllowed() {
      const isDroppingAllowed = baseIsDroppingAllowed.call(this);
      const isInEditMode = (0,_loop_edit_mode_state__WEBPACK_IMPORTED_MODULE_3__.getLoopEditState)()?.activeItemId === this.model.get('id');
      return isDroppingAllowed && isInEditMode;
    },
    getResolverRenderContext() {
      const parentContext = this._parent?.getResolverRenderContext?.();
      const loopElementId = this.model.get('id');
      const currentPostId = this._loopPreviewContext?.items?.[0]?.id;
      return {
        ...parentContext,
        loop_context: {
          ...(0,_loop_render_context__WEBPACK_IMPORTED_MODULE_4__.buildLoopEditorRenderContext)(this.model),
          ...(this._loopPreviewContext ?? {})
        },
        loopElementId,
        ...(currentPostId !== undefined ? {
          currentPostId
        } : {})
      };
    },
    onDestroy() {
      this._loopPreviewContext = undefined;
      BaseView.prototype.onDestroy?.call(this);
    }
  });
}

/***/ }),

/***/ "./packages/packages/pro/editor-collection-loop/src/legacy/element-ancestors.ts":
/*!**************************************************************************************!*\
  !*** ./packages/packages/pro/editor-collection-loop/src/legacy/element-ancestors.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findAncestorElementId: function() { return /* binding */ findAncestorElementId; },
/* harmony export */   findAncestorInIds: function() { return /* binding */ findAncestorInIds; },
/* harmony export */   isElementDescendantOf: function() { return /* binding */ isElementDescendantOf; },
/* harmony export */   walkElementAncestors: function() { return /* binding */ walkElementAncestors; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-elements */ "@elementor/editor-elements");
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0__);

function walkElementAncestors(startElementId, onElement) {
  let current = (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0__.getContainer)(startElementId);
  while (current) {
    if (onElement(current)) {
      return;
    }
    current = current.parent;
  }
}
function findAncestorElementId(startElementId, matches) {
  let matchedId;
  walkElementAncestors(startElementId, element => {
    if (matches(element)) {
      matchedId = element.id;
      return true;
    }
    return false;
  });
  return matchedId;
}
function findAncestorInIds(startElementId, ancestorIds) {
  return findAncestorElementId(startElementId, element => ancestorIds.has(element.id));
}
function isElementDescendantOf(elementId, ancestorId) {
  if (elementId === ancestorId) {
    return true;
  }
  return findAncestorInIds(elementId, new Set([ancestorId])) !== undefined;
}

/***/ }),

/***/ "./packages/packages/pro/editor-collection-loop/src/legacy/init-pagination-sync.ts":
/*!*****************************************************************************************!*\
  !*** ./packages/packages/pro/editor-collection-loop/src/legacy/init-pagination-sync.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initPaginationSync: function() { return /* binding */ initPaginationSync; }
/* harmony export */ });
/* harmony import */ var _pagination_reconcile_sync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination-reconcile-sync */ "./packages/packages/pro/editor-collection-loop/src/legacy/pagination-reconcile-sync.ts");
/* harmony import */ var _pagination_settings_sync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagination-settings-sync */ "./packages/packages/pro/editor-collection-loop/src/legacy/pagination-settings-sync.ts");


function initPaginationSync() {
  (0,_pagination_settings_sync__WEBPACK_IMPORTED_MODULE_1__.initPaginationSettingsSync)();
  (0,_pagination_reconcile_sync__WEBPACK_IMPORTED_MODULE_0__.initPaginationReconcileSync)();
}

/***/ }),

/***/ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-edit-mode/enter-loop-item-edit-mode.ts":
/*!*************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-collection-loop/src/legacy/loop-edit-mode/enter-loop-item-edit-mode.ts ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enterLoopItemEditMode: function() { return /* binding */ enterLoopItemEditMode; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-elements */ "@elementor/editor-elements");
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _element_ancestors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../element-ancestors */ "./packages/packages/pro/editor-collection-loop/src/legacy/element-ancestors.ts");
/* harmony import */ var _loop_static_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loop-static-items */ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-static-items.ts");
/* harmony import */ var _tracking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tracking */ "./packages/packages/pro/editor-collection-loop/src/legacy/tracking.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state */ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-edit-mode/state.ts");





function enterLoopItemEditMode(activeItemId) {
  const loopId = (0,_element_ancestors__WEBPACK_IMPORTED_MODULE_1__.findAncestorElementId)(activeItemId, ancestor => ancestor.model?.get('elType') === _loop_static_items__WEBPACK_IMPORTED_MODULE_2__.COLLECTION_LOOP_TYPE);
  if (!loopId) {
    return;
  }
  (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0__.selectElement)(activeItemId);
  (0,_state__WEBPACK_IMPORTED_MODULE_4__.requestLoopEditMode)({
    loopId,
    activeItemId
  });
  (0,_tracking__WEBPACK_IMPORTED_MODULE_3__.trackLoopEnterEditMode)(loopId, activeItemId);
}

/***/ }),

/***/ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-edit-mode/exit-loop-edit-mode.ts":
/*!*******************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-collection-loop/src/legacy/loop-edit-mode/exit-loop-edit-mode.ts ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   exitLoopEditMode: function() { return /* binding */ exitLoopEditMode; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-elements */ "@elementor/editor-elements");
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tracking__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tracking */ "./packages/packages/pro/editor-collection-loop/src/legacy/tracking.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-edit-mode/state.ts");



function exitLoopEditMode() {
  const editState = (0,_state__WEBPACK_IMPORTED_MODULE_2__.getLoopEditState)();
  if (!editState) {
    return;
  }
  const {
    loopId,
    activeItemId
  } = editState;
  (0,_state__WEBPACK_IMPORTED_MODULE_2__.setLoopEditingId)(null);
  (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0__.selectElement)(loopId);
  (0,_tracking__WEBPACK_IMPORTED_MODULE_1__.trackLoopExitEditMode)(loopId, activeItemId);
}

/***/ }),

/***/ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-edit-mode/handle-loop-item-drop-redirect.ts":
/*!******************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-collection-loop/src/legacy/loop-edit-mode/handle-loop-item-drop-redirect.ts ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initHandleLoopItemDropRedirect: function() { return /* binding */ initHandleLoopItemDropRedirect; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_canvas_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-canvas-extended */ "@elementor/editor-canvas-extended");
/* harmony import */ var _elementor_editor_canvas_extended__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_canvas_extended__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-elements */ "@elementor/editor-elements");
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _element_ancestors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../element-ancestors */ "./packages/packages/pro/editor-collection-loop/src/legacy/element-ancestors.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state */ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-edit-mode/state.ts");




function initHandleLoopItemDropRedirect() {
  (0,_elementor_editor_canvas_extended__WEBPACK_IMPORTED_MODULE_0__.registerDropContainerRedirect)({
    shouldHandle: () => (0,_state__WEBPACK_IMPORTED_MODULE_3__.getLoopEditState)() !== null,
    resolveRedirect: container => {
      const activeItemId = (0,_state__WEBPACK_IMPORTED_MODULE_3__.getLoopEditState)()?.activeItemId;
      if (!activeItemId || (0,_element_ancestors__WEBPACK_IMPORTED_MODULE_2__.isElementDescendantOf)(container.id, activeItemId)) {
        return {
          shouldRedirect: false,
          container
        };
      }
      const target = (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_1__.getContainer)(activeItemId);
      if (!target) {
        return {
          shouldRedirect: false,
          container
        };
      }
      return {
        shouldRedirect: true,
        container: target
      };
    }
  });
}

/***/ }),

/***/ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-edit-mode/selection-sync.ts":
/*!**************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-collection-loop/src/legacy/loop-edit-mode/selection-sync.ts ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initLoopEditModeSelectionSync: function() { return /* binding */ initLoopEditModeSelectionSync; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-elements */ "@elementor/editor-elements");
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-v1-adapters */ "@elementor/editor-v1-adapters");
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _element_ancestors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../element-ancestors */ "./packages/packages/pro/editor-collection-loop/src/legacy/element-ancestors.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state */ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-edit-mode/state.ts");




const DOCUMENT_WRAPPER_ATTR = 'data-elementor-id';
function initLoopEditModeSelectionSync() {
  (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_1__.__privateListenTo)((0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_1__.commandEndEvent)('document/elements/select'), handleSelectionChange);
}
function handleSelectionChange() {
  const editState = (0,_state__WEBPACK_IMPORTED_MODULE_3__.getLoopEditState)();
  if (!editState) {
    return;
  }
  const selectedIds = (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0__.getSelectedElements)().map(element => element.id);
  if (selectedIds.length === 0) {
    return;
  }
  const isWithinActiveItem = selectedIds.every(id => (0,_element_ancestors__WEBPACK_IMPORTED_MODULE_2__.isElementDescendantOf)(id, editState.activeItemId));
  if (isWithinActiveItem) {
    return;
  }
  if (!isSelectionInLoopDocument(selectedIds, editState.activeItemId)) {
    return;
  }
  (0,_state__WEBPACK_IMPORTED_MODULE_3__.setLoopEditingId)(null);
}
function isSelectionInLoopDocument(selectedIds, activeItemId) {
  const loopDocumentId = getOwningDocumentId(activeItemId);
  if (!loopDocumentId) {
    return false;
  }
  return selectedIds.every(id => getOwningDocumentId(id) === loopDocumentId);
}
function getOwningDocumentId(elementId) {
  return (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0__.getContainer)(elementId)?.view?.el?.closest(`[${DOCUMENT_WRAPPER_ATTR}]`)?.dataset.elementorId;
}

/***/ }),

/***/ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-edit-mode/state.ts":
/*!*****************************************************************************************!*\
  !*** ./packages/packages/pro/editor-collection-loop/src/legacy/loop-edit-mode/state.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOOP_EDIT_MODE_CHANGED_EVENT: function() { return /* binding */ LOOP_EDIT_MODE_CHANGED_EVENT; },
/* harmony export */   LOOP_EDIT_MODE_REQUEST_ENTER_EVENT: function() { return /* binding */ LOOP_EDIT_MODE_REQUEST_ENTER_EVENT; },
/* harmony export */   getLoopEditState: function() { return /* binding */ getLoopEditState; },
/* harmony export */   loopEditMode: function() { return /* binding */ loopEditMode; },
/* harmony export */   requestLoopEditMode: function() { return /* binding */ requestLoopEditMode; },
/* harmony export */   setLoopEditState: function() { return /* binding */ setLoopEditState; },
/* harmony export */   setLoopEditingId: function() { return /* binding */ setLoopEditingId; },
/* harmony export */   subscribeLoopEditState: function() { return /* binding */ subscribeLoopEditState; },
/* harmony export */   subscribeLoopEditingId: function() { return /* binding */ subscribeLoopEditingId; },
/* harmony export */   useLoopEditState: function() { return /* binding */ useLoopEditState; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-v1-adapters */ "@elementor/editor-v1-adapters");
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__);

const LOOP_EDIT_MODE_CHANGED_EVENT = 'elementor/loop-edit-mode/changed';
const LOOP_EDIT_MODE_REQUEST_ENTER_EVENT = 'elementor/loop-edit-mode/request-enter';
function requestLoopEditMode(detail) {
  window.dispatchEvent(new CustomEvent(LOOP_EDIT_MODE_REQUEST_ENTER_EVENT, {
    detail
  }));
}
const loopEditModeChangedEvent = (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__.windowEvent)(LOOP_EDIT_MODE_CHANGED_EVENT);
class LoopEditModeStore {
  state = null;
  getState() {
    return this.state;
  }
  setState(next) {
    if (next === null) {
      if (this.state === null) {
        return;
      }
      this.state = null;
      this.notify();
      return;
    }
    if (!next.activeItemId) {
      return;
    }
    if (this.isSameState(next)) {
      return;
    }
    this.state = {
      loopId: next.loopId,
      activeItemId: next.activeItemId
    };
    this.notify();
  }
  setLoopEditingId(loopId, activeItemId) {
    if (loopId === null) {
      this.setState(null);
      return;
    }
    const resolvedActiveItemId = activeItemId ?? this.state?.activeItemId;
    if (!resolvedActiveItemId) {
      return;
    }
    this.setState({
      loopId,
      activeItemId: resolvedActiveItemId
    });
  }
  subscribe(callback) {
    return (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__.__privateListenTo)(loopEditModeChangedEvent, callback);
  }
  isSameState(next) {
    return this.state?.loopId === next.loopId && this.state?.activeItemId === next.activeItemId;
  }
  notify() {
    window.dispatchEvent(new CustomEvent(LOOP_EDIT_MODE_CHANGED_EVENT));
  }
}
const loopEditMode = new LoopEditModeStore();
const getLoopEditState = () => loopEditMode.getState();
const setLoopEditState = state => loopEditMode.setState(state);
const setLoopEditingId = (loopId, activeItemId) => loopEditMode.setLoopEditingId(loopId, activeItemId);
const subscribeLoopEditState = callback => loopEditMode.subscribe(callback);
const subscribeLoopEditingId = subscribeLoopEditState;
function useLoopEditState() {
  return (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__.__privateUseListenTo)(loopEditModeChangedEvent, getLoopEditState);
}

/***/ }),

/***/ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-item-context-menu.ts":
/*!*******************************************************************************************!*\
  !*** ./packages/packages/pro/editor-collection-loop/src/legacy/loop-item-context-menu.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLoopItemIdFromView: function() { return /* binding */ getLoopItemIdFromView; },
/* harmony export */   initLoopItemContextMenu: function() { return /* binding */ initLoopItemContextMenu; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-v1-adapters */ "@elementor/editor-v1-adapters");
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loop_edit_mode_enter_loop_item_edit_mode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loop-edit-mode/enter-loop-item-edit-mode */ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-edit-mode/enter-loop-item-edit-mode.ts");
/* harmony import */ var _loop_static_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loop-static-items */ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-static-items.ts");



const CONTEXT_MENU_FILTER = `elements/${_loop_static_items__WEBPACK_IMPORTED_MODULE_2__.ITEM_TYPE}/contextMenuGroups`;
const EDIT_ACTION_NAME = 'edit';
const GENERAL_GROUP_NAME = 'general';
function initLoopItemContextMenu() {
  (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__.__privateListenTo)((0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__.v1ReadyEvent)(), registerContextMenuFilter);
}
function registerContextMenuFilter() {
  const legacyWindow = window;
  const hooks = legacyWindow.elementor.hooks;
  hooks.addFilter(CONTEXT_MENU_FILTER, (groups, view) => {
    return groups.map(group => group.name === GENERAL_GROUP_NAME ? replaceEditAction(group, view) : group);
  });
}
function replaceEditAction(group, view) {
  return {
    ...group,
    actions: group.actions.map(action => action.name === EDIT_ACTION_NAME ? {
      ...action,
      callback: () => editItemFromView(view)
    } : action)
  };
}
function getLoopItemIdFromView(view) {
  return view.getContainer()?.id;
}
function editItemFromView(view) {
  const itemId = getLoopItemIdFromView(view);
  if (!itemId) {
    return;
  }
  (0,_loop_edit_mode_enter_loop_item_edit_mode__WEBPACK_IMPORTED_MODULE_1__.enterLoopItemEditMode)(itemId);
}

/***/ }),

/***/ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-item-create-guard.ts":
/*!*******************************************************************************************!*\
  !*** ./packages/packages/pro/editor-collection-loop/src/legacy/loop-item-create-guard.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initLoopItemCreateGuard: function() { return /* binding */ initLoopItemCreateGuard; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-v1-adapters */ "@elementor/editor-v1-adapters");
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loop_edit_mode_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loop-edit-mode/state */ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-edit-mode/state.ts");
/* harmony import */ var _loop_static_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loop-static-items */ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-static-items.ts");



const MOVE_COMMAND = 'document/elements/move';
function initLoopItemCreateGuard() {
  (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__.registerDataHook)('dependency', 'document/elements/create', (args, options) => {
    const isMove = options?.commandsCurrentTrace?.includes(MOVE_COMMAND);
    if (isMove) {
      return true;
    }
    const containers = args.containers ?? (args.container ? [args.container] : []);
    return containers.every(container => !isBlockedContainer(container));
  });
}
function isBlockedContainer(container) {
  if (![_loop_static_items__WEBPACK_IMPORTED_MODULE_2__.ITEM_TYPE, _loop_static_items__WEBPACK_IMPORTED_MODULE_2__.LAYOUT_TYPE].includes(container.model.get('elType'))) {
    return false;
  }
  const activeItemId = (0,_loop_edit_mode_state__WEBPACK_IMPORTED_MODULE_1__.getLoopEditState)()?.activeItemId;
  return container.id !== activeItemId;
}

/***/ }),

/***/ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-item-empty-view/create-loop-item-empty-view.tsx":
/*!**********************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-collection-loop/src/legacy/loop-item-empty-view/create-loop-item-empty-view.tsx ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createLoopItemEmptyView: function() { return /* binding */ createLoopItemEmptyView; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elementor/editor-elements */ "@elementor/editor-elements");
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _loop_edit_mode_enter_loop_item_edit_mode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loop-edit-mode/enter-loop-item-edit-mode */ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-edit-mode/enter-loop-item-edit-mode.ts");
/* harmony import */ var _loop_item_context_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loop-item-context-menu */ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-item-context-menu.ts");
/* harmony import */ var _import_into_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./import-into-container */ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-item-empty-view/import-into-container.ts");
/* harmony import */ var _loop_item_empty_cta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loop-item-empty-cta */ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-item-empty-view/loop-item-empty-cta.tsx");







const EMPTY_VIEW_CLASS = 'elementor-empty-view';
function createLoopItemEmptyView() {
  const legacyWindow = window;
  return legacyWindow.Marionette.ItemView.extend({
    template: '<div></div>',
    className: EMPTY_VIEW_CLASS,
    onBeforeRender() {
      if (this._reactRoot) {
        this._reactRoot.unmount();
        this._reactRoot = null;
      }
    },
    onRender() {
      this.$el.addClass(EMPTY_VIEW_CLASS);
      this._reactRoot = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(this.el);
      this._reactRoot.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_loop_item_empty_cta__WEBPACK_IMPORTED_MODULE_6__.LoopItemEmptyCta, {
        onAddWidget: () => handleAddWidget(resolveLoopItemId(this)),
        onOpenLibrary: () => handleOpenLibrary(resolveLoopItemId(this))
      }));
    },
    onDestroy() {
      this._reactRoot?.unmount();
      this._reactRoot = null;
    }
  });
}
function resolveLoopItemId(view) {
  const parent = view._parent;
  if (!parent) {
    return null;
  }
  return (0,_loop_item_context_menu__WEBPACK_IMPORTED_MODULE_4__.getLoopItemIdFromView)(parent) ?? null;
}
function handleAddWidget(loopItemId) {
  if (!loopItemId) {
    return;
  }
  (0,_loop_edit_mode_enter_loop_item_edit_mode__WEBPACK_IMPORTED_MODULE_3__.enterLoopItemEditMode)(loopItemId);
  window.$e.route('panel/elements/categories');
}
function handleOpenLibrary(loopItemId) {
  if (!loopItemId) {
    return;
  }
  const targetContainer = (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_2__.getContainer)(loopItemId);
  if (!targetContainer) {
    return;
  }
  (0,_loop_edit_mode_enter_loop_item_edit_mode__WEBPACK_IMPORTED_MODULE_3__.enterLoopItemEditMode)(loopItemId);
  (0,_import_into_container__WEBPACK_IMPORTED_MODULE_5__.setPendingImportTargetContainer)(targetContainer);
  window.$e.run('library/open', {
    toDefault: true
  });
}

/***/ }),

/***/ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-item-empty-view/import-into-container.ts":
/*!***************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-collection-loop/src/legacy/loop-item-empty-view/import-into-container.ts ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   consumePendingImportTargetContainer: function() { return /* binding */ consumePendingImportTargetContainer; },
/* harmony export */   initImportIntoContainerHook: function() { return /* binding */ initImportIntoContainerHook; },
/* harmony export */   setPendingImportTargetContainer: function() { return /* binding */ setPendingImportTargetContainer; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-v1-adapters */ "@elementor/editor-v1-adapters");
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__);

const IMPORT_COMMAND = 'document/elements/import';
const LIBRARY_CLOSE_COMMAND = 'library/close';
let pendingTargetContainer = null;
function setPendingImportTargetContainer(container) {
  pendingTargetContainer = container;
}
function consumePendingImportTargetContainer() {
  const container = pendingTargetContainer;
  pendingTargetContainer = null;
  return container;
}
function initImportIntoContainerHook() {
  (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__.registerDataHook)('dependency', IMPORT_COMMAND, args => {
    if (args.container) {
      setPendingImportTargetContainer(null);
      return true;
    }
    const target = consumePendingImportTargetContainer();
    if (target) {
      args.container = target;
    }
    return true;
  });
  (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__.registerDataHook)('after', LIBRARY_CLOSE_COMMAND, () => {
    setPendingImportTargetContainer(null);
  });
}

/***/ }),

/***/ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-item-empty-view/loop-item-empty-cta.tsx":
/*!**************************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-collection-loop/src/legacy/loop-item-empty-view/loop-item-empty-cta.tsx ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoopItemEmptyCta: function() { return /* binding */ LoopItemEmptyCta; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loop_static_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loop-static-items */ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-static-items.ts");



const ADD_SECTION_LAYOUT_STYLE = {
  all: 'unset',
  alignItems: 'center',
  display: 'flex',
  inset: 0,
  justifyContent: 'center',
  margin: 0,
  maxWidth: 'none',
  position: 'absolute'
};
function LoopItemEmptyCta({
  onAddWidget,
  onOpenLibrary
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "elementor-first-add",
    style: {
      border: _loop_static_items__WEBPACK_IMPORTED_MODULE_2__.LOOP_ITEM_EMPTY_BORDER,
      minHeight: _loop_static_items__WEBPACK_IMPORTED_MODULE_2__.LOOP_ITEM_EMPTY_MIN_HEIGHT
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "elementor-add-section",
    style: ADD_SECTION_LAYOUT_STYLE
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "elementor-add-new-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ActionButton, {
    className: "elementor-add-section-button",
    icon: "eicon-plus",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add widget', 'elementor-pro'),
    onClick: onAddWidget
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ActionButton, {
    className: "elementor-add-template-button",
    icon: "eicon-folder",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add template', 'elementor-pro'),
    onClick: onOpenLibrary
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "elementor-add-section-drag-title"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Drag widget here', 'elementor-pro')))));
}
function ActionButton({
  className,
  icon,
  label,
  onClick
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: `elementor-add-section-area-button ${className}`,
    "aria-label": label,
    title: label,
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: icon,
    "aria-hidden": "true"
  }));
}

/***/ }),

/***/ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-loading-overlay.ts":
/*!*****************************************************************************************!*\
  !*** ./packages/packages/pro/editor-collection-loop/src/legacy/loop-loading-overlay.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOADING_CLASS: function() { return /* binding */ LOADING_CLASS; },
/* harmony export */   setLayoutLoading: function() { return /* binding */ setLayoutLoading; }
/* harmony export */ });
const KEYFRAMES_STYLE_ID = 'e-collection-loop-loading-keyframes';
const KEYFRAMES_NAME = 'eCollectionLoopLoadingPulse';
const LOADING_CLASS = 'e-collection-loop-loading';
const STYLES_CSS = `
@keyframes ${KEYFRAMES_NAME} {
	0%, 100% { opacity: 1; }
	50% { opacity: 0.6; }
}

.${LOADING_CLASS} {
	animation: ${KEYFRAMES_NAME} 1s infinite alternate;
}
`;
function setLayoutLoading(view, isLoading) {
  const el = view.el;
  if (!el) {
    return;
  }
  if (isLoading) {
    ensureStyles(el.ownerDocument);
  }
  el.classList.toggle(LOADING_CLASS, isLoading);
}
function ensureStyles(doc) {
  if (doc.getElementById(KEYFRAMES_STYLE_ID)) {
    return;
  }
  const style = doc.createElement('style');
  style.id = KEYFRAMES_STYLE_ID;
  style.textContent = STYLES_CSS;
  (doc.head ?? doc.documentElement).appendChild(style);
}

/***/ }),

/***/ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-navigator-children.ts":
/*!********************************************************************************************!*\
  !*** ./packages/packages/pro/editor-collection-loop/src/legacy/loop-navigator-children.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initLoopNavigatorChildren: function() { return /* binding */ initLoopNavigatorChildren; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-v1-adapters */ "@elementor/editor-v1-adapters");
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _element_ancestors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element-ancestors */ "./packages/packages/pro/editor-collection-loop/src/legacy/element-ancestors.ts");
/* harmony import */ var _loop_edit_mode_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loop-edit-mode/state */ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-edit-mode/state.ts");
/* harmony import */ var _loop_static_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loop-static-items */ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-static-items.ts");




const SHOW_CHILDREN_FILTER = 'navigator/element/show-children';
const REFRESH_CHILDREN_EVENT = 'elementor/navigator/refresh-children';
let lastActiveItemId = null;
function initLoopNavigatorChildren() {
  (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__.__privateListenTo)((0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__.v1ReadyEvent)(), registerNavigatorFilter);
  (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__.__privateListenTo)((0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__.windowEvent)(_loop_edit_mode_state__WEBPACK_IMPORTED_MODULE_2__.LOOP_EDIT_MODE_CHANGED_EVENT), syncNavigatorForEditStateChange);
  (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__.__privateListenTo)((0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__.commandEndEvent)('editor/documents/open'), resetLastActiveItemId);
}
function resetLastActiveItemId() {
  lastActiveItemId = null;
}
function registerNavigatorFilter() {
  const legacyWindow = window;
  const hooks = legacyWindow.elementor?.hooks;
  hooks.addFilter(SHOW_CHILDREN_FILTER, (show, model) => {
    const elementModel = model;
    if (elementModel?.get('elType') !== _loop_static_items__WEBPACK_IMPORTED_MODULE_3__.ITEM_TYPE) {
      return show;
    }
    return isLoopItemShowingChildrenInNavigator(elementModel.get('id'));
  });
  syncAllLoopItemNavigatorNodes();
}
function isLoopItemShowingChildrenInNavigator(itemId) {
  const editState = (0,_loop_edit_mode_state__WEBPACK_IMPORTED_MODULE_2__.getLoopEditState)();
  if (!editState) {
    return false;
  }
  if (editState.activeItemId === itemId) {
    return true;
  }
  return isAncestorLoopItemOfActiveItem(itemId, editState.activeItemId);
}
function isAncestorLoopItemOfActiveItem(ancestorItemId, activeItemId) {
  let isMatch = false;
  (0,_element_ancestors__WEBPACK_IMPORTED_MODULE_1__.walkElementAncestors)(activeItemId, element => {
    if (element.id === ancestorItemId) {
      isMatch = true;
      return true;
    }
    return false;
  });
  return isMatch;
}
function refreshLoopItemNavigator(itemId) {
  window.dispatchEvent(new CustomEvent(REFRESH_CHILDREN_EVENT, {
    detail: {
      elementId: itemId
    }
  }));
}
function syncNavigatorForEditStateChange() {
  const currentActiveItemId = (0,_loop_edit_mode_state__WEBPACK_IMPORTED_MODULE_2__.getLoopEditState)()?.activeItemId ?? null;
  const affectedIds = new Set();
  if (lastActiveItemId) {
    collectLoopItemNavigatorRefreshIds(lastActiveItemId, affectedIds);
  }
  if (currentActiveItemId) {
    collectLoopItemNavigatorRefreshIds(currentActiveItemId, affectedIds);
  }
  lastActiveItemId = currentActiveItemId;
  affectedIds.forEach(refreshLoopItemNavigator);
}
function collectLoopItemNavigatorRefreshIds(activeItemId, affectedIds) {
  affectedIds.add(activeItemId);
  (0,_element_ancestors__WEBPACK_IMPORTED_MODULE_1__.walkElementAncestors)(activeItemId, element => {
    if (element.model?.get('elType') === _loop_static_items__WEBPACK_IMPORTED_MODULE_3__.ITEM_TYPE) {
      affectedIds.add(element.id);
    }
    return false;
  });
}
function syncAllLoopItemNavigatorNodes() {
  forEachLoopItemModel(itemId => refreshLoopItemNavigator(itemId));
}
function forEachLoopItemModel(visitor) {
  const legacyWindow = window;
  const rootElements = legacyWindow.elementor?.elementsModel?.get('elements');
  if (!rootElements) {
    return;
  }
  walkElementsCollection(rootElements, visitor);
}
function walkElementsCollection(collection, visitor) {
  for (const model of collection.models ?? []) {
    if (model.get('elType') === _loop_static_items__WEBPACK_IMPORTED_MODULE_3__.ITEM_TYPE) {
      visitor(model.get('id'));
    }
    const childElements = model.get('elements');
    if (childElements) {
      walkElementsCollection(childElements, visitor);
    }
  }
}

/***/ }),

/***/ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-render-cache.ts":
/*!**************************************************************************************!*\
  !*** ./packages/packages/pro/editor-collection-loop/src/legacy/loop-render-cache.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchRenderedLoop: function() { return /* binding */ fetchRenderedLoop; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-v1-adapters */ "@elementor/editor-v1-adapters");
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__);

const RENDER_AJAX_ACTION = 'render_atomic_element';
async function fetchRenderedLoop(parentModel) {
  const data = parentModel.toJSON();
  const uniqueId = `${RENDER_AJAX_ACTION}_${data.id}`;
  const requestParams = {
    action: RENDER_AJAX_ACTION,
    unique_id: uniqueId,
    data: {
      data
    }
  };
  _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__.ajax.invalidateCache(requestParams);
  try {
    const response = await _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__.ajax.load(requestParams);
    return response.render;
  } catch {
    return null;
  }
}

/***/ }),

/***/ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-render-context.ts":
/*!****************************************************************************************!*\
  !*** ./packages/packages/pro/editor-collection-loop/src/legacy/loop-render-context.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PAGINATION_TYPE: function() { return /* binding */ PAGINATION_TYPE; },
/* harmony export */   buildLoopEditorRenderContext: function() { return /* binding */ buildLoopEditorRenderContext; },
/* harmony export */   getLoopResolverRenderContext: function() { return /* binding */ getLoopResolverRenderContext; },
/* harmony export */   getPaginationEnabledFromSettings: function() { return /* binding */ getPaginationEnabledFromSettings; },
/* harmony export */   isPaginationEnabled: function() { return /* binding */ isPaginationEnabled; },
/* harmony export */   mergeLoopRenderContext: function() { return /* binding */ mergeLoopRenderContext; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-props */ "@elementor/editor-props");
/* harmony import */ var _elementor_editor_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./packages/packages/pro/editor-collection-loop/src/constants.ts");


const PAGINATION_TYPE = 'e-pagination';
function getPaginationEnabledFromSettings(settings) {
  const pagination = settings.pagination;
  return _elementor_editor_props__WEBPACK_IMPORTED_MODULE_0__.booleanPropTypeUtil.extract(pagination) ?? false;
}
function isPaginationEnabled(settings, maxPages) {
  return getPaginationEnabledFromSettings(settings) && maxPages > 1;
}
function buildLoopEditorRenderContext(model) {
  const settings = model.get('settings')?.toJSON?.() ?? {};
  return {
    pagination_enabled: getPaginationEnabledFromSettings(settings)
  };
}
function mergeLoopRenderContext(parentContext, loopContext) {
  return {
    ...parentContext,
    [_constants__WEBPACK_IMPORTED_MODULE_1__.LOOP_CONTEXT_KEY]: loopContext
  };
}
function getLoopResolverRenderContext(context) {
  return context?.[_constants__WEBPACK_IMPORTED_MODULE_1__.LOOP_CONTEXT_KEY];
}

/***/ }),

/***/ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-static-items.ts":
/*!**************************************************************************************!*\
  !*** ./packages/packages/pro/editor-collection-loop/src/legacy/loop-static-items.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COLLECTION_LOOP_TYPE: function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.COLLECTION_LOOP_TYPE; },
/* harmony export */   ITEM_TYPE: function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.ITEM_TYPE; },
/* harmony export */   LAYOUT_TYPE: function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.LAYOUT_TYPE; },
/* harmony export */   LOOP_ITEM_EMPTY_BORDER: function() { return /* binding */ LOOP_ITEM_EMPTY_BORDER; },
/* harmony export */   LOOP_ITEM_EMPTY_MIN_HEIGHT: function() { return /* binding */ LOOP_ITEM_EMPTY_MIN_HEIGHT; },
/* harmony export */   LOOP_ITEM_TITLE_ATTR: function() { return /* binding */ LOOP_ITEM_TITLE_ATTR; },
/* harmony export */   STATIC_ITEM_ATTR: function() { return /* binding */ STATIC_ITEM_ATTR; },
/* harmony export */   appendStaticItems: function() { return /* binding */ appendStaticItems; },
/* harmony export */   applyEditModeToView: function() { return /* binding */ applyEditModeToView; },
/* harmony export */   exitEditModeOnView: function() { return /* binding */ exitEditModeOnView; },
/* harmony export */   hideEditableItems: function() { return /* binding */ hideEditableItems; },
/* harmony export */   resolveFirstStaticLoopItemElement: function() { return /* binding */ resolveFirstStaticLoopItemElement; },
/* harmony export */   resolveVisibleLoopItemElement: function() { return /* binding */ resolveVisibleLoopItemElement; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-elements */ "@elementor/editor-elements");
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./packages/packages/pro/editor-collection-loop/src/constants.ts");



const STATIC_ITEM_ATTR = 'data-loop-static';
const LOOP_ITEM_TITLE_ATTR = 'data-loop-item-title';
const LOOP_ITEM_EMPTY_MIN_HEIGHT = '120px';
const LOOP_ITEM_EMPTY_BORDER = '1px dashed var(--e-a-color-primary)';
const EDIT_MODE_MIN_HEIGHT = LOOP_ITEM_EMPTY_MIN_HEIGHT;
const STATIC_ITEM_STYLES = {
  'pointer-events': 'none'
};
function appendStaticItems(view, fullHtml, items) {
  const el = view.el;
  if (!el) {
    return;
  }
  removeStaticItems(el);
  extractStaticItemsFromHtml(fullHtml).forEach((item, index) => {
    const title = items?.[index]?.title ?? items?.[index]?.id;
    if (title) {
      item.setAttribute(LOOP_ITEM_TITLE_ATTR, String(title));
    }
    markAsStatic(item);
    el.appendChild(item);
  });
  hideEditableItems(view);
}
function applyEditModeToView(view, activeItemId) {
  const el = view.el;
  if (!el) {
    return;
  }
  hideEditableItems(view);
  const activeBackboneEl = findEditableItemEl(view, activeItemId);
  if (!activeBackboneEl) {
    return;
  }
  const [firstStaticItem] = getStaticItems(el);
  firstStaticItem?.replaceWith(activeBackboneEl);
  clearStaticStyles(activeBackboneEl);
  activeBackboneEl.style.minHeight = EDIT_MODE_MIN_HEIGHT;
}
function resolveFirstStaticLoopItemElement(itemId) {
  const backboneEl = (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0__.getContainer)(itemId)?.view?.el ?? null;
  return queryFirstRenderedItemEl(backboneEl?.ownerDocument ?? document, itemId, `[${STATIC_ITEM_ATTR}]`);
}
function resolveVisibleLoopItemElement(activeItemId) {
  const backboneEl = (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0__.getContainer)(activeItemId)?.view?.el ?? null;
  if (backboneEl && isElementRendered(backboneEl)) {
    return backboneEl;
  }
  const elementId = backboneEl?.dataset.id ?? activeItemId;
  return queryFirstRenderedItemEl(backboneEl?.ownerDocument ?? document, elementId, `:not([${STATIC_ITEM_ATTR}])`);
}
function queryFirstRenderedItemEl(doc, itemId, attrFilter) {
  const escapedId = CSS.escape(itemId);
  for (const el of doc.querySelectorAll(`[data-id="${escapedId}"][data-element_type="${_constants__WEBPACK_IMPORTED_MODULE_1__.ITEM_TYPE}"]${attrFilter}`)) {
    if (isElementRendered(el)) {
      return el;
    }
  }
  return null;
}
function isElementRendered(el) {
  if (el.style.display === 'none') {
    return false;
  }
  const rect = el.getBoundingClientRect();
  return rect.width > 0 && rect.height > 0;
}
function exitEditModeOnView(view) {
  const el = view.el;
  if (!el) {
    return;
  }
  getEditableItemEls(view).forEach(item => {
    el.appendChild(item);
    item.style.display = 'none';
    item.style.minHeight = '';
  });
}
function getEditableItemEls(view) {
  const elements = [];
  view.children?.each(child => {
    if (child.el) {
      elements.push(child.el);
    }
  });
  return elements;
}
function findEditableItemEl(view, id) {
  let match = null;
  view.children?.each(child => {
    if (!match && child.model?.get('id') === id && child.el) {
      match = child.el;
    }
  });
  return match;
}
function hideEditableItems(view) {
  getEditableItemEls(view).forEach(item => {
    item.style.display = 'none';
  });
}
function getStaticItems(el) {
  return Array.from(el.querySelectorAll(`:scope > [${STATIC_ITEM_ATTR}]`));
}
function removeStaticItems(el) {
  getStaticItems(el).forEach(node => node.remove());
}
function extractStaticItemsFromHtml(fullHtml) {
  const doc = new DOMParser().parseFromString(fullHtml, 'text/html');
  const layoutEl = doc.querySelector(`[data-element_type="${_constants__WEBPACK_IMPORTED_MODULE_1__.LAYOUT_TYPE}"]`);
  if (!layoutEl) {
    return [];
  }
  return Array.from(layoutEl.querySelectorAll(`:scope > [data-element_type="${_constants__WEBPACK_IMPORTED_MODULE_1__.ITEM_TYPE}"]`));
}
function markAsStatic(el) {
  el.setAttribute(STATIC_ITEM_ATTR, '');
  // Tell Alpine.js to skip this subtree so its directives don't run on the static preview HTML.
  el.setAttribute('x-ignore', 'true');
  Object.entries(STATIC_ITEM_STYLES).forEach(([prop, value]) => {
    el.style.setProperty(prop, value);
  });
  const title = el.getAttribute(LOOP_ITEM_TITLE_ATTR);
  const isEmpty = el.children.length === 0;
  if (title && isEmpty) {
    appendItemTitleTag(el, title);
  }
}
function appendItemTitleTag(el, title) {
  el.style.position = 'relative';
  el.style.minHeight = LOOP_ITEM_EMPTY_MIN_HEIGHT;
  el.style.border = LOOP_ITEM_EMPTY_BORDER;
  const tag = el.ownerDocument.createElement('span');
  Object.assign(tag.style, {
    position: 'absolute',
    top: '0',
    left: '0',
    background: 'var(--e-a-bg-primary)',
    color: 'var(--e-a-color-primary-bold-dark)',
    borderRadius: '0 0 var(--e-a-border-radius) 0',
    padding: '2px 8px',
    fontSize: '11px',
    fontFamily: 'var(--e-a-font-family)',
    lineHeight: '1.5',
    pointerEvents: 'none',
    zIndex: '1',
    whiteSpace: 'nowrap',
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  });
  tag.textContent = title;
  el.appendChild(tag);
}
function clearStaticStyles(el) {
  el.style.display = '';
  Object.keys(STATIC_ITEM_STYLES).forEach(prop => {
    el.style.setProperty(prop, '');
  });
}

/***/ }),

/***/ "./packages/packages/pro/editor-collection-loop/src/legacy/pagination-reconcile-sync.ts":
/*!**********************************************************************************************!*\
  !*** ./packages/packages/pro/editor-collection-loop/src/legacy/pagination-reconcile-sync.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initPaginationReconcileSync: function() { return /* binding */ initPaginationReconcileSync; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-v1-adapters */ "@elementor/editor-v1-adapters");
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pagination_sync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagination-sync */ "./packages/packages/pro/editor-collection-loop/src/legacy/pagination-sync.ts");


const ELEMENTS_ADDED_COMMANDS = ['document/elements/create', 'document/elements/import', 'document/elements/paste', 'document/elements/duplicate'];
function initPaginationReconcileSync() {
  (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__.__privateListenTo)((0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__.commandEndEvent)('editor/documents/attach-preview'), () => {
    (0,_pagination_sync__WEBPACK_IMPORTED_MODULE_1__.syncAllCollectionLoopsInDocument)();
  });
  ELEMENTS_ADDED_COMMANDS.forEach(command => {
    (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__.registerDataHook)('after', command, handleElementsAdded);
  });
}
function handleElementsAdded(_args, result) {
  if (!result) {
    return;
  }
  (0,_pagination_sync__WEBPACK_IMPORTED_MODULE_1__.syncCollectionLoopsInContainers)(result);
}

/***/ }),

/***/ "./packages/packages/pro/editor-collection-loop/src/legacy/pagination-session-storage.ts":
/*!***********************************************************************************************!*\
  !*** ./packages/packages/pro/editor-collection-loop/src/legacy/pagination-session-storage.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STORED_PAGINATION_SESSION_KEY: function() { return /* binding */ STORED_PAGINATION_SESSION_KEY; },
/* harmony export */   clearStoredPagination: function() { return /* binding */ clearStoredPagination; },
/* harmony export */   getStoredPagination: function() { return /* binding */ getStoredPagination; },
/* harmony export */   getStoredPaginationSessionKey: function() { return /* binding */ getStoredPaginationSessionKey; },
/* harmony export */   setStoredPagination: function() { return /* binding */ setStoredPagination; }
/* harmony export */ });
/* harmony import */ var _elementor_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/session */ "@elementor/session");
/* harmony import */ var _elementor_session__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_session__WEBPACK_IMPORTED_MODULE_0__);

const EDITOR_STATE_PREFIX = 'elementor/editor-state';
const STORED_PAGINATION_SESSION_KEY = 'stored-pagination';
function getStoredPaginationSessionKey(loopId) {
  return `${EDITOR_STATE_PREFIX}/${loopId}/${STORED_PAGINATION_SESSION_KEY}`;
}
function getStoredPagination(loopId) {
  return (0,_elementor_session__WEBPACK_IMPORTED_MODULE_0__.getSessionStorageItem)(getStoredPaginationSessionKey(loopId));
}
function setStoredPagination(loopId, data) {
  (0,_elementor_session__WEBPACK_IMPORTED_MODULE_0__.setSessionStorageItem)(getStoredPaginationSessionKey(loopId), data);
}
function clearStoredPagination(loopId) {
  (0,_elementor_session__WEBPACK_IMPORTED_MODULE_0__.removeSessionStorageItem)(getStoredPaginationSessionKey(loopId));
}

/***/ }),

/***/ "./packages/packages/pro/editor-collection-loop/src/legacy/pagination-settings-sync.ts":
/*!*********************************************************************************************!*\
  !*** ./packages/packages/pro/editor-collection-loop/src/legacy/pagination-settings-sync.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initPaginationSettingsSync: function() { return /* binding */ initPaginationSettingsSync; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-v1-adapters */ "@elementor/editor-v1-adapters");
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./packages/packages/pro/editor-collection-loop/src/constants.ts");
/* harmony import */ var _pagination_sync__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination-sync */ "./packages/packages/pro/editor-collection-loop/src/legacy/pagination-sync.ts");



const PAGINATION_PROP = 'pagination';
function initPaginationSettingsSync() {
  (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__.__privateListenTo)([(0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__.commandEndEvent)('document/elements/settings'), (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__.commandEndEvent)('document/elements/set-settings')], event => {
    handleSettingsChange(event);
  });
}
function handleSettingsChange(event) {
  const {
    container,
    settings
  } = event.args ?? {};
  if (!container || !settings || !(PAGINATION_PROP in settings)) {
    return;
  }
  if (container.model.get('elType') !== _constants__WEBPACK_IMPORTED_MODULE_1__.COLLECTION_LOOP_TYPE) {
    return;
  }
  (0,_pagination_sync__WEBPACK_IMPORTED_MODULE_2__.syncPaginationForLoop)(container, settings);
}

/***/ }),

/***/ "./packages/packages/pro/editor-collection-loop/src/legacy/pagination-sync.ts":
/*!************************************************************************************!*\
  !*** ./packages/packages/pro/editor-collection-loop/src/legacy/pagination-sync.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   syncAllCollectionLoopsInDocument: function() { return /* binding */ syncAllCollectionLoopsInDocument; },
/* harmony export */   syncCollectionLoopsInContainers: function() { return /* binding */ syncCollectionLoopsInContainers; },
/* harmony export */   syncPaginationForLoop: function() { return /* binding */ syncPaginationForLoop; },
/* harmony export */   syncPaginationForLoopFromContainer: function() { return /* binding */ syncPaginationForLoopFromContainer; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-elements */ "@elementor/editor-elements");
/* harmony import */ var _elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./packages/packages/pro/editor-collection-loop/src/constants.ts");
/* harmony import */ var _loop_render_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loop-render-context */ "./packages/packages/pro/editor-collection-loop/src/legacy/loop-render-context.ts");
/* harmony import */ var _pagination_session_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagination-session-storage */ "./packages/packages/pro/editor-collection-loop/src/legacy/pagination-session-storage.ts");




function syncAllCollectionLoopsInDocument() {
  const documentContainer = (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0__.getCurrentDocumentContainer)();
  if (!documentContainer) {
    return;
  }
  syncCollectionLoopsInContainers(documentContainer);
}
function syncCollectionLoopsInContainers(containers) {
  const roots = Array.isArray(containers) ? containers : [containers];
  roots.forEach(root => {
    (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0__.getAllDescendants)(root).filter(element => element.model?.get('elType') === _constants__WEBPACK_IMPORTED_MODULE_1__.COLLECTION_LOOP_TYPE).forEach(loop => syncPaginationForLoopFromContainer(loop));
  });
}
function syncPaginationForLoopFromContainer(loopContainer) {
  const settings = loopContainer.settings?.toJSON() ?? {};
  syncPaginationForLoop(loopContainer, settings, {
    stashOnDetach: false
  });
}
function syncPaginationForLoop(loopContainer, settings, options = {}) {
  const {
    stashOnDetach = true
  } = options;
  const paginationEnabled = (0,_loop_render_context__WEBPACK_IMPORTED_MODULE_2__.getPaginationEnabledFromSettings)(settings);
  const paginationChild = findDirectPaginationChild(loopContainer);
  if (paginationEnabled && !paginationChild) {
    attachPagination(loopContainer);
    return;
  }
  if (!paginationEnabled && paginationChild) {
    detachPagination(loopContainer, paginationChild, {
      stash: stashOnDetach
    });
  }
}
function findDirectPaginationChild(loopContainer) {
  const children = loopContainer.children ?? [];
  return children.find(child => child.model.get('elType') === _loop_render_context__WEBPACK_IMPORTED_MODULE_2__.PAGINATION_TYPE) ?? null;
}
function detachPagination(loopContainer, paginationContainer, options = {}) {
  const {
    stash = true
  } = options;
  if (stash) {
    (0,_pagination_session_storage__WEBPACK_IMPORTED_MODULE_3__.setStoredPagination)(loopContainer.id, paginationContainer.model.toJSON());
  }
  (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0__.deleteElement)({
    container: paginationContainer,
    options: {
      useHistory: true
    }
  });
}
function attachPagination(loopContainer) {
  const storedPagination = (0,_pagination_session_storage__WEBPACK_IMPORTED_MODULE_3__.getStoredPagination)(loopContainer.id);
  (0,_elementor_editor_elements__WEBPACK_IMPORTED_MODULE_0__.createElement)({
    container: loopContainer,
    model: buildPaginationCreateModel(storedPagination),
    options: {
      at: getPaginationInsertAt(loopContainer),
      useHistory: true
    }
  });
  if (storedPagination) {
    (0,_pagination_session_storage__WEBPACK_IMPORTED_MODULE_3__.clearStoredPagination)(loopContainer.id);
  }
}
function buildPaginationCreateModel(storedPagination) {
  if (storedPagination) {
    return {
      ...storedPagination,
      skipDefaultChildren: true
    };
  }
  return {
    elType: _loop_render_context__WEBPACK_IMPORTED_MODULE_2__.PAGINATION_TYPE,
    isLocked: true
  };
}
function getPaginationInsertAt(loopContainer) {
  const children = loopContainer.children ?? [];
  const layoutIndex = children.findIndex(child => child.model.get('elType') === _constants__WEBPACK_IMPORTED_MODULE_1__.LAYOUT_TYPE);
  return layoutIndex >= 0 ? layoutIndex + 1 : children.length;
}

/***/ }),

/***/ "./packages/packages/pro/editor-collection-loop/src/legacy/track-pagination-toggle.ts":
/*!********************************************************************************************!*\
  !*** ./packages/packages/pro/editor-collection-loop/src/legacy/track-pagination-toggle.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initTrackPaginationToggle: function() { return /* binding */ initTrackPaginationToggle; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-v1-adapters */ "@elementor/editor-v1-adapters");
/* harmony import */ var _elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./packages/packages/pro/editor-collection-loop/src/constants.ts");
/* harmony import */ var _tracking__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tracking */ "./packages/packages/pro/editor-collection-loop/src/legacy/tracking.ts");



const PAGINATION_PROP = 'pagination';
function initTrackPaginationToggle() {
  (0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__.__privateListenTo)((0,_elementor_editor_v1_adapters__WEBPACK_IMPORTED_MODULE_0__.commandEndEvent)('document/elements/settings'), e => {
    const event = e;
    const {
      container,
      settings
    } = event.args ?? {};
    if (!container || !settings) {
      return;
    }
    if (container.model?.get('elType') !== _constants__WEBPACK_IMPORTED_MODULE_1__.COLLECTION_LOOP_TYPE) {
      return;
    }
    if (!(PAGINATION_PROP in settings)) {
      return;
    }
    const paginationValue = settings[PAGINATION_PROP];
    const isOn = resolveBooleanValue(paginationValue);
    (0,_tracking__WEBPACK_IMPORTED_MODULE_2__.trackLoopAddPagination)(isOn ? 'on' : 'off');
  });
}
function resolveBooleanValue(value) {
  if (typeof value === 'boolean') {
    return value;
  }
  return value?.value ?? false;
}

/***/ }),

/***/ "./packages/packages/pro/editor-collection-loop/src/legacy/tracking.ts":
/*!*****************************************************************************!*\
  !*** ./packages/packages/pro/editor-collection-loop/src/legacy/tracking.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   trackLoopAddPagination: function() { return /* binding */ trackLoopAddPagination; },
/* harmony export */   trackLoopEnterEditMode: function() { return /* binding */ trackLoopEnterEditMode; },
/* harmony export */   trackLoopExitEditMode: function() { return /* binding */ trackLoopExitEditMode; }
/* harmony export */ });
/* harmony import */ var _elementor_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/events */ "@elementor/events");
/* harmony import */ var _elementor_events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_events__WEBPACK_IMPORTED_MODULE_0__);

const trackLoopEnterEditMode = (loopId, itemId) => (0,_elementor_events__WEBPACK_IMPORTED_MODULE_0__.trackEvent)({
  eventName: 'loop_enter_edit_mode',
  loop_id: loopId,
  item_id: itemId
});
const trackLoopExitEditMode = (loopId, itemId) => (0,_elementor_events__WEBPACK_IMPORTED_MODULE_0__.trackEvent)({
  eventName: 'loop_exit_edit_mode',
  loop_id: loopId,
  item_id: itemId
});
const trackLoopAddPagination = state => (0,_elementor_events__WEBPACK_IMPORTED_MODULE_0__.trackEvent)({
  eventName: 'loop_add_pagination',
  state
});

/***/ }),

/***/ "./packages/packages/pro/editor-collection-loop/src/legacy/utils.ts":
/*!**************************************************************************!*\
  !*** ./packages/packages/pro/editor-collection-loop/src/legacy/utils.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMemoizedView: function() { return /* binding */ getMemoizedView; }
/* harmony export */ });
function getMemoizedView(viewCreator) {
  let cachedView = null;
  if (!cachedView) {
    cachedView = viewCreator();
  }
  return cachedView;
}

/***/ }),

/***/ "./packages/packages/pro/editor-collection-loop/src/prop-types/loop-query-prop-type.ts":
/*!*********************************************************************************************!*\
  !*** ./packages/packages/pro/editor-collection-loop/src/prop-types/loop-query-prop-type.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loopQueryPropTypeUtil: function() { return /* binding */ loopQueryPropTypeUtil; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-props */ "@elementor/editor-props");
/* harmony import */ var _elementor_editor_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/schema */ "@elementor/schema");
/* harmony import */ var _elementor_schema__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_schema__WEBPACK_IMPORTED_MODULE_1__);


const unknownChildrenSchema = _elementor_schema__WEBPACK_IMPORTED_MODULE_1__.z.any().nullable();
const loopQueryPropTypeUtil = (0,_elementor_editor_props__WEBPACK_IMPORTED_MODULE_0__.createPropUtils)('loop-query', _elementor_schema__WEBPACK_IMPORTED_MODULE_1__.z.strictObject({
  template_type: unknownChildrenSchema,
  source: unknownChildrenSchema,
  selection: unknownChildrenSchema,
  include_filters: unknownChildrenSchema,
  exclude_filters: unknownChildrenSchema,
  posts_per_page: unknownChildrenSchema,
  select_date: unknownChildrenSchema,
  date_before: unknownChildrenSchema,
  date_after: unknownChildrenSchema,
  orderby: unknownChildrenSchema,
  order: unknownChildrenSchema,
  ignore_sticky_posts: unknownChildrenSchema,
  query_id: unknownChildrenSchema
}).catchall(unknownChildrenSchema));

/***/ }),

/***/ "./packages/packages/pro/editor-collection-loop/src/transformers/loop-query-transformer.ts":
/*!*************************************************************************************************!*\
  !*** ./packages/packages/pro/editor-collection-loop/src/transformers/loop-query-transformer.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loopQueryTransformer: function() { return /* binding */ loopQueryTransformer; }
/* harmony export */ });
/* harmony import */ var _elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elementor/editor-canvas */ "@elementor/editor-canvas");
/* harmony import */ var _elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementor_editor_documents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elementor/editor-documents */ "@elementor/editor-documents");
/* harmony import */ var _elementor_editor_documents__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elementor_editor_documents__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_loop_preview_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/loop-preview-api */ "./packages/packages/pro/editor-collection-loop/src/api/loop-preview-api.ts");



const loopQueryTransformer = (0,_elementor_editor_canvas__WEBPACK_IMPORTED_MODULE_0__.createTransformer)(async (value, {
  renderContext
}) => {
  const elementId = typeof renderContext?.loopElementId === 'string' ? renderContext.loopElementId : undefined;
  const documentId = (0,_elementor_editor_documents__WEBPACK_IMPORTED_MODULE_1__.getCurrentDocument)()?.id;
  return (0,_api_loop_preview_api__WEBPACK_IMPORTED_MODULE_2__.fetchLoopPreview)(value, {
    documentId,
    elementId
  });
});

/***/ }),

/***/ "./packages/packages/pro/editor-collection-loop/src/utils/is-loop-preview-context.ts":
/*!*******************************************************************************************!*\
  !*** ./packages/packages/pro/editor-collection-loop/src/utils/is-loop-preview-context.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isLoopPreviewContext: function() { return /* binding */ isLoopPreviewContext; }
/* harmony export */ });
function isLoopPreviewContext(value) {
  return Boolean(value) && Array.isArray(value?.items);
}

/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) // removed by dead control flow
{} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "react":
/*!**************************!*\
  !*** external ["React"] ***!
  \**************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!*****************************!*\
  !*** external ["ReactDOM"] ***!
  \*****************************/
/***/ (function(module) {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "@elementor/core-adapter-utils":
/*!***************************************************!*\
  !*** external ["elementorV2","coreAdapterUtils"] ***!
  \***************************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["coreAdapterUtils"];

/***/ }),

/***/ "@elementor/editor":
/*!*****************************************!*\
  !*** external ["elementorV2","editor"] ***!
  \*****************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["editor"];

/***/ }),

/***/ "@elementor/editor-canvas":
/*!***********************************************!*\
  !*** external ["elementorV2","editorCanvas"] ***!
  \***********************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["editorCanvas"];

/***/ }),

/***/ "@elementor/editor-canvas-extended":
/*!*******************************************************!*\
  !*** external ["elementorV2","editorCanvasExtended"] ***!
  \*******************************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["editorCanvasExtended"];

/***/ }),

/***/ "@elementor/editor-controls":
/*!*************************************************!*\
  !*** external ["elementorV2","editorControls"] ***!
  \*************************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["editorControls"];

/***/ }),

/***/ "@elementor/editor-documents":
/*!**************************************************!*\
  !*** external ["elementorV2","editorDocuments"] ***!
  \**************************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["editorDocuments"];

/***/ }),

/***/ "@elementor/editor-editing-panel":
/*!*****************************************************!*\
  !*** external ["elementorV2","editorEditingPanel"] ***!
  \*****************************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["editorEditingPanel"];

/***/ }),

/***/ "@elementor/editor-elements":
/*!*************************************************!*\
  !*** external ["elementorV2","editorElements"] ***!
  \*************************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["editorElements"];

/***/ }),

/***/ "@elementor/editor-panels":
/*!***********************************************!*\
  !*** external ["elementorV2","editorPanels"] ***!
  \***********************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["editorPanels"];

/***/ }),

/***/ "@elementor/editor-props":
/*!**********************************************!*\
  !*** external ["elementorV2","editorProps"] ***!
  \**********************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["editorProps"];

/***/ }),

/***/ "@elementor/editor-v1-adapters":
/*!***************************************************!*\
  !*** external ["elementorV2","editorV1Adapters"] ***!
  \***************************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["editorV1Adapters"];

/***/ }),

/***/ "@elementor/events":
/*!*****************************************!*\
  !*** external ["elementorV2","events"] ***!
  \*****************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["events"];

/***/ }),

/***/ "@elementor/http-client":
/*!*********************************************!*\
  !*** external ["elementorV2","httpClient"] ***!
  \*********************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["httpClient"];

/***/ }),

/***/ "@elementor/icons":
/*!****************************************!*\
  !*** external ["elementorV2","icons"] ***!
  \****************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["icons"];

/***/ }),

/***/ "@elementor/license-api":
/*!*********************************************!*\
  !*** external ["elementorV2","licenseApi"] ***!
  \*********************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["licenseApi"];

/***/ }),

/***/ "@elementor/schema":
/*!*****************************************!*\
  !*** external ["elementorV2","schema"] ***!
  \*****************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["schema"];

/***/ }),

/***/ "@elementor/session":
/*!******************************************!*\
  !*** external ["elementorV2","session"] ***!
  \******************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["session"];

/***/ }),

/***/ "@elementor/ui":
/*!*************************************!*\
  !*** external ["elementorV2","ui"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["elementorV2"]["ui"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
!function() {
/*!*******************************************************************!*\
  !*** ./packages/packages/pro/editor-collection-loop/src/index.ts ***!
  \*******************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: function() { return /* reexport safe */ _init__WEBPACK_IMPORTED_MODULE_0__.init; }
/* harmony export */ });
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "./packages/packages/pro/editor-collection-loop/src/init.ts");


}();
(window.elementorV2 = window.elementorV2 || {}).editorCollectionLoop = __webpack_exports__;
/******/ })()
;
window.elementorV2.editorCollectionLoop?.init?.();

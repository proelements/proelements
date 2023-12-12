"use strict";
(self["webpackChunkelementor_pro_notes"] = self["webpackChunkelementor_pro_notes"] || []).push([["notes-app"],{

/***/ "../assets/js/app/app.js":
/*!*******************************!*\
  !*** ../assets/js/app/app.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_marks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/marks */ "../assets/js/app/components/marks.js");
/* harmony import */ var _components_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/panel */ "../assets/js/app/components/panel.js");
/* harmony import */ var _query_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./query-client */ "../assets/js/app/query-client.js");
/* harmony import */ var _hooks_use_notes_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/use-notes-config */ "../assets/js/app/hooks/use-notes-config.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "../../../node_modules/react-redux/es/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-query */ "../../../node_modules/react-query/es/index.js");
/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-query/devtools */ "../../../node_modules/react-query/devtools/index.js");
/* harmony import */ var _context_elements__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./context/elements */ "../assets/js/app/context/elements.js");
/* harmony import */ var _radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @radix-ui/react-toast */ "../../../node_modules/@radix-ui/react-toast/dist/index.module.js");
/* harmony import */ var _components_ui_toast_toast_viewport__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ui/toast/toast-viewport */ "../assets/js/app/components/ui/toast/toast-viewport.js");












const store = window.top.$e.store.getReduxStore();
function App() {
  const {
      is_debug: isDebug
    } = (0,_hooks_use_notes_config__WEBPACK_IMPORTED_MODULE_4__["default"])(),
    Wrapper = isDebug ? (react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode) : (react__WEBPACK_IMPORTED_MODULE_0___default().Fragment);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, {
    store: store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_context_elements__WEBPACK_IMPORTED_MODULE_8__.ElementsProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_10__.ToastProvider, {
    duration: Infinity
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ui_toast_toast_viewport__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_query__WEBPACK_IMPORTED_MODULE_6__.QueryClientProvider, {
    client: _query_client__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_marks__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_panel__WEBPACK_IMPORTED_MODULE_2__["default"], null), isDebug && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_query_devtools__WEBPACK_IMPORTED_MODULE_7__.ReactQueryDevtools, {
    initialIsOpen: false
  }))))));
}

/***/ }),

/***/ "../assets/js/app/components/marks-edit-note-form.js":
/*!***********************************************************!*\
  !*** ../assets/js/app/components/marks-edit-note-form.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarksEditNoteForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/button */ "../assets/js/app/components/ui/button.js");
/* harmony import */ var _hooks_use_notes_mutations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-notes-mutations */ "../assets/js/app/hooks/use-notes-mutations.js");
/* harmony import */ var _marks_note_textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marks-note-textarea */ "../assets/js/app/components/marks-note-textarea.js");
/* harmony import */ var _shared_note_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/note-form */ "../assets/js/app/components/shared/note-form.js");
/* harmony import */ var _models_note__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/note */ "../assets/js/app/models/note.js");
/* harmony import */ var _hooks_use_forms_in_writing_mode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/use-forms-in-writing-mode */ "../assets/js/app/hooks/use-forms-in-writing-mode.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "../assets/js/app/utils.js");
/* harmony import */ var _hooks_use_reverse_html_entities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/use-reverse-html-entities */ "../assets/js/app/hooks/use-reverse-html-entities.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");










function MarksEditNoteForm(props) {
  const formId = `e-notes-edit-${props.note.id}`;
  const noteContent = (0,_hooks_use_reverse_html_entities__WEBPACK_IMPORTED_MODULE_8__.useReverseHtmlEntities)(props.note.content);
  const updateMutation = (0,_hooks_use_notes_mutations__WEBPACK_IMPORTED_MODULE_2__.useUpdateMutation)(),
    {
      isInWritingMode
    } = (0,_hooks_use_forms_in_writing_mode__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const onSubmit = async (e, {
    content,
    form
  }) => {
    window.top.$e.run('notes/edit', {
      noteId: props.note.id
    });
    await updateMutation.mutateAsync({
      id: props.note.id,
      values: {
        content
      }
    });
    form.reset();
    props.onClose();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_note_form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onSubmit: onSubmit,
    id: formId
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_marks_note_textarea__WEBPACK_IMPORTED_MODULE_3__["default"], {
    disabled: updateMutation.isLoading,
    defaultValue: noteContent,
    onMetaAndEnterKeyDown: e => (0,_utils__WEBPACK_IMPORTED_MODULE_7__.submitForm)(e.currentTarget.form),
    isReply: props.note.isReply()
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_note_form__WEBPACK_IMPORTED_MODULE_4__["default"].ButtonsContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    disabled: updateMutation.isLoading || !isInWritingMode(formId),
    type: "submit"
  }, __('Save', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    disabled: updateMutation.isLoading,
    variant: 'outlined',
    type: "reset",
    onClick: e => {
      window.top.$e.run('notes/cancel-edit', {
        noteId: props.note.id
      });
      e.target.form.reset();
      props.onClose(e);
    }
  }, __('Cancel', 'elementor-pro'))));
}
MarksEditNoteForm.propTypes = {
  note: PropTypes.instanceOf(_models_note__WEBPACK_IMPORTED_MODULE_5__["default"]).isRequired,
  onClose: PropTypes.func.isRequired
};

/***/ }),

/***/ "../assets/js/app/components/marks-element-portal.js":
/*!***********************************************************!*\
  !*** ../assets/js/app/components/marks-element-portal.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarksElementPortal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-portal */ "../../../node_modules/@radix-ui/react-portal/dist/index.module.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _context_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/elements */ "../assets/js/app/context/elements.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");





const StyledPortal = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_radix_ui_react_portal__WEBPACK_IMPORTED_MODULE_3__.Portal)).withConfig({
  shouldForwardProp: prop => 'position' !== prop
})`
	all: revert;

	position: absolute;
  	z-index: 98; // One under sticky elements & wp-admin-bar.
  	top: ${({
  position
}) => position?.y || 0}%;
  	left: ${({
  position
}) => position?.x || 0}%;
  	transform: translate( -25%, -100% );
`;
function MarksElementPortal(props) {
  const {
    elements
  } = (0,_context_elements__WEBPACK_IMPORTED_MODULE_1__.useElements)();
  const ref = {
    current: elements.get(props.elementId)
  };

  // Don't render marker of a non-existing element.
  if (!ref.current) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledPortal, {
    containerRef: ref,
    "data-e-notes-portal": true,
    position: props.position
  }, props.children);
}
MarksElementPortal.propTypes = {
  elementId: PropTypes.string.isRequired,
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

/***/ }),

/***/ "../assets/js/app/components/marks-new-thread-form.js":
/*!************************************************************!*\
  !*** ../assets/js/app/components/marks-new-thread-form.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarksNewThreadForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/button */ "../assets/js/app/components/ui/button.js");
/* harmony import */ var _hooks_use_notes_mutations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-notes-mutations */ "../assets/js/app/hooks/use-notes-mutations.js");
/* harmony import */ var _hooks_use_active_thread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-active-thread */ "../assets/js/app/hooks/use-active-thread.js");
/* harmony import */ var _marks_note_textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./marks-note-textarea */ "../assets/js/app/components/marks-note-textarea.js");
/* harmony import */ var _shared_note_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/note-form */ "../assets/js/app/components/shared/note-form.js");
/* harmony import */ var _hooks_use_forms_in_writing_mode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/use-forms-in-writing-mode */ "../assets/js/app/hooks/use-forms-in-writing-mode.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "../assets/js/app/utils.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");









const formId = 'e-notes-new-thread';
function MarksNewThreadForm(props) {
  const {
      clearActive,
      setActive
    } = (0,_hooks_use_active_thread__WEBPACK_IMPORTED_MODULE_3__["default"])(),
    createMutation = (0,_hooks_use_notes_mutations__WEBPACK_IMPORTED_MODULE_2__.useCreateMutation)(),
    {
      isInWritingMode
    } = (0,_hooks_use_forms_in_writing_mode__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const onSubmit = async (e, {
    content,
    form
  }) => {
    window.top.$e.run('notes/create');
    const createdThread = await createMutation.mutateAsync({
      elementId: props.elementId,
      parentId: 0,
      content,
      position: props.position
    });
    form.reset();
    setActive({
      type: _hooks_use_active_thread__WEBPACK_IMPORTED_MODULE_3__.THREAD,
      data: {
        noteId: createdThread.id
      }
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_note_form__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onSubmit: onSubmit,
    id: formId
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_marks_note_textarea__WEBPACK_IMPORTED_MODULE_4__["default"], {
    disabled: createMutation.isLoading,
    onMetaAndEnterKeyDown: e => (0,_utils__WEBPACK_IMPORTED_MODULE_7__.submitForm)(e.currentTarget.form)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_note_form__WEBPACK_IMPORTED_MODULE_5__["default"].ButtonsContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    disabled: createMutation.isLoading || !isInWritingMode(formId),
    type: "submit"
  }, __('Leave a Note', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    disabled: createMutation.isLoading,
    variant: 'outlined',
    type: "reset",
    onClick: e => {
      window.top.$e.run('notes/cancel-create');
      e.target.form.reset();
      clearActive();
    }
  }, __('Cancel', 'elementor-pro'))));
}
MarksNewThreadForm.propTypes = {
  elementId: PropTypes.string.isRequired,
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  })
};

/***/ }),

/***/ "../assets/js/app/components/marks-new-thread.js":
/*!*******************************************************!*\
  !*** ../assets/js/app/components/marks-new-thread.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarksNewThread)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/button */ "../assets/js/app/components/ui/button.js");
/* harmony import */ var _ui_marker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/marker */ "../assets/js/app/components/ui/marker.js");
/* harmony import */ var _ui_popover_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/popover/popover */ "../assets/js/app/components/ui/popover/popover.js");
/* harmony import */ var _marks_new_thread_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./marks-new-thread-form */ "../assets/js/app/components/marks-new-thread-form.js");
/* harmony import */ var _hooks_use_scroll_into_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/use-scroll-into-view */ "../assets/js/app/hooks/use-scroll-into-view.js");
/* harmony import */ var _ui_div_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/div-base */ "../assets/js/app/components/ui/div-base.js");
/* harmony import */ var _shared_note_popover_content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/note-popover-content */ "../assets/js/app/components/shared/note-popover-content.js");
/* harmony import */ var _marks_element_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./marks-element-portal */ "../assets/js/app/components/marks-element-portal.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");











const Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_ui_div_base__WEBPACK_IMPORTED_MODULE_6__["default"]))`
	display: flex !important;
	flex-direction: column !important;
	gap: 28px !important;
	padding: 20px 16px !important;
	width: 360px !important;
	border-radius: 4px !important;
`;
function MarksNewThread(props) {
  const ref = (0,_hooks_use_scroll_into_view__WEBPACK_IMPORTED_MODULE_5__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_marks_element_portal__WEBPACK_IMPORTED_MODULE_8__["default"], {
    elementId: props.elementId,
    position: props.position
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_popover_popover__WEBPACK_IMPORTED_MODULE_3__["default"], {
    defaultOpen: true,
    onOpenChange: props.onOpenChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_popover_popover__WEBPACK_IMPORTED_MODULE_3__["default"].Trigger, {
    asChild: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: 'transparent',
    ref: ref
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_marker__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "active",
    size: "md"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_note_popover_content__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_marks_new_thread_form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    elementId: props.elementId,
    position: props.position
  })))));
}
MarksNewThread.propTypes = {
  elementId: PropTypes.string.isRequired,
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }),
  onOpenChange: PropTypes.func.isRequired
};

/***/ }),

/***/ "../assets/js/app/components/marks-note-actions-delete-dialog.js":
/*!***********************************************************************!*\
  !*** ../assets/js/app/components/marks-note-actions-delete-dialog.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarksNoteActionsDeleteDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_alert_dialog_alert_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/alert-dialog/alert-dialog */ "../assets/js/app/components/ui/alert-dialog/alert-dialog.js");
/* harmony import */ var _models_note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/note */ "../assets/js/app/models/note.js");
/* harmony import */ var _hooks_use_watch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-watch */ "../assets/js/app/hooks/use-watch.js");
/* harmony import */ var _hooks_use_notes_mutations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/use-notes-mutations */ "../assets/js/app/hooks/use-notes-mutations.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");






function MarksNoteActionsDeleteDialog(props) {
  const deleteMutation = (0,_hooks_use_notes_mutations__WEBPACK_IMPORTED_MODULE_4__.useDeleteMutation)();
  (0,_hooks_use_watch__WEBPACK_IMPORTED_MODULE_3__["default"])(() => {
    if (props.onLoadingChange) {
      props.onLoadingChange(deleteMutation.isLoading);
    }
  }, [deleteMutation.isLoading]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_alert_dialog_alert_dialog__WEBPACK_IMPORTED_MODULE_1__["default"], {
    open: props.isOpen,
    onOpenChange: props.onOpenChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_alert_dialog_alert_dialog__WEBPACK_IMPORTED_MODULE_1__["default"].Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_alert_dialog_alert_dialog__WEBPACK_IMPORTED_MODULE_1__["default"].DescriptionContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_alert_dialog_alert_dialog__WEBPACK_IMPORTED_MODULE_1__["default"].Title, null, props.note.isReply() ? __('Delete this reply?', 'elementor-pro') : __('Delete this note?', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_alert_dialog_alert_dialog__WEBPACK_IMPORTED_MODULE_1__["default"].Description, null, props.note.isReply() ? __('Deleted replies can\'t be recovered.', 'elementor-pro') : __('Deleted notes can\'t be recovered.', 'elementor-pro'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_alert_dialog_alert_dialog__WEBPACK_IMPORTED_MODULE_1__["default"].ActionsContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_alert_dialog_alert_dialog__WEBPACK_IMPORTED_MODULE_1__["default"].Cancel, null, __('Cancel', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_alert_dialog_alert_dialog__WEBPACK_IMPORTED_MODULE_1__["default"].Action, {
    onClick: () => {
      window.top.$e.run('notes/delete', {
        noteId: props.note.id
      });
      deleteMutation.mutateAsync({
        id: props.note.id,
        parentId: props.note.parentId,
        force: true
      });
    }
  }, __('Delete', 'elementor-pro')))));
}
MarksNoteActionsDeleteDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onOpenChange: PropTypes.func.isRequired,
  note: PropTypes.instanceOf(_models_note__WEBPACK_IMPORTED_MODULE_2__["default"]),
  onLoadingChange: PropTypes.func
};

/***/ }),

/***/ "../assets/js/app/components/marks-note-actions-read.js":
/*!**************************************************************!*\
  !*** ../assets/js/app/components/marks-note-actions-read.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarksNoteActionsRead)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/dropdown/dropdown */ "../assets/js/app/components/ui/dropdown/dropdown.js");
/* harmony import */ var _hooks_use_notes_mutations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-notes-mutations */ "../assets/js/app/hooks/use-notes-mutations.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");




function MarksNoteActionsRead(props) {
  const alreadyRead = props.note.isRead,
    readMutation = (0,_hooks_use_notes_mutations__WEBPACK_IMPORTED_MODULE_2__.useReadMutation)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_1__["default"].Item, {
    icon: "eicon-envelope",
    disabled: readMutation.isLoading,
    onSelect: () => readMutation.mutateAsync({
      ids: [props.note.id, props.note.parentId],
      isRead: !alreadyRead
    })
  }, alreadyRead ? __('Mark as unread', 'elementor-pro') : __('Mark as read', 'elementor-pro'));
}
MarksNoteActionsRead.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number,
    parentId: PropTypes.number,
    isRead: PropTypes.bool
  }).isRequired
};

/***/ }),

/***/ "../assets/js/app/components/marks-note-actions-resolve.js":
/*!*****************************************************************!*\
  !*** ../assets/js/app/components/marks-note-actions-resolve.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarksNoteActionsResolve)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_icon_button_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/icon-button/icon-button */ "../assets/js/app/components/ui/icon-button/icon-button.js");
/* harmony import */ var _components_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ui/tooltip/tooltip */ "../assets/js/app/components/ui/tooltip/tooltip.js");
/* harmony import */ var _hooks_use_notes_mutations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-notes-mutations */ "../assets/js/app/hooks/use-notes-mutations.js");
/* harmony import */ var _hooks_use_watch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/use-watch */ "../assets/js/app/hooks/use-watch.js");
/* harmony import */ var _hooks_use_active_thread__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/use-active-thread */ "../assets/js/app/hooks/use-active-thread.js");
/* harmony import */ var _models_note__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/note */ "../assets/js/app/models/note.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");








function MarksNoteActionsResolve(props) {
  const alreadyResolved = props.note.isResolved,
    resolveMutation = (0,_hooks_use_notes_mutations__WEBPACK_IMPORTED_MODULE_3__.useResolveMutation)(),
    {
      clearActive
    } = (0,_hooks_use_active_thread__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_hooks_use_watch__WEBPACK_IMPORTED_MODULE_4__["default"])(() => {
    if (props.onLoadingChange) {
      props.onLoadingChange(resolveMutation.isLoading);
    }
  }, [resolveMutation.isLoading]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"].Trigger, {
    asChild: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_icon_button_icon_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: alreadyResolved ? 'eicon-check-circle-o' : 'eicon-check',
    disabled: resolveMutation.isLoading,
    onClick: async () => {
      const isResolved = !alreadyResolved;
      if (isResolved) {
        window.top.$e.run('notes/resolve', {
          noteId: props.note.id
        });
      } else {
        window.top.$e.run('notes/re-open', {
          noteId: props.note.id
        });
      }
      await resolveMutation.mutateAsync({
        id: props.note.id,
        isResolved
      });
      if (isResolved) {
        clearActive(props.note.id);
      }
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"].Content, null, alreadyResolved ? __('Re-open', 'elementor-pro') : __('Resolve', 'elementor-pro'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"].Arrow, null)));
}
MarksNoteActionsResolve.propTypes = {
  note: PropTypes.instanceOf(_models_note__WEBPACK_IMPORTED_MODULE_6__["default"]).isRequired,
  onLoadingChange: PropTypes.func
};

/***/ }),

/***/ "../assets/js/app/components/marks-note-actions-show-readers.js":
/*!**********************************************************************!*\
  !*** ../assets/js/app/components/marks-note-actions-show-readers.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarksNoteActionsShowReaders)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ui/tooltip/tooltip */ "../assets/js/app/components/ui/tooltip/tooltip.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ui_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/icon */ "../assets/js/app/components/ui/icon.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");





const TooltipContent = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_components_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_1__["default"].Content)`
  max-width: 200px;
`;
const Icon = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_ui_icon__WEBPACK_IMPORTED_MODULE_2__["default"]))`
  padding: 4px !important;
  color: #a4afb7 !important;
  transition: 0.2s all !important;
  display: grid !important;
  place-items: center !important;
  font-size: 18px !important;
  border-radius: 100% !important;

  &:hover, &:focus {
    color: #6d7882;
	outline: none;
	background: #f1f3f5;
  }
`;
function MarksNoteActionsShowReaders(props) {
  if (0 === props.readers.length) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_1__["default"], {
    delayDuration: 400
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_1__["default"].Trigger, {
    asChild: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Icon, {
    className: "eicon-preview-medium",
    tabIndex: 0
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TooltipContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, __('Seen by', 'elementor-pro') + ': '), props.readers.map(reader => reader.name).join(', '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_1__["default"].Arrow, null)));
}
MarksNoteActionsShowReaders.propTypes = {
  readers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string
  })).isRequired
};

/***/ }),

/***/ "../assets/js/app/components/marks-note-actions.js":
/*!*********************************************************!*\
  !*** ../assets/js/app/components/marks-note-actions.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarksNoteActions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/dropdown/dropdown */ "../assets/js/app/components/ui/dropdown/dropdown.js");
/* harmony import */ var _ui_icon_button_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/icon-button/icon-button */ "../assets/js/app/components/ui/icon-button/icon-button.js");
/* harmony import */ var _marks_note_actions_delete_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marks-note-actions-delete-dialog */ "../assets/js/app/components/marks-note-actions-delete-dialog.js");
/* harmony import */ var _marks_note_actions_read__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./marks-note-actions-read */ "../assets/js/app/components/marks-note-actions-read.js");
/* harmony import */ var _marks_note_actions_resolve__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./marks-note-actions-resolve */ "../assets/js/app/components/marks-note-actions-resolve.js");
/* harmony import */ var _marks_note_actions_show_readers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./marks-note-actions-show-readers */ "../assets/js/app/components/marks-note-actions-show-readers.js");
/* harmony import */ var _hooks_use_notes_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/use-notes-config */ "../assets/js/app/hooks/use-notes-config.js");
/* harmony import */ var _hooks_use_user_can__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/use-user-can */ "../assets/js/app/hooks/use-user-can.js");
/* harmony import */ var _services_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/copy-to-clipboard */ "../assets/js/services/copy-to-clipboard/index.js");
/* harmony import */ var _marks_thread__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./marks-thread */ "../assets/js/app/components/marks-thread.js");
/* harmony import */ var _models_note__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../models/note */ "../assets/js/app/models/note.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");














function MarksNoteActions(props) {
  const {
      direction
    } = (0,_hooks_use_notes_config__WEBPACK_IMPORTED_MODULE_7__["default"])(),
    {
      setIsDisabled
    } = (0,_marks_thread__WEBPACK_IMPORTED_MODULE_10__.useMarksThreadContext)(),
    [isDeleteDialogOpen, setIsDeleteDialogOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    canDeleteNote = (0,_hooks_use_user_can__WEBPACK_IMPORTED_MODULE_8__["default"])(_hooks_use_user_can__WEBPACK_IMPORTED_MODULE_8__.CAPABILITY_DELETE, props.note),
    canEditNote = (0,_hooks_use_user_can__WEBPACK_IMPORTED_MODULE_8__["default"])(_hooks_use_user_can__WEBPACK_IMPORTED_MODULE_8__.CAPABILITY_EDIT, props.note),
    canResolveNote = props.note.isThread() && canEditNote,
    shouldRenderDropdown = canEditNote || canDeleteNote || props.note.isThread();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => setIsDisabled(false);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, canResolveNote && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_marks_note_actions_resolve__WEBPACK_IMPORTED_MODULE_5__["default"], {
    note: props.note,
    onLoadingChange: isLoading => setIsDisabled(isLoading)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_marks_note_actions_show_readers__WEBPACK_IMPORTED_MODULE_6__["default"], {
    readers: props.note.readers
  }), shouldRenderDropdown && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_1__["default"], {
    modal: false,
    dir: direction,
    onOpenChange: isOpen => {
      if (isOpen) {
        window.top.$e.run('notes/open-note-actions');
      } else {
        window.top.$e.run('notes/close-note-actions');
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_1__["default"].Trigger, {
    asChild: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_icon_button_icon_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "eicon-ellipsis-h"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_1__["default"].Content, {
    align: "end"
  }, props.note.isThread() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_marks_note_actions_read__WEBPACK_IMPORTED_MODULE_4__["default"], {
    note: props.note
  }), canEditNote && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_1__["default"].Item, {
    onSelect: () => props.setIsEditMode(true),
    icon: "eicon-edit"
  }, __('Edit', 'elementor-pro')), props.note.isThread() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_1__["default"].Item, {
    onSelect: () => {
      window.top.$e.run('notes/copy-link', {
        id: props.note.id
      });
    },
    icon: "eicon-copy",
    disabled: !(0,_services_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_9__.canCopyToClipboard)(),
    tooltip: !(0,_services_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_9__.canCopyToClipboard)() && __('Supported in "https" sites only', 'elementor-pro')
  }, __('Copy Link', 'elementor-pro')), canDeleteNote && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_1__["default"].Separator, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_1__["default"].Item, {
    onSelect: () => setIsDeleteDialogOpen(true),
    icon: "eicon-trash",
    variant: "danger"
  }, __('Delete', 'elementor-pro'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_1__["default"].Arrow, null))), canDeleteNote && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_marks_note_actions_delete_dialog__WEBPACK_IMPORTED_MODULE_3__["default"], {
    note: props.note,
    isOpen: isDeleteDialogOpen,
    onOpenChange: setIsDeleteDialogOpen,
    onLoadingChange: isLoading => setIsDisabled(isLoading)
  }));
}
MarksNoteActions.propTypes = {
  note: PropTypes.instanceOf(_models_note__WEBPACK_IMPORTED_MODULE_11__["default"]).isRequired,
  setIsEditMode: PropTypes.func.isRequired
};

/***/ }),

/***/ "../assets/js/app/components/marks-note-textarea.js":
/*!**********************************************************!*\
  !*** ../assets/js/app/components/marks-note-textarea.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarksNoteTextarea)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/textarea */ "../assets/js/app/components/ui/textarea.js");
/* harmony import */ var _hooks_use_auto_focus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-auto-focus */ "../assets/js/app/hooks/use-auto-focus.js");
/* harmony import */ var _mentions_mentions_user_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mentions/mentions-user-list */ "../assets/js/app/components/mentions/mentions-user-list.js");
/* harmony import */ var _ui_typeahead_typeahead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/typeahead/typeahead */ "../assets/js/app/components/ui/typeahead/typeahead.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ "../../../node_modules/react-query/es/index.js");
/* harmony import */ var _query_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../query-client */ "../assets/js/app/query-client.js");
/* harmony import */ var _ui_div_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/div-base */ "../assets/js/app/components/ui/div-base.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");










const Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_ui_div_base__WEBPACK_IMPORTED_MODULE_7__["default"]))`
  position: relative;
`;
function MarksNoteTextarea(props) {
  const ref = (0,_hooks_use_auto_focus__WEBPACK_IMPORTED_MODULE_2__["default"])(props.defaultValue),
    placeholder = props.isReply ? __('Type your reply. Use @ to mention...', 'elementor-pro') : __('Type a note. Use @ to mention...', 'elementor-pro');
  const fragment = ({
    search
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClientProvider, {
    client: _query_client__WEBPACK_IMPORTED_MODULE_6__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mentions_mentions_user_list__WEBPACK_IMPORTED_MODULE_3__["default"], {
    search: search
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_typeahead_typeahead__WEBPACK_IMPORTED_MODULE_4__["default"], {
    debounce: 250,
    fragment: fragment,
    onSelect: () => window.top.$e.run('notes/choose-mention')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_textarea__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "content",
    placeholder: placeholder,
    onKeyDown: e => {
      if (props.onMetaAndEnterKeyDown && (e.metaKey || e.ctrlKey) && 'enter' === e.key.toLowerCase()) {
        props.onMetaAndEnterKeyDown(e);
      }
    },
    disabled: props.disabled,
    ref: ref,
    defaultValue: props.defaultValue,
    onChange: props.onChange,
    rows: 1,
    maxRows: 6,
    autoSize: true
  })));
}
MarksNoteTextarea.propTypes = {
  name: PropTypes.string,
  disabled: PropTypes.bool,
  onMetaAndEnterKeyDown: PropTypes.func,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  isReply: PropTypes.bool.isRequired
};
MarksNoteTextarea.defaultProps = {
  isReply: false
};

/***/ }),

/***/ "../assets/js/app/components/marks-note-view-external-indicator.js":
/*!*************************************************************************!*\
  !*** ../assets/js/app/components/marks-note-view-external-indicator.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarksNoteViewExternalIndicator)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_use_notes_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/use-notes-config */ "../assets/js/app/hooks/use-notes-config.js");
/* harmony import */ var _models_note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/note */ "../assets/js/app/models/note.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");





const Text = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p`
  all: revert;

  color: #a4afb6 !important;
  margin: 0 !important;
  padding: 0 !important;
  font-family: Roboto, sans-serif !important;
  font-size: 10px !important;
  font-weight: normal !important;
  text-transform: none !important;
  font-style: normal !important;
  text-decoration: none !important;
  line-height: 1.5 !important;
  letter-spacing: normal !important;
  word-spacing: normal !important;
`;
const Strong = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].strong`
  font-weight: 500;
`;

// Responsible for showing an indicator if the note was created in another route or post.
function MarksNoteViewExternalIndicator(props) {
  const {
      route: currentRoute
    } = (0,_hooks_use_notes_config__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    isSameDocument = props.note.document?.id === currentRoute.post_id,
    isSameRoute = props.note.routeUrl === currentRoute.url;

  // If the document is not loaded on the note or the route and the document are the same the current route
  // and current document, this component should not render anything.
  if (!props.note.document || isSameDocument && isSameRoute) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Text, null, __('Noted on:', 'elementor-pro'), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Strong, null, isSameDocument ? props.note.routeTitle : props.note.document.typeTitle));
}
MarksNoteViewExternalIndicator.propTypes = {
  note: PropTypes.instanceOf(_models_note__WEBPACK_IMPORTED_MODULE_2__["default"]).isRequired
};

/***/ }),

/***/ "../assets/js/app/components/marks-note-view.js":
/*!******************************************************!*\
  !*** ../assets/js/app/components/marks-note-view.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarksNoteView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/avatar */ "../assets/js/app/components/ui/avatar.js");
/* harmony import */ var _marks_note_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./marks-note-actions */ "../assets/js/app/components/marks-note-actions.js");
/* harmony import */ var _marks_edit_note_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marks-edit-note-form */ "../assets/js/app/components/marks-edit-note-form.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _models_note__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/note */ "../assets/js/app/models/note.js");
/* harmony import */ var _shared_note_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/note-content */ "../assets/js/app/components/shared/note-content/index.js");
/* harmony import */ var _marks_note_view_external_indicator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./marks-note-view-external-indicator */ "../assets/js/app/components/marks-note-view-external-indicator.js");
/* harmony import */ var _ui_div_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/div-base */ "../assets/js/app/components/ui/div-base.js");
/* harmony import */ var _hooks_use_reverse_html_entities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/use-reverse-html-entities */ "../assets/js/app/hooks/use-reverse-html-entities.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");












const sizesMap = {
  sm: {
    text: 9
  },
  md: {
    text: 12
  }
};
const Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_ui_div_base__WEBPACK_IMPORTED_MODULE_7__["default"]))`
  --color-gray-500: #a4afb6;
  --color-gray-600: #6d7882;

  display: flex !important;
  align-items: start !important;
  gap: 12px !important;

  &, & *:not( [class*="eicon"] ) {
    font-family: Roboto, sans-serif !important;
  }
`;
const Body = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_ui_div_base__WEBPACK_IMPORTED_MODULE_7__["default"]))`
  display: flex !important;
  flex-direction: column !important;
  gap: 12px !important;
  flex-grow: 1 !important;
  line-height: 1 !important;
`;
const Header = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_ui_div_base__WEBPACK_IMPORTED_MODULE_7__["default"]))`
  display: flex !important;
  gap: 10px !important;
  padding-top: 4px !important;
  line-height: 1 !important;
`;
const HeaderMeta = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_ui_div_base__WEBPACK_IMPORTED_MODULE_7__["default"]))`
  display: flex !important;
  flex-direction: column !important;
  gap: 5px !important;
  flex-grow: 1 !important;
  line-height: 1 !important;
`;
const HeaderActions = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_ui_div_base__WEBPACK_IMPORTED_MODULE_7__["default"]))`
  display: flex !important;
  gap: 5px !important;
  flex-shrink: 0 !important;
  align-items: center !important;
  line-height: 1 !important;
`;
const Text = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].span`
  color: var(${({
  muted
}) => muted ? '--color-gray-500' : '--color-gray-600'}) !important;
  margin: 0 !important;
  padding: 0 !important;

  ${({
  size
}) => size && (0,styled_components__WEBPACK_IMPORTED_MODULE_9__.css)`
	font-size: ${sizesMap[size].text}px !important;
  `};

  ${({
  weight
}) => weight && (0,styled_components__WEBPACK_IMPORTED_MODULE_9__.css)`
	font-weight: ${weight} !important;
  `};

  ${({
  lineHeight
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_9__.css)`
	line-height: ${lineHeight || 1} !important;
  `};
`;
function MarksNoteView(props) {
  const [isEditMode, setIsEditMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    noteContent = (0,_hooks_use_reverse_html_entities__WEBPACK_IMPORTED_MODULE_8__.useReverseHtmlEntities)(props.note.content);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_avatar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: 'md',
    src: props.note.author.avatarUrls['48']
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HeaderMeta, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Text, {
    size: 'md',
    weight: 500
  }, props.note.author.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Text, {
    size: 'sm',
    lineHeight: 1.5,
    muted: true
  }, props.note.getFormattedCreatedAt())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HeaderActions, null, !isEditMode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_marks_note_actions__WEBPACK_IMPORTED_MODULE_2__["default"], {
    note: props.note,
    setIsEditMode: setIsEditMode
  }))), !isEditMode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_note_content__WEBPACK_IMPORTED_MODULE_5__["default"], null, noteContent), isEditMode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_marks_edit_note_form__WEBPACK_IMPORTED_MODULE_3__["default"], {
    note: props.note,
    onClose: () => setIsEditMode(false)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_marks_note_view_external_indicator__WEBPACK_IMPORTED_MODULE_6__["default"], {
    note: props.note
  })));
}
MarksNoteView.propTypes = {
  note: PropTypes.instanceOf(_models_note__WEBPACK_IMPORTED_MODULE_4__["default"]).isRequired
};

/***/ }),

/***/ "../assets/js/app/components/marks-reply-form.js":
/*!*******************************************************!*\
  !*** ../assets/js/app/components/marks-reply-form.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarksReplyForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/button */ "../assets/js/app/components/ui/button.js");
/* harmony import */ var _hooks_use_notes_mutations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-notes-mutations */ "../assets/js/app/hooks/use-notes-mutations.js");
/* harmony import */ var _marks_note_textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marks-note-textarea */ "../assets/js/app/components/marks-note-textarea.js");
/* harmony import */ var _shared_note_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/note-form */ "../assets/js/app/components/shared/note-form.js");
/* harmony import */ var _hooks_use_active_thread__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/use-active-thread */ "../assets/js/app/hooks/use-active-thread.js");
/* harmony import */ var _hooks_use_forms_in_writing_mode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/use-forms-in-writing-mode */ "../assets/js/app/hooks/use-forms-in-writing-mode.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "../assets/js/app/utils.js");
/* harmony import */ var _models_note__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/note */ "../assets/js/app/models/note.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");










function MarksReplyForm(props) {
  const formId = `e-notes-new-reply-for-${props.thread.id}`;
  const createMutation = (0,_hooks_use_notes_mutations__WEBPACK_IMPORTED_MODULE_2__.useCreateMutation)(),
    {
      clearActive
    } = (0,_hooks_use_active_thread__WEBPACK_IMPORTED_MODULE_5__["default"])(),
    {
      isInWritingMode
    } = (0,_hooks_use_forms_in_writing_mode__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const onSubmit = async (e, {
    content,
    form
  }) => {
    window.top.$e.run('notes/reply', {
      parentId: props.thread.id
    });
    await createMutation.mutateAsync({
      elementId: props.thread.elementId,
      parentId: props.thread.id,
      content
    });
    form.reset();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_note_form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: formId,
    onSubmit: onSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_marks_note_textarea__WEBPACK_IMPORTED_MODULE_3__["default"], {
    disabled: createMutation.isLoading,
    onMetaAndEnterKeyDown: e => (0,_utils__WEBPACK_IMPORTED_MODULE_7__.submitForm)(e.currentTarget.form),
    isReply: true
  }), isInWritingMode(formId) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_note_form__WEBPACK_IMPORTED_MODULE_4__["default"].ButtonsContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    disabled: createMutation.isLoading,
    type: "submit"
  }, __('Reply', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    disabled: createMutation.isLoading,
    variant: 'outlined',
    type: "reset",
    onClick: e => {
      window.top.$e.run('notes/cancel-reply', {
        parentId: props.thread.id
      });
      e.target.form.reset();
      clearActive();
    }
  }, __('Cancel', 'elementor-pro'))));
}
MarksReplyForm.propTypes = {
  thread: PropTypes.instanceOf(_models_note__WEBPACK_IMPORTED_MODULE_8__["default"])
};

/***/ }),

/***/ "../assets/js/app/components/marks-thread-view.js":
/*!********************************************************!*\
  !*** ../assets/js/app/components/marks-thread-view.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarksThreadView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _marks_note_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./marks-note-view */ "../assets/js/app/components/marks-note-view.js");
/* harmony import */ var _hooks_use_note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-note */ "../assets/js/app/hooks/use-note.js");
/* harmony import */ var _hooks_use_notes_mutations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-notes-mutations */ "../assets/js/app/hooks/use-notes-mutations.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _marks_reply_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./marks-reply-form */ "../assets/js/app/components/marks-reply-form.js");
/* harmony import */ var _ui_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/icon */ "../assets/js/app/components/ui/icon.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");









const Loader = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_ui_icon__WEBPACK_IMPORTED_MODULE_5__["default"])).attrs({
  className: 'eicon-loading eicon-animation-spin'
})`
  align-self: center !important;
  color: #a4afb6 !important;
`;
const Error = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].p`
  all: revert;

  font-family: Roboto, sans-serif !important;
  font-size: 12px !important;
  font-weight: normal !important;
  text-transform: none !important;
  font-style: normal !important;
  text-decoration: none !important;
  line-height: normal !important;
  letter-spacing: normal !important;
  word-spacing: normal !important;
  color: #6d7882 !important;
  margin: 0 !important;
  padding: 0 !important;
`;
function MarksThreadView(props) {
  const {
      isLoading,
      isPlaceholderData,
      isFetching,
      data: thread,
      isSuccess,
      isError
    } = (0,_hooks_use_note__WEBPACK_IMPORTED_MODULE_2__["default"])(props.threadId),
    hasReplies = 0 !== thread.repliesCount;

  // Set read status.
  useSetReadStatus({
    thread,
    shouldTrigger: isSuccess && !isPlaceholderData && !isFetching
  });
  if (isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Loader, null);
  }
  if (isError) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Error, null, __('Something went wrong.', 'elementor-pro'));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_marks_note_view__WEBPACK_IMPORTED_MODULE_1__["default"], {
    note: thread,
    key: thread.id
  }),
  // Show a loader until the replies are loaded.
  hasReplies && isPlaceholderData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Loader, null), thread.replies.map(reply => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_marks_note_view__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: reply.id,
    note: reply
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_marks_reply_form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    thread: thread
  }));
}

// Hook to set Thread (& replies) read status.
function useSetReadStatus({
  thread,
  shouldTrigger
}) {
  // Flag to run the hook action once and prevent unnecessary calculations / requests.
  const didRunOnce = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false),
    readMutation = (0,_hooks_use_notes_mutations__WEBPACK_IMPORTED_MODULE_3__.useReadMutation)();

  // Set thread as read.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (didRunOnce.current || !shouldTrigger) {
      return;
    }
    const ids = [thread, ...(thread.replies || [])].filter(note => !note.isRead).map(note => note.id);
    if (0 !== ids.length) {
      readMutation.mutate({
        ids,
        isRead: true
      });
    }
    didRunOnce.current = true;
  }, [thread, shouldTrigger]);
}
MarksThreadView.propTypes = {
  threadId: PropTypes.number.isRequired
};

/***/ }),

/***/ "../assets/js/app/components/marks-thread.js":
/*!***************************************************!*\
  !*** ../assets/js/app/components/marks-thread.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Context: () => (/* binding */ Context),
/* harmony export */   "default": () => (/* binding */ MarksThread),
/* harmony export */   useMarksThreadContext: () => (/* binding */ useMarksThreadContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/button */ "../assets/js/app/components/ui/button.js");
/* harmony import */ var _ui_marker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/marker */ "../assets/js/app/components/ui/marker.js");
/* harmony import */ var _ui_popover_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/popover/popover */ "../assets/js/app/components/ui/popover/popover.js");
/* harmony import */ var _marks_thread_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./marks-thread-view */ "../assets/js/app/components/marks-thread-view.js");
/* harmony import */ var _hooks_use_new_thread_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/use-new-thread-events */ "../assets/js/app/hooks/use-new-thread-events.js");
/* harmony import */ var _hooks_use_scroll_into_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/use-scroll-into-view */ "../assets/js/app/hooks/use-scroll-into-view.js");
/* harmony import */ var _models_note__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/note */ "../assets/js/app/models/note.js");
/* harmony import */ var _ui_div_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/div-base */ "../assets/js/app/components/ui/div-base.js");
/* harmony import */ var _shared_note_popover_content__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/note-popover-content */ "../assets/js/app/components/shared/note-popover-content.js");
/* harmony import */ var _marks_element_portal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./marks-element-portal */ "../assets/js/app/components/marks-element-portal.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");














const Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_11__["default"])((0,_ui_div_base__WEBPACK_IMPORTED_MODULE_8__["default"]))`
  display: flex !important;
  flex-direction: column !important;
  gap: 28px !important;
  padding: 20px 16px !important;
  width: 360px !important;
  border-radius: 4px !important;
  transition: 0.3s all !important;

  ${({
  disabled
}) => disabled && (0,styled_components__WEBPACK_IMPORTED_MODULE_11__.css)`
	opacity: 0.5;
	pointer-events: none;
  `}
`;
const Context = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
function useMarksThreadContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);
}
function MarksThread(props) {
  const [isDisabled, setIsDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    ref = (0,_hooks_use_scroll_into_view__WEBPACK_IMPORTED_MODULE_6__["default"])(props.isActive);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_marks_element_portal__WEBPACK_IMPORTED_MODULE_10__["default"], {
    elementId: props.note.elementId,
    position: props.note.position
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_popover_popover__WEBPACK_IMPORTED_MODULE_3__["default"], {
    open: props.isActive,
    onOpenChange: props.onOpenChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_popover_popover__WEBPACK_IMPORTED_MODULE_3__["default"].Trigger, {
    asChild: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: 'transparent',
    className: _hooks_use_new_thread_events__WEBPACK_IMPORTED_MODULE_5__.DISABLE_NEW_THREAD
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_marker__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ref: ref,
    variant: props.isActive || props.note.isUnreadThread() ? 'solid' : 'ghost',
    size: 'md',
    muted: props.note.isResolved
  }, props.note.id))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_note_popover_content__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Container, {
    disabled: isDisabled
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Context.Provider, {
    value: {
      isDisabled,
      setIsDisabled
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_marks_thread_view__WEBPACK_IMPORTED_MODULE_4__["default"], {
    threadId: props.note.id
  }))))));
}
MarksThread.propTypes = {
  note: PropTypes.instanceOf(_models_note__WEBPACK_IMPORTED_MODULE_7__["default"]).isRequired,
  onOpenChange: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
};

/***/ }),

/***/ "../assets/js/app/components/marks.js":
/*!********************************************!*\
  !*** ../assets/js/app/components/marks.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Marks)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _marks_thread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./marks-thread */ "../assets/js/app/components/marks-thread.js");
/* harmony import */ var _marks_new_thread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./marks-new-thread */ "../assets/js/app/components/marks-new-thread.js");
/* harmony import */ var _hooks_use_active_thread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-active-thread */ "../assets/js/app/hooks/use-active-thread.js");
/* harmony import */ var _hooks_use_notes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/use-notes */ "../assets/js/app/hooks/use-notes.js");
/* harmony import */ var _hooks_use_new_thread_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/use-new-thread-events */ "../assets/js/app/hooks/use-new-thread-events.js");







function Marks() {
  const {
      data: notes = []
    } = (0,_hooks_use_notes__WEBPACK_IMPORTED_MODULE_4__["default"])(),
    {
      activeThread,
      clearActive,
      setActive,
      isThreadActive
    } = (0,_hooks_use_active_thread__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_hooks_use_new_thread_events__WEBPACK_IMPORTED_MODULE_5__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, notes.map(note => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_marks_thread__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: note.id,
    note: note,
    isActive: isThreadActive(note.id),
    onOpenChange: isOpen => {
      if (!isOpen) {
        clearActive(note.id);
        return;
      }
      setActive({
        type: _hooks_use_active_thread__WEBPACK_IMPORTED_MODULE_3__.THREAD,
        data: {
          noteId: note.id
        }
      });
    }
  })), _hooks_use_active_thread__WEBPACK_IMPORTED_MODULE_3__.NEW_THREAD === activeThread?.type && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_marks_new_thread__WEBPACK_IMPORTED_MODULE_2__["default"], {
    elementId: activeThread.data.elementId,
    position: activeThread.data.position,
    onOpenChange: isOpen => {
      if (!isOpen) {
        clearActive();
      }
    }
  }));
}

/***/ }),

/***/ "../assets/js/app/components/mentions/mentions-user-disabled.js":
/*!**********************************************************************!*\
  !*** ../assets/js/app/components/mentions/mentions-user-disabled.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MentionsUserDisabled)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/user */ "../assets/js/app/models/user.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _hooks_use_notes_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-notes-config */ "../assets/js/app/hooks/use-notes-config.js");
/* harmony import */ var _hooks_use_user_can__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-user-can */ "../assets/js/app/hooks/use-user-can.js");
/* harmony import */ var _ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/tooltip/tooltip */ "../assets/js/app/components/ui/tooltip/tooltip.js");
/* harmony import */ var _ui_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/icon */ "../assets/js/app/components/ui/icon.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");








const UserDisabledTooltip = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div`
	display: flex !important;
	position: absolute !important;
	width: 100% !important;
	height: 100% !important;
	inset-inline-start: 0 !important;
	margin: 0 !important;
	padding: 0 !important;
	font-size: 11px !important;

	// Fixes bug with the position of Popover with portalled=false inside another Popover
	// @see https://github.com/radix-ui/primitives/issues/370
	[data-radix-popper-content-wrapper] {
		transform: translateY(-100%) !important;
		top: 10px !important;
		inset-inline-start: auto !important;
		inset-inline-end: -10px !important;
	}
`;
const TooltipShadow = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div`
	overflow: hidden !important;
	position: relative !important;
	flex: 1 !important;
	height: 100% !important;

	&::before {
		content: '' !important;
		position: absolute !important;
		width: 100vw !important;
		height: 100vh !important;
		top: 50% !important;
		transform: translateY(-50%) !important;
		inset-inline-end: 0 !important;
		box-shadow: inset 0 0 60px 40px #f1f3f5 !important;
	}
`;
const TooltipTriggerText = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div`
	display: inline-flex !important;
	align-items: center !important;
	white-space: pre-wrap !important;
	padding: 10px !important;
	background: #f1f3f5 !important;
`;
const SetPermissionsLink = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].a.attrs(() => ({
  target: '_blank',
  rel: 'noreferrer'
}))`
	color: #6d7882 !important;
	background: #f1f3f5 !important;
	padding: 10px !important;
	display: inline-flex !important;
	align-items: center !important;

	&:hover,
	&:focus {
		color: #58d0f5 !important;
		text-decoration: none !important;
	}
`;
const TooltipContent = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_4__["default"].Content)`
	background: #ffffff !important;
	color: #6d7882 !important;
	line-height: 1.3 !important;
	font-style: italic !important;
	padding: 12px !important;
	box-shadow: 0 1px 20px rgba(0, 0, 0, 0.15) !important;
	max-width: 262px !important;
	box-sizing: border-box !important;

	&::after {
		content: '' !important;
		position: absolute !important;
		width: 10px !important;
		height: 10px !important;
		border: 5px solid transparent !important;
		border-top-color: #ffffff !important;
		bottom: -9px !important;
		inset-inline-end: 20px !important;
	}
`;
const LearnMoreLink = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].a.attrs(() => ({
  target: '_blank'
}))`
	all: revert;
	display: block !important;
	text-decoration: none !important;
	color: #58d0f5 !important;

	&:hover,
	&:focus {
		text-decoration: underline !important;
	}
`;
function MentionsUserDisabled(props) {
  const {
      urls
    } = (0,_hooks_use_notes_config__WEBPACK_IMPORTED_MODULE_2__["default"])(),
    mentionedUserCanEditPost = props.user.capabilities.post.edit,
    currentUserCanEditUsers = (0,_hooks_use_user_can__WEBPACK_IMPORTED_MODULE_3__["default"])(_hooks_use_user_can__WEBPACK_IMPORTED_MODULE_3__.CAPABILITY_EDIT_USERS),
    currentUserCanFixPermissions = currentUserCanEditUsers && mentionedUserCanEditPost;
  const tooltipLink = currentUserCanEditUsers ? urls.help_notes_features : '';
  const tooltipLabel = currentUserCanFixPermissions ? __('Give access to Notes', 'elementor-pro') : __("Can't mention them", 'elementor-pro');
  const tooltipMessage = useTooltipMessage(props.user.capabilities);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(UserDisabledTooltip, {
    role: "tooltip",
    "aria-label": tooltipLabel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TooltipShadow, null), currentUserCanFixPermissions ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SetPermissionsLink, {
    href: `${urls.admin_url_edit_user}?user_id=${props.user.id}#e-notes`,
    className: "elementor-clickable"
  }, tooltipLabel + ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "eicon-editor-external-link"
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_4__["default"], {
    delayDuration: 0
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_4__["default"].Trigger, {
    onMouseDown: e => e.preventDefault(),
    asChild: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TooltipTriggerText, {
    "aria-label": tooltipMessage
  }, tooltipLabel + ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "eicon-help-o"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TooltipContent, {
    portalled: false
  }, tooltipMessage, tooltipLink && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LearnMoreLink, {
    href: tooltipLink,
    className: "elementor-clickable"
  }, __('Learn more', 'elementor-pro')))))));
}
MentionsUserDisabled.propTypes = {
  user: PropTypes.instanceOf(_models_user__WEBPACK_IMPORTED_MODULE_1__["default"]).isRequired
};
function useTooltipMessage(capabilities) {
  const mentionedUserCanReadNotes = capabilities.notes.read,
    mentionedUserCanEditPost = capabilities.post.edit,
    currentUserCanEditUsers = (0,_hooks_use_user_can__WEBPACK_IMPORTED_MODULE_3__["default"])(_hooks_use_user_can__WEBPACK_IMPORTED_MODULE_3__.CAPABILITY_EDIT_USERS);
  if (!currentUserCanEditUsers) {
    return __('Contact the site admin to give this person the right permissions.', 'elementor-pro');
  }
  if (!mentionedUserCanEditPost) {
    if (!mentionedUserCanReadNotes) {
      return __('This person needs: (1) permission to view this post, as well as (2) access to use Notes.', 'elementor-pro');
    }
    return __('They need permission to view this post.', 'elementor-pro');
  }
  return '';
}

/***/ }),

/***/ "../assets/js/app/components/mentions/mentions-user-list.js":
/*!******************************************************************!*\
  !*** ../assets/js/app/components/mentions/mentions-user-list.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MentionsUserList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_use_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-users */ "../assets/js/app/hooks/use-users.js");
/* harmony import */ var _ui_typeahead_typeahead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/typeahead/typeahead */ "../assets/js/app/components/ui/typeahead/typeahead.js");
/* harmony import */ var _ui_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/avatar */ "../assets/js/app/components/ui/avatar.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _hooks_use_notes_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-notes-config */ "../assets/js/app/hooks/use-notes-config.js");
/* harmony import */ var _hooks_use_user_can__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-user-can */ "../assets/js/app/hooks/use-user-can.js");
/* harmony import */ var _ui_div_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/div-base */ "../assets/js/app/components/ui/div-base.js");
/* harmony import */ var _mentions_user_disabled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mentions-user-disabled */ "../assets/js/app/components/mentions/mentions-user-disabled.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");










const defaultParams = {
  limit: 5,
  order_by: 'user_registered',
  order: 'desc'
};
const List = (0,styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(_ui_typeahead_typeahead__WEBPACK_IMPORTED_MODULE_2__["default"].List)`
	position: absolute !important;
	top: 100% !important;
`;
const UserDetails = (0,styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_ui_div_base__WEBPACK_IMPORTED_MODULE_6__["default"]))`
	display: flex !important;
	flex-direction: column !important;
	justify-content: space-between !important;
	gap: 2px !important;

	&::before,
	&::after {
		display: none !important;
	}
`;
const UserContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(_ui_typeahead_typeahead__WEBPACK_IMPORTED_MODULE_2__["default"].ListItem)`
	display: flex !important;
	flex-direction: row !important;
	align-items: center !important;
	gap: 10px !important;
	position: relative !important;

	&[aria-disabled='true'] {
		opacity: 1 !important;

		&:hover {
			background-color: #f1f3f5 !important;
		}

		${UserDetails} {
			opacity: .5 !important;
		}

		&:not(:hover) {
			> [role='tooltip'] {
				display: none !important;
			}
		}
	}
`;
const UserName = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].span`
	all: revert;

	padding: 0 !important;
	margin: 0 !important;
	font-size: 12px !important;
	font-weight: 500 !important;
	color: inherit !important;
`;
const UserSlug = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].span`
	font-size: 10px !important;
	color: #a4afb6 !important;
`;
const Link = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].a.attrs(() => ({
  target: '_blank',
  rel: 'noreferrer'
}))`
	all: revert;

	color: #58d0f5 !important;
	font-family: Roboto, sans-serif !important;
	font-size: 1em !important;
	font-weight: normal !important;
	text-transform: none !important;
	font-style: normal !important;
	text-decoration: underline !important;
	line-height: normal !important;
	letter-spacing: normal !important;
	word-spacing: normal !important;

	&:hover,
	&:focus {
		color: #6d7882 !important;
		text-decoration: underline; // Repeat in order to override theme styles.
	}
`;
const FooterTitle = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].strong`
  font-weight: 500 !important;
`;
function MentionsUserList(props) {
  var _route$post_id;
  const {
      route,
      urls
    } = (0,_hooks_use_notes_config__WEBPACK_IMPORTED_MODULE_4__["default"])(),
    canCreateUsers = (0,_hooks_use_user_can__WEBPACK_IMPORTED_MODULE_5__["default"])(_hooks_use_user_can__WEBPACK_IMPORTED_MODULE_5__.CAPABILITY_CREATE_USERS);
  const {
    data = [],
    isSuccess
  } = (0,_hooks_use_users__WEBPACK_IMPORTED_MODULE_1__["default"])({
    params: {
      ...defaultParams,
      search: props.search,
      post_id: (_route$post_id = route.post_id) !== null && _route$post_id !== void 0 ? _route$post_id : null
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(List, null, data.map(user => {
    const isUserDisabled = !user.capabilities.notes.read || !user.capabilities.post.edit;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(UserContainer, {
      key: user.id,
      value: user.slug,
      disabled: isUserDisabled
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_avatar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      size: 'md',
      src: user.avatarUrls['48']
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(UserDetails, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(UserName, null, user.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(UserSlug, null, user.slug)), isUserDisabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mentions_user_disabled__WEBPACK_IMPORTED_MODULE_7__["default"], {
      user: user
    }));
  }), isSuccess && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_typeahead_typeahead__WEBPACK_IMPORTED_MODULE_2__["default"].ListFooter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FooterTitle, null, __("Can't find someone?", 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, canCreateUsers ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __('Add them from the', 'elementor-pro'), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Link, {
    href: urls.admin_url_create_user,
    className: "elementor-clickable"
  }, __('WP Dashboard', 'elementor-pro'))) : __('Ask the site admin to add them', 'elementor-pro'))));
}
MentionsUserList.propTypes = {
  search: PropTypes.string
};

/***/ }),

/***/ "../assets/js/app/components/panel-body-current-route.js":
/*!***************************************************************!*\
  !*** ../assets/js/app/components/panel-body-current-route.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PanelBodyCurrentRoute)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _panel_note_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel-note-item */ "../assets/js/app/components/panel-note-item.js");
/* harmony import */ var _panel_page_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panel-page-title */ "../assets/js/app/components/panel-page-title.js");
/* harmony import */ var _hooks_use_active_thread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-active-thread */ "../assets/js/app/hooks/use-active-thread.js");
/* harmony import */ var _hooks_use_notes_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/use-notes-config */ "../assets/js/app/hooks/use-notes-config.js");
/* harmony import */ var _models_note__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/note */ "../assets/js/app/models/note.js");
/* harmony import */ var _panel_empty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./panel-empty */ "../assets/js/app/components/panel-empty.js");
/* harmony import */ var _ui_toast_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/toast/toast */ "../assets/js/app/components/ui/toast/toast.js");
/* harmony import */ var _ui_toast_toast_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/toast/toast-icon */ "../assets/js/app/components/ui/toast/toast-icon.js");
/* harmony import */ var _ui_toast_toast_title__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/toast/toast-title */ "../assets/js/app/components/ui/toast/toast-title.js");
/* harmony import */ var _ui_toast_toast_description__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/toast/toast-description */ "../assets/js/app/components/ui/toast/toast-description.js");
/* harmony import */ var _ui_toast_toast_close__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ui/toast/toast-close */ "../assets/js/app/components/ui/toast/toast-close.js");
/* harmony import */ var _hooks_use_stoppable_effect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../hooks/use-stoppable-effect */ "../assets/js/app/hooks/use-stoppable-effect.js");
/* harmony import */ var _hooks_use_viewable_notes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../hooks/use-viewable-notes */ "../assets/js/app/hooks/use-viewable-notes.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
















function PanelBodyCurrentRoute(props) {
  const {
      route
    } = (0,_hooks_use_notes_config__WEBPACK_IMPORTED_MODULE_4__["default"])(),
    {
      activeThread,
      isThreadActive,
      setActive,
      clearActive
    } = (0,_hooks_use_active_thread__WEBPACK_IMPORTED_MODULE_3__["default"])(),
    [isToastOpen, setIsToastOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    [viewableNotes, nonViewableNotes] = (0,_hooks_use_viewable_notes__WEBPACK_IMPORTED_MODULE_13__["default"])(props.notes);

  // Clear the active thread if it isn't viewable.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const {
      noteId
    } = activeThread?.data || {};
    if (noteId) {
      const isActiveNoteViewable = !!viewableNotes.find(note => note.id === noteId && note.isThread());
      if (!isActiveNoteViewable) {
        clearActive(noteId);
      }
    }
  }, [viewableNotes, activeThread]);

  // Show toast only once, when there are some non-viewable notes on the page.
  (0,_hooks_use_stoppable_effect__WEBPACK_IMPORTED_MODULE_12__["default"])(stop => {
    const shouldShowToast = nonViewableNotes.length > 0;
    if (shouldShowToast) {
      setIsToastOpen(true);
      stop();
    }
  }, [nonViewableNotes]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, !viewableNotes.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_panel_empty__WEBPACK_IMPORTED_MODULE_6__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_panel_page_title__WEBPACK_IMPORTED_MODULE_2__["default"], {
    count: viewableNotes.length
  }, route.title), viewableNotes.map(note => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_panel_note_item__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: note.id,
    note: note,
    isActive: isThreadActive(note.id),
    onClick: () => setActive({
      type: _hooks_use_active_thread__WEBPACK_IMPORTED_MODULE_3__.THREAD,
      data: {
        noteId: note.id
      }
    })
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_toast_toast__WEBPACK_IMPORTED_MODULE_7__["default"], {
    open: isToastOpen,
    onOpenChange: setIsToastOpen,
    variant: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_toast_toast_icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "eicon-info-circle"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_toast_toast_title__WEBPACK_IMPORTED_MODULE_9__["default"], null, __('Some notes are not shown.', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_toast_toast_description__WEBPACK_IMPORTED_MODULE_10__["default"], null, __('This page contains notes on elements that are still in draft mode.', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_toast_toast_close__WEBPACK_IMPORTED_MODULE_11__["default"], null)));
}
PanelBodyCurrentRoute.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.instanceOf(_models_note__WEBPACK_IMPORTED_MODULE_5__["default"])).isRequired
};

/***/ }),

/***/ "../assets/js/app/components/panel-body-summary.js":
/*!*********************************************************!*\
  !*** ../assets/js/app/components/panel-body-summary.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PanelBodySummary)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _panel_page_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel-page-title */ "../assets/js/app/components/panel-page-title.js");
/* harmony import */ var _models_note_summary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/note-summary */ "../assets/js/app/models/note-summary.js");
/* harmony import */ var _ui_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/icon */ "../assets/js/app/components/ui/icon.js");
/* harmony import */ var _ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/tooltip/tooltip */ "../assets/js/app/components/ui/tooltip/tooltip.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _hooks_use_notes_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/use-notes-config */ "../assets/js/app/hooks/use-notes-config.js");
/* harmony import */ var _panel_empty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./panel-empty */ "../assets/js/app/components/panel-empty.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");









const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].a`
	position: absolute !important;
	font-size: 14px !important;
	inset-inline-end: 14px !important;
	top: 50% !important;
	margin-top: -.5em !important;
	color: #a4afb7 !important;
`;
function PanelBodySummary(props) {
  const {
    route: {
      url: currentRouteURL
    }
  } = (0,_hooks_use_notes_config__WEBPACK_IMPORTED_MODULE_5__["default"])();
  if (!props.notesSummary.length) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_panel_empty__WEBPACK_IMPORTED_MODULE_6__["default"], null);
  }
  return props.notesSummary.map(noteSummary => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_panel_page_title__WEBPACK_IMPORTED_MODULE_1__["default"], {
    count: noteSummary.notesCount,
    key: noteSummary.url
  }, noteSummary.title, noteSummary.url !== currentRouteURL && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_4__["default"].Trigger, {
    asChild: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledLink, {
    href: `${noteSummary.fullURL}#e:run:notes/open`,
    rel: "noopener noreferrer",
    target: "_blank",
    className: "elementor-clickable"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "eicon-editor-external-link"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_4__["default"].Content, null, __('Open page in a new tab', 'elementor-pro'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_4__["default"].Arrow, null)))));
}
PanelBodySummary.propTypes = {
  notesSummary: PropTypes.arrayOf(PropTypes.instanceOf(_models_note_summary__WEBPACK_IMPORTED_MODULE_2__["default"])).isRequired
};

/***/ }),

/***/ "../assets/js/app/components/panel-close-button.js":
/*!*********************************************************!*\
  !*** ../assets/js/app/components/panel-close-button.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PanelCloseButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/tooltip/tooltip */ "../assets/js/app/components/ui/tooltip/tooltip.js");
/* harmony import */ var _ui_icon_button_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/icon-button/icon-button */ "../assets/js/app/components/ui/icon-button/icon-button.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];




function PanelCloseButton() {
  const handleClick = () => window.top.$e.run('notes/close');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_1__["default"].Trigger, {
    asChild: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_icon_button_icon_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "eicon-editor-close",
    onClick: handleClick
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_1__["default"].Content, null, __('Close notes mode', 'elementor-pro'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_1__["default"].Arrow, null)));
}

/***/ }),

/***/ "../assets/js/app/components/panel-empty.js":
/*!**************************************************!*\
  !*** ../assets/js/app/components/panel-empty.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PanelEmpty)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ui_div_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/div-base */ "../assets/js/app/components/ui/div-base.js");
/* harmony import */ var _ui_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/icon */ "../assets/js/app/components/ui/icon.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];





const Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_ui_div_base__WEBPACK_IMPORTED_MODULE_1__["default"]))`
	display: flex !important;
	align-items: center !important;
	justify-content: center !important;
	height: 100% !important;
	width: 100% !important;
	text-align: center !important;
	padding: 13px 20px 43px 20px !important;
`;
const IconContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_ui_div_base__WEBPACK_IMPORTED_MODULE_1__["default"]))`
	font-size: 30px !important;
	color: #a4afb6 !important;
	margin: 0 0 20px 0 !important;
`;
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h4`
	all: revert;

	font-family: Roboto, sans-serif !important;
	font-size: 16px !important;
	font-weight: 700 !important;
	text-transform: none !important;
	font-style: normal !important;
	text-decoration: none !important;
	line-height: 1.4 !important;
	letter-spacing: normal !important;
	word-spacing: normal !important;
	color: #6d7882 !important;
	margin: 0 0 12px 0 !important;
  	padding: 0 15px !important;

	&::before, &::after {
		display: none;
	}
`;
const Text = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p`
	all: revert;

	font-family: Roboto, sans-serif !important;
	font-size: 11px !important;
	font-weight: normal !important;
	text-transform: none !important;
	font-style: normal !important;
	text-decoration: none !important;
	line-height: 1.5 !important;
	letter-spacing: normal !important;
	word-spacing: normal !important;
	margin: 0 !important;
	color: #6d7882 !important;
`;
const Link = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].a`
	all: revert;

	display: inline-flex !important;
	justify-content: center !important;
	align-item: center !important;
	font-family: Roboto, sans-serif !important;
	font-size: 12px !important;
	font-weight: 500 !important;
	text-transform: none !important;
	font-style: normal !important;
	text-decoration: none !important;
	line-height: 1.4 !important;
	letter-spacing: normal !important;
	word-spacing: normal !important;
	margin: 42px 0 0 0 !important;
	color: #6d7882 !important;

	> i {
		color: #a4afb7 !important;
		font-size: 18px !important;
		margin-inline-start: 4px !important;
	}

	&:hover {
		i::before {
			color: #58d0f5;
			content: '\\e926'; // eicon-info-circle
		}
	}
`;
function PanelEmpty() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IconContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "eicon-commenting-o"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Heading, null, __('Share your thoughts with a Note', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Text, null, __('Select an element on the page to leave a comment, ask a question, etc.', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Link, {
    href: "https://go.elementor.com/app-notes/",
    target: "_blank",
    className: "elementor-clickable"
  }, __('Learn More', 'elementor-pro'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "eicon-info"
  }))));
}

/***/ }),

/***/ "../assets/js/app/components/panel-error.js":
/*!**************************************************!*\
  !*** ../assets/js/app/components/panel-error.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PanelError)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ui_div_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/div-base */ "../assets/js/app/components/ui/div-base.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];




const Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_ui_div_base__WEBPACK_IMPORTED_MODULE_1__["default"]))`
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  height: 100% !important;
  width: 100% !important;
  text-align: center !important;
  padding: 13px 13px 43px 13px !important;
`;
const Text = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p`
  all: revert;

  font-family: Roboto, sans-serif !important;
  font-size: 12px !important;
  font-weight: ${({
  weight
}) => weight || 400} !important;
  text-transform: none !important;
  font-style: normal !important;
  text-decoration: none !important;
  line-height: normal !important;
  letter-spacing: normal !important;
  word-spacing: normal !important;
  margin: 0 !important;
  color: #6d7882 !important;
`;
function PanelError() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Text, {
    weight: 700
  }, __('Could not load the panel.', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Text, null, __('Please refresh the page and try again.', 'elementor-pro'))));
}

/***/ }),

/***/ "../assets/js/app/components/panel-fetch-icon.js":
/*!*******************************************************!*\
  !*** ../assets/js/app/components/panel-fetch-icon.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PanelFetchIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_icon_button_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/icon-button/icon-button */ "../assets/js/app/components/ui/icon-button/icon-button.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/tooltip/tooltip */ "../assets/js/app/components/ui/tooltip/tooltip.js");
/* harmony import */ var _hooks_use_watch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-watch */ "../assets/js/app/hooks/use-watch.js");
/* harmony import */ var _styles_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/animation */ "../assets/js/app/styles/animation.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");








const StyledIconButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_ui_icon_button_icon_button__WEBPACK_IMPORTED_MODULE_1__["default"]))`
  animation-duration: 1.3s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  &[data-state="loading"] {
	animation-name: ${_styles_animation__WEBPACK_IMPORTED_MODULE_4__.spin};
  }

  &[data-state="none"] {
	animation-name: none;
  }
`;
function PanelFetchIcon(props) {
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.isFetching);
  (0,_hooks_use_watch__WEBPACK_IMPORTED_MODULE_3__["default"])(() => {
    if (props.isFetching) {
      setLoading(true);
    }
  }, [props.isFetching]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"].Trigger, {
    asChild: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledIconButton, {
    name: "eicon-sync",
    "data-state": loading ? 'loading' : 'none',
    onClick: () => {
      window.top.$e.run('notes/refresh-panel');
      props.refetch();
    },
    onAnimationIteration: () => {
      // Make sure to finish spin only when the animation ends.
      if (!props.isFetching) {
        setLoading(false);
      }
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"].Content, null, __('Refresh', 'elementor-pro'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"].Arrow, null)));
}
PanelFetchIcon.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  refetch: PropTypes.func.isRequired
};

/***/ }),

/***/ "../assets/js/app/components/panel-note-item.js":
/*!******************************************************!*\
  !*** ../assets/js/app/components/panel-note-item.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PanelNoteItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/note */ "../assets/js/app/models/note.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ui_marker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/marker */ "../assets/js/app/components/ui/marker.js");
/* harmony import */ var _hooks_use_scroll_into_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-scroll-into-view */ "../assets/js/app/hooks/use-scroll-into-view.js");
/* harmony import */ var _shared_note_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/note-content */ "../assets/js/app/components/shared/note-content/index.js");
/* harmony import */ var _ui_div_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/div-base */ "../assets/js/app/components/ui/div-base.js");
/* harmony import */ var _ui_button_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/button-base */ "../assets/js/app/components/ui/button-base.js");
/* harmony import */ var _hooks_use_reverse_html_entities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/use-reverse-html-entities */ "../assets/js/app/hooks/use-reverse-html-entities.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");










const Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_ui_button_base__WEBPACK_IMPORTED_MODULE_6__["default"]))`
	--spacing: 12px;
	--background: #fafbfb;
	--color: #6d7882;
	--padding: var( --spacing );
	--font-family: Roboto, sans-serif;
	--font-size: 12px;
	--font-weight: 400;
	--width: 100%;
	--display: flex;

	gap: var( --spacing );
	margin: 1px 0 0 0 !important;
	border: none;
	text-align: inherit;
	border-radius: 0;
	transition: 0.2s all;
	line-height: 1.5;
	cursor: pointer;
	white-space: normal;

	&:hover,
	&:focus {
		--background: #f1f1f1;
		--color: #6d7882;
	}

	${({
  isActive
}) => {
  return isActive && (0,styled_components__WEBPACK_IMPORTED_MODULE_8__.css)`
			--background: #e8f4fb;

			&:hover,
			&:focus {
				--background: #e0f2fc;
			}
		`;
}}
`;
const IconCol = (0,styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_ui_div_base__WEBPACK_IMPORTED_MODULE_5__["default"]))`
	flex-shrink: 0;

	&::before,
	&::after {
		display: none !important;
	}
`;
const ContentCol = (0,styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_ui_div_base__WEBPACK_IMPORTED_MODULE_5__["default"]))`
	flex-grow: 1;

	&::before,
	&::after {
		display: none !important;
	}
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].p`
	all: revert;

	margin: 0 0 8px 0 !important;
	font-family: Roboto, sans-serif !important;
	font-size: 10px !important;
	font-weight: 500 !important;
	text-transform: none !important;
	font-style: normal !important;
	text-decoration: none !important;
	line-height: normal !important;
	letter-spacing: normal !important;
	word-spacing: normal !important;
`;
const Date = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].span`
	color: #a4afb6;
`;
const RepliesCount = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].p`
	all: revert;

	margin: 4px 0 0 0 !important;
	color: #a4afb6 !important;
	font-family: Roboto, sans-serif !important;
	font-size: 10px !important;
	font-weight: normal !important;
	text-transform: none !important;
	font-style: normal !important;
	text-decoration: none !important;
	line-height: normal !important;
	letter-spacing: normal !important;
	word-spacing: normal !important;
`;
const NoteContent = (0,styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_shared_note_content__WEBPACK_IMPORTED_MODULE_4__["default"]))`
  --line-height: 1.5;
  --max-rows: 6;

  display: -webkit-box !important;
  -webkit-box-orient: vertical !important;
  -webkit-line-clamp: var( --max-rows ) !important;
  max-height: calc( ( 1em * var( --line-height ) * var( --max-rows ) ) ) !important;
  overflow: hidden !important;

  & > p {
	margin: 0 !important; // To make the ellipsis look better on multi-paragraph content.
  }
`;
function PanelNoteItem(props) {
  const ref = (0,_hooks_use_scroll_into_view__WEBPACK_IMPORTED_MODULE_3__["default"])(props.isActive, {
      block: 'nearest',
      inline: 'nearest'
    }),
    noteContent = (0,_hooks_use_reverse_html_entities__WEBPACK_IMPORTED_MODULE_7__.useReverseHtmlEntities)(props.note.content);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Container, {
    isActive: props.isActive,
    onClick: props.onClick,
    ref: ref
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IconCol, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_marker__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: props.isActive || props.note.isUnreadThread() ? 'solid' : 'ghost',
    size: 'sm',
    muted: props.note.isResolved
  }, props.note.id)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContentCol, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, null, props.note.author.name, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Date, null, props.note.getFormattedCreatedAt())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NoteContent, {
    disableInteractions: true
  }, noteContent), props.note.repliesCount > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RepliesCount, null, __('%s replies', 'elementor-pro').replace('%s', props.note.repliesCount))));
}
PanelNoteItem.propTypes = {
  note: PropTypes.instanceOf(_models_note__WEBPACK_IMPORTED_MODULE_1__["default"]).isRequired,
  onClick: PropTypes.func,
  isActive: PropTypes.bool
};

/***/ }),

/***/ "../assets/js/app/components/panel-page-title.js":
/*!*******************************************************!*\
  !*** ../assets/js/app/components/panel-page-title.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PanelPageTitle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");



const StyledPanelPageTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h4`
  all: revert;

  padding: 10px 12px !important;
  background: #fff !important;
  font-family: Roboto, sans-serif !important;
  font-size: 12px !important;
  font-weight: 600 !important;
  color: #6d7882 !important;
  margin: 1px 0 0 0 !important;
  line-height: 1.2 !important;
  text-transform: none !important;
  font-style: normal !important;
  text-decoration: none !important;
  letter-spacing: normal !important;
  word-spacing: normal !important;
  position: relative !important;

  &::before, &::after {
    display: none !important;
  }
`;
const StyledCount = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span`
  color: #a4afb6;
  font-size: 11px;
`;
function PanelPageTitle(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledPanelPageTitle, null, props.children, ' ', props.count && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledCount, null, "(", props.count, ")"));
}
PanelPageTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  count: PropTypes.number
};

/***/ }),

/***/ "../assets/js/app/components/panel-popover.js":
/*!****************************************************!*\
  !*** ../assets/js/app/components/panel-popover.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PanelPopover)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/checkbox/checkbox */ "../assets/js/app/components/ui/checkbox/checkbox.js");
/* harmony import */ var _ui_icon_button_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/icon-button/icon-button */ "../assets/js/app/components/ui/icon-button/icon-button.js");
/* harmony import */ var _ui_label_label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/label/label */ "../assets/js/app/components/ui/label/label.js");
/* harmony import */ var _ui_popover_popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/popover/popover */ "../assets/js/app/components/ui/popover/popover.js");
/* harmony import */ var _ui_radio_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/radio/radio */ "../assets/js/app/components/ui/radio/radio.js");
/* harmony import */ var _ui_separator_separator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/separator/separator */ "../assets/js/app/components/ui/separator/separator.js");
/* harmony import */ var _hooks_use_notes_filters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/use-notes-filters */ "../assets/js/app/hooks/use-notes-filters.js");
/* harmony import */ var _hooks_use_notes_or_notes_summary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/use-notes-or-notes-summary */ "../assets/js/app/hooks/use-notes-or-notes-summary.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _hooks_use_notes_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/use-notes-config */ "../assets/js/app/hooks/use-notes-config.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");












const PopoverContent = (0,styled_components__WEBPACK_IMPORTED_MODULE_10__["default"])(_ui_popover_popover__WEBPACK_IMPORTED_MODULE_4__["default"].Content)`
  padding: 16px 16px 10px !important;
`;
function PanelPopover(props) {
  const [filters, setFilters] = (0,_hooks_use_notes_filters__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const {
    direction
  } = (0,_hooks_use_notes_config__WEBPACK_IMPORTED_MODULE_9__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_popover_popover__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onOpenChange: isOpen => {
      if (isOpen) {
        window.top.$e.run('notes/open-panel-filters');
      } else {
        window.top.$e.run('notes/close-panel-filters');
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_popover_popover__WEBPACK_IMPORTED_MODULE_4__["default"].Trigger, {
    asChild: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_icon_button_icon_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "eicon-ellipsis-h",
    size: "sm"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PopoverContent, {
    align: 'rtl' === direction ? 'end' : 'start',
    sideOffset: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_radio_radio__WEBPACK_IMPORTED_MODULE_5__["default"].Group, {
    value: props.view,
    onValueChange: props.setView,
    dir: direction
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_label_label__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_radio_radio__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: _hooks_use_notes_or_notes_summary__WEBPACK_IMPORTED_MODULE_8__.VIEW_NOTES
  }), __('Current page', 'elementor-pro'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_label_label__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_radio_radio__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: _hooks_use_notes_or_notes_summary__WEBPACK_IMPORTED_MODULE_8__.VIEW_NOTES_SUMMARY
  }), __('All site', 'elementor-pro')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_separator_separator__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_radio_radio__WEBPACK_IMPORTED_MODULE_5__["default"].Group, {
    value: filters.only_relevant ? '1' : '0',
    onValueChange: value => setFilters({
      only_relevant: '1' === value ? true : null
    }),
    dir: direction
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_label_label__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_radio_radio__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: "0"
  }), __('All notes', 'elementor-pro'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_label_label__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_radio_radio__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: "1"
  }), __('Only yours', 'elementor-pro')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_separator_separator__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_label_label__WEBPACK_IMPORTED_MODULE_3__["default"], {
    htmlFor: "notes-filter-show-resolved"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "notes-filter-show-resolved",
    checked: null === filters.is_resolved,
    onCheckedChange: value => setFilters({
      is_resolved: value ? null : false
    })
  }), __('Show resolved', 'elementor-pro'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_label_label__WEBPACK_IMPORTED_MODULE_3__["default"], {
    htmlFor: "notes-filter-only-unread"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "notes-filter-only-unread",
    checked: filters.only_unread,
    onCheckedChange: value => setFilters({
      only_unread: value ? true : null
    })
  }), __('Show unread only', 'elementor-pro'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_popover_popover__WEBPACK_IMPORTED_MODULE_4__["default"].Arrow, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_popover_popover__WEBPACK_IMPORTED_MODULE_4__["default"].CloseButton, null)));
}
PanelPopover.propTypes = {
  view: PropTypes.string.isRequired,
  setView: PropTypes.func.isRequired
};

/***/ }),

/***/ "../assets/js/app/components/panel.js":
/*!********************************************!*\
  !*** ../assets/js/app/components/panel.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Panel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _panel_body_current_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel-body-current-route */ "../assets/js/app/components/panel-body-current-route.js");
/* harmony import */ var _panel_body_summary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panel-body-summary */ "../assets/js/app/components/panel-body-summary.js");
/* harmony import */ var _panel_close_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./panel-close-button */ "../assets/js/app/components/panel-close-button.js");
/* harmony import */ var _panel_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./panel-error */ "../assets/js/app/components/panel-error.js");
/* harmony import */ var _panel_popover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./panel-popover */ "../assets/js/app/components/panel-popover.js");
/* harmony import */ var _ui_panel_panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/panel/panel */ "../assets/js/app/components/ui/panel/panel.js");
/* harmony import */ var _hooks_use_notes_or_notes_summary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/use-notes-or-notes-summary */ "../assets/js/app/hooks/use-notes-or-notes-summary.js");
/* harmony import */ var _hooks_use_notes_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/use-notes-config */ "../assets/js/app/hooks/use-notes-config.js");
/* harmony import */ var _panel_fetch_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./panel-fetch-icon */ "../assets/js/app/components/panel-fetch-icon.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];











function Panel() {
  const {
      direction
    } = (0,_hooks_use_notes_config__WEBPACK_IMPORTED_MODULE_8__["default"])(),
    {
      view,
      setView,
      data = [],
      refetch,
      isSuccess,
      isLoading,
      isFetching,
      isError,
      isNotesView,
      isNotesSummaryView
    } = (0,_hooks_use_notes_or_notes_summary__WEBPACK_IMPORTED_MODULE_7__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_panel_panel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isFloating: true,
    defaultPosition: {
      x: 'rtl' === direction ? -50 : 50,
      y: 50
    },
    defaultSize: {
      width: 240,
      height: 400
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_panel_panel__WEBPACK_IMPORTED_MODULE_6__["default"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_panel_panel__WEBPACK_IMPORTED_MODULE_6__["default"].HeaderSideCol, {
    align: "start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_panel_popover__WEBPACK_IMPORTED_MODULE_5__["default"], {
    view: view,
    setView: setView
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_panel_panel__WEBPACK_IMPORTED_MODULE_6__["default"].HeaderTitle, null, __('Notes Panel', 'elementor-pro')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_panel_panel__WEBPACK_IMPORTED_MODULE_6__["default"].HeaderSideCol, {
    align: "end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_panel_fetch_icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
    isFetching: isFetching,
    refetch: refetch
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_panel_close_button__WEBPACK_IMPORTED_MODULE_3__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_panel_panel__WEBPACK_IMPORTED_MODULE_6__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_panel_panel__WEBPACK_IMPORTED_MODULE_6__["default"].Loading, {
    show: isLoading
  }), isError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_panel_error__WEBPACK_IMPORTED_MODULE_4__["default"], null), isSuccess && isNotesView && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_panel_body_current_route__WEBPACK_IMPORTED_MODULE_1__["default"], {
    notes: data
  }), isSuccess && isNotesSummaryView && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_panel_body_summary__WEBPACK_IMPORTED_MODULE_2__["default"], {
    notesSummary: data
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_panel_panel__WEBPACK_IMPORTED_MODULE_6__["default"].Footer, null));
}

/***/ }),

/***/ "../assets/js/app/components/shared/note-content/index.js":
/*!****************************************************************!*\
  !*** ../assets/js/app/components/shared/note-content/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _note_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note-content */ "../assets/js/app/components/shared/note-content/note-content.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_note_content__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../assets/js/app/components/shared/note-content/note-content-email.js":
/*!*****************************************************************************!*\
  !*** ../assets/js/app/components/shared/note-content/note-content-email.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NoteContentEmail)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _note_content_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note-content-link */ "../assets/js/app/components/shared/note-content/note-content-link.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");



function NoteContentEmail(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_note_content_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: `mailto:${props.token.value}`
  }, props.children);
}
NoteContentEmail.propTypes = {
  children: PropTypes.node.isRequired,
  token: PropTypes.shape({
    value: PropTypes.string
  }).isRequired
};

/***/ }),

/***/ "../assets/js/app/components/shared/note-content/note-content-link.js":
/*!****************************************************************************!*\
  !*** ../assets/js/app/components/shared/note-content/note-content-link.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");

const NoteContentLink = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a`
  all: revert;

  --color-editor-info: #58d0f5;
  --color-editor-info-dark: #10bcf2;

  font-family: Roboto, sans-serif !important;
  font-size: 1em !important;
  font-weight: normal !important;
  text-transform: none !important;
  font-style: normal !important;
  text-decoration: none !important;
  line-height: normal !important;
  letter-spacing: normal !important;
  word-spacing: normal !important;
  cursor: pointer;


  &,
  &:visited {
    color: var( --color-editor-info ) !important;
  }

  &:hover,
  &:focus {
    color: var( --color-editor-info-dark ) !important;
  }
`;
NoteContentLink.defaultProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
  className: 'elementor-clickable'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoteContentLink);

/***/ }),

/***/ "../assets/js/app/components/shared/note-content/note-content-mention.js":
/*!*******************************************************************************!*\
  !*** ../assets/js/app/components/shared/note-content/note-content-mention.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");

const NoteContentMention = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span`
  color: #58d0f5;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoteContentMention);

/***/ }),

/***/ "../assets/js/app/components/shared/note-content/note-content-paragraph.js":
/*!*********************************************************************************!*\
  !*** ../assets/js/app/components/shared/note-content/note-content-paragraph.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");

const NoteContentParagraph = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  --color-gray-600: #6d7882;

  font-family: Roboto, sans-serif !important;
  font-size: 12px !important;
  font-weight: 400 !important;
  text-transform: none !important;
  font-style: normal !important;
  text-decoration: none !important;
  line-height: 1.5 !important;
  letter-spacing: normal !important;
  word-spacing: normal !important;
  color: var(--color-gray-600);
  margin: 0 0 .5em 0 !important;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoteContentParagraph);

/***/ }),

/***/ "../assets/js/app/components/shared/note-content/note-content-token-renderer.js":
/*!**************************************************************************************!*\
  !*** ../assets/js/app/components/shared/note-content/note-content-token-renderer.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NoteContentTokenRenderer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _note_content_paragraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note-content-paragraph */ "../assets/js/app/components/shared/note-content/note-content-paragraph.js");
/* harmony import */ var _note_content_mention__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./note-content-mention */ "../assets/js/app/components/shared/note-content/note-content-mention.js");
/* harmony import */ var _note_content_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./note-content-url */ "../assets/js/app/components/shared/note-content/note-content-url.js");
/* harmony import */ var _note_content_email__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./note-content-email */ "../assets/js/app/components/shared/note-content/note-content-email.js");
/* harmony import */ var _note_content_wow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./note-content-wow */ "../assets/js/app/components/shared/note-content/note-content-wow.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");








const componentMap = {
  Paragraph: _note_content_paragraph__WEBPACK_IMPORTED_MODULE_1__["default"],
  Mention: _note_content_mention__WEBPACK_IMPORTED_MODULE_2__["default"],
  Url: _note_content_url__WEBPACK_IMPORTED_MODULE_3__["default"],
  Email: _note_content_email__WEBPACK_IMPORTED_MODULE_4__["default"],
  Wow: _note_content_wow__WEBPACK_IMPORTED_MODULE_5__["default"],
  default: ({
    children
  }) => children
};
function NoteContentTokenRenderer(props) {
  const Component = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => componentMap[props.token.type] || componentMap.default, [props.token.type]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, {
    token: props.token
  }, Array.isArray(props.token.value) ? props.token.value.map((childToken, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NoteContentTokenRenderer, {
    token: childToken,
    key: index
  })) : props.token.value);
}

// Put the token shape outside to allow recursive.
const tokenShape = {};
tokenShape.value = PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.shape(tokenShape))]);
NoteContentTokenRenderer.propTypes = {
  token: PropTypes.shape(tokenShape)
};

/***/ }),

/***/ "../assets/js/app/components/shared/note-content/note-content-url.js":
/*!***************************************************************************!*\
  !*** ../assets/js/app/components/shared/note-content/note-content-url.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NoteContentUrl)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _note_content_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note-content-link */ "../assets/js/app/components/shared/note-content/note-content-link.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");



function NoteContentUrl(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_note_content_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: props.token.value
  }, props.children);
}
NoteContentUrl.propTypes = {
  children: PropTypes.node.isRequired,
  token: PropTypes.shape({
    value: PropTypes.string
  }).isRequired
};

/***/ }),

/***/ "../assets/js/app/components/shared/note-content/note-content-wow.js":
/*!***************************************************************************!*\
  !*** ../assets/js/app/components/shared/note-content/note-content-wow.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NoteContentWow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");




const confetti = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)`
  0% {
	opacity: 1;
	background-position: 40% 66%, 54% 40%, 32% 36%, 46% 38%, 38% 55%, 60% 32%, 43% 34%, 31% 35%, 53% 63%, 58% 42%, 56% 37%, 40% 50%, 46% 46%, 36% 59%, 43% 50%, 63% 70%, 44% 40%, 51% 30%, 38% 45%, 37% 62%, 46% 34%, 45% 45%, 43% 44%, 43% 53%, 64% 42%, 31% 36%, 38% 54%, 40% 34%, 64% 48%, 43% 47%, 43% 50%, 56% 40%, 35% 68%, 68% 69%, 63% 35%, 32% 61%, 67% 57%, 51% 43%, 53% 45%, 47% 40%, 33% 42%, 35% 65%, 67% 47%, 30% 44%, 67% 52%, 41% 46%, 44% 55%, 38% 40%, 39% 37%, 37% 35%;
  }

  45% {
	opacity: 1;
	background-size: var(--radius) var(--radius);
  }

  100% {
	opacity: 0;
	background-size: 0 0;
	background-position: 8% 105%, 83% 50%, 53% 74%, 44% 9%, 6% 67%, 13% 62%, 88% 47%, 60% 18%, 78% 50%, 105% 11%, 59% 22%, 47% 98%, 77% 84%, 51% 60%, 70% 10%, 91% 103%, 8% 16%, 61% 1%, -5% 52%, 75% 74%, 58% 52%, 74% 30%, 51% 55%, 13% 78%, 28% 86%, 40% 1%, 24% 38%, 58% 6%, 70% 42%, 11% 22%, 73% 59%, 10% 57%, 72% 22%, 48% 26%, 44% -7%, 72% 29%, 50% 74%, 99% 87%, 17% 36%, 4% -8%, -11% 22%, 79% 95%, 19% 60%, 30% 4%, 110% 5%, 0% 71%, 82% 56%, 9% 68%, 69% 41%, 19% 61%;
  }
`;
const StyledSurprise = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span`
  display: inline-block !important;
  position: relative !important;
  isolation: isolate !important;
  box-sizing: border-box !important;

  &::before {
	--radius: 2px;
	--color-1: #d50000;
	--color-2: #c51162;
	--color-3: #aa00ff;
	--color-4: #2962ff;
	--color-5: #00c853;
	--color-6: #ffd600;

	content: '' !important;
	position: absolute !important;
	inset: -25px !important;
	pointer-events: none !important;
	opacity: 0;
	z-index: -1 !important;
	transform: scale(1.5) !important;
	background-repeat: no-repeat !important;
	background-size: calc(2 * var(--radius)) calc(2 * var(--radius));
	background-image: radial-gradient( circle at center, var( --color-6 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-6 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-3 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-4 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-2 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-5 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-1 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-2 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-1 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-1 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-5 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-6 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-5 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-1 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-4 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-1 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-2 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-1 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-3 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-6 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-6 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-4 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-4 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-2 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-3 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-2 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-5 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-5 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-4 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-1 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-6 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-6 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-4 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-3 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-6 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-6 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-4 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-5 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-3 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-3 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-2 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-4 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-2 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-4 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-6 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-4 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-2 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-1 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-6 ) 49%,transparent 50% ), radial-gradient( circle at center, var( --color-5 ) 49%,transparent 50% ) !important;

  	${({
  isAnimated
}) => isAnimated && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)`
	  animation: ${confetti} ease 1s forwards !important;
  	`}
  }
`;
function NoteContentWow(props) {
  const [isAnimated, setIsAnimated] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledSurprise, {
    isAnimated: isAnimated,
    onMouseEnter: () => setIsAnimated(true),
    onAnimationEnd: () => setIsAnimated(false)
  }, props.children);
}
NoteContentWow.propTypes = {
  children: PropTypes.node.isRequired,
  token: PropTypes.shape({
    value: PropTypes.string
  }).isRequired
};

/***/ }),

/***/ "../assets/js/app/components/shared/note-content/note-content.js":
/*!***********************************************************************!*\
  !*** ../assets/js/app/components/shared/note-content/note-content.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NoteContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _note_content_token_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note-content-token-renderer */ "../assets/js/app/components/shared/note-content/note-content-token-renderer.js");
/* harmony import */ var _services_rich_text_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/rich-text-parser */ "../assets/js/services/rich-text-parser/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ui_div_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/div-base */ "../assets/js/app/components/ui/div-base.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");







const richTextParser = (0,_services_rich_text_parser__WEBPACK_IMPORTED_MODULE_2__["default"])();
const Wrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_ui_div_base__WEBPACK_IMPORTED_MODULE_3__["default"]))`
  white-space: normal;
  word-break: break-word;
  word-wrap: break-word;

  ${({
  disableInteractions
}) => disableInteractions && (0,styled_components__WEBPACK_IMPORTED_MODULE_4__.css)`
	pointer-events: none;
  `};
`;
function NoteContent(props) {
  const contentToken = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => richTextParser.parse(props.children), [props.children]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Wrapper, {
    disableInteractions: props.disableInteractions,
    className: props.className
  }, contentToken && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_note_content_token_renderer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    token: contentToken
  }));
}
NoteContent.propTypes = {
  children: PropTypes.string.isRequired,
  disableInteractions: PropTypes.bool,
  className: PropTypes.string
};
NoteContent.defaultProps = {
  disableInteractions: false
};

/***/ }),

/***/ "../assets/js/app/components/shared/note-form.js":
/*!*******************************************************!*\
  !*** ../assets/js/app/components/shared/note-form.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NoteForm)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ui_div_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/div-base */ "../assets/js/app/components/ui/div-base.js");
/* harmony import */ var _hooks_use_forms_in_writing_mode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-forms-in-writing-mode */ "../assets/js/app/hooks/use-forms-in-writing-mode.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");






const StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].form`
  all: revert;

  display: flex !important;
  flex-direction: column !important;
  gap: 16px !important;
`;
NoteForm.ButtonsContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_ui_div_base__WEBPACK_IMPORTED_MODULE_2__["default"]))`
  display: flex !important;
  flex-direction: row-reverse !important;
  justify-content: end !important;
  gap: 8px !important;
`;
function NoteForm({
  onReset,
  onChange,
  onSubmit,
  ...props
}) {
  const {
    isInWritingMode,
    addToWritingMode,
    removeFromWritingMode
  } = (0,_hooks_use_forms_in_writing_mode__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(StyledForm, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    onReset: e => {
      removeFromWritingMode(props.id);

      // Tweak to force emptying of data-value for the textarea container
      const contentEl = e.currentTarget.content;
      if ('undefined' !== typeof contentEl) {
        const event = new Event('input', {
          bubbles: true
        });
        contentEl.value = '';
        contentEl.dispatchEvent(event);
      }
      onReset?.(e);
    },
    onChange: e => {
      const hasChanged = e.target.value.trim() !== e.target.defaultValue,
        isCurrentFormInWritingMode = isInWritingMode(props.id);
      if (hasChanged && !isCurrentFormInWritingMode) {
        addToWritingMode(props.id);
      }
      if (!hasChanged && isCurrentFormInWritingMode) {
        removeFromWritingMode(props.id);
      }
      onChange?.(e);
    },
    onSubmit: async e => {
      e.preventDefault();
      if (!isInWritingMode(props.id)) {
        return;
      }
      const form = e.currentTarget,
        content = form.content.value.trim();
      await onSubmit?.(e, {
        form,
        content
      });
    }
  }));
}
NoteForm.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onReset: PropTypes.func,
  onSubmit: PropTypes.func
};

/***/ }),

/***/ "../assets/js/app/components/shared/note-popover-content.js":
/*!******************************************************************!*\
  !*** ../assets/js/app/components/shared/note-popover-content.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotePopoverContent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_popover_popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/popover/popover */ "../assets/js/app/components/ui/popover/popover.js");
/* harmony import */ var _hooks_use_notes_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-notes-config */ "../assets/js/app/hooks/use-notes-config.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "../assets/js/app/utils.js");
/* harmony import */ var _hooks_use_forms_in_writing_mode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-forms-in-writing-mode */ "../assets/js/app/hooks/use-forms-in-writing-mode.js");








const bounce = {
  keyframes: [{
    transform: 'scale(1)',
    opacity: '1'
  }, {
    transform: 'scale(1.05)',
    opacity: '0.85'
  }, {
    transform: 'scale(1)',
    opacity: '1'
  }],
  options: {
    easing: 'ease-in-out',
    duration: 500
  }
};
function NotePopoverContent(props) {
  const {
      direction
    } = (0,_hooks_use_notes_config__WEBPACK_IMPORTED_MODULE_3__["default"])(),
    {
      formsInWritingMode
    } = (0,_hooks_use_forms_in_writing_mode__WEBPACK_IMPORTED_MODULE_5__["default"])(),
    ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ui_popover_popover__WEBPACK_IMPORTED_MODULE_2__["default"].Content, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    align: 'rtl' === direction ? 'end' : 'start',
    alignOffset: 18,
    sideOffset: 15,
    ref: ref,
    onInteractOutside: async e => {
      // If there are no forms in writing mode, it should behave normally.
      if (0 === formsInWritingMode.length) {
        return;
      }
      e.preventDefault();
      if (0 === ref.current.getAnimations().length) {
        await (0,_utils__WEBPACK_IMPORTED_MODULE_4__.scrollIntoView)(ref.current);
        ref.current.animate(bounce.keyframes, bounce.options);
      }
    }
  }));
}

/***/ }),

/***/ "../assets/js/app/components/ui/alert-dialog/alert-dialog-action.js":
/*!**************************************************************************!*\
  !*** ../assets/js/app/components/ui/alert-dialog/alert-dialog-action.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-alert-dialog */ "../../../node_modules/@radix-ui/react-alert-dialog/dist/index.module.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _button_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../button-base */ "../assets/js/app/components/ui/button-base.js");



const AlertDialogAction = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_button_base__WEBPACK_IMPORTED_MODULE_0__["default"])).attrs(() => ({
  as: _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_2__.Action
}))`

  --font-size: 16px;
  --color: #b01b1b;
  --padding: 13px;

  margin: 0;
  flex-grow: 1;
  transition: 0.2s all;
  border: none;
  border-radius: 0;

  &:focus, &:hover {
	--background: #f1f3f5;
	--color: #b01b1b;
  }
`;
AlertDialogAction.propTypes = {
  ..._radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_2__.Action.propTypes
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertDialogAction);

/***/ }),

/***/ "../assets/js/app/components/ui/alert-dialog/alert-dialog-actions-container.js":
/*!*************************************************************************************!*\
  !*** ../assets/js/app/components/ui/alert-dialog/alert-dialog-actions-container.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _div_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../div-base */ "../assets/js/app/components/ui/div-base.js");


const AlertDialogActionsContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_div_base__WEBPACK_IMPORTED_MODULE_0__["default"]))`
  display: flex;
  align-items: center;
  border-top: 1px solid #d5dadf;

  & > button:not(:first-child) {
	/**
	 * will create a divider between the buttons,
	 * not matter how much buttons exists in the container.
	 */
	border-inline-start: 1px solid #d5dadf;
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertDialogActionsContainer);

/***/ }),

/***/ "../assets/js/app/components/ui/alert-dialog/alert-dialog-cancel.js":
/*!**************************************************************************!*\
  !*** ../assets/js/app/components/ui/alert-dialog/alert-dialog-cancel.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-alert-dialog */ "../../../node_modules/@radix-ui/react-alert-dialog/dist/index.module.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _button_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../button-base */ "../assets/js/app/components/ui/button-base.js");



const AlertDialogCancel = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_button_base__WEBPACK_IMPORTED_MODULE_0__["default"])).attrs(() => ({
  as: _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_2__.Cancel
}))`
  --color: #6d7882;
  --padding: 13px;
  --font-size: 16px;
  --border: none;

  margin: 0;
  flex-grow: 1;
  transition: 0.2s all;
  border-radius: 0;

  &:focus, &:hover {
    --background: #f1f3f5;
	--color: #6d7882;
  }
`;
AlertDialogCancel.propTypes = {
  ..._radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_2__.Cancel.propTypes
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertDialogCancel);

/***/ }),

/***/ "../assets/js/app/components/ui/alert-dialog/alert-dialog-content.js":
/*!***************************************************************************!*\
  !*** ../assets/js/app/components/ui/alert-dialog/alert-dialog-content.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AlertDialogContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-alert-dialog */ "../../../node_modules/@radix-ui/react-alert-dialog/dist/index.module.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ "../assets/js/app/utils.js");





const overlayShow = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.keyframes)`
  0% {
	opacity: 0;
  }
  100% {
	opacity: 1;
  }
`;
const contentShow = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.keyframes)`
  0% {
	opacity: 0;
	transform: translate(-50%, -48%) scale(.96);
  }
  100% {
	opacity: 1;
	transform: translate(-50%, -50%) scale(1);
  }
`;
const StyledContent = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_3__.Content))`
  all: revert;

  font-family: Roboto, sans-serif !important;
  font-size: 1em !important;
  font-weight: normal !important;
  text-transform: none !important;
  font-style: normal !important;
  text-decoration: none !important;
  line-height: normal !important;
  letter-spacing: normal !important;
  word-spacing: normal !important;
  background-color: #fff !important;
  box-shadow: 2px 8px 23px rgba(0, 0, 0, 0.2) !important;
  border-radius: 3px !important;
  width: 375px !important;
  text-align: center !important;
  position: fixed !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  max-height: 85vh !important;
  animation-duration: 150ms !important;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1) !important;
  animation-name: ${contentShow} !important;
  z-index: ${_utils__WEBPACK_IMPORTED_MODULE_1__.MAX_Z_INDEX} !important;

  &:focus {
	outline: none !important;
  }
`;
const StyledOverlay = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_3__.Overlay))`
  background-color: rgba(0, 0, 0, 0.5) !important;
  position: fixed !important;
  inset: 0 !important;
  animation-duration: 150ms !important;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1) !important;
  animation-name: ${overlayShow} !important;
  z-index: ${_utils__WEBPACK_IMPORTED_MODULE_1__.MAX_Z_INDEX} !important;
`;
function AlertDialogContent(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_3__.Portal, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledOverlay, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledContent, props));
}
AlertDialogContent.propTypes = {
  ..._radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_3__.Content.propTypes
};

/***/ }),

/***/ "../assets/js/app/components/ui/alert-dialog/alert-dialog-description-container.js":
/*!*****************************************************************************************!*\
  !*** ../assets/js/app/components/ui/alert-dialog/alert-dialog-description-container.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _div_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../div-base */ "../assets/js/app/components/ui/div-base.js");


const AlertDialogDescriptionContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_div_base__WEBPACK_IMPORTED_MODULE_0__["default"]))`
  padding: 30px !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 12px !important;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertDialogDescriptionContainer);

/***/ }),

/***/ "../assets/js/app/components/ui/alert-dialog/alert-dialog-description.js":
/*!*******************************************************************************!*\
  !*** ../assets/js/app/components/ui/alert-dialog/alert-dialog-description.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @radix-ui/react-alert-dialog */ "../../../node_modules/@radix-ui/react-alert-dialog/dist/index.module.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");


const AlertDialogDescription = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_1__.Description))`
  all: revert;

  font-family: Roboto, sans-serif !important;
  font-size: 13px !important;
  font-weight: 500 !important;
  text-transform: none !important;
  font-style: normal !important;
  text-decoration: none !important;
  line-height: normal !important;
  letter-spacing: normal !important;
  word-spacing: normal !important;
  margin: 0 !important;
  color: #495157 !important;
`;
AlertDialogDescription.propTypes = {
  ..._radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_1__.Description.propTypes
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertDialogDescription);

/***/ }),

/***/ "../assets/js/app/components/ui/alert-dialog/alert-dialog-title.js":
/*!*************************************************************************!*\
  !*** ../assets/js/app/components/ui/alert-dialog/alert-dialog-title.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @radix-ui/react-alert-dialog */ "../../../node_modules/@radix-ui/react-alert-dialog/dist/index.module.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");


const AlertDialogTitle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_1__.Title))`
  all: revert;

  font-family: Roboto, sans-serif !important;
  font-size: 17px !important;
  font-weight: 500 !important;
  text-transform: none !important;
  font-style: normal !important;
  text-decoration: none !important;
  line-height: normal !important;
  letter-spacing: normal !important;
  word-spacing: normal !important;
  margin: 0 !important;
  color: #495157 !important;

  &::before, &::after {
    display: none;
  }
`;
AlertDialogTitle.propTypes = {
  ..._radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_1__.Title.propTypes
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertDialogTitle);

/***/ }),

/***/ "../assets/js/app/components/ui/alert-dialog/alert-dialog.js":
/*!*******************************************************************!*\
  !*** ../assets/js/app/components/ui/alert-dialog/alert-dialog.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @radix-ui/react-alert-dialog */ "../../../node_modules/@radix-ui/react-alert-dialog/dist/index.module.js");
/* harmony import */ var _alert_dialog_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert-dialog-content */ "../assets/js/app/components/ui/alert-dialog/alert-dialog-content.js");
/* harmony import */ var _alert_dialog_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert-dialog-title */ "../assets/js/app/components/ui/alert-dialog/alert-dialog-title.js");
/* harmony import */ var _alert_dialog_description_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert-dialog-description-container */ "../assets/js/app/components/ui/alert-dialog/alert-dialog-description-container.js");
/* harmony import */ var _alert_dialog_actions_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert-dialog-actions-container */ "../assets/js/app/components/ui/alert-dialog/alert-dialog-actions-container.js");
/* harmony import */ var _alert_dialog_description__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert-dialog-description */ "../assets/js/app/components/ui/alert-dialog/alert-dialog-description.js");
/* harmony import */ var _alert_dialog_cancel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alert-dialog-cancel */ "../assets/js/app/components/ui/alert-dialog/alert-dialog-cancel.js");
/* harmony import */ var _alert_dialog_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alert-dialog-action */ "../assets/js/app/components/ui/alert-dialog/alert-dialog-action.js");








const AlertDialog = _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_7__.Root;
AlertDialog.Trigger = _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_7__.Trigger;
AlertDialog.Content = _alert_dialog_content__WEBPACK_IMPORTED_MODULE_0__["default"];
AlertDialog.Description = _alert_dialog_description__WEBPACK_IMPORTED_MODULE_4__["default"];
AlertDialog.DescriptionContainer = _alert_dialog_description_container__WEBPACK_IMPORTED_MODULE_2__["default"];
AlertDialog.ActionsContainer = _alert_dialog_actions_container__WEBPACK_IMPORTED_MODULE_3__["default"];
AlertDialog.Title = _alert_dialog_title__WEBPACK_IMPORTED_MODULE_1__["default"];
AlertDialog.Cancel = _alert_dialog_cancel__WEBPACK_IMPORTED_MODULE_5__["default"];
AlertDialog.Action = _alert_dialog_action__WEBPACK_IMPORTED_MODULE_6__["default"];
AlertDialog.propTypes = _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_7__.Root.propTypes;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertDialog);

/***/ }),

/***/ "../assets/js/app/components/ui/avatar.js":
/*!************************************************!*\
  !*** ../assets/js/app/components/ui/avatar.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");

const sizesMap = {
  sm: {
    width: 16
  },
  md: {
    width: 32
  },
  lg: {
    width: 64
  }
};
const Avatar = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img`
	all: revert;

	aspect-ratio: 1 / 1;
	border-radius: 100%;
	height: auto;
	width: ${({
  size
}) => sizesMap[size].width}px;
`;
Avatar.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']).isRequired,
  src: PropTypes.string.isRequired
};
Avatar.defaultProps = {
  size: 'md'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Avatar);

/***/ }),

/***/ "../assets/js/app/components/ui/button-base.js":
/*!*****************************************************!*\
  !*** ../assets/js/app/components/ui/button-base.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");


/**
 * Simple button component to handle themes overrides.
 */
const ButtonBase = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button`
	all: revert;

	--color: #000;
	--padding: 0;
	--background: transparent;
	--font-weight: 500;
	--font-size: 16px;
	--font-family: Roboto, sans-serif;
	--text-transform: none;
	--letter-spacing: 0;
	--font-style: normal;
	--text-decoration: none;
	--line-height: normal;
	--word-spacing: normal;
	--text-shadow: none;
	--box-shadow: none;
	--border: none;
	--border-radius: 0;

	// Override themes selectors.
	&,
	&&,
	&[type="button"],
	&[type="submit"],
	&[type="reset"],
	&:hover,
	&:focus,
	&:active,
	&:not( :hover ):not( :active ):not( .has-background ),
	&:not( :hover ):not( :active ):not( .has-text-color ) {
		font-family: var( --font-family ) !important;
		font-size: var( --font-size ) !important;
		font-weight: var( --font-weight ) !important;
		text-transform: var( --text-transform ) !important;
		letter-spacing: var( --letter-spacing ) !important;
		font-style: normal !important;
		text-decoration: none !important;
		line-height: normal !important;
		word-spacing: normal !important;
		color: var( --color ) !important;
		background: var( --background ) !important;
		border: var( --border ) !important;
		text-shadow: var( --text-shadow ) !important;
		box-shadow: var( --box-shadow ) !important;
		border-radius: var( --border-radius ) !important;
		padding: var( --padding ) !important;
		outline: none !important;
		width: var( --width, auto ) !important;
		height: var( --height, auto ) !important;
		display: var( --display, inline-block ) !important;
		min-height: revert !important;
	}

	&:before,
	&:after {
		display: none !important;
	}
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonBase);

/***/ }),

/***/ "../assets/js/app/components/ui/button.js":
/*!************************************************!*\
  !*** ../assets/js/app/components/ui/button.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _button_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button-base */ "../assets/js/app/components/ui/button-base.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");


const colorsMap = {
  contained: {
    background: '--color-editor-info',
    border: '--color-editor-info',
    text: '--color-white',
    backgroundHover: '--color-editor-info-dark'
  },
  outlined: {
    background: '--color-ghost',
    border: '--color-gray-400',
    text: '--color-gray-600',
    backgroundHover: '--color-darken'
  },
  transparent: {
    background: '--color-ghost',
    border: '--color-ghost',
    text: '--color-default'
  }
};
const sizesMap = {
  md: {
    padding: '--padding-md',
    fontSize: '--font-size-md'
  }
};
const Button = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_button_base__WEBPACK_IMPORTED_MODULE_0__["default"]))`
	--color-editor-info: #58d0f5;
	--color-editor-info-dark: #10bcf2;
	--color-default: inherit;
	--color-ghost: transparent;
	--color-white: #fff;
	--color-gray-400: #c2cbd2;
	--color-gray-600: #6d7882;
	--color-darken: rgba( 0, 0, 0, .05 );

	--font-size-md: 13px;
	--padding-md: 8px 12px;

	--padding: var( ${({
  size
}) => sizesMap[size].padding} );
	--color: var( ${({
  variant
}) => colorsMap[variant].text} );
	--background: var( ${({
  variant
}) => colorsMap[variant].background} );
	--border-color: var( ${({
  variant
}) => colorsMap[variant].border} );
	--border: 1px solid var( --border-color );
	--cursor: pointer;
	--font-weight: 400;
	--font-family: Roboto, sans-serif;
	--font-size: var( ${({
  size
}) => sizesMap[size].fontSize} );
	--border-radius: 3px;

	font-style: normal !important;
	text-align: center !important;
	line-height: 1 !important;
	cursor: var( --cursor ) !important;
	transition: .3s all !important;

  	&, & * {
	  cursor: var( --cursor ) !important;
	}

	${({
  disabled
}) => disabled && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)`
			opacity: .5;
			pointer-events: none;
			--cursor: not-allowed;
	`}

	${({
  variant
}) => 'transparent' === variant && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)`
			--padding: 0;
	`}

	&:hover, &:focus {
		--background: var(
			${({
  variant
}) => colorsMap[variant].backgroundHover || colorsMap[variant].background}
		);
	}
`;
Button.propTypes = {
  variant: PropTypes.oneOf(['contained', 'outlined', 'transparent']).isRequired,
  size: PropTypes.oneOf(['md']).isRequired,
  disabled: PropTypes.bool
};
Button.defaultProps = {
  variant: 'contained',
  size: 'md'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "../assets/js/app/components/ui/checkbox/checkbox.js":
/*!***********************************************************!*\
  !*** ../assets/js/app/components/ui/checkbox/checkbox.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Checkbox)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-checkbox */ "../../../node_modules/@radix-ui/react-checkbox/dist/index.module.js");
/* harmony import */ var _button_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button-base */ "../assets/js/app/components/ui/button-base.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon */ "../assets/js/app/components/ui/icon.js");






const StyledCheckbox = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_button_base__WEBPACK_IMPORTED_MODULE_1__["default"])).attrs(() => ({
  as: _radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_4__.Root
}))`
  --border-color: #a4afb6;
  --background: #fff;
  --border: 1px solid var( --border-color );
  --border-radius: 3px;
  --width: 12px;
  --height: 12px;
  --display: inline-flex;

  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0;
  outline: none;
  transition: 0.2s all;
  overflow: hidden;

  &[data-state="checked"] {
    --border-color: #39b54a;
  }

  &:hover, &:focus {
	outline: none;
	--background: #eee;

	& > * {
	  --background: rgba(57, 181, 74, 0.8);
	}
  }
`;
const StyledIndicator = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_4__.Indicator))`
  all: revert;

  position: absolute !important;
  inset: 0 !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  background: #39b54a !important;
  color: #fff !important;
  outline: none !important;
  font-size: 8px !important;
`;
function Checkbox(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledCheckbox, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledIndicator, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "eicon-check"
  })));
}
Checkbox.propTypes = {
  ..._radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_4__.Root.propTypes
};

/***/ }),

/***/ "../assets/js/app/components/ui/div-base.js":
/*!**************************************************!*\
  !*** ../assets/js/app/components/ui/div-base.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");


/**
 * Simple div to handle themes overrides.
 */
const DivBase = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
	all: revert;
	box-sizing: border-box;

	&:before,
	&:after {
		display: none !important;
	}
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DivBase);

/***/ }),

/***/ "../assets/js/app/components/ui/dropdown/dropdown-arrow.js":
/*!*****************************************************************!*\
  !*** ../assets/js/app/components/ui/dropdown/dropdown-arrow.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @radix-ui/react-dropdown-menu */ "../../../node_modules/@radix-ui/react-dropdown-menu/dist/index.module.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");


const DropdownArrow = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.Arrow))`
  fill: #fff;
  margin: 0 10px;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownArrow);

/***/ }),

/***/ "../assets/js/app/components/ui/dropdown/dropdown-content.js":
/*!*******************************************************************!*\
  !*** ../assets/js/app/components/ui/dropdown/dropdown-content.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-dropdown-menu */ "../../../node_modules/@radix-ui/react-dropdown-menu/dist/index.module.js");
/* harmony import */ var _styles_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../styles/animation */ "../assets/js/app/styles/animation.js");



const DropdownContent = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.Content))`
  all: revert;

  background: #fff !important;
  border-radius: 3px !important;
  min-width: 120px !important;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.15) !important;
  animation-duration: 400ms !important;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1) !important;
  padding: 4px !important;

  &[data-state="open"] {
	&[data-side="top"] {
	  animation-name: ${_styles_animation__WEBPACK_IMPORTED_MODULE_0__.slideUpAndFade};
	}

	&[data-side="right"] {
	  animation-name: ${_styles_animation__WEBPACK_IMPORTED_MODULE_0__.slideRightAndFade};
	}

	&[data-side="bottom"] {
	  animation-name: ${_styles_animation__WEBPACK_IMPORTED_MODULE_0__.slideDownAndFade};
	}

	&[data-side="left"] {
	  animation-name: ${_styles_animation__WEBPACK_IMPORTED_MODULE_0__.slideLeftAndFade};
	}
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownContent);

/***/ }),

/***/ "../assets/js/app/components/ui/dropdown/dropdown-item.js":
/*!****************************************************************!*\
  !*** ../assets/js/app/components/ui/dropdown/dropdown-item.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DropdownItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-dropdown-menu */ "../../../node_modules/@radix-ui/react-dropdown-menu/dist/index.module.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icon */ "../assets/js/app/components/ui/icon.js");
/* harmony import */ var _tooltip_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tooltip/tooltip */ "../assets/js/app/components/ui/tooltip/tooltip.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");






const variants = {
  default: {
    hoverTextColor: '#6d7882',
    hoverIconColor: '#a4afb6'
  },
  danger: {
    hoverTextColor: '#b01b1b',
    hoverIconColor: '#d9534f'
  }
};
const Icon = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_icon__WEBPACK_IMPORTED_MODULE_1__["default"]))`
  color: #a4afb6 !important;
  transition: 0.2s all;
`;
const ItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span`
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
`;
const StyledDropdownItem = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.Item))`
  all: revert;

  font-family: Roboto, sans-serif !important;
  font-size: 11px !important;
  font-weight: 500 !important;
  text-transform: none !important;
  font-style: normal !important;
  text-decoration: none !important;
  line-height: 1.2 !important;
  letter-spacing: normal !important;
  word-spacing: normal !important;
  cursor: pointer !important;
  border-radius: 4px !important;
  padding: 7px 12px !important;
  color: #6d7882 !important;
  transition: 0.2s all !important;

  &[data-disabled] {
	opacity: 0.5 !important;
	cursor: default !important;
  }

  &:focus {
	background: #f1f3f5 !important;
	outline: none !important;

	color: ${({
  variant
}) => variants[variant].hoverTextColor} !important;

	${Icon} {
	  color: ${({
  variant
}) => variants[variant].hoverIconColor} !important;
	}
  }
`;
function DropdownItem({
  children,
  icon,
  tooltip,
  ...props
}) {
  const DropdownItemContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ItemWrapper, null, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Icon, {
    className: icon
  }), children);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledDropdownItem, props, tooltip ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"].Trigger, {
    asChild: true
  }, DropdownItemContent), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"].Content, null, tooltip, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"].Arrow, null))) : DropdownItemContent);
}
DropdownItem.propTypes = {
  ...DropdownItem.propTypes,
  icon: PropTypes.string,
  tooltip: PropTypes.node,
  variant: PropTypes.oneOf(['default', 'danger'])
};
DropdownItem.defaultProps = {
  variant: 'default'
};

/***/ }),

/***/ "../assets/js/app/components/ui/dropdown/dropdown-separator.js":
/*!*********************************************************************!*\
  !*** ../assets/js/app/components/ui/dropdown/dropdown-separator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @radix-ui/react-dropdown-menu */ "../../../node_modules/@radix-ui/react-dropdown-menu/dist/index.module.js");


const DropdownSeparator = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.Separator))`
  height: 1px !important;
  background: #f1f3f5 !important;
  margin: 7px 10px !important;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownSeparator);

/***/ }),

/***/ "../assets/js/app/components/ui/dropdown/dropdown.js":
/*!***********************************************************!*\
  !*** ../assets/js/app/components/ui/dropdown/dropdown.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-dropdown-menu */ "../../../node_modules/@radix-ui/react-dropdown-menu/dist/index.module.js");
/* harmony import */ var _dropdown_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown-content */ "../assets/js/app/components/ui/dropdown/dropdown-content.js");
/* harmony import */ var _dropdown_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown-item */ "../assets/js/app/components/ui/dropdown/dropdown-item.js");
/* harmony import */ var _dropdown_arrow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown-arrow */ "../assets/js/app/components/ui/dropdown/dropdown-arrow.js");
/* harmony import */ var _dropdown_separator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropdown-separator */ "../assets/js/app/components/ui/dropdown/dropdown-separator.js");





const Dropdown = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.Root;
Dropdown.Trigger = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.Trigger;
Dropdown.Content = _dropdown_content__WEBPACK_IMPORTED_MODULE_0__["default"];
Dropdown.Item = _dropdown_item__WEBPACK_IMPORTED_MODULE_1__["default"];
Dropdown.Arrow = _dropdown_arrow__WEBPACK_IMPORTED_MODULE_2__["default"];
Dropdown.Separator = _dropdown_separator__WEBPACK_IMPORTED_MODULE_3__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown);

/***/ }),

/***/ "../assets/js/app/components/ui/icon-button/icon-button.js":
/*!*****************************************************************!*\
  !*** ../assets/js/app/components/ui/icon-button/icon-button.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _button_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button-base */ "../assets/js/app/components/ui/button-base.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon */ "../assets/js/app/components/ui/icon.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");






const fontSizeMapping = {
  sm: '15px',
  md: '18px'
};
const StyledIconButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_button_base__WEBPACK_IMPORTED_MODULE_2__["default"]))`
  --color: #a4afb7;
  --background: transparent;
  --padding: 4px;
  --font-size: ${({
  size
}) => fontSizeMapping[size]};
  --border: none;
  --border-radius: 100%;
  --display: grid;

  transition: 0.2s all;
  place-items: center;
  border-radius: 100%;
  cursor: pointer;

  &:hover, &:focus {
	--background: transparent;
	--color: #6d7882;
	outline: none;
  }

  &:focus {
	--background: #f1f3f5;
  }

  ${({
  disabled
}) => disabled && (0,styled_components__WEBPACK_IMPORTED_MODULE_4__.css)`
	opacity: .5;
	pointer-events: none;
	cursor: not-allowed;
  `}
`;
const IconButton = react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(({
  name,
  ...props
}, ref) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(StyledIconButton, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: name
  }));
});
IconButton.displayName = 'IconButton';
IconButton.propTypes = {
  size: PropTypes.oneOf(['sm', 'md']),
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};
IconButton.defaultProps = {
  size: 'md'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconButton);

/***/ }),

/***/ "../assets/js/app/components/ui/icon.js":
/*!**********************************************!*\
  !*** ../assets/js/app/components/ui/icon.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");


/**
 * Simple i tag to handle themes overrides.
 */
const Icon = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].i`
	margin: 0 !important;
	padding: 0 !important;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "../assets/js/app/components/ui/label/label.js":
/*!*****************************************************!*\
  !*** ../assets/js/app/components/ui/label/label.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _radix_ui_react_label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @radix-ui/react-label */ "../../../node_modules/@radix-ui/react-label/dist/index.module.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");


const Label = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_1__.Label))`
  all: revert;

  font-size: 11px !important;
  color: #a4afb6 !important;
  font-weight: 500 !important;
  font-family: Roboto, sans-serif !important;
  user-select: none !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 8px !important;
  line-height: 2 !important;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Label);

/***/ }),

/***/ "../assets/js/app/components/ui/marker.js":
/*!************************************************!*\
  !*** ../assets/js/app/components/ui/marker.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");

const sizesMap = {
  xs: 20,
  sm: 25,
  md: 34,
  lg: 80,
  xl: 160
};
const colorsMap = {
  active: {
    background: '--color-editor-info',
    text: '--color-white'
  },
  solid: {
    background: '--color-editor-info',
    text: '--color-white'
  },
  ghost: {
    background: '--color-ghost',
    text: '--color-gray'
  }
};
const bounce = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)`
  0% {
	opacity: 0;
	transform: scale(.8);
	transform-origin: 50% 100%;
  }

  50% {
	opacity: 1;
	transform: scale(1.2);
	transform-origin: 50% 100%;
  }

  100% {
	opacity: 1;
	transform: scale(1);
	transform-origin: 50% 100%;
  }
`;
const Marker = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  shouldForwardProp: prop => 'children' === prop
})`
  all: revert;

  --color-editor-info: #58d0f5;
  --color-ghost: #fff;
  --color-white: #fff;
  --color-gray: #a4afb6;
  --color-shadow: rgba(0, 0, 0, 0.2);
  --size: ${({
  size
}) => sizesMap[size]};
  --position: relative;

  display: grid;
  place-items: center;
  position: relative;
  height: calc(var(--size) * 1px);
  width: calc(var(--size) * 1px);
  line-height: 2.8;
  font-family: Roboto, sans-serif !important;
  font-size: calc(var(--size) * .38px);
  font-weight: 500;
  color: var(${({
  variant
}) => colorsMap[variant].text});
  isolation: isolate;
  animation: .3s ${bounce} both;
  transition: .3s all;

  ${({
  muted
}) => muted && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)`
	--color-shadow: transparent;
	opacity: .5 !important;
  `}

  &::before {
	--background-color: var(${({
  variant
}) => colorsMap[variant].background});
	--border-color: var( --background-color );

	content: '';
	display: block;
	position: absolute;
	z-index: -1;
	inset: 0;
	background-color: var( --background-color );
	border: calc(var(--size) / 20 * 1px) solid var(--border-color);
	border-radius: 100% 100% 25% 100%;
	transform: rotate(45deg);

	${({
  variant
}) => 'active' === variant && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)`
		  mask-image: radial-gradient(transparent 30%, #000 32%);
	`}

	${({
  variant
}) => 'ghost' === variant && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)`
		  --border-color: var(--color-gray);
	`}
  }
`;
Marker.propTypes = {
  variant: PropTypes.oneOf(['active', 'solid', 'ghost']).isRequired,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']).isRequired,
  muted: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};
Marker.defaultProps = {
  variant: 'solid',
  size: 'md',
  muted: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Marker);

/***/ }),

/***/ "../assets/js/app/components/ui/panel/panel-body.js":
/*!**********************************************************!*\
  !*** ../assets/js/app/components/ui/panel/panel-body.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PanelBody)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _div_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../div-base */ "../assets/js/app/components/ui/div-base.js");
/* harmony import */ var _panel_resizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panel-resizer */ "../assets/js/app/components/ui/panel/panel-resizer.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");





const StyledPanelBody = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_div_base__WEBPACK_IMPORTED_MODULE_1__["default"]))`
  position: relative !important;
  display: flex !important;
  flex-direction: column !important;
  overflow: hidden !important;
`;
function PanelBody(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledPanelBody, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_panel_resizer__WEBPACK_IMPORTED_MODULE_2__["default"], null, props.children));
}
PanelBody.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

/***/ }),

/***/ "../assets/js/app/components/ui/panel/panel-draggable.js":
/*!***************************************************************!*\
  !*** ../assets/js/app/components/ui/panel/panel-draggable.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PanelDraggable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-draggable */ "../../../node_modules/react-draggable/build/cjs/cjs.js");
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_use_debounced_callback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/use-debounced-callback */ "../assets/js/app/hooks/use-debounced-callback.js");
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./panel */ "../assets/js/app/components/ui/panel/panel.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");






function PanelDraggable(props) {
  const {
      size: {
        defaultWidth
      }
    } = (0,_panel__WEBPACK_IMPORTED_MODULE_3__.usePanelContext)(),
    [bounds, setBounds] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    [position, setPosition] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.defaultPosition),
    positionRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  positionRef.current = position;
  const onStopDrag = (event, dragElement) => {
    const {
      x,
      y
    } = dragElement;
    setPosition({
      x,
      y
    });
  };

  /**
   * Reset the position of the panel if it is outside the bounds of the window after resize.
   */
  const resetPosition = () => {
    const {
      x: currentX,
      y: currentY
    } = positionRef.current;
    const {
      x: defaultX,
      y: defaultY
    } = props.defaultPosition;
    if (currentX === defaultX && currentY === defaultY) {
      return;
    }
    const newX = currentX < bounds.left || currentX > bounds.right ? defaultX : currentX;
    const newY = currentY < bounds.top || currentY > bounds.bottom ? defaultY : currentY;
    if (newX === currentX && newY === currentY) {
      return;
    }
    setPosition({
      x: newX,
      y: newY
    });
  };

  /**
   * Disallow dragging the panel outside the window bounds.
   * Show at least 15% of the panel on the left and right sides of the window.
   * Show at least the panel handle on the bottom of the window.
   */
  const calculateBounds = (0,_hooks_use_debounced_callback__WEBPACK_IMPORTED_MODULE_2__["default"])(() => {
    const {
      innerWidth: windowWidth,
      innerHeight: windowHeight
    } = window;
    setBounds({
      top: 0,
      left: 0 - defaultWidth * 0.85,
      right: windowWidth - defaultWidth * 0.15,
      bottom: windowHeight - (props.nodeRef.current?.querySelector(props.handleClass)?.offsetHeight || 0)
    });
  }, 100);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    resetPosition();
  }, [bounds]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    calculateBounds();
    window.addEventListener('resize', calculateBounds);
    return () => {
      window.removeEventListener('resize', calculateBounds);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_draggable__WEBPACK_IMPORTED_MODULE_1___default()), {
    handle: props.handleClass,
    defaultPosition: props.defaultPosition,
    nodeRef: props.nodeRef,
    bounds: bounds,
    position: positionRef.current,
    onStop: onStopDrag
  }, props.children);
}
PanelDraggable.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  handleClass: PropTypes.string,
  defaultPosition: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }),
  nodeRef: PropTypes.shape({
    current: PropTypes.object
  }),
  isFloating: PropTypes.bool
};

/***/ }),

/***/ "../assets/js/app/components/ui/panel/panel-footer.js":
/*!************************************************************!*\
  !*** ../assets/js/app/components/ui/panel/panel-footer.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _div_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../div-base */ "../assets/js/app/components/ui/div-base.js");


const PanelFooter = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_div_base__WEBPACK_IMPORTED_MODULE_0__["default"]))`
  background: #fff !important;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PanelFooter);

/***/ }),

/***/ "../assets/js/app/components/ui/panel/panel-header-side-col.js":
/*!*********************************************************************!*\
  !*** ../assets/js/app/components/ui/panel/panel-header-side-col.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _div_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../div-base */ "../assets/js/app/components/ui/div-base.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");


const PanelHeaderSideCol = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_div_base__WEBPACK_IMPORTED_MODULE_0__["default"]))`
  display: flex !important;
  justify-self: ${({
  align
}) => align} !important;
`;
PanelHeaderSideCol.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  align: PropTypes.oneOf(['start', 'end']).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PanelHeaderSideCol);

/***/ }),

/***/ "../assets/js/app/components/ui/panel/panel-header-title.js":
/*!******************************************************************!*\
  !*** ../assets/js/app/components/ui/panel/panel-header-title.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");

const PanelHeaderTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h3`
	all: revert;

	font-family: Roboto, sans-serif !important;
	font-size: 13px !important;
	font-weight: 400 !important;
	text-transform: none !important;
	font-style: normal !important;
	text-decoration: none !important;
	line-height: 24px !important;
	letter-spacing: normal !important;
	word-spacing: normal !important;
  	color: #6d7882 !important;
  	text-align: center !important;
  	flex-grow: 1 !important;
  	margin: 0 !important;
  	user-select: none !important;

	&::before, &::after {
		display: none !important;
	}
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PanelHeaderTitle);

/***/ }),

/***/ "../assets/js/app/components/ui/panel/panel-header.js":
/*!************************************************************!*\
  !*** ../assets/js/app/components/ui/panel/panel-header.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PanelHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel */ "../assets/js/app/components/ui/panel/panel.js");
/* harmony import */ var _div_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../div-base */ "../assets/js/app/components/ui/div-base.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");





const StyledPanelHeader = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_div_base__WEBPACK_IMPORTED_MODULE_2__["default"]))`
  display: grid !important;
  grid-template-columns: 1fr 2fr 1fr !important;
  grid-column-gap: 10px !important;
  align-items: center !important;
  background: #ffffff !important;
  padding: 6px 8px !important;
  flex-shrink: 0 !important;

  ${({
  isFloating
}) => isFloating && (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.css)`
  	cursor: move;
  `}
`;
function PanelHeader(props) {
  const {
    floating: {
      active,
      handleClassName
    }
  } = (0,_panel__WEBPACK_IMPORTED_MODULE_1__.usePanelContext)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledPanelHeader, {
    className: handleClassName,
    isFloating: active
  }, props.children);
}
PanelHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

/***/ }),

/***/ "../assets/js/app/components/ui/panel/panel-loading.js":
/*!*************************************************************!*\
  !*** ../assets/js/app/components/ui/panel/panel-loading.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PanelLoading)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _div_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../div-base */ "../assets/js/app/components/ui/div-base.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon */ "../assets/js/app/components/ui/icon.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");





const StyledPanelLoading = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_div_base__WEBPACK_IMPORTED_MODULE_1__["default"]))`
  position: absolute !important;
  inset: 0 !important;
  background: #e6e9ec !important;
  transition: 0.3s all !important;
  font-size: 30px !important;
  display: grid !important;
  place-items: center !important;
  color: #a4afb6 !important;

  ${({
  show
}) => !show && (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.css)`
	opacity: 0 !important;
	pointer-events: none !important;
  `}
`;
function PanelLoading(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledPanelLoading, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "eicon-loading eicon-animation-spin"
  }));
}
PanelLoading.propTypes = {
  show: PropTypes.bool
};

/***/ }),

/***/ "../assets/js/app/components/ui/panel/panel-resizer.js":
/*!*************************************************************!*\
  !*** ../assets/js/app/components/ui/panel/panel-resizer.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PanelResizer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _div_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../div-base */ "../assets/js/app/components/ui/div-base.js");
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panel */ "../assets/js/app/components/ui/panel/panel.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");






const Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_div_base__WEBPACK_IMPORTED_MODULE_1__["default"]))`
  flex: 1 1 auto !important;
  inset: 0 !important;
  display: inline-flex !important;
  flex-direction: column !important;
  overflow: hidden !important;

  &.resizing {
    user-select: none;
  }
`;
const Children = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_div_base__WEBPACK_IMPORTED_MODULE_1__["default"]))`
  overflow-y: auto !important;
  flex-grow: 1 !important;
  flex-shrink: 1 !important;
`;
const handleProps = {
  height: 20
};
const Handle = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_div_base__WEBPACK_IMPORTED_MODULE_1__["default"]))`
  flex: 0 0 ${handleProps.height}px !important;
  display: inline-flex !important;
  justify-content: center !important;
  align-items: center !important;
  background-color: #fff !important;
  margin-top: 1px !important;
  cursor: row-resize !important;
`;
function PanelResizer(props) {
  const {
    size: {
      defaultHeight
    }
  } = (0,_panel__WEBPACK_IMPORTED_MODULE_2__.usePanelContext)();
  const resizableRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const childrenRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const handleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  let minHeight = 0,
    maxHeight,
    currentHeight,
    currentY = 0;
  const onMouseMove = e => {
    resizableRef.current.classList.add('resizing');
    const delta = e.clientY - currentY;
    currentHeight = currentHeight + delta;
    if (currentHeight < minHeight) {
      currentHeight = minHeight;
    }
    if (currentHeight > maxHeight) {
      currentHeight = maxHeight;
    }
    currentY = e.clientY;
    setCurrentHeight();
  };
  const onMouseUp = () => {
    document.removeEventListener('mousemove', onMouseMove);
    resizableRef.current.classList.remove('resizing');
  };
  const onMouseDown = e => {
    currentY = e.clientY;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };
  const calculateMinMax = () => {
    currentHeight = defaultHeight;
    setCurrentHeight();
    minHeight += handleProps.height;
    maxHeight = window.innerHeight;
  };
  const setCurrentHeight = () => {
    resizableRef.current.style.height = `${currentHeight}px`;
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    calculateMinMax();
    handleRef.current.addEventListener('mousedown', onMouseDown);
    return () => {
      if (handleRef.current) {
        handleRef.current.removeEventListener('mousedown', onMouseDown);
      }
    };
  }, [props.children]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Container, {
    ref: resizableRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Children, {
    ref: childrenRef
  }, props.children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Handle, {
    ref: handleRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "eicon-ellipsis-h"
  })));
}
PanelResizer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

/***/ }),

/***/ "../assets/js/app/components/ui/panel/panel.js":
/*!*****************************************************!*\
  !*** ../assets/js/app/components/ui/panel/panel.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Panel),
/* harmony export */   usePanelContext: () => (/* binding */ usePanelContext)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _div_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../div-base */ "../assets/js/app/components/ui/div-base.js");
/* harmony import */ var _panel_draggable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./panel-draggable */ "../assets/js/app/components/ui/panel/panel-draggable.js");
/* harmony import */ var _panel_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./panel-body */ "../assets/js/app/components/ui/panel/panel-body.js");
/* harmony import */ var _panel_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./panel-footer */ "../assets/js/app/components/ui/panel/panel-footer.js");
/* harmony import */ var _panel_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./panel-header */ "../assets/js/app/components/ui/panel/panel-header.js");
/* harmony import */ var _panel_header_side_col__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./panel-header-side-col */ "../assets/js/app/components/ui/panel/panel-header-side-col.js");
/* harmony import */ var _panel_header_title__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./panel-header-title */ "../assets/js/app/components/ui/panel/panel-header-title.js");
/* harmony import */ var _panel_loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./panel-loading */ "../assets/js/app/components/ui/panel/panel-loading.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils */ "../assets/js/app/utils.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");














const StyledPanel = (0,styled_components__WEBPACK_IMPORTED_MODULE_11__["default"])((0,_div_base__WEBPACK_IMPORTED_MODULE_2__["default"]))`
  display: flex !important;
  flex-direction: column !important;
  background: #e6e9ec !important;
  overflow: hidden !important;
  border-radius: 3px !important;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1) !important;

  ${({
  defaultSize
}) => defaultSize && (0,styled_components__WEBPACK_IMPORTED_MODULE_11__.css)`
	width: ${defaultSize.width}px !important;
	max-height: 100vh !important;
  `}

  ${({
  isFloating
}) => isFloating && (0,styled_components__WEBPACK_IMPORTED_MODULE_11__.css)`
	position: fixed !important;
	top: 0 !important;
	inset-inline-start: 0 !important;
	z-index: ${_utils__WEBPACK_IMPORTED_MODULE_10__.MAX_Z_INDEX} !important;
  `}

  // The class comes from the react-draggable component.
  &:not(.react-draggable-dragging) {
    transition: transform 0.3s ease-out !important;
  }

  *:focus {
    outline: none;
  }
`;
const PanelContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
function Panel(props) {
  const panelRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return {
      floating: {
        active: !!props.isFloating,
        handleClassName: 'floating-handle'
      },
      size: {
        defaultWidth: props.defaultSize.width,
        defaultHeight: props.defaultSize.height
      }
    };
  }, [props.isFloating]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(PanelContext.Provider, {
    value: contextValue
  }, props.isFloating ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_panel_draggable__WEBPACK_IMPORTED_MODULE_3__["default"], {
    handleClass: `.${contextValue.floating.handleClassName}`,
    defaultPosition: props.defaultPosition,
    nodeRef: panelRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(StyledPanel, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: panelRef,
    defaultSize: props.defaultSize
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(StyledPanel, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    defaultSize: props.defaultSize
  })));
}
Panel.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  defaultPosition: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }),
  defaultSize: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number
  }),
  isFloating: PropTypes.bool
};
Panel.Header = _panel_header__WEBPACK_IMPORTED_MODULE_6__["default"];
Panel.HeaderTitle = _panel_header_title__WEBPACK_IMPORTED_MODULE_8__["default"];
Panel.HeaderSideCol = _panel_header_side_col__WEBPACK_IMPORTED_MODULE_7__["default"];
Panel.Body = _panel_body__WEBPACK_IMPORTED_MODULE_4__["default"];
Panel.Loading = _panel_loading__WEBPACK_IMPORTED_MODULE_9__["default"];
Panel.Footer = _panel_footer__WEBPACK_IMPORTED_MODULE_5__["default"];
function usePanelContext() {
  const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(PanelContext);
  if (!contextValue) {
    throw new Error('`usePanelContext` must be used inside Panel\'s components.');
  }
  return contextValue;
}

/***/ }),

/***/ "../assets/js/app/components/ui/popover/popover-arrow.js":
/*!***************************************************************!*\
  !*** ../assets/js/app/components/ui/popover/popover-arrow.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @radix-ui/react-popover */ "../../../node_modules/@radix-ui/react-popover/dist/index.module.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");


const PopoverArrow = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_1__.Arrow))`
  fill: #fff;
  margin: 0 10px;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopoverArrow);

/***/ }),

/***/ "../assets/js/app/components/ui/popover/popover-close-button.js":
/*!**********************************************************************!*\
  !*** ../assets/js/app/components/ui/popover/popover-close-button.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopoverCloseButton)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-popover */ "../../../node_modules/@radix-ui/react-popover/dist/index.module.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _icon_button_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon-button/icon-button */ "../assets/js/app/components/ui/icon-button/icon-button.js");






const StyledCloseButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_icon_button_icon_button__WEBPACK_IMPORTED_MODULE_2__["default"]))`
  --position-spacing: 4px;

  position: absolute;
  top: var(--position-spacing);
  inset-inline-end: var(--position-spacing);
`;
function PopoverCloseButton(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_4__.Close, {
    asChild: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(StyledCloseButton, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    name: "eicon-editor-close",
    size: "sm"
  })));
}
PopoverCloseButton.propTypes = {
  ..._radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_4__.Close.propTypes
};

/***/ }),

/***/ "../assets/js/app/components/ui/popover/popover-content.js":
/*!*****************************************************************!*\
  !*** ../assets/js/app/components/ui/popover/popover-content.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-popover */ "../../../node_modules/@radix-ui/react-popover/dist/index.module.js");
/* harmony import */ var _styles_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../styles/animation */ "../assets/js/app/styles/animation.js");



const PopoverContent = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_2__.Content))`
  all: revert;

  font-family: Roboto, sans-serif !important;
  font-size: 1em !important;
  font-weight: normal !important;
  text-transform: none !important;
  font-style: normal !important;
  text-decoration: none !important;
  line-height: normal !important;
  letter-spacing: normal !important;
  word-spacing: normal !important;
  background: #fff !important;
  border-radius: 3px !important;
  min-width: 120px !important;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.15) !important;
  animation-duration: 400ms !important;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1) !important;

  &[data-state="open"] {
	&[data-side="top"] {
	  animation-name: ${_styles_animation__WEBPACK_IMPORTED_MODULE_0__.slideUpAndFade};
	}

	&[data-side="right"] {
	  animation-name: ${_styles_animation__WEBPACK_IMPORTED_MODULE_0__.slideRightAndFade};
	}

	&[data-side="bottom"] {
	  animation-name: ${_styles_animation__WEBPACK_IMPORTED_MODULE_0__.slideDownAndFade};
	}

	&[data-side="left"] {
	  animation-name: ${_styles_animation__WEBPACK_IMPORTED_MODULE_0__.slideLeftAndFade};
	}

    *:focus {
      outline: none;
    }
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopoverContent);

/***/ }),

/***/ "../assets/js/app/components/ui/popover/popover.js":
/*!*********************************************************!*\
  !*** ../assets/js/app/components/ui/popover/popover.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _popover_arrow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popover-arrow */ "../assets/js/app/components/ui/popover/popover-arrow.js");
/* harmony import */ var _popover_close_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover-close-button */ "../assets/js/app/components/ui/popover/popover-close-button.js");
/* harmony import */ var _popover_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popover-content */ "../assets/js/app/components/ui/popover/popover-content.js");
/* harmony import */ var _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-popover */ "../../../node_modules/@radix-ui/react-popover/dist/index.module.js");




const Popover = _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_3__.Root;
Popover.Trigger = _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_3__.Trigger;
Popover.Content = _popover_content__WEBPACK_IMPORTED_MODULE_2__["default"];
Popover.Arrow = _popover_arrow__WEBPACK_IMPORTED_MODULE_0__["default"];
Popover.CloseButton = _popover_close_button__WEBPACK_IMPORTED_MODULE_1__["default"];
Popover.propTypes = _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_3__.Root.propTypes;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popover);

/***/ }),

/***/ "../assets/js/app/components/ui/radio/radio.js":
/*!*****************************************************!*\
  !*** ../assets/js/app/components/ui/radio/radio.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Radio)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_radio_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-radio-group */ "../../../node_modules/@radix-ui/react-radio-group/dist/index.module.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _button_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button-base */ "../assets/js/app/components/ui/button-base.js");





const StyledItem = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_button_base__WEBPACK_IMPORTED_MODULE_1__["default"])).attrs(() => ({
  as: _radix_ui_react_radio_group__WEBPACK_IMPORTED_MODULE_3__.Item
}))`
  --border-color: #a4afb6;
  --background: #fff;
  --border: 1px solid var( --border-color );
  --border-radius: 100%;
  --width: 12px;
  --height: 12px;
  --display: inline-flex;

  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0;
  outline: none;
  transition: 0.2s all;
  overflow: hidden;

  &[data-state="checked"] {
    --border-color: #39b54a;
  }

  &:hover, &:focus {
	outline: none;
	--background: #eee;

	& > * {
	  --background: rgba(57, 181, 74, 0.8);
	}
  }
`;
const StyledIndicator = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_radix_ui_react_radio_group__WEBPACK_IMPORTED_MODULE_3__.Indicator))`
  all: revert;

  position: absolute !important;
  top: 0 !important;
  right: 0 !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  background: #39b54a !important;
  color: #fff !important;
  outline: none !important;
  font-size: 8px !important;
  margin: 2px !important;
  border-radius: 100% !important;
  width: 6px !important;
  height: 6px !important;
`;
function Radio(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledItem, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledIndicator, null));
}
Radio.propTypes = {
  ..._radix_ui_react_radio_group__WEBPACK_IMPORTED_MODULE_3__.Item.propTypes
};
Radio.Group = _radix_ui_react_radio_group__WEBPACK_IMPORTED_MODULE_3__.RadioGroup;

/***/ }),

/***/ "../assets/js/app/components/ui/separator/separator.js":
/*!*************************************************************!*\
  !*** ../assets/js/app/components/ui/separator/separator.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Separator)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-separator */ "../../../node_modules/@radix-ui/react-separator/dist/index.module.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");




const StyledSeparator = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_2__.Root))`
  background: #f1f3f5;

  &[data-orientation=horizontal] {
	height: 1px;
	width: 100%;
	margin: 10px 0;
  }

  &[data-orientation=vertical] {
	height: 100%;
	width: 1px;
	margin: 0 10px;
  }
`;
function Separator() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledSeparator, null);
}
Separator.propTypes = {
  ..._radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_2__.Root.propTypes
};

/***/ }),

/***/ "../assets/js/app/components/ui/textarea.js":
/*!**************************************************!*\
  !*** ../assets/js/app/components/ui/textarea.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _div_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./div-base */ "../assets/js/app/components/ui/div-base.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");






const Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_div_base__WEBPACK_IMPORTED_MODULE_2__["default"]))`
  --font: 300 12px Roboto, sans-serif;
  --line-height: 1.5;
  --padding-block: 8px;

  font-size: 12px !important;
  border-radius: 4px !important;
  border: 1px solid #c2cbd2 !important;
  transition: .3s border-color, .3s opacity !important;
  padding: var(--padding-block) 12px !important;
  overflow: auto !important;
  width: 100% !important;
  box-sizing: border-box !important;

  ${({
  maxRows
}) => maxRows && (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.css)`
	--max-rows: ${maxRows};

	max-height: calc((1em * var(--line-height) * var(--max-rows)) + (var(--padding-block) * 2)) !important;
  `};

  textarea {
    all: revert;

	border: none !important;
    font: var( --font ) !important;
	line-height: var(--line-height) !important;
	padding: 0 !important;
	margin: 0 !important;
	color: #6d7882 !important;
	display: block !important;
	height: 100% !important;

	&::placeholder {
	  color: #c2cbd2 !important;
	}
  }

  &:focus-within {
	border-color: #a4afb6 !important;

	// Accessibility-friendly, since the Container itself has a border on focus.
	textarea:focus {
	  outline: none !important;
	  border: none !important;
	}
  }

  ${({
  disabled
}) => disabled && (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.css)`
	opacity: .5 !important;
	pointer-events: none !important;
  `}

  ${({
  autoSize
}) => autoSize && (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.css)`
	display: inline-grid !important;
	vertical-align: top !important;
	align-items: center !important;

	textarea {
	  grid-area: 2 / 1 !important;
	  resize: none !important;
	  background: none !important;
	  appearance: none !important;
	  box-shadow: none !important;
	  overflow: hidden !important;

	  &::placeholder {
	    all: revert;
	  }
	}

	&::after {
	  content: attr(data-value) ' ' !important;
	  display: block !important;
	  font: var( --font ) !important;
	  white-space: pre-wrap !important;
	  grid-area: 2 / 1 !important;
	  visibility: hidden !important;
	  line-height: var(--line-height) !important;
	}`}`;
const Textarea = react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(({
  maxRows,
  autoSize,
  ...props
}, ref) => {
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Container, {
    maxRows: maxRows,
    "data-value": props.value || props.defaultValue,
    autoSize: autoSize,
    ref: containerRef,
    disabled: props.disabled
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("textarea", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    onInput: e => {
      if (props.onInput) {
        props.onInput(e);
      }
      containerRef.current.dataset.value = e.target.value;
    }
  })));
});
Textarea.displayName = 'Textarea';
Textarea.propTypes = {
  disabled: PropTypes.bool,
  autoSize: PropTypes.bool,
  maxRows: PropTypes.number,
  onInput: PropTypes.func,
  value: PropTypes.string,
  defaultValue: PropTypes.string
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Textarea);

/***/ }),

/***/ "../assets/js/app/components/ui/toast/toast-action.js":
/*!************************************************************!*\
  !*** ../assets/js/app/components/ui/toast/toast-action.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-toast */ "../../../node_modules/@radix-ui/react-toast/dist/index.module.js");
/* harmony import */ var _button_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../button-base */ "../assets/js/app/components/ui/button-base.js");



const ToastAction = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_button_base__WEBPACK_IMPORTED_MODULE_0__["default"])).attrs(() => ({
  as: _radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__.ToastAction
}))`
  --font-weight: 600 !important;
  --font-size: inherit !important;
  --font-family: inherit !important;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToastAction);

/***/ }),

/***/ "../assets/js/app/components/ui/toast/toast-close.js":
/*!***********************************************************!*\
  !*** ../assets/js/app/components/ui/toast/toast-close.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-toast */ "../../../node_modules/@radix-ui/react-toast/dist/index.module.js");
/* harmony import */ var _button_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../button-base */ "../assets/js/app/components/ui/button-base.js");



const ToastClose = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_button_base__WEBPACK_IMPORTED_MODULE_0__["default"])).attrs(() => ({
  as: _radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__.ToastClose
}))`
  --height: 1em !important;
  --width: 1em !important;
  --display: block !important;

  margin-inline-start: auto !important;
  position: relative !important;

  &::before,
  &::after {
	content: '' !important;
	display: block !important;
	position: absolute !important;
	left: 50% !important;
	top: 50% !important;
	margin-left: -1px !important;
	margin-top: -.5em !important;
	height: 1em !important;
	width: 2px;
	border-radius: 9999px !important;
	background-color: #69727d !important;
	transform-origin: center center !important;
	transition: .3s all;
  }

  &::before {
	transform: rotate( 45deg ) !important;
  }

  &::after {
	transform: rotate( -45deg ) !important;
  }

  &:hover::before,
  &:hover::after {
	background-color: #232629 !important
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToastClose);

/***/ }),

/***/ "../assets/js/app/components/ui/toast/toast-description.js":
/*!*****************************************************************!*\
  !*** ../assets/js/app/components/ui/toast/toast-description.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @radix-ui/react-toast */ "../../../node_modules/@radix-ui/react-toast/dist/index.module.js");


const ToastDescription = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_1__.ToastDescription))`
  font-weight: normal !important;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToastDescription);

/***/ }),

/***/ "../assets/js/app/components/ui/toast/toast-icon.js":
/*!**********************************************************!*\
  !*** ../assets/js/app/components/ui/toast/toast-icon.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icon */ "../assets/js/app/components/ui/icon.js");


const ToastIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_icon__WEBPACK_IMPORTED_MODULE_0__["default"]))`
  color: var( --color ) !important; // Inherited from the <Toast /> component.
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToastIcon);

/***/ }),

/***/ "../assets/js/app/components/ui/toast/toast-title.js":
/*!***********************************************************!*\
  !*** ../assets/js/app/components/ui/toast/toast-title.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @radix-ui/react-toast */ "../../../node_modules/@radix-ui/react-toast/dist/index.module.js");


const ToastTitle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_1__.ToastTitle))`
	font-weight: bold !important;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToastTitle);

/***/ }),

/***/ "../assets/js/app/components/ui/toast/toast-viewport.js":
/*!**************************************************************!*\
  !*** ../assets/js/app/components/ui/toast/toast-viewport.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-toast */ "../../../node_modules/@radix-ui/react-toast/dist/index.module.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils */ "../assets/js/app/utils.js");



const ToastViewport = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_2__.ToastViewport))`
  display: flex !important;
  flex-direction: column !important;
  gap: 12px !important;
  position: fixed !important;
  max-width: 960px !important;
  width: 100% !important;
  left: 50% !important;
  bottom: 10px !important;
  padding-inline: 0 10px !important;
  transform: translateX( -50% ) !important;
  z-index: ${_utils__WEBPACK_IMPORTED_MODULE_0__.MAX_Z_INDEX} !important;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToastViewport);

/***/ }),

/***/ "../assets/js/app/components/ui/toast/toast.js":
/*!*****************************************************!*\
  !*** ../assets/js/app/components/ui/toast/toast.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-toast */ "../../../node_modules/@radix-ui/react-toast/dist/index.module.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _toast_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toast-action */ "../assets/js/app/components/ui/toast/toast-action.js");
/* harmony import */ var _toast_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toast-icon */ "../assets/js/app/components/ui/toast/toast-icon.js");
/* harmony import */ var _styles_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/animation */ "../assets/js/app/styles/animation.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");





const colorsMap = {
  default: {
    background: '#f1f2f3',
    icon: '#69727d',
    action: '#69727d'
  },
  success: {
    background: '#e9fbee',
    icon: '#1d6d38',
    action: '#1d6d38'
  },
  warning: {
    background: '#fff5e6',
    icon: '#976402',
    action: '#976402'
  },
  info: {
    background: '#e6f6ff',
    icon: '#006bb8',
    action: '#006bb8'
  },
  danger: {
    background: '#fde8ec',
    icon: '#b92136',
    action: '#b92136'
  }
};
const Toast = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_4__.Toast))`
  display: flex !important;
  gap: 8px !important;
  align-items: center !important;
  width: 100% !important;
  box-sizing: border-box !important;
  padding: 12px 16px !important;
  font-size: 14px !important;
  line-height: normal !important;
  color: #3a3f45 !important;
  text-align: start !important;
  border-radius: 6px !important;
  box-shadow: 0 0 15px 0 rgba( 0,0,0,.2 ) !important;
  animation-duration: 400ms !important;
  animation-timing-function: cubic-bezier( 0.16, 1, 0.3, 1 ) !important;
  background-color: ${({
  variant
}) => colorsMap[variant].background} !important;

	&[data-state="open"] {
	  animation-name: ${_styles_animation__WEBPACK_IMPORTED_MODULE_2__.slideUpAndFade} !important;
	}

	&[data-state="closed"] {
	  animation-name: ${_styles_animation__WEBPACK_IMPORTED_MODULE_2__.fadeOut} !important;
	}

	${_toast_icon__WEBPACK_IMPORTED_MODULE_1__["default"]} {
	  --color: ${({
  variant
}) => colorsMap[variant].icon} !important;
	}

	${_toast_action__WEBPACK_IMPORTED_MODULE_0__["default"]} {
	  --color: ${({
  variant
}) => colorsMap[variant].icon} !important;
	}
`;
Toast.propTypes = {
  variant: PropTypes.oneOf(['default', 'success', 'warning', 'info', 'danger']).isRequired
};
Toast.defaultProps = {
  variant: 'default'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Toast);

/***/ }),

/***/ "../assets/js/app/components/ui/tooltip/tooltip-arrow.js":
/*!***************************************************************!*\
  !*** ../assets/js/app/components/ui/tooltip/tooltip-arrow.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @radix-ui/react-tooltip */ "../../../node_modules/@radix-ui/react-tooltip/dist/index.module.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");


const TooltipArrow = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.Arrow))`
  fill: #26292c;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TooltipArrow);

/***/ }),

/***/ "../assets/js/app/components/ui/tooltip/tooltip-content.js":
/*!*****************************************************************!*\
  !*** ../assets/js/app/components/ui/tooltip/tooltip-content.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-tooltip */ "../../../node_modules/@radix-ui/react-tooltip/dist/index.module.js");
/* harmony import */ var _styles_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../styles/animation */ "../assets/js/app/styles/animation.js");



const TooltipContent = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_2__.Content))`
  all: revert;

  font-family: Roboto, sans-serif !important;
  font-size: 12px !important;
  font-weight: normal !important;
  text-transform: none !important;
  font-style: normal !important;
  text-decoration: none !important;
  line-height: normal !important;
  letter-spacing: normal !important;
  word-spacing: normal !important;
  background: #26292c !important;
  color: #fff !important;
  border-radius: 3px !important;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.15) !important;
  padding: 5px 12px !important;
  animation-duration: 400ms !important;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1) !important;
  will-change: transform, opacity !important;
  max-width: 150px !important;

  &[data-state="delayed-open"] {
	&[data-side="top"] {
	  animation-name: ${_styles_animation__WEBPACK_IMPORTED_MODULE_0__.slideUpAndFade}
	}

	&[data-side="right"] {
	  animation-name: ${_styles_animation__WEBPACK_IMPORTED_MODULE_0__.slideRightAndFade}
	}

	&[data-side="bottom"] {
	  animation-name: ${_styles_animation__WEBPACK_IMPORTED_MODULE_0__.slideDownAndFade}
	}

	&[data-side="left"] {
	  animation-name: ${_styles_animation__WEBPACK_IMPORTED_MODULE_0__.slideLeftAndFade}
	}
  }
`;
TooltipContent.propTypes = _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_2__.Content.propTypes;
TooltipContent.defaultProps = {
  side: 'top'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TooltipContent);

/***/ }),

/***/ "../assets/js/app/components/ui/tooltip/tooltip.js":
/*!*********************************************************!*\
  !*** ../assets/js/app/components/ui/tooltip/tooltip.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-tooltip */ "../../../node_modules/@radix-ui/react-tooltip/dist/index.module.js");
/* harmony import */ var _tooltip_arrow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tooltip-arrow */ "../assets/js/app/components/ui/tooltip/tooltip-arrow.js");
/* harmony import */ var _tooltip_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltip-content */ "../assets/js/app/components/ui/tooltip/tooltip-content.js");



const Tooltip = _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_2__.Root;
Tooltip.Trigger = _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_2__.Trigger;
Tooltip.Arrow = _tooltip_arrow__WEBPACK_IMPORTED_MODULE_0__["default"];
Tooltip.Content = _tooltip_content__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tooltip);

/***/ }),

/***/ "../assets/js/app/components/ui/typeahead/typeahead-list-footer.js":
/*!*************************************************************************!*\
  !*** ../assets/js/app/components/ui/typeahead/typeahead-list-footer.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _typeahead_list_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeahead-list-item */ "../assets/js/app/components/ui/typeahead/typeahead-list-item.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");


const TypeaheadListFooter = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_typeahead_list_item__WEBPACK_IMPORTED_MODULE_0__["default"])).attrs(() => ({
  role: 'contentinfo'
}))`
	font-family: Roboto, sans-serif !important;
	background: #f1f3f5 !important;
	text-align: center !important;
	font-size: 12px !important;
  	line-height: 1.5 !important;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TypeaheadListFooter);

/***/ }),

/***/ "../assets/js/app/components/ui/typeahead/typeahead-list-item.js":
/*!***********************************************************************!*\
  !*** ../assets/js/app/components/ui/typeahead/typeahead-list-item.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TypeaheadListItem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");




const StyledItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li`
	all: revert;

	font-family: Roboto, sans-serif !important;
	font-size: 12px !important;
	color: #6d7882 !important;
	background: #ffffff !important;
	padding: 8px !important;
	cursor: pointer !important;

	&:first-child {
		border-top-right-radius: inherit;
		border-top-left-radius: inherit;
	}

	&:last-child {
		border-bottom-right-radius: inherit;
		border-bottom-left-radius: inherit;
	}

	&[role="option"]:hover,
	&[aria-selected="true"] {
		background: #58d0f5 !important;

		&,
		& * {
			color: #ffffff !important;
		}
	}

	&[aria-disabled="true"] {
		cursor: not-allowed !important;
		opacity: .5 !important;
	}
`;
function TypeaheadListItem({
  children,
  value,
  disabled,
  ...rest
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(StyledItem, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    role: disabled ? 'listitem' : 'option',
    "data-value": value
  }, disabled ? {
    'aria-disabled': true
  } : {}, rest), children);
}
TypeaheadListItem.propTypes = {
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired
};
TypeaheadListItem.defaultProps = {
  value: ''
};

/***/ }),

/***/ "../assets/js/app/components/ui/typeahead/typeahead-list.js":
/*!******************************************************************!*\
  !*** ../assets/js/app/components/ui/typeahead/typeahead-list.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");

const TypeaheadList = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul`
	all: revert;

	padding: 0 !important;
	margin: 0 !important;
	list-style: none !important;
	width: 272px !important;
	z-index: 1 !important; // Just needs any 'z-index' value in order to appear above other things.
	background: #ffffff !important;
	border-radius: 3px !important;
	box-shadow: 0 1px 20px rgba(0, 0, 0, 0.15) !important;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TypeaheadList);

/***/ }),

/***/ "../assets/js/app/components/ui/typeahead/typeahead.js":
/*!*************************************************************!*\
  !*** ../assets/js/app/components/ui/typeahead/typeahead.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_use_debounced_callback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/use-debounced-callback */ "../assets/js/app/hooks/use-debounced-callback.js");
/* harmony import */ var _typeahead_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./typeahead-list */ "../assets/js/app/components/ui/typeahead/typeahead-list.js");
/* harmony import */ var _typeahead_list_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./typeahead-list-item */ "../assets/js/app/components/ui/typeahead/typeahead-list-item.js");
/* harmony import */ var _typeahead_list_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./typeahead-list-footer */ "../assets/js/app/components/ui/typeahead/typeahead-list-footer.js");
/* harmony import */ var _github_text_expander_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @github/text-expander-element */ "../../../node_modules/@github/text-expander-element/dist/index.js");
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");








const Typeahead = props => {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),
    fragment = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  /**
   * Debounced fragment renderer.
   *
   * @param {Function} resolve - Promise resolve function.
   * @param {string}   text    - Text to pass to the rendered fragment as a filter prop.
   *
   * @return {void}
   */
  const debouncedResultsRender = (0,_hooks_use_debounced_callback__WEBPACK_IMPORTED_MODULE_1__["default"])(({
    resolve,
    text
  }) => {
    if (!fragment.current) {
      fragment.current = document.createElement('div');
    }
    const result = props.fragment({
      search: text
    });
    ReactDOM.render(result, fragment.current); // eslint-disable-line react/no-deprecated

    resolve({
      matched: true,
      fragment: fragment.current
    });
  }, props.debounce);

  /**
   * Handle mention change.
   *
   * @param {CustomEvent} e
   *
   * @return {void}
   */
  const onChange = e => {
    const {
      provide,
      text
    } = e.detail;
    provide(new Promise(resolve => debouncedResultsRender({
      resolve,
      text
    })));
  };

  /**
   * Handle mention select.
   *
   * @param {CustomEvent} e
   *
   * @return {void}
   */
  const onValue = e => {
    const {
      item
    } = e.detail;
    e.detail.value = `${props.handle}${item.dataset.value}`;
    props.onSelect(item, e);
  };

  // Init & cleanup events.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    ref.current.addEventListener('text-expander-change', onChange);
    ref.current.addEventListener('text-expander-value', onValue);
    return () => {
      if (ref.current) {
        ref.current.removeEventListener('text-expander-change', onChange);
        ref.current.removeEventListener('text-expander-value', onValue);
      }
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text-expander", {
    keys: props.handle,
    ref: ref,
    multiword: props.multiword ? props.handle : null
  }, props.children);
};
Typeahead.List = _typeahead_list__WEBPACK_IMPORTED_MODULE_2__["default"];
Typeahead.ListItem = _typeahead_list_item__WEBPACK_IMPORTED_MODULE_3__["default"];
Typeahead.ListFooter = _typeahead_list_footer__WEBPACK_IMPORTED_MODULE_4__["default"];
Typeahead.propTypes = {
  fragment: PropTypes.func.isRequired,
  debounce: PropTypes.number.isRequired,
  handle: PropTypes.string.isRequired,
  multiword: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onSelect: PropTypes.func.isRequired
};
Typeahead.defaultProps = {
  debounce: 0,
  handle: '@',
  multiword: false,
  onSelect: () => {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Typeahead);

/***/ }),

/***/ "../assets/js/app/context/elements.js":
/*!********************************************!*\
  !*** ../assets/js/app/context/elements.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElementsProvider: () => (/* binding */ ElementsProvider),
/* harmony export */   useElements: () => (/* binding */ useElements)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




const ElementsContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);

/**
 *
 * @return {{elements: Map<string, HTMLElement>, getDocumentIdByElement: Function}} context
 */
const useElements = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ElementsContext);
};
const ElementsProvider = props => {
  const [elements, setElements] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(() => new Map());
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const map = new Map(),
      noteCapableElements = document.querySelectorAll('.elementor-element[data-id]');
    noteCapableElements.forEach(element => {
      const {
        id
      } = element.dataset;
      if (!map.has(id)) {
        map.set(id, element);
      }
    });
    setElements(map);
  }, []);

  /**
   * Get the document ID for an element.
   * Used mainly for handling Header / Footer notes when create a note in a page and not directly on them.
   *
   * @param {string}        elementId - Elementor element ID.
   * @param {string|number} defaultId - Default ID to return.
   *
   * @return {string|number}
   */
  const getDocumentIdByElement = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((elementId, defaultId = window.top.$e.components.get('notes').config.route.post_id) => {
    if (!elements.has(elementId)) {
      return defaultId;
    }
    const document = elements.get(elementId).closest('[data-elementor-id]');
    if (!document) {
      return defaultId;
    }
    return document.dataset.elementorId;
  }, [elements]);
  const value = {
    elements,
    getDocumentIdByElement
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ElementsContext.Provider, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    value: value
  }, props));
};

/***/ }),

/***/ "../assets/js/app/hooks/use-active-thread.js":
/*!***************************************************!*\
  !*** ../assets/js/app/hooks/use-active-thread.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NEW_THREAD: () => (/* binding */ NEW_THREAD),
/* harmony export */   THREAD: () => (/* binding */ THREAD),
/* harmony export */   "default": () => (/* binding */ useActiveThread)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../../../node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const THREAD = 'thread';
const NEW_THREAD = 'new-thread';
function useActiveThread() {
  const activeThread = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(state => state.notes.active);

  /**
   * Set the current active thread.
   *
   * @return void
   */
  const setActive = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(({
    type,
    data
  }) => {
    const allowedTypes = [THREAD, NEW_THREAD];
    if (!allowedTypes.includes(type)) {
      throw new Error('`setActive()` type must be one of: ' + allowedTypes.join(', '));
    }
    return window.top.$e.run('notes/set-active', {
      type,
      data
    });
  }, []);

  /**
   * Clear the current active thread state.
   *
   * @param {number|null} id - Always clear if `id = null`, or clear only if `id` is provided and is the active thread.
   *
   * @return void
   */
  const clearActive = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((id = null) => {
    return window.top.$e.run('notes/clear-active', {
      id
    });
  }, []);

  /**
   * Determine of a thread is currently active.
   *
   * @return {boolean}
   */
  const isThreadActive = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(noteId => {
    return THREAD === activeThread?.type && activeThread?.data.noteId === noteId;
  }, [activeThread]);
  return {
    activeThread,
    setActive,
    clearActive,
    isThreadActive
  };
}

/***/ }),

/***/ "../assets/js/app/hooks/use-auto-focus.js":
/*!************************************************!*\
  !*** ../assets/js/app/hooks/use-auto-focus.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useAutoFocus)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/**
 * When using the native autofocus and the input is filled with value the cursor
 * will be positioned at the start of the input value, this hook make sure the cursor will be at the end.
 *
 * @param {string|undefined} value the value of the input
 * @return {React.MutableRefObject<undefined>} reference
 */
function useAutoFocus(value) {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (ref.current) {
      const lastCharPosition = value ? value.length : 0;
      ref.current.focus();
      ref.current.setSelectionRange(lastCharPosition, lastCharPosition);
    }
  }, []);
  return ref;
}

/***/ }),

/***/ "../assets/js/app/hooks/use-debounced-callback.js":
/*!********************************************************!*\
  !*** ../assets/js/app/hooks/use-debounced-callback.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useDebouncedCallback)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useDebouncedCallback(callback, wait) {
  const timeout = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((...args) => {
    const later = () => {
      clearTimeout(timeout.current);
      callback(...args);
    };
    clearTimeout(timeout.current);
    timeout.current = setTimeout(later, wait);
  }, [callback, wait]);
}

/***/ }),

/***/ "../assets/js/app/hooks/use-forms-in-writing-mode.js":
/*!***********************************************************!*\
  !*** ../assets/js/app/hooks/use-forms-in-writing-mode.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useFormsInWritingMode)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../../../node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



/**
 * A util that manage all the forms that the user start to write some content on them.
 *
 * @return {Object} results
 */
function useFormsInWritingMode() {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(),
    {
      actions
    } = window.top.$e.store.get('notes'),
    formsInWritingMode = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(state => state.notes.formsInWritingMode);
  const isInWritingMode = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(id => formsInWritingMode.includes(id), [formsInWritingMode]);
  const addToWritingMode = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(id => dispatch(actions.addFormToWritingMode(id)), [dispatch]);
  const removeFromWritingMode = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(id => dispatch(actions.removeFormFromWritingMode(id)), [dispatch]);
  return {
    formsInWritingMode,
    isInWritingMode,
    addToWritingMode,
    removeFromWritingMode
  };
}

/***/ }),

/***/ "../assets/js/app/hooks/use-new-thread-events.js":
/*!*******************************************************!*\
  !*** ../assets/js/app/hooks/use-new-thread-events.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DISABLE_NEW_THREAD: () => (/* binding */ DISABLE_NEW_THREAD),
/* harmony export */   "default": () => (/* binding */ useNewThreadEvents)
/* harmony export */ });
/* harmony import */ var _use_user_can__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-user-can */ "../assets/js/app/hooks/use-user-can.js");
/* harmony import */ var _use_active_thread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-active-thread */ "../assets/js/app/hooks/use-active-thread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/elements */ "../assets/js/app/context/elements.js");





// ClassName used to disable new thread events on click.
const DISABLE_NEW_THREAD = 'e-notes--disable-new-thread';

// ClassName used to display the mark and the hover on an element.
const NOTABLE_CLASSNAME = 'e-route-notes--notable';

/**
 * Bind click events to notable elements.
 *
 * @return {void}
 */
function useNewThreadEvents() {
  const canCreateThread = useCanCreateThread(),
    {
      elements
    } = (0,_context_elements__WEBPACK_IMPORTED_MODULE_3__.useElements)(),
    {
      setActive
    } = (0,_use_active_thread__WEBPACK_IMPORTED_MODULE_1__["default"])();

  // Don't open new thread popover when clicking on an elements that disables it.
  // (e.g. marker that opens a note).
  const isNewThreadDisabled = e => {
    const isDisabledByKeyboard = e.ctrlKey || e.metaKey || e.altKey,
      isDisabledByClass = e.target.closest(`.${DISABLE_NEW_THREAD}`);
    return isDisabledByKeyboard || isDisabledByClass;
  };

  // Disable default links behavior.
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const onClick = e => {
      if (isNewThreadDisabled(e)) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
    };
    elements.forEach(element => {
      element.addEventListener('click', onClick);
    });
    return () => {
      elements.forEach(element => {
        element.removeEventListener('click', onClick);
      });
    };
  }, [elements]);

  // Change the active element on Elementor element click, to open a new-thread popover.
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const onPointerDown = e => {
      const isPrimaryMouseButton = 1 === e.buttons;
      if (!isPrimaryMouseButton || isNewThreadDisabled(e)) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      setActive({
        type: _use_active_thread__WEBPACK_IMPORTED_MODULE_1__.NEW_THREAD,
        data: {
          elementId: e.currentTarget.dataset.id,
          position: getClickPositionRelativeToTarget(e)
        }
      });
    };

    // Bind events.
    if (elements.size && canCreateThread) {
      elements.forEach(element => {
        // Using `pointerdown` instead of `click` because when interacting out of the popover,
        // a `click` event is being propagated to the underlying elements when the user releases
        // the mouse pointer, which triggers the click handler. This behavior causes a bug where
        // a new thread form is being opened instead of just closing the popover.
        element.addEventListener('pointerdown', onPointerDown);
      });
      document.body.classList.add(NOTABLE_CLASSNAME);
    }

    // Cleanup.
    return () => {
      elements.forEach(element => {
        element.removeEventListener('pointerdown', onPointerDown);
      });
      document.body.classList.remove(NOTABLE_CLASSNAME);
    };
  }, [elements, canCreateThread]);
}

/**
 * Check if the user has permissions to create thread and there is no active thread.
 *
 * @return {boolean} does user have permissions to create a thread
 */
function useCanCreateThread() {
  const hasPermission = (0,_use_user_can__WEBPACK_IMPORTED_MODULE_0__["default"])(_use_user_can__WEBPACK_IMPORTED_MODULE_0__.CAPABILITY_CREATE),
    {
      activeThread
    } = (0,_use_active_thread__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => hasPermission && !activeThread, [hasPermission, activeThread]);
}

/**
 * Get the mouse click position as percentages, relative to the `currentTarget`.
 *
 * @param {MouseEvent} e
 *
 * @return {{x: number, y: number}} location
 */
function getClickPositionRelativeToTarget(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  return {
    x: (e.clientX - rect.left) / rect.width * 100,
    y: (e.clientY - rect.top) / rect.height * 100
  };
}

/***/ }),

/***/ "../assets/js/app/hooks/use-note.js":
/*!******************************************!*\
  !*** ../assets/js/app/hooks/use-note.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useNote)
/* harmony export */ });
/* harmony import */ var _models_note__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/note */ "../assets/js/app/models/note.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "../../../node_modules/react-query/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




// Hook to fetch note data by ID.
function useNote(noteId) {
  const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)(),
    onSuccess = useOnSuccess(queryClient),
    placeholderData = usePlaceholderDataCallback(queryClient, noteId);
  return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)(['note', noteId], async ({
    queryKey: [, id],
    signal
  }) => {
    const {
      data
    } = await window.top.$e.data.get('notes/index', {
      id
    }, {
      refresh: true,
      signal
    });
    return _models_note__WEBPACK_IMPORTED_MODULE_0__["default"].createFromResponse(data.data);
  }, {
    onSuccess,
    placeholderData // Use Note placeholder data from the "main" query.
  });
}

// Get placeholder data for note.
function usePlaceholderDataCallback(queryClient, noteId) {
  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    return queryClient.getQueryData('notes', {
      active: true,
      exact: false
    })?.find(note => note.id === noteId);
  }, [queryClient, noteId]);
}

// Hook to replace the Thread data in the "main" query, each time a Thread is fetched.
function useOnSuccess(queryClient) {
  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(fetchedNote => {
    if (fetchedNote.isReply()) {
      return;
    }
    queryClient.setQueriesData({
      queryKey: ['notes'],
      exact: false,
      active: true
    }, notes => {
      if (!notes) {
        return notes;
      }

      // Replace the corresponding Thread (it must be new array to trigger re-render in react components).
      return notes.map(note => note.id === fetchedNote.id ? fetchedNote : note);
    });
  }, [queryClient]);
}

/***/ }),

/***/ "../assets/js/app/hooks/use-notes-config.js":
/*!**************************************************!*\
  !*** ../assets/js/app/hooks/use-notes-config.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useNotesConfig)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Returns notes configuration
 *
 * @return {Object} config
 */
function useNotesConfig() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => window.top.$e.components.get('notes').config, []);
}

/***/ }),

/***/ "../assets/js/app/hooks/use-notes-filters.js":
/*!***************************************************!*\
  !*** ../assets/js/app/hooks/use-notes-filters.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useNotesFilters)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../../../node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Use & set Notes filters from the global state.
 */
function useNotesFilters() {
  const filters = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(state => state.notes.filters),
    setFilters = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((newFilters, overwrite = false) => {
      return window.top.$e.run('notes/filter', {
        filters: newFilters,
        overwrite
      });
    }, []);
  return [filters, setFilters];
}

/***/ }),

/***/ "../assets/js/app/hooks/use-notes-mutations.js":
/*!*****************************************************!*\
  !*** ../assets/js/app/hooks/use-notes-mutations.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCreateMutation: () => (/* binding */ useCreateMutation),
/* harmony export */   useDeleteMutation: () => (/* binding */ useDeleteMutation),
/* harmony export */   useReadMutation: () => (/* binding */ useReadMutation),
/* harmony export */   useResolveMutation: () => (/* binding */ useResolveMutation),
/* harmony export */   useUpdateMutation: () => (/* binding */ useUpdateMutation)
/* harmony export */ });
/* harmony import */ var _models_note__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/note */ "../assets/js/app/models/note.js");
/* harmony import */ var _use_notes_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-notes-config */ "../assets/js/app/hooks/use-notes-config.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "../assets/js/app/utils.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query */ "../../../node_modules/react-query/es/index.js");
/* harmony import */ var _context_elements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/elements */ "../assets/js/app/context/elements.js");
/* harmony import */ var _use_active_thread__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./use-active-thread */ "../assets/js/app/hooks/use-active-thread.js");







function useCreateMutation() {
  const invalidateSingle = useInvalidateSingle(),
    invalidateList = useInvalidateList(),
    invalidateSummary = useInvalidateSummary(),
    {
      getDocumentIdByElement
    } = (0,_context_elements__WEBPACK_IMPORTED_MODULE_5__.useElements)(),
    config = (0,_use_notes_config__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useMutation)(async ({
    postId,
    elementId,
    content,
    position = {
      x: 0,
      y: 0
    },
    routeUrl = config.route.url,
    routeTitle = config.route.title,
    routePostId = config.route.post_id,
    status = 'publish',
    parentId,
    isPublic = null
  }) => {
    if (!postId) {
      postId = getDocumentIdByElement(elementId);
    }
    const {
      data
    } = await window.top.$e.data.create('notes/index', {
      post_id: postId,
      element_id: elementId,
      content,
      position,
      route_post_id: routePostId,
      route_url: routeUrl,
      route_title: routeTitle,
      status,
      parent_id: parentId,
      mentioned_usernames: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.extractMentions)(content),
      ...(null !== isPublic ? {
        is_public: isPublic
      } : {})
    });
    return _models_note__WEBPACK_IMPORTED_MODULE_0__["default"].createFromResponse(data.data);
  }, {
    onSuccess: note => Promise.all(note.isThread() ? [invalidateSummary({
      exact: false
    }), invalidateList({
      exact: false
    })] : [invalidateSingle({
      id: note.parentId
    })])
  });
}
function useUpdateMutation() {
  const invalidateSingle = useInvalidateSingle();
  return (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useMutation)(async ({
    id,
    values: {
      content
    }
  }) => {
    const {
      data
    } = await window.top.$e.data.update('notes/index', {
      content,
      mentioned_usernames: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.extractMentions)(content)
    }, {
      id
    });
    return _models_note__WEBPACK_IMPORTED_MODULE_0__["default"].createFromResponse(data.data);
  }, {
    onSuccess: note => invalidateSingle({
      id: note.isThread() ? note.id : note.parentId
    })
  });
}
function useDeleteMutation() {
  const invalidateList = useInvalidateList(),
    invalidateSingle = useInvalidateSingle(),
    invalidateSummary = useInvalidateSummary(),
    {
      clearActive
    } = (0,_use_active_thread__WEBPACK_IMPORTED_MODULE_6__["default"])();
  return (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useMutation)(async ({
    id,
    parentId,
    force = false
  }) => {
    await window.top.$e.data.delete('notes/index', (0,_utils__WEBPACK_IMPORTED_MODULE_2__.normalizeQueryParams)({
      id,
      force
    }));
    return {
      id,
      parentId
    };
  }, {
    onSuccess: ({
      id,
      parentId
    }) => {
      clearActive(id);
      const isThread = !parentId;
      return Promise.all(isThread ? [invalidateSummary({
        exact: false
      }), invalidateList({
        exact: false
      })] : [invalidateSingle({
        id: parentId
      })]);
    }
  });
}
function useResolveMutation() {
  const invalidateList = useInvalidateList(),
    invalidateSingle = useInvalidateSingle(),
    invalidateSummary = useInvalidateSummary();
  return (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useMutation)(async ({
    id,
    isResolved
  }) => {
    const {
      data
    } = await window.top.$e.data.update('notes/index', {
      is_resolved: isResolved
    }, {
      id
    });
    return _models_note__WEBPACK_IMPORTED_MODULE_0__["default"].createFromResponse(data.data);
  }, {
    onSuccess: note => {
      // Invalidate only the queries that do filter by is_resolved.
      const listPredicate = ({
        queryKey
      }) => Object.prototype.hasOwnProperty.call(queryKey[1] || {}, 'is_resolved');
      return Promise.all([invalidateSingle({
        id: note.id
      }), invalidateList({
        predicate: listPredicate
      }), invalidateSummary({
        predicate: listPredicate
      })]);
    }
  });
}
function useReadMutation() {
  const invalidateList = useInvalidateList(),
    invalidateSingle = useInvalidateSingle(),
    invalidateSummary = useInvalidateSummary();
  return (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useMutation)(async ({
    ids,
    isRead
  }) => {
    ids = ids.filter(id => !!id && id > 0);
    await window.top.$e.data[isRead ? 'create' : 'delete']('notes/read-status', {
      ids
    });
    return ids;
  }, {
    onSuccess: ids => {
      // Invalidate "single queries" that their ID was mutated.
      const singlePredicate = ({
        queryKey
      }) => ids.includes(queryKey[1]);

      // Invalidate only the queries that filter by only_unread.
      const listPredicate = ({
        queryKey
      }) => Object.prototype.hasOwnProperty.call(queryKey[1] || {}, 'only_unread');
      return Promise.all([invalidateSingle({
        predicate: singlePredicate
      }), invalidateSummary({
        predicate: listPredicate
      }), invalidateList({
        predicate: listPredicate,
        refetchActive: false // Should not remove the note from the active list after reading it, even if `only_unread` is applied.
      })]);
    }
  });
}

function useInvalidateSingle() {
  const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useQueryClient)();
  return (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(({
    id,
    ...options
  }) => {
    const queryKey = ['note'];
    if (id) {
      queryKey.push(id);
    }
    return queryClient.invalidateQueries(queryKey, options);
  }, [queryClient]);
}
function useInvalidateList() {
  const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useQueryClient)();
  return (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((options = {}) => {
    const queryKey = ['notes'];
    return queryClient.invalidateQueries(queryKey, options);
  }, [queryClient]);
}
function useInvalidateSummary() {
  const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useQueryClient)();
  return (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((options = {}) => {
    const queryKey = ['notes/summary'];
    return queryClient.invalidateQueries(queryKey, options);
  }, [queryClient]);
}

/***/ }),

/***/ "../assets/js/app/hooks/use-notes-or-notes-summary.js":
/*!************************************************************!*\
  !*** ../assets/js/app/hooks/use-notes-or-notes-summary.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VIEW_NOTES: () => (/* binding */ VIEW_NOTES),
/* harmony export */   VIEW_NOTES_SUMMARY: () => (/* binding */ VIEW_NOTES_SUMMARY),
/* harmony export */   "default": () => (/* binding */ useNotesOrNotesSummary)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_notes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-notes */ "../assets/js/app/hooks/use-notes.js");
/* harmony import */ var _use_notes_summary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-notes-summary */ "../assets/js/app/hooks/use-notes-summary.js");



const VIEW_NOTES = 'notes';
const VIEW_NOTES_SUMMARY = 'notes-summary';
function useNotesOrNotesSummary() {
  const [view, setView] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(VIEW_NOTES),
    isNotesView = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => VIEW_NOTES === view, [view]),
    isNotesSummaryView = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => VIEW_NOTES_SUMMARY === view, [view]);
  const notesQuery = (0,_use_notes__WEBPACK_IMPORTED_MODULE_1__["default"])({
      enabled: isNotesView
    }),
    notesSummaryQuery = (0,_use_notes_summary__WEBPACK_IMPORTED_MODULE_2__["default"])({
      enabled: isNotesSummaryView
    });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    ...(VIEW_NOTES === view ? notesQuery : notesSummaryQuery),
    setView,
    view,
    isNotesView,
    isNotesSummaryView
  }), [notesQuery, notesSummaryQuery]);
}

/***/ }),

/***/ "../assets/js/app/hooks/use-notes-summary.js":
/*!***************************************************!*\
  !*** ../assets/js/app/hooks/use-notes-summary.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useNotesSummary)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "../../../node_modules/react-query/es/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "../assets/js/app/utils.js");
/* harmony import */ var _models_note_summary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/note-summary */ "../assets/js/app/models/note-summary.js");
/* harmony import */ var _use_notes_filters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-notes-filters */ "../assets/js/app/hooks/use-notes-filters.js");





const defaultOptions = {
  enabled: true,
  params: {}
};
function useNotesSummary(rawOptions = {}) {
  const [filters] = (0,_use_notes_filters__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const options = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    ...defaultOptions,
    ...rawOptions
  }), [rawOptions]);
  const queryParams = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_utils__WEBPACK_IMPORTED_MODULE_2__.normalizeQueryParams)({
    ...filters,
    ...(options.params || {})
  }), [options.params, filters]);
  return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)(['notes/summary', queryParams], async ({
    queryKey: [, params],
    signal
  }) => {
    const {
      data
    } = await window.top.$e.data.get('notes/summary', {
      parent_id: 0,
      ...params
    }, {
      refresh: true,
      signal
    });
    return data.data.map(rawNote => {
      return _models_note_summary__WEBPACK_IMPORTED_MODULE_3__["default"].createFromResponse(rawNote);
    });
  }, {
    keepPreviousData: true,
    enabled: options.enabled
  });
}

/***/ }),

/***/ "../assets/js/app/hooks/use-notes.js":
/*!*******************************************!*\
  !*** ../assets/js/app/hooks/use-notes.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useNotes)
/* harmony export */ });
/* harmony import */ var _models_note__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/note */ "../assets/js/app/models/note.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "../../../node_modules/react-query/es/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "../assets/js/app/utils.js");
/* harmony import */ var _use_notes_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-notes-config */ "../assets/js/app/hooks/use-notes-config.js");
/* harmony import */ var _use_notes_filters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use-notes-filters */ "../assets/js/app/hooks/use-notes-filters.js");






const defaultOptions = {
  enabled: true,
  params: {}
};
function useNotes(rawOptions = {}) {
  const {
    route
  } = (0,_use_notes_config__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const [filters] = (0,_use_notes_filters__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const options = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({
    ...defaultOptions,
    ...rawOptions
  }), [rawOptions]);
  const queryParams = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const routeFilter = route.is_elementor_library ? {
      post_id: route.post_id
    } : {
      route_url: encodeURIComponent(route.url)
    };
    return (0,_utils__WEBPACK_IMPORTED_MODULE_3__.normalizeQueryParams)({
      parent_id: 0,
      order_by: 'last_activity_at',
      order: 'desc',
      ...routeFilter,
      ...filters,
      ...(options.params || {})
    });
  }, [route, filters, options.params]);
  return (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)(['notes', queryParams], async ({
    queryKey: [, params],
    signal
  }) => {
    const {
      data
    } = await window.top.$e.data.get('notes/index', params, {
      refresh: true,
      signal
    });
    return data.data.map(rawNote => {
      return _models_note__WEBPACK_IMPORTED_MODULE_0__["default"].createFromResponse(rawNote);
    });
  }, {
    keepPreviousData: true,
    enabled: options.enabled
  });
}

/***/ }),

/***/ "../assets/js/app/hooks/use-reverse-html-entities.js":
/*!***********************************************************!*\
  !*** ../assets/js/app/hooks/use-reverse-html-entities.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useReverseHtmlEntities: () => (/* binding */ useReverseHtmlEntities)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Reverse PHP's `htmlentities()` function.
 * e.g.: `&lt;a&gt;` will become `<a>`.
 *
 * Used to render escaped HTML characters in JSX.
 *
 * @param {string} escapedHTML
 *
 * @return {string} unescaped HTML
 */
function useReverseHtmlEntities(escapedHTML) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = escapedHTML;
    const {
      value
    } = textarea;
    textarea.remove();
    return value;
  }, [escapedHTML]);
}

/***/ }),

/***/ "../assets/js/app/hooks/use-scroll-into-view.js":
/*!******************************************************!*\
  !*** ../assets/js/app/hooks/use-scroll-into-view.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useScrollIntoView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../assets/js/app/utils.js");



// Hook to scroll into the `ref` view when a condition is truthy.
function useScrollIntoView(condition = true, {
  onlyIfNeeded = true,
  ...scrollOptions
} = {}) {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (condition) {
      /**
       * Defer to wait for React state stack to be empty, and all of the components have finished rendering,
       * since it causes a bug in Chromium based browsers.
       *
       * @see https://stackoverflow.com/questions/68263352/smooth-scroll-bug-in-react-useeffect-hook-only-on-chrome-chromium
       * @see https://stackoverflow.com/questions/59782858/scrollintoview-behavior-smooth-is-broken-in-react
       */
      setTimeout(() => {
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.scrollIntoView)(ref.current, {
          onlyIfNeeded,
          ...scrollOptions
        });
      });
    }
  }, [condition]);
  return ref;
}

/***/ }),

/***/ "../assets/js/app/hooks/use-stoppable-effect.js":
/*!******************************************************!*\
  !*** ../assets/js/app/hooks/use-stoppable-effect.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useStoppableEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Use an effect with an option to stop it.
 *
 * Usage:
 * 		useStoppableEffect( ( stop ) => {
 * 			console.log( 'stuff' );
 *
 * 			if ( a === 1 ) {
 * 				stop();
 * 			}
 * 		}, [ deps ] );
 *
 * @param {Function} effect
 * @param {Array}    deps
 *
 * @return {void}
 */
function useStoppableEffect(effect, deps) {
  const shouldRun = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  const stop = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    shouldRun.current = false;
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (shouldRun.current) {
      effect(stop);
    }
  }, deps);
}

/***/ }),

/***/ "../assets/js/app/hooks/use-user-can.js":
/*!**********************************************!*\
  !*** ../assets/js/app/hooks/use-user-can.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CAPABILITY_CREATE: () => (/* binding */ CAPABILITY_CREATE),
/* harmony export */   CAPABILITY_CREATE_USERS: () => (/* binding */ CAPABILITY_CREATE_USERS),
/* harmony export */   CAPABILITY_DELETE: () => (/* binding */ CAPABILITY_DELETE),
/* harmony export */   CAPABILITY_EDIT: () => (/* binding */ CAPABILITY_EDIT),
/* harmony export */   CAPABILITY_EDIT_USERS: () => (/* binding */ CAPABILITY_EDIT_USERS),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_notes_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-notes-config */ "../assets/js/app/hooks/use-notes-config.js");


const CAPABILITY_CREATE = 'create';
const CAPABILITY_EDIT = 'edit';
const CAPABILITY_DELETE = 'delete';
const CAPABILITY_CREATE_USERS = 'create_users';
const CAPABILITY_EDIT_USERS = 'edit_users';
const useUserCan = (capability, note = null) => {
  const notesConfig = (0,_use_notes_config__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    // Note capabilities.
    if (note) {
      return !!note.userCan[capability];
    }

    // Global capabilities.
    return !!notesConfig.current_user_can[capability];
  }, [capability, note, notesConfig]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUserCan);

/***/ }),

/***/ "../assets/js/app/hooks/use-users.js":
/*!*******************************************!*\
  !*** ../assets/js/app/hooks/use-users.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useUsers)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../assets/js/app/utils.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "../../../node_modules/react-query/es/index.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user */ "../assets/js/app/models/user.js");




const defaultOptions = {
  enabled: true,
  params: {}
};
function useUsers(rawOptions = {}) {
  const options = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    ...defaultOptions,
    ...rawOptions
  }), [rawOptions]);
  const queryParams = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.normalizeQueryParams)(options.params || {});
  }, [options.params]);
  return (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)(['users', queryParams], async ({
    queryKey: [, params],
    signal
  }) => {
    const {
      data
    } = await window.top.$e.data.get('notes/users', params, {
      refresh: true,
      signal
    });
    return data.data.map(user => {
      return _models_user__WEBPACK_IMPORTED_MODULE_3__["default"].createFromResponse(user);
    });
  }, {
    keepPreviousData: true,
    enabled: options.enabled
  });
}

/***/ }),

/***/ "../assets/js/app/hooks/use-viewable-notes.js":
/*!****************************************************!*\
  !*** ../assets/js/app/hooks/use-viewable-notes.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useViewableNotes)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/elements */ "../assets/js/app/context/elements.js");



/**
 * @typedef {import('../models/note')} Note
 */

/**
 * Return a tuple of filtered notes based their visibility to the user in the current page (e.g. have elements).
 * The first item contains the viewable notes and the second is the non-viewable ones.
 *
 * @param {Note[]} notes
 *
 * @return {[Note[], Note[]]} notes
 */
function useViewableNotes(notes) {
  const {
    elements
  } = (0,_context_elements__WEBPACK_IMPORTED_MODULE_1__.useElements)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!notes?.length || !elements?.size) {
      return [[], []];
    }
    const reduced = notes.reduce((carry, note) => {
      const key = elements.has(note.elementId) ? 'viewable' : 'nonViewable';
      carry[key].push(note);
      return carry;
    }, {
      viewable: [],
      nonViewable: []
    });
    return Object.values(reduced);
  }, [notes, elements]);
}

/***/ }),

/***/ "../assets/js/app/hooks/use-watch.js":
/*!*******************************************!*\
  !*** ../assets/js/app/hooks/use-watch.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useWatch)
/* harmony export */ });
const {
  useEffect,
  useRef
} = React;

/**
 * A util to trigger a callback only when the value changed except the first render.
 *
 * @param {Function} callback
 * @param {Array}    deps
 */
function useWatch(callback, deps) {
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    callback();
  }, deps);
}

/***/ }),

/***/ "../assets/js/app/models/base-model.js":
/*!*********************************************!*\
  !*** ../assets/js/app/models/base-model.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseModel)
/* harmony export */ });
class BaseModel {
  /**
   * Using init and not the default constructor because there is a problem to fill the instance
   * dynamically in the constructor.
   *
   * @param {Object} data all the properties
   * @return {BaseModel} Instance of base model
   */
  init(data = {}) {
    Object.entries(data).forEach(([key, value]) => {
      this[key] = value;
    });
    return this;
  }
}

/***/ }),

/***/ "../assets/js/app/models/document.js":
/*!*******************************************!*\
  !*** ../assets/js/app/models/document.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-model */ "../assets/js/app/models/base-model.js");

class Document extends _base_model__WEBPACK_IMPORTED_MODULE_0__["default"] {
  id;
  type;
  typeTitle;

  /**
   * Create a document from server response
   *
   * @param {Object} data
   */
  static createFromResponse(data) {
    return new Document().init({
      id: data.id,
      type: data.type,
      typeTitle: data.type_title
    });
  }
}

/***/ }),

/***/ "../assets/js/app/models/note-summary.js":
/*!***********************************************!*\
  !*** ../assets/js/app/models/note-summary.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NoteSummary)
/* harmony export */ });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-model */ "../assets/js/app/models/base-model.js");

class NoteSummary extends _base_model__WEBPACK_IMPORTED_MODULE_0__["default"] {
  url = '';
  fullURL = '';
  title = '';
  notesCount = 0;

  /**
   * Create a note from server response
   *
   * @param {Object} data
   */
  static createFromResponse(data) {
    return new NoteSummary().init({
      url: data.url,
      fullURL: data.full_url,
      title: data.title,
      notesCount: data.notes_count
    });
  }
}

/***/ }),

/***/ "../assets/js/app/models/note.js":
/*!***************************************!*\
  !*** ../assets/js/app/models/note.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Note)
/* harmony export */ });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-model */ "../assets/js/app/models/base-model.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "../assets/js/app/models/user.js");
/* harmony import */ var _document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./document */ "../assets/js/app/models/document.js");



class Note extends _base_model__WEBPACK_IMPORTED_MODULE_0__["default"] {
  id = null;
  parentId = 0;
  elementId = null;
  content = '';
  position = {
    x: 0,
    y: 0
  };
  repliesCount = 0;
  unreadRepliesCount = 0;
  replies = [];
  author = null;
  readers = [];
  isRead = false;
  isResolved = false;
  routeUrl = '';
  routeTitle = '';
  userCan = {};
  createdAt = null;
  updatedAt = null;
  lastActivityAt = null;

  // Private props
  _formattedLastActivityAt = '';
  _formattedCreatedAt = '';

  /**
   * Create a note from server response
   *
   * @param {Object} data
   */
  static createFromResponse(data) {
    return new Note().init({
      id: data.id,
      parentId: data.parent_id,
      elementId: data.element_id,
      content: data.content,
      position: data.position,
      repliesCount: data.replies_count,
      unreadRepliesCount: data.unread_replies_count,
      replies: data.replies.map(reply => Note.createFromResponse(reply)),
      author: data.author ? _user__WEBPACK_IMPORTED_MODULE_1__["default"].createFromResponse(data.author) : _user__WEBPACK_IMPORTED_MODULE_1__["default"].createDeleted(data.author_display_name),
      document: data.document ? _document__WEBPACK_IMPORTED_MODULE_2__["default"].createFromResponse(data.document) : null,
      readers: data.readers ? data.readers.map(reader => _user__WEBPACK_IMPORTED_MODULE_1__["default"].createFromResponse(reader)) : [],
      isRead: data.is_read,
      isResolved: data.is_resolved,
      routeUrl: data.route_url,
      routeTitle: data.route_title,
      userCan: data.user_can,
      createdAt: new Date(data.created_at),
      updatedAt: new Date(data.updated_at),
      lastActivityAt: new Date(data.last_activity_at)
    });
  }

  /**
   * TODO: Change to WP site settings format.
   *
   * @return {string} Last activity date formatted.
   */
  getFormattedLastActivityAt() {
    if (!this._formattedLastActivityAt) {
      this._formattedLastActivityAt = this.lastActivityAt.toLocaleString();
    }
    return this._formattedLastActivityAt;
  }

  /**
   * TODO: Change to WP site settings format.
   *
   * @return {string} Created at date formatted.
   */
  getFormattedCreatedAt() {
    if (!this._formattedCreatedAt) {
      this._formattedCreatedAt = this.createdAt.toLocaleString();
    }
    return this._formattedCreatedAt;
  }

  /**
   * Get the note deep link.
   *
   * @return {string} url
   */
  getURL() {
    const id = this.isReply() ? this.parentId : this.id;
    return this.constructor.getURL(id);
  }

  /**
   * Get a note deep link by ID.
   *
   * @param {number} id
   *
   * @return {string} url
   */
  static getURL(id) {
    const {
      route
    } = window.top.$e.components.get('notes').config;
    return route.note_url_pattern.replace('{{NOTE_ID}}', id);
  }

  /**
   * Check if the current note or one of its replies are unread.
   *
   * @return {boolean} is unread thread
   */
  isUnreadThread() {
    return this.isThread() && (!this.isRead || this.unreadRepliesCount > 0);
  }

  /**
   * Determine if the Note is a Thread.
   *
   * @return {boolean} - Is thread.
   */
  isThread() {
    return 0 === this.parentId;
  }

  /**
   * Determine if the Note is a Reply.
   *
   * @return {boolean} - Is reply.
   */
  isReply() {
    return !this.isThread();
  }
}

/***/ }),

/***/ "../assets/js/app/models/user.js":
/*!***************************************!*\
  !*** ../assets/js/app/models/user.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ User)
/* harmony export */ });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-model */ "../assets/js/app/models/base-model.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];

class User extends _base_model__WEBPACK_IMPORTED_MODULE_0__["default"] {
  id = null;
  name = '';
  slug = '';
  avatarUrls = {
    24: null,
    48: null,
    96: null
  };
  capabilities = {};

  /**
   * Create a user from server response
   *
   * @param {Object} data
   */
  static createFromResponse(data) {
    return new User().init({
      id: data.id,
      name: data.name,
      slug: data.slug,
      avatarUrls: data.avatar_urls,
      capabilities: {
        notes: {
          read: data.capabilities?.notes?.can_read
        },
        post: {
          edit: data.capabilities?.post?.can_edit
        }
      }
    });
  }

  /**
   * A factory to create a User model when a user was deleted or not exist for some reason.
   *
   * @param {string} name
   * @return {BaseModel} user
   */
  static createDeleted(name = '') {
    const {
      avatar_defaults: avatarUrls
    } = window.top.$e.components.get('notes').config.urls;
    return new User().init({
      name: [name, __('(deleted user)', 'elementor-pro')].join(' '),
      avatarUrls
    });
  }
}

/***/ }),

/***/ "../assets/js/app/query-client.js":
/*!****************************************!*\
  !*** ../assets/js/app/query-client.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-query */ "../../../node_modules/react-query/es/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new react_query__WEBPACK_IMPORTED_MODULE_0__.QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: true
    },
    mutations: {
      retry: 2
    }
  }
}));

/***/ }),

/***/ "../assets/js/app/styles/animation.js":
/*!********************************************!*\
  !*** ../assets/js/app/styles/animation.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fadeOut: () => (/* binding */ fadeOut),
/* harmony export */   slideDownAndFade: () => (/* binding */ slideDownAndFade),
/* harmony export */   slideLeftAndFade: () => (/* binding */ slideLeftAndFade),
/* harmony export */   slideRightAndFade: () => (/* binding */ slideRightAndFade),
/* harmony export */   slideUpAndFade: () => (/* binding */ slideUpAndFade),
/* harmony export */   spin: () => (/* binding */ spin)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");

const slideUpAndFade = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)`
  0% {
	opacity: 0;
	transform: translateY(3px);
  }
  100% {
	opacity: 1;
	transform: translateY(0);
  }
`;
const slideRightAndFade = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)`
  0% {
	opacity: 0;
	transform: translateX(-3px);
  }
  100% {
	opacity: 1;
	transform: translateX(0);
  }
`;
const slideDownAndFade = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)`
  0% {
	opacity: 0;
	transform: translateY(-3px);
  }
  100% {
	opacity: 1;
	transform: translateY(0);
  }
`;
const slideLeftAndFade = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)`
  0% {
	opacity: 0;
	transform: translateX(3px);
  }
  100% {
	opacity: 1;
	transform: translateX(0);
  }
`;
const fadeOut = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)`
  0% {
	opacity: 1;
  }

  100% {
	opacity: 0;
  }
`;
const spin = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)`
  0% {
	transform: rotate(0deg);
  }
  100% {
	transform: rotate(360deg);
  }
`;

/***/ }),

/***/ "../assets/js/app/utils.js":
/*!*********************************!*\
  !*** ../assets/js/app/utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAX_Z_INDEX: () => (/* binding */ MAX_Z_INDEX),
/* harmony export */   extractMentions: () => (/* binding */ extractMentions),
/* harmony export */   isFullyInViewport: () => (/* binding */ isFullyInViewport),
/* harmony export */   normalizeQueryParams: () => (/* binding */ normalizeQueryParams),
/* harmony export */   scrollIntoView: () => (/* binding */ scrollIntoView),
/* harmony export */   submitForm: () => (/* binding */ submitForm)
/* harmony export */ });
/* harmony import */ var _services_rich_text_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/rich-text-parser */ "../assets/js/services/rich-text-parser/index.js");
/* harmony import */ var _services_rich_text_parser_tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/rich-text-parser/tokens */ "../assets/js/services/rich-text-parser/tokens/index.js");



/**
 * Max value for the css property z-index
 *
 * @type {number}
 */
const MAX_Z_INDEX = 2147483647;

/**
 * Extract mentions from string.
 *
 * @param {string} content - Text to extract from.
 *
 * @return {string[]} mentions
 */
function extractMentions(content) {
  const usernames = (0,_services_rich_text_parser__WEBPACK_IMPORTED_MODULE_0__["default"])({
    tokenClasses: [_services_rich_text_parser_tokens__WEBPACK_IMPORTED_MODULE_1__.Mention],
    fallbackTokenClass: false,
    parsePipeFunctions: []
  }).parse(content).map(token => token.username.value);

  // Return only unique values.
  return [...new Set(usernames)];
}

/**
 * Normalize query params object.
 *
 * @param {Object} params - Query params definition.
 *
 * @return {Object} - Normalized query params.
 */
function normalizeQueryParams(params) {
  return Object.entries(params).reduce((queryParams, [param, value]) => {
    // Remove nullish params.
    if (null === value) {
      return queryParams;
    }

    // Convert booleans to 1/0.
    if ('boolean' === typeof value) {
      value = value ? 1 : 0;
    }
    return {
      ...queryParams,
      [param]: value
    };
  }, {});
}

/**
 * Scroll into an element.
 * Returns a promise that will be resolved when the element is in the viewport.
 * TODO: Find a way to resolve the promise after the scroll has finished.
 *
 * @param {HTMLElement} element
 * @param {Object}      object
 * @param {boolean}     object.onlyIfNeeded
 * @param {*}           object.scrollOptions
 * @return {Promise} a promise that will be resolved when the element is in the viewport
 */
function scrollIntoView(element, {
  onlyIfNeeded = true,
  ...scrollOptions
} = {}) {
  if (onlyIfNeeded && isFullyInViewport(element)) {
    return Promise.resolve();
  }
  return new Promise(resolve => {
    observeForFirstIntersection(element, () => {
      resolve();
    });
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
      ...scrollOptions
    });
  });
}

/**
 * Check if an element is fully in viewport.
 *
 * @param {HTMLElement} element
 *
 * @return {boolean} is element fully in the viewport
 */
function isFullyInViewport(element) {
  const {
    top,
    left,
    bottom,
    right
  } = element.getBoundingClientRect();
  const {
    top: parentTop,
    right: parentRight,
    bottom: parentBottom,
    left: parentLeft
  } = element.parentElement.getBoundingClientRect();
  const isInBodyView = top >= 0 && left >= 0 && top <= window.innerHeight && left <= window.innerWidth;
  const isInParentView = top >= parentTop && right <= parentRight && bottom <= parentBottom && left >= parentLeft;
  return isInBodyView && isInParentView;
}

/**
 * Wrap IntersectionObserver for working with single element.
 *
 * @param {HTMLElement} element
 * @param {Function}    callback
 */
function observeForFirstIntersection(element, callback) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    if (entries?.[0]?.isIntersecting) {
      currentObserver.disconnect();
      callback();
    }
  });
  observer.observe(element);
}

/**
 * Programmatically submit a form while triggering React's `onSubmit()` event listener.
 *
 * @see https://stackoverflow.com/a/65667238/3829526
 *
 * @param {HTMLFormElement} form
 *
 * @return {void}
 */
function submitForm(form) {
  form.dispatchEvent(new Event('submit', {
    cancelable: true,
    bubbles: true
  }));
}

/***/ }),

/***/ "../assets/js/services/copy-to-clipboard/index.js":
/*!********************************************************!*\
  !*** ../assets/js/services/copy-to-clipboard/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canCopyToClipboard: () => (/* binding */ canCopyToClipboard),
/* harmony export */   copyToClipboard: () => (/* binding */ copyToClipboard)
/* harmony export */ });
/**
 * Check if there is access to the clipboard API
 * (Usually, when a website doesn't have an SSL certificate, the browser won't expose the clipboard API).
 *
 * @return {boolean} can copy to clipboard?
 */
function canCopyToClipboard() {
  return !!navigator?.clipboard;
}

/**
 * Will copy value to the clipboard
 *
 * @param {string} value
 */
function copyToClipboard(value) {
  if (!canCopyToClipboard()) {
    throw new Error('Cannot copy to clipboard, please make sure you are using SSL in your website.');
  }
  navigator.clipboard.writeText(value);
}

/***/ }),

/***/ "../assets/js/services/rich-text-parser/index.js":
/*!*******************************************************!*\
  !*** ../assets/js/services/rich-text-parser/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createRichTextParser)
/* harmony export */ });
/* harmony import */ var _rich_text_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rich-text-parser */ "../assets/js/services/rich-text-parser/rich-text-parser.js");
/* harmony import */ var _parse_pipe_functions___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse-pipe-functions/ */ "../assets/js/services/rich-text-parser/parse-pipe-functions/index.js");
/* harmony import */ var _tokens___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tokens/ */ "../assets/js/services/rich-text-parser/tokens/index.js");




/**
 * Create a RichTextParser instance, set default tokens, and parse pipe functions.
 *
 * @param {Object}       options
 * @param {Object[]}     options.tokenClasses       - Token classes to tokenize into.
 * @param {Object|false} options.fallbackTokenClass
 * @param {Function[]}   options.parsePipeFunctions - Parsing pipe functions to trigger after basic parsing.
 * @return {RichTextParser} parser
 */
function createRichTextParser({
  tokenClasses,
  fallbackTokenClass,
  parsePipeFunctions
} = {}) {
  const tokenClassesDefaults = [_tokens___WEBPACK_IMPORTED_MODULE_2__.Email, _tokens___WEBPACK_IMPORTED_MODULE_2__.LineBreak, _tokens___WEBPACK_IMPORTED_MODULE_2__.Mention, _tokens___WEBPACK_IMPORTED_MODULE_2__.Url, _tokens___WEBPACK_IMPORTED_MODULE_2__.Wow];
  const fallbackTokenClassDefault = _tokens___WEBPACK_IMPORTED_MODULE_2__.Text;

  // The order here is important!
  const parsePipeFunctionsDefaults = [_parse_pipe_functions___WEBPACK_IMPORTED_MODULE_1__.wrapTokensIntoParagraph, _parse_pipe_functions___WEBPACK_IMPORTED_MODULE_1__.wrapTokensIntoContent];
  return new _rich_text_parser__WEBPACK_IMPORTED_MODULE_0__["default"]({
    tokenClasses: tokenClasses !== null && tokenClasses !== void 0 ? tokenClasses : tokenClassesDefaults,
    fallbackTokenClass: fallbackTokenClass !== null && fallbackTokenClass !== void 0 ? fallbackTokenClass : fallbackTokenClassDefault,
    parsePipeFunctions: parsePipeFunctions !== null && parsePipeFunctions !== void 0 ? parsePipeFunctions : parsePipeFunctionsDefaults
  });
}

/***/ }),

/***/ "../assets/js/services/rich-text-parser/parse-pipe-functions/index.js":
/*!****************************************************************************!*\
  !*** ../assets/js/services/rich-text-parser/parse-pipe-functions/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wrapTokensIntoContent: () => (/* reexport safe */ _wrap_tokens_into_content__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   wrapTokensIntoParagraph: () => (/* reexport safe */ _wrap_tokens_into_paragraph__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _wrap_tokens_into_paragraph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrap-tokens-into-paragraph */ "../assets/js/services/rich-text-parser/parse-pipe-functions/wrap-tokens-into-paragraph.js");
/* harmony import */ var _wrap_tokens_into_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrap-tokens-into-content */ "../assets/js/services/rich-text-parser/parse-pipe-functions/wrap-tokens-into-content.js");



/***/ }),

/***/ "../assets/js/services/rich-text-parser/parse-pipe-functions/wrap-tokens-into-content.js":
/*!***********************************************************************************************!*\
  !*** ../assets/js/services/rich-text-parser/parse-pipe-functions/wrap-tokens-into-content.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ wrapTokensIntoContent)
/* harmony export */ });
/* harmony import */ var _tokens___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tokens/ */ "../assets/js/services/rich-text-parser/tokens/index.js");


/**
 * Wrap tokens tree with one Content token.
 *
 * @param {Object[]} tokens
 *
 * @return {Content} content
 */
function wrapTokensIntoContent(tokens) {
  return _tokens___WEBPACK_IMPORTED_MODULE_0__.Content.create(tokens);
}

/***/ }),

/***/ "../assets/js/services/rich-text-parser/parse-pipe-functions/wrap-tokens-into-paragraph.js":
/*!*************************************************************************************************!*\
  !*** ../assets/js/services/rich-text-parser/parse-pipe-functions/wrap-tokens-into-paragraph.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ wrapTokensIntoParagraph)
/* harmony export */ });
/* harmony import */ var _tokens___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tokens/ */ "../assets/js/services/rich-text-parser/tokens/index.js");


/**
 * Convert LineBreak tokens into Paragraphs.
 * input: [ Text, Text, Email, LineBreak, Text, Text ]
 * output: [
 * 		Paragraph: [ Text, Text, Email ],
 * 		Paragraph: [ Text, Text ]
 * ]
 *
 * @param {Object[]} tokens
 *
 * @return {Object[]} paragraphs
 */
function wrapTokensIntoParagraph(tokens) {
  tokens.push(_tokens___WEBPACK_IMPORTED_MODULE_0__.LineBreak.create());
  return tokens.reduce((carry, token) => {
    let currentToken = token;
    if (token.is(_tokens___WEBPACK_IMPORTED_MODULE_0__.LineBreak)) {
      const lastParagraphIndex = findLastIndex(carry, t => t.is(_tokens___WEBPACK_IMPORTED_MODULE_0__.Paragraph));
      currentToken = _tokens___WEBPACK_IMPORTED_MODULE_0__.Paragraph.create(carry.slice(lastParagraphIndex + 1, carry.length));
      carry = carry.slice(0, lastParagraphIndex + 1);
    }
    carry.push(currentToken);
    return carry;
  }, []);
}

/**
 * Find an index of based on the callback but it runs from last to first item.
 *
 * @param {Array}    array
 * @param {Function} callback
 * @return {number} last index
 */
function findLastIndex(array, callback) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (callback(array[i], i)) {
      return i;
    }
  }
  return -1;
}

/***/ }),

/***/ "../assets/js/services/rich-text-parser/rich-text-parser.js":
/*!******************************************************************!*\
  !*** ../assets/js/services/rich-text-parser/rich-text-parser.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RichTextParser)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "../assets/js/services/rich-text-parser/utils.js");

class RichTextParser {
  tokenClasses;
  fallbackTokenClass;
  parsePipeFunctions;

  /**
   * @param {Object}     options
   * @param {Array}      options.tokenClasses
   * @param {Object}     options.fallbackTokenClass
   * @param {Function[]} options.parsePipeFunctions
   */
  constructor({
    tokenClasses,
    fallbackTokenClass,
    parsePipeFunctions
  } = {}) {
    this.tokenClasses = tokenClasses;
    this.fallbackTokenClass = fallbackTokenClass;
    this.parsePipeFunctions = parsePipeFunctions;
  }

  /**
   * Takes a string and parse it into a meaningful object, based on the configuration that was provided to this class.
   * input: 'This is text and email: test@elementor.com'
   * output: {
   *     type: 'Content',
   *     value: [
   *         {
   *             type: 'Paragraph',
   *             value: [
   *                 { type: 'Text', value: 'This is text and email: ' },
   *                 { type: 'Email', value: 'test@elementor.com' },
   *             ]
   *         }
   *     ]
   * }
   *
   * @param {string} value
   *
   * @return {Object|Array} content
   */
  parse(value) {
    var _this$parsePipeFuncti;
    const lexemes = this.extractLexemes(value),
      tokens = this.tokenize(lexemes);
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pipe)(...((_this$parsePipeFuncti = this.parsePipeFunctions) !== null && _this$parsePipeFuncti !== void 0 ? _this$parsePipeFuncti : []))(tokens);
  }

  /**
   * Split the value into lexemes (an array of strings without the meaning)
   *
   * @param {string} value
   *
   * @return {string[]} lexemes
   */
  extractLexemes(value) {
    return value.trim().split(this.getLexerRegex()).reduce((lexemes, currentLexeme) => {
      if (currentLexeme) {
        lexemes.push(currentLexeme);
      }
      return lexemes;
    }, []);
  }

  /**
   * Get all the array of lexemes and transform them into tokens (An object that represent what the part of string is).
   *
   * @param {string[]} lexemes
   *
   * @return {Object[]} tokens
   */
  tokenize(lexemes) {
    return lexemes.map(lexeme => {
      const TokenClass = this.tokenClasses.find(tc => tc.isToken(lexeme));
      if (!TokenClass) {
        return this.fallbackTokenClass ? this.fallbackTokenClass.create(lexeme) : null;
      }
      return TokenClass.create(lexeme);
    }).filter(lexeme => !!lexeme);
  }

  /**
   * Generate a regex from each token class that was provided.
   *
   * @return {RegExp} regular expression
   */
  getLexerRegex() {
    const patterns = this.tokenClasses.map(tokenClass => tokenClass.getPattern()?.source).filter(pattern => !!pattern);
    return new RegExp(`(${patterns.join('|')})`, 'igm');
  }
}

/***/ }),

/***/ "../assets/js/services/rich-text-parser/tokens/base-token.js":
/*!*******************************************************************!*\
  !*** ../assets/js/services/rich-text-parser/tokens/base-token.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseToken)
/* harmony export */ });
class BaseToken {
  static type = '';
  type;
  value;

  /**
   * @param {string | Array | null} value
   */
  constructor(value) {
    this.value = value;
    this.type = this.constructor.type;
  }

  /**
   * Regex pattern for the lexer.
   *
   * @return {RegExp} regular expression
   */
  static getPattern() {
    return null;
  }

  /**
   * Checks if a lexeme belongs to the current token.
   *
   * @param {string} lexeme
   *
   * @return {boolean} does lexeme belong to the current token
   */
  static isToken(lexeme) {
    return !!lexeme.match(new RegExp(this.getPattern(), 'igm'));
  }

  /**
   * Creates a new Token instance.
   *
   * @param {string | Array | null } value
   *
   * @return {this} token
   */
  static create(value = null) {
    return new this(value);
  }

  /**
   * Check if the current token is instance of the provided token class
   *
   * @param {Object} tokenClass
   *
   * @return {boolean} is a token class instance
   */
  is(tokenClass) {
    return this.type === tokenClass.type;
  }
}

/***/ }),

/***/ "../assets/js/services/rich-text-parser/tokens/content.js":
/*!****************************************************************!*\
  !*** ../assets/js/services/rich-text-parser/tokens/content.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Content)
/* harmony export */ });
/* harmony import */ var _base_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-token */ "../assets/js/services/rich-text-parser/tokens/base-token.js");

class Content extends _base_token__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static type = 'Content';
}

/***/ }),

/***/ "../assets/js/services/rich-text-parser/tokens/email.js":
/*!**************************************************************!*\
  !*** ../assets/js/services/rich-text-parser/tokens/email.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Email)
/* harmony export */ });
/* harmony import */ var _base_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-token */ "../assets/js/services/rich-text-parser/tokens/base-token.js");

class Email extends _base_token__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static type = 'Email';
  static getPattern() {
    return /[\w\-.]+@(?:[\w-]+\.)+[\w-]{2,4}/;
  }
}

/***/ }),

/***/ "../assets/js/services/rich-text-parser/tokens/handle.js":
/*!***************************************************************!*\
  !*** ../assets/js/services/rich-text-parser/tokens/handle.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Handle)
/* harmony export */ });
/* harmony import */ var _base_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-token */ "../assets/js/services/rich-text-parser/tokens/base-token.js");

class Handle extends _base_token__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static type = 'Handle';
}

/***/ }),

/***/ "../assets/js/services/rich-text-parser/tokens/index.js":
/*!**************************************************************!*\
  !*** ../assets/js/services/rich-text-parser/tokens/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Content: () => (/* reexport safe */ _content__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   Email: () => (/* reexport safe */ _email__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   Handle: () => (/* reexport safe */ _handle__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   LineBreak: () => (/* reexport safe */ _line_break__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   Mention: () => (/* reexport safe */ _mention__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   Paragraph: () => (/* reexport safe */ _paragraph__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   Text: () => (/* reexport safe */ _text__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   Url: () => (/* reexport safe */ _url__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   Username: () => (/* reexport safe */ _username__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   Wow: () => (/* reexport safe */ _wow__WEBPACK_IMPORTED_MODULE_9__["default"])
/* harmony export */ });
/* harmony import */ var _email__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email */ "../assets/js/services/rich-text-parser/tokens/email.js");
/* harmony import */ var _line_break__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line-break */ "../assets/js/services/rich-text-parser/tokens/line-break.js");
/* harmony import */ var _paragraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paragraph */ "../assets/js/services/rich-text-parser/tokens/paragraph.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text */ "../assets/js/services/rich-text-parser/tokens/text.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content */ "../assets/js/services/rich-text-parser/tokens/content.js");
/* harmony import */ var _mention__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mention */ "../assets/js/services/rich-text-parser/tokens/mention.js");
/* harmony import */ var _handle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./handle */ "../assets/js/services/rich-text-parser/tokens/handle.js");
/* harmony import */ var _username__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./username */ "../assets/js/services/rich-text-parser/tokens/username.js");
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./url */ "../assets/js/services/rich-text-parser/tokens/url.js");
/* harmony import */ var _wow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./wow */ "../assets/js/services/rich-text-parser/tokens/wow.js");











/***/ }),

/***/ "../assets/js/services/rich-text-parser/tokens/line-break.js":
/*!*******************************************************************!*\
  !*** ../assets/js/services/rich-text-parser/tokens/line-break.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LineBreak)
/* harmony export */ });
/* harmony import */ var _base_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-token */ "../assets/js/services/rich-text-parser/tokens/base-token.js");

class LineBreak extends _base_token__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static type = 'LineBreak';
  constructor(value) {
    super(value || '\n');
  }
  static getPattern() {
    return /(?:\r?\n)/;
  }
}

/***/ }),

/***/ "../assets/js/services/rich-text-parser/tokens/mention.js":
/*!****************************************************************!*\
  !*** ../assets/js/services/rich-text-parser/tokens/mention.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Mention)
/* harmony export */ });
/* harmony import */ var _base_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-token */ "../assets/js/services/rich-text-parser/tokens/base-token.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "../assets/js/services/rich-text-parser/tokens/index.js");


class Mention extends _base_token__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static type = 'Mention';
  static handleChar = '@';
  handle;
  username;
  constructor(value) {
    super(value);
    this.handle = _index__WEBPACK_IMPORTED_MODULE_1__.Handle.create(this.constructor.handleChar);
    this.username = _index__WEBPACK_IMPORTED_MODULE_1__.Username.create(value.replace(this.constructor.handleChar, ''));
  }
  static getPattern() {
    return new RegExp(`\\B${this.handleChar}[\\w\\-]+`);
  }
}

/***/ }),

/***/ "../assets/js/services/rich-text-parser/tokens/paragraph.js":
/*!******************************************************************!*\
  !*** ../assets/js/services/rich-text-parser/tokens/paragraph.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Paragraph)
/* harmony export */ });
/* harmony import */ var _base_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-token */ "../assets/js/services/rich-text-parser/tokens/base-token.js");

class Paragraph extends _base_token__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static type = 'Paragraph';
}

/***/ }),

/***/ "../assets/js/services/rich-text-parser/tokens/text.js":
/*!*************************************************************!*\
  !*** ../assets/js/services/rich-text-parser/tokens/text.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var _base_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-token */ "../assets/js/services/rich-text-parser/tokens/base-token.js");

class Text extends _base_token__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static type = 'Text';
}

/***/ }),

/***/ "../assets/js/services/rich-text-parser/tokens/url.js":
/*!************************************************************!*\
  !*** ../assets/js/services/rich-text-parser/tokens/url.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Url)
/* harmony export */ });
/* harmony import */ var _base_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-token */ "../assets/js/services/rich-text-parser/tokens/base-token.js");

class Url extends _base_token__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static type = 'Url';

  /**
   * @see https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url
   *
   * @return {RegExp} pattern
   */
  static getPattern() {
    return /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)/;
  }
}

/***/ }),

/***/ "../assets/js/services/rich-text-parser/tokens/username.js":
/*!*****************************************************************!*\
  !*** ../assets/js/services/rich-text-parser/tokens/username.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Username)
/* harmony export */ });
/* harmony import */ var _base_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-token */ "../assets/js/services/rich-text-parser/tokens/base-token.js");

class Username extends _base_token__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static type = 'Username';
}

/***/ }),

/***/ "../assets/js/services/rich-text-parser/tokens/wow.js":
/*!************************************************************!*\
  !*** ../assets/js/services/rich-text-parser/tokens/wow.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Wow)
/* harmony export */ });
/* harmony import */ var _base_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-token */ "../assets/js/services/rich-text-parser/tokens/base-token.js");

class Wow extends _base_token__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static type = 'Wow';
  static getPattern() {
    return /(?:(?:\b(?:yay|wow)\b)|🎉)/;
  }
}

/***/ }),

/***/ "../assets/js/services/rich-text-parser/utils.js":
/*!*******************************************************!*\
  !*** ../assets/js/services/rich-text-parser/utils.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pipe: () => (/* binding */ pipe)
/* harmony export */ });
/**
 * A util function to transform data through transform functions
 *
 * @param {Function[]} functions
 * @return {Function} function
 */
function pipe(...functions) {
  return (value, ...args) => functions.reduce((currentValue, currentFunction) => currentFunction(currentValue, ...args), value);
}

/***/ })

}]);
//# sourceMappingURL=notes-app.js.map